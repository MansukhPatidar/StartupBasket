---
title: ControlaRX — SNGPC reconciler for Brazil drugstores
slug: brazil-sngpc-controlled-rx-reconciler
date: 2026-05-31
category: Compliance / Brazil Independent Pharmacies
complexity: Medium
score: 74
verdict: GO
confidence: Medium
oneLiner: Catches every SNGPC stock divergence before ANVISA does, so independent Brazilian drugstores stop eating controlled-substance fines.
tags:
  vertical: Compliance
  model: SaaS
  geography: LATAM
  secondary: [Brazil, Portuguese-first, Compliance-driven, SMB, AI-agent, WhatsApp-first, Solo-builder]
axes:
  problem: 16
  demand: 12
  build: 12
  distribution: 12
  revenue: 11
  time: 8
  defensibility: 6
founderFit: [domain-expertise-required, sales-heavy]
featured: false
---

# ControlaRX — SNGPC reconciler for Brazil's independent drugstores

## 1. One-liner

Catches every SNGPC stock divergence before ANVISA does, so independent Brazilian drugstores stop eating controlled-substance fines.

## 2. Trend signal — why now?

ANVISA's SNGPC — Sistema Nacional de Gerenciamento de Produtos Controlados, the national tracking system for psychotropics and other controlled medicines — went back to **fully operational and mandatory at the start of 2025** after a period of suspended reporting. Every pharmacy and drugstore must now report acquisitions and dispenses of controlled substances accurately, in a structured **XML format, inside a seven-day window**, with periodic inventory counts. This was a real on/off switch: during the suspension, controlled-substance sales records collapsed (a published pharmacoepidemiology study documented the drop in antidepressant sales records when SNGPC reporting lapsed), and the reactivation forced every small pharmacy back into a strict reporting cadence many had let go slack.

The pain that follows is specific and repeating: **stock divergence**. The single most common SNGPC error — and the most common trigger for a fine during an ANVISA or state vigilância sanitária inspection — is a mismatch between the physical count of a controlled medicine on the shelf and what the SNGPC ledger says should be there. Late escrituração (missing the seven-day window), wrong batch/quantity entries, and skipped inventories pile on. A small independent drugstore has no dedicated compliance person; the balconista or the owner-pharmacist does this between customers, by hand or through a clunky module bolted onto their PDV (point-of-sale) system. The divergence accumulates silently and surfaces only when the fiscal walks in.

Provenance:
  - Signal 1 (demand): SNGPC stock divergence + late escrituração are the most common errors that generate ANVISA fines; small pharmacies struggle most because they lack dedicated compliance staff and rely on manual processes — https://farmarcas.com.br/blog/escrituracao-sngpc/ — observed 2026-05-31
  - Signal 2 (feasibility): SNGPC reactivated as fully operational/mandatory at start of 2025 with 7-day XML reporting window after a suspension period; the suspension measurably collapsed controlled-substance records, proving the system's bite — https://hegemoni.com.br/brazil-sngpc-compliance-update-2025/ and https://onlinelibrary.wiley.com/doi/10.1002/pds.70136 — observed 2026-05-31
  - Signal 3 (economic): Brazil's drugstore retail is a large, highly fragmented market where associativismo networks (Febrafar/Farmarcas and peers) already sell compliance and management tooling to independents — money is actively moving to arm small pharmacies against exactly this burden — https://farmarcas.com.br/blog/escrituracao-sngpc/ — observed 2026-05-31
  Category: Regulatory arbitrage

## 3. The opportunity

The incumbents are PDV/ERP suites for pharmacies (Inovafarma, VarejoFarma, Trier, and the modules sold through associativismo networks). They *generate* the SNGPC XML from whatever was rung up at the counter — garbage in, garbage out. What none of them do well is **reconcile**: proactively compare the SNGPC ledger against physical reality, flag the divergences *before* they ossify, and tell the owner exactly which batch of which controlled medicine is off and why, in plain Portuguese, in time to fix it inside the reporting window.

The 10× is turning a once-a-quarter panic — a manual inventory count that finds a divergence the owner can no longer explain or correct — into a continuous, automated reconciliation that surfaces the gap the day it appears. AI is load-bearing because the raw inputs are messy: a photo of a handwritten receituário (controlled prescription), a scanned nota fiscal from a distributor, a batch number smudged on a box. Reading those, matching them to the SNGPC catalog, and reconciling them against the reported ledger is exactly the work that's too fiddly for a balconista and too small for the ERP vendors to bother perfecting.

## 4. Target market

- **Primary customer:** Owner-pharmacist of an independent or small-chain Brazilian drugstore (1–4 stores), the *farmácia independente* that isn't a Drogasil/RaiaDrogasil. Typically a single responsável técnico (RT) pharmacist who is personally liable for SNGPC compliance.
- **Why they buy:** In their words — divergência de estoque is "o erro que mais gera multa," and the RT is the one whose name is on the fine. One inspection that finds an unexplained controlled-substance gap is a multa plus the threat to the pharmacy's licensing. They feel the exposure personally and continuously, not once a year.
- **Rough TAM reasoning:** Brazil has on the order of ~90,000 pharmacies/drugstores, with independents and small chains making up the large majority by store count (the big chains dominate revenue but not unit count). Even a serviceable slice of the tens of thousands of independents — each handling controlled substances weekly — is far more than a $5M-ARR business needs.
- **Why now for them:** SNGPC went from "suspended / lax" to "mandatory and enforced" at the start of 2025. The behavior change is recent and forced. RTs who let reporting slide during the suspension are now exposed on every inspection.

## 5. Product sketch (MVP)

- **Continuous reconciliation:** pull the pharmacy's SNGPC movement data and compare reported ledger vs. physical/expected stock per controlled medicine and batch; surface divergences as they appear, not at quarter-end.
- **Seven-day-window watchdog:** flag any dispense/acquisition not yet escriturado and count down the days left before it's late.
- **Photo intake:** snap a receituário, distributor nota fiscal, or medicine box; AI reads the medicine, batch, and quantity and matches it to the SNGPC catalog.
- **"Why is this off?" explainer:** for each divergence, a plain-Portuguese diagnosis (wrong quantity entered, batch mismatch, dispense missing) and the corrective entry to make.
- **Inspection-ready report:** one-tap export showing reconciled controlled-substance position, so the RT can hand the fiscal a clean picture instead of scrambling.
- **WhatsApp alerts to the RT:** divergence and deadline nudges where the owner actually reads them.

## 6. AI angle — what's load-bearing

AI does two jobs that the ERP vendors don't. First, **messy-input extraction**: turning a photo of a handwritten controlled prescription or a scanned distributor invoice into a structured medicine+batch+quantity record matched to the SNGPC catalog — the load-bearing OCR/vision work that makes continuous reconciliation possible without manual re-keying. Second, **divergence diagnosis**: reasoning over the reported ledger vs. expected stock to explain *why* a controlled medicine is off and what corrective escrituração fixes it, in language an owner-pharmacist understands. Strip the AI and you're back to a manual quarterly count and a dumb XML generator — the exact status quo that produces the fines. A hallucinated "you're fine" is the liability we sell against, so the verdict layer must be deterministic against the catalog; the AI reads and explains, the rules engine decides.

## 7. Localization angle (if any)

This *is* a localization play — it's ANVISA/SNGPC-specific and cannot exist as a generic global product. The moat is encoding the SNGPC reporting rules, the controlled-substance catalog, the seven-day window logic, and the receituário formats — plus Portuguese-first UX and WhatsApp as the owner's interface (the default business channel in Brazil). A US or India team can't ship this without doing the same regulatory homework, and the big chains build it in-house. The independent-pharmacy long tail is the wedge global SaaS ignores.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** R$149/mo (single store), R$349/mo (up to 4 stores), with the controlled-substance reconciliation as the headline feature.
- **ACV:** ~R$2,000/year blended (~US$370 at conservative FX).
- **Rough math to $1M ARR:** ~$1M ≈ R$5.4M ÷ R$2,000 ≈ ~2,700 stores. Achievable against tens of thousands of independents.
- **Rough math to $5M ARR:** ~13,000–14,000 stores, or a smaller store count plus expansion into adjacent ANVISA/vigilância-sanitária compliance (temperature logs, RT-presence records, generic-substitution audit). Requires becoming the default compliance layer that associativismo networks recommend.
- **Expansion path:** start with controlled-substance SNGPC, expand to the broader vigilância-sanitária compliance burden the same RT owns; grow ACV by store count and add-on compliance modules. Distribution leverage if an associativismo network white-labels it.

## 9. Go-to-market wedge — first 100 customers

- **Associativismo network co-sell:** Brazil's independent pharmacies cluster under buying/management networks (Febrafar/Farmarcas and regional peers). Pitch one regional network a co-branded SNGPC-divergence tool for its members; one network deal puts the product in front of hundreds of independents who already trust the network's recommendations.
- **CRF (regional pharmacy council) and RT communities:** RTs are personally liable and congregate in CRF events, WhatsApp/Telegram groups, and Facebook groups for pharmacists. Offer a free "diagnóstico de divergência SNGPC" — connect read-only, show them their current gaps. The free audit self-selects in-pain buyers and the result sells the subscription.
- **Cold outreach off public pharmacy registries by state:** state vigilância sanitária registries list licensed pharmacies. Target independents in states with active fiscalização, send a personalized "could you survive an ANVISA SNGPC inspection?" gap-scan offer.
- **Content + the fine threat:** Portuguese-language posts/Shorts on "os erros de escrituração SNGPC que mais geram multa" feeding the free diagnóstico — the search intent already exists (the incumbent blogs rank for it).

## 10. Build complexity — justification

Medium. The web/WhatsApp app, vision OCR, and LLM explanation layer are off-the-shelf. The real work is encoding the SNGPC reporting rules and controlled-substance catalog correctly, ingesting movement data from the common pharmacy PDV/ERP systems (the integration surface is the gnarly part), and getting the reconciliation logic deterministic and audit-trustworthy. A small team with a pharmacist/RT domain advisor ships v1 in roughly 3–4 months.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Helps pharmacies meet an ANVISA obligation; we don't dispense or handle controlled substances |
| Ethical — no harm / dark patterns | ✅ | Improves controlled-substance traceability and public-health safety |
| Market exists (evidence above) | ✅ | Mandatory reactivated system, fines on divergence, tens of thousands of exposed independents |
| 1–5 person team can build this | ✅ | Small team + RT advisor, ~3–4 months to v1 |
| Launchable with <$50K / ₹40L | ✅ | APIs + comms + hosting modest; main cost is founder time + PDV integration work |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | RT personally liable; divergence is the #1 fine trigger; felt continuously, not daily-money-bleeding, so 16 not 19. |
| Demand evidence | 15 | 12/15 | Strong corroboration (mandatory reactivation, incumbent blogs ranking for "erros SNGPC", fines) but thin verbatim owner quotes in search — one short of a skeptic's instant nod. |
| Build feasibility | 15 | 12/15 | Off-the-shelf AI; the PDV/ERP data-ingestion integrations are the real effort. |
| Distribution clarity | 15 | 12/15 | Associativismo co-sell + CRF/RT communities + free diagnóstico are named channels; conversion unproven. |
| Revenue mechanics | 15 | 11/15 | Pricing fits Brazilian SMB wallets; willingness to pay for a single-purpose tool vs. PDV bundling is the risk. |
| Time to first revenue | 10 | 8/10 | Live enforced pain + free-audit funnel = fast urgency-driven pilots, paid within weeks. |
| Defensibility | 10 | 6/10 | Regulatory-knowledge + PDV-integration + reconciliation-data lock-in; an ERP vendor could improve its module, so speed matters. |
| **Total** | **100** | **74/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`domain-expertise-required` · `sales-heavy`

### Key assumptions to validate (3–5)

1. **Assumption:** Independent RTs will pay R$149/mo for divergence reconciliation rather than rely on their existing PDV's SNGPC module. **How to test:** 20 RT interviews + free diagnóstico; target ≥10% of scanned pharmacies converting to a paid pilot.
2. **Assumption:** Stock divergence is genuinely the dominant fine/pain (not late escrituração or something else). **How to test:** Ask 20 RTs to rank their SNGPC pains and recall their last inspection finding.
3. **Assumption:** We can ingest movement data from the top 3–4 pharmacy PDV/ERP systems cleanly. **How to test:** Build the integration against real exports from the most common systems before committing.
4. **Assumption:** An associativismo network will co-sell rather than build it themselves. **How to test:** Pitch two regional networks; look for one LOI.

### Risk flags

1. **Platform/integration dependency:** Value depends on ingesting data from heterogeneous pharmacy PDV/ERP systems; an uncooperative incumbent can starve the integration.
2. **Incumbent bolt-on:** A pharmacy ERP could sharpen its own SNGPC reconciliation and bundle it. Speed and a sharper single-purpose UX are the defence.
3. **Regulatory shift:** ANVISA could change SNGPC format/cadence (it already suspended and reactivated once), forcing rework — but each change also resets the incumbent and raises the value of a focused tool.

## 14. Structured verdict

```
Score:                  74/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Brazilian founder (or strong PT-BR team) + a responsável-técnico pharmacist as domain advisor / first customer
Time to revenue:        4–8 weeks (urgency-driven pilots off the free diagnóstico)
Capital to launch:      R$30–60K (~$6–11K) — APIs, comms, hosting, PDV-integration spike
Top 3 assumptions to validate first:
  1. Willingness to pay R$149/mo single-purpose — 20 RT interviews + free diagnóstico, ≥10% pilot conversion
  2. Divergence is the dominant pain — rank pains with 20 RTs, confirm last-inspection findings
  3. Clean data ingestion from top PDV/ERP systems — build integration against real exports first
Kill criteria:
  - Abandon if <10% of 30 scanned pharmacies convert to a paid pilot within 30 days
  - Abandon if data ingestion from the top pharmacy PDV/ERP systems proves blocked or unreliable
  - Abandon if a major pharmacy ERP ships an equivalent reconciliation module before v1 launch
```

## 15. Next step — 1-week validation sprint

- Day 1–2: Build a manual "diagnóstico de divergência SNGPC" — take a pharmacy's controlled-substance movement export, reconcile by hand, produce a one-page gap report. Offer it free in 2–3 RT/CRF WhatsApp or Facebook groups.
- Day 3–4: Run 15–20 RT calls. Ask: how do you do SNGPC today, what did your last inspection find, would you pay R$149/mo to be told divergences before the fiscal does. Put up a pre-sell page with a "reserve a pilot — R$79 first month" button.
- Day 5: Decide go / no-go. **Go if ≥10% of diagnosed pharmacies commit a paid pilot AND ≥half rank divergence as a top-2 SNGPC pain.** Both falsifiable; either fails → no-go.
