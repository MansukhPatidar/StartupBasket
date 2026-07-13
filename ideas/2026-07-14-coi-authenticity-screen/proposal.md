---
title: "CertGuard — forgery screen for vendor insurance certs"
slug: coi-authenticity-screen
date: 2026-07-14
category: PropTech / US — Property Managers, HOA Managers & Mid-Size General Contractors (vendor COI authenticity verification)
complexity: Low
score: 75
verdict: GO
confidence: Medium
oneLiner: "Tells you if a vendor's insurance certificate is real before they're on site, not after the claim dies."
tags:
  vertical: PropTech
  model: SaaS
  geography: US
  secondary: [SMB, AI-agent, Compliance-driven, Solo-builder, Document-forensics]
axes:
  problem: 16
  demand: 12
  build: 13
  distribution: 12
  revenue: 11
  time: 8
  defensibility: 3
founderFit: [technical-heavy, sales-heavy]
featured: false
---

# CertGuard

## 1. One-liner

Tells you if a vendor's insurance certificate is real before they're on site, not after the claim dies.

## 2. Trend signal — why now?

Three things moved at once.

**Forging a COI got trivial.** The ACORD 25 certificate is a free, unauthenticated PDF template. Anyone can download it, no credentials required. Certificial's verification guide states a fraudster can produce a convincing fake COI "in under five minutes using freely available ACORD 25 templates and basic PDF editing software." Insurers agree it's accelerating: ICW Group's Special Investigations Unit reports "an uptick in cases wherein policyholders were provided with fabricated or falsified Certificates of Insurance from contracted entities" — specifically in staffing, construction trades, and healthcare. Komar Luxe's risk brief notes that "given the ease of use of Photoshop and Artificial Intelligence (AI), fraudulent certificates are on the rise," and that forged COIs are now used "to win contracts, access restricted worksites, or bypass compliance checks."

**The tools everyone bought solve the wrong problem.** The COI software category — myCOI, Jones, Certificial, NetVendor — is mature and well-funded, and it is built around *expiration tracking*: is this certificate still in date, is the vendor green or red. None of it interrogates whether the document is genuine. A forged PDF with a clean future expiry date sails through a tracking tool and lights up green. The category's own vendors admit the gap; Certificial markets "source authentication" as a differentiator precisely because tracking alone doesn't catch fraud — but their answer requires the *carrier* to push live policy data into their network, which only works for vendors whose carriers already participate.

**Verification is possible but nobody has time.** The manual authenticity check is well documented and completely unautomated: verify the agent independently through the state Department of Insurance licensing database; call the agency using the number from the licensing record, *never* the number printed on the certificate; check whether the policy number matches that carrier's format; confirm the additional-insured endorsement form numbers (CG 20 10 ongoing ops, CG 20 37 completed ops) are actually referenced; for workers' comp, run the employer through NCCI's coverage verification tool. That's 20–40 minutes of forensic work per vendor. A property manager with 60 vendors will never do it, so they do none of it.

Provenance:
  - Signal 1 (demand): Fraudulent COIs rising; forgeable in under five minutes from free ACORD 25 templates; insurer SIU confirms uptick across construction, staffing, healthcare — https://www.certificial.com/blog-post/how-to-detect-fraudulent-certificates-of-insurance-complete-coi-verification-guide and https://www.icwgroup.com/articles-insights/work-comp/is-the-certificate-of-insurance-fake-the-devils-in-the-details/ — observed 2026-07-14
  - Signal 2 (feasibility): NAIC State Based Systems exposes a public, no-auth producer-license lookup (NPN, license type, lines of authority, status, expiration) across ~24 states; cheap multimodal document AI can now parse a COI PDF and cross-check every field against it — https://sbs.naic.org/solar-external-lookup/ — observed 2026-07-14
  - Signal 3 (economic): Incumbent COI tracking is a real, paid category ($3–10/vendor/yr self-service, $10–30 full-service, myCOI ~$30–60/vendor/yr) — money is already moving, but it buys expiration tracking, not authenticity — https://www.vertikalrms.com/article/how-much-does-coi-tracking-software-cost-2026-pricing-guide/ — observed 2026-07-14
  Category: Tech-unlock

## 3. The opportunity

The COI industry sells a filing cabinet with a calendar bolted on. It answers "did we collect a certificate and has it expired?" It does not answer the only question that matters at claim time: **"is this piece of paper connected to a real, in-force policy that actually covers me?"**

That gap has a specific, ugly shape. The certificate itself is famously not a contract — it's a summary, issued by an agent, that confers no coverage. So there are three separate ways it can be worthless, and tracking software catches none of them:

1. **The document is forged.** Made in Photoshop from a free template. No such policy exists.
2. **The policy was real but is now cancelled.** Certificates are a snapshot. Policies get cancelled mid-term for nonpayment, and the certificate holder is not reliably notified. As one risk brief puts it: "an additional insured endorsement on a cancelled policy provides no coverage. If the certificate holder doesn't know the policy was cancelled, they may not discover it until they file a claim and the carrier denies it."
3. **The endorsement isn't actually there.** The cert says "additional insured" in the description box, but the underlying policy has no CG 20 10 endorsement naming you. Certificate language and policy endorsements "don't always match."

Certificial's fix is a carrier-fed network — genuinely better, but it needs the vendor's insurer to join, which is a network-effects problem and leaves a long tail uncovered. The AI-first cut skips the network entirely: **treat the certificate as a document to be forensically interrogated, right now, against public records.** Parse every field, cross-check the producer against the state DOI licensing database, validate the policy-number format against that carrier's known pattern, check the NAIC company code is a real admitted carrier in that state, run workers' comp against NCCI, check internal consistency (issue date inside the policy period, form numbers present and correct), and flag the document-level tells of a PDF that was edited. Then tell the manager, in plain English: **green, or here is exactly what's wrong and here is the phone number of the real agency to call.**

10× better because the alternative isn't a competing product — it's 30 minutes of nobody's time, which means it never happens.

## 4. Target market

- **Primary customer:** US residential/commercial property management firms and HOA management companies running 25–300 active vendors, and mid-size general contractors (roughly $5M–$75M revenue) with a steady subcontractor bench. The buyer is the person who owns risk and gets blamed: an operations manager, a compliance/risk coordinator, or in a smaller shop, the owner. Vendor volume above 25–50 is the documented threshold at which manual review stops being reliable and firms start buying tooling — that's exactly my entry point.

- **Why they buy:** Two distinct fears, and the second one is the one that closes deals.

  The tail risk: "If a vendor's equipment causes a leak and their COI expired six months ago, the property owner could be stuck with the repair bill and possible claims from tenants." And the HOA version — "if a business doesn't have adequate insurance coverage, or if they have let a policy lapse, the association could be liable for their actions and wind up facing a lawsuit."

  The recurring, non-hypothetical bill: for contractors, a bad COI costs money *even when nothing goes wrong*. "Failing to collect valid certificates of insurance causes auditors to reclassify sub payments as your own direct payroll at higher trade-specific rates, which can easily wipe out a project's profit margin." And if an uninsured sub's worker does get hurt, statutory-employer laws in most states put the GC on the hook for workers' comp, the claim "sits on your loss runs for five years," and a single serious injury can push a mod rate from 1.0 to 1.3 — "a 30% premium increase across all future policy periods." That is a hard-dollar, annual, recurring loss with a named cause.

- **Rough TAM reasoning:** I won't pretend to a precise number. The shape: there are tens of thousands of US property management and HOA management firms and a large mid-market GC population, and the COI-tracking category is already a functioning paid market at $3–60 per vendor per year. I need a few hundred firms paying a few hundred dollars a month. That is a rounding error against the installed base of firms that already buy adjacent tooling.

- **Why now for them:** They already own a tracking tool (or a spreadsheet) and believe they're covered. The forgery wave is what makes their existing green checkmarks untrustworthy. This sells *against a false sense of security*, which is a much easier conversation than selling against nothing.

## 5. Product sketch (MVP)

- **Drop in a COI PDF, get a verdict in under a minute** — green / amber / red, with a plain-English reason for every flag. No integration required to get the first answer.
- **Producer check** — cross-reference the issuing agent/agency against the state Department of Insurance licensing record: are they real, licensed, active, and licensed in the right state and lines of authority?
- **Carrier check** — is the named insurer a real, admitted carrier in that state, and does the NAIC company code on the form actually match that carrier?
- **Internal-consistency forensics** — issue date outside the policy period, quote number sitting where a policy number belongs, policy number that doesn't match the carrier's known format, limits below the requirement you set, missing or wrong endorsement form numbers (CG 20 10 / CG 20 37), and document-level tells that the PDF was edited rather than generated.
- **"Who do I actually call" card** — the independently sourced agency phone number from the licensing database, not the one printed on the certificate. This single feature is the one that makes the manual workflow survivable.
- **Requirement profiles** — set your minimum limits and required endorsements once per property or project type; every certificate is screened against that profile, not a generic checklist.
- **Re-screen on a schedule** — a cert that was genuine in March can be attached to a policy cancelled in May. Periodic re-verification against live public records, with alerts.
- **Audit trail** — a timestamped record of what was checked, against which source, and what it said. This is what you hand your insurer or your lawyer.

## 6. AI angle — what's load-bearing

Remove the AI and this product does not exist.

The certificate is a semi-structured PDF that arrives in a thousand variants — scanned, photographed, re-saved, filled by hand, generated by a dozen agency management systems. Extracting *every* field reliably (producer name and address, NAIC code, insurer names, policy numbers, effective and expiry dates, each coverage line and its limits, the free-text description box where endorsement form numbers hide, the certificate holder block) is exactly the job that multimodal document models became good and cheap at recently. Regex and template-matching died on this problem for twenty years — that's precisely *why* the incumbents settled for tracking expiry dates and moved on.

Then the reasoning layer: the description box is unstructured prose, and deciding whether it genuinely grants additional-insured status on a completed-operations basis for the right entity is a judgment call over messy text. And the fraud signal is rarely one field — it's the *pattern*: a Gmail-domain sender, an agency whose licensing record shows a different address, a policy number in the wrong format, an issue date one day outside the policy period. Scoring that combination and explaining it in a sentence a property manager can act on is the product.

The AI is doing the paralegal's work here, not decorating a form.

## 7. Localization angle

N/A — this is a US play. The wedge *is* the US regulatory substrate: the ACORD 25 form, state-by-state DOI producer licensing databases, NAIC company codes, NCCI comp verification, and ISO endorsement form numbers. That plumbing is what makes automated verification possible, and it doesn't travel. Other countries have COI analogues but not this specific, publicly queryable verification stack. Building for the US isn't a compromise — it's the whole unlock.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** Tiered by vendor count, deliberately anchored *below* full-service COI tracking and positioned as a complement, not a replacement.
  - Starter: **$99/mo** — up to 50 vendors, on-demand screening + quarterly re-screen.
  - Pro: **$299/mo** — up to 200 vendors, monthly re-screen, requirement profiles, audit export.
  - Firm: **$699/mo** — up to 750 vendors, multi-property/multi-project, API, priority re-screen.
  - Overage/one-off screens for occasional users.

- **ACV:** Realistic blended ~$3,600/yr. Most early customers land on Pro.

- **Rough math to $1M ARR:** 280 customers × $299/mo × 12 ≈ $1.0M. That's 280 property-management/HOA/GC firms — a believable number for a category that already has thousands of paying customers buying adjacent software.

- **Rough math to $5M ARR:** Needs ~1,200 customers at blended ACV, *or* a shift in ACV mix. The honest path to $5M is not more SMBs — it's (a) landing multi-property firms on the Firm tier, and (b) selling the screening engine as an API to the people who *already* have the distribution: the COI tracking vendors themselves, insurance brokers, and franchise/PM platforms. Verification-as-a-feature inside someone else's product is where the second $4M lives. I'd rather be honest that $5M requires that channel than pretend 1,200 direct SMB logos appear on their own.

- **Expansion path:** Vendor-count tiers grow naturally as portfolios grow. Then re-screen frequency (quarterly → monthly → continuous), then adjacent documents that have the same forgery problem and the same public-record verification path — contractor licenses, W-9s, business licenses. Same engine, more document types, more seats.

## 9. Go-to-market wedge — first 100 customers

This is a "show, don't tell" product, and that makes the cold outreach unusually strong.

- **The free audit, and it sells itself.** Cold-email property management and HOA management firms with one offer: *send us 10 of your current vendor COIs and we'll screen them free, in 24 hours.* Real fraud is not required for this to land — in a portfolio of 10 certs you will reliably find *something*: an agent whose license lapsed, a missing CG 20 10 endorsement, a policy number in the wrong format, limits under the requirement. The deliverable is a one-page report with red rows. The report *is* the sales call. Every firm believes their vendors are clean; the report is the moment they stop believing it.

- **Scrape the buyer list, it's public.** State DOI and real-estate licensing records, NARPM (property managers) and CAI (community association managers) member directories, and local HOA-management directories give a clean, named, addressable list of firms with vendor benches. Target 2,000 firms; a demo-report offer this concrete should beat generic SaaS cold-email response rates, and the conversion from "here are 3 problems in your own paperwork" to paid is the strongest close in the deck.

- **Sell through the people who already have the relationship.** Independent insurance brokers and agents advise these exact firms and carry E&O exposure when a client gets burned by a bad cert. They are a warm, incentive-aligned referral channel — the tool makes their advice look good and their client safer. Recruit 20 agencies as referral partners. Same play for HOA-focused law firms and property-management franchise groups.

- **Content that ranks on the fear.** "How to spot a fake certificate of insurance" is already a query that insurers, brokers, and risk consultants write about constantly — the search intent exists and is commercial. A free single-certificate screener as a public tool, gated at volume, is the top-of-funnel. This is a supporting channel, not the wedge — it compounds slowly.

- **Land inside the incumbent's blind spot, on purpose.** Do not fight myCOI/Jones on tracking. Position explicitly as "the authenticity layer for the COIs you're already tracking." That framing makes the incumbent's customer the ideal prospect rather than a lost cause — and it's the same framing that later turns those incumbents into API customers.

## 10. Build complexity — justification

**Low.** The extraction is off-the-shelf multimodal document AI. The verification sources are public and free or cheap — NAIC State Based Systems exposes a no-auth producer lookup across roughly two dozen states, NCCI has a comp coverage tool, and state DOI sites cover the rest. The rest is a rules engine, a scoring layer, and a clean report UI. No proprietary data to acquire, no network to bootstrap, no carrier to sign.

The honest friction is coverage breadth, not difficulty: producer-licensing lookup is **not uniform across all 50 states** — NAIC SBS external lookup covers a large subset, and the remainder are separate state portals with their own quirks and no API. Expect a grind of per-state adapters. Ship with the NAIC-covered states plus the largest non-SBS states (CA, FL, TX, NY) and expand. A solo technical founder gets a credible v1 in 6–8 weeks; the state coverage grind continues for months after that, in the background, without blocking revenue.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Reading public licensing records and analyzing a document your customer already possesses. No PII scraping of consumers, no unauthorized access. Care needed on how findings are *worded* — see risk flags. |
| Ethical — no harm / dark patterns | ✅ | Reduces fraud and uninsured-loss exposure. The one ethical duty is not to defame an honest agent over a parsing bug — flags must be framed as "unverified, confirm here," never "fraudulent." |
| Market exists (evidence above) | ✅ | COI tracking is an established paid category ($3–60/vendor/yr); the fraud problem is documented by insurers and the tracking vendors themselves. |
| 1–5 person team can build this | ✅ | Solo technical founder for v1. |
| Launchable with <$50K / ₹40L | ✅ | Inference + public data lookups + hosting. Well under $10K to first revenue. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | Real money, two ways: catastrophic uninsured-claim tail risk, plus the recurring, non-hypothetical audit reclassification and mod-rate hit for GCs. Docked because for many firms it's a *latent* pain — they don't know they have it until you show them, which is a selling cost. Not quite hair-on-fire until the first bad claim. |
| Demand evidence | 15 | 12/15 | Strong: a mature paid category (money already moving), insurers' own SIUs confirming the fraud uptick, and vendors marketing against it. Docked because I could not find operators *directly asking for an authenticity checker* — the demand for tracking is proven, the demand for verification is inferred. That's a real gap and I won't paper over it. |
| Build feasibility | 15 | 13/15 | Off-the-shelf doc AI + public lookups + rules engine. v1 in 6–8 weeks solo. Docked for the 50-state licensing-lookup patchwork, which is tedious and never quite finished. |
| Distribution clarity | 15 | 12/15 | The free 10-cert audit is a genuinely strong, concrete wedge with a named, scrapable list (NARPM, CAI, DOI records) and a report that closes itself. Docked because it's cold outbound to SMBs — real work, real rejection, no viral loop. |
| Revenue mechanics | 15 | 11/15 | Pricing is benchmarkable against a category with published per-vendor economics, and $1M needs only ~280 customers. Docked because $5M honestly depends on the API/partner channel rather than direct SMB volume, and ACV at the low tier is thin. |
| Time to first revenue | 10 | 8/10 | The audit-report motion can pre-sell before the product is finished; paid pilots plausible inside 6–8 weeks. Not a 4-week self-serve funnel — these buyers need a conversation. |
| Defensibility | 10 | 3/10 | **The weak axis, and I won't dress it up.** Public data + a document model + rules is copyable. Worse, the incumbents have the distribution and could bolt this on as a feature — that is the single biggest threat to the whole thesis. The only real moats are speed, a compounding corpus of confirmed-fraudulent certificates and carrier policy-number format patterns, and becoming the API everyone else licenses before someone builds it in-house. Execution moat, nothing more. |
| **Total** | **100** | **75/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `sales-heavy`

Technical because the extraction quality *is* the product — a false accusation against a real agent is worse than a miss. Sales-heavy because nobody is searching for this yet; the free-audit report has to be pushed into inboxes, and it's an outbound motion to SMBs.

### Key assumptions to validate (3–5)

1. **Assumption:** Screening a real firm's 10 existing vendor COIs surfaces at least one material problem often enough to be a reliable sales hook. **How to test:** Get 10 firms to hand over 10 certs each (offer the audit free, no product required — do it by hand). Measure: in what % of portfolios do we find ≥1 material defect? If it's under ~50%, the wedge is dead and so is the go-to-market.

2. **Assumption:** The pain is felt strongly enough to pay *before* a bad claim, not just after. This is the assumption the whole score rests on. **How to test:** Take the free audit reports to those same 10 firms and ask for $299/mo. Count how many convert without having personally been burned before.

3. **Assumption:** Producer/carrier verification against public records is accurate enough to avoid false accusations. **How to test:** Run 200 known-good certificates from a friendly broker through the engine. Any false "unverifiable agent" flag on a legitimate licensed producer is a product-killing bug — measure the false-positive rate and drive it near zero before anyone sees a red row.

4. **Assumption:** The incumbents (myCOI, Jones, Certificial) won't ship authenticity checking within 12 months. **How to test:** Not testable — monitorable. Watch their changelogs and release notes monthly. This is the kill criterion, not an experiment.

### Risk flags

1. **Incumbent-absorption risk (the big one):** This is a *feature* before it is a company. myCOI, Jones, and Certificial have the customers, the certificates, and the motive. If any of them ships an authenticity layer, the standalone product's reason to exist evaporates overnight. The strategic answer is to move fast and then deliberately *become their supplier* — sell the screening API into the tracking vendors and brokers rather than trying to out-distribute them. That pivot should be planned from day one, not discovered in month 18.

2. **Defamation / false-positive risk:** Telling a property manager that an honest agent's certificate is "fraudulent" because of a parsing error or a stale licensing record is a lawsuit and a reputational kill shot. Every flag must be phrased as *"we could not verify X — here is the independently sourced number to call"*, never as an accusation. This is a product-copy problem with legal teeth, and it needs a lawyer's eye before launch.

3. **Data-source fragility / platform dependency:** The whole verification layer rests on public portals — NAIC SBS, state DOI sites, NCCI — that have no SLA, no contract, rate limits, and can change or restrict access without notice. Coverage is also genuinely incomplete across the 50 states. If NAIC restricted the public lookup, a core check degrades to manual.

4. **Latent-pain / market-timing risk:** Nobody is currently googling "verify my vendor's COI is real." The demand for *tracking* is proven; the demand for *authenticity* is inferred from the fraud trend. I may be 12–24 months early, which for a bootstrapper means a long, expensive education campaign rather than harvesting existing intent. This is the difference between a 75 and an 85.

## 14. Structured verdict

```
Score:                  75/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder who can stomach cold outbound to SMBs;
                        an insurance/risk advisor as a co-founder or design partner
                        would materially de-risk the false-positive problem.
Time to revenue:        6–10 weeks (paid pilots off the back of free audit reports)
Capital to launch:      <$10K
Top 3 assumptions to validate first:
  1. Free 10-cert audits on 10 real firms surface ≥1 material defect in >50% of
     portfolios — do it manually, no product needed.
  2. Those same firms pay $299/mo on the strength of the report alone, without
     having been burned first.
  3. False-positive rate against 200 known-good certs is near zero.
Kill criteria:
  - Abandon if fewer than 50% of audited vendor portfolios contain a material
    defect — the wedge and the entire outbound motion collapse without it.
  - Abandon if fewer than 5 of the first 30 audited firms convert to paid — it
    means the pain is real but latent, and education is too expensive for a bootstrap.
  - Abandon (or pivot straight to the API/partner channel) if myCOI, Jones, or
    Certificial ship a credible authenticity-verification feature before v1 lands.
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Build nothing. Scrape 300 property-management and HOA-management firms from NARPM/CAI directories. Cold-email a single offer: *"Send me 10 of your current vendor COIs. I'll tell you within 24 hours which ones wouldn't hold up. Free, no pitch."* Target: 10 firms who say yes.

- **Day 3–4:** Screen every certificate **by hand** — DOI producer lookup, carrier/NAIC check, policy-number format, endorsement form numbers, internal date consistency. Time each one honestly (this also validates the 20–40 minute manual cost that justifies the product). Produce a one-page red/amber/green report per firm.

- **Day 5:** Deliver the reports and immediately ask for money: $299/mo, founding-customer rate, starts when the product ships in 8 weeks.

**Falsifiable outcome:** Of 10 audited firms, do ≥5 portfolios contain at least one material defect, **and** do ≥2 firms commit real money on the spot? Both conditions, or it's a no-go. The first tests whether the problem is findable; the second tests whether it's *painful enough to pay for before the claim gets denied* — which is the only question that actually matters here.
