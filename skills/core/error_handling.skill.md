---
name: ERROR_HANDLING
version: 1.0.0
category: core
priority: high
group: Reliability & Operations
alwaysApply: false
compatible:
  - ChatGPT
  - Claude
  - Gemini
  - Cursor
  - GitHub Copilot
  - Cline
---

# ERROR_HANDLING

## Objective

Design, implement, diagnose, and improve error handling so software fails safely, communicates useful information, preserves system integrity, and provides actionable diagnostic data.

ERROR_HANDLING should distinguish expected errors from unexpected failures and should avoid hiding problems, exposing sensitive information, or creating inconsistent application states.

## Activation

Activate ERROR_HANDLING when:

- An application throws or returns errors.
- Exceptions need to be handled.
- API error responses need to be designed.
- Validation failures need consistent handling.
- Database or external-service failures need recovery logic.
- Error messages are unclear or inconsistent.
- A system needs centralized error handling.
- Errors are being logged or reported.
- Retry or fallback behavior is required.
- A production failure needs investigation.
- Error handling may affect security, reliability, or user experience.

## Workflow

### 1. Understand the Failure

Identify:

- What failed?
- Where did it fail?
- Why can it fail?
- Is the failure expected or unexpected?
- Who or what is affected?
- Can the operation be retried?
- What state exists after the failure?

Do not treat every error as the same type of failure.

### 2. Classify the Error

Determine whether the error is:

- Validation error
- Authentication error
- Authorization error
- Not-found error
- Conflict error
- Rate-limit error
- Dependency failure
- Database failure
- Network failure
- Configuration error
- Programming error
- Unexpected runtime failure

Use classifications that match the application's architecture.

### 3. Preserve the Root Cause

When handling an error:

- Preserve useful diagnostic information.
- Preserve the original cause when the language supports error chaining.
- Avoid replacing meaningful errors with vague messages.
- Avoid silently swallowing exceptions.

Do not destroy the information needed to diagnose the failure.

### 4. Handle Errors at the Correct Boundary

Handle errors at the layer that has enough context to make an appropriate decision.

Consider:

- Input validation layer
- Service layer
- Database layer
- API layer
- Background worker
- UI layer
- Global application boundary

Do not duplicate the same handling logic across unrelated layers.

### 5. Validate Input Errors

Validation failures should:

- Clearly identify invalid input.
- Explain what needs to change.
- Avoid exposing internal implementation details.
- Use consistent response formats.
- Preserve useful user input when appropriate.

Follow the SECURITY Skill for security-sensitive validation.

### 6. Design API Error Responses

API errors should provide appropriate information such as:

- HTTP status
- Stable error code
- Human-readable message
- Request or trace identifier when useful
- Field-level validation details when applicable

Do not expose:

- Stack traces
- Database errors
- Internal file paths
- Secrets
- Credentials
- Internal infrastructure details

Production clients should receive safe errors while diagnostic details remain available to authorized operators.

### 7. Handle Authentication and Authorization Errors

Distinguish between:

- Unauthenticated requests
- Unauthorized actions
- Expired sessions
- Invalid credentials
- Invalid or expired tokens

Do not reveal information that helps attackers enumerate accounts or bypass authorization.

Follow the SECURITY Skill for deeper security requirements.

### 8. Handle External Dependencies

When external services fail, consider:

- Timeout
- Retry
- Backoff
- Circuit breaking
- Fallback
- Partial failure
- User-visible status
- Logging

Do not retry blindly.

Retries should be used only when the operation is safe to retry.

### 9. Handle Database Failures

Database errors may result from:

- Connection failures
- Constraint violations
- Timeouts
- Deadlocks
- Invalid queries
- Transaction failures

Consider:

- Transaction boundaries
- Rollback behavior
- Retry safety
- Connection recovery
- User-facing messages
- Diagnostic logging

Do not expose raw database errors to users.

### 10. Design Retry Behavior Carefully

Before retrying, determine:

- Is the failure transient?
- Is the operation idempotent?
- How many retries are appropriate?
- What delay should be used?
- What happens after retries are exhausted?

Prefer bounded retries with appropriate backoff.

Avoid infinite retry loops.

### 11. Maintain Consistent State

When an operation fails:

- Avoid partial writes when possible.
- Use transactions where appropriate.
- Roll back incomplete operations.
- Clean up temporary resources.
- Ensure retries do not duplicate unintended actions.

Error handling must protect data integrity.

### 12. Design User-Facing Errors

User-facing errors should be:

- Clear
- Concise
- Actionable
- Appropriate for the user's context

Prefer messages such as:

- What happened
- What the user can do next

Avoid exposing technical implementation details unless the user is a developer and the context requires them.

### 13. Log Errors Safely

When logging errors, include useful diagnostic information such as:

- Error type
- Operation
- Timestamp
- Service
- Request or trace ID
- Relevant safe context
- Original error when appropriate

Never unnecessarily log:

- Passwords
- API keys
- Authentication tokens
- Private keys
- Sensitive personal information

Follow the OBSERVABILITY and SECURITY Skills.

### 14. Avoid Swallowing Errors

Do not silently ignore failures.

Bad patterns include:

- Empty catch blocks
- Returning success after failure
- Ignoring rejected promises
- Suppressing meaningful exceptions
- Logging an error without handling the resulting state

If an error cannot be recovered from, propagate it to an appropriate boundary.

### 15. Avoid Over-Catching

Do not catch every possible error merely to prevent crashes.

Overly broad handling can:

- Hide programming bugs
- Make debugging difficult
- Produce incorrect application states
- Return misleading success responses

Catch errors where recovery or translation is meaningful.

### 16. Define Fallback Behavior

When a dependency or feature fails, determine whether the application should:

- Retry
- Return a controlled error
- Use cached data
- Disable a non-critical feature
- Queue the operation
- Continue with degraded functionality

Fallbacks should be explicit and safe.

### 17. Verify Error Paths

Test:

- Invalid input
- Missing resources
- Unauthorized requests
- Dependency failures
- Database failures
- Timeouts
- Retries
- Partial failures
- Unexpected exceptions

Error paths should be tested just like successful paths.

### 18. Monitor Error Behavior

Use observability to monitor:

- Error rates
- Error types
- Repeated failures
- Retry counts
- Timeout rates
- Dependency failures
- User-facing failures

Unexpected changes in error behavior may indicate regressions.

### 19. Document Important Error Contracts

Document:

- Error codes
- API response formats
- Retry behavior
- Recovery behavior
- User-facing behavior
- Logging expectations
- Known limitations

Keep error contracts consistent across the system.

## Examples

### Example 1 — API Validation Failure

An API receives invalid user input.

ERROR_HANDLING should:

1. Validate the input.
2. Identify the invalid fields.
3. Return a consistent validation response.
4. Avoid exposing internal implementation details.
5. Log diagnostic information only when useful.
6. Allow the client to correct the input.

### Example 2 — External API Timeout

An external service does not respond within the configured timeout.

ERROR_HANDLING should:

1. Detect the timeout.
2. Determine whether retrying is safe.
3. Apply bounded retries with backoff when appropriate.
4. Stop retrying after the configured limit.
5. Return a controlled failure or safe fallback.
6. Record the failure for diagnosis.

### Example 3 — Database Transaction Failure

A multi-step operation fails during a database transaction.

ERROR_HANDLING should:

1. Detect the database failure.
2. Roll back the transaction when possible.
3. Prevent partial application state.
4. Preserve the original diagnostic cause.
5. Return a safe user-facing error.
6. Record the failure for investigation.

## Validation

Before completing an error-handling task, verify:

- [ ] The failure is understood.
- [ ] The error type was classified appropriately.
- [ ] The root cause is preserved.
- [ ] Errors are handled at appropriate boundaries.
- [ ] Validation errors are clear and consistent.
- [ ] API errors use appropriate response formats.
- [ ] Authentication and authorization errors are handled safely.
- [ ] External dependency failures have appropriate recovery behavior.
- [ ] Retry behavior is bounded and justified.
- [ ] Data integrity is preserved.
- [ ] User-facing errors are clear and actionable.
- [ ] Sensitive information is not exposed.
- [ ] Errors are logged safely when appropriate.
- [ ] Errors are not silently swallowed.
- [ ] Overly broad error handling is avoided.
- [ ] Fallback behavior is explicit and safe.
- [ ] Error paths were tested when practical.
- [ ] Error behavior is observable when appropriate.
- [ ] Important error contracts are documented.

## Related Skills

- MASTER.skill.md
- CODING.skill.md
- API.skill.md
- DATABASE.skill.md
- SECURITY.skill.md
- OBSERVABILITY.skill.md
- DEBUGGING.skill.md
- TESTING.skill.md
- DEPLOYMENT.skill.md
- PERFORMANCE.skill.md
- QUALITY.skill.md
- REVIEW.skill.md
- VALIDATION.skill.md
- DOCUMENTATION.skill.md