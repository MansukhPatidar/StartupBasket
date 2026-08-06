---
title: "SahihPrep — prep desk for Indonesia's halal companions"
slug: halal-self-declare-prep
date: 2026-08-06
category: GovTech / Indonesia-Micro — Halal Process Companions (P3H) and LP3H Institutions Pushing UMK Self-Declare Files Before the October 2026 Mandate
complexity: Low
score: 76
verdict: GO
confidence: Medium
oneLiner: "Catches the ingredient that will get a halal file rejected, before the companion submits and works for free."
tags:
  vertical: GovTech
  model: SaaS
  geography: SEA
  secondary: [Compliance-driven, AI-agent, Multilingual, SMB, WhatsApp-first, Solo-builder]
axes:
  problem: 17
  demand: 13
  build: 13
  distribution: 12
  revenue: 10
  time: 8
  defensibility: 3
founderFit: [technical-heavy, operations-heavy]
featured: false
---

# SahihPrep

## 1. One-liner

Catches the ingredient that will get a halal file rejected, before the companion submits and works for free.

## 2. Trend signal — why now?

Indonesia flips the switch on **17 October 2026**. From that date mandatory halal certification applies in full to food and beverage products from micro and small enterprises (UMK), plus imported products, slaughtered products and slaughtering services. From 18 October the government begins active market supervision — uncertified products get pulled from shelves ([ANTARA News](https://en.antaranews.com/amp/news/408710/indonesia-to-enforce-mandatory-halal-certification-in-october-2026), [LMI Consultancy](https://www.lmiconsultancy.com/indonesia-halal-certification-mandatory-halal-product-assurance-takes-full-effect-by-october-2026/)).

That is roughly ten weeks from today. And the machine that has to clear the backlog runs on piecework.

Here's the part nobody outside Indonesia has noticed. The UMK doesn't pay for self-declare certification — it's free, government-subsidised, Rp0, funded through the SEHATI program that issued 1.35 million free certificates across 2025–2026. The work is done by **Pendamping Proses Produk Halal (P3H)** — licensed halal process companions — who sit under 309 registered LP3H institutions and get paid **Rp150,000 per halal certificate actually issued**. Not per submission. Per certificate ([Forum Advokasi Halal Indonesia](https://fahi.or.id/apa-tugas-pendamping-proses-produk-halal-p3h), [Halal Center Cendekia Muslim](https://hccendekiamuslim.or.id/bagaimana-cara-kerja-pendamping-pph-p3h-halal-center-cendekia-muslim)).

BPJPH has published the receipts. Between 21 February and 4 April 2024 it disbursed **Rp81,434,175,000** — Rp69.8 billion in P3H incentives and Rp11.6 billion in LP3H fees — against **465,338 halal certificates**. That's ~Rp149,000 per certificate, and the agency is explicit about the condition: incentives are paid *"bila P3H telah menyelesaikan tugas pendampingan sertifikasi halal bagi pelaku UMK yang dibuktikan dengan terbitnya sertifikat halal atas produk UMK tersebut"* — only when the certificate is issued ([BPJPH](https://bpjph.halal.go.id/detail/bpjph-cairkan-rp81-m-untuk-insentif-pendamping-proses-produk-halal-dan-lp-3-h/)).

So a rejected file is unpaid labour. And files get rejected constantly. The common failure mode is documented plainly: submissions are rejected or returned for revision because of incomplete raw-material data, missing supplier lists, product composition not thoroughly declared, mismatched business data — *"proses verifikasi lebih lama karena perbaikan berulang kali"* (verification takes longer because corrections have to be made repeatedly) ([Pusat Pelatihan Halal](https://pusatpelatihanhalal.com/kendala-sihalal-yang-sering-terjadi-dan-cara-mengatasinya-untuk-umkm/)).

Worse for the companion: BPJPH has started **curating** P3H verification submissions, because *"banyak P3H yang masih kurang teliti dalam melakukan verifikasi dan validasi"* — many companions are insufficiently rigorous in their verification and validation. Curation means your invoice can bounce after the work is done.

And the incentives are already late. A Change.org petition — *"Segera Cairkan Insentif Pendamping Halal"* — was filed by a companion complaining that *"lebih dari 3 bulan insentif yang harusnya sudah kami terima setelah sertifikat"* had not arrived, and cites BPS data putting **over 70,000 halal companions** at work in Indonesia ([Change.org](https://www.change.org/p/segera-cairkan-insentif-pendamping-halal)). It only drew 11 signatures — it is a weak petition, and I'm citing it as evidence that the pain is real and voiced, not as evidence of mass mobilisation.

Peer-reviewed fieldwork on the SEHATI companions in South Kalimantan reaches the same conclusion from the other direction: companions are *"hybrid implementers"* juggling education and technical submission, blocked by *"administrative complexity, unstable internet connectivity, platform limitations, and uneven institutional support,"* and by enterprises with *"limited digital literacy, uneven halal knowledge, and weak responsiveness,"* which *"delay certification completion and increase facilitation workload"* ([Journal of Islamic Economics Lariba, UII](https://journal.uii.ac.id/JIELariba/article/view/42823)).

Read that as an operator: a 70,000-person piecework workforce, paid only on success, facing a hard deadline, with a documented rejection problem whose root cause is ingredient and document accuracy. That's a market that will buy a tool that raises its hit rate.

The technical unlock is the boring part, and it matters. Checking whether "pengemulsi nabati" or an unnamed flavouring on a photographed sachet is a critical ingredient used to require a trained halal auditor's eye. Vision models that read a crumpled Indonesian ingredient label at street-stall photo quality, in Bahasa, and cross-reference it against BPJPH's positive list and critical-ingredient categories, became cheap and good enough within the last 12 months.

```
Provenance:
  - Signal 1 (Demand): P3H paid Rp150,000 only on certificate issuance; submissions routinely rejected/returned for revision over incomplete raw-material and composition data; BPJPH now "curates" P3H verification because many are insufficiently rigorous — https://pusatpelatihanhalal.com/kendala-sihalal-yang-sering-terjadi-dan-cara-mengatasinya-untuk-umkm/ + https://fahi.or.id/apa-tugas-pendamping-proses-produk-halal-p3h — observed 2026-08-06
  - Signal 2 (Feasibility): Cheap multimodal vision + Bahasa Indonesia LLM inference makes photographed ingredient-label triage against the halal positive list / critical-ingredient categories viable at per-file cost of cents; incumbent SmartHalal already proves the technical shape works — https://www.smarthalal.id/ — observed 2026-08-06
  - Signal 3 (Economic): BPJPH disbursed Rp81,434,175,000 against 465,338 certificates (Rp69.8B to P3H, Rp11.6B to LP3H) in a single ~6-week disbursement window; 309 LP3H institutions nationally; hard mandate 17 Oct 2026 — https://bpjph.halal.go.id/detail/bpjph-cairkan-rp81-m-untuk-insentif-pendamping-proses-produk-halal-dan-lp-3-h/ — observed 2026-08-06
  Category: Regulatory arbitrage
```

## 3. The opportunity

The gap is between *who does the work* and *who the software is built for*.

Every tool in this space is aimed at the UMKM — the warung owner, the sambal maker, the frozen-snack seller. That's a terrible customer. They pay Rp0 for self-declare, they certify once, they have no budget, no retention, and no reason to ever open your app again. Building for them is charity with a subscription page.

The P3H is the opposite. They process files continuously, their income scales directly with throughput and hit rate, they're already licensed and trained, and 309 LP3H institutions aggregate them into buyable clusters. A companion earning Rp150K per issued certificate who currently clears, say, 20 certificates a month is earning Rp3M. Lift their hit rate and their speed and you're moving real money for them — and Rp3M/month is enough income that a Rp99K tool is a rounding error against the upside.

**The incumbent is SmartHalal.** I want to be honest that they exist and that they're doing roughly the right thing — they let you upload ingredient labels, have AI validate halal status and draft registration documents, they verify facilitator licences against BPJPH via API, and they explicitly *"charge an affordable SaaS license fee to PPH Facilitators for AI Tools usage"* ([smarthalal.id](https://www.smarthalal.id/)). That is close enough to this idea that a lazy reader should call it a duplicate.

It isn't, and here's specifically why. SmartHalal is positioned as an end-to-end **marketplace and certification service** — escrow accounts, consultant matching, a Rp2M paid regular route, refund guarantees. Their centre of gravity is the *business owner buying certification*. The facilitator tooling is a component of that marketplace, and their site shows no testimonials or case studies. They are building a two-sided transaction platform, which is a slow, capital-hungry shape.

The wedge is to build the *narrow* thing: a pre-submission rejection screen that a companion runs in ninety seconds before they touch SIHALAL, sold as a flat monthly seat to individual P3H and to LP3H buying in bulk for their roster. No escrow, no marketplace, no matching, no taking a cut of government money. One job: **do not let this file get bounced.**

That's 10× better on the only axis the companion cares about — files-issued per hour of their own unpaid time — and it's a shape a two-person team can ship before the October deadline while a marketplace player is still reconciling escrow.

## 4. Target market

- **Primary customer:** Licensed Pendamping Proses Produk Halal (P3H) — individual halal process companions operating under one of 309 registered LP3H institutions, mostly in Java, South Sulawesi, South Kalimantan and Sumatra. Secondary buyer: the LP3H coordinator who manages a roster of 20–500 companions and is judged by BPJPH on submission quality and throughput.
- **Why they buy:** In their own terms — the incentive is only paid *"bila... dibuktikan dengan terbitnya sertifikat halal"*, and files come back because *"data usaha tidak valid"*, *"komposisi tidak lengkap"*, or a supplier's halal certificate is missing. Every bounce is hours of travel and hand-holding they don't get paid for. Fieldwork confirms enterprise-level gaps *"delay certification completion and increase facilitation workload."*
- **Rough TAM reasoning:** The petition cites BPS data on 70,000+ halal companions nationally; BPJPH trains toward a stated need of 200,000+ professional P3H. Treat 70,000 as the credible current base and assume 15–25% are commercially active enough to pay for tooling — call it 10,000–17,000 realistic seats, aggregated through 309 institutional buyers. At Rp99K–Rp249K/month that's a Rp12–50 billion (~$750K–$3M) annual seat market, before LP3H institutional tiers.
- **Why now for them:** The 17 October 2026 mandate compresses years of backlog into a few months. BPJPH's own head has framed the target as achievable only through *"percepatan sertifikasi secara masif"* — massive acceleration — and told the Rakornas of all 309 LP3H that they must show *"peningkatan kualitas kinerja, disiplin prosedur"*: better quality and procedural discipline, not just volume. Companions are about to be measured on exactly the thing this product fixes.

## 5. Product sketch (MVP)

- **Label-to-verdict scan.** Companion photographs the product's ingredient list on their phone. Comes back in under a minute with each ingredient classified as not-critical / critical / very-critical against BPJPH's positive list, in Bahasa Indonesia.
- **Rejection risk score with named reasons.** Not a vague percentage — "This file will bounce: emulsifier source undeclared, supplier halal certificate for wheat flour is expired, product name in form doesn't match the label."
- **Supplier certificate chaser.** Flags every input that needs a valid supporting halal certificate from its manufacturer, tracks which ones are collected, expired, or missing, and generates the WhatsApp message the companion sends the UMKM to go get it.
- **Self-declare eligibility gate.** Tells the companion in the first thirty seconds whether this product is even eligible for self-declare or must go the regular route — the mistake that wastes the most time, since processed meat like bakso, sosis and nugget carries high critical points and belongs on the regular path.
- **SJPH document drafter.** Produces the halal assurance system documents to BPJPH's expected structure, pre-filled from the scanned data, ready to paste into SIHALAL.
- **Pre-flight checklist against last month's rejections.** A running list of the reasons *this companion's* files came back, so repeated personal mistakes get caught before submission.
- **LP3H roster dashboard.** For the institutional buyer: which companions have files at risk, hit-rate per companion, how many are ready to invoice.
- **Offline-tolerant capture.** Scan and queue in a warung with no signal; sync when back on network. Fieldwork named unstable connectivity as a live constraint.

## 6. AI angle — what's load-bearing

Strip the AI out and this is a checklist app that nobody needs.

The load-bearing work is reading a photograph of a crumpled, badly-lit Indonesian ingredient panel — often on a plastic sachet, sometimes handwritten, frequently in mixed Bahasa and trade names — and deciding which of those ingredients carry halal critical points. That's judgment, not lookup. "Pengemulsi" (emulsifier) is the canonical trap: the most-demanded emulsifier source is gelatin, and gelatin's main sources are cattle bone, cattle hide, and *pig hide*. A generic ingredient word maps to a halal-critical decision only if the model understands the derivation tree behind it.

Same for flavourings (*perisa*) and any animal-derived input, which the sources consistently name as the three categories where UMKM understanding breaks down and files fail.

The second load-bearing job is generating SJPH documentation in the register BPJPH expects, from messy input, in Bahasa. Manual SJPH drafting is the other big time sink; collapsing it from an afternoon to minutes is the second half of the value.

Neither of those was practical to sell at Rp99K/month before multimodal inference got cheap. That's the unlock.

## 7. Localization angle

This *is* the localization play — it doesn't have a generic global version at all.

- **Language:** Bahasa Indonesia throughout, including regional ingredient trade names. An English-first tool is dead on arrival with a companion in Blitar.
- **Payment rails:** QRIS and GoPay/OVO/DANA e-wallets, plus bank transfer via Virtual Account. Card-on-file subscription is the wrong assumption for this wallet — expect month-to-month top-ups.
- **Local pricing:** Rp99,000/month (~$6) for an individual companion is the ceiling that works. A $49/mo tool cannot exist here. The entire idea only clears because inference is cheap enough to serve a $6 seat profitably.
- **Regulatory specificity:** The product is worthless without BPJPH's positive list, critical-ingredient taxonomy, self-declare eligibility criteria, and SIHALAL's form structure encoded correctly. That specificity is both the moat and the maintenance burden.
- **Distribution channel:** WhatsApp is the operating system for this workforce. LP3H coordinate their rosters in WhatsApp groups. The product should be reachable from WhatsApp, and sold inside those groups.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:**
  - *Companion seat* — Rp99,000/month (~$6), unlimited scans, individual P3H.
  - *LP3H roster* — Rp79,000/seat/month at 20+ seats, includes the coordinator dashboard (~$4.80/seat).
  - *Institution plus* — Rp2,500,000/month (~$150) flat for large LP3H (100+ companions) with bulk export and invoice-readiness reporting.
- **ACV:** Individual ~$72/year. A mid-sized LP3H with 40 seats ~$2,300/year. Blended target ACV, weighted toward institutional deals: ~$1,100 per paying account.
- **Rough math to $1M ARR:** ~900 paying accounts at blended $1,100 — realistically about 250 LP3H institutional accounts plus 3,000 individual seats. Note the constraint honestly: there are only 309 LP3H nationally, so past roughly $600K ARR the institutional channel saturates and growth *must* come from individual seats and from adjacent markets.
- **Rough math to $5M ARR:** Indonesia alone doesn't get there on companion seats. $5M requires (a) expanding to the paid *regular* certification route where consultants charge Rp650K–Rp12.5M per file and can absorb far higher tooling fees, (b) selling to the UMKM-aggregator side — cooperatives, franchise groups, marketplace sellers certifying hundreds of SKUs, and (c) Malaysia/Brunei/Singapore halal regimes, which have different authorities but the same ingredient-criticality core. I'd call $5M a stretch case, not a base case. The base case is a genuinely good $1–2M business.
- **Expansion path:** Seats → institutional dashboard → per-file premium checks for regular-route work → renewal monitoring (halal certificates expire, and the same customer needs re-certification) → ingredient-supplier database subscription.

The honest weakness is here, and I'm scoring it down accordingly: **this is a deadline-driven business with a visible cliff.** October 2026 creates a surge. What happens in November 2026 is the question that decides whether this is a business or a spike, and the answer has to be renewals plus the continuous flow of newly-formed UMKM — not the backlog.

## 9. Go-to-market wedge — first 100 customers

- **The 309-institution list is public and finite.** LP3H are registered with BPJPH and most are attached to universities and Islamic institutions with published contact pages — UIN Salatiga, UIN Sunan Gunung Djati Bandung, Walisongo Halal Centre, UNISBA Blitar, Halal Center Cendekia Muslim all publish theirs. This is a one-week scraping and enrichment job producing a named list of every institutional buyer in the country. Direct WhatsApp outreach to the LP3H coordinator with a 90-second screen recording of a real rejection being caught. At 309 targets and a 10% close rate that's 30 institutional accounts — and each one brings 20–500 seats.
- **Buy the rejection, not the subscription.** Offer any LP3H a free batch audit: send us 20 files you're about to submit, we return the ones that will bounce and why. If we're right, you pay. This is a demo that costs us cents and proves the entire value proposition in one interaction — and it is the fastest way to falsify the idea if our detection isn't actually good.
- **P3H training cohorts are a standing funnel.** Training providers run continuous P3H certification courses (ESQ Halal Center, Yayasan Ponpes Makrojul Ma'aly, and dozens of pesantren-affiliated centres publish schedules). Every cohort graduates a batch of new companions who have zero submission experience and the highest rejection rates. Pay the training provider a referral fee to bundle a 3-month seat with course enrollment.
- **WhatsApp groups are the actual distribution network.** P3H coordinate in institution-run WhatsApp groups. Get a paid coordinator to drop the tool into their roster group and the seat sales are peer-to-peer. Budget for a small referral bounty per activated seat — this workforce is income-motivated by construction.
- **Post the ingredient traps as free content in Bahasa.** A public, free "is this ingredient critical?" lookup for the twenty ingredients that cause the most rejections — emulsifiers, flavourings, gelatin, animal-derived inputs. It ranks for the exact query a stuck companion types at 11pm, and it converts because the free tool ends at the rejection risk score.

## 10. Build complexity — justification

**Low.** The stack is off-the-shelf: a multimodal model for label reading, a structured ingredient taxonomy encoded from BPJPH's published positive list and critical-ingredient categories, a document generator, and a mobile-web app that tolerates bad connectivity. There's no custom model training, no hardware, no integration that requires anyone's permission — the MVP deliberately does *not* auto-submit into SIHALAL, it hands the companion a clean packet to paste. That single scoping decision removes all platform-integration risk and most of the build time.

The real work isn't engineering, it's the taxonomy: getting the critical-ingredient classification right, in Bahasa, is a domain-knowledge grind that needs a halal-literate collaborator. Two people, 6–8 weeks to a v1 a companion can use on a real file. That collaborator is not optional — see the risk flags.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Sells private tooling to licensed companions. Takes no cut of government subsidy and does not resell certification — the line SmartHalal explicitly draws too. No BPJPH licence needed to sell software. |
| Ethical — no harm / dark patterns | ✅ | Raises submission accuracy; the incentive is aligned with the regulator's stated goal of better verification quality. Must never be positioned as a way to slip weak files past review. |
| Market exists (evidence above) | ✅ | Rp81.4B disbursed against 465,338 certificates; 70,000+ companions; 309 institutions; incumbent already selling to this exact buyer. |
| 1–5 person team can build this | ✅ | Two people plus a halal-domain collaborator, 6–8 weeks. |
| Launchable with <$50K / ₹40L | ✅ | Well under $15K to launch: inference costs, a designer, and travel to two or three LP3H. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 17/20 | Paid only on issuance, hard October deadline, documented repeat-rejection cycle, regulator now curating their work. Not a 19 because the pain is concentrated in a compressed window rather than felt daily forever. |
| Demand evidence | 15 | 13/15 | Rp81.4B disbursed against 465,338 certificates is about as hard as demand evidence gets; a paying incumbent exists. Docked for thin direct customer voice — the petition drew 11 signatures, and I found no large forum of companions complaining about tooling specifically. |
| Build feasibility | 15 | 13/15 | Off-the-shelf multimodal stack, no platform integration in v1, 6–8 weeks for two people. Docked because the ingredient taxonomy is real domain grind. |
| Distribution clarity | 15 | 12/15 | 309 named institutional buyers is a genuinely enumerable list and WhatsApp groups are a real channel. Docked because closing Indonesian university-affiliated institutions is slower and more relationship-driven than a scrape-and-email fantasy admits. |
| Revenue mechanics | 15 | 10/15 | Pricing is right for the wallet and the $1M path is credible. Docked hard: $6/seat means volume is everything, the 309-institution channel saturates around $600K, and $5M needs markets outside the core thesis. |
| Time to first revenue | 10 | 8/10 | The free batch-audit demo can close a paying LP3H in weeks, and the October deadline makes buyers move fast. Not higher because institutional procurement at university-affiliated bodies isn't instant. |
| Defensibility | 10 | 3/10 | This is the weak axis and I won't dress it up. The taxonomy is copyable, the incumbent has a head start on the same buyer, and nothing stops BPJPH from shipping the check inside SIHALAL for free. Execution-and-speed moat only. |
| **Total** | **100** | **76/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `operations-heavy`

This needs someone who can ship a multimodal pipeline *and* someone willing to sit in Indonesian LP3H offices building relationships in Bahasa. A remote foreign founder without an Indonesian co-founder or first employee will lose to anyone local. Treat `domain-expertise-required` as satisfied by hiring, not by learning.

### Key assumptions to validate

1. **Assumption:** Rejection reasons are predictable enough that an AI screen catches a majority of them pre-submission. **How to test:** Get 50 historically rejected files plus 50 accepted ones from two friendly LP3H, run the screen blind, measure whether it separates them. Target ≥70% of rejections caught with <20% false alarms.
2. **Assumption:** P3H will personally pay Rp99K/month out of a ~Rp3M/month piecework income. **How to test:** Put a real payment page in front of 60 companions recruited through two WhatsApp groups. Measure paid conversion, not "would you pay" survey answers.
3. **Assumption:** The LP3H coordinator, not the individual companion, is the faster buyer. **How to test:** Run both motions in parallel for three weeks against 30 institutions and 100 individuals; compare close rate and cycle length.
4. **Assumption:** Demand survives past October 2026 via renewals and new UMKM formation. **How to test:** Ask ten LP3H coordinators directly what their roster does in November, and check BPJPH's stated post-mandate enforcement and recertification cadence.
5. **Assumption:** SmartHalal hasn't already locked the institutional channel. **How to test:** Ask every LP3H contacted what they currently use. If more than a third name SmartHalal as embedded, the wedge is narrower than assumed.

### Risk flags

1. **Deadline cliff / market timing:** The entire demand curve is shaped by 17 October 2026. Ten weeks out, a two-person team shipping in 6–8 weeks arrives with almost no runway before the peak. Arriving late to a deadline-driven market is arriving to a different, much smaller market. This is the single biggest risk and it argues for shipping the narrowest possible screen immediately rather than the full sketch.
2. **Regulator platform dependency:** BPJPH owns SIHALAL and could add ingredient screening natively, for free, at any time — and it has an obvious motive, since it's already curating P3H work for quality. That would not kill the business overnight but it caps it.
3. **Incumbent already in the seat:** SmartHalal sells AI tooling to PPH facilitators today. The differentiation argued above (narrow screen vs. marketplace) is a real strategic difference but it is a *positioning* moat, not a structural one, and they could refocus.
4. **Subsidy dependency:** The whole P3H economy runs on BPJPH incentive budgets that are already paying late. If the government reduces or restructures the Rp150K incentive after the mandate lands, the customer's income — and their willingness to pay for tooling — contracts with it.
5. **Domain-accuracy liability:** A tool that clears a file which then gets rejected damages trust immediately in a WhatsApp-connected workforce where word travels fast. Being confidently wrong about an emulsifier is worse than being silent.

## 14. Structured verdict

```
Score:                  76/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder with an Indonesian co-founder or first
                        hire who can work LP3H relationships in Bahasa, plus a
                        halal-literate domain collaborator on the taxonomy
Time to revenue:        4–8 weeks from launch (deadline pressure compresses it)
Capital to launch:      Rp150–250 juta / ~$10–15K
Top 3 assumptions to validate first:
  1. Rejection prediction actually works — blind test on 50 rejected + 50
     accepted historical files from two LP3H; need ≥70% catch rate
  2. Companions pay personally at Rp99K/month — live payment page to 60
     companions, measure paid conversion not stated intent
  3. Demand survives November 2026 — direct questions to 10 LP3H coordinators
     about post-mandate roster volume and recertification cadence
Kill criteria:
  - Abandon if the blind rejection test catches <50% of known-bad files
  - Abandon if <5% of 60 companions convert on a live payment page
  - Abandon if >1/3 of contacted LP3H already have SmartHalal embedded in workflow
  - Abandon if BPJPH ships native ingredient screening inside SIHALAL before v1
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Build the target list. Scrape and enrich all 309 LP3H from BPJPH registration and university halal-centre pages into names, coordinators, WhatsApp numbers, roster sizes. In parallel, encode the BPJPH positive list and critical-ingredient categories into a first-pass taxonomy — no product, just the classification logic.
- **Day 3–4:** Get files. Contact 20 LP3H coordinators, ask for 50 previously-rejected and 50 accepted submissions under NDA in exchange for a free audit. Run the screen blind against them. This is the experiment that matters — everything else is opinion.
- **Day 5:** Put a live Rp99,000/month payment page in two P3H WhatsApp groups with a 90-second Bahasa screen recording of a real rejection being caught. No mockups, no waitlist — a real checkout.
- **Decide go / no-go on:** ≥70% of known-rejected files flagged with a correct named reason at <20% false-alarm rate, **and** ≥5% of exposed companions completing a real payment. Both must clear. If detection works but nobody pays, the buyer is the LP3H and the pricing model is wrong. If nobody's files are predictable, there is no product here and the ten-week deadline means there's no time to find a different one.
