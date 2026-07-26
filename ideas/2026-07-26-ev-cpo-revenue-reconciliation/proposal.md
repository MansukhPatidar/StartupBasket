---
title: "VoltReclaim — revenue-leak sweeper for independent EV charge point operators"
slug: ev-cpo-revenue-reconciliation
date: 2026-07-26
category: CleanTech / EU-SMB
complexity: Medium
score: 72
verdict: GO
confidence: Medium
oneLiner: "Reconciles every charging session against what roaming partners actually paid, flags the shortfalls, and drafts the dispute."
tags:
  vertical: CleanTech
  model: SaaS
  geography: EU
  secondary: [SMB, AI-agent, Compliance-driven, Reconciliation]
axes:
  problem: 15
  demand: 11
  build: 11
  distribution: 11
  revenue: 12
  time: 7
  defensibility: 5
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# VoltReclaim — revenue-leak sweeper for independent EV charge point operators

## 1. One-liner

Reconciles every charging session against what roaming partners actually paid, flags the shortfalls, and drafts the dispute.

## 2. Trend signal — why now?

EV charging in Europe crossed the point where roaming reconciliation stopped being an integration project and became a monthly revenue problem. Three things happened at once:

- **Volume broke the spreadsheet.** Over 650,000 publicly accessible charging points are expected across the EU by end-2026, and the operator landscape is fragmented — "no single player dominates," and the number of operators needed to cover 80% of infrastructure is *rising*, not falling. Every one of those independent operators is roaming its sessions through hubs (Hubject, Gireve) and paying site hosts a revenue share. That's a reconciliation matrix that grows with every counterparty.
- **The money is real and it's leaking.** Industry and analyst sources are blunt: CDR (Charge Detail Record) mismatches are "the single most common source of OCPI integration issues," disputes are "resolved by hand," and "small discrepancies get written off because chasing them costs more than they are worth — and that write-off is quiet, ongoing revenue leakage." When an eMSP fails, a CPO "can lose one to three months of revenue."
- **The CPMS vendors don't solve it.** Billing platforms (AMPECO, Driivz, Monta) sell the rating engine and explicitly leave the operator "to solve the 20 percent that determines profitability: multi-party settlement, jurisdictional tax, dispute handling, and reconciliation at scale."

That's the shape of a wedge: a load-bearing pain the incumbents have decided is the customer's problem.

Provenance:
  - Signal 1 (demand): "CDR mismatches are the single most common source of OCPI integration issues… disputes resolved by hand… small discrepancies get written off = quiet, ongoing revenue leakage." — https://codibly.com/blog/articles/ocpi-protocol-guide / https://www.networkcore.org/blog/ev-charging-dispute-resolution — 2026-07-26
  - Signal 2 (feasibility): OCPI CDR structure standardized; "settled cash is matched back to sessions, clean records flow to the financial system" is a defined, automatable step. — https://codibly.com/blog/articles/ev-charging-billing-software — 2026-07-26
  - Signal 3 (economic): Europe EV charging equipment market ~USD 9.87B in 2026 (12.67% CAGR); 650K+ EU charge points by end-2026; fragmented independent-operator base; 82% of operators report improving EBITDA. — https://www.mordorintelligence.com/industry-reports/europe-electric-vehicle-charging-equipment-market / https://www.strategyand.pwc.com/n1/en/ev-charging-market-outlook-2026.html — 2026-07-26
  Category: Underserved niche

## 3. The opportunity

CPMS platforms are built to *run* chargers and *rate* sessions. They are not built to answer the ops manager's actual monthly question: "Did every eMSP and roaming hub pay me for every session my chargers delivered, at the tariff we agreed — and did I pay each site host exactly the share I owe?"

Today that question is answered with a pile of CSV exports and a finance person's afternoon. The CPMS shows what *should* have been billed. The bank statement and the hub settlement report show what *actually* landed. Bridging those two is manual, stale (disputes surface "months old"), and denominated in mismatched prices and timezones. So small gaps get abandoned — chasing a €4 rounding delta across 300 sessions isn't worth an hour of a person's time, until it's €4 × thousands of sessions × twelve months.

VoltReclaim is a thin recovery layer that sits *on top of* whatever CPMS the operator already runs. It ingests the CPMS session log, the roaming/eMSP CDR settlement files, and the bank/payout data, matches them session-by-session, and surfaces exactly three things: sessions that were underpaid or never paid, the drafted dispute packet to recover them, and the correct site-host payout statement. It does not compete with AMPECO or Driivz — it makes their output collectible.

## 4. Target market

- **Primary customer:** Independent European CPOs running roughly 50–800 connectors — one ops/finance person doing monthly settlement, roaming through Hubject/Gireve, paying revenue share to 5–50 site hosts (retail forecourts, hotels, car parks, municipalities). Too small for a Tier-1 CPMS's dedicated settlement team; big enough that leakage is measured in real euros.
- **Why they buy:** Every month the settlement close eats a day or more, and they *know* they're writing off discrepancies they can't afford to chase. It's not a "nice dashboard" — it's cash they earned and didn't collect, plus site-host disputes that sour their best locations.
- **Rough TAM reasoning:** With 650K+ EU charge points across a fragmented base, even a conservative slice — say, a few thousand independent operators in the 50–800-connector band across DE / FR / NL / UK / Nordics / Iberia — is a large enough beachhead. Adjacent: fleet-depot operators and municipal-contract CPOs with the same reconciliation shape.
- **Why now for them:** In 2025–26 their connector count and roaming share crossed the threshold where manual reconciliation stopped being feasible, right as CDR standardization (OCPI 2.2.1 / 2.3) finally made automated matching reliable.

## 5. Product sketch (MVP)

- Drag-and-drop / SFTP ingest of CPMS session exports, roaming hub + eMSP CDR settlement files, and payout/bank statements.
- Session-level three-way match: what the CPMS says was delivered, what the CDR says was billed, what the bank says was paid.
- **Leak report:** ranked list of unpaid, underpaid, and mis-rated sessions with the euro delta and the likely cause (timezone offset, rounding, tariff mismatch, missing stop event, dropped session ID).
- **Dispute packet drafter:** auto-generates the evidenced, counterparty-specific dispute message (session IDs, agreed tariff, delta, supporting CDR fields) ready to send to the eMSP or hub.
- **Site-host payout statements:** correct revenue-share calculation per host with a clean, sharable monthly statement — ends the "why is my payout different this month" argument.
- eMSP exposure alert: flags counterparties whose unpaid balance is creeping up (early warning on the "eMSP goes under, lose 1–3 months" risk).
- Monthly recovery summary: euros flagged, euros recovered, write-offs avoided — the ROI receipt.

## 6. AI angle — what's load-bearing

The load-bearing AI work is **fuzzy reconciliation and cause attribution across dirty, heterogeneous data.** Session IDs don't propagate cleanly across hubs; timestamps sit in different timezones; energy values round differently; tariffs are interpreted inconsistently. A rules-only matcher chokes on this — it's exactly the "bad timestamps, missing stop events, inconsistent energy values" mess the sources describe. AI does the load-bearing job of matching sessions that don't share a clean key, classifying *why* a delta exists, and drafting a counterparty-specific dispute in the right register.

Remove the AI and you're back to the CSV-and-afternoon status quo — which is the product's entire reason to exist. The AI is the product, not a chatbot bolted to a table.

## 7. Localization angle

EU-first by structure, not by translation. The wedge *is* the European roaming topology (OCPI, Hubject/Gireve, multi-country VAT on cross-border sessions, per-country tariff and settlement quirks). A generic global tool doesn't beat this because the pain is specifically the European many-to-many roaming mesh. Multi-currency and per-jurisdiction VAT handling are table stakes here and a moat against a US-shaped competitor. Later expansion: UK post-Brexit settlement, then Nordic/Iberian markets with their own hub conventions.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** Tiered by connector count. €149/mo (up to ~100 connectors), €399/mo (up to ~400), €799/mo (up to ~800), plus an optional success fee (e.g. 8–12% of recovered revenue in year one to make the ROI undeniable and de-risk the buy).
- **ACV:** ~€4,800 blended (≈€400/mo) before success fees.
- **Rough math to $1M ARR:** ~230 operators at €400/mo × 12 = ~$1.1M. Realistic within the EU independent-CPO band.
- **Rough math to $5M ARR:** ~1,000 operators, or ~600 operators plus meaningful success-fee capture on recovered revenue, plus an eMSP-side variant (eMSPs have the mirror-image reconciliation pain). Requires proving retention and expanding beyond the beachhead country.
- **Expansion path:** connector-count tier creep as operators grow; success-fee upside; add-on modules (VAT-audit pack, fleet-depot reconciliation, eMSP mirror product).

## 9. Go-to-market wedge — first 100 customers

- **Hub/CPMS partner directories are a named list.** Hubject and Gireve publish their connected-CPO ecosystems; CPMS vendors list integrators and customers. That's a scrapeable, finite list of exactly the operators who roam — i.e. exactly who leaks. Personalized outreach: "We ran the math — operators your size typically write off €X/month in roaming discrepancies. Send us one month of exports and we'll show you your number for free."
- **Free leak-audit as the wedge.** The demo *is* the sale: ingest one month of their real exports, hand back the euro figure they're losing. No abstract pitch — a specific number with their name on it.
- **Industry channels where CPOs congregate:** EV-charging operator LinkedIn groups, the OCPI/roaming practitioner community, and events (EVS, Charging & Mobility conferences, national e-mobility associations). These are small, tight rooms where "I recovered €14k I'd written off" spreads by word of mouth.
- **eMSP-failure moment:** when an eMSP wobbles publicly, every CPO exposed to it needs to quantify and chase its outstanding balance *now* — a timely, high-intent inbound trigger.

## 10. Build complexity — justification

**Medium.** The matching engine, dispute drafter, and payout statements are buildable on off-the-shelf LLM + standard data tooling — no novel ML. The real work is domain plumbing: parsing the variety of CPMS exports and CDR formats, handling OCPI field quirks, timezone/rounding normalization, and multi-country VAT. That's honest integration work, not research — a small team with one person who genuinely understands EV roaming settlement ships a credible v1 in ~3–4 months. The `domain-expertise-required` tag is the real gate, not the code.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Reconciliation/analytics on the operator's own data; no regulated activity. |
| Ethical — no harm / dark patterns | ✅ | Helps operators collect revenue they earned and pay hosts correctly. Pro-transparency. |
| Market exists (evidence above) | ✅ | Documented leakage, fragmented operator base, incumbents explicitly punting on it. |
| 1–5 person team can build this | ✅ | Medium build; needs one domain expert. |
| Launchable with <$50K / ₹40L | ✅ | SaaS + API costs; no hardware, no capex. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 15/20 | Real, recurring, money-on-the-table pain — but it's a leak they've tolerated, not hair-on-fire. Chased when quantified. |
| Demand evidence | 15 | 11/15 | Strong analyst/industry signals that leakage is real and incumbents punt; weaker on raw operator-forum quotes naming *this* product shape. |
| Build feasibility | 15 | 11/15 | Off-the-shelf AI, but format/OCPI/VAT plumbing is non-trivial; 3–4 months, one domain expert. |
| Distribution clarity | 15 | 11/15 | Named, finite operator list via hub/CPMS directories; free leak-audit wedge. Conversion still to prove. |
| Revenue mechanics | 15 | 12/15 | Clear tiered pricing + success fee; ROI is a specific euro number; ~230 ops to $1M is reachable. |
| Time to first revenue | 10 | 7/10 | Ops-manager buyer, not enterprise procurement; free-audit → paid in weeks, but v1 build precedes it. |
| Defensibility | 10 | 5/10 | Moat is accumulated format-parsing library + workflow lock-in at monthly close; a CPMS could bolt this on, but they've shown no appetite. |
| **Total** | **100** | **72/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required`

### Key assumptions to validate (3–5)

1. **Assumption:** An independent CPO's monthly roaming/site-host leakage is large enough (say €1k–€10k+/mo) to justify €400/mo plus a success fee. **How to test:** Run free leak-audits on 5–8 real operators' one-month exports; measure the actual delta distribution.
2. **Assumption:** The ops/finance person can and will pull CPMS + CDR + payout exports without heavy engineering help. **How to test:** In the same audits, time how long export collection takes and whether they can self-serve.
3. **Assumption:** CDR/CPMS formats are consistent enough across the top 4–5 CPMS + 2 hubs to build a matcher that generalizes. **How to test:** Collect real export samples from 6+ operators on different stacks; measure parser coverage.
4. **Assumption:** Operators prefer a neutral third-party recovery tool over waiting for their CPMS to add it. **How to test:** Ask directly in audit calls; gauge willingness to adopt an on-top layer.

### Risk flags

1. **Platform dependency / incumbent absorption:** A CPMS vendor (AMPECO, Driivz, Monta) could ship reconciliation as a feature. Mitigant: they've explicitly framed it as the customer's problem, and a neutral cross-CPMS tool serves multi-vendor operators they can't. Still the top risk.
2. **Data-access friction:** If pulling clean exports needs vendor cooperation or engineering, the free-audit wedge stalls. Validate export self-service early.
3. **Fragmentation of formats:** Every CPMS/hub export variant is parser work; underestimating this bloats the build. Scope to the top stacks first.
4. **Market timing (US):** NEVI-driven consolidation is raising minimum viable scale for US independents — so lead with fragmented, growing Europe, not the US.

## 14. Structured verdict

```
Score:                  72/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder with hands-on EV-roaming / CPMS settlement experience (or a design-partner CPO ops lead as co-founder/advisor)
Time to revenue:        8–12 weeks after v1 (free leak-audit → paid conversion)
Capital to launch:      ₹8–15 lakh ($10–18K)
Top 3 assumptions to validate first:
  1. Monthly leakage per operator is €1k–€10k+ — run free audits on 5–8 real export sets
  2. Ops person can self-serve the CPMS + CDR + payout exports — time it during audits
  3. Formats generalize across top CPMS + hubs — measure parser coverage on 6+ real stacks
Kill criteria:
  - Abandon if median leakage across 8 audited operators is under €500/mo (ROI too thin for the price)
  - Abandon if <20% of audited operators will grant repeatable export access without vendor engineering help
  - Abandon if a Tier-1 CPMS ships equivalent cross-vendor reconciliation before your v1 lands
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Build the named-operator list from Hubject/Gireve ecosystems + CPMS customer/integrator pages. Draft the free-leak-audit outreach.
- **Day 3–4:** Get 5–8 independent CPOs to send one month of real exports (CPMS session log + CDR settlement + payout). Manually reconcile them (no product yet — just do it by hand) and produce each operator's euro-leakage number.
- **Day 5:** Decide go / no-go on a **falsifiable** threshold — proceed only if the median leakage across the audited operators is ≥ €500/mo *and* at least half of them say "yes, send me the tool" when shown their number. If the leakage is trivial or the export access is a wall, kill it.
