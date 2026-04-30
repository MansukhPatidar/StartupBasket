---
title: VendorPoke — WhatsApp ITC vendor-chase for India MSMEs
slug: vendorpoke-itc-2b-vendor-chase
date: 2026-05-01
category: Compliance SaaS / India MSME
complexity: Medium
score: 83
verdict: STRONG GO
confidence: High
oneLiner: WhatsApp AI agent that chases defaulting vendors so India MSMEs unblock GSTR-3B filing under GST 2.0.
tags:
  vertical: Compliance
  model: SaaS
  geography: India
  secondary: [WhatsApp-first, Multilingual, AI-agent, GST, MSME, SMB, Tally-integration, Regulatory-driven]
axes:
  problem: 18
  demand: 14
  build: 12
  distribution: 13
  revenue: 13
  time: 8
  defensibility: 5
founderFit: [technical-heavy, domain-expertise-required]
featured: true
---

# VendorPoke — WhatsApp ITC vendor-chase for India MSMEs

## 1. One-liner

WhatsApp AI agent that chases defaulting vendors so India MSMEs unblock GSTR-3B filing under GST 2.0.

## 2. Trend signal — why now?

The GST regime in India just shifted from "soft warning" to "hard wall." From **April 1, 2026**, the GSTN portal **blocks GSTR-3B filing** if claimed ITC exceeds what's auto-populated in GSTR-2B. No filing = ₹50–₹200/day late fee, blocked e-way bills, and stuck inventory. Rule 37 (180-day reversal for unpaid suppliers) became auto-enforced from January 2026. CAclubindia and CMAknowledge are calling it the "ticking tax bomb." Industry data: 70% of ITC disputes now stem from 2B mismatches; 25% of small businesses face ITC blocks because their suppliers didn't file GSTR-1 on time; 55% of SME ITC leakage traces to late supplier filings.

The pain is monthly. Every 1st–10th of the month, a Tally-using owner or in-house accountant downloads GSTR-2B, opens Excel, plays "spot the missing invoice," then opens WhatsApp and starts manually nudging 5–50 vendors. From this April, missing the 11th = portal blocks you.

Provenance:
  - Signal 1 (demand): GST 2.0 ITC Hard Block effective April 1, 2026 — GSTR-3B filing physically blocked on 2B mismatch — caclubindia.com/articles/the-portal-will-block-you, cmaknowledge.in/2026/04/gst-2-0-10-brutal-changes — April 2026
  - Signal 2 (feasibility): WhatsApp Business API + multilingual LLMs cheap enough for per-vendor automated chase (AiSensy ₹FREE/Wati/ItTalk ₹990/mo), GSP APIs to fetch GSTR-2B at ₹8K/yr — aisensy.com/pricing, gsthero.com/gst-suvidha-provider-gsp — Apr 2026
  - Signal 3 (economic): 1.51 crore active GST registrations; existing reconcile tools (ClearTax, IRIS, Mysa) priced ₹40K–₹1L/yr — out of reach for ₹50L–₹5cr-turnover MSMEs; 25% of SMBs already facing ITC blocks — pib.gov.in/PressNoteDetails (GST collections), aiaccountant.com/blog/gst-reconciliation-services-smes-india — 2025-2026
  Category: Regulatory arbitrage

## 3. The opportunity

The reconciliation tooling market is mature but **mis-segmented**. ClearTax, IRIS, Mysa, Suvit — all built for CA firms or mid-market. Pricing starts at ₹40K/year and goes to ₹1L+. Tally itself ships a 2B reconciliation report but **no vendor-chase loop** — the most painful part. The MSME-owner segment (₹50L–₹5cr turnover, 1–10 employees, runs Tally + Excel + WhatsApp) gets nothing affordable that closes the loop.

The gap: a self-serve tool an owner can subscribe to without a CA, that
1. Auto-fetches GSTR-2B (via GSP API or upload),
2. Auto-matches to a Tally export or pasted purchase register,
3. Generates a vendor-by-vendor "ITC at risk" list with rupee impact,
4. Sends each defaulting vendor a polite, **multilingual WhatsApp nudge** ("Sir/Ma'am, our records show invoice #INV-1234 of ₹X dated Y not yet uploaded in your GSTR-1. Filing deadline is the 11th. Please file or share status.") with smart escalation,
5. Logs replies, auto-reconciles when invoice appears in next 2B, and surfaces "habitual defaulters" the owner should drop.

Incumbents won't ship this loop because their buyer is a CA who already has their own WhatsApp groups; the loop is annoying for them. For an MSME owner, it's the entire product.

## 4. Target market

- **Primary customer:** ₹50L–₹5cr turnover MSME owners or their in-house accountants. Manufacturing, B2B trading, contract services. Primarily Tier-1/Tier-2 cities. The owner is GST-aware, signs returns themselves, runs Tally/Busy/Vyapar, and manually deals with 20–200 monthly purchase invoices.
- **Why they buy:** "If I miss the 11th, my e-way bills stop and my inventory sits at the warehouse. My CA tells me to chase vendors but I have 60 of them." Pain is a hair-on-fire monthly cycle and now a portal-enforced one.
- **Rough TAM:** Of 1.51cr GST registrations, ~30–50 lakh businesses sit in this turnover band (above ₹40L exemption, below ₹5cr e-invoice mandate as of FY25-26). At ₹999–₹2,499/mo, even a 0.5% capture = 15,000–25,000 paying customers = ₹18–₹75cr ARR. Comfortably $5M-ARR territory.
- **Why now for them:** April 1, 2026 hard block was widely covered by every CA newsletter and tax YouTuber in March-April 2026. The fear is freshly installed. Every monthly cycle from May onward will produce blocked filings until they fix the loop.

## 5. Product sketch (MVP)

- **Plug your data**: connect via GSP API (auto-pull GSTR-2B) OR upload Tally export + GSTR-2B JSON. Single-GSTIN, single-tenant, owner-friendly.
- **ITC-at-risk dashboard**: "₹2.4L of ITC at risk this month, 17 missing invoices across 9 vendors, ₹X locked under Rule 37 180-day clock."
- **Vendor scorecard**: each vendor with filing reliability, average lag, total ITC blocked YTD, number of times rescued.
- **One-click WhatsApp chase**: pre-templated polite nudges in Hindi/Marathi/Gujarati/Tamil/Telugu/Kannada/Bengali/English, sent from your registered WABA number to each defaulting vendor with the exact invoice number/date/amount and PDF attached. 3-step escalation cadence (Day 1 polite, Day 4 firm, Day 8 legal note about Rule 37 + supplier-penalty clause).
- **Reply-handling agent**: parses vendor WhatsApp replies ("filed yesterday", "GSTIN was wrong, will amend", "chhutti pe hu bhaiya") and either marks resolved, escalates, or flags for owner attention.
- **Supplier-penalty clause generator**: produces a one-page agreement clause MSMEs can paste into purchase orders (penalty for delayed filing causing ITC loss) — free trust-builder.
- **Auto-reconcile**: when next month's 2B includes the previously-missing invoice, mark the case closed and update vendor scorecard.
- **CA share-link** (optional): share a read-only dashboard URL with your CA so they don't ask for Excel exports.

## 6. AI angle — what's load-bearing

AI is doing real work in three places:
1. **Multilingual nudge generation**: each WhatsApp message is personalised in the vendor's preferred language with the exact invoice context. Removing the LLM and you're back to manual copy-paste — the whole product collapses.
2. **Reply parsing**: Indian vendor WhatsApp replies are messy (Hinglish, voice notes, partial info, "ok done" with no proof). Whisper + Hindi-tuned LLM turns them into structured outcomes (filed / will-file-by-date / disputed / GSTIN-error / no-response). Without this, owner is back in the WhatsApp swamp.
3. **Vendor risk scoring**: pattern-mining historical fileing behaviour (Vendor X always files on the 13th; Vendor Y misses 4 of 12 months) to surface "drop these 3 vendors" insight that flat reports don't give.

Strip the AI, and you have yet another dashboard. Keep it, and you replace 4 hours of monthly white-collar work for ~₹100/day.

## 7. Localization angle

This is **India-only by design**. Wedge is GST regulation, WhatsApp ubiquity, and rupee pricing.

- Language: Hindi + 7 Indian languages on WhatsApp templates.
- Payment: UPI auto-debit + Razorpay subscription, ₹999/mo and ₹2,499/mo tiers (works where $49/mo doesn't).
- Compliance: Built around GSTN APIs and IMS (Invoice Management System) launched 2024.
- Distribution: WhatsApp-first onboarding, regional CA YouTuber partnerships, vernacular content.

There is no global play here. That's a feature — incumbents global-first won't bother to ship the WhatsApp loop in 8 languages.

## 8. Business model — path to $1M–$5M ARR

- **Pricing**:
  - Starter: ₹999/mo — 1 GSTIN, up to 200 invoices/mo, 100 WhatsApp chases/mo, English+Hindi.
  - Pro: ₹2,499/mo — 1 GSTIN, unlimited invoices, unlimited chases, all 8 languages, vendor scorecard, supplier-clause generator.
  - CA Plan: ₹4,999/mo — up to 10 GSTINs (CA serving multiple SMB clients).
- **ACV**: blended ₹18,000/yr (~$215). Dominated by Pro tier.
- **Path to $1M ARR (≈₹8.3cr)**: ~4,600 paying customers on blended ACV. Out of 30–50 lakh target MSMEs, that's <0.02% capture.
- **Path to $5M ARR (≈₹41.5cr)**: ~23,000 paying customers OR mix-shift to CA Plan (~5,000 CA firms × ₹60K/yr = ₹30cr alone).
- **Expansion**: TDS reconciliation copilot, e-invoice auto-generation, MSME Samadhaan delayed-payment dunning (Section 43B(h) hooks). Each adds ₹500–₹1,000/mo in upsell.
- **Unit economics**: WhatsApp template messages ~₹0.30–₹0.80 each; GSP API ~₹0.50/GSTIN/month bulk; LLM inference negligible (Hindi-tuned 8B). Per-customer COGS at Pro tier ~₹150–₹250/mo against ₹2,499 price = 90% gross margin.

## 9. Go-to-market wedge — first 100 customers

Not "SEO and content." Concrete:

1. **CA YouTuber tie-ups**: There are 30–50 Indian CA YouTubers with 100K–2M subs (CA Guru-Ji, CA Rachana Phadke Ranade, FinTaxPro). They've already made hard-block explainer videos in April 2026. Pay for one sponsored "how I solved this for my MSME clients" video each — ₹50K–₹2L per partnership, target 8 partnerships = first 200–500 trial signups.
2. **Cold WhatsApp on MCA21 directors database**: scrape ~50,000 director phone numbers of recently-incorporated Pvt Ltds in target turnover band, send a single template message: "Sir, did your accountant tell you GSTR-3B will block from this April if vendors don't file? We can chase them automatically. Free 1-month trial." Realistic 0.5–1% conversion = 250–500 trials, 20–30% paid = 50–150 customers.
3. **CA firm channel**: 30K+ practising CAs handle 10+ MSME clients each. Offer ₹500/customer-month revenue share. Pre-sell 50 CAs to bring their bottom 10 SMB clients onto our Starter tier (CA still does the filing; we do the vendor chase). 50 CAs × 10 clients = 500 seats.
4. **Targeted launch on Twitter**: April–May 2026 is peak hard-block panic in Indian CA Twitter. Reply to every viral panic thread with a 30-sec demo loom. Cheap, organic, time-boxed (4 weeks of opportunity window).
5. **Tier-2 MSME WhatsApp groups**: there are thousands of city-specific industry WhatsApp groups (Faridabad MSME, Coimbatore Engineering, Surat Textile). Pay regional ops contractors ₹15K/month each to seed demos in 50 groups apiece.

First 100 paying customers achievable in 60–90 days post-launch with ₹3–8 lakh of paid acquisition. Realistic.

## 10. Build complexity — justification

Medium. v1 is a Next.js dashboard + Postgres + a handful of integrations:
- **GSP API access** (license/reseller agreement with Adaequare, MasterGST, or GST Hero ~₹1–3 lakh upfront + per-call fees) — buy, don't build.
- **WhatsApp Business API** via AiSensy/Wati or direct Cloud API.
- **Tally TDL or CSV import** for purchase register — Tally export is a 2-day effort.
- **LLM**: Hindi/multilingual via cheap providers (Sarvam, Llama-3 fine-tunes, or Anthropic). Generate templates + parse replies.
- **Templated WhatsApp messages**: WABA approval cycle ~1 week; we ship 8 templates × 8 languages = 64 templates day 1.

A pair (1 backend, 1 full-stack) ships v1 in 10–14 weeks. The hardest part isn't engineering, it's WABA template approval discipline and GSP onboarding paperwork. Both are knowable, time-boxed unknowns. Medium, not Low — but well within the 6-month budget.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Read-only on GSTN data with user consent; WABA template-compliant outbound. |
| Ethical — no harm / dark patterns | ✅ | Polite nudges, opt-out instructions, no scare-marketing. |
| Market exists (evidence above) | ✅ | 1.51cr GST registrations, 25% of SMBs already report ITC blocks; April 1 hard-block live. |
| 1–5 person team can build this | ✅ | Pair + part-time ops/content for 14 weeks. |
| Launchable with <$50K / ₹40L | ✅ | GSP license ~₹2L, WABA setup ~₹50K, infra ~₹50K, ads ~₹5L = ₹8L launch budget. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 18/20 | Hair-on-fire, monthly, now portal-enforced. Loses real money (late fees, blocked e-way bills, stuck working capital). |
| Demand evidence | 15 | 14/15 | Multiple independent signals: regulatory change (April 1 2026), industry data (70% of ITC disputes from 2B mismatches), incumbent pricing gap, viral CA YouTuber panic videos. |
| Build feasibility | 15 | 12/15 | Pair in 10–14 weeks. GSP/WABA paperwork is the slowest path. Engineering is mostly integration plumbing + LLM templating. |
| Distribution clarity | 15 | 13/15 | Named CA YouTubers, MCA21 director list, CA partner channel, time-boxed Twitter window. Conversion math holds. |
| Revenue mechanics | 15 | 13/15 | ₹999–₹2,499/mo benchmarked against existing tools and WhatsApp tools at similar price. ACV math works at <0.05% market capture for $1M ARR. |
| Time to first revenue | 10 | 8/10 | Pre-sell during build, 1-week trial, paid by week 4 post-launch. Annual upfront discount accelerates. |
| Defensibility | 10 | 5/10 | Soft moat: 6–12-month head start, vendor-scorecard data accretion, WABA template approval head start, regional language quality. Low patent moat — copyable in 6 months by an incumbent if they wake up. |
| **Total** | **100** | **83/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` (LLM + integration plumbing) · `domain-expertise-required` (GST literate; ideally a co-founder who has filed GSTRs themselves and felt this pain).

### Key assumptions to validate (3–5)

1. **Assumption:** MSME owners (not just CAs) will pay ₹999–₹2,499/mo for a self-serve tool. **How to test:** 30 in-person interviews + a no-code Carrd page with paid waitlist (₹499 deposit) over 2 weeks. Target ≥40 signups.
2. **Assumption:** Vendors actually respond to automated WhatsApp nudges enough to make this useful (not just spam-tuned out). **How to test:** Run 5 friendly MSMEs through a manual concierge version for one filing cycle. Measure response rate ≥30% and recovered-ITC ≥40%.
3. **Assumption:** GSP partnership at MSME-friendly per-call pricing is achievable. **How to test:** RFQ to Adaequare, MasterGST, GST Hero, IRIS — get formal quotes within 2 weeks. Target ≤₹3/GSTR-2B fetch.
4. **Assumption:** WABA template approval for vendor-chase content is granted (Meta sometimes rejects "promotional" framing). **How to test:** Submit 5 polite-nudge templates in week 1 of build. Approval ≥3/5.
5. **Assumption:** CA partner channel will share revenue, not block out of fear of disintermediation. **How to test:** 10 CA partner pitches; ≥3 sign LOI for ₹500/customer-month rev-share.

### Risk flags

1. **Regulatory drift**: Government could relax hard-block rules (CMAknowledge already speculates "amnesty" possibilities). Mitigation: even soft rules still produce monthly chase pain. Demand persists.
2. **Platform dependency**: Heavy reliance on WhatsApp Business API (Meta) and GSTN APIs (govt-controlled). Both are stable but not ours. Mitigation: SMS + email fallback channels; multi-GSP redundancy.
3. **Incumbent counter-attack**: Tally, Vyapar, ClearTax could ship this loop in 3–6 months. Mitigation: speed (be first to MSME mind-share), regional language depth, owner-not-CA UX, and CA channel rev-share lock-in.
4. **WABA template fatigue**: vendors may mark messages as spam, hurting our number rating. Mitigation: 24-hour cool-off windows, one-click opt-out for vendors, professional template language.

## 14. Structured verdict

```
Score:                  83/100
Verdict:                STRONG GO
Confidence:             High
Best-fit builder:       Indian technical founder with ex-CA or fintech-compliance co-founder.
                        Familiarity with GSTN/Tally ecosystem mandatory.
Time to revenue:        12–14 weeks to first paid customer (concierge from week 6).
Capital to launch:      ₹8–12 lakh ($10–15K) — GSP license, WABA setup,
                        first paid acquisition pulse, infra.
Top 3 assumptions to validate first:
  1. MSME owners (not just CAs) will pay ₹999–₹2,499/mo — test via paid waitlist.
  2. Vendors respond to automated WhatsApp nudges ≥30% — test via concierge.
  3. GSP per-call pricing ≤₹3/fetch — test via formal RFQ.
Kill criteria:
  - Abandon if <15% conversion on 100 cold WhatsApp/CA-channel demos to paid trial.
  - Abandon if vendor reply-rate to automated nudges <15% in 30-day concierge test.
  - Abandon if GSTN announces deferral/abolition of April 1 hard-block before our launch.
```

## 15. Next step — 1-week validation sprint

If I had one week to prove this idea is real before committing to build:

- **Day 1**: Build a single Carrd landing page with the value prop, 1-min Loom demo of a click-through wireframe, and a ₹499 paid-waitlist Razorpay button.
- **Day 2**: Cold DM 50 MSME owners on LinkedIn + 50 CAs on Twitter linking to the page. Post in 5 city-specific MSME WhatsApp groups.
- **Day 3**: 30-min calls with 5 MSME owners. Show them the wireframe; ask: "If this existed today at ₹1,999/mo, would you pay?" Get a number and a credit-card-ready intent.
- **Day 4**: Submit 3 WABA template requests to Meta to test approval rate. RFQ 4 GSPs for per-call pricing. Talk to 3 CA YouTubers about sponsorship rates.
- **Day 5**: Decide go / no-go on the bar:
  - **Go**: ≥10 paid waitlist deposits, ≥3/5 owner interviews say "yes, would pay ₹1,999+", ≥2/3 WABA templates approved, ≥1 GSP quote ≤₹3/fetch.
  - **No-go**: anything less.

Falsifiable. Cheap. Time-boxed.
