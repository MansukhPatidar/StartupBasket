---
title: "DhoopProof — performance proof desk for solar installers"
slug: solar-performance-proof
date: 2026-07-08
category: CleanTech / India — Small Residential Rooftop Solar Installers (performance-proof & AMC enablement)
complexity: Medium
score: 74
verdict: GO
confidence: Medium
oneLiner: "Sends every rooftop customer a trusted monthly 'your solar is working' report so small installers stop drowning in 'not generating' calls."
tags:
  vertical: CleanTech
  model: SaaS
  geography: India
  secondary: [WhatsApp-first, Multilingual, AI-agent, SMB, Solar, Post-install]
axes:
  problem: 15
  demand: 12
  build: 11
  distribution: 12
  revenue: 12
  time: 7
  defensibility: 5
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# DhoopProof — performance proof desk for solar installers

## 1. One-liner

Sends every rooftop customer a trusted monthly "your solar is working" report so small installers stop drowning in "not generating" calls.

## 2. Trend signal — why now?

India put **32 lakh households on rooftop solar** through PM Surya Ghar as of March 2026, and the market is 20.84 GW growing at 18.4% CAGR. That flood of new residential systems just met the ugliest number in the industry: **"98% of solar rooftop owners have no idea their system is underperforming."** The system is a black box. The bill creeps up, the homeowner blames the installer, and there's no data to settle it.

That fight is now hitting courts. On **July 6, 2026** — two days before I wrote this — a District Consumer Disputes Commission in Vizianagaram ordered a renewable-energy firm to pay homeowner **Ijjada Vivekananda ₹25,265** because his rooftop system "produced far less electricity than promised" and he had nothing to prove otherwise except his own bill. Multiply that risk across a long tail of small installers who each did 20–200 jobs on thin margins, have no monitoring discipline, and can't afford a legal fight per unhappy customer.

Meanwhile the enabling piece quietly landed: **Growatt shipped a token-based open API in 2025**, and the other volume brands in India (Solis, Deye, Luminous, SolarEdge, Sungrow) expose per-plant generation over cloud APIs, with mature community libraries proving the data pull is cheap and reliable. Plain kWh + an expected-yield model + a cheap LLM = a homeowner-readable report. The data exists; nobody's packaging it for the small installer as a *trust artifact*.

Provenance:
  - Signal 1 (demand): "98% of rooftop owners have no idea their system is underperforming"; fresh consumer-court judgment fining installer ₹25,265 for underperformance — https://www.businesstoday.in/latest/trends/story/rooftop-solar-failed-to-deliver-promised-savings-court-orders-renewable-energy-firm-to-pay-rs25265-541205-2026-07-06 — 2026-07-06
  - Signal 2 (feasibility): Growatt token-based open API (2025) + community libraries for multi-brand inverter data — https://pypi.org/project/growattServer/ — 2026-07 (accessed)
  - Signal 3 (economic): India rooftop solar 20.84 GW at 18.4% CAGR; SolarSquare raising ~$60M at ~$500M; AMC market real at ₹1.5–8K/kW/yr with "generation performance report" a standard line item — https://techcrunch.com/2026/05/23/solarsquare-in-talks-to-raise-up-to-60m-as-indias-rooftop-solar-market-draws-major-vc-interest/ — 2026-05-23
  Category: Tech-unlock

## 3. The opportunity

Two adjacent tools already exist and both miss this cut:

- **Full installer OS platforms** (Solar Ladder, seed $1.3M; SurgePV) — CRM + proposal + design + O&M dashboards sold per-seat to the installer's *back office*. Great for a 3D quote, useless as a thing the *homeowner* trusts. The homeowner never sees them.
- **Inverter-brand apps** (Growatt ShinePhone, SolarEdge Monitoring) — hardware-locked, English, engineer-facing graphs. A retired schoolteacher in Coimbatore does not read a per-string I-V curve. And if the installer put Growatt on 30 homes and Solis on 20, there's no single view.

The gap in the middle: **a homeowner-facing proof-of-performance layer, brand-agnostic, in the homeowner's language, delivered over WhatsApp, priced per-plant for the installer.** The insight is that the buyer (installer) and the reader (homeowner) are different people, and nobody has built the artifact for the reader. It converts the installer's biggest liability — the "not generating" phone call and the consumer-court exposure — into a monthly touchpoint that also justifies an AMC renewal. That's a 10× better outcome than a dashboard the customer never opens.

## 4. Target market

- **Primary customer:** Owner-operators of small/mid Indian residential rooftop solar installers — 20 to ~500 completed installs, lean teams of 3–15, no in-house software. Tier-1/2/3 cities. Not the SolarSquare/Tata tier (they build their own).
- **Why they buy, in their words:** *"Vendor ghosting post-installation"* and *"contractors becoming unresponsive after advance payment"* are the top complaints against them — but the honest ones are drowning: every dusty month a batch of customers calls saying "bijli kam ban rahi hai" and the installer sends a guy on a bike to check a system that's actually fine. They want to (a) kill nuisance calls with proof, (b) catch the *real* faults before a Google 1-star or a consumer-court notice, (c) finally sell AMC — which they can't, because they can't produce the "generation performance report" the AMC is supposed to include.
- **Rough TAM reasoning:** India has thousands of MNRE-empanelled / DISCOM-registered residential installers. If even 5,000 small installers each carry 200 live plants, that's ~1M monitorable homes — and PM Surya Ghar is adding more monthly toward a 1-crore-household target. I don't need the whole market; a few thousand installers is a full business.
- **Why now for them:** Their install volume just 3–5×'d off subsidy, their post-sale service burden scaled with it, and the July 2026 court ruling turned "annoyed customer" into "financial liability." The pain moved from irritating to expensive this quarter.

## 5. Product sketch (MVP)

- Installer onboards a plant in 2 minutes: pick inverter brand, paste the plant's API credentials (or homeowner OAuth), enter system kW and pin-code.
- DhoopProof pulls daily generation, blends it with pin-code irradiance/weather, and computes **expected-vs-actual** for that specific roof — no generic benchmarks.
- **Monthly WhatsApp report to the homeowner**, in their language: "Your 5 kW system made 612 units this month — 96% of what it should in July. ₹4,300 saved. All healthy. — from [Installer Name]." Installer-branded.
- **Early-fault alerts to the installer**, not the homeowner: string dropout, inverter offline 3+ days, sustained soiling loss >15%, so the fix happens before the complaint.
- **One dashboard across all brands** — Growatt, Solis, Deye, Luminous, SolarEdge in a single plant list with a red/amber/green health column.
- **Consumer-dispute pack, on demand:** a timestamped generation history + expected-yield methodology PDF the installer hands to a lawyer or DISCOM if a "not generating" claim escalates.
- **AMC renewal nudge:** flags plants approaching AMC expiry and drafts the renewal message with the year's performance summary attached.

## 6. AI angle — what's load-bearing

Two places AI does real work, not decoration:

1. **The report writer.** Raw kWh + weather + expected-yield delta → a paragraph a 60-year-old non-technical homeowner in Marathi or Tamil actually trusts and doesn't panic over. Tone matters: "healthy," "slightly low this month due to monsoon cloud — normal," "we've flagged this for a technician." Templating this across brands, languages, seasons, and fault types by hand is exactly the brittle work an LLM collapses.
2. **The anomaly triage.** Separating *real* underperformance (fault) from *expected* dips (monsoon, winter, genuine soiling that a cleaning fixes) so the installer isn't buried in false alarms — the thing that kills every naive threshold-alert system. LLM + a light expected-yield model reads the pattern and classifies "dispatch a tech" vs. "reassure the customer" vs. "sell a cleaning."

Remove the AI and you have a raw kWh CSV per brand that the homeowner can't read and the installer won't triage. The product is the translation and the triage.

## 7. Localization angle

This is India-first by construction, not by decoration:

- **Language/script:** the homeowner report must land in Hindi, Marathi, Tamil, Telugu, Gujarati, Kannada — the reader is not English-comfortable. This is the whole moat vs. the brand apps.
- **Channel:** WhatsApp, not email, not a portal login. The homeowner will never install an app; they'll read a WhatsApp forward from "their solar guy."
- **Pricing:** ₹30–60/plant/month works in India where a $10/plant Western SaaS can't. The installer bundles it into an AMC they charge ₹3,000–12,000/year for.
- **Brand mix:** India's residential fleet skews Growatt/Solis/Deye/Luminous — different from the SolarEdge/Enphase mix the Western fleet tools (Sunvoy) index on. Getting the *Indian* brand coverage right is a distribution edge.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** ₹40/plant/month, billed to the installer, minimum ₹1,500/mo (covers ~40 plants). Installer marks it up inside a ₹3–12K/yr AMC or eats it as a retention cost.
- **ACV:** an installer with 200 live plants = ₹8,000/mo = ~₹96,000/yr (~$1,150). Small installers with 40–60 plants ~₹24,000/yr.
- **Rough math to $1M ARR (~₹8.3 crore):** ~700 installers averaging 250 plants at ₹40 = ₹70L/mo ≈ ₹8.4 crore/yr. Or fewer, larger installers.
- **Rough math to $5M ARR:** ~3,000 installers, OR move up-market to C&I/MSME rooftop (bigger systems, ₹150–300/plant, real O&M money) once residential is proven, OR add a per-report consumer-dispute-pack and cleaning-lead-referral revenue line.
- **Expansion path:** plants-per-installer grows automatically as they install more (usage-priced, net-negative churn baked in). Then upsell: dispute packs, DISCOM/net-meter follow-up nudges, cleaning-vendor marketplace take-rate, and a homeowner-paid "premium alerts" tier.

## 9. Go-to-market wedge — first 100 customers

- **Scrape the MNRE / DISCOM empanelled-installer lists** (public, state-wise, thousands of names with phone numbers). These are exactly the small installers. Cold-WhatsApp them a 40-second Loom showing *their own* brand logo on a sample homeowner report. Expect small % reply — but the list is long and free.
- **Pilot free on 25 plants.** Onboarding is API-credential paste; I can light up a real installer's fleet in an afternoon and let their next month's reports sell it. "Show, don't tell" is trivial here because the data already exists.
- **Ride the consumer-court fear.** The July 2026 ruling is a marketing gift — one WhatsApp forward ("here's the ₹25,265 case; here's how you never get one") to installer groups. Every state has active WhatsApp/Telegram installer communities; seed the dispute-pack angle there.
- **Inverter distributor channel.** Growatt/Solis/Luminous regional distributors sell to hundreds of these installers and want stickier customers — co-market as a value-add. One distributor relationship = a batch of installers.
- **Partner with AMC-hungry installers first.** Target the ones already trying to sell AMC and failing on the "report" deliverable — they convert fastest because DhoopProof unlocks revenue for them, not just cost.

## 10. Build complexity — justification

**Medium.** Off-the-shelf: inverter cloud APIs (Growatt token API, community libs for Solis/Deye/Luminous), WhatsApp Business API, LLM for reports/triage, standard web stack. Custom work is the annoying-but-bounded part: normalizing 5–6 brand APIs into one schema (each is a different, sometimes flaky, undocumented-in-parts cloud), a defensible per-roof expected-yield model (irradiance × derate — not research, but must be *credibly accurate* or the reports lose trust), and multilingual report quality. A pair can ship a 2-brand, 2-language v1 in ~10–14 weeks; full brand/language coverage is the following quarter.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Reading a plant's own generation data with installer/owner consent. No regulated activity. |
| Ethical — no harm / dark patterns | ✅ | The opposite — it gives homeowners honest visibility they currently lack. |
| Market exists (evidence above) | ✅ | 32 lakh new systems, "98% don't know," live court case, AMC market with the exact deliverable gap. |
| 1–5 person team can build this | ✅ | Medium build, off-the-shelf APIs, no ops fleet. |
| Launchable with <$50K / ₹40L | ✅ | Software + API costs. Distribution is cold-WhatsApp + free pilots. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 15/20 | Real and now court-priced pain for installers, but it's a *fear/reputation* pain, not a daily cash-bleed — some installers will ignore it until burned. |
| Demand evidence | 15 | 12/15 | "98% unaware" stat, fresh judgment, AMC "report" gap, ghosting complaints. Strong signals; the specific *installer buying* behavior for this exact SKU is still inferred. |
| Build feasibility | 15 | 11/15 | Off-the-shelf APIs, but multi-brand normalization + a *trustworthy* expected-yield model + multilingual quality is real engineering discipline. |
| Distribution clarity | 15 | 12/15 | Public empanelled-installer lists + free-pilot + distributor channel is concrete. WhatsApp cold-outreach reply rates uncertain. |
| Revenue mechanics | 15 | 12/15 | Usage-priced, net-negative churn, clear AMC attach. ACV is modest — needs volume or up-market move for $5M. |
| Time to first revenue | 10 | 7/10 | Free pilot → paid after the first month's reports land. ~6–10 weeks realistic; installer buying cycles are slow-ish. |
| Defensibility | 10 | 5/10 | Execution moat + brand-coverage + installer relationships. Solar Ladder/SurgePV could bolt on a homeowner report; the language + WhatsApp + per-plant-pricing focus is the edge, not a wall. |
| **Total** | **100** | **74/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` (multi-brand API integration is the core lift) · `domain-expertise-required` (must understand PV yield, soiling, net-metering, and how Indian installers actually sell AMC).

### Key assumptions to validate (3–5)

1. **Assumption:** Small installers will pay ₹40/plant/mo to reduce service calls and enable AMC. **How to test:** 20 installer interviews + a paid pilot; kill if <5 of 20 will put a card down after seeing their own report.
2. **Assumption:** The volume brands' APIs (esp. Solis/Deye/Luminous) are reliably accessible at the plant level without per-plant friction. **How to test:** integrate the top 3 brands and pull data from 50 real plants before writing a line of GTM.
3. **Assumption:** A per-roof expected-yield model can be accurate enough (±~8%) that reports build trust instead of triggering disputes. **How to test:** backtest against 100 plants with 6+ months of history; measure predicted-vs-actual error.
4. **Assumption:** Homeowners open and trust a WhatsApp report enough that it actually deflects calls. **How to test:** run 25 plants for 2 months; measure inbound "not generating" call rate vs. a control cohort.

### Risk flags

1. **Platform dependency:** Built entirely on third-party inverter cloud APIs. Growatt/Solis can rate-limit, break, or close access. Mitigate by breadth (many brands) and, later, optional read-only dataloggers.
2. **Incumbent bolt-on:** Solar Ladder or SurgePV adds a homeowner WhatsApp report and undercuts the whole wedge. The defense is speed, Indian-brand + language depth, and owning installer relationships before they notice.
3. **Weak-pain-until-burned:** Reputation/legal fear is a slower buy than a cash-bleed. Risk that installers nod and don't pay until *their* court notice arrives — lengthening the sales cycle.
4. **Data-accuracy liability:** If a report says "healthy" and the system was actually failing, DhoopProof inherits blame. Needs conservative alerting and clear methodology disclaimers.

## 14. Structured verdict

```
Score:                  74/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder comfortable with flaky third-party APIs, paired with (or advised by) someone who has sold residential solar/AMC in India
Time to revenue:        6–10 weeks (free pilot → paid after first monthly report)
Capital to launch:      ₹5–8 lakh ($6–10K)
Top 3 assumptions to validate first:
  1. Installers will pay ₹40/plant/mo — 20 interviews + paid pilot, kill if <5/20 convert
  2. Top-3 Indian inverter-brand APIs are reliably pullable — integrate + pull 50 real plants first
  3. Expected-yield model hits ±8% — backtest 100 plants with history before GTM
Kill criteria:
  - Abandon if <25% of 40 cold-outreach installers agree to a free pilot
  - Abandon if the expected-yield model error exceeds ~12% and reports trigger more disputes than they deflect
  - Abandon if two of the top-3 volume brands lock or price out API access with no datalogger fallback
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Integrate the Growatt token API + one more brand. Pull real generation from 30–50 live plants (borrow an installer friend's fleet or use public/demo plants). Build the crude expected-yield model and eyeball predicted-vs-actual.
- **Day 3–4:** Generate 10 sample homeowner WhatsApp reports in Hindi + one regional language. Cold-WhatsApp 40 empanelled small installers with a Loom of a report carrying *their* brand. Book 8–10 calls.
- **Day 5:** On the calls, show the report and ask for a ₹1,500/mo pilot commitment (soft — "start free, pay after month one"). **Go if ≥5 of 10 say yes and the model error is under ~10% on the test fleet. No-go if installers shrug at the report or the API pulls are too flaky to trust.**

The falsifiable outcome: **≥5/10 installers commit to a pilot AND expected-vs-actual error <10% on a 50-plant test fleet.** Miss either and it's not ready.
