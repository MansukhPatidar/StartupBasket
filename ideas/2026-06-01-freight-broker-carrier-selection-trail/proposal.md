---
title: "CarrierProof — selection-trail recorder for small freight brokers"
slug: freight-broker-carrier-selection-trail
date: 2026-06-01
category: Logistics / US Small Freight Brokers
complexity: Low
score: 78
verdict: GO
confidence: High
oneLiner: "Documents every carrier-hire decision into a timestamped, litigation-ready record after the SCOTUS Montgomery ruling."
tags:
  vertical: Logistics
  model: SaaS
  geography: US
  secondary: [Compliance-driven, SMB, AI-agent, Solo-builder]
axes:
  problem: 17
  demand: 13
  build: 13
  distribution: 12
  revenue: 11
  time: 8
  defensibility: 4
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# CarrierProof

## 1. One-liner

A tool that captures every carrier-hire decision a freight broker makes into a timestamped, defensible record — so when the subpoena comes, they hand over a clean paper trail instead of a panic.

## 2. Trend signal — why now?

On **May 14, 2026 the U.S. Supreme Court ruled 9-0 in *Montgomery v. Caribe Transport II*** that freight brokers can be sued under state negligence law for hiring unsafe motor carriers. The FAAAA federal-preemption shield that brokers leaned on since the 2023 *Ye v. GlobalTranz* line is gone. Opinion by Barrett; concurrence by Kavanaugh ("ordinary care, not perfection").

What that means operationally is the part nobody is tooled for. Every law firm covering this is saying the same thing: the new standard is a **written vetting policy, applied consistently to every carrier on every load, with documented evidence the criteria were applied.** FreightWaves put it bluntly: *"Every carrier selection decision you make from this point forward is a potential exhibit in a future lawsuit."* Bricker, Benesch, Cozen O'Connor, Matthiesen Wickert all published the same playbook within two weeks of the ruling.

The vetting *data* is already commoditized — FMCSA SAFER is free, Carrier411 is ~$100/mo, Highway/RMIS run $50–500/seat. What does **not** exist for the small broker is the contemporaneous, per-load **record** of the decision: what was checked, what criteria applied, who approved, why. Today that lives in email threads and spreadsheets — exactly what plaintiff's counsel wants in discovery. Transflo's post-ruling brief: insurance premiums *"will skyrocket for brokers who can't demonstrate a systematic, auditable carrier selection process."* That's a forcing function with a hard money attached.

Provenance:
  - Signal 1 (Demand/Regulatory): SCOTUS rules 9-0 brokers liable for negligent carrier selection; law firms uniformly prescribe documented per-load vetting records — https://www.freightwaves.com/news/the-carrier-vetting-tech-stack-is-the-new-line-of-defense-in-freight & https://www.scotusblog.com/2026/05/court-rules-freight-brokers-can-face-negligent-hiring-suits-under-state-law/ — 2026-05-14
  - Signal 2 (Feasibility): FMCSA SAFER/SMS data is free and API-accessible; cheap LLM inference can read a carrier safety profile, apply a written policy, and draft a timestamped decision memo in seconds — https://www.transflo.com/blog/what-comes-next-after-supreme-court-rules-against-freight-brokers/ — 2026-05
  - Signal 3 (Economic): ~26–30K active FMCSA brokerages (top 3% take 80% of revenue → ~25K small shops underserved); insurance repricing for brokers without an auditable process — https://www.freightcaviar.com/freight-broker-statistics/ — 2026
  Category: Regulatory arbitrage

## 3. The opportunity

This is a regulatory-arbitrage wedge. A 9-0 ruling instantly created a documentation obligation that 25,000 small brokerages are not equipped to meet, and the incumbents are pointed at the wrong problem.

Carrier411, Highway, RMIS, Carrier Assure — they all sell **vetting and monitoring** (is this carrier's authority active, insurance current, double-broker risk). Good products. But they answer "is this carrier OK *right now*." Montgomery created liability for the **decision record** — "can you prove, two years from now, what you checked and why you approved this carrier on *this load*." That's a different artifact. The big brokers (CH Robinson, TQL) will build internal compliance systems or buy enterprise RMIS seats. The 25K small shops — 1 to 10 brokers, running loads off a TMS and Gmail — get the same legal exposure and have nothing.

The 10× move: don't out-data the data vendors. Sit *on top* of the free FMCSA feed and the broker's existing workflow, and produce the one thing courts and insurers now demand — a clean, consistent, timestamped selection trail per load — at a price a 3-person brokerage pays without thinking.

## 4. Target market

- **Primary customer:** Owner/operator of a small US freight brokerage — 1 to 10 brokers, FMCSA-licensed, moving roughly 10–200 loads/week, no in-house compliance staff. The person who signs the insurance check and now loses sleep over the ruling.
- **Why they buy:** In their world the pain is concrete: their insurance renewal is coming, the broker is asking "show me your carrier-vetting process," and the honest answer is "we check SAFER sometimes and keep it in email." Benesch and Bricker told them they're personally exposed. They don't want a compliance department; they want to not be the cheap defendant in a wrongful-death suit and to keep their premium from doubling.
- **Rough TAM reasoning:** ~26–30K active brokerages; top 3% are too big and will go enterprise. Realistic serviceable base ≈ 20–25K small/mid shops. At $150–400/mo that's a $40M–$100M+ revenue ceiling — comfortably a sub-$5M ARR business to capture a slice of, not a unicorn, exactly the target.
- **Why now for them:** Two clocks. The ruling is live *today* — liability attaches to loads they're booking this week. And their insurance renewal (annual) is the moment premium repricing bites. Both create urgency a generic compliance tool never had.

## 5. Product sketch (MVP)

- **One-click carrier check at booking:** paste/enter MC or DOT number, pull live FMCSA SAFER + SMS BASIC + authority + insurance status in one view.
- **Policy engine:** broker sets their written vetting policy once (minimum requirements, disqualifying conditions, data sources consulted). The tool applies it to every carrier automatically.
- **Auto-generated decision memo:** for each carrier-on-load, a timestamped record — what data was pulled, which criteria passed/failed, the approve/decline call, and who made it. The litigation exhibit, generated as a byproduct of booking.
- **Red-flag flagging:** conditional/unsatisfactory safety rating, lapsed insurance, recent authority reinstatement, double-broker risk signals — surfaced before the broker tenders the load.
- **Discovery export:** "give me three years of vetting records for carrier X" or "for this load" → clean PDF/CSV packet, formatted for counsel and insurers.
- **Insurance renewal pack:** one-click export demonstrating a systematic, consistently-applied process — the thing the underwriter now asks for.
- **TMS-light import:** drop in a load list (CSV from any TMS) so vetting records attach to real loads, not orphaned lookups.

## 6. AI angle — what's load-bearing

AI does the judgment-compression. A carrier safety profile is six federal databases of messy, inconsistent fields. The load-bearing work: an LLM reads the SAFER/SMS profile, applies the broker's written policy in plain language, and produces a defensible narrative memo — *"Carrier reviewed on [timestamp]; SMS Unsafe Driving BASIC below intervention threshold; authority active 4+ yrs; insurance on file and current; no disqualifying conditions under policy v2; approved by J. Doe."* — for every load, consistently, in seconds.

Remove the AI and you're back to a broker manually reading six databases and hand-typing memos for 50 loads a day — which FreightWaves explicitly says is impossible ("A broker handling 50 loads a day cannot manually check six federal databases for every carrier on every load"). The consistency and the contemporaneous narrative *are* the legal defense. That's not decoration; it's the product.

## 7. Localization angle (if any)

N/A — this is a US-only play, by design. The opportunity is created by a specific US Supreme Court ruling and the FMCSA regulatory regime. There is no localization wedge; the regulation *is* the wedge. (A future analog could exist wherever broker-liability law shifts, but that's not a v1 concern.)

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** $149/mo (solo/1–2 brokers, capped loads), $349/mo (small shop, 3–10 brokers, higher volume), usage add-on for high-volume. Anchored *below* a Carrier411 + manual-compliance-hours bundle and far below an enterprise RMIS seat.
- **ACV:** ~$2,500–$4,200/yr blended.
- **Math to $1M ARR:** ~300 brokerages × ~$280/mo × 12 ≈ $1.0M. ~1.2% of the serviceable base. Believable.
- **Math to $5M ARR:** ~1,500 brokerages (~6% of base) at the same blended ACV, plus a higher-tier monitoring add-on. Requires becoming the default "Montgomery compliance" tool in the small-broker segment — plausible with a 12–18 month head start.
- **Expansion path:** per-seat as the brokerage grows; continuous carrier *monitoring* add-on (alert when an approved carrier's rating degrades); insurance-broker referral revenue (underwriters want this data — they may co-sell or subsidize it).

## 9. Go-to-market wedge — first 100 customers

- **Insurance brokers/underwriters as the channel.** Transport-insurance brokers are *telling* their book to get a documented process or face repricing. Sign 5–10 transport insurance agencies as referral partners — they hand CarrierProof to clients at renewal as the fix to the exact gap they're flagging. This is the wedge: the buyer is being pushed by someone who already has their trust and a renewal deadline.
- **FMCSA broker registry is a public list.** ~26K licensed brokers, filterable by size proxies. Scrape it, segment to small shops, send a 90-second Loom: "here's your carrier-selection trail for the load you booked this morning." Expect low single-digit reply but a huge, addressable, named list.
- **Where they live online:** r/FreightBrokers, FreightWaves comment sections, broker Facebook groups, and the post-Montgomery webinar circuit every law firm is running. Show up with a free "vetting policy template + one free decision memo" — content that converts because the fear is fresh and specific.
- **Bond/authority providers** (the people who sell new brokers their $75K BMC-84 bond) onboard every new brokerage — bundle a free trial at the moment a broker gets their authority.

## 10. Build complexity — justification

**Low.** The hard inputs already exist: FMCSA SAFER/SMS data is free and accessible, LLM APIs are off-the-shelf, the UI is a standard web app. No custom models, no marketplace, no hardware. The genuine work is (a) reliable ingestion/normalization of messy federal data feeds, (b) a clean policy-to-memo generation flow, and (c) export formatting that satisfies counsel. A technical founder ships a credible v1 in 8–12 weeks; the domain nuance (what actually constitutes a defensible record) is the real risk, solvable with one transport-attorney advisor.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Uses public FMCSA data; helps brokers comply, doesn't give legal advice. |
| Ethical — no harm / dark patterns | ✅ | Improves highway safety incentives; no dark patterns. |
| Market exists (evidence above) | ✅ | 9-0 SCOTUS ruling + 26K brokerages + insurance repricing. |
| 1–5 person team can build this | ✅ | Off-the-shelf data + AI + web stack. |
| Launchable with <$50K / ₹40L | ✅ | Solo/pair build; data is free. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 17/20 | Personal legal liability + insurance repricing, attached to loads booked this week. Hair-on-fire for the owner. |
| Demand evidence | 15 | 13/15 | Multiple independent signals: 9-0 ruling, uniform law-firm guidance, incumbents charging money, insurance pressure. A skeptic nods. Docked for no direct small-broker purchase signal yet (ruling is weeks old). |
| Build feasibility | 15 | 13/15 | Free data + LLM + web app, 8–12 weeks. Federal-feed ingestion is the only fiddly bit. |
| Distribution clarity | 15 | 12/15 | Insurance-broker referral channel is genuinely strong; public FMCSA list addressable. Conversion math still unproven. |
| Revenue mechanics | 15 | 11/15 | Pricing benchmarked vs Carrier411/RMIS; ACV reasonable. Conversion to paid is the guess. |
| Time to first revenue | 10 | 8/10 | Acute, dated pain; can pre-sell to brokers facing renewal. 4–8 weeks plausible. |
| Defensibility | 10 | 4/10 | Data is free, so a vetting incumbent (Highway, Carrier411) could add a "decision memo" feature. Moat is speed, insurance-channel lock-in, and accumulating per-broker records. Copyable by month 12. |
| **Total** | **100** | **78/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required` — needs a builder comfortable with messy data ingestion and an LLM workflow, plus access to a transport/liability attorney to validate what a "defensible record" actually is.

### Key assumptions to validate (3–5)

1. **Assumption:** Small brokers see the *decision record* (not just vetting data) as the thing they're missing. **How to test:** 25 calls with small-brokerage owners — show the auto-memo, ask "do you have this today, and would you pay for it." Kill if <30% say they lack it and want it.
2. **Assumption:** Transport insurance brokers will refer/co-sell. **How to test:** Pitch 8 transport-insurance agencies; secure ≥2 referral LOIs in 3 weeks.
3. **Assumption:** $149–$349/mo clears the wallet. **How to test:** Pre-sell 10 annual plans at list price before building beyond a clickable demo.
4. **Assumption:** A generated memo is genuinely defensible. **How to test:** One transport-liability attorney reviews the memo format and signs off it would help, not hurt, in discovery.

### Risk flags

1. **Platform dependency:** Reliant on FMCSA data feeds (SAFER/QCMobile). If access changes or rate-limits tighten, ingestion breaks. Mitigate with caching and multiple access paths.
2. **Incumbent fast-follow:** Highway/Carrier411 already have the data and the customers; a "decision log" is a feature they could ship. Window is ~6–12 months — move fast, lock the insurance channel.
3. **Liability of the tool itself:** If a generated memo is wrong and a broker relies on it, the vendor could be dragged in. Mitigate with clear "tool, not legal advice" framing and attorney-reviewed output.
4. **Market timing / overreaction fade:** If lower courts narrow Montgomery (Kavanaugh's "ordinary care, not perfection" concurrence hints at limits), urgency could soften. The insurance-repricing driver is stickier than the litigation fear.

## 14. Structured verdict

```
Score:                  78/100
Verdict:                GO
Confidence:             High
Best-fit builder:       Technical founder + transport-liability attorney advisor
Time to revenue:        4–8 weeks (pre-sell to brokers facing renewal)
Capital to launch:      ₹4–8 lakh ($5–10K)
Top 3 assumptions to validate first:
  1. Small brokers lack and want the decision-record artifact — 25 owner interviews
  2. Insurance brokers will refer/co-sell — secure ≥2 referral LOIs in 3 weeks
  3. $149–$349/mo clears the wallet — pre-sell 10 annual plans before full build
Kill criteria:
  - Abandon if <30% of 25 interviewed brokers say they lack and want a per-load decision record
  - Abandon if 0 of 8 pitched insurance agencies will refer after 3 weeks
  - Abandon if a vetting incumbent ships an equivalent "decision memo" feature before your v1 and bundles it free
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Scrape 300 small brokerages off the FMCSA registry. Build a one-screen clickable demo: enter MC# → live SAFER pull → auto-generated decision memo PDF.
- **Day 3–4:** Book 25 calls with small-brokerage owners (cold + r/FreightBrokers + FreightWaves community). Pitch 8 transport-insurance agencies on a referral arrangement. Show the memo, ask the willingness-to-pay question directly.
- **Day 5:** Decide go / no-go. **Falsifiable bar:** ≥8 of 25 brokers say they lack this and would pay $149+/mo, AND ≥2 insurance agencies verbally agree to refer. Below either threshold → no-go or rework the wedge.
