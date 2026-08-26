---
name: MEMORY
version: 1.0.0
category: core
priority: high
group: Memory
alwaysApply: false
compatible:
  - ChatGPT
  - Claude
  - Gemini
  - Cursor
  - GitHub Copilot
  - Cline
---

# MEMORY

## Objective

Manage persistent project and user context accurately, safely, and efficiently.

MEMORY should preserve information that is genuinely useful for future work while avoiding unnecessary, temporary, sensitive, or unverified information.

## Activation

Activate MEMORY when:

- Important project context needs to be preserved.
- A user explicitly asks to remember or forget information.
- Previous decisions affect the current task.
- Existing project conventions need to be reused.
- A long-running project requires continuity.
- Previously established constraints or preferences materially affect the task.

## Workflow

### 1. Identify Memory Candidates

Consider information such as:

- Project architecture
- Technical decisions
- Established conventions
- Important constraints
- Long-term goals
- Reusable workflows
- User preferences relevant to future tasks
- Previous decisions that affect current work

Do not store information merely because it appeared in a conversation.

### 2. Evaluate Relevance

Before preserving information, determine whether it is:

- Useful in future interactions.
- Likely to remain valid.
- Relevant to the project or workflow.
- Specific enough to be useful.

Temporary details should normally not be retained.

### 3. Verify the Information

Distinguish between:

- Verified facts
- User-provided preferences
- Decisions
- Assumptions
- Uncertain information

Do not convert assumptions into permanent facts.

### 4. Avoid Unnecessary Storage

Do not retain:

- Temporary debugging output
- One-time commands
- Irrelevant conversation details
- Duplicate information
- Secrets
- Passwords
- API keys
- Authentication tokens
- Private credentials

Sensitive information should never be stored unless the system explicitly permits it and the user clearly requests it.

### 5. Update Existing Memory

When new information conflicts with existing information:

1. Identify the conflict.
2. Prefer newer verified information.
3. Remove or replace outdated information when appropriate.
4. Avoid keeping contradictory versions as if both were current.

### 6. Handle Explicit Forget Requests

When the user asks to forget information:

- Identify exactly what should be removed.
- Do not remove unrelated information.
- Confirm the intended scope when necessary.

### 7. Use Memory Carefully

When retrieving stored context:

- Use only information relevant to the current task.
- Do not expose unnecessary private details.
- Do not assume stored information is always current.
- Re-verify information when accuracy matters.

### 8. Maintain Minimal Context

Prefer the smallest amount of persistent context that preserves useful continuity.

Memory should improve future work, not become an uncontrolled archive.

## Examples

### Example 1 — Project Convention

A project consistently uses a particular folder structure.

MEMORY may preserve that convention because it affects future development tasks.

### Example 2 — User Preference

A user explicitly asks that future technical explanations use concise step-by-step instructions.

MEMORY may preserve that preference because it can improve future interactions.

### Example 3 — Outdated Decision

A project previously used one database but later migrated to another.

MEMORY should treat the newer verified architecture as current and avoid continuing to recommend the old database.

## Validation

Before completing a memory-related task, verify:

- [ ] The information is genuinely useful for future work.
- [ ] The information is relevant.
- [ ] The information is sufficiently stable.
- [ ] Facts are distinguished from assumptions.
- [ ] Duplicate information is avoided.
- [ ] Outdated information is replaced when appropriate.
- [ ] Secrets and credentials are not stored.
- [ ] Explicit forget requests are respected.
- [ ] Only relevant memory is used for the current task.
- [ ] Unnecessary private information is not exposed.

## Related Skills

- MASTER.skill.md
- THINKING.skill.md
- DECISION.skill.md
- RESEARCH.skill.md
- DOCUMENTATION.skill.md
- REVIEW.skill.md
- VALIDATION.skill.md