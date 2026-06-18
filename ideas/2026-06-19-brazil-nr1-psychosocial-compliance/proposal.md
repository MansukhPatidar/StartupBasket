---
title: "LaudoLeve — NR-1 psychosocial kit for Brazil's small firms"
slug: brazil-nr1-psychosocial-compliance
date: 2026-06-19
category: Compliance / Brazil-SMB
complexity: Medium
score: 76
verdict: GO
confidence: Medium
oneLiner: "Turns a small Brazilian firm's 10-minute intake into a defensible NR-1 psychosocial file: assessment, action plan, monitoring."
tags:
  vertical: Compliance
  model: SaaS
  geography: LATAM
  secondary: [Compliance-driven, SMB, Multilingual, AI-agent, Accountant-channel]
axes:
  problem: 16
  demand: 12
  build: 12
  distribution: 12
  revenue: 11
  time: 8
  defensibility: 5
founderFit: [domain-expertise-required, sales-heavy]
featured: false
---

# LaudoLeve

## 1. One-liner

Turns a small Brazilian employer's headcount and a 10-minute intake into a defensible NR-1 psychosocial file — assessment, action plan, and monitoring.

## 2. Trend signal — why now?

Brazil just made psychosocial risk a mandatory part of every employer's occupational risk program (PGR), and the obligation went live on **May 26, 2026** under Portaria MTE nº 1.419/2024 amending NR-1. Every company with even one CLT employee — micro, ME, EPP, no low-risk exemption — must now identify, assess, document, and *manage* psychosocial risk factors (workload, harassment, lack of autonomy, interpersonal conflict). Fines run **R$1,610 to R$6,708 per exposed worker**. For a 10-person firm with no assessment, that's up to ~R$67K of exposure.

The market reaction has been panic and half-measures. Specialist consultancies quote **R$5,000–R$30,000** for a full assessment + action plan — absurd for a corner bakery or a 12-person logistics office. So owners are buying cheap online questionnaires and "compliance spreadsheets" sold with urgency. Brazilian HR press is already writing about "falsa conformidade" — companies that ran a questionnaire, checked a box, and are *still non-compliant* because the law requires four more steps they skipped: severity/probability rating, a documented action plan, periodic monitoring with evidence, and CIPA participation, all integrated into the live PGR.

That gap — between a R$1,500 questionnaire that produces a laudo and the R$5K–30K consultancy that produces actual compliance — is the wedge.

Provenance:
  - Signal 1 (Demand): NR-1 psychosocial obligation live May 26 2026 for ALL employer sizes; consultancy quotes R$5K–30K, fines R$1,610–6,708 per worker; HR press warns of "falsa conformidade" from questionnaire-only approaches — https://www.migalhas.com.br/quentes/448486/nr-1-a-partir-de-maio-empresas-devem-monitorar-riscos-a-saude-mental and https://rhpravoce.com.br/colab/riscos-psicossociais-nr1-conformidade-empresas — 2026-06
  - Signal 2 (Feasibility): COPSOQ-BR / COPSOQ III validated for Brazil and public; competitor QWork already runs it self-serve in-browser (proves the assessment layer is buildable on off-the-shelf instruments + LLM synthesis) — https://www.qwork.app.br/ and https://revistas.usp.br/rsp/en/article/view/192716 — 2026-06
  - Signal 3 (Economic): Brazil workplace-safety software market USD 674.7M (2024) → ~USD 1.75B by 2030 at 17.8% CAGR; new "consultoria especializada em riscos psicossociais" landing pages and modules (QWork, nr1riscospsicossociais.com.br, Solides NR-1 module, SOC) spinning up around this exact rule — https://www.grandviewresearch.com/horizon/outlook/workplace-safety-market/brazil — 2026-06
  Category: Regulatory arbitrage

## 3. The opportunity

The incumbents productize **step 1 of 5**. QWork — the cleanest small-business competitor — states it plainly: it issues a COPSOQ III laudo (PDF/Excel) for R$1,500 (1–49 employees) and **explicitly does not cover action-plan development, ongoing monitoring, or PGR integration**. The R$5K–30K consultancies cover everything but price out the long tail of micro/small employers, who are the bulk of the ~5 million CLT-employing companies in Brazil.

Two structural problems the incumbents ignore:

1. **A COPSOQ questionnaire is statistically meaningless and anonymity-breaking at 5–20 employees.** A bakery with 8 staff can't run a 40-item Copenhagen survey and get usable, anonymous data. NR-1 itself permits a *simplified* method for very small firms (structured conversation, synthetic inventory, observation) — but it must be properly described and documented. Nobody has productized the simplified path.
2. **Compliance is a recurring obligation, not a one-time PDF.** The PGR requires periodic re-assessment and an evidence trail of the action plan being executed. A laudo sold once leaves the buyer exposed at the next inspection.

LaudoLeve sells the *whole* obligation, right-sized to headcount, at a price the long tail can stomach — and distributes it through the one professional every small Brazilian business already pays monthly: their accountant.

## 4. Target market

- **Primary customer:** Brazilian micro and small employers (MEI-with-employees, ME, EPP) with **1–30 CLT employees** — bakeries, auto shops, small clinics, retail stores, regional logistics/transport offices, restaurants — that have no in-house RH/SST team. Reached primarily *through their accounting office* (escritório contábil), which is the first call any small employer makes on a labor obligation.
- **Why they buy:** "A fiscalização começou, meu contador disse que preciso de riscos psicossociais no PGR, a consultoria me cobrou R$8 mil, e eu tenho 9 funcionários." They need a defensible document fast, cheap, and in Portuguese — and they need it to survive an auditor, not just look pretty.
- **Rough TAM reasoning:** Brazil has on the order of millions of CLT-employing companies; the under-30-employee band is the overwhelming majority. Capture even 20,000 of them at ~R$1,200/yr blended = R$24M ARR. The accountant channel makes that reachable: a single mid-size escritório carries 100–400 small-business clients.
- **Why now for them:** The obligation became enforceable three weeks ago (May 26, 2026). The grace/educational posture varies by reading, but the legal duty is live and accountants are actively pushing clients to act. This is a "this quarter" purchase, not a someday one.

## 5. Product sketch (MVP)

- **Headcount-aware path selection:** ask company size + sector once; route ≤19-employee firms to the NR-1 *simplified method* (structured conversation guide + synthetic inventory), 20+ to the COPSOQ-BR survey path. This alone differentiates from every questionnaire-only competitor.
- **Guided 10-minute intake** for the owner/manager: sector hazards, shift patterns, known friction (turnover, complaints, overtime), via plain-Portuguese questions — no SST jargon.
- **Auto-generated psychosocial risk inventory** with severity × probability matrix, sector-calibrated, written in the formal language an auditor expects.
- **Action plan generator:** for each identified risk factor, concrete, documented preventive measures with owners and deadlines — the part consultants charge thousands for.
- **Monitoring cadence + reminders:** scheduled re-check dates, evidence-upload slots, and a running log so the file stays audit-ready over time.
- **CIPA / worker-participation record** templates so the participation requirement is evidenced, not assumed.
- **PGR-ready export:** a clean, dated dossier (PDF + structured data) that drops into the employer's existing PGR, plus an "entregue ao contador" handoff.
- **Accountant dashboard:** an escritório sees all client companies, compliance status (green/amber/red), and upcoming monitoring dates — so they can sell and manage it as a recurring add-on service.

## 6. AI angle — what's load-bearing

Remove the AI and you're back to a R$8,000 consultant. The model does the expensive judgment work: it reads a 10-minute lay intake plus sector and headcount and produces (a) a *defensible* risk inventory phrased in regulatory language, (b) a calibrated severity/probability rating, and (c) a tailored, plausible action plan with measures matched to the specific risks — not boilerplate. It also adapts the *method itself* to firm size (simplified vs. survey), which is the legal nuance the questionnaire tools get wrong. The questionnaire scoring is deterministic; the value-add — turning raw human input into an audit-survivable management document — is squarely the LLM's job.

## 7. Localization angle

This is a LATAM-first, **Brazil-only** play by definition — it exists because of one Brazilian norm (NR-1 / Portaria 1.419/2024) and one validated instrument (COPSOQ-BR). Everything is Portuguese-native, priced in reais at a tier a 10-person firm pays without flinching (think R$99–199/mo, not R$8K once), and distributed through the Brazilian accountant relationship. A generic global "employee wellbeing survey" tool cannot compete here: it doesn't speak PGR, doesn't know the simplified-method allowance, and doesn't produce a document an MTE auditor recognizes. The regulation *is* the moat's foundation.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:**
  - Direct self-serve: **R$149/mo** per company (assessment + action plan + monitoring + exports), or R$990 one-time for a single defensible file with 12 months of monitoring.
  - Accountant channel: **R$49–79/company/mo wholesale**, escritório resells at R$149+ and keeps the margin; volume tiers for 50+ clients.
- **ACV:** ~R$1,200–1,800/yr blended per company.
- **Rough math to $1M ARR (~R$5.5M):** ~3,500 companies at R$1,300/yr. Reachable through ~30–50 mid-size accounting offices resyndicating to their books of business.
- **Rough math to $5M ARR (~R$27M):** ~18,000–20,000 companies. Requires the accountant channel to become the default distribution and a few accounting-software integrations (Domínio/Thomson, Calima, etc.).
- **Expansion path:** add the *physical/ergonomic* PGR sections, PCMSO coordination, NR training tracking, and assédio-moral hotline — become the small-employer's whole "people-compliance" file, raising ACV per company over time.

## 9. Go-to-market wedge — first 100 customers

- **Accountant-first, hand-to-hand.** Brazil has tens of thousands of escritórios contábeis; they're already being told (by SESCAP, CRC courses, contábil portals) to warn clients about NR-1 psychosocial. Recruit the first 20–30 offices directly: offer a free co-branded "diagnóstico NR-1 psicossocial" for their client base, white-labeled. Each office that signs brings 100–400 small-business clients behind it.
- **Ride the panic content.** The contábil/SST blogs publishing NR-1 explainers right now have comment sections and WhatsApp groups full of owners asking "como faço com 9 funcionários?" Show up there with a 90-second Loom doing exactly that, in Portuguese.
- **Undercut QWork at the seam.** Target searchers landing on questionnaire-only tools with one message: "O laudo é só o começo — sem plano de ação e monitoramento, você continua autuável." Run it as paid search on `riscos psicossociais NR-1`, `PGR riscos psicossociais pequena empresa`.
- **CIPA/SST influencer micro-deals.** A handful of técnicos de segurança and SST creators on Instagram/YouTube already explain NR-1 to small employers; affiliate them.
- **SEBRAE / sindicato patronal webinars.** Co-host "NR-1 para quem tem até 20 funcionários" sessions — pre-qualified, panicked, in-market audience.

## 10. Build complexity — justification

Medium. The instruments (COPSOQ-BR) are public and the assessment/scoring is deterministic; QWork proves the survey layer is off-the-shelf. The custom work is (a) the simplified-method engine and headcount routing, (b) the LLM action-plan/inventory generation tuned to survive an auditor, and (c) the accountant multi-tenant dashboard and monitoring scheduler. No novel ML, no hardware. A pair could ship a credible v1 in ~10–14 weeks; the real effort is domain calibration with an SST professional, not engineering.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Helps employers comply with NR-1; uses public validated instruments. |
| Ethical — no harm / dark patterns | ✅ | Genuine compliance value; risk is over-promising "guaranteed" compliance — must avoid. |
| Market exists (evidence above) | ✅ | Live mandate, paying competitors, consultancy price points, in-market searchers. |
| 1–5 person team can build this | ✅ | Pair + one SST advisor. |
| Launchable with <$50K / ₹40L | ✅ | Off-the-shelf stack; main cost is domain calibration and channel seeding. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | Live legal duty, per-worker fines, active panic. Tempered slightly by uneven enforcement posture in year one. |
| Demand evidence | 15 | 12/15 | Paying competitors (QWork R$1,500), R$5K–30K consultancy quotes, "falsa conformidade" press, in-market search. Strong but mostly inferred, not a subreddit of verbatim begging. |
| Build feasibility | 15 | 12/15 | Public instrument + LLM synthesis; main risk is auditor-grade quality of generated action plans. |
| Distribution clarity | 15 | 12/15 | Accountant channel is concrete and named; conversion through offices is the uncertainty. |
| Revenue mechanics | 15 | 11/15 | Clear price points anchored to competitors; small-ticket SMB → needs channel volume to hit $1M. |
| Time to first revenue | 10 | 8/10 | In-market urgency; one accountant office can close a cohort in weeks. |
| Defensibility | 10 | 5/10 | Regulatory + workflow + accountant lock-in, but the laudo layer is commoditizing fast. Moat is the action-plan/monitoring/channel stack, copyable in ~12 months. |
| **Total** | **100** | **76/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`domain-expertise-required` (needs a real SST/occupational-safety advisor so the output survives an MTE auditor) · `sales-heavy` (the channel is hand-to-hand accountant recruitment).

### Key assumptions to validate (3–5)

1. **Assumption:** Accountants will resell a compliance add-on to their small-business clients. **How to test:** Sign 5 escritórios to a paid pilot; measure how many of their clients they actually onboard in 30 days.
2. **Assumption:** A small employer will pay ~R$149/mo (or R$990 once) rather than ignore the rule or buy a R$1,500 one-shot laudo. **How to test:** Landing page + paid search on `riscos psicossociais NR-1 pequena empresa`; measure checkout intent at both price points.
3. **Assumption:** An LLM-generated simplified-method file will pass an MTE auditor's scrutiny. **How to test:** Have 3 independent SST/auditing professionals review 10 generated files and rate defensibility; require ≥8/10 "would survive inspection."
4. **Assumption:** Enforcement in year one is real enough to drive urgency (not purely educational). **How to test:** Track first MTE autuações for psychosocial gaps over the next 90 days.

### Risk flags

1. **Market timing / enforcement softness:** MTE has signaled an educational first year in some readings. If auditors don't actually fine, urgency deflates and this becomes a vitamin. Monitor real autuações closely.
2. **Commoditization:** QWork, Solides, SOC and others are racing on the laudo layer; if one of them bolts on action-plan + monitoring + an accountant channel, the differentiation thins. Speed and channel lock-in are the only defense.
3. **Liability:** Selling "compliance" that fails an audit invites blame. Must be positioned as a defensible documented file (with an SST professional in the loop for edge cases), never an iron-clad guarantee.

## 14. Structured verdict

```
Score:                  76/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Brazilian operator with an SST/occupational-safety advisor and accountant-channel relationships
Time to revenue:        6–10 weeks (one accountant office can close a client cohort fast)
Capital to launch:      R$30–60K ($6–11K) — mostly domain calibration + channel seeding
Top 3 assumptions to validate first:
  1. Accountants will resell — sign 5 escritórios to a paid pilot, measure client onboarding in 30 days
  2. Willingness to pay R$149/mo vs ignore vs R$1,500 one-shot — landing page + paid search checkout test
  3. Generated simplified-method file survives an auditor — 3 SST pros rate 10 files, need ≥8/10 defensible
Kill criteria:
  - Abandon if <2 of 5 pilot accounting offices onboard ≥10 clients each within 30 days
  - Abandon if SST-professional defensibility rating of generated files is <6/10
  - Abandon if no real MTE psychosocial autuações materialize within 6 months AND checkout-intent stays below 1%
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Build a Portuguese landing page with two offers (R$149/mo, R$990 one-time) and an accountant white-label CTA. Stand up a single generated sample file for a fictional 9-person bakery.
- **Day 3–4:** Walk that sample file to 5 escritórios contábeis and 3 independent SST professionals. Ask the accountants: "would you resell this to your clients, and at what cut?" Ask the SST pros: "would this survive an MTE inspection — rate 1–10." Simultaneously run R$2–3K of paid search on `riscos psicossociais NR-1 pequena empresa` to the landing page.
- **Day 5:** Decide go / no-go. **Go only if** ≥2 accountants commit to a paid pilot AND the SST defensibility rating averages ≥7/10 AND checkout-intent (clicks-to-checkout) clears 1%. Anything less → the long tail isn't reachable at this price or the file isn't defensible, and it's a PASS.
