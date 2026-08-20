import fs from "fs";
import path from "path";
import pc from "picocolors";

const skillsRoot = path.join(process.cwd(), "skills");
const exportRoot = path.join(process.cwd(), "exports");

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

const skillFiles = getSkillFiles(skillsRoot);

if (skillFiles.length === 0) {
  console.log(pc.yellow("No skills found."));
  process.exit(0);
}

if (!fs.existsSync(exportRoot)) {
  fs.mkdirSync(exportRoot, { recursive: true });
}

const exportData = skillFiles.map((file) => {
  const relativePath = path.relative(skillsRoot, file);
  const content = fs.readFileSync(file, "utf8");

  return {
    name: path.basename(file, ".skill.md"),
    path: relativePath,
    content,
  };
});

const outputPath = path.join(exportRoot, "skills.json");

fs.writeFileSync(
  outputPath,
  JSON.stringify(exportData, null, 2),
  "utf8"
);

console.log();
console.log(
  pc.green(`Exported ${exportData.length} skill(s) successfully.`)
);
console.log(pc.green("Created:"), outputPath);
