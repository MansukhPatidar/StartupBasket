---
title: "OpnameLock — evidence ledger for Indonesian subcontractors"
slug: indonesia-subcontractor-opname-evidence
date: 2026-05-17
category: ConstructionTech / Indonesia-SMB
complexity: Medium
score: 75
verdict: GO
confidence: Medium
oneLiner: "Turns a subcontractor's daily site photos and voice notes into an owner-acknowledged, tamper-evident progress record that gets the termin paid."
tags:
  vertical: TradeTech
  model: SaaS
  geography: SEA
  secondary: [WhatsApp-first, Voice-first, Multilingual, AI-agent, SMB, Mobile-first]
axes:
  problem: 17
  demand: 12
  build: 11
  distribution: 11
  revenue: 11
  time: 7
  defensibility: 6
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# OpnameLock

## 1. One-liner

Turns a subcontractor's daily site photos and voice notes into an owner-acknowledged, tamper-evident progress record that gets the termin paid.

## 2. Trend signal — why now?

Indonesia's construction-subcontractor payment crisis is not a hunch — it's documented across legal, academic, and news sources, and a fresh AI capability finally makes the defensive tool buildable on a ₹-cheap phone.

- **Demand (severe).** Gapensi (the national construction-executors association) recorded **37,000 private contractor bankruptcies in three years**, the cited reason being lack of work *or delayed payment after work was completed* ([Kaskus/Gapensi thread](https://www.kaskus.co.id/thread/5aa96d3c1cbfaad27a8b4568/37000-kontraktor-swasta-bangkrut-dalam-3-tahun-gara-gara-tak-dibayar-hingga-no-job)). Named 2026 cases: subcontractors unpaid on IKN (new capital) projects and by Adhi Karya subsidiaries; an April 2026 vendor protest over a Rp3.9B Ministry contract ([Poskota TV, 16 Apr 2026](https://www.poskota.tv/2026/04/16/proyek-rp39-miliar-bermasalah-vendor-mengaku-tak-dibayar/)).
- **Root cause is documentation, not just cash.** Indonesian law firms list the exact evidence an unpaid subcon needs — subcontract copy, *Berita Acara Serah Terima Pekerjaan*, official invoice, payment-request correspondence, somasi proof — and warn that delay risks *"potensi kehilangan bukti administratif"* (loss of administrative evidence) ([ILS Law Firm](https://www.ilslawfirm.co.id/sub-kontraktor-tidak-dibayar-langkah-hukum/)). The ASCE *Journal of Legal Affairs* paper on conditional payments confirms "administrative disputes regarding work documents" as a recurring failure mode ([ASCE](https://ascelibrary.org/doi/10.1061/%28ASCE%29LA.1943-4170.0000226)).
- **Feasibility unlock (last 12 months).** Cheap multimodal vision-language models now read a phone photo plus a Bahasa voice note and emit structured progress data. The enterprise vision incumbents (DroneDeploy Progress AI launched Jul 2025, OpenSpace, Buildots, Doxel) prove the technique works — but they require drones, 360 rigs, and 4D BIM, and price for US/EU GCs ([DroneDeploy](https://www.dronedeploy.com/blog/dronedeploy-redefines-progress-tracking-in-construction-with-launch-of-progress-ai)). The unlock here is that none of that hardware is needed for a *defensive evidence* product.
- **Economic.** Indonesia construction-tech funding roughly doubled YoY into 2026 (Tracxn lists 44 constructiontech startups, 12 funded) — but every funded player (Manpro, SipilPro, PROGRESI, HashMicro) builds *main-contractor / owner* project-management suites. The subcontractor's defensive side is unserved ([Tracxn](https://tracxn.com/d/explore/construction-tech-startups-in-indonesia/__z7S13APvdEA2RudX_qQP7kFvaAJjFhfh053dprUlkug/companies)).

Provenance:
  - Signal 1: 37,000 Indonesian private-contractor bankruptcies in 3 years, cited cause delayed payment after completed work; named 2026 unpaid-subcon cases — https://www.kaskus.co.id/thread/5aa96d3c1cbfaad27a8b4568/37000-kontraktor-swasta-bangkrut-dalam-3-tahun-gara-gara-tak-dibayar-hingga-no-job — 2026-05-17
  - Signal 2: Cheap multimodal VLMs (DroneDeploy Progress AI Jul 2025 + class) can quantify progress from images/voice without drones/BIM — https://www.dronedeploy.com/blog/dronedeploy-redefines-progress-tracking-in-construction-with-launch-of-progress-ai — 2026-05-17
  - Signal 3: 12 funded Indonesia constructiontech startups, all main-contractor/owner facing; subcontractor defensive side unserved — https://tracxn.com/d/explore/construction-tech-startups-in-indonesia/__z7S13APvdEA2RudX_qQP7kFvaAJjFhfh053dprUlkug/companies — 2026-05-17
  Category: Underserved niche

## 3. The opportunity

Indonesian construction runs on *pay-when-paid* / *pay-when-certified*. The small subcontractor does the work, then waits on a *berita acara opname* (joint site-inspection report) and a *Berita Acara Serah Terima* before any termin is released. When the main contractor's own cash dries up — or wants to squeeze — the cheapest move is to dispute the volume, withhold the signature, or simply stall. The subcontractor, who avoided pushing for paperwork to "keep the relationship" (the ASCE paper's #1 root cause), now has **no independent, dated, acknowledged record of what was actually built**. Five years later the claim is statute-barred and the company is one of the 37,000.

Every incumbent app digitizes the *main contractor's* daily report — i.e., the record controlled by the party with the leverage. **Nobody builds the subcontractor a record that is independent of the main contractor and still credible to the owner and a court.** That asymmetry is the gap. AI is load-bearing because the subcontractor's foreman won't fill forms — he'll snap photos and talk. Turning that mess into a structured, quantified, owner-pingable evidence trail is the entire product.

## 4. Target market

- **Primary customer:** Owner-operators of *subkontraktor spesialis* SMEs in Indonesia — formwork, rebar, MEP, finishing, earthworks crews — typically 10–80 workers, 2–8 concurrent projects, Rp2–30B annual turnover, run off WhatsApp and a site foreman (*mandor*). Tier-1 metros first (Jakarta, Surabaya, Medan, Balikpapan/IKN corridor).
- **Why they buy (their words):** *"Kami sudah kerja, tapi berita acara belum ditandatangani, terminnya nggak cair."* They have lived the unpaid-after-completion story or watched a peer go bankrupt from it. They don't want project management — they want **to get paid and to have proof if it goes bad.**
- **Rough TAM reasoning:** Indonesia has tens of thousands of registered specialist subcontractors plus a long informal tail; Gapensi's 37k-bankruptcy figure implies a six-figure population of exposed firms. Capturing even 3,000 paying SMEs at Rp1.5M/mo is ~Rp54B (~$3.3M) ARR — comfortably inside the sub-$5M target.
- **Why now for them:** IKN and post-2024 infrastructure spend pulled thousands of small subs into projects with long, contested payment chains; the bankruptcy headlines have made "get it in writing" a felt priority, not an abstraction.

## 5. Product sketch (MVP)

- WhatsApp/Android capture: foreman sends site photos + a Bahasa voice note ("hari ini cor kolom lantai 3 zona B selesai") at end of day.
- AI converts each entry into a structured daily progress record: work item, location/zone, estimated quantity/% complete, GPS, timestamp, weather, photo set — written in the contract's *bill-of-quantities* language.
- **Tamper-evident ledger:** each entry is hash-chained and time-anchored at capture; later edits are visible. This is what makes it credible vs. a folder of phone photos.
- **Owner/MK acknowledgement loop:** a one-tap WhatsApp link to the project owner's rep or *manajemen konstruksi* to "acknowledge received" (not approve) — converting a unilateral log into an *acknowledged* record without needing the main contractor's cooperation.
- Auto-assembled **opname / termin claim packet**: cumulative progress vs. BoQ, photo evidence index, and a draft *Berita Acara Opname* / payment-request letter in standard Indonesian format.
- One-click **dispute dossier**: when a termin is withheld, export a chronological, hash-verified evidence bundle (+ draft *somasi*) ready for a lawyer or mediation.
- Multi-project dashboard for the subcon owner: which termins are due, acknowledged, overdue, at risk.

## 6. AI angle — what's load-bearing

Remove the AI and you have a photo folder — exactly the useless artifact subcontractors already have. The product exists only because a multimodal model can (a) turn an unstructured Bahasa voice note + grease-and-mud site photos into a *structured, BoQ-aligned quantity/percentage claim* a quantity surveyor would recognize, and (b) do it cheaply enough to run every day on every crew on a low-end phone. Vision-language progress estimation from a single handheld photo (no drone, no BIM) is the capability that did not exist affordably 12–18 months ago. The defensibility-grade part — hash-chaining + owner acknowledgement — is plumbing, but it's worthless without the AI doing the structuring that makes the record *mean something*.

## 7. Localization angle

This is an Indonesia-first play and localization is the wedge, not a coat of paint:

- **Language:** Bahasa Indonesia voice + the regional/site argot mandors actually use; output in the *berita acara* / *opname* / *termin* document conventions Indonesian owners and courts expect.
- **Channel:** WhatsApp-first capture — the only interface a site mandor will actually use.
- **Legal format:** Output maps to *Berita Acara Serah Terima Pekerjaan*, *somasi*, and the evidence list Indonesian law firms publish for *wanprestasi* claims. A generic global "construction progress" app produces nothing a Pengadilan Negeri or a Jakarta mediator recognizes.
- **Pricing:** Rp1.5M/mo (~$90) works where a $300/mo US tool is a non-starter for a Rp2–30B-turnover sub.

A generic global product cannot win here; the entire value is in being Indonesian-document-native.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** Rp1,500,000 / month per company (≈ $90) for up to 5 active projects; Rp250,000 / extra project. Annual prepay discount to lock cash and retention.
- **ACV:** ~Rp18M (~$1,100) base; multi-project subs land at Rp25–35M.
- **Rough math to $1M ARR:** ~1,000 paying subcontractors × ~$90/mo × 12 ≈ $1.08M.
- **Rough math to $5M ARR:** ~3,500 subs at blended ~$120/mo (project expansion + dispute-dossier upsell). Requires winning 2–3 metros and a referral loop, not a category miracle.
- **Expansion path:** per-project expansion as the sub grows; paid "dispute dossier + somasi drafting" event fee (Rp2–5M per incident — high willingness-to-pay precisely when a termin is stuck); later, a lender/insurer channel that prices receivables using the verified ledger.

## 9. Go-to-market wedge — first 100 customers

- **Gapensi / Aspeknas chapter lists.** Provincial construction-association chapters publish member directories. Scrape Jakarta + Surabaya + Balikpapan specialist-subcon members (~2,000 firms); send a Bahasa WhatsApp + 90-second screen-capture demo built around *their* nightmare ("termin nggak cair?"). Expect 3–5% to a paid pilot.
- **Ride the unpaid-subcon news cycle.** Comment-thread and DM the named, publicly aggrieved subs in IKN / Adhi-Karya / Ministry-vendor stories and the Kaskus/Gapensi bankruptcy threads — these are people actively bleeding from this exact problem this month.
- **Construction-law firms as referrers.** Firms like ILS publish "subkontraktor tidak dibayar" guides as lead-gen. Offer them a co-branded dispute-dossier export; they refer subs upstream (prevention) and we feed them clean evidence (their billable work).
- **Material-supplier & mandor WhatsApp groups.** Rebar/formwork supplier reps and mandor coordinators sit in dozens of regional WhatsApp groups; a referral fee turns them into a distribution layer into exactly the target firms.

## 10. Build complexity — justification

Medium. Off-the-shelf: multimodal LLM/vision APIs, WhatsApp Business API, standard mobile + web stack, managed hash-chain/time-anchor. Custom work is the hard part but bounded: a reliable BoQ-aligned progress-extraction pipeline (prompt + eval harness + correction UI so a sub can fix a misread quantity), the acknowledgement-loop UX, and Indonesian document templating with a construction-law advisor. A focused pair ships a credible v1 in ~4–5 months; the eval/accuracy loop is the schedule risk, not the plumbing.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Record-keeping/evidence tool; we draft templates, not practice law (route disputes to partner firms). |
| Ethical — no harm / dark patterns | ✅ | Tilts power toward the under-leveraged party; acknowledgement loop is opt-in, not coercive. |
| Market exists (evidence above) | ✅ | 37k bankruptcies, named 2026 cases, legal+academic corroboration. |
| 1–5 person team can build this | ✅ | Pair + part-time construction-law advisor. |
| Launchable with <$50K / ₹40L | ✅ | API + WhatsApp + cloud; bootstrappable. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 17/20 | Subs go bankrupt over this; "lose money" is literal, not figurative. Just shy of top band because the worst pain clusters at dispute time, not daily. |
| Demand evidence | 15 | 12/15 | Strong: bankruptcy stats, named cases, legal+academic sources. Held under 13 by thin *verbatim subcontractor* quotes (forums sparse). |
| Build feasibility | 15 | 11/15 | Stack is off-the-shelf; BoQ-aligned extraction accuracy is real, bounded engineering — ~4–5 months. |
| Distribution clarity | 15 | 11/15 | Named lists (Gapensi/Aspeknas), live news targets, lawyer referrers; conversion math still estimated. |
| Revenue mechanics | 15 | 11/15 | Pricing fits wallet; ARR math undemanding. Churn risk: subs may cancel between projects — annual prepay mitigates. |
| Time to first revenue | 10 | 7/10 | Paid pilots in 6–10 weeks off targeted WhatsApp outreach; not instant self-serve. |
| Defensibility | 10 | 6/10 | Soft moat: accumulating cross-project evidence ledgers, lawyer-referral network, Indonesian-document specificity. Copyable but the incumbents are pointed the other way (owner-side). |
| **Total** | **100** | **75/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required`

### Key assumptions to validate (3–5)

1. **Assumption:** Subcontractors will pay ~Rp1.5M/mo for *defensive evidence* (not productivity). **How to test:** 30 in-person interviews with Jakarta/Surabaya specialist subs who've been burned; pre-sell 10 annual pilots before building.
2. **Assumption:** A model can extract BoQ-aligned quantities from a real mandor's photo + Bahasa voice note accurately enough to be claim-credible. **How to test:** Collect 200 real site entries; measure extraction accuracy vs. a QS's manual opname; target ≥85% with easy human correction.
3. **Assumption:** Owners/MK reps will tap "acknowledge received" (the asymmetry-breaker). **How to test:** Run the acknowledgement loop on 5 live projects; measure acknowledgement rate within 72h.
4. **Assumption:** The dispute-dossier export materially helps subs recover money (drives word-of-mouth). **How to test:** Track 10 stuck-termin cases through partner lawyers; measure recovery vs. baseline.

### Risk flags

1. **Channel dependency:** Heavy WhatsApp Business API reliance — pricing/policy changes hit capture UX. Mitigate with a thin native app fallback.
2. **Adversarial counterparty:** Main contractors may pressure subs not to use a "record-keeping" tool against them. Position as neutral progress documentation; lean on owner-side acknowledgement so it's not framed as anti-GC.
3. **Accuracy liability:** A wrong quantity in an evidence packet is worse than no packet. Requires visible confidence, mandatory human confirmation before any packet is "locked."
4. **Market timing:** If infrastructure spend slows, project volume (and willingness to pay) softens with it.

## 14. Structured verdict

```
Score:                  75/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder (multimodal/eval discipline) + Indonesian construction-law advisor + a GTM partner with Gapensi/Aspeknas reach
Time to revenue:        8–12 weeks (paid pilots via targeted WhatsApp outreach)
Capital to launch:      ₹25–35 lakh ($30–42K)
Top 3 assumptions to validate first:
  1. Willingness to pay Rp1.5M/mo for defensive evidence — 30 interviews + 10 pre-sold annual pilots
  2. BoQ-aligned extraction accuracy ≥85% on 200 real mandor entries vs. a QS baseline
  3. Owner/MK acknowledgement rate ≥50% within 72h on 5 live projects
Kill criteria:
  - Abandon if <8 of 30 interviewed subs will pre-pay an annual pilot
  - Abandon if extraction accuracy stays <70% after the eval loop, or owner acknowledgement <25% on live projects
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Pull Gapensi/Aspeknas Jakarta + Surabaya specialist-subcon directories; build a 200-firm list; write the Bahasa WhatsApp pitch + 90-sec demo around "termin nggak cair."
- **Day 3–4:** Run 25–30 calls/visits with subs who've been burned. Show a fake-door packet mockup. Ask the only question that matters: *"Bayar Rp1.5 juta/bulan untuk ini?"* — and try to collect 5–10 signed annual-pilot LOIs (deposit if possible).
- **Day 5:** Decide go / no-go on a falsifiable threshold: **≥8 of 30 subs commit to a pre-paid annual pilot.** Below that, the pain is real but the wallet isn't — kill or reshape toward the lawyer-referral channel.
