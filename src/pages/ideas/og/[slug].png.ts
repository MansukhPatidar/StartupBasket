import type { APIRoute } from "astro";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import satori from "satori";
import { Resvg } from "@resvg/resvg-js";
import { getAllIdeas, type Idea } from "../../../lib/ideas";

const fontDir = resolve(process.cwd(), "src/assets/fonts");
const interRegular = readFileSync(`${fontDir}/Inter-Regular.ttf`);
const interSemiBold = readFileSync(`${fontDir}/Inter-SemiBold.ttf`);
const interBold = readFileSync(`${fontDir}/Inter-Bold.ttf`);

const W = 1200;
const H = 630;

const COLOR_BG = "#0f1115";
const COLOR_CARD = "#15181f";
const COLOR_BORDER = "#2a2f3a";
const COLOR_FG = "#f5f5f4";
const COLOR_MUTED = "#9ca3af";
const COLOR_ACCENT = "#f59e0b";
const COLOR_RING_TRACK = "rgba(120,127,140,0.25)";

function ringColor(ratio: number): string {
  if (ratio >= 0.8) return "#10b981";
  if (ratio >= 0.6) return "#f59e0b";
  return "#f43f5e";
}

function verdictColor(v: string): string {
  if (v === "STRONG GO" || v === "GO") return "#10b981";
  if (v === "VALIDATE") return "#f59e0b";
  return "#f43f5e";
}

interface RingArgs {
  size: number;
  stroke: number;
  ratio: number;
  color: string;
  track: string;
  centerNode: any;
}

function ring({ size, stroke, ratio, color, track, centerNode }: RingArgs) {
  const r = (size - stroke) / 2;
  const cx = size / 2;
  const cy = size / 2;
  const circ = 2 * Math.PI * r;
  const dash = ratio * circ;
  const svg = `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg"><g transform="rotate(-90 ${cx} ${cy})"><circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${track}" stroke-width="${stroke}"/><circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${color}" stroke-width="${stroke}" stroke-linecap="round" stroke-dasharray="${dash} ${circ}"/></g></svg>`;
  const dataUri = `data:image/svg+xml;base64,${Buffer.from(svg).toString("base64")}`;
  return {
    type: "div",
    props: {
      style: {
        position: "relative",
        display: "flex",
        width: `${size}px`,
        height: `${size}px`,
      },
      children: [
        {
          type: "img",
          props: {
            src: dataUri,
            width: size,
            height: size,
            style: { width: `${size}px`, height: `${size}px` },
          },
        },
        {
          type: "div",
          props: {
            style: {
              position: "absolute",
              top: 0,
              left: 0,
              width: `${size}px`,
              height: `${size}px`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            },
            children: centerNode,
          },
        },
      ],
    },
  };
}

function buildTree(idea: Idea) {
  const d = idea.data;
  const axes = [
    { label: "Problem", score: d.axes.problem, max: 20 },
    { label: "Demand", score: d.axes.demand, max: 15 },
    { label: "Build", score: d.axes.build, max: 15 },
    { label: "Distrib.", score: d.axes.distribution, max: 15 },
    { label: "Revenue", score: d.axes.revenue, max: 15 },
    { label: "Time", score: d.axes.time, max: 10 },
    { label: "Defense", score: d.axes.defensibility, max: 10 },
  ];

  const mainRing = ring({
    size: 180,
    stroke: 14,
    ratio: d.score / 100,
    color: ringColor(d.score / 100),
    track: COLOR_RING_TRACK,
    centerNode: {
      type: "div",
      props: {
        style: { display: "flex", flexDirection: "column", alignItems: "center" },
        children: [
          {
            type: "div",
            props: {
              style: { fontSize: 56, fontWeight: 700, color: COLOR_FG, lineHeight: 1, fontFamily: "Inter" },
              children: String(d.score),
            },
          },
          {
            type: "div",
            props: {
              style: { fontSize: 14, color: COLOR_MUTED, marginTop: 4, fontFamily: "Inter" },
              children: "/100",
            },
          },
        ],
      },
    },
  });

  const axisRings = axes.map((a) =>
    ({
      type: "div",
      props: {
        style: { display: "flex", flexDirection: "column", alignItems: "center", gap: 8 },
        children: [
          ring({
            size: 72,
            stroke: 7,
            ratio: a.score / a.max,
            color: ringColor(a.score / a.max),
            track: COLOR_RING_TRACK,
            centerNode: {
              type: "div",
              props: {
                style: { fontSize: 22, fontWeight: 700, color: COLOR_FG, fontFamily: "Inter" },
                children: String(a.score),
              },
            },
          }),
          {
            type: "div",
            props: {
              style: { fontSize: 14, color: COLOR_MUTED, fontFamily: "Inter" },
              children: a.label,
            },
          },
        ],
      },
    }),
  );

  return {
    type: "div",
    props: {
      style: {
        width: `${W}px`,
        height: `${H}px`,
        display: "flex",
        flexDirection: "column",
        backgroundColor: COLOR_BG,
        padding: "56px 64px",
        fontFamily: "Inter",
        color: COLOR_FG,
      },
      children: [
        // Header: brand
        {
          type: "div",
          props: {
            style: { display: "flex", alignItems: "center", gap: 14, marginBottom: 28 },
            children: [
              {
                type: "div",
                props: {
                  style: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 44,
                    height: 44,
                    backgroundColor: COLOR_ACCENT,
                    color: "#0f1115",
                    fontSize: 20,
                    fontWeight: 700,
                    borderRadius: 10,
                  },
                  children: "SB",
                },
              },
              {
                type: "div",
                props: {
                  style: { fontSize: 22, fontWeight: 600, color: COLOR_FG },
                  children: "StartupBasket",
                },
              },
              {
                type: "div",
                props: {
                  style: { fontSize: 18, color: COLOR_MUTED, marginLeft: "auto" },
                  children: `startupbasket.ai/ideas/${d.slug}/`,
                },
              },
            ],
          },
        },
        // Title
        {
          type: "div",
          props: {
            style: {
              fontSize: 38,
              fontWeight: 700,
              lineHeight: 1.2,
              color: COLOR_FG,
              marginBottom: 32,
              display: "flex",
            },
            children: d.title,
          },
        },
        // Card
        {
          type: "div",
          props: {
            style: {
              display: "flex",
              flexDirection: "column",
              backgroundColor: COLOR_CARD,
              border: `1px solid ${COLOR_BORDER}`,
              borderRadius: 18,
              padding: "28px 32px",
              flex: 1,
            },
            children: [
              {
                type: "div",
                props: {
                  style: { display: "flex", alignItems: "center", gap: 10, marginBottom: 24 },
                  children: [
                    {
                      type: "div",
                      props: {
                        style: { fontSize: 16, fontWeight: 600, color: COLOR_ACCENT },
                        children: "▮▮▮ Evaluation Scores",
                      },
                    },
                  ],
                },
              },
              {
                type: "div",
                props: {
                  style: { display: "flex", alignItems: "center", gap: 32 },
                  children: [
                    // Main ring + verdict
                    {
                      type: "div",
                      props: {
                        style: { display: "flex", alignItems: "center", gap: 18 },
                        children: [
                          mainRing,
                          {
                            type: "div",
                            props: {
                              style: { display: "flex", flexDirection: "column" },
                              children: [
                                {
                                  type: "div",
                                  props: {
                                    style: { fontSize: 26, fontWeight: 700, color: verdictColor(d.verdict) },
                                    children: d.verdict,
                                  },
                                },
                                {
                                  type: "div",
                                  props: {
                                    style: { fontSize: 16, color: COLOR_MUTED, marginTop: 4 },
                                    children: "Overall Score",
                                  },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                    // Divider
                    {
                      type: "div",
                      props: {
                        style: { width: 1, height: 130, backgroundColor: COLOR_BORDER },
                      },
                    },
                    // Axis rings row
                    {
                      type: "div",
                      props: {
                        style: { display: "flex", gap: 22, flex: 1 },
                        children: axisRings,
                      },
                    },
                  ],
                },
              },
            ],
          },
        },
      ],
    },
  };
}

export async function getStaticPaths() {
  const ideas = await getAllIdeas();
  return ideas.map((idea) => ({
    params: { slug: idea.data.slug },
    props: { idea },
  }));
}

export const GET: APIRoute = async ({ props }) => {
  const idea = props.idea as Idea;
  const tree = buildTree(idea);

  const svg = await satori(tree as any, {
    width: W,
    height: H,
    fonts: [
      { name: "Inter", data: interRegular, weight: 400, style: "normal" },
      { name: "Inter", data: interSemiBold, weight: 600, style: "normal" },
      { name: "Inter", data: interBold, weight: 700, style: "normal" },
    ],
  });

  const png = new Resvg(svg, { fitTo: { mode: "width", value: W } }).render().asPng();

  return new Response(png, {
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
};
