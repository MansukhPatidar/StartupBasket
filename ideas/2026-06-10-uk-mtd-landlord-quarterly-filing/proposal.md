---
title: "TallyLet — quarterly tax autofiler for buy-to-let landlords"
slug: uk-mtd-landlord-quarterly-filing
date: 2026-06-10
category: FinTech / UK Buy-to-Let Landlords (non-bookkeeper, £50k+)
complexity: Medium
score: 74
verdict: GO
confidence: Medium
oneLiner: "Connect your bank, snap receipts by text, and TallyLet sorts and files MTD quarterly before HMRC fines you."
tags:
  vertical: FinTech
  model: SaaS
  geography: EU
  secondary: [Compliance-driven, WhatsApp-first, AI-agent, SMB, Solo-builder]
axes:
  problem: 16
  demand: 13
  build: 12
  distribution: 11
  revenue: 11
  time: 7
  defensibility: 4
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# TallyLet — quarterly tax autofiler for buy-to-let landlords

## 1. One-liner

Connect your bank, snap receipts by text, and TallyLet sorts and files MTD quarterly before HMRC fines you.

## 2. Trend signal — why now?

HMRC's **Making Tax Digital for Income Tax (MTD for ITSA)** goes live **6 April 2026**. From that date, sole-trader landlords and self-employed people with combined qualifying income **above £50,000** must keep digital records and submit a **quarterly** summary to HMRC through approved software, plus a year-end declaration. The old once-a-year Self Assessment is dead for this band. The **first quarterly period (6 Apr–5 Jul 2026) is due by 7 Aug 2026** — so the pain lands within weeks of this idea being written.

The trigger is hard, dated, and non-negotiable, and the affected population is large and unprepared:

- **~2.9 million individuals** affected by the wider rollout; recent research cited by Armstrong Watson and the FSB says **only ~30% are even aware** of the change.
- **73% of UK accountancy firms are turning away clients** for lack of staff (Staxx Solutions / Accountancy Age). **34% of accountants admit they're not ready** for April 2026 and **65% lack confidence** in MTD requirements. The small landlord worth £200–£500/yr in fees is exactly the client a stretched firm drops.
- Penalties bite: miss three quarterly submissions and file the year-end late and you hit four penalty points and a **£200** fine in year one — and it compounds.

This is a regulatory-arbitrage / tech-unlock window: a legally-forced behaviour change, a population that has never done bookkeeping, and the professionals who'd normally absorb it pulling up the drawbridge.

Provenance:
  - Signal 1 (demand): "The Making Tax Digital nightmare is about to hit landlords like me. I'm terrified" — first-person landlord op-ed, "I now have to do five times the work I currently do once per year." — https://uk.news.yahoo.com/making-tax-digital-nightmare-hit-100000687.html — observed 2026-06-10
  - Signal 2 (feasibility/economic): MTD for ITSA mandatory from 6 Apr 2026 for >£50k; first quarter due 7 Aug 2026; ~2.9M affected, only ~30% aware; accountants "getting booked up fast." — https://www.armstrongwatson.co.uk/news/2026/01/making-tax-digital-changes-self-employed-and-landlords — observed 2026-06-10
  - Signal 3 (economic/gap): 73% of UK firms turning away clients for lack of staff; 34% of accountants not ready, 65% lack MTD confidence — the small landlord gets dropped. — https://staxxsolutions.co.uk/why-uk-accounting-practices-are-losing-clients-before-mtd-even-starts/ — observed 2026-06-10
  Category: Regulatory arbitrage

## 3. The opportunity

There are already HMRC-recognised MTD tools — Hammock (£8/mo), FreeAgent (£10/mo, free via NatWest), Coconut, Landlord Vision, Xero, QuickBooks. So why isn't the market closed?

Because **every one of them is an accounting app, and they all assume a person who will do bookkeeping.** They give you a transaction list, categories, a dashboard, and a "submit" button — and then wait for the landlord to sit down four times a year, reconcile, and file. That model works for someone who already keeps books. It does **not** work for the actual MTD-2026 cohort: a teacher, a nurse, a retiree with two or three buy-to-lets who has *never* categorised a transaction in their life, throws receipts in a drawer, and currently pays an accountant £200 once a year to make the problem disappear.

The incumbents are doing it badly in one specific way: **they put the work on the landlord.** A practitioner on AccountingWEB describes "around 30 out of 50" landlord clients as the type who "can't even manage banking on their phones" and won't touch quarterly software. Those people don't need a better dashboard — they need the dashboard to disappear.

TallyLet's bet: collapse the entire quarter into **a bank-feed connection set up once, a "snap a receipt" text whenever they spend, and one confirmation message before each deadline.** AI does the categorisation, the deductibility judgement, and the deadline chasing. The landlord's job shrinks to *answering a WhatsApp*. That is a 10× UX gap, not a feature gap — and it targets the slice the £8 accounting apps quietly can't serve and the accountants are dumping.

## 4. Target market

- **Primary customer:** A UK sole-trader landlord with **1–4 properties** and combined property/self-employed income **just over £50,000** (the April 2026 mandate band). Not a portfolio professional — a "**accidental landlord**" or side-income landlord with a day job, low IT confidence, and no existing bookkeeping habit. Secondary: the £30k+ band that joins in April 2027 (a pre-built pipeline).
- **Why they buy (in their words):** "I now have to do five times the work I currently do once per year… really?" They're scared, they don't understand the rules, their accountant won't take them or quoted a number they hate, and the deadline is real. They will pay to *not have to learn accounting software.*
- **Rough TAM reasoning:** ~2.9M individuals in the full MTD-ITSA scope across the phased thresholds; the property-landlord subset is in the **low millions**, of whom a large share are exactly the non-bookkeeper, low-property-count profile. Even capturing **0.5–1%** of the >£50k band is a healthy bootstrapped business; the 2027 (£30k) and 2028 (£20k) waves expand the funnel automatically.
- **Why now for them:** 6 April 2026 happened. The 7 August 2026 first-quarter deadline is the forcing function. Awareness is spiking *now* as accountants send "I can't take you on" emails.

## 5. Product sketch (MVP)

- **One-time setup wizard**: connect bank feed via Open Banking, tag which account(s) and which property each relates to, confirm income band — done in under 10 minutes.
- **WhatsApp/SMS-first interface**: no app to open. Snap a photo of a receipt and text it in; TallyLet reads it, files it, and replies "logged: £180 boiler repair, Flat 2, allowable."
- **Auto-categorisation against UK property-tax rules**: every bank transaction sorted into allowable expense categories (repairs vs improvements, finance-cost restriction, agent fees, etc.) with a plain-English reason.
- **"Anything I missed?" quarterly nudge**: a single message a week before each quarter-end listing what it found and asking the landlord to confirm or add — then it files to HMRC.
- **HMRC MTD quarterly submission + year-end declaration**, fully handled inside the recognised-software flow.
- **Deadline watchdog**: escalating reminders (text → call) and a live penalty-risk indicator so the user always knows their exposure.
- **Plain-English tax position**: "you owe roughly £X so far this year" updated every quarter — the thing landlords actually want to know.
- **"Hand to my accountant" export** for the minority who do have one.

## 6. AI angle — what's load-bearing

Remove the AI and this is just another MTD form-filler — and the whole thesis collapses, because the thesis *is* that the landlord does almost no work. Load-bearing AI:

1. **Transaction categorisation + deductibility classification.** Reading a messy bank feed and a pile of receipt photos and correctly applying UK property-income rules (the repairs-vs-capital line, the Section 24 finance-cost restriction, apportionment across properties) is exactly the judgement work that used to require a human bookkeeper. This is the product.
2. **Receipt/document extraction** (vision) from photos forwarded over WhatsApp — no manual data entry, ever.
3. **Conversational front end** that turns "I spent £180 on a boiler" or a blurry photo into a correctly-coded ledger entry, and answers "is my new kitchen deductible?" in plain English.

If the categorisation is good, the landlord's quarterly effort drops to near zero. That is the entire value proposition, and it's only possible because LLM + vision can now do the bookkeeper's coding judgement cheaply.

## 7. Localization angle (if any)

This **is** a localization play — UK-specific by construction. The moat ingredients are local: HMRC MTD-ITSA API recognition (a real submission/testing gate that takes weeks and filters out tourists), UK property-tax rules baked into the categorisation engine, GBP/Open Banking rails, and the April-2026 → 2027 → 2028 phased deadline calendar. A generic global bookkeeping app cannot serve this cohort — the rules and the filing endpoint are the product. The WhatsApp-first, "answer one text" interaction model is the localization to the *user*, not just the country: it meets low-IT-confidence landlords where they already are.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** **£14.99/mo** (or £149/yr) flat per landlord for up to ~3 properties; **£24.99/mo** for the "done-with-you" tier (priority review, a human checks the year-end). Deliberately *above* the £8 accounting apps — TallyLet sells "you do nothing," not "cheaper software." For a landlord who'd pay an accountant £300+/yr and still do the shoebox, £180/yr to make it vanish is trivial.
- **ACV:** ~£180–£300 (£200 blended).
- **Math to ~$1M ARR (~£800K):** **~4,500 landlords × £180/yr.** Out of a low-millions >£50k band, that's a fraction of a percent.
- **Math to ~$5M ARR (~£4M):** **~18–20K landlords**, helped by the **April 2027 £30k wave** roughly doubling the addressable pool, plus tier upsell and a per-property add-on.
- **Expansion path:** per-property pricing as portfolios grow; a CIS/self-employed-Schedule version (the rules engine generalises); a **white-label "agent" build for letting agents** who want to offer MTD filing to their landlord book; and an accountant-channel tier (firms hand off the clients they won't service).

## 9. Go-to-market wedge — first 100 customers

1. **Letting-agent partnerships (sharpest wedge).** UK letting agents hold lists of exactly these landlords and are *already getting panicked MTD questions* they can't answer. Sign 10 independent agents to co-brand "MTD sorted for £14.99/mo" to their landlord book; agent emails one announcement, takes a referral cut. Realistic: 10 agents × ~150 landlords each × 3–5% = **45–75 customers** from a fortnight of partnership calls.
2. **Landlord communities at the moment of panic.** r/uklandlords, the NRLA forums, Property118, and Facebook landlord groups are full of "what do I do about MTD?" threads *right now*. Answer them usefully (not spammily), with a free "are you in scope + what's your first deadline?" checker as the hook. The Telegraph "I'm terrified" piece shows the emotional temperature — content that reduces fear converts.
3. **Accountant overflow referrals.** 73% of firms are turning clients away. Offer firms a clean "we'll take the small landlords you can't" referral link with a kickback. The firm looks helpful instead of saying no; we get pre-qualified, deadline-aware leads.
4. **Deadline-timed paid search** on "MTD landlord software," "MTD quarterly deadline," "do I have to file tax quarterly landlord" — high intent, spiking toward the 7 Aug 2026 deadline.

The first 100 are a 4–6 week sprint built around two dated deadlines (7 Aug 2026, then 7 Nov 2026) that manufacture urgency for free.

## 10. Build complexity — justification

**Medium.** Off-the-shelf: LLM + vision for categorisation and receipt reading, Open Banking aggregator (TrueLayer/Plaid-UK), WhatsApp Business API, standard web stack. The two real pieces of work are (a) the **UK property-tax categorisation rules engine** married to the LLM so classifications are correct and explainable, and (b) **HMRC MTD-ITSA recognition** — building and passing HMRC's submission/testing sandbox to become recognised software, which is a real multi-week gate (and itself a moat). A small team gets a credible v1 in **~3–4 months**; the HMRC recognition timeline is the long pole, so start it day one.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Helping taxpayers meet a statutory filing duty; must register as MTD-recognised software and follow HMRC API terms. |
| Ethical — no harm / dark patterns | ✅ | Reduces compliance burden and penalty risk; no exploitation. Must be clear it's software, not regulated tax advice. |
| Market exists (evidence above) | ✅ | ~2.9M in scope, hard deadline, incumbents charging money, accountants turning clients away. |
| 1–5 person team can build this | ✅ | 1–3 people, ~3–4 months, off-the-shelf AI + Open Banking + WhatsApp. |
| Launchable with <$50K / ₹40L | ✅ | No capex; main cost is build time + inference + HMRC recognition effort. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | Legally forced, dated, penalty-backed, and the target cohort is genuinely scared ("I'm terrified"). Not quite 17+ only because the very smallest can still hire a cheap accountant. |
| Demand evidence | 15 | 13/15 | Multiple independent signals: statutory mandate, 2.9M affected, paid incumbents, accountants at capacity, vocal press/forum panic. A skeptic nods. |
| Build feasibility | 15 | 12/15 | Mostly off-the-shelf; the rules engine + HMRC recognition gate keep it from a top score. |
| Distribution clarity | 15 | 11/15 | Strong, named channels (letting agents, landlord forums, accountant overflow) with realistic math; conversion through agents is the unproven bit. |
| Revenue mechanics | 15 | 11/15 | Clear pricing benchmarked against £8–10 incumbents, sensible ACV, achievable customer counts. Premium-to-incumbent pricing is the assumption to prove. |
| Time to first revenue | 10 | 7/10 | Deadline-driven urgency helps, but HMRC recognition must land before you can actually file — gating first paid value to ~8–12 weeks. |
| Defensibility | 10 | 4/10 | Soft moat: HMRC recognition + rules engine + agent relationships + workflow lock-in. But incumbents (Hammock, FreeAgent) could bolt on a WhatsApp concierge; this is an execution-and-speed race. |
| **Total** | **100** | **74/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required` — needs someone who can ship LLM+vision+Open Banking *and* either knows UK property tax cold or pairs with an accountant who does. The rules engine is unforgiving: a wrong repairs-vs-capital call is a real tax error.

### Key assumptions to validate (3–5)

1. **Assumption:** Non-bookkeeper landlords will pay a *premium* over £8 accounting apps for "you do nothing." **How to test:** put up a £14.99/mo pre-order/waitlist page, drive 500 landlord-forum + paid-search clicks, measure deposit/sign-up rate vs a £7.99 variant.
2. **Assumption:** LLM + rules engine categorises real UK landlord bank feeds + receipts accurately enough to file unsupervised. **How to test:** run 20 real (anonymised) landlord bank-statement sets through it and have a property-tax accountant grade the categorisation; target <2% material error.
3. **Assumption:** Letting agents will co-promote to their landlord book. **How to test:** pitch 15 independent agents; need ≥5 verbal yeses and ≥2 willing to email their list in a pilot.
4. **Assumption:** HMRC MTD-ITSA recognition is attainable on a small-team timeline. **How to test:** enter the HMRC developer/sandbox program week one and confirm the testing path and timeline before building the rest.

### Risk flags

1. **Platform dependency (HMRC):** the entire product sits on HMRC's MTD API, recognition program, and a deadline calendar HMRC has repeatedly *postponed*. A further delay softens urgency; an API change forces rework.
2. **Incumbent fast-follow:** Hammock/FreeAgent already own MTD recognition and distribution; a "snap-a-receipt WhatsApp" feature is copyable. The defensibility is speed, the agent channel, and owning the *scared non-bookkeeper* positioning before they do.
3. **Liability / advice line:** mis-categorising capital vs revenue is a real tax error with real consequences. Need clear "software not advice" framing, a human-review tier, and PI cover — gets heavier as you scale.
4. **Market timing — single-cohort cliff:** the >£50k wave is finite; growth depends on the 2027 £30k and 2028 £20k waves arriving on schedule.

## 14. Structured verdict

```
Score:                  74/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder (LLM + Open Banking) paired with a UK property-tax accountant advisor
Time to revenue:        8–12 weeks (gated by HMRC MTD-ITSA recognition)
Capital to launch:      £15–30K ($20–40K) — build time, inference, Open Banking + WhatsApp fees, HMRC recognition effort
Top 3 assumptions to validate first:
  1. Premium-over-incumbent willingness to pay — £14.99 waitlist page vs £7.99 A/B, 500 clicks
  2. Categorisation accuracy on real bank feeds + receipts — 20 anonymised sets graded by an accountant, <2% material error
  3. Letting-agent channel works — 15 pitches, need ≥5 yes and ≥2 list-email pilots
Kill criteria:
  - Abandon if HMRC recognition can't be secured on a <16-week timeline for a small team
  - Abandon if categorisation can't beat ~98% material accuracy unsupervised (then it's a liability, not a product)
  - Abandon if the £14.99 waitlist converts no better than a £7.99 variant (no premium = lose to free FreeAgent)
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Stand up two landing pages (£14.99 "do-nothing autofiler" vs £7.99 "simple MTD app"), each with an email/deposit capture and a free "your first MTD deadline" checker as the hook. Enrol in the HMRC MTD-ITSA developer sandbox and confirm the recognition path/timeline.
- **Day 3–4:** Drive 500 targeted clicks (landlord subreddits/forums + deadline-keyword paid search). Cold-pitch 15 independent letting agents on co-promotion.
- **Day 5:** Decide go/no-go. **Falsifiable bar:** ≥5% of the £14.99 page converts to email/deposit *and* it beats the £7.99 variant, **and** ≥2 letting agents agree to a list-email pilot, **and** HMRC confirms recognition is achievable in <16 weeks. Miss any one → rework or pass.
