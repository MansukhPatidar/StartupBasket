---
title: "QuarterLock — RERA quarterly autofiler for Indian developers"
slug: rera-quarterly-progress-autofiler
date: 2026-06-16
category: PropTech / India Real Estate Developers (RERA-registered projects)
complexity: Medium
score: 73
verdict: GO
confidence: Medium
oneLiner: "Assembles every RERA quarterly progress report and chases the architect, engineer and CA sign-offs before the penalty window closes."
tags:
  vertical: PropTech
  model: SaaS
  geography: India
  secondary: [Compliance-driven, SMB, AI-agent, WhatsApp-first, Multilingual]
axes:
  problem: 15
  demand: 12
  build: 11
  distribution: 11
  revenue: 11
  time: 7
  defensibility: 6
founderFit: [domain-expertise-required, operations-heavy]
featured: false
---

# QuarterLock — RERA quarterly autofiler for Indian developers

## 1. One-liner

Assembles every RERA quarterly progress report and chases the architect, engineer and CA sign-offs before the penalty window closes.

## 2. Trend signal — why now?

RERA quarterly compliance went from "loosely enforced" to "states are actively writing penalty cheques" in the last 18 months, and the screws are tightening through 2026.

- **MahaRERA** fines up to ₹50,000 for a missed Quarterly Progress Report (QPR); the report is due within **7 days of the quarter close** — a brutally short window for a small dev team juggling three certifier sign-offs.
- **Karnataka RERA (KRERA)** issued a January 2026 warning imposing **₹10,000 per month** for delayed or non-submitted QPRs in FY 2025–26 — a fresh, dated enforcement push.
- **Andhra Pradesh RERA** penalizes non-submission at **5% of the estimated project cost** — five figures becomes seven figures fast.
- **RERA 2.0 (2026)** standardizes the QPR (Form-8 / state revamps like Gujarat's), mandates quarterly disclosures for the *full* construction period, and adds public QR-code project pages — so a missed or sloppy filing is now visible to buyers, not just regulators.
- **1.43 lakh (≈143,000) RERA-registered projects** existed in India as of 2025. Every one owes a QPR every quarter.

The work itself — collating Forms 1/2/3 (architect, engineer, CA), inventory updates, financials, and uploading to the state portal within 7 days — is today done by manual consultant shops (gstco/reraco, rera360, dozens of CA firms) on per-project retainers. Nobody's productized the deadline-chase into self-serve software priced for the developer.

Provenance:
  - Signal 1 (Demand): MahaRERA ₹50K penalty for missed QPR, 7-day window; KRERA Jan-2026 ₹10K/month enforcement — https://www.99acres.com/articles/karnataka-rera-to-penalise-builders-for-not-filing-quarterly-updates-nid.html , https://rerafiling.com/rera-article-detail.php/925/krera-imposes-penalty-for-delay-or-non-submission-of-quarterly-progress-reports-fy-2025-ndash-26 — 2026
  - Signal 2 (Feasibility/Why-now): RERA 2.0 standardizes QPR (Form-8), stricter nationwide enforcement, public QR project pages — https://www.outlookmoney.com/invest/tighter-norms-under-rera-20-5-changes-homebuyers-should-be-aware-of — 2026
  - Signal 3 (Economic): Manual QPR-filing services sold per-project; consultants running 315+ projects on retainer; ~1.43 lakh registered projects — https://reraco.com/products/qpr-filing-in-maharashtra-maharera-quarterly-compliance , https://www.kalpataru.com/blogs/how-to-check-rera-registered-projects-india — 2025–2026
  Category: Regulatory arbitrage

## 3. The opportunity

The pain isn't the certificates — an architect, engineer, and CA must legally sign Forms 1/2/3 and software can't replace those signatures. The pain is everything *around* them: remembering 4 deadlines a year per project, pulling the right data into the right form, nagging three busy professionals to sign in a 7-day window, uploading to a clunky state portal, and proving you did it before the regulator's auto-generated notice lands.

Today that orchestration is sold as a manual consultant service — opaque per-project retainers, WhatsApp-and-email chaos, and a junior who forgets a project the quarter the penalty hits. The incumbent's "product" is a human who chases people.

QuarterLock productizes the chase. It knows every project's deadline, pre-fills the forms from last quarter plus this quarter's deltas, sends the architect/engineer/CA a one-tap sign-and-return link, and surfaces a single "X projects at risk this week" view. A developer with 8 projects stops paying a consultant ₹thousands/project/quarter and runs it in-house for a flat subscription — and never eats a ₹50K penalty again.

## 4. Target market

- **Primary customer:** The compliance/liaison person (often the proprietor, a junior CA, or a project coordinator) at small-to-mid Indian real estate developers running **3–40 RERA-registered projects** — Tier-1 and Tier-2 cities. Not the top-20 national builders (they have in-house teams); the long tail of regional developers.
- **Why they buy (their words):** "Every quarter it's the same fire drill — chasing the architect for Form 1, the CA is travelling, and the MahaRERA portal times out on the last day. One missed QPR is ₹50,000 gone." They already feel this four times a year.
- **Rough TAM reasoning:** 1.43 lakh registered projects. Conservatively, the addressable long-tail developer base controls tens of thousands of these. If even 15,000 projects sit under developers willing to pay per-project software, at a few hundred ₹/project/month this is a comfortably >₹100 Cr ARR ceiling — far past the $5M target with single-digit-percent penetration.
- **Why now for them:** RERA 2.0's stricter, public, penalized enforcement in 2026 converted a soft "we'll get to it" into a hard recurring liability. The deadline didn't move; the consequence got teeth.

## 5. Product sketch (MVP)

- **Project + deadline ledger:** import each project's RERA registration; auto-compute the next QPR due date per state's rule (7-day window etc.) and show a "due this week / overdue" board.
- **Form pre-fill engine:** carry forward last quarter's Form 1/2/3 and financial/inventory data; the user edits only the deltas (% complete, units sold, money in escrow).
- **Certifier chase:** one-tap WhatsApp/email links to the architect, engineer, and CA to review and e-sign their form; live status ("CA pending 3 days").
- **Portal-ready packet:** generate the exact PDF set + checklist the state portal expects, so the upload is copy-paste, not re-typing.
- **Penalty radar:** count-down alerts at T-14 / T-7 / T-2 days, escalating to the proprietor if a certifier is stalling.
- **Audit trail:** timestamped log proving each QPR was assembled and filed on time — defense if a notice is wrongly issued.
- **Multi-project, multi-state dashboard** for developers operating across MahaRERA, KRERA, GujRERA, etc.

## 6. AI angle — what's load-bearing

Remove the AI and you have a glorified calendar — so it has to do real work:

- **Delta extraction:** read last quarter's filed forms + this quarter's raw inputs (cost sheets, sales registers, site photos/engineer notes) and draft the updated QPR fields, flagging what changed and what looks inconsistent (e.g. % construction dropped vs last quarter — a red flag a regulator will catch).
- **Cross-form consistency check:** Forms 1/2/3 must agree (engineer's physical progress vs CA's financial progress vs architect's plan status). AI reconciles them and surfaces contradictions *before* filing — the exact thing that triggers portal queries today.
- **Multilingual certifier nudges:** drafts the chase messages in the certifier's preferred language/register over WhatsApp.

The AI collapses the consultant's 2–3 hours of per-project collation and reconciliation into a reviewed-in-minutes draft. That's the wedge.

## 7. Localization angle

This is India-first by definition — it's built on Indian state RERA rules, Forms 1/2/3, and state portals (MahaRERA, KRERA, GujRERA, etc.), which differ per state. WhatsApp-first certifier chasing matches how Indian developers and their CAs actually communicate. Pricing in ₹/project/month (a few hundred rupees) works where a $49 SaaS seat never would. The per-state rule engine *is* the moat — a generic global compliance tool cannot touch it. ₹-native, UPI-billable, vernacular nudges.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** ₹400/active project/month (billed annually), with a flat ₹2,999/mo small-developer plan covering up to 8 projects. Compare to consultant retainers often quoted per-project per-quarter.
- **ACV:** A developer with ~10 active projects → ~₹40–48K/year. Mid plan realistic ACV ₹35–50K.
- **Rough math to $1M ARR (~₹8.3 Cr):** ~2,000 developers × ₹40K/yr ≈ ₹8 Cr. Against 1.43 lakh projects, that's a rounding error of penetration.
- **Rough math to $5M ARR (~₹42 Cr):** ~9,000–10,000 paying developers, or expansion into adjacent RERA filings (annual audit Form 5, agent registrations, escrow withdrawal certifications) lifting ACV.
- **Expansion path:** start at QPR → add full RERA compliance calendar → sell the same packet-assembly to the architect/engineer/CA firms themselves (they file for many developers) as a B2B2B seat.

## 9. Go-to-market wedge — first 100 customers

- **RERA consultant + CA channel:** ~hundreds of firms (reraconsultants.in, rera360, regional CAs) already file QPRs manually for clients. Offer them QuarterLock as a white-label back-office to handle 5× the projects with the same staff — they bring their book. Sign 10 firms → hundreds of projects.
- **State-portal scrape + direct outreach:** RERA portals publicly list registered projects and promoter names. Pull the long-tail developers in Maharashtra/Karnataka/Gujarat, send a personalized WhatsApp/Loom showing *their* next QPR deadline and the ₹50K they're risking. Time the blast to ~2 weeks before quarter-end when the pain is acute.
- **Developer associations:** CREDAI and state builder bodies hold compliance webinars; co-run a "never miss a QPR" session, capture the room.
- **Quarter-end retargeting:** the single most predictable demand spike in this business is the 7 days after each quarter close — concentrate spend and content there.

## 10. Build complexity — justification

**Medium.** The form pre-fill, deadline math, WhatsApp/e-sign chase, and PDF packet generation are all off-the-shelf (standard web stack, document AI APIs, WhatsApp Business API). The non-trivial work is the **per-state RERA rule engine** — each state has slightly different forms, windows, and portal quirks — and keeping it current as RERA 2.0 rolls out. Launch with MahaRERA + KRERA + GujRERA (the highest-project states), add states as you grow. Small team, ~3–4 months to a credible v1.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Assists compliance; certifiers still legally sign. No practice-of-law/CA issue. |
| Ethical — no harm / dark patterns | ✅ | Helps developers meet buyer-protection rules — pro-transparency. |
| Market exists (evidence above) | ✅ | 1.43L projects, live state penalties, paid manual incumbents. |
| 1–5 person team can build this | ✅ | Off-the-shelf stack + state rule engine. |
| Launchable with <$50K / ₹40L | ✅ | No capex; domain advisor (a RERA CA) is the main cost. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 15/20 | Recurring quarterly, money-backed (₹50K / ₹10K-mo / 5% of cost), but it's a 4×/year fire not a daily one. |
| Demand evidence | 15 | 12/15 | Live multi-state penalties, dated KRERA crackdown, paid manual incumbents, 1.43L projects. Lacking only direct verbatim "I'd pay" quotes. |
| Build feasibility | 15 | 11/15 | Off-the-shelf except the per-state rule engine; ~3–4 months. |
| Distribution clarity | 15 | 11/15 | Public portal lists + consultant white-label channel are concrete; conversion timing tied to quarter-end. |
| Revenue mechanics | 15 | 11/15 | ₹/project pricing benchmarks against consultant retainers; ACV modest, needs volume. |
| Time to first revenue | 10 | 7/10 | Pre-sell to consultant firms before a quarter close → revenue in 6–8 weeks. |
| Defensibility | 10 | 6/10 | Per-state rule engine + workflow lock-in + audit-trail switching cost; copyable but with a real head-start moat. |
| **Total** | **100** | **73/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`domain-expertise-required` · `operations-heavy` — you need a RERA-fluent CA/consultant co-founder or advisor; the rule engine is the product, and getting it wrong = filing the wrong thing.

### Key assumptions to validate (3–5)

1. **Assumption:** Long-tail developers will run QPR in-house with software instead of paying a consultant. **How to test:** Interview 25 developers (3–40 projects) across Maharashtra/Karnataka; ask who files today and what they'd pay to self-serve.
2. **Assumption:** Consultant firms will adopt rather than resist (channel, not enemy). **How to test:** Pitch 10 RERA/CA firms a white-label back-office; measure how many pilot.
3. **Assumption:** The per-state rule engine is maintainable by a small team as RERA 2.0 changes roll out. **How to test:** Build MahaRERA + KRERA end-to-end and file 5 real QPRs with a partner developer.
4. **Assumption:** Certifiers (architect/engineer/CA) will use one-tap e-sign links. **How to test:** Run the chase flow on one developer's next quarter; measure sign turnaround vs their email/WhatsApp baseline.

### Risk flags

1. **Regulatory/platform risk:** State RERA portals can change forms or block third-party packet uploads; rules vary and shift under RERA 2.0. Mitigate by staying packet-prep (not direct API filing) and tracking gazette changes.
2. **Channel-conflict risk:** Consultants may see software as a threat to retainer revenue and block adoption. Mitigate by positioning as their capacity multiplier.
3. **Seasonality risk:** Demand spikes 4×/year at quarter-end; usage and churn perception are lumpy. Mitigate with annual billing and year-round compliance-calendar value.

## 14. Structured verdict

```
Score:                  73/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder + RERA-fluent CA/consultant advisor
Time to revenue:        6–10 weeks (pre-sell to consultant firms before a quarter close)
Capital to launch:      ₹4–7 lakh ($5–8K)
Top 3 assumptions to validate first:
  1. Developers will self-serve vs consultant — 25 developer interviews
  2. Consultant firms adopt as white-label channel — 10-firm pitch, count pilots
  3. Two-state rule engine files 5 real QPRs cleanly — build + live test
Kill criteria:
  - Abandon if <6 of 25 interviewed developers will pay ₹400/project/mo to self-serve
  - Abandon if 0 of 10 consultant firms pilot the white-label after a quarter-end push
  - Abandon if state portals prohibit third-party-assembled packet uploads in target states
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Scrape MahaRERA + KRERA portals for 200 long-tail developers and their next QPR due dates. Build a one-page "your QPR is due in N days, here's the ₹50K risk" personalized message.
- **Day 3–4:** Send to all 200 via WhatsApp/email; in parallel, call 10 RERA/CA consultant firms with the white-label pitch.
- **Day 5:** Decide go / no-go on a **falsifiable** bar: ≥15 developer replies expressing interest AND ≥2 consultant firms agreeing to a paid pilot before the next quarter close. Below that, the pain isn't worth software money — revisit.
