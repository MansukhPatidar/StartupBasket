---
title: "EvictIQ — Section 8 possession cockpit for small UK landlords"
slug: evictiq-section8-cockpit
date: 2026-05-12
category: PropTech SaaS / UK Small Private Landlords (1–10 properties, post-Section-21)
complexity: Medium
score: 81
verdict: STRONG GO
confidence: High
oneLiner: "Ground-picking cockpit that drafts court-tight Form 3A Section 8 notices for small UK landlords post Renters' Rights Act."
tags:
  vertical: PropTech
  model: SaaS
  geography: EU
  secondary: [Compliance-driven, WhatsApp-first, Renters-Rights-Act, Landlord, SMB, Solo-builder, AI-agent, Regulatory-cliff]
axes:
  problem: 18
  demand: 13
  build: 12
  distribution: 12
  revenue: 12
  time: 8
  defensibility: 6
founderFit: [technical-heavy, domain-expertise-required]
featured: true
---

# EvictIQ — Section 8 possession cockpit for small UK landlords

## 1. One-liner

Ground-picking cockpit that drafts court-tight Form 3A Section 8 notices for small UK landlords post Renters' Rights Act.

## 2. Trend signal — why now?

Twelve days ago — 1 May 2026 — Section 21 "no-fault" evictions died in England. The Renters' Rights Act 2025 converted every assured shorthold tenancy to a periodic assured tenancy, mandated a brand-new prescribed notice (Form 3A), and made Section 8 the only route to possession. Every landlord in England who wants their property back now has to (a) pick the correct statutory ground from 37 options (20 mandatory, 17 discretionary), (b) hit the right notice period (2 weeks to 4 months depending on ground), (c) respect a 12-month protected period that locks out grounds 1, 1A, 1B and 6 for the first year of the tenancy, (d) prove the new Information Sheet was served by 31 May 2026, and (e) — from late 2026 — be registered on the new Private Rented Sector (PRS) database, without which most notices are legally void.

Pre-1 May, ~70% of small landlords used Section 21. One form. No grounds picking. No evidence threshold. Post-1 May, the same landlords have to operate inside a procedure-and-evidence regime that legal commentators are describing as "considerably changed and significantly longer". If the form is wrong, the address is misspelled, the notice period is short, or the right ground isn't named in the exact statutory wording, the court strikes the claim out. A struck-out claim costs the £391 court fee, another rent-free month or two, and a restart from scratch. Stephensons and Talbots Solicitors both flag form mistakes as the #1 cause of voided notices in 2026.

The existing landlord stack does not solve this. Hammock and Landlord Studio are tenancy-management dashboards — yields, statements, mileage — not possession cockpits. OpenRent has announced a Section 8 tool "coming soon" with no live product. LetSafe UK sells one-off downloadable template packs at £19–£150. Tenant City has a Form 3A generator but no expiry tracking, no ground-picking logic, and no route into HMCTS. Landlord Action, Aminhaque and Helpland charge £75–£1,200 per notice as a human service. There is no SaaS cockpit that walks a small landlord from arrears-trigger through served notice through PCOL/N5 claim, validating the Renters' Rights Act ruleset at every step.

The regulatory window is wide open and the clock is running. The £30K/£20K MTD ITSA tax thresholds in April 2027/2028 will compound the "I'm an accidental landlord, get me out" sentiment — and the PRS database goes live late 2026, adding a new dependency that hard-voids notices for unregistered landlords. Three regulatory cliffs in 18 months, one workflow that ties them together.

> Provenance:
>   - Signal 1: Renters' Rights Act 2026 commenced 1 May 2026; Section 21 abolished; Form 3A mandatory; courts strike out wrong-form notices — https://www.gov.uk/guidance/repossessing-your-privately-rented-property-after-1-may-2026 — 1 May 2026
>   - Signal 2: 2.3M+ private landlords in England (English Private Landlord Survey 2024), 88% own <5 properties, 43% own one property — a vast self-managing small-landlord population — https://www.gov.uk/government/statistics/english-private-landlord-survey-2024-main-report — 2024
>   - Signal 3: Existing solicitor-services Section 8 market: £75–£1,200 per notice (Aminhaque £75, NimbleFins £110–£350, full eviction £1,100–£3,000); ~70% of TDS deposit adjudications already go against landlords because of weak evidence — paid demand and willingness-to-pay both established — https://www.nimblefins.co.uk/business-insurance/landlord-insurance-uk/average-cost-evict-tenant — 2026
>   Category: Regulatory arbitrage

## 3. The opportunity — picking the right ground beats picking the right dashboard

The incumbents are looking at the wrong end of the funnel.

Hammock, Landlord Studio, OpenRent, Lendlord, Landlord Vision — they all sell a "be a better landlord" dashboard: rent collection, expense tracking, MTD-ITSA filing, tenant referencing. None of them solve **"my tenant is two months in arrears, what do I serve, on what form, when?"** — the question that loses landlords thousands when answered wrong.

The legal stack on the other side — Landlord Action, Aminhaque, Helpland, every high-street solicitor — solves the question but charges £180–£1,200 per notice and another £600–£3,000 if it goes to court. That price tier eats the entire arrears recovery for a small landlord whose monthly rent is £900.

The gap: a SaaS cockpit priced for small landlords (£29–£49/mo) that solves the **decisioning** problem — which ground, which form, which notice period, which evidence pack — and then carries the case forward into the HMCTS possession claim. It's not "draft a template" (LetSafe does that for £19). It's "given my tenancy file, my rent ledger, and the fact pattern of what my tenant has done, tell me exactly what to serve, validate it against every Renters' Rights Act trip-wire, generate the serve-pack with proof-of-service affidavit, calendar the expiry, and one-click into PCOL when the notice runs."

Three things make the timing right:

1. The Renters' Rights Act ruleset is **explicit and rule-codable**. The grounds are enumerated in statute. The notice periods are tabulated. The protected periods are dates. This is a domain where an AI agent grounded in a deterministic ruleset wins over both pure-LLM and pure-template approaches.
2. The PRS database (late 2026) becomes a hard precondition for valid notices. A cockpit that already has the landlord's portfolio loaded is the natural integration point — no other dashboard is positioned to chain "PRS-registered + Form 3A + proof-of-service" into a single check.
3. The arrears-trigger moment is high-emotion and high-urgency. Landlords who would never pay for "another dashboard" will absolutely pay £29 this month because their tenant just stopped paying.

## 4. Target market

- **Primary customer:** UK private landlord in England with 1–10 rental properties, self-managing or lightly-agent-supported, £40K–£500K annual rent roll, no in-house legal. Subsegments: (a) accidental landlords with 1 inherited/relocation property, (b) buy-to-let semi-pros with 2–5 properties, (c) "almost a portfolio" landlords with 6–10 properties who don't yet pay for full property management.
- **Why they buy:** Mid-arrears or anti-social-tenant moment. They Google "Section 8 form 2026", land on LetSafe / Citizens Advice / Property118, realise they need to pick from 37 grounds, get scared of voiding the notice, and either (a) DIY and frequently fail or (b) pay a £600 solicitor. Both paths feel bad. A £29/mo cockpit that says "based on your facts, serve Form 3A citing Ground 8 + Ground 10 + Ground 11, notice period 4 weeks, expires 12 June, evidence pack attached" is the right shape.
- **Rough TAM reasoning:** 2.3M private landlords in England. 88% small (<5 properties) = ~2M. Conservatively 60% self-manage = ~1.2M addressable. NRLA membership (£125/yr) already attracts 110K paying landlords — the willingness-to-pay-for-tools floor is established. Small portion (~5–10%) experience an arrears or anti-social possession event each year = ~60K–120K possession notices annually.
- **Why now for them:** Section 21 was the lazy man's eviction. It was abolished 12 days ago. Every existing tenancy converted to a periodic assured tenancy on 1 May 2026; the Information Sheet must be served by 31 May 2026 or future possession is blocked. Landlords who haven't read the new rules are walking into a wall. The first batch of post-RRA notices is being drafted right now, by people who are scared and confused. This is the moment.

## 5. Product sketch (MVP)

- **Fact-pattern intake**: Tenant in arrears? Anti-social behaviour? Need property back to sell or move in? Step through 8–12 multiple-choice prompts; upload tenancy agreement + rent ledger (PDF or CSV) + any prior correspondence.
- **Ground picker**: Deterministic engine maps the fact pattern to the correct Section 8 ground(s) with statutory citations, plus auto-detects compounds (Ground 8 + 10 + 11 for rent arrears is the standard triple-stack).
- **Trip-wire validator**: Checks the 12-month protected period (grounds 1/1A/1B/6 blocked in year-1), checks deposit-protection compliance (no deposit protection = no possession), checks Information Sheet served (mandatory for legacy ASTs), checks PRS database registration (from late 2026), checks notice-period arithmetic against ground.
- **Form 3A generator**: Auto-fills the prescribed Form 3A with exact statutory wording for each cited ground, correct dates, parties, addresses. Outputs print-ready PDF + tenant-served version + landlord file copy.
- **Serve-pack**: Proof-of-service affidavit, suggested service method (first-class post + recorded delivery + email belt-and-braces), timestamped photo upload for hand-delivery, calendar reminders.
- **Expiry tracker**: Tracks the notice clock, fires WhatsApp/email reminders, and at expiry one-clicks into PCOL (online for rent-arrears-only cases) or generates Form N5/N119 for paper-based service.
- **Evidence vault**: Rent ledger reconciliation against bank statement upload (open banking optional), photo-dated property condition snapshots, anti-social-behaviour incident log with date-stamped entries.
- **WhatsApp-native check-ins**: "It's day 14 of the notice — anything to update? Reply YES if tenant has paid, NO if no change."

## 6. AI angle — what's load-bearing

Three places where AI does real work, not decoration:

1. **Fact-pattern → ground inference**. Free-text intake ("tenant hasn't paid since February and last month they had a noise complaint") gets parsed into a structured fact pattern, which feeds a deterministic rule engine that picks Section 8 grounds with statutory citations. The LLM does the messy parsing; the rules engine does the legal decision. This split is the moat — pure-LLM hallucinates grounds, pure-template can't handle natural-language input.
2. **Rent ledger reconciliation**. Landlord uploads a bank-statement PDF or CSV plus the tenancy agreement. AI matches payments to rent due, computes arrears, builds a court-presentable rent statement going back 2 years (HMCTS standard).
3. **Evidence-pack synthesis**. Pulls together the tenancy agreement, deposit-protection certificate, EPC, gas safety, electrical certificate, Information Sheet acknowledgment, and the rent ledger — checks all are present and dated correctly, flags missing items before the notice goes out. This pre-notice audit is the #1 reason notices get voided — and the #1 reason solicitors charge £600.

Remove the AI: it becomes a £49 template + a checklist PDF. Which is what LetSafe sells today, and which is exactly the shape we're disrupting.

## 7. Localization angle

This is an England-only product (Renters' Rights Act doesn't apply to Scotland, Wales, NI — which all have their own regimes). The localization angle is the regulation itself: Form 3A, the 37 grounds, the protected period, the PRS database, the Information Sheet. It does not extend trivially to other regions — Scotland has the Private Housing (Tenancies) Act, Wales the Renting Homes Act, NI its own framework. Each would need a separate ruleset.

Within England, secondary localization is light: HMCTS forms are national, court fees are national, the prescribed forms are national. The one wrinkle is selective licensing schemes that vary by council — a v2 add-on, not a v1 wedge.

WhatsApp-first matters less in the UK than in India/Mexico, but it still helps with the small-landlord segment that lives in WhatsApp groups (NRLA local chapters, Property118 chat) and doesn't want yet another dashboard login.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:**
  - **Solo £19/mo** — 1 property, includes 1 notice/year + ongoing compliance scan
  - **Portfolio £39/mo** — up to 5 properties, unlimited notices, full evidence vault, PRS sync
  - **Pro £79/mo** — 6–25 properties (small letting agents), team seats, white-label notice serve-pack
  - **Pay-per-notice £49** — one-off for cold-traffic landlords who don't want a sub yet
- **ACV:** £350 (Solo) / £470 (Portfolio) — Portfolio is the workhorse SKU. Blended ~£400.
- **Rough math to $1M ARR (~£790K):** 2,000 paying landlords × £39/mo × 12 = £936K. ~2K customers from 1.2M addressable = 0.17% penetration. Realistic in 12 months given the trigger event.
- **Rough math to $5M ARR (~£4M):** 8,500 paying landlords on Portfolio or 4,000 on Pro. Or a blend. 0.7% penetration of the addressable self-managing landlord pool. Realistic in 24 months if the PRS database launch becomes a re-entry hook in late 2026.
- **Expansion path:** Notice-by-notice → recurring sub → portfolio expansion → small-agent Pro tier → adjacent products (deposit-dispute defence pack, PRS-database compliance dashboard, MTD-ITSA tie-in via partnership). Pay-per-notice → sub conversion is the primary engine; users who serve one notice usually have another within 18 months.

## 9. Go-to-market wedge — first 100 customers

1. **r/uklandlords (~80K members) + Property118 forum + LandlordZone forum**: 3–5 thoughtful comment-marketing posts a week answering specific "I need to serve Section 8 because…" threads, linking back to a free Form 3A ground-picker (no signup) that upsells. 1% comment → site → 5% site → pay-per-notice → 5% pay-per-notice → sub gives ~120 paying users over 90 days.
2. **OpenRent + Hammock + Landlord Vision affiliate**: small landlord platforms aren't going to build deep eviction tooling — pitch a referral revenue share (£10–£20 per converted customer). OpenRent's "coming soon" tool is a tell: they want someone else to solve this.
3. **NRLA local-chapter sponsorship**: NRLA has 110K paying landlords and runs ~50 local chapters with monthly meetups. £200–£500 sponsorship of 5–10 chapters with a "your members get 20% off" code. Targeted demographic, fits operator-led growth.
4. **Cold outreach to TDS deposit-dispute losers**: TDS publishes adjudication statistics; landlords who lost a deposit dispute in the last 6 months are exactly the "I keep losing because my paperwork is weak" demographic. Pair with a content piece "Why deposit disputes and Section 8 notices fail for the same reason."
5. **SEO on the 37 ground pages**: One page per Section 8 ground ("Ground 8: mandatory rent arrears — when to use it and when it'll be struck out"). Long-tail commercial intent. Landlordheaven, LetSafe and Independent Landlord already rank but with thin static content; LLM-grade depth wins here.

## 10. Build complexity — justification

**Medium.** Three buildable chunks: (a) deterministic rules engine for the Renters' Rights Act ruleset — codable from the statute and HMCTS form prescriptions in ~3–4 weeks by one technical founder with a legal advisor on retainer; (b) LLM-backed intake + ledger reconciliation — standard Anthropic/OpenAI pipeline, ~3–4 weeks; (c) Form 3A PDF generation, expiry tracking, PCOL integration prep — ~4–6 weeks. Pair team ships v1 in ~3 months; ~4 months including evidence vault and WhatsApp channel. Off-the-shelf for everything except the rules engine, which is bespoke but bounded. PCOL has no public API — landlords self-submit via the HMCTS portal; the cockpit generates the inputs in copy-paste-ready format until/unless HMCTS opens an API.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Drafting templates and providing legal information is non-reserved activity under Legal Services Act 2007 §12. Clear "we are not solicitors" framing required. Cannot represent in court — but generating documents and tracking process is fine. |
| Ethical — no harm / dark patterns | ✅ | Helps landlords serve legally compliant notices; the *tenant* benefits when notices are correctly served (no surprise evictions, valid grounds, proper notice periods). Avoid Ground 1A (sale-only) framing that encourages bad-faith use. |
| Market exists (evidence above) | ✅ | 2.3M landlords, ~60K–120K possession events/year, paid alternatives at £75–£1,200/notice, regulatory cliff 12 days ago. |
| 1–5 person team can build this | ✅ | Pair (technical + part-time UK landlord-lawyer advisor) ships in 3–4 months. |
| Launchable with <$50K / ₹40L | ✅ | £15K–£25K covers v1: legal advisor £8K, infra £2K, founder time, marketing/content £3K. |

All five clear.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 18/20 | Hair-on-fire when tenant arrears hit. Mistake costs £391 court fee + 1–3 lost months + £600–£3K legal restart. Real numbers, real urgency. |
| Demand evidence | 15 | 13/15 | Established paid market (Landlord Action, Aminhaque, Helpland at £75–£1,200/notice), NRLA has 110K paying members at £125/yr, fresh regulatory cliff. Slight ding because no public revenue numbers for direct competitors and Reddit/forum thread depth couldn't be verified directly. |
| Build feasibility | 15 | 12/15 | Rules engine is the trickiest piece — codable but needs a UK housing solicitor as advisor. PCOL has no API. Pair team in 3–4 months is realistic but not 6 weeks. |
| Distribution clarity | 15 | 12/15 | r/uklandlords + Property118 + NRLA chapters + LandlordZone + SEO on the 37 grounds. Named channels, named lists. SEO ramp takes 3–6 months but pay-per-notice + cold outreach to TDS losers covers the first 90 days. |
| Revenue mechanics | 15 | 12/15 | £39/mo Portfolio is benchmarked against NRLA (£125/yr) and below Hammock (£8–30/mo). ACV ~£400. Math to £1M ARR needs 2K customers from 1.2M addressable — clearly achievable. Pay-per-notice conversion to sub is the variable. |
| Time to first revenue | 10 | 8/10 | Pay-per-notice is launchable as soon as Form 3A generator works (week 6–8). Sub conversion follows within a month. Not pre-sold, but the trigger event is so frequent (~5K notices/week nationally post-RRA) that first revenue in 6–8 weeks is realistic. |
| Defensibility | 10 | 6/10 | Rules engine + accumulated case-pattern data + integration into PRS database when it launches gives a workflow-lockin moat. Not a hard moat — OpenRent or Hammock could clone in 6–12 months — but a 12-month head start during the RRA shake-out is the window. |
| **Total** | **100** | **81/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required`

Best fit: a technical operator who pairs with (or hires part-time) a UK housing solicitor who has personally drafted Section 8 notices and watched them get struck out. The rules engine has to be right; LLM-only would hallucinate grounds and torch the brand on the first court strike-out.

### Key assumptions to validate (3–5)

1. **Assumption:** ≥60% of small landlords (1–10 properties) currently self-manage possession notices rather than using a solicitor — implying real DIY pain. **How to test:** survey 100 landlords on r/uklandlords + Property118 + NRLA Slack; ask "for your last Section 8 / Section 21, who drafted it?" Target ≥60% saying "I did it myself / template" vs solicitor.
2. **Assumption:** Pay-per-notice at £49 converts to monthly Portfolio sub at ≥15% within 90 days of the one-off purchase. **How to test:** launch the £49 SKU first, instrument the conversion funnel, measure 90-day cohort.
3. **Assumption:** Small landlords trust an AI-generated Form 3A enough to serve it without a solicitor review when the tool shows confidence + statutory citations. **How to test:** waitlist landing page with a fake-door "generate my Form 3A — £29" button; measure click-through and email-list quality. Target 25%+ landing→intent.
4. **Assumption:** Court strike-out rate for self-drafted Section 8 notices is materially higher than 5%. (If it's <5%, the pain is theoretical rather than acute.) **How to test:** FOI request to HMCTS for 2024 possession claim strike-out reasons; cross-check Stephensons/Talbots commentary; interview 5 high-street solicitors. Target evidence that ≥10% of DIY notices get struck out.
5. **Assumption:** Letting agents handling 5–50 properties will refer landlords (rev-share) rather than building competing tooling. **How to test:** 30 cold-outreach calls to small letting agents; pitch 20% rev-share on referrals; target 5+ agreeing to refer.

### Risk flags

1. **Regulatory drift / SRA reach**: If the SRA expands what counts as "providing legal advice" (currently non-reserved), the cockpit's positioning ("we generate documents based on your inputs") could get squeezed. Mitigation: keep firm-line between document generation and advice; never personalize advice via LLM in production output. Display "not a substitute for a solicitor" prominently.
2. **OpenRent or Hammock launches a competing tool with free distribution**: OpenRent has announced a Section 8 tool with no live product yet; if they ship a free bundled version, the price floor moves. Mitigation: ship the cockpit faster, win the SEO real estate now, anchor on the rules-engine quality moat rather than form generation.
3. **PRS database integration politics**: The PRS database is government-operated. If it has a closed API or charges per-call, integration is harder. Mitigation: design for a screen-scrape + landlord-uploaded-PDF fallback; integration upside is bonus, not gating.
4. **Tenant-advocacy backlash**: Tenants and Shelter could frame the tool as "AI helping landlords evict faster." Reputational risk. Mitigation: position as "compliance + procedural correctness" — well-served notices benefit tenants too (no surprise evictions, more time, proper grounds). Refuse cases that obviously misuse Ground 1A.
5. **Renters' Rights Act amendments**: A future Labour amendment could re-introduce something like Section 21 caveats or change the grounds again. Mitigation: rules engine is versioned; any amendment is a 1-week update window, not a re-build.

## 14. Structured verdict

```
Score:                  81/100
Verdict:                STRONG GO
Confidence:             High
Best-fit builder:       Technical founder + part-time UK housing solicitor advisor (£500–£1.5K/mo retainer). Domain knowledge is non-negotiable; pure tech founder will ship a confident-sounding hallucinating product.
Time to revenue:        6–8 weeks (pay-per-notice SKU), 10–14 weeks (Portfolio sub at scale)
Capital to launch:      £15K–£25K ($19K–$31K)
Top 3 assumptions to validate first:
  1. ≥60% of small landlords self-draft Section 8 notices today (survey on r/uklandlords + Property118 — week 1)
  2. Pay-per-notice → sub conversion ≥15% within 90 days (live SKU experiment — weeks 2–10)
  3. Court strike-out rate for DIY notices ≥10% (FOI + solicitor interviews — week 1–2)
Kill criteria:
  - Abandon if <5% of 100 surveyed small landlords say they'd consider a £29/mo tool over their current path
  - Abandon if OpenRent ships a free Section 8 cockpit equal-feature-set within 90 days of our launch
  - Abandon if Government announces it will operate the PRS database with a bundled free notice-generator as the official tool
  - Abandon if HMCTS opens a closed PCOL API that excludes third-party submission
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Build a single-page landing site — "EvictIQ: pick the right Section 8 ground in 3 minutes, draft Form 3A, never get struck out." Fake-door "Generate my notice — £29 pay-per-notice / £39/mo Portfolio." Post 5 thoughtful comment-marketing replies on r/uklandlords + Property118 + LandlordZone + OpenRent forum on existing Section 8 threads, linking back where contextually appropriate (no spam).
- **Day 3–4:** Direct outreach: 30 cold messages to small landlords who posted "I need to serve Section 8" in the last 14 days across the four forums. Offer a free 20-minute call: "I'm building a tool, want to walk through your case and see if it helps?" Goal: 8 calls booked. Plus a 5-minute survey ("how did you draft your last notice?", "what would you pay for X?") to 100 NRLA members via the local-chapter Slack.
- **Day 5:** Decision gate based on:
  - ≥150 unique landing visitors with ≥10% clicking the £29 fake-door **AND**
  - ≥6 of 8 booked-call landlords saying they'd pre-pay £49 for a working v1 **AND**
  - ≥35% of 100 surveyed landlords saying "I self-drafted / template-only / DIY" for their last notice
- **Falsifiable result:** if the £29 click-rate is <5% or fewer than 4 of 8 call landlords pre-pay, the urgency thesis is wrong and this is a VALIDATE not a GO. Park the idea, harvest the landing list, and revisit when PRS database launches in late 2026.
