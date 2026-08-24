---
name: REFACTORING
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

# REFACTORING

## Objective

Improve the internal structure, readability, maintainability, and quality of existing software without changing its intended external behavior.

REFACTORING should reduce unnecessary complexity, duplication, coupling, and technical debt while preserving correctness and avoiding changes that are actually feature development or bug fixes.

## Activation

Activate REFACTORING when:

- Existing code is difficult to understand.
- Code contains unnecessary duplication.
- A module has excessive complexity.
- Functions or classes have unclear responsibilities.
- Dependencies between components are unnecessarily tight.
- Technical debt is slowing development.
- Existing code needs structural improvement.
- A codebase needs modernization without changing behavior.
- Tests are difficult to maintain because of poor structure.
- A previous implementation works but is unnecessarily complicated.

## Workflow

### 1. Understand the Existing Behavior

Before changing code, identify:

- What the code currently does.
- Which behavior must remain unchanged.
- Who depends on the code.
- Existing interfaces.
- Important side effects.
- Error behavior.
- Performance characteristics.
- Security requirements.

Do not refactor code whose behavior is not understood.

### 2. Establish a Baseline

Before refactoring, verify the current state when practical.

Use:

- Existing tests
- Type checking
- Linting
- Build commands
- Runtime checks
- Relevant benchmarks

A baseline helps distinguish refactoring regressions from pre-existing problems.

### 3. Identify the Structural Problem

Look for issues such as:

- Duplication
- Long functions
- Large classes
- Deep nesting
- Excessive conditionals
- Poor naming
- Tight coupling
- Low cohesion
- Dead code
- Unnecessary abstractions
- Repeated transformations
- Scattered business rules
- Inconsistent patterns

Focus on actual maintainability problems rather than stylistic preferences alone.

### 4. Define the Refactoring Goal

State what the refactoring should improve.

Examples:

- Reduce duplication.
- Separate responsibilities.
- Simplify control flow.
- Improve naming.
- Reduce coupling.
- Improve testability.
- Remove dead code.
- Establish a consistent abstraction.

Avoid vague goals such as "make the code better."

### 5. Preserve External Behavior

Unless explicitly requested, refactoring should not change:

- Public APIs
- User-visible behavior
- Business rules
- Data formats
- Authentication behavior
- Authorization behavior
- Error contracts
- Persistence semantics

If behavior must change, treat that as a separate change rather than hiding it inside a refactor.

### 6. Prefer Small Refactoring Steps

Make changes incrementally.

Examples include:

- Rename a variable.
- Extract a function.
- Extract a module.
- Simplify a conditional.
- Remove duplication.
- Introduce a focused abstraction.
- Move related logic together.

Small steps make regressions easier to identify.

### 7. Improve Naming

Names should communicate intent.

Review:

- Variables
- Functions
- Classes
- Modules
- Parameters
- Constants

Prefer clear domain-oriented names over abbreviations or vague names.

Avoid renaming large numbers of unrelated symbols without a clear reason.

### 8. Reduce Function Complexity

When a function does too much, consider:

- Extracting smaller functions.
- Separating validation from processing.
- Separating data transformation from side effects.
- Moving unrelated responsibilities elsewhere.
- Replacing deeply nested logic with clearer control flow.

Do not split functions merely to make them shorter.

The resulting responsibilities should be clearer.

### 9. Improve Module Boundaries

A module should have a coherent responsibility.

Consider separating:

- Business logic
- Data access
- HTTP handling
- Validation
- Formatting
- External integrations
- Infrastructure concerns

Avoid creating excessive numbers of tiny modules without a meaningful boundary.

### 10. Reduce Duplication

When repeated logic has the same responsibility, consider extracting shared behavior.

Before creating an abstraction, determine whether the duplicated code is actually expected to evolve together.

Do not abstract code merely because two sections look similar.

### 11. Avoid Premature Abstraction

Abstractions should solve a real recurring problem.

Avoid:

- Generic wrappers without a clear need.
- Excessive interfaces.
- Deep inheritance hierarchies.
- Framework-like abstractions for small features.
- Configuration layers that provide little value.

Prefer simple code when complexity does not provide a meaningful benefit.

### 12. Improve Cohesion

Related behavior should be grouped together.

Look for components that combine unrelated responsibilities.

Examples:

- Authentication mixed with database logic.
- UI rendering mixed with business rules.
- Network requests mixed with formatting.
- Validation mixed with unrelated persistence logic.

Move responsibilities toward coherent boundaries.

### 13. Reduce Coupling

Components should depend on clear and stable interfaces.

Consider:

- Dependency injection
- Narrow interfaces
- Encapsulation
- Event-based boundaries when justified
- Separating infrastructure from business logic

Do not introduce abstractions solely to reduce every dependency.

Some direct dependencies are simpler and appropriate.

### 14. Remove Dead Code

Identify:

- Unused functions
- Unused variables
- Unreachable branches
- Deprecated implementations
- Duplicate modules
- Obsolete configuration

Before removal, verify that the code is not used indirectly through:

- Dynamic imports
- Configuration
- Reflection
- Scripts
- External consumers

### 15. Simplify Control Flow

Look for:

- Deeply nested conditionals
- Repeated checks
- Redundant branches
- Complex boolean expressions
- Unnecessary temporary state

Use clear early returns, focused functions, and straightforward control flow when they improve readability.

Do not sacrifice readability for cleverness.

### 16. Preserve Error Handling

Refactoring must preserve appropriate error behavior.

Check:

- Error types
- Error messages when they are part of a contract
- HTTP status codes
- Retry behavior
- Logging
- Error propagation
- Recovery behavior

Do not silently swallow errors during refactoring.

### 17. Preserve Security

Refactoring must not weaken:

- Authentication
- Authorization
- Input validation
- Secret handling
- Encryption
- Security boundaries
- Tenant isolation

Security-sensitive behavior should be verified after structural changes.

Follow the SECURITY Skill for detailed security requirements.

### 18. Preserve Performance

A cleaner implementation is not automatically a faster implementation.

Check whether refactoring changes:

- Database queries
- Network calls
- Memory allocation
- Algorithmic complexity
- Caching
- Serialization
- Concurrency

Avoid performance regressions unless the trade-off is intentional and justified.

### 19. Improve Testability

Refactoring can make code easier to test.

Consider:

- Smaller units
- Clear dependencies
- Deterministic behavior
- Separated side effects
- Focused interfaces

Do not introduce production abstractions solely for tests unless they also improve the design.

### 20. Update Tests When Structure Changes

Tests may need to change when implementation structure changes.

Prefer tests that verify behavior rather than private implementation details.

Avoid rewriting tests simply because the code moved if the existing behavioral tests remain valid.

### 21. Refactor in Safe Increments

After each meaningful change:

1. Run relevant tests.
2. Run type checking when available.
3. Run linting.
4. Run the build when appropriate.
5. Compare behavior with the baseline.

Do not accumulate a large unverified refactor.

### 22. Review the Result

After refactoring, check:

- Is the code actually simpler?
- Are responsibilities clearer?
- Is duplication reduced?
- Is coupling reduced?
- Is the abstraction justified?
- Is readability improved?
- Did complexity move somewhere else?
- Did behavior remain unchanged?

A refactor is not successful merely because the diff is large.

### 23. Avoid Mixing Refactoring With Feature Work

Separate:

- Refactoring
- Bug fixes
- New features
- Dependency upgrades
- Formatting-only changes

Mixing unrelated changes makes review and verification harder.

If multiple changes are necessary, keep them logically separated when practical.

### 24. Keep Diffs Focused

Avoid unrelated:

- Formatting changes
- File renames
- Dependency changes
- Configuration changes
- Comment rewrites

A focused diff is easier to review and safer to verify.

### 25. Document Significant Refactoring

For substantial changes, document:

- Original problem
- Refactoring goal
- Structural changes
- Behavior guarantees
- Testing performed
- Remaining technical debt

Small obvious refactors generally do not require extensive documentation.

## Examples

### Example 1 — Long Function

A function validates input, queries a database, transforms data, and sends an HTTP response.

REFACTORING should:

1. Identify the separate responsibilities.
2. Preserve the existing behavior.
3. Extract focused functions or modules.
4. Keep the API contract unchanged.
5. Run tests and validation.
6. Verify that database and network behavior did not unintentionally change.

### Example 2 — Duplicated Logic

Several modules implement the same business rule independently.

REFACTORING should:

1. Confirm that the rules are actually identical.
2. Determine whether they should evolve together.
3. Extract shared logic when justified.
4. Replace duplicated implementations.
5. Run relevant tests.
6. Verify that all callers preserve their previous behavior.

### Example 3 — Excessive Abstraction

A small feature uses multiple interfaces, wrappers, factories, and configuration layers.

REFACTORING should:

1. Identify whether the abstractions provide real value.
2. Remove unnecessary layers.
3. Preserve required extension points.
4. Simplify the dependency graph.
5. Run tests and validation.
6. Confirm that the resulting design is easier to understand.

### Example 4 — Dead Code

A module contains an old implementation that appears unused.

REFACTORING should:

1. Search for references.
2. Check scripts and configuration.
3. Check dynamic usage when relevant.
4. Confirm that the implementation is obsolete.
5. Remove it.
6. Run tests and builds.
7. Verify that no supported workflow depends on it.

## Validation

Before completing a refactoring task, verify:

- [ ] Existing behavior is understood.
- [ ] A baseline was established when practical.
- [ ] The structural problem was identified.
- [ ] A clear refactoring goal was defined.
- [ ] External behavior is preserved unless explicitly changed.
- [ ] The refactoring is performed in manageable steps.
- [ ] Naming was improved where necessary.
- [ ] Function responsibilities are clearer.
- [ ] Module boundaries are appropriate.
- [ ] Meaningful duplication was reduced.
- [ ] Premature abstractions were avoided.
- [ ] Cohesion was improved where necessary.
- [ ] Unnecessary coupling was reduced.
- [ ] Dead code was removed only after verification.
- [ ] Control flow remains readable.
- [ ] Error handling was preserved.
- [ ] Security behavior was preserved.
- [ ] Performance regressions were considered.
- [ ] Testability was improved when appropriate.
- [ ] Relevant tests were updated or preserved.
- [ ] Tests, linting, type checks, or builds were run when applicable.
- [ ] The final design is simpler or more maintainable.
- [ ] Unrelated changes were avoided.
- [ ] The final diff is focused.
- [ ] Significant refactoring decisions were documented when necessary.

## Related Skills

- MASTER.skill.md
- CODING.skill.md
- ARCHITECTURE.skill.md
- REVIEW.skill.md
- QUALITY.skill.md
- DEBUGGING.skill.md
- TESTING.skill.md
- SECURITY.skill.md
- PERFORMANCE.skill.md
- RELIABILITY.skill.md
- SCALABILITY.skill.md
- DEPENDENCIES.skill.md
- CONFIGURATION.skill.md
- DOCUMENTATION.skill.md
- VALIDATION.skill.md
- THINKING.skill.md
- PLANNING.skill.md