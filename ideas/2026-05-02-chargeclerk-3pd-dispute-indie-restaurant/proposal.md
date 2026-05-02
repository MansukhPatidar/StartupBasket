---
title: "ChargeClerk — AI 3PD chargeback recovery for indie restaurants"
slug: chargeclerk-3pd-dispute-indie-restaurant
date: 2026-05-02
category: RestaurantTech SaaS / US Independent Single-Location Restaurants
complexity: Medium
score: 82
verdict: STRONG GO
confidence: High
oneLiner: AI chargeback recovery for single-location US restaurants drowning in DoorDash, Uber Eats, and Grubhub refund disputes.
tags:
  vertical: RestaurantTech
  model: SaaS
  geography: US
  secondary: [SMB, AI-agent, Workflow-automation, Solo-builder, Multi-platform]
axes:
  problem: 18
  demand: 14
  build: 12
  distribution: 12
  revenue: 12
  time: 8
  defensibility: 6
founderFit: [technical-heavy, sales-heavy]
featured: true
---

# ChargeClerk — AI 3PD chargeback recovery for indie restaurants

## 1. One-liner

AI chargeback recovery for single-location US restaurants drowning in DoorDash, Uber Eats, and Grubhub refund disputes.

## 2. Trend signal — why now?

Three independent, dated signals stack on this market right now.

**Demand: this is a Friday-night-fire problem with named operators on the record.** Restaurant Business reported in 2026 that industry-wide, **2.5–3% of operators' total revenue is caught up in disputes** with their delivery providers. Real owners on the record:

- Kory Lau (Dollar Cafe, Morrow GA) — quoted "I spend a good amount of time worrying about the canceled orders." Loses about 40% of his disputes. **Was quoted $18,000 to automate** his dispute work due to API restrictions and walked away.
- Dan Campeas (Dan & Day's Burgers, Montclair NJ) — "Sometimes we're on the phone for literally 20 minutes, just for one order."
- Mike Kudrna (Frato's, Schaumburg IL) — "I used to investigate every error and came to the realization that 99% of the time, we're not at fault."
- An anonymous McDonald's franchisee disputing roughly **$500 per location per month** in refunds.

The **2026 Merchant Risk Council report** says 61% of merchants saw refund/policy abuse rise in the past year, with 20% reporting +25% or more. Chargeback ratios on third-party delivery apps run **20× higher** than first-party order ratios (3% vs 0.1–0.2%).

**Regulatory: California AB 578 went live Jan 1 2026.** It forces DoorDash, Uber Eats, Postmates, Grubhub to give cash refunds to customers for missing/incorrect orders. Operators publicly worried this multiplies their refund exposure without protecting them. NYC's Mamdani administration also took action in March 2026 to protect immigrant restaurant owners from delivery-app junk fees. Regulatory pressure on apps = more chargebacks pushed onto restaurants.

**Feasibility: API + LLM stack matured in 2024–25.** DoorDash Reporting API (Financial, Operations, Menu, Feedback reports) and Uber Eats Marketplace API are both production-grade now. Multimodal LLMs (Claude 4, GPT-4o) cheap enough to read packed-order photos and KDS tickets at scale. Loop AI raised **$14M Series A in February 2026** explicitly to chase this market — but only at the enterprise/chain tier. They confirm money is moving here.

```
Provenance:
  - Signal 1: Demand — "Restaurants say they're bearing the brunt of delivery chargebacks", named owner quotes, 2.5–3% of revenue stuck — restaurantbusinessonline.com — 2026
  - Signal 2: Regulatory — California AB 578 forces cash refunds from delivery apps; effective Jan 1 2026 — smithallengroup.com / sandiegoville.com — 2026
  - Signal 3: Feasibility/Economic — Loop AI raised $14M Series A Feb 2026 from Nyca/Base10/Afore for restaurant 3PD AI; Voosh, Checkmate, Orders.co all expanding dispute products — techstory.in / qsrweb.com — 2026
  Category: Workflow automation
```

## 3. The opportunity

Mid-market and chain restaurants already have a fix: Voosh (sweet spot 20–30 locations), Loop AI (300+ brands), Checkmate (large enterprise integrations). These tools recover real money — Voosh has recovered >$1M, dispute win rates of 89%, error charges down 43% in two weeks. **Independent single-location operators are not their customer.**

The gap: a 1–3 location indie pizza/taqueria/sandwich shop processes 80–250 3PD orders a week, eats 2–5 disputable error charges per night, and has no spare hour at midnight to file them. Vendors quote enterprise rates ($18K to automate, per Lau's quote above). POS integration spreads them thin: Toast, Square, Clover, Aloha, or none. Chains don't have this fragmentation.

Wedge: **self-serve, success-fee-priced, AI-first dispute clerk + payout reconciliation**, designed so a single-location operator can sign up via Toast/Square partner directory, connect DoorDash/Uber Eats/Grubhub merchant logins through the official APIs, and have disputes filed automatically that same week. Charge a flat low base + percentage of recoveries — no $18K quote, no $500/location enterprise contract, no AE on a Zoom call.

Voosh and Loop won't come down here. Their unit economics need 20+ locations to justify CAC. The fragmentation that makes this hard is exactly what keeps them out.

## 4. Target market

- **Primary customer:** Owner-operator of a single-location independent US restaurant doing $500K–$2M annual revenue, where 30–60% of revenue flows through DoorDash + Uber Eats + Grubhub. Pizzerias, taquerias, sandwich shops, Asian QSR, ghost kitchens, delivery-heavy late-night joints. Often immigrant-owned. Frequently uses Toast or Square POS, sometimes Clover, sometimes nothing.
- **Why they buy:** They lose $300–$700/month per location to chargebacks they don't have time to dispute. They spend 4–6 hours per week reconciling 3 different payout PDFs against POS sales. Margins are 4–8%. The recovery covers our fee 3–5× over.
- **Rough TAM reasoning:** 412,498 independent US restaurants (Technomic, end-2025). Conservatively ~250,000 do meaningful 3PD volume (eligible). 5% adoption = 12,500 paying customers; 1% = 2,500. At $149 blended ACV, 2,500 customers = $4.5M ARR. Realistic.
- **Why now for them:** AB 578 just landed. Their refund volume is rising. Loop AI and Voosh marketing pressure has put dispute recovery on owners' radar — they know money is on the table — but those tools won't sell to a single shop.

## 5. Product sketch (MVP)

- One-click connect to DoorDash, Uber Eats, Grubhub merchant accounts (no $18K integration project)
- Daily auto-pull of every error charge, refund, adjustment, and payout across all three apps
- AI dispute filer: when a chargeback is winnable, ChargeClerk drafts the dispute (with KDS receipt, photo evidence if available, and the right canned-response language each app rewards) and submits it through the merchant portal API — owner sees a "we filed 4 disputes for you tonight, $87 expected back" digest
- Weekly 3PD reconciliation: matches every payout line to its order, flags missing payouts, summarizes commission + refund + promo deductions in one view
- Photo-evidence capture: simple kitchen iPad/phone app that snaps and tags packed orders to a 3PD ticket — auto-attached to disputes
- AB 578 / cash-refund tracker for California operators: separates state-mandated cash refunds from disputable error charges so owners don't waste time fighting the wrong ones
- Monthly "where your 3PD money went" P&L for the accountant
- Win-rate dashboard with benchmark vs other shops in your cuisine/zip

## 6. AI angle — what's load-bearing

Two real AI jobs, not chatbot decoration.

1. **Dispute classification + draft.** A multimodal model reads the 3PD error charge, the matching KDS ticket, the packed-order photo, and any prior dispute outcomes for that exact error type at this restaurant — then decides "winnable / unwinnable / borderline" and writes the evidence packet. Without this the owner has to read every charge, retrieve evidence, and write copy at midnight. With this, it's autopilot. Voosh markets dispute win-rate increase from baseline ~30% to ~89% on the back of this work.

2. **Reconciliation matching.** 3PD payout lines don't cleanly map to POS tickets — partial refunds, promo splits, commission backouts, tip pass-throughs. An LLM-assisted matcher resolves "this $14.32 deposit corresponds to Toast tickets #4391 + #4395, minus $3.10 promo, minus 25% commission" without owner intervention. Manually this is 4–6 hours/week.

If you remove the AI, this becomes another thin "dashboard for 3PD" tool. Owners already have those (free in DoorDash portal). The AI is what turns it from "look at your problem" into "we fixed your problem while you slept."

## 7. Localization angle (if any)

US-only at v1. State-level customization matters: California (AB 578), New York City (Mamdani admin junk-fee rules March 2026). Both shift dispute mechanics and create state-specific evidence requirements. Roll those in early as differentiation vs Voosh/Loop's enterprise-generic posture.

International expansion (UK Deliveroo, Australia Menulog, India Zomato/Swift) is real but not v1 — different APIs, different regulatory frames. Stay focused on US indies for the first $1–2M ARR.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** Two SKUs. **Flat $99/mo** per location (3PD reconciliation + photo capture + reporting), or **$49/mo + 25% of recovered chargebacks** for shops that want pure success-fee pricing. Most pick the success-fee tier; ARR per customer averages $149/mo blended once recoveries kick in.
- **ACV:** ~$1,800/year per location, blended.
- **Rough math to $1M ARR:** ~560 locations × $149/mo × 12 = $1.0M. ~0.2% of the eligible indie 3PD population. Plausibly hit in 12–15 months from launch with 1 sales hire + Toast partner channel.
- **Rough math to $5M ARR:** ~2,800 locations. Needs Toast/Square partner-program co-marketing (proven channel for restaurant SaaS — Beambox, 7shifts, Marqii all crossed $5M+ ARR off this), or a direct expansion to 4–5 location regional chains where ACV jumps to $7K+. Achievable in 24–30 months.
- **Expansion path:** (a) more locations per customer; (b) tier upgrade as recoveries grow; (c) cross-sell of margin-protection adjacencies (commission audits, promo waste detection, downtime alerts).

Comp benchmarks: Marqii (review/listings for restaurants) crossed $10M ARR with similar pricing. Voosh declines to publish but openly targets 4–5× ROI on fee. Loop AI's enterprise ACV is reportedly $20K+/year/brand. Our SMB ACV at $1,800 is 10–15% of theirs but the 250K-shop market makes the math work.

## 9. Go-to-market wedge — first 100 customers

- **Toast Partner Directory + Square App Marketplace listing.** Toast publishes its partner directory openly; getting listed is process, not magic. Toast operators self-discover dispute tools when they hit chargeback pain. Prior data points (7shifts, Marqii, Owner.com) show Toast partner channel can deliver 20–60 inbound leads/month once listed and ranked. First 30 customers comes from this in 60 days.
- **Cold outreach to the named operators in published media coverage.** Restaurant Business named Lau, Campeas, Kudrna by name. Their peers saw the article. Build a list of every restaurant quoted in QSR Magazine, FSR Magazine, Restaurant Dive, Restaurant Business in the last 18 months on chargebacks/3PD pain — ~80 named operators — and Loom-pitch each. Expect 10–15% conversion. 8–12 customers from this in 30 days.
- **NYC immigrant-owned restaurant cohort.** Mamdani admin's March 2026 announcement about junk-fee protection for immigrant restaurant owners gives air cover for direct outreach to that segment via NYC DCWP small-business networks, Immigrant Business Coalition lists, and Spanish/Bengali/Mandarin Facebook groups. 20–30 customers from this in 90 days.
- **Reddit r/restaurantowners and r/KitchenConfidential AMAs + comment-mining.** Search for chargeback complaints in last 12 months, DM each owner privately with a personalized "we built this for shops like yours, let me file your last 30 days of disputes free." Conversion 5–10% of replies. 15–20 customers in 90 days.
- **Pizza-shop and taqueria FB groups (Pizza Industry Marketing Group, etc.).** Vertical-specific because dispute volume per order is highest in delivery-heavy ethnic QSR. Sponsor 1–2 trusted operator-influencers ($1–2K each) for an honest review. 10–20 customers from this once the case studies exist.

That stacks to ~80–110 customers in 90 days, which is the first 100. The named-operator list and the Toast directory are the two lowest-CAC channels — both should be live before launch day.

## 10. Build complexity — justification

**Medium.** Off-the-shelf: DoorDash Reporting API, Uber Eats Marketplace API, Grubhub Marketplace API, multimodal LLM for evidence parsing, standard web stack, Stripe billing. Custom: payout-to-POS matching engine (the gnarly part — not research-grade but requires care), photo-capture mobile app (small Expo app), per-app dispute-filer adapters that mimic the merchant-portal flow. Pair of engineers can ship v1 in 12–14 weeks. Lau's $18K-quote anecdote suggests prior vendors built it custom per-customer; we amortize across the customer base, which is the whole point.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Acting on behalf of merchant via merchant's own credentials/API access; standard Auth pattern |
| Ethical — no harm / dark patterns | ✅ | Recovers money owed under existing T&Cs; no abuse of customer goodwill |
| Market exists (evidence above) | ✅ | Voosh/Loop/Checkmate/Orders.co all selling to chains; named indie operators publicly suffering |
| 1–5 person team can build this | ✅ | 2–3 engineers, 12–14 weeks |
| Launchable with <$50K / ₹40L | ✅ | ~$15K to v1: API access, infra, design |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 18/20 | Hair-on-fire on Friday/Saturday nights. Owners on the record losing $300–$700/location/mo and 4–6 hrs/week. AB 578 amplifies. |
| Demand evidence | 15 | 14/15 | Voosh ($1M+ recovered), Loop AI ($14M Series A Feb 2026), Checkmate launching dispute product, named operator quotes, 2026 MRC report on rising abuse. Multiple independent signals. |
| Build feasibility | 15 | 12/15 | All APIs exist. Multimodal LLMs cheap. Reconciliation matching and per-app dispute-filer adapters are real engineering but not research. Pair ships in 12–14 weeks. |
| Distribution clarity | 15 | 12/15 | Toast partner directory + Square marketplace + named-operator outreach + NYC immigrant cohort + Reddit. First 100 visible. |
| Revenue mechanics | 15 | 12/15 | Success-fee aligns with ROI; benchmarked vs Voosh/Loop; SMB tier under-served at this price point. Math to $1M ARR clean. |
| Time to first revenue | 10 | 8/10 | Pilot in 6 weeks, paid customer in 8–10 weeks. Self-serve once Toast listing is live. |
| Defensibility | 10 | 6/10 | Workflow lock-in (we hold the dispute history + evidence library), AI-tuning data flywheel by cuisine/zip, but Voosh could in principle squeeze down-market. Speed + SMB-fit posture is the moat. |
| **Total** | **100** | **82/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` (API + LLM integration, photo OCR, reconciliation engine), `sales-heavy` (Toast partnership, named-operator outreach, NYC cohort organizing). Best run by a 2-person team: builder + restaurant-operator-savvy GTM.

### Key assumptions to validate (3–5)

1. **Assumption:** Single-location indies will recover enough chargebacks for a $99–$199/mo tool to ROI within month 1. **How to test:** Run free 30-day dispute pilots on 10 named-from-press operators; measure $ recovered vs proposed fee.
2. **Assumption:** DoorDash and Uber Eats APIs allow third-party dispute filing at the volume + automation level needed (not just reporting). **How to test:** Spend week 1 in the DoorDash/UE developer portals; run 5 actual dispute submissions via API. Lau's $18K quote suggests this is the constraint to test first.
3. **Assumption:** Toast partner directory delivers 20+ inbound/month within 90 days of listing. **How to test:** Pre-launch interviews with 3 Toast partner managers (7shifts, Marqii, Owner.com alumni); pull comparable partner-listing inflow data.
4. **Assumption:** Owners trust an outside tool with their merchant-portal credentials/API tokens. **How to test:** 20 cold-call interviews; offer two onboarding modes (OAuth vs creds-vault) and observe preference.
5. **Assumption:** Success-fee pricing (25% of recoveries) is preferred over flat $99/mo by ≥60% of indies. **How to test:** Dual-tier landing page A/B test on Toast directory + paid Reddit ad; measure SKU mix.

### Risk flags

1. **Platform dependency.** DoorDash, Uber Eats, Grubhub each control API access and could rate-limit, deprecate endpoints, or ban third-party dispute automation. Mitigation: graceful fallback to creds-vault portal automation (slower but works) and diversification across all three platforms.
2. **Mid-market squeeze.** Voosh or Loop launches a self-serve indie tier and uses their existing brand to dominate. Mitigation: speed to Toast partnership, vertical-specific cohort plays (pizza, taqueria) they won't bother with.
3. **Regulatory whiplash.** AB 578 is good for us; a hypothetical federal "platforms eat all chargeback losses" law would gut the wedge. Probability low; AB 578 itself shifts cost the other way.
4. **Recovery success-rate variance.** If our average win rate underperforms Voosh's published 89%, the success-fee math breaks. Mitigation: start with Voosh-style evidence playbook, layer cuisine/zip specific tuning over time.

## 14. Structured verdict

```
Score:                  82/100
Verdict:                STRONG GO
Confidence:             High
Best-fit builder:       2-person team — backend/AI engineer + ex-restaurant ops GTM. Founder who has run a 3PD shop themselves is a meaningful unfair advantage.
Time to revenue:        8–10 weeks from kickoff to first paid pilot; 16–20 weeks to first 50 paying customers.
Capital to launch:      ~$15K ($10K infra + LLM + API; $5K design/marketing). Sub-$50K through first 100 customers.
Top 3 assumptions to validate first:
  1. DoorDash/UE/Grubhub APIs allow programmatic dispute submission at the cadence needed — week 1 spike.
  2. Single-location indies have enough monthly chargeback $ to ROI a $149/mo tool — 10-shop free pilot.
  3. Toast partner channel delivers ≥20 inbound leads/month — partner-manager interviews + listing application.
Kill criteria:
  - Abandon if 10-shop free pilot shows median monthly recoverable < $200 (no ROI math).
  - Abandon if DoorDash or Uber Eats explicitly forbids third-party dispute submission via ToS update before launch.
  - Abandon if Voosh or Loop ships an indie self-serve tier at <$99/mo within 6 months of our launch.
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Build a list of 30 named single-location operators from press articles (Restaurant Business, QSR, FSR, NYT, local TV) who have publicly complained about 3PD chargebacks in the last 18 months. Personalized 90-second Loom to each: "Send me read-only access to your DoorDash + UE merchant portal for 7 days. I'll file every disputable chargeback for free and report back what I recover."
- **Day 3–4:** Spin up read-only API integrations against DoorDash Reporting API and Uber Eats Marketplace API in a sandbox. Manually confirm dispute-submission flow works programmatically vs portal-scrape. (This is the Lau-quoted $18K constraint — if it doesn't work, we know on day 4.)
- **Day 5:** Decide go / no-go.
  - **Go** if (a) ≥6 of 30 operators agreed to the free pilot, AND (b) at least one of DoorDash or UE allows programmatic dispute submission (the other can be portal-automated).
  - **No-go** if either fails. Cycle back to signal harvest with different vertical.

The validation produces a **falsifiable** result: real operator yes/no on free pilot, real API yes/no on dispute submission. No "I think people liked it."
