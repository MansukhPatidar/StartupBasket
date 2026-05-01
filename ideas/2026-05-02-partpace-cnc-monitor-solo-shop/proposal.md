---
title: "PartPace — clamp-on AI machine monitor for solo CNC shops"
slug: partpace-cnc-monitor-solo-shop
date: 2026-05-02
category: Hardware+SaaS / US Solo + Micro CNC Machine Shops
complexity: Medium
score: 80
verdict: STRONG GO
confidence: Medium
oneLiner: "Clamp-on power + vibration sensor + AI app giving solo CNC shops real cycle times, OEE, and quote-versus-actual margin."
tags:
  vertical: TradeTech
  model: Hardware+SaaS
  geography: US
  secondary: [Mechatronics, Embedded, AI-agent, SMB, Solo-builder, Workflow-automation, Hardware-plus-SaaS]
axes:
  problem: 17
  demand: 13
  build: 11
  distribution: 12
  revenue: 13
  time: 7
  defensibility: 7
founderFit: [technical-heavy, domain-expertise-required]
featured: true
---

# PartPace — clamp-on AI machine monitor for solo and 1–3 person CNC shops

## 1. One-liner

A clamp-on power and vibration sensor plus AI companion app that gives solo and 1–3 person CNC shops real cycle times, OEE, and quote-versus-actual margin — for $199 per machine and $29 per month.

## 2. Trend signal — why now?

**The onshoring wave brought a fresh tier of micro-shops.** Section 232 tariffs, IRA manufacturing credits, and the post-COVID return of hardware startups to US contract manufacturing produced a noticeable jump in registrations of one-to-three-machine US job-shops in 2024–2025. The U.S. Census shows ~32,000 NAICS-332710 machine shops; **83% of metalworking facilities have fewer than 20 employees** and **shops with fewer than 50 employees account for 60% of US metalworking technology investment** (Modern Machine Shop / SME). The lowest tier — solo and 1–3 person shops — is large enough to be its own market and structurally underserved.

**Existing machine-monitoring platforms moved upmarket.** MachineMetrics raised $20M Series B led by Teradyne in 2022 and has been chasing aerospace, defense, automotive, contract-manufacturer accounts at $150–$250/machine/month for the production tier — typically $20K–$200K ACV deals on long enterprise sales cycles. Amper starts at $50–$100/machine/month. Caddis Systems is the cheapest credible enterprise entrant at **$100/machine/month**. For a solo shop running 2 machines, that's $2,400–$6,000/year on monitoring software *before* the install fee, plus $500–$2,500/machine in retrofit hardware. The wallet doesn't fit the customer.

**The hardware finally got cheap.** A clamp-on AC current sensor (split-core CT) costs ~$8 in volume. An IMU + ESP32-S3 with cellular fallback (Particle Boron, Notecard) is $40 BOM. A complete clamp-on, mains-powered sensor that watches a CNC's spindle current and machine-frame vibration is now a $25 BOM line item — versus $500/machine for a vendor-pushed "DNC adapter" 18 months ago.

**The AI layer flipped from research to commodity.** Multimodal LLMs at sub-$0.001/inference can classify *machine state from a 30-second current+IMU trace* (idle / cutting / rapid / tool-change) with single-digit error rates after a couple weeks of self-labeled examples per shop. That's the "job-aware" automation tier the enterprise platforms are still selling at premium. Now ships in v1 of a $29/mo product.

**Voice from the field.** Practical Machinist forum threads are full of solo and 2-person shops describing the exact gap: *"I just want a cheap microphone or current clamp that tells me when the machine actually ran today and what stopped it. I don't need MachineMetrics. I need a $30 thing on my phone."* (multiple recurring threads in the Shop Management and Owner Issues sub-forum).

Provenance:
  - Signal 1: 83% of US metalworking facilities <20 employees; ~32,000 NAICS 332710 machine shops; <50-employee shops drive 60% of metalworking tech investment — https://www.mmsonline.com/columns/are-us-machine-shops-choosing-to-stay-small-for-the-long-haul + https://www.ibisworld.com/united-states/industry/machine-shop-services/645/ — 2025–2026
  - Signal 2: MachineMetrics $150–$250/machine/mo (Teradyne-led $20M Series B 2022; pivoted to enterprise MES + AI in 2025), Amper $50–$100/machine/mo, Caddis $100/machine/mo — leaving solo / 1–3 person shops priced out — https://www.machinecdn.com/blog/machinemetrics-pricing-2026/ + https://www.caddissystems.com/product_pricing/ — 2026
  - Signal 3: Clamp-on CT sensors ($8), Particle/Notecard cellular IoT ($40), multimodal LLM state-classification at sub-$0.001/inference — full per-machine kit BOM under $50 — vendor pages + 2025 inference cost data — 2026
  Category: Underserved niche

## 3. The opportunity

The structural gap is clean. Three buyer tiers exist for machine monitoring:

- **Enterprise (50+ machines):** MachineMetrics, ProShop ERP integrations, JobBOSS pipelines. $20K–$200K ACV.
- **Mid-market (10–50 machines):** Amper, Caddis, Fabrico. $5K–$30K ACV.
- **Solo and micro (1–5 machines):** *Nobody.*

Existing tools fail the bottom tier on three axes simultaneously:

1. **Price.** $100/machine/mo × 2 machines × 12 months = $2,400/year of recurring spend, plus a $500–$2,500/machine retrofit. The whole monitoring spend is bigger than the shop's annual cell-phone bill.
2. **Install complexity.** "We'll come out, hook into your MTConnect adapter or DNC port, install a BeagleBone edge device, run cable, integrate to your ERP." The shop owner is the operator, the programmer, and the bookkeeper — there's no one to host the install.
3. **Buyer profile mismatch.** These platforms are configured for a continuous-improvement engineer or a plant manager. The solo machinist doesn't have either. The product needs to fit in his phone, not on a wall-mounted dashboard.

**PartPace fills the gap with a clamp-on sensor and a phone app.** Three pieces:

- **The sensor (one per machine):** Clamp-on AC current sensor on the spindle drive supply line + a 9-axis IMU stuck to the machine frame + an ESP32-S3 with cellular fallback. Mains-powered (USB-C with adapter). No CNC integration, no DNC, no machine-controller cable. Five-minute install per machine.
- **The phone app:** First two weeks, the app shows live machine state ("Running / Idle / Setup") inferred from current+IMU. The shop owner taps a label whenever the inference is wrong, or whenever a job starts/finishes. After ~50 self-labeled events, the AI auto-classifies the shop's specific job patterns (*this signature is the 5-axis aluminum bracket job, this is the lathe boring operation, this idle period was waiting for stock*) at >90% accuracy.
- **The AI pieces that justify the product:**
  - **Real cycle times** per part number, derived from the auto-classified runs.
  - **OEE** per machine without manual data entry.
  - **Quote-vs-actual margin:** owner pastes a quote (PDF or photo), AI reads it, links to the matching auto-classified runs, shows "you quoted 1.5 hr at $85, you ran 2.1 hr — you're losing $54 per part."
  - **Downtime reasons:** when machine drops to idle for >10 min, app prompts via SMS — *"Machine 1 idle 12 min. Reason? (a) tool change (b) waiting for stock (c) no operator (d) program issue."* Two weeks of voting → a real Pareto.

The 10× UX move is the **clamp-on, phone-first** form factor. No truck-roll, no install bid, no IT department. Owner unboxes, clamps the CT around one wire in the machine's electrical cabinet, sticks the IMU to the frame, plugs in USB-C, scans QR. Working in five minutes per machine.

## 4. Target market

- **Primary customer:** US owner-operators of 1–3 person CNC shops. Job-shop / prototype / contract work for hardware startups, motorsports, defense subcontracting, dental, custom firearms parts, e-bike, robotics. 1–3 CNC machines (typical mix: one Haas / Doosan / Tormach mill + one lathe). Annual revenue $80K–$800K. Customer geography: US-only for v1.
- **Why they buy:**
  - "I don't know my hourly rate. I quoted a job at $65/hr last week and lost money on every part."
  - "My machine ran 4 hours yesterday. I was at the shop for 11 hours. Where did the time go?"
  - "I priced a Caddis trial at $200/month for two machines. That's 3 days of revenue. I closed the tab."
  - "I tried tracking jobs in a spreadsheet for two weeks then stopped."
  - "I want my phone to tell me 'machine 1 stopped running 23 minutes ago' so I can walk over and fix it."
- **Rough TAM reasoning:** Of ~32K US machine shops, ~15K are in the 1–5 employee tier. Add hobby-pro and "garage shops doing real contract work" not formally registered as 332710 — easily another 5–10K. Conservative serviceable: 15K shops × 1.8 machines avg × $29/mo = $9.4M MRR fully saturated, plus $199/machine one-time. Realistic 3-year capture of 0.5–2% = $470K–$1.9M ARR; 5% capture = $4.7M ARR with hardware revenue padding.
- **Why now for them:** Onshoring brought work back; tight margins force them to actually know cycle times. AI just made a phone-first version of the enterprise tool feasible. Last 12 months made the hardware cheap.

## 5. Product sketch (MVP)

- **The kit:** One sensor module per machine. Box includes a clamp-on CT sensor (rated for 60–200 A, fits any standard machine spindle drive lead), an IMU + ESP32-S3 + cellular module on a small PCB in a magnetic-mount enclosure, a USB-C power adapter, a printed setup card, and a QR code. Hardware BOM ~$25–$45; ColdLog... err, PartPace charges $199/machine one-time.
- **5-minute install:** Open the machine's electrical cabinet, clamp the CT around the spindle drive supply lead (no wire-cutting), stick the IMU/MCU to the frame with the magnet, plug in USB-C, scan QR with the app. Done.
- **Live state view:** Phone app shows each machine's current state in real time — Running, Idle, Setup, Powered-off — inferred from current draw shape and frame vibration.
- **Two-week labeling:** App periodically asks "what was happening just now?" and the owner taps a quick label. After ~50 labels, the AI auto-classifies the shop's job patterns.
- **Cycle-time book:** Per part number, real average cycle time across recent runs. Pulls automatically once jobs are auto-classified.
- **OEE dashboard:** Availability × Performance × Quality (Quality manual-entry only in v1). Per machine, per shift, per day.
- **Quote-vs-actual:** Owner uploads a quote (paste, PDF, or photo). AI extracts customer, part number, quoted hours, quoted rate. Once the job runs, app shows actual hours, actual margin, and a one-line verdict ("Lost $54/part. Suggested re-quote: $108.").
- **Downtime SMS:** When a machine drops to idle >10 min during scheduled hours, SMS asks the owner to label the reason. After two weeks of votes, a Pareto chart shows the top idle reasons.
- **AI quote suggester (v1.1):** Owner takes a photo of a part drawing or pastes a STEP-file URL. AI matches against the shop's history and suggests "estimated 47 min, target price $185 based on your last 9 similar jobs."

## 6. AI angle — what's load-bearing

AI does three jobs without which the product is just a logger:

1. **Machine-state classification from current + IMU.** Spindle drive current has a distinct shape per operation — air cuts vs. roughing vs. finishing have different RMS and harmonic content; IMU vibration adds frame-mode signatures. A small classifier trained on the shop's own labeled examples (the active-learning loop) reaches >90% accuracy on the shop's specific machines and tooling within ~50 labels. Without the AI, every state change needs a button-press from the owner, which fails day 3.
2. **Quote parsing and matching.** Quotes come in as PDFs, photos of paper, or QuickBooks line items. LLM extracts customer/part/quoted-hours/rate, fuzzy-matches against parts running on the machines, attributes runtime, computes margin. Without the AI, this is a manual data-entry tax the owner won't pay.
3. **Quote suggestion.** Owner uploads a new part drawing or STEP file. AI compares geometry features and material against the shop's auto-classified runs and proposes a target cycle time and price band with rationale ("similar to job 2026-04-12; predict 47 ± 8 min; price band $165–$215"). This is the upsell ladder past $29/mo and the long-term defensibility.

Strip the AI out and PartPace is a clamp-on data-logger with a dashboard. Wallet share collapses to $9/mo and so does the moat. With it, the product is genuinely "what MachineMetrics does for Boeing, but in your pocket for $29/mo."

## 7. Localization angle (if any)

US-first. The tariff structure, the onshoring narrative, the 332710 machine-shop count, and the existing enterprise vendors (MachineMetrics, Caddis, Amper) all anchor the US market.

Sequel markets: UK (similar tier of "small engineering firms"), Germany (Mittelstand), India (~3M registered machine shops, dramatically different price point — would need a $4/mo SKU), Mexico nearshoring shops. None of these are v1.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:**
  - Hardware: **$199/machine one-time**, ships free with annual SaaS.
  - SaaS: **$29/machine/month** for the live state + cycle times + OEE + downtime tracker.
  - **Pro tier $59/machine/month** adds quote-vs-actual + AI quote suggester + multi-shop dashboard for owners running 2 locations.
- **ACV:** Average shop has 1.8 machines; 60% take the Pro tier. Blended ACV ≈ ~$900/year SaaS + ~$360 amortized hardware = **~$1,260/year**.
- **Path to $1M ARR:** ~800 shops at $1,260 ACV. ~5% of the 15K-shop core target market.
- **Path to $5M ARR:** ~4,000 shops, blended ACV pushed to ~$1,400 by deeper Pro adoption and hobby-pro segment opening up. ~25% of core market — ambitious but achievable with channel partnerships.
- **Hardware margin:** ~60% on the $199 kit at small volume (BOM $25–$45 plus fulfillment + returns reserve). SaaS gross margin 88%+.
- **Expansion path:**
  1. **Quote-suggester upsell** is the natural ladder from $29 → $59/machine. AI gets better with shop tenure → switching cost compounds.
  2. **AI part-pricing API for hardware startups** (the buyer-side mirror): expose the shop database to startups looking to manufacture, take a small fee on quote requests routed to shops.
  3. **MTConnect / Fanuc Focas integration** as an optional enterprise SKU for shops that grow past 5 machines. Keeps customers as they scale.
  4. **Hardware-startup network referrals.** The shops PartPace serves are exactly the contract base for Hardware Club / Bolt / SOSV portfolio companies. Cross-network distribution is real.

## 9. Go-to-market wedge — first 100 customers

- **Practical Machinist forum + Reddit r/Machinists / r/CNC.** ~120K active members across the three. Post real before/after data from 5 friendly-shop pilots. *"Look at what Tony's shop (2 Tormachs in Ohio) found in 30 days: 23% downtime from waiting on stock, real lathe cycle 41% slower than quoted."* Forum-first, no paid promotion. Realistic 25–50 trial signups per content piece, 20% close rate = 5–10 paid customers per post.
- **NTMA + PMA (small-shop chapters).** National Tooling and Machining Association and Precision Metalforming Association both have member directories with sub-10-employee shops. Sponsor a webinar ("How to know your real shop rate in 30 days"). 200 attendees × 5% close = 10 customers per event.
- **Tormach + Haas Mini Mill dealer channel.** Tormach explicitly markets to first-shop owners; Haas Automation distributors carry small-mill SKUs. Bundle PartPace with new-machine purchase as a $99 add-on (PartPace eats the hardware cost on dealer-bundled units). One signed dealer = 20–80 referrals/year.
- **Hardware-startup contract-manufacturer matchmaking.** Hardware accelerators (Hax, Bolt, Hardware Club, SOSV) have curated shop lists for portfolio companies. Get on their preferred-shop list with the AI quote suggester as the differentiator. Network of ~500 hardware startups looking for short-run shops × 2–3 referred shops each = 50–80 introduced customers.
- **Paid Facebook in shop-owner groups.** "CNC Machine Shop Owners," "Job Shop Network," "Tormach Owners" — 30K–80K member groups. $2K test budget on a 60-second video showing the clamp-on install + an immediate "your shop ran 4.2 of 8 hrs today" stat. Expect $0.40 CPC, 5K sessions, 2% trial-to-paid = 100 trials, 30 paid.

## 10. Build complexity — justification

**Medium.** Three workstreams: (1) hardware (clamp-on CT sensor + IMU + ESP32-S3 + cellular module + injection-molded enclosure — off-the-shelf parts plus a mechanical co-eng for the enclosure tooling, ~$15K NRE for tooling, 200-unit run via US contract manufacturer); (2) firmware + edge inference (current+IMU sampling, on-device feature extraction, cloud upload — ESPHome-class effort, 4–6 weeks for an embedded engineer); (3) phone app + AI backend (Next.js + Supabase, FastAPI for the inference pipeline, Claude/GPT for the parsing and suggestion layers, plus a job-state classifier trained per shop — 8–10 weeks for a full-stack/AI lead). Total estimated effort for a 2-person technical team (one embedded/firmware/IoT, one full-stack/AI) plus a part-time mechanical contractor = 5 months to a credible v1, with 5 paid pilot shops by week 12.

Not Low: hardware ops (BOM, contract-manufacturing, returns, RMAs) are real work. Not High: nothing is research-grade — the classifier uses well-established techniques, the hardware is commodity, no custom silicon, no novel ML.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Clamp-on CT sensors are non-invasive (no wire-cutting, no machine-controller modification), no UL certification needed for the data path. CE/FCC for the radio, standard.  |
| Ethical — no harm / dark patterns | ✅ | Net positive — gives small-shop owners cost transparency they currently don't have. |
| Market exists (evidence above) | ✅ | 15K+ core target shops, $20M+ raised by enterprise incumbent, three named competitors at $50–$250/machine/month. |
| 1–5 person team can build this | ✅ | 2-person team in 5 months for v1, plus a part-time mechanical contractor. |
| Launchable with <$50K / ₹40L | ✅ | $25K–$30K to launch ($15K tooling + first 200 kits + $10K trade-show or paid forum sponsorship). |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 17/20 | Real, daily pain for the buyer (margin death by quote-blind operation). -3 because the pain is chronic rather than acute — owners have been losing money this way for years; activation requires a forcing event. |
| Demand evidence | 15 | 13/15 | Three funded incumbents proving willingness to pay; recurring forum threads describing the exact gap. -2 because direct paying-now signal at $29/mo SMB tier is inferred not measured. |
| Build feasibility | 15 | 11/15 | Off-the-shelf hardware + standard SaaS stack + standard ML. Hardware ops + firmware are real Medium-complexity work. |
| Distribution clarity | 15 | 12/15 | Five named channels (forums, NTMA/PMA, Tormach/Haas dealer, hardware-startup matchmaking, paid Facebook). -3 because Tormach/Haas dealer partnership is uncertain until landed. |
| Revenue mechanics | 15 | 13/15 | $29/mo + $199 kit fits the wallet of a $300K-revenue shop comfortably. Hardware margin lets the kit pay for itself. ACV math credible. |
| Time to first revenue | 10 | 7/10 | Hardware lead time pushes first-revenue 6–10 weeks past pure-SaaS. Pre-sale during build mitigates. |
| Defensibility | 10 | 7/10 | Per-shop AI classifier accumulates per-shop data → switching cost compounds month over month. Hardware is commodity but the install + classifier is the moat. -3 because chain incumbents could go down-market. |
| **Total** | **100** | **80/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` (firmware + IoT + ML classifier + iOS/Android app). `domain-expertise-required` — strong asset to have a co-founder or advisor who has actually owned/run a small CNC shop. The product details (which signal corresponds to which operation, what shop owners actually call things, which forums they read) come from operator experience, not research.

### Key assumptions to validate (3–5)

1. **Assumption:** Clamp-on CT + IMU classifier reaches >90% machine-state accuracy after ~50 owner-labeled events. **How to test:** Two-week instrumented deployment in 3 friendly shops; measure inference accuracy vs. ground-truth taps.
2. **Assumption:** Solo / 1–3 person shop owners will pay $29/mo + $199 kit for monitoring + cycle times. **How to test:** 30 cold outreach to NTMA-member 1-5-employee shops with a 3-minute Loom and the price; need ≥15% verbal commit.
3. **Assumption:** Hardware can be installed in 5 minutes by the owner without a service tech. **How to test:** Mail kits to 10 shops, time installs from unbox to first data point. Need median ≤10 min.
4. **Assumption:** Tormach or Haas dealer channel will bundle PartPace. **How to test:** 5 dealer meetings in weeks 4–8; need ≥1 LOI.
5. **Assumption:** Quote-vs-actual is the upsell driver to Pro tier. **How to test:** Survey first 30 paid customers; track Pro upgrade rate after the feature ships.

### Risk flags

1. **Hardware ops drag.** Fulfillment, returns, dead-on-arrival rate. Mitigated by single-SKU + 200-unit first run via US CM. Revisit ops at 1,000 units.
2. **Incumbent down-market move.** MachineMetrics or Caddis ships a "lite" SKU for solo shops. Defense is operator-UX simplicity + the hardware install moat (they're a software company, not a hardware company).
3. **Misclassification on weird machines.** Old retiree-owned Mazaks / Hardinge lathes have unusual electrical signatures. Mitigated by per-shop classifier training plus a manual-override path.
4. **Onshoring narrative reversing.** Tariff policy could shift, demand softens. Mitigated by the fact that solo shop margin pain is a permanent condition independent of macro.
5. **Liability framing.** Clamp-on sensor near machine high-voltage feed. Standard CT sensor is non-invasive but the install instructions need a clear "open cabinet only with main breaker off" warning. UL listing for the sensor box ($8K-$15K test) is recommended pre-launch even though not strictly required.

## 14. Structured verdict

```
Score:                  80/100
Verdict:                STRONG GO
Confidence:             Medium
Best-fit builder:       2-person team — one embedded/firmware/IoT lead, one full-stack/AI
                        lead. Domain advisor (former or current CNC shop owner) on retainer.
                        Mechanical contractor for enclosure design (8–10 weeks part-time).
Time to revenue:        12–14 weeks from start to first paying solo shop; pre-sold during
                        the 5-month build.
Capital to launch:      $25–$35K ($15K tooling + 200-unit first run + $5K UL pre-cert +
                        $5–$10K trade-show or paid forum sponsorship).
Top 3 assumptions to validate first:
  1. >90% state classification after 50 labels in 3 friendly-shop deployments — weeks 4–6
  2. ≥15% verbal commit at $29/mo + $199 kit from 30 cold-outreach shop owners — weeks 1–3
  3. ≥1 dealer LOI (Tormach, Haas SoCal, Doosan, or a regional dist.) — weeks 4–8
Kill criteria:
  - Abandon if classifier accuracy stays below 80% after 100 labels in friendly-shop tests
  - Abandon if <10% of 30 cold outreach calls show $29/mo + $199 verbal commit
  - Abandon if MachineMetrics or Caddis ships a $40/machine/month single-machine SKU before
    v1 launch
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Cold-call 30 NTMA / PMA member shops with 1–5 employees. Pitch $29/mo + $199 kit in a 3-minute Loom. Track verbal commits.
- **Day 3:** Email Tormach, Haas Automation regional dealer leads (SoCal, Northeast, Texas), Doosan, and Tormach Authorized Service Providers. Schedule discovery calls.
- **Day 4:** Post a one-page benefits summary in r/Machinists, r/CNC, and the Practical Machinist Shop Management sub-forum. Track DMs and signup-form clicks.
- **Day 5:** Decision. **Go** if (a) ≥6 of 30 outreach calls verbally commit AND (b) ≥1 dealer accepts a follow-up partner discussion AND (c) ≥30 forum signups. **No-go** if any of the three fails.
