---
title: "Conformly — EAA accessibility dossier for small shops"
slug: eaa-accessibility-conformance-dossier
date: 2026-07-25
category: Compliance / Global — Small e-commerce merchants pulled into EAA scope by their EU customers
complexity: Medium
score: 72
verdict: GO
confidence: Medium
oneLiner: "Turns a small merchant's storefront into a court-ready EAA accessibility record — real fixes, published statement, dated proof."
tags:
  vertical: Compliance
  model: SaaS
  geography: Global
  secondary: [Compliance-driven, SMB, AI-agent, Solo-builder, e-commerce]
axes:
  problem: 15
  demand: 12
  build: 11
  distribution: 11
  revenue: 12
  time: 7
  defensibility: 4
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# Conformly — accessibility conformance dossier for EU-facing shops

## 1. One-liner

Turns a small merchant's storefront into a court-ready EAA accessibility record — real fixes, published statement, dated proof.

## 2. Trend signal — why now?

The European Accessibility Act (EAA) became enforceable across all 27 EU member states on **June 28, 2025**. This is not a "someday" law anymore — it's live and the machine is turning:

- **France filed the first EAA lawsuits in November 2025.** Three disability organisations sent formal legal notices to major retailers in July 2025; when they didn't act, the orgs filed emergency injunctions before the Tribunal judiciaire de Paris. In **June 2026 the court ordered Carrefour France** to make its e-commerce site and app fully accessible. That's a precedent, not a threat.
- **Sweden's regulator has already logged 124 public complaints** (110 services, 14 products). Enforcement actions and information requests are accelerating through 2026.
- **The law follows the customer, not the company.** A US, UK, or Australian brand with no EU entity is still in scope the moment it ships to an EU consumer — and must appoint an EU representative. Most non-EU merchants have no idea.
- **Overlays are now legally radioactive.** The FTC fined accessiBe **$1M in 2025** for claiming its widget "automatically complies." Courts reject overlays as compliance evidence; 800+ businesses running accessiBe were sued anyway. The one-line-of-JavaScript escape hatch is closed.

The pain moment: a merchant gets a legal notice, an EU-rep demand, or a "your store is inaccessible" complaint email — and discovers real remediation quotes start at **$25,000** and the "cheap" real tool (TestParty) starts at **$400–3,500/mo per storefront**, priced for Shopify Plus. They're a €40k/mo shop. They can't buy their way clean, and they don't even have the accessibility statement the law explicitly requires.

Provenance:
  - Signal 1 (Demand): EAA enforceable since 28 Jun 2025; French injunctions Nov 2025; Carrefour ordered Jun 2026; Sweden 124 complaints logged — https://www.levelaccess.com/blog/penalties-for-eaa-non-compliance/ , https://www.webyes.com/blogs/eaa-fines/ — 2026-07-25
  - Signal 2 (Feasibility): axe-core (free, WCAG 2.1/2.2 rules with exact code locations) + LLM remediation now produces real theme-level fixes and drafts the required conformance statement — https://github.com/dequelabs/axe-core , https://www.test-lab.ai/blog/accessibility-testing-agent — 2026-07-25
  - Signal 3 (Economic): Real audits $25–50K; TestParty source-code fixes $400–3,500/mo/storefront (Plus-priced); overlays (AudioEye $199–799/mo, UserWay $69–490/mo) legally rejected after FTC $1M accessiBe fine — https://testparty.ai/blog/wcag-compliance-cost-automated-vs-manual-audits , https://www.lflegal.com/2025/01/ftc-accessibe-million-dollar-fine/ — 2026-07-25
  Category: Regulatory arbitrage

## 3. The opportunity

Two incumbents, both wrong for this customer:

1. **Overlay vendors (AudioEye, UserWay, accessiBe)** — cheap ($69–799/mo), but the FTC and EU courts have now told everyone in plain language that widgets don't make you compliant and don't count as evidence. Buying one and thinking you're safe is the trap.
2. **Real remediation (TestParty, Deque, Level Access)** — actually fix source code, which is correct, but they're built and priced for Shopify Plus and enterprise ($400–3,500/mo per storefront, or $25–50K project audits). The single-operator merchant is invisible to them.

The gap is the merchant who is **genuinely in EAA scope, can't afford real remediation, and needs a defensible record — not a widget.** What a court/regulator actually accepts (per Carrefour) is evidence: a dated audit against WCAG 2.1 AA, real fixes applied, a published accessibility statement, and a documented remediation roadmap for anything not yet fixed. That's a *dossier*, and nobody sells it to small shops as a self-serve product.

Focused edge: **be platform-agnostic and non-EU-aware.** TestParty is Shopify-only. The freshest slice of scared merchants is the WooCommerce / Wix / custom / headless store run by a US/UK/AU brand that just learned the law follows their EU customer. Serve them.

## 4. Target market

- **Primary customer:** Owner-operator or single-dev small e-commerce merchant doing €20k–€500k/mo, selling into the EU, **not** on Shopify Plus. WooCommerce, Wix, Squarespace, BigCommerce, custom/headless. Often based *outside* the EU (US/UK/AU) and newly aware they're in scope.
- **Why they buy (their words):** "I got a legal notice / an EU-rep email / a complaint and real remediation quotes are $25K — I need to be *defensibly* compliant, and I need the statement, now, without hiring an agency."
- **Rough TAM reasoning:** EAA sweeps in any covered e-commerce service above the micro-enterprise floor (>10 employees OR >€2M) — plus every non-EU brand shipping to the EU. That's hundreds of thousands of stores across WooCommerce (millions of live stores globally) and the long tail of non-Shopify carts. Even 0.5% reachable at $79/mo is a large sub-$5M business.
- **Why now for them:** June 2025 deadline is behind them, first rulings landed mid-2026, and the overlay they may have bought was just publicly declared worthless. The "wait and see" window closed this year.

## 5. Product sketch (MVP)

- **One-click crawl + audit** of the storefront against WCAG 2.1 AA / EN 301 549, using axe-core plus an AI pass for the behavioral checks static tools miss (keyboard traps, focus order, meaningful alt text).
- **Plain-English severity report** — not 400 raw violations, but a ranked, deduplicated fix list a non-developer can understand, grouped by template (checkout, product page, nav).
- **Real code fixes, delivered as copy-paste snippets or a themed patch** — corrected alt text, form labels, ARIA, contrast tokens — scoped to the merchant's actual platform (WooCommerce hooks, Wix, custom HTML).
- **Auto-drafted accessibility statement** — the legally-required published statement, filled with the merchant's real conformance status and contact channel, ready to paste at /accessibility.
- **Dated remediation roadmap** for anything not auto-fixable, with target dates — the "we have a plan" artifact that satisfied the Carrefour-style expectation.
- **The Dossier: a timestamped PDF evidence pack** — audit date, standard tested, fixes applied, statement URL, roadmap — the thing you hand a lawyer or regulator.
- **Monthly re-scan + change alerts** — because a theme update or new app reintroduces violations, and the record has to stay current.

## 6. AI angle — what's load-bearing

Remove the AI and you have axe-core, which any dev can run for free — and which produces raw violations no merchant can act on. The AI is load-bearing in three places:

1. **Triage & translation** — turning hundreds of machine violations into a ranked, deduplicated, human-readable fix list scoped to *this* merchant's platform.
2. **Actual remediation drafting** — generating correct alt text from product images, rewriting labels, proposing ARIA/markup patches per platform. This is the work an agency bills $150/hr for.
3. **Statement + roadmap generation** — producing legally-shaped prose (conformance status, known limitations, remediation timeline, contact channel) that reads as a real compliance document, not a template with blanks.

The static scanner is the cheap commodity input; the AI is what a non-technical merchant is actually paying for.

## 7. Localization angle (if any)

The wedge *is* a geography arbitrage — but inverted. The product is global; the *scope trigger* is EU. The localization value is **EU-representative and per-member-state nuance**: fines and enforcement posture differ (Germany €100k/violation, France/Italy up to 5% of turnover, Sweden ~€900k), and the statement expectations vary. A version that says "you ship to Germany and France — here's what each expects, and here's your statement in EN + DE + FR" beats a generic WCAG report. Multilingual statement output (the EU languages of the markets the merchant sells to) is a concrete, defensible localization edge.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** $79/mo (single store, monthly re-scan, statement, dossier) → $199/mo (multi-locale statements, priority re-scan, EU-rep referral). One-time $149 "get-clean" audit+dossier for merchants who want a snapshot, not a subscription — a low-friction front door that converts to monthly.
- **ACV:** ~$1,100 (blended $79–199/mo with churn on the one-time buyers).
- **Rough math to $1M ARR:** ~1,050 stores × $79/mo × 12 ≈ $1.0M. Very reachable given the population.
- **Rough math to $5M ARR:** ~2,600 stores on the $199 tier, or a mix plus a per-store agency/reseller channel (web studios managing 20–100 client stores buying seats). Requires the agency channel to fire — see GTM.
- **Expansion path:** more stores per account (agencies), locale add-ons, ongoing monitoring, and an "EU-rep" concierge upsell (partner with an existing EU-rep firm, take a referral cut). ACV climbs from single-store to portfolio.

## 9. Go-to-market wedge — first 100 customers

- **Mine the public complaint/lawsuit trail.** Sweden's 124 logged complaints, French legal-notice targets, and national enforcement lists are public or semi-public. The *named* businesses and their lookalike competitors are a warm, terrified list. Cold email: "You (or a competitor) just got named under the EAA — here's your store's accessibility score and your missing statement, free."
- **Free instant scanner as the hook.** Public URL-in, score-out tool (like existing free WCAG checkers, but ending in "here's your dossier + statement for $149"). Rank for "EAA compliance [platform]" and "is my store EAA compliant" — merchants are actively googling this in 2026.
- **WooCommerce / Wix / BigCommerce app marketplaces + subreddits.** TestParty owns Shopify; these platforms have millions of stores and *no* dedicated real-remediation player. r/woocommerce, r/ecommerce, platform Facebook groups. Post the "overlays won't save you — here's what a court actually accepted (Carrefour)" explainer.
- **Web-studio / agency partner channel.** Studios that build WooCommerce/Wix stores for SMBs are getting the "am I liable?" calls from clients. Offer white-label dossiers at a per-store wholesale rate — they resell compliance without hiring an accessibility specialist.
- **Ride the enforcement news cycle.** Every new EAA ruling (there will be more in 2026–27) is a distribution event. Publish a plain-English "what this means for your store" within 24 hours, capture the search spike.

## 10. Build complexity — justification

**Medium.** The scanning core is off-the-shelf (axe-core, headless browser crawl) and the AI layer is standard LLM API work — no model training, no research breakthrough. The real work is (a) the per-platform fix-delivery adapters (WooCommerce vs Wix vs custom differ in how a merchant applies a patch), (b) getting the statement/roadmap output legally credible enough to actually be defensible, and (c) reliable re-scan + diffing. A technical founder plus a part-time accessibility/legal advisor ships a credible v1 in ~10–14 weeks. Domain accuracy is the risk, not engineering.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Helping merchants comply with a law; the product's honesty about "no tool guarantees compliance" is the FTC-safe posture |
| Ethical — no harm / dark patterns | ✅ | Explicitly the anti-overlay: real fixes + honest evidence, no "automatically compliant" claims |
| Market exists (evidence above) | ✅ | Live law, active lawsuits, priced-out customer segment, paying incumbents |
| 1–5 person team can build this | ✅ | axe-core + LLM + platform adapters; 10–14 weeks |
| Launchable with <$50K / ₹40L | ✅ | Off-the-shelf infra; main cost is a domain advisor |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 15/20 | Real, money-and-lawsuit pain, but episodic — spikes on a legal notice, then merchants procrastinate. Not daily hair-on-fire. |
| Demand evidence | 15 | 12/20→12/15 | Multiple hard signals: live enforcement, funded incumbents, public complaint counts, active search. Strong. |
| Build feasibility | 15 | 11/15 | Core is off-the-shelf; per-platform delivery + legally-credible output is the honest work. |
| Distribution clarity | 15 | 11/15 | Named lists (complaint/lawsuit trails), free-scanner hook, un-owned non-Shopify platforms. Agency channel unproven. |
| Revenue mechanics | 15 | 12/15 | Clear price, benchmarked against $25K audits and $400/mo TestParty. One-time buyers may not convert to monthly. |
| Time to first revenue | 10 | 7/10 | One-time $149 dossier can sell in week one off the free scanner; subscription conversion is slower. |
| Defensibility | 10 | 4/10 | Thin. axe-core is free; well-funded incumbents (TestParty) could move down-market. Moat is speed + non-Shopify focus + the evidence/statement workflow, not tech. |
| **Total** | **100** | **72/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required` — needs someone who can build the scanner/AI layer and a partner who genuinely understands WCAG/EN 301 549 and EU enforcement so the dossier is real, not theater.

### Key assumptions to validate (3–5)

1. **Assumption:** Small non-Shopify merchants will pay $79–149 for a *dossier* (evidence), not just a fix. **How to test:** Put up the free scanner + paid dossier CTA, drive 500 targeted merchants from complaint-adjacent lists, measure paid conversion.
2. **Assumption:** The AI-generated statement + roadmap is credible enough that a merchant/lawyer trusts it. **How to test:** Get 5 real accessibility/EU-compliance lawyers to red-team 10 generated dossiers; count how many they'd sign off as "reasonable evidence of good-faith effort."
3. **Assumption:** Merchants perceive real legal urgency (not "I'll deal with it later"). **How to test:** Cold-email 200 named/lookalike EAA-complaint targets; measure reply + demo-request rate. Kill signal is silence.
4. **Assumption:** Web studios will resell white-label dossiers. **How to test:** Pitch 15 WooCommerce/Wix studios on a wholesale per-store rate; get 3 to commit to a pilot batch.

### Risk flags

1. **Incumbent-move-down risk:** TestParty (funded, correct-approach) could launch a WooCommerce self-serve tier and eat the wedge. Speed and non-Shopify breadth are the only defense.
2. **Liability/positioning risk:** Post-accessiBe, any hint of "we make you compliant automatically" invites the FTC. The product must sell *evidence and good-faith remediation*, never a compliance guarantee — messaging discipline is existential.
3. **Enforcement-pace risk:** If EU regulators stay slow (still zero confirmed fines as of mid-2026), merchant urgency softens and the sale gets harder. The business is levered to the enforcement news cycle.
4. **Platform fragmentation:** Serving WooCommerce + Wix + custom + BigCommerce means N delivery adapters; each is maintenance surface. Over-broadening at v1 dilutes quality.

## 14. Structured verdict

```
Score:                  72/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder + part-time WCAG/EU-compliance advisor
Time to revenue:        4–8 weeks (one-time dossier off free scanner); subscription 2–3 months
Capital to launch:      ₹4–8 lakh ($5–10K), mostly advisor + infra
Top 3 assumptions to validate first:
  1. Merchants pay for the evidence/dossier, not just fixes — free-scanner → paid-dossier conversion test
  2. Generated statement + roadmap survive a compliance lawyer's red-team as "reasonable good-faith evidence"
  3. Named EAA-complaint-adjacent merchants reply to cold outreach with real urgency
Kill criteria:
  - Abandon if <2% of 500 targeted free-scanner users buy a paid dossier
  - Abandon if compliance lawyers reject the generated dossier as non-credible (fails assumption 2)
  - Abandon if a well-funded incumbent ships a $79/mo self-serve non-Shopify remediation tool before your v1
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Build the thinnest possible free scanner — URL in, axe-core + one AI triage pass out, plus an auto-drafted accessibility statement. No fixes yet. Wire a "Get your full dossier — $149" CTA that just books a call.
- **Day 3–4:** Assemble a 300-store target list from public EAA complaint/lawsuit trails + lookalike non-Shopify EU-shipping merchants. Cold-email: "Here's your store's accessibility score and your missing statement — free." Drive them to the scanner.
- **Day 5:** Decide. **Go if** ≥15 stores run the scanner *and* ≥3 book the paid-dossier call (i.e. real willingness to pay for evidence, not curiosity). **No-go if** replies are all "interesting, we'll wait" — that means the urgency isn't there yet and the enforcement cycle hasn't bitten hard enough.

Falsifiable outcome: paid-call bookings from a targeted list, not "people liked the free scanner."
