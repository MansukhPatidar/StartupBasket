---
title: "LiquidWatch — liquidation clock for IEEPA refund claimants"
slug: ieepa-refund-liquidation-clock
date: 2026-08-02
category: TradeTech / US-SMB — Small & Mid-Size Importers Recovering IEEPA Duties Paid Feb 2025–Feb 2026
complexity: Low
score: 78
verdict: GO
confidence: Medium
oneLiner: "Watches every entry you imported and warns you the week its refund right is about to expire."
tags:
  vertical: TradeTech
  model: SaaS
  geography: US
  secondary: [SMB, Compliance-driven, AI-agent, Solo-builder, Deadline-tracking]
axes:
  problem: 18
  demand: 13
  build: 13
  distribution: 12
  revenue: 11
  time: 9
  defensibility: 2
founderFit: [technical-heavy, content-heavy]
featured: false
---

# LiquidWatch

## 1. One-liner

Watches every entry you imported and warns you the week its refund right is about to expire.

## 2. Trend signal — why now?

On **February 20, 2026**, the Supreme Court ruled 6–3 that IEEPA does not authorize the President to impose tariffs. Per CBP and court filings, roughly **330,000 importers paid an estimated $166 billion in IEEPA duties across more than 53 million entries**.

The money is not coming back automatically. CBP opened **Phase 1 of the CAPE tool on April 20, 2026** — and Phase 1 only covers unliquidated entries plus entries within **80 days of liquidation**, about **63% of affected entries**. Everything else needs a **protest within 180 days of that entry's liquidation date**. Snell & Wilmer's guidance to importers is blunt: *"Act immediately to avoid entries aging beyond the 80-day reliquidation window."*

Here's the part that turns a news event into a product. Entries don't liquidate on one convenient date. CBP auto-liquidates on a **314-day cycle, posted weekly on Fridays**. So a portfolio of entries filed across thirteen months of IEEPA tariffs liquidates in a rolling weekly drip through 2026 and into 2027 — each entry starting its own independent 180-day protest clock on its own date. Ayar Law names the exact failure: *"Importers who track shipment dates instead of liquidation dates routinely miss the protest window. The two dates can be separated by months."* And once it closes: *"CBP has no discretion to accept a late protest... the IEEPA refund right on that entry is gone."*

That's not a filing problem. It's a **calendar problem with money attached**, running for the next 18 months.

Provenance:
  - Signal 1 (demand): 330,566 importers / $166B / 53M+ entries affected; refunds require active filing, not automatic; "no organized inventory of IEEPA-affected entries" is the named stumbling block — importers "cannot calculate their refund exposure, cannot check protest deadlines, and cannot file CAPE declarations in batches" — https://gingercontrol.com/blog/ieepa-tariff-refund-guide — observed 2026-08-02
  - Signal 2 (feasibility): ES-003 "Entry Summary Line Tariff Details" is a self-service importer export from the ACE portal exposing line-level Chapter 99 codes (9903.01/9903.02 = refundable IEEPA; 9903.88 = Section 301, not refundable) plus duty amounts — a structured file the importer can pull themselves, no CBP integration or EDI required — https://www.customsgenius.com/articles/es003-guide-customsgenius — observed 2026-08-02
  - Signal 3 (economic): Trade firms bill $500–$1,500/hour on this work and propose 15–25% contingency on CIT litigation; CBP's own guidance warns importers to act before entries age past the 80-day window; 166,000 AD/CVD-suspended entries worth $2.9B have no processing timeline at all — https://www.swlaw.com/publication/update-on-ieepa-tariff-refunds-cape-goes-live-with-certain-limitations-for-importers/ — observed 2026-08-02
  Category: Regulatory arbitrage

## 3. The opportunity

Look at what actually got built in the five months since the ruling. I found es-003.com, tariffrefundchecker.com, refundarrow.com, customsgenius.com, tariffrefunded.com, claimyourtariffs.com, and a UNIS "ES-003 Analyzer." Nearly all of them are the **same product**: upload your ES-003, see a number, here's your exposure. es-003.com is explicitly a free reference site. RefundArrow is a service of an Arizona law firm and, in its own words, "not a law firm." These are calculators and lead magnets for legal intake.

A calculator answers a question **once**. But this problem doesn't happen once — it happens every Friday for the next year and a half, entry by entry, as CBP's auto-liquidation cycle chews through a portfolio that was filed over thirteen months. The calculator tells you that you're owed $180K. It does not tell you that forty-one of those entries liquidated three weeks ago and you now have 159 days on each before that slice is legally unrecoverable.

The incumbent here isn't a company. It's **a spreadsheet plus a lawyer's hourly rate**, and the small importer can't afford the second one. GingerControl says it plainly: *"Refund claim tracking is not a job for spreadsheets at any meaningful scale."*

The gap is the ongoing operational job that sits between the free calculator and the $900/hour trade attorney. Nobody is selling it because it's unglamorous, it's finite, and it looks like a feature. It's not a feature — it's an 18-month recurring obligation attached to a five-figure sum.

## 4. Target market

- **Primary customer:** US importer of record, **$2M–$50M annual revenue**, 20–500 entries over the IEEPA window (Feb 2025–Feb 2026), refund exposure **$25K–$500K**. DTC brands, Amazon sellers who moved to formal entry, specialty distributors, small manufacturers importing components. The person is the owner, controller, or ops lead — not a trade compliance department, because there isn't one.
- **Why they buy:** They know they're owed money. They've read three law firm alerts. Their broker filed a CAPE batch for some entries and was vague about the rest. They cannot answer "which of my entries are still recoverable, and by when?" — and they know the answer decays weekly.
- **Rough TAM reasoning:** CBP identified **330,566 affected importers**. Strip out the large filers who have counsel and in-house compliance, and the household-name giants. If even 15% sit in the small-to-mid band that can't justify $500/hr but has real money at stake, that's **~50,000 businesses**. I need 300 of them.
- **Why now for them:** The 80-day CAPE Phase 1 window and the 180-day protest clock are both running *today*. This is the rare product where waiting a month is measurably more expensive than buying it. It is also why this is urgent for the builder — see the risk flags.

## 5. Product sketch (MVP)

- **Upload your ES-003** (the ACE report they can pull themselves) — we parse tariff lines, isolate 9903.01/9903.02 IEEPA duty, and explicitly exclude 9903.88 Section 301, which is *not* refundable and is the single most common way importers overstate their number.
- **Entry-level eligibility triage** — every entry sorted into CAPE Phase 1 eligible, protest-required, or blocked (reconciliation flag, drawback claim, open protest, AD/CVD suspended, no ACE liquidation status).
- **The liquidation clock** — per-entry countdown driven by actual liquidation date, not entry date. Green / amber / red, sorted by dollars at risk.
- **Friday sweep** — CBP auto-liquidates weekly. Every Friday we re-check status and email: "6 entries liquidated this week. $23,400 now on a 180-day protest clock. Here they are."
- **Pre-CAPE sequencing warnings** — flags the irreversible ordering traps: Form 4811 notify-party must be designated *before* CAPE submission or the refund defaults to the IOR; PSCs must be filed *before* CAPE, never after.
- **Batch-ready CSV export** in CAPE upload template format, split into ≤9,999-entry declarations, ready to hand to the broker who actually files.
- **Protest packet drafter** — pre-fills Form 19 with the specific entries, the contested decision, and properly cited legal grounds. Vague grounds like "IEEPA tariffs were unlawful" without citation are routinely denied.
- **Exposure ledger** — recovered / pending / at-risk / expired, so the controller has one number for the CFO and the auditor.

## 6. AI angle — what's load-bearing

Honest answer: **AI is the assistant here, not the engine.** The engine is a date calculator and an eligibility rules table. I'd rather say that than pretend otherwise — a countdown clock doesn't need a transformer.

Where AI genuinely earns its place is the messy edges:

- **Document normalization.** Not everyone has a clean ES-003. Plenty of small importers have a pile of Form 7501 PDFs from three different brokers in three different layouts. Extracting entry number, liquidation date, HTS lines and Chapter 99 duty from heterogeneous PDFs is exactly the job vision models are now reliable and cheap at — and it's the difference between "sign up in 10 minutes" and "hire a bookkeeper for a week."
- **Broker correspondence parsing.** Importers get liquidation notices and broker emails as unstructured text. Pulling entry numbers and dates out of that inbox and reconciling against the ledger is real work.
- **Protest grounds drafting.** Form 19 needs specific, citation-backed legal grounds per entry class. Templated generation with the correct citations, reviewed by the user, beats a blank field.

If you removed the AI you'd still have a viable product — a slower, more manual one with a much worse onboarding funnel. That's a weak-to-moderate AI angle and I'm scoring it accordingly rather than dressing it up.

## 7. Localization angle

`N/A — this is a US-only play.` The entire product is a function of one country's customs statute, one agency's portal, and one Supreme Court ruling. There is no localization wedge; there's barely a second market. The EU's own de minimis changes create a structurally different problem with a different remedy path.

Worth noting the inverse, though: a meaningful share of these importers are US entities run by operators sourcing from India, Vietnam and China, and the support burden may skew toward non-native-English founders. That's a support-tone consideration, not a localization strategy.

## 8. Business model — path to $1M–$5M ARR

The honest framing: **this is a high-margin, time-boxed business, not a durable SaaS annuity.** Price it accordingly — capture value while the clock runs.

- **Pricing:** Three tiers, monthly, cancel anytime.
  - **Watch — $99/mo** — up to 100 entries. Clock, Friday sweep, eligibility triage, CSV export.
  - **Recover — $299/mo** — up to 1,000 entries. Adds protest packet drafting, 7501 PDF ingestion, multi-entity.
  - **Desk — $799/mo** — unlimited entries, multiple IORs, broker collaboration seats. For 3PLs and bookkeeping firms managing client portfolios.
- **Why not contingency:** Tempting — 3% of a $200K refund is $6K. But taking a percentage of a customs recovery pushes hard toward being treated as customs business conducted for others, which is licensed activity. I'd need a licensed broker or attorney in the loop, and that changes the company. Flat SaaS keeps this a software product that *prepares* filings the customer or their broker submits. Get this reviewed by trade counsel before launch — it's the single most important legal question in the plan.
- **ACV:** ~$2,800 blended (weighted to Recover, average ~10 months of active lifetime).
- **Math to $1M ARR:** 360 customers × ~$233/mo avg × 12 = **$1.0M**. Against ~50,000 addressable importers that's **0.7% penetration**.
- **Math to $5M ARR:** ~1,800 customers, which needs the agency/3PL channel to carry portfolios rather than one-at-a-time direct sales. Plausible but not the plan I'd underwrite.
- **Expansion path — and this is the real question:** The IEEPA clock ends. What doesn't end is that **de minimis is gone permanently** (eliminated globally February 24, 2026), so every one of these importers now files formal entries forever, each of which liquidates on a 314-day cycle and carries protest rights. The durable product is **"post-entry deadline management for small importers"** — duty drawback windows, PSC windows, protest windows, reconciliation flags. IEEPA is the wedge that gets 300 importers to hand you their entry data. That dataset and that habit is the actual business. If that second act doesn't materialize, this is a very profitable 18-month run and you should plan for it as such.

## 9. Go-to-market wedge — first 100 customers

- **Customs brokers are the channel, not the competitor.** Small brokerages are drowning — their clients are all asking about refunds and the broker makes nothing on the analysis. Give brokers a free portal seat: they invite clients, we do triage and produce the CAPE-ready CSV, they file it and keep that relationship. There are ~14,000 licensed brokers; I need 30 active ones. Start by cold-calling the small independents listed in CBP's port-by-port broker lists — not the top 20 global forwarders, who will build this internally.
- **Ride the law firms' content, don't fight it.** Every trade firm in the country published an IEEPA refund alert to generate intake, and they only want the $500K+ matters. They are actively *disqualifying* the small importer. Reach out to 40 of those firms offering LiquidWatch as the thing they hand to leads they've turned down. Referral, no fee-share — fee-share reopens the licensed-activity question.
- **Comment-section arbitrage on the free calculators.** Thousands of small importers are landing on es-003.com, tariffrefundchecker.com and the UNIS calculator right now, getting a number, and hitting a dead end. Buy the long-tail search terms those tools don't rank for — "entry liquidated 180 days protest," "CAPE rejected reconciliation flag," "9903.01 vs 9903.88 refund" — and answer the *next* question rather than the first one.
- **The Friday hook as content.** Publish a weekly "what liquidated this week" note tied to CBP's Friday auto-liquidation cycle. It's a genuinely useful recurring artifact, it maps exactly to the product's core loop, and it compounds into an email list of importers with live deadlines.
- **Amazon/DTC seller communities.** Amazon discontinued ship-from-China services on January 1, 2026, dumping customs responsibility onto sellers who had never filed a formal entry. These sellers paid IEEPA duty, are owed money, and are the least equipped cohort in the entire market. They congregate in seller forums and paid masterminds — go where they already pay for operational help.

## 10. Build complexity — justification

**Low.** The core is a rules engine over a structured CSV plus a date calculator plus a weekly cron job — the hardest part is encoding CAPE eligibility exclusions and the liquidation/protest date math correctly, and that's careful reading of published CBP guidance, not novel engineering. There is **no CBP system integration**: the customer pulls their own ES-003 from ACE and uploads it, which sidesteps the single biggest technical and regulatory dependency. PDF ingestion of Form 7501s is off-the-shelf vision-model work. A solo builder ships a credible v1 in **5–7 weeks**; the rules table needs a trade professional's review, which is a consulting line item, not a hire.

The domain accuracy bar, however, is high. Getting a date wrong here costs a customer real money, and that's a product risk far more than a build risk.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Software that prepares filings the customer/broker submits. Must stay clear of conducting customs business for others — hence flat SaaS, no contingency. Requires trade-counsel review pre-launch. |
| Ethical — no harm / dark patterns | ✅ | Helps small importers recover money a court says is theirs. The one ethical duty is not overstating recoverable amounts — excluding 9903.88 correctly is a matter of honesty, not just accuracy. |
| Market exists (evidence above) | ✅ | 330,566 importers, $166B, 53M entries, an active CBP process, and a half-dozen competitors already chasing the shallow end. |
| 1–5 person team can build this | ✅ | Solo builder plus fractional trade advisor. |
| Launchable with <$50K / ₹40L | ✅ | Realistically $12–18K, most of it trade counsel and domain review rather than engineering. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | **18**/20 | Hair-on-fire and unusually literal: a missed date permanently destroys a specific, quantified sum. "CBP has no discretion to accept a late protest." Not 20 because it's episodic — once an importer's portfolio is resolved, the pain stops. |
| Demand evidence | 15 | **13**/15 | 330K affected importers, $166B, a live government process, six-plus competitors already built calculators, law firms billing $500–1,500/hr. A skeptic nods. Docked for lack of direct verbatim SMB complaints — I found trade-press and law-firm sourcing, not raw customer voice, and I won't fabricate the latter. |
| Build feasibility | 15 | **13**/15 | CSV parsing, date math, weekly cron, no CBP integration. 5–7 weeks solo. Docked for the domain-accuracy bar and the rules-table maintenance as CAPE phases evolve. |
| Distribution clarity | 15 | **12**/15 | Brokers and disqualified law-firm leads are named, reachable, motivated channels with realistic counts. Docked because both are partner-mediated — partner channels are slower to activate than the math suggests. |
| Revenue mechanics | 15 | **11**/15 | Pricing is defensible against a $500/hr alternative and 360 customers for $1M is only 0.7% penetration. Docked hard because ACV depends on an assumed ~10-month lifetime that nobody has observed yet, and the expansion path to durable ARR is a thesis, not evidence. |
| Time to first revenue | 10 | **9**/10 | Customers have live deadlines and money at stake today. This pre-sells — you can charge before the Friday sweep is even built. |
| Defensibility | 10 | **2**/10 | Almost none. A weekend clone is trivially possible, six competitors are already adjacent, and the underlying opportunity has a statutory expiry date. The only moats are broker relationships and being first into a market where speed beats everything. This is the axis that keeps it out of STRONG GO. |
| **Total** | **100** | **78**/100 | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `content-heavy`

Technical because the date/eligibility logic must be exactly right. Content-heavy because the distribution wedge is answering the question the free calculators leave hanging, and doing it faster and better than law firm marketing departments. Notably **not** sales-heavy — the customer already knows they have a problem, which is rare and valuable.

### Key assumptions to validate (5)

1. **Assumption:** Small importers ($25K–$500K exposure) will pay $99–$299/mo for tracking rather than accept whatever their broker does for free. **How to test:** 40 calls with importers pulled from broker referrals and seller communities. Ask what their broker actually filed and whether they can name a single liquidation date. If most say "my broker handled it" and can produce evidence, the wedge is narrower than I think.
2. **Assumption:** Flat-fee software that prepares (but doesn't file) CAPE declarations and protests is not "customs business conducted for others" requiring a broker license. **How to test:** Two hours with a customs attorney before writing code. This is binary and it gates everything.
3. **Assumption:** Small brokers will co-sell rather than feel threatened. **How to test:** Pitch 15 independent brokerages. If they see client-data disintermediation instead of relief, the primary channel dies and distribution drops to ~7.
4. **Assumption:** A meaningful share of the 37% outside CAPE Phase 1 have entries still inside their 180-day protest window as of Q3 2026. **How to test:** Get 10 real ES-003 exports under NDA and measure the actual liquidation date distribution. If most entries have already aged out, the addressable pool collapses and this becomes a PASS.
5. **Assumption:** The post-IEEPA expansion into general post-entry deadline management is real. **How to test:** Ask the first 30 customers whether they'd keep paying for drawback and PSC window tracking after their IEEPA claims resolve. Sub-30% yes means plan explicitly for an 18-month business.

### Risk flags

1. **Market timing — and this is the dominant risk.** The window is closing while you read this. Entries liquidate weekly; every week of delay permanently shrinks the addressable pool. A builder starting in October 2026 is meaningfully worse off than one starting in August. This idea has a shorter shelf life than anything else in this portfolio, and it should be built immediately or not at all.
2. **Regulatory whiplash.** CBP has not announced CAPE Phase 2 timing. If Phase 2 lands broad and automatic, the protest-tracking value proposition thins considerably. Conversely, the Tariff Refund Act of 2026 (S 3905) would mandate refunds within 180 days with interest and prioritize small businesses — if that passes, much of this product's reason to exist evaporates. **Track that bill weekly; it is a live kill switch.**
3. **Licensed-activity exposure.** Preparing customs filings for compensation sits close to a licensed activity line. Flat-fee, customer-submits architecture is the mitigation, but it needs counsel sign-off, not founder optimism.
4. **No moat plus a visible market.** Six competitors already built the calculator. When one of them notices the recurring-deadline job, they have a distribution head start. Speed is the entire defense.
5. **Terminal value near zero.** Unless the post-entry expansion works, the asset is unsellable at the end — nobody acquires a business whose statutory basis expired. Underwrite this as cash flow, not equity.

## 14. Structured verdict

```
Score:                  78/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical solo founder who ships fast, with a fractional customs
                        attorney on retainer. Must be comfortable building a business with
                        a known expiry date and taking the cash.
Time to revenue:        3–5 weeks (pre-sellable; customers have live deadlines today)
Capital to launch:      $12–18K (majority trade counsel + domain review, not engineering)
Top 3 assumptions to validate first:
  1. Licensed-activity question — 2 hours with a customs attorney, before any code. Binary gate.
  2. Liquidation-date distribution — 10 real ES-003 exports under NDA; measure how much
     of the pool is still inside its protest window as of Q3 2026.
  3. Broker channel receptivity — pitch 15 independent brokerages; co-sell or threat?
Kill criteria:
  - Abandon if counsel says flat-fee preparation requires a broker license and the
    workaround changes the company's shape.
  - Abandon if <20% of entries in 10 sample ES-003 exports remain inside a live
    CAPE or protest window.
  - Abandon if the Tariff Refund Act of 2026 (S 3905) passes with automatic
    small-business refund processing — the problem solves itself.
  - Abandon if <8 of 40 importer calls can't name a single liquidation date
    AND are satisfied with their broker's handling.
```

## 15. Next step — 1-week validation sprint

- **Day 1:** Two hours with a customs attorney on the licensed-activity question. If flat-fee preparation with customer-submits-filing doesn't clear, stop here and don't spend day two. Everything downstream is contingent on this.
- **Day 2–3:** Get 10 real ES-003 exports under NDA — via broker contacts and seller communities. Compute the actual distribution: what share of entries are unliquidated, inside 80 days, inside 180-day protest, or expired. This is the single number that determines whether the market is large, shrinking, or already gone.
- **Day 4–5:** 40 calls to importers with $25K–$500K exposure. One question above all: *"Which of your entries liquidated last month?"* Count how many can answer. Then ask what they'd pay for a Friday email that answers it for them.
- **Day 6:** Pitch 15 independent customs brokers on the co-sell motion. Count how many say "send me the portal" versus "we handle that in-house."
- **Day 7 — go/no-go, falsifiable:** Build **only if** counsel clears the model, **and** ≥40% of sampled entries are still inside a live CAPE or protest window, **and** ≥25 of 40 importers cannot name a recent liquidation date, **and** ≥5 of 15 brokers want the portal. Miss any one of those four and the answer is no — the window is too short to build on a maybe.
