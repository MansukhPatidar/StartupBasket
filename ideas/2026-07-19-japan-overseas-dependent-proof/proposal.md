---
title: "FuyoCheck — dependent-evidence checker for Japanese employers"
slug: japan-overseas-dependent-proof
date: 2026-07-19
category: Compliance / Japan — Employers Withholding Tax for Foreign Staff With Overseas Dependants
complexity: Low
score: 76
verdict: GO
confidence: Medium
oneLiner: "Judges whether a foreign worker's overseas-dependant paperwork will actually survive a Japanese withholding audit."
tags:
  vertical: Compliance
  model: SaaS
  geography: Global
  secondary: [Japan, Multilingual, AI-agent, SMB, Compliance-driven, Payroll]
axes:
  problem: 16
  demand: 11
  build: 13
  distribution: 11
  revenue: 11
  time: 8
  defensibility: 6
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# FuyoCheck

## 1. One-liner

Judges whether a foreign worker's overseas-dependant paperwork will actually survive a Japanese withholding audit.

## 2. Trend signal — why now?

Three things moved at once, and they move in the same direction.

**The population exploded.** Foreign workers in Japan hit **2.6 million as of October 2025, up 11.7% year on year** — a record for the thirteenth consecutive year. Foreign residents overall crossed **4,125,395 at end-2025, up 9.5%**. The government is targeting **1.23 million** intake under labour-migration programmes. Roughly 500,000 technical trainees and a fast-growing 特定技能 cohort sit in exactly the demographic that sends money home to parents and children abroad.

**The rules got strict, and stayed strict.** Since January 2023, a 30–69-year-old overseas relative only qualifies as a dependant if they are a student abroad, disabled, or **received ¥380,000+ in the year**. Every claim requires 親族関係書類 (proof of relationship) and 送金関係書類 (proof of remittance), **including Japanese translations** where the originals are foreign-language. The NTA reissued its guidance pamphlet as recently as **June 2025 (令和7年6月改訂)** — this is live, actively-maintained enforcement territory, not a dormant rule.

**The people who used to absorb this are gone.** **71.6% of registered tax accountants are 50 or older; only 10.9% are in their 20s–30s.** The effective jobs-to-applicants ratio in the profession is **~2.3x**. Firms are carrying more clients per head, and the first thing that gets rushed is the fiddly annual work — precisely the 年末調整 evidence review.

Meanwhile the obvious adjacent fix is already commoditized: **SmartHR gives away 8-language + やさしい日本語 年末調整 to all users for free** (Jan 2025), and OBC's 奉行クラウドEdge added English in Nov 2024. Translation is not the gap. Nobody adjudicates the evidence.

```
Provenance:
  - Signal 1 (demand): Foreign workers in Japan reach record 2.57–2.6M, up 11.7% YoY; foreign population passes 4M — https://www.japantimes.co.jp/news/2026/01/30/japan/foreign-workers-record-high/ and https://www.nippon.com/en/japan-data/h02750/ — Jan 2026
  - Signal 2 (feasibility/regulatory): NTA overseas-dependant rules require 親族関係書類 + 送金関係書類 with Japanese translation; 30–69 bracket needs ¥380k remittance proof; pamphlet revised June 2025 — https://www.nta.go.jp/publication/pamph/pdf/0022009-107_02.pdf — Jun 2025
  - Signal 3 (economic): Tax-accountant capacity crunch — 71.6% aged 50+, 10.9% under 40, ~2.3x jobs-to-applicants ratio — https://note.com/zeirishi_ai_lab/n/ne8ba58dd03b2 — 2026
  Category: Regulatory arbitrage
```

## 3. The opportunity

Every 年末調整 system on the market — SmartHR, 奉行Edge, jinjer, MoneyForward — solves **collection**. They render the form in Vietnamese, chase the employee, and store the upload. Then they stop. The uploaded artefact is treated as a checkbox: a file exists, therefore the field is complete.

But the tax office does not audit whether a file exists. It audits whether the file **proves the claim**. And that is a judgment call across a messy set of inputs:

- Is this Vietnamese household-registration extract actually a 親族関係書類, or is it a document that names the worker but never establishes the relationship to *this specific* dependant?
- Do these twelve Wise transfers total ¥380,000 for **this one named relative** — or were they lump-summed to a brother who redistributed them? The NTA is explicit: a lump sum to one representative is remittance proof **for that representative only**, not the other relatives.
- Is the dependant 29 or 31? Because at 30 the entire evidentiary bar changes.
- Is there a Japanese translation attached, or just the original?

That judgment currently happens in a 総務 person's head in late November, at speed, for a document they cannot read, in a year when their tax accountant has 20% more clients than last year. The failure is silent — nothing breaks at the time. It surfaces two years later as a 源泉所得税 assessment with 不納付加算税 (10% base rate) plus 延滞税, landing on the **employer as withholding agent**, not the employee.

That's the gap: a **judgment layer**, not a collection layer. It's exactly what an LLM with vision is now good at and what a payroll form-renderer structurally is not.

## 4. Target market

- **Primary customer:** HR/総務 manager or outsourced 社労士/税理士 office serving Japanese SMEs with **20–300 employees of whom 5–80 are foreign nationals** — manufacturing, food processing, construction, nursing care, logistics, agriculture, hotels. Also 登録支援機関 and 監理団体, who support 特定技能 workers and 技能実習生 as their core business and already own the client relationship.
- **Why they buy:** The pain is a specific, dated, recurring dread. November–December, a stack of foreign-language documents, a hard deadline, no ability to read them, and personal accountability if the tax office disagrees later. One 総務 manager's job is to not be the reason the company gets assessed.
- **Rough TAM reasoning:** 2.6M foreign workers. Even assuming only a minority claim overseas dependants, the employers are concentrated in industries that hire foreign labour in clusters. There are thousands of 登録支援機関 registered with the Immigration Services Agency, each with a book of client firms — a natural aggregation point.
- **Why now for them:** The cohort is growing double-digits annually, the ¥380k/age-30 rules are strict and unfamiliar, the tax accountants who used to catch this are stretched thin, and free multilingual 年末調整 has trained everyone to *collect* documents without ever teaching them to *evaluate* documents.

## 5. Product sketch (MVP)

- **Drop the stack, get a verdict.** Upload whatever the employee handed over — photos, PDFs, screenshots of a remittance app — and get a per-dependant ruling: `Sufficient` / `Insufficient` / `Needs human review`, each with a plain-Japanese reason.
- **Relationship-proof reader.** Identifies whether a foreign document (birth certificate, household register, family book) actually establishes the claimed relationship, and flags when it names the worker but not the dependant.
- **Remittance math per named person.** Parses transfer records, attributes each transfer to a specific dependant, sums the year, and shows the running total against the ¥380,000 line — with an explicit warning when transfers appear lump-summed to one representative.
- **Age-bracket gate.** Auto-applies the 30–69 rule and tells you which of the three escape hatches (student / disabled / ¥380k) the claim is relying on.
- **Translation attachment.** Generates the Japanese translation required for foreign-language originals and attaches it to the evidence bundle.
- **The "ask the employee" message.** When something is missing, drafts the request in the worker's language *and* やさしい日本語 — specific about which document, not "please resubmit".
- **Audit bundle export.** One organised, indexed file per employee per year, with the reasoning recorded — the thing you hand the auditor two years later.

## 6. AI angle — what's load-bearing

Remove the AI and this product cannot exist. The core operation is: read an arbitrary document, in an arbitrary language, in an arbitrary layout, photographed badly, and decide whether it satisfies a specific legal evidentiary test. That is not OCR-plus-rules — a Vietnamese household register, an Indonesian family card, a Filipino PSA birth certificate and a Nepali migration certificate share no template. Vision-capable models reading semi-structured foreign documents and reasoning against a codified rule set is the entire product. The rest is a file uploader.

The economics also only just landed. This is a seasonal, bursty workload — thousands of documents in a six-week window — and at current inference prices a full evidence review costs cents per employee against a service that bills in thousands of yen.

## 7. Localization angle

This *is* the localization play, and it runs in both directions. The product is Japan-specific on the rule side (NTA evidentiary standards, 年末調整 calendar, 源泉徴収義務者 liability) and multi-country on the document side (Vietnam, Indonesia, Philippines, Nepal, Myanmar, China — the actual source countries of Japan's foreign workforce). That dual-sidedness is the defensible bit: a generic global HR tool has neither end.

Pricing must be yen-native and per-employee, matching how Japanese payroll outsourcing is already priced (year-end adjustment is billed as an option at **¥1,000–2,000 per person**, on top of ¥400–1,500/person/month for payroll). The market has an existing, well-understood per-head mental model for exactly this task — sit inside it.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** ¥1,500 per foreign employee reviewed per year, sold as a seasonal package, plus a ¥30,000–80,000/yr base for the workspace. For 登録支援機関/税理士 offices, a partner tier at ¥800–1,000/head with volume bands.
- **ACV:** A 30-foreign-employee manufacturer ≈ ¥95,000/yr. A 登録支援機関 with 400 workers across client firms ≈ ¥400,000/yr. Partner accounts carry this business.
- **Rough math to $1M ARR (~¥150M):** ~200 partner accounts averaging ¥600,000, or a blend of ~150 partners plus ~400 direct SMEs. Reachable, because the partners aggregate.
- **Rough math to $5M ARR:** Requires expanding beyond the dependant question into the adjacent foreign-employment compliance calendar — residence-status expiry tracking, 在留カード validity, the mandatory periodic reporting that 登録支援機関 already owe the Immigration Services Agency. Same buyer, same season-agnostic relationship, much larger surface.
- **Expansion path:** Headcount growth is automatic in this market (11.7%/yr). Then per-head → per-workflow → year-round retainer.

**Honest weakness:** it's seasonal. Revenue concentrates Oct–Jan. The expansion path above isn't optional garnish — it's how this becomes a real business rather than a Q4 spike.

## 9. Go-to-market wedge — first 100 customers

- **The registry is public.** The Immigration Services Agency publishes the list of registered 登録支援機関 (moj.go.jp/isa). That is a downloadable, addressed, phone-numbered list of organisations whose entire job is handling paperwork for exactly these workers. Work it directly — this is the single highest-leverage list in the plan, because each one carries dozens of employer clients.
- **Sell the horror story, in September.** Build a one-page worked example: a real ¥380k claim that fails because transfers were lump-summed to a brother, with the resulting assessment math. Mail it to 監理団体 and 社労士 offices in the eight prefectures with the densest 技能実習生 populations, timed for early autumn when 年末調整 planning starts.
- **Free "one employee" audit as the hook.** Let a prospect upload a single real case and get the verdict free. The moment a 総務 manager sees a document they'd have accepted come back marked `Insufficient — no relationship established to named dependant`, the sale is made. This converts because it demonstrates a gap they didn't know they had.
- **Ride the 社労士/税理士 channel.** These offices are capacity-constrained (see §2) and actively hunting for tools that let existing staff carry more clients. Revenue-share or white-label; they bring the book.
- **Industry associations.** JAC (construction) and the sector-specific 特定技能 bodies run member communications into precisely this employer base.

## 10. Build complexity — justification

**Low.** Off-the-shelf vision-capable LLM APIs do the document reading and adjudication; the rule set (age brackets, ¥380k threshold, document categories, translation requirement) is small, published, and stable enough to encode by hand. No payroll integration needed for v1 — this sits *beside* SmartHR rather than inside it, consuming uploads and emitting a bundle. Realistic v1 for one or two people: **8–10 weeks**. The hard work is not engineering, it's assembling a correct, defensible rule interpretation and a golden test set of real documents from the top 5–6 source countries.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Decision-support for the employer. Ship as evidence-sufficiency review, not tax advice — the 税理士法 line matters, see risks. |
| Ethical — no harm / dark patterns | ✅ | Net-positive both ways: workers get legitimate deductions they'd otherwise forfeit for want of a document; employers avoid assessments. |
| Market exists (evidence above) | ✅ | 2.6M workers, strict rules, priced adjacent services (¥1,000–2,000/head for 年末調整). |
| 1–5 person team can build this | ✅ | 8–10 weeks, no custom models. |
| Launchable with <$50K / ₹40L | ✅ | Inference + a landing page + one Japanese-fluent domain advisor. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | Real money, personal accountability, hard deadline — but annual, not daily. A once-a-year terror scores lower than a weekly one. |
| Demand evidence | 15 | 11/15 | Population, rules and pricing benchmarks are all documented. What's *not* documented: direct verbatim complaints about this specific evidence-review pain. Inferred from adjacent evidence, not observed. |
| Build feasibility | 15 | 13/15 | Off-the-shelf vision LLM + small rule set. Golden test set is the only real work. |
| Distribution clarity | 15 | 11/15 | The 登録支援機関 registry is a genuinely excellent named list. Conversion rate through it is untested. |
| Revenue mechanics | 15 | 11/15 | Per-head pricing benchmarked against real payroll-outsourcing rates. Seasonality is a genuine drag on the multiple. |
| Time to first revenue | 10 | 8/10 | Strong seasonal forcing function — but you must hit the Sept–Nov window or wait a full year. Timing risk is real. |
| Defensibility | 10 | 6/10 | Rule knowledge + accumulated document-pattern library across source countries is a soft moat. SmartHR could add this; whether they'd bother for a foreign-worker edge case is the bet. |
| **Total** | **100** | **76/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required` — needs business-level Japanese and a 税理士 or 社労士 advisor on the rule interpretation. A non-Japanese-speaking founder cannot sell this.

### Key assumptions to validate

1. **Assumption:** A meaningful share of overseas-dependant claims currently submitted would fail an audit. **How to test:** Get 3 sympathetic 社労士 offices to run 20 real anonymised prior-year claims through a manual version. If the defect rate is under 10%, the fear isn't justified and the pitch collapses.
2. **Assumption:** Employers feel this as *their* risk, not the employee's. **How to test:** 20 interviews with 総務 managers at foreign-hiring SMEs. Ask who eats the assessment. If they say "the employee", the urgency evaporates.
3. **Assumption:** 登録支援機関 will resell rather than treat it as a threat to billable support hours. **How to test:** 15 conversations from the public registry, with pricing on the table.
4. **Assumption:** ¥1,500/head clears procurement without a committee. **How to test:** Put the price in front of 10 targets and watch for the "I'd need approval" reflex.

### Risk flags

1. **Platform dependency / incumbent squeeze:** SmartHR already owns the 年末調整 workflow and gives multilingual away free. If they ship evidence adjudication, the wedge narrows fast. The counter-bet is that foreign-dependant edge cases are unattractive to a horizontal player — but it is a bet.
2. **Regulatory boundary (税理士法):** Japan restricts who may give tax advice. The product must present as evidence-sufficiency review and document preparation, with a 税理士 in the loop for anything resembling a determination. Get this wrong and the business is illegal rather than merely unprofitable.
3. **Seasonality:** Revenue clusters into one quarter. Cash management and the year-round expansion path are load-bearing, not optional.
4. **Accuracy liability:** A `Sufficient` verdict that later fails an audit is a trust-destroying event and a possible claims exposure. The `Needs human review` band must be used generously, and the tool must be positioned as a check on humans rather than a replacement for them.
5. **Demand evidence is inferential:** Every structural fact here is sourced. The specific pain is reasoned from those facts, not from customers saying it out loud. That is the single biggest reason this is a 76 and not an 85 — and the first thing to fix.

## 14. Structured verdict

```
Score:                  76/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Japan-based or Japanese-fluent technical founder with a 社労士/税理士 advisor
Time to revenue:        8–14 weeks if launched into the Sept–Nov window; otherwise a year's wait
Capital to launch:      ¥1.5–3M ($10–20K)
Top 3 assumptions to validate first:
  1. Real defect rate in prior-year claims — 20 anonymised cases via 3 friendly 社労士 offices
  2. Employer (not employee) owns the perceived risk — 20 総務 manager interviews
  3. 登録支援機関 will resell — 15 calls from the public ISA registry with pricing on the table
Kill criteria:
  - Abandon if the defect rate in real prior-year claims is <10% — the fear isn't real
  - Abandon if <3 of 15 登録支援機関 will take a paid pilot
  - Abandon if SmartHR ships overseas-dependant evidence checking before v1 lands
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Pull the 登録支援機関 registry from the ISA site. Build the list. In parallel, codify the NTA rule set from the June 2025 pamphlet into a one-page decision tree and have a 税理士 red-line it.
- **Day 3–4:** Hand-run 20 real anonymised prior-year dependant claims — begged from 2–3 friendly 社労士 offices — through the decision tree manually. **This is the core experiment.** Count how many would fail.
- **Day 5:** Call 15 organisations from the registry. Lead with the measured defect rate from Day 3–4, not with the product.

**Falsifiable outcome:** if the measured defect rate across 20 real claims is **≥10%** and **≥3 of 15** registry calls agree to a paid pilot at ¥1,500/head, build it. If the defect rate is below 10%, kill it regardless of how enthusiastic the calls are — enthusiasm without defects means they're being polite about a problem they don't have.
