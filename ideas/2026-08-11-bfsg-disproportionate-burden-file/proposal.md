---
title: "BelegBar — BFSG defence file for German online shops"
slug: bfsg-disproportionate-burden-file
date: 2026-08-11
category: Compliance / Germany-SMB
complexity: Low
score: 76
verdict: GO
confidence: Medium
oneLiner: "Builds the accessibility paper trail a German shop must show when the Abmahnung or the regulator's letter arrives."
tags:
  vertical: Compliance
  model: SaaS
  geography: EU
  secondary: [SMB, Solo-builder, Compliance-driven, AI-agent, Multilingual, Ecommerce]
axes:
  problem: 16
  demand: 13
  build: 13
  distribution: 12
  revenue: 11
  time: 8
  defensibility: 3
founderFit: [technical-heavy, content-heavy]
featured: false
---

# BelegBar

## 1. One-liner

Builds the accessibility paper trail a German shop must show when the Abmahnung or the regulator's letter arrives.

## 2. Trend signal — why now?

The Barrierefreiheitsstärkungsgesetz (BFSG) — Germany's transposition of the European Accessibility Act — has applied to online shops since 28 June 2025. What changed in 2026 is enforcement, and it changed in three ways at once.

First, the letters started. The first cease-and-desist letters went out roughly six weeks after the law took effect, and the first fines followed in early 2026. Cost per Abmahnung runs €3,500–20,000, with fines up to €100,000 for serious violations. Consumer protection associations *and* competitors can both issue them, which means the sender pool is enormous and motivated.

Second — and this is the part most shop owners have not internalised — the single most common ground cited in these letters is not a broken checkout. It is the missing or inadequate **Barrierefreiheitserklärung** under § 14 BFSG. Lawyers describe it plainly: it is the most frequent and most easily proven accusation, because verifying it takes one page load. France separately imposes €25,000 per year for a missing statement.

Third, the scanning is about to become industrial. From Q3 2026 the market surveillance authorities begin using automated scanning tools to check thousands of shops in a short time. The Länder pooled their enforcement into a single joint authority (MLBF) by state treaty, and in late May 2026 the first large finance and insurance firms were written to and asked to report on their accessibility status. The question has shifted from *whether* you get checked to *how well you can explain where you stand*.

Now the thing that makes this a product rather than a panic. § 17 BFSG lets an operator claim **unverhältnismäßige Belastung** — disproportionate burden — and be excused from requirements it genuinely cannot afford. But the exemption is conditional on paperwork: the operator must assess it themselves, **document the assessment, retain it for five years, and hand a copy to the market surveillance authority on demand**, re-doing it at least every five years per service category. Almost nobody in the SMB tier has this document. It is the legal escape hatch, and it is locked behind a filing cabinet nobody has filled.

Meanwhile the "solution" most shops bought is worthless. Overlay widgets do not fix underlying issues; the FTC fined accessiBe $1M in April 2025 for misrepresenting that its tool made sites WCAG-compliant, UserWay is defending a class action in Delaware federal court as of early 2026, and AudioEye found 38.5% of sued businesses already had an accessibility "solution" installed. Roughly 1,400 companies with widgets installed were sued in 2025 anyway.

Provenance:
  - Signal 1 (demand): First BFSG Abmahnungen landed ~6 weeks after 28 June 2025, fines from early 2026, €3,500–20,000 per letter; missing § 14 Barrierefreiheitserklärung is the most common and most easily proven accusation — https://www.xictron.com/de/blog/bfsg-abmahnwelle-2026-barrierefreiheit-durchsetzen and https://mueller.legal/de/aktuelles/erste-bfsg-abmahnungen-im-e-commerce-was-online-haendler-innen-jetzt-beachten-muessen — observed 2026-08-11
  - Signal 2 (feasibility): § 17 BFSG requires the disproportionate-burden assessment to be documented, kept 5 years, and produced to the authority on request — a structured document-generation job now cheap with LLMs; automated regulator scanning begins Q3 2026 — https://bfsg-gesetz.de/17-bfsg/ and https://www.cookie.design/blog/shopware-bfsg-barrierefrei/ — observed 2026-08-11
  - Signal 3 (economic): 198,017 online shops in Germany (July 2026), 68.8% Kleingewerbe/Freiberuf; retrofit quotes run €15,000–50,000 and audits €800–2,500, while overlay incumbents are legally discredited (FTC $1M penalty vs accessiBe, April 2025) — https://listflix.de/statistik/online-shops/ and https://barrierefreie-agenturen.de/ratgeber/bfsg-kosten/ — observed 2026-08-11
  Category: Regulatory arbitrage

## 3. The opportunity

There are three things being sold into this market today and all three are wrong for the shop owner with eleven employees.

**Overlay widgets (€490–1,200/yr).** They sell the feeling of compliance. Regulators and courts have now made clear they do not deliver it, and installing one demonstrably does not stop you being sued. Worse, an overlay plus a generated statement claiming full conformity is an *aggravating* combination: you have published a false declaration about your own service.

**Agency audits and retrofits (€800–2,500 for the audit, €15,000–50,000 for the shop rebuild).** This is the correct answer for a €20M retailer. For a shop doing €3M with two people in marketing, the retrofit quote exceeds the annual profit of the channel. They read the number, close the tab, and do nothing. Doing nothing is the actual competitor here.

**Free statement generators.** They produce a template that asserts conformity. That is precisely the wrong artefact, because § 14 requires the statement to describe the *actual* state of accessibility, and § 17 requires the *evidence* behind any claimed exemption. A generator gives you the confession without the defence.

The gap sits exactly between them. The law does not require a small shop to be perfect. It requires it to be **honest, assessed, and documented** — and, where a fix is genuinely disproportionate, to have written down why, with numbers, and kept it for five years. Nobody is selling that document. Everyone is selling either a fake fix or a rebuild.

This is a regulatory-arbitrage play in the purest sense: the statute itself created a mandatory artefact, specified its contents, mandated a five-year retention period, and left a 60,000-shop market with no affordable way to produce it. AI collapses the expensive part — reading a shop's actual state, mapping findings to EN 301 549 criteria, costing remediation, and drafting a legally-shaped German document — from a €2,000 consulting engagement into a €59/month subscription.

The wedge is not "we make you accessible." It is: **when the letter arrives, you have a folder.**

## 4. Target market

- **Primary customer:** Owner or e-commerce lead at a German B2C online shop with 10–100 employees and €2M–30M revenue, running Shopware, Shopify, WooCommerce or a custom shop. Above the micro-enterprise carve-out (<10 employees AND <€2M turnover), so squarely in scope, but with no in-house accessibility competence and no budget for a €30K retrofit. Austria and the German-speaking Swiss/EU cross-border sellers are the immediate adjacency.
- **Why they buy:** Not idealism. Fear with a price tag on it. An Abmahnung costs €3,500–20,000 and arrives without warning; the market surveillance authority can act on a single consumer complaint under § 32 BFSG. The owner knows they are not compliant, knows a rebuild is unaffordable, and currently has no third option. They buy the third option.
- **Rough TAM reasoning:** 198,017 online shops in Germany as of July 2026. 68.8% are Kleingewerbe/Freiberuf and mostly fall under the micro-enterprise exemption. That leaves roughly 60,000 shops plausibly in scope. Capture 1,200 of them — 2% — at €59/mo and that is ~€850K ARR from Germany alone, before Austria, before the wider EAA states (Netherlands, France, Italy, Spain, Hungary all have active regimes with penalties from €250K to €1.26M).
- **Why now for them:** Q3 2026 is when automated regulator scanning starts. Until now, non-compliance was invisible unless a human complained. From this quarter it is discoverable at scale, mechanically. The shop owner's risk profile changed this month, not next year.

## 5. Product sketch (MVP)

- **Shop scan.** Point it at the domain; it crawls the journeys the law actually cares about — product page, filter, cart, checkout, contact — and tests against EN 301 549 / WCAG 2.1 AA. Automated testing catches perhaps a third of real issues, and we say so plainly rather than pretending otherwise.
- **Guided evidence capture.** For the criteria a crawler cannot judge (meaningful alt text, focus order sanity, error messaging), the tool walks a non-expert through short, specific checks in German and records their answers as dated evidence.
- **§ 14 Barrierefreiheitserklärung, generated honestly.** A statement that reflects the shop's measured state — including a truthful "partially conformant" where that is the fact — plus the required feedback mechanism and the Schlichtungsstelle BGG reference. Auto-republished when the state changes.
- **§ 17 disproportionate-burden file.** The core artefact. For each unresolved barrier: what it is, what fixing it would cost (benchmarked against real market quotes), the shop's revenue and resource context, the Anlage 4 criteria weighed, and the conclusion — assembled into a dated PDF built to be handed to the MLBF.
- **Remediation ledger.** A running record of what was fixed and when. This is what turns "we're not compliant" into "we have a documented, progressing programme," which is the posture that survives contact with an authority.
- **Abmahnung response pack.** Paste in the letter you received; get back a structured summary of what is being alleged, which allegations your evidence already answers, and an organised bundle to hand your lawyer — explicitly *not* legal advice, and it tells you to get a lawyer before signing any Unterlassungserklärung.
- **Five-year archive.** Every version of every document, timestamped and immutable, because § 17 demands five-year retention and the whole product is worthless if the file cannot be proven to predate the letter.
- **Quarterly re-scan and drift alert.** A theme update silently breaks contrast; you find out in a week, not from a lawyer.

## 6. AI angle — what's load-bearing

Remove the AI and this becomes a €2,000 consulting engagement — which is the status quo that is failing to serve 60,000 shops.

Three jobs are genuinely model-work. **Mapping messy findings to legal criteria:** raw axe-core output is a pile of DOM selectors; turning that into "here is which EN 301 549 clause this implicates, in the language a German market surveillance officer expects" is judgement, and it is the expensive hour a consultant bills. **Drafting the burden assessment:** § 17 requires reasoning against the Anlage 4 criteria — cost of compliance versus the operator's resources versus the benefit to disabled users. That is an argumentative German legal document synthesised from scan data plus company facts, regenerated per shop, per barrier, per year. Template engines cannot do it; that is exactly why the free generators produce useless output. **Reading the incoming Abmahnung:** parsing a German lawyer's letter and matching each alleged breach to the evidence already in the customer's file.

The deterministic scanner is commodity — it is open source. The moat-adjacent work is everything downstream of it, and none of it existed at this price point two years ago.

## 7. Localization angle

Germany-first, and the localization *is* the product. This cannot be a generic global accessibility tool with a German locale file.

The artefacts are statutory German documents citing German paragraph numbers — § 14 for the statement, § 17 and Anlage 4 for the burden assessment. The enforcement channel is German: the MLBF joint authority created by state treaty, consumer complaints under § 32, and the Abmahnung system, which is a peculiarly German legal instrument with no clean US or UK analogue. The register of who may send one, what a Unterlassungserklärung commits you to, and why you must never sign the pre-drafted version — that is domain knowledge a US accessibility vendor does not have and will not acquire quickly.

Pricing localises too: €59/mo lands as obviously-cheap against a €3,500 letter, in a market where the SMB norm is exactly this range for compliance SaaS (cookie consent, Datenschutz tooling).

Expansion order follows legal proximity, not market size: Austria first (parallel transposition, same language), then the Netherlands and France where enforcement is already live, each requiring its own document templates and authority-facing formats. That per-country legal work is a real barrier — which is the point.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** €59/mo Basis (one shop, quarterly re-scan, both documents, archive). €149/mo Pro (monthly scans, multiple domains/locales, Abmahnung response pack, priority regeneration). €399/mo Agentur for web agencies managing 10+ client shops. Annual prepay at 10 months for 12 — compliance buyers prefer to file it once and forget it.
- **ACV:** ~€850 blended, assuming the mix skews to Basis with meaningful annual prepay.
- **Rough math to $1M ARR:** 1,100 paying shops at a €850 blended ACV ≈ €935K ≈ $1.0M. Against ~60,000 in-scope German shops that is 1.8% penetration. Reachable, and Austria has not been touched yet at that point.
- **Rough math to $5M ARR:** Needs the agency tier to carry it plus two more countries. ~250 agencies at €399/mo (≈€1.2M) + ~3,500 direct shops across DE/AT/NL at ~€900 ACV (≈€3.15M) + a services layer — expert-verified manual audit as a €1,200 one-off attach — gets to ~€5M. The realistic constraint is not demand, it is whether per-country legal templating stays a two-month job or becomes a permanent tax.
- **Expansion path:** More domains and locales per customer; the annual § 17 re-assessment is a natural recurring event that justifies the subscription in year two; the one-off expert audit attach; and the agency tier, which converts a distribution channel into the highest-ACV segment.

Gross margin is clean — scanning is cheap, generation is a handful of long-context calls per shop per quarter. Fully-loaded COGS should sit under €4/customer/month, so the model is bounded by CAC, not delivery.

## 9. Go-to-market wedge — first 100 customers

- **Scan first, sell second — the free public risk check.** Build a landing page where a shop owner enters their domain and gets, in 60 seconds, a plain-German verdict on the two things regulators check first: is there a Barrierefreiheitserklärung at all, and does the checkout survive keyboard-only navigation. Both are automatable and both are the most-cited Abmahnung grounds. This is a lead magnet with the risk quantified in euros: "missing statement — this is the single most common ground in BFSG letters; letters cost €3,500–20,000."
- **Cold outreach with the finding already in hand.** Crawl German shop directories and Shopware/Shopify storefront fingerprints, filter to shops above the micro-enterprise threshold by Impressum and employee signals, and detect the missing § 14 statement automatically. Email the Impressum address with their specific finding, a screenshot, and the statutory citation. This is not spray-and-pray — it is a named defect on their own site. 2,000 shops, expect 8–12% reply on a specific compliance defect with a named legal ground, 15% of repliers convert. That is roughly 25–35 customers from one campaign, and the list is 60,000 deep.
- **Agencies and Shopware partners as the channel.** German web agencies are receiving these questions from clients right now and have no answer that isn't "let's quote a €20K rebuild" — which loses them the client. Give them a white-labelled €399/mo tier that lets them hand every client a defensible file. Twenty agencies at ten shops each is 200 shops from twenty sales conversations. Target the Shopware partner directory specifically; Shopware has been publicly pushing BFSG readiness since 2024 and its partners are primed.
- **Ride the Abmahnung news cycle in German legal-adjacent media.** Händlerbund, IT-Recht Kanzlei, OnlinehändlerNews and the e-commerce subreddits and forums cover every new BFSG letter wave. Publish a monthly tracker of what the current letters actually allege — real, sourced, useful — and become the reference that ranks when a panicked owner googles "BFSG Abmahnung erhalten." Compliance panic is high-intent, transactional search traffic.
- **Direct outreach to the already-burned.** Shops that have received a letter are the fastest close in the market, and they surface publicly in forum posts and lawyer commentary. Small pool, near-100% intent, and they become the case studies that make everything above credible.

## 10. Build complexity — justification

**Low.** The scanner is off-the-shelf — axe-core and Playwright do the crawling and rule evaluation, and this is a solved, open-source problem. The document generation is long-context LLM work against fixed statutory templates. The archive is versioned object storage with timestamps. There is no novel infrastructure, no custom model, no proprietary dataset required.

The real work is not engineering, it is legal drafting: getting the § 14 and § 17 templates genuinely right requires a German lawyer's time, and that is a €5–8K engagement, not a research project. A competent pair ships a credible v1 in 8–10 weeks, most of it spent on German-language document quality rather than code.

The honest complexity risk is scope creep into *fixing* accessibility. Resist it. The moment this becomes a remediation tool it competes with agencies on their turf and loses. It is a documentation product.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Helping operators produce statutorily-required documentation. Must stay clear of Rechtsdienstleistungsgesetz — the product organises evidence and never gives legal advice; the Abmahnung feature explicitly routes to a lawyer. |
| Ethical — no harm / dark patterns | ✅ | Only if the product refuses to generate false conformity claims. An honest "partially conformant" statement plus a real remediation ledger genuinely helps disabled users more than an overlay does. Selling paper as a substitute for access would fail this gate — see risk flags. |
| Market exists (evidence above) | ✅ | Live Abmahnung wave with priced consequences, ~60,000 in-scope shops, automated regulator scanning from Q3 2026. |
| 1–5 person team can build this | ✅ | Two people, 8–10 weeks, plus a lawyer on retainer. |
| Launchable with <$50K / ₹40L | ✅ | Roughly €15–20K all-in: legal templating, scanning infrastructure, outreach tooling. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | Priced, dated, and arriving by post. €3,500–20,000 per letter against a shop that knows it is exposed. Not quite hair-on-fire because it is probabilistic — most shops will not be hit this quarter, and "it hasn't happened to me yet" is a powerful sedative. |
| Demand evidence | 15 | 13/15 | Multiple independent hard signals: documented letter waves, published fine schedules per country, a €1M FTC action reshaping the incumbent category, and a dated Q3 2026 enforcement escalation. Docked because I could not surface first-person shop-owner complaints in forums — the evidence is lawyer- and vendor-published, which is a real gap. |
| Build feasibility | 15 | 13/15 | Open-source scanning plus LLM document generation. No novel infra. The binding constraint is lawyer time, not engineering. |
| Distribution clarity | 15 | 12/15 | Named list (198K shops, filterable), automatable defect detection that personalises outreach for free, and a warm agency channel. Docked because cold email into German SMBs runs into UWG restrictions on unsolicited commercial contact — this needs care, and the free-scan inbound motion may have to carry more weight than planned. |
| Revenue mechanics | 15 | 11/15 | €59/mo is benchmarked against German compliance-SaaS norms and is trivially justified against a €3,500 letter. The soft spot is retention: once the file exists, does year two feel necessary? The annual § 17 re-assessment and quarterly drift alerts are the answer, but that is a hypothesis, not a fact. |
| Time to first revenue | 8 | 8/10 | Pre-sellable off the free scan before the generator is finished. Realistically 6–8 weeks from launch to first paid, with no trial-to-paid mystery — the buyer is scared and the price is low. |
| Defensibility | 10 | 3/10 | The weak axis, and I will not dress it up. Scanning is commodity, prompts are copyable, and an existing German legal-SaaS player with a list could ship this in a quarter. What you get is per-country legal templating depth, the accumulating five-year archive as switching cost, and speed. Execution moat only. |
| **Total** | **100** | **76/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `content-heavy`

German-language capability is close to mandatory — the entire product is a German legal document and the buyers are German SMB owners who will not tolerate translated marketing. A non-German founder needs a German co-founder or first hire, not a translator.

### Key assumptions to validate (3–5)

1. **Assumption:** Shop owners will pay for documentation that does not actually make them accessible — they understand that a documented, honest, progressing position is legally better than silence. **How to test:** 30 calls with owners of in-scope shops. Present both options at price — €59/mo for the file versus a €15K retrofit quote — and ask which they would buy this month. Watch for the "but does this make me compliant?" objection; if it kills the conversation more than half the time, the positioning is wrong.
2. **Assumption:** A § 17 burden file materially helps when a letter lands. **How to test:** Pay two German lawyers who handle BFSG Abmahnungen for a written opinion on whether a documented § 17 assessment predating the letter improves the client's position. This is the load-bearing legal claim of the whole business and it must be verified before a line of marketing copy is written.
3. **Assumption:** The missing § 14 statement is detectable at scale across German shops, making cold outreach specific and cheap. **How to test:** Crawl 500 shops, measure what fraction have no statement or an inadequate one. If it is above 50%, the outreach engine works. If below 20%, the wedge is gone.
4. **Assumption:** Agencies will resell rather than build it themselves. **How to test:** Pitch 10 Shopware partner agencies on the €399 tier and see how many ask for the white-label versus how many say "we could do that in-house."
5. **Assumption:** Year-two retention holds. **How to test:** Cannot be tested pre-launch. Proxy: ask cohort-one customers at month three whether they would renew, and instrument whether they open the quarterly drift alerts at all.

### Risk flags

1. **Ethical/positioning risk — the overlay trap.** The failure mode is becoming what accessiBe became: a product that sells the appearance of compliance and leaves disabled users exactly where they were. The FTC fined accessiBe $1M for precisely this. The defence is structural, not cosmetic — never generate a full-conformance claim the scan does not support, make the remediation ledger prominent, and accept that some prospects will walk when told the honest answer. If the product drifts toward "compliance in one click" marketing, it becomes both unethical and legally radioactive.
2. **Regulatory risk — untested legal thesis.** Whether a self-authored § 17 assessment actually shields an SMB is not yet settled by German case law; the statute permits it, but enforcement practice in 2026 is young. A single adverse ruling on what constitutes an adequate burden assessment could reshape or invalidate the product's core artefact. Validate with counsel before scaling, and stay close to MLBF practice.
3. **Competitive risk — thin moat, obvious idea.** German legal-SaaS incumbents (IT-Recht Kanzlei, Händlerbund, the Datenschutz-generator players) already own the trust and the mailing lists for exactly this buyer. Any of them can bolt this on. The realistic outcome is a good bootstrapped business built on an 18-month head start, not a defensible category — price and plan accordingly, and consider whether partnering with one of them beats competing.
4. **Channel risk — UWG.** Germany restricts unsolicited commercial email to businesses more tightly than the US does. The cold-outreach playbook needs legal review, and the inbound free-scan funnel may have to become the primary motion rather than the supporting one.
5. **Market timing risk — the window is the enforcement wave.** Demand is driven by fear, and fear tracks enforcement intensity. If the Q3 2026 automated scanning underdelivers, or if German courts start throwing out BFSG Abmahnungen as unfounded — and some lawyers already argue many are formally defective — urgency collapses and this becomes a vitamin.

## 14. Structured verdict

```
Score:                  76/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder, German-native or with a German co-founder,
                        willing to spend €5–8K on lawyer time before writing marketing copy.
                        Compliance-SaaS or e-commerce background is a strong plus.
Time to revenue:        6–8 weeks from launch; pre-sales possible off the free scan sooner
Capital to launch:      €15–20K ($17–22K)
Top 3 assumptions to validate first:
  1. A documented § 17 burden assessment predating a letter materially improves the
     shop's position — get written opinions from two German BFSG lawyers.
  2. >50% of in-scope German shops lack an adequate § 14 statement — crawl 500 and count.
  3. Owners buy documentation over remediation at €59/mo — 30 calls, price presented.
Kill criteria:
  - Abandon if both lawyers say a self-authored § 17 file carries no weight against
    an Abmahnung. The product's core artefact would be decorative.
  - Abandon if the 500-shop crawl finds <20% missing statements — the cold-outreach
    wedge and the urgency narrative both collapse.
  - Abandon if <5 of 30 owner calls choose the €59/mo file over doing nothing.
  - Abandon if German courts broadly invalidate BFSG Abmahnungen as formally
    defective before v1 ships — the fear driving purchase disappears.
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Build the crawler and run it against 500 German shops filtered to the in-scope tier. Measure exactly two things: percentage with no § 14 Barrierefreiheitserklärung, and percentage whose checkout fails basic keyboard navigation. This costs almost nothing and produces the entire demand thesis as a number.
- **Day 3:** Brief two German lawyers who handle BFSG matters. One question, in writing: does a documented, dated § 17 disproportionate-burden assessment produced before an Abmahnung improve the recipient's position, and would you rather defend a client who has one? Pay for the hour; this is the cheapest way to kill or confirm the business.
- **Day 4–5:** Call 30 shop owners from the crawl, leading with their own specific finding. Present the choice at price — €59/mo documented-defence file versus a €15K retrofit quote versus doing nothing — and record which they pick. Do not pitch; ask. Then pitch 5 Shopware partner agencies on the €399 white-label tier.
- **Day 5 — decide.** Go if: ≥50% of crawled shops lack an adequate statement, **and** both lawyers say the § 17 file helps, **and** ≥8 of 30 owners say they would pay €59/mo this month. Anything less than all three and this is a VALIDATE, not a GO — the legal opinion in particular is a hard gate, because a product whose central artefact is legally decorative is an overlay by another name.
