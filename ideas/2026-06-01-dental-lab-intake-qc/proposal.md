---
title: "CaseScreen — intake screen for dental labs"
slug: dental-lab-intake-qc
date: 2026-06-01
category: HealthTech / US-SMB
complexity: Medium
score: 75
verdict: GO
confidence: Medium
oneLiner: "Inspects every dental case at the door — flags missing shade, bad photos, void margins before a technician touches it."
tags:
  vertical: HealthTech
  model: SaaS
  geography: US
  secondary: [SMB, AI-agent, Workflow-automation, Solo-builder, Vision-AI]
axes:
  problem: 16
  demand: 12
  build: 11
  distribution: 12
  revenue: 11
  time: 8
  defensibility: 5
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# CaseScreen — intake screen for dental labs

## 1. One-liner

Inspects every dental case at the door — flags missing shade, bad photos, void margins before a technician touches it.

## 2. Trend signal — why now?

Dental labs lose real money on remakes, and the data says most of those remakes are avoidable garbage-in problems that show up at intake — not craftsmanship failures.

- **42% of early remakes correlate with missing or unclear Rx data; 28% with uncalibrated shade photos taken under non-dental lighting.** "Missing shade photos hide in WhatsApp until the remake" — labs discover the missing detail *after* the technician already invested time. ([evismart.com](https://evismart.com/post/the-remake-that-shouldnt-have-shipped), 2026)
- **The remake economics are brutal.** National remake rate runs 4–7%; nearly a fifth of dentists report >4%. Per Dental Lab Network owners, a lab has to fabricate **5–7 units at full fee to recover the loss on one no-charge remake**. Spear Education puts the compounding annual cost "in the tens of thousands." ([Spear](https://www.speareducation.com/resources/spear-digest/the-cost-of-laboratory-remakes/), [dentallabnetwork.com](https://dentallabnetwork.com/forums/threads/cost-of-remake.15363/), 2026)
- **AI vision crossed the price/quality line in the last 12 months.** Off-the-shelf vision models now grade clinical dental photographs and flag scan issues — incomplete coverage, undercuts, margin voids — reliably enough to ship. ([Frontiers in Dental Medicine](https://www.frontiersin.org/journals/dental-medicine/articles/10.3389/fdmed.2026.1814876/full), 2026; [Yucera AI integration review](https://www.yucera.com/blogs/ai-integration-in-dental-scanning-and-design-2026/), 2026)

Provenance:
  - Signal 1 (demand): 42% of remakes tied to missing/unclear Rx, 28% to bad shade photos hidden in WhatsApp — evismart.com — 2026
  - Signal 2 (economic): US dental lab market $7.6B across 4,375 fragmented labs (no player >5% share); LMS incumbents charge $79–250/mo but none do intake image QC — IBISWorld / dentallabnetwork.com — 2026
  - Signal 3 (feasibility): AI vision now reliably grades dental photos and flags scan coverage/margin issues at off-the-shelf API cost — Frontiers in Dental Medicine / Yucera — 2026
  Category: Tech-unlock

## 3. The opportunity

Every restoration a lab makes starts with three inputs from the dentist: a scan (STL) or impression, shade photos, and a prescription (Rx). When any of those is wrong or missing, the lab has two bad options: stop and chase the dentist (delays the case, annoys the customer) or guess and proceed (risks a remake the lab eats). In practice small labs *guess*, because chasing is friction and the case is already in the queue.

The incumbents — LabStar, Evident, Magic Touch, EasyRx ($79–250/mo) — solve case **tracking, billing, and dentist portals**. Their portals enforce *text fields* (did you type a shade? did you pick a material?) but **nobody looks at the actual image**. A dentist can type "A2," attach a yellow-tinted bathroom-light photo of the wrong tooth, and the portal waves it through. The remake is born at that moment and discovered three days later.

CaseScreen is the missing layer: an **AI inspection gate that reads the actual files** — scan completeness and margin integrity, shade-photo lighting/angle/in-frame-tooth, and Rx field completeness — at the second the case arrives, across whatever channel it arrived through (portal, email, WhatsApp forward). It returns a pass/flag in seconds and auto-drafts the one "we need X before we start" message back to the dentist. The lab fixes garbage *before* a tech touches it.

## 4. Target market

- **Primary customer:** Owner/operator of an independent dental lab in the US, 2–25 technicians, $300K–$3M annual revenue. The owner is usually a master technician who also runs the floor and personally eats remake losses.
- **Why they buy:** In their words — "Sometimes feel as if we just bend over and take 1 for the team!" Labs "frequently receive cases without specifying details like material or shade." Every avoided remake is 5–7 units of recovered margin and a saved customer relationship. They feel this weekly.
- **Rough TAM reasoning:** ~4,375 US dental labs (IBISWorld). Conservatively 2,000 are the right size — too big to ignore remakes, too small to build custom QC. At $249/mo that's a ~$6M ARR ceiling on US independents alone; DSO-owned lab groups and the UK/AU/India lab markets extend it well past $5M.
- **Why now for them:** Remake rates haven't improved and the labor to chase cases got more expensive; meanwhile their dentists send more digital (scanner-native) cases than ever, so the inputs are now machine-readable files instead of physical impressions — which is exactly what makes automated inspection possible.

## 5. Product sketch (MVP)

- **Drop-zone + channel capture:** lab forwards/uploads a case (STL + photos + Rx PDF) or connects an email/WhatsApp inbox; CaseScreen ingests the bundle.
- **Scan check:** flags incomplete arch coverage, obvious margin voids, and missing antagonist/bite scan.
- **Shade-photo check:** flags photos that are too dark/yellow (non-dental lighting), out of focus, no shade tab in frame, or wrong/ambiguous tooth.
- **Rx completeness check:** flags missing material, missing shade, missing tooth number, contradictory instructions.
- **Traffic-light verdict per case:** green (start it), yellow (start with note), red (do not start — info missing).
- **Auto-drafted dentist message:** one-tap "Hi Dr. ___, before we start case #___ we need: a shade photo with the tab in frame under daylight, and the antagonist scan." Sent by email/SMS.
- **Remake-cause log:** every flagged-vs-shipped case feeds a simple monthly report: "you avoided 11 likely remakes; your top dentist for bad shade photos is Dr. ___."

## 6. AI angle — what's load-bearing

The product is *only* a product because a vision model can now look at a compressed WhatsApp shade photo and an STL and say "this will cause a remake." Remove the AI and you're left with the existing LMS portals — text-field checklists that already exist and don't solve the problem. The load-bearing work is multimodal: grading image quality and clinical adequacy of photos, assessing scan coverage/margin from 3D files, and parsing free-text/handwritten Rx into structured completeness checks. That judgment is exactly what the lab owner does by eye today and can't scale to every incoming case.

## 7. Localization angle (if any)

`N/A — US-first global play.` The wedge is the English-speaking, scanner-heavy US independent lab market. The same product extends cleanly to UK/AU/Canada with no localization, and India's large outsourced-lab sector is a later expansion — but there's no payment-rail or language quirk to exploit at launch. Geography is not the wedge here; the AI inspection is.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** $249/mo flat per lab for up to ~400 cases/mo; $399/mo for high-volume labs; usage overage above cap. Anchored just above LabStar/Evident base ($79–250) because this *prevents losses* rather than just tracking cases — ROI is one avoided remake/month.
- **ACV:** ~$3,500/lab/year blended.
- **Rough math to $1M ARR:** ~285 labs at $3,500 ACV. That's ~6.5% of the US independent-lab universe.
- **Rough math to $5M ARR:** ~1,400 labs (US independents + DSO lab groups + UK/AU), plus an upsell tier that auto-routes verified-green cases straight into the CAD queue.
- **Expansion path:** seat/volume growth as labs grow; "verified intake" badge labs advertise to dentists; a dentist-side companion app (shoot-the-shade-photo-right guidance) sold back through the lab; remake-analytics tier for DSO lab groups managing many sites.

## 9. Go-to-market wedge — first 100 customers

- **Dental Lab Network + LMT Magazine community:** the forum threads quoted above are where lab owners already vent about remakes. Post a teardown ("we analyzed 200 remakes — here's what the dentist got wrong"), DM the ~40 owners in active remake threads, offer a free "remake autopsy" on their last 20 cases. Target 5–10 design partners.
- **Cold-email the lab directory:** NADL (National Association of Dental Laboratories) member list + Google Maps scrape of ~2,000 independent labs. Personalized: "labs your size eat ~$X/yr on avoidable remakes — send us your last 10 cases, we'll show you which would've flagged." Expect 3–5% to a free audit, 25–30% of audits to paid.
- **Scanner/LMS adjacency:** intraoral scanner reps and LMS resellers already sell into these labs and don't compete with intake QC — co-sell or referral fee. One good reseller relationship = a steady trickle of warm intros.
- **"Remake autopsy" as the hook:** the free analysis of a lab's recent remakes is the entire wedge — it's concrete, it's their own money, and it demonstrates value before they pay a dollar.

## 10. Build complexity — justification

Medium. The plumbing (file ingest, email/WhatsApp capture, dashboard, dentist messaging) is standard web stack. The hard parts are (a) reliable vision grading of shade photos and (b) usable scan/margin assessment from STL files — both buildable on off-the-shelf vision APIs plus a thin domain-tuned layer, but they need a domain-expert technician in the loop to define "good enough" thresholds and to label a starter set of good/bad cases. A technical founder with a master-technician advisor ships a credible v1 in ~3–4 months.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | QC tooling for labs; not a medical device making clinical claims, no patient PHI required beyond images the lab already holds. |
| Ethical — no harm / dark patterns | ✅ | Reduces remakes; advisory flags, lab stays in control. |
| Market exists (evidence above) | ✅ | $7.6B, 4,375 labs, documented remake pain and spend. |
| 1–5 person team can build this | ✅ | Tech founder + technician advisor. |
| Launchable with <$50K / ₹40L | ✅ | Off-the-shelf APIs; main cost is design-partner time. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | Real, recurring, costs measurable money weekly; labs already absorb the loss silently. Just short of hair-on-fire because many cope by guessing. |
| Demand evidence | 15 | 12/15 | Hard numbers on remake causes + verbatim owner complaints + paid incumbents in the category. Missing: nobody yet pays *specifically* for intake image QC. |
| Build feasibility | 15 | 11/15 | Vision grading is the gnarly part; needs labeled data + thresholds, but no research breakthrough. ~3–4 months. |
| Distribution clarity | 15 | 12/15 | Named communities, scrapeable directory, "remake autopsy" hook with concrete conversion math. |
| Revenue mechanics | 15 | 11/15 | Pricing benchmarked to LMS + clear ROI per avoided remake. Conversion from audit→paid is the open assumption. |
| Time to first revenue | 10 | 8/10 | Design partners can pay within 6–8 weeks; the audit hook shortens the cycle. |
| Defensibility | 10 | 5/10 | Moat is accumulated remake/flag data + workflow lock-in over 12 months; an LMS incumbent could bolt this on, so speed matters. |
| **Total** | **100** | **75/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required`

### Key assumptions to validate (3–5)

1. **Assumption:** Off-the-shelf vision models flag bad shade photos and incomplete scans accurately enough that labs trust the verdict (low false-positive rate). **How to test:** Run 200 historical cases (100 that became remakes, 100 that didn't) through a prototype; measure precision/recall on catching the remake-causers.
2. **Assumption:** Lab owners will pay ~$249/mo for prevention, not just tracking. **How to test:** Offer 20 labs a free remake autopsy; count how many ask "can I keep using this?" and accept a paid pilot.
3. **Assumption:** Labs can route a meaningful share of incoming cases through CaseScreen despite the WhatsApp/email mess. **How to test:** With 3 design-partner labs, instrument one week of intake; measure what % of cases can actually be captured automatically vs. need manual upload.
4. **Assumption:** The auto-drafted dentist message gets used, not ignored (the value depends on the loop closing). **How to test:** Track send-rate and dentist-response-rate across design partners.

### Risk flags

1. **Platform/incumbent risk:** EasyRx/LabStar already own the intake portal and could add image QC as a feature. Mitigation: move fast, win the data and the "verified intake" brand, stay scanner/LMS-agnostic so you're the neutral layer.
2. **Accuracy/trust risk:** A false "red" that delays a perfectly good case erodes trust faster than a missed flag. Mitigation: bias toward yellow/advisory, keep the human in control, tune thresholds per lab.
3. **Capture risk:** If most cases arrive as compressed WhatsApp images forwarded by hand, ingestion is messy and adoption stalls at the upload step. Mitigation: make manual drag-drop frictionless first; automate channels second.

## 14. Structured verdict

```
Score:                  75/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder + master-technician advisor (domain expertise required)
Time to revenue:        6–8 weeks to first paid pilot
Capital to launch:      $8–15K ($ for vision-API usage + design-partner time)
Top 3 assumptions to validate first:
  1. Vision accuracy on catching remake-causers — backtest 200 historical cases (100 remakes / 100 clean)
  2. Willingness to pay $249/mo for prevention — 20 free remake autopsies, count paid-pilot conversions
  3. Real-world case capture rate — instrument one week of intake at 3 design-partner labs
Kill criteria:
  - Abandon if prototype precision/recall on the 200-case backtest can't beat a lab tech's eyeball QC
  - Abandon if <20% of free-audit labs convert to a paid pilot
  - Abandon if a major LMS ships equivalent image-QC before your v1 and bundles it free
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Recruit 3 friendly lab owners from Dental Lab Network. Get 200 anonymized historical cases — 100 that became remakes, 100 that shipped clean — with their files (scan, shade photo, Rx).
- **Day 3–4:** Wire up off-the-shelf vision models into a throwaway script that scores each case green/yellow/red on shade-photo quality, scan completeness, and Rx completeness. Run all 200.
- **Day 5:** Measure: of the 100 known remakes, how many did the script flag red/yellow? Of the 100 clean cases, how many did it wrongly flag red? **Go if it catches ≥70% of remake-causers with <15% false-red on clean cases. No-go if it can't beat eyeballing.**

The result is falsifiable: a confusion matrix on real historical cases, not a vibe.
