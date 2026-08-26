---
name: OBSERVABILITY
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

# OBSERVABILITY

## Objective

Make software behavior measurable and understandable through structured logs, metrics, traces, health checks, alerts, and diagnostic information.

OBSERVABILITY should help teams detect problems, understand their causes, measure system behavior, and verify system health without exposing sensitive information or creating unnecessary operational overhead.

## Activation

Activate OBSERVABILITY when:

- An application needs logging or monitoring.
- A production issue needs investigation.
- System health needs to be measured.
- APIs or services need metrics.
- Distributed requests need tracing.
- Health checks or readiness checks are required.
- Alerts need to be designed.
- Performance or reliability needs to be monitored.
- A system needs better diagnostic information.
- Logs are missing, inconsistent, excessive, or unsafe.
- A deployment needs post-release monitoring.

## Workflow

### 1. Understand the System

Identify:

- Services
- Applications
- APIs
- Databases
- External dependencies
- Background jobs
- Queues
- Infrastructure
- Important user flows
- Critical business operations
- Failure points

Understand what must be observable before deciding what telemetry to collect.

### 2. Define Important Signals

Consider the four core observability signals:

- Logs
- Metrics
- Traces
- Profiles when appropriate

Prioritize signals that help answer real operational questions.

### 3. Design Structured Logging

Logs should provide useful diagnostic information.

Consider:

- Timestamp
- Log level
- Event name
- Request or correlation ID
- Service name
- Relevant operation
- Error information
- Safe contextual metadata

Prefer structured logs over inconsistent free-form messages when the system supports structured logging.

### 4. Choose Appropriate Log Levels

Use levels consistently:

- DEBUG for detailed diagnostic information.
- INFO for important normal operations.
- WARN for unusual conditions that do not necessarily indicate failure.
- ERROR for failures requiring investigation.
- FATAL or equivalent only for severe conditions that prevent continued operation.

Do not log everything at high severity.

### 5. Protect Sensitive Information

Never unnecessarily log:

- Passwords
- Authentication tokens
- API keys
- Private keys
- Session secrets
- Payment credentials
- Sensitive personal information

Redact or minimize sensitive fields when logging is necessary.

Follow the SECURITY Skill whenever observability involves sensitive data.

### 6. Define Useful Metrics

Consider metrics such as:

- Request count
- Error rate
- Response latency
- Throughput
- CPU usage
- Memory usage
- Database latency
- Queue depth
- Job duration
- Active connections
- Cache hit rate
- Resource utilization

Prefer metrics that support specific operational decisions.

### 7. Measure Latency Correctly

When latency matters, consider:

- Average latency
- Median latency
- Percentiles such as p95 and p99
- Maximum latency
- Endpoint or operation
- Error correlation

Do not rely on averages alone when latency distributions are important.

### 8. Design Request Tracing

For systems with multiple services, consider:

- Trace IDs
- Span IDs
- Parent-child relationships
- Service boundaries
- External calls
- Database operations
- Queue operations

Tracing should make it possible to follow an important request across system boundaries.

### 9. Implement Correlation

Use consistent identifiers to connect related events.

Examples:

- Request ID
- Trace ID
- Job ID
- User-safe operation ID
- Transaction ID when appropriate

Do not expose sensitive identifiers unnecessarily.

### 10. Design Health Checks

Health checks should answer meaningful questions.

Consider:

- Liveness
- Readiness
- Dependency health
- Database connectivity
- Required service availability

A health endpoint should not expose internal secrets, credentials, or unnecessary infrastructure details.

### 11. Design Alerts

Alerts should identify conditions that require action.

Good alerts should be:

- Actionable
- Specific
- Meaningful
- Based on measurable thresholds
- Resistant to unnecessary noise

Avoid creating alerts for every warning or normal fluctuation.

### 12. Monitor Critical User Flows

Technical health alone may not prove that users can successfully use the application.

Monitor important flows such as:

- Login
- Registration
- Booking
- Payment
- Checkout
- Data submission
- Important API operations

Choose flows according to the application.

### 13. Correlate Failures

When investigating incidents, correlate:

- Logs
- Metrics
- Traces
- Deployments
- Configuration changes
- Dependency failures
- Database events

Look for temporal and causal relationships rather than isolated events.

### 14. Control Telemetry Volume

Observability has operational costs.

Consider:

- Log volume
- Metric cardinality
- Trace sampling
- Storage retention
- Query cost
- Network overhead

Collect enough information to diagnose important problems without creating unnecessary cost or noise.

### 15. Design for Failure

Observability systems themselves can fail.

Applications should avoid becoming unavailable merely because telemetry infrastructure is unavailable.

Prefer:

- Non-blocking logging when appropriate
- Safe fallbacks
- Bounded buffers
- Reasonable timeouts
- Failure isolation

Do not allow monitoring failures to unnecessarily become application failures.

### 16. Verify Observability

After implementing telemetry:

- Trigger expected events.
- Confirm logs are generated.
- Confirm metrics change correctly.
- Confirm traces connect correctly.
- Test health endpoints.
- Test alerts when practical.
- Verify sensitive data is not exposed.

Observability is not complete until the signals have been verified.

### 17. Document Operational Signals

Document:

- Important logs
- Important metrics
- Trace conventions
- Health checks
- Alert conditions
- Dashboard purpose
- Retention assumptions
- Known limitations

Documentation should reflect the actual implementation.

## Examples

### Example 1 — API Monitoring

An API needs production monitoring.

OBSERVABILITY should:

1. Record request counts.
2. Measure response latency.
3. Track error rates.
4. Include safe request or trace identifiers.
5. Record useful structured errors.
6. Monitor important endpoints.
7. Create actionable alerts for significant failures.

### Example 2 — Distributed Request

A request passes through several services.

OBSERVABILITY should:

1. Generate or propagate a trace ID.
2. Create spans for important operations.
3. Record service boundaries.
4. Include database and external-service timing when useful.
5. Correlate errors with the same trace.
6. Avoid exposing sensitive information.

### Example 3 — Production Incident

Users report intermittent failures.

OBSERVABILITY should:

1. Identify the affected operation.
2. Compare error rates over time.
3. Inspect latency metrics.
4. Search correlated logs.
5. Follow traces for failed requests.
6. Compare the timing with recent deployments or configuration changes.
7. Identify the most likely evidence-supported cause.
8. Verify the remediation.

## Validation

Before completing an observability task, verify:

- [ ] The important system components are understood.
- [ ] Relevant logs are available.
- [ ] Log levels are used consistently.
- [ ] Sensitive information is protected.
- [ ] Important metrics are defined.
- [ ] Latency is measured appropriately when relevant.
- [ ] Request correlation is available when useful.
- [ ] Distributed tracing is considered when relevant.
- [ ] Health checks provide meaningful information.
- [ ] Alerts are actionable.
- [ ] Critical user flows are considered.
- [ ] Telemetry volume and cost are controlled.
- [ ] Observability failures do not unnecessarily break the application.
- [ ] Logs, metrics, traces, and health checks were verified when applicable.
- [ ] Operational signals are documented.
- [ ] Security and privacy requirements are preserved.

## Related Skills

- MASTER.skill.md
- CODING.skill.md
- ARCHITECTURE.skill.md
- API.skill.md
- DATABASE.skill.md
- DEPLOYMENT.skill.md
- SECURITY.skill.md
- PERFORMANCE.skill.md
- DEBUGGING.skill.md
- TESTING.skill.md
- REVIEW.skill.md
- QUALITY.skill.md
- VALIDATION.skill.md
- DOCUMENTATION.skill.md