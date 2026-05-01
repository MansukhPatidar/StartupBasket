---
title: SILSanity — AI audit copilot for Aussie NDIS SIL providers
slug: silsanity-ndis-audit-copilot
date: 2026-05-01
category: Compliance SaaS / Australia NDIS SIL Providers
complexity: Medium
score: 82
verdict: STRONG GO
confidence: High
oneLiner: AI audit copilot that turns voice notes into NDIS Practice-Standard evidence so small SIL providers pass mandatory registration.
tags:
  vertical: Compliance
  model: SaaS
  geography: Global
  secondary: [Australia, NDIS, SIL, Disability, AI-agent, Voice-first, Compliance-driven, SMB, Domain-expertise-required, Regulatory-driven]
axes:
  problem: 18
  demand: 14
  build: 12
  distribution: 13
  revenue: 12
  time: 8
  defensibility: 5
founderFit: [domain-expertise-required, technical-heavy]
featured: true
---

# SILSanity — AI audit copilot for small Australian NDIS SIL providers

## 1. One-liner

AI audit copilot that turns voice notes into NDIS Practice-Standard evidence so small SIL providers pass mandatory registration.

## 2. Trend signal — why now?

The Australian government has detonated a regulatory time bomb under the disability sector and every small SIL operator can hear the ticking. On 17 December 2025 NDIS Minister Jenny McAllister confirmed mandatory registration for all Supported Independent Living and platform providers from **1 July 2026**. There is no minimum threshold. If you run two group homes with eight residents and twelve staff, you are now in the same regulatory bucket as Aruma. You either pass a certification audit by July or you stop billing SIL.

This is colliding with three other shocks at once:

- **New SIL Practice Standards** take effect on the same date — even already-registered providers must redo policies, registers, and evidence trails.
- **QIP, one of the largest NDIS auditors, exits the market on 30 April 2026.** Their book is being scattered across a small pool of remaining auditors who are already booking 8–12 weeks out.
- **Consultant prices are climbing fast.** Document-and-policy packages quote AU$4,400–$15,000. Hourly rates AU$150–$350. The cheapest credible template kit (NDISCompliant SIL Rescue Kit, 65 docs) sits at AU$297 — and explicitly tells you it is *not* an audit pass; you still need a consultant or live evidence of practice.

Search activity on "NDIS SIL mandatory registration" exploded after the December announcement. Sector blogs (Team DSC, Engels Floyd, ProviderPlus, ClinicComply, Maple, Empowrd, MD Home Care, HCPA) have published competing audit-prep checklists in the last 90 days. Facebook groups "NDIS Providers Australia" (60K+ members) and "NDIS Sole Trader Network" are actively venting about audit costs and timelines. The ANAO published a Performance Audit (Report No. 2 2025–26) on the NDIS Commission's regulatory effectiveness, tightening enforcement appetite further.

The existing software stack does not solve this. ShiftCare, SupportAbility, Lumary, and Brevity are care-management and rostering tools — they capture shifts and claim NDIA payments, but they don't write your governance policy, draft your incident-management procedure, build your restrictive-practice register, or pre-audit the gap between your written policy and what your staff actually do on shift. That gap is exactly what auditors fail providers on.

Provenance:
  - Signal 1 (Demand): Mandatory NDIS SIL + platform registration from 1 July 2026; no size threshold; 8–12 week auditor wait — [NDIS Commission media release](https://www.ndiscommission.gov.au/media-centre/mandatory-registration-supported-independent-living) — December 2025
  - Signal 2 (Feasibility/Economic): NDIS SIL committed spend AU$8.99B (26% of scheme spend) for 36,641 participants in SIL arrangements as of Q1 2025–26 — [NDIS Quarterly Report](https://ndis.gov.au/media/8141/download?attachment=) — September 2025
  - Signal 3 (Economic): Auditor supply shock — QIP, a major NDIS auditor, ends NDIS audit services 30 April 2026 — [QIP NDIS Verification](https://qipndisverification.com.au/) — January 2026
  - Signal 4 (Demand): Existing template-and-consultant market: NDISCompliant SIL Rescue Kit AU$297; consultant doc packs AU$4,400–$15,000; hourly AU$150–350 — [NDISCompliant SIL Rescue Kit](https://ndiscompliant.com.au/), [Engels Floyd](https://engelsfloyd.com/services/ndis-registration-audit-compliance/) — April 2026
  Category: Regulatory arbitrage

## 3. The opportunity

The NDIS sector has spent a decade running on PDFs, Word templates, and SharePoint folders with names like *Final FINAL v3 (Sarah's edit).docx*. The 1 July 2026 deadline is a forced upgrade. Every SIL provider needs four things: (1) up-to-date policies mapped to the 2026 Practice Standards, (2) live registers for incidents, complaints, restrictive practices, and worker screening, (3) **evidence of practice** — proof that the policies are actually used on shift — and (4) an audit pack a JAS-ANZ auditor can read in a morning.

Today they get those four things from three separate places: a $297 template kit (gives them docs but no living evidence), a $30/seat care-management app (gives them shifts and claims but no governance), and a $5K–$15K consultant who hand-builds the rest. The pieces do not talk to each other. The provider stitches them together with effort that should not be theirs.

SILSanity collapses the stack. Consultant-grade governance + workflow-grade evidence capture + audit-pack output. AI is load-bearing on every step: drafting and updating policies as Practice Standards shift, ingesting voice incident notes from support workers and turning them into auditor-ready incident reports, scanning the gap between what a policy says and what the shift notes show, and assembling the registration-audit pack as a single deliverable. Incumbents (NDISCompliant, Engels Floyd, ProviderPlus, ClinicComply) are content-and-PDF businesses. The care-software incumbents (ShiftCare, SupportAbility, Lumary) refuse to touch the governance documentation problem because it's adjacent to their core. Neither side has shipped an AI-first audit-prep workflow tool. A focused 2–3 person team can take this slice.

## 4. Target market

**Primary customer:** Owner-operator of a small Australian NDIS SIL provider — 1–4 group homes, 5–25 support workers, AU$500K–AU$5M annual NDIS revenue. Founder typically a former support coordinator, registered nurse, or behaviour support practitioner who started the business 1–4 years ago when registration for SIL was not yet mandatory. Heavy concentration in NSW, Vic, Qld outer suburbs and regional centres. Tight cashflow, no in-house compliance manager.

**Secondary customer:** Currently-registered mid-size SIL providers (5–20 homes, 30–150 staff) who have to re-do their evidence trail under the new 1 July 2026 SIL Practice Standards.

**Why they buy:** "I have to be audit-ready by 1 July or I lose all my SIL income." They are not buying software they want, they are buying survival. The first conversation is always about the deadline, not the features.

**Rough TAM reasoning:** SIL committed spend AU$8.99B (Sept 2025 NDIS quarterly). At an industry-typical AU$240K–$340K SIL revenue per participant per year (NDIS Pricing Arrangements 2025–26) and 36,641 SIL participants, the sector is fragmented across an estimated 1,200–2,000 SIL provider entities — most under 20 staff. ProviderPlus and similar consultancies estimate "thousands of providers will go through an NDIS audit for the first time this year." Conservatively address 1,500 small SIL providers + 800 currently-registered mid-size providers re-doing evidence = ~2,300 entities in the first 12 months. Recurring annual market thereafter for renewals (every 3 years) and new entrants.

**Why now for them:** The deadline is not a vibe, it is a date in a media release. For an operator running 12 staff and 8 residents, missing the audit means the whole business stops. There is no bigger pain available in SaaS-land than that.

## 5. Product sketch (MVP)

- **Practice Standards Policy Engine** — pre-built, NDIS-Commission-mapped library covering the four Core Module groups + SIL supplementary module + Module 2A for high-intensity supports. Policies update automatically when the Commission releases new guidance; provider just signs off changes.
- **Voice-to-evidence capture** — support worker speaks into the mobile app: "9pm, Jordan refused dinner, I followed the eating-support BSP, no restrictive practice." App turns the note into a structured shift note + cross-checks against the participant's behaviour support plan + flags whether an incident report or restrictive-practice notification is required.
- **Living registers** — incident, complaint, hazard, restrictive practice, worker screening expiry, training completion, conflict-of-interest. Auto-built from shift events, payroll, and NDIS Worker Screening API. No re-entry.
- **Audit-gap scanner** — nightly job compares what your policies *say* (e.g. "two staff present for personal care") against what shift records *show*. Flags non-conformities before an auditor can.
- **Audit pack export** — single ZIP / portal link the auditor opens with their checklist on the left, your evidence on the right, mapped to each Outcome.
- **Restrictive-practice authorisation tracker** — uploads state-specific authorisations (Vic Senior Practitioner, NSW Restrictive Practices Authorisation Panel, etc.), warns 30 days before expiry, formats the 5-day post-use Commission report.
- **Renewal & deadline copilot** — countdown to certification expiry, auditor booking helper, reminders for quarterly internal audit.

## 6. AI angle — what's load-bearing

Strip the AI out and what's left is a cheaper SharePoint. Three AI capabilities are doing the actual work:

1. **RAG over the NDIS Practice Standards + Commission rules + state-by-state restrictive-practice law** to draft and update policies that are auditor-defensible, not generic templates. This is the wedge against the AU$297 doc kits — those go stale; ours updates the day the Commission posts a new fact sheet.
2. **Voice + structured extraction** for shift notes and incidents. Whisper-tier models turn "we had a med error at lunch, double dose of risperidone, sent her to GP" into an auditable record with the right severity tier, the right Commission-reportable fields, and the right cross-references to the participant's behaviour-support plan. Without LLMs, support workers won't write evidence that meets the standard — and the provider fails on documentation.
3. **Gap-detection LLM agent** that reads policies on one side and shift notes / payroll / training records on the other, and flags where reality doesn't match the policy. This is the single biggest source of audit non-conformities and no template kit can solve it because templates only describe what *should* happen, not what did.

If AI can't do those three jobs, the product collapses to a fancy form. The reverse is also true: those three jobs are why no template seller and no rostering vendor can ship this without rebuilding their stack.

## 7. Localization angle (if any)

Australia-only by design. The opportunity *is* the localization — NDIS Practice Standards, 8 state/territory restrictive-practice regimes, NDIS Worker Screening Check, JAS-ANZ-accredited auditor list, NDIS Commission portal forms. A US or UK competitor cannot port a generic care-compliance product into AU without rebuilding the regulatory layer from scratch. That's the moat.

Spanish/Portuguese/Hindi versions are not viable extensions — there is no NDIS-equivalent in those markets. A natural year-2 expansion is **NDIS personal care + community supports providers** (mandatory registration phased in 2027–2030), **NZ Whaikaha disability sector** (similar regulatory direction), and **Australian aged-care home providers** (Aged Care Quality Standards, 1 July 2026 strengthened standards) — same product spine, different rule books.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:**
  - **Audit Sprint** — AU$1,490 one-time (90-day mandatory-registration package: docs + evidence build + audit pack) for new-to-registration providers. Land-product.
  - **Compliance OS** — AU$390/month flat, up to 3 sites + 25 staff. Includes living registers, voice capture, audit-gap scanner, ongoing policy updates.
  - **Multi-site** — AU$890/month for 4–10 sites + 75 staff.
- **ACV:** Realistic blended AU$4,800/yr (most customers go from Audit Sprint to Compliance OS).
- **Path to AU$1M ARR:** ~210 customers on Compliance OS at AU$4,680/yr = AU$983K. Achievable from the 1,500-provider mandatory-registration cohort alone in 9–12 months.
- **Path to AU$5M ARR:** ~1,000 customers blended (800 single-site + 200 multi-site at AU$10,680). Requires capturing ~40% of the small-SIL market within 24 months, plus expansion into the mid-size renewal cohort. Aggressive but plausible given the deadline-driven buying behaviour and weak incumbent response.
- **Expansion path:** (1) extra modules — Module 2A High-Intensity Personal Care, behaviour support practitioner workflow, SDA provider compliance; (2) into NDIS personal care + community supports as those tiers become mandatory (2027–2030); (3) horizontal into Australian aged-care residential providers under the strengthened Aged Care Quality Standards.

## 9. Go-to-market wedge — first 100 customers

- **Auditor-referral channel.** With QIP exiting 30 April 2026, the remaining ~25 JAS-ANZ-accredited NDIS auditors are buried. Pitch them: "Your audit goes 30% faster when the provider arrives with a SILSanity audit pack." Negotiate a co-branded "audit-ready" badge + revenue share. One referring auditor = 20–40 leads.
- **Direct outreach to the SIL Commission register.** The NDIS Commission publishes the full list of registered providers; the unregistered SIL list can be triangulated from NDIA's SIL participant data + provider directories used by support coordinators. Build a list of ~1,500 small SIL operators, send a free 7-day "Audit Readiness Diagnostic" (LLM scans whatever 5 docs they upload and returns a Practice-Standards gap report). Expect 8–12% diagnostic-to-paid conversion under deadline pressure.
- **Paid placement on top of the existing content layer.** ProviderPlus, NDISCompliant, Engels Floyd, ClinicComply, HCPA already rank for the high-intent queries ("NDIS audit checklist 2026", "SIL registration cost"). Sponsor or affiliate with 2–3 of these — they're content businesses that don't compete on workflow, so terms are friendly.
- **Facebook groups.** "NDIS Providers Australia" (60K+ members), "NDIS Sole Trader Network", "Australian Disability Service Providers". Founder-led posts ("we passed our audit in 9 weeks with this stack") + free webinar + drop a calculator that estimates "how many days until your audit?".
- **Co-marketing with care-software vendors.** ShiftCare, SupportAbility, and Brevity actively don't sell governance docs. Build an integration that pulls shift notes from their APIs into our evidence engine. They get to add "SIL audit-prep partner" to their pitch; we get pre-warmed leads.

I can see customer 1–100 clearly: 30 from auditor referrals, 40 from cold-list diagnostic, 20 from FB-group founder-led marketing, 10 from one ShiftCare partnership.

## 10. Build complexity — justification

**Medium.** Off-the-shelf: Whisper for voice, GPT-class LLM for drafting, Postgres + RLS for the multi-tenant register store, standard React/Next + Expo for mobile capture. Custom: the rule layer that maps NDIS Practice Standards Outcomes to evidence types, the gap-detection logic, and the state-by-state restrictive-practice authorisation matrix. Founder needs deep NDIS domain knowledge or a ride-along advisor — this is a regulated workflow, hallucinations hurt customers. Realistic estimate: a 2-person team (one technical, one with NDIS sector experience) ships v1 in 12–14 weeks. Audit-pack export polish probably takes another 4–6 weeks but isn't blocking first paying customers.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Software providing assistance; registered provider remains accountable. Standard SaaS T&Cs + Australian Privacy Act compliance. |
| Ethical — no harm / dark patterns | ✅ | Reduces reliance on $10K consultants for small operators; product clearly disclaims that final accountability sits with the provider. |
| Market exists (evidence above) | ✅ | NDIS Commission mandate, $8.99B SIL spend, active consultant + template market, public auditor supply shock. |
| 1–5 person team can build this | ✅ | Standard LLM stack + NDIS domain knowledge. 2–3 people. |
| Launchable with <$50K / ₹40L | ✅ | ~AU$25K covers 14 weeks of build, hosting, NDIS-Practice-Standards content licensing if needed, and first 6 months of inference. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 18 | Deadline-driven existential. Provider loses SIL income on 1 July if not audit-ready. Hair-on-fire — they would pay this week. |
| Demand evidence | 15 | 14 | Active spend at multiple price points (AU$297 → AU$15K), public auditor supply shock, FB-group complaints, 60+ sector blogs publishing competing checklists. Skeptic would nod. |
| Build feasibility | 15 | 12 | Off-the-shelf LLM stack + voice + standard SaaS. Real domain knowledge needed; 12–14 weeks for a 2-person team. |
| Distribution clarity | 15 | 13 | Auditor-referral channel + cold list + 60K-member FB group + content affiliates. Multiple named channels with realistic conversion math. |
| Revenue mechanics | 15 | 12 | Pricing benchmarked against consultants ($5K) and care software ($30/seat). $390/mo flat is a clear discount vs $5K consultant. ACV blended ~AU$4,800. Path to $1M ARR plausible. |
| Time to first revenue | 10 | 8 | First "Audit Sprint" customer billable in week 4 with a manual-heavy MVP under the deadline pressure. Recurring ARR by week 10. |
| Defensibility | 10 | 5 | Workflow lock-in + accumulating evidence dataset + relationships with auditors. No data moat or network effect. Copyable in 6–9 months by a well-resourced competitor; deadline window is the real moat. |
| **Total** | **100** | **82** | |

## 13. Qualitative modifiers

### Founder-fit tags

`domain-expertise-required` · `technical-heavy`

A pure technical founder will get the workflow wrong because Practice Standards interpretation requires sector experience. A pure compliance consultant will under-build the voice + gap-detection layer that makes the product worth more than a doc kit. Best team: one ex-NDIS-sector operator (registered nurse, behaviour support practitioner, ex-quality manager at a mid-size provider) + one technical founder who has shipped LLM workflow products.

### Key assumptions to validate (3–5)

1. **Assumption:** Small SIL providers will pay AU$390/month flat (above mainstream care software per-seat rates) because the deadline justifies it. **How to test:** 30 founder-led discovery calls with unregistered SIL operators in the next 3 weeks; offer a pre-paid AU$1,490 Audit Sprint with full refund if not booked into an auditor by week 8. Target: 10 pre-pays = signal validated.
2. **Assumption:** Auditors will refer clients in exchange for a faster audit (they bill flat fees, faster audit = higher hourly margin). **How to test:** Direct outreach to 8–10 of the remaining JAS-ANZ NDIS auditors with a 30-min co-branded pilot proposal. Target: 3 auditors signed for a 5-client pilot.
3. **Assumption:** AI-drafted policies + auditor-mapped audit packs survive a real certification audit without major non-conformities. **How to test:** Run the first 5 paying customers through a real audit; track non-conformity count and severity. Target: ≤1 minor NC per audit, zero majors.
4. **Assumption:** Voice capture from support workers actually gets used in the field (low literacy + ESL workforce in some states). **How to test:** Field test with 3 paying providers across 2 weeks; measure shift-note completion rate vs current paper / WhatsApp-based system. Target: ≥70% capture rate after 5 days.

### Risk flags

1. **Regulatory risk:** NDIS Commission could publish official audit-prep templates for free, partially commoditising the policy layer. Mitigation: living-evidence + voice + gap-scan layers don't get displaced by free templates; double down there.
2. **Platform/auditor dependency:** Audit-pack format depends on auditor's checklist; if NDIS Commission moves to an in-portal audit submission flow, our export becomes redundant. Mitigation: build directly to whatever the Commission publishes; we shift from "audit pack" to "Commission portal autopilot".
3. **Market timing — post-deadline cliff:** Once 1 July 2026 passes, the urgency drops sharply. New-customer rate after the deadline depends on renewal cycles + new entrants only. Mitigation: capture as much of the deadline cohort as possible by July, then convert them into long-term Compliance OS subscribers; expand into adjacent regulated cohorts (aged-care, NDIS personal care 2027 wave).
4. **Liability creep:** Provider will at some point try to argue "the software said it was OK." Mitigation: clear T&Cs, every AI-suggested artefact has a human sign-off step, professional indemnity insurance from day 1.

## 14. Structured verdict

```
Score:                  82/100
Verdict:                STRONG GO
Confidence:             High
Best-fit builder:       Two-person team — one ex-NDIS-sector operator (RN / BSP / quality manager), one full-stack founder shipped on LLM workflow products
Time to revenue:        4 weeks (Audit Sprint pre-sales) / 10 weeks (recurring ARR)
Capital to launch:      AU$25K–$35K
Top 3 assumptions to validate first:
  1. Will small SIL operators pre-pay AU$1,490 Audit Sprint? — 30 discovery calls, target 10 pre-pays in 3 weeks
  2. Will JAS-ANZ NDIS auditors refer for a faster audit? — outreach to 8–10 auditors, target 3 signed pilots
  3. Will AI-drafted policies survive a real certification audit? — first 5 customers through real audit, target ≤1 minor NC, 0 majors
Kill criteria:
  - Abandon if <5 pre-paid Audit Sprints from first 30 discovery calls
  - Abandon if 0 auditors agree to a referral pilot in first 4 weeks
  - Abandon if any of the first 5 audited customers fail with a major non-conformity tied to AI-drafted artefacts
  - Abandon if NDIS Commission publishes a free official audit-prep tool covering policies + evidence + pack export before 1 May 2026
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Build a list of 80 small SIL providers (3 sources: NDIS Commission unregistered-provider triangulation, sector LinkedIn, Facebook-group public posts). Cold email + LinkedIn DM with a 1-page "How ready are you for 1 July?" diagnostic offer.
- **Day 3–4:** Run 12–15 discovery calls. Script: "Walk me through what you've done so far on audit prep. What's the AU$1,490 Audit Sprint worth to you in cash today vs paying a $7K consultant in three weeks?" Offer pre-paid Audit Sprint with full money-back guarantee.
- **Day 5:** Decide go / no-go. **Falsifiable target: ≥5 pre-paid Audit Sprints (AU$7,450 cash collected) by Friday end-of-day.** If <5, revisit pricing or audience cut. If ≥5, immediately book the auditor-referral outreach for week 2.

The validation produces a hard cash number, not a feeling. AU$7,450 in pre-pay = the deadline is real and they'll buy under it.
