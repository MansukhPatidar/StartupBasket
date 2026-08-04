---
title: "AccrueMeter — gratuity liability meter for Indian SMEs"
slug: gratuity-liability-meter
date: 2026-08-05
category: FinTech / India-SMB — Private Limited Companies (25–500 Staff) Carrying Fixed-Term and Contract Headcount Under the New Labour Codes
complexity: Low
score: 74
verdict: GO
confidence: Medium
oneLiner: "Shows an Indian CFO what gratuity actually costs them today, now that fixed-term staff vest in one year."
tags:
  vertical: FinTech
  model: SaaS
  geography: India
  secondary: [SMB, Compliance-driven, AI-agent, Solo-builder]
axes:
  problem: 16
  demand: 11
  build: 13
  distribution: 11
  revenue: 12
  time: 8
  defensibility: 3
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# AccrueMeter

## 1. One-liner

Shows an Indian CFO what gratuity actually costs them today, now that fixed-term staff vest in one year.

## 2. Trend signal — why now?

Three things changed in the last nine months, and together they turned a sleepy annual audit line item into a live number that moves every month.

**The vesting cliff collapsed from five years to one.** India's four Labour Codes came into force on 21 November 2025. Under the Code on Social Security, fixed-term employees earn pro-rata gratuity after **one continuous year** of service — not five. Permanent employees still sit at five years. For a company running 40% of its headcount on fixed-term contracts, an obligation that used to be theoretical (most FTC staff churned out before year five and cost nothing) is now a real, accruing balance-sheet number that starts ticking at month 13.

**The calculation base went up at the same time.** The 50% wage rule requires basic + DA + retaining allowance to be at least half of CTC. Gratuity is 15 days of *wages* per completed year — so raising the wage base mechanically raises every gratuity accrual. Published employer analyses put the combined PF+gratuity statutory cost increase around 3.2% of gross CTC, and actuarial projections forecast **25–50% expansion in total gratuity funding obligations** for firms heavily staffed with direct contractual personnel or running allowance-heavy pay structures.

**And the rules are still landing state by state.** Central Rules were notified 8 May 2026. As of March 2026 only Gujarat, Arunachal Pradesh, Haryana, Madhya Pradesh, Karnataka and Maharashtra had notified final rules across all four codes; most states are still pending. A multi-state employer right now genuinely does not have one consistent answer, and the pending-state guidance is "follow the Central Rules until yours lands."

Here's the gap that makes this a product. Indian SMEs get their gratuity number **once a year**, as a PDF actuarial certificate, priced around ₹5,000–15,000, delivered 3–7 working days after they email a spreadsheet of employee data to an actuary. Auditors won't sign financials without that certificate. That cadence was fine when the liability only attached to people who'd survived five years — the number barely moved. It is not fine when every fixed-term hire starts accruing at month 13, when the wage base just jumped, and when the CFO is deciding *this quarter* whether to convert contractors to FTC, extend a contract past the 12-month mark, or fund a gratuity trust.

The finance team is flying blind for eleven months out of twelve on a number that now changes with every hire, every contract renewal, and every salary restructure.

```
Provenance:
  - Signal 1 (Demand): Fixed-term employees now vest gratuity at 1 year instead of 5; contract workers get service-condition parity; employers must retroactively absorb the liability surge in FY2025-26 books — https://lifeinsurance.adityabirlacapital.com/articles/retirement-insurance/gratuity-rules-2026/ — observed 2026-08-05
  - Signal 2 (Feasibility): Incumbent delivery is a manual, once-a-year actuarial PDF at ₹5,000–15,000 with 3–7 day turnaround off an emailed employee spreadsheet — no continuous-tracking product exists in the category — https://businesssetup.in/actuarial-valuation-report-for-gratuity/ — observed 2026-08-05
  - Signal 3 (Economic): 50% wage rule raises PF+gratuity statutory cost ~3.2% of gross CTC; actuarial projections forecast 25–50% expansion in gratuity funding obligations for contract-heavy firms — https://www.cmaknowledge.in/2026/07/new-gratuity-rules-for-private-sector-employees-2025-comprehensive-guide.html — observed 2026-08-05
  Category: Regulatory arbitrage
```

## 3. The opportunity

The incumbent isn't a software company. It's a **cottage industry of independent actuarial consultancies** — Charan Gupta Consultants, Mithras Consultants, Numerica, Kapadia & Kochrekar, and a long tail of regional firms — selling a compliance artifact, not a management tool.

What they do badly, specifically:

- **Wrong cadence.** Annual. The liability now changes monthly. A CFO who wants to know the cost of extending a contractor's contract past 12 months has to either guess or pay for an off-cycle valuation.
- **Wrong output.** A PDF certificate addressed to the auditor. It answers "what do I book?" It does not answer "what happens to this number if I convert 30 contractors to fixed-term next quarter?"
- **Wrong data flow.** The client exports employee master data to Excel, emails it to the actuary, waits 3–7 days, gets a PDF back. Every single year. Nothing is retained, nothing compounds, and last year's assumptions aren't sitting next to this year's.
- **No scenario layer at all.** The single most valuable question an Indian CFO has in 2026 — *should I keep people on FTC or convert them, and what does each path cost me in gratuity over three years?* — has no product answer today.

The 10× play is not "cheaper actuarial certificates." It's **turning a once-a-year audit artifact into a live number the finance team watches**, with the actuarial certificate falling out of it as a byproduct at year-end. Same Projected Unit Credit method the actuaries use — it's a documented, standard methodology, not a secret. The wedge is cadence, scenario modelling, and the fact that the underlying law just made the number volatile enough to be worth watching.

Critically: I am **not** proposing to replace the signing actuary. AS 15 / Ind AS 19 require an independent actuarial certificate and auditors will not accept a SaaS export in its place. AccrueMeter runs the number continuously for management, and either partners with a credentialed actuary to sign the annual certificate or hands a clean, complete dataset to the client's existing actuary. That distinction is what keeps this legal and keeps CAs as allies rather than enemies.

## 4. Target market

- **Primary customer:** Finance head / CFO / Head of HR Ops at Indian private limited companies with **25–500 employees**, where at least 20% of headcount is fixed-term or direct contract. Concentrated in IT services, staffing, manufacturing, BPO/GCC vendors, logistics, and retail chains. Buyer is whoever signs off on the annual actuarial valuation today.
- **Secondary customer:** Mid-size CA firms (5–40 staff) who coordinate gratuity valuations across 20–100 audit clients each and currently chase spreadsheets from all of them during audit season.
- **Why they buy:** Because the number moved and they can't see it. In their world: "our gratuity provision jumped and I found out in September when the actuary's report landed." The 1-year FTC vesting rule means a decision made in Q1 — extend this contract to 13 months instead of 11 — creates a liability the CFO won't see quantified until the following audit cycle.
- **Rough TAM reasoning:** Every private limited company in India requires a statutory audit regardless of turnover, and every company with 10+ employees must provide gratuity. Companies preparing accounts under AS 15 / Ind AS 19 with a gratuity liability need an actuarial valuation or the auditor won't sign. The subset that matters here — 25–500 headcount, contract-heavy, multi-state — is realistically in the low hundreds of thousands of registered entities. I don't have a defensible precise count and I'm not going to invent one; the honest statement is that the serviceable segment is comfortably large enough for a ₹5M ARR business and far too small and unglamorous for a funded player to bother with.
- **Why now for them:** FY2025-26 closing is the first book-close that must absorb the retroactive liability surge dating from 21 November 2025. That's a specific, dated, unavoidable moment of pain that every one of these companies is walking into.

## 5. Product sketch (MVP)

- **Live liability meter** — one number, updated on every payroll run: total gratuity liability today, split permanent vs fixed-term, with the month-over-month delta and what drove it.
- **Vesting radar** — which fixed-term employees cross the 12-month vesting line in the next 90 days, and what each one adds to the liability the day they do. This is the screen that sells the product.
- **Scenario modelling** — "convert 30 contractors to FTC," "extend these 12 contracts by 4 months," "restructure basic to 50% of CTC": see the three-year liability curve for each path before committing.
- **Payroll-connected data** — import from the common Indian payroll stacks and standard CSV/Excel exports, so employee master data flows in once instead of being re-exported every audit season.
- **Assumption workbench** — discount rate, salary escalation, attrition, mortality. Sensible defaults, client-adjustable, with last year's assumptions sitting alongside this year's so drift is visible.
- **Audit pack export** — a complete, formatted dataset plus the PUC working, handed to whichever actuary signs the certificate. Turns a 3–7 day back-and-forth into a single upload.
- **State-rule tracker** — which of the states you operate in have notified final rules, which are still on Central Rules guidance, and what differs.
- **Funding decision view** — current unfunded liability vs. the 8.33% of salary annual contribution cap under Rule 103 of the Income-tax Rules, so a CFO can see whether an approved gratuity fund is worth setting up.

## 6. AI angle — what's load-bearing

Honest answer: **the actuarial math is not the AI.** Projected Unit Credit is deterministic arithmetic. If I claimed AI was doing the valuation I'd be lying, and an actuary would catch it in five minutes.

Where AI is genuinely load-bearing:

- **Employee master normalisation.** Every client arrives with a differently-shaped payroll export — inconsistent date formats, employment-type fields that say "FTC" or "Contract" or "Fixed Term" or are blank, salary components split across a dozen non-standard column names that need mapping to the statutory wage definition. This messy schema-mapping problem is the single biggest reason the current process takes 3–7 days, and it's exactly what an LLM is good at. Kill this and you kill the incumbent's cycle time.
- **Wage-component classification.** Deciding which of a company's 15 pay components count toward the 50% wage definition (basic, DA, retaining allowance in; HRA, conveyance, special allowance, overtime out) requires reading the component names and the company's own salary policy documents. Rules-based mapping breaks on the first client who calls their special allowance "flexi benefit pot."
- **State-rule differential reading.** Rules land state by state on no fixed schedule, as PDFs in varying formats and sometimes regional languages. Keeping a current diff of what each state notified versus the Central Rules is continuous document ingestion.

Remove the AI and this product still exists — but it's a 3-day-turnaround consultancy with a spreadsheet, which is precisely the incumbent. The AI is what compresses onboarding from a week to an afternoon and makes monthly cadence economically possible. That's load-bearing enough for me, and I'd rather state the boundary honestly than dress up a calculator.

## 7. Localization angle

This is an India-only product by construction — it exists because of the Indian Payment of Gratuity framework as rewritten by the Code on Social Security. There's no global version.

- **Regulatory specificity is the entire product.** 15 days' wages per completed year, ₹20L cap, 5-year permanent vesting, 1-year FTC vesting, the 50% wage definition, Rule 103's 8.33% contribution cap, AS 15 vs Ind AS 19 thresholds. None of this ports anywhere.
- **Multi-state is the hard part and the moat.** Labour is a concurrent subject. Rules differ by state on thresholds, procedures and timelines, and most states haven't notified yet. A multi-state employer needs a product that tracks this; a single-state one barely does.
- **Pricing must be rupee-native.** ₹6,000–20,000/month works. The $200–500/mo equivalent that a US SaaS would charge does not, against a ₹5,000–15,000 *annual* incumbent price point. The pitch has to be "you're paying ₹12,000 a year for a PDF; pay ₹96,000 a year to actually see the number and model decisions against it" — which only lands if the scenario layer visibly saves more than the delta on a single contract-conversion decision.
- **Distribution is CA-mediated.** Indian SMEs buy finance software their chartered accountant blesses. That's not a channel choice, it's how the market works.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** ₹6,000/mo (up to 100 employees) · ₹12,000/mo (100–300) · ₹20,000/mo (300–500+). Annual billing standard in this segment. CA-firm plan at ₹40,000/mo for up to 25 client entities.
- **ACV:** ₹1.4L (~$1,650) blended for direct SME customers. ₹4.8L (~$5,600) for CA firms.
- **Rough math to $1M ARR:** ₹8.5 crore. Roughly 500 direct SMEs at ₹1.4L ACV (₹7Cr) plus 30 CA firms at ₹4.8L (₹1.4Cr). Reachable within 24 months if the CA channel works.
- **Rough math to $5M ARR:** ₹42Cr requires ~2,000 direct customers plus ~150 CA firms plus expansion into adjacent defined-benefit valuations — leave encashment, pension, post-retirement medical all use the same actuarial machinery and the same client relationship. That's the honest path: the gratuity wedge opens the account, the other three benefit plans triple the ACV.
- **Expansion path:** Per-entity pricing for group structures → leave encashment and other DB plans → gratuity trust administration and funding advisory (where an insurance-broking referral fee is a genuine second revenue line, since SMEs setting up approved funds through LIC or private insurers pay brokerage anyway).
- **Margin note:** Gross margin is high — this is compute-light. The cost risk is human: if every client needs an actuary's hand-holding to onboard, the model degrades into a consultancy. The AI normalisation layer is what protects the margin, which makes it the thing to build first and the thing to kill the idea over if it doesn't work.

## 9. Go-to-market wedge — first 100 customers

- **The FY-close ambush (customers 1–25).** Every company that files with MCA has a statutory auditor and a book-close. Pull the MCA21 filings for private limited companies in Maharashtra, Karnataka and Gujarat (the three states that *have* notified final rules, so the compliance answer is unambiguous) with 25–500 employees in IT services, staffing and manufacturing. For each, the pitch is one email with a single attached number: an estimated gratuity liability delta for their FY2025-26 close, computed from their public filings and headcount. Wrong-but-close is fine — it starts the conversation, and any CFO whose number is off will correct you, which is a demo.
- **CA firm partnerships (customers 26–70).** This is the real channel. A mid-size CA firm coordinates gratuity valuations for 20–100 audit clients and currently chases spreadsheets from every one of them during the same six-week window. Sell them the pain relief, not the software: they onboard clients, we do the normalisation, they keep the client relationship and take a margin. Target ICAI regional chapters in Mumbai, Bengaluru, Pune, Hyderabad and Ahmedabad. Twenty CA firms at 3–5 converted clients each is 60–100 customers.
- **Actuary partnership, not war (customers 70–100).** Find 2–3 independent credentialed actuaries doing 200+ SME valuations a year manually. Offer them the platform as their delivery layer — they sign the certificates, we run the engine, their throughput goes up and their per-client cost goes down. They bring their existing book. This also solves the credibility problem: "signed by a Fellow of the Institute of Actuaries of India" is what makes an auditor accept the output.
- **Content wedge on the one question nobody has answered.** "What does extending a fixed-term contract past 12 months actually cost you?" — with a free public calculator. That specific question is being asked right now by every contract-heavy Indian employer and there is no good answer online. Free calculator captures the email; the scenario layer is the paid upgrade.
- **Staffing industry associations.** Indian Staffing Federation members are the most exposed segment on earth to this rule change — their entire model is fixed-term deployment, and their margins are thin enough that a 25–50% gratuity funding increase is an existential number, not an accounting one.

## 10. Build complexity — justification

**Low.** The actuarial engine is documented deterministic math (Projected Unit Credit, standard mortality tables, standard assumption set) — this is a well-specified calculation, not research. Payroll imports are CSV/Excel plus a handful of API integrations with the common Indian payroll platforms. The AI layer is schema-mapping and document classification on off-the-shelf models. Standard web stack, no infrastructure novelty, modest data volumes.

A technical founder with an actuarial advisor ships a credible v1 in **8–10 weeks**. The genuinely hard part isn't engineering — it's getting the actuarial methodology validated by someone credentialed so the output is trusted, and that's a relationship problem solved in parallel with the build, not a blocker to it.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Management-reporting tool. Does not claim to issue statutory actuarial certificates — those come from a credentialed actuary who signs. Staying on the correct side of this line is a product requirement, not a nice-to-have. |
| Ethical — no harm / dark patterns | ✅ | Helps employers fund an obligation owed to workers. If anything it improves the odds employees actually get paid what they're owed. |
| Market exists (evidence above) | ✅ | Companies already pay ₹5,000–15,000/year for the annual certificate; auditors won't sign without it. Existing spend, mandatory purchase. |
| 1–5 person team can build this | ✅ | Solo technical founder + actuarial advisor. 8–10 weeks to v1. |
| Launchable with <$50K / ₹40L | ✅ | Realistically ₹6–10L: build, actuarial advisory retainer, and the first CA-channel sales push. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | Real, dated, unavoidable — FY2025-26 close must absorb a retroactive liability surge, and the 1-year FTC vesting rule makes it recur monthly. Not quite hair-on-fire: the workaround (annual actuarial PDF) exists, is cheap, and satisfies the auditor. Companies bleed on decision quality, not on compliance failure. That caps this below 17. |
| Demand evidence | 15 | 11/15 | Strong on the regulatory side — multiple independent sources confirm the vesting change, wage-base increase, and 25–50% funding-obligation projections. Existing paid spend is confirmed. But I have **no verbatim customer quotes** — I searched for Indian CFO/founder complaints about this and found trade commentary, not practitioner voice. That's a real gap and I'm scoring it honestly rather than papering over it. |
| Build feasibility | 15 | 13/15 | Deterministic math, standard stack, 8–10 weeks solo. Only friction is actuarial validation. |
| Distribution clarity | 15 | 11/15 | CA firms and actuary partnerships are named, specific, and structurally correct for how Indian SMEs buy. Deducted because CA-channel conversion is unproven and these are relationship sales with real cycle time — not a 2-week sprint. |
| Revenue mechanics | 15 | 12/15 | Pricing is anchored to a confirmed existing spend, and ACV is realistic. The stretch is asking ₹96K/year against a ₹12K/year incumbent — that's an 8× price step justified by a different job-to-be-done, which is a real but surmountable sales problem. Expansion into other DB plans is credible. |
| Time to first revenue | 8 | 8/10 | Mandatory annual purchase with a hard audit deadline means budget already exists. 6–8 weeks to first paying customer is realistic; the CA channel takes longer to compound. |
| Defensibility | 10 | 3/10 | Weakest axis by far and I won't pretend otherwise. The math is public, the method is standard. An incumbent payroll platform — Keka, greytHR, Zoho — could bolt this on and reach the customer through an existing relationship. What you get is workflow lock-in (accumulated employee history and prior-year assumptions), CA-channel relationships, and a head start. Execution moat only. |
| **Total** | **100** | **74/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required`

You need someone who can build the normalisation layer *and* a credentialed actuarial partner who lends legitimacy. Without the second, auditors won't trust the output and CA firms won't refer you. This is not a solo-generalist idea.

### Key assumptions to validate (5)

1. **Assumption:** Indian CFOs at contract-heavy SMEs will pay ~8× the annual actuarial fee for monthly visibility plus scenario modelling. **How to test:** 30 structured calls with finance heads at 50–300 person staffing and IT services firms. Show a mock vesting-radar screen. Ask directly what they'd pay. Kill if fewer than 8 name a number above ₹5,000/mo.
2. **Assumption:** The scenario question ("extend this contract past 12 months — what does it cost?") is one CFOs are actively asking, not one I invented. **How to test:** In those same 30 calls, ask an open question about FTC decisions *before* mentioning the feature. Count how many raise gratuity unprompted. Below 10 and the wedge is wrong.
3. **Assumption:** CA firms will act as a distribution channel rather than viewing this as disintermediation. **How to test:** Pitch 10 mid-size firms in Mumbai and Bengaluru on the ₹40K/mo multi-entity plan. Need 3 to agree to pilot with real clients.
4. **Assumption:** A credentialed actuary will partner rather than compete. **How to test:** Approach 5 independent actuaries doing high-volume SME work. Need 1 signed advisory arrangement before writing serious code.
5. **Assumption:** AI normalisation actually compresses onboarding to under a day across messy real-world payroll exports. **How to test:** Collect 20 anonymised payroll exports from varied companies. Measure end-to-end mapping accuracy. Below 90% and the margin model breaks — this becomes a consultancy.

### Risk flags

1. **Platform dependency / incumbent bolt-on:** Keka, greytHR, Zoho People and RazorpayX already hold the employee master data and the customer relationship. Any of them can ship a gratuity liability module as a feature. This is the most likely way the idea dies, and defensibility scoring reflects it. Mitigation is speed plus the CA channel they don't own.
2. **Regulatory risk (in both directions):** State rules are still landing. If a state notifies rules that materially change gratuity treatment, the engine needs updating — that's maintenance burden. Worse tail risk: if implementation gets diluted or deferred under employer pressure, urgency evaporates. The codes are in force, but Indian labour reform has a long history of slipping.
3. **Credibility risk:** If the number doesn't match what the signing actuary produces, trust collapses immediately and permanently in a referral-driven market. The actuarial partnership isn't optional garnish — it's structural.
4. **Price-step risk:** Selling ₹96K/year against a ₹12K/year incumbent requires the buyer to accept this is a different product, not an expensive version of the same one. If the scenario layer isn't visibly worth more than one good contract decision, the sale stalls at "we already have an actuary."
5. **Weak customer-voice evidence:** I could not source practitioner quotes. The entire demand case rests on regulatory logic and confirmed existing spend. Regulatory logic is a good predictor of pain but not a substitute for hearing it — which is exactly what the validation sprint is for.

## 14. Structured verdict

```
Score:                  74/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder who can ship the normalisation layer, paired with
                        a credentialed actuary (Fellow, Institute of Actuaries of India) as
                        advisor or co-founder. India-based — this is a relationship sale.
Time to revenue:        6–8 weeks to first paying customer; CA channel compounds over 4–6 months
Capital to launch:      ₹6–10 lakh ($7–12K)
Top 3 assumptions to validate first:
  1. CFOs pay ~8× the annual actuarial fee for monthly visibility — 30 calls, need 8 naming >₹5,000/mo
  2. FTC-extension cost is a question CFOs raise unprompted — same 30 calls, need 10 unprompted mentions
  3. A credentialed actuary will partner — approach 5, need 1 signed before writing serious code
Kill criteria:
  - Abandon if fewer than 8 of 30 CFOs name a price above ₹5,000/mo
  - Abandon if no credentialed actuary agrees to an advisory arrangement within 6 weeks
  - Abandon if AI normalisation accuracy on 20 real payroll exports lands below 90%
  - Abandon if Keka, greytHR or Zoho ships a gratuity liability module before v1 launches
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Build the free public calculator — "what does extending a fixed-term contract past 12 months cost you in gratuity?" Three inputs, one number. Post it to r/IndiaTax, r/IndianStreetBets' business threads, two LinkedIn HR-compliance groups, and one CiteHR thread. Instrument it. The measurable output is completion count and how many users run a *second* scenario — repeat use is the signal that the question is real.
- **Day 3–4:** Thirty structured calls with finance heads at 50–300 person staffing, IT services and manufacturing firms in Maharashtra, Karnataka and Gujarat. Script order matters: ask about FTC decisions **before** mentioning gratuity, so unprompted mentions are countable. Then show the vesting-radar mock and ask for a price.
- **Day 4–5:** Approach 5 independent actuaries and 10 mid-size CA firms in parallel. The actuary conversation is the gate — no credentialed partner, no product.
- **Day 5 — go / no-go on falsifiable thresholds:**
  - ≥10 of 30 CFOs raise gratuity unprompted when discussing FTC decisions, **and**
  - ≥8 of 30 name a monthly price above ₹5,000, **and**
  - ≥1 credentialed actuary agrees to an advisory arrangement, **and**
  - ≥3 of 10 CA firms agree to a paid pilot.

  Miss any two of the four and this is a VALIDATE, not a GO — the regulatory logic is sound but the willingness-to-pay is unproven, and that's the axis this whole idea turns on.
