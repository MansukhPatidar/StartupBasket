---
title: "KompletKSeF — VAT completeness ledger for Polish accountants"
slug: ksef-purchase-completeness-ledger
date: 2026-07-19
category: Compliance / Poland — Small & Mid Accounting Offices (biura rachunkowe) closing JPK_V7 in the KSeF era
complexity: Medium
score: 77
verdict: GO
confidence: Medium
oneLiner: Proves every purchase invoice reached the books before JPK_V7 is filed, so no deduction is silently lost.
tags:
  vertical: Compliance
  model: SaaS
  geography: EU
  secondary: [Compliance-driven, SMB, AI-agent, Multilingual, Solo-builder]
axes:
  problem: 17
  demand: 13
  build: 11
  distribution: 12
  revenue: 11
  time: 8
  defensibility: 5
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# KompletKSeF

## 1. One-liner

Proves every purchase invoice reached the books before JPK_V7 is filed, so no deduction is silently lost.

## 2. Trend signal — why now?

Poland switched on mandatory B2B e-invoicing this year and the sequencing is what makes this urgent. KSeF became mandatory for large taxpayers on 1 February 2026, then for essentially all remaining active VAT payers on 1 April 2026. Micro-enterprises follow on 1 January 2027. So as of right now, the entire mid-market is live in the system and has been for one quarter — long enough to have discovered what breaks, not long enough to have fixed it.

Three things converged:

**The buy-side became the risk side.** JPK_V7(3) now carries a mandatory `NrKSeF` field for every invoice that has one, plus three technical markers — `OFF`, `BFK`, `DI` — for documents that don't. Tax authorities can now instantly cross-match what a supplier declared against what the buyer recorded, because both reference the same KSeF number. That cross-match did not exist before February.

**The penalty clock is ticking, not ringing.** There are no financial penalties during calendar 2026 — a full grace year. But criminal-fiscal liability (*odpowiedzialność karnoskarbowa*) already applies from 1 April 2026, and the **100% VAT administrative sanction lands 1 January 2027**. Every accounting office in Poland knows it has roughly five months to get its clients' purchase ledgers clean before the safety net disappears.

**KSeF is not a complete cost ledger, and everyone assumes it is.** Foreign suppliers — EU and non-EU — never appear in KSeF. Suppliers not yet in scope don't either. So a buyer who treats "download everything from KSeF" as done will quietly under-claim VAT on the invoices that live outside it. The reverse also happens: invoices arriving both by email *and* via KSeF get booked twice.

Practitioners are saying this out loud. From a 100-day review of accountants working with the system:

> "Wielki chaos. Faktury dwukrotne jedne e-mailem drugie KSeF."
> — Księgowa, small firm

> "Dużo więcej pracy, bałagan, bo nie ma wszystkich danych na fakturach, brak not korygujących utrudnia pracę i wydłuża procesowanie płatności, ciężko zidentyfikować pracownika, którego dotyczy koszt."
> — Księgowa, large firm (50–249 employees)

> "Podwoił pracę i czas niezbędny do wystawiania faktur, zwłaszcza dla zagranicznych kontrahentów."
> — Główny Specjalista, mid-size firm

And on the economics of coping manually, from an accounting office owner:

> "I hired an additional person just to handle KSeF. Costs went up 20%, and margin fell. I don't recommend shortcuts."

Independent reporting on April 2026 confirms the failure modes are structural, not teething: value mismatches between KSeF and ERP after import, invoices issued on one date but transmitted days later, duplicate risk across "KSeF + mail + eBOK", and PDFs circulating without KSeF numbers despite the document already existing in the system.

There is also a live case of invoices with status "accepted" and a valid KSeF number that the *recipient cannot see*, which blocks the VAT deduction outright: *"w konsekwencji – nie może odliczyć VAT."*

Provenance:
  - Signal 1 (demand): Accountants after 100+ days report duplicate invoices, missing data, and doubled workload; one office hired a dedicated headcount and lost 20% of margin — https://ksiegowosc.infor.pl/wiadomosci/7620358,najwieksze-problemy-z-ksef-jak-je-rozwiazac-oceny-i-wnioski-ksiegowych-i-biur-rachunkowych-po-ponad-100-dniach-pracy-z-systemem.html and https://taxeo.pl/blog/opinie-o-ksef/ — observed 2026-07-19
  - Signal 2 (feasibility): JPK_V7(3) mandates the NrKSeF field plus OFF/BFK/DI markers, and KSeF exposes a documented API with structured FA(3) XML and error codes — making automated buy-side reconciliation mechanically possible for the first time — https://staniekandpartners.pl/blog/ewidencja-vat-w-dobie-ksef-nowe-oznaczenia-faktur-jpk_vat-nrksef-off-bfk-di-i-ich-wplyw-na-spojnosc-rozliczen-podatkowych-od-2026-roku/ and https://ksef.podatki.gov.pl/pytania-i-odpowiedzi-ksef-20/ — observed 2026-07-19
  - Signal 3 (economic): 100% VAT sanction effective 1 Jan 2027 with criminal-fiscal liability already live since 1 Apr 2026; ~17,300 registered accounting-services entities in Poland already paying 15–600 zł/mo for KSeF modules — https://www.plumm.pl/wiedza/kary-ksef-2026 and https://www.coig.com.pl/lista_wykaz_biur-rachunkowych.php — observed 2026-07-19
  Category: Regulatory arbitrage

## 3. The opportunity

Every vendor in the Polish market sells the same two things: **issuing** invoices into KSeF and **importing** them out. Comarch, wFirma, ifirma, Fakturownia, InsERT — all of them have a KSeF module, most priced between 15 and 600 zł/month. That market is saturated and I would not enter it.

Nobody sells the third thing: **proof that the import was complete.**

The distinction matters enormously and it is invisible until you sit in an accounting office at month-end. An import tool answers "what did KSeF give me?" It cannot answer "what should KSeF have given me, and what legitimately lives outside it?" Those are different questions, and only the second one protects the deduction.

Concretely, an office closing a client's month has to establish four things, and today it does them by eyeball across three screens:

1. Every invoice sitting in KSeF for this client's NIP has actually landed in the books.
2. Every cost in the books that has no KSeF number is correctly justified — a foreign supplier, an out-of-scope supplier, a genuine offline case — and carries the right `OFF`/`BFK`/`DI` marker.
3. Nothing got booked twice because it arrived by both email and KSeF.
4. Recurring suppliers who invoiced every month for two years and went silent this month get flagged, because that silence is usually a missing invoice, not a missing purchase.

Point 4 is the one that makes this a product rather than a checklist. A supplier who has billed you on the 5th of every month for 24 months and didn't this month is a near-certain missing document — but no accountant has time to notice an absence across 60 clients. Absence is invisible to manual review by construction. That's the wedge.

The incumbents won't build this quickly because it is orthogonal to their business. Their KSeF module exists to keep customers inside their ERP; a completeness report that works across whatever accounting system the client happens to use is a different product with a different buyer. And the buyer is not the taxpayer — it's the accounting office that carries the liability.

## 4. Target market

**Primary customer:** Owner or managing partner of a small-to-mid Polish accounting office (*biuro rachunkowe*) with 3–25 staff, serving 40–300 SME clients on full bookkeeping (*pełna księgowość* and *KPiR*). Concentrated in Mazowieckie (~29% of all offices), Śląskie, Wielkopolska, Małopolska.

**Why they buy:** Because the liability is personal and they know it. Polish criminal-fiscal law targets the individual who committed the offence, not the abstract taxpayer — as tax advisor Monika Piątkowska put it, an accountant issuing invoices *"can face criminal-tax liability for multiple reasons."* Offices have already absorbed the consequences of client unpreparedness without proportional compensation; one industry account describes clients dumping KSeF obligations wholesale onto the office and calling with complaints rather than reading the instructions they were sent. The office wants an artifact it can put in a file that says: on this date, for this client, this period was complete, and here is what was outside KSeF and why. That artifact is both a work product and a liability shield.

**Rough TAM reasoning:** ~17,300 registered accounting-services entities in Poland (COIG list, cross-checked against ~17,181 in March 2025). The realistic serviceable slice is offices with enough clients to feel the pain but not enough scale to build internal tooling — call it 6,000–8,000. At 300 zł/month average that's a ~250M zł/year theoretical ceiling; I need well under 1% of it.

**Why now for them:** The grace period ends 31 December 2026. From 1 January 2027 a mismatch stops being an inconvenience and becomes a 100% VAT sanction. Offices are making tooling decisions for the 2027 season **right now**, in Q3 2026 — which is precisely why this is a July idea and not a January one.

## 5. Product sketch (MVP)

- **Monthly completeness report per client** — one PDF/XLSX per client per period, listing: invoices in KSeF matched to books, invoices in KSeF *not* in books, book entries with no KSeF number and their justification marker, and suspected duplicates. Signed, timestamped, archivable.
- **Silent-supplier detection** — learns each client's recurring supplier cadence and flags suppliers who historically invoiced in this period but didn't this time. The absence detector.
- **Duplicate catcher** — matches email/PDF-sourced entries against KSeF-sourced entries on amount, NIP, and date proximity, catching the "one by email, one by KSeF" double-booking that accountants are complaining about by name.
- **OFF / BFK / DI marker validator** — checks that every non-KSeF entry carries a defensible marker, and specifically flags `OFF` entries that were never upgraded to `NrKSeF` after the number was later assigned (a known trap).
- **Foreign-supplier ledger** — a deliberate holding area for EU/non-EU costs that will never appear in KSeF, so "not in KSeF" stops being ambiguous.
- **Pre-filing gate** — a red/amber/green verdict before JPK_V7 goes out, with the specific unresolved items listed.
- **Multi-client dashboard** — 60 clients, one screen, sorted by how broken they are. The office owner's Monday morning view.

## 6. AI angle — what's load-bearing

Remove the AI and roughly 60% of this still works — the KSeF-to-books matching is deterministic once you have both sides. I want to be honest about that rather than oversell it. But the parts that decide whether the office keeps paying are the AI parts:

**Fuzzy matching across messy reality.** The same supplier appears as "P.H.U. KOWALSKI Jan", "Kowalski Jan PHU", and a bare NIP across three systems. Amounts differ by rounding. Dates differ because the invoice was issued on the 9th and transmitted to KSeF on the 14th — a documented April 2026 failure mode. Deterministic matching produces a false-positive pile that destroys trust in week two; the whole product dies there. Probabilistic matching with a confidence score and a human-review queue is what makes the output usable.

**Cadence learning for absence detection.** Deciding that a supplier "should have" invoiced requires modelling irregular real-world patterns — quarterly, seasonal, usage-varying — not a naive "monthly" rule. This is a genuine prediction problem and it's the single highest-value feature.

**Justification classification.** Reading an out-of-KSeF cost and proposing the correct marker (`OFF` vs `BFK` vs `DI`) with a plain-Polish rationale the accountant can accept or override. This is judgement over unstructured supplier data, and it's what converts a report into a defensible file note.

## 7. Localization angle

This is a Poland-only product by construction and that's a feature, not a limitation. KSeF, FA(3) schema, JPK_V7(3), and the OFF/BFK/DI taxonomy are Polish-specific. The UI, the reports, and the support must be in Polish — accounting offices will not adopt an English tool for a Polish statutory filing, and the output has to be readable by a tax inspector.

The regulatory specificity *is* the moat (see §12). It also means a clean sequel: Romania (e-Factura), Italy (SdI), and the broader ViDA rollout create structurally identical completeness gaps. But I'd resist that until Poland is at 500 offices — the whole advantage here is depth in one regime.

Pricing must be in zł and land in the range offices already accept for a KSeF module (15–600 zł/mo depending on volume). Payment via standard Polish rails; a per-office invoice, not per-seat card billing.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** Per accounting office, tiered on client count. Starter 249 zł/mo (up to 30 clients), Pro 499 zł/mo (up to 100), Office 899 zł/mo (up to 300). Roughly 5–15 zł per client per month — small enough that the office re-bills it invisibly or absorbs it against one hour of saved reconciliation.
- **ACV:** ~5,400 zł (~$1,350) at the Pro tier, which I expect to be the centre of gravity.
- **Rough math to $1M ARR:** ~740 offices at Pro (~$1,350 ACV) = ~$1M. Against ~17,300 registered entities that's 4.3% penetration of the total, or roughly 10% of the realistic serviceable slice. Achievable but not trivial — this is the number that has to be defended.
- **Rough math to $5M ARR:** Needs ~2,500 offices plus expansion, which means either mid-tier offices moving up as they grow client counts, or the Romania/Italy extension. I'd treat $5M as the ceiling case and $1.5–2M as the honest target for this market alone.
- **Expansion path:** Client-count tier creep is the natural motion (offices grow, tiers step up). Then a per-client direct upsell for larger SMEs that want their own view, and an archival tier — long-term signed retention of completeness reports, which is exactly the thing you want to have bought when an inspection arrives in 2029.

Margins are ordinary SaaS. Main variable cost is document processing; at a few thousand invoices per office per month this is real but manageable, and it's the number to watch on the Office tier.

## 9. Go-to-market wedge — first 100 customers

1. **The COIG list is the target list, and it's purchasable.** ~17,300 accounting entities with contact data. Segment to offices with 40+ clients in the four dense voivodeships. Send a Polish-language email containing a *free completeness audit of one client's last closed month* — the office sends one export, gets back a real report showing actual gaps. This is the entire motion: the demo is the deliverable, and it's unfalsifiable because it uses their own data. Expect 2–4% to accept a free audit; expect a high fraction of those who find real gaps to convert, because finding a missing invoice in the sample is self-proving.

2. **Ride the Q4 deadline panic deliberately.** Between September and December 2026 every office in Poland is preparing for the sanction regime starting 1 January. Publish a Polish-language "completeness checklist before the grace period ends" and run it through the venues where these people actually are: forum.gofin.pl (the KSeF section is active), the accounting groups on Facebook and LinkedIn where *biura rachunkowe* owners congregate, and the SKwP branch meetings. Content aimed at practitioners three months before their deadline, not evergreen SEO.

3. **Partner with the KSeF training industry.** A cottage industry of consultancies is already running paid KSeF implementation workshops for offices (OSCBR, TPA, WZ Partners and many smaller ones). They have the audience assembled in a room and no tool to hand them at the end. Revenue-share on referrals; three good partners are worth more than any ad spend.

4. **Go where the complaints are.** Accountants are publicly describing duplicate-invoice chaos and doubled workload in forum threads and article comments with attributable detail. Reply usefully — not with a pitch, with the actual answer to their specific problem — then offer the free audit. Low volume, very high conversion, and it doubles as product research for the first 20 customers.

5. **One reference office per voivodeship.** This market runs on peer trust and offices talk to each other constantly. Discount deeply for the first named reference in each region in exchange for a case study with real numbers ("cut month-end reconciliation from 6 hours to 40 minutes across 80 clients").

## 10. Build complexity — justification

**Medium.** The KSeF API is documented and public, FA(3) is a published XML schema, and the error codes are enumerated — no reverse-engineering required. The genuine work is in the integration surface: reading the books side means connecting to Comarch Optima, wFirma, ifirma, Symfonia, and InsERT, each with its own export format and varying API quality. I'd ship v1 against **file export/import only** (XLSX/CSV/JPK files), which sidesteps every integration and still delivers the whole value proposition, then add direct connectors for the top two systems based on which ones the first 30 customers actually use.

Realistic estimate: 10–14 weeks to a credible v1 for two people, one of whom must genuinely understand Polish VAT accounting. That domain requirement is not negotiable and it's the real constraint — a technically excellent build that gets the OFF/BFK/DI semantics subtly wrong is worse than useless, because it produces confidently incorrect file notes.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Read-only analysis of the client's own data. No filing on their behalf in v1, so no agent authorisation needed. |
| Ethical — no harm / dark patterns | ✅ | Helps businesses claim deductions they are legally entitled to and file accurately. Aligned with the tax authority's own objective. |
| Market exists (evidence above) | ✅ | ~17,300 offices, existing paid spend on KSeF modules, documented and quoted pain. |
| 1–5 person team can build this | ✅ | Two people, one with Polish VAT domain expertise. |
| Launchable with <$50K / ₹40L | ✅ | Well under. Main costs are the contact list, document-processing spend, and a Polish-speaking domain advisor. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 17/20 | Monthly, unavoidable, and carrying personal criminal-fiscal liability from April 2026 plus a 100% VAT sanction from January 2027. Not 19–20 because the 2026 grace period lets the most complacent offices defer the decision another quarter. |
| Demand evidence | 15 | 13/15 | Multiple independent signals: verbatim practitioner complaints, an office that hired headcount and lost 20% margin, documented April bottlenecks, existing paid spend on adjacent modules. Short of 15 because nobody is yet paying for *this specific deliverable* — I'm inferring willingness from adjacent spend. |
| Build feasibility | 15 | 11/15 | Public API and published schema, but multi-ERP export handling and matching accuracy are real work. 10–14 weeks, not 6. |
| Distribution clarity | 15 | 12/15 | Named enumerable list, a self-proving free-audit offer, and a hard deadline creating urgency. Held below 13 because cold email to Polish accounting offices is unproven by me and response rates are a guess. |
| Revenue mechanics | 15 | 11/15 | Pricing anchored to what offices already pay for KSeF modules. But 740 offices for $1M is a real sales grind at this ACV, and Polish SMB software pricing is genuinely tight. |
| Time to first revenue | 10 | 8/10 | Free audit converts fast because it proves itself on the customer's own data, and Q4 urgency helps. Realistically 6–8 weeks post-launch, not 4. |
| Defensibility | 10 | 5/10 | Regulatory depth and accumulated matching heuristics compound, and incumbents are structurally disinclined to build a cross-ERP tool. But this is copyable within 12 months by a motivated Polish competitor, and one of them will try. |
| **Total** | **100** | **77/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required`

Needs someone who can build reliable matching over messy data, paired with someone who knows Polish VAT practice in their bones. A non-Polish solo founder should not attempt this alone — the failure mode is producing authoritative-looking documents that are subtly wrong about statutory semantics.

### Key assumptions to validate (3–5)

1. **Assumption:** Offices will pay 249–899 zł/mo for a completeness *report*, not just a cheaper import tool. **How to test:** Run the free audit for 20 offices, then quote real pricing. Track how many convert versus how many say "useful, but our ERP already imports from KSeF" — that objection is the one that kills the thesis.
2. **Assumption:** Real gaps exist at meaningful frequency. If a typical client-month is already clean, there is no product. **How to test:** The first 20 free audits are the experiment. Measure gaps found per client-month. Below ~0.5, the pain is theoretical.
3. **Assumption:** Books-side data can be extracted from the top 5 Polish accounting systems without per-customer engineering. **How to test:** Get real export files from 10 offices across all 5 systems before writing the parser. This is a build-cost question that could double the timeline.
4. **Assumption:** The office is the buyer, not the SME. **How to test:** Pitch both in parallel for the first month and see who takes the meeting and who signs.

### Risk flags

1. **Market timing — narrow and asymmetric.** The window is Q3–Q4 2026, ahead of the January 2027 sanction. Arriving in March 2027 means offices have already improvised something and the urgency has discharged. This idea has a shelf life measured in months.
2. **Platform dependency.** Entirely dependent on the KSeF API and the FA(3) schema, both controlled by the Ministry of Finance and both actively changing. Schema revisions are maintenance forever. On the other hand, that churn is exactly what keeps casual competitors out.
3. **Incumbent absorption.** Comarch or wFirma could ship a "completeness check" inside their existing module and bundle it at zero marginal price. The defence is cross-ERP coverage — an office running three different systems across its client base cannot use any single vendor's built-in check. That defence is real but it is not permanent.
4. **Regulatory softening.** Poland has delayed KSeF repeatedly before. A further extension of the grace period past 2026 would deflate urgency badly — not fatally, since the completeness problem persists, but the sales cycle would lengthen considerably.

## 14. Structured verdict

```
Score:                  77/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder paired with a Polish tax/accounting domain expert.
                        Poland-based or with a genuine Polish co-founder — not remotely operable.
Time to revenue:        6–8 weeks post-launch; first paid customer realistically September 2026
Capital to launch:      $8–15K (~35–60K zł) — contact list, document processing, domain advisor
Top 3 assumptions to validate first:
  1. Real gaps exist per client-month — run 20 free audits, measure gaps found; below 0.5 average, stop
  2. Offices pay for proof, not just import — quote real pricing after the audit, track the
     "our ERP already does this" objection rate
  3. Books-side export is tractable across the top 5 Polish accounting systems — collect
     10 real export files before committing to the parser
Kill criteria:
  - Abandon if 20 free audits surface fewer than 0.5 genuine gaps per client-month
  - Abandon if fewer than 3 of the first 25 audited offices convert to paid within 30 days
  - Abandon if Comarch or wFirma ships an equivalent cross-ERP completeness report before v1
  - Abandon if the grace period is extended beyond 2026 AND audit conversion is under 10%
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Build nothing. Pull 40 accounting offices from the COIG list in Mazowieckie with 40+ clients. Send a Polish-language email offering a free completeness audit of one client's last closed month. Target: 6 accept.
- **Day 3–4:** Run those audits *by hand* — KSeF export against their books export, matched manually in a spreadsheet. This is deliberately unscalable and it's the entire point: it produces the real gap-frequency number without a line of product code.
- **Day 5:** Send each office its report and immediately quote 499 zł/mo. Ask for a card, not a "would you be interested."

**Go/no-go:** Proceed only if the manual audits average **≥0.5 genuine gaps per client-month** AND **≥2 of 6 offices agree to pay** on the spot. Anything less means offices believe their import already covers them — and belief, not reality, is what determines whether they buy.
