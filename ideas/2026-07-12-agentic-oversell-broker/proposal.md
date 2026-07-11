---
title: "PromiseKeeper — commit broker for DTC brands on AI agents"
slug: agentic-oversell-broker
date: 2026-07-12
category: Retail / Global
complexity: Medium
score: 73
verdict: GO
confidence: Medium
oneLiner: "Decides in real time what an AI shopping agent is allowed to promise, so brands stop mass-cancelling orders they can't ship."
tags:
  vertical: Retail
  model: SaaS
  geography: Global
  secondary: [AI-agent, SMB, Platform-shift, Ecommerce, Solo-builder]
axes:
  problem: 15
  demand: 10
  build: 11
  distribution: 12
  revenue: 12
  time: 8
  defensibility: 5
founderFit: [technical-heavy]
featured: false
---

# PromiseKeeper

## 1. One-liner

Decides in real time what an AI shopping agent is allowed to promise, so brands stop mass-cancelling orders they can't ship.

## 2. Trend signal — why now?

On **11 January 2026**, Google announced the **Universal Commerce Protocol (UCP)** at NRF, co-developed with Shopify, Etsy, Wayfair, Target and Walmart, and endorsed by 20+ partners including Visa, Mastercard and Stripe. OpenAI and Stripe run the parallel **Agentic Commerce Protocol (ACP)**. Both are now live. Over a million Shopify merchants are auto-enrolled into ChatGPT Shopping and Google AI Mode. Checkout is moving off the merchant's website and onto Google's and OpenAI's surfaces — while the merchant stays merchant of record.

Two facts collide, and nobody has built the airbag.

**Fact one: agents buy hard and fast.** Agentic traffic converts at 15–30% — roughly 5–10× traditional benchmarks — because the agent has already validated fit, price and availability before it ever hits the merchant. It is a transactional visitor, not a browser. AI traffic to US retail sites grew 393% YoY in Q1 2026.

**Fact two: SMB inventory truth is stale.** Real-time-sync brands hold oversell below 0.1%; brands on manual or batch sync run **2–5%**. A 15-minute polling cycle means a 15-minute window in which every channel can sell the same unit.

Put them together and the failure mode changes shape entirely. Google's own guidance concedes the point: *"Shopping ads can survive a stale price for a few hours. UCP checkout cannot. If the shopper sees a price in Universal Cart, that price has to hold when the order is placed."* And the operational consequence, stated plainly:

> "When a traditional website oversells a product, one customer gets a cancellation email. When an AI agent operating across email, SMS, WhatsApp, and ChatGPT simultaneously oversells a product, **dozens of customers get cancellation messages within the same hour**, because the agent processed orders faster than the inventory sync could keep up."

Stripe, writing up lessons from the first generation of agentic commerce, reports that a platform asked them whether inventory verification happens *"down to the millisecond."* That is the bar the protocols are setting. The merchant's actual answer lives in a Shopify admin that reconciles on a batch cycle.

Neither Google nor Stripe will tell a merchant what to say when the honest answer is "I have three left and six agents are asking." That decision is the product.

Provenance:
  - Signal 1 (demand): Agent-driven oversell produces cancellation cascades — "dozens of customers get cancellation messages within the same hour" — and 40% of customers who hit an oversell cancellation never buy from that brand again; batch-sync brands oversell on 2–5% of orders — https://www.nexgenarchitects.com/blog-posts/agentic-commerce-retail-operation + https://nventory.io/blog/why-multichannel-inventory-sync-failing — 2026-07-12
  - Signal 2 (feasibility): UCP (Google, Jan 2026) and ACP (OpenAI/Stripe) both went live with hosted merchant endpoints for near-real-time price/availability checks — the integration surface a third party can sit on top of did not exist 12 months ago — https://developers.google.com/merchant/ucp + https://docs.stripe.com/agentic-commerce/acp — 2026-07-12
  - Signal 3 (economic): Agentic traffic converts at 15–30% (5–10× web), AI retail traffic +393% YoY in Q1 2026, Morgan Stanley projects ~25% of spend via AI agents by 2030 — the order volume flowing through this pipe is compounding fast — https://ucphub.ai/agentic-commerce-conversion-rate-ucp/ + https://www.metarouter.io/post/agentic-commerce-trends-statistics — 2026-07-12
  Category: Platform shift

## 3. The opportunity

Every vendor in this space is selling **visibility** — "get discovered by AI agents." Shopify ships a free catalog audit tool. The Agentic Commerce app scores your SKUs and Gemini-autofills missing attributes. Glara, Vizby, Profound, Semrush and Ahrefs all sell AI-visibility dashboards at $29–$800/mo. That market is crowded, commoditizing, and solving the *front* of the funnel.

Nobody is solving the back of it. Visibility tools make the agent *want* to sell your product. They do nothing about what happens when six agents want to sell the same three units inside the same ninety seconds.

The incumbent inventory tools are the wrong shape too. Linnworks ($449/mo, 2K orders), Sellbrite ($24–149/mo), Cin7 — these are multichannel sync engines built for a world where channels are *marketplaces that poll you*. They reconcile stock between Shopify, Amazon and eBay on a cadence. They were architected for a channel that asks "what's your stock?" every 15 minutes, not one that asks "can I close this sale, right now, and will you honour it?" and then holds you to the answer as merchant of record.

The gap is a **decision layer**, not a sync layer. When an agent hits the availability endpoint, something has to answer a question no existing tool answers: *given my true stock, my current reservation load, my velocity on this SKU, and the fact that this channel's promise is legally binding on me — what do I commit to?* Sometimes the right answer is "in stock." Sometimes it's "in stock, but hold 2 units back." Sometimes it's "say out of stock, because my last count was 9 hours ago and I'd rather lose the sale than eat the cancellation."

That is a pricing-and-risk decision dressed up as an inventory lookup. It is exactly the sort of thing an SMB with 400 SKUs and no ops team cannot reason about per-request, and exactly the sort of thing software should decide for them 40,000 times a day.

## 4. Target market

- **Primary customer:** Founder or head of ops at a DTC brand doing **$1M–$20M GMV**, running Shopify (or Shopify + Amazon + one marketplace), physical goods, 100–2,000 SKUs, 1–3 people touching operations, no dedicated inventory analyst. US/UK/EU/AU — the geographies where UCP checkout is live or landing. Highest-pain slice: brands with **tight or lumpy stock** — apparel with size curves, limited drops, handmade/small-batch, refurb, anything with a long lead time on reorder.
- **Why they buy:** Because the cancellation email is the single most expensive message they send. 40% of customers who get one never return. When it goes out to two customers a week that's a leak. When agentic order flow lands and it goes to thirty customers in an hour, it's a fire — and it's a fire that shows up in Google's and OpenAI's merchant quality signals, which are the very channels they just started depending on. They are not buying inventory software. They're buying "don't let the robot write cheques my warehouse can't cash."
- **Rough TAM reasoning:** Shopify has >1M merchants auto-enrolled in agentic surfaces. The $1M–$20M GMV physical-goods band is plausibly 60–100K merchants globally. I need **~1,400 of them at $99/mo** to hit $1.6M ARR. That's 1.5–2% of a conservatively-drawn band. The number I need is small relative to the pond, which is the shape I want.
- **Why now for them:** They did not opt into this. Auto-enrollment into ChatGPT Shopping and Google AI Mode means the channel arrived without them choosing it, and it arrived with a 5–10× conversion multiplier attached. Their oversell rate was survivable at web conversion rates. It is not survivable at agent conversion rates on the same stale feed.

## 5. Product sketch (MVP)

- **Commit decision endpoint.** Sits between the agentic protocol surface (UCP / ACP / Stripe's hosted endpoint) and the merchant's stock truth. Every availability check gets an explicit decision: commit, commit-with-buffer, or decline.
- **Per-SKU risk scoring.** Each SKU gets a live confidence score built from stock-count freshness, sales velocity, channel spread, historical count drift, and reorder lead time. A SKU with 400 units and a 2-minute-old count is safe. A SKU with 4 units, a 9-hour-old count and three channels selling it is not. The system knows the difference; the merchant never has to.
- **Dynamic buffers that actually move.** Not the static "hold back 5%" slider every sync tool ships. Buffers tighten during a drop, loosen on deep stock, and go hard defensive on SKUs where the last physical count disagreed with the system.
- **Oversell ledger.** Every near-miss logged: "on 14 July we declined 6 agent commits on SKU-8823 and prevented an estimated 4 cancellations." This is the retention artifact — it shows the customer the money they didn't lose, which is the hardest kind of value to make visible.
- **Cancellation autopsy.** When an oversell does slip through, reconstruct exactly why — stale count, concurrent channel, miscount — and tighten that SKU's policy automatically.
- **Channel-health guard.** Watch merchant-quality signals across the agentic surfaces and alert before a cancellation rate starts suppressing distribution.
- **One-click Shopify install.** Read stock, read orders, write nothing the merchant didn't approve. Live in under 10 minutes or it's dead on arrival at this price point.

## 6. AI angle — what's load-bearing

Strip the AI out and this becomes a static buffer rule — which is what already ships in Sellbrite and does not work, because a fixed 5% cushion is simultaneously too timid on a 900-unit SKU and far too reckless on a 4-unit one.

The load-bearing work is **forecasting the true stock position under uncertainty**, per SKU, per request, in milliseconds. The system is reasoning about a hidden variable: *actual physical stock right now*, which no merchant knows exactly. It infers it from count age, velocity, concurrent channel demand, historical drift between counted and system stock, and returns-in-flight — then converts that posterior into a commit/decline decision with an explicit expected-cost tradeoff: the margin on a sale I decline versus the 40%-churn cost of a cancellation I cause.

That's a real modelling problem with a genuine cost function on both sides, and it gets monotonically better with every count, sale and miscount observed across the customer base. It is not a chatbot bolted to an inventory grid. If I remove the inference, the product collapses back into a slider — and a slider is not worth $99/mo.

Worth saying plainly: this is mostly *classical* ML — gradient-boosted models over tabular features, not an LLM. The LLM's job is narrow and peripheral: reading the merchant's own count history and explaining, in English, why a SKU got flagged.

## 7. Localization angle (if any)

**N/A — this is a global play, and deliberately so.** The wedge is protocol-shaped, not geography-shaped: UCP checkout is live in the US, Canada and Australia, with the UK and broader EU following through 2026. Whoever the merchant is, the agent speaks UCP or ACP and the stock is in Shopify. The one geographic sequencing decision that matters is following the UCP rollout — launch US-first, then take Canada/Australia/UK as Google turns them on, because the pain literally does not exist in a market until agentic checkout lands there. That's a go-to-market calendar, not a localization strategy.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** Three tiers, priced against the cost of the thing being prevented, not against inventory-software norms.
  - **Guard — $49/mo:** up to 500 SKUs, decisioning + ledger.
  - **Pro — $99/mo:** up to 2,000 SKUs, dynamic buffers, cancellation autopsy, multi-channel.
  - **Scale — $299/mo:** unlimited SKUs, multi-warehouse, channel-health guard, API.
- **ACV:** ~$1,200 blended (assume the mass lands on Pro, with Scale pulling the average up as brands grow into it).
- **Rough math to $1M ARR:** 840 customers × $99/mo × 12 = **$1.0M**. Call it ~1,000 paying merchants to be safe on mix.
- **Rough math to $5M ARR:** ~3,500 customers blended at ~$120/mo, or 2,000 customers with a meaningful shift into Scale and multi-warehouse. Realistically $5M needs either (a) the agentic channel becoming 15–25% of DTC volume, which Morgan Stanley's 2030 projection supports but does not guarantee on my timeline, or (b) expansion into adjacent commit decisions — shipping-promise accuracy, delivery-date commits — which is the natural land-and-expand.
- **Expansion path:** SKU-count tiers first (mechanical, painless). Then **delivery-date commits** — the same inference problem, different promise: agents increasingly ask "when will this arrive?" and merchants guess, and a blown delivery promise costs the same 40% churn as a blown stock promise. Same data, same model, second product, no new sale.

The margin is fine: this is a decisioning API with modest inference cost and a Shopify webhook firehose. The real COGS line is engineering, not compute.

## 9. Go-to-market wedge — first 100 customers

The great gift of this idea is that **the pain is publicly observable before the customer feels it.** I can identify who's about to get hurt.

- **The oversell tell (primary, ~40 customers).** Public review pages, Trustpilot and brand subreddits are full of customers complaining "they cancelled my order, said it was out of stock." That is a *public, timestamped, searchable oversell log*. Scrape it. Build a list of 1,500 Shopify DTC brands with ≥3 oversell-cancellation complaints in the last 90 days, cross-reference against BuiltWith for Shopify + confirmed presence in Google Shopping / AI Mode. Email each one a one-page "Agentic Exposure Report": here are your 6 public cancellation complaints, here's your estimated oversell rate, here's what that becomes at agent conversion rates. This is a personalized, evidence-backed cold email where the evidence is *their own customers' words*. I'd expect 8–12% reply on a list that specific, and it closes because the argument is already made.
- **The free exposure scanner (~30 customers).** A public tool: paste your store URL, it reads your public product feed and checks stock-status accuracy against live product pages, then scores your agentic-oversell exposure. Free, no signup, shareable. This is a lead magnet that does actual work and produces a number the merchant did not previously have. Seed it in r/shopify, r/ecommerce (~800K combined), the Shopify Community forums, and 2–3 DTC operator Slacks.
- **Ride the UCP onboarding wave (~20 customers).** Google is running simplified UCP onboarding through Merchant Center "over the coming months" from March 2026 — a stream of merchants actively switching this channel on, and thinking about it, right now. Content and comparison pages targeting the exact queries these merchants type the week they enable UCP checkout ("UCP oversell", "agentic checkout cancellation", "native_commerce inventory") catches them at the moment of maximum intent.
- **Agency and 3PL channel (~10 customers, and the durable one).** Shopify Plus agencies and 3PLs are being asked "should we turn on agentic checkout?" by every client and do not have a good risk answer. Give them one, with a revenue share. Ten agencies with fifteen relevant clients each is the whole first hundred by itself.

Nothing here is "we'll do SEO." Every channel above has a named list, a named place, and a reason the recipient opens the email.

## 10. Build complexity — justification

**Medium.** The integrations are boring and well-documented: Shopify Admin API for stock and order webhooks, Stripe's hosted ACP endpoint and Google's UCP surface for the agent side. Nothing here is unmapped territory.

The genuinely hard part is the decisioning core: sub-100ms responses on the commit path, correct concurrency handling (two agents asking about the last unit simultaneously is the *whole problem*, and getting the reservation semantics wrong makes the product actively harmful), and a stock-inference model that is trustworthy from day one on thin data. Cold-start matters: a new customer has no drift history, so v1 must ship with sane conservative priors and earn its way to tighter buffers.

**Two people, 3–4 months to a credible v1.** One on integrations and the real-time path, one on the model and the ledger. The scanner lead-magnet is a two-week side build that can ship in week 3 and start collecting the list while the core product is still being built — which is exactly how I'd sequence it.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Merchant's own data, merchant's own channels, explicit install consent. No scraping of protected surfaces in-product. |
| Ethical — no harm / dark patterns | ✅ | The product's entire purpose is to stop merchants making promises to consumers that they break. It is pro-consumer by construction. |
| Market exists (evidence above) | ✅ | Oversell pain is documented and already monetized (Linnworks $449/mo, Sellbrite, Cin7). Agentic channel is live and compounding. |
| 1–5 person team can build this | ✅ | Two people, 3–4 months. |
| Launchable with <$50K / ₹40L | ✅ | Two founders, cloud bill, Shopify dev account. Well under $50K. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | **15**/20 | Real, recurring, expensive — 40% of oversold customers never return, and cancellation cascades hit channel standing too. Docked because for most merchants *today* this is a slow leak, not yet a fire. The fire arrives when agentic volume does. I'm selling a seatbelt slightly before the crash. |
| Demand evidence | 15 | **10**/15 | Strong evidence for the *component* pains: oversell is documented at 2–5% on batch sync, incumbents charge real money to fix it, agent conversion at 5–10× is well-sourced. But I found **zero merchants publicly complaining about an agent-driven oversell specifically.** That's the honest gap: I'm triangulating a problem that is arriving, not one that's already screaming. Anyone scoring this 13+ is reading their own thesis back to themselves. |
| Build feasibility | 15 | **11**/15 | Integrations off-the-shelf. Real-time concurrent commit path and stock inference need genuine engineering discipline. Two people, 3–4 months. |
| Distribution clarity | 15 | **12**/15 | The oversell-complaint scrape is a genuinely differentiated list — the prospect's own customers wrote my cold email for me. Docked 3 because reply rate is projected, not tested, and the agency channel takes time to warm. |
| Revenue mechanics | 15 | **12**/15 | $99/mo against a problem costing hundreds per incident is an easy sell, and 840 customers to $1M is a modest ask. Docked because $5M leans on agentic volume growth I don't control, or on the delivery-promise expansion landing. |
| Time to first revenue | 10 | **8**/10 | The scanner ships in weeks and generates a list immediately. Realistically 6–10 weeks from launch to first paid, because SMB DTC buys fast and there's no procurement. |
| Defensibility | 10 | **5**/10 | Honest answer: **this is thin, and it's the weakest axis.** No moat at month 3 — the decisioning logic is copyable and Shopify could ship a native "smart buffer" and vaporize the low end. The only real moat is the cross-merchant drift dataset (how badly does a given SKU class's counted stock diverge from system stock?), which compounds but takes a year to matter. Execution-and-focus moat, with a data moat that *might* arrive. Do not kid yourself that it's more. |
| **Total** | **100** | **73**/100 | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy`

This is a real-time decisioning system with a modelling core and concurrency correctness that must be right or the product hurts people. It needs an engineer who has built a low-latency service before and will not hand-wave the reservation semantics. The GTM is scrape-and-email — the technical founder can run it alone.

### Key assumptions to validate (3–5)

1. **Assumption:** Agentic order flow is already large enough at $1M–$20M GMV brands to make oversell a *felt* problem in 2026, not 2028. **How to test:** Interview 30 Shopify DTC ops leads. Ask for the exact number: what share of last month's orders came via ChatGPT Shopping / Google AI Mode, and what's your cancellation rate on those versus web? If agentic is <2% of orders across the board, I'm early and should say so out loud.
2. **Assumption:** Merchants will let a third party sit on the commit path and *decline sales on their behalf*. **How to test:** This is the scariest assumption in the document. Put it in the cold email verbatim — "we will sometimes tell the agent you're out of stock when you technically aren't" — and measure whether that kills the reply rate or raises it. Better to find the flinch in week 2 than month 6.
3. **Assumption:** The oversell-complaint scrape produces a list that converts. **How to test:** Build the list of 1,500, send 200 exposure reports, measure reply rate. Kill the channel below 4%.
4. **Assumption:** Shopify doesn't ship this natively within 12 months. **How to test:** Can't be tested, only monitored. Watch Shopify Editions releases. A native smart-buffer feature is the single most likely thing that kills this business.

### Risk flags

1. **Market timing — the central risk.** I am building for a fire that has started smoking but has not yet caught. Every signal says the agentic channel is compounding fast (393% YoY traffic, 5–10× conversion), but "fast-growing" and "big enough that a $3M-GMV brand feels it monthly" are different claims, and I can only source the first one. If agentic volume stays under a couple of percent of orders through 2027, this is a vitamin and it will churn at a rate that ends the business. This is why demand scored 10 and not 14, and it's the thing to test first.
2. **Platform dependency — doubled.** Dependent on Shopify's API *and* on the agentic protocols staying open. Shopify shipping a native buffer feature is an extinction event for the low tier. Google folding stock-confidence decisioning into Merchant Center is an extinction event for the whole thing. Both are plausible, and neither is in my control.
3. **The product can hurt the customer.** Every decline is a real lost sale. Tune too conservative and I cost the merchant more revenue than I save them — and unlike the cancellations I prevent, the sales I lose them are *invisible to me and visible to them* in their revenue line. The ledger has to be brutally honest about both sides or the first churn wave comes from customers who think I cost them money. This is a genuine product-design trap, not a footnote.
4. **Defensibility is thin.** Restating it because it matters: a competent competitor rebuilds the v1 in a quarter. The bet is on getting to the drift dataset and the agency channel before they do.

## 14. Structured verdict

```
Score:                  73/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder who has shipped a low-latency
                        decisioning service; ecommerce ops empathy essential.
                        Solo-capable, better as a pair.
Time to revenue:        6–10 weeks from launch (scanner lead-magnet shipping
                        in week 3 of build)
Capital to launch:      $15–25K (two founders' cloud + tooling; no ad spend
                        in the first 100)
Top 3 assumptions to validate first:
  1. Agentic orders are already ≥2% of order volume at $1M–$20M GMV DTC brands
     — 30 interviews, ask for the actual number, not a vibe
  2. Merchants accept a third party declining sales on their behalf
     — put it verbatim in the cold email, watch the reply rate
  3. The oversell-complaint list converts at ≥4% reply
     — build 1,500, send 200, count
Kill criteria:
  - Abandon if 30 merchant interviews show agentic orders are <1% of volume
    AND merchants can't name a single agent-driven cancellation
  - Abandon if <4% reply on 200 personalized exposure reports
  - Abandon if Shopify ships native predictive stock buffering before v1
  - Abandon if pilot merchants' declined-sale revenue exceeds prevented-
    cancellation value over an 8-week measured window — that means the
    product is net-negative and no amount of tuning is likely to save it
```

## 15. Next step — 1-week validation sprint

The whole week is pointed at the one question that decides this: **is the fire lit yet?**

- **Day 1–2:** Build the oversell-complaint scrape. Trustpilot + Reddit + public review pages, 90-day window, Shopify DTC brands only. Target: a list of 300+ brands with ≥3 oversell-cancellation complaints. If I *cannot* build this list, the entire GTM thesis is dead on day two and I've saved myself four months. Cheap, brutal, first.
- **Day 3–4:** Send 100 personalized exposure reports from that list. Include assumption #2 in plain language — "we will sometimes decline a sale on your behalf" — because I want the flinch now, not in month six. Simultaneously, book and run 15 of the 30 merchant interviews, and ask exactly one question that matters: *what percentage of last month's orders came through ChatGPT or Google AI Mode, and what was your cancellation rate on them?*
- **Day 5:** Decide on numbers, not feelings.

**Go if:** ≥4% reply on the 100 reports, AND ≥8 of 15 interviewed merchants report agentic orders ≥2% of volume, AND ≥5 of them can describe a specific cancellation that traced back to an agent-sourced order.

**No-go if:** merchants across the board report agentic volume under 1% and cannot name a single agent-driven cancellation. That result means the timing thesis is wrong — the channel is real but not yet load-bearing — and the correct move is to shelve this and re-run the same fifteen interviews in six months, when the answer will have changed. This is a **timing** bet, and the sprint is designed to date the fire, not to admire the smoke.
