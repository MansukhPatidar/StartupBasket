---
title: "BidSift — RFQ triage desk for small machine shops"
slug: machine-shop-rfq-triage
date: 2026-05-22
category: WorkflowAutomation / US Small Contract Machine Shops
complexity: Medium
score: 74
verdict: GO
confidence: Medium
oneLiner: "Forward an RFQ email and BidSift reads the drawing, then tells you in five minutes whether the job is worth quoting."
tags:
  vertical: TradeTech
  model: SaaS
  geography: US
  secondary: [Workflow-automation, AI-agent, SMB, Email-first]
axes:
  problem: 15
  demand: 12
  build: 11
  distribution: 12
  revenue: 11
  time: 8
  defensibility: 5
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# BidSift — RFQ triage desk for small machine shops

## 1. One-liner

Forward an RFQ email and BidSift reads the drawing, then tells you in five minutes whether the job is worth quoting.

## 2. Trend signal — why now?

Three things landed at once.

**The pain is loud and old.** Practical Machinist — the largest machining forum on the web — has years of threads with titles like "Overwhelming RFQ Backlog," "Quoting work — how do you do it?" and "What percentage of quotes do you win?" Owners say the same thing every time: quoting eats the knowledgeable person's day, and most quotes lose. Modern Machine Shop ran the numbers on a real shop (Advance CNC Machining): good-fit RFQs convert at 40–50%, a bad-fit class of RFQs convert at **4%**. Filtering out the bad class cut RFQ processing 20% *with no drop in orders won*. That is a documented, quantified result — the exact value BidSift sells.

**The tech to read a drawing got good in 2025.** Reading a 2D mechanical print — dimensions, GD&T, tolerances, title block, material callouts — used to be a research problem. In 2025 it stopped being one. Werk24's drawing-extraction API reports >95% accuracy on PMI extraction; published fine-tuned vision-language parsers hit 94.77% precision on GD&T and 97%+ F1 on dimensions. Vision-LLM inference is now cheap enough to read every drawing in an inbox, not just the ones you've already decided to quote.

**Money is moving into manufacturing quoting.** The quote-management market is pegged at $3.28B in 2025 heading to $7.11B by 2034 (~9% CAGR), and 69% of manufacturers say they're increasing CPQ spend. The well-funded incumbent here — Paperless Parts — is an ITAR-grade estimating platform sold into aerospace and defense at four-figure-a-month pricing. They are chasing estimating ACV, not the 3-person shop's triage problem.

Provenance:
  - Signal 1: Machine-shop owners describe drowning in RFQs; documented 40–50% vs 4% win-rate split by RFQ class, filtering cut processing 20% with no lost orders — https://www.mmsonline.com/articles/not-every-rfq-needs-your-attention — 2026-05-22 (article evergreen)
  - Signal 2: AI extraction of dimensions/tolerances/GD&T from 2D PDF drawings crossed ~95% accuracy in 2025 (Werk24; fine-tuned vision-language parsers) — https://werk24.io/ and https://arxiv.org/abs/2505.01530 — 2025-05
  - Signal 3: Quote-management market $3.28B→$7.11B by 2034; 69% of manufacturers increasing CPQ investment — https://www.manufacturingtomorrow.com/story/2025/04/adapting-to-change-how-cpq-software-is-shaping-the-future-of-custom-manufacturing-/24773 — 2025-04
  Category: Tech-unlock

## 3. The opportunity

The opportunity is the *decision before the quote*, not the quote itself.

Every estimating tool on the market — Paperless Parts, ProShop, Prodsmart, MachineResearch — assumes you've already decided to bid. They make the quote faster once you commit. But for a small job shop, the expensive part is the commitment: a real RFQ takes 20–60 minutes of the owner's attention just to read the print, check capability fit, and gut-feel whether it's winnable and profitable. With 10–40 RFQs landing per week, that's the owner's whole evening. So shops do the rational thing — they ignore RFQs, no-quote by default, and occasionally torch a great job because it arrived on a busy Tuesday.

BidSift attacks that. It reads the drawing the moment the RFQ lands, scores it against the shop's machine list and its own history of which customers and job types actually paid off, and returns a **bid / no-bid / maybe** call with a one-paragraph reason — before the owner has opened the email. Paperless Parts won't build this: it would cannibalize their estimating story and the 3-person shop is the wrong wallet for their sales motion. That gap — triage-first, priced for a shop that currently pays $0 for triage — is the wedge.

## 4. Target market

- **Primary customer:** Owner or owner-estimator at a US contract machine shop, 3–20 employees, $500K–$5M revenue. CNC milling and turning job shops. In these shops the owner usually *is* the estimator — there is no quoting department to sell to.
- **Why they buy:** In their words, from the forums — quoting is "a huge waste of time if the bid is not awarded"; RFQ backlog is "overwhelming"; they want to "respond to the good opportunities more quickly." They are not asking for a better quote. They are asking to stop spending the evening on quotes that never convert.
- **Rough TAM reasoning:** IBISWorld counts ~16,600 machine-shop-services businesses in the US; broader directories count 30,000+, ~95% single-owner/small. Even the conservative figure, at a $149/mo tool, is a ~$30M/year addressable line if you reach a third of them. Plenty for a sub-$5M ARR target; far too small to interest a CPQ incumbent.
- **Why now for them:** Reshoring and tariff churn have pushed *more* RFQ volume at small shops while the machinist shortage means there's no one to throw at quoting. The owner is more time-starved in 2026 than in 2022, and the volume went up, not down.

## 5. Product sketch (MVP)

- **Forward-to-triage inbox.** Shop gets a dedicated BidSift email address; they forward (or auto-forward) RFQ emails to it. No portal to live in.
- **Drawing read.** BidSift opens the attached PDF/STEP drawing and extracts part dimensions, tolerances, GD&T, material, finish, and quantity — including scanned and rotated prints.
- **Capability match.** One-time setup: the shop enters its machine list, max envelope, materials it runs, processes it does and doesn't (e.g. no wire EDM, no anodizing). BidSift flags any spec the shop can't physically do.
- **Bid score.** A bid / no-bid / maybe verdict with a plain-English reason, scored on capability fit, quantity vs. the shop's minimum-viable run, tolerance difficulty, and customer history.
- **Customer memory.** Learns from the shop's own outcomes — which customers send winnable, profitable, on-time-paying work — and weights future RFQs from them up or down.
- **Draft reply.** For a no-quote, a polite ready-to-send decline. For a bid, a quote-starter that pre-fills the extracted specs so the owner walks into estimating with the reading already done.
- **Weekly digest.** "You triaged 22 RFQs, BidSift flagged 6 worth your time, you no-quoted 11 in one click." Makes the time saved visible — which is what gets it renewed.

## 6. AI angle — what's load-bearing

Remove the AI and there is no product. The core is reading an arbitrary 2D engineering drawing — a noisy, rotated, scanned PDF with GD&T symbols and a title block — and turning it into structured specs accurate enough to make a bid/no-bid call. That is exactly the capability that crossed the usable-accuracy line in 2025 and not before. The second AI job is the judgment layer: weighing extracted difficulty against the shop's capability profile and its messy history of past outcomes to produce a defensible verdict. A rules engine alone can't do the print-reading; a print-reader alone can't do the judgment. Both are AI, both are load-bearing.

## 7. Localization angle

N/A — this is a US-first play. The wedge is the density of small CNC job shops, the English-language drawing standards (ASME Y14.5 GD&T), and a forum culture (Practical Machinist) that makes distribution cheap. The same product could later extend to UK/EU shops on ISO GPS tolerancing, but that's a v2 market, not a localization wedge.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** $149/month per shop, flat. One tier. Maybe a $249 tier later for multi-estimator shops with RFQ volume over ~60/week. This sits deliberately below the four-figure incumbents and reads as "less than one no-quoted good job pays back the year."
- **ACV:** ~$1,800/year.
- **Math to $1M ARR:** ~560 shops × $149/mo. Out of 16,600+ small US machine shops, that is ~3% penetration. Believable.
- **Math to $5M ARR:** ~2,800 shops (~17% of the conservative TAM) on the base tier, or ~2,000 shops with a third on the $249 tier and a usage add-on for auto-generated full quotes. The $5M case leans on the upper-bound shop count (30,000+) being real and on landing a couple of buying-group or distributor channel deals.
- **Expansion path:** Start as triage. Once the shop trusts the print-reading, sell the quote-completion step — pre-filled cycle-time and pricing drafts — as a usage-priced add-on. That's the same ground Paperless Parts stands on, but you arrive there having already won the shop's daily habit, from below their price floor.

## 9. Go-to-market wedge — first 100 customers

- **Practical Machinist, where the pain is already posted.** The "Shop Management and Owner Issues" subforum has active threads on RFQ backlog and quoting waste. Show up as a member, not an ad — reply with genuinely useful triage advice, run a free "send me your last 5 RFQs, I'll tell you which were worth bidding" teardown. The forum's own threads are the lead list.
- **Cold email to a scraped shop list.** Directories (ThomasNet, MFG.com, IBISWorld-style lists) yield tens of thousands of US machine shops with email. Send the owner a 90-second Loom: forward one of their real RFQ types, watch BidSift call it. Manufacturing owners answer specific, concrete demos. Target 2–4% reply, 20% of replies to a trial.
- **The "decline-letter" trojan horse.** Lead magnet: a free tool that drafts a polite no-quote reply. Every small shop needs that and feels guilty doing it badly. Free decline-drafter → "want it to also tell you which RFQs you *shouldn't* decline?" → paid.
- **Buying groups and shop networks.** Groups and regional manufacturing associations have newsletters and member directories. One newsletter feature or a referral deal puts BidSift in front of a few hundred owners at once.
- **Job-shop YouTubers.** Channels like NYC CNC and Titans of CNC have exactly this audience. A single sponsored "how I stopped quoting at 9pm" segment is a credible 50–150 trial spike.

## 10. Build complexity — justification

Medium. The drawing-extraction core can ride a commercial API (Werk24) or a fine-tuned open vision-language model — off-the-shelf either way, no research needed. The custom work is the capability-match and bid-scoring logic, the customer-memory layer, and an email-ingestion pipeline that handles messy real-world attachments. Estimate 12–16 weeks to a credible v1 for a technical founder plus a part-time machining domain advisor. The advisor is non-negotiable — the bid-scoring rules must be calibrated by someone who has actually quoted jobs, or the verdicts will be confidently wrong.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Customer-supplied drawings; standard B2B SaaS. No regulated data. |
| Ethical — no harm / dark patterns | ✅ | Saves owner time; verdicts are advisory, owner still decides. |
| Market exists (evidence above) | ✅ | Documented forum demand + a quantified real-shop case study. |
| 1–5 person team can build this | ✅ | Technical founder + domain advisor, 12–16 weeks. |
| Launchable with <$50K / ₹40L | ✅ | API costs + email infra + a list. Comfortably under. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 15/20 | Real, weekly, costs the owner evenings — but it's a workaround-able pain (shops cope by no-quoting). Not full hair-on-fire. |
| Demand evidence | 15 | 12/15 | Years of forum threads plus a quantified MMS case study. Strong, though no one is yet *paying* specifically for triage. |
| Build feasibility | 15 | 11/15 | Extraction is off-the-shelf; scoring + memory + email ingestion is real custom work. 12–16 weeks. |
| Distribution clarity | 15 | 12/15 | Named forum, scrapable list, named YouTubers, clear demo. Conversion math is estimated, not proven. |
| Revenue mechanics | 15 | 11/15 | $149/mo is benchmarkable and easy to justify; $1M ARR needs only 3% penetration. $5M leans on upper-bound TAM. |
| Time to first revenue | 10 | 8/10 | Forwardable demo, short trial-to-paid. First dollars within 4–8 weeks of launch. |
| Defensibility | 10 | 5/10 | Execution + accumulating per-shop customer memory. Extraction tech is buyable by anyone; the moat is the habit and the data, not the AI. |
| **Total** | **100** | **74/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required`

### Key assumptions to validate (3–5)

1. **Assumption:** Owners will trust a software bid/no-bid verdict enough to act on it (no-quote in one click). **How to test:** In the free RFQ-teardown phase, track how often the owner's own decision matches BidSift's call. Need ~80%+ agreement before they'll trust it unattended.
2. **Assumption:** Print-reading is accurate enough on the messy real-world prints small shops actually receive — scans, faxed-looking PDFs, hand-marked revisions — not clean CAD exports. **How to test:** Run 200 real forwarded RFQs through extraction; measure spec-level accuracy against a machinist's manual read.
3. **Assumption:** $149/mo clears willingness-to-pay for a shop that currently pays $0 for triage. **How to test:** 30 owner calls; pre-sell annual plans at the teardown stage.
4. **Assumption:** Enough RFQ volume per shop to matter — a shop getting 4 RFQs/week may not feel the pain. **How to test:** Ask volume in the first 30 interviews; confirm the 10–40/week band is common.

### Risk flags

1. **Platform dependency:** If extraction rides Werk24's API, pricing or terms changes hit COGS directly. Mitigate by keeping a fine-tuned open-model fallback.
2. **Trust / liability:** A wrong "no-bid" on a job that was actually a great fit is an invisible loss the owner may blame on the tool once. The product must err toward "maybe" and never auto-decline without the owner's click.
3. **Defensibility is thin:** The extraction layer is commodity. Paperless Parts could ship a downmarket triage feature. The defense is speed, the small-shop price point they won't match, and the per-shop memory that compounds — none of it patent-grade.
4. **Market timing on the buyer:** Small machine-shop owners are notoriously slow software adopters. The forum and YouTube channels mitigate it, but the sales cycle could run longer than the optimistic 4–8 weeks.

## 14. Structured verdict

```
Score:                  74/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder who can ship an AI document pipeline, paired with a machining domain advisor who has actually quoted job-shop work
Time to revenue:        6–10 weeks from launch
Capital to launch:      $15–30K (extraction API credits, email infra, a scraped shop list)
Top 3 assumptions to validate first:
  1. Bid/no-bid verdicts agree with the owner's own call ~80%+ — measure during free RFQ teardowns
  2. Print-reading holds accuracy on messy scanned real-world RFQs — run 200 real prints, score spec-level
  3. $149/mo clears WTP for a buyer who pays $0 for triage today — 30 owner calls, pre-sell annuals
Kill criteria:
  - Abandon if extraction accuracy on real (non-CAD) prints stays below ~90% spec-level after tuning
  - Abandon if <10% of 50 free-teardown shops convert to a paid trial
  - Abandon if Paperless Parts or an ERP incumbent ships a comparable triage feature at small-shop pricing before your v1
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Pull 30 real RFQ drawings — post in two Practical Machinist threads offering a free "which of these were worth quoting" teardown, and ask three shop owners directly. Run them through Werk24's API. Measure spec-level extraction accuracy against a machinist's manual read.
- **Day 3–4:** Hand-score bid/no-bid on those same 30 RFQs using a simple capability + quantity + tolerance rubric. Show the verdicts to 5 owners. Record how often the owner agrees and whether they'd have wanted the call before opening the email.
- **Day 5:** Decide. **Go** if extraction is ≥90% spec-accurate on the messy prints *and* owner agreement with the verdicts is ≥80% *and* at least 3 of 5 owners say they'd pay $149/mo. Anything short of all three — fix the weak axis or pass.

The falsifiable result: a measured extraction-accuracy number and a measured owner-agreement number. Either clears the bar or it doesn't — no "they seemed to like it."
