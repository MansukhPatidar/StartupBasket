---
title: "ShortPay — supplement engine for collision shops"
slug: collision-supplement-recovery
date: 2026-06-01
category: TradeTech / US-SMB
complexity: Medium
score: 76
verdict: GO
confidence: Medium
oneLiner: "Reads the insurer's estimate, flags every owed-but-unbilled operation, and drafts the OEM-cited supplement the adjuster can't refuse."
tags:
  vertical: TradeTech
  model: SaaS
  geography: US
  secondary: [SMB, AI-agent, Compliance-driven, Workflow-automation]
axes:
  problem: 16
  demand: 12
  build: 11
  distribution: 12
  revenue: 12
  time: 8
  defensibility: 5
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# ShortPay — supplement engine for independent collision shops

## 1. One-liner

Reads the insurer's estimate, flags every owed-but-unbilled operation, and drafts the OEM-cited supplement the adjuster can't refuse.

## 2. Trend signal — why now?

Three things moved at once.

First, the **estimating databases keep shifting labor out of the "included" bucket**. In the 2024–2026 guide updates, Audatex/Solera newly excluded seam-sealer application on new parts, assembly of multi-piece parts, riveting setup, and any labor to research OEM service information — each one now a line a shop must manually add or eat. The ASA publishes a running "Not-Included Operations" chart because there are too many to memorize. The DEG (Database Enhancement Gateway) has logged ~19,000 inquiries over 15 years about missing or wrong labor values; 52% resulted in a correction. Translation: the system underpays by design, and keeping up is a moving target no busy estimator wins.

Second, **states are legislating the shop's side of the argument**. Texas SB 1429 (effective Jan 1, 2026) mandates OEM parts/procedures for newer insured vehicles and adds disclosure requirements. Rhode Island S 925 makes it an *unfair claims practice* for an insurer to refuse to compensate a shop for documented OEM- or paint-manufacturer-required procedures. Vermont signed a labor-rate study into law. Montana ran OEM-coverage bills. The legal scaffolding to back a supplement with a citation is being built right now.

Third, **the money is provably on the table and quantified**. Autobody News (John Yoswick) ran the math: a 150-RO/month shop missing one 0.3-hour operation on every estimate loses $1,890/month — $22,680/year — with no added staff or equipment. A separate survey found ~39% of shops aren't fully paid even for OEM-required battery reconnection, and 28% never research OEM procedures at all.

Provenance:
  - Signal 1 (demand): Shops leave $22,680/yr on the table from a single missed 0.3-hr operation per estimate; estimators "afraid to add operations for fear they'd be rejected" — https://www.autobodynews.com/news/common-estimating-mistakes-could-be-costing-your-shop-money — accessed 2026-06-01
  - Signal 2 (feasibility): Estimating systems expanding "not-included" exclusions (seam sealer, riveting, OEM data research) in 2024–2026 guide changes — https://www.autobodynews.com/news/collision-repair-estimating-understanding-information-system-guide-changes — accessed 2026-06-01
  - Signal 3 (economic/regulatory): States enacting OEM-procedure + labor-rate laws (TX SB 1429 eff. 2026-01-01; RI S 925 unfair-claims-practice; VT labor-rate study) — https://www.autobodynews.com/news/states-enact-legislation-related-to-oem-procedures-labor-rate-studies — accessed 2026-06-01
  Category: Workflow automation

## 3. The opportunity

The incumbent isn't a competitor product — it's **CCC ONE / Audatex / Mitchell**, the three estimating platforms shops are forced to use because that's where the insurer's estimate lands. Those tools are *neutral-to-insurer-aligned*: they price the estimate, and when a shop downloads an insurer estimate or takes an "Open Shop" assignment, the insurer's rates and rules ride along — the shop has to re-apply its own labor rate on *every* supplement, even supplement three, four, five, and the insurer keeps flipping it back. CCC ONE is also expensive enough that small shops ration its modules.

What none of them do is **fight on the shop's behalf**. They won't tell you "you performed a destructive weld test that's a not-included op worth 0.4 hr — here's the OEM doc number that proves it." That judgment lives in the head of the one great estimator the shop probably doesn't have. ShortPay productizes that estimator: it reads the insurer's estimate, compares the documented damage and repair plan against the OEM procedures and the not-included rules for that exact estimating system, and hands back a finished, citation-backed supplement. We're not replacing CCC — we sit beside it and recover the dollars CCC's neutrality leaves behind.

## 4. Target market

- **Primary customer:** Owner/estimator at an independent (single-location or 2–4 location) collision repair shop in the US doing 60–250 repair orders/month. The person who writes estimates *and* runs the business and has no time to chase OEM PDFs.
- **Why they buy:** In their words — they're "afraid to add operations for fear they'd be rejected," the tech "stops to make a list of operations that were missed," and the job gets "put on hold for insurance approvals." They know they're short-paid; they don't have the hours to prove it line by line.
- **Rough TAM reasoning:** ~36,000 collision shops in the US (Autobody News' stated reach). The Big Five consolidators + accelerators hold ~1/3 of revenue; **roughly two-thirds of the market is still independent/small** — call it 20,000+ shops that are exactly our buyer. At even 1,500 shops × $3,600/yr that's $5.4M ARR without leaving the independent segment.
- **Why now for them:** The not-included exclusions just expanded again, and for the first time several states have put the shop's OEM/labor-rate argument into statute. The justification they need to cite is now legally weightier than it was 18 months ago.

## 5. Product sketch (MVP)

- Drop in the insurer's estimate (PDF/EMS export) + the shop's photos and VIN.
- ShortPay decodes the VIN, pulls the applicable OEM repair procedures, and lists **owed-but-missing operations** keyed to the damage and the parts being replaced.
- For each flagged op: a plain-English reason, the matching not-included rule for the shop's estimating system (CCC/Audatex/Mitchell), and a citation (OEM doc number, P-page, ASA not-included chart, or relevant state statute where applicable).
- One-click **supplement draft** — line items with labor units and justification language formatted to paste back into the estimate / email to the adjuster.
- A running **recovery ledger**: dollars flagged, dollars approved, approval rate by insurer — so the shop sees ROI per claim.
- Insurer-pattern notes ("Carrier X approves seam-sealer ops 80% of the time when cited to the P-page; pushes back on feather-prime-block").

## 6. AI angle — what's load-bearing

Remove the AI and there is no product — it'd just be the ASA PDF chart a shop already ignores. The model does three jobs a junior estimator can't: (1) **read** an unstructured insurer estimate and the photos and infer what repair operations the damage actually requires; (2) **reconcile** that against the OEM procedure set and the current not-included rules for the specific estimating system — a reasoning task over messy, frequently-changing documents; (3) **draft** defensible justification language that cites the right authority for that op and that carrier. The whole value is collapsing a 45-minute blueprinting-and-research task into a two-minute review. That is squarely an LLM-over-documents job that became reliable in the last 12 months.

## 7. Localization angle (if any)

N/A — this is a US-only play, and deliberately so. The wedge *is* the US-specific machinery: CCC/Audatex/Mitchell databases, the DEG, the ASA not-included charts, and state-by-state OEM/labor-rate statutes. The same shop pain exists in the UK/EU/Australia, but the estimating systems, the legal hooks, and the "not-included" taxonomy are entirely different — that's a later market, not a localization toggle.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** $299/mo flat per shop (unlimited estimates) for the core; $499/mo "pro" tier adding the insurer-pattern analytics and multi-location ledger. No per-claim metering — shops hate variable bills and it kills usage.
- **ACV:** ~$3,600–$6,000.
- **Rough math to $1M ARR:** 280 shops × $300/mo × 12 = $1.01M. That's <1.5% of the independent segment.
- **Rough math to $5M ARR:** ~1,200 shops at a blended $350/mo, or 800 shops if pro-tier mix climbs and we add a per-location upsell for small MSOs. Entirely inside the independent two-thirds of the market.
- **Expansion path:** seats/locations as small MSOs grow; an "audit-back" report product (proves recovered dollars for the shop's books); eventually a paid carrier-pattern data feed. ACV grows from single-shop SaaS toward $1k+/mo for 3–5 location operators.

## 9. Go-to-market wedge — first 100 customers

- **DEG / SCRS / ASA orbit:** the people filing those 19,000 DEG inquiries are our exact buyers and they congregate in known places (Database Enhancement Gateway, SCRS membership, state association meetings). Sponsor/post a free "what your last 10 estimates left on the table" teardown — run their real estimates, show the missed dollars, convert.
- **Cold, value-first outreach:** scrape state shop-licensing directories + Google Maps for independent shops; send each a 90-second Loom that runs ShortPay on a *blurred sample of their own public review/photos* showing 2–3 likely missed ops and an estimated annual leak. "Here's $18k/yr you're probably losing" is a reply-getting subject line; expect 4–6% reply at a few thousand sends.
- **Estimator influencers + trade press:** Mike Anderson / Collision Advice, FenderBender, Autobody News, and YouTube blueprinting channels already preach "stop leaving money on the table." A tool that *does* it is a natural segment/sponsorship — co-branded "missed-ops audit."
- **Jobber/management-software resellers:** integrate as an add-on with shop management systems that aren't CCC; they have the install base and a reason to sell against CCC's neutrality.

## 10. Build complexity — justification

Medium. Off-the-shelf: LLM document reasoning, VIN decode, PDF/EMS estimate parsing, web stack. The custom work is the **operation→OEM-procedure→not-included-rule mapping and the citation library**, kept current as the estimating guides change quarterly — that's a real data-curation job and the source of the moat, but it's curation, not research. A 2–3 person team (one strong builder + one collision-domain estimator on retainer) ships a credible v1 covering the top 10 makes in 4–5 months.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Shops are entitled to bill for performed, documented operations; we draft justification, we don't fabricate work. |
| Ethical — no harm / dark patterns | ✅ | Only surfaces ops supported by OEM docs + actual damage; explicitly flags "verify performed" so it never invents billing. |
| Market exists (evidence above) | ✅ | $22,680/yr quantified leak, 39% under-paid on OEM ops, expanding exclusions, new state laws. |
| 1–5 person team can build this | ✅ | 2–3 people, 4–5 months. |
| Launchable with <$50K / ₹40L | ✅ | Inference + data curation + a domain advisor; well under $50K to first revenue. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | Quantified recurring revenue leak felt on every job; not hair-on-fire (shops survive without it) but money + fear of rejection are real and weekly. |
| Demand evidence | 15 | 12/15 | Multiple independent signals: sourced dollar math, survey of under-payment, DEG inquiry volume, expanding exclusions. Direct "I'd pay $300/mo" still to validate. |
| Build feasibility | 15 | 11/15 | Standard stack + real, ongoing data-curation burden across estimating systems and makes. |
| Distribution clarity | 15 | 12/15 | Named channels (DEG/SCRS/ASA, trade press, scraped directories) with a killer "here's your leak" hook; conversion math still a guess. |
| Revenue mechanics | 15 | 12/15 | Flat $299–499/mo benchmarks below CCC; ROI is self-evident if even one supplement/month clears. Retention risk if approval rate disappoints. |
| Time to first revenue | 10 | 8/10 | Shops buy fast on monthly SaaS; pilot-to-paid in weeks once the audit lands. |
| Defensibility | 10 | 5/10 | Execution + curated citation library + accumulating carrier-pattern data = soft moat. CCC could bolt this on; head start and shop-side alignment are the edge. |
| **Total** | **100** | **76/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required` — needs a builder comfortable with LLM-over-documents AND a real collision estimator who knows where the bodies (and the not-included ops) are buried.

### Key assumptions to validate (3–5)

1. **Assumption:** Independent shops will pay $299/mo flat for recovered supplement dollars. **How to test:** run free audits on 30 real estimates from 30 shops, then ask for a paid pilot; track conversion.
2. **Assumption:** Citation-backed supplements actually lift the approval rate vs. the shop's current ask. **How to test:** A/B 100 supplements (ShortPay-cited vs. shop's normal) across a few pilot shops; measure approved dollars.
3. **Assumption:** The operation→OEM→not-included mapping can be kept current for the top makes without a research team. **How to test:** curate top-10 makes, then measure curation hours per guide-update cycle for one quarter.
4. **Assumption:** We can parse CCC/Audatex/Mitchell estimate exports reliably enough. **How to test:** ingest 200 real estimate exports, measure clean-parse rate.

### Risk flags

1. **Platform dependency:** CCC/Audatex/Mitchell own the estimate format and could change exports or bolt on a competing feature; we depend on their files and rules.
2. **Carrier pushback / relationship risk:** if insurers start auto-rejecting "AI-generated" supplements, perceived value drops — value must come from *correctness*, not volume.
3. **Curation drift:** the not-included rules and OEM procedures change quarterly; stale citations erode trust fast. The moat and the maintenance burden are the same thing.

## 14. Structured verdict

```
Score:                  76/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder (LLM-over-documents) + collision-estimator domain advisor
Time to revenue:        6–10 weeks from MVP (monthly SaaS, fast shop buying)
Capital to launch:      $25–40K ($ for inference, curation, and a domain advisor)
Top 3 assumptions to validate first:
  1. Shops pay $299/mo flat — free-audit-to-paid-pilot conversion on 30 shops
  2. Cited supplements lift approved dollars — A/B 100 supplements across pilots
  3. Top-10-make citation library is maintainable solo — track curation hours/quarter
Kill criteria:
  - Abandon if <15% of 30 audited shops convert to a paid pilot
  - Abandon if cited supplements don't measurably beat the shop's own ask on approved dollars
  - Abandon if a major estimating platform ships an equivalent shop-side feature before our v1
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Collect 15–20 real recent insurer estimates (PDF/EMS) from 8–10 independent shops via DEG/SCRS forums and direct asks. Build a throwaway pipeline: parse estimate → flag missed ops against a hand-built not-included + OEM map for two popular makes.
- **Day 3–4:** Run the flagger on each estimate; with the domain advisor, hand-verify the flagged ops and total the recoverable dollars per shop. Send each shop *their own* leak number and a sample cited supplement line.
- **Day 5:** Ask each shop two things: "Is this number believable?" and "Would you pay $299/mo to get it automatically?" **Go if** ≥4 of 10 shops both confirm the dollars as real *and* verbally commit to a paid pilot. Falsifiable: a number and a yes/no, not a vibe.
