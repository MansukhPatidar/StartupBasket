---
title: "FudeMark — Freelance-Act scribe for Japan kojin-jigyonushi"
slug: japan-freelance-act-scribe
date: 2026-05-28
category: Compliance / Japan
complexity: Medium
score: 75
verdict: GO
confidence: Medium
oneLiner: "Scans client contracts for Freelance-Act gaps and files QIS-cliff returns for Japanese solo freelancers."
tags:
  vertical: Compliance
  model: SaaS
  geography: Global
  secondary: [Japan, Freelance, Solo-builder, Multilingual, AI-agent, Compliance-driven]
axes:
  problem: 16
  demand: 12
  build: 11
  distribution: 10
  revenue: 11
  time: 8
  defensibility: 7
founderFit: [domain-expertise-required, technical-heavy]
featured: false
---

# FudeMark — Freelance-Act scribe for Japan kojin-jigyonushi

## 1. One-liner

Scans client contracts for Freelance-Act gaps and files QIS-cliff returns for Japanese solo freelancers.

## 2. Trend signal — why now?

Two regulatory bombs landed on Japanese solo freelancers within 14 months of each other and a third drops Dec 31 2026. Together they push every 個人事業主 (kojin-jigyonushi) into compliance work they have no tool for.

- **Freelance Act in force Nov 1 2024.** Every B2B engagement with a freelancer needs a written contract listing nine specific items (Article 3 of the Act on Ensuring Proper Transactions Involving Specified Entrusted Business Operators): party names, entrust date, scope, delivery date, delivery location, inspection completion date, remuneration amount/calculation, payment date, and payment method. Payment must be ≤60 days from delivery. Harassment-policy contact required. Fines up to ¥500K + JFTC named-shaming.
- **JFTC enforcement already biting.** First annual report May 2025: 137 new cases initiated, 96 processed, 54 warnings issued — primarily for "insufficient disclosure of transaction terms" and "compensation payments to freelancers exceeding 60 days." March 2025: JFTC issued guidance to 45 operators across game software, animation, relaxation services, fitness clubs. Dec 2025: cautions to four live-streaming agencies for restrictive post-contract clauses. The pattern: client companies get hit, freelancer either loses the client or has to fix the contract themselves.
- **QIS 20% special expires Dec 31 2026.** From Jan 1 2027 the relief drops to a 30% transitional measure for two more years, then full liability. Every freelancer who registered as 適格請求書発行事業者 (qualified-invoice issuer) needs to re-decide Q4 2026: stay registered (pay more tax), de-register (lose B2B clients who can't claim input credit), or stay registered and renegotiate rates upward. The decision turns on actual invoice volume and client mix — accountants charge ¥30K-50K to model it.
- **Incumbent invoicing tools (freee Freelance ¥980/mo, MoneyForward Cloud ¥980/mo, Misoca ¥800/mo) handle invoice issuance** but not the contract-side scan. Sollective FreelanceOS is free + English-first, targets bilingual foreign-resident contractors, ~2K active users — not the 1.6M domestic 個人事業主 base. None of these read the client's contract PDF and tell the freelancer "you're missing items 4, 6, 8 of the nine, and your payment terms violate the 60-day rule."
- **LLM Japanese fluency at consumer cost.** GPT-4-class Japanese reading + JSON extraction at ~¥0.5-2 per contract page. OCR for scanned PDFs via Google Vision ¥0.15/page. e-Tax API + xBRL filing free. The 2-hour zeirishi consult collapses to a ¥1980/mo subscription.

Provenance:
  - Signal 1: JFTC initiated 137 cases, processed 96, issued 54 warnings on Freelance Act in first 12 months; first enforcement March 2025 across game/anime/fitness — https://www.lexology.com/library/detail.aspx?g=964b662d-4702-42ae-bbd1-06f15c4bcd25 — May 2025
  - Signal 2: QIS 20% special treatment expires Dec 31 2026, replaced by 30% transitional 2027-28; ¥10M sales threshold; ~1.6M sole-proprietors in Japan — https://www.sollective.jp/en/blog/qualified-invoice-system-registration-pros-cons-en — 2025
  - Signal 3: Existing tools (freee/MF/Misoca/Sollective) cover invoice issuance only; contract-side compliance check absent; CrowdWorks alone has 6.7M registered freelancers — https://crowdworks.co.jp/en/ + https://www.sollective.jp/en/invoices/about — 2026
  Category: Regulatory arbitrage

## 3. The opportunity

Two cliffs and a 1.6M-person addressable base with no purpose-built tool. The Freelance Act made the **contract** an enforceable artifact (nine mandatory items, 60-day rule, harassment-contact requirement) and the QIS made the **invoice** an enforceable artifact (T-number, two-rate tax split, scope-of-supply line) — but the entire Japanese invoicing-SaaS market still treats the contract as out-of-scope and treats the QIS-cliff decision as "ask your zeirishi."

A focused tool that reads the client-supplied contract PDF, flags the nine-item gaps in Japanese, drafts the redline reply ("以下の条項の追加をお願いします"), generates QIS-format invoices that won't bounce in client AP, and runs the Dec-2026 "stay-or-drop" calculator using the freelancer's actual invoice history is a product no domestic invoicing platform ships. Sollective is the closest competitor but its English-first positioning and free-tier-only revenue model leaves the domestic Japanese-language market wide open.

## 4. Target market

- **Primary customer:** Japanese solo freelancers (個人事業主) — IT contractors, designers, illustrators, video editors, translators, marketing freelancers — with ¥3-10M annual revenue and 1-5 client invoices per month. The QIS-registered subset (those with ≥ a few B2B clients) is most acute.
- **Why they buy:** They get a 20-page Word contract from a corporate client, can't tell if it's Freelance-Act compliant, don't want to look ignorant by asking, and definitely don't want to pay ¥30K to a zeirishi for a 30-minute review. Then they need to issue a 適格請求書 for that engagement and they're never sure whether the T-number renders correctly in the client's AP system. Year-end they need to do kakuteishinkoku consumption-tax filing and decide stay-or-drop on QIS registration.
- **Rough TAM reasoning:** ~1.6M registered 個人事業主 (Japan Statistics Bureau, 2021) + ~2-3M additional declared freelancers across CrowdWorks/Lancers/coconala (overlap with kojin-jigyonushi); MIC/MHLW estimate 4-5M total. QIS-registered subset estimated 600K-1M. Serviceable narrow target: ~300K-500K active B2B-leaning solo freelancers in IT/creative/translation.
- **Why now for them:** The JFTC just published a 54-warning enforcement track record in May 2025; client companies are getting nervous and pushing freelancers to "fix our contract" rather than absorb the JFTC risk themselves. The Dec 31 2026 QIS cliff is now in the next two quarters — every QIS-registered freelancer needs to re-decide by year-end and the 30%-special pivot needs new invoice templates.

## 5. Product sketch (MVP)

- Upload a client-sent contract PDF/Word → returns a Japanese-language compliance report against the nine Article-3 items + 60-day rule + harassment-contact requirement + post-contract-restriction clauses (the JFTC live-streaming-agency target zone)
- One-click redline reply generator in Japanese ("不足条項として以下を追記いただけますと幸いです…") with the missing clauses pre-drafted
- QIS-compliant invoice builder: T-number registry lookup, two-rate (10%/8% reduced) tax split, scope-of-supply line, automatic withholding-tax (源泉徴収) calculation for design/writing/lecture income categories
- Bidirectional sync with MoneyForward Cloud Invoice and Misoca (both expose APIs) so existing users keep their accounting flow
- Dec-2026 stay-or-drop simulator: ingest 12 months of issued invoices + client list, model 20%-special vs 30%-special vs full-liability cash flow, output a one-page Japanese PDF the freelancer can take to their zeirishi
- Year-end consumption-tax kakuteishinkoku draft: pre-fills the e-Tax form with calculated 課税売上高 / 課税仕入高 / consumption-tax owed under the chosen relief tier
- 7-year retention vault for contracts + invoices + kakuteishinkoku (statute of limitations on tax + 5-year Freelance-Act records)
- Mobile-first Japanese UI; LINE-bot notification for incoming-payment 60-day-rule countdowns (alerts the freelancer when a client is about to breach Article 4)

## 6. AI angle — what's load-bearing

Three places AI is the product, not decoration:

1. **Contract scan.** Reading a 15-page Japanese B2B contract and extracting the nine Article-3 items + payment-term clauses + restrictive-covenant clauses is exactly the structured-extraction task GPT-4o/Claude handle well in Japanese. Rule-based parsing fails on the wide variation of Japanese contract templates (each client has their own jouhou/keiyaku style); an LLM with a Freelance-Act rubric in the system prompt nails it. Without this, the product is just an invoice tool — and freee already exists.
2. **Redline draft in Japanese keigo.** Generating the polite Japanese keigo email body that asks the client to add the missing clauses without losing the contract — solo freelancers will pay ¥1980/mo precisely because writing this email themselves is the part they dread.
3. **Stay-or-drop simulator narrative.** The numerical model is straightforward; the value-add is the Japanese-language one-page narrative summary that explains the trade-off to the freelancer (and the zeirishi if they consult one). LLM-generated, conditioned on the actual invoice mix.

Remove AI and you have a free Sollective clone.

## 7. Localization angle (if any)

This is the **localization play** — there is no global version. The product is a 100% Japan-localized regulatory-arbitrage SaaS:
- All UI, contract templates, redline replies, and tax narratives in Japanese keigo
- Direct integration with the Japanese T-number registry (国税庁適格請求書発行事業者公表サイト), e-Tax, MoneyForward, Misoca
- Pricing in JPY at Japanese-freelancer wallet levels (¥1980-4980/mo)
- LINE distribution channel (CrowdWorks/Lancers freelancers live on LINE, not WhatsApp/Slack)
- Hanko/electronic-seal support for the contract reply PDFs

A global build would lose to local accounting platforms inside 6 months.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** Solo ¥1,980/mo (5 contracts/invoices/mo, 1 QIS simulator/yr) / Pro ¥3,980/mo (unlimited + LINE alerts + kakuteishinkoku autofile) / Studio ¥9,800/mo (small design/dev studios, up to 5 freelancers, shared retention vault)
- **One-shot adders:** ¥9,800 Dec-2026 stay-or-drop packet for non-subscribers (heavy Q4 2026 spike); ¥4,980 contract-audit per gnarly Word doc; ¥14,800 year-end kakuteishinkoku express filing
- **ACV:** Blended ¥35K-45K (~$230-300) — most users on Pro for 8-10 months, some Solo, expansion to Studio when they incorporate
- **Rough math to $1M ARR:** 3,500 paying users × ¥40K blended ACV × ~¥147/USD = $950K → ~$1M. That is 0.7% saturation of the 500K serviceable target (300K-500K B2B-leaning Japanese solo freelancers). Achievable in 12-18 months with a Q4 2026 QIS-cliff push.
- **Rough math to $5M ARR:** 17,500 paying users (3.5% saturation) + Studio expansion driving blended ACV to ¥45K. Realistic in 30-36 months if 2-3 tax-prep partnerships (MoneyForward Tax, freee tax-pro network, regional zeirishi associations) land.
- **Expansion path:** (1) Solo → Pro upgrade trigger when first contract-audit fails; (2) Pro → Studio when freelancer incorporates 法人化 (a known life-stage for ¥8M+ revenue freelancers); (3) cross-sell year-end kakuteishinkoku express filing; (4) cross-sell to zeirishi (tax accountants) as a white-label per-client tool at ¥980/client/mo.

## 9. Go-to-market wedge — first 100 customers

- **Pre-launch:** Build a free standalone "Freelance-Act 9-item checker" web tool. Single-page, upload contract PDF, get a Japanese report. Run paid Twitter/X ads ¥50K-100K targeting Japanese freelancer keywords (フリーランス, 個人事業主, 適格請求書, インボイス制度). Capture emails for ¥1,980/mo waitlist.
- **CrowdWorks/Lancers/coconala outreach:** Cold-DM the top 500 active QIS-registered freelancers visible on each platform's profile (T-number is often listed publicly). Personalized DM in Japanese: "Saw your work in [category]. We just shipped FudeMark — checks the contracts clients send you against the Freelance Act and drafts the redline reply in keigo. Free 30-day trial. [link]." 1-2% reply, 30-50% conversion of repliers = 5-15 trials per 500-DM batch.
- **LINE distribution:** Partner with 3-5 Japanese freelance-focused LINE accounts/Discord groups (フリーランス協会, MailMate's Japanese-living community, CrowdWorks alumni groups). Offer 1-month free codes + ¥1,000 referral.
- **Zeirishi co-sell:** Approach 50 mid-tier zeirishi (tax accountants) in Tokyo/Osaka/Nagoya who specialize in freelance clients. Offer them a ¥980/client/mo white-label tier — they bundle it into their ¥3,000-5,000/mo monthly bookkeeping fee. Each zeirishi has 30-200 freelance clients.
- **QIS-cliff content blitz Q4 2026:** Publish a Japanese-language calculator microsite ("インボイス制度2027年継続するか診断") that ranks at the top of Google JP for "インボイス 2026 終了" + "20%特例 終了". Convert calculator users to the ¥9,800 Dec-2026 stay-or-drop packet, then upsell to ¥1,980/mo subscription.

## 10. Build complexity — justification

**Medium.** Two non-trivial pieces: (1) Japanese contract OCR + LLM extraction tuned for the nine Article-3 items — needs a labeled eval set of ~100 real contracts to hit acceptable accuracy; off-the-shelf OCR (Google Vision / Azure DocAI) handles the OCR side, but the extraction prompt needs careful Japanese-legal-language tuning. (2) MoneyForward / Misoca / e-Tax integrations are documented but not trivial — count ~2 weeks each. The rest (auth, billing, T-number registry lookup, QIS-cliff calculator) is standard SaaS. Pair ships in 14-18 weeks; solo in 5-6 months. Domain expertise (a Japanese-resident founder or close zeirishi advisor) is critical — without it, the keigo redline output will read like a translation and Japanese freelancers will pass.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Compliance assistant, not a zeirishi substitute — clear disclaimer "本サービスは税理士業務を行うものではありません" required, standard for the category (freee/MF do the same) |
| Ethical — no harm / dark patterns | ✅ | Helps freelancers defend themselves against unfair contracts; transparent pricing |
| Market exists (evidence above) | ✅ | 1.6M kojin-jigyonushi + JFTC enforcement track record + competing paid invoicing SaaS |
| 1–5 person team can build this | ✅ | Pair (one bilingual Japanese-resident engineer + one domain advisor) |
| Launchable with <$50K / ₹40L | ✅ | $20-30K covers dev + LLM credits + initial paid ads |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | JFTC enforcement is biting (137 cases, 54 warnings, public name-shaming live-streaming agencies Dec 2025), and Dec 31 2026 QIS cliff forces every QIS-registered freelancer to re-decide. Pain is regular (per-contract) but not daily — knocks it from 18 to 16. |
| Demand evidence | 15 | 12/15 | Multiple independent signals: paid invoicing-SaaS market (freee Freelance ¥980/mo, MF ¥980/mo, Misoca ¥800/mo, Sollective free); JFTC enforcement data; CrowdWorks 6.7M registered; the explicit ¥10K-30K zeirishi spot-consult fee for contract review. Lose 3 because no direct "contract-side compliance" tool exists yet, so the specific demand for this exact wedge is inferred not observed. |
| Build feasibility | 15 | 11/15 | Japanese-legal LLM extraction needs a labeled eval set + careful prompt tuning. MF/Misoca/e-Tax integrations are 2 weeks each. Achievable in 14-18 weeks for a pair, but the Japanese-keigo polish is a discipline cost. |
| Distribution clarity | 15 | 10/15 | CrowdWorks/Lancers cold DM, LINE communities, zeirishi co-sell, QIS-cliff content microsite — four named channels. But cold-DM in Japan has lower yield than US/India (cultural reserve); ad costs in Japan higher than expected. -5. |
| Revenue mechanics | 15 | 11/15 | Pricing benchmarked against freee/MF/Misoca. ACV math works. The risk: freelancers downgrade to Solo after Dec 2026 cliff passes, churn spike. -4. |
| Time to first revenue | 10 | 8/10 | Pre-sell waitlist via free 9-item-checker tool can convert paying users in week 1 of launch. Q4 2026 stay-or-drop packet can pre-sell starting Aug 2026. |
| Defensibility | 10 | 7/10 | Japanese-language regulatory wedge + integration depth + zeirishi channel = soft moat. Not patent-grade but a US/global player needs 9-12 months to localize. |
| **Total** | **100** | **75/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`domain-expertise-required` · `technical-heavy`

Need a Japanese-resident or fluent-Japanese-speaking founder. A non-resident bilingual founder works if they have a zeirishi advisor on hand. Without the keigo polish, this fails on first customer feedback.

### Key assumptions to validate (3–5)

1. **Assumption:** Solo Japanese freelancers will pay ¥1,980/mo for contract+invoice+kakuteishinkoku combined, not just invoicing. **How to test:** Run the free 9-item-checker waitlist landing page on Twitter/X JP ads for 3 weeks pre-launch; convert ≥5% of 500 waitlist signups to a "early-bird ¥1,480/mo" paid pre-order. <5% = product is invoicing-only and freee already won.
2. **Assumption:** LLM extraction hits ≥85% accuracy on the nine Article-3 items across 50 real Japanese B2B contract templates. **How to test:** Hand-label 50 contracts (gather from freelancer-association archives + Crunchbase contract templates + sample contracts on JFTC website), run extraction, measure per-field precision/recall. <85% = needs Japanese-fine-tuning, costs jump 3×.
3. **Assumption:** Zeirishi will white-label at ¥980/client/mo and push to their book. **How to test:** Cold-call 30 mid-tier Tokyo/Osaka zeirishi; pitch the white-label tier; close ≥3 paid pilots inside 6 weeks. <3 = zeirishi channel is dead, the QIS-cliff content microsite carries all distribution.
4. **Assumption:** JFTC enforcement continues to escalate through 2026-27 (more warnings + first formal fines on freelancer side). **How to test:** Track JFTC press releases monthly; if 12-month rolling case count drops by >30% from May 2025 baseline (137 cases), the regulatory pressure that drives demand fades.
5. **Assumption:** Sollective doesn't pivot to a domestic Japanese-language paid tier within 6 months. **How to test:** Monitor Sollective's product releases + Crunchbase funding events monthly. A pivot from English-first foreign-resident focus to mass-market domestic kills the wedge.

### Risk flags

1. **Platform dependency on MoneyForward/Misoca/e-Tax APIs.** If any of the three change auth or kill third-party access (Japanese SaaS has a history of restrictive API policies), the product loses a major integration benefit.
2. **Regulatory drift.** If the JFTC pauses enforcement post-2026 election cycle (Japan has had Freelance Act enforcement softening under specific business-lobby pressure), demand collapses.
3. **Competitor pivot.** freee or MoneyForward could ship a contract-side scanner inside their existing subscription within 9 months. Their distribution advantage is brutal — they own the freelancer's existing accounting stack.
4. **Domain-expertise gatekeeping.** Without Japanese-keigo polish, first-customer NPS will be negative. A non-Japanese-resident founder needs a deep zeirishi or attorney co-founder day one.

## 14. Structured verdict

```
Score:                  75/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Japanese-resident bilingual technical founder + zeirishi advisor (or pair: Japanese domain + technical co-founder)
Time to revenue:        8-12 weeks (pre-sell via free 9-item-checker, paying users by week 12)
Capital to launch:      ¥3-5M (~$20-30K) — dev runway + LLM credits + ¥200K initial paid ad budget
Top 3 assumptions to validate first:
  1. ≥5% conversion from free 9-item-checker waitlist to ¥1,480/mo early-bird paid pre-order (500 signups → 25 paying)
  2. LLM hits ≥85% precision/recall on nine Article-3 items across 50 hand-labeled real contracts
  3. ≥3 paid zeirishi white-label pilots from 30 cold pitches inside 6 weeks
Kill criteria:
  - Abandon if free-tool conversion <2% after 500 waitlist signups
  - Abandon if freee or MoneyForward ships a competing contract-side scanner before v1 (Q4 2026)
  - Abandon if JFTC published-case count drops below 75 in the 12 months ending May 2027 (regulatory pressure has faded)
  - Abandon if Sollective pivots to Japanese-first paid tier before our launch
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Ship a single-page "Freelance Act 9-item checker" — upload a contract PDF, return a Japanese-language report against the nine Article-3 items. Pure GPT-4o extraction with hand-tuned prompt. Free, email-gated.
- **Day 3:** Twitter/X JP ads ¥30K targeting フリーランス契約 + 適格請求書 + インボイス制度. Capture 200-500 signups + email-list.
- **Day 4:** Cold-DM 200 QIS-registered freelancers on CrowdWorks/Lancers offering free contract check. Manual; track open-rate, click-through, contracts uploaded.
- **Day 5:** Email all signups + DMed freelancers offering ¥1,480/mo early-bird Pro pre-order (Stripe link). Measure: how many of 200-700 contacts buy.
- **Decision:** Go if ≥10 paid pre-orders at ¥1,480 inside 5 days (≥1.5% blended conversion) AND ≥30 contracts were uploaded for review (signal that the contract-side wedge resonates). Otherwise rework or PASS.

The validation produces a falsifiable result: paid pre-orders, not "interest."
