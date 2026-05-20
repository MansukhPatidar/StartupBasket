---
title: "ProvenSync — authorship packet for indie sync composers"
slug: composer-sync-authorship-proof
date: 2026-05-20
category: Creator Economy / Indie Sync Composers (US/EU/UK)
complexity: Low
score: 75
verdict: GO
confidence: Medium
oneLiner: Captures each indie composer's DAW evidence and outputs a one-page authorship file sync libraries accept without AI-warranty fear.
tags:
  vertical: Creator Economy
  model: SaaS
  geography: Global
  secondary: [Solo-builder, AI-agent, Compliance-driven, Music, Sync-licensing, Provenance, Indie-creator]
axes:
  problem: 16
  demand: 12
  build: 13
  distribution: 10
  revenue: 11
  time: 8
  defensibility: 5
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# ProvenSync

## 1. One-liner

Captures each indie composer's DAW evidence and outputs a one-page authorship file sync libraries accept without AI-warranty fear.

## 2. Trend signal — why now?

Sync libraries flipped the chain-of-title bar in 2025–26. After the Suno/Udio settlements and the wave of independent-musician suits against Google/Lyria, music supervisors now demand a written warranty that the track isn't AI-tainted — and the libraries themselves are bouncing submissions when they can't verify it.

- **Indie producer class actions**: 1,300+ independent artists joined complaints against Suno, Udio, and Google's Lyria/ProducerAI in late 2025; Suno's motion-to-dismiss hearing landed March 20, 2026. ([Chartlex tracker](https://www.chartlex.com/blog/business/music-industry-ai-lawsuits-tracker-2026), [Loevy+Loevy press](https://www.loevy.com/independent-musicians-sue-google-over-ai-music/))
- **Sync warranty shift**: "Sync agencies and music supervisors increasingly require written warranties that submitted tracks are clear of AI training-data infringement, and AI-generated tracks face a higher clearance bar." ([Vocal Market AI music lawsuit tracker](https://thevocalmarket.com/blogs/enterprise/every-ai-music-lawsuit-tracked))
- **Library rejection bar**: "Libraries need to be able to prove chain of title… Unless a musician can prove their authorship in a convincing way, many libraries are choosing to say no." ([jackrighteous AI sync guide](https://jackrighteous.com/en-us/blogs/ai-music-distribution-guide/sync-licensing-and-ai-music-what-s-accepted-in-2026), [MusicLibraryReport composer tips](https://musiclibraryreport.com/composer-tips/ai-music-creation-2026/))
- **Warranty+indemnification clauses**: Sync contracts now lean on representation-and-warranty + indemnification language. If the composer's warranty is false, they pay the library's legal bill. ([ThatPitch reps & warranties](https://thatpitch.com/blog/representations-and-warranties-in-sync-licensing/), [ThatPitch legal responsibility](https://thatpitch.com/blog/legal-responsibility-in-sync-licensing-agreements/))
- **Money is moving**: Sync licensing forecast >$2.5B by 2026; Artyfile already monetizes blockchain "proof of rights" at €29.90 per track. ([MusicGateway sync 2026](https://www.musicgateway.com/blog/sync-licensing/sync-licensing-in-2026-your-golden-ticket-to-actually-getting-paid-and-heard), [Artyfile pricing](https://artyfile.com/pricing/))

Provenance:
  - Signal 1: Sync libraries openly rejecting tracks without AI-clearance warranty — [jackrighteous](https://jackrighteous.com/en-us/blogs/ai-music-distribution-guide/sync-licensing-and-ai-music-what-s-accepted-in-2026) — 2026-Q1
  - Signal 2: 1,300+ indie producers in active litigation against AI music generators; sync market now treats AI-training infringement as the live indemnification trigger — [Loevy+Loevy](https://www.loevy.com/independent-musicians-sue-google-over-ai-music/), [Chartlex](https://www.chartlex.com/blog/business/music-industry-ai-lawsuits-tracker-2026) — 2025-10 / 2026-03
  - Signal 3: Artyfile already charging €29.90/track for blockchain proof-of-rights; demand for cheap, durable provenance is real — [Artyfile](https://artyfile.com/pricing/) — 2026-Q1
  - Category: Tech-unlock (AI-music boom created a new chain-of-title problem that didn't exist 18 months ago)

## 3. The opportunity

Today the indie composer side of the sync pitch is held together with email and trust. Library sends a warranty form. Composer signs. If something blows up — sample lookalike, AI-trained-on-Drake melody, ghost-collab uncredited — the composer eats the legal bill *and* loses every future placement at that library.

Incumbents do not address this. The big sync platforms (Musicbed, Marmoset, Songtradr, Position Music) want clean tracks but won't build the proof tooling for the composer side — that's the composer's problem. Artyfile sells lifetime sync licenses with on-chain provenance, but only for *their own* Abbey Road catalog. There is no per-composer tool that takes a track you wrote and produces a defensible **authorship file** the library will accept.

The wedge: a one-shot capture-and-package tool the composer runs *before* they pitch. Records the human authorship evidence (DAW session timeline, MIDI history, stem renders, screen-recording snippets, sample source receipts, optional camera proof of the writing session), runs an AI-similarity check against Suno/Udio/Lyria fingerprints + commercial sample databases, and emits a one-page PDF + machine-readable JSON the library can drop into its chain-of-title file. AI-first, manual-grade replacement.

## 4. Target market

- **Primary customer:** Solo-to-trio indie composers writing for sync — US, UK, EU, Australia. Catalog of 50–500 tracks. Pitching to 5–20 sync libraries / music supervisors per quarter. Average sync placement $500–5,000. Day jobs adjacent (composer-for-hire, film scorer, library writer, beatmaker-turned-sync-pitcher).
- **Why they buy:** They are signing warranty + indemnification clauses they cannot back up. One bad placement = clawback + library blacklist + potential legal bill north of $20K. They want a cheap, defensible insurance layer that survives a 12-month lookback.
- **Rough TAM reasoning:** Sync licensing trade revenue $650M in 2024 growing 7–8% YoY → >$2.5B by 2026. Estimate 30–80K active indie sync composers globally pitching libraries regularly; 200–400K in the long tail. Even 10K paying $39/mo = $4.7M ARR.
- **Why now for them:** Warranty language hardened in 2025. The Sony fair-use ruling expected summer 2026 will harden it further. Any composer who pitched between 2023–25 has *zero documented provenance* for their existing catalog — there's a one-shot backlog-clearance moment in the next 12 months.

## 5. Product sketch (MVP)

- **DAW capture plug-in** (Logic / Pro Tools / Ableton / Reaper) — records project-file timeline events, MIDI input history, plugin chain, and a hash of the final stems at render time. Background, no user friction.
- **Pre-pitch packet builder** — composer drops a finished track in, app pulls in the captured session evidence, attaches sample-source receipts (Splice receipt, library license PDFs), and any optional screen-recording or camera evidence the composer wants to include.
- **AI-similarity scan** — runs the track against fingerprints of public Suno/Udio/Lyria outputs and the top 5 commercial sample libraries; flags hits with timestamps so the composer can pre-empt a library's auto-screener.
- **One-page Authorship Proof PDF** — library-ready: composer ID, track ID, ISRC, "no AI-generation used / AI used only for X step under human direction" attestation, stem-hash trail, sample-source list, similarity scan results, timestamp anchor.
- **Machine-readable JSON sidecar** — drops cleanly into Musicbed / Marmoset / Songtradr / Position chain-of-title intake (we'll publish a schema and lobby libraries to standardize).
- **Backlog mode** — for tracks written before the tool existed, composer can attach what they have (DAW project, archived emails, Splice receipts, bounce timestamps) and the tool produces a "best-available provenance" packet with honest caveats.
- **Lookback verification log** — re-runs the AI-similarity scan every 90 days against new model releases (Suno v5, Udio v3, etc.); composer gets an alert if a previously-clean track suddenly looks like a model output.

## 6. AI angle — what's load-bearing

Two AI capabilities sit at the core:

1. **Audio similarity at AI-output scale.** Fingerprinting individual tracks against ten million Suno/Udio/Lyria public outputs + commercial sample libraries requires embedding-based audio similarity (CLAP, MERT, custom). This wasn't economical in 2023 — cheap inference + open-source music embeddings makes it a $0.01/track operation in 2026.
2. **Narrative + attestation drafting from session evidence.** Pulling DAW telemetry + receipts + project files into a single coherent "here's how this track was made" narrative the library accepts is exactly the LLM sweet spot. Same skill that drafts a legal narrative for a dental preauth or an EUDR DDS packet, applied to music authorship.

Remove the AI and you have a glorified file-attacher. The fingerprint scan + narrative drafting is the product.

## 7. Localization angle (if any)

N/A — this is a global play. Sync libraries operate in English, sit mostly in US/UK, and the warranty language is contract-law-driven. No regional rail to exploit. Could add German + Spanish for EU composers later but not a wedge.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:**
  - Solo composer: $19/mo (up to 25 active tracks)
  - Pro composer: $49/mo (unlimited tracks, lookback verification, backlog mode)
  - Per-packet a-la-carte: $9/track (for the composer who pitches once a quarter)
  - Library partnership SKU (later): $0.50/track ingest fee paid by the library when they verify a packet at intake — pure scale upside.
- **ACV:** $300–600/year for the typical Pro composer.
- **Rough math to $1M ARR:** 2,000 paying composers × $450 ACV = $900K. Add 200 backlog-clearance one-off packets/month at $9 = $21K/year. Realistic in 12 months from a cold start with composer-network distribution.
- **Rough math to $5M ARR:** 8,000 paying composers + the library-side ingest fee on say 200K verified tracks/year × $0.50 = $100K + the SaaS revenue. The library-side flips this from "tool composers buy" to "rail libraries pay for."
- **Expansion path:** (a) library-side ingest fees, (b) co-write attestation (multi-composer chain-of-title), (c) catalog re-verification service for back-catalog acquisitions, (d) PRO-side ingestion for ASCAP/BMI/PRS chain-of-title audits.

## 9. Go-to-market wedge — first 100 customers

- **Composer Discord + Slack networks.** Find the 12 most active sync-composer Discords (Score Club, Composer Brew, ThatPitch community, Library Music Underground, Cinematic Composer Hub) — drop the tool with a free 5-pack of packets. Each composer who likes it brings 3–5 peers via word-of-mouth.
- **Free authorship-audit of one of their pitched tracks.** Cold-outreach the 500 composers listed on `underground-mix.com/library2026` and Musicbed/Marmoset public composer pages. Personal Loom: "I scanned your single 'X' against Suno v4 — here's what a music supervisor would see at intake." Expect 8–12% reply rate, 2–3% convert.
- **Partnership with one mid-tier library.** Pitch Position Music, Audiosocket, or Pusher: "Your composers ship packets through us, you cut intake-review time 40%." Library encourages composers to use us; we share a per-packet revenue split. One mid-tier deal = 500+ composers funneled in.
- **YouTube content with two big sync-composer creators** — Aaron Davison (htlymp), Music Library Report — sponsored breakdown of "what music supervisors look for in 2026 chain-of-title." Direct CTA to a free 14-day trial.
- **Reddit r/WeAreTheMusicMakers + r/composer threadlaunch.** Long-form post: "I built a tool that produces the authorship file Marmoset rejected my last submission over — happy to give 50 free Pro accounts to anyone who responds." Reddit composer threads convert hard when the pain is real.

## 10. Build complexity — justification

**Low.** Off-the-shelf: open-source music embedding models (CLAP, MERT), standard DAW SDKs (Logic Audio Unit + AAX for Pro Tools + Ableton Max-for-Live + Reaper Lua), HuggingFace inference for similarity, PDF generation. The DAW plug-in side is the only non-trivial engineering — but the Audio Unit + AAX wrappers are well-trodden territory. A solo founder with audio-plug-in experience plus one part-time backend engineer can ship v1 in 10–12 weeks. The narrative drafting is straight LLM prompting. The similarity index against Suno/Udio outputs requires scraping + embedding ~3M public outputs (a weekend job at current inference prices).

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Building a clearance-helper, not a clearance arbiter; no copyright authority claim. |
| Ethical — no harm / dark patterns | ✅ | Makes the warranty *more truthful*, not less. |
| Market exists (evidence above) | ✅ | Libraries openly demanding the proof; Artyfile already charging for an adjacent product. |
| 1–5 person team can build this | ✅ | Solo + part-timer; 10–12 weeks to v1. |
| Launchable with <$50K / ₹40L | ✅ | ~$15K to ship v1 (mostly inference cost for the public-AI-output index + plug-in dev contractor). |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | Warranty signed at every pitch; one bad placement = clawback + blacklist + legal bill. Felt weekly by active composers. Not hair-on-fire daily, but real enough to pay this week. |
| Demand evidence | 15 | 12/15 | Multiple independent signals — library rejection language, Artyfile pricing the adjacent product, 1,300+ producers in litigation. Lacking direct revenue proof for this exact wedge, hence 12 not 14. |
| Build feasibility | 15 | 13/15 | DAW plug-ins are well-trodden; similarity model is off-the-shelf; PDF + JSON generation is trivial. Pair ships v1 in 10–12 weeks. |
| Distribution clarity | 15 | 10/15 | Composer Discords + cold Loom + one library partnership = clear path. Conversion math from cold outreach is plausible, not proven. |
| Revenue mechanics | 15 | 11/15 | Pricing benchmarked against Artyfile (€29.90 one-time) and DistroKid (~$23/yr) plus the obvious "I'd pay $20–50/mo to not eat a $20K legal bill" math. Library-side ingest fee is upside, not load-bearing. |
| Time to first revenue | 10 | 8/10 | 6–8 weeks from launch — composers in Discord communities buy fast when the tool maps to a fresh warranty form they just signed. |
| Defensibility | 10 | 5/10 | Execution moat + a slowly-accumulating similarity index against AI-music outputs. Library partnerships compound, but no hard moat. |
| **Total** | **100** | **75/100** | |

## 13. Qualitative modifiers

### Founder-fit tags
`technical-heavy` · `domain-expertise-required`

The founder needs to ship a working DAW plug-in (audio-engineering literacy required), set up an audio-embedding pipeline, and speak fluent music-supervisor. A pure SaaS generalist will get the legal half right and bounce off the plug-in side; a pure audio-engineer will get the plug-in right and miss the chain-of-title language. The ideal is someone who has either pitched sync themselves or worked at a library.

### Key assumptions to validate (3–5)

1. **Assumption:** Sync libraries (Musicbed, Marmoset, Songtradr, Position) will *accept* a third-party authorship packet at intake rather than insist on their own form. **How to test:** 15 cold calls to library intake managers in week 1 — ask if they'd attach a standardized provenance PDF to their chain-of-title file. Need 5+ unambiguous yeses.
2. **Assumption:** Indie composers will pay $19–49/mo for this, not just at first-pitch panic. **How to test:** Land 30 paying customers in the first 60 days post-launch. Measure month-2 retention; need >80% to validate ongoing pricing, otherwise pivot to per-packet a-la-carte.
3. **Assumption:** The audio-similarity index against Suno/Udio public outputs is good enough to surface real risk. **How to test:** Reverse-blind: take 50 known-AI tracks and 50 known-human tracks, run the index, measure precision/recall. Need ≥85% / ≥80% to claim the feature credibly.
4. **Assumption:** A library will partner on per-packet ingest fees within 12 months. **How to test:** Pitch one named mid-tier library (Audiosocket or Pusher) by month 6. Even an LOI counts.

### Risk flags

1. **Platform risk:** DAW vendors (Apple/Avid/Ableton/Cockos) could ship native session-provenance features themselves. Mitigation: stay ahead by owning the library-facing side (PDF + JSON schema + similarity scan), not just the capture side.
2. **Legal risk:** A music supervisor or label could argue our packet is *insufficient* if a case actually goes to court. Mitigation: position the product as "the file your library wants at intake", not "legal protection." Don't let the marketing drift.
3. **Market timing risk:** The summer 2026 Sony/Suno ruling could either (a) settle AI-music chain-of-title liability cleanly (which would *kill* the urgency) or (b) blow it open further (which accelerates us). We launch sized to either outcome.
4. **Similarity-index decay:** New AI music models release every quarter; index must be re-fingerprinted constantly. Manageable, but a real ongoing cost.

## 14. Structured verdict

```
Score:                  75/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder who has pitched sync OR worked at a library + 1 audio-plug-in contractor
Time to revenue:        6–8 weeks
Capital to launch:      ~$15K (mostly inference + plug-in contractor)
Top 3 assumptions to validate first:
  1. 5+ mid-tier libraries say they'd accept a standardized intake packet (15 cold calls in week 1)
  2. 30 paying composers in 60 days with month-2 retention >80%
  3. Similarity index hits 85%/80% precision/recall on AI-vs-human blind test
Kill criteria:
  - Abandon if <3 of 15 libraries say they'd accept the standardized packet
  - Abandon if <10 paying composers after the first 60 days post-launch
  - Abandon if Sony v. Suno/Udio ruling explicitly preempts composer-side warranty (eliminates urgency)
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Map the top 30 indie-sync-friendly libraries and find an intake-side human contact at each (LinkedIn + composer Discord referrals). Draft a 90-second "would you accept a standardized provenance file?" script.
- **Day 3:** Cold-call 15 of them. Track exact verbatim responses. Yes / Maybe / No with quoted reason.
- **Day 4:** Post on r/WeAreTheMusicMakers + r/composer + 3 sync-composer Discords with the mock-up of the one-page Authorship Proof PDF. Ask: "Would you pay $19/mo for this before your next sync pitch?" Track replies.
- **Day 5:** Decide go / no-go.
  - **Go** if: ≥5 libraries say "yes" or "yes with edits", AND ≥15 composers express paid interest (DM, signup-list email, or upvotes >30).
  - **No-go** if: <3 library yeses OR <5 composer paid-interest replies — pivot to per-packet a-la-carte or kill.

Falsifiable outcome: a list of named library contacts + composer commitments, not a vibe.
