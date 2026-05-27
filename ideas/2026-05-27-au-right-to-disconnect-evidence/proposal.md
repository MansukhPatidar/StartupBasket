---
title: "OffHours — right-to-disconnect evidence vault for AU SMBs"
slug: au-right-to-disconnect-evidence
date: 2026-05-27
category: Compliance / Australia Small Business (5–14 employees)
complexity: Medium
score: 76
verdict: GO
confidence: Medium
oneLiner: "Captures every after-hours message AU small businesses send staff, classifies reasonableness, and produces a Fair Work-ready dispute packet."
tags:
  vertical: Compliance
  model: SaaS
  geography: Global
  secondary: [Australia, SMB, AI-agent, Compliance-driven, WhatsApp-first, Slack, Teams]
axes:
  problem: 15
  demand: 12
  build: 11
  distribution: 11
  revenue: 11
  time: 8
  defensibility: 8
founderFit: [technical-heavy, sales-heavy]
featured: false
---

# OffHours — right-to-disconnect evidence vault for Australian small business

## 1. One-liner

Captures every after-hours message AU small businesses send staff, classifies reasonableness, and produces a Fair Work-ready dispute packet.

## 2. Trend signal — why now?

Three things just lined up at the same time:

1. **The small business cliff hit.** Australia's right-to-disconnect law extended to employers with fewer than 15 staff on **26 August 2025** — that's roughly 5M employees newly covered. Fair Work Commission Form **F92 / F92A / F92B** (the dispute applications and arbitration notification) were approved with effect from **2 October 2025**, so the dispute infrastructure is live. Penalties for breaching an FWC order land at **A$18,780 (individual) / A$93,900 (corporation)**.
2. **The evidence problem is now in writing.** ACCI's official Right to Disconnect Employer Guide says explicitly: if an employee's contract and the employer's records don't deal with after-hours contact, *"the Commission may be more inclined to make a finding that such refusal was not unreasonable."* The Fair Work Commission's "reasonable refusal" test asks **the reason for the contact, how it was made, the level of disruption, and whether the employee is on-call** — every one of those is an evidentiary question. Current vendors (Sentrient, Boomerang, Akyra) sell *policy templates* — none of them capture the actual after-hours contact stream.
3. **The tech to do this got cheap.** Slack `chat.scheduleMessage`, Microsoft Graph Teams API, WhatsApp Cloud API, and Twilio all expose outbound message hooks. Sub-cent LLM inference (Haiku 4.5 / Gemini Flash) classifies "is this an urgent on-call ping or a Monday-problem ping?" in <500ms per message. The whole interception + classify + log + defer loop costs ~A$0.001 per message.

The Australian Industry Group has already called the law *"rushed, poorly thought out, and deeply confusing"* — employer anxiety is the buying signal.

```
Provenance:
  - Signal 1: Right to Disconnect extends to small business 26 Aug 2025; FWC Form F92 dispute infrastructure live 2 Oct 2025; ~5M employees newly covered — https://www.fairwork.gov.au/newsroom/news/right-to-disconnect-for-small-business-employees-starts-26-august — 2025-08-26
  - Signal 2: ACCI Employer Guide states that without recorded after-hours contact policy/evidence, FWC tilts toward employee; Boomerang/Sentrient ship policy generators, not evidence capture — https://acci.com.au/Common/Uploaded%20files/Smart%20Suite/Smart%20Library/a28a3645-1adf-496c-b0e5-ca00de6c893e/4531-ACCI-guides_The-Right-to-Disconnect-WEB.pdf — 2025
  - Signal 3: Employment Hero hit A$300M ARR Feb 2026 on ~80K SME clients; AU HR-tech market US$774M → US$1.45B by 2034 (CAGR 7.22%) per IMARC — https://employmenthero.com/blog/employment-hero-surpasses-300m-arr/ — 2026-02
  Category: Regulatory arbitrage
```

## 3. The opportunity

Two big incumbents (Employment Hero + KeyPay, Sentrient) sell broad HR/GRC suites at A$5–10/seat/month and treat right-to-disconnect as one bullet in a policy-library tab. Boomerang gives away a free policy generator. Nobody is **actually intercepting and archiving the after-hours contact stream** — the part the Fair Work Commission will ask for when a dispute lands.

The play: thin, focused, evidence-first layer that bolts onto Slack / Teams / WhatsApp Business / Twilio / Gmail / Outlook and:

1. Detects outbound work messages sent outside each recipient's configured working hours (per-employee, award-aware).
2. Prompts the sender to either flag urgency reason (operational emergency, schedule change inside 24h, declared on-call) **or** auto-defers to the next working window via native scheduling APIs.
3. Logs every after-hours contact + reason + employee response in a tamper-proof archive.
4. Builds a one-click Form-F92A response packet when a dispute lands.

This is the **defence brief generator** for the law, not a policy template. The wedge is the gap between *"we have a policy"* and *"we can prove what actually happened on Tuesday night."*

## 4. Target market

- **Primary customer:** Australian small businesses with **5–14 employees** that have a hybrid of award/casual/salaried staff. Concentrated in hospitality, retail, trades, real estate, allied health, and professional services. Buyer is the owner-operator, office manager, or HR-of-one. ABS counts ~232K AU businesses in the 5–19 employee band as of 30 June 2025 (8.5% of the 2.73M trading business count); the 5–14 sub-band is roughly **~180K** addressable accounts.
- **Why they buy:** They already received the Fair Work Ombudsman email on 26 August 2025. They downloaded the free Boomerang policy and now stare at it not knowing what to do operationally on the Friday-night text from the duty manager to the casual covering Saturday's brunch. Penalty exposure A$93,900 per corporation per order breach is real.
- **TAM reasoning:** ~180K AU small businesses in the 5–14 band. Even at 2% penetration × A$249/mo blended ACV = ~A$10.7M ARR ceiling on AU alone. NZ Herald already covered NZ considering the same law — NZ extension is an obvious second market. France, Belgium, Italy, Spain, Portugal, Ireland, Ontario have all-or-partial right-to-disconnect rules already and are ports.
- **Why now for them:** The 12-month grace period for sub-15-staff employers ended August 2025. No reported FWC cases yet (as of May 2026), meaning the **first wave of decisions is landing through 2026–27**. Employers smart enough to install evidence capture before the precedent arrives win the early cases.

## 5. Product sketch (MVP)

- **Working-hours profile per employee** — set per-award, per-roster, with overrides for "on-call this week" flags. Pulled from Deputy / Tanda / KeyPay / Employment Hero rosters via API.
- **Outbound message interception** — Slack + Teams + WhatsApp Business + Twilio SMS + Gmail/Outlook addin detect messages headed to off-hours recipients before they land.
- **Sender prompt** — "It's 9:14pm and Mia is off shift. Send anyway? Pick a reason: (a) Operational emergency / (b) Schedule change inside 24h / (c) Mia is on the declared on-call rota / (d) Defer to Monday 8am."
- **Auto-defer scheduler** — one-click pushes the message to the next working window using each platform's native scheduling primitive.
- **Reasonableness classifier** — LLM-side scores the message against FWC's four-factor test (reason, method, disruption, on-call status) and flags borderline ones for owner review.
- **Tamper-proof archive** — WORM-style storage of every after-hours contact, sender reason, classifier score, employee read/response time, and any subsequent refusal.
- **Form F92A response packet builder** — when an FWC dispute application arrives, owner uploads the F92 PDF; system pulls relevant logs, builds a draft Form F92A response with timeline, on-call status, business-necessity justifications, and screenshot evidence — ready to hand to the workplace lawyer.
- **Manager coaching nudges** — weekly digest: "You sent 14 after-hours messages this week; 9 were rated 'low urgency'. Try scheduling-send."

## 6. AI angle — what's load-bearing

The classifier is the product. Without it, this is just a message archive — which exists. With it, every after-hours message gets a defensible, FWC-aligned reasonableness score that's auditable: *reason* (categorical), *method* (channel + time-of-day), *disruption* (length, expected response), *on-call status* (roster + recipient flag). The classifier also drafts the Form F92A response narrative — the part a workplace lawyer would charge A$400/hour to write.

Strip the AI and you have a Slack archiver. The product disappears.

## 7. Localization angle (if any)

This **is** the localization play. Right to disconnect is a multi-jurisdiction patchwork — Australia, France, Belgium, Italy, Spain, Portugal, Ireland, Ontario, Kenya — each with different "reasonable" tests, different penalty structures, different dispute mechanisms. AU is the wedge because:

- **Form-driven**: FWC publishes Forms F92/F92A/F92B with deterministic process — easy to template against.
- **Penalty teeth**: A$93,900 corp / A$18,780 individual is enough to motivate a A$249/mo subscription.
- **Award system**: AU's modern award structure means employees' on-call expectations are codified — perfect input for the classifier.
- **Small-biz cliff hit Aug 2025**: 232K businesses suddenly in scope, none yet have an evidence layer.

NZ is the obvious second port (same award-system DNA), then Ireland and Ontario (English-language, similar disclosure frameworks).

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** A$149/mo for ≤9 staff, A$249/mo for 10–14, A$449/mo for 15–49 (the >15 band catches the larger employers who've been covered since 2024 but mostly use policy-template tools). Add A$99 per dispute packet generated (most employers won't have any; the first dispute justifies the year's subscription).
- **ACV (blended):** ~A$2,800 per year per customer.
- **$1M ARR (A$1.55M):** ~550 paying customers × A$235 avg/mo × 12 = A$1.55M. Plausible within 18 months at 30 net-new accounts/month.
- **$5M ARR (A$7.7M):** ~2,300 customers × A$278 avg/mo × 12 = A$7.7M. Requires NZ launch + Ireland/Ontario second-wave + dispute-packet usage normalising at ~0.4 packets/account/year. Tight but achievable.
- **Expansion path:** (a) Per-seat add-on for staff who want their own "disconnect log" view to flag violations — A$4/seat/mo opt-in. (b) Add-on modules for adjacent FWC pain — casual conversion documentation (s.66B), redundancy notice tracking, unfair dismissal evidence pack. (c) Lawyer-channel revenue share: workplace law firms refer clients in exchange for white-labelled dispute packets.

## 9. Go-to-market wedge — first 100 customers

1. **HR-consultant + bookkeeper partner channel.** AU has ~1,200 HR consultants serving the SMB band and a similar count of bookkeepers who handle compliance for 30–80 clients each. Offer 20% lifetime rev-share + co-branded dispute packets. Even a single bookkeeper bringing in 8 clients = a profitable partner. Target: 25 partners by month 6 → ~150 referred accounts.
2. **Workplace law firm referrals.** Sprintlaw, LegalVision, Bishop Collins, Williamson Barwick — every one of them is publishing R2D blog posts to drive enquiry. Offer them a referral fee + the option to white-label the F92A packet builder. Workplace lawyers earn ~A$3,000–10,000 per FWC dispute they defend; sending us the recordkeeping side costs them nothing and improves their win rate.
3. **Outbound to listed industry-specific employer chambers.** AHA (Australian Hotels Association), Restaurant & Catering Industry Assoc, Master Builders, Real Estate Institute — all have member directories. Scrape 3,000 hospitality + retail venues in the 5–14 band, send a personalised loom showing their venue's likely after-hours-message volume, target 4% close at A$249/mo.
4. **FWC dispute-application monitoring.** Public FWC decisions get published with anonymised employer summaries. Scrape new R2D decisions (will start landing 2026 H2), cold-DM the employer's industry association with case-study collateral. The first 5 published losses are the strongest distribution event in this category.
5. **Free "after-hours audit" tool.** Single-page tool: connect Slack / Teams workspace read-only for 7 days, get a report on after-hours message volume + reasonableness score distribution. Bounces ~12% to paid (basis: comparable free-tier conversion in HR-tech).

## 10. Build complexity — justification

**Medium.** 3–4 months for two engineers. Heavy lifting is the integrations: Slack + Teams + WhatsApp Cloud API + Twilio + Gmail/Outlook each have well-documented APIs with scheduling primitives — none are exotic. Classifier is a thin prompt over Haiku 4.5 or Gemini Flash. The novel bit is the F92A packet builder (LLM drafts narrative + pulls evidence) which needs a workplace lawyer in the loop for prompt design + 3–4 iterations. Off-the-shelf WORM-style storage (S3 Object Lock) handles the tamper-proof archive requirement.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Employer-owned recordkeeping; employees on notice; consent flow at install. |
| Ethical — no harm / dark patterns | ✅ | Frame is "help workers actually disconnect" + give employer defensive evidence. Both sides win. |
| Market exists (evidence above) | ✅ | 232K AU businesses 5–19 employees, R2D live since 26 Aug 2025, A$93,900 corp penalty per breached order. |
| 1–5 person team can build this | ✅ | 2 engineers + 1 workplace-law advisor for 3–4 months. |
| Launchable with <$50K / ₹40L | ✅ | ~A$25K covers v1 build + 6 months hosting + workplace-law advisory retainer. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 15/20 | Real penalties, real disputes coming, but most owners still in denial — pain isn't hair-on-fire until first published case lands. |
| Demand evidence | 15 | 12/15 | Hard-coded by law (Aug 2025 cliff + FWC forms live Oct 2025). Light on direct buyer-voice quotes — that's the validation gap. |
| Build feasibility | 15 | 11/15 | Slack/Teams/WhatsApp APIs all standard, classifier is a prompt. WORM storage + F92A drafting adds 4 weeks. |
| Distribution clarity | 15 | 11/15 | Bookkeeper + HR-consultant + workplace-lawyer channel is named, list is findable. Free audit tool gives a wedge. |
| Revenue mechanics | 15 | 11/15 | A$249/mo is mid-range vs Sentrient A$5-10/seat. Math to $1M ARR works at 30 accounts/mo; $5M needs NZ + EU ports. |
| Time to first revenue | 10 | 8/10 | Pre-sell 20 design partners through bookkeeper channel inside 60 days of v1; first paid invoice inside 90 days. |
| Defensibility | 10 | 8/10 | Workflow lock-in (your entire after-hours message archive lives here, gets cited in disputes). Switching cost compounds. |
| **Total** | **100** | **76/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` (Slack + Teams + WhatsApp + Twilio + Outlook integration surface area), `sales-heavy` (HR-consultant + lawyer channel relationships are the wedge).

### Key assumptions to validate (3–5)

1. **Assumption:** AU SMBs in the 5–14 band will pay A$149–249/mo for R2D evidence capture (not just policy templates). **How to test:** Cold-email 200 owners + bookkeepers via FWO mailing-list-adjacent channels with a one-pager + price. Target ≥15 reply asks for demo.
2. **Assumption:** Workplace lawyers will refer clients in exchange for white-labelled F92A packets. **How to test:** Interview 10 workplace lawyers (Sprintlaw / Bishop Collins / Williamson Barwick + 7 boutique). Target ≥6 saying *"I'd refer in exchange for X."*
3. **Assumption:** Slack + Teams + WhatsApp scheduling APIs can intercept reliably before delivery (not after). **How to test:** Build proof-of-concept against own workspace inside 2 weeks; measure intercept success rate ≥95% across all 4 channels.
4. **Assumption:** Auto-defer (rescheduling messages) is acceptable to managers, not annoying. **How to test:** 10-day pilot with 3 friendly small businesses; survey managers on whether scheduling-send + reason-prompt slowed them down enough to abandon the tool.
5. **Assumption:** First published FWC R2D decision lands within 12 months and creates a buying wave. **How to test:** Monitor FWC published-decisions feed weekly; if no case lands by Q1 2027, marketing motion needs different anchoring.

### Risk flags

1. **Regulatory drift:** If the Albanese government waters down R2D (or the Coalition wins and repeals it) the demand cliff collapses. Hedge: ship the NZ/Ireland/Ontario variants early so AU isn't the only market.
2. **Platform dependency:** Slack/Teams/Meta could each change API access terms. Hedge: Twilio + Gmail/Outlook are sticky fallbacks; SMS + email cover most actual after-hours small-biz contact anyway.
3. **Surveillance optics:** Press could spin it as "boss-spyware." Hedge: positioning + product flow centred on employee benefit (auto-defer = no late-night ping) + employer defence (FWC-ready). Public-facing: this is what makes the law actually work.
4. **Employment Hero / Sentrient response:** Either could ship a copy-cat module in 9–12 months. Hedge: the F92A dispute-packet builder + lawyer-channel relationships are the moat; broader HRIS players won't touch the lawyer-channel because it cannibalises their HR-advisor relationships.
5. **No published precedent → no urgency:** The market may stay sleepy if FWC keeps disputes private. Hedge: free audit tool gives a soft on-ramp that doesn't depend on case-law fear.

## 14. Structured verdict

```
Score:                  76/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical co-founder with AU workplace-law advisor on retainer; sales co-founder who can run the bookkeeper + HR-consultant channel
Time to revenue:        10–14 weeks (pre-sold design partners) — first invoice ≤90 days from v1
Capital to launch:      A$25K (~US$16K)
Top 3 assumptions to validate first:
  1. AU SMB owners + bookkeepers will pay A$149–249/mo for evidence capture, not just policy — validate via 200 cold outreaches inside 30 days; ≥15 demo-ask threshold
  2. Slack + Teams + WhatsApp scheduling APIs intercept pre-delivery reliably — build POC inside 2 weeks; ≥95% intercept rate
  3. Workplace lawyers will refer clients in exchange for white-labelled F92A packets — 10 lawyer interviews; ≥6 say yes
Kill criteria:
  - Abandon if <8% of 200 cold outreaches request a demo
  - Abandon if intercept POC fails (<80%) across two of four channels (Slack/Teams/WhatsApp/Twilio)
  - Abandon if Employment Hero ships a dedicated R2D evidence-capture module before v1 launch
  - Abandon if no published FWC R2D decision by Q2 2027 AND <50 paid accounts
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Build 1-page landing + pricing page. Scrape 250 AU bookkeepers serving SMB on LinkedIn + AccountantsDaily directories. Draft cold-DM script: *"Have any of your clients asked about right-to-disconnect record-keeping since August? We're building a Fair Work-ready evidence layer for Slack/Teams/WhatsApp — A$149/mo. Worth 15min?"*
- **Day 3:** Send 100 cold DMs to bookkeepers + 100 to AU HR consultants via Sprintlaw / Bishop Collins partner directories. Book first 5 lawyer calls (Sprintlaw, LegalVision, plus 3 boutiques) on white-label dispute-packet appetite.
- **Day 4:** Build Slack-only POC: detect outbound message to off-hours user, prompt sender with reason picker, log to Postgres. Smoke-test against own workspace.
- **Day 5:** Tally. **Go condition:** ≥12 demo requests from cold outreach AND ≥3 workplace lawyers say *"I'd refer clients."* AND POC intercepts ≥95% of off-hours Slack outbound. Anything less = no-go this quarter; revisit when first published FWC R2D decision lands.

The falsifiable bar is the demo-request count + the lawyer-yes count. Both numeric, both observable in 5 days.
