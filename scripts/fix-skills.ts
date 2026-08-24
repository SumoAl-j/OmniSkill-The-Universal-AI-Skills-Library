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
version: 1.0.0
category: ${category}
priority: normal
compatible:
  - ChatGPT
  - Claude
  - Gemini
  - Cursor
  - GitHub Copilot
  - Cline
---

# ${skill}

## Objective

Describe the purpose of this Skill and when it adds value.

## Activation

List the conditions that should trigger this Skill.

## Workflow

1. First step description
2. Second step description
3. Continue with the remaining steps

## Examples

### Example 1

<situation> → <what the Skill should do>

## Validation

- [ ] <what must be verified>

## Related Skills

- <related-skill>.skill.md
`;

  fs.writeFileSync(file, template, "utf8");

  console.log(pc.green("Fixed:"), skill);
}

console.log(pc.cyan("Done."));
