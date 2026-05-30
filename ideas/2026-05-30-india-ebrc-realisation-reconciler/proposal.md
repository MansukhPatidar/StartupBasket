---
title: "ClearBRC — realisation reconciler for India's small exporters"
slug: india-ebrc-realisation-reconciler
date: 2026-05-30
category: TradeTech / India Small & Mid Exporters
complexity: Medium
score: 75
verdict: GO
confidence: Medium
oneLiner: "Matches every shipping bill to its bank remittance and GST invoice, flagging the mismatches that block refunds and trigger RBI caution-listing."
tags:
  vertical: TradeTech
  model: SaaS
  geography: India
  secondary: [Compliance-driven, SMB, AI-agent, Multilingual]
axes:
  problem: 16
  demand: 12
  build: 11
  distribution: 11
  revenue: 11
  time: 8
  defensibility: 6
founderFit: [domain-expertise-required, technical-heavy]
featured: false
---

# ClearBRC — realisation reconciler for India's small exporters

## 1. One-liner

ClearBRC matches every shipping bill to its bank remittance and GST invoice, flagging the mismatches that block refunds and trigger RBI caution-listing — before the FEMA clock runs out.

## 2. Trend signal — why now?

Three things moved in the last six months, all pushing reconciliation work *onto the exporter*:

1. **eBRC self-certification went live (effective 13 Jan 2026).** DGFT revamped the Electronic Bank Realisation Certificate system: banks now upload Inward Remittance Messages (IRMs) directly to DGFT, and the **exporter self-certifies the eBRC** by linking each IRM to the right shipping bill and invoice on the DGFT portal. The bank no longer does the linking. The exporter does — and owns the error. ([DGFT eBRC self-certification](https://www.dgft.gov.in/CP/?opt=eBRC), [India Shipping News](https://indiashippingnews.com/dgft-revamped-the-e-brc-system-to-enable-self-certification-by-exporters/))

2. **eBRC now mandatorily carries GSTIN + GST invoice details (w.e.f. 13 Jan 2026).** The eBRC is now wired to the GST invoice, which means a mismatch between what's in EDPMS, what's in the eBRC, and what's in GSTR-1 is no longer a paperwork nuisance — it directly stalls the GST/IGST refund. ([CA Delhi India](https://www.caindelhiindia.com/blog/mandatory-gst-invoice-details-in-ebrc-w-e-f-13-01-2026/))

3. **The consequences are real and escalating.** An exporter with any shipping bill open (unrealised) in RBI's EDPMS for two years gets **caution-listed** — losing packing-credit access, GST refunds, and export incentives, plus FEMA penalty exposure. The top GST-refund rejection reasons in 2026 are mechanical mismatches: SB005 (invoice number), SB003 (GSTIN mismatch between shipping bill and returns), FOB value mismatch >2%, and non-realisation within the FEMA 9-month window. ([Council for Leather Exports — Caution Listing](https://leatherindia.org/realization-of-export-proceeds-caution-listing-of-exporters/), [BriskPE EDPMS compliance](https://www.briskpe.com/edpms-compliance/))

Provenance:
  - Signal 1 (Demand): Top GST-refund rejection reasons are mechanical SB005/SB003/FOB/9-month mismatches; exporters spend 4–8 working days/month reconciling registers — [Delhi Customs IGST FAQ](https://delhicustoms.gov.in/pdf/FAQs-on-IGST-refunds-31090.pdf) / [taxguru EDPMS](https://taxguru.in/rbi/rbis-edpms-idpms-real-time-trade-monitoring.html) — 2026-01
  - Signal 2 (Feasibility): eBRC self-certification + mandatory GST-invoice linkage live 13 Jan 2026 shifts the IRM↔SB↔invoice linking work onto the exporter; 2026 multimodal LLMs read FIRC/shipping-bill/e-invoice docs and reconcile them — [DGFT](https://www.dgft.gov.in/CP/?opt=eBRC) / [CA Delhi India](https://www.caindelhiindia.com/blog/mandatory-gst-invoice-details-in-ebrc-w-e-f-13-01-2026/) — 2026-01
  - Signal 3 (Economic): Caution-listing (2-yr open SB) blocks packing credit + GST refunds + incentives under FEMA; Shipzy/BharathExim/BriskPE/Razorpay all monetising EDPMS/eBRC plumbing — [CLE Caution Listing](https://leatherindia.org/realization-of-export-proceeds-caution-listing-of-exporters/) / [Shipzy eBRC](https://goshipzy.com/import-export-software/ebrc-closure-in-india-what-it-is-why-it-matters-and-how-exporters-can-save-serious-time) — 2026-02
  Category: Regulatory arbitrage

## 3. The opportunity

Three Indian government systems that don't talk to each other — **EDPMS** (RBI, tracks export realisation), **eBRC/DGFT** (export incentives), and **GST/GSTR-1** (refunds) — now have to be reconciled, invoice by invoice, *by the small exporter themselves* as of January 2026. Before, the bank quietly issued the BRC and the exporter never saw the seams. Now the seams are the exporter's problem.

The incumbents address the wrong half of the problem:

- **Shipzy / BharathExim** are full export-import ERPs. They automate eBRC *closure* once data is clean, but you have to rip out your existing system and adopt theirs. Overkill for a ₹5–50 crore exporter who lives in Tally + Excel + the bank portal.
- **Razorpay / BriskPE** are *payment rails* — they get you paid and file the IRM, but they don't reconcile your shipping bills against your GST returns or warn you about caution-list drift.
- **CAs / customs brokers** do this manually, charge per closure, and don't watch the clock between engagements.

Nobody sells a focused, cheap **early-warning + reconciliation layer** that sits on top of whatever the exporter already uses, reads the four documents, and says "shipping bill #X will be rejected for SB005, and bill #Y crosses the 9-month FEMA line in 38 days." That's the gap. AI reading mismatched OCR'd FIRCs, shipping bills, and e-invoices is exactly the load-bearing piece.

## 4. Target market

- **Primary customer:** Owner / finance head / export-documentation executive at a small-to-mid Indian merchant or manufacturer-exporter — ₹5–80 crore annual export turnover, 50–800 shipping bills/year, no in-house EXIM compliance team, currently relying on a part-time CA + the bank's portal.
- **Why they buy:** "I have shipping bills sitting open in EDPMS and I don't know which ones. My GST refund got stuck on an SB005 mismatch I didn't catch. My CA only looks at this once a quarter and the bank doesn't proactively tell me anything. If I get caution-listed my packing credit dries up and I'm out of business." (Pain is concrete: 4–8 working days/month of manual reconciliation reported industry-wide.)
- **Rough TAM reasoning:** India has ~100,000+ active exporters with IEC codes filing regularly; the ₹5–80 cr band is tens of thousands of firms. Even capturing a few thousand at ₹2,000–8,000/mo is a $1–5M ARR business.
- **Why now for them:** The 13 Jan 2026 self-certification shift made the reconciliation *their legal responsibility*, and the GST-invoice linkage made every mismatch a refund-blocker. The work didn't exist on their desk 12 months ago.

## 5. Product sketch (MVP)

- **Document drop-zone:** upload (or email-forward / WhatsApp) shipping bills, FIRCs/IRMs, GST invoices, e-invoices, bank advices — any format, scanned or PDF.
- **Four-way match:** auto-link each shipping bill → IRM/remittance → GST invoice → eBRC, surfacing every field that won't reconcile (invoice number, GSTIN, FOB value, currency, purpose code, port code).
- **Refund-rejection pre-check:** flags the known killers before you file — SB005, SB003, SB002/SB006 (EGM), FOB >2%, GSTR-3B vs GSTR-1 6A gaps.
- **Caution-list sentry:** a live dashboard of every open/unrealised shipping bill with a countdown to the FEMA 9-month realisation deadline and the 2-year caution-list line; ranked by rupee value at risk.
- **eBRC draft assist:** pre-fills the DGFT self-certification linking (IRM→SB→invoice) for the exporter to review and submit — the exporter still clicks through on DGFT (we don't file for them).
- **Banker / CA chase pack:** auto-drafts the "please file IRM with UTR #___" email and the rectification note for stuck shipping bills.
- **Hindi + regional UI and prompts** for the documentation executive who isn't comfortable in English compliance jargon.

## 6. AI angle — what's load-bearing

Remove the AI and this is a manual data-entry job — which is exactly why nobody small does it well today. The load-bearing work: **reading and reconciling four inconsistently-formatted documents** (an OCR'd FIRC from one bank looks nothing like another's; e-invoices, shipping bills, and GST invoices use different field names and number formats for the same transaction), then **reasoning about which mismatch maps to which rejection code** (SB005 vs SB003 vs FOB tolerance) and **which open bill is closest to a FEMA/caution-list deadline**. 2026 multimodal LLMs do the extraction + cross-document matching + rule-mapping in one pass. The rules engine is deterministic; the document-reading and fuzzy entity-matching (is "Inv 0042/24-25" the same as "INV-42") is the AI.

## 7. Localization angle (if any)

This *is* the localization play — it can't exist as a generic global product. It's bolted to Indian rails: EDPMS, eBRC/DGFT, GST/GSTR-1, ICEGATE shipping bills, FEMA realisation windows, and the RBI caution-list mechanism. Pricing in ₹ (a ₹2,000/mo tier works where a $49/mo SaaS can't land with a small exporter). Distribution through Indian export councils and WhatsApp. Hindi/Gujarati/Tamil UI for the back-office documentation staff who actually do the linking. A US/EU exporter has none of these systems — there's no global version to compete with, and no global incumbent who'd bother building this.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** ₹1,999/mo (Solo — up to ~150 shipping bills/yr), ₹4,999/mo (Growth — up to ~600 bills/yr, multi-IEC), ₹9,999/mo (Pro — unlimited bills, multi-GSTIN, CA-seat access). Optional ₹499/closure success fee waived on subscription.
- **ACV:** ₹35,000–60,000 (~$420–720) blended.
- **Rough math to $1M ARR:** ~1,800 exporters × ₹4,000/mo avg × 12 ≈ ₹8.6 cr ≈ $1.03M ARR.
- **Rough math to $5M ARR:** ~7,000–8,000 exporters across the ₹5–80cr band, plus a per-closure usage line and a CA-firm reseller tier (one CA manages 30–60 exporter clients on one dashboard). Add adjacent IDPMS/import-side reconciliation as an upsell.
- **Expansion path:** start with reconciliation/alerts → add eBRC draft-assist → add IDPMS import-payment side → add RoDTEP/duty-drawback incentive tracking → CA multi-client console (highest ACV).

## 9. Go-to-market wedge — first 100 customers

- **Free "caution-list risk check":** exporter forwards last 12 months of shipping bills + bank advices; ClearBRC returns a one-page report of open bills, FEMA-deadline risk, and refund-rejection flags. This is the hook — it shows rupee-at-risk they didn't know about. Drop it into exporter WhatsApp/Telegram groups and LinkedIn EXIM communities.
- **Export-council directories:** scrape/partner with FIEO, the Council for Leather Exports, AEPC (apparel), GJEPC (gems), EEPC (engineering) member lists — these are public, segmented by the exact ₹5–80cr firms, and councils actively circulate compliance tooling to members. Email the documentation contact a personalized risk-report sample.
- **CA / customs-broker resellers:** the CAs who currently do this manually are the channel, not the enemy — offer them a multi-client console and a referral cut. One CA brings 30–60 exporter logos.
- **Cold outreach to the visibly-stuck:** taxguru / GST forums / r/IndiaExporter threads where exporters complain about SB005/EDPMS/stuck refunds — DM them the free check.

## 10. Build complexity — justification

Medium. The document-reading (multimodal LLM) and the rules/deadline engine are off-the-shelf + standard web stack — buildable by a pair in ~10–14 weeks. The real work is the **domain rules** (EDPMS/eBRC/GST/FEMA logic, rejection-code mapping, caution-list timelines) and handling the long tail of bank FIRC/IRM formats — that needs an EXIM-compliance advisor and accounts for the "Medium" rather than "Low." No regulatory approval to launch (we assist; the exporter self-certifies on DGFT). No integration is *required* for v1 (document upload works); ICEGATE/EDPMS read-integrations are a later enhancement.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | We assist reconciliation; exporter self-certifies on DGFT. No filing-on-behalf, no FEMA-advisory licensing needed for software. |
| Ethical — no harm / dark patterns | ✅ | Helps exporters stay compliant and avoid penalties; no dark patterns. |
| Market exists (evidence above) | ✅ | Active regulatory shift + incumbents monetising adjacent plumbing + concrete refund/caution-list pain. |
| 1–5 person team can build this | ✅ | Pair + EXIM advisor, ~3 months to v1. |
| Launchable with <$50K / ₹40L | ✅ | Off-the-shelf AI APIs + web stack; main cost is the domain advisor and document-format coverage. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | Caution-listing kills packing credit and refunds — real money, real fear. Felt monthly during reconciliation, acutely at refund-filing and deadline. Slightly below hair-on-fire because many small exporters under-realise the risk until it bites. |
| Demand evidence | 15 | 12/15 | Multiple independent signals: fresh regulation, named refund-rejection codes, incumbents charging for adjacent closure tooling, industry reports of 4–8 days/month manual reconciliation. Direct "I'd pay for this" exporter quotes are thinner — hence not 14. |
| Build feasibility | 15 | 11/15 | Standard stack + multimodal LLM, but the domain rules and the FIRC/IRM format long-tail need genuine EXIM expertise; ~3 months not 6 weeks. |
| Distribution clarity | 15 | 11/15 | Named directories (FIEO/CLE/AEPC/GJEPC/EEPC), CA reseller channel, free-risk-check hook. Conversion math is plausible but unproven; council partnerships take time. |
| Revenue mechanics | 15 | 11/15 | ₹-tier pricing benchmarked against incumbents; ACV realistic; path to $1M clear. Churn risk if exporters treat it as seasonal. |
| Time to first revenue | 10 | 8/10 | Free check → paid in weeks; export-doc staff already feel the pain. Slight drag from trust-building in a compliance product. |
| Defensibility | 10 | 6/10 | Soft moat: accumulated rules/format library, council relationships, CA-console lock-in, workflow data. Copyable by a determined incumbent (Shipzy could extend down-market) — hence flagged. |
| **Total** | **100** | **75/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`domain-expertise-required` · `technical-heavy`

Needs someone who genuinely understands EDPMS/eBRC/GST/FEMA mechanics (or a co-founder/advisor who does), plus the engineering to do robust multi-document extraction. Sales is mid-touch (councils + CAs), not pure self-serve.

### Key assumptions to validate (3–5)

1. **Assumption:** Small exporters perceive caution-list / stuck-refund risk as urgent enough to pay ₹2,000–5,000/mo proactively (not just reactively when already stuck). **How to test:** Run the free risk-check on 40 exporters; measure how many convert to a paid trial after seeing their rupee-at-risk report.
2. **Assumption:** AI can extract and four-way-match across the messy real-world variety of bank FIRC/IRM formats with high enough accuracy to be trusted on a refund-blocking decision. **How to test:** Collect 200 real FIRC/shipping-bill/invoice sets, measure match accuracy and false-negative rate on known rejection codes.
3. **Assumption:** Export councils and CAs will distribute / resell rather than view this as competitive. **How to test:** Pitch 5 council compliance officers and 10 CAs; count partnership LOIs / referral agreements.
4. **Assumption:** Incumbents (Shipzy/BharathExim) won't trivially extend a cheap down-market reconciliation-only tier before we get traction. **How to test:** Track their pricing pages and launches quarterly; assess whether their ERP DNA makes a cheap standalone hard.

### Risk flags

1. **Platform dependency:** Heavy reliance on DGFT/ICEGATE/EDPMS data and formats; a government portal redesign or API change can force rework. Mitigant: document-upload-first design avoids hard API coupling at launch.
2. **Regulatory drift:** The rules we encode (rejection codes, FEMA windows, caution-list triggers) change with RBI/DGFT circulars. The rules library is also the moat, but it needs constant upkeep — an ops cost.
3. **Trust in a compliance product:** A false "you're clean" that leads to a stuck refund is reputation-ending. Need conservative flagging (over-warn) and clear "we assist, you self-certify" framing.
4. **Incumbent extension:** Shipzy already does eBRC closure inside an ERP; if they ship a cheap standalone tier, our down-market wedge narrows. Speed + council/CA relationships are the defense.

## 14. Structured verdict

```
Score:                  75/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder + EXIM-compliance advisor (or domain co-founder); India-based, comfortable with council/CA channel sales
Time to revenue:        6–10 weeks (free risk-check → paid trial)
Capital to launch:      ₹8–15 lakh ($10–18K)
Top 3 assumptions to validate first:
  1. Exporters pay proactively for risk avoidance — test with 40 free risk-checks → paid conversion
  2. AI four-way match accuracy on messy real FIRC/SB/invoice sets — test on 200 real document sets
  3. Councils/CAs distribute rather than compete — pitch 5 councils + 10 CAs for LOIs
Kill criteria:
  - Abandon if <20% of free-risk-check exporters convert to a paid trial after seeing rupee-at-risk
  - Abandon if four-way match false-negative rate on known rejection codes stays >5% after tuning
  - Abandon if Shipzy/BharathExim ship a sub-₹2,500/mo standalone reconciliation tier before v1 traction
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Pull 30–50 real exporter document sets (shipping bill + FIRC/IRM + GST invoice) from 3–4 friendly small exporters and one cooperative CA. Hand-run the four-way match and rejection-code flagging manually to establish a ground-truth and an accuracy baseline for the AI.
- **Day 3–4:** Build a one-page "caution-list risk check" report from those sets and walk it back to the exporters. Ask one falsifiable question: *"If this report cost ₹2,999/mo as a live, always-on watch, would you pay today?"* Get a yes/no and a card, not a "nice idea."
- **Day 5:** Decide go / no-go. **Go if ≥ 8 of ~30 exporters say yes and put down a deposit / sign a paid-pilot LOI, AND the manual match surfaced at least one real rupee-at-risk item they didn't already know about.** Otherwise, pause and re-test the channel or pricing.

The result is falsifiable: paid LOIs and a measured "found-risk-they-didn't-know" hit rate — not enthusiasm.
