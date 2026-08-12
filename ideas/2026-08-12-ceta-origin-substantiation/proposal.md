---
title: "OriginVault — self-certification vault for Indian exporters"
slug: ceta-origin-substantiation
date: 2026-08-12
category: TradeTech / India — MSME Exporters (₹5Cr–₹200Cr) Who Signed Their Own Name to a CETA Origin Declaration and Kept No File That Survives a Five-Year Verification
complexity: Medium
score: 75
verdict: GO
confidence: Medium
oneLiner: Builds the origin evidence file behind every duty-free export claim, before customs asks for it five years later.
tags:
  vertical: TradeTech
  model: SaaS
  geography: India
  secondary: [Compliance-driven, SMB, AI-agent, Export, Multilingual]
axes:
  problem: 15
  demand: 11
  build: 11
  distribution: 12
  revenue: 11
  time: 8
  defensibility: 7
founderFit: [domain-expertise-required, sales-heavy]
featured: false
---

# OriginVault

## 1. One-liner

Builds the origin evidence file behind every duty-free export claim, before customs asks for it five years later.

## 2. Trend signal — why now?

On 15 July 2026 the India–UK CETA entered into force, and with it something that has never happened before at this scale in Indian trade: **the exporter self-certifies origin**. No chamber of commerce in the loop, no third-party authority stamping a Certificate of Origin, no one else's signature to hide behind. CBIC operationalised the framework via Circular No. 33/2026-Customs. DGFT simultaneously moved preferential CoO issuance fully electronic from the same date.

Read what that actually means. Under the old world, a chamber issued you a certificate and the certificate *was* the proof. Under self-certification, the declaration is just a sentence you wrote on your own invoice. The proof is whatever is sitting in your filing cabinet when someone comes asking — and they can come asking for **two years in the normal course, five where fraud is suspected**. Exporters and manufacturers must retain origin records for a **minimum of five years**: production records, sourcing records, value-addition calculations, supplier declarations.

The tariff prize is real. Textiles and garments lose up to 12% duty, engineering goods up to 18%, going to zero. The Scotch example runs the other direction but illustrates the magnitude: duty from 150% to 75% is ₹7.5 lakh on a ₹10 lakh consignment.

And here is the number that makes this a business rather than an observation: **India's FTA utilisation sits at roughly 25%, against 70–80% in developed economies** — attributed directly to "limited awareness, documentation burdens, and the costs of complying with rules of origin, particularly for smaller exporters." ORF is blunt that complex rules of origin and administrative burden "risk limiting their use in practice, especially by smaller firms."

So you have a market where three-quarters of the eligible duty saving is being left on the table for documentation reasons, and a brand-new regime that just moved the entire evidentiary burden onto the smallest, least-equipped party in the chain. The exporters who *do* claim are the ones I care about — they've taken the money and they've taken the liability, and most of them have no file.

The best line I found on this, from a CETA practitioner guide: **"Retain records for the full verification window — a self-declaration you can't substantiate later is worse than no claim."** That is exactly right, and almost nobody is operationally set up for it.

Provenance:
  - Signal 1 (Demand): India's FTA utilisation ~25% vs 70–80% in developed economies, explicitly attributed to documentation burden and rules-of-origin compliance cost for smaller exporters; ORF flags RoO complexity and admin burden as the barrier to MSME CETA uptake — https://www.orfonline.org/expert-speak/beyond-tariff-cuts-can-the-india-uk-ceta-deliver-for-msmes — 2026
  - Signal 2 (Feasibility): CETA in force 15 July 2026; CBIC Circular 33/2026-Customs operationalises self-certification, DGFT enables fully electronic preferential CoO filing the same day; exporters/manufacturers must retain origin records 5 years, retrospective verification up to 2 years normally and 5 where fraud is suspected — https://www.hrulegal.com/legal-updates/india-uk-ceta-rules-of-origin-july-2026 — 2026-07
  - Signal 3 (Economic): Tariffs up to 12% (textiles/garments) and 18% (engineering goods) going to zero creates large per-consignment duty savings worth defending; origin-calculation software today is enterprise/quote-based (MIC, PwC customs origin tool) with no SMB tier — https://www.policycircle.org/economy/india-uk-ceta-exports/ + https://mic-cust.com/software-solutions/origin-calculation-free-trade-agreement-management — 2026
  Category: Regulatory arbitrage

## 3. The opportunity

There are two kinds of software in this space and neither serves the Indian MSME exporter.

**Enterprise origin-calculation suites** (MIC-CUST, PwC's customs origin calculation tool, SAP GTS) do genuinely solve this — multi-level BOM origin calculation, automated solicitation of supplier declarations, per-FTA rule configuration. They are quote-based, sold to manufacturers with customs departments, and priced in a band where adjacent enterprise BOM systems run $150K+/year. A ₹30 crore garment exporter in Tiruppur is not buying this and no one is trying to sell it to them.

**Free rule-lookup tools** (ITC's Rules of Origin Facilitator, DGFT's Trade Connect ePlatform, chamber portals) tell you what the rule *is*. They do not tell you whether *your* product, with *your* bill of materials and *your* Chinese-sourced zips, actually satisfies it — and they retain nothing on your behalf. The DGFT platform issues the certificate; it does not build your defence.

The gap in the middle is the entire MSME exporter base. And the gap got structurally worse on 15 July, because self-certification removed the one party (the chamber) who used to apply at least a cursory sanity check before stamping. Now the exporter asserts, alone, and the assertion is only as good as the file behind it.

What a focused team does 10× better: take the messy inputs an MSME actually has — supplier invoices in three formats, a costing sheet in Excel, purchase orders on WhatsApp, a bill of materials that lives in the production manager's head — and turn them into a per-consignment, per-HS-line origin dossier that answers the only question that will ever be asked: *show me why this qualified*. Incumbents assume clean ERP data. The whole product here is working from dirty data, which is what MSMEs have.

The second thing done better: **most of these exporters aren't claiming at all**. Three-quarters of FTA-eligible trade goes unclaimed. A tool that says "this consignment qualifies, here's the declaration wording, here's the file that backs it" is not a compliance cost — it's found money. That flips the sales conversation from fear to revenue, which is the only way you sell software to an MSME owner.

## 4. Target market

- **Primary customer:** Owner or export manager at an Indian MSME exporter, ₹5Cr–₹200Cr turnover, shipping to the UK (and increasingly EU/EFTA/Australia under parallel FTAs). Concentrated in textiles/garments (Tiruppur, Ludhiana, Surat), engineering goods (Rajkot, Coimbatore, Pune), leather (Kanpur, Chennai), gems and jewellery (Surat, Mumbai), processed foods and marine (Kochi, Visakhapatnam). Typically 20–300 employees, one or two people handling all export documentation, a CHA for customs filing, and no in-house customs specialist.
- **Why they buy:** Two motives, in this order. First, *"am I leaving duty on the table?"* — their UK buyer is asking for CETA pricing and they don't know if they qualify. Second, *"if customs comes back in three years, what do I show them?"* — the ones who have already self-certified and have a slow, cold feeling about it. The second motive closes faster but the first one gets the meeting.
- **Rough TAM reasoning:** India has well over a lakh registered exporters (IEC holders in the hundreds of thousands, though a much smaller subset ship meaningful volume). The UK-facing, FTA-relevant, MSME-scale subset in the priority sectors is plausibly 15,000–40,000 firms. At ₹4,000–₹12,000/month that's a market measured in hundreds of crores — far more than enough for a ₹8–40 crore ARR business, which is the only scale I care about. Add EU/EFTA/Australia FTA coverage and the same product resells to the same buyer.
- **Why now for them:** CETA went live 15 July 2026. Their UK buyers are actively renegotiating prices on the assumption of zero duty. Every consignment shipped since mid-July under a self-certified declaration is already inside a five-year retention window. The clock started and most of them don't know it.

## 5. Product sketch (MVP)

- **Qualify a product in minutes** — upload or key in a bill of materials with input origins and costs; the tool applies the CETA product-specific rule for that HS line (wholly obtained / change in tariff classification / regional value content) and returns a plain-language qualify / doesn't-qualify / marginal verdict with the arithmetic shown.
- **Origin declaration generator** — produces the exact declaration wording for the invoice, with the correct references, so the exporter isn't copy-pasting a sentence from a blog post.
- **Supplier declaration chase** — identifies which inputs need a supplier declaration to hold the claim up, then emails and WhatsApps those suppliers a one-click form in English/Hindi/Tamil/Gujarati, tracks who has responded, and flags expiring declarations.
- **Per-consignment evidence pack** — one PDF per shipment bundling the BOM, costing/value-addition calculation, supplier declarations, invoice, and the declaration issued. This is the artefact you hand a verifying officer.
- **Five-year retention vault** — every pack stored, indexed by invoice number, HS code, buyer and date, retrievable in seconds. Retention clock and expiry warnings per consignment.
- **Marginal-claim warnings** — flags consignments where the value-addition margin is thin enough that an input price change or currency move could push it below threshold, so the exporter knows which claims are fragile before they're audited.
- **Verification response mode** — when a query lands, assembles the historical pack for the named consignments into a response bundle with a covering summary.
- **Duty-saved dashboard** — running total of duty saved across claimed consignments, and duty *forgone* on shipments that qualified but weren't claimed. This is the renewal argument.

## 6. AI angle — what's load-bearing

Remove the AI and this product does not exist, because the input data is unstructured and heterogeneous by nature.

- **Document extraction from mess.** Supplier invoices, purchase orders, costing sheets and packing lists arrive as scans, photos, PDFs and Excel files with no schema. Pulling input descriptions, HS codes, quantities, values and claimed origins out of that pile is the core work. This is not a form-filling exercise; it's extraction across dozens of formats per customer.
- **HS classification assistance.** Getting the tariff line wrong invalidates everything downstream — misclassification is one of the named pitfalls. Mapping a free-text input description ("polyester interlining, 45gsm") to a tariff heading, and doing it for every line of a BOM, is judgement work that language models now do credibly with the tariff schedule in context.
- **Rule interpretation across HS lines.** Product-specific rules vary line by line across annexures and are written in legal-adjacent prose. Turning "CTH except from heading X, or RVC of Y%" into an executable check against a specific BOM is the reasoning step.
- **Multilingual supplier chase.** The suppliers being chased for declarations are small Indian units. Generating and interpreting responses in Hindi, Tamil, Gujarati and Punjabi over WhatsApp is what makes the chase actually complete rather than 40% complete.

What is *not* AI-dependent: the retention vault and the arithmetic. Those are ordinary software, and they should be — you do not want a model deciding what a stored document says three years later. The AI does extraction, classification and interpretation; deterministic code does the calculation and the storage. That split is the right architecture for something that has to survive an audit.

## 7. Localization angle

This is an India-first play by construction, and localization is the wedge rather than a garnish.

- **Language:** the supplier-declaration chase only works in vernacular. A Tiruppur knitwear exporter's yarn supplier is not filling out an English web form. WhatsApp-first, Tamil/Hindi/Gujarati/Punjabi.
- **Pricing:** ₹4,000–₹12,000/month works where $500/month does not. Enterprise origin suites are priced for firms with customs departments; the entire opportunity is serving the tier below.
- **Regulatory specificity:** CETA product-specific rules, CAROTAR record-keeping, DGFT eCoO/Trade Connect workflow, and the CBIC circular framework are India-specific knowledge with no global analogue. That specificity is the moat.
- **Channel:** Export Promotion Councils (AEPC, EEPC, CLE, GJEPC), FIEO chapters, and district industry clusters are real, reachable, membership-based distribution — ORF itself recommends EPCs and MSME associations set up "CETA facilitation cells." That's an open invitation to be the software inside those cells.

The identical product shape resells against EU, EFTA and Australia FTAs to the same customer, which is the expansion path — but India is where it starts and where the language and channel advantages compound.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** three tiers. **Starter ₹4,000/mo** — up to 25 consignments/month, single FTA, core vault. **Growth ₹9,000/mo** — up to 150 consignments, multi-FTA, supplier chase automation, marginal-claim alerts. **Cluster ₹18,000/mo** — unlimited consignments, multi-entity, verification response support. Annual prepay at ~15% discount, which MSMEs actually prefer.
- **ACV:** blended ₹85,000–₹1,10,000 (~$1,000–$1,300) with expected mix skew to Growth.
- **Rough math to $1M ARR (~₹8.5 Cr):** ~850 customers at ₹1,00,000 ACV. Against a sector-relevant base of 15,000–40,000 UK-facing MSME exporters, that's 2–5% penetration. Achievable but it is real fieldwork — this is not a self-serve motion.
- **Rough math to $5M ARR (~₹42 Cr):** needs three things true. (1) Multi-FTA coverage so the same account covers UK + EU + Australia + EFTA, pushing blended ACV toward ₹1,60,000. (2) EPC/FIEO channel partnerships delivering cohorts rather than individual logos. (3) A CHA/customs-broker reseller motion — brokers already sit between exporter and customs and can attach this to existing relationships. ~2,600 accounts at ₹1,60,000. Plausible in 4–5 years, not 2.
- **Expansion path:** consignment volume tiers → additional FTAs → additional group entities → verification-response as a paid service when a real query lands (high willingness-to-pay at the moment of panic, and a natural ₹25,000–₹75,000 one-off).

Honest note: gross margin is good (software plus inference on modest document volumes), but the CAC here is field sales and channel, not ads. The unit economics work at ₹1L ACV only if the EPC/cluster channel delivers multiple customers per unit of effort. That's the assumption the whole model rests on.

## 9. Go-to-market wedge — first 100 customers

- **Duty-forgone audit as the cold open.** Indian export data by HS code and destination is available through public trade data sources and DGFT/commerce ministry channels; commercial shipment-data providers also sell it. Identify firms shipping UK-bound consignments in CETA-advantaged HS lines. Send the owner a one-page note: *"Your last 12 months of UK shipments in HS 6109 carried up to 12% duty that CETA now zeroes. Here's roughly what that's worth. Do you have the origin file to claim it?"* That's a number, not a pitch. Target 200 firms per sector cluster, expect a meaningful reply rate because the message is about their money.
- **EPC facilitation cells.** AEPC (apparel), EEPC (engineering), CLE (leather), GJEPC (gems/jewellery) all run member workshops and are actively being urged to stand up CETA guidance. Offer to run the rules-of-origin session free at 8–10 chapter events across Tiruppur, Ludhiana, Rajkot, Kanpur and Surat. Walk in with the qualification tool, run three attendees' actual products live on stage, close the room. This is the highest-yield channel and it's a phone call to arrange.
- **CHA and freight-forwarder resellers.** Customs House Agents already handle these exporters' filings and are the trusted party. Sign 15–20 CHAs on a 20% recurring referral; each has 30–100 exporter clients. One good CHA relationship is worth more than a month of cold email.
- **The verification-panic inbound.** As soon as the first CETA verification queries start landing (the window is open now), there will be exporters searching for help with a specific, urgent problem. Rank for the long-tail queries — "CETA origin verification notice," "supplier declaration format India UK," "how to prove value addition CETA." Low volume, extremely high intent, and these convert to Cluster tier.
- **Buyer-side pull.** UK importers want the duty saving and need the exporter's declaration to be sound, because the importer is the one facing the duty-differential demand. A short campaign to UK importers of Indian goods — *"ask your Indian supplier for their origin file"* — creates pull from the customer the exporter cannot ignore.

## 10. Build complexity — justification

**Medium.** Off-the-shelf: document extraction, LLM reasoning, standard web stack, WhatsApp Business API, PDF generation, object storage. The custom work is real but bounded: encoding CETA product-specific rules per HS line into an executable rule engine, the value-addition calculation logic, and the supplier-declaration state machine. The rule encoding is grinding, domain-heavy work — this is where the domain expert earns their keep, and where a generalist team will get it subtly wrong.

Realistic v1 for two people: **14–18 weeks**, scoped to 3–4 HS chapters (start with textiles/garments, add engineering) rather than the whole tariff schedule. Do not attempt full coverage at launch; depth in one cluster beats breadth across all of them, and it makes the Tiruppur workshop demo land perfectly.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Documentation and record-keeping software. No licence needed. Must be careful to position as a tool, not as customs advisory — the exporter remains the declarant. |
| Ethical — no harm / dark patterns | ✅ | Helps exporters claim benefits they're entitled to and substantiate them honestly. Product must refuse to manufacture qualification for goods that don't qualify — that's the ethical line and it's also the commercial one. |
| Market exists (evidence above) | ✅ | Enterprise incumbents charge real money for exactly this; 25% FTA utilisation is the demand gap quantified. |
| 1–5 person team can build this | ✅ | Two builders plus a customs/RoO domain expert. |
| Launchable with <$50K / ₹40L | ✅ | Build cost plus field travel to 5 clusters. Comfortably under. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 15/20 | Real money on both sides — duty saved, and duty clawed back with penalties at verification. But the pain is *latent*, not daily. A verification query may never come, and MSME owners discount tail risk heavily. That's the honest ceiling here: it's a hair-on-fire problem only for the minority who've already had a notice. |
| Demand evidence | 15 | 11/15 | Strong structural evidence: 25% vs 70–80% utilisation gap, enterprise incumbents charging real money, ORF/Policy Circle naming RoO burden as the MSME barrier. What's missing is direct customer voice — I could not source verbatim exporter complaints about CETA origin files, because the regime is four weeks old. Docked accordingly. |
| Build feasibility | 15 | 11/15 | Standard stack, but rule encoding per HS line is genuine domain grind and the extraction has to work on genuinely dirty inputs. 14–18 weeks for a pair, scoped narrow. |
| Distribution clarity | 15 | 12/15 | EPC workshops and CHA resellers are named, reachable, and structurally motivated. The duty-forgone cold open uses real trade data. Not a 2-week sprint to 100 customers though — this is field sales in industrial clusters. |
| Revenue mechanics | 15 | 11/15 | Pricing fits Indian MSME wallets and is benchmarked below enterprise alternatives. $1M ARR needs ~850 customers at 2–5% penetration — reasonable. $5M requires multi-FTA plus channel leverage, which is the aggressive part. |
| Time to first revenue | 10 | 8/10 | First paying customer plausibly 6–8 weeks post-launch via a single EPC workshop. Urgency is live now. Not instant — MSME purchase decisions take a few conversations. |
| Defensibility | 10 | 7/10 | Soft but compounding: the accumulated rule encoding per HS line, the supplier-declaration graph across an industrial cluster (once you hold declarations from Tiruppur's yarn suppliers, the next exporter onboards far faster), and five years of retained customer files nobody will migrate. Enterprise incumbents could come down-market but won't — wrong price point, wrong sales motion. |
| **Total** | **100** | **75/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`domain-expertise-required` · `sales-heavy`

This is not a build-it-and-they-come product. You need someone who genuinely understands rules of origin — a former customs consultant, EPC official, or CHA — or the rule engine will be confidently wrong, which in this product is worse than useless. And you need someone willing to spend weeks in Tiruppur and Rajkot. A technical solo founder in Bangalore will build a beautiful tool that qualifies products incorrectly and sells to nobody.

### Key assumptions to validate (3–5)

1. **Assumption:** MSME exporters will pay ₹9,000/mo for origin substantiation rather than treating it as their CHA's problem. **How to test:** 30 in-person interviews across two clusters (Tiruppur, Rajkot). Ask what they currently do for CETA claims and put the price in front of them. Look for pre-payment intent, not nodding.
2. **Assumption:** The "duty you're leaving on the table" framing outperforms the "you'll get audited" framing. **How to test:** Split the cold outreach 100/100 across both messages to matched firm lists; compare reply and meeting rates.
3. **Assumption:** Suppliers will actually return declarations via a WhatsApp form. **How to test:** Run the chase manually for 5 pilot exporters across ~40 suppliers. If completion is below 60%, the evidence pack has holes and the core promise breaks.
4. **Assumption:** EPCs will let a vendor run rules-of-origin sessions for members. **How to test:** Approach 4 council chapters directly. Two confirmed workshop slots within 6 weeks = channel validated.
5. **Assumption:** BOM/costing data quality is sufficient for automated qualification. **How to test:** Collect real BOMs from 10 exporters and attempt end-to-end qualification. Measure how many need manual intervention.

### Risk flags

1. **Latent-pain risk (the big one):** Verification queries are rare events. If CBIC/HMRC verification activity stays quiet for two years, the fear motive never activates and you're selling purely on duty capture — a narrower, more competitive pitch. This is the single biggest threat to the thesis and it's why this is a 75 and not an 85.
2. **Liability positioning:** The exporter is the declarant. If the tool says "qualifies" and customs later disagrees, the customer will look for someone to blame. Terms, disclaimers and a conservative default on marginal cases are not optional — and a genuinely conservative product will lose some deals to a competitor willing to say yes more often.
3. **Regulatory drift:** CETA rules, CBIC circulars and DGFT platform workflows will evolve. The rule engine needs continuous maintenance; that's an ongoing cost, though it's also part of the moat.
4. **Channel dependency:** If EPC and CHA channels underperform, the fallback is expensive direct field sales, which breaks the CAC assumptions behind the ₹1L ACV.
5. **Incumbent down-market move:** Low probability near-term, but a MIC or a well-funded Indian trade-tech player launching an SMB tier would compress pricing quickly.

## 14. Structured verdict

```
Score:                  75/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Customs/rules-of-origin domain expert paired with a technical
                        co-founder, willing to sell in industrial clusters
Time to revenue:        6–10 weeks post-launch
Capital to launch:      ₹15–25 lakh ($18–30K)
Top 3 assumptions to validate first:
  1. MSME willingness to pay ₹9,000/mo — 30 in-person cluster interviews, look for prepay intent
  2. Supplier declaration completion rate via WhatsApp — manual chase across 40 suppliers, need >60%
  3. EPC channel access — 4 council approaches, need 2 confirmed workshop slots in 6 weeks
Kill criteria:
  - Abandon if fewer than 5 of 30 interviewed exporters will pre-pay 3 months
  - Abandon if supplier declaration completion stays below 50% after two chase iterations
  - Abandon if both EPC and CHA channels fail to produce 10 qualified leads in 60 days
  - Abandon if a funded competitor ships an equivalent SMB-priced RoO product before your v1
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Pull UK-bound export shipment data for CETA-advantaged HS lines in textiles and engineering. Build a list of 150 MSME exporters with an estimated annual duty-saving figure per firm. This list is an asset regardless of outcome.
- **Day 3–4:** Send the duty-forgone note to all 150, split-testing the money framing against the audit framing. Simultaneously call 4 EPC chapters and request a workshop slot. Book as many exporter calls as land.
- **Day 5:** Run 10–15 calls. On each, ask three things: *have you claimed CETA preference on any UK shipment since 15 July? Can you show me the file behind it right now? Would you pay ₹9,000/mo to have that file built automatically?* Then ask for a 3-month prepayment on a pilot.

**Falsifiable outcome:** Go if ≥5 of 30 contacted exporters agree to a paid pilot and ≥2 EPC chapters confirm a workshop slot. No-go if the modal answer to "can you show me the file" is a shrug *and* they still won't pay — that combination means the pain is real but not yet priced, and this idea is 18 months early.
