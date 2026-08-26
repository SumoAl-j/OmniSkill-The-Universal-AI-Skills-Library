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

// Read the `group` field from front matter using a targeted regex.
// This avoids a full YAML parse and stays robust against colons in other values.
function readGroupField(content: string): string | undefined {
  const match = content.match(/^group:\s*(.+)$/m);
  if (!match) return undefined;
  const value = match[1].trim();
  return value || undefined; // empty/whitespace → undefined → missing
}

// Discover all skill files and read their declared group from front matter.
const allSkillFiles = getSkillFiles(skillsRoot);
const groups: Map<string, string[]> = new Map();
const missing: string[] = [];

for (const file of allSkillFiles) {
  const name = path.basename(file, ".skill.md");
  const content = fs.readFileSync(file, "utf8");
  const group = readGroupField(content);

  if (!group) {
    missing.push(name);
    continue;
  }

  if (!groups.has(group)) groups.set(group, []);
  groups.get(group)!.push(name);
}

// Fail loudly if any skill is missing group metadata.
if (missing.length > 0) {
  console.error("ERROR: The following skills have no 'group' field in front matter:");
  for (const name of missing) console.error(`  ${name}`);
  console.error("\nAdd a 'group' field to each skill's front matter, e.g.:");
  console.error("  group: Implementation");
  process.exit(1);
}

// Deterministic group order: alphabetical by group name.
const groupOrder = [...groups.keys()].sort();

// Build README.
let output = "# OmniSkill\n\n";
output += "## Groups\n\n";
for (const group of groupOrder) {
  output += `- ${group} (${groups.get(group)!.length})\n`;
}
output += "\n";

for (const group of groupOrder) {
  const names = groups.get(group)!.slice().sort((a, b) =>
    a.toUpperCase().localeCompare(b.toUpperCase())
  );

  output += `## ${group}\n\n`;
  for (const name of names) {
    output += `- ${name}\n`;
  }
  output += "\n";
}

fs.writeFileSync(readmePath, output);
console.log("README generated successfully.");