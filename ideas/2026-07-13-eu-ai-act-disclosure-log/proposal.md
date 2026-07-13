---
title: "MarkPass — AI-disclosure log for EU creative agencies"
slug: eu-ai-act-disclosure-log
date: 2026-07-13
category: Compliance / EU — Independent Creative, Performance & Content Agencies (AI Act Art. 50 deployer disclosure evidence)
complexity: Low
score: 74
verdict: GO
confidence: Medium
oneLiner: Proves your agency labelled every AI-touched ad before it shipped, asset by asset, when the regulator asks.
tags:
  vertical: Compliance
  model: SaaS
  geography: EU
  secondary: [Compliance-driven, SMB, AI-agent, Solo-builder, Creator Economy]
axes:
  problem: 15
  demand: 12
  build: 13
  distribution: 12
  revenue: 11
  time: 8
  defensibility: 3
founderFit: [technical-heavy, content-heavy]
featured: false
---

# MarkPass

## 1. One-liner

Proves your agency labelled every AI-touched ad before it shipped, asset by asset, when the regulator asks.

## 2. Trend signal — why now?

On **2 August 2026 — twenty days from today** — Article 50 of the EU AI Act goes live. It survived the Digital Omnibus cull intact. The Annex III high-risk obligations got pushed to December 2027; the transparency duties did not move.

What lands, specifically:

- **Deployers** who publish deepfakes — which the Act defines broadly enough to catch AI avatars, synthetic voiceovers, and AI-altered footage of real people — must visibly label that content as artificially generated, *regardless of deceptive intent*.
- Deployers publishing AI-generated text on matters of public interest must disclose it, unless a human editorially reviewed it.
- Enforcement power activates on the same date. Fines run to **€15M or 3% of worldwide turnover**, whichever is higher.
- Art. 50(4) applies to content **published or modified on or after 2 August 2026** — so this is a forward-looking obligation with a hard start line, not a retroactive clean-up.
- The Commission's Code of Practice permits an interim two-letter label ("AI" / "KI" / "IA") until a uniform EU icon is finalised.

Two things make this a product rather than a blog post:

**One — the liability sits on the wrong party, and nobody has sorted it out.** Gleiss Lutz puts it plainly: *"The hard work under the AI Act transparency obligations is deciding who is the provider and who is the deployer at each link in the supply chain, not the labelling technology."* When an agency generates a synthetic voiceover for a client's ad, who is the deployer — the agency that made it, or the brand that ran it? The prevailing read is that the **brand is legally responsible for the disclosure** while the agency operates the tool. Which means every agency-client contract in Europe currently has a hole in it, and every agency is about to be asked by its clients: *prove you labelled it.*

**Two — the file can't be the evidence.** C2PA/Content Credentials are the technical answer for machine-readable marking, and adoption is real. But the fatal practical detail: **social platforms strip C2PA manifests during upload, transcoding and re-encoding.** A platform can support Content Credentials and still destroy them in practice. So if a German regulator asks an agency in March 2027 to demonstrate that the AI avatar in a Meta ad from September 2026 carried a visible label at publication — the file coming back off Meta's CDN will not prove it. The evidence has to live **outside** the asset, in a timestamped record made at the moment of publication.

That gap is the whole product.

```
Provenance:
  - Signal 1 (Demand): EU AI Act Art. 50 deployer transparency duties go live 2 Aug 2026, unmoved by the Digital Omnibus; fines to €15M/3% of global turnover; deepfake + synthetic-media labelling falls on the deployer. — https://compliancehub.wiki/eu-ai-act-article-50-transparency-digital-omnibus-2026/ and https://artificialintelligenceact.eu/article/50/ — 2026-07-13
  - Signal 2 (Feasibility): C2PA/Content Credentials shipped and are supported by Meta, TikTok, Microsoft — but "social media pipelines strip embedded metadata, including C2PA manifests, during upload, transcoding and re-encoding," so the compliance artifact must be an external timestamped log, not the file. Building that log is plain CRUD + hashing, no research risk. — https://www.softwareseni.com/c2pa-adoption-in-2026-hardware-platforms-and-verification-reality/ and https://contentauthenticity.org/blog/the-state-of-content-authenticity-in-2026 — 2026-07-13
  - Signal 3 (Economic): Money already moving on both flanks and missing the middle. Disclo.eu sells an Art. 50 badge + evidence log at €69 one-time / €149-a-year — but only for website chatbot renders. Enterprise AI-governance platforms (OneTrust, Credo AI, Holistic AI, Modulos) start at €30–50K/year with a sales call. Adobe is selling Content Authenticity into enterprises. Nothing sits in between for the agency shipping 200 assets a month. — https://disclo.eu/ and https://kla.digital/blog/best-eu-ai-act-compliance-software-2026 — 2026-07-13
  Category: Regulatory arbitrage
```

## 3. The opportunity

The Art. 50 tooling market has split cleanly into two camps, and both of them missed the actual workflow.

**The cheap camp** — Disclo.eu at €149/year — solves exactly one shape of the problem: you have a chatbot on your website, it needs a badge saying "you're talking to an AI," and Disclo timestamps each time that badge renders. Genuinely useful. Completely irrelevant to a video ad running on Meta, a synthetic voiceover in a radio spot, or an AI-upscaled product shot in a client's email campaign. The badge-render log proves a *webpage* did something. It says nothing about an *asset*.

**The expensive camp** — OneTrust, Credo AI, Holistic AI, Modulos — starts at €30–50K/year and requires a sales conversation. These are AI-governance platforms built for a bank's model-risk committee. An agency with 14 people and a €2M billing book is not buying that, and would not know what to do with it if they did.

The gap is the agency's actual daily reality: **a creative asset pipeline**. Fifty to three hundred assets a month, most of them now AI-touched somewhere — a background generated in Firefly, a voiceover cloned in ElevenLabs, an avatar in HeyGen, a headline drafted by an LLM and then edited. Some of those need a visible "AI" label. Most don't. The agency doesn't know which. And when the client's legal team sends the inevitable email in September — *"confirm every deliverable you shipped us complies with Art. 50"* — the agency has nothing but a Slack thread and a hope.

What a focused product does 10× better than either incumbent: it attaches itself to the **asset**, not the website and not the org chart. Every deliverable that leaves the agency gets classified (does this trigger Art. 50 or not, and why), gets the required visible label rendered onto it, gets hashed, gets timestamped, and gets a one-page certificate the agency can forward to the client. The client's legal team gets what it asked for. The agency gets to stop sweating.

That's not a governance platform. It's a **log with a classifier bolted to the front and a PDF bolted to the back.** Which is precisely why a small team can ship it and the enterprise vendors won't bother.

## 4. Target market

- **Primary customer:** Independent creative, performance-marketing and content agencies in the EU — 8 to 60 people, €1M–€15M in billings — that produce paid social, video, and display creative for brand clients. The buyer is the **Operations Director / Head of Delivery**, occasionally the founder. Not the CMO, not a lawyer. The person who owns "did we actually ship what we said we'd ship."

  Beachhead: **Germany and the Netherlands.** Germany because it has the largest EU agency market (~€20B in agency revenue) and a legal culture that treats a new statute as something you comply with in advance rather than after the first fine. The Netherlands because agency density is high, English is the working language, and buying decisions are fast.

- **Why they buy:** Not because they fear a €15M fine — they correctly assume the AI Office is not coming for a 20-person shop in Utrecht first. They buy because **their clients will demand it, in writing, and they have no answer.** The liability read is that the brand is on the hook for the disclosure. Brands will push that down into agency contracts as a warranty. An agency that can hand over a per-asset certificate wins the pitch against one that says "yeah, we label stuff." This is a *sales asset that happens to be a compliance tool* — which is why it sells to Ops and not to Legal.

  The secondary reason: agencies genuinely do not know what triggers the rule. Is an AI-upscaled product photo a deepfake? (No — no real person.) Is a cloned voiceover of the founder? (Yes.) Is an AI-written LinkedIn post about the client's new factory? (Maybe — "public interest" is doing a lot of work in that sentence.) They want somebody to answer this per asset, defensibly, and then stand behind the answer on paper.

- **Rough TAM reasoning:** Germany and France alone account for ~€31.6B in annual advertising-agency revenue (Statista, 2022). Precise agency counts aren't publicly broken out at SME level, so I'll reason from spend rather than claim a headcount I can't source: a market that size supports tens of thousands of agencies, of which the ones producing AI-touched creative at volume are a meaningful minority. I don't need a big share. **400 agencies at €249/month is €1.2M ARR.** That is a rounding error against the German agency market. The constraint here is distribution, not market size — which is the good kind of constraint.

- **Why now for them:** The date. 2 August 2026 is twenty days out and it does not move. Every agency in Europe has a partner who read a LinkedIn post about this three weeks ago and has been quietly panicking since. There is a narrow, loud, self-closing window here — roughly July 2026 through Q1 2027 — where "how do we prove we labelled it" goes from nobody's problem to everybody's problem. After that the workflow calcifies and whoever owns the log owns it.

## 5. Product sketch (MVP)

- **Asset intake.** Drop a file — video, image, audio, or copy — or connect the folder the agency already ships from (Google Drive, Dropbox, Frame.io). Every deliverable that goes to a client passes through.
- **Trigger classification.** For each asset, an AI pass answers the only question that matters: *does Art. 50 bite here, and which limb?* Deepfake (real person depicted → visible label required). Synthetic public-interest text (→ disclosure unless human-reviewed). Neither (→ no obligation, and here's why). Every verdict comes with a one-paragraph written rationale citing the specific limb of Art. 50 — because the rationale is the thing the client's lawyer actually reads.
- **Label rendering.** For assets that trigger, burn the compliant visible marker onto the asset itself — the Code-of-Practice-permitted "AI" / "KI" / "IA" two-letter label, correctly placed and unobstructed, per the interim guidance. Video gets a persistent corner mark; audio gets a spoken disclaimer prepended; images get the icon. Swap to the uniform EU icon automatically the day the Commission finalises it.
- **The log.** Every asset gets a row: content hash, tool declared, trigger verdict + rationale, label applied (y/n), who approved, timestamp, client, campaign. Immutable and append-only. This is the product.
- **Client certificate.** One-click PDF, per campaign or per month: *"Agency X shipped 47 deliverables to Client Y between 1–30 September 2026. 12 triggered Art. 50(4). All 12 carry the required visible disclosure. Hashes and timestamps attached."* This is the artifact the agency emails to the client's legal team, and it is the reason they pay.
- **Tool declaration.** A short intake per asset — Firefly, ElevenLabs, HeyGen, Midjourney, an LLM, none — that feeds the classifier and, more importantly, gets written into the record. When the provider's C2PA metadata survives, read it and reconcile; when the platform strips it, the log is the fallback.
- **Contract gap alert.** Flag the assets where the agency is doing the labelling but the client contract is silent on who the deployer is. That's the agency's uninsured exposure, and showing it to them is how you convert a trial.

## 6. AI angle — what's load-bearing

Strip the AI out and this is a spreadsheet with a PDF export. Nobody pays €249/month for that.

The load-bearing work is the **classifier that decides whether an asset triggers Art. 50 and writes the defence in the same breath.** That is not a checkbox. It is a judgement call over multimodal input — is there a real, identifiable person in this frame; is this voice a clone of a specific human or a generic synthetic read; is this AI-drafted text "on a matter of public interest" or is it a shampoo ad; was there enough human editorial intervention to fall inside the carve-out. A junior producer gets this wrong constantly. A lawyer gets it right and charges €300/hour to do so, which is why nobody asks a lawyer 200 times a month.

The model does three things a human can't do at that price and that volume:

1. **Sees the asset.** Vision over frames to detect a depicted real person (the deepfake trigger) versus a synthetic-but-nobody face versus no person at all. Audio analysis to distinguish a cloned voice from a stock TTS read.
2. **Writes the rationale.** The verdict is worthless without the reasoning — the whole value of the certificate is that a client's lawyer can read *why* asset #23 was exempt and nod. The rationale is generated per asset, cites the limb, and is the artifact that survives audit.
3. **Absorbs regulatory drift.** The Code of Practice is not final. The uniform EU icon doesn't exist yet. Guidance will land through 2026–27 and the classifier's rules must move with it — centrally, once, for every customer. That's the thing that makes this a subscription and not a one-time download.

Remove the AI and the agency is back to a producer guessing. That's the current state, and it's why the log alone doesn't sell.

## 7. Localization angle (if any)

EU-first by definition — the regulation *is* the market. But localisation is a real wedge inside the EU, not a global-versus-local question:

- **Label language.** The interim marker is "AI" in English, "KI" in German, "IA" in French/Spanish/Italian. The product must pick the right one per market and per asset, automatically. Getting this wrong is the kind of small, stupid, visible error that kills credibility with a German ops director.
- **Audio disclaimers** must be spoken in the language of the asset. A German radio spot needs a German-language disclaimer, natively delivered, not a subtitle.
- **Regulator posture varies.** Germany's authorities will enforce early and by the letter. Ireland and the Netherlands will be more pragmatic. The product's default strictness should reflect the client's market — and the sales pitch is much easier where enforcement is expected to be sharp, which is exactly why the beachhead is Germany.
- **Language of the certificate.** The PDF that goes to the client's legal team must be in the client's language. German legal teams read German.

No payment-rail angle, no vernacular-distribution angle. This is a compliance-driven localisation play, not a market-access one.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** Three tiers, per agency workspace, priced against the pain rather than the seat count:
  - **Solo / freelance — €49/mo.** Up to 25 assets/month. The one-person content shop that ships for three clients.
  - **Agency — €249/mo.** Up to 300 assets/month, unlimited clients, unlimited certificates. **This is the tier that matters.**
  - **Network — €799/mo.** Multi-entity, white-label certificates, API into the agency's DAM, priority on new guidance. For the 60-person shop or the small holding group.

  Deliberately priced *above* Disclo (€149/year) because it does something categorically different, and *an order of magnitude below* OneTrust (€30K+/year) because the buyer is an ops director with a credit card, not a procurement committee. €249/month is the price of one hour of the agency's own billed time. That comparison closes deals.

- **ACV:** ~€3,000 blended, assuming the customer base lands roughly 20% Solo / 65% Agency / 15% Network.

- **Rough math to $1M ARR:** 330 agencies at a €3,000 blended ACV = **€990K ≈ $1.07M.** Three hundred and thirty agencies across Germany, the Netherlands, France, Spain and Italy. That is a small number against a €31.6B German+French agency market. Reachable in 12–18 months if the outbound motion works.

- **Rough math to $5M ARR:** ~1,650 agencies, or fewer agencies at a higher ACV. The honest path to $5M is **not** more logos — it's the expansion described below, plus spreading beyond agencies into the in-house brand marketing teams who have the identical problem and bigger budgets. A brand's in-house content team is a better customer than an agency (more assets, more money, more fear); it's just a slower sale, which is why it isn't the wedge.

- **Expansion path:** ACV grows three ways. **Volume** — agencies that adopt it for one client roll it out across the book, and asset counts push them up a tier. **The certificate becomes the product** — once clients start *asking* for the MarkPass certificate by name, brands want their own seat to verify incoming certificates, which flips a per-agency tool into a two-sided workflow. **Regulatory surface** — Art. 50 is the wedge, but the same log answers the AI-literacy record-keeping duty under Art. 4 (deployers must document who was trained on what, and when — attendance records alone are explicitly insufficient). Adding that is a natural upsell into the same buyer, and it's the same shape of product: a defensible record of a thing you did.

## 9. Go-to-market wedge — first 100 customers

The date is the campaign. Everything below is calibrated to a window that opens now and starts closing in Q1 2027.

- **The scoped-or-not audit, free, at scale.** Build a free "Does Art. 50 hit your creative?" tool — an agency uploads five recent deliverables, gets back a per-asset verdict with rationale, and a blunt count: *"3 of your 5 assets shipped last month would need a visible AI label after 2 August."* That number is the entire sales pitch. It's also the trial. Disclo already proved the free-scope-check funnel converts in this exact market; I'm running the same play against a bigger, scarier asset base. **Target: 2,000 free audits → 5% to paid = 100 customers.**

- **Cold outbound to a scraped, named list.** German and Dutch agency directories are public and enumerable — BVDW (the German digital-industry association) publishes its member roster; the DDV and Dutch equivalents likewise; LinkedIn Sales Navigator filters cleanly on "Marketing Agency, 11–50 employees, Germany." Scrape 1,500. The email is not a pitch, it's the free audit result: run their *publicly visible* recent campaign creative through the classifier first, and send them the verdict unprompted. *"Your Q2 spot for [Client] uses a synthetic voiceover. After 2 August that needs a visible label. Here's the analysis; here's what your other 40 assets probably look like."* That converts at far better than a cold pitch because it is not a pitch — it's a finding. **Expect 8–12% reply, 2–3% to trial.**

- **Go where the panic already is.** Every EU marketing-law firm, every agency association, and every fractional-CMO newsletter is publishing "August 2 is coming" content right now — that's how I found this. They have the audience and no product to point it at. Offer the free audit tool as a co-branded asset to 20 of them (law firms especially — the audit generates *them* leads too, because half the results end with "your client contract doesn't say who the deployer is"). **Three good partnerships beats a year of SEO.**

- **The client-side pincer.** Once ~30 agencies are issuing certificates, go to the *brands* receiving them and offer a free verifier seat. Brands then start asking their *other* agencies for a MarkPass certificate. Each brand seat is a warm intro to three or four agencies. This is the motion that takes it from 100 to 400, and it is why the certificate must be beautiful and forwardable from day one.

- **One loud, specific piece of content.** Not "content marketing." One thing: **a public, running tally of AI-generated ads currently live in the EU that would fail Art. 50 after 2 August** — built by running the classifier over the Meta Ad Library, which is public. Name no agencies, name categories. That is a press story in *Horizont* and *Adformatie*, and it makes the tool's existence obvious to every agency ops director in the country in one week.

## 10. Build complexity — justification

**Low.** Every hard part is bought off the shelf.

The classifier is a multimodal model call against a well-specified rubric — the rubric is the work, not the model, and the rubric is written by reading Art. 50, the Code of Practice, and the Commission guidelines, which are all public. Label rendering is ffmpeg for video, standard image compositing, and TTS-prepend for audio. The log is an append-only table with content hashes. The certificate is a PDF generator. C2PA read/write has open libraries.

The genuinely non-trivial pieces are (a) getting the classification rubric *right* and keeping it right as guidance lands, which is domain work rather than engineering work, and (b) making the intake frictionless enough that a producer actually uses it on deadline instead of routing around it. Both are solvable by paying attention, not by hiring.

**Realistic v1: 6–8 weeks for a strong solo builder, or 5 weeks for a pair.** The free audit tool ships in week two and starts collecting the list while the rest gets built. The calendar here is the point — this product is worth much less in January than it is in August.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | It's a compliance tool for a public statute. The one thing to be careful about: sell it as documentation and classification support, never as legal advice. Disclo's own disclaimer is the right posture — *"the evidence log supports your documentation process; it does not by itself establish legal compliance."* Copy that language. |
| Ethical — no harm / dark patterns | ✅ | This is a transparency product. It makes AI content *more* clearly labelled. It is on the right side of the thing the regulation is actually trying to achieve, which is rarer than it sounds in the compliance-tooling category. |
| Market exists (evidence above) | ✅ | Statute with a hard date and a €15M ceiling; a paying incumbent at the low end (Disclo) and paying incumbents at the high end (OneTrust, Credo AI); an explicitly-documented liability ambiguity between agency and client. |
| 1–5 person team can build this | ✅ | Solo-buildable. Off-the-shelf models, ffmpeg, a database, a PDF library. |
| Launchable with <$50K / ₹40L | ✅ | Well under. Inference is the main variable cost and it's cents per asset. Real budget goes to a lawyer reviewing the classification rubric — worth every euro, and still only a few thousand. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | **15**/20 | Real, dated, and about to be felt weekly — but honestly assessed, the pain is *anticipatory* rather than currently bleeding. Nobody has been fined yet. What makes it a 15 rather than a 12 is that the pain arrives via the *client*, not the regulator: the moment a brand's legal team sends the "prove it" email, the agency's problem becomes immediate and commercial. What keeps it off 18 is that a chunk of agencies will simply do nothing until somebody nearby gets burned, and I can't tell you when that is. |
| Demand evidence | 15 | **12**/15 | Strong on the structural side — statute, date, fines, and *two* separate tiers of vendor already charging money (Disclo at €149/yr, OneTrust at €30K+/yr). Estimated Art. 50 compliance spend for non-high-risk systems is already being quoted at €500–1,500 per organisation, which brackets my pricing nicely. What I could **not** find, and I looked: verbatim agency complaints. No Reddit threads of ops directors panicking, no G2 reviews to mine. The demand is inferred from the regulation and from vendor behaviour, not heard from the customer's mouth. That gap is exactly what the week-one validation sprint is for, and it's why this isn't a 14. |
| Build feasibility | 15 | **13**/15 | Solo builder, 6–8 weeks, entirely off-the-shelf. The only real engineering risk is video label rendering across a long tail of formats, which is tedious rather than hard. |
| Distribution clarity | 15 | **12**/15 | Named, enumerable lists (BVDW roster, LinkedIn filters, agency directories). A free-audit funnel whose conversion mechanics are already proven in-market by Disclo. A partner channel (marketing law firms) that is actively producing the panic and has nothing to sell into it. Held to 12 because outbound-to-agencies is a crowded inbox and my reply-rate assumptions are estimates, not measurements. |
| Revenue mechanics | 15 | **11**/15 | €249/mo is defensible — it sits between two priced incumbents, and it's an hour of the agency's own billed time. 330 customers to $1M is a credible number. The soft spot is **churn**, and I want to be honest about it: this could be bought in a panic in Q3 2026 and cancelled in Q3 2027 once the fear normalises and nobody got fined. The expansion path (Art. 4 literacy records, brand-side verifier seats) exists specifically to answer that, but it's a plan, not a proof. |
| Time to first revenue | 10 | **8**/10 | The free audit ships in two weeks and is itself the funnel. Realistically 6–8 weeks to first paying agency, and the deadline does the closing for you. Not a 10 because agencies in July and August are half on holiday — which is a genuinely annoying feature of this particular calendar. |
| Defensibility | 10 | **3**/10 | Thin, and I won't dress it up. The classifier rubric is public law. The rendering is ffmpeg. A competent competitor clones the v1 in a month. What you actually get is: a **six-to-nine-month head start on a self-closing window**, and then whatever workflow lock-in the log accumulates — because once an agency has fourteen months of certificates in your system, moving is unattractive. That's an execution moat, not a real one. Speed is the entire strategy here. |
| **Total** | **100** | **74**/100 | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `content-heavy`

Technical because the multimodal classification and the video/audio rendering pipeline are the product. Content-heavy because the distribution motion is fundamentally *"be the person who explained Art. 50 to European agencies most clearly"* — the free audit tool, the Meta Ad Library tally, the law-firm partnerships all run on being the loudest credible voice in a narrow window. A builder who won't write and won't publish will lose this to one who will.

Notably **not** `domain-expertise-required` — the domain is a public statute you can read in an afternoon. Budget for one lawyer to review the classification rubric and you've bought the expertise.

### Key assumptions to validate (3–5)

1. **Assumption:** Agencies feel this as *their* problem, not their client's. **How to test:** 20 calls with ops directors at German/Dutch agencies. The question isn't "do you know about the AI Act" — it's *"has a client asked you about Art. 50 yet, and what did you tell them?"* If fewer than 6 of 20 have had that conversation or expect it within 90 days, the timing is wrong and this becomes a Q4 product, not a July one.
2. **Assumption:** The per-asset certificate is the thing they'll pay for — not the labelling, which they could bodge in After Effects. **How to test:** Mock the certificate PDF before writing a line of product code. Show it to 10 agencies. If they don't immediately say "can I send that to my client," the value prop is wrong and the product is a labelling utility, which is worth €19/mo, not €249.
3. **Assumption:** €249/mo clears. **How to test:** Price it live on the landing page from day one, drive the free-audit traffic at it, measure. Don't ask people what they'd pay; make them decide.
4. **Assumption:** The classifier is right often enough to be trusted. **How to test:** Assemble 100 real ad assets, have a media lawyer classify them, and score the model against that. **Below 90% agreement on the deepfake trigger, this product is a liability rather than a defence** — you'd be handing agencies a certificate that's wrong. That's the hard technical gate and it must be cleared before anyone pays.
5. **Assumption:** Churn survives the fear normalising. **How to test:** Can't test in a week. Watch it from month 9. Mitigate by shipping the Art. 4 literacy-record module before the first renewal cohort comes up.

### Risk flags

1. **Regulatory risk — and it cuts both ways.** The Digital Omnibus already delayed the high-risk obligations to December 2027. It did *not* delay Art. 50 — but it demonstrated that Brussels will move dates under industry pressure. If Art. 50 gets softened or deferred in a subsequent omnibus, the urgency evaporates overnight and so does the sales motion. Conversely, if the Commission's final guidance lands *stricter* than expected, the product gets more valuable. This is a leveraged bet on a date holding. Watch the AI Office's output weekly.
2. **The uniform icon problem.** The Code of Practice permits an interim "AI"/"KI"/"IA" text label until the Commission finalises a uniform EU icon. When that icon lands, every asset shipped under the interim rule may need re-marking — which is either a support nightmare or, played correctly, the best retention event you'll ever get ("we re-marked your 340 assets overnight; here's the new certificate"). Plan for it as an opportunity, not a fire.
3. **Enforcement may simply not arrive.** The AI Office is not going to raid a 20-person agency in Rotterdam in 2027. If no visible enforcement action lands against anyone agency-shaped within 12 months, the entire category deflates and this becomes a nice-to-have that churns. **This is the single biggest risk to the business and I want it stated plainly.** The mitigation is that the buying trigger is the *client's* demand, not the regulator's — brands will enforce this on agencies long before the AI Office does, because the brands are the ones actually exposed. That's the bet.
4. **Platform dependency (mild).** C2PA reconciliation depends on platforms not changing their metadata handling. Since the product's core premise is that *platforms already strip metadata*, this is baked in as an assumption rather than a dependency — the log is deliberately designed to survive it. Low concern.
5. **Big-agency in-housing.** WPP, Publicis and Havas will build this internally and won't buy. Fine — they were never the customer. But if one of them open-sources their labelling toolkit as a PR move, the free tier of this market gets ugly fast.

## 14. Structured verdict

```
Score:                  74/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical solo founder who will also publish — comfortable with
                        multimodal models and ffmpeg, and willing to be the loudest clear
                        voice on Art. 50 to EU agencies for six months. A media lawyer on
                        a €3–5K retainer to sign off the classification rubric.
Time to revenue:        6–8 weeks (free audit tool live in week 2)
Capital to launch:      €8–12K ($9–14K) — mostly the lawyer and inference
Top 3 assumptions to validate first:
  1. Agencies own this problem, not their clients — 20 ops-director calls; kill if
     fewer than 6 of 20 have had or expect a client Art. 50 conversation within 90 days.
  2. The certificate is the product — mock the PDF, show 10 agencies, listen for
     "can I forward this to my client."
  3. Classifier accuracy — 100 real assets vs. a media lawyer's classification;
     must hit ≥90% agreement on the deepfake trigger before anyone pays.
Kill criteria:
  - Abandon if <90% classifier agreement with a media lawyer on the deepfake trigger
    across 100 real ad assets. A wrong certificate is worse than no certificate.
  - Abandon if fewer than 6 of 20 agency ops directors report an existing or expected
    client demand for Art. 50 evidence within 90 days.
  - Abandon if the Commission defers or materially softens Art. 50 in a subsequent
    omnibus — the entire urgency thesis is the date.
  - Abandon if the free audit converts below 2% to paid trial after 500 completed audits.
```

## 15. Next step — 1-week validation sprint

The date is 2 August. This sprint runs *now* or it doesn't run.

- **Day 1–2 — Build the classifier rubric and test it against reality.** Read Art. 50, the Code of Practice, and the Commission's draft guidelines. Write the rubric. Then pull 100 real ad assets — the Meta Ad Library is public and free — and classify them. Have a media lawyer classify the same 100 independently (one day of their time, ~€1,500). **Falsifiable outcome: ≥90% agreement on the deepfake trigger, or the product doesn't work.** This is the gate. Do it first, because if it fails, nothing else matters.

- **Day 3–4 — Mock the certificate and put it in front of people.** No product. One beautiful PDF: *"Agency X, September 2026, 47 deliverables, 12 triggered Art. 50, all 12 labelled, hashes attached."* Then get on the phone with 20 ops directors at German and Dutch agencies (LinkedIn Sales Navigator, cold, offer the free audit as the reason to talk). Two questions only: *"Has a client asked you about this yet?"* and *"If you could send them this, would that end the conversation?"* **Falsifiable outcome: ≥6 of 20 report an existing or expected client demand, AND ≥5 of 20 ask unprompted whether they can forward the certificate.**

- **Day 5 — Price it and make someone flinch.** Landing page, the free audit as the hook, €249/mo on the page, a real Stripe checkout behind it. Push the 20 calls plus a scraped list of 200 BVDW-member agencies at it. **Go/no-go: at least 3 agencies either pay, pre-pay, or explicitly commit in writing to pay on launch.** Not "that's interesting." Not a signed LOI. Card details or a written commitment.

If Day 1–2 fails the accuracy gate, kill it — you cannot sell a defence document that's wrong. If Days 3–5 come back lukewarm, the read is that the timing is off by a quarter, not that the idea is dead: park it and re-run the sprint in October, when the first enforcement noises start and the clients begin asking. But run it now, because the whole thesis is that this window is open for about nine months and then it belongs to whoever showed up first.
