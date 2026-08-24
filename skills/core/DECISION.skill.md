---
name: DECISION
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

# DECISION

## Objective

Make clear, evidence-based decisions by identifying the objective, constraints, alternatives, risks, trade-offs, and expected outcomes.

DECISION should prioritize the option that best satisfies the actual objective rather than simply choosing the easiest, fastest, or most popular option.

## Activation

Activate DECISION when:

- Multiple valid alternatives already exist.
- The user asks which option is better.
- A technical or architectural choice must be made between known options.
- Tools, frameworks, libraries, platforms, or strategies need to be compared.
- There are meaningful trade-offs between cost, security, performance, simplicity, or maintainability.
- The best choice depends on project requirements or constraints.
- A decision could materially affect the project.

DECISION is about choosing between known alternatives and evaluating their trade-offs. Use THINKING when the alternatives or the reasoning itself still need to be derived.

## Workflow

### 1. Identify the Objective

Determine:

- What outcome is required?
- What problem is being solved?
- What matters most?
- What would make the decision successful?

Do not optimize for secondary goals before identifying the primary objective.

### 2. Identify Constraints

Check for:

- Budget
- Time
- Technical limitations
- Platform requirements
- Security requirements
- Existing architecture
- Team capabilities
- Compatibility
- Maintenance requirements
- Scalability requirements

Do not ignore explicit constraints.

### 3. Identify the Options

List the realistic options available.

Do not create artificial alternatives merely to make one option appear better.

Remove options that clearly violate mandatory requirements.

### 4. Define Decision Criteria

Evaluate options using criteria relevant to the objective.

Common criteria include:

1. Correctness
2. Security
3. Maintainability
4. Simplicity
5. Performance
6. Scalability
7. Cost
8. Compatibility
9. Development speed
10. Long-term risk

Not every criterion is equally important.

### 5. Compare the Options

Compare each realistic option against the decision criteria.

Separate:

- Facts
- Assumptions
- Estimates
- Opinions
- Unknowns

Do not present assumptions as verified facts.

### 6. Evaluate Risks and Trade-offs

For each important option identify:

- Main advantages
- Main disadvantages
- Technical risks
- Security risks
- Maintenance costs
- Migration costs
- Opportunity costs
- Potential failure modes

Consider both short-term and long-term consequences.

### 7. Select the Best Option

Choose the option that best satisfies the objective and constraints.

Do not choose an option merely because:

- It is newer.
- It is more popular.
- It is easier initially.
- It has more features.
- It is familiar.

The recommendation must be supported by the decision criteria.

### 8. Explain the Decision

Provide:

- Recommended option
- Why it is recommended
- Important trade-offs
- Main risks
- Conditions under which another option would be better

Keep the conclusion clear and actionable.

### 9. Define the Next Action

A decision should lead to an actionable next step.

State what should happen next when appropriate.

## Examples

### Example 1 — Choosing a Framework

A project can use Framework A or Framework B.

DECISION should:

1. Identify project requirements.
2. Identify existing technologies.
3. Compare compatibility.
4. Compare development complexity.
5. Compare maintainability.
6. Compare performance requirements.
7. Evaluate ecosystem and dependency risks.
8. Recommend the option that best fits the project.

### Example 2 — Choosing a Database

A project needs persistent storage.

DECISION should:

1. Identify data requirements.
2. Determine transaction requirements.
3. Determine expected scale.
4. Check existing infrastructure.
5. Compare realistic database options.
6. Consider operational complexity.
7. Consider security and backup requirements.
8. Select the best fit.

### Example 3 — Choosing Between Two Implementations

Two implementations solve the same problem.

DECISION should:

1. Confirm both satisfy the functional requirement.
2. Compare complexity.
3. Compare maintainability.
4. Compare performance.
5. Compare security implications.
6. Compare future extensibility.
7. Select the implementation with the best overall trade-off.

## Validation

Before completing a decision task, verify:

- [ ] The actual objective was identified.
- [ ] Important constraints were identified.
- [ ] Realistic alternatives were considered.
- [ ] Decision criteria were defined.
- [ ] Facts were separated from assumptions.
- [ ] Important trade-offs were considered.
- [ ] Security implications were considered.
- [ ] Long-term consequences were considered.
- [ ] A clear recommendation was made.
- [ ] The recommendation is supported by evidence or reasoning.
- [ ] Important uncertainty was disclosed.
- [ ] A practical next action was identified when appropriate.

## Related Skills

- MASTER.skill.md
- THINKING.skill.md
- RESEARCH.skill.md
- PLANNING.skill.md
- QUALITY.skill.md
- REVIEW.skill.md
- VALIDATION.skill.md