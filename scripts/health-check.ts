import fs from "fs";
import path from "path";
import pc from "picocolors";

const root = process.cwd();
const skillsRoot = path.join(root, "skills");
const scriptsRoot = path.join(root, "scripts");

const requiredScripts = [
  "create-skill.ts",
  "validate-skills.ts",
  "fix-skills.ts",
  "search-skills.ts",
  "update-skill.ts",
  "delete-skill.ts",
  "export-skills.ts",
  "import-skills.ts",
  "stats-skills.ts",
  "clone-skill.ts",
  "duplicate-check.ts",
  "build-docs.ts",
  "new-release.ts",
];

function getSkillFiles(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];

  let files: string[] = [];

  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      files.push(...getSkillFiles(fullPath));
    } else if (entry.name.endsWith(".skill.md")) {
      files.push(fullPath);
    }
  }

  return files;
}

let failed = false;

console.log();
console.log(pc.cyan("OmniSkill Health Check"));
console.log();

if (!fs.existsSync(skillsRoot)) {
  console.log(pc.red("✖ skills folder missing"));
  failed = true;
} else {
  console.log(pc.green("✔ skills folder"));
}

if (!fs.existsSync(scriptsRoot)) {
  console.log(pc.red("✖ scripts folder missing"));
  failed = true;
} else {
  console.log(pc.green("✔ scripts folder"));
}

console.log();
console.log(pc.cyan("Scripts:"));

for (const script of requiredScripts) {
  const filePath = path.join(scriptsRoot, script);

  if (fs.existsSync(filePath)) {
    console.log(pc.green(`✔ ${script}`));
  } else {
    console.log(pc.red(`✖ ${script}`));
    failed = true;
  }
}

const skillFiles = getSkillFiles(skillsRoot);

console.log();
console.log(pc.cyan("Skills:"));
console.log(pc.green(`✔ ${skillFiles.length} skill(s) found`));

const packagePath = path.join(root, "package.json");

if (!fs.existsSync(packagePath)) {
  console.log(pc.red("✖ package.json missing"));
  failed = true;
} else {
  console.log(pc.green("✔ package.json"));
}

const readmePath = path.join(root, "README.md");

if (!fs.existsSync(readmePath)) {
  console.log(pc.yellow("⚠ README.md missing"));
} else {
  console.log(pc.green("✔ README.md"));
}

const exportsPath = path.join(root, "exports", "skills.json");

if (!fs.existsSync(exportsPath)) {
  console.log(pc.yellow("⚠ exports/skills.json missing"));
} else {
  console.log(pc.green("✔ exports/skills.json"));
}

console.log();

if (failed) {
  console.log(pc.red("Health check failed."));
  process.exit(1);
}

console.log(pc.green("Health check passed."));