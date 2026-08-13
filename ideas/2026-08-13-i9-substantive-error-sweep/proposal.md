---
title: "CureGone — I-9 back-catalog sweeper for staffing firms"
slug: i9-substantive-error-sweep
date: 2026-08-13
category: Compliance / US-SMB — Staffing and Light-Industrial Agencies (200–5,000 Active I-9s) Whose Old "Technical" Errors Became Fineable Overnight on 16 March 2026
complexity: Low
score: 78
verdict: GO
confidence: Medium
oneLiner: "Re-grades every I-9 you already filed against ICE's new substantive list, worst forms first, before the inspector counts them."
tags:
  vertical: Compliance
  model: SaaS
  geography: US
  secondary: [Compliance-driven, SMB, AI-agent, Document-AI, Staffing, Solo-builder]
axes:
  problem: 18
  demand: 14
  build: 12
  distribution: 12
  revenue: 12
  time: 9
  defensibility: 6
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# CureGone

## 1. One-liner

Re-grades every I-9 you already filed against ICE's new substantive list, worst forms first, before the inspector counts them.

## 2. Trend signal — why now?

On **16 March 2026**, ICE quietly rewrote which Form I-9 errors count as *substantive* versus *technical*. It did this by updating a webpage — no Federal Register notice, no proposed rulemaking. Morgan Lewis catalogued more than ten error categories that moved across the line, including missing employee date of birth, missing date next to the employee signature, incomplete List A/B/C document data in Section 2 *even where copies were retained*, missing first day of employment, and failure to check the alternative-procedure box for remote verification.

Why that specific change is the whole business: **the ten-day cure period no longer applies to those errors.** The good-faith exception exists only for technical violations. The moment a category is reclassified, every historical form carrying that defect stops being fixable-on-notice and starts being fineable-on-sight. Morgan Lewis's own worked example: an employer with 200 deficient forms faces **$57,600 to $572,200**.

The enforcement volume arrived at the same time. ICE is running I-9 audits at roughly **ten times the 2024 rate**, with over 12,000 audits projected for 2025. Penalties run **$288 to $2,861 per form** for paperwork violations, scaling to $28,619 per worker for repeat knowing-hire offences. The One Big Beautiful Bill Act is funding 10,000 new enforcement officers.

And staffing firms are the named target. EMPTrust's 2026 analysis is blunt about why: agencies carry a "high volume of new hires and decentralized onboarding processes," and firms placing remote or deskless workers are especially exposed because "any inconsistency in remote verification procedures or Section 2 timelines triggers immediate red flags." CDF Labor Law lists staffing among the industries where ICE has already levied significant penalties. When the Notice of Inspection lands, the firm has **three business days** to produce everything.

Here is the asymmetry that makes this a product and not a law-firm engagement. The recommended fix — an attorney-led internal audit — is priced per hour and paced per human. A 2,000-form back catalogue at a few minutes of paralegal attention per form is a five-figure project before anyone touches a correction. Most agencies in this size band will simply not commission it, and will instead find out their error rate during the three-day window.

Provenance:
  - Signal 1 (demand): ICE reclassified 10+ I-9 error categories from technical to substantive on 16 March 2026, eliminating the 10-day cure period; a 200-form deficiency now implies $57,600–$572,200 — https://www.morganlewis.com/pubs/2026/04/ice-rewrites-the-rules-on-form-i-9-violations — 2026-04
  - Signal 2 (economic): ICE conducting I-9 audits at ~10× the 2024 rate, 12,000+ projected for 2025, penalties $288–$28,619 per violation, staffing explicitly named among targeted industries — https://www.onblick.com/blogs/ice-i-9-audit-risk-rising-higher-penalties-and-new-rules-in-2026 — 2026
  - Signal 3 (feasibility): Staffing firms specifically targeted for I-9 audits due to high-volume decentralized onboarding, with only three business days to produce records after a Notice of Inspection — https://www.emptrust.com/why-are-staffing-firms-being-targeted-for-i-9-audits-in-2026/ — 2026
  Category: Regulatory arbitrage

## 3. The opportunity

The I-9 software market sells **onboarding**. WorkBright, Mitratech Tracker I-9, Equifax I-9 HQ — they all make sure the *next* form is filled correctly. Tracker I-9 starts around $2,500 per user per year; WorkBright's Smart I-9 runs $9.50–$19.99 per user per month.

None of them re-grade the forms you already filed against a list that changed in March 2026.

That is the gap, and it exists because of how the incumbents are shaped. Their value proposition is prospective correctness: adopt us, and from today forward your forms are clean. They have no commercial reason to walk backwards through a customer's archive and hand them a number like "you have 340 now-substantive defects worth up to $970,000." That report is a sales problem for an onboarding vendor and the entire product for us.

The other half of the gap is the artifact. An attorney-led audit produces privilege and a remediation memo, at hourly rates, over weeks. What the agency actually needs on the day the NOI arrives is a **triaged, prioritised, defensible file**: which forms are defective, under which of ICE's post-March categories, which are still lawfully correctable, which are not, and what the good-faith remediation record looks like. The law firm is the right buyer for the top 200 forms. Nobody serves the other 1,800.

So the wedge is not "replace your I-9 system." It is: *you already have thousands of forms sitting in a filing cabinet and a shared drive, ICE moved the goalposts in March, and you do not know your number.* We produce the number, ranked by dollar exposure, in an afternoon.

## 4. Target market

- **Primary customer:** US staffing, light-industrial, and healthcare-staffing agencies with **200–5,000 active I-9s** — typically $8M–$120M revenue, 3–25 internal back-office staff. Buyer is the Director of Compliance, VP of Operations, or in smaller shops the owner/CFO. Secondary buyer: the outsourced HR/PEO consultancy serving several such agencies.
- **Why they buy:** They are in the named target industry, running at 10× the historical audit rate, with a three-business-day production window and a back catalogue nobody has re-graded since the rules changed. The American Staffing Association's own framing of the adjacent fake-worker threat — quoting AllTek Staffing's Susie Dietrich, *"The bad actors think that we're an easy target"* — captures the sector's posture. On I-9 specifically the exposure is not a threat actor, it is the filing cabinet.
- **Rough TAM reasoning:** SIA counts 214 US companies at $100M+ staffing revenue in 2025, and the 57 largest IT staffing firms alone generate $27.2B — but those are the enterprise tail that already buys Tracker or Equifax. The addressable band is the several thousand mid-market and regional agencies below that line. ASA membership is in the low thousands of firms. Even at 2,500 realistically reachable US agencies in the 200–5,000 I-9 band, a $6K–$18K annual contract implies a $15M–$45M serviceable market — comfortably enough for a $5M ARR business without needing to win the category.
- **Why now for them:** The 16 March 2026 reclassification is retroactive in effect. Errors made in 2022 under the old taxonomy are graded under the new one at inspection. Every month that passes adds forms and adds risk, and the cure period that used to be the safety net is gone for exactly the categories most commonly botched in high-volume remote onboarding.

## 5. Product sketch (MVP)

- **Bulk ingest of the existing archive.** Drag in scanned PDFs, a shared-drive folder, or an export from the incumbent I-9 system. Handles the messy reality: mixed scans, photocopied document images, forms filled by six different branch coordinators.
- **Field-level re-grade against the post-March-2026 taxonomy.** Every form scored against ICE's current substantive/technical split, not the one in effect when it was signed. Each defect labelled with its category.
- **Dollar-ranked exposure register.** The headline number, and the queue behind it: forms sorted by penalty band and by whether they remain lawfully correctable. This is the screen the VP of Ops screenshots for the owner.
- **Correctable-vs-not triage.** The single most valuable distinction in the product. Substantive defects without a cure path get routed to counsel; the rest get a guided correction workflow that follows the legal convention of annotate-and-initial rather than silent overwriting.
- **Remediation trail.** Every correction timestamped, attributed, and reason-coded, producing the good-faith record that argues down a penalty even where the defect itself cannot be cured.
- **Three-day NOI mode.** One button that assembles the full production set — forms, correction log, remediation memo — in the order an inspector asks for it.
- **Attorney handoff pack.** An export shaped for outside counsel, so the firm's hours go into judgement on the hard 10% instead of data entry on the other 90%.

## 6. AI angle — what's load-bearing

Remove the AI and this product does not exist — it becomes a spreadsheet and a temp.

The load-bearing work is **document understanding on adversarially bad inputs**. A staffing firm's I-9 archive is not clean structured data. It is a decade of scans at varying resolutions, handwriting in every field, List A/B/C document images photographed at angles, Supplement A preparer sections half-completed, Spanish-language forms filed outside Puerto Rico. The model has to read each form, locate roughly forty semantically distinct fields, and decide field-by-field whether what is present satisfies the current ICE standard — including judgement calls like whether Section 2 document data is "incomplete" when the title is present but the issuing authority is blank.

That capability is the actual unlock. Reliable multi-field extraction from low-quality handwritten scans at a per-page cost low enough to run 5,000 forms for a few dollars is recent. Two years ago this was a bespoke OCR pipeline with a labelling budget; today it is an off-the-shelf vision model call with a strict output contract and a confidence threshold that routes ambiguous forms to human review.

The second AI job is **taxonomy mapping**: translating ICE's prose descriptions of the reclassified categories into deterministic per-field rules, and re-running the whole archive when the agency next moves the line by editing a webpage. That re-run capability is a product feature, because ICE has now demonstrated it will change the standard without rulemaking.

What is deliberately *not* AI: the legal conclusion. The product ranks and evidences; it does not opine on whether to correct a specific form. That line matters for both liability and for the attorney channel described in §9.

## 7. Localization angle (if any)

`N/A — this is a US-only play.` Form I-9 is a US federal instrument and the March 2026 reclassification is a US enforcement action. There is no localization axis; the regulatory specificity *is* the product. The analogous plays in other markets (UK right-to-work, EU equivalents) are different products with different taxonomies and would be separate builds, not translations.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** Two-part, deliberately. A one-time **archive sweep** at $1,500–$6,000 depending on form count (the land), then **$500–$1,500/month** for ongoing monitoring, re-grade-on-rule-change, and NOI-readiness mode (the expand). Blended ACV target **$9,000–$14,000**.
- **Why this pricing clears:** The comparison is not to WorkBright at $9.50/user/month — that is a different job. The comparison is to an attorney-led internal audit priced per hour across thousands of forms, and to a single substantive violation at $288–$2,861. One avoided defect on a mid-size archive pays for the year. The sweep is priced as a fraction of the number it discovers.
- **Rough math to $1M ARR:** 90 agencies × $11,000 ACV = $990K. Ninety customers out of a several-thousand-firm addressable band is a low-single-digit penetration rate.
- **Rough math to $5M ARR:** ~380 agencies at a $13,000 blended ACV, which requires two things to be true: (a) the monitoring subscription retains above 80% after the initial sweep panic subsides, and (b) the attorney and PEO channels in §9 produce repeatable referral volume rather than one-off wins. Neither is proven. This is the weakest link in the model and I am scoring it accordingly.
- **Expansion path:** Form count tiers as the agency grows; multi-entity rollups for firms with several operating companies; the attorney-handoff pack sold as a seat to the law firm itself; adjacent re-grade products when the next enforcement taxonomy shifts (E-Verify records, remote-verification attestations).

## 9. Go-to-market wedge — first 100 customers

- **The free exposure scan, sized to the panic.** Ingest up to 100 forms free and return the dollar-ranked defect register. This is a demo that produces a number the buyer did not previously have and cannot un-know. Conversion from "here is your $180,000 of newly-substantive exposure across a 10% sample" to a paid full sweep is the entire funnel, and it is testable in week one.
- **Immigration and employment counsel as the referral channel.** Every firm publishing "commission an immediate attorney-led internal audit" advisories right now — Morgan Lewis, CDF, Sheppard, and the long tail of regional employment boutiques — has clients who will balk at the hourly quote for a 2,000-form archive. We are the tool that makes those engagements affordable and the attorney's hours higher-value. Target the ~150 firms actively publishing on the March 2026 change; they have already done the demand generation.
- **ASA chapter and state staffing association meetings.** The American Staffing Association is actively training members on adjacent fraud threats and runs a Staffing Law & Compliance Conference. State associations (California, Texas, Ohio, Florida) hold compliance sessions where the buyer is in the room and the topic is already on the agenda. A 20-minute "what changed in March and what it costs you" talk with a live scan is a direct-booking motion.
- **Named-list outbound to the SIA mid-market.** SIA publishes largest-US-staffing-firms lists; the interesting names are the ones *below* the enterprise cut who lack a compliance department. Scrape the band, identify firms with remote/deskless placement models (the explicitly higher-risk profile), and send a one-page note with the March reclassification list and the per-form arithmetic on their estimated headcount.
- **PEO and outsourced-HR partners.** Firms servicing 10–40 staffing clients each. One integration conversation puts the scan in front of a portfolio.

## 10. Build complexity — justification

**Low.** The stack is off-the-shelf: a vision-language model for field extraction, a deterministic rules layer encoding the ICE taxonomy, a queue for human review of low-confidence forms, and a straightforward web app for the register and correction workflow. There is no novel ML, no custom infra, no integration dependency — the MVP ingests files, which is the lowest-friction possible input. A capable solo builder ships the scan-and-register core in **6–8 weeks**; the correction workflow and NOI production mode add another **4–6 weeks**. The genuinely hard part is not engineering, it is encoding the taxonomy correctly, which is a domain problem solved by reading primary sources and retaining an employment-immigration attorney as an advisor.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Compliance tooling. Product ranks and evidences; it does not give legal advice. Attorney-advisor relationship and clear UPL boundaries required from day one. |
| Ethical — no harm / dark patterns | ✅ | Helps employers comply with the law correctly. The free-scan motion is fear-adjacent but the fear is factually warranted and the numbers are the government's own. |
| Market exists (evidence above) | ✅ | 10× audit rate, named target industry, published penalty schedule, incumbents selling adjacent products at real prices. |
| 1–5 person team can build this | ✅ | Solo-to-pair build, ~3 months to full v1. |
| Launchable with <$50K / ₹40L | ✅ | Inference costs are trivial at this volume. Main spend is attorney advisory time and conference travel. Well under $25K. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 18/20 | Hair-on-fire and getting worse. Retroactive reclassification with the cure period removed, a three-day production window, 10× audit rate, and an explicitly named target industry. Docked 2 because the pain is episodic — acute at NOI, dormant otherwise — which is exactly what threatens the subscription half of the model. |
| Demand evidence | 15 | 14/15 | Unusually strong and all primary-sourced: a dated rule change from ICE, a worked penalty example from a top-tier firm, published audit-volume multiples, incumbents charging real money adjacent to the gap, and trade press naming staffing as targeted. Docked 1 only for the absence of direct verbatim buyer complaints — see risk flags. |
| Build feasibility | 15 | 12/15 | Off-the-shelf vision models plus a rules layer; file upload as the only required input. Not a 13–15 because handwritten low-quality scans at forty fields per form with legal consequences demands a real human-review loop and genuine accuracy engineering, not a weekend prompt. |
| Distribution clarity | 15 | 12/15 | The free-scan-produces-a-number motion is concrete and fast, and the attorney referral channel is unusually well-defined because the firms are already publishing on this exact change. Not higher because association-and-referral motions are relationship-paced, and no conversion rate here has been tested. |
| Revenue mechanics | 15 | 12/15 | Pricing is defensible against both the attorney-hours alternative and the per-form penalty. Land-and-expand is clean. Docked 3 for the honest weakness: this is a one-time sweep with a subscription bolted on, and post-sweep retention is a genuine unknown. |
| Time to first revenue | 10 | 9/10 | The free scan converts on the spot because it produces a dollar figure. Pre-selling sweeps before the correction workflow is finished is realistic. Weeks, not months. |
| Defensibility | 10 | 6/10 | Soft moat only. The taxonomy is public and copyable. What compounds: accumulated defect-pattern data across archives, the correction/remediation trail becoming the firm's system of record, attorney channel relationships, and being the one who re-runs everyone's archive the next time ICE edits the page. A funded incumbent could ship this in two quarters if it wanted to — it currently does not want to. |
| **Total** | **100** | **78/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required`

Needs someone who can get document extraction genuinely accurate on bad scans, paired with real employment-immigration domain knowledge — either a co-founder or a retained attorney advisor. This is not a build for someone unwilling to read primary regulatory sources carefully.

### Key assumptions to validate (3–5)

1. **Assumption:** Mid-market staffing firms have a materially defective back catalogue under the new taxonomy — error rates high enough that the exposure number is frightening. **How to test:** Run free scans on 10 agencies' 100-form samples. Measure the mean count of post-March substantive defects per 100 forms. If the median exposure comes back under ~$25,000 per 100 forms, the panic — and the pricing — evaporates.
2. **Assumption:** The dollar-ranked register converts to a paid full sweep at a rate that makes the free scan economic. **How to test:** Track sample-to-paid conversion across the first 25 scans. Below 20% and the funnel is a content-marketing exercise, not a sales motion.
3. **Assumption:** The subscription survives the sweep. **How to test:** This cannot be tested pre-launch; instead pre-sell annual rather than monthly on the first 20 customers and watch renewal at month 12. Treat the sweep as the business and the subscription as upside until proven.
4. **Assumption:** Employment-immigration counsel will refer rather than build the capability in-house or view us as disintermediation. **How to test:** 15 structured conversations with firms actively publishing on the March change. Ask directly whether they would route a 2,000-form archive to a tool.
5. **Assumption:** Extraction accuracy on real-world archive scans is high enough to publish a number a customer will act on. **How to test:** Hand-label 300 forms from three real archives and measure field-level precision/recall before selling anything.

### Risk flags

1. **Enforcement-posture risk (primary).** This entire business is priced off a March 2026 administrative reclassification made without rulemaking. What ICE changed by editing a webpage, ICE — or litigation, or an administration change — can reverse the same way. The 10× audit rate is likewise a policy choice, not a constant. A reversion to the old technical/substantive split would not zero the product, but it would gut the urgency and therefore the pricing.
2. **Customer-voice gap.** I could not source direct verbatim complaints from staffing compliance leads about the March reclassification. The evidence here is regulatory, legal-analyst, and trade-press — strong on the fact pattern, thinner on proof that the buyer has personally felt it yet. It is entirely possible the sector has not noticed a webpage edit. That is simultaneously the opportunity and the risk: a market that has not noticed its problem is a market that requires education-led selling, which is slower and more expensive than the §9 playbook assumes.
3. **One-time-purchase risk.** The sweep is inherently non-recurring. If post-sweep retention lands below ~60%, this is a services business with software margins rather than SaaS, and the $5M path requires continuous new logo acquisition instead of compounding.
4. **Liability and UPL boundary.** Publishing "these 340 forms are substantive violations" is a consequential claim. An extraction error that produces a false clean bill of health on a form later fined is a real exposure. Requires explicit scoping language, human-review gating on low-confidence forms, and attorney involvement in the taxonomy — non-negotiable, not a v2 concern.
5. **Incumbent response.** WorkBright, Mitratech, or Equifax could add retroactive re-grade to an existing distribution base. The defence is speed and focus, not moat.

## 14. Structured verdict

```
Score:                  78/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder strong on document extraction, paired with a
                        retained employment-immigration attorney advisor
Time to revenue:        4–8 weeks (free scan converts on the spot)
Capital to launch:      $15–25K (attorney advisory, inference, conference travel)
Top 3 assumptions to validate first:
  1. Real archives carry enough post-March substantive defects to frighten —
     free-scan 10 agencies, measure exposure per 100 forms
  2. Sample-to-paid-sweep conversion ≥20% across first 25 scans
  3. Extraction accuracy on genuine low-quality scans — hand-label 300 forms,
     measure field-level precision/recall before selling
Kill criteria:
  - Abandon if median exposure across 10 sampled archives is under $25,000 per
    100 forms — the number isn't scary enough to sell
  - Abandon if field-level extraction precision on real archive scans stays
    below 95% after two iterations — the legal claim can't be published
  - Abandon if ICE reverts the March 2026 reclassification or restores the cure
    period for the affected categories
  - Abandon if fewer than 3 of 15 employment-immigration firms will refer
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Build nothing. Read the primary sources — ICE's current substantive/technical listing and the top-tier firm analyses — and encode the reclassified categories into a hand-written checklist. Have an employment-immigration attorney review it for one billable hour. This checklist is the product's spine; if it cannot be made deterministic, stop here.
- **Day 3–4:** Get real forms. Approach 10 staffing agencies in the 200–5,000 I-9 band through ASA chapter contacts and direct outreach, offering a free manual re-grade of 100 forms under NDA. Grade them by hand against the Day 1–2 checklist. The goal is not a demo; it is the base rate.
- **Day 5:** Compute median exposure per 100 forms and, on the same call where you deliver it, quote the full-archive sweep.

**Falsifiable outcome:** Across ≥6 agencies that supply samples, the median newly-substantive exposure per 100 forms is **≥$25,000**, and **≥2 of the 6 verbally commit to a paid full sweep** on the delivery call. Miss either number and the urgency is imagined — the reclassification is real, but the market has not felt it, and this becomes an education-led slog rather than the fast-conversion motion the score assumes.
