---
title: "GlosaGiro — denial-recovery autopilot for Brazilian clinics"
slug: brazil-glosa-denial-recovery
date: 2026-06-17
category: HealthTech / Brazil-SMB
complexity: Medium
score: 75
verdict: GO
confidence: Medium
oneLiner: "Reads every convênio denial, drafts the appeal, and chases the money back before the deadline closes."
tags:
  vertical: HealthTech
  model: SaaS
  geography: LATAM
  secondary: [Compliance-driven, AI-agent, SMB, Multilingual]
axes:
  problem: 16
  demand: 12
  build: 11
  distribution: 11
  revenue: 12
  time: 8
  defensibility: 5
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# GlosaGiro

## 1. One-liner

Reads every convênio denial, drafts the appeal, and chases the money back before the deadline closes — for small Brazilian clinics.

## 2. Trend signal — why now?

Every clinic in Brazil that bills a health plan loses money to **glosas** — line items the operadora (insurer) refuses to pay. Sector studies put the loss at **3–7% of monthly revenue** (Support Health, AppHealth). The kicker: **25–50% of contested glosas get recovered** when a clinic actually files a proper *recurso de glosa* (Rivio, Conclínica). Most small clinics don't — the process is "demorado e burocrático," done in spreadsheets, against a 30–90 day clock, by a receptionist who isn't a billing specialist. So the money just evaporates.

Three things make this the right moment:

1. **The denial data is now machine-readable.** The TISS standard (mandatory since 2012, regulated by ANS) means every operadora returns a structured XML *demonstrativo* with denial reasons coded against **Tabela 38** — a fixed ANS vocabulary of glosa/negativa codes. The cause of every denial is sitting in a parseable field.
2. **LLMs can now do the specialist's job cheaply.** Mapping a Tabela 38 code → the actual fix → a contract-cited appeal letter is exactly the pattern-matching a R$8k/mo billing analyst does by hand. Inference is cheap enough to run on every denied guia.
3. **The money is enormous and moving.** Operadoras paid **R$275B to providers in 2025** (ANS). Even 3% glosa = ~R$8B contested/year. There are 668 active operadoras and 53M+ beneficiaries — a clinic deals with denials *every billing cycle*.

Provenance:
  - Signal 1 (demand): Sector studies cite 3–7% of clinic monthly revenue lost to glosas; 25–50% recoverable when appealed; small clinics hire specialist firms because the manual recurso is slow and bureaucratic — https://www.apphealth.com.br/glosas-medicas-como-reduzir , https://www.rivio.com.br/blog/recurso-de-glosa — 2026-06-17
  - Signal 2 (feasibility): TISS standard mandatory since 2012; denial reasons coded against ANS Tabela 38 in structured XML demonstrativos — https://www.ans.gov.br/prestadores/tiss-troca-de-informacao-de-saude-suplementar , https://centralsaudecaixa.com.br/wp-content/uploads/2018/04/Tabela-38-Terminologia-de-mensagens-glosas-negativas-e-outras.pdf — 2026-06-17
  - Signal 3 (economic): Operadoras paid R$275B to providers in 2025; 53.2M medical-plan beneficiaries; 668 active operadoras; specialist consultancies (GSINCONT, Nagata & Gasparini, Evolur) already sell paid glosa-recovery services — https://www.conjur.com.br/2026-jun-12/brasil-tem-668-operadoras-de-plano-de-saude-e-53-milhoes-de-beneficiarios/ , https://gsincont.com.br/ — 2026-06-17
  Category: Geographic arbitrage

## 3. The opportunity

Glosa recovery in Brazil is split between two bad options:

- **Bundled ERP feature.** iClinic, Conclínica, Amplimed, Shosp all do "faturamento TISS" and have a glosa-control screen. But it's a passive ledger — it shows you the denials, it doesn't *fight* them. You still write the recurso yourself. It's feature #14 in a 14-feature suite, and nobody at the vendor wakes up thinking about appeal quality.
- **Specialist consultancies** (GSINCONT, Nagata & Gasparini, Evolur). They do fight glosas — and take a cut or a fat retainer, and they're aimed at hospitals and big clinics, not the 3-doctor cardiology practice.

The gap: a **standalone, AI-first tool that does the appeal**, sells for a flat monthly fee a small clinic can stomach, and works *regardless of which ERP they already use* — because it ingests the TISS demonstrativo XML the operadora sends back, not the ERP's internal data. You're not asking them to switch systems. You're asking them to forward a file and get money back. That's a 10× better wedge than "rip out your practice-management software."

## 4. Target market

- **Primary customer:** Owner-operator of a small private clinic or consultório in Brazil that bills convênios — 1–10 providers. Cardiology, ortho, derm, dental, diagnostic imaging, physiotherapy. The person who signs is the dono/sócio or the gerente administrativo.
- **Why they buy:** In their words — glosas "atrapalham o fluxo de caixa, aumentam o retrabalho e afetam a previsão de faturamento." They know money is being left on the table; they just don't have a specialist on payroll to chase it, and the recurso deadline (30–90 days) passes.
- **Rough TAM reasoning:** Brazil has tens of thousands of clinics/consultórios billing convênios (53M+ beneficiaries served by a credentialed-provider network). Conservatively, 100k+ provider entities touch TISS billing. Even 1% adoption at R$349/mo ≈ R$4.2M MRR territory. We don't need national scale — a few thousand clinics is a great business.
- **Why now for them:** Margins are squeezing, e-invoicing/TISS versions keep tightening, and "contratar empresa especializada" is expensive. A flat-fee tool that pays for itself in one recovered guia is an easy yes.

## 5. Product sketch (MVP)

- **Drop-in denial ingest:** clinic uploads (or auto-forwards) the operadora's TISS demonstrativo XML. We parse every denied line and its Tabela 38 code.
- **Denial triage:** each glosa classified as *recoverable / fix-and-resubmit / lost cause*, with the specific reason in plain Portuguese.
- **One-click recurso drafting:** AI generates the appeal letter per denial — citing the procedure, the TUSS code, the contract clause, and the supporting docs needed — ready to send.
- **Deadline radar:** countdown per denial against the operadora's contestation window; nag before it closes.
- **Recovery dashboard:** R$ denied vs R$ recovered, by operadora and by denial reason — so the clinic sees the leak and the plug.
- **Prevention loop:** flags the recurring denial causes (e.g. one doctor keeps fat-fingering a TUSS code) so future billing stops generating the same glosa.
- **Per-operadora playbooks:** templates tuned to the quirks of the biggest plans (Unimed, Bradesco, SulAmérica, Amil).

## 6. AI angle — what's load-bearing

Remove the AI and this is a glorified spreadsheet — which is exactly what clinics already abandon. The load-bearing AI work:

1. **Reason → remedy mapping.** A Tabela 38 code is terse and ambiguous in practice; the *real* cause (missing authorization, code mismatch, contract interpretation) takes judgment. The model reads the denial + the original guia + the contract terms and infers the actual fix.
2. **Appeal drafting.** Writing a persuasive, contract-cited recurso per denial is the work a paid billing analyst does. The model drafts it in seconds, in the operadora's expected format.
3. **Pattern detection across cycles.** Surfacing which denial causes repeat and why — that's the prevention value that makes it sticky.

This is a "collapse a 2-hour specialist task into 2 minutes" play. AI is the product, not a chatbot bolted on.

## 7. Localization angle

This is **inherently Brazil-only and that's the moat**. TISS, TUSS, Tabela 38, the ANS regulatory frame, the operadora contract conventions, the Portuguese-language recurso format — none of it generalizes. A global "claim appeal" tool cannot serve this without rebuilding for Brazil's payer system from scratch. Pricing in R$ at a flat tier a small clinic affords (vs the % cut or retainer the specialist firms charge) is the wedge. Distribution is WhatsApp- and Portuguese-content-native.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** R$349/mo base per clinic (up to N denied guias), R$649/mo for higher volume / multi-unit. Benchmarked against ERP pricing of R$99–299/mo per professional — we're priced as a *cash-recovery* tool, not a utility, and still cheaper than a specialist retainer.
- **ACV:** ~R$4,200–7,800/clinic/year (~$750–1,400).
- **To R$1M ARR (~$1M):** ~1,300 clinics at R$349/mo. Out of 100k+ TISS-billing entities, that's ~1.3% — very reachable.
- **To R$5M ARR:** ~6,000 clinics, or fewer with the higher tier + a performance-fee option (small % of recovered value) for clinics that prefer success-based pricing.
- **Expansion path:** success-fee upsell on large recoveries; per-unit pricing for clinic chains; a "prevention" premium tier; later, a denial-rate benchmark report sold back to clinics ("you're glosa-ing 2× the category average on imaging").

## 9. Go-to-market wedge — first 100 customers

- **Conselhos & specialty WhatsApp/Telegram groups.** Brazilian doctors cluster in dense professional groups by specialty and city. Seed 20–30 with a 60-second screen-recording: "upload your demonstrativo, watch it find R$X you can still recover." Free first-recovery as the hook.
- **The contador/billing-consultant channel.** The accountants and faturamento consultants who already serve clinics are the trusted referrer. Offer them a rev-share to bring clients — they keep the relationship, we do the appeals. (Note: these firms are also the competitor — frame as "we handle the small clinics you can't profitably serve.")
- **Free "glosa audit."** Cold-outreach to clinics: send us last month's demonstrativo, get a free report of recoverable R$ and the appeals pre-drafted. Pay to actually file them. The report *is* the demo and the ROI proof in one move.
- **Specialty-specific landing pages + content** in Portuguese targeting "recurso de glosa [especialidade]" — high-intent, low-competition long-tail.

If a clinic sees real R$ in the free audit, the close is short. The first 100 come from groups + the audit funnel.

## 10. Build complexity — justification

**Medium.** Off-the-shelf: LLM APIs, standard web stack, document generation. Custom work: a robust TISS XML parser across versions (3.04/3.05/current) and operadora quirks, the Tabela 38 reason→remedy knowledge base, and per-operadora appeal templates. None of it is research-grade — the spec is public — but it's fiddly integration and domain-encoding work. A pair with a Brazilian billing-domain advisor ships a credible v1 in ~3–4 months.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Filing a recurso de glosa is the provider's contractual right; we draft, the clinic submits. |
| Ethical — no harm / dark patterns | ✅ | Recovers money legitimately owed for services rendered. |
| Market exists (evidence above) | ✅ | Paid specialist firms + bundled ERP features prove demand. |
| 1–5 person team can build this | ✅ | Pair + domain advisor, ~3–4 months. |
| Launchable with <$50K / ₹40L | ✅ | Software only; public TISS spec; no data licensing. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | Direct cash loss every billing cycle, against a hard deadline. Hair-on-fire for cash flow, but it's a known, tolerated leak — not a fire alarm. |
| Demand evidence | 15 | 12/15 | Multiple signals: sector loss studies, paid specialist firms, bundled ERP features. Strong, though raw verbatim clinic complaints are thin (mostly vendor/analyst sources). |
| Build feasibility | 15 | 11/15 | Public spec, off-the-shelf AI, but TISS-version + operadora-quirk parsing is real integration work. |
| Distribution clarity | 15 | 11/15 | Free-audit funnel + specialty groups are concrete; conversion uncertain and consultant channel is also the competitor. |
| Revenue mechanics | 15 | 12/15 | Clear ROI pricing benchmarked to ERPs and specialist retainers; success-fee optionality. Churn risk if recovered $ is lumpy. |
| Time to first revenue | 10 | 8/10 | Free audit → paid filing is a short cycle; acute, money-on-the-table pain. |
| Defensibility | 10 | 5/10 | Domain knowledge + per-operadora playbooks + accumulating denial data compound, but an ERP incumbent could prioritize this. Execution/focus moat. |
| **Total** | **100** | **75/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required` — needs an engineer who can wrangle TISS XML and an advisor who lives in Brazilian medical billing.

### Key assumptions to validate (3–5)

1. **Assumption:** Small clinics will forward their demonstrativo XML to a third-party tool. **How to test:** Run the free-audit offer with 30 clinics; measure how many actually send the file.
2. **Assumption:** AI-drafted recursos win at a rate comparable to a human specialist (≥25%). **How to test:** File 50 AI-drafted appeals across 3 clinics; track recovery rate vs their historical/manual rate.
3. **Assumption:** R$349/mo flat fee converts where specialist % cuts didn't. **How to test:** Price A/B with 20 clinics — flat vs success-fee — and watch which closes faster and churns less.
4. **Assumption:** One parser handles enough operadoras to be useful on day one. **How to test:** Pull demonstrativos from the 5 biggest operadoras and confirm coverage before launch.

### Risk flags

1. **Platform/incumbent dependency:** An ERP incumbent (iClinic/Conclínica) could upgrade their glosa screen into a real appeal engine and bundle it free. Move fast, own the standalone niche, and over-serve on appeal quality.
2. **Regulatory/format drift:** TISS versions and operadora contract terms change; the parser and templates need maintenance. Ongoing cost, not a blocker.
3. **Outcome variance / churn:** If a clinic has a low-glosa month, the flat fee feels like waste. Mitigate with the prevention tier and the recovery dashboard that keeps the value visible.
4. **Trust/data sensitivity:** Clinics may hesitate to share billing data. LGPD-clean handling and clear "we never touch patient clinical data, only billing lines" framing.

## 14. Structured verdict

```
Score:                  75/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder + Brazilian medical-billing domain advisor
Time to revenue:        6–10 weeks (free audit → paid filing)
Capital to launch:      R$30–60k ($6–11k)
Top 3 assumptions to validate first:
  1. Clinics will forward demonstrativo XML — free-audit test with 30 clinics
  2. AI recurso win rate ≥25% — file 50 appeals, track recovery vs manual baseline
  3. Flat R$349/mo beats success-fee on close speed + churn — price A/B with 20 clinics
Kill criteria:
  - Abandon if <20% of free-audit clinics convert to paid filing after seeing recoverable R$
  - Abandon if AI-drafted appeals recover <15% of contested value across the first 50 filings
  - Abandon if a major ERP ships a free, equivalent appeal engine before your v1 lands
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Get 10 real demonstrativo XML files (from a friendly clinic + an advisor). Hand-build the Tabela 38 → remedy mapping for the top 20 denial codes and draft 5 recursos by hand to prove the appeal template wins.
- **Day 3–4:** Run the "free glosa audit" pitch in 3 specialty WhatsApp groups. Offer: send your last demonstrativo, get a recoverable-R$ report + pre-drafted appeals free.
- **Day 5:** Decide go/no-go on a **falsifiable** bar: did **≥10 clinics send a file** AND did **≥3 say they'd pay R$349/mo** to have the appeals filed automatically? If yes, build. If the files don't come, the wedge is wrong — rework the ingest before writing code.
