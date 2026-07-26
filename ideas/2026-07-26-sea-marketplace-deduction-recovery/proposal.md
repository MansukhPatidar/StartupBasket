---
title: "TindaBalik — deduction-recovery desk for Shopee sellers"
slug: sea-marketplace-deduction-recovery
date: 2026-07-26
category: RetailTech / SEA
complexity: Medium
score: 74
verdict: GO
confidence: Medium
oneLiner: "Audits every SEA marketplace settlement, files the claim for wrongful deductions, and takes a cut of what it recovers."
tags:
  vertical: Retail
  model: SaaS
  geography: SEA
  secondary: [Marketplace-native, Multilingual, AI-agent, SMB, Performance-based]
axes:
  problem: 16
  demand: 12
  build: 11
  distribution: 12
  revenue: 12
  time: 7
  defensibility: 4
founderFit: [technical-heavy, operations-heavy]
featured: false
---

# TindaBalik — deduction-recovery desk for Shopee & TikTok Shop sellers



## 1. One-liner

Audits every SEA marketplace settlement, files the claim for wrongful deductions, and takes a cut of what it recovers.

## 2. Trend signal — why now?

SEA marketplace sellers are getting quietly bled by the deduction stack, and the volume of leakage just exploded because of livestream commerce.

- Effective take-rate across Shopee/TikTok/Lazada has climbed to **20–25% of post-discount sales** in 2025–2026, and SEA commission rates are up **more than 10 percentage points since TikTok Shop entered Indonesia in 2021** ([digitalinasia](https://digitalinasia.com/shopee-lazada-tiktok-shop-fees-2026/), [shiply.ph](https://shiply.ph/blogs/guides/shopee-vs-lazada-vs-tiktok-shop-fees-philippines)).
- Payouts routinely don't match sales: TikTok "frequently applies fee corrections, clawbacks, and promotional adjustments to future settlements — not the one where the original sale occurred," producing zero-dollar deposits when it claws back from the next cycle ([signalytics](https://signalytics.ai/tiktok-shop-order-issues/), [settlebridge](https://settlebridge.app/why-payouts-dont-match)). Sellers also report **TikTok applying free-shipping and discounts without authorization, with the seller eating the cost via payout deductions**.
- Livestream commerce runs at **5×–20× baseline volume in 30–90 minute surge windows** with elevated impulse-return rates — every order is another place a wrong shipping/weight charge or clawback can hide ([locus.sh](https://locus.sh/blogs/live-stream-surge-social-commerce-fulfillment-southeast-asia/)).
- The recovery model is already proven next door: **Amazon FBA reimbursement is a mature market with 10+ players charging a standard 25% of recovered funds, no upfront cost** ([smartscout](https://www.smartscout.com/blog/top-10-amazon-fba-reimbursement-services)). Nobody runs this playbook on Shopee/TikTok.

The tools that exist in SEA — BigSeller (free), SmartB, SiteGiant — **reconcile and flag** the discrepancy. SiteGiant will even show you the "overcharged shipping fee" and a "success claimed amount" column. But they hand you a report and leave you to file the claim yourself, manually, per order, per platform. That last mile — draft the claim, submit it, chase it, book the recovered cash — is nobody's product.

Provenance:
  - Signal 1 (Demand): SEA take-rate at 20–25%, payouts don't match sales, unauthorized free-shipping deductions, wrong-period clawbacks — [signalytics](https://signalytics.ai/tiktok-shop-order-issues/) / [smartb](https://www.smartb.co/shopee-payout-fees-breakdown-explained/) — 2026-07-26
  - Signal 2 (Feasibility): Marketplace settlement APIs already pulled by SiteGiant/BigSeller; SiteGiant auto-computes overcharged shipping; cheap multilingual LLM drafts per-platform claims — [sitegiant](https://sitegiant.ph/payment-reconciliation/) — 2026-07-26
  - Signal 3 (Economic): FBA reimbursement is a proven 25%-of-recovery market with 10+ funded players; SEA seller-finance tooling actively shipping — [smartscout](https://www.smartscout.com/blog/top-10-amazon-fba-reimbursement-services) — 2026-07-26
  Category: Geographic arbitrage

## 3. The opportunity

The Amazon world figured out years ago that platform accounting leaks money and that sellers won't chase it themselves — so a whole category of performance-based recovery services grew up around it (GETIDA, Seller Investigators, SPS Revenue Recovery), all taking ~25% of what they claw back, all Amazon-only.

SEA has the same leak, worse (higher take-rates, more clawbacks, livestream chaos, multi-platform) — but the seller tooling stopped at "here's a reconciliation report." BigSeller conditioned the whole market to expect reconciliation for free, so everyone built free matching and nobody built the hard, valuable part: **actually recovering the cash.**

The incumbent to beat isn't a company — it's the seller's own spreadsheet and their resignation to "that's just the platform tax." SiteGiant/SmartB/BigSeller are complements, not competitors: they detect, we recover. The 10× is going from "you can see you were overcharged RM4,200 this month" to "we already filed 63 claims and RM2,900 landed back in your wallet — here's your cut of what we got."

## 4. Target market

- **Primary customer:** Owner-operators of Shopee / TikTok Shop / Lazada stores in the Philippines, Malaysia, and Indonesia, doing roughly **$5K–$80K monthly GMV**, 1–5 staff, mixing livestream selling with regular listings. The ones big enough to bleed real money (a 1–2% recovery on $40K GMV/mo is $400–800/mo found) but too small to hire a finance person to chase it.
- **Why they buy — in their words:** "My payout never matches my orders." "Where did my money go?" "TikTok deducted free shipping I never turned on." "The commission got adjusted after the sale." They already know they're being overcharged; they just have no time to fight order-by-order across three platforms.
- **Rough TAM reasoning:** SEA has millions of active marketplace sellers; the slice doing >$5K/mo across PH/MY/ID is comfortably in the low hundreds of thousands. Capturing a few thousand of them at performance pricing clears $5M ARR. This is a wallet-share play on money that already exists, not net-new spend.
- **Why now for them:** Livestream pushed order counts up 5–20×, take-rates crossed 20%, and margins are compressing "disguised as growth" — the leakage is now large enough that recovery is worth the mental overhead of connecting an account, especially when it's free-if-we-fail.

## 5. Product sketch (MVP)

- Connect Shopee / TikTok Shop / Lazada seller accounts (OAuth / seller-center API) in a few clicks — no spreadsheet uploads.
- **Deduction audit engine:** every settlement is scanned for the known wrongful-deduction patterns — overcharged/weight-discrepancy shipping, unauthorized free-shipping charges, promo subsidies the seller didn't opt into, wrong-period clawbacks, refund double-deductions.
- **Claim drafter:** for each flagged item, auto-generate the platform-specific dispute in the seller's language (Tagalog / Bahasa / English), pre-filled with the order IDs, amounts, and the exact policy the platform violated.
- **File & track:** submit through the platform's claim path where an API exists; where it's manual, produce a one-tap-ready packet and track the claim to resolution.
- **Recovery ledger:** running dashboard of money flagged → claimed → recovered → your cut, per store, per platform.
- **Weekly "you were overcharged" digest** on WhatsApp/email — the hook that keeps sellers engaged even before they've recovered a peso.
- Pricing shown as **you keep 75–85% of everything we recover; if we recover nothing, you pay nothing.**

## 6. AI angle — what's load-bearing

AI does two jobs that make this a product instead of a services shop:

1. **Classification at scale.** Each settlement line has to be judged: is this deduction legitimate (real commission) or wrongful (weight overcharge, unauthorized free-shipping, mis-timed clawback)? The rules differ per platform and change constantly. An LLM + a maintained rule library classifies thousands of noisy, inconsistently-labeled settlement lines per seller per week. Remove it and you're back to a human reading statements — the exact task sellers already refuse to do.
2. **Claim drafting in local language, per platform.** Turning "order #X was charged RM12 shipping but buyer paid RM4, policy Y says the difference is claimable" into a submitted, correctly-worded dispute in Tagalog or Bahasa — at volume — is generative work. Without it, you're not filing 63 claims a week; you're filing 3.

If you remove the AI, this collapses into a slow manual bookkeeping service that can't scale past a handful of clients. The AI is the reason one small team can run recovery for thousands of sellers.

## 7. Localization angle

This is a SEA-native play, not a translated global tool. The whole wedge is local:

- **Language:** claims and digests in Tagalog, Bahasa Indonesia, Bahasa Malaysia, English — the language the seller and the platform's support actually use.
- **Platform-specific dispute rules:** Shopee, TikTok Shop, and Lazada each have different fee structures, claim windows, and overcharge policies, country by country. That rulebook *is* the moat.
- **Distribution:** WhatsApp-first digests; sellers live in WhatsApp and platform seller groups, not email.
- **Pricing psychology:** performance-based (% of recovery) works where a $30–50/mo subscription would get ignored by a seller who's already conditioned to free reconciliation tools.

A generic Western recovery tool (Amazon-only, English, USD) cannot serve this market. That's the arbitrage.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** performance-based — **we take 15–25% of funds recovered**, seller keeps the rest, no upfront and no monthly. Directly benchmarked to the FBA-recovery standard of 25%. Undercut incumbents' psychology by leading with "you keep 80%."
- **ACV:** assume a target seller does $30K/mo GMV, ~1.5% of GMV is recoverable wrongful deductions = ~$450/mo found; we recover ~60% of that = ~$270/mo recovered; our 20% cut = **~$54/mo → ~$650 ACV/year.** Bigger sellers scale linearly.
- **Rough math to $1M ARR:** ~1,540 active sellers at $650 ACV. Very reachable within PH+MY+ID.
- **Rough math to $5M ARR:** ~7,700 sellers, or a mix of a smaller base with larger livestream sellers (a $100K/mo store is ~$180/mo cut → $2,160 ACV, so ~2,300 of those). Add Vietnam + Thailand for headroom.
- **Expansion path:** move from recovery-only to a paid "leak-prevention" tier (alerts before you get overcharged, auto-appeal of unauthorized free-shipping, margin dashboards) at a flat monthly on top of the recovery cut — turning a spiky performance revenue into a recurring base.

## 9. Go-to-market wedge — first 100 customers

- **Seller Facebook/WhatsApp groups:** SEA marketplace sellers cluster in huge, active FB groups (Shopee/TikTok seller communities per country) — the exact overcharge-shipping-claim threads showing up in [FB group posts](https://www.facebook.com/groups/614751765653533/posts/2064933367302025/). Post a "we found RM X overcharged for 5 sellers this week, free audit" offer; performance pricing removes all buyer risk.
- **Free reverse-audit as the hook:** connect an account, we show you exactly how much you were wrongfully deducted last 90 days for free. The number itself sells — it's their own money on a screen. Convert to "let us file the claims" with one click.
- **Livestream-seller creators:** partner with 3–5 mid-tier SEA livestream sellers who already train other sellers; a "here's how I clawed back ₱X" case study is native content their audience wants.
- **Reconciliation-tool adjacency:** SiteGiant/BigSeller users already know they're overcharged (their reports say so) but don't file. Target that exact frustrated cohort — they're pre-educated on the pain and one step short of the fix.

The first 100 come from one country's biggest seller FB group + the free reverse-audit hook. That's a 2–4 week sprint, not a channel guess.

## 10. Build complexity — justification

**Medium.** Off-the-shelf: marketplace seller APIs (already pulled by SiteGiant/BigSeller, so the surface is known-feasible), LLM for classification + multilingual claim drafting, standard web stack, WhatsApp Business API. The custom work is the maintained per-platform-per-country **deduction rule library** and the claim-submission flows (some API, some semi-manual packet generation), plus handling settlement data that's messy and inconsistently formatted. A pair can ship a single-platform, single-country v1 (Shopee PH, recovery-only) in ~10–14 weeks; multi-platform/multi-country is the scaling grind, not a v1 blocker.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Filing legitimate overcharge claims on the seller's own behalf via official platform channels. No scraping of buyers, no ToS-hostile behavior. |
| Ethical — no harm / dark patterns | ✅ | Recovers money the seller is genuinely owed; performance pricing aligns incentives; nothing hidden. |
| Market exists (evidence above) | ✅ | Proven demand + proven recovery model next door (FBA). |
| 1–5 person team can build this | ✅ | Pair for v1, small team to scale platforms/countries. |
| Launchable with <$50K / ₹40L | ✅ | API access + inference + WhatsApp; no capex. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | Real, recurring (every settlement), money-losing pain sellers already complain about loudly. Just short of hair-on-fire because they've resigned to it as "platform tax." |
| Demand evidence | 15 | 12/15 | Multiple independent signals + a proven parallel market (FBA recovery at 25%). Strong. Docked slightly: SEA sellers' willingness to *actively pay for recovery* (vs expect it free) is inferred from Amazon, not yet directly observed in SEA. |
| Build feasibility | 15 | 11/15 | Known-feasible APIs + LLM, but the per-platform rule library and messy settlement data are real engineering; not a 4-week solo build. |
| Distribution clarity | 15 | 12/15 | Named channels (seller FB/WhatsApp groups), zero-risk performance offer, free-audit hook. Conversion of "flagged" → "let us file" is the uncertainty. |
| Revenue mechanics | 15 | 12/15 | Pricing benchmarked hard to FBA standard; math to $1M is a few thousand sellers. Risk: recovery volume per seller could be lower than the 1.5%-of-GMV assumption. |
| Time to first revenue | 10 | 7/10 | Performance model = first recovered dollar can come weeks after launch once claims resolve, but claim resolution has platform-side lag. |
| Defensibility | 10 | 4/10 | Rule library + local claim flows + workflow lock-in are soft moats; a well-funded reconciliation incumbent (BigSeller/SiteGiant) could bolt recovery on. Platform dependency is a real risk. |
| **Total** | **100** | **74/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` (API integrations + LLM classification pipeline), `operations-heavy` (maintaining per-platform claim rules and handling semi-manual claim flows). A domain advisor who's run a SEA marketplace store is a strong plus.

### Key assumptions to validate (3–5)

1. **Assumption:** Wrongful/recoverable deductions average ~1–2% of GMV per seller. **How to test:** run free reverse-audits on 20–30 real sellers' last-90-days settlement data across PH/MY/ID; measure recoverable % distribution.
2. **Assumption:** Platforms actually honor these claims at a meaningful rate when well-drafted. **How to test:** file 50 real claims manually across Shopee/TikTok/Lazada; measure approval rate and payout lag before building automation.
3. **Assumption:** Sellers will connect their account and let us file, given performance pricing. **How to test:** offer the free audit to a seller FB group; measure connect rate and "yes, file it" conversion.
4. **Assumption:** Marketplace seller APIs expose enough settlement granularity to classify deductions. **How to test:** technical spike against Shopee PH + TikTok Shop APIs before committing.

### Risk flags

1. **Platform dependency (high):** platforms can change fee/claim policies, restrict API access, or tighten claim windows — they have no incentive to make overcharge recovery easy. This is the top risk.
2. **Recovery-rate uncertainty:** if platforms reject most claims or recoverable % is <0.5% of GMV, the performance model doesn't generate enough revenue per seller.
3. **Incumbent bolt-on:** BigSeller/SiteGiant already have the data pipe and seller base; if they add a recovery loop, the moat is thin. Speed + local claim-drafting depth is the only defense.
4. **Market timing on willingness-to-pay:** SEA sellers are conditioned to free tools; performance pricing mitigates this but the behavior is unproven locally.

## 14. Structured verdict

```
Score:                  74/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder + SEA-marketplace-seller domain advisor
Time to revenue:        8–14 weeks (build) + platform claim-resolution lag
Capital to launch:      ₹6–10 lakh ($7–12K)
Top 3 assumptions to validate first:
  1. Recoverable deductions ≈1–2% of GMV — free reverse-audit on 20–30 real sellers
  2. Platforms honor well-drafted claims at a workable rate — file 50 manual claims first
  3. Sellers connect + say "file it" under performance pricing — FB-group free-audit test
Kill criteria:
  - Abandon if <0.5% of GMV is recoverable across the 20–30 audited sellers
  - Abandon if manual claim approval rate is <30% across the 50 test claims
  - Abandon if a reconciliation incumbent ships a performance-based recovery loop before your v1
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Technical spike — connect one Shopee PH and one TikTok Shop test/real account, confirm the settlement API exposes per-order fee/shipping/clawback granularity fine enough to classify deductions.
- **Day 3–4:** Recruit 8–10 real sellers from one country's biggest seller FB group; run a free reverse-audit on their last 90 days; hand each a number: "you were wrongfully deducted ₱X."
- **Day 5:** Manually file 10–15 of the strongest claims and measure two things: (a) how many sellers said "yes, file it" when shown their number, and (b) early platform response. **Go if ≥40% of audited sellers had ≥1% recoverable GMV AND ≥50% said "file it."** No-go if the recoverable pool is thin or sellers shrug at their own number.

The falsifiable result: a distribution of recoverable-% across real sellers and a real conversion rate on "file it" — not vibes.
