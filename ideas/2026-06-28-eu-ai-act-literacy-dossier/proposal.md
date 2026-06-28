---
title: "ActProof — AI Act readiness dossier for EU small businesses"
slug: eu-ai-act-literacy-dossier
date: 2026-06-28
category: Compliance / EU SMBs (5–250 staff who use AI but don't build it)
complexity: Low
score: 76
verdict: GO
confidence: Medium
oneLiner: "Discovers the AI your staff already use, trains them per role, and hands you the auditor-ready proof file."
tags:
  vertical: Compliance
  model: SaaS
  geography: EU
  secondary: [Compliance-driven, SMB, AI-agent, Solo-builder, Multilingual]
axes:
  problem: 15
  demand: 12
  build: 13
  distribution: 11
  revenue: 11
  time: 8
  defensibility: 6
founderFit: [domain-expertise-required, content-heavy]
featured: false
---

# ActProof — AI Act readiness dossier for EU small businesses

## 1. One-liner

Discovers the AI your staff already use, trains them per role, and hands you the auditor-ready proof file — before the Aug 2 enforcement date.

## 2. Trend signal — why now?

A hard regulatory clock, not a hunch. EU AI Act **Article 4 (AI literacy) enforcement begins 2 August 2026** — five weeks from today. The duty has technically applied since Feb 2025, but national market-surveillance authorities only get supervision-and-enforcement powers on that date, which is when the panic actually starts. The obligation lands on **every "deployer"** — every company that *uses* AI, "regardless of size," explicitly including a 5–250-employee SME whose only AI is ChatGPT or an AI feature inside its CRM. If an employee uses AI in a work context, the company is on the hook. "Shadow AI" — staff quietly pasting work into ChatGPT — is named as a live regulatory risk.

The catch that makes this a product, not a PDF: the obligation has **no prescribed format** but **must be demonstrable**. "If an inspector asks, you need to be able to prove that you have trained your team." Regulators say they'll expect "a consistent story from inventory, to risk assessment, to controls, to monitoring." That's a documentation/evidence problem dressed up as a training problem — exactly the shape that collapses into a generated, auditable packet.

The money is already moving. Course vendors charge €99–€5,000/employee for AI Act training (CITI €675/yr org subs; QA's 40-minute course); enterprise AI-governance platforms run €30K–€80K+/yr (OneTrust). SME compliance budgets for the Act are pegged at $10K–$60K. IDC reports **57% of European enterprises found at least one instance of shadow AI in the last 12 months**; Forrester says 65% of compliance execs cite shadow AI as the top governance gap. Non-compliance with Article 4 carries fines up to **€7.5M or 1% of global turnover** (SME proportionality applies, but the threat is real).

Provenance:
  - Signal 1 (Demand): Article 4 applies to *every* EU company using AI incl. 5–250-staff SMEs using only ChatGPT; enforcement starts 2 Aug 2026; "must be demonstrable" — https://digital-strategy.ec.europa.eu/en/faqs/ai-literacy-questions-answers + https://www.delbion.com/en/insights/eu-ai-act-sme-compliance-guide/ — 2026-06-28
  - Signal 2 (Feasibility): SME guidance confirms a compliant artifact set is small and generatable — 2–3 page usage policy, AI inventory/register with owner+risk tier, training records; "does not need to be a 50-page document" — https://kla.digital/blog/best-eu-ai-act-compliance-software-2026 + https://euaicompass.com/ai-system-inventory-template.html — 2026-06-28
  - Signal 3 (Economic): AI Act training priced €99–€5,000/employee; enterprise governance platforms €30K–€80K/yr; SME compliance budgets $10K–$60K; shadow AI in 57% of EU firms (IDC) — https://about.citiprogram.org/course/eu-ai-act/ + https://www.cloudnuro.ai/blog/shadow-ai-eu-ai-act-compliance-checklist-august-2026 — 2026-06-28
  Category: Regulatory arbitrage

## 3. The opportunity

The market is split into two camps, and the EU SME that just *uses* AI falls between them.

**Camp A — course sellers** (QA, CITI, Learning Tree, dozens of LinkedIn-Learning clones). They sell a 40-minute video and a certificate. What they don't give you: an *inventory* of which AI your staff actually use, a *usage policy* mapped to your tools, and a single bound file that ties training + policy + register into the "consistent story" a surveillance authority wants. A certificate alone is not the demonstrable evidence the regulation describes.

**Camp B — enterprise GRC / AI-governance platforms** (OneTrust at €30–80K/yr, plus AI-Act-native tools like Legalithm and Validata). These are built for companies that *build* high-risk AI systems — risk classification, Annex IV technical documentation, conformity assessments. Overkill, over-jargoned, and over-priced for a 30-person architecture firm whose entire AI footprint is "we use Copilot and ChatGPT."

The gap: a **deployer-first readiness dossier** priced for an SMB. Not a course. Not a governance suite. A focused workflow that (1) discovers the shadow AI already in the building, (2) trains each role in the AI it actually touches and logs completion, (3) drafts the 2–3 page usage policy, and (4) binds it all into a dated, signed, auditor-ready PDF + live link the owner can hand over in 30 seconds. AI does the heavy lifting: tailoring training and policy text to *this* company's actual tool stack and roles, which is the part the template-and-video incumbents can't personalize.

## 4. Target market

- **Primary customer:** Owner / office manager / fractional DPO of EU SMEs with **5–250 employees** that use off-the-shelf AI (ChatGPT, Copilot, Gemini, AI features in HubSpot/Canva/Notion) but build none of their own. Think 30-person law firms, marketing agencies, accountancies, architecture practices, e-commerce teams, clinics. Highest urgency in Germany, Netherlands, Ireland, France, and the Nordics where market-surveillance authorities are organized and SMEs are AI-heavy.
- **Why they buy:** "Enforcement starts Aug 2, I have no idea what I'm supposed to have on file, the lawyer quote was €8K, and I just need to not get fined." It's a fear-and-relief purchase with a date attached — the strongest kind.
- **Rough TAM reasoning:** The EU has ~24M SMEs; even a conservative slice — say the **1–2M** that actively use workplace AI and have someone who worries about compliance — at a €40–80/mo equivalent is a multi-hundred-million-euro annual pool. I don't need the whole pool; I need a few thousand of them.
- **Why now for them:** The deadline is real, dated, and ~5 weeks out at launch. Compliance with a fixed enforcement date is the rare B2B purchase that sells *itself* on urgency. The window is also why this needs to ship fast — peak willingness-to-pay is June–October 2026.

## 5. Product sketch (MVP)

- **Shadow-AI discovery wizard:** a 10-minute guided intake (plus an optional employee micro-survey link and an SSO/expense-report checklist) that surfaces every AI tool actually in use and writes them into an AI register with owner, use case, data class, and risk tier.
- **Role-tailored micro-training:** short, generated lessons per role ("what marketing must know about pasting client data into ChatGPT," "what HR must know about AI in hiring"), in the company's language, ending in a 5-question check.
- **Completion ledger:** every employee's training, date, score, and acknowledgement of the usage policy — timestamped and exportable. This is the "demonstrable" part.
- **Usage-policy drafter:** a 2–3 page AI acceptable-use policy auto-written from the discovered tool stack and data rules — not a generic template, *this company's* tools and roles.
- **Transparency-notice snippets:** ready-to-paste disclosures for any customer-facing chatbot or AI-generated content (Article 50 nicety, bundled in).
- **The Dossier:** one-click export of a dated, branded PDF + permanent shareable link bundling inventory + policy + training ledger into the "consistent story" an inspector asks for.
- **Re-attestation reminders:** auto-nudges when new staff join or new AI tools appear, keeping the dossier live (this is the recurring hook).

## 6. AI angle — what's load-bearing

Remove the AI and you're back to a template pack and a generic video — i.e. the incumbents. AI is load-bearing in two places. First, **personalization at generation time**: turning a messy list of "tools we use + roles we have + languages we speak" into tailored training content and a policy that names *this* company's actual stack, across 24 EU languages, for a price a template-shop's human writers could never hit. Second, **discovery reasoning**: interpreting fuzzy intake answers and expense/SSO hints to infer which AI tools are in play and what risk tier each falls in. The defensible work is making the generated dossier genuinely company-specific and genuinely audit-shaped — not the LMS plumbing.

## 7. Localization angle

This is *intrinsically* localized — that's the moat against generic US compliance SaaS. Article 4 is EU law, enforced by **national** market-surveillance authorities, in **24 official languages**. Training and policy must be in the language the staff actually read; a German Mittelstand inspector won't accept an English-only ledger. Pricing must work in euros at SMB scale (a €49/mo tier where a €30K OneTrust seat can't). And per-country enforcement nuance (Germany's BNetzA vs. Ireland's framework vs. France's DGCCRF) becomes a content advantage as the product matures. A US-built generic governance tool cannot easily match multilingual, country-aware, deployer-side packaging.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** flat per-company SaaS by headcount band. **€49/mo** (≤25 staff), **€99/mo** (26–100), **€249/mo** (101–250). Annual prepay encouraged (the dossier is an annual artifact). Optional one-time "rush dossier" setup fee (€199) in the run-up to August — pure urgency capture.
- **ACV:** blended ~€900/yr.
- **Math to $1M ARR:** ~1,100 paying SMEs × ~€900 = ~€1M. Given 1–2M addressable EU SMEs and a dated deadline, ~1K customers is realistic inside 12–18 months.
- **Math to $5M ARR:** ~5,500 customers, *or* fewer customers + an accountant/MSP reseller channel (each partner brings 20–50 SME clients) + expansion into adjacent EU obligations (GDPR records of processing, NIS2 basics, DORA-lite for small finance). The dossier format generalizes to "the small file your business must keep for regulator X."
- **Expansion path:** more obligations per customer (cross-sell), more seats as they grow, and recurring annual re-attestation that makes churn low — a lapsed dossier is a liability, so they renew.

## 9. Go-to-market wedge — first 100 customers

- **Accountant & fractional-DPO channel (primary):** EU SMEs ask their accountant/bookkeeper "what do I do about this?" Recruit 20–30 small accounting firms and fractional-DPO consultants as resellers/affiliates (they bill the client, we white-label the dossier). Each brings a book of 20–50 SME clients staring at the same deadline. This is the fastest path to the first 100.
- **Country-specific deadline content (June–Oct 2026):** publish "AI Act Aug 2 checklist for [German/Dutch/Irish] small businesses" + a free shadow-AI discovery scan as the lead magnet. The free scan *produces the fear* (it lists the 6 AI tools your staff use) and the paid dossier *resolves it*. Run this in each major language.
- **Cold outreach to high-AI verticals:** scrape directories of EU marketing agencies, law firms, and accountancies (all heavy AI users, all compliance-sensitive), send a personalized "here's what enforcement on Aug 2 means for a firm your size + a 2-min Loom of your dossier." Compliance + a date = above-average reply rates.
- **LinkedIn, where EU compliance/DPO chatter lives:** target the "fractional DPO / data protection officer" job title with the free scan.

## 10. Build complexity — justification

**Low.** The whole thing is generated documents + a lightweight LMS-style completion tracker + a PDF/shareable-link exporter, all on a standard web stack with off-the-shelf LLM APIs for the personalization and 24-language generation. No high-risk-AI conformity machinery, no model training, no deep integrations required for v1 (SSO/expense-report discovery can start as a guided checklist, not an integration). A solo founder with a compliance advisor ships a credible v1 in **6–9 weeks** — well inside the Aug deadline if started now.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | We help companies *comply* with EU law; squarely legal. |
| Ethical — no harm / dark patterns | ✅ | The "fear" is a real legal deadline, not manufactured. Genuine value delivered. |
| Market exists (evidence above) | ✅ | Dated enforcement + priced incumbents + 57% shadow-AI prevalence. |
| 1–5 person team can build this | ✅ | Solo + advisor, 6–9 weeks. |
| Launchable with <$50K / ₹40L | ✅ | Off-the-shelf stack; cost is mostly the founder's time + LLM credits. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 15/20 | Hard deadline + fine exposure = real pain, but SME perception of risk is uneven; many will gamble that small firms won't be inspected first. |
| Demand evidence | 15 | 12/20→12/15 | Dated law, priced incumbents, shadow-AI prevalence stats. Weakness: verbatim SME complaint quotes are thin — most evidence is vendor/analyst, not raw customer voice. |
| Build feasibility | 15 | 13/15 | Generated docs + tracker + exporter on off-the-shelf APIs. Multilingual generation is the only real lift. |
| Distribution clarity | 15 | 11/15 | Accountant/DPO channel + deadline content is concrete; conversion math still unproven, and the free-scan→paid funnel needs validation. |
| Revenue mechanics | 15 | 11/15 | Pricing benchmarked below incumbents; ~1.1K customers to $1M is achievable. Risk: SME churn after the deadline passes if re-attestation hook is weak. |
| Time to first revenue | 10 | 8/10 | Deadline urgency can pull revenue in <4–6 weeks if the accountant channel is primed pre-launch. |
| Defensibility | 10 | 6/10 | Soft moat: multilingual + country-aware content depth, accountant relationships, annual re-attestation lock-in. Copyable, but a focused 6-month head start during the deadline window is decisive. |
| **Total** | **100** | **76/100** | |

## 13. Qualitative modifiers

### Founder-fit tags
`domain-expertise-required` (must genuinely understand Article 4 obligations to make the dossier audit-credible) · `content-heavy` (multilingual training + policy content is the product).

### Key assumptions to validate (3–5)

1. **Assumption:** EU SMEs perceive enough enforcement risk to pay *before* Aug 2 rather than ignore it. **How to test:** run the free shadow-AI scan as a landing page in 2 countries; measure scan→"notify me of paid dossier" conversion against a fear-framed CTA.
2. **Assumption:** Accountants/fractional DPOs will resell or refer. **How to test:** pitch 15 small EU accounting firms a white-label dossier; target ≥4 verbal "yes, my clients need this."
3. **Assumption:** A generated dossier is accepted as "demonstrable" by the relevant authorities. **How to test:** have a compliance lawyer in 2 jurisdictions review the dossier format against Article 4 expectations; get written sign-off it would satisfy an inspection.
4. **Assumption:** Churn won't cliff after the deadline. **How to test:** survey early buyers on willingness to renew for annual re-attestation; gauge whether "live dossier" framing holds.

### Risk flags

1. **Market timing:** The sharpest urgency is a window (June–Oct 2026). Miss it and demand softens into steady-state compliance — still a business, but without the deadline tailwind. Ship now or not at all.
2. **Regulatory ambiguity:** "No prescribed format" cuts both ways — it makes the product possible, but means no authority will pre-bless our dossier. Mitigate with lawyer sign-off and conservative framing ("readiness," not "guaranteed compliance").
3. **Platform/competitor dependency:** Legalithm is free through ~2028 and EU-built; if it pivots from builder-side to deployer-side SME packaging, it's a direct threat. Move fast on the accountant channel and multilingual depth they lack.
4. **Post-deadline churn:** if re-attestation doesn't stick, this is a one-time sale wearing a subscription costume.

## 14. Structured verdict

```
Score:                  76/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Solo technical founder + EU compliance/legal advisor; content-heavy, multilingual
Time to revenue:        4–8 weeks (deadline-driven), if accountant channel primed pre-launch
Capital to launch:      €3–6K ($4–7K) — mostly LLM credits + a lawyer review
Top 3 assumptions to validate first:
  1. SMEs pay before Aug 2 — test free-scan→paid-intent conversion in 2 countries
  2. Accountants/DPOs resell — get 4+ verbal yeses from 15 firms
  3. Dossier is "demonstrable" — written lawyer sign-off in 2 jurisdictions
Kill criteria:
  - Abandon if <2% of free-scan completers express paid intent across 2 countries after 3 weeks
  - Abandon if no accountant/DPO firm agrees to resell after 15 pitches
  - Abandon if a lawyer in either test jurisdiction says the generated dossier would not satisfy an Article 4 inspection
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Build the free **shadow-AI discovery scan** as a single landing page in German and Dutch — 8 questions that output "here are the 6 AI tools your staff likely use + your Aug 2 exposure." This is the whole funnel's top.
- **Day 3–4:** Drive 200–300 targeted visits (LinkedIn to fractional-DPO/office-manager titles + 2 EU small-business subreddits/forums). Measure scan completion and the fear-framed "notify me when the paid dossier is ready (€49/mo)" click-through.
- **Day 5:** Pitch the white-label dossier to 15 small EU accounting firms by email/LinkedIn. **Go/no-go:** ≥2% of scan completers express paid intent AND ≥3 accountants say yes. If both clear, build the v1 immediately — the deadline won't wait. If neither clears, the urgency I'm betting on isn't there, and it's a PASS.
