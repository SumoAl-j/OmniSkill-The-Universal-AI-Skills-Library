---
name: ROUTER
version: 1.0.0
category: core
priority: high
alwaysApply: false
compatible:
  - ChatGPT
  - Claude
  - Gemini
  - Cursor
  - GitHub Copilot
  - Cline
---

# ROUTER

## Objective

Select and coordinate the appropriate Skills for a task based on its objective, context, requirements, dependencies, and current state.

ROUTER should activate the smallest relevant set of Skills while ensuring that important concerns are not missed.

## Activation

Activate ROUTER when:

- A task could require multiple Skills.
- The correct workflow is not immediately obvious.
- A request spans multiple technical areas.
- Several Skills may apply simultaneously.
- A task needs coordination between research, planning, implementation, debugging, review, or validation.
- The current task changes and a different Skill becomes more appropriate.

## Workflow

### 1. Understand the Request

Identify:

- Primary objective
- Requested outcome
- Constraints
- Context
- Current project state
- Required output

Do not route based only on keywords.

### 2. Identify Relevant Skills

Consider the available Skills and determine which ones directly apply.

Typical mappings include:

- Debugging problem → DEBUGGING
- Research question → RESEARCH
- Complex reasoning → THINKING
- Multi-step task → PLANNING
- Technical choice → DECISION
- Documentation work → DOCUMENTATION
- Quality assessment → QUALITY
- Code or implementation review → REVIEW
- Final correctness checks → VALIDATION

### 3. Select the Primary Skill

Choose the Skill that most directly addresses the main objective.

The primary Skill should determine the main workflow.

### 4. Add Supporting Skills

Activate supporting Skills only when they materially improve the result.

Examples:

- RESEARCH + DECISION
- PLANNING + THINKING
- DEBUGGING + RESEARCH
- REVIEW + QUALITY
- DOCUMENTATION + VALIDATION

Avoid activating every Skill unnecessarily.

### 5. Respect Dependencies

If one Skill depends on another, follow the appropriate order.

For example:

1. RESEARCH
2. DECISION
3. PLANNING
4. CODING
5. REVIEW
6. VALIDATION

Adjust the sequence based on the actual task.

### 6. Re-route When Necessary

If the task changes or new evidence appears:

- Reassess the objective.
- Reassess the active Skills.
- Activate a more appropriate Skill when necessary.
- Deactivate irrelevant Skills.

Do not continue using an inappropriate workflow merely because it was selected earlier.

### 7. Avoid Conflicting Instructions

When multiple Skills apply:

- Prefer the most specific Skill for the immediate problem.
- Use supporting Skills for their intended concerns.
- Resolve conflicts using the highest-priority applicable instruction.
- Avoid duplicating the same work across Skills.

### 8. Complete With Validation

Before considering the task complete:

- Determine whether VALIDATION is required.
- Activate VALIDATION when appropriate.
- Confirm that the requested outcome was actually achieved.

## Examples

### Example 1 — Debugging a Build Failure

User reports a build error.

ROUTER should select:

1. DEBUGGING as the primary Skill.
2. RESEARCH if external documentation is required.
3. QUALITY if the fix needs quality assessment.
4. VALIDATION to confirm the fix.

### Example 2 — Building a New Feature

A user requests a complex feature.

ROUTER should select:

1. PLANNING
2. THINKING
3. DECISION when architectural choices are required.
4. CODING
5. REVIEW
6. QUALITY
7. VALIDATION

Only activate Skills that are actually needed.

### Example 3 — Comparing Technologies

A user asks which technology should be used.

ROUTER should select:

1. RESEARCH for current technical evidence.
2. DECISION for comparison and recommendation.
3. THINKING for complex reasoning when necessary.

### Example 4 — Documentation Update

A user asks to update project documentation.

ROUTER should select:

1. DOCUMENTATION
2. RESEARCH if project behavior needs verification.
3. VALIDATION to confirm the documentation structure and content.

## Validation

Before completing a routing task, verify:

- [ ] The primary objective was identified.
- [ ] Relevant Skills were considered.
- [ ] A primary Skill was selected.
- [ ] Supporting Skills are actually relevant.
- [ ] Unnecessary Skills were avoided.
- [ ] Skill dependencies were considered.
- [ ] Conflicting instructions were handled.
- [ ] Routing can change when the task changes.
- [ ] The selected workflow matches the actual task.
- [ ] Final validation is included when appropriate.

## Related Skills

- MASTER.skill.md
- THINKING.skill.md
- PLANNING.skill.md
- RESEARCH.skill.md
- DECISION.skill.md
- DEBUGGING.skill.md
- REVIEW.skill.md
- QUALITY.skill.md
- DOCUMENTATION.skill.md
- VALIDATION.skill.md