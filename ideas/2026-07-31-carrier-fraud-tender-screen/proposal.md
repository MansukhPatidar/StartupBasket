---
title: "TenderGate — fraud gatekeeper for small freight brokers"
slug: carrier-fraud-tender-screen
date: 2026-07-31
category: Logistics / US-SMB — Independent Freight Brokerages (1–15 employees) Tendering Full-Truckload Freight
complexity: Medium
score: 74
verdict: GO
confidence: Medium
oneLiner: "Catches the impostor carrier in the ninety seconds before you tender the load, not after the freight vanishes."
tags:
  vertical: Logistics
  model: SaaS
  geography: US
  secondary: [SMB, AI-agent, Compliance-driven, Solo-builder, Fraud-prevention]
axes:
  problem: 17
  demand: 12
  build: 11
  distribution: 12
  revenue: 11
  time: 8
  defensibility: 3
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# TenderGate

## 1. One-liner

Catches the impostor carrier in the ninety seconds before you tender the load, not after the freight vanishes.

## 2. Trend signal — why now?

Three things moved at once, and they moved in the direction of the small broker getting hurt.

**Fraud stopped being amateur.** The tactic changed. It is no longer fake companies with obvious tells — it is identity theft of real carriers. Per Innovative Small Carrier Services' 2026 write-up: *"Fraudsters in 2026 don't just invent companies; they steal them by finding a legitimate carrier with a clean record and impersonating them by creating a nearly identical email domain."* That single sentence kills the entire legacy vetting model. Every incumbent tool answers "is this MC number in good standing?" — and in an impersonation, the MC number *is* in good standing. It belongs to a real, clean, insured carrier who has no idea their identity is being used. Checking authority status is now the wrong question.

Volume backs it up. Truckstop reported a **400% increase in double-brokering complaints** between Q4 2022 and Q1 2023, and the trend has not reversed. Losses run *"from hundreds to hundreds of thousands of dollars per incident."*

**The regulator moved liability onto the broker.** Per the same 2026 analysis: *"The FMCSA in 2026 has tightened the screws on broker responsibility, and if you are found to be consistently using unauthorized carriers or failing to maintain a rigorous vetting SOP, your own brokerage authority is at risk."* Penalties for double brokering rose from **$16,000 to $50,000 per violation**, with repeat offenders facing operating-authority revocation. Separately, FMCSA's broker transparency proposal would require brokers to *"keep their records in an electronic format"* and produce them *"within 48 hours when a party to the transaction requests those records."* Translation: a defensible, timestamped, electronic vetting record stops being nice-to-have and starts being the thing that saves your authority.

**The tooling is priced for somebody else.** MyCarrierPortal's published Standard plan starts at **$515/month**; RMIS Lite starts at **$340/month**. Highway is demo-and-quote. Carrier Assure publishes tiers but not prices. A three-person brokerage doing 40 loads a month is not buying a $515/mo seat plus a TMS — so the long tail vets by eyeballing a packet and calling a number off the paperwork, which is exactly the attack surface.

**Provenance:**
```
Provenance:
  - Signal 1 (Demand): Double-brokering complaints up 400% (Truckstop, Q4'22→Q1'23); losses "hundreds to hundreds of thousands of dollars per incident"; 2026 fraud shifted to identity theft of clean carriers via lookalike email domains — https://truckstop.com/blog/freight-fraud/ + https://innovativelogisticsgroup.io/business-fundamentals/fmcsa-second-broker-transparency-rulemaking-lands-in-may-2026-with-48-hour-records-mandate-how-small-carriers-use-the-new-49-cfr-371-power-to-recover-margin/ — observed 2026-07-31
  - Signal 2 (Feasibility): Vetting is now a cross-signal judgment task (domain age vs. authority age, email/phone mismatch vs. FMCSA record, packet document forensics) rather than a database lookup — LLM + public FMCSA/SAFER data + WHOIS makes a 90-second automated judgment buildable without proprietary data — https://truckstop.com/blog/carrier-vetting-for-brokers/ — observed 2026-07-31
  - Signal 3 (Economic): Incumbent vetting priced at $340–$515+/mo (MyCarrierPortal Standard $515, RMIS Lite $340, Highway/Carrier Assure quote-gated) against 28,351 active FMCSA property brokers, most of them small — a priced-out long tail with rising per-violation penalties ($16K→$50K) — https://www.cipherandrow.com/blog/carrier-vetting-audit-trails-2026-tms-highway-descartes-cipher-row + https://ai.fmcsa.dot.gov/RegistrationStatistics — observed 2026-07-31
  Category: Underserved niche
```

## 3. The opportunity

Incumbents built **carrier onboarding** products: heavyweight, run once when you add a carrier to your network, priced for a brokerage with a compliance department. Highway, MyCarrierPortal, RMIS, Carrier Assure all sit at that layer.

The fraud does not happen at onboarding. It happens at **tender** — the moment a load is posted, a stranger calls or emails claiming to be MC-123456, and a broker with eleven loads to cover today decides in under two minutes whether to send the rate confirmation. The impersonator's whole game is that the MC number checks out clean. So the broker checks it, it comes back clean, and the freight is gone.

The gap is a **fast, per-tender, adversarial check** rather than a slow, per-carrier, status check. The question changes from *"is this carrier legitimate?"* to *"is the entity I am talking to actually the carrier they claim to be?"* Those need completely different signals: does the email domain's registration date predate the authority, or was it registered eleven days ago? Does the callback number match the FMCSA record or only the letterhead? Does the certificate of insurance name a producer whose contact details resolve independently? Is the packet a real PDF or a scan-of-a-scan with edited text layers?

None of that is proprietary data. It is public records plus document forensics plus judgment — and judgment across noisy, mismatched signals is precisely what got cheap in the last eighteen months. A focused team can ship this for $99/month while the incumbents defend $515/month onboarding suites they cannot cannibalize.

## 4. Target market

- **Primary customer:** Owner or lead broker at an independent US freight brokerage, **1–15 employees**, holding FMCSA property-broker authority, moving roughly **20–200 full-truckload loads/month**, mostly spot market off load boards. Often ex-carrier-side or ex-agent, running on a light TMS or spreadsheets.
- **Why they buy:** One successful double-brokering hit is an existential event, not a line item. Losses run *"from hundreds to hundreds of thousands of dollars per incident."* A small brokerage's margin on a load is a few hundred dollars; a single $40,000 stolen load wipes out months of profit, and the shipper's claim lands on the broker, not the thief. Add the authority risk — *"your own brokerage authority is at risk"* — and this is the one software purchase that protects the license itself.
- **Rough TAM reasoning:** **28,351 active FMCSA property brokers** plus 1,078 household-goods brokers (2023 registration data). The large brokerages (a few hundred firms) already buy Highway or RMIS. Conservatively **18,000–22,000** small/mid brokerages are unserved or under-served at current price points. At $99–$249/mo, capturing 1.5% of that long tail is roughly $500K–$700K ARR; 5% is a $2M+ business.
- **Why now for them:** Penalties jumped **$16K → $50K per violation**. Fraud shifted to identity theft that defeats the check they currently perform. And the broker transparency rulemaking pushes toward electronic, on-demand records — meaning the informal "I called the number and it seemed fine" vetting SOP no longer survives scrutiny.

## 5. Product sketch (MVP)

- **Paste-and-screen:** drop in the MC/DOT number plus the email address and phone number the counterparty actually contacted you from. Verdict in under 90 seconds: **Clear / Caution / Stop**, with the specific reasons listed.
- **Impersonation checks, not just authority checks:** compares the contact channel against the carrier's FMCSA-registered identity — email domain registration age vs. authority age, lookalike/typosquat domain detection against the real carrier's known domain, phone number match against public record, freshly-registered-domain flags.
- **Packet forensics:** upload the carrier packet, W-9 and certificate of insurance; flags edited PDF text layers, mismatched entity names across documents, COIs naming a producer that doesn't resolve, and insurance dates inconsistent with FMCSA records.
- **Independent callback path:** surfaces the phone number from the *federal record* — not the one on the letterhead — as a one-tap call, so verification never routes through the impostor's own paperwork.
- **Tender-time audit trail:** every screen is timestamped and stored with the evidence and the verdict, exportable as a PDF. This is the "rigorous vetting SOP" artifact and the electronic record for a 48-hour transparency request.
- **Watchlist:** re-screens carriers you've used before and pings you when something changes — new authority, address change, insurance lapse, or a new lookalike domain impersonating one of your regulars.
- **Team-shareable verdicts:** a link a dispatcher can send to the owner for a second opinion on a Caution before tendering.

## 6. AI angle — what's load-bearing

Remove the AI and this collapses into a database lookup — which is exactly what already exists and exactly what already fails against impersonation.

The load-bearing work is **adjudicating contradictory weak signals into one decision under time pressure.** No single fact proves fraud. A three-week-old email domain is normal for a new carrier and damning for a 2011 authority. A phone mismatch is routine when a dispatch service is involved and fatal when combined with an edited insurance certificate. A human expert weighs eight noisy signals against context and calls it; that is judgment, and judgment across unstructured evidence is the thing models became good enough at recently.

Two other jobs are genuinely model work: **document forensics** on packets and COIs — reading a scanned certificate, extracting the named insured, producer, policy dates and limits, and cross-checking them against federal records — and **explanation**, turning the verdict into reasons a broker can act on. "Stop — this email domain was registered 11 days ago and does not match the domain on file for this authority, which has been active since 2011" is a product. A red dot is not.

The MVP must present evidence and a recommendation, not a silent auto-block. The broker stays the decision-maker; the product compresses twenty minutes of scattered checking into ninety seconds of assembled evidence.

## 7. Localization angle (if any)

`N/A — this is a US-only play by construction.` The entire product is built on FMCSA operating authority, the MC/DOT numbering system, 49 CFR 371 recordkeeping duties, and US double-brokering law. None of that ports. Canada and Mexico cross-border freight is an adjacent expansion (same brokers, partially different records), but the wedge is federal US data. A generic global version would be strictly worse.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** Flat monthly by brokerage size, undercutting the $340–$515 floor decisively.
  - **Solo** — $99/mo, up to 50 screens/month, 1 user
  - **Brokerage** — $249/mo, 250 screens, 5 users, watchlist + audit export
  - **Desk** — $499/mo, unlimited screens, 15 users, API into their TMS
- **ACV:** ~$2,400 blended (most customers land on Brokerage at $249 and a meaningful minority sit at $99).
- **Rough math to $1M ARR:** 420 brokerages × $199 avg/mo × 12 ≈ **$1.0M**. That is ~2% of the addressable long tail.
- **Rough math to $5M ARR:** ~1,700 customers at a $245 blended ACV, which requires the Desk tier to carry more weight plus a per-screen overage line. Realistically $5M needs a second product — the natural one is **carrier payment verification** (confirming remittance details haven't been swapped mid-transaction, the other half of freight fraud), which raises ACV without new customers.
- **Expansion path:** seats → screen volume → API/TMS integration → payment-detail verification → an insurance-backed guarantee tier (charge more to underwrite a warranty on Clear verdicts, once loss data justifies it).
- **Margin note:** cost per screen is a handful of model calls plus public data lookups — cents. At $249/mo and even 250 screens, gross margin stays comfortably above 85%.

## 9. Go-to-market wedge — first 100 customers

- **Mine the victims publicly, then DM them.** Double-brokering complaints get posted constantly in freight forums, LinkedIn freight groups, and X. Every broker who publicly reports getting hit is a hot lead with the pain fresh and quantified. Target 30 outbound DMs/week to people who posted about a fraud loss in the prior 90 days; a 15–20% reply rate is realistic when the message references their specific incident. This alone can carry the first 50 customers.
- **Screen their last 20 loads for free, as the demo.** Ask a prospect for the MC numbers and contact emails from their last 20 tenders. Run them, send back the report. When it surfaces even one lookalike domain or insurance mismatch they missed, the sale closes itself. This is a 20-minute manual demo at first, which is fine — it doubles as customer development and builds the fraud-pattern corpus.
- **Go through the factors and the insurance brokers, not around them.** Freight factoring companies eat the loss when a fraudulent load blows up, and cargo/contingent-liability insurers price that risk. Both have lists of exactly my customer and a direct financial interest in fewer incidents. Land 2–3 factoring partners to co-market or bundle at a discount — one factor relationship can put the product in front of several hundred small brokerages.
- **Publish the fraud pattern report monthly.** Anonymized, real data from screens: new typosquat domains seen this month, which authorities are being impersonated, emerging packet-forgery tells. This is content that the trade press and forums will actually repost because it's original data nobody else has, and it compounds into the moat.
- **The broker associations and the load boards.** TIA-adjacent small-broker communities and the load-board partner marketplaces (Truckstop already lists vetting partners) are established distribution rails for exactly this category.

## 10. Build complexity — justification

**Medium.** Everything the MVP needs is off-the-shelf or public: FMCSA/SAFER carrier data, WHOIS/domain registration data, standard document parsing, and a frontier model for adjudication and document forensics. No proprietary dataset is required to start, no hardware, no ML training.

The non-trivial work is (a) assembling reliable public-data ingestion that doesn't break when a federal portal changes — and FMCSA's migration to the **Motus** registration system is an active moving target that will churn data sources through 2026 — and (b) tuning the verdict logic so false positives stay low. A Stop verdict on a legitimate carrier costs the broker a load, so the precision bar is high and needs real-world calibration, not vibes. Budget **10–14 weeks to a usable v1** for a technical founder plus a part-time domain advisor, with the first month spent doing screens manually to learn what actually separates a real carrier from a good impersonation.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Uses public federal records and customer-supplied documents. No regulated activity; the product advises, the broker decides. Defamation risk on "Stop" verdicts is managed by presenting evidence and framing as recommendation, not accusation. |
| Ethical — no harm / dark patterns | ✅ | Fraud prevention with the human retaining the decision. Main ethical duty is avoiding false accusations against legitimate small carriers — handled by evidence-first output and an appeal/correction path. |
| Market exists (evidence above) | ✅ | 28,351 active property brokers; incumbents charging $340–$515+/mo prove willingness to pay; 400% complaint growth proves the pain. |
| 1–5 person team can build this | ✅ | Public data + off-the-shelf models. 10–14 weeks to v1. |
| Launchable with <$50K / ₹40L | ✅ | Realistically $8–15K: data access, model inference, hosting, a domain advisor. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | **17**/20 | Genuinely hair-on-fire. Single incidents run to six figures, and the broker's own operating authority is now exposed. Felt on every spot tender, multiple times a day. Not a 19 only because many small brokers have not yet been hit personally and discount the risk until they are. |
| Demand evidence | 15 | **12**/15 | Strong: 400% complaint growth, four funded incumbents charging real money, rising federal penalties. Held below 13 because I could not source a hard count of *small* brokerages currently paying for vetting, and the loss statistics are vendor-published rather than independent. |
| Build feasibility | 15 | **11**/15 | Public data, no training required, standard stack. Docked for federal data sources actively churning (Motus migration) and for the precision tuning that false-positive cost demands. |
| Distribution clarity | 15 | **12**/15 | Named channels with named lists: publicly self-identified fraud victims, factoring companies, load-board marketplaces. The free-screen-your-last-20-loads demo is a concrete, testable motion. Not higher because the factor/insurer partnerships are unproven and could stall. |
| Revenue mechanics | 15 | **11**/15 | Pricing benchmarked directly against $340–$515 incumbents with room underneath; margins ~85%+. Docked because $1M is comfortable but $5M plainly requires a second product line, and small brokerages churn when freight markets contract. |
| Time to first revenue | 10 | **8**/10 | The manual-screen demo can be sold before the product is finished; paid pilots are realistic in 6–8 weeks. Not 9–10 because trust-critical purchases involve a real evaluation period. |
| Defensibility | 10 | **3**/10 | The honest weak axis. Public data plus a model is copyable, and four funded incumbents could add a tender-time tier. The only real moat is the accumulating corpus of confirmed fraud patterns and the brand among small brokers — both take 12+ months to matter. |
| **Total** | **100** | **74**/100 | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required`

Data plumbing and model adjudication are the build. But without someone who has actually vetted carriers and been lied to, the verdict logic will be wrong in ways that cost customers loads. If the founder isn't from freight, a broker co-founder or a paid advisor on the first 200 screens is non-negotiable.

### Key assumptions to validate (3–5)

1. **Assumption:** Small brokers will pay $99–$249/mo for a tender-time check when they perceive their existing free authority lookup as "already doing this." **How to test:** 40 discovery calls with 1–15 person brokerages; ask what they pay today and run a live free screen on their last 20 tenders. Track how many convert to a paid pilot after seeing their own results.
2. **Assumption:** The impersonation signals (domain age, contact mismatch, packet forensics) actually separate fraud from legitimate carriers at a usable precision. **How to test:** Assemble 100 known-good tenders and every confirmed fraud case obtainable from factors and forums; measure false-positive rate on the good set. Anything above ~5% FP is unsellable.
3. **Assumption:** Incumbents won't simply launch a cheap tender-time tier within 6 months. **How to test:** Track Highway/MyCarrierPortal/Carrier Assure pricing pages and release notes monthly; talk to their small-brokerage churned customers about why they left.
4. **Assumption:** Factoring companies will co-market rather than build it themselves. **How to test:** Pitch 5 mid-size factors directly; a partnership LOI or a flat refusal are both fast answers.

### Risk flags

1. **Defensibility (primary):** Score of 3/10 on the axis that matters most at month 12. Four funded incumbents sit adjacent and could extend downmarket. The plan must be speed to a defensible fraud-pattern corpus, not feature parity.
2. **Platform/data dependency:** Built on federal data sources that are mid-migration to Motus, with paper filings already facing 8+ business day delays. If FMCSA restricts bulk access or the migration degrades data quality, the core check weakens.
3. **False-positive liability:** Telling a broker to reject a legitimate carrier costs them a load and, repeated, costs a carrier real business. Beyond churn, there's reputational and potentially defamation exposure. Evidence-first framing and a fast correction path are product requirements, not polish.
4. **Market cyclicality:** Small brokerages fail in bulk during freight downturns — the sourced 2026 commentary explicitly anticipates another wave of carrier and broker failures. Churn may be driven by customers going out of business entirely, which no amount of product quality fixes.
5. **Regulatory timing:** The broker transparency rule is a *proposal*. If it stalls, one of the three demand pillars softens — though the fraud and penalty pillars stand on their own.

## 14. Structured verdict

```
Score:                  74/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder who can ship data plumbing + model adjudication,
                        paired with a freight-broker co-founder or paid domain advisor
Time to revenue:        6–10 weeks (paid pilots sellable off manual screens before v1 ships)
Capital to launch:      $8–15K (₹7–13 lakh)
Top 3 assumptions to validate first:
  1. Small brokers pay $99–$249/mo despite believing free authority lookups suffice —
     40 discovery calls + free screen of their last 20 tenders, measure pilot conversion
  2. Impersonation signals hit usable precision — benchmark against 100 known-good
     tenders, require <5% false-positive rate
  3. Incumbents don't ship a cheap tender-time tier within 6 months —
     monthly pricing/release tracking + interviews with their churned small customers
Kill criteria:
  - Abandon if false-positive rate stays above 5% on known-good carriers after
    two tuning cycles — an unusable Stop verdict makes the product worse than nothing
  - Abandon if <8 of 40 qualified brokerages convert to a paid pilot after seeing
    a free screen of their own recent tenders
  - Abandon if a funded incumbent launches a sub-$150/mo tender-time product
    before v1 ships
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Build the evidence set. Pull 100 real recent tenders' worth of carrier identities from 3–5 friendly brokerages (known-good outcomes), plus every confirmed double-brokering case I can collect from freight forums, factoring contacts, and public complaints. This is the benchmark that decides whether the core check works at all.
- **Day 3:** Run the screen manually — by hand, no product — across all of it. Domain age vs. authority age, contact channel vs. federal record, packet cross-checks. Record the verdict I would have given each one and compare against known outcomes. Measure false-positive rate on the good set and catch rate on the fraud set.
- **Day 4–5:** Book and run 15 calls with 1–15 person brokerages. Open with their own screened tenders, not a pitch deck. Ask directly: what do you pay for vetting today, and would you pay $249/mo for this. Ask for a $99 pre-paid pilot on the call.
- **Day 5 — go/no-go, falsifiable:** **GO** requires (a) false-positive rate **≤5%** across the 100 known-good tenders, (b) at least **60% catch rate** on the confirmed fraud set, and (c) **≥4 of 15** brokerages putting money down for a pilot. Miss any one of the three and this drops to VALIDATE and I re-cut the wedge — most likely toward selling the fraud-pattern data to factors rather than the screening tool to brokers.
