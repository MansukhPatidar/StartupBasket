---
title: "DoCChaser — packaging conformity chaser for EU importers"
slug: ppwr-supplier-doc-chase
date: 2026-08-01
category: Compliance / EU-SMB — Importers, DTC Brands & Marketplace Sellers Placing Packaged Goods on the EU Market
complexity: Low
score: 76
verdict: GO
confidence: Medium
oneLiner: "Pries a valid Annex VIII declaration out of every packaging supplier before a marketplace suspends your listings."
tags:
  vertical: Compliance
  model: SaaS
  geography: EU
  secondary: [SMB, AI-agent, Compliance-driven, Solo-builder, Multilingual, Ecommerce]
axes:
  problem: 17
  demand: 12
  build: 13
  distribution: 12
  revenue: 11
  time: 8
  defensibility: 3
founderFit: [technical-heavy, content-heavy]
featured: false
---

# DoCChaser

## 1. One-liner

Pries a valid Annex VIII declaration out of every packaging supplier before a marketplace suspends your listings.

## 2. Trend signal — why now?

The EU Packaging and Packaging Waste Regulation (Regulation (EU) 2025/40) applies from **12 August 2026** — eleven days from today. This is not a transition date. It is the date market surveillance authorities across the EU acquire full enforcement powers over packaging compliance.

Three things land simultaneously on day one:

1. **A Declaration of Conformity per packaging type.** Manufacturers issue a formal DoC using the Annex VIII model; importers must collect, verify and retain it for five years (single-use) or ten years (reusable). Behind each DoC sits an Annex VII technical file describing the packaging structure by components and layers, with evidence for substance limits, recyclability and recycled content.
2. **Substance restrictions with immediate effect.** PFAS in food-contact packaging capped at 25 ppb for any individual PFAS, 250 ppb for the sum by targeted analysis, and 50 ppm total fluorine. Heavy metals (lead, cadmium, mercury, hexavalent chromium) capped at a combined 100 mg/kg across *all* packaging types, not just food contact.
3. **Marketplaces become the enforcer.** Under Article 45, online marketplaces must verify that traders are registered in each Member State's producer register. Amazon, Zalando and eBay are building these verification systems now. A seller without valid registration faces listing suspension.

Critically: **no SME exemption, and no general grace period.** Non-compliant packaging cannot be placed on the EU market after 12 August 2026. Member States must set penalties that are "effective, proportionate and dissuasive" with no EU-wide cap; published estimates of national penalty ranges run from €50,000 to €500,000+ per violation, with several Member States signalling fines proportional to volume placed on market or to operator turnover.

And the operational reality is already documented. From an industry guide: *"A brand chasing hundreds of packaging suppliers by email, then reconciling PDFs in spreadsheets, will not assemble a defensible technical file for every SKU by August."* And: *"For importers working with dozens or hundreds of packaging suppliers, that means building a process to request, verify and store DoCs at scale before the deadline hits."*

The deadline is not a design problem. It is a **supplier data collection and verification bottleneck** — which is exactly the shape of problem an AI agent is now good at.

Provenance:
  - Signal 1 (demand): PPWR applies 12 Aug 2026 with no SME exemption and no grace period; importers must collect and retain a per-packaging-type DoC for 5–10 years; industry guidance explicitly states email-and-spreadsheet chasing will not produce a defensible file in time — https://www.coolset.com/academy/ppwr-compliance-deadlines-explained-what-applies-from-august-2026-and-what-comes-later + https://www.coolset.com/academy/ppwr-declaration-of-conformity — 2026-08-01
  - Signal 2 (feasibility): The bottleneck is unstructured document intake — suppliers return ISO 9001 certificates, food-contact letters and blanket declarations instead of per-type Annex VIII DoCs; verifying a DoC means checking it against 10 mandatory Annex VIII elements, a task modern document-extraction models do reliably and cheaply — https://www.coolset.com/academy/ppwr-declaration-of-conformity + https://ppwrconnect.com/blog/ppwr-technical-documentation-annex-vii — 2026-08-01
  - Signal 3 (economic): A funded vendor category already exists and charges for this (Coolset, Tanso, Recyda, Trace One, PAQR, SimpliDoC), but reviews place them at manufacturer/enterprise custom pricing; the one tool positioned at smaller importers, PPWR Copilot (£49/£199/£499 per month), explicitly "covers labeling and documentation generation only, not EPR registration, supplier DoC collection or conformity tracking" — https://www.coolset.com/academy/best-6-ppwr-compliance-tools-for-importers-and-distributors-2026 + https://ppwrcopilot.com/pricing — 2026-08-01
  Category: Regulatory arbitrage

## 3. The opportunity

The PPWR software market has already formed, and it has formed **around the wrong customer**.

Look at the category map. Recyda is built for manufacturers optimising design-for-recycling. Packa focuses on packaging specification management "for manufacturers and brand owners, not importer-side supply chain documentation." Trace One is a full PLM platform for large CPG retailers with long implementation timelines. Coolset targets mid-market importers on custom pricing based on company size, SKU count and supplier volume. Valpak is a managed consultancy service.

Every one of these is priced and shaped for a company with a compliance function.

Now look at who actually carries the legal liability. A 12-person DTC brand in Rotterdam importing from three Chinese factories is the **importer of record**. The legal accountability sits with them, not the non-EU factory, and it cannot be contracted away. They have no compliance officer. They have a founder, an ops person, and a shared inbox. On 12 August they need a verified Annex VIII declaration for every packaging type they place on the market, and their suppliers have — in many cases — never heard of Annex VIII.

That is the gap: **the liability is distributed to SMBs, but the tooling is priced for enterprises.**

The specific thing incumbents do badly is the part that is actually hard. Collecting a DoC is not a form-filling exercise; it is a multilingual, multi-round chase against suppliers who send you the wrong document. The documented failure modes are precise:

- Suppliers submit ISO 9001 certificates or food-contact letters instead of a PPWR-specific DoC.
- Suppliers provide one blanket declaration covering everything instead of a per-type DoC.
- Documents arrive by email and rot in threads across a five-to-ten-year retention window.

An AI-first product collapses this. It reads whatever the supplier sends — in Mandarin, Turkish, Polish or English, as a scanned PDF or a photo — decides whether it is actually an Annex VIII DoC, checks it against the ten mandatory elements, and if it fails, writes the follow-up email in the supplier's own language explaining exactly which element is missing. That loop, run automatically across 40 suppliers and 120 packaging types, is the entire product.

The incumbents built portfolio managers and DoC generators. Nobody built the **chaser**.

## 4. Target market

**Primary customer:** Founder or operations lead at an EU-established importer, DTC brand, or private-label seller with **€1M–€30M revenue, 5–60 employees, 50–2,000 SKUs**, sourcing physical goods from non-EU manufacturers (predominantly China, Turkey, India, Vietnam). Sells through own Shopify store plus Amazon EU / Zalando / eBay. No dedicated compliance headcount — PPWR has landed on the ops manager's desk on top of their existing job.

Secondary customer, and a good early beachhead: **EPR consultancies and packaging-compliance advisors** who serve 20–200 such SMB clients each and are currently doing the chase manually in spreadsheets. They buy seats and resell.

**Why they buy:** Two forces, and the second one is what actually opens the wallet.

The first is the fine. Penalties are uncapped at EU level, and several Member States are signalling fines proportional to turnover or to volume placed on market.

The second is **listing suspension**, and it is far more immediate. Under Article 45 marketplaces must verify seller registration from 12 August 2026. For a brand doing 60% of revenue through Amazon EU, a suspended listing is not a compliance problem — it is a revenue outage this week. Regulatory fines are probabilistic and slow. Delisting is deterministic and fast. That's the emotional trigger that gets a €199/month invoice approved without a procurement conversation.

**Rough TAM reasoning:** I am deliberately not quoting a headline SME count, because the number I need is narrower than any published figure and I could not source it directly. The honest construction: the addressable set is EU-established importers and non-EU sellers with an EU route-to-market who place packaged goods on the market, have enough SKU and supplier complexity that the chase is painful (roughly 20+ packaging types across 3+ suppliers), and lack a compliance function. Amazon alone runs a "Pay on Behalf" EPR programme covering over 300,000 sellers across five countries, which brackets the marketplace-seller population in the right order of magnitude. Even capturing a low-single-digit thousand of these businesses at €150–250/month clears the $5M ARR target comfortably. This is a case where the wedge segment does not need to be big — it needs to be reachable and in pain, and it is both.

**Why now for them:** The deadline is in eleven days and it is retroactive to everything currently on the market. There is no phase-in. Companies that assumed August was a "start preparing" date are discovering it is an enforcement date, and the first wave of marketplace verification failures will generate a very loud, very public panic in September. This product should exist before that wave, not after it.

## 5. Product sketch (MVP)

- **Packaging portfolio import** — pull SKUs from Shopify / Amazon Seller Central / a CSV, and group them into distinct packaging types (the unit that actually needs a DoC), because most sellers do not know that 400 SKUs may collapse into 25 packaging types.
- **Supplier mapping** — attach each packaging type to the supplier who manufactures it, with contact details and preferred language.
- **The chase agent** — sends a standardised, correctly-worded DoC request to each supplier in their own language, with a short explainer of what Annex VIII is and a fillable template, then follows up on a schedule until it gets a valid document or a hard refusal.
- **Inbound document triage** — accepts whatever comes back (PDF, scan, photo, email body, WeChat screenshot), identifies whether it is actually a DoC, and rejects lookalikes: ISO 9001, food-contact statements, REACH letters, blanket declarations.
- **Annex VIII completeness check** — scores each received DoC against the ten mandatory elements and shows precisely which are missing, with a one-click follow-up that quotes the gap back to the supplier.
- **Substance-evidence flags** — for food-contact packaging, flags where PFAS evidence (25 ppb individual / 250 ppb sum / 50 ppm total fluorine) or heavy-metal evidence (100 mg/kg combined) is asserted without a test report behind it. This does not replace lab testing; it tells you which packaging types need it.
- **Readiness dashboard** — one screen showing, per packaging type: DoC held / incomplete / missing / refused, and what percentage of your EU revenue sits behind non-compliant packaging.
- **Audit binder export** — a dated, versioned ZIP with every DoC and its verification trail, in the structure an authority requests it. Retention clock tracked per document (5-year vs 10-year).

## 6. AI angle — what's load-bearing

Remove the AI and this becomes a spreadsheet with reminders — which is precisely the failing status quo, and precisely what the incumbents shipped.

The AI does three jobs that are the actual product:

**Document classification against a hostile input distribution.** The supplier does not send you what you asked for. They send a certificate in Mandarin, a scanned letterhead PDF, a photo of a printout, or a compliance statement for a different regulation entirely. Deciding "is this an Annex VIII Declaration of Conformity for *this* packaging type, or is it an ISO 9001 certificate wearing a hat" is the core classification task, and it is the one that a rules engine cannot do.

**Element-level extraction and gap identification.** A DoC is not pass/fail — it is ten mandatory elements. The model extracts each, determines which are missing or malformed, and maps that to a specific, quotable deficiency. The output is not "invalid," it is "missing the unique identification of the packaging type and the name of the authorised representative."

**Multilingual, context-aware follow-up.** The chase only works if the supplier understands what is being asked. Generating a follow-up in Mandarin that says "the declaration you sent covers your factory's quality system, not this specific packaging type — here is what we need and here is the template" is what converts a stalled thread into a received document. This is the difference between a 30% and an 80% collection rate, and collection rate *is* the product's value.

Load-bearing on all three counts. Without the model, you have a to-do list.

## 7. Localization angle (if any)

This is an EU-first play by definition — the regulation defines the market. But localization is a real wedge in two directions, and it is the outbound direction that matters most.

**Supplier-side (the important one):** The documents are being chased from Chinese, Turkish, Vietnamese and Indian factories. Outbound requests and follow-ups must be genuinely fluent in Mandarin and Turkish, not machine-translated boilerplate, and must explain an EU regulation to someone with no EU regulatory context. A product that nails Mandarin supplier communication will out-collect one that doesn't, and collection rate is the whole scoreboard.

**Customer-side:** The buyer is in Germany, the Netherlands, France, Poland or Italy. German matters most — Germany has the deepest existing packaging-compliance culture (LUCID register, VerpackG), the largest importer base, and the highest willingness to pay for compliance software. Ship German UI and German-language support at launch, not after.

Member State fragmentation is also an opportunity rather than a nuisance: an Amazon-commissioned study found 64 unique registration fields across 10 EU markets, averaging 16 per country, with 55% country-specific and 73% of current requirements exceeding PPWR standards. Encoding that per-country variation is unglamorous work that compounds into a real product advantage.

## 8. Business model — path to $1M–$5M ARR

**Pricing** (benchmarked directly against PPWR Copilot's £49 / £199 / £499 tiers, which establishes that this wallet pays at these levels):

- **Starter — €99/mo:** up to 15 packaging types, 5 suppliers. The solo DTC brand.
- **Growth — €249/mo:** up to 75 packaging types, 30 suppliers, marketplace connectors, German/French UI. **This is the volume tier.**
- **Scale — €599/mo:** up to 300 packaging types, unlimited suppliers, multi-entity, audit binder API.
- **Consultancy — €1,200/mo:** multi-client workspace for EPR advisors and compliance consultancies managing 20–200 client portfolios.

Deliberately priced *below* enterprise custom quotes and *above* a toy, because the buyer is comparing this to the cost of one day of a compliance consultant's time.

**ACV:** ~€2,900 blended (assuming the mix lands around 20% Starter / 55% Growth / 20% Scale / 5% Consultancy).

**Rough math to $1M ARR:** ~310 customers at €249/mo = ~€925K ARR. Call it 330 customers blended across tiers to clear $1M. For a compliance product with a hard statutory deadline and a marketplace enforcement mechanism, 330 customers is a realistic 12–18 month target, not a stretch.

**Rough math to $5M ARR:** ~1,500 customers, which requires two things to be true: (a) the consultancy tier works as a channel multiplier, with 40–60 advisory firms each bringing 20+ clients, and (b) the product expands past DoC collection into the adjacent obligations — EPR registration tracking across Member States, recyclability grade preparation ahead of the January 2030 A–C requirement, and recycled-content evidence. The 2030 recyclability deadline is the natural second act and it keeps the account alive long after the August 2026 scramble.

**Expansion path:** Land on the panic (DoC collection), expand on packaging-type count as the customer's catalogue grows, then upsell the multi-country EPR registration module. Retention is structurally strong because the documents live here and the retention obligation is five to ten years — churning means abandoning your own audit trail.

## 9. Go-to-market wedge — first 100 customers

The deadline does the marketing. The job is to be standing in the right doorway when the panic hits.

- **Ride the September delisting wave with a free diagnostic.** Build a free "PPWR exposure check": a seller connects Shopify or Amazon, and the tool returns how many distinct packaging types they have, how many likely need a DoC, and which are food-contact (and therefore PFAS-exposed). This is genuinely useful standalone, requires no supplier chasing, and produces a scored list of their gaps. Gate the chase agent behind payment. Sellers who discover they have 40 undocumented packaging types convert at a high rate because the diagnostic *is* the sales pitch.
- **Cold outbound to the Amazon EU seller base via marketplace-visible data.** Amazon EU listings expose brand names and EU importer/responsible-person details under GPSR labelling requirements. Build a list of 3,000 EU-established brands selling physical goods across amazon.de, .fr, .nl and .it, prioritise food-contact categories (kitchenware, food, supplements, cosmetics) where PFAS exposure makes the problem acute, and send a personalised email containing their *actual* exposure count from the free diagnostic run against their public catalogue. Not "we do PPWR compliance" — "you have 34 packaging types across your amazon.de listings and 11 are food-contact." Expect 3–6% reply, 1–2% close. That's 30–60 customers from the first 3,000.
- **Partner with EPR compliance consultancies and authorised-representative firms.** These firms — the ones already handling LUCID registration and authorised-representative services for non-EU sellers — have the exact customer list and are currently doing this chase in spreadsheets. There are dozens of them across Germany and the Netherlands. Offer the consultancy tier with white-labelling and a revenue share. Ten signed advisory firms at 20 clients each is 200 downstream users without any direct acquisition cost. **This is the highest-leverage channel and should be worked from week one.**
- **Own the German-language search and content lane on the specific pain.** Not generic "PPWR compliance" — that keyword is already contested by well-funded incumbents. Target the long tail of the actual problem: "Lieferant sendet keine Konformitätserklärung," "Annex VIII Vorlage," "DoC vom chinesischen Lieferanten anfordern." Publish the supplier request templates in Mandarin, Turkish and German as free downloads. The template download is the top of funnel and it self-selects for people mid-chase.
- **Seller community presence where the panic will surface.** German Amazon seller Facebook groups, the Dutch and German e-commerce Slack communities, and r/AmazonSeller / r/ecommerce when the first Article 45 suspensions get posted. Be the person with the concrete answer in those threads, not the person with a link.

## 10. Build complexity — justification

**Low.** There is no novel infrastructure here. Document ingestion, multilingual classification and element extraction are off-the-shelf model calls. The email chase loop is a scheduler and an inbox integration. Shopify and Amazon Seller Central both have documented catalogue APIs. The genuinely custom work is the Annex VIII element checklist, the packaging-type grouping logic, and the per-Member-State variation table — all of which is careful domain encoding rather than hard engineering.

Realistic estimate: a technical founder ships the free diagnostic in **3 weeks** and the full chase loop in **7–9 weeks**. The diagnostic can and should launch first, standalone, as a lead magnet while the chase agent is still being built.

The hard part of this business is not the build. It is knowing Annex VIII cold enough that the completeness check is actually right, which argues for a compliance advisor on retainer or as a co-founder from day one.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Compliance tooling, no regulated activity. Must be careful not to present output as legal certification — position as document collection and completeness checking, not conformity assessment. |
| Ethical — no harm / dark patterns | ✅ | Helps SMBs meet a genuine obligation they legally carry. No manufactured urgency needed — the deadline is real and statutory. |
| Market exists (evidence above) | ✅ | Six named vendors already selling into this category with paid tiers, plus a statutory deadline and a marketplace enforcement mechanism. |
| 1–5 person team can build this | ✅ | Low complexity; ideally one technical builder plus a compliance advisor. |
| Launchable with <$50K / ₹40L | ✅ | Model inference, hosting, and advisor retainer. Well under €25K to first revenue. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 17/20 | Statutory deadline in 11 days, no grace period, retroactive, uncapped fines, and an immediate delisting mechanism via Article 45. Not 19–20 only because many SMBs will initially ignore it and absorb risk rather than buy — enforcement intensity in the first six months is genuinely unknown. |
| Demand evidence | 15 | 12/15 | Strong: six funded vendors charging money, a documented pricing ladder (£49–£499), industry guidance explicitly naming the spreadsheet-chase failure mode, and Amazon commissioning research on SME packaging-rule burden. Held at 12 because I could not source direct verbatim complaints from the SMB buyer themselves — the voice I found is vendor and advisory content, not the customer's own words. That is a real gap. |
| Build feasibility | 15 | 13/15 | Off-the-shelf models plus standard integrations; diagnostic in ~3 weeks, full loop in ~9. Docked for the domain-encoding burden — getting Annex VIII and per-country variation right is unglamorous and unforgiving. |
| Distribution clarity | 15 | 12/15 | The free diagnostic → outbound loop is concrete and the consultancy channel is high-leverage with a named, countable target list. Not higher because the marketplace-seller list build is real work and reply rates are estimated, not tested. |
| Revenue mechanics | 15 | 11/15 | Pricing is benchmarked against an actual competitor's public tiers, which is better than most. Docked because ~330 customers for $1M ARR depends on the €249 tier carrying the mix, and SMB compliance tools historically see churn spike after the deadline panic subsides. |
| Time to first revenue | 10 | 8/10 | The deadline creates urgency that compresses the sales cycle to days. First paying customer realistically 5–7 weeks from start, faster if pre-sold off the diagnostic. |
| Defensibility | 10 | 3/10 | **The weak axis, honestly.** Six vendors already exist and any of them can move down-market in a quarter. The only real moats are the accumulated supplier-response corpus (which suppliers send what, and which follow-up wording actually works) and the audit-trail lock-in from a 5–10 year retention obligation. Both compound, but neither exists on day one. Execution-speed play. |
| **Total** | **100** | **76/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `content-heavy`

Technical for the document pipeline and integrations. Content-heavy because the German-language long-tail search lane and the free template downloads are the cheapest acquisition channel available, and they need someone who can write credibly about the regulation. A compliance advisor on retainer is close to mandatory.

### Key assumptions to validate (3–5)

1. **Assumption:** SMB importers will pay €249/mo for DoC collection rather than absorbing the compliance risk and hoping enforcement is slow. **How to test:** Run the free diagnostic against 200 Amazon EU sellers' public catalogues, send the exposure count cold, and measure how many book a call. If fewer than 5% engage with a concrete number showing their own gap, the urgency is not real yet.
2. **Assumption:** The AI actually converts stalled supplier threads into received DoCs — collection rate above ~65% on the second follow-up. **How to test:** Recruit 5 design partners, run the chase against their real supplier lists for 3 weeks, measure documents received per supplier contacted versus their manual baseline. This is the single most important number in the business.
3. **Assumption:** EPR consultancies will resell rather than build this themselves. **How to test:** Pitch 15 German and Dutch EPR/authorised-representative firms directly. If more than a third say they are already building an internal tool, the channel is closed and distribution gets materially harder.
4. **Assumption:** Article 45 marketplace verification actually bites in Q4 2026 rather than being quietly deferred. **How to test:** Monitor Amazon EU and Zalando seller policy announcements weekly through September–October, and watch seller communities for the first suspension reports.

### Risk flags

1. **Enforcement-timing risk:** The entire urgency thesis rests on authorities and marketplaces enforcing promptly. EU regulations have a history of soft first years. If Member States signal light-touch enforcement through Q4 2026, the panic evaporates and this becomes a slow-burn compliance sale against six entrenched competitors — a much worse business.
2. **Incumbent down-market move:** Coolset explicitly targets importers already and has the category's content lane. If they launch a €199 self-serve tier in Q4, the differentiation narrows to collection-rate quality alone. That is defensible but it is a much harder story to tell.
3. **Post-deadline churn:** This is the structural risk in every deadline-driven compliance product. Customers buy in the panic, get their binder, and cancel in month four. Mitigating this requires the retention obligation (5–10 years of document custody) and the 2030 recyclability roadmap to be built into the product narrative from day one, not bolted on when churn appears.
4. **Liability positioning:** If the completeness check passes a DoC that an authority later rejects, the customer will look for someone to blame. The product must be positioned as document collection and gap-flagging, never as conformity assessment or legal advice. Get this wording in front of a lawyer before launch.

## 14. Structured verdict

```
Score:                  76/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder shipping fast, paired with an EU packaging-compliance
                        advisor. German language capability is a material advantage.
Time to revenue:        5–7 weeks (free diagnostic first, chase agent behind payment)
Capital to launch:      €20–25K ($22–28K) — inference, hosting, advisor retainer, list building
Top 3 assumptions to validate first:
  1. Collection rate — run the chase against 5 design partners' real supplier lists for 3 weeks;
     need >65% valid DoCs received by second follow-up versus their manual baseline
  2. Willingness to pay — cold-email 200 Amazon EU sellers their own exposure count from the
     free diagnostic; need >5% engagement to confirm the urgency is felt, not just legislated
  3. Consultancy channel — pitch 15 German/Dutch EPR firms; if >1/3 are building internally,
     the highest-leverage distribution channel is closed
Kill criteria:
  - Abandon if collection rate stays below 50% after tuning across 5 design partners — the AI
    is not doing the load-bearing job and the product is just a spreadsheet with reminders
  - Abandon if <3% of 200 targeted cold outbound sellers engage despite being shown their own
    concrete gap count — means enforcement fear is not real and the deadline is not a buying trigger
  - Abandon if two or more incumbents launch sub-€250 self-serve importer tiers before your v1 ships
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Build the diagnostic only — no chase agent. Point it at 200 public Amazon EU seller catalogues across amazon.de and amazon.nl, weighted toward food-contact categories. Produce, for each, a count of distinct packaging types and food-contact exposure. This is a scraper and a classifier, and it is genuinely useful output.
- **Day 3–4:** Send all 200 a personalised cold email containing their own number and nothing else — no product, no pricing, just "here is your exposure and here is what happens on 12 August." Simultaneously call 15 German and Dutch EPR consultancies and ask one question: how are you handling DoC collection for your clients right now, and are you building tooling for it?
- **Day 5:** Decide. **Go if:** ≥10 of 200 sellers reply asking for help (5%), **and** ≥5 of 15 consultancies confirm they are chasing DoCs manually with no internal tool in progress. **No-go if:** reply rate is under 3%, or the majority of consultancies are already building.

The falsifiable result is the reply rate to a message containing the customer's own gap count. If someone is shown a concrete number proving they are exposed eleven days before a statutory deadline and still does not respond, the pain is not real and no amount of product quality fixes that.
