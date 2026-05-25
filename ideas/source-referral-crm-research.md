# Source: The Referral Graph CRM

## Executive Summary

Most small service businesses do not lose revenue because they lack a CRM — they lose it because their CRM is empty, wrong, or ignored. Industry data consistently shows that more than half of CRM rollouts fail to meet their goals, and roughly three-quarters of users report that less than half of their CRM data is accurate. AI features amplify bad data; they do not fix it.

Meanwhile, the highest-quality leads for salons, trainers, therapists, contractors, and boutique professionals still come from **word of mouth** — yet generic CRMs track **deals and pipeline stages**, not **who referred whom**, **advocacy strength**, or **when to ask for a referral without feeling salesy**.

**Source** is a capture-first, referral-native CRM for relationship-driven service businesses. It builds a living **referral graph** (clients, introducers, partners, and dormant advocates) and uses AI only on automatically captured signals — texts, emails, calendar events, payments, and booking outcomes — not on manual data entry. The product answers one question better than Salesforce, HubSpot, or spreadsheets: *"Who is sending me business, and what should I do next to grow through trust?"*

**Relationship to Relay:** Relay (see [small-business-app-research.md](./small-business-app-research.md)) is the AI-native **operating system** — scheduling, billing, messaging, client threads. Source is the **growth layer** — attribution, advocacy, and referral orchestration. They can stand alone or integrate; Source is the wedge when the pain is "I don't know where my clients come from" rather than "I juggle too many apps."

---

## The Problem

### Who We're Solving For

Owner-operators and small teams (1–15 people) where growth is primarily **referral-led**, not ad-led:

- Dental and medical practices (patient referrals)
- Therapists, coaches, and consultants (peer and client introductions)
- Salons, spas, and wellness studios
- Personal trainers and boutique fitness
- Wedding and event professionals
- Financial advisors and insurance agents (compliance-sensitive introductions)
- Home services with repeat and neighbor referral dynamics
- B2B micro-agencies that win through network, not outbound SDR teams

### The Pain Points

| Problem | Impact | Current Workaround |
|---------|--------|-------------------|
| **Invisible attribution** | Can't reward or thank the right advocate | "How did you hear about us?" at intake (often wrong or blank) |
| **CRM as homework** | Reps/owners stop logging; data rots | Spreadsheet + memory |
| **Pipeline theater** | Stages don't match referral reality | Ignore CRM except for email blast |
| **Wrong moment to ask** | Asking too early feels pushy; too late misses peak advocacy | Ad-hoc "know anyone?" |
| **Partner/referrer chaos** | Multiple introducers, informal commission deals | Email threads, lost BCCs |
| **AI on dirty data** | Lead scores and churn models misfire | Distrust of "smart" features |
| **Referral tools are siloed** | Spokk, ViralRef, Referral Genie solve campaigns, not relationships | Another login, no client context |

### Why Generic CRMs Fail Here

1. **Data model mismatch** — Built for "Lead → Opportunity → Closed Won," not "Sarah referred Mike who referred Jen."
2. **Entry burden** — Value only appears after hundreds of logged activities; a 3-person shop with 200 relationships never gets there.
3. **Growth blind spot** — Dashboards show revenue and tasks, not **earned growth** (retention + referrals vs. paid acquisition).
4. **Integration fatigue** — 72% of SMBs report integration issues; another CRM that doesn't talk to SMS, calendar, and payments dies on arrival.

### The Emotional Toll

Owners know referrals are their lifeline but feel awkward systematizing gratitude. They fear looking "corporate" when asking happy clients to share a link. They suspect their best clients send business but cannot prove it — so advocates go unrewarded and under-nurtured.

---

## Market Analysis

### Market Size

| Layer | Estimate | Notes |
|-------|----------|-------|
| **TAM** | ~$126B global CRM (2026) | Broad CRM spend |
| **SAM** | ~$12B CRM analytics + automation adjacent | Fastest-growing CRM subsegments |
| **SOM (initial)** | ~3M US service SMBs with referral-led growth | Subset of Relay's SAM, CRM-only buyer |
| **ARPU target** | $49–$129/mo | Below enterprise CRM, above one-off referral widgets |
| **Revenue potential (SOM slice)** | 200K customers × $79/mo ≈ **$190M ARR** at modest penetration |

### Trends Working In Our Favor

1. **Agentic CRM (2025–2026)** — Shift from "AI writes emails" to autonomous capture and follow-ups; Source aligns with Wave 3 without requiring a 50-seat sales team.
2. **Vertical/niche CRM rise** — Industry-specific CRMs show 2–3× higher lifetime value than horizontal tools forced to customize.
3. **CAC inflation** — Local service businesses are reducing paid ads; referral efficiency is a board-level topic even for 5-person shops.
4. **Earned Growth narrative** — Metrics like Fred Reichheld's Earned Growth (retention + referral vs. paid) resonate with owners who distrust ad ROI.
5. **Messaging-first clients** — Attribution must include SMS and DMs, not only web forms.

### Competitive Landscape

| Competitor | Strengths | Weaknesses vs. Source |
|-----------|-----------|------------------------|
| **HubSpot (free tier)** | Familiar, marketing automation | Pipeline-centric; referral graph is manual; SMBs abandon upkeep |
| **Jobber / Housecall Pro** | Ops + some CRM | Home-services vertical; weak referral graph and advocacy scoring |
| **GoHighLevel** | Funnels, automation | Agency-complex; not relationship-native |
| **Spokk / ViralRef** | Automated referral SMS, Square tie-in | Point solution; not full client relationship or partner graph |
| **Customer Referral Genie** | Simple referral pages | Campaign tool, not CRM or long-term advocacy |
| **Mention Me** | Enterprise referral + Name Share® | Overkill and price for local SMB |
| **Refersend** | BCC email tracking for B2B intros | Professional services only; not client-consumer graph |
| **Relay (internal)** | Unified ops + client threads | Broader scope; referral growth is a module, not the wedge |

### The Gap

No product owns **"the CRM you don't have to feed"** combined with **"the referral graph as the primary object."** Tools either:

- Demand logging (classic CRM),
- Run one-off referral campaigns (referral widgets), or
- Operate the whole business (Relay, Jobber) without making **advocacy and attribution** the hero.

**Source's position:** *Growth intelligence for businesses that run on trust and introductions — not for businesses that run on SDR quotas.*

---

## Proposed Solution: Source

### Core Philosophy

> "Your best marketing is a happy client. Source shows you who they are — and what to do next."

The central object is not a **deal** but a **node in the referral graph**: clients, advocates, partners, and introducers, connected by attributed edges (referred, introduced, co-attended, etc.).

### Architecture of the Experience

```
┌─────────────────────────────────────────────────────────┐
│                        SOURCE                            │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  │
│  │   Capture    │  │   Referral   │  │  Advocacy    │  │
│  │   Layer      │  │   Graph      │  │  Engine      │  │
│  │ (auto-log)   │  │  (primary)   │  │ (timing/ask) │  │
│  └──────┬───────┘  └──────┬───────┘  └──────┬───────┘  │
│         │                 │                 │          │
│         └─────────────────┼─────────────────┘          │
│                           │                            │
│                 ┌─────────▼─────────┐                  │
│                 │   Growth Copilot   │                  │
│                 │ (next best action) │                  │
│                 └─────────┬─────────┘                  │
│                           │                            │
│     ┌─────────────────────┼─────────────────────┐      │
│     ▼                     ▼                     ▼      │
│  Earned Growth      Partner Ledger        Integrations │
│  Dashboard            (B2B intros)      (Relay, etc.)│
└─────────────────────────────────────────────────────────┘
```

---

## Feature Breakdown

### 1. Zero-Entry Capture Layer

Automatically ingests (with consent and configuration):

- **SMS / business messaging** — Thread linked to contact
- **Email** — BCC or OAuth inbox; intro detection
- **Calendar** — Completed vs. no-show; frequency
- **Payments** — Stripe/Square: LTV, tip behavior, first visit vs. return
- **Booking / POS** — Optional integrations; webhook-first

**Rule:** If a human didn't confirm it, it stays **suggested** until confirmed — preserving trust in the graph.

**AI role:** Extract entities ("Mike mentioned his sister Jen"), propose edges, never silently overwrite attribution.

### 2. Referral Graph (Core)

Every contact has:

- **Role tags** — Client, advocate, partner, dormant, lost
- **Attributed edges** — `referred_by`, `introduced_by`, `works_at` (partner firm)
- **Strength score** — Recency, frequency, payment value, sentiment (from messages)
- **Chain view** — Visual: *Anna → (3 referrals) → $4,200 LTV subtree*

**Intake that works:** Lightweight prompts — "Who should we thank for sending you?" — plus inference from "I'm here because of Sarah" in SMS.

### 3. Advocacy Engine

Timing models (not generic drip campaigns):

- **Peak advocacy window** — e.g., 14–21 days after a 5-star visit or successful outcome (configurable by vertical)
- **Ask templates** — Personal, not corporate; owner voice preserved via AI draft + one-tap send
- **Dual-sided rewards** — Optional: both referrer and friend benefit (68% higher participation in dual-reward programs)
- **Do-not-ask list** — Sensitive relationships, complaints, HIPAA-style flags

**Proactive nudges to owner:**

- "James hasn't visited in 90 days but referred 4 people — call before asking for another intro."
- "Lisa is your #2 advocate this quarter; send a thank-you note?"

### 4. Partner Ledger (B2B introductions)

For professionals who refer *to* each other (attorneys, agents, therapists, contractors):

- Unique **intro tracking address** or shared pipeline
- Agreed commission / thank-you rules per partnership
- Status: introduced → meeting → engaged → closed → paid
- Audit trail for disputes (Refersend-style simplicity, consumer-grade UX)

### 5. Growth Copilot

Natural-language queries:

- "Where did last month's new clients come from?"
- "Who should I ask for a referral this week?"
- "Which partner hasn't sent anyone in 6 months?"
- "Draft a thank-you text to Maria for the Johnson family intro."

**Proactive surfaces:**

- Earned Growth score trend (referral + retention vs. paid)
- Advocates at risk (stopped referring, sentiment drop)
- Fake/spam referral flags (duplicate phones, self-referral patterns)

### 6. Earned Growth Dashboard

| Metric | Definition |
|--------|------------|
| **Earned Growth %** | Share of new revenue from retention + referrals vs. paid/other |
| **Advocate LTV** | Revenue from subtree of each advocate |
| **Time-to-first-referral** | Onboarding quality signal |
| **Referral conversion** | Introduced → booked → paid |
| **Paid vs. earned CAC** | Compare ad spend to referral program cost |

---

## Differentiators

### 1. Capture-First, Not Log-First

Competitors add AI to empty fields. Source treats **unlogged activity as the default** and human confirmation as the exception.

### 2. Graph-Centric, Not Pipeline-Centric

Salesforce's opportunity object is wrong for a salon where one client brings her book club. The graph is the product.

### 3. Referral Timing as Science

Campaign tools blast everyone. Source models **when** advocacy peaks per vertical and per client history.

### 4. Complements Relay (Doesn't Duplicate It)

Relay runs the business day-to-day; Source answers growth attribution. Integration story: shared client ID, thread events feed the graph.

### 5. Honest AI

No predictive lead score on 22% dirty data. Confidence labels on every inferred edge; one-tap confirm/correct.

---

## Business Model

### Pricing Tiers

| Tier | Price | Target | Key Features |
|------|-------|--------|--------------|
| **Solo** | $49/mo | 1 user, &lt;500 contacts | Graph, capture (2 channels), advocacy asks, basic dashboard |
| **Team** | $99/mo | 3 users | + Partner ledger, team attribution, unlimited capture channels |
| **Growth** | $129/mo | 10 users | + API, Earned Growth reporting, custom reward rules, priority support |

### Revenue Streams

1. **Subscription** (primary)
2. **Referral reward fulfillment fee** — Optional % on gift cards / credits processed through platform
3. **Integration marketplace** — Relay, Jobber, Square, Mindbody connectors
4. **Partner program** — Accountants and coaches resell to clients

### Unit Economics Target

| Metric | Target |
|--------|--------|
| CAC | $120–200 (community-led, vertical content) |
| LTV | $1,800–2,800 (24–30 mo at ~$85 blended ARPU) |
| LTV:CAC | 9–14× |
| Gross margin | 78–82% |
| Payback | 2–4 months |

---

## Go-To-Market Strategy

### Phase 1: Wedge (Months 1–6)

**Target:** Independent therapists, coaches, and estheticians in 2–3 metros.

**Why:**

- High referral coefficient; painful "how did you find us?" fields
- Low compliance overhead vs. HIPAA-first (add later)
- Owners live in SMS; capture layer proves value fast

**Channels:**

- "Know your referral graph" workshops with industry associations
- Calculator: **Earned Growth score** from simple survey → lead magnet
- YouTube/TikTok: "I stopped buying ads when I saw who actually sends clients"

### Phase 2: Expand (Months 6–18)

**Adjacent:** Dental/chiro (careful compliance), wedding pros, boutique insurance.

**Playbook:**

- Vertical playbooks (timing windows, ask scripts, reward norms)
- Integration launches (Relay first, then Square booking)
- Case studies with dollar attributed per advocate

### Phase 3: Platform (Months 18–36)

- API for referral graph export
- White-label for franchises ("Source powered by X")
- Aggregated benchmarks (anonymized): referral rate by vertical/city

---

## Technical Architecture (High-Level)

- **Graph DB** — Neo4j or PostgreSQL with recursive CTEs for referral trees; optimize for subtree LTV queries
- **Event ingestion** — Webhooks from Stripe, Twilio, Nylas (email/calendar), partner booking systems
- **Identity resolution** — Phone/email dedup; fuzzy match with human confirm
- **LLM pipeline** — Extract referral mentions from messages; structured output → proposed edges
- **Mobile** — React Native: daily "3 growth actions" feed, not desktop CRM clone
- **Compliance** — SOC 2 path; HIPAA BAA tier for healthcare vertical (Phase 2+)

---

## Risks & Mitigations

| Risk | Severity | Mitigation |
|------|----------|------------|
| **Privacy / surveillance feel** | High | Transparent capture settings; client-facing privacy policy templates |
| **Wrong attribution** | High | Suggested vs. confirmed edges; easy override; advocate thank-you only after confirm |
| **Relay overlap** | Medium | Clear positioning; integrate; Source as optional Relay module long-term |
| **Referral tool race** | Medium | Depth of graph + CRM context, not just SMS blast |
| **Healthcare compliance** | Medium | Delay HIPAA vertical until BAA and audit readiness |
| **Low engagement if no integrations** | High | Day-1 value: manual CSV import + intake question + SMS forwarding |

---

## Success Metrics (First 12 Months)

| Metric | Target |
|--------|--------|
| Businesses onboarded | 1,500 |
| MAU (weekly open) | 65% of paid accounts |
| MRR | $95K |
| Avg. confirmed referral edges per account | 40+ |
| % new clients with attributed source | 70%+ (vs. ~30% industry baseline) |
| Advocate thank-you / ask actions per month | 8+ per active account |
| NPS | 55+ |

---

## Open Questions for Further Research

1. **Standalone vs. Relay module** — Does Source convert better as its own brand or as "Relay Growth"?
2. **Reward economics** — Gift card fulfillment in-house vs. partner (Tremendous, etc.)?
3. **Healthcare wedge timing** — Is dental/chiro worth compliance cost in year one?
4. **Legal on partner commissions** — State-by-state rules for informal referral fees?
5. **Benchmark data moat** — Can anonymized earned-growth benchmarks by ZIP + vertical be a defensible asset?

---

## Next Steps

1. **Customer discovery** — 10 shared interviews (with Relay script): "How do you track who referred whom today?"
2. **Demo review** — Walk Will through [Source demo](../demos/source/); capture retro in demo README
3. **Fake door test** — Earned Growth calculator landing page + waitlist
4. ~~**Graph prototype**~~ — Done: [demos/source](../demos/source/) (chain view + action feed)
5. **Capture spike** — SMS forwarding → proposed edges with 90% precision target (post-interviews)
6. **Partner with Relay doc** — Align data model if both ideas advance together

---

*Document created: May 25, 2026*  
*Status: Proceed to prototype — see [decisions/2026-05-25-source.md](./decisions/2026-05-25-source.md), [source-prototype-brief.md](./source-prototype-brief.md), [demo](../demos/source/)*
