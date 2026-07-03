---
title: "QuoteQuill — RFQ-drawing prefiller for small job shops"
slug: machine-shop-quote-prefill
date: 2026-07-04
category: TradeTech / Global — Small CNC & Fabrication Job Shops
complexity: Medium
score: 74
verdict: GO
confidence: Medium
oneLiner: "Reads the 2D PDF drawing that just landed in your inbox and drafts a priced quote sheet in two minutes."
tags:
  vertical: TradeTech
  model: SaaS
  geography: Global
  secondary: [SMB, AI-powered, Solo-builder]
axes:
  problem: 16
  demand: 12
  build: 11
  distribution: 11
  revenue: 12
  time: 7
  defensibility: 5
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# QuoteQuill

## 1. One-liner

Reads the 2D PDF drawing that just landed in your inbox and drafts a priced quote sheet in two minutes.

## 2. Trend signal — why now?

Two things collided in the last 12 months. First, the money: shops that quote inside two hours win ~90% of jobs; shops that take five-plus days win under 5% — and most small shops still take 3–5 business days ([Modern Machine Shop](https://www.mmsonline.com/articles/when-it-comes-to-rfq-response-time-is-money)). Speed-to-quote is now the single most direct lever on revenue, and the bottleneck isn't pricing judgment — it's the 60–120 minutes of manual reading and data entry per RFQ before an estimator can even start ([Mavlon](https://mavlon.co/post/ai-rfq-parsing-for-manufacturing), [CADDi](https://us.caddi.com/resources/insights/streamline-rfq-with-drawing-data)).

Second, the unlock: vision-language models crossed the usable line for reading dense 2D engineering drawings this year. Fine-tuned open VLMs (Florence-2) and frontier models now parse feature control frames, dimensions, GD&T, material callouts and title blocks out of messy PDFs — a task that was research-grade 18 months ago ([arXiv 2411.03707](https://arxiv.org/abs/2411.03707); [2026 GD&T market report](https://www.energent.ai/energent/compare/en/ai-solution-for-gdt)). AI RFQ parsing is documented cutting the 120-minute manual read to ~10 minutes of review.

The incumbents proved the wallet but aimed at the wrong shop: Paperless Parts raised $51M and explicitly targets shops "where quoting is a full-time job" — mid-size and up ([Tracxn](https://tracxn.com/d/companies/paperless-parts/__kTremmc3tJVLvxszjo_NxkZaZdSl8XfoMF8_APjQQXA)). The small shop under $2M revenue gets quoted custom enterprise pricing and walks.

```
Provenance:
  - Signal 1 (demand): Quote-in-2hr = 90% win rate vs <5% at 5+ days; small shops still take 3–5 days — Modern Machine Shop / Paperless Parts — https://www.mmsonline.com/articles/when-it-comes-to-rfq-response-time-is-money — 2026-07-04
  - Signal 2 (feasibility): VLMs now extract dimensions/GD&T from 2D PDF drawings; manual 120-min read → ~10-min review — arXiv 2411.03707 + Mavlon/CADDi — https://mavlon.co/post/ai-rfq-parsing-for-manufacturing — 2026-07-04
  - Signal 3 (economic): Paperless Parts $51M raised targeting full-time-quoting shops; DigiFabster from $49/mo; CADDi/Machine Research funded — leaving the sub-$2M shop underserved — Tracxn/DigiFabster — https://tracxn.com/d/companies/paperless-parts/__kTremmc3tJVLvxszjo_NxkZaZdSl8XfoMF8_APjQQXA — 2026-07-04
  Category: Tech-unlock
```

## 3. The opportunity

The whole quoting-software category has one shared assumption baked in: **a clean 3D CAD file exists.** Paperless Parts, DigiFabster, Phasio, Machine Research — all of them want a STEP/STL upload, usually through a self-serve portal your customer operates.

That's not how the small job shop lives. The RFQ arrives as a **2D PDF drawing** — often a scan, a screenshot, or a photo of a print — attached to an email or dropped in a text thread. There is no 3D model. So the estimator opens the PDF and manually retypes 30–50 data points into a spreadsheet: every dimension, tolerance, GD&T callout, material spec, finish, and the quantity breaks. *Then* they price it. The pricing is the part they're good at and don't want automated — the transcription is the part that eats their afternoon and delays the quote past the win window.

Every incumbent skips this step by demanding a 3D file the small shop's customers don't send. QuoteQuill starts exactly where the pain is: **PDF in, structured and pre-priced quote sheet out, human reviews and sends.** We are not an auto-quoter (machinists rightly distrust those — "ten machinists, eleven approaches"). We are the estimator's assistant that kills the data-entry hour.

## 4. Target market

- **Primary customer:** Owner or lead estimator at a CNC machining, sheet-metal, or weld/fabrication job shop doing roughly $300K–$3M/yr, 2–20 employees, no dedicated full-time estimator. US, UK, EU, ANZ English-first to start.
- **Why they buy:** "I lost a job again because I couldn't get the quote out for three days." "Quoting eats my evenings — I'm reading prints and typing into Excel instead of running the shop." They already believe slow quoting costs them work; they just can't afford a $15K/yr enterprise seat or a self-serve portal their customers won't use.
- **Rough TAM reasoning:** The US alone has tens of thousands of small machine/fab shops (US Census reports ~20K+ machine-shop establishments; add sheet metal, weld, and the international English-speaking markets). Even 3,000 paying shops at $150/mo is a $5.4M ARR business. The segment is deliberately below VC-incumbent focus.
- **Why now for them:** The win-rate-vs-speed data has been hammered into the trade press for two years; owners feel the loss. And the tool that reads *their* PDFs (not a 3D file they don't have) only became buildable in 2026.

## 5. Product sketch (MVP)

- Drop a 2D PDF drawing (or forward the RFQ email) → QuoteQuill extracts part number, revision, material, finish, every dimension, tolerance band, and GD&T callout into a structured, reviewable table.
- Flags what it's unsure about (low-confidence dims, ambiguous tolerances, unreadable regions) in yellow so the estimator checks *those* instead of re-reading the whole print.
- Pulls quantity breaks and due date from the drawing/email body.
- Applies the shop's own rate card and stored logic (material $/lb, machine hourly rates, setup minutes, margin) to produce a draft price — the estimator adjusts, not builds from zero.
- One-click export to a branded PDF quote and a line in the shop's quote log (CSV/Sheets/email).
- Remembers "last time you quoted this exact part/customer" and surfaces the prior number.
- Batch mode: forward five drawings, get five draft quotes queued for review.

## 6. AI angle — what's load-bearing

The entire product is the VLM reading a messy 2D engineering drawing and returning structured, spatially-correct data — dimensions tied to features, GD&T frames parsed into characteristic/tolerance/datum, title-block fields, material callouts. Remove the AI and you're back to an estimator typing 40 fields off a scanned PDF, which is precisely the hour we exist to delete. This is not a chatbot bolted onto a form; the extraction *is* the value. Pricing logic is deterministic rules on top — the load-bearing magic is turning an image of a print into review-ready data.

## 7. Localization angle (if any)

N/A for v1 — global English-first play. The drawing is a near-universal visual language (ISO/ASME symbols), so the extraction generalizes across geographies. India/SEA is a real v2 expansion (huge MSME job-shop base receiving drawings on WhatsApp — a natural intake channel), but the willingness-to-pay and cleaner English-title-block drawings make US/UK/EU/ANZ the right beachhead. Localization is upside, not the wedge.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** $99/mo (Solo, ~50 drawings/mo) · $199/mo (Shop, ~200 drawings + rate-card logic + branded quotes) · $349/mo (Team, multi-seat, batch, quote log). Undercuts every enterprise incumbent by an order of magnitude; sits just above DigiFabster's $49 entry with a fundamentally different (PDF-in, not portal) value prop.
- **ACV:** ~$2,000–$2,400/yr blended.
- **Rough math to $1M ARR:** ~450 shops × $185/mo × 12 ≈ $1.0M.
- **Rough math to $5M ARR:** ~2,100 shops at the same blend, or ~1,400 shops with per-seat expansion pushing ACV toward $3,600. Reachable within the US+UK+EU+ANZ small-shop base without needing enterprise.
- **Expansion path:** seats as the shop grows an estimating team; usage tiers on drawing volume; add-ons — auto-DFM flags, "requote at new material price," and eventually a lightweight 2D→cost-history search. Land at $99, grow to $349+.

## 9. Go-to-market wedge — first 100 customers

- **Trade-forum ground game:** Practical Machinist, r/Machinists, r/CNC and the Xometry/shop Facebook groups are where these owners vent about quoting daily. Post a genuinely useful "drop-your-worst-scanned-drawing, I'll extract it live" thread; convert the reactions. The quoting-pain threads already exist and get engagement.
- **Cold, personalized proof:** scrape shop listings from IndiaMART-equivalents in the West (Thomasnet, MFG.com supplier lists, Google Maps "machine shop" in industrial ZIPs). Send each a 30-second Loom: *their* actual capability drawing (public FAI/sample) extracted and quoted by QuoteQuill. "This took us 90 seconds; how long does it take you?" Target 2,000 sends → 3–5% reply.
- **Riding the win-rate fear:** short LinkedIn/YouTube clips reproducing the "2hr = 90% win, 5 days = 5%" stat, then showing the tool collapsing the read time. The stat does the persuading; we show the fix.
- **Distributor/reseller nudge (later):** tooling and material reps already sit inside these shops weekly — a referral kickback turns the salesforce we don't have into one that exists.

## 10. Build complexity — justification

Medium. The extraction runs on off-the-shelf frontier VLMs plus a thin fine-tune/prompt harness for GD&T frames and title blocks; the rate-card pricing and quote export are standard web-app work. The hard part is accuracy on genuinely messy scans and a review UX that machinists trust — that's engineering discipline and domain iteration, not a research breakthrough. A technical founder with a machining advisor ships a credible v1 in ~3–4 months.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | No regulated data; customer's own drawings. |
| Ethical — no harm / dark patterns | ✅ | Assistive, human-in-the-loop; we don't hide low-confidence extractions. |
| Market exists (evidence above) | ✅ | Documented win-rate pain, funded incumbents, active forum complaints. |
| 1–5 person team can build this | ✅ | Off-the-shelf VLM + standard web stack. |
| Launchable with <$50K / ₹40L | ✅ | Inference + hosting + outreach; no capex. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | Real, recurring, money-losing — slow quotes lose jobs weekly. Just short of hair-on-fire because shops have a (painful) workaround. |
| Demand evidence | 15 | 12/15 | Hard win-rate stats, multiple funded incumbents, active forum threads. Direct signal for the *2D-PDF* cut specifically is inferred, not yet interviewed. |
| Build feasibility | 15 | 11/15 | VLM extraction is off-the-shelf; trust-grade accuracy on messy scans is the real work. |
| Distribution clarity | 15 | 11/15 | Named forums + scrapeable directories + a demo that sells itself; conversion math still unproven. |
| Revenue mechanics | 15 | 12/15 | Clean pricing benchmarked below incumbents; ACV realistic; churn risk if accuracy disappoints. |
| Time to first revenue | 10 | 7/10 | 3–4 month build, then fast trial-to-paid once a shop feels the time saved. |
| Defensibility | 10 | 5/10 | Execution + accumulating shop-specific rate/quote data + niche brand. Copyable by a funded incumbent who decides to serve small shops. |
| **Total** | **100** | **74/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required`

### Key assumptions to validate (3–5)

1. **Assumption:** Small shops' real pain is the *data-entry transcription*, not the pricing judgment. **How to test:** 25 shop-owner interviews — time-and-motion on their last 5 RFQs; measure minutes spent transcribing vs pricing.
2. **Assumption:** VLM extraction hits trust-grade accuracy on *their actual scanned/photo drawings* (not clean CAD exports). **How to test:** collect 100 real customer drawings, benchmark extraction accuracy, target ≥95% on dims and correct flagging of the rest.
3. **Assumption:** Shops will pay $150–$350/mo for an assistant (not auto-quoter). **How to test:** pre-sell 10 annual pilots off the Loom demo before full build.
4. **Assumption:** "Human reviews the draft" framing overcomes the auto-quoter distrust seen on the forums. **How to test:** A/B the demo messaging ("assistant" vs "instant quote") and measure reply rate.

### Risk flags

1. **Accuracy/trust risk:** One garbage extraction on a real quote and the estimator stops trusting it. The low-confidence flagging UX is existential, not a nice-to-have.
2. **Incumbent-descends risk:** Paperless Parts or Machine Research could add a "PDF-in for small shops" tier and outspend us. Our head start is focus and price, not a hard moat.
3. **Segment-reach risk:** Small shops are cheap, distributed, and skeptical of software — CAC could run high relative to a $150/mo ACV if the demo doesn't do the selling.

## 14. Structured verdict

```
Score:                  74/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder + a machinist/estimator advisor for the trust UX
Time to revenue:        3–4 months to v1, first paid pilots pre-sellable in weeks
Capital to launch:      $8–15K (inference credits, hosting, outreach)
Top 3 assumptions to validate first:
  1. Transcription (not pricing) is the pain — 25 time-and-motion interviews
  2. ≥95% extraction accuracy on real scanned/photo drawings — 100-drawing benchmark
  3. $150–$350/mo WTP as an assistant — 10 pre-sold annual pilots off a Loom
Kill criteria:
  - Abandon if extraction accuracy stays <90% on real customer drawings after 3 months of iteration
  - Abandon if <5% of 500 personalized-Loom cold sends reply / book a call
  - Abandon if a funded incumbent ships an equivalent small-shop PDF tier before your v1
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Collect 40–60 real 2D RFQ drawings — DM shop owners on Practical Machinist / r/Machinists, pull public FAI and sample prints. Run them through a frontier VLM with a purpose-built extraction prompt; hand-score accuracy on dimensions, GD&T, material, and correct low-confidence flagging.
- **Day 3–4:** Record 10 personalized Loom demos using shops' own drawings; send to 200 scraped small-shop contacts. Track opens, replies, and "how long does this take you today?" answers.
- **Day 5:** Decide. **Go** if extraction clears ~90% on messy real drawings AND ≥5% of sends reply with genuine interest (a booked call or a "what's the price"). Falsifiable: bad accuracy or dead outreach kills it — this is not "people nodded politely."
