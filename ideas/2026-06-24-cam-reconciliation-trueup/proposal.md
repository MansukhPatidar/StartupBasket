---
title: "RecoupRoll — CAM true-up desk for small commercial landlords"
slug: cam-reconciliation-trueup
date: 2026-06-24
category: PropTech / US-SMB
complexity: Medium
score: 74
verdict: GO
confidence: Medium
oneLiner: "Turns a shoebox of vendor invoices and a lease PDF into a defensible CAM true-up statement tenants can't easily dispute."
tags:
  vertical: PropTech
  model: SaaS
  geography: US
  secondary: [SMB, AI-agent, Compliance-driven, Document-AI, Solo-builder]
axes:
  problem: 16
  demand: 12
  build: 11
  distribution: 11
  revenue: 12
  time: 7
  defensibility: 5
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# RecoupRoll — CAM true-up desk for self-managed commercial landlords

## 1. One-liner

Turns a shoebox of vendor invoices and a lease PDF into a defensible CAM true-up statement tenants can't easily dispute.

## 2. Trend signal — why now?

CAM (Common Area Maintenance) reconciliation is the annual ritual where a commercial landlord compares what tenants pre-paid in estimated NNN charges against what the building actually cost, then bills or credits the difference. It is universally hated and almost entirely manual at the small end of the market. Three things are converging right now:

1. **Document-AI got good enough.** Parsing a messy stack of vendor PDFs (landscaping, snow removal, property tax bills, insurance, repairs) and a 40-page lease with bespoke cap/exclusion/gross-up language used to require a human paralegal. As of 2025–2026, vision-capable LLMs read both reliably. This is the feasibility unlock that did not exist 18 months ago.
2. **The deadline is structural and recurring.** Most commercial leases require the landlord to deliver the reconciliation statement within 90–180 days of year-end — typically March 31 to June 30 for calendar-year leases. Every landlord feels this pain on the same calendar every year. It is not a "nice to have someday" problem; it is a hard date.
3. **The small-landlord tier is unserved.** Enterprise CAM tooling (Yardi Voyager from ~$1,200/mo, MRI) and the one credible SMB software entrant (CapVeri, ~$249/mo) all require a clean **GL export from a property-management system**. The self-managed landlord who runs QuickBooks plus spreadsheets has no GL to export and gets quoted $2,000–$10,000 per building by a BPO/CPA instead.

Provenance:
  - Signal 1 (demand): Small commercial landlords describe CAM season as a "nightmare" using spreadsheets + QuickBooks; standard tools (Buildium, DoorLoop, Rent Manager) "aren't designed for NNN reimbursements... or year-end reconciliation." — https://www.biggerpockets.com/forums/32/topics/1281484 + https://www.doorloop.com/blog/best-commercial-property-management-software — 2026-06-24
  - Signal 2 (feasibility): CAM reconciliation is "poring over the general ledger... and comparing it, line-by-line, to the terms in retailers' leases — a matching game that must be carried out through brute force," with teams pulling "all-nighters... sifting through leases." This brute-force line-item-vs-lease matching is exactly what document-AI now automates. — https://blog.rebolease.com/mastering-cam-reconciliation-the-mechanics-of-common-area-maintenance-and-what-you-need-to-know-about-caps-and-gross-ups/ — 2026-06-24
  - Signal 3 (economic): Outsourced CAM reconciliation runs $2,000–$10,000 per building/year; boutique consultants charge $3,000–$10,000+ per building per engagement. Money is already moving for this exact task — software just hasn't captured the bottom tier. — https://www.camaudit.io/resources/cam-audits/outsourcing-cam-audit-guide + https://www.capveri.com/alternatives/outsourced-cam — 2026-06-24
  Category: Underserved niche

## 3. The opportunity

The CAM software market is barbelled. At the top, Yardi/MRI serve REITs and institutional managers who already have controllers and clean general ledgers. At the bottom, the self-managed landlord — the dentist who bought the strip center next to his practice, the family that owns three small office buildings, the operator with a 12-unit retail portfolio — has *no general ledger to export*. They have a Dropbox folder of vendor PDFs and a lease binder.

CapVeri is the closest competitor and a smart one, but its entire workflow starts from "upload your GL export from Yardi/MRI/AppFolio." That assumption silently excludes the exact customer who feels the most pain, because they never had a PM system in the first place. They reconcile by hand or pay a BPO four figures a building.

The wedge: **start one step earlier in the workflow.** Ingest the raw artifacts the small landlord actually has — invoice PDFs and the lease itself — and do the brute-force matching the BPO charges $3K for. The incumbent automates step 4 onward (cap, gross-up, pro-rata, statement). We automate steps 1–3 (read the invoices, classify CAM-eligible vs excluded per *this* lease, build the expense pool) which is precisely the part the unserved segment can't do without a human.

## 4. Target market

- **Primary customer:** US self-managed commercial landlords and tiny lease-admin shops — owners/operators of 1–15 small retail, office, or flex/industrial buildings on NNN or modified-gross leases, with no Yardi/MRI and no in-house property accountant. Revenue $200K–$3M in annual rent. The buyer is the owner, a part-time bookkeeper, or a solo "asset manager."
- **Why they buy (their words):** "Spreadsheet and QuickBooks works until CAM reconciliation season, at which point it becomes a nightmare." They dread the March–June window, they're scared of getting a line item wrong and triggering a tenant audit, and they can't stomach a $3,000/building BPO invoice for what feels like data entry.
- **Rough TAM reasoning:** The US has hundreds of thousands of small multi-tenant commercial buildings — neighborhood/strip retail centers alone number well into six figures, before adding small office and flex/industrial. A conservative serviceable slice of 100,000 self-managed multi-tenant buildings at even $40/mo blended is a $48M/yr ceiling — comfortably more than enough for a $1–5M ARR bootstrap without needing the whole market.
- **Why now for them:** The reconciliation deadline hits every spring like clockwork, denials/disputes from tenants are rising as tenants get more sophisticated about audit rights, and for the first time the document-grunt-work can be done by software priced for their wallet instead of a $3K consultant.

## 5. Product sketch (MVP)

- **Drag-in the year's invoices.** Upload a folder of vendor PDFs (snow, landscaping, tax bills, insurance, repairs, utilities). AI extracts vendor, date, amount, category.
- **Lease reader.** Upload each tenant's lease (or just the CAM/operating-expense exhibit). The system extracts the pro-rata share, the cap (and cap type — cumulative/compounding/year-over-year), gross-up provision, and the exclusion list specific to that lease.
- **CAM-eligibility classifier.** Every invoice line gets tagged "includable / excluded / capital — amortize" *per this lease's language*, with the clause it relied on shown inline. This is the brute-force matching, automated.
- **True-up engine.** Applies gross-up before cap in the correct sequence, computes each tenant's pro-rata share, nets against estimates already collected, and produces the owe/credit number.
- **Defensible statement packet.** One-click tenant-ready PDF: summary, per-category breakdown, the math, and an appendix of supporting invoices — the exact bundle a tenant's auditor would demand, assembled up front.
- **"Will this survive an audit?" pre-send check.** Flags the classic dispute triggers (capital costs expensed instead of amortized, a December invoice posted in February, a controllable cost that blew past its cap) before the landlord hits send.
- **Year-over-year carry.** Stores the cap bank and prior reconciliations so next year's true-up starts from a clean base, creating switching cost.

## 6. AI angle — what's load-bearing

Remove the AI and there is no product — you're back to a spreadsheet. Two AI jobs are genuinely load-bearing:

1. **Reading two messy document types and joining them.** Vendor invoices have no schema; leases have bespoke, lawyer-drafted CAM clauses with no standard wording. The core value is a model reading both and producing the per-line "includable under *this* lease, here's the clause" judgment — the "brute-force matching game" the industry does by hand. That join is the moat-of-effort, and it's exactly what got cheap in the last 18 months.
2. **Sequencing the math correctly with explanation.** Gross-up-before-cap, controllable vs non-controllable caps, amortization of capital items — getting the order wrong is the #1 dispute trigger. The AI doesn't just compute; it narrates *why* each number is what it is, which is what makes the statement defensible to a tenant's auditor.

## 7. Localization angle (if any)

N/A — this is a US-first play. CAM/NNN reconciliation, audit-rights clauses, and the controllable-cap structure are US commercial-lease conventions. Equivalents exist abroad (UK "service charge" reconciliation under the RICS code is a genuine future market), but the wedge, the lease language, and the willingness-to-pay are sharpest in the US, and the US is currently under-represented in the recent portfolio.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** Per building, billed annually around the reconciliation season. Tiers: **$249/year** for a single building, **$149/building/year** for 2–10, **custom** above. (Anchored against the $2,000–$10,000/building BPO and CapVeri's ~$249/mo software — we undercut the consultant by ~10× and sidestep CapVeri by serving the no-GL customer it can't.)
- **ACV:** A self-managed landlord with ~4 buildings at ~$150 each ≈ **$600/yr**. Blended ACV target ~$500.
- **Rough math to $1M ARR:** ~2,000 landlords × ~$500 ACV = $1M. ~2,000 paying small landlords out of a six-figure pool is reachable.
- **Rough math to $5M ARR:** ~6,000–8,000 landlords plus an upsell. The realistic $5M lever is adding a **per-statement "audit-defense pack"** (the full supporting bundle + a clause-by-clause rebuttal when a tenant disputes) at $99–199/statement, and a tenant-side flip (sell the same engine to national retail tenants who *receive* dozens of CAM statements and want to audit them).
- **Expansion path:** buildings → audit-defense packs → tenant-side auditing → year-round budgeting/estimate-setting (so you sell the off-season too, not just March–June).

## 9. Go-to-market wedge — first 100 customers

- **Scrape the owners, not a directory of tenants.** County assessor + LoopNet/Crexi data identify multi-tenant retail/office parcels held by LLCs (not REITs). Pull the registered agent / owner contact. Target markets where small strip centers cluster (Texas, Florida, Midwest secondary cities). Send a one-page "we'll build your first building's CAM statement free this season" offer in February.
- **CRE accountants and bookkeepers as a channel.** The bookkeeper doing a landlord's QuickBooks is the one who dreads CAM season most. Offer them a partner tier — they run RecoupRoll for their 5–20 landlord clients and keep a margin. One signed bookkeeper = a cluster of buildings.
- **Forum + deadline-timed content.** BiggerPockets commercial forum, r/commercialrealestate, and CRE Twitter are where "how do you all do CAM reconciliation?" gets asked every February–March. Show up with a genuinely useful free CAM cap-sequencing checklist and a free first-building offer, timed to the deadline panic.
- **Pre-sell the season.** Because the pain is calendar-locked, run a "lock your March reconciliation now" pre-sale in January. A landlord who's been burned will pay in advance to not relive last year.

## 10. Build complexity — justification

**Medium.** The plumbing is off-the-shelf: document upload, vision-LLM extraction, a deterministic true-up calculator, PDF generation. The hard, non-trivial work is the **lease-clause extraction + per-line CAM-eligibility classifier**, which needs careful prompt/eval engineering and a labeled set of real lease exhibits to hit accuracy a landlord will trust for a number they bill a tenant. Budget ~3–4 months for a credible v1 with a small team, most of it spent on the lease-parsing accuracy loop and a defensible-statement template a real CRE attorney signs off on. Not solo-in-6-weeks, but well inside the Medium band.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Producing a reconciliation statement is standard landlord activity; we're a tool, not a party to the lease. |
| Ethical — no harm / dark patterns | ✅ | Pushes *toward* transparency and audit-survivability; the pre-send check actively warns against overcharging. |
| Market exists (evidence above) | ✅ | $2K–$10K/building BPO spend + funded software incumbent + recurring legal deadline. |
| 1–5 person team can build this | ✅ | Document-AI + calculator + PDF. Domain advisor needed, not a big team. |
| Launchable with <$50K / ₹40L | ✅ | Inference + a CRE-attorney consult for the statement template. Comfortably under. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | Hard-deadline, money-on-the-line, dispute-fear pain felt every spring. Not quite daily, so not a perfect 20. |
| Demand evidence | 15 | 12/15 | Verbatim "nightmare" quotes, $2K–$10K BPO spend, funded incumbent. Strong but mostly adjacent-to-segment proof. |
| Build feasibility | 15 | 11/15 | Plumbing easy; lease-parsing accuracy is the real work and gates trust. |
| Distribution clarity | 15 | 11/15 | Named owner lists + bookkeeper channel + calendar-timed pre-sale. Conversion still unproven. |
| Revenue mechanics | 15 | 12/15 | Clear willingness-to-pay anchored to $3K consultants; per-building pricing clean. Seasonality is the wrinkle. |
| Time to first revenue | 10 | 7/10 | Pre-sell in Jan, deliver by deadline. But the buying window is concentrated, not year-round. |
| Defensibility | 10 | 5/10 | Execution + accumulating lease/cap-bank data + year-over-year lock-in. A funded incumbent could move down-market. |
| **Total** | **100** | **74/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` (document-AI accuracy loop is the whole game) · `domain-expertise-required` (you must actually understand CAM caps, gross-ups, and exclusions — or have an advisor who does).

### Key assumptions to validate (3–5)

1. **Assumption:** The lease-clause + invoice classifier can hit accuracy a landlord trusts enough to bill a tenant (low single-digit error on includability). **How to test:** Run it against 20–30 real lease exhibits + invoice stacks, hand-grade against a CRE accountant's answer.
2. **Assumption:** Self-managed landlords will pay $150–250/building rather than keep doing it free in a spreadsheet. **How to test:** Pre-sale landing page + 30 owner interviews; require a deposit, not a "yes I'd use it."
3. **Assumption:** The segment is reachable — owner contacts can be extracted from assessor/LoopNet data at acceptable cost. **How to test:** Build one county's list, run a 200-owner cold campaign in February, measure reply rate.
4. **Assumption:** Seasonality won't starve the business 8 months a year. **How to test:** Validate the off-season upsells (estimate-setting, audit-defense) get pull during a real reconciliation cycle.

### Risk flags

1. **Accuracy/liability risk:** A wrong includability call goes into a tenant bill and can trigger a dispute. Mitigate with the "show the clause," human-review-before-send, and a pre-send audit check — never auto-send.
2. **Incumbent moving down-market:** CapVeri (or a Yardi SMB push) could add invoice-ingestion and erase the wedge. The defense is owning the no-GL onboarding and the bookkeeper channel before they notice.
3. **Seasonality:** Demand concentrates March–June. A business that only sells one quarter is fragile until the off-season products land.
4. **Trust to switch:** Landlords burned once are cautious about trusting software with a number they bill a tenant. The free-first-building offer exists to de-risk that first transaction.

## 14. Structured verdict

```
Score:                  74/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder comfortable with document-AI eval loops, paired with a CRE/lease-admin domain advisor
Time to revenue:        8–12 weeks (pre-sell in Jan, deliver by the spring deadline)
Capital to launch:      $5–15K ($/inference + CRE-attorney statement-template review)
Top 3 assumptions to validate first:
  1. Classifier accuracy on real lease exhibits + invoice stacks (hand-graded vs a CRE accountant)
  2. Willingness-to-pay $150–250/building (deposit-backed pre-sale, not survey "yes")
  3. Owner-list reachability and cold-reply rate from assessor/LoopNet data (one-county test)
Kill criteria:
  - Abandon if includability accuracy can't clear ~95% on real lease exhibits after a focused eval cycle
  - Abandon if <5% of 200 cold-emailed owners take a free first-building reconciliation
  - Abandon if a funded incumbent ships no-GL invoice ingestion before your v1 and matches your price
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Collect 10–15 real, anonymized lease CAM exhibits + a matching folder of vendor invoices (from a friendly landlord or a CRE bookkeeper). Hand-build the "correct" reconciliation for two of them with a CRE accountant as ground truth.
- **Day 3–4:** Wire a thin prototype: invoices → extraction, lease → cap/exclusion extraction, line-by-line includability tags with the clause cited. Run it against the two ground-truth buildings and score the gap.
- **Day 5:** Decide go/no-go on a **falsifiable** bar: does the prototype reproduce the accountant's includability classification and true-up number within tolerance on both buildings, with zero clause-level fabrications? If yes, the brute-force-matching thesis holds — proceed to the pre-sale page. If it hallucinates clauses or misclassifies includable items, the load-bearing AI isn't there yet — stop.
