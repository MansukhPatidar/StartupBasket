---
title: "AlertSafe — fake-alert screen for Nigeria's WhatsApp sellers"
slug: nigeria-fake-alert-payment-screen
date: 2026-06-23
category: FinTech / Nigeria Social-Commerce Sellers (WhatsApp & Instagram)
complexity: Medium
score: 75
verdict: GO
confidence: Medium
oneLiner: "AlertSafe confirms a bank transfer actually landed before a WhatsApp seller hands over the goods."
tags:
  vertical: FinTech
  model: SaaS
  geography: Global
  secondary: [WhatsApp-first, Africa, Fraud-prevention, SMB, AI-agent, Solo-builder]
axes:
  problem: 17
  demand: 12
  build: 11
  distribution: 12
  revenue: 11
  time: 8
  defensibility: 4
founderFit: [technical-heavy, operations-heavy]
featured: false
---

# AlertSafe

## 1. One-liner

AlertSafe confirms a bank transfer actually landed before a WhatsApp seller hands over the goods.

## 2. Trend signal — why now?

Nigeria's social commerce runs on WhatsApp, Instagram and bank transfers — and on trust that the transfer was real. Sellers routinely get shown a *screenshot* of a bank-transfer "receipt" or a forwarded "credit alert," release the product, and discover the money never came. Whole cottage industries of "how to spot a fake alert" guides have sprung up, and the scam is getting more sophisticated: cloned bank-app screens, value-date transfers that show as "pending," manipulated SMS alerts.

Three things converged in the last 12–18 months that make a verification product newly buildable and newly urgent:

1. **The fraud got industrialized.** Guides now warn of "double alert" and "value-date" scams where the SMS genuinely originates from the bank gateway but the funds are never cleared — meaning the seller's old defense ("the alert looks real") no longer works.
2. **Dedicated Virtual Accounts went mainstream.** Paystack and Flutterwave both expose APIs that mint a unique NUBAN per seller (or per order) and fire an instant webhook *only when real money actually credits*. That webhook is programmatic ground truth — the exact thing a screenshot can't fake.
3. **Social commerce is large and growing.** Nigeria's social-commerce market is projected at ~$12.4B in 2026 growing ~13%/yr, with 22M+ daily WhatsApp users. The sellers losing money to fake alerts number in the hundreds of thousands.

Provenance:
  - Signal 1 (demand): Fake bank-alert / fake-screenshot fraud against vendors is rampant and worsening; guides and viral exposés document sellers releasing goods on fake proof — https://financials.com.ng/2026/02/17/how-to-detect-fake-transfer-and-fake-alert-by-scammers-in-2026-2027/ and https://www.legit.ng/people/1674661-mind-skincare-vendor-exposes-customers-n35k-fake-transfer-move-viral/ — observed 2026-06-23
  - Signal 2 (feasibility): Paystack & Flutterwave Dedicated Virtual Accounts emit a webhook only on real credit, giving instant programmatic confirmation a screenshot cannot forge — https://paystack.com/docs/payments/dedicated-virtual-accounts/ — observed 2026-06-23
  - Signal 3 (economic): Nigeria social commerce ~$12.4B in 2026 at ~13% CAGR; 22M+ daily WhatsApp users; funded WhatsApp-commerce startups (Chpter $1.2M pre-seed) — https://www.globenewswire.com/news-release/2025/05/20/3084775/0/en/Nigeria-Social-Commerce-Market-Growth-Databook-2025-Projected-3-96-Billion-Expansion-for-Nigeria-s-Social-Commerce-by-2030.html — observed 2026-06-23
  Category: Geographic arbitrage

## 3. The opportunity

The pain is a single, sharp, money-losing moment: *"someone sent me a payment screenshot — is it real, and should I release the goods?"* Right now the seller's only defenses are (a) manually open the bank app and refresh, (b) eyeball the screenshot for tells, or (c) refuse all transfers and lose the sale. (a) is slow and breaks down across multiple staff and locations; (b) loses to cloned-app screenshots; (c) loses revenue.

The incumbents — Bumpa, Catlog, OList — are **storefront suites**: online store, inventory, invoices, shipping, analytics, subscriptions at ₦5K–12.5K/mo. They are excellent at building you a store. They are **not** verification-first. Bumpa's "payment notification" tells you when money hits *Bumpa's own rails* — it does nothing for the case that defines the fraud: a buyer claiming they sent a *direct bank transfer* and waving a screenshot. The suites won't pivot to a verification wedge because their whole model is the storefront subscription and getting payments onto their own wallet.

AlertSafe is the opposite shape: a single-purpose verification layer. Each seller (or each order) gets a dedicated virtual account. The buyer is told to pay *that* account. The instant real money lands, AlertSafe pings the seller "✅ ₦35,000 confirmed for Order #214 — release the goods." No real credit, no green light. The screenshot becomes irrelevant.

## 4. Target market

- **Primary customer:** Solo and micro WhatsApp/Instagram sellers in Nigeria — skincare, fashion, gadgets, hair, food, thrift ("okrika") — typically 1 owner + 0–2 staff, doing roughly ₦300K–₦5M/month, taking orders in DMs and bank transfers.
- **Why they buy:** They have personally lost goods to a fake alert, or live in fear of it. In their words (sourced): a viral skincare vendor publicly "exposed a customer who tried to scam her with a fake ₦35k transfer for skincare products"; the standard hard-won advice circulating among vendors is "always log in to your bank app or check your SMS to confirm a payment before releasing any item — do not rely on screenshots." AlertSafe turns that manual ritual into an instant, staff-proof yes/no.
- **Rough TAM reasoning:** Nigeria has hundreds of thousands of active social-commerce sellers (social commerce ~$12.4B/yr; 22M daily WhatsApp users). Even 100K reachable sellers at a ₦2,500/mo price point is a ₦3B (~$2M) ARR ceiling in Nigeria alone — before Ghana, Kenya, SA (where Catlog already shows the same buyer exists).
- **Why now for them:** The fraud crossed the line where their old defenses stopped working (cloned-app and value-date scams), and the payment rails to *instantly* prove a real credit (DVAs) just became cheap and API-accessible.

## 5. Product sketch (MVP)

- **Dedicated payment account per seller/order:** seller signs up, gets a NUBAN to give buyers; every transfer in is matched to an order.
- **Instant "release the goods" confirmation:** the moment real money credits, seller (and any staff on the account) gets a WhatsApp/push ping — "✅ ₦X confirmed for [buyer]."
- **Screenshot triage:** buyer pastes/forwards a "proof of payment" image; AlertSafe reads it (amount, sender, time, ref) and cross-checks against actual credits — flags "no matching payment received" loudly.
- **Order log that reconciles itself:** a simple ledger of orders → expected amount → confirmed/unconfirmed, replacing the colour-coded spreadsheet sellers run today.
- **Staff-safe mode:** shop assistants only ever see "confirmed / not confirmed," so they can't be social-engineered into releasing on a screenshot.
- **Partial / wrong-amount detection:** flags when ₦18,500 lands against a ₦35,000 order so the seller doesn't get shorted.
- **Daily payout sweep:** confirmed funds settle to the seller's real bank account on a schedule they control.

## 6. AI angle — what's load-bearing

Two jobs. **(1) Proof-image understanding:** buyers send wildly inconsistent "receipts" — bank-app screenshots, SMS forwards, photos of a screen — and AI extracts amount, sender, timestamp and reference to match against the real credit feed and to spot manipulation tells. **(2) Chat-to-order extraction:** orders live in messy WhatsApp threads ("send me 2 of the ₦15k one + delivery to Lekki"); AI turns that into a structured expected-amount so the confirmation can be matched automatically. Remove the AI and you're back to the seller manually reading screenshots and tallying threads by hand — which is exactly today's broken workflow. The *verification truth* comes from the DVA webhook (not AI), but the AI is what makes it usable inside the chat-first way these sellers actually work.

## 7. Localization angle

This is a localization play to its core — it does not exist as a generic global product because the fraud pattern and the rails are local:

- **Rails:** Nigerian DVAs/NUBAN via Paystack/Flutterwave/Monnify; later M-Pesa-style equivalents for Kenya, instant-EFT for SA.
- **Channel:** WhatsApp-first, because that's where the orders and the scam both happen.
- **Pricing:** must work at ₦1,500–3,500/mo — a $20/mo global SaaS price is dead on arrival here.
- **Language:** Nigerian-English and Pidgin phrasing in the buyer-facing flow.
- **Behavior:** built around the specific "release the goods?" decision moment, which is culturally and operationally distinct from card-checkout markets.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** Freemium hook — free up to ~20 verified orders/mo to get the habit, then **₦2,500/mo (~$1.6)** flat for unlimited verification + order log, plus a thin **0.3–0.5% transaction fee** on swept volume (the real margin engine, since it scales with GMV not seat count).
- **ACV:** ~₦30K/yr subscription + transaction take. On a seller doing ₦2M/mo GMV at 0.4%, that's ₦8K/mo in fees → ~₦126K (~$80)/yr blended ACV.
- **Rough math to $1M ARR:** ~12,500 active paying sellers at ~$80 blended ACV. Against a base of hundreds of thousands of sellers, that's ~3–5% penetration of the reachable set.
- **Rough math to $5M ARR:** ~60K sellers, or fewer sellers at higher GMV (move upmarket to multi-staff shops), plus Ghana/Kenya/SA expansion where the same buyer and the same fraud exist. Transaction-fee mix rising as GMV concentrates in power sellers.
- **Expansion path:** subscription → transaction fees → working-capital/float on swept funds (Bumpa already validated SME credit appetite with "Bumpa Capital") → buyer-side "verified seller" trust badge as a second SKU.

## 9. Go-to-market wedge — first 100 customers

- **Mine the fraud threads.** Nairaland, X, TikTok and Instagram are full of vendors posting "I was scammed by a fake alert" and "see this fake credit alert." DM the poster: "This is exactly what we stop — want a free account?" These are pre-qualified, emotionally-motivated buyers. Target 300 DMs → 100 trials.
- **Vendor WhatsApp/Telegram groups.** Nigerian sellers cluster in wholesale and niche vendor groups (skincare, thrift, gadgets). Get one admin to vouch and drop a 30-second demo video; one active group can seed 20–50 sellers.
- **Ride a viral exposé.** When a vendor's "I caught a fake ₦35k transfer" post goes viral (these happen weekly), reply/duet with "here's how to never even risk it." Free PR in front of exactly the right audience.
- **Micro-influencer vendors.** Pay 3–5 mid-tier "vendor life" creators on TikTok/IG to show the confirmation ping in a real sale. Their followers *are* sellers.
- **Market-association seeding (ops):** physical markets (Computer Village, Balogun) have association leaders; a small referral cut gets word-of-mouth moving offline where a big share of these sellers still operate.

## 10. Build complexity — justification

**Medium.** The verification core is off-the-shelf: DVA creation + webhooks from Paystack/Flutterwave, a WhatsApp Business API integration, and a vision model for proof-image parsing. The custom work is the matching engine (credit ↔ order ↔ proof), staff-permissioning, and payout sweeps — plus the operational reality of handling other people's money, which means careful reconciliation and a PSP/aggregator relationship. Not research-grade, but not a weekend either: a 2-person team ships a credible v1 in ~10–14 weeks.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Operates on top of CBN-licensed PSPs (Paystack/Flutterwave) as a merchant/aggregator layer; no banking license needed at MVP. Must respect PSP terms + data rules. |
| Ethical — no harm / dark patterns | ✅ | Anti-fraud product; protects the small seller. No dark patterns. |
| Market exists (evidence above) | ✅ | Documented, worsening fraud + large social-commerce base + existing paid storefront suites. |
| 1–5 person team can build this | ✅ | 2 people, ~10–14 weeks to v1. |
| Launchable with <$50K / ₦40L | ✅ | API + WhatsApp + hosting; main cost is a float/reconciliation buffer and a PSP relationship, well under $50K. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 17/20 | Hair-on-fire — direct, frequent money loss; vendors actively fear and post about it. |
| Demand evidence | 15 | 12/15 | Strong: viral exposés, proliferating "spot the fake alert" guides, paid storefront suites prove WTP. Not yet a direct competitor charging for *this exact* verification wedge. |
| Build feasibility | 15 | 11/15 | DVA + WhatsApp + vision are off-the-shelf; matching engine + money-handling reconciliation is the real work (~10–14 wks). |
| Distribution clarity | 15 | 12/15 | Named, pre-qualified channels (fraud-thread posters, vendor groups, viral duets). Conversion realistic but unproven. |
| Revenue mechanics | 15 | 11/15 | Subscription thin but transaction-fee on GMV is the engine; depends on convincing sellers to route payments through the DVA. |
| Time to first revenue | 10 | 8/10 | Self-serve, acute pain → trial-to-paid in weeks; transaction revenue from day one of routed volume. |
| Defensibility | 10 | 4/10 | Execution + workflow lock-in once payments route through you; but storefront suites or a PSP could bolt this on. Speed and seller-trust brand are the moat. |
| **Total** | **100** | **75/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `operations-heavy` — needs PSP/money-handling discipline and on-the-ground vendor-community hustle for distribution.

### Key assumptions to validate (3–5)

1. **Assumption:** Sellers will instruct buyers to pay a *new* dedicated account (not their existing personal/business account). **How to test:** offer 30 sellers the DVA flow; measure how many actually switch and keep using it for 2 weeks.
2. **Assumption:** The fraud pain is acute enough to pay ₦2,500/mo + a transaction cut, vs. just "checking the bank app." **How to test:** 40 cold DMs to fraud-thread posters; measure trial→paid at 30 days.
3. **Assumption:** Buyers will tolerate paying a virtual account instead of the seller's familiar number. **How to test:** run 50 real orders through it; measure buyer drop-off / complaints.
4. **Assumption:** PSP economics (DVA fees, sweep fees) leave enough margin at a ₦2.5K/mo + 0.4% model. **How to test:** model real Paystack/Flutterwave fee schedules against a ₦2M/mo seller.

### Risk flags

1. **Platform dependency:** Heavy reliance on Paystack/Flutterwave DVA APIs and WhatsApp Business API. A pricing or policy change upstream hits the whole model. Mitigate by supporting ≥2 PSPs early.
2. **Incumbent bolt-on:** Bumpa/Catlog or a PSP could add "verified bank-transfer confirmation" as a feature. Defensibility is thin; speed and a fraud-specific brand are the only real edge.
3. **Money-handling / regulatory creep:** Holding/sweeping funds invites scrutiny; staying strictly a merchant-of-record layer on licensed PSPs (not a wallet that holds float) keeps it clean. Crossing into float/credit later needs legal review.
4. **Behavior change is the hard part:** the product only works if sellers actually route payments through the DVA — the verification is worthless on payments that bypass it.

## 14. Structured verdict

```
Score:                  75/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder comfortable with payment rails + a Nigeria-based ops/community co-founder
Time to revenue:        6–10 weeks (acute pain, self-serve, transaction fees from first routed order)
Capital to launch:      ₦4–8 lakh equivalent ($5–10K) + a reconciliation/float buffer
Top 3 assumptions to validate first:
  1. Sellers will switch buyers to a dedicated account — pilot 30 sellers, measure 2-week retention of the DVA flow
  2. Pain justifies ₦2,500/mo + 0.4% — 40 cold DMs to fraud-thread posters, measure 30-day trial→paid
  3. PSP fee economics leave margin — model real Paystack/Flutterwave schedules on a ₦2M/mo seller
Kill criteria:
  - Abandon if <15% of 40 fraud-thread DMs start a trial within 2 weeks
  - Abandon if <30% of piloted sellers still route payments through the DVA after 2 weeks (behavior change fails)
  - Abandon if a major PSP or Bumpa/Catlog ships an equivalent verification flow before your v1
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Build a no-code concierge MVP — a single DVA + a webhook that pings a WhatsApp group "✅ ₦X confirmed." Recruit 5 real sellers from one vendor WhatsApp group.
- **Day 3–4:** Mine 40 fraud-thread posters (Nairaland/X/TikTok) and DM them the offer; run 10–15 real orders through the concierge flow for the 5 pilots.
- **Day 5:** Decide go/no-go. **Falsifiable bar:** ≥3 of 5 pilots keep routing payments through the DVA after the week *and* ≥6 of 40 DM'd posters start a trial. Below that, the behavior-change risk is fatal and the idea waits.
