---
title: "BindProof — cyber insurance attestation binder for MSPs"
slug: cyber-attestation-drift
date: 2026-08-14
category: DevTools / US-SMB — Managed Service Providers (15–150 Clients) Whose Clients Attested to Security Controls That Have Since Silently Drifted Off
complexity: Medium
score: 77
verdict: GO
confidence: Medium
oneLiner: "Watches whether your clients' security controls still match what they swore to their cyber insurer, and proves it."
tags:
  vertical: DevTools
  model: SaaS
  geography: US
  secondary: [MSP, Cyber-insurance, AI-agent, Compliance-driven, Multi-tenant, SMB]
axes:
  problem: 17
  demand: 13
  build: 11
  distribution: 13
  revenue: 12
  time: 7
  defensibility: 4
founderFit: [technical-heavy, sales-heavy, domain-expertise-required]
featured: false
---

# BindProof

## 1. One-liner

Watches whether your clients' security controls still match what they swore to their cyber insurer, and proves it.

## 2. Trend signal — why now?

Three things moved, and the third one is the reason this is suddenly an MSP's own problem rather than a client's problem.

**Denial stopped being rare.** More than 40% of businesses that filed cyber insurance claims in 2024 received no payout, per Fitch Ratings data cited across the channel press. Roughly 21% of claims were denied or partially denied in 2025, up from 15% in 2023 — and the single most common denial reason, accounting for 34% of denials, is a business's failure to maintain the security controls it declared on its own application. Deloitte's Global Insurance Outlook names the same root cause. This is not an edge case. It is the modal denial.

**The legal precedent is now fully baked.** *Travelers v. International Control Services* set the template: ICS's CEO signed an application stating the company used MFA for administrative and privileged access. After a May ransomware event, Travelers' investigation found MFA protected only the firewall and no other digital assets. The parties stipulated to rescission — the $1M policy was unwound as if it had never existed. Not reduced. Rescinded. One wrong checkbox on a form vaporised the entire policy.

**And in September 2025 the insurers turned and pointed at the MSP.** *Ace American Insurance Co. v. Congruity 360, LLC and Trustwave Holdings, Inc.* (2:25-cv-15657, D.N.J., filed 15 Sep 2025) is the one that changes the buyer. After paying roughly $500,000 on CoWorx Staffing Services' cyber policy, ACE invoked subrogation rights *against the IT provider and the MSSP* — alleging Congruity failed to implement MFA for remote access and had flawed network segmentation, and that Trustwave misclassified a detected event as "moderate," delaying response. Claims: negligence, gross negligence, breach of contract, breach of implied warranty. The insurer is no longer just denying the client's claim. It is trying to collect from the MSP.

Meanwhile underwriting itself changed shape. Stanislav Kazanov of Innowise, quoted April 2026: *"In the past, a client would complete an insurance form, answer 'yes' when asked about MFA, and be issued a policy... Underwriters no longer trust self-attestation. They now require continuous telemetry data."* Jordan Blake of Shoreline Public Adjusters, same piece: *"Most cyber claims we work trace back to a misalignment between what was stated at binding and what actually existed."*

The gap that produces that misalignment is well documented and boring: **drift.** A travelling executive needs an MFA exception. A technician disables a conditional access policy to troubleshoot and forgets to re-enable it. An app integration requires a permission change nobody documents. As one MSSP analysis puts it, *"A quarterly audit can identify drift, but it cannot reliably prevent exposure. If a policy is disabled in February and reviewed in May, the audit may be accurate and still three months too late."*

Nobody is watching the delta between **the frozen sentence on a signed insurance application** and **the live state of the tenant**. That specific delta is what rescinds policies and what ACE is now suing MSPs over.

Provenance:
  - Signal 1 (demand): 40%+ of 2024 cyber claims received no payout; 34% of 2025 denials caused specifically by failure to maintain controls attested to on the application — https://smartermsp.com/cyber-insurance-is-changing-the-rules-and-msps-must-adapt/ — observed 2026-08-14
  - Signal 2 (economic/legal): ACE American v. Congruity 360 & Trustwave (2:25-cv-15657, D.N.J., 15 Sep 2025) — insurer subrogates ~$500K against the IT provider and MSSP for failure to enforce MFA, converting client denial into direct MSP liability — https://www.channelpronetwork.com/2026/07/26/cyber-insurance-pitfalls-for-msps/ — observed 2026-08-14
  - Signal 3 (feasibility): Underwriters have moved from self-attestation to evidence-based verification requiring continuous telemetry; MSPs already hold API access to every console (M365, EDR, RMM, backup) that would produce it — https://blog.cyberadvisors.com/cyber-insurance-in-2026-the-controls-underwriters-expect-and-how-to-prove-them — observed 2026-08-14
  - Signal 4 (corroborating, mechanism): Configuration drift in M365 documented as routine operational decay — MFA exceptions, disabled conditional access policies never re-enabled — with quarterly audits explicitly too slow to catch it — https://www.msspalert.com/native/what-is-configuration-drift-and-why-its-your-biggest-m365-security-risk — observed 2026-08-14
  Category: Tech-unlock

## 3. The opportunity

Every MSP with more than about fifteen clients is sitting on an unpriced liability it cannot see.

Somewhere in each client's filing cabinet is a signed cyber insurance application. It contains fifteen to thirty binary assertions: *MFA is enforced on all remote access. EDR is deployed on all endpoints and servers. Backups are immutable and restore-tested quarterly. Privileged accounts are separated. Legacy authentication is disabled.* The client signed it. Often the MSP supplied the answers, because the MSP is the only party who actually knows.

That document is a **photograph**. The tenant is a **movie**. From the moment of binding, the two diverge — not through malice but through Tuesday. And the divergence is invisible until the worst possible moment, which is after a ransomware event, when a forensic examiner working for the carrier reconstructs the environment and compares it line-by-line against the application.

The incumbents don't cover this. **Cynomi** and **Compliance Scorecard** build security programs, policy documents and governance frameworks — they answer "does this client have a written policy?" not "does the live tenant still match the sentence the client signed in March?" **Vanta** and **Drata** are built for SOC 2 and the enterprise audit motion, priced and shaped wrong for an MSP running eighty SMB tenants. **Galactic Advisors** does recurring third-party assessments — point-in-time, human-delivered, and the whole point is that point-in-time is what fails. RMM and EDR vendors show you the current state of *their* control, in *their* console, with no idea what any client promised an underwriter.

The wedge is narrow and specific: **the insurance application is the schema.** Not NIST CSF, not CIS 18, not a generic posture score. The literal questions on the literal form the client signed, parsed into monitorable assertions, checked continuously against live telemetry the MSP already has API access to, with a timestamped evidence trail that survives a forensic examiner.

Two products fall out of one engine:
1. **Defence** — the MSP learns within hours, not quarters, when a client drifts off an attested control, and can fix it or get a signed risk-acceptance waiver before it matters.
2. **Offence** — at renewal the MSP hands the broker a generated evidence binder instead of scrambling for screenshots, which is the exact behaviour the channel press is already telling MSPs to adopt and which most cannot operationalise.

## 4. Target market

- **Primary customer:** Owner or vCISO-lead at a US managed service provider with 15–150 SMB clients and 5–40 staff. The buyer is the person who personally signs off on security posture and who personally gets deposed if a client's claim is denied. Secondary: MSSPs and the growing tier of MSPs selling formal "compliance-as-a-service" retainers.
- **Why they buy:** In their own words, from the channel press — *"Most cyber claims we work trace back to a misalignment between what was stated at binding and what actually existed."* And the sharper version: insurers are now naming MSPs in subrogation suits. An MSP owner reading the ACE complaint sees their own client list. Buying is cheaper than being the test case.
- **Rough TAM reasoning:** Estimates of US MSPs run in the tens of thousands; the serviceable slice — MSPs with enough client count and enough security maturity to sell a compliance retainer — is realistically single-digit thousands. At $600–2,500/mo that is a $50M–150M serviceable market. Far too small for a VC-scale play. Exactly right for a bootstrapper who wants $3–5M ARR.
- **Why now for them:** Three forcing functions arrived within twelve months — denial rates crossed 40%, underwriters shifted to demanding telemetry over attestation, and an insurer sued an MSP directly. Any one of these makes it a talking point. All three make it a budget line.

## 5. Product sketch (MVP)

- **Application ingest** — upload the client's signed cyber insurance application (PDF or scan) or their renewal questionnaire; the system reads it and extracts each control assertion into a discrete, monitorable claim with the exact quoted wording preserved.
- **Live control mapping** — connect Microsoft 365 / Entra, the EDR console, the RMM, and the backup product; each extracted assertion is bound to the specific telemetry that proves or disproves it.
- **Drift alerts** — when live state stops matching a signed assertion, the MSP gets a notification naming the client, the exact sentence they attested to, what changed, and when. Not a posture score. A named broken promise.
- **Attestation binder** — one-click generation of a renewal evidence pack: every assertion, current status, supporting evidence with timestamps, and the continuous history since binding. This is the artifact the broker asks for.
- **Multi-tenant roll-up** — one screen showing every client, every policy, days-to-renewal, and any client currently out of alignment with their own signed form.
- **Risk-acceptance workflow** — when a client refuses a control (the travelling-executive MFA exception), generate the waiver documenting they were told it may invalidate their coverage, and capture their signature. This is the MSP's own E&O shield.
- **Renewal countdown** — flags each policy 90 days out, which the channel guidance identifies as the point where problems are still fixable rather than priced in.

## 6. AI angle — what's load-bearing

Remove the AI and this product does not exist, because the hard part is not monitoring — it's the schema.

Every carrier writes its own application. Chubb, Travelers, Coalition, At-Bay, Beazley, and a long tail of MGAs each ask overlapping questions in different language, different order, different granularity. "Is MFA required for all remote access to the network?" and "Do you enforce multifactor authentication on remote connections including VPN and RDP?" are the same assertion in different clothes. Some are compound — one sentence containing three separately-checkable claims. Some carry carve-outs in a footnote.

Hand-building a rules parser per carrier is the work that makes this business impossible for one person. An LLM reading arbitrary application PDFs and emitting a normalised set of atomic, testable assertions — each tagged to a control domain and each carrying its verbatim source sentence — is what collapses a per-carrier integration project into an upload. That is load-bearing.

The second AI job is the mapping layer: deciding that "immutable backups, restore-tested quarterly" is satisfied by a particular combination of retention-lock settings and restore-job history in whichever backup product this client happens to run. The judgement of what evidence satisfies a plain-English promise is the product.

The third is drafting: turning a detected drift into an email the MSP can actually send to a non-technical client — explaining in their language what they promised, what changed, and what happens to their coverage if it stays broken.

Deterministic code does the watching. The model does the translation between legal English and telemetry, in both directions. That is the right split, and it means a wrong model output produces a bad alert, not a silently missed one.

## 7. Localization angle (if any)

N/A — this is a US-first play, and deliberately so. The wedge is a specific US legal development: insurer subrogation against IT providers, plus US carrier application formats and US E&O exposure. UK and Australian MSP markets have similar structure and would be a natural second market once the carrier-parsing library is broad, but the urgency signal — a named insurer suing a named MSP — is currently American. Forcing a localization angle here would weaken the product.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** Per-MSP platform fee with client-count tiers. $299/mo up to 25 monitored clients, $699/mo up to 75, $1,499/mo up to 150, custom above. The MSP resells into their own compliance retainer — the channel already prices vCISO advisory at $150–300/hour and per-client retainers are the standard MRR shape, so a $10–20/client/mo cost against a retainer they bill at several hundred is trivially defensible.
- **ACV:** ~$8,400 blended, assuming the mix skews to the middle tier.
- **Rough math to $1M ARR:** 120 MSPs at ~$700/mo average = $1.0M. That is a reachable number for a founder-led sales motion in a channel this tightly networked.
- **Rough math to $5M ARR:** ~500 MSPs at a blended $830/mo, which needs the mid and upper tiers to carry the mix — meaning landing MSPs at 75+ clients rather than 20. Realistically also needs a second wedge: selling the same evidence engine to the brokers and MGAs who want continuous verification of their own book. That's the expansion, not the plan A.
- **Expansion path:** client-count growth is automatic and aligned (the MSP grows, the bill grows). Then: additional frameworks on the same engine (client security questionnaires, vendor risk requests, SOC 2 readiness) — because once you've parsed arbitrary compliance prose into monitorable assertions, insurance applications are just the first document type.

## 9. Go-to-market wedge — first 100 customers

The MSP channel is the most reachable B2B community in software. It has named events, named communities, named influencers, and everyone knows everyone.

- **Lead with the lawsuit, not the product.** Write one genuinely rigorous breakdown of *ACE American v. Congruity 360* from the MSP's point of view — what was alleged, what would have had to be true to defend it, what evidence would have saved them. Post it to r/msp (a large, active, highly commercial community where MSP owners openly discuss vendors) and the major MSP Facebook and Slack communities. This is not content marketing; it is a specific document about a specific case that this audience is actively frightened by, published where they already argue about vendors.
- **Free "attestation gap" audit as the top of funnel.** MSP uploads one client's signed application and connects one M365 tenant. Product returns: here are the seven things this client swore to, here are the two that are no longer true, here is the date each broke. This is a five-minute demo that produces a genuine stomach-drop, and it is self-serve. Target: 400 audits to get 100 paying MSPs, which is a plausible ratio for a free tool that finds real problems in the prospect's own book.
- **Peer groups and communities.** MSP peer groups and mastermind communities are the channel's actual buying mechanism — a recommendation inside one converts across the group. Get into two or three; present the audit findings in aggregate ("across 400 MSP clients audited, 61% had at least one broken attestation") as an anonymised industry report. That report is the second piece of distribution and it writes itself from product usage.
- **Co-market with cyber insurance brokers who sell to SMBs.** Brokers hate denied claims — a denial is a lost renewal and a furious client. A broker who can tell prospects "our MSP partners run continuous attestation monitoring" wins business. Ten broker relationships, each referring MSPs in their book, is a compounding channel with aligned incentives.
- **The E&O angle for the closing conversation.** MSPs carry E&O insurance. Their own carriers are increasingly interested in what the MSP does to limit exactly this exposure. Selling the risk-acceptance waiver workflow as MSP self-protection reframes the purchase from cost to insurance — and that is the argument that closes the owner rather than the technician.

## 10. Build complexity — justification

**Medium.** The integrations are the work, but they are all documented commercial APIs — Microsoft Graph for Entra and M365 configuration, the major EDR vendors, the two or three RMMs that dominate the channel, the main backup products. None require partnership approval to read configuration state. The document parsing is an off-the-shelf model with careful prompt and schema work; the monitoring layer is a scheduler and a diff engine.

The genuine difficulty is **coverage breadth**: an MSP's book will span four EDR products and three backup vendors, and a product that only reads M365 tells half the story. V1 should ship M365/Entra plus the two largest EDR vendors and one backup product, and be honest about what it cannot yet see.

Realistic estimate: 14–18 weeks to a v1 a design partner will pay for, for two people. A single technical founder can reach the free-audit tool (application parse + M365 only) in about six weeks, which is enough to start the distribution motion before the full product exists.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Reads configuration data with the MSP's existing authorised access. Sells evidence, not insurance — no broker licence implicated. Must avoid rendering legal or coverage advice. |
| Ethical — no harm / dark patterns | ✅ | Makes accurate disclosure easier and reduces denied claims for SMBs. The waiver workflow documents informed consent rather than hiding it. |
| Market exists (evidence above) | ✅ | Denial statistics, a rescission precedent, an active subrogation suit against an MSP, and paying incumbents in adjacent slots. |
| 1–5 person team can build this | ✅ | Two people, ~4 months. All integrations are documented commercial APIs. |
| Launchable with <$50K / ₹40L | ✅ | API costs are trivial at this scale; main cost is founder time plus a few thousand in tooling and legal review of the waiver templates. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 17/20 | Not hypothetical: 34% of denials trace to this exact cause, a policy has already been rescinded over one checkbox, and an insurer is suing an MSP over it right now. Loses points only because the pain is episodic — felt at renewal and after incidents, not daily. |
| Demand evidence | 15 | 13/15 | Multiple independent hard signals: Fitch denial data, Deloitte on causes, two named lawsuits, and channel press actively instructing MSPs to build evidence packs. Docked because I found no MSP paying for *this specific* product yet — adjacent spend is proven, direct spend is inferred. |
| Build feasibility | 15 | 11/15 | Documented APIs throughout, no novel infra. Docked for integration breadth — covering a real MSP's heterogeneous book is a long tail, and a thin v1 undersells. |
| Distribution clarity | 15 | 13/15 | Named channel (r/msp, peer groups, MSP events), a free audit that finds real problems in the prospect's own data, and a lawsuit to lead with. Conversion ratio on the free-audit funnel is my main uncertainty. |
| Revenue mechanics | 15 | 12/15 | Pricing sits comfortably under the retainer the MSP already bills, and per-client tiering expands automatically. Docked because $5M needs either 500 MSPs or a second buyer (brokers), and neither is proven. |
| Time to first revenue | 10 | 7/10 | Design partners payable at ~8–12 weeks; the free audit can be pre-sold before full build. Not faster because MSPs buy on a considered cycle and want to see it run against a real tenant. |
| Defensibility | 10 | 4/10 | Honest score. The parsed carrier-application library and accumulated mappings compound, and workflow lock-in is real once binders are the renewal habit. But a funded compliance vendor — Cynomi, Vanta, a Galactic — could ship this as a feature. Speed and channel trust are the only moat for the first year. |
| **Total** | **100** | **77/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `sales-heavy` · `domain-expertise-required`

This needs someone who can build multi-tenant integrations *and* speak credibly to MSP owners about liability. A founder with MSP or channel background has an enormous unfair advantage here — the peer-group distribution motion is closed to outsiders. Without that background, recruit a channel-native co-founder or first sales hire.

### Key assumptions to validate (3–5)

1. **Assumption:** A meaningful share of MSP clients are, right now, out of alignment with their own signed cyber application. **How to test:** Run the free audit manually — by hand, no product — against 15 client tenants across 5 friendly MSPs. If fewer than 30% show at least one broken attestation, the alarm isn't loud enough to sell.
2. **Assumption:** MSPs will pay a platform fee for this rather than absorbing it as a manual checklist. **How to test:** Take 20 MSP owners through the manual audit finding, then quote $699/mo. Track how many sign a design-partner LOI at that price before anything is built.
3. **Assumption:** Signed applications are obtainable. The MSP may not hold the client's insurance paperwork, and clients may be slow to hand it over. **How to test:** In the same 20 conversations, ask directly — can you get me one client's signed application this week? Count how many actually deliver.
4. **Assumption:** LLM extraction of assertions from arbitrary carrier applications is reliable enough to trust. **How to test:** Collect 25 real applications across at least 8 carriers, extract, and have a human grade precision and recall on the assertions. Below ~90% recall, the product misses the thing it exists to catch.

### Risk flags

1. **Incumbent absorption:** This is a feature-shaped product. Cynomi, Compliance Scorecard, Vanta or an RMM vendor could bolt on "insurance application monitoring" within two quarters of seeing it work. The defence is owning the channel narrative and the carrier-application library first — which is a speed race, not a moat.
2. **Liability blowback:** A product that tells an MSP their client is compliant, when they aren't, creates a new failure mode and possibly a new defendant. Contract terms, careful framing as evidence rather than assurance, and a legal review of the waiver templates are non-optional, not paperwork.
3. **Document access friction:** The entire product is keyed to a document the buyer may not possess. If MSPs can't reliably obtain client applications, the fallback is monitoring against a generic carrier-common control set — which is a materially weaker and much more copyable product. This is the assumption most likely to reshape the business.
4. **Carrier fragmentation:** A long tail of MGAs with idiosyncratic forms means extraction quality varies by carrier. Early users concentrated on unusual carriers will get a worse product than the demo promised.
5. **Market timing:** The urgency is driven substantially by one active lawsuit. If ACE loses or quietly settles, the sharpest sales argument softens — though the 34%-of-denials statistic stands on its own regardless.

## 14. Structured verdict

```
Score:                  77/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder with MSP/channel background, or a technical
                        founder paired with a channel-native co-founder
Time to revenue:        8–12 weeks to first design-partner payment
Capital to launch:      $8–15K (₹7–13L) — founder time, API costs, legal review of waiver templates
Top 3 assumptions to validate first:
  1. Real drift exists at scale — hand-audit 15 client tenants across 5 MSPs; need >30% with
     at least one broken attestation
  2. Willingness to pay — quote $699/mo to 20 MSP owners after showing them their own gap;
     need 5+ design-partner LOIs
  3. Document access — ask those same 20 to produce one client's signed application within
     a week; need >50% to actually deliver
Kill criteria:
  - Abandon if fewer than 30% of hand-audited client tenants show a broken attestation
    (the problem is smaller than the press implies)
  - Abandon if fewer than 25% of MSPs can produce a client's signed insurance application
    within a week (no schema, no product)
  - Abandon if Cynomi, Vanta or a major RMM ships insurance-application monitoring before
    your v1 reaches 20 paying MSPs
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Collect signed cyber insurance applications. Post in r/msp and two MSP communities offering a free manual attestation-gap audit in exchange for one client's application plus read-only M365 access. Target 5 MSPs, 15 tenants. The number who actually hand over a document is itself the first result.
- **Day 3–4:** Do the audit by hand. Read each application, extract every assertion, check each one manually against the tenant. Record: how many assertions per application, how many are currently false, how long each tenant took. That last number tells you whether the product has room to exist.
- **Day 5:** Show each MSP owner their own broken attestations, then quote $699/mo and ask for a design-partner commitment with payment on delivery.

**Falsifiable outcome:** ≥30% of audited tenants show at least one broken attestation, AND ≥5 of the MSPs sign a paid design-partner LOI at $699/mo. Miss either number and the honest read is that MSPs know about this risk and have decided to live with it — which is a PASS, not a pricing problem.
