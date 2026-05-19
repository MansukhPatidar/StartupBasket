---
title: "EngageProof — reasonableness dossier for AU small employers"
slug: au-contractor-classification-dossier
date: 2026-05-20
category: Compliance / Australia-SMB
complexity: Low
score: 75
verdict: GO
confidence: Medium
oneLiner: Locks in a timestamped reasonableness memo and contractor agreement each time an AU employer engages an ABN worker.
tags:
  vertical: Compliance
  model: SaaS
  geography: Global
  secondary: [SMB, Compliance-driven, AI-agent, Solo-builder]
axes:
  problem: 16
  demand: 12
  build: 13
  distribution: 11
  revenue: 11
  time: 8
  defensibility: 4
founderFit: [domain-expertise-required, sales-heavy]
featured: false
---

# EngageProof

## 1. One-liner

Locks in a timestamped reasonableness memo and contractor agreement each time an AU employer engages an ABN worker.

## 2. Trend signal — why now?

Three things just changed in Australian workplace law and they cascade straight into a documented-belief gap:

- **"Real substance" test is law.** The Fair Work Legislation Amendment (Closing Loopholes No. 2) Act 2024 inserted a new statutory definition of "employee" and "employer" into the Fair Work Act from 26 August 2024. Courts must now look at the "real substance, practical reality and true nature of the relationship" — the written contract is no longer king the way it was after *Personnel Contracting* and *Jamsek*.
- **The sham-contracting defence got harder.** Section 357's defence flipped from the old subjective "didn't know / wasn't reckless" test to an **objective "reasonably believed"** test. Employers must now affirmatively prove their belief was reasonable *at the time of the representation* — which means they need contemporaneous, auditable reasoning, not a contract drafted years ago.
- **Wage theft went criminal Jan 2025.** Intentional underpayment of wages or super is now a criminal offence carrying up to 10 years' imprisonment. Civil penalties under FW Act: up to **$99,000 per breach** for <15-employee businesses, **$469,500+** for ≥15, and each pay period is a separate contravention. The ATO and FWO publicly announced a joint sham-contracting clampdown in March 2026.

Plus a market opening: Employsure (now Peninsula AU) — the dominant 30K-customer HR-in-a-box incumbent — was hauled into court by the ACCC for misleading advertising and unconscionable conduct. Brand damage. Customers actively looking for an alternative that isn't a high-pressure 24-month phone-sales contract.

Provenance:
  - Signal 1 (Regulatory): "Reasonably believed" defence in s.357, plus statutory "real substance" definition active Aug 2024 — https://kingstonreid.com/insights-news/the-proposed-sham-contracting-defence-i-didnt-know-may-no-longer-suffice/ — 2024
  - Signal 2 (Demand/Enforcement): FWO + ATO joint clampdown March 2026, criminal wage theft from Jan 2025, $99K–$469.5K per-breach civil — https://www.fairwork.gov.au/newsroom/media-releases/2026-media-releases/march-2026/20260313-sham-contracting-media-release — 2026-03-13
  - Signal 3 (Economic/Incumbent weakness): Peninsula/Employsure customer pushback + ACCC action over misleading conduct, ~30,500 SMB customers on long contracts — https://www.accc.gov.au/media-release/employsure-in-court-over-misleading-advertising-and-unconscionable-conduct-allegations — 2020 (lasting brand damage cited in 2026 reviews)
  Category: Regulatory arbitrage

## 3. The opportunity

A regulatory shift just made the *evidence* of a classification call legally load-bearing — and nobody has built the workflow for it.

Today the AU SMB owner-operator has three choices when she puts a new ABN tradie or freelance contractor on the books:

1. **Lawyer ($1.5K–$5K per contract):** Generates a custom agreement, but no factor-by-factor reasonableness memo and no refresh when the role drifts.
2. **Peninsula / Employsure ($300–$700/mo on 24-month contracts):** General HR helpline. Good for award queries, bad for *this specific engagement, today*, with a documented memo.
3. **Generic Xero/MYOB + a template off the internet:** Cheap, zero defence value.

What's missing is a tool that, at the moment of engagement, walks the employer through the multi-factor "real substance" test for *this* worker, captures her honest answers, flags the risk, generates an aligned written agreement, and freezes a timestamped reasonableness memo she can hand to the FWO three years later. Re-runs annually or when the role changes.

AI is load-bearing because the "multi-factor" test isn't a checklist — it's a weighted judgement across control, integration, tools, payment basis, exclusivity, ability to delegate, business risk, hours, attire, and more. An LLM grounded on FWO and ATO guidance can run the assessment, score it, and produce the memo in 10 minutes. A human paralegal takes a day and charges $800.

## 4. Target market

- **Primary customer:** Owner-operators of Australian trade, services, and small-agency businesses with 3–25 active contractors. Trades (building, plumbing, electrical, civil, painting), commercial cleaning, security, allied health practices, creative/IT consultancies, marketing agencies, NDIS support coordinators, RTOs. Revenue $500K–$10M. Already engaging some mix of W2 + ABN workers.
- **Why they buy:** The penalty is now criminal. The owner cannot personally absorb a 10-year jail risk or $99K-per-worker civil exposure. She knows her three "subbies" are a grey area, and a Peninsula contract for $400/mo doesn't give her the *one document* the FWO will ask for: a contemporaneous reasonableness memo. She wants a defence she can actually wave around.
- **Rough TAM reasoning:** ABS counts ~2.5M actively trading businesses in Australia. About 1.4M have 1–19 employees. Of those, FWO sham-contracting industry focus (construction, transport, cleaning, IT, gig) covers a usable subset of ~250K–400K businesses. Even 1% penetration = 2.5K–4K customers at $99–249/mo = $3M–12M ARR. Comfortably inside the $5M bootstrap target without straining for it.
- **Why now for them:** The reasonableness defence flipped < 24 months ago. Most SMBs still don't know it. The first wave of FWO test cases under the new s.357 lands in 2026–27. By the time the headline-grabbing case hits the news, the question "what does your engagement memo look like?" becomes a Monday-morning panic.

## 5. Product sketch (MVP)

- **Engagement Interview:** 10-minute web flow that asks the owner about *this specific worker* across the multi-factor test (control, integration, exclusivity, tools, delegation, basis of payment, hours, financial risk, business of the worker). Plain-English questions, no jargon.
- **Risk Score + Verdict:** Real-time risk colour-code (Likely Contractor / Borderline / Likely Employee) with the specific factors driving the verdict. Honest — if the picture screams employee, it says so.
- **Reasonableness Memo:** Auto-drafted, timestamped, signed-by-owner PDF stating "as of today, here is what I knew about this worker and why I reasonably believed they were an independent contractor." Cites the specific FWO/ATO guidance.
- **Aligned Contractor Agreement:** A contractor agreement generated *from* the memo — so the contract and the memo can't contradict each other. Australian-law specific; includes the s.15AB opt-out clause for workers above the $183,100 high-income threshold where applicable.
- **Annual Refresh & Role-Drift Alerts:** Re-prompts owner each year and whenever pay basis, hours, or scope materially change. Captures a new memo. Old memos archived immutable.
- **FWO Demand-Letter Mode:** If the FWO writes, owner clicks one button to bundle every memo, agreement, and amendment for that worker into a single dossier ready to send to her lawyer.
- **Super-on-Labour-Contracts Flag:** Detects the s.12(3) "wholly or principally for labour" trap where super must be paid even for genuine contractors.
- **Multi-worker register:** A live list of all engagements, who's overdue for refresh, whose risk has drifted.

## 6. AI angle — what's load-bearing

The multi-factor test is the AI work. It's not a 10-question checklist with binary answers — it's a weighted, often-contradictory judgement that needs the model to:

- Translate the owner's plain-English answers into factor scores
- Surface tensions ("you said the worker uses your tools and works only for you, but you marked them low-risk — here's why that won't fly")
- Generate the reasonableness memo in the legalese FWO actually expects, citing the right cases
- Draft the contractor agreement clauses *consistent with* the memo answers

Strip the AI out and you have a checklist — i.e. exactly what every HR consultant already gives away as a freebie. AI is the difference between "checklist" and "defendable document".

Models are commodity (Claude/GPT-class). The moat is the Australia-specific prompt scaffold, FWO/ATO/case-law grounding, and the document templates a lawyer would sign off on.

## 7. Localization angle (if any)

Australia-first by definition — the entire wedge is the AU statutory test, FWO/ATO enforcement, and the AU sham-contracting defence. NZ is a natural second step (90 Day Trial, IRD contractor rules — same shape, different content). UK is a third with its IR35 mess, but a different product. Don't dilute v1 by chasing global.

Local quirks to exploit:

- AU lingo ("subbie", "ABN", "BAS", "super") — adopt it directly in copy.
- Industry award awareness — surface the relevant Modern Award when a worker tips into employee territory.
- ABN Lookup integration (free Govt API) — autofill worker details from ABN.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:**
  - **Starter** $99/mo — up to 5 active engagements, unlimited memos, register, alerts.
  - **Trade** $199/mo — up to 25 engagements, FWO demand-letter mode, super-on-labour flagging.
  - **Agency** $399/mo — up to 75 engagements, multi-entity, white-label lawyer hand-off.
- **ACV:** Realistic blended $2,000–$2,800/yr after mix and discounts.
- **$1M ARR math:** ~420 paid customers at $200 blended monthly. Achievable in 12–18 months from a focused trade-vertical campaign.
- **$5M ARR math:** ~2,100 customers. Implies ~0.6% penetration of the addressable AU SMB-with-contractors base. Feasible without paid scale, harder without channel partners.
- **Expansion path:** Per-engagement metered overage; add-on lawyer-on-call ($149 per FWO event); white-label seat for accountants/bookkeepers who serve trade clients; super-guarantee charge calculator; payroll-tax cross-check.

## 9. Go-to-market wedge — first 100 customers

This is where most AU compliance plays die. Plan:

- **Bookkeepers as channel partners.** AU has ~12,000 BAS agents. Many work with trade clients and absolutely fear a misclassification fallout dragging them in. Cold-DM the 500 most-active on LinkedIn with a tailored Loom of EngageProof running on a fake-tradie case. Offer 30% rev-share on accounts they bring. Target: 30 partners → 50 paying clients in 90 days.
- **r/AusFinance, r/AusSmallBusiness, /r/AustralianTradies.** Post a free "AU Contractor vs Employee Risk Audit" — single-page output with risk score and one-paragraph memo preview, gated behind email. Expect 200–500 emails / month from organic posts.
- **Cold call the FWO investigation list industries.** Construction, transport, cleaning, IT, gig — FWO has publicly named these as priority. Scrape AU business directories (yellowpages.com.au, hipages tradie listings), filter to 5–25 staff size, send a five-line cold email referencing the criminal-wage-theft change and offering a free 15-min screen. 2% reply on 3,000 emails = 60 first calls.
- **Co-marketing with one mid-size law firm.** Many AU mid-tier employment firms cannot afford to discount a single new-client memo. Offer them a free white-label seat in exchange for an explainer blog post and a referral link. Trade access for credibility.
- **Webinar with an industry association.** Master Builders Australia, ACA (Australian Cleaning Association), AHRI all run "compliance update" webinar series. Sponsor or co-host one in early 2026 timed to the FWO's next test-case headline.

## 10. Build complexity — justification

**Low–Medium.** The core MVP is a guided web form + LLM with a grounded prompt corpus + PDF templating + Stripe billing + simple admin. Standard SaaS stack, no novel ML, no fancy infra. A solo founder ships v1 in 6–8 weeks. The remaining work is content — getting the prompt scaffold, the memo templates, and the agreement clauses signed off by an actual AU employment lawyer. Budget ~$5K for the legal review and another $3K for the prompt corpus. Total v1: $15–25K + 8–10 weeks.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Not legal advice; "decision-support tool". Standard "consult your lawyer" disclaimers. Have an AU lawyer review boilerplate. |
| Ethical — no harm / dark patterns | ✅ | Helps employers comply with worker-protection law. The honest verdict ("you're treating this person as an employee") is the *point*. |
| Market exists (evidence above) | ✅ | Three regulatory shifts + active FWO/ATO enforcement + incumbent ($30.5K-customer Peninsula) brand damage. |
| 1–5 person team can build this | ✅ | Solo + lawyer-on-retainer ships in 8 weeks. |
| Launchable with <$50K / ₹40L | ✅ | ~$20K all-in including legal review, templating, infra Yr 1. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | Criminal exposure, $99K–$469.5K civil per-breach, multiplied across pay periods. Felt every time an SMB owner engages a new ABN worker. Pain is real but not weekly — pulses on hiring events and audit news cycles. |
| Demand evidence | 15 | 12/15 | Statutory change is concrete, FWO/ATO clampdown publicly announced March 2026, Peninsula's $30K-customer base shows category willingness-to-pay. Direct verbatim quotes thin — need primary discovery to push to 14. |
| Build feasibility | 15 | 13/15 | Web app + LLM + PDF + Stripe. The lawyer-grounded prompt corpus is the real work. |
| Distribution clarity | 15 | 11/15 | Bookkeeper channel is concrete; industry-vertical cold outreach is plausible; webinars with associations need a relationship. Not a content-marketing prayer. |
| Revenue mechanics | 15 | 11/15 | $99–$399/mo benchmarked against Peninsula. ACV in the right band. Churn risk medium — owner may treat it as one-time "buy when I hire" — counter with annual refresh and alerts. |
| Time to first revenue | 10 | 8/10 | Stripe live week 8. First paid customer from a partner-bookkeeper inside 12 weeks plausible. |
| Defensibility | 10 | 4/10 | Execution-only moat. AU-specific prompt corpus + lawyer relationships compound but copyable. Channel partners and bookkeeper-rev-share are the real lock-in. |
| **Total** | **100** | **75/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`domain-expertise-required` (need real AU employment-law fluency or an embedded lawyer co-founder/advisor) · `sales-heavy` (channel-led, not viral)

### Key assumptions to validate (3–5)

1. **Assumption:** Owner-operators of 3–25-person AU trade/service businesses will pay $99–$249/mo for a defensible engagement-time memo. **How to test:** 30 founder-led discovery calls with FWO-priority industry SMBs in Sydney/Melbourne. Floor: 8 of 30 say "I'd pay $99/mo this week."
2. **Assumption:** BAS agents and bookkeepers will channel-partner at 30% rev-share. **How to test:** Pitch 20 active BAS-agent communities (Facebook groups + Institute of Certified Bookkeepers); 3+ verbal commitments in two weeks.
3. **Assumption:** The reasonableness memo, drafted by an LLM with a grounded prompt corpus, holds up to a real AU employment lawyer's read. **How to test:** Pay two AU employment partners for one-hour reviews of five generated memos. Target: ≥4/5 they would sign off on as "reasonable contemporaneous reasoning". Below 4 = product not ready.
4. **Assumption:** AU SMBs are not already getting this from Xero / Employment Hero / Peninsula / Sleek. **How to test:** Customer interviews + competitor product walkthroughs. Confirm absence.
5. **Assumption:** The category is recurring-revenue, not one-time. **How to test:** During discovery, ask "would you pay $99/mo for monitoring + refresh, or $299 once-off per engagement?" If >60% pick once-off, model has to flex.

### Risk flags

1. **Regulatory drift:** A future FW Act amendment could narrow or expand the s.15AB opt-out, the high-income threshold, or the s.357 defence wording. Product must track legislative change — newsletter / changelog is part of the deal.
2. **Lawyer risk:** Drafting agreements without an AU lawyer on the hook is unauthorised legal practice in some states. v1 must clearly position as decision-support with a lawyer hand-off, not legal advice.
3. **Incumbent counter-move:** Peninsula/Employsure has 300+ advisors and 30.5K customers. If they ship an engagement-memo workflow inside their platform, customer-acquisition cost rises sharply. Counter-move: own the trade-vertical bookkeeper channel they don't reach.
4. **Owner-buyer apathy:** SMB owners are famously slow to adopt anything not bookkeeper-mandated. Mitigation: lead with the bookkeeper channel from day one rather than direct-to-owner.

## 14. Structured verdict

```
Score:                  75/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder + AU employment-law advisor on a 5–10% equity slice
Time to revenue:        10–14 weeks (channel-led)
Capital to launch:      AUD $25–35K (≈$17–23K USD)
Top 3 assumptions to validate first:
  1. 8/30 trade-vertical SMBs say "I'd pay $99/mo this week"
  2. Two AU employment partners sign off 4/5 sample memos as "reasonable contemporaneous reasoning"
  3. 3/20 BAS-agent communities verbally commit to channel-partner at 30% rev-share
Kill criteria:
  - Abandon if <6 of 30 discovery SMBs convert to paid within 90 days
  - Abandon if reviewing AU employment partners reject ≥3 of 5 sample memos
  - Abandon if Peninsula/Employment Hero ships an engagement-memo workflow before v1 GA
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Scrape 200 AU trade/cleaning/IT SMBs from hipages + yellowpages. Build a Notion landing page (no product, just a clear value prop, three pricing tiers, and a Calendly). Cold-email 100 with a 4-line message referencing the criminal wage-theft change and offering a free 15-min "engagement audit".
- **Day 3–4:** Run as many of the booked calls as land. Score each call on a 0–10 willingness-to-pay scale. In parallel, write 5 sample reasonableness memos by hand (with LLM scaffold) using fictional case facts and have one AU employment-law partner review them by Friday.
- **Day 5:** Decide. Go if: ≥3 calls hit 8+ on willingness, AND lawyer reviewer signs off ≥3/5 memos as "reasonable contemporaneous reasoning". Otherwise, kill or recut to a different industry vertical (e.g. allied health only, or NDIS providers only).
