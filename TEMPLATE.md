# Proposal Template

> Copy this file to `ideas/YYYY-MM-DD-<slug>/proposal.md` and fill in every section. No code, no architecture details — stay at the operator level. Every section is required unless it genuinely doesn't apply (in which case write `N/A` with one sentence of reasoning).
>
> **Every proposal MUST start with YAML frontmatter** (the block between `---` lines below). The web site reads this for tagging, search, and SEO. Do not omit any field; values must be valid (see the canonical taxonomy in `web/src/lib/tags.ts`).

---

```yaml
---
title: {{Product Name — full title with tagline}}
slug: {{matches the folder name without the date prefix, e.g. ai-regional-language-tutor}}
date: YYYY-MM-DD
category: {{e.g. EdTech / India, DevTools / Global, Legal-AI / US-SMB}}
complexity: {{Low | Medium}}
score: {{0-100}}
verdict: {{STRONG GO | GO | VALIDATE | PASS}}
confidence: {{High | Medium | Low}}
oneLiner: {{One sentence, ≤20 words. Same as section 1 below.}}
tags:
  vertical: {{Retail | DevTools | HealthTech | CleanTech | EdTech | Creator Economy | GovTech | PropTech | HomeServices | TradeTech | Compliance | Logistics | RestaurantTech | IoT | ProfessionalServices | …}}
  model: {{SaaS | Hardware+SaaS | IoT+SaaS | Marketplace | Hybrid}}
  geography: {{India | Global | India+Global | LATAM | SEA}}
  secondary: [{{free-form tags, e.g. WhatsApp-first, UPI-native, Multilingual, AI-agent, Voice-first, Compliance-driven, SMB, Solo-builder, Consumer}}]
axes:
  problem: {{0-20 — from section 12 feasibility score}}
  demand: {{0-15}}
  build: {{0-15}}
  distribution: {{0-15}}
  revenue: {{0-15}}
  time: {{0-10}}
  defensibility: {{0-10}}
founderFit: [{{technical-heavy | sales-heavy | content-heavy | operations-heavy | domain-expertise-required}}]
featured: {{true | false — show on homepage}}
---
```

# {{Product Name}}

## 1. One-liner

One sentence, ≤20 words, that tells me what this is and who it's for. If I can't write this, the idea isn't clear enough yet.

## 2. Trend signal — why now?

What specifically is trending, selling, or getting popular that makes this the right idea *right now*? Cite sources where possible:
- Search traffic, Google Trends, keyword tools
- Product Hunt launches, Reddit threads, Twitter/X chatter
- Revenue/usage data from incumbents if public
- News articles, analyst reports, regulatory changes

If the only "signal" is my hunch, the idea is not ready.

## 3. The opportunity

What gap does this exploit? If it's a disruption play, name the incumbent and explain *specifically* what they do badly that a focused AI-first team can do 10× better.

## 4. Target market

- **Primary customer:** Who exactly — job title, company size, geography
- **Why they buy:** What's their actual pain, in their words
- **Rough TAM reasoning:** How many of these customers exist, roughly
- **Why now for them:** What changed in their world that makes this urgent

## 5. Product sketch (MVP)

5–8 bullets describing the v1's user-visible capabilities. No implementation details. Think of this as the landing-page feature list for launch day.

- Capability 1
- Capability 2
- ...

## 6. AI angle — what's load-bearing

How is AI *actually doing work* here, not just decorating a form? If you removed the AI, would the product still exist? If yes, the AI angle is weak — rework it or kill the idea.

## 7. Localization angle (if any)

Is there an India-first, LatAm-first, or other region-specific version that would beat a generic global product? Consider:
- Language / script support
- Payment rails (UPI, Pix, M-Pesa, etc.)
- Local pricing (can a ₹499/mo tier work where $49/mo can't?)
- Regulatory / compliance quirks
- Local distribution channels (WhatsApp, Telegram, vernacular creators)

If not applicable, write `N/A — this is a global play` and explain why localization isn't a wedge.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** $X/month per {{seat | workspace | usage unit}}
- **ACV:** Realistic average revenue per customer per year
- **Rough math to $1M ARR:** e.g., "500 customers × $200/mo × 12 = $1.2M"
- **Rough math to $5M ARR:** what would need to be true
- **Expansion path:** how does ACV grow over time (seats, usage, upsells)?

## 9. Go-to-market wedge — first 100 customers

Concrete playbook. Not "SEO and content." Specifics like:
- "Scrape 2,000 X from Y directory, send a personalized Loom demo, expect 5% reply rate"
- "Partner with 3 influencers in niche Z who already have the audience"
- "Launch on Product Hunt + a specific 50k-member subreddit where the target customer hangs out"
- "Cold DM the 200 people who complained about incumbent X on Twitter last month"

3–5 bullets. If I can't see the first 100 customers clearly, the idea is a PASS.

## 10. Build complexity — justification

Low or Medium (High gets auto-rejected). 2–3 sentences on *why* it's that complexity — what's off-the-shelf, what needs custom work, rough estimate of weeks to v1 for a small team.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ / ❌ | |
| Ethical — no harm / dark patterns | ✅ / ❌ | |
| Market exists (evidence above) | ✅ / ❌ | |
| 1–5 person team can build this | ✅ / ❌ | |
| Launchable with <$50K / ₹40L | ✅ / ❌ | |

All five must pass to proceed to scoring.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | /20 | |
| Demand evidence | 15 | /15 | |
| Build feasibility | 15 | /15 | |
| Distribution clarity | 15 | /15 | |
| Revenue mechanics | 15 | /15 | |
| Time to first revenue | 10 | /10 | |
| Defensibility | 10 | /10 | |
| **Total** | **100** | **/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

Tag the builder profile this idea requires (one or more):
`technical-heavy` · `sales-heavy` · `content-heavy` · `operations-heavy` · `domain-expertise-required`

### Key assumptions to validate (3–5)

1. **Assumption:** ... **How to test:** ...
2. **Assumption:** ... **How to test:** ...
3. **Assumption:** ... **How to test:** ...

### Risk flags

1. **[Risk type]:** What it is and why it matters.
2. **[Risk type]:** ...
3. **[Risk type]:** ...

## 14. Structured verdict

```
Score:                  /100
Verdict:                STRONG GO | GO | VALIDATE | PASS
Confidence:             High | Medium | Low
Best-fit builder:       [profile description]
Time to revenue:        [X weeks/months]
Capital to launch:      [₹X / $X]
Top 3 assumptions to validate first:
  1. [assumption + method]
  2. [assumption + method]
  3. [assumption + method]
Kill criteria:
  - Abandon if [measurable condition]
  - Abandon if [measurable condition]
```

## 15. Next step — 1-week validation sprint

If I had one week to prove this idea is real before committing to build, what would I do?
- Day 1–2: ...
- Day 3–4: ...
- Day 5: Decide go / no-go based on {{specific measurable outcome}}

The validation has to produce a **falsifiable** result — not "I think people liked it."
