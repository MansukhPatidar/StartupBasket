---
title: "TrueUp — CAM reconciliation workbench for landlords"
slug: cam-reconciliation-workbench
date: 2026-08-09
category: PropTech / US-SMB — Private Owners and Small Property Management Firms (3–40 Multi-Tenant Commercial Buildings) Producing Annual CAM True-Ups on Spreadsheets
complexity: Medium
score: 73
verdict: GO
confidence: Medium
oneLiner: "Turns a strip-center owner's messy GL into defensible CAM statements before tenants start auditing them with AI."
tags:
  vertical: PropTech
  model: SaaS
  geography: US
  secondary: [SMB, AI-agent, Compliance-driven, Solo-builder, Workflow-automation]
axes:
  problem: 15
  demand: 11
  build: 10
  distribution: 11
  revenue: 12
  time: 8
  defensibility: 6
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# TrueUp

## 1. One-liner

Turns a strip-center owner's messy GL into defensible CAM statements before tenants start auditing them with AI.

## 2. Trend signal — why now?

Three things moved at once, and they move in opposite directions — which is exactly what makes this interesting.

**Tenants just got cheap AI weapons.** CAMAudit sells a tenant-side audit for **$79 flat, results in under 15 minutes**, against traditional contingency firms charging **25%–40% of recovered amounts** and Big Four hourly work at **$400–$700/hour for a 40–80 hour audit ($16,000–$56,000)**. The economics of challenging a landlord's statement just collapsed by three orders of magnitude. The population of tenants who can afford to audit you went from "national chains only" to "anyone with $79 and a grievance."

**The error rate is not a rounding problem.** Industry reporting puts **30–40% of CAM reconciliations containing billing errors**, with **PredictAP Research (2026) estimating billing errors total over $15 billion annually in the US**. BOMA International and IREM have consistently identified CAM reconciliation disputes as among the top drivers of landlord-tenant conflict, with unclear statements and misclassified expenses leading the list.

**The people producing those statements are on spreadsheets.** Manual CAM reconciliation runs **4–8 hours per tenant, or 2–5 days per building**. Purpose-built automation reportedly cuts routine reconciliations to **under 30 minutes per building** — but that software is bundled into portfolio suites (Yardi Voyager, MRI, Kardin, Stratafolio) sized and priced for firms much larger than the typical private owner. Meanwhile there are **over 68,000 retail strip centers nationwide**, and **88% of unanchored retail center transactions in 2023 involved purchases by private investors** (RCA data). Small, private owners dominate this asset class.

So: the buyer's exposure is rising sharply, their tooling is a spreadsheet, and the alternative is a BPO at **$2,000–$10,000 per building per year**.

The credibility stakes are blunt. From the landlord-response literature: *"if you cannot produce backup quickly, you do not have credibility"* — and *"A landlord who cannot produce it is in a significantly weaker position regardless of whether the reconciliation is correct."* That last clause is the whole product thesis. Being right isn't enough anymore; you have to be able to *show* you're right, on demand, in 30 days.

```
Provenance:
  - Signal 1 (Demand): 30–40% of CAM reconciliations contain billing errors; billing errors total $15B+ annually in the US per PredictAP Research (2026); BOMA/IREM rank CAM disputes among top landlord-tenant conflict drivers — https://www.growthfactor.ai/resources/blog/cam-charges-explained + https://www.capveri.com/cam-reconciliation-guide — 2026-08-09
  - Signal 2 (Feasibility): Tenant-side AI audit now $79 flat / under 15 minutes vs. $16,000–$56,000 Big Four engagements and 25–40% contingency firms — proving lease-clause extraction + reconciliation math is now a solved, cheap AI problem — https://www.camaudit.io/resources/cam-audits/outsourcing-cam-audit-guide — 2026-08-09
  - Signal 3 (Economic): Outsourced CAM reconciliation costs $2,000–$10,000 per building per year; BPO rates $50–$200/hour; 20-building portfolio runs $40,000–$200,000 annually — a live, cash-settled budget line to redirect — https://www.camaudit.io/resources/cam-audits/outsourcing-cam-audit-guide — 2026-08-09
  - Supporting: Manual reconciliation takes 4–8 hours per tenant / 2–5 days per building; automation cuts to under 30 min per building — https://www.capveri.com/cam-reconciliation-guide — 2026-08-09
  - Supporting: 68,000+ US retail strip centers; 88% of unanchored center transactions to private investors (RCA, 2023) — https://matthews.com/market_insights/no-anchor-no-problem-unanchored-strip-center-report — 2026-08-09
  Category: Tech-unlock
```

## 3. The opportunity

There is an asymmetry opening up and almost nobody is selling to the losing side of it.

The CAM software market split cleanly in two. On the tenant side, a wave of cheap AI audit tools (CAMAudit and friends) now lets any tenant challenge a statement for less than the cost of a dinner. On the landlord side, the tooling is either an enterprise suite priced for institutional portfolios, or a $2K–$10K/building BPO, or Excel. The private owner with 6 strip centers and a part-time bookkeeper is on Excel.

That owner is about to start receiving well-formatted, clause-cited dispute letters generated in 15 minutes by tenants who have never audited anything in their lives. And their defense is a spreadsheet a bookkeeper built in 2019 that nobody fully understands anymore.

**The incumbents and what they do badly:**

- **Yardi Voyager / MRI** — genuinely capable, genuinely priced and scoped for institutional portfolios. Voyager is "robust but often too complex and costly for leaner teams." Implementation is a project, not a signup.
- **Kardin, Stratafolio** — closer to the right buyer, but sold as portfolio/asset-management platforms. You adopt the whole system to get the CAM module. The owner who just wants correct statements this January has to migrate their entire operation.
- **BPO firms (Springbord, offshore lease-admin shops)** — $2K–$10K per building per year, human turnaround measured in weeks, and the output is a PDF. The knowledge leaves when the engagement ends.
- **Excel** — free, and the reason 30–40% of statements have errors.

The 10× wedge is narrow and deliberate: **do not sell a property management platform.** Sell the annual true-up as a finished, defensible artifact. The owner keeps QuickBooks, keeps their leases in a Dropbox folder, keeps their existing everything. Once a year they hand over a GL export and a pile of lease PDFs, and get back tenant-ready statements plus the backup package that survives a challenge.

The unlock is that lease-clause extraction — reading a 40-page lease and correctly identifying the cap structure, the base year, the exclusions, the gross-up provision, the pro-rata denominator — was the expensive human step. That step is now cheap. The tenant-side vendors proved it publicly at $79.

## 4. Target market

- **Primary customer:** US private commercial property owners and small property management firms operating **3–40 multi-tenant buildings** — unanchored strip centers, small office parks, flex/industrial. Typically 1–3 back-office staff, QuickBooks for accounting, no dedicated lease administrator. The decision-maker is the owner-principal or the controller/office manager who actually builds the reconciliation.

- **Why they buy:** Two fears, one of which is new. The old fear is the January–April scramble — 4–8 hours per tenant of spreadsheet work under a lease deadline, usually 90–180 days after fiscal year end, with 120 days the most common. The new fear is the dispute they can't answer. Most leases give the landlord roughly **30 days to produce the supporting GL extract and invoice package** once a tenant requests it. An owner who can't assemble that in 30 days loses on process regardless of whether their math was right. And they're now getting those requests from tenants who spent $79.

- **Rough TAM reasoning:** 68,000+ retail strip centers alone, overwhelmingly privately owned, before counting small office parks and flex/industrial. If even 40,000 US owner/manager entities sit in the 3–40 building band, and this is a $3,000–$12,000/year product, the addressable line is comfortably in the hundreds of millions. I don't need much of it — 700 customers at $700/mo average is $5.9M ARR.

- **Why now for them:** Their tenants got audit superpowers this cycle, and their own reconciliation process didn't change. The gap between "what a tenant can now detect" and "what a landlord can now defend" is the widest it has ever been. Every January that gap costs them a write-off.

## 5. Product sketch (MVP)

- **Lease intake that reads the actual clauses.** Drop in lease PDFs and amendments; get back a structured abstract of the terms that drive the math — pro-rata share and its denominator, expense pool inclusions/exclusions, caps (cumulative, compounding, or annual), base year, gross-up provision, admin fee treatment, audit-rights window, and statement deadline. Every extracted term links back to the page and clause it came from.
- **Amendment-aware term resolution.** Flags when an amendment supersedes an original clause, so you stop reconciling on stale terms — one of the five named recurring failure modes.
- **GL mapping and pool assignment.** Import the QuickBooks/Excel expense export, map accounts to recoverable pools once, and reuse the mapping every year. Flags likely non-recoverable costs sitting in a shared pool — capital projects, single-tenant charges, roof replacements expensed in full.
- **The capital-expense catcher.** Specifically screens for the single most common overcharge pattern: a capital item (roof, repaving, HVAC replacement) expensed in one year instead of amortized over useful life with interest, as most leases require. This is the finding tenant auditors lead with.
- **Cap, base-year, and gross-up engine.** Applies each tenant's actual cap structure and gross-up rather than a one-size formula, and shows the arithmetic step by step.
- **Tenant-ready statements with a defensibility score.** Generates the per-tenant statement plus a plain-English explanation of every line — and rates each statement on how well it would hold up under challenge, flagging the weakest lines *before* they go out.
- **The 30-day backup package, pre-built.** One click assembles the GL extract, invoice references, lease clause citations, and calculation trail for any tenant, any year. This is the thing that exists on day one instead of being scrambled together under a deadline.
- **Deadline tracking.** Per-lease statement-delivery deadlines and tenant audit-window expiries, so you know which statements are still legally contestable.

## 6. AI angle — what's load-bearing

Remove the AI and this product is a spreadsheet template — which is exactly what the market already has, and exactly why 30–40% of statements are wrong.

The load-bearing work is **reading heterogeneous, non-standardized commercial leases and extracting the specific provisions that determine the math.** Every lease is a bespoke negotiated document. No two cap structures are phrased alike. Amendments contradict originals. The industry's own framing is that lease abstraction "can take weeks" if abstracts are stale or missing — and that abstraction step is the reason a BPO costs $2,000–$10,000 per building.

Second load-bearing job: **classifying GL line items against a specific lease's exclusion list.** Whether "parking lot resurfacing — $47,000" is a recoverable repair or an amortizable capital expense depends on the language of *that* lease. That's a judgment call at the intersection of an invoice description and a contract clause, made a few thousand times per portfolio per year. It's the exact shape of work that got cheap in the last 18 months, and the tenant-side tools at $79 are the public proof.

Third: **generating the plain-English explanation of each line**, which is what actually reduces disputes. Most CAM fights start because the tenant can't understand the statement.

The AI is not a chatbot bolted to a dashboard. It is the thing that replaces the $200/hour lease-admin analyst.

## 7. Localization angle (if any)

N/A — this is a US-first play. CAM reconciliation as a discipline is a product of US commercial lease conventions (triple-net structures, pro-rata share math, base-year and gross-up clauses, tenant audit-rights windows). The UK/EU analog is service charge reconciliation under the RICS Professional Statement, which is a genuinely different rulebook with a code-of-practice overlay — a real second market, but a separate product with separate domain work, not a translation. Start US-only. Canada is the cheapest second market later; the lease conventions are close enough to reuse most of the engine.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** Per building per year, billed monthly or annually. **$149/building/month** for the core tier (up to ~15 tenants/building), **$249/building/month** for complex buildings (mixed-use, multiple expense pools, heavy amendment history). Floor of $299/month per account. This is deliberately anchored *below* the $2,000–$10,000/building/year BPO line — a $149/mo building is $1,788/year, undercutting the bottom of the BPO range while being available all year rather than as an annual engagement.

- **ACV:** A 10-building owner at the core tier is **~$17,900/year**. Realistic blended ACV across the 3–40 building target band: **$8,000–$12,000**.

- **Rough math to $1M ARR:** ~110 customers at $9,000 ACV. That's roughly 110 owners with an average of 5–6 buildings each. At a 3% conversion on targeted outbound, that's a reachable list of ~4,000 qualified owners — well within what public property records and broker directories yield.

- **Rough math to $5M ARR:** ~500 customers at $10,000 ACV, or ~350 customers as ACV expands toward $14K with portfolio growth and the dispute-response add-on. Requires the second and third distribution channels (property management associations, CRE accounting firms as resellers) to be working, not just founder-led outbound.

- **Expansion path:** ACV grows three ways. (1) Buildings — owners in this band acquire; every acquisition is an automatic seat expansion. (2) **Dispute-response as a paid event** — when a tenant challenges, the owner buys a rapid-response package assembling the full backup and a clause-cited rebuttal. This is priced per incident ($500–$1,500) and is pure margin on work the system already did. (3) **Mid-year budgeting** — using the same lease abstracts to set next year's CAM estimates accurately, which reduces the size of the true-up swing that causes disputes in the first place.

The gross-margin story is fine: inference cost per building per year is dominated by one-time lease abstraction (a few hundred pages) plus annual GL classification. At $1,788/building/year revenue, inference is low single-digit percent of revenue. This is a software business, not a services business wearing a software hat — which is the whole point of not being a BPO.

## 9. Go-to-market wedge — first 100 customers

The buyer is identifiable from public records. That's the unlock — I don't need to find these people, I can enumerate them.

- **County assessor + LoopNet cross-reference, seasonally timed.** Commercial property ownership is public record. Pull multi-tenant retail/office parcels in 15 target metros, filter to owning entities holding 3–40 properties, and resolve the LLC to a human via state corporate filings. Target the outreach for **October–December** — the window when owners are dreading the January reconciliation, not the window when they're in the middle of it. Send a specific, not generic, hook: a free "defensibility check" on one of their actual buildings. Expect a 4,000-name list, 2–4% conversion to a call, and a high close rate on calls because the pain is calendar-locked and imminent.

- **The tenant-side wedge, inverted.** Tenant AI audit tools are publishing their detection rules and dispute letter templates openly as content marketing. That's a free specification of exactly what statements get challenged and how. Build the "what would a tenant auditor find in your statement?" free tool, publish it against the same keywords, and let landlords self-select. Every owner who runs it and sees three flagged lines is a warm lead. This is the highest-intent channel because it converts fear into a demo.

- **CRE accounting firms and fractional controllers as a referral tier.** Small CRE-focused CPA firms and outsourced controllers already do this work manually for their landlord clients and hate it — it's seasonal, low-margin, and high-liability. Offer them a partner tier: they run TrueUp for their clients, keep the client relationship, and get a margin. Ten firms with 15 landlord clients each is 150 warm introductions. This mirrors the white-label motion the tenant-side vendors already validated, aimed at the other side of the table.

- **BOMA and IREM local chapters.** These organizations have publicly identified CAM disputes as a top conflict driver, which means it's already on their programming agenda. Local chapter meetings are full of exactly this buyer. Run a "your CAM statement will not survive an AI audit" session in 6 metro chapters. Low cost, high concentration of qualified buyers, and it establishes the category framing before a competitor does.

- **Displace one named BPO account, publicly.** Find one owner paying a BPO $40,000+/year across a 10-building portfolio, convert them, and publish the before/after with real numbers and their name. In a referral-driven industry, one credible switching story does more than six months of content.

## 10. Build complexity — justification

**Medium.** The reconciliation math itself is deterministic and well-documented — pro-rata shares, caps, base years, gross-ups are arithmetic with known rules, and getting them right is a matter of discipline, not research. The lease abstraction is off-the-shelf document AI against a well-defined extraction schema. GL import is CSV/QuickBooks integration, which is boring and solved.

What makes it Medium rather than Low is the **long tail of lease-clause variation** and the fact that the output has to be *defensible*, not merely plausible — a statement that's 95% right is a lawsuit. Every extracted term needs a clause citation, every calculation needs a visible trail, and the system needs to say "I'm not confident about this cap structure, a human should look" rather than guessing. Building that confidence-and-escalation layer honestly is the real work.

Realistic estimate: **4–5 months to a credible v1** for a pair — one strong engineer plus someone with genuine CRE lease-admin domain knowledge, which is non-optional. Ship narrow: retail strip centers only, single expense pool, most common cap structures. Expand clause coverage from real customer leases rather than trying to anticipate the whole space.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Producing accounting statements from a client's own data under their direction. Not legal advice, not a regulated activity. Standard "verify with your counsel/CPA" positioning on dispute-response output. |
| Ethical — no harm / dark patterns | ✅ | Genuinely dual-benefit: accurate statements help tenants as much as landlords, and 30–40% error rates mean most corrections cut *against* the landlord. Explicit product stance — flag errors in both directions, never optimize for maximum recoverable. A tool that helped landlords overcharge would be indefensible and would also lose every audit. |
| Market exists (evidence above) | ✅ | $2K–$10K/building/year BPO spend, $15B annual error estimate, mature competitor set on both sides of the table. |
| 1–5 person team can build this | ✅ | Pair build, 4–5 months. Domain expert required. |
| Launchable with <$50K / ₹40L | ✅ | Two-person build, off-the-shelf AI APIs, public-records data acquisition. Well under $50K to first revenue. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 15/20 | Real, expensive, calendar-locked, and the exposure is rising. Docked because it's **annual, not daily** — an owner feels this acutely for one quarter and forgets it for three. That's a genuine retention and urgency handicap versus a hair-on-fire daily problem, and the mid-year budgeting feature exists specifically to fight it. |
| Demand evidence | 15 | 11/15 | Strong indirect evidence: real BPO spend at $2K–$10K/building, funded competitors on both sides, industry-body confirmation of dispute frequency, hard error-rate figures. Docked because I could not source **verbatim small-landlord complaints** — the forum searches came back empty. The pain is documented by vendors and industry bodies, not by owners in their own words. That's a real gap and the first thing to close. |
| Build feasibility | 15 | 10/15 | Deterministic math, off-the-shelf extraction, boring integrations. But 4–5 months, a required domain expert, and a correctness bar where "mostly right" is worthless. Not a 6-week solo build. |
| Distribution clarity | 15 | 11/15 | Buyer is enumerable from public records — that's a genuine advantage and rare. Seasonal timing is a real lever. Docked because outbound to non-technical private owners converts slowly, and the association/referral channels take months to warm. |
| Revenue mechanics | 15 | 12/15 | Pricing anchored against a real, cash-settled alternative rather than invented. $9K blended ACV, 110 customers to $1M. Docked because $149/building/month is an assumption, not a validated price, and the annual-event nature invites churn after the true-up ships. |
| Time to first revenue | 10 | 8/10 | Can pre-sell during the build against the January deadline, and the first-cycle deadline creates natural urgency. Revenue realistically 5–8 weeks post-launch, faster if launch lands in Q4. |
| Defensibility | 10 | 6/10 | Soft moat, honestly assessed. The accumulating lease abstract library creates real switching cost by year two — re-abstracting a portfolio is genuine work nobody wants to redo. Clause-variation coverage compounds. But nothing here stops a funded competitor, and the tenant-side vendors could pivot to serve landlords in a quarter. Execution and focus moat, not a structural one. |
| **Total** | **100** | **73/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required`

The domain requirement is not decorative. Someone on the founding team needs to have personally built or audited CAM reconciliations. Without that, you will get the cap-and-gross-up interaction wrong, ship a statement that loses an audit, and the resulting reputation damage in a referral-driven industry is not recoverable. If you don't have this person, don't start.

### Key assumptions to validate (3–5)

1. **Assumption:** Small private owners (3–40 buildings) feel the tenant-audit threat as real and imminent, not theoretical. **How to test:** 30 interviews with owners in the target band. Ask directly whether they've received a formal CAM dispute or documentation request in the last 24 months, and what it cost them in time and write-offs. If fewer than a third have, the "new fear" framing is premature and the pitch collapses back to time-savings only — which is a weaker sale.

2. **Assumption:** $149/building/month clears against both the BPO alternative and the Excel status quo. **How to test:** Price-test three tiers against 20 qualified owners with a real order form, not a survey. The meaningful signal is whether they compare it to the BPO line (good — anchored high) or to "free spreadsheet" (bad — anchored at zero).

3. **Assumption:** Lease abstraction hits a defensible accuracy bar across real-world clause variation. **How to test:** Collect 50 real leases across 10 owners, abstract them, and have the domain expert grade every extracted term. Target ≥95% on the terms that drive math, with confident escalation on the rest. Measure the *miss* rate specifically, not overall accuracy — a confident wrong answer is the failure mode that kills the company.

4. **Assumption:** The annual-event problem doesn't produce brutal churn. **How to test:** Track whether pilot customers engage with mid-year budgeting features between March and October. If the product goes dormant for eight months, annual prepay becomes mandatory and the retention story needs rebuilding.

5. **Assumption:** CRE accounting firms will act as a referral tier rather than viewing this as competition for their billable work. **How to test:** Pitch 10 firms directly. Their first objection tells you everything about whether this channel is real.

### Risk flags

1. **Competitive encroachment from the tenant side.** CAMAudit and peers have the lease-extraction engine, the domain content, and the detection rules already built. Serving landlords is a positioning change, not a technology change, for them. They may be constrained by the conflict of interest — you cannot credibly sell audit-defense to landlords and audit-attack to tenants from the same brand — but that's a marketing constraint, not a technical moat. This is the single biggest risk.

2. **Seasonality of both revenue and attention.** The problem peaks January–April. Sales cycles, onboarding, and product usage all concentrate. A miss on one Q1 costs a full year, and the business has to survive the trough between cycles.

3. **Correctness liability.** If a statement generated by the product loses a tenant audit and costs an owner a five-figure write-off, that's both a legal exposure and a referral-industry reputation event. Requires conservative confidence thresholds, visible human-review checkpoints, and clear contractual limitation of liability from day one — not bolted on after the first incident.

4. **Buyer sophistication.** Private owners in this band are frequently not software buyers. They may have no procurement process, no appetite for onboarding, and a deep attachment to the spreadsheet the bookkeeper built. Adoption friction is likely higher than the ROI math suggests.

5. **Incumbent bundling.** Yardi Breeze already serves the small-portfolio market at accessible pricing. If Breeze ships a genuinely usable CAM module for small commercial portfolios, the standalone wedge narrows considerably.

## 14. Structured verdict

```
Score:                  73/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder paired with a CRE lease-administration
                        or commercial property accounting expert. The domain half
                        is mandatory, not a nice-to-have.
Time to revenue:        5–8 weeks post-launch; pre-sellable during build if the
                        build lands before Q4
Capital to launch:      $15–25K (₹12–20L) — two-person build, AI API costs,
                        public-records data acquisition
Top 3 assumptions to validate first:
  1. Tenant-audit threat is felt as imminent by owners in the 3-40 building band
     — 30 owner interviews, measure share who received a dispute or documentation
     request in last 24 months
  2. $149/building/month clears the BPO-anchored price test — real order form to
     20 qualified owners, watch which alternative they anchor against
  3. Lease abstraction hits ≥95% on math-driving terms with confident escalation
     — 50 real leases graded by the domain expert, measuring confident-miss rate
Kill criteria:
  - Abandon if fewer than 10 of 30 interviewed owners have faced a CAM dispute or
    formal documentation request in 24 months — the urgency thesis is wrong and
    this becomes a low-urgency time-saver
  - Abandon if lease abstraction confident-miss rate exceeds 5% on math-driving
    terms after two iterations — the correctness bar is unreachable and the
    liability is unacceptable
  - Abandon if a tenant-side incumbent launches a credible landlord-facing product
    before v1 ships — they have the engine and the distribution, and the window closes
  - Abandon if fewer than 3 of 20 price-tested owners will prepay annually — the
    seasonality problem is fatal without prepay
```

## 15. Next step — 1-week validation sprint

- **Day 1–2: Build the list and prove the buyer is enumerable.** Pull multi-tenant commercial parcels from public records in 3 metros. Resolve owning LLCs to humans via state corporate filings. Target: **200 named owners with verified contact details in the 3–40 building band.** If this takes longer than two days, the primary distribution channel is more expensive than assumed and the CAC math needs revisiting — that alone is a useful finding.

- **Day 3–4: Run 30 interviews against the urgency thesis.** Not "would you use this" — that question is worthless. Ask three specific things: (a) Have you received a formal CAM dispute or documentation request in the last 24 months? (b) What did the last reconciliation cycle cost you in hours and in write-offs? (c) What do you currently pay anyone — BPO, bookkeeper, CPA — for this work? Record the answers as numbers, not impressions.

- **Day 5: Price test with a real order form.** Present the $149/$249 per-building tiers to the 20 most qualified interviewees with an actual annual-prepay order form and a founding-customer discount. Not a survey — a payment page.

**Go/no-go — falsifiable:**

- **GO** if ≥10 of 30 owners report a dispute or documentation request in 24 months, **AND** ≥3 of 20 sign an annual prepay order at $149+/building/month.
- **NO-GO** if dispute incidence is under 10/30 — the "tenants got AI weapons" urgency is not yet felt by this buyer, and without it you're selling a seasonal time-saver to non-software-buyers, which is a much worse business.
- **NO-GO** if zero prepays. Owners who won't prepay in the pre-reconciliation season will not prepay in it either, and the seasonality kills you.

The single most important number out of this week is **dispute incidence**. Everything else in the thesis is downstream of whether the fear is real yet or still six months out. If it's six months out, this idea is right but early — put it down and re-run the sprint after the next January cycle.
