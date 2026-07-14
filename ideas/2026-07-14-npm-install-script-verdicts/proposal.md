---
title: "ScriptTribunal — postinstall verdicts for npm v12"
slug: npm-install-script-verdicts
date: 2026-07-14
category: DevTools / Global — JavaScript Engineering Teams Migrating to npm v12 (allowScripts approval and re-approval)
complexity: Low
score: 74
verdict: GO
confidence: Medium
oneLiner: "Reads what a package's install script actually does, so approving it isn't a coin flip on every Renovate PR."
tags:
  vertical: DevTools
  model: SaaS
  geography: Global
  secondary: [AI-agent, Solo-builder, Supply-chain-security, GitHub-native, Developer-tools]
axes:
  problem: 15
  demand: 13
  build: 13
  distribution: 12
  revenue: 10
  time: 8
  defensibility: 3
founderFit: [technical-heavy, content-heavy]
featured: false
---

# ScriptTribunal

## 1. One-liner

Reads what a package's install script actually does, so approving it isn't a coin flip on every Renovate PR.

## 2. Trend signal — why now?

npm v12 shipped **this month**. It is the biggest change to npm's default behaviour in its 16-year history, and it lands squarely on every JavaScript team on earth.

The change: `allowScripts` now defaults to **off**. `npm install` will no longer execute `preinstall`, `install`, or `postinstall` scripts from dependencies unless each one is explicitly allowed in your `package.json`. Same for Git dependencies (`--allow-git`) and remote tarballs (`--allow-remote`).

Why npm did it: install scripts were the delivery mechanism for essentially every major registry attack of the last 18 months. Among 6,420 analysed malicious packages, **72.21% exploit installation scripts** as their attack vector. Two confirmed North Korean state campaigns landed in 2026 alone — Axios in March, and the Mastra compromise in June, where an attacker took over a maintainer account and pushed **140+ backdoored packages** across the `@mastra` scope, each pulling in a typosquat whose postinstall hook ran an obfuscated dropper and disabled TLS verification.

So far, so good. Here's the gap.

npm shipped the **mechanism** but not the **judgment**. `npm approve-scripts --allow-scripts-pending` lists the packages that want to run scripts and shows you the *command string*. It does not tell you what the code does. Developers said so directly in npm's own migration discussion:

> "opening an IDE and tracing a call stack through unfamiliar code...approval can easily become 'node install.js — looks reasonable, approve'"

And the decision is not one-and-done. **Approvals are version-pinned by design.** `sharp@0.33.5` approved does not mean `sharp@0.33.6` approved. Every Renovate or Dependabot bump of an approved package invalidates its approval and demands a fresh human decision — forever.

A security control that degrades into reflexive rubber-stamping on every dependency PR is not a security control. It's a checkbox. That's the product.

Provenance:
  - Signal 1 (demand): npm v12 ships July 2026 with `allowScripts` off by default; native modules (sharp, bcrypt, canvas, sqlite3, esbuild, fsevents) break, and the failure is **silent** — install exits 0, the app dies at runtime with `MODULE_NOT_FOUND`. Developers in npm's own migration thread report the approval step is unreviewable in practice and that version-pinned approvals break automated dependency updates. — https://github.blog/changelog/2026-06-09-upcoming-breaking-changes-for-npm-v12/ + https://github.com/orgs/community/discussions/198547 — June–July 2026
  - Signal 2 (feasibility): The allowlist is a machine-readable artifact (`allowScripts` in `package.json`), `npm approve-scripts --allow-scripts-pending` emits the exact pending set, and package tarballs are public. Determining "what does this postinstall actually do" is now a tractable static-analysis + LLM task — multiple 2026 papers (taint-based code slicing for LLM npm malware detection; DONAPI behaviour-sequence mapping) and shipped tools (O3 Security confirming `upstart-loan-status` via YARA + LLM analysis) demonstrate the technique works. — https://arxiv.org/pdf/2512.12313 + https://o3.security/malware/npm/upstart-loan-status — 2026
  - Signal 3 (economic): Supply-chain security spend is live and priced. Socket.dev charges $25/seat/mo (Team) and $50/seat/mo (Business); Snyk Team starts at $25/dev/mo. 72.21% of 6,420 malicious packages used install scripts. Two nation-state npm campaigns in 2026 (Axios, Mastra/Sapphire Sleet) put this line item in front of every engineering leader. — https://socket.dev/pricing + https://www.microsoft.com/en-us/security/blog/2026/06/17/postinstall-payload-inside-mastra-npm-supply-chain-compromise/ — May–July 2026
  Category: Platform shift

## 3. The opportunity

A platform-mandated migration just created a recurring decision that nobody has tooling for.

The incumbents are adjacent but not on it:

- **npm's own `approve-scripts`** — free, built-in, and deliberately dumb. It surfaces the *pending list* and the *command string*. It has no opinion on whether `node install.js` is fetching a prebuilt binary from the project's own CDN or fetching a dropper from an attacker's VPS. It is a permission prompt with no information behind it. It is also **not workspace-aware** — in a monorepo you must check each workspace and the root separately.
- **Socket.dev** ($25–50/seat/mo) — behavioural supply-chain detection across the whole dependency tree. Excellent product, broader scope, and it blogs *about* npm v12 — but it isn't the system of record for your `allowScripts` artifact or the re-approval loop.
- **Snyk** ($25+/dev/mo) — CVE-first SCA with fix PRs. Known vulnerabilities, not "should this specific install script be allowed to execute on my CI runner."

The gap is narrow and sharp: **the approve/deny decision itself, and its endless repetition.**

What a focused tool does 10× better than a human squinting at a command string:

1. **Fetches and reads the actual script**, plus everything it reaches — the files it requires, the network endpoints it hits, the paths it writes, whether it shells out, whether it's obfuscated.
2. **Renders a verdict with evidence.** "sharp@0.34.0 — SAFE. Downloads prebuilt libvips binary from sharp's own GitHub release, verifies checksum, writes to node_modules only. No shell-out, no env access." vs. "easy-day-js@1.11.21 — BLOCK. Obfuscated dropper, disables TLS verification, fetches second-stage payload from an IP literal."
3. **Handles the re-approval treadmill.** On every Renovate PR that bumps an approved package, it **diffs the old install script against the new one**. Unchanged? Auto-renew the pin, comment "no change to install script, approval carried forward." Changed? Show exactly what changed and demand a human look.

That third one is the whole business. The migration is a one-week event. The re-approval loop is forever, and it's where the rubber-stamping — and therefore the next Mastra — actually happens.

## 4. Target market

- **Primary customer:** Head of Engineering / Platform Lead / Staff engineer who owns CI at a **20–300 engineer product company with a JavaScript or TypeScript monorepo**. Global — US, EU, India, anywhere with a Node build. Secondary: security engineers at the same companies who now have an audit line item they can't answer.
- **Why they buy:** Two pains, one acute and one chronic. Acute: npm v12 just broke their builds, silently, and they need the allowlist right *now*. Chronic: they've now got an `allowScripts` block in `package.json` that a bot invalidates every week, and every invalidation is a security decision their team is not equipped to make. From npm's own migration thread — approval "can easily become 'node install.js — looks reasonable, approve'." That's a Head of Eng's nightmare written by their own developers.
- **Rough TAM reasoning:** npm is the default package manager for the JavaScript ecosystem; GitHub handles ~275M commits per week. Any company with a Node service, a native dependency (sharp, bcrypt, better-sqlite3, canvas, esbuild), and an automated dependency updater is in scope. That's a very large fraction of all software companies. I don't need a precise TAM — I need 500 of them to pay $200/mo, and there are hundreds of thousands of candidates.
- **Why now for them:** Not a trend. A **dated, forced migration** that shipped this month, with a silent failure mode (`exit code 0`, then runtime death). The urgency is supplied by npm, not by my marketing.

## 5. Product sketch (MVP)

- **GitHub App.** Install it, it reads `package.json` + lockfile across all workspaces (monorepo-aware — npm's own tool is not) and produces the pending-approval set.
- **Verdict per install script.** For every package requesting `preinstall`/`install`/`postinstall`, fetch the tarball, read the script and its reachable code, and emit SAFE / REVIEW / BLOCK with **cited evidence**: network endpoints, filesystem writes, shell-outs, env-var reads, obfuscation markers.
- **Generates the `allowScripts` block.** One PR against the repo containing the migration allowlist, with a one-line justification per entry in the PR body. The afternoon of migration work becomes a PR review.
- **Re-approval bot — the durable hook.** On every Renovate/Dependabot PR touching an allowlisted package, diff the new version's install script against the approved one. No change → auto-renew the version pin, post a green check. Changed → block the merge, show the diff, explain what's new.
- **Silent-breakage detector.** Flags the packages that will fail *without* an explicit script — the implicit `node-gyp rebuild` triggered by a bare `binding.gyp`, which npm blocks too and which produces the cryptic `MODULE_NOT_FOUND` at runtime.
- **`.npmrc` conflict check.** Catches the trap where a pre-existing `ignore-scripts=true` in CI silently overrides `allowScripts` — scripts don't run, npm doesn't warn, and the team thinks they've migrated.
- **Policy mode.** Org-wide rules: auto-approve packages above N weekly downloads whose script only writes inside `node_modules`; always escalate anything that touches the network or reads env.

## 6. AI angle — what's load-bearing

Remove the AI and this product does not exist.

The entire value is answering a question that requires **reading and understanding unfamiliar code under time pressure**: *what does this install script actually do?* Static rules alone are brittle — attackers obfuscate, and a hardcoded YARA rule for the Mastra dropper won't catch the next one. A pure allowlist-of-known-good-packages is just a popularity contest and misses the exact attack that matters: a **legitimate, popular package whose maintainer account got taken over** (which is precisely what happened to `@mastra` — 140+ trusted packages, poisoned).

The load-bearing job is semantic: take an arbitrary, possibly minified, possibly obfuscated install script, follow what it reaches, and summarise its behaviour and intent in terms a reviewer can act on in ten seconds. That's an LLM reading code with static analysis as the scaffolding — the exact technique the 2026 literature (taint-based code slicing for LLM-based npm malware detection; DONAPI's behaviour-sequence mapping) and shipping tools (O3 Security's YARA + LLM confirmation of `upstart-loan-status`) validate.

The diff-on-upgrade path is where AI earns its keep commercially: deciding whether a version bump's script change is *cosmetic* (bumped a version string, reformatted) or *material* (new network call) is a judgment call, made hundreds of times a month, that no team wants to make by hand.

## 7. Localization angle (if any)

`N/A — this is a global play.` The customer is a JavaScript build pipeline. It has no language, no payment rail, and no jurisdiction. npm v12's defaults are identical in Bangalore and Berlin, and the pain arrives the same day everywhere. Forcing a localization angle here would be pure theatre. Pricing is USD, distribution is GitHub, done.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** Per-repo, not per-seat. Deliberate — per-seat is Socket and Snyk's game and I'd lose it. The unit of value here is *a repo with an allowlist to maintain*.
  - **Free:** public repos + the one-time migration scan. This is the distribution engine, not charity (see §9).
  - **Team — $199/mo:** up to 10 private repos, re-approval bot, policy rules.
  - **Business — $599/mo:** unlimited repos, monorepo workspaces, SSO, audit export for the compliance team.
- **ACV:** ~$2,400–7,200. Call it **$3,000 blended.**
- **Rough math to $1M ARR:** ~**335 customers** at $250/mo blended. For a tool that GitHub-installs in one click, resolves a build-breaking emergency on day one, and then blocks merges forever, 335 paying teams is a realistic 18-month number.
- **Rough math to $5M ARR:** ~1,400 customers at a $300/mo blend, or 800 customers with the Business tier and an enterprise plan on top. This requires expanding beyond npm — **pnpm, yarn, and bun are all tightening install-script defaults too**, and the same verdict engine serves all four. That's the credible path, and it's the same product.
- **Expansion path:** repos → workspaces → other package managers (pnpm/yarn/bun) → other ecosystems where install-time execution is the attack surface (PyPI's `setup.py` is the identical problem wearing a different hat). Audit export and policy enforcement are the natural upsell to the security org, who have a bigger budget than the platform team.

**Honest note on margins:** verdicts are cached per `package@version` and shared across all customers. The 500th customer to depend on `sharp@0.34.0` costs me nothing — I already ruled on it. The LLM spend is on the *long tail* and on *newly published versions*, and it amortises across the customer base. Gross margin improves with every customer. This is the best structural property the idea has.

## 9. Go-to-market wedge — first 100 customers

The migration is my ad budget. It is happening right now, it is loud, and everyone hits it in the same week.

1. **Free public scan as the wedge.** Ship `npx script-tribunal` — points at any repo, prints the pending-approval set with a verdict per script, free, no signup. Every JS developer hitting a broken build this month is searching for exactly this. The paid product is the *bot that keeps doing it*; the CLI is the thing they tell their coworkers about.
2. **Scan the top 5,000 public JS repos and publish the results.** Every repo with native deps that will silently break under v12 gets a page: "your build will exit 0 and die at runtime — here are your 7 packages." Open a **free, genuine PR** to the most-starred few hundred with a correct `allowScripts` block and a one-line justification per entry. This is real value, not spam — the PR fixes a break they're about to hit. Maintainers who merge it become the reference logos and the SEO surface. Every merged PR puts my product name in a `package.json` diff that thousands of forks pull down.
3. **Ride the search wave.** The exact error strings are already the highest-intent keywords in JS this quarter: `MODULE_NOT_FOUND after npm 12`, `allowScripts disabled`, `sharp not working npm v12`, `install scripts not covered`. Someone is already squatting these (`installsafe.dev/errors/` exists). One error-explainer page per breaking package (sharp, bcrypt, canvas, sqlite3, esbuild, fsevents, node-sass), each ending in "and here's how to keep it approved after every Renovate bump." Content that answers a build-breaking error converts at a rate no generic devtool content ever will.
4. **The 275 packages that break everyone.** Native-module packages are a small, enumerable set. I know every repo that depends on them (GitHub code search, npm dependents API). That's a targeted list of thousands of teams, each with a dated, known, painful problem, reachable by GitHub issue, email, and their public Slack/Discord.
5. **Renovate/Dependabot integration is the retention hook, and it sells itself.** The moment their bot opens a PR that invalidates an approval — and it will, within a week — the free CLI can't help them, and the bot can.

If nobody installs a free CLI that fixes a build they can't ship without, the idea is dead and I'll know inside a month. That's a cheap, fast, falsifiable test.

## 10. Build complexity — justification

**Low.** Everything is off-the-shelf. GitHub App (standard), read `package.json`/lockfile (standard), fetch tarballs from the public npm registry (standard), run static analysis and an LLM over the script and its reachable code (standard), open a PR (standard). No custom models — frontier models read obfuscated JS well, and the 2026 literature confirms the approach. Verdicts cache per `package@version`, so the compute is bounded and shared.

Solo builder ships the free CLI in **3–4 weeks** and the GitHub App with the re-approval bot in **8–10 weeks**. The hard parts are *judgment quality* (false-positive BLOCKs will get me uninstalled instantly — a tool that cries wolf on `sharp` is worse than no tool) and *reachability analysis* (following what the script actually requires, not just reading `install.js` in isolation). Both are engineering discipline, not research.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Reads public registry tarballs and repos the customer explicitly grants access to. Nothing exotic. |
| Ethical — no harm / dark patterns | ✅ | Straightforwardly defensive. The one ethical duty is honest verdicts: no fear-mongering to drive upgrades, and a false BLOCK is a real cost to the customer. |
| Market exists (evidence above) | ✅ | Forced platform migration shipped this month; $25–50/seat incumbents already monetise adjacent supply-chain pain. |
| 1–5 person team can build this | ✅ | Solo to pair. All off-the-shelf. |
| Launchable with <$50K / ₹40L | ✅ | Realistically <$10K. LLM inference on cached verdicts is the only real variable cost. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | **15**/20 | Acute *this quarter* — silent build breakage, exit code 0, runtime death. But honest downgrade: the migration pain is a **one-time spike**, and npm's free tool does get you through it. The chronic re-approval pain is real and recurring but lower-grade — it's a tax and a latent risk, not a fire. Teams *can* limp along rubber-stamping. Many will. |
| Demand evidence | 15 | **13**/15 | Very strong. A dated platform mandate, developers complaining in npm's own migration thread, priced incumbents in the neighbourhood ($25–50/seat), two nation-state campaigns, and 72.21% of malicious packages using this exact vector. A skeptic nods. Short of 14–15 only because nobody is yet paying for *this specific product* — the category is one month old. |
| Build feasibility | 15 | **13**/15 | Off-the-shelf everything. Solo, 3–4 weeks to CLI. Docked for the genuine difficulty of getting verdict quality high enough that false positives don't kill trust. |
| Distribution clarity | 15 | **12**/15 | Named channels, enumerable target list, an error-string SEO wave with real search intent, and a free-CLI wedge. Docked because devtool free→paid conversion is notoriously brutal, and the strongest hook (the migration) is the one that *expires*. |
| Revenue mechanics | 15 | **10**/15 | Per-repo pricing is benchmarkable against Socket/Snyk and 335 customers to $1M is achievable. Docked hard on the central risk: the acute pain is one-time, so I'm asking teams to keep paying for a *background* insurance policy after the fire is out. Retention is the whole question and it is genuinely unproven. |
| Time to first revenue | 10 | **8**/10 | Free CLI in a month, paid bot in ~10 weeks; the buying trigger already exists and is dated. Not 9–10 because the migration purchase and the *subscription* purchase are different decisions, and only the first one is urgent. |
| Defensibility | 10 | **3**/10 | Weakest axis by a mile, and I won't dress it up. Socket or Snyk can ship `allowScripts` support as a feature in a quarter — they have the customers, the scanners, and the security brand. npm itself could enrich `approve-scripts` with exactly this and end the business overnight. The only real moat is the **accumulating verdict corpus** (every `package@version` ever ruled on, with the reasoning) and being the default in enough `package.json` files that switching is annoying. That's an execution-and-speed moat, not a structural one. |
| **Total** | **100** | **74**/100 | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `content-heavy`

Technical because verdict quality *is* the product and false positives are fatal. Content-heavy because the distribution is an error-string SEO land-grab plus hundreds of hand-checked public PRs, and both need to happen in the next 90 days while the migration is live.

### Key assumptions to validate (3–5)

1. **Assumption:** Teams will pay for *ongoing* re-approval after the one-time migration is behind them. **How to test:** This is the load-bearing assumption and the one that decides the business. Ship the free CLI, then interview the first 40 teams that run it 30 days later: are they still hitting re-approval friction on Renovate PRs, and what did they do about it? If the honest answer is "we set `--no-allow-scripts-pin` and forgot about it," the recurring-revenue thesis is dead and this is a one-time-fee tool at best.
2. **Assumption:** Verdict quality can hit a bar where teams trust it — near-zero false BLOCKs on the top 200 native packages. **How to test:** Build the verdict engine, run it against the 200 most-depended-on packages with install scripts *and* against the known-malicious corpus (Mastra/`easy-day-js`, `upstart-loan-status`, the 700-repo postinstall hook). Measure both directions. If it flags `sharp` or `esbuild` as dangerous even once, nobody will ever trust it again.
3. **Assumption:** Per-repo pricing beats per-seat here. **How to test:** Offer both to the first 30 inbound teams and see which one closes without a negotiation.
4. **Assumption:** Socket/Snyk don't ship this as a feature within two quarters. **How to test:** Not testable — monitor it. This is the risk, not an assumption.

### Risk flags

1. **Platform dependency (severe).** npm owns both the problem and the fix. If GitHub decides `approve-scripts` should show behavioural analysis — a completely natural roadmap item, and arguably the *right* thing for them to do — the product is a feature and the business is over. I am, structurally, building a better UI on top of someone else's permission prompt. Everything about this idea's timing is a bet that they stay minimal for 18 months.
2. **Market timing — the pain has a half-life.** The migration is loud *right now*. In twelve months every repo has an `allowScripts` block, the acute pain is gone, and I'm selling a vitamin against a risk that hasn't bitten *them* yet. The entire business rests on the re-approval treadmill being annoying enough to keep paying for. If it isn't, this is a consultancy that got mistaken for a SaaS.
3. **Competitive — incumbents are one feature away.** Socket already does behavioural malware detection on npm packages and already blogs about npm v12. Adding "and here's your `allowScripts` block" is not a moonshot for them. My only defence is being the obvious default before they bother.
4. **False positives are existentially expensive.** A security tool that blocks a legitimate `sharp` upgrade wastes a senior engineer's afternoon and gets ripped out that same day. The tolerance for error here is far tighter than in a typical AI product.

## 14. Structured verdict

```
Score:                  74/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical solo founder or pair who lives in the JS/Node ecosystem,
                        can ship a GitHub App fast, and can write the SEO content wave
                        themselves. Security instincts required; security brand not.
Time to revenue:        Free CLI in 3–4 weeks; first paid subscription in 8–12 weeks.
Capital to launch:      <$10K (LLM inference + hosting; verdicts cache and amortise)
Top 3 assumptions to validate first:
  1. Teams pay for ONGOING re-approval, not just the one-time migration — interview 40 teams
     30 days after they run the free CLI. This single question decides the business.
  2. Verdict quality clears the trust bar — zero false BLOCKs across the top 200 native
     packages, while correctly catching easy-day-js / upstart-loan-status.
  3. Per-repo pricing closes without negotiation — offer per-repo and per-seat to the
     first 30 inbound teams.
Kill criteria:
  - Abandon if <300 teams run the free CLI in the first 60 days. The migration is the
    loudest tailwind this idea will ever have; if the free tool can't ride it, the paid
    one never will.
  - Abandon if <3% of free-CLI teams convert to paid within 90 days — that means the
    re-approval pain isn't real and this is a one-time utility, not a subscription.
  - Abandon immediately if npm or Socket ships behavioural verdicts inside the
    approve-scripts / allowlist flow before v1 is out.
```

## 15. Next step — 1-week validation sprint

The question is not "is the migration painful" — it demonstrably is, npm forced it. The question is **"does anyone pay after the fire is out."** Design the week to attack that, not to confirm what I already know.

- **Day 1–2: Build the verdict engine on a fixed corpus, nothing else.** No app, no bot, no landing page. Take the top 200 npm packages with install scripts, plus the known-malicious set (`easy-day-js` from the Mastra compromise, `upstart-loan-status`, the 700-repo postinstall hook). Run the analysis. Measure false-BLOCK rate on the legit 200 and catch rate on the malicious set. **If I can't hit zero false BLOCKs on the top 200, I stop here** — assumption #2 fails and nothing downstream matters.
- **Day 3–4: Ship `npx script-tribunal` and put it where the pain is.** Post it in the npm v12 migration discussion, the relevant subreddits, and Hacker News — where people are *actively* posting broken builds this week. Measure installs and, more importantly, watch what people say they'd use it for.
- **Day 5: Interview, and ask the only question that counts.** Get 15 teams who ran it on the phone. Not "was this useful" — everyone says yes to that. Ask: **"Renovate is going to invalidate these approvals next week. What's your plan?"** Then: "would you pay $199/mo for a bot that auto-renews the unchanged ones and blocks the changed ones?"

**Falsifiable go/no-go:** ≥300 CLI runs in 5 days, zero false BLOCKs on the top-200 corpus, and **≥5 of 15 interviewed teams saying yes to $199/mo unprompted**. Miss the third and the score drops to VALIDATE regardless of how many people ran the free tool — free CLI installs are a vanity metric, and I refuse to let them talk me into a business that isn't there.
