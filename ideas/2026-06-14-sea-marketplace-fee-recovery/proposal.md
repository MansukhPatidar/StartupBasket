---
title: "SettleSweep — fee-leak sweeper for SEA marketplace sellers"
slug: sea-marketplace-fee-recovery
date: 2026-06-14
category: Retail / SEA
complexity: Medium
score: 74
verdict: GO
confidence: Medium
oneLiner: "Audits Shopee, Lazada and TikTok Shop payouts, finds wrongly deducted fees, and files the reclaim for SEA sellers."
tags:
  vertical: Retail
  model: SaaS
  geography: SEA
  secondary: [Marketplace-seller, Fee-recovery, AI-agent, SMB, Success-fee]
axes:
  problem: 16
  demand: 12
  build: 11
  distribution: 12
  revenue: 11
  time: 7
  defensibility: 5
founderFit: [technical-heavy, operations-heavy]
featured: false
---

# SettleSweep — fee-leak sweeper for Southeast Asian marketplace sellers

## 1. One-liner

Audits Shopee, Lazada and TikTok Shop payouts, finds wrongly deducted fees, and files the reclaim for SEA sellers.

## 2. Trend signal — why now?

Three platforms — Shopee, Lazada, TikTok Shop — now own **99% of Southeast Asian platform e-commerce**, and they spent 2025 raising the rent. The blended marketplace take rate climbed from 12.4% to 13.0% in a single year, and on top of commission, Shopee and Lazada added a flat per-order "order processing fee" in September 2025; TikTok Shop followed on 1 December 2025. Filipino sellers are publicly reporting total fees — commission, transaction, shipping, the new per-order charge — hitting **as high as 25% of sales**.

The part nobody automates: a meaningful slice of those deductions are *wrong*. Shipping fees get overcharged when the courier re-weighs a parcel and bills the seller for the heavier number; subsidies that should have applied don't; reserve holds don't get released on schedule; post-payout refund clawbacks get double-counted. Each platform gives the seller a 30-day window to dispute, a CSV to download, and a claim form to fill by hand. Sellers either eat the loss or pay someone to chase it.

They already pay. There is a live **Fiverr gig charging ~$40 to file a single Shopee overcharged-shipping claim** on a seller's behalf. SiteGiant and BigSeller have both shipped "payment reconciliation" features that auto-flag the shipping discrepancy — proof the pain is real enough to build for — but they stop at *flagging*. None of them file the claim, chase the recovery across all fee types, and report the money actually clawed back.

That's the gap: detection exists, recovery doesn't.

Provenance:
  - Signal 1 (Demand): Fiverr gig charging ~$40 to manually claim a single overcharged Shopee shipping fee; Scribd "Shopee PH RTS Shipping Fee — Seller Claim Template" circulating among sellers; PH sellers reporting fees up to 25% of sales — https://www.fiverr.com/listonu/claim-overcharged-shipping-fee-of-shopee-for-you — 2026-06-14
  - Signal 2 (Feasibility): Shopee, Lazada and TikTok Shop all expose order + settlement + per-line-item fee data via their seller Open Platform APIs; cheap LLMs can parse statements and draft claim forms — https://sitegiant.ph/payment-reconciliation/ — 2026-06-14
  - Signal 3 (Economic): SEA platform e-commerce GMV reached US$157.6B in 2025 (+22.8%); marketplace take rate rose 12.4%→13.0%; Indonesia video-commerce sellers up 75% YoY to 800,000 — the recoverable fee pool is large and growing — https://thelowdown.momentum.asia/new-report-southeast-asias-platform-ecommerce-reaches-us157-6b-in-2025-with-top-platforms-expanding-share-to-98-8/ — 2026-06-14
  Category: Workflow automation

## 3. The opportunity

Every marketplace seller's payout is a net number after a stack of deductions: commission, transaction fee, the new per-order fee, shipping (often re-weighed and re-billed), affiliate/content-commerce commissions, return shipping, reserve holds, and clawbacks. The seller sees the net land in their bank account and moves on. They have neither the time nor the line-item discipline to verify that every deduction was correct — and the platforms know it.

The incumbents (BigSeller, SiteGiant, OneCart, Ginee) are **order/inventory sync tools**. Their reconciliation feature, where it exists, computes the shipping-fee discrepancy and hands the seller a number. The seller still has to open the platform claim form, paste the order IDs, attach the CSV, write the justification, submit within 30 days, and follow up 3–5 business days later. That last mile — the actual recovery — is manual, deadline-sensitive, and exactly the kind of repetitive document work AI now does well.

SettleSweep does the whole loop: connect the seller's three marketplace accounts, pull settlement statements, recompute what each fee *should* have been, surface every overcharge with evidence, **auto-draft and file the platform claim**, then track the dispute to payout and report the recovered ringgit/peso/rupiah. We get paid a cut of money the seller would otherwise never have seen.

## 4. Target market

- **Primary customer:** Mid-tier marketplace sellers in the Philippines, Malaysia, Indonesia and Thailand doing roughly **₱300K–₱5M (≈$5K–$90K) monthly GMV** across 2–3 platforms — big enough that 1–3% fee leakage is real money, small enough that they have no finance team and run ops themselves or with one VA.
- **Why they buy:** "I'm paying 25% in fees and I can't even tell if half of it is right." Overcharges are death by a thousand cuts — ₱30 here, ₱150 there — invisible per order, ₱20K–₱80K/year in aggregate. They won't manually audit 4,000 line items; they'll happily take half of recovered money for zero effort.
- **Rough TAM reasoning:** SEA platform GMV is $157.6B. Even narrowing to the ~hundreds of thousands of sellers above the $5K/mo GMV floor across PH/MY/ID/TH, a few hundred thousand sellers is the serviceable pool. We need a few thousand to hit $5M.
- **Why now for them:** Fees just went up twice in 12 months (take-rate creep + new per-order fee). The pain is freshly salient and sellers are actively complaining in Facebook groups and tagging the DTI. Right moment to sell a tool that gives money *back*.

## 5. Product sketch (MVP)

- One-click connect for Shopee, Lazada and TikTok Shop seller accounts (official seller Open Platform OAuth).
- Nightly pull of settlement statements and per-order fee line items across all connected stores.
- Fee re-computation engine: recompute expected commission, expected shipping (against declared weight/dimension and courier rate card), expected per-order fee, and flag every line where the platform deducted more than it should have.
- "Recoverable money" dashboard: total flagged this month, by platform, by fee type, with the 30-day claim deadline counting down per item.
- Auto-drafted claim packets — pre-filled platform claim form fields, order IDs, evidence CSV, and justification text — ready to one-click submit (or fully auto-file where the API permits).
- Dispute tracker: status from filed → under review → resolved → paid, with the actual recovered amount logged.
- Monthly "money we got back" report the seller can read in 30 seconds.

## 6. AI angle — what's load-bearing

Two places AI is doing real work, not decorating a form:

1. **Statement normalization.** Each platform formats settlement data differently, renames fee types across versions, and buries adjustments in inconsistent line items. An LLM normalizes heterogeneous, drifting statement schemas into one fee ledger far more cheaply than maintaining brittle per-platform parsers — and adapts when a platform silently changes its export format (which they do, often).
2. **Claim drafting.** Turning "order 240515-XYZ was overcharged ₱47 in shipping because declared weight 0.8kg was billed at 1.3kg" into a correctly-worded, platform-specific claim justification that survives review is exactly the document-generation task LLMs excel at. The Fiverr seller charges $40 to do this by hand; that's the labor we collapse.

Remove the AI and you're back to brittle parsers plus a human writing claims one at a time — i.e., the manual status quo. The AI is the unlock.

## 7. Localization angle

SEA-first by construction, and that *is* the moat-adjacent wedge:

- **Platforms:** Shopee/Lazada/TikTok Shop dominate SEA specifically; a US Amazon-reimbursement tool (Getida, Seller Investigators) has zero coverage here. The fee structures, claim forms and courier rate cards are local.
- **Pricing:** A success-fee model denominated in PHP/MYR/IDR/THB works where a flat $99/mo USD SaaS would scare off a ₱500K/mo seller. We only charge when we recover.
- **Distribution:** Filipino and Indonesian sellers organize in massive Facebook Groups and Viber/Telegram communities, not on Reddit. Vernacular onboarding (Tagalog, Bahasa) and WhatsApp/Viber support are table stakes.
- **Couriers:** J&T, Ninja Van, Flash, SPX rate cards are region-specific — re-computing expected shipping requires local courier logic a global tool wouldn't bother building.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** Hybrid. **20–25% success fee** on recovered money (the headline, zero-risk hook) **+ an optional ₱990/$18-per-month "audit" tier** for sellers who want the full reconciliation dashboard even in months with little to recover.
- **ACV:** Assume a target seller leaks ₱40K/year ($700) in recoverable fees and we recover 60% of it = ₱24K, our 22% cut ≈ **₱5,300 (~$95)/seller/year** from success fees, plus subscription where taken. Blended ACV ~$120–180.
- **Rough math to $1M ARR:** ~7,000–8,000 active sellers at ~$130 blended ACV. Aggressive but inside a six-figure-seller pool.
- **Rough math to $5M ARR:** Need either ~30K+ sellers, or move up-market to brands/aggregators doing $200K+/mo GMV (10× the recoverable pool per account) — a few thousand of those gets there. Realistic 24-month target is the lower end of this range.
- **Expansion path:** Add fee categories (ads-spend audit, return-fraud detection), add platforms (Tokopedia, Zalora, Temu), and add a brand/aggregator tier with consolidated multi-store recovery and a finance-grade export.

## 9. Go-to-market wedge — first 100 customers

- **Facebook Group raids (primary).** PH and ID marketplace sellers live in groups like "Shopee Sellers Philippines" (tens of thousands of members) where fee complaints are a daily topic. Post a free "how much are you leaking?" mini-audit, DM the loudest complainers, onboard them. The success-fee model means the pitch is "costs you nothing — I find money, we split it." Target the 200+ people who tagged DTI over the September fee hike.
- **Free audit as the hook.** Connect-and-scan is free; the seller sees a real ₱-figure of recoverable money before paying anything. Conversion lever is the dashboard showing money on the table with a deadline clock.
- **Fiverr/freelancer displacement.** The people already paying $40/claim on Fiverr are pre-qualified buyers. Reach them directly; offer the automated version that handles every order, not one.
- **VA and bookkeeper channel.** SEA sellers lean on virtual assistants and small bookkeeping shops; partner with VA agencies who add SettleSweep to their seller clients and take a referral cut.
- **Seller meetups / platform "seller summit" presence.** Shopee/Lazada/TikTok run seller education events; the audience is exactly the buyer.

## 10. Build complexity — justification

Medium. The three platform seller APIs are documented and OAuth-based, so account connection and statement pulls are standard integration work, not research. The fee re-computation engine (especially shipping, against local courier rate cards) and keeping up with three platforms that change statement formats and fee rules is the real ongoing effort — plus claim-filing flows where some platforms allow API submission and others force a web form. A focused pair could ship a single-platform (Shopee PH) MVP in **8–12 weeks** and add Lazada + TikTok Shop over the following two to three months.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Seller authorizes access to their own account data; filing legitimate claims the platform's own process allows. |
| Ethical — no harm / dark patterns | ✅ | We recover money the seller is genuinely owed; no fabricated claims (that would get accounts banned — see risk flags). |
| Market exists (evidence above) | ✅ | Paid Fiverr gigs, incumbent reconciliation features, public fee-hike complaints. |
| 1–5 person team can build this | ✅ | Standard API integration + LLM document work; pair-buildable. |
| Launchable with <$50K / ₹40L | ✅ | No capex; cost is dev time + API/LLM usage. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | Real recurring money loss, freshly salient after two fee hikes. Capped below 17 because per-order it feels small — the pain is aggregate, not hair-on-fire per transaction. |
| Demand evidence | 15 | 12/15 | Multiple independent signals: paid Fiverr gigs, incumbent reconciliation features, public complaints. Strong, but no clean public number on *recoverable* (vs total) fees. |
| Build feasibility | 15 | 11/15 | Documented APIs, but three drifting platforms + local courier logic + claim-filing flows = ongoing integration tax. |
| Distribution clarity | 15 | 12/15 | Named channels (FB groups, Fiverr buyers, VA agencies) and a zero-risk success-fee pitch. Conversion math still partly assumed. |
| Revenue mechanics | 15 | 11/15 | Success fee aligns incentives beautifully, but ACV depends on average recoverable amount — the key unproven number. |
| Time to first revenue | 10 | 7/10 | Single-platform MVP + free-audit funnel can produce a paid recovery in 6–8 weeks of launch. |
| Defensibility | 10 | 5/10 | Execution + accumulating fee-rule/courier-rate knowledge and recovery track record. Incumbents could extend their reconciliation feature into filing — that's the main threat. |
| **Total** | **100** | **74/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` (API integration + statement parsing) · `operations-heavy` (claim-filing flows, platform-relationship management, SEA-local distribution).

### Key assumptions to validate (3–5)

1. **Assumption:** A typical target seller has ₱20K–₱80K/year of *genuinely recoverable* (not just total) fees. **How to test:** Run free manual audits on 15–20 real sellers' last-90-day statements; measure actual recoverable amount per seller.
2. **Assumption:** Platforms approve a healthy share of well-formed claims rather than rubber-stamp rejecting them. **How to test:** File 30 real claims manually across Shopee/Lazada/TikTok and measure approval rate and payout speed.
3. **Assumption:** Sellers accept a 20–25% success-fee cut. **How to test:** Offer the deal to the 15–20 audited sellers; measure sign-up rate.
4. **Assumption:** Seller APIs expose enough fee-line detail to recompute expected fees without scraping the dashboard. **How to test:** Pull real settlement payloads from a test Shopee + TikTok Shop seller account and confirm line-item granularity.

### Risk flags

1. **Platform dependency / account risk:** The entire product rides on three platforms' APIs and goodwill. They could restrict settlement-data access, change claim processes, or frown on third-party claim-filing. Filing aggressive or wrong claims could get *sellers'* accounts flagged — we must never fabricate. This is the existential risk.
2. **Incumbent fast-follow:** BigSeller/SiteGiant already flag shipping discrepancies; extending into auto-filing is a natural roadmap step for them. Our head start is the full recovery loop + filing know-how, not the detection.
3. **Recoverable-amount uncertainty:** If real recoverable fees average closer to ₱5K/year than ₱40K, the success-fee ACV collapses and the unit economics get thin. This is the number to validate before building anything.
4. **Collections/trust:** Charging a cut of recovered money requires tracking what actually landed and billing accurately — an accounting/trust burden, not just software.

## 14. Structured verdict

```
Score:                  74/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder comfortable with API integration + an ops/SEA-local partner for distribution and claim flows
Time to revenue:        6–8 weeks (single-platform MVP + free-audit funnel)
Capital to launch:      $5–10K (dev time + API/LLM usage)
Top 3 assumptions to validate first:
  1. Average genuinely-recoverable fees per seller — manual audit of 15–20 real sellers' 90-day statements
  2. Claim approval rate — file 30 real claims manually, measure approvals + payout speed
  3. Success-fee acceptance — offer the 20–25% deal to audited sellers, measure sign-ups
Kill criteria:
  - Abandon if average recoverable fees per target seller < ₱8K/year (~$140) — success-fee ACV won't clear acquisition cost
  - Abandon if manual claim approval rate < 30% across platforms — the platforms reject too much for the loop to pay out
  - Abandon if any platform formally prohibits third-party claim filing on their seller terms before MVP ships
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Recruit 15–20 real PH/MY sellers from a Facebook seller group ("free fee audit, no strings"). Get read access or exported 90-day settlement statements for each.
- **Day 3–4:** Manually recompute expected fees and tally genuinely-recoverable overcharges per seller. File 8–10 real claims by hand across Shopee + TikTok Shop to measure the actual claim-form friction and early approval signal.
- **Day 5:** Decide. **Go** if median recoverable fees ≥ ₱15K/year per seller AND ≥40% of audited sellers say yes to a 20–25% success-fee deal. **No-go** if recoverable amounts are trivial or platforms bounce well-formed claims.

The falsifiable result: a real ringgit/peso figure of recoverable money per seller and a real claim-approval rate — not "sellers said they liked it."
