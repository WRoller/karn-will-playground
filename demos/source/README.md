# Source — Referral Graph Demo

Throwaway prototype for [Source](../../ideas/source-referral-crm-research.md). Tests whether owners grasp **advocate chains** and would use **suggested growth actions**.

**Brief:** [source-prototype-brief.md](../../ideas/source-prototype-brief.md)  
**Decision:** [2026-05-25-source.md](../../ideas/decisions/2026-05-25-source.md)

## Run locally

```bash
cd demos/source
npm install
npm run dev
```

Open the URL Vite prints (usually http://localhost:5173).

## Demo script (~3 min)

1. **Frame:** Bloom Studio salon — Source captured 90 days of activity; no manual CRM logging.
2. **Earned Growth:** 68% of new revenue from trust/referrals vs. paid — trend up 12%.
3. **Graph:** Lisa Chen as top advocate → 3 referred clients → $4,200 subtree LTV.
4. **Actions:** Walk through three cards; copy Maria thank-you message (mock send).

## What we learned

*(Fill in after showing Will / interview subjects.)*

- Comprehension:
- Action intent:
- Differentiation vs. their CRM:

## Suggested research updates

After retro, patch [source-referral-crm-research.md](../../ideas/source-referral-crm-research.md):

- Open Questions #1 (standalone vs Relay module) — informed by?
- Next Steps — mark graph prototype done; add interview findings

## Stack

Vite, React 19, TypeScript, Tailwind v4. All data in `src/data/seed.ts`.
