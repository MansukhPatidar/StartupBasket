---
title: "CoreClock — warranty clock for residential HVAC contractors"
slug: hvac-warranty-claim-clock
date: 2026-08-13
category: TradeTech / US-SMB — Residential HVAC Contractors (3–25 Techs) Who Recover Only 12–18% of the Warranty Money Manufacturers Already Owe Them
complexity: Low
score: 76
verdict: GO
confidence: Medium
oneLiner: "Runs the two deadlines behind every HVAC warranty claim so contractors stop eating parts the manufacturer owed them."
tags:
  vertical: TradeTech
  model: SaaS
  geography: US
  secondary: [SMB, AI-agent, Workflow automation, Solo-builder, Field-service]
axes:
  problem: 16
  demand: 12
  build: 13
  distribution: 12
  revenue: 11
  time: 8
  defensibility: 4
founderFit: [technical-heavy, sales-heavy]
featured: false
---

# CoreClock

## 1. One-liner

Runs the two deadlines behind every HVAC warranty claim so contractors stop eating parts the manufacturer owed them.

## 2. Trend signal — why now?

Three things moved in the last twelve months, and they all move the same direction: manufacturers are tightening claim windows while contractors have no system that watches them.

**The grace period died.** Daikin — which manufactures Goodman and Amana, one of the largest residential footprints in the US — now requires all claims submitted in Warranty Express **within 45 days of repair date**, and *"the previously allowed 15-day grace period for submitting warranty claims will no longer be available."* Separately, once a claim is submitted, *"all required parts must be returned and received within 30 days from the claim submission date,"* and *"parts received after the 30-day window will result in full claim denial for both labor and parts."* Two independent clocks per claim. Miss either and you lose the whole thing — not just the part, the labor too.

**Distributors are following.** HVAC Distributors published an updated warranty claim submission and parts return policy effective January 1, 2026. Return windows across the industry are now wildly inconsistent: Emerson/Copeland 30 days, Trane 90 days, Daikin 30 days from submission, and some distributors as tight as 7 days — *"returns submitted after this period potentially resulting in forfeiture of warranty or core credit."*

**Nobody is capturing the money.** The recovery rate is the whole thesis: the average HVAC service company recovers only **12–18% of eligible warranty claims**, with **82–88% lost** to missing documentation, expired filing windows, parts discarded before claims are initiated, and a general assumption that warranty claims aren't worth the hassle. At a shop running 4,000–6,000 warrantable parts per year with a 3–5% in-warranty failure rate, that's **$24,000–$65,000 annually** in warranty value evaporating.

And upstream of all of it: an estimated **20–30% of residential HVAC installations are never registered at all**, which silently drops coverage from 10 years to 5 — *"a difference worth $1,000–$4,000 in potential repair coverage"* — and the contractor is the one who eats the callback three years later.

The incumbent software knows this exists and doesn't solve it. ServiceTitan exposes manufacturer warranty fields on equipment records but is priced at $300–$500 per technician per month. Housecall Pro — where the small contractors actually live at $59/month — keeps warranty documentation *"in job history and customer profiles, which works well for smaller residential operations that don't need structured claims workflows."* That's the vendor's own positioning, and it's the gap: they store the warranty *fact*. Nobody runs the warranty *clock*.

```
Provenance:
  - Signal 1 (Demand): Average HVAC service company recovers only 12–18% of eligible warranty claims; 82–88% lost to missing docs, expired filing windows, and discarded parts; $24K–$65K/yr lost at a 4,000–6,000 part/yr shop — https://oxmaint.com/industries/hvac/hvac-parts-return-warranty-claim-processing — 2026-08-13
  - Signal 2 (Feasibility/Regulatory): Daikin eliminated the 15-day claim grace period (45 days hard from repair date) and enforces 30-day parts return from claim submission, with full denial of BOTH labor and parts on miss; HVAC Distributors issued an updated parts return policy effective 2026-01-01 — https://hvacdist.com/updated-warranty-claim-submission-and-parts-return-policy-effective-january-1-2026/ — 2026-01-01
  - Signal 3 (Economic): 125,000 US HVAC contractor firms, 73% under 20 employees, 70% independents under 10; $35B US HVAC services market growing 4.5%; HVAC software priced $30–$300/user/mo with ServiceTitan at $300–$500/tech/mo — https://www.withorbital.com/data/hvac-industry-statistics/ — 2026
  - Signal 4 (Supporting): 20–30% of residential HVAC installs never registered, dropping coverage 10yr→5yr, worth $1,000–$4,000 per system — https://nwhvac.net/think-youre-covered-why-your-hvac-warranty-might-not-be-active/ — 2026
  - Signal 5 (Supporting): Incomplete packages are the leading cause of first-submission rejections; denials trace to no proof of scheduled maintenance, no fault event log, no documentation linking defect to covered terms — https://oxmaint.com/industries/hvac/hvac-warranty-claim-workflow-for-facility-teams — 2026
  Category: Workflow automation
```

## 3. The opportunity

Manufacturers owe residential HVAC contractors money and have built a claims process specifically optimized so that busy contractors don't collect it. This is not an accident. Every tightened window, every parts-return requirement, every portal that needs its own login is a shrinkage mechanism, and it works: 82–88% of eligible claims never get paid.

The incumbent to name is **ServiceTitan**, and what it does badly is not the feature — it's the price and the posture. ServiceTitan has warranty fields. It costs $300–$500 per technician per month and targets contractors with 15+ techs. The 73% of the industry under 20 employees, and the 70% under 10, cannot buy it. They're on Housecall Pro at $59/month or Jobber at $22/month, and those platforms explicitly do not offer structured claims workflows.

But price is only half of it. Even ServiceTitan treats warranty as a *data field*, not a *deadline*. Storing "this compressor is under warranty until 2031" is trivially easy and commercially useless. The thing that actually loses the money is that on March 3rd a tech pulled a failed Copeland compressor, and the claim must be filed by April 17th, and once filed the core must be physically received by the distributor within 30 days, and the part is currently sitting in the bed of a truck, and in six weeks it will be thrown in a scrap bin and $900 of parts-plus-labor credit will quietly cease to exist. No FSM platform runs that. It's a race with two stopwatches and the contractor isn't holding either one.

The 10× is straightforward: a system that knows every manufacturer's two windows, watches every warrantable part from the moment a tech photographs a nameplate, and refuses to let a claim die silently. Recovery goes from 12–18% to something north of 60% not because of clever AI reasoning, but because someone is finally counting the days.

## 4. Target market

- **Primary customer:** Owner or office manager at a US residential HVAC contractor, 3–25 technicians, $800K–$8M revenue, installing and servicing Goodman/Amana/Daikin, Trane/American Standard, Carrier/Bryant, or Lennox. Not the 100-tech commercial mechanical firms — those have a full-time warranty administrator (those job postings exist, which is itself evidence the work is real). The buyer is the shop where the owner's spouse does the paperwork on Sunday.

- **Why they buy:** They are losing a quantified $24K–$65K a year, and unlike most SMB software pain, this one has a number attached that a skeptical contractor can verify against their own books in an afternoon. The pitch is not "be more efficient." The pitch is "you filed 40 claims last year and were eligible for 260." The documented failure modes are all mechanical, not strategic — missing documentation, expired filing windows, parts discarded before claims are initiated, and the belief that claims aren't worth the hassle. Every one of those is a workflow defect, which is the good kind of pain to sell against.

- **Rough TAM reasoning:** ~125,000 HVAC contractor firms in the US. 73% under 20 employees ≈ 91,000 firms. Strip out the one-truck operators who install too little equipment to care and call the serious addressable band 35,000–45,000 shops. At $199/month that's a theoretical $84M–$107M — far more headroom than this needs. I only require 400 of them.

- **Why now for them:** The grace period elimination and the 2026 policy tightening mean the windows they were sloppily surviving no longer forgive them. A shop that was filing at day 55 and getting paid is now getting denied, and that denial is new information arriving in their inbox this year.

## 5. Product sketch (MVP)

- **Nameplate capture** — tech photographs the data plate on any install or service call; model and serial are read and the equipment record is created with the correct manufacturer, install date, and warranty terms attached.
- **Auto-registration sweep** — every new install lands in a registration queue with its brand-specific deadline (Trane, Amana, Lennox, Goodman all enforce 60 days), and nothing leaves the queue until proof of registration is filed. This alone kills the 20–30% never-registered problem.
- **Dual-clock claim tracker** — the core of the product. Every warrantable part failure opens two visible countdowns: days-to-file and, once filed, days-until-core-must-be-received. Red at seven days remaining.
- **Core custody chain** — a failed part is scanned when pulled, scanned when it hits the shop shelf, and scanned when it goes back to the distributor. The "part got thrown away" failure mode becomes structurally impossible.
- **Claim package assembler** — pulls the job's diagnostic readings, photos, maintenance history, and install record into the format each manufacturer's portal expects, so first-submission rejection for incomplete package stops happening.
- **Recovery ledger** — a running dollar figure of claimed, pending, denied, and paid, with the denial reason on every rejection. This is the retention hook and the renewal argument in one screen.
- **Leakage report** — monthly: here is what you left on the table, itemized by unit and by reason.

## 6. AI angle — what's load-bearing

Remove the AI and this product does not survive contact with a real technician.

The binding constraint in the field is data entry. A tech standing on a roof in August is not going to type a 14-character Goodman serial into a phone form, and if the product requires that, adoption is zero and every downstream clock is empty. Vision-model extraction of model and serial from a nameplate photo — including the corroded, sun-faded, half-obscured ones — is what makes capture happen at all. That capability got good enough and cheap enough to run on every service call only recently.

The second load-bearing use is the claim package. Manufacturer denials trace to *"no clear fault event log showing when the issue first appeared"* and *"incomplete diagnosis notes (no readings or test results)."* Turning a tech's voice note and a set of gauge photos into a structured diagnostic narrative that satisfies a warranty adjuster is genuine language work, and it's the difference between a first-submission approval and a rejection that nobody has time to appeal.

The third is rule ingestion. Every manufacturer and every distributor publishes different windows, forms, and return procedures, and they change — as January 1, 2026 demonstrated. Keeping that rule set current is an ongoing document-reading job, not a one-time configuration.

What is *not* AI here, deliberately: the clocks. Those are dumb, reliable arithmetic, and they should be. Nobody wants a probabilistic deadline.

## 7. Localization angle (if any)

N/A — this is a US-first play. The wedge is specifically the US residential HVAC manufacturer-distributor-contractor structure: Warranty Express, ComfortSite, the 60-day registration convention, and the core-return credit system. Those institutions don't exist in the same shape elsewhere. Canada is a near-copy and comes free. The UK, EU, and India have entirely different HVAC channel economics and would each be a separate product, not a translation.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** $199/month flat for shops up to 10 techs, $349/month for 11–25. Flat, not per-seat — per-seat pricing punishes the contractor for equipping every tech with capture, which is exactly the behavior the product needs. Add a $99/month starter tier that does registration-only for the very small shops.

- **ACV:** ~$2,400 blended.

- **Rough math to $1M ARR:** 420 customers × $199/mo × 12 = $1.003M. Against 35,000–45,000 addressable shops that is roughly a 1% penetration. Given the product pays for itself against a documented $24K–$65K leak, a 1% share is not the hard part — distribution is.

- **Rough math to $5M ARR:** ~1,700 customers at blended $2,400, or ~1,200 customers with a successful push into the 11–25 tech tier plus a percentage-of-recovered take on a contingency tier. Realistically this needs the plumbing and electrical adjacencies (same manufacturer-warranty structure, same neglect) and a distributor channel partnership. $5M is a year-four number, not a year-two number, and I'd rather the builder hear that plainly.

- **Expansion path:** Tech-count tier upgrades are natural but slow. The real expansion is (a) adding trades — plumbing water heaters and electrical panels have identical warranty-neglect economics, (b) a contingency tier where the shop pays 15% of recovered dollars instead of a subscription, which converts skeptics who won't pay upfront, and (c) selling the aggregate denial-reason data back to distributors who want to know why their contractors' claims fail.

## 9. Go-to-market wedge — first 100 customers

- **The free leak audit as the entire top of funnel.** Build a one-page tool: contractor enters annual install count and average ticket, gets an estimate of unclaimed warranty dollars benchmarked against the 12–18% recovery figure. This is a number, it is specific to them, and it is alarming. Gate the detailed breakdown behind an email. This is the ad, the lead magnet, and the sales pitch in one artifact.

- **Distributor branch counter, in person.** This is the highest-conviction channel and the reason this idea needs a sales-heavy co-founder. Every regional distributor branch — Ferguson, Watsco/Gemaire, ECMDI, HVAC Distributors — has a warranty desk that spends its day rejecting incomplete contractor claims and chasing unreturned cores. Those counter staff know exactly which twenty local shops are worst at it, and the distributor has a direct financial interest in claims arriving clean. Walk into 30 branches in one metro, get the counter manager to hand the leak-audit card to contractors at pickup. Distributors are not gatekeepers here; they're aligned.

- **Manufacturer denial ambush.** When Daikin eliminated the grace period, a cohort of contractors started getting denials they'd never seen before. Target that: paid search on "warranty claim denied," "Warranty Express 45 days," "core return deadline," plus posts in r/HVAC and HVAC-Talk answering denial questions with genuine specifics. Low volume, extremely high intent — this person is holding a rejection letter right now.

- **The trade-show list, worked properly.** AHR Expo and regional HVAC trade association chapters (ACCA state chapters, PHCC) publish member directories. Scrape 2,000 residential contractors in five states, run each one's install volume estimate through the audit tool, send a personalized one-minute video showing their specific estimated leak number. Expect 3–5% reply on a specific-dollar-figure email, and this segment closes on a phone call, not a six-month cycle.

- **Warranty administrator poaching-as-content.** Job postings for HVAC warranty administrators and warranty claims specialists are public and continuous. Every one of those postings is a shop admitting the work is a full-time job. Reach the shops that *can't* justify that hire — they're the exact buyer — by writing the content those job descriptions imply.

## 10. Build complexity — justification

**Low.** Everything material is off-the-shelf: vision extraction for nameplates, a rules table of manufacturer windows, scheduled notifications, a mobile capture flow, and a document assembler. There is no novel infrastructure and no research risk.

The honest work is unglamorous rather than hard: building and maintaining the manufacturer rule set brand by brand, and — the one real integration question — how claims reach the portals. I would not build portal automation in v1. V1 assembles a complete, correct claim package and tells a human exactly where to paste it, which sidesteps every brittle-scraping and terms-of-service problem while still capturing 90% of the value, because the value is in *never missing the window*, not in saving four minutes of typing. A pair ships this in 8–10 weeks.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Contractor is filing their own claims with their own data. No scraping required in v1. |
| Ethical — no harm / dark patterns | ✅ | Helps small businesses collect money they are already contractually owed, and helps homeowners actually get registered coverage they paid for. |
| Market exists (evidence above) | ✅ | 125K firms, quantified 82–88% leakage, incumbents pricing out the segment. |
| 1–5 person team can build this | ✅ | Two people, 8–10 weeks to v1. |
| Launchable with <$50K / ₹40L | ✅ | Sub-$15K. Inference costs are trivial at this volume. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | Quantified recurring loss of $24K–$65K/yr with a documented 82–88% failure rate. Not 17+ because it's *silent* money — an unclaimed warranty doesn't generate an angry phone call the way a payroll error does, so urgency has to be manufactured by showing them the number. That's a real sales tax on an otherwise severe problem. |
| Demand evidence | 12/15 | 12/15 | Strong: hard recovery-rate statistics, dated 2026 policy tightening, incumbent vendors explicitly positioning away from claims workflows, and public job postings for warranty administrators proving the labor is real. Held below 13 because I could not source verbatim contractor complaints — trade forums are poorly indexed and I won't invent quotes. The evidence is industry-level, not voice-level. |
| Build feasibility | 15 | 13/15 | Off-the-shelf vision and language work, dumb-arithmetic clocks, no portal automation in v1. Pair ships in 8–10 weeks. Docked for the ongoing manufacturer rule-maintenance burden. |
| Distribution clarity | 15 | 12/15 | The distributor-counter channel is specific, aligned, and walkable, and the leak-audit tool gives every channel a concrete hook. Not higher because it's fundamentally a feet-on-the-ground motion — this does not sell itself through a Product Hunt launch, and contractors are famously hard to reach digitally. |
| Revenue mechanics | 15 | 11/15 | $199/mo against a $24K–$65K leak is an easy ROI story and the customer count for $1M is modest. Docked because contractor churn is real, the $5M path leans on adjacent trades and a channel deal that don't exist yet, and flat pricing caps expansion within an account. |
| Time to first revenue | 10 | 8/10 | Contractors buy on a credit card after one demo; no procurement. First paying customer inside 6–8 weeks of launch is realistic. Not 9–10 because the audit-to-close motion needs a live conversation, which throttles early velocity. |
| Defensibility | 10 | 4/10 | Honestly weak. The rule set is the only moat and it's a diligence moat, not a structural one — ServiceTitan or Housecall Pro could ship this as a feature. The counterweight is that they've had years to and haven't, because it serves the segment they've priced away from. Workflow lock-in accrues once a shop's core custody chain runs on it, but a determined clone catches up in six months. |
| **Total** | **100** | **76/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `sales-heavy`

This needs someone who can ship a clean mobile capture flow *and* someone willing to stand at a distributor counter in a polo shirt at 6:45am. The second person is the harder hire and the more important one. A purely technical founder will build a beautiful product and sell eleven copies.

### Key assumptions to validate (3–5)

1. **Assumption:** The 12–18% recovery figure holds for the 3–25 tech residential segment specifically, not just the large commercial shops it may have been measured on. **How to test:** Get 15 contractors to pull their last 12 months of warranty claims filed versus warrantable failures logged in their FSM. If the real number is 50%+, the leak story collapses and so does the pitch.

2. **Assumption:** Contractors will pay $199/month for recovered money they currently don't see as lost. **How to test:** Run the leak-audit tool with 40 contractors and count how many ask "how do I fix this" unprompted versus shrug. Pre-sell 10 annual plans before writing the claim assembler.

3. **Assumption:** Distributor branches will actively hand out the leak-audit card. **How to test:** Walk 10 branches in one metro. If fewer than 4 counter managers agree, the flagship channel is dead and distribution drops to a 7.

4. **Assumption:** Nameplate vision extraction is accurate enough on real-world corroded and faded plates that techs don't abandon it. **How to test:** Collect 200 photographed nameplates from working techs across brands and measure model/serial extraction accuracy. Below ~92% and the capture flow needs a fallback that kills the magic.

### Risk flags

1. **Incumbent feature risk:** ServiceTitan, Housecall Pro, or Jobber ships dual-clock warranty tracking as a bundled feature. This is the most likely way the business dies. Mitigation is speed and depth in the manufacturer rule set — plus the reality that Housecall Pro has publicly positioned *away* from structured claims workflows for this segment.

2. **Channel dependency:** If the distributor-counter motion fails, the remaining channels are slower and more expensive, and the whole distribution score is built on it. Validate this in week one, not month six.

3. **Manufacturer policy churn:** The rule set is the product's spine and the manufacturers change it unilaterally — as they did on January 1, 2026. This is simultaneously the moat and the maintenance liability. Underestimate it and claims start failing on your watch, which is worse than the status quo.

4. **Silent-pain sales drag:** Nobody wakes up angry about an unfiled warranty claim. Every sale requires first convincing the buyer they have a problem. That is a real and permanent CAC tax on this business.

## 14. Structured verdict

```
Score:                  76/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder paired with a trades-sales partner
                        who is comfortable working distributor counters in person
Time to revenue:        6–8 weeks post-launch
Capital to launch:      $12–15K
Top 3 assumptions to validate first:
  1. 12–18% recovery rate holds for 3–25 tech residential shops — audit 15 contractors' last 12 months of claims vs. warrantable failures
  2. Distributor branches will hand out the leak-audit card — walk 10 branches, need 4+ yeses
  3. Contractors pay $199/mo for invisible money — pre-sell 10 annual plans before building the claim assembler
Kill criteria:
  - Abandon if 15 contractor claim audits show recovery already above 50% — the leak isn't there
  - Abandon if fewer than 4 of 10 distributor branches agree to distribute — the flagship channel is the business
  - Abandon if ServiceTitan or Housecall Pro ships dual-clock warranty tracking before v1 launches
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Build the leak-audit calculator as a single page — install count and average ticket in, estimated unclaimed warranty dollars out, benchmarked against the published 12–18% recovery rate. No product, no backend. Just the number.

- **Day 3–4:** Walk 10 distributor branches in one metro. Two questions for the warranty desk: what fraction of contractor claims do you reject on first submission, and which local shops are worst at it. Ask for permission to leave audit cards at the counter. Simultaneously, run the calculator with 15 contractors by phone and ask each one to pull their actual claim count for the last 12 months.

- **Day 5:** Go / no-go on two falsifiable numbers. **Go** requires (a) median audited recovery rate below 35% across 15 contractors — confirming the leak is real for this segment — and (b) 4 or more of 10 distributor branches agreeing to hand out cards. **No-go** if recovery is already above 50%, or if fewer than 4 branches bite. Then pre-sell: 10 annual plans at a discounted $1,790 before a line of the claim assembler gets written. Fewer than 3 closes on 15 conversations and the willingness-to-pay assumption is wrong regardless of how big the leak looks on paper.
