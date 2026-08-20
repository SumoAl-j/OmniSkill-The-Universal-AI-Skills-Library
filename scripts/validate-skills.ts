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

  // Front Matter
  if (!content.startsWith("---")) {
    missing.push("Front Matter");
  }

  // Metadata
  const metadata = [
    "name:",
    "version:",
    "category:",
    "priority:",
  ];

  for (const item of metadata) {
    if (!content.includes(item)) {
      missing.push(item);
    }
  }

  // Required headings (يقبل # أو ## أو ###)
  for (const section of requiredSections) {
    const regex = new RegExp(`^#{1,6}\\s+${section}$`, "mi");

    if (!regex.test(content)) {
      missing.push(section);
    }
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

if (hasErrors) {
  console.log(pc.red("Validation failed."));
  process.exit(1);
}

console.log(pc.green("All skills are valid."));