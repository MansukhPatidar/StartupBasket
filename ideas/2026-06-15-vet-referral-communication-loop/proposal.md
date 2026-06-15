---
title: "LoopVet — referral relay for veterinary specialty hospitals"
slug: vet-referral-communication-loop
date: 2026-06-15
category: HealthTech / US Veterinary Specialty & Emergency Hospitals
complexity: Medium
score: 74
verdict: GO
confidence: Medium
oneLiner: "LoopVet runs the rDVM handoff loop for specialty vet hospitals — clean intake in, auto-drafted updates and final report out."
tags:
  vertical: HealthTech
  model: SaaS
  geography: US
  secondary: [AI-agent, Vertical-SaaS, SMB, Workflow-automation, VetTech]
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

# LoopVet — referral relay for veterinary specialty hospitals

## 1. One-liner

LoopVet runs the rDVM handoff loop for specialty vet hospitals — clean intake in, auto-drafted updates and final report out.

## 2. Trend signal — why now?

The referral loop between a primary-care vet (rDVM) and the specialty/ER hospital they refer to is still run on **fax machines, phone tag, and a $20/hr human "referral coordinator."** Three things changed at once:

1. **AAHA published 2025 Referral Guidelines** specifically to fix communication gaps between primary care and specialists — and named a "referral coordinator" role whose entire job is case-by-case communication between teams. When the trade body writes guidelines, the pain is institutional, not anecdotal.
2. **Research keeps showing the disconnect costs referrals.** rDVMs rank "quality of communication and updates from the clinician" near the top of why they keep sending cases to a given hospital; specialists consistently under-rate how much that matters. Referrals are the entire top of a specialty hospital's funnel — and they leak it through bad follow-up.
3. **LLM drafting of discharge/referral letters is now cheap and good.** Published studies show ~52% time reduction on discharge letters; vet ambient scribes (PawfectNotes, HappyDoc, ScribbleVet) are already in clinics. The drafting primitive is solved — nobody has pointed it at the *rDVM-facing* side of the loop.

Meanwhile the buyer has money: vet software is a $1.2–2B market growing 6–11% CAGR, the vet emergency/specialty market is ~$22B, and PE is rolling up specialty hospitals into "super-hospitals" that compete directly on referral relationships.

Provenance:
  - Signal 1 (demand): VitusVet "Five Reasons the Veterinary Referral Process is Broken" — "the fax doesn't work after hours… doesn't always come through cleanly and legibly, and is incredibly time consuming on both ends" — https://vitusvet.com/blog/five-reasons-the-veterinary-referral-process-is-broken/ — 2026-06-15
  - Signal 2 (feasibility): "Comparison of the Quality of Discharge Letters Written by LLMs and Junior Clinicians" + vet documentation studies — ~52% time saving on discharge letters; vet scribes already shipping — https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11306941/ — 2026-06-15
  - Signal 3 (economic): Veterinary emergency care market ~$22.17B in 2026, PE consolidation into specialty super-hospitals competing on referrals — https://www.mordorintelligence.com/industry-reports/veterinary-emergency-care-market — 2026-06-15
  Category: Underserved niche

## 3. The opportunity

Every specialty/ER vet hospital lives or dies by its **referral relationships**. The rDVM is the customer-acquisition channel — lose their trust and the case volume dries up. The single biggest reason rDVMs sour on a hospital isn't clinical quality; it's that they **send a patient into a black hole and never hear back** until (maybe) a fax of the final invoice.

Hospitals "solve" this by hiring referral coordinators — humans at $17–34/hr whose job is literally to phone, email, and fax rDVMs to keep them in the loop, plus chase inbound records before the appointment. That role is the budget line LoopVet collapses.

The incumbents don't cover this. **VitusVet and Vetstoria** are client-facing (online booking, two-way *pet-owner* texting). **Instinct Shareville** and Cornell's **rVet Connect** are EMR-bundled portals that passively notify the rDVM on check-in/check-out and let them *pull* finalized documents — only if the hospital already runs that exact PIMS, and only the documents, never the proactive human-readable "here's how Bella's doing" update the rDVM actually wants. Nobody owns the **inbound→outbound communication loop itself**, PIMS-agnostic, with AI doing the drafting. That's the wedge.

## 4. Target market

- **Primary customer:** Practice manager / medical director / hospital administrator at a US **multi-specialty or ER referral hospital** — typically 1–6 locations, 5–40+ DVMs, running a referral coordinator (or wishing they had one). Independent and small-group hospitals first; PE-backed groups as expansion.
- **Why they buy (in their words):** From the vet trade press — fax "doesn't work after hours… is incredibly time consuming on both ends," "General practitioners get annoyed at having to fax/refax/resend records," "It requires referring veterinarians to work too hard," and rDVMs are left frustrated when records don't arrive before the appointment. The hospital's own framing: *we are losing referrals because we communicate badly, and our coordinator can't keep up.*
- **Rough TAM reasoning:** There are on the order of low-thousands of specialty/ER referral hospital sites in the US (BluePearl, VEG, MedVet, NVA, and a long tail of independents). Even ~2,000 sites at a $400–900/mo ACV is a $10–20M ceiling on the core wedge before expansion — comfortably a sub-$5M-ARR bootstrap target, too small to interest a VC-scale incumbent.
- **Why now for them:** PE consolidation made referral volume a board-level metric; the labor market for referral coordinators is tight and turnover is high; and the AI drafting tools their own DVMs already use for SOAP notes have normalized "AI writes the first draft" inside the building.

## 5. Product sketch (MVP)

- **Inbound intake cleaner:** rDVM faxes/emails a referral → LoopVet OCRs it, extracts patient/owner/history/reason-for-referral into a structured handoff card, and flags what's missing ("no recent bloodwork attached") *before* the appointment.
- **rDVM status updates, auto-drafted:** At admit / key milestones / discharge, LoopVet drafts a short, plain-language update to the referring vet from the case record; specialist approves with one tap, it sends by their preferred channel (email/SMS/fax fallback).
- **Final referral letter draft:** Pulls the discharge/diagnostics into a clean rDVM-facing summary letter — the specialist edits instead of writing from scratch.
- **rDVM directory + preferences:** Tracks each referring practice, their fax vs email preference, and which DVM sent which case.
- **Loop dashboard:** Every active referral and its communication status — "rDVM not yet updated in 48h" surfaces to the coordinator instead of slipping.
- **PIMS-agnostic:** Works off uploaded records / email / fax + light integration where available — does not require the hospital to switch EMRs.

## 6. AI angle — what's load-bearing

Remove the AI and this is just another portal — which is exactly why the existing portals haven't won. The load-bearing AI work: (1) **reading messy inbound faxes/PDFs** and structuring them into a usable intake card, (2) **drafting the human-readable rDVM update and final letter** from clinical records in seconds instead of the specialist writing them (the ~52%-time-saving primitive), and (3) **deciding what's missing / when an update is overdue**. The product's whole value is collapsing a coordinator's manual read-write-chase cycle into review-and-approve. No AI, no product.

## 7. Localization angle (if any)

N/A — this is a US-first play. The wedge is the US specialty/ER referral structure, fax-heavy workflows, and PE-consolidated buyers. UK/AU/CA have similar referral structures and are natural later expansions, but there is no language/payment-rail localization that is the wedge here. Deliberately chosen as a US idea to rebalance the portfolio's recent LATAM/EU/SEA tilt.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** $400–900/mo per hospital site (flat), tiered by referral volume / number of DVMs. Anchored *below* the loaded cost of the referral-coordinator hours it saves (a single $20/hr coordinator is ~$3,500/mo loaded).
- **ACV:** ~$7,200/yr blended ($600/mo).
- **Math to $1M ARR:** ~140 sites × $600/mo × 12 ≈ $1.0M.
- **Math to $5M ARR:** ~700 sites at $600/mo, OR ~400 sites with a per-DVM/usage upsell pushing ACV to ~$1,000/mo. Requires landing a multi-site group or two (BluePearl/MedVet-scale) to clear the back half.
- **Expansion path:** add seats per specialist, per-location rollout inside groups, then upsell the *rDVM-facing* product (a free/cheap inbound portal for the referring practices the hospital sends to — strengthens lock-in and seeds the reverse direction).

## 9. Go-to-market wedge — first 100 customers

- **Scrape the directories.** VECCS facility list, AAHA-accredited referral hospitals, and specialty-hospital location pages (BluePearl/MedVet/independents) are public. That's a finite, named list of a few thousand sites with addresses and often the practice manager's contact.
- **Lead with the coordinator's pain, not features.** Send the practice manager a 90-second Loom: drop a real (anonymized) fax in, watch it become a clean intake card + a drafted rDVM update. "This is what your coordinator does in 25 minutes." Expect 3–5% reply on a tight, specific list.
- **Ride the trade channel.** Sponsor/present at VECCS and regional specialty CE events; get into dvm360 / vet practice-management newsletters. Referral coordinators have their own FB groups and forums — go where they complain.
- **Land one PE group's single hospital, expand to the chain.** These groups standardize tooling; one successful site is the wedge into 10–50.
- **Partner with vet scribe vendors.** Scribes own the in-room note; LoopVet owns the rDVM loop — adjacent, not competing. Co-sell.

## 10. Build complexity — justification

Medium. The drafting and intake-structuring are off-the-shelf LLM + OCR work; the dashboard and rDVM directory are standard web SaaS. The genuinely hard parts are (a) reliable extraction from ugly real-world vet faxes/PDFs, and (b) light, varied integrations / record ingestion across the PIMS zoo (Cornerstone, ezyVet, Instinct, Vetspire) — handled at MVP by upload/email/fax rather than deep integration. A pair could ship a credible v1 in ~3–4 months; getting extraction trustworthy on messy faxes is the calendar risk.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Veterinary records; no HIPAA/human-health gatekeeping. Standard data-handling care. |
| Ethical — no harm / dark patterns | ✅ | Specialist approves every outbound message; AI drafts, human sends. |
| Market exists (evidence above) | ✅ | AAHA guidelines, trade-press complaints, existing paid coordinator role + portals. |
| 1–5 person team can build this | ✅ | LLM/OCR + web SaaS; integrations deferrable. |
| Launchable with <$50K / ₹40L | ✅ | Inference + hosting + outreach; no capex. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 15/20 | Real, recurring, costs referrals (= revenue) — but it's a slow bleed, not hair-on-fire daily. Hospitals tolerate it today. |
| Demand evidence | 15 | 12/15 | Trade guidelines + sourced complaints + a paid human role + existing portals = clear demand. Docked: no direct "shut up and take my money" quotes for *this* product yet. |
| Build feasibility | 15 | 11/15 | Drafting is easy; trustworthy fax extraction across PIMS variety is the gnarly part. |
| Distribution clarity | 15 | 12/15 | Finite, named, scrapeable buyer list + trade channels. Conversion to a flat-fee SaaS is the unknown. |
| Revenue mechanics | 15 | 12/15 | Priced under a coordinator's cost; clear ACV; $1M needs only ~140 sites. Ceiling is modest. |
| Time to first revenue | 10 | 7/10 | Pilot in weeks once extraction works; sales cycle to hospital admin is a few weeks, not months. |
| Defensibility | 10 | 5/10 | Execution + workflow lock-in + rDVM relationship data over time. Instinct/EMR vendors could bundle this — real risk. |
| **Total** | **100** | **74/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required` — needs solid LLM/OCR engineering AND someone who actually understands the specialty-referral workflow (an ex-coordinator or specialty-hospital admin advisor is close to mandatory).

### Key assumptions to validate (3–5)

1. **Assumption:** Hospital admins will pay $400–900/mo to offload referral communication. **How to test:** 20 discovery calls with practice managers at independent specialty hospitals; pre-sell 3 pilots before building deep.
2. **Assumption:** AI can extract usable intake from real, messy vet faxes reliably enough that specialists trust it. **How to test:** Collect 100 anonymized real referral faxes, measure extraction accuracy on the fields that matter.
3. **Assumption:** rDVMs actually value (and notice) the proactive updates enough that hospitals see retained referrals. **How to test:** Pilot at 2 hospitals, survey their top 20 referring practices before/after on satisfaction + referral intent.
4. **Assumption:** PIMS-agnostic upload/email/fax ingestion is good enough for v1 without deep integration. **How to test:** Run a pilot end-to-end with zero EMR integration; see if the manual gap kills it.

### Risk flags

1. **Platform/incumbent risk:** Instinct (Shareville), ezyVet, or a PIMS vendor bundles an AI rDVM-update feature for free. Mitigation: go PIMS-agnostic and win the independents the EMR vendors ignore; own the rDVM relationship layer, not the record.
2. **Slow-bleed problem:** The pain is chronic, not acute — buyers may keep tolerating it. Mitigation: sell it as referral-retention/revenue protection, not "save admin time."
3. **Extraction trust:** One bad auto-drafted update to a referring vet damages a relationship — the exact thing you're selling to protect. Mitigation: human-in-the-loop approval on every outbound message, conservative defaults.

## 14. Structured verdict

```
Score:                  74/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder + specialty-hospital ops advisor (ex referral coordinator / practice manager)
Time to revenue:        8–12 weeks (paid pilots), broader rollout after extraction hardening
Capital to launch:      $8–15K ($ for inference, hosting, outreach; no capex)
Top 3 assumptions to validate first:
  1. Hospital admins pay $400–900/mo — 20 discovery calls + 3 pre-sold pilots
  2. Fax extraction is trustworthy — 100 real anonymized faxes, measure field accuracy
  3. Updates retain referrals — pre/post survey of 2 pilot hospitals' top referring practices
Kill criteria:
  - Abandon if <3 of 20 discovery calls will pre-pay/pilot
  - Abandon if extraction can't clear a usable accuracy bar on real faxes after 6 weeks
  - Abandon if a major PIMS vendor ships a free, PIMS-agnostic equivalent before v1
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Build the scraped target list (VECCS + AAHA referral hospitals + chain location pages). Pull 15–20 anonymized real referral faxes from advisor contacts; manually test current-gen LLM/OCR extraction on them.
- **Day 3–4:** Book and run 8–10 discovery calls with practice managers / referral coordinators. Show a clickable mock (fax in → intake card + drafted update). Ask directly: "would you pay $600/mo for this, and would you pilot in 30 days?"
- **Day 5:** Decide. **Go** if ≥3 of ~10 calls commit to a paid pilot AND extraction clears a usable bar on the real faxes. Otherwise no-go or re-shape toward pure inbound intake.

The falsifiable result: signed (or verbally committed) paid pilots, not "they seemed interested."
