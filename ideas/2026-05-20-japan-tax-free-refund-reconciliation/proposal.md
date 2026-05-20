---
title: "MochiTally — tax-free refund tally for Japan shops"
slug: japan-tax-free-refund-reconciliation
date: 2026-05-20
category: RetailTech / Japan
complexity: Medium
score: 77
verdict: GO
confidence: Medium
oneLiner: "Matches every tax-free sale to Japan customs scans so a shop never silently eats the consumption tax."
tags:
  vertical: Retail
  model: SaaS
  geography: Global
  secondary: [Japan-only, Inbound-tourism, Reconciliation, SMB, AI-agent, Multilingual]
axes:
  problem: 16
  demand: 12
  build: 11
  distribution: 11
  revenue: 11
  time: 8
  defensibility: 8
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# MochiTally — tax-free refund tally for Japan shops

## 1. One-liner

Matches every tax-free sale to Japan customs scans so a shop never silently eats the consumption tax.

## 2. Trend signal — why now?

Japan flips its tax-free system on **November 1, 2026**. The "instant exemption at the register" model dies; every tax-free shop must charge the tourist the full 10% consumption tax upfront, then refund it only after Japan customs confirms the goods left the country within 90 days of purchase. Customs confirmation flows back to the shop through the NTA's new 免税販売管理システム (tax-free sales management system). No confirmation = no refund to tourist = shop sits on a 10% liability it must remit to NTA.

Three things lined up at once:

- **42.7M inbound visitors in 2025**, ¥10 trillion in inbound consumption, of which tax-free retail is a ~¥2–3T sliver. February 2026 alone hit 3.4M arrivals — single highest month ever. Tax-free volume per shop is at all-time highs.
- **~57K registered tax-free shops** (Sept 2023 figure, almost certainly 65K+ now). Any shop that hasn't filed the "Notification Form on Provision Method of Purchase Record Information" by Oct 31, 2026 **loses its tax-free permit on Nov 1**. Mass scramble underway.
- The big incumbents (SmartDetax, PIE VAT, Cashier, BCPOS, POS+, J&J Tax Free) are racing for **capture-side** wallet share — passport scan + record-transmit on the sale. **Nobody's selling the post-sale reconciliation layer** that tells a small kimono store in Kyoto, "Of the 184 tax-free sales you made in November, 19 never got customs-scanned and you now owe ¥412,300 in consumption tax."

Provenance:
  - Signal 1 (demand): Shops that haven't filed the notification by Oct 31, 2026 lose tax-free permit on Nov 1; ~57K shops in scope — https://www.nta.go.jp/publication/pamph/shohi/menzei/202506/pdf/0025006-106.pdf — 2026-05
  - Signal 2 (feasibility): SmartDetax JPrefund API is open and free-to-connect even for non-customers; NTA's new tax-free sales management system pushes customs confirmations back to shops electronically — https://smartdetax.com/refund/ — 2026-05
  - Signal 3 (economic): 42.7M inbound visitors in 2025, ¥10T spend, yen-weakness still driving inbound; tax-free vendors PIE VAT, Cashier, BCPOS aggressively expanding — https://worldinsight.com/news/society/inbound-visitors-surpass-39-million-japans-tourism-boom-and-a-turning-point-for-a-tourism-nation/ — 2026
  Category: Regulatory arbitrage (system-flip-triggered new workflow)

## 3. The opportunity

When Japan moves to refund-method on Nov 1, 2026, a brand-new operational risk lands on every tax-free shop: **the customs-scan reconciliation gap**. Every sale is now a 90-day open liability. The big POS/refund vendors handle the FRONT of the transaction (passport OCR, send record to NTA). What they don't sell, and don't want to sell, is the BACK: a daily/weekly check against the NTA system and refund-operator data that says "these sales got confirmed, these didn't, here's your real consumption-tax liability." Refund operators have no incentive to make that visible because their commission rides on the gross sale, not the confirmed sale.

Incumbent gap, specifically:

- SmartDetax / Cashier / BCPOS / POS+ sell at the POS. Their dashboards stop at "record transmitted." They don't tell the shop owner whether customs actually confirmed.
- PIE VAT and Global Blue's JV are refund operators — they take a 1.5%+ commission and bundle reconciliation inside their own app. Useful if you outsource everything to them, but the shop loses independent visibility and pays a percentage of every yen sold whether customs scans or not.
- Shops that want to **keep refunds in-house** (avoid the 1.5% bleed × billions of yen of tax-free sales) get no third-party tool that ties NTA confirmations to their own books.

A focused AI-first team can be the Switzerland of tax-free reconciliation — pull from NTA's system + any refund operator + any POS, surface every leak, and price it as boring monthly SaaS not a percentage take.

## 4. Target market

- **Primary customer:** Owner-operator and 2–10 store regional chains of tax-free-permitted shops in Japan doing ¥500K–¥30M/month in tax-free sales. Specifically:
  - Independent kimono / kogei / ceramics / craft shops in Kyoto, Asakusa, Kanazawa, Naha, Hakone
  - Regional sake breweries with attached retail
  - Small drug-store / cosmetic chains under 30 stores
  - Single-shop souvenir stores on tourist routes (Mt. Fuji corridor, Hokkaido onsen towns, Okinawa)
- **Why they buy:** Their accountant calls in late January 2027 and says "you've got ¥3.2M of unconfirmed tax-free sales from November and December — pay or contest." They have no clean way to even know which sales failed, who the tourist was, or whether the refund operator already covered it. Annual surprise tax bills + tourist complaints flowing into the shop ("where's my refund?!").
- **Rough TAM reasoning:** ~57K tax-free shops, drop the top ~10K large-format chain stores already locked into SmartDetax/POS+ enterprise contracts. Addressable tail ~30–40K shops. Even 10% capture at ¥6K/mo = ¥216M ARR (~$1.4M). Stretch case 8K shops × ¥8K = ¥768M (~$5M).
- **Why now for them:** Nov 1 is non-negotiable. They have to choose: outsource everything to a refund operator at 1.5%+ (giving up ¥3–7M/yr on ¥200–500M sales), or run it themselves with no visibility tool. We're the visibility tool.

## 5. Product sketch (MVP)

- **Daily reconciliation dashboard.** Every tax-free sale shows up with status: "Awaiting export" → "Customs confirmed" → "Refunded to tourist" → "Failed / 90-day clock expired."
- **Liability ticker.** A single number: "If you closed the books today, your unconfirmed consumption tax liability is ¥X." Updates in real time.
- **Multi-source ingest.** Connect to SmartDetax JPrefund API, PIE VAT exports, Cashier/BCPOS POS feeds, plus a manual CSV importer for shops on legacy systems.
- **Tourist lookup.** Counter staff scans the receipt or passport, app shows "Tanaka-san's refund cleared on Nov 7" or "Still waiting on customs confirmation, day 42 of 90." Stops the angry "where's my refund?" calls at the door.
- **Auto-generated NTA reporting pack.** Monthly/quarterly: "Here are the X sales that failed confirmation, here's your consumption tax remittance amount, here's the support evidence."
- **Multilingual receipt notes.** Generates a printed slip (EN/ZH/KO/TH) telling the tourist exactly what to do at the airport, with QR to a status-check page. Reduces airport-scan no-shows.
- **Failed-scan recovery nudges.** Sends a polite email/LINE/WeChat to the tourist at day 30 and day 60 reminding them to scan at customs before the window closes.

## 6. AI angle — what's load-bearing

Three places AI is doing real work, not decoration:

1. **Multilingual tourist support.** A tourist emails the shop in Mandarin asking why their refund hasn't come. The system reads the email, looks up the sale, replies in fluent Mandarin with the actual customs status. Same for Korean, Thai, Vietnamese, English. Without LLMs this is a hire of 3–5 multilingual staff per shop, impossible for SMBs.
2. **Document/receipt OCR.** Tourists keep paper receipts and ask staff to look them up. Snap a photo, GPT-4V-class vision pulls the receipt ID and matches it to the sale. Same for passport pages when the original scan was rejected by NTA.
3. **Anomaly detection on customs gaps.** When a specific tourist nationality or a specific sale type shows abnormal "no-scan" rates (e.g. consumables for short-stay Chinese tour groups), surface it so the shop can adjust counter scripts.

Strip AI out: the product collapses into a Japanese-only spreadsheet that the owner already has. AI is the layer that makes it a tool, not a record.

## 7. Localization angle

This is Japan-only by definition. The whole product is built on:

- NTA's 免税販売管理システム data hookup
- Japan customs API
- SmartDetax / PIE VAT / J&J Tax Free / BCPOS / Cashier / POS+ partner feeds
- Receipt printing in JP/EN/ZH/KO/TH
- Customer messaging via LINE (Japan / Taiwan / Thailand), WeChat (China), KakaoTalk (Korea), email (EU/US)
- Pricing in yen at ¥3,980–¥9,800/mo tiers — fits a single-shop owner's wallet
- Japanese-language onboarding videos, JP-speaking phone support, salesperson on the ground in Kyoto/Tokyo

A non-Japanese team would lose to a local on day one. A Japanese-speaking technical founder (or 2nd-gen kikoku Japanese-American) with one JP-native salesperson is the right shape.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:**
  - Starter: ¥3,980/mo (~$26) — 1 location, up to 200 tax-free sales/mo
  - Pro: ¥9,800/mo (~$65) — 1 location, unlimited sales, multilingual tourist messaging
  - Chain: ¥7,800/mo (~$52) per location, 5+ locations
  - One-time setup: ¥30,000 (~$200) covering NTA / refund-operator API connection
- **ACV:** ~¥80K (~$530) blended, weighted toward Pro tier
- **Math to $1M ARR (~¥150M):** 1,560 paying shops at blended ¥8K/mo. ~5% of the 30K addressable shop tail. Achievable in 12–18 months given the Nov 1 forcing function.
- **Math to $5M ARR (~¥750M):** 7,800 shops at ¥8K/mo, or 5,000 at ¥12.5K with chain mix. Plausible by month 30 if the unfair advantage holds.
- **Expansion path:**
  - Per-location seat fees as shops add stores
  - Premium "refund float financing" — the shop fronts the refund out of working capital; we offer a low-fee bridge against confirmed-pending refunds (later product, not v1)
  - White-label the reconciliation layer to mid-tier POS vendors and Japanese accounting firms

## 9. Go-to-market wedge — first 100 customers

- **Free "Nov 1 readiness check"** landing page in Japanese: shop owner enters their tax-free monthly turnover, system estimates how much liability they'll silently eat post-Nov-1 based on industry-typical 5–10% scan-failure rates. Lead magnet that doubles as a fear-of-loss anchor. Push via Google search ads on "リファンド方式" + "免税" + "対応" keywords (already trending, low CPC).
- **Inbound tourism associations.** Every prefecture has an inbound-tourism business association (e.g. 全国免税店協会 with ~5K members). 2–3 in-person seminars in Kyoto, Asakusa, Naha presenting "the Nov 1 reconciliation gap" with a co-branded handout from a local tax advisor. Close 10–20 shops per event.
- **Accountant channel.** Japan's tax-advisor (税理士) profession is structured by region. Pitch a referral fee of ¥10K per signed shop to 50 small zeirishi firms in tourism-heavy prefectures. They're already getting the late-January 2027 panic calls — sell them the tool that lets them be the hero.
- **Refund-operator complement.** Quietly target shops that use PIE VAT or smaller refund operators but want independent reconciliation. "Don't trust the operator's own numbers" angle. LinkedIn + cold email to shop owner-operators.
- **Japan-side Reddit/X/Note.com content.** A weekly note.com post in Japanese ("11月1日からの免税運用、見落とされている落とし穴") aimed at the owner-operator who is doing their own research. Cheap, evergreen, ranks in Google JP.

## 10. Build complexity — justification

Medium. Three reasons it's not Low:

- **API access to NTA's tax-free sales management system** isn't a public REST endpoint with self-serve docs — it's a regulated data feed that goes to permitted shops. Path: partner with a refund operator (SmartDetax JPrefund is publicly open, PIE VAT will partner for fee), OR build via permission-delegated shop accounts. Some legal/contract weeks.
- **Multiple POS feeds** — Cashier, BCPOS, POS+, OSK, smaller regional POS — every connector is custom for the first ~6 we ship.
- **Bilingual support and on-the-ground Japan onboarding** — non-trivial for a foreign founder; needs at least one full-time JP-native operator from day one.

Estimate: 2 engineers + 1 JP-native ops/sales person, v1 in 16–20 weeks. Public launch Sept 2026, paid customers from launch through Nov 1, hard go-live Nov 1.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Pure SaaS on top of NTA + refund operator data; no consumer-credit or VAT remittance happening on our balance sheet |
| Ethical — no harm / dark patterns | ✅ | Helps shops surface their real liability; helps tourists actually get refunded |
| Market exists (evidence above) | ✅ | 57K+ shops, ¥10T inbound, Nov 1 forcing function |
| 1–5 person team can build this | ✅ | 2 eng + 1 JP ops; off-the-shelf APIs |
| Launchable with <$50K / ₹40L | ✅ | Bootstrap; ~$30K cash burn through MVP if founders take ramen pay |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | Hair-on-fire on Day 1 of Nov 1 — every uncscanned sale is real tax owed. Sharp pain, but recurring rather than emergency once running |
| Demand evidence | 15 | 12/15 | Three independent signals; regulatory pamphlet + vendor scramble are real. Direct survey data of "shops worried about reconciliation specifically" not yet found — discount slightly |
| Build feasibility | 15 | 11/15 | Off-the-shelf APIs + POS connectors. Friction = NTA partner access negotiation + multiple POS connectors. Not solo-shippable in 6 weeks |
| Distribution clarity | 15 | 11/15 | Inbound-tourism associations + zeirishi channel + paid keyword ads. Named lists exist. Conversion math defensible but unproven |
| Revenue mechanics | 15 | 11/15 | ¥4–10K/mo fits Japanese SMB wallets; ACV math works; main risk is shops choosing to outsource entirely to refund operator and skip our layer |
| Time to first revenue | 10 | 8/10 | Pre-orders open Sept 2026, go-live revenue Nov 1. Aggressive but achievable |
| Defensibility | 10 | 8/10 | Workflow lock-in once reconciliation runs monthly. Switzerland positioning (independent of POS / refund operator) is hard to copy for a refund operator without burning their commission model |
| **Total** | **100** | **77/100** | GO |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required`

Best fit: Japanese-speaking technical founder with a tax/finance or Japan-retail background, paired with one JP-native sales/CS operator who can pound the pavement in Kyoto/Asakusa.

### Key assumptions to validate (3–5)

1. **Assumption:** NTA's customs-confirmation data is accessible to a third-party SaaS via either (a) the shop's own delegated credentials or (b) a partner agreement with SmartDetax JPrefund or PIE VAT. **How to test:** Email NTA's tax-free policy desk + SmartDetax + PIE VAT BD in week 1 with a specific integration ask; need at least one written "yes" within 30 days.
2. **Assumption:** Shops with ¥500K–¥30M/mo tax-free sales experience real reconciliation pain serious enough to pay ¥4–10K/mo. **How to test:** 30 in-person interviews across Kyoto, Asakusa, Naha tax-free shops between June and August 2026, with a paid-pilot offer at the end of each.
3. **Assumption:** Customs-scan failure rates are materially non-zero (>3%). **How to test:** Pull whatever public NTA data exists on inbound-tourist customs throughput; talk to refund operators on background. If failure rate is below 1%, the reconciliation pain is too small.
4. **Assumption:** Refund operators (PIE VAT, J&J) tolerate or partner with a Switzerland reconciliation tool rather than try to crush it. **How to test:** BD conversation with each operator's product lead in months 1–2.

### Risk flags

1. **Platform dependency:** If NTA changes API terms or restricts third-party access, we're cooked. Mitigate by going through permitted shop credentials, not direct NTA access.
2. **Incumbent expansion:** SmartDetax or PIE VAT decides to ship reconciliation as a free upsell to their existing customers. Real risk — answer is to launch in Q3 2026 and lock in the long-tail of shops *not* on their stack.
3. **Market timing:** Shops procrastinate, lose tax-free permit on Nov 1, exit the market. Smaller TAM than projected. Watch the Oct-Nov 2026 permit-renewal numbers carefully.
4. **Foreign founder disadvantage:** Japan B2B sales is relationship-heavy. Without a strong Japanese-native operator, distribution stalls.

## 14. Structured verdict

```
Score:                  77/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Japanese-speaking technical founder + 1 JP-native ops/sales hire; prior tax-tech or Japan retail experience strongly preferred
Time to revenue:        4–6 months (pre-orders Sept 2026, live revenue Nov 1, 2026)
Capital to launch:      ¥4–6M / $25–40K
Top 3 assumptions to validate first:
  1. NTA + refund-operator data access — confirm written integration path within 30 days
  2. 30 in-person Kyoto/Asakusa/Naha shop interviews show ≥40% willing to pre-order at ¥4K+/mo
  3. Industry customs-scan failure rate ≥3% (otherwise pain is too small)
Kill criteria:
  - Abandon if no API/partner integration path locked by July 31, 2026
  - Abandon if <10 pre-orders signed by Sept 30, 2026
  - Abandon if SmartDetax or PIE VAT ships an equivalent free reconciliation dashboard before our Oct launch
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Cold-email NTA tax-free desk + SmartDetax + PIE VAT + J&J Tax Free + Global Blue Japan asking specifically about third-party reconciliation data access. Goal: 2+ replies indicating a path exists.
- **Day 3–4:** Build a Japanese landing page with the ¥-liability calculator described above. Run ¥30K of Google Ads on "リファンド方式 対応" cluster. Target ≥50 email signups in 4 days.
- **Day 5:** Phone or in-person meet with 3 Kyoto/Asakusa tax-free shop owners. Show the dashboard mockup. Ask the closing question: "Would you pre-pay ¥4,000/month starting Nov 1, 2026, for this?"

**Go / no-go condition:** ≥1 written data-access path AND ≥50 landing-page signups AND ≥1 of 3 shop interviews says "yes, take my money now." Anything less = back to the cluster shelf.
