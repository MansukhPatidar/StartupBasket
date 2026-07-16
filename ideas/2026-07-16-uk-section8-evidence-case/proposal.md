---
title: "GroundProof — Section 8 case builder for UK landlords"
slug: uk-section8-evidence-case
date: 2026-07-16
category: PropTech / UK — Self-Managing Landlords & Small Letting Agents (Section 8 possession under the Renters' Rights Act)
complexity: Medium
score: 75
verdict: GO
confidence: Medium
oneLiner: "Reads your rent ledger and tenancy pack, proves your Section 8 ground holds, and assembles the court bundle."
tags:
  vertical: PropTech
  model: SaaS
  geography: UK
  secondary: [Compliance-driven, AI-agent, SMB, Solo-builder, Document-automation]
axes:
  problem: 17
  demand: 12
  build: 11
  distribution: 12
  revenue: 11
  time: 7
  defensibility: 5
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# GroundProof

## 1. One-liner

Reads your rent ledger and tenancy pack, proves your Section 8 ground holds, and assembles the court bundle.

## 2. Trend signal — why now?

On 1 May 2026 the Renters' Rights Act killed Section 21. For the first time since 1988, an English landlord cannot get a property back without **proving a statutory ground with evidence, in front of a judge**. Section 8 is now the only route, served on a brand-new prescribed Form 3A that requires the landlord to "state the grounds in full and explain specifically how those grounds apply" ([GOV.UK guidance](https://www.gov.uk/guidance/repossessing-your-privately-rented-property-after-1-may-2026)).

The pain is already visible ten weeks in:

- Section 8 possession claims are on course to rise **6.1%** as landlords adapt to the RRA ([Property Reporter](https://www.propertyreporter.co.uk/section-8-possession-claims-on-course-to-rise-61-as-landlords-adapt-to-rra.html)).
- Landlords face **£3,000 eviction bills** under Section 8 — court fees, solicitor bills, lost rent during delays ([Property118](https://www.property118.com/landlords-face-3000-eviction-bills-under-section-8-possession-claims/)); full-cycle estimates run **£3,000–£5,000** ([Landlord Heaven](https://landlordheaven.co.uk/eviction-cost-uk)).
- NRLA reports Section 8 cases averaging **over six months** to process — and a procedural defect means starting over ([OTS Solicitors](https://www.otssolicitors.co.uk/news/landlord-possession-court-delays-2026)).
- August (a UK portfolio tool) reports the **single most common reason a Ground 8 claim stumbles is a rent record that cannot prove the three-month arrears threshold at both the notice date and the hearing date** ([August](https://www.augustapp.com/blog/grounds-for-possession)).
- Courts now expect "contemporaneous, documented evidence rather than landlord assertions — dated rent ledgers, timestamped photographs, written communications, police incident reference numbers" ([Cope & Co](https://copeandco.co.uk/blogs/section-8-in-2026-the-evidence-that-wins-in-court)).
- The RRA also quietly moved the Ground 8 threshold from 2 months' arrears to **3 months** — a trap for every landlord working from pre-2026 knowledge ([Citizens Advice](https://www.citizensadvice.org.uk/housing/eviction/getting-evicted/renting-privately/check-your-section-8-notice/)).

Provenance:
  - Signal 1 (demand): Section 8 now sole possession route; claims rising 6.1%; £3,000+ per eviction; 6-month processing; defective notices restart the clock — https://www.propertyreporter.co.uk/section-8-possession-claims-on-course-to-rise-61-as-landlords-adapt-to-rra.html and https://www.property118.com/landlords-face-3000-eviction-bills-under-section-8-possession-claims/ — observed 2026-07-16
  - Signal 2 (feasibility): LLM document understanding now reliably reads rent ledgers, tenancy agreements and correspondence threads; incumbent tools (DocWizard AI, Abodient, Landlord Heaven) generate notices from Q&A but none validate against the landlord's actual documents or build the court-stage bundle — https://abodient.ai/guides/section-8-eviction, https://landlordheaven.co.uk/form-3-section-8 — observed 2026-07-16
  - Signal 3 (economic): Solicitors charge £350 to serve a notice and £1,000–£2,500+ for a straightforward eviction; court fee £415 from July 2026; template packs already selling into the gap; Goodlord, August and OpenRent all publishing into the segment — https://landlordadvice.co.uk/section-8-possession-claim-costs-court-fees-and-legal-expenses-explained/ and https://residentiallandlord.co.uk/court-fees-rise-landlord-possession-costs/ — observed 2026-07-16
  Category: Regulatory arbitrage

## 3. The opportunity

The incumbents solve the easy half. DocWizard AI, Landlord Heaven and Abodient ask the landlord questions and print a Form 3A. Fine — but the notice was never where cases die. Cases die because the landlord's *evidence* doesn't support the ground: the rent ledger can't prove 3 months' arrears at both statutory dates, the deposit wasn't protected (court can refuse possession on most grounds for this), the property needed a licence it doesn't have, or the particulars are vague enough for the tenant's duty solicitor to get an adjournment. Then six months and £7,000+ of lost rent evaporate.

Nobody reads the landlord's actual documents and tells them, *before they serve*, whether their case survives contact with a judge. And nobody assembles the court-stage artefacts — paginated bundle, chronology, witness statement, arrears schedule in the format judges expect — which is precisely the work the £2,000 solicitor invoice pays for. That's the product: not a form filler, a **case readiness engine**. The wedge is the terror of restarting a six-month queue.

Solicitors won't build this — the confusion *is* their billable model. The template shops won't — they'd have to stop selling static PDFs. Generic landlord software (Landlord Vision, Lendlord) treats possession as an edge case.

## 4. Target market

- **Primary customer:** Self-managing landlords in England with 1–15 properties. England has ~2.3M landlords; the English Private Landlord Survey has consistently shown ~80% own fewer than five properties and roughly half self-manage. Secondary: small independent letting agents (1–10 staff) who now carry concurrent statutory liability under the RRA, and fixed-fee eviction firms wanting drafting leverage.
- **Why they buy:** A tenant has stopped paying (average English rent ~£1,300/month walks out the door monthly) or is wrecking the property, and the only exit runs through a court that punishes any paperwork defect with a restart. Their words, from every landlord forum since May: "I can't afford to get this wrong."
- **Rough TAM reasoning:** Landlord possession claims have historically run ~20,000+ per quarter in England & Wales (MoJ quarterly statistics), and Section 8's share is now 100% of the private landlord flow and growing. Even 80,000 addressable cases/year × £200 = £16M annual spend on case prep alone, before subscription revenue from anxious portfolio holders who haven't filed yet.
- **Why now for them:** Ten weeks ago Section 21 let them evict with a form and no reasons. That escape hatch is welded shut. Every arrears situation that starts today ends in an evidence-based hearing.

## 5. Product sketch (MVP)

- Upload the case file: tenancy agreement, rent ledger or bank statements, deposit protection certificate, gas/EPC/licensing docs, correspondence (email/WhatsApp exports), photos or incident reports.
- **Ground eligibility verdict:** for each candidate ground (8, 10, 11, 12, 14, the new RRA grounds), a pass/fail with the exact evidence line that supports or sinks it — e.g. "Ground 8 fails: arrears reached 3 months on 4 June but partial payment on 28 June drops you below threshold; here's the projection to hearing date."
- **Fatal defect scan:** unprotected deposit, missing prescribed information, unlicensed HMO, wrong notice period for the ground mix, pre-RRA assumptions (2-month arrears rule) — the things a duty solicitor finds in five minutes.
- **Form 3A particulars drafter:** ground statements written from the actual documents, with dates and amounts cited, not boilerplate.
- **Service pack:** correct notice periods computed per ground, proof-of-service checklist and templates.
- **Court bundle assembler:** paginated PDF bundle — chronology, arrears schedule in judge-friendly format, witness statement draft, indexed exhibits — regenerated when facts change before the hearing.
- **Hearing-date re-check:** re-run the arrears test the week of the hearing; alert if a tenant payment just killed Ground 8 and Ground 10/11 fallback wording is needed.

## 6. AI angle — what's load-bearing

The AI reads unstructured evidence — a 14-month bank statement export, a 200-message WhatsApp thread, a scanned tenancy agreement — and maps it onto statutory tests with dates and amounts. That extraction-and-reasoning layer *is* the product; remove it and you're back to a static template pack, which already exists at £49 and doesn't stop anyone losing at the hearing. The generative half (particulars, witness statement, chronology) is grounded in the extracted facts with citations back to the exhibit page, which is also what keeps it defensible on accuracy: every claim in the draft links to a document the landlord can check.

## 7. Localization angle (if any)

This is jurisdiction-locked by design — England-only at launch (the RRA applies to England; Wales and Scotland have separate regimes that become expansion modules, not day-one scope). Deep locality is the moat: prescribed Form 3A, Schedule 2 grounds as amended by the RRA, county-court bundle conventions, deposit-scheme quirks. A generic global "legal AI" cannot compete here without doing all the same statutory homework. No payment-rail or language localization needed.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** £199 per case (validation + notice + service pack) and £349 for case + court bundle; £24/mo "Portfolio Watch" subscription for landlords not currently evicting (arrears-threshold monitoring, document vault, compliance status per tenancy). Agents: £99/mo for 5 active cases.
- **ACV:** Blended ~£250 per transactional customer; ~£290/yr per subscriber.
- **Rough math to $1M ARR (~£800K):** ~2,400 paid cases/year (≈3% of the addressable Section 8 flow) plus ~750 subscribers. Achievable purely through landlord-forum and search channels.
- **Rough math to $5M ARR:** add letting-agent seats (10,000 independent agencies in the UK; 1,500 × £99/mo ≈ £1.8M) plus white-label drafting for fixed-fee eviction firms who currently pay paralegals to build bundles.
- **Expansion path:** case → subscription (a landlord who just survived one eviction is the easiest Portfolio Watch sale in the world) → agent multi-tenancy → Wales/Scotland modules.

## 9. Go-to-market wedge — first 100 customers

- **Forum mining:** Property118, LandlordZONE forums and the r/uklandlords subreddit are full of named, active threads from landlords mid-crisis about Section 8 evidence. Reply genuinely, run a free "will my Ground 8 survive the hearing date?" checker as the lead magnet. The people in these threads are days from spending £2,000 — 20 conversions from 200 engaged threads is conservative.
- **Facebook landlord groups:** UK Landlords & Letting Agents groups (multiple 30K–80K-member groups) allow tool posts on promo days; RRA panic content is currently the highest-engagement topic in all of them.
- **SEO on the new statutory surface:** "Form 3A", "Ground 8 three months", "Section 8 evidence bundle" are new or newly-reshaped queries with template shops ranking on thin content. Publish the definitive free grounds-and-evidence checker; incumbents (Landlord Heaven, templatesuk) prove the search volume converts.
- **Fixed-fee eviction firms:** ~30 firms dominate "eviction services UK" search. Offer white-label bundle drafting at £75/case — they charge the landlord £400 for the same artefact. Five firms = predictable case flow while direct channel ramps.
- **NRLA/landlord association adjacency:** sponsor RRA webinars (every association is running them monthly right now); one webinar to 500 panicking landlords beats a quarter of cold content.

## 10. Build complexity — justification

Medium. Document extraction, statutory rules engine, and PDF bundle generation are all off-the-shelf-LLM plus deterministic date/arrears math — no custom models. The real work is encoding Schedule 2 grounds as amended, notice-period logic, and the defect checklist with a solicitor advisor reviewing the rulebook (budget £5–8K of consultancy). 10–14 weeks to a v1 covering the arrears grounds (8, 10, 11) which are ~70% of real cases; ASB and the exotic grounds ship later. UPL positioning matters: document assembly + information for litigants-in-person, not reserved legal activities — same lane the existing template businesses occupy, with clearer disclaimers and a referral path to SRA-regulated firms for contested cases.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Document preparation/information for litigants-in-person is unreserved; conducting litigation is not offered. Same lane as existing template/notice services. |
| Ethical — no harm / dark patterns | ✅ | Tool enforces evidence discipline; bad cases get told they're bad. Tenant-side stakes argue for accuracy citations, which the product has. |
| Market exists (evidence above) | ✅ | £3K solicitor spend per case, tens of thousands of cases/year, paid template incumbents. |
| 1–5 person team can build this | ✅ | Solo dev + solicitor advisor. |
| Launchable with <$50K / ₹40L | ✅ | Main costs: legal rulebook review, LLM inference, content. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 17/20 | Hair-on-fire: £1,300/mo bleeding, six-month queue, a defect restarts it. The landlord mid-arrears would pay this week. Slightly below max because it's episodic — most landlords aren't evicting at any given moment. |
| Demand evidence | 15 | 12/15 | Hard cost data, rising claim volume, active forum panic, paid incumbents at the shallow end. Docked because the specific "validate my evidence" SKU is unproven — buyers may anchor on £49 templates until they lose once. |
| Build feasibility | 15 | 11/15 | 10–14 weeks with discipline. Statutory rulebook encoding + accuracy bar (citations to exhibits) is real work; a wrong verdict here costs the customer months. |
| Distribution clarity | 15 | 12/15 | Named forums, named FB groups, new-query SEO, white-label firms. Conversion math plausible but unproven; landlord audiences are cheap to reach and currently obsessed with exactly this topic. |
| Revenue mechanics | 15 | 11/15 | Per-case pricing benchmarks cleanly against £350–£2,500 solicitor spend. Episodic purchase is the weakness; subscription attach rate is the guess. |
| Time to first revenue | 10 | 7/10 | Ship arrears-grounds v1 in ~12 weeks; buyers are in-market the day it launches. Not faster because the rulebook must be right before charging. |
| Defensibility | 10 | 5/10 | Execution moat plus the encoded statutory/case-law corpus and accumulating anonymized defect data. Copyable by a funded legal-tech player, but the niche is below their radar and above the template shops' ambition. |
| **Total** | **100** | **75/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required` — builder needs LLM document-pipeline chops and a retained housing solicitor. Content instincts help; the channel is education-shaped.

### Key assumptions to validate (3–5)

1. **Assumption:** Landlords will pay £199–£349 for validation + drafting instead of £49 for a template or £1,500 for a solicitor. **How to test:** Landing page with the free Ground 8 checker; measure checker→paid intent on 300 forum-sourced visitors.
2. **Assumption:** LLM extraction reads real-world rent ledgers/bank exports accurately enough to compute arrears at two statutory dates. **How to test:** Collect 20 real (anonymized) case files from forum volunteers; hand-verify extraction accuracy ≥98% on dates/amounts.
3. **Assumption:** Positioning as document assembly for litigants-in-person keeps the product outside reserved legal activities. **How to test:** Written opinion from an SRA-regulated solicitor before launch (budgeted).
4. **Assumption:** Fixed-fee eviction firms will outsource bundle drafting at £75/case. **How to test:** Ten cold calls; two pilots.

### Risk flags

1. **Regulatory risk:** If courts or the SRA reclassify AI-drafted particulars as reserved activity, the model shifts to solicitor-in-the-loop and margins compress. Watch the ongoing LSB review of AI in legal services.
2. **Market timing (transition spike):** Part of today's panic is transition noise. Steady-state Section 8 volume could settle lower once the market adapts — though possession need itself is structural.
3. **Platform/incumbent risk:** NRLA or Goodlord could bundle a "good-enough" version into membership. Mitigation: white-label to them rather than fight them.
4. **Accuracy liability:** A wrong "your case is ready" verdict costs a customer months. Every verdict must cite exhibits; insurance and disclaimers are launch requirements, not afterthoughts.

## 14. Structured verdict

```
Score:                  75/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder + retained housing solicitor advisor
Time to revenue:        12–16 weeks (v1 covering arrears grounds)
Capital to launch:      £15–25K ($19–32K) incl. legal rulebook review
Top 3 assumptions to validate first:
  1. £199+ willingness-to-pay vs. £49 templates — free-checker funnel test on forum traffic
  2. ≥98% extraction accuracy on real rent ledgers — 20-case hand-verified pilot
  3. UPL positioning survives solicitor review — written opinion pre-launch
Kill criteria:
  - Abandon if <3% of free-checker users show paid intent after 500 uses
  - Abandon if extraction accuracy on real case files can't reach 98% on dates/amounts within 6 weeks
  - Abandon if solicitor opinion concludes the validation verdict itself is a reserved activity
```

## 15. Next step — 1-week validation sprint

- Day 1–2: Build the free "Ground 8 survival checker" — paste your arrears history, get pass/fail at notice date + projected hearing date with the 3-month RRA rule applied. One page, no accounts.
- Day 3–4: Post it into three Property118/LandlordZONE threads and two Facebook landlord groups where Section 8 evidence is being actively discussed; run £100 of search ads on "Form 3A" and "Ground 8 three months".
- Day 5: Decide go / no-go: **go if ≥300 checker completions and ≥8% click through to the "get the full case pack — £199" waitlist with email captured.** Anything less says landlords will keep buying templates and losing.
