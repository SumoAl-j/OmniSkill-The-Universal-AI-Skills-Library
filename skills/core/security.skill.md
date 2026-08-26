---
name: SECURITY
version: 1.0.0
category: core
priority: critical
group: Security
alwaysApply: false
compatible:
  - ChatGPT
  - Claude
  - Gemini
  - Cursor
  - GitHub Copilot
  - Cline
---

# SECURITY

## Objective

Identify, prevent, and reduce security risks in software, systems, configurations, APIs, data flows, and development workflows.

SECURITY should prioritize protecting confidentiality, integrity, availability, authentication, authorization, and sensitive information while preserving legitimate functionality.

## Activation

Activate SECURITY when:

- Code handles authentication or authorization.
- User input reaches application logic, databases, commands, or APIs.
- Secrets, tokens, credentials, or sensitive data are involved.
- APIs or network services are implemented or reviewed.
- File access or system commands are involved.
- Dependencies or third-party packages are introduced.
- Configuration affects security.
- A vulnerability or suspicious behavior is reported.
- A project needs a security review.
- Data protection or privacy requirements are relevant.

## Workflow

### 1. Understand the Security Context

Identify:

- Assets that need protection.
- Trust boundaries.
- Users and roles.
- Entry points.
- Sensitive data.
- External integrations.
- Expected threats.
- Security requirements.

Do not assume that every component has the same security requirements.

### 2. Identify Attack Surfaces

Inspect relevant entry points such as:

- HTTP endpoints
- APIs
- Forms
- Authentication flows
- File uploads
- Database queries
- Command execution
- External services
- Client-side input
- Configuration
- Dependencies

Focus on realistic attack paths.

### 3. Validate Inputs

Check whether untrusted input is:

- Validated
- Normalized when necessary
- Properly encoded
- Constrained to expected formats
- Safely passed to downstream systems

Never rely on client-side validation alone for security-sensitive operations.

### 4. Check Authentication

When authentication exists, review:

- Credential handling
- Session management
- Token handling
- Password storage
- Login protections
- Account recovery
- Session expiration
- Authentication bypass possibilities

Never store plaintext passwords.

### 5. Check Authorization

Verify that users can only access resources and actions they are permitted to use.

Review:

- Role checks
- Resource ownership
- Privilege boundaries
- Administrative operations
- Object-level access control

Do not assume authentication automatically provides authorization.

### 6. Protect Secrets

Ensure that:

- API keys are not hard-coded.
- Passwords are not committed.
- Tokens are not exposed in logs.
- Secrets are stored using appropriate secret-management mechanisms.
- Environment variables or secret stores are used when appropriate.

If a secret is exposed, treat it as compromised and recommend rotation.

### 7. Protect Data

Consider:

- Sensitive information
- Encryption requirements
- Data exposure
- Logging
- Backups
- Transmission security
- Storage security
- Data minimization

Do not expose sensitive data unnecessarily.

### 8. Review Common Vulnerabilities

When relevant, inspect for risks such as:

- Injection
- Cross-site scripting
- Cross-site request forgery
- Broken access control
- Insecure direct object references
- Path traversal
- Unsafe file handling
- Command injection
- Insecure deserialization
- Server-side request forgery
- Security misconfiguration
- Vulnerable dependencies

Only report vulnerabilities supported by evidence.

### 9. Review Dependencies

When third-party packages are used:

- Check versions.
- Check known vulnerabilities when appropriate.
- Avoid unnecessary dependencies.
- Prefer maintained packages.
- Review permissions and behavior of sensitive dependencies.

Do not install packages merely to hide a security warning.

### 10. Verify Security Controls

When possible:

- Run security tests.
- Run dependency audits.
- Test authorization boundaries.
- Test invalid input.
- Check secret exposure.
- Review relevant configuration.

A security control should be verified rather than assumed to work.

### 11. Minimize Privileges

Use the minimum permissions required.

Avoid:

- Unnecessary administrator access
- Excessive database privileges
- Broad filesystem permissions
- Unrestricted API access
- Permanent credentials when temporary credentials are sufficient

### 12. Document Findings

For each important issue record:

- Vulnerability
- Location
- Evidence
- Impact
- Severity
- Recommended remediation
- Verification status

Do not exaggerate severity without evidence.

## Examples

### Example 1 — API Endpoint

An API accepts user-provided data.

SECURITY should:

1. Identify the trust boundary.
2. Validate the input.
3. Check authentication.
4. Check authorization.
5. Prevent injection.
6. Avoid exposing sensitive information.
7. Test invalid and unauthorized requests.

### Example 2 — Authentication System

An application implements login.

SECURITY should review:

- Password handling
- Session management
- Authentication failures
- Account recovery
- Rate limiting
- Token handling
- Authorization after login

### Example 3 — Secret Exposure

An API key is found inside source code.

SECURITY should:

1. Treat the key as exposed.
2. Recommend rotating the key.
3. Remove it from source code.
4. Move secret storage to an appropriate mechanism.
5. Check whether the secret exists in repository history.
6. Review logs and other locations where it may have been exposed.

## Validation

Before completing a security task, verify:

- [ ] The security context was identified.
- [ ] Relevant attack surfaces were inspected.
- [ ] Untrusted input was considered.
- [ ] Authentication was reviewed when relevant.
- [ ] Authorization was reviewed when relevant.
- [ ] Secrets were protected.
- [ ] Sensitive data handling was considered.
- [ ] Relevant vulnerability classes were considered.
- [ ] Dependencies were reviewed when relevant.
- [ ] Least-privilege principles were considered.
- [ ] Security controls were verified when possible.
- [ ] Findings are supported by evidence.
- [ ] Severity is proportional to the actual impact.
- [ ] Remediation is practical and actionable.

## Related Skills

- MASTER.skill.md
- CODING.skill.md
- DEBUGGING.skill.md
- REVIEW.skill.md
- QUALITY.skill.md
- VALIDATION.skill.md
- RESEARCH.skill.md
- THINKING.skill.md
- PLANNING.skill.md