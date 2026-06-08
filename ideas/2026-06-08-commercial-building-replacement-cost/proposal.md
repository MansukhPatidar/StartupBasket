---
title: "RebuildRight — replacement-cost second opinion for agents"
slug: commercial-building-replacement-cost
date: 2026-06-08
category: InsurTech / US-SMB (independent commercial agents & brokers)
complexity: Medium
score: 74
verdict: GO
confidence: Medium
oneLiner: "Turns a building address and photos into a defensible replacement-cost figure that catches the coinsurance gap."
tags:
  vertical: FinTech
  model: SaaS
  geography: US
  secondary: [InsurTech, AI-agent, SMB, Compliance-driven, Vision-AI]
axes:
  problem: 16
  demand: 13
  build: 10
  distribution: 12
  revenue: 12
  time: 7
  defensibility: 4
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# RebuildRight

## 1. One-liner

Turns a building address and a few photos into a defensible replacement-cost figure that catches the coinsurance gap before a claim does.

## 2. Trend signal — why now?

Three things are converging right now and they all point at the same hole.

**The hole is enormous and documented.** Marshall & Swift/Boeckh research pegs ~75% of US commercial buildings as underinsured, by an average of ~40%. Construction costs are up 35–50% since 2019, so any building insured at a pre-2020 replacement value is almost certainly under water today. When a loss hits and the coinsurance clause kicks in, the owner eats the shortfall — often hundreds of thousands of dollars — and the agent who set the limit gets the E&O claim. "Failure to procure adequate coverage" is roughly **24% of all P&C agent E&O claims** per IIABA member research. That's not a soft pain. That's lawyers.

**The incumbent tools are wounded.** The two market-standard estimators — CoreLogic's Marshall & Swift SwiftEstimator and Verisk's 360Value — are enterprise-locked, desk-only (no site visit), and carry public credibility scars: a 2012 Citizens Property Insurance class action alleged 360Value *inflated* replacement values; consumer watchdog United Policyholders blamed industry valuation software for *underinsuring* Marshall-fire homeowners; the lineage traces to a Louisiana AG suit over damage-estimating software post-Katrina. Both over- and under-shooting is the worst of all worlds, and nobody trusts a black box that never looked at the building.

**The unlock is fresh.** RSMeans shipped 2026 square-foot cost models for 100+ commercial building types, localized by ZIP. Pair that with vision models that can now read construction class, story count, roof type and condition off a handful of phone photos plus public parcel/aerial data — capability that got cheap and accurate inside the last 12 months. You can now produce a transparent, photo-grounded replacement-cost estimate without a $400 appraiser truck-roll.

```
Provenance:
  - Signal 1 (demand/pain): ~75% of US commercial buildings underinsured by ~40%; coinsurance penalties cost owners six figures; "failure to procure adequate coverage" ≈ 24% of P&C agent E&O claims — https://www.imaagency.com/knowledge-center/cre-underinsurance/ , https://www.aip-benefits.org/insurance-agent-interests/insurance-agent-tips-identifying-and-reducing-eo-claim-risks — 2026-06-08
  - Signal 2 (feasibility): RSMeans 2026 square-foot cost models for 100+ commercial building types, localized; AI vision reads construction class from photos+parcel data — https://www.rsmeans.com/model-pages — 2026-06-08
  - Signal 3 (economic/incumbent weakness): Marshall & Swift (CoreLogic) and 360Value (Verisk) enterprise-locked, no-site-visit, publicly accused of both inflated and deflated estimates (Citizens class action, United Policyholders, LA AG lineage) — https://www.verisk.com/products/360value-commercial/ , https://uphelp.org/why-didnt-marshall-fire-homeowners-have-enough-insurance-watchdogs-blame-industry-software-2/ — 2026-06-08
  Category: Tech-unlock
```

## 3. The opportunity

Insurance-to-value (ITV) is the single most consequential number on a commercial property policy and it is set by the worst process imaginable: an agent eyeballing a square-footage field, plugging it into a tool the carrier gave them, and hoping. The tool never saw the building. The number is stale the day it's entered. When it's wrong low, the owner is gutted at claim time and the agent is sued. When it's wrong high, the owner overpays premium for years and eventually leaves.

The incumbents are not going to fix this. Marshall & Swift and 360Value are sold to carriers and large brokerages as part of policy-admin suites — they're priced and packaged for the enterprise, they're desk-only by design (a site visit breaks their volume model), and their brand carries litigation baggage. There is no clean, independent, affordable "let me sanity-check this number with actual photos" product for the **independent agent on Main Street** who writes the local strip mall, the auto-body shop, the dental office, the small apartment building.

RebuildRight is that second opinion. Address + photos in, a defensible RCV figure and a one-page ITV report out, with the coinsurance gap flagged in red. It's the thing the agent runs before binding and hands the client at renewal — both to win the account and to paper their own E&O file.

## 4. Target market

- **Primary customer:** Independent P&C insurance agents and small/mid commercial brokerages in the US (1–25 producers) who write commercial property — strip malls, mixed-use, small multifamily, light-industrial, owner-occupied commercial. Secondary: the SMB property owners themselves, sold through the agent.
- **Why they buy:** In their words — "I don't actually know if this building is insured to value, and if I'm wrong it's my license and my E&O." They want a number they can defend, a document for the file, and a reason to call the client at renewal that isn't "your premium went up."
- **Rough TAM reasoning:** The Big "I" represents 300,000+ independent agents/brokers nationally; tens of thousands of independent agencies write commercial property. If even 8,000 agencies pay $150–$400/mo, that's a $15M–$38M ARR ceiling on the agent side alone — comfortably inside the sub-$5M target with room above.
- **Why now for them:** Rate hardening + construction inflation has made ITV the renewal conversation. Carriers are auditing valuations and surcharging underinsured risks. E&O carriers are explicitly flagging valuation as the #1 commercial claim driver. The agent feels this every single renewal cycle this year.

## 5. Product sketch (MVP)

- Enter a commercial address; auto-pull parcel data, square footage, year built, aerial/street imagery where available.
- Upload 4–10 phone photos (exterior, roof, interior finish, mechanicals); vision model classifies construction class, stories, roof type, finish grade, condition.
- Generate a localized replacement-cost-new estimate using RSMeans 2026 cost models keyed to building type + ZIP.
- Compare against the current policy limit (agent enters it) and compute the ITV ratio and coinsurance penalty exposure at the next loss — shown in plain dollars.
- One-page branded "Replacement Cost Reality Check" PDF the agent gives the client and saves to the E&O file, with the methodology and inputs shown (the anti-black-box pitch).
- Renewal watchlist: re-run estimates annually as cost indices move, and ping the agent on accounts that have drifted underinsured.
- Bulk mode: upload a book of business (CSV of addresses + limits), get a ranked list of the most dangerously underinsured accounts to call first.

## 6. AI angle — what's load-bearing

Remove the AI and this is a manual appraisal — i.e. it doesn't exist at this price. The load-bearing work is **vision-based building characterization**: turning a handful of unstructured phone photos plus aerial imagery into the structured inputs (construction class, story count, roof system, finish grade, apparent condition) that a cost model needs. That's the step that historically required an appraiser on site or an agent guessing. The cost-model math itself is deterministic (RSMeans), but it's garbage without accurate inputs, and AI is what makes accurate inputs cheap. A second AI layer drafts the plain-English methodology narrative so the report reads as defensible, not as a spreadsheet dump.

## 7. Localization angle (if any)

N/A — this is a US-first play. The wedge is RSMeans-grade US construction cost data, US coinsurance/ITV contract norms, and the US independent-agent distribution channel. The same shape could later port to UK/AU (where underinsurance and "average clause" penalties are equally severe), but localization is a v2 expansion, not the initial wedge. Picking the US deliberately also rebalances a portfolio that's been heavy on India/SEA compliance plays.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** Tiered SaaS for agencies — $149/mo solo (up to ~25 valuations/mo), $399/mo agency (book-of-business bulk mode + renewal watchlist), usage overage at ~$8–$15 per extra valuation. Optional per-report a-la-carte at $25 for occasional users.
- **ACV:** ~$2,400–$4,800 for agency accounts; blended target ~$2,800.
- **Rough math to $1M ARR:** ~360 agency accounts at ~$2,800 ACV. That's a few hundred independent agencies — a knowable, reachable list.
- **Rough math to $5M ARR:** ~1,500–1,800 agency accounts, plus overage and a white-label tier sold to a couple of regional MGAs/wholesalers who want it embedded in their submission flow. Requires proving the number holds up against carrier audits well enough that MGAs trust it.
- **Expansion path:** valuations/month → book-of-business size → adjacent lines (business personal property, business income worksheets, equipment schedules). Each is another worksheet the agent dreads and another reason to keep paying.

## 9. Go-to-market wedge — first 100 customers

- **Scrape the Big "I" / state association agency directories** (tens of thousands of listed independent agencies). Filter to ones advertising commercial lines. Send a personalized teardown: "We ran a replacement-cost reality-check on [a real commercial building in their town] — here's the gap your client may not know about." A concrete local example, not a generic pitch.
- **Hit the E&O angle directly.** Agency principals fear E&O claims; sponsor/post in agency-owner communities (Big "I" forums, InsuranceJournal forums, r/InsuranceAgent, the "Insurance Brokers" LinkedIn groups) with a single message: "24% of agent E&O claims are inadequate-coverage. Here's a $149/mo paper trail." That stat sells itself to the buyer who signs the check.
- **Wholesaler/MGA partnerships:** 5–10 regional commercial wholesalers route hundreds of agents' submissions. Offer free reports embedded in their submission portal; convert the agents who like it to paid. One wholesaler relationship = a warm list of dozens of agencies.
- **Carrier-audit ambulance chasing (the good kind):** when a carrier sends an agency a "your book is underinsured, fix it" notice (happening constantly in this hard market), that agency needs to re-value 50 buildings this month. Bulk mode is the exact tool. Find these moments via agent communities and inbound.

## 10. Build complexity — justification

Medium. The cost-model math and report generation are off-the-shelf-data + standard web stack (weeks). The real work is the vision pipeline that reliably extracts building characteristics from messy photos and reconciles them with parcel/aerial data — that needs honest engineering and a labeled validation set to prove accuracy against known appraisals. Licensing RSMeans (or an equivalent cost dataset) is a procurement step, not a build step, but it's a real cost line. A 2-person team (one ML/vision, one full-stack with an insurance-domain advisor) ships a credible v1 in ~3–4 months.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Producing a replacement-cost *estimate/decision-support* tool is not a regulated appraisal; positioned as agent decision support, not a certified appraisal. Keep disclaimers clean. |
| Ethical — no harm / dark patterns | ✅ | Reduces underinsurance harm; transparency (shows inputs/method) is the core pitch. |
| Market exists (evidence above) | ✅ | Documented underinsurance epidemic + entrenched paid incumbents + E&O spend. |
| 1–5 person team can build this | ✅ | 2 builders + domain advisor, ~3–4 months. |
| Launchable with <$50K / ₹40L | ✅ | Main costs: cost-data license + inference. Fits under $50K to first revenue. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | Six-figure shortfalls + E&O liability = hair-on-fire at claim time. Docked because the pain is acute but *episodic* (felt at renewal/loss, not daily). |
| Demand evidence | 15 | 13/15 | Hard, multi-source: 75% underinsured stat, 24% E&O stat, two paid incumbents, public litigation. Skeptic nods. Docked: no direct verbatim agent quotes captured (forums 403'd). |
| Build feasibility | 15 | 10/15 | Vision-to-cost-input pipeline needs a validation set to be trustworthy; cost-data licensing is real. Not a 6-week solo build. |
| Distribution clarity | 15 | 12/15 | Named, scrapable agency lists + a killer E&O stat as the hook + wholesaler partnerships. Conversion math still unproven. |
| Revenue mechanics | 15 | 12/15 | Pricing benchmarks against paid incumbents; ACV math to $1M is a few hundred accounts. Overage upside. |
| Time to first revenue | 10 | 7/10 | Sellable pre-build via concierge reports, but the trustworthy automated v1 takes 3–4 months. |
| Defensibility | 10 | 4/10 | Cost data is licensable by anyone; vision is copyable. Moat is the validation dataset, agent workflow lock-in, and brand-as-the-trusted-independent. Thin early. |
| **Total** | **100** | **74/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required` — needs real ML/vision capability AND someone who understands commercial property ITV, coinsurance, and how agents actually work. The domain advisor is not optional; get the contract language and the methodology wrong and agents won't trust the number.

### Key assumptions to validate (3–5)

1. **Assumption:** A photo+parcel-driven estimate lands within ~±10% of an appraiser/RSMeans-grade figure often enough to be trusted. **How to test:** Run the pipeline against 30–50 buildings with known professional valuations; measure error distribution before selling anything.
2. **Assumption:** Independent agents will pay $149–$399/mo for a second opinion they currently get "free" from the carrier's tool. **How to test:** 30 agent interviews; pre-sell concierge-delivered reports at $25 each to 10 agencies and watch for repeat orders.
3. **Assumption:** The E&O-protection framing is the buying trigger (not just "win more accounts"). **How to test:** A/B the cold outreach: "win the account" vs "paper your E&O file" — measure reply rates.
4. **Assumption:** RSMeans (or equivalent) data is licensable at a cost that survives $149/mo pricing. **How to test:** Get a real quote from RSMeans/Gordian and an alternative before committing.

### Risk flags

1. **Accuracy/liability risk:** If the number is wrong and an agent relies on it, *you* become the E&O target. Mitigate with disclaimers, confidence bands, and "decision support, not certified appraisal" positioning — but this is the central risk.
2. **Data-license dependency:** Pricing and margin hinge on a third-party cost dataset (RSMeans/Gordian). They could raise prices or refuse the use case. Need a fallback dataset path.
3. **Incumbent response:** CoreLogic/Verisk could ship a cheaper self-serve tier or a photo feature. Head start + independent positioning is the only defense; move fast on the agent relationship.
4. **Episodic usage:** Agents may run it only at renewal season, pressuring retention. Bulk book-of-business mode + always-on renewal watchlist exist specifically to make it a year-round habit.

## 14. Structured verdict

```
Score:                  74/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder (ML/vision) + commercial-insurance domain advisor
Time to revenue:        6–10 weeks (concierge reports) → 3–4 months (automated v1)
Capital to launch:      $15K–$40K (cost-data license + inference + validation set)
Top 3 assumptions to validate first:
  1. Estimate accuracy within ~±10% vs known valuations — test on 30–50 buildings before selling
  2. Agents pay $149–$399/mo for an independent second opinion — 30 interviews + 10 pre-sold concierge accounts
  3. E&O-protection framing is the buying trigger — A/B cold outreach reply rates
Kill criteria:
  - Abandon if automated estimates can't hit ±15% accuracy on the validation set
  - Abandon if <3 of 30 interviewed agencies will pay after seeing a real report
  - Abandon if no cost-data license is available at a price that supports sub-$200/mo pricing
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Hand-build 5 replacement-cost reports for 5 real local commercial buildings (parcel data + photos + RSMeans trial), fully manual. Establish whether the *output* is convincing and whether you can get within range of any known valuations.
- **Day 3–4:** Cold-outreach 40 independent agencies from a state Big "I" directory with one of those real reports as the hook, A/B testing the "win the account" vs "protect your E&O" framing. Offer the report for $25.
- **Day 5:** Go/no-go. **Falsifiable bar:** ≥5 of 40 agencies reply with interest AND ≥2 actually pay $25 for a report on one of their accounts. Below that, the buyer doesn't value an independent second opinion enough — kill or re-target the owner directly.
