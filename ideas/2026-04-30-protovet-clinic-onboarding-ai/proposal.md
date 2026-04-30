---
title: ProtoVet — AI onboarding copilot for independent vet clinics
slug: protovet-clinic-onboarding-ai
date: 2026-04-30
category: HealthTech SaaS / US Independent Veterinary Practices
complexity: Medium
score: 80
verdict: STRONG GO
confidence: Medium
oneLiner: AI ambient-captures clinic protocols and rebuilds them as a voice-queryable onboarding copilot for new vet techs.
tags:
  vertical: HealthTech
  model: SaaS
  geography: US
  secondary: [AI-agent, Voice-first, SMB, Solo-builder, Workflow-automation]
axes:
  problem: 17
  demand: 12
  build: 11
  distribution: 11
  revenue: 12
  time: 8
  defensibility: 7
founderFit: [technical-heavy, domain-expertise-required]
featured: true
---

# ProtoVet — AI onboarding copilot for independent vet clinics

## 1. One-liner

AI ambient-captures clinic protocols and rebuilds them as a voice-queryable onboarding copilot for new vet techs.

## 2. Trend signal — why now?

Three independent forces are colliding on the floor of every independent US small-animal clinic:

- **Tech turnover hit 32% in 2025** (Veterinary Payroll Report). iVET360 estimates losing one credentialed tech costs the average $2.5M practice **~$37,500** in lost productivity and onboarding spend. AAHA: 90% of practices still struggle to hire. Practice owners now work an average **71 hours per week** (Blue Heron Consulting), with no time to write SOPs.
- **Voice-AI scribe category just took off in vet med.** CoVet, NectarVet, VetGeni, Talkatoo all pushed ambient-listening SOAP-note products through 2025. The capture stack is now commodity — same Whisper + LLM pipeline that powers a SOAP scribe powers a protocol-capture engine. Cost per hour of clinic audio is under $0.50.
- **PE rollups (Mars VetHealth, NVA, VCA, BluePearl) keep eating share** while ~28k US practices remain independent. Independents tell every survey their wedge is *culture and mentorship* — but they have no software for it. Trainual sells generic SOP authoring at $250/mo; nobody is bottom-up capturing the protocols already happening.

A market with $37k churn cost per departure, an owner who has zero hours, a capture stack that just got cheap, and a standalone competitor base of 28,000 — that's the alignment.

Provenance:
  - Signal 1 (demand): "When your sterilization protocols, patient communication standards, and billing procedures live in a long-tenured employee's head instead of a documented system, every new hire starts from zero — and every departure takes critical knowledge with them." — [Cain Watters Dental Industry Outlook 2026](https://www.cainwatters.com/digitalblogs/2026-dental-industry-outlook/) — applies one-for-one to vet; AAHA's 2025 turnover study reports 32% tech turnover with onboarding cited as the #1 driver — [LifeLearn / IDEXX 2025](https://www.lifelearn.com/2023/09/22/why-vet-techs-are-quitting-and-how-to-reduce-turnover/) and [iVET360](https://ivet360.com/a-tale-of-two-trends-the-hidden-cost-of-turnover/)
  - Signal 2 (feasibility): Voice-AI ambient scribe products (CoVet, NectarVet, VetGeni) shipped through 2025-2026 prove the capture pipeline works in noisy vet environments — [Shepherd 2026 AI PMS Comparison](https://www.shepherd.vet/blog/8-best-ai-powered-veterinary-practice-management-software-platforms-2026-comparison-guide/), [Zackproser AI Voice Tools for Veterinarians 2026](https://zackproser.com/blog/ai-voice-tools-for-veterinarians)
  - Signal 3 (economic): Veterinary Services US market $72.6B / 57,920 establishments (IBISWorld 2026); credentialed-tech leverage adds **$161,493 gross revenue per added tech per DVM** (AAHA Productivity Report) — clinics will pay to retain techs — [IBISWorld](https://www.ibisworld.com/united-states/industry/veterinary-services/1447/), [AVMA on AAHA productivity](https://www.avma.org/news/increasing-practice-profitability-requires-benchmarking-defining-core-values)
  Category: Tech-unlock + Underserved niche

## 3. The opportunity

Independent vet practices have a knowledge-transfer problem that PE-backed corporates are starting to solve at scale through central training departments (Banfield's Doctor Academy, NVA's onboarding academy, VCA Learn). Independents can't afford that infra. Trainual, Connecteam, BambooHR Onboarding all sell *empty containers* — the owner still has to author every protocol. The owner doesn't have time. So nothing gets written. So new techs get "thrown to the wolves" (the verbatim phrase repeated across vet HR articles).

ProtoVet inverts the model. **The owner authors nothing.** A small clip-on mic plus an iPad on a magnetic mount in each treatment room records ambient audio. The AI segments procedures (intake, blood draw, dental scaling, surgical prep, vaccine reminder script, anesthesia recovery, client discharge), strips PHI/PII (no client identifiers), and assembles per-procedure protocol cards with timing, dosage, sequence, and pet-side talking points. After ~30 days of capture the clinic has a living, searchable, voice-queryable playbook of *its own* way of doing things. New techs ask, in the workroom, "How does Dr. Patel like to prep for a feline dental?" — get a 90-second answer in the senior tech's own voice.

The 10× delta against Trainual is "owner does nothing." Against Tebiki/Teachme Biz it's "no instructor films deliberately — just turn on the mics." Against vet-PMS (Shepherd, ezyVet, NectarVet) it's a complementary layer; we don't replace the chart, we replace the missing onboarding binder.

## 4. Target market

- **Primary customer:** Owner/practice-manager of independent US small-animal vet clinic. 1–4 DVMs, 4–12 support staff, $1M–$5M annual revenue, AAHA-accredited or aspiring. Geographic sweet spot: 2026's Tier-2 metros and exurbs (Austin, Charlotte, Denver, Tampa, Boise, Nashville) where corporate rollups are most aggressive and independents feel the squeeze on tech retention.
- **Why they buy:** "I just lost my best tech of 6 years. Training her replacement is going to take three months and I don't have three months." That's the moment of pain. Repeats every 3–4 months at 32% turnover.
- **Rough TAM:** 57,920 US veterinary establishments (IBISWorld 2026); ~50% independent = ~28,000 clinics. Add Canadian (4,200) and Australian (3,100) independents within 18 months → ~35k SAM. At $250/mo average price, full saturation = $105M ARR. We need ~330 paying clinics to clear $1M ARR; ~1,650 to clear $5M.
- **Why now for them:** Two hires in a row quit during onboarding. The PE-rollup in town promised central training to everyone they bought. The AAHA culture-and-people thread of 2025-2026 has practice managers begging for onboarding tooling. ChatGPT taught the owner what AI can do in 30 minutes, but generic ChatGPT doesn't know *their* anesthesia protocol.

## 5. Product sketch (MVP)

- Two clip-on lapel mics + one iPad in a magnetic mount, sit on the treatment-area counter (no installation; clinic plugs in, ProtoVet walks them through pairing in 10 minutes via video call).
- Ambient capture during real cases. Whisper-class STT, then a procedure-classifier identifies what's happening (e.g., "feline blood draw, jugular").
- PHI/PII scrubber strips client name, pet name, MRN before any audio leaves the device. Owner sees a redacted transcript dashboard nightly.
- Protocol-card builder rolls up multiple captures of the *same* procedure into one canonical clinic-specific protocol with steps, drug names, dosing, and talking points. Owner approves with one tap.
- Voice-query mode: any staff member, in the workroom, says "Hey Proto, how does Dr. K want a canine dental cleaning prepped?" → 60–90 second audio answer.
- Onboarding mode: new hire gets a curated 10-day path; ProtoVet quizzes them and tracks competency sign-off so the owner has audit trail for AAHA reaccreditation.
- Multi-DVM mode: protocols can fork by doctor preference (Dr. Patel vs. Dr. Kim each have a card).

## 6. AI angle — what's load-bearing

Without AI this product doesn't exist. The owner won't write SOPs (we already know — they don't, today). What's load-bearing:

- **Procedure segmentation** from messy multi-speaker treatment-room audio. This is a domain-specific classification problem (vet vocabulary, drug names, species cues). Not solvable by a generic transcript.
- **PHI/PII scrubbing** at the audio level before transcript leaves the device — required to make this comfortable for owners.
- **Canonicalization** across many noisy captures of the "same" procedure. AI rolls up "the way Dr. Patel does dentals" from 12 partial recordings into one clean card.
- **Voice-queryable retrieval** with vet-specific embeddings, drug-name disambiguation, and a senior-tech voice clone for the answer.

Pull the AI out and you have a clipboard.

## 7. Localization angle (if any)

N/A — this is a US-first play. US has the cleanest signal stack (32% turnover, AAHA standards, PE rollup pressure, willingness to pay $200–500/mo for SaaS). Expansion to UK/AU/CA in year 2 — same pet-vet structure, similar shortage. Avoid India/SEA early; vet density and willingness-to-pay are wrong for this price point.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** $249/mo for solo-DVM clinic, $399/mo for 2–3 DVM, $599/mo for 4+ DVM. Hardware (mics + iPad mount) sold at cost or bundled into 12-month commit.
- **ACV:** ~$4,200 blended. Realistic given Trainual is $250/mo and PMS systems are $116–$300/mo per vet.
- **Path to $1M ARR:** ~240 clinics paying $4.2k = $1.0M ARR. With 28k addressable independent clinics in the US, that's <1% penetration.
- **Path to $5M ARR:** ~1,200 paying clinics = ~4% penetration. Plus expansion into Canada/AU/UK independents and into adjacent verticals (dental practices, where the pain is identical and the demand evidence is stronger — Cain Watters quote came from dental).
- **Expansion path:** (a) seat-style expansion as the clinic adds DVMs/techs, (b) up-sell to compliance audit packs (OSHA, DEA, AAHA reaccreditation evidence — clinic protocols mapped to standards), (c) cross-sell into adjacent SMB clinical verticals (dental, optometry, chiropractic) with same capture stack.

## 9. Go-to-market wedge — first 100 customers

- **VMX Orlando (Jan 2027) and WVC Las Vegas (Feb 2026)** booth + "free 90-day pilot for first 50 AAHA-accredited clinics." VMX hit 30,000 delegates in 2026; WVC has 600+ exhibitors and the floor traffic is 80% independent practitioners. Cost ~$15k for a small booth, target 100 sign-ups, convert 50 to paid pilots, expect 20 to renew at month 4 = first 20 customers.
- **AAHA Practice Manager Facebook groups + VHMA (Veterinary Hospital Managers Association)** — there are several private FB groups of 5k–15k practice managers each. Get on a panel at AAHA Con 2026 (Sep 2026, Portland), demo the live "no-author SOP" capture in 30 seconds. Practice managers are the buyer; this is their pain. Estimate 20–30 conversions from that path.
- **Tech-influencer leverage:** Talkatoo, NectarVet, CoVet have podcast presence with vets. Co-marketing: "scribe handles the chart, ProtoVet handles the team." Sponsor 2-3 veterinary practice-owner podcasts (Veterinary Innovation Council, Uncharted Vet, Cone Of Shame). 50–100 inbound demos.
- **Direct cold outreach to 2,000 AAHA-accredited independents** from the AAHA member directory. Personalized Loom: "I recorded 30 minutes at a clinic in Austin and built their feline dental protocol in 4 minutes — here it is." Expect 3–5% reply, 1% close = 20–40 paying clinics.
- **PE-backed group buyer who wants to sell their independents on culture:** PE rollups want to look like they're "investing in your team" — pitch ProtoVet as a retention tool buyers can roll into PE acquisitions. Long shot but a 10-clinic pilot deal is $40k+ ARR overnight.

100-customer plan: 20 from conferences, 25 from AAHA/VHMA channel, 30 from cold outreach, 25 from podcast/influencer. 6-month sprint ending at $400k ARR run-rate.

## 10. Build complexity — justification

**Medium.** Not Low because: (a) on-device PHI scrubbing requires real engineering (privacy is non-negotiable in clinical contexts), (b) the procedure-classifier needs domain training data — solvable by recording at 3–5 friendly clinics for 30 days each, but it's real work, (c) a voice-query mode that runs in a workroom needs sub-second retrieval and good handling of noise. 4–5 months for a 2-person team (one ML/audio, one full-stack/product) to get to billable v1, including the hardware bundle (off-the-shelf USB lapel mics, iPad, magnetic mount; no custom firmware).

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Audio-recording laws: clinic posts notice; staff consent; PHI/PII scrubbed on-device. Standard practice for ambient-scribe products already shipping. |
| Ethical — no harm / dark patterns | ✅ | Owner controls audio, staff opt-in, redaction by default. Surfaces existing best practice rather than substituting for clinical judgment. |
| Market exists (evidence above) | ✅ | $72.6B vet services, 32% turnover, $37.5k churn cost, AAHA quoting onboarding as #1 retention driver. |
| 1–5 person team can build this | ✅ | 2 people, 4–5 months. |
| Launchable with <$50K / ₹40L | ✅ | $25k for hardware kits (10 pilot clinics × $400), $10k for inference, $5k for VMX/WVC booth split. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 17/20 | Hair-on-fire when a tech leaves; recurring 3–4× per year per clinic. Not 18+ because owners often suffer it without naming it as a software problem. |
| Demand evidence | 15 | 12/15 | AAHA published guidance, 32% turnover, $37.5k churn cost, multiple existing $250–$300/mo onboarding tools (Trainual) — but no one has a verbatim "I'd pay for this" scrape from vet owners specifically. Costs us 3 points. |
| Build feasibility | 15 | 11/15 | Off-the-shelf STT/LLM/embeddings; vet-specific classifier and PHI scrubber are real but bounded; 4–5 months for two builders. |
| Distribution clarity | 15 | 11/15 | Two named conferences (VMX 30k, WVC), AAHA/VHMA channel, podcast list, AAHA member directory. Clear path. Loses points because conference-led GTM has slow ramp between events. |
| Revenue mechanics | 15 | 12/15 | $250–$600/mo at $4.2k ACV; 240 clinics → $1M ARR is achievable; expansion path real. Loses 3 because retention against generic Trainual unproven year 1. |
| Time to first revenue | 10 | 8/10 | Pilot-to-paid in 8–12 weeks; can pre-sell at WVC/VMX before v1 ships. |
| Defensibility | 10 | 7/10 | Workflow lock-in is real once 90 days of clinic-specific capture is in. Data flywheel: each captured clinic improves the procedure-classifier for the next. Still copyable in 12 months by a well-funded competitor (Trainual + AI, or NectarVet expansion), so not 9+. |
| **Total** | **100** | **80/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required`

Needs an audio/ML engineer who can ship reliable on-device transcription + PHI scrubbing + procedure classification in 4 months, and a founder who can credibly walk into a vet clinic and have the practice manager take them seriously. A vet-tech-turned-PM advisor closes that gap fast.

### Key assumptions to validate (3–5)

1. **Assumption:** Practice owners will pay $250–$600/mo for an onboarding-specific tool that sits on top of (not inside) their PMS. **How to test:** 30 paid LOIs from independent owners at WVC Las Vegas (Feb 2026) at $99/mo founding-customer pricing; if <10 commit after a live demo, the price/positioning is wrong.
2. **Assumption:** Ambient capture in treatment rooms produces enough labeled material in 30 days to assemble usable protocol cards. **How to test:** Run 3 friendly clinics (offer free hardware + 12 months free) for 30 days; measure protocol-card precision vs. owner gold-standard. Need ≥80% acceptance without edits.
3. **Assumption:** Voice-query mode is actually used by techs (not abandoned after week 1). **How to test:** Pilot clinic instrumentation — query rate per tech per week, week 1 vs week 8. Need ≥3 queries/week/tech sustained at week 8 to call it sticky.
4. **Assumption:** Privacy posture passes practice-manager scrutiny. **How to test:** Walk 10 practice managers through the data flow before the demo; if >2 reject on privacy without negotiation, redesign capture path.
5. **Assumption:** Onboarding-time reduction is measurable and material (target: 50% reduction in time-to-competency for new techs). **How to test:** Pilot clinics report time-to-competency baseline (weeks to first solo dental, blood draw, anesthesia recovery) and re-measure after 2 cohorts on ProtoVet.

### Risk flags

1. **Trainual / Connecteam fast-follow risk.** Generic onboarding tools could bolt voice-AI capture onto their existing distribution overnight. Defense: vet-domain classifier + vet conference channel + faster product velocity. Fast-follow is the #1 reason this stops short of STRONG GO at 85+.
2. **Privacy / consent risk.** Audio recording in clinical environments is jurisdictionally messy. State laws differ (12 two-party-consent states). Mitigation: opt-in, on-device redaction, posted notice — same playbook ambient scribes have already cleared.
3. **Market timing risk.** PE rollups could accelerate and shrink the addressable independent base by 20% in 2 years. Counter: AU/UK/CA expansion + adjacent verticals (dental, chiropractic).
4. **Hardware-friction risk.** Even a tiny hardware footprint (mic + iPad mount) slows onboarding. Mitigation: BYOD path using existing iPads/iPhones; hardware optional from day 1.

## 14. Structured verdict

```
Score:                  80/100
Verdict:                STRONG GO
Confidence:             Medium
Best-fit builder:       2-person team — audio/ML engineer + founder with vet-clinic relationships (former practice manager, vet-tech, or PMS-veteran). Add 1 part-time DVM advisor.
Time to revenue:        8–12 weeks (pre-sold pilots at WVC); paid v1 in 4–5 months.
Capital to launch:      ~$40k (hardware kits for 10 pilots, inference budget, conference booth split, two months of contractor time).
Top 3 assumptions to validate first:
  1. Will independent owners pay $250+/mo for onboarding-specific tooling? → 30-LOI test at WVC.
  2. Does 30 days of ambient capture yield ≥80% accept-without-edit protocol cards? → 3-clinic pilot.
  3. Is voice-query sticky at week 8 (≥3 queries/tech/week)? → instrumented pilot.
Kill criteria:
  - Abandon if <10 paid LOIs at WVC after live demo.
  - Abandon if procedure-classifier accuracy <70% after 30-day, 3-clinic pilot.
  - Abandon if Trainual or Connecteam ships an equivalent ambient-capture feature before v1 launch.
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Build the AAHA member directory list (~3,000 accredited independents in US). Write 50-clinic personalized Loom script: "I clipped a mic on a vet tech for 30 min and built her clinic's feline dental protocol — here it is, want yours?"
- **Day 3–4:** Send 50 personalized Looms to practice managers at AAHA-accredited independent clinics in Austin, Charlotte, Denver, Tampa. Track open / reply / meeting-booked. Target: 5 demos booked.
- **Day 5:** Run 5 demos. Pre-pitch $99/mo founding-customer for paid 90-day pilot, $0 hardware. Decide: ≥3 LOIs / signed agreements = go. ≤1 = re-shape (likely toward dental practices, where Cain Watters quote already validates).

Falsifiable: 50 sends → ≥3 paid LOIs in 7 days, or pivot.
