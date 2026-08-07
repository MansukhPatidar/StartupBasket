---
title: "FenceWorks — rate-fence launcher for independent hotels"
slug: hotel-rate-fence-launcher
date: 2026-08-07
category: Hospitality / EU — Independent Hotels and Guesthouses (12–80 Rooms) Free to Undercut Booking.com Since the DMA but Still Publishing Parity Rates
complexity: Low
score: 74
verdict: GO
confidence: Medium
oneLiner: "Turns the DMA's undercut right into a live member rate your OTA ranking never sees."
tags:
  vertical: Hospitality
  model: SaaS
  geography: EU
  secondary: [SMB, AI-agent, Multilingual, Solo-builder, Revenue-management]
axes:
  problem: 15
  demand: 12
  build: 13
  distribution: 12
  revenue: 11
  time: 8
  defensibility: 3
founderFit: [technical-heavy, content-heavy]
featured: false
---

# FenceWorks

## 1. One-liner

Turns the DMA's undercut right into a live member rate your OTA ranking never sees.

## 2. Trend signal — why now?

Three things happened, and the third one is the reason this is a business rather than a blog post.

**One — the legal lock came off, EU-wide.** The ECJ ruled on 19 September 2024 that Booking.com's parity clauses are not ancillary restraints. Booking.com waived parity for all EEA inventory on **2 December 2024** under DMA Article 5(3), and confirmed it applied to both new and existing contracts. Hotels in 30 European countries are now contractually free to price lower on their own channels. Booking.com is also barred from raising commission or de-listing a hotel for doing it.

**Two — almost nobody moved.** This is the whole opportunity. Hospitality Net's editorial brief put it in the headline: *"the DMA already let hotels undercut OTAs and most don't know it,"* noting hotels aren't using it "either because they don't know it applies to them or because they're concerned about Booking's algorithmic response." Hospitality.today's post-mortem on the parity bans found the same thing from the data side: when parity came off, *"the prices that shifted were the ones in the channels nobody watches — the phone call, the email, the booking made in person at the desk. On the open web, where every rate sits in plain view, the bans barely registered."* France ran this experiment a decade early with the 2015 Macron Law: online visible prices fell 1–2% (statistically indistinguishable from zero), **offline prices fell ~5%**. The right existed; the behaviour didn't follow.

**Three — the cost of not moving got worse.** OTAs now take **63.4% of independent hotel bookings**, up from 61% a year earlier, approaching 80% in some markets, at 15–25% commission for independents. And the real number is uglier than the headline commission: a Genius 2 guest costs a hotel **€27.75 of effective margin on a €100 published rate** — a 27.75% acquisition cost on what looks like a 15% commission. Most hoteliers, per the same source, never run that calculation.

The mechanism that keeps hotels frozen is real but narrow, and that's exactly what makes it solvable. Booking.com's ranking doesn't read your website price directly — its own DMA compliance workshop confirmed ranking "does not take prices outside of the Booking.com platform into account." What actually happens is second-order: a guest who sees your cheaper direct rate books direct, your Booking listing converts worse, and *conversion* is a ranking input. So a **publicly visible** undercut quietly costs you rank; a **fenced** one doesn't, because the comparison never happens on a public page. Booking's own "Sponsored Benefit" programme detects and matches the lowest competing *online visible* price — which tells you precisely where the tripwire sits.

Every OTA contract explicitly carves out member-only and closed-user-group rates. Narrow parity — what survives in Booking.com and Expedia contracts in 2026 — governs published rates only. So the legal, low-risk move has been sitting there the whole time: fence the discount. RateGain, 360VUES and Prostay all independently arrive at the same three tactics — closed user groups, direct-only inclusions, selective channel discounting — and 360VUES calls member rates *"the single most underused fence in the boutique segment."*

Provenance:
  - Signal 1 (demand): Independent hotels at 63.4% OTA dependence, up from 61%, at 15–25% commission; Genius 2 guest costs €27.75 effective margin per €100 rate, a calculation "most hoteliers never actually run" — https://www.kimisuite.com/en/blog/booking-com-commissions-explained + https://www.mylighthouse.com/resources/blog/hotel-rate-parity-issues — Aug 2026
  - Signal 2 (feasibility): DMA Art. 5(3) parity waiver live for all EEA inventory since 2 Dec 2024; Booking.com confirms ranking ignores off-platform prices; every major OTA contract carves out member-only rates, making fenced discounts legal today with no contract renegotiation — https://www.prostay.com/blog/hotel-rate-parity-eu-2026/ + https://legalblogs.wolterskluwer.com/competition-blog/bookingcoms-dma-compliance-workshop-the-power-of-no-win-lose-lose/ — Aug 2026
  - Signal 3 (economic): Hospitality Net reports most hotels don't know the right applies to them; French Macron Law natural experiment shows online prices moved 1–2% but offline ~5%; Phocuswright 2025 forecast puts the addressable shift at 6–14 pts of direct-booking share over 24 months for hotels acting within the first 12 — https://www.hospitalitynet.org/editorial/4133668/ + https://www.prostay.com/blog/hotel-rate-parity-eu-2026/ — Aug 2026
  Category: Regulatory arbitrage

## 3. The opportunity

A right that nobody exercises is an arbitrage, and this one has an unusually clean shape: the beneficiaries are 100,000+ small European hotels, the right is already granted, no application or approval is needed, and the reason for inaction is **fear plus ignorance** rather than cost or difficulty.

The incumbents are not the enemy here — they're the reason the gap persists. Rate-parity monitoring (Lighthouse, RateGain, OTA Insight) runs **$300–800/month and is built for large chains**. Those tools answer "is someone undercutting *me*?" — a defensive question for a revenue manager who already exists. The independent 30-room property in Porto has no revenue manager, can't justify $500/month, and is asking a completely different question: *"am I allowed to undercut, by how much, on which channel, and will Booking punish me?"* Nobody sells an answer to that.

Meanwhile the PMS/booking-engine layer (Cloudbeds, Mews, SiteMinder, Little Hotelier) technically *supports* member rates — 360VUES puts setup at roughly two hours — but supports is not the same as sells. A toggle buried in a rate-plan config screen is not a product; the hotelier doesn't know the toggle exists, doesn't know what discount is safe, and has nobody to blame if Booking retaliates. The vendors won't push it either: SiteMinder and Cloudbeds have deep channel-manager relationships with the very OTAs being undercut, which is a structural conflict that keeps them quiet. That silence is the opening.

The 10× is not technology. It's **converting a legal right into a configured, monitored, defensible revenue action in a week**, for a customer who would otherwise never take it.

## 4. Target market

- **Primary customer:** Owner-operators and general managers of independent hotels, guesthouses, aparthotels and B&Bs, **12–80 rooms**, in EEA markets — starting Portugal, Spain, Italy and Greece where OTA dependence runs highest and independent share is largest. €400K–€4M annual room revenue. No dedicated revenue manager; the owner or a front-office manager sets rates, often in the PMS by hand.
- **Why they buy:** They watch 18–25% of every booking leave for Booking.com, they've been told for a decade they legally can't fight back, and they have a vague sense that the rules changed but no idea what's safe. The pain has a date on it — it recurs every single reservation. What they want is not a dashboard; it's permission plus a number.
- **Rough TAM reasoning:** Independent properties hold **51.45% of the hospitality PMS market**. Europe has well over 100,000 independent hotels in the 10–80 room band before counting guesthouses and aparthotels. I need **~700 of them at €149/month** to clear €1.25M ARR. That is well under 1% of the addressable base in four countries — the wedge does not require category dominance.
- **Why now for them:** The parity waiver has been live since December 2024 and adoption is near zero, which means the first-mover window inside each local competitive set is still open. Phocuswright's forecast — 6–14 points of direct-booking share over 24 months **for hotels that act within the first 12** — is a decaying opportunity, and that decay is the sales urgency.

## 5. Product sketch (MVP)

- **Fence Readiness Report** — connect the booking engine (or upload a rate export), and the product returns which of the seven legal fence types the property can run today, which its engine already supports, and what each is worth in recovered margin.
- **The safe-discount number** — computes the specific member-rate discount that beats the OTA's net-of-commission take without crossing into publicly visible territory, using the property's actual commission tier, Genius participation and cancellation rate. This is the single answer the customer is buying.
- **True acquisition cost calculator** — the €27.75-on-€100 arithmetic, run on the hotel's own numbers, broken out by channel and Genius tier. Most owners have never seen this and it is the thing that makes them act.
- **Leak watch** — daily check that the fenced rate has not become publicly visible (via a metasearch surface, a cached page, or a wholesaler republishing it), which is the one failure mode that converts a safe fence into a ranking problem.
- **Ranking sentinel** — tracks the property's Booking.com search position for its own core queries before and after the fence goes live, so the owner can see whether the feared retaliation actually happened. Usually it didn't, and proving that is what unlocks the next discount step.
- **Member-capture kit** — the email signup block, the rate-plan copy, and the confirmation-email winback sequence, localised in PT/ES/IT/EL/EN, so the closed user group actually fills up instead of sitting empty.
- **60-day guided rollout** — the staged plan (waiver documentation → fence activation at 5–10% → member campaign → tune on redemption data) with checkpoints, rather than a settings screen and good luck.

## 6. AI angle — what's load-bearing

Two places, both doing real work.

**Contract and rate-plan reading.** Every property has a stack of OTA contracts, addenda, DMA waiver notices and PMS rate-plan exports in four languages, and the answer to "which fences am I allowed to run" is buried across them. Narrow versus wide parity is the whole ballgame — 360VUES: *"almost every tactic is legal under narrow parity and illegal under wide"* — and determining which one binds this property requires reading the actual contract language, not a lookup table. That's document extraction across mixed-quality PDFs in Portuguese, Spanish, Italian and Greek, which is exactly what current models are good at and what made this unbuildable at this price point three years ago.

**Leak detection.** Deciding whether a fenced rate has surfaced publicly means comparing rendered pages across metasearch and OTA surfaces where the same room appears under different names, board types, cancellation terms and tax treatments. Matching "Double Room, breakfast included, non-ref, city tax excl." on one surface to its equivalent on another is fuzzy semantic matching, not string comparison.

Strip the AI out and this collapses into a consulting engagement — which is precisely what it costs today and precisely why a 30-room hotel doesn't buy it.

## 7. Localization angle

Localization is the wedge, not a coat of paint. The binding rule differs by country: France, Germany, Italy, Austria and Belgium banned wide parity years before the DMA (Macron Law 2015, Bundeskartellamt 2015/2021, Italy's 2017 competition law); Switzerland followed in December 2022; the DMA layered EEA-wide coverage on top from December 2024. A hotel in Lisbon and a hotel in Vienna have genuinely different answers to "what can I run," and a generic global tool has to hedge into uselessness.

Pricing localizes too. €149/month is a rounding error against 20% commission on €800K of room revenue, but a US-priced $500/month tool reads as absurd to a Greek guesthouse. And distribution runs through country-level hotel associations and regional tourism boards rather than SaaS marketplaces — a channel that is slow for a global player and fast for someone who shows up to one association's annual meeting with a country-specific answer.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** €99/month (12–30 rooms), €149/month (31–60), €249/month (61–80 or multi-property). Annual prepay at 2 months free — hotels budget yearly and prefer it.
- **ACV:** ~€1,790 blended.
- **Rough math to $1M ARR:** 700 properties × €149 × 12 ≈ €1.25M. Across Portugal, Spain, Italy and Greece that's a few hundred properties per country — reachable through association channels without a sales team.
- **Rough math to $5M ARR:** ~2,800 properties, which needs the full EEA footprint plus the obvious expansion: a percentage-of-recovered-margin tier for properties above 60 rooms, and a small-group/management-company plan. Realistically a 3–4 year path, not 18 months, and I'd rather be honest about that than pretend otherwise.
- **Expansion path:** Land on the fence-readiness answer, expand into leak watch and ranking sentinel as ongoing monitoring, then into direct-booking conversion tooling. The natural upsell is the member database itself — once the closed user group has a few thousand guests in it, campaign tooling against that list is worth more than the original subscription.

## 9. Go-to-market wedge — first 100 customers

- **The free readiness report as the entire top of funnel.** Booking.com and Expedia property pages are public. Scrape 3,000 independent 12–80 room properties across Lisbon, Porto, Barcelona, Seville, Rome, Naples and Athens; for each, generate a one-page PDF showing its estimated annual commission spend, its true Genius-inclusive acquisition cost, and the specific fence it is legally entitled to run today but isn't. Email it cold, in the local language, with no signup wall. This is a personalized artifact containing a number the owner has never seen about their own business — expect 6–10% reply, and the reply is "is this real?", which is the correct opening.
- **Hotel associations as the credibility bridge.** AHRESP (Portugal), CEHAT (Spain), Federalberghi (Italy) and the Hellenic Hoteliers Federation all run member communications and regional events, and all have an institutional interest in members paying less OTA commission. A co-branded webinar — "what the DMA actually lets you do, and what it doesn't" — puts the pitch in front of a few hundred qualified owners at once with borrowed trust. Two of these convert more than a month of cold email.
- **Ride the fear, don't fight it.** The blocker is "will Booking punish me?" So publish the answer: run the fence on 20 design-partner properties, track their Booking.com rank weekly, and publish the before/after as a public dataset. That study is the marketing asset, the sales objection-handler and the SEO play in one, and no incumbent will publish it because Cloudbeds and SiteMinder can't be seen helping hotels undercut their channel partners.
- **Boutique PMS consultants as referrers.** The independent-hotel PMS implementation world runs on a few hundred freelance consultants across southern Europe. They already have the trust and the login. 20% recurring referral, and they get to bring a client a revenue win rather than another invoice.
- **Design partners first.** 10 properties free for 90 days in exchange for rate data and a case study. These become the proof set for everything above.

## 10. Build complexity — justification

**Low.** Standard web app, document extraction on off-the-shelf models, scheduled scraping of public OTA and metasearch pages, and integrations with 3–4 booking engines that mostly have documented APIs. The genuinely hard parts are domain knowledge (which fence is legal in which jurisdiction under which contract) and rate-matching fuzziness — both are research and prompt work, not infrastructure. A technical solo founder with a hospitality advisor ships a credible v1 in **8–10 weeks**; the first version can even run the readiness report from a manual rate export before any PMS integration exists.

The thing that will actually consume time is not code. It's building the per-country legal matrix carefully enough to stand behind, because the product's core promise is "this is safe."

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | The product helps hotels exercise a right the DMA explicitly grants and OTA contracts explicitly carve out. Scraping is limited to public rate pages. |
| Ethical — no harm / dark patterns | ✅ | Shifts margin from a gatekeeper platform to small operators. Guests get lower prices, not higher ones. |
| Market exists (evidence above) | ✅ | 63.4% OTA dependence, 15–25% commissions, incumbent monitoring tools at $300–800/mo prove willingness to pay in the adjacent category. |
| 1–5 person team can build this | ✅ | Solo technical founder plus a domain advisor. |
| Launchable with <$50K / ₹40L | ✅ | Well under €20K: inference, scraping infra, and the legal review of the country matrix. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 15/20 | Commission bleed is felt on every booking and the money is large and recurring. Docked because it's chronic rather than acute — there's no deadline, no fine, no inspector. Hotels have tolerated this for fifteen years, which is precisely the risk: a pain you've lived with is a pain you can keep living with. |
| Demand evidence | 15 | 12/15 | Strong indirect evidence: adjacent tools sustain $300–800/mo, OTA dependence is rising and documented, French natural-experiment data shows real behaviour change when fences are used. Docked because the direct evidence — hotels asking for *this specific product* — is thin. I found industry analysts saying hotels don't know, not hoteliers saying "I want this." |
| Build feasibility | 15 | 13/15 | Off-the-shelf throughout; 8–10 weeks solo. The country-by-country legal matrix is the only slow part. |
| Distribution clarity | 15 | 12/15 | The free readiness report is a genuinely strong cold-outreach artifact and associations are a real, named channel. Docked because hotel owners are notoriously hard to reach by email and the association route moves on their calendar, not yours. |
| Revenue mechanics | 15 | 11/15 | €149/mo against €100K+ of annual commission is trivially justified and 700 customers to €1.25M is credible. Docked because SMB hotel churn is real, the value is front-loaded (once the fence is configured, what am I paying for?), and the monitoring layer has to genuinely earn the renewal. |
| Time to first revenue | 10 | 8/10 | Readiness reports can be sold before the platform is finished. Paying customers within 6–8 weeks of first outreach is realistic; hotel purchase decisions are fast when the owner is the buyer. |
| Defensibility | 10 | 3/10 | This is the weak axis and I won't dress it up. The legal insight is public. The fence types are documented in blog posts. Any PMS vendor could ship this as a feature — the only reason they haven't is channel conflict, and that's a reason that expires. What accrues is the ranking-impact dataset and the country legal matrix, plus association relationships. Execution-and-focus moat, six-month head start, no more. |
| **Total** | **100** | **74/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `content-heavy`

The content half is not optional. The product sells against fear, and fear is dissolved by published evidence — the ranking study, the country matrix, the localized explainers. A founder who won't write is buying a much harder sales problem.

### Key assumptions to validate (3–5)

1. **Assumption:** Independent hoteliers don't know the DMA waiver applies to them, and learning it triggers action rather than a shrug. **How to test:** 40 structured calls with 12–80 room owners across PT/ES/IT/GR. Ask what they believe they're allowed to do before mentioning the DMA. If >60% already know and have chosen not to act, the entire premise inverts and the product becomes a fear-removal tool rather than an information tool.
2. **Assumption:** Fenced member rates do not measurably degrade Booking.com ranking. **How to test:** This is the ranking study — 20 design-partner properties, weekly position tracking on core queries, 90 days. It's both validation and the primary marketing asset, which is why it's worth doing properly.
3. **Assumption:** €149/month clears the bar for a 40-room independent. **How to test:** Price the readiness report at €199 one-time to 50 cold prospects before building anything. Anyone who pays €199 for a PDF will pay €149/month for the ongoing version; if nobody pays €199, the subscription thesis is dead and I've spent two weeks finding out.
4. **Assumption:** Booking engines expose enough rate-plan access to configure and monitor fences without heroics. **How to test:** Build against Cloudbeds and Mews first — both have documented APIs — and confirm before committing to SiteMinder and the long tail.
5. **Assumption:** Retention survives past the configuration moment. **How to test:** Watch design-partner engagement in months 2–3. If leak watch and ranking sentinel go unopened, the product is a one-time service wearing a subscription costume and pricing must change to match.

### Risk flags

1. **Platform dependency (severe).** Booking.com could change ranking mechanics, tighten narrow-parity language at contract renewal, or expand Sponsored Benefit to detect fenced rates. The entire product sits downstream of one gatekeeper's policy choices, and that gatekeeper is actively hostile to the outcome.
2. **Defensibility (structural).** Cloudbeds, Mews or SiteMinder can ship this as a bundled feature the moment channel conflict stops mattering to them. The realistic outcome is a profitable niche business or an acquisition, not a durable independent category.
3. **Legal grey zone.** Booking.com's ranking response to undercutting sits in what one analysis called a zone "permissible in form, potentially prohibited in effect" — no regulator has yet tested a ranking signal the way it tested a contract clause. A ruling either way materially changes the product: a strong pro-hotel ruling makes public undercutting safe and makes fencing less necessary.
4. **Chronic-pain inertia.** Hotels have absorbed OTA commission for fifteen years. There is no fine, no deadline, no inspector — nothing that forces action this quarter. This is the most likely quiet failure mode: everyone agrees it's a good idea and nobody buys.
5. **Fragmented buyer.** Four countries, four languages, four association relationships, and a buyer who is often also the person checking guests in at 3pm. Sales cycles are short but reach is genuinely hard.

## 14. Structured verdict

```
Score:                  74/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical solo founder who writes well, with a hospitality
                        revenue-management advisor and one southern-European market
                        as the beachhead. Southern-European language ability is a
                        material advantage, not a nice-to-have.
Time to revenue:        6–8 weeks (paid readiness reports precede the platform)
Capital to launch:      €15–20K ($17–23K)
Top 3 assumptions to validate first:
  1. Hoteliers don't know the right exists — 40 structured owner calls, asking what
     they believe they're allowed to do before mentioning the DMA
  2. Fenced rates don't cost Booking.com ranking — 20-property, 90-day tracked study
  3. €149/mo clears the bar — sell 50 readiness reports at €199 one-time first
Kill criteria:
  - Abandon if >60% of 40 interviewed owners already know about the DMA waiver and
    have deliberately chosen not to act — the product is then fighting inertia, not
    ignorance, and that is a much worse business
  - Abandon if the 20-property study shows a statistically real ranking penalty from
    fenced rates — the core promise is "this is safe," and if it isn't, there's no
    product
  - Abandon if fewer than 5 of 50 cold prospects pay €199 for the readiness report
  - Abandon if a major PMS vendor (Cloudbeds, Mews, SiteMinder) ships native fence
    tooling with parity-legal guidance before month 9
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Build 30 readiness reports by hand — no product, just research — for real named properties in Lisbon and Porto. Pull their public Booking.com rates, estimate commission tier and Genius participation, compute true acquisition cost, and identify the specific fence each could legally run. This forces me to discover whether the analysis is actually doable from public data before I automate anything.
- **Day 3–4:** Send all 30 in Portuguese, no signup wall, with one question: *"Did you know you're allowed to do this?"* Simultaneously book 15 calls with owners via a hospitality-consultant intro.
- **Day 5:** Offer the deep version at €199 to everyone who replies.

**Go/no-go:** ≥5 of 30 reply, **and** ≥8 of 15 interviewed owners say they did not know the DMA waiver applied to them, **and** ≥3 people pay €199. Fewer than three paid means the readiness report is interesting rather than valuable, and I stop.

The falsifiable part is deliberately assumption #1: if hoteliers already know and have chosen not to act, this is a fear problem, not an information problem, and a €149/month SaaS is the wrong instrument for it. I'd rather find that out in five days than five months.
