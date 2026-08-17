---
title: "NimachiPay — waiting-fee recovery for Japan's micro-carriers"
slug: nimachi-waiting-fee-recovery
date: 2026-08-17
category: Logistics / Japan
complexity: Medium
score: 75
verdict: GO
confidence: Medium
oneLiner: "Turns a truck driver's dead time at the dock into a priced, evidence-backed line item the shipper pays."
tags:
  vertical: Logistics
  model: SaaS
  geography: Global
  secondary: [Japan, AI-agent, Compliance-driven, SMB, Voice-first, Solo-builder]
axes:
  problem: 17
  demand: 12
  build: 11
  distribution: 11
  revenue: 12
  time: 7
  defensibility: 5
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# NimachiPay

## 1. One-liner

Turns a truck driver's dead time at the dock into a priced, evidence-backed line item the shipper pays.

## 2. Trend signal — why now?

Japan spent two years telling trucking companies to *record* their waiting time. In 2026 it started telling shippers they have to *pay* for it. Almost nobody in the micro-carrier segment is invoicing for it.

The numbers are not subtle:

- **Average waiting time is 1 hour 28 minutes per trip** (MLIT 2024 survey). Trips with waiting run 12h26m of driver detention vs 10h38m without.
- **Shippers pay the waiting-time fee in under 40% of cases.** That is the entire thesis in one statistic — the fee is legally defined, the time is legally recorded, and six out of ten times the money is simply never collected.
- **The perception gap is enormous:** 73.4% of carriers say waiting happens; only 24.0% of origin shippers and 20.6% of destination shippers agree. Evidence is what closes a gap like that.

Three regulatory hammers landed in sequence:

1. **April 2025** — carriers became legally obliged to record shipper-caused waiting of 30+ minutes and ancillary work of 1+ hour (pickup/delivery point, arrival time, handling start/end), retained one year. Scope expanded from 8t+ vehicles to all commercial vehicles.
2. **January 2026** — the 取適法 (renamed subcontracting act) brought *freight consignment* into scope for the first time. Long unpaid waiting and unpaid ancillary work became **prohibited acts**, not negotiation topics.
3. **April 2026** — the revised 物効法 「1運行2時間ルール」 requires waiting + handling to fit inside 2 hours, escalating through guidance → recommendation-and-naming → improvement order, with fines up to ¥1M for order violations.

And enforcement is live. On **12 December 2025 the JFTC issued a formal recommendation against Senco Co., Ltd.** — 17 subcontractors made to do unpaid loading/handling (Dec 2022–Nov 2025) and 19 made to wait unpaid (Dec 2022–Mar 2024). The JFTC ordered Senco to **pay back the costs those subcontractors incurred**. Yamato Transport, NX/NP Logistics, Oji Materia and Yoshino Industrial have also received recommendations. Retroactive recovery is now a proven outcome.

Meanwhile the fee schedule exists and is public: the March 2024 標準的運賃 revision unbundled 待機時間料, 積込料, 取卸料 and 附帯業務料 from base freight as separately collectable charges, with a 50% markup when waiting plus handling exceeds two hours. Market waiting rates run roughly **¥1,500–3,000/hr (2t), ¥2,500–5,000/hr (4t), ¥3,000–8,000/hr (10t), ¥5,000–12,000/hr (trailer)**.

So: the price list is published, the recording is mandatory, refusal to pay is now illegal, and collection is under 40%. Money is sitting on the dock floor.

```
Provenance:
  - Signal 1 (demand/economic): Shippers bear the waiting-time fee in under 40% of cases; average waiting 1h28m per trip; carrier/shipper perception gap 73.4% vs 24.0%/20.6% — https://hacobu.jp/blog/archives/3952 — observed 2026-08-17
  - Signal 2 (regulatory/economic): JFTC formal recommendation against Senco (2025-12-12) for unpaid handling (17 subcontractors) and unpaid waiting (19 subcontractors), with ordered repayment of incurred costs; 取適法 from Jan 2026 makes unpaid waiting/ancillary work a prohibited act in freight consignment — https://www.jftc.go.jp/houdou/pressrelease/2025/dec/251212_kinki_shitauke.html and https://toritekihou.com/ninushi/trucktaikiryokin/ — observed 2026-08-17
  - Signal 3 (feasibility): Carriers already legally required since April 2025 to record shipper-caused waiting 30min+ and ancillary work 1hr+ (point, arrival time, handling start/end, 1-year retention); April 2026 「1運行2時間ルール」 adds escalating orders and fines to ¥1M — https://delivery-system.com/blog/standby-time-and-incidental-work-records/ and https://www.furuno.com/jp/dsrc/column/each-trip-two-hours — observed 2026-08-17
  - Signal 4 (competitive gap): Hacobu's MOVO Fleet added waiting/handling evidence management (April 2025) but it is shipper-primary, outputs CSV for manual calculation, requires hardware and sales-gated pricing — https://hacobu.jp/news/14674/ — observed 2026-08-17
  Category: Regulatory arbitrage
```

## 3. The opportunity

Every existing tool in this space treats waiting time as a **compliance record**. I treat it as an **unpaid invoice**.

That distinction is the whole business. Hacobu's MOVO Fleet — the most credible incumbent, 41,000+ locations on MOVO Berth as of Feb 2026 — shipped an evidence-management feature in April 2025 that lets drivers log start/end times, GPS and cab photos. Then it hands the shipper a CSV. The shipper calculates the charge. Read that again: the party who owes the money is given the spreadsheet and asked to work out what they owe. Collection sits under 40% and this is why.

The incumbents' three structural weaknesses:

1. **They sell to the wrong side.** MOVO's evidence feature is shipper-primary; MOVO Berth is a dock-booking product bought by the warehouse. Shippers buy "reduce our waiting time" (avoid the ¥1M order). Carriers need "bill for the waiting that happened." Those are opposite economic interests and no vendor can serve both with one pitch.
2. **They stop at the record.** Existing 運送業システム (AIR, Comtruck, CAM MACS) do auto-calculate waiting and ancillary fees — but only for carriers who already run digitacho, already have a dispatcher, and already registered per-shipper contract rates. That's the top of the market.
3. **They're hardware-and-sales-gated.** MOVO requires a device (cigarette-socket unit, dash cam, or app), charges an undisclosed initial fee, and quotes per-vehicle by consultation. For a 6-truck operator with one back-office person, that's a procurement project, not a purchase.

The gap: **99% of Japan's ~63,000 trucking companies have ≤200 employees and 49% are micro-enterprises with under 10 workers.** They are the ones eating the unpaid waiting, they have no dispatcher to build the claim, and they are the least equipped to argue with a shipper — while being the exact class the 取適法 was written to protect. They don't need visibility. They need somebody to write the demand, price it off the published rate table, attach the proof, and give them the nerve to send it.

## 4. Target market

**Primary customer:** Owner-operator or president of a Japanese general freight company (一般貨物自動車運送事業) with **3–30 trucks**, ¥50M–¥500M annual revenue, one or two back-office staff (often the president's spouse), running as a subcontractor (下請) to a primary contractor or directly for 2–5 regional shippers. Concentrated in Tier-2 industrial corridors — Aichi, Saitama, Osaka, Fukuoka, Hiroshima.

**Why they buy:** In their own framing — they already know they waited. The obstacles are the two the sourced material names directly: dependence and evidence. Industry legal commentary is explicit that carriers with high dependence on a single shipper avoid raising rates because the shipper may simply switch to another carrier and terminate — and that verbal agreement alone creates high dispute risk at invoicing time, so the charge must be documented in the contract or rate table in advance. Add the perception gap (the shipper genuinely believes waiting didn't happen — 24% vs 73.4%) and you get an operator who is owed money, is legally entitled to it, and still doesn't ask.

What they buy is not software. It's a third party that makes the claim look procedural instead of personal: a rate-table citation, a timestamped record, and a document that reads like every other invoice.

**Rough TAM reasoning:** ~63,000 trucking companies in Japan, 99% under 200 employees. Take the 3–30 truck band as roughly 25,000–35,000 firms — big enough to have billable shipper waiting, small enough to lack a dispatcher. At ¥15,000/mo average that's a ¥4.5–6.3B/yr addressable line. I need ~0.2% of it for $1M ARR.

**Why now for them:** Three dates. April 2025 made the record mandatory, so the raw evidence now exists whether or not they use it. January 2026 made non-payment illegal, so asking is no longer a favour. April 2026 put the shipper under threat of naming and a ¥1M order, so the shipper suddenly has their own reason to settle quietly. A claim sent in 2024 was a relationship risk. The same claim in late 2026 is the shipper's cheapest way to stay off a list.

## 5. Product sketch (MVP)

- **Driver capture in three taps or one sentence.** Driver arrives, taps "着荷" — GPS geofence stamps arrival. Taps again when handling starts and ends. Or holds one button and says "三時に着いて、四時半まで待たされた、パレット積みもやった" — Japanese speech-to-text fills the record. No dispatcher involved, no digitacho required.
- **Automatic billable-event detection.** The system knows the 30-minute threshold, the 1-hour ancillary-work threshold, and the 2-hour combined trigger for the 50% markup. It flags the trip as billable and tells the office how much is owed, in yen, before anyone opens a spreadsheet.
- **Priced claim generation off the published rate table.** Vehicle class + waiting duration + ancillary work → a 待機時間料/附帯業務料 line item priced from the 標準的運賃 schedule, with the citation printed on the document. The number arrives with its own justification attached.
- **The evidence pack, auto-assembled.** Arrival/departure timestamps, GPS trace, cab and dock photos, driver's note — bundled into the record the April 2025 rule already requires you to keep for a year. Compliance is a by-product of billing, not a separate chore.
- **The 請求書 add-on sheet.** A one-page attachment in standard Japanese business format, addressed to the shipper, itemising the waiting events for the month with rate-table basis. Designed to be sent alongside the normal monthly invoice — the same envelope, not a confrontation.
- **Escalation ladder with pre-drafted language.** If unpaid after 30/60 days: a politely worded follow-up, then a notice referencing the 取適法 prohibition on uncompensated waiting, then a prepared 公正取引委員会 / 中小企業庁 consultation summary. Most claims should settle at step one — but the ladder is why step one works.
- **Retroactive claim scan.** Point it at the last 12 months of existing driver logs or digitacho exports and it tells you what you failed to bill. Senco's subcontractors got repaid for three years. This is the feature that sells the subscription in the first meeting.
- **Shipper scorecard.** Which of your customers cost you the most in unpaid dock time, ranked. Ammunition for the annual rate negotiation, which is where the real money is.

## 6. AI angle — what's load-bearing

Remove the AI and this collapses into a form the operator won't fill in. Three places it does real work:

**Unstructured input → structured billable event.** The input is a tired driver at 7pm, in dialect, one-handed, or a photo of a handwritten 日報, or a messy digitacho CSV in a vendor-specific layout. The output must be a defensible record with times, location, work type and duration. Japanese speech recognition plus extraction from handwritten log photos is what makes capture cost near-zero — and capture cost is the only reason this money goes uncollected today. Every prior attempt at this asked the office to type it in, which is exactly why 60% of it never gets billed.

**Classification of fault, which is the crux.** The 2026 rule counts *shipper-caused* waiting only; waiting the carrier chose to absorb doesn't count. So "arrived 40 min early, then the dock was late" has to be split correctly, or the claim gets rejected and the operator never sends a second one. This is judgement over messy narrative context — arrival vs appointment vs dock-ready, whose delay, was the pallet work contracted or extra. Rules alone produce wrong claims; wrong claims destroy trust with a shipper permanently.

**Claim drafting in Japanese business register.** The document has to read as neutral and procedural. A machine-translated or blunt demand letter to a long-standing shipper is worse than sending nothing — it converts a billing matter into a relationship rupture. Generating correct 敬語 with the right regulatory citation and zero accusatory tone is genuinely the product. That's what the operator is paying to outsource: not the arithmetic, the *nerve*.

## 7. Localization angle

This is Japan-only by construction and that's the point, not a limitation.

- **Language:** Japanese-first, including dialect-tolerant speech input and handwritten 日報 OCR. Non-negotiable — drivers here are 50+ on average and will not type English or navigate an untranslated UI.
- **Regulatory quirks are the entire product.** 標準的運賃, 標準貨物自動車運送約款, 待機時間料 / 積込料 / 取卸料 / 附帯業務料, 物効法, 取適法, the 30-minute and 2-hour thresholds, the 50% markup rule. A generic global "detention billing" tool has no rate table to cite and therefore no claim to make. In the US, detention is a contract term you negotiate; in Japan it's a published government schedule you invoke. Completely different product.
- **Business-culture rails:** the claim must arrive as an attachment to the routine monthly invoice, in the expected format, with a rate-table citation doing the confronting. This is why a US-built tool would fail here even if translated — it would optimise for a firm demand letter and lose the customer their shipper.
- **Distribution rails:** 47 prefectural トラック協会 chapters, and the 2026 Digitization & AI Implementation Subsidy (formerly IT導入補助金) — up to ¥4.5M at a 1/2 to 4/5 subsidy rate for registered tools. That subsidy is a distribution channel, discussed in §9.
- **Payment:** monthly 銀行振込 invoicing, not card-first. Japanese SMBs expect it.

## 8. Business model — path to $1M–$5M ARR

**Pricing (three tiers, per company not per seat):**

- **Light — ¥9,800/mo:** up to 5 vehicles, capture + claim generation + evidence retention.
- **Standard — ¥19,800/mo:** up to 20 vehicles, adds escalation ladder, retroactive scan, shipper scorecard.
- **Pro — ¥39,800/mo:** up to 50 vehicles, multi-shipper rate profiles, primary-contractor rebilling support.

**Why this price holds.** One 10t truck waiting 90 minutes is roughly ¥4,500–12,000 at market waiting rates. Average waiting is 1h28m *per trip*. A 10-truck operator running even 200 waiting-affected trips a month is looking at a six-figure-yen monthly line item they currently write off. ¥19,800 against that is not a software decision, it's arithmetic. I deliberately do **not** take a percentage of recovered fees — success-fee pricing on a claim against your own customer smells like debt collection, and in this market that framing kills the sale.

**ACV:** ~¥180,000 (≈$1,200) blended, assuming the mix lands mostly on Light and Standard.

**To ~$1M ARR (¥150M):** ~840 paying companies at ¥15,000/mo average. Out of a 25,000–35,000 firm target band that's roughly 3% penetration. Slow but unglamorous and reachable — this is a 24-month number, not a 12-month one.

**To ~$5M ARR (¥750M):** needs two things true. First, ~2,500 companies at a higher ¥25,000 blended ACV, meaning I've moved upmarket into the 20–50 truck band where the office staff exist and the claim volume justifies Pro. Second, the primary-contractor rebilling wedge works — in Japan's multi-layer 多重下請 structure, MLIT itself notes primary contractors deduct their margin before re-subcontracting, which obstructs proper rate collection by the actual carrier. A tool that lets a primary contractor pass verified waiting claims up to the shipper turns each primary into a distribution node for its own subcontractor network. That's the only credible path past $2M, and I'd treat it as unproven.

**Expansion path:** vehicle-count tier creep → escalation/scorecard upsell → annual rate-negotiation report (a seasonal paid artifact carriers use in their yearly shipper review) → primary-contractor multi-tenant seats.

## 9. Go-to-market wedge — first 100 customers

**1. The retroactive-claim audit as free front door (primary channel).** Every target has 12 months of legally-required waiting records sitting in a drawer or a digitacho export. Offer: send me last month's driver logs, I'll tell you free what you failed to bill. The output is a single number in yen with the rate-table basis attached. This is an unusually strong cold open because it isn't a demo — it's an amount of the operator's own money, and the Senco precedent proves recovery is real. Source lists from the prefectural トラック協会 member directories and MLIT's public register of licensed 一般貨物 operators. Target: 1,500 audits offered, ~12% take the free audit, ~35% of those convert once they see a number ≥ ¥100,000. That's ~60 customers.

**2. 行政書士 and 社会保険労務士 who already serve trucking (highest-quality channel).** There's a visible cottage industry of specialists filing 運送業許可, 運賃・料金届出 and now subsidy applications for carriers — the search results surface several by name. They already sit in the president's office at rate-revision time and are already being asked "can I actually charge for this waiting?" Recruit 15–20 of them with a 20% recurring referral share. Each has 20–60 carrier clients. Ten productive partners at 4 conversions each is ~40 customers, and they arrive pre-trusted, which matters more here than in any market I know.

**3. Subsidy-funded acquisition via the Digitization & AI Implementation Subsidy.** Register as a supported tool under the 2026 programme (up to ¥4.5M, 1/2 to 4/5 subsidy rate, AI utilisation explicitly strengthened this cycle). Then the pitch becomes "your first year is largely government-funded." Note the constraint honestly: registration requires bureau screening and cannot be rushed, and the applicant must co-file — you cannot do it all for them. So this is a month 4–9 channel, not a launch channel, and I'd co-sell it with the channel-2 partners who file these applications for a living.

**4. Prefectural association seminars.** The associations run 2024-problem and 標準的運賃 compliance seminars continuously and need speakers with concrete material. "What Senco's subcontractors got paid, and how to bill the same way" is a session that fills a room. Low volume, high trust, and it seeds channel 2.

I'd expect the first 100 to come roughly 55/30/15 from channels 1/2/4, with 3 kicking in during year one for expansion rather than acquisition.

## 10. Build complexity — justification

**Medium.** The AI pieces are off-the-shelf — Japanese speech-to-text, handwriting OCR, and LLM extraction and drafting are all API calls now, no model training. The web app, geofencing and PDF generation are standard.

The custom work is threefold and real: encoding the 標準的運賃 fee schedules by vehicle class and prefecture with the threshold and markup logic correct; building tolerant importers for a handful of digitacho vendor CSV layouts and photographed handwritten logs; and getting fault-attribution right, which needs a domain reviewer, not just prompt engineering. A pair should reach a credible v1 in **10–14 weeks**, with most of the risk in the fee-table accuracy rather than the software. Getting a yen figure wrong on a claim that goes to a shipper is the failure mode that matters, so the rate engine needs review by a 行政書士 or association contact before launch — budget that as a real dependency.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Invoicing for legally-defined fees off a public government rate schedule. Not debt collection — no 債権回収 licence implicated, since these are the carrier's own current invoices, and no legal representation is offered. Must stay clear of 弁護士法72条 by drafting documents the operator sends themselves, never negotiating on their behalf. |
| Ethical — no harm / dark patterns | ✅ | Helps the smallest party in a lopsided subcontracting chain collect money the state has ruled it is owed. The escalation ladder is deliberately gradual to avoid pushing operators into relationship damage. |
| Market exists (evidence above) | ✅ | Sub-40% fee collection, 1h28m average waiting, JFTC recommendations with ordered repayment, incumbents charging for adjacent products. |
| 1–5 person team can build this | ✅ | Pair for 10–14 weeks plus a domain reviewer. |
| Launchable with <$50K / ₹40L | ✅ | ~$20–30K: two people part-time, API costs, and the domain review. No hardware — deliberately phone-only, unlike MOVO. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 17/20 | Direct, quantified, recurring cash loss — 1h28m per trip unbilled 60%+ of the time, felt daily, at operators with thin margins. Not a 19 because it's an opportunity cost they've normalised for years, and normalised pain converts slower than a bleeding wound. |
| Demand evidence | 15 | 12/15 | Strong: hard government statistics, live JFTC enforcement with ordered repayment, an incumbent shipping an adjacent feature, paid competitors in the category. Held back from 14 because I could not source verbatim carrier quotes — the evidence is regulatory and statistical, not voice-of-customer, and I'm not inventing quotes to fill the gap. |
| Build feasibility | 15 | 11/15 | Off-the-shelf AI, standard stack, but a real rate-table engine, messy-format importers, and fault attribution that needs domain review. 10–14 weeks for a pair. |
| Distribution clarity | 15 | 11/15 | The free retroactive audit is a genuinely strong opener with public source lists, and the 行政書士 channel is high-trust. Not higher because Japanese SMB trucking sales are slow and relationship-gated — cold email into this segment underperforms every other market I've scored. |
| Revenue mechanics | 15 | 12/15 | Pricing is trivially justified against the yen at stake, tiers are simple, no per-seat friction. $1M needs ~840 customers, which is credible. $5M depends on the unproven primary-contractor wedge. |
| Time to first revenue | 10 | 7/10 | The audit-to-paid path is short once a claim lands, but expect 6–10 weeks: Japanese SMBs decide slowly and often wait for the next monthly invoice cycle to try it. |
| Defensibility | 10 | 5/10 | Execution moat mostly. The rate-table logic and fault-attribution accuracy compound, and accumulated per-shipper waiting data becomes real negotiation leverage nobody else holds. But Hacobu could add carrier-side claim generation, and the regulatory knowledge is public. A 12-month head start plus a niche brand is what I'm buying, not a moat. |
| **Total** | **100** | **75/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required`

Needs someone who can ship AI-glue product fast, paired with real access to Japanese trucking — a 行政書士, an association insider, or an ex-dispatcher. Native Japanese business fluency is not optional. This is a bad fit for a foreign solo builder with no local partner, and I'd score it 10 points lower for that founder.

### Key assumptions to validate (3–5)

1. **Assumption:** Micro-carriers will actually send a waiting-fee claim to a shipper they depend on, given the documented fear of being replaced. **How to test:** Run 20 free retroactive audits. The metric isn't reaction — it's how many *send* the generated claim within 30 days. Below 6 of 20 and the product is fighting culture, not workflow.
2. **Assumption:** Shippers pay when the claim arrives with evidence and a rate-table citation, rather than terminating the carrier. **How to test:** Track outcomes on the first 30 sent claims — paid, ignored, disputed, relationship damaged. Any single termination is a serious signal and needs investigating before scaling.
3. **Assumption:** Fault attribution can be made accurate enough from driver-captured input that claims survive shipper pushback. **How to test:** Have a 行政書士 or association reviewer blind-grade 100 auto-classified events. Need ≥90% agreement on shipper-caused vs carrier-absorbed.
4. **Assumption:** Recoverable amounts are large enough to justify ¥19,800/mo at the 10-truck scale. **How to test:** The audits produce this directly — median monthly unbilled yen across 20 carriers. Need ≥¥100,000/mo median.
5. **Assumption:** The 行政書士 / 社労士 referral channel converts. **How to test:** Recruit 5 partners, measure introductions in 60 days. Fewer than 2 conversions per productive partner and channel 2 is decoration.

### Risk flags

1. **Relationship risk to the customer (the big one).** The sourced legal commentary is explicit that carriers fear losing shipper contracts if they push on rates. If sending a claim gets even a few early customers dropped, word travels through prefectural associations fast and the product becomes radioactive. Mitigation: lead with the retroactive audit and the gentlest rung of the ladder, and instrument outcomes obsessively from customer one.
2. **Incumbent encroachment.** Hacobu already has the evidence-capture primitive, 41,000+ locations on MOVO Berth, and could point it carrier-side. Their conflict — shippers are their buyer — is my window, but it's a window, not a wall.
3. **Regulatory dependency cuts both ways.** The product's value is manufactured by the 2025/2026 rule stack. If enforcement stays light after the initial JFTC wave, shippers learn they can ignore claims and collection stays under 40% regardless of tooling. Watch the recommendation cadence through 2027.
4. **Accuracy risk is existential, not cosmetic.** A wrong yen figure or a misattributed fault on a claim sent to a shipper embarrasses the operator in front of their customer. They will not send a second one. This product cannot ship at 80% accuracy.
5. **Market timing.** Best window is roughly the 18 months after April 2026 while shippers are afraid of being named. Enter in 2028 and the norms have set — either fees are routinely paid (no product) or routinely ignored (no product).

## 14. Structured verdict

```
Score:                  75/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Japan-based technical founder paired with a 行政書士 or
                        trucking-association insider; native Japanese business fluency required
Time to revenue:        6–10 weeks post-launch
Capital to launch:      ¥3–4.5M ($20–30K)
Top 3 assumptions to validate first:
  1. Carriers will actually SEND the claim — 20 free retroactive audits, measure sends not smiles, need ≥6/20
  2. Shippers pay rather than retaliate — track outcomes on first 30 sent claims, zero terminations tolerated
  3. Median recoverable ≥¥100,000/mo at 10-truck scale — falls straight out of the audit data
Kill criteria:
  - Abandon if fewer than 6 of 20 audited carriers send the generated claim within 30 days
  - Abandon if 2+ of the first 30 sent claims result in a lost shipper relationship
  - Abandon if median monthly recoverable across 20 audits is under ¥60,000 (pricing collapses)
  - Abandon if Hacobu or a 運送業システム incumbent ships carrier-side priced claim generation before v1
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Build the rate-table calculator only — no app, no capture. Vehicle class + waiting minutes + ancillary work → yen figure with 標準的運賃 citation. Pull the member directory of two prefectural トラック協会 chapters and the MLIT licensed-operator register; assemble 150 carriers in the 3–30 truck band.
- **Day 3–4:** Offer the free retroactive audit by phone and fax (yes, fax — it still outperforms email in this segment): "send last month's driver logs, I'll tell you what you didn't bill." Run every set that arrives through the calculator by hand. Produce a real one-page claim document per carrier.
- **Day 5:** Deliver the numbers and ask the only question that matters: **"will you send this?"** Then follow up at day 30 to see who actually did.

**Falsifiable outcome:** ≥10 of 150 carriers submit logs, median unbilled amount ≥¥100,000/mo, and **≥3 of those carriers actually send the claim within 30 days.** If carriers hand over logs, gasp at the number, and then don't send it — that's the whole idea failing, and it fails cheaply in week one rather than after a 14-week build. The willingness to send is the product risk. Everything else is software.
