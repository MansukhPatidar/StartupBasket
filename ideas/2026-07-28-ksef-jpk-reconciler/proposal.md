---
title: "ZgodaKSeF — JPK reconciler for Polish accounting offices"
slug: ksef-jpk-reconciler
date: 2026-07-28
category: FinTech / Poland-SMB — Small & Mid Accounting Offices (biura rachunkowe)
complexity: Medium
score: 75
verdict: GO
confidence: Medium
oneLiner: "Matches every client's KSeF invoices against what you actually booked, so no JPK_V7 line costs you 500 zł."
tags:
  vertical: FinTech
  model: SaaS
  geography: EU
  secondary: [Compliance-driven, SMB, AI-agent, Multilingual, Solo-builder]
axes:
  problem: 17
  demand: 12
  build: 11
  distribution: 12
  revenue: 12
  time: 7
  defensibility: 4
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# ZgodaKSeF

## 1. One-liner

Matches every client's KSeF invoices against what you actually booked, so no JPK_V7 line costs you 500 zł.

## 2. Trend signal — why now?

Poland switched on mandatory B2B e-invoicing (KSeF) in 2026, and the rollout hit the mass market this April. That's the event.

- **February 1, 2026** — KSeF became mandatory for companies above PLN 200m turnover. **April 1, 2026** — it extended to most VAT-registered businesses. Micro-entrepreneurs follow **January 1, 2027**. Small businesses may keep issuing paper/other electronic invoices only until **September 30, 2026** ([EY](https://www.ey.com/en_gl/technical/tax-alerts/poland-signs-into-law-mandatory-national-e-invoicing-system), [ecosio](https://ecosio.com/en/blog/e-invoicing-in-poland-7-topics-you-need-to-know-in-2026/)). Two more forced-migration waves are still ahead.
- **April was when the wheels came off.** A practitioner write-up of April 2026 in accounting offices names the bottlenecks precisely: "rozjazdy danych między KSeF a ERP (kwoty, stawki, przeliczenia, zaokrąglenia)" — invoices correct in KSeF but importing into accounting software with wrong net/gross, rounding errors, scrambled line items. Plus the two-dates problem (issued 09.04, sent to KSeF 14.04) and PDFs arriving without KSeF numbers, forcing manual duplicate hunts ([GRIMP](https://grimp.pl/biznes/ksef-w-praktyce/)).
- **The penalty is per-error and mechanical.** JPK_V7 records must now carry either the invoice's KSeF number or one of the new status markers. A missing or wrong marker is a JPK error. After a tax office notice, the taxpayer has **14 days** to correct; failing that, **500 zł per error** ([Podatnik.info](https://www.podatnik.info/publikacje/nowe-oznaczenia-faktur-w-jpk-vat,66309a), [itbps](https://itbps.pl/blog/ksef-a-jpk-vat-zmiany-kary-ryzyka)). Criminal-fiscal liability under KKS applies from April 1, 2026; the 100% VAT administrative penalty lands January 1, 2027.
- **KSeF is a repository, not a workflow.** It sends no notification of inbound cost invoices, does not verify arithmetic, and offers buyers no reject mechanism — only hide, request correction, or report fraud ([VATAX](https://www.vatax.pl/blog/ksef-odbior-kontrola-faktur)).
- **Duplicates are the signature failure.** Client emails a PDF out of habit; the office also pulls the same invoice from KSeF; it books twice. One documented case had "the same invoice appeared in two different workflows," caught only during VAT declaration prep — requiring full-period re-verification and a postponed deadline ([OSCBR](https://oscbr.pl/najczestsze-bledy-w-pracy-z-ksef-w-biurze-rachunkowym), [Pioniew](https://www.pioniew.eu/ta-sama-faktura-dwa-razy-w-ksiegowosci-jak-uniknac-dublowania-dokumentow-po-wdrozeniu-ksef-9144/)).
- **Market size is real.** 17,348 registered accounting-and-bookkeeping entities in Poland as of May 2026 ([COIG](https://www.coig.com.pl/lista_wykaz_biur-rachunkowych.php)). The ranked segment alone: 3,008 firms, PLN 3.97bn combined revenue, ~PLN 1.09m average ([analizafirm](https://analizafirm.pl/ranking/biura-rachunkowe/)).
- **Money is already moving.** SaldeoSMART sells accounting offices packages at 259 / 379 / 739 zł net per month plus a credit pool, and from June 1, 2026 charges 1 credit per invoice for its "Uzupełnij z AI" booking-parameter feature ([CI-COMPUTER](https://www.cicomputer.pl/ile-kosztuje-saldeosmart-cennik-pakietow-i-funkcji-ai-w-2026-roku/)). Thin notification tools like KSeF Monitor charge 290–1,990 zł/year ([KSeF Monitor](https://ksef-monitor.pl/)).

Provenance:
  - Signal 1 (demand): April 2026 mass KSeF onboarding exposed KSeF↔ERP data mismatches, two-date disputes, PDFs without KSeF numbers, and duplicate bookings caught only at VAT-declaration time — https://grimp.pl/biznes/ksef-w-praktyce/ — 2026-07-28
  - Signal 2 (feasibility): KSeF 2.0 exposes a documented API and FA(3) structured XML; both the authoritative invoice set and the booked ledger are machine-readable, so matching needs no OCR — https://www.vatax.pl/blog/ksef-odbior-kontrola-faktur — 2026-07-28
  - Signal 3 (economic): JPK_V7 must carry KSeF numbers/status markers; 14-day correction window then 500 zł per error, KKS liability from April 2026, 100% VAT penalty from January 2027 — https://itbps.pl/blog/ksef-a-jpk-vat-zmiany-kary-ryzyka — 2026-07-28
  Category: Regulatory arbitrage

## 3. The opportunity

Everyone built the wrong half of the product.

The Polish market responded to KSeF with two categories. **Notification tools** (KSeF Monitor, MrKSeF, KsefAlert) tell you an invoice arrived. KSeF Monitor is explicit about its own scope: *"Nie wystawiamy faktur, nie modyfikujemy. Tylko monitor."* **Accounting platforms** (SaldeoSMART, Comarch Optima, inFakt, Fakturownia) pull invoices from KSeF and increasingly propose booking parameters with AI.

Both operate on the *inbound* stream. Neither answers the question that actually generates penalties: **does the set of invoices in KSeF match the set of documents in my books, line for line, for this VAT period?**

That's a two-sided reconciliation problem, and it is where the failures documented above all land:

- An invoice sits in KSeF and was never booked → understated cost, or a missed VAT deduction window.
- A document was booked but has no KSeF counterpart → is it a legitimate out-of-scope document (foreign supplier, sub-450-zł receipt with NIP, proforma) or a JPK error waiting for a 500-zł notice?
- The same invoice was booked twice — once from KSeF, once from the client's emailed PDF.
- KSeF shows one net/gross/rounding and the ERP shows another.
- The invoice's KSeF number is missing from the JPK_V7 record, or carries the wrong status marker.

The incumbents can't easily cover this because their vantage point is wrong. SaldeoSMART sees the documents *it* processed. Optima sees its own ledger. Neither sits above a portfolio of 40–80 client entities across *mixed* accounting systems — which is exactly the shape of a real biuro rachunkowe, where one office runs Optima for some clients, Symfonia for others, and a client's own inFakt for a third group.

The wedge is being the neutral referee. Pull the authoritative record from KSeF, pull the booked record from whatever system holds it, and produce a per-client, per-period exception list with the JPK_V7 consequence spelled out. Not a nicer inbox — a pre-filing audit that says *these 7 lines will cost you 3,500 zł if you file as-is.*

## 4. Target market

- **Primary customer:** Owner or lead accountant at a Polish **biuro rachunkowe** with 3–25 staff serving 40–200 client entities. Concentrated in Warsaw, Kraków, Poznań, Wrocław, Katowice, Gdańsk, but the long tail is nationwide and small-city.
- **Why they buy:** Because the liability is theirs commercially even when it's the client's legally. As the sanctions analysis puts it: *"Odpowiedzialność biura rachunkowego zależy od tego, co zostało uzgodnione w umowie... im szerszy zakres usług, tym większa odpowiedzialność."* The taxpayer is the tax office's target, but the office faces **civil liability toward its clients** ([OSCBR](https://oscbr.pl/sankcje-w-ksef-2026-%E2%80%93-co-grozi-za-bledy-i-jak-ich-uniknac-w-biurze-rachunkowym)). When a client gets a 500-zł-per-error notice for a period the office closed, that's an invoice the office eats and a client relationship that wobbles.
- **Rough TAM reasoning:** 17,348 registered accounting entities. Strip sole practitioners with under ~15 clients (they'll live inside their accounting suite) and the serviceable band is realistically 4,000–7,000 offices. At 349 zł/mo average that's a PLN 17–29m serviceable market — too small for VC, correct size for a bootstrapper. Adjacent expansion: in-house finance teams at multi-branch companies, where the same duplicate/routing problem was documented ([Infor](https://ksiegowosc.infor.pl/ksef/7527053,ksef-2026-problemy-z-duplikatami-podwojnym-ksiegowaniem-wydatkami-sluzbowymi-i-przyjeciem-do-magazynu-spolki-z-wieloma-oddzialami-traca-kontrola-nad-fakturami.html)).
- **Why now for them:** April 2026 quadrupled their KSeF-covered client base overnight. The September 30, 2026 end of the small-business paper transition and the January 2027 micro-entrepreneur wave are two more forced migrations. And the penalty regime escalates on a published calendar — KKS liability already live, 100% VAT penalty from January 2027. The pain gets worse on a schedule they can read.

## 5. Product sketch (MVP)

- **Portfolio dashboard** — every client entity in one grid, each with a period-close readiness status: green (reconciled), amber (open exceptions), red (exceptions with quantified JPK penalty exposure).
- **Two-sided period reconciliation** — pull the authoritative invoice set from KSeF via API for each client NIP; pull the booked set from the office's accounting system export; match line by line on KSeF number, NIP, amount, and date.
- **Exception list with the consequence named** — every mismatch classified: in KSeF but not booked / booked but not in KSeF / booked twice / amount mismatch / missing or wrong JPK_V7 marker. Each carries a plain-language explanation and the estimated zł exposure.
- **Duplicate catcher** — flags when a client-emailed PDF and a KSeF-pulled invoice are the same document, before both get booked. This is the single most-cited failure in the source material.
- **Two-dates resolver** — surfaces invoices where issue date and KSeF submission date fall in different periods, and states which period the cost belongs in.
- **Out-of-scope whitelist** — recognizes documents that legitimately live outside KSeF (foreign-supplier invoices without a Polish NIP, sub-450-zł receipts with NIP, proformas) so they stop generating false alarms. This is what makes the exception list trustworthy enough to act on.
- **Pre-filing report** — one PDF per client per period: what was checked, what was found, what was fixed. Doubles as the office's own defense file and as a deliverable it can show the client.
- **Client nudge** — auto-message to clients who keep emailing PDFs already in KSeF, since the root cause is documented as habit: *"Dublowanie dokumentów najczęściej wynika z przyzwyczajeń."*

## 6. AI angle — what's load-bearing

Honest answer: AI is doing real work here, but it is not doing the *matching*. Matching is deterministic — KSeF number, NIP, amount, date. Anyone claiming AI for that is decorating.

AI is load-bearing in three places, all of them the places where deterministic rules break:

1. **Fuzzy duplicate identification.** A client-emailed PDF and a KSeF XML of the same transaction share no key. The PDF has no KSeF number — that's the whole problem. Deciding "these are the same invoice" from a scanned PDF against structured XML, across different vendor number formats and rounding, is exactly the judgment call that eats accountant hours today.
2. **Exception classification and explanation.** Turning "booked, no KSeF counterpart" into "this is a foreign-supplier invoice, correctly out of KSeF scope, no action" versus "this should have been in KSeF — 500 zł exposure, fix before filing" requires reading the document and reasoning about Polish VAT scope. That triage is the product's value; a raw mismatch list without it is noise an office will ignore by week two.
3. **Correction drafting.** Generating the corrective action — including the "wyzerowanie" full-zeroing correction that the tax authority requires when the NIP is wrong ([Infor/KIS](https://ksiegowosc.infor.pl/podatki/vat/faktura/7625684,skarbowka-bledny-nip-w-ksef-wymusza-fakture-korygujaca-do-zera-dyrektor-kis-tak-to-trzeba-rozliczyc-w-jpk-v7.html)) — and the client-facing explanation of what happened.

Remove the AI and you have a diff tool that produces a thousand-row exception list per period and gets abandoned. The AI is what compresses that list to the twelve rows that matter and tells you what to do about each. That's the 2-hours-to-2-minutes collapse.

## 7. Localization angle

This *is* the localization play — it doesn't have one, it is one.

The entire product is Polish regulatory surface: KSeF 2.0 API, FA(3) XML schema, JPK_V7 marker rules, the 14-day/500-zł notice mechanic, KKS liability dates, the sub-450-zł receipt carve-out, the foreign-supplier exclusion. Interface, exception copy, and correction drafts must be in Polish — the buyer is an accountant reading tax language, and machine-translated compliance copy destroys credibility on first read.

Pricing localizes too: PLN, net-of-VAT quoting (Polish B2B always quotes netto), and invoice-based billing over card-only, which matters for offices that expense software.

The genuine expansion path is that Poland is one instance of a pattern the EU is running everywhere — ViDA is pushing every member state toward mandatory structured e-invoicing on staggered timetables. The reconciliation gap between "what the state's system says" and "what got booked" reappears in each country with different plumbing. Poland is the beachhead because the mandate is live *now* and the penalty is per-error. But the correct read is: win Poland properly, then port the engine, not build a generic EU product on day one. A generic product would lose Poland to someone who knew what the 450-zł receipt rule was.

## 8. Business model — path to $1M–$5M ARR

- **Pricing** (PLN net/month, annual billing at ~2 months free):
  - **Biuro Start** — 249 zł — up to 25 client entities
  - **Biuro Pro** — 449 zł — up to 75 entities, correction drafting, client nudges
  - **Biuro Max** — 899 zł — up to 200 entities, multi-user, white-label client reports
  - Overage: 6 zł per entity per month above tier.
- **ACV:** ~PLN 4,900 (~$1,250) blended, assuming the mix lands mid-tier. Deliberately benchmarked *below* SaldeoSMART's 259/379/739 zł packages plus credits — this is an add-on to the accounting stack, not a replacement, and it has to price like one.
- **Math to $1M ARR:** ~800 offices at 449 zł/mo ≈ PLN 4.3m ≈ $1.08M. That's roughly 12–16% of the serviceable 5,000–7,000-office band. Achievable but not trivial — it assumes real channel work, not inbound.
- **Math to $5M ARR:** Poland alone can't get there at these prices without near-absurd share. $5M needs either (a) two more mandate markets on the same engine as ViDA timetables land, or (b) moving upmarket into in-house finance teams at multi-branch companies, where the routing problem is documented and budgets are larger. Assume $5M is an 30–42-month story contingent on a second country, and don't plan the business around it.
- **Expansion path:** entity count grows naturally as offices win clients (built-in expansion revenue, no upsell motion needed). Then per-period correction-drafting volume. Then the white-label client report as a service the office resells to *its* clients as a "KSeF compliance review" — turning our cost line into their revenue line, which is the single strongest retention mechanic available here.

## 9. Go-to-market wedge — first 100 customers

The buyer is enumerable, has a public registry, and is currently in visible pain on a published calendar. That's about as good as targeting gets.

1. **Free "period audit" as the wedge, run against real data.** Offer any office a no-charge reconciliation of one client entity for one closed VAT period. They grant KSeF permissions on the office NIP (the recommended practice anyway) and drop in one ledger export. We return the exception list with zł exposure quantified. This is a demo that produces a number about their own book of business, not a screenshot. Target: 300 audits → 25% convert, because a nonzero exception count on a period they already closed is an extremely uncomfortable finding.
2. **Work the COIG registry directly.** 17,348 registered accounting entities is a purchasable, filterable list. Segment to offices with 3–25 staff, personalize on city and likely accounting software, and lead the email with the 500-zł-per-error mechanic and the free audit. 2,000 contacts → 8–12% reply on a compliance-deadline hook → ~200 audits.
3. **Own the search term that's already being typed.** Publish precise, dated Polish explainers on the exact questions the forums show accountants asking — *"czy księgować PDF jeśli ta sama faktura jest w KSeF"*, *"faktura wystawiona 09.04 wysłana do KSeF 14.04 — który okres"*, *"korekta do zera przy błędnym NIP w JPK_V7."* These are high-intent, low-competition, and each maps to a product feature. Slower channel, but it compounds and it's cheap.
4. **Go where the practitioners argue.** Polish accounting Facebook groups and forums are where the April 2026 emotional threads happened. Show up answering the duplicate and two-dates questions substantively for a month before mentioning a product. Offices buy from someone who visibly knows the KKS calendar.
5. **Partner with the software the offices already run.** Not the big suites — the regional implementation partners and resellers of Optima/Symfonia who install and support these offices. They have the relationships, they're fielding these complaints already, and a 20% recurring referral cut is cheap distribution.

Channels 1 and 2 are the engine to 100. Channels 3–5 are what make months 6–18 work.

## 10. Build complexity — justification

**Medium.** ~14–18 weeks to a sellable v1 for a strong pair, one of whom must genuinely learn Polish VAT mechanics.

Off-the-shelf: KSeF 2.0 API integration against a documented public schema (FA(3) XML) with a homologation environment to test against — no scraping, no reverse-engineering. Standard web stack. Deterministic matching is ordinary engineering. LLM APIs handle classification and drafting.

The custom work, honestly stated: (a) **ledger ingestion across mixed accounting systems** — Optima, Symfonia, inFakt, Fakturownia, plus CSV/JPK file import as the universal fallback. Ship CSV+JPK import first and add native connectors by customer demand; trying to build five connectors before launch is how this becomes a 9-month project. (b) **The exception rule set** — encoding out-of-scope carve-outs, marker rules, and period-attribution logic correctly. This is domain work, not coding work, and it's where a solo technical founder without an accountant co-founder or paid advisor will produce something confidently wrong.

Not Low, because being wrong here is worse than being absent — an exception list that cries wolf gets switched off, and one that misses a real error creates the exact liability we're selling protection from.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Uses the official KSeF API with client-granted permissions. Read-and-compare; no invoice issuance in v1, which keeps us out of the certified-issuer regime. GDPR applies — Polish/EU data residency and a proper DPA are table stakes for accountants. |
| Ethical — no harm / dark patterns | ✅ | Helps offices avoid genuine penalties. Risk to manage: don't overstate exposure figures to drive urgency. The zł estimate must be conservative and clearly labeled an estimate. |
| Market exists (evidence above) | ✅ | 17,348 registered entities, documented April 2026 failures, incumbents already charging 259–739 zł/mo. |
| 1–5 person team can build this | ✅ | Two builders plus a paid accountant advisor. |
| Launchable with <$50K / ₹40L | ✅ | Realistically $12–20K: two founders' time, API/LLM costs, list acquisition, legal review of the DPA and terms. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 17/20 | Per-error monetary penalty on a legal deadline, escalating on a published calendar, with civil liability flowing to the office. Felt every VAT period, not daily — that's what holds it off 18+. |
| Demand evidence | 15 | 12/15 | Strong: documented practitioner failures, an existing paying market at 259–739 zł/mo, enumerable buyers. Held back because the evidence is trade press and vendor content rather than customers telling *me* they'd pay for reconciliation specifically. |
| Build feasibility | 15 | 11/15 | Documented API and structured XML on both sides. Drag is mixed-ERP ingestion and getting the domain rules right. 14–18 weeks, not 6. |
| Distribution clarity | 15 | 12/15 | Registry of 17,348, a free audit that produces a number about their own data, and named partner channels. Not 14 because compliance-fatigued accountants in mid-2026 are being marketed at from every direction. |
| Revenue mechanics | 15 | 12/15 | Pricing benchmarked against a real incumbent, $1M path needs ~800 offices. Docked because $5M genuinely requires a second country or an upmarket move — I'd rather say that than pretend Poland carries it. |
| Time to first revenue | 10 | 7/10 | Free audit → paid within weeks is plausible, but the audit needs KSeF permissions and a ledger export from the customer, which adds friction and a decision-maker. 6–10 weeks realistic. |
| Defensibility | 10 | 4/10 | This is the weak axis and I won't dress it up. The engine is copyable, and SaldeoSMART or Comarch could bolt reconciliation onto what they already have. Real defense is speed to the mandate window, accumulated rule-set accuracy, and portfolio-level workflow lock-in — not a moat, a head start. |
| **Total** | **100** | **75/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required`

You need someone who can integrate a government API and reason about XML at volume, and someone who genuinely knows Polish VAT. Polish-language fluency is non-negotiable for both product copy and sales. A non-Polish founder should not attempt this without a Polish co-founder — this is a market where being an outsider is a disqualifying tell to the buyer.

### Key assumptions to validate

1. **Assumption:** A free reconciliation of one closed period against real client data finds a nonzero exception count in the majority of offices. **How to test:** Run manual reconciliations for 15 offices using spreadsheets before writing product code. If most come back clean, the premise is wrong and this is a PASS.
2. **Assumption:** Offices will grant KSeF API permissions to a third-party tool. **How to test:** Ask directly in the first 30 sales conversations, before building. Permission-granting on the office NIP is already recommended practice, but a hard no here kills the product outright.
3. **Assumption:** Offices see reconciliation as a *separate* purchase rather than something they expect their accounting suite to include for free. **How to test:** Price-test at 249/449 zł against 20 offices; watch for "shouldn't Saldeo do this?" — if that's the dominant response, the wedge is wrong and this becomes a feature pitch to a suite vendor instead.
4. **Assumption:** Ledger export is reliably obtainable across the mixed systems offices actually run. **How to test:** Collect real exports from 10 offices across Optima, Symfonia, and inFakt in week one and confirm they carry KSeF numbers and enough fields to match on.
5. **Assumption:** Exception classification is accurate enough to be trusted. **How to test:** Have a paid accountant advisor grade 200 classified exceptions. Below ~90% and the product gets switched off in month two.

### Risk flags

1. **Incumbent absorption:** SaldeoSMART already pulls from KSeF and shipped AI booking parameters in 2026. Reconciliation is a plausible next feature for them, and they have the customers. This is the most likely way the idea dies.
2. **Regulatory moving target:** The mandate calendar has slipped before, and the Ministry has signaled a mild sanctions posture for 2026 non-implementation. If enforcement stays soft through 2027, urgency — and therefore willingness to pay — softens with it.
3. **Platform dependency:** Total reliance on the KSeF API. Outages, schema changes, and permission-model changes are all outside our control and all break the product.
4. **Single-country concentration:** All revenue in one regulatory regime, in PLN. The $5M story requires a second market that doesn't exist yet on our terms.
5. **Trust threshold in compliance tooling:** Accountants are conservative buyers. One publicized false-negative — a tool that said "clean" on a period that got a penalty notice — is an existential reputational event in a market this tight-knit. Conservative defaults and clear "we checked X, we did not check Y" scoping are a product requirement, not a nicety.

## 14. Structured verdict

```
Score:                  75/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Polish technical founder + accountant co-founder or paid advisor
Time to revenue:        6–10 weeks post-launch
Capital to launch:      PLN 45,000–75,000 ($12–20K)
Top 3 assumptions to validate first:
  1. Manual reconciliation of 15 offices' closed periods finds nonzero exceptions in most — spreadsheets, before any code
  2. Offices will grant third-party KSeF API permissions — ask directly in 30 sales conversations
  3. Offices treat this as a separate purchase, not an expected suite feature — price-test 249/449 zł against 20 offices
Kill criteria:
  - Abandon if <40% of 15 manually reconciled offices show exceptions worth acting on
  - Abandon if >50% of the first 30 offices refuse to grant KSeF API permissions
  - Abandon if SaldeoSMART or Comarch ships portfolio-level two-sided reconciliation before our v1
  - Abandon if the Ministry defers the 500-zł-per-error mechanic beyond 2027
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Build the target list from the COIG registry — filter to offices with 3–25 staff. Send 200 personalized Polish-language emails offering a free reconciliation of one client entity for one closed VAT period. Simultaneously, recruit a paid accountant advisor for the week.
- **Day 3–4:** Run reconciliations manually — spreadsheets and the KSeF web interface, zero product code. For each office that says yes, produce a one-page exception list with zł exposure estimated conservatively and reviewed by the advisor. Record two numbers per office: exception count, and whether they'd grant API permissions.
- **Day 5:** Present findings to every participating office and ask for a paid pilot at 449 zł/mo. Also ask the killer question directly: *"would you expect your accounting software to do this for free?"*

**Go/no-go:** Proceed only if ≥15 offices accepted a free audit, **and** ≥40% of completed audits surfaced exceptions the office agreed were worth acting on, **and** ≥3 offices committed to a paid pilot. Anything less and the pain is real but not purchasable as a standalone product — in which case the honest pivot is selling the engine to a suite vendor, not grinding on direct sales.
