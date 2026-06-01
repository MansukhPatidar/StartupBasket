---
title: "PremiumBack — overcharge sweeper for workers' comp"
slug: workers-comp-premium-recovery
date: 2026-06-01
category: FinTech / US Small-Business Workers' Comp
complexity: Medium
score: 74
verdict: GO
confidence: Medium
oneLiner: "Reads your workers' comp audit worksheet and payroll, flags every overcharge, and drafts the dispute before your deadline."
tags:
  vertical: FinTech
  model: SaaS
  geography: US
  secondary: [SMB, AI-agent, Insurance, Self-serve, Document-AI]
axes:
  problem: 16
  demand: 12
  build: 11
  distribution: 11
  revenue: 12
  time: 7
  defensibility: 5
founderFit: [domain-expertise-required, technical-heavy]
featured: false
---

# PremiumBack — overcharge sweeper for small-business workers' comp

## 1. One-liner

Reads your workers' comp audit worksheet and payroll, flags every overcharge, and drafts the dispute before your deadline.

## 2. Trend signal — why now?

Every US small business that buys workers' comp gets an **annual premium audit**: the carrier reconciles the estimated premium against actual payroll and class codes, then bills or refunds the difference. That recalculation is where the money leaks. Misclassification is "one of the most common causes of workers' comp overcharges," and a single wrong code applied across three years has produced **$200,000–$250,000** overcharges in documented cases. An experience-mod auditor quoted in Leader's Edge says **5%–10% of the mods she audits contain errors of some sort** and reports saving her clients **$2.3M since 2016**. NCCI's own data shows **over 60% of businesses using Code 8292 (Storage Warehouse NOC) were reclassified** in a 2023 review — the codes are genuinely hard to get right.

There's already a paid market built entirely on this leak: premium-recovery consultants who work on **35% contingency**, recover something for **one-third to one-half of the clients they take**, and can claw back overcharges **up to three years prior**. That's the tell — when a service business can sustain a 35% contingency model, the underlying error rate and dollar size are large and persistent. The new thing in 2026 is that the consultant's core work — reading a messy audit worksheet and payroll export, then checking class codes, subcontractor inclusion, and overtime/payroll basis against the ~700 NCCI rules — is now a cheap document-AI task instead of a $200/hr human one.

Provenance:
  - Signal 1 (Demand): Misclassification cited as a top cause of WC overcharges; recovery consultants recover for 1/3–1/2 of clients, up to 3 yrs back — https://costrecoveryconsultants.com/ , https://www.cutcomp.com/ — 2026-06-01
  - Signal 2 (Feasibility): NCCI maintains 700+ published class codes; error detection historically required NCCI Risk Workstation + a human expert — now parseable by document AI — https://www.leadersedge.com/p-c/experience-mod-sleuths , https://www.insureon.com/insurance-glossary/workers-compensation-class-codes — 2026-06-01
  - Signal 3 (Economic): Recovery consultants charge 35% contingency; single auditor reports $2.3M saved since 2016; individual overcharges of $200K–$250K — https://www.leadersedge.com/p-c/experience-mod-sleuths — 2026-06-01
  Category: Workflow automation

## 3. The opportunity

The incumbent isn't a software product — it's a **human consultant on a 35% contingency**. That's the gap. The consultant makes far more money keeping the work manual ($35K fee on a $100K recovery) than they would selling a $99/mo SaaS, so they have zero incentive to self-cannibalize. Brokers, the other party who could catch these errors, won't aggressively fight their own carriers — it's the relationship that pays their commissions.

So the small business is stuck choosing between (a) eating an inflated audit bill, (b) giving away a third of any refund to a consultant, or (c) trying to decode a 700-code classification manual themselves. An AI-first tool that reads the audit worksheet and payroll, flags the specific overcharges with the NCCI rule citation, and drafts the dispute letter collapses the consultant's 2-week engagement into an afternoon — and lets the business **keep the third it would have handed over**. The wedge is the misaligned incentive of everyone currently in the room.

## 4. Target market

- **Primary customer:** Owner or office manager of a US small business with **$300K–$3M in annual payroll** in a *mixed-class* trade — general/specialty construction subcontractors, landscaping, trucking, staffing agencies, restaurants, auto shops — paying **$15K–$150K/yr** in workers' comp premium. Mixed-class businesses are where misclassification bites hardest (clerical vs. field, driver vs. sales).
- **Why they buy:** "I got the audit bill and it's $11K higher than I budgeted and I don't understand why." The audit worksheet is opaque; the deadline to dispute is **typically 30–60 days** and strict. They want to know *fast* whether they were overcharged and exactly what to say.
- **Rough TAM reasoning:** Several million US small employers carry workers' comp. Even a narrow beachhead — construction and trucking SMBs with mixed payroll — is hundreds of thousands of businesses, each audited annually. We don't need many.
- **Why now for them:** Premium audits arrive every year on a clock; rising wages and reclassification activity (the 8292 example) mean more businesses are being re-rated upward, so the surprise-bill frequency is climbing.

## 5. Product sketch (MVP)

- Upload the carrier's **premium audit worksheet** (PDF) and a **payroll export** (CSV/PDF from QuickBooks, Gusto, ADP, or a spreadsheet).
- AI extracts the assigned class codes, payroll basis, included subcontractors, and the rate applied to each.
- **Overcharge scan:** flags wrong/avoidable class codes, subcontractors improperly counted as employees, uncapped overtime (most states let you exclude the OT premium portion), executive-officer payroll above the state cap, and double-counted bonuses/PTO.
- **Estimated recovery** in dollars, line by line, with the governing rule cited (NCCI scope language or the relevant state rating-bureau rule).
- **Auto-drafted dispute packet:** a letter to the carrier/auditor and a corrected worksheet, ready to send before the deadline.
- **Deadline tracker:** logs the audit date and counts down the dispute window per the business's state.
- **"Pre-audit" mode:** before next year's audit, sanity-check current class codes and payroll mapping so the bill is right the first time.

## 6. AI angle — what's load-bearing

Without AI this is a consulting firm, which is exactly the incumbent. The load-bearing work is: (1) **extracting structured data from wildly inconsistent audit worksheets and payroll exports** — every carrier and rating bureau formats differently — and (2) **reasoning over the ~700-code NCCI/state classification system plus the inclusion/exclusion rules** to decide whether a given worker was coded correctly and whether overtime/officer caps were applied. That's classification + rule-application over messy documents — precisely what current document-AI is good at and what previously required a human who'd memorized the Scopes manual. Remove the AI and you've rebuilt a 35%-contingency consultancy that can't scale below a $20K recovery.

## 7. Localization angle (if any)

N/A — this is a **US-only** play and that's the point. Workers' comp classification is a US-specific regulatory artifact (NCCI in ~38 states plus independent bureaus in CA, NY, PA, NJ, etc.). The state-by-state rule variation *is* the moat-adjacent complexity, not a barrier to localize elsewhere. The natural "localization" here is **state coverage** — launch in the NCCI states, then add the independent-bureau states one at a time.

## 8. Business model — path to $1M–$5M ARR

- **Pricing — two tiers:**
  - **Self-serve audit review:** $149 one-time per audit worksheet (flag + draft dispute). Impulse-priced against a $200/hr consultant.
  - **Year-round seat:** $79/mo for pre-audit code-checking, deadline tracking, and unlimited audit reviews — the retention product.
- **Optional contingency upsell:** for businesses that want it done *for* them, refer to a partner consultant and take a referral cut — but the core product is self-serve software, not contingency.
- **ACV:** ~$950/yr blended (mix of one-time reviews converting to the $79/mo seat).
- **Math to $1M ARR:** ~1,050 year-round seats at $79/mo ≈ $1M, or a blend of ~2,500 one-time reviews + ~700 seats.
- **Math to $5M ARR:** ~5,300 seats, OR add a **broker/PEO channel** that white-labels the scan as a value-add and pays per business — brokers manage hundreds of WC accounts each, so one broker deal can carry thousands of seats.
- **Expansion path:** one-time review → year-round seat → multi-entity/multi-state employers → broker white-label. ACV grows as you add adjacent insurance audits (general liability premium audits use the same payroll/exposure logic).

## 9. Go-to-market wedge — first 100 customers

- **Audit-season ambush:** WC audits cluster around policy anniversaries. Scrape state contractor-license and DOT-carrier registries for mixed-class SMBs, time outreach to common renewal months, lead with "Just got your workers' comp audit bill? Upload it — find out in 10 minutes if you were overcharged. $149, keep 100% of any refund."
- **Reddit + Facebook trade groups:** r/smallbusiness, r/Construction, r/Trucking, and the large contractor/landscaper Facebook groups where "my workers' comp audit just hit me for $X" posts appear constantly. Answer with a free quick-check, convert to paid.
- **Bookkeeper & fractional-CFO partners:** the people who *receive* the audit bill on the client's behalf. Offer them a free tool + revenue share; they have the trusting relationship and see every audit. This is the highest-conversion channel.
- **Comparison content against the 35% consultants:** "Why pay 35% of your refund? Find the overcharge yourself for $149." Ranks against the exact firms whose business model we're undercutting.

## 10. Build complexity — justification

Medium. Document extraction (audit worksheets + payroll exports) and the dispute-drafting flow are off-the-shelf document-AI on a standard web stack. The non-trivial work is **encoding the NCCI Scopes classification logic and the state-by-state inclusion/exclusion and cap rules** — that's a real data-and-rules build, and it's where domain expertise is mandatory. A small team ships a single-state-cluster v1 in ~10–14 weeks; full multi-state coverage is the ongoing moat-building work.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Flagging errors and drafting a dispute letter the owner signs is not the practice of law or insurance adjusting; avoid "we'll represent you." |
| Ethical — no harm / dark patterns | ✅ | Helps SMBs recover money they were genuinely overcharged. Pro-customer by design. |
| Market exists (evidence above) | ✅ | 35%-contingency consultants, documented six-figure overcharges, 5–10% mod error rate. |
| 1–5 person team can build this | ✅ | Document AI + a rules layer; domain advisor required. |
| Launchable with <$50K / ₹40L | ✅ | No capital-intensive component; main cost is the classification-rules build. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | Real, recurring, dollar-quantified pain with a hard deadline. Annual not daily, so not full hair-on-fire. |
| Demand evidence | 15 | 12/15 | Strong: contingency market, documented overcharges, expert-cited 5–10% error rate. Lacks direct verbatim end-customer quotes (forum data thin). |
| Build feasibility | 15 | 11/15 | Doc-AI is easy; the NCCI/state rules layer is the real work and must be accurate or trust dies. |
| Distribution clarity | 15 | 11/15 | Bookkeeper/CFO channel and audit-season timing are concrete; conversion math still unproven. |
| Revenue mechanics | 15 | 12/15 | Pricing benchmarks cleanly against the 35% consultant. One-time→seat conversion is the open assumption. |
| Time to first revenue | 10 | 7/10 | Self-serve $149 review can sell within weeks of a working single-state scan. |
| Defensibility | 10 | 5/10 | Moat is accumulated multi-state rule accuracy + bookkeeper relationships, not patents. Copyable, but accuracy compounds. |
| **Total** | **100** | **74/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`domain-expertise-required` · `technical-heavy` — someone has to deeply understand NCCI classification and state rating rules, or partner with a retired premium auditor.

### Key assumptions to validate (3–5)

1. **Assumption:** AI can extract class codes, payroll basis, and sub inclusion from real-world audit worksheets accurately enough to be trusted. **How to test:** collect 25 real audit worksheets, run extraction, hand-verify against a premium auditor's read; require ≥95% field accuracy.
2. **Assumption:** SMB owners will pay $149 to self-check rather than reflexively call a consultant or eat the bill. **How to test:** put up a landing page during audit season, drive 500 trade-group/PPC clicks, measure paid conversion on a "upload your worksheet" CTA.
3. **Assumption:** A meaningful share of audits actually contain a recoverable overcharge (so the tool delivers a "win" often enough to drive word of mouth). **How to test:** run the scan on the 25 collected worksheets; target ≥25% containing at least one flaggable overcharge, consistent with consultant hit rates.
4. **Assumption:** Bookkeepers/fractional CFOs will distribute it. **How to test:** pitch 20 bookkeeping firms; require ≥5 willing to trial with clients.

### Risk flags

1. **Accuracy/liability risk:** A wrong "you were overcharged" that triggers a failed dispute burns trust instantly and could invite a dispute with the customer. Must show citations and frame as "review with your agent," not "guaranteed refund."
2. **Regulatory/scope risk:** Several states regulate who can adjust or represent on insurance matters; stay firmly on the "software that flags and drafts, owner signs and sends" side of the line.
3. **Incumbent response risk:** A motivated recovery consultant could build or buy a cheap competing tool — though their 35% model makes them slow to cannibalize.
4. **Data-maintenance risk:** NCCI rates and state rules change annually; the rules layer is perishable and must be kept current or it quietly goes wrong.

## 14. Structured verdict

```
Score:                  74/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder paired with a retired/working premium auditor or WC consultant
Time to revenue:        8–12 weeks (single-state self-serve review)
Capital to launch:      $15–30K ($ for rules build + audit-worksheet dataset acquisition)
Top 3 assumptions to validate first:
  1. Extraction accuracy ≥95% on 25 real audit worksheets vs. an expert read
  2. ≥25% of real audits contain at least one flaggable overcharge
  3. Paid conversion on a "upload your worksheet for $149" CTA during audit season
Kill criteria:
  - Abandon if extraction accuracy stays below 90% on real worksheets after the v1 rules build
  - Abandon if <2% paid conversion on 500+ targeted audit-season clicks
  - Abandon if <20% of sampled real audits contain any recoverable overcharge (tool rarely "wins")
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Collect 20–25 real workers' comp audit worksheets + matching payroll exports (from friendly bookkeepers, contractor contacts, trade-group asks). This dataset is the whole sprint.
- **Day 3–4:** Run extraction + a hand-coded classification check on them. Measure: extraction field accuracy, and what fraction contain a flaggable overcharge. Stand up a one-page landing site ("Got a workers' comp audit bill? Upload it, find out in 10 minutes if you overpaid — $149") and push ~500 clicks from trade groups + PPC.
- **Day 5:** Decide go / no-go on a **falsifiable** bar: ≥95% extraction accuracy AND ≥25% of worksheets containing a recoverable overcharge AND ≥2% landing-page paid conversion. Miss two of three → back to signal harvesting.
