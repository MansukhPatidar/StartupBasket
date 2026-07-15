---
title: "CodigoCerto — NFS-e code classifier for Brazil's Simples Nacional service providers"
slug: brazil-nfse-code-classifier
date: 2026-07-15
category: Compliance / Brazil — MEI, ME & EPP Service Providers Migrating to the NFS-e Padrão Nacional
complexity: Low
score: 74
verdict: GO
confidence: Medium
oneLiner: "Type what you did, get the exact national service code — before the wrong one rejects your invoice or double-taxes you."
tags:
  vertical: Compliance
  model: SaaS
  geography: LATAM
  secondary: [Brazil, Tax-tech, AI-agent, SMB, Solo-builder, Compliance-driven, Portuguese-first]
axes:
  problem: 15
  demand: 12
  build: 13
  distribution: 11
  revenue: 11
  time: 8
  defensibility: 4
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# CodigoCerto — NFS-e code classifier for Brazil's Simples Nacional service providers

## 1. One-liner

Type what you did, get the exact national service code — before the wrong one rejects your invoice or double-taxes you.

## 2. Trend signal — why now?

Brazil forced ~every service-issuing small business onto one national e-invoice standard, on a hard 2026 clock, and the single hardest field — the service classification code — has no good tooling.

- **Resolução CGSN nº 189/2026:** from **1 September 2026**, the NFS-e Padrão Nacional becomes **mandatory for every ME and EPP under Simples Nacional that provides ISS services**. Municipal portals that migrated have already **deactivated their own emitters** — "tentativas de novos faturamentos nos portais antigos serão rejeitadas automaticamente." Over **3,400 municipalities** (80%+ of urban population) were already on the national standard by Oct 2025.
- **MEI is already live and erroring.** Accounting forums (contabeis.com.br) are full of MEIs who "sempre emiti nota corretamente… agora apareceu esta mensagem" — CNPJ/município mismatches, blank-vs-filled `código de tributação municipal`, browser workarounds. FENACON reported accountants hitting "instabilidade para emissão de NFS-e nacional."
- **The classification field is the load-bearing risk.** Pick the wrong `código de tributação nacional` and the client's system can **auto-withhold ISS**, so the MEI pays DAS *and* eats a retention = double taxation. Worse: "uma classificação técnica errada neste ano resultará em cálculos incorretos de IBS/CBS quando a transição terminar." The reform's rejection-for-missing-IBS/CBS goes into production **3 August 2026** for regular-regime firms; Simples/MEI follow in 2027 — so the codes chosen *now* set the future tax.

This is a dated, hard-deadline migration where the government supplies a free emitter but **nobody supplies confidence that the code is right**. That gap is the product.

Provenance:
  - Signal 1 (demand): MEIs/accountants reporting emission failures and code confusion on the Emissor Nacional — https://www.contabeis.com.br/forum/tributos-estaduais-municipais/410389/error-na-hora-de-emitir-nota-fiscal-mei-prestacao-de-servicos-emissor-nacional/ — 2026-01/07
  - Signal 2 (economic/regulatory): Resolução CGSN 189/2026 makes NFS-e Nacional mandatory for all Simples ME/EPP from 01/09/2026 — https://www.gov.br/receitafederal/pt-br/assuntos/noticias/2026/abril/nfs-e-de-padrao-nacional-sera-obrigatoria-para-optantes-do-simples-nacional — 2026-04
  - Signal 3 (feasibility): NBS is a fixed 9-digit national taxonomy with published correlation tables (LC 116 ↔ NBS) — a bounded classification problem an LLM can map from a natural-language service description — https://www.companyhero.com/blog/nbs-nota-fiscal + https://consultorestributarios.com.br/codigo-de-tributacao-nacional-para-mei/ — 2026
  Category: Regulatory arbitrage

## 3. The opportunity

The incumbents (Notaas, Focus NFe, eNotas, TecnoSpeed, Conta Azul, and the free gov.br Emissor Nacional) all solve **transmission** — they turn a filled-in form into a valid NFS-e over the REST API. None of them solve **"what do I put in the form."** They hand the MEI a search box for the `código de tributação nacional` and let them guess. Guessing wrong is silent: the note often *goes through*, then a client withholds tax, or an auditor flags a CNAE/code mismatch months later, or the reform recomputes IBS/CBS on a bad base.

The 10× wedge: a focused tool that takes a **plain-Portuguese description of the service** ("dei aula particular de inglês," "consertei um vazamento," "fiz o social media de uma loja") and returns the **single correct `código de tributação nacional`**, its LC 116 item, the mapped NBS, whether ISS is due or withheld under SIMEI, and a one-line reason — with a flag when the description doesn't match the CNPJ's CNAE. Emission is a commodity; **being right is not.** We ride on top of the free emitter, we don't compete with it.

## 4. Target market

- **Primary customer:** Two wallets, one problem. (a) **MEIs and micro service providers** (~15M+ MEIs in Brazil, a large share ISS-service) who self-issue on gov.br and have no accountant. (b) **Small contabilidade offices** (contadores) with 50–500 MEI/ME/EPP clients each, drowning in Sept-2026 cutover tickets — the higher-value buyer.
- **Why they buy (in their words):** MEI — "sempre deu certo, agora dá erro e não sei qual código usar." Contador — clients flood WhatsApp asking which code to pick; a wrong pick creates a withholding dispute the accountant has to unwind for free.
- **Rough TAM reasoning:** Brazil has 15M+ MEIs and ~5M+ ME/EPP; a conservative service-provider slice is millions of businesses and tens of thousands of small accounting firms. We need a few thousand paying seats/offices — a rounding error against the base.
- **Why now for them:** The 01/09/2026 deadline is a forcing function. Before it, municipal portals hid this behind familiar local code lists; after it, everyone faces the same unfamiliar national taxonomy at once.

## 5. Product sketch (MVP)

- **Describe-in-plain-Portuguese → correct code.** Free-text service description in, `código de tributação nacional` + LC 116 item + NBS + confidence + one-sentence rationale out.
- **CNAE cross-check.** Paste/lookup the CNPJ; flag when the suggested service code is inconsistent with the registered CNAE (the #1 rejection/withholding trigger).
- **ISS / SIMEI treatment note.** Tell the user plainly: is ISS due, withheld, or covered by the DAS — so they don't get double-taxed.
- **Município readiness check.** Look up whether the user's município is already on the Padrão Nacional and when its old portal shuts, so they know their personal deadline.
- **Batch mode for accountants.** Upload a client list (service description per client) → get a mapped code table back, ready to configure in whatever emitter they use.
- **Reform-forward note.** Show which IBS/CBS classification the chosen code implies, so today's pick is future-proof.
- **Copy-out, not lock-in.** One-click copy the exact values to paste into gov.br or any provider — we're the brain, not the pipe.

## 6. AI angle — what's load-bearing

Remove the AI and this is a static lookup table nobody can navigate — which is exactly the failed status quo. The value is **turning a messy, colloquial description of work into the one correct code out of hundreds**, disambiguating near-synonyms ("consultoria" vs "assessoria" vs "treinamento" have different LC 116 items and ISS treatment), and reconciling it against the CNAE. That's a constrained classification-with-reasoning task over a fixed taxonomy — LLMs are strong at it, and the fixed taxonomy means we can ground every answer and cite the rule, keeping hallucination in check. The AI is the product; the emitter is a paste target.

## 7. Localization angle

This *is* the localization play — it's unbuildable without Brazil-specific fiscal knowledge: LC 116 service list, NBS nomenclature, código de tributação nacional, SIMEI/ISS interplay, per-município cutover schedules, and the reform's IBS/CBS mapping. Portuguese-first, priced in reais (a ₹499-equivalent tier works where a US$49 tier wouldn't — MEIs pay ~R$70/mo DAS total). No global competitor can parachute in; the moat and the market are both the local rulebook.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:**
  - MEI/self-serve: **R$19–29/mo** (or R$9 per one-off resolved code) — impulse-priced against the pain of one withholding dispute.
  - Accountant office: **R$149–399/mo** per office for batch mode + client cross-checks (they bill it into advisory fees).
- **ACV:** ~R$2,000–4,000/yr for accountant offices; ~R$250/yr for self-serve MEIs. Offices carry the revenue.
- **Rough math to $1M ARR (~R$5.5M):** ~1,200 accountant offices × R$250/mo × 12 ≈ R$3.6M, plus ~7,000 self-serve MEIs × R$24/mo × 12 ≈ R$2M. Both counts are trivial against the base.
- **Rough math to $5M ARR:** become the default "code check" embedded in a couple of mid-size emitter/ERP partners (revenue share on their MEI base) + 5,000 offices. Requires one distribution partnership landing.
- **Expansion path:** add NF-e (goods) classification, reform-transition advisory (IBS/CBS impact per client), and a monitored "your codes vs. new rules" alert as the 2027–2033 transition rolls — recurring reason to stay subscribed past the deadline spike.

## 9. Go-to-market wedge — first 100 customers

- **Ride the deadline in the accountant forums.** contabeis.com.br and FENACON channels already have active threads of contadores hitting NFS-e errors. Answer them with the tool's exact output + a link. Warm, self-selecting, dated demand.
- **Contador WhatsApp/Telegram groups.** Accounting offices cluster in regional WhatsApp groups; a batch-mode demo that clears a Sept-cutover backlog in one upload is a forwardable artifact. Seed 20 offices, let the batch table spread.
- **"Qual meu código?" SEO + free single-lookup.** People are actively Googling "código de tributação nacional MEI." A free single-code answer captures them at the moment of pain; paywall batch + CNAE cross-check + reform note. Ship a free tool now, before Sept, when search spikes.
- **maisMEI / MEI-influencer partnerships.** Portuguese MEI-help creators and portals (maismei.com.br audience) already produce this content; co-branded lookup widget = distribution to millions of MEIs.

## 10. Build complexity — justification

Low. Off-the-shelf LLM + the published LC 116 ↔ NBS ↔ código de tributação nacional correlation tables (public, finite) as a grounded retrieval base, plus the free CNPJ/CNAE lookup and the município-habilitação list from nfse.gov.br. No emitter integration required for v1 (copy-out). The genuine work is curating the taxonomy + ISS/SIMEI rules correctly and tuning the classifier — domain, not engineering, is the hard part. Solo builder with a Brazilian accountant advisor ships a credible v1 in **4–6 weeks**, well inside the Sept-2026 window.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Advisory/classification tool; not issuing fiscal docs or acting as fiscal authority. Add "confirm with your accountant" disclaimer. |
| Ethical — no harm / dark patterns | ✅ | Reduces mis-taxation; helps the smallest businesses. Must be honest about confidence. |
| Market exists (evidence above) | ✅ | Hard deadline + live forum complaints + millions of obligated businesses. |
| 1–5 person team can build this | ✅ | Solo + domain advisor, 4–6 weeks. |
| Launchable with <$50K / ₹40L | ✅ | LLM API + web app + taxonomy curation. Low four figures to launch. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 15/20 | Real and dated — wrong code = rejection, double taxation, future IBS/CBS error. But per-note pain is intermittent, not hourly hair-on-fire for a solo MEI. |
| Demand evidence | 15 | 12/15 | Live forum complaints, hard 01/09/2026 mandate, millions obligated, active search intent. Not yet proven anyone *pays* specifically for classification vs. emission. |
| Build feasibility | 15 | 13/15 | Bounded taxonomy + LLM; no emitter integration in v1. Domain curation is the effort, not infra. |
| Distribution clarity | 15 | 11/15 | Clear warm channels (accountant forums, WhatsApp groups, MEI portals) but conversion from free-lookup to paid is unproven. |
| Revenue mechanics | 15 | 11/15 | Office tier carries it and is benchmarkable; self-serve ARPU is thin and low-reais pricing needs volume. |
| Time to first revenue | 10 | 8/10 | Accountants buy fast pre-deadline; a batch demo can close in days. |
| Defensibility | 10 | 4/10 | Taxonomy is public; emitters could bolt this on. Moat is curation quality, accountant trust, and speed — copyable in ~12 months. |
| **Total** | **100** | **74/100** | |

## 13. Qualitative modifiers

### Founder-fit tags
`technical-heavy` · `domain-expertise-required` — you need someone who can build a grounded classifier *and* a Brazilian accountant who lives in LC 116/NBS/SIMEI. Without the domain half, the answers will be plausibly wrong, which is fatal for a tax tool.

### Key assumptions to validate (3–5)

1. **Assumption:** Accountants will pay R$149–399/mo for a classification/cross-check tool separate from their emitter. **How to test:** Pitch batch mode to 30 small offices from contabeis threads; pre-sell 10 at the office price before building past MVP.
2. **Assumption:** The classifier hits high accuracy on real, messy descriptions (needs to be right enough to trust). **How to test:** Build a 300-item gold set from real MEI service descriptions + verified codes; require ≥95% top-1 on common services before launch.
3. **Assumption:** Self-serve MEIs will convert from a free single lookup to a paid tier. **How to test:** Ship the free lookup now, measure paid-conversion on the CNAE cross-check + reform note behind the wall.
4. **Assumption:** Emitters won't ship "smart code suggestion" as a free feature before we build trust. **How to test:** Audit current Notaas/Focus/Conta Azul UIs monthly; move fast on the accountant relationship (the sticky part they can't copy).

### Risk flags

1. **Defensibility risk:** The taxonomy is public and emitters own the emission surface. If Conta Azul/Notaas add a good AI code-picker, our standalone value erodes. Mitigation: go deep on the accountant workflow + reform advisory, and pursue an embed/partnership before they build.
2. **Accuracy/liability risk:** A confidently-wrong code that causes double taxation destroys trust and invites blame. Mitigation: ground every answer, show confidence + rationale, disclaim, and lean on the accountant-in-the-loop for the office tier.
3. **Timing risk:** Demand spikes hard around 01/09/2026 then flattens. Mitigation: convert the deadline spike into recurring value via reform-transition monitoring (2027–2033) so it isn't a one-shot event product.
4. **Platform dependency:** Relies on nfse.gov.br/CNPJ lookups and published correlation tables staying available; a format change breaks ingestion. Manageable but real.

## 14. Structured verdict

```
Score:                  74/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical solo founder + Brazilian accountant (contador) domain advisor
Time to revenue:        4–8 weeks (pre-deadline accountant pre-sales)
Capital to launch:      R$15–30k (~$3–6K) — LLM API, web app, taxonomy curation, advisor
Top 3 assumptions to validate first:
  1. Accountants pay office-tier for classification+cross-check — pre-sell 10 offices before full build
  2. Classifier ≥95% top-1 on a 300-item real-description gold set — build the set and measure
  3. Free single-lookup converts to paid on CNAE cross-check + reform note — ship free tool, measure
Kill criteria:
  - Abandon if <5 of 30 pitched accountant offices pre-commit at the office price
  - Abandon if classifier can't clear 90% top-1 on the gold set after two curation passes
  - Abandon if a major emitter ships a free, accurate AI code-picker before our v1 and accountants shrug at the standalone
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Build a 300-item gold set from real MEI/ME service descriptions (pulled from forum posts + an accountant advisor) mapped to verified `código de tributação nacional` / LC 116 / NBS. This is the falsifiable core.
- **Day 3–4:** Wire a grounded LLM classifier over the correlation tables; measure top-1 accuracy against the gold set. Fix the obvious failure classes.
- **Day 5:** Take the working single-lookup + a batch demo to 30 small accounting offices from contabeis/FENACON threads and WhatsApp groups; pitch the office tier.
- **Decision (go/no-go):** GO only if (a) classifier clears **≥90% top-1** on the gold set **and** (b) **≥5 of 30** offices pre-commit at R$149+/mo. Both are hard numbers — no "they seemed interested."
