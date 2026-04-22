---
title: "FixA11y — AI website accessibility fixer for SMBs"
slug: ai-accessibility-fixer
date: 2026-04-22
category: Compliance SaaS / US+EU SMB
complexity: Medium
score: 81
verdict: STRONG GO
confidence: High
oneLiner: AI that scans your website and generates real code fixes for WCAG compliance — no overlays, no $5K audits.
tags:
  vertical: Compliance
  model: SaaS
  geography: US
  secondary: [AI-agent, SMB, Compliance-driven, Shopify, WordPress, E-commerce]
founderFit: [technical-heavy]
featured: true
---

# FixA11y

## 1. One-liner

AI that scans your website and generates real code fixes for WCAG compliance — no overlays, no $5K audits.

## 2. Trend signal — why now?

The accessibility compliance market just hit an inflection point where fear, regulation, and technology all converged in the same 12-month window.

**Lawsuit tsunami**: ADA website accessibility lawsuits rose 37% in 2025, with 3,117 federal filings — 77% targeting businesses under $25M revenue. Online retailers account for 69% of cases. The average settlement runs $18K–$40K including legal fees and remediation. Some small businesses have filed for bankruptcy or taken their websites offline entirely.

**Overlays are dead**: In April 2025, the FTC fined accessiBe $1 million for falsely claiming its AI overlay could make websites WCAG-compliant. The FTC now bars accessiBe from making compliance claims. UserWay is being sued in a class-action by a customer (Bloomsybox) who installed the overlay, got sued anyway within six months, and discovered UserWay's "$1M legal pledge" was structured to never pay out. In 2024 alone, 1,023 lawsuits were filed against companies using overlays.

**Regulatory ratchet tightening**: The European Accessibility Act became enforceable June 28, 2025, with fines up to €3M. The US DOJ's formal adoption of WCAG 2.1 AA for government sites takes effect April 24, 2026. Courts already use WCAG 2.1 AA as the benchmark for commercial sites — the DOJ rule makes that precedent harder to challenge.

**AI can now fix code, not just flag it**: TestParty raised $4M seed (June 2024) proving that AI can generate actual source-code remediation — alt text, ARIA labels, focus management, contrast fixes — not DOM-level overlays that vanish when you stop paying. The technology is here; the distribution to small businesses is not.

Provenance:
  - Signal 1: ADA website accessibility lawsuits rose 37% in 2025 to 3,117 filings, 77% targeting sub-$25M businesses — https://krdo.com/stacker-money/2026/01/14/accessibility-lawsuits-rose-by-37-in-2025-why-small-businesses-can-no-longer-ignore-their-websites/ — 2026-01-14
  - Signal 2: FTC fined accessiBe $1M for false WCAG compliance claims; UserWay class-action lawsuit proceeding — https://www.lflegal.com/2025/02/userway-overlay-lawsuit/ — 2025-02
  - Signal 3: European Accessibility Act enforcement began June 2025; US DOJ WCAG 2.1 AA rule effective April 24, 2026 — https://accessible.org/2026-ada-website-compliance-lawsuits-ai/ — 2026-01
  Category: Regulatory arbitrage

## 3. The opportunity

95.9% of the top million websites fail basic WCAG 2.2 standards. Small business owners know they're exposed — they just don't know how to fix it without spending $5K–$25K on an accessibility audit and remediation service.

The overlay market (accessiBe, UserWay, EqualWeb) trained millions of businesses to believe they could solve accessibility with a single line of JavaScript. That illusion is collapsing. accessiBe got fined. UserWay is getting sued. The overlay approach doesn't survive a legal challenge because it doesn't fix the underlying code — it paints over it with DOM manipulations that interfere with actual assistive technology.

The gap: small businesses need code-level fixes at overlay prices. TestParty does code-level fixes but targets developers and agencies (enterprise-adjacent sales motion). There's no self-serve, CMS-native tool that a non-technical Shopify or WordPress store owner can use to get real accessibility fixes deployed to their site for $99/month.

FixA11y fills that gap. Scan the site, generate real fixes (alt text, ARIA attributes, contrast changes, keyboard navigation, form labels), push them to the store through a Shopify app or WordPress plugin — not as a JavaScript overlay but as actual theme/template modifications. The fix persists even if the customer cancels.

## 4. Target market

- **Primary customer:** US-based e-commerce store owners on Shopify (5.5M+ stores) and WordPress/WooCommerce (39% of all websites), with $500K–$25M annual revenue, 1–20 employees
- **Why they buy:** They're terrified of ADA lawsuits. They've heard about overlays being exposed as scams. They can't afford a $5K–$25K manual audit. They need something that actually fixes their site and gives them documentation to prove compliance effort if challenged.
- **Rough TAM reasoning:** 5.5M Shopify stores + ~10M WooCommerce sites globally. Even filtering to US-only and >$500K revenue, you're looking at 500K–1M potential customers. At $99/mo average, even 5,000 customers = $6M ARR.
- **Why now for them:** The April 24, 2026 DOJ deadline is two days away. The accessiBe FTC fine and UserWay lawsuit made overlays radioactive. They need a real solution and they need it this month.

## 5. Product sketch (MVP)

- One-click site scan that crawls up to 500 pages and identifies every WCAG 2.1 AA violation with severity ranking
- AI-generated code fixes for each issue — actual HTML/CSS/ARIA changes, not overlay injections
- Shopify app that applies fixes to the store's theme files directly (with version control / rollback)
- WordPress plugin that patches theme templates and content at the code level
- Plain-English compliance report: "Here's what we found, here's what we fixed, here's what still needs manual review"
- VPAT (Voluntary Product Accessibility Template) auto-generation for customers who need to prove compliance effort
- Monthly re-scan with diff report: "3 new issues since last scan" with one-click fix
- Lawsuit response kit: template letter + compliance evidence package for businesses that receive a demand letter

## 6. AI angle — what's load-bearing

AI is doing the actual work here, not decorating a dashboard:

- **Computer vision** scans rendered pages to detect contrast failures, missing focus indicators, and layout issues that DOM analysis alone misses
- **LLM-powered alt text generation** writes contextually accurate image descriptions (not generic "image of a product" — actual descriptions like "Red leather crossbody bag with gold clasp, shown from front angle")
- **Code generation** produces the specific HTML/CSS/ARIA fixes for each violation, adapted to the target CMS's theme architecture (Shopify Liquid vs. WordPress PHP)
- **Natural language reporting** translates technical WCAG criteria into business-owner language: "Screen readers can't navigate your checkout form because the input fields don't have labels"

Without the AI, you'd need a $150/hr accessibility consultant doing manual audits. The AI collapses a 20-hour audit into a 5-minute scan and generates fixes that would take a developer 10–40 hours to implement manually.

## 7. Localization angle (if any)

Primary play is US market (where lawsuit volume is highest), with natural expansion to EU (EAA enforcement began June 2025, fines up to €3M). The product itself needs minimal localization — WCAG is a global standard. The compliance documentation and lawsuit response kit are jurisdiction-specific, but that's content, not product architecture.

Secondary: Canada (AODA), Australia (DDA), UK (Equality Act 2010). Each has accessibility requirements with increasing enforcement. The product is the same; the compliance packaging adapts.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** $79/mo (Starter: up to 50 pages, monthly scan), $149/mo (Growth: up to 500 pages, weekly scan, VPAT), $299/mo (Pro: unlimited pages, daily scan, lawsuit response kit, priority support)
- **ACV:** ~$1,500/year at the Growth tier (most common)
- **Rough math to $1M ARR:** 670 customers × $1,500/year = $1M ARR
- **Rough math to $5M ARR:** 3,350 customers × $1,500/year = $5M ARR. Achievable with Shopify App Store distribution alone (5.5M stores, 69% of ADA lawsuits target e-commerce).
- **Expansion path:** Agency tier ($499/mo for managing multiple client sites). White-label for web dev agencies. Per-scan pricing for one-time audit customers who don't want a subscription.

## 9. Go-to-market wedge — first 100 customers

1. **Shopify App Store launch:** List in the Accessibility category (currently dominated by overlay widgets). Position explicitly as "Not an overlay — real code fixes." The accessiBe FTC fine creates a massive trust vacuum. Shopify store owners actively searching for alternatives right now.
2. **Target the already-sued:** PACER filings for ADA website lawsuits are public record. Scrape the 2025 defendant list (3,117 filings), filter to e-commerce businesses, send personalized outreach: "You were sued for accessibility violations. Here's how to fix your site so it doesn't happen again — and documentation that proves you did."
3. **Reddit + Shopify Community seeding:** r/shopify, r/ecommerce, r/smallbusiness all have active threads about ADA lawsuits. Post case studies, answer questions, link to free scan tool (scan is free, fixes are paid).
4. **Web agency partnerships:** Identify 50 Shopify/WordPress agencies that build stores for small businesses. Offer them a white-label or referral arrangement — they get asked about accessibility constantly and have no good answer.
5. **Content play on the April 2026 DOJ deadline:** "The DOJ just made WCAG 2.1 AA the law. Here's what it means for your Shopify store." Publish the day the rule takes effect. Ride the news cycle.

## 10. Build complexity — justification

**Medium.** The core scanner uses existing accessibility testing libraries (axe-core, pa11y) augmented with AI for fix generation. The Shopify app and WordPress plugin require platform-specific integration work — Shopify's Theme Access API and WordPress's hooks/filters system. The AI fix generation needs prompt engineering and CMS-specific code templates, not custom model training. LLM APIs (Claude, GPT-4) handle the code generation and natural language reporting. A 2-person technical team ships v1 in 10–14 weeks.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Helping businesses comply with ADA/WCAG is straightforwardly legal. No regulatory approval needed. |
| Ethical — no harm / dark patterns | ✅ | Directly helps disabled users access websites. Aligned with accessibility advocacy goals. |
| Market exists (evidence above) | ✅ | 3,117 lawsuits in 2025 (+37% YoY), 95.9% of websites non-compliant, $5K–$25K current remediation cost. |
| 1–5 person team can build this | ✅ | Scanner + AI fix gen + CMS plugins. 2–3 engineers, 10–14 weeks to v1. |
| Launchable with <$50K / ₹40L | ✅ | API costs for LLMs + hosting. No hardware. Main cost is engineering time. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 18/20 | Hair-on-fire. Businesses are getting sued, settlements cost $18K–$40K, some have gone bankrupt. The problem is felt daily as every new product listing creates new accessibility debt. |
| Demand evidence | 15 | 14/15 | 3,117 lawsuits in 2025, 37% growth, $1M FTC fine killed the leading alternative, 95.9% of sites non-compliant. Multiple strong independent signals. |
| Build feasibility | 15 | 12/15 | Solid foundation in axe-core + LLM APIs. CMS-specific plugin development adds 4–6 weeks. Not trivial but well within a small team's capability. |
| Distribution clarity | 15 | 13/15 | Shopify App Store is a named, high-intent channel. PACER lawsuit scraping provides a warm outreach list. The accessiBe/UserWay trust collapse creates a demand vacuum. |
| Revenue mechanics | 15 | 12/15 | $79–$299/mo pricing benchmarked against overlays ($49–$499/mo) and manual audits ($5K–$25K). Clear value at the Growth tier. Conversion and retention assumptions need validation. |
| Time to first revenue | 10 | 7/10 | Shopify App Store has built-in billing. First revenue within 4–6 weeks of App Store approval. Some sales cycle for larger stores. |
| Defensibility | 10 | 5/10 | Execution moat only at first. Data moat builds over time as fix patterns compound across thousands of CMS themes. CMS-specific fix accuracy improves with usage. Copyable but 6-month head start matters. |
| **Total** | **100** | **81/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` — needs strong frontend engineering (Shopify Liquid, WordPress PHP, accessibility standards) plus AI/LLM integration. Domain knowledge of WCAG standards is a plus but learnable.

### Key assumptions to validate (3–5)

1. **Assumption:** Small business owners will trust an AI tool to modify their store's theme code. **How to test:** Offer a free scan + preview of fixes (before/after diff) to 50 Shopify store owners. Measure how many approve the code changes vs. wanting human review.
2. **Assumption:** AI-generated fixes are accurate enough to meaningfully improve WCAG compliance (not just flag issues). **How to test:** Run the tool against 20 known-non-compliant sites, have an accessibility consultant audit the before/after. Target: >70% of flagged issues correctly fixed.
3. **Assumption:** Shopify store owners will pay $79–$149/mo for ongoing accessibility compliance (vs. one-time fix). **How to test:** Launch with a $29 one-time scan + fix offer alongside the subscription. Measure which converts better and whether churn is acceptable.
4. **Assumption:** The Shopify App Store approval process won't block a theme-modifying app. **How to test:** Submit a minimal proof-of-concept app early. Shopify's Theme Access API is designed for this, but approval can be slow.

### Risk flags

1. **[Platform dependency]:** Heavy reliance on Shopify's Theme Access API and App Store for distribution. Policy changes could limit theme modification capabilities. Mitigant: WordPress plugin provides a second rail.
2. **[Legal positioning risk]:** Must be extremely careful not to promise "ADA compliance" — the FTC just fined accessiBe for exactly that. Product must position as "remediation tool" not "compliance guarantee." Legal review of all marketing copy is essential.
3. **[AI accuracy ceiling]:** Automated tools catch 30–40% of accessibility issues; AI-augmented tools may reach 60–70%. Some issues (cognitive accessibility, screen reader flow) require human judgment. Must be transparent about what the tool can and can't fix.
4. **[Competitor response]:** TestParty ($4M funded) could move downmarket. Shopify could build native accessibility tools. First-mover advantage is real but narrow — need to build CMS integration depth fast.

## 14. Structured verdict

```
Score:                  81/100
Verdict:                STRONG GO
Confidence:             High
Best-fit builder:       Technical founder with frontend/accessibility expertise, no domain advisor needed
Time to revenue:        8–12 weeks (4 weeks build + Shopify App Store approval cycle)
Capital to launch:      $15K–$25K (engineering time + LLM API costs + Shopify partner account)
Top 3 assumptions to validate first:
  1. Store owners will approve AI-generated theme code changes (test with 50 free scans)
  2. AI fixes are accurate enough to pass a consultant's audit (benchmark against 20 sites)
  3. $79–$149/mo pricing converts for ongoing compliance (A/B test vs. one-time pricing)
Kill criteria:
  - Abandon if <15% of free-scan users convert to paid within 30 days
  - Abandon if AI fix accuracy is below 60% when audited by an accessibility consultant
  - Abandon if Shopify rejects the app after two submission attempts
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Build a lightweight scanner (axe-core wrapper + Claude API for fix generation) that takes a URL, scans 10 pages, and outputs a before/after diff of proposed HTML/CSS fixes. No CMS integration yet — just a report.
- **Day 3–4:** Run the scanner against 30 Shopify stores that were named in 2025 ADA lawsuits (public PACER data). Email each one: "Your store was sued for accessibility violations last year. We scanned it — here are the 47 issues we found and the exact code fixes. Want us to apply them?" Track reply rate and interest.
- **Day 5:** Decide go/no-go based on: (a) Did >20% of outreach recipients reply? (b) Did >50% of responders express willingness to pay for automated fixes? (c) Were the AI-generated fixes accurate when spot-checked against 5 sites? If all three: build the Shopify app. If (c) fails: the tech isn't ready yet. If (a) or (b) fail: the market isn't ready or the positioning is wrong.
