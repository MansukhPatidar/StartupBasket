---
title: "HaulDue — accessorial collector for owner-operators"
slug: trucking-accessorial-recovery
date: 2026-06-06
category: Logistics / US Trucking SMB
complexity: Medium
score: 77
verdict: GO
confidence: Medium
oneLiner: "Reads every rate confirmation and recovers the detention, TONU and layover pay truckers forget to bill."
tags:
  vertical: Logistics
  model: SaaS
  geography: US
  secondary: [SMB, AI-agent, Workflow-automation, Revenue-recovery, Mobile-first]
axes:
  problem: 16
  demand: 13
  build: 11
  distribution: 12
  revenue: 11
  time: 8
  defensibility: 6
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# HaulDue — accessorial collector for owner-operators and small carriers

## 1. One-liner

Reads every rate confirmation and recovers the detention, TONU and layover pay truckers forget to bill.

## 2. Trend signal — why now?

Three things are true at once in mid-2026, and they point at the same hole in a trucker's wallet.

**Truckers are leaving real money on the table, and they know it.** The number that keeps showing up across trucking media and forums: the average owner-operator leaves **$2,000–$6,000 a year** in unclaimed detention alone — before you even count TONU, layover, and lumper reimbursements. "Nearly 95% of fleets now charge detention fees, but fewer than 50% report collecting on those claims." The recurring root cause cited everywhere: poor documentation and the fact that drivers "skim past these lines in the rate confirmation or assume they are automatic. They are not. They are contractual, and when they are unclear or missing, the default outcome is usually zero compensation."

**The detection problem is half-solved, the recovery problem isn't.** DockClaim launched at $49/mo doing GPS-geofence *detention* auto-invoicing for solo drivers. That validates demand — but it's a one-trick play: it watches a geofence and bills detention. It does not read the rate confirmation, it does not know each broker's TONU/layover/lumper/extra-stop terms, and it doesn't handle the accessorials that aren't time-on-a-clock. The whole *contractual entitlement* layer — "what does THIS rate-con actually owe me, and did any of those triggers fire?" — is wide open.

**The infrastructure to build it got cheap.** ELD platforms (Motive, Samsara) now expose webhooks and REST APIs for geofence arrival/departure events at no extra carrier cost, and LLMs can reliably extract idiosyncratic accessorial terms out of the unstructured PDF/email rate confirmations brokers send. Two years ago you'd have hand-built a parser per broker. Now it's a prompt.

Provenance:
  - Signal 1 (demand): Owner-operators leave $2,000–$6,000/yr in unclaimed detention; <50% of fleets that charge detention collect it; "drivers skim past these lines in the rate confirmation or assume they are automatic" — https://www.americantruckersllc.com/blog/detention-pay-trucking-2026.html , https://logitydispatch.com/blog/detention-layover-tonu-trucking-pay-guide/ — 2026-06-06
  - Signal 2 (feasibility): ELD geofence arrival/departure available via Motive & Samsara webhooks/REST at no extra carrier cost; LLMs parse unstructured rate-confirmation accessorial terms — https://developers.samsara.com/docs/rest-api-overview , https://truckercloud.com/integrations/connect-motive-eld — 2026-06-06
  - Signal 3 (economic): Direct paid incumbent DockClaim at $49/mo (detention-only) + enterprise Detention Source at $5K–$50K/yr proves money is moving; market is 922K independent owner-operators and 91.5% of carriers run ≤10 trucks — https://dockclaim.com/compare/detention-tracking-software , https://www.atob.com/blog/owner-operator-statistics — 2026-06-06
  Category: Workflow automation

## 3. The opportunity

The incumbent (DockClaim) treats this as a *sensor* problem: stand up a geofence, time the wait, bill detention. That's clever but narrow. The actual problem is a *contract-reading and follow-through* problem.

Every load comes with a rate confirmation — a PDF or email from the broker that spells out, in inconsistent language, exactly what the carrier is owed and under what conditions: free-time window before detention, detention $/hr and any cap, whether TONU applies and at what rate, layover per-day, whether lumper fees are reimbursable and with what proof, extra-stop pay, tarp pay, fuel surcharge method. A small carrier books 5–25 of these a week, each from a different broker with different terms. Nobody reads all of them line by line, cross-references them against what actually happened on the load, and assembles the claim with the *right proof for that accessorial type* before the invoice goes out. So accessorials silently evaporate.

HaulDue does the thing the human can't keep up with: it ingests every rate-con, extracts that broker's entitlement schedule, watches the load (via ELD geofence + driver photo/timestamp), and the moment a trigger fires — you sat 3h41m, the load got cancelled on arrival, you ate an overnight — it tells the driver "you're owed $X for this, here's the claim, here's the proof attached" and pushes it onto the invoice. Then it chases the broker to paid and flags the slow-pays.

10× better than the status quo (which is "the driver remembers, or doesn't") and meaningfully broader than DockClaim's detention-only geofence.

## 4. Target market

- **Primary customer:** US owner-operators and small for-hire carriers running 1–6 power units under their own authority, primarily dry van / reefer / flatbed truckload, who book loads off boards and broker relationships and do their own back-office (or have one part-time person doing it).
- **Why they buy:** In their words — "I sat 4 hours at the receiver and never billed for it." "The rate-con said detention after 2 hours but I forgot to ask for the stamped in/out times." "Broker cancelled me at the dock and I didn't know I could charge TONU." They feel the loss every few loads and they hate it.
- **Rough TAM reasoning:** ~922K independent owner-operators + ~1.15M single-truck operations; 91.5% of carriers run ≤10 trucks. Even a tiny single-digit-percent capture of the 1–6 truck for-hire segment is a five-figure MRR business; a few percent is a $5M ARR business. This is a fragmented long tail, which is exactly the wallet a bootstrapper wants.
- **Why now for them:** Freight rates have been soft, so every dollar of accessorial recovery matters more than it did in a hot market; ELD adoption is now near-universal so the geofence data exists for almost every truck; and a paid competitor has already taught the segment that "an app gets your detention paid" is a real category.

## 5. Product sketch (MVP)

- **Rate-con inbox:** forward or snap a photo of any rate confirmation; HaulDue extracts the full accessorial entitlement schedule (free time, detention $/hr + cap, TONU, layover, lumper reimbursability, extra-stop, tarp, fuel surcharge) and shows it back in plain English.
- **Trigger watch:** connect Motive/Samsara (or run the phone's background GPS); HaulDue times each stop against that load's specific free-time window and flags detention, layover, and "truck ordered not used" the moment a trigger fires.
- **Proof capture, per accessorial:** prompts the driver for exactly the proof that *this* claim needs — timestamped gate photo, stamped BOL in/out times, lumper receipt — not a generic "upload something."
- **Claim packet + invoice line:** auto-assembles a dispute-resistant claim (entitlement clause from the rate-con + the timeline + the proof) and drops it as a line on the load invoice.
- **Chase-to-paid:** tracks each accessorial claim's status, nudges on net-15/net-30 aging, and surfaces brokers who routinely deny or slow-pay.
- **"You left money on the table" recap:** weekly summary of what was caught, what was paid, and any loads where a likely accessorial was missed.

## 6. AI angle — what's load-bearing

Remove the AI and the product collapses to DockClaim. The load-bearing piece is **reading the rate confirmation**: brokers send wildly inconsistent unstructured documents, and turning "DET: 2hr free, $50/hr to $300 cap, must submit signed in/out within 24h" — buried in a paragraph of legalese, phrased differently by every broker — into a structured, enforceable entitlement schedule per load is exactly what an LLM is good at and a geofence is not. The second AI job is **matching events to entitlements**: deciding whether what happened on the load (the cancellation, the overnight, the 3h41m wait) actually trips a specific clause and which proof that clause demands. That contract-to-event reasoning is the whole product. Geofencing is commodity plumbing underneath it.

## 7. Localization angle (if any)

N/A — this is a US-first play. Accessorial structure, rate-confirmation conventions, ELD mandate, FMCSA broker data, and the detention/TONU/layover vocabulary are all US-specific. A Canada/EU port-demurrage variant exists conceptually but is a different product with different rails; don't dilute the wedge chasing it. The localization here is *vertical* (US truckload), not geographic.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** $39/mo per truck (solo owner-operator) with a small-fleet tier at $29/truck for 2–6 trucks. Benchmarked just under DockClaim's $49 detention-only price while covering all accessorials — easy "more for less" story. Optional success fee consideration deferred (keep v1 flat-rate; success-fee billing adds reconciliation overhead).
- **ACV:** ~$470/yr solo; ~$1,500–$2,000/yr for a 3–5 truck fleet.
- **Rough math to $1M ARR:** ~1,800 trucks at a blended ~$45/mo ≈ $1.0M ARR. Against a base of 900K+ owner-operators, that's <0.2% penetration.
- **Rough math to $5M ARR:** ~9,000 trucks, blended ~$46/mo. Requires the small-fleet tier to carry weight (a 5-truck shop is one logo, five seats) and a referral/factoring-partner channel doing real volume. Still <1% of the 1–6 truck segment.
- **Expansion path:** per-truck seat growth as solos add a second truck; an upsell into broker slow-pay analytics / "which brokers actually pay accessorials" benchmarking; and a back-office tier (invoice-everything, not just accessorials) that competes with TruckingOffice-style tools once trust is earned.

## 9. Go-to-market wedge — first 100 customers

- **Forums where they already complain:** TruckersReport.com has long-running threads on getting detention/layover/TONU paid; r/Truckers and r/owneroperator on Reddit; trucking YouTube/TikTok comment sections under "how to get detention paid" videos. Post a genuinely useful "rate-con accessorial cheat sheet," then a "we built the tool that reads it for you." Target the people *already asking the question*.
- **Factoring partners:** ~60% of broker invoices get factored, and factoring companies (Bobtail, Triumph, OTR Solutions) touch every invoice and already pitch owner-ops on "get paid faster." HaulDue *increases the invoice amount* they factor — aligned incentive. Co-marketing / referral deal with 2–3 mid-size factors puts the product in front of thousands of owner-ops at near-zero CAC.
- **Dispatch services:** small dispatch outfits handle paperwork for fleets of owner-ops and live or die on the carrier's net revenue. White-label or referral HaulDue so the dispatcher's drivers collect more — the dispatcher looks better, the driver pays.
- **Conversion math:** a single TruckersReport thread or a mid-tier trucking YouTuber reaches tens of thousands of exactly-right eyeballs; a free "scan your last 10 rate-cons, see what you missed" funnel that surfaces real uncaptured dollars is a strong trial hook. First 100 paying trucks is a 6–8 week sprint of forum presence + one factoring or dispatch partnership.

## 10. Build complexity — justification

Medium. Off-the-shelf: LLM for rate-con extraction and event-to-clause matching, ELD APIs (Motive/Samsara) for geofence events, standard web/mobile stack, Stripe billing. Custom work: a reliable per-accessorial proof-capture flow, the broker-terms knowledge base that improves over time, and graceful fallback to phone-GPS for drivers not on a supported ELD. A technical pair with trucking-back-office domain input ships a credible v1 in ~10–12 weeks; the long pole is making the rate-con extraction trustworthy enough that a driver bills off it without re-checking.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Helping a carrier bill contractually-owed accessorials is plainly legal. |
| Ethical — no harm / dark patterns | ✅ | Recovers money the carrier is genuinely owed per the signed rate-con; no inflation of claims. |
| Market exists (evidence above) | ✅ | Paid incumbent at $49/mo, $2–6K/yr documented loss, 900K+ buyers. |
| 1–5 person team can build this | ✅ | Technical pair + domain advisor, ~10–12 weeks to v1. |
| Launchable with <$50K / ₹40L | ✅ | API + inference + dev time; no capex, no inventory. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | Real, recurring, money-on-the-table felt every few loads — but carriers have survived without it, so it's a strong pain, not a hair-on-fire shutdown. |
| Demand evidence | 15 | 13/15 | Paid incumbent, $2–6K/yr quantified loss, forums full of it, enterprise tools charging $5K–50K. A skeptic nods. |
| Build feasibility | 15 | 11/15 | Mostly off-the-shelf, but trustworthy rate-con extraction + ELD-fallback are real engineering. ~10–12 weeks. |
| Distribution clarity | 15 | 12/15 | Named forums, named factoring/dispatch partners, free "what did you miss" hook. Conversion plausible but unproven. |
| Revenue mechanics | 15 | 11/15 | Clean pricing under the incumbent, big base — but low ACV on solos and churn risk if a driver's volume drops. |
| Time to first revenue | 10 | 8/10 | Self-serve trial-to-paid; first dollars in weeks, not months. |
| Defensibility | 10 | 6/10 | Broker-terms knowledge base + workflow lock-in compound over time, but DockClaim sits adjacent and could broaden. Execution moat, not a hard one. |
| **Total** | **100** | **77/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required` — needs solid LLM/integration engineering plus someone who genuinely understands trucking back-office and rate-confirmation language. A founder who's run a small carrier's paperwork is gold here.

### Key assumptions to validate (3–5)

1. **Assumption:** Owner-ops will trust an AI's rate-con reading enough to bill off it. **How to test:** run 50 real rate-cons through the extractor, hand them to 10 drivers, measure how many would invoice the surfaced accessorial without re-checking the PDF.
2. **Assumption:** The uncaptured-accessorial dollars per truck are large enough that $39/mo is a no-brainer. **How to test:** "scan your last 10 rate-cons + loads" audit on 25 drivers; if median surfaced-but-unbilled exceeds ~$300/mo, pricing is trivially justified.
3. **Assumption:** A factoring or dispatch partner will co-market because HaulDue grows the invoices they touch. **How to test:** pitch 5 factors/dispatchers; get 1 signed referral LOI inside 4 weeks.
4. **Assumption:** Phone-GPS fallback is good enough for drivers not on a supported ELD. **How to test:** field-test geofence accuracy on 10 phones across 50 stops vs. ELD ground truth.

### Risk flags

1. **Platform dependency:** relies on Motive/Samsara API access and on brokers honoring claims; ELD terms or pricing could shift. Mitigate with phone-GPS fallback and multi-ELD support.
2. **Incumbent expansion:** DockClaim (or a factoring company) broadens from detention into full accessorials. Speed and the broker-terms knowledge base are the only defense — get the data moat compounding fast.
3. **Trust/accuracy:** one wrong extraction that causes a driver to bill an accessorial they weren't owed (and get a chargeback or a soured broker relationship) burns trust fast. Conservative defaults + always show the source clause.
4. **Low-ACV churn:** solo owner-ops are a high-churn segment when freight dries up and they park the truck. Fleet tier and annual plans soften it.

## 14. Structured verdict

```
Score:                  77/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder (LLM + integrations) paired with a trucking back-office / dispatch domain expert
Time to revenue:        6–10 weeks
Capital to launch:      $15–30K (inference, ELD API, design, two months of build)
Top 3 assumptions to validate first:
  1. Drivers will bill off the AI's rate-con extraction — test with 10 drivers on 50 real rate-cons
  2. Median uncaptured accessorial > ~$300/truck/mo — "audit your last 10 loads" on 25 drivers
  3. One factoring/dispatch partner signs a referral LOI in 4 weeks
Kill criteria:
  - Abandon if the "audit your last 10 loads" test surfaces <$150/mo median uncaptured for a representative sample (pain too small to pay for)
  - Abandon if rate-con extraction accuracy can't clear a bar drivers will trust without re-checking (e.g. <90% on key fields) after reasonable iteration
  - Abandon if DockClaim or a major factor ships full-accessorial coverage before your v1 and you have no broker-terms data edge
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Collect 50–75 real rate confirmations (ask in TruckersReport / r/owneroperator, offer a free audit in return). Run them through a rough LLM extraction prompt for the full accessorial schedule.
- **Day 3–4:** For 25 of those drivers, cross-reference the extracted entitlements against what they actually billed on those loads and compute median uncaptured accessorial dollars per truck per month. In parallel, pitch 5 factoring/dispatch partners for a referral LOI.
- **Day 5:** Go / no-go. **Go if:** median uncaptured ≥ $300/truck/mo AND ≥1 partner LOI in hand AND extraction was clean enough on key fields (free-time, $/hr, TONU/layover applicability) that drivers say "I'd bill off that." Falsifiable: if the dollars aren't there or drivers won't trust the read, it's a no-go regardless of how nice the demo looks.
