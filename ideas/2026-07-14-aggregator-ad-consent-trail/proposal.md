---
title: "AdVeto — consent trail for restaurants on food aggregators"
slug: aggregator-ad-consent-trail
date: 2026-07-14
category: RestaurantTech / India — Independent Restaurants & Cloud Kitchens on Swiggy and Zomato (ad and discount consent evidence)
complexity: Low
score: 76
verdict: GO
confidence: Medium
oneLiner: "Records what you never agreed to, so the aggregator has to hand back the ad money it took."
tags:
  vertical: RestaurantTech
  model: SaaS
  geography: India
  secondary: [SMB, AI-agent, WhatsApp-first, Solo-builder, Compliance-driven]
axes:
  problem: 17
  demand: 13
  build: 13
  distribution: 12
  revenue: 10
  time: 8
  defensibility: 3
founderFit: [technical-heavy, content-heavy]
featured: false
---

# AdVeto

## 1. One-liner

Records what you never agreed to, so the aggregator has to hand back the ad money it took.

## 2. Trend signal — why now?

Swiggy's own public defence is the entire product thesis. A source close to the company told Outlook Business: *"Out of over 3,50,000 restaurant partners that engage with Swiggy, this issue affects fewer than 1%. Complaints are logged through our ticketing system and resolved within 24 hours. **If there's no consent trail and the issue is genuine, we reverse the amount in the next payout.**"*

Read that last sentence again. The platform has publicly committed to a refund rule — *no consent trail = money back* — that essentially no restaurant is equipped to invoke, because nobody on the restaurant side is recording the absence of consent. The burden of proving a negative sits with the party that has no records. That gap is the business.

The underlying wound is well documented and getting worse. Medianama (April 2026) reported seven months of complaints describing a pattern of unauthorised deductions across multiple Swiggy ad products, with amounts from ₹10,000 to over ₹20 lakh. Swiggy's partner terms contain no specific opt-in process, no documented approval trail, and no permanent opt-out mechanism — but they do contain a deemed-consent clause ("your continued usage of the Services after any change is posted constitutes your acceptance of the amended Merchant Terms"), which is what the platform leans on when challenged.

Meanwhile the margin has no room left to absorb it. NRAI vice-president Pranav Rungta puts commission, advertising and other variable costs at ~60% of order value. March 2026 saw Zomato and Swiggy raise platform fees to 25–35% per order. When ads are already the line item eating the restaurant alive, an unauthorised ₹50,000 ad charge isn't an annoyance — it's the month.

And restaurants are finally organised and angry. NRAI is running a delisting campaign, opposing the platforms' private-label apps (Snacc, Bistro), and preparing complaints with regulatory authorities. There is a mobilised, addressable, furious buyer base with an association that will amplify anything that fights back.

Provenance:
  - Signal 1 (demand): Seven months of restaurant complaints re: Swiggy ad charges deducted without consent, ₹10,000–₹20 lakh; named owners on record (Jay Thar/Naan Factory: *"If we don't approve them, they auto-approve it from their backend"*) — https://www.medianama.com/2026/04/223-swiggy-ad-charges-without-consent-unauthorized-deductions-restaurants/ and https://www.outlookbusiness.com/news/restaurants-allege-zomato-swiggy-charge-them-for-ads-discounts-without-consent — Apr 2026
  - Signal 2 (feasibility): Aggregator payout/settlement data is now routinely machine-ingested — Petpooja, UrbanPiper, Cointab and Terra Insight all parse Swiggy/Zomato settlement files today, so the parsing layer is a solved, commoditised input rather than a research problem — https://www.petpooja.com/poss/online-order-reconciliation — 2026
  - Signal 3 (economic): Commission + advertising + variable costs = ~60% of order value (NRAI); platform fees raised to 25–35% in March 2026; NRAI running a delisting campaign and preparing regulatory complaints — https://www.freepressjournal.in/mumbai/checkout-shock-is-food-delivery-duopoly-finally-facing-a-reckoning-with-new-entrants-like-ownly-toing and https://inc42.com/buzz/restaurants-standard-contracts-customer-data-from-zomato-swiggy-nrai-letter/ — 2026
  Category: Underserved niche

## 3. The opportunity

Every existing tool in this space answers the wrong question.

**Reconciliation tools ask: "did the arithmetic add up?"** Petpooja, UrbanPiper, Cointab, Terra Insight, Optipro — they pull the settlement file, diff it against POS orders, and flag status mismatches, amount variances, missing orders, rounding errors. Petpooja bundles this *free* inside the POS most Indian restaurants already run, and the reported recovery is ₹2,000–₹15,000/month. That is a real feature and it is a finished race. I would not enter it.

**AdVeto asks a question none of them ask: "did I ever agree to this charge, and can I prove I didn't?"**

This is not arithmetic. The ad charge is usually *arithmetically correct* — the campaign genuinely ran, the clicks genuinely happened, the maths genuinely checks out. Reconciliation software looks at it, sees the numbers tie, and passes it clean. The dispute isn't about the sum. It's about authorisation. And authorisation leaves no trace in a settlement file, which is precisely why every incumbent is structurally blind to it.

The asymmetry today is brutal and one-directional:

- The platform holds the ad-campaign records, the "deemed consent" clause, and the ticketing queue.
- The restaurant holds a WhatsApp thread, a half-remembered call from a sales rep, and a bank statement that's short ₹50,000.
- The dispute window is ~90 days and the restaurateur usually notices in month four.
- Refunds, per owners on record, "happen only after public pressure, like when an issue goes viral on Twitter."

AdVeto flips the record-keeping. It sits on the restaurant's side, watches the payout statements arrive, isolates every ad, promo and discount deduction, and matches it against the restaurant's own contemporaneous consent record — which AdVeto has been quietly building since day one. When a charge shows up with no matching approval, it fires the dispute *inside the window*, with the receipts attached, in the language Swiggy's own public policy commits it to honour.

Note the elegant part: **Zomato uses OTP-based approval for ads.** That means for Zomato ad charges there is an objective, checkable artefact — either an OTP was issued to this restaurant's phone or it wasn't. Zomato has *no* consent system for discounts. Swiggy has no formal process for either. So the product has three distinct evidentiary regimes to exploit, and in every one of them the restaurant currently keeps zero records.

## 4. Target market

- **Primary customer:** Owner-operator of an independent restaurant or cloud kitchen in an Indian metro/Tier-1 city, doing ₹3–15 lakh/month of aggregator GMV, listed on both Swiggy and Zomato, with 1–4 outlets and no finance team. The person who personally opens the payout email.
- **Why they buy:** In their own words. Jay Thar, founder of Naan Factory, on Swiggy ads: *"If we don't approve them, they auto-approve it from their backend."* Akash, a Gurgaon cloud kitchen owner: *"I don't remember approving ₹5,000 worth of ads. Without asking, they ran offers like ₹200 off on ₹500, ₹400 off on ₹3,000 and ₹70 off on ₹200. I only got to know once I received an email and then I had to manually disable it."* Ashwani Basantani, on ₹1 lakh+ wrongly deducted in Zomato ad spends: *"After we met their team on May 13–14, they made assurances, but the deductions continued."* Gangandeep Sing Sapra of Glisco Kitchens, on Swiggy: *"We have email proof where they acknowledged the mistake."* Niraj Bora of Cheesiano Pizza puts the structural point best: *"Most restaurants are on both platforms. If Zomato can have a consent system, why not Swiggy? Their vague processes allow them to deny wrongdoing."* And on the futility of the official channel, a Rishikesh cloud-kitchen owner: *"I emailed a senior person. If that system really existed, he should've used it. Right now, refunds happen only after public pressure, like when an issue goes viral on Twitter."*
- **Rough TAM reasoning:** Swiggy alone claims 3,50,000+ engaged restaurant partners. Swiggy's own framing — "fewer than 1%" affected — is itself a floor of ~3,500 restaurants on one platform, and it is a number supplied by the defendant, so treat it as the low bound rather than the estimate. The serviceable target is narrower and better: the ₹3L+/month GMV operators on both platforms who actually run ads, which is plausibly 40,000–80,000 outlets. I need 800 of them.
- **Why now for them:** Fees went up in March 2026, margins are at ~60% cost of order value, NRAI has made fighting the platforms socially normal rather than career-ending, and the platforms are visibly reaching for revenue post-IPO — as one owner put it, *"They've started doing things they never did before. It's clearly about showing strong numbers post-IPO."*

## 5. Product sketch (MVP)

- **Consent recorder.** Every time the restaurant approves an ad campaign, a promo, or a discount scheme — via OTP, via email, via a call from a sales rep, via a WhatsApp "haan kar do" — the owner forwards it to AdVeto's WhatsApp number or it's captured from the linked inbox. Timestamped, immutable, indexed. This is the boring half and it is the entire moat.
- **Deduction isolator.** Ingests the Swiggy/Zomato settlement statements and strips out the ad, promo, membership-discount and campaign lines specifically — separating them from commission, GST, gateway and TDS, which are legitimate and not in dispute.
- **The unmatched-charge alert.** The core output: *"Swiggy charged you ₹47,300 for 'Ads – Sponsored Listing' across 18–31 May. We have no consent record for this campaign. Dispute window closes in 61 days."*
- **OTP gap check (Zomato).** Because Zomato issues OTPs for ad approval, AdVeto flags every Zomato ad charge with no corresponding OTP in the restaurant's record — the strongest possible evidence, on the platform's own chosen mechanism.
- **Auto-renewal watch.** Flags campaigns that renewed without fresh approval — the specific failure Zomato owners describe as "auto-renewal without notice."
- **Dispute packet generator.** Produces the ticket: order IDs, campaign IDs, dates, amounts, the absence-of-consent statement, and the citation of the platform's own published position that unconsented charges get reversed. Filed while the window is open, not after.
- **Escalation ladder.** If the ticket dies, the packet re-formats as an NRAI escalation letter and a Consumer Protection Act 2019 Sec. 2(47) unfair-trade-practice complaint draft. Owners on record say refunds come only under public pressure — so the product should make public pressure a one-click artefact.
- **Recovery scoreboard.** ₹ recovered, ₹ disputed, ₹ pending, per outlet. This is the retention hook — the number the owner screenshots and sends to the WhatsApp group.

## 6. AI angle — what's load-bearing

Remove the AI and the product collapses into a spreadsheet nobody fills in.

The load-bearing work is **turning unstructured consent evidence into a structured, searchable, disputable record.** A restaurant's proof of what it did and didn't agree to lives in: WhatsApp voice notes in Hindi and Marathi, screenshots of an OTP SMS, a forwarded email in a sales rep's mangled English, a photo of a signed paper insertion order, and a scrawled note. The AI's job is to read all of that, extract *(campaign name, platform, date, amount, who approved, what exactly was approved, for how long)*, and — critically — to reason about **scope**: an owner who approved a ₹5,000 sponsored-listing campaign for two weeks did *not* thereby approve its auto-renewal for four months at ₹18,000. That scope judgement is the difference between a winning dispute and a losing one, and it's a language-reasoning task, not a database query.

Second load-bearing job: **matching deduction line-items to consent records across messy, inconsistent naming.** The settlement file says "Ad_SponsListing_HYD_2205"; the WhatsApp approval says "haan wo Swiggy ad chala do ₹5k ka." Fuzzy semantic matching across two vocabularies, two languages, and two systems of reference. Deterministic string matching does not do this.

Third: **drafting the dispute in a register that gets acted on** — citing the specific order IDs, the campaign, the missing consent, and the platform's own public commitment, in the tone of someone who will escalate. Owners report generic tickets get ignored and viral tweets get refunds. The AI writes the version that reads like the first step of the second thing.

## 7. Localization angle

India-first, and not incidentally — the *entire product is a localization*. The pain exists because of a specific duopoly (>90% share), a specific set of ad products, a specific deemed-consent clause in Swiggy's Indian merchant terms, a specific 90-day dispute window, and a specific regulatory hook (Consumer Protection Act 2019, Sec. 2(47) unfair trade practice; CCPA already probing Zomato/Swiggy cancellation and refund policies; CCI antitrust interest active).

Concretely local:
- **Language:** consent evidence arrives as Hindi/Hinglish/Marathi/Tamil WhatsApp voice notes. Non-negotiable.
- **Channel:** WhatsApp-first. The owner will not log into a dashboard to forward an OTP screenshot; they will forward it to a WhatsApp number in three seconds. Ingestion has to meet them there or the consent record stays empty and the product is worthless.
- **Price:** must work at ₹1,499–₹4,999/mo. A $49/mo tool prices out the exact operator being robbed of ₹50,000.
- **Institutional lever:** NRAI. There is no US equivalent with this much mobilised anger and a live delisting campaign.

The same shape exists elsewhere (DoorDash/Uber Eats ad charges in the US, Grab in SEA), but the evidentiary regime, the dispute window and the association leverage are all different. Build India, port later.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** ₹2,499/mo per outlet (Base — consent recorder, deduction isolator, alerts, dispute packets). ₹4,999/mo per outlet (Pro — adds auto-renewal watch, escalation ladder, multi-outlet scoreboard, priority dispute drafting). Chains: ₹1,999/outlet at 5+.
- **The contingency alternative — and why I'd resist it.** The obvious move is 20% of recovered money. It sells itself and it aligns incentives beautifully. It's also a trap: revenue becomes lumpy, unforecastable, and dependent on the platform's goodwill in a given quarter, and the moment Swiggy tightens up and stops over-charging, the business evaporates even though the *insurance* value is exactly what the restaurant should keep paying for. **Use contingency as the land, subscription as the expand:** first 90 days free, take 25% of whatever is recovered, then convert to flat monthly. The recovered ₹47,000 is the proof that justifies the ₹2,499.
- **ACV:** ~₹36,000/outlet/year blended (~$430). Multi-outlet operators are the prize — a 6-outlet cloud kitchen brand is ₹1.4L/year.
- **Rough math to $1M ARR:** ₹8.7 crore. At ₹36,000 ACV blended → **~2,400 outlets.** Against a serviceable base of 40,000–80,000 ad-running outlets, that's 3–6% penetration. Realistic in 24 months if the recovery story lands.
- **Rough math to $5M ARR:** ₹43 crore. Needs ~12,000 outlets — too big a share of India-only independents. The honest path to $5M is: (a) chains and cloud-kitchen aggregator brands at 20–50 outlets each, (b) the same product for the *quick-commerce* seller side, where Blinkit/Zepto/Instamart brands face structurally identical unconsented ad and visibility charges — a much larger and even less defended base, (c) SEA/Grab and US/DoorDash ports. I'd bet on (b) as the real second act.
- **Expansion path:** outlet count → escalation/legal tier → the q-commerce brand-side product → sell the anonymised, aggregated "what the platforms actually charge" benchmark back to NRAI and the press, which is both a revenue line and the single best marketing asset in the category.

## 9. Go-to-market wedge — first 100 customers

The customers are not hypothetical; several of them are **quoted by name in national business press complaining about this exact problem.** That is the target list.

1. **The named-complainant list (customers 1–15).** Medianama, Outlook Business, Inc42, Storyboard18 and Project X Restaurants have published the names of restaurateurs and cloud-kitchen founders who went on record about unconsented ad deductions — Ashwani Basantani, Jay Thar, Gangandeep Sing Sapra, Niraj Bora and others. They are findable on LinkedIn in one search. Message: *"You told Outlook you lost ₹1 lakh in ad spends you never approved. I'll recover it for free and take 25% of whatever comes back."* This is not cold outreach; it's answering a public cry for help. Expect a high reply rate, and expect them to become the case studies.

2. **The NRAI channel (customers 15–100).** NRAI is *already* running a delisting campaign, already writing letters demanding standard contracts, already preparing regulatory complaints. They need ammunition and their members need a tool. Offer them the aggregate data — "across 400 outlets we found ₹2.3 crore of ad charges with no consent trail" — free, in exchange for chapter-level introductions. NRAI has city chapters with WhatsApp groups full of exactly this buyer. One credible recovery story propagates through those groups faster than any ad.

3. **The public-pressure flywheel.** Owners on record say *"refunds happen only after public pressure, like when an issue goes viral on Twitter."* So: run the recovery, win it, and publish it — with the restaurant's blessing and the numbers. Every won dispute is a post. The category's own dynamics mean the marketing *is* the product working. Build the "₹ recovered from aggregators" public counter and let it climb.

4. **The reconciliation-adjacent flank.** Restaurants already reconciling (Petpooja users, Terra Insight, Cointab) have proven they care about leakage and have already found the ₹2K–15K/month of arithmetic errors. They are pre-qualified, already convinced money is being taken, and are the easiest to show the *bigger* number they're currently blind to. Target Petpooja/UrbanPiper user communities directly with the "your reconciliation tool passes these charges clean because the maths is right — the consent is what's missing" message.

5. **The cloud-kitchen aggregators.** Brands like Cloud Kitchen Exchange run dozens of kitchens under one operator. One conversation, 20–40 outlets. Basantani is already publicly aggrieved and already runs one. Start there.

## 10. Build complexity — justification

**Low.** Settlement-file ingestion is a solved, commoditised problem — several vendors parse Swiggy/Zomato payout files today, so the format is known and the work is unglamorous rather than hard. The consent recorder is a WhatsApp Business API inbox plus multimodal extraction (voice note, screenshot, email, photo of a paper IO) — all off-the-shelf model calls. The matching and scope-reasoning layer is prompt-and-eval work, not research. The dispute packet is templated generation. No custom models, no infra, no proprietary data required at the start.

A competent pair ships a credible v1 in **8–10 weeks**. The genuinely hard part isn't engineering — it's the operational grind of learning which dispute framings actually get paid, which is knowledge you can only buy by running disputes. That's why the first 20 customers should be served contingency-only and semi-manually: you're not scaling yet, you're building the playbook the software will later encode.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Helping a merchant contest charges against its own contract, using its own records, in the platform's own dispute channel. Consumer Protection Act 2019 explicitly covers traders and service providers. No scraping of platform-side data required — everything is the restaurant's own statements and messages, provided with consent. |
| Ethical — no harm / dark patterns | ✅ | The product exists to correct an information asymmetry that currently runs entirely one way. It disputes only charges with no consent record; it does not manufacture disputes. The one ethical guardrail that matters: never file a dispute the restaurant hasn't reviewed — the tool must not become a spam cannon aimed at a support queue, which would poison the well for every honest claimant. |
| Market exists (evidence above) | ✅ | Seven months of documented complaints, six named restaurateurs on record, ₹10K–₹20L amounts, NRAI mobilised, national press coverage. |
| 1–5 person team can build this | ✅ | Two people, 8–10 weeks to v1. |
| Launchable with <$50K / ₹40L | ✅ | Well under ₹10L: WhatsApp Business API, model inference, a small web app. The real spend is founder time running the first 20 disputes by hand. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | **17**/20 | Hair-on-fire. ₹10K–₹20L taken, from operators whose total variable cost is already ~60% of order value. Owners are going to the *national press* about this, which is what people do when they've exhausted every other option. Not a 19–20 only because it's episodic rather than daily — the charge lands monthly, and between hits the owner isn't thinking about it. |
| Demand evidence | 15 | **13**/15 | Multiple independent, named, on-record signals across four publications; a defendant that has publicly conceded the refund rule; an industry association already litigating adjacent grievances. A skeptic nods. Held back from 15 because nobody is currently *paying* for this specific thing — the willingness-to-pay is inferred from adjacent spend (₹5–12K/mo on POS) and from the size of the loss, not observed. |
| Build feasibility | 15 | **13**/15 | Off-the-shelf throughout. Settlement parsing is commoditised, consent capture is a WhatsApp inbox plus multimodal extraction, dispute drafting is templated. 8–10 weeks for a pair. |
| Distribution clarity | 15 | **12**/15 | The first 15 customers are *named in published articles* — that is about as concrete as a target list gets. NRAI chapter WhatsApp groups are a real, warm, mobilised channel. Not higher because NRAI is a relationship to be earned, not a list to be bought, and it's the load-bearing channel for customers 15–100. |
| Revenue mechanics | 15 | **10**/15 | ₹2,499–4,999/mo is comfortably inside a wallet already spending ₹5–12K/mo on POS, and the contingency land-motion makes the first sale nearly frictionless. The real weakness: **the product's own success erodes its subscription rationale.** Once recoveries stop coming — because you fixed the behaviour — the owner asks what they're paying for. The honest answer is insurance, and insurance is a harder monthly sell than recovery. $1M is clean; $5M needs the q-commerce second act. |
| Time to first revenue | 10 | **8**/10 | Contingency means revenue lands as soon as the first dispute is *won*, not when the software is finished — and the first ones can be run by hand. Realistically 6–8 weeks to first rupee. Not 9–10 because the money arrives on the platform's payout cycle, not yours. |
| Defensibility | 10 | **3**/10 | **The weakest axis by a distance, and I won't dress it up.** Petpooja already sits inside the restaurant, already parses the settlement file, already has the POS relationship, and could bolt a consent recorder onto their reconciliation module in a quarter. The only real moat is the accumulating corpus of *which dispute framings actually get paid* — genuinely valuable, genuinely compounding, and genuinely invisible to a competitor until they've lost a hundred disputes learning it. But it's an execution moat with a head start, not a structural one. Score it honestly: 3. |
| **Total** | **100** | **76**/100 | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `content-heavy`

Technical for the multimodal consent extraction and the fuzzy matching. Content-heavy because **the distribution strategy and the product are the same thing**: publishing recovered-money stories is how this grows, and it requires a founder who will write, post, and press. A quiet builder will build a good product nobody adopts.

### Key assumptions to validate (3–5)

1. **Assumption:** Swiggy/Zomato actually honour the "no consent trail → reverse the amount" rule when a restaurant presents an organised evidentiary packet inside the 90-day window — rather than only under viral public pressure. **How to test:** This is the whole ballgame. Run 10 disputes by hand for 10 real restaurants, entirely manually, before writing a line of product code. Count how many get paid, and how much, and how fast. If organised evidence doesn't move the needle and only Twitter does, the product is a PR agency, not software — and I'd kill it.
2. **Assumption:** Restaurant owners will reliably forward consent artefacts (OTPs, approval emails, WhatsApp confirmations) to a WhatsApp number, consistently, *before* they have a dispute. **How to test:** The consent recorder is worthless if it's empty when the charge lands. Run a 30-day WhatsApp-only pilot with 20 owners, no product behind it, and measure the forward rate. Below ~50% and the record has holes exactly where the platform will push.
3. **Assumption:** Owners will convert from contingency to a flat ₹2,499/mo subscription after the initial recovery is banked. **How to test:** Cohort the first 30 contingency customers, offer conversion at day 90, and measure. Under 30% conversion means this is a recovery service, not a SaaS, and the ARR maths needs rewriting.
4. **Assumption:** Petpooja doesn't ship this as a free POS feature within 12 months. **How to test:** Unfalsifiable in advance — so treat it as a race condition rather than an assumption, and get to the NRAI relationship and the dispute-framing corpus before they notice.

### Risk flags

1. **Platform retaliation.** The single biggest risk, and it's not technical. A restaurant that disputes aggressively can find its visibility quietly degraded on a platform that controls >90% of its delivery demand. Restaurateurs know this, which is a large part of why they've tolerated the charges. AdVeto is asking them to pick a fight with their landlord. **Mitigation is structural, not cosmetic:** the NRAI collective route and aggregate, anonymised disclosure matter far more than individual heroics — safety in numbers is the only real answer, and it means the association relationship is a survival requirement, not a growth channel.
2. **Incumbent bundling.** Petpooja/UrbanPiper are one product decision away from this. See defensibility: 3/10.
3. **The problem gets fixed.** If CCPA/CCI action or NRAI pressure forces Swiggy to implement Zomato-style OTP consent across ads *and* discounts, the unconsented-charge volume collapses and the recovery business with it. This is the good outcome for India and the bad outcome for this company. Note the perverse position it puts you in — and note that the surviving business in that world is the *consent record itself* (proving what you approved, for audit and for negotiation), which is a smaller, duller business. Build toward it deliberately rather than being surprised by it.
4. **Platform dependency.** The product's input is a settlement file whose format Swiggy and Zomato control and can change at will — and they have every incentive to make an adversarial tool's life hard.

## 14. Structured verdict

```
Score:                  76/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder who will also write and press publicly;
                        ideally with an existing NRAI or restaurant-association relationship
Time to revenue:        6–8 weeks (contingency on manually-run disputes, before v1 ships)
Capital to launch:      ₹8–10 lakh ($10–12K)
Top 3 assumptions to validate first:
  1. Organised evidence actually gets refunds inside the window — run 10 disputes
     entirely by hand for 10 real restaurants BEFORE building anything. If only
     virality moves money, kill it.
  2. Owners forward consent artefacts to WhatsApp proactively — 30-day, 20-owner,
     no-product pilot. Need >50% forward rate.
  3. Contingency converts to subscription at day 90 — need >30% or the ARR model is wrong.
Kill criteria:
  - Abandon if fewer than 3 of the first 10 hand-run disputes recover money within 60 days.
  - Abandon if the consent-forward rate in the WhatsApp pilot is <50% — an empty
    record loses every dispute.
  - Abandon if Swiggy ships OTP-based consent across both ads and discounts before
    v1 launches — the wound closes and the recovery business closes with it.
```

## 15. Next step — 1-week validation sprint

No code this week. The only question worth answering is whether evidence actually beats the ticketing queue.

- **Day 1–2:** Build the target list. Pull every restaurateur named on record in the Medianama, Outlook Business, Inc42 and Project X coverage. Find them on LinkedIn. Message all of them with one offer: *"I will recover your unconsented ad charges for free. If money comes back, I keep 25%. If nothing comes back, you owe nothing."* Target: 10 signed.
- **Day 3–4:** For each, collect the payout statements and every scrap of consent evidence they have. Hand-build the dispute packet: campaign IDs, dates, amounts, the absence-of-consent statement, and a citation of Swiggy's own published position that unconsented charges get reversed. File all 10 through the official partner channels. Do it manually, in a spreadsheet. Feel exactly where it hurts — that's the product spec.
- **Day 5:** Decide on a falsifiable outcome. **Go if ≥3 of 10 disputes are acknowledged and moving toward refund within 60 days, and ≥1 rupee is actually recovered.** No-go if the packets die in the queue exactly like the owners' own emails did — because then the mechanism isn't evidence, it's noise, and no amount of software fixes that.

The result is falsifiable and it's the only thing that matters: either an organised evidentiary packet moves money, or it doesn't. Everything else is downstream of that single fact.
