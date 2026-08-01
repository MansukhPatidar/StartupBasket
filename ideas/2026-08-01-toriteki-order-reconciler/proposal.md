---
title: "HacchuTrace — order reconciler for Japanese compliance"
slug: toriteki-order-reconciler
date: 2026-08-01
category: Compliance / Japan-SMB — Mid-Size Companies Newly Pulled Into Toritekihō by the 300/100 Employee Test
complexity: Medium
score: 77
verdict: GO
confidence: Medium
oneLiner: "Finds the orders your team placed in Slack and never papered, before the JFTC survey asks."
tags:
  vertical: Compliance
  model: SaaS
  geography: Japan
  secondary: [AI-agent, Compliance-driven, SMB, Workflow-automation, Japanese-language]
axes:
  problem: 16
  demand: 13
  build: 11
  distribution: 13
  revenue: 12
  time: 7
  defensibility: 5
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# HacchuTrace

## 1. One-liner

Finds the orders your team placed in Slack and never papered, before the JFTC survey asks.

## 2. Trend signal — why now?

On **1 January 2026 — seven months ago — Japan's 下請法 (Subcontract Act) became the 中小受託取引適正化法 (Toritekihō)**, and the scope test changed in a way that matters more than the rename. The old law gated on *capital*. The new law adds a **headcount trigger: 300 employees for manufacturing-type delegation, 100 for service-type delegation**. A company with small registered capital and 150 staff was outside this regime for its entire existence. On January 1st it woke up inside it, carrying the full 4条書面 disclosure duty and the 60-day payment rule, with an ordering culture built entirely on Slack, email and hallway conversation.

The data on how that's going is unambiguous, and all of it postdates the law taking effect:

- **Sansan, surveying 143 legal/compliance officers at ordering companies (11–16 March 2026): 87.4% are actively working on compliance, but 59.5% say they have problems doing it.** Only 40.6% report coping cleanly. This is not an awareness market. It's an execution market — they know, they're trying, they're failing.
- **freee, 1,000 respondents (26–30 March 2026): 28.6% of ordering-side companies admit doing business with no written contract since January 2026.** freee's own framing is the tell: *"良好な信頼関係が図らずも法律違反のリスクを孕んでしまっている"* — good trust relationships have inadvertently become legal violation risk. That is precisely the failure mode. Nobody is being malicious. They're ordering the way they've ordered for twenty years.
- **Tokyo Shoko Research (Dec 2025): 57.1% of companies had either not examined the impact or didn't know the law was changing.** Large companies: ~70% had assessed impact. SMEs: barely over 40%. The gap is the market.
- **Enforcement is climbing hard. FY2025 saw 39 recommendations — up 18 year-on-year, the highest since the Heisei era.** In June 2026 METI and the JFTC finished a concentrated sweep of the advertising industry and issued guidance to **71 advertising agencies** in one action.
- **The forcing function is annual and addressed. For FY2026 the JFTC notified 75,000 companies and the SME Agency 55,000 — 130,000 total — for the 定期調査 written survey, now fully online.** Failing to respond, or responding falsely, carries a fine. Every one of those companies must answer questions about whether they issued compliant order documents.
- **Freelance Act enforcement runs on the same fault line.** The JFTC's first annual report logged 137 new cases, 96 processed, 54 warnings — driven mainly by *insufficient disclosure of transaction terms* and *payment beyond 60 days*. In June 2026 Kadokawa took a corrective recommendation covering **100+ freelance writers, stylists and illustrators**, and the stated root cause was that the company's *custom was to place freelancer orders verbally*. About 40% of Japanese freelancers report terms weren't disclosed at order time.

Kadokawa is the proof of thesis. A large, well-resourced, legally-advised publisher — already burned by a 2023 Subcontract Act action — still got caught. Not because it lacked a purchase-order system. Because the order never entered one.

```
Provenance:
  - Signal 1 (demand): Sansan survey of 143 ordering-company compliance officers — 87.4% acting on Toritekihō, 59.5% report unresolved difficulties — https://jp.corp-sansan.com/news/2026/0330.html — 30 Mar 2026
  - Signal 2 (demand/economic): freee 1,000-respondent survey — 28.6% of ordering companies transacted with no written contract since Jan 2026; 33% of ordering side unaware of the law — https://corp.freee.co.jp/news/20260605freee_survey.html — 5 Jun 2026
  - Signal 3 (economic/regulatory): FY2025 recommendations hit 39, up 18 YoY, highest since Heisei; FY2026 定期調査 sent to 130,000 companies (JFTC 75k + SME Agency 55k), online-only — https://www.nikkei.com/article/DGXZQOUD093DV0Z00C26A6000000/ + https://www.trucknews.biz/article/s070134/ — Jun 2026
  - Signal 4 (feasibility): Slack/Teams Discovery + Enterprise APIs are mature and Japanese-language LLM extraction is cheap enough to parse every message for the 12 statutory 4条書面 fields — https://www.spreadoffice.com/blog/sitaukehou/ — 2026
  - Signal 5 (scope shift): Employee-count criteria (300 manufacturing / 100 services) newly added, sweeping in low-capital, high-headcount firms — https://www.jftc.go.jp/file/toriteki_leaflet.pdf — 1 Jan 2026
  Category: Regulatory arbitrage
```

## 3. The opportunity

Every existing tool in this category solves the **document** problem. None solve the **detection** problem.

freee 業務委託管理 (formerly pasture), Money Forward クラウド契約, CloudSign, Yayoi — all of them will generate a beautifully compliant 4条書面 with every statutory field enforced as a required input. freee even makes delivery location, payment date and inspection date mandatory fields. That is genuinely good software.

It is also irrelevant to the actual violation, because **all of it is downstream of someone deciding to open the tool.** The compliance hole isn't malformed orders. It's orders that never got typed anywhere — the Slack DM saying "田中さん、あのバナー3本お願いします、いつもの単価で" at 7pm on a Friday. Kadokawa had budget for any procurement suite on the market and got a corrective recommendation for exactly this.

I searched hard for anyone detecting unissued purchase orders from chat in Japan. The results come back as generic Slack security and eDiscovery vendors — Hanzo, Relativity, Smarsh — none of which know what a 4条書面 is. The Japanese procurement vendors don't read chat; the chat-monitoring vendors don't read Japanese subcontract law. Nobody sits in the middle.

So the wedge is inverted. Instead of asking staff to change how they order — which has failed for twenty years and will keep failing — **watch where orders actually get placed, and reconcile that against what got papered.** Two things a form-based incumbent structurally cannot do:

1. **Catch the order that bypassed the system entirely.** The one that becomes a JFTC finding.
2. **Judge whether a chat message already qualifies as a valid 4条書面.** Under the law, an electronic order *is* legally sufficient — but only if all twelve statutory fields are present. Since January 2026, electronic delivery no longer even requires the recipient's prior consent, which makes chat-based ordering more defensible than it used to be, not less — *if* it's complete. "Payment date: TBD" voids it. That completeness test is mechanical, and nobody is running it.

The second point is what turns this from a nag into a tool. Half the time the answer isn't "you broke the law," it's "you're two fields away from compliant, here's the follow-up message to send."

## 4. Target market

- **Primary customer:** The 管理部長 / 経営管理部 / 法務担当 at a Japanese company of **100–800 employees** that does service-type delegation — advertising and production agencies, system integrators and dev shops, publishers and media, design and localization firms, logistics operators. Specifically those with **modest registered capital but headcount above 100**, who were outside 下請法 before January 2026 and inside Toritekihō now. Usually one or two people carrying compliance alongside HR, accounting and general affairs.
- **Why they buy:** In their words, from the survey data — 59.5% "have problems" with compliance despite trying; the single most-cited difficulty (32.9%) is *having to individually confirm and collect company information*, a direct consequence of the new headcount test. And 28.6% concede they've transacted with nothing in writing since January. The felt version: *a survey from the JFTC is going to land, someone has to answer it honestly, and nobody can actually say what was ordered in Slack last quarter.*
- **Rough TAM reasoning:** 130,000 companies received the FY2026 定期調査 notice. Japan has roughly 15,000–20,000 firms in the 100–800 employee band in service-delegation-heavy sectors. Even at 1% penetration of a 20,000-company beachhead at ¥180K/year, that's ¥360M (~$2.4M) ARR. The five-year retention duty on records means this never becomes a one-time purchase.
- **Why now for them:** The law is seven months old, the first full 定期調査 cycle under the new rules is running, recommendations hit a post-1989 high, and METI just demonstrated with the 71-agency advertising sweep that it will do industry-wide dragnets rather than wait for complaints. The advertising industry in particular has been put on notice publicly.

## 5. Product sketch (MVP)

- **Chat-order detection.** Connects to Slack and Microsoft Teams. Reads messages in designated external-partner and project channels and flags anything that reads as a work instruction to an outside party — Japanese, including the indirect and elliptical phrasing real orders actually use.
- **Twelve-field completeness check.** For each detected order, scores it against the statutory 4条書面 items and shows exactly which are missing. "支払期日 not stated. 検査完了期日 not stated. Everything else present."
- **Unpapered-order reconciliation.** Cross-references detected orders against issued POs and against outgoing payments in the accounting system. Produces the list that matters: *work that was ordered and paid for with no compliant document behind it.*
- **One-click remediation message.** Drafts the follow-up — a supplementary notice with the missing fields — as a Slack message or PDF, in correct Japanese business register, ready to send to the counterparty.
- **60-day payment clock.** From detected receipt of deliverables, tracks the payment deadline per counterparty and warns before breach, not after.
- **Counterparty scope register.** Tracks each supplier's capital and employee count, so the system knows which relationships are actually in scope under the dual capital/headcount test — the #1 named pain point at 32.9%.
- **定期調査 answer pack.** When the annual survey arrives, exports a defensible summary of order documentation coverage for the period, with the gaps already remediated and dated.
- **Read-only by default.** Scoped to selected channels, with an explicit exclusion list. This is a compliance instrument, not employee surveillance — see risk flags.

## 6. AI angle — what's load-bearing

Remove the AI and there is no product. The entire value sits in one hard judgment: **is this Japanese chat message an order, and does it contain all twelve statutory fields?**

That cannot be done with keyword rules. Real orders don't say "発注します." They say "例の件、来週頭までにお願いできますか" or "いつもの条件で3本". They rely on shared context, honorifics, and omitted subjects. Distinguishing a binding work instruction from a casual question, from a status update, from an internal task — in Japanese, at scale, across a year of message history — is exactly what an LLM is good at and what nothing else can do. The field-extraction step then has to map fuzzy natural language onto legally-defined slots, including recognizing that "いつもの単価で" means the compensation amount is *not* stated in the legal sense even though both parties know what it means.

The remediation drafting is a second genuine AI job: producing a supplementary notice in appropriate Japanese business register that a 管理部長 will send to a counterparty without editing.

This is a workflow where AI collapses a task nobody can perform manually — reading every message in every partner channel — into something that runs nightly.

## 7. Localization angle

This is Japan-only by construction, and that is the moat, not a limitation.

- **Language:** Japanese order detection is the core technical asset. A generic English-first compliance tool cannot do this, and a Japanese team building it accumulates a labeled corpus of what real orders look like across industries.
- **Regulatory specificity:** The twelve 4条書面 fields, the dual capital/headcount scope test, the 60-day rule and the 30-day re-delegation rule, the 定期調査 cycle — this is deep, narrow, non-transferable domain knowledge.
- **Pricing:** Japanese mid-market SaaS norms run ¥10,000–100,000/month for legal and compliance tooling, with ¥100,000–300,000 initial setup accepted as normal. A ¥15,000/month product is unremarkably priced here.
- **Adjacent regime, same engine:** The Freelance Act imposes near-identical disclosure and 60-day duties on freelance engagements, with its own JFTC enforcement stream. Same detection engine, second buyer segment, no new core technology.
- **Sales culture:** Japanese mid-market buyers want a named vendor, a phone number, and a 導入支援 (implementation support) line item. That expectation is a barrier to a foreign entrant and an advantage to whoever shows up locally.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** ¥15,000/month (~$100) for up to 50 monitored counterparties; ¥40,000/month (~$270) up to 200; ¥90,000/month (~$600) above that. Add ¥150,000–300,000 one-time 導入支援 for channel scoping and historical backfill — normal in this market and a useful cash-flow bridge.
- **ACV:** ~¥300,000 (~$2,000) blended, including setup amortized across year one.
- **Rough math to $1M ARR:** 500 customers × ¥25,000/mo × 12 = ¥150M (~$1M). At a 20,000-company beachhead that's 2.5% penetration.
- **Rough math to $5M ARR:** ~1,800 customers at a higher blended ACV (¥40,000/mo), reached by expanding past the initial service-delegation beachhead into manufacturing-type delegation (the 300-employee tier) and by attaching the Freelance Act module as a paid add-on. Requires a real inside-sales function and probably one channel partnership with a 社労士 or accounting network.
- **Expansion path:** Counterparty-count tiers grow naturally. Add-ons: Freelance Act module, historical backfill for prior periods, multi-entity rollup for groups, and an audit-support export for firms actually under investigation. Cost side is favorable — inference on messages is cheap and shrinking, and nightly batch processing means no latency pressure.

## 9. Go-to-market wedge — first 100 customers

- **Advertising and production agencies first, by name.** METI and the JFTC issued guidance to **71 advertising agencies** in June 2026 and published the sweep. That industry now knows it is a target. JAAA membership lists plus the 帝国データバンク / TSR company databases give a filterable list of agencies in the 100–800 employee band. Direct mail plus phone — still the working channel for Japanese mid-market — with a one-page "the 71-agency sweep, and the seven questions the 定期調査 will ask you" leader. Realistic: 600 contacts, 8% meeting rate, 25% close on a paid pilot ≈ 12 customers from this segment alone.
- **Ride the 定期調査 calendar.** The survey goes to 130,000 companies annually and is now online. The four weeks before and during that window is when this problem is not theoretical. Time the entire outbound campaign to it, with a free "調査回答リスクチェック" — a self-serve tool that asks nine questions and tells them whether their honest answer to the survey would expose a gap. That's the top-of-funnel lead magnet, and it converts because the deadline is real and externally imposed.
- **士業 channel — 社労士, 行政書士, and 顧問弁護士 practices.** Legal consultation on Toritekihō runs ¥20,000–50,000/hour, so advisors are already fielding these questions and have no tool to hand clients afterward. A 20% recurring referral commission is standard and attractive. Sign 15 practices, each with 30–80 mid-market clients. Advisors bring warm, pre-qualified introductions and shortcut the trust problem a new vendor otherwise faces in Japan.
- **Industry-vertical repeat.** METI/JFTC sweeps are announced by industry. Every future sweep announcement is a pre-qualified list handed to you by the government. Advertising was 2026's; monitor for the next and be first to that vertical's trade association with a seminar.
- **Seminar co-hosting.** SMBC Consulting and similar already run paid Toritekihō training. Co-host a free 90-minute session on "the orders your team places outside the system," using the Kadokawa case as the anchor story. Japanese mid-market buyers convert from seminars at rates that would look absurd in the US.

## 10. Build complexity — justification

**Medium.** Off-the-shelf: Slack Discovery/Enterprise APIs and Microsoft Graph for message access, a frontier LLM for Japanese order detection and field extraction, standard web stack. The custom work is real but bounded: an evaluation set of Japanese order-vs-not-order messages good enough to keep false positives tolerable, the twelve-field extraction schema, accounting-system connectors (freee and Money Forward APIs first, CSV import as the universal fallback), and the reconciliation logic. Budget **4–5 months to v1 for two people**, with most of that spent on detection precision rather than plumbing — a compliance tool that cries wolf gets switched off in week two. Domain review by a lawyer who actually practices Toritekihō work is a non-negotiable line item, not an optional extra.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Employer-authorized monitoring of corporate chat for compliance is lawful in Japan with proper internal notice; product is read-only and channel-scoped by design. |
| Ethical — no harm / dark patterns | ✅ | Genuine tension around workplace monitoring — mitigated by scoping to external-partner channels, explicit exclusions, and framing as document reconciliation rather than employee scoring. Net effect protects freelancers and small suppliers, who are the law's intended beneficiaries. |
| Market exists (evidence above) | ✅ | 59.5% of ordering companies report unresolved compliance difficulty; 28.6% admit unpapered transactions; 130,000 companies surveyed annually. |
| 1–5 person team can build this | ✅ | Two people, 4–5 months. |
| Launchable with <$50K / ₹40L | ✅ | Inference and API costs are modest; main cost is founder time plus legal review. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | Real, recurring, with legal and reputational consequence — Kadokawa got named nationally. Held below 17 because the pain is periodic (survey cycle, enforcement sweep) rather than daily; between events, urgency fades and this can slip down the priority list. |
| Demand evidence | 15 | 13/15 | Unusually strong: multiple independent post-enactment surveys with consistent findings, published enforcement statistics trending up, an incumbent (freee) spending marketing budget educating the category. Not 15 because no one is yet demonstrably paying for *this specific* detection product. |
| Build feasibility | 15 | 11/15 | Standard stack, but Japanese order-detection precision is the whole ballgame and takes iteration. 4–5 months, two people. |
| Distribution clarity | 15 | 13/15 | Named, filterable lists (JAAA, TSR/TDB, the 71 publicly-swept agencies), a government-set annual deadline to time campaigns against, and an established 士業 referral channel. Docked for Japanese mid-market sales cycles being slower than the math suggests. |
| Revenue mechanics | 15 | 12/15 | Pricing sits squarely in Japanese mid-market norms; setup fees ease cash flow; five-year retention duty supports renewal. Docked because 500 customers via a phone-and-mail motion needs real sales headcount, which pressures margin below what a self-serve product would enjoy. |
| Time to first revenue | 10 | 7/10 | Paid pilots plausible at ~3 months post-launch given an externally-imposed deadline, but Japanese procurement rarely moves in four weeks. |
| Defensibility | 10 | 5/10 | Honest assessment. The regulatory knowledge and Japanese detection corpus compound, and workflow lock-in grows with retained records — but freee or Money Forward could bolt chat monitoring onto an existing suite and arrive with distribution you can't match. This is an execution-and-speed moat, not a structural one. |
| **Total** | **100** | **77/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required`

Needs someone who can build reliable Japanese NLP extraction *and* native-level Japanese business fluency for both the product output and the sales motion. A non-Japanese-speaking founder cannot run this. Best shape: a Japanese technical founder paired with a Toritekihō-literate advisor, or a bilingual technical founder with a 士業 partner.

### Key assumptions to validate (3–5)

1. **Assumption:** Companies will grant chat access to a compliance vendor. **How to test:** Ask 20 target-band 管理部長 directly, before building. If the answer is a reflexive no, the whole thesis collapses — this is the assumption that decides the idea.
2. **Assumption:** Order detection in real Japanese chat can hit useful precision. **How to test:** Get 3 friendly companies to share 3 months of anonymized partner-channel history; measure precision/recall against hand-labeled ground truth. Target ≥85% precision at ≥70% recall.
3. **Assumption:** The gap is real at scale — meaningful numbers of unpapered orders actually exist. **How to test:** In the same historical sample, count orders with no matching PO. If it's under 5% of orders, the pain is smaller than the surveys imply.
4. **Assumption:** ¥15,000/month clears the bar without a procurement committee. **How to test:** Price-test across 30 sales conversations; watch for the threshold above which approval escalates.
5. **Assumption:** 士業 practices will actively refer. **How to test:** Pitch 10 practices; require 3 signed referral agreements before counting the channel as real.

### Risk flags

1. **Incumbent encroachment:** freee 業務委託管理 and Money Forward already own the workflow, the customer relationship, and the accounting data. Chat ingestion is a feature they could ship. The defense is speed, Japanese detection quality, and owning the "unpapered order" positioning before they name it — but this is the risk that most plausibly kills the company in year two.
2. **Privacy and culture:** Chat monitoring is sensitive in any market and Japanese workplaces are conservative about it. Mishandled positioning — or one story about the tool being used for performance management — poisons the well. Read-only, channel-scoped, external-partner-only, with worker-side benefit made explicit.
3. **Platform dependency:** Slack Discovery API access is gated to higher-tier plans; Teams requires Graph permissions an IT department must approve. Both are single points of failure and both vendors could change terms.
4. **Regulatory timing:** Enforcement intensity could plateau. If FY2027 recommendations fall back toward the old baseline, the urgency that drives the sale weakens considerably.
5. **Detection failure mode is asymmetric:** False negatives are invisible and dangerous — a customer who believes they're covered and isn't will blame the tool when a finding lands. Product must be explicit that it reduces risk rather than guaranteeing coverage, and that framing has to survive contact with the sales team.

## 14. Structured verdict

```
Score:                  77/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Japanese technical founder (or bilingual equivalent) with a
                        Toritekihō-practicing legal advisor; comfortable with
                        phone-and-seminar mid-market sales, not self-serve growth
Time to revenue:        4–6 months (4–5 build, then paid pilots)
Capital to launch:      ¥3–5M (~$20–33K) — mostly founder time, legal review, inference
Top 3 assumptions to validate first:
  1. Chat access is grantable — 20 direct conversations with 管理部長 before writing code
  2. Japanese order detection reaches ≥85% precision — label a real 3-month message corpus
  3. Unpapered orders exceed 5% of real order volume — measure in the same corpus
Kill criteria:
  - Abandon if fewer than 5 of 20 target companies will discuss granting chat access
  - Abandon if detection precision stays below 80% after 8 weeks of iteration
  - Abandon if freee or Money Forward ships chat-based order detection before your v1
  - Abandon if the unpapered-order rate in real customer data is under 5%
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Build the target list. Filter TSR/TDB for service-delegation companies at 100–800 employees, cross-reference JAAA membership, and pull the publicly-identified advertising agencies from the June 2026 METI sweep. Target 200 named companies with contact paths.
- **Day 3–4:** Call and email 20 of them. One question first, before any pitch: *"Since January, do you know whether every order your team placed to an outside partner has a compliant 4条書面 behind it?"* Then the real test: *"If a tool could read your partner Slack channels and tell you, would you be able to authorize that?"* Log the yes/no/maybe and — more important — the reason behind each no.
- **Day 5:** Ask the warmest 3 for a sample. Three months of anonymized partner-channel export. Hand-label 200 messages and measure how many are orders, how many carry all twelve statutory fields, and how many have no corresponding PO.

**Falsifiable outcome:** Proceed only if **≥5 of 20 companies will seriously discuss granting chat access** AND **the hand-labeled sample shows >5% of detected orders have no compliant document behind them**. If companies won't grant access, the product cannot exist regardless of how real the pain is — that's the binding constraint, and it gets tested in week one before a line of code is written. If access is grantable but the gap is small, the surveys are measuring anxiety rather than exposure, and the pitch has no teeth.
