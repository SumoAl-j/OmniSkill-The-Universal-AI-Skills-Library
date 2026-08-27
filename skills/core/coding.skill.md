---
name: CODING
version: 1.0.0
category: core
priority: high
group: Implementation
alwaysApply: false
compatible:
  - ChatGPT
  - Claude
  - Gemini
  - Cursor
  - GitHub Copilot
  - Cline
---

# CODING

## Objective

Design, write, modify, refactor, and explain software code that is correct, maintainable, secure, and appropriate for the project's existing architecture.

CODING should prefer understanding the existing codebase before making changes and should avoid unnecessary rewrites.

## Activation

Activate CODING when:

- The user asks to write code.
- Existing code needs modification.
- A feature needs implementation.
- A function, component, class, or module needs to be created.
- Code needs refactoring.
- An implementation needs to be integrated into an existing project.
- Boilerplate or repetitive code needs to be generated.
- Technical implementation details need to be translated into working code.

## Workflow

### 1. Understand the Requirement

Identify:

- Desired behavior
- Inputs
- Outputs
- Constraints
- Existing interfaces
- Expected error behavior
- Compatibility requirements

Do not start coding before understanding the required behavior.

### 2. Inspect the Existing Code

When working in an existing project, inspect:

- Relevant files
- Project structure
- Existing patterns
- Dependencies
- Configuration
- Types
- APIs
- Tests
- Related components

Follow existing project conventions unless there is a clear reason to change them.

### 3. Design the Implementation

Determine:

- Required files
- Required functions or components
- Data flow
- Interfaces
- Dependencies
- Error handling
- Validation
- Testing strategy

Prefer the simplest design that satisfies the requirements.

### 4. Implement Incrementally

Write the smallest practical change that solves the problem.

Prefer:

- Clear naming
- Small functions
- Strong typing
- Explicit error handling
- Reusable abstractions
- Existing project utilities
- Minimal dependencies

Avoid:

- Unnecessary rewrites
- Duplicate logic
- Dead code
- Over-engineering
- Unrelated changes

Modifying existing code is not automatically risky. Classify the change by actual risk, not by whether a file is modified. Changes to production behavior, security logic, data handling, or public contracts without tests or review should trigger the pre-action safety check from MASTER. Purely additive changes, well-tested modifications, and changes in disposable environments may not require a warning. Deleting or overwriting existing functionality without a recovery path is a Tier 1 or Tier 2 operation depending on context.

### 5. Handle Errors Correctly

Code should:

- Validate important inputs.
- Handle expected failures.
- Preserve useful error information.
- Avoid exposing sensitive information.
- Fail predictably when recovery is impossible.

Do not silently ignore errors.

### 6. Consider Security

When relevant, inspect:

- User input
- Authentication
- Authorization
- Secrets
- File access
- Database queries
- Network requests
- Dependency usage
- Sensitive data

Never hard-code passwords, API keys, tokens, or other credentials.

### 7. Test the Implementation

When appropriate:

- Add or update tests.
- Test normal behavior.
- Test invalid input.
- Test important edge cases.
- Test failure paths.

Do not assume code works merely because it compiles.

### 8. Verify the Change

Run appropriate checks such as:

- Tests
- Type checking
- Lint
- Build
- Validation
- Relevant runtime checks

Fix errors introduced by the implementation before considering the task complete.

### 9. Review the Result

Check:

- Correctness
- Readability
- Maintainability
- Security
- Performance
- Compatibility
- Unnecessary complexity

Keep the final implementation focused on the original requirement.

## Examples

### Example 1 — Add a Function

A project needs a function that validates an email address.

CODING should:

1. Inspect existing validation utilities.
2. Follow the project's coding style.
3. Implement the smallest appropriate function.
4. Handle invalid input.
5. Add relevant tests.
6. Run validation and lint.

### Example 2 — Add a Feature

A web application needs a notification feature.

CODING should:

1. Inspect the existing frontend and backend architecture.
2. Identify the appropriate modules.
3. Define the data flow.
4. Implement backend support.
5. Implement frontend integration.
6. Add validation and error handling.
7. Add tests.
8. Run the project's checks.

### Example 3 — Refactor Existing Code

A module contains duplicated logic.

CODING should:

1. Identify duplicated behavior.
2. Confirm that the behavior is actually equivalent.
3. Extract an appropriate reusable abstraction.
4. Preserve existing behavior.
5. Run tests.
6. Review the resulting code for unnecessary complexity.

## Validation

Before completing a coding task, verify:

- [ ] The requirement is understood.
- [ ] Relevant existing code was inspected.
- [ ] Existing project conventions were followed.
- [ ] The implementation is appropriately scoped.
- [ ] Inputs are validated when necessary.
- [ ] Errors are handled appropriately.
- [ ] Security considerations were addressed when relevant.
- [ ] Unnecessary dependencies were avoided.
- [ ] Tests were added or updated when appropriate.
- [ ] Lint or type checks were run when applicable.
- [ ] The implementation was verified.
- [ ] No unrelated changes were introduced.
- [ ] The final code is maintainable.

## Related Skills

- MASTER.skill.md
- THINKING.skill.md
- PLANNING.skill.md
- DEBUGGING.skill.md
- REVIEW.skill.md
- QUALITY.skill.md
- VALIDATION.skill.md
- RESEARCH.skill.md
- DOCUMENTATION.skill.md