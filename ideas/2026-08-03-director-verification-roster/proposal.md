---
title: "CodeRoster — director verification roster for UK firms"
slug: director-verification-roster
date: 2026-08-03
category: Compliance / UK-SMB — Accountancy Practices (1–20 Staff) Filing for Limited Company Clients Under ECCTA
complexity: Low
score: 76
verdict: GO
confidence: Medium
oneLiner: "Shows a UK accountant which client directors are still unverified, and which filing each one is about to block."
tags:
  vertical: Compliance
  model: SaaS
  geography: EU
  secondary: [UK, Compliance-driven, SMB, AI-agent, Solo-builder, ProfessionalServices]
axes:
  problem: 17
  demand: 13
  build: 13
  distribution: 12
  revenue: 11
  time: 8
  defensibility: 2
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# CodeRoster

## 1. One-liner

Shows a UK accountant which client directors are still unverified, and which filing each one is about to block.

## 2. Trend signal — why now?

There is a hard, dated cliff in the UK company register and millions of people are standing on the wrong side of it.

The Economic Crime and Corporate Transparency Act 2023 made identity verification mandatory for every UK company director and Person with Significant Control. The regime went live **18 November 2025** with a 12-month transition that ends **17 November 2026** — fourteen weeks from today. After that, non-compliance becomes a criminal offence with fines up to £5,000 per individual, potential disqualification, and strike-off.

The volumes are not close to on track. As of **March 2026 there were 6,632,015 directors still unverified**. By **June 2026 that was 5,494,458**, with practitioners projecting **over 2 million still unverified after the deadline**. Verification is running at roughly 700,000/month, of which a large share are new appointments rather than the existing backlog.

Here's the part that makes this a product rather than a news story: **the deadline that actually bites is not November — it's each client's own confirmation statement date.** An unverified director blocks that company's confirmation statement immediately, and failing to file a confirmation statement is itself a criminal offence carrying fines and potential strike-off. A rejected filing also puts the company technically in default, which can trigger loan covenant breaches, invalidate insurance and block a sale process. So a firm with 300 limited company clients is not facing one deadline in November — it's facing 300 rolling deadlines, each gated on a personal code held by a person who does not work for them.

And this has landed squarely on accountants. Chris Demetriou of Archimedia Accounts, quoted in Accountancy Age: *"What sounds like a simple ten-minute verification can quickly become a 30 to 60-minute exercise..."* and *"In practice, this has become process management rather than simple administration."* He puts hands-on support at *"Around a quarter of clients require some form of hands-on support to complete the process successfully."*

Meanwhile the API side just became tractable. Since 18 November 2025 the Companies House Public Data API exposes an `identity_verification_status` field on officer records — free, public, no AML gating, at 600 requests per 5 minutes per key. The data is real but *messy*: developers report `identity_verified_on` missing for officers the web UI shows as verified, and the field only populates for ACSP-route verification. That messiness is the moat — it's why a spreadsheet doesn't work and why a generic KYC vendor hasn't shipped this.

Provenance:
  - Signal 1 (demand): 6.63M directors unverified March 2026, 5.49M June 2026, 2M+ projected past deadline; unverified director blocks confirmation statement, itself a criminal offence — https://www.accountingweb.co.uk/any-answers/latest-id-verification-stats-for-companies-house / https://leadership-services.co.uk/insights/companies-house-identity-verification-2026/ — 2026-08-03
  - Signal 2 (feasibility): Companies House Public Data API exposes `identity_verification_status` on officers from Nov 2025, public and free, 600 req/5min; field population is inconsistent — https://dev.to/openregistry/uk-companies-house-post-eccta-reality-and-the-actual-api-surface-3737 — 2026-08-03
  - Signal 3 (economic): ACSP verification priced at £24.99–£74.99 per person; Companies House expected up to 55,000 ACSP registrations in year one; 2,756+ already in the public directory — https://121accounting.co.uk/acsp-identity-verification-near-me/ / https://verifymyclient.com/acsp-directory/ — 2026-08-03
  - Signal 4 (customer voice): "30 to 60-minute exercise", "process management rather than simple administration", ~25% of clients need hands-on help — https://accountancyage.com/press-release/accountant-warns-companies-house-identity-checks-are-creating-a-hidden-compliance-burden/ — 2026-08-03
  Category: Regulatory arbitrage

## 3. The opportunity

The market has solved the wrong half of this problem.

Everyone who has shipped something for ECCTA sells **the verification event**: Verify 365 and similar KYC/AML platforms do the identity check; ACSP service providers charge £24.99 a head to run one for you. That's a transaction. It's commoditised, it's already priced to the floor, and it's a terrible business — you get paid once per director, ever.

Nobody sells **the state**. The accountant's actual question is not "can you verify this person?" It is: *across my 300 client companies and their 700 officers, who is verified, who isn't, which personal codes do I actually hold on file, and which of next month's confirmation statements is about to bounce because of it?*

Practice-management incumbents are close but structurally miss it. BrightManager's automation engine generates task lists driven by HMRC and Companies House **deadlines** and chases clients for missing records. Senta has Companies House integration for company data. But they model *deadlines and documents* — they do not model *per-officer verification state joined against those deadlines*. A due date in BrightManager tells you a confirmation statement is due on the 14th. It does not tell you that it will be rejected on the 14th because one of three directors never finished verification in December.

That join — officer verification status × company filing calendar × codes-on-file — is the entire product. It is a genuinely small piece of software sitting on a genuinely large, dated, criminally-enforced pain.

The 10× isn't AI cleverness. It's that today the alternative is a spreadsheet that goes stale the moment anyone verifies, maintained by hand, against a government API whose verification field is inconsistently populated.

## 4. Target market

- **Primary customer:** Owner or practice manager of a UK accountancy firm with 1–20 staff and 80–600 limited company clients. Secondary: company formation agents and small law firms doing company secretarial work.
- **Why they buy:** They have absorbed unplanned, unbilled work. In Demetriou's words, *"The workload sits around it. You're helping clients understand what's required, managing deadlines, dealing with incorrect information already held on record..."* and *"Small compliance tasks have a habit of multiplying. If firms don't recognise the time, risk and responsibility involved, they can easily find themselves absorbing a significant amount of unplanned work."* They also carry professional risk: a bounced confirmation statement is the client's criminal exposure, but it is the accountant's phone call.
- **Rough TAM reasoning:** ~40,275 accountancy firms in the UK, ~80% with four or fewer employees. Restrict to firms with enough limited-company clients to feel portfolio pain — call it 12,000–15,000 realistically addressable. Adjacent: the 2,756+ firms already in the public ACSP directory, and Companies House's own expectation of up to 55,000 ACSP registrants.
- **Why now for them:** Fourteen weeks to 17 November 2026, after which the failure mode changes from "annoying" to "criminal offence and struck-off clients". Urgency is on a countdown, not a vibe.

## 5. Product sketch (MVP)

- Import a client list (CSV, or bulk company-number paste) and auto-resolve every company's officers and PSCs from Companies House.
- A single roster view: every officer across every client, with verification status, and a plain-English reason when the status is unknown rather than confirmed.
- Filing-risk column — joins each company's confirmation statement due date against its officers' verification state, and ranks by "what bounces soonest".
- Personal code vault: record which codes the firm actually holds for which individual, because the code, not the status flag, is what the filing needs.
- Automated re-polling — status changes get picked up without anyone refreshing a spreadsheet, with a change log per officer.
- Client-facing chase sequences: templated email/SMS to the specific unverified humans, with per-person tracking of who's been nudged and who responded.
- Weekly "what's at risk" digest to the practice owner: N filings blocked, M directors outstanding, ranked by date.
- Exportable audit trail of who was chased when — supporting the seven-year record-keeping expectation firms carry.

## 6. AI angle — what's load-bearing

Honest answer: AI is a real but supporting actor here, and I'd rather say that than oversell it.

The load-bearing AI work is **reconciliation of a dirty government dataset against a firm's own client records**. Two specific jobs:

1. **Identity matching.** Companies House exposes only partial dates of birth (month and year), names are inconsistently formatted across filings, and one human appears as multiple officer records across multiple companies. Deciding that "R Patel", "Rajesh Patel" and "Rajesh Kumar Patel" across four companies are one person who needs one code is fuzzy entity resolution across a few hundred thousand records — this is where the product either works or produces a useless roster.

2. **Status inference.** The `identity_verification_status` field is not reliably populated — it's missing for officers the web UI shows as verified, and behaves differently for ACSP-route verifications. The product has to infer true state from several weak signals (API field, filing history, what the firm holds on file) and be explicit about confidence rather than confidently wrong. Getting a director wrongly marked "verified" is the one failure that kills trust.

Strip the AI out and you still have a product — a worse one, with a manual matching step that makes 600-officer portfolios unusable. So: load-bearing for scale, not for existence. I'm scoring defensibility accordingly and not pretending otherwise.

## 7. Localization angle (if any)

This *is* the localization play — it's UK-only by construction, and that's the point. The product is inseparable from ECCTA, the Companies House API, personal codes, the ACSP regime and the confirmation statement cycle. There is no generic global version.

The obvious question is whether that's a trap. It partly is — see the risk flags. But the same regulatory specificity is what keeps US-scale KYC vendors out: the addressable market is too small to justify a UK-specific build for anyone with a global roadmap, and too fiddly for a generic tool to serve well.

Nearest export path if it works: Ireland's CRO and other ECCTA-analog registers adopting beneficial-ownership verification. Not a plan, just a direction.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** tiered by client companies under management. £39/mo up to 50 companies, £89/mo up to 200, £179/mo up to 600, £349/mo above. Annual discount. Optional per-verification passthrough if the firm wants CodeRoster to broker the actual ACSP check (£24.99 market rate, ~£8–10 margin) — a margin line, not the core business.
- **ACV:** ~£1,070/yr blended (assume the £89 tier dominates).
- **Rough math to $1M ARR:** ~700 firms × £89/mo × 12 ≈ £748K ≈ $950K. Call it 750 firms. Against 12,000–15,000 addressable firms that's ~5–6% penetration. Achievable but not trivial.
- **Rough math to $5M ARR:** requires either ~3,500 firms (25%+ penetration — I don't believe it) or expansion beyond the verification wedge into adjacent company-secretarial state: PSC register accuracy, officer change filings, registered office and ACSP record-keeping obligations. $5M is an expansion story, not a wedge story. I would underwrite this as a $1–1.5M ARR business and treat anything above as upside.
- **Expansion path:** client-count tiers grow naturally as firms grow; verification brokering adds usage revenue; the seven-year audit-trail requirement makes the record itself something they keep paying to retain.

Straight talk on the revenue axis: this is the weakest part of the idea. See risk flags — the November cliff is both the reason to buy and the reason renewal is uncertain.

## 9. Go-to-market wedge — first 100 customers

- **The ACSP directory is a named, public, pre-qualified list.** 2,756+ firms have publicly registered as Authorised Corporate Service Providers — these are firms that have *already declared they intend to do verification work for clients*. Name, address, postcode, AML supervisor, refreshed quarterly. That's not a lead list, it's a buyer list. Scrape it, enrich with Companies House data for the client portfolios each firm files for, and cold-email with a pre-computed hook.
- **Lead with a free, personalised audit — this is the actual wedge.** The Companies House API is public and free. Before any conversation, compute a real answer for a target firm: "You file for 214 companies. 61 have at least one unverified officer. 9 of those have a confirmation statement due in the next 45 days." That's not a pitch, it's their risk register, delivered unsolicited and verifiably true. Reply rates on cold email with a genuine pre-computed finding are a different game to generic outreach. Convert the audit into a free-tier signup, then charge when they want chasing and monitoring.
- **AccountingWEB.** This is where UK practitioners actually argue about this — the ID-verification stats threads are live and active. Not a place to advertise; a place to publish the aggregate data ("here's how many directors are unverified by firm size, from the public API") and be the person who did the analysis. That's a well-worn route to credibility in this specific community.
- **The professional bodies' timing.** ICAEW and ICAS are actively publishing member guidance on ACSP registration and ID verification challenges. Firms are actively looking for tooling right now, in a fourteen-week window. Regional ICAEW member group events and practice-focused webinars are cheap, targeted rooms.
- **Bookkeeper and practice-manager communities** — UK-specific Facebook groups and Slack/Discord communities for practice managers where a "here's the free audit, run it on your list" post is on-topic rather than spam.

First 100 is a straightforward funnel: ~2,750 named ACSP firms, personalised audits to all of them over 6–8 weeks, 15–20% engage with a free audit that tells them something true and alarming, ~25–30% of those convert to paid. That's 100–150 customers without touching the other 37,000 firms.

## 10. Build complexity — justification

**Low.** One public REST API, a scheduled poller, an entity-resolution layer, a filing-date join, and email/SMS chase sequences on a standard web stack. No ML training, no infrastructure exotica, no partner integrations required to deliver value on day one.

The two things that will actually take the time: entity resolution across partial DOBs and inconsistent name formats, and handling the API's inconsistent verification-field population without ever reporting a false "verified". Rate limits (600 req/5min) mean polling large portfolios needs a sane scheduler, not a clever one. Company number formats include SC/NI/OC prefixes — get that wrong and you silently drop Scotland and every LLP.

Solo technical founder ships a credible v1 in **5–7 weeks**. The free-audit tool is a weekend, and it doubles as the entire top of funnel.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Built entirely on the free public data API. No AML-gated data, no personal data beyond what the public register already exposes. GDPR obligations are real but ordinary — firms are the controller for their own client lists. |
| Ethical — no harm / dark patterns | ✅ | Helps firms and their clients avoid criminal non-compliance. The only ethical trap is fear-based marketing; the countdown is real, so state it plainly and don't inflate it. |
| Market exists (evidence above) | ✅ | 5.49M unverified directors, sourced practitioner complaints, an existing paid market at £24.99/check, 2,756+ firms publicly registered as ACSPs. |
| 1–5 person team can build this | ✅ | One technical founder, 5–7 weeks. |
| Launchable with <$50K / ₹40L | ✅ | Realistically under £5K: API is free, infra is trivial, cost is the founder's time. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 17/20 | Criminal liability, strike-off risk, rolling per-client deadlines, and sourced evidence of 30–60 min of unbilled work per client. Not a 19 because most firms will muddle through with a spreadsheet — it's painful, not literally impossible. |
| Demand evidence | 15 | 13/15 | Multiple independent hard signals: 5.49M unverified, an existing paid market at £24.99/head, named practitioners on the record complaining, professional bodies publishing guidance. A skeptic nods. Docked for no direct evidence anyone has paid for *portfolio tracking* specifically. |
| Build feasibility | 15 | 13/15 | One free public API, standard stack, 5–7 weeks solo. Entity resolution and dirty verification data are the only real engineering. |
| Distribution clarity | 15 | 12/15 | Named public list of 2,756+ pre-qualified buyers plus a free audit that computes a true, alarming, personalised finding before first contact. Docked because cold email to accountants is a crowded channel and conversion is assumed, not tested. |
| Revenue mechanics | 15 | 11/15 | Pricing is benchmarked and the tiers fit the wallet. $1M needs ~750 firms at ~5–6% penetration, which is credible. Docked hard because $5M requires an expansion story that doesn't exist yet, and post-deadline renewal is a genuine unknown. |
| Time to first revenue | 10 | 8/10 | The free audit pre-sells. Revenue plausible 4–6 weeks post-launch given the countdown, but accountants in peak compliance season are slow to sign anything. |
| Defensibility | 10 | 2/10 | This is the honest weak point. Public API, no proprietary data, no network effects, and a competent competitor rebuilds it in six weeks. The only moats are accumulated chase history/audit trail inside each account and being first in a fourteen-week window. Execution-speed moat only. |
| **Total** | **100** | **76/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required`

Needs someone who can ship against a messy public API fast, and who either knows UK practice workflows or recruits a practising accountant as an advisor in week one. Getting the confirmation-statement mechanics subtly wrong destroys credibility with this audience immediately.

### Key assumptions to validate (3–5)

1. **Assumption:** Firms will pay for portfolio *visibility* when the £24.99 *check* is already commoditised — i.e. the state is worth more than the transaction. **How to test:** run the free audit on 40 ACSP-directory firms, then ask the 15 who engage a direct price question at £89/mo. Need 4+ yes.
2. **Assumption:** The `identity_verification_status` field is populated reliably enough to build a trustworthy roster. **How to test:** pull officers for 500 random companies, compare API field against the web UI for a 100-officer sample, measure the false/missing rate. If >20% unresolvable, the product needs a manual-entry fallback and the pitch changes.
3. **Assumption:** Demand survives 17 November 2026. **How to test:** interview 10 firms specifically on what they think happens after the deadline — new incorporations, new appointments, PSC changes and client churn all generate ongoing verification events, but confirm they perceive that as ongoing rather than one-off.
4. **Assumption:** Entity resolution across partial DOBs works well enough to be useful. **How to test:** build the matcher against one real firm's 200-company portfolio and hand-audit the output.
5. **Assumption:** BrightManager/Senta don't ship this as a feature inside 6 months. **How to test:** read their release notes and roadmap webinars weekly; talk to their users about what's been announced.

### Risk flags

1. **Market timing / deadline decay — the big one.** The urgency is a countdown, and countdowns end. After 17 November 2026 the backlog clears and the product's value drops from "avoid criminal liability" to "keep the register tidy." Ongoing volume from new incorporations, new appointments and PSC changes is real but much smaller. This is plausibly a sharp 12–18 month revenue spike followed by high churn, not a durable SaaS annuity. Anyone building this should underwrite it that way and plan the expansion into broader company-secretarial state *before* November, not after.
2. **Competitive displacement.** Defensibility is 2/10 for a reason. BrightManager already chases clients and tracks Companies House deadlines; adding a verification-status column is a small feature for them and an existential event for this product. The counter is speed and being the tool firms already have open in the fourteen weeks that matter.
3. **Platform dependency.** Everything rests on one government API whose verification field is already known to be inconsistently populated, and whose behaviour may change as the regime matures. Rate limits and a possible move to hide untrusted records could both bite.
4. **Deadline extension.** With 2M+ directors projected to miss the date, there is real political pressure toward a softened landing or extended enforcement. That would blunt the urgency the entire GTM depends on — though it would also extend the selling window, so it cuts both ways.

## 14. Structured verdict

```
Score:                  76/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Solo technical founder who ships fast, with a practising UK accountant as advisor
Time to revenue:        4–6 weeks post-launch
Capital to launch:      £3–5K ($4–6K)
Top 3 assumptions to validate first:
  1. Firms pay for portfolio state, not just the check — free audit to 40 ACSP-directory firms, price-test the engaged 15 at £89/mo, need 4+ yes
  2. API verification field is trustworthy — 500-company pull, 100-officer manual reconciliation against web UI, need <20% unresolvable
  3. Demand survives 17 Nov 2026 — 10 practitioner interviews on post-deadline verification volume
Kill criteria:
  - Abandon if <10% of 50 personalised free audits produce a reply
  - Abandon if the API verification field is unresolvable for >20% of officers and manual fallback puts the product back at spreadsheet-level effort
  - Abandon if BrightManager, Senta or IRIS ship per-officer verification tracking before v1 launches
  - Abandon if Companies House extends the transition deadline by 12+ months before launch
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Build the free audit tool only — no product, no auth, no billing. Feed it company numbers, get back officers, verification status and confirmation statement dates. Run it against 500 random companies and hand-check 100 officers against the Companies House web UI. This simultaneously tests assumption 2 and produces the entire GTM asset.
- **Day 3:** Scrape the public ACSP directory. Pick 50 firms, resolve the client portfolios they file for, and compute a real, specific finding for each: companies filed for, officers unverified, filings at risk in the next 45 days.
- **Day 4–5:** Send all 50 personalised audits, cold. No product pitch — just their number, and an offer to explain it. Book calls.
- **Decide go / no-go on two falsifiable numbers:** ≥5 of 50 replies (10% reply rate), AND ≥4 of the engaged firms answer yes to "would you pay £89/mo to keep this updated automatically and chase the directors for you?" Fewer than 5 replies means the pain isn't sharp enough to interrupt a busy practice owner. Replies without price agreement means it's a nice free tool and not a business — which is itself a clean, early kill.
