---
title: "ClearRun — 48-hour exit clearance desk for Indian employers"
slug: exit-clearance-parallel-chase
date: 2026-08-08
category: Compliance / India — Mid-Market Employers (200–3,000 Staff) Whose Serial No-Dues Chains Cannot Close Inside the Code on Wages 2-Day Settlement Window
complexity: Low
score: 76
verdict: GO
confidence: Medium
oneLiner: "Chases every manager blocking an exit settlement in parallel, so the payout clears before the two-day legal clock runs out."
tags:
  vertical: Compliance
  model: SaaS
  geography: India
  secondary: [WhatsApp-first, AI-agent, SMB, Compliance-driven, HR-tech]
axes:
  problem: 17
  demand: 12
  build: 13
  distribution: 11
  revenue: 11
  time: 8
  defensibility: 4
founderFit: [technical-heavy, sales-heavy]
featured: false
---

# ClearRun

## 1. One-liner

Chases every manager blocking an exit settlement in parallel, so the payout clears before the two-day legal clock runs out.

## 2. Trend signal — why now?

India's Code on Wages came into force **21 November 2025**. Section 17(2) requires that when an employee is removed, dismissed, retrenched, resigns, or loses employment to a closure, their wages be paid **within two working days** of the last working day. The Ministry of Labour and Employment notified the **Code on Wages (Central) Rules, 2026 on 8 May 2026**. Maharashtra, Gujarat, Karnataka, Madhya Pradesh, Haryana and Delhi have notified rules; most remaining states were expected to finalise by mid-2026. The rule is live and the trigger is mechanical — it starts on the last working day, not on resignation acceptance or exit-interview completion.

For twenty years, "full and final" in Indian corporates has been an unofficial 30-to-45-day workflow. The compliance gap is not arithmetic — it is **the approval chain**. The single best description of the problem I found, from a payroll advisory writing for corporate teams:

> "Most F&F workflows depend on serial sign-offs — reporting manager, IT, finance, admin, sometimes the CEO for senior exits. **A serial chain that averaged 12–18 days now has to close in 48 hours.** Any single stalled approval blows the deadline."

And on root cause, from an HR practitioner guide:

> "The single biggest cause of F&F delays in most corporates is a reporting manager sitting on a no-dues form because 'the person cheated us on notice.'"

That is a behavioural bottleneck, not a payroll-engine bottleneck. It is exactly the kind of thing an always-on chaser is good at and a checklist module is bad at.

The penalties have teeth. Under Section 54, underpayment draws a fine up to **₹50,000** for a first offence, rising to **₹1,00,000 and/or up to three months' imprisonment** for a repeat within five years. The claims window for an employee to file has been extended to **three years**. Employees have a low-friction route — the Shram Suvidha portal, or a direct claim to the designated authority, which can order not merely the overdue amount but compensation of a multiple of the unpaid wages. Every disgruntled leaver is now a cheap, patient plaintiff.

Volume makes this recurring rather than episodic. Indian attrition for 2026 is forecast at **14–18%** overall, with **IT services at 19–20%**, **BPO running 30–40%**, e-commerce 25–28%, and manufacturing near 13%. Roughly **75% of attrition is voluntary**. A 1,000-person IT services firm is processing ~15 exits a month, every month, forever. Each one is an independent 48-hour clock with a criminal-penalty tail.

Provenance:
  - Signal 1 (Demand): Serial no-dues chains averaging 12–18 days must now close in 48 hours; any single stalled approval blows the deadline; root cause named as reporting managers sitting on no-dues forms — https://tmservices.co.in/48-hour-full-final-settlement-india-2026/ — 2026 / https://www.wisemonk.io/blogs/full-and-final-settlement-in-india — 2026
  - Signal 2 (Feasibility): Code on Wages in force 21 Nov 2025; Central Rules notified 8 May 2026; major states notified — making the obligation concrete and dated; cheap LLM inference (GPT-4-class at ~$0.14/M input tokens as of Jul 2026) makes always-on drafting/nudging economically trivial — https://factohr.com/code-on-wages/ — 2026 / https://www.lexology.com/library/detail.aspx?g=52a33507-a7d7-4e76-9220-8dd4deae9647 — 2026 / https://axis-intelligence.com/ai-inference-cost-statistics/ — 2026
  - Signal 3 (Economic): Active, priced Indian HR-SaaS spend (greytHR from ₹2,495/mo + ₹45/emp; Keka from ₹6,999/mo, ₹90–180 PEPM) proves budget exists; 62% of Indian SMEs still on spreadsheets for payroll with ~₹1.4L/yr average compliance-penalty cost (NASSCOM 2026, cited) — https://hrone.cloud/blog/keka-pricing-india/ — 2026 / https://www.itforsme.in/pricing/payroll-software-india/ — 2026 / https://www.waggex.com/blog/what-is-the-top-payroll-software-for-smes-in-india-budget-2026-edition/ — 2026
  Category: Regulatory arbitrage

## 3. The opportunity

Every HRMS in India — greytHR, Keka, Zoho People, Darwinbox — already ships an "exit management" module. They have clearance checklists, task assignment, exit interviews, settlement calculation. On a feature grid, this problem looks solved.

It isn't, and the reason is precise. **Those modules model the process; they don't move it.** greytHR lets an administrator "assign various checklist tasks to different departments with specific deadlines and send reminders with a click." That click is the entire problem. It is a human, in HR, remembering to chase a human, in IT, who is on leave. Keka automates *the calculation* of final pay — gratuity, leave encashment, dues. Calculation was never the 12–18 day part. The 12–18 day part is the reporting manager who won't sign because he's annoyed about the notice period.

The incumbents were architected around a 30–45 day F&F because that was the world when they were built. Their exit modules are **record-keeping surfaces with manual nudge buttons**. What the two-day rule demands is an **autonomous escalation agent**: something that fans every clearance out in parallel the moment a last-working-day is set, chases each owner on the channel they actually read, escalates on a schedule nobody has to remember, drafts the settlement the instant the last blocker clears, and — critically — produces a defensible evidence trail showing the employer did everything required, on time.

The wedge: HR leaders will not rip out greytHR or Keka. They will absolutely bolt on a ₹15–40K/month tool that keeps them out of a criminal-penalty statute their existing tool quietly can't satisfy. **We sit on top of the HRMS, not against it.** That's a far shorter sales cycle than displacement, and it dodges a fight with well-funded incumbents.

There's a second, sharper reason this is fresh: the failure is silent. A missed deadline produces no alert. It surfaces months later as a Section 45 claim from an ex-employee — by which point interest has accrued and the compensation multiple is in play. Nobody currently knows their own miss rate. The advisory literature's own recommendation is telling: *"Run a diagnostic on your last 20 exits. How many closed inside 48 hours from last working day? The gap is your risk exposure."* That diagnostic is our lead magnet, and almost every firm will fail it.

## 4. Target market

- **Primary customer:** Head of HR Operations / VP People / Payroll Manager at an Indian company with **200–3,000 employees**, multi-department, with a formal no-dues process. Sweet spot: IT services, BPO/GCC, e-commerce, healthcare chains, staffing firms, NBFCs — the high-attrition sectors. Bengaluru, Hyderabad, Pune, NCR, Chennai, Mumbai.
- **Why they buy:** Because they process 10–50 exits a month, each one starts an independent 48-hour clock, they know their managers sit on no-dues forms, and they have no idea what their current miss rate is. They buy the day we show them their own number. The buyer is personally exposed — this is a statute with imprisonment provisions for repeat offences, and HR ops is the named owner.
- **Rough TAM reasoning:** India has on the order of tens of thousands of registered companies in the 200–3,000 employee band across IT/ITeS, BPO, retail chains, healthcare, manufacturing and staffing. We need **~350 paying customers at ₹25K/month to hit ₹10.5 crore (~$1.25M) ARR.** That is a small single-digit-percent share of the addressable band — the math does not require market dominance.
- **Why now for them:** The rule is in force, Central Rules were notified in May 2026, and their states have notified or are notifying. Enforcement lags legislation, but the three-year claims window means exits happening *today* are claimable until 2029. Firms that fix this in FY26-27 avoid a back-book of liability. One advisory put the timeline bluntly: corporates treating this as a payroll problem "will be paying penalties by Q3 FY 2026-27."

Note on evidence: I did not find published data on what share of Indian employers currently miss the two-day window — that statistic does not appear to exist yet. That's a genuine gap in the demand case, and it's assumption #1 to validate. It is also, conveniently, the exact number our free diagnostic produces — which is why the diagnostic is the product's front door.

## 5. Product sketch (MVP)

- **Parallel clearance fan-out** — the moment a last-working-day is recorded, every department owner (reporting manager, IT, finance, admin, library/asset, security) gets their task simultaneously, not in a queue. Kills the serial chain by construction.
- **WhatsApp-first chasing** — approvers clear or flag from WhatsApp with a tap. No portal login, no password reset, no "I never saw the email." This is the single highest-leverage design choice; managers ignore HRMS notifications and read WhatsApp.
- **Escalation ladder on a clock** — unresponsive approver at hour 8 gets a nudge, hour 16 pings their manager, hour 24 hits the HR head and the department head. Configurable, automatic, and it never forgets or goes on leave.
- **Deemed-clearance policy engine** — lets the company encode "if IT hasn't flagged an asset by hour 30, clearance is presumed and the settlement proceeds," turning an indefinite block into a bounded one. Legally this protects the employer: the statute penalises late *payment*, not an unrecovered laptop.
- **Live countdown board** — every in-flight exit with hours remaining, who's blocking, and rupee exposure if it breaches. The screen an HR head keeps open.
- **Settlement draft on last-blocker-clear** — assembles pro-rated salary, leave encashment, notice adjustment, gratuity flag, recoveries, into a settlement statement pushed to whoever runs payroll. We draft; the HRMS or payroll team pays.
- **Evidence pack per exit** — timestamped record of every task, nudge, escalation and clearance, exportable. If a claim lands under Section 45 two years later, this is the defence file.
- **Free "last 20 exits" diagnostic** — upload or connect exit data, get your actual miss rate and estimated exposure. Lead magnet and onboarding in one.

## 6. AI angle — what's load-bearing

Honest answer: **AI is the assistive layer, not the foundation.** The core engine is a parallel workflow with timers and escalation logic — deterministic, and it must stay deterministic, because a hallucinated settlement figure is a legal liability. I'd rather say that plainly than oversell it.

Where AI genuinely earns its place:

- **Free-text policy ingestion.** Every company's notice-period, leave-encashment and recovery rules live in a PDF HR policy nobody has structured. An LLM reading that document and proposing the rule set collapses what would otherwise be a two-week consulting onboarding into an afternoon. This is the difference between a business that scales and one that's an implementation shop — and it's the highest-value AI use here.
- **Unstructured clearance replies.** A manager on WhatsApp types "he still has the Dell and there's a 6k advance pending" — the model extracts asset + recovery amount into structured fields instead of forcing a form. That's what makes WhatsApp-first viable at all.
- **Escalation drafting with tone.** Nudging a senior VP requires different wording than nudging an IT executive. Cheap inference — GPT-4-class at roughly $0.14 per million input tokens as of mid-2026 — makes per-exit drafting cost effectively nothing.

Strip the AI out and you still have a product, but onboarding becomes manual configuration and WhatsApp replies become rigid forms. That's a materially worse business. So: load-bearing for margin and scalability, not for existence. I'm scoring defensibility accordingly.

## 7. Localization angle

This is India-native, not localizable-global. The statute is Indian (Code on Wages s.17(2)), the deadline is Indian, the penalties are Indian, and state-by-state rule variation is an Indian problem. WhatsApp as the approval channel is an India-first design decision that would be wrong in the US or EU. Pricing in rupees at ₹15–40K/month fits Indian HR-ops budgets where a $500/mo US equivalent would not clear.

The exportable version of this idea is "48-hour statutory settlement chasing" wherever a similar rule exists — but that's a later question, and I wouldn't build for it now. The state-rule variance is a moat locally and irrelevant globally.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** Tiered by headcount, billed monthly. ₹15,000/mo (200–500 staff) · ₹25,000/mo (500–1,500) · ₹40,000/mo (1,500–3,000). Benchmarked against greytHR (₹2,495/mo base + ₹45/emp) and Keka (₹6,999/mo, ₹90–180 PEPM) — we sit alongside those as a compliance add-on, priced below a full HRMS but above a point tool, which is the right slot for "keeps me out of a criminal statute."
- **ACV:** ~₹3,00,000 (~$3,600) blended.
- **Math to ₹8.4 crore / ~$1M ARR:** 280 customers × ₹25,000/mo × 12. At a 1,000-person firm with 15 exits/month, that's roughly ₹1,650 per exit to de-risk a ₹50,000-penalty event with a three-year claims tail. Easy defence in a budget conversation.
- **Math to ~$5M ARR:** ~1,150 customers, or ~600 customers plus successful upmarket movement into the 3,000–10,000 band at ₹75K–1.5L/mo. The larger enterprises have more departments in the chain, so the pain scales with the price — but so does the sales cycle, which is why they're phase two, not phase one.
- **Expansion path:** headcount tiers → multi-entity/multi-state (a real need for pan-India firms navigating differing state rules) → adjacent statutory clocks with the same fan-out-and-chase shape (onboarding document issuance, gratuity timelines) → evidence-pack retention as a paid archive tier.
- **Margin:** software-only, no payment handling. Inference cost per exit is a rounding error. WhatsApp Business API messaging is the main variable cost and is small per exit. This is an 85%+ gross margin business.

Deliberate constraint: **we do not touch the money.** We draft the settlement and hand it to payroll. Disbursing funds means becoming a regulated payments entity — that's a different, much heavier company, and it would break the "launch without regulatory approval" gate.

## 9. Go-to-market wedge — first 100 customers

- **The diagnostic as the cold open.** Pitch is one line: "Of your last 20 exits, how many settled within two working days of the last working day? We'll tell you free." Almost nobody knows, and almost everybody fails. Target 2,000 HR-ops leaders at 200–3,000-person firms via LinkedIn Sales Navigator (filterable by headcount, function, seniority, geography — this list is trivially buildable). Expect ~8–12% diagnostic uptake on a message this specific; the ones who run it are pre-qualified by having failed it.
- **Sell through payroll consultants and CA/labour-law firms.** Firms like Ascent HR, TeamLease and mid-size labour-law practices already advise hundreds of employers on the Codes and are actively publishing on this exact rule. They have the trust and the client list; they don't have the software. Revenue share, 20–30%. Ten productive partners each placing 5–10 clients is 50–100 customers without direct outbound.
- **NASSCOM/BPO and GCC channels.** BPO attrition at 30–40% makes this an acute, high-volume pain in a tightly networked community. Industry association events and HR-ops WhatsApp/Slack communities in Bengaluru and Hyderabad — where a genuinely useful free diagnostic spreads by word of mouth among peers who all share the same exposure.
- **Content against the exact search.** HR heads are actively googling "48 hour full and final settlement rule" right now — the SERP is currently full of consultancy explainers with no tool attached. A calculator plus a state-rule tracker plus a template pack captures that intent. Slower than the first three channels; a compounding second-order asset, not the wedge.
- **Land on one department, expand.** Start with a single business unit's exits, prove the miss rate goes to zero, expand company-wide. Small first contract, fast close.

## 10. Build complexity — justification

**Low-to-Medium, sitting at Low.** The core is a workflow engine with parallel task fan-out, timers, an escalation ladder, and a WhatsApp Business API integration — all standard, all off-the-shelf. The settlement calculator is deterministic arithmetic over a configurable rule set. LLM calls are contained to policy parsing and message drafting via commodity APIs.

The genuinely fiddly parts: WhatsApp Business API onboarding and template approval (weeks of calendar time, not engineering), HRMS integrations (greytHR, Keka, Zoho, Darwinbox — start with CSV import plus one integration, add others on demand), and encoding state-rule variation. **A pair ships a credible v1 in 10–12 weeks.** No custom models, no novel infra, no dataset that doesn't exist.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Helps employers comply with a statute; touches no funds, holds no regulated licence. |
| Ethical — no harm / dark patterns | ✅ | Gets workers paid faster. Deemed-clearance is bounded and employer-configured, and the statute already penalises late payment, not unrecovered assets. |
| Market exists (evidence above) | ✅ | Statute in force, penalties defined, priced HR-SaaS spend, high attrition volume. Miss-rate data is the gap — see §13. |
| 1–5 person team can build this | ✅ | Pair, 10–12 weeks. |
| Launchable with <$50K / ₹40L | ✅ | Two builders, WhatsApp API costs, minimal infra. Well under. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 17/20 | Hard statutory deadline, criminal-penalty tail, three-year claims window, recurring 10–50×/month. Not 19–20 because enforcement is early and many firms haven't felt pain yet — urgency is legal, not yet visceral. |
| Demand evidence | 15 | 12/15 | Statute, penalties, named bottleneck, priced adjacent spend, quantified attrition, real employee complaints about F&F delays. Held below 13 because no published miss-rate data exists and I found no verbatim from an HR buyer saying "I'd pay for this." |
| Build feasibility | 15 | 13/15 | Standard workflow engine + WhatsApp API + commodity LLM calls. Pair in 10–12 weeks. Docked for WhatsApp onboarding friction and HRMS integration sprawl. |
| Distribution clarity | 15 | 11/15 | Buildable LinkedIn list, a diagnostic hook that pre-qualifies, and a real consultant channel. Not higher: mid-market HR buying involves procurement and takes longer than a 2-week sprint. |
| Revenue mechanics | 15 | 11/15 | Pricing benchmarked against greytHR/Keka; 280 customers to ~$1M is credible; 85%+ margin. Docked because ₹25K/mo for an add-on to an existing HRMS is an untested price point. |
| Time to first revenue | 10 | 8/10 | Diagnostic → paid pilot is fast, and the deadline is already live. 8–12 weeks realistic; not 9–10 because mid-market procurement rarely closes in four. |
| Defensibility | 10 | 4/10 | **The weak axis, honestly scored.** Any incumbent HRMS could ship parallel fan-out plus WhatsApp chasing in a quarter if they cared. Moat is speed, focus, WhatsApp-approval habit, accumulated state-rule/policy encoding, and the evidence archive creating switching cost. Execution moat, not a structural one. |
| **Total** | **100** | **76/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `sales-heavy`

Needs someone who can ship a reliable workflow engine and someone who can sell into Indian mid-market HR. A labour-law advisor on retainer is strongly recommended — not for the build, but for the deemed-clearance policy design, which is the one place we could get the legal posture wrong.

### Key assumptions to validate (5)

1. **Assumption:** A meaningful share of 200–3,000-person Indian employers are currently missing the two-day window. **How to test:** Run the free diagnostic on 30 firms' last 20 exits. If the median miss rate is under 20%, the problem is smaller than the statute implies and this is a VALIDATE, not a GO. *This is the assumption the whole idea rests on — no published data exists.*
2. **Assumption:** HR heads will pay ₹25K/mo for a bolt-on rather than wait for greytHR/Keka to ship it free. **How to test:** 20 pricing conversations post-diagnostic. Look for signed pilot LOIs, not enthusiasm.
3. **Assumption:** Managers will actually clear no-dues from WhatsApp at materially higher response rates than from HRMS email. **How to test:** Two-week A/B in one pilot firm — WhatsApp vs. existing channel, measure median hours-to-clearance. If WhatsApp isn't at least 2× faster, the core mechanic is wrong.
4. **Assumption:** Deemed-clearance is legally defensible and HR leaders will actually enable it. **How to test:** Written opinion from a labour-law counsel, plus count how many of the first 10 pilots switch it on. If nobody enables it, the deadline stays blocked and we've only built a nicer nudge tool.
5. **Assumption:** Enforcement will be real enough to sustain urgency. **How to test:** Track Section 45 claims and Shram Suvidha complaint volumes over two quarters.

### Risk flags

1. **Incumbent response:** greytHR (23k+ brands) or Keka bolts parallel chasing and WhatsApp approvals onto their existing exit module and bundles it free. This is the most likely way we die. Mitigation: move fast, go deeper on evidence/defence than a feature-checkbox competitor will bother to, and stay integration-friendly so we're a complement rather than a target.
2. **Enforcement lag:** Statutes in India can sit lightly enforced for years. If labour authorities don't act, urgency stays theoretical and this becomes a vitamin. The three-year claims window and employee self-service route partially offset this — the enforcement here is bottom-up from ex-employees, not top-down from inspectors, which is harder to stall.
3. **State-rule fragmentation:** Multi-state employers face differing notified rules. This is simultaneously a moat and an ongoing maintenance tax. Underestimating it turns the product into a consulting business.
4. **Platform dependency:** WhatsApp Business API is the core channel. Policy or pricing changes hit the primary mechanic. Mitigation: SMS and email fallbacks from day one.
5. **The real blocker may be political, not technical:** if a manager refuses to clear because of a genuine dispute, software escalates but cannot decide. Deemed-clearance is the answer, and if customers won't enable it, the product's ceiling is lower than this score implies.

## 14. Structured verdict

```
Score:                  76/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder who ships reliable workflow software, paired with
                        someone who can sell Indian mid-market HR; labour-law advisor on retainer
Time to revenue:        8–12 weeks
Capital to launch:      ₹8–12 lakh ($10–14K)
Top 3 assumptions to validate first:
  1. Real miss rate is high — free diagnostic across 30 firms' last 20 exits; kill if median <20%
  2. ₹25K/mo bolt-on clears budget — 20 post-diagnostic pricing calls, count signed pilot LOIs
  3. WhatsApp clearance beats email — 2-week A/B in one pilot, measure median hours-to-clearance
Kill criteria:
  - Abandon if median miss rate across 30 diagnosed firms is under 20% (problem too small)
  - Abandon if <5 of 30 diagnosed firms will sign a paid pilot at ₹15K+/mo within 60 days
  - Abandon if greytHR or Keka ships parallel WhatsApp-based clearance chasing before v1
  - Abandon if WhatsApp clearance is not ≥2× faster than incumbent channel in pilot
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Build the diagnostic as a spreadsheet template plus a one-page landing site. Pull a LinkedIn Sales Navigator list of 300 HR-ops leaders at 200–3,000-person firms in Bengaluru, Hyderabad and Pune, weighted to IT services and BPO. Send the one-line pitch: *"Of your last 20 exits, how many settled within two working days of the last working day? Free diagnostic, 15 minutes."*
- **Day 3–4:** Run the diagnostic live on every firm that responds. Record two numbers per firm: **miss rate** and **median hours from last-working-day to settlement**. Ask each one what actually blocked the slowest exit — I expect "reporting manager" to dominate, and I want to know if I'm wrong.
- **Day 5:** Take everyone with a miss rate above 20% straight into a pricing conversation. Ask for a paid pilot at ₹15K/mo, not a free one — free pilots teach you nothing about willingness to pay.

**Falsifiable outcome:** From 300 outbound messages, at least **20 completed diagnostics**, a **median miss rate above 20%**, and at least **3 signed paid-pilot commitments** at ₹15K+/mo. Miss the miss-rate bar and the statute is louder than the pain — downgrade to VALIDATE and stop. Hit the miss-rate bar but miss the pilots and it's a pricing or packaging problem, not a demand problem — re-cut and retest before writing any code.
