---
name: PERFORMANCE
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

# PERFORMANCE

## Objective

Identify, measure, diagnose, and improve software performance using evidence-based techniques.

PERFORMANCE should prioritize measurable improvements, correct behavior, maintainability, and appropriate resource usage rather than premature optimization.

## Activation

Activate PERFORMANCE when:

- An application is slow or unresponsive.
- API response times are too high.
- Database queries are slow.
- CPU or memory usage is excessive.
- A frontend renders inefficiently.
- A build or deployment process is unnecessarily slow.
- A performance regression is reported.
- Resource consumption needs investigation.
- A system needs performance optimization.
- Scalability concerns arise.

## Workflow

### 1. Define the Performance Problem

Identify:

- What is slow?
- How slow is it?
- Who or what is affected?
- When does the problem occur?
- What changed before the regression?
- What performance target is expected?

Do not optimize without first identifying the actual performance problem.

### 2. Establish a Baseline

Measure the current state using appropriate metrics such as:

- Response time
- Throughput
- CPU usage
- Memory usage
- Database query duration
- Network latency
- Bundle size
- Page load time
- Render time
- Build duration
- Error rate

Record measurements before making significant changes.

### 3. Reproduce the Problem

Determine whether the performance issue can be reproduced consistently.

Record:

- Environment
- Input or workload
- Request or operation
- Data volume
- Relevant versions
- Measurement method

If the problem cannot be reproduced, clearly state the limitation.

### 4. Locate the Bottleneck

Investigate systematically:

1. CPU
2. Memory
3. Database
4. Network
5. Disk or filesystem
6. Rendering
7. External services
8. Algorithms
9. Concurrency
10. Build tooling

Use profiling, logs, query plans, metrics, and benchmarks when available.

Do not assume that the slowest-looking code is the actual bottleneck.

### 5. Analyze Algorithms

Consider:

- Time complexity
- Space complexity
- Repeated computation
- Unnecessary loops
- Inefficient data structures
- Duplicate work
- Large-scale operations

Prefer algorithmic improvements when they provide meaningful benefits.

### 6. Optimize Database Access

When database performance is involved, inspect:

- Query execution time
- Query plans
- Indexes
- N+1 queries
- Unnecessary joins
- Excessive data retrieval
- Pagination
- Connection usage
- Caching

Do not add indexes or caching without evidence that they address the workload.

Follow the DATABASE Skill for deeper database-specific guidance.

### 7. Optimize API Performance

Consider:

- Request processing time
- Database calls
- External API calls
- Payload size
- Serialization
- Pagination
- Caching
- Connection reuse
- Parallel operations where safe

Avoid unnecessary network requests and duplicate work.

### 8. Optimize Frontend Performance

When relevant, inspect:

- Bundle size
- JavaScript execution
- Component rendering
- Unnecessary re-renders
- Large assets
- Image optimization
- Network requests
- Code splitting
- Lazy loading
- Caching

Do not optimize visual or rendering behavior at the expense of correctness or accessibility.

### 9. Optimize Memory Usage

Investigate:

- Memory leaks
- Unbounded collections
- Large objects
- Duplicate data
- Unnecessary caching
- Long-lived references
- Excessive buffering

Measure memory behavior before and after changes.

### 10. Consider Concurrency

When workloads are concurrent, inspect:

- Blocking operations
- Race conditions
- Lock contention
- Connection pools
- Worker utilization
- Queue behavior
- Parallelism limits

Do not introduce concurrency without considering correctness and resource limits.

### 11. Consider Caching

Caching may be appropriate when:

- Data is expensive to compute.
- Data is requested frequently.
- Data changes less frequently than it is read.
- Cache invalidation can be handled safely.

Define:

- Cache key
- Expiration
- Invalidation
- Storage
- Failure behavior

Do not cache data blindly.

### 12. Avoid Premature Optimization

Do not:

- Rewrite working code without evidence.
- Add unnecessary abstractions.
- Introduce complex caching without need.
- Optimize insignificant operations.
- Sacrifice readability for negligible gains.

Performance changes should have a measurable purpose.

### 13. Implement the Smallest Effective Change

Prefer the smallest change that addresses the identified bottleneck.

Preserve:

- Correctness
- Security
- Maintainability
- Compatibility
- Existing behavior

Avoid unrelated refactoring during performance work.

### 14. Benchmark the Result

After optimization:

1. Repeat the original measurement.
2. Compare against the baseline.
3. Check important workloads.
4. Check resource usage.
5. Confirm correctness.
6. Check for regressions.

Do not claim improvement without measurements when measurements are practical.

### 15. Document the Result

Record:

- Bottleneck
- Evidence
- Baseline
- Change
- New measurement
- Improvement
- Trade-offs
- Remaining limitations

Keep performance conclusions proportional to the available evidence.

## Examples

### Example 1 — Slow API Endpoint

An API endpoint takes several seconds to respond.

PERFORMANCE should:

1. Measure the endpoint.
2. Profile request processing.
3. Inspect database queries.
4. Check external API calls.
5. Identify the dominant bottleneck.
6. Apply the smallest effective optimization.
7. Measure again.
8. Confirm that response correctness is preserved.

### Example 2 — Slow Database Query

A database query becomes slow as data grows.

PERFORMANCE should:

1. Reproduce the query with representative data.
2. Measure execution time.
3. Inspect the query plan.
4. Check indexes and filtering.
5. Optimize the query or indexing strategy.
6. Re-run the benchmark.
7. Check write-performance trade-offs.

### Example 3 — Frontend Rendering Problem

A page becomes slow after adding a complex component.

PERFORMANCE should:

1. Measure rendering behavior.
2. Identify unnecessary renders.
3. Inspect expensive calculations.
4. Check network requests.
5. Optimize the relevant component.
6. Verify that behavior and accessibility remain correct.
7. Measure the improvement.

## Validation

Before completing a performance task, verify:

- [ ] The performance problem is clearly defined.
- [ ] A baseline measurement was established when practical.
- [ ] The issue was reproduced when possible.
- [ ] The actual bottleneck was investigated.
- [ ] Evidence supports the identified bottleneck.
- [ ] Algorithmic efficiency was considered when relevant.
- [ ] Database performance was considered when relevant.
- [ ] API performance was considered when relevant.
- [ ] Frontend performance was considered when relevant.
- [ ] Memory usage was considered when relevant.
- [ ] Concurrency was considered when relevant.
- [ ] Caching was introduced only when justified.
- [ ] The smallest effective change was preferred.
- [ ] Correctness was preserved.
- [ ] Security was preserved.
- [ ] Performance was measured again after the change when practical.
- [ ] Regressions were checked.
- [ ] Results and trade-offs were documented.

## Related Skills

- MASTER.skill.md
- CODING.skill.md
- DATABASE.skill.md
- API.skill.md
- ARCHITECTURE.skill.md
- DEPLOYMENT.skill.md
- SECURITY.skill.md
- DEBUGGING.skill.md
- TESTING.skill.md
- REVIEW.skill.md
- QUALITY.skill.md
- VALIDATION.skill.md
