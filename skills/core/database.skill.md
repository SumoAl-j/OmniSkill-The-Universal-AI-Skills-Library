---
name: DATABASE
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

# DATABASE

## Objective

Design, implement, query, optimize, migrate, and maintain databases safely and reliably.

DATABASE should prioritize data integrity, correctness, security, maintainability, and performance while following the project's existing database architecture.

## Activation

Activate DATABASE when:

- A database needs to be designed.
- Tables, collections, or schemas need to be created or modified.
- SQL queries need to be written or optimized.
- An ORM or database client is being configured.
- Database migrations are required.
- Relationships between entities need to be designed.
- Transactions or concurrency need to be handled.
- Database performance needs investigation.
- Data integrity or validation needs review.
- Database security needs review.
- Backups, recovery, or production database changes are involved.

## Workflow

### 1. Understand the Data Requirements

Identify:

- Entities
- Attributes
- Relationships
- Constraints
- Required operations
- Expected data volume
- Read and write patterns
- Consistency requirements
- Security requirements

Do not design a schema without understanding how the data will be used.

### 2. Inspect the Existing Database

When working in an existing project, inspect:

- Database schema
- Migrations
- ORM models
- Existing queries
- Indexes
- Constraints
- Database configuration
- Seed data
- Tests

Follow existing conventions unless there is a clear reason to change them.

### 3. Design the Schema

Consider:

- Primary keys
- Foreign keys
- Relationships
- Unique constraints
- Nullability
- Default values
- Data types
- Check constraints
- Cascading behavior

Prefer a simple schema that accurately represents the domain.

### 4. Maintain Data Integrity

Use appropriate database constraints to prevent invalid states.

Consider:

- Foreign-key constraints
- Unique constraints
- Not-null constraints
- Check constraints
- Referential integrity
- Transaction boundaries

Do not rely exclusively on application-level validation when the database can safely enforce an important invariant.

### 5. Write Safe Queries

Queries should:

- Use parameterized values.
- Avoid unnecessary data retrieval.
- Select only required fields when practical.
- Handle errors appropriately.
- Preserve expected ordering.
- Respect authorization boundaries.

Never construct SQL queries by directly concatenating untrusted input.

### 6. Design Relationships Carefully

For relationships:

- Identify cardinality.
- Use appropriate foreign keys.
- Prevent orphaned records when necessary.
- Define deletion behavior intentionally.
- Avoid unnecessary duplication.

Consider whether one-to-one, one-to-many, or many-to-many relationships best represent the domain.

### 7. Use Transactions When Required

Use transactions when multiple related operations must succeed or fail together.

Consider:

- Atomicity
- Consistency
- Isolation
- Durability
- Concurrent updates
- Rollback behavior

Do not use transactions unnecessarily for independent operations.

### 8. Design Migrations Safely

Before changing a production schema:

1. Understand existing data.
2. Check compatibility.
3. Consider backward compatibility.
4. Avoid destructive changes without a migration strategy.
5. Test the migration.
6. Consider rollback or recovery.
7. Verify the resulting schema.

Never assume a migration is safe merely because it succeeds locally.

### 9. Optimize Performance

When performance problems exist, investigate evidence first.

Consider:

- Query plans
- Indexes
- N+1 queries
- Unnecessary joins
- Large result sets
- Pagination
- Connection usage
- Caching
- Data access patterns

Do not add indexes or caching blindly.

### 10. Review Indexes

Indexes should support actual query patterns.

Consider:

- Frequently filtered columns
- Join columns
- Sorting
- Uniqueness
- Composite indexes
- Index maintenance cost

Avoid creating excessive indexes that increase write and storage costs without providing meaningful benefit.

### 11. Handle Concurrency

When multiple operations may modify the same data, consider:

- Race conditions
- Lost updates
- Transaction isolation
- Atomic operations
- Locking
- Optimistic concurrency

Do not assume sequential execution in a concurrent system.

### 12. Protect Database Security

Review:

- Credentials
- Connection strings
- Access permissions
- Least privilege
- SQL injection
- Sensitive data
- Encryption
- Backups
- Logs
- Production access

Never commit database passwords, connection secrets, or API credentials.

### 13. Test Database Changes

When appropriate, test:

- Schema creation
- Migrations
- Queries
- Constraints
- Relationships
- Transactions
- Invalid data
- Edge cases
- Rollback behavior

Use realistic test data when database behavior depends on data volume or relationships.

### 14. Verify the Final State

After database changes:

- Run migrations.
- Verify the resulting schema.
- Run relevant tests.
- Check affected queries.
- Check application integration.
- Confirm that no unintended data loss occurred.

## Examples

### Example 1 — New Database Table

A booking system needs a new appointments table.

DATABASE should:

1. Identify appointment fields.
2. Identify relationships with users, employees, and services.
3. Define primary and foreign keys.
4. Add appropriate constraints.
5. Add indexes based on actual queries.
6. Create a migration.
7. Test the migration and related queries.

### Example 2 — Slow Query

A query takes several seconds.

DATABASE should:

1. Reproduce the slow query.
2. Inspect the query plan.
3. Check filtering and joins.
4. Check existing indexes.
5. Identify unnecessary data retrieval.
6. Apply the smallest effective optimization.
7. Measure performance again.

### Example 3 — Schema Migration

A column needs to be changed in production.

DATABASE should:

1. Inspect existing records.
2. Determine whether the change is backward compatible.
3. Create a safe migration.
4. Test it against representative data.
5. Consider rollback or recovery.
6. Apply the migration.
7. Verify the resulting schema and application behavior.

## Validation

Before completing a database task, verify:

- [ ] Data requirements are understood.
- [ ] Existing database structure was inspected when applicable.
- [ ] Schema relationships are correct.
- [ ] Primary and foreign keys are appropriate.
- [ ] Important constraints are enforced.
- [ ] Queries use safe parameter handling.
- [ ] Authorization boundaries are respected.
- [ ] Transactions are used when required.
- [ ] Migrations are tested when applicable.
- [ ] Performance was considered using evidence.
- [ ] Indexes are justified by query patterns.
- [ ] Concurrency risks were considered when relevant.
- [ ] Database credentials and secrets are protected.
- [ ] Relevant tests were performed.
- [ ] The final database state was verified.

## Related Skills

- MASTER.skill.md
- CODING.skill.md
- SECURITY.skill.md
- ARCHITECTURE.skill.md
- DEBUGGING.skill.md
- REVIEW.skill.md
- QUALITY.skill.md
- VALIDATION.skill.md
- RESEARCH.skill.md
- THINKING.skill.md