---
title: "TareTally — EPR packaging-declaration engine for EU sellers"
slug: eu-epr-packaging-declaration
date: 2026-06-27
category: Compliance / EU Cross-Border E-Commerce Sellers (non-resident FBA & Shopify, 50–2,000 SKUs)
complexity: Medium
score: 74
verdict: GO
confidence: Medium
oneLiner: "Calculates packaging weight per material per EU country and hands sellers a ready-to-file EPR declaration packet."
tags:
  vertical: Compliance
  model: SaaS
  geography: EU
  secondary: [Compliance-driven, AI-agent, SMB, Cross-border, Marketplace-seller]
axes:
  problem: 16
  demand: 12
  build: 11
  distribution: 11
  revenue: 11
  time: 7
  defensibility: 6
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# TareTally — EPR packaging-declaration engine for cross-border Amazon sellers

## 1. One-liner

Calculates packaging weight per material per EU country and hands sellers a ready-to-file EPR declaration packet.

## 2. Trend signal — why now?

The EU packaging regime just turned from "paperwork some sellers ignored" into "marketplace-enforced or you lose money automatically." Three hard dates stack up in 2026:

- **WEEE EPR numbers** were mandatory on Amazon by **31 Dec 2025**; **packaging, batteries, tyres, oils** numbers by **31 Mar 2026** (Lovat Compliance / Amazon Seller Central).
- **PPWR (Regulation 2025/40)** — most provisions apply from **12 Aug 2026**, and from that date **marketplaces must verify** that every seller shipping into any EU country meets packaging-EPR obligations. No size exemption. (ecosistant, Intertek, Lovat.)
- Sellers who don't enter valid EPR numbers in time get auto-enrolled in **Amazon's "Pay on Behalf"** — Amazon pays the eco-fee *and* adds a service surcharge, debited directly. Non-compliance can also mean **delisting or account suspension**.

The pain underneath isn't getting a registration number — it's the **recurring declaration**: weight in kilograms of *each packaging material* placed on *each national market* per reporting period. Amazon's own policy study found **64 unique registration fields across 10 EU markets** (11 in Belgium/Spain to 20+ in Sweden), **55% of fields country-specific**, dual government+PRO registration in Italy/Spain/Poland, national e-ID logins in Spain/Sweden/Poland/Italy, Belgium still on offline email forms, and every portal in the local language only (Amazon policy study, 2026).

The repeating math is the killer. As one compliance vendor put it: **"Forty SKUs across three material layers in five countries produces roughly 600 data points per reporting cycle"** (Minefield Navigator). Spreadsheets rot between cycles; auditors catch the gaps by comparing declared tonnage to shipment volumes.

Provenance:
  - Signal 1 (Demand): Amazon's own study — 64 unique registration fields across 10 EU markets, small businesses struggle, 55% country-specific — https://www.aboutamazon.eu/news/policy/new-study-why-small-businesses-struggle-with-eu-packaging-rules-and-how-to-fix-it — 2026
  - Signal 2 (Feasibility/Economic): PPWR provisions apply 12 Aug 2026 with marketplace enforcement; sellers auto-enrolled into Amazon "Pay on Behalf" + surcharge if non-compliant — https://www.ecosistant.eu/en/epr-registration-number-amazon/ — 2026
  - Signal 3 (Economic): Compliance providers (Lovat) already charging €190–250/yr per category for registration+reporting; full-service ARs charge more — money clearly moving — https://vatcompliance.co/blog/complete-epr-guide-for-amazon-sellers/ — 2026
  Category: Regulatory arbitrage

## 3. The opportunity

The existing market splits into two camps, and both leave the smallest cross-border sellers exposed:

1. **Full-service Authorized Representatives / consultants** (Deutsche Recycling, ecosistant, EU Compliance Partner) — they'll register you and be your legal AR, billed per-country, per-category, with manual onboarding. Great margin, slow, and priced for brands that can absorb €500–2,000+ in service fees across markets.
2. **Registration-and-reporting subscriptions** (Lovat from €190/yr) — cheaper, but they hand you a portal and still expect *you* to know your packaging weights by material and country.

Nobody owns the genuinely painful, repeating middle: **turning "here are my products and my sales-by-country" into "here is the exact tonnage of PET, paper, glass, aluminium I placed on each national market, formatted for each registry, recalculated every cycle."** That's the 600-data-points-per-cycle problem. It's not a legal problem — it's a data-extraction-and-mapping problem that vision and classification models make cheap for the first time. We take that slice, stay *out* of the regulated AR role, and either let sellers file themselves or export a clean packet to whatever AR they already use.

The incumbents won't chase it because their business model is per-country service revenue; a self-serve data engine cannibalizes the manual hours they bill for.

## 4. Target market

- **Primary customer:** Non-resident e-commerce sellers shipping into 2–6 EU countries — UK sellers post-Brexit, US Pan-EU FBA sellers, India/Turkey/China D2C exporters — with **50–2,000 SKUs** and **€100K–€5M** EU revenue, no in-house compliance staff.
- **Why they buy:** "I have an EPR number but I have no idea what to actually declare, and if I get it wrong Amazon either suspends me or starts charging me a surcharge." The declaration is annual-or-quarterly and never finishes — new SKUs land monthly.
- **Rough TAM reasoning:** Amazon EU alone has well over a million active third-party sellers; a large share sell cross-border, and PPWR's no-size-exemption rule pulls in even occasional cross-border sellers from Aug 2026. A target wedge of even **20,000–50,000 small non-resident multi-country sellers** at €30–80/mo is a comfortably >$5M-ARR pond.
- **Why now for them:** The 12 Aug 2026 marketplace-enforcement switch turns a soft obligation into a hard, automated penalty. Sellers who shrugged at EPR through 2025 are forced to act on a calendar they can see.

## 5. Product sketch (MVP)

- **SKU packaging capture** — seller photographs or describes each product's packaging (box, mailer, void fill, label, tape); the system identifies material type and estimates weight per component.
- **Material-weight ledger** — every SKU resolves to grams of paper/cardboard, plastic (by polymer where required), glass, aluminium, composite — the unit the registries actually want.
- **Sales-by-country ingest** — pull units-sold-per-marketplace from Amazon/Shopify reports; multiply by per-SKU packaging weight to get national tonnage per material per period.
- **Per-country declaration packets** — output formatted to each registry's fields (LUCID/Germany, Citeo+ADEME/France incl. Triman & Info-tri, CONAI/Italy, Ecoembes/Spain, etc.), with the country-specific fields pre-filled.
- **Audit trail** — versioned record of declared tonnage vs. shipment volumes, the exact comparison auditors run, exportable as proof.
- **Recalc on change** — new SKUs and each new reporting cycle re-run automatically; flags when a country's threshold or fee tariff changes.
- **AR hand-off export** — one-click packet a seller can email to their existing Authorized Representative instead of filing themselves.

## 6. AI angle — what's load-bearing

Remove the AI and this collapses back into the spreadsheet that's already failing sellers. The load-bearing work is twofold: (1) **vision + classification** to turn a photo of a parcel into a structured material-and-weight breakdown — polymer identification, multi-layer decomposition, weight estimation — without the seller hand-measuring 600 components; and (2) **mapping intelligence** to translate one canonical packaging record into each country's idiosyncratic field set and fee tariff (55% of fields are country-specific; portals are local-language-only). Both were manual-labour problems until cheap vision and language models made per-SKU automation viable. The declaration math itself is arithmetic — the AI is what makes the *input* and the *per-country translation* tractable at SKU scale.

## 7. Localization angle (if any)

This *is* a localization play — but localization across EU member states, not a single-country wedge. The moat is precisely the per-country quirks: France's Triman + Info-tri sorting symbols and ADEME/Citeo split; Germany's LUCID + dual-system provider; Italy/Spain/Poland's dual government-plus-PRO registration and national e-ID logins; Belgium's offline forms. A generic global "packaging compliance" tool that doesn't encode these dies at the first declaration. Pricing also localizes: a €30–80/mo tier works for sellers who can't justify a €1,500 AR engagement.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** Tiered by SKU count + number of countries. Starter €29/mo (≤100 SKUs, 2 countries); Growth €79/mo (≤500 SKUs, up to 5 countries); Pro €199/mo (≤2,000 SKUs, all EU + quarterly cycles). Add-on: "declaration done-for-you" review at €49/country/cycle.
- **ACV:** ~€700–900 blended (most land on Growth, many add a country or a done-for-you review at deadline crunch).
- **Rough math to $1M ARR:** ~1,300 customers × ~€65/mo avg × 12 ≈ $1.05M.
- **Rough math to $5M ARR:** ~5,000 paying sellers averaging ~€85/mo, plus done-for-you add-ons at each EU reporting deadline. Plausible given the multi-million seller base and forced-compliance calendar — but requires expanding country coverage and surviving incumbent response.
- **Expansion path:** more countries per account, more SKUs, more EPR streams (batteries, WEEE, textiles EPR landing 2025–2027), and a per-cycle "audit-ready packet" upsell. ACV grows as sellers expand EU footprint.

## 9. Go-to-market wedge — first 100 customers

- **Amazon EU seller forums + the EPR threads** — Seller Central EU discussion threads on EPR/LUCID and the m2epro / vatcompliance comment sections are full of confused sellers *right now*. Answer the "how do I calculate packaging weight" question with a free SKU-weight estimate, convert.
- **Deadline-timed cold outreach** — scrape sellers visibly shipping into FR/DE who lack a valid EPR number on their listings (Amazon surfaces compliance gaps); send a personalized "you're about to get Pay-on-Behalf'd on 12 Aug" Loom + a free first-country declaration. Time it to the Aug 2026 enforcement date.
- **Prep-center & 3PL partnerships** — EU prep centers and Pan-EU enablement agencies field this question from every client. Revenue-share referral; they hate doing the packaging math themselves.
- **AR/consultant white-label** — the cheaper ARs (the Lovat tier) need a data engine behind their portal. Sell them the calculation layer wholesale; they keep the AR relationship, we get volume.
- **Vernacular YouTube/WhatsApp for India & Turkey exporters** — these sellers are heavily underserved in their own language on EU compliance; a "how to not get suspended on Amazon EU" explainer is cheap, targeted distribution.

## 10. Build complexity — justification

**Medium.** The vision/classification for packaging-material-and-weight extraction is off-the-shelf model work with a calibration dataset you can bootstrap from common packaging types. The genuinely laborious part is encoding each country's registry field set, fee tariff, and format — that's domain grind, not research, and it's also the moat. Marketplace report ingestion (Amazon/Shopify) is standard integration. A 2–3 person team ships a 2-country MVP (Germany + France, the highest-volume, highest-pain pair) in **~3–4 months**, then adds countries one at a time. No novel infra, no model training breakthrough required.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | We prepare data/declarations; the seller (or their accredited AR) files. We do not act as the regulated AR. |
| Ethical — no harm / dark patterns | ✅ | Helps sellers comply with environmental law; no dark patterns. |
| Market exists (evidence above) | ✅ | Forced-enforcement calendar, paying incumbents, Amazon's own study. |
| 1–5 person team can build this | ✅ | 2–3 people, country-by-country rollout. |
| Launchable with <$50K / ₹40L | ✅ | Off-the-shelf models + integration work; no capex. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | Hair-on-fire near the deadline: get it wrong and Amazon suspends or surcharges you automatically. Recurring, not one-off. |
| Demand evidence | 15 | 12/15 | Amazon's own study quantifies the struggle; multiple paid incumbents; forced enforcement date. Strong, though most evidence is vendor/marketplace-sourced rather than raw seller threads. |
| Build feasibility | 15 | 11/15 | Models off-the-shelf; the work is per-country encoding. Real but bounded grind; 3–4 months to credible v1. |
| Distribution clarity | 15 | 11/15 | Named channels (seller forums, deadline outreach, prep-center referral, AR white-label) with a hard catalyst date. Conversion math still unproven. |
| Revenue mechanics | 15 | 11/15 | Pricing benchmarked below incumbents; ACV reasonable; $1M path needs ~1,300 customers — achievable but requires real acquisition. |
| Time to first revenue | 10 | 7/10 | A 2-country MVP can pre-sell against the Aug 2026 deadline; revenue in 6–10 weeks of a usable build is realistic. |
| Defensibility | 10 | 6/10 | Soft moat: accumulated per-country encoding, packaging-weight dataset, and workflow lock-in via versioned audit trails. Copyable, but the country-grind plus a deadline head-start protects 6–12 months. |
| **Total** | **100** | **74/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required` — needs someone who can ship vision/classification *and* either has or quickly acquires EU EPR domain knowledge (or a compliance advisor).

### Key assumptions to validate (3–5)

1. **Assumption:** Sellers will trust an estimated packaging weight enough to declare on it. **How to test:** Run 20 real SKUs through a manual version, compare to seller-measured truth, show the error band; ask 15 sellers if it's "good enough to file."
2. **Assumption:** The data layer can stay out of the regulated AR role and still be valuable. **How to test:** Interview 10 sellers + 3 ARs — do sellers want a packet they file themselves, or do they only want full-service? If only full-service, the wedge narrows.
3. **Assumption:** €79/mo is payable by a €100K–€5M cross-border seller. **How to test:** Pre-sell 10 annual seats at the Aug-2026-deadline pitch before building all countries.
4. **Assumption:** Per-country encoding is grind, not a moving target that breaks monthly. **How to test:** Track LUCID/Citeo/CONAI format changes over 8 weeks; estimate maintenance load.

### Risk flags

1. **Platform/regulatory dependency:** The entire urgency rides on Amazon's enforcement and PPWR timelines. If the May-2026 proposal to suspend AR obligations for micro/small enterprises passes (decision due 1 Oct 2026), some urgency softens — though the *declaration* obligation itself survives.
2. **Incumbent response:** ecosistant/Lovat/Deutsche Recycling could bolt on a cheap self-serve calculator. Our defense is speed, seller-grade UX, and the AR-white-label channel.
3. **Liability creep:** Sellers who get fined may blame the tool. Mitigate with clear "you/your AR file; we prepare and show our math" positioning and a visible audit trail.
4. **Maintenance drag:** 27 member states' formats drift; coverage breadth is a treadmill. Start with the FR/DE pair that covers most volume and pain.

## 14. Structured verdict

```
Score:                  74/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder (vision/ML + integrations) with an EU EPR compliance advisor
Time to revenue:        6–10 weeks to first paid (pre-sold against Aug 2026 deadline); ~3–4 months to 2-country MVP
Capital to launch:      $8–15K (model inference, integration dev, a compliance advisor's time)
Top 3 assumptions to validate first:
  1. Estimated packaging weights are accurate enough to declare on — bench 20 SKUs vs. measured truth
  2. The data-layer wedge (not full AR) is what sellers want — interview 10 sellers + 3 ARs
  3. €79/mo is payable — pre-sell 10 annual seats before building all countries
Kill criteria:
  - Abandon if <3 of 15 deadline-targeted sellers pre-pay after a working FR/DE demo
  - Abandon if packaging-weight estimates can't get within an audit-defensible band on common packaging
  - Abandon if an incumbent ships an equivalent self-serve calculator before the 2-country MVP and locks the forums
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Manually build the FR + DE declaration for 5 real seller catalogs (borrow them) by hand — prove the 600-data-points pain is real and that our material-weight ledger maps cleanly to LUCID + Citeo/ADEME fields, Triman included.
- **Day 3–4:** Take that hand-built output to 15 cross-border sellers (Amazon EU forums, prep-center intros) with a deadline pitch; offer a pre-sold annual seat at €79/mo.
- **Day 5:** Decide go/no-go on a **falsifiable** bar: **≥3 of 15 sellers pre-pay** for the FR/DE packet, and packaging-weight estimates land within an audit-defensible band on at least 4 of 5 catalogs. Below either threshold → no-go.
