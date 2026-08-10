---
title: "CaixaCurto — split-payment cash projector for contadores"
slug: split-payment-working-capital
date: 2026-08-10
category: FinTech / Brazil
complexity: Low
score: 75
verdict: GO
confidence: Medium
oneLiner: "Shows a Brazilian accountant exactly how much working capital each client loses when split payment starts in 2027."
tags:
  vertical: FinTech
  model: SaaS
  geography: LATAM
  secondary: [Compliance-driven, SMB, AI-agent, Solo-builder, Accountant-channel]
axes:
  problem: 16
  demand: 13
  build: 13
  distribution: 12
  revenue: 11
  time: 7
  defensibility: 3
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# CaixaCurto

## 1. One-liner

Shows a Brazilian accountant exactly how much working capital each client loses when split payment starts in 2027.

## 2. Trend signal — why now?

Brazil's consumption tax reform (EC 132/2023, LC 214/2025) is no longer theoretical — it is executing on a published calendar, and 2026 is the year the plumbing goes live.

**The mechanism.** Split payment is defined in articles 31–35 of LC 214/2025. When a customer pays, IBS and CBS are segregated at the moment of financial settlement and routed straight to the tax authority. Only the net amount reaches the supplier. Today, companies collect gross and remit monthly — and they spend the float in between. That float is *implicit working capital*, and split payment deletes it. Critically, the split operates **daily**, not monthly, which is what makes the hit structural rather than a one-time timing blip.

**The dates that matter.** From 3 August 2026 — one week ago — NF-e requires populated IBS/CBS fields (CST-IBS/CBS and cClassTrib) for Lucro Presumido and Lucro Real emitters, with Simples Nacional and MEI following by 4 January 2027. Split payment itself lands in 2027. So the invoice data needed to model the impact is *becoming machine-readable right now*, months before the cash impact arrives. That gap between "data exists" and "pain arrives" is the entire window for this product.

**The unpreparedness.** Omie's 2nd Accounting Sector Survey (633 accounting firms, most with 50–300 clients) found **61% of accountants have not yet mapped the reform's impact on their client portfolio**, and only **25% of small/medium business owners have been contacted by their accounting firm** about the reform at all. A separate Omie survey reading (July 2026) puts **56% of accountants without a structured action plan**, while **68% report clients are already asking them reform questions**. Demand is arriving at the accountant's desk faster than the accountant's capacity to answer it.

**The gap that makes this a product.** Multiple independent sources say the same thing: ERPs are implementing the *mechanics* of split payment (NF-e fields, payment-institution integration) but do **not** project the cash impact. The contabeis.com.br analysis is explicit that standard ERP systems cannot project cash flow impact, model pre-reform vs. reform scenarios, or calculate required alternative financing — and that "o contador" is left holding that analysis manually. The free calculators that do exist (JoomPulse's margin calculator, REFORMA360) are manual-input, single-company lead magnets, not portfolio tools fed by real invoice data.

**The size of the hit.** Worked example from netcpa/contabeis: a client billing R$500,000/month with a 40–45 day average payment term, at a combined IBS+CBS rate of ~26.5%, loses roughly **R$175,000–R$200,000** of working capital. The rule of thumb: the working capital lost ≈ combined rate × last 45 days of billing.

```
Provenance:
  - Signal 1 (Demand): Omie 2nd Accounting Sector Survey, 633 accounting firms — 61% of accountants have not mapped reform impact on their client portfolio; only 25% of SMB owners have been contacted by their accountant about the reform — https://fenacon.org.br/reforma-tributaria/reforma-tributaria-61-dos-contadores-ainda-nao-mapearam-impacto-em-clientes/ — March 2026
  - Signal 2 (Feasibility): NF-e mandatory IBS/CBS fields (CST-IBS/CBS, cClassTrib) live 3 Aug 2026 for Lucro Presumido/Real; ~23.6M NF-e authorized daily; 280 validation rules make invoice tax data structured and machine-readable — https://taxup.com.br/estudo-rejeicao-nfe-ibs-cbs/ — August 2026
  - Signal 3 (Economic): Split payment (arts. 31–35, LC 214/2025) segregates IBS/CBS daily at settlement from 2027, destroying float-as-working-capital; worked example shows R$175–200K working capital loss on R$500K/mo billing at 40-day terms; ERPs explicitly do not model this — https://www.contabeis.com.br/artigos/76780/reforma-tributaria-split-payment-impacta-capital-de-giro/ — 2026
  Category: Regulatory arbitrage
```

## 3. The opportunity

Every Brazilian company that sells on credit terms is about to have a hole punched in its balance sheet on a known date, by a known mechanism, in a computable amount. Nobody is computing it.

The ERP vendors won't. Their job in 2026 is to stop invoices from being rejected — 280 validation rules went live and that is a five-alarm fire consuming every roadmap slot they have. Cash projection is a finance-advisory feature, not a fiscal-emission feature, and it sits outside their product identity. The consultancies will do it, but they do it for Lucro Real enterprises at consulting rates, one engagement at a time.

That leaves the accountant. The accountant has the client relationship, has the invoice data, is being asked the question by 68% of their clients — and has 50–300 clients to get through with a spreadsheet. So they do the top three and defer the rest. 61% haven't started.

The wedge is that this analysis is **mechanical**. It needs three variables per client: monthly billing, real days-sales-outstanding, and the applicable IBS+CBS rate. All three are derivable from invoice history the accountant already holds. This is not a judgment product — it's a batch calculation nobody has packaged, wrapped in the one output that actually moves a client: a number with a date attached and a financing decision underneath it.

There's a second, sharper reason this sells. It isn't a compliance cost — it's how the accountant **bills more**. The whole Brazilian accounting trade press is telling firms right now that reform advisory is the way to raise honorários and stop absorbing extra work at flat fees. CaixaCurto turns that advice into a deliverable the accountant can hand over and charge for.

## 4. Target market

- **Primary customer:** Owner or fiscal lead of a small-to-mid Brazilian accounting firm (*escritório contábil*) with 50–300 business clients, concentrated in São Paulo, Minas Gerais, Paraná and Rio Grande do Sul. The Omie survey sample — 633 firms, "mostly 50–300 clients" — is precisely this buyer.
- **Secondary customer:** CFO/controller at a Lucro Presumido company billing R$300K–R$5M/month in wholesale, distribution, manufacturing, or services-with-milestone-contracts — the segments flagged as highest-risk because they run 45–120 day terms on thin margins.
- **Why they buy:** They're being asked a question they can't answer at portfolio scale. Clients want to know what the reform does to *their* cash. The accountant knows the formula but not who to apply it to first, and doing 200 clients by hand is a month of work they can't bill for. The framing that lands, per the netcpa analysis: *"your working capital will shrink by X reais starting January 2027, and we need to decide now how to finance this."* Whoever has that conversation early gets repositioned from bookkeeper to advisor.
- **Rough TAM reasoning:** Brazil has on the order of tens of thousands of active accounting firms; Omie alone surveyed 633. Over 1 million companies were on Lucro Presumido as of 2022 — roughly half the country's businesses — and essentially all of them sell on terms. If the serviceable market is 15,000–25,000 firms of the right size, capturing 600 at R$400/mo is R$2.9M ARR. This does not need to be a big market to work.
- **Why now for them:** The September 2026 window for regime elections and the January 2027 split-payment start create a hard deadline. An analysis delivered in 2027 is a post-mortem. Delivered in late 2026, it's advisory the client pays for.

## 5. Product sketch (MVP)

- **Portfolio upload** — accountant drops in NF-e/NFS-e XML batches or SPED files per client; the system extracts billing volume, item-level IBS/CBS treatment, and counterparty terms.
- **Real DSO extraction** — computes each client's actual days-sales-outstanding from invoice-to-settlement history rather than asking the accountant to guess it. This is the input everyone fudges and the one that drives the whole number.
- **Working-capital gap projection** — per client: how much cash disappears when daily split payment starts, shown as a month-by-month curve across the 2027 transition, not a single scary number.
- **Portfolio triage board** — ranks all 200 clients by absolute exposure and by exposure-as-%-of-margin, so the accountant knows which twelve clients to call this week. This is the feature that converts trials.
- **Scenario modelling** — what happens if the client shortens terms by 15 days, raises prices 2%, or takes a receivables-advance line; shows the cost of each path side by side.
- **Client-ready PDF report** — branded with the accounting firm's logo, in Portuguese, written for a business owner rather than a tax technician. The accountant's billable deliverable.
- **Financing gap summary** — the specific amount of alternative funding required and when, which is the natural handoff to a lender.
- **Rate-table maintenance** — IBS/CBS rates and cClassTrib treatments update as the transition schedule moves; the accountant never rebuilds a spreadsheet.

## 6. AI angle — what's load-bearing

Honest answer: the cash math is arithmetic, not AI. If I claimed a model was projecting cash flow I'd be decorating a spreadsheet.

Where AI is genuinely load-bearing is **getting to clean inputs and out to a readable output**:

1. **Tax treatment inference at item level.** A client's invoice history contains thousands of line items whose cClassTrib/CST assignments are inconsistent, missing on pre-August invoices, or wrong. Determining the applicable IBS/CBS treatment requires reading product descriptions against NCM codes and the LC 214/2025 regime — there is no clean 1:1 NCM→cClassTrib mapping, and the correct code depends on product description and use. Doing that across a 200-client portfolio is exactly what an LLM is for, and it's the difference between a real projection and garbage in.
2. **Settlement-pattern reconciliation.** Matching invoices to payments to derive true DSO is messy — partial payments, renegotiated terms, boleto vs. Pix vs. card, counterparties named inconsistently across documents. Fuzzy reconciliation at scale is model work.
3. **Report narration.** Turning a projection into a one-page Portuguese memo a business owner will actually read — and that the accountant can send without rewriting — is generation work. It's also what makes the deliverable billable rather than a CSV.

Remove the AI and you still have a calculator, but one that needs a human to clean every client's data first — which is the exact bottleneck that left 61% of accountants stuck. The AI is what makes it a portfolio product instead of a spreadsheet.

## 7. Localization angle

This is a Brazil-only product by construction and that's a feature, not a limitation. Split payment as specified in LC 214/2025 — daily segregation at financial settlement, dual IBS/CBS, a six-year transition with shifting rates — does not exist in this form anywhere else. Chile, Colombia and Mexico have withholding regimes but not this mechanism.

Specific local requirements:
- **Portuguese-first**, in the register of Brazilian fiscal practice (*capital de giro*, *fluxo de caixa*, *alíquota*, *honorários*), not translated English.
- **Native NF-e/NFS-e XML and SPED ingestion** — the accountant already has these files; anything requiring manual re-entry is dead on arrival.
- **The transition calendar is hardcoded reality** — 2026 test rates (0.9% CBS / 0.1% IBS), the 2027 step-up, and the phased ramp through 2032. The projection is worthless if it doesn't track the schedule.
- **Pricing in BRL** at levels that work against Brazilian accounting-firm economics, not US SaaS price points.
- **Distribution runs through CRC regional councils, Fenacon, and WhatsApp accountant groups** — the actual channels of this trade.

The deep regulatory specificity is precisely why a global vendor won't build it and why it survives its first year.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** Tiered by portfolio size, sold to the firm:
  - *Starter* — R$249/mo, up to 25 client analyses
  - *Escritório* — R$499/mo, up to 120 clients (the core tier)
  - *Rede* — R$1,200/mo, unlimited + white-label reports + multi-user
  - Direct-to-company tier at R$349/mo for a CFO doing only their own entity.
- **ACV:** ~R$6,000 (≈$1,100) blended, assuming most land on Escritório.
- **Rough math to $1M ARR:** ~R$5.5M. At R$499/mo that's **~920 firms**, or ~700 firms with a modest mix of Rede accounts. Against a serviceable base of 15,000–25,000 firms, that's 4–6% penetration.
- **Rough math to $5M ARR:** ~R$27M — needs ~3,500–4,500 firms plus meaningful expansion revenue. Realistically this requires the second act: charging per-analysis on top of subscription, and the lender referral line below. I'd call $1–2M ARR the honest target and $5M the stretch that depends on split payment landing on schedule.
- **Expansion path:** (a) seat growth as firms add fiscal staff; (b) per-report fees for deep-dive scenario work the accountant re-bills at a markup; (c) **lender referral revenue** — this product identifies, with a number and a date, exactly which companies will need working-capital financing in 2027. That is a qualified-lead list receivables-financing fintechs will pay for, and it's the most interesting revenue line here. It must be opt-in and transparent to the accountant, or it poisons the trust the whole product runs on.
- **Margin note:** Cost per client analysis is inference-bound — the item-classification pass across a large SKU catalog is the real COGS. Batch it, cache aggressively by NCM+description, and it lands at a few reais per client analysis. Gross margin should sit above 80% once the classification cache warms across customers.

## 9. Go-to-market wedge — first 100 customers

1. **Run the calculation for them, unasked.** Public NF-e data plus company registries let me identify Lucro Presumido companies in high-DSO sectors. Pick 300 mid-size accounting firms, and for each one send a single-page PDF projecting the working-capital hit for *three of their actual named clients*, with the method shown. Not a demo request — the finished analysis. The ask: "want the other 197?" This is the whole wedge. A 5–8% conversion on 300 targeted, personalized sends is 15–24 firms.
2. **CRC and Fenacon channels.** Regional accounting councils (CRC-SP, CRC-MG, CRC-DF) and Fenacon are actively publishing reform-readiness content and running events — the 61% statistic came from this ecosystem's own reporting. Offer a free 45-minute webinar: "Calculate your clients' 2027 cash gap in 20 minutes." Accountants attend these for CPE-adjacent reasons. Two webinars per month at 80–150 attendees, converting 5%, is 8–15 firms/month.
3. **The trade-press hook.** contabeis.com.br, Jornal Contábil and the Omie/Contmatic blogs are publishing split-payment explainers weekly and are hungry for original data. Publish a study — "we ran the numbers on 1,000 real companies: the median Lucro Presumido business loses R$X of working capital in January 2027" — which is genuinely novel data I'd have from the product itself. This is how you get cited into a market where accountants read three sites.
4. **WhatsApp accountant groups.** Brazilian accountants coordinate in large WhatsApp/Telegram groups. Seed the free single-client calculator there. Free tier does one client; the portfolio triage is paid. The free calculator is the top of funnel, the triage board is the product.
5. **ERP partner referrals.** Omie, Contmatic and Domínio are consumed by emission compliance and are not building cash projection. Offer it as a complement rather than a competitor — they have the accountant distribution and a content gap to fill.

## 10. Build complexity — justification

**Low-to-Medium.** The hard parts are well-bounded: NF-e/NFS-e XML and SPED parsing (documented public schemas, existing open-source libraries), an LLM classification pass for item-level tax treatment, invoice-to-payment reconciliation for DSO, and a projection engine that is fundamentally arithmetic over a published rate calendar. No custom models, no novel infrastructure, no regulatory approval to launch, no payment processing.

The real work is in **domain correctness** — getting the transition calendar, the cClassTrib treatments and the credit mechanics right — not in engineering difficulty. That argues for a technical founder paired with a practicing contador as co-founder or first hire. A pair ships a credible v1 in 10–14 weeks. I'd call it Low complexity in engineering and High in domain, which is the ratio I want: the moat is the knowledge, not the code.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Analytical tool over data the accountant already holds with client authorization. No fiscal filing, no regulated advice. |
| Ethical — no harm / dark patterns | ✅ | Helps businesses see a real cash shock early. One caveat: lender referrals must be opt-in and disclosed, never a hidden lead-sale. |
| Market exists (evidence above) | ✅ | 633-firm survey, 61% unmapped, 68% getting client questions, explicit ERP gap. |
| 1–5 person team can build this | ✅ | Two people, 10–14 weeks. Technical + domain. |
| Launchable with <$50K / ₹40L | ✅ | ~$15–25K: two founders' time, inference costs, minimal infra. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | Real, quantified, dated pain — R$175–200K on a R$500K/mo client. Docked because the *cash* pain lands in 2027; today it's anticipatory. Accountants feel it as client pressure now, business owners feel it later. That's a 16, not a 19. |
| Demand evidence | 15 | 13/15 | Unusually strong: a 633-firm survey with hard percentages, an explicit documented ERP gap, competing free calculators proving people want the calculation. Not 15 because nobody is yet *paying* specifically for cash projection — the spend is inferred from adjacent advisory. |
| Build feasibility | 15 | 13/15 | Documented schemas, off-the-shelf inference, arithmetic core. Domain correctness is the risk, not engineering. |
| Distribution clarity | 15 | 12/15 | The run-it-for-them-unasked play is concrete and the CRC/Fenacon channels are named and real. Docked because accounting firms are slow buyers and the personalized-send motion doesn't obviously scale past a few hundred without headcount. |
| Revenue mechanics | 15 | 11/15 | R$499/mo is defensible against Brazilian firm economics and ~920 firms to $1M ARR is achievable. Docked because $5M needs the lender-referral line to work, which is unproven, and Brazilian SMB software pricing is under real downward pressure. |
| Time to first revenue | 10 | 7/10 | 10–14 weeks to v1, then accountants buy in weeks not days. Helped enormously by the deadline — but the September 2026 and January 2027 dates mean the selling window is narrow and specific. |
| Defensibility | 10 | 3/10 | **The weak axis, and I won't dress it up.** The formula is published in trade press. An ERP vendor could ship this as a feature once emission compliance stops burning. What you get is a 6–12 month head start, the accumulated cClassTrib classification cache, and the accountant relationship. Execution moat only. |
| **Total** | **100** | **75/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required`

You need someone who can parse SPED and run inference at batch scale, paired with someone who can walk into a CRC event and be taken seriously by contadores. Without the second person this fails — not on the build, but on being wrong about the transition mechanics in a way that destroys credibility on the first bad report.

### Key assumptions to validate

1. **Assumption:** Accounting firms will pay R$499/mo for portfolio-wide cash analysis rather than doing top-10 clients in Excel and calling it done. **How to test:** Take the personalized three-client PDF to 40 firms; count how many ask for the full portfolio *and* accept a price. Talk is free — get to the number.
2. **Assumption:** Real DSO is reliably derivable from NF-e/SPED data across typical client portfolios. **How to test:** Get authorized data from 5 friendly firms covering ~50 clients; compare computed DSO against the accountant's own knowledge of those clients. If it's wrong more than 20% of the time, the whole projection is unsellable.
3. **Assumption:** Split payment actually starts in 2027 on something like the current schedule. **How to test:** Track Receita Federal and Comitê Gestor publications monthly. Sources already note it may phase in by segment, may slip to H2 2027 or 2028. A slip doesn't kill the product but it flattens urgency, which is most of the sales energy.
4. **Assumption:** ERP vendors stay focused on emission compliance through 2027 rather than shipping cash projection. **How to test:** Watch Omie/Contmatic/Domínio release notes quarterly. Their entry compresses the window hard.

### Risk flags

1. **Regulatory timing risk:** Split payment's start date and phasing are genuinely unsettled — segment-by-segment rollout, possible slip to late 2027 or 2028. The product still works, but urgency is the sales engine and a delay drains it.
2. **Platform/incumbent dependency:** An ERP vendor with existing accountant distribution can bolt this on as a feature. The 6–12 month window is the entire opportunity; this is not a business you build slowly.
3. **Data access friction:** Requires client-authorized fiscal data. Accountants hold it, but per-client consent across a 200-client portfolio is real operational drag and a privacy surface (LGPD) that must be handled properly from day one.
4. **Advisory liability:** If a client makes a financing decision on a projection that's wrong, the accountant's name is on the report. Disclaimers, showing the method transparently, and letting the accountant override inputs are product requirements, not legal afterthoughts.
5. **Commoditization:** Free calculators already exist. The defense is portfolio scale and real invoice data, not the formula — and that defense must be obvious in the first 60 seconds of the product or prospects will assume it's the same thing.

## 14. Structured verdict

```
Score:                  75/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder who can parse SPED/NF-e at scale, paired
                        with a practicing Brazilian contador who has CRC-network
                        credibility. Solo technical founder without the domain half
                        will ship something plausible and wrong.
Time to revenue:        10–14 weeks to v1; first paying firm within 4–6 weeks after
Capital to launch:      R$80,000–130,000 ($15–25K)
Top 3 assumptions to validate first:
  1. Firms pay R$499/mo for portfolio analysis — take the 3-client PDF to 40 firms,
     count who asks for the full portfolio AND accepts a price
  2. DSO is derivable from NF-e/SPED — test against 5 firms' ~50 clients, compare
     computed vs. accountant's own knowledge, require <20% error
  3. Split payment holds its 2027 date — track Receita Federal / Comitê Gestor
     publications monthly
Kill criteria:
  - Abandon if <8 of 40 personalized-PDF firms request the full portfolio analysis
  - Abandon if computed DSO diverges >20% from accountant ground truth on the
    50-client test set
  - Abandon if Omie, Contmatic or Domínio ships portfolio cash projection before v1
  - Deprioritize (don't kill) if split payment slips past 2028 — the thesis holds,
    the urgency doesn't
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Build the calculation by hand, no product. Take real NF-e data from 3 companies (via one friendly accountant) and produce three finished one-page PDFs: monthly billing, computed DSO, working-capital gap, month-by-month 2027 curve. Prove the number is derivable and that it survives an accountant's scrutiny.
- **Day 3–4:** Send those PDFs cold to 40 accounting firms in SP and MG — each containing the analysis for three of *their* named clients. Not a pitch deck. The finished work. Single ask: "want the other N clients in your portfolio?"
- **Day 5:** Count. **Go if ≥8 of 40 firms (20%) request the full portfolio analysis and ≥3 of those accept a price of R$499/mo when quoted.** Below that, either the accountant doesn't feel this is their job or the deadline is too distant to move money — and both mean waiting until mid-2027, when the pain is present tense and the market is obvious to everyone including the ERP vendors.

The failure mode to watch for: firms replying "interesting, send more info." That's a no. Only a request for their actual portfolio counts as signal.
