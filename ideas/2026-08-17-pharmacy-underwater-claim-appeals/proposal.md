---
title: "FloorClaim — underpayment collector for indie pharmacies"
slug: pharmacy-underwater-claim-appeals
date: 2026-08-17
category: HealthTech / US-SMB — Independent Retail Pharmacies (1–5 Stores) in States That Now Mandate a NADAC-Based Reimbursement Floor and Give Pharmacies 30 Days to Claim It Themselves
complexity: Medium
score: 75
verdict: GO
confidence: Medium
oneLiner: "Finds every prescription a PBM paid below your cost and files the state-law appeal before the 30-day window shuts."
tags:
  vertical: HealthTech
  model: SaaS
  geography: US
  secondary: [Compliance-driven, SMB, AI-agent, Workflow-automation, Solo-builder]
axes:
  problem: 18
  demand: 13
  build: 10
  distribution: 12
  revenue: 11
  time: 7
  defensibility: 4
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# FloorClaim

## 1. One-liner

Finds every prescription a PBM paid below your cost and files the state-law appeal before the 30-day window shuts.

## 2. Trend signal — why now?

Something changed in the last 18 months that nobody has built for yet.

Seven-plus states now write a **hard reimbursement floor into law** — NADAC plus a professional dispensing fee. Kentucky: NADAC + $10.64, effective 1 January 2025. California SB 41, signed October 2025: NADAC + $10.05, plus a spread-pricing ban and 100% rebate pass-through. Iowa: NADAC with a dispensing fee, contracts from 1 July 2025 and prescription benefits from 1 January 2026. Nebraska LB 204: Medicaid FFS NADAC methodology + $10.38, aimed specifically at independents with six or fewer locations. Alabama SB 252, Montana HB 740, Louisiana HB 264 in 2025. Louisiana HB 1236 passed the House unanimously in 2026 and is moving in the Senate. South Carolina has a bill proposing **104% of NADAC** plus dispensing fee. ([Frier Levitt, 2026 state PBM reform tracker](https://www.frierlevitt.com/articles/2026-state-pbm-reform-nadac-reimbursement-spread-pricing-bans/); [NCPA reimbursement roundup, 27 April 2026](https://www.ncpa.org/newsroom/qam/2026/04/27/reimbursement-roundup))

Here is the part that matters. **No state enforces this floor for the pharmacy.** The law gives you a right; the PBM keeps adjudicating claims however it wants; the only way the money comes back is if *you* notice the underpayment and file a per-claim appeal. OptumRx's own submission guide sets the window at **30 days from fill date** and says the decision is final — no second bite. And a growing list of states — Arkansas, Delaware, Florida, Idaho, Indiana, Iowa, Louisiana, Mississippi, North Carolina, Oklahoma, Tennessee, Washington — now require you to submit **per-unit drug acquisition cost, net of rebates and discounts, at the lowest price you actually paid**, attached to the appeal. ([OptumRx MAC appeal submission guide](https://business.optum.com/en/support/professionalrx-resources/appeals-submission-guide.html))

So: a legal right to be paid a floor, a 30-day clock, and a documentation requirement that means you have to match a specific claim to a specific wholesaler invoice line. Multiply that by 67,601 prescriptions a year — the 2024 average per independent store ([2025 NCPA Digest](https://www.cardinalhealth.com/en/services/retail-pharmacy/resources-for-pharmaceutical-distribution/ncpa-digest.html)). Nobody with a two-tech staff is doing that by hand, which is why they don't.

Meanwhile the bleeding is documented and severe. NCPA's January 2025 survey: **40.8% of independent pharmacists were paid below acquisition cost on more than 40% of the Part D prescriptions they filled**; nearly 30% reported below-NADAC payment on half or more. **96.5% said Part D reimbursement threatened the viability of their business** and 30.3% were thinking about closing. More than 600 independents closed in the first nine months of 2025. ([NCPA survey coverage](https://ncpa.org/newsroom/news-releases/2024/02/27/local-pharmacies-brink-new-survey-reveals); [PharmaTrust 2026 outlook](https://pharmatrusthealth.com/the-economic-outlook-for-independent-pharmacies-in-2026/))

The enabling piece: **NADAC is a free, public, weekly dataset** on data.medicaid.gov with an open query API — 2026 file last updated 11 August 2026. The pricing benchmark the law hangs on costs $0 to obtain. ([NADAC dataset](https://data.medicaid.gov/dataset/f38d0706-1239-442c-a3cc-40ef1b686ac0); [Medicaid.gov NADAC page](https://www.medicaid.gov/medicaid/nadac))

And claim data can be read out of the pharmacy's existing system. PioneerRx — the dominant independent PMS — exposes prescriptions, third-party claims, DIR fees and 835 remittance reconciliation programmatically. RedSail's QS/1 MSM ships a SQL data warehouse with export. You do not have to replace the pharmacy's software to see its claims. ([PioneerRx API reference](https://supergood.ai/docs/pioneerrx-api); [RedSail NRx](https://www.redsailtechnologies.com/pharmacy-software/nrx))

Provenance:
  - Signal 1 (demand): NCPA — 40.8% of independents paid below acquisition cost on >40% of Part D scripts; 96.5% say reimbursement threatens viability; 30.3% considering closure; 600+ closures in 9 months of 2025 — https://ncpa.org/newsroom/news-releases/2024/02/27/local-pharmacies-brink-new-survey-reveals and https://pharmatrusthealth.com/the-economic-outlook-for-independent-pharmacies-in-2026/ — observed 2026-08-17
  - Signal 2 (feasibility): NADAC published free weekly with open API (2026 file updated 2026-08-11) + PioneerRx/QS-1 programmatic access to claims, DIR fees and 835 remittance — https://data.medicaid.gov/dataset/f38d0706-1239-442c-a3cc-40ef1b686ac0 and https://supergood.ai/docs/pioneerrx-api — observed 2026-08-17
  - Signal 3 (economic + regulatory): 7+ states legislated NADAC-plus-dispensing-fee floors ($10.05–$10.64) with pharmacy-initiated 30-day appeal windows and mandatory per-unit acquisition-cost documentation in 12 states — https://www.frierlevitt.com/articles/2026-state-pbm-reform-nadac-reimbursement-spread-pricing-bans/ and https://business.optum.com/en/support/professionalrx-resources/appeals-submission-guide.html — observed 2026-08-17
  Category: Regulatory arbitrage

## 3. The opportunity

The gap is between a right and its exercise.

State legislatures spent two years handing independent pharmacies an enforceable reimbursement floor. The enforcement mechanism they built is a per-claim appeal with a 30-day fuse and an evidentiary burden — prove, with your own invoice, that you bought the drug for more than the PBM paid you. That is a **records-matching problem dressed up as a legal problem**, and it is exactly the kind of work that never gets done in a business with three employees and 185 scripts a day.

The incumbents each miss it from a different side:

**PSAOs** (Cardinal's Automated MAC Advantage and peers) file appeals in bulk on behalf of member pharmacies. The critique from inside the industry is that blanket appeals **fail because they don't satisfy the specific state law requirement** — they approximate cost rather than attaching the individual pharmacy's actual invoice for that fill. A generic appeal against a state statute that demands per-unit net acquisition cost gets denied, and the denial is final. ([Pharmacy Marketplace analysis](https://pharmacymarketplace.com/blog/the-best-kept-secret-in-pharmacy-how-to-actually-recover-your-underwater-claims/))

**Pharmacy management systems** have the data and mostly waste it. Datascan's DIR estimator does show projected low/high fees at the moment of adjudication — genuinely useful — but it lives inside Winpharm, which starts at **$2,500/month**. To get the alert you rip out and replace your dispensing system. That's not a purchase decision, that's a bet-the-store migration. ([Datascan pricing](https://www.capterra.com/p/120411/Datascan-Pharmacy-Software/); [Datascan DIR tooling](https://datascanpharmacy.com/what-are-dir-fees-why-do-they-exist-and-what-can-we-do-about-them/))

**The one direct competitor**, Pharmacy Marketplace's PBM Appeals Tool, has correctly identified the same opening — organize the workflow, attach verified invoices, track deadlines, map the state cohorts. But by its own description it replaces "spreadsheets, inbox searches and guesswork" with a **structured system a pharmacy tech works a couple of hours a week**. It's a filing cabinet with good rules. No PMS integration is described, so a human still finds the underwater claims and still assembles each packet. Their own customer testimonial — 250 claims submitted in three weeks at near-100% approval — is the strongest evidence in this whole proposal that the appeals *win when filed properly*, and simultaneously the strongest evidence that the bottleneck is assembly labor, not legal merit. ([PBM Appeals Tool](https://pharmacymarketplace.com/pbm-appeals-tool))

That's the wedge. Not "help a tech file appeals faster." **Remove the tech.** Read the claim feed nightly, join every fill against NADAC and against the pharmacy's own wholesaler invoice lines, rank what's recoverable under that state's statute, generate the PBM-specific packet with the invoice attached, file it, and chase the response — all before the 30-day clock expires, with zero human minutes on claims that aren't worth appealing.

The 10× isn't smarter appeals. It's **appealing 250 claims a month instead of 250 a quarter**, on the same payroll.

## 4. Target market

- **Primary customer:** Owner-pharmacist of an independent retail pharmacy, 1–5 locations, in a state with a legislated reimbursement floor or a statutory MAC appeal right — Kentucky, California, Iowa, Nebraska, Alabama, Montana, Louisiana first, then the 12 states that already mandate per-unit acquisition cost at appeal (Arkansas, Delaware, Florida, Idaho, Indiana, Mississippi, North Carolina, Oklahoma, Tennessee, Washington). Typical store: $4–6M annual revenue, 67,601 scripts/year, 2–4 techs, one owner who is also the pharmacist-in-charge and does the books after close.

- **Why they buy:** Because the money is real and currently forfeited. A rural Mississippi pharmacist filled a branded script that cost her **$929.07** to acquire and was reimbursed **$804.19** — a $125 loss on one transaction she had no legal right to refuse. Another pharmacy reported DIR clawbacks over **$100,000 in 2025**. When >40% of your Part D volume pays below cost and the state has just told you there's a floor, every unappealed claim is a check you declined to cash. ([EcoPharma PBM survival guide](https://www.ecopharma.io/blog/pbm-reimbursement-survival-guide-pharmacies))

- **Rough TAM reasoning:** 18,960 independent pharmacies in the US per the 2025 NCPA Digest; 26%+ of owners hold two or more stores, so roughly 13–14K buying entities. The states with legislated floors or acquisition-cost appeal mandates cover a large minority of them — call the addressable beachhead **4,000–6,000 stores**, expanding as bills pass. At $349/mo that's a $17–25M ceiling on the beachhead alone, which is the right size: too small for a serious venture-backed attack, plenty for the target. ([2025 NCPA Digest](https://www.cardinalhealth.com/en/services/retail-pharmacy/resources-for-pharmaceutical-distribution/ncpa-digest.html); [PCMA store count 2026](https://www.pcmanet.org/press-releases/independent-pharmacies-increase-in-2026/))

- **Why now for them:** Three things landed at once. The legal floor exists (2025–26 statutes). The documentation burden shifted onto them (per-unit net acquisition cost at appeal, 12 states). And the margin cushion that let them ignore all of it is gone — 30.3% are contemplating closure. A tool that returns cash this quarter, from claims already filled, is the only kind of software a pharmacy in that position will buy.

## 5. Product sketch (MVP)

- **Nightly claim sweep.** Pulls yesterday's third-party claims out of the PMS and computes true margin per fill: what the PBM paid versus what that NDC actually cost this store, from its own wholesaler invoices.
- **Statutory floor test.** For each underwater fill, checks it against that state's mandated floor (NADAC + the state's dispensing fee) and that PBM's contract terms — separating "below my cost" from "below the legal floor," because only the second one wins an appeal.
- **Invoice line matching.** Locates the specific wholesaler invoice line proving the lowest per-unit net acquisition cost for the dispensed NDC, which is the exhibit 12 states now demand and the reason blanket PSAO appeals get denied.
- **Appeal packet generation and filing.** Builds the PBM-specific submission — BIN, NCPDP, Rx number, fill date, NDC, per-unit cost, reason code — in each PBM's required template, with the invoice attached, and submits through that PBM's channel.
- **30-day clock board.** Every appealable claim with days-remaining, so nothing ages out. Filed, pending, approved, denied — with recovered dollars totalled.
- **Recovery ledger.** What was appealed, what came back, what it's worth per PBM and per drug — the log NCPA tells pharmacies to keep for state boards and insurance commissioners, produced as a byproduct instead of a chore.
- **Don't-stock signal.** Drugs where this store loses money every single fill and appeals keep getting denied, ranked — so the owner can make the purchasing decision instead of discovering it at year end.
- **Monthly PBM scorecard.** Which PBM underpays most, denies most, and pays slowest — ammunition at contract renewal and in complaints to the state.

## 6. AI angle — what's load-bearing

Strip the AI out and this becomes a spreadsheet nobody fills in. Which is precisely today's product.

Three places the model does work a rules engine can't:

**Invoice-to-claim reconciliation.** Wholesaler invoices arrive as PDFs, EDI 810s, portal CSVs and scanned faxes, from McKesson, Cardinal, ABC, and a rotating cast of secondaries. Package sizes don't match dispensed quantities. NDCs get relabeled. The same molecule arrives from three sources at three prices, and the statute wants the *lowest net* one. Extracting per-unit net acquisition cost across that mess, per NDC per fill date, and defending the number — that's the core AI task, and it's the exact step the incumbent tools push onto a human.

**Statute-and-contract interpretation per claim.** Every state's floor is worded differently — NADAC plus $10.64, 104% of NADAC, "Medicaid professional dispensing fee," independents with ≤6 locations only. Every PBM's provider manual layers its own template, window and reason codes on top. The judgement of "is *this* claim appealable under *this* statute against *this* PBM, and what's the winning argument" is language work over a corpus that changes monthly, not a lookup table.

**Denial learning.** Denials come back with reasons. Reading them across thousands of claims and adjusting which claims get filed, with what framing — that's the loop that makes month 12 materially better than month 1, and it compounds per state and per PBM.

## 7. Localization angle (if any)

N/A as a country play — this is US-only by construction, because the product *is* a set of state statutes plus PBM contract terms. But localization is the whole game **internally**: the unit of localization is the state, not the country. Kentucky's $10.64 floor, California's $10.05 with rebate pass-through, Nebraska's ≤6-location eligibility test, and the 12-state acquisition-cost documentation rule are each a distinct ruleset. Launch in two states, do them completely, add states as bills pass. The per-state rule library is also the moat (section 3) — a generic national tool loses to a correct Kentucky tool in Kentucky.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** $349/month per store, flat. Multi-store: $299/store from the second location. Deliberately **not** contingency-based — a percentage-of-recovery model invites the pharmacy to compare you to a collections agency and makes revenue lumpy, and the ROI story is already obvious at a flat fee.
- **Why $349 clears:** it has to be trivially small against recovered dollars and against known alternatives. A single $125 branded-drug loss recovered pays a third of the month. Datascan's comparable capability requires a **$2,500/mo** PMS. NCPA-published loss rates mean a 67,601-script store with >40% of Part D underwater has four figures a month sitting there. If a store recovers under $700/mo, the pricing is wrong and I want to know in month two.
- **ACV:** ~$4,200 single store; ~$8,500 blended once multi-store owners land (26%+ of owners have 2+ stores, so this is the natural expansion, not a hope).
- **Rough math to $1M ARR:** 240 stores × $349 × 12 = **$1.0M**. That's ~4–6% of the beachhead. Achievable with one founder selling.
- **Rough math to $5M ARR:** ~1,200 stores. Needs the state library to cover 20+ states, and needs at least one channel to compound — a state pharmacy association endorsement or a PSAO/buying-group reseller deal. Realistically 30 months, not 18. I'd rather own a very profitable $2M than promise $5M here.
- **Expansion path:** per-store seats first; then the adjacent recovery surfaces the same data pipe unlocks — DIR fee reconciliation against 835 remittance, audit-response packets, and payer contract benchmarking at renewal. Same claims feed, three more reasons to raise price.

## 9. Go-to-market wedge — first 100 customers

- **Free underwater audit as the entire pitch.** State pharmacy boards publish licensed pharmacy lists; NCPDP files identify independents. Pull the ~600 independents in Kentucky and the ~1,100 in Iowa/Nebraska. Offer one thing: send 90 days of claim history and one month of wholesaler invoices, get back a report naming exact dollars recoverable under your state's statute, with the ten highest claims itemized and their appeal deadlines. It's not a demo, it's a number. Cold email with a real dollar figure in the follow-up converts unlike anything else in this market. Target 2,000 contacted → 8% audit uptake (160) → 40% convert = **64 stores**.

- **State association channel, one state at a time.** These associations are actively campaigning on this exact issue and publish PBM appeal roadmaps for members; Pharmacy Marketplace already ships a "State Association PBM Appeals Road Map," which tells you associations are the recognized distribution route here. Sponsor two state conventions, run the workshop titled "the $40,000 you didn't appeal last year," walk out with a member-discount arrangement. One association endorsement in a floor-law state is worth more than a quarter of cold email.

- **Buying group and PSAO reseller, positioned as complement not competitor.** PSAO blanket appeals get denied for missing per-claim invoice evidence. That's their problem, not just their members'. Sell the evidence layer into a mid-size buying group — they distribute, you keep the product. One group with 400 members beats 400 cold emails.

- **The denial-rate content wedge.** Publish per-state, per-PBM appeal approval rates from real (anonymised, consented) customer data. Nobody else can publish that number, every pharmacy owner in the country wants it, and it makes you the reference source that shows up when an owner searches whether appealing is worth it. This is a moat exercise disguised as marketing, and it's also the reason to ask for data consent in the contract from day one.

- **The rank-and-file lever: NCPA's own advice.** NCPA and every state association already tell pharmacies to log every below-cost claim and file complaints. Show up in that conversation as the thing that does the logging. The audience has been pre-sold on the behaviour and has failed to execute it for years.

## 10. Build complexity — justification

**Medium.** Roughly 12–16 weeks to a v1 that files real appeals in two states.

Off the shelf: NADAC via a free public API, LLM extraction for invoice parsing, standard web stack, PMS read access through PioneerRx's API and QS/1's SQL warehouse. Nothing here needs a model trained from scratch.

The custom work is real but bounded: invoice ingestion across four wholesalers' formats, the per-state statute rule library, and per-PBM submission templates and channels. The genuine schedule risk is **PMS access**, not AI — some systems expose clean APIs, others need vendor cooperation or RPA against a legacy client, and vendor relations move at vendor speed. Ship two states and two PMSes; do not attempt breadth in v1.

Not Low, because a wrong number in an appeal packet is worse than no appeal — the OptumRx guide says individual claim decisions are **final and not reviewed again**. Accuracy work here is product work, not polish.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Exercises a statutory appeal right on the pharmacy's own claims with its own invoices. No PHI leaves the pharmacy's control that isn't already in a claim submission; BAA and HIPAA handling required, which is table stakes, not a barrier. Not legal advice — the pharmacy files, the tool assembles. |
| Ethical — no harm / dark patterns | ✅ | Helps a small business collect money a state legislature explicitly decided it was owed. The one thing to hold the line on: never inflate or approximate an acquisition cost to win an appeal. Flat fee, not contingency, keeps that incentive clean. |
| Market exists (evidence above) | ✅ | NCPA survey data, seven-plus state statutes, a $2,500/mo incumbent bundling the capability, and a direct competitor whose own testimonial reports 250 claims at near-100% approval. |
| 1–5 person team can build this | ✅ | Two people: one on the data pipeline and invoice extraction, one on the state/PBM rule library and sales. |
| Launchable with <$50K / ₹40L | ✅ | Under $25K. Main line items are legal review of appeal-assembly positioning, HIPAA/BAA setup, and two state convention sponsorships. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 18/20 | 96.5% say Part D reimbursement threatens business viability; 30.3% considering closure; 40.8% paid below cost on >40% of Part D scripts. Cash, daily, measurable, with a legal remedy going unused. Not a 20 only because the pain is chronic and normalized — owners have survived it for years and some have given up believing appeals work. |
| Demand evidence | 15 | 13/15 | Multiple independent hard signals: NCPA survey percentages, 600+ closures, a $2,500/mo PMS bundling the capability, a direct competitor with a customer reporting 250 claims filed at near-100% approval, and 7+ legislatures spending political capital here. Short of 15 because I have no published price point or churn data for the direct competitor. |
| Build feasibility | 15 | 10/15 | Free NADAC API and documented PMS access make the core tractable, but multi-wholesaler invoice extraction plus a per-state statute library plus per-PBM templates is 12–16 weeks, and PMS vendor access is a real dependency outside the builder's control. |
| Distribution clarity | 15 | 12/15 | Named lists (state board licensee files, NCPDP), a pitch that leads with a dollar figure from the prospect's own data, and an association channel the industry already recognizes. Not higher because association deals move on association calendars and the free-audit motion needs claim data before it can produce its number — a real friction step. |
| Revenue mechanics | 15 | 11/15 | $349/mo is well benchmarked against a $2,500/mo alternative and against four-figure monthly recoveries; 240 stores to $1M is a credible count against a 4,000–6,000 store beachhead. Held down because retention depends on visibly recovered dollars every month — if PBM behaviour or a state's rules shift, the ROI story wobbles fast. |
| Time to first revenue | 10 | 7/10 | Realistically 8–10 weeks post-launch. The free audit shortens the sales cycle a lot, but it requires the prospect to hand over claim history and invoices first, and pharmacy owners move deliberately. Pre-selling audits during the build is the way to pull this earlier. |
| Defensibility | 10 | 4/10 | Honest 4. Off-the-shelf models, public NADAC, a competitor already in market, and a PMS vendor could bundle this. The accumulating assets — per-state/per-PBM denial-outcome data, invoice-format library, association relationships — are real but take a year to matter. Execution-and-focus moat, not a structural one. |
| **Total** | **100** | **75/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required`

You need someone who can build a reliable extraction-and-reconciliation pipeline, and someone who genuinely understands PBM contracts and state pharmacy law. If you don't have the second, hire a pharmacy-side advisor before writing a line of the rule library — the failure mode is a technically elegant tool that files losing appeals.

### Key assumptions to validate (3–5)

1. **Assumption:** A typical 67,601-script independent in a floor-law state has ≥$700/month in *statutorily* recoverable underpayments — below-the-legal-floor, not merely below-cost. **How to test:** Run the free audit manually on 10 pharmacies across Kentucky, Iowa and California. Compute recoverable dollars under each statute by hand. If the median lands under $700/mo, the flat $349 price is wrong and the model needs rethinking, not the marketing.
2. **Assumption:** Properly evidenced individual appeals actually get approved at a high rate — the competitor's near-100%-on-250-claims testimonial generalizes. **How to test:** File 50 appeals by hand across three PBMs and two states before building automation. Track approval rate and days-to-decision. Under 50% approval kills the flat-fee ROI pitch.
3. **Assumption:** PMS claim data is accessible for the two target systems without a partnership negotiation that takes longer than the build. **How to test:** Get read access at three pilot pharmacies in the first three weeks — via API, warehouse export, or the pharmacy's own credentials. If all three routes stall, the product has to become invoice-and-remittance-only, which is a weaker product.
4. **Assumption:** Owners will hand over claim history and wholesaler invoices to a stranger for a free audit. **How to test:** 200 cold emails, measure audit uptake. Under 4% and the wedge in section 9 needs replacing with association-warm intros first.
5. **Assumption:** Flat-fee beats contingency for this buyer. **How to test:** Offer both to the first 20 prospects and watch which closes faster and which they argue about.

### Risk flags

1. **Platform dependency (PMS vendors):** The whole pipeline rests on reading claims out of systems owned by companies who could bundle this feature or close the door. PioneerRx and RedSail are the gatekeepers. Mitigation: support the pharmacy's own credentialed export path so access doesn't require vendor blessing, and treat 835 remittance + invoices as a fallback data spine.
2. **Regulatory risk cuts both ways:** These statutes are being litigated. Arkansas Act 624 was set for 1 January 2026 and got hit with a **preliminary injunction on 28 July 2025** on Commerce Clause and TRICARE preemption grounds. If federal PBM reform someday mandates cost-plus reimbursement nationally, the underpayments this product recovers shrink — the reform that creates the market can eventually close it. Mitigation: the claims data pipe has value beyond appeals (DIR reconciliation, audit defense, contract benchmarking); build toward that. ([Arkansas injunction](https://www.frierlevitt.com/articles/2026-state-pbm-reform-nadac-reimbursement-spread-pricing-bans/))
3. **Competitor already in market:** Pharmacy Marketplace's PBM Appeals Tool has the insight and the association relationships. If they add PMS ingestion and true automation before you ship, the differentiation evaporates. Speed matters more than feature breadth.
4. **Customer financial fragility:** 30.3% of your target market is contemplating closure. Churn will include stores that simply shut. Underwrite for it — expect elevated involuntary churn and don't model retention off healthier SaaS categories.
5. **Accuracy is not optional:** OptumRx treats individual claim decisions as final. A bad packet permanently burns a recoverable claim. This raises the QA bar above normal SaaS and should slow the launch, not the reverse.

## 14. Structured verdict

```
Score:                  75/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder who can build extraction/reconciliation pipelines,
                        paired with a pharmacy-side operator or PBM-contract advisor. Two people.
Time to revenue:        8–10 weeks post-launch; 4–6 months from zero
Capital to launch:      $20–25K
Top 3 assumptions to validate first:
  1. Median recoverable-under-statute dollars per store ≥$700/mo — hand-audit 10 pharmacies
     across KY, IA, CA before building anything
  2. Properly evidenced individual appeals approve at ≥50% — file 50 by hand across 3 PBMs
     and 2 states, track approval rate and days-to-decision
  3. PMS claim access achievable at 3 pilot stores within 3 weeks via API, warehouse export,
     or pharmacy-held credentials
Kill criteria:
  - Abandon if median statutorily-recoverable dollars per store is under $400/mo across the
    10-pharmacy hand audit — the flat-fee ROI story doesn't survive it
  - Abandon if hand-filed appeal approval rate is under 40% across 50 appeals
  - Abandon if no PMS read path works at any of 3 pilot pharmacies within 30 days
  - Abandon if federal legislation mandates national cost-plus pharmacy reimbursement before
    launch — the underpayment pool this product harvests collapses
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Recruit three independent pharmacy owners — one Kentucky, one Iowa, one California — through a state association contact or an NCPA member forum. Ask for 90 days of claim history and the matching wholesaler invoices under NDA. Three yeses is itself the first signal; if nobody will share data, the free-audit wedge is dead and I want to know on day two.
- **Day 3–4:** Do by hand what the product would automate. Join every fill against NADAC and against the store's own invoice lines. Separate below-my-cost from below-the-legal-floor. Produce a per-store number: dollars recoverable under that state's statute in 90 days, and how many claims are already past the 30-day window.
- **Day 5:** Hand-file 15–20 of the highest-value appeals across at least two PBMs, correctly evidenced with invoice attachments per the state requirement. Log every submission, every response, every days-to-decision.
- **Decide go / no-go on:** median recoverable dollars per store per month ≥$700, **and** ≥50% of hand-filed appeals approved (or still pending-not-denied) at day 30. Both true → build. Recoverable dollars under $400/mo, or approval under 40% → the legal right is theoretically real and practically worthless, and this is a PASS regardless of how good the regulatory story sounds.

The falsifiable part is the dollar figure. Either the money is sitting there in the claim history of three real pharmacies, or it isn't, and one week of hand-work settles it before a line of code gets written.
