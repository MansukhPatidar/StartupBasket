---
title: "CertMarshal — quarterly certificate marshal for Indian developers"
slug: rera-qpr-certificate-chase
date: 2026-08-09
category: PropTech / India — Small and Mid-Size Real Estate Promoters (2–15 RERA-Registered Projects) Who Miss Quarterly Progress Reports Because Three Outside Professionals Never Sign On Time
complexity: Low
score: 74
verdict: GO
confidence: Medium
oneLiner: "Musters the architect, engineer and CA whose unsigned certificates are about to blow your RERA quarterly deadline."
tags:
  vertical: PropTech
  model: SaaS
  geography: India
  secondary: [WhatsApp-first, Compliance-driven, SMB, AI-agent, Multilingual]
axes:
  problem: 16
  demand: 13
  build: 13
  distribution: 13
  revenue: 10
  time: 7
  defensibility: 2
founderFit: [operations-heavy, sales-heavy]
featured: false
---

# CertMarshal

## 1. One-liner

Musters the architect, engineer and CA whose unsigned certificates are about to blow your RERA quarterly deadline.

## 2. Trend signal — why now?

The Real Estate (Regulation and Development) Act has crossed **1.5 lakh registered projects nationally**, with **Maharashtra alone accounting for roughly 45,000**. That base is now large enough that regulators have shifted from registering projects to policing them — and the policing is quarterly.

What changed in the last 18 months is enforcement posture, not the law:

- **MahaRERA took action against developers of 8,212 housing projects** for failing to submit quarterly progress reports on time, out of 33,029 registered projects. The Mumbai Metropolitan Region alone accounts for 4,644 of them.
- **UP-RERA fined two Lucknow developers a combined ₹2.43 crore** for QPR violations. One named promoter, Shushil Kumar Katiyar, drew a ₹16.25 lakh penalty on the "Arpita Infinity" project after **no QPR submissions for four consecutive quarters**.
- **Karnataka RERA now levies ₹25,000 per quarter** for non-submission; MahaRERA fines run to ₹50,000, and serious cases can reach 5% of estimated project cost. Non-compliance can freeze the project's designated bank account or revoke registration outright.
- MahaRERA's own compliance tracking showed **557 developers (62.86%) still non-compliant** across a recent review period, even after notices and penalties. Compliance climbed only slowly — from near-zero in January to just over 50% of projects filing without needing a notice.

That last number is the real signal. These developers are not defying the regulator. They are getting notices, paying fines, and *still* missing the next quarter. That is the signature of a broken workflow, not a willful one.

The mechanical reason is specific and it is the whole idea. A QPR is not a form the developer fills in. It is a **certification-based filing**: the project **architect signs Form 1** (percentage of work completed), the **engineer signs Form 2** (cost of development incurred), and the **chartered accountant signs Form 3** (fund utilisation from the designated account). Projects registered after 01.12.2018 additionally file **Form 2A** every quarter. The developer cannot file until all three outside professionals return signed certificates — and the filing window is **7 days after quarter-end in several states** (20 days in Maharashtra's QPR cycle).

So the promoter's job is not data entry. It is chasing three busy external professionals — who work for many developers, are not employees, and have no penalty exposure of their own — through a one-week window, four times a year, once per project. A promoter with nine projects is chasing 27 signatures in seven days.

Provenance:
  - Signal 1 (demand): MahaRERA actioned developers of 8,212 of 33,029 registered projects for late/missing QPRs; 62.86% of reviewed developers remained non-compliant despite notices and penalties — https://propnewstime.com/getdetailsStories/NTU2NQ==/maharera-qpr-compliance-improves-but-non-responders-remain-a-concern and https://constrofacilitator.com/maharera-cracks-down-on-errant-builders-issues-notices/ — observed 2026-08-09
  - Signal 2 (feasibility): MahaRERA publishes a live, public, district-wise defaulter list with promoter name, project name, registration certificate number and district — a named, addressable prospect list requiring no data purchase — https://maharera.maharashtra.gov.in/district-wise-non-compliance-qpr-projects — observed 2026-08-09
  - Signal 3 (economic): Enforcement is now expensive and real — UP-RERA fined two Lucknow developers ₹2.43 crore for QPR default; KRERA charges ₹25,000/quarter; MahaRERA up to ₹50,000, with account freezing and deregistration available — https://dsdproperties.in/news/up-rera-fines-lucknow-developers-2-crore-qpr-default-2026 and https://rerafiling.com/rera-article-detail.php/925/krera-imposes-penalty-for-delay-or-non-submission-of-quarterly-progress-reports-fy-2025-ndash-26 — observed 2026-08-09
  Category: Workflow automation

## 3. The opportunity

Every existing player treats this as a **filing** problem. It is a **chasing** problem.

The RERA consultant market in India is real and crowded — ReraOne, RERA Simple, reraco, rerafiling and dozens of local CA and advocate practices all sell "QPR filing services." They are manual retainer shops. A human at the consultancy emails the architect, emails the engineer, emails the CA, waits, re-emails, and eventually uploads. Professional fees run ₹5,000–₹50,000+ depending on scope. That model has two structural weaknesses:

1. **It doesn't scale with project count.** The consultant's cost is linear in the number of chases. A developer with twelve projects pays twelve times, or gets deprioritised behind the consultant's bigger clients at exactly the moment everyone's deadline lands on the same day — because *every* project in the state shares the same quarter-end.
2. **The consultant has the same bottleneck the developer has.** They also cannot make the architect sign faster. They are a human wrapper around an unsolved coordination problem, which is why 62.86% non-compliance persists in a market that is already paying consultants.

The gap: nobody is selling the developer a system that **owns the outside professionals as the unit of work**. Not "here is your filing dashboard" — rather, "here are the 27 signatures due in six days, here are the 9 that haven't moved, here is the one architect who is the reason three of your projects will be late, and here is the WhatsApp thread where he was already nudged twice."

The incumbents' UX is a portal the developer logs into. The right UX is a system that never requires the *professional* to log in at all — because the architect will not adopt your software, ever. He will answer a WhatsApp message with a photo of a signed certificate. That asymmetry is the product.

## 4. Target market

- **Primary customer:** Promoter, compliance manager, or CFO at a small-to-mid real estate developer holding **2–15 RERA-registered projects**, in Maharashtra, Karnataka, UP, Telangana, Gujarat or Tamil Nadu. Company size 10–150 staff. Not the top-50 national builders — they have in-house compliance teams and enterprise ERPs. Not single-project micro-developers — one project is chaseable by memory.
- **Why they buy:** In their world the cost is not abstract. A missed QPR generates an automatic notice; non-response within 10 days escalates to a hearing; the outcome is a fine up to ₹50,000 per project (₹25,000/quarter in Karnataka), and in bad cases a frozen designated bank account — which halts construction draws and is existential, not annoying. A developer with nine projects who misses one quarter across three of them is out ₹1.5 lakh plus hearing time, for a failure whose root cause was an architect on a site visit who didn't check email.
- **Rough TAM reasoning:** ~1.5 lakh RERA-registered projects nationally; ~45,000 in Maharashtra. Projects cluster under promoters, so assume an average of 3–5 projects per active promoter in the target band — call it **25,000–40,000 addressable promoter entities nationally**, with roughly a third in Maharashtra alone. This does not need to be a national play to work: Maharashtra plus Karnataka is sufficient for the full ARR path.
- **Why now for them:** Enforcement stopped being theoretical. MahaRERA publishes a public district-wise defaulter list carrying the promoter's name and project name — which homebuyers, brokers and lenders read as a delay red flag. The reputational cost now compounds the fine. A developer whose name sits on that page while selling inventory has a sales problem, not just a compliance problem.

## 5. Product sketch (MVP)

- **Project register with quarter clock** — import projects by RERA registration number; the system knows each state's filing window (7 days post-quarter in several states, 20 days for the MahaRERA cycle) and starts the countdown automatically.
- **Certificate matrix** — a single grid: projects down the side, Form 1 (architect) / Form 2 (engineer) / Form 3 (CA) / Form 2A across the top. Every cell is Not started / Requested / Chased / Received / Filed. This is the whole product in one screen.
- **WhatsApp chase agent** — the professional never logs in. They get a WhatsApp message naming the project, the form, and the deadline, and they reply with a photo or PDF of the signed certificate. Escalating nudges fire on a schedule the developer sets; silence past threshold escalates to the promoter.
- **Certificate intake and read-back** — an incoming photo of a Form 1 is read, matched to the right project and quarter, checked for the obvious defects (wrong quarter, missing percentage-complete figure, unsigned, missing seal/registration number), and either accepted or bounced back automatically with the specific reason.
- **Bottleneck view** — ranks *professionals*, not projects: "Architect R. Deshpande is blocking 4 of your 9 filings and has not responded in 6 days." Developers do not currently know this, because their information is scattered across nine separate email threads.
- **Filing pack assembly** — bundles the received certificates plus the quarter's booking/approval/encumbrance disclosures into the upload-ready set per project, so the final portal step is mechanical rather than a scavenger hunt.
- **Defaulter-list watch** — monitors the state's public non-compliance list and alerts the promoter if one of their projects appears, which is often how they find out today.
- **Multi-quarter audit trail** — every request, nudge, receipt and filing timestamped, so when a notice arrives the developer can show what was requested when, and from whom.

## 6. AI angle — what's load-bearing

Remove the AI and this degrades into a shared spreadsheet with reminders — useful, but not something a promoter pays ₹8,000/month for. Two places carry real weight:

**Certificate reading and defect-catching.** What comes back over WhatsApp is a phone photo of a stamped, signed, part-handwritten certificate, at an angle, in variable light, in a mix of English and regional formatting. The system has to pull the project identity, the quarter, the percentage-complete or cost figure, and confirm signature and seal are present — then judge whether this certificate is actually usable or is going to bounce at the portal. Doing that at 27-signatures-per-quarter volume, reliably enough that the developer trusts the green cell, is the load-bearing AI. A wrong-quarter Form 1 that gets waved through is a missed filing with the developer's name on it.

**Chase judgement.** Not every silence means the same thing. An architect who replied "site visit Thursday, will send Friday" should not be nudged Wednesday; one who has read nothing in five days with two days left should escalate to the promoter directly. The agent reads the reply thread — often in Hindi, Marathi or transliterated mix — decides whether the response constitutes a commitment, extracts the promised date, and re-plans the chase around it. Getting this wrong in either direction is fatal: nag a senior CA who is doing you a favour and he stops answering; under-chase and you miss the window.

Neither is exotic model work. Both are exactly the kind of messy-input judgement that got cheap and reliable in the last 18 months, and neither existed as an off-the-shelf capability when the current consultant shops set their process.

## 7. Localization angle

This is India-native by construction — it is not a global product with an India skin.

- **WhatsApp is the entire distribution surface for the professional side.** Architects, site engineers and CAs in this market run their working lives on WhatsApp. Any design that requires them to install an app or accept a portal invite fails on contact with reality. The willingness to build WhatsApp-first is the moat against a Western PropTech entrant.
- **Language.** Chase threads and certificate annotations run in English, Hindi, Marathi, Kannada and transliterated mixes. The reply parser has to handle "kal bhej dunga" as a commitment with a date.
- **Pricing.** ₹6,000–₹15,000/month per developer works where a $200–500/mo equivalent would not clear. Against a single ₹50,000 fine, that is a trivially defensible line item — the ROI conversation is one sentence long.
- **Regulatory fragmentation is the feature.** Every state RERA has its own window, its own form variants and its own portal quirks. That fragmentation is precisely why no global tool exists and why a generic "compliance calendar" doesn't work. Encoding Maharashtra + Karnataka properly is weeks of unglamorous work that a foreign competitor will not do.
- **UPI/RazorpayX for collection**, monthly or quarterly billing aligned to the compliance cycle.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** ₹1,200/project/month, floor of ₹6,000/month (covers up to 5 projects), scaling to ₹15,000/month at 12–15 projects. Sell annually where possible — the pain is quarterly, so an annual contract removes the "I'll resubscribe next quarter" churn trap.
- **ACV:** ₹96,000 (~$1,150) for a typical 7-project developer.
- **Rough math to $1M ARR:** ~730 developers × ₹1.15L average ACV ≈ ₹8.4 crore ≈ $1M. That is roughly 2–3% of the addressable promoter base — and well under 10% of Maharashtra's defaulter list alone.
- **Rough math to $5M ARR:** ~3,000–3,500 developers, requiring genuine coverage across 5–6 states and a channel motion through CA and RERA-consultant partners rather than direct sales alone. Realistically a 3–4 year path, not 24 months. The honest read: this is a **strong ₹8–15 crore business** and a strained $5M one.
- **Expansion path:** ACV grows with project count as the developer registers new projects — the natural land-and-expand. Beyond that: annual Form 5 (audited statement) coordination, the same chase mechanic applied to occupancy-certificate and completion-certificate document sets, and a seat for the developer's external CA firm. Longer term, the consultant shops themselves become customers — they have the identical chase problem across a larger portfolio, at a higher price point.

## 9. Go-to-market wedge — first 100 customers

This is the strongest part of the idea, because **the regulator publishes the list of people with the problem, by name.**

- **Work the public defaulter lists directly.** MahaRERA's district-wise QPR non-compliance page carries promoter name, project name, registration certificate number and district. Every entry is a company that has already demonstrated the exact failure the product prevents — and has already paid or is facing a fine for it. Compile the list, resolve promoter contacts (RERA registration filings carry promoter details, and these are small firms with findable directors), and run a direct outbound sequence. Open with their own project name and the page it appears on. Target 400 named promoters, expect 15–20% response to a message that specific.
- **Time the outreach to the quarter clock.** The single highest-intent moment in this market is days 3–8 after quarter-end, when the promoter is actively chasing signatures and knows they are going to be late. Run outbound in that window, four times a year. A demo landed on the day someone is manually WhatsApping their engineer for the third time converts at a rate no evergreen campaign will match. First campaign: the October 2026 quarter-end.
- **Partner with RERA consultants and CA firms, not around them.** The consultancies (ReraOne, RERA Simple, reraco, and the long tail of local practices) hold the client relationships and feel the chase pain themselves at portfolio scale. Offer a white-label/partner tier with revenue share. Ten mid-size consultancies with 30–60 developer clients each is a faster path to 100 customers than any direct motion, and it converts the obvious competitor into the channel.
- **Local developer associations.** CREDAI state and city chapters (Maharashtra, Karnataka) run member meetings where compliance penalties are a standing agenda item. A 20-minute session titled with the actual fine amounts, plus a member discount, is a well-worn and effective route into this specific audience.
- **The bottleneck report as a free wedge.** Offer any developer a free one-quarter audit: import their projects, show which professionals blocked which filings and by how many days. It costs nothing to produce, tells them something they genuinely do not know, and the finding ("one architect caused four of your late filings") is itself the sales pitch.

## 10. Build complexity — justification

**Low.** No custom models, no novel infrastructure. The work is a project/quarter state machine, a WhatsApp Business API integration for the chase loop, document intake with vision-based reading of certificates, and per-state rule encoding for windows and form variants. The genuinely fiddly parts are (a) reliable extraction from bad phone photos of stamped certificates, and (b) getting each state's timing and form rules right — both are grind, not research. Two people ship a Maharashtra-only v1 in **8–10 weeks**; a second state is roughly two weeks of incremental rule work each. Filing itself stays a human step in v1 — the product assembles the pack, the developer or their consultant uploads it. Automating portal submission is a v2 question and deliberately out of scope.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Helping a promoter collect and organise their own statutory certificates. No regulated activity, no filing-on-behalf claim in v1, no professional certification performed by the software. |
| Ethical — no harm / dark patterns | ✅ | Increases regulatory compliance and improves the accuracy of information homebuyers rely on. The chase agent must identify itself as automated to the professionals it messages. |
| Market exists (evidence above) | ✅ | 8,212 projects actioned by MahaRERA; ₹2.43 crore in UP-RERA fines; existing paid consultant market. |
| 1–5 person team can build this | ✅ | Two people, 8–10 weeks to a single-state v1. |
| Launchable with <$50K / ₹40L | ✅ | Well under ₹15L to first revenue. Main costs are WhatsApp API messaging and two salaries. |

All five gates pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | Real money (₹25–50K/quarter/project), account-freeze and deregistration risk, public naming. Docked because it is **quarterly, not daily** — four acute moments a year, with 11 quiet weeks between. Quarterly pain is genuinely easier to forget to renew than daily pain. |
| Demand evidence | 15 | 13/15 | Unusually hard evidence: regulator-published defaulter counts, named enforcement actions with amounts, a measured 62.86% non-compliance rate, and an existing paid consultant market. Docked 2 because every source is regulator/industry data — I could not obtain direct verbatim developer complaints to confirm they frame the problem as "chasing" rather than "filing." |
| Build feasibility | 15 | 13/15 | Off-the-shelf throughout. Certificate extraction from poor photos and per-state rule encoding are the only real work. |
| Distribution clarity | 15 | 13/15 | The regulator publishes a named list of prospects who have already failed, and the quarter clock supplies precise timing. Docked because contact resolution from promoter names to decision-maker phone numbers is manual grind, and this segment buys slowly relative to Western SMB SaaS. |
| Revenue mechanics | 15 | 10/15 | ₹1,200/project is defensible against a ₹50,000 fine and the pricing is benchmarked to existing consultant spend. But ACV is modest, Indian SMB price sensitivity is real, and the $5M path needs multi-state coverage plus a channel — $1M is well-supported, $5M is a stretch. |
| Time to first revenue | 10 | 7/10 | 8–10 week build, then the first high-intent window is the following quarter-end. Realistically 4–5 months to first paying customers, because the best selling moment arrives on the calendar's schedule, not yours. |
| Defensibility | 10 | 2/10 | **The weak axis.** No proprietary data, no network effect, no lock-in beyond stored history. A consultant shop or an existing RERA-software vendor can copy the chase loop in a quarter. The only real edges are per-state rule depth and being the incumbent inside the developer's quarterly habit. |
| **Total** | **100** | **74/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`operations-heavy` · `sales-heavy`

This is not a technical founder's showcase. Winning means grinding through state-by-state rule encoding, resolving promoter contacts by hand, showing up at CREDAI chapter meetings, and negotiating consultant partnerships. A builder who wants to disappear into the code for six months will lose to one who spends the first quarter on the phone with promoters in Pune and Bengaluru.

### Key assumptions to validate (3–5)

1. **Assumption:** Developers experience this as a *chasing* problem, not a *filing* problem — i.e. the binding constraint is professional response time, not portal mechanics. **How to test:** 25 structured interviews with promoters drawn from the MahaRERA defaulter list. Ask them to reconstruct their last late QPR hour by hour. If the delay traces to the portal or to internal data gathering rather than to waiting on the architect/engineer/CA, the core thesis is wrong and the product should be rebuilt as a filing tool.
2. **Assumption:** Architects, engineers and CAs will actually respond to a WhatsApp chase from a third-party system on the developer's behalf. **How to test:** Run one quarter fully manually for 5 developers — a human sending the same messages the agent would send. Measure response rate and time-to-certificate against their previous quarter. If professionals ignore or resent third-party chases, the whole mechanism collapses.
3. **Assumption:** A developer will pay ₹6,000–15,000/month for something whose pain peaks four times a year. **How to test:** Sell annual contracts, not monthly, to the first 20 customers. If they will only buy month-to-month around quarter-end, ACV and retention both break and the pricing model needs rework.
4. **Assumption:** Certificate photos can be read reliably enough that developers trust a "Received" cell. **How to test:** Collect 200 real certificate images across Forms 1/2/3 and measure extraction and defect-detection accuracy. Below ~95% on quarter and project matching, the product creates false confidence — which is worse than no product.

### Risk flags

1. **Defensibility (primary):** Score of 2/10 is the real vulnerability. The mechanic is visible and copyable. Mitigation is speed, state-rule depth, and converting consultants into channel partners before they become competitors — but this business is defended by execution, not structure.
2. **Channel conflict:** RERA consultants are simultaneously the best distribution channel and the most natural competitor. Lead with partnership; a direct-only motion that visibly disintermediates them invites them to build or white-label a rival.
3. **Regulatory dependency:** The product exists because states enforce QPR deadlines. Softened enforcement, a longer filing window, or a state RERA shipping its own reminder/chase tooling would compress the pain. Conversely, incumbent portal changes can break assumptions each quarter — this needs ongoing maintenance, forever.
4. **Quarterly cadence and churn:** Four pain spikes a year means eleven quiet weeks per quarter in which the product is invisible. Annual billing and the between-quarter bottleneck reporting are the countermeasures, but retention is a genuine open question.
5. **Platform dependency:** The chase loop rides on WhatsApp Business API. Policy or pricing changes on messaging categories directly affect both unit economics and the core mechanic.

## 14. Structured verdict

```
Score:                  74/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Operations-minded founder with India SMB sales instincts,
                        ideally with a RERA-consultant or CA co-founder for credibility
                        and warm distribution
Time to revenue:        4-5 months (8-10 week build, then the next quarter-end window)
Capital to launch:      ₹12-15 lakh ($15-18K)
Top 3 assumptions to validate first:
  1. The binding constraint is professional response time, not filing mechanics —
     25 promoter interviews reconstructing their last late QPR hour by hour
  2. Outside professionals respond to third-party WhatsApp chases —
     one manually-run quarter across 5 developers, measured against their prior quarter
  3. Developers buy annually despite quarterly pain —
     sell only annual contracts to the first 20 customers
Kill criteria:
  - Abandon if fewer than 8 of 25 interviewed promoters name professional
    response time as the primary cause of their last late filing
  - Abandon if the manual pilot quarter fails to improve time-to-certificate by
    at least 30% versus the developers' previous quarter
  - Abandon if fewer than 5 of the first 20 prospects will sign an annual contract
    at ₹6,000+/month
  - Abandon if MahaRERA or KRERA ships native automated certificate-chasing
    before v1 launches
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Scrape and structure the MahaRERA district-wise QPR non-compliance list into a working prospect base. Resolve promoter contacts for 60 firms holding 2–15 projects. This doubles as building the actual GTM list, so the work is not thrown away regardless of outcome.
- **Day 3–4:** Run 25 promoter interviews. One required question, asked without leading: *"Walk me through your last late QPR — where exactly did the days go?"* Tally root causes into professional-response-time vs. internal-data vs. portal-mechanics. Separately, call 8 architects and CAs and ask directly whether they would respond to an automated WhatsApp chase sent on a developer's behalf, or find it presumptuous.
- **Day 5:** Decide on a falsifiable threshold. **Go if ≥8 of 25 promoters name professional response time as the primary cause of their last late filing, AND ≥5 of 8 professionals say they would respond to a third-party WhatsApp chase.** Anything less means the product I've described is aimed at the wrong bottleneck — in which case the fallback is not to build a worse filing tool, it is to stop.

The interviews must be run against the defaulter list specifically, not friendly contacts. People who have already been penalised will tell you the truth about where the days went; people who have never missed a deadline will speculate politely, and polite speculation is how this idea gets built wrong.
