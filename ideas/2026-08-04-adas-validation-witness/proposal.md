---
title: "RoadProof — validation witness for ADAS calibration shops"
slug: adas-validation-witness
date: 2026-08-04
category: TradeTech / US-SMB — Collision, Glass & Mobile Calibration Shops Signing Off on ADAS Work
complexity: Medium
score: 75
verdict: GO
confidence: Medium
oneLiner: "Records the road test that proves a calibration actually worked, not just that the scan came back clean."
tags:
  vertical: TradeTech
  model: SaaS
  geography: US
  secondary: [SMB, AI-agent, Voice-first, Compliance-driven, Mobile-first]
axes:
  problem: 17
  demand: 12
  build: 11
  distribution: 12
  revenue: 11
  time: 7
  defensibility: 5
founderFit: [technical-heavy, sales-heavy]
featured: false
---

# RoadProof

## 1. One-liner

Records the road test that proves a calibration actually worked, not just that the scan came back clean.

## 2. Trend signal — why now?

Three things moved at once in the last twelve months, and they point at the same unattended gap.

**The industry publicly admitted verification is unsolved.** Not billing. Not identification. *Verification.* Joel Adcock of Revv — the funded leader in this category — put it plainly: "Calibrations aren't necessarily complete without verification. So, completion doesn't necessarily equal success." Ryan DeMarco, owner of All County Collision, said the quiet part louder: "A clean scan is not a green light. Many ADAS systems can be out of specification, improperly aimed, or otherwise affected by a repair without setting a fault code." John Melendez of JDM Collision & Calibrations frames it as the shop's actual job: "Our responsibility is to verify system performance, not simply confirm the absence of fault codes."

**The liability curve went vertical.** ADAS calibration lawsuits rose from 3 in 2018 to 61 in 2024. Adcock's figures: an average lawsuit or settlement costs a shop $200,000 to $1 million or more, and a missed calibration can exceed $1 million in legal bills. Meanwhile more than 85% of new vehicles carry at least one active ADAS feature, and consumers needed over 4.3 million calibrations in 2025 alone. The exposure is now routine, not exotic.

**Congress started legislating the exact artifact this product produces.** H.R. 6688, the ADAS Functionality and Integrity Act, directs NHTSA to publish — within 24 months — calibration procedures after repair and *testing protocols to verify ADAS integrity*, explicitly so aftermarket businesses "can properly test and validate that the vehicle systems have been properly calibrated." It cleared subcommittee in July 2026 and advanced toward the House floor with SEMA backing. Whatever the final text, the direction of travel is: shops will be expected to prove validation, not assert it.

And the work is being skipped at scale. Roughly 65% of vehicles passing through collision shops require calibration; only 35–40% of that work actually gets completed. Adcock's research puts it bluntly — nearly half of all U.S. shops miss required post-repair calibrations.

```
Provenance:
  - Signal 1 (demand): Named shop owners and an AirPro COO stating on the record that clean scans ≠ verified performance, and that validation notes are where shops "get burned" — https://www.autobodynews.com/news/adas-calibration-in-2026-the-gap-between-getting-it-done-and-getting-it-done-right — 2026
  - Signal 2 (economic): ADAS calibration lawsuits 3 (2018) → 61 (2024); settlements $200K–$1M+; ~half of U.S. shops miss required post-repair calibrations — https://www.autobodynews.com/news/preventing-common-adas-failures-can-save-shops-millions-in-liability-costs-analyst-says — 2026
  - Signal 3 (feasibility/regulatory): H.R. 6688 ADAS Functionality and Integrity Act directs NHTSA to set validation test protocols; cleared subcommittee July 2026 — https://www.congress.gov/bill/119th-congress/house-bill/6688 — 2026-07
  Category: Tech-unlock
```

## 3. The opportunity

The ADAS software category has one funded winner and it is pointed the other way. Revv raised $22.1M (Series A, Nov 2024, Left Lane Capital), sits in 2,100+ repair locations, and passed seven figures of ARR in under seven months. Its product answers *"what calibration does this VIN require, and how do I get the insurer to pay for it?"* That is an estimating-and-revenue problem. It is a good business and I am not going to out-build it.

The gap sits ninety minutes later in the workflow. After the target board comes down and the scan tool says "calibration successful," a technician takes the car out on the road, drives it, watches whether lane-keep engages and whether adaptive cruise picks up the car ahead — and then writes, in the file, something like *"road tested, OK."* That sentence is the entire evidentiary record standing between the shop and a $200K–$1M settlement three years from now.

It is worthless as evidence. It has no timestamp, no route, no speed, no weather, no lane-marking quality, no record of which systems were actually exercised, and no proof the tech drove anything at all. Paul Bostel of Quality Collision Group spells out what a defensible note requires: "the conditions under which you tested: road type, weather, speed range, markings, and any system messages." Almost nobody produces that, because producing it by hand after every calibration is fifteen minutes of typing a technician will not do on job forty of the week.

RoadProof turns the road test itself into the record. The tech mounts a phone, taps start, drives the validation route, and narrates what happens. The product captures the drive and returns a structured, timestamped validation report — the artifact the industry says it needs, the bill is moving toward mandating, and no incumbent currently produces.

The wedge against Revv is that this is complementary, not competitive. Revv sells the front of the job. This sells the back of it. A shop can run both, which makes the sales conversation easy rather than a rip-and-replace.

## 4. Target market

**Primary customer:** Owner or general manager of an independent collision shop (5–40 employees, $1.5M–$12M annual revenue) or a mobile ADAS calibration outfit (2–15 technicians) in the US. Secondary: independent auto glass shops doing windshield-replacement-triggered calibrations. Buyer is the owner; user is the technician or calibration specialist.

**Why they buy:** In their own words. Josh McFarlin, COO of AirPro Diagnostics, on what actually protects a shop: *"Have a process and follow it. That becomes, in my opinion, pretty defensible."* AirPro has recorded both the phone call and the screen session for every remote diagnostic interaction going back to 2016 — that is a sophisticated operator's answer to exactly this fear, and small shops have no equivalent. Melendez: *"With today's technology, there is no such thing as being too careful when it comes to vehicle safety."* The pain has two faces: the 3am fear of the letter from a plaintiff's attorney about a car you touched two years ago, and the near-term cash fight where an insurer refuses to pay for calibration work the shop can't evidence. Only 36% of repairers report being paid for safety inspections despite every automaker requiring them.

**Rough TAM reasoning:** There are roughly 30,000+ independent collision repair facilities in the US, plus a fast-growing mobile calibration segment and tens of thousands of glass shops. If 65% of collision vehicles need calibration and 4.3M calibrations happened in 2025, the volume is there. I only need a low-single-digit percentage of shops. At 1,200 shops paying $249/mo, this is a $3.6M ARR business — inside my target band without needing a category-defining outcome.

**Why now for them:** Lawsuit volume is up 20× in six years, the federal bill is telling them validation protocols are coming, and their insurance carriers and OEM certification programs are starting to ask what their process is. The shops that already feel this are the early adopters; the bill converts the rest.

## 5. Product sketch (MVP)

- **Guided validation drive.** Tech opens the app on a windshield-mounted phone, scans the RO or types the VIN, and gets a per-vehicle checklist of which ADAS features to exercise on the road — derived from what was calibrated, not a generic list.
- **Capture while driving.** Records forward video, GPS track, speed profile, and the tech's spoken narration ("lane keep engaged at 47, holding center, no warning lamp"). Hands stay on the wheel; the tech just talks.
- **Automatic conditions capture.** Weather, time of day, road classification, and lane-marking visibility pulled from the GPS track and the video — the exact fields Bostel says a defensible note needs, with zero typing.
- **Structured validation report.** One PDF per vehicle: VIN, RO number, which systems were exercised, at what speeds, under what conditions, with timestamped video clips of each engagement and the transcribed technician narration.
- **Exception flagging.** If the drive never reached the speed a system needs to engage, or the route had no usable lane markings, or a feature never activated, the report says so before the car is delivered — instead of after a crash.
- **Warning-lamp and message detection.** Flags dashboard warnings visible in the captured video that the tech didn't call out.
- **Case archive with instant retrieval.** Search by VIN, plate, RO, or date. Pull the full evidence packet in seconds three years later when the demand letter arrives.
- **Insurer-ready supplement attachment.** Export the validation report in a format that can ride along with the calibration line item on a supplement.

## 6. AI angle — what's load-bearing

Remove the AI and this is a dashcam with a filing cabinet — the technician still has to write up what happened, which is precisely the step that doesn't get done today.

Three places the AI does real work:

**Speech → structured evidence.** The technician narrates naturally while driving. The system extracts which named ADAS feature was exercised, whether it engaged, at what speed, and any anomaly — mapping loose shop talk ("cruise picked up the car in front, no problem") onto the specific system nomenclature the OEM procedure uses. That's the difference between a voice memo nobody can search and a report an attorney can read.

**Vision over the drive footage.** Detecting dashboard warning lamps and system messages the tech missed, assessing lane-marking quality and road type, and pulling the frames that correspond to each claimed engagement. A human reviewing forty minutes of footage per vehicle is not a business; a model surfacing the eleven relevant seconds is.

**Validation-completeness reasoning.** Given what was calibrated on this VIN and the OEM procedure's requirements, deciding whether the drive that just happened actually satisfies validation — or whether the tech needs to go back out because the route never exceeded 35 mph and adaptive cruise needs 45. This is the judgment call that makes the report trustworthy rather than decorative, and it's the reason a shop pays monthly instead of buying a camera once.

## 7. Localization angle (if any)

N/A — this is a US-first play, deliberately. The driver is the American liability and litigation environment plus a specific bill moving through the US House. Right-hand-drive markets, different OEM procedure regimes, and far lower per-incident settlement exposure make Europe and Asia weaker openings despite similar underlying vehicle technology. The UK and Australia are plausible year-two expansions since both have growing ADAS calibration accreditation schemes, but chasing them early would dilute the wedge.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** $249/mo per shop location for up to 60 validated drives, $399/mo unlimited. Mobile calibration operators pay $149/mo per technician. Overage $4/drive. Compare against the alternative: shops already spend $10,000–$14,000 on a target package and charge $250–$450 per calibrated system, so a $249/mo line item that protects the whole book of work is not a difficult number.
- **ACV:** ~$3,400 blended.
- **Rough math to $1M ARR:** 300 shops × $249/mo × 12 = $896K, plus overages and multi-location accounts clears $1M. Three hundred shops out of 30,000+ is 1% penetration.
- **Rough math to $5M ARR:** ~1,300 locations at a blended $320/mo. Realistic path runs through MSOs and consolidators — landing three 40-location groups is worth more than 100 individual sales — plus attaching the glass segment, which has higher unit volume and thinner staff.
- **Expansion path:** Per-location growth inside MSO accounts is the main lever. Then: an insurer-facing tier where carriers pay to receive structured validation evidence rather than argue about it, and an OEM-certification-program tier where a certifying automaker requires the artifact. Both are year-two-plus and neither is needed for the base case.

## 9. Go-to-market wedge — first 100 customers

- **Ride the bill.** H.R. 6688 is generating a steady stream of trade coverage that shops are already reading and worrying about. Publish a plain-English "what validation evidence will actually be required of your shop" breakdown, gate nothing, and push it into the six or seven trade outlets covering this weekly (Repairer Driven News, Autobody News, Fender Bender, BodyShop Business, glassBYTEs). This is a topic where an operator who has genuinely read the bill text can out-publish everyone in a month.
- **Go where the calibration people already gathered.** Revv launched the United ADAS Collective, a dedicated professional organization for the calibration community — that is a pre-assembled list of exactly the operators who feel this pain most acutely. Same for SCRS, ASA state affiliates, and the regional ADAS training circuit. Sponsor a training day, demo the validation drive live on the parking lot, walk out with the attendee list.
- **Cold outreach to the certified list, with their own footage.** OEM certification program directories (Honda ProFirst, Ford, Subaru, etc.) publish searchable lists of certified shops by ZIP. Scrape 2,000 of them, and for each one send a 90-second video showing a real validation drive turning into a real report. The pitch is one sentence: *"Here is what your file looks like today, and here is what it would look like if you get sued."* Expect 3–5% reply.
- **The insurer-fight angle for near-term cash.** Shops care more about getting paid this month than about a lawsuit in 2029. Lead with the supplement attachment — evidence that the calibration and its validation happened — to shops that have been denied calibration reimbursement. Denial complaints are easy to find in trade coverage and state association forums.
- **Land the consolidators last, not first.** Get 60–80 independents live, collect the resulting evidence-quality data, then walk into MSO risk managers with it. Enterprise-length sales cycles at the start would break the 90-day-to-revenue rule; as an expansion motion in month 9 they're the whole $5M path.

## 10. Build complexity — justification

Medium. The mobile capture app, cloud storage, transcription, and report generation are all off-the-shelf — speech and vision models handle the hard parts through APIs, and the whole thing rides on a standard web stack plus a phone app. The genuinely custom work is the validation-requirements layer: mapping calibrated systems to what the OEM procedure requires you to demonstrate on the road, per make. That's the moat and it's also the slog. Ship v1 covering the eight highest-volume makes and the four most common ADAS features rather than trying to be complete. Realistically 14–18 weeks to a v1 a real shop can run, for two people, with a third-party ADAS technician on retainer as the domain check.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Evidence capture on shop-owned vehicles during service. Recording consent and customer-vehicle data handling need a clean policy but no approval to launch. |
| Ethical — no harm / dark patterns | ✅ | The product's entire function is making safety verification real rather than assumed. It flags incomplete validation rather than papering over it. |
| Market exists (evidence above) | ✅ | 4.3M calibrations in 2025, funded incumbent at seven-figure ARR in an adjacent slice, named operators describing this exact gap. |
| 1–5 person team can build this | ✅ | Two builders plus a domain advisor. |
| Launchable with <$50K / ₹40L | ✅ | Phones, API credits, and a design contractor. Under $25K to first paying shop. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 17/20 | Six-figure-to-seven-figure tail risk on work they do daily, plus near-term reimbursement denials. Named operators describe it unprompted. Not 19 because the pain is probabilistic — most shops have never been sued, and fear-of-tail-risk converts worse than a bill due Friday. |
| Demand evidence | 15 | 12/15 | Strong indirect evidence: funded incumbent's traction proves shops buy ADAS software, litigation curve is documented, legislation is moving. Docked because nobody is currently paying specifically for *validation evidence* — I'm inferring the willingness, not observing it. |
| Build feasibility | 15 | 11/15 | Capture and reporting are easy. Per-make validation requirements are a real content build, and mobile video capture in the field always has more edge cases than it looks. 14–18 weeks, not 6. |
| Distribution clarity | 15 | 12/15 | Named lists (OEM certification directories, UADC, SCRS), a live news hook, and a demo that sells itself in 90 seconds. Docked because shop owners are famously hard to reach and slow to adopt software. |
| Revenue mechanics | 15 | 11/15 | $249/mo against a $10K+ equipment norm is defensible, and 300 shops for $1M ARR is credible. Risk is that shops treat it as insurance and churn when nothing bad happens. |
| Time to first revenue | 10 | 7/10 | 14–18 week build, then design partners who can pay in weeks. First real dollars around month 5. Pilots could pull that forward. |
| Defensibility | 10 | 5/10 | Execution moat plus accumulating per-make validation content and a shop's archive of past cases (which is genuinely sticky — you can't take your evidence history with you). But Revv could build this as a feature, and that is the central risk. |
| **Total** | **100** | **75/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `sales-heavy`

Needs someone who can ship a mobile capture pipeline with vision and speech in it, paired with someone who can sit in a shop office and sell to an owner in coveralls. A domain advisor who has actually performed calibrations is close to mandatory — the validation-requirements layer cannot be researched from a laptop alone.

### Key assumptions to validate (3–5)

1. **Assumption:** Shop owners will pay monthly for evidence against a risk that has never personally hit them. **How to test:** 30 discovery calls with certified-shop owners; ask directly what they'd pay, but weight the answer by whether they've ever been asked for calibration documentation by a carrier or attorney. If fewer than 8 of 30 have, lead with the reimbursement angle instead.
2. **Assumption:** Technicians will actually narrate while driving instead of ignoring the app. **How to test:** Put a rough capture build in three friendly shops for two weeks. Measure the percentage of calibrations that produce a complete validation drive. Below 60% and the UX, not the market, is the problem.
3. **Assumption:** Per-make validation requirements can be assembled accurately from accessible OEM procedure sources. **How to test:** Build the layer for four makes with a calibration tech reviewing. If it takes more than a week per make, the content build swamps the business.
4. **Assumption:** Revv doesn't ship this within 12 months. **How to test:** Track their release notes and UADC programming. Their public positioning is identification and reimbursement; watch for language shifting toward validation.

### Risk flags

1. **Incumbent absorption:** Revv has $22.1M, 2,100 locations, and a community organization aimed at exactly these buyers. If they decide validation capture is a feature, they ship it to an installed base I'd have to sell to one shop at a time. The counter is speed plus depth — but this is the risk that would kill it.
2. **Regulatory timing:** H.R. 6688 gives NHTSA 24 months to publish, targeting model-year 2028. That's the tailwind, and it's slow. If the bill stalls, demand rests entirely on liability fear, which converts less reliably. Do not build the business assuming the mandate lands.
3. **Evidence liability paradox:** A shop that generates rigorous validation records also generates discoverable proof of the times validation was incomplete. Some owners will read that as a reason not to buy. The product has to make the incomplete case obviously fixable before delivery, or this objection sinks demos.
4. **Adoption friction in a low-tech workforce:** Collision technicians are paid flat-rate and resent anything that adds minutes per job. If the capture isn't near-zero effort, it dies on the shop floor regardless of what the owner signed.

## 14. Structured verdict

```
Score:                  75/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder who can ship mobile capture + vision/speech,
                        paired with a shop-floor seller, plus a working ADAS
                        calibration technician as domain advisor
Time to revenue:        5–6 months (14–18 week build, then paid pilots)
Capital to launch:      $20–25K
Top 3 assumptions to validate first:
  1. Willingness to pay for evidence — 30 discovery calls with OEM-certified shop
     owners, weighted by whether they've ever been asked for calibration docs
  2. Technician compliance — rough capture build in 3 shops for 2 weeks,
     measure % of calibrations producing a complete validation drive
  3. Per-make validation content is assemblable — build 4 makes with a
     calibration tech reviewing, measure days per make
Kill criteria:
  - Abandon if fewer than 8 of 30 shop owners can name a time they were asked to
    produce calibration documentation by a carrier, attorney, or OEM program
  - Abandon if technician completion rate stays under 60% after two UX iterations
  - Abandon if Revv ships validation-drive capture before your v1 reaches 25 paying shops
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Pull 200 OEM-certified shops from Honda ProFirst and Subaru certified directories in three metros. Call until 30 owners or GMs talk. One question carries the week: *"Has a carrier, an attorney, or an OEM program ever asked you to produce documentation that a calibration was validated — and what did you send them?"* Record the answers verbatim.
- **Day 3–4:** Ride along on four real calibration jobs at two shops. Watch what actually gets written in the file after the road test. Time it. Ask the tech what he'd do if the app asked him to narrate.
- **Day 5:** Decide on a falsifiable threshold. Go if ≥8 of 30 owners can name a specific instance where documentation was demanded, **and** the file entries observed on the ride-alongs are as thin as the trade press suggests (a sentence or less, no conditions captured). No-go if shops are already producing structured validation notes — that would mean the gap is closing without me, and the whole thesis rests on it being wide open.
