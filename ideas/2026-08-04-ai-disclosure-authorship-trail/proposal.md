---
title: "MadeBy — authorship trail for EU creative agencies"
slug: ai-disclosure-authorship-trail
date: 2026-08-04
category: Creator Economy / EU-SMB — Independent Creative, Content & Social Agencies (3–40 Staff) Delivering AI-Assisted Work to EU Clients
complexity: Low
score: 71
verdict: GO
confidence: Medium
oneLiner: "Records who edited each AI-assisted asset, so an agency can prove human authorship after platforms strip the metadata."
tags:
  vertical: Creator Economy
  model: SaaS
  geography: EU
  secondary: [AI-agent, Compliance-driven, SMB, Solo-builder, Workflow-automation]
axes:
  problem: 14
  demand: 11
  build: 13
  distribution: 12
  revenue: 11
  time: 6
  defensibility: 4
founderFit: [technical-heavy, content-heavy]
featured: false
---

# MadeBy

## 1. One-liner

Records who edited each AI-assisted asset, so an agency can prove human authorship after platforms strip the metadata.

## 2. Trend signal — why now?

Two days ago — **2 August 2026** — Article 50 of the EU AI Act became applicable. It is not the postponed high-risk stuff everyone talks about; the high-risk obligations slid to 2027. Article 50 landed on schedule and it binds *deployers*: the brands and agencies that publish AI-assisted content, not just OpenAI and Midjourney. Penalties sit in the top tier alongside GPAI violations — **up to €15M or 3% of worldwide turnover**.

The obligation applies "immediately from 2 August 2026 to all in-scope systems, regardless of when they were placed on the market." There is no grandfathering of the back catalogue and no SME carve-out from Article 50 itself.

Here is the part that makes this a product instead of a PDF. The regulation offers deployers an escape hatch: AI-generated public-interest text does **not** require disclosure where it has undergone **substantive human editorial review** with someone holding editorial responsibility. That exemption is worth real money to an agency — it is the difference between stamping "AI-GENERATED" on client campaign work and not. But claiming the exemption means being able to *evidence* it later.

And the technical layer the regulation leans on is broken in exactly the place marketing lives. C2PA Content Credentials — the machine-readable marking standard — get stripped on upload. Reporting through 2026 puts metadata stripping on major social platforms at effectively **100%**: Instagram, X, LinkedIn, TikTok and Facebook all remove C2PA manifests during upload processing. It is not censorship, it is ordinary transcoding. Which means the signed provenance chain dies the moment the asset is published, and the deployer's own contemporaneous record becomes the only surviving evidence of who did what.

A UK law firm writing the agency checklist for this deadline said the quiet part directly:

> "if your content workflow already runs human review before publication, the compliance gap is documentation — proving the review happened and naming who holds editorial responsibility"

That is the whole product. The agencies already do the human review. They cannot prove it.

Meanwhile the tooling market is inverted. AI governance platforms — Credo AI, Holistic AI, Trustible, IBM watsonx.governance, OneTrust — are custom-priced enterprise deals, roughly **$25K–$200K+ per year**, and they govern *models and risk registers*. A 12-person social agency in Rotterdam has no models. It has 400 Instagram assets a month and a liability it just inherited.

Provenance:
  - Signal 1: EU AI Act Article 50 transparency obligations became applicable 2 Aug 2026, binding deployers (brands/agencies), penalties up to €15M or 3% worldwide turnover, no small-business exemption — https://www.cooley.com/news/insight/2026/2026-08-03-eu-ai-act-transparency-obligations-take-effect-2-august-2026 and https://artificialintelligenceact.eu/transparency-rules-article-50/ — 2026-08-03
  - Signal 2: C2PA metadata stripping on major social platforms is effectively 100% in 2026 (Instagram, X, LinkedIn, TikTok, Facebook), breaking the signed-provenance chain at publication and leaving the deployer's own log as the only evidence — https://www.aiipprotection.org/news/c2pa-watermarks-social-media-metadata-stripping.php — 2026-08-04
  - Signal 3: Economic — 472,000 advertising-agency businesses in Europe, €220.1B market, 4.2% revenue growth in 2026; incumbent AI-governance platforms are $25K–$200K+/yr enterprise deals that price these firms out entirely — https://www.ibisworld.com/europe/industry/advertising-agencies/200291/ and https://www.modulos.ai/best-ai-governance-platforms/ — 2026-08-04
  - Signal 4 (corroborating, practitioner): Legal guidance states the compliance gap for agencies is documentation — proving review happened and naming the responsible editor — https://www.digitalapplied.com/blog/eu-ai-act-august-2026-transparency-obligations-agency-checklist — 2026-08-04
  Category: Regulatory arbitrage (with a tech-unlock component — the C2PA failure is what creates the gap)

## 3. The opportunity

Every EU agency using generative AI now has a documentation liability it cannot discharge with the tools it owns.

The incumbents miss it from opposite directions. **AI governance platforms** (Credo, Holistic, Trustible, OneTrust) govern model inventories and risk assessments for enterprises with compliance departments — six-figure contracts, procurement cycles, and a mental model of "which models do we run" that does not describe an agency at all. **DAMs and project tools** (Bynder, Asana, Frame.io, Notion) track assets and approvals but record nothing about AI provenance, and their approval logs are mutable — a Notion checkbox is not evidence. **C2PA tooling** (Adobe Content Credentials) signs at creation and then gets stripped at publication.

Nobody occupies the middle: a cheap, asset-level record that survives the platform strip and produces a defensible document per campaign.

The 10× is not intelligence, it is *capture*. Today, proving a human materially edited an AI draft means reconstructing it months later from Slack threads, Google Docs version history and someone's memory — if the freelancer who did it still answers email. That reconstruction is 3–6 hours per contested asset and often impossible. MadeBy makes it a five-second export because the record was written at the moment of work.

Second, honestly stated: this is also a **client-defensibility** product, and that may sell harder than the regulator. Brands are pushing liability down their supply chain. There is documented case law of this shape — a freelance web design firm used an AI image generator for client background assets, the output resembled a copyrighted photograph, the photographer sued the client, and the client sued the design firm. Contracts increasingly demand suppliers "identify which deliverables used AI tools and which specific tools were used, before delivery." Agencies need an answer when the brand's legal team asks. Standard agency contracts "almost never address AI usage rights or liability allocations."

## 4. Target market

- **Primary customer:** Owner or ops lead at an independent creative, content or social agency, **3–40 staff**, EU-established (Germany, Netherlands, Nordics, France, Ireland, Poland first), €300K–€6M revenue, delivering campaign creative and social content to EU brand clients. The buyer is the person who signs the MSA and personally eats the indemnity clause.
- **Why they buy:** Not love of compliance. Three concrete triggers: (a) a client's procurement or legal team sends an AI-usage rider they must answer in writing; (b) they want to claim the human-editorial-review exemption and keep "AI-generated" labels off client campaign work; (c) a freelancer delivered something and nobody knows which tool made it. Article 50 is the deadline that makes them act; client liability is what makes them keep paying.
- **Rough TAM reasoning:** 472,000 advertising-agency businesses in Europe (IBISWorld, 2026). Most are micro. Filter hard to EU-established firms in the 3–40 staff band that meaningfully use generative AI and serve brand clients with legal departments — I'd call that a realistic serviceable base in the low tens of thousands, call it 20K–40K firms. At €150/mo, capturing 1% of 30K is ~€5.4M ARR. The market is wide enough; the risk is willingness-to-pay, not headcount.
- **Why now for them:** The obligation is live as of two days ago, and it applies retroactively to content already published. Enforcement capacity is patchy — several member states have not stood up market-surveillance authorities — but client-side contractual pressure does not wait for a regulator.

## 5. Product sketch (MVP)

- **Capture at the point of work** — a browser extension and a Slack/Drive/Frame.io connector that records, per asset: which AI tool produced the draft, who edited it, how substantially, and who signed off as responsible editor.
- **Substantiality delta** — automatic comparison of AI draft against published version, producing a percentage-changed figure and a diff, so "substantive human editorial review" is a number with an artifact behind it, not a claim.
- **Named editorial responsibility** — every asset carries a named human who accepted responsibility, captured at sign-off with a timestamp, not assigned retroactively.
- **Label decision engine** — walks the Article 50 decision tree per asset (is it a deepfake of a real person? public-interest text? a chatbot surface?) and returns one of: no label / visible label / deepfake disclosure — with the reasoning stored.
- **Tamper-evident record** — the log is append-only and hash-chained, so an export dated March cannot be quietly written in September. This is the difference between a record and a spreadsheet.
- **Client evidence pack** — one-click PDF/JSON per campaign or per client, answering the brand's AI-usage rider in the format their legal team asked for.
- **Back-catalogue sweep** — point it at a Drive folder or social account, get a triaged list of already-published assets that carry label risk, ranked by exposure.
- **Freelancer capture** — a lightweight link a contractor completes on delivery declaring tools used; the agency's gap closes where it actually leaks.

## 6. AI angle — what's load-bearing

Remove the AI and roughly 60% of this still stands as a logging product — so let me be precise about where it is genuinely load-bearing, because two of the four uses are the real ones.

**Genuinely load-bearing:**
1. **Substantiality assessment.** Deciding whether an edit was "substantive" is a judgement over text/image semantics — a human rewriting the argument versus swapping three adjectives produce similar character-level diffs but opposite legal conclusions. A model does this per asset at volume; a rules engine cannot.
2. **Back-catalogue triage.** Sweeping thousands of already-published assets and classifying which plausibly need labels is only economic with a model. Manually, it is a consulting project nobody buys.

**Assistive but not essential:** the label decision tree (mostly deterministic once inputs are known) and evidence-pack drafting (templating with a language layer on top).

The honest read: this is a **capture-and-evidence product with AI doing the judgement-heavy middle**. I would rather say that than pretend a hash-chained log is an AI breakthrough. The defensibility does not come from the model either — see section 13.

## 7. Localization angle

EU-first by construction — the regulation *is* the market, so this is a jurisdictional play rather than a language one. Practical requirements:

- **Language:** German, French, Dutch, Polish, Spanish, Italian for the UI and the exported evidence packs. Germany matters most — the largest agency population plus the strongest documentation culture, and the survey finding that only ~30% of German companies have mature AI-usage structures describes the gap precisely.
- **Per-member-state divergence:** national market-surveillance authorities are being stood up unevenly and will interpret differently. Tracking that per country is a genuine content moat and a newsletter that sells the product.
- **Adjacent jurisdictions, later:** China's dual-track labeling regime and India's IT Amendment Rules (effective 20 Feb 2026, mandatory labeling of AI-generated content) mean the same asset-provenance record has resale value in other regimes. Not v1 — but it means the product is not a one-regulation orphan.
- **Pricing:** €99–€249/mo works for EU agency wallets. Not US-priced.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** €99/mo Solo (freelancer/≤3 seats, 200 assets/mo) · **€199/mo Studio** (to 15 seats, unlimited assets, client evidence packs) · €449/mo Agency (to 40 seats, multi-client workspaces, back-catalogue sweep, API). Annual −20%.
- **ACV:** ~€2,400 blended (Studio-weighted).
- **To $1M ARR:** ~420 agencies at €199/mo. That is 0.9% of a 45K serviceable base — believable.
- **To $5M ARR:** ~1,700 paying agencies plus mix shift to Agency tier, or a channel deal. Realistically $5M needs the **client-side flip**: brands mandating MadeBy across their agency roster, which converts one sale into eight. That is the upside case, not the base case.
- **Expansion path:** seats → asset volume → multi-client workspaces → per-client evidence packs as a billable line the agency re-bills to the brand. The last one is the good one: when the agency invoices the client for compliance evidence, MadeBy becomes revenue infrastructure instead of overhead.
- **Margin:** high. Cost per asset is a diff plus a classification call — cents. The expensive part is the back-catalogue sweep, which is priced as a one-off onboarding (€500–1,500) and doubles as a paid trial.

## 9. Go-to-market wedge — first 100 customers

1. **The exposure audit as the wedge (primary).** Agency AI-usage is publicly inspectable in part — scrape agency client rosters and public social output. Build a free "Article 50 exposure report" for a named agency: here are 40 of your published assets that plausibly need a label, here is your worst-exposure client. Send it to the owner. This is not a cold pitch, it is their liability with their client's logo on it. Target 500 agencies across DE/NL/IE, expect 15–20% reply, 5% close → ~25 customers.
2. **Ride the deadline content spike.** Every EU law firm and agency-marketing blog is publishing Article 50 checklists right now, and agencies are actively searching for them — that search behaviour is documented in the sources above. Rank for "Article 50 agency checklist", "do I need to label AI content EU", and ship a genuinely free label-decision tool. Gate the *record-keeping*, never the answer. Content works here specifically because the deadline manufactures the search volume; this window is 6–9 months, not forever.
3. **Sell through the people already being asked.** Agency-side fractional legal/ops consultants and the AI-governance consultancies charging €15K–30K for "preventive implementation" have the trust and none of the tooling. Give them a partner tier and a co-branded evidence pack. 10 consultants × 5 agencies each = 50 customers, and they do the selling.
4. **Agency networks and trade bodies.** BVDW (Germany), DDA (Netherlands), IAB Europe locals. One webinar to a trade body membership list beats 1,000 cold emails, and these bodies are actively looking for Article 50 content to give members.
5. **Freelancer edge-in.** The €99 Solo tier for the freelancers who deliver *into* these agencies. They get asked "what tools did you use" and have no answer. Cheap, self-serve, and each one is a warm referral into an agency.

## 10. Build complexity — justification

**Low.** Everything is off-the-shelf: browser extension, OAuth connectors to Drive/Slack/Frame.io, diffing, a hash-chained append-only log (a well-understood pattern, not a blockchain), model calls for substantiality and triage, PDF export. No custom models, no novel infra.

The real work is not engineering — it is **getting the legal decision tree right**, which needs a competent EU tech lawyer on retainer for a few days, not a research team. A technical founder ships a credible v1 in **7–9 weeks**; the connectors are the long pole, and v1 can launch with Drive + extension only.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Helps firms comply; no regulated-advice claim. Must position as record-keeping, not legal advice. |
| Ethical — no harm / dark patterns | ✅ | Increases disclosure accuracy. One caveat: must not be marketable as a tool for *dodging* labels — see risk flags. |
| Market exists (evidence above) | ✅ | 472K EU agencies; live obligation; incumbents priced at $25K–200K/yr. |
| 1–5 person team can build this | ✅ | Solo technical founder + part-time legal counsel. |
| Launchable with <$50K / ₹40L | ✅ | ~€15–25K including legal review and initial content. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 14/20 | Real and newly mandatory, with money attached (label vs. no-label on client work). Held below 17 honestly: enforcement capacity is patchy — several member states have not stood up market-surveillance authorities — so this is *anticipatory* pain for most agencies until a client rider or a first enforcement action lands. Hair-on-fire for the subset already receiving AI-usage riders; a nagging worry for the rest. |
| Demand evidence | 15 | 11/15 | Strong circumstantial: regulation live, penalty tier confirmed, enterprise incumbents charging real money, heavy professional content activity, documented downstream-liability case. Docked because I could not source direct verbatim agency complaints — the searches surfaced law-firm and vendor commentary, not practitioner voice. That is a genuine gap in this write-up, not a rounding error. |
| Build feasibility | 13/15 | 13/15 | 7–9 weeks solo on off-the-shelf components. Connectors are the only real work. |
| Distribution clarity | 15 | 12/15 | The exposure-audit wedge is concrete and the deadline manufactures search volume. Docked because the consultant channel is unproven and the content window is time-boxed. |
| Revenue mechanics | 15 | 11/15 | €199/mo is well-matched to EU agency wallets and 420 customers for $1M is achievable. Docked: agencies are famously cheap on internal tooling, and compliance spend is the first line cut in a soft quarter. |
| Time to first revenue | 10 | 6/10 | 8–12 weeks realistically. The audit wedge can pre-sell during the build, but agencies buy on a client-trigger event, and waiting for that trigger stretches the cycle. |
| Defensibility | 10 | 4/10 | Honestly weak. The log is copyable; the moat is accumulated jurisdictional interpretation and switching cost once the record has history. See below. |
| **Total** | **100** | **71/100** | |

Two axes near the floor (defensibility 4, time-to-revenue 6) keep this out of STRONG GO territory. It is a GO because the top-line trigger is real, dated, and unavoidable — not because the business is protected.

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `content-heavy`

Needs someone who can ship connectors *and* write authoritative jurisdictional content weekly. The content is not marketing garnish — it is the moat, since the software is copyable in a weekend and the accumulated interpretation is not.

### Key assumptions to validate

1. **Assumption:** Agencies will pay €199/mo for evidence they may never be asked to produce. **How to test:** 30 structured calls with EU agency owners; ask specifically whether a client has *already* sent an AI-usage rider. If fewer than 8 say yes, the trigger is not live and this is 12 months early.
2. **Assumption:** The human-editorial-review exemption is valuable enough to drive purchase — i.e. agencies actively want to avoid labeling client work. **How to test:** ask directly whether they would label a campaign asset today, and what a client would say if they did.
3. **Assumption:** Automated substantiality assessment is defensible enough that a lawyer would rely on it. **How to test:** put 50 sample assets through it and have an EU tech lawyer grade the outputs. If counsel will not stand behind it, the core feature is decoration.
4. **Assumption:** The exposure audit converts. **How to test:** 100 audits, measure reply and close. Below 10% reply, the wedge is wrong.

### Risk flags

1. **Enforcement timing risk (the big one).** Member states have not uniformly stood up market-surveillance authorities and enforcement will be patchy through 2026. If no visible action lands and no brand-side riders propagate, urgency evaporates and this becomes vitamin-not-painkiller. This is the single most likely way the idea dies.
2. **Regulatory drift.** The EU has already shown willingness to amend and extend AI Act deadlines and is extending SME simplification to firms up to 750 employees / €150M. A future simplification could carve out exactly this customer.
3. **Platform absorption.** If Adobe, Canva or Frame.io ship native disclosure logging — entirely plausible, they own the creation surface — the standalone product compresses to a feature. Realistic response is to be the cross-tool aggregator agencies use *because* they run six tools, not one.
4. **Weak moat.** Defensibility 4/10. Nothing here is technically hard. The bet is on jurisdictional depth plus record-history lock-in, both of which take 12 months to matter and are vulnerable in month 3.
5. **Ethical positioning.** A tool that helps decide *not* to label sits close to a line. Must be built and marketed to produce accurate disclosure, not minimal disclosure — the moment it is seen as a label-avoidance tool, the trade bodies that are the best channel become the loudest critics.

## 14. Structured verdict

```
Score:                  71/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical solo founder, EU-based, comfortable writing
                        authoritative regulatory content weekly; part-time EU
                        tech-law counsel on retainer
Time to revenue:        8–12 weeks
Capital to launch:      €15–25K ($17–28K)
Top 3 assumptions to validate first:
  1. Client-side AI-usage riders are already landing — 30 agency-owner calls,
     need ≥8 confirming they have received one
  2. Agencies will pay €199/mo pre-enforcement — 20 pre-sale attempts at
     50% discount, need ≥5 cards on file
  3. Automated substantiality assessment survives legal scrutiny — 50 assets
     graded by an EU tech lawyer
Kill criteria:
  - Abandon if <8 of 30 agency owners report an actual client AI-usage rider
    or an internal Article 50 project (means the trigger is 12 months out)
  - Abandon if <5 of 20 pre-sale attempts convert at half price
  - Abandon if Adobe/Canva/Frame.io ship native cross-tool disclosure logging
    before v1 launches
  - Abandon if the EU announces an Article 50 carve-out for firms under
    250 employees
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Build 20 real exposure audits by hand for named EU agencies — pull their public social output, flag assets that plausibly need labels under Article 50. No product, just the artifact.
- **Day 3–4:** Send all 20 to the owner. Book calls. On every call ask the two questions that decide this: *"Has a client asked you in writing what AI tools you used?"* and *"Would you put an AI-generated label on campaign work you deliver?"*
- **Day 5:** Attempt 20 pre-sales at €99/mo founding rate, card on file, product in 8 weeks.

**Falsifiable outcome:** ≥8 of 30 owners confirm a live client rider or internal Article 50 project, **and** ≥5 pre-sales convert. Miss either number and the regulation is real but the urgency is not — shelve it and re-run the same sprint after the first publicised national enforcement action, which is the event that flips assumption 1.
