---
name: SCALABILITY
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

# SCALABILITY

## Objective

Design and improve software systems so they can handle increasing users, traffic, data, workload, and operational complexity without unacceptable degradation in performance, reliability, correctness, or cost.

SCALABILITY should identify actual bottlenecks, choose appropriate scaling strategies, and avoid adding distributed-system complexity before it is justified by measurable requirements.

## Activation

Activate SCALABILITY when:

- Application traffic is increasing.
- User or data volume is expected to grow.
- A system is approaching resource limits.
- Performance degrades as workload increases.
- A service needs horizontal or vertical scaling.
- Database capacity is becoming a bottleneck.
- Background jobs or queues are growing.
- Infrastructure capacity needs planning.
- A system needs load balancing.
- A monolithic component is becoming a scaling constraint.
- Distributed processing is being considered.
- Capacity planning is required.

## Workflow

### 1. Understand the Scaling Requirements

Identify:

- Current workload
- Expected workload
- Peak workload
- Number of users
- Request rate
- Data volume
- Growth rate
- Latency requirements
- Availability requirements
- Budget constraints
- Geographic requirements

Do not design for arbitrary scale without evidence or a justified requirement.

### 2. Establish a Baseline

Measure the current system before changing its architecture.

Consider:

- Requests per second
- Response latency
- CPU usage
- Memory usage
- Database utilization
- Network utilization
- Queue depth
- Storage usage
- Error rate
- Throughput

A scaling decision should be based on measurable constraints whenever possible.

### 3. Identify the Bottleneck

Determine what actually limits the system.

Potential bottlenecks include:

- CPU
- Memory
- Database queries
- Database connections
- Disk I/O
- Network bandwidth
- External APIs
- Lock contention
- Serialization
- Queue processing
- Application logic
- Cache capacity

Do not scale components that are not responsible for the bottleneck.

### 4. Distinguish Vertical and Horizontal Scaling

Vertical scaling increases the resources available to an existing component.

Examples:

- More CPU
- More memory
- Faster storage
- Larger database instance

Horizontal scaling adds more instances or workers.

Examples:

- Multiple application servers
- Multiple workers
- Read replicas
- Distributed processing

Choose the simplest strategy that satisfies the actual requirement.

### 5. Evaluate Scaling Limits

Every architecture has limits.

Consider:

- Maximum instance capacity
- Database connection limits
- Storage limits
- Network limits
- Queue throughput
- External API limits
- Load-balancer capacity
- Cache capacity

Identify the next bottleneck that may appear after scaling the current one.

### 6. Design Stateless Services When Appropriate

Stateless application instances are easier to scale horizontally.

When possible:

- Store persistent state outside the application instance.
- Use shared storage for required state.
- Use external session storage when necessary.
- Avoid local state that prevents safe instance replacement.

Do not remove local state when doing so would introduce unnecessary complexity without a scaling benefit.

### 7. Use Load Balancing

When multiple instances serve the same workload, consider:

- Load distribution
- Health checks
- Connection handling
- Session behavior
- Failover
- Capacity

A load balancer should avoid sending traffic to unhealthy instances.

### 8. Scale Databases Carefully

Database scaling may involve:

- Query optimization
- Indexing
- Connection pooling
- Vertical scaling
- Read replicas
- Partitioning
- Sharding
- Caching
- Archiving
- Data lifecycle management

Optimize inefficient queries before introducing complex distributed database architecture.

### 9. Optimize Before Distributing

Before adding distributed systems, investigate simpler improvements.

Consider:

- Better queries
- Proper indexes
- Caching
- Batching
- Pagination
- Compression
- Connection pooling
- Efficient algorithms
- Reduced payload size

Do not use distributed architecture to compensate for inefficient implementation.

### 10. Design for Read and Write Patterns

Determine whether the workload is:

- Read-heavy
- Write-heavy
- Mixed
- Burst-based
- Batch-oriented
- Latency-sensitive

Scaling strategies should match the workload rather than applying the same architecture everywhere.

### 11. Use Caching Appropriately

Caching can reduce repeated computation and source-system load.

Consider:

- Cache hit rate
- Cache size
- TTL
- Invalidation
- Consistency
- Cache isolation
- Failure behavior

Follow the CACHING Skill for detailed caching requirements.

### 12. Use Queues for Asynchronous Work

When work does not need to happen synchronously, queues can help absorb bursts.

Consider:

- Queue capacity
- Worker count
- Processing time
- Retry behavior
- Dead-letter handling
- Ordering requirements
- Duplicate processing
- Backpressure

Do not introduce queues when synchronous processing is simpler and sufficient.

### 13. Control Concurrency

Increasing concurrency does not always increase throughput.

Consider limits for:

- Requests
- Workers
- Database connections
- Threads
- External API calls
- Queue consumers

Excessive concurrency can overload dependencies and reduce overall throughput.

### 14. Design Backpressure

When incoming work exceeds processing capacity, the system should control the load.

Possible approaches include:

- Rate limiting
- Queue limits
- Request rejection
- Load shedding
- Bounded worker pools
- Concurrency limits

Avoid unbounded queues or memory growth.

### 15. Handle Bursty Traffic

A system may have significantly higher peak traffic than average traffic.

Consider:

- Autoscaling
- Queue buffering
- Caching
- Rate limiting
- Pre-warming
- Capacity reservations
- Graceful degradation

Capacity should account for realistic peak behavior.

### 16. Consider Autoscaling Carefully

Autoscaling should use meaningful signals such as:

- CPU utilization
- Memory utilization
- Request rate
- Queue depth
- Latency
- Custom workload metrics

Avoid scaling based on metrics that do not represent actual capacity pressure.

### 17. Consider Data Growth

As data grows, review:

- Table size
- Index size
- Query performance
- Storage capacity
- Backup duration
- Restore duration
- Archival strategy
- Retention requirements

A database that performs well with small data may behave differently at larger scale.

### 18. Consider Partitioning and Sharding Carefully

Partitioning or sharding may help when a single data store cannot handle the workload.

Before using them, verify:

- The actual bottleneck.
- Partition key quality.
- Query patterns.
- Data distribution.
- Cross-partition operations.
- Rebalancing requirements.
- Operational complexity.

Do not introduce sharding without a demonstrated need.

### 19. Avoid Hotspots

Scaling can fail when a disproportionate amount of traffic reaches one resource.

Potential hotspots include:

- Popular records
- Single database rows
- Single partitions
- Sequential identifiers
- Shared locks
- One queue
- One cache entry

Identify and distribute concentrated workloads when necessary.

### 20. Consider External Service Limits

External dependencies may have fixed limits.

Review:

- Rate limits
- Connection limits
- Quotas
- Request sizes
- Throughput limits
- Regional availability
- Pricing tiers

Scaling your application does not help if an external dependency remains the bottleneck.

### 21. Control Cost

Scaling should consider operational cost.

Evaluate:

- Compute cost
- Database cost
- Storage cost
- Network cost
- Cache cost
- Monitoring cost
- Managed-service cost
- Idle capacity

Do not scale beyond what the workload and requirements justify.

### 22. Preserve Reliability During Scaling

Scaling changes should not introduce new failure modes unnecessarily.

Consider:

- Health checks
- Failover
- Retry behavior
- Deployment safety
- Data consistency
- Dependency capacity
- Recovery behavior

Follow the RELIABILITY Skill for detailed failure-handling requirements.

### 23. Preserve Security During Scaling

Scaling must preserve:

- Authentication
- Authorization
- Tenant isolation
- Secret handling
- Encryption
- Network controls
- Auditability

Do not weaken security controls to simplify scaling.

Follow the SECURITY Skill for detailed security requirements.

### 24. Test Under Load

When practical, test the system under realistic workload.

Measure:

- Throughput
- Latency
- Error rate
- Resource utilization
- Scaling response
- Database behavior
- Queue behavior
- Recovery behavior

Load tests should resemble realistic usage patterns rather than arbitrary stress alone.

### 25. Verify Scaling Behavior

After implementing a scaling change:

1. Reproduce the workload.
2. Measure performance.
3. Confirm the bottleneck improved.
4. Check for newly introduced bottlenecks.
5. Verify correctness.
6. Verify reliability.
7. Check operational cost.
8. Run relevant tests.

A scaling improvement is incomplete until its actual effect is verified.

### 26. Document Scaling Decisions

Document:

- Current capacity
- Expected capacity
- Bottlenecks
- Scaling strategy
- Limits
- Autoscaling rules
- Database strategy
- Queue strategy
- Cost considerations
- Failure behavior
- Monitoring requirements

Documentation should explain why the architecture scales the way it does.

## Examples

### Example 1 — API Traffic Growth

An API is receiving increasing traffic and response times are rising.

SCALABILITY should:

1. Measure request rate and latency.
2. Identify the bottleneck.
3. Determine whether the application or database is constrained.
4. Optimize inefficient operations first.
5. Scale application instances if appropriate.
6. Introduce load balancing when necessary.
7. Monitor the new bottleneck after scaling.

### Example 2 — Database Bottleneck

A database is reaching high CPU utilization.

SCALABILITY should:

1. Inspect slow queries.
2. Review indexes.
3. Check connection usage.
4. Measure read/write patterns.
5. Optimize inefficient queries.
6. Consider caching or read replicas when justified.
7. Consider partitioning or sharding only if simpler approaches are insufficient.

### Example 3 — Background Queue Growth

A queue continuously grows during peak traffic.

SCALABILITY should:

1. Measure incoming job rate.
2. Measure worker processing rate.
3. Identify processing bottlenecks.
4. Increase workers when capacity allows.
5. Control concurrency.
6. Use backpressure when necessary.
7. Monitor queue depth and processing latency.
8. Verify that downstream dependencies can handle the additional load.

### Example 4 — Sudden Traffic Spike

An application normally receives moderate traffic but occasionally experiences large bursts.

SCALABILITY should consider:

- Autoscaling
- Queue buffering
- Caching
- Rate limiting
- Load shedding
- Capacity planning
- Graceful degradation

The solution should protect the system without unnecessarily paying for peak capacity at all times.

## Validation

Before completing a scalability task, verify:

- [ ] Scaling requirements are clearly understood.
- [ ] A baseline was established when practical.
- [ ] The actual bottleneck was identified.
- [ ] Vertical and horizontal scaling were considered.
- [ ] The simplest suitable scaling strategy was preferred.
- [ ] Stateless architecture was considered when appropriate.
- [ ] Load balancing was considered when relevant.
- [ ] Database scaling requirements were evaluated.
- [ ] Query and implementation optimization were considered before complex distribution.
- [ ] Read/write workload characteristics were identified.
- [ ] Caching was considered when appropriate.
- [ ] Queue and asynchronous processing were considered when relevant.
- [ ] Concurrency limits are appropriate.
- [ ] Backpressure was considered.
- [ ] Bursty traffic was considered.
- [ ] Autoscaling signals are meaningful.
- [ ] Data growth was considered.
- [ ] Hotspots were considered.
- [ ] External dependency limits were considered.
- [ ] Cost implications were evaluated.
- [ ] Reliability was preserved.
- [ ] Security was preserved.
- [ ] Load or capacity testing was performed when practical.
- [ ] Scaling behavior was verified.
- [ ] Scaling decisions were documented.

## Related Skills

- MASTER.skill.md
- ARCHITECTURE.skill.md
- CODING.skill.md
- PERFORMANCE.skill.md
- CACHING.skill.md
- DATABASE.skill.md
- API.skill.md
- RELIABILITY.skill.md
- DEPLOYMENT.skill.md
- OBSERVABILITY.skill.md
- SECURITY.skill.md
- DEPENDENCIES.skill.md
- CONFIGURATION.skill.md
- ERROR_HANDLING.skill.md
- TESTING.skill.md
- DEBUGGING.skill.md
- REVIEW.skill.md
- QUALITY.skill.md
- VALIDATION.skill.md
- DOCUMENTATION.skill.md