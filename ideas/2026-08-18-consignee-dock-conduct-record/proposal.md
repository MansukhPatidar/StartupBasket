---
title: "DockLog — consignee conduct record for Japanese wholesalers"
slug: consignee-dock-conduct-record
date: 2026-08-18
category: Logistics / Japan
complexity: Low
score: 74
verdict: GO
confidence: Medium
oneLiner: "Proves a Japanese wholesaler's receiving dock didn't strand truckers, before the JFTC decides it did."
tags:
  vertical: Logistics
  model: SaaS
  geography: Japan
  secondary: [Compliance-driven, SMB, Voice-first, AI-agent, Regulatory-deadline]
axes:
  problem: 15
  demand: 12
  build: 13
  distribution: 11
  revenue: 11
  time: 7
  defensibility: 5
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# DockLog

## 1. One-liner

Proves a Japanese wholesaler's receiving dock didn't strand truckers, before the JFTC decides it did.

## 2. Trend signal — why now?

On 17 June 2026 the Japan Fair Trade Commission finalised its revision of the 物流特殊指定 (Logistics Special Designations) under the Antimonopoly Act, effective **1 April 2027**. The revision does something that has never been done before in Japanese logistics regulation: it makes the **着荷主 — the consignee, the party *receiving* the goods — a directly liable actor.**

Until now the regulatory target was the 発荷主, the party who ordered the shipment and signed the contract with the carrier. The receiver was outside the frame. From April 2027, a receiving warehouse that makes a driver wait three hours, or has him sort pallets for free, or reverses the unload slot twice, is committing a designated unfair trade practice — **even where no contract exists between that receiver and that carrier.** The conduct is captured through the ordering shipper.

The enforcement apparatus is already running at volume and is not theoretical. The JFTC's FY2025 survey results, published 25 June 2026, report **779 warning letters issued to shippers** and **105 on-site inspections**. The industries that collected the most warnings are precisely the mid-market receiving businesses: construction materials/minerals/metals wholesale, food manufacturing, food & beverage wholesale, and agricultural cooperatives. The most common cited conduct was 不当な給付内容の変更及びやり直し — improper changes and redoing of work — which is exactly what a chaotic receiving dock produces.

Second enforcement arm: MLIT's トラック・物流Gメン, expanded in November 2024 and given a dedicated secretariat in September 2025, now runs joint surveillance months with the JFTC. Its sanction is 社名公表 — publishing the offender's name. For a regional food wholesaler whose entire business is supermarket relationships, being named is worse than the fine.

And here is the part that turns this from a large-enterprise problem into a mid-market one. Commentary on the 2027 revision is explicit that the old capital-size threshold no longer draws the boundary: liability follows **優越的地位** — relative bargaining superiority — so a ¥300M-capital wholesaler that dominates its owner-operator carriers is squarely in scope. As one practitioner summary puts it, 規模での切り分けが成立しない — you cannot carve yourself out by being small.

So: a new class of defendant, created by name in June 2026, given a hard date of April 2027, with an enforcement body already issuing 779 warnings a year — and no tooling built for them.

Provenance:
  - Signal 1 (demand/economic): JFTC FY2025 survey — 779 warning letters to shippers, 105 on-site inspections; top industries are building-materials wholesale, food manufacturing, food & beverage wholesale — https://www.jftc.go.jp/houdou/pressrelease/2026/jun/260625_buttokuchousakekka.html — 25 June 2026
  - Signal 2 (regulatory): JFTC finalises revised 物流特殊指定 introducing 着荷主規制 (consignee liability), effective 1 April 2027; no capital-size safe harbour — https://www.jftc.go.jp/houdou/pressrelease/2026/jun/260617_kokuji.html and https://toritekihou.com/ninushi/butsuryu-tokushushiteikaisei2027/ — 17 June 2026
  - Signal 3 (feasibility): Voice AI inference now runs $0.07–$0.31/minute on commodity platforms, making a phone-and-photo evidence capture layer viable at SMB price points without an app rollout — https://www.retellai.com/blog/best-ai-voice-agent-services-businesses — 2026
  Category: Regulatory arbitrage

## 3. The opportunity

The incumbent is **Hacobu's MOVO Berth**, the dominant truck-reservation product, deployed across all 47 prefectures. It is a genuinely good system and it is aimed somewhere else. MOVO is dock-slot *scheduling* infrastructure for large distribution centres — quote-only enterprise pricing, an implementation project, bay-management hardware assumptions, and a value proposition of *reducing* waiting time through better scheduling.

That is an operations product. What April 2027 creates is a **legal-evidence** problem, and the two are not the same thing.

A regional wholesaler with two docks and eleven inbound trucks a day does not need slot optimisation. It needs to be able to answer one question, eighteen months after the fact, when a carrier complains to the Gメン: *what actually happened at our dock on 14 March, and can we show it?* Right now the honest answer is a paper 受付簿 in a binder, a security-camera loop that overwrote itself in 30 days, and a warehouse chief's memory.

The gap is sharp: incumbents sell time-reduction to enterprises who can afford implementation projects; the newly-liable population is mid-market receivers who need defensible records and have never bought logistics software in their lives. Nobody is selling proof-of-innocence to the party that just became a defendant.

There's a second-order angle that makes this stickier than pure compliance. The same record that defends the wholesaler is the record that settles a waiting-fee dispute with a carrier. Post-2027, carriers will be invoicing 待機料 with much more confidence. The receiver who can say "our record shows 38 minutes, not 2 hours" saves real money on the invoice, not just on the regulatory risk.

## 4. Target market

- **Primary customer:** The 物流部長 or 総務部長 (logistics or general-affairs manager) at a Japanese regional wholesaler or manufacturer with 1–4 inbound receiving docks — food & beverage wholesale, building materials, machinery parts, agricultural co-ops. Typically ¥2–50B revenue, 50–500 employees, no dedicated legal or compliance function. These are exactly the industries the JFTC's own FY2025 data ranks at the top of its warning list.
- **Why they buy:** Not because they want to be virtuous about driver welfare. Because a Gメン 社名公表 would poison their supermarket and general-contractor relationships, and because the ordering shipper — often a large manufacturer who *is* a 特定荷主 with a CLO and a reporting obligation — is now pushing conduct requirements down onto its receiving partners. The pressure arrives from the customer, not just the regulator.
- **Rough TAM reasoning:** Japan's wholesale sector runs to the low hundreds of thousands of establishments (METI/Statistics Bureau commerce statistics), but the honest serviceable slice is far narrower: businesses with a genuine inbound dock, multiple daily carrier visits, and enough bargaining superiority over their carriers to be in scope. I'd size that at roughly 20,000–40,000 firms. At a ¥30,000/month average that's a ¥7–14B theoretical ceiling — far more than enough headroom for a ¥300–600M ARR business, which is the actual target. I am deliberately not claiming precision here; the establishment-count tables exist on e-Stat but I could not pull the exact filtered figure, and I'm not going to invent one.
- **Why now for them:** April 2027 is a hard date, and the behaviour that creates liability is happening at their dock every single day between now and then. Every day without a record is a day they cannot later reconstruct.

## 5. Product sketch (MVP)

- **Dock arrival/departure capture** — the warehouse hand scans a QR code or taps a tablet at the receiving door on truck arrival and on release. Two taps. Timestamped, immutable, no driver app install required.
- **Ancillary-work flagging** — a one-tap record when the driver is asked to do anything beyond drop-and-go: sorting, 検品 (inspection), pallet transfer, label removal. This is the single most legally dangerous category under the revision and the one nobody currently logs.
- **Driver-side voice confirmation** — the driver calls a number or taps a link and speaks a 15-second confirmation in Japanese; AI transcribes and structures it into a countersigned record. This is what converts a self-serving internal log into two-sided evidence.
- **Waiting-time exception alerts** — real-time notification to the manager when any truck crosses 60 minutes on site, so the problem gets fixed while the truck is still there rather than discovered in a subpoena.
- **Monthly conduct summary** — per-carrier waiting-time distribution, ancillary-work incidence, slot-change frequency. The document you hand a Gメン inspector, or your ordering shipper's CLO when they ask.
- **Evidence pack export** — given a date and a carrier, produce a defensible bundle: timestamps, photos, driver confirmations, slot-change history, in the format that supports a JFTC response.
- **Slot-change audit trail** — records who changed an unload appointment, when, and how many times. Directly targets やり直し, the JFTC's most-cited conduct category.

## 6. AI angle — what's load-bearing

Strip the AI out and this degrades into a timestamp app that a warehouse chief will stop using in three weeks. Two places where it does real work:

**Japanese voice capture from drivers.** The driver is the counterparty whose confirmation makes the record credible, and the driver will never install your app, has 40 seconds, is often in his 50s or 60s, and may be speaking Kansai or Tōhoku dialect. A structured form is dead on arrival. A 15-second spoken confirmation, transcribed and parsed into structured fields, is the only capture mechanism that survives contact with a real loading dock. At $0.07–$0.31/minute this now costs pennies per truck — it did not two years ago.

**Conduct classification.** The hard part isn't recording that a driver was on site 94 minutes. It's deciding whether those 94 minutes constitute 不当な荷待ち, and whether "he helped move a few cases" was 附帯作業 that needed to be contracted and paid. That's a judgment against regulatory text and JFTC guidance applied to messy free-text and voice input. Classifying it, flagging the exposure, and drafting the summary in the register a Japanese compliance document needs is the load-bearing work — and it's what a wholesaler's 総務部長, who has never read the 物流特殊指定, is actually buying.

## 7. Localization angle

This is Japan-only by construction, and that's the moat, not a limitation.

- **Language:** Everything is Japanese — driver voice in dialect, warehouse worker UI, and output documents in formal compliance register (敬体/常体 conventions matter when the reader is an inspector).
- **Regulatory specificity:** The product encodes 物流特殊指定, 優越的地位の濫用 doctrine, and Gメン 是正指導 practice. This knowledge does not transfer anywhere else on earth.
- **Pricing rails:** ¥ pricing with 銀行振込 and 請求書払い (invoice payment), because mid-market Japanese firms will not put a recurring SaaS charge on a corporate card. Credit-card-only checkout would kill the deal at these accounts.
- **Deployment reality:** Must work on the cheap Android tablet already bolted to the dock wall and on a warehouse chief's flip-adjacent phone. No assumption of modern hardware.
- **Sales culture:** These accounts buy through 業界紙 credibility, trade associations, and a referral from their 顧問社労士 or accountant — not through a self-serve signup flow.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** ¥20,000/month for a single-dock site, ¥40,000/month for 2–4 docks, ¥80,000+/month for multi-site groups. Annual invoice, paid up front — standard for this buyer.
- **ACV:** ~¥360,000 (~$2,400) blended.
- **Rough math to $1M ARR (~¥150M):** ~420 sites at ¥30,000/month. That is a tiny fraction of the serviceable base and reachable through trade press and association channels alone.
- **Rough math to $5M ARR (~¥750M):** ~2,000 sites, which realistically requires the multi-site enterprise tier (a food wholesaler group with 15 depots) plus a channel partnership with a logistics consultancy or an accounting firm network. Not a solo-founder outcome at that point — call it a team of 6–8.
- **Expansion path:** Per-dock expansion within a group is the natural motion. Then the carrier-facing upsell: reconciling 待機料 invoices against your own record, which converts the product from a cost centre into something that demonstrably saves money on freight invoices. Then a data product — anonymised regional dock-performance benchmarks, which is the kind of thing 業界紙 write about for free.

## 9. Go-to-market wedge — first 100 customers

- **Mine the JFTC's own published warning data.** The FY2025 survey names the industries hit hardest — building materials wholesale, food manufacturing, food & beverage wholesale, agricultural cooperatives. Cross-reference against prefectural wholesaler association member directories, which are public, to build a target list of ~1,500 named firms in the top three warned sectors. Direct mail (not email — 郵送 gets opened at these accounts) with a one-page "April 2027 で何が変わるか" explainer and a dock self-assessment checklist.
- **Sell through the ordering shippers.** Large 特定荷主 manufacturers have a CLO, a mandatory medium-to-long-term plan due 31 October 2026, and a reporting obligation — and their plan requires reducing waiting time at destinations they don't control. Land 3–5 of them and they will hand DockLog to their receiving partners as the standard record-keeping method. This is the highest-leverage channel by a wide margin: one manufacturer relationship can deliver 30+ receiving sites.
- **業界紙 credibility play.** 物流ウィークリー, LOGI-TODAY, and 日本流通新聞 cover this regulation constantly and are read by exactly this buyer. A monthly plain-Japanese column explaining 着荷主規制 obligations, with the product as the footer, is how trust is built in this market. Slow, but it compounds and it's cheap.
- **Ride the Gメン 集中監視月間.** MLIT runs concentrated surveillance months (Oct–Nov in 2025). Time outbound campaigns to the announcement — the moment a wholesaler reads that joint JFTC/MLIT patrols are active in their prefecture is the moment they'll take a meeting.
- **顧問社労士 / 行政書士 referral network.** These firms already advise mid-market Japanese businesses on labour and administrative compliance and are actively looking for something concrete to sell into the 2027 deadline. Revenue-share referral, 20%.

## 10. Build complexity — justification

**Low.** The core is timestamp capture, photo storage, a voice transcription pipeline, and document generation — all off-the-shelf. The genuinely hard parts are not technical: encoding the regulatory logic correctly, and making a two-tap UI that a 58-year-old warehouse chief will actually use in the rain. A technical founder with a Japanese-market partner ships a credible v1 in 8–10 weeks. The long pole is regulatory review of the output documents by a competent 弁護士 or 行政書士, which should be budgeted and not skipped — the whole product promise is that the export holds up.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Record-keeping tool; helps compliance rather than circumventing it. Driver voice capture needs explicit consent under APPI — build it into the flow. |
| Ethical — no harm / dark patterns | ✅ | The interests align unusually well: better records protect drivers from unpaid work and protect receivers from unfair accusation. |
| Market exists (evidence above) | ✅ | 779 JFTC warnings, named liability effective April 2027, incumbent priced for enterprises only. |
| 1–5 person team can build this | ✅ | Off-the-shelf stack; the scarce input is Japanese-market domain access, not engineering. |
| Launchable with <$50K / ₹40L | ✅ | Sub-$15K to a paid pilot. Main cost is legal review and travel. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 15/20 | Real and dated, with named regulatory consequence and 社名公表 reputational risk. Held below 17 because the pain is *anticipated* — most targets haven't been inspected yet, and pre-deadline compliance buying is notoriously procrastinated until Q4 of the deadline year. |
| Demand evidence | 15 | 12/15 | Strong regulatory and enforcement evidence (779 warnings, finalised告示). Docked because I have no verbatim quote from a *receiver* saying "I need this" — the customer-voice quotes I found are carriers complaining about receivers, which proves the behaviour, not the willingness to pay to document it. |
| Build feasibility | 15 | 13/15 | Off-the-shelf throughout. Voice-in-noisy-warehouse and dialect handling are the only real engineering risks. |
| Distribution clarity | 15 | 11/15 | Named lists, named trade papers, and a genuinely high-leverage CLO channel. Held down because Japanese mid-market sales cycles are slow and relationship-gated for a foreign or unknown founder. |
| Revenue mechanics | 15 | 11/15 | ¥30K/month is well within this buyer's software budget and the $1M path needs only ~420 sites. The $5M path requires a channel and a team, which is a real assumption. |
| Time to first revenue | 10 | 7/10 | Paid pilots achievable in 8–12 weeks given the deadline, but Japanese procurement rarely moves in under a month even when motivated. |
| Defensibility | 10 | 5/10 | Regulatory knowledge and workflow lock-in build a genuine 12-month moat, and accumulated dock records are switching-cost. But Hacobu could ship a down-market SKU, and they have the brand and the 47-prefecture footprint. This is the weakest axis and the honest risk. |
| **Total** | **100** | **74/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required`

Blunt version: this needs a Japanese-speaking founder or a committed Japanese co-founder. Not "we'll hire a translator." The buyer, the regulation, the trade press, and the driver on the dock are all operating in Japanese, and the sales motion runs on relationships and 業界紙 credibility. A non-Japanese solo founder should not attempt this.

### Key assumptions to validate (3–5)

1. **Assumption:** Mid-market receivers perceive 着荷主規制 as their problem, not their ordering shipper's problem. **How to test:** 25 structured calls with 物流部長 at food and building-materials wholesalers. Ask unprompted: "何が2027年4月に変わりますか?" If fewer than 8 can answer, awareness is too early and the deadline needs to be closer.
2. **Assumption:** Warehouse floor staff will actually perform the two-tap capture on every truck without supervision. **How to test:** Paper-and-clipboard pilot at 2 sites for three weeks. Measure capture rate. Below 80% and the product fails regardless of software quality.
3. **Assumption:** Drivers will complete a 15-second voice confirmation. **How to test:** Same pilot — measure completion rate. Below 50% and the two-sided evidence claim collapses to a one-sided log, which is materially weaker legally.
4. **Assumption:** ¥30,000/month clears procurement without a capex process. **How to test:** Put a real price in front of 15 prospects and count how many escalate it beyond the department manager.
5. **Assumption:** 特定荷主 manufacturers will actively push a tool to their receiving partners. **How to test:** Three conversations with named CLOs about their October 2026 plan submissions.

### Risk flags

1. **Incumbent down-market move:** Hacobu already has MOVO Berth in all 47 prefectures, brand trust, and the dock relationships. If they ship a cheap evidence-only SKU aimed at small receivers, the wedge narrows fast. Speed and a receiver-defence (rather than time-reduction) positioning are the only answers.
2. **Market timing:** April 2027 could be too far away to force purchase now, and Japanese compliance buying famously bunches into the final quarter before a deadline. Revenue may be back-loaded to late 2026 / early 2027 — plan runway accordingly rather than assuming a smooth ramp.
3. **Regulatory softness:** The 物流効率化法 side has explicit 努力義務 (effort obligations) with no direct penalty for waiting times themselves. If JFTC enforcement of the new consignee rule turns out to be similarly toothless in practice, urgency deflates. Watch the first enforcement actions after April 2027 closely.
4. **Cultural/relationship barrier:** This market does not buy from unknown vendors via a website. Without a credible Japanese founder or a channel partner, distribution simply does not function no matter how good the product is.
5. **Evidence cuts both ways:** A rigorous record could document a receiver's *own* violations and become discoverable. Some prospects will see this and balk. The counter — "you'd rather have no record when the Gメン asks?" — is real but needs careful positioning, and legal counsel should shape the retention policy.

## 14. Structured verdict

```
Score:                  74/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Japanese-speaking technical founder, or technical founder with a
                        committed Japanese co-founder holding logistics/wholesale relationships
Time to revenue:        8–12 weeks to paid pilot; meaningful ARR back-loaded toward Q1 2027
Capital to launch:      ¥1.5–2.5M (~$10–17K) — mostly legal review and travel
Top 3 assumptions to validate first:
  1. Receivers see 着荷主規制 as their own liability — 25 calls, test unprompted awareness
  2. Floor staff sustain capture discipline — 3-week paper pilot at 2 sites, need >80%
  3. Drivers complete voice confirmation — same pilot, need >50%
Kill criteria:
  - Abandon if fewer than 8 of 25 logistics managers can state what changes in April 2027
    after the deadline passes into 2027 (awareness never arrives = no urgency = no purchase)
  - Abandon if paper-pilot capture rate stays below 80% after two iterations of the flow
  - Abandon if Hacobu ships a sub-¥30,000/month receiver-side evidence SKU before your v1
  - Abandon if the first two post-April-2027 JFTC consignee actions result in no public naming
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Build the target list. Pull prefectural wholesaler association member directories for the three JFTC-warned sectors. Get to 150 named firms with a named logistics or general-affairs manager. In parallel, read the finalised 告示 text and the JFTC guidebook properly — not summaries — and write the one-page Japanese explainer that will be the outbound asset.
- **Day 3–4:** Twenty-five calls. Lead with the explainer, not the product. The single measurement that matters: unprompted, can they say what changes in April 2027? Then: "when a carrier disputes waiting time today, what do you show them?" Record the literal answer. If the answer is consistently "紙の受付簿" or "何もない", the gap is confirmed.
- **Day 5:** Walk two actual receiving docks. Watch a truck arrive. Time it yourself. Ask the warehouse chief — not the manager — whether he would tap a tablet twice per truck, and watch his face. Then price-test at ¥30,000/month with the five warmest prospects.

**Falsifiable outcome:** Go if ≥8 of 25 managers demonstrate unprompted awareness of the April 2027 change, ≥15 confirm they have no defensible record today, and ≥3 agree to a paid pilot at ¥30,000/month. Anything less and this is a 2027 idea, not a 2026 one — park it and revisit in six months when the deadline is inside the buying window.
