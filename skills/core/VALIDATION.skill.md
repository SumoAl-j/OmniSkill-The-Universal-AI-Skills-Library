---
name: VALIDATION
version: 1.0.0
category: core
priority: critical
group: Quality & Review
alwaysApply: true
compatible:
  - ChatGPT
  - Claude
  - Gemini
  - Cursor
  - GitHub Copilot
  - Cline
---

# VALIDATION

## Objective

Verify that completed work satisfies its requirements, behaves as expected, and does not contain known critical errors or missing components.

VALIDATION should confirm actual results through evidence rather than assuming that work is correct because it appears complete.

## Activation

Activate VALIDATION when:

- A task is considered complete.
- Code or configuration has been changed.
- A bug fix needs confirmation.
- A feature has been implemented.
- Tests or checks need to be performed.
- A release or milestone needs final verification.
- The user asks whether something is working correctly.
- Previous work needs confirmation.

Note: VALIDATION has alwaysApply: true, which means it is always available to be activated — it does not mean VALIDATION should run at every step. Activation still depends on the task being at a point where verification is appropriate. Do not run VALIDATION before the work is sufficiently complete to verify.

## Workflow

### 1. Identify Success Criteria

Determine:

- What was supposed to be completed?
- What behavior is expected?
- Which requirements are mandatory?
- Which checks must pass?

Validation must measure the result against the actual requirements.

### 2. Inspect the Final State

Check:

- Relevant files
- Configuration
- Dependencies
- Project structure
- Generated artifacts
- Implementation state

Do not validate an outdated or partial state.

### 3. Run Appropriate Checks

Use checks relevant to the task, such as:

- Tests
- Lint
- Type checking
- Build
- Skill validation
- Duplicate checks
- Health checks
- Manual verification

The checks listed above are examples scoped to OmniSkill tasks. For a non-OmniSkill task, validation checks should be chosen based on what is appropriate for the specific work — such as running the project's existing test suite, checking logs, or performing a manual smoke test. Do not run unrelated checks merely for appearance.

### 4. Verify Expected Behavior

Confirm that:

- The original requirement is satisfied.
- The expected behavior occurs.
- Important edge cases are handled.
- The original problem is resolved when applicable.

### 5. Check for Regressions

Determine whether the change introduced problems elsewhere.

Inspect:

- Related functionality
- Dependent components
- Existing tests
- Configuration
- Integrations

### 6. Evaluate Failures

When a validation check fails:

1. Record the exact failure.
2. Identify its likely cause.
3. Determine whether it blocks completion.
4. Fix the issue when appropriate.
5. Re-run the failed check.

Do not ignore failing checks.

### 7. Distinguish Verification Levels

Classify conclusions as:

- Verified
- Partially verified
- Not verified
- Failed

Do not claim something is verified when the available evidence does not support it.

### 8. Report the Result

Provide:

- Checks performed
- Results
- Remaining failures
- Known limitations
- Final status

Keep the report factual and concise.

### 9. Final Confirmation

A task should only be considered complete when the required success criteria have been verified or the remaining limitations have been explicitly accepted.

## Examples

### Example 1 — Code Change

A function was modified.

VALIDATION should:

1. Run relevant tests.
2. Run type checking when applicable.
3. Run lint when applicable.
4. Confirm expected behavior.
5. Check for related regressions.
6. Report the final status.

### Example 2 — Bug Fix

A reported bug was fixed.

VALIDATION should:

1. Reproduce the original failure when possible.
2. Apply or inspect the fix.
3. Reproduce the same scenario.
4. Confirm the expected result.
5. Run relevant tests.
6. Confirm that related functionality still works.

### Example 3 — Project Release

A project is ready for release.

VALIDATION should check:

1. Tests.
2. Lint.
3. Build.
4. Dependencies.
5. Required files.
6. Configuration.
7. Security-sensitive settings.
8. Documentation.
9. Release artifacts.

## Validation

Before completing a validation task, verify:

- [ ] Success criteria were identified.
- [ ] The final project state was inspected.
- [ ] Appropriate checks were performed.
- [ ] Expected behavior was verified.
- [ ] Important edge cases were considered.
- [ ] Potential regressions were checked.
- [ ] Failed checks were investigated.
- [ ] Verification status is accurately reported.
- [ ] Known limitations are documented.
- [ ] No failed check was silently ignored.
- [ ] Assumptions are supported by evidence or explicitly flagged as uncertain.
- [ ] The final result satisfies the required success criteria.

## Related Skills

- MASTER.skill.md
- DEBUGGING.skill.md
- REVIEW.skill.md
- QUALITY.skill.md
- THINKING.skill.md
- RESEARCH.skill.md
- PLANNING.skill.md
- DOCUMENTATION.skill.md
- DECISION.skill.md
- ROUTER.skill.md