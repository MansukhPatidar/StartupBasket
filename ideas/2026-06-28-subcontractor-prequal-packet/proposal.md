---
title: "PreqVault — prequalification packet keeper for subcontractors"
slug: subcontractor-prequal-packet
date: 2026-06-28
category: TradeTech / US Specialty Trade Subcontractors (electrical, plumbing, HVAC, concrete, drywall — 5–150 staff)
complexity: Medium
score: 74
verdict: GO
confidence: Medium
oneLiner: "Keeps every subcontractor's bonding, EMR, safety and financial docs current and auto-fills any GC's prequalification form."
tags:
  vertical: TradeTech
  model: SaaS
  geography: US
  secondary: [SMB, Workflow-automation, AI-agent, Document-automation, Construction]
axes:
  problem: 16
  demand: 12
  build: 11
  distribution: 11
  revenue: 12
  time: 7
  defensibility: 5
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# PreqVault — prequalification packet keeper for subcontractors

## 1. One-liner

Keeps every subcontractor's bonding, EMR, safety and financial docs current and auto-fills any GC's prequalification form.

## 2. Trend signal — why now?

Three things landed in the same 18-month window.

**The prequalification net got tighter.** In 2026, 89% of general contractors require subcontractor prequalification *before* issuing a bid invitation — not after. A 2024 AGC study found 70% of GCs observing increased subcontractor distress or default versus the prior year, and construction insurance premiums rose ~18% between 2024 and 2026. GCs are scared of an underinsured or insolvent sub blowing up a job, so they're demanding more paper, more often, and gating bid invites on it. Miss the prequal, miss the invite — no appeal.

**The paperwork is a real, measured time sink.** Industry write-ups put GC-side prequal admin at 15–20 hours/week chasing financial statements, safety records, bonding letters and COIs. But the underappreciated half is the *sub* side: every GC wants a bonding letter dated within the last 30 days, an EMR for the last 3 years, OSHA 300A logs for 3 years, third-party-prepared financials, project references — and every GC asks in a different format, on a different portal or PDF. As one construction guide put it bluntly: *"The biggest time sink in pre-qualification is not filling out forms. It is tracking down the documents you need to attach."*

**AI document extraction got cheap and reliable.** Pulling structured fields out of a CPA-prepared financial statement, an ACORD COI, an EMR letter and a surety bonding letter — then mapping them onto an arbitrary GC questionnaire — is now an off-the-shelf vision+LLM task that costs cents per packet. Two years ago this needed a brittle template engine per document type.

The incumbents (Highwire, Vertikal/CertFocus, Procore, Constrafor, COMPASS) are all **GC-side** — sold to the buyer, gated to that buyer's network. Constrafor and COMPASS offer a "fill once" universal form *free to subs*, but the sub only gets leverage where the GC is already on that exact platform. The sub who bids 8 GCs — most still on email and homegrown portals — has no neutral, portable, always-current packet that works everywhere.

Provenance:
  - Signal 1 (Demand): Subs forced to re-assemble bonding letters (dated <30 days), 3-yr EMR, OSHA 300A, third-party financials for every GC in a different format; "biggest time sink is tracking down the documents you need to attach" — https://projul.com/blog/construction-prequalification-guide/ , https://www.dpr.com/subcontractor-prequalification — 2026-06-28
  - Signal 2 (Feasibility): Cheap, reliable vision+LLM extraction maps fields from COIs/financials/EMR/bonding letters onto arbitrary forms; GC-side tools confirm doc set (W-9, OSHA 300A, EMR, COI, bonding capacity) — https://www.procore.com/library/subcontractor-prequalification — 2026-06-28
  - Signal 3 (Economic): 89% of GCs require prequal before bid invites in 2026; insurance premiums +18% 2024–2026; GC-side prequal software is a funded category ($3K–$15K/yr GC-side; Vertikal $6/sub–$165/prequal) — https://www.vertikalrms.com/article/best-subcontractor-prequalification-software-2026-top-8/ , https://www.highwire.com/prequalification — 2026-06-28
  Category: Workflow automation

## 3. The opportunity

Every prequalification tool on the market is built for the **buyer** — the GC who wants to screen subs and dump risk. That's where the money and the funding went. Nobody built the **seller's** tool: the subcontractor who has to *produce* the evidence, keep it current, and respond to whatever portal or PDF a new GC throws at them within a tight bid window.

The disruption isn't "a better form." Constrafor and COMPASS already nailed the universal-form idea. The disruption is **portability + freshness + auto-fill across systems the sub doesn't control.** A sub's bonding letter expires every 30 days for prequal purposes; their EMR updates annually; their COI renews; a new project reference closes out every month. Today the sub's office manager re-hunts all of it, per GC, from scratch — and when they're slow, the GC moves on to a sub who answered first.

PreqVault is the sub's single source of truth: it holds the live packet, nags the surety/CPA/insurer for refreshed docs *before* they go stale, and when a GC sends a 14-page questionnaire or a portal link, it auto-fills the answers and assembles the attachment bundle in minutes instead of two days. It works whether the GC is on Highwire, on a homegrown SharePoint, or on a PDF emailed by a project coordinator — because it's the sub's tool, not the GC's.

## 4. Target market

- **Primary customer:** Office manager / estimator / owner at US specialty trade subcontractors — electrical, plumbing/HVAC, concrete, drywall, roofing, glazing — with 5–150 employees, $1M–$50M revenue, who bid commercial work across multiple GCs. The person who currently keeps the "prequal folder" on a shared drive.
- **Why they buy:** "Every GC wants the same eight documents in a different shape, and half of them want my bonding letter re-dated. I lose a day per prequal and I've missed invites because I couldn't turn it around in time." Late or incomplete prequal = no bid invitation, no appeal.
- **Rough TAM reasoning:** ~648K specialty trade contractor establishments in the US (Subsector 238); the slice that does *commercial GC work requiring prequalification* (vs. pure residential/service) is a meaningful minority — call it 80K–150K firms. At even 1% penetration and a $1,200–$3,600 ACV, that's a $100M–$500M serviceable line. We need ~700 customers for $1M ARR. The market is real and the unit is small enough for a bootstrap.
- **Why now for them:** Prequal moved *upstream* of the bid invite in 2026, GCs are demanding fresher docs because of default and insurance-premium fear, and the sub's manual folder approach now directly costs them invitations.

## 5. Product sketch (MVP)

- **Living packet vault:** upload bonding letter, EMR letters (3 yr), OSHA 300A (3 yr), COIs, third-party financials, W-9, licenses, safety program, project references — once. AI extracts and structures every field.
- **Freshness radar:** tracks every expiry (COI dates, 30-day bonding-letter window, annual EMR, fiscal-year financials) and auto-drafts the request email to the surety / CPA / insurance agent *before* the doc goes stale, so the packet is always bid-ready.
- **Any-form auto-fill:** paste a GC's PDF questionnaire or portal screenshot; PreqVault maps the sub's stored data onto it and produces a completed, attachment-bundled response to review and send.
- **Portal assist:** for the common GC portals (Highwire, Constrafor, COMPASS, Procore intake), pre-stage the exact answers and files the portal will ask for, so the sub fills it in one pass.
- **Reference & EMR storytelling:** auto-drafts the project-reference list and a short EMR/safety narrative GCs ask for, pulled from stored job history.
- **Multi-entity / multi-office:** handle subs with several legal entities or regional offices, each with its own bonding capacity and financials.
- **Audit trail & version history:** every version of every doc, with what was sent to which GC and when.

## 6. AI angle — what's load-bearing

Remove the AI and this is a glorified Dropbox folder — which is exactly what subs already have and hate. The AI does three jobs no template engine can: (1) **extract** structured fields from wildly varied source docs (a CPA compilation, an ACORD 25, a surety's bonding letter, a state EMR report) without a hand-built parser per format; (2) **map** that data onto an *arbitrary, never-seen* GC questionnaire or portal — the GC's form is the variable, and there are thousands of variants; (3) **draft** the soft narrative pieces (safety program summary, EMR explanation, reference write-ups) GCs increasingly want. The mapping step is the moat-y part: it's the difference between "fill once, reuse on our network" (what Constrafor/COMPASS do) and "fill once, reuse *anywhere*."

## 7. Localization angle (if any)

N/A — this is a US-first play. The wedge *is* the US prequalification regime (EMR, OSHA 300A, ACORD COIs, surety bonding capacity, AGC/ConsensusDocs conventions). That specificity is a feature, not a limitation: it's exactly why a generic global "document vault" loses to a tool that knows what a 30-day bonding letter is. Canada and Australia have analogous regimes and are plausible second markets, but not at launch.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** $99–$299/month per subcontractor firm, tiered by number of legal entities/offices and prequal volume. A "respond to unlimited GC prequals + freshness automation" plan at $149/mo is the anchor.
- **ACV:** ~$1,800 blended (mix of $99 single-office shops and $299 multi-entity mid-sized subs).
- **Rough math to $1M ARR:** ~560 firms × $149/mo × 12 ≈ $1.0M. Roughly 700 firms at the blended ACV.
- **Rough math to $5M ARR:** ~2,300 firms at $1,800 ACV, or hold customer count and grow ACV via add-ons: a "rush prequal" done-for-you service ($150–$300/packet, mirroring Vertikal's full-service price), a surety/CPA referral marketplace, and a "bid-readiness score" upsell. Realistic with a focused sales motion plus one inside rep.
- **Expansion path:** seats/entities, per-packet rush service, integrations into estimating tools, and a paid "GC sends you a prequal request → respond in PreqVault" inbound channel that turns GCs into a free acquisition funnel.

## 9. Go-to-market wedge — first 100 customers

- **Trade-association member lists:** NECA (electrical), MCAA/PHCC (mechanical/plumbing), ABC and AGC local chapters publish member directories. Scrape 3,000 commercial specialty subs, send a 90-second Loom: "Here's your bonding letter, EMR and financials auto-mapped onto [a real GC's] prequal form in 4 minutes." Expect 3–6% reply on a pain this specific.
- **Ride the inbound prequal request:** partner with 5–10 mid-size GCs to add "respond via PreqVault" as an option on the prequal requests *they already send subs*. The GC gets cleaner, faster submissions (their pain too); every request becomes a warm sub signup. This is the compounding channel.
- **Surety agents & construction CPAs as resellers:** these people already nag subs for the exact docs PreqVault automates. They have the trust and the list. Rev-share or flat referral; they look like heroes for solving their clients' prequal headache.
- **Targeted content on the exact queries subs Google:** "bonding letter dated within 30 days," "EMR letter for prequalification," "Highwire prequal what documents" — high-intent, low-competition long-tail.
- **r/Construction and trade Facebook groups:** the office-manager community is active and vocal; a genuinely useful free "prequal document checklist" generator is a clean top-of-funnel.

## 10. Build complexity — justification

Medium. The vault, expiry tracking, email drafting and standard portal pre-staging are off-the-shelf web + LLM work — a pair could ship that in 8–10 weeks. The hard 20% is robust extraction across messy real-world documents and reliable mapping onto arbitrary GC forms; that needs an eval harness, a human-in-the-loop review step for v1, and iteration on real subs' documents. Call it 3–4 months to a credible v1 for a small team. No custom models, no regulatory approval, no hardware.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Sub voluntarily storing & submitting their own documents. Handle PII/financials with standard security. |
| Ethical — no harm / dark patterns | ✅ | Helps the sub respond honestly and faster. No misrepresentation — it surfaces the sub's real EMR/financials, doesn't fake them. |
| Market exists (evidence above) | ✅ | 89% of GCs gate bids on prequal; funded GC-side category; measured 15–20 hr/week burden. |
| 1–5 person team can build this | ✅ | Off-the-shelf stack + LLM extraction; human-in-loop for v1. |
| Launchable with <$50K / ₹40L | ✅ | Inference + infra are cents/packet; cost is founder time. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | Felt repeatedly, directly costs bid invitations, no appeal for late/incomplete. Workarounds (shared folder) exist but are painful — keeps it out of 17+. |
| Demand evidence | 15 | 12/15 | Strong: funded GC-side category, measured time burden, explicit doc-freshness requirements. Direct sub-side *paid* demand is inferred, not yet proven — one notch off top band. |
| Build feasibility | 15 | 11/15 | Vault + automation is easy; arbitrary-form mapping and messy-doc extraction need an eval loop and human-in-loop. 3–4 months, not 6 weeks. |
| Distribution clarity | 15 | 11/15 | Named lists (NECA/MCAA/ABC/AGC), surety/CPA resellers, GC inbound funnel. Conversion on cold trade outreach is real but not a slam dunk. |
| Revenue mechanics | 15 | 12/15 | Clear $99–$299 pricing benchmarked against $6–$165/prequal incumbents; ~700 firms to $1M. Churn risk if subs treat it as seasonal. |
| Time to first revenue | 10 | 7/10 | Pre-sellable to subs who feel the pain now; needs a working extraction demo first, so 6–10 weeks not 4. |
| Defensibility | 10 | 5/10 | Execution + accumulating per-sub data + reseller relationships. Constrafor/COMPASS could extend off-network; moat is speed and sub-side focus, not structural. |
| **Total** | **100** | **74/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required` — needs solid document-extraction engineering and someone who genuinely understands construction prequalification (EMR, surety, ACORD, GC conventions). A founder who's lived in a sub's back office is a massive unfair advantage.

### Key assumptions to validate (3–5)

1. **Assumption:** Subs will pay $99–$299/mo for a tool the GC-side incumbents give them "free" (on-network). **How to test:** 30 discovery calls with sub office managers; pre-sell 10 annual plans before building beyond the demo.
2. **Assumption:** Auto-mapping onto arbitrary, unseen GC forms works well enough that subs trust the output with a quick review. **How to test:** collect 25 real GC prequal forms/portals from target subs, measure auto-fill accuracy against human completion.
3. **Assumption:** The "respond via PreqVault" GC-inbound funnel actually converts subs. **How to test:** pilot with 3 friendly mid-size GCs, measure sub signup rate per request sent.
4. **Assumption:** Surety agents/construction CPAs will refer. **How to test:** sign 3 referral partners, track referred signups over 60 days.

### Risk flags

1. **Competitive encroachment:** Constrafor/COMPASS already own "fill once" and are free-to-sub. If either ships true off-network portability + freshness automation, the wedge narrows. Mitigant: move fast, own the sub-side brand, lock in resellers.
2. **Trust/data sensitivity:** subs are handing over financials and EMRs — a breach or a bad auto-fill that sends wrong numbers to a GC is reputationally fatal. Mitigant: human-in-loop review, security posture from day one.
3. **Churn/seasonality:** a sub might prequal heavily for a few months then go quiet. Mitigant: freshness-automation value is year-round (docs expire regardless of bidding), framed as "always bid-ready insurance."

## 14. Structured verdict

```
Score:                  74/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder with a construction back-office/prequal domain advisor
Time to revenue:        6–10 weeks (pre-sell against a working extraction demo)
Capital to launch:      $8–15K (founder time + inference/infra + a few months runway)
Top 3 assumptions to validate first:
  1. Subs pay $99–$299/mo despite free on-network options — 30 discovery calls + 10 pre-sold annual plans
  2. Auto-fill onto arbitrary GC forms is accurate enough to trust — 25 real-form accuracy test
  3. GC-inbound "respond via PreqVault" funnel converts — 3-GC pilot, measure sub signup rate
Kill criteria:
  - Abandon if <10% of 50 qualified sub office managers will commit to a paid pilot after seeing the demo
  - Abandon if auto-fill accuracy on real GC forms stays below ~85% field-level after a focused iteration cycle
  - Abandon if Constrafor or COMPASS ships true off-network portability + freshness before your v1 lands
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Pull 50 commercial specialty subs from one NECA/MCAA/ABC chapter directory. Cold-call/email 20 office managers; ask how many prequals they did last quarter, hours per prequal, and whether they've lost an invite to a slow turnaround.
- **Day 3–4:** Collect 15–20 *real* GC prequal forms/portal screenshots from those subs. Hand-run the extraction+mapping on 5 of them with current off-the-shelf models to measure auto-fill accuracy. Build a 90-second Loom of the best result.
- **Day 5:** Send the Loom to the 50-sub list with a pre-sale offer ($149/mo, first 3 months half off). **Go/no-go:** ≥5 subs (10%) put down a card or verbally commit to a paid pilot, AND auto-fill accuracy on the 5 test forms clears ~85% field-level. Falsifiable: if either misses, it's a VALIDATE-again or PASS, not a build.
