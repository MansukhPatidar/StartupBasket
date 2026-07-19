---
title: "OverExposed — nonrenewal rebuttal file for roofing contractors"
slug: roof-nonrenewal-rebuttal-file
date: 2026-07-19
category: HomeServices / US — Residential Roofing & Exterior Contractors Selling Insurance-Rebuttal Inspections
complexity: Low
score: 76
verdict: GO
confidence: Medium
oneLiner: "Turns a roofer's ladder photos into the regulator-shaped argument that gets a drone-flagged homeowner's policy reinstated."
tags:
  vertical: HomeServices
  model: SaaS
  geography: US
  secondary: [SMB, AI-agent, Compliance-driven, Solo-builder, Insurance-adjacent]
axes:
  problem: 16
  demand: 12
  build: 13
  distribution: 12
  revenue: 11
  time: 8
  defensibility: 4
founderFit: [technical-heavy, content-heavy]
featured: false
---

# OverExposed

## 1. One-liner

Turns a roofer's ladder photos into the regulator-shaped argument that gets a drone-flagged homeowner's policy reinstated.

## 2. Trend signal — why now?

Insurers stopped sending humans. They now fly the whole book — drone and high-resolution satellite imagery run through AI condition models — and nonrenew from the output. Aerial imaging was a $3.41B market in 2024 heading to $8.24B by 2030. This is not a pilot program; it is how underwriting works now.

The models are wrong a lot, in a specific and rebuttable way. Shadows read as moss. Glare reads as damage. Tree canopy that was cut down last spring is still in the imagery. Roofs replaced two years ago get flagged from a photo taken before the replacement. Homeowners get a nonrenewal letter with a grainy overhead JPEG attached and no idea what to do with it.

Then in March 2026 the ground shifted. Colorado DOI issued Bulletin B-5.57, and it reads like a specification for the rebuttal document nobody sells yet. Direct quotes from the bulletin:

- "Visible conditions captured by aerial imagery, including those related to roofing, exterior surfaces, vegetation proximity, or other property features, **should not be relied upon as the sole basis for adverse actions.**"
- "Insurers should **distinguish cosmetic conditions from conditions that reflect material degradation**, functional damage, or deterioration that meaningfully affects a property's structural integrity... Adverse actions should be supported by evidence of degradation or damage rather than **appearance alone.**"
- "For general underwriting and rating purposes, aerial imagery should be **no more than twelve (12) months old**."
- "Aerial imagery that requires **significant enlargement, extrapolation, or inference** may warrant additional verification including physical inspection."
- "Policyholders and applicants impacted by an adverse action supported by aerial imagery **should be given a meaningful opportunity to dispute the accuracy** of aerial imagery, correct errors, provide updated information, and submit proof of completed repairs or remediation. Insurers should review information submitted by policyholders and applicants disputing the accuracy of aerial imagery and consider whether further evaluation or reconsideration is warranted."

That last paragraph creates a duty to *read* what you send. Practitioner analysis puts it plainly: where a policyholder "presents contrary evidence (for example, **a contractor's report**), insurance regulators increasingly expect insurers to follow up, often with a physical inspection, before maintaining an adverse position."

California is next: AB 1559 requires carriers to hand over the aerial image with the nonrenewal notice, bans reliance on imagery older than 180 days, and grants an explicit right to dispute accuracy and verify remediation before termination takes effect — operative 1 July 2027. Texas is proposing a 12-month imagery cap. New York has a bill setting standards. The dispute right is going national.

Meanwhile the counter-evidence market already exists in the crudest possible form. The SF Standard documented a licensed drone photographer flying rebuttal photos for homeowners, and a homeowner named Edward Barbera whose policy was **reinstated** after she shot his roof. The mechanism works. It's just being executed by individuals with a drone and no template, one house at a time.

Provenance:
  - Signal 1 (Demand): Homeowners nonrenewed on grainy aerial images; contractors and drone operators already selling ad-hoc counter-evidence; one documented reinstatement — https://sfstandard.com/2025/01/17/grainy-photos-of-their-roofs-cost-them-their-insurance/ — 17 Jan 2025, re-verified Jul 2026
  - Signal 2 (Feasibility/Regulatory): Colorado DOI Bulletin B-5.57 defines exactly what a valid rebuttal must argue — cosmetic vs. material, 12-month imagery age, enlargement/inference, proof of remediation — and obliges insurers to review policyholder-submitted disputes — https://doi.colorado.gov/sites/doi/files/documents/New%20Bulletin%205.57%20Aerial%20Imagery.pdf — issued 16 Mar 2026
  - Signal 3 (Economic): 108,598 US roofing contractors in a $92.5B industry, 55% already using drones for inspections; aerial imaging market $3.41B (2024) → $8.24B (2030); insurance-driven inspection demand named a top-4 roofing lead channel for 2026 — https://www.ibisworld.com/united-states/number-of-businesses/roofing-contractors/198/ + https://dronexl.co/2026/03/11/insurance-drone-roof-inspections/ — 2026
  Category: Regulatory arbitrage (with a tech-unlock assist)

## 3. The opportunity

Every incumbent in roofing software sells **measurement**. EagleView sells you square footage from the sky ($15–38 a report, $87 for Bid Perfect). Roofr sells measurement at $12–13. iRoofing sells unlimited DIY measurements at $107–149/mo. Satellite report vendors sell area and pitch.

Nobody sells the **argument**.

That's the gap, and it's a strange one, because the argument is the hard part and the measurement is the commodity. A roofer already knows how to get on a ladder and photograph a roof. What they cannot do is write eight pages that an underwriter's reconsideration desk will actually act on — because that document has to do things a roofer has never been trained to do:

- Rebut the carrier's specific finding, not describe the roof generally. "Roof in good condition" loses. "The flagged discoloration at the northeast slope is biological staining on the surface granule layer, not substrate deterioration; core sample and underside deck photos attached" wins.
- Speak the regulator's exact vocabulary. Cosmetic vs. material degradation. Appearance alone. Enlargement and inference. Remediation proof. These are the words in the bulletin, and they are the words that make a reconsideration file hard to ignore.
- Attack the imagery itself. Capture date older than 12 months. Resolution insufficient for the inference drawn. Wrong parcel. Conditions already remediated after the capture date.
- Arrive as one clean PDF with a claim/policy number, an index, and dated geotagged photographs — not fourteen loose iPhone images in an email thread.

The incumbent isn't a software company. It's **the blank page**. Right now the roofer either says "I don't do that" and walks away from the job, or writes a two-paragraph letter on a Word template from 2011 that the carrier ignores. Both outcomes end the same way: the homeowner goes to the state FAIR plan and pays double, and the roofer made $0.

AI is genuinely load-bearing here because the work is *reading an adverse image and constructing a specific counter-argument against a specific finding under a specific state's rules* — vision plus legal-shaped drafting. That was not buildable at $12 a report two years ago.

## 4. Target market

- **Primary customer:** Owner-operator and small residential roofing/exterior contractors in the US, 2–25 employees, $500K–$8M revenue, already doing insurance-restoration work. Concentrated first in Colorado (live dispute right), then Texas, Florida, California, Oklahoma, Louisiana, Minnesota, and the Front Range hail corridor. Secondary buyer: home inspectors and licensed drone operators who have stumbled into this niche by accident.
- **Why they buy:** In their words. Erast Dasari of Bay Area Home Inspections on the nonrenewal wave: *"This is good for us in terms of, you know, the workload, but it's very dishonest to the homeowners and insurance clients."* He's saying the quiet part — this is a demand shock landing on contractors. Anne Kohler, the drone photographer flying rebuttals: *"I'm not charging a lot of money to do this, because I feel sorry for the people going through it."* She's underpricing because she has no product, just a drone. And Kira Harvath, a Safeco policyholder, articulating the exact problem the document has to solve: *"How am I supposed to provide you with proof that I've removed mold or algae when there was no mold or algae that ever existed?"* Proving a negative against an algorithm is a document-construction problem.
- **Rough TAM reasoning:** 108,598 US roofing contractors (IBISWorld, 2026), growing 2.6% YoY, in a $92.5B industry. Perhaps 25–30% touch insurance-restoration work seriously — call it 27,000–32,000 realistic accounts. Capturing 1,500 of them at ~$180/mo blended is ~$3.2M ARR. Well inside the target band without needing to win the category.
- **Why now for them:** Nonrenewal-driven inspection requests are arriving *unsolicited* at their office. Homeowners reporting roof-age nonrenewals have risen noticeably over two years, and what started in Florida is now national. The contractor is being handed a lead they don't know how to monetize, and a state bulletin just told the carrier it has to read the response.

## 5. Product sketch (MVP)

- **Drop the denial.** Contractor uploads the carrier's nonrenewal letter and the aerial image the carrier attached. The product reads both and extracts the specific finding being asserted, the carrier, the policy number, and the deadline.
- **Guided photo checklist, generated per finding.** Not a generic inspection form — if the carrier alleged granule loss on the south slope, the app tells the contractor exactly which shots to take from the ladder to refute *that*: close-up of the cited area, underside deck, adjacent control slope, wide shot establishing location, plus a dated shot of any completed repair.
- **Imagery challenge.** Flags the attackable properties of the carrier's own image — capture date beyond the state's allowed age, resolution requiring enlargement or inference, apparent wrong-parcel or wrong-structure, conditions post-dating the capture.
- **The rebuttal file.** One indexed PDF: cover letter addressed to the reconsideration desk with policy/claim number, finding-by-finding rebuttal, cosmetic-vs-material determination stated in the regulator's language, dated geotagged photo exhibits, contractor license and credentials block, remediation proof section.
- **State rule pack.** The argument reshapes itself by state — Colorado's 12-month/sole-basis language, California's AB 1559 180-day rule and pre-termination dispute right, Texas's proposed cap. Ships with CO, TX, FL, CA at launch.
- **Deadline and follow-up tracking.** Nonrenewals run on a clock. Tracks the termination date, logs what was sent and when, generates the escalation letter and the DOI complaint draft if the carrier doesn't respond.
- **Homeowner-facing one-pager.** A plain-English summary the contractor hands the homeowner — doubles as the contractor's marketing collateral.
- **White-label output.** Contractor's logo, license number, and letterhead. It's their report, not ours.

## 6. AI angle — what's load-bearing

Remove the AI and this is a Word template — which is exactly the thing that already exists and already fails. Three places AI does real work:

1. **Reading the adverse artifact.** Nonrenewal letters are unstructured, carrier-specific, and vague on purpose. Extracting "what precisely is being alleged about this roof, and where on the roof" from a letter plus a JPEG is a vision-plus-language task and it's the input to everything downstream.
2. **Constructing the counter-argument.** Mapping an alleged defect to the correct rebuttal theory — cosmetic vs. material, staleness, insufficient resolution, already-remediated, wrong parcel — and writing it in the regulator's own vocabulary with the contractor's photo evidence cited as exhibits. This is the product. A roofer with fifteen years on ladders cannot write this, and a lawyer who can write it costs more than the policy is worth.
3. **Directing evidence collection before it's too late.** Telling the contractor *while they are still on the roof* which five photos will win and which fifteen are noise. Generic checklists can't do this because the checklist depends on what the carrier alleged.

The honest limit: AI is not adjudicating roof condition. The licensed contractor makes the professional determination and signs it. The product structures, argues, and packages. That division matters legally and it's also why this is buildable — no liability for a condition opinion the software didn't make.

## 7. Localization angle (if any)

N/A as a language play — this is US-only and English-only. But it is intensely **state-localized**, and that's the wedge rather than a footnote. The winning argument in Colorado cites B-5.57's sole-basis and cosmetic-vs-material language. In California from July 2027 it cites AB 1559's 180-day imagery cap and pre-termination dispute right. Texas has a different proposed cap and no bulletin. Florida has its own roof-age statutory environment. A generic national template loses on all four; a state-shaped file wins. Rule-pack depth per state is the closest thing this product has to a moat, and it compounds — every state that adopts a dispute right is a new market that opens on a known date.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** Three tiers. **Solo** $99/mo, 5 rebuttal files. **Shop** $249/mo, 20 files, 3 seats, white-label. **Restoration** $499/mo, unlimited files, unlimited seats, DOI complaint escalation module. Overage $29/file. Annual billing at ~15% off, matching category norm.
- **ACV:** ~$2,150 blended, assuming the mix skews to Shop.
- **Rough math to $1M ARR:** 465 shops × $249/mo × 12 ≈ $1.39M. Or roughly 800 accounts at blended $110/mo. Against ~30,000 insurance-restoration-active roofers, that's ~2.7% penetration.
- **Rough math to $5M ARR:** ~1,900 accounts at blended $220/mo, requiring the Restoration tier to become the center of gravity and 8–12 states of rule-pack coverage. Plausible if CA AB 1559 lands on schedule and two more states adopt dispute rights — each adoption is a distribution event.
- **Expansion path:** Seats, then file volume, then adjacent adverse actions. The same machine rebuts premium surcharges, coverage restrictions (ACV downgrade on an older roof), and claim denials — the bulletin's definition of "adverse action" explicitly covers "underwriting or eligibility determinations, tier placement, rating impacts, coverage limitations or restrictions, nonrenewals, cancellations, and claim denials or reductions." Nonrenewal is the beachhead; the category is bigger. Later: sell the same file to public adjusters and to the drone-operator niche.
- **Margin note:** Per-file cost is a few vision calls and a long generation — cents to low dollars. Gross margin sits comfortably north of 85% at every tier.

## 9. Go-to-market wedge — first 100 customers

1. **Colorado first, because the bulletin is live and dated.** Colorado licenses roofing contractors at the local level and the state roofing association (CRA) plus regional NRCA affiliates publish member directories. Pull 1,200 Front Range roofing contractors. Send each one a real artifact, not a pitch: a completed sample rebuttal file for a fictional Aurora address, plus a one-page explainer of what B-5.57 changed on 16 March 2026 and what it entitles their customers to. Most of them do not know this bulletin exists. Expect 8–12% reply on a cold list carrying genuinely new regulatory information they can bill against, and 15–20% of repliers to trial.
2. **Ambush the homeowner-side search demand and route it to contractors.** "Insurance dropped me because of roof photo," "non-renewal aerial image appeal," "how to dispute roof non-renewal" — this is high-intent, low-competition, actively-growing search traffic owned right now by roofing-company blog spam. Build the genuinely best free resource: a state-by-state guide to disputing an aerial-imagery nonrenewal, with a live checker for imagery-age rules. Homeowners arrive, and the CTA is "find a contractor near you who produces these files." Contractors pay to be that contractor. Content is defensible here because it requires actually reading state bulletins.
3. **Go where the pain is already being posted.** r/Insurance, r/homeowners, and r/Roofing carry a steady stream of nonrenewal-by-drone posts. Answer them substantively — cite the actual bulletin, explain cosmetic vs. material, explain the 12-month rule. Every good answer is a contractor lead and a homeowner lead simultaneously. Same play on the roofing Facebook groups where storm-restoration contractors trade tactics.
4. **The drone-operator side door.** Anne Kohler is not an anomaly — there is a small population of licensed drone operators and home inspectors who have organically discovered rebuttal photography and are underpricing it because they have no product. They are the easiest close in the entire market: they already do the job, they already know it works, and the product triples what they can charge. Find them through Part 107 operator directories and the "drone roof inspection" local-service listings.
5. **Public adjusters as a referral channel.** PAs decline nonrenewal work constantly because there's no claim to take a percentage of. Give them a referral path to contractors on the platform. They're already a named lead channel in roofing GTM.

## 10. Build complexity — justification

**Low.** Off-the-shelf across the board: a vision model reads the letter and image, a language model does the drafting, standard PDF generation, mobile-web photo capture with EXIF/geotag retention, Stripe. The only genuinely custom asset is the state rule pack and the rebuttal-theory library — and that's research and prompt work, not engineering. A technical solo founder ships a credible v1 in 7–9 weeks; a pair gets there in 5–6 with better state coverage at launch. No integrations required with carrier systems, which is what keeps this Low — the output is a PDF a human emails.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Software that helps a licensed contractor document and argue their own professional findings. Not insurance advice, not public adjusting, not law. Guardrails needed — see risk flags. |
| Ethical — no harm / dark patterns | ✅ | Genuinely corrective. Homeowners are losing coverage to demonstrably wrong algorithmic inferences with no practical way to respond. The contractor's professional judgment governs; the tool never asserts a condition finding of its own. |
| Market exists (evidence above) | ✅ | 108,598 contractors, documented reinstatements, a state bulletin creating the duty, drone operators already selling a worse version by hand. |
| 1–5 person team can build this | ✅ | Solo-buildable in under 10 weeks. |
| Launchable with <$50K / ₹40L | ✅ | Realistically $8–15K: inference, a designer for the PDF output, and a paralegal or insurance-regulatory consultant for a few days of rule-pack review. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | Homeowner side is hair-on-fire — losing coverage means FAIR-plan pricing or an uninsurable mortgage. But the *buyer* is the contractor, one step removed, and for them it's a large new revenue opportunity rather than an existential threat. That gap costs it the top band. |
| Demand evidence | 15 | 12/15 | Strong and multi-sourced: documented nonrenewals and a documented reinstatement, a state bulletin, drone operators already charging for a hand-built version, insurance-driven inspection named a top-4 roofing lead channel. What's missing is direct evidence of contractors paying *software* for this specifically — the behavior exists, the SaaS spend doesn't yet. |
| Build feasibility | 15 | 13/15 | Off-the-shelf vision + generation + PDF. No carrier integrations. Custom work is research, not infrastructure. |
| Distribution clarity | 15 | 12/15 | Named lists (CRA/NRCA directories, Part 107 operators), a genuinely underserved high-intent search corridor, and active forum threads. Docked because it's a two-sided-ish motion — homeowner demand and contractor supply have to meet — and cold outreach to roofers is notoriously noisy. |
| Revenue mechanics | 15 | 11/15 | Pricing benchmarks cleanly against iRoofing at $107–149/mo and Roofr's $149/mo add-on, so the wallet is proven at this level. Risk is file volume per contractor — if a shop only sees 2 nonrenewals a month, the $249 tier is a stretch and the product drifts toward per-file pricing with weaker retention. |
| Time to first revenue | 10 | 8/10 | Colorado contractors can be sold pre-build off a sample file. Realistically 6–10 weeks to first paying account. Not instant — roofers buy slowly and seasonally. |
| Defensibility | 10 | 4/10 | Honest answer: thin. The rule pack and rebuttal-theory library compound, and being the name in the niche matters, but a competent competitor rebuilds the core in a quarter. Month-3 moat is essentially zero; month-12 moat is brand plus state coverage plus a corpus of what actually got policies reinstated. That last asset is the only real one. |
| **Total** | **100** | **76/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `content-heavy`

The build is light but the research is not — someone has to read state insurance bulletins carefully and keep reading them. And distribution is content-led: the homeowner-facing guide corridor is the highest-leverage channel and it only works if the content is genuinely authoritative. A founder who won't read a DOI bulletin end-to-end should not build this.

### Key assumptions to validate (3–5)

1. **Assumption:** Roofing contractors will pay a recurring subscription for rebuttal files rather than treating it as an occasional favor to a customer. **How to test:** 40 phone calls to Colorado Front Range roofers. Ask what they currently do when a homeowner brings in a nonrenewal letter, and whether they'd pay $249/mo for a tool that produces the response. Watch for the tell — do they already have a Word template? A template means the workflow exists and is bad, which is the best possible answer.
2. **Assumption:** Carrier reconsideration desks actually act on a well-constructed contractor rebuttal at a meaningful rate. **How to test:** Find 10 contractors or drone operators who have submitted rebuttals and get their outcome rate. Also file public-records requests with the Colorado DOI for complaint and reconsideration volume citing aerial imagery since March 2026. If the reinstatement rate is under ~20%, the value prop collapses and the product becomes hope-in-a-PDF.
3. **Assumption:** File volume per contractor supports subscription pricing — a shop sees enough nonrenewals monthly to justify $249. **How to test:** In the same 40 calls, ask how many nonrenewal letters a homeowner brought them in the last 90 days. Under 3/month across the sample means reprice to per-file.
4. **Assumption:** The homeowner-side search corridor converts to contractor signups. **How to test:** Build the state guide for Colorado and Texas before writing any product code. Measure organic traffic and "find a contractor" clicks over 4 weeks. This is cheap and it de-risks the single most important channel.

### Risk flags

1. **Regulatory / unauthorized practice risk.** Depending on the state, assembling and submitting arguments on a policyholder's behalf can edge toward public adjusting or the unauthorized practice of law. The mitigation is structural, not cosmetic: the licensed contractor is the author and signer, the tool never speaks to the carrier directly, and it never renders an insurance-coverage opinion. This needs a real legal review in each launch state, not a disclaimer.
2. **Platform dependency — on regulators.** The entire wedge sharpens or dulls with state action. If AB 1559 stalls, California doesn't open on schedule. Conversely if a federal or NAIC standard lands, the state-by-state rule pack — the main moat — commoditizes overnight.
3. **Incumbent absorption.** EagleView, Roofr, and iRoofing already own the contractor's desktop and the imagery relationship. Any of them could bolt on a rebuttal generator. The counter is speed and focus: they sell to the measurement job-to-be-done and this is a different one, but that's a 12-month head start, not a durable defense.
4. **Carriers harden the target.** Nothing stops insurers from routing rebuttals to a form-letter denial queue, or from tightening underwriting so that even a successful rebuttal only delays nonrenewal to the following term. If contractors' win rate drops, churn spikes fast — this is a product whose retention is directly coupled to its success rate.
5. **Seasonality and buyer flakiness.** Roofing is seasonal and roofers are famously hard to sell software to. Expect long trials, high early churn, and a summer-weighted revenue curve.

## 14. Structured verdict

```
Score:                  76/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical solo founder who will read insurance bulletins carefully
                        and write the definitive public guide to disputing aerial nonrenewals
Time to revenue:        6–10 weeks
Capital to launch:      $8–15K
Top 3 assumptions to validate first:
  1. Contractors pay recurring, not per-favor — 40 calls to Colorado Front Range roofers,
     probe for an existing Word template as the positive signal
  2. Rebuttals actually get policies reinstated at ≥20% — interview 10 operators who have
     submitted them; public-records request to Colorado DOI on post-March-2026 volume
  3. Homeowner search corridor converts — ship the CO/TX guide before any product code,
     measure "find a contractor" clicks over 4 weeks
Kill criteria:
  - Abandon if <20% of documented contractor rebuttals result in reinstatement or
    reconsideration — without a win rate this is an expensive PDF
  - Abandon if fewer than 8 of 40 surveyed contractors report 3+ nonrenewal letters
    brought to them per month — volume too thin for subscription pricing
  - Abandon if EagleView or Roofr ships a rebuttal-file feature before v1 launches
  - Abandon if legal review in 2 of the first 3 launch states flags public-adjusting exposure
    that can't be structured around
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Read B-5.57, AB 1559, and the Texas and New York proposals end-to-end. Hand-build one complete sample rebuttal file for a real Colorado nonrenewal scenario — the actual artifact, fully designed, the thing a carrier would receive. This doubles as the entire sales asset.
- **Day 3–4:** Call 40 Front Range roofing contractors. Two questions that matter: what do you do today when a homeowner walks in with a nonrenewal letter, and would you pay $249/mo for this document. Email the sample file to everyone who picks up. In parallel, track down 10 contractors or Part 107 operators who have already submitted rebuttals and get their actual outcome rate.
- **Day 5:** Publish the Colorado dispute guide. Decide.

**Falsifiable go/no-go:** Go only if **≥10 of 40** contractors confirm they see 3+ nonrenewal letters per month *and* **≥6** verbally commit to a paid pilot at $249/mo, *and* the operator interviews show a reinstatement-or-reconsideration rate **≥20%**. Anything less and the honest read is that this is a real problem with a buyer who won't fund the fix — in which case the homeowner-direct version at $199 one-time is the fallback shape to test, not this one.
