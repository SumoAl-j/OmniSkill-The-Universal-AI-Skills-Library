import fs from "fs";
import path from "path";
import pc from "picocolors";

const query = process.argv[2];

if (!query) {
  console.log(pc.red("Usage: npm run search <keyword>"));
  process.exit(1);
}

const skillsRoot = path.join(process.cwd(), "skills");

function getSkillFiles(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];

  let files: string[] = [];

  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      files.push(...getSkillFiles(full));
    } else if (entry.name.endsWith(".skill.md")) {
      files.push(full);
    }
  }

  return files;
}

const files = getSkillFiles(skillsRoot);

const matches = files.filter((file) => {
  const content = fs.readFileSync(file, "utf8").toLowerCase();

  return (
    file.toLowerCase().includes(query.toLowerCase()) ||
    content.includes(query.toLowerCase())
  );
});

if (matches.length === 0) {
  console.log(pc.yellow("No skills found."));
  process.exit(0);
}

console.log(pc.green(`Found ${matches.length} skill(s):\n`));

for (const file of matches) {
  console.log(path.relative(process.cwd(), file));
}