---
title: "TillVerdict — sweethearting adjudicator for retail"
slug: sweethearting-clip-adjudicator
date: 2026-07-12
category: Retail / US-SMB
complexity: Medium
score: 74
verdict: GO
confidence: Medium
oneLiner: "Watches the clip behind every suspicious void and tells the owner whether the item was actually scanned."
tags:
  vertical: Retail
  model: SaaS
  geography: US
  secondary: [Loss-prevention, AI-agent, SMB, Video-AI, POS-integrated, Solo-builder]
axes:
  problem: 16
  demand: 12
  build: 11
  distribution: 11
  revenue: 11
  time: 8
  defensibility: 5
founderFit: [technical-heavy, sales-heavy]
featured: false
---

# TillVerdict

## 1. One-liner

Watches the clip behind every suspicious void and tells the owner whether the item was actually scanned.

## 2. Trend signal — why now?

Three things moved independently and landed on the same square.

**The pain is enormous and unmoved.** Employee theft is roughly **28.5% of total retail shrink — an estimated $50B/year** in the US ([NRF, via BizTech](https://biztechmagazine.com/article/2023/05/retail-shrink-billion-dollar-problem-video-technology-helps)). Sweethearting — ringing up a friend's cart at half of it — is singled out as *"the most common and most overlooked form of internal theft"* precisely because it's *"so difficult to detect through traditional methods"* ([DohAssist](https://www.dohassist.com/shield-guides-what-is-sweethearting)). Meanwhile **64% of retail managers only review footage after an incident, and only 12% review more than once a week** ([SecurityCameraKing](https://www.securitycameraking.com/securitynews/how-often-do-stores-check-security-cameras/)). Nobody is watching, because watching is the expensive part.

**The incumbent stops one step short.** This is the whole idea. Solink is already at **$175/mo per location, hardware-agnostic, works with the cameras you own**, and does POS↔video correlation ([Solink pricing](https://solink.com/pricing/)). I assumed that closed the gap. It doesn't. Solink's own page describes the job it hands back to you: *"it's easy to review all of their high-risk transactions, such as voids or long duration bills under a threshold value, to find instances of sweethearting."* It surfaces the queue. **A human still watches every clip and decides.** Their own users say the automated layer isn't there yet: *"the spot check feature's AI aspects need refinement as we still encounter false positives"* ([G2](https://www.g2.com/products/solink/reviews)). The industry consensus agrees the correlation alone is insufficient — sweethearting *"isn't always immediately clear on your retail CCTV cameras"* and *"only POS + video correlation can confirm that items on the counter weren't scanned"* ([Solink](https://solink.com/resources/sweethearting/), [Lightspeed](https://www.lightspeedhq.com/blog/prevent-retail-internal-theft/)).

**The adjudication step just became buildable.** Gemini's 1M-token context window natively ingests video — **up to 1 hour at default resolution, 3 hours at low resolution, in a single call** ([Google AI](https://ai.google.dev/gemini-api/docs/long-context)), with new **Flex inference tiers explicitly for cost optimization** ([Gemini changelog](https://ai.google.dev/gemini-api/docs/changelog)). A 40-second clip around a void is a trivial payload. Asking a model *"count the physical items that cross this counter, and tell me if the register recorded fewer"* was a research problem in 2024. In 2026 it's an API call costing fractions of a cent.

So: the queue is already generated and already paid for. The verdict is still a human watching video. That's the seam.

```
Provenance:
  - Signal 1 (Demand): Employee theft = 28.5% of shrink / ~$50B US; sweethearting is the "most overlooked" form because it's hardest to detect; 64% of managers only review footage post-incident — https://www.dohassist.com/shield-guides-what-is-sweethearting + https://www.securitycameraking.com/securitynews/how-often-do-retail-stores-check-security-cameras/ — 2026-07-12
  - Signal 2 (Feasibility): Gemini 1M-context native video understanding (1hr default / 3hr low-res per call) + new Flex cost tier — https://ai.google.dev/gemini-api/docs/long-context — 2026-07-12
  - Signal 3 (Economic): Exception-based reporting is a funded, priced category — Agilence at $500–1,500/store/mo for chains; Solink at $175/mo/location for SMB — but both explicitly leave confirmation to a human: "Human judgment remains essential in the confirmation process" — https://solink.com/pricing/ + https://www.spot.ai/blog/best-retail-loss-prevention-software-2026 — 2026-07-12
  Category: Tech-unlock
```

## 3. The opportunity

Every loss-prevention product in this category solves *retrieval*. Given a void at 4:52pm, they show you the 4:52pm clip. That was the hard problem in 2015 and it's a solved, commoditized one now — Solink does it for $175/mo on your existing cameras.

Nobody solves *adjudication*. The owner of a 3-store convenience chain still opens a queue of 60 flagged voids a week, watches 40 seconds each, and decides. That's 40 minutes of a $60/hr person's attention, so it doesn't happen — which is exactly why 64% of managers only look at footage after they already know something went wrong. The flag queue is a to-do list nobody does.

TillVerdict is a layer that consumes the flag and returns the answer: **"6 items crossed the counter. The register recorded 4. The two unscanned items are visible at 0:14 and 0:22. Cashier: J. Rivera. Confidence: high."** Owner opens one email a day with three ranked verdicts and evidence timestamps, not sixty clips and a homework assignment.

The disruption isn't price — Solink is already cheap. It's that AI does the one job in this workflow that was still 100% human, and that job is the bottleneck the entire category is stuck behind.

## 4. Target market

- **Primary customer:** Owner-operators of **2–10 location** independent retail — convenience stores, liquor stores, smoke shops, quick-serve franchisees. US first. $1M–$15M revenue. Has cameras. Has a Square/Clover/Toast POS. Has no loss-prevention *staff* — the owner IS the LP department.
- **Why they buy:** Not because they suspect a specific person — because they've suspected *someone* for months and can't act. The sourced legal constraint is the sharpest form of the pain: *"You cannot just accuse an employee of theft. If you're wrong or unable to prove it, your company may face legal retribution"* ([DohAssist](https://www.dohassist.com/shield-guides-what-is-sweethearting)). They are trapped between a shrink number they can see and a proof standard they can't reach. The product's output is exactly the artifact that unlocks the action they already want to take.
- **Rough TAM reasoning:** ~150K convenience stores in the US, plus liquor/smoke/specialty. If the serviceable slice is the ~40K independent multi-store operators who already run a cloud POS and cameras, and I take 1.5% at ~$1,900/yr ACV, that's ~$11M ARR. The $1–5M band needs ~2,000 locations. That's a small fraction of the segment.
- **Why now for them:** Their POS already emits the void/refund webhook (confirmed: [Square Refunds API webhooks](https://developer.squareup.com/docs/refunds-api/webhooks), [Clover voids & refunds](https://docs.clover.com/dev/docs/voids-and-refunds)). Their cameras are already IP/RTSP. The two inputs have been sitting there uncorrelated because the thing that had to sit in the middle — something that could actually *watch* — didn't exist at a price that worked.

## 5. Product sketch (MVP)

- **Connect POS in one click.** OAuth into Square or Clover. Subscribe to void, refund, no-sale, and manual-discount webhooks. Zero configuration.
- **Point at the camera you already own.** RTSP URL for the register-facing camera. No new hardware, no truck roll, no camera swap.
- **Verdict, not a clip.** For each exception event, pull the surrounding 60 seconds and return a structured judgment: items handled vs. items rung, the specific timestamps of the discrepancy, and a confidence grade.
- **A daily digest, ranked.** One email: the three highest-confidence discrepancies of the day, worst first. Not a queue. Not a dashboard nobody opens.
- **Cashier-level pattern view.** Discrepancy rate per employee per 100 transactions. This is what turns one bad clip into a pattern you can act on.
- **The evidence packet.** One-click export: the clip, the POS receipt, the frame-stamped discrepancy, in a PDF that survives an HR meeting, an insurance claim, or a police report.
- **Explicit uncertainty.** When the camera angle is bad or the frame is occluded, it says "cannot determine" rather than guessing. Given the legal exposure of a false accusation, a confident wrong answer is worse than no answer.

## 6. AI angle — what's load-bearing

Remove the AI and there is no product — you're left with Solink, which already exists.

The AI *is* the deliverable. The entire value is a vision model watching 60 seconds of counter footage and answering one counting question: how many physical items crossed this counter, and does that match what the register recorded? That's the task that was human-only in every product in this category, and it's the task that made the flag queue worthless because nobody had time to do it 60 times a week.

This is not "dashboard with a chatbot." It's replacing the trained reviewer's eyeballs, which is the only expensive input in the workflow.

The honest hard part: the model must be *calibrated*, not just capable. A false accusation carries legal risk for the customer. Precision matters more than recall here — a product that surfaces 3 correct verdicts and abstains on 20 ambiguous ones beats one that surfaces 23 verdicts of which 5 are wrong. That's a tuning and evaluation discipline, and it's where the real engineering time goes.

## 7. Localization angle (if any)

N/A — this is a US-first play. The wedge is the specific coincidence of cloud POS penetration (Square/Clover/Toast), existing IP camera base, and a legal environment where wrongful-accusation exposure makes *proof* — not suspicion — the thing worth paying for. India/SEA independent retail lacks the cloud-POS webhook layer this entire product depends on; without the exception event, there's nothing to trigger on. Revisit when UPI-linked POS matures.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** **$79/mo per location.** Deliberately priced *under* the $175/mo incumbent, because I am not replacing them — I'm the layer that makes their flag queue actually get consumed. Sits alongside, not against.
- **ACV:** ~$1,900/yr (average customer is ~2 locations).
- **Math to $1M ARR:** ~1,050 locations × $79 × 12 = $1.0M. At ~2 locations per customer, that's ~525 customers.
- **Math to $5M ARR:** ~5,300 locations. Needs either the franchise channel (one signed 40-unit franchisee = 40 locations in one close) or a per-verdict tier for high-volume QSR. Realistically 30 months, not 18.
- **Expansion path:** Per-location is the base. ACV grows via (a) more locations, (b) additional camera zones — the back door and the stockroom have the same unwatched-footage problem, (c) an evidence-packet/case-management tier for operators who actually pursue claims.

Margin note: a 60-second clip at low media resolution through a Flex-tier call is fractions of a cent. Even at 100 exception events/location/week, inference is a rounding error against $79. Unit economics are not the risk here.

## 9. Go-to-market wedge — first 100 customers

The evidence packet sells itself, so the entire GTM is *show them one*.

1. **The free audit — the whole wedge.** Offer any independent operator a free one-week retro audit: connect POS + one camera, we run last week's voids, we send back the three worst verdicts. This is a demo that hands them a *finding about their own store* — potentially a named employee — before they've paid a dollar. Conversion on "here is evidence of theft in your store, $79/mo to keep watching" should be strong. If it isn't, the idea is dead, and I'll know in week one.
2. **Franchisee associations, not stores.** Independent franchisee associations for QSR/c-store brands have newsletters, annual meetings, and Facebook groups where owners trade operational war stories. One free audit for the association president who then posts the result is worth 500 cold emails. Multi-unit franchisees also make each close worth 5–40 locations.
3. **Ride the incumbent's install base.** Solink, Spot AI, and Clover all have customers sitting on flag queues they don't process. Target them directly — the pitch "you're already paying $175/mo for a queue you never open; $79 makes it answer itself" is legible in one sentence. Partner/marketplace listing with the POS vendors is the same motion with distribution attached.
4. **Loss-prevention consultants as a channel.** Independent LP consultants get paid to do exactly this review by hand. They are either the channel or the competitor. Make them the channel — white-label the verdicts, let them bill for the judgment call.

## 10. Build complexity — justification

**Medium.** The pieces are off-the-shelf: POS OAuth + webhooks (documented and public), RTSP ingest and clipping (standard), and a frontier vision model doing the actual work through an API call. No custom model training, no proprietary dataset, no hardware.

What's genuinely hard, and why this isn't Low: **calibration and evaluation.** You need a labeled corpus of real counter footage with known ground truth to tune the abstain threshold, because the cost of a confident false positive is a customer's wrongful-termination lawsuit. That's the difference between a demo and a product, and it's most of the build. Camera-angle variance across stores is the other tax — a register camera pointed at the ceiling produces nothing, and the product needs to *say so* rather than hallucinate.

Realistic: **10–14 weeks to a v1** a design partner can run, for a technical founder plus a part-time LP-domain advisor. The free-audit motion doubles as the labeling pipeline.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Employer-owned cameras on own premises. Two caveats to respect: employee-monitoring notice requirements vary by state, and audio recording is a two-party-consent minefield — **video only, no audio.** |
| Ethical — no harm / dark patterns | ✅ | With a real condition attached. This tool accuses people of crimes. It must abstain under uncertainty, show its evidence, and never be a black-box "fire this person" button. Built the other way, it's a machine for wrongfully firing hourly workers, and I wouldn't build it. |
| Market exists (evidence above) | ✅ | Funded, priced category (Agilence $500–1,500/store/mo; Solink $175/mo). The spend is proven; the gap is the unautomated step. |
| 1–5 person team can build this | ✅ | 1–2 people, 10–14 weeks. |
| Launchable with <$50K / ₹40L | ✅ | Inference is negligible per clip. Main cost is the founder's time and a handful of design-partner installs. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | $50B/yr, felt continuously, and the owner is *already* paying for a tool that doesn't finish the job. Not a 19 because the pain is chronic-and-tolerated, not acute — they've lived with the shrink for years, which means urgency has to be manufactured by the free audit. |
| Demand evidence | 15 | 12/15 | Strong: a funded, priced category with a clear pricing ladder, plus the incumbent's own users complaining about the exact gap I'm filling. Docked because I could not source **verbatim SMB owner quotes** — my Reddit searches for direct customer voice returned nothing usable and I refuse to invent them. That's a real hole in the evidence, and the validation sprint's first job is to fill it. |
| Build feasibility | 15 | 11/15 | All components off-the-shelf. The calibration/abstain work and camera-angle variance are the honest tax. |
| Distribution clarity | 15 | 11/15 | The free retro-audit is an unusually strong wedge — the demo *is* the value, delivered pre-payment. Not higher because independent retail owners are genuinely hard to reach at scale; there's no clean list, and it's a phone-and-handshake motion. |
| Revenue mechanics | 15 | 11/15 | $79/mo is benchmarked directly against a known $175/mo incumbent, inference cost is a rounding error, margins are fine. $1M is very reachable; $5M needs the franchise channel to work, which is unproven. |
| Time to first revenue | 8 | 8/10 | Free audit → paid conversion should close in weeks, not quarters. Owner-operators sign for themselves — no procurement, no committee. |
| Defensibility | 10 | 5/10 | **The weakest axis, and I won't dress it up.** Solink can build this. They have the queue, the cameras, the POS integrations, and the customers; I'd be adding the one layer they're missing. The moat is (a) an accuracy/calibration dataset that compounds with every audit, and (b) speed and focus while they treat AI as a roadmap item. That's an execution moat, not a structural one. Honest 5. |
| **Total** | **100** | **74/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `sales-heavy`

Technical because calibration is the product. Sales-heavy because independent retail owners don't buy through a self-serve funnel — someone is getting on the phone. A founder who won't cold-call a liquor store owner should not build this.

### Key assumptions to validate (3–5)

1. **Assumption:** A frontier vision model, on a real (bad, off-angle, compressed) register camera, can count items crossing a counter accurately enough to be *actionable* — i.e. high precision with an honest abstain rate. **How to test:** Get 200 real void clips from 3 design-partner stores with human-labeled ground truth. Measure precision at the abstain threshold. **This is the whole idea — test it before writing any other code.** If precision at a usable recall is poor, the idea is dead and everything else is moot.
2. **Assumption:** Owners will pay $79/mo *on top of* an existing $175/mo Solink bill rather than expecting it bundled. **How to test:** Run the free audit on 20 operators; price it live; see if the ones who already have Solink convert at the same rate as the ones who don't. If existing-Solink customers churn to "I'll just wait for Solink to ship this," the wedge is a feature, not a company.
3. **Assumption:** The free retro-audit actually finds something in a meaningful share of stores. **How to test:** Run it on the first 20. If fewer than ~30% surface a real discrepancy, the demo doesn't demo, and the entire GTM collapses.
4. **Assumption:** Owners will *act* on a verdict (confront/terminate/claim) rather than sit on it. **How to test:** Follow up with the first 20 audited stores at 30 days. A finding nobody acts on is a finding nobody renews for.

### Risk flags

1. **Incumbent-absorption risk (the big one):** This is a missing feature in Solink's product, and they know it — their users are telling them in public reviews. If they ship a competent auto-adjudication layer, my $79 add-on evaporates into their $175 bundle. The counter is speed and calibration quality, but I'm racing a company with the customers already.
2. **Ethical/legal blast radius:** The output accuses people of crimes. A false positive can get an hourly worker fired or arrested. This creates both a moral obligation and a liability surface — the product must abstain aggressively and never present a verdict as proof. Getting this wrong isn't just a bug; it's the kind of thing that ends the company and hurts people who can't afford it.
3. **Camera reality:** Half of independent retail has cameras pointed at the wrong thing, at 4fps, through a smeared dome. The product may need to tell a meaningful share of prospects "your camera can't support this," which is a brutal thing to say mid-sale.
4. **Platform dependency:** Sits on top of POS webhooks (Square/Clover) and a vision-model API. Both are third parties who can change terms or pricing. Inference cost is currently negligible, but the whole margin story assumes it stays that way.

## 14. Structured verdict

```
Score:                  74/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder who will also make cold calls; part-time LP-domain advisor strongly recommended
Time to revenue:        6–10 weeks from v1 (free audit converts fast)
Capital to launch:      <$15K
Top 3 assumptions to validate first:
  1. Vision model achieves actionable precision on real, ugly register footage — 200 labeled clips from 3 stores, measured at the abstain threshold. Kill test.
  2. Free retro-audit surfaces a real discrepancy in ≥30% of stores — run it on 20.
  3. Owners pay $79/mo alongside an existing Solink bill — price it live during the audit.
Kill criteria:
  - Abandon if precision on labeled real-world clips can't clear ~90% at any usable recall. A tool that falsely accuses employees is worse than no tool, and I will not ship it.
  - Abandon if <30% of free audits surface a real discrepancy — the demo is the entire GTM.
  - Abandon if Solink ships auto-adjudication before v1 lands. Racing them from behind with no customers is not a business.
```

## 15. Next step — 1-week validation sprint

The whole idea rests on one empirical question: **can the model actually call it?** Everything else is downstream. So the sprint tests only that.

- **Day 1–2:** Get real footage. Call 30 independent c-store/liquor owners, offer a free shrink audit in exchange for one week of register footage + POS export. Need 3 to say yes. (Secondary goal, and it matters: this is also where I finally collect the **verbatim customer voice** my research couldn't source. If 30 owners don't describe this pain in their own words, the demand score was wrong.)
- **Day 3–4:** Build nothing but the eval. Pull ~200 exception clips, hand-label ground truth (scanned / not scanned / cannot determine), run them through the vision model, and measure **precision at the abstain threshold** — not accuracy, precision. Accuracy is a vanity metric when false positives get people fired.
- **Day 5:** Decide.

**Falsifiable outcome:** ≥90% precision at ≥40% recall on real, unstaged register footage, with the model correctly abstaining on the rest. Hit it and the core unlock is real — build. Miss it and the entire thesis is a hallucination about what the model can see, and I stop, because every other axis in this proposal is worthless without that number.
