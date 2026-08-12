---
title: "AtoTsuke — clawback keeper for Japan's subsidised factories"
slug: japan-subsidy-effect-reporting
date: 2026-08-12
category: GovTech / Japan-SMB
complexity: Low
score: 76
verdict: GO
confidence: Medium
oneLiner: "Tracks the wage and productivity targets a Japanese SME promised for its subsidy, before the repayment order arrives."
tags:
  vertical: GovTech
  model: SaaS
  geography: Global
  secondary: [Japan, Compliance-driven, SMB, AI-agent, Manufacturing, Solo-builder]
axes:
  problem: 17
  demand: 12
  build: 13
  distribution: 11
  revenue: 12
  time: 7
  defensibility: 4
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# AtoTsuke

## 1. One-liner

Tracks the wage and productivity targets a Japanese SME promised for its subsidy, before the repayment order arrives.

## 2. Trend signal — why now?

Japan is shovelling money at small-factory automation. The government's 省力化投資補助金 (labour-saving investment subsidy) got a supplementary budget of **JPY 340 billion across FY2025/2026**, announced December 2025 — the largest labour-saving investment support the country has run. Adoption is not theoretical: the 一般型 5th round alone reviewed 2,035 applicants and **accepted 1,251** (announced 2026); the 4th round accepted 1,456 of 2,100 at a **69.3% acceptance rate**; the round before that accepted 1,854 of 2,775. That's thousands of new recipients per round, several rounds a year, with the 8th round opening mid-August 2026.

Here's the part nobody is selling into. Getting the money is not the end — it's the start of a **3-to-5-year obligation with a repayment clause attached**. Recipients must file an 効果報告 (effect report) **once a year for three years** after installing the equipment, and for 一般型 the committed targets are all mandatory, not aspirational:

- **労働生産性 +4.0% CAGR** (value-added ÷ headcount, where value-added = operating profit + labour cost + depreciation)
- **給与支給総額 +3.5% CAGR** per employee, bonuses included
- **事業場内最低賃金 ≥ regional minimum wage +30 yen**, and the regional minimum wage *rises every year*, so the bar moves under you

Miss them and the money comes back. The return formula is explicit: **交付額 × 未達割合** (grant × shortfall ratio) for the wage-total miss, and if the annual growth rate is zero or negative, **全額返還** — full repayment. Miss the minimum-wage floor and you repay the grant divided by the plan years. Simply failing to *file* the report can get the whole 交付決定 revoked. There is a genuine escape hatch — if value-added didn't grow *and* the company is operating at a loss, repayment is waived — but knowing you qualify for it requires tracking the exact numbers you're now failing to track.

And the people who sold the application walk away right when the risk starts. From a Japanese advisory firm's own comparison of who does what: **"行政書士は基本的に書類作成までで採択後フォローは別業務扱い"** — administrative scriveners stop at document preparation; post-acceptance follow-up is billed as a separate engagement, if offered at all. Application support is a crowded, well-paid market (success fees of 10–15% of the award; retainers of ¥30,000–150,000/month). The five-year tail is nobody's product.

The catalogue-type track had its 収益納付 return rule scrapped in the March 2026 revision, which tells you the government heard the complaints about post-award burden — and also that the wage and productivity requirements they *kept* are the ones they consider non-negotiable.

Provenance:
  - Signal 1 (economic): JPY 340bn supplementary budget for SME labour-saving subsidies FY2025/26; thousands accepted per round (1,251 of 2,035 in round 5; 69.3% rate in round 4) — https://www.oecd.org/en/publications/sme-technology-adoption-in-the-united-kingdom_cecfb794-en/japan-s-sme-productivity-revolution-programme_4b64c40d-en.html + https://mirasapo-plus.go.jp/infomation/32507/ + https://hojokin-joseikin.com/4345/ — 2026-08-12
  - Signal 2 (demand): Mandatory annual 効果報告 for 3 years with hard clawback — 交付額 × 未達割合, full repayment if CAGR ≤ 0; advisors explicitly stop at filing ("採択後フォローは別業務扱い") — https://listing-partners.com/gbiz/gbiz_column/syouryokuka_chinageyouken/ + https://www.shigyo.co.jp/post_topics/koukahoukoku/ + https://dee-solutions.com/blog/sme-advisor-fee-faq — 2026-08-12
  - Signal 3 (feasibility): Reporting runs through the jGrants electronic system; common failures are mechanical (receipt/ledger mismatch, missing dated before-after photos, unmet effect values) — solvable with document parsing and a calendar, not new science — https://hojokinnavi.com/blog/shoukika-hojokin-jisseki-houkoku-2026 + https://shoryokuka.smrj.go.jp/assets/pdf/implementation_manual.pdf — 2026-08-12
  Category: Regulatory arbitrage

## 3. The opportunity

The subsidy industry in Japan is built entirely around the moment of application. Consultants, 行政書士, 中小企業診断士 and申請代行 shops all compete on acceptance rate, charge 10–15% of the award, and disengage after the grant lands. The recipient — a 30-person metal shop that has never modelled 付加価値額 in its life — is then handed a five-year quantitative commitment with a repayment trigger and told to self-report annually through a government portal.

What actually happens in year two: the owner doesn't know their current 労働生産性 CAGR. They don't know that October's regional minimum wage hike just pushed them below the +30 yen floor. They don't know that hiring two people raised headcount and *lowered* value-added per worker, quietly breaking the productivity target the equipment was supposed to fix. They find out at report time, when the number is already locked and nothing can be done.

The gap is a **monitoring product for a compliance obligation that everyone treats as a filing event**. The targets are computable from data the company already has — payroll, financial statements, headcount. Computed monthly instead of annually, a miss becomes a warning with 10 months to fix it: give the raise, delay the hire, time the bonus. Computed annually, it's a repayment order.

This is not a smarter application tool. It's the thing that starts working the day the application tool stops.

## 4. Target market

- **Primary customer:** The owner or 経理 lead of a 10–100 employee Japanese manufacturer, logistics operator, food processor or clinic that has been accepted for 省力化投資補助金 (一般型 or カタログ型), ものづくり補助金, or 事業再構築補助金 within the last 24 months. Grant sizes run to ¥100M with subsidy rates up to 2/3, so the sum at risk is typically ¥5M–50M.
- **Secondary customer (and best channel):** 中小企業診断士 and 認定経営革新等支援機関 practices that want to sell a recurring post-award retainer instead of one-off success fees. They carry 10–60 subsidised clients each.
- **Why they buy:** The downside is asymmetric and cash-denominated. A ¥20M grant with a fully-missed wage target is a ¥20M repayment against a company whose annual operating profit might be ¥30M. Owners are not paying for reporting convenience — they're paying to not be surprised.
- **Rough TAM reasoning:** 省力化 一般型 alone is accepting roughly 1,200–1,900 firms per round across multiple rounds a year. Stack ものづくり補助金 and 事業再構築補助金 — both carrying comparable wage-increase requirements and multi-year effect reporting — and the pool of Japanese SMEs currently inside an active reporting window is comfortably in the tens of thousands, with several thousand new ones added annually and each staying obligated for 3–5 years. I don't need a big share of that.
- **Why now for them:** The FY2025/26 budget surge means an unusually large cohort entered their obligation window in 2026 — and the first annual effect reports for the recent acceptance waves come due through 2026–2028. Meanwhile Japan's regional minimum wages are rising sharply every October, which mechanically pushes firms toward breaching the +30 yen clause without doing anything wrong.

## 5. Product sketch (MVP)

- **Obligation setup** — enter your subsidy type, acceptance round, grant amount and plan period; the product loads the exact targets that apply to you (一般型 vs カタログ型 differ: +4.0%/+3.5%/+30円 vs +3.0% productivity only, bonuses counted or not) and builds the reporting calendar for the full 3–5 years.
- **Monthly target dashboard** — current 労働生産性 CAGR, 給与支給総額 CAGR per employee, and lowest in-house hourly wage vs the current regional minimum +30 yen. Each shown as on-track / at-risk / breached against the year-end position, not just today's.
- **Payroll and statement ingest** — upload payroll CSVs and 決算書; the product extracts headcount, wage totals, operating profit, labour cost and depreciation, and computes 付加価値額 without the owner learning the formula.
- **Breach forecast with a fix window** — "at current run-rate you finish the year at +2.8% against a +3.5% commitment; a ¥X bonus adjustment before the fiscal close closes the gap" — surfaced with months to act, plus the estimated repayment if unaddressed (交付額 × 未達割合).
- **Minimum-wage tracker** — watches the annual October regional minimum wage revision for your prefecture and flags every employee who falls under the +30 yen line before it takes effect.
- **Exemption check** — tests whether you qualify for the loss-making waiver (value-added not increased *and* company-wide operating loss) so a bad year is handled as a documented exemption rather than a panic.
- **Effect-report assembler** — pre-fills the annual 効果報告 figures and assembles the evidence set, including the mechanical items that get filings bounced: dated before/after installation photos, receipts reconciled against the ledger.
- **Deadline nags** — escalating reminders to owner and advisor for the annual report window, since a missed filing alone can revoke the 交付決定.

## 6. AI angle — what's load-bearing

Two places, both real work.

**Document extraction.** Japanese SME payroll exports and 決算書 are not standardised — every 税理士 office and payroll package emits a different layout, often as PDF or a spreadsheet shaped for human eyes. Pulling headcount, 給与支給総額 including bonuses, operating profit, labour cost and depreciation out of those reliably is exactly the messy-document extraction job that got good and cheap in the last 18 months. Without it, this product is a spreadsheet the owner won't maintain, and an unmaintained tracker is worth nothing.

**Rule interpretation per cohort.** The requirements are not one rule — they vary by subsidy, by track (一般型 vs カタログ型), by acceptance round, and by revision date, and they change (the March 2026 catalogue revision scrapped 収益納付 outright). Mapping a specific company's acceptance documents onto the exact obligation set that binds *them*, and re-checking it when the rules move, is language work over a corpus of official manuals and 公募要領 PDFs.

Remove the AI and you have a consultant with a spreadsheet, charging ¥100K/month for 20 clients and unable to take the 21st. That's the incumbent. The AI is what turns it into something one person can run for a thousand companies.

## 7. Localization angle

Japan-only by construction, and that's the point rather than a limitation. The obligation is defined in Japanese government 公募要領, filed through jGrants, denominated in yen, and pegged to prefecture-level minimum wages that update every October. The product must be Japanese-language end to end, and the owner-facing copy has to explain 付加価値額 to someone who has never computed it.

That specificity is the moat's raw material. A generic "grant compliance" tool cannot price the +30 yen clause against Tokyo's minimum wage, and a foreign entrant cannot read the 公募要領 revisions fast enough to stay correct.

The same shape exists elsewhere — EU and Korean SME grants carry comparable post-award conditions — but that's a later market with a different rulebook, not a v1 feature.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** ¥9,800/month per company for the direct SMB tier (single subsidy, full obligation window). ¥29,800/month for multi-subsidy or multi-site. Advisor tier at ¥49,800/month for up to 25 client companies, ¥98,000 for up to 60.
- **Justification for the wallet:** these firms already pay 10–15% success fees on the award — ¥2M–5M on a mid-size grant — and ¥30,000–150,000/month for advisory retainers. ¥9,800/month against a ¥20M repayment exposure is not a line item anyone argues about. It's cheap enough to sit under the advisor's existing retainer rather than compete with it.
- **ACV:** ~¥118K (~$780) direct SMB; ~¥600K (~$4,000) advisor accounts.
- **Rough math to $1M ARR:** ¥150M. Roughly 60 advisor practices at ¥49,800/mo (¥36M) plus 800 direct companies at ¥9,800/mo (¥94M) plus a modest multi-site band gets there. Or bluntly: ~1,000 obligated companies under management, out of a pool in the tens of thousands.
- **Rough math to $5M ARR:** ¥750M requires expanding beyond 省力化 into ものづくり and 事業再構築 cohorts (same reporting shape, larger installed base), landing 250+ advisor practices, and holding customers across the full 5-year window rather than 3. Plausible; not the plan for year one.
- **Expansion path:** retention is structurally good — the obligation lasts 3–5 years and churning means going blind on a repayment risk. ACV grows when a customer wins a *second* subsidy (common; repeat applications have their own escalating wage requirements — +3.5% over the prior application, rising to +10.5% after three years) and when advisors add client seats.

## 9. Go-to-market wedge — first 100 customers

- **Work the published acceptance lists.** 中小企業庁 publishes 採択者一覧 for each round — company names, prefectures, project titles, thousands of firms per round. That is a free, dated, precisely-qualified lead list of companies whose obligation clock just started. Match names to contact details, then send a one-page personalised risk sheet: their round, their applicable targets, their prefecture's current minimum wage and the +30 yen line, their approximate repayment exposure. Target 200 letters per round, expect 3–5% to a call — this is direct mail to Japanese SMEs, where a physical letter still outperforms cold email.
- **Recruit 20 中小企業診断士 practices as the primary channel.** They are already telling clients "post-acceptance follow-up is a separate engagement" and have no product to deliver it with. Pitch: white-labelled monitoring that turns a one-off ¥2M success fee into a ¥50K/month multi-year retainer, at a tool cost far below what they charge. One advisor signing brings 10–60 obligated companies. Find them through the prefectural 診断士協会 directories and the 認定経営革新等支援機関 public registry.
- **Own the search terms for the panic moment.** "効果報告 未達", "補助金 返還", "賃上げ要件 未達成" are searched by people in active trouble with a repayment risk. Publish a genuinely precise Japanese calculator — enter grant amount and your current wage growth, see your repayment exposure under 交付額 × 未達割合 and whether the loss-making exemption applies. High intent, low competition, and it demonstrates the core computation for free.
- **Ride the equipment vendors.** Vendors listed in the subsidy catalogue co-sign applications and want their machines to look like a success, not a clawback. A vendor bundling a year of monitoring with the machine sells a de-risked purchase. Start with 5 vendors in machine tools and food processing.
- **Time the pushes to the calendar.** Each acceptance announcement creates a fresh named cohort; each October minimum-wage revision creates a fresh compliance scare. Two predictable demand spikes a year to aim outreach at.

## 10. Build complexity — justification

**Low.** The computations are arithmetic defined in public documents — CAGR on value-added per head, CAGR on wage totals per head, a floor comparison against a published prefectural number. No modelling, no novel infrastructure. The genuine work is document ingestion across messy payroll and 決算書 formats, and encoding the obligation rules per subsidy/track/round correctly — the latter being careful reading rather than hard engineering. A solo builder with Japanese-language capability ships a credible v1 in 8–10 weeks; two people with a domain advisor do it comfortably in 8.

The deliberate v1 scope cut: don't file anything into jGrants. Compute, warn, and assemble the numbers and evidence. Submission stays with the customer or their advisor, which removes the integration risk and the liability question from the first release.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Monitoring and document preparation. No licensed activity — filing stays with the customer or their 診断士. |
| Ethical — no harm / dark patterns | ✅ | Helps companies meet wage-increase commitments they already made. The product's success case is employees getting paid more. |
| Market exists (evidence above) | ✅ | Thousands accepted per round, mandatory multi-year reporting, explicit clawback formula, advisors openly declining the work. |
| 1–5 person team can build this | ✅ | Low complexity; solo-buildable v1. |
| Launchable with <$50K / ₹40L | ✅ | Well under. Main costs are document-parsing inference and a Japanese-fluent domain advisor. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 17/20 | Cash-denominated downside — full repayment if CAGR ≤ 0, and revocation for simply not filing. Felt annually with a hard deadline, but the *pain* only bites at report time, which is exactly why owners under-buy in year one. Docked 3 for that latency. |
| Demand evidence | 15 | 12/15 | Strong structural evidence: acceptance counts, budget figures, published clawback formula, advisors explicitly excluding post-award follow-up. Docked because I have no verbatim owner complaints — Japanese SME owners don't post their subsidy anxiety on public forums, so the demand is inferred from the rulebook and the advisory market rather than heard directly. |
| Build feasibility | 15 | 13/15 | Arithmetic plus document extraction. No novel tech. Rule encoding across subsidy variants is the only real time sink. |
| Distribution clarity | 15 | 11/15 | Excellent list quality — the government publishes the exact names of newly obligated companies. Docked because Japanese SME sales cycles are slow and relationship-led, and the advisor channel needs trust-building before it compounds. |
| Revenue mechanics | 15 | 12/15 | Pricing is well below the established willingness-to-pay (10–15% success fees, ¥30–150K retainers) and retention is structurally locked to a 3–5 year obligation. Docked because ¥9,800 direct pricing needs volume, and the advisor tier carries the plan. |
| Time to first revenue | 10 | 7/10 | Pre-sellable to advisors before build completes, but Japanese SMB procurement and trust-building push realistic first payment to 8–12 weeks. |
| Defensibility | 10 | 4/10 | Execution and accumulated rule-encoding across subsidy variants. Copyable by a determined Japanese competitor in under a year; the real defence is being the one with the acceptance-list relationships and the advisor network. |
| **Total** | **100** | **76/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required`

Business-level Japanese is non-negotiable — the rulebooks, the customers, and the sales conversations are all Japanese. A non-Japanese-speaking founder needs a genuine co-founder here, not a translator.

### Key assumptions to validate (3–5)

1. **Assumption:** Subsidised SME owners cannot currently state their live 労働生産性 CAGR or their position against the +30 yen floor. **How to test:** call 25 companies from a published 採択者一覧 and ask both questions directly. If most know their numbers, the warning product has no job.
2. **Assumption:** 中小企業診断士 practices will resell monitoring as a recurring retainer rather than viewing it as a threat to their billable hours. **How to test:** pitch 15 practices from the 認定支援機関 registry; look for 3 signing a paid pilot, not just expressing interest.
3. **Assumption:** ¥9,800/month clears the bar for a direct SMB against a multi-million-yen exposure. **How to test:** price-test at ¥9,800 and ¥19,800 across two outreach cohorts and compare conversion, not stated preference.
4. **Assumption:** Payroll and 決算書 extraction works reliably enough across real-world Japanese formats to keep the dashboard trustworthy. **How to test:** collect 30 real files from pilot customers and measure extraction accuracy on the six fields that matter before building anything else.

### Risk flags

1. **Regulatory risk (real, and cuts both ways):** the rules move. The March 2026 catalogue revision deleted 収益納付 entirely. A future revision could soften the wage requirements or the clawback and shrink the fear that sells this. Conversely, tightening grows the market. Net: the product must track rule changes as a core function, not a maintenance chore.
2. **Latent-pain risk:** the repayment only materialises at report time, years out. Owners chronically under-buy insurance against distant, uncertain losses. This is the single biggest threat to conversion, and it's why the advisor channel — where the tool is bundled into an existing trusted retainer — probably outperforms direct sales.
3. **Incumbent encroachment:** the well-capitalised application-support platforms (Rakulia and similar 認定支援機関 SaaS) sit adjacent and could extend into post-award monitoring. They have the customer relationships already. Speed and depth on the obligation rules are the only answer.
4. **Adverse selection:** the companies most eager to buy may be the ones already breaching, where nothing can be salvaged. The product must be honest about when a target is mathematically out of reach and pivot those customers to the exemption-documentation path.
5. **Data sensitivity:** payroll and financial statements are about as sensitive as Japanese SME data gets, and Japanese SMEs are conservative about uploading it. Expect security questions to gate deals.

## 14. Structured verdict

```
Score:                  76/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Japanese-fluent technical founder paired with a 中小企業診断士 as domain advisor or co-founder
Time to revenue:        8–12 weeks
Capital to launch:      ¥1.5–3M (~$10–20K)
Top 3 assumptions to validate first:
  1. Owners can't state their current CAGR position — call 25 firms from a published 採択者一覧
  2. 診断士 practices will resell this as a retainer — get 3 of 15 to a paid pilot
  3. Extraction works on real payroll/決算書 — 30 real files, measure accuracy on the six required fields
Kill criteria:
  - Abandon if fewer than 3 of 15 pitched 診断士 practices sign a paid pilot within 6 weeks
  - Abandon if >60% of the 25 called firms already track their targets accurately
  - Abandon if a rule revision removes the wage-increase clawback from the major subsidy programmes
  - Abandon if an incumbent application platform ships equivalent post-award monitoring before v1
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Pull the most recent 採択者一覧 for 省力化投資補助金 一般型. Build a 25-company call list across two prefectures. Read the current 公募要領 and the 実施・実績報告の手引き end to end, and hand-encode the obligation rules for that specific round — this doubles as the product's first content asset.
- **Day 3–4:** Call all 25. Two questions only: "what is your current 労働生産性 annual growth rate against your committed target?" and "which of your employees are within ¥30 of the prefectural minimum wage?" Record who can answer without checking, who can answer after checking, and who has never thought about it. Simultaneously pitch 15 診断士 practices from the 認定支援機関 registry on a white-labelled retainer product.
- **Day 5:** Decide. **Go** if ≥15 of 25 companies cannot answer either question without significant effort, **and** ≥3 of 15 advisory practices agree to a paid pilot. **No-go** if owners are already on top of the numbers, or if advisors say their clients don't worry about the clawback.

The falsifiable bit is the first question. If Japanese SME owners can already tell me their live CAGR against target, there is no warning to sell and this idea is dead on the spot.
