---
title: SuperCatch — Payday Super cockpit for AU bookkeepers
slug: supercatch-payday-super-cockpit
date: 2026-05-08
category: Compliance SaaS / Australia BAS Agents & Bookkeeping Firms (1–10 staff)
complexity: Medium
score: 81
verdict: STRONG GO
confidence: High
oneLiner: Cross-client cockpit that catches every Payday Super exception before day 8 SGC liability hits — for Australian bookkeeping firms.
tags:
  vertical: Compliance
  model: SaaS
  geography: Global
  secondary: [Australia, Payday-Super, Bookkeeper-firm, SuperStream, Xero-MYOB-add-on, Compliance-driven, AI-agent, SMB]
axes:
  problem: 18
  demand: 14
  build: 11
  distribution: 13
  revenue: 12
  time: 8
  defensibility: 5
founderFit: [technical-heavy, domain-expertise-required]
featured: true
---

# SuperCatch — Payday Super exception cockpit for Australian bookkeeping firms

## 1. One-liner

Cross-client cockpit that catches every Payday Super exception before day 8 SGC liability hits — for Australian bookkeeping firms.

## 2. Trend signal — why now?

Australia's biggest super reform in a decade lands **1 July 2026**. Every employer must pay super on payday — weekly, fortnightly, monthly — and the contribution must hit the fund within **7 business days**. Day 8 is automatic Super Guarantee Charge (SGC) territory: unpaid super + interest + admin fee, **not tax-deductible**, with escalating penalties for repeat misses.

What changes for bookkeepers, in their own words: "the reconciliation that used to be a quarterly tidy-up becomes a per-pay-cycle three-way match" — STP-reported super amount ↔ SuperStream contribution confirmation ↔ bank-account debit. Weekly payers go from 4 reconciliations a year to **52**. The Small Business Superannuation Clearing House (SBSCH) — used by ~250,000 small businesses, free since forever — closes the same day. Everyone migrates to a commercial gateway whose confirmation files don't ingest cleanly into Xero/MYOB.

Provenance:
  - Signal 1: Payday Super becomes law from 1 July 2026; ATO confirms SBSCH closes the same day, ~250,000 small employers must migrate. — https://www.ato.gov.au/businesses-and-organisations/super-for-employers/payday-super/about-payday-super — accessed 2026-05-08
  - Signal 2: Bookkeepers face per-pay-cycle 3-way match (STP ↔ SuperStream ↔ bank); "missing employees are the silent failure mode — the kind that hides until year-end and produces SGC liability for whichever employees were quietly skipped". — https://invoicedataextraction.com/blog/reconcile-payday-super-contributions-australia-xero-myob — accessed 2026-05-08
  - Signal 3: Xero (1.77M AU subscribers, 60% market share) and MYOB (~1.2M subscribers) racing to ship Auto Super / PaySuper compliance UI per-client — but no firm-wide multi-client cockpit; SuperChoice charges $0.26/EE/pay (≈$13.50/EE/year for weekly payers) just for plumbing. — https://www.xero.com/au/initiative/payday-super/ + https://www.empower-hr.com/superchoice-pricing — accessed 2026-05-08
  Category: Regulatory arbitrage

## 3. The opportunity

Xero, MYOB and Employment Hero will ship per-client Payday Super UI inside their products. That's plumbing — make sure the contribution leaves on time. They will not ship a **firm-wide exception cockpit** for the bookkeeper running 30 clients across Xero **and** MYOB **and** Employment Hero, because each platform only sees its own clients.

The bookkeeper firm is the actual buyer feeling the pain: every Friday after pay runs, a partner has to know — across 30 clients — which super contributions are at risk of breaching the 7-day window. Today they'd open 30 tabs. With Payday Super active 52 times a year, that's not a workflow, that's an unbillable nightmare.

SuperCatch is an **OAuth-in, exception-out** product. Connect to each client's Xero/MYOB/Employment Hero, pull the STP super amount and the SuperStream contribution confirmation file from the gateway, match against the bank debit (Basiq/MoneyTree feed), and show one cockpit for the firm: green / amber / red per pay event, with the specific exception ("USI mismatch for Pat Lee at AustralianSuper", "fund merger Hostplus → Hostplus Pension – update USI", "missing line for new starter") and the right next action.

The wedge is bookkeeper time, not employer compliance UI. We're selling **partner-saved hours**, not a clearing house.

## 4. Target market

- **Primary customer:** Australian registered BAS agents and bookkeeping firms with 1–10 staff handling payroll for 15–80 SMB clients each. ICB Australia represents thousands of practising members; the broader ABS-classified bookkeeper population is in the hundreds of thousands. Realistic ICP: ~10,000–20,000 firms.
- **Why they buy:** Day 8 = SGC. SGC = uncapped, non-deductible, growing. Their professional indemnity, their client retention, and their billable hours are all on the line every week. The legal obligation sits with the employer — but the firm gets fired if the employer is fined. They will pay to sleep at night.
- **Rough TAM reasoning:** 10,000 target firms × $199/mo average = $24M ARR ceiling. We don't need anywhere near that for a $5M ARR business.
- **Why now for them:** 1 July 2026. The minute Payday Super activates, every weekly-pay client multiplies the bookkeeper's surface area by 13. There's a clean buying window — May to August 2026 — when every firm's principal is googling "how do I survive this".

## 5. Product sketch (MVP)

- One firm-level cockpit listing all clients, sortable by pay event date and risk status (green / amber / red).
- OAuth connectors to Xero, MYOB Business, and Employment Hero — pull pay run + STP super amounts.
- Drop-in connectors to the major SuperStream gateways (SuperChoice, Beam, ClickSuper, HeroClear, Rockfast) — pull contribution confirmation files.
- Bank feed match via Basiq / direct CSV upload — ties the SuperStream confirmation to a specific debit on the firm's or client's bank account.
- Day 2 / Day 4 / Day 6 cron checks — flag any pay event missing a confirmed contribution before the 7-business-day window closes.
- Exception classifier: "invalid USI", "fund merger", "closed member account", "missing employee on confirmation", "amount mismatch" — each with a one-click chase action (email to fund / Slack to client / draft note for ATO file).
- Audit trail per client per pay event: who paid, when, what was confirmed, when it cleared. PI insurance gold.
- Multi-staff seat model with role-based assignment ("Sarah handles cafés, Dan handles tradies").

## 6. AI angle — what's load-bearing

The exception classifier is the AI-load-bearing piece. SuperStream confirmation files are XML/CSV with cryptic error codes; bank statement narratives are messy free-text. Mapping "REJECT-USI" + a fund-merger fact + a stale member record to a one-line action ("Hostplus merged with Maritime Super on 1 March 2026 — update USI to 68 657 495 890 in Xero") is exactly what cheap LLM tabular reasoning is for.

Without AI, the product is yet another spreadsheet of red rows. With AI, it's "stop showing me errors, tell me what to do". That's the difference between a $19/mo report-generator and a $199/mo cockpit a partner trusts to triage their week.

Pull the AI out and the product still technically works — but it competes with Xero's own at-risk notification and loses. AI is what makes the bookkeeper firm cancel SuperChoice's plumbing and pay for *judgment*.

## 7. Localization angle (if any)

Australia-only by design. The whole regulatory machinery — STP Phase 2, SuperStream v3 with the new MVR API (July 2026), the 7-business-day window, SGC mechanics — is jurisdiction-specific. There is no "global SaaS" version of this. New Zealand has nothing equivalent. The UK's auto-enrolment is a different beast.

That's a feature, not a bug. Australia has 60–70 funds, a finite list of clearing houses, and a single regulator. The data shape is bounded. A team that builds for AU first builds the deepest exception library and wins on quality, not breadth.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** $99/mo entry (up to 10 client connections, 1 staff seat) → $249/mo Pro (up to 50 clients, 5 seats) → $499/mo Firm (unlimited clients, 10 seats). Bookkeepers don't blink at $99/mo per practice — that's one billable hour. They pay $80–150/mo for Xero already.
- **ACV:** Median $200/mo = $2,400/year. Sticky — once a firm wires SuperCatch into their Friday workflow, churn risk drops sharply.
- **Path to $1M ARR:** ~420 paying firms at $200/mo ACV. With ~10,000 target firms in market, that's 4.2% penetration in 12–18 months. ICB has 6,000+ members alone.
- **Path to $5M ARR:** ~2,100 firms at $200/mo. 21% of target market — ambitious but not absurd given the regulatory window. Add NZ payday-rules creep + Auckland accountant adjacency = pull-forward.
- **Expansion path:** Per-client overage above plan limits, optional "client-pays" tier (firm sells "SGC Insurance Dashboard" to their employer clients at $19/mo, splits revenue), then natural adjacencies — STP exception triage, Single Touch Payroll lodgement audit, payroll tax reconciliation across states.

## 9. Go-to-market wedge — first 100 customers

The first 100 are sitting in a finite, known list. This is the cleanest part of the idea.

- **ICB Australia membership directory** — public list of ~6,000 certified bookkeepers. Scrape, segment for firms with 5+ payroll clients (signal: their public bio mentions "payroll" or "BAS"), send a 2-minute Loom: "here's your 30-client SuperCatch cockpit for July 1, free for the first 60 days". Realistic 3–5% reply rate = 180–300 conversations.
- **Xero Roadshow + MYOB Partner events Q3 2026** — in-person, captive audience of bookkeepers. Sponsor a coffee cart in the foyer with a 5-minute live demo: "show me your messiest client, I'll show you their Day 5 risk in 30 seconds". Closing rate at events for tools-with-an-active-deadline runs 10–20%.
- **Targeted LinkedIn ads to "BAS Agent" + "Bookkeeper" + "Practice Owner" job titles** in Australia. Tight audience (~30,000 people), creative is the ATO's own infographic plus our cockpit screenshot. Budget $5K to get to 50 demos.
- **Partner channel: PI insurers + ICB + ABN-listed bookkeeper networks.** PI insurers in particular have skin in the game: every SGC penalty their members eat is a claim risk. Free-month referral = aligned interest, low CAC.
- **Content moat: "Payday Super Day 5 Watchlist" weekly email** — anonymised aggregate of which exception types spiked that week. Bookkeepers forward it to peers; we get inbound from the forward.

## 10. Build complexity — justification

**Medium.** No bespoke ML, no custom hardware. Everything is REST/OAuth: Xero accounting & payroll APIs, MYOB Business API, Employment Hero API, SuperChoice/Beam ingest, Basiq for bank feeds, an LLM for exception classification. The hard part isn't engineering — it's the **fund + USI knowledge graph** (60 funds, 800+ products, ongoing mergers) and the test-fixtures for every exception class. 4 months for a 2-person team to a credible v1 in time for the July 1 surge.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Read-only over Xero/MYOB OAuth + SuperStream confirmation; no money handling, not a TPB-restricted activity |
| Ethical — no harm / dark patterns | ✅ | Reduces SGC penalties, helps employees actually receive their super on time |
| Market exists (evidence above) | ✅ | 250K SBSCH users + ~10K bookkeeping firms staring at a hard 1 July 2026 deadline |
| 1–5 person team can build this | ✅ | 2 engineers + 1 BAS-agent advisor, 4 months |
| Launchable with <$50K / ₹40L | ✅ | API costs + 1 SuperStream gateway sandbox + design = ~$15K to v1 |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 18/20 | Day 8 = automatic SGC, non-deductible, escalating. Hair-on-fire weekly post-July 2026. |
| Demand evidence | 15 | 14/15 | ATO-confirmed reform, 250K SBSCH migrants, multiple industry bodies asking ATO to clarify guidance, public bookkeeper FAQ output exploding. |
| Build feasibility | 15 | 11/15 | All APIs exist; MVR v3 ships with reform; LLM exception triage is off-the-shelf. Knowledge-graph for funds/USIs is the slow part. |
| Distribution clarity | 15 | 13/15 | ICB directory + partner events + PI insurers = three named channels with realistic conversion math. |
| Revenue mechanics | 15 | 12/15 | $99–499/mo, 420 firms = $1M ARR, ACV anchored by Xero/MYOB pricing precedent. |
| Time to first revenue | 10 | 8/10 | Pre-sell to 50 firms in May–June 2026; first invoice on launch day 1 July 2026. |
| Defensibility | 10 | 5/10 | Execution + AU-only knowledge-graph moat; Xero/MYOB could ship cross-client view but won't (each only sees own clients) — the multi-platform cut is the moat. |
| **Total** | **100** | **81/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required`

Right founder: someone who's run a BAS practice or worked inside Xero/MYOB partner ops, paired with a backend engineer who's done OAuth-heavy multi-tenant SaaS. Wrong founder: a generalist consumer-app builder.

### Key assumptions to validate (3–5)

1. **Assumption:** Bookkeeping firms with 15+ payroll clients will pay $199–249/mo for the cockpit. **How to test:** 30 calls with ICB members in May–June 2026, pre-sell at 50% off lifetime for the first 50 firms — target 15 paid pilots before launch.
2. **Assumption:** SuperStream confirmation files from the top 5 gateways can be reliably ingested. **How to test:** Sandbox accounts with SuperChoice, Beam, ClickSuper, HeroClear, Rockfast in week 1; build dummy ingest by week 4. If two gateways block partner access, plan B is bookkeeper email-to-ingest.
3. **Assumption:** Xero/MYOB do not ship a true cross-client compliance view by Q3 2026. **How to test:** Read every roadmap doc, attend the May Xero Partner Roadshow, talk to 3 senior product managers. If a true cross-client view ships, kill the firm-cockpit angle and re-target as "exception triage layer for the SBSCH-refugee employer".
4. **Assumption:** Day-of-launch SGC fear is strong enough that firms decide in <2 calls. **How to test:** Demo + 7-day trial conversion. Target ≥25% trial-to-paid in the launch month.

### Risk flags

1. **Platform dependency:** Xero, MYOB, Employment Hero APIs are gatekeepers. Any partner-tier cap, API rate limit, or app-store rejection is existential. Mitigate by being read-only-by-default, adding optional CSV/email ingest.
2. **Regulatory drift:** ATO has signalled an "education first" first year; if penalties stay soft for 18 months, urgency softens and the buying window stretches — meaning 2027 not 2026. Mitigate with a paid pilot price that doesn't depend on SGC fear, e.g., the time-saved value alone.
3. **Incumbent acquisition risk:** Xero or Employment Hero could acqui-hire after 12 months. That's a positive risk for a bootstrapped operator.
4. **Knowledge-graph rot:** Fund mergers, USI changes, super stapling changes — the data behind the exception classifier needs continuous maintenance. Mitigate by automating ingest from the ATO's Fund Validation Service feed.

## 14. Structured verdict

```
Score:                  81/100
Verdict:                STRONG GO
Confidence:             High
Best-fit builder:       Technical co-founder + ex-Xero/MYOB partner-ops person OR practising BAS agent with a strong eng partner
Time to revenue:        6–10 weeks (pre-sell from May 2026, launch revenue 1 July 2026)
Capital to launch:      $15–25K (API costs, sandbox access, single landing page)
Top 3 assumptions to validate first:
  1. 15 of 30 ICB-member firms pre-pay 50% lifetime in May–June 2026
  2. SuperChoice + Beam + Employment Hero confirmation files ingest cleanly within 4 weeks
  3. Xero / MYOB do not ship a multi-client compliance cockpit by Q3 2026
Kill criteria:
  - Abandon if <5 of 30 cold ICB calls book a demo
  - Abandon if Xero ships a true firm-level multi-client Payday Super exception cockpit before our launch
  - Abandon if first-year SGC enforcement is publicly suspended for 18+ months
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Pull the ICB Australia member directory and segment 200 firms with public payroll-services positioning. Build a 90-second Loom showing a fake-data SuperCatch cockpit (Figma-quality is fine — three clients, two reds, one chase email auto-drafted).
- **Day 3–4:** Send 200 personalised cold emails: "Payday Super hits 1 July. Here's the 30-client cockpit your firm is missing. 15-minute call?" Track reply, demo-request, and "would you pre-pay 50% off lifetime for the first year" rates.
- **Day 5:** Decide go / no-go on a single number: **≥10 demos booked and ≥3 verbal pre-pay commitments** out of 200 cold emails. Below that, the regulatory window may exist but the buying urgency hasn't crystallised — re-shape the wedge or kill the candidate.
