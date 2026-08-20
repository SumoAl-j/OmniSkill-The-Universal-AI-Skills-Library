import fs from "fs";
import path from "path";
import pc from "picocolors";

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

for (const file of files) {
  const content = fs.readFileSync(file, "utf8").trim();

  if (content.length > 10) continue;

  const category = path.basename(path.dirname(file));
  const skill = path.basename(file, ".skill.md");

  const template = `---
name: ${skill}
version: 0.1.0
category: ${category}
priority: normal
---

# ${skill}

# Objective

Describe the purpose of this Skill.

# Activation

When should this Skill be activated?

# Workflow

1.
2.
3.

# Examples

## Example 1

...

# Validation

- [ ]

# Related Skills

-
`;

  fs.writeFileSync(file, template, "utf8");

  console.log(pc.green("Fixed:"), skill);
}

console.log(pc.cyan("Done."));