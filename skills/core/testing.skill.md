---
name: TESTING
version: 1.0.0
category: core
priority: high
group: Testing
alwaysApply: false
compatible:
  - ChatGPT
  - Claude
  - Gemini
  - Cursor
  - GitHub Copilot
  - Cline
---

# TESTING

## Objective

Design, implement, execute, and evaluate tests that verify software behavior, detect regressions, and provide evidence that an implementation satisfies its requirements.

TESTING should focus on meaningful coverage and reliable verification rather than maximizing test count.

## Activation

Activate TESTING when:

- New functionality is implemented.
- Existing functionality is modified.
- A bug fix needs regression coverage.
- Tests need to be created or updated.
- Existing tests are failing.
- A project needs verification before release.
- Edge cases or failure paths need to be checked.
- Test coverage needs improvement.
- Automated verification is required.

## Workflow

### 1. Understand the Expected Behavior

Identify:

- What should the software do?
- What inputs are valid?
- What outputs are expected?
- What errors should occur?
- Which requirements are critical?
- Which edge cases matter?

Tests should verify requirements rather than implementation details unnecessarily.

### 2. Inspect the Existing Test Structure

Before creating tests, inspect:

- Existing test files
- Test framework
- Test configuration
- Naming conventions
- Fixtures
- Mocks
- Helpers
- Existing coverage
- Package scripts

Follow the project's existing testing conventions when practical.

### 3. Define Test Scenarios

Consider:

- Normal behavior
- Valid inputs
- Invalid inputs
- Boundary values
- Empty values
- Missing values
- Error conditions
- Authorization failures
- Integration failures
- Regression cases

Prioritize scenarios based on risk and importance.

### 4. Choose the Appropriate Test Level

Use the smallest appropriate test level.

Consider:

- Unit tests
- Integration tests
- API tests
- End-to-end tests
- Regression tests
- Security tests
- Manual verification

Do not use an expensive end-to-end test when a reliable unit or integration test can verify the same behavior.

### 5. Write Clear Tests

Good tests should:

- Have descriptive names.
- Test one meaningful behavior.
- Be deterministic.
- Be easy to understand.
- Avoid unnecessary dependencies.
- Fail for meaningful reasons.

Avoid tests that pass without actually verifying the intended behavior.

### 6. Test Failure Paths

Do not test only successful scenarios.

When relevant, verify:

- Invalid input
- Missing data
- Unauthorized access
- Forbidden actions
- Network failures
- Database failures
- Invalid state
- Unexpected values
- Dependency failures

The expected error behavior should be explicitly verified.

### 7. Test Edge Cases

Consider boundaries such as:

- Minimum values
- Maximum values
- Empty collections
- Large inputs
- Duplicate values
- Null or undefined values
- Expired data
- Concurrent operations
- Unexpected ordering

Only include edge cases relevant to the system.

### 8. Avoid Brittle Tests

Avoid unnecessary dependence on:

- Internal implementation details
- Exact error formatting when not required
- Timing assumptions
- External services
- Random data without controlled seeds
- Unstable environment state

Tests should fail when behavior is broken, not because unrelated implementation details changed.

### 9. Run the Tests

After creating or modifying tests:

- Run the relevant test suite.
- Inspect failures.
- Determine whether the failure is caused by the code or the test.
- Fix incorrect tests.
- Re-run the tests.

Never change production code solely to make a test pass without understanding the failure.

### 10. Check Regression Coverage

For bug fixes:

1. Reproduce the original failure.
2. Add a regression test when practical.
3. Verify that the test fails against the broken behavior when possible.
4. Apply the fix.
5. Verify that the test passes.
6. Run related tests.

### 11. Review Test Quality

Evaluate:

- Coverage of important behavior
- Test reliability
- Test clarity
- Maintainability
- False-positive risk
- False-negative risk
- Execution time

More tests do not automatically mean better testing.

### 12. Report Results

Record:

- Tests executed
- Tests passed
- Tests failed
- Important uncovered cases
- Known limitations
- Final verification status

Do not claim complete verification when important areas remain untested.

## Examples

### Example 1 — Unit Testing

A function calculates a user's final price.

TESTING should verify:

1. Normal price calculation.
2. Valid discount.
3. Zero discount.
4. Maximum allowed discount.
5. Invalid discount.
6. Missing or invalid input.
7. Expected error behavior.

### Example 2 — API Testing

An authenticated API endpoint returns user data.

TESTING should verify:

1. Valid authenticated request.
2. Missing authentication.
3. Invalid authentication.
4. Unauthorized resource access.
5. Invalid request data.
6. Valid response structure.
7. Appropriate error responses.

### Example 3 — Regression Testing

A bug caused users to receive duplicate notifications.

TESTING should:

1. Reproduce the original scenario.
2. Identify the expected behavior.
3. Create a regression test.
4. Verify the test detects the problematic behavior when possible.
5. Apply the fix.
6. Verify the regression test passes.
7. Run related notification tests.

## Validation

Before completing a testing task, verify:

- [ ] Expected behavior was identified.
- [ ] Existing testing conventions were inspected.
- [ ] Important normal cases were tested.
- [ ] Important invalid cases were tested.
- [ ] Relevant edge cases were considered.
- [ ] Failure paths were tested when appropriate.
- [ ] Tests are deterministic.
- [ ] Tests avoid unnecessary implementation coupling.
- [ ] Regression coverage was added when appropriate.
- [ ] Relevant tests were executed.
- [ ] Test failures were investigated.
- [ ] Important uncovered areas are documented.
- [ ] Test results are accurately reported.

## Related Skills

- MASTER.skill.md
- CODING.skill.md
- DEBUGGING.skill.md
- REVIEW.skill.md
- QUALITY.skill.md
- VALIDATION.skill.md
- SECURITY.skill.md
- PLANNING.skill.md
- THINKING.skill.md
- DOCUMENTATION.skill.md