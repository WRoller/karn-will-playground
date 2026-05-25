---
name: venture-research
description: >-
  Writes or updates venture research docs for Karn/Will playground ideas using
  the repo template and existing Relay/Source examples. Use when exploring a
  new business idea, expanding an index row, refreshing market/competitive
  sections, or after customer discovery.
disable-model-invocation: true
---

# Venture Research

## Before starting

Read:

- [PLAYBOOK.md](../../../PLAYBOOK.md) — phase and naming rules
- [ideas/README.md](../../../ideas/README.md) — index and Owners
- [ideas/templates/research-brief.md](../../../ideas/templates/research-brief.md) — section structure
- Closest existing doc in `ideas/*-research.md` for tone and depth

Ask the user for: **slug**, **Owner (Karn|Will)**, **new vs. update**, and any raw notes or calls to incorporate.

## Workflow

1. **Index** — Add or update row in `ideas/README.md` (1–2 sentence description, Owner, link).
2. **Research file** — Create `ideas/<slug>-research.md` from template, or patch specific sections if updating.
3. **Cross-links** — If the idea relates to Relay, Source, or another doc, state relationship in Executive Summary (mirror Source ↔ Relay pattern).
4. **Status footer** — Set `Status:` and date at bottom.

## Quality bar

- Executive Summary must stand alone for a 5-minute partner read.
- Pain table: real behaviors, not feature wishes.
- Competitive table: at least 4 named competitors.
- MVP features: ≤5 bullets; everything else is Phase 2+.
- Open Questions: honest unknowns, not disguised todos.
- Next Steps: ordered, actionable, with suggested Owner initials.

## Do not

- Build code in this skill (hand off to `venture-prototype-scope` / `venture-prototype-build`).
- Invent market statistics without labeling as estimate or citing a source.
- Duplicate full research for a pivot — update sections and link a decision log.

## Output checklist

```
- [ ] ideas/README.md row
- [ ] ideas/<slug>-research.md complete sections
- [ ] Related ideas cross-linked
- [ ] Status footer updated
```
