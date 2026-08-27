---
name: QUALITY
version: 1.0.0
category: core
priority: high
group: Quality & Review
alwaysApply: false
compatible:
  - ChatGPT
  - Claude
  - Gemini
  - Cursor
  - GitHub Copilot
  - Cline
---

# QUALITY

## Objective

Ensure that technical work is correct, reliable, maintainable, secure, and fit for its intended purpose.

QUALITY should focus on measurable correctness and useful outcomes rather than superficial completeness.

## Activation

Activate QUALITY when:

- Work needs a quality review.
- A feature or implementation is considered complete.
- Code needs assessment before release.
- A project needs consistency checks.
- Tests, validation, linting, or builds need review.
- There is a risk that a solution works only superficially.
- Important technical decisions need quality assessment.

## Workflow

### 1. Define Quality Criteria

Identify what "good" means for the current task.

Consider:

- Correctness
- Reliability
- Security
- Performance
- Maintainability
- Compatibility
- Usability
- Testability
- Documentation

Only apply criteria relevant to the task.

### 2. Inspect the Result

Review:

- Implementation
- Configuration
- Dependencies
- Tests
- Documentation
- Error handling
- Edge cases

Use evidence rather than assumptions.

### 3. Check Functional Correctness

Verify that:

- Requirements are satisfied.
- Expected behavior works.
- Invalid inputs are handled appropriately.
- Edge cases are considered.
- Existing functionality is not unnecessarily broken.

### 4. Check Technical Quality

Review for:

- Unnecessary complexity
- Duplication
- Fragile logic
- Poor separation of concerns
- Incorrect abstractions
- Maintainability problems
- Unclear naming
- Dead code

Prefer simple, understandable solutions.

### 5. Check Security

When relevant, evaluate:

- Authentication
- Authorization
- Input validation
- Secret handling
- Dependency risks
- Unsafe configuration
- Data exposure
- Error information leakage

For issues that exceed the scope of a general quality assessment, delegate to SECURITY.skill.md for deeper security analysis.

### 6. Check Verification

Run or inspect appropriate:

- Tests
- Validation
- Lint
- Type checking
- Builds
- Integration checks

A successful command is evidence, not proof that every requirement is correct.

### 7. Prioritize Findings

Classify issues by impact.

Typical levels:

1. Critical
2. High
3. Medium
4. Low
5. Informational

Focus first on issues that affect correctness, security, or major reliability.

### 8. Recommend Improvements

For each important issue provide:

- Problem
- Impact
- Evidence
- Recommended fix

Avoid suggesting changes that do not materially improve quality.

### 9. Final Quality Check

Confirm that:

- Required behavior works.
- Important risks are addressed.
- Verification has passed.
- Remaining limitations are known.

## Examples

### Example 1 — Code Review

A feature is considered complete.

QUALITY should inspect:

- Functional behavior
- Error handling
- Security
- Maintainability
- Tests
- Edge cases

Then report important findings by priority.

### Example 2 — Release Review

Before release, QUALITY should check:

1. Tests
2. Build
3. Lint
4. Dependencies
5. Security
6. Configuration
7. Documentation
8. Known limitations

### Example 3 — Architecture Review

QUALITY should evaluate:

- Simplicity
- Reliability
- Scalability
- Security
- Maintainability
- Operational complexity

The review should focus on actual project requirements.

## Validation

Before completing a quality task, verify:

- [ ] Quality criteria were defined.
- [ ] Requirements were checked.
- [ ] Functional correctness was evaluated.
- [ ] Important edge cases were considered.
- [ ] Maintainability was evaluated.
- [ ] Security was evaluated when relevant.
- [ ] Appropriate tests or checks were run.
- [ ] Findings were prioritized by impact.
- [ ] Recommendations are actionable.
- [ ] Evidence supports important findings.
- [ ] Remaining limitations are documented.

## Related Skills

- MASTER.skill.md
- REVIEW.skill.md
- VALIDATION.skill.md
- DEBUGGING.skill.md
- THINKING.skill.md
- DECISION.skill.md
- DOCUMENTATION.skill.md
- RESEARCH.skill.md