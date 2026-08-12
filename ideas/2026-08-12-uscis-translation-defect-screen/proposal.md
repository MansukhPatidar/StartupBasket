---
title: "SealCheck — pre-filing screen for immigration paralegals"
slug: uscis-translation-defect-screen
date: 2026-08-12
category: ProfessionalServices / US-SMB — Solo and Small Immigration Law Firms (1–15 Staff) Who File Client-Supplied Translations They Have No Practical Way to Verify
complexity: Low
score: 74
verdict: GO
confidence: Medium
oneLiner: "Reads the foreign original beside its translation and flags the skipped seal that turns a filing into a six-month RFE."
tags:
  vertical: ProfessionalServices
  model: SaaS
  geography: US
  secondary: [AI-agent, SMB, Solo-builder, Document-verification, Multilingual, LegalTech]
axes:
  problem: 15
  demand: 11
  build: 13
  distribution: 12
  revenue: 10
  time: 8
  defensibility: 5
founderFit: [technical-heavy, content-heavy]
featured: false
---

# SealCheck

## 1. One-liner

Reads the foreign original beside its translation and flags the skipped seal that turns a filing into a six-month RFE.

## 2. Trend signal — why now?

Three things converged, and none of them is "AI is hot."

**The rule is absolute and the failure is mechanical.** 8 CFR 103.2(b)(3) says any foreign-language document submitted to USCIS "shall be accompanied by a full English language translation which the translator has certified as complete and accurate." *Full.* *Complete.* Those two words are doing enormous work. A translation that renders the body of a Mexican birth certificate perfectly but omits the *anotaciones marginales* down the side — the annotations that carry legal status — is not complete. It is a defective filing, and the defect is sitting there in plain sight, unread, at the moment the paralegal ships the packet.

**The cost of the miss is brutal and asymmetric.** Under 8 CFR 103.2(b)(8), incomplete initial evidence lets USCIS deny outright or issue an RFE. Practitioner sources put an RFE at three to six months added to a case timeline. The defect costs thirty seconds to catch and two quarters to survive.

**Machines only recently got good at the exact perceptual task involved.** This was never a language problem — it was a *did-anything-get-left-out* problem, and answering it means looking at a photographed document and finding every stamp, seal, marginal note and reverse-side scribble. Stamp and seal detection now runs at high accuracy on commodity models, and 2026 vision models handle mixed layouts, handwriting and stamps in one pass. Five years ago you'd have trained a custom detector. Today it's an API call.

Here's the part I like. The whole industry is selling *translation production* — RushTranslate does certified pages at $24.95 with 24-hour turnaround and an API. Nobody sells **verification of the translation you already have**. And firms are drowning in translations they didn't commission: the client's cousin did it, a $15/page vendor did it, the client brought it from home. The firm carries the RFE risk for a document it never controlled.

Provenance:
  - Signal 1 (demand): Documented RFE-triggering defects in translated civil documents — skipped stamps/seals, omitted marginal annotations, incomplete certification statements, name-spelling mismatches — with country-specific failure patterns for China, Mexico, Philippines, India, Japan, Korea, Vietnam — https://certof.com/resources/immigration-uscis/certified-translation-of-birth-certificate/ — 2026-08-12
  - Signal 2 (feasibility): Vision-language models reached production accuracy on stamp/seal detection and mixed-layout handwritten documents; DeepSeek-OCR (Oct 2025) and general VLMs (GPT/Claude/Gemini) process handwriting, stamps and visual markers in a single model — https://parseur.com/blog/vision-ai-document-processing — 2026-08-12
  - Signal 3 (economic): 18,000+ AILA member attorneys; incumbent immigration case-management software (Docketwise) sells at $69–119/user/month, establishing an active per-seat software budget in exactly this wallet — https://www.docketwise.com/pricing/ — 2026-08-12
  - Supporting (regulatory): 8 CFR 103.2(b)(3) full-translation-and-certification requirement; 103.2(b)(8) consequences for incomplete initial evidence — https://www.law.cornell.edu/cfr/text/8/103.2 — 2026-08-12
  Category: Tech-unlock

## 3. The opportunity

The gap is between two industries that both think this is someone else's job.

Translation vendors sell *production*. They certify their own work and stand behind it. Fine — but they never see the translation your client walked in with, which is the one that will sink you. Case-management software (Docketwise, INSZoom, eImmigration) sells *organization*: forms, deadlines, e-filing, client portals. It has a field to attach a translation. It has no opinion about whether that translation is any good.

So the actual verification is done by a paralegal, by hand, against a checklist. That's the incumbent: a human eyeballing a Vietnamese birth certificate they cannot read, next to an English page, trying to determine whether anything is missing. It is nearly impossible to do well. You cannot notice the absence of a marginal annotation in a script you don't know. The honest answer is that most firms don't verify — they file and hope, and absorb the RFE when it comes.

What an AI-first team does 10× better is narrow and real: **put the original and the translation side by side and answer "what's in the source that never made it into the English?"** That is a comparison task with an objective answer. Not legal judgment, not translation quality, not "is this a good case." Just completeness, certification integrity, and cross-document name consistency — three things that are checkable, and three things that cause a large share of avoidable RFEs.

The wedge is that this is a *screen*, not a service. It doesn't replace the translator. It doesn't give legal advice. It tells a paralegal, in ninety seconds, "the seal in the bottom-right of page 2 is untranslated, the certification is missing the competency statement, and the applicant's name appears as GUADALUPE on the passport but GUADELUPE here." Then the human decides.

## 4. Target market

- **Primary customer:** Solo and small immigration law firms in the US — 1 to 15 staff, typically 1–3 attorneys plus paralegals. Family-based and humanitarian practice especially (I-130, I-485, asylum, U/T visa), because those cases run on foreign civil documents: birth certificates, marriage certificates, police records, court judgments. Employment-based firms have fewer civil documents per case and are a weaker target.
- **Why they buy:** An RFE is a pure loss for a small firm. On flat-fee work — which most family-based immigration is — the fee is already collected. The RFE response is unpaid labour, plus an angry client who blames the firm for a delay, plus months of case-status emails. Practitioner sources describe clients as "confused, frustrated, or scared" on receiving one, and describe a documented case where inconsistent name spelling triggered an RFE that cost three months. The firm eats all of it. Avoiding two RFEs a year pays for this tool many times over.
- **Rough TAM reasoning:** AILA reports 18,000+ member attorneys. Immigration practice skews heavily toward solo and small firms. If even a third of those attorneys sit in small firms doing document-heavy family-based work, that's several thousand firms. I need roughly 400–800 paying firms for a $1M ARR business. That's a single-digit percentage of the plausible market — the kind of penetration a focused bootstrapper can actually reach, and the reason I'm comfortable with the ceiling.
- **Why now for them:** Denial rates have moved and scrutiny has tightened — FY2025 I-485 approval sat around 84%, with family-based categories materially lower than employment-based. In a tighter adjudication climate the cost of handing an officer a technical defect goes up. Meanwhile the volume of client-supplied translations keeps rising because clients now have free machine translation and believe it's sufficient. It is not — a machine translation with no certification statement fails 103.2(b)(3) on its face.

## 5. Product sketch (MVP)

- **Side-by-side completeness check.** Upload the foreign original and its English translation. Get a list of every element in the source with no counterpart in the translation — stamps, seals, marginal annotations, reverse-side text, handwritten amendments, control numbers.
- **Visual overlay.** The source document rendered with each unmatched element boxed and pinned to a plain-English note ("registry seal, untranslated"). The paralegal sees *where*, not just *that*.
- **Certification statement validator.** Checks the certificate of accuracy for the four things 8 CFR 103.2(b)(3) and USCIS practice actually require: completeness, accuracy, translator competency, plus signature/date/contact. Flags the single most common own-goal — a *notarized* translation submitted where a *certified* one is required.
- **Cross-document name and date consistency.** Pulls names and dates across every document in a case packet and flags mismatches against the passport spelling, which is the spelling USCIS treats as canonical.
- **Country playbooks.** Origin-specific rules that encode known failure patterns: Chinese notarial booklets where only the cover page gets translated, Mexican *anotaciones marginales*, Philippine security-paper control numbers, Korean surname/given-name order, Vietnamese handwritten amendments and ambiguous dates.
- **Legibility gate.** Rejects phone photos too poor to verify against, before they become an RFE for illegibility.
- **Packet report.** A one-page PDF per case listing what was checked and what was flagged — droppable into the case file as a record of diligence.

## 6. AI angle — what's load-bearing

Remove the AI and there is no product. The core operation is: *look at a document in a language the user cannot read, enumerate every semantic element including non-text ones, and diff that against an English page.* There is no rules engine or template that does this — the inputs are photographs of wildly heterogeneous civil documents from every country on earth, no two registrars formatting alike.

Specifically load-bearing:

1. **Element enumeration on the source.** Vision models find and localize stamps, seals, marginal notes, handwriting and reverse-side text on a scanned document. This is the hard part and it only became reliable and cheap recently.
2. **Semantic alignment.** Deciding whether a given source element is *represented* in the translation is fuzzy matching across languages, not string comparison. A seal reading 民政局 might legitimately appear as "Civil Affairs Bureau" — that's a match, and only a language model knows it.
3. **Multilingual breadth without per-language engineering.** One model covers Spanish, Mandarin, Tagalog, Vietnamese, Korean, Arabic, Punjabi and the long tail. Hand-building this per language is precisely why it never got built.

What is *not* AI, deliberately: the certification-statement check and the name-consistency check are largely deterministic once text is extracted. That's a feature — the cheapest, highest-frequency defects get caught by the most reliable machinery, and the model handles what only it can.

The critical design constraint: **the product must never silently "pass" a document.** A false negative here is worse than useless — it converts "I'm unsure" into "I'm covered." Output is a flag list plus an explicit not-checked list, never a green tick that implies legal sufficiency.

## 7. Localization angle

`N/A — this is a US-filing play, but with an inverted localization angle worth naming.`

The *buyer* is uniformly American and pays in dollars. But the *product's* competence is entirely about foreign documents, and that's where the depth compounds. The country playbooks are the localization: knowing that a Chinese notarial booklet hides registry seals behind the cover page, or that a Mexican marginal annotation can carry a legal status change, is local knowledge encoded into a US-sold product.

There's a credible second market later — Canadian (IRCC) and UK/Australian filings run on the same foreign civil documents against similar completeness rules. Same engine, different rule pack. I'd not touch it before $1M ARR.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** $99/month for solo (up to 25 document checks), $249/month for small firm (unlimited checks, up to 10 users, packet reports). Per-check overage at $4. Deliberately positioned *below* Docketwise's $69–119/user/month so it reads as an add-on line item rather than a system replacement — nobody has to rip anything out to buy this.
- **ACV:** ~$2,000 blended. Small-firm tier is the target; solo tier is the on-ramp.
- **Rough math to $1M ARR:** 500 firms × $166/mo average × 12 = $1M. At an ACV of $2,000, that's 500 customers — a few percent of the plausible small-firm immigration market.
- **Rough math to $5M ARR:** Needs two of three things true: (a) ~2,000 firms, pushing into mid-size practices, (b) ACV expansion to $4–5K via per-seat pricing at larger firms and volume overage, (c) a second filing jurisdiction (IRCC) or an adjacent document-verification use case. I'd underwrite $1–2M confidently and treat $5M as earned, not assumed.
- **Expansion path:** Seats first, then volume. A firm that starts at 25 checks/month and wins more family-based work naturally climbs tiers. The packet report is the upsell hook into per-case pricing for firms that want a diligence record on every file. Gross margin is strong — inference cost per check is cents against a $4 unit price — with the caveat that image-heavy multi-page packets are the cost driver to watch.

## 9. Go-to-market wedge — first 100 customers

- **AILA chapter listings, worked by hand.** AILA runs public chapter directories and a lawyer-search tool. Pull small-firm family-based practitioners by chapter, starting with the highest-volume metros (LA, Houston, NY, Miami, Chicago). For each, record the countries their practice page says they serve. Send a personalized 90-second video: their client base is Mexican, here is a real Mexican birth certificate with the *anotaciones marginales* untranslated, here is what our screen says about it. Country-specific, not generic. Target 500 firms, expect 3–5% to book — 15–25 conversations.
- **The defect-report lead magnet.** Free single-document check, no signup, on the marketing site. Immigration paralegals hit Google at the exact moment they're unsure about a translation — this captures that moment and demonstrates the product in one action. Every free check that finds a real defect is a warm lead with proof attached.
- **Paralegal communities, not attorney communities.** The person who feels this pain daily is the paralegal, not the partner. They congregate in paralegal Facebook groups, r/paralegal, and AILA paralegal-track programming. Publish the country playbooks as free reference content — "the seven things that get Philippine documents RFE'd" — which is genuinely useful whether or not they buy, and makes the tool the obvious next click.
- **Translation vendors as a referral channel.** Certified-translation companies get blamed for RFEs on documents they didn't produce. A co-branded check ("verify any translation, including ones we didn't do") gives them a defensive story and gives me distribution to firms already spending on document work.
- **Two design partners before anything is built.** Two small firms, free for six months, in exchange for 50 historical documents each — including ones that drew RFEs. That's the eval set and the first two case studies simultaneously.

## 10. Build complexity — justification

**Low.** The stack is off-the-shelf: a document-upload web app, a commodity vision-language model for element enumeration and alignment, deterministic checks for certification and name consistency, and a PDF report generator. No custom model training, no infrastructure, no integrations required for v1 (a Docketwise integration is a fast-follow, not a launch dependency).

The real work is not engineering — it's the **evaluation set**. Getting to trustworthy output means assembling a few hundred real document pairs across the top origin countries, with known-correct answers, and grinding precision up. That's a data-collection and prompt-iteration effort, and it's why design partners come before code. A technical solo founder ships a credible v1 in 8–10 weeks; the accuracy work continues indefinitely after.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Software tool for law firms. Reports defects; does not give legal advice, does not certify translations, does not practise law. Positioning as attorney-supervised screening keeps it clear of UPL. |
| Ethical — no harm / dark patterns | ✅ | Strictly protective: catches defects that would delay a person's immigration case. Must never imply legal sufficiency — the explicit not-checked list is an ethical requirement, not a UX nicety. |
| Market exists (evidence above) | ✅ | 18,000+ AILA attorneys; active per-seat software spend at $69–119/mo; documented, named defect classes causing RFEs. |
| 1–5 person team can build this | ✅ | Solo technical founder for v1. |
| Launchable with <$50K / ₹40L | ✅ | Inference, hosting, a domain. Well under $15K to first revenue. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 15/20 | Real and expensive when it hits — months of delay, unpaid rework, angry clients. Docked because it's *episodic*, not daily. A firm feels this a handful of times a year, and between incidents the pain fades. That's the difference between hair-on-fire and "I should really fix that." |
| Demand evidence | 15 | 11/15 | Strong regulatory grounding, named defect classes, confirmed adjacent software spend, and a translation industry large enough to prove money moves here. Docked because I could not source hard data on *what share of RFEs* trace to translation defects, and much of the available commentary is vendor content marketing with circular citations. The pain is documented; its exact size is not. |
| Build feasibility | 15 | 13/15 | Off-the-shelf everything. Solo founder, 8–10 weeks. Not a 15 because accuracy on heterogeneous scanned documents is genuinely fiddly and the eval set is real work. |
| Distribution clarity | 15 | 12/15 | Named channel (AILA chapter directories), named list, a free-check lead magnet that captures intent at the moment of doubt, and paralegal communities as a second front. Conversion rate is an estimate, not a measurement. |
| Revenue mechanics | 15 | 10/15 | Pricing is anchored to a real, observable adjacent product, and $1M needs only ~500 firms. Docked because small law firms are famously slow, price-sensitive software buyers, and because the episodic nature of the pain creates genuine churn risk — a quiet quarter makes the subscription look optional. |
| Time to first revenue | 10 | 8/10 | Design partners can convert to paid within 8–12 weeks of launch. Not higher because it's a considered purchase for a risk-averse buyer, not an impulse signup. |
| Defensibility | 10 | 5/10 | Honest score. The core loop is copyable in a quarter by anyone with the same idea. What compounds is the country playbook library and the accumulated eval set of real defects — genuine but soft. There's no data network effect and no lock-in beyond workflow habit. An execution-and-focus moat, nothing more. |
| **Total** | **100** | **74/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `content-heavy`

Technical because the accuracy work *is* the product. Content-heavy because the country playbooks double as the distribution engine — the person who writes "the seven ways Philippine documents get RFE'd" both builds the moat and fills the funnel.

### Key assumptions to validate (3–5)

1. **Assumption:** A meaningful share of RFEs on document-heavy family-based cases trace to translation completeness defects — enough that firms recognize the problem when named. **How to test:** 20 structured interviews with small-firm immigration paralegals. Ask them to recall their last three RFEs unprompted before mentioning translations. If translation defects don't surface spontaneously in a good fraction of cases, the wedge is weaker than I think.
2. **Assumption:** The screen achieves high enough precision on real-world scanned documents that paralegals trust it rather than treating it as noise. **How to test:** Run 200 historical document pairs from design partners, including known-RFE'd ones. Measure recall on the defects that actually drew RFEs and the false-positive rate per document. Target: catches the real defects, and under one false flag per document.
3. **Assumption:** Firms will pay a subscription for episodic protection rather than treating it as a per-case cost. **How to test:** Offer both a $99/mo subscription and a $25/case option to the first 30 prospects. If the majority choose per-case, the business is a transactional one and the ARR math must be rebuilt.
4. **Assumption:** The buyer is reachable without paid acquisition. **How to test:** Run the 500-firm AILA outreach sprint and measure reply and booking rates before writing production code.

### Risk flags

1. **Trust and liability positioning.** A tool that says "checked" on a document that later draws an RFE creates an angry customer and a reputational problem. This must be positioned and designed as a *screen that finds defects*, never a *guarantee of sufficiency* — with an explicit list of what was not checked on every report. Get this wrong and the product is worse than nothing.
2. **Episodic pain → churn.** The core commercial risk. A firm with a quiet quarter sees a subscription doing nothing visible. Mitigation is making the tool part of the routine pre-filing checklist for *every* packet rather than a break-glass tool, so usage is continuous even when defects are rare. If it can't become routine, retention will be poor.
3. **Platform dependency.** Built on third-party vision models. Pricing or capability changes hit margin directly. Mitigated by the checks being model-portable, but it's a real dependency.
4. **Incumbent absorption.** Docketwise or eImmigration could ship a translation-check feature and bundle it. They're likelier to do it badly and late — it's off their core roadmap — but a bundled "good enough" free feature is the most plausible way this business gets squeezed.
5. **Demand-size uncertainty.** I could not source a hard number on translation-attributable RFEs. If it turns out to be a small tail rather than a common failure, problem intensity drops and this becomes a vitamin. This is the single biggest reason confidence is Medium, not High.

## 14. Structured verdict

```
Score:                  74/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical solo founder who will do the unglamorous eval-set work,
                        paired with (or willing to become) someone fluent in immigration
                        paralegal workflow. Content skill is a real advantage here.
Time to revenue:        8–12 weeks from start (design partners → paid conversion)
Capital to launch:      <$15K (inference, hosting, outreach tooling)
Top 3 assumptions to validate first:
  1. Translation defects surface unprompted in paralegal RFE recollections —
     20 structured interviews, ask before you tell.
  2. Precision on real scanned documents is high enough to be trusted —
     200 historical pairs from design partners, measure recall on known-RFE'd defects
     and false positives per document.
  3. Subscription beats per-case pricing — offer both to the first 30 prospects.
Kill criteria:
  - Abandon if fewer than 5 of 20 interviewed paralegals name document/translation
    defects among their recent RFE causes without prompting.
  - Abandon if the screen produces more than 2 false flags per document on the
    200-pair eval set after four weeks of iteration — paralegals will not tolerate noise.
  - Abandon if fewer than 10 of 500 AILA-directory firms book a demo call, which
    would mean the channel is dead and paid acquisition is the only route.
  - Abandon if Docketwise or eImmigration ships a bundled translation-completeness
    check before v1 launch.
```

## 15. Next step — 1-week validation sprint

- **Day 1–2: Build the eval set, not the product.** Collect 30–40 real foreign-document/translation pairs — public record samples, translation-vendor examples, and anything design-partner prospects will share. Hand-label what's missing in each. This is the ground truth everything else is measured against.
- **Day 3: Test whether the core operation actually works.** Run those pairs through an off-the-shelf vision model with a completeness-diff prompt. No UI, no signup, no infrastructure — a script and a spreadsheet. Measure: how many hand-labelled omissions does it catch, and how many things does it flag that aren't real?
- **Day 4–5: Talk to 20 paralegals.** Recruit from AILA chapter directories and paralegal groups. Critically: **ask them to recall their last three RFEs before mentioning translations at all.** Then show the Day-3 output on a document from a country they actually work with, and ask what they'd pay.
- **Day 5: Decide.** Go if (a) the model catches ≥80% of hand-labelled omissions with fewer than 2 false flags per document, **and** (b) ≥5 of 20 paralegals name document or translation defects as a recent RFE cause unprompted, **and** (c) ≥3 firms verbally commit to a paid pilot.

The falsifiable core is (a). If a commodity vision model cannot reliably find what's missing from a translation on real-world scans, there is no product here and no amount of go-to-market cleverness fixes it — and I'd know that in three days for the price of a few hundred API calls. That's the cheapest possible test of the thing most likely to be fatal, which is exactly where a validation week should be spent.
