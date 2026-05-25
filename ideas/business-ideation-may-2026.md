# Business Ideation — May 2026

**Partners:** Karn + Will  
**Repo:** `karn-will-playground`  
**Purpose:** Shared record of how we explore ideas, what we decided in May 2026, and what to do next.

---

## Summary

We set up a repeatable venture loop (research → decision → prototype → demo → retro), documented two product directions (**Relay** and **Source**), and committed to **one validation cycle on Source first** while keeping Relay in research-only until customer interviews complete.

---

## Operating model

Full workflow: [PLAYBOOK.md](../PLAYBOOK.md)

| Principle | What it means |
|-----------|----------------|
| One artifact per phase | No jumping straight to code without research + decision |
| Owner drives, partner reviews | Draft vs. challenge — not dual authorship |
| Time-box | Research 1–2 sessions; prototype ≤2 weeks |
| Kill early | Documented kills are progress |
| Open repo | Async handoffs via Git + markdown |

### Cursor skills (project)

| Skill | Phase |
|-------|--------|
| `venture-research` | Deep research docs |
| `venture-decision` | Kill / Pivot / Proceed |
| `venture-prototype-scope` | Prototype brief |
| `venture-prototype-build` | `demos/<slug>/` |

Templates: [templates/](./templates/)

---

## Ideas in flight

| Idea | Owner | Status | Doc |
|------|-------|--------|-----|
| **Relay** — AI-native small business OS | Will | Research | [small-business-app-research.md](./small-business-app-research.md) |
| **Source** — Referral graph CRM | Karn | Prototype | [source-referral-crm-research.md](./source-referral-crm-research.md) |
| **Brainstorm** — What to change / sell | Will | Capture | [wills-sales-ideas-2026-05-25.md](./wills-sales-ideas-2026-05-25.md) |

**Relationship:** Source is the growth layer (attribution, advocacy); Relay is the ops layer (threads, scheduling, billing). They can integrate later; Source can also stand alone.

---

## May 2026 recommendation (agreed direction)

**Do not build two prototypes in parallel.** Scope and learning suffer.

| Priority | Action |
|----------|--------|
| **1 — Source** | Proceed: graph + action-feed demo, then 10 shared owner interviews |
| **2 — Relay** | Research + discovery only (Will); no Relay code until interviews rank pains |
| **3 — Decide together** | After demo + interviews: double down on Source, pivot to Relay-first, or merge branding |

**Rationale:** Source has a narrower wedge, lower integration burden for a first demo, and a falsifiable hypothesis (do owners care who sends them business?). Relay’s MVP competes with Jobber/Square-scale scope.

---

## Decisions logged

| Date | Idea | Verdict | Record |
|------|------|---------|--------|
| 2026-05-25 | Source | **Proceed** (prototype + demo) | [decisions/2026-05-25-source.md](./decisions/2026-05-25-source.md) |
| — | Relay | Pending (after shared interviews) | — |

---

## Prototypes

| Slug | Hypothesis | Location |
|------|------------|----------|
| `source` | Owners grasp advocate chains and would act on suggested growth actions | [demos/source/](../demos/source/) |

Brief: [source-prototype-brief.md](./source-prototype-brief.md)

**Run demo:**

```bash
cd demos/source && npm install && npm run dev
```

---

## Next 2 weeks (checklist)

- [ ] Karn: run Source demo locally; walkthrough with Will
- [ ] Will: confirm Proceed on Source (or note dissent in decision log)
- [ ] Both: 10 interviews, one vertical (e.g. salons or trainers)
- [ ] Interview script: (1) referral attribution (2) daily tool fragmentation
- [ ] Optional: Earned Growth fake-door landing page (48h)
- [ ] Fill retro in [demos/source/README.md](../demos/source/README.md)
- [ ] Joint `venture-decision` on Source + Relay after interviews

---

## Artifacts map

```
ideas/
├── business-ideation-may-2026.md   ← this file
├── README.md                       ← index
├── *-research.md
├── *-prototype-brief.md
├── decisions/
└── templates/

demos/<slug>/
PLAYBOOK.md
.cursor/skills/venture-*
```

---

*Last updated: May 25, 2026*
