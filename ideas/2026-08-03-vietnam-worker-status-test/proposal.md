---
title: "StatusProof — reclassification screen for Vietnam SMEs"
slug: vietnam-worker-status-test
date: 2026-08-03
category: HRTech / Vietnam-SME
complexity: Medium
score: 73
verdict: GO
confidence: Medium
oneLiner: "Scores every collaborator contract against the test an inspector will actually apply, before the back-contribution bill lands."
tags:
  vertical: Compliance
  model: SaaS
  geography: SEA
  secondary: [Multilingual, AI-agent, SMB, Compliance-driven, Vietnamese-first]
axes:
  problem: 16
  demand: 11
  build: 11
  distribution: 11
  revenue: 11
  time: 8
  defensibility: 5
founderFit: [domain-expertise-required, sales-heavy]
featured: false
---

# StatusProof

## 1. One-liner

Scores every collaborator contract against the test an inspector will actually apply, before the back-contribution bill lands.

## 2. Trend signal — why now?

Three things moved in the last 14 months, and they compound.

**The law changed underneath a standard local practice.** Social Insurance Law No. 41/2024/QH15 and Decree 158/2025/NĐ-CP took effect 1 July 2025. Compulsory social insurance now reaches part-time and seasonal workers on the payroll — anyone on a labour contract of one month or longer, and part-timers whose computed monthly salary clears the VND 2,530,000 floor. Vietnamese SMEs have spent a decade papering casual staff as *hợp đồng cộng tác viên* (collaborator agreements) under the Civil Code. That paperwork no longer does what they think it does.

**Enforcement got teeth and a published target list.** Advisors are now naming the specific audit triggers: retroactive or delayed registration, incorrect deregistration, sudden drops in the insurance salary base, maternity claims after short contribution periods, and — the big one — inconsistencies between payroll records and insurance declarations. Penalties run 12–15% of the unpaid compulsory contribution plus 0.03%/day interest, with administrative fines to VND 150 million for organisations and, at the severe end, suspension of invoicing rights and criminal exposure under the Penal Code.

**The determination is a judgement call, not a lookup.** Labour Code 2019 Article 13 says an agreement is a labour contract if its *contents* show remunerated work, management and supervision by one party, and regular wage payment — "regardless of its name." Inspectors reclassify on substance, retroactive to the start of the arrangement, at ~21.5% of gross remuneration for the whole period. One documented case: a German fintech with five reclassified contractors over 11 months ate retroactive SHUI and penalties exceeding EUR 60,000.

The kicker is that the rules are applied inconsistently. Practitioners openly note that handling "may vary depending on the authority, locality, or reviewing officer" — so a treatment accepted for three years can be challenged at the next inspection. That is exactly the shape of problem software should eat: a repeated judgement call, made under ambiguity, with an asymmetric downside.

Provenance:
  - Signal 1 (demand): Decree 158/2025 extends compulsory SI to part-time/seasonal workers; misclassified collaborator agreements trigger retroactive SHUI at ~21.5% of gross plus fines; documented EUR 60,000 case — https://sunbytes.io/blog/human-resource/contractor-management-in-vietnam/ and https://www.manpower.com.vn/en/insights/blogs/2026/01/thay-doi-trong-luat-bhxh — observed 2026-08-03
  - Signal 2 (feasibility): Article 13 substance test is a written three-element rule (paid work / management + supervision / regular payment) applied to contract text and working patterns — tractable for an LLM against Vietnamese-language documents — https://natlex.ilo.org/dyn/natlex2/natlex2/files/download/110469/VNM110469%20Eng.pdf — observed 2026-08-03
  - Signal 3 (economic): 859,048 operating enterprises in Vietnam (97% SME) plus 5.3M non-agricultural household businesses; MISA AMIS payroll alone starts at VND 5.1M/year for 30 employees, so SMEs already pay for compliance software — https://vietnamnews.vn/economy/1785346/firms-remain-key-driver-of-viet-nam-s-economic-growth-2026-economic-census.html and https://www.hr.software/reviews/misa-amis — observed 2026-08-03
  Category: Regulatory arbitrage

## 3. The opportunity

Every payroll product in Vietnam — MISA AMIS, Base.vn DigiiC&B, the HR2B and Talentnet service layer — answers the question *"how much do I contribute for this employee?"* Not one of them answers *"is this person an employee?"*

That is the whole game. The contribution math is arithmetic; MISA does it fine. The classification is a legal judgement applied to messy facts: what the contract says, how the person is actually managed, whether they're paid monthly or per deliverable, whose laptop they use, how many clients they have. Payroll software never sees those facts, because the misclassified worker isn't *in* the payroll system — that's the entire point of calling them a collaborator.

So the exposure sits in a blind spot by construction. The company's payroll is clean. The insurance declarations are consistent with the payroll. And there are eleven people being paid monthly out of a different cost line who would each be reclassified on inspection.

The incumbent weakness is structural, not a UX gap. MISA can't fix this by shipping a feature, because their data model starts after the classification decision has already been made. A focused tool starts *before* it — ingest the collaborator contracts and the payment history, apply Article 13, and rank the roster by reclassification risk with the retroactive bill attached to each name.

The alternative today is a law firm. That's a per-engagement fee, it happens once, and it goes stale the moment you sign the next collaborator.

## 4. Target market

- **Primary customer:** HR/admin lead or finance manager at a Vietnamese SME with 20–200 people, in Hanoi, HCMC, Da Nang or Binh Duong — F&B chains, logistics, retail, agencies, garment and light manufacturing, and the fast-growing outsourced-services sector. The tell: a payroll of 30 declared staff and another 15–40 people paid as collaborators, delivery riders, seasonal packers, part-time sales, or freelance creatives.
- **Also strong:** foreign-invested SMEs and the Vietnam entities of overseas companies. They have the least local intuition, the most documented process discipline, the strongest ESG/parent-company reporting pressure, and the highest willingness to pay for a defensible answer. The EUR 60,000 case was a foreign firm — that's not a coincidence.
- **Why they buy, in their words:** the recurring complaint from advisors is not the cost of contributing, it's that "practical handling may vary depending on the authority, locality, or reviewing officer" — you can be compliant for three years and be told otherwise in year four. They are buying a defensible file, not an opinion.
- **Rough TAM reasoning:** 859,048 operating enterprises, 97% SME. Filter to firms with 20+ staff and meaningful non-payroll labour and you land in the low hundreds of thousands. I only need 700 of them at the mid tier to clear $1M ARR. The 5.3M household businesses are a real but later market — they get pulled into compulsory SI for owners from 2029 and are too small for this price point today.
- **Why now for them:** the July 2025 law reset the boundary, 2026 is the first full inspection cycle under it, and the liability is retroactive to the start of each arrangement. Every month of delay makes the exposure larger, which is the rare compliance product where procrastination visibly costs money.

## 5. Product sketch (MVP)

- **Roster import** — upload collaborator contracts, service agreements and the payment ledger (Excel, scans, or export from MISA/Base). Vietnamese and English, including photographed paper contracts.
- **Article 13 scorecard per person** — each worker scored on the three statutory elements plus the practical inspection factors: fixed hours, supervision pattern, whose tools, monthly-vs-milestone payment, exclusivity, engagement duration. Red / amber / green.
- **The retroactive bill** — for every red worker, the number that actually matters: months of exposure × gross × 21.5%, plus 0.03%/day interest and the 12–15% penalty band. This is the screen that gets forwarded to the CEO.
- **Contract language flags** — highlights the specific clauses that read as employment (probation terms, leave entitlements, reporting lines, "monthly salary" wording in a service contract) with suggested redrafts.
- **Fix-it path per worker** — for each red name: convert to labour contract, restructure the engagement to genuinely non-employment, or terminate — with the cost of each option priced side by side.
- **Threshold monitor** — part-timers tracked against the VND 2,530,000 computed-salary floor as their hours change month to month, since the floor is what flips them into compulsory coverage.
- **Inspection file** — a dated, exportable dossier showing the assessment, the reasoning and the actions taken. Against a reviewing officer with discretion, showing your work is the defence.

## 6. AI angle — what's load-bearing

Remove the AI and this is a questionnaire, which nobody fills in for forty workers.

The load-bearing work is reading heterogeneous Vietnamese-language contracts — scanned, photographed, inconsistently titled, drafted by whoever was around — and extracting the *substance* signals Article 13 turns on. That's not field extraction from a fixed schema. It's reading a document titled "Collaborator Agreement" and noticing it grants annual leave, specifies 8am–5pm, names a supervisor, and pays a fixed monthly sum — four facts scattered across four clauses that jointly mean "this is a labour contract."

Second load-bearing piece: reconciling contract text against actual behaviour in the payment ledger. A contract can be drafted perfectly and still be reclassified because the person has been paid the identical amount on the 5th of every month for two years. Cross-referencing stated terms against observed payment regularity is where the real risk surfaces, and it's pattern work across two unstructured sources.

This is squarely inside what current models do well on Vietnamese text, and it's a judgement-shaped task with a written legal standard to anchor against — which is the good case for LLMs, not the hallucination-prone one.

## 7. Localization angle

This is a localization play end to end — it does not exist as a global product with a Vietnam flag on it.

- **Language:** the source documents are Vietnamese, the legal standard is Vietnamese, and the output has to be readable by an HR lead who works in Vietnamese. Model quality on Vietnamese legal text is the product.
- **Legal specificity:** Article 13's three-element test, Decree 158's coverage boundaries, the VND 2,530,000 part-time floor, the 20× reference-salary ceiling, the 21.5% retroactive rate. None of it ports.
- **Pricing:** VND 1.5–4M/month lands where a Vietnamese SME actually buys. MISA anchors this — VND 5.1M/year for standalone payroll — so a compliance tool at VND 18–48M/year is a step up but defensible against a single EUR 60,000 event.
- **Payment rails:** domestic bank transfer and VietQR. Card-on-file SaaS billing is not how Vietnamese SMEs pay; annual invoice with red VAT invoice is.
- **Distribution:** Zalo, not WhatsApp or email. Vietnamese SME B2B runs on Zalo groups and personal relationships with accounting-service firms.

The flip side: a foreign founder cannot do this alone. This needs a Vietnamese co-founder or a labour-law partner who can stand behind the output. That's a real constraint, and it's priced into the score.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** three tiers by headcount assessed.
  - Starter — VND 1.5M/mo (~$57) — up to 25 workers assessed
  - Growth — VND 3.5M/mo (~$133) — up to 100 workers, monthly re-scoring, inspection file
  - Pro — VND 8M/mo (~$305) — 250+ workers, multi-entity, advisor seat
- **ACV:** ~VND 42M (~$1,600) blended, assuming the mix skews to Growth. Annual prepay at 2 months free — the norm for Vietnamese SME software and good for cash.
- **Path to $100K ARR:** 65 customers. Achievable from the accounting-firm channel alone.
- **Path to $1M ARR:** ~700 customers at $1,600 ACV. Against low-hundreds-of-thousands of qualifying firms, that's well under 1% penetration. This is the realistic 18–24 month target.
- **Path to $5M ARR:** needs two additions, not just more logos. First, the accounting/labour-advisory firms become the customer — a multi-client console at VND 25–60M/mo, where one firm covers 40 SMEs. Second, expansion into the adjacent PIT and payroll-base exposure (the allowance-structuring practice advisors admit "may attract closer attention during inspections"). Same documents, same buyer, second risk surface.
- **Expansion path:** headcount tiers → per-entity for groups → the advisor console → annual "inspection readiness" review as a paid add-on. Gross margin is high; the only real variable cost is document processing, and that's cents per contract.

## 9. Go-to-market wedge — first 100 customers

This market does not buy from a website. It buys from someone it knows, or from its accountant.

- **Accounting and labour-service firms first — this is the whole wedge.** Vietnamese SMEs outsource payroll and SI filing to hundreds of small *dịch vụ kế toán* firms. These firms already have the client's contracts and payment ledgers, and they carry the blame when an inspection goes badly. Sign 15 of them as channel partners with revenue share and a multi-client view. Each brings 5–20 clients. That alone is the first 100. Start with the firms clustered around HCMC District 1/3 and Hanoi's Cau Giay — they're findable, and they refer to each other.
- **The free exposure scan as the opener.** Upload your collaborator contracts, get a free ranked list of who'd be reclassified and what the retroactive bill would be. That output is a number with a currency symbol on it, addressed to a CEO. Run it as the entire top of funnel — it demos the product and quantifies the pain in one step. Convert to paid for monitoring, the fix-it path and the inspection file.
- **FDI associations and chambers.** EuroCham, AmCham, KoCham, JCCI and the Korean and Japanese SME networks in Binh Duong and Dong Nai run compliance briefings constantly and their members have the highest willingness to pay. Co-present one session on the Decree 158 reclassification risk with a labour lawyer; the free scan is the call to action. These rooms hold 40–120 exactly-right buyers.
- **Zalo OA plus the advisory content that already ranks.** Vietnamese HR managers search *"cộng tác viên có phải đóng BHXH không"* and land on law-firm blog posts that end in a consultation pitch. Publish the better version — with the calculator — and capture the same intent with a product instead of a retainer.
- **Direct outreach to the visibly exposed.** Companies hiring collaborators publicly on TopCV, VietnamWorks and Facebook job groups are self-identifying. Scrape the *cộng tác viên* and *part-time* listings, and the pitch writes itself: you are advertising for the exact worker category that got reclassified in July 2025.

## 10. Build complexity — justification

**Medium.** The stack is off-the-shelf: document ingestion, Vietnamese OCR for scanned and photographed contracts, an LLM applying a written legal rubric, and a straightforward calculation and reporting layer. No custom models, no novel infra, no integrations required for v1 — file upload is genuinely sufficient because these documents live in email and Zalo, not in a system.

What makes it Medium rather than Low is threefold: Vietnamese-language accuracy on low-quality scans needs real evaluation work; the legal rubric must be built and maintained with a qualified labour-law advisor rather than inferred by the model; and the output has to be defensible enough to hand an inspector, which raises the bar on consistency and citation. Budget 10–14 weeks to v1 for a pair, plus a retained labour lawyer.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Compliance-assistive. Must be positioned as risk assessment, not legal advice — partner with a licensed firm for the advisory layer. |
| Ethical — no harm / dark patterns | ✅ | Pushes employers toward correctly insuring workers. The product's own logic favours the worker getting coverage. |
| Market exists (evidence above) | ✅ | Live regulation, documented penalties, documented EUR 60k case, 859k operating enterprises, existing paid payroll software. |
| 1–5 person team can build this | ✅ | Two builders plus a labour-law advisor. |
| Launchable with <$50K / ₹40L | ✅ | Realistically $12–20K: build, legal retainer, first channel partners. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | Retroactive, uncapped-in-practice, with criminal tail risk and invoicing suspension at the severe end. Not a daily pain though — it's felt at inspection, and plenty of SMEs will gamble on not being inspected. That gap between real risk and *felt* urgency is the honest deduction. |
| Demand evidence | 15 | 11/15 | Strong regulatory and advisory signal, real penalty figures, a documented loss case, and incumbents charging for adjacent software. Deducted because I found advisors describing the problem, not Vietnamese SME owners complaining in their own words — the direct customer voice is thinner than I'd like. |
| Build feasibility | 15 | 11/15 | Off-the-shelf stack, but Vietnamese OCR on photographed contracts and defensible legal-rubric output are genuine engineering and domain work. 10–14 weeks. |
| Distribution clarity | 15 | 11/15 | The accounting-firm channel is specific, named and geographically clustered, and the free scan is a strong opener. Deducted because channel-partner recruitment in Vietnam is relationship-paced — it works, but not on a two-week sprint. |
| Revenue mechanics | 15 | 11/15 | Pricing benchmarked against MISA, ACV realistic, 700 customers to $1M is credible. The $5M path leans on the advisor console, which is a second product motion and not yet proven. |
| Time to first revenue | 8 | 8/10 | The free scan produces a quantified bill, which converts fast. Realistically 6–8 weeks post-launch given Vietnamese SME purchasing rhythm and annual-invoice norms. |
| Defensibility | 10 | 5/10 | Execution and relationships, not moat. The rubric is public law and copyable; MISA could bolt this on if it mattered enough. Real defence is the accountant channel and accumulated assessment data — which compounds, but slowly. |
| **Total** | **100** | **73/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`domain-expertise-required` · `sales-heavy`

This is not a build-it-and-they-come product. It needs a Vietnamese founder or co-founder with labour-compliance credibility and the ability to work the accounting-firm and chamber networks in person. A technical founder alone will build a good tool nobody trusts enough to act on.

### Key assumptions to validate (3–5)

1. **Assumption:** Vietnamese SMEs with 20–200 staff genuinely carry material collaborator-agreement exposure — not just a token two or three people. **How to test:** run the free scan for 20 firms sourced via three accounting partners; measure the median count of red-flagged workers and the median retroactive exposure. Under 5 red workers per firm and the price point collapses.
2. **Assumption:** the buyer acts on a quantified exposure number rather than filing it and hoping. **How to test:** of those 20 scans, track how many take any remedial action within 30 days. This is the assumption I'm least sure of and it's the one that decides the business.
3. **Assumption:** accounting-service firms will channel-partner rather than treat this as a threat to their advisory billings. **How to test:** pitch 15 firms; measure signed partnerships. Below 4 and the primary channel is wrong.
4. **Assumption:** the LLM classification is accurate and consistent enough on real Vietnamese contracts to be handed to an inspector. **How to test:** blind-score 100 real contracts against a labour lawyer's independent assessment; require ≥90% agreement on red/green.

### Risk flags

1. **Regulatory risk (two-sided):** guidance could tighten *or* loosen. A clarifying circular that makes classification mechanical would gut the judgement-value of the product — though it would also make the software trivially more accurate, so this cuts both ways.
2. **Liability exposure:** if the tool clears a worker who is later reclassified, the customer will look for someone to blame. Requires careful positioning as assessment-not-advice, a licensed-firm partnership for anything advisory, and insurance. Do not skip this.
3. **Incumbent bolt-on:** MISA has the SME distribution and the payroll relationship. If they decide this matters, they ship a version. The counter is that their data model genuinely starts after the classification decision — but that's an 18-month lead, not a permanent moat.
4. **Willingness-to-gamble:** the deepest risk. Vietnamese SME culture around SI compliance has long tolerated calculated non-compliance, because enforcement was patchy. If inspection probability stays low enough, rational owners keep gambling regardless of how good the assessment is. Enforcement intensity in 2026 is the single external variable that decides this.

## 14. Structured verdict

```
Score:                  73/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Vietnamese founder with HR/payroll or labour-compliance
                        background, paired with a technical co-founder. Must be
                        able to work accounting-firm and chamber networks in person.
Time to revenue:        6–8 weeks post-launch; ~5 months from a standing start
Capital to launch:      $12–20K (₹10–17L) — build, labour-law retainer, channel seeding
Top 3 assumptions to validate first:
  1. Median red-flagged worker count per SME ≥5 — free scan across 20 firms
  2. Buyers act on the exposure number — 30-day remediation rate from those scans
  3. Accounting firms partner rather than compete — 15 pitches, need 4+ signed
Kill criteria:
  - Abandon if median retroactive exposure per firm is under VND 200M — the
    number isn't scary enough to force a purchase
  - Abandon if fewer than 4 of 15 accounting firms sign as partners — no
    alternative channel reaches this buyer at acceptable cost
  - Abandon if blind classification agreement with a labour lawyer is under 90%
    on 100 real contracts — an unreliable verdict is worse than none here
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Recruit a labour lawyer for a paid half-day. Build the Article 13 scoring rubric with them and have them independently assess 30 real collaborator contracts sourced from two friendly SMEs. This is the ground truth for everything else.
- **Day 3:** Run the same 30 contracts through a bare LLM pipeline against the rubric. Measure red/green agreement with the lawyer. No product, no UI — just the accuracy question, because if this fails nothing else matters.
- **Day 4:** Call 15 accounting-service firms in HCMC and Hanoi. Not a pitch — one question: "of your SME clients, how many have collaborator agreements that would fail an Article 13 review, and what happens to you when one gets reclassified?" Record the numbers.
- **Day 5:** Produce the exposure calculation for the 30 assessed contracts and put the number in front of the two SME owners who supplied them. Ask directly: what would you do about this, and would you pay VND 3.5M/month to see it every month?

**Go / no-go:** proceed only if (a) LLM–lawyer agreement ≥90% on the 30 contracts, (b) at least 4 of 15 accounting firms report reclassification as a live problem they've personally handled, and (c) at least one of the two SME owners commits to a paid pilot on the spot. Anything less and the pain is advisor-narrated rather than customer-felt — which is precisely the failure mode this idea's weakest axis is warning about.
