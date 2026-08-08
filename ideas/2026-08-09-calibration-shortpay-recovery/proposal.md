---
title: "ShortStop — short-pay recovery ledger for auto glass shops"
slug: calibration-shortpay-recovery
date: 2026-08-09
category: TradeTech / US-SMB — Independent Auto Glass and ADAS Calibration Shops (2–20 Techs) Whose Recalibration Line Items Are Silently Short-Paid or Denied by Insurance TPAs
complexity: Medium
score: 76
verdict: GO
confidence: Medium
oneLiner: "Finds every calibration dollar an insurer quietly shaved off your invoice, and files the appeal while the window is open."
tags:
  vertical: TradeTech
  model: SaaS
  geography: US
  secondary: [SMB, AI-agent, Compliance-driven, Workflow-automation, Solo-builder]
axes:
  problem: 17
  demand: 12
  build: 11
  distribution: 12
  revenue: 12
  time: 8
  defensibility: 4
founderFit: [technical-heavy, sales-heavy]
featured: false
---

# ShortStop

## 1. One-liner

Finds every calibration dollar an insurer quietly shaved off your invoice, and files the appeal while the window is open.

## 2. Trend signal — why now?

Three things moved at once, and they moved in the shop's favor for the first time.

**ADAS calibration became unavoidable, and expensive.** Recalibration is non-negotiable for lane-keep systems when a windshield is replaced. The work runs [$150–$600 typical, with most passenger vehicles landing $350–$700](https://www.glassandauto.com/cost-guides/adas-calibration-cost) after windshield work, and spans 1–3 hours of bay time. The US ADAS calibration services market is [~$0.72B in 2026](https://www.fortunebusinessinsights.com/adas-calibration-services-market-115495), with independent aftermarket shops consuming 45–50% of it and projected to grow to 50–55%. This is now a material revenue line for a small shop, not a rounding error.

**Insurers and their TPAs are not reliably paying it.** Reimbursement flows through [four major Third Party Administrators, each with their own pricing schedules, short-pay logic, and dispute windows](https://beancount.io/bg/blog/2026/06/03/mobile-auto-glass-windshield-replacement-adas-recalibration-bookkeeping-asc-606-insurance-billing-fmvss-205-agsc-agrss-rolags-section-179-cargo-van-tpa-network-kpi-guide). Calibrations are "sometimes billed as a separate line item, sometimes bundled, sometimes denied entirely." Most insurers require pre-approval for a procedure the OEM already mandates. The industry press documents this plainly: shops [fight for approval of recalibrations](https://glassbytes.com/2025/02/auto-glass-companies-fight-for-insurance-approval-of-recalibrations/) job by job.

**The law is turning, and it's turning on documentation.** A wave of state bills landed in early 2026 — [Illinois HB 4373, Virginia HB 312, Washington SB 5871 and HB 2109, South Carolina S. 767](https://glassbytes.com/2026/01/the-bills-keep-coming-state-auto-glass-legislation-wave-continues/). South Carolina's S. 767 would mandate reimbursement at "prevailing competitive market rates" rather than insurer-set rates. Georgia's HB 1117 goes further: insurers must approve labor, parts and calibrations needed to follow OEM procedure, and may only deny with a [written itemized explanation within three business days](https://www.repairerdrivennews.com/2026/03/04/industry-responds-to-federal-bill-requiring-nhtsa-guidelines-for-adas-calibrations/). A federal bill directing NHTSA to set calibration guidelines is also in play.

That last part is the unlock. A written-itemized-denial-on-a-clock right is worthless to a shop that isn't tracking which jobs got denied and when. It's very valuable to a shop that is.

Provenance:
  - Signal 1 (demand): Auto glass shop owners publicly documenting unpaid and slow-paid recalibration work; "My biggest frustration in dealing with insurance is getting paid" — https://glassbytes.com/2025/02/auto-glass-companies-fight-for-insurance-approval-of-recalibrations/ — 2025-02-18, still the live complaint in 2026 industry coverage
  - Signal 2 (feasibility): Short-pay disputes are documentation problems, not legal ones — "Pre-scans, post-scans, setup photos, and references to OEM procedures show why the calibration was necessary"; the artifacts already exist as PDFs and photos and merely need assembly — https://beancount.io/bg/blog/2026/06/03/mobile-auto-glass-windshield-replacement-adas-recalibration-bookkeeping-asc-606-insurance-billing-fmvss-205-agsc-agrss-rolags-section-179-cargo-van-tpa-network-kpi-guide — 2026-06-03
  - Signal 3 (economic): $0.72B US ADAS calibration services market in 2026 with independents taking 45–50% and rising, plus a 2026 multi-state legislative wave forcing OEM-procedure reimbursement and itemized denials — https://www.fortunebusinessinsights.com/adas-calibration-services-market-115495 and https://glassbytes.com/2026/01/the-bills-keep-coming-state-auto-glass-legislation-wave-continues/ — 2026-01
  Category: Underserved niche

## 3. The opportunity

The gap is between *billing* and *reconciliation*.

Every existing tool in this category serves the moment the invoice goes out. [Omega EDI powers over 3,000 auto glass shops](https://www.omegaedi.com/) and its validation engine catches "incorrect deductibles, invalid VINs, and mismatched claim numbers" — claiming up to 70% fewer EDI rejects. That is syntax checking before submission. GlassBiller and Mainstreet Glas-Avenue do point-of-sale, scheduling, and billing. On the calibration side, [1 Source ADAS](https://1sourceadas.com/what-insurance-adjusters-expect-in-adas-calibration-reports-and-how-to-deliver-it-every-time/) generates standardized calibration reports with linked OEM procedures at the time of the calibration.

None of them answer the only question that matters thirty days later: **did the money actually arrive, and if not, exactly how much is missing on which job?**

A rejected EDI claim is loud — it bounces, the shop sees it. A short-pay is silent. The remittance lands, the bank balance goes up, the office manager marks the job closed. Nobody notices that the $425 calibration line was paid at $180, or bundled into the glass labor, or dropped entirely. Multiply by 40 calibrations a month and a two-van shop is leaking $4,000–$8,000 a year in revenue it already earned and already has the documentation to defend.

The disruption isn't AI-for-the-sake-of-it. It's that reconciling a remittance advice against an original invoice, line by line, across four TPAs with four different formats and four different bundling conventions, is exactly the tedious document-matching work that nobody at a 6-person shop has time for — and that is now cheap to automate. The appeal packet that follows is a template plus the shop's own artifacts.

## 4. Target market

- **Primary customer:** Owner-operator or office manager at an independent auto glass shop or ADAS calibration center in the US — 2 to 20 technicians, 1 to 6 mobile vans, $500K–$5M annual revenue, doing 20–150 calibrations a month. Concentrated first in states with 2026 reimbursement legislation (Georgia, South Carolina, Illinois, Virginia, Washington) and zero-deductible glass states.

- **Why they buy:** In their own words. Jasper Raynor, owner of Raynor Auto Glass in Helena, Alabama: *"My biggest frustration in dealing with insurance is getting paid."* And: *"In January, I had a lot of insurance work and not a lot of cash work. I'm still waiting on payment for a lot of the insurance jobs."* Sean Fagan, owner of Appalachian Auto Glass in Boone, North Carolina: *"Eventually, I get payment, but it takes way more man-hours than it should."* Patricia Smiley, president of Quackt Glass in South Carolina, on doing work twice without being paid twice: *"We're not getting paid for the labor of installing glass more than once [per job], so at that point, you have to wonder if it's even a profitable job."* Dylan Muscutt, owner of Premier Glass in New Orleans, on the pre-approval dance: *"We all know that recalibration is required, so I don't understand why we have to ask for approval for a service that should already be included in an installation"* and *"It wastes a lot of time and money doing that."* An industry commenter on TPAs: *"The TPA's are nobody's friend. They're a horrific business partner."*

- **Rough TAM reasoning:** The US auto glass industry is [dominated by small independent shops](https://www.mywindshield.com/blog/starting-your-own-auto-glass-repair-business-vs-franchising/) operating as sole proprietorships and LLCs, with Safelite holding roughly a third of the market and the remainder highly fragmented. Omega EDI alone serves 3,000+ shops, which is a useful floor for the software-buying, insurance-billing segment. Call the realistic serviceable base 8,000–15,000 US shops that bill insurance for calibration work. At $299/mo blended, a 3% share is ~$1.2M ARR. This is not a market that needs to be huge — it needs to be reachable, and it is.

- **Why now for them:** Calibration went from an occasional add-on to a large share of ticket value in the space of a few model years, so the leak got big enough to feel. Simultaneously the 2026 state bills hand shops an itemized-denial right they've never had. The shops that can produce a job-level paper trail will collect under the new rules; the ones running on a whiteboard won't.

## 5. Product sketch (MVP)

- **Remittance parsing.** Drop in the EOB, remittance advice, or TPA payment statement — PDF, scan, or portal export. ShortStop reads it and matches every paid line back to the original invoice.
- **The short-pay ledger.** One screen: every job, billed amount, paid amount, variance, and a plain-English reason (denied / bundled into glass labor / paid below submitted rate / silently dropped). Sorted by dollars recoverable.
- **Deadline clock per job.** Each TPA and each state has its own dispute window. Every open variance shows days remaining before the right to appeal expires.
- **Appeal packet builder.** One click assembles the pre-scan, post-scan, calibration report, setup photos, the OEM position statement for that VIN's make and model, and a cover letter citing the applicable state statute — into a single PDF addressed to the right TPA.
- **OEM procedure library.** Pull the manufacturer requirement that made the calibration mandatory for this specific vehicle, so "not required" denials get answered with the OEM's own words.
- **Recovery scoreboard.** Dollars identified, dollars appealed, dollars collected, average days to payment — by TPA and by carrier. Shows the owner exactly which insurers are worth arguing with.
- **Retention archive.** Every packet stored and searchable; California requires three years of ADAS documentation retention and other states vary.

## 6. AI angle — what's load-bearing

Remove the AI and this product does not exist.

The core job is reading a heterogeneous pile of documents that were never designed to be compared: a remittance from one of four TPAs (each with its own layout, its own line-item codes, its own bundling conventions), against an invoice the shop generated in one of five different POS systems, against a calibration report from one of several equipment vendors. Half of it arrives as a scanned PDF or a portal screenshot. There is no API and there will not be one — the TPAs have no incentive to build it.

Document understanding is what turns that pile into a matched pair of numbers. Then the classification job — *why* is this line short — is genuine judgment: distinguishing "denied outright" from "silently bundled into the glass labor line" from "paid at a schedule rate below what was submitted" requires reading the remittance language in context, and each TPA words it differently.

The appeal packet then needs the right OEM position statement retrieved for a specific year/make/model/trim and the argument framed against the specific denial reason and the specific state statute. That's retrieval plus drafting.

A rules engine could handle maybe the top 20% of cases. The long tail — which is where the money hides, because obvious denials are the ones shops already catch — needs the model.

## 7. Localization angle

N/A — this is a US-only play. The entire value depends on US insurance TPA structure, state-by-state glass and reimbursement statutes, and OEM position statements as they function in US collision repair. That specificity is a feature, not a limitation: it's precisely why a generic global tool can't wander in. Natural expansion is to Canada (similar OEM procedure regime, different insurer structure) rather than to another language.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** Three tiers. **Solo** $149/mo (single location, up to 30 calibrations/mo). **Shop** $349/mo (up to 100 calibrations/mo, appeal packets unlimited). **Multi-location** $799/mo (3+ locations, per-TPA scoreboards, roll-up reporting). Optional performance tier for the skeptical: 15% of recovered dollars for the first 90 days, then convert to flat subscription — this kills the "does it actually find anything" objection at the point of sale.

- **ACV:** ~$3,600 blended, assuming most customers land on Shop tier.

- **Rough math to $1M ARR:** 280 shops × $349/mo × 12 = $1.17M. Against a serviceable base of 8,000–15,000 insurance-billing shops, that's 2–3% penetration.

- **Rough math to $5M ARR:** ~1,150 shops at blended $360/mo, or ~700 shops with ACV pushed to $600/mo by moving upmarket into multi-location operators and calibration-center franchise networks. Realistically $5M requires both: broader penetration *and* expansion into adjacent collision repair, where the same short-pay dynamic exists on a bigger ticket with more line items.

- **Expansion path:** Start with calibration short-pays. Expand to the whole invoice (glass, labor, moulding, mobile service fees — all short-paid by the same TPAs using the same logic). Then expand from auto glass into general collision repair, where the identical problem exists at 5–10× the invoice size. Each expansion raises ACV without acquiring a new customer.

- **Margin note:** Document parsing is the main variable cost. At 100 calibrations/mo per shop with a handful of documents per job, inference cost per customer is single-digit dollars monthly against a $349 price. Gross margin is not the risk here.

## 9. Go-to-market wedge — first 100 customers

- **The free audit, run on their own data.** The single highest-converting motion: "Send me last quarter's remittances and invoices. I'll tell you free how much you were short-paid." The shop already has the files. The output is a dollar figure with the shop's own job numbers attached — not a demo, a diagnosis. Target 200 shops, expect 25–30% to hand over files (it costs them nothing), and close a large share of those where the audit finds a real number. This is the entire wedge; everything else is a way to get to this conversation.

- **State-legislation cohort targeting.** The 2026 bills are the reason to call *this week*. Build a list of licensed auto glass shops in Georgia, South Carolina, Illinois, Virginia, and Washington from state business registries and glass industry directories. The email writes itself: "Georgia's HB 1117 requires your insurer to give you an itemized written denial within three business days. Here's how to make that worth money." Legislation is a legitimate, non-spammy reason to be in someone's inbox and it dates the message.

- **The trade press and association channel.** glassBYTEs/AGRR Magazine and the Auto Glass Safety Council (AGSC) are where this industry actually reads and argues. The recovery scoreboard produces something the trade press wants and nobody has: aggregate data on which TPAs short-pay calibration most often. Publishing an anonymized quarterly "TPA Payment Index" is a durable content engine that generates inbound from exactly the right people, and it makes the product the reference source for an industry-wide grievance.

- **Calibration equipment and training partners.** Companies that set up calibration centers for independent shops (Car ADAS has helped 80+ businesses open centers) already have the exact customer at the exact moment they start billing calibrations. Referral or bundled arrangement — the equipment vendor's customer succeeds if the calibration actually gets paid for, so incentives align.

- **Direct outbound to the complainers.** Every shop owner quoted in trade coverage about not getting paid is a named, warm prospect. So is every commenter under those articles. This is a small industry with a loud, identifiable set of aggrieved operators — the list of people who have publicly said "I can't get paid for calibrations" is short enough to work through by hand and long enough to seed the first 20 customers.

## 10. Build complexity — justification

**Medium.** The parsing layer is the real work: four TPA remittance formats plus a handful of POS invoice exports plus scanned documents, and each format needs enough test coverage that the shop trusts the variance number. Get that wrong once and the customer stops believing the ledger. Everything else is off-the-shelf — document models, a rules layer for dispute windows, PDF assembly, standard web stack. The OEM procedure library is a licensing-or-curation problem more than an engineering one, and the MVP can cover the top 20 vehicle platforms that account for most windshield volume. A technical founder plus a part-time domain advisor from the glass industry ships a credible v1 in 12–16 weeks. The domain advisor is not optional — the difference between "bundled into glass labor" and "paid at schedule rate" is industry knowledge, not engineering.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Shop is appealing its own claims with its own documentation. No insurance license needed to help a business dispute its own receivables. Avoid acting as a public adjuster — the product prepares documentation, the shop files it. |
| Ethical — no harm / dark patterns | ✅ | Recovering payment for work legitimately performed and OEM-mandated. The appeals are only as good as the underlying documentation; the product should refuse to build a packet where the calibration wasn't actually done. |
| Market exists (evidence above) | ✅ | Named shop owners on record about non-payment; $0.72B market; 3,000+ shops already paying for adjacent billing software. |
| 1–5 person team can build this | ✅ | 1 technical founder + domain advisor for v1; 2–3 people through $1M ARR. |
| Launchable with <$50K / ₹40L | ✅ | Inference, hosting, a legal review of the public-adjuster boundary, and travel to two trade shows. Well under $50K. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 17/20 | Direct revenue leakage on work already performed, felt monthly, with named operators on record saying getting paid is their single biggest frustration. Not 19–20 because it's a slow bleed the shop has learned to tolerate rather than a hair-on-fire stoppage — some owners have genuinely written off short-pays as a cost of doing business, and complacency is a real sales obstacle. |
| Demand evidence | 15 | 12/15 | Multiple independent signals: verbatim owner complaints in trade press, 3,000+ shops paying for adjacent billing software, a $0.72B market, a five-state legislative wave. Held below 13 because I found no direct evidence of shops paying specifically for *recovery* — the willingness-to-pay for this exact wedge is inferred from adjacent spend, not observed. |
| Build feasibility | 15 | 11/15 | Standard stack and off-the-shelf document models, but four TPA formats plus scanned-document reliability is genuine engineering discipline, and trust in the variance number is binary. 12–16 weeks, not 6. |
| Distribution clarity | 15 | 12/15 | The free audit on the shop's own data is a strong, concrete, cheap motion with a named target list and a legislative hook for timing. Not higher because auto glass shop owners are hard to reach — they're in vans, not inboxes — and conversion on cold outbound to this segment is unproven. |
| Revenue mechanics | 15 | 12/15 | Pricing benchmarked against adjacent tools shops already buy; 280 customers to $1M is credible against the base. The performance tier de-risks the initial sale. Docked for the churn question: if the product's own success trains insurers to stop short-paying that shop, the ongoing value proposition weakens. |
| Time to first revenue | 10 | 8/10 | The free audit converts fast because the output is a dollar figure from the customer's own files — weeks, not months. Not 9–10 because assembling a trustworthy audit requires the parsing layer to work first, so pre-selling is harder than in a pure-services play. |
| Defensibility | 10 | 4/10 | The weak axis, honestly. Omega EDI has 3,000 shops and could bolt reconciliation onto existing billing; 1 Source ADAS could extend forward from reporting into recovery. What accumulates is denial-pattern data across TPAs and carriers — which arguments actually got paid — and that compounds. But at month 3 there's no moat beyond focus and a 6-month head start. |
| **Total** | **100** | **76/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `sales-heavy`

Technical because the parsing layer is the product and it has to be trustworthy. Sales-heavy because this customer does not buy software from a website — they buy from a person who showed them a number. A founder unwilling to do the free audit by hand for the first 30 customers should not start this.

### Key assumptions to validate (3–5)

1. **Assumption:** Calibration short-pays are material — a typical shop is losing $3,000+ a year in silently reduced or dropped calibration lines. **How to test:** Get 10 shops to share one quarter of remittances and invoices. Reconcile by hand. If the median recoverable is under $750/quarter, the pricing doesn't work and the idea is dead.
2. **Assumption:** Shops don't already catch these. **How to test:** In the same 10 shops, ask the office manager to state their short-pay total before showing them the reconciliation. The gap between what they believe and what's real *is* the product's value. If they already know the number, the product is just a filing tool and worth far less.
3. **Assumption:** Appeals backed by pre/post scans, OEM procedures, and a state statute citation actually get paid. **How to test:** File 25 appeals by hand across the four TPAs. Track recovery rate and days-to-payment. Below ~30% recovery and the value proposition collapses regardless of how good the detection is.
4. **Assumption:** Shops will pay $349/mo rather than demand pure contingency. **How to test:** Offer both to the first 20 prospects and watch which they pick. Heavy skew to contingency means this is a services business wearing a SaaS costume.
5. **Assumption:** Remittance documents can be parsed reliably enough across four TPAs to be trusted. **How to test:** Collect 200 real remittances, measure line-matching accuracy. Below 95% on the money-bearing fields and shops will stop trusting the ledger after the first false positive.

### Risk flags

1. **Incumbent encroachment:** Omega EDI (3,000+ shops) and GlassBiller already own the billing workflow and the invoice data. Reconciliation is a natural adjacent feature for them, and they'd start with distribution this product has to earn. Mitigation is speed and depth — being the tool that knows *which argument wins against which TPA*, which is a data asset they'd have to accumulate too.
2. **Regulatory whiplash:** The value proposition leans on the 2026 state bills. As of the last reporting, South Carolina's S. 767 and H. 4049 remained in committee. If the legislative wave stalls, the "why now" softens considerably — though the underlying short-pay economics survive without it.
3. **Adversarial counterparty:** TPAs may change remittance formats, restrict portal access, or add friction to appeals specifically to blunt this. The product depends on reading documents from parties who benefit from those documents being hard to read. No API means no platform dependency, but it also means no stability guarantee.
4. **Success-erodes-need:** If a shop's appeals train its TPAs to pay calibration correctly upfront, the recovered-dollars number falls and the renewal conversation gets harder. Counter is to reposition from recovery to assurance — the ledger proving payment is correct is worth something, but it's worth less than found money.
5. **Public adjuster boundary:** Preparing and pursuing insurance claims on behalf of another party is licensed activity in many states. The product must stay on the "shop's own tooling for the shop's own receivables" side of that line. Needs a real legal opinion before launch, not after.

## 14. Structured verdict

```
Score:                  76/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder who will personally hand-reconcile the first
                        50 shops' remittances, paired with a domain advisor from the
                        auto glass or collision repair industry
Time to revenue:        8–12 weeks (free audit converts to paid before the product is finished)
Capital to launch:      $15–25K (inference, hosting, legal opinion on public-adjuster
                        boundary, two trade shows)
Top 3 assumptions to validate first:
  1. Median shop is losing $3,000+/year to calibration short-pays — hand-reconcile one
     quarter of remittances for 10 shops before writing any code
  2. Appeals with full documentation actually get paid — file 25 by hand across the four
     TPAs, measure recovery rate and days-to-payment
  3. Shops don't already know their short-pay number — ask them to guess before you show
     them; the gap is the product
Kill criteria:
  - Abandon if hand-reconciling 10 shops' quarterly remittances finds a median
    recoverable under $750/quarter — the ROI story doesn't clear the price
  - Abandon if fewer than 30% of 25 hand-filed, fully-documented appeals recover money
    within 90 days — detection without recovery is a report, not a product
  - Abandon if Omega EDI or GlassBiller ships native short-pay reconciliation to their
    installed base before v1 launches
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Build the target list. Pull 150 independent auto glass shops from state licensing registries and industry directories, weighted toward Georgia, South Carolina, Illinois, Virginia, and Washington. Call — do not email — 40 of them. Single ask: "Would you send me one quarter of your remittances and matching invoices? I'll reconcile them by hand and tell you free what you were short-paid on calibrations." Track how many say yes; that rate alone tells you whether the wedge motion works.

- **Day 3–4:** Hand-reconcile everything that comes in. No automation, no code — spreadsheet and eyes. For each shop produce: total calibration dollars billed, total paid, variance, and a per-line reason. Simultaneously ask each participating owner to guess their own short-pay number *before* seeing the result.

- **Day 5:** Decide on two hard numbers. **Go** if (a) the median shop shows ≥$750/quarter in recoverable calibration variance, and (b) at least 6 of 10 owners underestimated their own number by more than 2×. **No-go** if the median variance is under $750 — the price can't be justified — or if owners already know their number accurately, which means detection is worthless and only filing has value, at a fraction of the ACV.

The falsifiable result is the median quarterly variance in dollars. It's computed from the customers' own documents, it's not a matter of opinion, and it either clears $750 or it doesn't.
