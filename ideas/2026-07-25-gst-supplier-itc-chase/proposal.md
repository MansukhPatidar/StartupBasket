---
title: "CreditChase — supplier ITC-recovery chaser for GST SMBs"
slug: gst-supplier-itc-chase
date: 2026-07-25
category: Compliance / India — GST-Registered SMBs Losing Input Tax Credit to Delinquent Suppliers
complexity: Medium
score: 76
verdict: GO
confidence: Medium
oneLiner: "Hunts down suppliers who haven't filed your GST invoices and recovers the input-tax credit before it expires."
tags:
  vertical: Compliance
  model: SaaS
  geography: India
  secondary: [WhatsApp-first, AI-agent, Compliance-driven, SMB, Multilingual, UPI-native]
axes:
  problem: 16
  demand: 12
  build: 11
  distribution: 12
  revenue: 12
  time: 8
  defensibility: 5
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# CreditChase

## 1. One-liner

Hunts down suppliers who haven't filed your GST invoices and recovers the input-tax credit before it expires.

## 2. Trend signal — why now?

Three things happened at once in India's GST regime, all landing in 2026:

1. **IMS became mandatory (April 2026).** Every GST-registered business now has an Invoice Management System dashboard where each supplier invoice must be Accepted, Rejected, or left Pending. Do nothing and it's "deemed accepted" — you silently claim ITC on invoices you never checked.
2. **The Zero-Mismatch hard-lock (April 2026).** GSTR-3B now refuses to let you claim more ITC than what sits in your GSTR-2B. If a supplier hasn't filed their GSTR-1, that invoice never reaches your 2B — so you legally cannot claim the credit, no matter that you hold a valid tax invoice and paid the tax.
3. **A hard expiry cliff.** ITC on a missing invoice can be claimed only up to 30 November following the financial year. Miss it and the money is gone forever, plus 18% interest if you claimed it wrongly and have to reverse.

The incumbents' own advice, verbatim from CA-club and tax-firm articles: *"You need to monitor supplier compliance weekly, not just at month-end"* and *"pursue the supplier in writing to file GSTR-1."* That's a recurring, deadline-driven chase job that nobody has automated.

Provenance:
  - Signal 1 (demand): CA-club 2026 ITC-protection playbook — buyers must "monitor supplier compliance weekly" and "pursue the supplier in writing to file GSTR-1"; permanent ITC loss past 30 Nov — https://www.caclubindia.com/articles/invoice-not-reflecting-in-gstr2b-what-action-should-the-buyer-take-to-protect-itc-55759.asp — 2026-07-25
  - Signal 2 (feasibility): IMS mandatory + Zero-Mismatch hard-lock live April 2026; "Communication Between Taxpayers" facility exists on the portal for supplier follow-up — https://taxgarden.in/blog/ims-invoice-management-system-mandatory-gst-2026 — 2026-07-25
  - Signal 3 (economic): ClearTax/Tally shipping paid IMS reconciliation modules at ₹10–25K/yr aimed at CAs and larger firms — money moving, but SMB tier under-served — https://www.techjockey.com/detail/cleartax-gst-software — 2026-07-25
  Category: Regulatory arbitrage

## 3. The opportunity

The reconciliation-software incumbents (ClearTax, Tally, GimBooks, IRIS) all solve the *same half* of the problem: they match your purchase register against GSTR-2B and hand you a **list of mismatches**. Then they stop. "Here are the 40 invoices your suppliers haven't filed — good luck."

The actual work — the part that recovers real rupees — is everything *after* the list:

- Figuring out *which* supplier is responsible for each missing invoice.
- Reaching that supplier on the channel they actually read (WhatsApp, not the portal's dead "Communication Between Taxpayers" inbox).
- Sending a follow-up that is polite enough to preserve the relationship but specific enough to act on ("GSTIN X, invoice #1234, ₹18,400 GST, please file your GSTR-1 for June before 20 July").
- Escalating on a schedule, and counting down to the 30 November cliff per invoice.

That is a **dunning problem dressed as a compliance problem** — and dunning is a solved playbook (Stripe, Chargebee do it for failed payments). Nobody has pointed it at delinquent GST suppliers. The incumbent detects; CreditChase collects. A focused AI-first team can own the collect step 10× better because the incumbents' business model is CA-firm reconciliation, not SMB-owner recovery.

## 4. Target market

- **Primary customer:** Owner or accounts person at a GST-registered SMB with ₹40L–₹15Cr turnover — think a distributor, small manufacturer, agency, or trading firm that buys from 20–200 suppliers a month and has meaningful ITC to lose (₹50K–₹5L/month). Not the pure-service micro-business with negligible input credit.
- **Why they buy:** ITC is cash. A distributor running 3% net margins who loses ₹1.5L of ITC in a quarter because two suppliers filed late has just lost the profit on a big chunk of sales. They feel it directly and immediately. Their current "system" is a junior staffer calling suppliers, or their CA flagging it at month-end when it's often too late.
- **Rough TAM reasoning:** ~14M active GSTIN filers in India; a large minority are B2B buyers with material ITC. Even 1–2M businesses in the "enough ITC to care, too small for a ClearTax CA seat" band is a deep pool. We need a few thousand paying to hit target ARR.
- **Why now for them:** Before April 2026, a missing invoice was a soft problem — you could often still claim on the strength of the invoice. Post hard-lock, missing = blocked, full stop. The regulation converted a nag into a cash leak with a countdown.

## 5. Product sketch (MVP)

- **Connect once:** link the business's GSTN (via a GSP/API consent flow) and, optionally, their Tally/Zoho/Excel purchase register.
- **Auto-detect the gap:** every cycle, diff the purchase register against GSTR-2B/IMS and surface exactly which invoices are missing, pending, or mismatched — and name the responsible supplier and GSTIN.
- **One-tap chase:** for each delinquent supplier, CreditChase drafts a WhatsApp message (in Hindi/English/regional language) with the precise invoice, tax amount, and filing deadline, and sends it from the business's own WhatsApp Business number.
- **Escalation ladder:** auto-follow-ups on a schedule (gentle → firm → "we may withhold future payment / this invoice expires on 30 Nov").
- **Cliff countdown:** a live per-invoice timer to the 30 November ITC-loss deadline; red alerts on invoices about to expire.
- **Recovery ledger:** a running tally of ITC recovered vs. at-risk vs. lost — the number the owner screenshots to justify the subscription.
- **Deemed-accept guard:** flags invoices about to auto-accept in IMS that look duplicate, inflated, or from a suspicious GSTIN, so you don't silently claim bad credit.

## 6. AI angle — what's load-bearing

Two places AI does real work, not decoration:

1. **Message generation at scale, per supplier, per language.** A distributor chasing 40 suppliers doesn't want to write 40 messages. The AI turns structured invoice data into a supplier-appropriate, relationship-preserving follow-up in the supplier's likely language and register — and adapts tone across the escalation ladder. Templates alone break on the Hinglish + regional-language reality and the "don't burn the vendor" nuance.
2. **Fuzzy invoice matching + anomaly detection.** Purchase registers are messy (typo'd GSTINs, rounded amounts, different invoice-number formats). Matching them to 2B and spotting the duplicate/inflated/suspicious ones is exactly the many-to-many fuzzy-match problem where an LLM-assisted engine beats brittle rules.

Remove the AI and you're back to a spreadsheet and a junior staffer typing WhatsApp messages by hand — which is the status quo we're replacing.

## 7. Localization angle

This is India-native by construction, not a localized global product:

- **Language:** supplier follow-ups in Hindi, Hinglish, Tamil, Gujarati, Marathi, Bengali — matching how Indian SMBs actually message each other.
- **Channel:** WhatsApp Business is *the* B2B channel in India; the portal's official "Communication Between Taxpayers" facility is a ghost town suppliers ignore.
- **Pricing:** a ₹499–₹999/mo tier works where a $49 global-SaaS price would be dead on arrival.
- **Regulation is the whole product.** IMS, GSTR-2B, the 30-Nov cliff, the 18% reversal interest — none of this exists outside India. That's the moat and the reason a global player won't casually enter.

A generic global "AP automation" tool cannot do this. `N/A for other geographies` — the wedge *is* the Indian GST mechanics.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** ₹749/mo (₹8,988/yr) base for SMBs; ₹1,999/mo "pro" tier for higher supplier counts + priority WhatsApp templates. Optionally a success-fee experiment (₹X per ₹100 of ITC recovered) once trust is established.
- **ACV:** ~₹9,000–₹12,000 (~$110–$145) blended.
- **Rough math to $1M ARR (~₹8.3Cr):** ~7,500 customers × ₹11,000/yr ≈ ₹8.25Cr. In a pool of 1M+ addressable buyers, that's <1% penetration.
- **Rough math to $5M ARR:** ~₹41Cr. Needs ~35,000 SMBs on the base tier *or* a meaningful share moving to the ₹1,999 pro tier *plus* a CA/tax-practitioner channel selling CreditChase to their entire client book (one CA firm = 50–300 GSTINs).
- **Expansion path:** per-GSTIN add-ons for multi-branch businesses; a "CA console" seat that lets a practitioner run chases across all their clients; upsell to full IMS accept/reject automation.

## 9. Go-to-market wedge — first 100 customers

- **CA/tax-practitioner channel (primary).** CAs are drowning in this exact chase during filing season. Recruit 15–20 small CA firms; give them a console to run CreditChase across their client book and a revenue share. One firm onboards 30–100 GSTINs. This alone can clear the first few hundred customers.
- **The 30-Nov panic window.** Run targeted campaigns Sep–Nov each year, when businesses realize invoices are about to expire. "You have ₹X of ITC expiring in 22 days" is the highest-intent hook in the calendar.
- **Vertical WhatsApp/Telegram groups.** Distributor and trader associations (pharma distributors, electronics, textiles) run active WhatsApp groups. Seed there with a free "how much ITC are you about to lose?" audit tool that reads their GSTR-2B and outputs a number.
- **Free ITC-leak audit as the top of funnel.** A one-time connect-and-scan that shows "₹1.4L at risk across 11 suppliers" — the report *is* the sales pitch, conversion to paid is the fix-it button.
- **Content on GST-notice/ITC keywords.** Secondary, slow — but the search intent ("supplier didn't file GSTR-1 what to do") is real and specific.

## 10. Build complexity — justification

Medium. The purchase-register diff, WhatsApp Business API integration, escalation scheduler, and LLM message-drafting are all off-the-shelf. The genuinely non-trivial parts are (a) the GSTN data pull — you need a GSP/API partnership or the user's portal-credential/consent flow, which is a known-but-real integration, and (b) robust fuzzy matching against messy purchase registers. A 2–3 person team ships a credible v1 in ~3–4 months; the GSP integration and matching quality are the schedule risk, not the UI.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Follow-up messaging + reconciliation is legal; must respect WhatsApp Business policy and DPDP consent for GSTN data. |
| Ethical — no harm / dark patterns | ✅ | Recovers money the user is legally owed; escalation must stay non-abusive (relationship-preserving by design). |
| Market exists (evidence above) | ✅ | Forced by regulation April 2026; incumbents charging for the adjacent half. |
| 1–5 person team can build this | ✅ | 2–3 people, ~3–4 months. |
| Launchable with <$50K / ₹40L | ✅ | GSP tie-up + WhatsApp API + LLM credits; well under budget. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | Real cash loss with a hard deadline and 18% interest downside. Just short of hair-on-fire because ITC-poor businesses don't feel it. |
| Demand evidence | 15 | 12/15 | Strong regulatory forcing + incumbents charging for adjacent tooling + explicit expert advice to "chase weekly." Docked for no verbatim owner quotes surfaced yet — validate in the sprint. |
| Build feasibility | 15 | 11/15 | Mostly off-the-shelf; GSP data-pull and fuzzy matching are the real work. |
| Distribution clarity | 15 | 12/15 | CA channel + Sep–Nov panic window + free-audit hook are concrete and high-intent. |
| Revenue mechanics | 15 | 12/15 | Pricing benchmarked below incumbents; ACV realistic; CA channel makes the customer count reachable. |
| Time to first revenue | 10 | 8/10 | Free audit → paid fix is a fast funnel; a design partner CA firm can pay within weeks. |
| Defensibility | 10 | 5/10 | Regulatory + workflow knowledge and CA relationships are a soft moat; incumbents could bolt on chasing. Speed and channel lock-in matter more than any tech moat. |
| **Total** | **100** | **76/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` (GSP integration, fuzzy matching, WhatsApp API) · `domain-expertise-required` (GST/ITC mechanics; a CA co-founder or close advisor is close to mandatory).

### Key assumptions to validate (3–5)

1. **Assumption:** SMB owners will pay ₹749–999/mo to recover ITC they're currently losing. **How to test:** run the free ITC-leak audit for 30 businesses, show the at-risk number, and pre-sell the fix-it subscription. Target ≥15% convert.
2. **Assumption:** A reliable GSTN data-pull path (GSP/API/consent) is obtainable by a small team at acceptable cost. **How to test:** get a signed/priced GSP sandbox agreement before writing product code.
3. **Assumption:** CA firms will resell/deploy this across their client books for a revenue share. **How to test:** pitch 10 small CA firms; land ≥3 who commit to onboarding 20+ GSTINs.
4. **Assumption:** WhatsApp-sent supplier chases actually move suppliers to file (vs. being ignored). **How to test:** run 200 real chases in a pilot; measure filing-within-10-days rate vs. a no-chase control.

### Risk flags

1. **Platform dependency (GSTN + WhatsApp):** the whole product rides two platforms you don't control. GSTN could change API access terms; WhatsApp could restrict business-messaging templates. Both are live risks.
2. **Incumbent bolt-on:** ClearTax/Tally already have the reconciliation half; adding a "chase supplier" button is not hard for them. The defense is the SMB-owner (not CA) positioning, the WhatsApp-native channel, and the CA-reseller relationships — move fast.
3. **Regulatory whiplash:** GST rules change constantly. A rule tweak (e.g. relaxing the hard-lock, or extending the cliff) could soften the pain. Conversely, tightening deepens the moat — asymmetric, but watch it.
4. **Seasonality:** demand spikes Sep–Nov and around monthly deadlines; retention between peaks must be earned with year-round value (the deemed-accept guard, monthly recovery ledger).

## 14. Structured verdict

```
Score:                  76/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder + CA co-founder/advisor; India-based
Time to revenue:        6–10 weeks (design-partner CA firm)
Capital to launch:      ₹8–15 lakh ($10–18K) — GSP tie-up, WhatsApp API, LLM credits
Top 3 assumptions to validate first:
  1. SMB willingness to pay ₹749–999/mo — free-audit → pre-sell to 30 businesses, ≥15% convert
  2. GSP/GSTN data-pull is obtainable affordably — signed sandbox agreement before build
  3. CA firms will resell across client books — land ≥3 firms committing 20+ GSTINs each
Kill criteria:
  - Abandon if <10% of 30 free-audit businesses convert to a paid pilot
  - Abandon if no viable GSTN data-pull path lands within 60 days at acceptable cost
  - Abandon if piloted WhatsApp chases move <20% of delinquent suppliers to file within 10 days
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Build the free "ITC-leak audit" as a manual concierge — take a business's GSTR-2B + purchase register (Excel), hand-reconcile, and produce a one-page "₹X at risk across N suppliers, expiring on 30 Nov" report. No product yet.
- **Day 3–4:** Run that audit for 15–20 real SMBs sourced from 2–3 CA firms and a distributor WhatsApp group. Record their reaction to the at-risk number and whether they'd pay ₹749/mo to have it chased automatically.
- **Day 5:** Decide go/no-go. **Falsifiable bar:** ≥15% of audited businesses verbally pre-commit to a paid pilot AND ≥2 CA firms agree to onboard 20+ GSTINs. Below that, the pain isn't monetizable at this price — revisit.
