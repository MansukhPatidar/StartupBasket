---
title: "DowodVault — proof vault for Poland's KSeF B2B sellers"
slug: poland-ksef-document-evidence
date: 2026-06-25
category: Compliance / Poland B2B SMEs (KSeF-mandated, 2M–50M PLN turnover)
complexity: Medium
score: 73
verdict: GO
confidence: Medium
oneLiner: "Binds every contract, delivery note and PO to its KSeF invoice for one-click proof of any disputed sale."
tags:
  vertical: Compliance
  model: SaaS
  geography: EU
  secondary: [Poland, Compliance-driven, SMB, Document-AI, KSeF, Solo-builder]
axes:
  problem: 15
  demand: 12
  build: 11
  distribution: 11
  revenue: 11
  time: 8
  defensibility: 5
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# DowodVault — supporting-document vault for Poland's KSeF B2B sellers

## 1. One-liner

Binds every contract, delivery note and PO to its KSeF invoice so a disputed sale produces its full proof in one click.

## 2. Trend signal — why now?

Poland switched on the **Krajowy System e-Faktur (KSeF)** for B2B as a hard mandate: large taxpayers from **1 February 2026**, and **every other VAT-registered business from 1 April 2026** (micro-entrepreneurs follow 1 Jan 2027). The whole Polish B2B economy is now issuing structured XML invoices through a government clearing system.

Here's the part nobody productized: **KSeF holds the invoice and refuses to hold the documents that prove it.** The official guidance and every Big-4-adjacent advisory says the same thing — contracts, delivery notes (WZ), acceptance protocols, transport documents and annexes "**trzeba będzie wysyłać poza KSeF**" (must be sent outside KSeF) and remain the taxpayer's own archival responsibility. The FA(3) "Załącznik" attachment node that launched 1 Feb 2026 is deliberately narrow: it requires **advance notification to the tax office**, only works through commercial API tools (not the free Ministry tool), and **explicitly excludes** "marketing, commercial or contractual documents (price lists, contracts, guarantees…)." So the supporting paper trail is structurally orphaned — and advisors are openly telling firms to "build your own digital archive" for exactly these excluded documents.

KSeF stores the invoice for 10 years automatically. It stores **none** of the evidence you'd need the day a buyer short-pays and says "we never received those goods" or an auditor asks you to substantiate the transaction. That bundle lives in email, a paper binder, and a shared drive — scattered the moment you most need it together.

Provenance:
  - Signal 1 (demand): KSeF does not accept contracts/WZ/protocols/transport docs — they must be archived and exchanged outside the system; advisors recommend building a separate digital archive — https://www.ingksiegowosc.pl/news/krajowy-system-e-faktur/faktury-elektroniczne-a-archiwizacja-ksef , https://symfonia.pl/blog/prawo/ksef/zalaczniki-do-faktur-a-ksef-co-sie-zmienia/ — Jan–Feb 2026
  - Signal 2 (feasibility): KSeF 2.0 API live Feb 2026 issues each invoice a unique KSeF number; FA(3) attachment node restricted, requires advance e-Tax notification, excludes contractual docs — a 3rd-party tool can fetch invoices by KSeF number and bind external docs to them — https://crido.pl/en/blog-taxes/ksef-from-2026-what-you-need-to-know-about-attachments-to-e-invoices/ , https://www.vatupdate.com/2026/01/16/notification-now-required-for-invoices-with-attachments-in-ksef-2-0/ — Jan 2026
  - Signal 3 (economic): Mandatory for every VAT-registered B2B business from 1 Apr 2026; entire Polish SME sector migrating; large compliance-software spend already flowing to Comarch/Symfonia/EDICOM — https://edicomgroup.com/blog/poland-will-make-b2b-electronic-invoicing-mandatory — 2026
  Category: Regulatory arbitrage

## 3. The opportunity

The KSeF compliance market is a gold rush — Comarch, Symfonia, Base, EDICOM, ifirma and a dozen others are all selling "issue and receive your e-invoices correctly." That fight is over and crowded.

**The orphaned layer is the supporting documents.** Every accounting/ERP vendor is racing to make the *invoice* compliant. None of them owns the workflow of capturing the **contract, PO, delivery note (WZ) and acceptance protocol** and **binding each one to the matching KSeF invoice number**, so that on demand — a payment dispute, a chargeback, a VAT/CIT audit, a debt-collection case — the seller produces the complete, dated, immutable evidence bundle for that single transaction in one click.

The incumbents do invoicing. DowodVault does **proof**. It sits next to whatever invoicing tool the firm already uses (read-only KSeF API access by KSeF number), so it's not a rip-and-replace and not competing for the invoicing seat. It's the missing evidence cabinet the mandate created on the day it launched.

## 4. Target market

- **Primary customer:** Polish B2B sellers, **2M–50M PLN annual turnover**, that ship physical goods or deliver contracted work where a single invoice rests on a delivery note + PO + contract: building-materials and industrial wholesalers, manufacturing subcontractors, equipment-service firms, transport/logistics SMEs, B2B distributors. Owner/CFO/head-of-finance is the buyer; the external biuro rachunkowe (accounting office) is the influencer and channel.
- **Why they buy (in their words):** "KSeF holds my faktura but not the WZ or the umowa — and when a klient disputes the delivery, that's exactly what I have to dig out of email." Losing a single disputed B2B invoice in this segment is 5,000–50,000 PLN; one prevented loss pays for years of subscription.
- **Rough TAM reasoning:** From 1 Apr 2026 **every VAT-registered B2B business in Poland** is in KSeF — well over 2 million entities, of which a few hundred thousand are goods/project sellers in the target turnover band who genuinely carry supporting-document risk. Capture even 5,000–10,000 of them and this is a 1M–5M PLN/yr (≈$250K–$1.2M ARR) business; the segment is far larger.
- **Why now for them:** The mandate forces them to rewire how invoices flow *this quarter*. Their supporting documents just got separated from their invoices by law, and they feel the gap on the first disputed transaction after 1 April.

## 5. Product sketch (MVP)

- **KSeF sync (read-only):** Connect via KSeF API; pull issued and received invoices with their KSeF numbers, buyer NIP, amounts and line items into a searchable register.
- **Drop-the-proof capture:** Forward an email, upload a scan, or snap a phone photo of a WZ / PO / contract / acceptance protocol; the document lands in an inbox waiting to be matched.
- **Auto-match:** AI reads each supporting document (OCR + LLM), extracts counterparty NIP, dates, amounts and order/delivery numbers, and proposes the KSeF invoice it belongs to. One-click confirm or correct.
- **Evidence bundle, one click:** For any invoice, generate a dated PDF dossier — KSeF invoice + every bound supporting document — ready to send to a disputing buyer, a debt-collection lawyer, or an auditor.
- **Gap radar:** Flags invoices over a threshold that have **no** bound delivery note or contract — i.e., invoices you couldn't defend if challenged today.
- **Immutable, timestamped archive:** WORM-style storage with a tamper-evident log, retained for the statutory period (KSeF excludes these docs from its own 10-year retention).
- **Accountant view:** Read access for the firm's biuro rachunkowe so they can pull the bundle during audits without phoning the client.

## 6. AI angle — what's load-bearing

The product is worthless without reliable **document-to-invoice matching**. A delivery note rarely cites an invoice number — it cites an order number, a date, a counterparty and a list of goods. Matching it to the right KSeF invoice means reading messy scanned WZ/PO/contract documents (Polish, varied layouts, handwriting on delivery confirmations) and reconciling extracted entities (NIP, dates, amounts, quantities) against the structured invoice data. That's exactly the OCR+LLM extraction-and-reconciliation task that only became cheap and accurate enough in the last 18 months. Remove the AI and you're back to a human manually tagging every document to every invoice — which is the status quo nobody does, which is *why the evidence is always scattered.* AI is the entire reason this is a 2-minute job instead of a 2-hour one.

## 7. Localization angle

This is a **Poland-native** play and that's the whole moat-by-focus. The product is defined by KSeF's specific rules: the KSeF number as the binding key, the FA(3) attachment exclusions, Polish document types (WZ, faktura, protokół odbioru), Polish-language OCR, NIP validation, and the statutory retention/przedawnienie periods. The buyer expects a Polish UI, PLN pricing (a 99–249 PLN/mo tier where a generic $99 tool feels alien), and integration into the biuro-rachunkowe relationship that runs Polish SME finance. A generic global "document management" tool cannot wedge here because it doesn't speak KSeF. This is regulatory arbitrage where the regulation *is* the product spec.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** 99 PLN/mo Solo (1 user, <500 invoices/mo), **199 PLN/mo Standard** (multi-user, accountant access, gap radar), 399 PLN/mo Pro (high volume + API + bulk export). ~$25–$100/mo equivalents.
- **ACV:** ~2,400 PLN (~$600) blended.
- **Rough math to $1M ARR (~4M PLN):** ~1,650 customers × 199 PLN × 12 ≈ 3.9M PLN. Out of a 2M+ business mandate pool, that's a <0.1% capture rate.
- **Rough math to $5M ARR (~20M PLN):** ~8,000 customers at blended ACV, or fewer with an upsell to a per-bundle e-signature / debt-pack add-on and a white-label tier sold *through* accounting offices to their whole client books.
- **Expansion path:** seats (more finance staff), volume tiers, an outbound "dispute pack" generator (priced per pack), and the biuro-rachunkowe white-label channel where one firm onboards 50–200 clients at once.

## 9. Go-to-market wedge — first 100 customers

- **Biuro rachunkowe channel (primary):** There are tens of thousands of accounting offices in Poland, each managing dozens-to-hundreds of B2B clients and each currently being *asked by those clients* how to handle KSeF supporting docs. Sign 15–20 offices on a revenue-share/white-label deal; each brings 20–100 clients. This is the fastest path to 100 paying seats and the cheapest CAC.
- **Targeted outbound to goods sellers:** Pull B2B wholesalers/distributors/manufacturers in the 2M–50M PLN band from the Polish business registry (KRS/REGON) filtered by PKD codes for wholesale/manufacturing; send a Polish cold email + 90-second Loom: "KSeF nie przechowuje Twoich WZ i umów. Pokażemy, jak wiązać je z fakturą." Expect 2–4% reply in a freshly-painful, mandate-driven market.
- **KSeF content + accountant communities:** Polish accounting/SME Facebook groups, GoldenLine/LinkedIn KSeF threads, and r/Polska / branżowe forums are full of "co z załącznikami do KSeF?" questions right now. Answer them with a concrete how-to and the tool, where the audience is already actively searching.
- **Partner with one mid-tier KSeF invoicing vendor** that does invoices but not document binding — integrate as their "evidence" add-on rather than compete.

## 10. Build complexity — justification

**Medium.** Off-the-shelf: KSeF API integration (documented, REST/XML), OCR + LLM document extraction, WORM object storage, standard web stack. The custom work is the **matching engine** — reliably binding a scanned WZ/PO/contract to the correct KSeF invoice across Polish layouts and fuzzy fields — plus the audit-grade immutability/retention guarantees. A pair could ship a credible v1 in **3–4 months**: KSeF sync + manual binding first, then layer auto-match. The matching accuracy is the technical risk, not the plumbing.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Read-only KSeF API; storing one's own business documents is standard and required. |
| Ethical — no harm / dark patterns | ✅ | Helps SMEs defend legitimate transactions; no manipulation. |
| Market exists (evidence above) | ✅ | 2M+ businesses mandated; supporting-doc exclusion documented by official + advisory sources. |
| 1–5 person team can build this | ✅ | Pair can ship v1 in 3–4 months. |
| Launchable with <$50K / ₹40L | ✅ | API + cloud + LLM inference; minimal capex. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 15/20 | Real, recurring, money-on-the-line on every dispute/audit — but felt sharply only *when* a dispute hits, not daily. Below hair-on-fire. |
| Demand evidence | 15 | 12/15 | Mandate is hard fact; exclusion of supporting docs documented by official + multiple advisory sources; incumbent compliance spend proves wallet. Direct "I'd pay for the binding tool" customer quotes still thin. |
| Build feasibility | 15 | 11/15 | Plumbing is off-the-shelf; matching engine + audit-grade retention is the real work. 3–4 months for a pair. |
| Distribution clarity | 15 | 11/15 | Biuro-rachunkowe channel is concrete and high-leverage; registry-filtered outbound is concrete. Channel conversion unproven. |
| Revenue mechanics | 15 | 11/15 | Pricing benchmarked against KSeF tooling (23–500 PLN/mo); $1M ARR needs <0.1% of pool. PLN price ceiling caps ACV. |
| Time to first revenue | 10 | 8/10 | Mandate just hit; pain is acute now; an accountant-office pilot can pay within weeks of a usable v1. |
| Defensibility | 10 | 5/10 | Moat is focus + accountant-channel lock-in + accumulating bound-document data per client. A KSeF incumbent could bolt this on — but they're busy with invoicing. Copyable in ~6–12 months. |
| **Total** | **100** | **73/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` (KSeF API + matching engine) · `domain-expertise-required` (Polish KSeF rules, document types, retention law; ideally a Polish founder or one paired with a Polish accountant advisor).

### Key assumptions to validate (3–5)

1. **Assumption:** Goods/project sellers in the 2M–50M PLN band feel real pain that supporting docs are orphaned from KSeF invoices. **How to test:** 25 interviews via 3–4 accounting offices; ask how they'd produce a delivery note + invoice for a disputed sale today and how long it takes.
2. **Assumption:** Biuro rachunkowe offices will resell/recommend a per-client tool (revenue share). **How to test:** pitch 10 offices a white-label deal; target ≥3 signed pilots.
3. **Assumption:** Auto-match accuracy on real Polish WZ/PO/contract scans is high enough to be trusted (>90% correct binding). **How to test:** collect 200 real document/invoice pairs, measure match precision before building the full UI.
4. **Assumption:** PLN 199/mo is acceptable. **How to test:** price-test against framing "cost of one lost disputed invoice."

### Risk flags

1. **Platform dependency:** Entirely tied to KSeF API stability and rules; the FA(3)/attachment regime could evolve (or the Ministry could later store supporting docs itself, collapsing the gap). Monitor MF announcements.
2. **Incumbent encroachment:** Comarch/Symfonia/ifirma could add document-binding as a feature; mitigate with accountant-channel lock-in and speed.
3. **Market timing:** Pain is acute *now* through 2026–27 onboarding; if not in-market by the 1 Apr 2026 wave + the 2027 micro wave, the wedge cools as firms settle into makeshift workarounds.
4. **Demand-evidence gap:** Strong structural logic, thinner direct "shut up and take my money" signal — the reason this is a 73/GO, not an 80.

## 14. Structured verdict

```
Score:                  73/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Polish technical founder (or pair) with a biuro-rachunkowe / KSeF advisor
Time to revenue:        6–10 weeks after a usable v1 (accountant-office pilot)
Capital to launch:      ₹4–8 lakh ($5–10K) — API, cloud, LLM inference, registry data
Top 3 assumptions to validate first:
  1. Sellers feel the orphaned-document pain enough to pay — 25 interviews via 3 accounting offices
  2. Biuro rachunkowe offices will resell white-label — pitch 10, target ≥3 pilots
  3. Auto-match precision >90% on real Polish WZ/PO/contract scans — 200-pair test before full build
Kill criteria:
  - Abandon if <3 of 10 pitched accounting offices want to resell after the demo
  - Abandon if auto-match precision stays below 80% on real documents after 8 weeks of tuning
  - Abandon if a major KSeF incumbent ships invoice-bound supporting-document storage before your v1
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Recruit 3 accounting offices and 10 B2B goods sellers in the target band. Land a Polish demo page: "KSeF nie przechowuje Twoich WZ, umów i protokołów — DowodVault wiąże je z fakturą." Capture email sign-ups.
- **Day 3–4:** Run 15–20 interviews. Walk each through reconstructing a disputed sale's evidence today; time it. Ask the accounting offices directly: would you resell this to your clients, and at what share?
- **Day 5:** Decide go / no-go. **Go** only if ≥40% of interviewed sellers say they'd pay ≥199 PLN/mo *and* ≥3 of the accounting offices commit to a reseller pilot. Anything less and the structural gap is real but the willingness-to-pay isn't proven — drop to VALIDATE and re-test pricing.

The result is falsifiable: a named count of paying intents and signed accountant pilots, not "people liked the idea."
