---
title: "RackQ — per-rack live availability sensors for indie gyms"
slug: rackq-gym-availability-iot
date: 2026-05-02
category: IoT+SaaS / US Independent Gyms + CrossFit + Climbing
complexity: Medium
score: 78
verdict: GO
confidence: Medium
oneLiner: "Stick-on IoT sensors + member app showing live per-equipment availability and utilization analytics for US indie gyms."
tags:
  vertical: HealthTech
  model: IoT+SaaS
  geography: US
  secondary: [Embedded, Hardware-plus-SaaS, Consumer, AI-agent, SMB, Mechatronics]
axes:
  problem: 15
  demand: 12
  build: 11
  distribution: 12
  revenue: 12
  time: 7
  defensibility: 9
founderFit: [technical-heavy]
featured: false
---

# RackQ — per-rack live availability sensors + member app for US CrossFit boxes, climbing gyms, and indie iron-houses

## 1. One-liner

Stick-on IoT sensors and a member app showing live per-equipment availability plus utilization analytics for US CrossFit boxes, climbing gyms, and independent gyms.

## 2. Trend signal — why now?

**The whole-gym crowd meter became table stakes for chains and useless for independents.** Planet Fitness shipped its Crowd Meter (color-coded green/yellow/red whole-gym occupancy from check-in turnstile data); Anytime Fitness has the Gym Busy Meter; Akton, Zenoti, and PerfectGym ship occupancy as a chain-tier feature. *None of it tells you whether the squat rack is free.* The user complaint is structurally below the resolution of every existing tool: chain CMS know the gym is "70% full" but not whether *Rack 3* is in use or *Bench 2* opened up four minutes ago.

**The squat-rack-wait complaint is the most-Googled gym pain point in fitness.** Recurring industry articles describe lifters at peak hours (5 PM–8 PM) spending more time waiting than lifting and constantly mid-workout-rerouting because someone took the rack. Reddit r/Fitness, r/weightroom, r/crossfit, r/climbing threads from Q1 2026 keep cycling the same complaint. Chain solutions don't reach the indie segment, and the indie segment is where the squat-rack-heavy training culture lives.

**The independent fitness market is where the heavy users are.** ~4,000 US CrossFit affiliate boxes (CrossFit reported ~9,900 paying affiliates globally as of early 2025, ~40% US per market.us). ~600 US climbing gyms (Climbing Business Journal). Plus thousands of independent iron-houses, Olympic-lifting clubs, BJJ/MMA gyms, F45 franchisees, neighborhood barbell clubs. Boutique fitness market $26.2B in 2025 with ~17% post-COVID growth. The user behavior — show up, fight for equipment — is the cultural norm of the segment.

**Hardware finally got cheap enough to instrument every rack and bench.** PIR motion sensor $1.50; HX711 + load cell $4 (detects rack-loaded vs unloaded); ESP32-C3 BLE Mesh + battery $6; coin-cell + magnetic mount $1.50. Per-equipment node BOM under $15. A 30-rack/bench/cable-station gym can be fully instrumented for under $500 of hardware.

**The AI layer turns sensors into useful answers.** Naive "PIR went off" is noise. AI ingesting PIR + accelerometer + load-cell signature distinguishes "lifter is using rack" vs "someone walked past" vs "rack got bumped" vs "lifter set up but resting between sets" with high accuracy after a couple weeks of self-labeled examples. Without the AI layer, the product is false-alarm noise on day 3.

**Strong adjacent validation.** Planet Fitness Crowd Meter validated occupancy demand at chain scale. CrossFit affiliates spend $50–$300/mo on Wodify or PushPress for member management — they have a wallet for member-experience tools. Climbing gyms invest heavily in route-tracking apps (Crimpd, Kaya); they'll spend on availability for shared bouldering walls and hangboards too.

Provenance:
  - Signal 1: Planet Fitness Crowd Meter (whole-gym scale) and Anytime Fitness Busy Meter validate occupancy demand; works only at chain turnstile scale; indie segment unserved at per-equipment resolution — https://planetfitness.co.com/pf-app.html + https://www.akton.in/blog/top-gym-apps-with-real-time-gym-occupancy-feature/ — 2026
  - Signal 2: ~4,000 US CrossFit affiliates (~40% of ~9,900 global, market.us 2025), ~600 US climbing gyms (Climbing Business Journal 2024), boutique fitness market $26.2B in 2025 — https://media.market.us/crossfit-statistics/ + https://climbingbusinessjournal.com/gyms-and-trends-2025/ — 2025
  - Signal 3: Per-equipment node BOM <$15 (PIR + HX711 + load cell + ESP32-C3 BLE Mesh + battery); LLM activity-classification at sub-$0.001/decision; full 30-station gym kit BOM under $500 — vendor pricing — 2026
  - Signal 4: Recurring forum complaint pattern — "you'll spend more time waiting for a squat rack than the time it takes you to run three miles"; r/Fitness + r/weightroom + r/crossfit Q1 2026 threads — 2026
  Category: Underserved niche

## 3. The opportunity

The structural gap is that whole-gym occupancy data has the wrong resolution for the squat-rack problem. Three buyer realities:

- **Chains (Planet Fitness, Anytime Fitness, LA Fitness).** Crowd Meter is built into the chain's app via check-in turnstile data. Works for them. Doesn't generalize down — indie gyms don't have turnstiles.
- **Indie gyms (CrossFit boxes, climbing gyms, F45, indie iron-houses).** Members complain about waiting; owners have zero per-equipment utilization data. Buying another squat rack is a $4K decision made on gut feel.
- **Equipment-level resolution.** *Nobody is selling this.* Camera-based gym AI (Tempo, Tonal) embeds in equipment for form coaching, not availability. Sensor-based occupancy products target office hot-desks, not weight rooms.

**RackQ fills the gap with three pieces:**

1. **Sensor pack:** Stick-on combination PIR + accelerometer + load-cell module per equipment station (one per rack, bench, cable station, hangboard, bouldering problem). Magnetic mount on the upright. Coin-cell battery, 18-month life. ESP32-C3 BLE Mesh with a single base hub per gym. 30-station kit at $899; 60-station at $1,499.
2. **Member app:** Floor-plan view of the gym with each station tagged free / in-use / cooling-down (PR rest period). Tap a station to "claim" it (gym-owner-configurable feature) which auto-extends the in-use signal. ETA estimator on currently-occupied stations based on average set duration. Push notifications when a favorite-equipment opens up.
3. **Owner dashboard + AI:**
   - **Utilization heatmap** — per-station, per-hour-of-week. Owner sees that Rack 3 hits 95% utilization 5–7 PM Tuesday–Thursday while Rack 5 sits at 30% — informs floor layout and equipment purchase.
   - **Bottleneck calculator** — "Adding one rack would reduce average wait by 8 min in your peak window."
   - **Activity classifier** — distinguishes "rack in use" vs "rack loaded but not active" vs "false-alarm walk-by" with on-device + LLM-cloud inference.
   - **Member-churn risk** — flags members whose visit-rate dropped after multiple peak-hour wait events.

The 10× UX move is **"the rack you want is free in 4 minutes."** Today the lifter walks across town to the gym hoping; with RackQ they hit it within their warmup window every time.

## 4. Target market

- **Primary customer:** Owner-operator US independent gym, 50–300 members, single location. CrossFit affiliate, climbing gym, indie iron-house, Olympic-lifting club, BJJ/MMA gym with strength-and-conditioning area, F45/Orangetheory franchisee. Annual revenue $200K–$1.5M. Decision-maker is the owner-coach.
- **Why they buy:**
  - "My members complain about waiting for racks every Tuesday at 6 PM. I want to fix it but don't know if buying another rack would actually help."
  - "I lost 4 members last quarter to the bigger gym across town. They told me 'I just couldn't get a workout in during peak hours.'"
  - "I have 8 racks. I have no idea which ones are bottlenecking and which are dead inventory."
  - "I want to charge a peak-hour premium ($10/visit during 5–7 PM) but I need data before my members will accept it."
- **Rough TAM reasoning:** ~4,000 US CrossFit boxes + ~600 climbing gyms + ~3,000 indie iron-houses + ~5,000 boutique strength studios = ~12,500 target locations. At blended $1,000 hardware (one-time) + $39/mo SaaS = $1,200/yr blended ACV including amortized hardware. Realistic 2-yr capture of 0.5–1.5% = 60–190 customers = $70K–$230K ARR; 3% capture = $450K ARR. Multi-location chains and franchise networks push TAM to $1M-$2M ARR realistically; further growth requires adjacent vertical expansion.
- **Why now for them:** Post-COVID member-acquisition costs are higher than ever; retention matters more. Hardware just got cheap. Member experience is the differentiator the indie owner has against the cheap chain across town.

## 5. Product sketch (MVP)

- **Sensor node:** PIR + accelerometer + load-cell stick-on module, magnetic mount, 18-month coin-cell battery, ESP32-C3 BLE Mesh. Single SKU at $25/node retail (one per piece of equipment).
- **Base hub:** One per gym, plugs into wall. BLE Mesh aggregator, Wi-Fi cloud uplink. ~$60.
- **Kit pricing:** $899 for 30-station kit (1 hub + 30 nodes), $1,499 for 60-station, expandable later.
- **5-minute install per node:** Peel adhesive backing or magnetic stick, pair via QR code in owner app, label "Squat Rack 3" or "Lead Wall Section A". Done.
- **Member app:** Floor-plan view, station status, ETA on occupied stations, claim/release tap, favorite-station push alerts. White-labeled for the gym ("CrossFit MountainView", not "RackQ").
- **Owner dashboard:** Live floor-plan heatmap, utilization heatmaps per station per day-of-week, bottleneck calculator, member-churn flag.
- **Activity classifier:** AI distinguishes lifter-active vs lifter-resting vs false-alarm. Trains on the gym's specific equipment over the first 2 weeks via owner-confirmation taps.
- **Auto-checkout timer:** When the lifter steps away for >5 min and load-cell shows unloaded rack, auto-mark station free.
- **Climbing-specific module:** Per-route or per-section availability for bouldering walls, lead routes, hangboards, MoonBoards — different tier of analytics.
- **Multi-location dashboard (v1.1):** For franchise owners and small chains.
- **Peak-pricing recommender:** Suggests $X/visit premium during specific time windows based on historical bottleneck data.

## 6. AI angle — what's load-bearing

AI does three jobs without which RackQ is a noisy PIR + Bluetooth mess:

1. **Activity classification.** Naive PIR + load-cell triggers false alarms 30+ times per peak hour. AI ingests the time-series of PIR + accelerometer + load-cell from each station, classifies as cutting / set / rest / setup / abandoned / false-alarm at >90% accuracy after 2 weeks of in-gym training. Without it, members ignore the app within 3 days.
2. **Bottleneck calculator.** "Should I buy another rack?" is a $4K decision. AI runs queueing-theory simulation across the gym's actual utilization data and answers: "Adding one rack reduces average wait by 7 min during your 5–7 PM peak; ROI ~8 months given your $189/mo membership and historical churn rate." Owner can't get this from a spreadsheet.
3. **Member-churn risk.** AI joins per-member visit logs (from Wodify / PushPress / Mindbody integration) with their personal wait-time exposure to flag members whose visit rate dropped after they hit multiple long-wait events. Owner gets "Maria has waited >8 min for a rack 4 of her last 6 visits — call her" — actionable retention.

Strip the AI and RackQ is a sensor + dashboard. With it, RackQ is the first product that turns "the squat rack is free" into a retention tool.

## 7. Localization angle (if any)

US-first. The CrossFit affiliate culture, climbing-gym density, and squat-rack-driven training culture are most concentrated in the US. EU + UK + Australia have similar but smaller indie segments — sequel markets.

Sequel markets:
- **UK / Ireland** indie strength gyms.
- **Australia** climbing gyms (high density per capita).
- **Brazil + LATAM** CrossFit boxes (huge cultural penetration).

Not v1.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:**
  - **Hardware:** $899 30-station kit one-time, $1,499 60-station, $25/node expansion. Free shipping with annual SaaS commit.
  - **SaaS Solo (single location, ≤30 stations):** $39/mo.
  - **Pro (single location, 31–60 stations + member-churn flag):** $79/mo.
  - **Multi-location (2-5 locations):** $59/mo per location + multi-location dashboard.
- **ACV:** Average customer = single-location CrossFit box at 30 stations × $39/mo × 12 = $468/yr SaaS + $899 hardware (one-time). Blended ACV ~$1,200 first year, ~$500 recurring after.
- **Path to $1M ARR:** ~2,000 customers at blended $500 recurring ACV = $1M. Of ~12,500 target locations, ~16%. Hard but credible with channel partnerships.
- **Path to $5M ARR:** Requires adjacent expansion — chain franchise channel (F45, Orangetheory franchisees), EU/UK sequel markets, equipment-utilization-data marketplace.
- **Hardware margin:** 50–60% on $899 kit at small volume (BOM ~$300 + fulfillment), 70%+ at 1,000-unit volumes. SaaS margin 88%+.
- **Expansion path:**
  1. **Wodify / PushPress / Mindbody integration** — sell as add-on through their partner programs.
  2. **CrossFit-affiliate-network bundle** — CrossFit HQ approves recommended-vendor status; affiliates buy through a member-discount channel.
  3. **Equipment-utilization data marketplace** — Rogue Fitness, Eleiko, Rep Fitness pay for anonymized utilization data on which racks/benches actually get used (R&D input).
  4. **Member-side B2C app** — once enough gyms install, members get the cross-gym version showing "best gym to work out at right now in your area."

## 9. Go-to-market wedge — first 100 customers

- **Wodify / PushPress / SugarWOD partner programs.** All three have CrossFit-focused partner directories with thousands of affiliate-box subscribers. Get listed as a recommended add-on. ~$3K-$5K partnership setup; expect 30–60 paid customers per signed partner in 12 months.
- **CrossFit affiliate Facebook groups + Reddit r/crossfit.** Groups like "CrossFit Affiliate Owners," "CrossFit Box Owners," "Affiliate Owner Chat" total ~30K affiliate-owner members. Post real before/after data from 5 friendly-box pilots. Realistic 50 trial signups per content piece, 15% close = 7–8 paid per post.
- **CrossFit Games + The Affiliate Gathering events.** Annual CrossFit Games (Madison, August) + The Affiliate Gathering (Phoenix). Booth + live demo. ~$8K per event, expect 20–40 paid customers per event.
- **Climbing-gym channel via CWA (Climbing Wall Association).** ~600 US climbing gyms, single trade association. Sponsor CWA Summit annual conference (~$10K). 200 attendees, 5–10% close = 15–25 paid customers per event.
- **Influencer-channel via barbell-coach YouTubers.** Mark Rippetoe (Starting Strength), Alan Thrall, Brian Alsruhe — 100K-500K subscriber channels with audiences of indie-gym owners. Sponsored "I instrumented my whole gym with RackQ" video. ~$3K per creator, 100 trial signups per video, 15% paid.

## 10. Build complexity — justification

**Medium.** Three workstreams: (1) hardware (off-the-shelf PIR + HX711 + load cell + ESP32-C3 BLE Mesh + injection-molded clamshell — 5–7 weeks for a hardware lead, ~$15K NRE for tooling, 200-kit run via US contract manufacturer); (2) firmware + BLE Mesh provisioning + low-power sleep + 18-month battery target (4–6 weeks); (3) phone app + AI activity classifier + owner dashboard (Next.js / Flutter + Supabase + FastAPI + Claude/GPT for the bottleneck calc and member-churn explanations — 8–10 weeks for a full-stack/AI lead). Total estimated 5 months for a 2-person technical team.

Not Low: hardware ops + 18-month battery target + BLE Mesh provisioning at scale = real Medium-complexity work. Not High: nothing is research-grade — sensors are commodity, AI is well-understood signal classification, no novel ML.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Non-camera occupancy (PIR + load + accel) sidesteps gym-camera privacy concerns. FCC Part 15 for the BLE radio. No regulatory pre-approval. |
| Ethical — no harm / dark patterns | ✅ | Net positive — improves member experience and gives owners real data for equipment investment. |
| Market exists (evidence above) | ✅ | ~12,500 target indie locations; Planet Fitness Crowd Meter validates occupancy demand; recurring forum complaint pattern. |
| 1–5 person team can build this | ✅ | 2-person team in 5 months for v1. |
| Launchable with <$50K / ₹40L | ✅ | $25–$35K ($15K tooling + 200-kit first run + $5K FCC pre-cert + $5–$10K conference booth or paid forum sponsorship). |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 15/20 | Real recurring complaint but ranks below "I need a coach" or "I need members" for the owner. -5 because the owner can survive without solving it; the pain is felt by the member, not the buyer. |
| Demand evidence | 15 | 12/15 | Crowd Meter category validation + recurring forum complaint pattern. -3 because direct $39/mo + $899 SMB-owner paying signal at the indie tier is inferred not measured. |
| Build feasibility | 15 | 11/15 | Off-the-shelf sensors + BLE Mesh + standard ML. Hardware ops + 18-month battery target are real work. |
| Distribution clarity | 15 | 12/15 | Five named channels (CrossFit partner programs, FB groups, CrossFit Games, CWA, YouTube influencers). -3 because partner-program landings take time. |
| Revenue mechanics | 15 | 12/15 | Wallet fits ($899 kit + $39/mo for a $400K-revenue box). -3 because TAM cap on pure indie segment limits raw $5M ceiling. |
| Time to first revenue | 10 | 7/10 | Hardware lead time pushes first revenue 6–10 weeks past pure-SaaS. Pre-sale during build mitigates. |
| Defensibility | 10 | 9/10 | Per-gym AI classifier + accumulating utilization data + member-churn-risk integration with Wodify/PushPress create real switching cost; CrossFit-affiliate channel is a moat. |
| **Total** | **100** | **78/100** | |

(GO, not STRONG GO. Honest scoring: pain is on the member-experience side and the buyer is the owner — slight friction. TAM cap on pure indie segment also caps the upside.)

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` (firmware + BLE Mesh + AI + multi-tenant SaaS). Strong asset to have a co-founder who is or has been an indie gym owner — the product details (which equipment matters, what owners care about, what the squat-rack culture looks like) come from operator experience.

### Key assumptions to validate (3–5)

1. **Assumption:** Indie gym owners will pay $899 + $39/mo for per-equipment availability + utilization analytics. **How to test:** 30 cold outreach to CrossFit box owners + climbing gym owners + indie iron-house owners weeks 1–4; need ≥15% verbal commit on a pilot.
2. **Assumption:** Activity classifier reaches >90% accuracy after 2 weeks of in-gym labeling. **How to test:** Build prototype, deploy in 3 friendly gyms across different equipment loadouts; measure classifier accuracy vs. owner-confirmed ground truth.
3. **Assumption:** Members actually use the app and value the live availability. **How to test:** Survey first 30 members after 60 days of pilot deployment; track DAU/MAU ratio.
4. **Assumption:** Wodify / PushPress / SugarWOD will accept a recommended-vendor partnership. **How to test:** Outreach to all three in weeks 4–8; need ≥1 LOI.
5. **Assumption:** Bottleneck calculator drives equipment-purchase decisions worth a $79/mo Pro upgrade. **How to test:** Survey first 30 paid customers after 90 days; track Pro upgrade rate.

### Risk flags

1. **TAM ceiling.** Pure-indie segment caps below $2M ARR. Mitigation requires successful franchise + sequel-market expansion.
2. **18-month battery target risk.** If sensor power-management slips, replacement burden kills the product. Mitigated by PIR-driven wake-on-event design + over-spec'd battery.
3. **Network-effect-light buyer.** Single-gym install delivers value day 1, but cross-gym member app needs density to matter. Mitigated by white-labeled per-gym apps in v1; cross-gym aggregator is v2.
4. **Hardware ops drag.** Single-SKU hardware ops at small volume is real. Mitigated by 200-unit first run via US CM.
5. **CrossFit franchisor risk.** CrossFit HQ has had affiliate-fee controversies (paying affiliates dropped 2024-2025). Mitigated by spreading channel risk across CrossFit + climbing + indie segments.

## 14. Structured verdict

```
Score:                  78/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       2-person team — one embedded/firmware/IoT lead, one full-stack/AI
                        lead. Domain advisor (active CrossFit box owner or climbing gym
                        operator) on retainer.
Time to revenue:        12–14 weeks from start to first paying gym; pre-sale to 5 gyms
                        during the 5-month build.
Capital to launch:      $25–$35K ($15K tooling + 200-kit first run + $5K FCC pre-cert
                        + $5–$10K CrossFit Games / CWA Summit booth).
Top 3 assumptions to validate first:
  1. ≥15% verbal commit at $899 + $39/mo from 30 cold-outreach indie gym owners — weeks 1–4
  2. >90% activity-classifier accuracy in 3 friendly-gym 14-day deployments — weeks 4–8
  3. ≥1 partner LOI (Wodify, PushPress, SugarWOD) — weeks 4–8
Kill criteria:
  - Abandon if classifier accuracy stays below 75% after 3 friendly-gym deployments
  - Abandon if <10% verbal commit from 30 cold-outreach owners
  - Abandon if Wodify or PushPress ships an own-brand availability sensor SKU before v1
    launch
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Cold-outreach 30 indie gym owners (CrossFit affiliate directory, Climbing Business Journal directory, Olympic-lifting clubs). Pitch $899 + $39/mo with 3-minute Loom demo. Track verbal commits.
- **Day 3:** Email Wodify, PushPress, SugarWOD partner-program leads with one-page co-marketing pitch. Track meeting acceptances.
- **Day 4:** Email CWA + CrossFit HQ recommended-vendor leads. Schedule discovery calls.
- **Day 5:** Decision. **Go** if (a) ≥6 of 30 owners verbally commit AND (b) ≥1 partner accepts a follow-up AND (c) ≥1 association/HQ schedules. **No-go** if any of the three fails.
