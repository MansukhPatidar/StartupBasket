---
title: "UnderClaim — appeal engine for independent pharmacies"
slug: pharmacy-underwater-claim-appeals
date: 2026-08-07
category: HealthTech / US-SMB — Independent Retail Pharmacies (1–8 Stores) in States With New NADAC Reimbursement Floors Who Never File the Appeals They Are Owed
complexity: Medium
score: 78
verdict: GO
confidence: Medium
oneLiner: "Turns every prescription your PBM underpaid into a filed appeal, before the state's short window closes."
tags:
  vertical: HealthTech
  model: SaaS
  geography: US
  secondary: [Compliance-driven, SMB, AI-agent, Workflow automation, Revenue-recovery]
axes:
  problem: 18
  demand: 13
  build: 11
  distribution: 13
  revenue: 11
  time: 7
  defensibility: 5
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# UnderClaim

## 1. One-liner

Turns every prescription your PBM underpaid into a filed appeal, before the state's short window closes.

## 2. Trend signal — why now?

Three things moved at once, and they moved in the pharmacy's favour for the first time in a decade.

**States built a price floor under pharmacy reimbursement.** A wave of state PBM reform laws now mandate a minimum reimbursement pegged to NADAC (National Average Drug Acquisition Cost) plus a fixed professional dispensing fee. Kansas SB 360 sets it at NADAC plus a dispensing fee of at least $10.50. Montana requires NADAC plus $15, indexed to CPI annually. Iowa mandates pass-through pricing with a NADAC floor plus a $10.68 dispensing fee. Colorado's requirement for rural independents took effect January 1, 2026. Kentucky uses NADAC plus $10.64. California signed a NADAC-plus-dispensing-fee bill in October 2025. This is no longer one state experimenting — it is a bloc.

**The economics underneath are genuinely broken.** NCPA's Digest put independent pharmacy gross margin at 19.7%, the lowest in its ten-year lookback. Independents are closing at more than one per day; the count fell from 19,432 in June 2023 to 18,984 in June 2024. A New York Times investigation found PBMs systematically underpaying small pharmacies, helping drive hundreds out of business.

**Nobody closes the loop.** Thirty-six states have some form of MAC pricing law giving pharmacies the right to appeal underpayment. The right exists. The filing does not happen. Appeal windows are brutally short — as little as seven days after the claim at some PBMs, with the PBM required to investigate and respond within seven business days. Every PBM runs its own portal and its own template: Optum has a MAC Appeal Submission Template and automated system, Caremark runs a MAC Portal, MeridianRx requires its own online Pricing Inquiry Tool, SmithRx has a separate form. A pharmacist filling 250 scripts a day is not reconciling each one against NADAC and hand-filing appeals into four different portals inside seven days.

That is the entire product. The law says you are owed the money. The clock says you have a week. The portals say do it four different ways. Nobody is doing it.

```
Provenance:
  - Signal 1 (Demand): Independent pharmacy gross margin at 19.7%, lowest in NCPA's 10-year lookback; closures exceeding one per day; owners publicly reporting dispensing at a loss — https://ncpa.org/newsroom/news-releases/2024/10/27/ncpa-releases-2024-digest-report — 2026-08-07
  - Signal 2 (Economic/Regulatory): 2026 wave of state NADAC-floor reimbursement laws — Kansas NADAC+$10.50, Montana NADAC+$15 CPI-indexed, Iowa NADAC+$10.68, Colorado effective 2026-01-01, Kentucky NADAC+$10.64, California signed Oct 2025 — https://www.frierlevitt.com/articles/2026-state-pbm-reform-nadac-reimbursement-spread-pricing-bans/ — 2026-08-07
  - Signal 3 (Feasibility): 36 states have MAC appeal laws, but each PBM runs a separate portal and template with ~7-day filing windows — Optum, Caremark, MeridianRx, SmithRx all differ — https://business.optum.com/en/support/professionalrx-resources/appeals-submission-guide.html — 2026-08-07
  Category: Regulatory arbitrage
```

## 3. The opportunity

The gap is between **detection** and **recovery**, and it is wider than it looks.

Pharmacy management systems already detect underwater claims. Datascan ships free pre- and post-edit warnings with colour-coded flags that evaluate net reimbursement post-adjudication and stop for losses, overpayments and DIR fees. PioneerRx has similar analytics. So the incumbents will tell you, accurately, that you just lost $34 on that Eliquis fill.

Then they stop. They show you the wound. They do not file the claim.

The other half of the market is manual consulting shops — outfits like PDC Rx offering MAC appeals as a service. Healthcare underpayment recovery generally runs on contingency, with vendors paid out of recovered dollars and targeting initial recoveries in 60–90 days. That model works for hospitals with six-figure variances. It does not scale down to a pharmacy chasing $18 on a generic, thousands of times a month, on a seven-day clock. The unit of work is too small for a human to touch profitably.

That is the AI-shaped hole. Each individual appeal is worth $8–$60 — too small for a consultant, too frequent for a pharmacist, and now legally backed by a statutory reimbursement floor in a growing list of states. Volume × automation is the only way to harvest it.

The incumbent weakness is specific and exploitable: PMS vendors sell *software the pharmacy operates*. They are not going to file adversarial paperwork against Optum and Caremark on their customers' behalf — those relationships are commercially delicate and the liability is real. A focused third party has no such conflict.

## 4. Target market

**Primary customer:** Owner-operator of an independent retail pharmacy, 1–8 locations, in a state with an enacted NADAC-floor or MAC appeal law (Kansas, Montana, Iowa, Colorado, Kentucky, California, Alabama, Nebraska, West Virginia, Ohio, Arkansas to start). Typically 8,000–25,000 scripts/month per store. The buyer is the owner or the PIC (pharmacist-in-charge) who also does the books — not a procurement committee.

**Why they buy, in their words:** Independent owner Jerry Callahan: *"Pharmacies just can't continue to lose money and stay in business."* One owner reported buying $37,000 of brand-name drugs, selling all of them, and losing $248 — making more money selling iced tea. Nikki Bryant, co-owner of Adams Family Pharmacy in rural Georgia, works to find creative ways to bolster income because the pharmacy loses money on prescriptions. NCPA's survey found roughly one in three independent pharmacists considering closing.

These are not people who need to be convinced the problem exists. They need someone to collect.

**Rough TAM reasoning:** ~19,000 independent pharmacies in the US. Realistically address the ~8,000–10,000 in states with meaningful NADAC-floor or MAC appeal statutes as of 2026. At $299–$899/mo that is a $30M–$100M addressable ceiling — comfortably wrong-sized for VC, correctly sized for a bootstrapper targeting $3–5M ARR.

**Why now for them:** Before the NADAC-floor laws, an appeal was a plea. Now it is a statutory entitlement with a defined benchmark price. The pharmacist has gone from arguing about fairness to citing a published number. That changes the win rate — and it is exactly the kind of change that makes a previously-unwinnable workflow worth automating.

## 5. Product sketch (MVP)

- **Nightly claim sweep** — pulls the day's adjudicated claims from the pharmacy management system and reconciles each against current published NADAC plus the state's statutory dispensing fee.
- **Underwater queue** — every claim paid below the state floor, ranked by recoverable dollars, with the specific statute cited next to it.
- **Deadline clock per PBM** — shows days remaining in each PBM's filing window, because they differ and they are short.
- **One-click appeal packet** — generates the appeal in the correct format for the destination PBM (Optum template, Caremark portal format, MeridianRx inquiry, SmithRx form), pre-filled with acquisition cost, NDC, claim ID and the governing state statute.
- **Acquisition cost pull** — ingests the pharmacy's wholesaler invoices (McKesson, Cardinal, ABC) so the appeal carries real per-unit acquisition cost, which most PBMs require as evidence.
- **Outcome tracking** — logs which appeals were paid, denied, or ignored past the statutory response deadline, per PBM.
- **Recovery report** — monthly dollar figure recovered, and a separate figure for "denied in apparent violation of state floor" — the file you hand to the state insurance commissioner or your attorney.
- **Similarly-situated flag** — where state law requires a PBM to extend a corrected price to all affected pharmacies, flags those wins for follow-through.

## 6. AI angle — what's load-bearing

Remove the AI and this product does not survive contact with reality.

The load-bearing work is **normalisation and evidence assembly at a unit economics that only works if it's near-zero marginal cost.** Wholesaler invoices arrive as PDFs, EDI files and portal exports with inconsistent NDC formatting, pack-size and unit-of-measure conventions. Matching an adjudicated claim line to the right invoice line to establish per-unit acquisition cost is fuzzy matching across dirty identifiers — exactly what a human does slowly and an LLM plus deterministic checks does at scale.

Second: each PBM wants a different appeal artifact with different required fields and different justification language. Generating a correctly-formatted, statute-citing appeal per PBM per claim is document generation under varying schemas — again, the thing that makes a $12 recovery economically viable.

Third: appeal denials come back as unstructured prose. Classifying "denied because your acquisition cost documentation was insufficient" versus "denied because the drug isn't on our MAC list" versus a denial that facially violates the state floor determines whether you refile, escalate, or report to the regulator.

The honest caveat: the reconciliation arithmetic itself is deterministic and should stay that way. AI that hallucinates a dollar figure into a regulatory filing is a liability, not a feature. The AI does extraction, matching, drafting and classification — never the math.

## 7. Localization angle (if any)

N/A as a country play — this is US-only by construction, because the entire opportunity is created by US state statutes and the NADAC benchmark published by CMS.

But there is a **state-level localization** that functions identically to a geography wedge, and it is the real moat. Every state's floor is different: different dispensing fee ($10.50 Kansas, $15 Montana CPI-indexed, $10.64 Kentucky, $10.68 Iowa), different appeal window, different scope (Colorado's applies to rural independents; Nebraska's to independents with six or fewer locations). Encoding each state's rule correctly is unglamorous, slow, and precisely the work a competitor has to redo from scratch. Launch in two or three states, own them completely, then expand state by state as new laws take effect.

## 8. Business model — path to $1M–$5M ARR

**Pricing:** $349/mo for a single store, $899/mo for 2–5 stores. Flat SaaS, not contingency.

I deliberately reject the contingency model here even though recovery vendors default to it. Contingency invites disputes over attribution, requires the pharmacy to open its books to a revenue-share partner, and caps your pricing at a fraction of a small number. Flat subscription against a clearly reported recovery figure is cleaner to sell and cleaner to operate — the pharmacy sees "$4,100 recovered, $349 paid" and renews without a conversation.

**ACV:** ~$4,800 blended (mix of single and multi-store).

**Math to $1M ARR:** 210 pharmacies at a $4,800 blended ACV. That is roughly 2% of the addressable base in NADAC-floor states.

**Math to $5M ARR:** ~1,000 pharmacies, which requires expanding beyond the initial states as more laws take effect, plus adding the audit-defence and DIR-reconciliation adjacencies. Realistic in 30–36 months, not 18. I'd call $2–3M the honest 24-month ceiling.

**Expansion path:** Per-store pricing scales with small chains. Then adjacent recovery workflows on the same claim data — PBM audit response packets, DIR/effective-rate reconciliation, and 340B contract compliance. Same data ingestion, same customer, higher ACV.

**Margin note:** Gross margin is healthy but not pure software. Wholesaler invoice ingestion, PMS integration maintenance, and per-state statutory upkeep are ongoing costs. Budget for a part-time pharmacy-domain contractor from month one.

## 9. Go-to-market wedge — first 100 customers

- **The free underwater audit.** Offer a one-time retrospective: pharmacy exports 90 days of claims, you return a PDF showing exactly how many dollars were paid below their state's statutory floor. This is a hard number about their own money, generated in minutes. It is the single best cold-open in this market because the pharmacist has never seen it quantified. Convert the audit into a subscription to *recover* it going forward.
- **State pharmacy associations.** Kansas, Montana, Iowa, Colorado and Kentucky each have an active state pharmacy association that lobbied for these exact laws. They hold annual conventions and publish member newsletters. These groups *want* their members to enforce the law they just won — that is a warm channel, not a cold one. Sponsor one convention, run a session on "how to actually file under SB 360," walk out with a member list.
- **Buying groups and PSAOs.** Independents cluster into PSAOs and buying cooperatives for contracting leverage. A single PSAO relationship puts you in front of hundreds of stores with an implicit endorsement. Slower to close than direct, but it is how this market actually buys software.
- **NCPA and state-level advocacy channels.** NCPA's federal and state advocacy operation is loudly campaigning on exactly this issue. Contributing genuine data — aggregate anonymised statistics on how often PBMs pay below state floors and how often appeals get denied — buys credibility and coverage that no ad spend replicates.
- **Direct to the loudest.** Pharmacy owners complaining publicly about PBM underpayment in trade press, on LinkedIn and in NCPA forums are self-identifying, named, high-intent prospects. There are hundreds of them and they are not hard to find.

## 10. Build complexity — justification

**Medium**, honestly at the upper end of it.

Off-the-shelf: NADAC is published and free from CMS. Document generation, extraction and classification are standard model calls. The web app is ordinary.

The real work is integration. Reading claims out of pharmacy management systems (PioneerRx, Datascan, Liberty, QS/1, Rx30) is the hard, unglamorous dependency — some offer APIs or report exports, some effectively require scraping or scheduled file drops, and vendor cooperation ranges from indifferent to hostile since you are adjacent to their analytics module. Wholesaler invoice ingestion adds a second messy pipeline. Encoding each state's statute correctly is careful, slow work requiring domain review.

Realistic estimate: 16–22 weeks to a credible v1 for a technical founder plus a pharmacy-domain advisor, launching in two states with two or three PMS integrations. Anyone promising 8 weeks here has not looked at PMS integration.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Filing appeals a pharmacy is statutorily entitled to file. Software acts as agent for the pharmacy; no legal advice rendered. |
| Ethical — no harm / dark patterns | ✅ | Helps small businesses collect money state law says they are owed. Clean. |
| Market exists (evidence above) | ✅ | 19K independents, documented margin crisis, existing paid MAC appeal consultants, PMS vendors already selling detection. |
| 1–5 person team can build this | ✅ | Two people plus a domain advisor. Integration-heavy, not research-heavy. |
| Launchable with <$50K / ₹40L | ✅ | Main costs are dev time, data subscriptions and one convention sponsorship. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 18/20 | Owners are dispensing below cost and closing at over one per day. This is survival, not optimisation. Not a 20 only because the pain is chronic rather than a dated deadline — chronic pain gets normalised. |
| Demand evidence | 15 | 13/15 | Multiple independent hard signals: NCPA margin data, documented closures, paid MAC-appeal consultants already operating, PMS vendors shipping detection features. Docked 2 because I found no direct evidence of pharmacies buying a *dedicated appeal-filing* product — the adjacent spend is proven, this exact SKU is not. |
| Build feasibility | 15 | 11/15 | PMS integration is the choke point and partly outside your control. 16–22 weeks, not 8. |
| Distribution clarity | 15 | 13/15 | Free underwater audit is a strong, concrete opener; state associations are named, warm, motivated channels. PSAO cycles are slow, hence not 15. |
| Revenue mechanics | 15 | 11/15 | Pricing is defensible against recovered dollars and against existing consultant spend. Docked because $5M needs multi-state expansion plus adjacent modules — the 18-month path realistically tops out around $2–3M. |
| Time to first revenue | 10 | 7/10 | The audit-to-subscription funnel is fast once built, but v1 is 4–5 months out. First dollar realistically 5–7 months from start. |
| Defensibility | 10 | 5/10 | Per-state statutory encoding, PMS integrations and accumulating per-PBM denial-pattern data compound into a real head start. But a determined PMS vendor could bolt this on. Execution moat, not structural. |
| **Total** | **100** | **78/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required`

You need someone who can grind through PMS integrations and someone who genuinely understands pharmacy claim adjudication. If you don't have the second person, do not start — you will encode the statutes wrong and file garbage appeals, which is worse than filing none.

### Key assumptions to validate (3–5)

1. **Assumption:** A meaningful share of adjudicated claims at a typical independent are paid below the state's statutory NADAC floor — enough that recovery clearly exceeds $349/mo. **How to test:** Get 90 days of claim data from five pharmacies in Kansas, Montana and Iowa under NDA. Reconcile manually against NADAC plus statutory dispensing fee. Measure recoverable dollars per store per month. This single test makes or breaks the business.

2. **Assumption:** PBMs actually pay these appeals at a workable rate rather than denying by default and daring the pharmacy to escalate. **How to test:** File 50 appeals manually across Optum, Caremark and two smaller PBMs. Measure paid / denied / ignored. Below ~25% paid, the value proposition inverts into a regulatory-complaint product instead of a recovery product.

3. **Assumption:** You can get claim data out of the major pharmacy management systems reliably and legitimately. **How to test:** Before writing a line of product code, contact PioneerRx, Datascan and Liberty about integration terms. A hostile answer from the top two changes the build materially.

4. **Assumption:** Owners will pay flat monthly rather than insisting on contingency. **How to test:** Present both models to 20 owners after showing their audit result. If they reject flat pricing, the ACV and the margin profile both change.

### Risk flags

1. **Regulatory risk (serious).** The Sixth Circuit affirmed that ERISA preempts Tennessee's any-willing-provider law and related restrictions, casting doubt on the enforceability of expanding state PBM legislation. If ERISA preemption guts state reimbursement floors for self-funded plans — which are a large share of commercial lives — the statutory backbone of this product weakens substantially. This is the number one thing to watch and it is genuinely unresolved.

2. **Platform dependency.** PMS vendors control your data access and are adjacent competitors. If PioneerRx decides appeals are their feature, your integration can get harder overnight.

3. **Counterparty adversariality.** Your product's entire function is extracting money from Optum, Caremark and Express Scripts. They will not cooperate. Portal formats will change, response rates may degrade specifically because volume rose, and your customers sit in contractual relationships with these firms.

4. **Market timing / shrinking base.** The customer base is closing at more than one store per day. You are selling into a contracting market — which sharpens urgency but caps the ceiling.

## 14. Structured verdict

```
Score:                  78/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder who can grind integrations, paired with a
                        pharmacy-domain co-founder or advisor with claims adjudication
                        experience. Do not attempt without the domain half.
Time to revenue:        5–7 months (16–22 week build, then fast audit-to-paid funnel)
Capital to launch:      $25–40K (data subscriptions, one convention sponsorship,
                        domain advisor retainer, incorporation and E&O)
Top 3 assumptions to validate first:
  1. Recoverable dollars per store per month exceeds the subscription price by 5×+ —
     manual reconciliation of 90 days of claims from 5 pharmacies in NADAC-floor states
  2. PBM appeal payment rate is high enough to matter — file 50 manual appeals across
     4 PBMs, measure paid vs denied vs ignored
  3. PMS claim data is legitimately accessible — direct integration conversations with
     PioneerRx, Datascan and Liberty before any build
Kill criteria:
  - Abandon if median recoverable dollars per store per month is under $1,000
    (subscription math stops working and owners won't renew)
  - Abandon if manual appeal payment rate across major PBMs is under 20%
  - Abandon if ERISA preemption rulings void NADAC floors for self-funded plans in
    two or more target states
  - Abandon if both PioneerRx and Datascan refuse data access AND ship their own
    appeal-filing feature
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Sign NDAs with five independent pharmacy owners across Kansas, Montana and Iowa — sourced through state association contacts. Get 90 days of adjudicated claim exports.
- **Day 3–4:** Reconcile every claim against published NADAC plus that state's statutory dispensing fee. Produce the actual number: recoverable dollars per store per month, and what share of total claims are underwater. In parallel, call PioneerRx, Datascan and Liberty and ask directly about integration terms.
- **Day 5:** Show each owner their own number and ask for a $349/mo pre-order for a product shipping in five months.

**Falsifiable outcome:** Go if median recoverable dollars per store per month exceeds $1,750 (5× the subscription) **and** at least two of five owners pre-pay. No-go if the median is under $1,000, or if zero owners pre-pay after seeing a real recovery figure from their own data. If they won't pay after you show them their own money sitting on the table, the product is not the problem — the willingness isn't there.
