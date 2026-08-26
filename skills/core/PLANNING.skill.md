---
name: PLANNING
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

# PLANNING

## Objective

Create practical, ordered, and achievable plans for completing technical tasks and projects.

PLANNING should transform a goal into clear actions while accounting for dependencies, constraints, risks, verification, and the desired final outcome.

## Activation

Activate PLANNING when:

- A task contains multiple steps.
- A project needs a roadmap.
- Several tasks have dependencies.
- Implementation needs to be organized before execution.
- The user needs a sequence of actions.
- A complex problem needs to be broken into smaller tasks.
- A project needs milestones or phases.

## Workflow

### 1. Define the Goal

Identify:

- Desired outcome
- Scope
- Success criteria
- Important constraints
- Deadline when relevant

The final goal should be specific enough to verify.

### 2. Assess the Current State

Determine:

- What already exists.
- What has already been completed.
- What is missing.
- Existing architecture or structure.
- Available tools and resources.
- Known blockers.

Do not plan work that has already been completed.

### 3. Break the Goal Into Tasks

Divide the goal into logical tasks.

Each task should be:

- Specific
- Actionable
- Understandable
- Verifiable

Avoid vague tasks such as "improve the project" without defining what must actually change.

### 4. Identify Dependencies

Determine which tasks depend on others.

Prioritize:

1. Blockers
2. Required foundations
3. Core implementation
4. Integration
5. Testing
6. Documentation
7. Cleanup and optimization

Do not execute dependent work before its prerequisites are complete.

### 5. Choose the Execution Order

Create the shortest practical sequence that safely reaches the goal.

Group related tasks when doing so reduces unnecessary context switching.

### 6. Define Verification

For important tasks, define how completion will be verified.

Examples:

- Tests pass.
- Build succeeds.
- Validation succeeds.
- Lint succeeds.
- Feature works as expected.
- Required files exist.
- API returns the expected response.

### 7. Identify Risks

Consider:

- Technical blockers
- Dependency conflicts
- Security risks
- Compatibility problems
- Scope creep
- Missing requirements
- Unverified assumptions

Add mitigation steps when risks are significant.

### 8. Execute Incrementally

Prefer completing and verifying logical milestones rather than making many unverified changes at once.

After an important milestone:

1. Verify the result.
2. Update the plan if necessary.
3. Continue with the next dependency.

### 9. Close the Plan

At completion:

- Verify the final success criteria.
- Confirm no required task was skipped.
- Record important remaining limitations.
- Identify useful follow-up work only when necessary.

## Examples

### Example 1 — Building a Feature

A project needs a new authentication feature.

PLANNING should organize work into stages such as:

1. Inspect existing authentication architecture.
2. Define requirements.
3. Design the authentication flow.
4. Implement backend logic.
5. Implement frontend integration.
6. Add validation and security controls.
7. Add tests.
8. Run build and lint checks.
9. Document the feature.

### Example 2 — Fixing a Complex Project

A project contains multiple errors.

PLANNING should:

1. Identify all failures.
2. Separate independent problems.
3. Identify blockers.
4. Fix foundational issues first.
5. Verify each fix.
6. Continue with dependent problems.
7. Run full validation at the end.

### Example 3 — Release Preparation

A project is ready for release.

PLANNING should verify:

1. Code quality.
2. Tests.
3. Build.
4. Dependencies.
5. Security configuration.
6. Documentation.
7. Versioning.
8. Release artifacts.
9. Final validation.

## Validation

Before completing a planning task, verify:

- [ ] The final goal is clearly defined.
- [ ] The current state is understood.
- [ ] The scope is appropriate.
- [ ] Tasks are specific and actionable.
- [ ] Dependencies are identified.
- [ ] Execution order is logical.
- [ ] Verification steps are defined.
- [ ] Important risks are considered.
- [ ] Unverified assumptions are identified.
- [ ] The plan avoids unnecessary work.
- [ ] The final success criteria can be verified.

## Related Skills

- MASTER.skill.md
- THINKING.skill.md
- DECISION.skill.md
- RESEARCH.skill.md
- QUALITY.skill.md
- REVIEW.skill.md
- VALIDATION.skill.md
- DOCUMENTATION.skill.md