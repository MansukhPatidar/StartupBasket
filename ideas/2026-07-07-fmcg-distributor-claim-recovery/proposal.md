---
title: "PattiBack — claim-recovery desk for FMCG distributors"
slug: fmcg-distributor-claim-recovery
date: 2026-07-07
category: Retail / India — Independent FMCG Super-Stockists & Distributors (scheme + damage claim recovery)
complexity: Medium
score: 75
verdict: GO
confidence: Medium
oneLiner: "Reads every brand's scheme circular, reconciles your sales, and surfaces the claim money you're leaving on the table."
tags:
  vertical: Retail
  model: SaaS
  geography: India
  secondary: [WhatsApp-first, Multilingual, AI-agent, SMB, Compliance-driven]
axes:
  problem: 17
  demand: 12
  build: 11
  distribution: 12
  revenue: 11
  time: 7
  defensibility: 5
founderFit: [domain-expertise-required, operations-heavy]
featured: false
---

# PattiBack — claim-recovery desk for FMCG distributors

## 1. One-liner

Reads every brand's scheme circular, reconciles your sales, and surfaces the claim money you're leaving on the table.

## 2. Trend signal — why now?

The independent FMCG distributor is the invisible middle layer between the factory and the kirana — roughly **400,000 of them in India**, represented by the AICPDF (All India Consumer Products Distributors Federation). They run on **3–5% margins with 30–60 days of credit** ([Kotak Insights, 2025](https://kotakinsights.substack.com/p/fmcg-distributor-disruption-quick-commerce)). Their real profit doesn't come from the base margin — it comes from **scheme claims and damage/expiry credit notes** that the brand owes them back after the fact.

The problem: that money is bleeding out. Industry writeups are now explicit that **"distributors using manual tracking miss 30–50% of available scheme claims"**, and that **"a distributor handling 3–4 brands may have 20–30 active schemes at any time"** ([SpireStock margin guide, 2026](https://spirestock.com/blog/fmcg-distributor-margin-profit-guide-india)). Claims get rejected because the distributor missed the **6-month claim window**, or because the settlement PTS differs from the dispatch PTS and nobody reconciled it batch-by-batch ([Terra Insight, stockist reconciliation, 2026](https://www.terra-insight.com/insights/pharma-distributor-stockist-reconciliation-india/)).

This has become organized, vocal pain. In **April 2025 the AICPDF formally wrote to FMCG companies** demanding, among other things, "the right to return unsellable goods with guaranteed timelines" — because **"almost all FMCG companies do not include clauses holding them responsible for the collection and disposal of expired or damaged goods"** ([Business Standard, June 2025](https://www.business-standard.com/economy/news/distributors-body-urges-fmcg-cos-to-collect-damaged-and-expired-goods-125061601108_1.html)). And with q-commerce hollowing out general-trade volume ("a van that once served 80 stores now serves 50"), the base margin is shrinking — so recovering every rupee of claim money is no longer housekeeping, it's survival.

Why the tech is possible *now*: brands push scheme circulars as unstructured PDFs and WhatsApp images. Cheap multimodal AI (2026-era Gemini/Claude vision, sub-cent per page) can finally *read* those circulars, extract the slab logic, and reconcile them against the distributor's own secondary-sales data — a task that was pure manual drudgery until ~12 months ago.

Provenance:
  - Signal 1 (Demand): "Distributors using manual tracking miss 30–50% of available scheme claims"; 20–30 active schemes per distributor — [SpireStock](https://spirestock.com/blog/fmcg-distributor-margin-profit-guide-india) — 2026
  - Signal 2 (Economic/Regulatory): AICPDF (400k distributors) formally demanded damaged/expired-goods return timelines from FMCG cos; companies contractually dodge liability — [Business Standard](https://www.business-standard.com/economy/news/distributors-body-urges-fmcg-cos-to-collect-damaged-and-expired-goods-125061601108_1.html) — June 2025
  - Signal 3 (Feasibility): Cheap multimodal AI can now parse unstructured scheme circulars (PDF/WhatsApp images) and reconcile PTS/batch mismatches that only surface at batch-level reconciliation — [Terra Insight](https://www.terra-insight.com/insights/pharma-distributor-stockist-reconciliation-india/) — 2026
  Category: Underserved niche

## 3. The opportunity

Every existing piece of software in this space is built for the **wrong side of the table**. Bizom, FieldAssist, BeatRoute, Delta Sales — these are **Distributor Management Systems sold to the brand**, priced per-user ($48–60/user/mo, or ₹700–1,470/user/mo — [Capterra/SaaSworthy, 2026](https://www.capterra.com/p/146321/Bizom/)). The brand deploys them to *police* its distributors; the distributor is the *subject* of the software, not its customer. Their "claim" module validates claims a human already entered against the brand's rules — it does not fight for the distributor.

Marg ERP, the incumbent billing software most distributors already run, has a "Claims & Statements" feature — but it **tracks** claims the operator keys in. It doesn't read the brand's circular and tell you "you're owed ₹1.4L on the Surf Excel Q2 slab scheme and you've only claimed ₹80k."

So the gap is stark: **nobody builds a tool whose entire job is to maximize and defend the independent distributor's claim recovery.** That's the 10× wedge. If a distributor is genuinely missing 30–50% of claims, and claims are a meaningful chunk of a 3–5% margin business, recovering even half of the missed amount is often **more than doubling their net profit** — a number that sells itself in one demo.

## 4. Target market

- **Primary customer:** Independent FMCG super-stockists and distributors — single-owner or family firms doing **₹50L–₹10Cr/month** across 3–6 brands, in Tier-1/2/3 cities. The buyer is the **proprietor or his accountant**, not a CXO.
- **Why they buy:** In their words — *"the company owes me claim money and half of it just never comes back."* They already feel every rejected claim personally; it's their own cash. Damage/expiry credit and scheme slabs are where their real margin lives, and it leaks.
- **Rough TAM reasoning:** ~400,000 distributors (AICPDF). Even a serviceable slice — say the 60,000 doing ₹1Cr+/month with enough claim volume to justify a subscription — at ₹2,000–4,000/mo is a **₹150–280Cr/year** addressable line. I don't need the whole federation; I need a few thousand paying accounts.
- **Why now for them:** Q-commerce is crushing base volume, so claim recovery went from "nice cleanup" to "the difference between profit and loss." Simultaneously the AI to read messy circulars just got cheap enough to build this for a ₹-priced tier.

## 5. Product sketch (MVP)

- **Circular inbox:** Forward the brand's scheme circular (PDF or WhatsApp image) to a number/email; AI extracts every scheme — slab, product, period, claim window, rate — into a structured ledger.
- **Claim gap finder:** Reconcile active schemes against the distributor's secondary-sales/purchase data (imported from Marg/BUSY/Tally export or CSV) and flag **every rupee owed but not yet claimed**.
- **Claim-window alarm:** Countdown on each scheme's 6-month claim deadline; nudge before money expires unclaimable.
- **Damage & expiry claim builder:** Log damaged/expired stock (photo + batch + MRP); auto-assemble the company-format claim on letterhead with the required signatures/annexures.
- **PTS/PTR mismatch catcher:** Flag batches where the settlement price differs from dispatch price — the silent 1.5–4% margin leak.
- **Recovery dashboard:** "₹X claimed, ₹Y approved, ₹Z rejected, ₹W still recoverable" per brand — the number the owner checks every morning.
- **WhatsApp-first everything:** alerts, claim status, and monthly recovery summary delivered on WhatsApp in Hindi/regional language.

## 6. AI angle — what's load-bearing

Remove the AI and the product collapses. The core hard problem is turning **unstructured, inconsistent scheme circulars** — every brand formats them differently, many arrive as photographed printouts on WhatsApp — into structured, machine-reconcilable scheme logic. That's exactly what multimodal LLMs got good and cheap at in the last year. A rules-engine can't do it because there are no consistent rules to encode; each circular is bespoke. The AI reads it like a human clerk would, then the deterministic reconciliation math takes over. The AI is the wedge that a spreadsheet and Marg's "tracking" module can never cross.

## 7. Localization angle

This is **India-native by construction**, not a localized global product. The entire artifact set — scheme circulars, PTS/PTR/MRP margin mechanics, the 6-month claim window convention, letterhead-and-signature claim submission, WhatsApp as the default channel between brand and distributor — exists nowhere else in this exact shape. Pricing has to be ₹-tier (₹2,000–4,000/mo); a $49/mo product is dead on arrival with a 3% margin buyer. Multilingual WhatsApp output (Hindi, Marathi, Tamil, Telugu, Gujarati) is table stakes, not a bonus. A generic US-built "claims automation" tool literally cannot enter this market. That's the moat's foundation.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** ₹2,499/mo base (single distributor, up to ~4 brands) → ₹4,999/mo pro (unlimited brands + damage-claim builder + multi-user). Annual plans at ~2 months free.
- **ACV:** ~₹36,000 (~$430) at the base tier; ~₹60,000 at pro.
- **Rough math to $1M ARR (~₹8.5Cr):** ~2,000 paying distributors at ₹3,500/mo blended × 12. That's **0.5% of the 400k universe** — a very reachable slice.
- **Rough math to $5M ARR (~₹42Cr):** ~10,000 distributors at ₹3,500/mo, OR fewer distributors + a **success-fee tier** (take 8–10% of recovered claim money for the first year, which reframes the whole sale as "free unless we find you money").
- **Expansion path:** success-fee on recovered claims → add brands per account → add multi-branch/multi-godown → sell an aggregate, anonymized "which brands reject the most claims" benchmark back to distributors (and eventually to the brands themselves).

## 9. Go-to-market wedge — first 100 customers

- **AICPDF and state distributor associations:** ~400k distributors are organized into federations that hold district and state meets (Rajkot, etc.) and actively lobby brands on exactly this claim/damage grievance. Sponsor/present at 3–4 of these; the federation *is* the pain-aware audience, pre-assembled.
- **The "free claim audit" hook:** offer to run a distributor's last 6 months of data and hand back a single number — *"you're owed ₹X you never claimed."* That number is the entire pitch. Convert on contingency ("keep the tool, we take 10% of what we recover").
- **Marg/BUSY/Tally accountant channel:** the accountants and CA firms who already service these distributors are trusted intermediaries. Recruit 20–30 as referral partners; they see the leaking claims across dozens of clients.
- **WhatsApp broadcast + vernacular distributor influencers:** distributor-facing YouTube/WhatsApp communities (Kirana Club, distributor-education creators) already exist; a "you're losing half your claim money" reel is inherently shareable in these groups.
- **One-brand beachhead:** start with distributors of a single large brand whose circulars I've fully mapped (e.g. one HUL/ITC/Britannia territory), nail reconciliation for that brand, then expand brand coverage.

## 10. Build complexity — justification

**Medium.** Off-the-shelf multimodal AI does the circular parsing; the reconciliation is deterministic math against imported sales data; delivery is a standard web app + WhatsApp Business API. The genuine work is (a) building a robust ingest that handles messy real-world circulars from many brands, and (b) the import adapters for Marg/BUSY/Tally exports. No custom models, no hardware, no research risk. A 2–3 person team ships a credible v1 for a handful of brands in **3–4 months**; brand coverage then grows incrementally.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Distributor uses its own data to claim money a brand already owes it. No legal exposure. |
| Ethical — no harm / dark patterns | ✅ | Helps small businesses recover legitimately owed money. Clean. |
| Market exists (evidence above) | ✅ | 400k distributors, AICPDF grievances, quantified 30–50% missed-claim leakage. |
| 1–5 person team can build this | ✅ | Multimodal parsing + reconciliation + WhatsApp. 2–3 people, 3–4 months. |
| Launchable with <$50K / ₹40L | ✅ | AI inference is cheap; no capex; sales via associations and accountants. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 17/20 | Money leaking directly from a 3–5% margin; quantified 30–50% claim leakage. Hair-on-fire for the owner. |
| Demand evidence | 15 | 12/15 | Multiple independent signals + organized federation grievance. Docked because the direct customer-voice quotes are analyst/blog-sourced, not raw forum posts. |
| Build feasibility | 15 | 11/15 | Off-the-shelf AI, but messy-circular ingest + ERP export adapters are real engineering surface. |
| Distribution clarity | 15 | 12/15 | Federations + accountant channel + a killer contingency hook. Slight discount for offline, relationship-heavy motion. |
| Revenue mechanics | 15 | 11/15 | ₹-pricing works and the ROI is self-evident; success-fee model is powerful. Retention past the first big recovery is the open question. |
| Time to first revenue | 10 | 7/10 | Contingency "free audit" can close fast, but data import + trust-building push first paid past 4 weeks. |
| Defensibility | 10 | 5/10 | Moat is accumulated brand-circular coverage + workflow lock-in, not tech. Copyable, but circular-parsing library and distributor trust compound over time. |
| **Total** | **100** | **75/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`domain-expertise-required` · `operations-heavy` — you must genuinely understand FMCG trade mechanics (PTS/PTR/MRP, scheme slabs, claim windows) and be willing to work the offline association/accountant channel. This is not a pure product-led play.

### Key assumptions to validate (3–5)

1. **Assumption:** Distributors really are missing 30–50% of claims *recoverably* (i.e. within window, documentable). **How to test:** Run free audits on 15–20 distributors' last 6 months of data; measure real recoverable ₹ found.
2. **Assumption:** Owners will pay ₹2,499–4,999/mo (or a success fee) once shown the number. **How to test:** Convert those 15–20 audits; track close rate and preferred pricing model.
3. **Assumption:** Circular parsing generalizes across brands without per-brand hand-tuning that kills margins. **How to test:** Ingest 50 real circulars from 8–10 brands; measure extraction accuracy and manual-correction time.
4. **Assumption:** Marg/BUSY/Tally exports are clean enough to reconcile against. **How to test:** Pull real exports from 10 distributors; measure how much data cleaning is needed.

### Risk flags

1. **Trust/verification risk:** A distributor won't act on "you're owed ₹X" unless the number is airtight — a wrong claim submitted to a brand damages the distributor's relationship. Precision matters more than coverage.
2. **Brand-relationship risk:** Distributors fear antagonizing brands by aggressively claiming; the product must frame as "claim what you're legitimately owed," not "fight the company."
3. **Platform dependency:** Reliance on WhatsApp Business API and on ERP export formats that vendors could change.
4. **Retention risk:** If the big value is a one-time backlog recovery, ongoing subscription retention needs the alarm/ongoing-claim workflow to be genuinely sticky.

## 14. Structured verdict

```
Score:                  75/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Founder with FMCG-distribution domain knowledge + a small technical team; comfortable with offline association/accountant selling
Time to revenue:        6–10 weeks (contingency "free audit" → paid)
Capital to launch:      ₹8–15 lakh ($10–18K)
Top 3 assumptions to validate first:
  1. Real recoverable ₹ per distributor — run 15–20 free audits, measure found money
  2. Willingness to pay / preferred model — convert those audits, track close rate at ₹2,499–4,999/mo vs success-fee
  3. Circular parsing generalizes — ingest 50 circulars across 8–10 brands, measure accuracy + manual-correction time
Kill criteria:
  - Abandon if median recoverable claim found across 20 audits is <₹50k/distributor (ROI too thin to sell)
  - Abandon if circular-parsing accuracy stays below ~90% after tuning on 10 brands (per-brand hand-work kills the margin)
  - Abandon if <15% of audited distributors convert to paid within 60 days
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Get 6 months of scheme circulars + sales exports from **5 real distributors** (via one AICPDF contact or a friendly accountant). No product — just the raw data.
- **Day 3–4:** Hand-run the reconciliation (AI-assisted, manual where needed) and produce for each distributor a single sheet: *"Here is ₹X you were owed and appear not to have claimed, across these schemes, N of them still inside the claim window."*
- **Day 5:** Sit with each of the 5 owners, show the number, and ask two questions: (1) *Is this real money you actually missed?* (2) *Would you pay ₹3,000/mo — or 10% of what we recover — to never miss it again?*

**Falsifiable outcome:** If ≥3 of 5 confirm the missed money is real AND ≥3 of 5 say yes to a pricing model, build. If the recoverable numbers come back trivially small, or owners shrug, kill it — the entire thesis rests on the leak being large and felt.
