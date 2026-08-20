import fs from "fs";
import path from "path";
import pc from "picocolors";

const skillsRoot = path.join(process.cwd(), "skills");
const importPath = path.join(process.cwd(), "exports", "skills.json");

if (!fs.existsSync(importPath)) {
  console.log(pc.red("Import file not found: exports/skills.json"));
  process.exit(1);
}

const raw = fs.readFileSync(importPath, "utf8");

let skills: unknown;

try {
  skills = JSON.parse(raw);
} catch {
  console.log(pc.red("Invalid JSON file."));
  process.exit(1);
}

if (!Array.isArray(skills)) {
  console.log(pc.red("Invalid skills export format."));
  process.exit(1);
}

let imported = 0;
let skipped = 0;

for (const item of skills) {
  if (
    typeof item !== "object" ||
    item === null ||
    typeof (item as { name?: unknown }).name !== "string" ||
    typeof (item as { path?: unknown }).path !== "string" ||
    typeof (item as { content?: unknown }).content !== "string"
  ) {
    skipped++;
    continue;
  }

  const skill = item as {
    name: string;
    path: string;
    content: string;
  };

  const relativePath = skill.path.replace(/^[/\\]+/, "");

  if (
    relativePath.includes("..") ||
    path.isAbsolute(relativePath)
  ) {
    skipped++;
    continue;
  }

  const filePath = path.join(skillsRoot, relativePath);

  fs.mkdirSync(path.dirname(filePath), { recursive: true });

  fs.writeFileSync(filePath, skill.content, "utf8");

  imported++;

  console.log(
    pc.green("Imported:"),
    path.relative(process.cwd(), filePath)
  );
}

console.log();
console.log(pc.green(`Imported: ${imported}`));
console.log(pc.yellow(`Skipped: ${skipped}`));