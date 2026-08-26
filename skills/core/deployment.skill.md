---
name: DEPLOYMENT
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

# DEPLOYMENT

## Objective

Safely build, configure, release, deploy, and verify software across development, staging, and production environments.

DEPLOYMENT should prioritize reliability, reproducibility, security, observability, rollback capability, and minimal service disruption.

## Activation

Activate DEPLOYMENT when:

- An application needs to be deployed.
- A production release is being prepared.
- Build or release configuration needs to be changed.
- Environment variables or deployment configuration are involved.
- CI/CD pipelines need to be created or modified.
- Hosting infrastructure needs configuration.
- A deployment fails.
- A rollback is required.
- Production behavior needs verification after deployment.

## Workflow

### 1. Understand the Deployment Context

Identify:

- Application type
- Runtime
- Build system
- Hosting platform
- Deployment target
- Environment
- Required dependencies
- Required environment variables
- Database requirements
- External services
- Expected availability
- Rollback requirements

Do not assume that development and production environments are identical.

### 2. Inspect the Existing Deployment Setup

When working in an existing project, inspect:

- package configuration
- build scripts
- deployment configuration
- CI/CD workflows
- environment configuration
- Docker configuration when applicable
- hosting configuration
- database migrations
- health checks
- logging
- monitoring
- existing deployment documentation

Follow existing project conventions unless there is a clear reason to change them.

### 3. Prepare the Application

Before deployment:

- Install required dependencies.
- Verify configuration.
- Run relevant tests.
- Run lint and type checks when applicable.
- Build the application.
- Verify generated artifacts.
- Confirm required files are included.

Do not deploy known-broken builds.

### 4. Manage Environment Configuration

Separate configuration from source code.

Consider:

- Environment variables
- Secret management
- Development configuration
- Staging configuration
- Production configuration
- Runtime configuration

Never commit production secrets, API keys, passwords, or private credentials.

### 5. Verify Dependencies

Confirm:

- Required runtime version
- Required package versions
- Native dependencies
- System dependencies
- Database availability
- External service availability

Avoid relying on undeclared local dependencies.

### 6. Handle Database Changes

When deployment includes database changes:

1. Inspect the migration.
2. Verify compatibility with the deployed application.
3. Back up or establish recovery procedures when appropriate.
4. Apply migrations safely.
5. Verify the resulting schema.
6. Confirm application compatibility.

Avoid destructive production migrations without a safe migration strategy.

### 7. Build Reproducibly

The deployment should be reproducible from the project's declared configuration.

Prefer:

- Lockfiles
- Declared dependencies
- Deterministic build steps
- Explicit runtime versions
- Automated builds

Avoid undocumented manual steps.

### 8. Deploy Incrementally When Appropriate

For important production systems, consider:

- Staging deployment
- Smoke testing
- Canary deployment
- Blue-green deployment
- Rolling deployment

Choose the simplest strategy that provides sufficient safety.

### 9. Verify Deployment

After deployment, verify:

- Application starts successfully.
- Health checks pass.
- Important endpoints respond correctly.
- Authentication works.
- Database connectivity works.
- External integrations work.
- Logs show no critical errors.
- Expected application behavior is preserved.

A successful deployment command does not prove that the application works correctly.

### 10. Monitor the Release

After deployment, monitor:

- Error rates
- Response times
- Resource usage
- Application logs
- Database health
- External service failures
- User-facing errors

Pay particular attention immediately after a production release.

### 11. Handle Deployment Failures

If deployment fails:

1. Capture the exact error.
2. Identify the failure stage.
3. Determine whether the previous version remains healthy.
4. Avoid making random production changes.
5. Fix the root cause.
6. Re-run the deployment.
7. Verify the final state.

Do not hide deployment failures by suppressing errors.

### 12. Roll Back When Necessary

Rollback when:

- The deployment causes critical failures.
- Recovery is faster and safer than fixing forward.
- Data compatibility permits rollback.
- User-facing functionality is significantly degraded.

Before rollback, consider database migrations and irreversible changes.

### 13. Document the Release

Record:

- Version
- Changes
- Deployment time
- Environment
- Migration status
- Configuration changes
- Verification results
- Known issues
- Rollback procedure

Keep deployment documentation synchronized with the actual process.

### 14. Protect Production

Follow least-privilege principles.

Limit:

- Deployment credentials
- Production database access
- Server permissions
- CI/CD permissions
- Secret access

Do not expose production credentials in logs or source control.

## Examples

### Example 1 — Web Application Deployment

A web application is ready for production.

DEPLOYMENT should:

1. Run tests.
2. Run lint and type checks when applicable.
3. Build the application.
4. Verify environment configuration.
5. Deploy to staging when available.
6. Run smoke tests.
7. Deploy to production.
8. Verify health checks and important endpoints.
9. Monitor logs and errors.

### Example 2 — Deployment Failure

A production deployment fails during startup.

DEPLOYMENT should:

1. Capture the startup error.
2. Identify whether it is a configuration, dependency, build, or runtime issue.
3. Check whether the previous release is healthy.
4. Avoid unrelated production changes.
5. Fix the root cause.
6. Redeploy.
7. Verify the application after deployment.

### Example 3 — Database Migration

A release requires a schema migration.

DEPLOYMENT should:

1. Inspect the migration.
2. Check compatibility with the application version.
3. Establish recovery procedures.
4. Apply the migration.
5. Verify the schema.
6. Deploy the compatible application version.
7. Verify database-dependent functionality.

## Validation

Before completing a deployment task, verify:

- [ ] The deployment environment is understood.
- [ ] Existing deployment configuration was inspected.
- [ ] Required dependencies are declared and available.
- [ ] Tests were run when applicable.
- [ ] Lint and type checks were run when applicable.
- [ ] The application builds successfully.
- [ ] Environment configuration is correct.
- [ ] Secrets are not committed or exposed.
- [ ] Database migrations were reviewed when applicable.
- [ ] The deployment is reproducible.
- [ ] Health checks pass.
- [ ] Important application behavior was verified.
- [ ] Logs and monitoring were checked.
- [ ] Rollback or recovery procedures were considered.
- [ ] Production permissions follow least privilege.
- [ ] Deployment results were documented.

## Related Skills

- MASTER.skill.md
- CODING.skill.md
- ARCHITECTURE.skill.md
- DATABASE.skill.md
- API.skill.md
- SECURITY.skill.md
- DEBUGGING.skill.md
- TESTING.skill.md
- QUALITY.skill.md
- REVIEW.skill.md
- VALIDATION.skill.md
- DOCUMENTATION.skill.md