import fs from "fs";
import path from "path";
import pc from "picocolors";

const skillsRoot = path.join(process.cwd(), "skills");

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

const files = getSkillFiles(skillsRoot);

if (files.length === 0) {
  console.log(pc.yellow("No skills found."));
  process.exit(0);
}

const categories = new Map<string, number>();

for (const file of files) {
  const relativePath = path.relative(skillsRoot, file);
  const parts = relativePath.split(path.sep);

  const category = parts.length > 1 ? parts[0] : "uncategorized";

  categories.set(
    category,
    (categories.get(category) ?? 0) + 1
  );
}

console.log();
console.log(pc.cyan("OmniSkill Statistics"));
console.log();

console.log(pc.green("Total Skills:"), files.length);
console.log();

console.log(pc.cyan("By Category:"));

for (const [category, count] of categories) {
  console.log(`  ${category}: ${count}`);
}

console.log();