---
title: "NimachiCase — shipper-delay casefile for Japan's carriers"
slug: japan-shipper-delay-casefile
date: 2026-08-03
category: Logistics / Japan
complexity: Medium
score: 74
verdict: GO
confidence: Medium
oneLiner: "Turns a driver's tap-in, tap-out into the evidence that proves which shipper burned his hours."
tags:
  vertical: Logistics
  model: SaaS
  geography: Japan
  secondary: [Compliance-driven, SMB, Voice-first, Multilingual, AI-agent]
axes:
  problem: 16
  demand: 12
  build: 11
  distribution: 11
  revenue: 11
  time: 8
  defensibility: 5
founderFit: [domain-expertise-required, sales-heavy]
featured: false
---

# NimachiCase

## 1. One-liner

Turns a driver's tap-in, tap-out into the evidence that proves which shipper burned his hours.

## 2. Trend signal — why now?

Japan spent two years bracing for the "2024 problem" — the April 2024 cap of 960 overtime hours a year for truck drivers. Capacity is projected to fall short by about 28% of scheduled deliveries by 2025 and roughly 35% by 2030 (Nomura Research Institute). That was the squeeze. What happens in 2026 is the enforcement.

Three things landed on top of each other:

**April 2026 — the revised 物流効率化法 (Logistics Efficiency Act) turns effort into obligation.** Shippers and logistics operators handling 30,000+ tonnes a year become 特定事業者 and must appoint a 物流統括管理者 (CLO), file a medium-to-long-term plan, and report against it. Failure to appoint carries a fine of up to ¥1,000,000; failure to notify, up to ¥200,000. The first mid-term plan submission is expected end of October 2026 — twelve weeks from today.

**The "1運行2時間ルール."** Wait plus handling time is targeted at 2 hours per operation and 1 hour per delivery. Current average wait-and-handling runs about 3 hours per operation. Everyone in scope is starting the race a full hour behind.

**The record obligation sits on the carrier, not the shipper.** Since April 2024, when a driver operates a truck of 8t GVW or 5t payload and incurs qualifying wait, the carrier must keep a 乗務記録 showing pickup point, arrival date and time, and the start and end times of loading or unloading — retained for one year.

Here is the asymmetry that makes this a product. **Only shipper-caused delay counts.** Driver-caused waiting is excluded. So the single most consequential number in Japanese trucking right now — how much of my truck's day did *your* dock consume — has to be reconstructed from records that small carriers still keep on paper and by phone.

Meanwhile the tooling that exists points the other way. Hacobu's MOVO Berth, the dominant berth-reservation platform, was live at 41,000+ sites as of end-February 2026. It's excellent, and it is *warehouse-side*: it records what the shipper's dock saw. As of METI's FY2022 survey, only **7%** of companies had a berth reservation system at all. The other 93% of docks generate wait time that no system is watching, and the carrier eating that time has no instrument of his own.

Add the leverage: revised 標準的な運賃 now explicitly positions 荷待ち料 (waiting charges), 積込料 and 取卸料 as line items that *should* be billed. The legal right to charge exists. The evidence to charge with does not.

Provenance:
  - Signal 1 (demand): Average wait+handling ≈3 hrs per operation vs. the 2-hour rule; only shipper-caused delay is countable; widespread unpreparedness — https://www.furuno.com/jp/dsrc/column/each-trip-two-hours — accessed 2026-08-03
  - Signal 2 (feasibility): Only 7% of companies had berth-reservation systems (METI FY2022 survey); paper/phone coordination still standard at small carriers — https://hacobu.jp/blog/archives/3952 — accessed 2026-08-03
  - Signal 3 (economic): April 2026 CLO appointment mandate for 特定荷主 (30,000t+ / 90,000t threshold reporting), ¥1M fine, first mid-term plan due end-Oct 2026; revised standard rates make waiting charges billable — https://houmu-pro.com/legalrevision/385/ · https://www1.logistics.or.jp/j-clop/logistics-shipper-obligations/ — accessed 2026-08-03
  Category: Regulatory arbitrage

## 3. The opportunity

Every incumbent in this space sells to the party with the money and the dock. MOVO Berth, WMS integrations, telematics suites — all of them instrument the *shipper's* facility. That is a good business and it is taken.

The gap is on the other side of the gate. A 12-truck carrier in Saitama has drivers sitting at four different shippers' docks every day. Under the law he must record every qualifying wait for a year. He does it with a paper 日報 the driver fills in at the end of his shift, from memory, in a hurry, often rounding to the nearest half hour. Then in March, when he wants to renegotiate rates or when his shipper's brand-new CLO asks for wait data to fill a mid-term plan, he has a shoebox.

What he needs is not a berth system. He can't install one in someone else's warehouse. He needs an instrument in his own cab that produces **a defensible record of shipper-caused delay, attributed by facility, aggregated over months**, in a form he can put on a table.

The 10× is in three places:

1. **Capture without typing.** A driver will not fill a form. He will tap once on arrival and once when wheels roll, or say one sentence in Japanese while his hands are busy. Voice-to-structured-record in Japanese is cheap and good now; it was not two years ago.
2. **Attribution, which is the actual hard part.** Was that 90 minutes shipper-caused or did the driver arrive 70 minutes early to hold his slot? The rules exclude the latter, and the article on the 2-hour rule flags exactly this — mandated arrival windows push drivers to arrive early, creating hidden buffer that never shows in the official figure. Deciding the split needs the appointment window, the actual arrival, the gate-in, and the driver's own account. That's a judgment call, made hundreds of times a week.
3. **Output shaped for the counterparty.** Not a CSV. A per-shipper, per-facility summary that maps onto the categories a CLO must report against — because starting this October, the CLO *needs* this data and mostly doesn't have it either.

The incumbent weakness is structural, not technical. Hacobu cannot sell the carrier a tool that argues against Hacobu's own paying warehouses. That conflict is the opening.

## 4. Target market

- **Primary customer:** Owner or 運行管理者 (certified operations manager) at a Japanese trucking company with **10–60 trucks**, general freight (一般貨物自動車運送事業), running regional or medium-haul work for 5–30 recurring shipper facilities. Typically ¥300M–¥2B annual revenue. Concentrated in Kanto, Chukyo and Kansai industrial belts.
- **Why they buy:** Two reasons, and the second is the one that closes. First, the 乗務記録 retention obligation is already live and his current answer is paper. Second — and this is the money — the revised standard rates say he *may* bill 荷待ち料, but he has been unable to, because raising it with a shipper he has served for 25 years requires evidence, not a complaint. Rate negotiation with entrenched shippers is widely described as difficult precisely because of that power imbalance. Data changes the conversation from a favour to a fact.
- **Rough TAM reasoning:** Japan has roughly 60,000 trucking operators, overwhelmingly small — the industry is famously dominated by sub-50-vehicle firms. The 10–60 truck band is the sweet spot: big enough to have a 運行管理者 and a real shipper portfolio, too small to buy an enterprise TMS. Call it 12,000–18,000 addressable firms. At ¥30,000/month average that is a ¥4.3–6.5B (~$29–43M) ceiling. I only need a low single-digit slice.
- **Why now for them:** Their shippers are being forced, this year, to produce wait-time numbers they don't have. For the first time the carrier's data is something the shipper actively wants. That flips a 40-year power dynamic for about 18 months. After that, the shippers will have built or bought their own instrumentation and the window narrows.

## 5. Product sketch (MVP)

- **One-tap arrival / departure logging** in a driver app — geofenced against known facilities, so arriving at a registered dock pre-fills the shipper and location. Two taps per stop is the whole driver interface.
- **Japanese voice note capture** — driver says "◯◯倉庫、バース空かなくて40分待ち" while walking back to the cab; the system extracts facility, cause, and duration into a structured record.
- **Shipper-caused vs. self-caused attribution** — compares appointment window, actual arrival, gate-in and departure, and proposes a split, flagging early-arrival buffer separately so the countable figure survives scrutiny.
- **Law-shaped 乗務記録 output** — generates and retains the record with pickup point, arrival datetime, and load start/end times, held for the statutory year, exportable on demand.
- **Per-shipper delay scorecard** — monthly: this facility cost you 41 hours across 78 stops, average 32 min, 74% shipper-caused, worst weekday Tuesday, worst window 14:00–16:00.
- **Negotiation packet generator** — a clean Japanese-language PDF per shipper, framed against 標準的な運賃 waiting-charge language, sized to hand to a purchasing manager without embarrassment.
- **CLO data pack** — the same underlying data reformatted for a shipper's mid-term plan reporting, which the carrier can offer *to* the shipper. This is the trojan horse.

## 6. AI angle — what's load-bearing

Strip the AI out and this collapses into a timesheet app, which drivers will not use and which produces numbers no shipper will accept. Three places it does real work:

**Japanese speech in a bad acoustic environment.** Drivers won't type. Accented, dialectal, half-shouted Japanese from a cab or a loading bay, extracted into facility + cause + duration. This is the capture layer and without it there's no data at all.

**Attribution judgment.** This is the core. Given an appointment window, a GPS arrival at 13:12, a gate-in at 14:05, a load start at 14:20 and a driver saying "受付が誰もいなかった," decide how much is countable shipper-caused delay and how much is excluded early-arrival buffer. Rule-based logic gets the easy 60% and falls apart on the rest — the messy cases are exactly the ones worth money, and they turn on natural-language cause descriptions. Getting this defensibly right is the product.

**Cause clustering into an argument.** Turning 78 stops of noise into "your 14:00 slot is structurally oversubscribed on Tuesdays" is what makes the packet persuasive rather than accusatory. Summarisation and pattern extraction across months of unstructured cause notes.

If the attribution is sloppy, the shipper rejects the packet in the first meeting and the product is dead. AI is not decoration here; it is the thing being sold.

## 7. Localization angle

This is a Japan-only play by construction, and that is a feature.

- **Language:** Everything in Japanese, including keigo-appropriate output. The negotiation packet has to read like a document a Japanese company would send a customer it wants to keep — polite, factual, non-accusatory. Get the register wrong and it's an insult, not an invoice.
- **Regulation as the entire substrate:** 乗務記録 retention, the 2-hour rule, 特定事業者 thresholds, CLO reporting, 標準的な運賃 charge categories. There is no generic global version of this product. A US detention-pay tool solves a superficially similar problem with completely different mechanics and no statutory record obligation.
- **Business culture:** The product must never be positioned as "fight your shipper." It is 「データで対話する」— talk with data. Same data, opposite framing. This distinction determines whether it sells.
- **Distribution:** 全ト協 (Japan Trucking Association) prefectural chapters, 運行管理者 training networks, and the digital-tacho dealer channel — deeply local, relationship-driven, and inaccessible to a foreign entrant without a Japanese founder or partner.
- **Pricing:** ¥20,000–50,000/month lands naturally against existing digital-tacho and telematics line items. No conversion gymnastics needed.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** ¥1,500/truck/month, ¥15,000/month floor. A 20-truck carrier pays ¥30,000/month (~$200). Annual prepay at 10 months' price.
- **ACV:** ¥360,000 (~$2,400) at 20 trucks average.
- **Rough math to $1M ARR:** **420 carriers × ¥360,000/yr = ¥151M (~$1.0M ARR).** Against 12,000–18,000 addressable firms that's roughly 3% penetration. Achievable but not trivial; this is field sales, not self-serve.
- **Rough math to $5M ARR:** ¥755M. Needs either ~2,100 carriers (12% penetration — hard) or, more realistically, ~900 carriers plus a **shipper-side tier**: sell the aggregated multi-carrier delay picture to the 特定事業者 who must report it, at ¥100,000–300,000/month per shipper. 150 shippers at ¥200,000/month is ¥360M on its own. The shipper tier is where the second $2M lives, and it only becomes sellable once carrier density exists in a region.
- **Expansion path:** trucks → shipper-side reporting seat → cross-carrier facility benchmarking ("this dock is in the worst decile nationally"), which is the data asset nobody else can assemble.

Margins are ordinary SaaS. Voice inference is the only variable cost of note: a few hundred short utterances per truck per month at current Japanese ASR pricing is noise against ¥1,500.

## 9. Go-to-market wedge — first 100 customers

The buyer is not on Twitter. He is at a prefectural trucking association meeting.

- **The CLO deadline as the cold-call hook (weeks 1–12).** The first mid-term plans are due end of October 2026. Build a list of 特定事業者-threshold shippers from public filings and industry directories, and approach their *carriers* with one line: "Your shipper is about to ask you for wait-time data. We'll have it ready." This is a dated, specific, externally-imposed reason to act now — the strongest cold-open available.
- **全ト協 prefectural chapters (weeks 4–20).** 47 prefectural associations, each running compliance seminars for members precisely because of the 2026 changes. Offer a free 30-minute session on the 2-hour rule and the record obligation. Speak at 8, sponsor 3, walk out with a warm list each time. Japanese SMB trucking buys through association endorsement more than through advertising — this is the channel.
- **Digital tacho dealers as resellers (month 3+).** Digital tachographs are already installed and already sold by regional dealers with existing carrier relationships and service trucks. NimachiCase is a complementary layer, not a replacement. Offer 25% recurring margin. Ten active dealers each landing two carriers a month is 240 carriers a year, and the dealer does the install visit.
- **One anchor shipper, worked backwards (month 4+).** Land a single mid-size manufacturer whose CLO needs data, then onboard the 15–30 carriers serving their docks in one motion. Highest-yield single move available; each anchor is worth 20+ logos and it makes the shipper tier real.
- **Case-study content in Japanese trade press.** 物流ウィークリー and similar outlets run carrier success stories constantly. One published case of "carrier renegotiated ¥X after showing facility data" is worth more than any ad, because it demonstrates the outcome the buyer actually wants and can't currently get.

First 100 realistically comes from the association channel plus two anchor shippers, over about 9 months.

## 10. Build complexity — justification

**Medium.** The driver app (geofence, two taps, voice capture) and the reporting layer are standard mobile + web work on off-the-shelf ASR and LLM APIs — no custom models, no hardware. Two engineers get a credible v1 in 12–16 weeks.

The real cost is not code. It is (a) encoding the attribution rules correctly against the actual regulatory definitions, which requires a Japanese domain advisor and probably a 行政書士 or logistics consultant on retainer, and (b) getting the Japanese output register right. Optional digital-tacho data integrations add integration work later but are not needed for v1. Budget ~4 months to a shippable product plus a paid pilot running in parallel.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Helps carriers meet an existing statutory record obligation; no licence required to sell it |
| Ethical — no harm / dark patterns | ✅ | Driver location tracking is workplace-standard here and already implicit in tacho; must be transparent and consented. Product surfaces true costs rather than concealing them |
| Market exists (evidence above) | ✅ | Live mandates with dated deadlines and fines; 7% berth-system penetration; existing paid adjacent tools |
| 1–5 person team can build this | ✅ | 2 engineers + 1 domain-fluent seller; no custom infra |
| Launchable with <$50K / ₹40L | ✅ | Main costs are salaries, advisor retainer, and association seminar sponsorships |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | Statutory obligation already live, dated 2026 deadlines, real money in unbilled waiting charges. Docked because the carrier's pain is chronic-tolerated rather than hair-on-fire — he has survived on paper for years and the fines mostly land on shippers, not him |
| Demand evidence | 15 | 12/15 | Hard regulatory dates, ¥1M penalties, 7% tooling penetration, funded incumbents on the adjacent side, revised standard rates making waiting billable. Docked because I found no direct verbatim carrier complaints — the evidence is structural and institutional, not voice-of-customer |
| Build feasibility | 15 | 11/15 | Off-the-shelf ASR/LLM, standard mobile+web. Docked for the attribution logic, which must be defensibly correct, and for needing genuine Japanese-language and regulatory fluency in the build loop |
| Distribution clarity | 15 | 11/15 | 全ト協 chapters, tacho dealers, and the anchor-shipper motion are all named and concrete with plausible math. Docked because this is field sales into a conservative buyer — slow, relationship-gated, no self-serve path |
| Revenue mechanics | 15 | 11/15 | Pricing anchored to existing telematics spend, $1M path needs ~3% penetration. Docked because the $5M path leans on an unproven shipper-side tier |
| Time to first revenue | 10 | 8/10 | Paid pilots are sellable off the October CLO deadline before the product is finished; realistically 8–10 weeks to first yen |
| Defensibility | 10 | 5/10 | Attribution quality and association relationships are a real head start, and the cross-carrier facility dataset compounds. But a funded Japanese logistics-SaaS player could build this in two quarters, and Hacobu has the distribution if it decides the conflict is worth it |
| **Total** | **100** | **74/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`domain-expertise-required` · `sales-heavy`

This needs a Japanese-native founder or a genuinely embedded local partner. Not a "we'll localise later" market. The buyer, the channel, the regulatory text and the output document are all Japanese, and the sales motion runs on association trust. A foreign solo builder should not attempt this.

### Key assumptions to validate (3–5)

1. **Assumption:** Carriers will actually use recovered wait data to renegotiate rates, rather than filing it and staying silent out of relationship fear. **How to test:** Interview 25 carrier owners in two prefectures. Ask directly: "If I handed you proof that Facility X cost you 40 hours last quarter, would you put it in front of them? Who would you send it to?" Hesitation or vagueness on the second question is the failure signal.
2. **Assumption:** Drivers will reliably do two taps plus an occasional voice note. **How to test:** 3-week paper-and-phone-free pilot with 10 drivers at 2 carriers. Measure capture rate against known stop counts from dispatch records. Below 80% capture and the data is worthless.
3. **Assumption:** Shipper-caused vs. self-caused attribution can be made accurately enough to survive a shipper's pushback. **How to test:** Reconstruct 200 historical stops from carriers with existing tacho data, produce attributions, and have a logistics consultant and two shipper-side logistics managers adjudicate. Target ≥85% agreement.
4. **Assumption:** The CLO deadline is a live buying trigger, not a paper exercise shippers will discharge with a template. **How to test:** Talk to 10 newly appointed CLOs before October. Ask what data they currently hold on wait times at their own docks. If most say "we already have it," the trojan horse is dead and this reverts to a slower carrier-only play.

### Risk flags

1. **Incumbent counter-move:** Hacobu has 41,000+ sites and the obvious distribution. If it launches a carrier-side companion, the window closes fast. Bet is that channel conflict with its paying warehouses slows it — but that is a bet, not a moat.
2. **Regulatory drift:** The rules are new and the definitional ambiguity is acknowledged (per-trip vs. per-stop, what counts as shipper-caused). If MLIT clarifies in a direction that makes attribution trivial, the hardest part of the product becomes commodity. If it clarifies in a direction that makes it stricter, the product gets more valuable. Genuinely two-sided.
3. **Relationship inertia:** The whole thesis is that data emboldens a carrier to negotiate. Japanese SMB trucking relationships are decades deep and asymmetric. Carriers may buy the compliance function and quietly never use the negotiation function — which caps ACV and kills the expansion story.
4. **Market timing on the shipper tier:** The shipper-side revenue only exists while shippers lack their own data. That is an 18–30 month window at best. If the $5M path depends on it, the clock matters.

## 14. Structured verdict

```
Score:                  74/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Japanese founder with logistics or trucking-industry background,
                        paired with one strong mobile/backend engineer. Association
                        relationships beat engineering talent here.
Time to revenue:        8–10 weeks to first paid pilot; ~4 months to shippable v1
Capital to launch:      ¥6–9M (~$40–60K) — two salaries for 4 months, domain advisor
                        retainer, seminar sponsorships
Top 3 assumptions to validate first:
  1. Carriers will actually deploy the data in rate negotiations — 25 owner interviews,
     watch for hesitation on "who would you send it to?"
  2. Drivers hit ≥80% stop-capture with two taps — 3-week, 10-driver pilot against
     dispatch records
  3. Attribution reaches ≥85% agreement with expert adjudication on 200 historical stops
Kill criteria:
  - Abandon if driver capture rate stays below 70% after two pilot iterations — without
    capture there is no evidence and no product
  - Abandon if fewer than 5 of 25 interviewed carriers say they would present the data
    to a shipper by name
  - Abandon if Hacobu or a major tacho vendor ships a carrier-side delay-attribution
    product before your v1 is in paid pilot
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Pull the actual regulatory text on 乗務記録 requirements and the 2-hour rule with a Japanese logistics consultant on a paid half-day. Write down the precise attribution rule set. If the definition of shipper-caused delay turns out to be so vague that no defensible attribution is possible, stop here — that is a one-day kill, and worth knowing on day two rather than month four.
- **Day 3–4:** Twenty-five phone interviews with 10–60 truck carrier owners, sourced through one prefectural 全ト協 chapter. Two questions that matter: how do you record wait time today, and would you put a facility-level delay report in front of Shipper X by name? Record the hesitation, not just the answer.
- **Day 5:** Call 8 shipper-side logistics managers at 特定事業者-scale companies. One question: for your October mid-term plan, do you have wait-time data at your own docks today, and where does it come from?
- **Decision:** Go if **≥10 of 25 carriers name a specific shipper they would present data to**, AND **≥5 of 8 shippers admit they lack dock-level wait data for their October filing**. Both conditions, not either. The first proves the carrier will use it; the second proves the trojan horse works and the $5M path is real. Fail either and this is at best a slow compliance-record utility — which is a ¥15,000/month product, not a business worth four months of your life.
