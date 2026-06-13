---
title: "SuperCatch — Payday Super bounce catcher for AU bookkeepers"
slug: australia-payday-super-rejection-recovery
date: 2026-06-14
category: Compliance / Australia Small Employers & BAS Agents (Payday Super)
complexity: Medium
score: 76
verdict: GO
confidence: Medium
oneLiner: "Catches the super a fund bounces and re-lodges it before Australia's 7-day Payday Super penalty clock expires."
tags:
  vertical: Compliance
  model: SaaS
  geography: Global
  secondary: [Australia, Compliance-driven, AI-agent, SMB, Bookkeeper-first, Payroll]
axes:
  problem: 16
  demand: 12
  build: 12
  distribution: 12
  revenue: 12
  time: 7
  defensibility: 5
founderFit: [domain-expertise-required, technical-heavy]
featured: false
---

# SuperCatch — bounce-recovery catcher for Australian payroll bookkeepers

## 1. One-liner

Catches the super contributions a fund bounces and re-lodges them, corrected, before the 7-day Payday Super penalty clock runs out.

## 2. Trend signal — why now?

On **1 July 2026**, Australia's *Payday Super* reform goes live. Superannuation stops being a quarterly obligation and becomes a payroll event: if you pay staff weekly, super is due weekly, and contributions must **reach the employee's fund within 7 calendar days of payday** ([Pitcher Partners](https://www.pitcher.com.au/insights/payday-super-2026-what-australian-employers-need-to-know-before-1-july/), 2026; [Business NSW](https://www.businessnsw.com/members/member-alerts/payday-super-starts-1-july-2026)). Same day, the ATO's Small Business Superannuation Clearing House (SBSCH) **closes** ([MYOB](https://www.myob.com/au/resources/guides/payroll/payday-super)).

Here's the part the payroll vendors gloss over: when a fund **rejects** a contribution (wrong USI, member-number mismatch, fund closed), the 7-day clock **does not reset**. The ATO now requires funds to return rejected money in **3 business days** (down from 20), and the employer "will need to fix the underlying problem and re-submit them within the seven-day window to avoid any penalties" ([Accountants Daily](https://www.accountantsdaily.com.au/super/22203-member-verification-question-to-eliminate-bulk-of-contribution-errors-says-ato), 2026). Today nobody feels this because a bounced super payment had ~3 months of slack. After 1 July, a rejection on day 6 is a live penalty event.

And the incumbents don't close it. Xero confirms it simply "notifies the customer via email that the super payment has been returned" and "customers must work with the employee to correct the issue before resubmitting" — i.e. **"the systems don't automatically reconcile rejected contributions"** ([Xero Central](https://central.xero.com/s/article/Reprocess-failed-or-returned-auto-super-payments); [invoicedataextraction.com](https://invoicedataextraction.com/blog/reconcile-payday-super-contributions-australia-xero-myob), 2026). MYOB is the same — fix details in AccountRight, confirm with the employee or fund, resubmit ([MYOB help](https://help.myob.com/wiki/display/ar/Reversing+and+reprocessing+superannuation+payments)).

Provenance:
  - Signal 1 (demand): Bounced contributions still incur the SG penalty; employer must fix + re-lodge inside the original 7-day window; Xero/MYOB only email the bounce, they don't triage it — [Accountants Daily](https://www.accountantsdaily.com.au/super/22203-member-verification-question-to-eliminate-bulk-of-contribution-errors-says-ato) / [Xero Central](https://central.xero.com/s/article/Reprocess-failed-or-returned-auto-super-payments) — 2026
  - Signal 2 (feasibility): SuperStream/STP data is structured; rejection reason codes + member-mismatch errors are machine-parseable, so cheap AI can diagnose the bounce and draft the corrected re-lodgement — [invoicedataextraction.com](https://invoicedataextraction.com/blog/reconcile-payday-super-contributions-australia-xero-myob) — 2026
  - Signal 3 (economic): Whole-of-economy mandate hitting all ~994K employing businesses on a fixed 1 July 2026 deadline; ADP, QuickBooks, MYOB, Microkeeper all spending to market readiness products — [ABS Counts of Australian Businesses](https://www.abs.gov.au/statistics/economy/business-indicators/counts-australian-businesses-including-entries-and-exits/latest-release) / [QuickBooks AU](https://quickbooks.intuit.com/au/payroll/payday-super-changes/) — 2026
  Category: Regulatory arbitrage

## 3. The opportunity

The reform manufactures a **time-boxed failure mode** that didn't exist before. Pre-July, a rejected super contribution sat in limbo for weeks and got cleaned up at quarter-end — no urgency, no penalty. Post-July, every rejection is a 7-day fuse.

The incumbents (Xero Auto Super, MYOB Pay Super) **push** contributions and **email you when one bounces**. They explicitly do not diagnose *why*, do not tell you which field is wrong, and do not race the clock. That last mile — the three-way reconciliation across STP, SuperStream and the bank debit, then the corrected re-lodgement — is left to the bookkeeper to do by hand, on every pay run, across every client. A focused tool that watches the bounce stream, decodes the rejection, and produces a fix-and-re-lodge action before day 7 is a clean wedge sitting in the gap Xero/MYOB leave open.

This is not "Xero but better." It's the triage layer that sits beside Xero/MYOB and only fires when something breaks.

## 4. Target market

- **Primary customer:** Australian **bookkeepers and BAS agents** who run payroll-and-super for a book of 10–80 small-employer clients on Xero/MYOB/Reckon. They carry the volume and the professional liability — they are the buyer. Secondary: direct-buy small employers (1–20 staff) in high-frequency-pay industries (hospitality, construction, trades, retail) who run weekly/fortnightly payroll.
- **Why they buy (in their words):** "Performing a manual bank transfer or file upload every week can double or triple your payroll admin time" ([QuickBooks AU](https://quickbooks.intuit.com/au/payroll/payday-super-changes/)). A bounced contribution they don't catch in time is a Super Guarantee Charge their *client* eats — and the bookkeeper gets blamed.
- **Rough TAM reasoning:** ABS counts **994,178 employing businesses** in Australia at 30 June 2025; ~25% employ 1–4 and ~9% employ 5–19, so **~340,000** businesses in the sweet spot ([ABS](https://www.abs.gov.au/statistics/economy/business-indicators/counts-australian-businesses-including-entries-and-exits/latest-release)). Several thousand BAS agents manage the bulk of them.
- **Why now for them:** 1 July 2026 deadline; SBSCH closing forces every SBSCH user onto a new SuperStream path *and* into the weekly cadence at the same moment — peak anxiety, peak willingness to buy a safety net.

## 5. Product sketch (MVP)

- Connects read-only to the client's Xero/MYOB super batches (and bank feed) and watches every super run.
- The moment a fund returns a contribution, flags it with a **countdown to the 7-day deadline** per affected employee.
- Decodes the rejection reason (invalid USI, member-number mismatch, fund-closed/SMSF-ABN issue, name mismatch) into plain English and names the exact field to fix.
- Suggests the likely correct USI/member detail from Super Fund Lookup + prior successful lodgements, for one-click confirmation.
- Produces the corrected re-lodgement file/action and a step list so the bookkeeper re-submits inside the window.
- Keeps a per-employee, per-pay-run **audit trail** (bounce → cause → fix → re-lodge timestamp) — the evidence file if the ATO ever asks.
- Bookkeeper dashboard across the whole client book: "3 bounces live, 1 at day 5 — act now."

## 6. AI angle — what's load-bearing

AI does the diagnosis the incumbents skip. Rejection responses are terse, coded, and fund-specific; mapping a bounce to *the one field that's wrong* and the *most-likely-correct value* (cross-referencing fund lookup, name fuzzy-matching, prior good lodgements for that employee) is exactly the messy pattern-matching that LLMs collapse from a 20-minute manual hunt into seconds. Remove the AI and you're back to a bookkeeper phoning the fund — which is the status quo we're displacing. The monitoring/countdown is plumbing; the **why-did-this-bounce-and-what's-the-fix** is the load-bearing AI.

## 7. Localization angle (if any)

This *is* the localization play — it only exists because of an Australia-specific reform (Payday Super), Australian rails (SuperStream, USI, STP), and the SBSCH closure. Tagged Global in the frontmatter taxonomy, but it is Australia-first and Australia-deep. The same shape could later extend to other jurisdictions that tighten super/pension remittance windows, but the moat for 18 months is Australian regulatory specificity.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** Bookkeeper/BAS tier at **A$49–149/mo** by client-count band (acts as a per-book safety net). Direct small-employer tier at **A$19–39/mo**.
- **ACV:** ~A$1,200 blended for bookkeeper accounts (multi-client), ~A$300 for direct employers.
- **To A$1M ARR:** ~700 bookkeeper accounts at ~A$1,200, or a mix of ~400 bookkeepers + 2,000 direct employers. Against ~340K target businesses and thousands of BAS agents, that's low-single-digit penetration.
- **To A$5M ARR:** ~3,000 bookkeeper accounts plus a direct long tail — still well under 5% of the addressable book.
- **Expansion path:** per-client pricing scales with each bookkeeper's growing book; add adjacent payroll-compliance triage (STP error catching, SG shortfall alerts) as the second module.

## 9. Go-to-market wedge — first 100 customers

- **BAS agent / bookkeeper associations:** ICB Australia and the Institute of Certified Bookkeepers run member newsletters and CPD events that are *all* about Payday Super right now. Sponsor a "rejection-recovery" webinar; the audience is pre-qualified and panicking about exactly this.
- **Cold-target the practices:** scrape the public ICB/IPA member directories and the ~hundreds of bookkeeping firms advertising "Payday Super ready" services on Google; send a 90-second Loom showing a live bounce caught at day 5. Expect 5–8% reply pre-deadline.
- **Ride the deadline content wave:** every Australian accounting firm is publishing Payday Super checklists (Pitcher, PBS, TN Accounting, Green Bean). Guest-post / co-market the *one* thing their checklists omit — what to do when a contribution bounces.
- **Facebook/LinkedIn bookkeeper groups:** Australian Bookkeepers Network and similar groups have tens of thousands of members trading Payday Super horror stories in mid-2026.

## 10. Build complexity — justification

**Medium.** Off-the-shelf: Xero/MYOB APIs, Super Fund Lookup data, LLM for rejection-code diagnosis, standard web stack. Custom work is the SuperStream/return-message parsing and the per-fund quirks of rejection formats, plus a reliable countdown/state engine — gnarly but not research-grade. A small team ships a credible v1 in **3–4 months**, comfortably before the post-July rejection volume peaks.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Read-only assistive tool; doesn't replace the employer's legal obligation, supports it. |
| Ethical — no harm / dark patterns | ✅ | Helps employers pay workers' super on time — pro-worker. |
| Market exists (evidence above) | ✅ | Mandate hits ~994K employers on a fixed date; incumbents leave the rejection gap open. |
| 1–5 person team can build this | ✅ | Medium build, 3–4 months. |
| Launchable with <$50K / ₹40L | ✅ | API access + LLM costs + landing page; no capital intensity. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | Real penalty exposure on a 7-day fuse, felt every pay run. Caps below 17 because most pay runs don't bounce — pain is sharp but intermittent. |
| Demand evidence | 15 | 12/15 | Strong sourced industry/vendor signal + huge mandated TAM. Docked because direct first-person customer complaints are still thin pre-deadline (reform not yet live). |
| Build feasibility | 15 | 12/15 | Mostly off-the-shelf; SuperStream return-parsing + per-fund quirks are the real work. |
| Distribution clarity | 15 | 12/15 | Named associations, scrapeable directories, active groups, deadline-driven urgency. Conversion math still estimated. |
| Revenue mechanics | 15 | 12/15 | Pricing fits bookkeeper wallets; low-single-digit penetration reaches $1M. Add-on risk: incumbents could bundle. |
| Time to first revenue | 10 | 7/10 | Pre-deadline urgency supports fast pilots, but v1 needs 3–4 months to build first. |
| Defensibility | 10 | 5/10 | Execution + per-fund parsing know-how + bookkeeper workflow lock-in. Xero/MYOB could close the gap — the central risk. |
| **Total** | **100** | **76/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`domain-expertise-required` (Australian super/SuperStream mechanics) · `technical-heavy` (API integration + return-message parsing)

### Key assumptions to validate (3–5)

1. **Assumption:** Bounced/rejected super contributions are frequent enough per book to be a felt, recurring pain (not a once-a-quarter edge case). **How to test:** Interview 25 BAS agents; ask for their actual rejection rate per pay cycle and time-to-fix today.
2. **Assumption:** Xero/MYOB will *not* ship native rejection-triage + countdown within 12 months. **How to test:** Read their public Payday Super roadmaps; ask 10 bookkeepers what their vendor has promised for rejections specifically.
3. **Assumption:** Bookkeepers will pay A$49–149/mo for a safety net rather than absorb the risk. **How to test:** Pre-sell 20 annual pilots before building; require card-on-file.
4. **Assumption:** SuperStream return messages are parseable across the major funds without per-fund custom hell. **How to test:** Collect real (anonymised) rejection samples from 5 bookkeepers across AustralianSuper, ART, Rest, HostPlus, an SMSF.

### Risk flags

1. **Platform dependency / incumbent encroachment:** The whole product lives in a gap Xero or MYOB could close by shipping native rejection-triage. This is the #1 kill risk — speed to the deadline and bookkeeper lock-in are the only defenses.
2. **Market timing:** Pain is real only *after* 1 July 2026. Build too early and there's no live bounce volume to demo; too late and incumbents/competitors have moved. The window is roughly Q2–Q4 2026.
3. **Intermittency:** A safety net that fires rarely is easy to churn off ("we haven't had a bounce in 3 months"). Must bundle enough always-on value (audit trail, SG-shortfall alerts) to justify the subscription between incidents.

## 14. Structured verdict

```
Score:                  76/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder with an Australian payroll/BAS-agent domain advisor
Time to revenue:        8–12 weeks to first pilot revenue (pre-sell), v1 in 3–4 months
Capital to launch:      A$15–35K ($10–23K)
Top 3 assumptions to validate first:
  1. Rejection frequency per book is a recurring pain — 25 BAS-agent interviews on real reject rates
  2. Xero/MYOB won't natively triage rejections within 12 months — roadmap review + 10 bookkeeper checks
  3. Bookkeepers pre-pay for a safety net — 20 annual pilots, card-on-file, before build
Kill criteria:
  - Abandon if <10 of 25 interviewed BAS agents report rejections as a recurring (monthly+) problem
  - Abandon if Xero or MYOB announces native rejection-triage + 7-day countdown before v1 ships
  - Abandon if <8 of 20 pre-sell pilots convert to card-on-file
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Build a target list of 200 Australian bookkeeping/BAS practices from ICB/IPA directories and "Payday Super ready" Google ads. Draft the 90-second Loom showing a bounce caught at day 5.
- **Day 3–4:** Run 25 interviews / DMs with BAS agents: actual rejection rate per pay cycle, current time-to-fix, what their Xero/MYOB has promised for rejections, and "would you pay A$99/mo for an automatic catcher?" Collect 5 real anonymised rejection messages to test parseability.
- **Day 5:** Decide go / no-go. **Go** only if ≥10 of 25 confirm rejections are a recurring monthly pain *and* ≥8 verbally commit to a paid pilot *and* the 5 rejection samples are machine-parseable. Falsifiable: a clear count, not a vibe.
