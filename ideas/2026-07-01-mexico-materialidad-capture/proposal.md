---
title: "ProbaMX — materialidad trail builder for Mexican SMBs"
slug: mexico-materialidad-capture
date: 2026-07-01
category: Compliance / Mexico SMBs & Accounting Firms (CFDI deductors)
complexity: Medium
score: 75
verdict: GO
confidence: Medium
oneLiner: "WhatsApp bot that captures proof of every expense the moment it happens, so SAT can't kill the deduction."
tags:
  vertical: Compliance
  model: SaaS
  geography: LATAM
  secondary: [WhatsApp-first, Multilingual, AI-agent, Compliance-driven, SMB, Mexico]
axes:
  problem: 17
  demand: 12
  build: 11
  distribution: 11
  revenue: 12
  time: 7
  defensibility: 5
founderFit: [domain-expertise-required, technical-heavy]
featured: false
---

# ProbaMX — materialidad trail builder for Mexican SMBs

## 1. One-liner

WhatsApp bot that captures proof of every expense the moment it happens, so SAT can't kill the deduction.

## 2. Trend signal — why now?

Mexico's 2026 tax reform rewrote the rules of deductibility. For the first time the law says a CFDI is only valid if it backs a *real, verifiable* transaction — and SAT now has expedited power to demand the taxpayer prove it. When SAT asks, you get **five business days** to produce photos, videos, contracts, delivery evidence, and communications showing the operation actually happened. Miss it and the deduction dies; in the worst cases the reform attaches criminal sanctions (2–9 years) for giving fiscal effect to simulated invoices.

The accounting world is openly panicking. One widely-shared 2026 analysis is literally titled *"Materialidad imposible en 2026."* PRODECON issued a January 16, 2026 communiqué urging taxpayers to preserve and organize materiality documentation *now*. SAT's Master Plan 2026 promises surprise visits "with lawyers and recording equipment." Every despacho contable in the country is running paid courses on it.

The core insight everyone keeps repeating: you cannot reconstruct this evidence after the fact. *"Pretender integrar documentación sólida en cuestión de días (por ejemplo, cinco) puede ser materialmente imposible si no se construyó desde el inicio."* The expediente has to be built *at the moment the operation happens* — by the delivery driver, the warehouse hand, the technician — not by the accountant three months later staring at a XML and a panic email.

That's the gap. Incumbents (accounting software, EFOS-monitor point tools) are reactive document attics. Nobody captures the evidence at source, on the channel the field worker already uses: WhatsApp.

Provenance:
  - Signal 1 (Demand): "Materialidad imposible en 2026" + PRODECON Jan-16-2026 communiqué + AMCP materiality checklist — businesses scrambling, 5-day deadline "materially impossible if not built from the start" — https://elsoldechiapas.com/materialidad-imposible-en-2026/ , https://contadormx.com/solucion-materialidad-de-las-operaciones-sat/ — 2026-07-01
  - Signal 2 (Feasibility): Cheap multimodal AI (photo→classify→extract RFC→file) + mature WhatsApp Business API in LATAM (largest WhatsApp region); accounting tools already attach photos from a phone — https://www.aurorainbox.com/en/2026/03/05/whatsapp-business-latam-adoption/ , https://blog.alegra.com/mexico/inteligencia-artificial-en-la-contabilidad/ — 2026-07-01
  - Signal 3 (Economic): 2026 tax reform adds criminal sanctions + 5–10% invoice fines + SAT surprise visits with cameras; paid EFOS-monitoring tools (Protector Fiscal) and materiality courses already selling — money is moving — https://www.fiscal-requirements.com/news/4536 , https://kpmg.com/us/en/taxnewsflash/news/2025/11/mexico-updates-electronic-invoicing-cfdi-2026-tax-reform.html — 2026-07-01
  Category: Regulatory arbitrage

## 3. The opportunity

The whole materiality compliance market is being sold as **defense** — "we'll help you assemble the expediente when SAT comes knocking." That's the wrong end of the timeline. By the time the carta arrives, the warehouse photo was never taken, the WhatsApp delivery confirmation got deleted, the technician who did the service left the company. The evidence that proves an operation was real is *perishable* — it exists for about 48 hours around the transaction and then it's gone.

The incumbent options:
- **Accounting software (Alegra, CONTPAQi, Aspel):** lets you attach a document to a CFDI *if* you happen to have it. It's a filing cabinet. It does nothing to make the evidence exist.
- **EFOS-monitor tools (Protector Fiscal, SAT Fácil):** check suppliers against the 69-B blacklist. Useful, but one feature, reactive, and they stop at "is this RFC dirty."
- **Despacho contable labor:** the accountant chases the client by phone every month-end for missing docs. *"El cliente manda XMLs incompletos… el cierre mensual sigue corriendo."*

ProbaMX flips it: a WhatsApp agent that, the moment an expense is recorded, screens the supplier against 69-B *before* you pay, then pings whoever did the work — "snap a photo of the delivery / the installed equipment / the signed remito" — and auto-assembles a per-operation materiality file (CFDI + payment proof + supplier-clean check + field photo + geotag/timestamp). When SAT's 5-day request lands, the expediente already exists. An AI-first team can do this 10× better than a filing cabinet because the load-bearing work — capturing, classifying, and binding perishable evidence to the right CFDI in real time — is exactly what cheap multimodal AI + WhatsApp now make trivial.

## 4. Target market

- **Primary customer:** Mexican SMBs that deduct expenses and have *field operations* — construction subs, logistics/transport, equipment installers, maintenance/cleaning service firms, wholesalers — 5–80 employees, the ones most exposed to "services leave no material trace." Sold *through* their despacho contable, who feels the pain first.
- **Why they buy:** "If SAT asks me to prove this ₹2M MXN of service expenses is real and I have five days, I'm dead. I need the proof to already exist." Services are the scariest category — experts flag they "may or may not leave a material result." That fear is the wallet-opener.
- **Rough TAM reasoning:** Every business that issues/receives CFDIs (effectively all formal businesses) is now exposed, but the buyers are SMBs with field operations + an accountant. That's hundreds of thousands of firms and ~tens of thousands of despachos that each serve dozens of them. At even ~30,000 paying SMBs × $69/mo that's a ~$25M ARR ceiling — far past the $5M target.
- **Why now for them:** The reform is live in 2026, the surprise-visit enforcement and 5-day clock are new this year, and PRODECON is publicly telling them to start preserving evidence *now*. Urgency is government-manufactured and dated.

## 5. Product sketch (MVP)

- **WhatsApp-first capture:** field worker gets a message tied to a new expense — "📸 envía foto de la entrega / equipo / remito firmado" — replies with a photo; ProbaMX timestamps, geotags, and binds it to the CFDI.
- **Pre-pay 69-B / EFOS screen:** before a supplier invoice is approved, auto-check the RFC against SAT's 69-B and "no localizado" lists; flag dirty suppliers *before* money moves.
- **Per-operation expediente:** assembles the materiality file automatically — CFDI XML, payment/transfer proof, supplier-clean snapshot, field photo, contract/orden de compra, communications thread.
- **Materiality gap radar:** dashboard for the accountant showing which deductions are "thin" (CFDI exists but no field evidence) so they can chase *before* month-end close, not after a carta.
- **5-day response pack:** when a SAT request hits a given CFDI, one click exports a clean, indexed PDF expediente formatted for the desk review.
- **Multi-client despacho view:** the accounting firm manages all its SMB clients' materiality health from one panel.
- **Spanish-native, mobile-only for field staff;** accountant gets web.

## 6. AI angle — what's load-bearing

Remove the AI and this collapses into a shared folder. The AI does the work that makes capture-at-source actually viable for non-accountants:
- **Photo understanding:** classify what a field photo *is* (delivery vs. installed equipment vs. signed remito), read RFCs/amounts off paper docs, and judge whether a given operation has *enough* evidence to survive a materiality challenge.
- **Operation-to-CFDI binding:** match a messy WhatsApp photo + caption to the right invoice without the field worker knowing what a CFDI is.
- **Materiality scoring:** rank each deduction's defensibility against SAT criteria and tell the accountant which 10 of 400 operations are time-bombs.

That's not a chatbot sticker; it's the entire reason a warehouse worker can produce audit-grade evidence by sending one photo.

## 7. Localization angle

This *is* the localization play and it can't be generalized away. WhatsApp is the default business channel across LATAM (Mexico has 2M+ active Business catalogs); field workers will never log into a SaaS dashboard but they'll answer a WhatsApp message. Pricing in MXN at ~$899–1,499 MXN/mo sits right next to accounting-software tiers SMBs already pay. The 69-B list, CFDI 4.0 XML, the carta invitación workflow, and the 5-day desk-review format are all Mexico-specific — a generic global "audit evidence" tool would be useless here. Natural follow-on markets are other CFDI/real-time-invoicing regimes (Brazil's 2026 reform, Chile, Peru), but Mexico-first is the wedge.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** $899 MXN/mo (~$50) starter for a single SMB (up to N operations/mo); $1,499 MXN/mo (~$83) for field-heavy firms; despacho plan at $4,999 MXN/mo (~$280) covering up to 15 client SMBs.
- **ACV:** ~$700–1,000 USD/yr per SMB blended; ~$3,400 USD/yr per despacho seat.
- **Math to $1M ARR:** ~1,200 paying SMBs at ~$70/mo, or ~250 despachos each managing ~8 clients. Reachable through accountant channel.
- **Math to $5M ARR:** ~6,000 SMBs or ~1,200 despachos; requires the despacho channel to compound (each firm onboards its book) and modest expansion into transport/construction verticals with per-operation overage. Plausible but needs the channel to work — that's the swing factor.
- **Expansion path:** per-operation overage as field volume grows, add-on EFOS continuous-monitoring tier, a "REPSE/subcontractor" evidence module, and eventually the same engine for Brazil/Chile.

## 9. Go-to-market wedge — first 100 customers

The accountant is the wedge — they have the relationship, the fear, and dozens of clients each.

- **Despacho recruiting via the panic content already happening:** every colegio de contadores and outfit like ContadorMx/AMCP is running paid 2026 materiality courses *right now*. Sponsor/co-present 5 of them, offer attendees a free "materiality health check" for one client. Courses pull hundreds of accountants each.
- **Cold-target despachos directly:** scrape the public colegio-de-contadores member directories + Mercado Libre/Google for "despacho contable" listings in CDMX, Monterrey, Guadalajara. Send a 90-second WhatsApp/Loom: "here's the 5-day SAT request your client can't survive — here's the file already built." A despacho that bites brings 8–15 SMBs.
- **EFOS-blacklist scare hook:** SAT publishes 69-B updates; when a new batch drops, DM the accountants whose clients likely paid those RFCs ("3 of these are in your sector"). Concrete, dated, undeniable.
- **Vertical beachhead:** transport/logistics SMBs (Carta Porte already trains them on evidence discipline) and construction subs (REPSE-exposed) — both feel materiality risk hardest. 50-member WhatsApp groups for these trades exist; seed there.

First 100 = ~15 despachos onboarding their books. That's a two-month sprint, not a year.

## 10. Build complexity — justification

**Medium.** Off-the-shelf: WhatsApp Business API, multimodal AI for photo classification/RFC extraction, SAT 69-B list (publicly queryable), CFDI XML parsing (well-documented). Custom work: the operation-to-CFDI binding logic, the materiality-scoring model tuned to SAT criteria, and a clean despacho multi-client console. A pair could ship a credible v1 in ~10–14 weeks; the accounting integrations (pulling CFDIs from the client's PAC/contabilidad) are the gnarly part but are integration work, not research.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Helping taxpayers comply with SAT — squarely legal and encouraged by PRODECON. |
| Ethical — no harm / dark patterns | ✅ | Helps honest businesses prove real operations; not a tool to fake evidence (must guard against misuse). |
| Market exists (evidence above) | ✅ | Government-created, dated, widely-discussed pain; paid adjacent tools exist. |
| 1–5 person team can build this | ✅ | Pair ships v1 in ~3 months on off-the-shelf APIs. |
| Launchable with <$50K / ₹40L | ✅ | API + WhatsApp + cloud; main cost is the founder's time and a domain advisor. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 17/20 | Hair-on-fire: lose the deduction + criminal exposure, 5-day clock, can't reconstruct after the fact. |
| Demand evidence | 15 | 12/15 | Strong: government reform, PRODECON warning, "materialidad imposible" content, paid courses/tools. Public verbatim end-customer quotes thin (lives in private WhatsApp/accountant circles). |
| Build feasibility | 15 | 11/15 | Off-the-shelf AI + WhatsApp; contabilidad/PAC integration is the real work. ~3 months. |
| Distribution clarity | 15 | 11/15 | Accountant channel is concrete and high-leverage; conversion through despachos still to be proven. |
| Revenue mechanics | 15 | 12/15 | Pricing sits next to existing accounting tiers; despacho multiplier is attractive but the swing factor. |
| Time to first revenue | 10 | 7/10 | 4–8 weeks via a despacho pilot; not pre-sold day one. |
| Defensibility | 10 | 5/10 | Execution + workflow lock-in + despacho relationships; EFOS-screen alone is copyable, the capture habit + accountant book is stickier. |
| **Total** | **100** | **75/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`domain-expertise-required` · `technical-heavy` — needs someone who genuinely understands Mexican CFDI/materiality (or a contador co-founder) plus AI/WhatsApp engineering. A foreigner building this blind will get the SAT nuances wrong.

### Key assumptions to validate (3–5)

1. **Assumption:** Despachos will champion and resell this to their book rather than seeing it as more work. **How to test:** 20 in-person despacho interviews in CDMX/Monterrey; offer a free 1-client pilot, measure how many onboard a second client unprompted.
2. **Assumption:** Field workers will actually reply with photos at the moment of the operation. **How to test:** Run a 3-week WhatsApp capture pilot with 5 SMBs; measure response rate and time-to-photo. Kill thesis if <50% of operations get evidence.
3. **Assumption:** SMBs will pay ~$899 MXN/mo for prevention before they've been hit by a carta. **How to test:** Pre-sell to 30 despacho clients at the price; conversion <15% means the fear isn't yet wallet-deep.
4. **Assumption:** We can reliably bind a messy field photo to the correct CFDI. **How to test:** Build the matcher, run on 200 real operations, measure precision; <85% means heavy manual cleanup kills the value prop.

### Risk flags

1. **Regulatory risk:** SAT could publish an official materiality-evidence format or build its own portal feature, shrinking the gap. Mitigant: move fast, own the capture habit, expand to other regimes.
2. **Platform dependency:** WhatsApp Business API (Meta) is the spine — pricing/policy changes hit margins; the 2026 general-purpose-bot rules also apply. Mitigant: keep templates transactional, add SMS/Telegram fallback.
3. **Misuse risk:** A tool that "produces materiality evidence" must not become a tool to *fabricate* it — that's the criminal-sanction zone. Mitigant: capture is timestamped/geotagged at source and can't be backdated; market only to honest compliance.
4. **Channel dependency:** If despachos won't resell, direct SMB CAC could be too high for the price point. That's the make-or-break.

## 14. Structured verdict

```
Score:                  75/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder with a Mexican contador co-founder/advisor
Time to revenue:        4–8 weeks (despacho pilot)
Capital to launch:      $8–15K (₹7–12L) — APIs, WhatsApp, cloud, one domain advisor
Top 3 assumptions to validate first:
  1. Despachos resell to their book — 20 interviews + free 1-client pilot, measure unprompted second onboard
  2. Field workers send photos at the moment — 3-week capture pilot, kill if <50% of operations get evidence
  3. SMBs pay for prevention pre-carta — pre-sell 30 at $899 MXN/mo, kill if <15% convert
Kill criteria:
  - Abandon if <50% of operations produce field evidence in the capture pilot
  - Abandon if SAT ships an official materiality portal that auto-files evidence before v1 ships
  - Abandon if despacho resale conversion stays <15% after 20 firms pitched
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Recruit 8 despachos contables (CDMX + Monterrey) through colegio directories and 2026 materiality course attendee lists. 30-min calls: how are your clients handling the 5-day rule today, what would you pay to make the expediente exist automatically.
- **Day 3–4:** With 2 willing despachos, run a live WhatsApp capture mock on 1 real client each — send the field worker a "snap the delivery" prompt on 10 actual operations; measure response rate and how clean the resulting expediente is.
- **Day 5:** Decide. **Go** if ≥4 of 8 despachos say they'd pilot AND ≥60% of the 20 mock operations produced usable evidence within a day. Anything less and the capture-at-source thesis is unproven — fix it or kill it.

The falsifiable result: field-evidence capture rate on real operations. If non-accountants won't send the photo, the entire idea is dead, and you'll know in five days.
