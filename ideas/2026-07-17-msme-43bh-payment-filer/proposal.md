---
title: "PaidBy45 — 43B(h) MSME-payment filer for Indian buyers"
slug: msme-43bh-payment-filer
date: 2026-07-17
category: Compliance / India
complexity: Medium
score: 75
verdict: GO
confidence: Medium
oneLiner: "Collects supplier declarations, tracks 45-day aging, and generates the 43B(h) and MSME-1 numbers before the audit."
tags:
  vertical: Compliance
  model: SaaS
  geography: India
  secondary: [Compliance-driven, SMB, Multilingual, AI-agent, Solo-builder]
axes:
  problem: 16
  demand: 12
  build: 12
  distribution: 12
  revenue: 12
  time: 7
  defensibility: 4
founderFit: [domain-expertise-required, technical-heavy]
featured: false
---

# PaidBy45 — 43B(h) MSME-payment filer for Indian buyers

## 1. One-liner

Collects supplier declarations, tracks 45-day payment aging, and generates the 43B(h) and MSME-1 numbers before the audit — for Indian companies that buy from micro and small vendors.

## 2. Trend signal — why now?

Section 43B(h) of the Income Tax Act (Finance Act 2023) went live 1 April 2024. It disallows — as a tax deduction — any expense to a Udyam-registered Micro or Small supplier that the buyer pays later than 15 days (no agreement) or 45 days (with agreement). Disallowed = added back to taxable income for that year. On top of that, Section 16 of the MSMED Act imposes compound interest at **three times the RBI bank rate (~20%+ p.a.)** on the delay. We are now in the **second year (AY 2025-26)**, and the Sept 30 2026 tax-audit deadline is the first time most buyers face a *real* Clause 22 / Clause 26 disallowance number in Form 3CD — CBDT revamped those clauses effective 28 March 2025.

Separately, every private limited, OPC, and public company that delayed an MSE payment past 45 days must file **Form MSME-1** with the MCA every six months. ~1.5M active companies sit in scope; an MCA report flagged **₹10,000cr+** of payments delayed past the legal window.

The whole thing runs on data buyers don't have cleanly: a classified vendor list (Micro/Small vs Medium vs trader-excluded) plus per-invoice aging. CAs are flooding the internet with "avoid disallowance before March 31" checklists and free Excel templates — a reliable tell that the pain is felt and unsolved.

Provenance:
  - Signal 1 (demand): MCA report — ₹10,000cr+ of MSE payments delayed past 45 days; ~1.5M active companies in MSME-1 scope; CAs publishing disallowance checklists en masse — https://www.casahuja.com/2025/08/section-43bh-and-msme-payments-law.html — 2026-07-17
  - Signal 2 (feasibility): Commodity Udyam-verification APIs now live at per-hit pricing (Attestr, Deepvue, SignalX, AuthBridge); PAN→classification lookup solved — https://docs.attestr.com/attestr-docs/pan-udyam-msme-status-api — 2026-07-17
  - Signal 3 (economic): Rule live since Apr 2024, 2nd year AY25-26, Sept 30 2026 tax-audit deadline; CBDT revamped Form 3CD Clauses 22/26 (28 Mar 2025); 20%+ p.a. interest exposure — https://calcguru.in/clause-22-of-form-3cd/ — 2026-07-17
  Category: Regulatory arbitrage

## 3. The opportunity

The lookup is a commodity. Attestr, Deepvue, SignalX and others will tell you a vendor's Udyam classification from a PAN for a few rupees. **The workflow is the gap.** To be safe under 43B(h), a buyer has to:

1. **Collect** a Udyam number + declaration from *every* supplier — most don't respond to the first email.
2. **Classify** each: Micro/Small (in scope), Medium (out), or trader-only Udyam (excluded from Section 15 even if micro/small).
3. **Watch for drift** — a supplier's classification flips Small→Medium when turnover crosses a threshold *mid-year*, and their status can lapse. A snapshot taken in April is wrong by March.
4. **Age every invoice** against the correct 15/45-day clock.
5. **Produce three deliverables**: the Clause 22/26 figures for Form 3CD, the half-yearly MSME-1 export for MCA, and an MSMED interest ledger — plus an audit trail showing *when* each classification was verified.

Today this is a CA doing it in Excel across a creditors ledger, chasing declarations by hand, with no proof-of-verification timestamp. Tally added aging and party-ledger tagging but does none of the outreach, drift monitoring, or filing generation. As CS Divesh Goyal put it plainly: *"there must be a government portal where one can enter a vendor's name or PAN and instantly confirm their MSME registration status. Unfortunately, no such public-facing verification portal currently exists."* An open-source feature request on the India Compliance (ERPNext) app asks for exactly this: *"allow businesses to generate MSME Form-1 compatible reports"* and *"Automatically flag transactions where payments exceed the allowed timeline"* — but only for ERPNext users, and it's a dev-heavy plugin.

Nobody sells the end-to-end packet to the mass of Tally/Excel SMBs and the CA firms that serve them.

## 4. Target market

- **Primary customer:** The CA / tax-audit practitioner and their SMB buyer-clients — Indian private limiteds and proprietorships with a tax audit under 44AB, buying from 50–500 vendors, running on Tally/Busy/Excel. Secondary: in-house finance heads at ₹50cr–₹500cr companies procuring heavily from MSE suppliers (manufacturing, trading, textiles, auto-ancillary).
- **Why they buy, in their words:** *"Managing these deadlines manually for hundreds of suppliers is impossible."* The CA is personally on the hook for a wrong Form 3CD Clause 22 number, and the buyer is on the hook for a real disallowance + 20% interest. Both feel it at year-end.
- **Rough TAM reasoning:** ~1.5M active companies in MSME-1 scope, plus a larger pool of non-corporate tax-audit cases. India has ~1.5 lakh practising CAs; even a few thousand firms each managing 20–100 clients is a multi-lakh-seat base. We don't need many.
- **Why now for them:** AY 2025-26 is the first audit cycle where the disallowance is a *populated line item* under revamped 3CD clauses, with a Sept 30 2026 deadline. Last year people fudged it. This year it's audited.

## 5. Product sketch (MVP)

- **Import** the creditors ledger + purchase register from Tally/Busy/Excel (upload or Tally connector).
- **Declaration collection agent** — auto-emails/WhatsApps every supplier a one-click form to submit their Udyam number + declaration; nudges non-responders on a schedule; logs who replied and when.
- **Auto-classify** each vendor via Udyam API: Micro/Small/Medium, active/lapsed, and manufacturer-vs-trader flag (trader-only Udyam is excluded from Section 15). Confidence-flag the ambiguous ones for the CA.
- **Classification-drift monitor** — re-verifies periodically and alerts when a supplier crosses Small→Medium or lapses, with the effective date.
- **Per-invoice aging clock** — 15/45-day windows, Day-30 buffer and Day-43 escalation alerts, live "at-risk disallowance ₹" tally.
- **One-click deliverables:** Clause 22 & Clause 26 (43B(h)) figures ready to paste into the 3CD utility; Form MSME-1 half-yearly export for MCA; MSMED-interest ledger.
- **Audit-trail pack** — timestamped proof of when each classification was verified and each declaration collected, so the CA can defend the number.
- **CA multi-client dashboard** — all clients' at-risk exposure and filing readiness on one screen.

## 6. AI angle — what's load-bearing

Remove the AI and this is a spreadsheet with an API. AI is load-bearing in three places:

1. **Ledger normalization** — Tally/Busy/Excel exports are messy: vendor names don't match Udyam records, PANs are missing, GSTINs are inconsistent, one supplier appears under three spellings. An LLM reconciles the dirty vendor master to canonical entities and infers PAN/GSTIN so the Udyam lookup actually resolves. This is the step that kills DIY.
2. **Trader-vs-manufacturer / scope inference** — reading the Udyam record + line-item descriptions to decide whether a micro/small vendor is actually *in scope* (manufacturers/service providers) or excluded (trader-only). Rules alone miss the edge cases; the CA reviews only the flagged ambiguous ones.
3. **Declaration extraction** — parsing the certificates and free-text replies suppliers send back (PDF, photo, WhatsApp text) into structured, verified records.

## 7. Localization angle

This *is* the localization play — it only exists because of an India-specific statute (43B(h) + MSMED Act + MCA MSME-1), Udyam registration, and the Tally/Busy accounting monoculture. Wedge specifics: ₹ pricing (a ₹1,499/mo tier works where a global tool's $49 can't), WhatsApp-first supplier outreach (email alone gets ignored by small vendors), multilingual declaration forms (Hindi/Gujarati/Tamil), and a Tally connector as the native data source. No global product touches this.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** Two-sided.
  - **CA/firm plan:** ₹9,999/mo per firm for up to 25 clients, ₹19,999/mo up to 75 (the CA resells time-savings to clients).
  - **Direct SMB plan:** ₹1,499/mo per company (mid-size), ₹4,999/mo for high-vendor-count enterprises.
  - Usage add-on: Udyam verification credits pass-through with margin.
- **ACV:** ~₹60K–₹1.2L for firms; ~₹18K–₹60K for direct SMBs. Blended ~₹45K ($540).
- **Rough math to $1M ARR (₹8.3cr):** ~1,850 blended customers at ₹45K — realistically ~600 CA firms (each covering 20+ clients) + 1,000 direct SMBs. Well inside the CA base.
- **Rough math to $5M ARR:** ~9,000 blended customers, or expand ACV by bundling adjacent India-tax compliance (TDS 194Q/206C reconciliation, GST 2B matching) into the same vendor-master spine — the same normalized data powers all of them.
- **Expansion path:** land on 43B(h) (the burning deadline), expand to MSME-1 filing, then the whole vendor-side tax stack. The reconciled vendor master is the compounding asset.

## 9. Go-to-market wedge — first 100 customers

- **CA channel, direct outreach:** ICAI has study circles and regional branches actively running 43B(h) sessions (e.g. the Gandhidham ICAI 43B(h) deck). Sponsor/present at 10–15 branch webinars in the July–Sept audit-season run-up; each puts 100–300 practitioners in the room the week they're doing this work. Target: 5–10 firm sign-ups per session.
- **Comment-mine the CAs already publishing:** CAclubindia, Taxguru, casahuja, LinkedIn tax creators post 43B(h) checklists that get hundreds of "how do I do this for 300 vendors?" comments. DM the authors (offer affiliate) and reply in threads with a free "MSME exposure calculator."
- **Free wedge tool:** a public "43B(h) disallowance estimator" — upload a creditors ledger, get your at-risk ₹ and interest number in 60 seconds. Gates the full declaration-collection + filing behind signup. This is the exact free-Excel job people are already searching for, but instant.
- **Tally partner ecosystem:** ~10,000 Tally implementation partners sell to exactly these SMBs; recruit 20–30 as resellers.

Target: 100 paying (mostly CA firms) inside the first audit season.

## 10. Build complexity — justification

Medium. Off-the-shelf: Udyam verification APIs, WhatsApp Business API for outreach, standard web stack, LLM APIs for parsing/normalization. Custom work: the Tally/Busy ledger connector and reliable dirty-vendor-master reconciliation (the hard 20%), the aging engine, and the two filing-format generators (3CD annexure + MSME-1 MCA export) which must be exactly right. A pair can ship a credible v1 in ~3–4 months; the accuracy-hardening of classification + filing formats is where the time goes.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Uses official Udyam data via licensed APIs; helps compliance, doesn't evade it. |
| Ethical — no harm / dark patterns | ✅ | Pro-compliance; helps MSEs get paid on time. No dark patterns. |
| Market exists (evidence above) | ✅ | Live statute, 1.5M companies in scope, CAs actively seeking tools. |
| 1–5 person team can build this | ✅ | Pair in 3–4 months. |
| Launchable with <$50K / ₹40L | ✅ | API + WhatsApp + LLM costs are usage-based; no upfront capex. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | Real money at year-end (disallowance + 20% interest) and the CA is personally liable for the 3CD number. Felt hard, but only acutely at audit season, not daily. |
| Demand evidence | 15 | 12/15 | Multiple independent signals: statute, ₹10,000cr delayed, CAs mass-publishing checklists, free tools proliferating, an OSS feature request. Direct "shut-up-and-take-my-money" quotes are thinner. |
| Build feasibility | 15 | 12/15 | Mostly off-the-shelf; Tally connector + dirty-data reconciliation + exact filing formats are the real work. |
| Distribution clarity | 15 | 12/15 | CA channel is concrete and time-boxed to audit season; free estimator wedge is well-matched to existing search intent. |
| Revenue mechanics | 15 | 12/15 | ₹ pricing works, CA reseller model multiplies ACV. Churn risk after audit season is the open question. |
| Time to first revenue | 10 | 7/10 | Free tool → paid can convert in weeks, but the big spike is seasonal (Aug–Sept audit crunch). |
| Defensibility | 10 | 4/10 | Lookup is commodity; moat is the reconciled vendor master + CA relationships + filing-format accuracy. Copyable, but a season's head start + CA lock-in helps. |
| **Total** | **100** | **75/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`domain-expertise-required` (Indian income-tax + MSMED + MCA filing rules must be exactly right — a CA co-founder or advisor is close to mandatory) · `technical-heavy` (Tally connector + dirty-data reconciliation).

### Key assumptions to validate (3–5)

1. **Assumption:** CAs will pay a subscription rather than keep using free Excel + a ₹5/hit lookup API. **How to test:** put the paid declaration-collection + filing generator in front of 30 practising CAs at 3 ICAI branch sessions; count how many sign a paid pilot before Sept 30 2026.
2. **Assumption:** Retention survives the seasonal spike — buyers keep paying between audit seasons for MSME-1 (half-yearly) + live aging alerts. **How to test:** track whether pilot firms keep the subscription active Oct–Dec after the Sept audit rush.
3. **Assumption:** The Tally/Busy ledger export can be reconciled to Udyam records accurately enough to trust the number. **How to test:** run 20 real client ledgers end-to-end; measure % of vendors auto-resolved without manual CA correction (target >80%).
4. **Assumption:** Suppliers actually respond to WhatsApp/email declaration requests at a workable rate. **How to test:** run the outreach agent on 5 real vendor bases; measure response rate after 2 nudges.

### Risk flags

1. **Platform dependency:** Reliant on third-party Udyam APIs and WhatsApp Business API — a pricing or access change hits margins. Mitigate with multi-provider abstraction.
2. **Market timing / seasonality:** Demand spikes around the Sept 30 audit deadline and MSME-1 half-year dates; revenue may be lumpy and churn high off-season. The MSME-1 half-yearly cadence + live alerts are the retention hooks — must land them.
3. **Incumbent absorption:** Tally or ClearTax could ship "43B(h) + MSME-1, one click" and blunt the wedge fast, since they already own the ledger. Speed and CA-firm relationships are the only defense.
4. **Regulatory drift:** Filing formats (3CD clauses, MSME-1 schema) change by notification; the product must track CBDT/MCA changes or it ships wrong numbers — this is also part of the moat.

## 14. Structured verdict

```
Score:                  75/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder + practising-CA co-founder/advisor
Time to revenue:        6–10 weeks (free estimator → paid pilot in audit season)
Capital to launch:      ₹4–8 lakh ($5–10K) — API + WhatsApp + LLM usage, no capex
Top 3 assumptions to validate first:
  1. CAs pay a subscription vs. free Excel + cheap lookup — test with 30 practitioners at ICAI branch sessions
  2. Retention survives seasonality — track pilot renewals Oct–Dec after the Sept crunch
  3. Dirty Tally ledgers reconcile to Udyam >80% auto — run 20 real client ledgers end-to-end
Kill criteria:
  - Abandon if <10% of 50 CA-firm demos convert to a paid pilot before Sept 30 2026
  - Abandon if <60% of vendors auto-reconcile on real ledgers (manual burden kills the value prop)
  - Abandon if off-season (Oct–Dec) churn exceeds 40% and MSME-1/alerts don't hold retention
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Build the free "43B(h) disallowance estimator" — upload a creditors ledger, return at-risk ₹ + MSMED interest. Ship it as a landing page.
- **Day 3–4:** Take it to 3 ICAI branch WhatsApp groups / study circles and 20 tax-creator threads. Offer 10 CAs a hands-on session with their real client ledger.
- **Day 5:** Decide go/no-go on a **falsifiable** bar: **≥5 of 10 CAs say "I'd pay for the declaration-collection + one-click 3CD/MSME-1 version" and ≥3 commit to a paid pilot before the audit deadline.** Under that, the free tool is a feature, not a company — reshape or pass.
