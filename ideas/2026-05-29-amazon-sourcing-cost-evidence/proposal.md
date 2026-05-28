---
title: "CostProof — sourcing-cost defender for Amazon sellers"
slug: amazon-sourcing-cost-evidence
date: 2026-05-29
category: Retail / Global
complexity: Medium
score: 75
verdict: GO
confidence: Medium
oneLiner: "Turns your supplier invoices into per-SKU sourcing-cost evidence Amazon accepts — so lost-inventory payouts hit true cost, not Amazon's lowball."
tags:
  vertical: Retail
  model: SaaS
  geography: Global
  secondary: [AI-agent, SMB, e-commerce, Workflow-automation, Solo-builder]
axes:
  problem: 16
  demand: 13
  build: 12
  distribution: 12
  revenue: 11
  time: 8
  defensibility: 3
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# CostProof — sourcing-cost defender for Amazon private-label sellers

## 1. One-liner

Turns your supplier invoices into per-SKU sourcing-cost evidence Amazon accepts — so lost-inventory payouts hit true cost, not Amazon's lowball estimate.

## 2. Trend signal — why now?

On **March 10–31, 2025**, Amazon flipped its FBA inventory-reimbursement policy: lost/damaged inventory is now reimbursed at **manufacturing (sourcing) cost**, not selling price. For a $50 item that costs $15 to source, the payout dropped ~70%. Amazon estimates your sourcing cost unless you submit proof — and sellers report the estimates run **roughly half of actual cost** (one verbatim forum case: Amazon estimated **$20.37** against a real **$53** manufacturing cost).

The kicker: when sellers try to correct the estimate, Amazon **rejects the re-evaluation** — forum threads titled *"Sourcing Cost is SO Broken"* and *"Amazon denying my sourcing cost Re-Evaluation, what can I do?"* show denials even for requests of *"$1 more than the estimated sourcing cost."* Amazon's accepted proof has rigid field requirements (document name, invoice number, buyer entity + address + VAT, SKU, quantity, unit price, currency) and accepts messy formats like **Chinese Fapiao**. In **January 2026** Amazon began rolling out a **bulk sourcing-cost upload** — confirming this is now an active, supported workflow sellers must operate, not a fringe edge case.

Meanwhile the recovery-tool market is consolidating *upmarket*: **Carbon6 sold to SPS Commerce for $210M** (2025), pulling the category toward enterprise brands and deduction-management — leaving the long-tail private-label seller to fight the sourcing-cost estimate alone.

Provenance:
  - Signal 1 (Demand): Seller-Central forum threads "Sourcing Cost is SO Broken" + "Amazon denying my sourcing cost Re-Evaluation" — sellers report estimates ~50% of actual ($20.37 vs $53) and rejected re-evaluations — https://sellercentral.amazon.com/seller-forums/discussions/t/8ff8d459-f90e-49a4-89ea-9f16d635e1eb — May 2026
  - Signal 2 (Feasibility): Amazon's Jan-2026 bulk sourcing-cost upload + rigid accepted-invoice field spec (incl. Chinese Fapiao) means structured AI extraction + bulk submission is now a supported, automatable workflow — https://gobrandwoven.com/resources/articles/new-amazon-fba-inventory-reimbursement-policy-managing-sourcing-cost/ — Jan 2026
  - Signal 3 (Economic): 30+ paid reimbursement tools at 12–25% commission (GETIDA, Shopkeeper, Jungle Scout) + Carbon6's $210M exit to SPS Commerce show real money and active M&A in Amazon-recovery — https://rollupeurope.com/p/who-said-miracles-don-t-happen-in-ecommerce-inside-carbon6-s-stunning-210m-exit-to-sps-commerce — 2025
  Category: Platform shift

## 3. The opportunity

Every existing recovery tool (GETIDA, Carbon6/Seller Investigators, Shopkeeper, Refunzo) is a **claim-filing engine**: it finds discrepancies in your FBA ledger and files for reimbursement, taking 12–25% of what's recovered. None of them solve the *new* bottleneck the March-2025 policy created: **the per-unit value Amazon pays out.** They recover the claim; Amazon then pays it at *its own lowballed sourcing-cost estimate*. The seller still loses 40–60% on every lost unit because the COGS evidence on file is Amazon's guess, not the seller's real invoice.

That's the gap. CostProof isn't a competing recovery tool — it's the **evidence layer underneath all of them.** It ingests the seller's actual supplier invoices (PDFs, photos, Fapiao, packing lists), extracts the per-SKU unit cost, maps it to ASIN/FNSKU, formats it into Amazon's exact accepted-proof schema, bulk-submits via the new sourcing-cost portal, and — critically — **drafts the rebuttal when Amazon rejects the re-evaluation.** Every reimbursement after that, whether the seller files it themselves or via GETIDA, pays out at true cost.

Incumbents won't build this well because (a) their commission model rewards *more claims*, not *higher per-claim value*, and (b) the consolidators are chasing enterprise deduction-management, not a $39/mo private-label seller drowning in WeChat invoice screenshots.

## 4. Target market

- **Primary customer:** Amazon private-label / wholesale FBA sellers doing **$200K–$5M/yr GMV**, 50–800 active SKUs, 1–3 person teams, sourcing from China/Vietnam/India. Owner-operator or their ops VA.
- **Why they buy:** "Amazon lost 40 of my units and reimbursed me $814 instead of $2,100 because their sourcing-cost estimate is half what I actually pay — and when I tried to fix it they rejected me." It's recurring, it's bleeding margin every month, and the fix is tedious-but-tractable paperwork they hate doing.
- **Rough TAM reasoning:** ~2M+ active Amazon sellers; ~54–67% run private label, the segment that owns supplier invoices and has real COGS to prove. Conservatively **300K–500K sellers** have enough SKUs + lost-inventory volume to feel this monthly. We need ~2,000 paying to hit $1M ARR.
- **Why now for them:** The policy is barely a year old, the bulk-upload portal just opened (Jan 2026), and sellers are *actively* hitting rejections this quarter. The pain is fresh and unsolved — not a someday problem.

## 5. Product sketch (MVP)

- **Invoice drop-zone**: upload/forward supplier invoices, Fapiao, packing lists (PDF, image, even WeChat screenshots); AI extracts unit cost, quantity, supplier, SKU.
- **SKU↔ASIN↔FNSKU mapper**: reconciles supplier line-items to the seller's Amazon catalog (pulled via SP-API), flags unmatched SKUs.
- **Amazon-schema formatter**: outputs each sourcing cost in Amazon's exact accepted-proof field structure (document name, invoice no., buyer entity/VAT, SKU, qty, unit price, currency) so it passes validation first try.
- **Bulk submitter**: pushes the whole catalog's sourcing costs through Amazon's bulk upload — no per-ASIN clicking across 500 SKUs.
- **Rejection rebuttal drafter**: when Amazon denies a re-evaluation, generates the appeal with the correct invoice citations and policy language.
- **Underpayment watcher**: monitors reimbursements; flags any payout where Amazon used an estimate below your documented cost, with the dollar delta.
- **Audit binder export**: per-SKU evidence pack (invoice + extracted fields + submission receipt) for the seller's records.

## 6. AI angle — what's load-bearing

Remove the AI and this is a data-entry sweatshop. The load-bearing work is **document understanding on genuinely messy inputs**: Chinese Fapiao in mixed CJK + English, photographed invoices, multi-currency packing lists, line-items that don't name the Amazon SKU. A 2026 vision-language model reads these, normalizes to per-unit cost, and maps fuzzy supplier descriptions to the seller's ASIN catalog. The second AI surface is the **rebuttal drafter** — reading Amazon's rejection reason and composing the policy-grounded appeal. Both are exactly the "collapse a 2-hour task into 2 minutes" shape: a seller with 400 SKUs and a folder of 80 supplier invoices goes from a multi-day spreadsheet slog to a reviewed bulk submission in under an hour.

## 7. Localization angle (if any)

Not a geography play, but a **supplier-origin** one: the hardest invoices are Chinese (Fapiao) and increasingly Vietnamese/Indian as sourcing diversifies. First-class Fapiao parsing is the technical moat-let — generic invoice OCR chokes on it. Sellers themselves are global (US/EU/UK marketplaces) so the product is English-UI, multi-currency, sells worldwide. No payment-rail localization needed (Stripe, seller cards).

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** Flat SaaS, not commission (the differentiator vs GETIDA's 25% cut). **Starter $39/mo** (up to 100 SKUs), **Growth $99/mo** (up to 500 SKUs + rejection rebuttals + underpayment watcher), **Pro $249/mo** (unlimited SKUs, multi-marketplace, VA seats). Plus a **$149 one-shot "Sourcing-Cost Catalog Audit"** for sellers who just want their whole catalog documented once before the next loss.
- **ACV:** ~$600 blended (mix skews Growth).
- **Math to $1M ARR:** ~1,700 sellers × $600 = $1.02M. At 300K addressable, that's **0.6% penetration** — not heroic.
- **Math to $5M ARR:** ~8,300 sellers × $600, or hold seller count and grow ACV via Pro/multi-marketplace + a per-recovered-dollar upsell. Would need an agency/aggregator reseller channel (people who manage 50–200 seller accounts).
- **Expansion path:** SKU-tier upgrades as catalogs grow; add a thin recovery-filing module later (optional, flat-fee, not commission) to capture the full workflow; white-label tier for Amazon agencies and VAs.

## 9. Go-to-market wedge — first 100 customers

- **Seller-Central forum + subreddit ambush:** the exact threads cited above ("Sourcing Cost is SO Broken", r/FulfillmentByAmazon, r/AmazonSeller) are full of sellers describing this pain *this month*. Reply with a Loom showing their $20.37-vs-$53 problem fixed in two minutes; DM the OPs. ~100 warm, self-identified targets already posted.
- **Free "Sourcing-Cost Gap" scanner:** connect SP-API read-only, show "Amazon's estimates are underpaying you $X across N SKUs" — a hard dollar number. Free audit → paid fix. This is the same wedge GETIDA used (free audit) but on the *value* side.
- **Amazon-agency / VA partnerships:** 50–200-account agencies feel this across their whole book. White-label or rev-share; one agency = dozens of seats.
- **YouTube/podcast FBA creators:** the FBA-education ecosystem (Helium 10 / Jungle Scout adjacent creators) makes content on every policy change; a clean "here's how to stop Amazon lowballing your COGS" sponsorship/affiliate fits their audience precisely.

## 10. Build complexity — justification

**Medium.** Off-the-shelf: SP-API for catalog + reimbursement/inventory reports, a 2026 vision-LLM for invoice/Fapiao extraction, standard web stack, Stripe. Custom work is the **SKU↔ASIN reconciliation** (fuzzy matching supplier line-items to the seller catalog) and the **Amazon-schema validator + bulk-submission flow**, which must track Amazon's evolving accepted-proof spec. SP-API approval (PII/restricted roles) adds onboarding friction but no custom infra. A 2-person team ships a credible v1 in **10–14 weeks**.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Seller submits their own genuine invoices; we format/transmit on their behalf. No circumvention. |
| Ethical — no harm / dark patterns | ✅ | Helps sellers claim *true* costs they're owed; no inflation of figures (that's fraud — explicitly disallowed). |
| Market exists (evidence above) | ✅ | Active forum complaints, 30+ paid recovery tools, $210M Carbon6 exit. |
| 1–5 person team can build this | ✅ | 2 people, ~10–14 weeks. |
| Launchable with <$50K / ₹40L | ✅ | Inference + SP-API + hosting; <$15K to launch. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | Bleeds margin monthly, sellers actively angry and searching — but it's a slow bleed, not hair-on-fire-this-second for every seller. |
| Demand evidence | 15 | 13/15 | Verbatim forum complaints, huge paid-adjacent market, fresh policy. Direct demand for *this specific* evidence-layer cut is inferred, not yet proven. |
| Build feasibility | 15 | 12/15 | SP-API + vision extraction is tractable; Fapiao parsing + schema-tracking are the real work. |
| Distribution clarity | 15 | 12/15 | Self-identified targets in known threads + free-scanner wedge + agency channel. Conversion math still a guess. |
| Revenue mechanics | 15 | 11/15 | Flat SaaS is clean and defensible vs commission, but $39–249 ACV needs volume; some sellers will balk at paying when "Amazon should just fix it." |
| Time to first revenue | 10 | 8/10 | Free-scanner-to-paid + pre-sellable audit; first dollars in 4–8 weeks of launch. |
| Defensibility | 10 | 3/10 | Thin. Incumbents *could* bolt this on; moat is Fapiao-parsing quality, agency relationships, and being the flat-fee anti-commission brand. |
| **Total** | **100** | **75/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` (SP-API + document AI + reconciliation), `domain-expertise-required` (must live inside Amazon reimbursement policy and update with it).

### Key assumptions to validate (3–5)

1. **Assumption:** Sellers will pay flat SaaS for *evidence prep* even though recovery tools "feel free" (commission-only). **How to test:** Show 30 sellers the free-scanner dollar-gap, then price-test $39/$99 — measure % who convert vs say "I'll just do it myself."
2. **Assumption:** AI can extract Fapiao/messy invoices accurately enough that Amazon accepts the submission first-try ≥80%. **How to test:** Run 50 real seller invoices through extraction → Amazon validation; measure acceptance rate.
3. **Assumption:** Amazon won't make this trivial by auto-honoring uploaded invoices (collapsing the rejection pain). **How to test:** Track re-evaluation rejection rate in forums over 60 days; if rejections drop to near-zero, the rebuttal value evaporates.
4. **Assumption:** The free SP-API gap-scanner converts at ≥5% to paid. **How to test:** Ship scanner-only landing page to 500 forum/subreddit visitors, measure signup→paid.

### Risk flags

1. **Platform dependency:** Entirely Amazon-policy-bound. If Amazon fixes the estimate accuracy, raises payouts, or auto-accepts invoices, the wedge shrinks. Mitigate by owning the broader COGS-evidence + reimbursement workflow, not just the rejection gap.
2. **Incumbent bolt-on:** GETIDA/SPS-Carbon6 could add sourcing-cost evidence to their suite. Our edge is flat-fee positioning + Fapiao quality + the long-tail they're abandoning.
3. **Market timing:** Could be slightly early if most sellers haven't yet felt a big loss under the new policy — or slightly late if Amazon's bulk tool gets good. The 12-month window post-policy is the sweet spot; move fast.
4. **SP-API gatekeeping:** Restricted-data role approval can stall onboarding; design a no-API manual-upload path so value isn't blocked on Amazon's approval queue.

## 14. Structured verdict

```
Score:                  75/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder who's run an FBA account (or has an FBA-seller co-founder/advisor); document-AI comfort.
Time to revenue:        4–8 weeks post-launch (free-scanner → paid; pre-sellable catalog audit)
Capital to launch:      $10–15K
Top 3 assumptions to validate first:
  1. Flat-fee willingness vs "free" commission tools — price-test 30 sellers off the free gap-scanner
  2. First-try Amazon acceptance ≥80% on real Fapiao/messy invoices — run 50 through extraction→validation
  3. Free-scanner → paid conversion ≥5% — ship scanner landing page to 500 targeted visitors
Kill criteria:
  - Abandon if <5 of 50 sellers shown a real dollar-gap convert to paid within 4 weeks
  - Abandon if Amazon ships invoice auto-acceptance or accurate auto-estimates that drop forum rejection rate to near-zero
  - Abandon if first-try Amazon validation acceptance stays below 60% (product can't deliver its core promise)
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Build the free "Sourcing-Cost Gap" mock: take 5 real sellers' SP-API reimbursement exports (or screenshots from forum posters), hand-compute Amazon-estimate-vs-actual-cost delta, show each their dollar number.
- **Day 3–4:** DM the 100+ self-identified sufferers in the cited Seller-Central / Reddit threads with a 90-second Loom of the gap + the fix. Offer the $149 one-shot catalog audit as a pre-sell.
- **Day 5:** Decide go/no-go. **Falsifiable bar:** ≥10 sellers reply engaged AND ≥5 pre-pay the $149 audit (or commit to a paid pilot). Below that, the pain isn't worth flat money to them — kill or re-shape.
