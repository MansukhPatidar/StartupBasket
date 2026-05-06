---
title: DeckLog — Voice-AI eVTR copilot for US fishing captains
slug: decklog-voice-evtr-fisher
date: 2026-05-07
category: Maritime SaaS / US Gulf + South Atlantic Federally-Permitted Commercial Fishing Captains
complexity: Medium
score: 78
verdict: GO
confidence: Medium
oneLiner: Voice-first app turning a 90-second dock dictation into a filed federal eVTR plus state trip ticket.
tags:
  vertical: Logistics
  model: SaaS
  geography: US
  secondary: [Voice-first, AI-agent, Compliance-driven, SMB, Solo-builder, Maritime, Offline-first, Regulatory-arbitrage]
axes:
  problem: 16
  demand: 11
  build: 11
  distribution: 11
  revenue: 11
  time: 8
  defensibility: 6
founderFit: [technical-heavy, domain-expertise-required, sales-heavy]
featured: false
---

# DeckLog — Voice-AI eVTR copilot for Gulf & South Atlantic commercial fishing captains

## 1. One-liner

Voice-first app turning a 90-second dock dictation into a filed federal eVTR plus state trip ticket.

## 2. Trend signal — why now?

NOAA published the **Comprehensive Commercial Electronic Logbook Amendment** in the Federal Register on Nov 20, 2025 (90 FR 52349). Comment period closed Jan 20, 2026. It will end paper logbooks for federally-permitted Gulf of America Reef Fish, South Atlantic Snapper-Grouper, Atlantic Dolphin-Wahoo, and Coastal Migratory Pelagic vessels — and force them onto eVTR within 48 hours of trip end. Final rule is expected mid-2026. This is the single biggest forced workflow change for thousands of small commercial captains in a decade.

The captains are not happy about it. Direct quotes from the public record:

- *"It's great when it works, a nightmare when it doesn't."* — Richard Cornell (commercial fisherman, National Fisherman, 2024)
- *"Mine failed to report for five trips or whatever it was. Keep your own personal very detailed logs because that's what saved me from getting a ticket."* — Mike Wild, longliner (National Fisherman)
- *"They should only release a program when it is compatible with all phones and products."* — Shelly Fleming Wigglesworth, Maine commercial fisherman
- *"Wish it would remember your password or allow touch sign in."* — Adam Puslys, Massachusetts scalloper
- *"For captains who are tech-averse, webinar training has already lost a large component of the target audience."* — Charter Fisherman's Association Port Ambassador report

Free NOAA-approved apps (eTrips Mobile v2, VESL by Bluefin Data) cover the bare regulatory minimum and not much else. They demand typing on a 4-inch screen in a salt-spray environment, lose data offline, don't talk to state trip-ticket programs (TX, LA, FL, NC), and dump captains at year-end with no Schedule F-friendly export. Logbooks are now the **#1 cause of permit-renewal delay** in the Southeast region (NOAA Fisheries Southeast Permits Office).

Meanwhile, two enabling shifts converged in the last 18 months:

- **Starlink Maritime** is now standard kit on commercial fishing vessels from 32-ft Bristol Bay gillnetters to 300-ft trawlers (National Fisherman, 2024). The "no signal offshore" excuse is dying.
- Real-time speech AI (OpenAI Realtime API, ElevenLabs Conversational, Whisper-large-v3-turbo) hit production-grade accuracy for noisy, accented, jargon-heavy speech at <$0.01 per trip. A captain can now dictate a complete trip — "twenty-three red snapper boxed at four-eighteen, gear was vertical line, set start at oh-six-fourteen forty seconds north…" — and ship parsed, validated data to NOAA in under 90 seconds.

Provenance:
  - Signal 1: NOAA Federal Register, Nov 20 2025 — Comprehensive Commercial Electronic Logbook Amendment forcing Gulf+S.Atlantic paper-logbook permit holders onto mandatory eVTR; comment period closed Jan 20 2026; permit-renewal blocked when logbooks late — https://www.federalregister.gov/documents/2025/11/20/2025-20491/electronic-logbook-reporting-in-commercial-fisheries-of-the-gulf-of-america-and-atlantic — 2025-11
  - Signal 2: National Fisherman captain interviews — verbatim "great when it works, nightmare when it doesn't," "mine failed to report for five trips," tech-averse captains losing webinar training; existing free apps (eTrips, VESL) cover compliance minimum only — https://www.nationalfisherman.com/captains-and-vessel-owners-are-climbing-the-learning-curve-of-electronic-vessel-trip-reporting + https://www.nationalfisherman.com/what-fishermen-are-saying-about-connectivity-offshore — 2024
  - Signal 3: Starlink Maritime adopted across small commercial fishing fleet 2024-2025 + OpenAI Realtime / Whisper-turbo make accurate offshore voice-to-structured-data feasible at <$0.01/trip — https://www.nationalfisherman.com/satellite-connectivity-shifts-rock-the-marine-industry — 2024
  Category: Regulatory arbitrage

## 3. The opportunity

NOAA built the schema. Bluefin Data (VESL) and SAFIS (eTrips) built government-grade compliance pipes — for free. Neither cracked the **captain-facing UX problem**: a soaking-wet, exhausted, often-older operator at 6 PM with one shot to file before NOAA's 48-hour window.

DeckLog sits one layer above the free pipes. It does the four jobs no government app will ever do well:

1. **Voice-first capture** — the captain talks; AI structures it; the captain confirms. No tapping, no scrolling, no password.
2. **Multi-filing** — the same dictation populates the federal eVTR (via NOAA-approved partner SDK or web-form automation), the state trip ticket where applicable (TX, LA, FL, NC, GA, SC), and the dealer settlement form.
3. **Year-end translation** — the same data exports to Schedule F, fuel-cost basis, and per-trip P&L. Replaces a $200/mo bookkeeper for the smallest operators.
4. **Permit-watch & deadline radar** — auto-tracks the 48-hour clock, the 30-day permit-renewal logbook prerequisite, dolphin-wahoo carcass length compliance, fuel reimbursement filings. Texts the captain *before* the violation.

This is a classic vertical SaaS wedge: a regulator created a forced workflow for thousands of small operators, the free government tool sucks at UX, and incumbents are bookkeeping CPAs (DiSanto Priest, Mangum & Associates) who don't ship software.

## 4. Target market

- **Primary customer:** US commercial fishing captains holding a federal limited-access permit in one of: Gulf of America Reef Fish (the biggest pool — ~875 active commercial reef-fish permits as of NOAA SERO permit dashboard), South Atlantic Snapper-Grouper (Unlimited + 225-lb trip limit classes, ~700 active), Atlantic Dolphin-Wahoo, Coastal Migratory Pelagic. Owner-operator vessels 25–65 ft, 1–3 person crew, 2–10 trips/month, gross stock $80K–$600K/yr. Geographic core: FL panhandle, AL, MS, LA, TX coast (Gulf side); FL Atlantic, GA, SC, NC (Atlantic side).
- **Why they buy (in their words):**
  - *"It's great when it works, a nightmare when it doesn't."* — Richard Cornell
  - *"Keep your own personal very detailed logs because that's what saved me from getting a ticket."* — Mike Wild, longliner (after his eVTR app failed for five trips)
  - *"Updates to the software are required from time to time… occasionally there are bugs in the new system that take a little time to work out, which can be frustrating."* — fisherman quoted in NOAA feature
  - *"For captains who are tech-averse, webinar training has already lost a large component of the target audience."* — CFA Port Ambassador program report
  - *"It's a process that can be slow, wastes paper, and creates a risk of misplacing signed documents."* — captain on paper trip manifests (industry forum)
  - *"Logbooks are the most common reason for permit renewal delays for commercial fishing permits in the Southeast region."* — NOAA Southeast Fisheries Permits Office
- **Rough TAM reasoning:** Gulf+S.Atlantic federal commercial reef-fish/snapper-grouper/dolphin-wahoo/CMP permits combined ≈ 4,500–6,000 active. Add for-hire (charter/headboat) federal permits in same region ≈ 1,300–1,800 already on SEFHIER eVTR but underserved by current apps. Add Greater Atlantic eVTR-mandated commercial vessels (~3,500 active) where the federal mandate has been live since Nov 2021 and pain is well-documented. Total addressable: ~10K US captains. Serious paying segment at $99/mo: 2,500 captains = $3M ARR.
- **Why now for them:** The Gulf+S.Atlantic mandate is the trigger. Captains who have never used an app for federal reporting are about to be forced to — and they'll do it badly with the free tool, get cited, and look for a buy-it-and-be-done alternative. The window is ~6–18 months from final rule publication.

## 5. Product sketch (MVP)

- **Wakeword voice capture:** "Hey DeckLog, log my trip." Captain dictates in any order — gear, set/haul times, lat/long, species + count + estimated weight, discards, fuel — in natural speech. Works fully offline; syncs when boat returns to range.
- **Smart trip pre-fill:** vessel ID, permit numbers, gear, crew names from prior trip auto-loaded. Captain only confirms what changed.
- **Photo + voice catch confirmation:** captain holds phone over each box, says "twenty-three vermilion at six-pound average, two king mackerel at thirty-two." App stamps timestamp, GPS, weight, species. Photo retained as audit trail.
- **One-tap multi-filing:** same record pushes to NOAA eVTR (via NOAA-approved partner SDK or supported integration path), state trip ticket (TX/LA/FL/NC dealer-format CSV), and dealer settlement PDF. Captain sees one green checkmark.
- **48-hour clock radar:** persistent home-screen card showing time-to-next-deadline; SMS nags 6 hours before, 1 hour before, missed.
- **Permit-renewal dashboard:** "Your permit renewal opens June 1. You have 0 missing logbooks. ✅" or "3 missing — file now."
- **Year-end Schedule F export:** every trip becomes a row of catch revenue + fuel + ice + bait + crew share, exportable as IRS Schedule F-ready CSV or QuickBooks IIF. Replaces a $1,800–3,000/yr bookkeeper for solo captains.
- **Offline-first sync over Starlink/cellular hybrid:** queue uploads when out of range, push when back. Never blocks the captain.

## 6. AI angle — what's load-bearing

Strip the AI and the product collapses to "another typing app" — exactly what eTrips and VESL already are.

Three load-bearing AI jobs:

1. **Diarized fishing-domain ASR.** Whisper-turbo + a custom fishing-vocabulary biasing list (NOAA species codes, gear codes, regional slang — "vermilion," "B-liner," "scamp," "AJ"). Hand-rules break on accents and noise; tuned ASR holds.
2. **Speech → structured eVTR fields.** LLM converts free speech into validated NOAA schema: species code, weight bin, gear, statistical area from spoken lat/long, discards, regulated discards. Validation rules (e.g., "red snapper closed today — flag this catch") run inline.
3. **Edge-case classification.** Did the captain mention an undersized fish? A protected species incidental take? A gear loss event? Each triggers different reporting paths (eVTR vs. observer report vs. Sea Sampling Form). LLM-routed instead of menu-driven.

Bonus AI lift on the bookkeeping side: classifying fuel-dock receipts (OCR + LLM) into deductible categories for Schedule F, and matching dealer settlement statements to filed trip reports.

## 7. Localization angle (if any)

N/A in the global sense — this is US-federal-mandate-driven, geography-locked to Gulf + South Atlantic + Greater Atlantic NOAA regions. The "localization" wedge is *intra-US*: each state (TX, LA, FL, GA, NC) has a different trip-ticket schema and dealer reporting deadline. A generic compliance app can't support all five well. DeckLog's wedge is owning **all** the federal-plus-state filings as a single dictation. Spanish-language voice support is plausible v2 (Mexican-American Gulf shrimp/reef fishery has meaningful Spanish-first crews).

## 8. Business model — path to $1M–$5M ARR

- **Pricing:**
  - **Solo Captain — $79/mo** (1 vessel, federal eVTR + 1 state trip ticket + Schedule F export + offline voice)
  - **Multi-Vessel — $179/mo** (up to 5 vessels, dealer-settlement reconciliation)
  - **Dealer Add-On — $149/mo** (per dealer location, bulk trip-ticket processing — natural upsell)
- **ACV:** $79 × 12 = $948/yr per solo captain; $179 × 12 = $2,148/yr per multi-vessel.
- **Rough math to $1M ARR:** 1,050 solo captains × $79/mo × 12 = $995K. ≈10% of the addressable US federally-permitted Gulf+S.Atlantic+Greater Atlantic pool.
- **Rough math to $5M ARR:** 2,500 captains @ $79 + 600 multi-vessel @ $179 + 200 dealers @ $149 = $2.4M + $1.3M + $0.36M = $4.0M; add Spanish Gulf shrimp expansion or West Coast Pacific Council eVTR (similar mandate path) for the remaining $1M.
- **Expansion path:**
  - First wedge → solo captain federal eVTR.
  - Add-on: state trip ticket (TX/LA/FL/NC) at no extra charge to grease the wedge; charge for the dealer side.
  - Then: Schedule F bookkeeping replaces the $200/mo bookkeeper.
  - Then: dealer-side product (separate ACV) once captain density is high in a port.
  - Eventually: catch-share leasing marketplace, IFQ tracking, insurance-claim documentation pack — all natural ACV expansions.

## 9. Go-to-market wedge — first 100 customers

This is a tight, tribal, port-by-port market. Distribution math:

- **Charter Fisherman's Association Port Ambassador network.** CFA already runs the peer-to-peer education program for SEFHIER eVTR adoption. Sponsor 5 ambassadors at $500/mo each ($30K/yr) to demo DeckLog at dock meetings in Destin FL, Madeira Beach FL, Galveston TX, Dauphin Island AL, Murrells Inlet SC. Realistic conversion: 20% of attendees at a ~30-captain dock meeting = 6 captains/event × 24 events = 144 conversions in year 1. **Channel cost ≈ $200/captain — payback in 3 months.**
- **Direct dock outreach in 4 anchor ports.** Cold visits at Destin, Madeira Beach, Galveston, Murrells Inlet. Captains gather at the fuel dock and ice house — physically. A founder spending 8 weeks on the road, 5 ports/wk, 6 captains/port, 30% sign-up = ~70 conversions. Operations-heavy, but every commercial fishing SaaS that worked (Deckhand, eCatch in NZ) was bootstrapped this way.
- **National Fisherman + Saltwater Sportsman + Charterboat Forum sponsorship.** ~$4–6K/mo for full-page ads + sponsored "captain corner" content. Plus podcast sponsorships on *Fish Nerds*, *Coastal Routes*, *Saltwater Underground* — niche but the entire decision-maker pool listens.
- **Dealer pull-through.** Strike 3 partnerships with Gulf wholesale fish dealers (e.g., Cox Seafood, Buddy's Seafood, Carolina Seafood). They bulk-onboard their 30–60 supplier captains, get their settlement reconciliation for free, captains get DeckLog pre-paid for 90 days. Dealers convert >40% of attached captains historically (this pattern works in dispatch software).
- **NOAA comment-period Federal Register list.** Every captain who submitted a comment on the Comprehensive eLogbook Amendment is publicly listed by name. Cold-mail 800 of them with a personalized one-pager ("you said the rule will hurt small captains — here's how DeckLog softens the blow"). 5% reply rate = 40 quality leads.

100-customer plan: 30 from ambassador program, 30 from direct dock visits, 25 from dealer pull-through, 15 from press/podcast/Federal Register list. Reachable in 4–6 months by a 2-person team.

## 10. Build complexity — justification

Medium. v1 in 4–5 months for a 2-person team:

- **Off-the-shelf:** OpenAI Realtime / Whisper-turbo for ASR; Claude/GPT for parsing speech → eVTR JSON; Twilio + WhatsApp Business for nags; React Native + Expo for iOS/Android; Supabase or Postgres + S3 for backend.
- **Custom work:** NOAA eVTR submission integration (Bluefin Data publishes a partner SDK; SAFIS has a documented submission API; worst case, headless web automation against the eVTR portal); state trip-ticket CSV format mapping for FL, TX, LA, NC, GA, SC; offline-first sync engine; species/gear/area validation rules from 50 CFR 622.
- **Hardest part:** offline-first sync + Whisper-on-device for the Starlink-less moments. Solvable, not novel. No custom ML model, no hardware.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Acting as data submitter on captain's behalf is permitted; NOAA welcomes third-party tools that comply with eVTR data spec. |
| Ethical — no harm / dark patterns | ✅ | Helps captains comply with conservation regs faster and more accurately — net-positive for fisheries science. |
| Market exists (evidence above) | ✅ | NOAA Federal Register mandate + 4,500–6,000 active permits + free incumbent UX failure documented. |
| 1–5 person team can build this | ✅ | 2 builders, 4–5 months. |
| Launchable with <$50K / ₹40L | ✅ | $30K dev + $5K dock visits + $5K NOAA SDK certification. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | Hair-on-fire for tech-averse captains hit by a federal mandate; logbook delay = blocked permit renewal = lost season. Slightly below 17+ because the free gov app *technically* handles compliance — pain is UX, not compliance gap. |
| Demand evidence | 15 | 11/15 | Multiple verbatim public-record captain quotes + NOAA Federal Register mandate + active CFA Port Ambassador program proves friction is real and addressed. Not 13+ because no incumbent is charging money successfully yet at this layer. |
| Build feasibility | 15 | 11/15 | Voice + LLM + state-CSV mapping is well-trodden. NOAA SDK certification adds 4–6 wk. Offline sync is the only real engineering risk. |
| Distribution clarity | 15 | 11/15 | Tribal port-by-port channel + CFA ambassador program + dealer pull-through = concrete and tested patterns. Not 13+ because every channel is operationally heavy — slow to scale beyond 1,000 captains. |
| Revenue mechanics | 15 | 11/15 | $79–179/mo is below the captain's existing Starlink ($150/mo) and SiriusXM ($50/mo) spend; willingness-to-pay is established for connectivity-adjacent tools. Path to $3M is clear; $5M needs adjacent-region expansion. |
| Time to first revenue | 10 | 8/10 | Pre-sell at first 5 dock visits during MVP build. First $99 within 8 weeks of dev start. |
| Defensibility | 10 | 6/10 | NOAA SDK partnership + state-trip-ticket integration depth is moaty (not patentable but slow to copy). Brand within port communities compounds. Soft moat. |
| **Total** | **100** | **78/100** | **GO** |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` (offline-first sync, ASR pipeline) · `domain-expertise-required` (50 CFR 622, NOAA permit logic, state trip-ticket schemas) · `sales-heavy` (dock-by-dock outreach, ambassador relationships)

Ideal team: one technical founder who can ship the React Native + voice pipeline, plus a domain partner who is a former charter captain or NOAA permit-office insider. The non-technical founder lives at the docks for 4 months.

### Key assumptions to validate (3–5)

1. **Assumption:** NOAA will allow a third-party app to submit eVTR via either Bluefin Data partner SDK or SAFIS API by 2026 final rule. **How to test:** Get on a call with NOAA SERO eVTR team + Bluefin Data licensing — week 1, before any code.
2. **Assumption:** Tech-averse captains will adopt voice-first if the demo is 90 seconds dock-to-filed. **How to test:** Build a 1-screen demo (no backend), do 30 in-person dock demos in Destin + Madeira Beach, measure "willing to pay $79/mo" yes-rate. Kill if <30%.
3. **Assumption:** Federal Register comment list yields >5% cold-mail reply rate. **How to test:** Pull the list, send 200 personalized one-pagers, measure replies.
4. **Assumption:** Whisper-turbo + biasing list achieves >95% accuracy on species/gear codes in noisy dockside audio. **How to test:** Record 50 mock dictations on a working boat with realistic ambient noise (engine, gulls, radio); bench-test transcription accuracy.
5. **Assumption:** Charter Fisherman's Association will sponsor a pilot partnership. **How to test:** Cold pitch CFA leadership in week 2 with a free-for-members 90-day trial offer.

### Risk flags

1. **Regulatory risk — moderate.** The Comprehensive Commercial eLogbook Amendment final rule could be delayed or watered down by industry pushback (the comments period ended Jan 20 2026 and many captains opposed the mandate). If NOAA grants a 2-year paper-logbook extension for owner-operators under a tonnage threshold, the urgency softens. Mitigation: Greater Atlantic eVTR is already mandatory (Nov 2021), and that pool alone is enough for $1M ARR.
2. **Platform dependency — high.** Heavy dependence on NOAA-approved submission paths. If NOAA closes its eVTR ingest API to third parties or restricts to two vendors (currently Bluefin Data + SAFIS), the wedge collapses. Mitigation: pursue formal NOAA partner status early; cultivate dual ingest paths.
3. **Tribal channel — slow scale.** Dock-by-dock distribution caps growth velocity. Hard to grow past 2,000 captains on year-1 effort alone. Mitigation: ambassador economics; dealer pull-through bypasses individual sales.
4. **Free incumbent floor.** eTrips and VESL are free. Captains comparison-shop on price. The product *must* deliver clear ROI: voice speed + state trip ticket + Schedule F. If any of those three breaks, the captain reverts to free.

## 14. Structured verdict

```
Score:                  78/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder + ex-charter-captain or NOAA permit-office co-founder; both willing to spend 4 months at the docks
Time to revenue:        8–12 weeks (pre-sell during MVP build at dock visits)
Capital to launch:      $30–40K ($25K dev + $10K dock travel + $5K NOAA partner certification)
Top 3 assumptions to validate first:
  1. NOAA will allow third-party submission via Bluefin Data or SAFIS partner path — confirm with NOAA SERO eVTR team in week 1
  2. ≥30% of demoed captains will pre-pay $79/mo after seeing a 90-second dock-to-filed demo — 30 in-person tests in Destin + Madeira Beach
  3. Whisper-turbo + bias list ≥95% accuracy on species/gear codes in noisy dockside audio — 50 recorded mock dictations on a working boat
Kill criteria:
  - Abandon if NOAA blocks third-party eVTR submission paths in the final rule (mid-2026)
  - Abandon if dock-demo paid conversion <20% after 30 attempts
  - Abandon if NOAA grants a 2-year paper-logbook extension for owner-operators under 50 GRT (kills urgency)
  - Abandon if a well-funded competitor (e.g., Bluefin Data launching its own captain-facing SaaS) ships voice-first eVTR before our v1
```

## 15. Next step — 1-week validation sprint

- **Day 1:** Call NOAA SERO eVTR team + Bluefin Data licensing. Confirm third-party submission path. Pull Federal Register comment list.
- **Day 2:** Build a 1-screen voice-input demo (Realtime API → eVTR JSON preview, no backend). Record 5 mock dictations.
- **Day 3:** Drive to Destin FL or Madeira Beach FL. Stand at the fuel dock from 5–8 PM. Demo to 10 captains in person. Show the 90-second flow.
- **Day 4:** Repeat at second port (different state — Galveston or Murrells Inlet). 10 more demos.
- **Day 5:** Decide go / no-go based on **specific measurable outcome**: ≥6 of 20 captains say "I'd pay $79/mo for this today" *and* a NOAA-approved third-party submission path is confirmed in writing.

If 6+ pre-pay handshakes and the NOAA path is open, build. If 4 or fewer, pivot or kill — captains either care or they don't, and the dock conversation gives a clean signal in 5 days.
