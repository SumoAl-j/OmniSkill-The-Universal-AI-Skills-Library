import fs from "fs";
import path from "path";
import pc from "picocolors";

const skillsRoot = path.join(process.cwd(), "skills");

const requiredSections = [
  "Objective",
  "Activation",
  "Workflow",
  "Examples",
  "Validation",
  "Related Skills",
];

function getAllSkillFiles(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];

  const entries = fs.readdirSync(dir, { withFileTypes: true });
  let files: string[] = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...getAllSkillFiles(fullPath));
    } else if (entry.name.endsWith(".skill.md")) {
      files.push(fullPath);
    }
  }

  return files;
}

const skillFiles = getAllSkillFiles(skillsRoot);

if (skillFiles.length === 0) {
  console.log(pc.yellow("No skills found."));
  process.exit(0);
}

let hasErrors = false;

for (const file of skillFiles) {
  const content = fs.readFileSync(file, "utf8");
  const missing: string[] = [];

  if (!content.startsWith("---")) {
    missing.push("Front Matter");
  }

  const metadata = [
    "name:",
    "version:",
    "category:",
    "priority:",
    "group:",
    "compatible:",
  ];

  for (const item of metadata) {
    if (!content.includes(item)) missing.push(item);
  }

  for (const section of requiredSections) {
    const regex = new RegExp(`^#{1,6}\\s+${section}$`, "mi");
    if (!regex.test(content)) missing.push(section);
  }

  if (missing.length === 0) {
    console.log(pc.green("✔"), path.basename(file));
  } else {
    hasErrors = true;
    console.log(pc.red("✖"), path.basename(file));
    for (const item of missing) {
      console.log(pc.yellow("Missing:"), item);
    }
    console.log();
  }
}

// ── P2-8: Safety Authoring Guard ────────────────────────────────────────────
// Conservative static check: skills whose Workflow contains clear destructive
// indicators must reference "Pre-Action Safety Check" (MASTER skill).
//
// Scope: Workflow section only. Fenced code blocks ignored.
// 17 patterns reduced to 11 after removing duplicates covered by broader regexes.

const destructivePatterns: { re: RegExp; desc: string }[] = [
  { re: /\bDROP\s+(TABLE|DATABASE|SCHEMA|INDEX|VIEW|TRIGGER|FUNCTION|PROCEDURE|COLUMN|CONSTRAINT)\b/i, desc: "DROP operation" },
  { re: /\bTRUNCATE\s+(TABLE\s+)?\w+/i, desc: "TRUNCATE" },
  { re: /\bDELETE\s+FROM\s+\w+\b(?!\s+WHERE\b)/i, desc: "DELETE without WHERE" },
  { re: /\bALTER\s+TABLE\s+\w+\s+DROP\s+(COLUMN|CONSTRAINT)\b/i, desc: "ALTER TABLE DROP COLUMN/CONSTRAINT" },
  { re: /\bgit\s+push\s+(--force|-f)\b/i, desc: "git push --force/-f" },
  { re: /\bgit\s+branch\s+-D\b/i, desc: "git branch -D" },
  { re: /\bgit\s+branch\s+--delete\s+-f\b/i, desc: "git branch --delete -f" },
  { re: /\bgit\s+reset\s+--hard\b/i, desc: "git reset --hard" },
  { re: /\bgit\s+clean\s+-fdx\b/i, desc: "git clean -fdx" },
  { re: /\brm\s+-rf\s+/i, desc: "rm -rf" },
  { re: /\bforece?d\s+(stop|restart|shutdown|kill|destroy|delete)\b/i, desc: "forced destructive operation" },
];

function extractWorkflowSection(content: string): string {
  const m = content.match(/^##\s+Workflow$/m);
  if (!m) return "";
  const start = m.index! + m[0].length;
  const rest = content.slice(start);
  const next = rest.match(/^#{1,6}\s+/m);
  return next ? content.slice(start, start + next.index!) : rest;
}

function stripCodeBlocks(text: string): string {
  return text.replace(/```[\s\S]*?```/g, "");
}

function hasSafetyRef(content: string): boolean {
  return content.includes("Pre-Action Safety Check") || content.includes("pre-action safety check");
}

console.log();
console.log(pc.bold(pc.cyan("─── P2-8: Safety Authoring Guard ───")));
console.log();

for (const file of skillFiles) {
  const content = fs.readFileSync(file, "utf8");
  if (hasSafetyRef(content)) continue;

  const workflow = stripCodeBlocks(extractWorkflowSection(content));
  const hits = destructivePatterns.filter(({ re }) => re.test(workflow));

  if (hits.length > 0) {
    hasErrors = true;
    console.log(pc.red("✖"), path.basename(file));
    console.log(pc.yellow("Missing: Pre-Action Safety Check reference for:"));
    for (const { desc } of hits) console.log(`  - ${desc}`);
    console.log(pc.yellow('Add a reference to "Pre-Action Safety Check" (MASTER skill) in the Workflow section.'));
    console.log();
  }
}

// ── P2-10: Handoff Consistency Guard ────────────────────────────────────────
// Minimal informational check: THINKING and DECISION cross-reference each other
// and contain progress-oriented handoff language. Does NOT provide runtime loop
// detection.

console.log();
console.log(pc.bold(pc.cyan("─── P2-10: Handoff Consistency Guard ───")));
console.log();

const thinkingFile = skillFiles.find(
  (f) => path.basename(f, ".skill.md").toLowerCase() === "thinking"
);
const decisionFile = skillFiles.find(
  (f) => path.basename(f, ".skill.md").toLowerCase() === "decision"
);

if (thinkingFile && decisionFile) {
  const thinking = fs.readFileSync(thinkingFile, "utf8");
  const decision = fs.readFileSync(decisionFile, "utf8");

  // THINKING → must reference DECISION + contain progress-oriented handoff language
  const thinkingIssues: string[] = [];
  if (!thinking.includes("DECISION")) {
    thinkingIssues.push("Missing explicit reference to DECISION in skill text");
  }
  if (
    !/\b(handoff|pass\s+.*\bto\b|pass\s+.*alternatives|narrow\s+.*field)\b/i.test(
      thinking
    )
  ) {
    thinkingIssues.push(
      "Missing progress-oriented handoff language (e.g. 'handoff', 'pass to DECISION', 'narrow the field')"
    );
  }

  // DECISION → must reference THINKING + contain progress-oriented handoff language
  const decisionIssues: string[] = [];
  if (!decision.includes("THINKING")) {
    decisionIssues.push("Missing explicit reference to THINKING in skill text");
  }
  if (
    !/\b(handoff|hand\s+back|return(?:ing)?\s+to\s+THINKING|not\s+ready|progress(?:ed)?)\b/i.test(
      decision
    )
  ) {
    decisionIssues.push(
      "Missing progress-oriented handoff language (e.g. 'hand back to THINKING', 'return to THINKING', 'not ready', 'progress')"
    );
  }

  if (thinkingIssues.length === 0) {
    console.log(pc.green("✔"), path.basename(thinkingFile), pc.dim("- handoff to DECISION is documented"));
  } else {
    hasErrors = true;
    console.log(pc.red("✖"), path.basename(thinkingFile));
    for (const issue of thinkingIssues) console.log(pc.yellow("  -"), issue);
    console.log();
  }

  if (decisionIssues.length === 0) {
    console.log(pc.green("✔"), path.basename(decisionFile), pc.dim("- handoff back to THINKING is documented"));
  } else {
    hasErrors = true;
    console.log(pc.red("✖"), path.basename(decisionFile));
    for (const issue of decisionIssues) console.log(pc.yellow("  -"), issue);
    console.log();
  }
} else {
  console.log(
    pc.yellow("⚠"),
    "THINKING.skill.md and/or DECISION.skill.md not found; skipping P2-10 check."
  );
  console.log();
}

// ── Final result ─────────────────────────────────────────────────────────────

if (hasErrors) {
  console.log(pc.red("Validation failed."));
  process.exit(1);
}

console.log();
console.log(pc.green("All skills are valid."));
