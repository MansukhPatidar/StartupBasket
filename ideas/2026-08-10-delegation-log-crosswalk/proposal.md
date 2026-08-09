---
title: "DelegaCheck — inspection crosswalk for research sites"
slug: delegation-log-crosswalk
date: 2026-08-10
category: HealthTech / US-SMB — Independent and SMO-Owned Clinical Research Sites (2–25 Staff, 5–60 Active Studies) Whose Delegation Logs, 1572s, CVs and Training Records Silently Contradict Each Other
complexity: Medium
score: 75
verdict: GO
confidence: Medium
oneLiner: "Finds the day an unqualified person touched your study, before an FDA inspector reads your three logs against each other."
tags:
  vertical: HealthTech
  model: SaaS
  geography: US
  secondary: [Compliance-driven, AI-agent, SMB, Solo-builder, Document-intelligence]
axes:
  problem: 16
  demand: 11
  build: 11
  distribution: 12
  revenue: 11
  time: 8
  defensibility: 6
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# DelegaCheck

## 1. One-liner

Finds the day an unqualified person touched your study, before an FDA inspector reads your three logs against each other.

## 2. Trend signal — why now?

Three things moved at once, and they moved in the site's direction.

**The inspection got sharper.** The FDA formalized Remote Regulatory Assessments as a permanent oversight mechanism through guidance issued in June 2025, and the FDORA-mandated BIMO guidance was finalized in December 2025. Remote means document-first. An inspector who isn't standing in your office doesn't watch your coordinator work — they ask for the delegation log, the 1572, the CVs and the training certificates, and they read them against each other from a desk. Cross-document contradiction used to be something you could talk your way past in person. Now it's the whole exam.

**The staff churn makes contradiction inevitable.** The Society for Clinical Research Sites found annual turnover for patient-facing clinical research professionals has risen to between 35% and 61%. A delegation log is a historical record of who was authorized to do what, on which dates, with training documented *before* the first task. At 50% turnover across 30 open studies, that record is being rewritten constantly by people who weren't there when the earlier rows were written. The log doesn't decay because sites are lazy. It decays because the humans who knew the context left.

**The document-reading finally got cheap enough.** Reconciling a delegation log against a 1572 against a stack of PDF CVs and GCP certificates is exactly the task that was impossible to automate in 2022 and is now a solved document-extraction problem — dates, names, roles and signatures pulled out of scanned PDFs with enough reliability to flag a contradiction for a human to confirm.

The pain is well-documented and specific. From Advarra's audit guidance, common findings include "outdated investigator site staff CVs, incomplete or missing required documents such as IRB approval letters, IRB approved Informed Consent Forms (ICFs), signed protocols, expired laboratory certification, staff training." From GCP Blog's breakdown of delegation log failures: "A start date that precedes documented training and authorization means an unqualified person performed a study task." And on the reading method itself: "The log has to agree with the Form FDA 1572 sub-investigator listing and with the CVs and training records, and inspectors read all three against each other."

That last sentence is the entire product. Inspectors read three documents against each other. No software does.

```
Provenance:
  - Signal 1 (demand): Delegation-log/1572/CV/training cross-document mismatch is a recurring, named audit finding; "when the log shows a delegatee whose training postdates their first delegated task, the discrepancy is the finding" — https://gcpblog.org/the-delegation-of-authority-log/ and https://www.advarra.com/blog/investigator-site-file-audit/ — observed 2026-08-10
  - Signal 2 (feasibility): FDA formalized Remote Regulatory Assessments as permanent oversight (June 2025 guidance) with FDORA-mandated BIMO guidance finalized December 2025 — document-first inspection raises the value of pre-reading your own documents; combined with document-extraction models now reliable enough to pull dates/names/roles from scanned CVs and certificates — https://www.thefdagroup.com/blog/bimo-inspections — observed 2026-08-10
  - Signal 3 (economic): Sponsors already reimburse site eISF/eReg costs as a site-budget line item ("Sponsors commonly reimburse sites for the cost of eBinders on a per-trial basis, typically achieved through a separate line item on the site budget"); US clinical trial investigative site network market $3.34B in 2025 growing ~6% CAGR, with independent sites at 38.0% share in 2026 — https://www.florencehc.com/florence-ebinders-faq/ and https://www.precedenceresearch.com/press-release/us-clinical-trial-investigative-site-network-market — observed 2026-08-10
  Category: Tech-unlock
```

## 3. The opportunity

The eRegulatory vendors — Florence eBinders, Complion, CRIO eReg, RealTime — won the last decade by moving the three-ring binder into the cloud. They are very good at *storage*: version control, e-signatures, remote monitor access, and expiration alerts on individual documents. CRIO's eReg explicitly advertises tracking "document owners and expiration dates" with alerts.

Here's what none of them do. They treat each document as a self-contained object with its own expiry date. An inspector doesn't. An inspector treats the documents as a **system of claims that must corroborate one another**, and looks for the place where they don't:

- The delegation log says Jane started drawing labs on 12 March. Jane's GCP certificate is dated 4 April. That's a finding, and every document involved is individually current, unexpired, and correctly filed.
- The delegation log lists a sub-investigator the 1572 never named. Both documents are signed, approved and in the binder. That's a finding.
- A coordinator's CV shows an affiliation she left two years ago, while the delegation log has her performing eligibility assessments last month. Neither document is "expired." That's a finding.
- A staff member was delegated a task on a protocol version they were never re-trained on after Amendment 3. Everything is filed. That's a finding.

Every one of those passes an expiry-date check and fails an inspection. The incumbent's alert fires on the wrong axis — it asks "is this document old?" when the inspector asks "do these documents agree?"

This is a genuinely different product, not a feature gap, because the unit of analysis is different. Storage vendors index by document. This indexes by **person-study-date-task** and asks whether, on every date that person did something, the paperwork authorizing it already existed. That's a timeline reconciliation across four document types, and it's the thing a human coordinator does badly at 3am the night before a monitoring visit.

The wedge is that I don't have to displace the eISF to sell this. I read what's already in it.

## 4. Target market

**Primary customer:** The Regulatory Coordinator, Site Director, or Quality/Compliance lead at an independent or SMO-owned clinical research site in the US — 2 to 25 staff, 5 to 60 active studies, typically running Phase II–IV industry-sponsored trials. Dedicated research sites, not academic medical centers (AMCs have institutional QA departments and 18-month procurement; skip them for now). The buyer is often the person who personally maintains the delegation logs.

**Why they buy:** Because a 483 or a serious sponsor audit finding is an existential business event for a site whose entire revenue depends on sponsors continuing to place studies with them. Sites do not get repeat business from a sponsor whose monitor found unqualified staff performing delegated tasks. The pain is not the fine — sites rarely get fined. The pain is the sponsor quietly stopping the flow of new studies. Every site director knows a site that died this way.

The daily version of the pain is smaller and more constant: the pre-monitoring-visit scramble. As one industry guide describes it, coordinators "prepare reactively instead of operationally, waiting for the CRA's confirmation email and then scrambling to reconcile source notes, chase signatures, and locate lab ranges." That scramble happens every 6–8 weeks per study. At 30 studies, that's a scramble most weeks of the year.

**Rough TAM reasoning:** The US clinical trial investigative site network market was $3.34B in 2025, with independent sites projected at 38.0% share in 2026. Estimates of dedicated US research sites run in the low thousands — call it 3,000–5,000 sites that are commercially independent enough to buy their own software, plus the SMO networks above them that would buy multi-site. At $400–900/mo, a few hundred sites is a real business. I don't need market share; I need 200 customers.

**Why now for them:** Remote Regulatory Assessments became permanent in 2025 and BIMO guidance finalized in December 2025. Document-first inspection is the new normal, and it rewards sites that have pre-read their own documents the way the inspector will. Meanwhile turnover at 35–61% means the institutional memory that used to hold the delegation log together is gone.

## 5. Product sketch (MVP)

- **Connect or drop.** Point it at the eISF (Florence, Complion, CRIO, RealTime) via export, or just drag in a folder of PDFs per study. No migration, no replacing anything.
- **The crosswalk report.** For each study: a person-by-person timeline showing every delegated task start date, laid against that person's GCP training date, CV date, medical/nursing license validity window, 1572 listing, and protocol-version training. Contradictions surface as ranked findings.
- **"Unauthorized window" detection** — the flagship check. Every date range where a named person was performing a delegated duty without the authorizing paperwork already in place. This is the single finding inspectors hunt for, and it's expressed as a specific person and a specific span of days.
- **1572 ↔ delegation log ↔ CV reconciliation.** Names on one document and not the others, role mismatches, affiliation drift.
- **Amendment re-training gaps.** After each protocol amendment, who performed delegated tasks without documented re-training on the new version.
- **Pre-monitoring-visit packet.** Run before the CRA arrives: findings, severity ranking, and a plain-language note on what to fix versus what needs a deviation/CAPA (because backdating isn't an option and the tool should say so explicitly).
- **Portfolio view for multi-site SMOs** — same checks rolled up across sites, so a network compliance lead sees which site is carrying risk.

## 6. AI angle — what's load-bearing

Remove the AI and this product cannot exist. The inputs are unstructured: scanned CVs in a dozen formats, GCP certificates from a dozen issuers, delegation logs that are Excel at one site and a signed PDF at the next, 1572s with handwritten additions. Getting `person → role → task → start date → training date → license window` out of that pile is the entire technical problem, and it's the part that was not feasible three years ago.

The reconciliation logic on top is deterministic and should be — once you have structured dates, "training postdates first delegated task" is a comparison, not a judgment. That's the right architecture for a compliance tool: AI does extraction, rules do the finding, and every flag cites the source document and page so a coordinator can verify it in five seconds. A hallucinated compliance finding is worse than no finding, so the tool never asserts anything it can't point at.

Cheap document extraction is precisely what changed. This is a tech-unlock play, not a regulatory one — the regulation has been stable for years; the ability to read the pile is what's new.

## 7. Localization angle (if any)

N/A — this is a US-first play, deliberately. The wedge is FDA-specific: Form 1572, BIMO inspections, 21 CFR 50/54/56/312. The obvious expansion is EU sites under ICH E6(R3), where delegation logs are equally required but the 1572 doesn't exist — a real market, but a different rule set and worth doing only after the US version works. India and LatAm have large and growing site populations but far lower willingness to pay for site-side compliance software, since sponsors there push CRO-side oversight instead.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** $499/mo for a single site up to 15 active studies; $899/mo up to 40 studies; SMO network pricing at $350/site/mo for 5+ sites. Annual prepay discount, because sites budget annually and sponsors reimburse annually.
- **ACV:** ~$7,200 blended.
- **Rough math to $1M ARR:** 140 sites × $600/mo × 12 = $1.0M. That's roughly 3–4% of the addressable independent site population. Achievable.
- **Rough math to $5M ARR:** ~700 site-equivalents, which realistically means winning SMO networks rather than adding single sites one at a time — three or four 100-site networks plus a long tail. Requires the portfolio view to be genuinely good, and probably requires a second product line (see expansion).
- **Expansion path:** Start at delegation/1572/CV/training. Expand to the rest of the ISF checklist (IRB approval currency vs. consent version in use, lab certification windows vs. sample collection dates, IP accountability). Then sell the same reconciliation engine *upward* to sponsors and CROs who want to pre-screen their sites before an inspection — a much higher ACV, and the natural year-three move.

The reimbursement mechanic matters more than the price. Sponsors already reimburse eISF costs through a site-budget line item. A site that can get this into the startup fee line is spending someone else's money, which collapses the price objection. Part of the sales motion is literally telling sites how to bill it.

## 9. Go-to-market wedge — first 100 customers

- **Free crosswalk on one study, as the entire top of funnel.** A site sends the documents for a single active study; they get back the findings report within 24 hours. This is the demo — because the report will find something at nearly every site, and the finding is specific enough to be undeniable ("Jane Doe performed delegated task X for 23 days before her documented GCP training"). Nothing sells a compliance tool like showing the buyer their own live exposure. Run the first 30 of these manually if needed.
- **SCRS and ACRP, where this exact audience already gathers.** The Society for Clinical Research Sites is the trade body for precisely this buyer, and ACRP runs the coordinator-level conference circuit. Sponsor a small booth, but more importantly run a session titled after the finding itself — "The three documents inspectors read against each other" — and collect the room. Site conferences are small enough that 100 conversations is a two-day sprint.
- **Target the SMO networks directly, top-down.** There are a manageable number of multi-site networks and site-management organizations in the US. Each one is 10–100 sites in a single contract. A network compliance lead who sees a portfolio risk view will buy for the whole network. This is where $1M turns into $5M, and it's a list you can build by hand in a week.
- **Cold outreach to sites that just posted a coordinator job.** Turnover is the trigger event — a departing coordinator is exactly when delegation logs break. Job postings for CRC roles are public and dated. Reach the site director in the two weeks after they post, when the pain is fresh and named.
- **CRA and monitor referrals.** CRAs visit dozens of sites and see the same failures repeatedly. They aren't the buyer but they are the trusted voice, and a tool that makes their monitoring visits shorter is something they'll recommend unprompted.

## 10. Build complexity — justification

**Medium.** The extraction layer is the real work — CVs, certificates, licenses and logs arrive as scanned PDFs in inconsistent formats, and getting dates and names out reliably enough that findings aren't noise takes iteration against real documents. The reconciliation rules themselves are straightforward deterministic date logic once the data is structured. No custom models needed; off-the-shelf document AI plus a rules engine plus a standard web app.

Call it 12–16 weeks to a v1 that handles the four core document types for a single study, with the first 20 customers' documents processed semi-manually while the extraction accuracy climbs. eISF integrations come later — start with folder drop and export files, because that's what sites can do today without their vendor's cooperation.

The genuine risk to the timeline isn't engineering, it's domain calibration: knowing which contradictions are real findings versus normal noise requires a clinical research QA person in the loop from week one. Budget for an advisor, not just a codebase.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Reads documents the site already owns. No PHI required — delegation logs, CVs and training records are staff documents, not patient data, which keeps HIPAA scope narrow. |
| Ethical — no harm / dark patterns | ✅ | Improves subject safety by catching unqualified staff performing study tasks. The tool explicitly refuses to help backdate; it routes real gaps to the deviation/CAPA process. |
| Market exists (evidence above) | ✅ | Named recurring audit finding, existing eISF vendors with paying site customers, sponsor-reimbursed budget line. |
| 1–5 person team can build this | ✅ | Two builders plus a clinical research QA advisor. |
| Launchable with <$50K / ₹40L | ✅ | Document AI inference, hosting, one conference booth. Well under. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | Real and consequential — a finding here threatens the site's sponsor relationships, which is their whole revenue. Docked because the acute pain is episodic (audit/monitoring visit driven) rather than daily, and sites have survived on spreadsheets for decades. Not quite hair-on-fire until an inspection is scheduled. |
| Demand evidence | 15 | 11/15 | Strong indirect evidence: named audit finding in multiple independent guidance sources, funded incumbents in the adjacent eISF category with paying customers, sponsor reimbursement mechanism. Docked because I could not source verbatim site-staff complaints about *this specific* cross-document problem — the evidence is auditor-side and vendor-side, not customer-voice-side. That's the weakest link in the case and the first thing to validate. |
| Build feasibility | 15 | 11/15 | Standard stack, no custom models, but extraction reliability across messy scanned documents takes honest iteration. 12–16 weeks, not 6. |
| Distribution clarity | 15 | 12/15 | Named trade bodies (SCRS, ACRP), a finite and buildable list of SMO networks, and a free-audit funnel that demonstrates live exposure. Docked because sites are a slow, relationship-driven buyer and the SMO contracts will take longer than the math suggests. |
| Revenue mechanics | 15 | 11/15 | Pricing benchmarked against a category where sites already pay and sponsors already reimburse. $1M path needs only ~140 sites. Docked because $5M requires winning networks, which is a different and harder sale than the one that gets you to $1M. |
| Time to first revenue | 10 | 8/10 | Free crosswalk converts fast when it finds something real. Realistic first paid customer 6–10 weeks post-launch; sites can buy without a procurement committee. |
| Defensibility | 10 | 6/10 | Soft moat. The rules library — which contradictions are real findings, calibrated against actual inspection outcomes — compounds and is genuinely hard to copy without domain access. But an eISF incumbent could build this as a feature, and they own the documents. Head start plus focus, not a fortress. |
| **Total** | **100** | **75/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required`

You need someone who can build reliable document extraction and someone who has sat through an FDA inspection. If you don't have the second person, this idea will produce confident, wrong findings and die on its first customer. The domain half is not optional and not learnable from blog posts.

### Key assumptions to validate (3–5)

1. **Assumption:** Cross-document contradictions are present at a high enough rate that a free crosswalk finds something real at most sites. **How to test:** Run the crosswalk manually on 10 real studies from 5 friendly sites. If fewer than 6 of 10 produce at least one legitimate finding a QA professional agrees with, the demo doesn't sell itself and the whole funnel breaks.
2. **Assumption:** Sites will pay for this themselves rather than waiting for their eISF vendor to ship it. **How to test:** 30 site-director conversations. Ask directly what they'd pay and whether they'd bill it to a sponsor budget line. Watch for "we'd just ask Florence to add that."
3. **Assumption:** Document extraction can hit accuracy high enough that findings aren't noise. **How to test:** Hand-label 200 real CVs, certificates and delegation logs, measure date/name/role extraction precision. Below ~95% on dates, the false-positive rate will exhaust the coordinator's patience by week two.
4. **Assumption:** Sponsor reimbursement can be extended to this line item. **How to test:** Ask 10 sites to attempt to include it in a startup fee negotiation and report back.

### Risk flags

1. **Incumbent absorption:** Florence, Complion, CRIO and RealTime already hold the documents. Any of them can build cross-document reconciliation as a feature release. This is the single biggest risk, and the honest answer is that the defense is speed, depth of the findings library, and being multi-vendor (working across whichever eISF the site uses) rather than locked to one.
2. **False positives destroy trust faster than false negatives:** In compliance tooling, a tool that cries wolf gets muted and then cancelled. Every finding must cite its source document and page, and the tool should under-report rather than over-report in v1.
3. **Customer-voice gap:** The evidence base here is auditor guidance and vendor marketing, not site staff saying "I need this." That's a genuine hole in the thesis. It's why demand scored 11 and not 14, and why validation step 1 is non-negotiable before writing much code.
4. **Slow, relationship-driven buyer:** Research sites are conservative, small, and busy. The sales cycle will be longer than a typical SMB SaaS, even though the price point is SMB-sized.
5. **Liability positioning:** The tool must never be positioned as guaranteeing inspection readiness. It finds contradictions; it doesn't certify compliance. Get that wrong in the marketing copy and you've bought someone else's regulatory exposure.

## 14. Structured verdict

```
Score:                  75/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder who can ship reliable document extraction,
                        paired with a clinical research QA/regulatory professional who
                        has personally survived an FDA inspection. The domain half is
                        mandatory, not advisory.
Time to revenue:        6–10 weeks post-launch; 4–5 months from a standing start
Capital to launch:      $15–25K (inference, hosting, one SCRS/ACRP booth, QA advisor)
Top 3 assumptions to validate first:
  1. Contradictions are common — run manual crosswalks on 10 real studies across 5
     sites; need ≥6 producing a QA-confirmed legitimate finding
  2. Sites buy it themselves — 30 site-director interviews, explicit price question,
     listen for "our eISF vendor will add this"
  3. Extraction is accurate enough — hand-label 200 real documents, require ~95%+
     precision on dates and names before trusting any finding to a customer
Kill criteria:
  - Abandon if fewer than 6 of 10 manually-crosswalked studies surface a finding a
    QA professional confirms as legitimate — the free-audit funnel is the whole GTM
  - Abandon if fewer than 5 of 30 interviewed site directors will name a price above
    $300/mo
  - Abandon if any major eISF vendor ships cross-document reconciliation before your
    v1 — at that point you are a feature competing with the system of record
  - Abandon if extraction precision on dates stays below 90% after 8 weeks of
    iteration on real documents
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Recruit 5 independent sites through SCRS contacts and LinkedIn outreach to regulatory coordinators. Ask each for the delegation log, 1572, staff CVs and training certificates for two active studies. Offer the crosswalk free and in writing, with a confidentiality commitment.
- **Day 3–4:** Do the reconciliation by hand — no code. Build the person-by-person timeline in a spreadsheet and mark every contradiction. Then have a clinical research QA professional review each flag and rule it legitimate finding, minor, or noise.
- **Day 5:** Deliver the reports live over video and ask one question at the end: *"Would you pay $499 a month for this to run continuously across every study?"* Get a number, not a nod.

**Falsifiable outcome:** Of 10 studies crosswalked, at least 6 must produce a QA-confirmed legitimate finding, AND at least 3 of 5 site directors must name a price at or above $300/mo. Miss either bar and this is a VALIDATE that failed validation — the finding rate is the product, and the price is the business.
