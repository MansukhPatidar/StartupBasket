---
title: "VialTrace — vial pedigree for med spas facing DSCSA"
slug: medspa-dscsa-vial-pedigree
date: 2026-07-10
category: HealthTech / US-SMB
complexity: Medium
score: 74
verdict: GO
confidence: Medium
oneLiner: Proves every Botox vial on your shelf came from an authorized source, before the FDA inspector asks.
tags:
  vertical: HealthTech
  model: SaaS
  geography: US
  secondary: [Compliance-driven, SMB, AI-agent, Solo-builder]
axes:
  problem: 17
  demand: 12
  build: 10
  distribution: 12
  revenue: 12
  time: 7
  defensibility: 4
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# VialTrace

## 1. One-liner

Proves every Botox vial on your shelf came from an authorized source, before the FDA inspector asks.

## 2. Trend signal — why now?

Three things happened in the last ninety days, and they stack.

**April 1, 2026:** The FDA issued a warning letter to Pure Indulgence Aesthetics, a Southlake, Texas med spa. Sidley Austin called it the [first-ever DSCSA warning letter targeting a dispenser](https://www.sidley.com/en/insights/newsupdates/2026/04/us-fda-issues-first-drug-supply-chain-security-act-warning-letter-targeting-a-dispenser). The FDA found the spa had administered significantly more Botox units than it purchased from AbbVie through authorized channels, and found an unlabeled vial of botulinum toxin type A in the trash with no product identifier. The letter's language: *"These descriptions of purchasing and dispensing align with what is indicated in the patient treatment records, but not with the records provided to FDA by both your firm and AbbVie documenting actual purchasing of Botox."*

The FDA cross-referenced the spa's records **against the manufacturer's**. Sidley's advice to providers is blunt: *"clinical providers should assume that FDA can and will go to manufacturers and other supply chain partners to verify purchasing claims."*

**November 27, 2026 — 4.5 months out:** The small-dispenser exemption from DSCSA's Enhanced Drug Distribution Security requirements expires. Dispensers with ≤25 full-time pharmacists/technicians — which is essentially every independent med spa — have been sheltered since 2024. That shelter ends. After it, they owe package-level EPCIS transaction data, authorized-trading-partner verification, and the ability to produce tracing records **within 24 hours** of a regulator's request. Transaction data must be retained **six years**.

**The industry did not notice it is regulated.** The National Law Review's April 23, 2026 piece is literally titled ["Medspas on Alert: The FDA Says You're a Dispenser Too."](https://natlawreview.com/article/medspas-alert-fda-says-youre-dispenser-too) A med spa that administers prescription injectables — Botox, Dysport, Xeomin, Sculptra — is a *dispenser* under DSCSA, with the same obligations as a pharmacy. Most owners think they run a spa.

Meanwhile the economic pressure that creates the violation is getting worse, not better. AmSpa's own reporting on [overseas Botox](https://americanmedspa.org/blog/the-dangers-of-med-spas-purchasing-overseas-botox) notes that price-controlled markets sell to US buyers at **up to 50% less** than authorized US channels. And on April 30, 2026, the FDA [proposed excluding semaglutide and tirzepatide from the 503B bulks list](https://www.orrick.com/en/Insights/2026/05/FDA-Moves-to-Shut-the-Door-on-Large-Scale-Compounding-of-GLP1-Drugs), which closes the cheap compounded-GLP-1 door and pushes med spas toward expensive, serialized, DSCSA-covered branded product. More regulated inventory, thinner margins, stronger temptation to buy gray. That is the exact trade the FDA is now auditing.

States are piling on. Iowa's [HSB 591](https://trackbill.com/bill/iowa-house-study-bill-591-a-bill-for-an-act-establishing-the-medical-spa-oversight-act-and-making-penalties-applicable/2780412/), introduced January 28, 2026, would write electronic traceability, EPCIS data exchange, and six-year retention into state med spa law directly.

```
Provenance:
  - Signal 1 (Demand): FDA's first DSCSA warning letter against a dispenser — a Texas med spa —
    citing purchase/dispense discrepancies and a vial with no product identifier.
    https://www.fda.gov/inspections-compliance-enforcement-and-criminal-investigations/warning-letters/pure-indulgence-aesthetics-723267-04012026 — 2026-04-01
  - Signal 2 (Feasibility/Regulatory clock): FDA small-dispenser exemption from Enhanced Drug
    Distribution Security expires 2026-11-27, imposing EPCIS exchange, authorized-trading-partner
    verification, 24-hour tracing response, and 6-year retention on ~11,500 med spas.
    https://www.fda.gov/drugs/drug-supply-chain-security-act-dscsa/waivers-and-exemptions-beyond-stabilization-period — observed 2026-07-10
  - Signal 3 (Economic): US med spa market ~$18–21B in 2026, ~11,500 locations growing ~1,000/yr,
    majority independent single-location; owners already pay $1,000–$5,000/mo for a medical director
    retainer, establishing a compliance-spend baseline.
    https://www.americanmedspa.org/med-spa-statistics/ + https://www.medicaldirectorco.com/medical-director-cost-guide/ — observed 2026-07-10
  Category: Regulatory arbitrage
```

## 3. The opportunity

DSCSA compliance tooling exists. It is built for pharmacies. InfiniTrak, LSPedia, TraceLink, TrackTraceRX, RedSail — they all sell EPCIS ingestion and trading-partner verification, and they all plug into pharmacy management systems: PioneerRx, Liberty, RedSail. RedSail publishes $50–75/mo pricing. The others quote you.

Med spas do not run a pharmacy management system. They run Boulevard, Zenoti, Aesthetic Record, Pabau — booking-and-charting platforms. Zenoti tracks injectables "by syringe and batch." None of them do EPCIS data exchange, none verify authorized trading partners, none can answer an FDA tracing request in 24 hours. The compliance pipe and the operational system have never been connected, because the two vendor categories were selling to two different buyers who were, until April 2026, not obviously the same buyer.

InfiniTrak has noticed — they now have a med-spa landing page. But their product is a pharmacy product with a med spa headline, sold by a pharmacy sales motion, and their differentiation claim is being *"the only integrated DSCSA solution with PioneerRx."* That is not a med spa sentence.

The gap: **a med spa owner who receives a Botox shipment today has an email from the distributor, a packing slip, and a vial with a 2D DataMatrix on it. Nothing connects those three to the patient chart where the vial gets used.** When the FDA shows up and reconciles purchases against treatments — which is precisely what it just did in Texas — the owner has no artifact to hand over.

The 10× is not "compliance dashboard." It is: the owner scans a vial with a phone, and the system already knows the EPCIS record for that serial number, already verified the seller was an authorized trading partner, and already stapled it to the patient chart line where the units were injected. The reconciliation the FDA performs manually is running continuously, and the owner sees the discrepancy before the inspector does.

## 4. Target market

**Primary customer:** Owner-operator of an independent, single-location US med spa — 1 to 4 injectors, $800K–$3M annual revenue, administering Botox/Dysport/Xeomin plus fillers, increasingly plus branded GLP-1s. Usually a nurse practitioner, PA, or RN who owns the business, with a contracted medical director. The buyer is the owner, not a compliance officer, because there is no compliance officer.

**Why they buy:** Two fears, one operational annoyance. Fear one: a warning letter, which is public, which local news picks up, which is existential for a business that runs on Instagram. Fear two: their medical director — the person whose license is on the line — starts asking questions after reading the AmSpa alert. The annoyance: they genuinely cannot answer "which patients got lot C3709C3" without an afternoon of cross-referencing invoices against charts.

I want to be honest that I could not source good verbatim owner quotes. The trade press (AmSpa, National Law Review, LSPedia, Sidley) is writing *at* med spa owners about this, and writing a lot, but I did not find owners writing back yet — no meaningful Reddit or forum discussion of DSCSA among med spa operators. That asymmetry is itself informative and it cuts both ways: it is why the opportunity is unclaimed, and it is the single biggest risk in this proposal. See §13.

**Rough TAM reasoning:** ~11,500 US med spas, majority independent single-location (AmSpa), growing ~1,000/year. Not all administer Rx injectables, but the large majority do — injectables are the core revenue driver. Call the addressable set 8,000–9,000. At $250/mo blended, that is a ~$25M/yr ceiling. Small enough that no venture-backed pharma-compliance vendor will build a med-spa-native product; large enough that $2–3M ARR is a realistic ceiling-adjacent outcome. That asymmetry is the whole thesis.

**Why now for them:** The exemption expires November 27, 2026. The first enforcement letter landed April 1, 2026. Nobody wants to be the second one.

## 5. Product sketch (MVP)

- **Scan-to-receive.** Phone camera reads the 2D DataMatrix on each vial or carton — GTIN, serial, lot, expiry — and files it against the purchase order.
- **Authorized trading partner check.** Before you buy, look up the distributor: license status, state registration, whether the manufacturer recognizes them. Red / yellow / green, with the evidence behind the color.
- **EPCIS inbox.** Ingests the EPCIS transaction data distributors are already obligated to send, and matches it to the physical vials you scanned. Flags the mismatch: data with no vial, vial with no data.
- **Chart linkage.** When a vial's units are administered, tie serial → patient → date → injector. Pulls from Boulevard / Zenoti / Aesthetic Record where an API exists; a two-tap manual path where it doesn't.
- **Continuous reconciliation.** Units purchased vs units administered vs units wasted, per product, running. The number the FDA computed by hand in Texas, computed nightly here.
- **24-hour tracing packet.** One button produces the full pedigree for any product, lot, or date range, in the form an FDA investigator asks for.
- **Suspect product workflow.** A documented, timestamped procedure with a named responsible person — quarantine, manufacturer verification request, FDA notification within 24 hours if illegitimate.
- **Six-year archive.** Immutable, exportable, survives the practice management system you'll switch off of in three years.

## 6. AI angle — what's load-bearing

Remove the AI and about 70% of this product still stands — and I'd rather say that plainly than oversell it. EPCIS parsing, serial matching, and reconciliation arithmetic are deterministic. That is fine. It is also why this is buildable by a small team.

Where AI is genuinely load-bearing, and where the manual version fails:

**Document-to-structure ingestion.** The DSCSA data a med spa actually receives is a mess: some distributors send clean EPCIS XML, some send a PDF packing slip, some send an email body, some send an ASN in a portal you download as CSV. A small spa buys from four to eight sources. Normalizing heterogeneous, semi-structured supplier documents into transaction information/history/statement triples is exactly the job a vision-language model does now for cents and a rules engine cannot do at all. This is the difference between "we support 6 distributors" and "we support whatever you get."

**Distributor legitimacy triage.** Gray-market sellers present as legitimate: a website, a license number, a plausible name. Cross-referencing a seller against state wholesale-distributor registries, FDA warning letters, manufacturer authorized-distributor lists, and prior enforcement actions — and summarizing *why* a seller looks wrong — is retrieval and judgment over unstructured public records. A human compliance consultant does this in an hour. That is the $250/hr the owner is trying not to spend.

**Discrepancy explanation.** "You are 14 units short on Botox this quarter" is useless. "You are 14 units short; 12 of those trace to three treatment records where the injector logged units but no vial serial, on days the second treatment room was in use" is actionable. Attributing a reconciliation gap to its probable cause across chart notes, scan logs, and shift schedules is a reasoning task.

If the ingestion problem were easy, the pharmacy vendors would already have solved med spas. It isn't, and they haven't.

## 7. Localization angle (if any)

`N/A — this is a US-only play, and deliberately so.` DSCSA is a US federal statute. The entire product is the shape of one country's law. The EU has FMD, which is a different regime with different data structures and a different buyer; that is a separate product, not a translation. Within the US, the meaningful "localization" is state law — Iowa's HSB 591 and similar bills in Indiana would add facility registration and a named responsible person on top of the federal baseline. A state-rules layer is the natural first expansion, not a geography.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** $199/mo single location, injectables only. $349/mo with GLP-1 and multi-injector reconciliation. $99/location/mo add-on beyond the first for small groups. Annual prepay at 10× monthly.
- **Anchor:** The medical director retainer is $1,000–$5,000/mo. AmSpa membership plus a compliance attorney consult is a separate line. $199 is not a considered purchase for this buyer; it is a checkbox on the same page as the thing they already bought.
- **ACV:** ~$2,900 blended (mix of $199 and $349, some multi-location).
- **Math to $1M ARR:** 345 med spas. Against ~8,500 addressable, that is 4% penetration.
- **Math to $5M ARR:** ~1,700 locations, 20% penetration — hard on the single product. Realistically $5M requires the adjacent attach: state-law compliance module, medical director oversight workflow (the chart-review cadence the retainer contract requires, which is currently a calendar reminder), and a distributor-side listing where authorized sellers pay to be verified. The honest read is that this is a **$1.5–3M ARR business on the core product**, and I'd rather write that down than pretend at $5M.
- **Expansion path:** Locations, then GLP-1 tier, then the medical-director module (which is where the $1,000–$5,000/mo budget actually lives, and the wedge product earns the right to ask for it).

## 9. Go-to-market wedge — first 100 customers

The regulatory clock does the selling. My job is to be standing where the owner looks when they finally read the AmSpa email.

1. **The warning-letter alert, weaponized.** FDA publishes warning letters and Form 483s publicly. Build a free, public tracker of every DSCSA enforcement action against a dispenser, updated the day it posts, with a plain-English "what they got cited for and whether you do this too" breakdown. There is currently exactly one such letter. There will be more; the FDA telegraphed it. The people who search "med spa DSCSA warning letter" at 11pm are the buyers, and there are three law firms and zero products ranking for it today. This is the only channel here that compounds.

2. **Sell through the medical director, not the spa.** Physicians who serve as med spa medical directors carry the license risk and often cover 5–15 spas each. Companies like Medical Director Co. aggregate them. There are maybe a few thousand of these physicians nationally and they are findable. Pitch: *you are personally exposed to every vial your spas bought from a distributor you never checked.* One director who mandates it across 8 spas is 8 customers from one conversation. This is the highest-leverage list in the market and nobody is calling it.

3. **The AmSpa/ByrdAdatto channel.** AmSpa is the trade body, it runs Boot Camps and the annual Medical Spa Show, its members get a complimentary compliance consult with ByrdAdatto attorneys, and AmSpa has been publishing DSCSA alarm content since April. Sponsor the compliance track. The attorneys giving that free consult need something to tell the owner to *do* after the consult. Right now they have nothing to point at. Be the thing they point at — this is a referral relationship, not an ad buy.

4. **Distributor co-marketing, inverted.** Authorized distributors (the legitimate ones) are hurt by gray market competition and are themselves DSCSA-obligated to send EPCIS data their customers ignore. Offer them a co-branded "your customers are inspection-ready" pipe for free. They have the customer list. Their incentive is to make buying from *them* the compliant default.

5. **The reconciliation teardown as cold outreach.** For a target spa, you can partially reconstruct the public side — state license, medical director of record, service menu, GLP-1 offering. Send a two-minute video: *here is the exact question the FDA asked the Texas spa, here is where your answer would come from, here is how long it would take you.* Not a demo. A dry run of the inspection.

First 100: I'd expect ~40 from channels 1+2 in the ninety days on either side of November 27, ~30 from the AmSpa relationship, ~30 from outbound. The deadline is a forcing function that expires — which is the risk in §13.

## 10. Build complexity — justification

**Medium.** 3–4 months to a credible v1 for two people.

Off the shelf: 2D DataMatrix / GS1 barcode decoding on mobile, EPCIS 1.2/2.0 is a published GS1 standard with open parsers, document extraction is a vision-model API call, the archive is a database with an append-only discipline. State license registries are public. FDA warning letters and the authorized-distributor lists are public.

The custom work, and it is real: EPCIS in practice is not EPCIS on paper — every distributor's file is subtly non-conformant, and normalizing them is a long tail you grind down customer by customer. The practice-management integrations (Boulevard, Zenoti, Aesthetic Record) range from a decent API to no API, and the no-API path means a manual entry flow that has to be fast enough that a busy injector actually does it. That is a product design problem, not an engineering one, and it is the one that kills this if you get it wrong.

Nothing here needs a research breakthrough, a dataset that doesn't exist, or a regulator's permission to launch. You are not becoming a trading partner; you are recordkeeping for one.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Recordkeeping software. No license required to build or sell it. You are not dispensing, distributing, or advising on medicine. |
| Ethical — no harm / dark patterns | ✅ | The product's function is helping practices *not* inject counterfeit drugs into people. Directionally the cleanest thing in this repo. |
| Market exists (evidence above) | ✅ | ~11,500 med spas, a federal deadline, an enforcement letter, and $1K–$5K/mo of existing compliance spend per practice. |
| 1–5 person team can build this | ✅ | Two people, 3–4 months. |
| Launchable with <$50K / ₹40L | ✅ | Under $25K: two founders' time, API costs, an attorney to review the compliance claims you make in marketing (do not skip this one). |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 17/20 | Federal deadline, public enforcement, personal license exposure for the medical director. Not 19 because the pain is *anticipated* rather than currently felt — one warning letter is not yet a pattern, and pain that arrives on a calendar date is weaker than pain felt this morning. |
| Demand evidence | 15 | 12/15 | Heavy trade-press and law-firm activity, a real FDA action, real existing compliance spend, state bills. Docked 3: I could not find med spa owners *themselves* discussing DSCSA anywhere. All the noise is vendors and lawyers talking at them. That is not the same as demand. |
| Build feasibility | 15 | 10/15 | Standards-based and off-the-shelf at the core, but the EPCIS long tail and the no-API practice-management integrations are a real grind. 3–4 months, not 6 weeks. |
| Distribution clarity | 15 | 12/15 | The medical-director channel is genuinely excellent — named, small, high-leverage, license-motivated. The AmSpa relationship is a real door. Docked for the outbound math being unproven and the enforcement-tracker channel needing enforcement to keep happening. |
| Revenue mechanics | 15 | 12/15 | Pricing is anchored below an existing, much larger line item. $1M ARR at 4% penetration is credible. Docked because $5M genuinely isn't there on the core product and I won't pretend otherwise. |
| Time to first revenue | 10 | 7/10 | Build is 3–4 months. But you can pre-sell against a November 27 deadline, and this buyer signs without procurement. First dollar in ~4–5 months from a standing start; first dollar in weeks if you pre-sell before building. |
| Defensibility | 10 | 4/10 | This is the weak axis and it is weak. InfiniTrak and LSPedia can point at med spas any Tuesday; InfiniTrak already has. What you accumulate is the normalized distributor-EPCIS corpus and the practice-management integrations — real, but a 12-month head start, not a moat. Execution and channel ownership, not defensibility, are the game. |
| **Total** | **100** | **74/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required`

You need someone who can read the statute and the GS1 EPCIS spec and not flinch, and someone who can get on the phone with a nurse practitioner who owns a spa and not sound like a compliance vendor. The second person is harder to find than the first.

### Key assumptions to validate (3–5)

1. **Assumption:** Med spa owners feel this as their problem, not their medical director's problem, and will pay to solve it. **How to test:** 25 calls with independent med spa owners in Texas, Florida, and Arizona. Ask them, cold, what DSCSA is. Count how many know. Then ask what they'd do if an FDA investigator asked which patients received a given Botox lot. The falsifiable outcome: if fewer than 8 of 25 can name a concrete action they'd take, the pain is real but *unrecognized* — which means you're selling education, and the CAC math in §9 is wrong.
2. **Assumption:** Medical directors will push this down to the spas they cover. **How to test:** 15 conversations with physicians who serve as medical director for 3+ spas, sourced through Medical Director Co. and AmSpa. Ask directly: would you require a tool like this as a condition of your oversight agreement? Ten "yes" makes channel #2 the whole go-to-market.
3. **Assumption:** Distributor EPCIS data is actually obtainable by a small spa today, in some form, from most of its suppliers. **How to test:** Get three friendly med spas to forward every document their distributors sent with the last five shipments. If the data isn't there, the product's core input doesn't exist and the whole thing collapses into manual scanning. **This is the assumption to test first — it is cheapest and it is fatal.**
4. **Assumption:** FDA enforcement against dispensers continues past the single Texas letter. **How to test:** Watch the FDA warning letter feed weekly. One letter is an anecdote.

### Risk flags

1. **Deadline risk / the pain expires.** This is the big one. The whole urgency curve peaks on November 27, 2026. If the FDA grants another blanket exemption extension — which it has done before, repeatedly, for exactly this population — demand evaporates overnight and you are selling a nice-to-have into a market with no forcing function. **Build the product so it is useful on November 26 for reasons unrelated to November 27** (inventory shrinkage, expired-product loss, counterfeit protection, recall traceability). Otherwise a single FDA guidance document kills the company.
2. **Incumbent encroachment.** InfiniTrak already has a med spa page. LSPedia is publishing med spa content. They have the EPCIS plumbing done and pharmacy-scale distribution relationships. If either builds a real med-spa-native product with a med-spa sales motion, the defensibility score of 4 is generous. Your only durable advantage is being the product med spa owners *recommend to each other*, which means the first 100 have to love it.
3. **Regulatory risk, inverted.** Unusually, this product's existence depends on a regulation being enforced. Most compliance products fear regulatory change; this one fears regulatory *inaction*. That is an uncomfortable place to build a business and the founder should know it going in.
4. **Platform dependency.** Chart linkage depends on Boulevard/Zenoti/Aesthetic Record APIs. Zenoti in particular has every incentive to build this natively and cut you off. Design the manual path to be good enough that losing an API is an inconvenience, not a death.
5. **You will find crime.** Continuous reconciliation on a spa that has been buying gray-market product will surface it. Know, before you write a line of code, what you do when a paying customer's dashboard says they injected 200 units they never bought. Get the attorney in §11 to answer this. It is a product requirement, not a hypothetical.

## 14. Structured verdict

```
Score:                  74/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder who can read a GS1 spec, paired with someone
                        credible to aesthetics practice owners. Healthcare compliance
                        background helps; pharmacy background is close to a cheat code.
Time to revenue:        4–5 months building first; 6–8 weeks if you pre-sell against
                        the Nov 27 deadline before writing code (recommended)
Capital to launch:      <$25K
Top 3 assumptions to validate first:
  1. Distributor EPCIS/transaction data is actually obtainable by a small spa today —
     collect five shipments' worth of documents from three friendly spas. Cheapest test,
     fatal if false. Do this in week one.
  2. Med spa owners recognize DSCSA as their problem — 25 cold owner calls, count how
     many can name a concrete action. Fewer than 8 means you're selling education.
  3. Medical directors will mandate it across their spas — 15 physician conversations.
     Ten yeses makes this a channel business.
Kill criteria:
  - Abandon if FDA grants another blanket small-dispenser exemption extension past
    Nov 27, 2026 AND fewer than 5 of 25 owners interviewed cite non-compliance reasons
    (shrinkage, recall, counterfeit) to buy.
  - Abandon if fewer than 8 of 25 owner interviews can articulate what they would hand
    an FDA investigator — proves the pain is unrecognized, not just unsolved.
  - Abandon if InfiniTrak or LSPedia ships a med-spa-native product with published
    sub-$300/mo pricing before your v1.
  - Abandon if <2 of 3 friendly spas can obtain machine-readable transaction data from
    a majority of their distributors.
```

## 15. Next step — 1-week validation sprint

The sprint is designed so the cheapest, most fatal question gets answered first. If day 1–2 fails, stop; don't spend the rest of the week.

- **Day 1–2 — Does the input exist?** Recruit three med spas (LinkedIn, an AmSpa forum, a friendly injector) and ask for every document their distributors sent with their last five shipments: emails, packing slips, portal downloads, ASNs. Count how many contain machine-readable transaction data with serial numbers. **Falsifiable outcome:** if fewer than 2 of 3 spas can produce usable transaction data for a majority of their suppliers, the product has no input and the week ends here.

- **Day 3–4 — Do owners feel it?** 25 cold calls to independent med spa owners in TX, FL, AZ. Two questions, in this order, and do not lead: *"What is DSCSA?"* and *"If an FDA investigator asked you today which patients received a specific Botox lot number, what would you do?"* Record verbatim answers. **Falsifiable outcome:** count owners who name a concrete, executable action. This is the number that decides whether you're building a product or a category.

- **Day 5 — Does the channel work?** 15 outreach attempts to physicians serving as medical director for 3+ med spas. One question: *"Would you require a vial-provenance tool as a condition of your oversight agreement?"* **Falsifiable outcome:** ≥10 yes → the go-to-market is the medical director and you build for them. <5 yes → channel #2 is dead and distribution clarity drops from 12 to 6, taking the total to 68 and the verdict to VALIDATE.

**Go / no-go:** Proceed only if (a) ≥2 of 3 spas have obtainable transaction data, **and** (b) ≥8 of 25 owners articulate a concrete FDA response, **and** (c) ≥10 of 15 medical directors say yes. Two of three is a VALIDATE and a second sprint. One of three is a PASS.
