---
name: ROUTER
version: 1.0.0
category: core
priority: high
group: Orchestration
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
- Security-sensitive task → SECURITY
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

ROUTER does not prescribe a single fixed sequence for all tasks. The correct order depends on the task. Use the general dependency-order model below as a starting point, then adjust based on the actual task.

General dependency-order model:

1. RESEARCH — gather evidence or verify current state when needed.
2. THINKING — reason about the problem when the answer or approach is not yet clear.
3. DECISION — choose between known alternatives when multiple valid options exist.
4. PLANNING — organize the chosen approach into ordered, verifiable steps.
5. Implementation (e.g. CODING) — carry out the work.
6. REVIEW — inspect the implementation for defects and security concerns.
7. QUALITY — assess the result across multiple quality dimensions when appropriate.
8. VALIDATION — confirm the final result satisfies the original requirements.

Adjust the sequence based on the actual task. For example:

- A simple question may only require RESEARCH and THINKING.
- A documented decision may require RESEARCH, DECISION, and DOCUMENTATION.
- A small code change may only require CODING and VALIDATION.
- A complex feature may require several of these skills.

Do not activate every Skill. Activate the smallest relevant set.

### 6. Re-route When Necessary

If the task changes or new evidence appears:

- Reassess the objective.
- Reassess the active Skills.
- Activate a more appropriate Skill when necessary.
- Deactivate irrelevant Skills.

Deactivation is the orchestrator's responsibility. If a previously activated Skill is no longer relevant, stop using it rather than letting it continue to shape the workflow. Do not continue using an inappropriate workflow merely because it was selected earlier.

### 7. Avoid Conflicting Instructions

When multiple Skills apply:

- Prefer the most specific Skill for the immediate problem.
- Use supporting Skills for their intended concerns.
- Resolve conflicts using the highest-priority applicable instruction.
- Avoid duplicating the same work across Skills.
- When multiple Skills disagree on whether a task is complete, defer to VALIDATION if it is active. If VALIDATION is not active, pause and confirm with the user rather than letting one Skill override the disagreement. Completion disagreement is a signal to verify, not to resolve by preference.

### 8. Complete With Validation

Before considering the task complete:

- Determine whether VALIDATION is required.
- Activate VALIDATION when appropriate.
- Confirm that the requested outcome was actually achieved.

If the agent lacks sufficient information to confirm completion, do not treat uncertainty as success. Either obtain the missing information, restrict the completed portion to what is actually verified, or ask the user what level of confirmation is appropriate. When in doubt, trust the user's judgment about scope and completeness, and verify what can be verified.

## Examples

### Example 1 — Debugging a Build Failure

User reports a build error.

ROUTER should select:

1. DEBUGGING as the primary Skill.
2. RESEARCH if external documentation is required.
3. QUALITY if the fix needs quality assessment.
4. VALIDATION to confirm the fix.

### Example 2 — Building a New Feature

A user requests a complex feature. ROUTER selects a minimal set of Skills that matches the task, not every available Skill. The actual set depends on the task's scope and risk.

A typical minimal sequence for a complex feature:

1. RESEARCH if the feature depends on unfamiliar technologies or external APIs.
2. PLANNING to organize the work into ordered, verifiable steps.
3. THINKING if the implementation approach is ambiguous.
4. DECISION when there are meaningful trade-offs to evaluate (architecture, libraries, patterns).
5. CODING to implement the feature.
6. VALIDATION to confirm the feature works and the original requirement is satisfied.

Supporting Skills are added only when they materially improve the result:

- REVIEW when the implementation carries security, correctness, or integration risk.
- QUALITY when a structured multi-dimensional quality assessment is useful.
- TESTING when regression coverage is needed.
- DOCUMENTATION when the feature or decision must be recorded.

A complex feature does not automatically require all seven Skill types. Simple or well-understood features may need only CODING and VALIDATION. ROUTER's job is to select the smallest set that safely satisfies the task.

Note: The sequence above is a task-specific example for a complex feature, not a fixed template. THINKING and DECISION move earlier, later, or are skipped entirely depending on the task. If the implementation approach is already clear, THINKING may be skipped. If the alternatives are already known before planning, DECISION may come before PLANNING. ROUTER should choose the order that matches the actual task, not copy this example verbatim.

### Example 3 — Comparing Technologies

A user asks which technology should be used.

ROUTER should select:

1. RESEARCH for current technical evidence.
2. THINKING to reason through the implications, constraints, and trade-offs before committing to a choice.
3. DECISION to evaluate the known alternatives and make a recommendation.

Reasoning should precede the decision, not follow it. When the alternatives and their implications are not yet clear, use THINKING first so the decision is based on analyzed evidence rather than on the first plausible option.

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
- [ ] The primary Skill is actually the most relevant skill for the task, not just a plausible one.
- [ ] Supporting Skills are actually relevant.
- [ ] Unnecessary Skills were avoided.
- [ ] Skill dependencies were considered.
- [ ] Conflicting instructions were handled.
- [ ] Routing can change when the task changes.
- [ ] The selected workflow matches the actual task.
- [ ] Final validation is included when appropriate.

When multiple Skills could apply, confirm that the chosen primary Skill best addresses the main objective rather than simply being the first one that came to mind. If the task is ambiguous, prefer THINKING or RESEARCH to reduce uncertainty before committing to a routing decision.

## Related Skills

- MASTER.skill.md
- THINKING.skill.md
- PLANNING.skill.md
- RESEARCH.skill.md
- DECISION.skill.md
- DEBUGGING.skill.md
- REVIEW.skill.md
- SECURITY.skill.md
- QUALITY.skill.md
- DOCUMENTATION.skill.md
- VALIDATION.skill.md