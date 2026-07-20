---
title: "PointBack — penalty appeal packet builder for SEA sellers"
slug: marketplace-penalty-appeal-packet
date: 2026-07-20
category: Retail / SEA
complexity: Low
score: 74
verdict: GO
confidence: Medium
oneLiner: "Turns a Shopee or TikTok Shop penalty point into a timestamped rebuttal before the weekly appeal window closes."
tags:
  vertical: Retail
  model: SaaS
  geography: SEA
  secondary: [Marketplace-seller, AI-agent, SMB, Solo-builder, Multilingual]
axes:
  problem: 16
  demand: 12
  build: 13
  distribution: 12
  revenue: 10
  time: 8
  defensibility: 3
founderFit: [technical-heavy, content-heavy]
featured: false
---

# PointBack

## 1. One-liner

Turns a Shopee or TikTok Shop penalty point into a timestamped rebuttal before the weekly appeal window closes.

## 2. Trend signal — why now?

Southeast Asian marketplaces spent 2025–2026 converting seller discipline from human review into **automated point systems with hard, short clocks**. Three things changed:

**The penalties got mechanical and expensive.** Shopee Philippines runs a Seller Penalty Points system where points are issued automatically when a violation is detected — late shipments, non-fulfilment, cancellations, listing breaches. Accumulate ~15 points and the account is frozen: no active listings, no orders, for 28 days. Points reset only on the last Monday of each quarter, and consequences triggered mid-quarter run their full 28 days regardless of the reset. Shopee also confirmed in December 2025 that quarterly reset is now the standing policy.

**TikTok Shop tightened the same screw.** From 17 June 2025, TikTok Shop Philippines shortened the violation-point recovery period from 180 days to 90 days — meaning points now clear faster, but the milestones bite harder in a rolling window. Milestones sit at 12, 24, 36 and 48 points: 12 costs you campaigns and free shipping for 7 days; 24 disables listing creation and cuts livestream traffic for 14 days; **36 deactivates the shop for 28 days**; 48 is permanent. TikTok's Seller Enforcement Policy — which covers Indonesia, Malaysia, Philippines, Singapore, Thailand and Vietnam as of July 2026 — allows a maximum of two appeals per enforcement action: the first within 30 days of notification, the second within 15 days of the first rejection. After the second, the decision is final.

**The appeal is a clock the seller usually loses.** Shopee's appeal flow is a text box inside Account Health (My Penalty → View Violation → Appeal Here) where the seller types a justification and tags the related orders. Appeals are subject to a **specific weekly submission deadline** — miss it and review slips at least another week, which can push resolution past the point where the penalty has already cost you the quarter. Meanwhile the underlying facts that would win the appeal — when the courier actually scanned the parcel, when the pickup was booked, what the buyer said in chat — are scattered across the order detail page, the logistics tracking log, and the chat thread.

The money at stake is not abstract. One published Philippine seller scenario models a ₱100,000/month GMV shop losing roughly **₱93,000 in gross revenue** to a single 28-day freeze, and a ₱80,000/month shop foregoing roughly ₱24,000 over a quarter just from losing the Free Shipping badge.

And the market is enormous. SEA e-commerce is tracking toward roughly $215–234 billion in 2026, Shopee holds ~52–53% regional share, and BigSeller alone — one seller ERP — reports serving **over 1.1 million sellers** processing $1.5 billion GMV monthly.

Provenance:
  - Signal 1 (demand): Shopee PH penalty points auto-issued for late shipment/cancellation; ~15 points = 28-day account freeze; appeals gated by a weekly submission deadline; modelled loss ~₱93,000 per freeze on a ₱100K/mo shop — https://shopeefeecalculatorph.com/shopee-penalty-points-2026 and https://seller.shopee.ph/edu/article/2948/seller-penalty-points-appeal — observed 2026-07-20
  - Signal 2 (feasibility): Shopee Open Platform exposes an Account Health API surfacing penalty points, listing violations and late shipment rate, plus order detail and logistics tracking endpoints; TikTok Shop distributes third-party seller apps through its own App Store — https://api2cart.com/api-technology/shopee-api/ and https://seller-us.tiktok.com/university/essay?knowledge_id=2380042836166443 — observed 2026-07-20
  - Signal 3 (economic): SEA e-commerce ~$215–234B in 2026 with Shopee at ~52% share; BigSeller reports 1.1M+ sellers and $1.5B monthly GMV; TikTok-only SLA-alert tool SellerOps charges $29–149/mo; manual Amazon appeal consultancies charge $1,000–3,000 per case — https://digitalinasia.com/sea-ecommerce-hub/, https://www.bigseller.com/, https://sellerops.io/, https://sermondo.com/amazon-suspension-appeal-service/ — observed 2026-07-20
  Category: Platform shift

## 3. The opportunity

Every tool in this market is either **preventive** or **manual consulting**. Nobody owns the middle.

- **Preventive** — SellerOps ($29–149/mo) fires T-24/T-12/T-4 hour alerts before a TikTok SLA cutoff. Agentative monitors health metrics and alerts before thresholds. Both are explicitly read-only and stop at the alert. Useful, but once the point lands they have nothing to say.
- **Dashboards** — BigSeller and Ginee surface Store Health: your penalty points this quarter, your punishment tier. They *show* you the wound. They don't help you argue it away.
- **Manual consulting** — the Amazon-world answer is Riverbend, The Appeal Guru, My Amazon Guy: $1,000–3,000 per case, ex-Amazon staff writing your plan of action. That economics never survives a SEA seller whose entire monthly GMV is ₱100,000.

So the seller with a fresh 3-point late-shipment penalty is on their own. They have maybe days before the weekly cutoff, and the evidence that would exonerate them — the courier scan timestamp that proves the parcel left on time, the buyer chat where the customer requested the delay, the pickup booking log — has to be dug out of three different screens and pasted into a free-text box, in a hurry, usually at 11pm.

**PointBack is the packet builder for that moment.** It watches the account health feed, and the instant a point is issued it pulls the order, the logistics tracking timeline, and the chat thread for the flagged orders, reconstructs what actually happened minute by minute, and drafts a submission-ready rebuttal with the timestamps embedded — before the weekly window shuts.

The insight incumbents miss: **preventive alerting is a commodity that only helps sellers who were already going to be fine.** The revenue-critical moment is post-penalty, and it's the moment everyone has abandoned because it looks like a support problem rather than a software problem. It isn't — it's a deterministic evidence-assembly job over APIs that already exist.

## 4. Target market

- **Primary customer:** Owner-operators of Shopee / TikTok Shop / Lazada shops in the Philippines, Indonesia and Vietnam doing roughly ₱80,000–₱2,000,000 (≈$1,400–$35,000) monthly GMV. One to five staff. Usually the owner is also the person packing boxes and answering chat at midnight. Secondary: small agencies and "seller enablers" managing 10–50 client shops, who feel every client's freeze at once.
- **Why they buy:** A freeze is not an inconvenience, it's payroll. A 28-day deactivation on a ₱100K/month shop is roughly ₱93,000 of gross revenue that simply does not happen, and the seller usually believes the penalty was the courier's fault, not theirs. They want the points removed retroactively — which Shopee explicitly allows on a successful appeal, restoring program eligibility before the quarter resets.
- **Rough TAM reasoning:** Precise per-country seller counts aren't published, but the scale is not in doubt: BigSeller alone reports 1.1M+ sellers on one ERP across 7 countries, against a regional market heading to $215–234B in 2026. If even 300,000 SEA sellers are commercially serious multi-platform operators, capturing 1–2% at $30–60/mo is a $1M–$4M ARR business. I don't need a big share.
- **Why now for them:** Both major platforms hardened their point systems inside the last 14 months — TikTok's shift to a 90-day rolling window (June 2025) and Shopee's quarterly-reset confirmation (December 2025). Sellers who coasted for years are suddenly getting frozen and have no muscle memory for appealing.

## 5. Product sketch (MVP)

- **Penalty watcher** — connects to Shopee/TikTok Shop seller accounts and polls account health; the moment a new penalty point or violation appears, the seller gets a WhatsApp/Viber/Telegram ping with the deadline clock already counting down.
- **Evidence reconstruction** — for each flagged order, automatically pulls the order timeline, courier tracking scans, pickup/handover timestamps and buyer chat, and assembles them into a single chronological record showing exactly what happened and when.
- **Fault verdict** — classifies the penalty as *contestable* (courier scanned late, buyer requested the hold, platform clock drift, address undeliverable) or *fair cop* (you genuinely shipped late), so the seller doesn't waste one of their two TikTok appeals on a loser.
- **Rebuttal drafter** — produces a submission-ready appeal in the platform's expected form and register, with concrete order IDs, exact timestamps and the specific policy clause being contested. Copy-paste into Seller Centre.
- **Window guard** — tracks each platform's distinct clock (Shopee's weekly cutoff; TikTok's 30-day first appeal and 15-day second appeal) and escalates loudly as the deadline nears.
- **Appeal ledger** — records every appeal filed, its evidence and its outcome, building a per-shop history of what arguments actually get points removed.
- **Exposure meter** — current points vs the next milestone (12/24/36/48 on TikTok, ~15 on Shopee) translated into "you are N points from a 28-day deactivation, which costs you roughly ₱X."
- **Multilingual output** — appeals drafted in English, Bahasa Indonesia, Filipino or Vietnamese as the platform expects.

## 6. AI angle — what's load-bearing

Remove the AI and this collapses into a dashboard that already exists.

The load-bearing work is **narrative reconstruction from messy, semi-structured, multilingual evidence**. Courier tracking logs are free-text strings that differ by carrier and country ("Parcel picked up from seller", "Item received at sorting hub", each with its own timestamp format and local-language variants). Buyer chat is code-switched Taglish or mixed Bahasa. The system has to read all of it and answer a genuinely interpretive question: *does this timeline actually exonerate the seller, and which specific fact is the exonerating one?*

Then it has to write a persuasive, policy-anchored argument in the register a marketplace reviewer responds to — concise, factual, citing order IDs and timestamps — in one of four languages. That's judgment plus generation over unstructured input. Deterministic code cannot do it, and a template cannot either, because the winning argument differs per violation type.

The classifier is the commercially important half: telling a seller "don't appeal this one, you really did ship late, spend your second TikTok appeal elsewhere" is what makes the tool trusted rather than a spam cannon. It also keeps PointBack on the right side of the platforms.

## 7. Localization angle

This is a **SEA-first play by necessity, not by preference** — the product is defined by rules that only exist here.

- **Rules are per-country, not per-platform.** TikTok Shop PH moved to a 90-day recovery window in June 2025; Shopee PH resets quarterly on the last Monday. Encoding these correctly per country *is* the product.
- **Language.** Buyer chat and courier logs arrive in Filipino/Taglish, Bahasa Indonesia and Vietnamese; appeals must go out in the register the local reviewer expects.
- **Notification rails.** Sellers live in WhatsApp (ID), Viber/Messenger (PH) and Zalo (VN), not email. Alerts must land where the seller actually is at 11pm.
- **Price ceiling.** A ₱100,000/month shop cannot pay $99/mo. Pricing has to start around ₱499–₱1,500 / IDR 149K–450K (≈$9–27). This is exactly why the $1,000–3,000/case Amazon-consultancy model never crossed over — and why a global tool priced for US sellers won't either.
- **Payment rails.** GCash and Maya (PH), QRIS/GoPay/OVO (ID), MoMo (VN). Card-only checkout would kill conversion.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** Starter $9/mo (₱499 — one shop, watcher + exposure meter, 3 appeal packets/mo). Pro $29/mo (up to 3 shops, unlimited packets, all platforms, priority window alerts). Agency $99–249/mo (10–50 client shops, consolidated exposure view, white-labelled packets).
- **ACV:** ~$290 blended (mix skewed to Pro, with agency seats pulling the average up).
- **Path to $100K ARR:** ~350 Pro shops. Realistic within 9–12 months of launch given the channels below.
- **Path to $1M ARR:** ~2,900 paying shops at $29, or a blend such as 2,000 Pro + 120 agencies at $150. Against a base of 1M+ SEA marketplace sellers on a single competing ERP, this is a fraction of a percent.
- **Path to $5M ARR:** needs three things true — full Shopee/TikTok/Lazada coverage across PH + ID + VN + TH, the agency tier carrying 30–40% of revenue, and an attach product (see below). Roughly 12,000–14,000 shop-equivalents.
- **Expansion path:** (1) more shops per account as sellers go multi-platform; (2) the agency tier, which is where ACV compounds; (3) the natural attach — **penalty-driven insurance-style guarantees** or a success-fee tier ("we take 10% of the GMV we demonstrably unfroze"), which lifts ACV well past the subscription; (4) selling the anonymised win-rate corpus back as benchmarking ("appeals citing courier scan gaps win X% of the time") — the one asset that compounds.

## 9. Go-to-market wedge — first 100 customers

- **Facebook groups are the channel, and they're huge.** SEA marketplace sellers organise in Facebook groups, not Reddit or Slack — groups like the Philippines seller communities where "my Shopee account got frozen, what do I do" is a recurring, high-engagement post format. Join the top 15 PH/ID seller groups, answer these threads manually with a genuinely useful free teardown of the poster's situation, and link the tool. Target: 20–30 customers from unpaid, high-trust participation over 6 weeks. This is the whole wedge — the pain is publicly posted, in real time, by name.
- **Free "Penalty Exposure Check" as the lead magnet.** Read-only connect, and we show you: current points, distance to next milestone, and the peso cost of that milestone. Zero-risk install, immediately alarming output, converts to paid the first time a point lands. This doubles as the trust-builder for a permissions-sensitive audience.
- **Seller enablers and agencies as a wholesale channel.** SEA has a well-developed layer of agencies and enablers managing dozens of shops each. Land 10 agencies at 20 shops apiece and that's 200 shops from ten sales conversations. Highest-leverage motion after the groups, and it's where the ACV lives.
- **TikTok Shop App Store listing.** TikTok distributes third-party seller apps through its own app store — SellerOps ships there. That's a native, intent-qualified distribution surface with no CAC. Get listed early.
- **Content against the exact search.** Sellers google "shopee penalty points appeal", "tiktok shop violation points reset", "shopee account frozen 28 days" at the moment of panic. A precise, genuinely useful guide per violation type per country captures buyers at peak intent. Slower than the groups, but it compounds and it's cheap.

## 10. Build complexity — justification

**Low.** The hard parts are already APIs: Shopee's Open Platform exposes account health (penalty points, listing violations, late shipment rate), order detail, and logistics tracking; TikTok Shop has an equivalent seller API and an app store to distribute through. There's no custom model, no infrastructure, no data acquisition problem — evidence assembly is API reads plus an LLM over the resulting timeline, and the output is text a human pastes into Seller Centre.

The real work is unglamorous and bounded: per-country rule encoding (each platform's clock, milestone and appeal mechanics differ by market), courier log normalisation across carriers, and enough appeal-outcome feedback to make the fault classifier trustworthy. A technical founder plus a part-time SEA seller-ops advisor ships a credible Shopee-PH-only v1 in **6–8 weeks**, adds TikTok PH by week 12, and Indonesia by month 5.

The genuine constraint is not engineering, it's **API access approval** from Shopee and TikTok — that's a gating dependency to test in week one, not month four.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Read-only use of sanctioned seller APIs; helps sellers file appeals the platforms explicitly offer. No scraping, no automation of prohibited actions. |
| Ethical — no harm / dark patterns | ✅ | The fault classifier deliberately tells sellers *not* to appeal when they were genuinely at fault. Product argues true facts, not fabricated excuses. Refusing to be a spam cannon is both ethical and strategically necessary. |
| Market exists (evidence above) | ✅ | Automated penalty systems on both major platforms, quantified revenue loss, adjacent tools already charging $29–149/mo, and a $1,000–3,000/case manual analog in the Amazon world. |
| 1–5 person team can build this | ✅ | 1–2 people. Off-the-shelf APIs plus an LLM. |
| Launchable with <$50K / ₹40L | ✅ | Well under. Main costs are inference and a seller-ops advisor. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | A 28-day freeze is roughly ₱93,000 of gone revenue on a ₱100K/mo shop, with a hard deadline attached. Genuinely hair-on-fire — but *episodic*. A seller who goes three clean months may forget they're paying, which is a churn problem the exposure meter has to solve. That's what keeps it off 18+. |
| Demand evidence | 15 | 12/15 | Strong structural evidence: automated penalty regimes, documented appeal windows, quantified losses, adjacent tools with real pricing, and a proven $1–3K/case manual market. Docked because I could not surface verbatim seller complaints in indexed search — the pain is real but the direct customer-voice validation is still owed. |
| Build feasibility | 15 | 13/15 | Off-the-shelf APIs plus LLM; 6–8 weeks to v1. Docked for API approval risk and per-country rule sprawl. |
| Distribution clarity | 15 | 12/15 | Facebook seller groups are a named, dense, high-intent channel where the pain is posted publicly in real time, plus a native TikTok app store listing. Not 14 because conversion from group participation is unproven and it's manual, founder-led work. |
| Revenue mechanics | 15 | 10/15 | Pricing is benchmarked against real adjacent products and fits SEA wallets. But $9–29/mo means ~2,900 paying shops for $1M ARR — a lot of small accounts to acquire and retain. The agency tier is the fix and it's unvalidated. |
| Time to first revenue | 10 | 8/10 | Self-serve, no sales cycle, panic-driven purchase. Realistically 6–10 weeks post-launch, gated mainly by API approval rather than demand. |
| Defensibility | 10 | 3/10 | **The weak axis, honestly scored.** No moat at month 3 — SellerOps or BigSeller could ship this. The only durable asset is the appeal-outcome corpus: knowing which arguments actually win, per violation type, per country. That compounds by month 12 but does not exist on day one. |
| **Total** | **100** | **74/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `content-heavy`

API integration work plus sustained, credible presence in seller communities. A founder who won't spend evenings answering panicked Facebook posts should not build this — that *is* the distribution.

### Key assumptions to validate

1. **Assumption:** Shopee and TikTok will approve third-party API access for an appeals-assistance use case. **How to test:** Apply to both open platforms in week one, before writing meaningful code. This is the single largest binary risk in the idea.
2. **Assumption:** A meaningful share of issued penalties are genuinely contestable (courier-caused, buyer-caused, clock drift) rather than real seller failures. **How to test:** Manually reconstruct 50 real penalties from 10 recruited sellers. If under 25% are contestable, the product has nothing to sell.
3. **Assumption:** Sellers will pay a recurring subscription for an episodic pain. **How to test:** Offer 30 sellers a $29/mo plan vs a $49-per-successful-appeal plan and see which they choose. If they overwhelmingly pick per-appeal, the business is a transaction, not SaaS, and the model must change.
4. **Assumption:** AI-drafted, evidence-anchored appeals win materially more often than the seller's own text-box attempt. **How to test:** Run 40 appeals — 20 seller-written, 20 tool-drafted — and compare removal rates. This is the core value claim and it is currently unproven.

### Risk flags

1. **Platform dependency — severe.** The entire product sits on two companies' APIs and their continued tolerance of appeals tooling. Either could restrict access, or absorb the feature natively, at any time. This is the defining risk and there is no full mitigation — only diversification across platforms and countries.
2. **Rules churn.** TikTok changed its recovery window in June 2025; Shopee changed reset policy in December 2025. Per-country rule encoding needs constant maintenance. Annoying, but also a real barrier to a casual clone.
3. **Adverse selection.** The worst sellers — the ones genuinely violating policy — have the most penalties and will be the most eager customers. If PointBack becomes known as the tool bad actors use to game appeals, platform relationships die. The fault classifier must refuse cases, which means deliberately turning away revenue.
4. **Episodic churn.** Sellers cancel during clean quarters. The exposure meter and always-on watcher exist to keep the subscription feeling live, but retention is the number to watch above all others.
5. **Commoditisation.** Genuinely copyable by month 3. Speed and the accumulating outcome corpus are the only answers.

## 14. Structured verdict

```
Score:                  74/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical solo founder with a SEA marketplace seller-ops advisor
Time to revenue:        6–10 weeks post-launch
Capital to launch:      $5–10K (₹4–8L)
Top 3 assumptions to validate first:
  1. Shopee + TikTok API access approval for appeals tooling — apply week one, before building
  2. ≥25% of issued penalties are genuinely contestable — manually reconstruct 50 real penalties from 10 sellers
  3. Tool-drafted appeals beat seller-written ones on removal rate — 20 vs 20 head-to-head
Kill criteria:
  - Abandon if both Shopee and TikTok deny API access for this use case
  - Abandon if <25% of sampled real penalties are genuinely contestable
  - Abandon if tool-drafted appeals show no material lift in removal rate over seller-written ones
  - Abandon if monthly churn exceeds 12% after six months (episodic-pain thesis is broken)
```

## 15. Next step — 1-week validation sprint

- **Day 1:** Submit Shopee Open Platform and TikTok Shop developer applications for an appeals-assistance app. Everything downstream is worthless if this fails, so it goes first and the clock starts immediately.
- **Day 2–3:** Recruit 10 active PH/ID sellers from Facebook seller groups. Offer a free manual penalty teardown in exchange for screen-shared access to their last 5 penalties. Reconstruct each by hand: was it genuinely the seller's fault, or the courier's/buyer's?
- **Day 4:** Hand-write appeals for every contestable penalty found and have the sellers file them. This is the real experiment — no product, just the output the product would produce.
- **Day 5:** Offer those same 10 sellers a paid plan, split-testing $29/mo subscription against $49-per-successful-appeal, and record which they pick.

**Falsifiable outcome:** proceed only if (a) at least one platform grants API access or shows a clear path to it, (b) **≥25% of the ~50 reconstructed penalties are genuinely contestable**, and (c) **≥3 of 10 sellers commit money** on either pricing model. Miss any of the three and the idea is dead as specified — the honest fallback would be a per-case service, not a SaaS.
