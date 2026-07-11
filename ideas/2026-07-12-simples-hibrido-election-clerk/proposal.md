---
title: "RegimeCall — Simples híbrido election clerk for accountants"
slug: simples-hibrido-election-clerk
date: 2026-07-12
category: Compliance / Brazil — Accounting Firms with Simples Nacional Portfolios (IBS/CBS hybrid-regime election, Sept 2026)
complexity: Medium
score: 78
verdict: GO
confidence: Medium
oneLiner: "Runs every Simples client's invoice history and tells the accountant which ones must leave the DAS before September 30."
tags:
  vertical: Compliance
  model: SaaS
  geography: LATAM
  secondary: [Compliance-driven, AI-agent, SMB, Accounting-firm, Deadline-driven, Portuguese]
axes:
  problem: 17
  demand: 13
  build: 11
  distribution: 13
  revenue: 11
  time: 8
  defensibility: 5
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# RegimeCall

## 1. One-liner

Runs every Simples client's invoice history and tells the accountant which ones must leave the DAS before September 30.

## 2. Trend signal — why now?

Brazil's tax reform just handed 101,000 accounting firms a homework assignment with a hard due date and no way to skip it.

Resolução CGSN nº 186/2026 opened a one-time window — **1 to 30 September 2026** — in which every Simples Nacional company must declare whether it will keep paying IBS and CBS inside the unified DAS, or collect them separately under the regular regime ("Simples híbrido"), effective 1 January 2027. There is a cancellation escape hatch until 30 November 2026, and then the choice is locked for the year.

Three things make this urgent rather than merely interesting:

**It is not opt-in — it is opt-out.** Do nothing and the company is automatically kept in traditional Simples. Silence is a decision, and it's a decision the accountant made on the client's behalf without looking. Every Simples client in a firm's book gets a regime assigned this September whether anyone ran the numbers or not.

**The wrong answer costs real money in both directions.** Stay in the DAS and your B2B customers get only a *reduced* credit — a Lucro Real buyer comparing two identical quotes will quietly re-source to the supplier who passes full credit. Jump to híbrido when you shouldn't and you volunteer for a higher tax bill plus a pile of new compliance work. One source puts the swing at **5–15% of effective tax burden**.

**The experts openly disagree, which means nobody can safely wing it.** e-Auditoria, running real client data, reports roughly **40% of analyzed cases** favor the hybrid model. Razonet ran its own simulations and published the opposite conclusion under the headline *"a conta não fecha"* — arguing service firms, B2C retail, and most small B2B companies are all worse off, with one simulated company facing R$575.65/month in extra CBS, 93% above pure Simples. Both are credentialed professionals reading the same law. When the pros contradict each other this hard, the only defensible answer is *this specific client's own invoice data* — which is exactly the thing no one has time to compute 200 times in 30 days.

And the workload is brutal. The trade press is blunt about it: an accounting firm "cannot perform this analysis individually for each client within a reasonable timeframe using manual methodology," with manual effort benchmarked at roughly **a week of work per client**. Firms with 100+ Simples clients are being told the clock is already tight.

Provenance:
  - Signal 1 (Demand): Resolução CGSN 186/2026 forces every Simples Nacional company to elect its IBS/CBS regime in a 1–30 Sept 2026 window; doing nothing auto-locks them into traditional Simples; accounting firms with 100+ Simples clients cannot analyze them manually in time (~"a week of work per client") — https://www.contabeis.com.br/artigos/77909/simples-nacional-opcao-ibs-cbs-em-setembro-de-2026/ + https://www.e-auditoria.com.br/blog/regime-hibrido-simples-nacional-ibs-e-cbs-das/ — July 2026
  - Signal 2 (Feasibility): The entire decision is computable from documents the firm already holds — incoming/outgoing NF-e XMLs plus the PGDAS — from which supplier/customer tax regimes, NCM classification, and credit chains can be derived automatically — https://www.e-auditoria.com.br/blog/simulacao-ibs-e-cbs-simples-nacional/ — July 2026
  - Signal 3 (Economic): The election swings effective tax burden by 5–15%; ~23M Simples companies and ~101K–117K accounting firms are in scope; incumbent tools (e-Auditoria, é-Simples Auditor) sell only via "fale com especialista" with no public self-serve pricing, leaving the long tail of small firms unserved — https://www.contabeis.com.br/artigos/76673/simples-nacional-decisao-sobre-ibs-e-cbs-em-setembro/ + https://www.esimplesauditoria.com/precos — July 2026
  Category: Regulatory arbitrage

## 3. The opportunity

Everyone is building a **simulator**. I want to build the **working paper**.

The simulators answer "what would the tax be under each regime?" That's the easy half, and e-Auditoria already does it. The half nobody has productized is what the accountant actually needs to survive this: a per-client, dated, signed, defensible **election file** that answers *which regime, why, on what evidence, and who approved it* — and does it across a whole portfolio in one pass.

The Brazilian accounting press has already spelled out the exact contents of the defense package. When a client later says *"você não me avisou que era melhor optar pelo regime regular"* — you didn't warn me the regular regime was better — or when a fiscal audit asks whether the option was made on a technical basis or at random, the accountant's only shield is the working paper. The recommended minimum: client profile classification (B2C/B2B/mixed) with justification, a comparative numerical simulation with explicit premises, the firm's technical recommendation dated and signed by the responsible professional, the client's decision formalized by email or minutes, and proof of the option (or of the deliberate non-option) in the Simples Portal.

That is a document-generation problem wrapped around a calculation — and it is worth far more to the buyer than the calculation alone, because it's the part that protects *them*, not just their client.

The incumbents' second weakness is commercial. e-Auditoria and é-Simples Auditor both hide pricing behind a sales conversation; é-Simples states outright that it doesn't publish prices because plans depend on the client and the CNPJ count. That's an enterprise motion aimed at the big firms. Brazil has 101,000+ accounting firms and the overwhelming majority are small shops with a few dozen to a few hundred clients, a September deadline, and no appetite for a discovery call. Self-serve, priced per CNPJ, live this month, wins that tail.

The window is the whole business. This is a product with a birthday and, in its first form, a funeral: the election closes 30 September, the cancellation window shuts 30 November. That sounds like a fatal flaw and it's the reason I nearly killed it — see section 13. It isn't, because the reform doesn't end in 2026; it *starts* there. But the wedge has to be swung now.

## 4. Target market

- **Primary customer:** Owner or fiscal lead of a small-to-mid Brazilian accounting firm (*escritório contábil*) with **40–400 Simples Nacional clients**. Concentrated in the Southeast, which holds more than half of all Brazilian accountants. These are 3–20 person shops, not Big Four.

- **Why they buy:** Because September is coming and they have no defensible way to advise 200 clients at once. Their two fears, in their own framing from the trade press: (a) the client who later says *"you didn't warn me"*, and (b) the auditor who asks whether the election had a technical basis or was random. They also have a commercial motive — this is a *consultoria* they can bill for, and the sector's own publications are actively pushing firms to be "mais consultor e menos digitador" (more advisor, less data-entry clerk). A tool that turns one file upload into a billable client deliverable is a margin story, not a cost.

- **Rough TAM reasoning:** ~101,000–117,000 active accounting firms in Brazil (CFC / Econodata), against ~18–23 million Simples Nacional companies. I don't need most of them. I need a few thousand small firms to pay for one deadline.

- **Why now for them:** The election window opens in roughly seven weeks and closes 30 September 2026. There is no version of this where they defer it to next quarter. It is, per one framing, "perhaps the most relevant operational event in the tax calendar over the next twelve months" for any firm with a Simples portfolio.

## 5. Product sketch (MVP)

- **Portfolio upload.** Drop in the NF-e XMLs (entrada + saída) and the PGDAS for each client — files the firm already has sitting in its systems. No new data collection, no client questionnaires.
- **Automatic client profiling.** Reads the invoice history and derives what actually matters: share of revenue from PJ vs PF, the tax regime of each *customer* (does this buyer even want a credit?), the tax regime of each *supplier*, input-credit volume, NCM mix, and margin profile.
- **The call, per client.** A clear recommendation — stay in the DAS, or go híbrido — with the numbers behind it and the premises stated explicitly. Not a dashboard. A verdict.
- **Portfolio triage view.** The whole book ranked: the 12 clients where the answer is *obviously* híbrido, the 150 where it's *obviously* stay, and the 30 in the grey zone that deserve a partner's eyeballs. That ranking is the entire value in September — it tells the firm where to spend its scarce human hours.
- **The election working paper.** One PDF per client, generated: profile classification with justification, side-by-side simulation with premises, the firm's dated technical recommendation with a signature block, and a client sign-off page. This is the artifact that defends the accountant later.
- **Client-facing one-pager.** A plain-Portuguese explainer the accountant sends to the business owner so the owner can actually decide — and formalize the decision by email, as the guidance recommends.
- **Deadline tracker.** Which clients have been analyzed, which have signed off, which have been formally elected in the portal, which are still silent — counted down against 30 Sept and the 30 Nov cancellation date.

## 6. AI angle — what's load-bearing

Strip the AI out and this product dies, but not at the arithmetic — the arithmetic is deterministic and should stay that way. **I do not want a language model computing anyone's tax.** The comparison of the two regimes must be an auditable calculation the firm can defend line by line.

The AI is load-bearing in three places where the work is genuinely messy:

**Counterparty regime inference.** The single variable that decides this election is *whether your customers can use the credit you'd generate*. Nothing in the XML says "this buyer is Lucro Real and hungry for credits." It has to be inferred from CNPJ, CNAE, invoice patterns, size signals, and the fiscal fields actually present — across thousands of counterparties per client. That's a classification job at a scale no human does by hand.

**Reconciling a mess.** Real firms hand over inconsistent XML dumps, missing months, PDFs where XML should be, and PGDAS files that don't tie out to the invoices. Getting from "a client's chaotic document pile" to "a clean, comparable operating profile" is the actual work, and it's the reason the manual version takes a week per client.

**Writing the defensible paper.** The output is a technical opinion in Portuguese, with the premises articulated, tailored to that client's specific situation, that a professional will put their signature on. Generating 200 of those — each genuinely reasoned rather than mail-merged — is a language problem.

So: deterministic engine for the money, models for the mess and the prose. If I let those two swap places, the product is negligent.

## 7. Localization angle

This *is* the localization. It exists only in Brazil, only because of LC 214/2025 and Resolução CGSN 186/2026, and it is unbuildable by anyone who hasn't read them.

Everything is local: the document formats (NF-e XML, PGDAS), the language (Portuguese, and specifically the register of a technical accounting opinion), the professional norms (the *papel de trabalho* as liability defense is a Brazilian accounting convention), and the deadline itself. A generic global "tax scenario simulator" is worth precisely zero here. The regulation *is* the product.

Pricing localizes too. Brazilian small accounting firms will not pay US SaaS prices, but they will pay per-CNPJ for something that turns into a billable client deliverable — which is exactly how the incumbents already meter (é-Simples explicitly scales pricing by CNPJ count, 3 to 300+). I follow that meter, but publish the number.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** Per-CNPJ analyzed, sold in portfolio packs, self-serve, no sales call.
  - **Starter:** R$ 490 for 25 client analyses
  - **Escritório:** R$ 1,490/mo for 150 client analyses + working papers
  - **Rede:** R$ 3,900/mo for 500+ and multi-office
  - Roughly **R$ 10–20 per CNPJ analyzed** — trivially rebillable, since the firm charges the client a *consultoria* fee for this decision.
- **ACV:** ~R$ 12,000–18,000/yr for a typical Escritório-tier firm (~USD 2,200–3,300).
- **Rough math to $1M ARR:** ~350 firms on Escritório at R$1,490/mo ≈ R$ 6.3M/yr ≈ **USD 1.15M**. Three hundred and fifty firms out of 101,000 is a **0.35% penetration** of the market. That is the entire ask.
- **Rough math to $5M ARR:** ~1,400 firms, or ~700 firms at double the ACV once the platform carries the recurring 2027+ obligations (below). Requires the product to survive past the September event — which is the central bet.
- **Expansion path — and this is the part that decides whether the company exists in 2028:** The September election is the *wedge*, not the business. Everything behind it is recurring and worse:
  - The **cancellation window** (through 30 Nov 2026) — a second decision, on real post-election data.
  - The **half-year re-election mess.** CGSN 186/2026 created an option covering only Jan–Jun 2027, with a *normative vacuum* for Jul–Dec 2027 that lawyers are already flagging as legally contested. That's not a bug in my roadmap; it's a recurring re-decision the regulator has accidentally guaranteed.
  - **Split payment.** From 2027, IBS/CBS get withheld automatically at financial settlement — the supplier receives only the net. Suppliers will need to verify their credits were actually applied at withholding, and chase the 3-business-day refund when over-collected. The law sets the deadline but, per legal commentary, doesn't specify the mechanism. Same customer, same data, permanent pain.
  - The full CBS/IBS transition runs **2027 through 2033**. This election is the first of many.

  The honest read: this is a business that must earn its second act. Section 13 treats that as the primary risk, not a footnote.

## 9. Go-to-market wedge — first 100 customers

The deadline does the selling. My job is to be standing in front of the accountant during the eight weeks they are panicking, with something that works today.

1. **Buy the panic keyword, now.** Brazilian accountants are searching *"regime híbrido Simples Nacional"*, *"vale a pena optar"*, *"prazo setembro 2026"* this week — the trade press has been hammering it since April. The organic results are all blog posts that explain the problem and then say *fale com um especialista*. I want the one result that says *upload your XMLs, get the answer in an hour, R$490*. Google Ads on those exact terms plus a landing page that converts on urgency. This channel is expensive, temporary, and worth it — the window is short and the intent is the highest-intent traffic in Brazilian accounting all year.

2. **Free portfolio triage as the hook.** The offer: upload one client's XMLs, get the full analysis and working paper free. The accountant sees the artifact — signed, dated, defensible — and immediately understands they need 199 more of them in the next six weeks. Conversion from "saw the deliverable" to "bought the pack" is the whole funnel. If that conversion is bad, the idea is dead and I'll know in two weeks (see section 15).

3. **Ride the contadores media that is already screaming about this.** Contábeis, Jornal Contábil, Contadores.cnt.br, CRC regional bodies and the accounting-influencer layer (Anderson Hernandes and peers) are *already* publishing "the framework every firm must build now" pieces. They need tools to point at. Offer them the analysis engine free for their own client book plus an affiliate cut. This is a niche with a dense, identifiable, already-mobilized media layer — that's rare and I should exploit it.

4. **Target the firms directly.** Accounting firms are trivially enumerable in Brazil — CRC registries and commercial databases (Econodata lists 117K) give me name, city, size. Cold outreach with a subject line that is just the deadline and a number: *"Quantos dos seus clientes do Simples precisam sair do DAS até 30/09?"* — most firm owners genuinely do not know the answer, and that's an uncomfortable enough question to open the email.

5. **Sell the liability, not the calculation.** The pitch to the firm owner is not "save time." It's: *when your client asks in 2028 why you left them in the DAS, what will you show them?* The working paper is the answer. Fear of the client's lawyer converts better than the promise of an afternoon saved.

## 10. Build complexity — justification

**Medium.** The regime comparison itself is deterministic arithmetic over well-specified rules — a competent developer with a good tax advisor can build it. XML parsing of NF-e is a solved, documented format with mature open libraries. The AI work (counterparty regime inference, messy-document reconciliation, opinion drafting) sits on off-the-shelf models.

What makes it Medium rather than Low is that **correctness is the product**. This is tax advice with a signature block on it; a wrong calculation isn't a bug, it's a professional liability event for your customer. That demands a real accountant in the loop during build, a test suite of hand-verified client scenarios, and genuine care about auditability. Budget **8–10 weeks** for a pair — but you don't have 8–10 weeks, you have until the window opens. Realistic play: ship the triage + calculation engine in ~5 weeks to catch August, and the full working-paper generator two weeks behind it.

The hard constraint isn't the code. It's finding the domain partner in week one.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Decision-support and document generation for licensed professionals. The accountant signs and takes responsibility — the tool never files or advises the taxpayer directly. |
| Ethical — no harm / dark patterns | ✅ | Improves the quality and auditability of advice small businesses receive. The deterministic-engine choice (§6) is itself the ethical guardrail. |
| Market exists (evidence above) | ✅ | Hard regulatory deadline, ~101K firms in scope, funded incumbents already selling adjacent tools. |
| 1–5 person team can build this | ✅ | Two builders plus a contador as domain partner. |
| Launchable with <$50K / ₹40L | ✅ | Main cost is paid search during the window, plus the domain advisor. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 17/20 | Hard statutory deadline, money on both sides of the wrong answer (5–15% of tax burden), and personal liability for the buyer. Not 18+ only because the Nov 30 cancellation window softens the panic slightly — a rushed decision is partly recoverable. |
| Demand evidence | 15 | 13/15 | Multiple independent signals: the regulation itself, funded incumbents (e-Auditoria) building the adjacent tool, and a trade press actively telling firms they cannot do this manually. Docked for having no direct verbatim accountant complaint — the evidence is from trade publications and vendors, not raw customer voice. I want that from real interviews before I'd call it 15. |
| Build feasibility | 15 | 11/15 | Deterministic core + mature XML formats + off-the-shelf models. But correctness carries liability, it needs a domain expert in the loop, and the calendar is genuinely tight. |
| Distribution clarity | 15 | 13/15 | Named channel, enumerable customer list, a deadline that generates the intent for me, and a mobilized trade-media layer already covering the story. Docked because paid search in a panic window is expensive and CAC is unproven. |
| Revenue mechanics | 15 | 11/15 | Pricing is benchmarked to how incumbents already meter (per-CNPJ), and the fee is trivially rebillable by the firm. But $1M ARR assumes the product converts a one-time event into a subscription, which is exactly the untested assumption. |
| Time to first revenue | 10 | 8/10 | Revenue is plausible within 4–6 weeks of launch because the deadline forces the purchase. Not 9–10 because the product must exist before August to catch the window at all. |
| Defensibility | 10 | 5/10 | Honest score. The regulatory knowledge and the working-paper format are a real head start, and accumulated portfolio data creates switching cost by 2027. But a well-funded incumbent can copy the calculation in a quarter. This is an execution-and-speed moat, not a structural one, and I refuse to pretend otherwise. |
| **Total** | **100** | **78/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required`

This does not work without a Brazilian accountant as a genuine partner — not an advisor you call twice, a co-builder. A foreign solo dev cannot ship this correctly, and shipping it *incorrectly* is worse than not shipping.

### Key assumptions to validate (3–5)

1. **Assumption:** Small firms will pay real money for portfolio-scale analysis rather than eyeballing it or letting the deadline pass in silence. **How to test:** 30 firm-owner calls in one week; ask what they've *already* done about September. If most say "we'll handle it client by client" and mean it, the workload pain is smaller than the trade press claims.
2. **Assumption:** The working paper — not the calculator — is what they're buying. **How to test:** Show 20 firms two mockups, calculator vs. signed defense file, and ask which they'd pay more for. If they shrug at the working paper, my whole differentiation from e-Auditoria collapses and this becomes a feature war I lose.
3. **Assumption:** Counterparty tax regime can be inferred accurately enough from invoice data to drive a recommendation someone will sign. **How to test:** Take three real client XML sets, infer buyer regimes, and have a contador verify against ground truth. **Below ~90% and the product is not safe to ship** — the entire recommendation pivots on this variable.
4. **Assumption:** A meaningful share of clients actually *should* switch. **How to test:** Run 50 real client datasets. e-Auditoria says ~40% favor hybrid; Razonet says essentially nobody does. If Razonet is right and the answer is "stay in the DAS" ~98% of the time, the recommendation is nearly constant — and a tool that always says the same thing is worth much less. This is the assumption I'd test *first*, because it's the one that can quietly gut the value prop while every other number looks fine.

### Risk flags

1. **Event risk — the elephant.** The core wedge expires on 30 September 2026, with a stay of execution to 30 November. Build a company on one deadline and you have a fireworks display, not a business. The expansion path (§8) is real — the Jul–Dec 2027 normative vacuum, split-payment credit verification, a transition running to 2033 — but on launch day it is a *plan*, not revenue. **Treat the September money as funding for act two, not as the business.** If the second act isn't credible to you, take the cash and don't pretend otherwise.
2. **Regulatory risk, unusually sharp.** CGSN 186/2026 is *itself* being challenged — lawyers argue the committee exceeded its authority in creating the semi-annual option, conflicting with the irrevocable-annual-election rule in LC 123/2006. The rules of the very election I'm selling analysis for could shift, or the dates could move. That cuts both ways: churn in the rules also means churn in demand for someone who tracks them.
3. **Liability risk.** I'm generating a document a licensed professional signs. Get the arithmetic wrong at scale and you've manufactured a few hundred defective professional opinions. This demands the deterministic engine, the accountant in the loop, and clear contractual positioning as decision *support*. Do not get cute here.
4. **Incumbent risk.** e-Auditoria is already in this exact space with the exact data pipeline, and is publishing thought leadership on it. If they ship self-serve pricing and a working-paper generator before September, my differentiation evaporates. Speed is the only defense.
5. **Channel-cost risk.** My best channel is paid search in an eight-week window against a national panic. That auction gets ugly. If CAC exceeds ~R$1,500 per firm, the Starter tier stops making sense and I'm buying revenue at a loss.

## 14. Structured verdict

```
Score:                  78/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder paired with a practicing Brazilian contador as co-builder
Time to revenue:        4–6 weeks from launch (deadline-forced); must launch before August 2026
Capital to launch:      R$ 60–100K (~USD 11–18K) — mostly paid search in the window + domain partner
Top 3 assumptions to validate first:
  1. Run 50 real client datasets — if "stay in the DAS" is the answer >95% of the time, the
     recommendation is near-constant and the value prop is much thinner than it looks. Test this FIRST.
  2. Counterparty tax-regime inference must hit ~90%+ against a contador's ground truth on 3 real
     client XML sets, or the signed recommendation is unsafe to ship.
  3. 30 firm-owner calls: is the working paper (liability defense) worth more to them than the
     calculator (time saved)? The answer determines whether I can beat e-Auditoria on anything.
Kill criteria:
  - Abandon if the free-analysis-to-paid-pack conversion is <5% across the first 200 firms that
    upload a client — the deadline is supposed to do the selling; if it doesn't, nothing will.
  - Abandon if real-data runs show >95% of Simples clients should simply stay in the DAS (Razonet's
    thesis) — the recommendation collapses to a constant and firms will not pay per-CNPJ for it.
  - Abandon if e-Auditoria ships self-serve per-CNPJ pricing with a working-paper generator before
    1 September 2026.
  - Do NOT start this after 1 September 2026. The wedge is gone and only the harder second act remains.
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Get a contador. Not a consultant — a partner with a real Simples book. Without this, stop; nothing below is executable. In parallel, obtain 3 real anonymized client datasets (NF-e XMLs + PGDAS).
- **Day 3–4:** Hand-run the analysis on those 3 clients, plus ~20 more datasets if the partner can source them. Two outputs: (a) how often the answer is actually "go híbrido" — this is the assumption that can kill the idea quietly; (b) whether buyer tax regime can be reliably inferred from the invoice data alone. Build nothing yet.
- **Day 5:** Put the resulting working paper — one real client, signed format — in front of **20 firm owners**. Not a mockup of a dashboard. The actual defense document. Ask one question: *would you pay R$1,490/month to have this for your whole book before September 30?*
- **Decide on:** ≥6 of 20 say yes **and** the hybrid recommendation fires on ≥15% of real client datasets **and** counterparty inference clears 90%. All three, or walk.

The falsifiable result is that middle condition, and it's the one I most expect to fail. If real Brazilian invoice data says almost every Simples company should just stay in the DAS, then Razonet is right, the "decision" is theater, and there is no product here — no matter how loudly the trade press is shouting about September.
