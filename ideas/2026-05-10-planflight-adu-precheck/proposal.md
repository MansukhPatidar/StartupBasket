---
title: PlanFlight — AI ADU plan-check pre-flight for CA designers
slug: planflight-adu-precheck
date: 2026-05-10
category: PropTech SaaS / California Solo ADU Designers & Drafting Shops
complexity: Medium
score: 80
verdict: STRONG GO
confidence: Medium
oneLiner: AI pre-submittal plan-check that catches ADU plan-check redlines for solo California residential designers before the city does.
tags:
  vertical: PropTech
  model: SaaS
  geography: US
  secondary: [California-ADU, AI-agent, Solo-builder, Compliance-driven, Vision-LLM, SMB]
axes:
  problem: 17
  demand: 13
  build: 11
  distribution: 12
  revenue: 12
  time: 8
  defensibility: 7
founderFit: [technical-heavy, domain-expertise-required]
featured: true
---

# PlanFlight — California ADU pre-submittal AI plan-check for solo residential designers

## 1. One-liner

AI pre-submittal plan-check that catches ADU plan-check redlines for solo California residential designers before the city does.

## 2. Trend signal — why now?

Three converging forces in California ADU permitting:

1. **ADU volume.** California issued ~30,000 ADU permits in 2024 and ADUs now represent ~21% of new housing statewide. LA County alone has approved 126,000+ ADUs since 2018. The pipeline of paying drafter work is huge and still growing — 2026 projections push past 30K/yr.
2. **Plan-check is the bottleneck.** State law gives cities 60 days to decide, but the clock resets on every correction cycle. In practice, ADUs hit 2–3 correction rounds, each adding 2–4 weeks. A clean submission lands in 3–4 weeks; a messy one lands in 3–4 months. Designer revenue is gated by clean first submission.
3. **AI plan-check went mainstream this year.** CivCheck (Honolulu, Denver) was acquired by Clariti in Oct 2025. Archistar deployed at LADBS in Feb 2026 for post-wildfire rebuilds. LA, Seattle, Honolulu, Austin all live with AI plan reviewers in 2026. The *city* side has tools. The *designer* side does not — except for enterprise-priced, general-purpose products (PlanCheckPro, CodeComply, Ichi, InspectMind) aimed at architecture firms with $200K+/yr drafting budgets, not solo ADU shops billing $5–15K/plan.

Plus a regulatory tailwind: **AB 434** required all CA cities to publish pre-approved ADU plans by Jan 2026 (uneven adoption, many cities still updating). **SB 543** forces 15-business-day completeness checks. **2025 Title 24** (in effect Jan 2026) is ~30% stricter. **AB 462 / AB 1154 / SB 1211** all changed approval pathways. Every code update = more redline rounds.

```
Provenance:
  - Signal 1 (Demand): ADU plan-check correction cycles take 2–3 weeks each, 2–3 cycles typical, total 3–4 months on complex projects — https://verifiedadu.com/blog/adu-permits-california/ — 2026-05
  - Signal 2 (Feasibility): AI plan-check deployed at city side in 2025–2026 (CivCheck/Honolulu/Denver, Archistar/LA, CodeComply, PlanCheckPro 500-firm general-architecture base) using vision-capable LLMs against ICC/Title 24/CALGreen — https://www.constructiondive.com/news/austin-honolulu-los-angeles-permit-ai/751085/ — 2026-04
  - Signal 3 (Economic): Clariti acquired CivCheck Oct 2025; CA HCD published 2026 ADU Handbook; AB 434 mandates pre-approved plans Jan 2026; ~$5K–$15K design fees per ADU × 30K permits/yr = $150M–$450M designer-fee market — https://www.businesswire.com/news/home/20251008364671/en/Clariti-Acquires-CivCheck-to-Accelerate-Permit-Approvals-with-AI — 2025-10
  Category: Tech-unlock + Workflow automation
```

## 3. The opportunity

Existing AI plan-check tools (PlanCheckPro, CodeComply, Ichi, InspectMind, Archistar PreCheck) are built for two buyers: (a) building departments and (b) full-service architecture firms with multi-discipline plans (arch + struct + MEP) and big subscription budgets. Pricing is opaque and quote-based — i.e., enterprise.

Meanwhile the actual humans drawing 30K California ADUs/yr are mostly solo drafters, design-build shop in-house drafters, and 1–3 person residential design firms. They use Chief Architect or Revit, charge $5K–$15K per plan set, and live or die on first-submittal clean rate. They cannot afford a $400/seat/mo platform that requires a sales call. They also do not need a tool that knows the IBC commercial provisions — they need one that knows the **HCD ADU Handbook**, **CRC**, **2025 Title 24 residential**, **CALGreen residential**, and the **42 most common LADBS-class jurisdiction overlays**.

Wedge: collapse one to two correction cycles for the smallest, most price-sensitive segment of the AI plan-check market by going *narrow and deep* on California residential ADU code. A self-serve, per-plan price ($49–$99/plan) that a solo drafter charges through to the homeowner.

## 4. Target market

- **Primary customer:** Solo residential designers, drafters, and 1–3 person ADU/remodel design firms in California. Tools they use: Chief Architect, Revit, AutoCAD LT, sometimes SketchUp + drafting outsource. Annual revenue: $80K–$600K. Plan output: 8–60 ADU/remodel sets per year.
- **Why they buy:** Every redline cycle is 2–3 weeks of unpaid babysitting. A bad set damages reputation with the homeowner and the contractor. Clean first submission = referral. Designers carry the redline risk; the homeowner pays a fixed design fee.
- **Rough TAM reasoning:** ~30K ADU permits/yr in CA. Conservatively 5,000–8,000 active ADU/residential design shops doing this work (ADU Specialist registry, CBIA listings, ChiefTalk active California user base, LADBS plan submitters list). Average 8–20 plans/yr each. At $79/plan or $199/mo, that's a $30M–$60M serviceable CA-only revenue pool before any out-of-state expansion.
- **Why now for them:** 2025 Title 24 went into effect Jan 1, 2026. The whole state's energy code shifted. Designers' usual Title 24 consultants are flooded. Local jurisdictions are still rewriting AB 434 templates. Mistakes per submission are *up*, not down. Right moment to sell a safety net.

## 5. Product sketch (MVP)

- Upload ADU plan PDF set (architectural + site + Title 24 CF1R + structural if available)
- Pick jurisdiction from a dropdown (start with top 25 CA cities — LADBS, Long Beach, San Diego, San Jose, Oakland, Sacramento, Fresno, etc.)
- Returns a marked-up PDF in <10 minutes with redline boxes citing exact code section (CRC R-section, Title 24 §, CALGreen §, jurisdiction-specific amendment)
- Severity tags: "Will get rejected" / "Probably get a comment" / "Style nit"
- Top-of-report **Completeness Check** — does this submission have everything the SB 543 15-day completeness review will look for? (Required sheets, signatures, energy report, fire-zone overlay, setback table, parking exception, etc.)
- **Pre-approved-plan finder:** if the homeowner's lot/zoning matches an AB 434 pre-approved plan in their city, surface it — designer can pivot the homeowner to the cheaper path and still bill for site adaptation
- Re-check workflow: upload v2 of the set, returns delta — what got fixed, what's still flagged
- Per-plan or monthly-subscription billing; one-click pass-through to homeowner invoice

## 6. AI angle — what's load-bearing

Vision-capable LLM (Claude 4.7, Gemini 2.5 Pro) reading multi-page construction PDFs is the only thing that makes this possible at solo-drafter price. Pre-2024 you'd need OCR + bespoke CAD parsers + a domain expert behind every review. Now: pages → image tiles → structured extraction (sheet index, dimensions, schedules, sections) → cross-check against a vector DB of CRC + Title 24 + CALGreen + jurisdiction amendments + the HCD ADU Handbook → generate redline JSON → render onto PDF. Without the vision-LLM the unit economics collapse — every plan would need a $200 human reviewer, killing the price point.

## 7. Localization angle (if any)

This *is* the localization play. California-only by design. The product's value is jurisdiction-specific overlay knowledge that a national tool cannot match without 482 city-specific datasets and a CA HCD interpretation library. Future expansion: NYC ADU program (announced March 2026), Washington State, Oregon, Massachusetts ADU bills — but only after California is locked in.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** $79/plan pay-as-you-go OR $199/mo for 5 plans + $39/plan overage OR $499/mo unlimited for design-build shops with in-house drafters. Title 24 pre-screen add-on: $29/plan.
- **ACV:** Solo drafter on subscription ≈ $2,400/yr. Design-build shop ≈ $6,000/yr. Mix-weighted average ≈ $1,800–$2,400/yr.
- **Path to $1M ARR:** ~500 paying customers at $2,000 ACV = $1M. That's ~6–10% of the estimated 5K–8K CA ADU-design shops. Achievable in year 1 with focused outbound.
- **Path to $5M ARR:** ~2,200 customers at $2,250 ACV. Requires expansion beyond CA (NY ADU program, WA, MA), expansion to remodel/addition use cases (same code stack), and capturing the design-build firm tier with $499/mo unlimited.
- **Expansion path:** start ADU pre-check → add remodel/addition pre-check (same Title 24/CALGreen stack) → add commercial T.I. (Title 24 nonresidential) → add multi-state (NY ADU, WA, OR). Each adjacent code corpus lifts ACV without a new sales motion.

## 9. Go-to-market wedge — first 100 customers

Concrete and named:

1. **ADU Specialist registry** (aduspecialist.org/directory) — ~600 listed CA designers. Scrape, send Loom showing their last city's typical correction list caught by PlanFlight on a public sample plan. 5–8% reply realistic.
2. **ChiefTalk forum** + Chief Architect user groups — the core hangout for residential drafters. Sponsor one thread with a free-tier offer + post comparison videos. Forum has a California sub-thread on ADUs going back 9 years.
3. **LADBS public ADU permit submitter list** — every set submitted to LADBS lists the design professional. FOIA the last 12 months of ADU submissions, dedupe to ~1,500 unique designer firms, send a hyper-personalized "we ran your last submitted set through PlanFlight, here's what we caught" Loom. Highest-intent list possible.
4. **Title 24 consultant partners** — ~80 active CA Title 24 firms (gettitle24.com, title24calcs.com, Mecone, NorCal Title 24, SoCal Title 24). Offer 20% lifetime referral. They already see every drafter's plan; a "Title 24 + plan-check pre-flight bundle" is an obvious upsell for them.
5. **CBIA / BIA San Diego / BIA Southern California ADU committee meetings.** In-person demos at the local chapter dinners. ~6 chapters, ~200 attendees each, runs monthly.

## 10. Build complexity — justification

Medium. The AI core is off-the-shelf vision-LLM (Claude 4.7 / Gemini 2.5 Pro) + vector DB (pgvector or Pinecone) + PDF rendering (pdfplumber + reportlab/PyMuPDF). The hard work is curated content: ingest CRC, 2025 Title 24, CALGreen, HCD ADU Handbook, plus 25 city-specific amendment PDFs (LADBS, Long Beach, SD, SJ, etc.). Plus eval harness with 100 real ADU plan sets and ground-truth redlines from public city plan-check correction letters (which are public records). Two-person team in 4–5 months: one engineer on pipeline, one CA-licensed residential designer or experienced plans examiner on content + eval.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Plan-check pre-flight is advisory; final code-compliance call still rests with the licensed design professional and the city. No ICC license required to read public codes. |
| Ethical — no harm / dark patterns | ✅ | Saves designers and homeowners money and weeks. Doesn't replace the city's review. Disclosure: "advisory only, not a substitute for jurisdiction review." |
| Market exists (evidence above) | ✅ | 30K permits/yr, $5–15K/plan fees, ChiefTalk forums full of California drafters arguing about plan-check letters. |
| 1–5 person team can build this | ✅ | 2 people, 4–5 months. Off-the-shelf AI + curated code corpus. |
| Launchable with <$50K / ₹40L | ✅ | Inference + DB + a $5K legal review of the disclaimer. Two co-founders cover labor. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 17/20 | Lost weeks per project, lost referrals, lost margin. Felt every single submission. Not hair-on-fire daily but hair-on-fire monthly — and quantified in calendar weeks. |
| Demand evidence | 15 | 13/15 | Existing willingness-to-pay $245+/plan for Title 24 reports proves drafters already pay for plan-side compliance services. ChiefTalk threads, ADU forum complaints, public correction letters. Not hypothetical. |
| Build feasibility | 15 | 11/15 | Vision-LLM works on plans but eval harness against 100+ real plan sets is real engineering work. Jurisdiction overlay maintenance is ongoing. Not 6-week solo build. |
| Distribution clarity | 15 | 12/15 | LADBS submitter list is a goldmine. ADU Specialist directory + ChiefTalk + Title 24 consultant referrals are all named, sized channels. Some uncertainty on conversion. |
| Revenue mechanics | 15 | 12/15 | Pricing is benchmarked (Title 24 = $245/report; CodeComply/PlanCheckPro = enterprise). $79/plan slots cleanly into existing soft cost line item. $1M ARR math is realistic. |
| Time to first revenue | 10 | 8/10 | Beta with 10 ChiefTalk drafters in week 1, paid pilots in week 4–6, public launch month 5. Per-plan billing means revenue starts the moment the first paid plan runs. |
| Defensibility | 10 | 7/10 | Moat is the curated jurisdiction corpus + eval harness from real correction letters. Not replicable in a weekend. Plus brand inside the small CA ADU-designer community. Not a patent moat — a reputation + content moat. |
| **Total** | **100** | **80/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required`

Best built by a technical founder paired with a CA-licensed residential designer or retired plans examiner who has read 5,000 ADU sets. The domain partner is non-optional — without them the eval harness is garbage and the redlines hallucinate.

### Key assumptions to validate (3–5)

1. **Assumption:** A vision-LLM can catch ≥60% of typical ADU plan-check redlines (setback errors, missing energy report, missing fire-zone overlay, parking miscount, missing required sheets, Title 24 envelope mismatches) on real PDF sets. **How to test:** Run Claude 4.7 + custom prompts against 25 real ADU plan sets paired with their actual city correction letters. Measure recall.
2. **Assumption:** Solo CA ADU drafters will pay $79/plan or $199/mo. **How to test:** 30 cold Loom outreach to ADU Specialist directory designers. Pre-sell. Measure paid-pilot conversion.
3. **Assumption:** Jurisdiction-overlay content (top 25 CA cities) can be ingested + maintained by 1 person at <10 hrs/week. **How to test:** Build LADBS overlay end-to-end as the pilot jurisdiction. Time it. Repeat for Long Beach to estimate marginal cost per city.
4. **Assumption:** First-submittal correction letters are publicly available enough to serve as ground truth. **How to test:** PRA request to LADBS for 100 ADU correction letters from 2025. If they fulfill, eval is doable.
5. **Assumption:** Design-build shops with in-house drafters will pay $499/mo for unlimited. **How to test:** Pitch 10 named CA design-build firms (Snap ADU, bunchADU, Otto ADU, Cali ADU, Acton ADU, SnapADU, Abodu, Ataman Studio, EZ Plans, NEO Builders) for paid pilots.

### Risk flags

1. **Liability creep.** If a designer relies on PlanFlight, submits, and the city flags something PlanFlight missed, designer eats the redline. Mitigation: very explicit "advisory only" disclaimer; pricing positioned as cost-saving, not insurance. Long-term: errors-and-omissions partnership.
2. **Hallucination risk.** A vision-LLM that confidently cites a non-existent Title 24 section is worse than no tool at all. Mitigation: every flagged item must cite a real, retrieval-grounded section from the curated corpus; flags without citation are dropped before display.
3. **City-side AI cannibalization.** If LADBS itself deploys CivCheck-class AI for ADU intake, the designer-side value drops (you'd just submit and get instant feedback from the city). Mitigation: stay one cycle ahead — designer needs feedback *before* submission anyway, and city tools are slow to roll out outside pilots. Worst case, pivot to "submit-ready packaging" upsell.
4. **Code-update treadmill.** 2025 Title 24 + CALGreen + AB 434 templates change every 3-year cycle. Maintaining 25+ jurisdiction overlays is real ongoing labor. Mitigation: build content tooling as a first-class internal product; budget 0.5 FTE permanently on content.
5. **Outsource competition.** Drafters outsource plan-check pre-review to India-based draftsfolk for $50–$200/plan. PlanFlight competes on speed (10 min vs 2 days), consistency, and California-specific code knowledge.

## 14. Structured verdict

```
Score:                  80/100
Verdict:                STRONG GO
Confidence:             Medium
Best-fit builder:       Solo technical founder + CA-licensed residential designer (or retired plans examiner)
Time to revenue:        6–10 weeks to first paid pilot, 5 months to public launch
Capital to launch:      $25K–$40K (inference, hosting, legal review, content labor)
Top 3 assumptions to validate first:
  1. Vision-LLM recall ≥60% on real ADU sets vs. real city correction letters — eval against 25 LADBS sets, week 1–3
  2. Designers pay $79/plan or $199/mo — 30 cold Looms + 5 paid pilots, week 2–6
  3. Jurisdiction overlay ingestion <10 hrs/week per city after the first — build LADBS + Long Beach end-to-end, week 3–6
Kill criteria:
  - Abandon if recall <40% on real plans after 3 prompt iterations + retrieval tuning
  - Abandon if <3 of first 30 cold-outreach designers convert to a paid pilot
  - Abandon if a city-side tool (LADBS Archistar PreCheck, etc.) opens free designer-side pre-check before the v1 launches
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** PRA-request 50 ADU correction letters from LADBS 2025 + scrape 50 public ADU plan PDFs from Pasadena/Sonoma/SD pre-approved galleries. Build a paired eval set of 20 plans → ground-truth redline lists.
- **Day 3:** Build a one-shot Claude 4.7 + Gemini 2.5 Pro prompt that takes a plan PDF + jurisdiction tag and returns redline JSON. Run against the 20-plan eval set. Measure recall + precision per redline category.
- **Day 4:** Pull ADU Specialist directory + ChiefTalk active CA users → assemble a 50-name outreach list. Send 30 personalized Looms with each designer's *own* recent submitted plan run through the eval prompt. Offer a $99 paid pilot for 3 of their next plans.
- **Day 5:** Decide go / no-go.
  - Go if: recall ≥55% on critical-redline categories AND ≥3 paid pilot commits.
  - No-go if: recall <40% OR zero paid commits.

Falsifiable, finishable in 5 days, and produces real numbers.
