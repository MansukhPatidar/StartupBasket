---
title: "KasanGuard — self-audit desk for Japanese home-care offices"
slug: kaigo-kasan-selfaudit
date: 2026-07-29
category: HealthTech / Japan-SMB — Small 訪問介護 (Home-Visit Care) Offices, 5–30 Staff
complexity: Medium
score: 77
verdict: GO
confidence: Medium
oneLiner: "Checks every add-on you billed against the records that prove it, before the prefecture makes you pay five years back."
tags:
  vertical: HealthTech
  model: SaaS
  geography: Global
  secondary: [Japan, Compliance-driven, SMB, AI-agent, Multilingual, Workflow automation]
axes:
  problem: 18
  demand: 13
  build: 11
  distribution: 12
  revenue: 12
  time: 7
  defensibility: 4
founderFit: [domain-expertise-required, sales-heavy, technical-heavy]
featured: false
---

# KasanGuard

## 1. One-liner

Checks every add-on you billed against the records that prove it, before the prefecture makes you pay five years back.

## 2. Trend signal — why now?

Three things happened to Japanese home-visit care in the last eighteen months, and they compound.

**The money got restructured two months ago.** The 2026年6月1日 臨時改定 landed a +2.03% base revision and blew up the 処遇改善加算 structure — the previously consolidated tiers were re-cut into six divisions (Ⅰイ・Ⅰロ・Ⅱイ・Ⅱロ・Ⅲ・Ⅳ). For 訪問介護 the top 「Ⅰロ」 band pays **28.7%** on top of base units, but only if you satisfy an added requirement: ケアプラン連携, 生産性向上推進体制加算, or 社会福祉連携推進法人 membership. Whole new service categories — 訪問看護, 訪問リハ, 居宅介護支援 — became eligible and now have to build キャリアパス要件 and 職場環境等要件 evidence from a standing start. Every office in the country just had its highest-value add-on re-specified, and the requirements are now conditional rather than flat.

**The offices are dying.** Tokyo Shoko Research counted **91 訪問介護 bankruptcies in 2025 — a third consecutive record year** — inside 176 total care-sector failures, itself a second consecutive record and roughly 60% above pre-COVID 2019 (111). The failures are almost entirely micro: **86.8% had under 10 employees**, over 80% under ¥5M capital. Cause was 売上不振 in more than 80% of cases. When a 28.7% add-on band is the difference between margin and closure, getting the tier wrong isn't paperwork — it's the business.

**The clawbacks are brutal and retroactive.** 運営指導 findings aren't fines, they're refunds of everything you billed plus a **40% penalty** (100分の40). Documented cases: a Sapporo office claimed 特定事業所加算(Ⅱ) without the 体制要件 in place — ¥46万 returned, ¥18万 penalty, designation revoked. A second Sapporo office billed with defective add-on requirements for over two years — **¥862万 returned plus ¥345万 penalty = ¥1,207万, designation revoked.** An Aomori office found unwritten individual training plans and skipped health checks, and had to self-audit and 過誤調整 **every claim across five years**. Kyoto's published 算定誤り examples show the same failure shapes repeating annually.

And the failure mode is mundane. The published 指摘事項 lists are not fraud — they're record-keeping drift: サービス提供記録 with nothing written unless something unusual happened; 訪問介護計画書 that says weekly but delivery that ran twice weekly; services delivered that were never in the plan; monthly duty rosters that don't clearly establish the サ責 as full-time; individual training plans missing for *some* staff; insurance and non-insurance work booked without separation. Practitioner guidance describes the root cause directly: 実績 checking gets deferred, then registered in one rush at month-end, and 「チェック漏れ」 follows — including billing for visits that never happened.

Meanwhile the サ責 who is supposed to catch all this is, by every job description, already saturated: 訪問介護計画書 authoring, 担当者会議, helper shift building, モニタリング, 実績, and 請求 — plus covering visits.

Provenance:
  - Signal 1 (Demand): 運営指導 citation patterns for 訪問介護 — undocumented サービス提供記録, plan-vs-delivery mismatch, missing individual training plans, non-exclusive サ責 — https://care-wing.jp/column/jittishido/ — 2026-07-29
  - Signal 2 (Economic): 2025 訪問介護 bankruptcies hit a record 91, third straight record year; 86.8% had <10 employees; 176 total care-sector failures, ~60% above 2019 — https://www.tsr-net.co.jp/data/detail/1202280_1527.html — 2026-07-29
  - Signal 3 (Regulatory/Feasibility): 2026年6月1日 臨時改定 — +2.03% base, 処遇改善加算 re-cut into six divisions, 訪問介護 Ⅰロ at 28.7% with conditional added requirements, new service types made eligible — https://jitsumu-guide.com/kaigo-hoshu-2026-june-guide/ — 2026-07-29
  - Signal 4 (Economic, severity): 特定事業所加算 clawback cases — ¥1,207万 total (¥862万 + ¥345万 penalty) with designation revoked; separate case forced five-year retroactive self-audit — https://jm-academy.jp/contents/columns/9mj2uh-35r — 2026-07-29
  - Signal 5 (Market size): 37,264 訪問介護 offices nationally as of 2024, the largest single service category — https://doctormate.co.jp/blog/newscolumn250107-1 — 2026-07-29
  Category: Regulatory arbitrage

## 3. The opportunity

There are 72,600+ care offices running 介護ソフト in Japan. The incumbent software — 介舟ファミリー, Care-wing, カイポケ and the rest — is *billing* software. It computes units, assembles the 国保連 claim, and transmits it. It is very good at answering "what do I invoice this month."

It does not answer the question that actually costs money: **"can I prove I was entitled to what I invoiced?"**

That gap is structural, not lazy. Billing software owns the claim data. The *evidence* lives somewhere else entirely — the training plan is a Word file, the health-check certificates are in a folder, the duty roster is Excel, the 会議 minutes are paper, the サービス提供記録 free-text is either in the app or on a handwritten sheet, and the 計画書 is a PDF. Nobody reconciles across those artifacts because nobody owns all of them. So the 加算 requirement checking happens exactly once — when the office files 体制届 — and then never again, while reality drifts for two years until 運営指導 shows up and reconciles it for you, retroactively, with a 40% surcharge.

The 10× is this: an office that has *already claimed* an add-on is sitting on a compounding, unpriced liability that grows every month it stays wrong. Nobody sells them the meter. KasanGuard is the meter — a monthly reconciliation that reads what you claimed, reads what your records actually support, and prices the exposure in yen before the prefecture does.

The wedge against incumbents is that we don't compete with them. We read their exports. A billing vendor building this would be building a product whose main output is "your billing has been wrong for eight months" — an awkward thing to ship to your own installed base. That reluctance is the opening.

## 4. Target market

- **Primary customer:** The 管理者 or owner-operator of an independent 訪問介護事業所 — 5–30 staff, one to three offices, ¥30M–¥200M annual revenue, typically claiming 処遇改善加算 plus one or two of 特定事業所加算 / 緊急時訪問加算 / 初回加算. Not the 100-office chains (they have compliance staff). Not the two-person shops (no add-ons worth auditing). The middle, where the add-on stack is material and there is exactly zero back-office headcount.
- **Why they buy:** Because 運営指導 arrives roughly every 3–6 years with no meaningful warning and reconciles everything at once. Practitioner guidance is explicit that small offices should stop chasing every add-on and concentrate on the top three by monthly contribution — a 10-person 訪問介護 office running 処遇改善Ⅱ + 特定事業所Ⅲ + 緊急時訪問 is quoted as adding **¥12–15万/month**. That is the number at risk. Five years of a ¥13万/month add-on stack is ¥780万 of principal, before the 40% surcharge. They buy the same way people buy fire insurance after a neighbour's house burns — and in this sector the neighbours are burning at a record rate.
- **Rough TAM reasoning:** 37,264 訪問介護 offices nationally (2024, largest single service category). Strip the sub-5-staff tail and the corporate chains and call the serviceable middle 12,000–16,000 offices. Adjacent expansion is large: 通所介護, 居宅介護支援, グループホーム and 障害福祉 all run the identical 加算-plus-運営指導 structure, and 訪問看護 / 訪問リハ / 居宅介護支援 were *just* pulled into 処遇改善加算 scope in June 2026 with no institutional muscle memory for its requirements.
- **Why now for them:** The June 2026 revision reset every office's add-on position two months ago. Whatever 体制 evidence they had assembled for the old four-tier structure does not automatically satisfy the new six-division one, and the top 訪問介護 band now carries a conditional requirement that did not previously exist. Right now, tens of thousands of offices are claiming under a structure they configured in a hurry and have not re-verified. The liability clock started in June.

## 5. Product sketch (MVP)

- **Add-on ledger.** Import the monthly 国保連 claim export from whatever 介護ソフト the office runs. KasanGuard lists every 加算 claimed, per user, per month, with yen value — so the office sees its total add-on exposure as one number for the first time.
- **Evidence binding.** For each claimed add-on, the specific 算定要件 are broken into concrete evidence slots — individual training plan per named helper, health-check date per named helper, 会議 minutes with attendance, 緊急時対応 procedure delivered to each named user, qualification certificates, duty roster establishing 専従. Each slot is satisfied, stale, or empty.
- **Drop-anything intake.** Photograph the paper roster, upload the Excel shift file, dump the Word training plan, forward the PDF certificate. AI reads it, works out which evidence slot it satisfies and for which named staff member, and files it. No forms.
- **Record-vs-plan drift check.** Reads the 訪問介護計画書 against the month's actual 実績 and flags the published failure shapes: delivered service not in the plan, frequency delivered ≠ frequency planned, サービス提供記録 with no substantive content, insurance and non-insurance work not separated, visits billed with no corresponding record.
- **Exposure meter in yen.** One live figure: "if 運営指導 came this week, ¥X is at risk" — computed as unsupported add-on claims × months claimed × 1.4. Not a compliance score out of 100. Yen.
- **Revision watch.** When 加算 requirements change — as they did on 2026-06-01 — every affected office's evidence slots re-open with a diff of what's newly required. This is the retention hook.
- **運営指導 packet.** On demand, export the binder the inspector asks for: each claimed add-on, its requirements, and the dated evidence supporting it, in the order the prefecture's checklist runs.
- **Month-close checklist.** A five-minute end-of-month pass for the サ責 replacing the rushed 実績 registration that practitioner guidance identifies as the origin of most 漏れ.

## 6. AI angle — what's load-bearing

Remove the AI and this is a spreadsheet nobody fills in — which is precisely the status quo that produces ¥1,207万 clawbacks.

Two jobs are genuinely model work. **First, unstructured evidence classification.** The proof of a 加算 requirement arrives as a photographed paper roster, a non-standard Excel shift grid, a Word training plan written in one office's idiom, a scanned health-check certificate. The model has to read each, decide which requirement it evidences, extract the effective date, and bind it to the right named staff member. Every office's documents look different; there is no schema to import against. This is exactly the "unstructured communication data" problem the Japanese market has spent two years and billions of yen learning to attack — IVRy explicitly frames its own roadmap around extracting value from unstructured communication data, and raised ¥4.5B in debt in 2026 on top of ¥10.6B equity to do it. Same technical thesis, different corner of the market.

**Second, semantic record adequacy.** The single most-cited finding is サービス提供記録 that says nothing unless something unusual happened. Detecting that requires judging whether free-text Japanese care notes actually describe the service delivered and the user's condition, or are boilerplate — and comparing them against the 計画書's stated content and frequency. Keyword matching cannot do this. A model reading both documents can.

Cheap long-context inference in Japanese is what makes a ¥30,000/month product possible here; three years ago this was a ¥300,000/month consulting engagement, which is why it was never productized for 10-person offices.

## 7. Localization angle

This is Japan-only by construction, and that's the point rather than a limitation. The 介護保険 加算 structure, the 運営指導 regime, the 国保連 claim format, the 40% 加算金, and the 5-year retroactive reach are all specific to Japanese long-term care insurance. There is no global version of this product — the moat and the market are the same object.

Practical consequences: the entire product is Japanese-language, including OCR over handwritten care notes and photographed rosters. Distribution runs through 介護 industry media, prefectural 介護事業者協会 chapters, and the 社労士 / 行政書士 who already advise these offices on 体制届 filings. Pricing sits in the ¥20,000–50,000/month band where Japanese SMB back-office SaaS lives — comfortably below the incumbent 介護ソフト line item, and framed as insurance rather than software. Sales is relationship-led and slow to start; this is not a self-serve credit-card motion in year one.

The 2026 IT導入補助金 (renamed and now explicitly weighted toward AI adoption and labor-shortage relief, backed by a ¥340B supplementary budget for the SME productivity programme) is a genuine subsidy tailwind — care offices are exactly the target profile, and subsidy eligibility materially shortens the purchase conversation.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** ¥29,800/month per office for the core tier (add-on ledger, evidence binding, drift check, exposure meter). ¥49,800/month for multi-office operators or offices also running 障害福祉 lines. Annual prepay discount to 10 months — matters, because these customers are cash-tight and annual billing removes monthly churn decisions.
- **ACV:** ~¥360,000 (≈$2,400) core, ~¥600,000 multi-site. Blended ~¥400,000 (≈$2,700).
- **Anchor for willingness-to-pay:** the add-on stack under audit is worth ¥12–15万/month to a 10-person office. ¥29,800 is roughly 20–25% of one month's add-on revenue, protecting a five-year retroactive liability on that same revenue. Incumbent 介護ソフト runs in a comparable band, so the budget line is familiar.
- **To ¥150M / ~$1M ARR:** ~375 offices at ¥400K blended. That's **2.5% of the serviceable 12,000–16,000 middle**, and 1% of the 37,264 national total. Reachable.
- **To ¥750M / ~$5M ARR:** ~1,700 offices, which requires two things beyond the core: expansion into 通所介護 / 居宅介護支援 / 障害福祉 (same 加算 + 運営指導 structure, roughly triples addressable offices), and a channel motion through 社労士 / 行政書士 / 介護 consultancies rather than pure direct sales. Achievable in 30–36 months; not in 18.
- **Expansion path:** per-office seat growth as operators add locations; a 障害福祉 module; a paid 運営指導 response service (the incident-driven moment when willingness-to-pay spikes); and eventually a data product — anonymized "which requirements are most commonly unsupported, by prefecture" — that the consultancies would pay for.

## 9. Go-to-market wedge — first 100 customers

- **The free exposure audit, direct.** Every 介護 office is in the 介護サービス情報公表システム with its name, address, service types, and staff count — a public, structured, national list of 37,000+ targets, filterable to the 5–30 staff band. Direct mail is still a live channel in this sector. Offer: send us last month's 国保連 claim export and one photo of your duty roster, get back a yen-denominated exposure figure in 48 hours, free. The output is a number, not a pitch. Work 500 offices for the first cohort; a 3–4% conversion to paid is 15–20 customers and tells you fast whether the number scares people enough to open a wallet.
- **社労士 and 行政書士 who file 体制届.** These advisors already handle the 加算 filings and get the panicked phone call when 運営指導 is scheduled. They have no tooling for ongoing verification and they carry reputational risk when a client gets clawed back. Recruit 15–20 as referral partners at 20% recurring. Each one carries 10–40 care clients. This is the highest-leverage channel and should start in week one, not month six.
- **The June 2026 revision as the reason to call.** Every office in the country has to re-verify its 処遇改善加算 position against the new six-division structure right now. Run free webinars — with a 社労士 co-host for credibility — on "what changed in your 加算 requirements on June 1st and what evidence you now need." Not a product demo; a genuine explainer with the audit offered at the end. 介護 industry media (介護のコミミ, カイビズ, and the vendor-run 介護 blogs already ranking for these queries) actively syndicate this kind of content.
- **Prefectural 介護事業者協会 chapters.** Regional associations run member seminars and are actively worried about the bankruptcy wave. A talk built around the published clawback cases — ¥1,207万 and designation revoked — is the presentation that sells itself. Target three prefectures first, go deep rather than national.
- **The bankruptcy adjacency.** Offices being acquired out of distress get their add-on history diligenced by the buyer. The consolidators buying up failing 訪問介護 offices are a small, identifiable set of buyers with a recurring need to price exactly this liability. Sell them the audit as a diligence tool; they hand it to every office they acquire.

## 10. Build complexity — justification

Medium, at the upper end. The reconciliation logic itself is not exotic — the difficulty is that the 加算 requirement tree is large, conditional, and was just rewritten in June 2026, so encoding it correctly demands real domain work (or a paid 社労士 advisor on retainer from day one — budget for this, it's not optional). The 国保連 claim export format is standardized, which helps; but ingesting evidence from a dozen incumbent 介護ソフト exports plus photographed paper is integration grind. Realistically 4–5 months to a v1 covering 訪問介護 only, with the top three add-ons (処遇改善, 特定事業所, 緊急時訪問) deeply modelled and the rest as a manual checklist. A pair — one engineer, one domain-fluent operator — can do it. A non-Japanese-speaking founder cannot; this idea has a hard language and domain gate.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Advisory/record-keeping software. Not making claims on the office's behalf, not practicing 社労士 work — care is needed to stay on the right side of that line in marketing copy. |
| Ethical — no harm / dark patterns | ✅ | Product helps offices bill *correctly*, which includes flagging over-claims they must self-correct. Fear-based marketing is the risk; the honest version — a real yen figure — is fine, inventing urgency is not. |
| Market exists (evidence above) | ✅ | 37,264 offices, documented clawbacks to ¥1,207万, record bankruptcies, 72,600+ already paying for 介護ソフト. |
| 1–5 person team can build this | ✅ | Two people plus a paid domain advisor. |
| Launchable with <$50K / ₹40L | ✅ | Main costs are the domain advisor retainer and direct-mail/seminar spend. Well under. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 18/20 | Documented ¥1,207万 clawbacks with designation revoked, 40% statutory penalty, five-year retroactive reach, against a customer base failing at a record rate. Docked 2 because the pain is *latent* — 運営指導 is infrequent, so on any given Tuesday the office doesn't feel it. That's the whole sales problem. |
| Demand evidence | 15 | 13/15 | Multiple independent hard signals: published prefectural 指摘事項 lists, named clawback cases with amounts, TSR bankruptcy data, 72,600+ offices already paying for adjacent software, a just-landed regulatory change. Docked 2 because nobody is currently *paying* for this specific product — the willingness-to-pay is inferred from adjacent spend, not observed. |
| Build feasibility | 15 | 11/15 | Standard stack, but the 加算 requirement tree is genuinely large and freshly rewritten, and evidence ingestion from a dozen incumbent exports plus paper is grind. 4–5 months, and it needs a domain-fluent builder. |
| Distribution clarity | 15 | 12/15 | Public national registry of every target, plus a named professional referral channel (社労士/行政書士) with aligned incentives, plus a live regulatory event as the reason to call. Docked because Japanese SMB sales in this sector is relationship-paced — the list is clear, the cycle is not fast. |
| Revenue mechanics | 15 | 12/15 | ¥29,800 against a ¥12–15万/month add-on stack is defensible, incumbent software sets the budget precedent, and 375 offices for $1M ARR is 1% national penetration. Docked because the $5M path requires vertical expansion and a channel motion that isn't proven yet. |
| Time to first revenue | 10 | 7/10 | The free exposure audit is sellable before the product is finished — you can hand-run the first ones. But 4–5 months of build plus a consultative Japanese SMB cycle puts real recurring revenue at 4–6 months, not 4 weeks. |
| Defensibility | 10 | 4/10 | The honest weak axis. The requirement tree is copyable, the incumbents own the billing data and could bolt this on, and there's no network effect. What you get is a 12-month head start, accumulating per-office evidence history that makes switching annoying, and an incumbent conflict of interest — real, but thin. |
| **Total** | **100** | **77/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`domain-expertise-required` · `sales-heavy` · `technical-heavy`

This is the most constrained founder profile in the portfolio. Native Japanese, existing relationships in 介護 or 社労士 circles, and enough engineering to ship document AI. Missing the domain half means the requirement tree will be subtly wrong, and in this product subtly wrong is worse than useless — it's liability. Missing the language means nothing works at all.

### Key assumptions to validate (3–5)

1. **Assumption:** Offices will hand over their 国保連 claim export to a stranger for a free audit. **How to test:** Make the ask cold to 50 offices. If under 10% send data, the free-audit wedge is dead and distribution collapses — this is the single highest-risk assumption and it is cheap to test in week one.
2. **Assumption:** A meaningful share of offices actually have unsupported add-on claims — i.e. the exposure number comes back non-zero often enough to sell. **How to test:** Hand-audit the first 20 datasets. If fewer than half show real exposure, the product is a nice-to-have and pricing must drop hard.
3. **Assumption:** A yen-denominated exposure figure converts latent risk into purchase intent. **How to test:** After delivering 20 free audits, measure paid conversion. Under 15% means fear of an infrequent event doesn't open wallets, and you should pivot the pitch to add-on *upgrade* capture (helping them claim the 28.7% Ⅰロ band they're missing) — an upside story, which may sell better than a downside one.
4. **Assumption:** 社労士 / 行政書士 will refer rather than build the service themselves manually. **How to test:** Pitch 15. Track how many sign a referral agreement versus asking for a white-label or internal-tool licence — the latter response is a signal to change business model, not to quit.
5. **Assumption:** Incumbent 介護ソフト vendors won't ship this within 12 months. **How to test:** Read their release notes and roadmap posts monthly. Their structural disincentive is real but not permanent.

### Risk flags

1. **Latent-pain risk (the big one):** 運営指導 comes every few years. Unlike a 28-day notice deadline or a monthly tax filing, there's no recurring forcing event that makes the customer feel the pain on schedule. This is why the score is 77 and not 85. The mitigation is to attach the product to a *monthly* ritual — the month-close checklist — so it earns its keep between inspections rather than only during them.
2. **Incumbent encroachment:** 介舟ファミリー, Care-wing, カイポケ and others already hold the claim data and the customer relationship. Their disincentive to tell customers "you've been billing wrong" is real but soft; a new entrant or a vendor with a small installed base could ship it. Twelve-month head start, not a moat.
3. **Regulatory churn cuts both ways:** the June 2026 revision created the opening, and the next one creates re-work. Every 改定 forces a requirement-tree rewrite. Budget for it as ongoing cost of goods, not a one-time build. It is also the retention hook — offices that lived through one revision with the tool won't want to face the next one without it.
4. **Sector financial distress:** you are selling to a customer base with record bankruptcies and 80%+ citing revenue decline. Churn from customers *going out of business* will be structurally elevated, and price sensitivity is extreme. Annual prepay is a partial hedge.
5. **Advisory-boundary risk:** telling an office what it can claim edges toward regulated 社労士 territory. Keep the product framed as evidence reconciliation, not filing advice, and have the domain advisor review marketing copy.

## 14. Structured verdict

```
Score:                  77/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Japanese-native pair — one engineer comfortable with document AI,
                        one with existing 介護 or 社労士 relationships. Domain advisor on
                        retainer from day one, non-negotiable.
Time to revenue:        4–6 months (hand-run audits can bill earlier)
Capital to launch:      ¥4–6M (~$27–40K) — mostly domain advisor retainer,
                        direct mail, and prefectural seminar spend
Top 3 assumptions to validate first:
  1. Offices will share 国保連 claim exports for a free audit — cold-ask 50, need >10% yes
  2. Real exposure exists in the data — hand-audit 20, need >50% showing non-zero yen risk
  3. A yen exposure figure converts to purchase — need >15% of free audits to paid
Kill criteria:
  - Abandon if fewer than 10% of 50 cold-contacted offices will share a claim export
  - Abandon if fewer than half of the first 20 hand-audits surface real unsupported claims
  - Abandon if a major 介護ソフト vendor ships an equivalent add-on verification module
    before v1 ships
  - Reprice hard if paid conversion off free audits is under 10% after 30 audits
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Pull 500 訪問介護 offices in the 5–30 staff band from the 介護サービス情報公表システム across two prefectures. Build the requirement tree by hand for exactly three add-ons — 処遇改善加算 (all six new divisions), 特定事業所加算, 緊急時訪問介護加算 — sitting with a 社労士 for a paid half-day. No code.
- **Day 3–4:** Cold-contact 50 offices with the free-audit offer: send last month's 国保連 export plus a photo of your duty roster, receive a yen exposure figure in 48 hours. Measure the *share-rate* — this is the real experiment. In parallel, pitch 10 社労士 on the referral arrangement.
- **Day 5:** Hand-audit every dataset received. Manually, in a spreadsheet — no product exists yet.
- **Decision rule:** Go if **≥5 of 50 offices (10%) share data**, **≥half of the datasets received show non-zero unsupported add-on exposure**, and **≥2 of 10 社労士 agree to refer**. Any one of those failing means the wedge is wrong. All three failing means the pain is real but not purchasable, and the idea goes back on the shelf until the next 改定 cycle.

Falsifiable, cheap, and the expensive part — encoding the full requirement tree — doesn't get built until the share-rate clears.
