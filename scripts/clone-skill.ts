import fs from "fs";
import path from "path";
import pc from "picocolors";

const skillsRoot = path.join(process.cwd(), "skills");

const sourceName = process.argv[2];
const targetName = process.argv[3];

if (!sourceName || !targetName) {
  console.log(
    pc.red("Usage: npm run clone <source-skill> <new-skill>")
  );
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

const sourceMatches = files.filter((file) => {
  const name = path.basename(file, ".skill.md");

  return name.toLowerCase() === sourceName.toLowerCase();
});

if (sourceMatches.length === 0) {
  console.log(pc.red(`Source skill not found: ${sourceName}`));
  process.exit(1);
}

if (sourceMatches.length > 1) {
  console.log(pc.red(`Multiple source skills found: ${sourceName}`));

  for (const file of sourceMatches) {
    console.log(path.relative(process.cwd(), file));
  }

  process.exit(1);
}

const sourcePath = sourceMatches[0];

const sourceRelativePath = path.relative(skillsRoot, sourcePath);
const sourceParts = sourceRelativePath.split(path.sep);

const category =
  sourceParts.length > 1 ? sourceParts[0] : "core";

const cleanTargetName = targetName
  .trim()
  .toLowerCase()
  .replace(/\s+/g, "-");

if (!cleanTargetName) {
  console.log(pc.red("Invalid target skill name."));
  process.exit(1);
}

const targetPath = path.join(
  skillsRoot,
  category,
  `${cleanTargetName}.skill.md`
);

if (fs.existsSync(targetPath)) {
  console.log(
    pc.red(`Skill already exists: ${cleanTargetName}`)
  );
  process.exit(1);
}

let content = fs.readFileSync(sourcePath, "utf8");

content = content.replace(
  /^name:\s*.*$/m,
  `name: ${cleanTargetName}`
);

fs.mkdirSync(path.dirname(targetPath), { recursive: true });

fs.writeFileSync(targetPath, content, "utf8");

console.log();
console.log(
  pc.green("Cloned:"),
  path.relative(process.cwd(), sourcePath)
);
console.log(
  pc.green("Created:"),
  path.relative(process.cwd(), targetPath)
);