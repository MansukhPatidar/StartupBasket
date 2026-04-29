import { useEffect, useState } from "react";
import { getSupabase } from "../lib/supabase";

interface IdeaData {
  slug: string;
  title: string;
  oneLiner: string;
  score: number;
  verdict: string;
  vertical: string;
  model: string;
  geography: string;
}

interface Props {
  ideas: IdeaData[];
}

interface TrendingIdea extends IdeaData {
  views: number;
  likes: number;
  trending: number;
}

export default function TrendingGrid({ ideas }: Props) {
  const [items, setItems] = useState<TrendingIdea[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const sb = getSupabase();
      if (!sb) {
        // No Supabase — fall back to static order
        setItems(
          ideas
            .map((i) => ({ ...i, views: 0, likes: 0, trending: 0 }))
            .slice(0, 9),
        );
        setLoading(false);
        return;
      }

      const { data } = await sb
        .from("idea_engagement")
        .select("slug,views,likes");

      const engMap = new Map<string, { views: number; likes: number }>();
      for (const row of data ?? []) {
        engMap.set(row.slug, { views: row.views ?? 0, likes: row.likes ?? 0 });
      }

      const scored = ideas.map((idea) => {
        const eng = engMap.get(idea.slug) ?? { views: 0, likes: 0 };
        return {
          ...idea,
          views: eng.views,
          likes: eng.likes,
          trending: eng.views + 10 * eng.likes,
        };
      });

      scored.sort((a, b) => b.trending - a.trending);
      setItems(scored.slice(0, 9));
      setLoading(false);
    })();
  }, [ideas]);

  if (loading) {
    return (
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
        {[...Array(9)].map((_, i) => (
          <div key={i} className="card p-5 h-48 animate-pulse" />
        ))}
      </div>
    );
  }

  if (items.length === 0) {
    return <p className="text-muted">No engagement data yet.</p>;
  }

  function verdictCls(v: string) {
    if (v === "STRONG GO") return "bg-emerald-100 text-emerald-800 ring-emerald-300 dark:bg-emerald-400/20 dark:text-emerald-100 dark:ring-emerald-400/50";
    if (v === "GO") return "bg-emerald-50 text-emerald-700 ring-emerald-200 dark:bg-emerald-400/15 dark:text-emerald-200 dark:ring-emerald-400/40";
    if (v === "VALIDATE") return "bg-amber-50 text-amber-700 ring-amber-200 dark:bg-amber-400/15 dark:text-amber-200 dark:ring-amber-400/40";
    return "bg-rose-50 text-rose-700 ring-rose-200 dark:bg-rose-400/15 dark:text-rose-200 dark:ring-rose-400/40";
  }

  function scoreCls(s: number) {
    if (s >= 80) return "bg-emerald-100 text-emerald-800 ring-emerald-300 dark:bg-emerald-400/20 dark:text-emerald-100 dark:ring-emerald-400/50";
    if (s >= 70) return "bg-emerald-50 text-emerald-700 ring-emerald-200 dark:bg-emerald-400/15 dark:text-emerald-200 dark:ring-emerald-400/40";
    if (s >= 55) return "bg-amber-50 text-amber-700 ring-amber-200 dark:bg-amber-400/15 dark:text-amber-200 dark:ring-amber-400/40";
    return "bg-rose-50 text-rose-700 ring-rose-200 dark:bg-rose-400/15 dark:text-rose-200 dark:ring-rose-400/40";
  }

  return (
    <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
      {items.map((idea, idx) => (
        <a
          key={idea.slug}
          href={`/ideas/${idea.slug}`}
          className="card card-hover group p-5 relative overflow-hidden flex flex-col h-full"
        >
          <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

          <div className="flex items-center gap-2 mb-3">
            <span className={`pill ${scoreCls(idea.score)} text-[11px] font-bold tabular-nums`}>
              {idea.score}
            </span>
            <span className={`pill ${verdictCls(idea.verdict)} text-[11px] font-bold`}>
              {idea.verdict}
            </span>
            {idx < 3 && (
              <span className="pill bg-amber-100 text-amber-800 ring-amber-300 dark:bg-amber-400/20 dark:text-amber-100 dark:ring-amber-400/50 text-[10px] font-bold">
                #{idx + 1}
              </span>
            )}
          </div>

          <h3 className="display text-[17px] font-semibold leading-snug group-hover:text-accent-600 dark:group-hover:text-accent-400 transition">
            {idea.title}
          </h3>

          <p className="mt-2 text-[13.5px] text-surface-fg/70 leading-relaxed line-clamp-3">
            {idea.oneLiner}
          </p>

          <div className="flex-1" />

          <div className="mt-4 pt-3 border-t border-surface-border/60 flex items-center gap-4 text-[11px] text-muted">
            <span className="inline-flex items-center gap-1">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
              <span className="tabular-nums">{idea.views.toLocaleString()}</span>
            </span>
            <span className="inline-flex items-center gap-1">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
              </svg>
              <span className="tabular-nums">{idea.likes.toLocaleString()}</span>
            </span>
            <span className="ml-auto inline-flex items-center gap-1 text-accent-600 dark:text-accent-400 font-medium">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                <polyline points="17 6 23 6 23 12" />
              </svg>
              <span className="tabular-nums">{idea.trending.toLocaleString()}</span>
            </span>
            <span className="text-surface-fg/30 group-hover:text-accent group-hover:translate-x-0.5 transition-all" aria-hidden="true">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </span>
          </div>
        </a>
      ))}
    </div>
  );
}
