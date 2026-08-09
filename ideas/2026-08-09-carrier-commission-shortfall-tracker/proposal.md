---
title: "ClawBack — commission shortfall tracker for agencies"
slug: carrier-commission-shortfall-tracker
date: 2026-08-09
category: FinTech / US-SMB — Independent P&C and Medicare Agencies (2–15 Staff, Under $1.25M Revenue) Who Reconcile Carrier Commission Statements in Excel or Not at All
complexity: Low
score: 76
verdict: GO
confidence: Medium
oneLiner: "Reads every carrier commission statement, flags the policies you were underpaid on, and hands you the dispute."
tags:
  vertical: FinTech
  model: SaaS
  geography: US
  secondary: [SMB, AI-agent, Document-AI, Solo-builder, Revenue-recovery, Insurance]
axes:
  problem: 16
  demand: 13
  build: 12
  distribution: 12
  revenue: 12
  time: 8
  defensibility: 3
founderFit: [technical-heavy, sales-heavy]
featured: false
---

# ClawBack

## 1. One-liner

Reads every carrier commission statement, flags the policies you were underpaid on, and hands you the dispute.

## 2. Trend signal — why now?

Three things are true at once, and they weren't three years ago.

**The leakage is now measured, not guessed.** IIABA 2025 data cited by BrokerageAudit shows agencies deploying dedicated commission tracking recover **$15,000–$25,000 in missed commissions per $1M of gross written premium in their first year**, with 12-month retrospective audits averaging **$18,500 per $1M GWP in the first audit cycle**. The same analysis finds automated tools detect errors on **6.2% of policies** versus **1.1%** for manual review — meaning manual reconciliation misses roughly five out of six errors that are actually there. This is no longer a vibe. It's a number an agency principal can multiply against their own book.

**Almost nobody is doing it.** As of 2025, **only 34% of independent agencies used dedicated commission tracking software**; **66% relied on AMS-only tracking or spreadsheets**. Only **20–25% of agencies reconcile at the policy level** — the rest reconcile at the total-payment level, which by construction cannot catch a per-policy underpayment. A carrier can quietly shave a renewal rate and a total-level reconciliation will balance to the penny while the agency eats the difference.

**And the tooling that exists is priced for somebody else.** The honest ROI model published by US Tech Automations for a *small* agency shows **−$7,836 annualized net value** on a platform quoted at **$900/month with $8,000 one-time implementation**. Read that again: the vendor-side analysis concedes the product is a losing investment for a small agency. AgencyBloc's Commissions+ is quote-only on transaction volume. AgencyComp and Commission Tracker don't publish pricing. Applied Epic's module is $150+/mo but only on top of Epic. Standalone dedicated tools run **$200–$800/month**; enterprise runs **$1,000+/month**. Every one of them gates pricing behind a demo call — the universal tell that the product isn't built for a 4-person shop.

Meanwhile the thing that made this expensive — parsing a few hundred structurally different PDF and CSV commission statements with no industry standard for layout, fields, or delivery — is precisely the task that got cheap in the last 18 months. There is **no industry standard for commission statement layout, data fields, or delivery method**. That used to mean a per-carrier parser and a services engagement. It now means a prompt.

Provenance:
  - Signal 1 (Demand): IIABA 2025 — agencies recover $15,000–$25,000 per $1M GWP in year one of reconciliation; 66% of independent agencies still use spreadsheets or AMS-only tracking; only 20–25% reconcile at policy level — https://brokerageaudit.com/blog/best-commission-tracking-tools-2026 — observed 2026-08-09
  - Signal 2 (Feasibility): No industry standard exists for carrier commission statement layout, fields, or delivery — the exact heterogeneous-document problem cheap long-context vision models now handle without per-carrier parsers — https://neudash.com/solutions/insurance/carrier-commission-reconciliation — observed 2026-08-09
  - Signal 3 (Economic): Incumbent tooling is structurally priced out of the small end — published ROI model shows −$7,836 annualized net value for a small agency at $900/mo + $8,000 implementation; standalone tools $200–$800/mo, enterprise $1,000+/mo, all quote-gated — https://ustechautomations.com/resources/blog/best-insurance-commission-management-software-independent-agencies-2026 — observed 2026-08-09
  - Supporting: 39,000 US independent P&C agencies; 51.6% under $500K revenue, 27.1% under $150K; ~30,000 under $1.25M revenue (Big "I" 2024 Agency Universe Study / OPTIS Partners) — https://www.producerflow.com/blog/us-insurance-agency-producer-statistics — observed 2026-08-09
  Category: Underserved niche

## 3. The opportunity

The commission reconciliation market has solved the problem for agencies that can afford $900 a month and an $8,000 onboarding. That's maybe the top 8,000 agencies in America. The other 30,000 — the ones under $1.25M in revenue — have been told, correctly, that the software doesn't pay for itself at their size.

That conclusion was true when the cost driver was human services work: someone had to map each carrier's statement format, maintain those mappings as carriers changed them, and hand-hold the agency through data migration. That's what the $8,000 buys. It is not a software cost. It's an implementation-labor cost, and it's the entire reason the price floor sits where it does.

Collapse that labor and the floor moves. A product that ingests a PDF from any carrier with no template setup, matches it against a book of business the agency already exports from its AMS, and returns a ranked list of "these 14 policies were paid less than your contracted rate" can sell at $149–$399/month with zero implementation. At that price the ROI math inverts: an agency with $3M GWP recovering even the low end of the IIABA range ($45,000) against $3,600/year of software is not a close call.

The incumbent weakness is specific and exploitable: **they sell reconciliation as an accounting function to agencies large enough to have an accounting function.** Small agencies don't have one. The principal does the books on a Saturday. So the product can't be a reconciliation workbench — it has to be a monthly email that says "you're short $2,340 this month, here are the twelve policies, here's the dispute letter, click to send."

The second weakness is that every one of these vendors hides pricing. In a market of 30,000 owner-operators who buy software the way they buy anything else — search, compare, sign up — a public price and a self-serve trial is a distribution advantage before it's a product advantage.

## 4. Target market

- **Primary customer:** Owner-principal of an independent P&C or Medicare agency in the US, 2–15 staff, $300K–$1.25M in agency revenue (roughly $2M–$10M GWP), writing with 6–25 carriers and/or working through one or two MGAs. Also fits health/benefits agencies and Medicare FMO downlines, where chargebacks and renewal-rate drift make the problem worse.

- **Why they buy:** They know they're being underpaid and they can't prove it. Carriers quietly reduce renewal rates; policies get endorsed mid-term and the commission doesn't follow; a Medicare client disenrolls and the chargeback lands on a statement three months later with no explanation; a policy is written and simply never appears on any statement. The current workaround is a spreadsheet nobody has time to maintain, reconciled at the total-payment level, which catches none of this. Published analysis pegs manual detection at **1.1% of policies versus 6.2%** for automated — the money is there, it's just invisible.

- **Rough TAM reasoning:** ~39,000 independent P&C agencies in the US; ~30,000 generate under $1.25M revenue. Add Medicare/health agencies and FMO downlines and the addressable pool is larger still, but 30,000 is the honest core. At $249/mo average, 1% penetration of that core = 300 agencies = **$897K ARR**. 3% = $2.7M ARR. This is a business that works well below any number a VC would find interesting, which is exactly why it's still open.

- **Why now for them:** Two forces. Commission leakage compounds — a $47/month underpayment on one renewal is $564/year and there are dozens of them — and the leakage got worse as carriers repriced through the hard market. And consolidation pressure: with M&A active and agency valuations tied to revenue, a principal planning an exit in 3–5 years has a direct incentive to find and fix recurring revenue that was never being collected.

## 5. Product sketch (MVP)

- **Drop in any statement, no setup.** Upload or forward a carrier commission statement — PDF, CSV, Excel, scanned — and it's parsed into policy-level line items. No template configuration, no per-carrier mapping, no implementation call.
- **Book-of-business import.** One CSV export from the agency's AMS (Applied, EZLynx, AMS360, HawkSoft) or a manual upload establishes what *should* have been paid, including contracted commission rates per carrier and line of business.
- **Policy-level match and variance flag.** Every statement line matched to a policy; every unmatched policy surfaced. Four flag types: **underpaid** (rate below contract), **missing** (policy written, never paid), **unexplained chargeback**, and **rate drift** (this renewal paid less than the last one).
- **Dispute packet, one click.** For each flagged item, a carrier-ready letter or email with the policy number, effective date, expected rate, paid rate, dollar variance, and the statement page it appeared on — the evidence a carrier rep actually needs to fix it.
- **Monthly shortfall email.** The core habit loop: "August statements processed. $2,340 in variances across 12 policies. Review →". This is the product for a principal who will never log into a dashboard.
- **Recovery ledger.** Track each dispute from flagged → submitted → recovered → written off, so the agency can see cumulative dollars clawed back. This number is the renewal argument.
- **Producer split calculation.** Once statements are parsed at policy level, computing what each producer is owed is nearly free — and it's the feature that turns a monthly tool into a workflow the agency can't skip.

## 6. AI angle — what's load-bearing

Remove the AI and this product cannot exist at this price. That's the test, and it passes cleanly.

The entire cost structure of the incumbents is the human labor of normalizing statements from carriers who share no standard for layout, fields, or delivery. Every carrier's PDF is a different document. Some are scanned. Some paginate mid-policy. Some report at the policy level, some at the account level, some bury endorsements in a footnote column. Historically you either wrote a parser per carrier and maintained it forever, or you paid someone $8,000 to do the mapping.

A long-context vision model reads all of them without a template — that's the whole unlock, and it happened recently enough that the incumbent price floor hasn't adjusted. The model does three jobs that are genuinely hard and genuinely load-bearing: extracting structured line items from unstructured heterogeneous documents; **fuzzy-matching statement lines to book-of-business policies** where policy numbers get reformatted, names get truncated, and the same policy appears under three different identifiers across three carriers; and classifying *why* a variance exists — a rate cut, a mid-term endorsement, a chargeback, or a legitimate timing difference — because a tool that flags 400 false variances a month gets deleted in week two.

That third job is where the product lives or dies, and it's a judgment task, not a rules task. Explanation quality is the product.

## 7. Localization angle (if any)

N/A — this is a US-first play. The wedge is specifically the US independent agency channel: 39,000 agencies, no statement standard, carrier-by-carrier contracted rates, and a Medicare chargeback regime that generates variance by design. The UK and Australian broker markets have a similar shape and are a natural year-two expansion, but the carrier lists, the rate structures, and the dispute etiquette are all different enough that trying to serve both from day one would produce a product that's mediocre in each. Win US P&C and Medicare first.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** Three public tiers, no demo call, self-serve card.
  - **Solo — $149/mo:** up to 500 policies, 8 carriers.
  - **Agency — $299/mo:** up to 2,500 policies, unlimited carriers, producer splits, dispute packets.
  - **Multi-office — $599/mo:** unlimited policies, multiple locations, user roles.
  Annual billing at 2 months free. Optional **first-year retro audit** as a one-time $1,500–$3,000 engagement — process 12 months of back statements and find what's already been lost. This is the single best sales device in the product, because it produces a dollar figure before the subscription starts.

- **ACV:** ~$2,990 blended (assumes mix skewing to the $299 tier, annual billing), plus retro-audit attach on roughly a third of new customers.

- **Rough math to $1M ARR:** 335 agencies × $249/mo × 12 = **$1.0M**. Against ~30,000 addressable small agencies that's **1.1% penetration**. Add retro-audit revenue and the customer count needed drops below 300.

- **Rough math to $5M ARR:** ~1,400 customers at a slightly higher blended ACV (~$3,500 as agencies grow into the $599 tier and producer-split usage expands). That's **4.7% of the core pool** — reachable, but it requires either expanding into Medicare/health FMO downlines (where a single FMO relationship can deliver dozens of downline agencies at once) or moving upmarket into the $1.25M–$3M revenue band that current incumbents serve badly. Both are real; neither is free.

- **Expansion path:** Policy count is the natural meter — agencies grow their book, they move up tiers automatically. Then producer splits (per-seat), then carrier appointment tracking, then the retro audit repeated annually. The recovery ledger creates a compounding retention argument: churning means giving up the running total of money you've clawed back.

**Margin note:** document processing is the only real COGS. At a few thousand statement pages per agency per month, inference cost lands in the low single-digit dollars per account per month against a $249 subscription. Gross margin is not a concern; false-positive rate is.

## 9. Go-to-market wedge — first 100 customers

- **The free retro audit as the entire top of funnel.** Offer: send us last month's statements from your three biggest carriers and your book export; we'll tell you free, in 48 hours, what you were underpaid. This is not a demo — it's a dollar figure specific to their agency. Run it manually for the first 50 prospects. If the average finding is a four-figure monthly variance, the close is the customer doing arithmetic out loud. Target: 200 audits offered → 60% take it → 120 completed → 25–30% convert. **That's the first 30 customers.**

- **The Big "I" state association circuit.** The Big "I" represents 25,000+ agency locations through state associations that run continuing-education events, monthly newsletters, and vendor programs — and whose members are overwhelmingly the small agencies incumbents ignore. Sponsor three state association events (Texas, Florida, Ohio — high agency density), present a 20-minute "how much are your carriers underpaying you" session with real anonymized audit data, offer the free audit at the door. Association newsletter placement is cheap and reaches exactly the owner-principal who signs. **Target 20–25 customers across three states.**

- **Agency-specialist accountants and fractional CFOs.** A small number of bookkeeping firms specialize in insurance agency accounting — they touch dozens of agencies each and they are the ones who currently maintain the spreadsheet. Make them a referral partner with a 20% recurring cut. Ten engaged partners at 3–4 referrals each is **30–40 customers**, and they come pre-sold because the partner already knows the client is leaking money.

- **The AMS migration moment.** Agencies switching AMS platforms (a constant churn given aging legacy systems) are already exporting their book and already have data hygiene on their mind. Watch AMS user groups and the Facebook/LinkedIn agency-owner communities for switch chatter and reach out with the audit offer at exactly that moment.

- **Public pricing as an inbound engine.** Every competitor gates pricing behind a demo call. Publish a real pricing page, publish an honest "what we found across 100 agency audits" report with distribution of shortfall by carrier and line of business, and rank for the queries agency owners actually type. This is slow — it's a month-6 channel, not a month-1 channel — but in a market where every competitor's pricing page says "Contact Us," a number on a page converts.

## 10. Build complexity — justification

**Low.** The core is document extraction into structured line items, a matching engine against an imported book of business, a variance classifier, and a letter generator — all on off-the-shelf models and a standard web stack. There is no per-carrier parser to write, which is exactly the point; the setup labor that defines incumbent pricing is the thing the model eliminates. AMS integration is deliberately out of scope for v1: CSV export in, CSV export out, because building certified integrations with Applied and Vertafore is a partnership negotiation, not an engineering task, and it would add months for no early customer value.

A competent pair ships a credible v1 in **8–10 weeks**. The hard part isn't the build — it's tuning the variance classifier so the monthly email contains 12 real findings instead of 400 noisy ones, and that tuning requires real statements from real agencies, which is another reason the manual retro audits come first.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Processing an agency's own commission statements on their behalf. No licensing required — the product doesn't sell, solicit, or advise on insurance. Standard data handling; statements contain policyholder names, so SOC 2 becomes a sales requirement around month 9, not a launch blocker. |
| Ethical — no harm / dark patterns | ✅ | Helps small businesses collect money they contractually earned. The adversary is a carrier's accounting error, not a consumer. |
| Market exists (evidence above) | ✅ | 39,000 agencies, quantified leakage, six-plus funded vendors serving the top of the market and explicitly not the bottom. |
| 1–5 person team can build this | ✅ | Two people, 8–10 weeks to v1. |
| Launchable with <$50K / ₹40L | ✅ | Realistically $12–18K: inference, hosting, three state association sponsorships, and the founders' time running manual audits. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | **16**/20 | Real, recurring, and denominated in dollars — $15–25K per $1M GWP is a number that stings. Docked because it's chronic rather than acute: nobody's business closes over it, and agencies have tolerated it for decades. That tolerance is the actual competitor. |
| Demand evidence | 15 | **13**/15 | Multiple independent hard signals: IIABA recovery data, 34%/66% adoption split, six-plus funded vendors charging real money, published ROI models. A skeptic nods. Docked 2 because I could not source verbatim agency-owner complaints — the evidence is vendor-published and industry-association data, not raw customer voice, and vendor-published numbers run optimistic. |
| Build feasibility | 15 | **12**/15 | Off-the-shelf models, standard stack, no per-carrier parsers, no integrations in v1. The variance classifier needs real-world tuning against messy statements before it's trustworthy, which is the only thing keeping this off a 14. |
| Distribution clarity | 15 | **12**/15 | The free retro audit is a genuinely strong wedge because it produces a customer-specific dollar figure pre-sale. Association channel and accountant referrals are named and reachable. Docked because it's a high-touch, one-at-a-time motion — this does not go viral, and the founders will personally run the first 50 audits. |
| Revenue mechanics | 15 | **12**/15 | Pricing is benchmarked against a real $200–$1,000/mo category and deliberately undercuts it; ROI for the customer is 10×+ and easy to compute. $1M ARR needs 1.1% of the addressable pool — comfortable. Docked because $5M requires either FMO channel leverage or moving upmarket into the incumbents' teeth, and neither is proven. |
| Time to first revenue | 10 | **8**/10 | The retro audit can be sold and delivered semi-manually before the product is finished, so revenue can precede the software. First paying customer realistically 8–12 weeks. Not a 9–10 because agency principals buy on a monthly-meeting rhythm, not on impulse. |
| Defensibility | 10 | **3**/10 | The honest number. No moat at month 3 — a competent team clones the extraction in six weeks. What accumulates by month 12 is a corpus of carrier statement formats and known variance patterns per carrier, plus the recovery ledger as switching cost. Neither is strong. This wins on price, focus, and speed, or it doesn't win. |
| **Total** | **100** | **76**/100 | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `sales-heavy`

Technical because the variance classifier is the product and false positives kill it. Sales-heavy because the first 100 customers come from personally running free audits and standing up at state association events — this is not a launch-it-and-watch-signups business. Domain expertise is helpful but acquirable; a founder who spends three weeks reading actual commission statements will know enough.

### Key assumptions to validate (3–5)

1. **Assumption:** A generic long-context vision model extracts policy-level line items from arbitrary carrier statements at high enough accuracy that no per-carrier setup is needed. **How to test:** Collect 25 real statements from 15+ distinct carriers (via friendly agencies and the accountant channel), run extraction cold, and measure field-level accuracy. **Bar: ≥95% on policy number, premium, and commission amount, with zero per-carrier configuration.** This is the load-bearing technical assumption — if it fails, the entire price advantage evaporates because you're back to building parsers.

2. **Assumption:** Real small agencies actually have recoverable shortfalls at roughly the published rate. **How to test:** Run 15 free retro audits on live books. **Bar: median monthly variance ≥$800 across audited agencies.** The IIABA figures are vendor-published and I've discounted them accordingly; this test replaces borrowed numbers with owned ones.

3. **Assumption:** Agencies will actually pursue the disputes rather than file the report and do nothing. **How to test:** Follow the first 15 audited agencies for 60 days and measure how many submitted at least one dispute and how many recovered. **Bar: ≥50% submit.** If agencies won't act on the findings, the product is a report nobody uses and churn will be brutal at month 4 — this is the assumption most likely to be wrong.

4. **Assumption:** $249/mo blended is above the pain threshold but below the "I need to think about it" threshold for a $500K-revenue agency. **How to test:** Price-test three tiers against 40 audit recipients; measure conversion at $149 / $249 / $399.

### Risk flags

1. **Defensibility (scored 3/10, and it's the real risk):** Nothing here is hard to copy. An incumbent could launch a stripped-down $199 self-serve tier and erase the entire wedge — and unlike most incumbents-move-downmarket stories, this one is cheap for them to do because they already have the domain logic. The counter is speed and the fact that moving downmarket cannibalizes their $900/mo accounts, which is exactly why they've avoided it. That reluctance is the moat. It is not a strong moat.

2. **Carrier relationship risk:** Agencies depend on carrier appointments. Some principals will be nervous about systematically disputing a carrier they need to keep happy. This is a real objection and the product should frame disputes as routine reconciliation, not confrontation — but it will cost some deals, and it may cap how aggressively the recovery ledger can be marketed.

3. **False positives are existential:** A monthly email with 400 bogus variances gets filtered to trash and the account churns. The classifier must be tuned toward precision over recall, even at the cost of missing real money. Getting this wrong doesn't degrade the product, it ends it.

4. **Evidence quality:** Nearly every statistic supporting this idea is published by a vendor selling into the category. IIABA's numbers are the most credible and they're cited secondhand. I've reflected this in a Medium confidence and a docked demand score — the first 15 audits either confirm the leakage is real or kill the idea outright.

5. **Data sensitivity:** Commission statements carry policyholder names and policy numbers. SOC 2 will be demanded by month 9 as agencies get larger; budget $15–25K and a quarter of founder attention for it. Not a launch blocker, but it's a real cost that arrives right when you're trying to scale.

## 14. Structured verdict

```
Score:                  76/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder comfortable with document-AI accuracy work,
                        paired with someone willing to run 50 free audits by hand and
                        stand up at state insurance association meetings
Time to revenue:        8–12 weeks (retro audits can be sold before the product ships)
Capital to launch:      $12–18K
Top 3 assumptions to validate first:
  1. Zero-config extraction hits ≥95% field accuracy across 25 statements from 15+
     carriers — run cold, no per-carrier tuning
  2. Median recoverable shortfall ≥$800/month across 15 live retro audits
  3. ≥50% of audited agencies actually submit a dispute within 60 days
Kill criteria:
  - Abandon if extraction accuracy stays below 90% after tuning — the per-carrier
    parser work that reintroduces implies the incumbent cost structure, and there is
    no room to undercut on price
  - Abandon if median monthly shortfall across 15 audits is under $400 — the ROI
    story collapses at $249/mo and the whole pitch was the arithmetic
  - Abandon if fewer than 30% of audited agencies submit a dispute in 60 days —
    means agencies tolerate the leakage and won't pay to have it pointed out
  - Abandon if a top-3 incumbent launches self-serve sub-$300 pricing before v1 ships
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Get statements. Reach out to 20 agency owners through LinkedIn, two state association contacts, and one insurance-specialist accountant with a single ask: send me last month's commission statements from your three largest carriers, redacted if you want, and I'll tell you free what looks wrong. Target 8 agencies, 25+ statements, 15+ distinct carriers.

- **Day 3–4:** Run extraction cold on all 25 statements with no per-carrier configuration. Hand-verify field-level accuracy on policy number, premium, and commission amount against the source documents. This is the falsifiable core: **≥95% or the price advantage is fiction.**

- **Day 5:** For the agencies that also sent a book export, compute actual variances and send each one a one-page finding: dollars, policies, and why. Then ask the only question that matters — "will you dispute these?" — and count the yeses.

- **Decide go / no-go on:** extraction accuracy ≥95% with zero configuration, **and** median monthly variance ≥$800, **and** ≥4 of 8 agencies saying they'll pursue the disputes. Miss any of the three and the idea goes back on the shelf — the first says the cost structure doesn't work, the second says there's no money in it, the third says nobody cares.
