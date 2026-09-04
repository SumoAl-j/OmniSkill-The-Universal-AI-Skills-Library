# OmniSkill

## Groups

- Implementation (5)
- Memory (1)
- Orchestration (3)
- Quality & Review (4)
- Reasoning (3)
- Reliability & Operations (10)
- Security (1)
- Testing (1)
- User Experience (2)

## Implementation

- api
- architecture
- coding
- database
- refactoring

## Memory

- MEMORY

## Orchestration

- MASTER
- PLANNING
- ROUTER

## Quality & Review

- DEBUGGING
- QUALITY
- REVIEW
- VALIDATION

## Reasoning

- DECISION
- RESEARCH
- THINKING

## Reliability & Operations

- caching
- configuration
- dependencies
- deployment
- error_handling
- git
- observability
- performance
- reliability
- scalability

## Security

- security

## Testing

- testing

## User Experience

- DOCUMENTATION
- ux_ui

## Release Information

**Status:** Stable library release
**Version:** 1.0.0
**Calibrated system score:** 7.5/10

### What OmniSkill is

OmniSkill is a **skill-content library** for AI agents (ChatGPT, Claude, Gemini, Cursor, Copilot, Cline, and others). It provides 30 structured skill definitions — markdown files with YAML frontmatter — that guide how an LLM reasons about, routes, and executes tasks across software development domains.

### What OmniSkill is not

OmniSkill is **not an agent runtime, orchestrator, or execution engine**. It has no code that activates, routes, or executes skills. Skill selection, routing, and execution are performed by the LLM that loads these skill definitions into its context. This means:

- **No runtime enforcement of safety rules.** The MASTER Pre-Action Safety Check and SECURITY Content Trust Boundary are documentation guidance for the consuming LLM. They cannot intercept or block runtime behavior.
- **No runtime enforcement of handoff rules.** THINKING↔DECISION handoff consistency is an authoring-time static check. Detecting unproductive loops requires an orchestrator with state tracking across turns, which OmniSkill does not provide.
- **Skill selection is LLM-driven.** ROUTER's mappings and examples guide routing, but there is no programmatic skill selection. Routing correctness depends on the LLM following ROUTER's guidance.

### Verified benchmarks

- **T18** (routing R1-R10): PASS — all routing tests pass, F1-F6 fixes verified
- **T19** (over-routing stress): PASS — simple tasks activate minimal skill sets
- **T20** (under-routing stress): PASS — complex/security tasks activate correct skills
- **T21** (security S1-S5): partially reproducible — no current content failure confirmed
  - S1 (Content Trust Boundary): PASS at content-guidance level; runtime enforcement unavailable
  - S2, S3, S5: original benchmark definitions unavailable in accessible repository materials; substantial content coverage observed in SECURITY.skill.md; no content failure confirmed
  - S4 (pre-action safety): PARTIAL PASS — MASTER Pre-Action Safety Check + Phase 1 authoring guard present; runtime enforcement unavailable

### Major improvements in 1.0.0

- Explicit SECURITY routing in ROUTER typical mappings (F3)
- Improved routing examples and dependency-order model (F1, F2)
- RESEARCH explicit handoff to DECISION/THINKING
- THINKING/DECISION boundary clarification (Example 2 note, step 6 wording)
- Weighted DECISION decision criteria (step 4 practical prioritization)
- VALIDATION alwaysApply clarification
- ROUTER re-routing/deactivation clarification (step 6)
- REVIEW→SECURITY delegation language (step 5, step 10)
- MASTER Pre-Action Safety Check (3-tier framework)
- SECURITY Content Trust Boundary (14-point section)
- Destructive-operation authoring guard (Phase 1 P2-8)
- THINKING/DECISION handoff consistency guard (Phase 1 P2-10)

### Remaining limitations

These are architectural limitations of the skill-library design, not release blockers:

- **No runtime/orchestrator/execution layer.** OmniSkill is a skill-content library only. There is no code that activates, routes, or executes skills.
- **No runtime enforcement of safety, content trust, or handoff rules.** The MASTER Pre-Action Safety Check, SECURITY Content Trust Boundary, and THINKING/DECISION handoff rules are documentation guidance or authoring-time checks. They cannot intercept runtime behavior. Runtime enforcement requires an external orchestrator not present in this repository.
- **Skill selection is LLM-driven.** ROUTER's mappings and examples guide routing, but there is no programmatic skill selection. Routing correctness depends on the LLM following ROUTER's guidance.
- **Some Phase 0 security benchmarks not formally reproducible.** The original definitions for S2, S3, and S5 are not available in the accessible portions of the Phase 0 benchmark report. Substantial content coverage is observed in SECURITY.skill.md, but formal PASS cannot be claimed for those benchmarks without their original definitions.

### Validation

- 30/30 skills valid
- `npm run lint` — PASS
- `npm run validate` — PASS
- `npm run duplicate-check` — PASS
- `npm run health` — PASS

### Repository

- Repository: https://github.com/SumoAl-j/OmniSkill-The-Universal-AI-Skills-Library
- License: ISC
- Issues: https://github.com/SumoAl-j/OmniSkill-The-Universal-AI-Skills-Library/issues
