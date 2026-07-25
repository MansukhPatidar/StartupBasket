---
title: "ScopeFinish — AI first-pass draft finisher for court reporters"
slug: court-reporter-ai-scoping
date: 2026-07-25
category: LegalTech / US — Freelance Court Reporters Bottlenecked by Scoping
complexity: Medium
score: 76
verdict: GO
confidence: Medium
oneLiner: "Turns a court reporter's raw steno untranslate plus audio into a near-clean transcript draft they finalize in half the time."
tags:
  vertical: ProfessionalServices
  model: SaaS
  geography: US
  secondary: [AI-agent, Solo-builder, Workflow-automation, LegalTech, Audio-first]
axes:
  problem: 16
  demand: 13
  build: 11
  distribution: 12
  revenue: 12
  time: 8
  defensibility: 4
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# ScopeFinish — AI first-pass draft finisher for court reporters

## 1. One-liner

Turns a court reporter's raw steno untranslate plus audio into a near-clean transcript draft they finalize in half the time.

## 2. Trend signal — why now?

Three things collided in the last 12 months.

**The scopist bottleneck got worse because the reporters themselves are vanishing.** Human court reporters fell ~21% over the last decade to under 23,000, and NCRA projects a **5,500-reporter shortage by 2028**. Roughly 1,120 reporters retire each year while only ~200 new stenographers enter. The average NCRA member is ~56. The reporters still standing are drowning in work — and the scopists who used to absorb their overflow are stretched just as thin. On CSRNation you can watch it happen in real time: *"IN NEED OF A CASE CATALYST SCOPIST FOR A DAILY THURSDAY MAY 22... PLEASE TEXT ME ASAP."*

**AI transcription finally got good enough to do the boring 80% of scoping.** A scopist's job decomposes into bounded tasks: fix CAT-software mistranslates against the audio, untranslate steno chords, drop in speaker IDs, apply the reporter's punctuation style, verify names and technical terms. Whisper-class ASR with word-level timestamps now nails "here's exactly where the draft diverges from what was said" — the same core that audiobook-QC tools already ship. This wasn't practical two years ago.

**The file plumbing is already open.** Case CATalyst and Eclipse both export and re-import via ASCII and RTF/CRE. That means a third-party tool never has to crack proprietary CAT internals — the reporter exports the untranslate, ScopeFinish cleans it, they re-import the finished draft. The round trip exists today.

Provenance:
  - Signal 1 (Demand): Reporters posting urgent rush requests for scopists on CSRNation; scopists charge ~$1.25/page and are chronically overbooked — https://csrnation.ning.com/page/scopists-1 and https://www.bestscopingtechniques.com/New%20Survey_final.pdf — 2026-07-25
  - Signal 2 (Feasibility): CAT software round-trips through ASCII/RTF-CRE and steno untranslate cleanup is a bounded, audio-verifiable task — https://solutioncenter.stenograph.com/import/importascii — 2026-07-25
  - Signal 3 (Economic): NCRA projects 5,500-reporter shortage by 2028; CA alone needs 458 FTE reporters; Steno and others funding AI transcript tooling — https://courts.ca.gov/news-reference/research-data/shortage-court-reporters-california and https://brief.steno.com/stenos-transcript-genius-ai-powered-analysis-tool-gives-you-an-edge — 2026-07-25
  Category: Tech-unlock

## 3. The opportunity

Every deposition and hearing transcript passes through the same three-step pipeline: reporter writes steno → CAT software produces a rough "untranslate" full of mistranslated chords and gaps → a scopist (human) cleans it against the audio → reporter proofreads and certifies. Step three is the bottleneck. A scopist does ~23 pages/hour and charges ~$1.25/page, so a 250-page daily costs the reporter ~$300 and a full day of someone else's calendar they may not be able to book on a rush.

The incumbents miss on two ends. **Full AI transcription services** (the "40–70% cheaper, 3–5× faster" pitch) aim at *replacing* the reporter for discovery/prep drafts — reporters distrust and resent them, and they don't produce a certifiable record. **Steno's Transcript Genius** and similar tools are built for *attorneys* to analyze finished transcripts, not for the reporter to *produce* one. Nobody is building the humble, reporter-owned tool that just does the scopist's first pass and hands control straight back to the reporter in their own CAT format.

That's the gap: not "AI replaces the court reporter," but "AI does the reporter's first-pass scoping so they stop turning down work." The reporter stays in the chair, keeps certification, keeps the margin they used to hand a scopist.

## 4. Target market

- **Primary customer:** Freelance/independent court reporters in the US who currently outsource scoping — single-shingle reporters and small reporting-firm owners running Case CATalyst or Eclipse, taking depositions and civil hearings. ~23,000 reporters nationally; the outsourcing subset (those who use scopists rather than self-scope) is the beachhead.
- **Why they buy:** In their words — the pain is "I can't find a scopist for this rush daily" and "scoping eats my margin and my nights." They already pay $1.25/page to a human; a tool that does the first 80% for a fraction and returns a CAT-ready draft is an obvious swap, not a new budget line.
- **Rough TAM reasoning:** ~23,000 US reporters. If even 8,000 are active outsourcers producing ~2,000 pages/month each, that's ~16M pages/month flowing through scoping. Capturing a slice at per-page or subscription pricing is a comfortable sub-$5M ARR wedge without needing the whole market.
- **Why now for them:** The shortage means the surviving reporters have *more* work than ever and *fewer* scopists to hand it to. Their bottleneck moved from "getting the gig" to "processing the gig." That's the exact moment they'll try a tool that clears the backlog.

## 5. Product sketch (MVP)

- **Drag in the untranslate + audio.** Reporter exports their rough ASCII/RTF-CRE from Case CATalyst or Eclipse and drops it in with the deposition audio.
- **AI first-pass clean.** Aligns audio to text word-for-word, flags and fixes mistranslated chords, fills dropped words, inserts speaker IDs, applies standard punctuation.
- **Reporter-preference profile.** Learns each reporter's punctuation style, Q/A formatting, "strict vs. intelligent verbatim" preference, and pet dictionary — so the draft comes back in *their* house style, not a generic one.
- **Uncertainty flags, not silent guesses.** Every low-confidence span is highlighted with a click-to-hear-the-audio jump, so the reporter reviews exactly the risky 15% instead of re-reading 100%.
- **Name & term verification.** Surfaces proper nouns, medical/legal terms, exhibit/Bates numbers, and monetary values for one-click confirm against a lookup.
- **CAT-ready export.** Hands back a clean ASCII/RTF-CRE the reporter re-imports and certifies. ScopeFinish never certifies anything — the reporter stays the record's author.
- **Per-job history & turnaround timer** so firm owners can see pages processed and time saved.

## 6. AI angle — what's load-bearing

Remove the AI and there is no product — you'd just be a file converter. The entire value is (1) forced audio-to-text alignment that pinpoints where the CAT draft diverges from what was actually said, and (2) a language model applying the reporter's punctuation/formatting conventions and untangling mistranslated steno into correct English. This is the scopist's cognitive labor, automated. The "flag don't guess" behavior is also AI-driven — confidence scoring on each span is what makes a reporter trust it enough to review only the risky parts. This is load-bearing AI, not a chatbot bolted to a form.

## 7. Localization angle (if any)

N/A — this is a US-first play by design. Court reporting, steno theory, CAT software (Case CATalyst/Eclipse), and the scopist labor market are a distinctly US/Canada institution tied to the American deposition and verbatim-record system. The moat here is domain-specific (steno untranslate, US legal formatting), not geographic. A later UK/Australia cut exists but the workflow and file formats differ enough to treat as a separate product.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** Hybrid. A $99/mo base for solo reporters including a page allowance, then $0.35–$0.50/page over the allowance — deliberately anchored *below* the ~$1.25/page they pay a human scopist, so every page processed is money saved.
- **ACV:** A working reporter processing ~2,000 pages/month lands around $1,200–$2,000/year; small firm owners with multiple reporters run higher.
- **Rough math to $1M ARR:** ~650 reporters at ~$1,500 ACV = ~$1M. Out of 23,000 reporters, that's under 3% of the market.
- **Rough math to $5M ARR:** ~3,000 reporters at ~$1,600 ACV, or fewer reporters plus firm-tier seats and higher page volumes. Requires becoming the default first-pass tool for outsourcing reporters, not a niche experiment.
- **Expansion path:** Firm tier (multi-reporter seats, shared dictionaries, admin turnaround dashboards), a proofreading second pass, and eventually selling the same engine to the scopists themselves as a productivity multiplier (they scope 23 pg/hr today — 2× that and they take more clients).

## 9. Go-to-market wedge — first 100 customers

- **Mine CSRNation and the state associations directly.** Reporters and scopists post there constantly with names and CAT software listed. DM the reporters posting rush scopist requests — literally the people saying "I need this cleaned by tomorrow" — with a 60-second demo cleaning a sample untranslate. That's intent you can't buy.
- **Facebook reporter groups.** "Encouraging Court Reporters," steno student groups, and scopist groups are large, active, and gossip fast. A single credible before/after post ("here's a 250-page daily, first-passed in 20 minutes, flags only on the risky spans") travels.
- **State court reporter association conventions and CEU channels.** Reporters gather at NCRA and state conventions; a booth or a sponsored "clear your backlog" session reaches the exact buyer who's overloaded. Vendors already market scopist services through these channels.
- **Firm owner cold outreach.** Small reporting firms (5–30 reporters) feel the shortage hardest and control budget. Scrape firm directories, send a per-firm ROI note: "your reporters spent X hours/pages on scoping last month; here's what that costs vs. ScopeFinish."
- **Convert the demo into a free trial on the reporter's own next daily** — nothing sells like watching your own rush job come back clean overnight.

## 10. Build complexity — justification

Medium. The heavy lifting — ASR with word-level timestamps, LLM cleanup, PDF/text handling — is off-the-shelf. The custom work is the domain glue: reliable ASCII/RTF-CRE round-tripping that survives Case CATalyst and Eclipse re-import without breaking pagination, a confidence-flagging UI reporters actually trust, and per-reporter style profiles. That's real engineering plus deep steno-domain knowledge (or a reporter co-founder/advisor), but it's integration work, not research. A technical builder with a domain advisor ships a credible v1 in ~3–4 months.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Reporter remains author and certifier; tool is a drafting aid, not a record replacement. |
| Ethical — no harm / dark patterns | ✅ | Flags uncertainty rather than hiding it; reporter reviews the record before certifying. |
| Market exists (evidence above) | ✅ | Active paid scopist market, documented shortage, reporters posting rush requests. |
| 1–5 person team can build this | ✅ | Off-the-shelf ASR/LLM + integration glue; technical founder + domain advisor. |
| Launchable with <$50K / ₹40L | ✅ | No hardware, no data acquisition; inference and dev cost only. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | Reporters lose margin and turn down work over this weekly; not quite daily hair-on-fire for every reporter, but acute for the overloaded outsourcing segment. |
| Demand evidence | 15 | 13/15 | Paid scopist market ($1.25/pg), documented shortage, verbatim rush requests, active forums. Multiple independent signals a skeptic would nod at. |
| Build feasibility | 15 | 11/15 | Off-the-shelf AI, but CAT round-trip fidelity and trust-grade flagging are genuinely fiddly. 3–4 months, not 4 weeks. |
| Distribution clarity | 15 | 12/15 | Named channels (CSRNation, FB groups, state conventions) with the exact buyer, but conversion of skeptical reporters is unproven. |
| Revenue mechanics | 15 | 12/15 | Priced below an existing per-page spend they already pay — easy ROI story; retention depends on trust and accuracy holding up. |
| Time to first revenue | 10 | 8/10 | Reporters buy tools fast and pay per-page today; trial on their next daily can convert in weeks. |
| Defensibility | 10 | 4/10 | Execution + workflow lock-in (style profiles, dictionaries) only. Steno/CAT vendors could build this; head start and reporter trust are the moat. |
| **Total** | **100** | **76/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required` — needs an engineer who can wrangle ASR/LLM pipelines *and* someone who deeply understands steno, CAT software, and how reporters actually work (ideally a reporter co-founder or close advisor). Selling to this community without domain credibility fails.

### Key assumptions to validate (3–5)

1. **Assumption:** A clean first pass saves the reporter enough time/money over a human scopist to switch. **How to test:** Run 10 reporters' real dailies through a manual+AI pipeline; measure their finalize time vs. their normal scopist round-trip, and whether they'd pay $0.35–0.50/page for it.
2. **Assumption:** Reporters will trust an AI first pass if uncertainty is flagged rather than hidden. **How to test:** Watch 5 reporters review a flagged draft; do they trust the flags, or do they re-read everything anyway (which kills the time savings)?
3. **Assumption:** ASCII/RTF-CRE round trip survives re-import into Case CATalyst and Eclipse without breaking pagination/formatting. **How to test:** Export → clean → re-import cycles on both platforms with real files; verify page numbers and formatting hold.
4. **Assumption:** The outsourcing segment is large enough to hit $1M ARR at <3% share. **How to test:** Survey CSRNation/FB groups on what % outsource scoping and typical monthly page volume.

### Risk flags

1. **Platform dependency:** Relies on Case CATalyst/Eclipse keeping ASCII/RTF-CRE round-trip open. If Stenograph ships its own first-pass AI inside CATalyst (they already have RealTeam and AI features), they own the workflow. Mitigate by moving fast and locking in reporter style profiles.
2. **Trust/accuracy risk:** The transcript is a legal record. One high-profile "AI ate a word and changed testimony" story could poison the whole community. The "flag, don't guess" design and reporter-final-review are non-negotiable, not features.
3. **Market timing / substitution:** If courts keep expanding to digital-recording + AI transcription (the CA path), the reporter population — your customer — shrinks over the decade. Near-term the shortage helps you; long-term the ground may shift under the whole profession.

## 14. Structured verdict

```
Score:                  76/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder with a court-reporter/scopist co-founder or advisor
Time to revenue:        6–10 weeks (per-page trial on reporters' own dailies)
Capital to launch:      $15–30K ($ inference + dev; no hardware, no data buy)
Top 3 assumptions to validate first:
  1. Time/money saved vs. human scopist justifies the switch — measure on 10 real dailies
  2. Reporters trust flagged uncertainty enough to skip re-reading everything — observe 5 reviews
  3. ASCII/RTF-CRE round trip survives Case CATalyst + Eclipse re-import — cycle real files
Kill criteria:
  - Abandon if reporters re-read the full draft anyway (time savings <30%) in the 10-reporter test
  - Abandon if round-trip re-import corrupts pagination/formatting on either major CAT platform and can't be fixed
  - Abandon if Stenograph/Eclipse ships an equivalent in-CAT first-pass AI before your v1 lands
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Recruit 8–10 freelance reporters from CSRNation and FB groups (offer free scoping on one real daily each). Collect their untranslate + audio and their current scopist cost/turnaround as the baseline.
- **Day 3–4:** Run each through a hand-assembled pipeline (Whisper alignment + LLM cleanup + manual flagging). Return CAT-ready drafts. Sit with each reporter (or record) as they finalize; time it against their normal scopist round-trip.
- **Day 5:** Decide go / no-go on a **falsifiable** bar: at least 6 of 10 reporters finalize ≥30% faster than their scopist baseline **and** say they'd pay $0.35–0.50/page for it. Miss that bar → the time-savings thesis is wrong, and it's a PASS until the AI or the workflow changes.
