---
title: "BaseCheck — super recompute for Australian payroll firms"
slug: qualifying-earnings-shortfall
date: 2026-07-31
category: Compliance / Australia-SMB — Bookkeeping & Payroll Bureaus and Award-Heavy Employers (20–200 staff)
complexity: Medium
score: 76
verdict: GO
confidence: Medium
oneLiner: "Recalculates super on every pay code your payroll still treats as OTE, and prices the SGC before the ATO does."
tags:
  vertical: Compliance
  model: SaaS
  geography: Global
  secondary: [Australia, Payroll, Compliance-driven, SMB, AI-agent, Solo-builder]
axes:
  problem: 17
  demand: 12
  build: 11
  distribution: 12
  revenue: 12
  time: 8
  defensibility: 4
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# BaseCheck

## 1. One-liner

Recalculates super on every pay code your payroll still treats as OTE, and prices the SGC before the ATO does.

## 2. Trend signal — why now?

Three things happened at once, and the third one is only 30 days old.

**The earnings base changed underneath every payroll file in Australia.** On 1 July 2026, Payday Super replaced Ordinary Time Earnings with a new statutory definition — Qualifying Earnings (QE) under new s10A of the SGAA. This is not a rename. All commissions are now QE, *including commissions earned entirely outside ordinary hours*, which were previously outside OTE. Amounts salary-sacrificed to super are counted inside QE, closing a loophole where sacrificing reduced the SG base. Contractors "paid wholly or principally for their labour" are pulled in under an expanded employee definition. Every one of those is a per-pay-code flag sitting in a payroll system that was configured for the old base and has not been re-verified.

**The errors stopped being invisible.** This is the part that matters. Under quarterly super, a misconfigured pay code "washed into a quarterly aggregate that nobody reconciled." Under Payday Super, employers report qualifying earnings *and* the super liability through STP on every pay event. The ATO matches that STP data against the funds' MATS reporting and allocates it to the earliest outstanding liability — near-real-time reconciliation of whether super was paid correctly and on time. A quiet annual rounding error just became **26 separate, self-reported shortfall events a year**, filed by the employer's own payroll software.

**The penalty is now formulaic and time-decaying.** SGC applies automatically from day 8 after payday. It is calculated on total salary and wages, so it is always higher than the original SG obligation. The administrative uplift is 60% of the shortfall, with voluntary-disclosure reductions on a hard clock: 40% off within 30 days, 35% at 31–60 days, 30% at 61–120 days, 15% beyond that, plus a further 20% if there were no assessments in the preceding 24 months. Cumulatively, a clean-history employer disclosing within 30 days can wipe the administrative component entirely.

That decay schedule is the whole product. Every week an employer waits, the discount shrinks by a measurable dollar amount. Nobody else in this market sells against a clock that ticks in dollars.

The scale of the disruption is documented. Xero surveyed 500 Australian small businesses with employees: 84% could miss Payday Super deadlines due to delayed customer payments, 87% say more frequent super will pressure cash flow, one in three expect to dip into personal savings, 41% plan to delay paying business expenses. Employment Hero modelled that the average SMB needs $124,000 in additional working capital to service the transition. Meanwhile the ATO's Small Business Superannuation Clearing House shut permanently on 30 June 2026, forcing every SBSCH user onto new rails in the same month they ran double payments — the final April–June quarterly (due 28 July) alongside their first Payday Super runs.

Everyone in the market rushed to solve the *payment plumbing*. Nobody is auditing the *number being paid*.

```
Provenance:
  - Signal 1 (demand): Xero research, n=500 Australian small businesses with employees — 84% could miss Payday Super deadlines, 87% report cash-flow pressure, 1 in 3 expect to use personal savings; Employment Hero modelling puts the average SMB working-capital need at $124,000 — https://www.smartcompany.com.au/business-advice/compliance-crunch-facing-small-businesses-july-payday-super/ — 2026-07
  - Signal 2 (feasibility): The OTE→Qualifying Earnings change is a bounded, enumerable rule set — commissions outside ordinary hours now in, salary sacrifice now in, expanded contractor definition — with documented misconfiguration patterns and worked shortfall examples ($7,200/yr on a $70k+$60k commission rep; $1,800/employee/yr on salary sacrifice) — https://www.scalesuite.com.au/resources/qualifying-earnings-vs-ote and https://www.reckon.com/au/small-business-resources/payday-super/qualifying-earnings-payments/ — 2026-07
  - Signal 3 (economic): SGC administrative uplift set at 60% of shortfall with a time-decaying voluntary-disclosure discount (40% within 30 days, down to 15% beyond 120 days, +20% for clean history); ATO matches STP against fund MATS reporting for near-real-time detection — https://www.claytonutz.com/insights/2026/june/payday-super-frequently-asked-questions — 2026-06
  Category: Regulatory arbitrage
```

## 3. The opportunity

Every vendor in this market is solving the same problem: getting money from the employer to the fund within seven business days. Wrkr, Reckon, Employment Hero's HeroClear, the payroll platforms themselves — they are all clearing houses and payment trackers. Wrkr sells bookkeepers a multi-client dashboard with member-verification and returned-payment handling, from around $5.50/month. That is competent, cheap, and completely orthogonal to what I'm describing.

Because here is the flaw in all of it: **a clearing house will deliver the wrong number, on time, with a perfect audit trail.** If your payroll system has commissions flagged as super-free, Wrkr will faithfully transmit the under-calculated contribution within seven days, mark it green, and hand you a timestamped receipt. You are fully compliant with the payment deadline and carrying a shortfall on every pay run. The dashboard is green and the liability is growing.

The incumbents cannot fix this without becoming a different product. Their integration point is the contribution file — the output of the calculation. By the time data reaches a clearing house, the QE determination has already happened upstream inside the payroll engine. Auditing it requires reading the raw pay codes, award classifications, and payment-type mappings *before* the super figure is computed, then re-deriving it independently. That is a payroll-forensics product wearing a compliance jacket, not a payments product.

The 10× is this: a bookkeeper reviewing one client's pay-code configuration against the QE rules by hand takes two to four hours and requires someone who actually understands s10A. Across a 60-client book that is a project nobody has budgeted for, so it doesn't happen — the firm assumes the payroll vendor handled it. BaseCheck does the same review in about ninety seconds per client, produces a dollar-denominated exposure figure per employee per pay period, and — critically — attaches the voluntary-disclosure discount that is still available today and won't be next month.

Reframing the sale matters as much as the tech. This is not "compliance software," which bookkeepers already buy too much of. It is a **recovery and exposure product**: here is $18,400 of accumulated shortfall across your book, here is the $11,000 of administrative uplift you can still avoid if you disclose in the next eleven days. That sells against a spreadsheet, not against Wrkr.

## 4. Target market

**Primary customer:** Principal or payroll manager at an Australian bookkeeping / payroll bureau — 2 to 15 staff, servicing 20 to 150 SMB payroll clients. These are ICB or ABN-registered BAS agents, mostly running Xero, MYOB, Employment Hero or KeyPay. They carry professional indemnity insurance and they signed engagement letters that say they administer payroll.

**Secondary customer:** Direct employers, 20–200 staff, in award-heavy and commission-heavy sectors — hospitality, retail, construction, real estate agencies, car dealerships, recruitment firms. These are the payrolls where allowances, loadings, commissions and salary sacrifice actually appear in volume, which is precisely where OTE and QE diverge.

**Why they buy:** The bureau's exposure is not theoretical and it is not their own money — it is their client's SGC bill with the bureau's name on the engagement letter. The published guidance is blunt about where liability sits: if someone else handles your payroll, "the ATO will be looking at you, not your bookkeeper" — but the client who gets a five-figure SGC assessment for a pay code the bureau configured will not read it that way, and a PI claim follows. Bookkeepers went from four super lodgements a year per client to twenty-six. A bureau with 10 clients on fortnightly cycles now runs 10 lodgements per fortnight instead of 10 per quarter. They have no spare hours to hand-audit pay codes, and no tool that does it for them.

**Rough TAM reasoning:** Australia has 994,178 employing businesses (2025). Bookkeeping and BAS-agent firms number in the low tens of thousands; the ICB and the registered BAS agent list are both concrete, enumerable populations. I need roughly 300–400 bureau customers at bureau pricing to clear $1M ARR — a low-single-digit share of registered BAS agents. The direct-employer segment is a much larger pool that I would only pursue after the bureau channel is working.

**Why now for them:** Two clocks. The voluntary-disclosure discount decays weekly in dollars. And every pay run after 1 July 2026 that carries a misconfigured pay code adds another self-reported shortfall event to the ATO's matched dataset. Waiting is strictly more expensive than acting, and the amount it costs to wait is computable — which is the rare compliance sale where urgency is arithmetic rather than fear.

## 5. Product sketch (MVP)

- **Connect the payroll file** — read-only OAuth into Xero Payroll, MYOB, or Employment Hero/KeyPay; pull employees, pay items, pay-code configuration, and pay-run history since 1 July 2026.
- **Independent QE recompute** — for every employee and every pay run, re-derive qualifying earnings from the raw payment lines using the s10A rules, ignoring whatever the payroll system's super flag says.
- **Pay-code divergence report** — a ranked list of every payment code where the system's super treatment disagrees with the recompute, with the specific rule cited (e.g. "Commission — Non-Rostered: flagged super-exempt, QE includes all commissions regardless of hours worked").
- **Dollar exposure per employee per pay period** — not "you have a configuration issue," but "Sarah Chen, 14 pay runs, $3,180 shortfall, $1,908 administrative uplift at current disclosure tier."
- **Disclosure countdown** — live calculation of the voluntary-disclosure tier the employer is currently in, the dollar value of the discount, and the date it steps down to the next tier.
- **Salary-sacrifice and contractor sweeps** — dedicated checks for the two highest-value misconfigurations: SG calculated on post-sacrifice earnings, and labour-only contractors excluded from super entirely.
- **Multi-client bureau view** — every client ranked by exposure, so a principal opens one screen and knows which five clients to call this morning.
- **Disclosure-ready export** — a per-employee, per-period shortfall schedule formatted for lodging a voluntary disclosure, plus a client-facing summary letter.

## 6. AI angle — what's load-bearing

Remove the AI and this product does not work, because the hard problem is not arithmetic — it is semantic classification of pay codes that humans named badly.

Australian payroll files contain payment codes like "Allow - Site", "TRAVEL (TAXABLE)", "Comm Q3 O/H", "LSL Cash Out", "Bonus - disc." Nothing in the file tells you whether "Allow - Site" is a task allowance (inside QE) or an expense allowance for meals and travel (outside QE). That determination requires reading the code name, the amount pattern across employees, whether it varies with hours worked, whether it appears alongside overtime lines, and the employee's award classification — then mapping it onto the QE rule set. This is exactly the fuzzy-classification-with-structured-rules job that current models are good at and that regex is hopeless at. Every payroll file uses different names for the same concept, so there is no lookup table to build.

The second load-bearing use is award interpretation. The rules note that an award or agreement may require super on a broader set of payments than QE — on overtime, or on allowances outside the statutory base, or at a higher percentage. Determining whether a given employee's award pushes the obligation above the statutory floor means reading modern award text and applying it to that employee's classification. That is a language task.

The third is explanation. A bureau principal will not lodge a voluntary disclosure on a black-box number. Every flagged code needs a plain-English justification citing the specific rule, good enough for the principal to defend to a client and to the ATO. Generating that per-code reasoning at volume is the AI doing real work.

What is *not* AI: the shortfall arithmetic, the interest accrual, the uplift tiers, and the disclosure countdown. Those are deterministic and must be exact — I'd compute them in code and never let a model near them. The correct architecture is AI for classification and explanation, hard code for money.

## 7. Localization angle

This is an Australia-only product by construction, and that is the point rather than a limitation.

Qualifying Earnings is a definition in one country's statute. The seven-business-day rule, the SGC components, the 60% administrative uplift, the disclosure decay schedule, SuperStream, STP Phase 2, MATS, the stapled-fund regime — none of it exists anywhere else. Modern awards are an Australian construct with no analogue in US or UK payroll. A generic global payroll-audit tool cannot compete here because there is nothing generic to build; the entire value is the depth of the local rule encoding.

Pricing localizes cleanly. Australian bookkeeping runs $50–$120/hour or $300–$1,500/month for a fixed package, and agent rate cards have already risen 8–12% since 2024 partly because of Payday Super. A bureau charging $800/month per client has room to absorb a per-client tool fee or, better, to bill the review as a chargeable engagement.

The natural expansion is not other countries — it is other Australian payroll obligations that just got the same real-time-visibility treatment: award interpretation and wage underpayment (criminalised from 1 January 2025, with penalties up to $8.25M for corporations and 10 years' imprisonment for individuals, where honest mistakes attract civil rather than criminal liability), payroll tax across state thresholds, and leave accrual. Same customer, same file, same connection.

## 8. Business model — path to $1M–$5M ARR

**Pricing — two motions, deliberately:**

*Bureau subscription:* $249/month base for up to 25 client entities, $399/month up to 75, $649/month up to 150. Includes continuous monitoring — every new pay run is re-checked, so a newly added pay code gets caught on the next cycle rather than at the next annual review.

*One-off exposure audit:* $890 per entity for a single point-in-time review with the disclosure-ready export. This is the door-opener and it is priced against the outcome, not the effort — a single caught salary-sacrifice misconfiguration on 12 employees is $1,800/employee/year of shortfall.

The one-off is not a lesser tier; it is the wedge. It converts because the buyer can compute the ROI before paying, and roughly a third should convert to subscription once they see that exposure regenerates every fortnight.

**ACV:** ~$4,200 blended for bureaus (mix of tiers plus some one-off overflow). ~$890–1,500 for direct employers.

**Math to $1M ARR:** 200 bureaus × $399/mo × 12 = $957K, plus one-off audit revenue. Realistically ~240 bureau subscriptions gets there. Against a registered BAS agent population in the tens of thousands, that is low single-digit penetration.

**Math to $5M ARR:** Needs the direct-employer segment. Roughly 400 bureaus (~$2M) plus 2,000 direct employers at ~$1,500/yr (~$3M). That requires the award-interpretation module to be genuinely good, because direct employers in hospitality and retail buy on award complexity rather than on QE alone. I'd treat $5M as the second act, contingent on the first act working.

**Expansion path:** Client-count tiers as bureaus grow their books. Then adjacent obligations on the same payroll connection — award underpayment review, payroll tax nexus, leave-accrual audit. Each is a new module against an existing integration, which is the cheap kind of expansion.

**Cost structure:** Model inference is the main variable cost and it is modest — classification runs against pay-code configurations (tens to low hundreds of distinct codes per client), not against every transaction line. Recompute arithmetic is code. Gross margin should sit comfortably above 85%.

## 9. Go-to-market wedge — first 100 customers

**1. The registered agent lists, with the number in the subject line.** The Tax Practitioners Board maintains a public register of registered BAS and tax agents; the Institute of Certified Bookkeepers has a public member directory. Both are enumerable and filterable by state. But cold email to bookkeepers in July 2026 is a bloodbath — every payroll vendor in Australia is emailing them. The differentiator is arithmetic: run the disclosure-decay math for a hypothetical 40-employee client with one miscoded commission item and lead with "your average client is carrying $X and loses $Y of disclosure discount every 30 days." Target 2,000 firms, expect a low single-digit reply rate, convert a fraction of those to a free single-entity audit. That free audit is the actual sales tool — it returns a real dollar number from the prospect's own data.

**2. Land through the professional bodies, not around them.** ICB and the Australian Bookkeepers Network run webinars, newsletters, and CPD programs, and both have been publishing Payday Super guidance all year. A CPD-accredited session on "auditing your clients' QE configuration" is content those bodies actively want right now, and it puts the product in front of a few hundred qualified buyers per session with the body's implied endorsement. This is slower than cold email but converts far better, and bookkeeper communities are dense enough that credibility compounds.

**3. Ride the disclosure clock with dated campaigns.** The 30/60/120-day tiers create genuine, non-manufactured deadlines tied to each employer's own pay dates. Campaign timing writes itself: firms that ran their first Payday Super pay run in early July hit the 30-day step-down at the start of August, the 60-day at the start of September. Each step-down is a legitimate reason to contact the same list again with a different, larger number. Most compliance software has to invent urgency; here it is in the statute.

**4. Partner with the payroll consultants who are already in the file.** There is a population of independent payroll implementation consultants doing Payday Super readiness projects right now. They are inside client payroll systems, they lack a diagnostic tool, and a QE audit makes their engagement look thorough. Revenue share on referred audits. Ten good consultants can generate more qualified pipeline than a thousand cold emails.

**5. Publish the recompute logic as free tooling.** A public QE classification reference — every common Australian pay-code name mapped to its QE treatment with the rule cited — is the thing bookkeepers will search for and link to. It is also a credible demonstration that the classification engine works. Not "content marketing"; a functional free tool that leaks the product's competence.

## 10. Build complexity — justification

**Medium.** Three payroll integrations (Xero, MYOB, Employment Hero/KeyPay) all have documented APIs, but payroll endpoints are fussier than accounting endpoints and pay-code structures differ meaningfully across the three — that is the bulk of the engineering time. The QE rule encoding is bounded and well-documented but demands genuine precision; the SGC arithmetic, interest accrual and uplift tiers must be exactly right and need a real test suite built from worked examples. AI classification runs on off-the-shelf models with structured outputs and no fine-tuning.

Realistically: 10–14 weeks to a v1 that handles one integration (Xero first — largest SMB payroll share in Australia) with the full recompute and export. The other two integrations follow at roughly 3 weeks each. A technical founder plus a payroll-domain advisor on retainer, or a two-person team where one has genuine Australian payroll depth. The domain requirement is real and I would not attempt this without it — getting QE wrong in either direction destroys the product's only asset, which is being trusted with a number.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Read-only payroll analysis. Not tax agent services — the product produces a schedule, the registered agent lodges. Positioning must stay on the right side of the TPB line. |
| Ethical — no harm / dark patterns | ✅ | Helps employers pay employees super they are legally owed. The disclosure countdown is a real statutory schedule, not manufactured scarcity. |
| Market exists (evidence above) | ✅ | Xero n=500 survey, Employment Hero modelling, funded incumbents in the adjacent payments layer, 994K employing businesses. |
| 1–5 person team can build this | ✅ | 1–2 builders plus domain advisor, 10–14 weeks to v1. |
| Launchable with <$50K / ₹40L | ✅ | Integration dev, model inference, domain advisor retainer. Well under $50K. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 17/20 | Automatic SGC from day 8, calculated on total salary and wages so always exceeds the original obligation, 60% uplift, and a discount that decays weekly. Money is leaving the building on a timer. Not a 19 only because many employers won't discover the shortfall until the ATO tells them — latent pain converts worse than felt pain. |
| Demand evidence | 15 | 12/15 | Strong indirect evidence: Xero n=500, Employment Hero's $124K modelling, a crowded vendor field proving budget exists, mandate live 30 days. Docked because the evidence is for *Payday Super readiness* broadly — I found no direct verbatim practitioner complaints about QE misconfiguration specifically. The inference is sound but it is an inference. |
| Build feasibility | 15 | 11/15 | Bounded rule set, off-the-shelf models, documented APIs. Payroll integrations are genuinely fiddly and the arithmetic must be exact. 10–14 weeks, not 6. |
| Distribution clarity | 15 | 12/15 | Enumerable lists (TPB register, ICB directory), professional bodies actively seeking this content, statutory deadlines that time the campaigns. Docked because bookkeeper inboxes are saturated in exactly this window. |
| Revenue mechanics | 15 | 12/15 | Pricing benchmarked against real bureau rate cards ($300–1,500/mo per client, rates already up 8–12%). $1M needs ~240 bureaus — achievable. $5M needs a second segment and a second module, which is a real assumption rather than a certainty. |
| Time to first revenue | 8 | 8/10 | The one-off audit can be sold and delivered semi-manually before the product is finished. Revenue in 4–8 weeks is realistic; the free-audit-to-paid conversion needs a trial cycle. |
| Defensibility | 10 | 4/10 | The honest weak axis. The rule set is public. Xero or Employment Hero could ship this natively and would win on distribution instantly. What I actually have is a head start, accumulated pay-code classification data across thousands of real payroll files, and the fact that platform vendors are structurally reluctant to ship a feature whose headline output is "your payroll system has been calculating this wrong." That last point is real but it is not a moat — it is a hesitation. |
| **Total** | **100** | **76/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required`

Payroll integrations and classification pipelines need a real engineer. The QE and award rules need someone who genuinely knows Australian payroll — a BAS agent or payroll consultant as co-founder or advisor. Do not attempt this as a generalist reading legislation for the first time.

### Key assumptions to validate (3–5)

1. **Assumption:** A meaningful share of Australian SMB payroll files contain at least one pay code whose super treatment diverges from the QE rules. **How to test:** Get 15–20 bookkeepers to run a free audit on 3 client files each. Measure what fraction of entities surface at least one divergence, and the median dollar exposure. This is the load-bearing assumption — if most files are already clean, there is no product.
2. **Assumption:** Bureaus will pay for exposure detection rather than assume their payroll vendor handled it. **How to test:** Sell 10 one-off audits at $890 before building the subscription tier. Cash collected, not interest expressed.
3. **Assumption:** AI can classify ambiguous Australian pay-code names to QE treatment at accuracy high enough to be trusted. **How to test:** Assemble 500 real pay-code names from anonymised files, have the domain advisor label them, measure precision and recall. Below ~95% precision on "should attract super," the product is a liability generator rather than a liability detector.
4. **Assumption:** The platform vendors won't ship this natively within 12 months. **How to test:** Track Xero/MYOB/Employment Hero release notes and roadmap communications monthly. Cannot be validated up front — only monitored.

### Risk flags

1. **Platform dependency:** The whole product runs through Xero, MYOB and Employment Hero APIs. Any of them can restrict payroll data access, change pay-code structures, or ship a competing native feature. Xero shipping "QE Health Check" as a free feature is the single most likely way this dies.
2. **Liability exposure:** Telling an employer they have no shortfall when they do is a claim waiting to happen. Needs professional indemnity insurance, careful terms positioning output as a diagnostic reviewed by a registered agent, and conservative flagging — surface the ambiguous cases rather than silently resolving them.
3. **Regulatory positioning:** Producing shortfall schedules sits close to tax agent services under the TPB regime. The product must clearly be a tool used *by* a registered agent, not a substitute for one. Worth a proper legal review before launch, not after.
4. **Market timing — narrow window:** The disclosure-decay urgency is strongest in the first 6–12 months after 1 July 2026. Miss that window and the sale reverts to ordinary compliance software competing against everyone. This is a 2026 product; launching it in late 2027 is a materially worse business.
5. **Latent-pain conversion:** Employers who don't yet know they have a problem are harder to sell than employers who feel one. The free audit exists specifically to convert latent pain into felt pain, and if that conversion is weak the whole GTM slows down.

## 14. Structured verdict

```
Score:                  76/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder with a registered BAS agent or Australian payroll
                        consultant as co-founder/advisor. Integration engineering plus
                        credibility with a professional community that buys on trust.
Time to revenue:        4–8 weeks (one-off audits sold semi-manually pre-product)
Capital to launch:      $15–25K AUD (integration dev, inference, advisor retainer, PI insurance)
Top 3 assumptions to validate first:
  1. Real divergence rate — 15-20 bookkeepers audit 3 client files each; measure the
     fraction of entities with ≥1 misconfigured pay code and the median dollar exposure.
  2. Willingness to pay — sell 10 one-off audits at $890 before building the subscription
     product. Collected cash, not expressions of interest.
  3. Classification accuracy — 500 labelled real pay-code names, measure precision on
     "should attract super." Below ~95% and the product creates liability, not clarity.
Kill criteria:
  - Abandon if <30% of audited payroll files surface at least one genuine QE divergence.
  - Abandon if fewer than 3 of 20 bookkeepers offered a free audit accept it — that means
    the pain is not felt and the free-audit wedge doesn't convert latent to felt.
  - Abandon if Xero or Employment Hero ships native QE configuration auditing before v1.
  - Abandon if classification precision stays below 90% after two iterations on real data.
```

## 15. Next step — 1-week validation sprint

**Day 1–2 — Build the rule set and the reference table by hand.** Sit with the domain advisor and encode QE treatment for the 150 most common Australian pay-code patterns. No software. The output is a spreadsheet that is either correct or not, and the advisor's confidence in it is the first real signal. If two competent payroll people disagree on more than ~10% of the rows, the rules are more ambiguous than the guidance suggests and the product's core premise weakens.

**Day 3–4 — Audit real files by hand.** Get 10 bookkeepers to share anonymised pay-code configurations from 3 clients each (30 entities). Manually classify every code against the reference table. Compute the dollar exposure for each entity. This is the falsifiable core: **what fraction of 30 real payroll files contain at least one QE divergence, and what is the median exposure?**

**Day 5 — Take money.** Present each of the 10 bookkeepers with their own findings and offer the paid audit at $890 per entity for their remaining clients. Not a survey question — an invoice.

**Go / no-go:** Proceed only if ≥40% of the 30 entities show at least one genuine divergence with median exposure above $2,000, **and** at least 3 of the 10 bookkeepers pay for at least one additional audit within the week. Two signals: the problem is real in the data, and someone will pay to see it. Either one alone is not enough — a real problem nobody pays to solve is a blog post, and a payment without a real underlying divergence rate is a customer I will churn in ninety days.
