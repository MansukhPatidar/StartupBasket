---
title: "SupplementBrief — supplement packet builder for restoration contractors"
slug: restoration-supplement-justification
date: 2026-05-18
category: TradeTech / US-SMB
complexity: Medium
score: 75
verdict: GO
confidence: Medium
oneLiner: "Turns your photos and field notes into the code-cited packet that gets a restoration supplement approved the first time."
tags:
  vertical: TradeTech
  model: SaaS
  geography: US
  secondary: [Workflow-automation, AI-agent, SMB, Compliance-aware, Solo-builder]
axes:
  problem: 16
  demand: 12
  build: 11
  distribution: 12
  revenue: 12
  time: 7
  defensibility: 5
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# SupplementBrief

## 1. One-liner

Turns your photos and field notes into the code-cited packet that gets a restoration supplement approved the first time.

## 2. Trend signal — why now?

Restoration and roofing contractors routinely lose **$8,000–$20,000 per claim** to insurance underpayment, and the recovery mechanism — the supplement — is a documentation grind nobody wants to do. "Gaps in documentation are the primary reason supplement requests are denied or delayed" is the consensus across the industry press. An entire cottage industry of outsourced supplement writers exists and is paid real money: ReadyAdjuster, QuickPay Claims, Assistimate, "Write My Supplement," charging **$99–$125/hour or a percentage of the uplift**. Contractors are already paying humans to do this — the demand is not hypothetical.

What changed in the last 12 months: multimodal models got cheap and good enough to read damage photos, map them to Xactimate line items, and — the actually hard part — **draft the written justification narrative with code and IICRC S500 references** that an outsourced estimator charges $125/hr to produce. Verisk shipped XactAI (photo labeling, line-item suggestion, Sketch Scan) inside Xactimate itself — that's the incumbent validating the direction. Funded entrants (Encircle, ScopeAssist, RestorationAI) attack the *scoping/estimating* step. The justification-packet step — the part that gets a supplement approved versus rejected — is still done by humans on the phone.

Provenance:
  - Signal 1 (demand): Texas water-damage claims underpaid by $8K–$20K; underpayment "more common than outright denial," frequently unchallenged because owners/contractors don't document full scope — https://247restorationspecialists.com/insurance-underpaid-water-damage-claim-texas/ — 2026-05-18
  - Signal 2 (economic): Paid outsourced supplement-writing market exists at $99–$125/hr or % of uplift (ReadyAdjuster, QuickPay Claims, Assistimate, WriteMySupplement) — https://writemysupplement.com/ , https://readyadjuster.com/estimate-writing-for-contractors-adjusters-claims/ — 2026-05-18
  - Signal 3 (feasibility): Verisk shipped XactAI (photo→line-item, auto-labeling, Sketch Scan) inside Xactimate; Encircle/ScopeAssist generate Xactimate-ready scope from video in ~60s — proves multimodal photo→estimate is now production-grade — https://www.verisk.com/products/xactimate/ , https://www.getencircle.com/ — 2026-05-18
  Category: Workflow automation

## 3. The opportunity

The money in a restoration claim is not lost at the estimate. It's lost at the **supplement** — the mid-project request for the line items the carrier's desk adjuster left out (antimicrobial, contents manipulation, hidden moisture scope, detach-and-reset, code upgrades). Contractors know the items are owed. They lose them anyway because the supplement arrives as a bare Xactimate export with no photo-to-line-item evidence chain and no written rationale tying each disputed item to a moisture reading, a photo, or an IICRC/building-code citation. "Documentation gaps are the #1 reason supplements are denied."

Incumbents (Encircle, ScopeAssist, RestorationAI, XactAI) optimize the *scope/estimate*. None of them assemble the **adjuster-facing justification dossier**: each contested line item, paired with the specific photo that proves it, the moisture log entry that supports it, and a one-paragraph rationale citing IICRC S500 or the relevant code section — formatted the way a desk adjuster will actually approve in one pass. That's precisely the artifact contractors outsource to humans at $125/hr today. We make it a $299/mo button. We are not a public adjuster and we do not negotiate — we document the contractor's own scope and invoice, which is explicitly the permissible side of the line (see §11, §13).

## 4. Target market

- **Primary customer:** Owner-operators and estimators at small US water/fire/storm restoration and storm-roofing firms — 2 to 25 employees, $500K–$8M revenue, doing 10–60 insurance jobs/month. The person who buys is the owner or the in-house "supplement guy."
- **Why they buy (their words):** "Dealing with adjusters is the hardest part of restoration work — it takes a ton of time to justify bills." "We were leaving $8K–$20K on the table per claim and didn't even know it." "I'm paying a supplement service 10% of the uplift; that's $1,500 a job to send emails I should be able to send myself."
- **Rough TAM reasoning:** ~55,000 restoration/remediation establishments in the US (IBISWorld-class category) plus tens of thousands of insurance-restoration roofers. If 15,000 are claim-heavy enough to care and 5–8% pay $299/mo, that's a $25M–$45M revenue ceiling — comfortably a sub-$5M ARR business with room above it. Not a unicorn; a great bootstrap.
- **Why now for them:** Carriers tightened desk-adjusting and lean on Xactimate's median pricing; underpayment is structural and rising. Contractors who used to eat it now actively pay third parties to recover it — so the budget line already exists; we just need to be cheaper and faster than the human service.

## 5. Product sketch (MVP)

- Upload the carrier's approved Xactimate estimate (ESX/PDF) + your job photos + moisture/drying logs from the phone.
- AI diffs the carrier scope against a standards-based "should-have" scope for that loss type and flags probable missed/underpaid line items (antimicrobial, contents manipulation, detach-reset, hidden-moisture drywall, code upgrades).
- For each flagged item: auto-pairs the supporting photo(s), pulls the matching moisture-log entry, and drafts a one-paragraph justification citing IICRC S500 / applicable code.
- Generates a clean, adjuster-ready **supplement packet PDF**: cover summary, line-item table with deltas, and the evidence+rationale appendix per item.
- "Documentation completeness" score before you send — tells you which items are weakly supported so you photograph them before leaving the site.
- Tone-locked language: documents *the contractor's own scope and invoice*; never drafts advocacy, negotiation, or coverage-dispute language (UPPA guardrail, see §13).
- Re-supplement mode: paste the adjuster's rejection reasons, get a documentation-gap-closing rebuttal packet (still scope/invoice documentation, not advocacy).

## 6. AI angle — what's load-bearing

Remove the AI and there is no product — you're back to a $125/hr human. The model does three jobs a form cannot: (1) **vision** — read damage photos and a moisture log and decide which photo proves which line item; (2) **scope reasoning** — diff a carrier estimate against a standards-derived expected scope for the loss type and surface the specific omissions; (3) **constrained drafting** — write a defensible per-item rationale grounded in IICRC/code, in a register that desk adjusters approve, while staying inside the "document your own scope" legal lane. That third job is the exact thing contractors outsource to expensive humans. The AI is the labor being replaced.

## 7. Localization angle

N/A — this is a US-only play by design. The wedge *is* the US property-insurance claims machinery (Xactimate's near-monopoly format, IICRC S500, state UPPA statutes, carrier desk-adjusting practice). None of that transfers to other markets, and the legal guardrail is jurisdiction-specific. Geographic expansion is not the growth path; account expansion within US restoration is.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** $299/mo (solo/small, up to 20 packets/mo) and $799/mo (shop, unlimited + multi-user + rejection-rebuttal). Optional $49 one-off pay-per-packet for trial/seasonal users.
- **ACV:** ~$4,800 blended (mix skewed to the $299 tier early, $799 as shops standardize on it).
- **Math to $1M ARR:** ~210 shops at a $4,800 blended ACV. Against a 15,000-firm reachable base that's a 1.4% penetration — conservative given the existing paid outsourced market.
- **Math to $5M ARR:** ~1,050 shops, or fewer shops + a per-packet usage tier on high-volume storm-roofing accounts (cat-event spikes). Requires being demonstrably better-converting than human supplement services, proven by approval-rate data we collect.
- **Expansion path:** seats as shops grow → per-packet overage in catastrophe season → an analytics layer ("which line items your carriers underpay most") that becomes the sticky, switch-resistant product once enough packets accrue.

## 9. Go-to-market wedge — first 100 customers

- **Outsourced-service switchers:** Contractors already paying ReadyAdjuster/QuickPay/Assistimate are pre-qualified by willingness-to-pay. Target their public testimonial/customer lists and the Facebook/forum threads where contractors complain about supplement-service fees; pitch "the $1,500/job you pay them, for $299/mo."
- **The restoration creator economy:** This niche has loud operators — RIA (Restoration Industry Association) chapters, "Roof Sales Mastery," r/restoration, the Restoration1/water-damage Facebook groups, podcast hosts who already preach "stop leaving money on the table." 3–5 sponsored walkthroughs/affiliate deals reach tens of thousands of exact-fit owners.
- **Cold, with proof:** Pull state contractor license rolls + match to firms tagged "water/fire restoration"; send a Loom that takes their *real* public sample loss and produces a packet on screen. Underpayment is visceral; a 3–5% reply rate is realistic.
- **Trade shows / Xactimate user groups:** restoration estimators congregate at regional Xactimate training and RIA events — a booth that runs their photos live converts on the spot.

## 10. Build complexity — justification

Medium. Off-the-shelf: multimodal model APIs, PDF/ESX parsing, standard web stack, cloud storage. Custom work: the carrier-vs-expected scope diff and the IICRC/code-grounded rationale templates need real domain encoding and a restoration-estimator advisor — this is the moat and the risk. Tone/legal guardrail is a constrained-generation problem, not research. A technical founder plus a domain advisor (ex-estimator or ex-public-adjuster) ships a credible v1 in ~14–18 weeks; the ESX format and IICRC standards are documented, not proprietary.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Documents the contractor's *own* scope/invoice — explicitly the permissible side of UPPA. Must hard-exclude advocacy/negotiation language (see §13 risk). |
| Ethical — no harm / dark patterns | ✅ | Recovers legitimately owed scope with evidence; no inflation incentive (flat fee, not % of uplift — the opposite of the ethically criticized model). |
| Market exists (evidence above) | ✅ | Existing paid outsourced market + documented per-claim losses + funded scoping entrants. |
| 1–5 person team can build this | ✅ | Technical founder + domain advisor, ~14–18 weeks. |
| Launchable with <$50K / ₹40L | ✅ | API + infra + advisor stipend; well under $50K to first revenue. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | $8K–$20K/claim lost, felt on most jobs; already paying humans to fix it. Not 17+ because many contractors have a workaround (the outsourced service) — switching cost, not greenfield pain. |
| Demand evidence | 15 | 12/15 | Multiple independent signals incl. an existing paid market and incumbent (XactAI) validation. Short of 13+ only because direct "I'd pay $299/mo for *this packet*" evidence is inferred, not yet collected. |
| Build feasibility | 15 | 11/15 | Standard stack + APIs, but scope-diff and code-grounded rationale need domain encoding and an advisor; ~14–18 wks, not a 6-week solo build. |
| Distribution clarity | 15 | 12/15 | Named lists (outsourced-service customers, license rolls), loud niche creators, live-demo close. Conversion math plausible but unproven. |
| Revenue mechanics | 15 | 12/15 | Pricing benchmarked against $125/hr human alternative; ~210 shops to $1M is conservative. One assumption (retention vs. seasonality) unproven. |
| Time to first revenue | 10 | 7/10 | 14–18 wk build, then a fast trade sale — first revenue ~4–6 months. Not sub-4-week. |
| Defensibility | 10 | 5/10 | Execution + accumulating approval-rate data + advisor knowledge. Copyable; Verisk could fold this into XactAI — head start + niche focus, not a hard moat. |
| **Total** | **100** | **75/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required` — needs solid AI/vision integration **and** a restoration-estimator or ex-public-adjuster advisor; the legal lane and the rationale quality are won on domain knowledge, not code.

### Key assumptions to validate (3–5)

1. **Assumption:** AI-drafted packets get approved at a rate comparable to $125/hr human supplement writers. **How to test:** Run 25 historical real claims through a manual prototype; have 3 friendly contractors submit and track approval rate vs. their prior human-written supplements.
2. **Assumption:** Contractors will pay a flat $299/mo instead of % of uplift to an outsourced service. **How to test:** 30 discovery calls with firms currently paying outsourced services; pre-sell 10 annual plans before building.
3. **Assumption:** The product can stay on the legal side of UPPA in the strictest states (TX, FL) while still being useful. **How to test:** Insurance-defense attorney review of the exact output language in 3 strict states before launch.
4. **Assumption:** Scope-diff catches the high-value missed items (antimicrobial, contents manipulation, hidden moisture) reliably enough to trust. **How to test:** Blind test against 20 estimator-graded claims; require ≥80% precision on flagged omissions.

### Risk flags

1. **Regulatory / UPPA risk:** Several states (TX 2019, FL, others) criminalize unlicensed claim advocacy/negotiation. If the product drifts into advocacy language it exposes customers and us to civil/criminal liability. Mitigation: hard-constrained output scoped to documenting the contractor's own work; counsel-reviewed templates; explicit "not a public adjuster" positioning. This is the #1 kill risk.
2. **Platform dependency:** Built around Xactimate's ESX format and Verisk's ecosystem. Verisk shipping a competing XactAI supplement feature is a direct existential threat. Mitigation: move faster, own the adjuster-facing packet quality and approval-rate data Verisk won't prioritize for SMBs.
3. **Liability perception:** A rejected/over-aggressive packet could be blamed on the tool. Mitigation: flat-fee (no inflation incentive), documentation-completeness gating, human-in-the-loop sign-off before submission.

## 14. Structured verdict

```
Score:                  75/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder + restoration-estimator / ex-public-adjuster advisor
Time to revenue:        4–6 months (14–18 wk build, then fast trade-channel sale)
Capital to launch:      $15–35K (API + infra + advisor stipend + legal review)
Top 3 assumptions to validate first:
  1. AI packet approval rate ≈ human service — run 25 historical claims through a manual prototype
  2. Flat-fee willingness-to-pay vs % outsourced model — 30 discovery calls, pre-sell 10 annual plans
  3. UPPA-safe output in TX/FL — insurance-defense attorney reviews exact output language
Kill criteria:
  - Abandon if <50% of 30 contractors currently paying outsourced supplement services will pre-commit at $299/mo
  - Abandon if counsel cannot certify the output stays clear of UPPA in TX and FL
  - Abandon if a well-funded incumbent (Verisk/XactAI) ships an equivalent SMB supplement-packet feature before v1
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Pull 25 real, anonymized closed restoration claims (photos + carrier estimate + final settlement) from 2–3 friendly contractors. Hand-build supplement packets with current AI tools to gauge achievable quality without engineering.
- **Day 3–4:** 20–30 calls to contractors currently paying outsourced supplement services. Show the hand-built packet. Ask the closing question: "Would you pay $299/mo and cancel your supplement service?" Get yes/no + a deposit option.
- **Day 5:** Decide. **Go** only if ≥15/30 say yes *and* ≥3 put money down (deposit/LOI). Falsifiable outcome: a hard pre-commit count and dollar figure, not "they seemed interested." Parallel: one insurance-defense attorney confirms the packet language is UPPA-safe in TX/FL.
