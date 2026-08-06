---
title: "CardClaim — prior-auth exemption ledger for practices"
slug: gold-card-exemption-ledger
date: 2026-08-07
category: HealthTech / US-SMB — Independent Specialty Physician Practices (3–40 Providers) in Gold-Card States Earning Prior Authorization Exemptions
complexity: Medium
score: 76
verdict: GO
confidence: Medium
oneLiner: "Proves your doctors already earned the prior-auth exemption the insurer never told them about."
tags:
  vertical: HealthTech
  model: SaaS
  geography: US
  secondary: [Compliance-driven, SMB, AI-agent, Revenue-cycle, Regulatory arbitrage]
axes:
  problem: 16
  demand: 12
  build: 11
  distribution: 12
  revenue: 12
  time: 7
  defensibility: 6
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# CardClaim

## 1. One-liner

Proves your doctors already earned the prior-auth exemption the insurer never told them about.

## 2. Trend signal — why now?

Nine-plus states now have gold-card laws on the books — Texas, Louisiana, Michigan, Vermont, West Virginia, Arkansas, Colorado, Illinois, New Mexico, Wyoming — and California's SB 306 gold-carding program takes effect in 2026. These laws are not aspirational: they say that if a physician clears an approval-rate threshold on a service, the insurer **must** grant a standing exemption from prior authorization.

The punchline is that almost nobody gets one. The Texas Department of Insurance reports **only about 3% of physicians have earned Gold Card status** — in the state that pioneered the law in 2021. The Texas Medical Association's own read was that the law's impact was "underwhelming."

That gap is not a performance gap. It's a bookkeeping gap. A revenue-cycle analysis of gold carding put it bluntly: "very few practices can run a report that shows: PA approval rate by CPT code, PA approval rate by payer, [or] Volume of PA requests per service over a defined lookback period" — and concluded that "only a small percentage of physicians have successfully received gold card status so far, **largely due to documentation gaps, not performance issues**."

Meanwhile the burden being left on the table is enormous: the average practice completes **39 prior authorizations per physician per week**, with staff spending roughly **13 hours weekly** on the paperwork.

And Texas just made the rules harder to track by hand. HB 3812 (89th Legislature, effective September 1, 2025) moved the evaluation window from six months to a **full 12 months**, requires at least **five instances** of the service, and forces insurers to pool requests made to the plan *and its affiliates*. A spreadsheet that worked for a six-month look-back is now wrong.

Provenance:
  - Signal 1 (Demand): TDI reports only ~3% of Texas physicians have earned Gold Card status despite a law in force since 2021; TMA calls the impact "underwhelming." — https://www.ama-assn.org/practice-management/prior-authorization/understanding-texas-gold-card-law-advocacy-and-legislative — observed 2026-08-07
  - Signal 2 (Feasibility): Practices provably cannot self-assess — "very few practices can run a report that shows: PA approval rate by CPT code, PA approval rate by payer"; failure attributed to "documentation gaps, not performance issues." — https://pay.certifyhealth.com/gold-carding-prior-auth-billing-data/ — observed 2026-08-07
  - Signal 3 (Economic): Statutory expansion — Texas HB 3812 (eff. Sept 1, 2025) extends evaluation to 12 months, sets a 5-service minimum, and pools affiliate requests; California SB 306 adds a gold-card program effective 2026, widening the addressable base to 9+ states. — https://capitol.texas.gov/tlodocs/89R/billtext/pdf/HB03812F.pdf — observed 2026-08-07
  Category: Regulatory arbitrage

## 3. The opportunity

There is a law that hands practices free money and almost no one collects it.

The gap exists because the scoring is done entirely by the party that loses when you win. The insurer runs the evaluation, the insurer decides whether you hit 90%, and the insurer mails the notice. The practice has no independent tally to check the insurer's math against. When the notice doesn't arrive, the practice has no way to know whether it genuinely missed the threshold or the insurer simply counted wrong — so it does nothing.

The incumbents don't fix this. Valer, Certify, Linear Health and the rest sell full prior-authorization automation — six-figure, rip-and-replace platforms that treat gold-card tracking as a reporting byproduct. Their own marketing concedes the failure mode: EHR systems "lack capability to monitor approval rates across individual providers, specific payer products, procedure codes, and rolling timeframes simultaneously," so organizations fall back on "error-prone manual spreadsheets." Nobody sells the small, sharp thing: a ledger that watches your own PA outcomes and tells you the day a provider crosses the line.

The sharpest edge is a rule almost no practice applies correctly. Under the Texas rules, when an exemption denial goes to an independent review organization, "**if the IRO disagrees with an adverse determination, the request will count as approved for the purposes of the evaluation**." A practice counting raw denials sees 87% and gives up. A practice counting the way the statute counts sees 91% and files. Same clinical record, opposite outcome. That arithmetic is the product.

The IRO review is also free to the practice — the "health benefit plan issuer is responsible for paying the IRO fee" — and physicians may go straight to the IRO without exhausting internal appeals. So the downside of challenging a wrong determination is a form, not a legal budget.

## 4. Target market

- **Primary customer:** Practice administrator or revenue-cycle manager at an independent specialty practice with 3–40 providers, in a gold-card state, in a high-PA specialty — orthopedics, dermatology (Mohs), gastroenterology (endoscopy), radiology, pain management, cardiology. These are the specialties where a handful of CPT codes carry enormous repeat volume, which is exactly the shape gold-carding rewards.
- **Why they buy:** Their staff burns ~13 hours per physician per week on prior auth. An exemption on their top three procedure codes deletes a meaningful slice of that permanently, and it's an entitlement they've already earned clinically. The pitch isn't "work harder" — it's "you already passed, you just can't prove it."
- **Rough TAM reasoning:** Texas alone has 36,313 group practices. Restrict to the 9+ gold-card states, to specialties with concentrated high-volume CPT codes, and to the 3–40 provider band, and a realistic serviceable base is in the low tens of thousands of practices. Capturing 500 of them is a $1.8M business. This does not need to be a big market to work.
- **Why now for them:** Texas's 12-month window and 5-service minimum went live September 2025, meaning the first full evaluation cycles under the new rules land through 2026. California's program starts in 2026. A practice that starts tracking today has a clean statutory year of evidence; one that starts in 2027 has lost a cycle.

## 5. Product sketch (MVP)

- **Live eligibility ledger** — every provider × payer × CPT combination, showing approval count, denial count, current rate, and distance from the state threshold.
- **Statutory counting engine** — applies the actual rule, not naive arithmetic: counts IRO-overturned denials as approvals, enforces the 5-service minimum, applies the correct 12-month rolling window per state, and pools affiliate plans where the law requires it.
- **Crossing alerts** — "Dr. Reyes crossed 90% on CPT 17311 with Aetna as of last Tuesday. Expect a notice within five days."
- **Missing-notice watchlist** — flags providers who met the threshold but where no exemption notice arrived within the statutory five-day window. This is the money screen.
- **IRO challenge packet** — assembles the request for independent review with the underlying claim-level evidence, pre-filled, ready to send before the rescission effective date.
- **Rescission calendar** — Texas permits rescission "only during January," so the product watches that window and preps a defense.
- **Plan-scope filter** — separates fully-insured/TDI-marked members from self-funded and other plans that fall outside the mandate, so nobody chases an exemption that doesn't legally exist.
- **Quarterly exemption statement** — a one-page PDF the administrator forwards to the physician-owners showing hours and dollars freed.

## 6. AI angle — what's load-bearing

Remove the AI and this product does not exist, because the input is a mess.

PA outcomes arrive as 278 responses, payer-portal screens, faxed determination letters, PDF denial notices, and free-text remarks. The load-bearing work is normalizing that garbage into a defensible per-provider, per-payer, per-code ledger — extracting the determination from a scanned letter, matching it back to the right authorization request and rendering provider, and classifying whether a given adverse determination was overturned, upheld, or is still pending at day 30.

That last classification is the whole business. Whether a specific denial counts as an approval under the statute is a document-reading judgment call made across thousands of unstructured records. A rules engine over clean structured data would be trivial — but nobody has clean structured data. That's precisely why the incumbents' EHR-report approach fails and why practices default to spreadsheets.

Second load-bearing use: mapping each state's statutory language onto the counting rules, and keeping that current as legislatures amend it. Texas alone changed materially between 2021 and 2025.

## 7. Localization angle (if any)

N/A — this is a US-only play, and deliberately so. The product's value is entirely derived from state-specific statutory text. There is no gold-carding analog in India, the EU, or LatAm because prior authorization as a utilization-management construct is largely an artifact of US commercial insurance. The "localization" that matters here is *interstate*: Texas, California, Michigan and Louisiana each count differently, and that per-state rule library is the durable asset.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** $299/mo for practices up to 10 providers; $599/mo for 11–25; $1,200/mo for 26–40. Annual prepay discount of two months.
- **ACV:** ~$4,800 blended. This is modest against the alternative — full PA automation platforms sell into the five and six figures — and that gap is the wedge.
- **Rough math to $1M ARR:** ~210 practices at $4,800. At a 3–5 provider average that's roughly 800–1,000 physicians under management. Achievable in a single state.
- **Rough math to $5M ARR:** ~1,040 practices, which requires being live in 6–8 gold-card states with a real presence in California and Texas, plus the upsell tier below. This is a 3–4 year build, not an 18-month one — call it the honest ceiling rather than the plan.
- **Expansion path:** Three levers. (1) Provider-count creep as practices add associates. (2) A **contingency tier** — take 15–20% of first-year documented savings on exemptions won through an IRO challenge the customer would not otherwise have filed. Aligns incentives and prices the highest-value action. (3) Sell the aggregate benchmark ("your denial rate on 17311 vs. peer practices in Texas") as an analytics add-on once enough ledger volume accumulates.

I would not build the contingency tier first. It's operationally heavy and it turns a software sale into a services sale. But it's the reason ACV doesn't stay flat at $4,800.

## 9. Go-to-market wedge — first 100 customers

- **The free audit, run backwards.** Offer a no-charge "Exemption Gap Report": the practice exports 12 months of PA history, we return a list of every provider/payer/code combination that already crosses the threshold, and how many currently have no exemption on file. This is a hard, specific, verifiable number delivered before any commitment — and for practices in high-volume specialties, some of those numbers will be non-zero on day one. That report *is* the sales pitch.
- **Specialty societies, not general practice groups.** The Texas Orthopaedic Association, state dermatology and GI societies, and county medical societies (Harris County Medical Society already publishes gold-card rules to members) all actively push prior-auth advocacy content to exactly this audience. Sponsor the practice-management track at 4–6 state specialty meetings a year; these are small rooms with the actual buyer in them.
- **Ride the TMA advocacy channel.** TMA has publicly campaigned that the law isn't being implemented as intended. A tool that produces evidence of non-compliant insurer determinations is aligned with an organization that already has the megaphone and the member list. Partnership, not cold outreach.
- **Target the billing companies.** Independent RCM firms and third-party billing companies each serve 20–80 practices and already hold the claim data. Sell a per-practice wholesale seat; one integration deal delivers dozens of logos. This is the fastest route past 100.
- **Concrete first push:** the 2026 California SB 306 start date is a dated, newsworthy hook. Build a per-state "gold card readiness" explainer for CA, TX, MI and LA, and pair it with the free audit offer aimed at the ~200 largest independent orthopedic and dermatology groups in those states.

## 10. Build complexity — justification

**Medium.** The hard parts are ingestion and the rules library, not the app. Pulling PA outcomes means working with clearinghouse 278 transaction data, payer portals, and a pile of unstructured determination documents — that's real integration and extraction work, roughly 10–14 weeks for a pair to do credibly on two or three payers in one state. The rules engine itself is small. The per-state statutory library is ongoing maintenance rather than upfront cost.

The deliberate scope cut for v1: **one state (Texas), three payers, four specialties, and a manual CSV/export-based ingestion path** instead of live integrations. That version is 8–10 weeks and is enough to produce the Exemption Gap Report, which is the thing that actually sells. Live integrations follow the first ten paying customers.

This is not a HIPAA-free product — PHI is in scope, so a BAA, encryption, access logging and a SOC 2 path are table stakes. That's cost and calendar, but it's well-trodden, not novel.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Helps practices exercise a statutory right. No licensure needed; this is not utilization review or the practice of medicine. |
| Ethical — no harm / dark patterns | ✅ | Reduces administrative friction and speeds patient access to already-justified care. The counterargument — that gold-carding rewards physicians who rarely get denied and ignores those struggling most — is a critique of the law, not of a tool that helps practices claim what the law grants. |
| Market exists (evidence above) | ✅ | 9+ states with statutes, 3% capture rate, documented tracking failure, incumbents charging heavily for adjacent capability. |
| 1–5 person team can build this | ✅ | Two engineers plus a part-time RCM domain advisor. |
| Launchable with <$50K / ₹40L | ✅ | Main line items are clearinghouse data access, SOC 2 groundwork, and society sponsorships. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | 13 hrs/physician/week of PA burden is severe and chronic. Docked because the pain is *ambient* rather than deadline-driven — nobody gets fined for failing to claim an exemption, so it competes with more urgent fires. |
| Demand evidence | 15 | 12/15 | Strong indirect evidence: 3% capture rate, TMA advocacy, incumbent marketing naming the exact gap. Docked because I found no verbatim practice-administrator complaint specifically asking for this tool — the demand is inferred from the gap, not from people begging. |
| Build feasibility | 15 | 11/15 | Rules engine is easy; PA-outcome ingestion across payers and unstructured documents is genuinely fiddly. HIPAA/SOC 2 adds calendar. 8–10 weeks scoped, 4–5 months for the real thing. |
| Distribution clarity | 15 | 12/15 | Named societies, named advocacy partner, a free-audit offer with a hard number, and RCM firms as a multiplier. Docked because medical practices are slow buyers and society calendars are quarterly. |
| Revenue mechanics | 15 | 12/15 | $4,800 ACV against a real alternative cost is defensible; 210 customers to $1M is a believable number. Docked because $5M needs multi-state expansion plus the contingency tier, which is a different, heavier business. |
| Time to first revenue | 10 | 7/10 | The free audit shortens the cycle materially, but healthcare procurement plus a BAA means 6–10 weeks from first conversation to cash. |
| Defensibility | 10 | 6/10 | Soft moat, honestly assessed. The per-state statutory rules library and accumulated ledger data compound, and workflow lock-in is real once a practice's exemption history lives here. But a determined incumbent with PA data already in hand could bolt this on. The bet is that they won't bother, because it cannibalizes the PA automation they sell. |
| **Total** | **100** | **76/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required`

You need someone who has actually lived in a revenue-cycle department. The difference between a working product and a toy is knowing how a 278 response maps to a payer's portal record — that knowledge isn't on the internet. Pair a strong engineer with an RCM veteran or don't start.

### Key assumptions to validate (3–5)

1. **Assumption:** A meaningful share of practices have providers already over threshold with no exemption on file. **How to test:** Run the free Exemption Gap Report manually for 15 practices across orthopedics/derm/GI. If fewer than a third surface at least one un-granted qualifying combination, the core premise is wrong and the product is just a dashboard.
2. **Assumption:** Practices can actually export 12 months of PA outcome data in a usable form. **How to test:** Ask 20 administrators to produce the export from their EHR/PM system. Measure how many succeed unaided within a week. If most can't, ingestion cost balloons and the 8–10 week MVP estimate is fiction.
3. **Assumption:** Administrators will pay ~$300/mo for an entitlement they think should arrive automatically. **How to test:** Take the 15 audit results to a paid-pilot conversation. Target 5 conversions. Watch specifically for "shouldn't the insurer just do this?" — that objection, if it dominates, is a pricing-ceiling signal.
4. **Assumption:** The IRO challenge path is practically usable, not just theoretically available. **How to test:** Interview 5 practices or health-law attorneys who have actually filed one. Confirm turnaround, effort, and whether insurers retaliate in softer ways.

### Risk flags

1. **Regulatory risk (two-sided):** Federal preemption or a national gold-card standard could flatten the per-state rules library that constitutes the moat. Conversely, insurers lobbying to weaken state laws would shrink the market. The AMA is pushing federal gold-card legislation — that's an opportunity for reach and a threat to differentiation at the same time.
2. **Plan-scope ceiling:** The mandate reaches fully-insured plans and certain ASO groups, but self-funded ERISA plans are largely outside state insurance regulation. In a practice with a heavily self-funded payer mix, the addressable share of PAs may be far smaller than the headline volume — and the customer will feel misled if that isn't stated upfront. Be honest about it in the audit report.
3. **Incumbent bolt-on:** Valer, Certify and Linear already hold PA data and already publish content about this exact gap. If one ships gold-card tracking as a free feature, the standalone product's oxygen thins fast. The counter-bet is structural: exemptions reduce PA volume, which is what they charge for.
4. **Ambient-pain buying cycle:** No deadline forces this purchase. Unlike a filing tool where a missed date means a fine, a practice can defer this forever at no immediate cost. Expect longer cycles than the pain level suggests, and lead with the dollar figure from the audit rather than the workflow story.

## 14. Structured verdict

```
Score:                  76/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder paired with a revenue-cycle veteran
                        who has run prior auth inside a specialty practice
Time to revenue:        8–12 weeks (free audit shortens the cycle materially)
Capital to launch:      $25–40K (clearinghouse data access, SOC 2 groundwork,
                        specialty society sponsorships)
Top 3 assumptions to validate first:
  1. Un-granted qualifying combinations are common — run 15 manual Exemption
     Gap Reports; require ≥1/3 of practices to surface at least one
  2. Practices can export 12 months of PA outcomes — test with 20 administrators
     unaided; require ≥50% success
  3. Willingness to pay ~$300/mo — convert 5 of 15 audited practices to paid pilot
Kill criteria:
  - Abandon if fewer than 1 in 3 audited practices surfaces a single provider/
    payer/code combination that qualifies but has no exemption on file
  - Abandon if fewer than 5 of 15 audited practices convert to a paid pilot
  - Abandon if a major PA automation incumbent ships free gold-card eligibility
    tracking before v1 ships
  - Abandon if self-funded/ERISA plans turn out to dominate the payer mix in
    target specialties, shrinking addressable PA volume below ~40%
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Build the counting rules for Texas by hand — 12-month window, 5-service minimum, IRO-overturned-counts-as-approved. Pull the published gold-card-eligible code lists from the three largest Texas payers. No software; a spreadsheet is fine. The output is a scoring method I can defend line by line against the statute.
- **Day 3–4:** Recruit 15 independent Texas practices in orthopedics, dermatology and GI through county medical society contacts and direct outreach. Offer the free Exemption Gap Report in exchange for a 12-month PA export. Track two things separately: how many *agree*, and how many can actually *produce the file*. The second number is the real build-cost signal.
- **Day 5:** Score every export by hand. Count practices with at least one qualifying-but-unexempted combination. Then take those results back and ask for a $299/mo paid pilot on the spot.

**Falsifiable outcome:** Of 15 practices audited, at least 5 must show a qualifying provider/payer/code combination with no exemption on file, **and** at least 3 must commit to a paid pilot within the week. Below either number, the gap is smaller than the 3% statistic implies — meaning insurers are granting exemptions correctly and the 97% simply don't qualify — and I kill it. That distinction is the entire thesis, and one week of real data settles it.
