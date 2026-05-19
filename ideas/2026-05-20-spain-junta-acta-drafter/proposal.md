---
title: "ActaVoz — junta scribe for Spanish property administrators"
slug: spain-junta-acta-drafter
date: 2026-05-20
category: PropTech / Spain-SMB
complexity: Medium
score: 73
verdict: GO
confidence: Medium
oneLiner: "Records the owners' meeting and hands the administrador a legally-formatted acta plus next convocatoria before the 10-day deadline."
tags:
  vertical: PropTech
  model: SaaS
  geography: EU
  secondary: [Spain, Compliance-driven, AI-agent, Voice-first, SMB, Multilingual]
axes:
  problem: 15
  demand: 11
  build: 11
  distribution: 11
  revenue: 11
  time: 7
  defensibility: 7
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# ActaVoz — junta scribe for Spanish property administrators

## 1. One-liner

Records the owners' meeting and hands the administrador a legally-formatted acta plus next convocatoria before the 10-day deadline.

## 2. Trend signal — why now?

Three things landed in the last 12 months and they point at the same workflow.

First, Spain's national consumer organisation OCU filed a formal press denunciation in January 2025 against Catalan property administrators, citing — by name — badly written *actas* and defective meeting notices. That's not a vendor selling fear; that's the buyers' own customers, organised, in the press.

Second, the niche's trade press started actively telling administrators to expect AI here. CIAX published an "AI in finca administration, practical cases 2026" piece (9 Jan 2026) that literally spells out the product: "Transcripción automática de juntas presenciales u online a partir de la grabación de audio" + "Generación de borradores de actas con los acuerdos identificados, votaciones y puntos tratados." When the target customer's own media is describing your product before it exists, the market is warming.

Third, the unit economics of the enabling tech collapsed. Real-time speech-to-text plus a long-context LLM that can hold a 2-hour Spanish meeting, identify motions and vote counts, and format them into the LPH Article 19 structure now costs cents per meeting. A meeting that took an administrator 1–3 after-hours to write up is a sub-€1 inference job.

One early competitor (Vecinfy) already markets a voice-note→acta tool claiming it "saves 20 hours a month" per administrator — proof the pain and the willingness to automate are real, while the market is still fragmented and unconsolidated.

Provenance:
  - Signal 1: OCU national consumer org formally denounced Catalan property administrators for badly-written actas and defective notices — https://www.ocu.org/organizacion/prensa/notas-de-prensa/2025/admfincascat280125 — 2025-01-28
  - Signal 2: CIAX trade press describes the exact product (audio→acta) as a 2026 use case for administradores — https://www.ciax.es/blog/inteligencia-artificial-administracion-fincas/ — 2026-01-09
  - Signal 3: Vecinfy ships a voice-note→acta tool claiming "20 horas al mes" saved — competitor traction validating WTP — https://vecinfy.com/acta-de-juntas-automatica-para-administradores-de-fincas/ — 2025
  Category: Tech-unlock

## 3. The opportunity

Every comunidad de propietarios in Spain must hold at least one ordinary junta per year (LPH Art. 16). The administrador de fincas sits at the front, runs the meeting, and is then legally on the hook to produce an *acta* that meets LPH Article 19.2 — date, place, who convened it, ordinary/extraordinary, full attendee list with cargos and represented owners, agenda, and every agreement adopted with the names and votes (for/against) of the owners and their cuotas where validity depends on it. Article 19.3 says that acta must be **closed within 10 natural days**. From closure, the 3-month impugnación clock for absent owners runs. A late or defective acta isn't a typo — it distorts owners' right to challenge agreements and can get agreements annulled.

So the administrador goes home after a contentious 2-hour evening meeting with scribbled notes and has to reconstruct, accurately, who voted what, on which point, by what cuota — under a hard legal deadline, after hours, while juggling 30–60 other communities. This is the workflow.

Incumbents do **template-from-structured-input**: Gesfincas (the dominant ERP, sector-affiliated), TAAF, Fynkus — you type the data in and they format it. That assumes you captured the data perfectly live, which in a heated junta you didn't. The newest challengers (Vecinfy, Fincora, IAFinkas) draft from *notes or a dictated voice note* — better, but still depends on the administrador remembering and summarising. Nobody verifiably ships the thing that matters: **record the actual meeting audio, diarize speakers, extract the motions and the vote tallies as they happened, and produce the Article-19-shaped acta + the next convocatoria, with the 10-day clock tracked.** That gap is the wedge.

## 4. Target market

- **Primary customer:** Independent and small-firm administradores de fincas in Spain (colegiado or not), managing roughly 20–80 communities, 1–10 person offices. The buyer is the despacho owner.
- **Why they buy:** "El retraso en la entrega del acta es uno de los problemas más frecuentes" is stated as a recurring pain across trade and legal blogs (Ubicae, Martell Abogados, Sepín). The acta is the single most legally exposed document they produce, it's deadline-bound, and writing it is unpaid after-hours work. They buy because it removes their highest-liability, lowest-leverage task.
- **Rough TAM reasoning:** CGCAFE cites ~15,400 colegiados across 37–38 territorial colegios (May 2026), plus an unquantified non-colegiado segment. Spain has on the order of 840k+ buildings organised as communities (INE-derived estimate; no official register exists) — a floor of one mandatory acta + convocatoria per community per year, more once extraordinary juntas are counted. Even capturing a single-digit-thousand slice of administradores at modest per-community pricing clears the $1–5M ARR band.
- **Why now for them:** Their own customers (via OCU) are publicly attacking acta quality, their trade media is telling them AI does this in 2026, and the labour to do it manually keeps getting more expensive against thin despacho margins.

## 5. Product sketch (MVP)

- Phone/laptop app: hit record at the start of the junta (in-person or online), stop at the end. Works offline-resilient for basement community rooms with bad signal.
- Speaker-diarized Spanish (and Catalan/Galician/Valencian) transcription of the full meeting.
- Agenda-aware extraction: maps discussion to the orden del día points, detects each motion, the resolution, and the for/against tally with owner names and cuotas where the administrador links the asistentes list.
- Generates the acta pre-structured to LPH Art. 19.2 — fixed legal skeleton, AI fills the substance; the administrador reviews and edits inline, not from a blank page.
- 10-day deadline tracker: per-community countdown from meeting date, reminders, and a "closed/signed" status log.
- Auto-drafts the next ordinary convocatoria (Art. 16: ≥6 days notice, required fields) from the meeting's carried-over items.
- GDPR-correct recording flow: generates the convocatoria clause announcing the recording, captures the in-junta majority authorisation as agenda point 1, and applies retention aligned to the LPH 5-year document rule.

## 6. AI angle — what's load-bearing

Remove the AI and there is no product — it's a dictaphone. The load-bearing work is: long-form diarized Spanish/co-official-language transcription of a noisy multi-speaker room, then semantic extraction of *legal events* from messy human argument ("¿entonces aprobamos el presupuesto de la fachada o no?" → motion, result, vote split), then deterministic mapping into the rigid Article 19 structure. That extraction-under-legal-schema step is exactly what cheap long-context models got good at in the last year and what no template tool can do. The legal skeleton is fixed and rules-based on purpose — the AI is constrained to fill known slots, which is what makes the output defensible rather than a hallucinated minute.

## 7. Localization angle

This is the entire play, not a flavour. It is Spain-only by construction: LPH Article 19/16 is Spanish law, the acta has a statutory structure, the deadline is statutory, the language is Spanish plus co-official Catalan/Galician/Valencian (juntas are routinely conducted in them), the channel is the Spanish colegios de administradores, and the GDPR recording rules are AEPD-specific (a junta is not a private meeting; recording needs junta majority approval, not unanimous consent). A generic global "meeting minutes AI" cannot produce an LPH-compliant acta and cannot pass a Spanish administrator's liability bar. The localization *is* the moat.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** Per-despacho subscription with a per-community allowance. Anchor to incumbent norms (Fynkus ~€25/community/year; IAFinkas €25/community/year + setup). Target tiers: €79/mo (up to ~25 communities), €149/mo (up to ~60), €249/mo (unlimited small office). Optional per-extra-acta overage for heavy extraordinary-junta seasons.
- **ACV:** ~€1,200–1,800 per despacho/year blended.
- **Rough math to $1M ARR:** ~650 despachos × €1,500/yr ≈ €975K ≈ ~$1.05M. ~650 of ~15,400 colegiados ≈ 4% — credible.
- **Rough math to $5M ARR:** ~3,000 despachos (≈20% of colegiados) at €1,600/yr, plus a per-community usage tier for larger firms. Requires colegio endorsement in 3–4 major regions and surviving a Gesfincas response.
- **Expansion path:** more communities per despacho; add Catalan/Galician/Valencian premium; add the impugnación-defence pack (annotated vote ledger, signed-acta archive); add owner-facing distribution of the acta with read receipts (kills the "administrator sent the acta months late, unsigned" complaint outright).

## 9. Go-to-market wedge — first 100 customers

- **Colegio-by-colegio, starting with the angriest region.** OCU's denunciation targeted Catalan administrators — that's where the customer's customers are loudest and where a colegio wants to be seen fixing acta quality. Pitch the Catalan colegio (CAF Cataluña/Barcelona) a member tool; their endorsement is the channel.
- **The congress circuit.** XXIII Congreso Nacional de Administradores de Fincas, 28–30 May 2026, PortAventura (Tarragona). Don't launch there (too soon) — attend, demo a recorded sample acta to despacho owners face-to-face, collect a design-partner cohort of 15–20 firms.
- **Direct to fragmented despachos via the colegio directories.** CGCAFE's Ventanilla Única lists colegios and members. Scrape the public despacho directory of 2–3 regions, send each a 90-second video: their typical junta audio in, a finished Article-19 acta out, deadline clock running. The pitch is one sentence — "your highest-liability after-hours task, done before you leave the building."
- **Trade-media co-sign.** CIAX and IESA already publish this concept editorially; a "we built the 2026 use case they described" placement plus a Sepín/legal blog teardown of acta defects converts the legally-anxious segment.
- **Land via the impugnación fear, expand via convocatoria.** First sale is "never miss the 10-day deadline again"; expansion is "we also draft your convocatorias and archive the signed acta trail."

## 10. Build complexity — justification

Medium. Transcription, diarization, and long-context extraction are off-the-shelf APIs; the custom work is the LPH Article 19/16 legal templating engine, the co-official-language handling, the GDPR recording-consent workflow, and an accuracy-review UI that a liability-sensitive professional trusts. No novel models, no proprietary dataset needed (the legal schema is public statute). A technical founder with a Spanish property-law advisor ships a credible v1 in roughly 4–5 months; the long pole is legal-format fidelity and review UX, not the AI.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Recording requires junta majority approval (AEPD) — built into the product flow, not a blocker |
| Ethical — no harm / dark patterns | ✅ | Improves accuracy and owners' access to their own acta; pro-transparency |
| Market exists (evidence above) | ✅ | OCU denunciation, trade press, live competitor, statutory mandatory volume |
| 1–5 person team can build this | ✅ | Off-the-shelf AI + custom legal templating; 4–5 months |
| Launchable with <$50K / ₹40L | ✅ | Inference is cents/meeting; no capex |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 15/20 | Deadline-bound, highest-liability document, after-hours unpaid work, customer-side public pressure (OCU). Real and recurring, but per-community it's annual+occasional, not daily hair-on-fire. |
| Demand evidence | 15 | 11/15 | Strong: OCU denunciation, trade press pre-describing the product, a live competitor claiming 20 hrs/mo saved. Weaker: fresh verbatim end-user quotes are thin/old; no sourced WTP data. |
| Build feasibility | 15 | 11/15 | Off-the-shelf AI; real custom work in legal templating, co-official languages, GDPR flow, trust UI. 4–5 months. |
| Distribution clarity | 15 | 11/15 | Concentrated, reachable channel (~37 colegios, one national congress, public directories). But colegio endorsement is a sales cycle and Gesfincas owns incumbent distribution. |
| Revenue mechanics | 15 | 11/15 | Pricing benchmarkable to incumbents; ARR math credible at 4% penetration. Incumbent pricing opacity and per-despacho community counts unverified. |
| Time to first revenue | 10 | 7/10 | Design partners in weeks via congress + direct outreach; paid conversion realistically 8–12 weeks given professional caution and review-trust requirement. |
| Defensibility | 10 | 7/10 | Legal-format fidelity + co-official language + GDPR-correct recording + colegio relationships compound. Not patent-grade; Gesfincas could bolt on audio→acta and own the channel. |
| **Total** | **100** | **73/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required` — needs solid AI/transcription engineering plus a Spanish property-law (LPH) advisor or co-founder. Not a generalist's idea; the moat is legal correctness.

### Key assumptions to validate (3–5)

1. **Assumption:** Administradores will trust an AI-drafted acta enough to sign it (it's their legal liability). **How to test:** 15 design-partner despachos run real juntas through it for one cycle; measure edit distance between draft and signed acta and whether they'd sign without a full manual rewrite.
2. **Assumption:** A junta room (noisy, multi-speaker, co-official languages) transcribes accurately enough to extract vote tallies. **How to test:** Record 10 real juntas across regions; measure motion/vote extraction accuracy vs. the administrator's ground-truth acta.
3. **Assumption:** Per-despacho pricing of €79–249/mo clears against incumbent norms and perceived value. **How to test:** Price-anchored interviews with 30 despacho owners across 2 colegios; willingness-to-pay laddering.
4. **Assumption:** At least one regional colegio will endorse or co-promote a member tool that improves acta quality post-OCU. **How to test:** Direct pitch to CAF Cataluña + 2 other colegios for a member pilot.

### Risk flags

1. **Incumbent platform dependency/response:** Gesfincas owns sector distribution and could add audio→acta and bundle it. Mitigation: move fast on legal-format fidelity and co-official languages, position as Gesfincas-compatible add-on rather than head-on ERP competitor.
2. **Liability/trust ceiling:** If administrators don't trust AI for a legally annullable document, adoption stalls regardless of accuracy. Mitigation: fixed legal skeleton + mandatory human review + audit trail; sell "draft + deadline guard," not "autopilot."
3. **GDPR/recording objection:** Owners or colegios resist meeting recording. Mitigation: build the AEPD-correct consent flow as a feature (convocatoria clause + in-junta majority vote + processor contract), pre-empt as a sales objection.
4. **Demand-evidence freshness:** The sharpest verbatim end-user pain quotes found are old (2012–2017); recent evidence is editorial/vendor. Mitigation: primary interviews in week-1 sprint before committing build.

## 14. Structured verdict

```
Score:                  73/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder + Spanish property-law (LPH) advisor/co-founder
Time to revenue:        8–12 weeks (design partners in weeks; paid conversion ~1 cycle)
Capital to launch:      €5–10K ($6–11K) — inference + dev tooling, no capex
Top 3 assumptions to validate first:
  1. Administrators will sign an AI-drafted acta — measure draft→signed edit distance across 15 design partners
  2. Real junta audio yields accurate vote/motion extraction — 10 recorded juntas vs ground-truth actas
  3. €79–249/mo per despacho clears WTP — 30 price-anchored interviews across 2 colegios
Kill criteria:
  - Abandon if <40% of 15 design partners would sign the AI draft without a full manual rewrite
  - Abandon if motion/vote extraction accuracy <90% on real multi-speaker junta audio after tuning
  - Abandon if Gesfincas ships an equivalent audio→acta feature bundled free before v1 launch
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Pull the public despacho directories of CAF Cataluña + one Castilian colegio. Line up 12–15 administradores for 30-min calls. Ask them to send (anonymised) one real recent acta and describe their last junta write-up — time taken, when, stress level, deadline misses.
- **Day 3–4:** Get 3–5 of them to let you record (or share recordings of) a real or mock junta. Run the audio through off-the-shelf diarized Spanish STT + an LLM prompted to the Article 19 schema. Compare the auto-draft against their actual signed acta — score motion/vote extraction accuracy and edit distance.
- **Day 5:** Decide go/no-go on a falsifiable bar: **GO only if ≥3 of 5 administradores say they would sign the auto-draft after light edits AND extraction accuracy ≥90% on the test juntas.** Anything less → iterate the prompt/schema once, or kill.
