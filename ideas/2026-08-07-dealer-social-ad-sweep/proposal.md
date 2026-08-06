---
title: "PostSweeper — live-ad sweeper for car dealer social teams"
slug: dealer-social-ad-sweep
date: 2026-08-07
category: Compliance / US-SMB — Franchised and Independent Car Dealer Rooftops Advertising Inventory on Facebook Marketplace, Instagram, TikTok and YouTube Shorts
complexity: Medium
score: 76
verdict: GO
confidence: Medium
oneLiner: "Finds the sold unit and the stale price still live on your dealership's social feeds, before the FTC does."
tags:
  vertical: Compliance
  model: SaaS
  geography: US
  secondary: [SMB, AI-agent, Compliance-driven, Automotive, Social-media, Vision-AI]
axes:
  problem: 17
  demand: 13
  build: 11
  distribution: 13
  revenue: 12
  time: 6
  defensibility: 4
founderFit: [technical-heavy, sales-heavy]
featured: false
---

# PostSweeper

## 1. One-liner

Finds the sold unit and the stale price still live on your dealership's social feeds, before the FTC does.

## 2. Trend signal — why now?

March 13, 2026: the FTC sent warning letters to **97 auto dealership groups** covering more than 200 rooftops — everything from independent used lots to AutoNation, Lithia, Group 1, Hendrick and Ken Garff. The letters said the advertised price has to be the price the customer actually pays, with all mandatory fees baked in. Doc fees included, in all 50 states. The named list went public on May 28, 2026.

That alone would be a compliance-software story, and compliance software for dealers already exists. The interesting part is *where* the enforcement is pointing next. NIADA's own dashboard is now warning members that FTC scrutiny has expanded to **TikTok, Instagram Reels, YouTube Shorts and Facebook Marketplace** — and that "placing disclosures only in a caption below a video is not considered sufficient if the video itself displays a price or payment claim." Each platform posting is treated as a **separate advertisement**. At $53,088 maximum civil penalty per violation, a dealer needs only 19 bad posts to clear $1M of exposure.

And here's the part that makes it a product. CBT News, writing to dealership social media teams after the letters, described the actual workflow: a dealership "may have compliant pricing inside the DMS, desking tool, website inventory feed, or finance office, but social media teams often work from screenshots, handwritten notes, outdated specials, vendor templates, or 'quick post this one' requests from managers." The named failure modes are painfully specific — sold units still gathering leads on marketplace platforms, "today only" prices live for weeks, boosted posts carrying yesterday's pricing, "$0 down" claims with no credit qualification language.

Meanwhile the vendor landscape has a hole in the middle of it. The compliance vendors crawl the website: ComplyAuto's Guardian page describes an "automated site-wide crawl of vehicle pages and landing pages," ads, deal jackets and inventory — and makes no mention of Facebook Marketplace, TikTok, Reels or short-form video. The social vendors go the other direction: CARVID, AutoLister Pro, MotorDesk and a dozen others *publish* inventory out to those platforms, but they push, they don't audit. CARVID's own 2026 social-media-compliance guide for dealers contains no discussion of auditing existing live posts, managing stale inventory, or removing sold listings. Both camps are looking away from the surface the FTC just said it's watching.

Provenance:
  - Signal 1 (demand): FTC warning letters to 97 dealer groups / 200+ rooftops over advertised-price violations; named list published — https://www.consumerfinancemonitor.com/2026/04/02/ftc-sends-warning-letters-about-pricing-to-97-auto-groups/ — March 13 / May 28, 2026
  - Signal 2 (demand/feasibility): FTC scrutiny expands to TikTok, Reels, Shorts and Facebook Marketplace; each post a separate ad; in-video disclosure required, captions insufficient — https://niada.com/blog/ftc-scrutiny-expands-to-tiktok-and-video-ads-as-dealer-pricing-rules-tighten/ — 2026
  - Signal 3 (workflow gap): Dealer social teams work from screenshots and manager requests, disconnected from DMS; sold units keep gathering leads; $53,088/violation — https://www.cbtnews.com/ftcs-warning-letters-social-media-teams/ — 2026
  - Signal 4 (economic): Dealers already pay $99–$1,000+/mo for Facebook Marketplace posting tools alone (CARVID $249, LocalShift $599, Shiftly ~$1,000) — https://www.carvidapp.com/best-facebook-marketplace-tools/ — 2026
  - Signal 5 (incumbent gap): ComplyAuto Guardian scans websites/VDPs/ads/deal jackets, no social or short-form video coverage listed — https://complyauto.com/guardian/ — 2026
  Category: Regulatory arbitrage

## 3. The opportunity

Two vendor camps, one gap between them.

**Camp A — compliance vendors.** ComplyAuto, KPA, ComplyNet, Informativ. They sell the GM and the compliance officer a website crawl, ad archives, deal-jacket audits, F&I workflow. Their mental model of "the advertisement" is the VDP. That model was correct in 2019. Guardian claims coverage of "over 2,500 issues" across 50 states — none of them, per its own marketing, on a TikTok video.

**Camp B — social posting tools.** CARVID, AutoLister Pro, MotorDesk, Lazy Poster, Shiftly. They solve *distribution* — get 200 units onto Marketplace without getting the account banned. Their compliance story is about **platform** bans, not **regulatory** violations. CARVID markets "zero bans across 73+ dealerships," which is a Facebook-policy claim, not an FTC one. Lazy Poster is refreshingly honest: "no ban protection (you're on your own)."

Neither camp watches the artifact after it goes live. That's the entire product.

The 10× is this: a compliance officer today cannot answer the question *"what are we currently advertising on social, and does it match the DMS?"* without a person manually scrolling four platforms across however many rooftops. It is nobody's job, it takes hours, it's stale the moment it's done, and much of the risk lives inside video frames where no text scraper reaches. Multimodal models read a price burned into frame 40 of a Reel for fractions of a cent. That capability is what makes a continuous sweep possible now and impossible two years ago.

The wedge is not "we do compliance better." It's **"you are advertising 14 vehicles you already sold, and 6 prices that don't match your own DMS, right now, and here are the screenshots."** That's a demo you can run before the dealer signs anything.

## 4. Target market

- **Primary customer:** The compliance-responsible operator at a US dealer group — GM, dealer principal, or (at 5+ rooftops) a dedicated compliance/marketing director. Sweet spot: **3–25 rooftop groups**, franchised or large independent, that run an in-house BDC/social team or a small agency. Big enough to have a real social presence and a real fear of a $53K-per-post number; small enough that no one has built internal tooling.
- **Why they buy:** In their world the sequence is — FTC named 97 groups publicly in May, their 20-group cross-town rival was on the list, their lawyer sent them the NIADA piece about TikTok, and they genuinely do not know what their 24-year-old social coordinator posted last Tuesday. The CBT description of the workflow ("screenshots, handwritten notes, outdated specials, 'quick post this one' requests from managers") is not a caricature; it's the operating procedure. They buy to convert an unbounded unknown into a report.
- **Rough TAM reasoning:** ~16,990 franchised light-vehicle rooftops (NADA 2025 full-year) plus roughly 40,000–52,000 *active* independent dealers (NIADA data; note ~117,000 licensed locations, but a license is easy to get and most aren't active retail). Not all are targets — the serviceable set is the ones with meaningful social output and multi-rooftop compliance anxiety. Call it 8,000–12,000 realistic accounts. At $400–900/mo that's a $50M–$120M serviceable ceiling, which is exactly right: too small to attract a serious VC-funded assault, plenty for a $5M ARR business.
- **Why now for them:** The letters landed in March, the names went public in May, and the platform expansion guidance is circulating through NIADA and dealer-law newsletters right now. Compliance budget for the 2027 cycle is being set this quarter. This is a 12–18 month window of maximum urgency.

## 5. Product sketch (MVP)

- **Connect once:** link the dealership's Facebook/Instagram/TikTok/YouTube business accounts and its inventory feed (the same feed already going to the website and third-party listing sites).
- **Daily sweep:** pull every currently-live post, listing, Reel and Short from the connected accounts — including boosted/paid variants — and read each one, image and video frames included.
- **Sold-unit catcher:** cross-match every advertised VIN/stock number against the live inventory feed. Flag anything still being advertised that's marked sold or removed. This is the demo-winning feature and the easiest thing to prove.
- **Price-mismatch flags:** compare the price shown *in the post and inside the video frames* against the feed price. Flag deltas, missing mandatory-fee language, "$0 down" and payment claims lacking qualification terms, and rebate/discount claims with no eligibility disclosure.
- **Stale-urgency detector:** find "today only," "this weekend," "ends Sunday" claims still live past their window.
- **In-frame disclosure check:** for video, verify the qualifying terms actually appear on screen and stay legible long enough to read — the specific thing the FTC guidance says a caption can't substitute for.
- **Evidence archive:** timestamped screenshot + frame capture of every post as it appeared, retained. If a regulator or plaintiff's lawyer asks what was live on a given date, that question has an answer.
- **Weekly rooftop scorecard:** one PDF per rooftop, open-issue count and trend, emailed to the GM. This is what gets forwarded to the dealer principal and sells the next rooftop.

## 6. AI angle — what's load-bearing

Remove the AI and the product collapses to a VIN-diff script — useful, but a feature, not a company.

The load-bearing work is **reading advertisements that are images and video, not text**. A dealer's Reel shows a truck, a payment burned into the frame in branded typography, and a disclosure that flashes for 1.2 seconds. There is no text field to scrape. The model has to watch the video, read the on-screen price and payment, extract the vehicle identity from footage and caption together, judge whether the qualifying terms were on screen and legible long enough, and decide whether what it saw contradicts the feed.

That's three genuinely model-shaped jobs: multimodal extraction from frames, entity resolution (matching "🔥 2022 F-150 XLT 🔥 $389/mo" to a stock number without a VIN present), and judgment against a rule set. The middle one is the underrated one — dealer social captions are emoji soup, and deterministic matching fails on them constantly.

Cost is the reason this is a 2026 product. Sampling keyframes from a few hundred short videos per rooftop per month is cents, not dollars. At 2023 vision pricing the unit economics would have inverted.

## 7. Localization angle (if any)

N/A — this is a US-first play, and deliberately so. The whole product is shaped around one regulator's posture (FTC Section 5 + CARS Rule enforcement) layered with 50 state advertising regimes, which is itself the moat. State-level rules on doc fees, "total price," and disclosure conspicuousness vary enough that encoding them is real work.

The natural second market is Canada — provincial rules like OMVIC's all-in pricing in Ontario are structurally similar and the platforms are identical — but that's a month-12 conversation, not a launch decision.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** per rooftop, per month, tiered on connected accounts and post volume.
  - Solo rooftop: **$299/mo**
  - Standard (most franchised rooftops, 4 platforms + boosted): **$499/mo**
  - Group tier: **$399/mo per rooftop** at 5+, with a group-level dashboard
  - Add-on: evidence archive extended retention, **$99/mo per rooftop**
- **Anchor:** dealers already pay $99–$1,000+/mo *per rooftop* for tools that merely post to Marketplace (CARVID $249, ZenLitePro $199, LocalShift $599, Shiftly ~$1,000). Charging $499 for the thing that keeps a $53,088-per-violation number away is not a pricing stretch — it's cheaper than the posting tool it sits next to.
- **ACV:** ~$6,000/rooftop/year standard. Average account is a 3-rooftop group ≈ **$16K–18K ACV**.
- **Math to $1M ARR:** 170 rooftops at $499 ≈ $1.02M. That's roughly **55–60 dealer groups**. Reachable.
- **Math to $5M ARR:** ~850 rooftops, ~280 groups — about 5% of the franchised rooftop base, or 1.5% counting active independents. Needs the group tier working and probably one OEM or 20-group logo as social proof, but it doesn't need a new market.
- **Expansion path:** more rooftops per group (the natural land-and-expand), more platforms (Google Business Profile posts, X, third-party listing sites), retention upsell, then the adjacent product — **agency-side seats**, since the agencies posting on dealers' behalf want the same report to prove they aren't the ones creating the liability. That last one is a real second business.

## 9. Go-to-market wedge — first 100 customers

- **The named list.** The FTC's 97 warned groups are public — CarEdge published the full named list in 2026. Every one of those groups has a dealer principal who has already had the bad meeting. Run the sweep on their public social accounts *before contacting them* (all of it is public data), and send the dealer principal a 90-second Loom showing their own live violations with screenshots. This isn't a cold pitch, it's a finding. Expect meaningfully better than standard cold-email response — a 10–15% reply rate on 97 highly-qualified, already-scared groups plausibly yields 8–15 first customers. That's the entire beachhead.
- **The free public audit as a lead magnet.** Same mechanic, unlimited supply. Scrape dealer social accounts by DMA, run the sweep, send the top-3 findings free. The cost per audit is cents; the conversion asset is the dealer's own screenshot. Target 500 groups in the first 6 months. This is the engine.
- **Compliance consultants and dealer attorneys.** The lawyers writing the client alerts (Sheppard, Crowell, and the dealer-bar generally) are already telling clients to fix social. They need a tool to point at and they don't want to build one. Referral or white-label. 10–20 firms, each with dozens of dealer clients.
- **NIADA and state IADA channels.** NIADA has 13,000+ members and is *already publishing the warning* about TikTok and video ads. State association newsletters, regional conventions, and the NIADA Convention & Expo are the room where this exact anxiety is being discussed. Sponsor one, speak on the topic, leave with a list.
- **The 20-group tell.** Once 3–4 multi-rooftop groups are live, the weekly scorecard PDF does the selling internally — GMs forward it, and group-level rollout is a single conversation rather than 12.

## 10. Build complexity — justification

**Medium.** Off-the-shelf: multimodal model APIs for frame reading and extraction, standard web stack, standard inventory-feed formats. The custom work is real but bounded — platform API integration across four networks with their differing permission models, a video keyframe sampling pipeline that stays cheap at scale, entity resolution from messy captions to stock numbers, and a rules engine encoding federal plus state advertising requirements.

The honest risk is platform access, not model capability: Meta, TikTok and YouTube business APIs each have their own approval process and rate limits, and getting read access to a client's owned accounts is a permissions dance. That's the piece that turns 10 weeks into 16.

Estimate: **12–16 weeks to a credible v1** for two people, with Facebook Marketplace + Instagram first and TikTok/Shorts in month 4. The free-audit engine can ship earlier on public data alone.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Reads the customer's own accounts with permission; public-data audits use publicly visible posts. No scraping of private data. |
| Ethical — no harm / dark patterns | ✅ | Product exists to make advertising more accurate for consumers. Fear-based selling is real but the fear is legitimate and regulator-issued. |
| Market exists (evidence above) | ✅ | 97 named groups, dealers already paying $99–$1,000/mo for adjacent tools, incumbents with a visible coverage hole. |
| 1–5 person team can build this | ✅ | Two people, 12–16 weeks. Platform API approvals are the long pole, not headcount. |
| Launchable with <$50K / ₹40L | ✅ | Inference and infra are the only real costs; well under $50K to first revenue. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 17/20 | $53,088 per violation, a public list of named peers, and no way to answer "what are we advertising right now." Hair-on-fire for the warned cohort, merely urgent for everyone else — which is why it's 17 and not 19. |
| Demand evidence | 15 | 13/15 | Strong and multi-sourced: FTC action, NIADA publishing the warning to members, dealers demonstrably paying $99–$1,000/mo for tools that only post. Docked 2 for lack of verbatim dealer complaints — the signal is regulator- and trade-press-side, and I could not source direct dealer quotes on this specific pain. |
| Build feasibility | 15 | 11/15 | Model work is off-the-shelf. Four platform integrations with real approval friction, plus a video pipeline, put this at 12–16 weeks, not 6. |
| Distribution clarity | 15 | 13/15 | A published list of 97 pre-qualified, already-frightened prospects, plus an audit demo built from the prospect's own public data. Rare clarity. Not 15 because dealer principals are famously hard to reach. |
| Revenue mechanics | 15 | 12/15 | Pricing anchored against tools dealers already buy at the same price point. 170 rooftops to $1M is credible. Docked for unproven churn once the enforcement news cycle cools. |
| Time to first revenue | 10 | 6/10 | The free-audit engine can generate interest in weeks, but full product needs platform approvals, and dealer procurement plus a GM-level sign-off is a 4–10 week cycle. Realistically 3–4 months to first meaningful dollar. |
| Defensibility | 10 | 4/10 | The honest weak axis. ComplyAuto or KPA could add social scanning in two quarters, and they own the compliance relationship already. The moat is accumulated evidence archive, encoded 50-state rules, and speed — an execution moat, not a structural one. |
| **Total** | **100** | **76/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `sales-heavy`

Needs someone who can build a multimodal video pipeline and someone who can get a dealer principal on the phone. The second is harder than it sounds — automotive retail is a relationship business and it is skeptical of outside vendors. A domain advisor with dealer-group compliance experience is close to mandatory.

### Key assumptions to validate (3–5)

1. **Assumption:** Real dealer social accounts contain findable violations at meaningful density — enough that a cold audit reliably surfaces 3+ issues. **How to test:** run the sweep manually on 25 random dealer groups' public accounts. If the median group has fewer than 3 clear issues, the demo doesn't land and the whole GTM breaks.
2. **Assumption:** The compliance-responsible person, not the marketing manager, controls this budget — and will pay per rooftop. **How to test:** 20 discovery calls with GMs and compliance directors at 3–25 rooftop groups. Ask who signs, and what they currently pay ComplyAuto/KPA.
3. **Assumption:** Platform business APIs give sufficient read access to a client's owned posts, including boosted variants, without a fragile scraping dependency. **How to test:** build the Meta and TikTok integrations first, before writing any UI. This is the technical go/no-go.
4. **Assumption:** Urgency survives the news cycle — dealers still buy in month 12, not just month 2. **How to test:** watch whether the FTC brings an actual enforcement action (not just warnings) against a social post by Q1 2027. That event would double the market; its absence would soften it.

### Risk flags

1. **Incumbent response:** ComplyAuto and KPA already sell to this buyer and would ship social scanning as a feature, not a product. This is the single biggest threat and the reason defensibility scored 4. The counter is speed and depth — being demonstrably better at video specifically — and possibly selling *to* them rather than against them.
2. **Platform dependency:** The product lives or dies on Meta, TikTok and YouTube API access. Terms change, permissions tighten, and TikTok's US regulatory situation adds its own uncertainty. Mitigate by never depending on a single platform for the core value.
3. **Market timing / enforcement decay:** Warning letters are not enforcement actions. If the FTC's posture softens, urgency deflates fast. The product must earn its keep on operational value — sold units gathering dead leads costs real money — not on fear alone.
4. **Fear-based selling:** The pitch is "you might get fined." That's effective and it's true, but it caps at the compliance budget and it attracts churn once the anxiety fades. Building genuine marketing value (dead-listing cleanup, lead quality) into v1 is a hedge, not a nicety.

## 14. Structured verdict

```
Score:                  76/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder who can ship a multimodal video pipeline,
                        paired with someone who can sell dealer principals — plus a
                        dealer-group compliance advisor. Automotive retail experience
                        is worth more here than SaaS experience.
Time to revenue:        3–4 months (free public audits can start generating pipeline in 3–4 weeks)
Capital to launch:      $15–25K
Top 3 assumptions to validate first:
  1. Violation density — manually sweep 25 dealer groups' public social; need median 3+ clear issues
  2. Budget owner — 20 discovery calls with GMs/compliance directors at 3–25 rooftop groups
  3. Platform read access — build Meta + TikTok integrations before any UI work
Kill criteria:
  - Abandon if <3 clear issues surface per group across 25 manually audited dealer groups
  - Abandon if fewer than 8 of the 97 FTC-warned groups take a meeting after a personalized audit Loom
  - Abandon if ComplyAuto or KPA ships equivalent video-inclusive social scanning before your v1
  - Abandon if platform API read access to boosted/paid post variants proves unobtainable
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Pull the CarEdge published list of the 97 FTC-warned groups. Pick 25. Manually pull their live Facebook Marketplace listings, Instagram grid and Reels, and TikTok posts. Watch the videos. Log every price-vs-website mismatch, every apparently-sold unit still listed, every payment claim with no qualification language, every expired "today only."
- **Day 3–4:** Take the three worst-offending groups. Record a 90-second Loom each: their own posts, the specific problem, the dollar exposure. Send to the dealer principal and GM by name. Simultaneously book discovery calls with 10 compliance-responsible people at non-warned groups to find out who owns the budget and what they already pay.
- **Day 5:** Decide.

**Falsifiable go/no-go:** across the 25 manually audited groups, the median group must show **≥3 clear violations**, and **≥3 of the 25 outreach targets must reply asking for a full audit** within five business days. Below either threshold, the demo doesn't sell itself — and since the entire GTM rests on the audit-as-cold-open, the idea is dead in its current form.
