---
title: "BrandKey — parts-access registrar for EU repair shops"
slug: eu-repairer-parts-access
date: 2026-08-04
category: TradeTech / EU
complexity: Low
score: 72
verdict: GO
confidence: Medium
oneLiner: "Keeps a repair shop registered with every brand it services, so the 15-day parts clock actually starts."
tags:
  vertical: TradeTech
  model: SaaS
  geography: EU
  secondary: [Compliance-driven, SMB, Solo-builder, Multilingual, AI-agent]
axes:
  problem: 15
  demand: 11
  build: 13
  distribution: 12
  revenue: 11
  time: 8
  defensibility: 2
founderFit: [technical-heavy, content-heavy]
featured: false
---

# BrandKey

## 1. One-liner

Keeps a repair shop registered with every brand it services, so the 15-day parts clock actually starts.

## 2. Trend signal — why now?

Four days ago — **31 July 2026** — the EU Right to Repair Directive (EU) 2024/1799 became applicable across all Member States. Manufacturers must now repair in-scope products on request, publish indicative repair prices on a free-access website, supply spare parts at reasonable prices, and stop using contractual clauses, hardware, or software locks to shut independent repairers out. In-scope categories include washing machines, dishwashers, refrigerators, televisions, smartphones, tablets, vacuum cleaners, and servers.

That is the headline. Here is the part almost nobody has read carefully, and it is the whole business:

Under the Ecodesign spare-parts regime that sits underneath the Directive, manufacturers must deliver ordered spare parts **within 15 working days** — but that obligation **does not apply to repairers who have not registered** with the manufacturer, importer, or authorised representative according to that company's own published procedure. The manufacturer's website has to set out a registration process. It does not have to make it pleasant, uniform, or in your language.

So the most valuable new right in European trade regulation is switched on by an administrative act that a micro-business must perform **separately, per brand, per legal entity, in whatever language and portal that brand chose** — and then keep alive.

Meanwhile the EU's own central repair platform, the thing meant to organise this, **is not expected to be operational until 2027**. Transposition into national law is landing unevenly across Member States. There is a live gap, and it is open right now.

Add the pre-existing evidence that access is deliberately hard: a US PIRG investigation of appliance service information found **86% of manufacturers surveyed did not provide full repair instructions**, and **89.1% of technicians reported trouble accessing service manuals**. Different jurisdiction, same manufacturer behaviour — brands structure authorisation programmes to keep repairs inside their own service networks.

The market this lands on is enormous and structurally tiny: Eurostat counts roughly **198,000 enterprises** in the EU computer/personal/household goods repair sector (NACE Division 95) employing ~340,000 people, of which **98% are micro-enterprises with fewer than 10 employees** — the highest micro-enterprise share of any industry in the EU non-financial business economy.

A 3-person shop in Lyon does not have a compliance officer. It just lost a job because a control board did not show up.

```
Provenance:
  - Signal 1 (demand): EU Right to Repair Directive (EU) 2024/1799 applicable from 31 July 2026; manufacturers must supply parts and cannot obstruct independent repairers — https://commission.europa.eu/news-and-media/news/right-repair-new-consumer-rights-easy-and-attractive-repairs-2026-07-31_en — 2026-07-31
  - Signal 2 (feasibility): Ecodesign spare-parts rules require delivery within 15 working days, but explicitly exempt repairers who have not registered with the manufacturer per its own published procedure; manufacturers must publish that process on their website — https://www.legislation.gov.uk/ukdsi/2021/9780348222920/schedule/9/paragraph/18?view=plain — 2026-08-04
  - Signal 3 (economic): ~198,000 EU repair-sector enterprises, ~340,000 employees, 98% micro-enterprises; EU appliance repair market growing ~3.9% CAGR 2023–2028 driven by eco-design regulation — https://ec.europa.eu/eurostat/statistics-explained/index.php?title=Businesses_in_the_computer_and_personal_and_household_goods_repair_sector — 2026-08-04
  - Signal 4 (gap): EU central repair platform not operational until 2027; national transposition uneven — https://eutoday.net/eu-right-to-repair-deadline-manufacturers/ — 2026-08-04
  - Signal 5 (incumbent blind spot): every compliance tool in this space (Claimlane, RepairScore, ComplyMarket, euverify) sells to brands — the obligated party — not to repairers, the rights-holders — 2026-08-04
  Category: Regulatory arbitrage
```

## 3. The opportunity

A new law just handed 198,000 micro-businesses a valuable right, and made that right **conditional on paperwork they don't know they have to do**.

Every vendor that mobilised around 31 July 2026 pointed the same direction: at manufacturers. Claimlane, RepairScore, ComplyMarket, euverify — all of them sell "get compliant" software to brands. That is rational; brands have budget and legal exposure. But it means the entire tooling market is built for the party with the *obligation* and nothing exists for the party with the *right*.

That asymmetry is the opportunity. The obligated side has lawyers. The rights-holding side has a van.

What a repairer actually faces:

- **Registration is per-brand and fragmented.** Bosch, Whirlpool, Samsung, LG, Electrolux, Beko, Haier/Candy, Miele — each runs its own portal, its own credential requirements, its own renewal cadence, its own language. A generalist shop services 10–20 brands. Nobody has done all 20.
- **The clock only runs if you're registered.** An unregistered shop ordering a part has no 15-working-day entitlement at all. It waits however long the brand feels like. The shop usually does not know this is why.
- **Registrations lapse silently.** Credentials expire, portals migrate, terms get re-accepted. You find out when a part doesn't come and a customer is shouting.
- **Nobody tracks the clock even when it does apply.** Orders live in email threads and supplier portals. When a brand blows the window, no one can say by how much, or point at a record.

The 10× is not AI cleverness. It is that a shop goes from "I have no idea which brands I'm properly set up with" to a single screen showing every brand it services, registration status on each, what's expiring, and which live parts orders are past their legal window — in a language the owner reads.

**Where I'm honest about the limits:** a repairer cannot personally sue a manufacturer into delivering a part. Enforcement runs through national market-surveillance authorities, and that is slow and unglamorous. So this is not sold as "we'll win your legal fight." It is sold as **"get registered, stay registered, get your parts on time, and have a record when you don't."** The commercial benefit — parts arriving, jobs closing, fewer second truck rolls — is what gets the €59 out of the wallet. The evidence trail is the free upside, not the pitch.

## 4. Target market

- **Primary customer:** Owner-operator of an independent white-goods / consumer-electronics repair business in the EU. 1–10 employees, servicing 8–25 brands, 15–60 jobs a week. Concentrate on Germany, France, Netherlands, Belgium, Poland, Spain, Italy — high appliance density, active trade associations, strong transposition pressure.
- **Why they buy:** Their money is lost on the second visit. A part that does not arrive is a re-scheduled job, an idle technician hour, an angry customer, and often a job that converts to a replacement sale for someone else. Industry guidance treats cutting second truck rolls from ~40% to under 15% as a core profitability lever. Anything that makes parts arrive on time is directly a margin lever, not a compliance chore.
- **Rough TAM reasoning:** ~198,000 EU enterprises in NACE 95, 98% micro. Appliance/electronics repair is a large subset — call the realistic serviceable set 60,000–90,000 shops that service multiple major brands. At €59/mo, 1% penetration of 70,000 = 700 shops = ~€495K ARR. 3% = ~€1.5M ARR. That is a real bootstrapped business without needing a heroic share.
- **Why now for them:** The right did not exist before 31 July 2026. Shops are hearing about the Directive from trade press and customers right now and have no idea what to do about it operationally. This is the window where "what does this mean for my shop" is an active question rather than settled background.

## 5. Product sketch (MVP)

- **Brand registration tracker.** Pick the brands you service. For each, BrandKey shows the manufacturer's published professional-repairer registration route, what credentials it demands, your current status (not started / submitted / active / expiring / lapsed), and the renewal date.
- **Guided registration packs.** For each brand, a pre-filled application pack built from your shop profile — company registration number, VAT ID, technician certifications, insurance — assembled into whatever that brand's portal asks for, with translated field-by-field instructions.
- **Parts clock.** Log a parts order against a brand and model. BrandKey knows whether you're registered with that brand (so whether the 15-working-day entitlement applies), counts working days against the correct national calendar, and flags overdue orders.
- **Overdue pack.** When a brand blows the window, one click produces a dated record: order reference, date placed, registration status at time of order, working days elapsed, correspondence — formatted for the brand's escalation route or a national market-surveillance complaint.
- **Repair information locator.** Per brand and model, where the service documentation and indicative repair pricing actually live, since the Directive now requires brands to publish it on a free-access site. Saves the hunt that 89.1% of technicians report struggling with.
- **Lapse alerts.** Email/WhatsApp warning before a registration expires or a brand changes its process, so you find out on a Tuesday rather than mid-job.
- **Multilingual throughout.** Shop owner reads Polish; brand portal is in German. The product bridges that gap.

## 6. AI angle — what's load-bearing

Remove the AI and this becomes a spreadsheet somebody has to maintain by hand for 20 brands across 27 Member States. It would rot in a month. That is exactly why it doesn't exist yet.

AI is doing three jobs that are otherwise unaffordable at this price point:

1. **Watching and parsing manufacturer portals.** Every brand publishes its repairer-registration process somewhere on its own site, in its own words, in its own language, and moves it without notice. Continuously reading those pages, extracting the actual requirements, and detecting when a process changes is the core data operation. Doing it manually for 20 brands × multiple languages is a full-time job; doing it with language models is a background task.
2. **Translating and mapping applications.** Taking one shop profile and rendering it into 20 different brands' field structures and languages, then explaining each requirement to an owner who doesn't read that language.
3. **Turning a messy order history into a clean dated record.** Email threads, portal screenshots, and supplier confirmations into a structured, defensible timeline.

The AI is load-bearing on the *maintenance* of the dataset, which is the whole product. The UI over it is deliberately dumb.

## 7. Localization angle

This is a localization play more than a compliance play, and that is its best feature.

- **Language is the moat's first brick.** The customer is a micro-business owner in Poland or Spain; the counterparty is a German or Korean manufacturer's portal. The whole product is a translation layer over an administrative process.
- **Working-day calendars are national.** "15 working days" in Spain is not 15 working days in Germany — public holidays differ by country and often by region. Getting the clock right per Member State is unglamorous, specific, and exactly the kind of detail a generic global tool will get wrong.
- **Transposition is uneven.** Each Member State transposed the Directive into its own national law with its own enforcement body and complaint route. The escalation path from Lyon is not the path from Warsaw.
- **Pricing must be local.** €59/mo works in Germany and the Netherlands. Poland, Portugal, and Romania need a €29 tier. A flat global price kills half the addressable market.
- **Distribution is local.** National repair trade associations and country-specific technician forums, not a single global channel.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:**
  - **Solo** — €29/mo. Up to 8 brands, 1 user. Aimed at one-van operators and lower-income Member States.
  - **Shop** — €59/mo. Unlimited brands, 5 users, parts clock, overdue packs. The core plan.
  - **Multi-site** — €149/mo. Multiple locations, team roles, exportable records.
- **ACV:** ~€700 blended (mix skewed to the €59 tier).
- **Path to €1M ARR:** 1,200 shops at a €59 blended average × 12 = ~€850K; add ~150 multi-site at €149 = ~€270K. Total ~€1.1M. That is roughly **1.7% of a 70,000-shop serviceable market**. Achievable without a miracle.
- **Path to €5M ARR:** Needs ~6,000 paying shops, which means going past the early-adopter tier into the majority — realistically requires (a) national trade-association bundling deals, and (b) expanding scope beyond white goods into e-bikes, power tools, and IT hardware as ESPR product categories phase in. Plausible, not assured. I would not underwrite the €5M case today.
- **Expansion path:** more brands per shop → parts-order volume tiers → multi-site → adjacent categories as new Ecodesign product rules land. Every new EU product category with a spare-parts obligation is free market expansion delivered by the legislature.
- **Margin:** near-pure software. Main variable cost is the model spend on portal monitoring, which is shared across all customers rather than per-seat — it gets cheaper per customer as you grow.

## 9. Go-to-market wedge — first 100 customers

The list exists and is public. That is the reason this passes.

1. **National trade associations, direct.** Every major EU market has an appliance-repair or electrical-servicing trade body with a member roster and a newsletter. They exist to help members navigate exactly this kind of regulation, and right now they have members asking about 31 July and no operational answer to give. Offer the association a free co-branded "which brands are you actually registered with?" audit for its membership. Two associations saying yes is 100 customers. This is the primary channel and it is a phone-call sale, not a marketing campaign.
2. **The brand-coverage audit as the hook.** Scrape public business registries and Google Maps for appliance repair businesses in 6 target countries — this is a well-defined, few-thousand-row list per country. Send each a one-page report: "You advertise service for these 11 brands. Here is the registration route for each, and here is what the 15-working-day rule gets you on the ones you complete." It is genuinely useful before they pay anything, it is personalised, and it demonstrates the product's core value in the email body. Expect 3–6% to book a call at this level of specificity.
3. **Trade forums where these technicians already argue.** UK Whitegoods forums, Appliantology, Parts Dr forum, and the national-language equivalents (German and Dutch appliance-tech forums are active). These are small, high-signal communities of exactly the buyer. Not spam — show up with the actual per-brand registration research, which nobody has compiled, and let it travel. Note the UK has *not* adopted an EU-equivalent Directive, so UK forums are for reach and credibility, not conversion — the paying market is EU-27.
4. **Parts distributors as a referral channel.** Regional spare-parts distributors sit between the brands and the shops and watch these orders fail daily. They have the customer list and an interest in orders going smoothly. Revenue-share referral, no integration needed for v1.
5. **The regulation calendar as content.** Each Member State's transposition and each brand's process change is a dated, specific, search-worthy event. This compounds slowly and is a support channel, not the wedge.

## 10. Build complexity — justification

**Low.** Standard web app, standard auth, a document generator, and a scheduled scraping-and-extraction pipeline over a few hundred public manufacturer pages. No hardware, no integrations required for v1 (parts orders are entered or forwarded by email, not API-synced), no regulated data.

The real work is not engineering — it is the initial hand-built dataset of registration routes for the top ~25 brands across the top ~7 Member States, which is research grind before it is automation. Budget 3–4 weeks of a founder reading manufacturer portals to seed it, then AI maintains it. A technical solo founder ships a credible v1 in **7–9 weeks**.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Helping businesses complete manufacturers' own published registration processes and track their own orders. No scraping of gated content, no circumvention. |
| Ethical — no harm / dark patterns | ✅ | Helps micro-businesses exercise rights the EU explicitly granted them. Straightforwardly on the right side. |
| Market exists (evidence above) | ✅ | ~198K EU repair enterprises; shops already pay $30–200+/mo for field-service software. |
| 1–5 person team can build this | ✅ | Solo technical founder, 7–9 weeks to v1. |
| Launchable with <$50K / ₹40L | ✅ | Realistically €8–15K: hosting, model spend, translation review, association outreach travel. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 15/20 | Real and recurring — a missing part costs a truck roll and sometimes the job. But it is felt as diffuse operational friction, not a dated deadline with a penalty attached. Nobody fines the repairer. That caps intensity below the compliance-panic tier. |
| Demand evidence | 15 | 11/15 | Strong structural evidence: the Directive is real and dated, the registration carve-out is in the regulation text, market size is Eurostat-verified, and shops demonstrably pay for software. What's missing is direct verbatim evidence of repairers naming *registration* as their bottleneck — I found evidence of parts-delay and manual-access pain (89.1% struggle to access service manuals), which is adjacent but not identical. Docking honestly for that gap. |
| Build feasibility | 15 | 13/15 | Off-the-shelf stack, 7–9 weeks solo. Held back from 15 only by the manual dataset seeding, which is real calendar time before automation takes over. |
| Distribution clarity | 15 | 12/15 | Named associations, a scrapeable public shop list, named forums, and a hook that delivers value before payment. Not 15 because association partnerships are relationship sales with variable timelines, and the channel is fragmented across 7 countries by design. |
| Revenue mechanics | 15 | 11/15 | Pricing sits comfortably under existing software spend, and €1M needs only ~1.7% penetration. Docked because micro-enterprises churn hard, €29 tiers strain unit economics against multilingual support costs, and the €5M case depends on association bundling that isn't proven. |
| Time to first revenue | 10 | 8/10 | The audit hook can pre-sell before the product is finished; a design partner shop can be paying inside 6–8 weeks of launch. Not 9–10 because association-mediated deals add weeks. |
| Defensibility | 10 | 2/10 | **The weak axis, and I won't dress it up.** The dataset is compiled from public pages; a competitor with the same idea rebuilds it in a quarter. There's mild workflow lock-in once registrations and order history live in the tool, and per-country calendar/escalation detail is tedious to replicate — but that's a head start, not a moat. Wins go to whoever gets the associations first. |
| **Total** | **100** | **72/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `content-heavy`

Technical for the monitoring pipeline; content-heavy because the per-brand, per-country registration research *is* the product and also the marketing. A founder who can read regulation carefully and enjoys grinding through manufacturer portals in four languages will beat a better engineer here.

### Key assumptions to validate (5)

1. **Assumption:** Independent repairers do not currently know that the 15-working-day parts obligation is conditional on registering with each manufacturer. **How to test:** Call 25 shops across 4 countries and ask directly: "Which brands are you registered with as a professional repairer?" If most answer confidently and completely, the core premise is dead. If most say "registered how?", it's alive.
2. **Assumption:** Parts delays are attributed to the *problem worth paying for* rather than accepted as weather. **How to test:** In the same calls, ask what a late part cost them last month in re-visits. If they can't quantify it and shrug, willingness to pay is weak.
3. **Assumption:** Manufacturer registration routes are discoverable and stable enough to be automated. **How to test:** Manually map the registration process for 10 major brands in 2 languages in one week. If 3+ are effectively undiscoverable or require existing authorised-partner status, the dataset thesis weakens badly.
4. **Assumption:** A national trade association will co-market this. **How to test:** Pitch 5 associations with the free member-audit offer. Need 1 yes in 3 weeks.
5. **Assumption:** Shops will pay €59/mo for a tool that doesn't touch their existing scheduling/invoicing system. **How to test:** Pre-sell 10 annual subscriptions at 50% off before the product is complete. Fewer than 4 takers = re-price or reposition as an add-on.

### Risk flags

1. **Enforcement toothlessness.** The repairer's ultimate recourse — a market-surveillance complaint — is slow and impersonal. If shops conclude the right is unenforceable in practice, the "overdue pack" feature loses its meaning and the product shrinks to a registration tracker. Mitigation: lead with the commercial benefit (parts on time, fewer truck rolls), treat evidence as a bonus. This is why the product is positioned as a registrar, not a claims engine.
2. **Manufacturer counter-move.** Brands could make registration genuinely easy and centralised, which would delete the pain. Honestly, that's the *point* of the Directive, and it may happen — but the EU's own platform slips to 2027 and brands have shown no appetite to simplify voluntarily. Still, this is a product whose ideal outcome is its own obsolescence in 3–5 years.
3. **Weak defensibility.** Scored 2/10. Copyable within a quarter. Speed to associations is the only real defence.
4. **Fragmentation cost.** Seven countries means seven languages, seven holiday calendars, seven enforcement routes, and seven support burdens — against a €29–59 price point. Support cost per euro of revenue is the number most likely to break this business quietly. Launch in 2 countries, not 7.
5. **Premise risk.** The sharpest insight here — that registration gates the parts clock — is drawn from regulation text. If in practice major brands supply unregistered repairers within 15 days anyway because it isn't worth policing, the wedge dulls considerably. Assumption 1 is the single most important thing to test, and it is testable in a week of phone calls.

## 14. Structured verdict

```
Score:                  72/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical solo founder in an EU market, comfortable reading
                        regulation and grinding manufacturer portals in 3+ languages.
                        An ex-field-service or parts-distribution background is a
                        significant unfair advantage.
Time to revenue:        6–10 weeks from launch (pre-sellable before v1 is complete)
Capital to launch:      €8–15K
Top 3 assumptions to validate first:
  1. Repairers don't know registration gates the 15-day clock — 25 phone calls,
     4 countries, ask "which brands are you registered with?"
  2. Registration routes for the top 10 brands are discoverable and automatable —
     one week of manual mapping in 2 languages
  3. One national trade association will co-market — pitch 5, need 1 yes in 3 weeks
Kill criteria:
  - Abandon if >60% of 25 surveyed shops already know their registration status
    per brand and consider it a solved problem
  - Abandon if 3 or more of the top 10 brands make professional-repairer
    registration impossible without prior authorised-service-partner status
  - Abandon if fewer than 4 of 10 targeted shops will pre-pay a discounted annual
    plan after seeing their personalised brand-coverage audit
  - Abandon if no trade association engages after 8 pitches
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Manually map the professional-repairer registration process for 10 major appliance brands (Bosch/BSH, Whirlpool, Electrolux, Samsung, LG, Beko/Arçelik, Miele, Haier/Candy, Siemens, Gorenje) in German and French. Record for each: is it findable, what credentials it demands, whether prior authorisation is a prerequisite. **This doubles as the first version of the dataset**, so the week produces an asset even if the idea dies.
- **Day 3–4:** Build 30 personalised brand-coverage audits from public listings in Germany and France. Send them. Call 25 shops. One question above all others: *"Which brands are you registered with as a professional repairer?"* Log whether they can answer.
- **Day 5:** Pitch 5 national trade associations with the free member-audit offer. In parallel, offer the 10 warmest shops a discounted annual pre-pay.

**Falsifiable go/no-go:** Proceed only if (a) at least 15 of 25 shops cannot confidently state their per-brand registration status, (b) at least 7 of the 10 brands have a registration route that does not require prior authorised-partner status, and (c) at least 4 of 10 shops pre-pay or 1 association commits to co-market. Miss any of the three and this is a VALIDATE that failed validation — write it up and move on.
