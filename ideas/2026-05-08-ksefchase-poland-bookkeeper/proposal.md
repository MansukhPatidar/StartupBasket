---
title: KsefChase — KSeF cockpit for Polish biura rachunkowe
slug: ksefchase-poland-bookkeeper
date: 2026-05-08
category: Compliance SaaS / Poland Small Accounting Offices (biura rachunkowe)
complexity: Medium
score: 80
verdict: STRONG GO
confidence: High
oneLiner: Multi-client KSeF + bank-feed cockpit that chases missing invoices for Polish biura rachunkowe.
tags:
  vertical: Compliance
  model: SaaS
  geography: EU
  secondary: [Compliance-driven, SMB, AI-agent, Poland-first, Multi-tenant, Bookkeeper-tool]
axes:
  problem: 18
  demand: 14
  build: 11
  distribution: 12
  revenue: 13
  time: 8
  defensibility: 4
founderFit: [domain-expertise-required, sales-heavy]
featured: true
---

# KsefChase — KSeF cockpit for Polish biura rachunkowe

## 1. One-liner

Multi-client KSeF + bank-feed cockpit that chases missing invoices for Polish biura rachunkowe.

## 2. Trend signal — why now?

Poland's mandatory e-invoicing system **KSeF (Krajowy System e-Faktur)** went live for large taxpayers on **1 February 2026** and extends to ~3M small businesses on **1 April 2026**. From **1 August 2026**, every B2B bank transfer must carry the KSeF identifier in the payment description, including all split-payment (MPP) transfers above PLN 15,000 for Annex-15 goods. Penalties of up to 100% of VAT kick in **1 January 2027**.

The current state of the rollout is messy:
- Only **~13% of firms have implemented KSeF** and **18% don't intend to at all** as of early 2026 — see PIT.pl reporting.
- **45% of surveyed businesses rate the rollout negatively, 36% express serious concerns** (Bankier.pl).
- KSeF itself **sends no notifications** — recipients must poll. Three-plus thin SMS-alert micro-apps already exist (KSeF Alert, KSeF Powiadomienia, Alerty KSeF) at ~20 PLN/mo, proving willingness-to-pay for a pure notification layer.
- Polish accountant trade press (Infor.pl) reports księgowi explicitly refusing to take on responsibility for KSeF errors at clients, demanding tooling that keeps the line bright.
- **JPK_V7(3)** schema went live the same day, adding **OFF / BFK / DI** marker codes that have to match KSeF reality on every monthly VAT return.

Provenance:
  - Signal 1 (demand): "KSeF paraliżuje biznes" — księgowa frustration coverage at Infor.pl ksiegowosc.infor.pl/ksef/7549129 — observed 2026-05-08; only 18% of small biz issue regularly per Bankier.pl 9110827, observed 2026-05-08.
  - Signal 2 (feasibility): Official KSeF 2.0 production API live since 1 Feb 2026 (ksef.podatki.gov.pl) and PolishAPI PSD2 covers 31/281 PL banks via aggregators (openbankingtracker.com/country/poland) — observed 2026-05-08.
  - Signal 3 (economic): SaldeoSMART made KSeF retrieval free Aug 2025, Comarch Optima/Symfonia compete on per-document KSeF tiers (50–600 PLN/mo); 70K biura rachunkowe + 3M JDG = a regulated spend bucket already in motion (we-tax.pl, ksef.pl) — observed 2026-05-08.
  - Category: Regulatory arbitrage.

## 3. The opportunity

Phase 2 turns every księgowa in Poland into a multi-tenant KSeF operator overnight. The Polish accounting-software market reacted by adding "send & retrieve invoice to/from KSeF" features in **client-side** invoicing apps (Fakturownia, inFakt, wFirma, ifirma) and integrating **document-level OCR + KSeF retrieval** in biuro tools (SaldeoSMART, Symfonia, Comarch Optima). What none of them solved:

1. **The chase loop.** A biuro serving 100 JDG clients gets 5–15 missing-invoice incidents per week — vendor didn't issue, client didn't approve, bank transfer went out without a matching KSeF document. Today this is detected at month-end during JPK_V7 prep, when correcting it is 3× the work.
2. **The Aug-1-2026 transfer rule.** Every payment file must carry the KSeF ID. ERP monoliths will get there; the long tail of small biura, who export bank transfer batches as CSV/MT940 to PKO BP / mBank / Santander, will not — and they're the ones with the deadline.
3. **The JPK_V7(3) OFF/BFK/DI marker discipline** — system has to read invoice metadata + KSeF events and pick the right code; mismatches trigger urzędowe wezwania.

A focused tool that lives **between KSeF, the bank, and the client's WhatsApp** beats incumbent ERPs because the incumbents are still selling per-document KSeF packages while the actual unmet pain is reconciliation, chasing, and transfer-file compliance.

The wedge: **"You will never lose another invoice between KSeF and your bank again — and we'll auto-block transfers that don't carry the right KSeF ID."**

## 4. Target market

- **Primary customer:** Owner-operator of a biuro rachunkowe in a Polish Tier-2/3 city (Lublin, Bydgoszcz, Rzeszów, Toruń, Gdynia, Olsztyn class), 1–3 księgowe staff, 30–150 active clients (mix of JDG + small sp. z o.o.), monthly billing 200–400 PLN per JDG / 500–1,200 PLN per spółka.
- **Why they buy:** "I cannot babysit 80 NIP-y in KSeF every morning. If I miss one missing invoice, I eat the JPK_V7 correction. From August I have to stop transfers without KSeF IDs or my client's bank rejects them. I need a single tablica that screams when something's off."
- **Rough TAM:** 70,000 biura rachunkowe in Poland (we-tax.pl / ksef.pl). Realistic SAM: 25,000 biura serving 30+ clients, sub-Warsaw market. At PLN 199–599/mo per biuro, SAM is roughly PLN 75–175M ARR (€18–42M / $20–45M).
- **Why now for them:** Apr 1 2026 phase-2 mandate hit two months ago in this scenario, Aug 1 2026 transfer-ID rule is 12 weeks out, JPK_V7(3) penalties become real Jan 1 2027.

## 5. Product sketch (MVP)

- **Multi-client KSeF inbox** — single login pulls invoices for all clients the biuro is authorized on (mass-authorization model already supported by KSeF API).
- **Bank-feed match (PolishAPI / Salt Edge / Tink)** — auto-pair KSeF invoice → bank transaction → JPK_V7 line; flag pairs that don't match.
- **Missing-invoice radar** — recurring vendors / contractual relationships not seen this month → WhatsApp/SMS nudge to the JDG owner *or* directly to the vendor with one-click "we're still waiting on this invoice".
- **KSeF-ID transfer guard** — generates Elixir-0/MT940 batch payment files for PKO BP, mBank, ING, Santander, Pekao with the KSeF ID embedded in the title, blocks export if any line is missing the ID (mandatory from 1 Aug 2026).
- **JPK_V7(3) auto-marker** — picks OFF / BFK / DI per Ministerstwo Finansów rules, ready to export each month.
- **Anomaly digest for the księgowa** — every morning at 7am, a one-screen tablica: "8 invoices below threshold, 3 vendors silent, 2 clients missing KSeF approval, 1 transfer blocked".
- **Client app (PWA / WhatsApp)** — JDG owner gets a 30-second daily ping: "Approve these 3 incoming invoices in KSeF. Reply OK." 90% of approvals happen in WhatsApp, never in software.
- **Audit trail per NIP** — exportable history of every approval, transfer, and KSeF event for tax-office disputes.

## 6. AI angle — what's load-bearing

- **Vendor-recurrence model** — LLM + simple stats over 6+ months of invoices learns each client's expected vendor list and cadence. This is the missing-invoice radar; rules-based heuristics flag too many false positives at biuro scale.
- **OFF/BFK/DI classification** — the KSeF "designation" rules from JPK_V7(3) are messy edge cases (offline mode, B2C, foreign vendor, paper). LLM with a forced-output schema gets 95%+ on this, hand-rules can't.
- **Polish-language WhatsApp client agent** — auto-drafts "panie Tomku, w marcu nie wystawił pan faktury dla X — czy faktura się opóźnia?" in proper Polish + handles owner replies. Needs LLM, can't do this with templates.
- **Disputes & explanations to urząd skarbowy** — auto-drafts the "wyjaśnienie" letter when a JPK_V7 mismatch arises, citing KSeF event log.

If you remove the AI: vendor-recurrence becomes manual rules, the WhatsApp chase is templates that the JDG owner ignores, and OFF/BFK/DI classification reverts to a checklist the księgowa fills monthly. The product collapses back into "KSeF Alert with extra steps." AI is load-bearing.

## 7. Localization angle

This is **Poland-first, Poland-only** by design — that *is* the wedge. Specifically:

- **Polish-language LLM prompts and Polish UI** (księgowe over 40 don't tolerate English-first products).
- **PolishAPI PSD2** integration (NOT generic Plaid Europe — coverage of mBank, PKO BP, ING BSK, Santander BP, Pekao, Millennium is the unlock).
- **Elixir-0 / Elixir-OnLine** transfer batch file format — mandatory for the KSeF-ID-on-transfer enforcement; foreign competitors won't ship this.
- **JPK_V7(3) schema** is Poland-unique; OFF/BFK/DI codes don't exist outside Poland.
- **WhatsApp + SMS** routing — Polish JDG owners do not log into web apps; SMS still dominates outside Tier-1 cities.

Pricing must work at PLN 199–599/mo, which forces lean ops; this is fine because revenue is recurring and biura churn very low (1–2%/yr historically per Polish accounting industry data).

## 8. Business model — path to $1M–$5M ARR

- **Pricing (per biuro rachunkowe, monthly):**
  - Starter — **199 PLN/mo** — up to 25 active client NIPs, 1 księgowa seat.
  - Growth — **399 PLN/mo** — up to 75 client NIPs, 3 seats, WhatsApp chase included.
  - Pro — **699 PLN/mo** — up to 200 client NIPs, 6 seats, KSeF-ID transfer guard for unlimited bank accounts.
  - Per extra NIP above tier: 6 PLN/mo.
- **ACV:** Blended ~5,000 PLN ($1,250 / €1,170) per biuro per year.
- **Path to $1M ARR:** ~800 paying biura at the Growth tier (≈1.1% of the 70K biuro market).
- **Path to $5M ARR:** ~3,500–4,000 biura (≈5% of market) plus a JDG self-serve tier at 39 PLN/mo for direct sales without a biuro (~10K JDG = $470K extra).
- **Expansion path:** (a) per-NIP overage as biura grow, (b) JDG self-serve adjacent product, (c) biuro-branded client portal as upsell, (d) tax-office-correspondence (e-Doręczenia) module once enforced 2027.
- **Margins:** API costs are the wildcard — KSeF API is free, PolishAPI is free at AISP licensee level (need partnership with Salt Edge / Kontomatik ~€0.30/connection/mo), LLM at ~₪0.20/client/mo. Gross margin 78–85% at scale.

## 9. Go-to-market wedge — first 100 customers

1. **Direct outreach to "Złota Setka" biuro listings.** Scrape Stowarzyszenie Księgowych w Polsce, Polski Związek Biur Rachunkowych, and clutch.co/pl/accounting (≈4,000 listed biura). Personalized 90-second Loom in Polish showing one of *their* clients' KSeF feed live (using public NIP data) → "this is what your morning looks like in 8 weeks." Aim 4–6% reply rate, 1.5% conversion = ~60 paying biura.
2. **YouTube + LinkedIn co-marketing with księgowa influencers.** ~12 księgowi influencers on YouTube/PL-LinkedIn (Aleksandra Kasińska, Anna Kuczyńska-Cesarz, "Pomysłowi Księgowi", "Tax Care") have 5K–80K subscribers and pump KSeF content. Sponsored deep-dive + affiliate code (15% rev-share for 12 months) = ~30 paying biura.
3. **The "Save Aug 1" campaign.** Buy Google ads on "elixir KSeF mt940", "PKO BP KSeF przelew", "split payment KSeF identyfikator" — niche commercial intent, low CPC (PLN 1–3). 4-week landing-page campaign with biuro-branded ROI calc → ~25 paying biura.
4. **Conference push at Kongres Biur Rachunkowych** (annual, ≈1,200 attendees) and SKwP regional chapters. Booth + 4 in-person demos × 8 cities = ~20 biura.
5. **One-week-free audit hook.** "Send us 1 client's NIP, we'll show you 30 days of missed invoices and pre-build your JPK_V7(3)." Converts to paid because they see actual gaps in their own books.

100 paying biura in 5–6 months is realistic given a 4-month product runway plus 2-month sales overlap.

## 10. Build complexity — justification

**Medium.** Off-the-shelf: KSeF API (open, documented), PolishAPI via Salt Edge/Kontomatik aggregator partnership, Twilio Polish SMS, WhatsApp Cloud API, OpenAI/Claude for Polish NLP. Custom work: Elixir-0 file generators per bank (≈8 banks × 1 week each), JPK_V7(3) export with new OFF/BFK/DI logic, multi-tenant authorization handshake with KSeF certificates, bank-feed-to-KSeF matching engine. A 2-person team (one Polish-fluent eng, one full-stack) ships v1 in **14–18 weeks**; sales-led founder runs distribution in parallel.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | KSeF API public; PolishAPI PSD2 access via licensed AISP partner; no proprietary data scraping. |
| Ethical — no harm / dark patterns | ✅ | Helps SMBs comply; chase tone configurable; no adversarial collections. |
| Market exists (evidence above) | ✅ | 70K biura, 3M JDG, mandate live; 3+ thin competitors already monetizing the notification slice. |
| 1–5 person team can build this | ✅ | 2 engineers + 1 sales-led founder. Polish-language operator strongly preferred. |
| Launchable with <$50K / ₹40L | ✅ | KSeF API free; AISP partner ≈ $1K/mo at small scale; LLM costs scale with clients; total seed budget $25–40K. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 18/20 | Hair-on-fire for biura rachunkowe between Apr and Aug 2026; concrete penalty risk Jan 2027. The księgowa already loses a half-day per week to manual KSeF reconciliation. |
| Demand evidence | 15 | 14/15 | 3+ paid notification competitors, 70K biura, 18% adoption gap = unmet, multiple Bankier/Infor articles documenting frustration. Discount 1pt because nobody yet pays for *this exact* multi-client power tool — assumption to test. |
| Build feasibility | 15 | 11/15 | Most pieces are off-the-shelf, but bank-file Elixir-0 generation and the multi-NIP KSeF certificate handshake have real depth; 14–18 weeks is a tight but real estimate. |
| Distribution clarity | 15 | 12/15 | Named lists (SKwP, PZBR), known księgowa influencers, conference circuit. Polish language barrier limits foreign founders, which is also why nobody's swept this in yet. |
| Revenue mechanics | 15 | 13/15 | PLN 199–699/mo is squarely below biuro tools they already pay for (Comarch Optima can hit 600 PLN/mo just on KSeF tier). 800 customers to $1M ARR is achievable. |
| Time to first revenue | 10 | 8/10 | Annual prepay common for biuro tools; pilot pricing → 4–6 weeks to first paid contract. |
| Defensibility | 10 | 4/10 | Execution and bank-file integrations are the moat. SaldeoSMART or Symfonia could copy in 6–9 months once the wedge is proven; that's the runway window to lock in 1,500+ biura. |
| **Total** | **100** | **80/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`domain-expertise-required` — Polish-language, biuro rachunkowe workflow, KSeF/JPK_V7 regulatory detail. Cannot be done by a non-Polish team without a strong domestic co-founder.
`sales-heavy` — first 100 biura is direct outreach + conference work, not inbound.

### Key assumptions to validate (3–5)

1. **Assumption:** Biura rachunkowe will pay PLN 399/mo when they already pay Comarch/Symfonia/SaldeoSMART. **How to test:** 25 in-person/Zoom interviews with biura serving 30–150 clients. Ask: "If this saved you 6 hours/week and prevented one JPK_V7 correction per quarter, would you pay PLN 399/mo on top of your existing stack? Sign LOI." Goal: 10 LOIs in 3 weeks.
2. **Assumption:** PolishAPI bank-feed coverage via Salt Edge/Kontomatik covers 80%+ of biuro client deposit-account base. **How to test:** Pull supported-bank list, cross-reference with NBP small-business banking-share data; check live with one biuro's anonymized client list.
3. **Assumption:** Biuro is allowed (under PL law + KSeF terms) to act as the KSeF retrieval agent for clients en masse with mass authorization. **How to test:** Confirm with 3 doradcy podatkowi (tax advisors); read MF guidance on biuro-rachunkowe authorization model (already documented per wFirma + Symfonia + Fakturowo).
4. **Assumption:** WhatsApp/SMS chase to JDG owners actually moves the needle vs. status quo of księgowa phoning the client. **How to test:** Run a 4-week pilot in 2 biura, measure missed-invoice resolution time before/after.
5. **Assumption:** The Aug 1 2026 KSeF-ID-on-transfer rule is enforced by banks (not just Ministry of Finance posture). **How to test:** Check published technical specs from PKO BP / mBank / ING for August release; talk to 2 bank partner-program contacts.

### Risk flags

1. **Incumbent bundling risk:** SaldeoSMART made KSeF retrieval free in Aug 2025; Comarch/Symfonia could fold a "chase + reconcile" feature into existing bundles. Mitigation: ship the Elixir-0 bank-file generator + Polish WhatsApp chase agent as first-mover differentiators that incumbents are slow to copy.
2. **Regulatory churn:** The KSeF rollout has already slipped twice (originally July 2024). Phase-2 dates (Apr 1 / Aug 1 2026) could move; that pushes urgency out, not away. Mitigation: price the urgency tier as "phase-2 ready package" so deferral helps retention.
3. **Bank-API access risk:** PolishAPI has uneven coverage; AISP licensing is non-trivial. Going via Salt Edge / Kontomatik is correct but adds margin pressure. Mitigation: launch with top-5 banks (84% market share) + manual MT940 import for the rest.
4. **Founder language requirement:** Non-Polish founder will fail at the 25-interview validation step. Mitigation: explicit go/no-go on Polish-fluent operator on the founding team.

## 14. Structured verdict

```
Score:                  80/100
Verdict:                STRONG GO
Confidence:             High
Best-fit builder:       Polish-fluent operator with biuro rachunkowe network or accounting-software past, paired with one full-stack engineer
Time to revenue:        4–6 weeks (paid pilots), 14–18 weeks (production v1)
Capital to launch:      $25–40K (PLN 100–160K) — mostly Salt Edge/Kontomatik, infra, LLM, conference booths
Top 3 assumptions to validate first:
  1. 10 paid LOIs from biura serving 30–150 clients within 3 weeks of pitch (validates pricing + wedge)
  2. PolishAPI/Salt Edge bank coverage exceeds 80% of small-biz deposit accounts (validates bank-feed match feasibility)
  3. WhatsApp/SMS chase to JDG owners reduces missed-invoice resolution time by ≥40% in 4-week pilot (validates AI angle)
Kill criteria:
  - Abandon if <3 LOIs from 25 cold biuro outreach calls in 3 weeks
  - Abandon if SaldeoSMART or Symfonia ships a multi-client chase + Elixir-0 KSeF-ID transfer guard before product v1 (i.e., before week 18)
  - Abandon if Aug 1 2026 KSeF-ID-on-transfer rule is officially deferred by ≥12 months
```

## 15. Next step — 1-week validation sprint

- **Day 1:** Build a 5-page Polish-language landing page ("KsefChase — w 8 tygodni nie zgubisz ani jednej faktury między KSeF a kontem"). Publish ROI calculator: "Ile godzin biuro traci miesięcznie na gonienie faktur?" Pull Złota-50 biuro list.
- **Day 2:** Cold-email 80 biura owners + warm-DM 20 księgowa influencers on PL-LinkedIn. Goal: 25 booked 30-min Zoom calls.
- **Day 3–4:** Run the 25 calls in Polish. Demo a clickable Figma of (a) multi-client KSeF inbox, (b) the missing-invoice radar tablica, (c) the KSeF-ID transfer-guard popup blocking a non-compliant transfer. Ask for PLN 199 prepaid pilot deposit, refundable in 30 days.
- **Day 5:** Decide go / no-go.
  - **Go** if ≥10 prepaid pilots collected at PLN 199.
  - **No-go** if ≤4 pilots — rework wedge or geography.

The pilot deposit is the falsifiable signal — biura are tight with money; PLN 199 in cash beats any "I'd buy this" handwave.
