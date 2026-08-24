import {
  intro,
  outro,
  text,
  select,
  isCancel,
  cancel,
} from "@clack/prompts";
import pc from "picocolors";
import fs from "fs";
import path from "path";

async function main() {
  intro(pc.cyan("🚀 OmniSkill Generator"));

  const name = await text({
    message: "Skill name:",
    placeholder: "React",
  });

  if (isCancel(name)) {
    cancel("Operation cancelled.");
    process.exit(0);
  }

  const category = await select({
    message: "Choose category",
    options: [
      { value: "core", label: "Core" },
      { value: "coding", label: "Coding" },
      { value: "design", label: "Design" },
      { value: "cybersecurity", label: "Cybersecurity" },
      { value: "ai", label: "AI" },
      { value: "business", label: "Business" },
    ],
  });

  if (isCancel(category)) {
    cancel("Operation cancelled.");
    process.exit(0);
  }

  const folder = path.join(process.cwd(), "skills", String(category));

  if (!fs.existsSync(folder)) {
    fs.mkdirSync(folder, { recursive: true });
  }

  const skillName = String(name)
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-");

  const fileName = `${skillName}.skill.md`;
  const filePath = path.join(folder, fileName);

  if (fs.existsSync(filePath)) {
    console.log(pc.red("Skill already exists."));
    process.exit(1);
  }

  const content = `---
name: ${skillName}
version: 0.1.0
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

  fs.writeFileSync(filePath, content, "utf8");

  console.log();
  console.log(pc.green("Created:"), filePath);

  outro("Skill generated successfully!");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
