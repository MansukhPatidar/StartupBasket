---
title: "SoSweep — unenrolled-worker sweep for Vietnamese employers"
slug: vietnam-unenrolled-worker-sweep
date: 2026-08-11
category: Compliance / Vietnam — SMEs With High Part-Time and Short-Contract Churn Who Became Liable for Social Insurance on Staff They Never Enrolled
complexity: Low
score: 75
verdict: GO
confidence: Medium
oneLiner: Finds the part-timers a Vietnamese employer forgot to enrol in social insurance, before the inspector bills them for it.
tags:
  vertical: Compliance
  model: SaaS
  geography: SEA
  secondary: [Compliance-driven, SMB, Multilingual, AI-agent, Solo-builder]
axes:
  problem: 16
  demand: 11
  build: 13
  distribution: 11
  revenue: 11
  time: 8
  defensibility: 5
founderFit: [domain-expertise-required, sales-heavy]
featured: false
---

# SoSweep

## 1. One-liner

Finds the part-timers a Vietnamese employer forgot to enrol in social insurance, before the inspector bills them for it.

## 2. Trend signal — why now?

Vietnam quietly moved the goalposts on who counts as an insurable employee, and most SMEs have not re-swept their payroll since.

Under Social Insurance Law No. 58/2024/QH15 and Decree 158/2025/ND-CP, mandatory social insurance stopped being a full-time-staff problem. Coverage now reaches **employees on contracts of one full month to under three months**, and **part-time workers whose monthly salary meets or exceeds the compulsory contribution base**. The Employment Law changes effective 1 January 2026 extended the same expansion into unemployment insurance, with employer, employee and State contribution rates each unchanged at 1%.

That is a definitional change, not a rate change — which is exactly why it slips past people. Nobody's monthly payroll bill jumped. What changed is that a category of worker the business has always treated as casual is now a registration obligation, retroactive to the day they started.

The enforcement side is not theoretical. Vietnam Social Security performs **monthly reviews** to identify employers who have delayed or evaded contributions, and sends written reminders in the first ten days of each month. Late payment accrues at **0.03% per day** on the overdue amount, calculated from the day after the registration or payment deadline. If the employer does not remedy within **60 days** of the deadline, the case is reclassified from *late payment* to *evasion*, which triggers a harsher penalty regime. Administrative fines for compulsory social insurance violations run up to **VND 75 million**. Communes have published lists naming late-paying businesses — Hoai Duc commune disclosed over 80 of them.

And the audit does not stay in its lane. Practitioner guidance flags **retroactive or delayed insurance registration** and **incorrect employee deregistration** as primary audit triggers, and warns that "what initially appears to be a small compliance issue can quickly expand into a broader labor, tax, and insurance review" — pulling in contracts, attendance records, payroll and tax filings. Decision 366/QĐ-BHXH (29 April 2026) refreshed the collection procedure. Enterprises facing an inspection decision "may face difficulties if documentation is incomplete."

So the shape of the pain: a definitional expansion nobody re-audited for, a monthly automated review looking for exactly that, a penalty clock ticking at 0.03%/day, and a 60-day cliff into "evasion". The businesses most exposed are the ones with the most churn — F&B and retail — and Vietnam is projected to have **333,600 F&B outlets in 2026**.

Provenance:
  - Signal 1 (demand/regulatory): Mandatory SI/UI coverage expanded to 1–3 month contracts and qualifying part-time workers under Law 58/2024/QH15, Decree 158/2025/ND-CP and the 2026 Employment Law changes; practitioner guidance explicitly tells businesses to "audit their enrolled workforce against the expanded coverage categories" — https://www.alitium.com/social-insurance-compliance-in-vietnam — August 2026
  - Signal 2 (economic): VSS runs monthly non-compliance reviews; 0.03%/day late interest, reclassification to evasion at 60 days, fines to VND 75 million, and public naming of late payers — https://www.vietnam-briefing.com/news/vietnams-social-insurance-law-late-payments-evasion.html — August 2026
  - Signal 3 (feasibility): Vietnam's SME payroll incumbents (MISA AMIS at ~VND 5.7M/year for 30 users, Tanca, Lac Viet) automate *calculation and declaration* from an assumed-correct roster; none sell an adversarial sweep of who was never put on the roster — https://amis.misa.vn/en/social-insurance/ — August 2026
  Category: Regulatory arbitrage

## 3. The opportunity

Every payroll tool in Vietnam answers the question *"given these employees, what do we owe?"* Nobody answers *"which people we paid are not in this list of employees?"*

That second question is where all the money is. The 0.03%/day and the evasion reclassification do not come from miscalculating a contribution on an enrolled worker — MISA does that fine. They come from workers who were never enrolled at all: the weekend server on a two-month contract, the seasonal warehouse hand, the part-timer who crossed the salary threshold in month four and nobody re-checked. Those people exist in the attendance app, in the cash payment log, in the PIT filing, in a Zalo group — everywhere except the social insurance registration.

The incumbent's data model is the reason it cannot see this. Payroll software starts from the employee master list. If a person is not on it, they are invisible to the software by construction. The tool is structurally incapable of flagging its own blind spot.

A focused product inverts the input: ingest everything that proves a person was paid to work (timesheets, attendance exports, bank transfer batches, PIT withholding data, contract folders), reconcile it against the actual VSS enrollment roster, and produce a ranked list of humans who look insurable and are not registered — with the accrued exposure in VND next to each name, and the days remaining before each one crosses the 60-day evasion line.

That is not a dashboard. That is a bill the owner has not received yet, shown to them early enough to be cheap.

## 4. Target market

- **Primary customer:** The HR/admin lead or owner-operator at a Vietnamese SME with **20–300 staff and heavy part-time or short-contract churn** — F&B chains (3–20 outlets), retail chains, logistics and warehousing, cleaning and F&B service contractors, small manufacturers using seasonal labour. Domestic Vietnamese-owned, plus small FDI subsidiaries who are disproportionately audit-nervous.
- **Why they buy:** Not because they want compliance software. Because they have a specific, dated fear: a VSS reminder letter, an inspection decision, a competitor down the street who just got named publicly, or an accountant who said "you know these part-timers are supposed to be registered now, right?" The buying trigger is the letter or the rumour of the letter.
- **Rough TAM reasoning:** Vietnam is projected at 333,600 F&B outlets in 2026, and retail is a ~USD 171B market. Chains and mid-size employers in the 20–300 headcount band with real churn plausibly number in the tens of thousands across F&B, retail, logistics and light manufacturing. Capturing 1,500 of them at the pricing below is a $1M+ ARR business. This does not need to be the category winner.
- **Why now for them:** The coverage expansion is recent enough that their last real workforce audit predates it, and the monthly VSS review means the discovery is not a question of *if* but *when*. Every month they wait, the 0.03% compounds on a larger base and more individual workers cross the 60-day evasion threshold.

## 5. Product sketch (MVP)

- **Roster sweep** — upload attendance exports, payroll files, bank payment batches and the VSS enrollment list; get back a reconciled list of every human paid in the period and their enrollment status.
- **Exposure meter per worker** — for each unenrolled person who looks insurable: contribution owed, accrued 0.03%/day interest to today, and days remaining before the 60-day evasion reclassification.
- **Insurability call with the reasoning shown** — for each borderline person, states which test they trip (contract length ≥1 month, part-time salary at or above the compulsory base) and which document proves it, so the HR lead can argue back.
- **Messy-input tolerance** — reads Vietnamese-language contracts, scanned PDFs, photographed timesheets and inconsistent Excel exports where the same person is "Nguyễn Văn A", "NV A" and an employee code across three files.
- **Identity resolution** — matches one human across attendance, payroll and enrollment records despite name spelling variance and missing IDs. This is the hard part and the reason it works.
- **Remediation queue** — ranks who to register first by exposure and days-to-cliff, and assembles the document set each registration needs.
- **Inspection folder** — one export bundling the reconciliation, the decisions taken, and the supporting documents, for the day an inspection decision arrives.
- **Monthly re-sweep** — reruns automatically each payroll cycle and alerts only on newly-exposed people, including part-timers who just crossed the salary threshold.

## 6. AI angle — what's load-bearing

Remove the AI and this product does not exist, because the input is not clean data — it is a shoebox.

Three jobs are genuinely model-work. **Document extraction:** pulling contract start date, term length and salary out of Vietnamese-language contracts that arrive as scans and phone photos, in whatever template that particular outlet used. **Identity resolution across dirty records:** deciding that the "Nguyễn Thị Hương" on the attendance sheet, "Huong NT" in the bank transfer batch, and the employee code in payroll are one person — with Vietnamese diacritics inconsistently stripped, and no national ID in half the files. Deterministic matching fails on this; it is the exact task that got cheap in the last 18 months. **Insurability classification:** applying the coverage tests to a fact pattern assembled from partial evidence, and saying which evidence drove the call.

What is deliberately *not* AI: the arithmetic. Contribution amounts and 0.03%/day interest are computed with hard-coded rules against published rates. A model that hallucinates a VND figure the owner then acts on would be worse than useless. The model finds and identifies people; the calculator prices them.

## 7. Localization angle

This is a Vietnam-only product and that is the entire point, not a limitation.

The rules are Vietnamese statute (Law 58/2024/QH15, Decree 158/2025, Decree 374/2025, Decision 366/QĐ-BHXH), the contribution bases move with the statutory base salary — raised to VND 2,530,000/month from 1 July 2026 — and the enforcement counterparty is VSS. Vietnamese-language document handling is not a translation layer, it is the core competence; so is the diacritic-and-name-order identity problem, which does not exist in the same form in English-language markets.

Pricing must be Vietnamese too. A $99/mo tool does not sell to a four-outlet Ho Chi Minh City F&B operator; a VND 1.5–3M/month tool does. Distribution is local as well: Zalo, not email, is where the HR lead actually reads things, and the accounting/labour-consultancy firms who service these SMEs are the real channel.

A generic global compliance platform cannot follow into this without rebuilding the whole product. Good.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** Tiered by headcount swept. VND 1,500,000/mo (~$57) up to 50 staff; VND 3,000,000/mo (~$114) to 150; VND 6,000,000/mo (~$228) to 400. Plus a one-off **first sweep** at VND 5–15M (~$190–570) priced against the exposure found — this is the wedge purchase and often precedes the subscription.
- **ACV:** ~$1,400/year blended, assuming the mid tier dominates and roughly a third also buy an annual deep sweep.
- **Rough math to $1M ARR:** ~700 customers at ~$1,400 ACV. Against tens of thousands of eligible chains and mid-size employers, that is low-single-digit penetration of the churn-heavy segment.
- **Rough math to $5M ARR:** ~2,500 customers plus ACV expansion into the accounting-firm channel — a 40-client consultancy on a multi-entity seat is a $6–10K/year account, and a few hundred of those changes the shape of the business entirely. Requires the firm channel to work, which is the main uncertainty.
- **Expansion path:** headcount tiers grow with the customer; multi-entity/outlet rollups; the annual inspection-readiness bundle; adjacent reconciliations (PIT withholding vs payroll, labour contract completeness) sold into the same buyer once the identity graph exists.

Gross margin is normal SaaS — inference on a monthly sweep of a few hundred workers is cents, not dollars. Cost to serve is dominated by onboarding hand-holding on the first messy upload.

## 9. Go-to-market wedge — first 100 customers

- **Sell against the public shame lists.** Communes publish the names of businesses late on social insurance contributions — Hoai Duc published over 80. These lists are a pre-qualified, publicly-sourced list of employers with a live, dated, admitted problem. Contact them in the week the list appears with a specific offer: a fixed-fee first sweep. Conversion should beat cold outreach by an order of magnitude because the trigger event already happened to them.
- **Accounting and labour-consultancy firms as the wholesale channel.** Vietnamese SMEs in this band outsource payroll and insurance filing. These firms carry the client's risk and are currently doing this reconciliation in Excel or not at all. Sign 15–25 firms with a revenue share and per-client seats; each brings 10–40 clients. This is the path to the majority of the first 100 and the reason `sales-heavy` is on the founder-fit tag.
- **Run the free "exposure estimator" on Zalo and Vietnamese HR Facebook groups.** Upload one attendance file, get back a count of likely-unenrolled workers and a VND exposure range, no signup. The number is the ad. Vietnamese HR/payroll practitioner groups are large, active, and share tools laterally.
- **Time the outreach to the enforcement calendar.** VSS sends reminders in the first ten days of each month. That is a recurring, predictable window when a specific subset of employers is acutely receptive. Run the campaign on that cadence rather than continuously.
- **Land through FDI service providers.** Small foreign-owned subsidiaries are the most audit-averse and least confident in their local compliance. The advisory firms serving them (Acclime, Alitium and peers) already publish warnings about exactly this exposure; a referral relationship converts their content into a product.

## 10. Build complexity — justification

**Low**, bordering Medium. Off-the-shelf multimodal extraction for the Vietnamese contracts and scanned timesheets, a standard web stack, file-upload ingestion rather than deep integrations for v1, and a rules engine for contribution and interest arithmetic that is a few hundred lines of published-rate logic. No enterprise integration is required to deliver value on day one — the customer already exports these files for their accountant.

The genuinely hard part is identity resolution across dirty Vietnamese-language records, which is a tuning-and-evaluation problem rather than a research problem. A pair ships a credible v1 in **8–12 weeks**; a solo builder with the domain knowledge in about 14.

The real constraint is not engineering — it is having someone who can defend an insurability call to a sceptical Vietnamese HR manager. That is a hiring/advisory problem, not a build one.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Helping employers comply with their own statutory obligations. No licence required to provide reconciliation software; stops short of representing the client before VSS. |
| Ethical — no harm / dark patterns | ✅ | Outcome is workers getting the insurance coverage they are legally owed. Rare case where the compliance sale and the worker's interest point the same direction. Must not be positioned as an exposure-minimisation tool. |
| Market exists (evidence above) | ✅ | Statutory expansion, active monthly enforcement, published late-payer lists, incumbents charging for adjacent payroll software. |
| 1–5 person team can build this | ✅ | Two people, 8–12 weeks, plus a Vietnamese labour-compliance advisor. |
| Launchable with <$50K / ₹40L | ✅ | Well under. Dominant costs are the advisor and founder time. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | Real money, dated deadlines, a 60-day cliff and public naming. Held below 17 because it is latent until a letter arrives — many employers do not feel it until the trigger, which is a marketing problem as much as a product one. |
| Demand evidence | 15 | 11/15 | Statute, enforcement mechanics and penalty rates are documented and specific; practitioner guidance explicitly recommends this audit. Held below 13 because I found no direct verbatim customer complaints — this is inferred from regulatory and advisory sources, not from employers saying it in public. |
| Build feasibility | 15 | 13/15 | Off-the-shelf extraction, no mandatory integrations, arithmetic is deterministic. Identity resolution needs real tuning. |
| Distribution clarity | 15 | 11/15 | Public late-payer lists and the monthly reminder cycle are unusually concrete triggers. The consultancy channel is the scale path but is unproven and relationship-slow. |
| Revenue mechanics | 15 | 11/15 | Pricing benchmarks against MISA's ~VND 5.7M/year and against the exposure avoided, which is far larger. 700 customers to $1M is achievable. Vietnamese SME price ceilings are real and churn after remediation is the open question. |
| Time to first revenue | 10 | 8/10 | The paid first sweep can be sold before the subscription product is finished — a manual sweep is deliverable in week one. Revenue in 4–8 weeks is realistic. |
| Defensibility | 10 | 5/10 | Rules are public; the product is copyable. Moat is the accumulating identity graph, the consultancy relationships, and rule-tracking discipline as decrees keep moving. Execution-only for the first year. |
| **Total** | **100** | **75/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`domain-expertise-required` · `sales-heavy`

You need a Vietnamese labour-compliance advisor on the team or on retainer from day one — not for credibility theatre, but because every insurability call has to survive an argument with an HR manager who has done this for fifteen years. And the consultancy channel is a relationship sale, not a signup funnel. A purely technical foreign founder will build the right thing and fail to sell it.

### Key assumptions to validate (3–5)

1. **Assumption:** A meaningful share of churn-heavy Vietnamese SMEs actually have unenrolled workers who meet the expanded coverage tests — i.e. the sweep finds something. **How to test:** run manual sweeps on 10 real payroll/attendance datasets from friendly F&B and retail operators. If the median find is near zero, there is no product.
2. **Assumption:** Owners will pay to find bad news before the inspector does, rather than staying deliberately blind. **How to test:** offer 30 employers a fixed-fee first sweep with the exposure number quoted up front. Measure how many take it versus how many go quiet — the go-quiet rate is the real signal here.
3. **Assumption:** Accounting and labour consultancies will resell rather than treat this as an accusation that they missed it. **How to test:** pitch 15 firms directly. Watch specifically for defensiveness — if the framing "you missed this for your clients" kills the conversation, the channel needs repositioning as a retention tool they offer proactively.
4. **Assumption:** Identity resolution across Vietnamese records is accurate enough to trust. **How to test:** build a labelled set from 5 real customers, measure precision on unenrolled-worker flags. False positives that waste an HR lead's afternoon will kill retention faster than false negatives.

### Risk flags

1. **Regulatory churn:** Vietnam is amending this area continuously — Law 58/2024, Decrees 158/2025, 337/2025, 374/2025, Decision 366/QĐ-BHXH in April 2026. The rules engine needs maintenance forever. That is simultaneously the moat and the tax.
2. **Incumbent adjacency:** MISA already sells social insurance software into this exact buyer and has the payroll data sitting in its own database. If MISA decides to ship a reconciliation sweep, it starts from a better position. The bet is that its data model and enterprise incentives make it slow, not that it is incapable.
3. **The willful-blindness problem:** some owners do not want this number found, because knowing converts a deniable oversight into a documented one. This is the single biggest commercial risk and it is not solvable by product quality — it is solved by selling to people who already got the letter.
4. **Post-remediation churn:** once a customer is clean, the monthly sweep is insurance rather than rescue, and perceived value drops. The monthly re-sweep on new hires and threshold-crossers has to be genuinely good or the subscription lapses after the cleanup.

## 14. Structured verdict

```
Score:                  75/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Vietnam-based operator or returnee with a labour-compliance
                        advisor and a consultancy network; technical co-founder for
                        the extraction and matching work
Time to revenue:        4–8 weeks (paid manual sweeps before the product ships)
Capital to launch:      $8–15K (advisor retainer, inference, two months of runway)
Top 3 assumptions to validate first:
  1. Manual sweeps on 10 real datasets find material unenrolled exposure
  2. 30 fixed-fee sweep offers convert — and the go-quiet rate is not the majority
  3. 15 consultancy pitches produce 3+ willing resellers without defensiveness
Kill criteria:
  - Abandon if the median unenrolled exposure across 10 real datasets is under
    VND 20M — the number has to be scary enough to pay to avoid
  - Abandon if fewer than 3 of 30 fixed-fee sweep offers convert
  - Abandon if MISA or Tanca ships an equivalent reconciliation sweep before v1
  - Abandon if identity-resolution precision stays below 85% on labelled real data
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Recruit 10 F&B, retail and logistics operators in the 20–300 headcount band via a Vietnamese HR Facebook group and two accounting-firm contacts. Ask for one month of attendance data, payroll, and their VSS enrollment list — under NDA, framed as a free exposure check.
- **Day 3–4:** Reconcile all 10 by hand against the coverage tests. Compute unenrolled headcount, contribution owed, accrued 0.03%/day interest, and days-to-evasion-cliff per worker. No software — spreadsheets and a labour advisor.
- **Day 5:** Present each operator their own number and ask for VND 5,000,000 to do it properly and monthly. Separately, pitch 5 consultancy firms with the anonymised aggregate.
- **Decide go / no-go on:** median exposure ≥ VND 20M across the 10, **and** ≥3 of 10 operators paying on the spot, **and** ≥1 of 5 consultancies asking for commercial terms. Anything less and this is a real regulation with no willing buyer — which is a PASS, not a pivot.
