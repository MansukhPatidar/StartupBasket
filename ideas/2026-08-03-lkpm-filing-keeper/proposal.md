---
title: "IzinKeeper — permit survival service for Indonesian sellers"
slug: lkpm-filing-keeper
date: 2026-08-03
category: Compliance / Indonesia-SMB — Online Sellers and Small Manufacturers Holding an NIB Under OSS RBA
complexity: Low
score: 74
verdict: GO
confidence: Medium
oneLiner: "Files the OSS report that keeps an Indonesian seller's business licence alive, before two missed periods kill it."
tags:
  vertical: Compliance
  model: SaaS
  geography: SEA
  secondary: [WhatsApp-first, Multilingual, SMB, Compliance-driven, AI-agent]
axes:
  problem: 16
  demand: 11
  build: 13
  distribution: 12
  revenue: 11
  time: 8
  defensibility: 3
founderFit: [operations-heavy, domain-expertise-required]
featured: false
---

# IzinKeeper

## 1. One-liner

Files the OSS report that keeps an Indonesian seller's business licence alive, before two missed periods kill it.

## 2. Trend signal — why now?

Three things landed on Indonesian micro-sellers inside twelve months, and they compound.

**One — the platforms are about to become the enforcers.** Permendag 19/2026 took effect 8 June 2026. It requires marketplaces to verify every seller's NIB, display a *"Dalam Proses Legalisasi"* label during the grace period, and **suspend seller access when the deadline expires**. Existing sellers get an 18-month transition from 8 June 2026 — so the cliff is **8 December 2027**. New sellers get six months from registration. This is not a regulator writing letters; it is Shopee and Tokopedia switching off your storefront, and the platforms themselves face blacklisting or licence revocation if they fail to suspend you.

**Two — the base of non-compliance is enormous and now has a countdown.** As of February 2026, **40 million MSMEs still had no NIB**. A July 2026 Kompas report confirmed that the majority of e-commerce traders still lack one. Meanwhile the Investment Ministry counted just over 12 million MSMEs holding an NIB by early 2026 — well short of target.

**Three — getting the NIB is the easy part, and that is exactly the trap.** Registration through OSS is free, and consultants will do it for **Rp 99,000 in one day**. So the filing itself is a commodity — there is no business selling it. The obligation that actually bites arrives *after* issuance: **LKPM**, the investment activity report. Usaha mikro file every six months; usaha kecil file quarterly. Miss **two consecutive periods** and you enter the sanctions ladder — written warning, restriction of business activity, suspension, then **NIB revocation and blacklisting**, which makes obtaining a future permit far harder. Sanctions are lifted only by filing the arrears *and* paying the administrative fine. Because OSS monitors this automatically, non-compliance is easier to detect than under the old manual system.

Layered on top: **KBLI 2025** forced a full reclassification, with an adjustment deadline of **18 June 2026** — codes were split and merged, KBLI 6312 was deleted, and digital platforms are now classified by the service they actually provide rather than the technology. A wrong or unmigrated code can flag or block the NIB in OSS, and changing the code changes the risk tier and the secondary documents required.

The tell that this is underserved: BKPM's own answer is **free LKPM Clinics** and hand-holding by officers, opened for Q1, Q2 and Semester I 2026. When a government's remedy for a reporting obligation is staffing a help desk, the reporting obligation is too hard.

```
Provenance:
  - Signal 1 (demand): 40 million MSMEs still lack an NIB; majority of e-commerce traders unregistered — https://rmol.id/bisnis/read/2026/02/24/698493/40-juta-umkm-belum-punya-nib-pemerintah-sederhanakan-izin-lokasi + https://money.kompas.com/read/2026/07/21/071745626/mayoritas-pedagang-e-commerce-belum-punya-nib-ini-alasannya — Feb & Jul 2026
  - Signal 2 (feasibility): BKPM runs free manual LKPM Clinics because micro/small filers cannot complete the form unaided; no third-party filing software found — https://ukmindonesia.id/baca-deskripsi-program/klinik-lkpm-bkpm-hadir-juli-2026-bantu-pelaku-usaha-lapor-tepat-waktu — Jul 2026
  - Signal 3 (economic): Permendag 19/2026 makes platforms suspend unlicensed sellers after an 18-month transition ending 8 Dec 2027; sanctions ladder ends in NIB revocation and blacklisting — https://www.dfdl.com/insights/legal-and-tax-updates/indonesia-ecommerce-regulation-permendag-19-2026/ — Jun 2026
  Category: Regulatory arbitrage
```

## 3. The opportunity

The obvious business here is "help sellers get an NIB." That business is dead on arrival — the state does it free and a *biro jasa* does it for six dollars. I looked at it and rejected it.

The real gap is the **annuity after the permit**. An NIB is not a certificate you frame; it is a subscription to an obligation. Every quarter or half-year the holder owes an LKPM containing investment realisation figures, labour data split by gender, and operational status. Two consecutive misses starts a ladder that ends with the licence revoked and the owner blacklisted. The seller who paid Rp 99,000 in 2026 has no idea any of this exists — the consultant took the fee, filed once, and vanished. That is a structural handoff failure, and it is about to collide with a platform-enforced deadline.

The incumbent is not a software company. The incumbent is **a one-off filing agent with no retention motive**, plus a government help desk. Neither has any reason to remember you in month seven. A product that (a) knows your filing calendar, (b) nags you on the channel you actually read, and (c) turns a confusing form into four questions in Bahasa Indonesia, beats both — not because it is cleverer, but because it *persists*.

The wedge is sequencing. Everyone else is selling registration into a crowded, zero-margin moment. I want to sell the thing that keeps the registration alive, to people who have already paid once and don't know they are not done.

## 4. Target market

- **Primary customer:** Indonesian *usaha mikro* and *usaha kecil* who already hold an NIB and sell on Shopee, Tokopedia/TikTok Shop, or run a small workshop — typically the owner-operator, 1–10 staff, turnover under the Rp 4.8 billion MSME ceiling. Skew: sellers who registered in the 2024–2026 NIB push and are now inside the reporting regime without realising it.
- **Why they buy:** Not because they love compliance. Because their storefront is the business, and Permendag 19/2026 hands the platform an obligation to switch it off. The fear is concrete and dated, and it is denominated in lost GMV, not in fines.
- **Rough TAM reasoning:** Just over 12 million MSMEs held an NIB by early 2026, and every one of them carries a periodic filing duty. Tokopedia alone hosts around 12 million sellers. I do not need a large share of that: 5,000 paying accounts is a real business here, and that is roughly 0.04% of NIB holders.
- **Why now for them:** Two clocks. KBLI 2025 adjustment passed 18 June 2026, so codes may already be misaligned and flagging in OSS. The platform suspension cliff lands 8 December 2027. Between them sits a filing calendar that runs every quarter regardless.

A caution I will not paper over: the 40 million figure is the *unregistered* pool, and unregistered sellers are not my customer on day one — they have no NIB and therefore no LKPM duty. My customer is the 12 million who already registered. The 40 million matter as the pipeline the platforms are about to force into registration before December 2027.

## 5. Product sketch (MVP)

- **Filing calendar from your NIB** — enter the NIB, get your actual schedule (six-monthly for mikro, quarterly for kecil) with the next due date and the window dates.
- **WhatsApp reminders that escalate** — nudges at 14 days, 3 days, and on the day. WhatsApp because that is where Indonesian small sellers actually live; email is a graveyard.
- **The form as four questions** — LKPM asks for investment realisation, labour count by gender, and operational status. In plain Bahasa Indonesia, most micro-sellers can answer that in under three minutes if someone asks properly instead of showing them a government form.
- **Arrears triage** — tell the seller how many periods they have already missed and where they sit on the sanctions ladder, since the exit route requires filing the back reports *and* paying the fine.
- **KBLI health check** — flag whether the registered code survived the KBLI 2025 migration, and whether the code matches what the seller actually sells. Mismatch is treated as unlicensed activity.
- **Permendag readiness card** — a one-screen status showing whether the seller's NIB and licence documents will satisfy platform verification before the December 2027 cliff.
- **Filing receipt vault** — every submitted report and its proof, retrievable, so a marketplace verification request takes one minute.

Deliberately out of scope for v1: no automated submission into OSS. I assist and prepare; the seller submits. Filing *for* someone through a government portal on their credentials is a liability and an ops burden I do not want in month one.

## 6. AI angle — what's load-bearing

Strip the AI out and this degrades into a calendar app, so let me be precise about where it carries weight.

**Translating a bureaucrat's form into a shopkeeper's language.** The documented failure is that micro sellers are "confused about how to fill it correctly, which columns need filling, and what data to prepare" — BKPM staffs clinics for exactly this. A model that takes the seller's freeform Bahasa Indonesia answer ("I bought a sealing machine for two million and hired my cousin") and maps it into investment realisation and labour fields is doing the clinic officer's job at zero marginal cost. That is the load-bearing use.

**KBLI matching.** Picking the right code from a many-thousand-entry classification that was just resplit is a semantic matching problem against the seller's actual product listings. This is the single hardest thing a *biro jasa* charges Rp 2–5 million to get right for larger firms.

**Voice input.** Realtime speech pricing now runs roughly $0.007–$0.09 per conversation minute depending on stack, with cascaded configurations at the low end. At the cheap end, a voice-answered filing interview costs cents — which matters enormously for a Rp 49,000/month product serving users who type slowly on phones.

What is *not* AI: the calendar, the reminders, the receipt vault. I am not going to pretend those are intelligent.

## 7. Localization angle

This is a localization play end to end — it does not exist as a global product and should not.

- **Language:** Bahasa Indonesia first, and specifically *plain* Bahasa, not the register of the regulation. Regional-language support is a later nicety, not a wedge.
- **Channel:** WhatsApp-first. Indonesian micro-merchants run their businesses in it.
- **Payment rails:** QRIS and GoPay/OVO/DANA. Card-first billing would kill conversion at this price point.
- **Pricing shape:** Rp 49,000/month works where $29/month is absurd. The whole product must be built to a cost structure that survives sub-$4 ARPU — which is precisely why cheap inference matters here and did not five years ago.
- **Regulatory quirk as the product:** OSS RBA, KBLI, LKPM and Permendag 19/2026 are Indonesia-specific. There is no global version of this.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** Rp 49,000/month (~$3) self-serve for mikro; Rp 149,000/month (~$9) for kecil, who file quarterly and have more to lose. One-off **arrears rescue** at Rp 350,000 (~$21) for sellers already two periods down — this is the highest-intent moment and should be priced as a service, not a subscription.
- **ACV:** ~$40–$100 blended, assuming mix skews mikro.
- **Math to $1M ARR:** ~15,000 paying accounts at a $65 blended ACV. Against 12M+ NIB holders that is ~0.12% penetration. The number is small; the challenge is not TAM, it is collection and churn at $3/month.
- **Math to $5M ARR:** needs either 60,000+ accounts or, more realistically, a shift in mix — selling seats to the *biro jasa* and accounting firms who each manage hundreds of small clients, at Rp 1.5–3M/month per firm. Honestly, the B2B2C route is the likelier path past $1M, and I would plan for it rather than grinding self-serve to 60,000.
- **Expansion path:** arrears rescue → annual prepay (better for churn at this price) → KBLI correction as a paid one-off → multi-entity dashboards for agents. Adjacent obligations (halal certification, P-IRT for food sellers) are natural attachments once the calendar habit exists.

The uncomfortable truth in this model: at Rp 49,000/month, payment failure and churn will hurt more than acquisition. Annual prepay via QRIS at Rp 449,000 is probably the real product.

## 9. Go-to-market wedge — first 100 customers

- **Mine the OSS-adjacent agents, not the sellers.** There are hundreds of *biro jasa* advertising NIB filing from Rp 99,000 (Sribu, nib-oss.id, legalkreatif, biro-jasa.org and dozens more). Every one of them has a customer list of people who filed once and were never told about LKPM. Offer revenue share to refer their back-catalogue: they have zero retention product and this costs them nothing. Ten agents with 200 past clients each is 2,000 warm targets.
- **Ride the deadline calendar.** LKPM windows are public and fixed — Semester I 2026 filing ran 1–15 July with a 15 July cut-off. Run WhatsApp and Instagram ads in the 21 days before each window, targeted at NIB-holding sellers. Intent is at its annual peak precisely twice a year for mikro, four times for kecil; nothing else in this business is that predictable.
- **Show up where BKPM's clinics leave people.** The LKPM Clinic programme exists because people are stuck. Content in Bahasa answering the specific stuck-points ("what counts as realisasi investasi for an online seller?") captures search intent from people mid-filing. This is slower, so it funds itself only from month three.
- **Seller communities on the platforms.** Facebook and WhatsApp groups for Shopee/Tokopedia sellers are large, active, and terrified of account suspension. The Permendag suspension cliff is the hook — lead with "your storefront gets switched off," not "you have a reporting obligation."

First 100 realistically comes from the agent referral list plus one filing-window ad burst — a 6–8 week exercise, not a 6-month one.

## 10. Build complexity — justification

**Low.** The hard parts are off-the-shelf: WhatsApp Business API for the channel, a standard web stack, an LLM for form-mapping and KBLI matching, QRIS for payments. There is no OSS API integration in v1 — I deliberately kept submission manual, which removes the gnarliest dependency. The genuine work is content and domain accuracy: encoding the filing calendars, the sanctions ladder, and the KBLI 2025 mapping correctly. A pair could ship this in 8–10 weeks; the domain research is the long pole, not the engineering.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Assisting with a public filing obligation. No licence needed to help someone prepare their own report. |
| Ethical — no harm / dark patterns | ✅ | Caveat: deadline-fear marketing must stay factual. The dates are real; exaggerating them would be a dark pattern and I would not ship it. |
| Market exists (evidence above) | ✅ | 12M+ NIB holders with recurring duties; government runs clinics because filers are stuck. |
| 1–5 person team can build this | ✅ | Two people, 8–10 weeks. |
| Launchable with <$50K / ₹40L | ✅ | Well under. Main cost is domain research and WhatsApp messaging. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | Consequence is licence revocation, blacklisting, and platform suspension — severe. Docked because it is felt sharply only 2–4 times a year, and many sellers do not yet know the obligation exists. Latent pain converts worse than active pain. |
| Demand evidence | 15 | 11/15 | Strong structural evidence (40M unregistered, government clinics, dated enforcement). Docked hard because I found **no verbatim seller complaints** and no existing paid product to benchmark willingness-to-pay against. Absence of competitors is ambiguous evidence. |
| Build feasibility | 15 | 13/15 | Off-the-shelf throughout; no OSS integration in v1. Domain encoding is the real work. |
| Distribution clarity | 15 | 12/15 | The *biro jasa* back-catalogue is a named, reachable list with aligned incentives. Docked because agent referral deals are unproven and the filing-window cadence limits ad timing. |
| Revenue mechanics | 15 | 11/15 | Pricing fits the wallet, and 15,000 accounts for $1M is achievable penetration. Docked because $3/month ARPU makes churn and payment failure the dominant risk, and the $5M path realistically depends on a B2B2C pivot. |
| Time to first revenue | 10 | 8/10 | Arrears rescue is sellable pre-product as a service. First rupiah inside 6–8 weeks if timed to a filing window. |
| Defensibility | 10 | 3/10 | Execution-only. Encoded regulatory knowledge and the agent relationships are the sole moat, and both are copyable. A local incumbent with a seller list could clone this in a quarter. |
| **Total** | **100** | **74/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`operations-heavy` · `domain-expertise-required`

This needs someone in Indonesia who can read the regulations in the original, build relationships with *biro jasa*, and support customers in Bahasa. A foreign technical founder would get the software right and the business wrong.

### Key assumptions to validate

1. **Assumption:** Micro-sellers will pay ~Rp 49,000/month for something whose value is invisible when it works. **How to test:** offer 50 sellers annual prepay at Rp 449,000 before building; measure paid conversion, not stated interest.
2. **Assumption:** *Biro jasa* will hand over their back-catalogue for revenue share rather than build it themselves. **How to test:** pitch 15 agents; count how many sign a referral agreement within two weeks.
3. **Assumption:** Sellers currently in arrears will pay for rescue at Rp 350,000. **How to test:** run a filing-window ad burst to an arrears landing page and measure paid conversion cold.
4. **Assumption:** Platforms will actually enforce suspension in Dec 2027 rather than the deadline slipping. **How to test:** track platform seller-verification announcements quarterly; Indonesian e-commerce deadlines have a history of extension.

### Risk flags

1. **Regulatory timing risk — the big one.** The entire urgency rests on the 8 December 2027 suspension cliff holding. Indonesian implementation deadlines slip regularly. If it slips 18 months, the fear evaporates and this becomes a vitamin.
2. **Demand evidence is structural, not voiced.** I have regulations, official statistics and a government help desk, but no seller saying "I would pay for this." That gap is why confidence is Medium, not High, and it is the first thing to close.
3. **Price-floor risk.** At $3/month against a Rp 99,000 one-off filing culture, sellers may simply not perceive recurring compliance as a purchasable category. The market may be structurally free.
4. **Platform disintermediation.** Permendag 19/2026 puts verification duty on Shopee and Tokopedia. The clean solution for them is to build seller compliance nudges natively and give it away. If they do, the self-serve business dies overnight and only the agent channel survives.
5. **Channel dependency.** WhatsApp Business API pricing or policy changes hit the unit economics directly at this ARPU.

## 14. Structured verdict

```
Score:                  74/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Indonesia-based operator, Bahasa-native, comfortable with agent/channel
                        relationships and regulatory reading. Technical co-founder optional.
Time to revenue:        6–8 weeks if timed to an LKPM filing window
Capital to launch:      $8–12K (₹7–10L)
Top 3 assumptions to validate first:
  1. Willingness to pay recurring — 50 sellers offered annual prepay pre-build; measure cash, not interest
  2. Agent channel — pitch 15 biro jasa for referral deals; ≥4 signed in two weeks
  3. Arrears rescue demand — cold ad burst to arrears landing page during a filing window
Kill criteria:
  - Abandon if <5 of 50 sellers convert to paid prepay at Rp 449,000
  - Abandon if fewer than 3 of 15 biro jasa agree to a referral arrangement
  - Abandon if Shopee or Tokopedia ships native seller-compliance reminders before v1
  - Abandon if the 8 Dec 2027 platform suspension deadline is formally extended beyond 2029
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Build the arrears-rescue landing page in Bahasa — "Sudah berapa periode LKPM Anda terlewat?" — with real pricing and a QRIS checkout. No product behind it; a manual service fulfils the first orders.
- **Day 3–4:** Contact 15 *biro jasa* advertising NIB services. Pitch the referral split on their past clients. Simultaneously post the arrears diagnostic in three large Shopee/Tokopedia seller groups.
- **Day 5:** Decide on hard numbers. **Go if ≥5 paid arrears-rescue orders land at Rp 350,000 AND ≥3 agents verbally commit.** No-go if the traffic converts to zero paid orders, regardless of how many people click, comment, or say it sounds useful.

The falsifiable bit is the paid order. Indonesian sellers will enthusiastically agree that compliance is a problem and then never pay for it — so interest is worthless as a signal here. Only rupiah counts.
