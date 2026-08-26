---
name: DEPENDENCIES
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

# DEPENDENCIES

## Objective

Manage software dependencies safely, predictably, and maintainably while preserving compatibility, security, reproducibility, and project stability.

DEPENDENCIES should treat third-party packages as part of the application's supply chain and should avoid unnecessary packages, uncontrolled upgrades, and dependency changes without verification.

## Activation

Activate DEPENDENCIES when:

- A new package or library is introduced.
- An existing dependency needs to be upgraded or downgraded.
- Dependency conflicts occur.
- Package installation fails.
- Lockfiles change unexpectedly.
- A dependency has a known vulnerability.
- A package is abandoned or unmaintained.
- Dependency versions need to be reviewed.
- Build or runtime behavior changes after dependency updates.
- Supply-chain or package integrity concerns arise.
- The project needs dependency cleanup or optimization.

## Workflow

### 1. Identify the Dependency Requirement

Determine:

- Why is the dependency needed?
- What functionality does it provide?
- Is the functionality already available?
- Is the package actively maintained?
- Is the package compatible with the project?
- Does the dependency introduce unnecessary complexity?

Do not add a dependency when the required functionality can reasonably be implemented using existing project capabilities.

### 2. Inspect the Existing Dependency Tree

Before changing dependencies, inspect:

- Direct dependencies
- Development dependencies
- Transitive dependencies
- Package manager
- Lockfile
- Runtime version
- Package versions
- Peer dependencies

Understand the current dependency graph before modifying it.

### 3. Evaluate Package Quality

When considering a package, review:

- Maintenance activity
- Release history
- Documentation
- Community adoption when relevant
- License
- Compatibility
- Known security issues
- Dependency count
- Package scope and permissions
- Project ownership

Do not assume that popularity alone means a package is appropriate.

### 4. Minimize Dependencies

Prefer the smallest reasonable dependency set.

Avoid:

- Duplicate libraries providing the same functionality.
- Large packages for trivial functionality.
- Unmaintained packages when maintained alternatives exist.
- Packages that introduce unnecessary transitive dependencies.

Every dependency increases maintenance and supply-chain risk.

### 5. Verify Compatibility

Before updating or adding a dependency, check:

- Runtime compatibility
- Framework compatibility
- TypeScript compatibility when applicable
- Peer dependency requirements
- Node.js version requirements
- Platform requirements
- Existing package constraints

Do not force incompatible dependency trees merely to make installation succeed.

### 6. Handle Version Changes Carefully

When updating dependencies, distinguish between:

- Patch updates
- Minor updates
- Major updates

Major updates may introduce breaking changes and should be reviewed accordingly.

Do not blindly update every package to the newest version.

### 7. Respect Lockfiles

Lockfiles should provide reproducible dependency resolution.

When appropriate:

- Commit the lockfile.
- Review significant lockfile changes.
- Avoid manually editing generated lockfile content.
- Use the project's package manager consistently.

Do not delete lockfiles simply to bypass dependency-resolution problems.

### 8. Resolve Dependency Conflicts Correctly

When package installation reports a conflict:

1. Identify the conflicting packages.
2. Inspect peer dependency requirements.
3. Check compatible versions.
4. Determine which package constraint is legitimate.
5. Choose a compatible dependency set.
6. Reinstall and verify.

Avoid using `--force` or `--legacy-peer-deps` as the default solution.

Those options may hide a real compatibility problem.

### 9. Review Security

Dependencies can introduce vulnerabilities or malicious code.

Consider:

- Known vulnerabilities
- Package provenance
- Unexpected install scripts
- Suspicious dependency changes
- Abandoned packages
- Compromised packages
- Excessive permissions

Run appropriate dependency audits when available.

Follow the SECURITY Skill for deeper supply-chain security guidance.

### 10. Review Install Scripts

Some packages execute scripts during installation.

When relevant, inspect:

- Postinstall scripts
- Preinstall scripts
- Build scripts
- Native compilation
- Downloaded binaries

Do not automatically approve scripts without understanding why they execute.

### 11. Handle Vulnerabilities

When a dependency has a vulnerability:

1. Identify the affected package.
2. Determine whether the vulnerable code path affects the project.
3. Check for a patched version.
4. Update to a compatible secure version when possible.
5. Test the application.
6. Document unavoidable exceptions.

Do not claim that an application is vulnerable solely because an advisory exists without considering the relevant package and usage.

### 12. Verify Dependency Changes

After changing dependencies:

- Install dependencies.
- Run lint.
- Run tests.
- Run type checking when available.
- Run builds.
- Run validation.
- Run relevant application checks.

Dependency work is incomplete until the project still behaves correctly.

### 13. Watch for Breaking Changes

After major or significant updates, inspect:

- Release notes
- Migration guides
- Deprecated APIs
- Changed defaults
- Changed configuration
- Changed type definitions
- Changed runtime behavior

Do not assume semantic compatibility from version numbers alone.

### 14. Remove Unused Dependencies

Periodically identify dependencies that are no longer required.

Before removing one:

- Confirm it is unused.
- Check scripts and configuration.
- Check indirect usage.
- Remove it from the correct dependency section.
- Update the lockfile.
- Run verification.

Do not remove a package solely because no direct import is immediately visible.

### 15. Maintain Reproducibility

A project should be installable consistently across supported environments.

Consider:

- Lockfile consistency
- Runtime versions
- Package-manager version
- Native dependencies
- Environment-specific requirements
- CI configuration

Document important version requirements.

### 16. Separate Runtime and Development Dependencies

Place packages in the correct category.

Runtime dependencies are required by the application.

Development dependencies are used for:

- Testing
- Linting
- Formatting
- Building
- Type checking
- Development tooling

Do not ship development-only packages unnecessarily.

### 17. Review Transitive Dependencies

Direct dependencies can bring many transitive packages.

When risk or package size matters, inspect:

- Dependency depth
- Duplicate versions
- Known vulnerabilities
- Unnecessary packages
- Unexpected packages

Do not assume transitive dependencies are harmless simply because they were not explicitly installed.

### 18. Document Important Dependency Decisions

Record important decisions such as:

- Why a package was selected.
- Why a version is pinned.
- Why an update is delayed.
- Why an alternative package was rejected.
- Known compatibility constraints.
- Security exceptions.

Keep dependency decisions understandable for future maintainers.

## Examples

### Example 1 — Adding a Package

A project needs a library for a specific feature.

DEPENDENCIES should:

1. Check whether the project already provides the feature.
2. Evaluate suitable packages.
3. Check maintenance and compatibility.
4. Review security considerations.
5. Select the smallest appropriate dependency.
6. Install it using the project's package manager.
7. Update the lockfile.
8. Run project verification.

### Example 2 — Peer Dependency Conflict

Package installation reports incompatible TypeScript versions.

DEPENDENCIES should:

1. Identify the package requiring the incompatible TypeScript version.
2. Inspect its peer dependency range.
3. Compare available compatible versions.
4. Select versions that satisfy the dependency tree.
5. Reinstall without bypassing dependency checks when possible.
6. Run lint, type checks, tests, and validation.

### Example 3 — Vulnerable Package

A dependency audit reports a vulnerable package.

DEPENDENCIES should:

1. Identify the affected dependency.
2. Determine the installed version.
3. Check whether a patched version exists.
4. Review compatibility.
5. Update the package when appropriate.
6. Run verification.
7. Document the result.

## Validation

Before completing a dependency task, verify:

- [ ] The reason for the dependency change is understood.
- [ ] Existing dependencies were inspected.
- [ ] The dependency tree was considered.
- [ ] The package is reasonably maintained.
- [ ] Compatibility requirements were checked.
- [ ] Unnecessary dependencies were avoided.
- [ ] Version changes were intentional.
- [ ] The lockfile was handled correctly.
- [ ] Dependency conflicts were resolved rather than hidden.
- [ ] Security risks were reviewed.
- [ ] Install scripts were considered when relevant.
- [ ] Vulnerabilities were handled appropriately.
- [ ] Runtime and development dependencies are correctly separated.
- [ ] Unused dependencies were considered when relevant.
- [ ] Reproducibility was preserved.
- [ ] Breaking changes were reviewed when relevant.
- [ ] Lint, tests, type checks, builds, or validation were run when applicable.
- [ ] Important dependency decisions were documented.
- [ ] No unnecessary `--force` or dependency-resolution bypass was used.

## Related Skills

- MASTER.skill.md
- CODING.skill.md
- SECURITY.skill.md
- CONFIGURATION.skill.md
- ARCHITECTURE.skill.md
- DEPLOYMENT.skill.md
- PERFORMANCE.skill.md
- CACHING.skill.md
- ERROR_HANDLING.skill.md
- TESTING.skill.md
- DEBUGGING.skill.md
- REVIEW.skill.md
- QUALITY.skill.md
- VALIDATION.skill.md
- DOCUMENTATION.skill.md