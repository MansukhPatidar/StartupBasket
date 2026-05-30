---
title: "GradeFrame — job-architecture builder for EU small employers"
slug: eu-pay-transparency-job-architecture
date: 2026-05-30
category: Compliance / EU-SMB
complexity: Medium
score: 76
verdict: GO
confidence: Medium
oneLiner: "Turns a small EU employer's messy roles into defensible equal-value pay grades, ranges, and justifications for the 2026 directive."
tags:
  vertical: Compliance
  model: SaaS
  geography: EU
  secondary: [Compliance-driven, SMB, AI-agent, HR-tech, Multilingual]
axes:
  problem: 16
  demand: 13
  build: 12
  distribution: 11
  revenue: 12
  time: 7
  defensibility: 5
founderFit: [domain-expertise-required, sales-heavy]
featured: false
---

# GradeFrame — job-architecture builder for EU small employers

## 1. One-liner

Turns a small EU employer's messy roles into defensible equal-value pay grades, ranges, and justifications for the 2026 directive.

## 2. Trend signal — why now?

The EU Pay Transparency Directive (2023/970) had a transposition deadline of **7 June 2026** — three days after this proposal's date. The headline gender-pay-gap *reports* are phased by headcount and don't hit small firms until 2027/2031, which is why every lazy take says "SMEs have time." They don't. The three obligations that apply to **all employers regardless of size, immediately**: (1) you must publish a salary range or starting pay in every job ad or hand it over before the first interview, (2) you must drop salary-history questions, and (3) any employee can demand — in writing — the criteria you used to set and progress their pay, and you have to produce a defensible, gender-neutral answer with a four-year paper trail.

To answer that last one, you need "categories of workers of equal value" scored on the directive's four mandatory factors — skills, effort, responsibility, working conditions. The EU's own April 2026 toolkit spells out the method: micro-orgs (<10) use a Graduated Factor Comparison (score each role 0–5 per factor, bucket into pay grades); small orgs with <15 roles use Pair Comparison (compare every role to every other role). It is, in the toolkit's framing, "an enormous job scoring exercise" — and small employers have no HR system, no job evaluation framework, and no spec writer to do it.

The preparedness gap is documented, not hunch: HRLocker's 2026 survey found **only 4% of SMEs feel prepared**, **only 14% strongly understand the directive**, **70% say legal compliance is their single biggest worry**, and **65% expect it to raise HR costs**. The EU Commission earmarked **€3B** for implementation with explicit SME/digital-tools focus.

The incumbents that solve this — Syndio, Sysarb, Aon, Trusaic, Mercer, Deloitte — are built and priced for 250+ headcount and sold through consultants ("don't drown in spreadsheets or pay expensive consultants year after year" is literally the pitch they're failing to deliver to the small end). Nobody is serving the 10–100-employee European firm with a self-serve, sub-€100/mo tool.

Provenance:
  - Signal 1 (demand): Only 4% of EU SMEs feel prepared, 14% understand the directive, 70% say compliance is #1 worry — HRLocker CEO Crystel Robbins Rynne — https://www.thinkbusiness.ie/articles/ireland-sme-pay-transparency-directive-readiness-2026-podcast/ — 2026-05
  - Signal 2 (feasibility): EU April 2026 toolkit defines deterministic Graduated-Factor / Pair-Comparison job-scoring methods on 4 fixed factors, callable by 2026 multimodal LLMs over job ads/contracts/payroll — https://www.bakermckenzie.com/en/insight/publications/2026/04/european-union-toolkit-launched-to-support-pay-transparency-compliance — 2026-04
  - Signal 3 (economic): EU Commission allocated €3B for directive implementation with SME/digital-tool focus; directive-native incumbents (Sysarb, Syndio) emerging but enterprise-priced — https://www.consilium.europa.eu/en/policies/pay-transparency/ — 2026-05
  Category: Regulatory arbitrage

## 3. The opportunity

The directive forces a structured job-evaluation artifact onto employers who have never had one. Big firms hand this to Aon or Deloitte for €30k–€150k. The 10–100-employee firm — a 40-person agency in Dublin, a 25-person manufacturer in Bavaria, a 60-person SaaS startup in Amsterdam — can't and won't pay that, has no in-house comp team, and is staring at the June deadline with a spreadsheet and panic.

The incumbents are wrong-shaped for this customer three ways. **Wrong price:** Syndio/Sysarb/Aon assume an enterprise comp budget and an HRIS to plug into. **Wrong workflow:** they expect you to *already have* clean role data, defined factors, and a job catalog — the small firm has none of that; the messy extraction step is exactly the work, and they don't do it. **Wrong motion:** consultant-led, weeks-long engagements, when the SMB wants to self-serve in an afternoon.

The 10× cut: feed GradeFrame your real, messy inputs — the job ads you posted, the employment contracts, a payroll CSV, the org chart in someone's head — and it does the extraction-plus-scoring the toolkit demands: classifies each role on skills/effort/responsibility/working-conditions, groups roles into equal-value categories using the directive's own method, drafts the salary ranges for your job ads from benchmark anchors, flags any unexplained >5% gender gap (the threshold that triggers a mandatory joint pay assessment), and generates the written, gender-neutral justification you hand an employee or a regulator on request. The deterministic scoring math is public EU formula — deliberately not the AI. The AI does the part humans get wrong and slow: reading inconsistent role descriptions and mapping them to factors defensibly.

## 4. Target market

- **Primary customer:** Owner/founder, HR-of-one, or office manager at EU-based companies with **10–100 employees** — agencies, light manufacturers, professional-services firms, growth-stage startups — who have EU employees and no dedicated compensation function. Start in the early/strict transposers: **Ireland, Netherlands, Germany, France** (Germany & France published laws going beyond the minimum).
- **Why they buy (their words):** *"Only 4% of SMEs currently feel like they are prepared for pay transparency."* — *"There's probably a lot that companies are doing right now. It is just that they do not have it documented."* — *"John is paid more because he asked for more money. That is not defensible."* (all HRLocker / Voltedge, 2026). They buy because an employee request or a job posting is a dated trigger event and "we'll sort it later" stops being an option in June.
- **Rough TAM reasoning:** The EU has ~1.5M enterprises in the 10–249 employee band. Even a conservative slice — say 200k firms in the 10–100 range across the four launch countries that hire actively enough to feel the job-ad obligation — at €600–1,200/yr is a €120M–€240M addressable line. We need a few thousand of them.
- **Why now for them:** The deadline is a calendar event, not a trend. June 7, 2026 already passed at national-transposition level; the first awkward employee pay-criteria request or the first job ad that legally needs a range is the moment the abstract becomes a bill.

## 5. Product sketch (MVP)

- **Messy-input intake:** upload job ads, employment contracts, an org chart, and a payroll export (CSV/XLSX); the tool extracts each role and its real responsibilities — no pre-cleaned data required.
- **Factor scoring:** auto-scores every role on the directive's four mandatory factors (skills, effort, responsibility, working conditions) using the EU toolkit's Graduated-Factor or Pair-Comparison method, with every score shown and editable.
- **Equal-value grouping:** buckets roles into defensible "categories of workers of equal value" and pay grades — the artifact the directive actually demands.
- **Salary-range drafter:** proposes a compliant pay range per role for job ads, anchored to imported benchmark data, with a one-click "copy into your job posting."
- **Gap flag:** computes the gender pay gap per category and flags anything over the 5% threshold that would trigger a mandatory joint pay assessment, before a regulator does.
- **Justification generator:** drafts the written, gender-neutral explanation of how a role's pay was set and progresses — the answer you hand an employee who files a pay-info request.
- **Audit trail:** versioned, timestamped record of every scoring decision and its rationale, retained for the four-year evidence window the directive requires.
- **Country pack:** language + national-transposition nuances for the launch countries (DE/FR/NL/IE), since each member state's law diverges from the minimum.

## 6. AI angle — what's load-bearing

Remove the AI and this is a spreadsheet template — which is exactly what the consultancies hand over and exactly what the SMB can't use. The load-bearing AI work is **reading inconsistent, human-written role evidence** (a two-line job ad, a verbose contract, a payroll row that just says "Manager") and **mapping it to the four formal factors defensibly** — the step a small employer has no skill or time for. The scoring arithmetic and the grouping rule are deterministic public EU formula; we deliberately do *not* let the model invent those, because the whole value is defensibility and a hallucinated score is worthless. AI extracts and classifies; the directive's method computes. That split is the moat against "ChatGPT can do this" — ChatGPT will cheerfully produce an *indefensible* grade.

## 7. Localization angle

This is a localization play disguised as a compliance play. The directive is EU-wide but every member state transposes it into divergent national law (Germany and France already gone beyond the minimum; Ireland and the Netherlands adopted most of it; others are still drafting). A generic global comp tool can't track 27 transpositions, the local thresholds, the required languages, or the national enforcement quirks. GradeFrame ships country packs — German/French/Dutch UI and justification output, each country's specific salary-range-disclosure timing and joint-assessment rules — which is precisely what the US-built enterprise incumbents won't bother to localize down to the SMB tier. Local pricing matters too: a €79/mo tier works where a consultant's €30k engagement is a non-starter.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** €79/mo Solo (≤25 employees), €149/mo Team (26–100 employees), €299/mo Multi (multi-country or PE-backed roll-up), all annual. One-time €299 "Compliance Sprint" onboarding upsell where we run the full job-architecture build with them.
- **ACV:** ~€1,500 blended (mix of tiers + onboarding + a per-country add-on).
- **Math to $1M ARR:** ~700 customers × ~€1,500 ACV ≈ €1.05M. Plausible inside the four launch countries given ~200k firms in-band.
- **Math to $5M ARR:** ~2,800 paying firms + expansion: per-country packs as customers add EU subsidiaries, an annual re-certification fee (the directive demands ongoing maintenance, not a one-shot), and a white-label tier for the accountants/payroll bureaus and employment-law firms that already advise these SMBs.
- **Expansion path:** land on the June panic with one country, expand seat-and-country as the firm grows and as later reporting waves (2027, 2031) pull more obligations forward; upsell the bureau/advisor channel into a multi-client console (one bureau = 30–80 SMB logos).

## 9. Go-to-market wedge — first 100 customers

- **Free "Are you exposed?" checker as the lead magnet:** a 3-minute self-assessment that scores a firm's directive-readiness and shows the specific gaps (no ranges in ads, no documented criteria, likely >5% gap). Drop it into the Irish/Dutch/German SME LinkedIn and HR groups where 70%-say-it's-their-#1-worry owners already congregate. The output *is* the demo.
- **Co-sell through accountants, payroll bureaus, and employment-law firms:** these advisors are being asked "how do I comply?" by every SMB client right now and have no tool to point at. One bureau resells to dozens of clients; we give them the multi-client console and a margin.
- **Deadline-timed cold outreach with a half-built artifact:** scrape EU job boards for companies *currently posting ads without salary ranges* (a public, dated signal of non-compliance), send a personalized Loom showing their own roles pre-scored into draft grades, ask for 20 minutes. Non-compliant ad = warm lead with a visible problem.
- **HR-community webinars** co-hosted with a local employment lawyer in each launch country — the lawyer brings credibility and the audience, we bring the "and here's how to actually do it in an afternoon" tool.

## 10. Build complexity — justification

Medium. The intake/extraction (multimodal parsing of ads, contracts, payroll), factor-scoring engine, and justification generation are off-the-shelf-LLM-plus-orchestration; the scoring/grouping math is a deterministic implementation of a published EU method, not novel research. The real work is the country packs (national-law nuance × 4) and getting the justifications genuinely defensible — which needs a comp/employment-law advisor on the team, not more engineering. A pair plus a domain advisor ships a one-country v1 in ~10–12 weeks; each additional country pack is incremental.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | We help firms comply with EU law; we draft artifacts, we are not the legal authority — clear positioning needed. |
| Ethical — no harm / dark patterns | ✅ | Pro-transparency, pro-equity; risk is over-promising "compliance guarantee" — must avoid. |
| Market exists (evidence above) | ✅ | HRLocker survey, €3B EU spend, directive-native incumbents already funded at enterprise tier. |
| 1–5 person team can build this | ✅ | Pair + domain advisor; off-the-shelf AI + deterministic public method. |
| Launchable with <$50K / ₹40L | ✅ | Software + advisor retainer; no capex. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | Hard deadline + employee/regulator trigger events; 70% call it their #1 worry. Slightly under hair-on-fire because the *reporting* part is years out and many SMBs will procrastinate. |
| Demand evidence | 15 | 13/20→13/15 | Multiple independent signals: HRLocker stats, funded enterprise incumbents, €3B EU spend, divergent national laws. Skeptic nods. |
| Build feasibility | 15 | 12/15 | Off-the-shelf AI + deterministic public method; country packs and defensibility are the real work, not research. |
| Distribution clarity | 15 | 11/15 | Named channels (advisor co-sell, LinkedIn HR groups, non-compliant-ad scraping) but conversion on a "buy because you have to" compliance purchase is uncertain until validated. |
| Revenue mechanics | 15 | 12/15 | Pricing benchmarked below consultant cost; clear ACV; some risk SMBs treat it as one-and-done rather than recurring. |
| Time to first revenue | 10 | 7/10 | Deadline creates urgency; one-country v1 in ~10–12 weeks, paid pilots plausibly inside 8 weeks of launch. |
| Defensibility | 10 | 5/10 | Soft moat: country-law nuance + advisor channel + accumulating scored-role data. Copyable by a funded incumbent moving down-market — the central risk. |
| **Total** | **100** | **76/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`domain-expertise-required` (comp / EU employment law advisor is non-optional) · `sales-heavy` (advisor co-sell + compliance selling)

### Key assumptions to validate (3–5)

1. **Assumption:** A 10–100-person EU firm will pay €79–149/mo rather than a one-time €300 spreadsheet or ignoring it until sued. **How to test:** 30 pre-sale conversations with Irish/Dutch SMB owners off the free checker; count how many put down a deposit or commit to a paid pilot.
2. **Assumption:** The AI-generated factor scores and justifications are *defensible* enough that an employment lawyer will stand behind them. **How to test:** have 3 employment lawyers in launch countries red-team 20 generated justifications against the directive's criteria; need ≥80% pass with light edits.
3. **Assumption:** Accountants/payroll bureaus will resell. **How to test:** pitch 15 bureaus the multi-client console; need ≥3 signed referral/reseller LOIs.
4. **Assumption:** "Non-compliant job ad" scraping yields warm leads. **How to test:** 100 personalized Looms to firms posting range-less ads; need ≥5% reply and ≥2 demos.

### Risk flags

1. **Regulatory risk (the moat IS the risk):** national transpositions are still in flux as of May 2026 — methods, thresholds, and timelines can shift per country, forcing constant country-pack maintenance. Also "Stop the clock" lobbying (BusinessEurope) could delay obligations and deflate urgency.
2. **Incumbent down-market move:** Sysarb is already "directive-native"; a funded comp player shipping a self-serve sub-€100 SMB tier before our v1 caps the upside. Speed to the advisor channel is the only defense.
3. **Compliance-theater / liability:** if we imply "guaranteed compliance" and a customer gets fined, that's an existential liability and trust problem. Positioning must be "defensible artifact + audit trail," never "guarantee."
4. **Procrastination:** the brutal truth of compliance SMB sales — many will wait until an actual employee request or audit. Time-to-revenue depends on manufacturing urgency the calendar only half-provides.

## 14. Structured verdict

```
Score:                  76/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder + EU comp/employment-law advisor; sales-led
Time to revenue:        8–12 weeks (one-country v1; paid pilots off the deadline)
Capital to launch:      €20–35K ($22–38K) — mostly advisor retainer + benchmark data licensing
Top 3 assumptions to validate first:
  1. SMB willingness to pay €79–149/mo vs. ignore — 30 pre-sale calls, count deposits
  2. Justification defensibility — 3 employment lawyers red-team 20 outputs, need 80% pass
  3. Advisor channel resells — pitch 15 bureaus, need 3 reseller LOIs
Kill criteria:
  - Abandon if <15% of 30 pre-sale conversations convert to paid pilot or deposit
  - Abandon if employment lawyers reject >40% of generated justifications as indefensible
  - Abandon if a funded incumbent ships a self-serve sub-€100/mo SMB tier with country packs before our v1
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Build the free "Are you exposed?" readiness checker (no full product — just the assessment + a hand-mocked sample job-architecture output). Post it into 5 Irish/Dutch/German SME-owner and HR LinkedIn groups.
- **Day 3–4:** Run 20-minute calls with everyone who completes the checker and opts in. Ask: would you pay €99/mo for this done for you, and would you put down a €100 deposit for early access? Separately, send 10 employment lawyers 5 sample AI-generated justifications and ask them to mark each defensible / not.
- **Day 5:** Decide. **Go** if ≥5 firms put down a deposit AND ≥80% of sampled justifications pass lawyer review. **No-go** if deposits are zero (it's a "later" problem, not a "now" purchase) or lawyers reject most justifications (the AI can't clear the defensibility bar that is the entire value).

The falsifiable result: deposits-on-the-table count and the lawyer pass-rate. Both are numbers, not vibes.
