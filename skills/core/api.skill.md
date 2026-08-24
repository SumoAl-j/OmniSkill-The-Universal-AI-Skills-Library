---
name: API
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

# API

## Objective

Design, implement, integrate, test, document, and maintain reliable APIs.

API should prioritize clear contracts, correct behavior, security, validation, compatibility, observability, and maintainability.

## Activation

Activate API when:

- A new API endpoint needs to be created.
- An existing API needs modification.
- A REST or HTTP service needs design.
- An external API needs integration.
- Request or response formats need definition.
- API authentication or authorization is involved.
- API errors or unexpected responses need investigation.
- API performance or reliability needs improvement.
- API documentation needs to be created or updated.
- An API needs testing or validation.

## Workflow

### 1. Understand the API Requirement

Identify:

- Purpose
- Consumers
- Endpoints
- HTTP methods
- Inputs
- Outputs
- Authentication requirements
- Authorization requirements
- Error behavior
- Performance expectations
- Compatibility requirements

Do not design an endpoint without understanding its intended use.

### 2. Inspect the Existing API

When working in an existing project, inspect:

- Existing routes
- Controllers
- Services
- Middleware
- Request validation
- Authentication
- Authorization
- Response formats
- Error handling
- API documentation
- Tests

Follow existing conventions unless there is a clear reason to change them.

### 3. Define the API Contract

Specify:

- Endpoint
- HTTP method
- Parameters
- Request body
- Headers
- Authentication
- Response body
- Status codes
- Error format

Keep contracts predictable and consistent.

### 4. Design Resource Operations

For REST-style APIs, use HTTP methods appropriately:

- GET for retrieval
- POST for creation or actions that are not naturally idempotent
- PUT for full replacement when appropriate
- PATCH for partial updates
- DELETE for removal

Do not force REST conventions where they do not accurately represent the operation.

### 5. Validate Requests

Validate:

- Required fields
- Data types
- Formats
- Length limits
- Numeric ranges
- Enumerated values
- Relationships between fields

Never rely solely on client-side validation.

### 6. Implement Authentication

When authentication is required, verify:

- Credential handling
- Token validation
- Session handling
- Expiration
- Refresh behavior
- Authentication failure responses

Never expose credentials or sensitive tokens in responses or logs.

### 7. Implement Authorization

Authentication proves identity; authorization determines permissions.

Check:

- User roles
- Resource ownership
- Permissions
- Administrative operations
- Object-level access

Do not assume that an authenticated user is authorized to access every resource.

### 8. Handle Errors

API errors should:

- Use appropriate HTTP status codes.
- Provide useful but safe error information.
- Use a consistent response format.
- Avoid exposing stack traces or secrets.
- Distinguish client errors from server errors.

Do not return successful status codes for failed operations merely to simplify client handling.

### 9. Design Pagination and Filtering

For collection endpoints, consider:

- Pagination
- Sorting
- Filtering
- Search
- Result limits

Avoid returning unbounded amounts of data.

### 10. Consider Idempotency

For operations that may be retried, determine whether duplicate requests could create unintended effects.

When appropriate, use:

- Idempotent HTTP methods.
- Idempotency keys.
- Unique constraints.
- Transactional safeguards.

### 11. Protect the API

Review:

- Input validation
- Rate limiting
- Authentication
- Authorization
- CORS
- CSRF protections when relevant
- Security headers
- Request size limits
- File upload restrictions
- Injection risks
- Sensitive data exposure

Follow the SECURITY Skill for deeper security analysis.

### 12. Integrate External APIs Safely

When consuming another API:

- Validate responses.
- Handle timeouts.
- Handle retries carefully.
- Respect rate limits.
- Handle unavailable services.
- Protect API credentials.
- Avoid trusting external data blindly.

Do not assume an external service is always available.

### 13. Consider Versioning

When API contracts may evolve, consider:

- Backward compatibility
- Versioning strategy
- Deprecation
- Migration paths
- Client impact

Avoid breaking existing consumers unnecessarily.

### 14. Document the API

Document:

- Endpoints
- Methods
- Parameters
- Authentication
- Request examples
- Response examples
- Error responses
- Important limitations

Documentation should reflect the actual implementation.

### 15. Test the API

Test:

- Successful requests
- Invalid requests
- Authentication failures
- Authorization failures
- Missing resources
- Duplicate requests
- Boundary conditions
- Rate limiting when applicable
- External service failures
- Unexpected responses

Tests should verify both behavior and contract.

### 16. Verify the Final API

After implementation:

- Run tests.
- Run lint and type checks when applicable.
- Verify endpoints manually when useful.
- Check response status codes.
- Check response formats.
- Verify authentication and authorization.
- Confirm documentation matches the implementation.

## Examples

### Example 1 — Create a Booking Endpoint

A salon application needs an endpoint to create a booking.

API should:

1. Define the endpoint and HTTP method.
2. Validate customer, employee, service, date, and time.
3. Authenticate the requester.
4. Authorize the operation.
5. Check booking conflicts.
6. Use appropriate database operations.
7. Return a consistent response.
8. Handle duplicate or conflicting requests safely.
9. Add tests.

### Example 2 — External Payment API

An application needs to integrate a payment provider.

API should:

1. Inspect the provider's contract.
2. Protect API credentials.
3. Validate outgoing requests.
4. Validate incoming responses.
5. Handle timeouts and failures.
6. Prevent duplicate payment operations where applicable.
7. Verify callbacks or webhooks.
8. Log useful operational information without exposing secrets.

### Example 3 — Collection Endpoint

An endpoint returns a list of bookings.

API should:

1. Define filtering.
2. Define sorting.
3. Add pagination.
4. Enforce authorization.
5. Limit returned fields when appropriate.
6. Return consistent metadata.
7. Test empty, small, and large result sets.

## Validation

Before completing an API task, verify:

- [ ] The API requirement is understood.
- [ ] Existing API conventions were inspected.
- [ ] The API contract is clearly defined.
- [ ] HTTP methods are appropriate.
- [ ] Requests are validated.
- [ ] Authentication is implemented when required.
- [ ] Authorization is enforced when required.
- [ ] Errors use appropriate status codes.
- [ ] Error responses do not expose sensitive information.
- [ ] Collection endpoints avoid unbounded responses.
- [ ] Retry and idempotency concerns were considered when relevant.
- [ ] External API failures are handled when relevant.
- [ ] Security controls were considered.
- [ ] API documentation matches the implementation.
- [ ] Relevant tests were performed.
- [ ] The final API behavior was verified.

## Related Skills

- MASTER.skill.md
- CODING.skill.md
- SECURITY.skill.md
- DATABASE.skill.md
- ARCHITECTURE.skill.md
- DEBUGGING.skill.md
- REVIEW.skill.md
- QUALITY.skill.md
- VALIDATION.skill.md
- DOCUMENTATION.skill.md
- RESEARCH.skill.md