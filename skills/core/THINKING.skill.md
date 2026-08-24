---
name: THINKING
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

# THINKING

## Objective

Apply structured reasoning to technical problems, decisions, investigations, and implementation tasks.

THINKING should prioritize logic, evidence, explicit assumptions, and clear conclusions while avoiding unsupported guesses.

## Activation

Activate THINKING when:

- A problem is complex or ambiguous.
- Multiple explanations are possible.
- Requirements are incomplete.
- Evidence must be evaluated.
- A solution needs to be derived rather than recalled.
- Important assumptions could affect the result.
- The answer or cause is not yet known and must be reasoned out.

THINKING is about deriving, analyzing, and reasoning toward an answer when the answer is not already known.

## Workflow

### 1. Understand the Problem

Identify:

- The actual objective.
- The known facts.
- The expected outcome.
- The constraints.
- The unknown information.

Do not solve a different problem from the one requested.

### 2. Separate Facts From Assumptions

Classify information as:

- Verified fact
- User-provided information
- Reasonable inference
- Assumption
- Unknown

Do not treat assumptions as facts.

### 3. Decompose the Problem

Break complex problems into smaller parts.

Identify:

- Inputs
- Outputs
- Dependencies
- Constraints
- Failure points
- Decision points

Solve the relevant parts systematically.

### 4. Generate Hypotheses

When the cause or answer is unknown:

1. List plausible explanations.
2. Rank them by evidence and likelihood.
3. Identify what evidence would distinguish them.
4. Test the strongest explanations first.

Avoid random trial and error.

### 5. Evaluate Evidence

For each important claim:

- Identify supporting evidence.
- Check for contradictory evidence.
- Determine confidence.
- Identify missing information.

Prefer direct evidence over speculation.

### 6. Consider Alternatives

When multiple solutions exist:

- Identify realistic alternatives.
- Compare their advantages.
- Compare their disadvantages.
- Consider risks and trade-offs.
- Select the option that best fits the objective.

Do not create unnecessary alternatives.

### 7. Reach a Conclusion

The conclusion should follow from the available evidence and reasoning.

If the evidence is insufficient, explicitly state the uncertainty rather than inventing an answer.

### 8. Choose the Next Action

Translate reasoning into a practical next step.

The next action should:

- Reduce uncertainty.
- Test an important assumption.
- Resolve a blocker.
- Move the task toward completion.

### 9. Re-evaluate When New Evidence Appears

If new information contradicts the current conclusion:

1. Reassess the assumptions.
2. Update the reasoning.
3. Replace the previous conclusion if necessary.
4. Do not defend an incorrect conclusion merely because it was previously stated.

## Examples

### Example 1 — Debugging

A command fails unexpectedly.

THINKING should:

1. Identify the exact failure.
2. Separate the error message from the root cause.
3. List plausible causes.
4. Use available evidence to eliminate causes.
5. Test the strongest hypothesis.
6. Reach a conclusion based on evidence.

### Example 2 — Technical Decision

Two implementation approaches are available.

THINKING should:

1. Identify the actual objective.
2. Identify constraints.
3. Compare both approaches.
4. Evaluate risks and trade-offs.
5. Select the approach that best satisfies the requirements.

### Example 3 — Incomplete Information

A user asks a question without enough information to verify the answer.

THINKING should:

1. Identify what is known.
2. Identify what is missing.
3. Avoid inventing missing information.
4. State the limitation.
5. Request or identify the minimum information needed when appropriate.

## Validation

Before completing a reasoning task, verify:

- [ ] The actual problem was identified.
- [ ] Known facts were separated from assumptions.
- [ ] Relevant constraints were considered.
- [ ] The problem was decomposed when necessary.
- [ ] Plausible alternatives or hypotheses were considered.
- [ ] Important claims were supported by evidence.
- [ ] Contradictory evidence was considered.
- [ ] Uncertainty was clearly stated.
- [ ] The conclusion follows from the available evidence.
- [ ] The next action is practical and relevant.
- [ ] New evidence can update the conclusion.

## Related Skills

- MASTER.skill.md
- RESEARCH.skill.md
- DECISION.skill.md
- DEBUGGING.skill.md
- PLANNING.skill.md
- REVIEW.skill.md
- QUALITY.skill.md
- VALIDATION.skill.md