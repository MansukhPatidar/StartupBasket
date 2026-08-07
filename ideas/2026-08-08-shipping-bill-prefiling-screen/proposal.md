---
title: "LEOGuard — pre-filing screen for Indian MSME exporters"
slug: shipping-bill-prefiling-screen
date: 2026-08-08
category: TradeTech / India
complexity: Medium
score: 74
verdict: GO
confidence: Medium
oneLiner: "Catches the shipping bill error that silently forfeits your RoDTEP refund, while it can still be fixed."
tags:
  vertical: TradeTech
  model: SaaS
  geography: India
  secondary: [SMB, AI-agent, Compliance-driven, Multilingual, Solo-builder]
axes:
  problem: 16
  demand: 12
  build: 10
  distribution: 12
  revenue: 11
  time: 8
  defensibility: 5
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# LEOGuard

## 1. One-liner

Catches the shipping bill error that silently forfeits your RoDTEP refund, while it can still be fixed.

## 2. Trend signal — why now?

Three things converged in the last twelve months, and they point the same direction.

India is pushing to full customs automation — "Customs 2.0" — targeted at April 2026. ICEGATE 2.0 now handles roughly 98% of India's international trade documentation, linking 675,000+ registered users to 250+ customs locations. The upside is speed. The downside, which nobody sells a product for, is that **automated cross-verification means rejections happen faster, with less human intervention, and with less room for informal resolution.** The old fix — your CHA knows a guy at the port — is being engineered out of existence.

At the same time the penalty for a sloppy filing got sharper. Document mismatch — where product description, HS code, or weight differs between the commercial invoice, packing list, and shipping bill — is the single most common cause of shipping bill queries on ICEGATE. A single digit wrong in an HS code triggers a data-mismatch flag. One documented case: a Mumbai importer of auto components, five-day delay from an HS code mismatch, **₹28,000 in added cost** and a disrupted production schedule.

And here's the part that turns an annoyance into a business. RoDTEP pays 0.3%–4.3% of FOB value depending on HS code, with labour-intensive goods like textiles at the top of the band. That benefit is **tied to the HS code on the shipping bill**, and it is not retroactively fixable: "Exporter must declare RoDTEP in the electronic Shipping Bill at the time of filing — no back-dated claims." If the flag or the code is wrong, you generally cannot claim later. Section 149 of the Customs Act only permits amendment on documentary evidence that existed at the time of export, at the discretion of the officer. Misclassification invalidates refund claims retroactively. And most MSMEs discover HS code errors only when claims fail — six months later, when the money is already gone.

So: an irreversible, silent, recurring loss of 0.3–4.3% of export value, caused by a data-entry mismatch, on a deadline that is being automated tighter this year.

```
Provenance:
  - Signal 1 (demand): Document mismatch in HS code/description/value is the single most common cause of ICEGATE shipping bill queries; single-digit HS errors trigger automated data-mismatch flags; one documented case cost ₹28,000 on a 5-day delay — https://blogs.tarangya.com/the-digital-nerve-center-master-icegate-2-0-to-future-proof-your-logistics-in-2026/ and https://www.cargopeople.com/blog/why-first-time-importers-fail-in-compliance-proven-ways-to-cut-cost-and-delays/ — 2026-08-08
  - Signal 2 (feasibility): DGFT exposes APIs consumable by technical partners of IEC holders, with the IEC primary user granting access via DSC/Aadhaar eSign and able to revoke it; ICEGATE 2.0 covers ~98% of trade documentation — https://gjepc.org/solitaire/dgft-introduces-bulk-upload-and-api-integration-for-self-certification-of-ebrc/ — 2026-08-08
  - Signal 3 (economic): RoDTEP pays 0.3%–4.3% of FOB tied to HS code, irreversibly forfeited if the flag/code is wrong at filing ("no back-dated claims"); CHAs already charge ₹1,500–₹5,000 per shipping bill, an established line item — https://eximpe.com/blog/b2b/rodtep-scheme-in-2026-meaning-rates-claim-process-practical-guide-for-exporters and https://www.skydo.com/blog/custom-clearance — 2026-08-08
  Category: Regulatory arbitrage
```

## 3. The opportunity

Every existing tool in this space sells to the wrong person or solves the wrong half of the problem.

**The customs automation vendors** — KlearNow, Digicust, Readerr — sell to customs brokers and CHAs. Their pitch is throughput: extract fields from bills of lading and invoices at 95%+ accuracy so a brokerage processing 700 jobs a month stops drowning in OCR corrections. Good product, wrong buyer. The CHA's incentive is to clear the shipment; the RoDTEP that got misclassified is the exporter's money, not the CHA's, and the CHA is not underwriting it.

**The export management platforms** — Pazago, Covoro (90+ customers, HS code automation and incentive claims), Vayana, Credlix — sell broad suites: order management, document handling, logistics, insurance, finance, eBRC. They're building the system of record. That's a heavier sale, a heavier product, and it competes for a budget line the exporter doesn't have yet.

Nobody sells the narrow, urgent thing: **a screen that reads your draft filing set the day before it goes in, and tells you which field will cost you money.** Not a suite. Not a filing tool — it doesn't touch ICEGATE, so there's no licensing question. It's a second pair of eyes on the CHA's work, priced per shipment, that pays for itself the first time it catches one misclassified consignment.

The wedge is the asymmetry: the CHA fills the form, the exporter eats the loss, and the loss is invisible for six months. Whoever makes that loss visible *before* filing gets paid.

## 4. Target market

**Primary customer:** The proprietor or export manager at an Indian MSME exporter doing ₹5–50 crore in annual export turnover — textiles and garments, leather, engineering goods, chemicals and plastics. Ten to a hundred shipments a year. They use an external CHA; they have no in-house customs expert. The buyer is the person who signs the CHA's invoice.

**Why they buy:** Because their refund is a percentage of revenue and it quietly doesn't arrive. RoDTEP at 1–4% of FOB on textiles is not a rounding error — on ₹20 crore of exports it's ₹20–80 lakh a year. The failure mode is not a fine they can argue; it's a credit that never appears in the ICEGATE ledger, discovered months later when reconciliation fails, at which point Section 149 gives them a discretionary appeal at best. Common claim failures are exactly the things a screen can check: wrong or outdated HS code mapping, mismatched invoice/packing-list/shipping-bill data, RoDTEP flag not declared, rate notifications not reviewed.

**Rough TAM reasoning:** Around 72,775 distinct exporters traded in FY 2022-23. MSMEs contribute nearly 45% of India's total exports. Call the serviceable core 30,000–40,000 MSME exporters with enough shipment volume to feel this. At ₹3,000/month average that's a theoretical ₹100–140 crore ceiling — far more than needed for a ₹8–40 crore ARR business, which is the target.

**Why now for them:** Customs 2.0's April 2026 automation removes the informal correction path they've been relying on. The error rate stays the same; the forgiveness disappears.

## 5. Product sketch (MVP)

- **Drop the set, get a verdict.** Upload the commercial invoice, packing list, and the CHA's draft shipping bill (or a checklist copy) — PDF, scan, or photo. Get a pass/fail screen in under two minutes.
- **Cross-document mismatch report.** Every field that must agree across the three documents — product description, HS code, quantity, weight, FOB value, Incoterm, currency — flagged where it doesn't, with both values shown side by side.
- **HS code second opinion.** For each line item, the product description is classified independently and compared to the code on the draft. Disagreements are ranked by rupee consequence, not by confidence score.
- **"This is what it costs you" line.** For each flagged HS code, show the RoDTEP rate for the code on the draft vs. the rate for the suggested code, applied to the actual FOB value on the invoice. One number, in rupees, per shipment.
- **Scheme-flag checklist.** Confirms the RoDTEP/drawback declaration and scheme codes are present on the draft — the omission that cannot be fixed after filing.
- **Rate-notification watch.** Alerts when a DGFT/CBIC notification changes the rate or eligibility for an HS code the exporter has actually used before.
- **Shipment ledger.** Every screened shipment retained with its documents and verdict — which doubles as the contemporaneous evidence file if a Section 149 amendment is ever needed.

## 6. AI angle — what's load-bearing

Remove the AI and there is no product.

Two jobs are genuinely model work. First, **reading heterogeneous documents** — every buyer's commercial invoice has a different layout, every CHA sends a differently formatted draft, half of it arrives as a phone photo of a printout. Template-based OCR is exactly what the incumbent vendors describe moving beyond; the reason this is buildable by three people in 2026 and wasn't in 2022 is that a general vision model reads an unseen invoice layout without anyone maintaining a template library.

Second, and this is the harder half: **classifying a product description into an 8-digit ITC-HS code.** "100% cotton knitted men's t-shirt, 180 GSM, printed" has to land on a specific subheading, and the wrong subheading means the wrong duty rate and the wrong RoDTEP category. This is judgment over a large, hierarchical, exception-riddled schedule with mixed-material and multi-use ambiguity — the classic case where goods appear to qualify under more than one code. That's a language problem, not a lookup.

The honest constraint: classification is not reliably automatable to 100%, and the product must not pretend otherwise. So the output is deliberately shaped as *disagreement with rupee stakes attached* — "your CHA said X, the description reads like Y, the difference is ₹1.4 lakh on this consignment, go check." A flag a human resolves is a valid product. A silent auto-correction would be a liability.

## 7. Localization angle

This is India-native by construction, not by translation. The regulatory surface — ITC-HS, ICEGATE, shipping bills, RoDTEP, drawback, Section 149, DGFT rate notifications — exists nowhere else. A global trade-compliance tool cannot be pointed at this market; the schedule, the scheme codes, and the amendment law are all local.

Pricing has to be local too. ₹2,000–5,000/month works where $49/month does not, and it sits naturally beside a CHA bill the exporter already pays at ₹1,500–5,000 per shipping bill. Distribution is local: exporters live in WhatsApp, and the natural v1 intake is a WhatsApp number you forward the document set to. Language matters at the edges — proprietors in Tirupur, Surat, and Ludhiana will read a Hindi, Gujarati, or Tamil summary line faster than an English report, even when the underlying documents are in English.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** Three tiers by shipment volume. Starter ₹1,999/mo (up to 10 screens), Growth ₹4,999/mo (up to 40), Pro ₹12,999/mo (unlimited + rate-notification watch + multi-user). Per-screen top-ups at ₹299.
- **ACV:** ₹48,000 (~$550) blended. Deliberately modest — this is a line item, not a platform purchase.
- **Rough math to $1M ARR:** ~1,550 paying exporters at ₹4,000/mo average. Against a serviceable base of 30,000–40,000 MSME exporters, that's ~4–5% penetration. Reachable.
- **Rough math to $5M ARR:** ~7,500 customers at the same ACV — that's aggressive against this base, so $5M more likely needs ACV expansion instead: move upmarket to ₹50–200 crore exporters with in-house trade desks at ₹25,000–40,000/mo, and add the import side (bill of entry pre-check, where duty overpayment is the mirror-image loss). Realistically this is a strong ₹15–25 crore ARR business; calling it $5M requires the import expansion to work.
- **Expansion path:** shipments screened → import bills of entry → multi-IEC group accounts → the retained shipment ledger sold as an audit-defence archive.

Margin is fine: the cost driver is document pages processed, and per-shipment inference cost is rupees, not hundreds of rupees, against a ₹200–500 realized price per screen.

## 9. Go-to-market wedge — first 100 customers

The great advantage here is that **the prospect list is public and the pitch is arithmetic.**

- **Free loss audit on public data.** Indian export shipment data with exporter names, HS codes, and values is commercially available through trade-data providers. Pull 2,000 MSME exporters in textiles and engineering, and for each one compute where their declared HS codes look inconsistent with their own product descriptions across shipments. Send a one-page report: "you shipped under these 3 codes for what appears to be the same product; if the lower-rate one is wrong, that's ₹X of RoDTEP." That's not a cold email, that's an unpaid consultant's finding. Expect a high reply rate relative to normal cold outreach because the subject line contains their own money.
- **Export promotion councils.** AEPC (apparel), EEPC (engineering), CLE (leather), and FIEO run member workshops constantly and are actively vocal on RoDTEP — FIEO publicly campaigned on rate restoration from April 1. Offer a free "why your RoDTEP is short" clinic to a regional chapter. One workshop puts you in front of 50–150 exporters who all have the same problem, with the council's implicit endorsement.
- **Cluster-by-cluster, physically.** These exporters are geographically concentrated — Tirupur for knitwear, Surat for textiles, Ludhiana for hosiery, Rajkot and Coimbatore for engineering. Land 20 customers in one cluster and word of mouth does the rest, because they all use the same handful of CHAs and talk to each other constantly.
- **CHAs as a channel, carefully.** The good CHAs will resell this as a quality guarantee ("we screen every filing"); the bad ones will fight it. Sign the good ones as referral partners at 20% recurring — a CHA with 60 exporter clients is a distribution node.

The first 100 come from the first two bullets inside 90 days. The audit report is the whole wedge — it demonstrates the product's exact value before the exporter has spent a rupee.

## 10. Build complexity — justification

**Medium.** Nothing here needs invention. Document extraction is an off-the-shelf vision model call; the ITC-HS schedule and RoDTEP Appendix 4R rate tables are public data that need to be ingested, structured, and kept current; the cross-document comparison is deterministic logic once the fields are extracted. The genuinely hard part is classification quality — getting HS suggestions accurate enough that flags are trusted rather than dismissed as noise, which is an evaluation-and-tuning grind against real filings rather than a research problem.

Call it **12–16 weeks to v1 for two people**, with the caveat that you need a customs domain advisor on retainer from week one. Skipping the DGFT API integration for v1 (documents in, verdict out) cuts scope substantially and removes the consent-flow dependency; add it later for automatic ledger reconciliation.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Read-only advisory tool. Doesn't file with ICEGATE, doesn't act as a customs broker, so no CHA licensing requirement. Must be positioned as advisory, not as a guarantee. |
| Ethical — no harm / dark patterns | ✅ | Helps exporters claim benefits they're legally entitled to and file accurately. Aligned with the customs authority's own interest in correct declarations. |
| Market exists (evidence above) | ✅ | 72,775+ distinct exporters; established ₹1,500–5,000/shipping-bill spend with CHAs; funded competitors (Pazago, Covoro at 90+ customers) proving budget exists. |
| 1–5 person team can build this | ✅ | Two engineers plus a part-time customs advisor. |
| Launchable with <$50K / ₹40L | ✅ | Inference, trade-data subscription, advisor retainer. Well under ₹15L to first revenue. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | Recurring, quantified, irreversible money loss — 0.3–4.3% of FOB. Docked because it's a *silent* pain: discovered six months late, so it's felt less acutely than a shipment sitting at port. Latent pain sells harder than burning pain. |
| Demand evidence | 15 | 12/15 | Strong structural evidence: documented most-common-cause-of-queries, established CHA spend, funded competitors in adjacent seats. Docked because I could not surface verbatim exporter complaints — Reddit and Business Standard were unreachable during research, so customer voice is from trade press and practitioner guides, not the exporters' own words. |
| Build feasibility | 15 | 10/15 | Off-the-shelf extraction, but HS classification accuracy is a real tuning grind and the rate/schedule data needs continuous maintenance. 12–16 weeks, not 6. |
| Distribution clarity | 15 | 12/15 | The public-trade-data loss audit is a genuinely strong, specific wedge with a named list. Export promotion councils are a real, warm channel. Docked because the audit's reply rate is unproven and geographic clusters need feet on the ground. |
| Revenue mechanics | 15 | 11/15 | Pricing anchored to an existing line item, ₹1M ARR needs only ~4–5% penetration. Docked because $5M genuinely requires the import-side expansion to work — the core India MSME export screen alone tops out lower. |
| Time to first revenue | 10 | 8/10 | The free audit report pre-sells before the product is finished; pilots plausible in 6–8 weeks. Not 9–10 because MSME proprietors don't self-serve checkout — this needs a conversation. |
| Defensibility | 10 | 5/10 | Execution moat mainly. Accumulating classification corrections per customer and per cluster compounds, and the retained shipment ledger creates switching cost. But Covoro and Pazago could ship this feature; the defence is focus and a 12-month head start, not a wall. |
| **Total** | **100** | **74/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required`

This needs someone who can build a reliable extraction-and-classification pipeline *and* a customs person who knows why an 8-digit code is wrong. Without the second, the product ships confident nonsense and dies on the first false flag.

### Key assumptions to validate

1. **Assumption:** HS misclassification and mismatch are common enough in real MSME filings to justify a per-shipment screen — not a rare event. **How to test:** get 50 real past shipment document sets from 10 exporters, screen them manually with a customs advisor, and measure what fraction have at least one revenue-affecting error. Need ≥25%.
2. **Assumption:** Exporters, not CHAs, will accept the bill for this. **How to test:** in the first 30 sales conversations, track how many say "ask my CHA to pay for it." If >50% deflect to the CHA, the buyer is wrong and the whole pricing model inverts.
3. **Assumption:** HS classification can hit accuracy high enough that flags are trusted. **How to test:** benchmark against 500 human-verified line items. If precision on flagged disagreements is below ~70%, exporters will learn to ignore the alerts and the product is noise.
4. **Assumption:** The public-trade-data loss audit generates replies. **How to test:** send 200 audit reports, measure reply rate. Need ≥8%.

### Risk flags

1. **Incumbent encroachment:** Covoro already does HS code automation and incentive claims for exporters, with 90+ customers. This is the single biggest risk — the wedge is narrower than it first looks, and the differentiation is pre-filing timing and per-shipment pricing rather than a capability nobody has.
2. **Regulatory obsolescence — the good kind of problem, still a problem:** if Customs 2.0 eventually ships its own validation layer that catches mismatches before submission, the core value evaporates. Government-built pre-validation is a plausible 2–4 year outcome.
3. **Liability positioning:** a missed error on a screened shipment will produce an angry customer who believes they were insured. Terms must be explicit that this is advisory. Do not drift into guaranteeing outcomes.
4. **Advisory dependency:** the product's credibility rests on customs domain expertise the founding team probably doesn't have internally. If the advisor leaves, classification quality decays silently.

## 14. Structured verdict

```
Score:                  74/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder who can build extraction + classification,
                        paired with a customs/EXIM domain expert (ex-CHA, ex-DGFT
                        consultant, or trade-compliance advisor) from day one
Time to revenue:        8–12 weeks (pilots pre-sold off free audit reports)
Capital to launch:      ₹12–15 lakh ($14–18K)
Top 3 assumptions to validate first:
  1. Error prevalence — screen 50 real past shipment sets with an advisor; need
     ≥25% containing a revenue-affecting error
  2. Buyer identity — in 30 sales conversations, <50% should deflect payment to
     their CHA; if more, the pricing model is wrong
  3. Classification precision — ≥70% precision on flagged HS disagreements against
     500 human-verified line items
Kill criteria:
  - Abandon if <25% of 50 real screened shipment sets contain a revenue-affecting error
  - Abandon if HS-flag precision stays below 70% after tuning on real filings
  - Abandon if >50% of prospects insist their CHA should bear the cost
  - Abandon if CBIC ships native pre-filing validation into ICEGATE before v1 launches
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Get real documents. Call 10 MSME exporters in one cluster — Tirupur or Rajkot — and ask for 5 past shipment sets each (invoice, packing list, shipping bill). Offer a free manual audit in exchange. This is the whole sprint's raw material.
- **Day 3–4:** Sit with a customs advisor and manually screen all 50 sets. Record, per set: was there a cross-document mismatch, was the HS code defensible, was the RoDTEP flag correctly declared, and what was the rupee consequence. No software — a spreadsheet.
- **Day 5:** Take the findings back to the 10 exporters and ask one question: "we found ₹X of exposure across your last 5 shipments — would you pay ₹4,999/month to have this checked before every filing?"

**Falsifiable outcome:** ≥25% of the 50 shipment sets contain at least one revenue-affecting error, AND ≥3 of the 10 exporters commit to a paid pilot. Miss either number and the pain is theoretical, not commercial — kill it.
