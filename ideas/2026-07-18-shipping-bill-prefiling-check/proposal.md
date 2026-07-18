---
title: "DraftHold — pre-filing checkpoint for Indian exporters"
slug: shipping-bill-prefiling-check
date: 2026-07-18
category: TradeTech / India
complexity: Medium
score: 76
verdict: GO
confidence: Medium
oneLiner: "Reads the CHA's draft shipping bill and flags the incentive-killing errors before filing makes them permanent."
tags:
  vertical: TradeTech
  model: SaaS
  geography: India
  secondary: [Compliance-driven, SMB, AI-agent, WhatsApp-first, Multilingual]
axes:
  problem: 17
  demand: 12
  build: 11
  distribution: 12
  revenue: 11
  time: 8
  defensibility: 5
founderFit: [domain-expertise-required, sales-heavy]
featured: false
---

# DraftHold

## 1. One-liner

Reads the CHA's draft shipping bill and flags the incentive-killing errors before filing makes them permanent.

## 2. Trend signal — why now?

Indian export compliance crossed a line in 2026: the system stopped forgiving mistakes.

**The errors became irreversible, and the money at stake got bigger.** The single most expensive mistake in Indian exporting is a shipping bill filed as "Free" when the goods qualified for RoDTEP or Drawback. Guidance published for exporters is blunt about the consequence: *"Choosing 'Free' when you are entitled to Drawback or RoDTEP means you lose that benefit permanently—you cannot amend a shipping bill to add an incentive claim after it is filed."* With RoDTEP rates restored to 100% as of March 2026, the same source puts the damage at *"₹1–3 lakh of lost incentive for a ₹50 lakh shipment, gone permanently."* This is not a filing delay. It's cash that never arrives, and the exporter usually finds out months later.

**The automation removed the human escape hatch.** Export documentation used to be forgiving because a customs officer could sort out a mismatch over a phone call. Not anymore: *"In 2026, India's ICEGATE system uses automated cross-verification meaning these rejections happen faster, with less human intervention, and with less room for informal resolution."* Document mismatch — where product description, HS code, or weight differs between the commercial invoice, packing list, and shipping bill — is described as the single most common cause of shipping bill queries on ICEGATE.

**The downstream money is stuck too.** IGST refunds freeze on error codes an exporter never sees until the refund doesn't land. SB005 (invoice number/date mismatch between the shipping bill and GSTR-1) and SB003 (GSTIN mismatch) are among the most common. Fixing SB005 through the officer interface costs a documented **₹1,000 fee per shipping bill** plus a hand-built concordance table. CBIC separately notified ₹1,000 as the fee for managing shipping-bill-to-GST-return mismatches. And on the incentive side, if the bank's eBRC value doesn't match the shipping bill value, RoDTEP and drawback claims stall in the DGFT system — *"with most MSMEs discovering this only when claims fail, six months later."*

**The market got bigger, fast.** The number of exporting MSMEs rose from 52,849 in 2020-21 to **1,73,350 in 2024-25** — more than tripling in four years. Cumulative RoDTEP disbursements crossed **₹57,976.78 crore** as of 31 March 2025. And from 1 April 2026, CBIC removed the ₹10 lakh per-consignment cap on courier exports, explicitly to help e-commerce exporters and MSMEs — pulling a fresh cohort of small, inexperienced exporters into a filing regime that punishes their first mistake permanently.

**The technical unlock landed this month.** As of 14 July 2026, ICEGATE discontinued MFTP mode for SCMTR message filing and directed all stakeholders to API mode, with a published API specification. Programmatic access to Indian customs filing infrastructure is now the officially sanctioned path, not a scraping hack.

Provenance:
  - Signal 1 (demand): Choosing the wrong shipping bill type permanently forfeits RoDTEP/Drawback — "₹1–3 lakh of lost incentive for a ₹50 lakh shipment, gone permanently"; document mismatch is the top cause of ICEGATE queries — https://shxhub.in/shipping-bill/ and https://freightnaut.com/blog-detail/why-your-export-documents-keep-getting-rejected-at-indian-customs-(and-exactly-how-to-fix-it) — observed 2026-07-18
  - Signal 2 (feasibility): ICEGATE discontinued MFTP mode as of 14 July 2026 and directed all stakeholders to API mode with published API specification; 95%+ of shipping bills processed electronically — https://www.icegate.gov.in/ and https://eximpe.com/blog/b2b/icegate-shipping-bill-tracking-status-check — observed 2026-07-18
  - Signal 3 (economic): Exporting MSMEs grew 52,849 (FY21) → 1,73,350 (FY25); cumulative RoDTEP disbursements ₹57,976.78 crore as of 31 Mar 2025; Skydo raised $10M Series A serving 40,000+ Indian export MSMEs — https://protium.co.in/msme-export-contribution-has-grown/ , https://afleo.com/rodtep-scheme/ , https://www.tice.news/tice-dispatch/skydo-raises-10m-to-fix-indias-broken-cross-border-payments-engine-and-power-a-usd-2-trillion-export-dream-10899404 — observed 2026-07-18
  - Signal 4 (regulatory shift): CBIC removed the ₹10 lakh cap on courier exports effective 1 April 2026 to boost MSME and e-commerce exports — https://taxguru.in/custom-duty/cbic-removed-rs-10-lakh-cap-courier-exports.html — observed 2026-07-18
  - Signal 5 (cost of error): SB005 rectification via officer interface requires a concordance table and a ₹1,000 fee per shipping bill; CBIC notified ₹1,000 for shipping bill/GST return mismatch handling — https://www.vjmglobal.com/blog/refund-for-invoice-mismatch-cases and https://blog.saginfotech.com/cbic-mismatch-penalty-shipping-bill-gst-returns — observed 2026-07-18
  Category: Regulatory arbitrage

## 3. The opportunity

Here's the structural fact everybody in Indian export logistics knows and nobody has productised: **there is a checklist.**

Before a shipping bill gets a number, the EDI system generates a checklist for the exporter or CHA to verify. Official guidance is explicit that this is the last honest moment: *"ICEGATE generates a checklist. You must verify every line. If you approve wrong data here, you cannot blame the system later."* Amendments are possible only while the documents haven't been submitted and the shipping bill number hasn't been generated. After that — after EGM filing especially — the door shuts.

So the entire Indian export incentive system has a single, well-defined, universally-observed checkpoint where a machine could catch a five-figure mistake in ten seconds. And the way that checkpoint actually gets used today is: the CHA WhatsApps a PDF to the exporter, the exporter's ops person glances at it between other work, says "ok bhai", and the mistake gets locked in.

The incumbents all sit on the wrong side of this moment. Customs filing software — CargoNet, Logi-Sys, EzeeShipping, Canopus — is sold to **CHAs and freight forwarders**, not exporters. It helps the agent file faster. It does not represent the exporter's interest, and the exporter never sees it. Export fintechs like Skydo, Drip Capital, and Credlix have real traction with the same customer, but they operate on the money side — payments, factoring, eBRC — which is downstream of the error. By the time Skydo sees a value mismatch, the shipping bill is filed and the RoDTEP is gone.

And CHAs themselves are a structurally bad control. They charge ₹1,500–5,000 per bill, they file dozens a day, and the cost of their mistake lands entirely on the exporter. There's no meaningful incentive alignment — a CHA who defaults to a Free shipping bill loses nothing.

The gap is a **second pair of eyes that belongs to the exporter**, sits at the checklist moment, and knows the rules cold. That's an AI job: read the draft, read the commercial invoice, read the packing list, read what the exporter declared in GSTR-1, and answer one question — *if this is filed as-is, what do you lose?*

## 4. Target market

**Primary customer:** Owner or export-ops manager at an Indian merchant exporter or manufacturer-exporter doing ₹5–75 crore in annual FOB exports. 10–150 employees. Textiles, leather, engineering goods, chemicals, handicrafts, marine, auto components. Filing 15–200 shipping bills a year through one or two CHAs. Concentrated in Tiruppur, Surat, Ludhiana, Jaipur, Kanpur, Moradabad, Rajkot, Kochi, Vizag, and the Delhi NCR belt. Critically: **no in-house customs compliance person** — the founder or a single ops manager is the last check.

**Why they buy:** Because the loss is quantified, personal, and repeated. RoDTEP rates run 0.3–4.3% of FOB depending on sector — roughly 1.0–4.0% for textiles and garments, 0.8–3.0% for leather and footwear. On ₹20 crore of annual exports at a 1.5% blended rate, that's ₹30 lakh a year in credits riding entirely on whether each shipping bill was flagged and coded correctly. A single missed flag on a ₹50 lakh shipment costs ₹1–3 lakh. Meanwhile IGST refunds — real working capital — freeze on invoice-number typos, and the fix costs ₹1,000 per bill plus weeks.

**Rough TAM reasoning:** 1,73,350 exporting MSMEs in FY25. Strip out the microscopic ones filing 1–2 bills a year and the large ones with in-house compliance teams, and the serviceable band — enough volume to feel the pain, not enough scale to have hired someone — is plausibly 30,000–50,000 firms. At ₹4,000–15,000/month, that's a ₹150–900 crore addressable band. A 2% share at the middle of the pricing range is comfortably a $2–4M ARR business.

**Why now for them:** Three things changed at once. Rejections got automated and unforgiving in 2026. RoDTEP rates were restored to 100% in March 2026, raising the value of every missed flag. And the April 2026 courier-export cap removal is pulling thousands of first-time e-commerce exporters into a system where their first mistake is permanent.

## 5. Product sketch (MVP)

- **Checklist drop.** Exporter forwards the CHA's draft shipping bill checklist — PDF, image, or WhatsApp forward — and gets a verdict back in under a minute.
- **Incentive-loss alarm.** The headline check: is the scheme flag set? If the draft is coded Free but the HS codes carry a live RoDTEP or Drawback rate, the alert leads with the rupee figure at risk, not a compliance code.
- **Three-way value match.** Commercial invoice, packing list, and draft shipping bill reconciled line by line — value, quantity, weight, description, HS code — because customs reassesses on any inconsistency and the three must agree to the rupee.
- **GSTR-1 pre-check.** Compares invoice numbers, dates, and GSTIN in the draft against what was actually declared in GSTR-1, catching the SB005 and SB003 conditions weeks before they freeze an IGST refund.
- **HS code sanity check.** Flags codes that look wrong for the goods description, or that have been superseded by a DGFT/CBIC rate notification since the exporter's last shipment.
- **One-tap verdict.** Green "file it", amber "fix these two fields first", red "do not file — you will lose ₹X". Delivered on WhatsApp because that's where the CHA conversation already lives.
- **Scrip expiry watch.** RoDTEP e-scrips are valid one year from generation and cannot be revalidated once lapsed. The dashboard counts down every unutilised scrip and nags before it dies.
- **Realisation tracker.** Flags shipments approaching the RBI realisation window and eBRC value mismatches against the shipping bill, before DGFT silently stalls the claim.

## 6. AI angle — what's load-bearing

Remove the AI and this product cannot exist, for a specific reason: **the inputs are unstructured and arrive as pictures.**

The CHA's draft checklist reaches the exporter as a PDF or a phone photo forwarded over WhatsApp. The commercial invoice is a Tally export or an Excel print-out with a house-specific layout. The packing list is whatever the shipping clerk typed. There is no schema, no API from the CHA, no standard format — every one of the 30,000 target exporters and their agents does it differently. Vision-language models reading semi-structured trade documents reliably enough to compare field-by-field is the capability that arrived recently and made this tractable; three years ago this was an OCR project with a 60% accuracy ceiling and a support nightmare.

The second load-bearing piece is judgement over the rules. "Is this HS code right for this goods description, and does it carry a live RoDTEP rate under the current notification?" is not a lookup — it's classification against a description written by a human in trade shorthand, checked against a rate schedule that DGFT and CBIC revise continuously. Rules engines handle the arithmetic; the language work in front of it is the hard part.

What is *not* AI, and deliberately so: the final verdict. Rate tables, scheme eligibility, and validity windows are deterministic lookups against published notifications. The model reads and classifies; the rules engine decides. On a product where a false green light costs the customer ₹2 lakh, that boundary is the whole design.

## 7. Localization angle

This is an India-only product by construction and that's the moat, not a limitation.

- **The regulatory surface is the product.** RoDTEP, Duty Drawback, RoSCTL, ICEGATE error codes, the ICES checklist step, DGFT scrip mechanics, eBRC — none of it exists outside India. Every hour spent encoding it is an hour a global competitor has no reason to spend.
- **WhatsApp is the actual channel.** The exporter–CHA relationship runs on WhatsApp. A product that makes the exporter log into a portal to paste a document will lose to one that answers the forward. This is a WhatsApp-first product with a dashboard attached, not the reverse.
- **Language.** Tiruppur, Surat, Ludhiana, Moradabad. The verdict needs to read in Tamil, Gujarati, Hindi, and Punjabi even when the underlying documents are English — because the person holding the phone at 9pm before a cutoff is often not the person who writes the English emails.
- **Price point.** ₹3,999–14,999/month lands cleanly for a firm that already pays ₹1,500–5,000 per bill to a CHA. A $199/mo global-SaaS price does not.
- **Trust runs through associations.** FIEO, EPCH, AEPC, CHEMEXCIL, Tiruppur Exporters' Association. Indian exporters buy compliance tools on the recommendation of their export promotion council, not from a G2 review.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** Three tiers, priced on shipping-bill volume.
  - **Starter — ₹3,999/mo** (~$46): up to 10 draft checks/month, WhatsApp verdicts, scrip expiry alerts. For the 15–40 bills/year exporter.
  - **Growth — ₹9,999/mo** (~$115): up to 50 checks/month, GSTR-1 reconciliation, multi-user, eBRC realisation tracking. The core tier.
  - **Scale — ₹24,999/mo** (~$288): unlimited checks, multiple IEC/GSTIN entities, CHA performance scorecard, priority human review on red flags.
- **ACV:** ₹1.2 lakh (~$1,380) blended, assuming the mix skews to Growth.
- **Rough math to $1M ARR:** 630 customers on the Growth tier (₹9,999 × 12 = ₹1.2L each) = ₹7.56 crore ≈ $870K. Add ~60 Scale accounts and you clear $1M. So: **roughly 700 paying exporters** out of a 30,000–50,000 serviceable pool — 1.6–2.3% penetration. That's a sales problem, not a market-size problem.
- **Rough math to $5M ARR:** ~2,800 customers at a ₹1.5L blended ACV, requiring (a) the CHA channel to work as a reseller motion rather than pure direct sales, and (b) a second product line — most likely amendment-and-recovery-as-a-service on bills already filed wrong, priced per successful recovery.
- **Expansion path:** Volume tiers do the early work. Then multi-entity (exporters routinely run 2–4 IECs). Then success-fee recovery on historical errors, which is the highest-margin line and the easiest to sell — the exporter pays out of found money. Then, later, the CHA-side product: sell agents a pre-flight check so *they* stop making the errors, priced per bill.

## 9. Go-to-market wedge — first 100 customers

The distribution advantage here is unusual: **the target list is public, and the pitch is arithmetic.**

1. **The scrip-expiry cold open (customers 1–30).** RoDTEP e-scrips expire twelve months after generation and cannot be revalidated. Every exporter has some sitting unused. Open with a free scrip audit: exporter shares ICEGATE ledger access or a screenshot, gets back a one-page list of scrips with expiry dates and rupee values. When the answer is "₹4.2 lakh expires in 71 days", the conversation is over. Zero-cost, immediately quantified, and it demonstrates competence before asking for money.

2. **Cluster-by-cluster, association-first (customers 30–70).** Pick one cluster — Tiruppur knitwear — and go deep. Textiles carry 1.0–4.0% RoDTEP, so the numbers are the biggest in the country. The Tiruppur Exporters' Association runs regular member meetings; FIEO and AEPC run export awareness sessions constantly. Present one session: "The five ways your shipping bill quietly costs you money", with real anonymised examples. Then work the member directory by phone. Indian exporters buy on peer reference within a cluster — 10 customers in Tiruppur produces the next 10 nearly for free. Repeat in Surat, then Ludhiana.

3. **The stuck-refund list (customers 70–100).** Exporters sitting on SB005/SB003/SB001 errors are actively in pain right now — refund money frozen, no idea why. They surface in CA and consultant networks, in export-promotion-council helpdesk queues, and in the TaxTMI/CAclubindia forum threads where they post the error code and ask what to do. Answer those threads properly and publicly. Offer the fix — build the concordance table, walk them through Table 9A — and convert to the subscription that prevents the next one. Public, searchable, permanently compounding.

4. **CHA reseller pilots (parallel, ongoing).** Counter-intuitive but real: good CHAs *hate* being blamed for lost incentives. Recruit 5–10 mid-sized CHAs, give them the tool free, let them send the verdict to their client as their own value-add. Each CHA carries 50–200 exporter clients. This is the channel that makes $5M plausible.

5. **Content that ranks on error codes.** "SB005 error fix", "RoDTEP not credited", "shipping bill amendment rejected" — these are high-intent, low-competition searches by people already bleeding. Slow build, but it compounds and costs nothing but time.

## 10. Build complexity — justification

**Medium.** 12–16 weeks to a credible v1 for a pair.

Off the shelf: document reading (vision-language models on trade documents), WhatsApp Business API, standard web stack, payments. The genuinely hard parts are three. **First, the rules corpus** — encoding RoDTEP rate schedules by HS code, drawback rates, scheme eligibility, and keeping them current against continuous DGFT/CBIC notifications. That's a maintained data asset, and it's ongoing work, not a one-time build. **Second, GSTR-1 and ICEGATE data access** — ICEGATE's move to API mode with published specs helps, but exporter-authorised access to their own filings needs to be built carefully, and GST data comes via GSP integration. **Third, accuracy discipline** — a false green light costs a customer ₹2 lakh and the relationship. That means the MVP ships with human review on every red-flag verdict, which is an ops cost that only comes down as volume builds confidence.

Not a research project. But not a six-week weekend build either, and anyone who thinks it is has not read a rate notification.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Advisory software over the exporter's own documents. No customs filing, no regulated activity, no licence needed. |
| Ethical — no harm / dark patterns | ✅ | Helps small exporters claim incentives they are legally entitled to. The dark pattern is the status quo. |
| Market exists (evidence above) | ✅ | 1,73,350 exporting MSMEs; ₹57,977 crore in RoDTEP disbursed; funded fintechs already selling to this exact customer. |
| 1–5 person team can build this | ✅ | Two people, 12–16 weeks, plus a domain advisor who has actually filed shipping bills. |
| Launchable with <$50K / ₹40L | ✅ | ₹15–25 lakh covers build, GSP integration, WhatsApp API, and six months of runway. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 17/20 | Quantified, permanent, repeated loss — ₹1–3 lakh per mistake on a ₹50 lakh shipment, unrecoverable after filing. Docked 3 because it's episodic (per shipment) rather than a daily fire, and many exporters have never connected their missing refund to a shipping bill field. |
| Demand evidence | 15 | 12/15 | Strong indirect evidence: exploding MSME exporter count, ₹57,977 crore scheme spend, funded competitors adjacent to the problem, well-documented error taxonomies with published fix fees. Docked 3 for the honest gap — I could not source verbatim exporter complaints; the evidence is regulatory and industry-published, not customer-voiced. |
| Build feasibility | 15 | 11/15 | Standard stack plus document AI, but GSP/ICEGATE integrations and a continuously-maintained rate corpus push it past a quick build. 12–16 weeks for a pair. |
| Distribution clarity | 15 | 12/15 | Named clusters, named associations, public member directories, and a free-audit opener with immediate rupee output. Docked 3 because cluster sales is feet-on-ground work with real travel and slow trust-building — this is not a 2-week sprint. |
| Revenue mechanics | 15 | 11/15 | ₹3,999–24,999/mo benchmarks sanely against ₹1,500–5,000 per bill in existing CHA spend, and 700 customers for $1M ARR is 2% of the serviceable pool. Docked 4 because willingness-to-pay for *prevention* is unproven — Indian SMBs pay readily for recovery, less readily for insurance. |
| Time to first revenue | 10 | 8/10 | The scrip audit converts fast — quantified loss, immediate deadline. First paying customer plausible in 4–8 weeks post-launch, likely from a pilot cohort recruited pre-build. |
| Defensibility | 10 | 5/10 | The rules corpus and error-pattern library compound, and cluster-level reputation is sticky. But nothing here stops a funded export fintech — Skydo has 40,000+ of these customers already — from building it in a quarter if it works. This is an execution-and-speed moat with a 6–12 month head start. |
| **Total** | **100** | **76/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`domain-expertise-required` · `sales-heavy`

This is not a product a generalist builder should attempt cold. Someone on the founding team needs to have personally filed or supervised shipping bills, or the rules corpus will be wrong in ways that only surface when a customer loses money. Pair that person with a builder. The distribution is cluster-level relationship selling — WhatsApp, association meetings, and trips to Tiruppur — not a Product Hunt launch.

### Key assumptions to validate (3–5)

1. **Assumption:** Exporters will pay a monthly subscription to *prevent* an error, rather than only paying a success fee to recover money already lost. **How to test:** Offer 30 exporters both a ₹9,999/mo subscription and a 20%-of-recovery success fee. If more than 70% choose the success fee, the business is a services play with a software wrapper, and the pricing model needs rebuilding.

2. **Assumption:** The draft checklist reliably reaches the exporter before filing, with enough time to act. **How to test:** Shadow 20 exporters across 100 real shipments. Measure the actual gap between "CHA sends draft" and "bill is filed". If the median is under 30 minutes, or the draft frequently arrives after filing, the entire product moment collapses and it must be repositioned to the CHA side.

3. **Assumption:** Document AI can hit >95% field-extraction accuracy across the wild variety of CHA checklist and invoice formats. **How to test:** Collect 200 real draft checklists and matching invoices from 20 exporters across four clusters. Measure field-level accuracy on the fields that actually matter — scheme flag, HS code, FOB value, invoice number. Below 95% on the scheme flag, human review is permanent and the margin story changes.

4. **Assumption:** The pain is felt by the exporter, not absorbed silently by the CHA. **How to test:** Ask 30 exporters directly: "Has a shipping bill error ever cost you incentive money, and did you find out?" If most say no, the pain is invisible, and invisible pain doesn't convert — the go-to-market must lead with the scrip audit that *makes* it visible.

5. **Assumption:** Export promotion associations will grant speaking access to an unknown vendor. **How to test:** Approach three — Tiruppur Exporters' Association, FIEO regional, one product council — within the first month. Two acceptances means the channel is real; zero means falling back to slower direct outreach and rebuilding the distribution score downward.

### Risk flags

1. **Adjacent-incumbent risk (the big one).** Skydo already serves 40,000+ Indian export MSMEs, is RBI-authorised as a cross-border payment aggregator, and just raised $10M. They already publish detailed content on ICEGATE error codes and shipping bills — which means they know this problem exists. If pre-filing validation proves to be a good hook for their payments business, they can ship it as a free feature. The counter is speed and depth: be genuinely better at the rules before they decide it's worth building.

2. **Platform dependency.** ICEGATE and GSTN access terms can change, and both are government systems with their own timelines. The MFTP-to-API transition helps today but the same authority can restrict tomorrow. Mitigation: the core product must work on documents alone — API access should be an enhancement, never a dependency.

3. **Regulatory whiplash.** RoDTEP rates get revised, schemes get restructured, and the scheme itself has been suspended and restored before. A material rate cut shrinks the value proposition proportionally. Mitigation: broaden beyond RoDTEP early — drawback, IGST refunds, and eBRC realisation matter regardless of any single scheme's fate.

4. **Liability exposure.** Tell a customer "file it" and be wrong, and they lose ₹2 lakh and blame you. This is real and needs answering on day one with explicit advisory-only terms, human review on every red-flag verdict, and a conservative default — when the model is unsure, escalate rather than guess. It also caps how fast the human-in-the-loop cost can be removed.

5. **Sales-cycle drag.** Cluster-level relationship selling in Indian export towns takes travel, patience, and repeated visits. A remote-only founder will underperform badly here, and the $5M path in particular depends on a CHA reseller motion that is entirely relationship-driven.

## 14. Structured verdict

```
Score:                  76/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Two-person team — one with hands-on Indian export/customs
                        experience (ex-CHA, ex-export-house compliance, or EXIM
                        consultant), one technical. Based in or willing to live out
                        of an export cluster.
Time to revenue:        8–12 weeks from build start (pre-sell during the build via
                        free scrip audits)
Capital to launch:      ₹15–25 lakh ($17–29K)
Top 3 assumptions to validate first:
  1. Exporters pay to prevent, not just to recover — offer 30 exporters both
     subscription and success-fee pricing, measure which they choose
  2. The draft checklist reaches the exporter with actionable time before filing —
     shadow 20 exporters across 100 shipments, measure the median gap
  3. Document AI clears 95% accuracy on the scheme flag and HS code across real
     CHA formats — test on 200 collected checklists from four clusters
Kill criteria:
  - Abandon if the median gap between draft-received and bill-filed is under
    30 minutes across a 100-shipment sample (the product moment doesn't exist)
  - Abandon if fewer than 8 of 40 exporters given a free scrip audit convert to a
    paid plan within 60 days (prevention has no willingness-to-pay)
  - Abandon if Skydo, Drip Capital, or a GSP ships free pre-filing validation
    before your v1 reaches 50 paying customers
```

## 15. Next step — 1-week validation sprint

- **Day 1–2 — Get the documents.** Call 25 exporters from the Tiruppur Exporters' Association and FIEO member directories. Do not pitch. Ask for one thing: the last three draft shipping bill checklists and matching commercial invoices, anonymised. Offer a free scrip-expiry audit in exchange. Target: 15 exporters, 45 document sets.

- **Day 3–4 — Run the errors and time the gap.** Manually check all 45 sets against RoDTEP eligibility, HS code sanity, and three-way value consistency. Count how many carry an error that would have cost money. Simultaneously, ask each exporter one question: "When your CHA sends the draft, how long before it's filed?" Log the median.

- **Day 5 — Sell it before it exists.** Go back to the exporters where a real error was found, show them the rupee figure, and ask for ₹9,999/month starting today for a service that is currently just you doing it by hand. Take the money.

**Go/no-go, falsifiable:** Proceed only if (a) **≥25% of the 45 document sets contain a money-losing error**, (b) the **median draft-to-filing gap exceeds 2 hours**, and (c) **≥3 exporters actually pay** on Day 5. Verbal enthusiasm counts for nothing — a signed mandate or a UPI payment counts. Miss any of the three and this is a services business at best, not a SaaS one.
