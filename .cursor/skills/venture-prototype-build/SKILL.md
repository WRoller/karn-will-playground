---
name: venture-prototype-build
description: >-
  Implements throwaway demos under demos/ from an approved prototype brief in
  karn-will-playground. Use when building a clickable prototype, spike, or demo
  app for a venture idea after scoping.
disable-model-invocation: true
---

# Venture Prototype Build

## Prerequisites

- `ideas/<slug>-prototype-brief.md` approved
- Slug matches folder: `demos/<slug>/`

Read the brief end-to-end before writing code.

## Defaults (override only with reason in demo README)

| Area | Default |
|------|---------|
| Web UI | Vite + React + TypeScript in `demos/<slug>/` |
| Styling | Tailwind if already in repo; else minimal CSS |
| Data | Static JSON or in-memory seed — no database |
| Auth | None or fake "logged in as" selector |
| Deploy | Local only; document `npm run dev` |

If the brief specifies another stack, follow the brief.

## Workflow

1. **Scaffold** — `demos/<slug>/` with package.json, README, src/.
2. **Implement wedge only** — Every screen maps to a step in the brief's Demo script.
3. **README** — How to run, demo script copy, "What we learned" (placeholder OK until retro).
4. **Register** — Update `demos/README.md` Status → Active or Done.
5. **Retro prompt** — List 3 bullets for research doc "Open Questions" / "Next Steps" updates.

## Code principles

- Ugly and fast beats abstract and slow.
- No shared library extraction to monorepo root.
- Comment only non-obvious demo shortcuts (e.g. `// mocked Twilio`).

## Do not

- Expand scope beyond prototype brief non-goals.
- Add tests unless user asks.
- Commit secrets or `.env` with real keys.

## Output checklist

```
- [ ] demos/<slug>/ runs locally per README
- [ ] Demo script walkthrough possible in ≤3 min
- [ ] demos/README.md updated
- [ ] Suggested research doc patches listed for user
```
