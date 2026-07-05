---
title: "HeadingGuard — classification screen for Philippine customs brokers"
slug: philippine-customs-hs-classification
date: 2026-07-05
category: Logistics / Philippines Licensed Customs Brokers (AHTN classification + misdeclaration surcharge defense)
complexity: Medium
score: 71
verdict: GO
confidence: Medium
oneLiner: "Classifies each invoice line to AHTN, flags regulated-item traps, and builds the good-faith paper trail before you file the SAD."
tags:
  vertical: Logistics
  model: SaaS
  geography: SEA
  secondary: [Compliance-driven, AI-agent, SMB, Solo-builder, Document-AI]
axes:
  problem: 15
  demand: 10
  build: 11
  distribution: 11
  revenue: 11
  time: 7
  defensibility: 6
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# HeadingGuard — classification screen for Philippine customs brokers

## 1. One-liner

Classifies each invoice line to AHTN, flags regulated-item traps, and builds the good-faith paper trail before you file the SAD.

## 2. Trend signal — why now?

The Philippines Bureau of Customs turned tariff classification from a paperwork nuisance into a money-losing landmine, and the tooling brokers have hasn't caught up.

Under the Customs Modernization and Tariff Act, **misclassification "through insufficient or wrong description of the goods or use of wrong tariff heading" carries a 250% surcharge on the duty and tax due** — and where BOC deems it intentional or fraudulent, **500% plus seizure of the goods regardless of the discrepancy** ([PortCalls Asia summary of the BOC surcharge policy](https://portcalls.com/boc-issues-policy-on-surcharges-for-misclassified-undervalued-goods/), 2020; [MTF Counsel, "On Tariff Offenses"](https://mtfcounsel.com/2021/07/08/on-tariff-offenses/), 2021). The goods "shall be released only after the payment of the fine or surcharge" — so a bad heading doesn't just cost money, it strands the container.

What's the broker's tooling for this? The official [Philippine Tariff Finder](https://finder.tariffcommission.gov.ph/) is a free **keyword search** over the tariff book. It doesn't read your commercial invoice, doesn't reason from a product description to a heading, doesn't flag that your line is a regulated LARTAS/permit item, and doesn't assemble anything you could wave at an examiner. The AI classifiers that do exist — [Trade Insight AI](https://www.tradeinsightai.com/) and peers — are pitched at "trade compliance teams worldwide," i.e. enterprise, and they classify the code but don't know or build the **CMTA good-faith defense**.

And that defense is the whole game. The same rules that impose the 250%/500% surcharge carve out a **safe harbor**: no surcharge when the declaration "merely restated faithfully the data found in the corresponding certificate of origin... packing lists and the bill of lading" (good faith), when it "relied on an official government ruling," or when a rejected heading is a genuinely "difficult or highly technical question of tariff classification" ([PortCalls Asia, rules on goods-declaration errors](https://portcalls.com/rules-on-customs-fines-for-goods-declaration-errors-outlined/), 2020). A tool that classifies the line **and** shows which supplier document each declared field traces back to — that's not a lookup, that's insurance.

There are **676 licensed customs brokers in the Philippines, 99.7% of them single-owner operations**, plus 3,000+ chamber members ([Rentech Digital broker directory, Oct 2025](https://rentechdigital.com/smartscraper/business-report-details/list-of-customs-brokers-in-philippines); [Chamber of Customs Brokers](https://www.prc.gov.ph/customs-brokers-1)). A market of solo professionals who each personally sign off on filings that now carry 250% downside — and whose only tool is a free keyword box — is exactly the shape I look for.

Provenance:
  - Signal 1 (Demand/economic): CMTA imposes 250% surcharge for misclassification, 500% + seizure if intentional; goods held until paid — real, recurring, per-line money at stake — [PortCalls Asia](https://portcalls.com/boc-issues-policy-on-surcharges-for-misclassified-undervalued-goods/) — 2020, reaffirmed in practice 2024–2026
  - Signal 2 (Feasibility): Document-AI + LLMs now read a commercial invoice/spec and reason a product description to an 8-digit AHTN heading with citations; the CMTA safe-harbor rules are public and encodable — [Trade Insight AI proves the classification primitive works](https://www.tradeinsightai.com/) — 2026
  - Signal 3 (Demand/structural): 676 licensed brokers, 99.7% single-owner, armed only with a free keyword tariff finder — [Rentech Digital directory](https://rentechdigital.com/smartscraper/business-report-details/list-of-customs-brokers-in-philippines) — Oct 2025
  Category: Geographic arbitrage

## 3. The opportunity

Everyone building HS-code AI is building it for the global enterprise importer — a compliance department at a multinational that files thousands of lines and wants a bulk-classification API. Nobody is building the version a **solo Filipino licensed broker** actually needs at the moment of filing a Single Administrative Document (SAD).

The incumbent isn't a company, it's a **free government keyword box plus a broker's memory**. That's what HeadingGuard displaces. The keyword finder is 10× worse than an AI-first tool at the two things that matter: (1) going from a messy supplier description ("PU-coated woven polyester, 600D, cut panels") to the right 8-digit AHTN heading, and (2) telling you *before you file* that this line trips a LARTAS restriction, needs a clearance/permit, or sits in a heading BOC is known to challenge.

The wedge that no global tool touches: **HeadingGuard doesn't just give the code, it builds the CMTA good-faith file.** For every declared field it shows the source document it was lifted from (invoice, packing list, certificate of origin, BL), it attaches the GIR reasoning and any relevant BOC ruling for the chosen heading, and it exports a one-page "classification basis" the broker keeps on file. If BOC challenges the heading, the broker isn't defenseless facing a 250% surcharge — they have the exact paper the safe-harbor rule asks for. That's a moat a worldwide classifier can't copy without learning Philippine law.

## 4. Target market

- **Primary customer:** Licensed customs brokers (CB) in the Philippines operating as solo practitioners or 1–3 person brokerages — the 99.7% single-owner segment — concentrated in Metro Manila (472 of 676) but present in every port city. Secondary: in-house brokers at small forwarders and SME importers who file their own SADs.
- **Why they buy, in their words:** The pain isn't "I can't find a code" — it's *"if I get this heading wrong, it's a 250% surcharge and the client blames me, and my only tool is a keyword search and a 20-year-old tariff book."* They personally carry the liability and the client relationship. They'll pay to sleep at night before a big or ambiguous shipment.
- **Rough TAM reasoning:** 676 licensed CBs + a few thousand brokerage-firm and importer-side filers. Call the realistic reachable base ~2,000–3,500 individual professionals. Not huge — but at ₱2,000–6,000/mo ($35–105) that's a $1M–$2.5M ARR ceiling from the core segment alone, before expanding to Indonesia (BTKI) and the wider ASEAN AHTN base.
- **Why now for them:** BOC has been aggressively tightening misdeclaration enforcement and per-error fines (e.g. [BOC-Cebu's ₱5K-per-clerical-error policy](https://www.pna.gov.ph/articles/1108110)). The downside of a wrong heading went up; the tooling didn't.

## 5. Product sketch (MVP)

- **Invoice-in, headings-out:** upload or paste a commercial invoice / packing list; HeadingGuard extracts each line item and proposes the AHTN 8-digit heading with a plain-English rationale (which GIR, which section/chapter note it turned on).
- **Confidence + ambiguity flag:** each line gets a confidence band; "difficult/technical" lines are flagged as candidates for a BOC ruling request rather than a silent guess.
- **Regulated-item screen:** flags lines that hit LARTAS restrictions, need an import permit/clearance (FDA, BPI, DENR, etc.), or fall under a heading BOC commonly challenges — *before* filing.
- **Good-faith trail builder:** for each declared field, shows the source supplier document it traces to, and bundles the classification rationale + any cited BOC ruling into a one-page "classification basis" export.
- **Duty & tax preview:** shows the duty/VAT implication of the chosen heading vs. the next-most-likely heading, so the broker sees the surcharge exposure of getting it wrong.
- **Ruling & precedent lookup:** searchable index of published BOC/Tariff Commission rulings mapped to headings, so "has customs ruled on this before?" takes seconds.
- **Filing history:** per-client log of how each product was classified last time, so repeat shipments are consistent (consistency itself is a good-faith signal).

## 6. AI angle — what's load-bearing

Remove the AI and you're back to the free keyword box — the product doesn't exist. The load-bearing work is **reasoning from an unstructured, supplier-written product description to a legally-correct 8-digit heading**, applying the General Interpretative Rules and chapter/section notes, and doing it with a citation trail a human broker can audit and defend. That's exactly the judgment that used to require the broker's own experience and a lot of manual cross-referencing. Document-AI does the invoice extraction; the LLM does the classification reasoning and drafts the good-faith basis. Everything a keyword search can't do is the AI.

## 7. Localization angle

This *is* the localization play — it's the reason a global classifier can't just win here. HeadingGuard is Philippine-native on four axes a worldwide tool ignores: (1) **AHTN 8-digit** headings, not 6-digit HS; (2) the **CMTA surcharge + good-faith safe-harbor** logic baked into the output; (3) **LARTAS / local permit** flags (FDA, BPI, DENR, SRA, etc.); (4) **₱-priced** at a solo-broker wallet, not enterprise seats. Expansion is lateral within ASEAN — Indonesia's BTKI tariff book is the same AHTN spine with its own restricted-goods regime — so the second market is a re-skin of the same engine, not a rebuild.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** ₱2,000/mo solo tier ($35) for individual brokers (metered classification volume), ₱6,000/mo ($105) firm tier for 1–3 seat brokerages with shared client history and ruling library. Per-shipment "defense pack" add-on for high-value/ambiguous filings.
- **ACV:** ~$600–1,000/broker/year blended.
- **Rough math to $1M ARR:** ~1,200 paying brokers × ~$70/mo avg × 12 ≈ $1.0M. That's roughly a third of the reachable Philippine professional base — aggressive but not fantasy for a category-defining tool in a 676-strong licensed pool + firm staff.
- **Rough math to $5M ARR:** needs the Indonesia (BTKI) expansion live and firm-tier penetration up — ~5,000 paying seats across PH + ID at ~$85/mo avg. Plausible only as the ASEAN AHTN standard, not from the Philippines alone.
- **Expansion path:** volume-metered classifications → firm seats → per-shipment defense packs → country modules (ID, then MY/TH/VN AHTN) → API for forwarders' own systems.

## 9. Go-to-market wedge — first 100 customers

- **Scrape the roster and go direct.** The PRC/Chamber lists and directories (676 named CBs, 472 in Metro Manila) are public. Personalized outreach — "here's your last public shipment misclassified and what the 250% surcharge would've been" as a hook — to the top 300 by activity.
- **Chamber of Customs Brokers channel.** 3,000+ members, chapters, CPD (continuing professional development) events. Sponsor/present a session on "defending your classification under the CMTA surcharge rules" — the tool *is* the answer to the talk. Brokers renew licenses via CPD, so these rooms are full and recurring.
- **Ride the exam/PRC pipeline.** New licensees each year are the least confident classifiers and the most tool-hungry. Free tier for the first year post-license, seeded through review centers.
- **Forwarder partnerships.** Small freight forwarders that lean on 1–2 brokers will push the tool to reduce their own held-shipment risk; co-sell into their broker network.
- **Loud incident content.** Every published BOC seizure/surcharge case for misclassification is a piece of content: "here's the heading that cost them, here's how the good-faith trail would've protected them." The audience Googles these after it happens to them.

## 10. Build complexity — justification

Medium. The web app, invoice extraction, and LLM classification loop are off-the-shelf. The real work — and the moat — is **encoding the AHTN tariff tree, the GIR/chapter-note logic, the LARTAS/permit map, and the CMTA good-faith rules**, plus ingesting and indexing BOC/Tariff Commission rulings. That's domain-heavy data curation, not novel ML. A technical founder plus a licensed-broker advisor ships a credible v1 in 3–4 months; the ruling library and accuracy tuning are the ongoing grind.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Decision-support tool; the licensed broker remains the declarant and signer. No BOC accreditation needed to advise. |
| Ethical — no harm / dark patterns | ✅ | Reduces misdeclaration and builds an honest paper trail; anti-fraud by design. |
| Market exists (evidence above) | ✅ | 676 licensed brokers, hard statutory penalties, only a free keyword tool today. |
| 1–5 person team can build this | ✅ | Technical founder + broker advisor. |
| Launchable with <$50K / ₹40L | ✅ | Data curation + APIs; no capex. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 15/20 | 250%/500% surcharge + held goods is real, per-line, personally-carried pain — but it's fear-of-loss, felt per ambiguous shipment, not every single filing. |
| Demand evidence | 15 | 10/15 | Hard economic signal (statutory penalties, enforcement tightening) and a clear under-tooled base, but demand is inferred from law/enforcement rather than a loud organic complaint mine. |
| Build feasibility | 15 | 11/15 | Standard stack; the AHTN tree + rulings + good-faith logic is heavy but bounded data work, not research. |
| Distribution clarity | 15 | 11/15 | Named, finite, listed audience (676 + chamber) and a real channel (Chamber CPD) — conversion into a paid habit is the open question. |
| Revenue mechanics | 15 | 11/15 | Pricing fits solo wallets; $1M path is credible, but $5M needs ASEAN expansion. Small absolute base caps the Philippines-only ceiling. |
| Time to first revenue | 10 | 7/10 | Direct outreach to a listed audience can pre-sell in weeks, but data curation delays a trustworthy v1. |
| Defensibility | 10 | 6/10 | The CMTA good-faith trail + ruling library + broker workflow lock-in is a real local moat vs. global classifiers; still copyable by a determined local incumbent. |
| **Total** | **100** | **71/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required`

### Key assumptions to validate (3–5)

1. **Assumption:** Solo brokers will pay ₱2,000–6,000/mo for classification + defense, not treat the free Tariff Finder as "good enough." **How to test:** 30 broker interviews; pre-sell 10 annual seats before building the full engine.
2. **Assumption:** The AI can hit broker-trust-grade accuracy on real, messy supplier invoices for the headings that actually matter (textiles, electronics, mixed-material goods). **How to test:** blind-classify 200 historical lines from 5 friendly brokers; measure agreement with their filed headings and with BOC outcomes.
3. **Assumption:** The good-faith trail is perceived as genuine protection, not a gimmick. **How to test:** put the one-page "classification basis" in front of 10 brokers and 2 customs lawyers; ask "would you rely on this if BOC challenged you?"
4. **Assumption:** The Chamber CPD channel converts attendees to trials at a workable rate. **How to test:** run one sponsored session, measure sign-ups.

### Risk flags

1. **Small absolute market:** 676 licensed brokers caps the Philippines-only ARR; the thesis leans on ASEAN expansion to reach $5M. Enter knowing this is a $1–2M PH business unless ID/others land.
2. **Accuracy-liability risk:** a wrong heading the tool confidently suggested could cost a broker a 250% surcharge and torch trust fast. Product must be defensibly conservative — flag-and-defer on ambiguity, never over-claim confidence.
3. **Incumbent extension:** a global classifier (Trade Insight AI et al.) could bolt on AHTN + a "Philippines pack." The good-faith-trail + rulings moat is the defense — build depth there fast.
4. **Platform/regulatory dependency:** relies on public BOC/Tariff Commission data and stable CMTA rules; a major nomenclature update (AHTN revision) forces a re-index.

## 14. Structured verdict

```
Score:                  71/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder + licensed Philippine customs-broker advisor
Time to revenue:        8–12 weeks to first paid pilots (pre-sell before full engine)
Capital to launch:      ₹8–15 lakh / $10–18K (data curation + APIs + advisor)
Top 3 assumptions to validate first:
  1. Brokers pay ₱2–6K/mo vs. free Tariff Finder — 30 interviews + 10 pre-sold annual seats
  2. Broker-trust-grade accuracy on messy real invoices — blind-classify 200 historical lines
  3. Good-faith trail reads as real protection — review with 10 brokers + 2 customs lawyers
Kill criteria:
  - Abandon if <8 of 30 interviewed brokers will pre-pay after seeing the demo
  - Abandon if blind classification agreement with filed/BOC-correct headings is <85% on the priced-item set
  - Abandon if a global classifier ships a credible AHTN + good-faith-trail Philippines pack before your v1
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Pull the public broker roster; hand-classify 50 real supplier invoice lines (borrowed from 3 friendly brokers) with a prompt-only prototype; measure agreement with what they actually filed. This is the accuracy gut-check.
- **Day 3–4:** Build a clickable demo: invoice in → AHTN headings + LARTAS flags + one-page good-faith basis out. Show it live to 15 brokers (Metro Manila, phone/Zoom). Ask the closing question: *"Would you pay ₱3,000/mo for this?"*
- **Day 5:** Go / no-go. **Go only if ≥8 of 15 brokers say yes to paying AND the Day-1 accuracy gut-check clears ~85% agreement on the priced-item set.** Anything softer means the free Tariff Finder is winning — kill or reshape.

The result is falsifiable: a hard yes/no count on willingness to pay, and a measured accuracy number against real filed headings — not "brokers seemed interested."
