---
title: LookbackPilot — Medicaid look-back AI for elder law firms
slug: lookbackpilot-elder-law-medicaid
date: 2026-05-05
category: ProfessionalServices SaaS / US Solo + Small Elder Law Firms (Medicaid LTC Planning)
complexity: Medium
score: 79
verdict: GO
confidence: Medium
oneLiner: White-label family doc-collection portal that builds the 60-month Medicaid look-back binder for solo US elder law attorneys.
tags:
  vertical: ProfessionalServices
  model: SaaS
  geography: US
  secondary: [AI-agent, Workflow-automation, SMB, Solo-builder, Domain-vertical, Document-AI]
axes:
  problem: 17
  demand: 12
  build: 10
  distribution: 12
  revenue: 12
  time: 8
  defensibility: 8
founderFit: [domain-expertise-required, technical-heavy, sales-heavy]
featured: false
---

# LookbackPilot — 5-year Medicaid look-back doc collector & analyzer for solo elder law firms

## 1. One-liner

White-label family doc-collection portal that builds the 60-month Medicaid look-back binder for solo US elder law attorneys.

## 2. Trend signal — why now?

The oldest baby boomers turn 80 in 2026. The "silver tsunami" everyone's been forecasting is now a deluge — a wave of long-term care Medicaid applications hitting solo elder law firms that still run on Outlook, paper folders, and frantic phone calls to adult children asking for "five years of bank statements." On AgingCare.com, the canonical question is some version of: *"The Medicaid application requires 5 years' worth of bank statements. That's hundreds of pages. How do I do that?"* That thread has been live and getting fresh comments for years. It is the single most painful moment in the entire Medicaid LTC engagement, and it falls on whichever family member has the bandwidth to scan, label, and email — which is almost never the right person.

Three things changed in the last 12 months that make this a now-shaped opportunity:
- **Vision OCR for bank statements crossed the reliability line.** Docsumo, Reducto, Textract Bank Statements, and Gemini-class vision models extract line items from messy phone-photo PDFs at ~$0.30/page or less, with the accuracy needed for legal review. Two years ago this was a science project; today it's an API call.
- **Retroactive Medicaid coverage windows are shrinking.** Several states have already cut retroactive eligibility from 90 days to 60. Indiana nursing homes are sitting on $500M+ of delayed Medicaid back-payments while CMS sorts out methodology. Late, incomplete applications now equal real, immediate dollar losses for facilities and families — and bad PR for the firm that filed them.
- **CMS-0057-F prior-authorization rule rolling through 2026–2027** is putting payer-side digital workflows in motion across Medicaid programs. State agencies are increasingly digital and increasingly intolerant of incomplete paper packets — and the burden lands on the applicant's lawyer, not the state.

Provenance:
  - Signal 1 (demand): Multi-year AgingCare.com Q&A threads from family caregivers describing the 60-month bank-statement collection as the dominant Medicaid-application pain — "hundreds of pages of paper" — https://www.agingcare.com/questions/the-medicaid-application-requires-5-years-worth-of-bank-statements-thats-going-to-be-hundreds-of-pag-487520.htm — observed 2026-05-05
  - Signal 2 (feasibility): Docsumo, Reducto, and competing bank-statement extraction APIs publishing $0.15–$0.50/page pricing with 99%+ accuracy on consumer bank statements; Verisk's Xactimate adopting AI for similar photo→structured-data flows in adjacent verticals — https://www.docsumo.com/pricing and https://parsio.io/blog/5-best-bank-statement-extraction-software/ — observed 2026-05-05
  - Signal 3 (economic): Provider Magazine and Skilled Nursing News covering the 2026 silver tsunami + half-billion-dollar Medicaid back-payment delays in single states; elder law engagement fees averaging $6,500–$8,500 per Medicaid LTC application; NAELA membership sitting at ~4,500 attorneys with thousands more non-member solos — https://www.providermagazine.com/Articles/Pages/Long-Term-Care-2026-Trends-and-Outlook.aspx and https://www.remoteattorneys.com/blog/cost-of-elder-law-attorney — observed 2026-05-05
  Category: Workflow automation

## 3. The opportunity

Solo and small (1–5 attorney) elder law firms are the dominant channel for Medicaid LTC applications in the US. They charge $6,500–$8,500 flat-fee per engagement. The single most profit-eating step is collecting and organizing the 60-month look-back binder: 5 years × (3–7 accounts) × monthly statements + 1099s + property deeds + life insurance policies + caregiver agreements + nursing home admission packets. A paralegal eats 8–25 hours per case chasing the family by phone and email and labelling PDFs by hand. The work is unglamorous, repetitive, and embarrassing — adult children are juggling demented parents, dead spouses, and Schwab logins they don't have access to.

**Incumbents** in the elder law software space — ElderDocx (WealthCounsel), ElderCounsel, MyCase, Clio, CaseFox, Relaw — solve a different problem. They do *document drafting* (trusts, POAs, guardianship petitions) or generic case management with a portal. None of them ship a state-aware Medicaid checklist, a family-facing collection agent, an automated bank-statement extractor, or a look-back transfer flagger. The bank-statement extraction tools (Docsumo, Reducto, Lido, Parsio) are pure infra — they sell to lenders, not to elder law firms, and don't understand Medicaid look-back rules.

The gap is a **purpose-built, white-labelled, attorney-branded** workflow that an elder law solo can hand to the family on day one of the engagement and that returns a clean, audit-ready binder for the attorney to review on day 30. AI does the boring parts. The attorney still owns the legal judgement.

## 4. Target market

- **Primary customer:** Owner-attorney at a solo or 2–5-attorney US elder law firm doing 20–80 Medicaid LTC applications/year. Annual revenue $500K–$3M. Likely a NAELA member or a CELA (Certified Elder Law Attorney). Most often runs Clio or MyCase as case management. Already using ElderDocx or a homegrown Word template library for document drafting.
- **Why they buy:** Flat fees compress margins. Each case has 8–25 paralegal-hours sunk into doc collection alone. Application rejections cost real time and reputation when the family is already grieving. Adult children miss deadlines. The attorney is *the* bottleneck and knows it.
- **Rough TAM reasoning:** ~4,500 NAELA members + ~5,000 non-member elder law solos = ~10K addressable firms in the US. Charge $599/mo per firm = $72M ARR ceiling. Realistic SOM at 800 firms (8% penetration) = $5.75M ARR.
- **Why now for them:** Medicaid LTC applications are surging as boomers turn 80; CMS is shortening retroactive coverage; family caregivers' patience for paper is gone — they expect the same upload-from-phone UX they get from Turbo Tax and Rocket Mortgage. The first elder law firm in a metro that ships this workflow steals share from the next three over.

## 5. Product sketch (MVP)

- Attorney signs up, picks state(s) of practice — system loads that state's Medicaid LTC application + look-back checklist
- One-click "start a new case" — generates a unique, branded family portal link the attorney texts/emails to the client family
- Family portal is **phone-first, English/Spanish**: take photos of statements, deeds, ID, life insurance dec pages — system handles the mess
- AI **bank-statement extractor** ingests phone photos, scans, multi-account PDFs; normalizes into a single 60-month transaction ledger per applicant
- **Look-back analyzer** flags large transfers, gifts, round-number outflows, irregular deposits, gaps in months — generates an "attorney review" list with one-click "this is a gift / this is a routine bill / this needs explanation"
- Auto-redacts Social Security numbers, account numbers, minor names — produces a state-specific binder PDF with index, table of contents, and labelled tabs ready to file
- Attorney dashboard shows per-case completion %, missing-doc tickler, and an audit trail of every family upload
- Optional: state-specific application packet auto-fill (Florida ACCESS, NY DSS-3559, PA PA-600L, etc.) for attorney to review and sign

## 6. AI angle — what's load-bearing

Three places AI is doing real work, not decorating a form:

1. **Vision-to-ledger extraction** — the family uploads phone photos of crumpled bank statements, mixed-orientation PDFs, screenshots from Wells Fargo and Schwab. A vision model + structured extraction pipeline (Docsumo/Reducto-class infra, or in-house Gemini/GPT-4.1 vision) returns clean transactions per account per month. Without AI, this is the paralegal's 8–25 hours.
2. **Look-back transfer reasoning** — for each 60-month ledger, an LLM agent flags transactions that match Medicaid disqualifying patterns (gifts > $X, transfers to relatives, asset purchases, property re-titlings) and generates a plain-English "what to ask the client" list. Replaces a paralegal scrolling Excel for two days.
3. **State-aware checklist + packet assembly** — different states ask for different things (FL ACCESS vs NY DSS-3559 vs CA Medi-Cal). A retrieval-augmented agent pulls the right state's checklist and assembles the binder. Without LLM-driven document understanding, you'd hand-build 50 state templates.

Strip AI out and you have a Dropbox folder. The product disappears. AI is the entire product.

## 7. Localization angle (if any)

US-only by design. Medicaid is state-administered with 50 different rules, and *that* is the moat — not international localization. Within the US, the localization angle is **state-by-state Medicaid look-back logic**, and **Spanish-language family portal** is table stakes for FL, TX, CA, NY, AZ, NM. Eventually expand to Canada (provincial long-term care benefits), but that is post-$2M ARR.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** $399/mo solo tier (up to 10 active cases), $799/mo small-firm tier (up to 30 active cases), $1,499/mo for 5-attorney firms (unlimited cases + multi-attorney workspace). Setup/training one-time $499.
- **ACV:** Blended ~$7,200/year (mix of solo and small-firm tiers).
- **Rough math to $1M ARR:** 140 firms × $7,200 ACV = $1.0M. Achievable in 12 months if the NAELA wedge converts at 5%.
- **Rough math to $5M ARR:** 700 firms × $7,200 = $5.0M. Requires layered ICP — adding bigger 5–10-attorney firms at $1,499/mo and selling deeper modules (state packet auto-fill, Veterans Aid & Attendance benefits, special-needs trust funding).
- **Expansion path:** Cross-sell adjacent benefit applications (VA Aid & Attendance, Section 8 housing for disabled adult children, SSI redetermination) on the same family-portal infrastructure. Each adds 20–40% to ACV. Eventually a per-application surcharge ($49 per Medicaid packet completed) once attorneys see ROI.

## 9. Go-to-market wedge — first 100 customers

Concrete plays. Elder law is a small, high-trust community — the right reference customer in NY or FL closes 10 more by name.

- **NAELA + CELA channel:** ~4,500 NAELA members directory is publicly searchable. Scrape, segment by state and CELA designation, send a 90-second Loom showing the family-portal upload + 60-month ledger generated in front of them. Target 5–7% reply rate from a 1,000-attorney first batch = 50–70 demos. Founder-led closing.
- **State NAELA chapters as design partners:** 30+ state chapters host monthly CLE webinars. Pay $500–$1,500 to sponsor a 30-min session on "How AI doc collection cuts 15 paralegal hours per Medicaid case." Each webinar puts the product in front of 30–80 attorneys actively interested in operations.
- **Aging Life Care (geriatric care managers) referrals:** ALCA-certified care managers refer families to elder law attorneys constantly. Pitch them a free family-side feature; they push it to the attorney. Indirect channel but high-leverage.
- **ElderLawAnswers + AgingCare content takeover:** Run sponsored guides and answer the canonical "5 years of bank statements" Q&A. Each surface drives qualified attorney signups (the attorney is the buyer, but the family caregiver brings them the link).
- **Clio + MyCase app marketplaces:** Build a thin integration to be discoverable by every elder law firm already on those PMS systems. Clio's marketplace alone is a passive 100-firm/quarter funnel for niche tools.

## 10. Build complexity — justification

Medium. The hard parts are: (a) state-by-state Medicaid look-back rules ingestion (50 states, but realistically launch with FL/NY/PA/TX/CA = 60% of cases), (b) bank-statement extraction reliability across consumer banks, and (c) HIPAA-grade and attorney-client privileged data handling. Off-the-shelf: vision OCR (Reducto/Docsumo), LLM agents (GPT-4.1 / Claude), portal infra (Next.js + Clerk), e-sign (DocuSign), file storage (S3 + KMS). Custom: the Medicaid look-back transfer reasoning engine, state-checklist retrieval store, redaction pipeline, attorney audit trail. Pair of builders ships v1 (FL + NY) in 14–18 weeks; full 5-state coverage by month 6.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Doc-collection software for licensed attorneys; not unauthorized practice of law |
| Ethical — no harm / dark patterns | ✅ | Reduces stress on grieving families; transparent audit trail; no upsell traps |
| Market exists (evidence above) | ✅ | $6.5K–$8.5K average engagement, ~10K addressable firms, daily complaints from family caregivers |
| 1–5 person team can build this | ✅ | Off-the-shelf OCR + LLM + portal stack; state checklists are content work |
| Launchable with <$50K / ₹40L | ✅ | $5K infra/year + $20K founder living buffer; design-partner pilot funds the rest |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 17/20 | The 60-month bank-statement collection is *the* canonical pain. Family caregivers describe it as the worst part of an already-traumatic process. Attorneys eat 8–25 paralegal-hours per case. Hair-on-fire when applications get rejected. |
| Demand evidence | 15 | 12/15 | Multi-year forum threads, $500M+ in delayed back-payments, $6.5K–$8.5K WTP per engagement, NAELA directory of 4,500 active firms. Shy of 13–15 because no one has yet shipped the exact product — demand is implicit, not screaming for *this specific tool*. |
| Build feasibility | 15 | 10/15 | Bank-statement OCR is solved; LLM reasoning is fine; state-by-state Medicaid checklist is content-heavy but not technically novel. HIPAA-grade infra adds 4–6 weeks. Pair ships FL+NY MVP in ~14 weeks. |
| Distribution clarity | 15 | 12/15 | NAELA directory is named, state chapters are bookable, ALCA + ElderLawAnswers are clear referral sources. Founder-led demo close is realistic. Not 13+ because legal-services sales cycles can stretch 30–60 days even at this size. |
| Revenue mechanics | 15 | 12/15 | $399–$1,499/mo benchmarks against ElderDocx ($300–$700+/mo) and MyCase ($89–$179/seat). 800 firms × $599/mo = $5.7M ARR is a credible, non-aggressive path. Churn risk if attorney decides paralegal is "good enough." |
| Time to first revenue | 10 | 8/10 | Pre-sold pilots realistic — show a Loom of the look-back analyzer to 30 NAELA solos, get 3–5 paid pilots in week 4–6 at $499/mo. Revenue in 6–8 weeks of launch. |
| Defensibility | 10 | 8/10 | Compounding moat: state-by-state Medicaid checklist library, accumulated bank-format coverage, attorney workflow lock-in (binders re-used per renewal), trust + reference selling in a tight community. Hard to copy at month 12 even if Clio launches a clone — they don't have the elder-law domain depth. |
| **Total** | **100** | **79/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`domain-expertise-required` · `technical-heavy` · `sales-heavy`

Best-fit founder profile: a former elder-law paralegal or CELA-track attorney *paired* with a technical co-founder who has shipped document-AI products. The domain knowledge gap (state-by-state Medicaid rules, look-back math, what attorneys actually want in a binder) is what kills generic "AI for legal" startups in this niche.

### Key assumptions to validate (3–5)

1. **Assumption:** Solo elder law attorneys will pay $399–$799/mo if doc-collection time drops from 15 paralegal-hours to 2. **How to test:** 30 paid pre-orders at $499/mo from NAELA directory cold outreach in 4 weeks; if <8 close, pricing or pain is wrong.
2. **Assumption:** Family caregivers will complete the upload flow without dropping off — they need a phone-first, opinionated UX. **How to test:** Run 10 unmoderated user tests with adult children of nursing-home residents; target ≥70% completion of a mock look-back upload in <30 min.
3. **Assumption:** Bank-statement OCR is reliable enough on the messy long-tail (community banks, credit unions, paper-only thrifts) that attorneys will trust the ledger output. **How to test:** Run 200 statements pulled from 30 different consumer banks through the chosen OCR stack; manually validate a 10% sample; target ≥97% line-item accuracy.
4. **Assumption:** Attorneys will accept a state-specific application packet auto-fill as a pre-final draft (not as legal advice). **How to test:** Get 3 design-partner attorneys to sign off on FL + NY auto-filled packets; if they each redline >15% of fields, packet logic is too thin and the look-back binder alone is the v1.
5. **Assumption:** The CELA / NAELA channel converts at ≥5% on cold Loom outreach. **How to test:** Send 500 personalized Looms in batches of 100; if reply <3% or close <2%, switch to ALCA-referral motion.

### Risk flags

1. **Domain liability risk:** Anything that touches Medicaid eligibility advice borders on unauthorized practice of law. Product must rigorously stay on the "doc collection + flagging + attorney-reviewed" side of that line. Carry E&O insurance from day one.
2. **Bank-format long tail:** 5,000+ US banks/credit unions with idiosyncratic statement layouts. OCR accuracy on Bank of America is not OCR accuracy on Riverside Federal Credit Union. Mitigation: ship with top-30-bank format coverage and a "manual override" field; expand monthly.
3. **Incumbent retaliation:** WealthCounsel/ElderDocx adds a doc-collection module within 12 months. Likely. Defense: ship the Medicaid look-back analyzer faster and tighter than they can — they're a 25-year-old document-drafting company, not a doc-AI company.
4. **State Medicaid rule drift:** Rules change yearly; one state amends look-back from 60 to 36 months and your checklist breaks. Mitigation: dedicated content updater + state-specific changelog + annual CLE-style member updates as a marketing surface.
5. **Family caregiver UX is the gating factor.** If the family doesn't upload, the attorney sees zero benefit. The product is technically a B2B sale and operationally a B2C UX. That bridge is harder than it looks.

## 14. Structured verdict

```
Score:                  79/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Former elder-law paralegal / CELA-track attorney + technical co-founder with document-AI experience
Time to revenue:        6–8 weeks from MVP (FL + NY only)
Capital to launch:      $25K–$45K ($5K infra + $5K E&O + founder buffer + 3 month runway)
Top 3 assumptions to validate first:
  1. NAELA solos pay $499/mo after a 15-min demo (close ≥8 of 30 in 4 weeks)
  2. Family caregivers complete the upload flow on phone (≥70% completion in unmoderated tests)
  3. Bank-statement OCR ≥97% line-item accurate on 30 real-world consumer banks
Kill criteria:
  - Abandon if <5 of first 50 NAELA cold demos book paid pilots
  - Abandon if family-portal upload completion <40% across 20 real households
  - Abandon if WealthCounsel ships a comparable Medicaid doc-collection module in ElderDocx before our MVP launches
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Pull 500 NAELA + ElderLawAnswers solos with public emails. Build a 90-second Loom demoing a fake family-portal upload → 60-month ledger → look-back transfer flag list, branded as "your firm." Send 200 personalized cold emails.
- **Day 3–4:** Book 15 demo calls. Show the Loom + a Figma click-through of the attorney dashboard. Ask each attorney directly: *"If I shipped this to you next month, would you pay $499/mo for your first 10 cases?"* Track yes / no / maybe.
- **Day 5:** Decide go / no-go based on the falsifiable threshold: **≥4 paid pre-order commitments at $499/mo from 15 demos.** If <4, the wedge is wrong; rework target buyer (eg. shift to public adjusters or VA-benefits attorneys) or the offer (eg. price + scope). If ≥4, write the technical spec and start building the FL + NY MVP.
