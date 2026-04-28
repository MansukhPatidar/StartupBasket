#!/usr/bin/env node
/**
 * Post a tweet for a new startup idea.
 * Usage: node scripts/tweet-idea.mjs <idea-folder-path>
 *
 * Requires env vars: TWITTER_API_KEY, TWITTER_API_SECRET,
 *                    TWITTER_ACCESS_TOKEN, TWITTER_ACCESS_TOKEN_SECRET
 *
 * Uses OAuth 1.0a HMAC-SHA1 signing with Node built-ins (no npm deps).
 */
import { readFileSync } from "fs";
import { join } from "path";
import crypto from "crypto";

// ── Parse frontmatter ────────────────────────────────────────────────
const folder = process.argv[2];
if (!folder) {
  console.error("Usage: node tweet-idea.mjs <idea-folder-path>");
  process.exit(0); // soft exit — don't break CI
}

const mdPath = join(folder, "proposal.md");
let md;
try {
  md = readFileSync(mdPath, "utf-8");
} catch {
  console.error(`Cannot read ${mdPath}`);
  process.exit(0);
}

function field(name) {
  const re = new RegExp(`^${name}:\\s*"?(.+?)"?\\s*$`, "m");
  const m = md.match(re);
  return m ? m[1].trim() : "";
}

function tagField(name) {
  const re = new RegExp(`^\\s+${name}:\\s*(.+)$`, "m");
  const m = md.match(re);
  return m ? m[1].trim() : "";
}

const title = field("title");
const oneLiner = field("oneLiner");
const score = field("score");
const verdict = field("verdict");
const slug = field("slug");
const vertical = tagField("vertical");
const geography = tagField("geography");

if (!title || !slug) {
  console.error("Could not parse title/slug from frontmatter");
  process.exit(0);
}

// ── Build hashtags ───────────────────────────────────────────────────
function toHashtag(s) {
  return "#" + s.replace(/[^a-zA-Z0-9]/g, "");
}

const tags = ["#StartupIdeas"];
if (vertical) tags.push(toHashtag(vertical));
if (geography) tags.push(toHashtag(geography));
tags.push("#StartupBasket");

const url = `https://startupbasket.ai/ideas/${slug}/`;

// ── Build tweet (max 280 chars) ──────────────────────────────────────
let tweet = `🚀 ${title}\n\n${oneLiner}\n\nScore: ${score}/100 — ${verdict}\n\n${tags.join(" ")}\n\n👉 ${url}`;

// Trim if over 280 chars — drop oneLiner first, then tags
if (tweet.length > 280) {
  tweet = `🚀 ${title}\n\nScore: ${score}/100 — ${verdict}\n\n${tags.join(" ")}\n\n👉 ${url}`;
}
if (tweet.length > 280) {
  tweet = `🚀 ${title}\n\nScore: ${score}/100 — ${verdict}\n\n👉 ${url}`;
}

console.log("Tweet text (%d chars):\n%s\n", tweet.length, tweet);

// ── OAuth 1.0a signing ───────────────────────────────────────────────
const API_KEY = process.env.TWITTER_API_KEY;
const API_SECRET = process.env.TWITTER_API_SECRET;
const ACCESS_TOKEN = process.env.TWITTER_ACCESS_TOKEN;
const ACCESS_SECRET = process.env.TWITTER_ACCESS_TOKEN_SECRET;

if (!API_KEY || !API_SECRET || !ACCESS_TOKEN || !ACCESS_SECRET) {
  console.error("Missing Twitter API credentials in env vars");
  process.exit(0);
}

function percentEncode(s) {
  return encodeURIComponent(s).replace(/[!'()*]/g, (c) => "%" + c.charCodeAt(0).toString(16).toUpperCase());
}

function oauthSign(method, url, params) {
  const sigBase =
    method.toUpperCase() +
    "&" +
    percentEncode(url) +
    "&" +
    percentEncode(
      Object.keys(params)
        .sort()
        .map((k) => `${percentEncode(k)}=${percentEncode(params[k])}`)
        .join("&")
    );
  const sigKey = percentEncode(API_SECRET) + "&" + percentEncode(ACCESS_SECRET);
  return crypto.createHmac("sha1", sigKey).update(sigBase).digest("base64");
}

const tweetUrl = "https://api.twitter.com/2/tweets";
const oauthParams = {
  oauth_consumer_key: API_KEY,
  oauth_nonce: crypto.randomBytes(16).toString("hex"),
  oauth_signature_method: "HMAC-SHA1",
  oauth_timestamp: Math.floor(Date.now() / 1000).toString(),
  oauth_token: ACCESS_TOKEN,
  oauth_version: "1.0",
};

const sig = oauthSign("POST", tweetUrl, oauthParams);
oauthParams.oauth_signature = sig;

const authHeader =
  "OAuth " +
  Object.keys(oauthParams)
    .sort()
    .map((k) => `${percentEncode(k)}="${percentEncode(oauthParams[k])}"`)
    .join(", ");

// ── Post tweet ───────────────────────────────────────────────────────
try {
  const res = await fetch(tweetUrl, {
    method: "POST",
    headers: {
      Authorization: authHeader,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text: tweet }),
  });

  const body = await res.json();

  if (res.ok) {
    console.log("Tweet posted:", body.data?.id ?? JSON.stringify(body));
  } else {
    console.error("Tweet failed (%d): %s", res.status, JSON.stringify(body));
  }
} catch (err) {
  console.error("Tweet request error:", err.message);
}
// Always exit 0 so CI doesn't fail
process.exit(0);
