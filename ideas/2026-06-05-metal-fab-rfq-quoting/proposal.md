---
title: "BidWright — RFQ quote drafter for small metal-fab shops"
slug: metal-fab-rfq-quoting
date: 2026-06-05
category: TradeTech / US-SMB
complexity: Medium
score: 74
verdict: GO
confidence: Medium
oneLiner: "Reads the messy 2D PDF a fab shop gets by email and turns it into a draft quote in minutes."
tags:
  vertical: TradeTech
  model: SaaS
  geography: US
  secondary: [AI-agent, SMB, Workflow-automation, Solo-builder, Vision-AI]
axes:
  problem: 16
  demand: 12
  build: 11
  distribution: 12
  revenue: 12
  time: 7
  defensibility: 4
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# BidWright — RFQ quote drafter for small metal-fab shops

## 1. One-liner

Reads the messy 2D PDF a fab shop gets by email and turns it into a draft quote in minutes.

## 2. Trend signal — why now?

Three things converged in the last 12 months and they all point at the same shop owner drowning in RFQs.

**Buyers now expect quotes fast, and slow shops lose the job.** Modern Machine Shop: "A shop can have the right machines, people and capacity — and still lose the job," with quoting speed the deciding factor. Industry data: **67% of buyers expect a quote response in under 24 hours, but the average job shop takes 3–5 days, some two weeks.** First to respond often wins the work.

**The reading is the bottleneck, and it's manual.** The Fabricator / trade press describe the reality: most contract manufacturers receive RFQs by email with 2D PDF drawings attached; someone manually reads every email, opens every PDF, extracts every dimension by hand, types it into a spreadsheet, and digs through old files for a similar past job. For sheet-metal/weld work — bend lines, weld symbols, thickness callouts, finishes — **intake reading alone eats 30–90 minutes per drawing.** Forum owners confirm: "too much work to bid on, but not enough resources to get to it all… hundreds of part numbers due in a couple weeks with only 1-2 people working it." And the killer admission: "accuracy, quantity, & time — pick two."

**The geometry tools don't serve this shop.** Paperless Parts, Spanflug, MakerVerse, Machine Research all analyze **3D CAD/STEP files** — great for CNC shops that receive clean models. But "most contract manufacturers do not live in that world." They get a 2D PDF or a marked-up print. LLM vision finally reads those messy 2D prints well enough to draft a quote — the unlock that wasn't there 18 months ago.

Money is moving: **Uptool raised $6M seed (Khosla, Bessemer, Kleiner Perkins, Eclipse) in 2024–25** for AI quoting; Mavlon, DigiFabster, Fulcrum, SecturaFAB all active. The category is validated — but the incumbents are priced and aimed up-market.

Provenance:
  - Signal 1 (demand): 67% of buyers want a quote in <24h; avg job shop takes 3–5 days; slow quoting loses jobs — https://www.mmsonline.com/articles/winning-more-work-as-the-shop-next-door — 2026-06-05
  - Signal 2 (feasibility): RFQs arrive as 2D PDFs; intake reading eats 30–90 min/drawing; CAD-geometry tools "don't live in that world"; LLM vision now reads 2D prints — https://www.mavlon.co/post/how-to-automate-rfq-quoting-process-in-metal-fabrication — 2026-06-05
  - Signal 3 (economic): Uptool raised $6M seed from Khosla/Bessemer/Kleiner Perkins for AI quoting software — https://fabricatingandmetalworking.com/ai-quoting-software-uptool/ — 2026-06-05
  Category: Underserved niche

## 3. The opportunity

The market has split. CAD-geometry quoting tools (Paperless Parts, Spanflug, MakerVerse, Machine Research, DigiFabster's storefront) require a clean 3D model and are priced/sold for growing mid-market shops — Paperless and Fulcrum are custom/$800+-a-month, enterprise-scoped. They are excellent for the shop that already has digital files and a sales engineer.

The shop they ignore: the **sub-20-employee weld/fab/job shop doing <$2.5M/year** — 83% of the ~13,000 US machine shops — that receives an RFQ as a PDF or a phone-photo of a marked-up print in the owner's inbox, and quotes it by hand on a spreadsheet at 10–90 minutes a pop, after hours, because they were running a machine all day. They can't justify an ERP rollout or a $10K/year tool, and the CAD-geometry tools physically can't read what they receive.

BidWright is deliberately narrow: **email-in, draft-quote-out, for 2D-PDF fab work, at a price an owner-operator pays on a credit card without a sales call.** Not an ERP. Not CAD geometry. The wedge is the *reading* — collapse the 30–90 minute manual intake into a 2-minute review of a pre-filled draft, priced off the shop's own historical quotes.

## 4. Target market

- **Primary customer:** Owner or estimator at a US custom metal-fabrication / welding / small job shop, 2–20 employees, <$2.5M annual sales, NAICS 332710 / 332323. The person who reads RFQs after the floor goes quiet.
- **Why they buy (their words):** "too much work to bid on, but not enough resources to get to it all"; "each change eats time… a lot of this time goes unbilled"; quoting is "very detailed and time-consuming." They lose jobs to faster shops and burn unpaid evening hours on intake.
- **Rough TAM:** ~10,700 US machine shops under 20 employees, plus a comparable population of structural/ornamental/sheet-metal fab shops outside 332710. Call the serviceable beachhead 25–40K US shops. At $200/mo, 3,000 shops = $7.2M ARR. Plenty for a bootstrapped operator without touching the enterprise tier.
- **Why now for them:** Buyers punish slow quotes harder than ever, the backlog of RFQs is growing, and for the first time a tool can read *their* messy 2D inputs instead of demanding a CAD file they don't have.

## 5. Product sketch (MVP)

- **Forward the RFQ email** to a BidWright inbox (or drop the PDF/photo into the web app). No CAD file required.
- AI **reads the 2D drawing**: extracts part name, quantity, material + thickness, dimensions, weld symbols, bend count, finish, tolerances, and flags anything ambiguous for human confirmation.
- **Drafts a quote** by mapping those features onto the shop's own rate card and labor times (material cost, cut/bend/weld/finish labor, setup, markup) — pre-filled, line-itemed, editable.
- **"Have we made this before?"** — searches the shop's past quotes for similar parts and surfaces the prior price as an anchor.
- **One-click branded PDF quote** out to the customer, in the shop's format.
- **Confidence flags** on every extracted field so the estimator knows what to double-check — the AI assists, it doesn't silently guess.
- Quote history that **compounds**: every accepted/rejected quote teaches the rate model for next time.

## 6. AI angle — what's load-bearing

Remove the AI and there is no product. The entire value is the vision model reading a degraded, non-standardized 2D engineering drawing — hand-marked prints, scanned faxes, phone photos, weld-symbol notation — and turning unstructured pixels into structured quotable line items. That's the 30–90 minutes of skilled manual work being collapsed. A spreadsheet template can't read a drawing; a CAD tool refuses anything but a clean model. The drawing-reading is the whole job, and it only became reliable in the last ~18 months.

## 7. Localization angle (if any)

N/A — this is a US-first play. The wedge is English-language 2D prints, US fab-shop rate structures, imperial units, and a buyer market that punishes slow quotes. UK/EU/Australia fab shops are a clean future expansion (metric, same workflow), but launching US-first keeps drawing conventions and units consistent for v1.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** $149/mo (solo/owner) and $299/mo (multi-estimator) self-serve, no annual contract, credit-card signup. Deliberately below the enterprise tier's gravity so it never triggers a procurement conversation.
- **ACV:** ~$2,400 (blended ~$200/mo).
- **To $1M ARR:** ~420 shops × $200/mo × 12. Out of 25K+ serviceable US shops, that's <2% penetration.
- **To $5M ARR:** ~2,100 shops, ~8% of the beachhead, **or** add a per-quote/usage tier for high-volume shops and a "win-rate analytics" upsell. Geographic expansion (UK/EU/AU) widens the pool.
- **Expansion path:** start at intake/quote-draft; expand into quote-follow-up nudges, win/loss analytics, and a light job-traveler once the quote is accepted — moving up the workflow without becoming a full ERP.

## 9. Go-to-market wedge — first 100 customers

- **Scrape the shop directories.** ThomasNet, IndustryNet, and state fab-shop listings hold tens of thousands of small shops with email + phone. Filter to <20 employees. Cold email a 90-second Loom: "send me one of your RFQ PDFs, I'll send back a finished draft quote in 5 minutes, free." A done-for-you demo on their own drawing converts far above a generic pitch.
- **Trade forums + subreddits where they already complain.** Practical Machinist (Shop Management board), r/Machinists, r/Welding, r/metalworking — the exact threads quoted above. Show up with the tool, not a banner ad.
- **Trade press / channel partners.** The Fabricator, Modern Machine Shop, FABTECH attendee lists; partner with a fab-shop accountant/consultant who already has the trust and the client list.
- **Conversion math:** scrape 5,000 shops → 3% reply to a personalized "I'll quote your drawing free" offer = 150 demos → 30% close on a $149–299 self-serve plan = ~45 paying shops from one campaign cycle. Two cycles clears 100.

## 10. Build complexity — justification

**Medium.** Off-the-shelf: LLM vision for drawing reading, standard web stack, email ingestion, Stripe billing. Custom work: the extraction → rate-card → line-item mapping, weld/bend/finish feature handling, the confidence-flag UX, and the historical-quote matching. The hard part isn't infra — it's getting drawing extraction accurate and trustworthy enough on real-world degraded prints that an estimator trusts the draft. Realistic v1 for a small team: **3–4 months**, with the first month spent on a tight loop against real shop drawings (a domain advisor from the trade is near-mandatory).

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Quoting assist tool, no regulated data |
| Ethical — no harm / dark patterns | ✅ | Confidence flags keep human in the loop; sells time saved, not deception |
| Market exists (evidence above) | ✅ | Forum complaints, funded competitors, hard quote-time stats |
| 1–5 person team can build this | ✅ | Off-the-shelf vision + web stack; domain advisor needed |
| Launchable with <$50K / ₹40L | ✅ | Inference + dev time; no capex |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | Real, recurring, costs jobs and unpaid evening hours. Felt weekly+, but workarounds (spreadsheets) exist, so not pure hair-on-fire. |
| Demand evidence | 15 | 12/15 | Multiple independent signals: hard quote-time stats, forum complaints, a $6M-funded competitor. Direct "small-shop will pay $200/mo" still to prove. |
| Build feasibility | 15 | 11/15 | Doable in 3–4 months but extraction accuracy on degraded 2D prints is the gnarly part; needs disciplined iteration. |
| Distribution clarity | 15 | 12/15 | Named lists (ThomasNet, IndustryNet), named forums, done-for-you demo. Conversion on cold trade outreach is the uncertainty. |
| Revenue mechanics | 15 | 12/15 | Pricing benchmarked below incumbents; <2% penetration to $1M. Self-serve at this price to a non-software-buying crowd is the risk. |
| Time to first revenue | 10 | 7/10 | Self-serve + free done-for-you demo can convert in 4–8 weeks, but the audience is offline-leaning and slow to adopt software. |
| Defensibility | 10 | 4/10 | Execution + accumulating per-shop quote/rate data is the only moat; well-funded Uptool could move down-market. Thin. |
| **Total** | **100** | **74/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required` — needs real vision/LLM engineering and a fab-shop insider so the drafts earn estimator trust.

### Key assumptions to validate (3–5)

1. **Assumption:** AI can extract material/thickness/weld/bend/finish from real degraded 2D prints accurately enough that estimators trust the draft. **How to test:** run 50 real shop drawings through a prototype; measure field-level accuracy and estimator-correction rate.
2. **Assumption:** Sub-20-employee shops will pay $149–299/mo self-serve without a sales call. **How to test:** 30 cold "free demo on your drawing" outreaches; track demo→paid conversion and price objections.
3. **Assumption:** Quote *speed* (not just accuracy) is what wins these shops the job. **How to test:** interview 15 owners on recent lost bids — was it price, capacity, or response time?
4. **Assumption:** The intake-reading time saved (30–90 min/quote) is the felt pain, vs. the pricing math. **How to test:** time-and-motion ask in the same 15 interviews.

### Risk flags

1. **Competitive (well-funded):** Uptool ($6M seed) or Paperless could ship a cheap, self-serve, 2D-PDF down-market tier and erase the wedge. Defensibility is thin — speed and a loyal niche are the only protection.
2. **Adoption friction:** This buyer is offline-leaning, skeptical of software, and burned by ERP rollouts. Self-serve may stall; may need higher-touch onboarding that hurts the unit economics.
3. **Accuracy/trust:** One badly-read drawing that produces a money-losing quote and the estimator never trusts it again. The confidence-flag UX has to be excellent, not bolted on.

## 14. Structured verdict

```
Score:                  74/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder (vision/LLM) + fab-shop domain advisor
Time to revenue:        6–10 weeks (free done-for-you demo → self-serve plan)
Capital to launch:      $15–30K (inference + 3–4 months build)
Top 3 assumptions to validate first:
  1. Extraction accuracy on real degraded 2D prints — 50-drawing prototype test, measure correction rate
  2. $149–299/mo self-serve willingness — 30 cold "free demo" outreaches, track demo→paid
  3. Speed-wins-the-job thesis — 15 owner interviews on recent lost bids
Kill criteria:
  - Abandon if estimators correct >30% of extracted fields on real drawings (trust never forms)
  - Abandon if <5% of 100 done-for-you demos convert to a paid plan after 60 days
  - Abandon if Uptool/Paperless ships a self-serve sub-$300/mo 2D-PDF tier before your v1
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Collect 40–50 real RFQ drawings (scrape sample prints, ask 5 friendly shops, use public 2D fab drawings). Run them through an off-the-shelf vision model with a quoting-extraction prompt. Score field-level accuracy by hand.
- **Day 3–4:** Cold-email 30 sub-20-employee fab shops from ThomasNet: "Send me one RFQ PDF, I'll send back a finished draft quote in 10 minutes, free." Do them by hand. Count replies and reactions to the output.
- **Day 5:** Decide go / no-go on a falsifiable bar: **≥70% field-level extraction accuracy on real drawings AND ≥5 of 30 shops say "I'd pay for this" unprompted after seeing their own drawing quoted.** Below either bar, the wedge isn't ready.
