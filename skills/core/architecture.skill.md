---
name: ARCHITECTURE
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

# ARCHITECTURE

## Objective

Design, evaluate, and improve the structure of software systems so they remain understandable, maintainable, secure, testable, and appropriate for their requirements.

ARCHITECTURE should prioritize simple designs that satisfy current requirements while allowing reasonable future growth without unnecessary complexity.

## Activation

Activate ARCHITECTURE when:

- A new application or system needs to be designed.
- A project needs architectural planning.
- Major components or modules need to be reorganized.
- Technologies or architectural patterns need to be evaluated.
- A system has excessive coupling or complexity.
- Data flow between components needs to be designed.
- APIs, services, databases, or frontend/backend boundaries need architectural decisions.
- A monolithic or distributed system needs structural evaluation.
- A project needs architectural documentation.

## Workflow

### 1. Understand the Requirements

Identify:

- Functional requirements
- Non-functional requirements
- Users and actors
- Data requirements
- Security requirements
- Performance requirements
- Availability requirements
- Scalability requirements
- Deployment environment
- Integration requirements
- Current project constraints

Do not choose an architecture before understanding the actual requirements.

### 2. Inspect the Existing System

For an existing project, inspect:

- Directory structure
- Major modules
- Application boundaries
- APIs
- Database structure
- Authentication
- External services
- Configuration
- Deployment
- Existing tests
- Dependency relationships

Prefer improving the existing architecture over unnecessary rewrites.

### 3. Identify System Boundaries

Define clear boundaries between:

- Presentation
- Application logic
- Domain logic
- Data access
- External integrations
- Infrastructure

Boundaries should reduce unnecessary coupling and make responsibilities clear.

### 4. Define Components

For each major component identify:

- Responsibility
- Inputs
- Outputs
- Dependencies
- Public interfaces
- Data ownership
- Failure behavior

Each component should have a clear purpose.

### 5. Design Data Flow

Document how information moves through the system.

Consider:

- Request flow
- Response flow
- Persistent data
- Caching
- Events
- External services
- Authentication context
- Error propagation

Avoid unnecessary data transformations.

### 6. Manage Dependencies

Prefer dependency relationships that are:

- Explicit
- Minimal
- Testable
- Stable

Avoid unnecessary circular dependencies and excessive coupling.

### 7. Choose Architectural Patterns

Select patterns based on actual requirements.

Possible patterns include:

- Layered architecture
- Modular monolith
- Client-server
- REST APIs
- Event-driven architecture
- Microservices
- Serverless
- Repository pattern
- Service layer
- MVC

Do not use a complex pattern simply because it is popular.

### 8. Evaluate Trade-offs

For important architectural decisions consider:

- Complexity
- Development speed
- Maintenance cost
- Performance
- Scalability
- Reliability
- Security
- Testing
- Operational requirements
- Team capabilities

Every significant architectural choice should have a reason.

### 9. Design for Failure

Identify likely failure points:

- Database failures
- Network failures
- External API failures
- Invalid input
- Authentication failures
- Resource exhaustion
- Dependency failures

Define appropriate behavior such as:

- Retry
- Timeout
- Fallback
- Error response
- Circuit breaking
- Graceful degradation

Only use mechanisms that are appropriate for the system.

### 10. Consider Security Boundaries

Review:

- Trust boundaries
- Authentication
- Authorization
- Secret management
- Data access
- Network boundaries
- Administrative operations

Security should be part of the architecture rather than added after implementation.

### 11. Consider Testing

Architecture should make important components testable.

Prefer:

- Clear interfaces
- Dependency injection when useful
- Isolated business logic
- Predictable data access
- Testable modules

Avoid architectures that require excessive infrastructure just to test simple logic.

### 12. Document Architectural Decisions

For important decisions document:

- Problem
- Options considered
- Selected approach
- Reason
- Trade-offs
- Consequences

Keep architectural documentation synchronized with the actual system.

### 13. Verify the Architecture

Before implementation or major restructuring:

- Check that requirements are covered.
- Identify major risks.
- Confirm component responsibilities.
- Check dependencies.
- Review security boundaries.
- Confirm the design is practical to implement.

## Examples

### Example 1 — New Web Application

A new application needs frontend, backend, and database components.

ARCHITECTURE should:

1. Define frontend responsibilities.
2. Define backend responsibilities.
3. Define API boundaries.
4. Define database ownership.
5. Define authentication flow.
6. Define external integrations.
7. Define deployment boundaries.
8. Document major decisions.

### Example 2 — Modular Monolith

An existing application is becoming difficult to maintain.

ARCHITECTURE should:

1. Identify tightly coupled modules.
2. Identify duplicated responsibilities.
3. Define domain boundaries.
4. Separate modules.
5. Reduce unnecessary dependencies.
6. Preserve existing functionality.
7. Add tests around important boundaries.
8. Verify the resulting structure.

### Example 3 — Microservices Decision

A team is considering moving from a monolith to microservices.

ARCHITECTURE should evaluate:

- Actual scaling requirements
- Deployment requirements
- Team size
- Operational complexity
- Service boundaries
- Network reliability
- Data consistency
- Monitoring
- Failure handling

Do not recommend microservices solely because they appear more scalable.

## Validation

Before completing an architecture task, verify:

- [ ] Requirements are understood.
- [ ] Existing architecture was inspected when applicable.
- [ ] System boundaries are clearly defined.
- [ ] Component responsibilities are clear.
- [ ] Data flow is understood.
- [ ] Dependencies are explicit.
- [ ] Architectural patterns are justified.
- [ ] Trade-offs were considered.
- [ ] Failure scenarios were considered.
- [ ] Security boundaries were considered.
- [ ] Testing implications were considered.
- [ ] Important architectural decisions are documented.
- [ ] The proposed architecture is practical to implement.
- [ ] Unnecessary complexity was avoided.

## Related Skills

- MASTER.skill.md
- CODING.skill.md
- SECURITY.skill.md
- PLANNING.skill.md
- THINKING.skill.md
- DECISION.skill.md
- RESEARCH.skill.md
- REVIEW.skill.md
- QUALITY.skill.md
- TESTING.skill.md
- VALIDATION.skill.md
- DOCUMENTATION.skill.md