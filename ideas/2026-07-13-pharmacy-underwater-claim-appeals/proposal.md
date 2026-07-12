---
title: "UnderRx — underwater-claim appeal desk for pharmacies"
slug: pharmacy-underwater-claim-appeals
date: 2026-07-13
category: HealthTech / US — Independent Community Pharmacies (below-cost PBM reimbursement appeals)
complexity: Medium
score: 78
verdict: GO
confidence: Medium
oneLiner: "Catches every prescription reimbursed below cost and files the invoice-backed PBM appeal before the clock runs out."
tags:
  vertical: HealthTech
  model: SaaS
  geography: US
  secondary: [SMB, AI-agent, Compliance-driven, Workflow-automation, Solo-builder]
axes:
  problem: 18
  demand: 13
  build: 11
  distribution: 12
  revenue: 12
  time: 8
  defensibility: 4
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# UnderRx

## 1. One-liner

Catches every prescription reimbursed below cost and files the invoice-backed PBM appeal before the clock runs out.

## 2. Trend signal — why now?

Independent pharmacy is bleeding out, and for the first time the bleeding is legally recoverable.

The structural collapse is not in dispute. NCPA counted **18,960 independent community pharmacy locations as of July 2025**, and the sector lost **7,000+ pharmacies — over 10% of all US pharmacies — between 2017 and 2024**. Rite Aid closed its final stores in late 2025. Walgreens sold to private equity for **less than 10% of its decade-ago valuation**. Independent pharmacy gross profit margin fell to **19.7%, the lowest in the NCPA Digest's 10-year lookback**. Meanwhile average volume climbed to roughly **213 prescriptions per day per store**. More scripts, less money.

The cause is below-cost reimbursement: PBMs routinely pay pharmacies less than what the pharmacy paid the wholesaler for the drug. Stratos Insights puts the damage at **$40,000–$100,000 per year, per pharmacy, in below-cost reimbursements that go unchallenged.** Against a 19.7% margin, that is not a rounding error — it is the entire difference between solvent and shuttered.

Here is what changed. **States have made these claims winnable, and they did it in the last 18 months.** Arkansas, Kentucky, Georgia, Tennessee, West Virginia, Nebraska, Iowa, Alabama, Louisiana, Montana and California now mandate NADAC-based reimbursement plus a professional dispensing fee. Kentucky's fee is **$10.64**. Nebraska's is **$10.38**. California's SB 41 (signed October 2025) sets **$10.05**. Louisiana went furthest: if NADAC is below what the pharmacy actually paid — **as documented by wholesaler or manufacturer invoice** — the PBM must pay the difference up to acquisition cost, plus the **$11.81** Medicaid dispensing fee on every commercial claim. Enforcement has teeth: **CVS paid $5M+ to settle Oklahoma AG allegations of below-acquisition-cost reimbursement across 68,000+ prescriptions**, with 75% flowing back to affected pharmacies.

And yet the money mostly sits uncollected, because the appeal is a per-claim grind against a brutally short clock. **Tennessee requires disputes filed within seven business days of claim submission.** Washington runs a two-tier process — 30 days at the PBM, then 30 days to escalate to a state ALJ. The evidence bar is unforgiving, and this is the sentence the whole business rests on:

> "The law typically requires that the actual invoice proving negative margin be attached to each individual appeal in the portal, and if the cost is approximated or you don't follow your state's regulations to the letter, PBMs won't comply."
> — *Pharmacy Marketplace*

Per claim. Actual invoice. Exact statutory language. Seven days. A pharmacy running 213 scripts a day cannot do this by hand — so it doesn't. The PSAO can't rescue them either: **"blanket-level appeals don't align with the specific language in state laws."** The one lever that works is the one nobody has time to pull.

Provenance:
  - Signal 1 (demand): Average community pharmacy loses $40,000–$100,000/year to unchallenged below-cost reimbursements; gross margin at 10-year low of 19.7%; 7,000+ pharmacy closures 2017–2024 — https://www.stratosinsights.com/cost-saving-strategies-for-pharmacies-resubmitting-below-cost-prescription-claims/ + https://www.forbes.com/sites/sethjoseph/2026/03/26/the-pharmacy-business-model-is-breaking-states-are-scrambling-to-fix-it/ — observed 2026-07-13
  - Signal 2 (feasibility): The appeal requires per-claim invoice-line matching against state-specific statutory language under 7–30 day clocks; PSAO blanket appeals structurally fail this bar — https://pharmacymarketplace.com/blog/the-best-kept-secret-in-pharmacy-how-to-actually-recover-your-underwater-claims/ + https://www.insurance.wa.gov/laws-rules/administrative-hearings/small-pharmacy-reimbursement-appeals/about-small-pharmacy-reimbursement-appeals — observed 2026-07-13
  - Signal 3 (economic): 11+ states enacted NADAC + dispensing-fee floors ($10.05–$11.81) in 2025–26; CVS paid $5M+ settling Oklahoma below-cost claims across 68,000+ prescriptions with 75% returned to pharmacies — https://www.frierlevitt.com/articles/2026-state-pbm-reform-nadac-reimbursement-spread-pricing-bans/ — observed 2026-07-13
  Category: Regulatory arbitrage

## 3. The opportunity

Every incumbent in this space stops one step short of the money.

Econcile (FDS), EnlivenHealth, and the PSAOs all do **reconciliation**: they tell you which claims were underpaid relative to what the PBM contracted to pay. That's an accounting function. It answers "did the check match the remittance?"

Nobody automates the **appeal**. The appeal is a different animal entirely, and it requires three things joined together at the claim level:

1. **The claim** — what the PBM actually reimbursed, from the pharmacy management system.
2. **The invoice line** — what this pharmacy actually paid this wholesaler for this NDC in this acquisition window. Not an average. Not NADAC. The literal invoice line, because approximated cost gets the appeal thrown out.
3. **The statute** — the specific language of the specific state's reimbursement floor, cited correctly, filed in the right portal, inside the right clock.

Joining those three is a document-matching problem across messy, heterogeneous inputs — wholesaler invoice PDFs from McKesson/Cardinal/ABC in different formats, PMS claim exports, 50 states' worth of divergent rules and deadlines. That's precisely the shape of problem that got cheap and reliable in the last 18 months and was miserable before it.

The incumbent weakness is not laziness — it's positioning. Reconciliation vendors sell to the pharmacy's *bookkeeping* workflow and get paid whether or not a dollar is recovered. The PSAO files blanket appeals that state law does not accept. Neither is structurally motivated to fight claim-by-claim. A focused tool that files the individual, invoice-backed, statute-cited appeal is doing the work that the entire legal apparatus was just rebuilt to reward.

## 4. Target market

- **Primary customer:** Owner-operator of an independent community pharmacy (1–15 locations) in a state with an enacted NADAC/acquisition-cost reimbursement floor — Kentucky, Louisiana, California, Arkansas, Tennessee, Georgia, West Virginia, Nebraska, Iowa, Alabama, Montana. Typically the pharmacist-owner is also the person who would otherwise be doing this at 9pm.
- **Why they buy:** They are losing **$40K–$100K a year** to below-cost claims they never appealed, on a **19.7% gross margin**. Recovering even a third of it is the difference between hiring a tech and closing a store. They know the money is there; they cannot spare the hours to chase it inside a 7-day window.
- **Rough TAM reasoning:** ~18,960 independent locations nationally. The NADAC-floor states are a meaningful slice — call it 5,000–7,000 locations with a live statutory right to recover today, expanding as more states enact (South Carolina and New York have bills pending). At $299/mo that's a $18M–$25M serviceable market on the current statute map alone, before performance fees and before more states pass.
- **Why now for them:** Two clocks are running simultaneously. The statutory right to recover is new (most of these laws took effect Jan 2025–Jan 2026), and each individual claim's appeal window is 7–30 days. Every month they wait, another month of recoverable claims ages out permanently. This is a use-it-or-lose-it asset with a rolling expiry.

## 5. Product sketch (MVP)

- **Daily underwater sweep.** Ingests the pharmacy management system's claim export and flags every prescription reimbursed below true acquisition cost — not below NADAC, below *what this pharmacy actually paid*.
- **Invoice-line matching.** Ingests wholesaler invoice PDFs/EDI (McKesson, Cardinal, ABC/Cencora) and binds each underwater claim to the exact invoice line that proves the negative margin. This is the evidence the statute demands and the thing PSAOs can't produce.
- **State rule engine.** Knows each state's reimbursement floor, dispensing-fee amount, appeal deadline, and required filing language. Kentucky at $10.64 and Louisiana at $11.81 are different appeals; the tool writes each correctly.
- **Deadline board.** Every underwater claim shows its filing window and days remaining. Tennessee's 7-business-day clock is a countdown, not a surprise.
- **Auto-drafted appeal packets.** Generates the per-claim appeal — claim data, invoice proof, statutory citation — formatted for the destination PBM portal (Caremark, Optum, ESI), ready to submit.
- **Tier-2 escalation.** When a PBM denies or lets the window lapse, assembles the state-level appeal (e.g. Washington's ALJ filing under WAC 284-180-507) from the same evidence, no re-keying.
- **Recovery ledger.** Tracks filed → won → reversed-and-rebilled, with dollars recovered per month. The number the owner shows their accountant to justify the subscription.

## 6. AI angle — what's load-bearing

Remove the AI and the product collapses into a spreadsheet nobody fills in — which is exactly the status quo that's leaving $40K–$100K on the table per store.

The load-bearing work is **evidentiary document joining under adversarial review.** Wholesaler invoices arrive as PDFs and EDI files with wildly inconsistent layouts across McKesson, Cardinal and Cencora, with NDCs, pack sizes, and unit-vs-package pricing that must be normalized before you can even ask "did we lose money on this fill?" Matching a specific dispensed claim to the specific invoice line that sourced that stock — correct NDC, correct acquisition window, correct unit math — is the entire evidentiary basis of the appeal. Get the pack-size math wrong and you've filed a false claim of negative margin, which is worse than not filing.

Second, the appeal itself is a **drafting** task against 11+ divergent statutes. The same underwater claim in Kentucky and Louisiana produces materially different appeals with different fee entitlements and different citations. Encoding that as rigid templates across 50 states is brittle; generating the correct argument from a structured rule set is tractable now and wasn't cheaply so two years ago.

What AI must **not** do here: invent an acquisition cost. The system's hard rule is that every appeal is backed by a real invoice line or it does not get filed. Approximation is what gets appeals rejected — the product's credibility is that it never approximates.

## 7. Localization angle (if any)

N/A as a country play — this is US-only by construction. But the *state* is the localization axis, and it's the whole moat.

There is no "US pharmacy reimbursement law." There are 50 of them, diverging fast. Kentucky pays $10.64, Nebraska $10.38, California $10.05, Louisiana $11.81 plus a true acquisition-cost floor. Tennessee gives you 7 business days; Washington gives 30 plus an ALJ backstop; Nebraska's law only covers independents with 6 or fewer locations. South Carolina's pending bill proposes 104% of NADAC.

The go-to-market is therefore **state-by-state, not national**. Launch in the two or three states with the most generous floor and the clearest appeal path (Louisiana and Kentucky are the obvious openers), win the local pharmacist association, then replicate. Each new state is a content asset, a rule-set addition, and a fresh cohort of pharmacies with a brand-new statutory right they don't yet know how to exercise.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** $299/mo per location (base), plus a **15% performance fee on dollars actually recovered**. The base covers the sweep, the deadline board and the drafting; the performance fee is what makes the buying decision trivial.
- **ACV:** $3,588 base. On a store recovering even $30K/year (conservative against the $40K–$100K figure), the performance fee adds ~$4,500 — realistic blended ACV of **~$6,000–$8,000**.
- **Rough math to $1M ARR:** 150 locations × $6,700 blended = $1.0M. That's ~2–3% of the pharmacies in the currently-covered NADAC states. Extremely reachable.
- **Rough math to $5M ARR:** ~700 locations at blended ACV, or fewer locations as more states enact floors and per-store recoverable dollars rise. Multi-location independents (up to 15 stores) pull the average up fast — one 8-store group is 8 seats on one sale.
- **Expansion path:** More states = more recoverable claims per existing customer (no new sale needed). Then adjacent recovery: DIR-fee clawback challenges, PBM audit defense, and the Tier-2/arbitration escalation tier — the same evidence spine, higher-value disputes. The AHF v. Caremark arbitration awarded **$23M**; there is a serious upmarket motion in assembling that evidence.

The performance fee is the honest part of this model: if the product doesn't recover money, the pharmacy has lost $299/mo and will churn, correctly. I want that pressure on me.

## 9. Go-to-market wedge — first 100 customers

The beauty here is that the pitch is arithmetic, not vision. I can tell a pharmacist a number about *their own store* before they've paid me a cent.

- **The free underwater audit.** Take one month of a pharmacy's claim export plus their wholesaler invoices, run the sweep, and hand back: "You lost $6,400 last month on 84 below-cost claims. $2,100 of it is still inside its appeal window. Here are the 84 claims." That is not a demo, it's a diagnosis with a live expiry date. Conversion on that offer should be brutal in the good way — I'm showing them money currently on fire.
- **State pharmacist associations, one at a time.** Louisiana Independent Pharmacies Association, Kentucky Pharmacists Association, and the NCPA state affiliates exist precisely to fight PBMs, and they just won these laws. They have newsletters, annual meetings, and members who feel personally wronged. Sponsor one state convention, run the free audit at the booth, walk out with 20–40 stores. These are 200–800 person rooms of exactly one buyer persona.
- **The 68,000-prescription list.** CVS's Oklahoma settlement compensated pharmacies across 68,000+ prescriptions — that's a public, enumerated set of pharmacies who have already been formally recognized as victims of below-cost reimbursement and who just received a check proving the claim works. Every one of them now knows the money is real. Direct outreach to that cohort, with the audit offer, is the highest-intent list in the category.
- **Ride each new state's enactment.** South Carolina (HB 4791) and New York (S5939/S6323) have bills pending. The week a state's floor takes effect, every independent in it acquires a recoverable asset and zero idea how to collect it. Be the first thing they read — a state-specific "here's what you can now claw back" breakdown, published the day the law lands.
- **Wholesaler and PMS integrations as a channel.** The PMS vendors (PioneerRx, Liberty, Rx30) have the claim data and their customers are hemorrhaging. A referral or marketplace listing puts the audit in front of thousands of stores without cold outreach.

## 10. Build complexity — justification

**Medium.** The hard parts are honest engineering, not research.

Off-the-shelf: the web app, the LLM drafting layer, the deadline tracking, document extraction from invoice PDFs. The real work is (a) **normalizing wholesaler invoice formats** across McKesson/Cardinal/Cencora including the pack-size and unit-price math, which is fiddly and must be exactly right; (b) **PMS claim ingestion** from PioneerRx/Liberty/Rx30, which is integration grind; and (c) **encoding the state rule sets** — deadlines, fee amounts, filing language — which is domain work best done with a pharmacy-law advisor rather than guessed at.

Realistic v1 for a technical founder plus a domain advisor: **12–16 weeks**, scoped to two states (Louisiana + Kentucky) and one PMS. Deliberately do not build 50 states or six integrations before first revenue — the whole point is that two states already contain thousands of bleeding pharmacies.

The accuracy bar is the constraint that sets the timeline. A false "you lost money here" appeal filed on bad pack-size math damages the customer's standing with their PBM. This has to be right before it's fast.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | The product helps pharmacies exercise a right that state statutes explicitly grant them. It is the intended use of the law. |
| Ethical — no harm / dark patterns | ✅ | Recovers money legally owed to small businesses from PBMs. The hard rule against approximated costs means we never file an unsupported claim. |
| Market exists (evidence above) | ✅ | $40K–$100K/store/year unrecovered; 18,960 stores; CVS already paid $5M+ settling exactly this. |
| 1–5 person team can build this | ✅ | Technical founder + domain advisor, 12–16 weeks to a two-state v1. |
| Launchable with <$50K / ₹40L | ✅ | Web app + document extraction + legal advisory. No capex, no licensing gate. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | **18**/20 | Hair-on-fire. $40K–$100K/year lost on a 19.7% margin, with 7,000+ stores already dead. Owners feel this every single month and it is existential, not annoying. Held off 19–20 only because it's a *recovery* pain, not an operational blocker — the store still opens tomorrow. |
| Demand evidence | 15 | **13**/15 | Multiple independent hard signals: a quantified per-store loss figure, 11+ states legislating the floor, a $5M CVS settlement across 68K prescriptions, and vendors already selling adjacent reconciliation. A skeptic nods. Docked for lack of direct verbatim owner quotes on *appeal automation* specifically. |
| Build feasibility | 15 | **11**/15 | Doable in 12–16 weeks but demands discipline: wholesaler invoice normalization and pack-size math must be exactly right, plus PMS integration grind. Not a weekend API wrapper. |
| Distribution clarity | 15 | **12**/15 | The free underwater audit is a named, high-intent motion with a concrete artifact. State associations are enumerable rooms of pure-fit buyers. Docked because association sales cycles and PMS integrations are slower than a pure self-serve funnel. |
| Revenue mechanics | 15 | **12**/15 | $299/mo + 15% of recovered dollars is benchmarked against a loss the customer can see. 150 locations to $1M is genuinely modest. Docked because the performance fee depends on PBM win rates that are not yet proven at scale by me. |
| Time to first revenue | 10 | **8**/10 | The audit produces a signed customer fast — the pitch is "here is your money burning." Not a 4-week cycle because pharmacy owners are busy and the first integration takes time. |
| Defensibility | 10 | **4**/10 | **The weak axis, and I won't pretend otherwise.** The state rule sets and invoice-normalization corpus compound, and recovered-dollar history creates real workflow lock-in. But Econcile or EnlivenHealth already own the claim data and could extend into appeals. This is an execution-and-speed moat, not a structural one. |
| **Total** | **100** | **78**/100 | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required`

The document-matching and invoice-math engineering is the core, but the state rule sets cannot be guessed. This needs a pharmacy-law or PBM-contracting advisor from day one — ideally a former PSAO or pharmacy-association operator who has actually filed these appeals.

### Key assumptions to validate (3–5)

1. **Assumption:** A meaningful share of appeals filed correctly (per-claim, invoice-backed, statute-cited) actually get paid by PBMs. **How to test:** Manually file 50 appeals for 3 friendly pharmacies in Louisiana and Kentucky. Measure the win rate and dollars recovered. If PBMs stonewall correctly-filed appeals, the performance fee model dies and so does the value prop.
2. **Assumption:** Wholesaler invoice data can be reliably joined to PMS claim data at the NDC/acquisition-window level with correct pack-size math. **How to test:** Take 3 pharmacies' real invoice and claim exports and attempt the join by hand. Measure match rate and error rate. Below ~90% clean match, the evidence is not court-grade.
3. **Assumption:** Pharmacy owners will pay a 15% performance fee rather than hire a $20/hr tech to do it manually. **How to test:** Present the audit result plus pricing to 30 owners. Watch whether the objection is price or trust.
4. **Assumption:** The recoverable amount per store is large enough to matter — i.e. the $40K–$100K figure holds for a typical store rather than being a worst case. **How to test:** The free audits *are* the test. Twenty audits give a real distribution of monthly recoverable dollars.

### Risk flags

1. **Incumbent extension risk:** Econcile/EnlivenHealth/FDS already hold the claim data and the customer relationship. If they bolt on appeal-filing, they start from a better position than I do. My counter is speed and focus — they are accounting vendors and appeals are not their instinct — but this is the real threat and it's why defensibility scored 4.
2. **Regulatory reversal risk:** These laws are young and under attack. Arkansas's PBM-ownership ban already drew a **preliminary injunction (July 28, 2025)**. If the NADAC-floor statutes get enjoined or preempted (ERISA is the perennial threat to state PBM regulation), the recoverable asset shrinks. Mitigation: the product works anywhere a contractual or statutory floor exists, and federal reform (Consolidated Appropriations Act, passed Feb 3, 2026) is pushing the same direction.
3. **PBM retaliation fear:** Owners may worry that aggressive appealing invites audits or network termination. The evidence says retaliation is rare and legally reversible, but the *fear* is a live sales objection and must be handled head-on with the association endorsement.
4. **Platform dependency:** Reliant on PMS claim exports and wholesaler invoice formats. If PioneerRx or a wholesaler restricts data access, ingestion gets harder. Mitigation: pharmacies own their own data and can export it; the fallback is customer-initiated file upload, which is annoying but not fatal.

## 14. Structured verdict

```
Score:                  78/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder who can do gnarly document/data normalization,
                        paired with a pharmacy-law or PBM-contracting advisor.
                        Not a first-time builder — the accuracy bar is unforgiving.
Time to revenue:        8–12 weeks (audit-led sales can close before the product is fully built)
Capital to launch:      $15–25K (advisor retainer + document extraction costs + one state convention)
Top 3 assumptions to validate first:
  1. Correctly-filed, invoice-backed appeals actually get paid — file 50 by hand
     for 3 friendly pharmacies in LA/KY and measure win rate.
  2. Invoice-to-claim joining is achievable at >90% clean match with correct
     pack-size math — attempt the join by hand on 3 real pharmacies' data.
  3. Recoverable dollars per store are material — run 20 free audits and get a
     real distribution, don't trust the $40K–$100K range on one source.
Kill criteria:
  - Abandon if correctly-filed appeals win less than ~40% of the time — the
    performance-fee model and the entire value prop collapse.
  - Abandon if the median free audit surfaces less than ~$1,000/month in
    recoverable claims — the $299/mo + 15% pricing has no room to live.
  - Abandon if a reconciliation incumbent (Econcile/EnlivenHealth) ships
    per-claim invoice-backed appeal filing before the two-state v1 lands.
```

## 15. Next step — 1-week validation sprint

The whole idea rests on one question: **do correctly-filed appeals actually get paid?** Everything else is engineering. So the sprint attacks that and nothing else.

- **Day 1–2:** Recruit 3 independent pharmacies in Louisiana and Kentucky (via the state associations or NCPA affiliate networks). Get one month of claim exports and the matching wholesaler invoices from each. Do the underwater join **by hand** — no product, just a spreadsheet and effort. Record the match rate and the total recoverable dollars found per store.
- **Day 3–4:** Hand-file 50 appeals across those 3 stores — per claim, invoice attached, correct statutory citation, inside the window. This is deliberately manual. I want to feel every minute of the grind I intend to automate, and I want to know exactly where PBMs push back.
- **Day 5:** Count the money and make the call.

**Falsifiable outcome:** Go if (a) the median store shows **≥$1,000/month** in recoverable underwater claims, AND (b) the hand-filed appeals are winning at **≥40%** or are still pending with no procedural rejections. No-go if PBMs bounce correctly-filed appeals on technicalities, or if the recoverable dollars per store come in an order of magnitude below the $40K–$100K annual figure — which would mean that number is a worst case dressed up as an average, and the market is a fraction of what it looks like.

That is a real experiment with a real way to be wrong, and it costs a week and zero code.
</content>
</invoke>
