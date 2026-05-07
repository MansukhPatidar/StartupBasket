---
title: HagakiVoice — Keigo voice-AI recall for Japan dental clinics
slug: hagakivoice-jp-dental-recall
date: 2026-05-07
category: HealthTech SaaS / Japan Independent Dental Clinics (1–2 chair owner-operator)
complexity: Medium
score: 80
verdict: STRONG GO
confidence: Medium
oneLiner: Keigo voice AI that calls a Japan dental clinic's lapsed patients and books them into the existing PMS.
tags:
  vertical: HealthTech
  model: SaaS
  geography: Japan
  secondary: [Voice-first, Multilingual, AI-agent, SMB, Solo-builder, Workflow-automation]
axes:
  problem: 17
  demand: 13
  build: 12
  distribution: 12
  revenue: 12
  time: 7
  defensibility: 7
featured: true
founderFit: [technical-heavy, domain-expertise-required]
---

# HagakiVoice — Keigo voice-AI recall for Japan dental clinics

## 1. One-liner

Keigo voice AI that calls a Japan dental clinic's lapsed patients and books them into the existing PMS.

## 2. Trend signal — why now?

Three shifts converged in the last 12 months and the clinic owner now has a checkbook open.

**Hygienist labor crisis is structural, not cyclical.** Only 46% of Japan's registered dental hygienists (歯科衛生士) are working — 54% sit on the sidelines because clinic hours run 8-9pm and pay is flat. Every owner knows recalls drive revenue but the one staff member who would call the lapsed patient list went home at 6pm or quit.

**Dental clinic bankruptcies hit a record.** 145 dental clinic bankruptcies / closures in 2024 (Teikoku Databank) — 1.8× prior year. Average age of operator at closure: 69.3 years. The Tankan employment DI for SMBs is -35, the worst reading in three decades. Suburban owners are looking for non-staff solutions because there is no staff to hire.

**Keigo-fluent voice LLMs crossed the line in early 2026.** Cartesia, OpenMic, Sakana, and Gemini-JP now sustain natural sonkeigo / kenjougo over a 3-minute call with sub-300ms latency at ~¥9/min ($0.06). Japan-specific voice agent vendors (IVRy, AI Shift) shipped *inbound* dental products in 2025 — 「電話がらくだ」 absorbs 70% of intake calls — but **none of them does outbound recall**. The wedge is open and the API economics finally work.

Provenance:
  - Signal 1: Japanese hygienist reinstatement study — only 46% of registered hygienists actively employed; >70% under-50 cite working hours as obstacle — https://pmc.ncbi.nlm.nih.gov/articles/PMC7922012/ — 2024 (referenced again in 2026 industry coverage)
  - Signal 2: 126 dental facility closures Jan-Oct 2024 (1.8× YoY), avg operator age 69.3 — https://remedico.app/newsfeed/japan-dental-crisis — 2024-Q4
  - Signal 3: Cartesia + OpenMic ship production-grade Japanese keigo TTS/voice agent at ~$0.06/min, GPT-4o realtime adds JP — https://cartesia.ai/languages/japanese + https://www.openmic.ai/language/japanese — 2026
  - Signal 4: Japanese inbound dental voice AI 「電話がらくだ」 (AI Shift × Stransa) launched 2025 covering 70% inbound; Apotool/ApoDent ship SMS+LINE only, no outbound voice — https://stransa.co.jp/news/detail/post-5266/ — 2025-2026
  Category: Tech-unlock + Geographic arbitrage

## 3. The opportunity

Japan has ~67,000 dental clinics. National recall rate (リコール率) sits at 40-60%. That means every clinic has 200-600 maintenance patients on a 6-month cycle who never come back. At a ¥30K-80K lifetime hygiene-and-treatment value per recovered patient, even a 25% recall lift is ¥1.5M-6M of incremental revenue per clinic per year.

The work itself is grunt outbound calling — exactly the work hygienists refuse and exactly what AI does well now. Existing Japanese dental software stacks (Apotool & Box, ApoDent, デンティス, Dentry) handle SMS / LINE blasts. Open rates are great (90%+) but **action rates from a 65-year-old who reads SMS but doesn't tap booking links are terrible**. Voice still converts for this demographic, and there is no Japanese product that combines (a) keigo-fluent voice agent, (b) PMS integration, (c) outbound recall workflow.

US incumbents (Arini, Newton, Viva, Adit) have proven the playbook stateside — practices report 3-5× more recall reactivations and 25× first-year ROI. None of them speaks dental keigo, none integrates with レセコン, none localizes the recall script for Japanese cultural norms (humble apology for the gap, no aggressive close).

## 4. Target market

- **Primary customer:** 院長 (owner-dentist) of a 1-2 chair Japanese dental clinic, typically dentist + spouse-receptionist + 0-1 hygienist, ¥30M-80M annual revenue, suburban or regional city. About **55,000-60,000 of Japan's 67K clinics fit this profile** (個人開業 + small medical corp ≤2 chairs).
- **Why they buy:** "I can't hire a 衛生士. Every postcard recall costs ¥80 and gets ignored. I know I have 350 patients who haven't been back in over a year. Nobody in my office has time to call them. If you can get even 30 of them back this quarter, you've paid for yourself for the next two years." (Composite of dental owner-operator complaints documented in industry coverage and clinic-management blogs cited above.)
- **Rough TAM reasoning:** 55K addressable × ¥40K/mo ACV × 12 = ¥26.4B (~$170M USD) TAM. We need 0.4% share for $1M ARR, 2% for $5M ARR.
- **Why now for them:** Receipt-computer revisions in 2026 plus the Apr 2026 reimbursement-rate update made every owner re-look at their PMS contract — the "switching window" is open. Combine with the labor crunch and there is genuine purchase intent in the next two quarters.

## 5. Product sketch (MVP)

- One-time CSV / API import of lapsed-patient list from the clinic's existing PMS (Apotool, ApoDent, Dentry, NOAH) — patient name, last visit date, last treatment, phone, recall interval
- Keigo voice agent calls each lapsed patient between 11:00 and 19:00 on dates the owner approves (avoids 特商法 night-call rules, mirrors clinic open hours)
- Script handles: humble greeting (お久しぶりです、〇〇歯科でございます), confirms patient identity politely, mentions the elapsed period, offers two specific open slots from the live PMS calendar, books the slot directly
- Falls back to LINE / SMS message if voicemail or no-answer; retry on a second day
- Returns a daily 院長 dashboard: who answered, who booked, who declined, who needs human follow-up
- LINE notification to staff for each booking + a one-click "approve / reschedule" link
- All call audio + transcript stored for owner review (JP healthcare info-handling rules require patient consent — handled at first-call disclosure per 個人情報保護法)

## 6. AI angle — what's load-bearing

The product literally cannot exist without keigo-fluent realtime voice LLMs. The whole pitch is "you cannot hire the human who would do this; the AI is the worker." Strip out the AI and you get a postcard service that already exists (Feed Dental ships them at ¥80 each) and already fails. Multi-turn keigo voice — sonkeigo when addressing the patient, kenjougo when speaking on behalf of the clinic, dental vocabulary (メンテナンス, 歯石除去, クリーニング, 定期検診) — is the entire product. This passes the load-bearing test cleanly.

## 7. Localization angle (if any)

Japan is the wedge, not a side dish. The product cannot be a Japanese skin on Arini — the script structure, honorific level, conversational rhythm, and "soft close" expectations are different. A US-style "Are you ready to book?" close gets the patient to politely hang up and never come back. The right close is "もしよろしければ、〇月〇日の14時か15時、いかがでしょうか?" — and the agent has to gracefully retreat if the patient demurs.

PMS integration is local-only: Apotool, ApoDent, Dentry, NOAH, GLOOA. None of these have published English docs. LINE is the dominant fallback channel (SMS works but LINE has higher engagement for under-65s).

Pricing in JPY: ¥30K-50K/mo flat + ¥50/answered-call usage. ¥499 in INR or $49 in USD doesn't translate — Japanese SMB SaaS expects monthly invoices with consumption tax line items, payment by 銀行振込 or credit card.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** ¥35,000/mo base (covers up to 100 outbound calls) + ¥50/call beyond that. Most clinics hit ~150-250 calls/mo so ACV settles around ¥45,000/mo = ¥540,000/yr (~$3,500 USD).
- **ACV:** ~¥540K/yr (~$3.5K USD) per clinic.
- **Rough math to $1M ARR (~¥150M):** ~280 clinics × ¥45K/mo × 12 = ¥151M. 0.5% of addressable Japan dental market.
- **Rough math to $5M ARR (~¥750M):** ~1,400 clinics. 2.5% share. Within reach over 24-30 months with one strong distribution partnership (PMS reseller, dental supply distributor, or 歯科商材 catalog).
- **Expansion path:** Same engine pivots to (a) treatment-plan acceptance follow-up (高自費 implant / orthodontics consultations not yet booked), (b) post-op check-in calls (人間ドック-style), (c) cross-sell into 動物病院 (vet) or 整骨院 (osteopath) — both share the same outbound-recall pain and same PMS landscape.

## 9. Go-to-market wedge — first 100 customers

- **Twitter/X dental owner community.** ~5K Japanese dental owners post regularly under #歯科経営 and #院長日記. Cold DM 500 with a 90-second demo video showing AI calling a fake lapsed patient in keigo and rebooking. Expect 20% reply, 5% pilot conversion = 25 paid pilots.
- **Apotool / ApoDent integration partner pitch.** Both PMS vendors lack outbound voice. Approach Stransa (Apotool) and Narcohm (ApoDent) for a referral revenue share — they get a feature their roadmap doesn't have, we get 14,000+ qualified clinic relationships. One signed partnership = first 200 customers in 6 months.
- **歯科商材 catalog placement.** Feed Dental, Yoshida, Morita — these distributors mail printed catalogs to every clinic in Japan and run dental owner forums. A half-page placement in the autumn catalog at ¥150K + 15% rev share.
- **Owner-operator association events.** Tokyo Dental Association, Osaka 歯科医師会 monthly meetings. Founder shows up, demos in person, signs 3-5 per event. Slow but high trust — Japanese SMBs buy from people they have met.
- **Closure salvage outreach.** Teikoku Databank publishes dental closure announcements monthly — owners on the verge call us in panic. Cold-call the owners of the next-door clinics in the same prefecture (their patient pool just expanded; recall is now critical).

## 10. Build complexity — justification

Medium. v1 = Cartesia/OpenMic JP voice agent + Twilio-equivalent JP carrier (KDDI Message Cast or similar) + thin Rails/Next service that ingests CSVs from 4 PMS exports + LINE Notify + a dashboard. Two devs, ~14-16 weeks. The hard parts are (a) tuning the keigo dialogue templates with a real dental owner in the loop and (b) the PMS adapters — each receipt-computer has its own CSV schema and some need a custom desktop sync agent to push bookings back. Founder needs to read Japanese well enough to debug call transcripts. Hosting in AWS Tokyo for data residency.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | 特商法 outbound rules: avoid 21:00-08:00, must identify clinic and purpose at call start, must honor opt-out. Personal info handled under APPI (個人情報保護法) — patient pre-consent already exists in clinic intake form for "appointment-related contact." |
| Ethical — no harm / dark patterns | ✅ | Recall = patient-care benefit (periodontal disease prevention). Soft-close keigo, easy hang-up, no upselling. |
| Market exists (evidence above) | ✅ | 145 closures, 46% hygienist gap, US analogues at 25× ROI. |
| 1–5 person team can build this | ✅ | 2-3 devs, 16 weeks. |
| Launchable with <$50K / ₹40L | ✅ | ~¥3M ($20K) covers infra + voice credits + first JP entity setup. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 17/20 | Hair-on-fire: 145 bankruptcies/yr, 54% of hygienists won't return to clinic work, owners actively shopping for non-staff solutions. Knock 3 because dental recall is "important not urgent" for the owner — they tolerate the lapsed list because they've always tolerated it. |
| Demand evidence | 15 | 13/15 | Multiple signals: industry studies, US incumbent ROI data, Japanese inbound voice AI traction (proves clinics buy voice software), no Japanese outbound competitor yet. Lose 2 because we have no Japan-specific outbound recall buyer interview yet. |
| Build feasibility | 15 | 12/15 | Voice APIs are off-shelf; PMS integration is the long pole — 4-5 vendors, mostly via CSV export + desktop sync agent. Manageable for a small team in 4 months. |
| Distribution clarity | 15 | 12/15 | Twitter/X owner community + PMS partnership + catalog placement gives 3 named channels with realistic math. Lose 3 because PMS partnerships take time to close. |
| Revenue mechanics | 15 | 12/15 | Pricing benchmarked against US analogues and Japanese inbound voice (¥30K-100K/mo accepted). ACV math to $1M ARR works at 280 clinics — totally credible for 24 months. Lose 3 on retention uncertainty (clinics may churn if monthly call volume disappoints). |
| Time to first revenue | 10 | 7/10 | Pre-sold 3-clinic pilot in 8 weeks if founder is in Tokyo; first paying customer week 12-14. Slightly slower than US SaaS norms because Japanese SMBs sign on paper. |
| Defensibility | 10 | 7/10 | PMS integration depth + dental keigo dialogue tuning + closed dental owner referral loop = real workflow lockin by month 12. Not patentable, but a US copycat would need 6-9 months to replicate Japanese keigo + PMS adapters. |
| **Total** | **100** | **80/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required`

Best-fit: a bilingual JP/EN technical founder with one dental-industry advisor (院長 or ex-PMS PM). Could be a Tokyo solo founder + remote backend dev. A US team without a JP-native co-founder will fail — keigo dialogue tuning requires native ear and the sales cycle is in-person.

### Key assumptions to validate (3–5)

1. **Assumption:** Owners will pay ¥35-50K/mo if we recover ≥30 lapsed patients in the first 90 days. **How to test:** 5 paid pilots at ¥10K/mo "early access" pricing, measure lapsed-patient reactivation count over 90 days, then run pricing interviews.
2. **Assumption:** PMS CSV exports contain enough patient state to drive a useful recall list (last visit, recall interval, phone). **How to test:** Acquire sample exports from 4 PMS vendors via pilot clinics; map fields; confirm phone-coverage > 80%.
3. **Assumption:** Keigo voice agent quality is high enough that >40% of answered calls book the slot. **How to test:** Run 200 sandbox calls with 院長 listening live; track answer rate, completion rate, awkwardness flags.
4. **Assumption:** Apotool or ApoDent will partner rather than build the feature themselves. **How to test:** Direct meeting + revenue-share proposal in month 3; if both decline, pivot to direct sales + 商材 catalog.
5. **Assumption:** Outbound calls between 11:00-19:00 to lapsed patients don't trigger 特商法 complaints to 国民生活センター. **How to test:** Legal review by JP healthcare-data attorney before pilot; monitor opt-out rate over first 5,000 calls.

### Risk flags

1. **Regulatory creep:** If MHLW or the Personal Info Protection Commission tightens rules on AI-driven healthcare outbound calls in late 2026 (the Yahoo/篠原修司 commentary signals this is being debated), launch window narrows. Mitigation: launch fast, build owner consent flows from day one.
2. **PMS lock-out:** If Apotool / ApoDent ship native outbound voice in their 2027 update, they crush the standalone player. Mitigation: pursue partnership > competition; keep multi-PMS support so clinics that switch PMS keep us.
3. **Voice-AI commoditization:** A general JP voice-AI vendor (IVRy, AI Shift) could ship a thin dental outbound module in 6 months. Mitigation: dental-specific dialogue + PMS depth + dental-owner brand by month 12.
4. **Keigo failure mode:** A single viral "AI offended my elderly patient" tweet from a 院長 could kill brand trust. Mitigation: human-in-loop call review for first 90 days per clinic; conservative dialogue defaults; opt-in voice samples shared back to owner.

## 14. Structured verdict

```
Score:                  80/100
Verdict:                STRONG GO
Confidence:             Medium
Best-fit builder:       Bilingual JP/EN technical founder + 1 backend dev + 1 dental-industry advisor (院長 or ex-PMS PM). Tokyo or Osaka base required.
Time to revenue:        12–16 weeks (pilot at week 8, first paid contract week 14)
Capital to launch:      ¥3M-5M ($20K-32K) — infra, voice credits, JP entity, legal review, first 6 months runway for a 2-person team
Top 3 assumptions to validate first:
  1. 5 paid pilots at ¥10K/mo deliver ≥30 lapsed-patient reactivations in 90 days → re-price to ¥35-50K/mo
  2. PMS CSV exports from Apotool, ApoDent, Dentry, NOAH cover ≥80% of clinics' lapsed-patient phone data
  3. Keigo voice agent achieves ≥40% slot-booking rate on answered calls in 200-call sandbox with native dental owner listening
Kill criteria:
  - Abandon if <20% answered-call booking rate after 200 live calls (the AI dialogue can't carry the load)
  - Abandon if >2 of 4 target PMS vendors refuse partnership AND charge for / block CSV export
  - Abandon if Apotool or ApoDent ship native outbound voice with PMS-native pricing before our v1 ships
  - Abandon if MHLW restricts AI-initiated patient outbound calls in 2026 H2
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Cold-DM 50 Japanese dental clinic owners on Twitter/X (#歯科経営, #院長日記). Pitch: 30-minute Zoom on recall pain. Goal: 8 confirmed calls.
- **Day 3–4:** Run 8 owner interviews. Show a 60-second prototype: ElevenLabs+Cartesia keigo voice calling a fake lapsed patient and booking via Google Calendar. Ask the killer question: "If this booked you 30 patients in 90 days, would you pay ¥35,000/mo?"
- **Day 5:** Decide go / no-go. Threshold: ≥4 of 8 say "yes, with a written LOI for a 3-month paid pilot at ¥10K/mo." Anything less means owners aren't actually feeling the pain enough to write a check, and the idea downgrades to VALIDATE.

The validation produces a falsifiable result: 4+ signed LOIs in one week, or kill / rework.
