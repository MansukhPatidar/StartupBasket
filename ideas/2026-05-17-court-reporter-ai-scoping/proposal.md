---
title: "ScopeAhead — AI first-pass scoping draft for court reporters"
slug: court-reporter-ai-scoping
date: 2026-05-17
category: LegalTech / US Independent Court Reporters & Small Reporting Agencies
complexity: Medium
score: 76
verdict: GO
confidence: Medium
oneLiner: "Turns your CAT raw translation plus audio into a clean, near-final transcript you certify — no scopist required."
tags:
  vertical: ProfessionalServices
  model: SaaS
  geography: US
  secondary: [AI-agent, Solo-builder, Workflow-automation, Voice-first, Legal]
axes:
  problem: 16
  demand: 13
  build: 10
  distribution: 12
  revenue: 12
  time: 7
  defensibility: 6
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# ScopeAhead — AI first-pass scoping draft for independent court reporters

## 1. One-liner

Turns your CAT raw translation plus audio into a clean, near-final transcript you certify — no scopist required.

## 2. Trend signal — why now?

Three things collided in the last 18 months.

First, the stenographer shortage stopped being a forecast and became an operating reality. The US stenographic workforce is down 21% over the decade, only ~200 new reporters enter per year against ~1,120 retiring, stenography-school enrollment has dropped 74%, and 42% of programs have closed. 76% of legal professionals surveyed report scheduling difficulties, 55% report increased cost. The surviving reporters are working more jobs with less help.

Second — and this is the part nobody outside the industry sees — there is now a *scopist* shortage layered on top of the reporter shortage. The trade press is openly calling it "a silent threat to the integrity of court reporting": veteran scopists are retiring, the replacement pool is "not software-literate," and reporters report getting back transcripts "riddled with errors — sometimes worse than if they had never touched them." The bottleneck moved from capturing the record to *producing the certified transcript*.

Third, the tech to do first-pass scoping cleanup got good and cheap in 2025–26: diarized ASR plus LLM contextual correction can now reconcile a steno CAT translation against the courtroom audio well enough to fix mistranslates, untangle speaker labels, normalize Q/A and punctuation, and flag genuine inaudibles. The incumbents who noticed (Sonix, Voicescript, Rev) all built ASR-*first* products that compete with the stenographer — which the stenographer hates and won't adopt. Nobody built the tool that makes the *steno reporter's own output* finishable without a human scopist.

Provenance:
  - Signal 1 (Demand): Stenographer shortage hard numbers + 76% scheduling / 55% cost pain; layered scopist shortage called "a silent threat" with untrained replacement pool — https://www.speechmatics.com/company/articles-and-news/court-reporter-shortage , https://stenoimperium.com/2025/06/26/the-scopist-crisis-a-silent-threat-to-the-integrity-of-court-reporting/ — 2025-06 to 2026-02
  - Signal 2 (Feasibility): RTF/CRE is a documented universal CAT interchange format; CaseCATalyst/Eclipse export audio-synced transcripts; AI court-reporting transcription matured and shipped in 2026 — https://solutioncenter.stenograph.com/import/importrtf , https://sonix.ai/legal/court-reporters — 2026
  - Signal 3 (Economic): Scopist labor is a priced, liquid spend ($1.25–$1.50/page scoping; $1.65–$2.00/page scoping+proofing); funded incumbents (Rev, Verbit, TransPerfect, Voicescript) are pouring money into AI court reporting — https://www.worldoffreelancers.com/scopist-rates/ , https://www.jdsupra.com/legalnews/the-future-of-court-reporting-how-ai-is-7229472/ — 2026
  Category: Tech-unlock

## 3. The opportunity

Every certified deposition transcript goes through the same assembly line: reporter writes steno → CAT software (CaseCATalyst, Eclipse, StenoCAT) auto-translates it into rough English → **scoping** (line-by-line edit fixing mistranslates, speaker IDs, punctuation, untranslates) → **proofreading** → reporter certifies and bills. Scoping is the slow, expensive, human-scarce step. Reporters either burn their own nights doing it or pay a freelance scopist $1.25–$1.50/page out of their own invoice.

The incumbents attacked the wrong layer. Sonix, Rev, Voicescript built AI that *replaces the stenographer* — record the room, ASR it, sell "AI court reporting." Stenographers, who are the buyers here, view that as an existential threat and a quality insult, and the certifying authority in most jurisdictions is still a credentialed human. So those products sell to courts and big agencies trying to route *around* reporters — not to reporters.

ScopeAhead does the opposite: it makes the *reporter's own steno record* the source of truth and uses AI only to do the first scoping pass — the grunt work the scarce, error-prone freelance scopist does today. The reporter stays the author and certifier. We're not replacing the guardian of the record; we're replacing the unreliable subcontractor who got 90% cheaper but isn't, by giving the reporter a draft that's 80% scoped before a human touches it.

10× claim, concretely: a 250-page transcript that costs a reporter $375 and a 2–3 day wait for a freelance scopist comes back from ScopeAhead in under an hour for a fraction of that, and the reporter does final review/certify the same day.

## 4. Target market

- **Primary customer:** US freelance stenographic court reporters (sole proprietors and 2–10-person reporting firms) who self-produce or outsource scoping for depositions, EUOs, arbitrations, and hearings. Secondary: the scopists themselves, who can adopt it as a force-multiplier and take more jobs.
- **Why they buy:** In their words — "I can't find a scopist I trust," "the ones I get back are worse than no scopist," "I'm doing my own scoping until 1 a.m. to make a Friday deadline," "rush turnaround is killing me and I'm paying $1.50 a page to someone who doesn't run spellcheck." They lose money on every page they pay out for scoping and lose sleep on every page they scope themselves.
- **Rough TAM reasoning:** ~17,700 court-reporter jobs serving courts/depositions + the broader ~23,000 working stenographic reporters in the US. Even at a serviceable 12,000 active freelance/deposition reporters and a $79/mo + per-page model, this is a clean ~$15–25M revenue ceiling — too small for the funded ASR players to bother defending, ideal for a bootstrapper.
- **Why now for them:** The scopist they relied on for 15 years just retired, the replacements are unreliable, turnaround demands went up because of the reporter shortage, and for the first time the AI is actually good enough to trust as a *first pass* (not a final product).

## 5. Product sketch (MVP)

- Import a job from CaseCATalyst/Eclipse/StenoCAT via the standard RTF/CRE export plus the synced audio file (the formats every CAT system already produces).
- AI first-pass scope: reconcile the steno translation against audio to fix mistranslates and untranslates, normalize Q/A colloquy, fix obvious punctuation/numbers, and apply the reporter's own job dictionary/preferences.
- Speaker-label cleanup: align CAT speaker IDs to the audio's diarized turns and surface a one-screen "is this right?" confirmation instead of hunting through 250 pages.
- Confidence-flagged review view: the draft is delivered with every AI change visibly marked and every genuine inaudible/uncertain stretch flagged with a clickable audio jump — so the reporter reviews fast and stays in control of the record.
- Export back to clean RTF/CRE that reimports into the reporter's CAT system for final certification and formatting — fits the existing workflow, doesn't replace the CAT software.
- Per-reporter learning: it remembers their corrections, preferred spellings, and case-specific terms so pass two is better than pass one.
- Turnaround SLA dashboard: which jobs are due, which are AI-scoped and awaiting human review, expedite toggle.

## 6. AI angle — what's load-bearing

Remove the AI and there is no product — it's a directory of human scopists, which already exists and is the thing failing. The load-bearing work is multimodal reconciliation: taking a *wrong-but-structured* steno CAT translation and a *messy-but-truthful* audio track and producing a transcript better than either alone. That's exactly contextual ASR + LLM correction conditioned on the steno output and a custom dictionary — capability that became reliable and cheap in 2025–26. The non-AI parts (file import/export, RTF/CRE plumbing, review UI) are glue. The AI *is* the scopist.

## 7. Localization angle

N/A — this is a US-only play and that's deliberate. The opportunity is specific to the US stenographic certification regime, US CAT software (CaseCATalyst/Eclipse dominate the US), US deposition economics, and the US scopist labor market. Other common-law markets either use different recording regimes or are too small to matter. Forcing a localization angle here would weaken, not strengthen, the wedge.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** $79/mo base (subscription, includes a page allowance) + $0.40–$0.60 per scoped page over the allowance. Anchored hard against the $1.25–$1.50/page they pay a freelance scopist today — we are unambiguously the cheap option, and they keep more of their own invoice.
- **ACV:** A working freelance reporter producing ~150–250 pages/day a few days a week scopes ~3,000–6,000 pages/month. At blended ~$0.50/page that's roughly $1,500–$3,000/mo in usage; even discounting heavily for solo/part-time reporters, realistic blended ACV is **$3,000–$5,000/year**.
- **Rough math to $1M ARR:** ~280 active reporters at ~$3,600/yr blended = $1M. There are ~12,000+ serviceable. This is a 2–3% penetration story, not a miracle.
- **Rough math to $5M ARR:** ~1,200–1,400 reporters (~10% of serviceable) plus an agency tier (firms with 5–20 reporters on a seat + volume contract). Achievable if churn stays low and the per-reporter dictionary lock-in holds.
- **Expansion path:** add proofreading pass (the other $0.40/page step) → agency seats → rush/SLA premium tier → archived-transcript search and exhibit handling as upsells.

## 9. Go-to-market wedge — first 100 customers

This profession is unusually reachable — it's small, organized, directory-listed, and loud about its pain.

- **The scopist/reporter directories are a target list, not a metaphor.** StenoSearch, stenovate, ProScopists and the CAT-specific directories publicly list thousands of working reporters and scopists with contact info, segmented by CAT software. Scrape, segment by Eclipse vs CaseCATalyst, send a 90-second screen-recording showing a real messy CAT file going clean. Expect a strong reply rate from a group actively complaining about this exact problem.
- **State court reporter associations + NCRA channels.** Every state has an association with newsletters, listservs, and an annual convention; the trade press (Stenonymous, StenoImperium) is already running the "scopist crisis" story. A sponsored deep-dive + convention demo lands directly on the buyer.
- **Reporter Facebook groups and the r/courtreporting community.** This trade lives in tight-knit Facebook groups (Encouraging Court Reporters, etc.) and forums where "anyone know a good scopist?" is a daily post. Seed 10 power-user reporters with free volume in exchange for public before/after testimonials; word-of-mouth in this community is the entire marketing channel.
- **Scopist channel flip:** recruit the *good* scopists as power users — they take more jobs with the tool, and they recommend it to the reporters who hire them.

## 10. Build complexity — justification

Medium. The plumbing is off-the-shelf: RTF/CRE import/export is a documented public format, audio handling is standard, and the AI is API-level multimodal ASR + LLM correction — no custom model training to ship v1. The genuinely hard parts are (a) getting the steno-aware reconciliation good enough that reporters trust it (this needs domain expertise and a tight feedback loop with real reporters and real files) and (b) round-tripping RTF/CRE cleanly across CaseCATalyst and Eclipse quirks without mangling formatting. A technical founder with a court-reporter design partner ships a credible v1 in ~3–4 months.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Reporter remains the certifying author; tool is a drafting aid, like a scopist. No certification authority assumed. |
| Ethical — no harm / dark patterns | ✅ | Human stays in the loop and certifies; all AI edits surfaced for review. We argue *for* the human reporter, not around them. |
| Market exists (evidence above) | ✅ | Documented dual shortage, priced incumbent labor ($1.25–$1.50/pg), vocal trade press. |
| 1–5 person team can build this | ✅ | Technical founder + domain advisor; v1 in 3–4 months. |
| Launchable with <$50K / ₹40L | ✅ | Mostly API + dev time; no hardware, no enterprise sales motion. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | Real money + lost sleep on every transcript; dual shortage makes it weekly+ pain. Not quite hair-on-fire because reporters have a (bad, costly) workaround today. |
| Demand evidence | 15 | 13/20→13/15 | Hard workforce numbers, priced labor market, trade press naming the crisis, funded adjacent players. A skeptic nods. |
| Build feasibility | 15 | 10/15 | Off-the-shelf AI/plumbing, but steno-aware reconciliation + RTF/CRE round-trip fidelity need real domain iteration. |
| Distribution clarity | 15 | 12/15 | Named directories, named communities, named associations. Conversion strong but unproven. |
| Revenue mechanics | 15 | 12/15 | Pricing benchmarked far below the $1.25–$1.50/pg they already pay; ACV solid. Usage-mix assumption is the soft spot. |
| Time to first revenue | 10 | 7/10 | Reachable buyers + acute pain → weeks to first paying reporters after a working demo, but needs a trustworthy v1 first. |
| Defensibility | 10 | 6/10 | Soft moat: per-reporter dictionary/preference lock-in, niche brand/trust in a tight community, workflow embedment. Copyable by a focused competitor, not by the ASR-first incumbents (wrong posture for them). |
| **Total** | **100** | **76/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required` — needs solid AI/multimodal engineering plus a court-reporter or scopist design partner. Trust in this community is earned by accuracy, not marketing.

### Key assumptions to validate (3–5)

1. **Assumption:** AI first-pass scoping against steno CAT output + audio is good enough that reporters trust it as a draft (not just marginally better than raw translate). **How to test:** Run 20 real anonymized depositions from 5 design-partner reporters through a prototype; measure edit-distance from AI draft to the certified final vs. raw CAT translate. Target: AI draft cuts human scoping time ≥60%.
2. **Assumption:** Reporters will route their *own* record through an outside tool (trust/confidentiality). **How to test:** 30 reporter interviews on willingness + a paid pilot with NDA/retention terms; watch pilot-to-paid conversion.
3. **Assumption:** RTF/CRE round-trips cleanly enough across CaseCATalyst + Eclipse to not create *new* formatting cleanup. **How to test:** Export/import loop test on 50 real files across both systems; measure formatting-defect rate post round-trip.
4. **Assumption:** Per-page pricing well below scopist rates produces $3–5K ACV at realistic part-time usage. **How to test:** Model actual page volumes from pilot reporters' real monthly output, not assumed full-time figures.

### Risk flags

1. **Platform dependency:** Relies on CAT vendors continuing to support open RTF/CRE export. Stenograph could ship its own AI scope inside CaseCATalyst and bundle it — the single biggest threat. Mitigation: move fast, win the cross-CAT + scopist-network position they won't.
2. **Market timing / trust:** Stenographers are culturally hostile to "AI in the record." Messaging must be relentlessly "human reporter stays the author"; one viral "AI faked a transcript" story poisons the well. Confidentiality of sealed/sensitive testimony is a hard objection.
3. **Capital intensity at scale:** Audio + multimodal inference cost scales with pages; pricing must keep gross margin healthy as volume grows — model the $0.40–$0.60/page floor against real inference cost early.
4. **Regulatory variance:** Certification rules differ by state; the tool must never imply it certifies. Stays a drafting aid only.

## 14. Structured verdict

```
Score:                  76/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder (multimodal AI) + court-reporter/scopist design partner
Time to revenue:        8–12 weeks after a trustworthy v1 demo
Capital to launch:      $15–30K (API + dev time; no hardware, no sales team)
Top 3 assumptions to validate first:
  1. AI first-pass cuts human scoping time ≥60% on real depositions — edit-distance test on 20 real jobs
  2. Reporters will route their own record through an outside tool — 30 interviews + paid NDA pilot
  3. RTF/CRE round-trips clean across CaseCATalyst + Eclipse — 50-file export/import defect test
Kill criteria:
  - Abandon if AI draft reduces human scoping time <40% on real-world deposition files
  - Abandon if <10% of 50 directory-sourced reporters take a paid pilot after seeing a working before/after demo
  - Abandon if Stenograph ships and bundles a comparable in-CAT AI scope before our v1 reaches paying customers
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Recruit 5 working freelance reporters from StenoSearch/Facebook groups; collect 15–20 real (anonymized/consented) deposition jobs as paired files: CAT raw translate + audio + the final certified transcript.
- **Day 3–4:** Build a thin prototype that reconciles raw translate against audio with LLM correction + dictionary; run all jobs through it. Measure edit-distance/scoping-time-saved AI-draft-vs-final compared to raw-translate-vs-final.
- **Day 5:** Decide. Go only if the AI draft cuts measured human scoping effort ≥60% on a majority of jobs **and** ≥3 of the 5 reporters say they'd pay for it after seeing their own files cleaned. Falsifiable: a number on time saved and a count of reporters who commit to a paid pilot — not "they seemed interested."
