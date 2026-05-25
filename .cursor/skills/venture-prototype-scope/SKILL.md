---
name: venture-prototype-scope
description: >-
  Scopes minimal throwaway prototypes from approved venture ideas: wedge,
  non-goals, demo script, and build estimate in karn-will-playground. Use after
  a Proceed decision or when defining MVP demo boundaries before coding.
disable-model-invocation: true
---

# Venture Prototype Scope

## Prerequisites

- Proceed decision exists: `ideas/decisions/*-<slug>.md` or explicit user "Proceed"
- Research doc: `ideas/<slug>-research.md`

Read [ideas/templates/prototype-brief.md](../../../ideas/templates/prototype-brief.md) and [demos/README.md](../../../demos/README.md).

## Workflow

1. **Extract wedge** — One user journey from research MVP; reject everything else for this demo.
2. **Write brief** — `ideas/<slug>-prototype-brief.md` from template.
3. **Align with research** — Non-goals must contradict nothing in Executive Summary; if tension, flag for Pivot.
4. **Estimate** — Total build ≤10 person-days unless user overrides; table tasks with Owner.
5. **Register demo** — Add row to `demos/README.md` Active demos table (Status: Planned).

## Wedge rules

- Demo must be **showable in 3 minutes** without setup monologue.
- Prefer **clickable UI** over architecture diagrams.
- Mock integrations unless the hypothesis is specifically about an API.
- Name the **single metric** the demo proves (e.g. "owner sees referral chain in one screen").

## Do not

- Write application code (use `venture-prototype-build`).
- Scope full product MVP — prototype ≠ v1 launch.

## Output checklist

```
- [ ] ideas/<slug>-prototype-brief.md
- [ ] demos/README.md row (Planned)
- [ ] User confirmed Owner and deadline
```
