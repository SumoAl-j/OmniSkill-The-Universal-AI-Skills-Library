import fs from "fs";
import path from "path";

const skillsRoot = path.join(process.cwd(), "skills");
const readmePath = path.join(process.cwd(), "README.md");

function getSkillFiles(dir: string): string[] {
  let results: string[] = [];

  for (const item of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, item.name);

    if (item.isDirectory()) {
      results.push(...getSkillFiles(full));
    } else if (item.name.endsWith(".skill.md")) {
      results.push(full);
    }
  }

  return results;
}

const categories = new Map<string, string[]>();

for (const file of getSkillFiles(skillsRoot)) {
  const category = path.basename(path.dirname(file));
  const skill = path.basename(file, ".skill.md");

  if (!categories.has(category)) {
    categories.set(category, []);
  }

  categories.get(category)!.push(skill);
}

let output = `# OmniSkill\n\n`;

output += `## Categories\n\n`;

for (const [category, skills] of categories) {
  output += `- ${category} (${skills.length})\n`;
}

output += `\n`;

for (const [category, skills] of categories) {
  output += `## ${category}\n\n`;

  for (const skill of skills.sort()) {
    output += `- ${skill}\n`;
  }

  output += `\n`;
}

fs.writeFileSync(readmePath, output);

console.log("README generated successfully.");