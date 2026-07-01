---
title: "Reclaimo — repair-bonus filer for EU repair shops"
slug: eu-repair-bonus-claim
date: 2026-07-02
category: HomeServices / EU (Austria-first)
complexity: Medium
score: 74
verdict: GO
confidence: Medium
oneLiner: "Turns each repair invoice and before/after photos into a ready-to-submit repair-bonus claim before the deadline expires."
tags:
  vertical: HomeServices
  model: SaaS
  geography: EU
  secondary: [Compliance-driven, AI-agent, Multilingual, SMB, Solo-builder]
axes:
  problem: 15
  demand: 12
  build: 12
  distribution: 12
  revenue: 11
  time: 7
  defensibility: 5
founderFit: [technical-heavy, operations-heavy]
featured: false
---

# Reclaimo — repair-bonus filer for EU repair shops

## 1. One-liner

Turns each repair invoice and before/after photos into a ready-to-submit repair-bonus claim before the deadline expires.

## 2. Trend signal — why now?

Europe just turned "get the state to subsidise this repair" into recurring paperwork that lands on the *repair shop*, not the customer — and the volume is about to spike.

- **Austria launched a brand-new scheme in January 2026.** The Geräte-Retter-Prämie (the rebranded Reparaturbonus) went live to partner businesses on 10 Dec 2025 and to consumers on 12 Jan 2026. The **repair business** submits the funding documents, within **four weeks** of the voucher being redeemed, and the subsidy (50% up to €130, plus up to €30 for a cost estimate) is paid to the shop's bank account. Six months old. No dominant tooling.
- **France proves the model — and the pain.** ~5,000 QualiRépar-labelled repairers front the discount and then reclaim it per-invoice from **two** competing eco-organisations (ecosystem + Ecologic) on **two** portals. Each claim is estimated at ~7 minutes of manual entry; UFC-Que Choisir and trade press call it "extremely time-consuming," and some shops refuse to offer the bonus because the admin is too heavy. ~1.9M bonus repairs were paid in the first three years.
- **The EU Right to Repair Directive (2024/1799) applies from 31 July 2026** across all 27 member states — driving repair volume up and pushing more countries to stand up national repair-incentive/claim schemes. More schemes + more repairs = more per-job claim admin, in more languages, with more deadlines.

The one thing standing between a small shop and free government money is a fiddly, per-invoice, deadline-bound upload. That's a workflow, and workflows are software.

Provenance:
  - Signal 1 (demand): Austrian Geräte-Retter-Prämie — business submits refund docs within 4 weeks of voucher redemption — https://www.usp.gv.at/themen/betrieb-und-umwelt/laufender-betrieb/weitere-informationen-laufender-betrieb/geraete-retter-praemie.html — 2026-07-02
  - Signal 2 (demand/pain): French QualiRépar reimbursement ~7 min/claim across two eco-organisation portals, criticised as too heavy; some shops opt out — https://pro.ecosystem.eco/profil/reparateur/qualirepar-remboursement + https://reparea.fr/blog/bonus-reparation-guide-complet-2026 — 2026-07-02
  - Signal 3 (economic/feasibility): EU Right to Repair Directive applies 31 July 2026, expanding repair volume and national schemes; France paid ~1.9M bonus repairs in 3 years — https://commission.europa.eu/law/law-topic/consumer-protection-law/directive-repair-goods_en + https://decouvrir.ecosystem.eco/actualites/bonus-reparation-3ans — 2026-07-02
  Category: Geographic arbitrage

## 3. The opportunity

France already has an incumbent for the *plumbing*: Reparly (€19.99/mo) auto-declares QualiRépar to both eco-organisations via their APIs. That tells us two things — repairers will pay a monthly fee for this, and the ROI story ("9 forgotten claims × €25 = €225/mo lost") closes deals. But Reparly is **France-only** and is essentially an API bridge.

The gap is everywhere France isn't. **Austria's scheme is six months old, the business bears the claim admin, there's a hard four-week deadline, and no equivalent tool exists.** The EU directive is about to trigger the same dynamic in more member states. The opportunity is a **multi-country repair-bonus claim filer** that (a) wins Austria first where nobody serves the business side, (b) does the pre-flight that actually gets claims *accepted* — photo completeness, appliance-family eligibility, correct bonus amount, consumer-data match, deadline countdown — not just raw submission, and (c) adds each new national scheme as the directive rolls it out. Proven in France, absent next door: textbook geographic arbitrage.

The incumbent's weakness is scope. A tool that treats "which country/scheme applies to this job" as a first-class dimension beats a single-country API wrapper the moment a repairer works near a border, serves a chain across markets, or a second scheme launches.

## 4. Target market

- **Primary customer:** Independent electrical/electronics & appliance repair shops and mobile-phone repair businesses in Austria (1–8 staff), expanding to France's ~5,000 QualiRépar repairers and, post-directive, Belgium/Germany-regional/other EU schemes. Also the mechatronics/Elektro trade members funneled through Reparaturnetzwerk (~170 shops in Vienna alone) and Reparaturführer (7 states + Graz).
- **Why they buy:** "I fixed the toaster, gave the customer their €40 off, and now I have four weeks to upload the invoice, both photos and the right form to the right portal or I eat the discount. I do this thirty times a month and I hate it." Fronting a subsidy and then failing to reclaim it is a direct cash loss.
- **Rough TAM reasoning:** Austria: low thousands of eligible repair businesses across the scheme's device families. France: ~5,000 labelled repairers and climbing (labelling barrier dropped to €100/3yr in March 2026). Add EU states standing up schemes post-July-2026 and the addressable base is tens of thousands of shops — small per shop, but sticky and recurring.
- **Why now for them:** Austria's scheme is new and the deadline is unforgiving; the EU directive raises repair volume from 31 July; and every forgotten or rejected claim is money they already gave away.

## 5. Product sketch (MVP)

- Snap the repair invoice + the required before/after photos on a phone; the tool reads them and drafts the claim.
- Auto-detects the appliance family and checks it's eligible for the applicable scheme, with the correct bonus/subsidy amount pre-filled.
- Pre-flight validator: flags missing photo, mismatched consumer name/phone, below-minimum invoice, or wrong device family *before* submission — the top rejection causes.
- Deadline tracker: a live countdown per job (Austria's 4-week window; France's per-cycle timing) with reminders so nothing lapses.
- Multi-scheme router: picks the right portal/eco-organisation for each job (Austria KPC; France ecosystem vs Ecologic by brand) and submits via API where available, or produces a clean upload-ready packet where not.
- Claim ledger: every submitted claim, its status, expected payout date, and reconciliation against the bank deposit — so the shop sees exactly what's owed.
- Cost-estimate claims (Austria's up-to-€30 estimate subsidy) handled as a distinct claim type.

## 6. AI angle — what's load-bearing

Vision + document understanding is the core, not decoration. The tool reads a photographed, often hand-annotated invoice and the before/after images, extracts line items, device type, serial/model, and consumer identity, then maps them to a specific scheme's eligibility rules and required fields. Remove the AI and you're back to the 7-minute manual re-key that the whole product exists to kill. The second load-bearing piece is rules reasoning — matching each job to the right scheme, family, and bonus amount across countries that change these tables regularly. Without automated reading + rules mapping, this is a spreadsheet, not a product.

## 7. Localization angle

Localization *is* the product. This only works if it speaks German (Austria) and French (France) natively, understands each scheme's forms and appliance-family taxonomy, and routes to the correct national body. A generic "repair CRM" cannot do this — the value is in knowing that a Föhn in Austria and a sèche-cheveux in France map to different schemes, amounts, deadlines, and portals. The per-country regulatory detail is the moat and the reason a US field-service tool can't parachute in.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** €25/mo per shop flat (positioned just above Reparly's €19.99 by covering multiple schemes + rejection-proofing), with a €39/mo tier for multi-location businesses and higher claim volume.
- **ACV:** ~€300–470/shop/year.
- **Rough math to $1M ARR (~€920K):** ~2,600 shops at €30/mo blended × 12. Realistic across Austria + France combined given ~5,000 labelled repairers in France alone.
- **Rough math to $5M ARR:** ~11,000 shops at ~€38/mo blended — requires winning three or more national schemes (Austria + France + two post-directive markets) and the multi-location tier carrying weight. Plausible only if the directive spawns the extra schemes on schedule.
- **Expansion path:** more schemes per shop (border/multi-market coverage), per-location seats, and a transactional upsell — a small % success fee on recovered claims for shops that prefer pay-per-claim over subscription.

## 9. Go-to-market wedge — first 100 customers

- **Scrape the public partner-shop directories.** Austria's Reparaturführer (7 states + Vienna network + Graz) and the Geräte-Retter-Prämie partner list are public. Pull names, trades, contacts — a finite, targeted list of exactly the shops already in the scheme and therefore already doing the claim admin.
- **Deadline-anxiety cold outreach in German.** Email/WhatsApp each shop a 60-second Loom in German showing a photographed invoice → submitted claim in under a minute, timed against their 4-week deadline. Expect a repair-shop cold-email reply rate in the low single digits; a list of a few thousand converts a first cohort.
- **Trade-body channel.** WKO (Austrian Chamber) mechatronics/Elektro guilds, Reparaturnetzwerk Wien, and regional repair networks already publish the scheme to members and want participation up. A webinar or newsletter placement puts the tool in front of pre-qualified shops.
- **France beachhead via displacement.** Target QualiRépar repairers frustrated with running two portals; lead with "one tool, both eco-organisations, and it catches rejections before you submit."
- **Referral inside networks.** Repair shops in a city network talk; a €25/mo tool that pays for itself on the first recovered claim spreads by word of mouth.

## 10. Build complexity — justification

Medium. The web app, photo capture, OCR/vision extraction, and a rules table are all off-the-shelf. The real work is the per-scheme integration and rules encoding: Austria's KPC submission, France's ecosystem/Ecologic APIs, appliance-family taxonomies, and keeping them current as tables change (France revised in March 2026; Austria is new). That's integration and domain grind, not research — a small team ships a credible Austria-only v1 in ~10–12 weeks and layers France after.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | A submission-assist tool; the shop remains the claimant. No licence to operate a scheme. |
| Ethical — no harm / dark patterns | ✅ | Anti-fraud pre-flight actually *reduces* bad claims eco-orgs worry about. |
| Market exists (evidence above) | ✅ | Live schemes, a paying incumbent in France, ~7-min-per-claim documented pain. |
| 1–5 person team can build this | ✅ | Off-the-shelf stack + per-scheme integration grind. |
| Launchable with <$50K / ₹40L | ✅ | No capex; APIs and vision inference are usage-priced. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 15/20 | Real, recurring cash-loss pain with a hard deadline — but a €25–225/mo problem, not hair-on-fire existential. |
| Demand evidence | 15 | 12/15 | Paying incumbent in France proves WTP; live Austrian scheme; documented "too time-consuming" complaints. Austria WTP still unproven. |
| Build feasibility | 15 | 12/15 | Standard stack; integration + rules grind across schemes is the only real work. |
| Distribution clarity | 15 | 12/15 | Public partner directories = a named, finite list; trade bodies want participation up. Cold-email conversion uncertain. |
| Revenue mechanics | 15 | 11/15 | Benchmarked against Reparly €19.99; ACV modest, so $1M ARR needs thousands of small shops across ≥2 countries. |
| Time to first revenue | 10 | 7/10 | Self-serve €/mo to a warm, deadline-pressured list; realistic first paid shops in 6–8 weeks post-launch. |
| Defensibility | 10 | 5/10 | Execution + accumulating per-scheme rules knowledge; a determined clone can replicate the API bridge (Reparly did). Moat is multi-country coverage + rejection data. |
| **Total** | **100** | **74/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` (vision extraction + multi-portal integration) · `operations-heavy` (per-scheme rules upkeep, German/French-language outreach). A founder with EU repair-trade or right-to-repair domain contacts is a strong plus.

### Key assumptions to validate (3–5)

1. **Assumption:** Austrian repair shops feel the 4-week claim admin enough to pay ~€25/mo. **How to test:** 20–30 phone interviews with Geräte-Retter-Prämie partner shops; ask how many claims/month, time spent, and any lapsed deadlines.
2. **Assumption:** Vision extraction is accurate enough on real (messy, handwritten) invoices + photos to save meaningful time. **How to test:** run 50 real invoices from pilot shops through the extractor; measure fields-correct rate and time-to-submit vs manual.
3. **Assumption:** The multi-country story beats France's single-country incumbent for cross-border/multi-scheme shops. **How to test:** interview 10 shops near borders or in chains; would they switch/pay for one tool covering multiple schemes?
4. **Assumption:** Scheme APIs/portals allow third-party submission at reasonable stability. **How to test:** confirm KPC/ecosystem/Ecologic integration terms before building beyond a packet-builder fallback.

### Risk flags

1. **Platform dependency:** Schemes can change forms, rules, or API access (France already revised in March 2026; Austria is brand new and may shift). Mitigate with a portal-agnostic "upload-ready packet" fallback so the tool survives API changes.
2. **Political/budget risk:** Repair-bonus schemes are government-funded and can be cut or paused (Germany's Thüringen killed its program end-2025; a federal German scheme keeps failing). If a target market's scheme dies, that market's demand evaporates.
3. **Thin ACV / fragmentation:** €25/mo across many tiny shops in many jurisdictions is operationally heavy; support and localization cost scale with country count.
4. **Incumbent expansion:** Reparly could add Austria before you reach scale. Speed into Austria matters.

## 14. Structured verdict

```
Score:                  74/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder (vision + integrations) with an EU repair-trade or right-to-repair domain advisor; German-language capability essential
Time to revenue:        6–8 weeks post-launch (Austria-first, warm list)
Capital to launch:      €5–10K ($6–11K)
Top 3 assumptions to validate first:
  1. Austrian shops will pay ~€25/mo — 20–30 partner-shop interviews on claim volume + time lost
  2. Vision extraction saves real time on messy invoices — 50 real docs through the extractor, measure accuracy + time
  3. Scheme APIs permit stable third-party submission — confirm KPC/ecosystem/Ecologic terms before over-building
Kill criteria:
  - Abandon if <20% of 40 Austrian partner-shop outreach conversations show willingness to pay a monthly fee
  - Abandon if vision extraction can't clear ~90% field accuracy on real invoices without heavy manual correction
  - Abandon if the two largest target schemes both bar third-party submission AND ban packet-assisted uploads
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Scrape the Austrian Geräte-Retter-Prämie partner list + Reparaturführer. Build a German one-pager and a 60-second demo mock (photo → submitted claim). Line up interviews.
- **Day 3–4:** Run 20–30 calls/messages with Austrian partner shops: claims per month, minutes per claim, any lapsed deadlines, and "would you pay €25/mo to make this one-tap?" Collect 5–10 verbatim quotes. In parallel, test the extractor on any real invoices interviewees share.
- **Day 5:** Go/no-go. **Go** only if ≥8 shops say they'd pay and the extractor clears ~90% field accuracy on the sample. Falsifiable: a specific count of willing shops and a measured accuracy number, not a vibe.
