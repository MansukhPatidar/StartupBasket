---
title: "LateWatch — payday super watchtower for AU bookkeepers"
slug: payday-super-disclosure-clock
date: 2026-08-11
category: Compliance / Australia — Bookkeeping and Accounting Practices (20–300 Payroll Clients) Whose Clients Now Owe Super Within 7 Business Days of Every Payday
complexity: Low
score: 77
verdict: GO
confidence: Medium
oneLiner: "Catches super contributions that never landed, then files the 30-day disclosure that keeps a $300K penalty at $130."
tags:
  vertical: Compliance
  model: SaaS
  geography: Global
  secondary: [Australia, Payroll, SMB, AI-agent, Compliance-driven, Solo-builder]
axes:
  problem: 17
  demand: 13
  build: 12
  distribution: 12
  revenue: 11
  time: 8
  defensibility: 4
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# LateWatch

## 1. One-liner

Catches super contributions that never landed, then files the 30-day disclosure that keeps a $300K penalty at $130.

## 2. Trend signal — why now?

On 1 July 2026 — six weeks ago — Australia's entire employer base changed how it pays superannuation. Not a rate change. A structural one.

Every employer must now get super **into the employee's fund within 7 business days of payday**, every payday, instead of once a quarter. The free ATO Small Business Superannuation Clearing House that ~ hundreds of thousands of small employers relied on was decommissioned on the same date, forcing them onto commercial rails mid-transition ([NSW Small Business Commissioner](https://www.smallbusiness.nsw.gov.au/news-podcasts/news/payday-superannuation-what-small-businesses-need-to-know-ahead-of-1-july-2026)).

The part that makes this a product rather than a news item: **the late-payment offset is gone.** Under the old regime an employer who paid late could offset that payment against the SG charge. After 1 July 2026 they cannot ([Norton Rose Fulbright](https://www.nortonrosefulbright.com/en/knowledge/publications/d576f12c/payday-super-the-compliance-countdown-begins)). A late contribution is now a penalty event, full stop.

And the penalty curve is vertical. Worked example on a payroll owing $14,400 of super per fortnight:

| Scenario | Cost |
|---|---|
| Caught within days, disclosed promptly | **~$43** |
| Discovered at month end, disclosed | **~$130** |
| Unaddressed 6 months (13 missed paydays) | **~$308,000** |

Same payroll. Same error. The source is explicit about the driver: *"the variables that moved the outcome from $43 to $308,000 were detection speed and disclosure, not the size of the payroll"* ([ScaleSuite, SGC penalty mechanics](https://www.scalesuite.com.au/resources/sgc-under-payday-super-penalty-mechanics)).

Detection speed is a software problem. That is the whole thesis.

Two more things converge. First, the SGC now carries a **60% default administrative uplift**, reducible by up to 40 percentage points for voluntary disclosure within 30 days and 20 more for a clean 24-month record. There is a literal 30-day countdown attached to a five-figure number. Second, unpaid SG makes directors **personally liable via Director Penalty Notices from day one** — and the ATO issued **84,529 DPNs covering $5.5B in the 2024–25 year, up 136%** ([SmartCompany](https://www.smartcompany.com.au/tax/why-payday-super-trigger-more-ato-director-penalty-notices/)). This is no longer a bookkeeping nuisance; it reaches the director's house.

```
Provenance:
  - Signal 1 (Demand): Payday Super live 1 July 2026 — super must REACH the fund within 7 business days, every payday; late-payment offset abolished; SBSCH closed the same day — https://www.nortonrosefulbright.com/en/knowledge/publications/d576f12c/payday-super-the-compliance-countdown-begins — Aug 2026
  - Signal 2 (Feasibility): Rejections are silent and data-driven (member mismatch, wrong USI, missing TFN, SMSF "regulation details withheld"), and funds must return unallocatable money in 3 business days — machine-checkable against a known clock — https://www.lightningpayroll.com.au/faq/why-has-the-super-fund-rejected-or-not-processed-my-super-contribution — Aug 2026
  - Signal 3 (Economic): SGC = shortfall + daily-compounding interest + 60% admin uplift, reducible 40pts by disclosure within 30 days; $43 vs $308,000 on identical payroll; 84,529 DPNs ($5.5B) issued in 2024-25, +136% — https://www.scalesuite.com.au/resources/sgc-under-payday-super-penalty-mechanics — Aug 2026
  Category: Regulatory arbitrage
```

## 3. The opportunity

Everyone in this market sells the **payment rail**. Nobody sells the **consequence of the rail failing**.

Wrkr, Xero Auto Super, MYOB Pay Super, QuickBooks/HeroClear all move money and all tell you when a batch bounces. Wrkr does this well — "Track every contribution from submission through to fund confirmation, with a structured, timestamped timeline." XBert, positioned as the practice-side answer, is candid that it is *"not another super payment tool; it's a work intelligence platform"* — task management for the transition, not validation of fund receipt.

So the gap sits in three places the incumbents structurally don't want to occupy:

1. **Nobody owns the deadline across systems.** A practice with 80 payroll clients runs Xero, MYOB, QuickBooks and two bureau platforms. Each notifies inside its own tenant, by email, to whoever set up the file. There is no single surface answering "which of my 80 clients has money that has not landed, and how many business days are left?"

2. **A rejection notice is not a clock.** Xero emails you that a batch was returned. It does not tell you that payday was 5 business days ago, that you have 2 left, that the fix requires the employee's date of birth, and that at day 8 the liability stops being a task and becomes an SGC assessment.

3. **Nobody handles the 30-day disclosure.** The moment you miss the 7-day window, the game changes entirely: it is no longer about paying, it is about lodging a voluntary disclosure inside 30 days to strip 40 points off a 60% uplift. Payroll vendors will not touch this — it is an admission of failure filed with the ATO, and the vendor is arguably implicated in the delay. Wrkr's own bookkeeper page says nothing about voluntary disclosure. That is not an oversight; it is a conflict of interest.

LateWatch is the layer that assumes payment will sometimes fail and optimises everything downstream of that.

## 4. Target market

- **Primary customer:** Owner or payroll manager of an Australian bookkeeping/accounting practice carrying **20–300 payroll clients**. BAS agents, registered tax agents, payroll bureaus. Not the employer directly — the practice, because they hold concentrated risk across many entities and they are the ones who get blamed.
- **Why they buy:** They just absorbed a workload change from 4 super events a year to 26 or 52 per client. As the sector press puts it: *"Every payroll run, whether it's weekly, fortnightly or monthly, also includes super... Expect more admin pressure, especially for smaller teams."* A practice with 80 fortnightly clients went from 320 super events a year to over 2,000. Nobody hired anyone.
- **Secondary customer:** Direct employers with 20–200 staff, multiple entities, or high churn (hospitality, labour hire, aged care, construction) where fund details change constantly and rejections are routine.
- **Rough TAM reasoning:** ~994,178 employing businesses in Australia ([ASBFEO](https://www.asbfeo.gov.au/small-business-data-portal/number-small-businesses-australia)). Most outsource payroll to a practice. Several thousand practices carry meaningful payroll books. Capturing 400 practices at $300/mo average is $1.4M ARR. This is a small, rich, reachable market — exactly the shape a bootstrapper wants and a VC ignores.
- **Why now for them:** The first year (1 July 2026 – 30 June 2027) is an ATO grace window, and it is running out. PCG 2026/1 classes employers as low risk if they show *"timely contributions and evidence of remediation where required."* Evidence of remediation is a document. Right now most practices cannot produce one.

## 5. Product sketch (MVP)

- **Landing confirmation, not submission confirmation.** Connects to the practice's payroll platforms, reads every pay event, and tracks each contribution to actual fund receipt. Green only when money landed.
- **Business-day countdown per contribution.** Every in-flight payment shows days remaining against its own payday, correctly handling weekends and state public holidays — a genuine source of off-by-one errors across a multi-state client book.
- **Rejection triage with the actual fix.** When a fund returns money, LateWatch names the cause in plain English (surname mismatch, wrong USI for that product, missing TFN, SMSF flagged "regulation details withheld") and generates the exact request to send the employee, since most fixes need data only the employee has.
- **Breach ledger.** The instant a contribution passes day 7, it moves from "at risk" to a logged breach with the QE day, amount, days outstanding, and the 30-day disclosure deadline attached.
- **Voluntary disclosure pack.** Assembles the ATO voluntary disclosure statement per breach — affected employees, QE days, shortfall, dates paid — with a modelled comparison of disclosing now versus at day 29 versus not at all.
- **Portfolio view.** One screen, every client, ranked by dollars at risk. The screen a practice principal opens on Monday.
- **PCG 2026/1 evidence file.** Exportable per-client timeline proving detection and remediation — the artefact that argues "low risk" if the ATO asks.
- **Director exposure flag.** Highlights unresolved shortfalls that convert to personal liability under a DPN.

## 6. AI angle — what's load-bearing

Remove the AI and roughly 60% of this still works — the clock and the reconciliation are deterministic, and that is honest. But three jobs are genuinely AI-shaped:

1. **Normalising rejection reasons across funds.** Every fund and gateway writes error text differently — free-text, inconsistent codes, provider-specific. Mapping that mess to one of ~15 causes plus a fix instruction is classic messy-text-to-structured-action work, and it is the difference between "SuperStream error 5142" and "Priya's surname on file is her maiden name; here's the email to send her."
2. **Matching payroll intent to fund reality.** Deciding whether a $412.50 receipt corresponds to the $412.50 owed to a given employee for a given payday — across partial allocations, refunds, catch-ups and multi-employee batches — is fuzzy reconciliation, not a join.
3. **Drafting the disclosure narrative.** The ATO form wants a factual account of what happened and how it was corrected. Generating that from an event timeline is exactly the right use of a model, with the human reviewing before lodgement.

Where AI must stay out: never let it decide *whether* a breach occurred. That is a date comparison and it must be auditable. A hallucinated compliance status would be worse than the problem.

## 7. Localization angle

Australia-only by construction — SuperStream, USI, the ATO SGC formula and PCG 2026/1 are unique to one jurisdiction. That narrowness is the moat, not a limitation. It excludes every global payroll vendor whose roadmap won't fund a country-specific edge case, and it is deep enough that a competitor must learn a genuinely fiddly rulebook before shipping anything credible.

Pricing in AUD, GST-inclusive invoicing, and distribution through Australian professional bodies (ICB, IPA, CPA Australia, the BAS agent community) — a tight, conference-driven, referral-heavy sector where 40 practices know each other.

Natural expansion is adjacent Australian payroll clocks — STP reporting, payroll tax across state thresholds — sold to the same buyer, not the same product in a new country.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** Tiered by client count for practices — **$149/mo** (up to 25 clients), **$349/mo** (up to 100), **$749/mo** (up to 300). Direct employers: **$79/mo** single entity.
- **Anchor:** Wrkr sits at ~$5.50/mo per small business for the rail. LateWatch is not competing with that — it is priced against one avoided penalty. A single missed payment for one employee can exceed **$1,484** before interest. A $349/mo subscription is repaid by catching one error every four years, and the real hit rate across 100 clients is monthly.
- **ACV:** ~$4,200 practice average.
- **$1M ARR:** 240 practices at $349/mo. In a market of thousands of payroll-carrying practices, this is single-digit penetration.
- **$5M ARR:** ~1,000 practices with mix shifted upmarket, plus direct-employer self-serve, plus a per-lodgement fee on disclosure packs. Requires becoming the category default in a small market — plausible in 3–4 years, not 18 months. I'd rather underwrite the $1–2M case and treat $5M as upside.
- **Expansion path:** Client count growth is automatic and billable. Then per-disclosure fees, then adjacent Australian payroll deadlines to the same buyer.
- **Margin note:** Gross margin is high but not pure SaaS — some payroll platforms bill per API connection, and the AI cost per pay event is real though trivial next to $349.

## 9. Go-to-market wedge — first 100 customers

1. **The bounce-back list.** Australian bookkeepers live in Facebook and LinkedIn groups that are extremely active right now, mid-transition. Every week someone posts a rejection they can't decode. Answer the question properly, publicly, for free — then note the tool. This is a support channel disguised as marketing and it converts because the poster is in pain that hour.
2. **The ICB/ABN directory sweep.** The Institute of Certified Bookkeepers and BAS agent registers list practices with contact details and specialisations. Filter for payroll-heavy practices, send a 90-second Loom showing one screen — *your 80 clients, three with money that hasn't landed, one at day 6.* Practices with 50+ payroll clients feel this immediately. Expect 3–6% reply on a well-cut list of 1,500.
3. **The free breach audit.** Offer a one-off retrospective across a practice's July–August pay events: which contributions never landed. Cheap to run, and it produces the only pitch that matters — a named list of that practice's own live exposures. This is the primary weapon; conversion should be high because the finding is undeniable and the 30-day clock creates urgency.
4. **Practice conferences and CPD.** Australian bookkeeping runs on CPD sessions and state chapter meetings. A 30-minute talk on "what PCG 2026/1 actually requires you to prove" is welcome content, not a pitch, and reaches 40–100 practices per session.
5. **Payroll-adjacent consultant referrals.** The consultants who migrated practices off SBSCH have the relationships and no product to sell after migration ends. Revenue-share.

## 10. Build complexity — justification

**Low-to-medium.** The hard parts are integrations and rules, not invention. Xero, MYOB and QuickBooks all expose payroll APIs; the business-day calendar across eight states is fiddly but finite; the SGC formula is published arithmetic. No custom models, no novel infra.

The genuine risk is **contribution-outcome visibility** — how reliably each platform exposes fund confirmation versus mere submission. Where an API is thin, v1 falls back to CSV/report ingestion, which is unglamorous and works. Realistic v1: **10–14 weeks** for a strong solo builder, or 8 weeks for a pair with one Australian payroll domain expert. Cheap to build, hard to get exactly right — a good combination.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Compliance monitoring tool. Prepares disclosure statements for human review; does not lodge as an unregistered agent. |
| Ethical — no harm / dark patterns | ✅ | Helps employers pay workers money they are owed, sooner. Aligned with the policy intent. |
| Market exists (evidence above) | ✅ | Mandatory obligation live since 1 July 2026; incumbents cover the rail, not the consequence. |
| 1–5 person team can build this | ✅ | Standard web stack, published APIs, published formula. |
| Launchable with <$50K / ₹40L | ✅ | Founder time, API fees, conference travel. Well under $20K. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | **17**/20 | Directors personally liable via DPN from day one; $43 vs $308,000 on identical payroll driven purely by detection speed. Felt every pay cycle. Held below 18 only because the first-year ATO grace period softens the immediate sting. |
| Demand evidence | 15 | **13**/15 | Mandatory obligation on ~994K employing businesses, funded incumbents (Wrkr, HeroClear) already selling adjacent, heavy practitioner commentary. Docked for thin *verbatim* end-user complaint — the regime is six weeks old and the pain is still mostly anticipatory. |
| Build feasibility | 15 | **12**/15 | Off-the-shelf stack and published rules, but multi-platform integration and reliable fund-confirmation data put this at 10–14 weeks, not 4. |
| Distribution clarity | 15 | **12**/15 | Named directories, named groups, named conferences, and a free-audit wedge that produces undeniable findings. Not 14 — practices are conservative buyers and the sales motion is human, not self-serve. |
| Revenue mechanics | 15 | **11**/15 | Pricing is defensible against a $1,484-per-error downside, and 240 practices to $1M is realistic. Docked because willingness-to-pay above $349 in a market anchored to $5.50 rails is unproven. |
| Time to first revenue | 10 | **8**/10 | The free breach audit converts fast when it finds something real; 6–10 weeks to first paid practice is credible. Not 9 — practices buy on a monthly cycle, not on the spot. |
| Defensibility | 10 | **4**/10 | **The weak axis, honestly.** Xero or Wrkr could ship a countdown in a quarter if they chose. Real defence is a rejection-cause library that compounds, the disclosure workflow incumbents are conflicted about owning, and switching cost once a practice's audit trail lives here. Head start plus focus, not a moat. |
| **Total** | **100** | **77**/100 | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required`

This needs someone who can integrate three payroll APIs *and* read a Practical Compliance Guideline without falling asleep. The second is rarer. A non-Australian builder should not attempt this without a BAS agent co-founder — the domain has too many small traps.

### Key assumptions to validate

1. **Assumption:** Payroll platforms expose contribution *outcome* (fund receipt/rejection) reliably enough via API to build a trustworthy clock. **How to test:** Build read-only integrations against two live practice files in week one. This is the single highest-risk assumption — if the data is only in emails and PDFs, the product gets materially harder.
2. **Assumption:** Practices will pay $349/mo for a monitoring layer on top of rails costing $5.50. **How to test:** Run 15 free breach audits; count how many convert at full price when a real exposure is found versus when it isn't.
3. **Assumption:** Rejections and misses are frequent enough to justify continuous monitoring. **How to test:** The free audits are the study — measure the breach rate per 100 clients across July–August. If a 100-client practice averages under two live breaches a month, urgency collapses.
4. **Assumption:** The buyer is the practice, not the employer. **How to test:** Pitch both in parallel for three weeks and compare close rate and cycle length.

### Risk flags

1. **Incumbent absorption (highest):** Xero or Wrkr shipping a landing-confirmation dashboard would take most of the oxygen. Mitigation is to own the disclosure/remediation half they are structurally reluctant to touch, and to move faster than a vendor roadmap.
2. **Regulatory grace period:** PCG 2026/1 gives a first-year soft landing for employers who fix promptly, which mutes urgency until 1 July 2027. Cuts both ways — sell the grace window as the reason to get evidence in place now, but expect "we'll deal with it later" objections through year one.
3. **Platform dependency:** The product lives on other companies' APIs. Terms change, rate limits bite, and one deprecation could break a core feature.
4. **Narrow market:** One country, one obligation. If the obligation is softened by amendment, the product's reason to exist shrinks overnight. Australia has form for adjusting super rules under employer pressure.

## 14. Structured verdict

```
Score:                  77/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Australian technical founder with a BAS agent or payroll-bureau co-founder
Time to revenue:        6–10 weeks from first integration
Capital to launch:      AUD $15–25K (≈ ₹8–14 lakh)
Top 3 assumptions to validate first:
  1. Payroll APIs expose real contribution outcomes — build two read-only integrations in week 1
  2. Breach frequency is material — run 15 free audits, measure live exposures per 100 clients
  3. $349/mo clears against $5.50 rails — count full-price conversions from audits that found something
Kill criteria:
  - Abandon if 15 free audits across 100+ client practices surface fewer than 2 live breaches per practice per month
  - Abandon if fund-receipt confirmation is unavailable via API on Xero and MYOB and only recoverable from email/PDF
  - Abandon if Xero or Wrkr ships native landing-confirmation with a business-day countdown before v1
```

Confidence is Medium, not High, for one reason: the regime is six weeks old. The regulation is certain, the penalty math is published, and the incumbent gap is real — but the actual breach *rate* in the wild is still unmeasured, and that single number decides whether this is a $349/mo necessity or a $79/mo nice-to-have. The validation sprint is designed to produce exactly that number.

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Recruit three friendly practices (50+ payroll clients each) via bookkeeping Facebook/LinkedIn groups. Offer a free retrospective breach audit on their July–August pay events in exchange for read-only access and an honest conversation. Confirm what the APIs actually return on contribution outcome.
- **Day 3–4:** Run the audit manually — no product, just spreadsheets. For every pay event since 1 July, determine whether the money landed within 7 business days. Produce a per-practice list of live exposures with dollar amounts and remaining disclosure days.
- **Day 5:** Present the findings and ask for a $349/mo pre-payment for access at launch.

**Falsifiable outcome:** Across three practices covering 150+ clients, the audit must surface **at least 6 genuine breaches or unlanded contributions**, and **at least 1 of 3 practices must pre-pay**. Under either bar, the pain is theoretical rather than live — shelve until closer to 1 July 2027, when the ATO grace period expires and the same audit will hit very differently.
