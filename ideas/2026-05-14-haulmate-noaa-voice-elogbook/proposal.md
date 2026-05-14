---
title: "HaulMate — Voice catch logbook for US offshore captains"
slug: haulmate-noaa-voice-elogbook
date: 2026-05-14
category: GovTech / US-SMB
complexity: Medium
score: 79
verdict: GO
confidence: Medium
oneLiner: Captain talks while pulling fish; app files NOAA-compliant trip reports before the boat docks.
tags:
  vertical: GovTech
  model: SaaS
  geography: US
  secondary: [Voice-first, Compliance-driven, Offline-first, SMB, Solo-builder, Niche-professional]
axes:
  problem: 16
  demand: 12
  build: 11
  distribution: 12
  revenue: 11
  time: 8
  defensibility: 9
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# HaulMate — Voice catch logbook for US offshore captains

## 1. One-liner

Captain talks while pulling fish; app files NOAA-compliant trip reports before the boat docks.

## 2. Trend signal — why now?

NOAA's Notice of Proposed Rulemaking on **Nov 20, 2025** kicked off the first overhaul of Southeast commercial logbook reporting in 30 years. Comment period closed Jan 20, 2026; final rule expected mid-to-late 2026. Four federal permit categories — **Gulf reef fish, South Atlantic snapper-grouper, Atlantic dolphin/wahoo, and coastal migratory pelagics** — will lose the option to mail paper logbooks to NOAA's Miami office and must submit electronically within 7 days of every trip.

Three concrete signals:

1. **NOAA Federal Register NPRM** for mandatory commercial e-logbook in Gulf + Atlantic (Nov 20, 2025) — the regulatory deadline is the forcing function ([source](https://www.federalregister.gov/documents/2025/11/20/2025-20491/electronic-logbook-reporting-in-commercial-fisheries-of-the-gulf-of-america-and-atlantic)).
2. **NOAA's own Alaska Fisheries Science Center** has already validated voice recognition (vendor: Think A Move / TAM) on commercial decks for hands-free species/weight capture — explicit acknowledgement of the problem and the technique. "Tablets have to contend with a very noisy environment — engine noise, wind, machines, and lots of voices." ([source](https://www.fisheries.noaa.gov/feature-story/speech-recognition-technology-provides-fast-accurate-fisheries-data-collection)).
3. **Florida moved 100% of dealer trip-tickets to mandatory electronic (VESL)** as of July 1, 2025; 730+ dealers now report 90%+ of state landings electronically ([source](https://myfwc.com/research/saltwater/fishstats/commercial-fisheries/wholesale-retail-dealers/)). Dealer-side digitization is done; captain-side is the next domino — and Florida is the proof point that the industry will comply when the rule lands.

Plus: **Starlink Mini at $499 hardware / $165/mo Roam (Ocean Mode at $2/GB)** finally puts working bandwidth on a 30-foot center-console without a $2,500 maritime terminal ([source](https://starlinkinsider.com/starlink-maritime/)). Sync-on-anchor is now realistic.

Provenance:
  - Signal 1: NOAA NPRM mandating electronic commercial logbook for 4 Southeast permit categories — https://www.federalregister.gov/documents/2025/11/20/2025-20491/electronic-logbook-reporting-in-commercial-fisheries-of-the-gulf-of-america-and-atlantic — 2025-11-20
  - Signal 2: NOAA AFSC voice-recognition pilot for at-sea catch capture (TAM) — https://www.fisheries.noaa.gov/feature-story/speech-recognition-technology-provides-fast-accurate-fisheries-data-collection — feasibility confirmed
  - Signal 3: Florida VESL mandatory e-trip-ticket since 2025-07-01 (state-level digitization precedent) — https://myfwc.com/research/saltwater/fishstats/commercial-fisheries/wholesale-retail-dealers/ — 2025-07-01
  Category: Regulatory arbitrage

## 3. The opportunity

The dominant incumbent for Southeast captains is **Deckhand** (Real Time Data, Australia) — a typed-form iPad app priced ~$40-100/mo. It does the job for crab boats and trollers where someone is at a screen between sets. It is not a wet-deck product. Captains either type one-handed while the other hand bleeds a fish, or — far more commonly — write on a paper waterproof pad and re-key everything at the dock. The new NOAA rule kills the paper bridge.

The wedge: **voice-first capture on a wet rolling deck**, NOAA-form-locked, offline-first, sync at anchor. Captain says *"twelve red snapper, thirty pounds total, two undersize released, twenty-eight fathoms"* and the app fills the SEFSC logbook fields with GPS/time stamped automatically. No typing. Hands stay on rope and gaff.

Deckhand's weakness is shape, not features: they built a forms app for an iPad, then bolted on enough integrations to qualify across regions. A voice-native rebuild for the four Southeast permits — narrower vertical, deeper integration — wins captains who actually fish 100+ trips a year on small open boats.

## 4. Target market

- **Primary customer:** Owner-operator captains of vessels holding any of: Gulf reef fish IFQ permits (~870), South Atlantic unlimited snapper-grouper permits (~644), Atlantic dolphin/wahoo open-access permits (est. 3,500), and CMP king/Spanish mackerel permits (est. 1,300). Many overlap — TAM ~5,000 unique captains, plus ~2K small-fleet owners (2-5 boats).
- **Why they buy:** New federal rule = "submit electronic trip report within 7 days or your permit is at risk." They already feel paper-logbook fatigue; many quietly skip reports today. The mandate removes the skip option.
- **Rough TAM reasoning:** 5,000 owner-operator captains × $50/mo × 12 = $3M/yr ceiling on captain-side alone. Add small fleets (2-5 vessels, 2,000 boats) at $35/mo per extra vessel = another ~$840K. Add Northeast/Mid-Atlantic groundfish & lobster (~5K more captains) where similar mandates are already live (eVTR) and total addressable subscription revenue is $7-10M/yr.
- **Why now for them:** NOAA letter mailing campaign starts within weeks of the final rule. Captains who got by on paper for 30 years now have a hard deadline and 7-day-after-trip enforcement. They will buy in the 60-day window between letter and effective date.

## 5. Product sketch (MVP)

- **Voice capture on deck:** Wired throat mic or AirPods; captain says "X fish, Y pounds, Z released" and entries land in a structured trip ticket. Custom species vocabulary trained on Southeast reef-fish glossary (red grouper, gag, vermilion snapper, mutton, scamp, wahoo, kingfish, etc.).
- **Offline-first PWA:** Whole trip captured with no signal; auto-syncs when Starlink Mini, dock Wi-Fi, or LTE returns.
- **NOAA-form lock:** Outputs match SEFSC commercial logbook schema (CLD coding) and Atlantic CMP forms exactly. One-tap submit via NOAA's electronic reporting endpoint when it goes live; until then, generates a pre-filled NOAA-approved form.
- **GPS + gear auto-fill:** Time of set, time of haul, lat/lon at first hookup, gear type, depth — all auto-stamped.
- **Discard photo log:** Snap a release; photo + species + estimated weight tied to that fish in the log (helps with the new NOAA discard-data emphasis).
- **End-of-trip review:** 90 seconds at the dock to scan the day, fix mishearings, hit Submit. Captain never sees a blank form.
- **Dealer hand-off:** Auto-emails a clean summary to the fish house (or pushes into Florida VESL where applicable) so the dealer doesn't have to re-key.
- **Permit/quota awareness:** Tracks individual permit IFQ allocations; warns the captain at the rail when they're 50 lb from a sub-quota cap.

## 6. AI angle — what's load-bearing

Three load-bearing AI components:

1. **Domain-tuned ASR.** Off-the-shelf Whisper alone gets crushed by a diesel at 3,000 RPM, a wave slap, and a captain shouting "twelve gag, three reds, one mutton" through wind. The wedge is a fine-tune (or beam-search vocabulary bias) over Southeast species names, common weights, and standard phrases. Without this, the product fails on day one — Deckhand exists because typing is "easier than fighting Siri." Voice has to actually work.
2. **Slot-filling agent.** Captain's natural utterances ("twelve red snapper, thirty pounds, two of 'em undersize") map to NOAA's structured fields (species code, kept lbs, kept count, discarded count, discard-condition code) via a small LLM with a strict JSON schema. Hallucination = compliance violation, so the model runs constrained decoding against an enum of valid codes.
3. **Discard species ID from photos.** Captain doesn't always know if it's a scamp or a yellowmouth; vision model classifies from a 1-second deck photo and auto-fills the discard species code with confidence.

Strip the AI and the product is just Deckhand. Voice + slot-filling is the entire thesis.

## 7. Localization angle (if any)

N/A — this is a US-only play scoped to NOAA Southeast permits. The same shape works in Australia (AFMA), New Zealand (FishServe), and Atlantic Canada, but those markets already have Deckhand or Olrac entrenched. Geographic expansion = adjacent fishery regions in the US first (New England groundfish eVTR, West Coast IFQ), then maybe Pacific Islands. The US Southeast wedge is the chokepoint.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** $49/mo per captain on a single permit; $79/mo for multi-permit captains (most snapper-grouper holders also fish dolphin/wahoo); $35/mo per additional boat for small fleets (2-5 vessels). Annual prepay $490 / $790. Hardware bundle (throat mic + waterproof mount + ruggedized AirPods Pro 2) at $189 one-time.
- **ACV:** ~$680 blended (mix of solos and small-fleet upgrades).
- **$1M ARR math:** 1,500 paying captains × $680 = $1.02M. Achievable with 30% capture of unique permit holders in years 1-2.
- **$5M ARR math:** 4,500 captains + 2,500 fleet-vessel seats + dealer/co-op tier ($199/mo for fish-house aggregation) at 200 dealers = $4.9M. Requires expanding to Northeast eVTR captains and adding a dealer-side aggregation product.
- **Expansion path:** captain → small fleet (per-boat seats) → dealer aggregation (fish house buys to receive clean digital tickets) → trip-report analytics for co-ops and lawyers handling permit transfers.

## 9. Go-to-market wedge — first 100 customers

NOAA mails every affected permit holder a letter when the final rule lands. That mailing list — names, vessel names, ports — is **public record** through FOIA and partially published in the SAFMC permit map GIS layer ([source](https://www.fisheries.noaa.gov/resource/map/commercial-vessel-permits-south-atlantic-snapper-grouper-fishery-management-map-gis)). Wedge:

1. **Scrape the SAFMC permit map + Gulf IFQ database** → get vessel names, home ports, owner contacts. Then physically visit 5 dock concentrations (Madeira Beach FL, Destin FL, Murrells Inlet SC, Cape Canaveral FL, Carolina Beach NC). Hand a captain a 2-minute demo on his own boat. Charter captains' association meetings = 30 captains in a room.
2. **Sponsor National Fisherman + Coastal Angler print + the SAFMC newsletter** in the 60 days after the NOAA mailing. Captains read these. $500/issue ad, ~30K commercial circulation.
3. **Partner with a fish-house network** (Wild Seafood Co., Dock to Dish, etc.) — they want clean digital trip data; offer them dealer-side aggregation for free if they get their consigning captains to use HaulMate.
4. **Recruit 3 captain ambassadors per region** (paid $200/mo + free annual sub) who post their honest workflow on YouTube/Instagram. Captains trust other captains. Deckhand's testimonial page is its single best marketing asset.
5. **Direct mail a one-pager** ("you got the NOAA letter — here's the easiest way to comply") to the FOIA-pulled list of permit holders. ~5K letters at $1 = $5K cost; 2% conversion = 100 captains.

The first 100 = 60 from dock visits + ambassadors, 40 from direct mail post-NOAA-letter.

## 10. Build complexity — justification

**Medium.** Off-the-shelf: Whisper-v3 quantized for on-device, React Native PWA, SQLite for offline trips, Cloudflare Workers backend. Custom: domain ASR fine-tune (1-2 weeks of audio collection on 5 friendly captains, then LoRA), slot-filling JSON-schema agent, NOAA SEFSC submission integration (federal endpoint may not be public; first version emails CSV/PDF to NOAA Miami office until the API ships). Vision discard-ID is a v1.5 feature using off-the-shelf fish classification model + 200-image fine-tune.

3-engineer team in 4-5 months. v1 ships before NOAA's final rule lands; rev 1.x adds the SEFSC API integration when it goes live.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Captain-facing compliance helper; no regulated software status required. |
| Ethical — no harm / dark patterns | ✅ | Helps small operators meet a federal mandate; aligned incentive. |
| Market exists (evidence above) | ✅ | NOAA NPRM + 5K permit holders + Deckhand revenue prove it. |
| 1–5 person team can build this | ✅ | 3 engineers, 4-5 months. |
| Launchable with <$50K / ₹40L | ✅ | $30-40K covers domain audio collection trips, hardware bundle prototypes, NOAA Miami in-person rule briefings, first ambassador stipends. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | License-at-risk + 7-day deadline = real pain. Not hair-on-fire daily, but trip-cadence (multiple times per month) and the regulatory click is loud. |
| Demand evidence | 15 | 12/15 | NOAA NPRM is hard. Deckhand exists and charges money. Florida already digitized dealer side. Missing: direct verbatim Reddit complaints from Southeast captains (the cohort is older, off Reddit). |
| Build feasibility | 15 | 11/15 | Whisper + slot-filling = solved primitives. Real risk: offshore-noise ASR fine-tune may need 50+ hours of in-situ audio before usable. NOAA SEFSC submission API may not exist at launch (workaround: PDF email). |
| Distribution clarity | 15 | 12/15 | FOIA permit list + NOAA mailing window + dock visits is a concrete, named playbook. Not "we'll do SEO." |
| Revenue mechanics | 15 | 11/15 | Pricing benchmarked against Deckhand. ACV math works. Risk: captains may resist $50/mo when they paid $0 for paper. Mitigation: bundle hardware + first-trip white-glove. |
| Time to first revenue | 10 | 8/10 | Pre-sells possible in 30 days via dock visits. Real revenue 8-12 weeks from MVP. |
| Defensibility | 10 | 9/10 | Domain ASR vocabulary + accumulating species-noise dataset compounds. NOAA approval inertia means second movers face a 6-12 month qualification slog. Workflow lock-in (every trip lives in HaulMate) is high. |
| **Total** | **100** | **79/100** | GO. |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` (ASR fine-tuning, offline-first PWA, marine bandwidth) · `domain-expertise-required` (NOAA forms, fishery management plans, captain culture). A founding team with one ex-NOAA Fisheries person or a working captain advisor is the unfair edge.

### Key assumptions to validate (3–5)

1. **Assumption:** Captains will trust voice over typing once it actually works on a noisy deck. **How to test:** 10 captains × one trip each with a wired throat mic prototype + Whisper-tuned MVP; measure word error rate on species + weight tokens. Kill if WER > 12% after a 50-hour audio fine-tune.
2. **Assumption:** Willingness to pay $49-79/mo. **How to test:** Pre-sell annual subs at $490 to 30 captains in 4 ports during a 2-week dock blitz. Kill if conversion <15%.
3. **Assumption:** NOAA final rule lands in 2026 (not punted to 2028 by litigation). **How to test:** Watch SAFMC and Gulf Council April-Sept 2026 meeting agendas; talk to 2 fishery management council staff. Kill if rule slips beyond 2027.
4. **Assumption:** NOAA SEFSC will accept (or eventually publish API for) third-party electronic submission. **How to test:** Direct call with NOAA Southeast Regional Office IT on accepted submission formats. Kill if NOAA mandates use of one specific gov-issued app (would make this a feature, not a product).

### Risk flags

1. **Regulatory risk:** NOAA could mandate a single approved vendor list and exclude new entrants. Mitigate: start the qualification conversation pre-launch; partner with a NOAA-approved hardware/software reseller.
2. **Platform dependency:** iOS/Android stores. Low; PWA fallback covers it.
3. **Market timing:** If NOAA punts to 2028, demand is suppressed for 18 months — runway risk.
4. **Cohort distribution risk:** This audience does not live on Twitter or Product Hunt. Distribution is feet-on-dock + print + radio, which is slower and harder to A/B than digital.

## 14. Structured verdict

```
Score:                  79/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical 2-3 person team with one captain or ex-NOAA Fisheries advisor
Time to revenue:        8-12 weeks from MVP (pre-sells possible in 30 days)
Capital to launch:      $30-40K (audio collection trips, hardware prototypes, NOAA briefings, dock blitz)
Top 3 assumptions to validate first:
  1. Voice ASR on a real deck holds <12% WER on species+weight tokens after 50 hours of fine-tune audio
  2. ≥15% of pitched captains pre-buy a $490 annual sub during a dock blitz
  3. NOAA SEFSC will accept a third-party-submitted electronic logbook (not a single-vendor mandate)
Kill criteria:
  - Abandon if NOAA final rule slips past Dec 2027 (no forcing function)
  - Abandon if dock-blitz pre-sell conversion <10% across 4 ports
  - Abandon if NOAA designates an exclusive vendor for SEFSC submissions
```

## 15. Next step — 1-week validation sprint

- **Day 1-2:** Pull SAFMC permit map + Gulf IFQ holder list. Identify 4 dock concentrations. Book travel to one (Madeira Beach FL is the densest). Email + cold-call 8 captains for in-person 30-minute interviews — offer $100 cash for their time.
- **Day 3-4:** On-site: ride along on 2 trips with a Phone + recorder + cheap throat mic. Capture 8-10 hours of real deck audio while captain narrates as if dictating to a logbook. Record what they hate about Deckhand or paper.
- **Day 5:** Run the audio through stock Whisper-v3 + a 200-token species vocabulary bias. Measure WER on species + weight tokens. Pre-sell 5 captains a $490 annual sub for a Q3 2026 launch.

Falsifiable go/no-go: **WER ≤20% on stock + bias (proves the fine-tune will get there) AND ≥3 of 5 pitched captains hand over $490.** Anything less = back to Stage 2.
