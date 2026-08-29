---
name: CONFIGURATION
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

# CONFIGURATION

## Objective

Design, manage, validate, and maintain application configuration in a consistent, secure, environment-aware, and predictable way.

CONFIGURATION should separate configuration from application logic, protect sensitive values, validate required settings early, and prevent environment-specific assumptions from causing failures.

## Activation

Activate CONFIGURATION when:

- Application settings need to be introduced or changed.
- Environment variables are used.
- Development, testing, staging, or production environments differ.
- Secrets or credentials need configuration.
- Configuration files are created or modified.
- An application fails because of missing or invalid configuration.
- Configuration needs validation or type safety.
- Deployment configuration needs review.
- Environment-specific behavior needs to be controlled.
- Configuration management needs standardization.

## Workflow

### 1. Identify Configuration Requirements

Determine:

- Required settings
- Optional settings
- Default values
- Environment-specific values
- Sensitive values
- External service configuration
- Feature flags
- Runtime configuration
- Build-time configuration

Do not introduce configuration without understanding why it is needed.

### 2. Separate Configuration from Code

Keep environment-specific or operational values outside application logic when appropriate.

Avoid hard-coding:

- Credentials
- API keys
- Service URLs
- Database connection strings
- Environment-specific paths
- Deployment-specific settings

Configuration should be changeable without unnecessary source-code modifications.

### 3. Classify Configuration

Distinguish between:

- Public configuration
- Internal configuration
- Sensitive configuration
- Build-time configuration
- Runtime configuration
- Environment-specific configuration

Not every configuration value requires the same level of protection.

### 4. Protect Secrets

Sensitive configuration should not be committed to source control.

Never unnecessarily expose:

- Passwords
- API keys
- Access tokens
- Private keys
- Database credentials
- Session secrets

Use appropriate environment variables or secret-management systems.

If a secret is exposed, treat it as compromised and recommend rotation.

Follow the SECURITY Skill for deeper secret-management guidance.

### 5. Define Environment Behavior

Clearly distinguish environments such as:

- Development
- Testing
- Staging
- Production

Avoid relying on accidental environment differences.

Configuration should make environment-specific behavior explicit.

### 6. Validate Configuration

Validate configuration before the application depends on it.

Check:

- Required values
- Types
- Formats
- Allowed ranges
- URLs
- Ports
- Enumerated values
- Boolean values
- Environment-specific requirements

Fail early when required configuration is missing or invalid.

### 7. Use Safe Defaults

Defaults may be appropriate for non-sensitive settings.

Examples:

- Request timeout
- Log level
- Pagination size
- Feature defaults
- Local development behavior

Do not provide unsafe defaults for security-sensitive settings.

### 8. Avoid Configuration Ambiguity

Use clear names and consistent conventions.

Prefer configuration names that communicate:

- Purpose
- Scope
- Environment
- Expected value

Avoid multiple configuration values that control the same behavior unless there is a clear reason.

### 9. Centralize Configuration Access

When practical, load and validate configuration in one predictable location.

Application code should consume validated configuration rather than repeatedly reading raw environment variables throughout the codebase.

This improves:

- Consistency
- Validation
- Testing
- Maintainability
- Error reporting

### 10. Handle Missing Configuration

When required configuration is missing:

- Fail clearly.
- Identify the missing setting.
- Avoid exposing sensitive values.
- Provide useful remediation information for developers or operators.

Do not silently substitute invalid values.

### 11. Handle Configuration Changes

When configuration changes:

- Identify affected components.
- Check compatibility.
- Update documentation when necessary.
- Test the changed behavior.
- Verify deployment environments.

Configuration changes can affect runtime behavior even when application code does not change.

Changing production configuration — or configuration that affects security settings, database connections, authentication, secrets, or runtime behavior in production or staging environments that mirror production security settings — triggers the pre-action safety check from MASTER. Determine the environment and the impact of the change. If the environment is ambiguous, treat it as production.

### 12. Review External Service Configuration

For external services, consider:

- Base URL
- Credentials
- Timeout
- Retry settings
- Environment
- API version
- Feature availability
- Rate limits

Do not assume external services behave identically across environments.

### 13. Configuration and Security

Review configuration for:

- Excessive privileges
- Debug mode in production
- Weak authentication settings
- Insecure CORS settings
- Unsafe origins
- Disabled security controls
- Excessive logging
- Exposed internal endpoints

Configuration can create security vulnerabilities even when application code is correct.

### 14. Configuration and Performance

When relevant, consider:

- Connection pool size
- Cache settings
- Request timeouts
- Worker counts
- Concurrency limits
- Log volume
- Resource limits

Use measurements and workload information before making performance-related configuration changes.

Follow the PERFORMANCE Skill for deeper performance analysis.

### 15. Configuration and Reliability

Consider:

- Timeouts
- Retry limits
- Circuit breakers
- Health checks
- Graceful shutdown
- Resource limits
- Dependency configuration

Avoid settings that allow infinite retries, unbounded resource usage, or indefinite waits.

### 16. Test Configuration

Test:

- Valid configuration
- Missing configuration
- Invalid configuration
- Environment-specific configuration
- Secret handling
- Default values
- Configuration changes

Configuration behavior should be tested independently when practical.

### 17. Document Configuration

Document:

- Required variables
- Optional variables
- Defaults
- Environment differences
- Secret requirements
- Expected formats
- Example configuration without real secrets

Never place real credentials in documentation examples.

### 18. Verify the Final Configuration

Before completing a configuration task:

1. Validate the configuration.
2. Start or run the relevant application.
3. Confirm required settings are loaded.
4. Verify expected behavior.
5. Check that sensitive values are protected.
6. Test relevant environments when practical.

## Examples

### Example 1 — Environment Variables

An application requires a database URL and application port.

CONFIGURATION should:

1. Define the required variables.
2. Validate them at startup.
3. Provide a safe development example.
4. Keep credentials outside source control.
5. Expose validated configuration to application code through a central configuration layer.

### Example 2 — Production Configuration

An application is being deployed to production.

CONFIGURATION should check:

- Production database configuration
- Authentication settings
- Debug mode
- CORS configuration
- External service URLs
- Logging level
- Timeouts
- Resource limits
- Required secrets

### Example 3 — Missing Configuration

An application fails because a required API key is missing.

CONFIGURATION should:

1. Identify the missing configuration name.
2. Fail with a clear diagnostic message.
3. Avoid printing the expected secret value.
4. Explain where the configuration should be provided.
5. Verify the application after the configuration is supplied.

## Validation

Before completing a configuration task, verify:

- [ ] Required configuration values are identified.
- [ ] Configuration is appropriately separated from application logic.
- [ ] Sensitive values are protected.
- [ ] Environment-specific behavior is explicit.
- [ ] Required configuration is validated.
- [ ] Safe defaults are used only where appropriate.
- [ ] Configuration names and conventions are consistent.
- [ ] Configuration access is centralized when practical.
- [ ] Missing configuration fails clearly.
- [ ] External service configuration was reviewed when relevant.
- [ ] Security-sensitive configuration was reviewed.
- [ ] Performance-related configuration was considered when relevant.
- [ ] Reliability-related configuration was considered when relevant.
- [ ] Configuration behavior was tested when practical.
- [ ] Documentation is available and contains no real secrets.
- [ ] Final configuration was verified in the relevant environment.

## Related Skills

- MASTER.skill.md
- CODING.skill.md
- SECURITY.skill.md
- ARCHITECTURE.skill.md
- DEPLOYMENT.skill.md
- API.skill.md
- DATABASE.skill.md
- PERFORMANCE.skill.md
- OBSERVABILITY.skill.md
- ERROR_HANDLING.skill.md
- TESTING.skill.md
- DEBUGGING.skill.md
- DOCUMENTATION.skill.md
- VALIDATION.skill.md
- QUALITY.skill.md