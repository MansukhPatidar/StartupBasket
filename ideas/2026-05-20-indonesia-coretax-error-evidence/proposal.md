---
title: "PajakBukti — Coretax error catcher for Indonesian tax consultants"
slug: indonesia-coretax-error-evidence
date: 2026-05-20
category: Compliance / Indonesia
complexity: Medium
score: 80
verdict: STRONG GO
confidence: Medium
oneLiner: "Captures every Coretax outage in real time and assembles the evidence packet a konsultan files for DJP penalty waivers."
tags:
  vertical: Compliance
  model: SaaS
  geography: SEA
  secondary: [Indonesia, Bahasa, UMKM, SMB, Tax-consultants, AI-agent, Force-majeure, Mobile-first]
axes:
  problem: 17
  demand: 13
  build: 12
  distribution: 12
  revenue: 12
  time: 8
  defensibility: 6
founderFit: [domain-expertise-required, technical-heavy]
featured: true
---

# PajakBukti — Coretax error catcher for Indonesian tax consultants

## 1. One-liner

Captures every Coretax outage in real time and assembles the evidence packet a konsultan files for DJP penalty waivers.

## 2. Trend signal — why now?

Indonesia's Directorate General of Taxes (DJP) launched **Coretax** in January 2025 to replace DJP Online and consolidate NPWP, e-Faktur, e-Bupot, and SPT filing into one platform. By Q1-Q2 2026 — the first full SPT Tahunan cycle on Coretax — the system started buckling at deadline pressure. CNN Indonesia ran "Coretax Eror di Hari Terakhir Lapor SPT" on 30 April 2026. DDTC, MUC, Pajakku, and Klikpajak all published rolling articles on Coretax breakdowns through April-May 2026. MUC identified **22 distinct kendala** that DJP itself acknowledged.

The political response was telling. DJP, via Decree **KEP-71/PJ/2026**, extended the Annual Corporate SPT deadline to 31 May 2026 and waived administrative sanctions in that window. KEP-54/PJ/2025 codified a broader rule: **no penalty if the taxpayer can demonstrate they tried to file during a system disruption.** The burden of proof sits squarely on the wajib pajak. The tax press is now telling everyone the same thing: "save screenshots, email pengaduan@pajak.go.id, log a Kring Pajak case ID, keep a digital trail."

Nobody productizes that trail. Pajakku and Klikpajak are happy-path filing tools — they help you submit on Coretax, not survive its outages. Konsultan pajak are doing it with shared Google Drives, phone galleries, and WhatsApp screenshots. That is the gap.

Provenance:
  - Signal 1: Coretax error wave Apr-May 2026, DJP acknowledged 22 kendala, CNN/DDTC/MUC coverage — https://news.ddtc.co.id/berita/nasional/1818937/wp-keluhkan-coretax-eror-jelang-deadline-spt-begini-respons-djp — 2026-04
  - Signal 2: KEP-71/PJ/2026 extended Annual SPT deadline + KEP-54/PJ/2025 codified "no penalty if disruption proven" — burden of proof on taxpayer — https://www.lmiconsultancy.com/corporate-tax-income-indonesia-extended-waived-deadline-for-annual-returns-until-31-may-2026/ — 2026-05
  - Signal 3: Indonesia government allocating IDR 2T to UMKM tax facility, 542k taxpayers covered, 0.5% UMKM final tax extended to 2029 — formal-tax economy expanding under Coretax — https://muc.co.id/en/article/extended-final-income-tax-for-individual-msme-taxpayers-valid-until-2029 — 2026
  Category: Regulatory arbitrage

## 3. The opportunity

DJP created a penalty-waiver path but offloaded the evidence problem onto small konsultan firms. Every Coretax outage during a deadline becomes an admin scramble: gather screenshots from different staff phones, reconstruct what was being filed, write a Bahasa pengaduan email, get a Kring Pajak case ID, and pray the DJP file the case correctly weeks later when a denda notice arrives.

This is a 2-hour-per-incident clerical chore at a moment when the konsultan is already drowning. PajakBukti collapses it to a 30-second mobile flow:

1. Coretax fails. Konsultan or staff taps PajakBukti.
2. App captures the active screen, timestamps it in Asia/Jakarta TZ, hashes the page DOM fingerprint, records the URL + endpoint that errored.
3. Draft pengaduan email auto-composed in Bahasa, addressed to pengaduan@pajak.go.id, with CC to client and an attached PDF evidence packet.
4. Kring Pajak 1500200 case ID logged into the packet when the konsultan files the call.
5. Whole packet sits in a per-client archive ready to attach to a Surat Permohonan Penghapusan Sanksi when DJP eventually invoices a denda.

Pajakku/Klikpajak/OnlinePajak won't touch this. Selling "evidence the government's flagship platform broke" is politically poisonous for an official DJP partner (PJAP) — they hold their PJAP license at the regulator's pleasure. PajakBukti can't be a PJAP, and that's the whole point.

## 4. Target market

- **Primary customer:** Indonesian tax consulting firms (konsultan pajak), 1-3 person practices serving 30-300 SME/UMKM clients each. Concentrated in Jakarta, Surabaya, Bandung, Medan, Semarang, Tangerang.
- **Why they buy:** Each Coretax outage = a denda risk per client. A single ₹50M PPN late-payment denda for a mid-size SME client = the konsultan's annual fee plus client trust. They will pay $25-50/month per firm to insulate themselves.
- **Rough TAM reasoning:** IKPI lists **7,931 registered members as of January 2026**. Add another ~2-3K certified-but-non-IKPI konsultan, plus in-house accountants at ~50K PKP-registered SMEs (revenue > IDR 4.8B). Conservative addressable: 10K firms + 20K in-house teams = 30K potential workspaces. At IDR 750K/mo average, the addressable revenue ceiling is ~IDR 270B (~$17M) — comfortably above the $5M ARR target with single-digit penetration.
- **Why now for them:** SPT Tahunan 2026 (the first full Coretax cycle) was the wake-up. Monthly PPN cycles through 2026-2027 will produce dozens more outage windows. Konsultan who built a clean evidence pipeline in May 2026 will out-compete those who didn't.

## 5. Product sketch (MVP)

- One-tap mobile capture (Android first; konsultan staff use cheap Androids): screenshot + Coretax URL + timestamp + Asia/Jakarta TZ + DOM hash.
- Per-incident packet builder: groups all screenshots from one outage into a single PDF dossier with hashes and audit timeline.
- Bahasa pengaduan email drafter: pre-filled with NPWP, client name, filing being attempted, error description, attached PDF. One tap to send.
- Kring Pajak case-ID logger: field to paste in the 1500200 case number after the call, stamped against the incident.
- Per-client archive: every client's outage history in one place, filterable by date and SPT type (PPh 21/23, PPN, SPT Tahunan).
- "Denda response" generator: when the konsultan receives a Surat Tagihan Pajak (STP), tap a client, tap the relevant outage period, get a draft Surat Permohonan Penghapusan Sanksi referencing KEP-54/PJ/2025 + the evidence packet.
- WhatsApp share: send a client a stripped-down PDF showing "we proved you tried to file, here's the case ID" — turns an admin chore into a client-retention tool.
- Multi-staff workspace: 2-5 staff phones feeding one firm's archive.

## 6. AI angle — what's load-bearing

Two AI loads. First, **OCR + Bahasa extraction** parses error screenshots into structured fields (error code, affected form, NPWP from header, timestamp from the page chrome) — so the konsultan doesn't retype anything. Second, the **pengaduan email drafter and Surat Permohonan generator** produce regulator-grade Bahasa Indonesia formal letters citing the right decree, NPWP, error context, and waiver basis. A konsultan writing 30 of those by hand each season is hours of work; AI collapses it to seconds.

Remove the AI and the product becomes a shared Dropbox. With it, every outage produces a regulator-ready packet without the konsultan thinking about the language.

## 7. Localization angle

This is an Indonesia-only play, deliberately. The wedge is:

- **Bahasa Indonesia** drafting against specific DJP decrees (KEP-54/PJ/2025, KEP-71/PJ/2026) and the specific Coretax surface (e-Bupot, e-Faktur, SPT Tahunan badan/orang pribadi forms).
- **Pricing** at IDR 500K-1M/mo per firm (~$30-60). A US/global SaaS price point of $99-299 wouldn't survive — but the local price still leaves comfortable margin given $5-10/mo of infra cost per workspace.
- **Distribution** through IKPI regional chapters (Jakbar, Depok, Bekasi, Surabaya, Bandung, etc. — each runs its own WhatsApp groups and chapter events), plus konsultan WhatsApp groups that already exchange Coretax tips.
- **Payment rails**: QRIS, GoPay, OVO, bank transfer via Xendit. Not Stripe.

The same wedge fails in the Philippines (BIR EIS exempts micro-enterprises), Vietnam (VAT system more stable), or Malaysia (e-Invoice rollout staggered). It's a moment for one country.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** IDR 499K/mo (~$30) for a 1-2 staff firm workspace. IDR 999K/mo (~$60) for 3-5 staff. IDR 1.99M/mo (~$120) for in-house finance teams at SME-PKP clients (more clients = more value).
- **ACV:** ~IDR 9M (~$540) blended.
- **Rough math to $1M ARR:** ~2,800 firm workspaces at $540 ACV = $1.5M ARR. With 7.9K IKPI members + non-IKPI, ~30% penetration in 24 months gets there.
- **Rough math to $5M ARR:** ~9,000 workspaces or 4,000 firms + 5,000 in-house SME teams. Requires expansion into adjacent products (Surat Permohonan generator for non-Coretax penalties, audit-trail for routine PPN, integration with the bigger PJAP players' export formats) and probably a small white-label deal with one of the regional IKPI chapters.
- **Expansion path:** Per-client tier (each client a konsultan adds becomes a billable workspace). Annual SPT add-on. Audit-defense add-on for when DJP follow-up examinations land in 2027-2028 based on 2026 filings.

## 9. Go-to-market wedge — first 100 customers

- **WhatsApp DM to IKPI Jakbar + IKPI Depok + IKPI Surabaya members.** IKPI publishes member lists by chapter. Scrape, validate against sikop.kemenkeu.go.id (DJP's public konsultan directory), and send a personalized Bahasa-language Loom showing the May 2026 outage as a worked example. Expect 5-8% reply rate from 1,500 contacts = ~80-120 leads.
- **Pajakku/Klikpajak/Online Pajak webinar attendee lists.** They run free Coretax webinars (Feb 2026 SPT PPh OP, Mar 2026 SPT Badan). Scrape LinkedIn attendees + comment threads + the public Q&A pages. Cold-outreach the attendees with "you watched the webinar, here's what they don't help with."
- **Twitter/X "coretax error" listening.** DJP itself pointed to X as the complaint heatmap. Reply to every public complainant with a one-line offer + a Loom. Polite, useful, signed by a real person.
- **IKPI chapter event sponsorship.** ~IDR 5M (~$300) buys a 5-minute slot at a Jakarta chapter dinner. Single-day pipeline of 30-50 high-intent leads.
- **Referral incentive.** Each konsultan who refers another gets 3 months free. Konsultan know each other. This is how Mekari (Klikpajak's parent) actually grew.

If 1.5K cold contacts + 5 chapter slots + 200 webinar reply-outs + Twitter listening can't produce 100 paying firms in 90 days during peak Coretax pain, the wedge is wrong — but May-Aug 2026 is the perfect window.

## 10. Build complexity — justification

**Medium.** No custom models — Bahasa OCR is Google Vision / EasyOCR territory, and a frontier model handles formal-letter Bahasa drafting easily. The work is in the mobile-capture polish (Android first, foreground service for screen capture during a Coretax browser session), the per-incident packet PDF generator, and the per-client archive UX. Pair of builders, 8-12 weeks to v1. The harder part is the domain learning — knowing which decree to cite for which type of penalty waiver — but two weeks shadowing one Jakarta konsultan firm closes that gap.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | DJP explicitly invites pengaduan emails and case logs. PajakBukti only structures what taxpayers are already told to do. |
| Ethical — no harm / dark patterns | ✅ | The product helps taxpayers exercise an existing legal right. No fabrication — only captures real events. |
| Market exists (evidence above) | ✅ | 7,931 IKPI + 22 acknowledged Coretax kendala + KEP-54 + KEP-71. |
| 1–5 person team can build this | ✅ | 2-person pair, 8-12 weeks. |
| Launchable with <$50K / ₹40L | ✅ | ~$15-20K total: dev tools, infra, IKPI chapter sponsorships, one Jakarta trip. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 17/20 | Each outage = direct denda risk per client. Konsultan revenue + reputation on the line. Felt monthly (PPN) and at SPT season annually. |
| Demand evidence | 15 | 13/20 | CNN/DDTC/MUC coverage of error wave. DJP itself acknowledged 22 kendala. Decree KEP-71/PJ/2026 codifies the waiver path. Multiple independent signals, no single-signal hand-waving. |
| Build feasibility | 15 | 12/15 | Off-the-shelf OCR + LLM + mobile capture + PDF generation. No research-grade work. ~8-12 weeks. |
| Distribution clarity | 15 | 12/15 | Named directory (IKPI + sikop.kemenkeu), specific chapter WhatsApp groups, specific webinar attendee lists. Channel math works. |
| Revenue mechanics | 15 | 12/15 | IDR 500K-2M/mo pricing benchmarked against Pajakku/Klikpajak tiers. Math to $1M ARR clean; $5M ARR requires expansion product. |
| Time to first revenue | 10 | 8/10 | Konsultan in active panic May-Aug 2026. Revenue in 2-4 weeks once the demo lands. |
| Defensibility | 10 | 6/10 | Workflow lock-in via per-client archive. Brand within IKPI niche. Window-of-opportunity moat as Coretax stabilizes — but PPN is monthly, so evidence trail use case outlasts the worst of the outages. |
| **Total** | **100** | **80/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`domain-expertise-required` · `technical-heavy`

This needs someone fluent in Bahasa Indonesia and familiar with DJP procedure — ideally an ex-konsultan or someone who's filed Indonesian taxes themselves. Pair with a mobile-leaning engineer. Without the domain co-founder, the formal Bahasa drafting will smell wrong to konsultan pajak and the product loses trust on day one.

### Key assumptions to validate (3–5)

1. **Assumption:** Konsultan will pay IDR 500K-1M/mo for evidence tooling, not just batch it into existing Pajakku spend. **How to test:** 20 in-person Jakarta interviews + a fake landing page with IDR 499K/mo "Lock my May pricing" button. Conversion >5% on warm traffic = green.
2. **Assumption:** Coretax outage pain persists through 2026-2027 (not patched away in Q3 2026). **How to test:** Monitor DJP Coretax status pages + DDTC Coretax error coverage cadence weekly. Kill criterion: if Coretax has zero deadline-week outages for 3 consecutive months, the urgency is gone.
3. **Assumption:** A pengaduan email + Surat Permohonan packet actually gets penalty-waivers granted. **How to test:** Walk 3 konsultan through their last 3 waiver attempts. Document outcome rate. If <50% of well-evidenced petitions get waivers, the value prop weakens.
4. **Assumption:** Indonesian konsultan will adopt a non-PJAP tool. **How to test:** Direct ask in interviews — "would you use a tool that helps you when Pajakku/Klikpajak can't?" Watch for PJAP-loyalty hesitation.
5. **Assumption:** Mobile-first capture works reliably for the way konsultan staff actually use Coretax (mostly desktop browsers). **How to test:** Shadow 5 konsultan firms during a PPN deadline. Observe: do they screenshot on desktop and Slack to phone, or directly on phone?

### Risk flags

1. **Regulatory risk:** If DJP fixes Coretax fast and the error wave subsides, the urgency disappears. Mitigation: lean into the broader "audit-trail / penalty-waiver" use case which outlasts Coretax-specific outages.
2. **Platform dependency:** If DJP makes pengaduan submission native inside Coretax (with auto-evidence), PajakBukti's wedge collapses. Probability: moderate, 12-24 months out. Mitigation: race to win konsultan workflow lock-in before that.
3. **PJAP retaliation:** Pajakku/Klikpajak could copy this as a free feature. Counter: their PJAP status makes "we caught the government breaking" awkward marketing. Even if they ship it, they'll under-invest.
4. **Founder-fluency risk:** Without a Bahasa-fluent operator, formal letter quality will be off, and konsultan will spot it instantly.

## 14. Structured verdict

```
Score:                  80/100
Verdict:                STRONG GO
Confidence:             Medium
Best-fit builder:       Indonesian or Indonesia-based pair — one ex-konsultan / tax-professional, one mobile-leaning full-stack engineer.
Time to revenue:        2-4 weeks post-launch (during May-Aug 2026 Coretax error window)
Capital to launch:      $15-20K (IDR 230-310 juta)
Top 3 assumptions to validate first:
  1. Konsultan willingness to pay IDR 500K-1M/mo — 20 in-person Jakarta interviews + paid-landing-page test.
  2. Outage cadence persists through Q3-Q4 2026 — weekly DJP/DDTC status monitoring.
  3. Penalty-waiver grant rate when evidence is well-packaged — interview 3 konsultan, document outcomes.
Kill criteria:
  - Abandon if <10 of 20 Jakarta konsultan interviews show explicit pay-intent.
  - Abandon if Coretax has 3 consecutive months of zero deadline-week outages.
  - Abandon if Pajakku/Klikpajak ship a competing "outage evidence" feature for free before v1.
```

## 15. Next step — 1-week validation sprint

If I had one week:

- **Day 1-2:** Fly to Jakarta. Schedule 8-10 in-person konsultan interviews (Jakbar + Pusat chapters). Prepare a 90-second Loom demo of the manual evidence flow and the proposed product flow.
- **Day 3-4:** Run the interviews. Ask: "Last Coretax outage — walk me through what you did." Then show the Loom and ask: "Would you pay IDR 750K/mo for this? Why or why not?" Record verbatim quotes.
- **Day 5:** Spin up a one-page Bahasa landing site with IDR 499K/mo "lock founder pricing — first 100 firms" button. Drive ~500 visitors from a single IKPI chapter WhatsApp share + a Twitter/X reply campaign. Decide go/no-go on the basis of: ≥12 of 20 interviewees expressing pay-intent AND ≥10 landing-page conversions in 48 hours.

Falsifiable: hard numbers gate the build commit. No "I think people liked it" exit.
