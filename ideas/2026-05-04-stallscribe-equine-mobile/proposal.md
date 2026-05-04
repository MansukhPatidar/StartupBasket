---
title: StallScribe — Offline AI scribe for solo equine vets
slug: stallscribe-equine-mobile
date: 2026-05-04
category: VetTech SaaS / US Solo Equine Ambulatory Veterinarians
complexity: Medium
score: 64
verdict: VALIDATE
confidence: Medium
oneLiner: Offline iPad AI scribe + farm-call billing + Coggins/EECVI bundle for solo US ambulatory equine vets.
tags:
  vertical: HealthTech
  model: SaaS
  geography: US
  secondary: [Mobile-first, Offline-AI, Voice-first, AI-agent, Solo-builder, SMB, Domain-expertise-required]
axes:
  problem: 16
  demand: 10
  build: 10
  distribution: 9
  revenue: 9
  time: 6
  defensibility: 4
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# StallScribe — Offline AI scribe for solo equine vets

## 1. One-liner

Offline iPad AI scribe + farm-call billing + Coggins/EECVI bundle for solo US ambulatory equine vets.

## 2. Trend signal — why now?

Equine veterinary medicine is in a structural staffing crisis. Per AAEP and EquiManagement reporting, ~1.3% of new vet-school graduates enter equine practice each year, and within five years 50% of those quit equine work for small-animal medicine or leave veterinary medicine entirely. The Stable Life movement and the AAEP Commission on Equine Veterinary Sustainability formed specifically to address it. ~37–40% of US equine vets are solo practitioners. Their #1 cited burnout driver is on-call rotation; #2 is paperwork piling up after 10-hour ambulatory days.

Three things shifted recently:

1. **Multimodal LLMs work on a moving truck.** GPT-4-class vision + Whisper-large + the new generation of structured-output models can take a barn-aisle voice memo plus a few iPhone photos and produce a clean equine SOAP note with drug names, dosages by weight, and follow-up flags. 18 months ago the drug-name hallucination rate killed this. Today the equine-specific scribes (CoVet equine, StableTrack still in beta as of May 2026) are shipping it.
2. **On-device LLMs hit production quality.** Apple Intelligence, Gemma 3, and Phi-4-mini run usefully on an iPad Pro M-series. Equine vets work in metal-roofed barns with no cell signal; "offline" is not a nice-to-have, it's the entire reason ThoroVet built a desktop business since 2014. Existing AI scribes that round-trip to OpenAI/Anthropic break the moment a vet pulls into a Kentucky horse farm. An on-device model that runs in airplane mode and syncs later is the new wedge.
3. **The category is unfinished.** ThoroVet is entrenched but not AI-native. ImproMed Infinity is enterprise/hospital-grade, not solo. CoVet (small-animal default) launched an equine module in late 2025. StableTrack is **still in public beta** in May 2026. None of them have nailed the bundled Coggins/EECVI/health-certificate workflow against GlobalVetLink + state vet offices, which is where the actual after-hours hours go for an ambulatory solo. That's the open lane.

```
Provenance:
  - Signal 1 (demand): AAEP Commission on Equine Veterinary Sustainability + The Stable Life movement; 50% 5-year attrition out of equine practice; 37–40% of US equine vets are solo; paperwork-after-hours burnout cited as primary retention killer — https://equimanagement.com/articles/leaving-equine-veterinary-practice/ + https://aaep.org/post/aaep-creates-commission-to-alleviate-equine-veterinarian-shortage/ + https://happyvetproject.org/mental-vet/burnout-vets-equine-hvp/ — accessed 2026-05-04
  - Signal 2 (feasibility): Multimodal LLMs reliably produce equine SOAP notes; on-device LLMs (Apple Intelligence, Gemma 3, Phi-4-mini) usable on iPad Pro for true offline farm-call use; equine-specific AI scribes (CoVet equine, StableTrack) just shipping in 2025-26 — https://www.stabletrack.ai/equine-ambulatory-practice-software + https://www.co.vet/equine + https://www.thorovet.com/ — accessed 2026-05-04
  - Signal 3 (economic): Equine PMS market re-opened by AI: StableTrack still in beta May 2026, CoVet equine launched late 2025; ThoroVet quote-only pricing implies $80–150/seat/mo zone; AAEP-driven federal/state grant attention on equine workforce sustainability — https://www.vetsoftwarehub.com/product/stabletrack + https://www.thorovet.com/pricing/ — accessed 2026-05-04
  Category: Tech-unlock + Underserved niche
```

## 3. The opportunity

Equine ambulatory practice has terrible PMS UX because every existing solution is either (a) a small-animal PMS with an "equine module" bolted on (Avimark, ezyVet, DaySmart, CoVet), (b) a multi-vet hospital ERP (ImproMed Infinity, HVMS, VIA), or (c) a pre-AI legacy system built specifically for solo ambulatory vets (ThoroVet since 2014, Cassadol). The two AI-native equine specialists — StableTrack and CoVet equine — are both racing to ship the "AI scribe + offline + ambulatory" combination right now.

The gap StallScribe exploits is the *bundle*: solo ambulatory equine vets don't just want a SOAP-note generator. The 2 hours they lose every night are split across (1) typing SOAP notes, (2) generating split invoices when a single farm visit covered five horses owned by three people in different LLCs, (3) filling out Coggins forms via GlobalVetLink and EECVIs to ship a horse to a show three states away, (4) prescription-refill follow-up texts to barns. Existing AI scribes solve only (1). Hospital ERPs solve (2) but at the cost of a $300/seat/mo price tag and a full migration. Nobody has shipped the **on-device, offline-first, end-to-end-ambulatory** product priced for the solo vet.

The wedge is the workflow these vets already have on paper. Replace the clipboard. Don't replace the PIMS first — be the iPad app that writes the SOAP note, splits the bill, and generates the EECVI in 30 seconds at the truck tailgate. PIMS sync (or replacement) comes later.

## 4. Target market

- **Primary customer:** US-based solo or 2-vet ambulatory equine practices, ISVMA / state-board licensed, billing $400K–$1.5M/yr, doing 8–14 farm calls per day. ~3,500–5,000 of these in the US (37% of ~10,000 equine-practice DVMs work solo; another chunk are 2-vet outfits).
- **Why they buy:** They cite "documentation after hours" and "billing the multi-owner barn" as the two biggest theft-of-life problems in their workday. They are predisposed to switch tools when one offers offline reliability — they've all been burned by a cloud PIMS in a steel barn.
- **Rough TAM reasoning:** 5,000 US solo/duo ambulatory equine vets × $99/mo × 12 = $5.9M ARR if you take 100% of solo seats. Realistic 5-year ceiling without expanding to mixed-animal rural is ~$2–3M ARR. That's fine for a 1–3 person bootstrap; it's not a venture-scale bet.
- **Why now for them:** The retention crisis is making vets actively shop tools. Multiple state boards (Kentucky, Texas, Florida) ran 2025 wellness summits explicitly recommending AI documentation. Insurance carriers and state vet offices are pushing more documentation onto the vet (EECVI digitization mandates rolling state-by-state).

## 5. Product sketch (MVP)

- iPad Pro app, M-series only, iOS 18+. Offline-first; sync later. Runs a quantized on-device LLM for transcription + structured SOAP draft.
- Tap a horse → record voice memo + snap photos → 25-second SOAP draft on screen, editable.
- Farm-call invoice: pick horses from barn list, drag procedures onto each, split owner percentages (3-owner LLCs, trainer pays 50%, etc.), one-tap PDF invoice + Stripe link.
- Coggins / EECVI / state CVI workflow: pre-filled from horse + barn records, push to GlobalVetLink API, e-sign via Apple Pencil.
- Prescription refill SMS / iMessage thread with the barn manager — one-tap "send Banamine refill instructions to Jen at Sunrise Stables".
- After-hours triage assistant: barn manager texts a photo of a colicky horse to a practice number, AI runs through a triage script (heart rate, gum color, gut sounds), pages the on-call vet only when criteria met. (Phase 2.)
- Sync to QuickBooks Online for accounting; export to ThoroVet/CoVet/ImproMed via CSV for vets who keep their PIMS.

## 6. AI angle — what's load-bearing

Three places where AI is *the* product, not decoration:

1. **On-device SOAP-note generation from voice + photos** — without it the value prop ("paperwork done before you leave the farm") collapses. The on-device part matters because cloud round-trip fails in barns. This is now possible because of Apple Intelligence + Gemma 3 + Phi-4-mini at quantized inference quality on M-series iPads.
2. **Multi-horse, multi-owner billing splits inferred from voice** — "this morning's call was Buddy and Smokey, Buddy's owner pays 100%, Smokey is split 60/40 between the trainer and the owner" — the LLM has to disambiguate this and produce structured invoice line items. This is brittle on prior-gen models; reliable on 2026-class structured-output models.
3. **EECVI / health-cert form filling** from existing horse records — the LLM has to map a vet's freeform notes and the horse profile into the GlobalVetLink and state vet office form schemas. Pure software could do this with templates, but the variance across states (Kentucky vs Texas vs Florida vs California field requirements) means template maintenance is brutal; a structured-extraction LLM handles the long tail.

Strip out AI and you have a worse ThoroVet. Keep it in and you have the tool that runs on the truck, not at the office.

## 7. Localization angle (if any)

US-first because (a) GlobalVetLink and EECVI bureaucracy are US-specific and most painful here, (b) state CVI rules vary state-by-state and that complexity is the moat against a flat global product, (c) WTP is highest in the US (equine vets earn $90–180K, will spend $99/mo without thinking).

UK / Australia equine ambulatory practice is structurally similar but smaller and uses different paperwork (UK has Defra movement licenses; AU has WHC certificates). Phase 3 expansion, not v1.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** $99/mo solo seat. $179/mo "duo" (two-vet practice). $349/mo small clinic (up to 5 vets). 14-day free trial, no credit card.
- **ACV:** ~$1,400/yr blended (assume 65% solo, 25% duo, 10% small clinic).
- **Path to $1M ARR:** ~720 paying practices. That's ~14% penetration of US solo/duo ambulatory equine vets. Reachable but not trivial.
- **Path to $5M ARR:** ~3,500 paying practices + add-ons (Coggins per-issuance fee passthrough, prescription refill SMS at $0.05/msg, payments processing margin via Stripe). Requires expanding into mixed-animal rural practices (cattle + equine) and possibly UK/AU. Not sub-bootstrap-friendly past $3M ARR.
- **Expansion path:** Start solo, expand to small clinics. Then layer: payments take rate (1% on Stripe-routed invoices), Coggins-per-issuance markup, optional veterinary supply-side ad/affiliate revenue (drug companies pay for placement in formulary lookup). Realistic ACV expansion to ~$2,400/yr.

## 9. Go-to-market wedge — first 100 customers

- **AAEP Annual Convention** (December, ~6,000 attendees) — booth + sponsored breakfast for solo/ambulatory track. Demo on the show floor live: "watch me do a SOAP note in 25 seconds without WiFi". Estimate: 30 paid signups from one show.
- **State-board wellness summits + The Stable Life events** — burnout-focused programming is exactly where this product fits. Speak as a sponsor at 5 state events in year 1 (KY, TX, FL, CA, VA).
- **Direct outreach to AAEP "Recent Graduates" subgroup** — about 800 vets who joined equine practice in the last 5 years, the cohort with highest burnout and lowest tool-switching cost. AAEP rents the directory; LinkedIn matches the rest. Target: 10% reply rate, 15% trial conversion → 12 paid customers from this list.
- **Content + community on Equine Vet Reddit, the AAEP forum, and the EquiManagement publication** — case studies of "Dr. X went home before sundown for the first time in 6 months". Cheap because it's literally the burnout narrative that built The Stable Life.
- **Referral kickback** — $500 credit for referring a paying practice. Equine vets all know each other in regional clusters; they refer.

## 10. Build complexity — justification

**Medium.** v1 is an iPad-first SwiftUI app with a quantized on-device LLM for transcription + structured-output draft, a CoreData local store, and a CloudKit/Postgres sync layer. The hard parts are (a) on-device model quality bar (needs careful prompt engineering + finetune on equine SOAP examples — Hugging Face has open vet-record datasets), (b) GlobalVetLink integration (their API is a moving target — one engineer for 2 months), (c) state-by-state CVI rule variance (manual data work across 50 states; bottoms-up rather than scraping). Estimate: 2-engineer team in 4–5 months to a paid v1; 6 months to GlobalVetLink-validated.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Standard SaaS; no controlled substance handling beyond what existing PMS already do |
| Ethical — no harm / dark patterns | ✅ | AI-assisted, vet-reviewed; no auto-prescribe; no patient-facing claims |
| Market exists (evidence above) | ✅ | 5,000+ practices; 3 active competitors validate market |
| 1–5 person team can build this | ✅ | 2 engineers + 1 equine-vet advisor; no novel ML research |
| Launchable with <$50K / ₹40L | ✅ | Apple developer fees, model finetune compute, AAEP booth: ~$40K total to first revenue |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | Hair-on-fire for the burnout cohort; weekly+ pain for everyone else. AAEP's existence as a sustainability commission is a cited indicator. |
| Demand evidence | 15 | 10/15 | Three competitors already shipping confirms demand, but also raises the conversion bar. Forum chatter strong; specific WTP signal moderate. |
| Build feasibility | 15 | 10/15 | Medium-complex. On-device LLM finetune + GlobalVetLink API + 50-state CVI variance is real engineering. 4–5 months for 2 engineers. |
| Distribution clarity | 15 | 9/15 | AAEP convention + state wellness summits is a real but slow channel. Equine vets are a tight community — referral works, but no fast viral loop. |
| Revenue mechanics | 15 | 9/15 | $99/mo lands; ACV math works; expansion needs payments take-rate to scale beyond $2M. |
| Time to first revenue | 10 | 6/10 | 4-month MVP + 2-month sales cycle to first 10 paid practices = ~6 months to revenue. Slow for a bootstrap, defensible given AAEP-event-driven sales calendar. |
| Defensibility | 10 | 4/10 | Very limited. Workflow lock-in once a practice keeps records here. State-by-state CVI rule maintenance is a real but soft moat. Big PMS players (CoVet, StableTrack) are racing in the same direction — execution speed is the only edge. |
| **Total** | **100** | **64/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required`

### Key assumptions to validate (3–5)

1. **Assumption:** Solo ambulatory equine vets will pay $99/mo for an iPad-first AI scribe + farm-call billing tool that does NOT replace their PIMS. **How to test:** 30 phone interviews with AAEP-listed solo equine vets in KY/TX/FL/VA, sourced from AAEP directory, plus 5 in-person interviews at a regional equine vet conference. Accept if ≥40% say "would buy at $99 today".
2. **Assumption:** On-device LLMs (Gemma 3 / Phi-4-mini quantized) produce equine SOAP-note drafts with edit burden ≤30% (i.e., vet edits less than 30% of generated text). **How to test:** Build a finetune on 200–500 anonymized equine SOAP notes (sourced via 5 advisor practices), benchmark against vet-edited gold standard. Accept if median edit distance ≤30%.
3. **Assumption:** GlobalVetLink integration is achievable in <8 engineering weeks. **How to test:** Get sandbox access via partnership outreach in the first 4 weeks; if GVL won't partner with a pre-revenue tool, pivot to manual EECVI PDF generation (still useful but worse moat).
4. **Assumption:** Conversion at the AAEP convention booth is ≥3% of demos to paid. **How to test:** Run an unofficial pre-show outreach + booth at the AAEP Mid-Year regional event before betting on the December convention.
5. **Assumption:** StableTrack does not raise a Series A and out-execute on go-to-market in the 4–6 month MVP window. **How to test:** Track Crunchbase + LinkedIn; pivot scope (enter UK or pivot to mixed-animal rural) if StableTrack closes >$5M in the next 6 months.

### Risk flags

1. **Crowded category risk.** Three active competitors (StableTrack, CoVet equine, ThoroVet AI features). If any of them ships the offline + EECVI bundle in the same window, this becomes a follower play. The bet is that StableTrack's beta is genuine (i.e., not feature-complete) and that CoVet's equine module is small-animal-DNA-with-equine-skin.
2. **Distribution gravity is slow.** AAEP convention is once a year. State summits are 4–6 events. No PLG flywheel — equine vets don't share product links on Twitter. First 100 customers takes 6–9 months, not 8–12 weeks.
3. **Defensibility is thin.** A well-funded entrant could clone this in 6 months. The only real moat is workflow + state-by-state CVI knowledge accumulation. If a $10M Series A lands at StableTrack, the bootstrap path narrows fast.
4. **TAM ceiling.** 5,000 US solo/duo practices. Even at 50% penetration the ARR is ~$3M. Genuine $5M+ ARR requires expansion to mixed-animal rural vets or international, both of which are different products.

## 14. Structured verdict

```
Score:                  64/100
Verdict:                VALIDATE
Confidence:             Medium
Best-fit builder:       Technical founder with an AAEP-network equine-vet co-founder/advisor; needs Swift/iOS depth
Time to revenue:        4–6 months
Capital to launch:      ₹35–40 lakh ($40–50K)
Top 3 assumptions to validate first:
  1. On-device LLM edit burden ≤30% on real equine SOAPs (technical validation, 4 weeks)
  2. ≥40% of 30 surveyed solo equine vets say "would buy at $99 today" (market validation, 4 weeks, parallel)
  3. GlobalVetLink will grant sandbox access within 8 weeks (partnership validation, run on day 1)
Kill criteria:
  - Abandon if StableTrack closes >$5M Series A and ships offline + EECVI bundle within 6 months
  - Abandon if on-device model edit burden exceeds 50% in benchmark
  - Abandon if <20% of 30 solo equine vets say "would buy at $99 today"
  - Abandon if GlobalVetLink refuses partnership AND state-by-state CVI scraping costs >$30K to maintain in year 1
```

## 15. Next step — 1-week validation sprint

- **Day 1:** Pull AAEP membership directory of solo equine vets in KY/TX/FL/VA (~600 names). Cold-email 100 with a 90-second loom: "watch me do a SOAP note in 25 seconds without WiFi" (use a prototype on Gemma 3 quantized).
- **Day 2:** Schedule 20 phone calls with respondents. Ask: top 3 paperwork pains, current PMS, willingness to pay $99/mo for offline iPad AI scribe + farm-call invoicing.
- **Day 3:** Ask the same 20 vets specifically about Coggins/EECVI workflow, GlobalVetLink usage, state CVI variance pain. Validate that the *bundle* matters, not just the SOAP note.
- **Day 4:** Reach out to GlobalVetLink for partnership conversation. Reach out to one The Stable Life chapter lead and one state-board wellness program coordinator about co-marketing.
- **Day 5:** Decide go/no-go.
  - **GO:** ≥8 of 20 vets say "I'd pay $99/mo today if it had offline + farm-call billing + EECVI". GVL replies positively.
  - **VALIDATE deeper:** 4–7 yes responses; pivot pricing or feature scope and run a second cohort.
  - **NO-GO:** ≤3 yes responses. Scope is wrong — try a different niche (mixed-animal rural? UK equine?).
