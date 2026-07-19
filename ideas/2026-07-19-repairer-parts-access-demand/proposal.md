---
title: "PartsLever — parts-access enforcement kit for EU repair shops"
slug: repairer-parts-access-demand
date: 2026-07-19
category: TradeTech / EU
complexity: Low
score: 74
verdict: GO
confidence: Medium
oneLiner: "Turns a manufacturer's stonewall into a citable legal demand that gets independent repair shops the parts they're owed."
tags:
  vertical: TradeTech
  model: SaaS
  geography: EU
  secondary: [Compliance-driven, SMB, AI-agent, Solo-builder, Multilingual]
axes:
  problem: 15
  demand: 11
  build: 13
  distribution: 12
  revenue: 10
  time: 8
  defensibility: 5
founderFit: [technical-heavy, content-heavy]
featured: false
---

# PartsLever

## 1. One-liner

Turns a manufacturer's stonewall into a citable legal demand that gets independent repair shops the parts they're owed.

## 2. Trend signal — why now?

On **31 July 2026** — twelve days from today — EU Directive 2024/1799 becomes applicable law across all member states. It does something the repair industry has wanted for two decades: it makes manufacturer obstruction of independent repair *illegal*, not merely annoying.

The specifics matter here, because they're what make this a product rather than a slogan. Under the directive, manufacturers must make available "for a reasonable price, spare parts or tools they are obliged to give" to independent repairers. They may not "use contractual, hardware, software or other reasons, such as previous repairs by another party, as obstacles to the repair without a legitimate and objective justification." Independent repairers get access to technical documentation *on the same terms as authorised networks*. Member states must adopt "appropriate penalties for abuses of the law."

Germany's draft implementation puts teeth on it: administrative fines up to €3,750 per violation, injunctive relief, and — for serious systematic non-compliance — criminal liability up to one year, with personal exposure for named managers.

Meanwhile the obstruction being outlawed is documented and ongoing. Parts pairing remains the industry's preferred lock. Apple's iOS 18 Repair Assistant loosened used-genuine-part calibration but third-party aftermarket parts, at roughly half the price of originals, stay largely restricted. Colorado banned parts pairing outright effective January 2026; Oregon follows in 2027.

The market it lands on is real and fragmented: **41,268 consumer electronics repair businesses in Europe**, a **€2.9bn** industry in 2026, with **independents handling 53%** of home appliance repair activity.

Here's the asymmetry I care about. A €3,750 fine is rounding error to Bosch. But the *threat* of a properly-cited, correctly-addressed, on-the-record demand letter is not — because the manufacturer's compliance team has to actually process it, and processing it costs more than just shipping the part. That asymmetry is the entire business.

Provenance:
  - Signal 1 (demand): Parts pairing documented as ongoing blocker; repairers on record describing workarounds as impractical — Alexandre Isaac of Repair Academy: "having to spend several hours microsoldering just to repair a screen or a camera is not what we call repairable" — https://repair.eu/news/part-pairing-a-major-threat-to-independent-repair/ — accessed 2026-07-19
  - Signal 2 (feasibility/regulatory): Directive 2024/1799 applies from 31 July 2026; independent repairers gain documentation access on same terms as authorised networks; obstruction without objective justification prohibited — https://eur-lex.europa.eu/EN/legal-content/summary/common-rules-promoting-the-repair-of-goods-and-amending-related-eu-legislation.html — accessed 2026-07-19
  - Signal 3 (economic): German implementation carries fines to €3,750, injunctive relief, criminal liability for systematic non-compliance; 41,268 EU repair businesses in a €2.9bn market — https://www.hoganlovells.com/en/publications/germanys-new-repair-law-implementing-the-eu-right-to-repair-directive + https://www.ibisworld.com/europe/industry/consumer-electronics-repair/200754/ — accessed 2026-07-19
  Category: Regulatory arbitrage

## 3. The opportunity

A new right is worthless if exercising it requires a lawyer.

That's the gap. On 31 July, a two-person repair shop in Leipzig acquires a genuine legal entitlement to demand a control board schematic from Miele. What that shop actually has is: a support portal that returns "not available to your account type," a phone queue, and no idea which of the twenty-six national transpositions applies, which article to cite, who the legal addressee is, or what happens next when the answer is still no.

So they do what they've always done: shrug, tell the customer it's unfixable, and sell a replacement. The right exists on paper and dies in the shop.

Nobody is building for this side of the transaction. Search the space and you find manufacturer-side compliance consultancies — firms selling Bosch and Samsung readiness audits — plus advocacy orgs like Repair.org and Right to Repair Europe publishing explainers. Explainers are not tools. Nobody has built the thing that takes "they won't give me the part" and returns a correctly-cited, correctly-addressed, deadline-bearing demand in the right language with an escalation path attached.

The incumbents in repair-shop software aren't going to. RepairDesk ($99–149/store/mo) and RepairShopr ($69.99–149.99/mo) are ticketing-and-invoicing systems. Parts procurement enforcement is orthogonal to everything they've built, and their customers are global, so an EU-only regulatory feature is a poor bet for them. That's my window.

## 4. Target market

**Primary customer:** Owner-operators of independent electronics and appliance repair shops in Germany, France, Netherlands, Belgium, Austria — 1–10 technicians, €150K–€900K annual revenue. The person is usually the founder, usually still on the bench, and has no legal counsel on retainer.

**Why they buy:** Because every refused part is a refused job. A shop that turns away a €180 board-level repair because the manufacturer wouldn't release a schematic loses the margin *and* the customer relationship — the customer buys new, from someone else. Marie Castelli of Back Market, on parts-pairing warning messages: "even when explained that these messages are mainly a warning message and do not affect the functionality, we see a share of customers returning the product." That's revenue evaporating over a software lock.

**Rough TAM reasoning:** 41,268 consumer electronics repair businesses across Europe. Restrict to the five launch markets and to shops big enough to have recurring parts friction — call it 8,000–12,000 realistically addressable. At €59/mo, 12,000 shops is roughly €8.5M ARR at full saturation; I need well under 15% of that for the target.

**Why now for them:** Before 31 July, a demand letter to Siemens was a bluff with nothing behind it. After 31 July, it cites an applicable statute with a named enforcement authority and a fine schedule. Identical letter, completely different weight. The shop knows the law changed — the trade press has covered it heavily — but has no idea how to convert that into a part in a box.

## 5. Product sketch (MVP)

- **Refusal capture** — photograph the portal error, paste the email, or forward the "not available" reply. Extract manufacturer, model, part, refusal type, date.
- **Entitlement check** — does this product fall under Annex II scope, is it inside the parts-availability window (7 years phones/fridges, 10 years washing machines and dishwashers), and is the stated refusal reason one the directive permits?
- **Demand letter generator** — a citation-correct letter in the shop's national language, referencing the correct national transposition, addressed to the manufacturer's legal entity, with a response deadline and the "reasonable price / no objective justification" language quoted from the statute.
- **Escalation ladder** — no reply by the deadline produces the next artefact: reminder, then a pre-filled complaint to the correct national consumer protection authority with the full refusal history attached.
- **Refusal log** — every request, reply, and delay timestamped per manufacturer. The 15-day spare-parts delivery expectation is tracked against actual behaviour.
- **Manufacturer scorecard** — aggregated across all customers: who complies, who stalls, who capitulates after letter one. This is the asset that compounds.
- **Job-level ROI** — recovered jobs and recovered revenue, so the €59 line item defends itself at renewal.

## 6. AI angle — what's load-bearing

Remove the AI and this collapses into a Word template, so let me be exact about what it's doing.

**Refusal classification.** Manufacturer refusals arrive as screenshots of portal errors, curt emails in German or Dutch, and chat transcripts. The system must read those and decide which of roughly a dozen refusal categories applies, because the category determines whether the refusal is lawful. "Part discontinued, outside the 10-year window" is legitimate. "Not available to your account type" is precisely the obstruction the directive bans. That classification is the product's core judgment, and it's a genuine reading-comprehension task across languages and formats — not a lookup.

**Statute mapping.** Twenty-six national transpositions of one directive, each with its own article numbering, terminology, and enforcement body. Mapping a refusal to the correct citation in the correct jurisdiction, in the correct language, is retrieval plus legal drafting.

**Letter construction.** The letter has to be specific to the model, the part, the refusal wording, and the shop — a generic template gets filed in the bin, and a wrong citation destroys credibility permanently with that manufacturer's legal desk.

Note what I'm *not* claiming: this doesn't give legal advice or represent anyone. It drafts correspondence the shop owner sends under their own name. That distinction is what keeps it a software product.

## 7. Localization angle

Localization isn't a nice-to-have here, it's the whole moat.

The directive is EU-wide but enforcement is entirely national. Germany, France, Netherlands, Belgium and Austria each transpose it separately, with different penalty schedules, different enforcement authorities, and different procedural expectations. A letter has to be in the shop's language, cite the national instrument rather than the directive, and go to the right authority when it escalates.

Launch order is Germany first — the draft implementation is the most developed, penalties are the most explicit, and it holds the largest concentration of independent repair businesses. France second, on the strength of an existing repairability-index culture that has already trained both shops and consumers to think in these terms. Netherlands, Belgium, Austria follow.

Pricing stays euro-native at €59/mo. That's below what these shops already pay for ticketing software, which is the anchor that matters.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** €59/mo per shop (Standard, unlimited demands, single country). €129/mo Pro adds multi-country operation, the manufacturer scorecard, and priority letter review.
- **ACV:** ~€780 blended.
- **Path to €1M ARR:** ~1,280 shops at blended ACV. Against 8,000–12,000 addressable in five markets, that's 11–16% penetration.
- **Path to €5M ARR:** needs all of: expansion beyond five countries into the full EU-27; a second product line for the *manufacturer* side of the same data (a compliance-monitoring feed priced at €2K+/mo, sold to brands who'd rather see their refusal rate before a regulator does); and a parts-sourcing affiliate layer where a successful demand routes into an actual purchase. The third is where the ceiling actually lifts, but it's a year-two conversation.
- **Expansion path:** per-country add-ons, then scorecard data licensing, then transaction economics on the parts flow the product unlocks.

Honest read: revenue mechanics score a 10, not a 13. €59/mo against a shop that must *believe* it recovers jobs is a real sell, and I have no proof of the recovery rate yet.

## 9. Go-to-market wedge — first 100 customers

1. **The 31 July news hook, worked directly.** German and Dutch repair trade press has been covering the deadline for months. I don't want a byline — I want a free tool. Publish "Is your part refusal legal?" — paste the refusal, get a verdict and a sample letter, no signup. Pitch it to the trade outlets as a resource in the deadline coverage. Every use is a qualified lead with the pain already articulated.

2. **Scrape the national repair registries and directories.** Member states must nominate national contact points by 31 July 2026, with registration opening ahead of the European Repair Platform's 2028 launch. Existing national repair directories and repair-café networks are already public and scrapeable today. Target: 2,000 shops in Germany and NL. Cold email in-language with one specific hook — "Bosch refused a schematic to a shop in your city last week; here's the letter that got it released." At a 3% conversion, that's 60 shops.

3. **Repair Academy and the trainer channel.** Alexandre Isaac's Repair Academy and similar training outfits sit directly on top of this audience and already teach workaround techniques like microsoldering — the very thing the directive is meant to make unnecessary. Offer the tool free to their cohorts. Trainers distribute to exactly the shops that hit parts walls hardest.

4. **Publish the manufacturer scorecard as a public leaderboard.** Once there's data on who complies and who stalls, the scorecard itself becomes the marketing. Repair journalists and Right to Repair Europe will cover a ranked list of stonewalling manufacturers. Shops arrive to see where their suppliers rank and stay for the letters.

## 10. Build complexity — justification

**Low.** Document ingestion, a classification layer over refusal types, a retrieval index over the national transpositions, templated multilingual letter generation, and a deadline scheduler. All off-the-shelf. No integrations with manufacturer systems — the product deliberately sits outside them, which is what keeps it simple and what stops manufacturers from being able to shut it off.

The genuinely hard part isn't engineering, it's the legal content: getting the citations right in five jurisdictions. That's a few thousand euros of local counsel review per country, and it's the thing I'd spend on before I'd spend on anything else. A wrong citation is worse than no letter.

Realistic v1: 6–8 weeks for one country, plus 1–2 weeks per additional jurisdiction.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Drafts correspondence sent by the shop under its own name. Not legal representation. Needs an unauthorized-practice-of-law review per country — Germany's RDG is the strictest and gets reviewed first. |
| Ethical — no harm / dark patterns | ✅ | Helps small businesses exercise a right the legislature deliberately granted them. |
| Market exists (evidence above) | ✅ | 41,268 EU repair businesses, €2.9bn market, documented obstruction, statutory deadline. |
| 1–5 person team can build this | ✅ | One builder plus per-country legal review. |
| Launchable with <$50K / ₹40L | ✅ | ~€25–30K, most of it legal content review across five jurisdictions. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 15/20 | Every blocked part is a lost job with real margin attached. But it's a per-incident irritation, not a daily fire — most shops have normalized routing around it for years. Normalized pain is harder to sell against than acute pain. |
| Demand evidence | 15 | 11/15 | Statute is certain, market size is sourced, obstruction is documented with named repairers on record. What's missing is direct evidence that shops will *pay* to enforce rather than continue shrugging. That gap is the reason this isn't a 14. |
| Build feasibility | 15 | 13/15 | Off-the-shelf throughout. Constraint is legal content accuracy, not engineering. |
| Distribution clarity | 15 | 12/15 | Named channels, scrapeable lists, a hard news peg twelve days out, and a trainer channel with real reach. Conversion rate on cold email to this audience is unproven. |
| Revenue mechanics | 15 | 10/15 | €59/mo is well-benchmarked against existing repair-shop software spend, but ROI depends on a recovery rate I can't yet quantify. Path to €1M is credible; €5M requires the second product line to work. |
| Time to first revenue | 10 | 8/10 | Deadline urgency compresses the sales cycle. Free tool → paid conversion should produce revenue inside 6–8 weeks of launch. |
| Defensibility | 10 | 5/10 | The letter generator is copyable in a quarter. The multi-jurisdiction legal content is a 6-month lead. The manufacturer scorecard — refusal-and-capitulation data nobody else holds — is the only durable moat, and it doesn't exist until there's volume. Honest 5. |
| **Total** | **100** | **74/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `content-heavy`

Needs someone who can ship a document-processing product solo and who will personally own the legal-content accuracy across five jurisdictions. The content work is not delegable early — it's the product.

### Key assumptions to validate (3–5)

1. **Assumption:** Independent shops encounter parts/documentation refusals often enough to matter — I'm assuming 2+ per month for a mid-sized shop. **How to test:** 25 structured interviews with German and Dutch shop owners; ask them to count refusals from the last 60 days rather than estimate a rate.
2. **Assumption:** A cited demand letter actually moves manufacturers post-31-July. **How to test:** send 20 real letters on behalf of pilot shops in August–September; measure part-release rate and time-to-response against the shops' own historical baseline.
3. **Assumption:** Shops will pay €59/mo rather than send one letter and cancel. **How to test:** price the pilot from day one; measure month-2 and month-3 retention, not signup count.
4. **Assumption:** Drafting correspondence for a shop's own signature stays clear of unauthorized-practice-of-law rules in Germany. **How to test:** written opinion from German counsel on RDG applicability before launch. Non-negotiable.

### Risk flags

1. **Enforcement risk.** If national authorities don't actually enforce — and early-stage directive enforcement is frequently toothless for the first 18 months — manufacturers learn to ignore letters, and the product's value proposition evaporates. This is the single biggest threat and it's largely outside my control.
2. **Regulatory-scope risk.** The directive's teeth apply to Annex II products under existing EU legislation, not everything a shop repairs. If the practical scope is narrower than shops assume, the addressable pain shrinks with it.
3. **Legal-positioning risk.** Germany's Rechtsdienstleistungsgesetz is aggressive about non-lawyers providing legal services. Get the positioning wrong and the product is illegal in the launch market.
4. **Incumbent absorption.** RepairDesk or RepairShopr could ship this as a feature. Unlikely near-term — their customer base is global and this is EU-only — but it caps the long-run ceiling.
5. **One-and-done usage.** Real risk that a shop sends two letters, gets its parts, and churns. Retention depends on the scorecard and the log becoming operationally sticky, and that's unproven.

## 14. Structured verdict

```
Score:                  74/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Solo technical founder in DACH or Benelux, comfortable owning
                        multi-jurisdiction legal content, with budget for local counsel review
Time to revenue:        6–10 weeks
Capital to launch:      €25–30K (majority: legal content review across five jurisdictions)
Top 3 assumptions to validate first:
  1. Refusal frequency ≥2/month per shop — 25 structured interviews counting actual
     incidents from the last 60 days
  2. Letters move manufacturers — 20 real letters sent August–September, measure
     part-release rate vs. each shop's historical baseline
  3. German RDG positioning is clean — written counsel opinion before any launch
Kill criteria:
  - Abandon if <30% of interviewed shops report 2+ refusals in the trailing 60 days
  - Abandon if <25% of the 20 pilot letters produce a part release or substantive
    response within 30 days
  - Abandon if German counsel finds the drafting model requires a licensed lawyer
  - Abandon if month-3 retention on paying pilots falls below 60%
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Build the free "Is your part refusal legal?" checker for Germany only. One jurisdiction, one language, correct citations. Ship it before 31 July so it exists when the deadline coverage peaks.
- **Day 3–4:** Scrape 400 German independent repair shops from public repair directories. Cold email in German with the checker link and one question: "how many times in the last 60 days did a manufacturer refuse you a part or a schematic?" I want the count, not the sentiment.
- **Day 5:** Recruit 5 shops to let me send a real demand letter on their behalf in August.
- **Decision:** Go if ≥40 shops respond and the median reported refusal count is ≥2 per 60 days, **and** ≥5 shops agree to the letter pilot. Below either threshold, the pain is normalized rather than urgent — and normalized pain doesn't convert at €59/mo.

The August letter results are the real gate. Interviews tell me whether the pain exists; only a sent letter tells me whether the law has teeth. If manufacturers ignore twenty properly-cited letters, this business doesn't exist, and I'd rather know that in September than after building for six months.
