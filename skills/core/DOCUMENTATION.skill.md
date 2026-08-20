---
name: DOCUMENTATION
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

# DOCUMENTATION

## Objective

Create clear, accurate, maintainable, and useful documentation for software projects, technical systems, workflows, APIs, configurations, and decisions.

DOCUMENTATION should make information understandable to its intended audience without introducing unsupported claims or unnecessary complexity.

## Activation

Activate DOCUMENTATION when:

- Documentation needs to be created or updated.
- A project needs a README or technical guide.
- An API, configuration, workflow, or feature needs explanation.
- Code or architecture needs documented.
- Existing documentation is incomplete, outdated, or misleading.
- A technical process needs reproducible instructions.
- Project decisions or important implementation details need to be recorded.

## Workflow

### 1. Identify the Audience

Determine who will use the documentation.

Examples:

- Developers
- Project maintainers
- End users
- System administrators
- Contributors
- AI agents

Adjust terminology and detail to the audience.

### 2. Identify the Purpose

Determine what the documentation must accomplish.

Possible purposes include:

- Installation
- Configuration
- Usage
- Development
- API reference
- Troubleshooting
- Architecture
- Contribution
- Deployment
- Project overview

Do not add sections that do not support the purpose.

### 3. Collect Verified Information

Use available project sources such as:

- Source code
- Configuration files
- Package manifests
- Existing documentation
- Scripts
- Tests
- Command output
- Project structure

Prefer the actual project state over assumptions.

If information cannot be verified, clearly identify the uncertainty.

### 4. Organize the Information

Use a logical structure.

A typical technical document may include:

1. Overview
2. Requirements
3. Installation
4. Configuration
5. Usage
6. Development
7. Testing
8. Troubleshooting
9. Architecture
10. Contribution
11. License

Use only the sections relevant to the document.

### 5. Write Precise Instructions

Commands and procedures should be:

- Correct
- Complete
- Ordered
- Reproducible
- Easy to copy

Do not invent commands, paths, configuration values, or dependencies.

### 6. Include Practical Examples

Examples should reflect realistic project usage.

Examples must:

- Be technically valid.
- Match the documented interface.
- Avoid misleading placeholders when real values are required.
- Clearly distinguish examples from production configuration.

### 7. Document Important Constraints

Include relevant:

- Requirements
- Compatibility limitations
- Security considerations
- Environment requirements
- Known limitations
- Dependencies
- Version constraints

Do not hide important limitations.

### 8. Keep Documentation Maintainable

Prefer concise, structured documentation over unnecessary repetition.

Avoid:

- Duplicate explanations
- Outdated instructions
- Unnecessary prose
- Unsupported claims
- Dead links
- Commands that no longer exist

When project behavior changes, update related documentation.

### 9. Verify the Documentation

Check that:

- Commands exist.
- Paths exist.
- File names are correct.
- Features described actually exist.
- Configuration examples are valid.
- Version information is accurate.
- Links work when verification is possible.

Documentation should reflect the current project state.

## Examples

### Example 1 — README

A project needs a README.

DOCUMENTATION should include the information needed to understand and use the project, such as:

- Project purpose
- Features
- Requirements
- Installation
- Usage
- Development commands
- Testing
- Contribution
- License

Only include claims supported by the project.

### Example 2 — Installation Guide

A user needs to install the project.

DOCUMENTATION should:

1. Identify prerequisites.
2. Provide installation commands.
3. Explain required configuration.
4. Explain how to verify installation.
5. Include common installation problems when relevant.

### Example 3 — API Documentation

An API endpoint needs documentation.

DOCUMENTATION should describe:

- Endpoint
- HTTP method
- Authentication requirements
- Parameters
- Request format
- Response format
- Error conditions
- Example request
- Example response

The documentation must match the actual API behavior.

## Validation

Before completing a documentation task, verify:

- [ ] The intended audience is understood.
- [ ] The purpose of the document is clear.
- [ ] Information is based on verified sources.
- [ ] Commands and paths are accurate.
- [ ] Examples match the actual system.
- [ ] Important requirements are documented.
- [ ] Important limitations are documented.
- [ ] Security considerations are included when relevant.
- [ ] No unsupported claims were introduced.
- [ ] Duplicate or unnecessary content was avoided.
- [ ] Documentation reflects the current project state.
- [ ] The document is understandable to its intended audience.

## Related Skills

- MASTER.skill.md
- RESEARCH.skill.md
- REVIEW.skill.md
- QUALITY.skill.md
- VALIDATION.skill.md
- DEBUGGING.skill.md
- PLANNING.skill.md