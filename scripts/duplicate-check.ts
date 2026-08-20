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
const names = new Map<string, string[]>();

for (const file of files) {
  const name = path
    .basename(file, ".skill.md")
    .trim()
    .toLowerCase();

  const existing = names.get(name) ?? [];
  existing.push(file);
  names.set(name, existing);
}

const duplicates = [...names.entries()].filter(
  ([, matches]) => matches.length > 1
);

console.log();

if (duplicates.length === 0) {
  console.log(pc.green("No duplicate skills found."));
  console.log(pc.green(`Checked: ${files.length} skill(s)`));
  process.exit(0);
}

console.log(
  pc.red(`Found ${duplicates.length} duplicate skill name(s):`)
);

console.log();

for (const [name, matches] of duplicates) {
  console.log(pc.yellow(name));

  for (const file of matches) {
    console.log(`  ${path.relative(process.cwd(), file)}`);
  }

  console.log();
}

process.exit(1);