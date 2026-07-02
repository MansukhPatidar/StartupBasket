---
title: "AgroFito — receituário compliance screen for agronomists"
slug: brazil-agrofit-receituario-precheck
date: 2026-07-02
category: AgriTech / Brazil Agronomists & Insumo Resellers (defensivo prescription compliance)
complexity: Medium
score: 74
verdict: GO
confidence: Medium
oneLiner: "Catches an illegal pesticide recommendation before the agronomist signs the receipt and eats a R$2K–R$2M fine."
tags:
  vertical: AgriTech
  model: SaaS
  geography: LATAM
  secondary: [Compliance-driven, AI-agent, Multilingual, SMB, Portuguese-first]
axes:
  problem: 16
  demand: 12
  build: 11
  distribution: 11
  revenue: 12
  time: 7
  defensibility: 5
founderFit: [domain-expertise-required, technical-heavy]
featured: false
---

# AgroFito — receituário compliance screen for Brazilian agronomists

## 1. One-liner

Catches an illegal pesticide recommendation before the agronomist signs the receipt and eats a R$2K–R$2M fine.

## 2. Trend signal — why now?

Brazil rewrote its entire agrochemical law in December 2023 (**Lei 14.785/2023**), and the professional council followed with **Resolução CONFEA 1149/2025** (published 28 Mar 2025, in force 1 Apr 2025), which tightened the rules on how a **receituário agronômico** — the mandatory prescription every pesticide sale legally requires — must be issued, used, and inspected. The new rules force the prescription to be tied to a **technical diagnosis** and now demand the **geographic coordinates of the property**.

Here's the part the incumbents don't solve. The single most common cause of an *autuação* (infraction notice) is not a missing signature — it's the **agronomic content being wrong**: prescribing a product for a crop or pest for which it is **not registered in Agrofit** (the MAPA pesticide registry), or a dose outside the product's *bula* (label). AgroReceita's own compliance content names "issuing receipts for crops and pests not registered or not approved according to the product's label" as a top error, and state inspection manuals confirm inspectors write the infraction notice **against the agronomist personally**. Fines run **R$2,000 to R$2,000,000**, with civil, administrative, and even criminal liability flowing to the responsible technician (RT) under Lei 14.785.

Meanwhile the tool agronomists are supposed to cross-check against — **Agrofit** — is a clunky government system with **documented downtime complaints on Reclame Aqui** (users unable to access it to verify registrations). So the professional is legally on the hook for a match they have to look up manually in a system that's slow and sometimes down.

This isn't a niche. The distribution channel alone is **~6,000 revendas + ~1,500 cooperatives** moving **R$104B** of defensivos a year, with **~900 new agro stores** opening by 2026, each legally requiring a responsible agronomist.

Provenance:
  - Signal 1 (Demand): "Issuing receipts for crops/pests not registered per the product label" named as top autuação cause; inspection notice written against the agronomist; fines R$2K–R$2M — https://agroreceita.com.br/venda-de-defensivos-agricolas/ + https://www.adapar.pr.gov.br/sites/adapar/arquivos_restritos/files/documento/2020-10/manual_fisc_agrot_2014.pdf — 2026-07-02
  - Signal 2 (Feasibility): Agrofit is a public MAPA registry with downloadable bulas but documented downtime/access complaints, forcing manual crop×pest×dose lookups that cheap LLM parsing + a cached index can automate — https://www.reclameaqui.com.br/ministerio-da-agricultura-pecuaria-e-abastecimento-mapa/sistema-agrofit-fora-do-ar_YD8wdxCksfraNqV3/ + https://aegro.com.br/blog/agrofit/ — 2026-07-02
  - Signal 3 (Economic): Lei 14.785/2023 + Resolução CONFEA 1149/2025 raised RT liability and fiscalização; R$104B defensivos market across ~6,000 revendas + ~1,500 cooperatives, ~900 new stores by 2026; funded emission SaaS incumbents (AgroReceita, AgriQ/Aliare, TOTVS) prove willingness to pay — https://www.confea.org.br/confea-avanca-na-regulamentacao-do-receituario-agronomico + https://www.canalrural.com.br/agricultura/agronegocio/andav-distribuidoras-associadas-faturaram-r-167-bilhoes-em-2024/ — 2026-07-02
  Category: Regulatory arbitrage

## 3. The opportunity

The incumbents — **AgroReceita, AgriQ (Aliare), TOTVS** — are **emission** platforms. They make the *document* fast, digitally signed, and legally formatted, and they file the ART. They optimize the paperwork. What they do **not** do is act as a second set of eyes on the *recommendation itself*: is THIS product actually registered in Agrofit for THIS crop against THIS pest, at THIS dose the *bula* allows, on a property where that crop is plausibly grown?

That's the gap. Emission software assumes the agronomist already validated the agronomy. But the agronomist is human, under time pressure in the field or at a revenda counter, cross-referencing a slow government registry. The error slips through, the receipt gets signed, and the liability is the agronomist's — personally, criminally.

AgroFito is a **pre-emission compliance screen**. Before the receipt is signed (and ideally plugged into the incumbent's emission flow, not replacing it), it validates the recommendation against a current, cached Agrofit + bula index and returns a **red/yellow/green verdict with the exact reason**: "❌ Product X is not registered for soybean against *Spodoptera* — 0 active registrations found" or "⚠️ Dose 1.5 L/ha exceeds bula max of 1.2 L/ha for this culture." It's a spell-checker for pesticide prescriptions, sitting on top of a legally-mandated workflow where a typo costs up to R$2M.

## 4. Target market

- **Primary customer:** The **responsible technician (RT) agronomist** — the CREA-registered engenheiro agrônomo who signs receituários for a revenda, cooperative, or as an autônomo consultant. Secondary buyer: the **revenda / cooperativa owner** who carries vicarious liability and wants their whole counter de-risked.
- **Why they buy:** In their words, the fear is "*emiti uma receita para uma cultura/praga não registrada e a autuação vem no meu nome*" — the infraction lands on my CPF. They already pay for emission software; they'll pay to not have their license and bank account exposed by a lookup error.
- **Rough TAM reasoning:** ~109,000 agronomists registered in Brazil (2020 census, growing). Realistically ~30,000–50,000 actively sign receituários across ~6,000 revendas, ~1,500 cooperatives, plus autônomos. Even 3,000 paying seats at R$120/mo ≈ R$4.3M ARR.
- **Why now for them:** Resolução 1149/2025 just raised the fiscalização bar and diagnosis-linkage requirement (in force since Apr 2025). Fines are real and personal. And the compliance-checking work got automatable this year: parsing thousands of bulas and matching crop×pest×dose is now a cheap LLM + cached-index problem, not a manual grind.

## 5. Product sketch (MVP)

- **Prescription pre-check:** enter (or import from the emission tool) product + crop + pest/target + dose → instant red/yellow/green verdict.
- **Exact-reason output:** every rejection cites the specific failure — "not registered for this culture," "target not on label," "dose above bula max," "registration expired/suspended in Agrofit."
- **Cached Agrofit + bula index:** refreshed on a schedule so it works even when the government system is down; agronomist never has to touch Agrofit live.
- **Property sanity flag:** cross-check the prescribed crop against the property's declared/known crops (the "receita for a crop not planted" autuação pattern) — flag mismatches.
- **Batch mode for revendas:** paste a day's worth of recommendations, get a compliance report before any are signed.
- **Audit trail / 2-year retention:** every check timestamped and stored (receituários must be available to inspectors for 2 years) — turns the screen into the RT's defense file.
- **WhatsApp bot:** field agronomist sends "Coact em soja pra lagarta, 0,15 L/ha" and gets the verdict back — no app switching mid-field-visit.

## 6. AI angle — what's load-bearing

AI does the work that makes this exist. Agrofit registrations and *bulas* are semi-structured, inconsistent PDFs and records; the crop names, pest/target names, and dose ranges are expressed a dozen different ways across thousands of products. An LLM pipeline **parses each bula into a structured (product → allowed cultures → allowed targets → dose ranges) table**, normalizes synonyms (praga common names ↔ scientific names ↔ Agrofit codes), and then a matching layer answers the compliance question in natural language with a cited reason. Remove the AI and you're back to a human reading PDFs against a slow registry — which is exactly the failure mode we're eliminating. The natural-language "why it failed" output is what makes the agronomist trust and act on it in 5 seconds.

## 7. Localization angle

This is **inherently Brazil-first and can't be generic**. The moat *is* the localization: Agrofit is Brazil's registry, *bulas* are in Portuguese, the legal framework is Lei 14.785 + CONFEA/CREA resolutions, ART filing is Brazil-specific, and the buyer transacts via boleto/PIX and lives on WhatsApp. Pricing works at **R$99–199/mo** where a US-priced $49 tool would feel expensive to an autônomo but a de-risking spend of ~R$120 against a R$2M downside is trivial. Adjacent LATAM markets (Argentina's SENASA registry, Paraguay) are a future port with the same shape but different registries — not v1.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** R$129/mo per agronomist seat (solo/autônomo). Revenda/cooperativa team plan R$399–899/mo covering multiple RTs + batch mode + shared audit trail. Add-on: API access for the emission incumbents to embed the check (B2B2C).
- **ACV:** ~R$1,500 solo; ~R$6,000–10,000 per revenda/cooperativa account.
- **Rough math to $1M ARR (~R$5.5M):** 3,000 solo seats × R$129 × 12 ≈ R$4.6M, plus ~120 revenda accounts × R$7,000 ≈ R$0.85M → ~R$5.5M ≈ US$1M. Well inside the ~30–50K addressable RT base.
- **Rough math to $5M ARR (~R$27M):** requires the **embedded-API deal** — AgroReceita/AgriQ/TOTVS licensing the compliance check as a feature, or channel deals with the top distributor groups (ANDAV-affiliated) pushing it to their RT networks. That's a partnership motion, not pure self-serve.
- **Expansion path:** seats grow with the ~900 new stores/yr; ACV grows via batch/audit tiers, then the API/embed revenue line, then a LATAM registry port.

## 9. Go-to-market wedge — first 100 customers

- **Autuação-fear content + the free single check:** publish the ranked list of "the 7 mistakes that put a receituário autuação on your CPF" and a free web tool that checks one product×crop×pest live. Rank for the exact panic queries agronomists already search ("produto não registrado para a cultura autuação"). The free check is the demo.
- **CREA regional + agronomy association channels:** the state CREAs and agronomist associations run continuing-education and compliance webinars — co-host a "how not to get autuado under Resolução 1149/2025" session; the tool is the takeaway. Warm, credible, targeted.
- **Revenda owner cold outreach:** scrape ANDAV-affiliated revenda directories (~6,000 stores), send the owner a one-page "your RT's signature is your store's liability — here's a batch screen" pitch with a Loom in Portuguese. Owners buy team plans to cover their counter.
- **Ride the NF-e break:** revendas already hit hard errors when a receita number doesn't tie to the invoice (NF-e rejections 385/835). Position AgroFito upstream — "get the receita right before it blocks your nota fiscal." Concrete, felt-this-week pain.
- **Agronomist WhatsApp/Telegram groups:** RTs cluster in regional professional groups; seed the WhatsApp bot ("send your recommendation, get the compliance verdict") — it's natively shareable in the exact channel where the audience lives.

If I can't land 100 seats from CREA webinars + revenda owner outreach + the free-check funnel, the demand thesis is wrong and I kill it.

## 10. Build complexity — justification

**Medium.** The web/app + WhatsApp interface and the red/yellow/green verdict UI are off-the-shelf. The real work is the **bula/Agrofit ingestion pipeline** — parsing inconsistent PDFs into a reliable structured index and keeping it current — plus a synonym/normalization layer for crop and pest names. That's genuine data engineering, not a research breakthrough; a technical founder with an agronomist advisor ships a credible v1 in **~3–4 months**. The hard-but-bounded part is accuracy: a false "green" on an illegal recommendation is a trust-killer, so the index needs QC and a "when unsure, flag yellow" bias.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Reading a public registry + bulas and returning a compliance opinion is legal; we assist, the RT still signs. |
| Ethical — no harm / dark patterns | ✅ | Reduces illegal/unsafe pesticide recommendations — net public-health positive. |
| Market exists (evidence above) | ✅ | Funded emission incumbents, R$104B channel, documented autuação pain, personal RT liability. |
| 1–5 person team can build this | ✅ | Ingestion pipeline + verdict UI + WhatsApp bot, ~3–4 months. |
| Launchable with <$50K / ₹40L | ✅ | Off-the-shelf stack + LLM inference; main cost is the founder's time. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | Personal, criminal-capable RT liability up to R$2M; felt at every signature. Not daily hair-on-fire for every agronomist, but high-severity and frequent enough. |
| Demand evidence | 15 | 12/15 | Funded emission incumbents prove WTP; inspection manuals + AgroReceita content name the exact error; Agrofit downtime complaints. Missing: direct "I'd pay for a checker" quotes. |
| Build feasibility | 15 | 11/15 | Standard stack, but bula ingestion + accuracy QC is real data work. ~3–4 months, not 6 weeks. |
| Distribution clarity | 15 | 11/15 | Named channels (CREA webinars, ANDAV revenda directory, WhatsApp groups) + free-check funnel. Conversion unproven. |
| Revenue mechanics | 15 | 12/15 | Clear pricing benchmarked vs emission SaaS; solo-seat math to $1M is achievable; $5M needs the API/channel deal. |
| Time to first revenue | 10 | 7/10 | Revenue in 6–10 weeks post-MVP via warm CREA/revenda channels and a pre-sold pilot; not instant. |
| Defensibility | 10 | 5/10 | Data-freshness + accuracy + workflow trust compound, but incumbents could bolt this on. Head start + becoming the RT's audit file is the moat. |
| **Total** | **100** | **74/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`domain-expertise-required` · `technical-heavy` — needs an agronomist advisor (or founder) to get crop/pest/dose logic and CREA norms right, plus solid data-pipeline engineering.

### Key assumptions to validate (3–5)

1. **Assumption:** Agronomists/revendas see the *content* error (not just missing paperwork) as their real liability and will pay ~R$129/mo to de-risk it. **How to test:** 25–30 interviews with RTs across 3 states; ask what actually keeps them up (paperwork vs. wrong recommendation).
2. **Assumption:** The bula/Agrofit index can be built and kept current accurately enough that a "green" is trustworthy. **How to test:** ingest the top 300 products by volume, have the agronomist advisor spot-audit 100 crop×pest×dose verdicts; target ≥98% precision on "green."
3. **Assumption:** Incumbents don't ship an equivalent check within the head-start window. **How to test:** audit AgroReceita/AgriQ/TOTVS feature roadmaps and demos for any registration-validation feature.
4. **Assumption:** CREA/association webinars convert to paid seats. **How to test:** run 2 co-hosted sessions, measure signup→paid.

### Risk flags

1. **Platform dependency:** Agrofit/MAPA is the data source; format changes or access restrictions could break ingestion. Mitigate with resilient parsing + cached index + multiple source mirrors.
2. **Incumbent bolt-on:** emission players could add a "registration check" as a feature. Mitigate by moving fast, owning the RT's audit-defense narrative, and pursuing the embed-API deal *with* them before they build it.
3. **Accuracy liability:** a wrong "green" that leads to an autuação is reputationally fatal — and could invite blame. Mitigate with conservative yellow-flagging, clear "assistive, RT still responsible" framing in ToS, and a visible confidence indicator.
4. **Market timing:** if fiscalização under 1149/2025 turns out lax in practice, urgency softens. Watch actual autuação volumes through 2026.

## 14. Structured verdict

```
Score:                  74/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder + agronomist (CREA-registered) advisor/co-founder
Time to revenue:        6–10 weeks after a ~3–4 month MVP; pre-sold pilots earlier
Capital to launch:      R$60–120K (US$12–22K) — mostly founder time + LLM inference
Top 3 assumptions to validate first:
  1. RTs treat the recommendation-content error as their liability and will pay to screen it — 30 interviews across 3 states
  2. The bula/Agrofit index hits ≥98% precision on "green" verdicts — advisor audit of 100 verdicts on top 300 products
  3. CREA/association webinars convert to paid seats — 2 co-hosted sessions with signup→paid tracking
Kill criteria:
  - Abandon if <8 of 30 interviewed RTs say they'd pay ≥R$99/mo to screen recommendations
  - Abandon if an incumbent ships a registration-validation feature before your v1 launches
  - Abandon if the index can't reach ≥98% precision on "green" without unsustainable manual QC
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Build a throwaway single-check tool over the top ~200 products (product×crop×pest×dose → registered? yes/no + reason). Just enough to demo the "aha."
- **Day 3–4:** Get it in front of 15–20 RTs via one CREA/association group and 5 revenda owners; watch them run their own recent recommendations through it. Log every "wait, that one's not registered?!" moment.
- **Day 5:** Decide go/no-go on a **falsifiable** bar: **≥8 of ~20 RTs try to buy or ask for early access at ~R$129/mo after using it once.** Below that, the content-error pain isn't monetizable and I kill or re-shape toward the revenda-owner buyer.
