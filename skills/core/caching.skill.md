---
name: CACHING
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

# CACHING

## Objective

Design, implement, evaluate, and maintain caching strategies that improve performance and scalability while preserving correctness, consistency, security, and predictable failure behavior.

CACHING should only be introduced when there is a clear performance or scalability benefit and the cached data can be invalidated or allowed to expire safely.

## Activation

Activate CACHING when:

- Repeated operations are expensive.
- Data is requested frequently.
- API or database performance needs improvement.
- Expensive computations are repeated.
- Response latency needs reduction.
- External service calls are unnecessarily repeated.
- A system needs to reduce database or network load.
- Cache invalidation or expiration needs to be designed.
- Existing caching causes stale or incorrect data.
- Cache-related memory or storage usage needs investigation.

## Workflow

### 1. Identify the Caching Opportunity

Determine:

- What operation is expensive?
- How frequently is it requested?
- How expensive is it?
- How often does the underlying data change?
- How much stale data is acceptable?
- What is the expected cache hit rate?
- What happens when the cache is unavailable?

Do not introduce caching without identifying a measurable benefit.

### 2. Establish a Baseline

Measure relevant behavior before introducing caching.

Consider:

- Response latency
- Database query time
- External API latency
- CPU usage
- Request volume
- Throughput
- Resource usage

Use measurements to determine whether caching is actually needed.

### 3. Determine Cacheability

A value may be suitable for caching when:

- It is expensive to compute or retrieve.
- It is requested frequently.
- It changes relatively infrequently.
- Its result can be safely reused.
- Its cache key can be defined reliably.

Avoid caching values that are highly dynamic unless the consistency requirements permit it.

### 4. Define the Cache Key

Cache keys should uniquely identify the data being cached.

Consider:

- Resource identifier
- User or tenant scope
- Locale
- Request parameters
- API version
- Relevant permissions
- Data version

Avoid keys that can cause unrelated users or resources to share cached data incorrectly.

### 5. Protect Cache Isolation

Ensure cached data respects security boundaries.

Never allow a cache to accidentally expose:

- Another user's private data
- Another tenant's data
- Administrative information
- Authentication information
- Sensitive personal information

Cache keys and access controls must account for authorization boundaries.

Follow the SECURITY Skill for deeper security requirements.

### 6. Choose an Appropriate Cache Location

Possible cache locations include:

- In-memory process cache
- Browser cache
- CDN
- Reverse proxy
- Distributed cache
- Database-backed cache
- Application-level cache

Choose based on:

- Data size
- Lifetime
- Access pattern
- Distribution requirements
- Consistency requirements
- Failure behavior

Do not use a distributed cache when a simple local cache is sufficient.

### 7. Define Expiration

Choose an appropriate expiration strategy.

Common approaches include:

- Time-to-live
- Fixed expiration
- Sliding expiration
- Explicit invalidation
- Version-based invalidation

Expiration should reflect how frequently the underlying data changes and how much stale data is acceptable.

### 8. Design Invalidation

Cache invalidation should be explicit when stale data can cause incorrect behavior.

Consider invalidating cache entries when:

- Data is updated.
- Data is deleted.
- Permissions change.
- Configuration changes.
- A related resource changes.

Do not assume that a long TTL automatically solves consistency problems.

### 9. Choose the Correct Consistency Model

Determine whether the application requires:

- Strong consistency
- Eventual consistency
- Short-lived staleness
- Explicit refresh
- Versioned data

Caching should match the actual business requirement.

### 10. Handle Cache Misses

When data is not cached:

1. Retrieve or compute the source data.
2. Validate the result.
3. Store it in the cache when appropriate.
4. Return the result.

Cache misses should not create incorrect behavior.

### 11. Handle Cache Failures

The application should define what happens when the cache is unavailable.

Possible behavior includes:

- Read directly from the source.
- Temporarily disable caching.
- Retry with bounded limits.
- Return a controlled failure when the cache is required.

For non-critical caches, cache failure should generally not make the entire application unavailable.

### 12. Prevent Cache Stampedes

When many requests miss the same cache simultaneously, they may all perform the expensive operation.

Consider:

- Request coalescing
- Locks
- Single-flight mechanisms
- Staggered expiration
- Background refresh
- Probabilistic early refresh

Use these techniques only when the workload justifies their complexity.

### 13. Avoid Cache Poisoning

Validate cached data and cache inputs appropriately.

Be careful with:

- User-controlled cache keys
- HTTP cache headers
- Untrusted content
- Authorization-sensitive responses
- Query parameters
- Host or origin information

Do not allow untrusted input to cause incorrect or unauthorized data to be cached.

Follow the SECURITY Skill when cache behavior affects trust boundaries.

### 14. Control Cache Size

Define limits where appropriate.

Consider:

- Maximum entries
- Maximum memory usage
- Eviction policy
- Object size
- Retention time

Avoid unbounded caches that can cause memory or storage exhaustion.

### 15. Choose an Eviction Strategy

Depending on the workload, consider:

- Least recently used
- Least frequently used
- First-in-first-out
- Time-based expiration
- Explicit deletion

Choose based on actual access patterns rather than convention alone.

### 16. Consider Negative Caching

In some systems, failed lookups or confirmed missing resources may also be cached briefly.

Use short and appropriate expiration periods.

Avoid caching temporary failures as permanent absence.

### 17. Consider Write Behavior

When cached data can be modified, choose an appropriate strategy.

Possible patterns include:

- Cache-aside
- Read-through
- Write-through
- Write-behind
- Write-around

Choose based on consistency, reliability, and workload requirements.

### 18. Consider Sensitive Data

Caching sensitive data requires additional care.

Review:

- Encryption
- Access control
- Cache isolation
- Expiration
- Data retention
- Logging
- Shared-cache behavior

Do not cache sensitive information simply because it improves performance.

### 19. Measure Cache Effectiveness

Monitor:

- Cache hit rate
- Cache miss rate
- Eviction rate
- Cache size
- Latency
- Source-load reduction
- Error rate

A cache that rarely hits may add complexity without providing meaningful benefit.

### 20. Verify the Cache

Test:

- Cache hit
- Cache miss
- Expiration
- Invalidation
- Concurrent requests
- Cache failure
- Data updates
- Permission changes
- Cache isolation
- Eviction behavior

Verify that cached results remain correct under realistic conditions.

### 21. Document the Strategy

Document:

- What is cached
- Cache key
- TTL
- Invalidation rules
- Storage location
- Eviction strategy
- Failure behavior
- Consistency expectations
- Security considerations
- Monitoring metrics

Documentation should reflect the actual implementation.

## Examples

### Example 1 — Expensive Database Query

A frequently requested database query takes significant time.

CACHING should:

1. Measure the query latency and request frequency.
2. Determine whether the result is safe to reuse.
3. Define a cache key.
4. Select an appropriate cache.
5. Set a suitable TTL.
6. Invalidate the cache when source data changes if required.
7. Measure the hit rate and database-load reduction.

### Example 2 — User-Specific Data

An application caches dashboard data.

CACHING should:

1. Include the correct user or tenant scope in the cache key.
2. Verify authorization before returning cached data.
3. Prevent cross-user cache leakage.
4. Define appropriate expiration.
5. Invalidate data after relevant updates.

### Example 3 — External API

An external API has strict rate limits.

CACHING should:

1. Identify responses that are safe to reuse.
2. Define keys based on relevant request parameters.
3. Set an appropriate TTL.
4. Handle stale data according to business requirements.
5. Monitor cache hits and external API usage.
6. Define behavior when the cache is unavailable.

## Validation

Before completing a caching task, verify:

- [ ] The caching opportunity is clearly identified.
- [ ] A performance baseline was established when practical.
- [ ] The cached data is actually safe to reuse.
- [ ] Cache keys uniquely identify the required data.
- [ ] User and tenant isolation is preserved.
- [ ] Sensitive data is handled safely.
- [ ] Cache storage is appropriate for the workload.
- [ ] Expiration behavior is defined.
- [ ] Invalidation behavior is defined when necessary.
- [ ] Consistency requirements are understood.
- [ ] Cache misses are handled correctly.
- [ ] Cache failures have safe fallback behavior.
- [ ] Cache stampedes were considered when relevant.
- [ ] Cache poisoning risks were considered.
- [ ] Cache size is bounded when appropriate.
- [ ] An appropriate eviction strategy was selected.
- [ ] Write behavior is consistent with application requirements.
- [ ] Cache effectiveness is measurable.
- [ ] Cache behavior was tested when practical.
- [ ] The caching strategy is documented.
- [ ] Security and correctness were preserved.

## Related Skills

- MASTER.skill.md
- CODING.skill.md
- DATABASE.skill.md
- API.skill.md
- PERFORMANCE.skill.md
- SECURITY.skill.md
- ARCHITECTURE.skill.md
- CONFIGURATION.skill.md
- OBSERVABILITY.skill.md
- ERROR_HANDLING.skill.md
- TESTING.skill.md
- DEBUGGING.skill.md
- REVIEW.skill.md
- QUALITY.skill.md
- VALIDATION.skill.md
- DOCUMENTATION.skill.md