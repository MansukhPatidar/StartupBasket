---
title: "PaydayPulse — Payday Super reconciler for AU small employers"
slug: paydaypulse-au-super
date: 2026-05-11
category: Compliance SaaS / Australian Micro & Small Employers (1–19 staff) facing the 1 Jul 2026 Payday Super mandate
complexity: Medium
score: 81
verdict: STRONG GO
confidence: High
oneLiner: Reconciles every AU pay run against the 7-business-day Payday Super window and auto-files SGC voluntary disclosures.
tags:
  vertical: Compliance
  model: SaaS
  geography: Global
  secondary: [Australia, Payroll, SMB, Bookkeeper-channel, Compliance-driven, Regulatory-arbitrage, AI-agent]
axes:
  problem: 18
  demand: 13
  build: 11
  distribution: 12
  revenue: 12
  time: 9
  defensibility: 6
founderFit: [technical-heavy, domain-expertise-required]
featured: true
---

# PaydayPulse — Payday Super reconciliation cockpit for AU small employers

## 1. One-liner

Reconciles every AU pay run against the 7-business-day Payday Super window and auto-files SGC voluntary disclosures.

## 2. Trend signal — why now?

On 1 July 2026 — fifty days from today — every Australian employer must pay employees' super at the same time as wages, with the contribution **received by the fund within 7 business days** of payday. Miss the window and the new Super Guarantee Charge (SGC) is triggered from day 8: SG shortfall + nominal interest (10% p.a., now daily compounding under the new framework) + an admin uplift up to **60%** of the SG amount, plus a 25%–50% late-payment penalty if not rectified within 28 days. There is no grace period and no amnesty.

Simultaneously the ATO's Small Business Superannuation Clearing House (SBSCH) — used by hundreds of thousands of micro-employers — **closes permanently at 23:59 AEST on 30 June 2026**. Every one of those employers must move to a commercial clearing house before then.

Three reasons the iceberg is bigger than the brochure:

1. **The new reconciliation is per-pay-cycle, not quarterly.** The bookkeeper now has to match three artefacts every pay run: the STP-reported super amount, the SuperStream Contribution Transaction Response (CTR) confirmation from the clearing house, and the bank debit. The Reckon/Xero/MYOB roadmaps treat this as a payroll-product feature; in practice the CTR file the clearing house sends back is often in a shape the payroll product can't natively parse, so the bookkeeper ends up reconciling against a CSV.
2. **The SG base widened.** SG now calculates on Qualifying Earnings (QE), not Ordinary Time Earnings (OTE). Paid leave loading and several previously-excluded allowances are in scope. The SG amount on most pay runs goes up. Recalcing this retroactively across a year of pay history is a real piece of work.
3. **The market is unprepared.** ACCI says over 40% of small businesses are not yet aware of the change. Xero's own research: 84% of small employers say late customer payments could prevent them complying with the new timing. 87% say it will pressure cash flow. 33% say they may need personal savings.

Public count: **994,178 employing businesses** in Australia (ABS, 30 June 2025). 97.3% are small. Of small employers: ~250K with 1–4 staff and ~84K with 5–19 staff. Target wedge ≈ 418K shops, mostly running Xero or MYOB, with the SBSCH-using cohort (six-figure count) freshly forced to move.

> Provenance:
> - Signal 1: ATO confirms Payday Super hard go-live 1 Jul 2026; SBSCH closes 30 Jun 2026 — [ATO Payday Super](https://www.ato.gov.au/businesses-and-organisations/super-for-employers/payday-super/about-payday-super) — May 2026
> - Signal 2: Xero research — 84% of AU small employers say late customer payments threaten Payday Super compliance; 87% expect cash-flow pressure — [Xero AU media release](https://www.xero.com/au/media-releases/small-businesses-back-payday-super-but-late-payments-are-major-compliance-barrier/) — 2026
> - Signal 3: New SGC framework includes daily compounding interest and admin uplift up to 60% of SG amount; reconciliation now a per-pay-cycle three-way match — [Allan Hall](https://allanhall.com.au/payday-super-compliance-and-penalties/), [Reckon Australia](https://www.reckon.com/au/small-business-resources/payday-super/compliance-extensions-penalties/), [invoice extraction reconciliation guide](https://invoicedataextraction.com/blog/reconcile-payday-super-contributions-australia-xero-myob) — Q1 2026
> - Category: Regulatory arbitrage

## 3. The opportunity

A fifty-day-from-now hard regulatory cutover with sharp teeth in a market of ~418K target employers, with the incumbents (Xero, MYOB, Employment Hero, Reckon) doing what they always do: building the **happy path** for their own customers — calculate SG correctly under QE, push payment via their integrated clearing house, file STP. None of them lead with the failure-mode workflow: "this contribution will not land in 7 business days, here's what to do *now*, and here's the voluntary-disclosure paperwork pre-filled for the cases where you've already missed."

Xero and MYOB will tell you they have it covered. They have it covered the way TurboTax has tax planning covered: fine for the median case, painful when the data doesn't line up. The CTR files don't ingest cleanly. The bank feeds lag. PayTo and direct-debit settlement timings vary. The bookkeeper still ends up in a spreadsheet at 9pm reconciling Friday's pay run because Monday is day 4 of the 7.

PaydayPulse is the **paranoid co-pilot** that sits next to whatever payroll + clearing house combination the employer already uses, watches every pay cycle, detects the misses before SGC bites, and produces the voluntary-disclosure statement when one is needed. It's not a payroll replacement, not a clearing house, not a competitor to Xero — it's the compliance assurance layer the regulator effectively created in May 2026.

## 4. Target market

- **Primary customer:** Australian micro and small employers, 1–19 staff, currently using Xero, MYOB, Reckon or QuickBooks Online for payroll, with a bookkeeper attached (~70% of this cohort uses an external bookkeeper). Hot wedge: the ~SBSCH-user cohort being forced off the ATO clearing house by 30 June 2026.
- **Why they buy:** Fear of SGC. The math is brutal — one missed pay cycle on a 5-person team at $1,500 SG = ~$900 admin uplift + interest + 25–50% late penalty if not fixed in 28 days. One avoided incident pays for the tool for 5+ years.
- **TAM reasoning:** ~418K target employers × $59/mo AUD avg = ~$24M/mo addressable. Capturing 1% is $250K MRR ($3M ARR). 5% is $15M ARR — already well past the $5M target. ICB-Australia has ~5,000 certified bookkeeper members; each manages 20–60 clients = a single bookkeeper rep is a 20–60 account opportunity.
- **Why now for them:** Mandate is 50 days out. ACCI says 40% are still unaware. The "I'll deal with it when Xero ships their update" cohort is going to get their first SGC notice in August 2026 and panic. We want to be the obvious second purchase on the search-result page right behind Xero's announcement.

## 5. Product sketch (MVP)

- **One-time payday-super readiness scan.** Pull last 12 months of pay runs from Xero/MYOB; recalculate SG on Qualifying Earnings basis (not OTE); flag retrospective shortfalls and produce the dollar exposure if voluntary-disclosed.
- **Per-pay-run countdown clock.** As soon as STP is filed for a pay run, PaydayPulse starts a 7-business-day timer per employee per fund and shows the cockpit: "Green / At-risk / Already late."
- **Three-way match engine.** Ingest STP file, bank feed (Xero/MYOB bank rule + open banking), and the clearing house CTR file. Auto-match contributions; surface mismatches in plain English ("Contribution to AustralianSuper for Sarah K. lodged but no CTR confirmation — fund may have rejected, action needed by Tuesday").
- **Late-payment guardrails.** Daily SGC accrual counter once a contribution misses the 7-day window. Lists what's owed if rectified today vs in 7 days vs in 28 days.
- **SGC voluntary disclosure builder.** Pre-fills the ATO voluntary disclosure statement using your own data; downloadable PDF + structured XML for direct lodgement.
- **Bookkeeper view.** One screen showing every client, every open pay run, every at-risk contribution — sorted by SGC exposure dollar value.
- **Plain-English alerts.** SMS + email to owner when something needs action this week. No noise; only when SGC is on the table.
- **Audit log.** Cryptographic timestamp of every contribution lodgement event — useful if the ATO comes asking.

## 6. AI angle — what's load-bearing

Two places it earns its keep:

1. **CTR + SAFF + bank-feed normalisation.** Every clearing house, every fund, ships slightly different file shapes — there is a SuperStream standard but Schedule 4a/Schedule 6 response-message variations are real, and SAFF (the alternative file format) doesn't even specify mandatory fields. An LLM-driven parser that normalises a heterogeneous reconciliation surface across ~20 clearing houses and 200+ super funds is where 80% of the engineering value sits. This is exactly the "messy CSV → structured" workflow LLMs got cheap and good at in the last 18 months.
2. **Voluntary-disclosure narrative + reasonable-care defence.** The SGC voluntary disclosure can reduce penalty exposure. The form asks for the cause and the remediation. An LLM generates a defensible, ATO-language explanation from the structured event log — saving the bookkeeper 45 minutes per incident.

Remove the AI: you have a spreadsheet macro and a PDF form filler. Nobody pays $59/mo for that.

## 7. Localization angle

This **is** the localization play. Australia-only product:

- ATO/SuperStream-native — every artefact and rule is AU-specific.
- AUD pricing tier (likely $39 / $79 / $149 AUD/mo) — works for AU SMB wallets.
- Built around AU bookkeeper professional bodies (ICB-Australia, ABN, Australian Payroll Association).
- AU business hours support.

A US/EU clone of this product does not exist because the regulatory shape doesn't exist there. The product is intentionally non-portable — and that's the moat for the next 24 months.

## 8. Business model — path to $1M–$5M ARR

- **Pricing (AUD):**
  - Solo (1 employee): $39/mo
  - Small (2–10 employees): $79/mo
  - Growth (11–19 employees): $149/mo
  - Bookkeeper pack: $499/mo flat for up to 30 client files, $15/mo per additional
- **ACV:** Direct: $79 × 12 = $948 AUD (~$625 USD). Bookkeeper pack: $5,988 AUD (~$3,950 USD).
- **Rough math to $1M ARR (AUD):** 1,100 direct customers × $79 + 50 bookkeeper packs × $499 = $1.34M ARR. Achievable within 9–12 months given the deadline urgency.
- **Rough math to $5M ARR (AUD):** 4,500 direct customers + 200 bookkeeper packs = $5.5M ARR. Realistic over 24 months if bookkeeper channel converts. ~1.1% of the 418K target market.
- **Expansion path:**
  - Year 2: Add adjacent compliance tooling — STP Phase 2 anomaly detection, FBT, payroll-tax reconciliation across states. Each adds $20–40/mo per seat.
  - Year 2: White-label for super funds — funds want to give their employer customers a reconciliation tool because it reduces their inbound support burden.
  - Year 2: Cross-sell SGC-rectification done-for-you service at $499/incident.

## 9. Go-to-market wedge — first 100 customers

This is the wedge where I have the most conviction, because the deadline does the marketing for me. Five concrete moves:

1. **ICB-Australia + ABN partner play.** Both bookkeeper associations are publishing Payday Super readiness content and looking for tools to recommend to members. Approach them with a co-branded "PaydayPulse Bookkeeper Edition" + a 30% revenue share. ICB has ~5,000 members; even 1% take-up = 50 bookkeeper packs = ~$300K ARR.
2. **Cold outreach to bookkeepers via LinkedIn Sales Navigator.** Filter: "Bookkeeper" + "Australia" + ICB or BAS Agent in headline. ~12,000 results. Personalised 60-second Loom showing the cockpit reconciling their actual sample pay run. Realistic 4–6% reply, 1.5% close = ~180 bookkeeper pack conversations, 30 closes.
3. **Australian Payroll Association webinar circuit.** APA runs Payday Super workshops weekly through July. Pay them $5K AUD to host a guest 20-minute slot on "what to do when reconciliation breaks" — direct sales pipeline of registrants.
4. **ATO mailing list adjacency.** Every small employer using SBSCH has been receiving "your clearing house is closing" emails from the ATO since Oct 2025. Run a Google Ads campaign on the exact-match queries those emails drive: "SBSCH alternative", "payday super clearing house", "how to file SGC". Estimated AUD$1.20–2.40 CPC on a high-intent query → AUD$50–100 CAC at 5% conversion. Buy 500 customers here for ~$30K AUD.
5. **Reddit r/AusFinance + Whirlpool forums.** Time-boxed plays — June 1 to August 31 only. Show up with a free SBSCH-migration checklist, link to a free QE retrospective scan, convert to paid.

If after 90 days I don't have 200 paying customers, the deadline-driven thesis is wrong and the idea is a PASS.

## 10. Build complexity — justification

**Medium.** Off-the-shelf: Xero + MYOB + QuickBooks payroll APIs are well-documented; ATO STP API exists; bank feed via Basiq or open banking. Custom: CTR/SAFF file parsing across N clearing houses + the three-way match logic + the SGC voluntary-disclosure PDF/XML generator. Realistic v1 in 10–14 weeks for 2 engineers with an Australian payroll-domain advisor (BAS agent or senior bookkeeper, paid retainer). The domain knowledge is the hard part — every clearing house has quirks.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Reads STP/CTR/bank data with employer consent; no money movement. No clearing house licence needed. |
| Ethical — no harm / dark patterns | ✅ | Compliance assurance is unambiguously pro-user. |
| Market exists (evidence above) | ✅ | 418K target employers, hard regulatory deadline, named penalty regime. |
| 1–5 person team can build this | ✅ | 2 engineers + 1 domain expert in ~14 weeks. |
| Launchable with <$50K / ₹40L | ✅ | Bootstrappable; domain expert retainer + ATO/SuperStream certification testing = ~$15K AUD. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 18/20 | Per-pay-cycle deadline, named penalty (60% uplift + daily compounding interest), 28-day rectification window. Hair-on-fire from August 2026 when first SGC notices arrive. |
| Demand evidence | 15 | 13/15 | Xero's own research: 84% see compliance as a real risk; 87% expect cash-flow pressure; 33% may dip into personal savings. ACCI flags 40% unaware. ABS confirms 994K employing businesses. |
| Build feasibility | 15 | 11/15 | Medium complexity. Heterogeneous CTR/SAFF formats across 20+ clearing houses + 200+ funds is the real engineering. STP and bank feeds are tractable. Realistic v1 in 10–14 weeks for 2 engs + domain advisor. |
| Distribution clarity | 15 | 12/15 | Named channels — ICB-Australia, ABN, APA, the SBSCH-migration cohort. Deadline-driven Google Ads. Bookkeeper LinkedIn outreach. Specific conversion math available. |
| Revenue mechanics | 15 | 12/15 | $39/$79/$149 AUD pricing benchmarked against Beam/HeroClear and bookkeeper retainers. ACV $948 direct, $5,988 bookkeeper. Path to $1M ARR with ~1,150 customers is realistic. |
| Time to first revenue | 10 | 9/10 | Can pre-sell on landing page from week 2 — deadline urgency means buyers want answers *now*. First revenue in 4–6 weeks of launch is plausible. |
| Defensibility | 10 | 6/10 | Soft moat — clearing house file shape knowledge accumulates, bookkeeper relationships are sticky, audit log + SGC playbook becomes the "we always use them" choice. But Xero/MYOB could ship a competing reconciliation surface in 12–18 months. Window play. |
| **Total** | **100** | **81/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` (file parsing + integrations), `domain-expertise-required` (AU payroll/super), light `sales-heavy` for bookkeeper channel.

Ideal founder: AU-based or AU-resident technical operator with a co-founder who has BAS-agent / payroll-domain depth, or a paid retainer with a respected bookkeeper from day one.

### Key assumptions to validate (3–5)

1. **Assumption:** Bookkeepers will pay $499/mo for a multi-client cockpit because the alternative is 3+ hours per client per pay run reconciling. **How to test:** 15 paid 30-min interviews with ICB members in May/June; ask them to walk through their current Payday Super readiness plan and how much time they're budgeting.
2. **Assumption:** The three-way match (STP + CTR + bank) is genuinely painful enough that bookkeepers will switch from a spreadsheet workflow. **How to test:** Demo a Loom of the cockpit reconciling a sample pay run; measure the close rate of bookkeepers who request a live trial.
3. **Assumption:** Xero/MYOB native ingestion of CTR files will remain imperfect through end of 2026, leaving genuine reconciliation gaps. **How to test:** Run the public Xero "Payday Super Ready" beta in May/June; document gaps; talk to Xero AppStore product manager.
4. **Assumption:** Employers will accept a paranoia-priced add-on ($79/mo) on top of their existing Xero/MYOB subscription. **How to test:** Landing page A/B test in May 2026 — "free SBSCH migration checklist" vs "$79/mo cockpit pre-order" — measure pre-order conversion.
5. **Assumption:** The voluntary-disclosure workflow has standalone value (not just bundled with the reconciliation cockpit). **How to test:** Launch a $99-per-disclosure standalone service in July 2026 and measure pull-through.

### Risk flags

1. **Platform dependency:** Xero/MYOB could build native reconciliation surfaces in 2027 and close the gap. **Mitigation:** Be the bookkeeper-first multi-client product they can't easily replicate. Move fast in the deadline window.
2. **Regulatory shift:** ATO could push back the go-live date or grant a 6–12 month soft-enforcement window (transitional ATO posture is on the table). **Mitigation:** Even a 6-month soft period still produces SGC notices in late 2026; demand only intensifies as those land. The "compliance assurance" framing survives a soft launch.
3. **Channel risk:** ICB/ABN partnerships may take 3+ months to formalise. **Mitigation:** Direct outreach + Google Ads can carry the first 200 customers without the associations.
4. **Reconciliation accuracy bar:** False negatives (we say "fine" but it's not) are reputation-killing. **Mitigation:** Conservative bias — surface anything ambiguous as "needs review", not "all good".

## 14. Structured verdict

```
Score:                  81/100
Verdict:                STRONG GO
Confidence:             High
Best-fit builder:       AU-based technical operator + BAS-agent/payroll-domain co-founder or paid retainer; bookkeeper sales experience a plus
Time to revenue:        4–6 weeks from launch (pre-sale possible in week 2)
Capital to launch:      AUD $25–40K (≈ USD $16–26K)
Top 3 assumptions to validate first:
  1. Bookkeepers will pay $499/mo for multi-client cockpit — 15 paid interviews in 2 weeks
  2. CTR/SAFF reconciliation gap is wide enough for a third-party — run Xero/MYOB beta and document
  3. Deadline-driven Google Ads CAC stays <$120 AUD — 2-week paid traffic test in late May
Kill criteria:
  - Abandon if <10 of 30 bookkeeper outreach calls show interest in a paid pilot
  - Abandon if Xero or MYOB announces a fully-integrated CTR reconciliation surface with multi-clearing-house support by 15 June 2026
  - Abandon if Google Ads CAC for "payday super" or "SBSCH alternative" intent queries exceeds $200 AUD after 4 weeks
  - Abandon if ATO grants a 12+ month soft-enforcement window AND voluntarily disclosure form usage stays under 5K filings/quarter through Q4 2026
```

## 15. Next step — 1-week validation sprint

- **Day 1:** Cold-DM 40 ICB-Australia members on LinkedIn with "Doing a 15-min paid ($50 AUD) chat about your Payday Super readiness — what's your biggest worry?" Target: 15 confirmed slots.
- **Day 2:** Stand up a Carrd.co landing page: "PaydayPulse — never miss a 7-business-day super deadline again." Two CTAs: "Free SBSCH migration checklist" and "Pre-order $79/mo, lock in 30% off first 6 months." Drive AUD $300 in Google Ads on exact-match terms ("SBSCH alternative", "payday super reconciliation").
- **Day 3–4:** Run the 15 bookkeeper interviews. Specifically ask: (a) what tools they're planning to use, (b) what they expect to break, (c) whether they would pay $499/mo for a multi-client cockpit, (d) whether the SGC voluntary-disclosure workflow is something they'd outsource for $99/incident.
- **Day 5:** Decide go / no-go on **two** measurable thresholds:
  - **GO** if (a) ≥8 of 15 bookkeepers say "yes, I'd pay $499/mo with a 14-day pilot" AND (b) landing page generates ≥25 email captures and ≥3 pre-orders from $300 ad spend (CAC <$100 AUD).
  - **NO-GO** if either threshold misses.

Falsifiable. Either the pre-orders show up at sub-$100 CAC, or they don't.
