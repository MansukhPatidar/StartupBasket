import { useEffect, useRef, useState } from "react";
import { getSupabase, getAnonId, getLikedSet, setLiked } from "../lib/supabase";

interface Props {
  slug: string;
  variant?: "card" | "detail";
  /** If true, increment the view counter on mount (detail pages only). */
  countView?: boolean;
}

const VIEWED_SESSION_KEY = "if_viewed_session";

function viewedThisSession(slug: string): boolean {
  try {
    const raw = sessionStorage.getItem(VIEWED_SESSION_KEY);
    const set = new Set<string>(raw ? JSON.parse(raw) : []);
    if (set.has(slug)) return true;
    set.add(slug);
    sessionStorage.setItem(VIEWED_SESSION_KEY, JSON.stringify([...set]));
    return false;
  } catch {
    return false;
  }
}

export default function Engagement({ slug, variant = "card", countView = false }: Props) {
  const [views, setViews] = useState<number | null>(null);
  const [likes, setLikes] = useState<number | null>(null);
  const [liked, setLikedState] = useState(false);
  const [busy, setBusy] = useState(false);
  const mounted = useRef(false);

  useEffect(() => {
    if (mounted.current) return;
    mounted.current = true;

    const sb = getSupabase();
    if (!sb) return;

    setLikedState(getLikedSet().has(slug));

    (async () => {
      if (countView && !viewedThisSession(slug)) {
        try { await sb.incrementView(slug); } catch {}
      }
      const data = await sb.selectEngagement(slug);
      setViews(data?.views ?? 0);
      setLikes(data?.likes ?? 0);
    })();
  }, [slug, countView]);

  async function toggleLike(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    const sb = getSupabase();
    if (!sb || busy) return;
    setBusy(true);
    const anonId = getAnonId();
    const wasLiked = liked;
    // Optimistic update.
    setLikedState(!wasLiked);
    setLikes((n) => (n ?? 0) + (wasLiked ? -1 : 1));
    setLiked(slug, !wasLiked);
    try {
      if (wasLiked) {
        await sb.deleteLike(slug, anonId);
      } else {
        await sb.insertLike(slug, anonId);
      }
    } catch {
      // Roll back on failure.
      setLikedState(wasLiked);
      setLikes((n) => (n ?? 0) + (wasLiked ? 1 : -1));
      setLiked(slug, wasLiked);
    } finally {
      setBusy(false);
    }
  }

  const fmt = (n: number | null) => (n === null ? "—" : n.toLocaleString());

  if (variant === "detail") {
    return (
      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={toggleLike}
          disabled={busy}
          aria-pressed={liked}
          aria-label={liked ? "Unlike this idea" : "Like this idea"}
          className={`inline-flex items-center gap-2 px-3.5 h-9 rounded-lg border text-sm font-medium transition ${
            liked
              ? "bg-accent/10 border-accent/40 text-accent-700 dark:text-accent-300"
              : "border-surface-border text-surface-fg/70 hover:text-surface-fg hover:bg-surface-subtle"
          }`}
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill={liked ? "currentColor" : "none"}
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
          </svg>
          <span className="tabular-nums">{fmt(likes)}</span>
        </button>
        <span className="inline-flex items-center gap-1.5 text-sm text-muted">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
          <span className="tabular-nums">{fmt(views)}</span> views
        </span>
      </div>
    );
  }

  // Card variant: compact stats row, no clickable like (card itself is the anchor).
  return (
    <div className="flex items-center gap-4 text-[11px] text-muted">
      <span className="inline-flex items-center gap-1">
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
        <span className="tabular-nums">{fmt(views)}</span> views
      </span>
      <span className="inline-flex items-center gap-1">
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill={liked ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
        </svg>
        <span className="tabular-nums">{fmt(likes)}</span> likes
      </span>
      <span
        className="ml-auto text-surface-fg/30 group-hover:text-accent group-hover:translate-x-0.5 transition-all"
        aria-hidden="true"
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </span>
    </div>
  );
}
