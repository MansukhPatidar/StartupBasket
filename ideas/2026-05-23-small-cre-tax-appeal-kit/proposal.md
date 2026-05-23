---
title: "CapRebut — CRE property-tax appeal kit for small owners"
slug: small-cre-tax-appeal-kit
date: 2026-05-23
category: PropTech / US Small Commercial Real Estate
complexity: Medium
score: 75
verdict: GO
confidence: Medium
oneLiner: Turns a strip mall owner's rent roll into a filed, jurisdiction-correct property-tax appeal packet — flat fee, no contingency.
tags:
  vertical: PropTech
  model: SaaS
  geography: US
  secondary: [SMB, Solo-builder, AI-agent, Compliance-driven, Workflow-automation]
axes:
  problem: 16
  demand: 12
  build: 11
  distribution: 11
  revenue: 12
  time: 7
  defensibility: 6
founderFit: [domain-expertise-required, technical-heavy]
featured: false
---

# CapRebut

## 1. One-liner

Turns a strip mall owner's rent roll into a filed, jurisdiction-correct property-tax appeal packet — flat fee, no contingency.

## 2. Trend signal — why now?

Small commercial owners are stuck between two bad options on property-tax appeals: pay 25–50% of savings to firms like O'Connor and Ownwell, or DIY with residential-grade tools that don't handle the income-capitalization approach assessors actually use for commercial.

Hard signals:

- **Ownwell raised $50M Series B in Feb 2026** to scale property-tax appeals nationally — but only operates in 7 states (CA, FL, GA, IL, NY, TX, WA) and still on a 25–35% contingency. Big chunks of the country (NJ, MA, OH, MN, CT, AZ) and a meaningful share of owners who hate contingency get nothing.
- **O'Connor's contingency is 50% in Texas** and they "saved clients over $213M in 2025" — that's $100M+ in fees small owners watched walk out the door.
- **2026 deadlines are hard and clustered**: Connecticut Feb 20, Nassau County extended Mar 31, NYC Mar 1, NJ Apr 1 (May 1 for revalued districts), Suffolk May 19, Westchester June 16. Miss them and you wait a year.
- **Commercial = income-capitalization approach** by statute in most states. Residential DIY tools (AppealDesk, sales-comp only) can't generate the NOI / cap-rate / vacancy-adjusted narrative a commercial appeal needs.
- **Cap-rate data became cheap** in the last 18 months — Integra Realty Resources Q1 2025 reports, CompStak's small-bizs tier, RealtyRates, and county sales disclosure databases are now LLM-parseable.

Provenance:
  - Signal 1 (demand): Suffolk County / Westchester / Nassau commercial grievance deadlines and process — https://www.cutmytaxes.com/suffolk-and-westchester-towns-grievance-deadlines-approaching/ — 2026-05-23
  - Signal 2 (economic): Ownwell $50M Series B for property-tax appeals, residential-led, 7 states, contingency model — https://www.prnewswire.com/news-releases/ownwell-raises-50m-launches-national-service-to-streamline-property-tax-appeals-and-make-home-ownership-more-affordable-302692103.html — 2026-02
  - Signal 3 (feasibility): Q1 2025 small strip-mall cap rates 6.45% (Integra Realty Resources) + commercial income-approach evidence requirements — https://www.greenbaumlaw.com/insights-alerts-What-Commercial-Property-Owners-and-Taxpayers-Should-Know-About-Filing-a-New-Jersey-Property-Tax-Appeal-in-2026.html — 2026-04
  Category: Workflow automation

## 3. The opportunity

The commercial property-tax appeal market is run by two kinds of incumbents:

- **Contingency-fee mills** (O'Connor, Cut My Taxes, Aventine, Ownwell-commercial) — take 25–50% of year-one savings. Great for the owner who can't be bothered. Terrible for the owner who runs three strip centers, knows their NOI cold, and resents handing $4K of a $12K saving to a firm that uploaded a template.
- **Enterprise platforms** (Ryan, CSC AppealTrack, Avalara Property Tax) — built for REITs and Fortune 500 tax departments. $20K+ engagements. Nothing for the guy with two office condos and a four-unit retail strip.

The wedge: a flat-fee SaaS that does the *only* thing a commercial appeal actually needs — assemble a defensible income-capitalization rebuttal — and lets the owner file it themselves in jurisdictions where pro se is allowed at the assessor / board-of-review level. Owner keeps 100% of the savings.

What incumbents do badly that an AI-first team can collapse:

- **Parsing the assessor's card.** Each county publishes a different PDF / web record with the assessor's implied market value buried in income/expense schedules. LLM + vision = 30 seconds.
- **Translating a rent roll into a stabilized NOI.** Today this is appraiser work at $1.5–3K. With structured inputs, an LLM produces the same line-by-line schedule.
- **Picking the right cap rate.** Pull last 6 quarters of submarket cap-rate prints from IRR / CompStak / RealtyRates and justify the selected rate against the assessor's implicit one.
- **Writing the narrative.** Every county's grievance form needs a 1–2 page "statement of grounds." LLMs do this competently when fed the inputs.
- **Hitting the deadline.** A calendar layer that knows Nassau is March 31 not April 1.

## 4. Target market

- **Primary customer:** Owner-operators of 1–10 small commercial properties — strip centers, single-tenant net-lease ("STNL"), light-industrial flex, suburban office condos, mixed-use storefronts. Total annual property-tax bill across portfolio: $30K–$400K. Geography: NY metro, NJ, MA, CT, IL, OH, MN, PA, MI — secondary tier US metros with active boards of review and a tradition of small-owner grievance filing.
- **Why they buy:** "I pay $42K a year on a $1.8M strip center. The 2025 reassessment jumped me 12%. Aventine wants 50% of year-one savings on a 5-year deal. I know my NOI is $108K not $130K — I just don't have time to write the brief and pull comps."
- **Rough TAM reasoning:** ~6.5M small commercial properties in the US per CoStar/NAIOP estimates. Even at 5% addressable per year (deadline timing + states we cover) = 325K transactions. At $399–799 per appeal, GMV ceiling is $200M+. A 5-state opening footprint × 80K eligible owners × 10% reach × $500 ARPU = $4M ARR.
- **Why now for them:** Post-COVID reassessments rolled through 2024–2026 in waves (NJ revaluations, Cook County triennial, Nassau quadrennial). Cap rates expanded ~75bps in 2024–25, meaning many properties are actually worth less than the assessor's pre-2024 implied value — the appeal case is unusually strong this cycle.

## 5. Product sketch (MVP)

- Upload assessor card (PDF or photo) → tool extracts assessed value, implied market value, jurisdiction, deadline, filing rules.
- Upload last 2 years of rent roll + operating statement → tool builds a stabilized NOI schedule with vacancy / collection-loss / expense-ratio adjustments benchmarked against submarket norms.
- Tool pulls submarket cap-rate range (2–3 sources) and recommends a defended rate; owner can override.
- Tool computes "fair value" and the rebut spread vs. assessor's implied value.
- One-click "Generate appeal packet" → produces (a) jurisdiction-specific grievance form pre-filled, (b) 2-page statement of grounds narrative, (c) NOI / cap-rate exhibit, (d) 5–8 comparable income properties exhibit, (e) cover letter to assessor.
- Deadline tracker per property + email reminders 60 / 30 / 14 / 3 days out.
- Optional add-on: $299 review by a licensed property-tax consultant before owner files. (Marketplace, not employees.)

## 6. AI angle — what's load-bearing

Three places AI is doing actual appraisal work, not decoration:

1. **Income normalization.** A rent roll has lease-roll dates, free-rent periods, percentage rents, and CAM reimbursements scattered across formats. LLM + a domain ontology turns it into a stabilized cash-flow schedule the way a junior appraiser would — that's 3–5 hours of human work today.
2. **Cap-rate defense narrative.** Picking 6.45% vs 7.10% changes the value conclusion by 9%. The model reads the source quarterly reports (IRR, CompStak, RealtyRates), reconciles vintage and submarket, and writes the paragraph that justifies the selected rate. This is the part assessors and BAR members actually argue about.
3. **Jurisdiction translation.** Every state / county uses different forms, deadlines, evidentiary rules, and "burden of proof" language. The model maps the owner's facts to the right local template so the packet survives a procedural rejection.

Strip the AI, you have a form-builder — useless. The reason the contingency-fee firms can charge 30–50% is that today appraiser+attorney labor is the only way to assemble this packet credibly.

## 7. Localization angle (if any)

US-first, state-by-state expansion. Not a global play. The "localization" inside the US is the appeals process itself — 50 states, 3,000+ counties, every one different. Launch sequence:

- **Wave 1 (2026 deadlines we can still catch):** NJ (Apr 1 / May 1), NY metro grievance season (Mar–Jun), CT (Feb 20 — catch 2027 cycle), MA (Q1 2027), IL (Cook triennial). Five jurisdictions, ~40% of US small-commercial appeal volume.
- **Wave 2:** OH, MN, MI, PA, AZ. Ten total, ~70% of volume.
- **Wave 3:** TX, FL, GA, CA — bigger markets but Ownwell/O'Connor already entrenched; come in as flat-fee alternative.

Within each jurisdiction, the "localization" work is non-trivial: rules of evidence, who can file pro se (commercial entities sometimes require a licensed rep at higher levels), comp data sources, board-of-review procedure.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** Two SKUs.
  - **Annual sub:** $399 / property / year — unlimited appeals, deadline tracking, packet generation, one updated packet per year.
  - **One-shot:** $799 / property — single appeal, no renewal, for owners who want to test before committing.
  - Add-on: $299 consultant review (revenue share with marketplace reviewer 60/40).
- **ACV:** Average owner has 3 properties → $1,200 ARR. Owners with 5–10 properties (the sweet spot) → $2K–$4K ARR.
- **Math to $1M ARR:** 830 customers × $1,200 ARR = $1M. Or 2,500 properties × $400 = $1M. Achievable in the second deadline cycle (2027 spring) if Wave 1 launches by Q3 2026.
- **Math to $5M ARR:** 4,200 customers × $1,200 = $5M. Or 12,500 properties × $400. Requires Wave-2 jurisdictions live and ~5% take rate of the addressable owner base in those states. Year 3 target.
- **Expansion path:** (i) more properties per owner over time; (ii) add-on consultant reviews; (iii) Tax Court / SCAR-level escalation packet ($1,499 add-on for properties that don't win at first level); (iv) personal property tax (FF&E renditions) for the same customer.

## 9. Go-to-market wedge — first 100 customers

Tax appeals are a calendar-driven impulse buy. The wedge has to align with deadline panic.

1. **Cold outreach to small-portfolio owners on county assessor public rolls.** NJ, NY, IL, OH, MA, MN publish parcel-owner rolls. Filter for LLCs / individuals owning 2–10 commercial parcels. Mail-merge a personalized "your $1.8M assessment looks $XXXk overvalued at current cap rates — packet ready in 48hrs, $399 flat" letter 30–60 days before each jurisdiction's deadline. Expected response 1–2%, conversion of responders 15–25% = ~30–50 customers per 5K-owner mailing.
2. **BiggerPockets commercial forum + Wicked Reports + LoopNet owner-broker community.** Threads about property-tax overassessment happen seasonally. Publish a tool that takes a property address and returns a "free overassessment estimate" in 60 seconds — gated to email capture, paid to file. The free estimator becomes the lead magnet.
3. **Partnership with niche CRE brokers and SBA 7(a) commercial lenders.** Both have client portfolios of small-commercial owners. A commercial broker who sells 12 strip centers a year can introduce 12 new owners — pay $50 per closed account, broker keeps relationship intact.
4. **Local CPA + bookkeeper firms.** Small commercial owners ask their CPA "should I appeal?" every year and the CPA says "yeah, call O'Connor." Insert into that referral path with a 20% kickback structure. CPAs are highly compliant referral partners when there's a clear, ethical hand-off.
5. **Paid search on long-tail queries.** "Nassau county commercial tax grievance deadline," "NJ property tax appeal income approach," "appeal strip mall property tax IL." Low volume per query but very high intent. $5–15 CPC, $80–150 CAC.

If the first 100 customers don't close in the spring 2027 cycle (NJ + Suffolk + Cook), the channel math is wrong and we re-plan.

## 10. Build complexity — justification

**Medium.** Off-the-shelf:

- LLM (GPT-5 / Claude 4.7) for parsing, normalization, narrative.
- Vision API for assessor-card extraction.
- Stripe for billing.
- Standard SaaS stack — Next.js + Postgres + S3.

Custom work:

- **Jurisdiction templates** — 10 states' worth of forms, rules, deadlines. ~6–8 weeks of focused legal/research work, one paralegal contractor for two months.
- **Cap-rate / comp data pipeline** — Integra Realty Resources reports (public PDFs), CompStak small-bizs tier, county sales-disclosure databases. Scraping + structured ingestion. ~4 weeks.
- **Income-normalization engine** — LLM with a structured-output schema and validation rules. ~4 weeks plus ongoing tuning.

A pair of builders (one technical, one with CRE/appraisal domain knowledge) ships v1 in 4 months. Wave 2 adds one jurisdiction per 2–3 weeks after that.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Property owners can file appeals pro se at assessor / board-of-review level in every state we're targeting. Higher tribunals (Tax Court, SCAR appeals) may require licensed representation — we don't enter those without partner counsel. |
| Ethical — no harm / dark patterns | ✅ | Customer gets the full packet they paid for whether they win or lose. No contingency = no incentive to oversell appeal odds. |
| Market exists (evidence above) | ✅ | Ownwell raised $50M, O'Connor saved $213M, ten thousand BiggerPockets threads. |
| 1–5 person team can build this | ✅ | Two-person build for v1; one paralegal contractor for jurisdiction expansion. |
| Launchable with <$50K / ₹40L | ✅ | Off-the-shelf stack. Cap-rate / comp data subscriptions: $1–2K/mo at launch. Paralegal contract: $15K for v1. Marketing seed: $10K. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | Annual deadline = annual pain. Real money — $5–30K saving per property per year is normal. But it's an annual pain, not a daily one; owners forget about it 11 months a year. |
| Demand evidence | 15 | 12/15 | Ownwell $50M round, O'Connor $213M saved, BiggerPockets threads, CutMyTaxes / Aventine / Cecinini / Skoloff all operating. Demand is proven; the question is whether owners switch from "let a firm do it for 30%" to "DIY with a kit for $399." Anecdotal yes, not yet proven at scale. |
| Build feasibility | 15 | 11/15 | LLM-native parts are 4 weeks of work each. Jurisdiction template work is the long pole — careful but not deep. 4 months for v1 with two builders. Not 4 weeks. |
| Distribution clarity | 15 | 11/15 | Cold mailings to public parcel rolls work — boring, repeatable, deadline-driven. CPA referral kickbacks are slow but durable. Paid search is high-intent. No one channel is a silver bullet, which is why I'm not at 13+. |
| Revenue mechanics | 15 | 12/15 | $399–799/property pricing is well-anchored: cheaper than one appraisal, cheaper than one year of Ownwell contingency, more expensive than free DIY. ACV $1,200 average. Math to $1M is achievable in two appeal cycles. Math to $5M depends on Wave-2 expansion executing. |
| Time to first revenue | 10 | 7/10 | First paying customer in 8–12 weeks of launch if we time launch to NJ April deadline. Annual cycle means 80% of revenue is bunched Feb–Jun each year — cash flow seasonal. |
| Defensibility | 10 | 6/10 | Jurisdiction templates compound (every new state adds gravity). Cap-rate / comp data licensing is replicable. Brand within the bootstrapped-CRE community is the soft moat. Ownwell or O'Connor could clone the flat-fee SKU in 6 months if they wanted; they probably don't want to cannibalize contingency. |
| **Total** | **100** | **75/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`domain-expertise-required` · `technical-heavy`

Best built by a builder with CRE or appraisal background (or a co-founder with one). The "right cap rate" question is judgment-laden and getting it wrong publicly will burn the brand. A pure tech founder without domain anchoring will ship a product that produces packets, but the packets won't win at appeal.

### Key assumptions to validate (3–5)

1. **Assumption:** Small commercial owners will pay a flat $399–799 to file themselves rather than 25–50% contingency. **How to test:** 30 phone interviews with NJ / Nassau owners who appealed in 2024–25. Specifically ask: "Would you have paid $499 flat to keep 100% of your savings?" Watch for hesitation cues, not just "yes."
2. **Assumption:** AI-generated income-approach packets win at a rate ≥ contingency firms (i.e., ≥40–50%). **How to test:** Run 20 paid pilot appeals in spring 2027 cycle with a hired licensed consultant doing final review. Measure win rate, average reduction, board feedback.
3. **Assumption:** County parcel rolls are scrape-friendly and identify 1–10-property owners reliably. **How to test:** Build the scraper for NJ Essex / Bergen / Morris and Nassau / Suffolk in week 1. If <70% precision on "owns 2–10 commercial parcels," the cold-mail channel doesn't work and we need Channel 3 or 5 as primary.
4. **Assumption:** Annual recurring is achievable, not one-shot churn. **How to test:** After year 1, see what % of properties re-up. If <40%, this is a one-shot $799 business not a $399 sub business, and ARR projections drop.

### Risk flags

1. **Platform / data dependency:** If CompStak / RealtyRates / IRR change pricing or API access, the cap-rate evidence pipeline gets expensive fast. Mitigation: ingest public-record sales-ratio studies and county tax-court filings as a fallback dataset.
2. **Regulatory drift:** A state could require licensed reps for commercial appeals at all levels (some states already do above $X assessed value). Watch IL, MA, NY closely. Mitigation: marketplace of licensed reps as a $299 add-on.
3. **Ownwell goes flat-fee commercial:** They have a $50M war chest. If they launch a $399 flat-fee SKU we lose on brand. Mitigation: speed in non-Ownwell states (NJ, MA, OH, MN, CT). Their footprint expansion is slow because each state takes them ~6–9 months.
4. **Seasonality:** 70%+ of revenue is Feb–Jun. Cash management is real for the founders. Mitigation: bundle annual subscriptions and bill 50% in fall.

## 14. Structured verdict

```
Score:                  75/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical builder + co-founder or advisor with CRE / appraisal background. NJ or NY metro home base ideal for jurisdictional access.
Time to revenue:        12–16 weeks (launch timed to NJ Apr 1 or Nassau Mar 31 2027 deadline)
Capital to launch:      $35–50K (LLM + data subs ~$1.5K/mo; paralegal contractor $15K; marketing seed $10K; rest = legal + cushion)
Top 3 assumptions to validate first:
  1. Small commercial owners will pay $399–799 flat to skip the 25–50% contingency — test with 30 phone interviews before writing code
  2. AI-generated income-approach packets win at ≥40% appeal rate — pilot 20 paid appeals with hired licensed consultant review in spring 2027
  3. County parcel rolls in target states are scrape-friendly enough to identify 1–10-property owners with ≥70% precision — build NJ / Nassau scraper in week 1
Kill criteria:
  - Abandon if <30% of 30 phone-interview prospects pre-commit to paying $499+ for the first appeal cycle
  - Abandon if pilot win rate in spring 2027 is <30% across 20 appeals
  - Abandon if Ownwell or O'Connor launches an identical flat-fee SKU in 3+ of our target states before our Wave-1 launch
```

## 15. Next step — 1-week validation sprint

- **Day 1:** Build a list of 100 small-commercial owners in Essex County NJ + Nassau County NY who appealed in 2024 or 2025 (public BAR / SCAR records are searchable). Pull phone / mail.
- **Day 2–3:** Cold-call 50 of them. Pitch: "I'm building a $499 flat-fee alternative to Ownwell / O'Connor for the 2027 appeal cycle. Two questions: (a) how much did you pay last cycle, (b) would you have paid $499 flat to keep 100% of your savings instead?" Goal: 15 conversations.
- **Day 4:** Phone 5 commercial property-tax attorneys in NJ. Ask what they reject as DIY-able vs. needing counsel. Find the line.
- **Day 5:** Decide. **Go criterion:** ≥7 of 15 owners say "yes, I'd pay $499 flat" without hedging, AND the attorney conversations confirm that assessor-level and county-BAR-level filings in NJ / NY / MA / OH are pro-se-able for properties under $5M assessed. **No-go:** <5 of 15 yes, or attorneys say "no commercial appeal will be taken seriously without a licensed rep."

Falsifiable result. Either the owners pay flat or they don't.
