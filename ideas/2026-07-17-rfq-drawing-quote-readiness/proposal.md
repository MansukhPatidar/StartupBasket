---
title: "ShopLens — RFQ grader for hardware buyers"
slug: rfq-drawing-quote-readiness
date: 2026-07-17
category: TradeTech / Global — Hardware Startups & Small-OEM Buyers Sending Machining and Fabrication RFQs
complexity: Medium
score: 69
verdict: VALIDATE
confidence: Medium
oneLiner: "Reads your drawing like a skeptical estimator — flags what blocks the quote and what quietly inflates it."
tags:
  vertical: TradeTech
  model: SaaS
  geography: Global
  secondary: [AI-agent, SMB, Solo-builder, Manufacturing, Hardware-startups, Procurement]
axes:
  problem: 15
  demand: 10
  build: 12
  distribution: 11
  revenue: 9
  time: 8
  defensibility: 4
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# ShopLens

## 1. One-liner

Reads your drawing like a skeptical estimator — flags what blocks the quote and what quietly inflates it.

## 2. Trend signal — why now?

Machine shops are so tired of unquotable RFQs that they've started publicly ranting about it. Practical Machinist — the largest machining forum on the internet — published "Stop Sending RFQs Like This — Here's Why Shops Won't Quote It" (December 2025), a whole article-plus-video aimed at the *buyers* sending garbage packages. When the supply side spends its marketing budget begging the demand side to fix its inputs, there's a product sitting between them.

The numbers behind the rant are documented and ugly:

- Incomplete RFQs add **3–5 business days of clarification ping-pong** before a price comes back, and when material grades or tolerances are ambiguous, shops price assuming the **most difficult scenario** to protect their margin (YISHANG, RapidDirect RFQ guides).
- Over-tolerancing is called the **#1 driver of unnecessary CNC cost** — tightening from 0.030″ rough tolerance to 0.005″ roughly **doubles** the part price, 0.001″ is **4×**, and 0.0001″ is **24×** (Tormach, Modus Advanced analysis). Shops like Summit CNC and Focused on Machining write entire blog series pleading with engineers to stop doing this.
- Three shops quoting the same ambiguous drawing silently interpret it three different ways — one assumes commercial tolerances, one prices tighter inspection, one swaps a cheaper finish — so the buyer's quote comparison is fiction (YISHANG on GD&T ambiguity).

The feasibility unlock is fresh: multimodal models can now genuinely read 2D engineering drawings. Werk24 extracts PMI, GD&T, tolerances, and threads from a drawing PDF into structured JSON in 5–20 seconds and sells it as an API from €0.95/page. CoLab shipped AutoReview, an AI drawing checker, and reports 90% of engineering leaders believe AI will outperform a human drawing checker within 18 months. Reading the drawing was the hard part for thirty years. It just stopped being hard.

Everyone monetizing this new capability sells to the **shop** (Werk24's RFQ-feasibility triage, Paperless Parts quoting) or to the **enterprise design team** (CoLab, Leo AI, sales-led, PLM-integrated). Nobody sells the buyer a $99 "will this get quoted, and what will it cost me" check before the RFQ goes out.

Provenance:
  - Signal 1: Practical Machinist publishes "Stop Sending RFQs Like This — Here's Why Shops Won't Quote It" — shops publicly campaigning against bad buyer RFQ packages — https://www.practicalmachinist.com/stop-sending-rfqs-like-this-heres-why-shops-wont-quote-it/ — December 2025
  - Signal 2: Werk24 commercially extracts GD&T/tolerances/PMI from drawing PDFs in 5–20s via API from €0.95/page — the machine-reading of drawings is now a solved, priced commodity — https://werk24.io/pricing — observed July 2026
  - Signal 3: Documented cost mechanics — 3–5 day quote delays from incomplete RFQs, worst-case pricing on ambiguity, 2×–24× cost multipliers from over-tolerancing ("the #1 driver of unnecessary CNC cost") — https://tormach.com/articles/high-cost-tight-tolerances, https://zsyishang.com/gdt-sheet-metal-rfq-quotes/, https://summitcnc.com/blog/the-problem-with-unnecessarily-tight-tolerances-and-how-we-can-help — 2025–2026
  - Signal 4 (economic): CoLab (AutoReview), Leo AI, Paperless Parts, Werk24 all funded/growing on drawing-intelligence — money is pouring into every layer except the buyer's pre-send layer — https://www.colabsoftware.com/product/ai-drawing-reviews — 2025–2026
  Category: Tech-unlock

## 3. The opportunity

The RFQ package — a STEP file plus a 2D PDF drawing — is the single document that determines whether a hardware buyer gets a fast, honest quote or a slow, padded one. And it's produced by the person *least* equipped to judge it: a design engineer at a hardware startup or a buyer at a small OEM, neither of whom has ever stood at an estimator's desk.

The incumbents attack every side of this transaction except the buyer's:

- **Xometry/Protolabs/Fictiv** solve it by removing the shop relationship entirely — upload, get instant price. You pay a platform premium and lose the local shop that's 30% cheaper at quantity.
- **Paperless Parts / Werk24** arm the *shop* to triage and quote bad packages faster.
- **CoLab / Leo AI** sell drawing QA to enterprise engineering orgs at enterprise price points, integrated into PLM, bought through sales cycles.

The gap: a self-serve tool where the buyer drops in their package before sending and gets back the skeptical estimator's read — "no material spec, thread callout ambiguous on sheet 2, that ±0.0005 bore tolerance is why your part will cost 4× what you think, and here's the redlined drawing + RFQ cover sheet that fixes it." The buyer captures the saving directly: faster quotes, tighter apples-to-apples comparisons, and parts that stop being accidentally expensive.

## 4. Target market

- **Primary customer:** Two adjacent profiles. (a) Mechanical/NPI engineers at hardware startups and product companies (5–200 employees, US/EU) who outsource CNC machining, sheet metal, and fabrication without an in-house manufacturing engineer. (b) Buyers/sourcing leads at small OEMs and contract-engineering firms who push out RFQ packets weekly.
- **Why they buy:** "The quote took two weeks and came back triple my budget, and I didn't know why." Every clarification email is schedule slip; every ambiguity is margin padding they pay for; every over-tight tolerance is invisible cost they authored themselves.
- **Rough TAM reasoning:** The US alone has ~250k manufacturing establishments; hardware startups, product design consultancies, and small OEM engineering teams that regularly buy custom parts plausibly number 50–100k buying organizations in US+EU. At $1,200–2,400/yr, a 1–2% slice is a $1.5–4M ARR business — exactly the target band.
- **Why now for them:** Reshoring and tariff churn are forcing buyers to requote across more shops and geographies than before, multiplying RFQ volume; meanwhile instant-quote platforms trained them to expect fast answers, making the 2-week traditional-shop quote loop feel broken.

## 5. Product sketch (MVP)

- Upload a STEP file + PDF drawing (or drawing alone) — get a **quote-readiness grade** in under two minutes
- **Blockers list:** missing material spec, missing finish, no quantity/lead-time, undimensioned features, missing title-block info — the exact things that make a shop no-quote or sit on it
- **Ambiguity list:** callouts a shop could read two ways, conflicts between model and drawing, GD&T that doesn't parse — each one a padded-quote risk
- **Cost-driver flags:** tolerances tighter than the feature's function plausibly needs, flagged with the documented cost-multiplier band ("this callout moves you from standard to precision — typically 2–4× on this feature")
- **Fix pack:** a redlined drawing PDF with suggested edits, plus a generated one-page RFQ cover sheet (quantities, material, finish, inspection level, delivery) shops actually want
- **Compare mode:** paste the 2–3 quotes that come back, and it maps each shop's stated assumptions against your package so you compare like-for-like
- Per-package pricing for occasional users; monthly plan for buyers with weekly RFQ flow

## 6. AI angle — what's load-bearing

The entire product is a multimodal model reading an unstructured 2D drawing — extracting dimensions, tolerances, GD&T, notes, and title-block fields — and reasoning about them against machining/fabrication cost rules. Pre-2024, this required a human manufacturing engineer at $150/hr; that's why the buyer-side product never existed. Remove the AI and there is no product — you're left with a static RFQ checklist, which is what the shops' blogs already give away free. The AI is the difference between "here's a checklist, good luck" and "on *your* drawing, sheet 2, this bore callout is the problem."

## 7. Localization angle (if any)

N/A — this is a global play. Engineering drawings follow ISO/ASME conventions worldwide; the product works identically for a Berlin hardware startup and an Austin one. The only localization is drawing-standard dialects (ASME Y14.5 vs ISO GPS), which is a product-depth feature, not a go-to-market wedge.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** $29/package one-off (startups, episodic); $99/mo Starter (10 packages); $249/mo Team (unlimited, compare mode, shared library of past packages)
- **ACV:** blended ~$1,400/yr across tiers, weighted toward $99–249 subscribers
- **Rough math to $1M ARR:** ~600 paying accounts at $1,400 blended ACV = $840K, plus one-off package revenue → ~$1M. 600 accounts from a 50–100k-org pool is 0.6–1.2% penetration.
- **Rough math to $5M ARR:** ~2,500 subscribing accounts plus an agency/consultancy tier (product-design firms running client RFQs through it, $499+/mo) and an API for procurement tools. Needs the compare-mode data loop working and ASME+ISO depth.
- **Expansion path:** per-seat growth inside OEM sourcing teams; add fabrication processes (sheet metal → castings → injection molding, where DFM stakes are 10× higher because tooling is committed); quote-comparison history becomes the retention hook.

## 9. Go-to-market wedge — first 100 customers

1. **Grade-my-RFQ teardowns in public.** Take anonymized/volunteered drawings from r/hwstartups, r/MechanicalEngineering, r/machinists (2.9M combined members) and publish before/after teardowns: "this package got no-quoted; here's the 6-line fix and the price delta." Machinists will amplify it — it's their favorite rant, productized. First 500 signups come from this.
2. **Hardware accelerator pipeline.** HAX, Lemnos-descendant programs, university hardware incubators — every cohort company sends its first RFQ within months. Offer the tool free to cohorts, convert alumni companies to paid. ~30 programs × 10 companies/yr = a permanent stream of first-RFQ buyers.
3. **Shop referral flip.** Shops hate bad packages but won't pay to fix them — so give 200 job shops a free "send this to your customer" link that grades the customer's package. The shop saves estimating time; the buyer becomes the paying user. Cold-email the shops that already blog about bad RFQs (Summit CNC, Focused on Machining tier — there are hundreds).
4. **Product-design consultancies.** Scrape the ~1,500 US/EU industrial-design and mechanical-engineering consultancies (Dribbble/Clutch/IDSA directories); they send client RFQs weekly and bill the hours — a personalized Loom grading one of their public case-study parts, expect 3–5% to trial.

## 10. Build complexity — justification

Medium. Drawing parsing rides on multimodal LLMs (with Werk24's API at €0.95/page as a fallback/benchmark); the cost-rules corpus comes from published machining-cost literature and shop DFM guides; output is a report + redlined PDF — standard web stack around it. No CAM, no geometry kernel beyond STEP feature extraction (off-the-shelf libraries exist). The honest work is accuracy tuning against real drawings and building the eval set — 10–12 weeks for a technical pair, with the eval corpus being the long pole.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Advisory tool; no export-controlled data retention (ITAR handling = clear "don't upload" policy at MVP, on-prem later) |
| Ethical — no harm / dark patterns | ✅ | Saves buyers money; saves shops wasted estimating time |
| Market exists (evidence above) | ✅ | Documented delays, padding, cost multipliers; funded adjacent layers |
| 1–5 person team can build this | ✅ | LLM + rules corpus + web app |
| Launchable with <$50K / ₹40L | ✅ | Inference + eval corpus are the only real costs |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 15/20 | Real and expensive when it bites — but episodic for startups (per milestone, not daily). Weekly-frequency pain lives with OEM buyers, a harder-to-reach persona. |
| Demand evidence | 15 | 10/15 | Strong indirect evidence (shop rants, documented delay/cost data, funded adjacent tools). Zero direct evidence buyers will pay for a *pre-send check* — no incumbent to benchmark WTP against. That's the whole validation question. |
| Build feasibility | 15 | 12/15 | Extraction is proven (Werk24); the risk is accuracy on messy real-world drawings and the cost-rules layer. 10–12 weeks for a capable pair, but the eval corpus takes discipline. |
| Distribution clarity | 15 | 11/15 | Named communities, named accelerator list, scrapeable consultancy directories, and a clever shop-referral flip. Conversion math untested; engineers do self-serve well. |
| Revenue mechanics | 15 | 9/15 | Blended ACV plausible vs. CAD-seat and consultant anchors, but episodic use = churn risk on the startup segment; the durable revenue needs OEM buyer teams, which slows the motion. |
| Time to first revenue | 10 | 8/10 | Self-serve, per-package pricing, card swipe. First dollars within weeks of a public teardown thread landing. |
| Defensibility | 10 | 4/10 | Execution moat only at month 3. At month 12: proprietary eval corpus + graded-package→actual-quote outcome data. CoLab could ship a lite tier; Xometry could give this away to feed its platform. |
| **Total** | **100** | **69/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required` — you need someone who has actually sent (or received) machining RFQs, or the cost-driver flags will be confidently wrong, and machinists will destroy the product publicly the same way they rant about bad drawings.

### Key assumptions to validate (3–5)

1. **Assumption:** Buyers will pay pre-send, rather than just eating the ping-pong. **How to test:** Post 5 public RFQ teardowns with a "$29 — grade mine" link; measure paid conversion against thread traffic. ≥1% of engaged readers paying = real.
2. **Assumption:** LLM extraction is accurate enough on messy real drawings that flags are trusted. **How to test:** Build a 100-drawing eval set from volunteered packages; require ≥90% precision on blocker detection before charging (false blockers kill trust instantly).
3. **Assumption:** Cost-driver flags change behavior (buyers loosen tolerances). **How to test:** In pilot, track whether flagged callouts get edited before send, and collect before/after quote deltas from 10 pilot users.
4. **Assumption:** OEM buyer teams (the weekly-frequency segment) can be reached without a sales team. **How to test:** 200 cold emails to sourcing leads at small OEMs with a Loom grading a public drawing; ≥5% demo-rate = self-serve-plus-touch works.

### Risk flags

1. **[Adjacent-giant risk]:** Xometry/Protolabs could ship a free version to funnel uploads into their platforms — for them it's lead gen, for you it's the product. Mitigation: position around *shop-agnostic* buying (their instant quote is the expensive path this tool helps you avoid), and go deep on compare mode, which conflicts with their model.
2. **[Trust/accuracy risk]:** One confidently-wrong tolerance flag in front of an experienced ME and the tool is branded a toy. The eval corpus isn't optional infrastructure; it *is* the product.
3. **[Segment-frequency mismatch]:** The easy-to-reach segment (startups) uses it episodically; the recurring-revenue segment (OEM buyers) is quieter and less community-reachable. Revenue mix may skew one-off longer than a subscription business wants.
4. **[Data-sensitivity friction]:** Drawings are IP; some buyers (and anything defense-adjacent/ITAR) won't upload to a startup's cloud. Costs some of the best-paying market until an on-prem/enterprise tier exists.

## 14. Structured verdict

```
Score:                  69/100
Verdict:                VALIDATE
Confidence:             Medium
Best-fit builder:       Technical founder with real machining/RFQ scar tissue
                        (ex-hardware-startup ME, or ex-job-shop estimator)
Time to revenue:        8–12 weeks
Capital to launch:      $10–20K (inference, eval-corpus bounties, hosting)
Top 3 assumptions to validate first:
  1. Pre-send WTP — 5 public teardowns + $29 link; ≥1% engaged-reader conversion
  2. Extraction accuracy — 100-drawing eval set; ≥90% blocker precision before charging
  3. OEM reachability — 200 cold Looms to sourcing leads; ≥5% demo rate
Kill criteria:
  - Abandon if <1% of engaged teardown readers convert to a paid grade after 5 posts
  - Abandon if blocker-detection precision plateaus below 85% after 6 weeks of eval tuning
  - Abandon if Xometry/Protolabs ships a free equivalent before your v1 lands
```

## 15. Next step — 1-week validation sprint

- Day 1–2: Collect 20 real RFQ packages (r/hwstartups volunteers, own network, publicly posted drawings). Hand-grade them with a hired job-shop estimator (4 hours of their time, ~$300) to build ground truth. Run the same 20 through a prototype prompt chain; measure agreement.
- Day 3–4: Publish 3 teardowns ("this package would get no-quoted — here's why, and here's the fix") on r/hwstartups + Practical Machinist + LinkedIn, each ending with a "$29 — grade my RFQ (manual, 24h turnaround)" Stripe link. Manual fulfillment — no product needed yet.
- Day 5: Decide go / no-go on two numbers: prototype-vs-estimator agreement ≥80% on blockers, and ≥5 paid manual grades from the teardown traffic. Both hit → build. Either misses → the pain is real but the wedge isn't; revisit shop-side referral flip as the entry instead.
