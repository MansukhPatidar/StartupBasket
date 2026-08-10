---
title: "MachiLedger — waiting-time ledger for Japanese truckers"
slug: waiting-time-billing-evidence
date: 2026-08-10
category: Logistics / Japan — Small Truck Carriers (5–30 Vehicles) Who Are Legally Owed Waiting and Loading Fees They Have Never Once Invoiced
complexity: Low
score: 76
verdict: GO
confidence: Medium
oneLiner: "Turns a driver's dead hours at the loading dock into an itemised invoice the shipper cannot argue with."
tags:
  vertical: Logistics
  model: SaaS
  geography: Global
  secondary: [Japan, Voice-first, Compliance-driven, SMB, Mobile-first, Solo-builder]
axes:
  problem: 17
  demand: 12
  build: 13
  distribution: 11
  revenue: 11
  time: 8
  defensibility: 4
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# MachiLedger

## 1. One-liner

Turns a driver's dead hours at the loading dock into an itemised invoice the shipper cannot argue with.

## 2. Trend signal — why now?

Japanese trucking is the worst industry in the country at passing costs through to customers. The price pass-through compliance rate for truck transport is **20.6% — the lowest of any surveyed industry** ([Logi-Today](https://www.logi-today.com/926840)). Carriers eat the cost. Everyone knows it. Nothing changes.

Except three things just changed at once.

**The law now says they must be paid.** Since 1 April 2025, carriers must record waiting time of 30+ minutes and ancillary work of 1+ hours in driver duty records ([ODIN](https://delivery-system.com/blog/standby-time-and-incidental-work-records/), [MLIT Tohoku](https://wwwtb.mlit.go.jp/tohoku/jk/jk-sub49.html)). The revised 取適法 (Subcontract Act) prohibits shippers from unilaterally setting rates and prohibits *refusing to negotiate* when an SME carrier asks ([One Asia Lawyers](https://oneasia.legal/en/6547)). The 2024 標準的運賃 revision made waiting fees, loading fees and unloading fees **separately collectable line items, not bundled into freight** ([JTA](https://jta.or.jp/member/kaisei_jigyoho/top/hyoujun_unchin.html)).

**Enforcement is real.** The JFTC has issued formal recommendations against Senko (December 2024), Yamato Transport, and NX-NP Logistics for making carriers perform loading and ancillary work unpaid ([Toritekihou](https://toritekihou.com/ninushi/trucktaikiryokin/)). Shippers are now afraid of this. That fear is the carrier's leverage — and most carriers have no idea they're holding it.

**And carriers still aren't billing.** This is the whole opportunity. From a Japanese corporate-legal publication, describing small carriers verbatim: *"I want to charge waiting fees, but I don't know how to proceed"* — the custom that "waiting is normal" leaves them with no starting point for billing. The same source concludes what's needed is **not** waving the law at shippers, but *"recording waiting times, loading/unloading operations, costs, and profitability to create a situation where they can negotiate based on concrete facts"* ([Nagase Sogo](https://houmu.nagasesogo.com/media/column/column-250819-u/)).

The legal right exists. The money is owed. The invoice does not get written. That gap is the product.

```
Provenance:
  - Signal 1 (Demand): Truck transport has the lowest price pass-through rate of any Japanese industry at 20.6%; small carriers say "I want to charge waiting fees but don't know how to proceed" — https://www.logi-today.com/926840 and https://houmu.nagasesogo.com/media/column/column-250819-u/ — observed 2026-08-10
  - Signal 2 (Feasibility): Mandatory recording of 30+ min waiting and 1+ hr ancillary work began 1 April 2025, but digital tachographs cost ¥120,000–220,000 per vehicle, pricing out sub-30-truck operators — https://delivery-system.com/blog/standby-time-and-incidental-work-records/ and https://tsuzuki.jp/blog/36.html — observed 2026-08-10
  - Signal 3 (Economic): JFTC issued Subcontract Act recommendations against Senko, Yamato Transport and NX-NP Logistics for unpaid loading/ancillary work; 2024 標準的運賃 made waiting/loading fees separately collectable — https://toritekihou.com/ninushi/trucktaikiryokin/ and https://jta.or.jp/member/kaisei_jigyoho/top/hyoujun_unchin.html — observed 2026-08-10
  Category: Regulatory arbitrage
```

## 3. The opportunity

The incumbent is **Hacobu**, and understanding why they don't serve this customer is the entire thesis.

Hacobu's MOVO Fleet added waiting-time and loading-time evidence management explicitly to "support appropriate payment of waiting and loading fees" ([Hacobu](https://hacobu.jp/news/14674/)). Good product. Wrong side of the table. Their flagship, MOVO Berth, is deployed at **41,000 shipper locations** — the *shipper* buys it, to reduce their own dock congestion and satisfy their own new obligations. The carrier receives the app because a large shipper told them to install it.

So the evidence exists only where a big shipper already paid for it. The carrier hauling for three mid-size regional manufacturers who've never heard of MOVO has nothing. And that carrier is the majority: **54.7% of Japanese truck operators run 10 vehicles or fewer, and 85.4% run 30 or fewer** ([MLIT](https://www.mlit.go.jp/common/001459429.pdf)).

The other route to evidence is a digital tachograph, at ¥120,000/vehicle for SD-card units and ¥220,000 for communication-enabled ones — roughly ¥4.4M to fit 20 trucks ([Tsuzuki](https://tsuzuki.jp/blog/36.html)). Cost is cited as the primary reason small operators don't adopt. A 6-truck carrier will not spend ¥1.3M to *start* an awkward conversation with the customer who feeds their family.

Three specific failures a focused team beats 10×:

1. **Sold to the wrong party.** Shipper-funded evidence tools are structurally conflicted — the party who benefits from waiting time being invisible is the party paying for the tool. A carrier-owned record is not the same product.
2. **Evidence ≠ invoice.** Even MOVO produces a *record*. Nobody turns it into a yen figure, a rate justification, and a document you can hand a customer. The standard tariff deliberately leaves the amount to each carrier — which is precisely the blank that paralyses them.
3. **Priced and shaped for fleets, not for six trucks.** A ¥100,000 setup fee plus per-vehicle licensing is a non-starter at this size.

## 4. Target market

- **Primary customer:** The owner or 運行管理者 (certified operations manager) of a general freight carrier with 5–30 trucks, in a regional prefecture, hauling for a handful of repeat shippers. Often the owner *is* the dispatcher and sometimes still drives. Revenue ¥80M–¥800M.
- **Why they buy:** Because they are being robbed in 45-minute increments and can feel it without being able to prove it. A 10t truck's waiting time is worth roughly ¥3,000–8,000/hour in industry reference ranges ([Hakopro](https://media.hakopro.jp/1862/)). Six trucks × 45 wasted minutes × 20 working days is a mid-six-figure yen leak *per month* that never appears on any invoice. They don't buy software; they buy the nerve to send the bill.
- **Rough TAM reasoning:** 62,276 truck operators in Japan, 99% SMEs; ~34,600 run ≤10 vehicles and ~48,000 run ≤20 ([MLIT](https://www.mlit.go.jp/common/001459429.pdf)). Serviceable target of ~40,000 carriers. At ¥12,000/mo average, 1% penetration is ¥58M ARR; 3% is ¥173M (~$1.2M).
- **Why now for them:** The recording obligation as of April 2025 means they're *already legally required* to capture this data — most are doing it badly on paper, or not at all. April 2026 brought CLO appointment and reporting duties for large shippers ([Houmu Pro](https://houmu-pro.com/legalrevision/385/)), meaning their customers now have internal logistics officers who are personally measured on dock efficiency. For the first time, a carrier arriving with clean waiting-time data is handing the shipper's CLO something they need, rather than starting a fight.

## 5. Product sketch (MVP)

- **One-tap dock clock.** Driver taps arrival on a phone; geofence at the shipper's site confirms it and auto-starts the waiting timer. Tap again at dock-in and departure. No tachograph, no install, works on the ¥0 phone already in the cab.
- **Voice memo → structured ancillary work.** Driver holds a button and says "手積み、パレット崩れてて30分よけいにかかった." It becomes a categorised, timestamped ancillary-work entry — hand-loading, palletising, waiting for paperwork — mapped to the standard tariff's billable categories.
- **The monthly leak statement.** One page per shipper: total waiting minutes over the 30-minute threshold, ancillary hours, and the yen figure owed at the carrier's own configured rates. This is the artifact the owner has never had.
- **Invoice-ready 請求書 attachment.** Generates the itemised waiting/loading/unloading annex referencing the 標準的運賃 categories, in the format a Japanese accounting department expects to receive.
- **Duty-record compliance export.** The 30+ minute waiting and 1+ hour ancillary entries the law already requires, exported for the 乗務記録 and retained for the mandatory one year — so the tool pays for itself on compliance alone even before a single yen is recovered.
- **Negotiation brief.** A plain-Japanese one-pager per shipper: what happened, how often, what the standard tariff says, and what similar carriers charge. For the owner who has to walk into that room.
- **Shipper scorecard.** Ranks your customers by minutes wasted per delivery — so you know which contract is quietly unprofitable.

## 6. AI angle — what's load-bearing

Remove the AI and this collapses into a stopwatch app that drivers ignore. Two places it does real work:

**Voice is the only viable input.** A driver in a cab with gloves on, engine running, cargo half-loaded, will not fill a form. Japanese speech recognition on noisy in-cab audio, in regional dialect, with trucking jargon (荷待ち, 手積み, バラ積み, パレット), converting a mumbled sentence into a categorised billable event with a duration — that's the product's entire data-capture surface. Ten seconds of talking instead of two minutes of typing is the difference between a dataset and an empty database.

**Turning a month of fragments into an argument.** Taking 400 scattered timer events and voice notes and producing "Shipper A held your trucks 31 hours beyond the threshold in July; 68% of it on Tuesday mornings at the same dock; at your configured rate that is ¥214,000" — that synthesis, plus drafting the negotiation brief in appropriately deferential Japanese business register, is genuinely hard non-AI work. The register matters enormously here: the wrong tone torches a customer relationship the carrier depends on for survival.

## 7. Localization angle

This is Japan-first and barely portable, which is a feature. The wedge is a specific 2024 tariff structure, a specific April 2025 recording obligation, a specific Subcontract Act amendment, and a specific enforcement posture from the JFTC. A generic "driver detention tracker" cannot be localised into this — the value is entirely in knowing that waiting is billed in 30-minute units past the first 30, that ancillary work crosses a 1-hour threshold, and what a 請求書 annex has to look like.

Language is a moat, not a translation task. In-cab Japanese ASR with trucking vocabulary, and output in correct keigo business register, are both things a US competitor will do badly for years.

Adjacent markets exist later (Korea has similar structural issues; the US has detention-pay disputes with a very different legal basis) but they are separate products, not localisations. Build Japan.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** ¥9,800/mo up to 10 vehicles; ¥19,800/mo up to 30; ¥980/vehicle beyond. Benchmarked against the ¥500–2,000/vehicle/month range for Japanese dispatch SaaS ([ASPIC](https://www.aspicjapan.org/asu/article/30642)) — deliberately at the low end, because the buyer is cash-tight and the ROI story must be embarrassingly obvious.
- **ACV:** ~¥145,000 (~$1,000).
- **Rough math to $1M ARR:** ~1,000 carriers × ¥12,000/mo × 12 = ¥144M ≈ $1M. That is 2.5% of the ~40,000 sub-20-truck operator base.
- **Rough math to $5M ARR:** ~4,000 carriers at a higher ¥15,000 blended ACV, which means moving upmarket into 30–100 truck fleets and adding a second revenue line. Realistically this needs the shipper-side flip: once enough carriers present the same clean evidence format, sell the shipper a dashboard to see and fix their own dock congestion. That's a bigger ACV and a different sale — worth reaching for, not required for the ¥300M business that already justifies building.
- **Expansion path:** Vehicles first. Then a success-fee tier on recovered amounts for carriers who'd rather pay from proceeds than from cash. Then a 運行管理 compliance bundle — the duty-record obligation is one of several this customer struggles with, and being the app already in the driver's hand is a strong position from which to absorb the rest.

## 9. Go-to-market wedge — first 100 customers

- **Prefectural trucking associations are the list.** All 47 都道府県トラック協会 exist to help exactly this member, publish member directories, run seminars, and are actively pushing the 標準的運賃 agenda — the JTA publishes carrier-facing guidance on it. Get on the seminar circuit in 3 prefectures. These bodies *want* members to bill correctly; you are their case study, not a vendor pitch. Target 4 seminars × 40 attendees × 15% trial.
- **Ride the enforcement news.** Every JFTC recommendation against a named shipper is covered by the Japanese logistics trade press. Publish, within 48 hours, a breakdown of what the named shipper did and what carriers in that position can now invoice. This is the highest-intent moment that exists in this market — carriers read those stories and think "that's my customer."
- **行政書士 and trucking-licence consultants as channel.** A dense population of specialists (行政書士法人 like the ones publishing the rate-negotiation guides cited above) already advise small carriers on licensing and compliance, already write about rate negotiation, and already have the trust. Revenue share, 20 partners, 5 referrals each.
- **The recovered-yen case study.** First 10 customers get hands-on help running one real negotiation. One carrier who recovers ¥400,000 from a shipper, named and quantified, is the only marketing asset that matters in a conservative industry where owners talk to each other at association meetings.
- **Direct outbound to the ≤10-truck segment.** 34,600 operators, publicly listed via association directories and MLIT registries. Japanese SMB outbound converts poorly cold — so lead with a free "how much are you losing?" calculator based on their fleet size and typical dock waits, which is also the trial's first screen.

## 10. Build complexity — justification

**Low.** Mobile app with geofencing and a timer, off-the-shelf Japanese ASR, an LLM for categorisation and document drafting, PDF generation, standard web backend. No tachograph integration, no hardware, no shipper-side integration, no ERP connectors in v1 — deliberately, because every one of those turns a 10-week build into a 10-month one. The genuinely fiddly parts are in-cab audio quality, geofence reliability at large industrial sites with poor GPS, and getting the Japanese business-register output right. A technical founder with a Japanese-speaking domain partner ships this in 10–14 weeks.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Helps carriers comply with an existing recording obligation and exercise a statutory right. No licence needed. |
| Ethical — no harm / dark patterns | ✅ | Helps the weakest party in the supply chain collect money the law says they are owed. Driver location tracking is on-duty and consented via employer — must be scoped to shift hours. |
| Market exists (evidence above) | ✅ | 62,276 operators, mandatory recording since April 2025, 20.6% pass-through rate, funded incumbent proving willingness to pay on the shipper side. |
| 1–5 person team can build this | ✅ | Low complexity, off-the-shelf AI, no hardware. |
| Launchable with <$50K / ₹40L | ✅ | Build plus association-seminar travel. Well under. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 17/20 | Direct, recurring, quantifiable cash loss in an industry with 20.6% pass-through and driver shortages making every wasted hour more expensive. Felt daily. Not 19–20 because it's a *chronic* pain they've normalised for decades — "waiting is normal" is a real cultural anaesthetic, and normalised pain converts worse than acute pain. |
| Demand evidence | 15 | 12/15 | Strong indirect evidence: a funded incumbent (Hacobu) built precisely this feature for the shipper side, hard regulatory mandate, documented carrier complaints, JFTC enforcement. Docked because I found no direct evidence of small carriers *paying* for a carrier-side tool — the demand is inferred from the structure, not observed in a sale. |
| Build feasibility | 15 | 13/15 | Genuinely simple stack. Held back by Japanese in-cab ASR quality and business-register output, which are real engineering risk, not trivial prompt work. |
| Distribution clarity | 15 | 11/15 | Prefectural associations are a named, motivated, reachable channel with aligned incentives — that's rare and valuable. But Japanese SMB sales is slow, relationship-first, and hostile to cold outreach; conversion math is genuinely uncertain. |
| Revenue mechanics | 15 | 11/15 | Pricing benchmarked against real Japanese SaaS comparables and well within wallet; ROI is arithmetically obvious. $1M needs 1,000 carriers, which is a lot of small logos at this ACV. $5M requires the shipper-side flip that isn't proven. |
| Time to first revenue | 10 | 8/10 | Sellable at the first association seminar; the compliance-export feature alone justifies purchase before any money is recovered. Not 9–10 because Japanese SMBs rarely buy on first contact. |
| Defensibility | 10 | 4/10 | Honestly weak. Hacobu could point this at carriers tomorrow — they already have the feature and 1M driver-app downloads. The real defence is that it would cannibalise their shipper relationships, plus accumulating cross-carrier benchmark data on which shippers waste the most time. That data compounds into something valuable, but not for 18 months. |
| **Total** | **100** | **76/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required`

This needs a Japanese-fluent founder or a genuine co-founder with trucking-industry relationships. Not a market you enter from outside on the strength of a good product. The association channel, the keigo register, and the negotiation-brief tone all require someone who is actually inside this culture.

### Key assumptions to validate (3–5)

1. **Assumption:** Small carriers will actually send the invoice, not just admire the data. **How to test:** Interview 25 owners of 5–20 truck fleets. Ask directly: "if I handed you a document proving Shipper A owes you ¥300,000, would you send it?" Watch for flinching. The honest answer may be no — fear of losing the contract is the single biggest threat to this idea.
2. **Assumption:** Drivers will use the voice capture consistently without a manager standing over them. **How to test:** 2-week paper-and-phone pilot with 3 carriers, 15 drivers. Measure capture rate per delivery. Below 60% and the data is too sparse to invoice from.
3. **Assumption:** Prefectural associations will let a vendor onto the seminar circuit. **How to test:** Approach 5 associations directly in month one. This is cheap to test and gates the whole GTM.
4. **Assumption:** Shippers concede rather than retaliate when presented with clean evidence. **How to test:** Run 5 real negotiations with pilot carriers. Track outcomes including relationship damage, not just yen recovered.
5. **Assumption:** Japanese ASR handles in-cab noise and trucking jargon well enough. **How to test:** Record 50 real in-cab utterances across dialects, measure category-extraction accuracy. Fixable with a custom vocabulary if it's close.

### Risk flags

1. **Customer-power risk — the big one.** The carrier's shipper is often their only meaningful customer. A tool that helps you bill your lifeline may go unused out of pure fear, no matter how good the evidence. Mitigation is positioning: lead with compliance and internal profitability-per-shipper, let billing be the thing they grow into. But if fear dominates, the product gets bought and shelved. This is the risk that kills it.
2. **Incumbent response.** Hacobu has the feature, the driver-app install base, and the brand. If they decide to serve carriers directly, the head start is small. The channel conflict with their shipper customers is the only real protection.
3. **Platform dependency.** Consumer phone hardware, GPS reliability at industrial sites with metal structures, and third-party ASR pricing. All manageable, none existential.
4. **Market timing — possibly early.** The cultural shift from "waiting is normal" to "waiting is billable" is underway but incomplete. The regulation landed in 2025; the norm may take another three years. Early enough to be right, early enough to starve.

## 14. Structured verdict

```
Score:                  76/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Japanese-fluent technical founder with a trucking-industry
                        co-founder or advisor holding prefectural association relationships
Time to revenue:        10–16 weeks
Capital to launch:      ¥2–4M ($15–27K)
Top 3 assumptions to validate first:
  1. Carriers will actually send the invoice — 25 owner interviews, watch for fear of retaliation
  2. Drivers capture consistently unsupervised — 2-week pilot, 3 carriers, need >60% capture rate
  3. Prefectural associations grant channel access — approach 5 in month one
Kill criteria:
  - Abandon if >60% of 25 interviewed owners say they would not send the invoice
    even holding perfect evidence, because they fear losing the shipper
  - Abandon if driver capture rate stays below 40% per delivery after two pilot iterations
  - Abandon if Hacobu or a JTA-endorsed vendor launches a carrier-side billing
    product at under ¥15,000/mo before v1 ships
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Pull member directories from 3 prefectural trucking associations. Call 25 owners of 5–20 truck operations. One question carries the week: *"If I proved Shipper A owes you ¥300,000 in waiting fees, would you invoice them?"* Record yes / no / "it depends" and, critically, the reason behind every no.
- **Day 3–4:** Sit in 3 cabs for a full shift. Time every dock wait by stopwatch. Attempt voice capture on a phone with an off-the-shelf ASR API and measure whether the audio is even usable. Simultaneously email 5 associations requesting a seminar slot.
- **Day 5:** Hand-build one real leak statement for one real carrier from the shift data, present it to the owner, and ask for ¥9,800 to receive it monthly.

**Falsifiable outcome:** proceed only if ≥12 of 25 owners say they would invoice with evidence in hand, in-cab ASR category accuracy clears 75%, and at least 1 of the 3 shadowed carriers puts money down on the hand-built statement. Fewer than 12 yeses means the barrier is fear, not evidence — and no software fixes fear.
