---
name: venture-decision
description: >-
  Facilitates kill, pivot, or proceed decisions for playground business ideas;
  writes dated decision logs and updates index status. Use when the user wants
  to decide whether to pursue an idea, archive it, or change wedge after review.
disable-model-invocation: true
---

# Venture Decision

## Before starting

Read:

- The idea's `ideas/<slug>-research.md` (at least Executive Summary, Problem, Open Questions, Next Steps)
- [ideas/templates/decision-log.md](../../../ideas/templates/decision-log.md)
- [PLAYBOOK.md](../../../PLAYBOOK.md)

Require: **both partners' views** or explicit "solo pre-read, decide on call." If only one perspective is present, list assumptions and questions for the partner — do not fake consensus.

## Workflow

1. **Prep** — Bullet: strongest case for Proceed, strongest case for Kill, best Pivot option (if any).
2. **Facilitate** — Use the user's input to select verdict: Kill | Pivot | Proceed.
3. **Write** — `ideas/decisions/YYYY-MM-DD-<slug>.md` from template (create `ideas/decisions/` if missing).
4. **Index** — Update `ideas/README.md`: note killed ideas in Description or add Status column if user wants; link decision in Detail column when killed.
5. **Research** — Update research doc status footer; for Pivot, patch Executive Summary + Proposed Solution per decision log.

## Verdict guidance

| Verdict | When |
|---------|------|
| **Kill** | No acute pain, no wedge, or strategic misfit; document lesson |
| **Pivot** | Pain real but solution/segment wrong; must name what changes |
| **Proceed** | Clear wedge + willing Owner + ≤2 week prototype acceptable |

## Do not

- Proceed without explicit user confirmation of verdict.
- Start prototype build in this skill.

## Output checklist

```
- [ ] ideas/decisions/YYYY-MM-DD-<slug>.md
- [ ] Research status footer updated
- [ ] ideas/README.md reflects outcome
- [ ] If Proceed: remind user to run venture-prototype-scope next
```
