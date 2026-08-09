---
title: "DeemedYes — expiry clock for prior-auth staff"
slug: prior-auth-clock-expiry
date: 2026-08-09
category: HealthTech / US-SMB — Independent Specialty Practices (3–40 Providers) Whose Medicare Advantage Prior Authorizations Blow Past the New 7-Day Legal Deadline Without Anyone Noticing
complexity: Medium
score: 76
verdict: GO
confidence: Medium
oneLiner: "Catches the Medicare Advantage request that ran past its legal deadline, so you can bill it as approved."
tags:
  vertical: HealthTech
  model: SaaS
  geography: US
  secondary: [Compliance-driven, SMB, AI-agent, Workflow-automation, Revenue-recovery]
axes:
  problem: 17
  demand: 12
  build: 10
  distribution: 12
  revenue: 12
  time: 7
  defensibility: 6
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# DeemedYes

## 1. One-liner

Catches the Medicare Advantage request that ran past its legal deadline, so you can bill it as approved.

## 2. Trend signal — why now?

On 1 January 2026 the CMS Interoperability and Prior Authorization Final Rule (CMS-0057-F) put a hard clock on Medicare Advantage, Medicaid/CHIP managed care and FFM plans: **72 hours for expedited requests, 7 calendar days for standard ones.** No more routine extensions without documented justification.

The interesting part isn't the deadline. It's what happens when a payer misses it. Under [42 CFR 422.568](https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-B/part-422/subpart-M/section-422.568), the regulation is explicit: *"If the MA organization fails to provide the enrollee and the physician or provider involved with timely notice of an organization determination as specified in this section, this failure itself constitutes an adverse organization determination and may be appealed."*

A silent payer is a legally appealable event. Industry compliance guidance is already spelling out the practical consequence — that when a payer blows the window, the authorization is deemed constructively approved, and the practice can bill the claim as approved provided it documents the deadline miss.

So there's a right sitting on the table. Nobody picks it up. The reason is mundane: practices track pending authorizations in spreadsheets, inbox reminders, and memory. The documented failure pattern is a request submitted, two weeks of silence, then a staff member spending 40 minutes on hold to confirm the payer even received it. Payers miss internal deadlines *without consequence until someone calls.* Nobody is calling, because nobody is counting days.

The scale of the counting problem: physicians average **40 prior authorizations per week**, consuming **13 hours of physician and staff time**, and **40% of practices employ staff dedicated exclusively to prior authorization**. That's a third of an FTE per physician whose entire job is chasing approvals — and the one number they don't track is the day count against a legal threshold that only started existing seven months ago.

```
Provenance:
  - Signal 1 (demand): AMA 2025 Prior Authorization Physician Survey — 40 PAs/physician/week, 13 hrs/week staff time, 40% employ PA-dedicated staff, 94% cite burnout — https://www.ama-assn.org/system/files/prior-authorization-survey.pdf — surveyed Dec 2025, reported 2026
  - Signal 2 (feasibility): CMS-0057-F effective 1 Jan 2026 sets 7-day/72-hour decision clocks; 42 CFR 422.568 makes untimely notice itself an appealable adverse determination — https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-B/part-422/subpart-M/section-422.568 — in force 2026
  - Signal 3 (economic): Compliance guidance confirms missed-deadline requests are deemed constructively approved and billable with documentation; denial-appeal tools already monetize at $3–10/appeal, proving budget exists — https://prombs.com/blog/prior-auth-2026-provider-compliance-guide/ — 2026
  Category: Regulatory arbitrage
```

## 3. The opportunity

Every vendor in this category is pointed the wrong way down the timeline.

CoverMyMeds, Availity, Aidin, Solum and the rest **track status**. They tell you a request is "pending." Pending is a state, not a clock. Their UI treats day 3 and day 19 as the same colour of yellow.

EZAppeal, DenialPilot, Muni Health and CareCloud **react to denials**. They're excellent at what they do — extract the denial letter, map clinical evidence to payer policy, generate an appeal in under 60 seconds, some for $3 a letter. But they need a denial letter to exist. A payer that says nothing at all produces no letter, so it produces no appeal, so it produces no revenue for anyone.

The gap is the silence. The most valuable prior authorization in a practice right now is the one where the payer never answered — because that one is legally won already — and it is the exact one that falls out of every existing system. Status trackers show it as pending forever. Appeal generators never see it.

What a focused team does 10× better: count days against the specific regulatory clock that applies to that request type and that payer category, and the moment it expires, hand the practice a dated, citation-backed packet that says *this is constructively approved, here is the regulation, here is the timestamp evidence, proceed and bill.*

This is not an AI-does-medicine play. It's a stopwatch attached to a statute, with the evidence assembly automated.

## 4. Target market

**Primary customer:** Practice administrator or revenue-cycle manager at an independent specialty practice with 3–40 providers — orthopedics, cardiology, gastroenterology, ENT, pain management, radiology. Specialties with high procedure volume and high prior-auth intensity. US only. The buyer is the person who signs off on the PA coordinator's overtime.

**Why they buy:** The pain isn't abstract. A scheduled procedure gets cancelled the morning of, because authorization never came through — the physician is idle, the OR or procedure room sits empty, the patient is distressed, and the revenue for that slot is simply gone. Manual tracking means practices "lose visibility over pending requests," miss follow-up deadlines and expiration dates, and leak revenue. Meanwhile 32% of physicians report requests are often or always denied, and 93% say prior auth delays care.

The specific emotional hook: the practice has been *waiting on a payer that legally already lost.* Once an administrator understands that, the silence stops being a bureaucratic fact of life and starts being an unpaid invoice.

**Rough TAM reasoning:** 120,900 physicians remain in independent practice as of January 2026, across 36.1% of practices that are still physician-owned. Target the procedure-heavy specialties in practices of 3–40 providers. Conservatively 8,000–15,000 practices fit the profile tightly. At a $600/mo average that's a $58M–$108M addressable ceiling — far more than enough headroom for a $5M ARR business, and unattractive enough in absolute terms that the big RCM vendors won't sprint at it.

**Why now for them:** The 7-day clock did not exist before 1 January 2026. Before that, "the payer is slow" had no legal remedy short of a general grievance. Now slowness is a determination you can act on. Practices have not rebuilt their workflows around a rule that is seven months old — and their existing software vendors haven't either.

## 5. Product sketch (MVP)

- **Clock-on-submission.** Every prior auth gets a timestamped countdown the moment it's logged — correctly classified as 72-hour expedited or 7-day standard, and correctly scoped to whether the payer is actually in CMS-0057-F scope (MA, Medicaid/CHIP managed care, FFM QHP — not commercial ERISA plans, which have different rules).
- **The expiry queue.** One screen, ranked by dollars at risk: requests that have expired, requests expiring in 24 hours, requests where the payer's clock was legitimately paused by a documented information request.
- **Deemed-approved packet.** On expiry, auto-assemble the evidence: submission timestamp, transmission receipt, payer acknowledgement (or documented absence of one), the applicable regulatory citation, the day count, and a signed cover letter. This is the artifact the practice puts in the chart and behind the claim.
- **Untimely-determination appeal draft.** Where the practice would rather appeal than bill through, generate the appeal that argues untimeliness itself as the adverse determination under 422.568 — a different argument from a clinical-necessity appeal, and one the existing appeal generators do not make.
- **Payer lateness scorecard.** Per-payer, per-service-line: how often this plan blows its window, average days to decision, how often silence resolved in your favour. This is the practice's own data, disaggregated the way the public CMS disclosures deliberately are not.
- **Escalation trigger.** When a payer's late rate crosses a threshold, draft the CMS complaint and the payer grievance, pre-filled with the pattern evidence.
- **Intake without integration.** Works from email/fax confirmations, portal screenshots, and CSV export on day one. EHR integration is an upgrade, not a prerequisite.

## 6. AI angle — what's load-bearing

Remove the AI and this product does not survive contact with a real practice.

The hard problem is not the countdown — that's arithmetic. It's that the inputs are unstructured garbage. Prior auth evidence arrives as fax confirmations, payer portal screenshots, PDF acknowledgement letters, and email threads where a rep says "we've requested additional records." A model has to read those and answer three questions that determine everything downstream: *when did the clock actually start, is this payer in scope for this specific rule, and did anything legitimately pause the clock?*

That last one is the whole ballgame. Payers pause the clock by requesting additional information. If the product cries "expired!" on a request that was validly tolled, the practice bills a service it wasn't entitled to bill and the tool has actively harmed them. So the model's real job is adversarial: assume the clock was paused, and only declare expiry when it can't find evidence of a valid pause. Classification of correspondence into *tolling event* versus *noise* is the load-bearing inference.

Second AI job: drafting two rhetorically distinct documents — the constructive-approval packet and the untimeliness appeal — grounded in the correct citation for the plan type, with the day math stated correctly. Cheap inference makes this economically trivial per document; at 40 PAs per physician per week, a rules-only system would drown in the exception cases.

## 7. Localization angle

`N/A — this is a US-only play.` The entire product is a wrapper around one country's federal regulation. 42 CFR 422.568 and CMS-0057-F have no analogue elsewhere, and the deemed-approved consequence is what creates the value. Any localization would be a different product, not a translation.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** $400/mo (up to 5 providers), $800/mo (6–15), $1,500/mo (16–40). Flat SaaS, not contingency. Contingency pricing on "deemed approved" claims invites the accusation that the vendor profits from encouraging aggressive billing — a reputational risk not worth the higher take rate in a clinical setting.
- **ACV:** ~$7,200 blended.
- **Rough math to $1M ARR:** 140 practices at $600/mo average. That's a reachable number for one founder doing direct outreach into a well-defined list.
- **Rough math to $5M ARR:** ~700 practices, requiring the move upmarket into 40–100 provider groups and MSOs at $2,500–4,000/mo, plus a billing-company channel where one RCM firm brings 20–50 practices under a reseller agreement. Realistically an 18–30 month path with two or three people selling.
- **Expansion path:** Per-provider seat growth as practices add physicians; the payer lateness scorecard becomes a standalone contract-negotiation product; extension from Medicare Advantage into commercial plans as state prior-auth reform laws (many with their own response deadlines) come into force.

The ROI story is arithmetic the buyer can do in their head: one recovered procedure authorization on a $3,000–8,000 procedure pays for the year.

## 9. Go-to-market wedge — first 100 customers

- **The audit as the pitch.** Ask a practice for a CSV of the last 90 days of prior auth submissions with dates. Run the clock retroactively. Hand back a one-page finding: *"31 of your Medicare Advantage requests blew the 7-day window. Here are 9 where you delayed or cancelled a procedure while waiting on a payer that had already lost."* That document sells itself, costs nothing but compute, and requires no product to exist for the first dozen conversations. This is the entire wedge — lead with it.
- **The specialty society and MGMA channel.** State MGMA chapters and specialty society administrator groups run regular meetings and listservs specifically for practice managers, and the 2026 rule change is currently the hottest agenda item in that world. Speak the audit findings, not a demo. Ten chapter presentations at 30–80 administrators each is a plausible first-50 pipeline.
- **Medical billing companies as a multiplier.** Independent RCM firms each service 10–60 small practices and are compensated on collections — meaning recovered revenue is directly their upside. Sign 5 billing companies as resellers and the first 100 practices arrive in clusters rather than one at a time. This is the single highest-leverage channel and should be worked in parallel from week one.
- **The lateness leaderboard as content.** Publish aggregate, anonymised per-payer lateness statistics quarterly. The public CMS disclosures are aggregated at contract level with no service breakdown — KFF has noted they offer little insight into what actually gets approved or denied. Real disaggregated lateness data is genuinely newsworthy in trade press, and it makes the product the reference source in its own category.
- **Direct outreach to PA coordinators.** 40% of practices employ someone whose full-time job is prior authorization. They're findable on LinkedIn by title. The message isn't "buy software," it's "here's a regulation from January that says you can stop waiting."

## 10. Build complexity — justification

**Medium.** Off-the-shelf: the web stack, document ingestion, LLM correspondence classification, PDF generation, e-fax and email intake. Nothing here needs a custom model or novel infrastructure.

The real work is domain encoding, not engineering: correctly mapping plan types to which clock applies, encoding tolling rules so the product never falsely declares expiry, and handling the messy reality of payer acknowledgement formats. HIPAA obligations mean a BAA, encryption, audit logging and access controls from day one — a known, bounded cost that adds a few weeks, not a research project.

A technical founder with a revenue-cycle advisor ships a credible v1 in 12–16 weeks. The retrospective-audit tool — which is the sales wedge — is buildable in three weeks and can start conversations long before the full product exists.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Product asserts rights the regulation explicitly grants. No licensure needed; it produces documentation, not medical or legal advice. Needs careful positioning as a documentation tool, plus HIPAA BAA compliance. |
| Ethical — no harm / dark patterns | ✅ | Helps providers claim an entitlement patients also benefit from — care proceeds instead of stalling. The ethical obligation runs the other way: the tool must be conservative about declaring expiry, never aggressive. |
| Market exists (evidence above) | ✅ | AMA survey quantifies the burden; competing appeal tools prove budget; 120,900 independent physicians in scope. |
| 1–5 person team can build this | ✅ | Technical founder + RCM advisor. 12–16 weeks to v1. |
| Launchable with <$50K / ₹40L | ✅ | Inference, hosting, HIPAA-compliant infra, legal review of the packet language. Well under $50K. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 17/20 | Cancelled procedures, idle ORs, 13 hrs/week of staff time, 94% burnout attribution. Felt weekly, costs real money. Not a 19 because the *specific* pain — unnoticed clock expiry — is currently invisible to the buyer, so it must be taught before it's felt. |
| Demand evidence | 15 | 12/15 | Strong indirect evidence: quantified AMA burden data, an existing paid appeal-tool category, a new federal rule. Docked because no one is yet searching for or buying *this exact* product — demand for the wedge is inferred, not observed. |
| Build feasibility | 15 | 10/15 | Standard stack and off-the-shelf inference, but HIPAA overhead plus genuinely tricky tolling logic put this at 12–16 weeks, not 6. |
| Distribution clarity | 15 | 12/15 | The retrospective audit is a concrete, cheap, high-conversion opener, and billing companies are a real multiplier. Docked because healthcare sales cycles run longer than the audit's persuasiveness suggests. |
| Revenue mechanics | 15 | 12/15 | Pricing benchmarked against a category that already charges; 140 practices to $1M is credible. The $5M path needs the upmarket move and channel to both work. |
| Time to first revenue | 10 | 7/10 | Audit-led selling can pre-sell before v1 ships, but practice procurement and BAA execution add weeks. Realistically 8–12 weeks post-launch. |
| Defensibility | 10 | 6/10 | Regulatory knowledge and accumulating per-payer lateness data compound into a genuine asset. But the core insight is copyable once visible, and an incumbent status-tracker could bolt on a countdown. Head start plus data, not a moat. |
| **Total** | **100** | **76/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required`

The regulatory encoding is where this succeeds or fails. A technical founder without a revenue-cycle person beside them will get tolling rules wrong and ship something that puts customers at billing risk.

### Key assumptions to validate (3–5)

1. **Assumption:** Payers miss the 7-day window often enough to matter — at least 5–10% of standard MA requests. **How to test:** Run the retrospective audit on 90-day submission logs from 10 practices. This is the single decisive number and it's cheap to get.
2. **Assumption:** Practices will actually act on a deemed-approval finding rather than keep waiting out of payer-relationship fear. **How to test:** Present real findings to 20 administrators and measure how many say they'd proceed to bill versus keep waiting. Stated intent is weak evidence, so follow the first 5 customers to see what they do.
3. **Assumption:** Billing companies will resell. **How to test:** Pitch 10 independent RCM firms with the audit output; look for 2+ signing a reseller LOI.
4. **Assumption:** Payers won't retaliate in ways that make practices abandon the tool — e.g. reflexively denying rather than going silent. **How to test:** Track denial-rate shifts among the first 20 customers over 6 months.
5. **Assumption:** Clock-start and tolling classification can hit >95% accuracy on real correspondence. **How to test:** Hand-label 500 real payer messages and measure.

### Risk flags

1. **Regulatory risk:** The product is a wrapper around one rule. CMS softening the timeframes, or clarifying that constructive approval doesn't extend to payment, would gut the core claim. CMS-0057-F has already been through a simplification-minded political environment.
2. **Payer counterattack:** The cheapest payer response to a deemed-approval trend is to stop going silent and start issuing fast reflexive denials. That's arguably better for patients, but it converts this product's market into the already-crowded denial-appeal market.
3. **Liability positioning:** If a practice bills on a wrongly declared expiry, the exposure is theirs but the blame lands here. Conservative defaults, clear documentation-tool framing, and legal review of packet language are non-negotiable, not polish.
4. **Incumbent bolt-on:** Availity or a major EHR could add a countdown column. They'd do it badly and late — the tolling logic and evidence packet are the hard parts — but they own the workflow surface.
5. **Market timing:** Independent practices are consolidating fast, down 152,200 physicians over eight years. The buyer segment is shrinking, which caps the ceiling and argues for moving upmarket to MSOs earlier than planned.

## 14. Structured verdict

```
Score:                  76/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder paired with a revenue-cycle/prior-auth domain expert
Time to revenue:        8–12 weeks post-launch; audit-led pre-sales can start immediately
Capital to launch:      $15–25K (HIPAA infra, inference, legal review of packet language)
Top 3 assumptions to validate first:
  1. Payer lateness rate ≥5–10% of standard MA requests — retrospective audit on 10 practices' 90-day logs
  2. Administrators will act on expiry findings rather than keep waiting — present findings to 20, track first 5 customers' actual behaviour
  3. Billing companies will resell — pitch 10 RCM firms, target 2+ reseller LOIs
Kill criteria:
  - Abandon if the retrospective audit across 10 practices shows <3% of MA requests exceeding the window — the entitlement is too rare to build on
  - Abandon if >60% of administrators shown real findings say they won't bill through for fear of payer relationships
  - Abandon if CMS or major MA plans clarify that constructive approval does not create a payment obligation
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Recruit 10 independent specialty practices (orthopedics, GI, cardiology) via MGMA chapter contacts and LinkedIn PA-coordinator outreach. Ask for one thing only: a CSV of prior auth submissions from the last 90 days with submission and decision dates, payer, and CPT.
- **Day 3–4:** Run the clock by hand — no product needed. For each practice compute: how many MA requests exceeded 7 days, how many exceeded with no tolling event visible, and estimated dollars attached to the procedures involved. Produce ten one-page findings documents.
- **Day 5:** Present each practice its own findings and ask the closing question: *"Would you have proceeded and billed these, and would you pay $600/mo to be told automatically?"* Also pitch 5 billing companies with the aggregate.

**Falsifiable go/no-go:** Proceed only if (a) the median practice shows **≥5% of MA requests past the window with no visible tolling event**, and (b) **≥6 of 10 administrators** say they would have proceeded to bill had they known, with **≥3** committing to a paid pilot. Below either threshold, the entitlement is either too rare or too scary to act on — and the idea dies here, cheaply.
