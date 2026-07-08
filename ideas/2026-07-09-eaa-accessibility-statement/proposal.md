---
title: "StatementKeep — EAA conformance ledger for EU-facing SMBs"
slug: eaa-accessibility-statement
date: 2026-07-09
category: Compliance / EU — SMBs & Web Agencies (EAA accessibility statement & conformance record)
complexity: Medium
score: 74
verdict: GO
confidence: Medium
oneLiner: "Scans your site on a schedule and keeps your EAA accessibility statement true, versioned, and audit-defensible."
tags:
  vertical: Compliance
  model: SaaS
  geography: EU
  secondary: [Compliance-driven, SMB, AI-agent, Agency-channel, Multilingual]
axes:
  problem: 15
  demand: 12
  build: 12
  distribution: 11
  revenue: 11
  time: 7
  defensibility: 6
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# StatementKeep — living EAA conformance ledger for EU-facing SMBs

## 1. One-liner

Scans your site on a schedule and keeps your EAA accessibility statement true, versioned, and audit-defensible.

## 2. Trend signal — why now?

The European Accessibility Act became enforceable **28 June 2025** across all 27 EU member states. This is not a "coming soon" — enforcement is already live and moving:

- **France filed the first EAA lawsuits in November 2025** — disability orgs ApiDV and Droit Pluriel hit Auchan, Carrefour, E. Leclerc and Picard with emergency injunctions. In **June 2026 the court ordered Carrefour France to make its site + app fully accessible within six months under a per-day fine for delay**. The cases explicitly cite *the absence of accessibility statements*.
- **France charges €25,000 per year, accruing annually, for a missing accessibility statement** — separate from any remediation fine. That's a recurring, dumb-to-eat penalty.
- **Netherlands (ACM), Germany, and Sweden (PTS) have launched formal enforcement programs; NL plans audits spring 2026.** Enforcement is spreading beyond France this year.
- The micro-exemption is narrow: **only <10 employees AND <€2M turnover**. Every SMB above that line selling to EU consumers — regardless of where it's headquartered — is now on the hook.
- The statement is supposed to be a *living* record: "tie the statement to live audit data so it cannot drift… most national guidance expects annual review at minimum, with updates whenever the product changes." An outdated statement is a documented "smoking gun" plaintiffs' attorneys use to prove the business *knew* and did nothing.

And nobody sells the living version. Every "EAA accessibility statement generator" on the market (WebYes, iubenda, accessi.org) is a **static form** — fill it once, it goes stale the day you ship a new checkout. In my research a direct query for a product that "auto-generates and keeps accessibility statements updated based on live monitoring data" returned nothing.

Provenance:
  - Signal 1 (Demand): France €25K/yr penalty for missing accessibility statement + first EAA lawsuits Nov 2025 explicitly cite missing statements; Carrefour per-day fine ruling June 2026 — https://web-accessibility-checker.com/en/blog/eaa-fines-penalties-by-country , https://testparty.ai/blog/first-european-accessibility-act-lawsuits-france-2025 — 2026-07-09
  - Signal 2 (Feasibility): AI can now read raw WCAG scan output and draft legally-shaped, jurisdiction-correct statements cheaply; automated a11y scanners (axe, Pope Tech, Silktide) commoditized at $49–990/yr; per-page AI remediation collapsed to $0.25–2 — https://www.browserstack.com/guide/wcag-ada-testing-tools , https://www.continualengine.com/blog/best-pdf-remediation-tools/ — 2026-07-09
  - Signal 3 (Economic): Digital accessibility software market $878M (2025) → $1.75B (2026), 10%+ CAGR; Level Access >$100M ARR, AudioEye $36.6M ARR; Level Access bought UserWay for ~$99M — money is pouring into this category and the EAA is the named driver — https://accessible.org/financial-report-revenue-digital-accessibility-companies/ , https://www.precedenceresearch.com/digital-accessibility-software-market — 2026-07-09
  Category: Regulatory arbitrage

## 3. The opportunity

The accessibility market is barbelled. At the top, **Level Access ($100M+ ARR), Deque, Siteimprove** sell $10K–100K enterprise audit-and-monitor contracts to companies with a legal team. At the bottom, **accessiBe / UserWay overlays** sell a $49/mo widget that the FTC fined accessiBe **$1M** for falsely marketing, that **~23% of 2025 accessibility lawsuits specifically named as a barrier**, and that blind-user advocacy orgs tell people to *disable*. Overlays are worse than nothing — they're litigation bait.

The 10–150-employee EU-facing SMB is stranded in the middle. Too big for the micro-exemption, too small to spend $15K on a manual audit, and correctly terrified of the overlay trap. What they actually need first isn't a perfect site — it's the **defensible paper trail**: a published accessibility statement that is *accurate to the current state of the site*, a disproportionate-burden justification when they can't fix everything at once, and a versioned record proving steady good-faith progress. That's the artifact a regulator or plaintiff checks first, and the one France already fines €25K/yr for missing.

Nobody's building the living version of that document for this segment. The incumbents sell scanning; the free tools sell a static PDF. The 10× move: **the scan and the legal record are the same product, and the record updates itself.**

## 4. Target market

- **Primary customer:** Owner/ops/marketing lead at an EU-facing SMB (ecommerce, SaaS, booking, banking-adjacent, travel) with **10–150 employees**, above the micro-exemption, no in-house accessibility specialist. Secondary and equally important: **web agencies and freelancers** who build/maintain these sites and are being asked by clients "what do I do about the EAA?" — they resell StatementKeep as a managed line item.
- **Why they buy (in their words):** "Part of your job might be helping clients draft their accessibility statement and set up feedback channels" (AAArdvark, to agencies). "An outdated statement signals systematic neglect… tells the real story about your commitment." They don't want to become accessibility experts — they want the fine off the table and a document they can point a regulator to.
- **Rough TAM reasoning:** The EU has millions of SMBs; the slice that (a) sells to consumers online, (b) is over the micro-threshold, and (c) hasn't solved this is easily in the hundreds of thousands. I only need a few thousand. Agencies multiply reach — one agency = 20–200 client sites.
- **Why now for them:** Enforcement went live June 2025, France is already fining, NL/DE/SE audit programs ramp through 2026, and the €25K/yr missing-statement penalty is the cheapest possible thing to avoid. The existing-services grace period ends June 2030, but *new* products/services must comply *today* — so any SMB that ships anything is already in scope.

## 5. Product sketch (MVP)

- **Recurring automated WCAG 2.1 AA scan** (EN 301 549 benchmark) of the customer's site + key user flows, on a schedule (weekly/monthly).
- **Auto-drafted accessibility statement** in the exact EAA structure: provider identity, accessibility features present, known non-conformances, disproportionate-burden reasoning, and an accessible feedback channel — jurisdiction-correct (WCAG 2.1 today, not the "2.2" that template-copiers get wrong).
- **Living conformance ledger:** every scan is versioned and timestamped, so the published statement always reflects the *last real assessment*, and you have a dated audit trail proving good-faith progress over time.
- **Drift alerts:** when a new scan finds the site fell below what the statement currently claims, StatementKeep flags it and drafts the corrected statement — so the public document never becomes the "smoking gun."
- **Disproportionate-burden dossier builder:** guided workflow that produces the documented reasoning the EAA requires when a small business defers a fix.
- **Hosted feedback intake:** the EAA-mandated accessibility contact channel, with a logged, timestamped complaint trail (regulators check whether you responded).
- **PDF/document check** for linked invoices, manuals, warranty docs — flags which downloadable assets are non-conformant (a specifically-named EAA obligation most tools skip).
- **Multilingual statement output** per member state; embeddable badge + hosted statement page.

## 6. AI angle — what's load-bearing

Two places AI does real work, not decoration:

1. **Translating scan output into a legally-shaped, jurisdiction-correct statement.** A raw axe-core report is a JSON dump of WCAG failures. Turning that into the EAA's required prose — "here's what's accessible, here's what isn't, here's our burden reasoning" — in the right legal register, in the member-state language, updated every scan, is exactly the drudge work an LLM collapses from a paralegal-hour to seconds. Remove the AI and you're back to paying a consultant to rewrite the statement every quarter — which is why nobody maintains them.
2. **Interpreting drift.** Deciding whether a new scan result *materially* changes what the statement should claim (vs. noise) and drafting the delta is judgment work the model does well and a static generator can't do at all.

The scanning itself is off-the-shelf; the AI is what makes the *record maintain itself*, which is the entire product thesis.

## 7. Localization angle (if any)

This is inherently a **multi-jurisdiction EU play** — the localization *is* the product. Each member state transposed the EAA into its own law with its own enforcement body (France DGCCRF, NL ACM, Sweden PTS), its own penalty schedule, and its own official language for the statement. StatementKeep's edge over a generic US WCAG tool is knowing that France fines €25K/yr for a missing statement specifically, that the live harmonised standard still references WCAG 2.1 (not 2.2), and generating the statement in the correct language with the correct national contact/complaint routing. A US-centric ADA tool cannot do this without deep EU-specific work — that gap is the moat's first brick.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** €39/mo single site (Starter); €99/mo up to 5 sites + PDF checks + burden dossier (Growth); **Agency €249–499/mo** for 20–200 client sites under one dashboard with white-label statements. Benchmarks: UserWay $49/mo, Silktide $199–990/yr, iubenda-style compliance subs €29–99/mo — StatementKeep sits right in the proven band.
- **ACV:** ~€900 blended (mix of direct SMB €468/yr and agency €3–6K/yr).
- **Math to $1M ARR:** ~1,100 customers at €900 ACV ≈ €1.0M. Realistically ~700 direct SMBs + ~120 agencies (agencies weight the average up hard).
- **Math to $5M ARR:** ~5,500 blended, or ~1,500 direct + ~600 agencies each managing a book of client sites. Agency-led motion is how you get there without enterprise sales.
- **Expansion path:** per-site pricing scales as agencies add clients; upsell PDF/document remediation, manual-audit-add-on (partner with human auditors, take margin), and per-member-state packs as more countries turn on enforcement in 2026–27.

## 9. Go-to-market wedge — first 100 customers

- **Agencies first — they have the client lists I don't.** Scrape EU web-dev/Shopify-Plus agency directories (Clutch EU, Shopify Partners EU, Ds). Cold email: "Your clients are asking about the EAA. Here's a white-label statement generator you can bill them €X/mo for — you keep the margin." Agencies are *actively looking* for an answer to give clients (per AAArdvark). Target 10–20 agency signups = 200–1,000 downstream sites.
- **Ride the France enforcement news.** Every EAA lawsuit and the Carrefour ruling generates panic among EU SMBs. Run targeted content + LinkedIn outreach to French, Dutch, German ecommerce operators the week each enforcement story breaks: "Carrefour just got a daily fine. The €25K/yr statement penalty is the cheapest one to avoid — here's a 10-minute fix."
- **Cold-outreach the exposed.** Buy/scrape lists of mid-size EU ecommerce sites (>10 employees, filterable via BuiltWith/Shopify + registry data), run a free automated scan, email the owner their *specific* failing report + "your published statement is out of date / missing." A scan-in-hand demo converts far better than a generic pitch.
- **Partner with EU cookie-consent / GDPR compliance sellers** (iubenda, Cookiebot resellers) who already own this exact buyer and this exact "compliance-anxiety" moment — bundle or refer.

## 10. Build complexity — justification

Medium. Scanning is off-the-shelf (axe-core / Lighthouse / Pa11y). The custom work is: (a) the EAA-specific statement schema + per-member-state legal/language templates (domain research, not novel engineering), (b) the versioned ledger + drift-detection logic, and (c) the agency multi-site dashboard. No custom models, no proprietary data. A technical founder with an accessibility/compliance advisor ships a credible v1 in ~10–14 weeks; the domain research (getting each jurisdiction's requirements right) is the real time sink, not the code.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Compliance-enabling; the opposite of a dark pattern. |
| Ethical — no harm / dark patterns | ✅ | Must avoid the accessiBe trap: sell the honest record, never claim "instant compliance." Positioning is the ethics guardrail. |
| Market exists (evidence above) | ✅ | Live enforcement, active fines, funded incumbents, market >$1.7B. |
| 1–5 person team can build this | ✅ | Off-the-shelf scanning + LLM drafting + standard web stack. |
| Launchable with <$50K / ₹40L | ✅ | Solo/pair build; main cost is a compliance advisor's time. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 15/20 | Real, recurring, fine-backed (€25K/yr) — but for many SMBs it's "acute at audit," not literally hair-on-fire daily until the letter arrives. |
| Demand evidence | 15 | 12/20→12/15 | Multiple hard signals: live lawsuits, per-country fines, funded incumbents, growing market. Slight ding: direct "SMB is buying a *statement* tool" evidence is thinner than the macro signal. |
| Build feasibility | 15 | 12/15 | Scanning off-the-shelf; jurisdiction templates + ledger are the honest work. ~10–14 weeks. |
| Distribution clarity | 15 | 11/15 | Agency channel + enforcement-news timing are concrete and named; conversion on cold SMB is uncertain. |
| Revenue mechanics | 15 | 11/15 | Pricing benchmarked and in-band; agency motion carries ACV. Churn risk once a statement is "done" is the open question. |
| Time to first revenue | 10 | 7/10 | Agencies can pre-buy fast; self-serve trial-to-paid in weeks. Not instant, not slow. |
| Defensibility | 10 | 6/10 | Moat is jurisdiction depth + agency lock-in + accumulating ledger data, not tech. Enterprise incumbents could move down-market. |
| **Total** | **100** | **74/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required` — you need someone who can wire scanning + LLM drafting, and access to real EAA/EN 301 549 legal detail per member state (advisor or co-founder). Get the law wrong and you've built a liability, not a product.

### Key assumptions to validate (3–5)

1. **Assumption:** SMBs will pay a recurring fee for a *maintained* statement rather than using a free one-time generator. **How to test:** Put up a landing page offering "your statement, kept true automatically, €39/mo" and run scan-in-hand cold outreach to 100 EU ecommerce owners; measure trial starts and paid conversion.
2. **Assumption:** Agencies want to resell this as a billable line item. **How to test:** Pitch 20 EU web agencies the white-label offer; target ≥5 saying "yes, I'd bill my clients for this."
3. **Assumption:** Churn stays acceptable — i.e. buyers value ongoing drift-monitoring, not just the first document. **How to test:** In pilot, track whether early users keep paying past month 2 and whether drift alerts actually fire on their real sites.
4. **Assumption:** The living-statement legal value holds up — i.e. a dated, accurate statement + ledger meaningfully reduces enforcement exposure. **How to test:** Get two accessibility/EU compliance lawyers to confirm the artifact is what regulators/plaintiffs weigh.

### Risk flags

1. **Regulatory nuance risk:** Getting a member-state's requirement or language wrong ships customers a *defective legal document*. This is the core risk — mitigate with per-jurisdiction advisor review and conservative, honest statement language.
2. **Commoditization / incumbent push-down:** Silktide, UserWay, iubenda could bolt a "living statement" onto existing scanners. Speed + agency relationships + jurisdiction depth are the only defense; the window is 2026.
3. **Churn after the document is "done":** If buyers perceive the statement as one-and-done, recurring revenue erodes. The whole pitch must be *maintenance and drift*, not generation — the ongoing fine risk is what justifies the subscription.
4. **Positioning / ethics trap:** Overclaiming "compliance" is exactly what got accessiBe a $1M FTC fine. Must sell "honest, defensible record," never "you're now compliant."

## 14. Structured verdict

```
Score:                  74/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder + EU accessibility/compliance advisor; agency-sales instinct
Time to revenue:        6–10 weeks (agency pre-sales faster than direct SMB)
Capital to launch:      ₹4–8 lakh / $5–10K (mostly advisor time + scan infra)
Top 3 assumptions to validate first:
  1. SMBs pay recurring for a maintained statement vs. free one-time generator — landing page + 100-owner scan-in-hand outreach
  2. Agencies resell as a billable line — pitch 20, need ≥5 yeses
  3. Ongoing value / low churn — pilot cohort still paying month 2, drift alerts firing on real sites
Kill criteria:
  - Abandon if <5% of 100 cold SMB scan-in-hand emails convert to a trial
  - Abandon if <3 of 20 pitched agencies commit to reselling
  - Abandon if a compliance lawyer says the artifact carries no real enforcement-mitigation weight
  - Abandon if an incumbent (UserWay/Silktide/iubenda) ships an equivalent living-statement feature before your v1
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Build a one-page site: "Your EAA accessibility statement, kept true automatically. €39/mo." Wire a free automated scan behind an email gate. Draft one *real* sample statement from a live SMB scan to use in outreach.
- **Day 3–4:** Run the scan on 100 mid-size EU ecommerce sites; cold-email each owner their specific failing report + "your statement is missing/out of date, France now fines €25K/yr for that." Separately, DM 20 EU web agencies the white-label reseller pitch.
- **Day 5:** Decide go/no-go on a **falsifiable** bar: **≥5 SMB trial signups from the 100 emails AND ≥3 of 20 agencies saying "yes, I'd resell this."** Hit both → build. Miss either → the pain isn't purchase-triggering yet; shelve until a bigger enforcement wave (NL/DE audits land) reprices it.
