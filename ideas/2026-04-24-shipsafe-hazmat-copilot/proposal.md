---
title: "ShipSafe — AI hazmat compliance copilot for small shippers"
slug: shipsafe-hazmat-copilot
date: 2026-04-24
category: Logistics SaaS / Global
complexity: Medium
score: 76
verdict: GO
confidence: Medium
oneLiner: "AI copilot that turns Safety Data Sheets into compliant dangerous goods declarations in minutes."
tags:
  vertical: Logistics
  model: SaaS
  geography: Global
  secondary: [AI-agent, Compliance-driven, SMB, Solo-builder, Ecommerce]
founderFit: [technical-heavy]
featured: false
---

# ShipSafe

## 1. One-liner

AI copilot that turns Safety Data Sheets into compliant dangerous goods declarations in minutes, saving small shippers from $250K fines.

## 2. Trend signal — why now?

The hazmat compliance landscape shifted meaningfully in early 2026. Three things converged:

**Regulatory tightening.** IATA's 67th Edition of Dangerous Goods Regulations took effect January 1, 2026, with new lithium battery state-of-charge limits and updated classification requirements. IATA simultaneously launched DG Digital in March 2026, signaling that the paper-based DGD process is finally going digital — but only for IATA members using their expensive DG AutoCheck platform.

**E-commerce hazmat explosion.** Every brand selling lithium-battery devices, cosmetics, aerosols, perfumes, nail polish, or cleaning products ships regulated goods. Amazon FBA's hazmat review process has become a notorious bottleneck, with sellers reporting 6+ month loops of SDS rejections. One Seller Central thread describes submitting SDS for 6 months with repeated rejections — 97% of factory SDSs are written for bulk freight, not FBA-quantity compliance.

**AI document intelligence matured.** SDS parsing tools (Affinda, SdbHub, cbs AID) now extract chemical classifications from any SDS format at 99%+ accuracy. LLMs can map extracted data to UN numbers, proper shipping names, packing groups, and hazard classes. The CBP January 2026 ruling restricting unlicensed AI from deriving HS codes beyond 6 digits doesn't apply to DG classifications — the shipper is the responsible party, and AI assists rather than replaces.

Provenance:
  - Signal 1: IATA 67th Edition DGR effective Jan 2026 + DG Digital launch March 2026 — https://www.iata.org/en/pressroom/2026-releases/2026-03-12-01/ — 2026-03-12
  - Signal 2: Amazon FBA sellers trapped in hazmat review loops, 97% of factory SDSs rejected for FBA — https://sellercentral.amazon.com/seller-forums/discussions/t/bb5e40108ad9373604e897b67cf9d407 — 2025-2026
  - Signal 3: AI SDS parsing achieves 99%+ extraction accuracy across all 16 sections — https://www.cbs-consulting.com/us/processing-safety-data-sheets-sds-with-ai/ — 2026
  Category: Tech-unlock

## 3. The opportunity

The gap: dangerous goods compliance is a $250K-fine problem being solved with $0 tools (paper forms, fillable PDFs) or $5K+ enterprise software (Labelmaster DGIS, DGAssistant at $400/yr but desktop-era UX). There's nothing in between for the small shipper doing 5–200 hazmat shipments per month.

The incumbents — Labelmaster, DGOffice, DecMaster — are legacy tools designed for large chemical shippers and freight forwarders. They assume the user already knows their UN number, packing group, and subsidiary risks. A cosmetics brand founder shipping perfume samples doesn't know any of that. They have an SDS from their manufacturer and a FedEx account. Everything between those two endpoints is currently manual, error-prone, and terrifying because the fines are existential.

ShipSafe closes that gap. Upload an SDS (or paste your product description), and the AI extracts the hazard classification, determines the correct UN number and proper shipping name, selects the packing group, checks quantity limits against the transport mode (air/ground/ocean), and generates a compliant Shipper's Declaration for Dangerous Goods or DOT shipping paper — ready to print or transmit electronically.

## 4. Target market

- **Primary customer:** E-commerce brand owners (DTC, Amazon FBA, Shopify) shipping products that contain lithium batteries, aerosols, cosmetics, fragrances, cleaning chemicals, or other regulated materials. Companies with 1–50 employees, $500K–$20M revenue, doing 5–200 hazmat shipments/month.
- **Secondary customer:** Small manufacturers, chemical distributors, and independent freight forwarders handling DG cargo for clients.
- **Why they buy:** They're terrified. Civil penalties up to $83,439 per violation per day. A single mislabeled package can result in fines "big enough to bankrupt a small or medium-sized business" (PHMSA). Carrier surcharges of $40–50 per hazmat package already eat margin. Rejection and re-work eat time. Current workaround: pay a consultant ($150–300/hr), use a fillable PDF and pray, or avoid shipping hazmat entirely and lose revenue.
- **Rough TAM reasoning:** ~14,000 licensed customs brokers in the US alone. Hundreds of thousands of e-commerce sellers shipping regulated products (every electronics, beauty, and cleaning brand). Even capturing 2,000 small shippers at $99/mo = $2.4M ARR.
- **Why now for them:** IATA 67th Edition changes, Amazon tightening hazmat review enforcement, new lithium battery SoC limits for air transport — the compliance burden just increased while the tools stayed the same.

## 5. Product sketch (MVP)

- Upload an SDS (PDF, image, or scanned document) — AI extracts all 16 sections automatically
- Auto-classification: determines UN number, proper shipping name, hazard class, packing group, and subsidiary risks from SDS data
- Transport mode selector (air/ground/ocean/multimodal) with quantity-limit validation per mode
- Generates IATA Shipper's Declaration for Dangerous Goods (DGD) in the official column format
- Generates DOT 49 CFR compliant shipping papers for US ground transport
- Amazon FBA SDS compliance checker — flags issues that cause rejection before you submit
- Searchable product library: classify once, ship forever — saves your products with their DG profiles
- Compliance audit trail: timestamped record of every declaration generated, stored for 2+ years

## 6. AI angle — what's load-bearing

The AI does the hard work that currently requires either a trained hazmat professional or expensive desktop software:

1. **SDS parsing** — OCR + NLP extracts chemical names, CAS numbers, GHS classifications, flash points, and transport information from messy, inconsistent manufacturer SDSs. This is the biggest barrier — no two SDSs look alike.
2. **Hazard classification engine** — Maps extracted chemical data to the correct UN number, proper shipping name, packing group, and hazard class. Cross-references against IATA DGR Table 4.2, DOT 49 CFR 172.101 Hazardous Materials Table, and IMDG Code. Handles mixed-class goods and limited/excepted quantities.
3. **Declaration generation** — Fills out the DGD/shipping paper with the correct sequence (UN number → PSN → class → packing group → quantity → authorization), validates all required fields, and checks for mutual exclusions.
4. **Ongoing compliance monitoring** — When regulations update (e.g., IATA 68th Edition), the system re-validates saved product profiles and flags anything that changed.

Remove the AI, and you're back to a fillable PDF form. The entire product collapses.

## 7. Localization angle (if any)

N/A initially — this is a global play because DG regulations (IATA DGR, DOT 49 CFR, IMDG Code, ADR) apply internationally. The core value is the same whether you're in New York, London, or Singapore.

That said, geographic expansion opportunities exist:
- **EU/ADR ground transport** compliance adds a second regulatory framework and widens the market to European shippers
- **Multi-language SDS support** — many SDSs from Chinese, Korean, and Indian manufacturers are in local languages. AI translation + extraction is a wedge for cross-border sellers.
- Pricing can be localized: $99/mo in the US, EUR 79/mo in EU, potentially lower for emerging markets.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** $49/mo (Starter, up to 20 declarations/mo), $99/mo (Pro, up to 100 declarations/mo), $249/mo (Business, unlimited + API access + team seats)
- **ACV:** ~$1,200 (blended average, most customers on Pro at $99/mo)
- **Rough math to $1M ARR:** 834 customers at $100/mo average = $1M ARR
- **Rough math to $5M ARR:** 3,500 customers at $119/mo average (mix shifts toward Business tier as companies grow) = $5M ARR
- **Expansion path:** Per-shipment overage fees above tier limits. Carrier integration add-ons (direct submission to FedEx/UPS/DHL). Training/certification module upsell. Compliance-as-a-service for agencies managing multiple shipper clients.

## 9. Go-to-market wedge — first 100 customers

1. **Amazon Seller Central forums + r/FulfillmentByAmazon**: Monitor the hazmat review threads (dozens of active ones). DM sellers stuck in SDS rejection loops. Offer a free SDS audit — "paste your ASIN, we'll tell you why your SDS keeps getting rejected." Convert at 10–15% to paid.
2. **Hazmat Facebook groups + LinkedIn**: Groups like "Hazmat Transportation Professionals" (12K+ members), "Dangerous Goods Shipping" communities. Post educational content: "7 DGD mistakes that trigger $50K fines" with a free declaration check.
3. **Shopify/DTC brand communities**: Target brands selling electronics, beauty, CBD, vape, cleaning products. Partner with 3PL aggregators (ShipBob, ShipMonk, ShipNetwork) who already have hazmat fulfillment customers needing compliance help upstream.
4. **Content SEO**: "How to ship lithium batteries legally" — high-intent, low-competition keyword cluster. Write the definitive guide, gate the tool behind a free trial.
5. **Cold outreach to chemical distributors**: Scrape NACD (National Association of Chemical Distributors) member directory (~400 companies). Personalized demo showing their specific products auto-classified.

## 10. Build complexity — justification

**Medium.** The AI parsing layer uses existing SDS extraction APIs (Affinda, Klippa, or custom fine-tuned model). The regulatory database (IATA DGR, DOT HMT, IMDG Code) needs to be structured and kept current — this is the main engineering lift, probably 6–8 weeks of data modeling. The declaration generator is template-driven. The web app itself is standard SaaS (auth, billing, document upload, PDF generation). A 2-person team (one backend/AI, one full-stack) can ship a credible v1 covering IATA DGD + DOT 49 CFR in 12–14 weeks.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Software assists classification; the shipper remains the responsible party. CBP's Jan 2026 ruling on AI/HS codes doesn't apply to DG classifications. |
| Ethical — no harm / dark patterns | ✅ | Improves safety by reducing human error in hazmat declarations. Reduces risk of mislabeled dangerous goods entering transport. |
| Market exists (evidence above) | ✅ | $40–50 carrier surcharges per hazmat package, $83K–$250K fines for violations, Amazon sellers stuck in 6-month review loops, IATA digitizing DGDs. |
| 1–5 person team can build this | ✅ | 2–3 person team. Existing SDS parsing APIs, standard SaaS stack. |
| Launchable with <$50K / ₹40L | ✅ | ~$15–20K for SDS parsing API costs, hosting, and initial regulatory data structuring. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 17/20 | Hair-on-fire. Fines up to $250K, carrier bans, criminal charges. Sellers lose months in Amazon review loops. Small shippers have no affordable tool. |
| Demand evidence | 15 | 12/15 | IATA launching DG Digital (demand proven at industry level). Amazon Seller Central forums full of hazmat compliance complaints. Incumbents exist but overpriced for SMB. |
| Build feasibility | 15 | 11/15 | SDS parsing APIs exist at 99% accuracy. Regulatory database needs structuring but data is public. 12–14 week build for v1. Medium complexity, not trivial. |
| Distribution clarity | 15 | 11/15 | Amazon seller forums are a named, active channel. Chemical distributor directories are scrapeable. But converting compliance-terrified SMBs requires trust-building. |
| Revenue mechanics | 15 | 12/15 | $49–249/mo pricing benchmarked against DGAssistant ($400/yr) and consultant rates ($150–300/hr). Unit economics work. Retention should be strong — compliance is recurring. |
| Time to first revenue | 10 | 7/10 | Revenue in 6–8 weeks of launch. Free trial to paid conversion. Not instant — trust matters in compliance. |
| Defensibility | 10 | 6/10 | Soft moat: product library (classify once, ship forever) creates switching cost. Regulatory database freshness is a compounding advantage. But ultimately replicable. |
| **Total** | **100** | **76/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` — needs strong NLP/document processing engineering and deep understanding of DG regulatory frameworks. A domain advisor with hazmat certification would accelerate significantly.

### Key assumptions to validate (3–5)

1. **Assumption:** E-commerce sellers will pay $99/mo for DG compliance software rather than using free fillable PDFs or paying a consultant ad-hoc. **How to test:** Run 50 SDS audits for Amazon sellers stuck in hazmat review. Track conversion to paid waitlist.
2. **Assumption:** AI can reliably classify DG products from SDSs alone — edge cases (mixtures, multiple hazards, limited quantities) don't require human override >10% of the time. **How to test:** Process 500 real SDSs against known-correct classifications. Measure accuracy.
3. **Assumption:** Regulatory database (IATA DGR + DOT HMT) can be structured and kept current with <40 hours/quarter of maintenance. **How to test:** Structure one mode's regulations (DOT 49 CFR 172.101) and estimate ongoing update effort.
4. **Assumption:** The product library ("classify once, ship forever") creates meaningful retention — customers don't churn after getting their initial products classified. **How to test:** Track usage patterns in free tier. Do customers return monthly or just once?

### Risk flags

1. **[Regulatory liability]:** If ShipSafe generates an incorrect classification and a customer ships based on it, who's liable? The shipper is legally responsible per DOT/IATA rules, but reputation risk is real. Need strong disclaimers and a human-review option for edge cases.
2. **[Regulatory database maintenance]:** IATA DGR updates annually, DOT 49 CFR updates irregularly. Keeping the database current is operational overhead that never stops. Missing an update could generate non-compliant declarations.
3. **[Platform dependency]:** If the primary distribution channel is Amazon Seller Central forums and Amazon changes its hazmat review process to be less painful, a chunk of demand signal evaporates. Diversify to direct shippers early.
4. **[Competitor response]:** Labelmaster or IATA could launch a $49/mo tier targeting the same SMB segment. Speed to market and UX are the only defense.

## 14. Structured verdict

```
Score:                  76/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder with NLP/document-processing background + hazmat domain advisor
Time to revenue:        10–14 weeks (including 12-week build)
Capital to launch:      $15–20K
Top 3 assumptions to validate first:
  1. E-commerce sellers will pay $99/mo — run 50 free SDS audits, measure conversion to waitlist
  2. AI classification accuracy on real SDSs — process 500 SDSs, target >90% auto-classification
  3. Product library drives retention — track monthly return rate in free tier
Kill criteria:
  - Abandon if <8% of 50 free SDS audit recipients convert to paid waitlist
  - Abandon if AI auto-classification accuracy falls below 85% on real-world SDSs
  - Abandon if regulatory database structuring takes >3 months for a single mode (DOT or IATA)
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Scrape 10 active Amazon Seller Central hazmat review threads. DM the sellers with an offer: "Send me your SDS, I'll tell you exactly why Amazon keeps rejecting it — free." Also post in r/FulfillmentByAmazon and 2 hazmat LinkedIn groups.
- **Day 3–4:** Process the SDSs received using Affinda's API + manual mapping to DGR/DOT tables. Deliver a "compliance report" back to each seller: what's wrong, what the correct classification is, what a compliant declaration would look like. Track response and interest.
- **Day 5:** Count: how many sellers replied? How many said "I'd pay for this"? How many have recurring hazmat shipments (not one-offs)? Decide go/no-go based on: **≥5 of 10 contacted sellers engage, ≥2 express willingness to pay $99/mo for ongoing compliance**.
