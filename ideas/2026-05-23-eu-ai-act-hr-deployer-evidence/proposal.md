---
title: "OversightLedger — AI Act evidence ledger for EU HR teams"
slug: eu-ai-act-hr-deployer-evidence
date: 2026-05-23
category: Compliance / EU-SMB
complexity: Medium
score: 73
verdict: GO
confidence: Medium
oneLiner: "Turns an EU SME's use of AI hiring tools into the human-oversight records the AI Act demands by August 2026."
tags:
  vertical: Compliance
  model: SaaS
  geography: EU
  secondary: [Compliance-driven, SMB, AI-agent, HR-tech]
axes:
  problem: 15
  demand: 12
  build: 11
  distribution: 11
  revenue: 11
  time: 7
  defensibility: 6
founderFit: [domain-expertise-required, sales-heavy]
featured: false
---

# OversightLedger — AI Act evidence ledger for EU HR teams

## 1. One-liner

Turns an EU SME's use of AI hiring tools into the human-oversight records the AI Act demands by August 2026.

## 2. Trend signal — why now?

On **2 August 2026** the EU AI Act's high-risk obligations become enforceable. Annex III names "employment, workers management and access to self-employment" as a high-risk category — AI used to filter job applications, rank candidates, or evaluate workers. Critically, **the classification applies regardless of company size and regardless of whether the AI was bought or built**. Any EU company that runs candidates through an AI screening tool — Workable's AI matcher, LinkedIn Recruiter, HireVue, an ATS with AI ranking, even ChatGPT used to shortlist CVs — is a **deployer** of a high-risk AI system under Article 26.

That's where the panic is. Deployers don't have to build technical files like providers do — but Article 26 + Article 14 require them to *evidence ongoing operational controls*: a named human reviewer with authority, the actual log of which AI outputs were reviewed and overridden, six months of retained system logs, an incident procedure, and — Article 26(7) — proof they notified worker representatives and affected candidates. The IAPP (April 2026) published the gap list directly: SMEs have an AI inventory at best, and nothing operational. Consultancy quotes to fix this run €30K–€80K — absurd for a 25-person firm.

The classification layer is already commoditised. The official AI Act Compliance Checker is free; EuroComply and AiCompliBot will tell you "yes, high-risk" in a 5-minute quiz. Nobody is producing the *operational evidence record* a labour inspector or works council actually asks to see.

Provenance:
  - Signal 1 (demand): "EU AI Act deployer evidence gaps SMEs will miss before 2 Aug. 2026" — five concrete gaps, SMEs have inventory only — https://iapp.org/news/a/eu-ai-act-deployer-evidence-gaps-smes-will-miss-before-2-aug-2026 — April 2026
  - Signal 2 (feasibility): Annex III + Article 6/26 are public, structured text; LLMs can map a deployer's tool list to risk tiers and draft oversight/incident records — https://artificialintelligenceact.eu/annex/3/ — accessed May 2026
  - Signal 3 (economic): SME consultancy for AI Act compliance quoted at €30K–€80K per engagement; Gartner projects legal/compliance GRC tool spend +50% by 2026 — https://www.witness-compliance.eu/en/blog/eu-ai-act-compliance-cost — 2026
  Category: Regulatory arbitrage

## 3. The opportunity

The EU AI Act compliance software market has split into layers, and the money is pooling in the wrong one for SMEs. Enterprise GRC platforms (Vanta, Secure Privacy, Enactia) sell to companies with a compliance team and price accordingly. The new SME-tier tools (EuroComply, AiCompliBot, the $49 "scanners") do **classification and audit-doc generation** — they answer "are you high-risk?" and spit out an Annex IV-style PDF.

But classification is the easy 10%. A deployer who learns "yes, your hiring tool is high-risk" is now *more* anxious, not less — because Article 26 obligations are **ongoing operational records**, not a one-time document. EuroComply itself, when probed, generates classifications and audit docs but explicitly does **not** produce human-oversight records or incident playbooks. That's the 90% nobody is doing.

OversightLedger ignores classification as a feature (it's table stakes, do it in 5 minutes and move on) and owns the operational evidence layer for the single highest-volume high-risk use case: **AI in hiring**. It is the running ledger a 30-person company hands an inspector: here is our named reviewer, here is every AI-ranked shortlist and who signed off on it, here is the candidate we notified, here is the time the tool behaved oddly and what we did. Narrow vertical, deep evidence — versus the incumbents' broad-but-shallow "17 regulations, one scan."

## 4. Target market

- **Primary customer:** HR manager, People Ops lead, or owner-operator at an EU company with **15–250 employees** that uses at least one AI-assisted hiring tool. Concentrate first on the high-AI-adoption, high-enforcement countries: Germany, Netherlands, France, Ireland, the Nordics. Also EU-facing staffing/recruitment agencies of the same size, which are deployers many times over.
- **Why they buy:** In their words — "We use [ATS] to rank applicants and I just found out that makes us 'high-risk' under the AI Act. We have no compliance person. A consultant quoted us €40K. The deadline is August. What do we actually have to *have* on file?" They are not buying software; they are buying the end of that anxiety and a defensible binder.
- **Rough TAM reasoning:** The EU has roughly 1.5M+ companies in the 10–249 employee band. AI-assisted hiring tools are now standard in mid-market ATSs, so a conservative 8–12% have an AI hiring tool in active use and sit clearly in scope — call it 120K–180K in-scope SMEs. Capture a few thousand at €600–1,500/yr and the sub-$5M ARR path is comfortably inside the serviceable slice; no need to win the whole market.
- **Why now for them:** The 2 August 2026 deadline is fixed and ~10 weeks out at launch. Labour inspectorates and works councils are the realistic enforcement vector for HR AI — not a distant tech regulator — which makes the risk feel local and immediate. There is no "later."

## 5. Product sketch (MVP)

- **5-minute scoping interview** — asks which hiring tools you use and how, maps each to Annex III, and confirms deployer status. Output is a plain-language scope statement, not legalese.
- **AI inventory register** — every AI-touching hiring tool listed with vendor, purpose, risk tier, and the provider's instructions-for-use attached. The thing the IAPP says SMEs don't have.
- **Human-oversight assignment record** — names the reviewer, their authority and competence basis, the intervention trigger, and the escalation route. Generated from the interview, exported signed-ready.
- **The oversight log itself** — the running record: for each AI-ranked shortlist or AI-scored candidate, who reviewed it, when, whether they overrode the AI, and the reason. Logged via a 30-second web form or email-forward, not a manual spreadsheet.
- **Worker & candidate notification kit** — Article 26(7) templates: the works-council/worker-rep notice and the candidate-facing AI-use disclosure, in the right local language.
- **Incident runbook + log** — a concrete "the AI behaved abnormally" procedure (suspend, inform provider, notify market surveillance authority) plus a place to record incidents when they happen.
- **Inspection binder export** — one click produces a dated, organised evidence pack covering Articles 26 and 14, ready to hand to an inspector or works council.
- **Deadline & retention tracker** — flags when six-month log retention lapses and when provider instructions change.

## 6. AI angle — what's load-bearing

AI does two jobs that would otherwise need a consultant. First, **classification reasoning**: the scoping interview feeds tool descriptions and usage context against Annex III and Article 6 to produce a written, defensible classification rationale — the IAPP's gap #2 — not a yes/no checkbox. Second, **document drafting**: it turns sparse interview answers into the specific operational records the Act names (oversight assignment, incident runbook, worker notices) in the customer's local language and in regulator-recognisable form.

Remove the AI and you're left with a static template pack — which already exists for free and which SMEs demonstrably do not fill in correctly, because they can't reason about their own context. The AI *is* the cheap consultant. That said, classification carries legal risk, so the AI proposes and the customer confirms; high-stakes calls are flagged for a human compliance reviewer on the higher tier. Load-bearing, not decorative.

## 7. Localization angle

EU-first by definition — the regulation is the market. The real localization is **language and enforcement-channel fit**: worker-rep notices and candidate disclosures must be in German, Dutch, French, etc., and must match what that country's labour inspectorate and works-council culture expect. Germany's strong Betriebsrat (works council) regime makes Article 26(7) notification a sharp, concrete pain there — a strong beachhead. Pricing in euros at SME tiers (€49–129/mo) where a €40K consultant quote is the alternative. This is not a US/global product retrofitted; it only exists because of one jurisdiction's law.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** €49/mo Starter (1–2 AI hiring tools, core records, self-serve) · €129/mo Pro (unlimited tools, incident module, multi-language notices, priority support) · €299/mo Agency (staffing firms, multi-client workspaces, white-label binder).
- **ACV:** Blended ~€1,000/yr across the base, skewing up as agencies adopt.
- **Math to $1M ARR:** ~1,000 customers × ~€1,000 ACV. Realistic — that is well under 1% of the conservative 120K in-scope SME pool.
- **Math to $5M ARR:** ~4,000–4,500 customers, agency tier carrying disproportionate weight, plus expansion into adjacent Annex III deployer use cases (AI in credit scoring, AI in worker monitoring) using the same evidence-ledger engine.
- **Expansion path:** ACV grows three ways — (1) more AI tools registered as the SME adopts them, (2) the same customer adding non-HR high-risk deployments to one ledger, (3) an annual "inspection-readiness review" add-on. Compliance is renewing by nature: the obligation doesn't end on 3 August.

## 9. Go-to-market wedge — first 100 customers

- **HR-tech vendor partnerships (primary).** Mid-market ATS and recruiting tools with AI features (Workable, Recruitee, regional ATSs) have a problem: their AI feature now exposes their customers to a regulation. Offer them a co-branded "AI Act deployer kit" their CSMs hand to customers. One ATS partner with a few thousand EU SMB accounts is a channel, not a logo. Pitch 15–20 such vendors; need 2–3 to say yes.
- **Works-council and HR-association channels.** German/Dutch HR associations, payroll bureaus, and SME-focused employment lawyers are all fielding "what do we do about the AI Act?" questions right now with no good answer to hand clients. Offer them a referral arrangement; they want to look helpful without doing €40K of work for free.
- **Targeted outbound on observable scope.** Job-board postings reveal the ATS in use. Build a list of EU SMEs whose postings show an AI-featured ATS, send a one-page "you are a deployer — here is the 5-item evidence checklist" with a free scoping interview. The free interview *is* the demo and produces their first real document.
- **Deadline-content sprint.** Plain-language, country-specific "AI Act for HR" pieces and a free inventory template — not for slow SEO, but as the artefact lawyers and HR associations forward. Time-boxed to the run-up to 2 August.

## 10. Build complexity — justification

Medium. The stack is off-the-shelf: standard web app, an LLM API for classification reasoning and document drafting, a structured logging UI, PDF/binder export. No custom models, no hardware. The genuine work is **domain depth** — encoding Annex III and Articles 14/26/27 correctly, building the document templates so they survive an inspector's eye, and getting the local-language worker notices right. That needs an employment-law advisor on the team or on retainer, not extra engineering. A two-person team (one builder, one domain-credible founder/advisor) ships a credible v1 in roughly 10–14 weeks.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | The product helps customers comply; it does not give regulated legal advice — keep that line clean with advisor sign-off on templates. |
| Ethical — no harm / dark patterns | ✅ | Pushes SMEs toward genuine human oversight of hiring AI — pro-worker. No dark patterns. |
| Market exists (evidence above) | ✅ | Fixed regulation, fixed deadline, in-scope population in the 100K+ range, consultants already charging €30K+. |
| 1–5 person team can build this | ✅ | Two people, ~10–14 weeks to v1. |
| Launchable with <$50K / ₹40L | ✅ | Web app + LLM API + an employment-law advisor retainer. Well under budget. |

All five gates pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 15/20 | Hard legal deadline, real penalties, genuine anxiety — but it is a once-felt scramble that, once the binder exists, drops to a quieter background obligation. Not daily hair-on-fire. |
| Demand evidence | 15 | 12/20→/15 | IAPP gap list, €30–80K consultant quotes, multiple SME-tier tools already funded and live. Strong signals; the specific deployer-evidence niche is inferred from incumbent gaps, not yet proven with paying users. |
| Build feasibility | 15 | 11/15 | Off-the-shelf tech; the cost is domain encoding and template defensibility, which needs an advisor. |
| Distribution clarity | 15 | 11/15 | ATS partnerships and HR-association referrals are concrete and observable; conversion through partners is unproven and partner deals take time. |
| Revenue mechanics | 15 | 11/15 | Pricing benchmarked against EuroComply and against the €40K consultant alternative; ACV modest, customer count for $1M is comfortably reachable. Renewal logic is sound. |
| Time to first revenue | 10 | 7/10 | Deadline urgency pulls revenue forward; pre-selling a scoping interview is plausible within weeks. Partner-led deals are slower. |
| Defensibility | 10 | 6/10 | Soft moat: accumulating per-customer evidence ledgers create switching cost, and domain depth in HR-deployer specifics is hard to match casually — but a funded GRC incumbent could bolt this on. |
| **Total** | **100** | **73/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`domain-expertise-required` · `sales-heavy`

Needs someone credible on EU employment/AI-Act compliance (the templates must survive a labour inspector) and someone who can land HR-tech vendor and association partnerships. Engineering load is modest.

### Key assumptions to validate (3–5)

1. **Assumption:** EU SMEs accept that using a third-party AI hiring tool makes *them* a high-risk deployer with their own obligations — and feel personally on the hook. **How to test:** 30 interviews with HR leads at 15–250-person EU firms; measure how many already know they are deployers and how many are actively worried.
2. **Assumption:** They will pay €49–129/mo for an evidence ledger rather than do nothing, use a free template, or buy a €490/yr classification tool and assume that covers them. **How to test:** Pre-sell the scoping interview + binder to 20 firms before build; a paid pre-order, not a "would you be interested."
3. **Assumption:** At least 2 mid-market ATS vendors will co-distribute rather than build the kit themselves or ignore it. **How to test:** Pitch 15–20 vendors in the first 6 weeks; a signed referral or co-branding agreement is the falsifiable outcome.
4. **Assumption:** Enforcement against HR-AI deployers is real enough (via labour inspectorates / works councils) that the fear converts to spend. **How to test:** Track post-August enforcement actions and works-council disputes in Germany/Netherlands; watch whether inbound interest rises or evaporates.

### Risk flags

1. **Regulatory risk:** The "Digital Omnibus" package could delay or soften deployer deadlines. A slip kills the urgency that powers the GTM. Watch the Council closely; if the date moves materially, the score drops.
2. **Platform dependency:** The ATS-partnership channel concentrates distribution in a few vendors who could build the kit in-house once they see it work.
3. **Market timing — narrow window:** Much of the value is the pre-August scramble. The business must convert that scramble into renewing operational software, or it becomes a one-time consulting wave with a long tail.
4. **Commoditisation:** A funded GRC incumbent (EuroComply, Vanta) could extend from classification into the evidence layer. The defence is speed, HR-deployer depth, and locking in the running ledger before they notice.

## 14. Structured verdict

```
Score:                  73/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       EU employment/AI-Act compliance expert paired with a product builder who can land HR-tech partnerships
Time to revenue:        4–8 weeks (pre-sold scoping interviews into the pre-deadline scramble)
Capital to launch:      €15–30K (web app + LLM API + employment-law advisor retainer)
Top 3 assumptions to validate first:
  1. EU SMEs feel personally on the hook as deployers — 30 HR-lead interviews
  2. They will pay €49–129/mo over a free template — 20 paid pre-orders before build
  3. 2+ mid-market ATS vendors will co-distribute — pitch 15–20, get a signed referral deal
Kill criteria:
  - Abandon if fewer than 8 of 20 pre-sell targets pay for a scoping interview
  - Abandon if the Digital Omnibus delays the deployer deadline by 12+ months before launch
  - Abandon if no ATS or HR-association partner signs within 8 weeks of outreach
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Build the list — 40 EU SMEs (15–250 employees, Germany/Netherlands/Ireland) whose live job postings reveal an AI-featured ATS. Draft the one-page "you are a deployer" checklist and the free-scoping-interview offer.
- **Day 3–4:** Run 12–15 scoping interviews. Two goals: confirm they didn't know they were deployers / are worried, and at the end ask for a €99 pre-order of the full evidence binder.
- **Day 5:** Decide. **Go** if ≥4 of ~15 interviewed firms pre-pay, *and* at least one HR-tech vendor or HR association says yes to a follow-up partnership conversation. **No-go** if fewer pre-pay or the universal reaction is "our ATS vendor handles that for us."

Falsifiable: paid pre-orders, not nods.
