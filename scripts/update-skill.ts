import fs from "fs";
import path from "path";
import pc from "picocolors";

const skillsRoot = path.join(process.cwd(), "skills");
const skillName = process.argv[2];

if (!skillName) {
  console.log(pc.red("Usage: npm run update <skill-name>"));
  process.exit(1);
}

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

const matches = files.filter((file) => {
  const fileName = path.basename(file, ".skill.md");

  return fileName.toLowerCase() === skillName.toLowerCase();
});

if (matches.length === 0) {
  console.log(pc.red(`Skill not found: ${skillName}`));
  process.exit(1);
}

if (matches.length > 1) {
  console.log(pc.red(`Multiple skills found: ${skillName}`));

  for (const file of matches) {
    console.log(path.relative(process.cwd(), file));
  }

  process.exit(1);
}

const filePath = matches[0];

const content = fs.readFileSync(filePath, "utf8");

const updatedContent = content.replace(
  /^(description:\s*).*$/m,
  `$1Updated OmniSkill skill.`
);

if (updatedContent === content) {
  console.log(
    pc.yellow("No description field found. Adding one to the front matter.")
  );

  const result = content.replace(
    /^---\r?\n/,
    `---\r\ndescription: Updated OmniSkill skill.\r\n`
  );

  fs.writeFileSync(filePath, result, "utf8");
} else {
  fs.writeFileSync(filePath, updatedContent, "utf8");
}

console.log();
console.log(pc.green("Updated:"), path.relative(process.cwd(), filePath));
