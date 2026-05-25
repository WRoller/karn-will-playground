# Prototype Brief: Source — Referral Graph CRM

**Slug:** `source`
**Owner:** Karn
**Decision:** [2026-05-25-source.md](./decisions/2026-05-25-source.md) — Proceed
**Research:** [source-referral-crm-research.md](./source-referral-crm-research.md)

---

## Goal of this prototype

Test whether a service-business owner immediately understands **who drives their growth** and would act on **three concrete next steps** — without manual CRM entry.

## Wedge (only this)

1. **Referral graph view** — One advocate (Lisa) with a visual chain: referred clients and subtree LTV.
2. **Today's actions** — Three AI-suggested cards (thank-you, re-engage dormant advocate, ask-at-peak-window) with one-tap copy (mock send).
3. **Earned Growth snapshot** — Single headline metric (% revenue from referrals + retention vs. paid).

## Non-goals (explicit)

- Real SMS/email/calendar integrations
- Auth, billing, partner ledger, full contact CRUD
- Relay integration
- Mobile-native app (responsive web OK)

## Demo script (2–3 minutes)

1. **Context:** "You're a salon owner. Source ingested your last 90 days — no spreadsheet homework."
2. **Graph:** Open Lisa's chain → show 3 referrals and $4,200 subtree LTV.
3. **Actions:** Read today's top suggestion → "Thank Maria for the Johnson intro" → tap Copy message.
4. **Metric:** Point at Earned Growth % trending up — "68% of new revenue came from trust, not ads."

## Success criteria

| Signal | Pass | Fail |
|--------|------|------|
| Comprehension | Viewer names who their #1 advocate is in <30s | Needs long explanation |
| Action intent | Viewer says they'd send at least one suggested message | "Nice dashboard, wouldn't use" |
| Differentiation | Viewer says this isn't how their CRM looks today | "Same as pipeline view" |

## Technical approach

| Choice | Decision | Rationale |
|--------|----------|-----------|
| Stack | Vite + React + TypeScript | Playbook default |
| Styling | Tailwind | Fast, polished demo |
| Data | Static `seed.json` | No backend |
| Real vs. mocked | All mocked | Hypothesis is UX clarity, not capture accuracy |

## Build estimate

| Task | Owner | Days |
|------|-------|------|
| Scaffold + seed data | Karn | 0.5 |
| Graph + dashboard layout | Karn | 0.5 |
| Action cards + copy | Karn | 0.25 |

**Total:** ≤ 2 days

## After the demo

- [ ] Retro notes in demo README
- [ ] Update research "Open Questions" and "Next Steps"
- [ ] Index row status in `ideas/README.md`
