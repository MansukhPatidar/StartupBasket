---
title: "PaydayBeacon — Super-landing beacon for AU bookkeepers"
slug: aus-payday-super-watcher
date: 2026-05-15
category: Compliance / Australia
complexity: Medium
score: 80
verdict: STRONG GO
confidence: High
oneLiner: Cross-client watcher that confirms every employee's super landed in the 7-day Payday Super window.
tags:
  vertical: Compliance
  model: SaaS
  geography: Global
  secondary: [Australia-first, Bookkeeper-channel, Multi-tenant, Compliance-driven, AI-agent, SMB]
axes:
  problem: 18
  demand: 13
  build: 12
  distribution: 12
  revenue: 12
  time: 8
  defensibility: 5
founderFit: [technical-heavy, domain-expertise-required]
featured: true
---

# PaydayBeacon — Super-landing beacon for AU bookkeepers

## 1. One-liner

Cross-client watcher that confirms every employee's super landed in the 7-day Payday Super window — before the SGC clock bites.

## 2. Trend signal — why now?

On **1 July 2026**, Australia's biggest payroll reform in a decade goes live: **Payday Super**. Every employer must dispatch SG with each pay run, and the contribution must arrive at the employee's fund within **7 business days**. Miss it by an hour — even because of a clearing-house outage, a USI fund-merger lag, or a fund-side member-data mismatch — and the employer copes the **Super Guarantee Charge plus an administrative uplift of up to 60%**. SGC is non-deductible. The 7-day timer **does not pause** for technical failures.

Same day, the **Small Business Superannuation Clearing House (SBSCH)** — the free, ATO-run rail that ~300K SMEs relied on — **closes**. Every one of them must move to a paid clearing house (Wrkr, Rockfast, Xero auto-super, MYOB Pay Super, Reckon) within weeks. The ATO's own regulatory impact analysis estimates an extra **$1.2M annual compliance burden** across the affected cohort just from the SBSCH closure.

Weekly payroll = ~52 super cycles per year per employer (up from 4). For a bookkeeper with 30 SME clients on weekly cycles, that's ~1,500 reconciliation events per year — each with a 7-day fuse. Xero/MYOB/Wrkr give them a status screen **per client**. Nobody gives them the **portfolio view**.

Provenance:
  - Signal 1: ATO + super industry confirm SGC + up-to-60% uplift, 7-day window does not pause for tech delays — https://www.smartbusinesssolutions.com.au/insights/payday-super-compliance-and-penalties/ — 2026-05
  - Signal 2: SBSCH closes 1 July 2026, displacing ~300K SMEs onto paid alternatives, est. $1.2M extra annual burden — https://oia.pmc.gov.au/published-impact-analyses-and-reports/closing-atos-small-business-superannuation-clearing-house — 2026-05
  - Signal 3: 87% of SMEs say payday super will pressure cash flow, 91% support it — Xero/IPA survey — https://www.xero.com/us/media-releases/small-businesses-back-payday-super-but-late-payments-are-major-compliance-barrier/ — 2026-05
  Category: Regulatory arbitrage

## 3. The opportunity

Three reconciliation artefacts must agree every pay cycle: the **STP-reported super amount**, the **SuperStream contribution confirmation** from the fund, and the **bank-account debit** at the clearing house. When all three tie within 7 business days, the cycle is reconciled. When they don't, the bookkeeper has hours — not days — to chase the reject and re-lodge before Day 7.

Today, that reconciliation is done one client at a time, by logging into each Xero or MYOB org, opening the super payment screen, and cross-checking the bank statement. A bookkeeper running 30 client orgs cannot survey their portfolio in one screen. Wrkr and Rockfast (the leading dedicated rails) give a per-client timeline inside **their** clearing house — but only for clients on **their** rail. Xero auto-super and MYOB Pay Super give per-org views inside **their** product. None of them sit *above* all rails to ask the only question the bookkeeper actually needs answered each morning: **"of all my clients, did anyone's super not land yet?"**

Incumbents will not build this. Wrkr/Rockfast want the bookkeeper to switch their entire client book onto their gateway (commercial conflict). Xero/MYOB want the bookkeeper on **their** payroll product. The neutral cross-rail cockpit is the gap.

## 4. Target market

- **Primary customer:** Australian BAS agents and small accounting firms (2–15 staff) running payroll for 10–80 SME clients each. **16,893 registered BAS agents** + **46,849 registered tax agents** in Australia per TPB 2024–25 stats, and an estimated ~50K additional unregistered in-house bookkeepers servicing clients through agents.
- **Why they buy:** Each missed Day-7 confirmation = SGC + up to 60% uplift hitting the **client's** P&L. The bookkeeper carries the blame and the indemnity exposure. They want one screen each morning that says "all clear" or names the exposures.
- **Rough TAM reasoning:** Conservative serviceable mid-market: **3,000 BAS/accounting firms** running 20+ payroll clients. At $250–500/mo per firm = $9M–$18M ARR ceiling on the practice tier alone. Wider SMB direct tier (SMEs with 5+ employees and a payroll admin) adds another ~50K addressable shops at $49–99/mo.
- **Why now for them:** Reform live 1 July 2026. Penalty teeth attach the same day. SBSCH closes the same day. Almost every bookkeeper is mid-rebuild of their payroll process **right now**.

## 5. Product sketch (MVP)

- **Portfolio Day-7 board** — one screen, all clients, one row per pay cycle. Green = SuperStream-confirmed. Amber = sent, not yet acked (with hours-remaining clock). Red = bounced/rejected with reason and re-lodgement playbook.
- **STP ↔ SuperStream ↔ bank 3-way auto-reconciler** — connects Xero, MYOB, Wrkr, Rockfast, Reckon and the client bank feed (or CSV import as fallback); auto-matches per pay run.
- **Reject triage with AI-drafted fix** — parses SuperStream rejection codes (invalid USI, member-number mismatch, fund-merger lag, TFN missing) and drafts the corrected payload + an SMS/email to the employee to refresh their member detail.
- **Day-5 escalation alerts** — SMS + email to the bookkeeper at Day 5 if anything is still amber; second alert at Day 6 morning.
- **SGC-defensible audit pack** — per-employee, per-cycle PDF + JSON evidence trail: dispatched amount, SuperStream message ID, fund-side confirmation, timestamps. Generated on demand for ATO disputes or client onboardings.
- **White-label client portal** — bookkeeper-branded view their SME clients can log into to see "all our staff's super landed safely this fortnight" with no Xero login required.
- **No payment rail** — PaydayBeacon does **not** move money. It is a pure observer above whichever clearing house the client already uses. This is the wedge.

## 6. AI angle — what's load-bearing

Two places AI is doing real work, not decoration:

1. **Reject parsing and remediation** — SuperStream rejection messages are noisy: cryptic codes, fund-specific wording, occasional free-text reasons. An LLM classifies each reject into one of ~12 canonical fix paths and drafts the exact correction (which field to edit, which form to send the employee, whether to re-lodge to a new USI or wait for fund self-correction). This is the job that eats a bookkeeper's afternoon.
2. **Cycle anomaly detection** — across a portfolio of 30 clients, an LLM-driven anomaly layer surfaces "unusual" cycles (a client's super total is 18% above prior 4 cycles, a new employee has no SG line, a fund is consistently confirming late). Day-1 surfaced anomalies, not Day-7 fires.

Remove the AI and the product becomes a CSV dashboard. With it, it becomes a triage operator that a junior bookkeeper can run.

## 7. Localization angle

**Australia-first, possibly Australia-only.** The product is built around AU-specific rails: STP Phase 2, SuperStream, SBR, ATO clearing house messages, USI directory. New Zealand has different super (KiwiSaver) rules; UK has auto-enrolment (different timing); Singapore CPF is single-fund. No clean translation. **Don't force a global play** — own AU and the bookkeeper channel.

## 8. Business model — path to $1M–$5M ARR

- **Pricing — practice tier:** **$199/mo** (up to 10 client orgs) → **$399/mo** (up to 30) → **$799/mo** (up to 80) → custom for 80+.
- **Pricing — direct SME tier:** **$49/mo** (up to 5 employees) → **$99/mo** (up to 20) → **$199/mo** (up to 50).
- **ACV (blended):** ~$4,800 per practice; ~$840 per direct SME.
- **Rough math to $1M ARR:** 175 practices × $400/mo × 12 = $840K + 250 direct SMEs × $69/mo × 12 = $207K = **$1.05M**.
- **Rough math to $5M ARR:** 600 practices × $500/mo × 12 = $3.6M + 1,500 direct SMEs × $79/mo × 12 = $1.4M = **$5.0M**. Realistic against an addressable practice TAM of ~3K mid-market firms.
- **Expansion path:** seat add-ons (additional payroll users per practice), SGC-dispute audit-pack credits ($29 per defensive pack), payday-super training/CPE webinars sold to the firm, an embedded fee-based "concierge re-lodgement" service for $19 per reject.

## 9. Go-to-market wedge — first 100 customers

- **The ATO's own deprecation list.** SBSCH user list is not public, but every BAS agent body (Institute of Certified Bookkeepers, ICB; Australian Bookkeepers Network, ABN) knows their members are scrambling. Sponsor 3 webinars in May–June 2026 with ICB/ABN titled "Surviving Day 7" — close 50 practice signups from that channel.
- **Cold-DM the Xero Partner / MYOB Partner directories.** Both publish public partner-finder pages. Pull the ~2,000 AU partner listings, send a Loom showing a 30-client portfolio screen reconciling in 90 seconds, target 5% reply / 1% conversion = 20 paying practices.
- **Targeted LinkedIn ads to BAS agents** with the headline "One client's super bounces on Day 6. Do you know yet?" — direct to a 2-minute demo. Audience size on LinkedIn for "BAS agent" + "Australia" is ~12K; $3K test budget on a $5K monthly CAC ceiling.
- **r/AustralianAccounting + Facebook groups** ("Australian Bookkeepers Network" FB group: ~14K members). Post a free "Day-7 risk check" tool — paste any pay-run CSV, get back a risk report. Capture emails. Convert 5% to paid.
- **Existing-pain inbound from accountantsdaily.com.au / SmartCompany SEO** — write the canonical "How to handle SuperStream rejects under Payday Super" piece; the SGC + 60% uplift terms have rising search volume from April 2026.

## 10. Build complexity — justification

**Medium.** STP Phase 2 ingest is documented (ATO SBR + STP API), SuperStream is a SBR-published schema, Xero/MYOB/Wrkr/Reckon all have public APIs with payroll + super endpoints. The hard parts: (a) connecting to non-API clearing houses (Rockfast, fund-direct portals) which need CSV+email-parse fallback; (b) handling the long tail of SuperStream rejection codes correctly. **6–8 weeks** for a 2-person team to ship a working portfolio dashboard wired to Xero+MYOB; another **6–8 weeks** to add Wrkr/Reckon + reject triage + audit pack. v1 in **3–4 months**, full feature set by month 6. No custom ML — off-the-shelf LLMs for reject parsing.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Read-only observer of data the client already produces; no money movement; no AFSL required. |
| Ethical — no harm / dark patterns | ✅ | Helps employees actually receive their super on time. Unambiguous pro-employee. |
| Market exists (evidence above) | ✅ | 17K BAS agents, 47K tax agents, ~300K SBSCH SMEs migrating, hard 1 July 2026 deadline. |
| 1–5 person team can build this | ✅ | Off-the-shelf APIs + LLM. 2 builders, 3–4 months to MVP. |
| Launchable with <$50K / ₹40L | ✅ | ~$15K cloud + APIs for year one; $10K legal/insurance; rest is founder time. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 18/20 | Hair-on-fire for bookkeepers from 1 July 2026. SGC + 60% uplift hits the client P&L, indemnity hits the bookkeeper. Recurring weekly/fortnightly pain. |
| Demand evidence | 15 | 13/15 | Multiple independent signals: ATO regulatory impact $1.2M burden, IPA/Xero survey (87% cash-flow concerned), Wrkr/Rockfast both already selling adjacent rails. |
| Build feasibility | 15 | 12/15 | Public APIs (Xero, MYOB, Wrkr, Reckon, SBR/STP). Reject-triage LLM is well-trodden. Risk: long tail of small clearing houses + CSV-import edge cases. |
| Distribution clarity | 15 | 12/15 | Two named channels (ICB/ABN webinars, Xero/MYOB partner directories), each with named lists. Concrete cold-DM math. |
| Revenue mechanics | 15 | 12/15 | $199–799/mo practice tier benchmarked against existing AU advisory tools (FuturRoll, FYI, Karbon $59–119/user). $5M ARR needs ~600 practices — addressable. |
| Time to first revenue | 10 | 8/10 | Pre-sell now (May–June 2026) for July 1 launch. First paying customer in <8 weeks of MVP. |
| Defensibility | 10 | 5/10 | Execution moat + reject-playbook accumulation + bookkeeper channel relationships. No proprietary data; Wrkr/Rockfast could expand into observer role (but commercial conflict makes it unlikely). |
| **Total** | **100** | **80/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required` — needs strong eng to ship reliable multi-API ingest under a hard penalty deadline + at least one founder/advisor who has run payroll for AU SMEs or is a BAS agent. Sales is high-touch but small-numbers (3K target firms).

### Key assumptions to validate (3–5)

1. **Assumption:** AU bookkeepers will pay $199–399/mo for a *neutral* observer that sits above their existing clearing house. **How to test:** 20 paid pre-orders in 2 weeks via ICB/ABN community DMs and Xero partner cold outreach. Refundable if MVP doesn't ship by 30 June 2026.
2. **Assumption:** Xero, MYOB, and Wrkr/Reckon APIs expose enough super-payment status detail to reconcile without a CSV fallback for >70% of clients. **How to test:** Build a 1-week API probe; map their super endpoints; document what's missing.
3. **Assumption:** SuperStream rejection codes are LLM-classifiable into <15 canonical fix paths with >95% accuracy. **How to test:** Pull a sample of 200 historical rejection messages from a friendly partner firm; have GPT-class model classify; manually score.
4. **Assumption:** SBSCH closure pushes 30–40% of the ~300K SBSCH SMEs to ask their bookkeeper to take over super processing (vs. doing it themselves). **How to test:** Survey 30 BAS agents — "how many of your current clients still self-process SBSCH?" and "how many do you expect to take in by July?"

### Risk flags

1. **Platform dependency:** Heavy reliance on Xero/MYOB API. If either ships a competing cross-client cockpit in their partner hub, the practice tier compresses. Mitigation: lock in design-partner firms by month 3; build the SGC audit pack as a unique value driver Xero won't replicate (it's adversarial to Xero's own product).
2. **Window risk:** The reform is single-event timing. Miss the May–July 2026 onboarding wave and bookkeepers will have already chosen a workflow. Mitigation: pre-sell starting today; ship MVP by 25 June 2026.
3. **Penalty regime change:** If the ATO grants a 12-month "transition leniency" on the 60% uplift (as it has done for STP Phase 2), urgency drops. Mitigation: pivot messaging to "audit-pack-as-insurance" rather than "Day-7 panic" — same product, longer fuse.
4. **Commodity drift:** Wrkr/Rockfast could open up their reconciliation API to non-customers. Unlikely (cannibalizes their core) but worth watching.

## 14. Structured verdict

```
Score:                  80/100
Verdict:                STRONG GO
Confidence:             High
Best-fit builder:       2-person team: 1 strong full-stack (Xero/MYOB/SBR APIs, LLMs), 1 with AU bookkeeping domain (ideally a registered BAS agent or ex-firm partner)
Time to revenue:        6–8 weeks from MVP start; pre-sales possible now
Capital to launch:      A$30–50K ($20–35K USD) covering cloud, APIs, professional indemnity insurance, design partner pilot incentives
Top 3 assumptions to validate first:
  1. 20 paid pre-orders from ICB/ABN community + Xero partner directory in 2 weeks (kill if <8)
  2. Xero + MYOB super-payment APIs expose enough detail to reconcile >70% of cycles without CSV fallback
  3. SuperStream reject codes classifiable into <15 canonical fix paths with >95% LLM accuracy on 200-message sample
Kill criteria:
  - Abandon if <8 paid pre-orders by 5 June 2026
  - Abandon if Xero or MYOB announces a cross-client super monitor in their partner hub before 25 June 2026
  - Abandon if ATO formally suspends the 60% uplift for the first 12 months (urgency collapses; revisit in 9 months)
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Pull the ICB member-firm list (public-ish) and the Xero AU partner-finder. Hand-build a list of 80 BAS agents/practices that match (10+ SME clients, payroll-heavy). Draft a 90-second Loom showing a mocked 30-client Day-7 board.
- **Day 3:** DM all 80. Pitch: "$199/mo, locked in for 12 months, launch by 25 June. Refund if we miss." Target 5 paying pre-orders by EOD.
- **Day 4–5:** Parallel — interview 6 of the responding bookkeepers (30 min each) on their current super workflow + their top 3 pain moments. Confirm reject triage > portfolio view > audit pack in their priority order (or revise).
- **Day 6:** Pull a sample of 50 anonymised SuperStream rejection messages from one design partner. Hand them to GPT-class model. Score classification accuracy.
- **Day 7:** Go / no-go.
  - **Go** = ≥8 paid pre-orders + LLM accuracy ≥90% on reject sample + at least 4 of 6 interviewees naming the cross-client portfolio view as a "top 3" pain.
  - **No-go** = build a different problem.
