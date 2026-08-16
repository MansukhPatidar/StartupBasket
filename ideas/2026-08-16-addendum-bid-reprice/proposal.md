---
title: "DeltaPrice — addendum repricer for specialty subcontractors"
slug: addendum-bid-reprice
date: 2026-08-16
category: ConstructionTech / US-SMB
complexity: Medium
score: 73
verdict: GO
confidence: Medium
oneLiner: "Turns a bid-day addendum into a priced add/deduct sheet before the sub's number goes out."
tags:
  vertical: TradeTech
  model: SaaS
  geography: US
  secondary: [SMB, AI-agent, Solo-builder, Workflow-automation, Construction]
axes:
  problem: 16
  demand: 12
  build: 10
  distribution: 12
  revenue: 11
  time: 7
  defensibility: 5
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# DeltaPrice

## 1. One-liner

Turns a bid-day addendum into a priced add/deduct sheet before the sub's number goes out.

## 2. Trend signal — why now?

Three things moved at once, and they point at the same 48-hour window.

**Vision models can now read construction drawings commercially.** This stopped being a research demo in 2025–26. Rebar raised a $14M Series A for computer-vision models that "analyze construction blueprints to automatically identify, categorize, and count equipment, reducing quote generation time by 60–70%" ([Crunchbase News](https://news.crunchbase.com/real-estate-property-tech/ai-generated-hvac-quotes-rebar-seriesa/)). Togal.AI ships symbol detection at $299/mo. The capability is bought, not built.

**Money is pouring into preconstruction AI — all of it aimed upmarket.** Provision raised $7M USD seed (total $8.7M), YC- and Cercano-backed, to build "AI co-pilots for pre-construction estimates" ([BetaKit](https://betakit.com/provision-raises-7-million-usd-to-build-ai-copilots-for-pre-construction-estimates/)). Its own positioning is explicit about the customer: general contractors. Aginera sells AI addenda change-detection to MEP estimating departments. Avoca hit a $1B valuation on trades voice AI. The category is validated and funded — and the small specialty sub is not the customer any of them are chasing.

**The addendum window is where the money actually leaks.** Provision's own writeup of the final 72 hours describes the workflow as: addendum lands 4:47 PM Thursday against a Friday 2:00 PM close, someone flags it in chat, others "skim between sub calls," and the serious read happens at 1:45 PM Friday — fifteen minutes before close. It documents a $300,000 lead-lined glass omission on a hospital imaging suite where the requirement was "clarified — and confirmed — in an addendum issued four days before bid," and the GC "ate the cost." Also a $400,000 roof cover board omission on a $50M project and a $45,000 stone-depth mismatch traced to an addendum revision never communicated to the sub ([Provision](https://provision.com/blog/addendum-mid-bid-scope-change-management-estimators)).

Here's the part that makes it an opening rather than a crowded room. Bluebeam already does drawing comparison — it's in the Core tier at ~$330/yr ([Bluebeam pricing](https://www.g2.com/products/bluebeam/pricing)). Every sub with a seat already owns overlay. **They still miss the scope.** Because overlay tells you *which pixels moved*; it does not tell you that four added receptacles on a revised sheet means 380 feet of conduit, a homerun back to panel LP-2, and $4,100 you forgot to add. The detection layer is solved and commoditized. The **repricing** layer is the one nobody sells to the sub.

Provenance:
  - Signal 1 (demand): Addenda land hours before bid close; documented $300K / $400K / $45K scope misses; manual re-read at 1:45 PM for a 2:00 PM close — https://provision.com/blog/addendum-mid-bid-scope-change-management-estimators — 2026-08-16
  - Signal 2 (feasibility): Vision models reading and counting equipment on construction blueprints shipped commercially; Rebar $14M Series A, 60–70% quote-time reduction — https://news.crunchbase.com/real-estate-property-tech/ai-generated-hvac-quotes-rebar-seriesa/ — 2026-08-16
  - Signal 3 (economic): Provision $8.7M total, YC/Cercano-backed, explicitly targeting general contractors; incumbent takeoff seats run $2,000–$3,588/yr (STACK, Togal, PlanSwift) leaving small subs priced out — https://betakit.com/provision-raises-7-million-usd-to-build-ai-copilots-for-pre-construction-estimates/ — 2026-08-16
  Category: Tech-unlock

## 3. The opportunity

The preconstruction AI wave is being sold to the wrong side of the table.

Provision, Aginera, and the takeoff incumbents all sell to whoever has an *estimating department* — a GC with five estimators, or a mid-size MEP contractor with a dedicated preconstruction lead. That customer has budget for a $3,588/yr seat and a person whose job is to read documents.

The specialty sub with 8–40 field employees does not have that person. The owner or a single estimator does takeoff at night, and when the addendum drops at 4:47 PM Thursday they make a judgment call: re-read 60 pages and reprice, or trust that nothing important moved. They usually trust. That trust is where the $45K misses live, and it's why the pain is *more* acute at the small end while every funded tool points at the large end.

Against the incumbents specifically:

- **Bluebeam** shows you a visual diff. It has no idea what a receptacle costs. The estimator still does 100% of the pricing work by hand — the diff just tells them where to start looking.
- **Togal / STACK / PlanSwift** are takeoff tools built for the *first* pass on a clean set. Re-running a full takeoff on Revision 3 to find four changed devices is using a sledgehammer at 11 PM, and users already report the AI "capture[s] more or items you did not want, causing rework" and needs "manual cleanup on dense or highly annotated plans."
- **Provision / Aginera** do read addenda with AI — genuinely well — but they surface *risk and scope gaps* as prose for a human estimator to act on, and they sell into departments. Neither hands a two-person shop a priced add/deduct line ready to drop into the number.

The 10× isn't detection. It's **detection → quantity delta → priced delta**, closed end to end, in the fifteen minutes the sub actually has.

## 4. Target market

- **Primary customer:** Owner-estimator or sole estimator at a US electrical, mechanical, or plumbing subcontractor with 8–40 field employees, $2M–$15M annual revenue, bidding 6–20 competitively-bid commercial jobs a month. The person who is both quoting the job and, some weeks, still in the truck.
- **Why they buy:** Because the miss is asymmetric and they know it. Win the job with a missed addendum item and you eat it for the length of the contract — the GC has no reason to grant a change order for scope that was in the documents before bid. As one preconstruction lead put it: *"If you miss anything, they'll bill it."* The sub's margin on a commercial job is thin enough that one missed $8K item can erase the profit on a $250K contract.
- **Rough TAM reasoning:** US electrical contractors alone are 83.3K establishments, 1.02M workers, ~$336B revenue, and the industry is "highly fragmented, comprising a large number of small and medium-sized local and regional firms" ([VantaInsights](https://vantainsights.com/reports/23821-electrical-contractors-other-wiring-installation-contractors)). Add mechanical and plumbing and the establishment count roughly triples. Not every one bids commercial competitive work — call it the 15–25% that do, which is still tens of thousands of shops. I only need ~400 of them.
- **Why now for them:** Bid volume per job went up. On Southeast commercial jobs over $500K, contractors report 12–14 electrical subs pricing the same work, some from out of state. More bidders means lower hit rates, which means more bids chased per win, which means less time per bid — exactly when the documents got no simpler.

## 5. Product sketch (MVP)

- Drop in the original bid set and the addendum (or Revision 2 vs Revision 3). No project setup, no template mapping, no onboarding call.
- Sheet-level change map: which drawings actually changed, ranked by scope impact, so the estimator knows the 4 sheets that matter out of 60.
- **Quantity delta, not pixel delta** — "+4 duplex receptacles, +1 homerun to LP-2, −2 light fixtures on E-201, panel schedule LP-2 revised."
- **Priced add/deduct sheet** — each delta line carries material + labor hours against the shop's own unit costs, netted to a single number to add to or subtract from the bid.
- Specification-text diff alongside drawings, since half the killers are in Division 26 spec language, not on the sheet.
- Confidence flags on every line: high-confidence items auto-price, ambiguous ones get bumped to a short "you decide" list rather than silently guessed.
- One-page PDF/Excel export the estimator can paste into the bid form or forward to the GC as a scope clarification.
- Unit-cost library seeded from the shop's last three bids so pricing looks like *their* pricing, not a national average.

## 6. AI angle — what's load-bearing

Remove the AI and there is no product — you're back to Bluebeam overlay, which already exists and already isn't enough.

Three jobs are model work, and none of them are chatbot decoration:

1. **Symbol-level diff across drawing revisions.** Not raster comparison — recognizing that this device symbol on E-201 Rev 3 has no counterpart on Rev 2, while ignoring the thousand pixels that moved because the title block date changed and the whole sheet shifted 2mm.
2. **Translating a symbol delta into a construction quantity.** Four new receptacles is not four line items — it's devices, boxes, conduit run estimated from the plan, wire, and a circuit back to a panel. That inference is the actual expertise, and it's what a $330/yr overlay tool will never do.
3. **Reading spec and panel-schedule text for changes with cost consequence,** separating "revised per RFI 14" boilerplate from "contractor shall provide lead-lined enclosure."

The honest risk: step 2 is where accuracy has to be earned, and where I'd expect v1 to be shakiest. Hence confidence flags — the product's credibility depends on being loud about what it isn't sure of. An estimator forgives "I don't know, check this"; they never forgive a confident wrong number.

## 7. Localization angle

N/A — this is a US-first play. The wedge is specifically the American competitive-bid commercial process: formal addenda issued to all bidders during an open bid period, hard bid close times, and no relief for scope that was in the documents pre-bid. That structure exists in the UK/AU/CA with different names and could be a later expansion, but drawing conventions, symbol libraries, and spec formats (CSI MasterFormat) are US-specific enough that a generic global v1 would be worse everywhere. Win US electrical first, then add mechanical/plumbing, then consider Canada where CSI conventions largely carry over.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** $149/mo per shop (not per seat — these shops have 1–2 estimators and per-seat pricing is what makes incumbents unaffordable). Annual at $1,490. A $299/mo tier for shops bidding >20 jobs/month with multi-project tracking.
- **ACV:** ~$1,800 blended.
- **Why this price:** It sits deliberately below the $2,000–$3,588/yr that STACK, Togal, and PlanSwift charge *per user*, and it's justified against a single avoided miss. A $45K miss is 25 years of subscription. The pitch is one line: this costs less than the cheapest mistake it prevents.
- **Rough math to $1M ARR:** 560 shops × $149/mo × 12 = $1.0M. Against tens of thousands of commercial-bidding specialty subs, that's low-single-digit penetration of the addressable slice.
- **Rough math to $5M ARR:** ~2,300 shops at blended $1,800, which requires expanding past electrical into mechanical and plumbing (roughly 3× the establishment base) and adding the $299 tier. Realistic in 4–5 years; not realistic in 24 months on electrical alone.
- **Expansion path:** Per-project overage for shops bidding heavily → multi-estimator seats as customers grow → the genuinely valuable upsell is the accumulated unit-cost library, which turns into "your historical pricing vs. this bid" benchmarking. That's the thing they won't churn away from.

## 9. Go-to-market wedge — first 100 customers

- **The addenda are public. Scrape them.** State and municipal procurement portals publish bid documents *including addenda* with bidder lists attached — the NY OGS portal surfaced addendum PDFs in plain search during this research. Pull addenda from active public commercial projects, run the product on them, and send each listed electrical sub a 90-second Loom showing *their live bid's* priced add/deduct sheet before the close date. This is not a generic demo — it's their actual job, their actual money, timed to the week they feel it. 200 targeted sends, 20% reply, 15 pilots.
- **Sell at the bid-day moment, not in a nurture sequence.** Same scrape, different trigger: when a new addendum drops on a project with a known bidder list, email the subs that day with the delta already run. The product's entire value proposition is time-sensitive, so the outreach should be too.
- **NECA chapter meetings and state electrical contractor associations.** 30-odd local NECA chapters run monthly meetings full of exactly this owner-estimator. A 10-minute live demo — take a real addendum from a job in the room, price it on screen — is the whole sale. Two chapters a month, ~40 attendees each, expect 3–5 pilots per room.
- **The Mike Holt forums and trade-specific communities.** forums.mikeholt.com has active estimating threads where contractors discuss exactly this workflow (bid volume, no-bidding, estimating software choices). Not a place to advertise — a place to answer addendum questions competently for three months until the name is known. Slow but compounding, and these are 100% target customers.
- **Reseller path via estimating consultants.** Independent estimating consultants who do takeoff-for-hire for small subs are a natural channel — they feel the addendum pain per hour billed, and each one touches 10–30 shops.

## 10. Build complexity — justification

**Medium.** The drawing-vision layer is off-the-shelf now — commercial models handle symbol detection on construction PDFs, and I'd buy or fine-tune rather than train. The genuinely custom work is the middle layer: mapping a detected symbol delta to a construction quantity (conduit runs, homeruns, box counts) and pricing it against a shop's unit costs. That's a rules-plus-model hybrid with real domain knowledge baked in, and it needs an estimator on the team or on retainer from week one.

Realistic estimate: 4–5 months to a v1 a real estimator will trust, for two people, one of whom knows electrical estimating. Scope discipline matters — electrical only, commercial only, addenda only. Trying to cover all trades at launch turns this into a 12-month build and kills it.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Customer supplies their own bid documents. Public-procurement addenda used for outreach are published by government portals for exactly this purpose. |
| Ethical — no harm / dark patterns | ✅ | Reduces costly errors for small firms. Confidence flags over false certainty is an explicit design commitment. |
| Market exists (evidence above) | ✅ | Funded competitors at the enterprise end (Provision $8.7M, Rebar $14M), incumbents charging $2K–$3.6K/seat, documented six-figure misses. |
| 1–5 person team can build this | ✅ | Two people, one with estimating domain expertise. |
| Launchable with <$50K / ₹40L | ✅ | Inference costs plus a part-time estimating advisor. Well under $50K to first revenue. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | Real money, documented six-figure misses, and asymmetric downside. Docked because it's episodic — felt hard on bid days, invisible the rest of the month, which weakens urgency between bids. |
| Demand evidence | 15 | 12/15 | Strong indirect evidence: funded competitors, priced incumbents, published loss figures. Docked because I could not reach Reddit/forum threads to get first-person verbatim quotes from small subs specifically — the loss figures I have come from vendor marketing, which is motivated. |
| Build feasibility | 15 | 10/15 | Vision layer is bought; the symbol-delta→quantity→price middle layer is genuine custom work needing domain input. 4–5 months, not 6 weeks. |
| Distribution clarity | 15 | 12/15 | Public addenda scrape is a named, specific, timeable channel with real conversion logic, plus NECA chapters. Docked because reply rates are assumed, not tested. |
| Revenue mechanics | 15 | 11/15 | $149/mo is well-benchmarked below incumbents and easily justified per avoided miss. Docked because 560 shops of a fragmented, low-software-adoption buyer is a real sales grind. |
| Time to first revenue | 10 | 7/10 | 4–5 month build, but pilots can be pre-sold during it off the scraped-addendum demo. Revenue within 4–8 weeks of launch is credible. |
| Defensibility | 10 | 5/10 | Execution-and-focus moat early; the accumulated per-shop unit-cost library creates real switching cost by month 12. But a funded incumbent moving downmarket is the live threat. |
| **Total** | **100** | **73/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required`

This does not work without someone who has actually estimated electrical work. A pure software team will build a beautiful diff viewer and get the quantity inference wrong in ways that destroy trust on the first bid.

### Key assumptions to validate (3–5)

1. **Assumption:** Small subs (8–40 employees) genuinely miss addendum scope at a rate that costs them real money — not just the GCs in the published case studies. **How to test:** 25 interviews with owner-estimators at target-size shops. Ask directly: "In the last 12 months, how many jobs did you win where you found scope after award that was in a pre-bid addendum?" If the median answer is zero, the pain is a GC pain, not a sub pain, and the whole thesis relocates.
2. **Assumption:** Symbol-delta detection plus quantity inference can hit accuracy an estimator will trust on real drawing sets. **How to test:** Run 20 real addenda from public portals, have a paid estimator score every line as correct / missed / hallucinated. Target: >90% of true changes caught, near-zero confident-and-wrong lines.
3. **Assumption:** They'll pay $149/mo for something used on bid days only. **How to test:** Pre-sell 10 annual licences at a discount before the build finishes. Money, not verbal interest.
4. **Assumption:** The public-addenda outreach converts. **How to test:** Run 50 sends manually before writing any product. Measure reply rate. Below 8% and the channel math collapses.

### Risk flags

1. **Incumbent moves downmarket.** Provision or Aginera adding a cheap self-serve sub tier is the most likely way this dies. They have the reading layer already; they'd need the pricing layer, which is the defensible part — but they have funding and a head start on document ingestion.
2. **Accuracy trust is binary.** One confidently-wrong number on a bid an estimator lost, and that customer is gone and tells their chapter. This product's reputation is fragile in a way a dashboard's isn't. It's why confidence flags aren't a nice-to-have.
3. **Episodic usage → churn.** A tool touched 8 days a month is easy to cancel in a slow quarter. The unit-cost library is the retention answer, and it needs to be in v1, not v2.
4. **Evidence quality.** My best loss figures come from competitor marketing blogs with weak citation — Aginera cites "a study by the Construction Financial Management Association" with no link. I'm treating those numbers as directional only, and assumption 1 exists to replace them with primary data.

## 14. Structured verdict

```
Score:                  73/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder paired with a working electrical estimator
Time to revenue:        5-7 months (4-5 month build, pilots pre-sold during)
Capital to launch:      $15-25K (inference + part-time estimating advisor)
Top 3 assumptions to validate first:
  1. Small subs actually eat addendum misses — 25 owner-estimator interviews, ask for counts not opinions
  2. Quantity inference accuracy >90% catch, ~0% confident-wrong — 20 real addenda scored by a paid estimator
  3. Public-addenda cold outreach replies >8% — 50 manual sends before writing product code
Kill criteria:
  - Abandon if <8 of 25 interviewed shops can name a specific addendum miss in the last 12 months
  - Abandon if accuracy testing produces confidently-wrong priced lines on >5% of deltas after two iterations
  - Abandon if fewer than 4 of 10 pre-sell attempts convert to paid annual licences
  - Abandon if Provision or Aginera ships a self-serve sub tier under $200/mo before v1 launches
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Pull 20 real addenda with bidder lists off state/municipal procurement portals. Hand 5 to a paid electrical estimator and have them produce the add/deduct sheet manually, timed. This establishes the real baseline — if it takes them 25 minutes, not 4 hours, the value prop shrinks and pricing has to drop.
- **Day 3–4:** Call 25 owner-estimators at 8–40 employee electrical subs, sourced from the same bidder lists. One question that matters: how many jobs in the last 12 months had post-award scope that was sitting in a pre-bid addendum, and what did it cost. Counts and dollars, not sympathy.
- **Day 5:** Take the 5 manually-priced addenda and run them through an off-the-shelf vision model with no custom work. Score against the estimator's sheet.
- **Decide go / no-go on:** ≥8 of 25 shops name a specific miss with a dollar figure, AND the estimator baseline is ≥90 minutes per addendum, AND the naive model run catches ≥60% of true changes. Three falsifiable numbers. Miss any one and the idea either repositions or dies — a 25-minute baseline means this is a feature, not a company.
