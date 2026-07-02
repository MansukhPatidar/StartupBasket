---
title: "CaseWeave — Section 8 case-file builder for UK self-managing landlords"
slug: uk-section8-evidence-bundle
date: 2026-07-02
category: PropTech / UK Private Landlords (Renters' Rights Act, self-managing)
complexity: Medium
score: 77
verdict: GO
confidence: Medium
oneLiner: "Turns a landlord's scattered WhatsApp, texts and emails into a dated, court-ready Section 8 evidence bundle."
tags:
  vertical: PropTech
  model: SaaS
  geography: EU
  secondary: [Compliance-driven, AI-agent, SMB, Solo-builder, WhatsApp-first]
axes:
  problem: 17
  demand: 12
  build: 12
  distribution: 12
  revenue: 11
  time: 8
  defensibility: 5
founderFit: [domain-expertise-required, technical-heavy]
featured: false
---

# CaseWeave

## 1. One-liner

Turns a UK landlord's scattered WhatsApp, texts and emails into a dated, court-ready Section 8 evidence bundle.

## 2. Trend signal — why now?

Section 21 "no-fault" eviction was **abolished on 1 May 2026** under the Renters' Rights Act. Every possession in England now runs through **Section 8**, which — unlike Section 21 — requires the landlord to *prove a ground with evidence*. Serve the wrong notice and the local authority can levy a **civil penalty of up to £7,000 per breach**. Miss it in court and you eat a **27.9-week median claim-to-repossession wait** (MoJ Q2 2025) with the property still occupied by a non-paying tenant.

The legal press is blunt about how claims now die: "weak records, the wrong form, poor tenancy files or the wrong notice period can all cause delay or failure" — the shift is "much more clearly an evidence and procedure issue" than a timing one. Specialist advisers now tell landlords the file matters more than the notice date: "landlords who fare best keep all of it in one place so that an evidence file can be produced as a single, dated record if a tenancy ever reaches that point."

Meanwhile the buyers are self-managing amateurs, not agencies. Small landlords (1–4 properties, part-time, other income) are still the majority of the UK PRS by headcount, and self-managing has surged because full-management letting agents cost **15–20% of annual rent** (~£2,125/yr on a £1,000/mo let) versus **£14.99/mo software**. So the exact people newly on the hook for court-grade evidence are the ones keeping it in text threads and a shoebox.

Provenance:
  - Signal 1 (demand): Section 21 abolished 1 May 2026; Section 8 now requires documented evidence, £7k penalty for wrong notice, claims fail on "patchy files, unclear dates, wrong form" — https://theindependentlandlord.com/section-21-abolition/ , https://landlordknowledge.co.uk/section-8-landlord-guide/ — 2026
  - Signal 2 (feasibility): AI doc/voice extraction (Whisper, LLM parsing) can now turn WhatsApp/text/email/voicemail into a structured, dated record — existing "Evidence Pack" tools only ingest formal document *uploads*, not correspondence — https://www.lettingsledger.co.uk/evidence-pack — 2026
  - Signal 3 (economic): Landlord compliance-SaaS boom charging real money (LetCompliance £14.99–49/mo, LettingsLedger £49 one-off pack, LLCR "Compliance Defence Pack", August, Lendlord); self-manage saves £1,300+/property/yr vs agents — https://letcompliance.com/pricing , https://www.augustapp.com/blog/property-management-costs-uk-the-complete-2025-guide-for-landlords — 2026
  Category: Regulatory arbitrage

## 3. The opportunity

Section 21 was a *timeline* product — serve the form, wait, done. Section 8 is an *evidence* product, and the incumbents are still selling the old shape. August, Lendlord, Landlord Studio track rent and log certificates. LettingsLedger and LLCR sell "evidence packs" — but their packs ingest **formal document uploads only**: gas safety, EICR, EPC, deposit protection, prescribed information. Clean, structured stuff a landlord already has as PDFs.

That is not where Section 8 claims fail. The **discretionary grounds** — rent-arrears history, anti-social behaviour, breach of tenancy, and defending against a disrepair counterclaim — turn on the *messy* trail: the WhatsApp thread where the tenant admitted the arrears, the text where you offered to fix the boiler and they refused access, the dated photo of the damage, the voicemail. That evidence lives on the landlord's phone in no particular order, and every incumbent assumes you diligently logged it in their portal from tenancy day one. Self-managing amateurs never do.

The 10× is the **ingestion**: forward the chaos, get back a chronological, deduped, court-formatted bundle mapped to the specific Section 8 ground, with the correct current Form 3A pre-filled. Nobody is doing the mess-in, bundle-out step. That's the whole game.

## 4. Target market

- **Primary customer:** Self-managing private landlords in England with 1–4 properties who do their own lettings (no full-management agent). Typically part-time, other income, using WhatsApp/text/email with tenants.
- **Why they buy:** In their world post-May-2026, one bad tenant is now a 6-month, £7k-downside legal problem instead of a two-month Section 21 form. They know their records are a mess and they're scared of walking into court with "patchy files."
- **Rough TAM reasoning:** England has ~2M+ private landlords; the 1–4-property, self-managing segment is the majority by headcount — call it hundreds of thousands actively self-managing. Only a fraction face a possession in any year, but the *fear* (and the reasonable "insure against it" purchase) is population-wide. A serviceable target of even 50–100k reachable self-managers via NRLA + forums is plenty for a sub-£5M business.
- **Why now for them:** The rules changed 8 weeks ago. Every renewal, arrears incident, or problem tenant from May 2026 forward is the first cohort that will actually be litigated under the new evidence regime. They're googling "Section 8 evidence" right now.

## 5. Product sketch (MVP)

- **Forward-the-mess inbox:** landlord forwards WhatsApp exports, email threads, texts (screenshot or SMS-forward), and phone photos of paper notices to a per-tenancy address/upload.
- **Auto-timeline:** AI extracts sender, date, and event from each item and builds one deduplicated, chronological record per tenancy — arrears events, access refusals, repair requests + landlord responses, ASB incidents.
- **Ground-mapper:** tags each piece of evidence to the Section 8 ground(s) it supports and flags gaps ("you have no proof you responded to the 12 May damp report — that weakens a disrepair defence").
- **Form 3A generator:** pre-fills the current statutory notice form and the arrears schedule from the timeline; warns on notice-period miscalculation.
- **Court bundle export:** one-click, paginated, indexed PDF bundle with a tamper-evident (hashed) manifest — the single dated file advisers say wins hearings.
- **Deadline & service log:** records how and when the notice was served and retains proof of service (the other common failure point).
- **Certificate shelf:** the boring compliance uploads (gas/EICR/EPC/deposit) folded in so the bundle is complete, not just the correspondence.

## 6. AI angle — what's load-bearing

Remove the AI and this is a manual paralegal service. The load-bearing work is **turning unstructured, multi-channel human mess into a structured legal timeline**: transcribing voicemails, parsing WhatsApp exports and email chains, extracting who-said-what-when, reconciling an arrears history from irregular payment mentions, deduping the same incident reported across three channels, and mapping each fragment to the correct statutory ground. That's exactly the extraction-and-classification job that got cheap and reliable in the last 12 months and was impractical before. The form-filling is trivial; the ingestion is the moat and the reason a landlord pays instead of doing it in Word.

## 7. Localization angle (if any)

This *is* the localization play — it's England-specific by construction. Section 8 grounds, Form 3A, the Renters' Rights Act 2026 rules, notice periods, deposit-protection preconditions, and court bundle conventions are all jurisdiction-locked. A generic global "property docs" tool cannot compete because the value is entirely in encoding *English* possession law correctly. Natural expansion: Scotland (different regime — First-tier Tribunal), Wales (Renting Homes Act), then Ireland/Australia states with analogous evidence-led eviction reform. WhatsApp-first ingestion fits how UK landlord–tenant comms actually happen.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** Hybrid. A **£9–15/mo per property** "keep-your-trail-live" subscription (records accrue continuously so the bundle is ready anytime), plus a **£99–149 pay-per-bundle** for the landlord who arrives mid-crisis with a mess and needs a court pack now. Benchmarks: LettingsLedger £49 one-off pack, LetCompliance £14.99–49/mo, Landlord Heaven £69.99 manual court-paper pack.
- **ACV:** ~£150–250/yr for a subscriber with 1–2 properties; one-off bundles £99–149.
- **Rough math to $1M ARR (~£780k):** ~4,000 subscribers × ~£16/mo blended = ~£770k ARR. Reachable within the self-managing segment.
- **Rough math to $5M ARR:** ~£3.9M — needs ~15–18k subscribers *or* a smaller subscriber base plus a letting-agent white-label channel (agents managing small portfolios who want a defensible file per tenancy) and Scotland/Wales expansion.
- **Expansion path:** more properties per landlord → seat-style growth; add-on "served notice" tracking and a paid "have a housing solicitor review your bundle" referral marketplace; agent white-label at higher per-seat pricing.

## 9. Go-to-market wedge — first 100 customers

- **NRLA + landlord forums:** the National Residential Landlords Association has 100k+ members and runs active forums; post the "here's what a court-ready Section 8 bundle actually looks like in 2026" teardown, offer members a free bundle audit. Same play on Property118 and r/uklandlords.
- **Fear-timed content on the exact query:** rank and run cheap search on "Section 8 evidence," "Form 3A help," "my possession claim got rejected" — people searching these have an active, urgent, high-value problem *this week*.
- **Free single-bundle giveaway to problem-tenant threads:** DM/reply to landlords publicly posting about a non-paying or problem tenant on forums and Twitter/X; offer to build their first evidence bundle free. High-intent, self-qualifying, converts to subscription for the *next* tenancy.
- **Letting-agent white-label pilots:** 3–5 small independent agents who manage sub-20 portfolios and want a per-tenancy defensible file — one signed agent = dozens of tenancies.
- **Housing-solicitor referrals:** solicitors hate receiving a shoebox; a landlord who arrives with a clean CaseWeave bundle saves them hours. Referral loop both directions.

## 10. Build complexity — justification

**Medium.** Ingestion (WhatsApp export parsing, email, voicemail transcription, photo OCR), timeline construction, and PDF bundle generation are all off-the-shelf-API work on a standard web stack — a pair could ship a credible v1 in ~10 weeks. The non-trivial part is **legal correctness**: the current Form 3A, accurate ground-mapping, notice-period rules, and deposit-protection preconditions must be right, which needs a housing-law adviser on the team and careful "we assemble evidence, we are not legal advice" positioning. That's discipline, not research risk.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Document-assembly tool; must stay clear of "reserved legal activity"/unqualified legal advice — position as evidence organisation, not representation. |
| Ethical — no harm / dark patterns | ✅ | Helps landlords meet a *higher* evidence bar; even benefits tenants (fewer defective notices, cleaner process). No dark patterns. |
| Market exists (evidence above) | ✅ | Regulatory trigger + incumbents already charging for adjacent packs. |
| 1–5 person team can build this | ✅ | Pair + a part-time housing-law adviser. |
| Launchable with <$50K / ₹40L | ✅ | Off-the-shelf APIs, no capital, forum-led GTM. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 17/20 | Hair-on-fire when it bites: £7k penalty + failed possession + 6-month occupied-by-non-payer. Docked because it bites per-eviction, not daily. |
| Demand evidence | 15 | 12/15 | Hard regulatory trigger + competitors charging money for adjacent packs. The specific *correspondence-ingestion* demand is inferred from failure-mode reporting, not yet a subreddit begging for it. |
| Build feasibility | 15 | 12/15 | Off-the-shelf ingestion + form gen; ~10-week pair MVP. Legal accuracy of forms/grounds needs care and a domain adviser. |
| Distribution clarity | 15 | 12/15 | Named channels (NRLA 100k+, forums, fear-timed search, agent white-label) with realistic but unproven conversion. |
| Revenue mechanics | 15 | 11/15 | Pricing benchmarked to real incumbents; hybrid sub + per-bundle. Risk: low-frequency purchase — subscription retention between crises is the open question. |
| Time to first revenue | 10 | 8/10 | Pay-per-bundle is pre-sellable to a landlord mid-crisis now; fast first pounds. |
| Defensibility | 10 | 5/10 | Execution moat; ingestion quality + accruing per-tenancy record gives light lock-in. Copyable by an incumbent that decides to ingest the mess. |
| **Total** | **100** | **77/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`domain-expertise-required` (English housing/possession law) · `technical-heavy` (multi-channel unstructured ingestion)

### Key assumptions to validate (3–5)

1. **Assumption:** Self-managing landlords will pay to insure against a court failure *before* they're in one (subscription), not only after. **How to test:** offer both a £12/mo sub and a £129 crisis bundle to 40 NRLA/forum landlords; measure the split — if <20% take the subscription, it's a per-bundle business, reprice.
2. **Assumption:** The correspondence-ingestion output is court-credible, not a liability. **How to test:** have 3 housing solicitors review 5 real anonymised bundles and rate whether they'd file them.
3. **Assumption:** Landlords will actually forward messy WhatsApp/email exports (privacy/effort friction). **How to test:** measure completion rate on 30 free bundle-audit sign-ups from forwarding step to finished bundle.
4. **Assumption:** "We assemble evidence, not legal advice" keeps us clear of reserved-activity rules. **How to test:** one paid consult with a UK regulatory solicitor before launch copy is finalised.

### Risk flags

1. **Regulatory / legal-advice line:** drifting from "organise your evidence" into "we tell you which ground to use / draft your case" risks unauthorised legal-practice exposure. Positioning and disclaimers are load-bearing.
2. **Purchase frequency:** evictions are rare per landlord; if subscription retention between crises is weak, LTV collapses to one-off bundles and CAC math tightens.
3. **Incumbent fast-follow:** August/LettingsLedger already own the customer and the "evidence pack" label; if they bolt on correspondence ingestion, the wedge narrows. Speed + ingestion quality is the only defence.
4. **Platform dependency:** WhatsApp export format and messaging-platform terms can change and break ingestion.

## 14. Structured verdict

```
Score:                  77/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder + part-time English housing-law adviser
Time to revenue:        6–10 weeks (pay-per-bundle pre-sellable immediately)
Capital to launch:      £8–15k ($10–19K)
Top 3 assumptions to validate first:
  1. Sub-vs-bundle split — offer both to 40 landlords, measure take-up
  2. Court-credibility of AI-built bundles — 3 solicitors review 5 real bundles
  3. Landlords will forward messy exports — completion rate on 30 free audits
Kill criteria:
  - Abandon if <15% of 40 offered landlords buy either a bundle or a subscription
  - Abandon if solicitors rate the AI-built bundles unfileable without heavy rework
  - Abandon if an incumbent ships correspondence-ingestion before your v1
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Write the "what a 2026 Section 8 evidence bundle actually looks like" teardown; post in NRLA forum, Property118, r/uklandlords with an offer: "forward me your messy tenant thread, I'll hand-build your evidence bundle free." Target 30 sign-ups.
- **Day 3–4:** Hand-build 5–8 real bundles from what lands (no product yet — you + a paralegal-style process). Show each landlord the finished bundle and ask on the spot: "£129 one-off, or £12/mo to keep this live for your next tenancy — which?" Record the answer.
- **Day 5:** Go/no-go. **Go if** ≥6 of the first ~15 landlords commit money (card or clear pre-order), *and* the split shows a viable subscription tail (≥20% choose the sub). **No-go** if it's purely one-off crisis buyers with no repeat logic, or if landlords balk at forwarding their comms.

Falsifiable outcome: paid commitments and the sub-vs-bundle split — not "landlords said it sounds useful."
