---
name: RELIABILITY
version: 1.0.0
category: core
priority: critical
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

# RELIABILITY

## Objective

Design, operate, and improve software systems so they remain available, predictable, recoverable, and correct under expected failures, unexpected conditions, dependency outages, and operational stress.

RELIABILITY should focus on preventing avoidable failures, limiting failure impact, recovering safely, and verifying that systems behave correctly when components fail.

## Activation

Activate RELIABILITY when:

- A system must remain available during failures.
- External services or dependencies may become unavailable.
- Timeouts, retries, or circuit breakers are being designed.
- Graceful degradation is required.
- A service experiences intermittent failures.
- Data or operations must be recoverable.
- High availability is required.
- Background jobs or queues can fail.
- A deployment or infrastructure change may affect availability.
- Resource exhaustion is possible.
- Failure recovery needs to be designed or reviewed.
- A system needs resilience or fault-tolerance improvements.

## Workflow

### 1. Understand the Reliability Requirements

Identify:

- Availability requirements
- Recovery requirements
- Critical functionality
- Acceptable downtime
- Acceptable data loss
- Expected traffic
- Dependency requirements
- Failure scenarios
- Recovery objectives

Do not assume every component requires the same reliability level.

### 2. Identify Critical Components

Map components that can affect system availability.

Consider:

- Application servers
- Databases
- Caches
- Queues
- External APIs
- Authentication services
- Storage
- Networks
- DNS
- Infrastructure
- Background workers

Identify single points of failure where relevant.

### 3. Identify Failure Modes

Consider realistic failures such as:

- Process crashes
- Database outages
- Network failures
- Timeout
- Dependency errors
- Invalid responses
- Resource exhaustion
- Disk failures
- Memory pressure
- Queue backlogs
- Deployment failures
- Configuration errors
- Credential expiration
- Partial service outages

Focus on realistic and evidence-supported risks.

### 4. Define Failure Boundaries

Determine which failures should remain isolated.

Avoid allowing a failure in one component to unnecessarily bring down unrelated functionality.

Consider:

- Service boundaries
- Process boundaries
- Queue boundaries
- Database boundaries
- Tenant boundaries
- Resource pools

### 5. Use Timeouts

External operations should not wait indefinitely.

Define appropriate timeouts for:

- HTTP requests
- Database operations
- Queue operations
- File operations
- External services

Timeout values should reflect actual operation requirements.

Avoid infinite waits.

### 6. Design Retries Carefully

Retries can improve reliability but can also amplify failures.

When using retries:

- Use bounded retry counts.
- Use appropriate backoff.
- Consider jitter.
- Retry only operations that are safe to retry.
- Respect server or dependency limits.
- Avoid retry storms.

Do not retry every error automatically.

### 7. Use Circuit Breakers When Appropriate

For unstable external dependencies, consider circuit-breaker behavior.

A circuit breaker can:

- Detect repeated failures.
- Temporarily stop requests.
- Allow recovery time.
- Prevent cascading failures.

Use circuit breakers when the dependency behavior and workload justify them.

### 8. Design Graceful Degradation

Determine what functionality can continue when dependencies fail.

Examples:

- Serve cached data.
- Disable non-critical features.
- Queue work for later.
- Return partial results.
- Use a fallback provider.
- Continue serving read-only functionality.

Do not silently produce incorrect data as a fallback.

### 9. Protect Critical Operations

For important operations, consider:

- Idempotency
- Transactions
- Atomic operations
- Validation
- Duplicate detection
- Consistency guarantees

Retries must not accidentally perform the same irreversible operation multiple times.

### 10. Design for Idempotency

Operations that may be retried should be safe to execute more than once when practical.

Common approaches include:

- Idempotency keys
- Unique constraints
- Transaction identifiers
- Deduplication
- State checks

Do not assume network failures mean an operation was never completed.

### 11. Manage Resource Limits

Reliability depends on controlled resource usage.

Consider limits for:

- Memory
- CPU
- Connections
- Threads
- Workers
- Queue depth
- Request body size
- File size
- Concurrent requests
- Storage

Unbounded resources can turn traffic spikes into outages.

### 12. Use Backpressure

When downstream systems cannot keep up, control incoming work.

Possible techniques include:

- Queue limits
- Concurrency limits
- Rate limiting
- Request rejection
- Load shedding
- Bounded worker pools

Do not allow unlimited work to accumulate.

### 13. Protect Against Cascading Failures

A failure in one component should not automatically overload others.

Review:

- Retry amplification
- Connection exhaustion
- Queue growth
- Thread exhaustion
- Database overload
- Dependency fan-out

Use isolation and limits where necessary.

### 14. Handle Queues and Background Jobs

For asynchronous work, consider:

- Retry policies
- Dead-letter queues
- Visibility timeouts
- Duplicate processing
- Poison messages
- Queue limits
- Job timeouts
- Worker crashes
- Recovery after restart

Background processing should have explicit failure behavior.

### 15. Design Recovery

Define what happens after failure.

Consider:

- Restart behavior
- State recovery
- Database recovery
- Queue recovery
- Cache rebuilding
- Connection re-establishment
- Partial operation recovery

Recovery should restore correct behavior rather than merely restarting processes.

### 16. Define Backup and Restore Requirements

For important data:

- Determine backup frequency.
- Define retention.
- Test restoration.
- Verify backup integrity.
- Define recovery procedures.

A backup that has never been successfully restored should not be assumed to be reliable.

### 17. Consider Disaster Recovery

When required, define:

- Recovery Time Objective
- Recovery Point Objective
- Backup location
- Failover process
- Dependency requirements
- Recovery ownership
- Communication process

Disaster recovery should be tested rather than existing only as documentation.

### 18. Handle Deployments Safely

Reliability during deployment may require:

- Health checks
- Rolling deployments
- Canary releases
- Feature flags
- Automated rollback
- Database migration safety
- Backward compatibility

Do not deploy changes that require unavailable rollback paths without understanding the risk.

Follow the DEPLOYMENT Skill for deeper deployment guidance.

### 19. Monitor Reliability

Track meaningful indicators such as:

- Availability
- Error rate
- Latency
- Saturation
- Dependency failures
- Queue depth
- Resource utilization
- Recovery time
- Retry volume

Follow the OBSERVABILITY Skill for deeper monitoring and telemetry guidance.

### 20. Detect Failure Early

Use appropriate:

- Health checks
- Readiness checks
- Liveness checks
- Dependency checks
- Alerting
- Synthetic checks

Health checks should represent actual service readiness rather than simply confirming that a process is running.

### 21. Test Failure Scenarios

When practical, test:

- Dependency outage
- Timeout
- Network failure
- Process restart
- Database failure
- Queue failure
- Resource exhaustion
- Invalid dependency responses
- Deployment rollback
- Recovery behavior

Failure testing should be controlled and appropriate to the environment.

### 22. Review Security and Reliability Together

Security controls can affect reliability.

Consider:

- Credential expiration
- Certificate expiration
- Rate limits
- Authentication service outages
- Secret-management availability
- Access-control dependencies

Avoid solving reliability problems by weakening security controls.

Follow the SECURITY Skill for deeper security requirements.

### 23. Document Operational Procedures

Document:

- Failure modes
- Recovery procedures
- Escalation paths
- Dependencies
- Health checks
- Backup procedures
- Rollback procedures
- Known limitations

Documentation should be usable during an incident.

### 24. Verify Reliability Improvements

After making a reliability change:

1. Reproduce the relevant failure scenario.
2. Confirm the system fails safely.
3. Verify recovery behavior.
4. Measure the relevant reliability indicators.
5. Confirm no unnecessary degradation was introduced.
6. Run relevant tests.

A reliability improvement is incomplete until its behavior has been verified.

## Examples

### Example 1 — External API Failure

An application depends on an external API.

RELIABILITY should:

1. Define a request timeout.
2. Determine which failures are retryable.
3. Use bounded retries with backoff when appropriate.
4. Prevent retry storms.
5. Provide a safe fallback when possible.
6. Monitor dependency failures.
7. Verify recovery when the API becomes available again.

### Example 2 — Background Job Processing

A worker processes queued jobs.

RELIABILITY should consider:

- Job timeout
- Retry count
- Duplicate processing
- Dead-letter handling
- Worker crashes
- Queue growth
- Backpressure
- Recovery after restart

### Example 3 — Database Outage

An application temporarily loses database access.

RELIABILITY should:

1. Detect the failure.
2. Avoid indefinite database waits.
3. Prevent excessive retries.
4. Protect the application from connection exhaustion.
5. Provide appropriate degraded behavior if possible.
6. Recover connections after the database returns.
7. Verify data consistency.

### Example 4 — Deployment Failure

A new deployment introduces errors.

RELIABILITY should:

1. Detect the failure through health checks and monitoring.
2. Stop or limit the rollout when appropriate.
3. Preserve service availability.
4. Roll back safely when possible.
5. Verify the previous version.
6. Investigate the root cause before redeploying.

## Validation

Before completing a reliability task, verify:

- [ ] Reliability requirements are understood.
- [ ] Critical components were identified.
- [ ] Relevant failure modes were considered.
- [ ] Single points of failure were identified when relevant.
- [ ] Failure boundaries are appropriate.
- [ ] Timeouts are defined for operations that can block.
- [ ] Retry behavior is bounded and appropriate.
- [ ] Backoff and jitter are considered when relevant.
- [ ] Idempotency was considered for retryable operations.
- [ ] Graceful degradation was considered.
- [ ] Resource limits are defined where necessary.
- [ ] Backpressure is used when required.
- [ ] Cascading failures were considered.
- [ ] Background-job failure behavior is defined when relevant.
- [ ] Recovery behavior is defined.
- [ ] Backup and restore requirements are addressed when relevant.
- [ ] Disaster recovery is considered when required.
- [ ] Deployment failure behavior is addressed.
- [ ] Reliability indicators are observable.
- [ ] Health checks represent meaningful service state.
- [ ] Failure scenarios were tested when practical.
- [ ] Security controls were not weakened to improve reliability.
- [ ] Operational procedures are documented.
- [ ] Reliability improvements were verified.

## Related Skills

- MASTER.skill.md
- ARCHITECTURE.skill.md
- CODING.skill.md
- SECURITY.skill.md
- DEPLOYMENT.skill.md
- OBSERVABILITY.skill.md
- ERROR_HANDLING.skill.md
- TESTING.skill.md
- DEBUGGING.skill.md
- CONFIGURATION.skill.md
- DEPENDENCIES.skill.md
- CACHING.skill.md
- PERFORMANCE.skill.md
- API.skill.md
- DATABASE.skill.md
- REVIEW.skill.md
- QUALITY.skill.md
- VALIDATION.skill.md
- DOCUMENTATION.skill.md