---
title: "Article4Ready — AI-literacy proof file for EU SMEs"
slug: eu-ai-act-literacy-proof
date: 2026-06-07
category: Compliance / EU SMB
complexity: Low
score: 72
verdict: GO
confidence: Medium
oneLiner: "Finds which AI tools your staff actually use and hands you an audit-ready Article 4 literacy record before the inspector asks."
tags:
  vertical: Compliance
  model: SaaS
  geography: EU
  secondary: [Compliance-driven, SMB, AI-agent, Solo-builder]
axes:
  problem: 14
  demand: 12
  build: 13
  distribution: 11
  revenue: 9
  time: 8
  defensibility: 5
founderFit: [domain-expertise-required, sales-heavy]
featured: false
---

# Article4Ready

## 1. One-liner

Finds which AI tools your staff actually use and hands you an audit-ready Article 4 literacy record before the inspector asks.

## 2. Trend signal — why now?

The EU AI Act's Article 4 (AI literacy) has been **in force since 2 February 2025**, and national market-surveillance authorities **start enforcing on 2 August 2026** — eight weeks from today. Every provider *and deployer* of an AI system must ensure staff have "a sufficient level of AI literacy… to their best extent," and — this is the part everyone skips — **it must be demonstrable**. The official line and every law-firm explainer says the same thing: "if an inspector asks, you need to be able to prove that you have trained your team," and deployers "should keep documentation describing the literacy measures they have put in place." There is **no exemption for SMEs** and no minimum company size.

The market has rushed to sell the easy, high-margin half — *content*. DataCamp, QA.com, NAVEX, TechClass all sell AI-literacy courses with completion certificates. Nobody owns the boring half: knowing **which AI systems your staff actually use**, mapping each role to a right-sized literacy measure, and producing the **org-specific evidence file**. IAPP published a piece literally titled *"EU AI Act deployer evidence gaps SMEs will miss before 2 Aug. 2026,"* noting deployers "will struggle… without an AI system inventory" and "often lack proof those policies cover the specific AI systems in scope." And the vendor's certificate is explicitly **"not a substitute for the organization's own evidence."** A generic course cert does not close the gap.

Provenance:
  - Signal 1 (demand): Article 4 in force since Feb 2025, enforceable 2 Aug 2026, "must be demonstrable," no SME exemption, fines to €15M / 3% turnover — [https://artificialintelligenceact.eu/article/4/](https://artificialintelligenceact.eu/article/4/) — 2026-06-07
  - Signal 2 (feasibility): Shadow-AI discovery via browser-extension inventory, OAuth scopes in Google Workspace / Entra, and DNS telemetry is now off-the-shelf — [https://www.knostic.ai/blog/shadow-ai-detection-tools](https://www.knostic.ai/blog/shadow-ai-detection-tools) — 2026-06-07
  - Signal 3 (economic): Course vendors (DataCamp, QA, NAVEX) and €25K–120K readiness consultancies are already billing; enterprise governance suites run $20K–300K/yr — money is moving, the SME tier is unserved — [https://aicompliancevendors.com/best/eu-ai-act-compliance-tools](https://aicompliancevendors.com/best/eu-ai-act-compliance-tools) — 2026-06-07
  Category: Regulatory arbitrage

## 3. The opportunity

Two camps exist and neither serves a 30-person EU agency. **Course sellers** (DataCamp, QA, NAVEX, TechClass) sell per-seat training and a completion certificate — but the law says the cert is *not* the company's own evidence, and they never touch the inventory or the role mapping. **Enterprise AI-governance suites** (Vanta, Drata, Credo AI, Holistic AI, Fiddler) cost $20K–$300K/yr and are built for high-risk AI *providers* with model registries — absurd overkill and unaffordable for a deployer that just uses ChatGPT, Copilot and Jasper.

The gap: a cheap, deployer-only, Article-4-shaped tool that does the three things a small company can't be bothered to do by hand — (1) **discover** the AI footprint, (2) **map** each role to a proportionate literacy measure and a one-page usage policy, (3) **emit the proof file** and keep it current as staff and tools change. We don't compete with the course; we wrap it. The course becomes one line item inside our evidence pack.

## 4. Target market

- **Primary customer:** EU-based SMEs, **20–250 employees**, in AI-using-but-not-AI-building sectors — marketing/creative agencies, recruitment firms, accountancies, e-commerce ops, professional-services shops. Buyer is the owner, ops manager, or HR/People lead who got the "are we AI-Act-ready?" email from their accountant or board.
- **Why they buy (their words):** "We've no idea which AI tools half the team uses, the deadline is August, and a course certificate apparently isn't enough — I just want something I can show if anyone asks." The official guidance even tells them the first step is to "list every tool that uses machine learning… including third-party software with AI features" — and they don't want to do it manually.
- **Rough TAM reasoning:** The EU has ~24M SMEs; even a tiny slice — say the 1–2M that knowingly deploy AI tools and have someone who worries about compliance — at €60–120/mo is a multi-hundred-million-euro pool. We need a few thousand of them, not millions.
- **Why now for them:** Hard dated trigger — enforcement 2 Aug 2026. Deadlines convert browsers into buyers.

## 5. Product sketch (MVP)

- **AI footprint scan:** lightweight discovery — a browser-extension/endpoint check plus OAuth-app readout from Google Workspace or Microsoft Entra — that surfaces the AI tools staff actually use (ChatGPT, Copilot, Gemini, Jasper, Claude, Midjourney, AI features inside existing SaaS).
- **Staff self-attestation flow:** a 2-minute per-employee questionnaire ("which of these do you use, for what") to catch tools discovery misses and to record the human side.
- **Role → literacy mapping:** auto-generates a proportionate literacy measure per role group ("marketing uses generative tools → these 4 limitations/risks they must understand"), calibrated to the "best extent" standard, not a one-size course.
- **One-page AI usage policy** generated from the actual footprint, ready to circulate and have staff acknowledge.
- **Proof file / evidence pack:** a dated, exportable PDF + data record showing the inventory, the literacy measures, who acknowledged what, and the reasoning — the thing you hand an inspector.
- **Course passthrough:** embed or link an existing micro-course and capture completions into the same record (we sell the dossier, not the content).
- **Drift alerts:** when a new AI tool appears in the footprint or a new hire joins, flag that the proof file is stale and walk them through closing it.

## 6. AI angle — what's load-bearing

AI does the classification and drafting that would otherwise be a consultant's billable week: identifying which of hundreds of detected domains/extensions/OAuth apps are AI systems and what *kind*, clustering staff into role groups, and generating the role-calibrated literacy measures, usage policy, and "best-extent" justification language per company. Remove the AI and you're back to a €10K consultant manually interviewing staff and writing a bespoke policy — exactly the cost we're undercutting. The footprint→policy→proof generation is the product; the UI is just where it lands.

## 7. Localization angle

EU-native by definition. Real localization levers: (1) **language** — usage policy and staff-facing literacy content in DE, FR, NL, ES, IT, not just English; (2) **member-state nuance** — surface where free national support exists (e.g. Spain's FUNDAE training subsidy, the EDIH network) so we position as "we do the inventory and proof; the *training* can be free," which neutralizes the "it's cheap-by-design" objection; (3) **per-country pricing** in EUR. Start DE / NL / Nordics (high compliance culture, English-comfortable, deadline-anxious), expand to FR / ES / IT with localized policy templates.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** €59/mo (≤25 staff) · €119/mo (26–100) · €249/mo (101–250). Annual upfront discount. One-off "Audit-Ready Pack" at €299 for the deadline-panic buyer who wants the file once — upsell to subscription for drift/renewal.
- **ACV:** ~€1,000 blended (mix of small subs + mid-tier + a few one-off packs converting).
- **To $1M ARR:** ~1,000 customers at ~€85/mo. Reachable from a pool of 1M+ AI-deploying EU SMEs facing a hard deadline.
- **To $5M ARR:** ~4,000–4,500 customers, add a "for accountants/MSPs" multi-client console (one firm manages 30 clients' proof files), and a recurring annual re-attestation cycle that turns one-off buyers into subscribers.
- **Expansion path:** seats grow with headcount; add adjacent records the same buyer needs (GDPR processing record, Article 26 deployer log register) — same audience, same "boring-but-mandatory evidence file" muscle.

## 9. Go-to-market wedge — first 100 customers

- **Accountants & fractional compliance/DPO consultants as the channel:** they field the "are we AI-Act-ready?" question and have no tool to hand clients. Recruit 20–30 via LinkedIn + EU accountancy forums; give them a free multi-client console and revenue share. Each brings 5–15 clients.
- **Deadline-targeted LinkedIn outreach:** the buyer is searchable — ops/HR/owner titles at EU SMEs in agency/recruitment/e-commerce. Cold DM + a 90-second Loom showing *their* likely AI footprint and the proof file. The 2 Aug date is the subject line.
- **EDIH / chamber-of-commerce co-marketing:** 251 European Digital Innovation Hubs exist to help SMEs digitalize and are actively pushing AI-Act readiness. Offer a free "AI footprint scan" workshop; convert attendees.
- **SEO/comparison content on the exact fear:** "Is a DataCamp certificate enough for the EU AI Act?" (answer: no, here's what an inspector actually wants) — captures the buyer mid-panic.

## 10. Build complexity — justification

**Low.** Discovery uses existing, documented methods (browser-extension inventory, Workspace/Entra OAuth listings, optional DNS readout) — no novel research. The classification, role-mapping and document generation are LLM + templates. The proof file is structured PDF/data export. No high-risk-AI complexity, no model registry, no on-prem. A solo founder ships a credible v1 (manual-assisted scan + generated dossier) in **6–8 weeks**; a pair makes it self-serve with the multi-client console in ~12.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | We *help* comply with EU law; respect GDPR in our own data handling. |
| Ethical — no harm / dark patterns | ✅ | Honest scope: we sell the evidence layer, not fear; we tell customers training can be free. |
| Market exists (evidence above) | ✅ | In-force law, hard deadline, paying course/consultancy market, IAPP-named gap. |
| 1–5 person team can build this | ✅ | Off-the-shelf discovery + LLM doc generation. |
| Launchable with <$50K / ₹40L | ✅ | No capex; inference + dev only. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 14/20 | Real, dated, fine-backed pain — but it's a once-a-year governance chore, not daily hair-on-fire; some owners will gamble on weak early enforcement. |
| Demand evidence | 15 | 12/15 | In-force law, hard deadline, paying course/consultancy market, IAPP explicitly naming the inventory/evidence gap. Strong. Docked because I found law-firm chatter, not yet raw SME-owner complaint threads. |
| Build feasibility | 15 | 13/15 | Discovery methods and doc generation are all off-the-shelf; 6–8 week v1. |
| Distribution clarity | 15 | 11/15 | Accountant/consultant channel + deadline-targeted LinkedIn is concrete; conversion math still unproven. |
| Revenue mechanics | 15 | 9/15 | **Weakest axis.** The obligation is cheap-by-design (€0–75/person, free national support). We sell time-saved and proof, not training — defensible, but caps price and invites a "good enough free template" objection. |
| Time to first revenue | 10 | 8/10 | Deadline pulls revenue forward; one-off Audit-Ready Pack can sell in week one of launch. |
| Defensibility | 10 | 5/10 | Execution + channel moat only; course vendors or a Vanta could bolt this on. Window is the deadline; first-mover + accountant lock-in is the bet. |
| **Total** | **100** | **72/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`domain-expertise-required` (you must actually know what an Article-4 inspector will accept) · `sales-heavy` (the accountant/consultant channel is relationship work).

### Key assumptions to validate (3–5)

1. **Assumption:** EU SME owners will pay €60–120/mo (or €299 once) for the proof file rather than DIY a free template. **How to test:** 30 interviews + a fake-door landing page with real pricing; measure checkout intent.
2. **Assumption:** Accountants/consultants will resell or refer because they lack a tool. **How to test:** pitch 20; count how many want the multi-client console before it exists.
3. **Assumption:** Lightweight discovery (extension + OAuth + self-attestation) catches enough of the AI footprint to be credible without heavy IT integration. **How to test:** run it inside 5 friendly SMEs, compare against a manual audit.
4. **Assumption:** Enforcement is real enough early that buyers act before, not after, 2 Aug. **How to test:** track national authority guidance/first actions through summer 2026.

### Risk flags

1. **Regulatory timing:** A political agreement may delay *high-risk* AI rules to 2027 — Article 4 literacy is already in force and not part of that slip, but press coverage of "delay" could cool urgency. Watch and message around it.
2. **Commoditization:** "Cheap-by-design + free national support" means a polished free template or a course vendor's add-on could erode WTP. Defend with the proof-file + drift + multi-client console, not the content.
3. **Platform dependency:** Discovery leans on Google Workspace / Microsoft Entra readouts and browser data; changes there or privacy pushback could narrow the scan. Self-attestation is the fallback.

## 14. Structured verdict

```
Score:                  72/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Compliance-literate solo founder (or pair) with an accountant/DPO network in DE/NL/Nordics
Time to revenue:        4–8 weeks (deadline-driven; one-off pack sellable at launch)
Capital to launch:      ₹4–8 lakh ($5–10K)
Top 3 assumptions to validate first:
  1. WTP €60–120/mo vs free DIY — 30 interviews + priced fake-door
  2. Accountant/consultant channel resells — pitch 20, count console sign-ups
  3. Lightweight discovery is credible — run vs manual audit in 5 SMEs
Kill criteria:
  - Abandon if <10% of 50 priced-landing-page visitors show checkout intent
  - Abandon if <3 of 20 pitched accountants want the multi-client console
  - Abandon if enforcement is publicly deprioritized for SMEs before 2 Aug 2026
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Build the priced fake-door landing page ("AI-Act ready in a day — €299 once or €79/mo") and a 90-second Loom showing a mock footprint scan → proof file. Pull a list of 200 EU SME ops/HR/owner contacts.
- **Day 3–4:** DM the 200 with the deadline hook; pitch 20 accountants/DPO consultants on the multi-client console. Track replies and checkout-intent clicks.
- **Day 5:** Decide. **Go** if ≥10% of landing visitors hit checkout-intent AND ≥3 of 20 accountants want in. Otherwise reshape the wedge (one-off pack only? consultant-tool only?) or shelve.

Falsifiable: priced intent and channel pull, not "people said it sounds useful."
