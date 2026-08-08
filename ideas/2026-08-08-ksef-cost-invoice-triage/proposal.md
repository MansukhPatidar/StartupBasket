---
title: "KosztTriage — cost-invoice triage for Polish bookkeepers"
slug: ksef-cost-invoice-triage
date: 2026-08-08
category: Compliance / Poland-SMB — Small and Mid-Size Accounting Offices (40–400 Client Companies) Who Must Now Substantively Verify Every Purchase Invoice KSeF Waves Through Untouched
complexity: Low
score: 75
verdict: GO
confidence: Medium
oneLiner: "Flags the purchase invoices KSeF accepted but your client cannot safely deduct, before the 2027 penalties switch on."
tags:
  vertical: Compliance
  model: SaaS
  geography: EU
  secondary: [Poland, KSeF, AI-agent, SMB, Accounting, Compliance-driven, Solo-builder]
axes:
  problem: 16
  demand: 12
  build: 12
  distribution: 12
  revenue: 11
  time: 8
  defensibility: 4
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# KosztTriage

## 1. One-liner

Flags the purchase invoices KSeF accepted but your client cannot safely deduct, before the 2027 penalties switch on.

## 2. Trend signal — why now?

Poland switched on mandatory B2B e-invoicing in two waves this year: large taxpayers on 1 February 2026, and everyone else — SMEs, micro-businesses, sole traders — from 1 April 2026. Every VAT-registered entity in the country now issues and receives invoices through one government platform.

Here is the part that matters, and that almost nobody has built for. **KSeF validates format, not truth.** The Ministry of Finance gateway checks the XML against the FA(3) logical structure and checks that the issuer had authorization. That is the whole of it. Polish accounting press is blunt about the consequence: KSeF verifies only compliance with the logical structure, and substantive verification of cost invoices remains the obligation of the taxpayer and the accountant. A document can receive a KSeF-ID even when the buyer NIP is wrong, the counterparty does not exist, is suspended, or has been deleted from the register. Wrong VAT rate, miscalculated total, date that does not match reality — the gateway accepts all of it without hesitation.

So the state built a pipe that moves 100% of invoices and verifies 0% of their content, then made receiving those invoices mandatory, then told accountants the substantive check is still their problem.

April 2026 is when that bill came due. When the mandate hit the long tail, the scale jump exposed what partial rollout had hidden: mismatches between KSeF and ERP data (amounts, rates, conversions, rounding), invoices pushed to KSeF late with no valid basis for offline mode, duplicated document channels running KSeF plus email plus supplementary PDFs at the same time, and corrections that are formally correct but unintelligible from the visualization.

The clock is the second half of the signal. Throughout 2026 the tax authority is not applying financial sanctions — an explicit transitional grace period. From 1 January 2027 penalties apply in full: up to 100% of the VAT shown on an invoice issued outside KSeF, up to 180 daily rates for improper invoicing, up to 720 for unreliable invoices. Separately and more importantly for the buyer, errors can strip the right to VAT deduction outright.

Meanwhile the accounting-office market is absorbing the workload and has no tool for this specific job. The tools that exist — Comarch Optima, Symfonia, wFirma, iFirma, SaldeoSmart, and the 30–200 PLN/month KSeF integration layer — solve transport. They fetch invoices from KSeF and push them out. None of them tell an accountant *which of the 900 purchase invoices that landed this month are the dangerous ones.*

Provenance:
  - Signal 1 (demand): Polish accounting press states plainly that KSeF checks only logical-structure compliance and that substantive verification of cost invoices is the obligation of the taxpayer and accountant; separately, practitioner write-ups on the April 2026 wave document KSeF-vs-ERP data mismatches, duplicated document channels, and unintelligible corrections as the top bottlenecks — https://ksiegowosc.infor.pl/ksef/7470406,ksef-sprawdza-tylko-zgodnosc-faktury-z-wymogami-struktury-logicznej-merytoryczna-weryfikacja-faktur-kosztowych-obowiazkiem-podatnika-i-ksiegowego.html and https://grimp.pl/biznes/ksef-w-praktyce/ — August 2026
  - Signal 2 (feasibility): 100% of Polish B2B invoices are now delivered as structured FA(3) XML through one documented government API with a published KSeF 2.0 handbook — machine-readable line items, rates and counterparty IDs arrive without any OCR step, which is what makes automated substantive checking cheap for the first time — https://ksef.podatki.gov.pl/media/qzlha3vx/podrecznik-ksef-20-cz-ii-wystawianie-i-otrzymywanie-faktur-w-ksef-20260209.pdf — August 2026
  - Signal 3 (economic): Sanctions begin 1 January 2027 — fines up to 100% of the VAT on an invoice issued outside KSeF, up to 720 daily rates for unreliable invoices, 14 days to pay after the decision is served — and errors can deprive the buyer of the VAT deduction, putting a hard money value on catching bad invoices before booking — https://ksiegowosc.infor.pl/podatki/vat/faktura/7445424,wystawienie-nierzetelnej-faktury-w-ksef-czego-system-nie-wychwyci-przyklady-uchybien-daty-kwoty-nip-kary-i-inne-sankcje.html — August 2026
  Category: Regulatory arbitrage

## 3. The opportunity

The mandate created a structural asymmetry that is unusually favorable to a small builder.

Before KSeF, purchase invoices arrived as a mess — PDFs by email, paper, scans of varying quality. Any tool wanting to check their contents first had to solve OCR, and OCR on Polish invoices from 400 different suppliers is a genuinely hard, expensive problem. That difficulty is exactly why nobody built substantive verification: the data extraction cost more than the insight was worth.

As of April 2026 that cost went to roughly zero. Every invoice is structured XML in one schema, from one API. The hard part evaporated overnight, and the valuable part — knowing which invoices are risky — is untouched.

The incumbents are not going to take this quickly, and their reason is instructive. Comarch, Symfonia, wFirma and the ERP layer sell *systems of record*. Their KSeF work this year has been defensive plumbing: keep up with API changes, don't break at the wave deadlines. Their roadmaps are consumed by transport reliability. More to the point, a system of record is institutionally reluctant to ship a feature whose output is "the invoice we just booked for you looks wrong" — it implies their own booking flow let it through. A standalone tool has no such conflict. It is free to be the thing that sits *beside* the ERP and says: these eleven, out of nine hundred, need a human.

The wedge is narrow and deliberately so. Not "KSeF software" — that fight is over and well funded. This is a risk-ranking layer on data the accountant already legally possesses, doing the one job the state explicitly declined to do and explicitly assigned to the accountant.

## 4. Target market

- **Primary customer:** Owner or managing partner of a small-to-mid Polish accounting office (biuro rachunkowe) serving 40–400 client companies, typically 3–25 staff. The buyer is the owner, who carries the professional liability personally and who has just spent two quarters absorbing KSeF chaos without raising fees enough to cover it.

- **Why they buy:** Two fears, both concrete. First, professional liability: substantive verification is formally their obligation, and a client who loses a VAT deduction because a bad invoice got booked will look at the accountant. Second, throughput: the office cannot eyeball every purchase invoice for every client at the volumes now flowing, and everyone knows it. Practitioner commentary on the April wave notes that clients increasingly expect the accountant to take on the entire weight of KSeF invoicing, from issuance through archiving — while the accountant does not know the commercial circumstances behind each transaction. The office is being handed responsibility for judgments it lacks the context and hours to make.

- **Rough TAM reasoning:** Poland has a large, fragmented accounting-services sector — on the order of tens of thousands of registered bookkeeping offices, dominated by small firms. I am not going to invent a precise count. Even on a conservative reading, an addressable set of 8,000–15,000 offices with enough client volume to feel this pain is plausible, and I only need a few hundred to build a business at this scale.

- **Why now for them:** The 1 April 2026 wave put their entire client base inside KSeF, so the volume is fully arrived. The 2026 grace period means the consequences have not bitten yet — which is precisely the window in which a preventive tool is an easy yes. From 1 January 2027 it stops being prevention and starts being damage control, and by then several people will be selling this.

## 5. Product sketch (MVP)

- **Daily risk queue.** Pulls the client's purchase invoices from KSeF and presents a ranked list: the invoices that need human eyes today, and why, with everything else collapsed out of the way.
- **Counterparty status check.** Cross-references each supplier NIP against the public VAT register (biała lista) and VIES — flags invoices from entities that are not registered, are struck off, suspended, or whose bank account does not match the whitelist.
- **Arithmetic and rate anomalies.** Recomputes line items, net/gross totals and VAT from the structured XML; flags mismatches, and flags VAT rates that are unusual for that supplier's historical pattern or that goods/service description.
- **Duplicate and near-duplicate catcher.** Same supplier, same amount, near date, or the same invoice arriving both through KSeF and as a stray emailed PDF — the duplicated-channel problem the April wave surfaced.
- **Correction chain reader.** Renders corrective invoices in plain language — what changed, from what to what, against which original KSeF-ID — solving the "formally correct but unintelligible from the visualization" complaint.
- **Deduction-risk notes.** For invoices where the expense category is thin on business justification, prompts the accountant to record the rationale at booking stage rather than reconstructing it under audit.
- **Client-ready query.** One click turns a flagged invoice into a message the office can send its client or the supplier asking the specific question, so the accountant isn't drafting it.
- **Month-close report.** Per client, per period: what was flagged, what was resolved, what was accepted anyway and by whom. This is the liability paper trail.

## 6. AI angle — what's load-bearing

Half this product is deterministic and should be. Arithmetic recomputation, NIP register lookups, duplicate detection by hash and fuzzy match — those are rules, they should be rules, and pretending otherwise would be dishonest.

The AI carries the half that rules cannot reach, and without it the product is a thin validator nobody pays for:

**Description-to-rate reasoning.** Deciding whether a 8% rate is plausible for "usługa konserwacji instalacji" versus whether it should be 23% requires reading free-text line descriptions against VAT rate logic and that supplier's history. It is a judgment over messy natural language at a volume no human will sustain. This is the core of it.

**Anomaly framing over history.** Learning each client's normal — which suppliers, what amounts, what cadence, which categories — and surfacing the invoice that is off-pattern in a way a fixed threshold would miss. A 4,000 PLN invoice is unremarkable in general and very remarkable from a supplier who has never billed above 400.

**Correction-chain summarization.** Turning a formally-correct corrective XML into "this cancels invoice X and reissues it with the buyer NIP fixed" is language work.

**Drafting the client query.** The output that actually saves the accountant time is a written question, in Polish, that a client or supplier can answer.

Remove the AI and you have a spreadsheet macro that checks sums. The reason this is a product is that it makes a judgment call — *this one, out of nine hundred* — and explains it.

## 7. Localization angle

This is a Poland-first play by construction, not by choice of marketing. The product is welded to the FA(3) schema, the KSeF 2.0 API, Polish VAT rate logic, the biała lista register, and the specific sanction regime starting January 2027. The interface, the flag explanations and the client-query drafts must be in Polish; the buyer is a Polish accounting-office owner and English-language SaaS reads as not-for-us in this segment.

Pricing must be in złoty and must sit in the mental band the market has already set for KSeF add-ons — the 30–200 PLN/month range for integration tooling. Anything priced like US SaaS gets dismissed before the demo.

The wider opportunity is that Poland is early, not unique. The EU's broader e-invoicing direction means Germany (issuance from January 2027 for larger firms, January 2028 for the rest) and others are walking into the same asymmetry: mandatory structured invoices, format validation only, substantive verification still on the taxpayer. A tool that proves the pattern in Poland has a credible second market — but that is a year-two conversation, and I would not build for it now.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** Per-office subscription, banded by number of client companies served. 299 PLN/month for offices up to 50 clients, 699 PLN/month up to 150, 1,499 PLN/month up to 400. Roughly $80 / $185 / $400 at current rates. Deliberately positioned above the commodity 30–200 PLN integration add-ons, because this is sold as liability cover, not plumbing — but well under the cost of the junior hour it displaces.

- **ACV:** Realistic blended ACV around 8,400 PLN (~$2,250), assuming the mid band dominates.

- **Rough math to $1M ARR:** ~450 offices at blended ~8,400 PLN/year ≈ 3.8M PLN ≈ $1.0M. Against a plausible base of several thousand offices with enough volume to care, that is low-single-digit penetration. This is the number I actually believe is reachable.

- **Rough math to $5M ARR:** Needs either ~2,200 Polish offices — which starts to strain the addressable base — or, more realistically, two things: (a) an expansion into direct-to-business sales for mid-size companies with in-house accounting, who have the same exposure without an accounting office in between, and (b) the second EU market as its mandate matures. I would treat $5M as contingent on the German wave, not as a straight-line extension of Poland.

- **Expansion path:** Client-count bands do the work automatically as offices grow. Beyond that: per-client add-on for continuous supplier monitoring, an audit-defence export bundling the full flag-and-resolution history for a given period, and a white-label version an office can present to its own clients as its verification standard.

## 9. Go-to-market wedge — first 100 customers

- **The KSeF grievance channels.** Polish accountants have spent 2026 arguing about KSeF in public — industry forums, Facebook groups for księgowi and biura rachunkowe (several are large and highly active), and the comment sections of the accounting trade press. These are named, findable places where the exact complaint this product answers is being posted weekly. The move is not to advertise, it is to answer: post a genuinely useful breakdown of what KSeF does not check and what an office is therefore on the hook for, with the tool as the footnote.

- **The register-based cold list.** Polish accounting offices are enumerable — they are registered entities with published contact details, and the ones serving real volume are identifiable. A list of 2,000 is a weekend of work. The outreach that converts here is not a demo request: it is a free one-off risk scan. Give the office read access for one client for one month, return a report showing the specific invoices that would have been flagged. If the report is empty, the office learns something reassuring and I learn my flags are too tight. If it is not empty, the demo already happened.

- **Trade press and conference circuit.** There is an established Polish tax-conference and training economy for accountants — the 2026 season is explicitly running KSeF-versus-accounting-offices sessions. These are small, cheap, and full of exactly the buyer. A talk on substantive verification obligations post-KSeF is a legitimate contribution and a direct funnel.

- **The software partner path.** The regional ERP and accounting-software resellers who implemented Optima and Symfonia for these offices already have the trust and the account list. They are not going to build this, and it makes their implementation look more complete. A revenue-share reseller arrangement with three or four regional partners is a plausible route to volume once the product is proven, though I would not lead with it — partners want to see it working first.

The realistic shape of the first 100: 30–40 from the free-scan cold outreach, 30 from the forum and community presence, the rest from conferences and word of mouth inside a professional community that talks to itself constantly.

## 10. Build complexity — justification

**Low.** The inputs are structured XML from a single documented government API with a published handbook, plus two public registers for counterparty checks. There is no OCR, no scraping, no data acquisition problem — the hard part of every previous attempt at this is simply gone. The rules engine (arithmetic, duplicates, register status) is straightforward. The AI layer runs on off-the-shelf models against text that is already clean.

The real work is not technical, it is calibration: deciding what to flag. A tool that flags 200 of 900 invoices is worse than useless, because the accountant stops reading it in week two. Getting the false-positive rate low enough to be trusted requires real invoice data and iteration with real offices, and that is where the schedule risk sits.

A competent solo builder with a Polish accounting advisor ships a credible v1 in 8–10 weeks. The advisor is not optional — VAT rate judgment is domain knowledge, and getting it wrong in a compliance product is fatal to trust.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Operates on data the accounting office is already authorized to access on the client's behalf, via the official KSeF authorization model. Standard GDPR/RODO processor obligations apply and are well-trodden. |
| Ethical — no harm / dark patterns | ✅ | The product surfaces risk and hands the judgment to a professional. It does not file anything, does not auto-approve, and does not replace the accountant's decision. |
| Market exists (evidence above) | ✅ | Mandatory nationwide as of April 2026; the verification obligation is explicit in the professional press; incumbents address transport only. |
| 1–5 person team can build this | ✅ | Solo builder plus domain advisor. |
| Launchable with <$50K / ₹40L | ✅ | Realistically under $15K: infrastructure, model inference, advisor retainer, a modest conference and outreach budget. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | Real, recurring monthly, with money and professional liability attached — a lost VAT deduction is a direct, attributable loss. Held back from higher because through 2026 the sanctions are suspended, so the pain is anticipated rather than currently bleeding. That is good for timing and bad for urgency. |
| Demand evidence | 15 | 12/15 | Strong structural evidence: the mandate is universal, the verification gap is documented in the professional press, the April bottlenecks are catalogued by practitioners. What I do not have is a single accountant saying "I would pay 699 PLN/month for exactly this." That gap is the reason this is not a 14. |
| Build feasibility | 15 | 12/15 | Structured input from one documented API, no OCR, off-the-shelf models. Docked for the calibration problem, which is genuinely the hard part and cannot be shortcut. |
| Distribution clarity | 15 | 12/15 | Enumerable buyer list, active named communities, an established conference circuit, and a free-scan offer that doubles as product validation. Not higher because compliance-tool cold outreach into a conservative profession converts slowly. |
| Revenue mechanics | 15 | 11/15 | The $1M path at ~450 offices is credible and the pricing sits in a defensible band. The $5M path is not a straight line from Poland alone and depends on a second market or a segment shift — I score honestly on that. |
| Time to first revenue | 10 | 8/10 | 8–10 weeks to v1, and the free-scan motion converts to paid quickly because the report itself is the proof. Not a 9–10 because accounting offices buy on a considered cycle, not on the spot. |
| Defensibility | 10 | 4/10 | This is the weak axis and I will not dress it up. The rules are copyable, the API is public, and Comarch or wFirma could ship a competing feature if they decide it matters. The only real moats are accumulated calibration data across many offices, and being the trusted name in a small professional community before the 2027 deadline. Execution and speed, not structure. |
| **Total** | **100** | **75/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required`

Polish VAT knowledge is not negotiable. A builder without it needs a practicing accountant as a co-founder or heavily incentivized advisor from week one. Polish language fluency for the product surface and the sales motion is equally hard-required.

### Key assumptions to validate (3–5)

1. **Assumption:** A meaningful share of real purchase invoices — call it 1–3% — carry a substantive defect worth flagging. **How to test:** Run the free scan on 10 offices' real KSeF data for one month and count. If the flag rate is near zero, there is no product; if it is 20%, the flags are wrong. Both are findable in two weeks.
2. **Assumption:** Accounting offices will grant a third-party tool KSeF read access on behalf of clients. **How to test:** Ask 20 offices directly, before building anything. This is a hard gate — the authorization and RODO conversation is the single most likely place to hear no.
3. **Assumption:** Willingness to pay 299–1,499 PLN/month rather than absorbing the risk. **How to test:** Present the scan report from assumption 1 alongside a price, to 20 offices. Measure signed letters of intent, not enthusiasm.
4. **Assumption:** The incumbents stay focused on transport through the 2027 deadline. **How to test:** Track Comarch, Symfonia, wFirma and iFirma release notes monthly. A substantive-verification feature from any of them changes the calculus.

### Risk flags

1. **Platform dependency:** Everything rests on the KSeF API and the FA(3) schema. The Ministry of Finance has revised this system repeatedly and will again. Schema changes are a permanent maintenance tax, and cheap solutions have already been observed failing to keep pace with API updates.
2. **Incumbent absorption:** The defensibility score says it — this is a feature an ERP vendor could ship. The bet is on being trusted and installed before they bother, in a window that closes around the 2027 deadline.
3. **Market timing, both directions:** The 2026 grace period suppresses urgency; a tool sold on penalties that are not yet enforced faces "we'll deal with it next year." But arriving after January 2027 means selling into panic against several competitors. The window is roughly Q4 2026 through Q2 2027, and it is narrow.
4. **False-positive death:** A compliance tool that cries wolf gets ignored, then cancelled. The calibration risk is not a technical footnote, it is the primary product risk.
5. **Regulatory reversal:** Poland has delayed and amended this mandate more than once. A further softening of the sanction regime would blunt the sales argument, though not the underlying workload.

## 14. Structured verdict

```
Score:                  75/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical solo founder, Polish-fluent, with a practicing
                        księgowy as co-founder or equity advisor
Time to revenue:        10–14 weeks
Capital to launch:      ~50,000 PLN / $13K
Top 3 assumptions to validate first:
  1. Real flag rate of 1–3% on genuine purchase-invoice data — run free scans
     on 10 offices for one month and count
  2. Offices will grant third-party KSeF read access for clients — ask 20
     offices before writing code; this is the hard gate
  3. Willingness to pay 299–1,499 PLN/month — show the scan report with a
     price to 20 offices, measure signed LOIs
Kill criteria:
  - Abandon if free scans across 10 offices surface a materially useful flag
    on under 0.5% of invoices — there is no pain to sell
  - Abandon if fewer than 5 of 20 offices will grant KSeF access on behalf of
    clients — the distribution model is structurally blocked
  - Abandon if Comarch, Symfonia or wFirma ship substantive cost-invoice
    verification before v1 launches
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Read the KSeF 2.0 handbook and FA(3) schema properly, and confirm exactly what a third-party tool can access under the accounting-office authorization model. This is a desk exercise and it either opens the door or closes it. In parallel, build the cold list of 200 accounting offices from public registers.
- **Day 3–4:** Call and email 20 office owners. Two questions only: what do you currently do to check the contents of client purchase invoices, and would you let a tool read them to flag the risky ones. Do not pitch a price yet. Listen for whether they describe a process or admit there isn't one.
- **Day 5:** Offer the free one-month scan to everyone who said yes, and get at least 3 offices to actually hand over access.

**Go/no-go:** Proceed only if at least 8 of 20 offices confirm they have no systematic substantive-verification process today, AND at least 3 agree to hand over one client's KSeF data for a free scan. Under those thresholds the pain is either being handled already or the trust barrier is too high — both are reasons to stop before writing code, and both are answers I can get in five days.
