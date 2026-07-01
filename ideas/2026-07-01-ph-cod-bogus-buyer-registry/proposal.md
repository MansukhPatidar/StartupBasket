---
title: "Tindig — buyer-risk registry for Philippine COD live sellers"
slug: ph-cod-bogus-buyer-registry
date: 2026-07-01
category: Retail / Philippines Social-Commerce Sellers
complexity: Medium
score: 72
verdict: GO
confidence: Medium
oneLiner: "Scores every COD buyer before a Filipino live seller ships, so bogus orders and joy reservers stop eating shipping money."
tags:
  vertical: Retail
  model: SaaS
  geography: SEA
  secondary: [Social-commerce, COD-native, Facebook-first, Fraud-scoring, Network-data, SMB]
axes:
  problem: 16
  demand: 12
  build: 11
  distribution: 12
  revenue: 11
  time: 7
  defensibility: 3
founderFit: [technical-heavy, operations-heavy]
featured: false
---

# Tindig — buyer-risk registry for Philippine COD live sellers

## 1. One-liner

Scores every COD buyer before a Filipino live seller ships, so bogus orders and joy reservers stop eating shipping money.

## 2. Trend signal — why now?

Philippine social commerce is a $28.4B market in 2025, growing ~14.5% CAGR, and live selling is now considered a key growth driver by 74% of local businesses. Facebook sits at 94.9% penetration; TikTok Shop PH did $6B GMV in FY2025 (+53% YoY). Meanwhile **~60% of Philippine e-commerce transactions are cash-on-delivery**, and COD in Southeast Asia carries a **15–20% return-to-origin (RTO) rate** — every returned parcel costs the seller forward freight, return freight, packaging, and tied-up stock.

The homegrown workaround is telling: sellers maintain community "joy reserver / bogus buyer" blacklists — literally spreadsheets sold on Carousell and Facebook groups you Ctrl+F before shipping. That's a manual, unscalable, and legally dangerous fix (public name-shaming carries real defamation risk under PH law — lawyers are writing explainers about it). India already solved the equivalent problem for website checkouts: GoKwik raised $70.5M and ClickPost built a whole RTO business scoring 180M+ shoppers. **None of that tooling touches a Facebook Live or manual-COD order** — it plugs into Shopify-style checkouts that PH social sellers don't use.

Provenance:
  - Signal 1 (demand): PH sellers maintain manual "joy reserver / bogus buyer" Ctrl+F blacklists sold on Carousell + FB groups; name-shaming carries defamation risk — https://www.lawyer-philippines.com/articles/defamation-risks-in-posting-alleged-bogus-buyers-online-philippines & https://www.carousell.ph/q/joy-reserver-bogus-buyer/ — 2026-07-01
  - Signal 2 (feasibility): SEA COD RTO runs 15–20%; India RTO-scoring (GoKwik $70.5M, 150+ features; ClickPost) proves the model works but only for website checkouts, leaving social-commerce COD unserved — https://dazeinfo.com/2024/06/05/over-25-of-cod-orders-fail-a-major-dent-in-indias-e-commerce-business/ & https://www.gokwik.co/blog/backed-by-data-driven-by-ai-manage-return-to-origin — 2026-07-01
  - Signal 3 (economic): PH social commerce $28.4B (2025), live selling a growth driver for 74% of businesses; order-mgmt tools like Page365 already charge ₱1,290–2,990/mo and sellers pay — https://www.globenewswire.com/news-release/2026/06/22/3315521/28124/en/Philippines-Social-Commerce-Market-Intelligence-Report-2026-How-Video-Commerce-and-Creator-Led-Strategies-are-Redefining-Social-Selling-in-the-Philippines.html & https://www.page365.ph/ — 2026-07-01
  Category: Geographic arbitrage

## 3. The opportunity

RTO/COD-risk scoring is a proven, funded category — but every incumbent (GoKwik, ClickPost, Shipway) is built for owned-website checkouts. The Philippine reality is different: the seller's "checkout" is a Facebook Live comment ("mine!"), a Messenger thread, or a TikTok Live, and the seller books the courier (J&T, Ninja Van, Flash) **manually or through an order-management tool like Page365/BigSeller**. Those order tools do invoicing, inventory, and shipping-label printing — but **none of them score the buyer**. The seller is flying blind at the exact moment they hand a ₱120 forward-freight parcel to a courier for a buyer who may never pay.

The 10× move: intercept the order *before the shipping label is printed*, score the buyer against a shared network (phone number, name, address fingerprint, past RTO behavior contributed by other sellers), and give a red/amber/green call plus a suggested action ("require downpayment," "confirm via OTP," "ship"). This kills the defamation-risky manual blacklist and turns a private spreadsheet into a compounding network dataset.

## 4. Target market

- **Primary customer:** Filipino micro/SMB online sellers doing COD volume through Facebook Live, Messenger, TikTok Live, and Shopee/Lazada — roughly 50–2,000 orders/month, 1–8 staff. The exact segment Page365 targets with its "Solo" and "ProLive" tiers.
- **Why they buy (their words):** "delivery failed attempt ang potek.. Buyer not on location daw" and "Nagmine ng dresses during my first ever live, ss pa kunwari hindi naman sinend" (mined items during a live, faked a screenshot, never sent). Every RTO is real cash out the door — forward freight + return freight + repacked stock.
- **Rough TAM reasoning:** PH social commerce is $28.4B with Facebook at 94.9% penetration and live selling a growth driver for 74% of businesses. Even a conservative 200,000–500,000 active COD sellers doing meaningful volume is the serviceable base; capturing 5,000–15,000 paying at ₱600–1,500/mo is a $1M–$3M ARR business.
- **Why now for them:** COD volume is exploding with live selling, RTO losses scale linearly with it, and the manual blacklist workaround just got flagged as legally risky. The pain is now large enough and frequent enough (weekly, per-live) to pay to fix.

## 5. Product sketch (MVP)

- **Buyer risk check:** paste or auto-import a buyer's phone/name/address → instant red/amber/green score with reasons ("3 prior RTOs reported," "address flagged by 2 sellers," "new to network").
- **Live-selling capture:** a lightweight way to pull buyer handles/comments from a Facebook/TikTok live session and batch-score them before booking couriers.
- **Shared network contribution:** one-tap "mark as paid / RTO'd / bogus" after each order — this is what feeds the score and compounds. Contributions are structured data, not public name-shaming (defamation-safe by design).
- **Suggested action per order:** downpayment link, OTP confirmation, or ship-with-confidence — not just a score but a next step.
- **Courier-booking guardrail:** integrates with / sits beside Page365/BigSeller-style flows to warn before a label is printed on a red buyer.
- **Seller dashboard:** RTO rate trend, pesos saved, worst repeat offenders, downpayment conversion.

## 6. AI angle — what's load-bearing

AI does the entity-resolution and risk-scoring that a spreadsheet can't: matching messy Filipino names, aliases, misspelled addresses, and recycled phone numbers across sellers to link the same bad buyer despite deliberate obfuscation (bogus buyers change one letter or swap a nickname). It scores RTO likelihood from thin, noisy signals — exactly the "150+ features" pattern GoKwik uses, adapted to social-commerce identifiers instead of checkout cookies. Remove the AI and you're back to a Ctrl+F spreadsheet that any determined bad buyer defeats by changing their display name. The fuzzy cross-seller matching is the product.

## 7. Localization angle

This is a localization play end to end. It only works because of PH-specific realities: COD dominance (~60%), Facebook/TikTok live as the storefront, courier-books-by-seller logistics (J&T, Ninja Van, Flash), the existing "joy reserver / bogus buyer" folk taxonomy, and PH defamation law that makes the current manual fix dangerous. Pricing is peso-native (₱600–1,500/mo, benchmarked against Page365's ₱1,290–2,990). A generic global RTO tool cannot enter here — it assumes a website checkout that doesn't exist for this seller. The same shape later ports to Indonesia (QRIS/COD, similar RTO band) and Vietnam.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** ₱699/mo Solo (up to ~300 scored orders), ₱1,499/mo Pro (unlimited + live capture + team seats). Usage-metered overage on high-volume live sellers.
- **ACV:** ~₱12,000–15,000/yr (~$210–265) blended.
- **Rough math to $1M ARR:** ~4,500 sellers × ₱1,100/mo × 12 ≈ ₱59.4M (~$1.05M). Well within a 200k–500k seller base.
- **Rough math to $5M ARR:** ~18,000 PH sellers at blended ₱1,300/mo, OR ~8,000 PH + expansion into Indonesia's larger COD base. Requires the network dataset to become the default pre-ship check.
- **Expansion path:** per-seat team pricing for bigger live-selling operations, a "verified buyer" downpayment/OTP payment take-rate, and eventually selling anonymized RTO-risk signals to couriers who also eat failed-delivery cost.

## 9. Go-to-market wedge — first 100 customers

- **Infiltrate the existing blacklist communities.** There are named Facebook groups and Carousell listings where sellers already trade "bogus buyer" lists. Offer free lifetime accounts to the top 50 admins/contributors in exchange for seeding their lists — that bootstraps the network dataset *and* the first evangelists in one move.
- **Live-seller creator partnerships:** 10–20 mid-tier PH live sellers (dozens of lives/month) get free Pro + a "protected by Tindig" overlay; their audience of other resellers is the ICP.
- **Ride Page365/BigSeller's user base:** these sellers already pay for order tools and feel the exact pain. Run a targeted FB-group + TikTok campaign: "book couriers less. lose less to bogus buyers." Demo = paste a known-bad number, watch it go red.
- **OnlineJobs.ph / VA channel:** many PH sellers use VAs to book couriers; sell the VA the time-saver of batch-scoring a live's buyers.

Target: 100 paying in the first 90 days from the blacklist-community seed + creator partnerships alone.

## 10. Build complexity — justification

Medium. The scoring UI, seller dashboard, and contribution loop are standard web + off-the-shelf LLM/embedding APIs for fuzzy entity resolution. The hard parts are (a) the cold-start network dataset — solved by the blacklist-community seeding wedge — and (b) reliable capture of buyer identifiers from Facebook/TikTok lives without violating platform terms, which needs careful, semi-manual ingestion at v1 rather than deep API integration. A pair could ship a credible v1 in 10–14 weeks.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Structured risk data + downpayment nudges are legal; must avoid public name-shaming (defamation) — the product is designed to replace that risky behavior, not extend it. |
| Ethical — no harm / dark patterns | ✅ | Needs a dispute/appeal path for buyers wrongly flagged; scores must be advisory, not a public shame list. |
| Market exists (evidence above) | ✅ | Manual blacklists, RTO loss data, funded India analogs, paying incumbents on adjacent tools. |
| 1–5 person team can build this | ✅ | Web app + LLM APIs + ingestion; pair in ~3 months. |
| Launchable with <$50K / ₹40L | ✅ | Off-the-shelf stack; main cost is founder time + seeding incentives. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | Real cash loss every returned COD parcel, felt weekly per live; sellers already spend effort on manual fixes. Not quite hair-on-fire because many absorb it as "cost of doing business." |
| Demand evidence | 15 | 12/15 | Multiple independent signals: community blacklists, Carousell-sold lists, verbatim complaints, funded India analogs, active OnlineJobs.ph research posting. Strong but no direct PH competitor charging for *this exact thing* yet. |
| Build feasibility | 15 | 11/15 | Standard stack; cold-start + platform-compliant live capture are the friction. |
| Distribution clarity | 15 | 12/15 | Named communities and named incumbent user bases to poach; conversion from "free blacklist" to "paid tool" is the uncertainty. |
| Revenue mechanics | 15 | 11/15 | Peso pricing benchmarked to Page365; ACV modest, needs volume. Path to $1M clear, $5M needs regional expansion. |
| Time to first revenue | 10 | 7/10 | Freemium-to-paid; first paying sellers within ~6–8 weeks of seeding, but network value takes time to compound. |
| Defensibility | 10 | 3/10 | The network dataset is the only moat and it's slow to build; incumbents (Page365/BigSeller) could bolt this on. First-mover + community lock-in is the bet. |
| **Total** | **100** | **72/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` (fuzzy entity resolution, ingestion) · `operations-heavy` (community seeding, courier/creator relationships)

### Key assumptions to validate (3–5)

1. **Assumption:** PH live sellers will pay ₱699–1,499/mo to cut RTO losses. **How to test:** pre-sell to 30 sellers in the blacklist FB groups with a Stripe/GCash link before building; need ≥8 to commit.
2. **Assumption:** enough cross-seller overlap exists that a shared network meaningfully catches repeat bad buyers. **How to test:** collect 10 sellers' existing lists, measure duplicate-buyer overlap; need >15% overlap to prove network value.
3. **Assumption:** buyer identifiers can be captured from lives without tripping Facebook/TikTok platform enforcement. **How to test:** run a 2-week semi-manual capture pilot with 5 sellers; confirm no account actions.
4. **Assumption:** the tool reduces measured RTO for a pilot seller. **How to test:** 4-week A/B on one seller's orders (scored vs. unscored), target ≥20% RTO reduction on flagged orders via downpayment nudge.

### Risk flags

1. **Platform dependency:** capturing buyer data from Facebook/TikTok lives may violate platform terms; over-reliance on scraping is fragile. Mitigate with seller-initiated, consent-based ingestion.
2. **Legal/defamation risk:** a shared "bad buyer" registry can itself become a defamation vector if scores leak or are used publicly. Must stay advisory, private, and appealable.
3. **Cold-start / network dependency:** value is near-zero until the dataset has coverage; a weak seed kills it. The whole bet rests on the blacklist-community wedge working.
4. **Incumbent bolt-on:** Page365/BigSeller could add buyer scoring; speed and dataset lead are the only defense.

## 14. Structured verdict

```
Score:                  72/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder + PH-market operator who can work the seller communities
Time to revenue:        6–10 weeks (pre-sell + freemium-to-paid)
Capital to launch:      ₱2.5–5 lakh equivalent / $5–10K (mostly time + seeding incentives)
Top 3 assumptions to validate first:
  1. Sellers pre-commit at ₱699–1,499/mo (30-seller pre-sell, need 8 yes)
  2. Cross-seller buyer overlap >15% (merge 10 real blacklists and measure)
  3. Live-capture doesn't trip platform enforcement (2-week 5-seller pilot)
Kill criteria:
  - Abandon if <8 of 30 pre-sell targets commit to pay
  - Abandon if cross-seller buyer overlap is <10% (no network value)
  - Abandon if Facebook/TikTok enforce against the capture method with no compliant alternative
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Join the 5 biggest PH "bogus buyer / joy reserver" Facebook groups and Carousell list sellers. Collect 10 real seller blacklists. Measure duplicate-buyer overlap across them — this is the network-value test.
- **Day 3–4:** DM 30 active live sellers a one-pager + GCash/Stripe pre-order link at ₱999/mo founding price. "Scores your COD buyers before you ship." Count commitments.
- **Day 5:** Go/no-go. **Go only if** ≥8 sellers pre-commit AND cross-seller overlap ≥15%. Anything less = the network doesn't compound and sellers won't pay — pass or reshape.

The result is falsifiable: real peso commitments and a measured overlap percentage, not "sellers seemed interested."
