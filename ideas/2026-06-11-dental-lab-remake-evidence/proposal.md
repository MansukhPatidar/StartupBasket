---
title: "CaseProof — Rx record-keeper for dental labs"
slug: dental-lab-remake-evidence
date: 2026-06-11
category: HealthTech / US Independent Dental Laboratories
complexity: Medium
score: 74
verdict: GO
confidence: Medium
oneLiner: "Locks every shade photo and spec change into a dentist-acknowledged record so dental labs stop eating remakes they didn't cause."
tags:
  vertical: HealthTech
  model: SaaS
  geography: US
  secondary: [AI-agent, Vision-AI, SMB, Dispute-evidence, Workflow-automation]
axes:
  problem: 16
  demand: 12
  build: 11
  distribution: 11
  revenue: 11
  time: 7
  defensibility: 6
founderFit: [domain-expertise-required, technical-heavy]
featured: false
---

# CaseProof — Rx record-keeper for dental labs

## 1. One-liner

Locks every shade photo and spec change into a dentist-acknowledged record so dental labs stop eating remakes they didn't cause.

## 2. Trend signal — why now?

Three things landed in the same 12 months and they all point at the same bleeding wound: **remakes that labs pay for but didn't cause.**

- **Digital cases pushed remake rates from ~4% to 15%+.** The national lab remake average was historically 4% (range 1–7%). On digital/intraoral-scan cases, *73% of labs now report remake rates above 15%* — and labs throw away $15K–30K/yr in materials on digital failures alone. The shift to scanners *created* the problem.
- **The fault is unprovable, so the lab always pays.** Industry write-ups are blunt: *"When a verbal change leads to a remake… the lab absorbs the cost 100% of the time to preserve the business relationship,"* and *"without timestamped records of each modification, the lab cannot demonstrate the actual sequence."* Up to **65% of remakes trace to communication failures**, and **34% of paper Rx arrive with a critical field missing or illegible.**
- **AI vision matured enough to gate the case at intake.** In 2026, ML shade prediction, margin-line detection, and scan-completeness flagging are off-the-shelf reliable — the same tech the scanner/CAD vendors are bolting on. That makes it cheap to *catch a bad shade photo or missing margin before the case enters production*, which is exactly the moment a remake gets prevented.

Money is moving: US dental-lab industry is **$7.6B across ~4,200–4,400 independent labs**, and labs lose **23% of their dentist accounts within six months of digital failures** — so the spend isn't theoretical, it's churn and scrap they already feel monthly.

Provenance:
  - Signal 1 (Demand): Labs absorb remake cost 100% on verbal changes; 8–15% of lab revenue lost to remakes; 65% trace to communication; "cannot demonstrate the actual sequence" — https://trazalab.com/blog/dental-lab-clinic-communication-guide.html — 2026-06-11
  - Signal 2 (Feasibility): AI shade prediction, margin detection, and scan-completeness flagging now off-the-shelf and reliable in 2026 — https://www.yucera.com/blogs/ai-integration-in-dental-scanning-and-design-2026/ — 2026-06-11
  - Signal 3 (Economic): US dental-lab market $7.6B / ~4,200 labs; 73% of labs report >15% remake on digital; labs lose 23% of dentists after digital failures — https://www.grandviewresearch.com/industry-analysis/us-dental-laboratories-market-report ; https://sprintray.com/lab-costs-killing-roi-what-crown-remakes-cost/ — 2026-06-11
  Category: Workflow automation

## 3. The opportunity

Dental labs run on Magic Touch, LabStar, Evident, EasyRx — production-management software. Those tools track *where a case is in the lab* and bill for it. **None of them owns the dentist-facing intake moment where remakes are born.** The Rx form is half-filled, the shade photo is a 200KB WhatsApp compression with 98% of the data destroyed, the margin isn't visible, and three days later the dentist calls and says "I told you A2, not A1" — and there is no record, so the lab remakes it for free.

CaseProof is the **evidence-and-gate layer that sits in front of production.** Before a case is accepted into the lab, the dentist (or the lab's case-in tech) runs it through CaseProof: it checks the photo quality, flags a missing margin or absent shade tab, predicts whether the shade photo is usable, and forces the legally-required Rx fields. Every spec and every later change is timestamped and the dentist taps to acknowledge. When a remake claim comes in, the lab pulls one link that shows exactly what was specified, by whom, when — and whether the dentist signed off.

This is not "case management, but AI." It's a wedge the incumbents structurally don't want to own (it would mean telling their dentist-side customers "your photo is garbage"), and the scanner/CAD vendors won't own (they sell *to* dentists, not *for* labs in disputes). The lab is the buyer with the bleeding wound and no advocate.

## 4. Target market

- **Primary customer:** Owner/operator of an independent US dental lab, 3–40 technicians, $400K–$5M revenue, doing crown & bridge / fixed work with a mix of digital and analog cases. The decision-maker is the owner or the case-in manager — not a committee.
- **Why they buy (in their words):** *"The lab absorbs the cost 100% of the time to preserve the business relationship."* They are eating $24K–$45K/yr in remakes on a $300K lab, two-thirds of it from communication failures they can't prove, and they're losing dentist accounts when digital cases fail.
- **Rough TAM reasoning:** ~4,200 formal US labs (IBISWorld); call it ~3,000 in the buyable 3–40 tech band after stripping the single-tech studios and the DSO-captive giants. At $300/mo that's a ceiling around ~$10M ARR if you took a third of them — comfortably inside the $1M–$5M target without needing the whole market.
- **Why now for them:** The scanner transition is recent and brutal — they went from 4% to 15%+ remakes in a few years and haven't found a defense. The pain is fresh, monthly, and quantified on their own P&L.

## 5. Product sketch (MVP)

- **Case-in gate:** dentist or lab tech opens a case link; CaseProof requires shade, material, tooth #, margin photo, bite — blocks submission on missing legally-required fields.
- **Photo QC at intake:** flags compressed/blurry/under-lit shade photos and missing-margin scans *before* the case enters production, with a one-tap "request a better photo" back to the dentist.
- **Shade sanity-check:** AI predicts the likely shade from the submitted photo and flags when it disagrees with the written shade tab ("photo reads A2, Rx says A1 — confirm?").
- **Acknowledged change log:** every later modification ("change to A2", "add distal contact") is timestamped and pushed to the dentist for a one-tap acknowledgment.
- **One-link dispute packet:** when a remake is claimed, export a timestamped record of the original Rx, every photo, every change, and every acknowledgment.
- **Remake analytics:** per-dentist remake rate and root-cause tags, so the lab can have the "your prep/photos are the problem" conversation with data.
- **Plugs alongside existing LMS:** complements Magic Touch/LabStar rather than replacing the production system.

## 6. AI angle — what's load-bearing

Two AI jobs, both load-bearing:

1. **Vision QC at intake** — judging photo usability, detecting the margin line, flagging incomplete scans, and predicting shade from the image. Without this the product degrades to a glorified checklist + e-signature, which any dentist would ignore. The AI is what makes the gate *catch real problems in 5 seconds* instead of nagging.
2. **Change extraction** — turning a messy phone call or WhatsApp thread ("yeah make it a touch lighter and open the contact") into a structured, acknowledgeable change-log entry. That's the exact moment disputes are born and the exact thing nobody records today.

Remove the AI and you have a form — and forms are why 34% of Rx already arrive incomplete. The AI is the reason it works at the speed a busy case-in desk will tolerate.

## 7. Localization angle

N/A — this is a US-first play. The wedge is the US digital-transition remake spike, the $7.6B US lab market, and US dentist-lab commercial norms (lab eats the remake to keep the account). It ports later to UK/EU/Australia private labs, but the demand signal and willingness-to-pay are sharpest in the US right now. Forcing an India/SEA angle would be inventing a market — most of those labs run analog and the remake-dispute economics differ.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** $199–$499/mo per lab, tiered by case volume (e.g. Starter $199 ≤150 cases/mo, Pro $349, Busy $499). Anchored *below* the LMS systems (LabStar ~$250/mo) and *far* below a single avoided remake ($150–$400 each).
- **ACV:** ~$3,600/yr blended.
- **Math to $1M ARR:** ~280 labs × $300/mo × 12 ≈ $1.0M. That's <10% of the buyable lab base.
- **Math to $5M ARR:** ~1,150 labs at the same ACV, or ~700 labs plus a per-acknowledged-case usage upsell and a dentist-side "verified case-in" white-label. Requires ~25% penetration of the buyable band — aggressive but not fantasy for a wedge with this clear an ROI.
- **Expansion path:** usage tier as digital case volume grows; per-seat for multi-location labs; a paid "dentist scorecard" report labs send to their accounts; eventually a dentist-side freemium that feeds clean cases to paying labs.

## 9. Go-to-market wedge — first 100 customers

- **Dental Lab Network + LMT (LabManagementToday) forums/community:** this is where lab owners already argue about remakes daily ("who pays", "remakes and how you handle them"). Post a free "remake root-cause teardown" tool, convert the thread-active owners. Realistic to land the first 20–30 here.
- **NADL + state lab association events and newsletters:** NADL represents ~1,000 labs; sponsor/speak on "stop eating remakes you didn't cause" with the 8–15%-of-revenue stat. Direct line to owners who already feel it.
- **Cold outreach to the buyable list:** pull ~3,000 labs from public directories, send the owner a 90-second Loom showing a real bad shade photo getting caught at intake + a one-link dispute packet. The hook — "one avoided remake/month pays for a year" — is concrete enough for a 3–5% reply.
- **Scanner/lab-supply channel:** mill and material reps already sit across the dentist-lab seam; a referral cut gets CaseProof in front of labs during the digital-onboarding conversation where the pain is loudest.

## 10. Build complexity — justification

**Medium.** The form/gate/change-log/e-ack and the one-link export are standard web-app work a pair can ship in 8–10 weeks. The lift is the vision layer — photo-quality scoring, margin detection, shade prediction — but in 2026 these are off-the-shelf model capabilities, not research; the work is integration, thresholds, and a dental-specific eval set, not training from scratch. Realistic v1 for a small team in ~3–4 months. No hardware, no regulatory gate (it's documentation, not a diagnostic device).

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Documentation/QC tool; not a regulated diagnostic device. Avoid making clinical claims. |
| Ethical — no harm / dark patterns | ✅ | Improves accuracy and fairness in disputes; no dark patterns. |
| Market exists (evidence above) | ✅ | $7.6B market, quantified remake bleed, active owner complaints. |
| 1–5 person team can build this | ✅ | Standard stack + off-the-shelf vision APIs. |
| Launchable with <$50K / ₹40L | ✅ | Inference + hosting + outreach well under cap. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | Monthly, quantified ($24K–45K/yr on a $300K lab), and the lab is defenseless today. Not quite hair-on-fire-daily, but close and bleeding. |
| Demand evidence | 15 | 12/15 | Multiple independent stats + active owner forums + existing paid LMS spend. Direct "would you pay for *this* gate" is still inferred, not yet sold. |
| Build feasibility | 15 | 11/15 | Web app trivial; vision QC is integration not research, but needs a real dental eval set and tuned thresholds. |
| Distribution clarity | 15 | 11/15 | Named communities (Dental Lab Network, NADL, LMT) + a tight buyable list. Conversion math credible but unproven. |
| Revenue mechanics | 15 | 11/15 | Pricing anchored below LMS and far below one remake; ARR math sits inside target. Penetration to $5M is the stretch. |
| Time to first revenue | 10 | 7/10 | Pilot-to-paid likely 4–8 weeks; labs buy fast when ROI is one avoided remake, but case-in workflow change adds friction. |
| Defensibility | 10 | 6/10 | Soft moat: per-dentist remake data compounds, becomes the lab's system of record for disputes, workflow lock-in. Copyable, but the dispute-record dataset and lab trust are a real head start. |
| **Total** | **100** | **74/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`domain-expertise-required` · `technical-heavy` — you need a dental-lab insider (or a very close advisor) to nail case-in workflow and earn lab trust, plus the chops to ship a reliable vision QC layer.

### Key assumptions to validate (3–5)

1. **Assumption:** Labs will adopt a tool that sits *in front of* their dentists (risking friction with the accounts they depend on). **How to test:** 20 owner interviews — ask if they'd put a gate between them and their top-5 accounts, or only their problem accounts.
2. **Assumption:** A dentist-acknowledged record actually shifts who pays for the remake (lab can charge it back). **How to test:** Ask 20 owners whether a timestamped acknowledgment would change their charge-back behavior, or if they'd still eat it for relationship reasons.
3. **Assumption:** $300/mo clears willingness-to-pay vs. "remakes are just cost of doing business." **How to test:** Pre-sell 10 paid pilots before building the full vision layer.
4. **Assumption:** Photo QC at intake is accurate enough to be trusted, not ignored after two false flags. **How to test:** Run the model on 200 real submitted shade photos against lab outcomes.

### Risk flags

1. **Relationship risk (core):** Labs may refuse to gate their dentists because the dentist holds the power in the relationship. If they only use it on "problem accounts," volume shrinks. This is the make-or-break risk.
2. **Platform/feature-creep risk:** LabStar/Magic Touch or a scanner vendor could bolt a "case-in checklist + e-sign" onto their existing product. Defense is the dispute-record dataset and being lab-loyal, not dentist-loyal.
3. **Adoption-friction risk:** Anything that adds a step to a busy case-in desk gets bypassed unless it's faster than the pain it removes — the AI speed is non-negotiable, not a nice-to-have.

## 14. Structured verdict

```
Score:                  74/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Dental-lab insider (or close advisor) + technical co-founder who can ship reliable vision QC
Time to revenue:        6–10 weeks to first paid pilot
Capital to launch:      $8–15K ($/inference + hosting + outreach)
Top 3 assumptions to validate first:
  1. Labs will gate their dentist accounts — 20 owner interviews
  2. A timestamped acknowledgment actually shifts who pays — owner charge-back interviews
  3. $300/mo clears WTP — pre-sell 10 paid pilots before full build
Kill criteria:
  - Abandon if <30% of 30 interviewed owners say they'd gate even their top accounts
  - Abandon if <3 of 10 targeted pilots convert to paid after one full month
  - Abandon if photo-QC accuracy on 200 real photos is low enough that owners ignore the flags
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Build the buyable list (~150 labs from Dental Lab Network + directories). Draft the "stop eating remakes you didn't cause" pitch with the 8–15%-of-revenue stat.
- **Day 3–4:** Run 15–20 lab-owner calls. One question dominates: *"Would you put a case-in gate between you and your dentists, and would a timestamped acknowledgment change whether you charge back a remake?"* Show a clickable mock of the one-link dispute packet.
- **Day 5:** Decide go/no-go. **Falsifiable bar:** ≥6 of ~18 owners say they'd pilot a paid gate on at least their problem accounts AND ≥4 say an acknowledgment would change their charge-back behavior. Below that, the relationship-risk thesis is broken — kill or re-shape toward pure photo-QC-for-the-lab (no dentist gate).
