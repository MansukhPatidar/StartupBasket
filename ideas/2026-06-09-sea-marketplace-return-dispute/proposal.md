---
title: "PushBack — dispute defender for SEA marketplace sellers"
slug: sea-marketplace-return-dispute
date: 2026-06-09
category: Retail / Southeast Asia Marketplace Sellers
complexity: Medium
score: 75
verdict: GO
confidence: Medium
oneLiner: "Catches every Shopee/Lazada/TikTok return claim and files the rule-matched rebuttal before the evidence clock runs out."
tags:
  vertical: Retail
  model: SaaS
  geography: SEA
  secondary: [AI-agent, Marketplace-native, SMB, Multilingual, Compliance-driven]
axes:
  problem: 16
  demand: 12
  build: 11
  distribution: 11
  revenue: 11
  time: 8
  defensibility: 6
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# PushBack — dispute defender for SEA marketplace sellers

## 1. One-liner

Catches every Shopee/Lazada/TikTok return claim and files the rule-matched rebuttal before the evidence clock runs out.

## 2. Trend signal — why now?

Three things converged in the last 12 months, and they all point at the same bleeding wound: SEA marketplace sellers eat returns they could have won.

- **Platforms shifted the cost of returns onto sellers, then raised their cut.** Shopee added a **5% technical support fee** across SG/MY/TH/VN in Feb 2026; effective seller take rates now run **20–25% of post-discount sales**. Every wrongly-granted refund used to be annoying; now it eats a margin that's already half gone.
- **The dispute mechanics are brutal and time-boxed.** Shopee's seller dispute window closes **72h after return delivery**, and evidence must be uploaded **within 1 day or Shopee decides on whatever's there**. TikTok Shop chargeback appeals must be filed **within 7 days with all documents**. Miss the clock — which a one-person shop running 11.11 always does — and you lose by default.
- **The complaints are loud and organic.** Lazada Malaysia sits at **1.9★ across 9,633 reviews**, heavy on refund grievances. Lowyat seller threads are full of empty-box and "felt used" claims with sellers saying *"shopee dont have much protection on seller."*

SEA platform e-commerce hit **US$157.6B GMV in 2025, +23% YoY** (Momentum Works), three platforms own **99%** of it. The pie is huge, the per-transaction squeeze is tightening, and nobody sells sellers a tool to fight back on disputes specifically.

Provenance:
  - Signal 1: SEA MSME sellers bear forced "no-reason" refunds with no bargaining power; Lazada MY 1.9★/9,633 reviews; Lowyat seller empty-box threads — https://focusmalaysia.my/e-commerce-refunds-consumer-friendly-seller-unfriendly/ , https://forum.lowyat.net/topic/4676829/all — 2026-06-09
  - Signal 2: Shopee dispute window 72h / evidence within 1 day; TikTok chargeback appeal 7 days with all docs — https://seller.shopee.sg/edu/article/12348/return-refund-dispute- , https://seller-us.tiktok.com/university/essay?knowledge_id=7989055607670570 — 2026-06-09
  - Signal 3: SEA platform GMV US$157.6B +23% (Momentum Works); Shopee 5% tech fee Feb 2026; take rates climbing to 20–25% — https://thelowdown.momentum.asia/new-report-southeast-asias-platform-ecommerce-reaches-us157-6b-in-2025-with-top-platforms-expanding-share-to-98-8/ , https://digitalinasia.com/shopee-lazada-tiktok-shop-fees-2026/ — 2026-06-09
  Category: Geographic arbitrage

## 3. The opportunity

There is a whole category of US tools — chargeback-defense services like Chargeflow, Signifyd, Riskified — that automatically fight payment disputes for Shopify/Amazon merchants and take a cut of what they recover. **None of them touch the Shopee/Lazada/TikTok dispute flow**, because that flow doesn't run on Visa/Mastercard chargeback rails — it runs on each platform's proprietary seller-dispute UI, with platform-specific evidence rules, deadlines, and reason codes.

The "incumbent" here isn't a competitor — it's the **seller's own manual labor and the platform's default-loss clock.** A solo seller doing 300 orders a month during a mega-sale physically cannot watch every return, read the buyer's reason, dig out the packing photo, and write a rebuttal that cites the right policy clause within 24 hours. So they don't. They eat it. PushBack is the always-on operator that never misses the window and always files the strongest version of the seller's case.

The 10× isn't "better dashboard." It's **recovered money that was otherwise gone**, on a clock no human can beat manually.

## 4. Target market

- **Primary customer:** Small-to-mid SEA marketplace sellers — **20–1,000 orders/month** on Shopee/Lazada/TikTok Shop, in Indonesia, Philippines, Malaysia, Thailand, Vietnam. 1–5 person operations, often the founder + a CS person. Categories with high "not as described" / empty-box exposure: electronics & accessories, beauty, apparel, supplements.
- **Why they buy:** In their words — *"shopee dont have much protection on seller… simply refund to buyer."* They watch refunds get auto-granted on claims they know are false (empty box, "felt used", item-not-received-but-tracking-says-delivered) and feel they have no recourse fast enough to matter.
- **Rough TAM reasoning:** TikTok Shop alone reports 15M+ active sellers globally; SEA's three platforms split a $157.6B market across millions of sellers. Even a narrow slice — sellers doing ≥20 orders/month who feel return pain — is **hundreds of thousands** of viable accounts in SEA. We need ~500–2,000 paying to hit our number.
- **Why now for them:** Margins just got squeezed again (Shopee 5% fee + 20–25% take rates), so the same eaten return now wipes out a bigger share of profit. Pain that was tolerable at a 12% take rate is rage-inducing at 24%.

## 5. Product sketch (MVP)

- **Return-claim watcher** — connects to the seller's Shopee/Lazada/TikTok account and surfaces every return/refund request the moment it lands, with a countdown to the evidence deadline.
- **Auto-triaged "fight or fold" call** — for each claim, AI reads the buyer's stated reason and the order's evidence trail and tells the seller: winnable, weak, or not worth it — so they spend effort only where money is recoverable.
- **Evidence assembler** — pulls the listing description/photos, packing photo/video (if the seller records them), weight/tracking, and prior chat, and packages them to the platform's specific evidence format.
- **Rule-matched rebuttal drafter** — writes the dispute response in the buyer's/platform's language, citing the relevant platform policy clause ("item received not as shipped," "wrong claim"), ready to paste or auto-submit.
- **Deadline guardian** — alerts (and where API allows, auto-files) before the 72h/1-day/7-day windows close. Never-miss-the-clock is the headline promise.
- **Recovery ledger** — tracks disputes raised, won, lost, and money recovered, so the seller sees exactly what PushBack put back in their pocket.
- **Packing-proof nudge** — optional workflow prompting sellers to snap a timestamped pack photo/video per high-value order, so the evidence exists when a claim hits.

## 6. AI angle — what's load-bearing

Remove the AI and this is a spreadsheet with a timer — useless. The AI does three things a human can't do at speed and scale:

1. **Reads and classifies** the buyer's free-text return reason (in Bahasa, Tagalog, Thai, Vietnamese, English-mix) against the platform's actual reason taxonomy and decides whether there's a winnable angle.
2. **Matches evidence to policy** — picks which of the seller's assets actually rebut *this specific* claim and which platform clause to cite. That's the difference between a rejected dispute and a refunded one.
3. **Drafts the rebuttal** in the right language and register, tuned to what each platform's reviewers accept. Multimodal: it reads the packing photo/video and the listing, not just text.

The whole product is "judgment + drafting under a deadline." That's the AI.

## 7. Localization angle

This is fundamentally a SEA-localized play and that's the moat against the US chargeback incumbents.

- **Language:** rebuttals and reason-classification in Bahasa Indonesia/Malaysia, Tagalog, Thai, Vietnamese, plus the English-vernacular mix sellers actually use.
- **Platform rails:** built around Shopee Seller Centre, Lazada Seller Center, TikTok Shop Seller Center dispute flows — not Visa/Mastercard chargebacks. Knowing each platform's evidence rules and reason codes *is* the product.
- **Local pricing:** a ₱500 / RM40 / Rp120k per-month tier works where a $49 US tool is laughably out of reach. Per-recovery success pricing fits the cash-strapped seller psychology even better.
- **Distribution:** seller communities live on Facebook Groups, Lowyat, Telegram, and local seller-tool resellers — not on Twitter/Product Hunt.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** Hybrid. Base **$8–15/mo** (₱500 / RM40 / Rp120k) for the watcher + drafter, **plus 15–20% of recovered refund value** on auto-fought disputes. Success fee aligns incentives and crushes the "is it worth it" objection.
- **ACV:** Realistic blended **$240–360/year** per active seller (base sub + success fees on a handful of recovered disputes per month). Heavier sellers with high return exposure run higher.
- **Math to $1M ARR:** ~3,500 sellers × $24/mo avg blended = **$1.0M**. Achievable inside the active-seller base of a single large market (Indonesia or Philippines).
- **Math to $5M ARR:** ~12,000 sellers across 3–4 SEA markets at a slightly higher blended ACV (~$35/mo as success fees compound on bigger sellers). Needs multi-platform coverage and a working auto-file path.
- **Expansion path:** start with return/refund disputes → add chargeback appeals, A-to-z-style claims, account-health/penalty appeals, and listing-takedown disputes. Same seller, more fights, more recovered money = ACV grows without new logos.

## 9. Go-to-market wedge — first 100 customers

- **Facebook seller groups (the big one).** SEA marketplace sellers cluster in huge FB Groups ("Shopee Seller Indonesia," "Lazada Seller Malaysia," etc., tens of thousands of members each). Post a free "Did you eat a return you could've won? Send me the claim, I'll draft the rebuttal" thread, do 50 by hand, screenshot the wins, convert.
- **Lowyat / Telegram seller channels.** Drop into existing empty-box / "shopee no seller protection" threads with a free recovered-money case study. These are warm, complaining-right-now audiences.
- **Concierge-first close.** Offer the first month as done-for-you: connect read-only, we fight your next 10 disputes manually, you pay only the 15% on what we recover. Zero-risk trial that pre-sells before the software is fully automated.
- **Local seller-tool reseller partners.** SEA has a layer of agencies/resellers selling Shopee/Lazada management tools; revenue-share them on PushBack as an add-on to their existing seller books.
- **Mega-sale timing.** Launch outreach 2 weeks before 9.9 / 11.11 / 12.12 when return volume (and pain) spikes — sellers are most willing to try anything that stops the bleed.

## 10. Build complexity — justification

Medium. The AI layer (reason classification, evidence matching, multilingual rebuttal drafting) is off-the-shelf multimodal models with good prompting — not custom training. The real work is the **platform integration and rules layer**: reliably pulling return events from Shopee/Lazada/TikTok seller accounts (open seller APIs exist for orders/returns on all three, with auth/scoping friction) and encoding each platform's evidence formats and deadlines. Realistic v1 for a 2-person team: **10–14 weeks** for one platform (start with Shopee, the market leader), then add Lazada and TikTok. Auto-file is a later milestone; v1 can draft + deadline-alert and have the seller paste.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Helping sellers use platforms' own legitimate dispute flows. No scraping of buyers' PII beyond the seller's own orders. |
| Ethical — no harm / dark patterns | ✅ | We file truthful rebuttals on the seller's behalf; we explicitly flag "fold" on weak/dishonest claims. Not a tool for cheating buyers. |
| Market exists (evidence above) | ✅ | Loud organic complaints, millions of sellers, tightening margins. |
| 1–5 person team can build this | ✅ | 2 people, ~3 months to first-platform v1. |
| Launchable with <$50K / ₹40L | ✅ | API access + inference + a concierge launch. Well under cap. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | Real, recurring money loss with a hard deadline; felt acutely every mega-sale. Not quite daily hair-on-fire for the smallest sellers, hence not 18+. |
| Demand evidence | 15 | 12/15 | Strong organic complaints, 1.9★ review mass, verbatim seller quotes. Docked because no one's yet *paying* for this specific fix — adjacent (US chargeback tools) proves WTP exists. |
| Build feasibility | 15 | 11/15 | AI is easy; the platform-integration + per-platform rules layer is the gnarly part and multiplies per platform. |
| Distribution clarity | 15 | 11/15 | Named FB groups/forums + concierge wedge + reseller channel. Conversion math is plausible but unproven. |
| Revenue mechanics | 15 | 11/15 | Hybrid sub + success fee is clean and benchmarked against US chargeback-defense %. Small base ACV means you need real volume. |
| Time to first revenue | 10 | 8/10 | Concierge done-for-you can charge in weeks before full automation. |
| Defensibility | 10 | 6/10 | Moat = accumulated per-platform rules knowledge + recovery data + seller workflow lock-in. Copyable, but the platform-rules grind plus a head start is a real barrier. |
| **Total** | **100** | **75/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required` — needs someone who can wrangle three marketplace seller APIs and someone who deeply understands each platform's dispute rules (ideally an ex-seller or marketplace-ops person).

### Key assumptions to validate (3–5)

1. **Assumption:** Sellers will grant read access to their seller account to a third-party tool. **How to test:** In concierge pilots, count how many of 30 interested sellers actually complete the connect step vs. balk.
2. **Assumption:** A meaningful share of disputes are genuinely winnable with better/faster evidence (not lost causes). **How to test:** Manually fight 50 real claims; measure win rate vs. the seller's historical baseline.
3. **Assumption:** Platform seller APIs expose return/dispute events reliably enough to never miss a deadline. **How to test:** Build the Shopee watcher first; over 4 weeks, confirm zero missed return events vs. manual Seller Centre check.
4. **Assumption:** Sellers accept a 15–20% success fee on recovered money. **How to test:** Offer two pilot cohorts — flat-fee vs. success-fee — and see which converts and retains better.

### Risk flags

1. **Platform dependency (severe):** Entire product rides on Shopee/Lazada/TikTok seller APIs and dispute flows. A ToS change, API restriction, or a platform shipping its own "auto-defend" feature could gut it. Mitigate by spreading across 3 platforms and owning the seller relationship/evidence layer.
2. **Platform self-cannibalization:** Platforms could "fix" seller protection and remove the pain. Possible, but their incentives (refund-happy buyers drive GMV) cut against it.
3. **Win-rate reality:** If platforms' dispute reviewers are arbitrary/buyer-biased regardless of evidence quality, the success-fee model collapses. This is the #1 thing to validate before building.
4. **Read-access trust:** Sellers may distrust connecting their account. Concierge + read-only scoping + visible recovery ledger build the trust.

## 14. Structured verdict

```
Score:                  75/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder + marketplace-ops co-founder (ex Shopee/Lazada seller or seller-support)
Time to revenue:        4–8 weeks (concierge), 10–14 weeks (automated v1, one platform)
Capital to launch:      $8–15K (₹7–12L) — API access, inference, concierge labor
Top 3 assumptions to validate first:
  1. Dispute win-rate lift is real — manually fight 50 claims, beat the seller's baseline
  2. Sellers will connect read-access — measure connect completion in 30-seller pilot
  3. Sellers accept 15–20% success fee — A/B flat vs. success pricing in pilot
Kill criteria:
  - Abandon if manual win-rate on 50 fought disputes is no better than the seller's own baseline
  - Abandon if <20% of interested pilot sellers complete account connection
  - Abandon if a platform ships native auto-defend or restricts seller-API return access before v1 ships
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Recruit 15–20 active Shopee/Lazada sellers from 3 big FB seller groups. Offer free done-for-you: "send me your next return claims, I'll write the rebuttals."
- **Day 3–4:** Manually fight every claim that comes in — read reason, assemble evidence, draft the rule-cited rebuttal, submit within the window. Log each one.
- **Day 5:** Tally outcomes. **Go/no-go test: did we win materially more than the sellers' self-reported baseline, and did ≥5 sellers say "I'd pay a cut of that"?** If win-rate lift is flat or sellers won't pay, it's a no-go regardless of how much they complain.

Falsifiable: the result is a win-rate number and a count of pay-intent commitments, not a vibe.
