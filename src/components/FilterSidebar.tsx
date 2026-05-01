import { useEffect, useMemo, useState } from "react";

type TagItem = { value: string; kind: "vertical" | "model" | "geography" | "secondary"; count: number };

interface Props {
  tags: TagItem[];
  total: number;
}

type Kind = TagItem["kind"];

const KIND_LABEL: Record<Kind | "verdict", string> = {
  vertical: "Vertical",
  model: "Model",
  geography: "Geography",
  secondary: "Theme",
  verdict: "Verdict",
};

// FilterSidebar dispatches events the inline filter script on /ideas/ listens
// for. No direct DOM mutation, no shared state — decoupled.
//
// Events emitted:
//   ideas:set-search { value: string }
//   ideas:set-verdict { value: "ALL" | "STRONG GO" | "GO" | "VALIDATE" | "PASS" }
//   ideas:set-tag    { value: string | null }
//   ideas:reset
//
// Events listened for:
//   ideas:filter-applied { total, matched, page, lastPage } — updates count
//   ideas:state-restored { search, verdict, tag, page }    — syncs UI on load /
//                                                            popstate
export default function FilterSidebar({ tags, total }: Props) {
  const [search, setSearch] = useState("");
  const [activeVerdict, setActiveVerdict] = useState<"ALL" | "STRONG GO" | "GO" | "VALIDATE" | "PASS">("ALL");
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [matched, setMatched] = useState<number>(total);
  const [mobileOpen, setMobileOpen] = useState(false);

  const grouped = useMemo(() => {
    const g: Record<Kind, TagItem[]> = {
      vertical: [],
      model: [],
      geography: [],
      secondary: [],
    };
    for (const t of tags) g[t.kind].push(t);
    (Object.keys(g) as Kind[]).forEach((k) =>
      g[k].sort((a, b) => b.count - a.count),
    );
    return g;
  }, [tags]);

  // Listen for state restore (inline script reads URL on boot + on popstate)
  // and for filter-applied count updates.
  useEffect(() => {
    function onRestored(e: Event) {
      const d = (e as CustomEvent).detail || {};
      setSearch(d.search ?? "");
      setActiveVerdict(d.verdict ?? "ALL");
      setActiveTag(d.tag ?? null);
    }
    function onApplied(e: Event) {
      const d = (e as CustomEvent).detail || {};
      if (typeof d.matched === "number") setMatched(d.matched);
    }
    window.addEventListener("ideas:state-restored", onRestored);
    window.addEventListener("ideas:filter-applied", onApplied);
    return () => {
      window.removeEventListener("ideas:state-restored", onRestored);
      window.removeEventListener("ideas:filter-applied", onApplied);
    };
  }, []);

  // Search input is debounced with the inline-script side via a small effect.
  // Each user keystroke updates local state + dispatches event; the script
  // re-applies filters synchronously (cheap — display toggle on ~120 cards).
  // On paginated pages where the filter script is absent, dispatch is no-op;
  // the user can press Enter to navigate to /ideas/?q=... (handled below).
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (
      window.location.pathname === "/ideas/" ||
      window.location.pathname === "/ideas"
    ) {
      window.dispatchEvent(
        new CustomEvent("ideas:set-search", { detail: { value: search } }),
      );
    }
  }, [search]);

  // FilterSidebar lives on /ideas/ AND /ideas/page/N/. The inline filter script
  // only ships on /ideas/. On paginated pages, the script is absent — so a tag
  // or verdict click here would be silently no-op. Detect that, and navigate
  // back to /ideas/ with the filter applied via query string instead.
  function isFilterableHere(): boolean {
    if (typeof window === "undefined") return false;
    return window.location.pathname === "/ideas/" || window.location.pathname === "/ideas";
  }

  function navigateWithFilter(params: Record<string, string | null>) {
    const u = new URL("/ideas/", window.location.origin);
    for (const [k, v] of Object.entries(params)) {
      if (v && v !== "ALL") u.searchParams.set(k, v);
    }
    window.location.href = u.pathname + (u.search ? u.search : "");
  }

  function setVerdict(v: typeof activeVerdict) {
    setActiveVerdict(v);
    if (isFilterableHere()) {
      window.dispatchEvent(
        new CustomEvent("ideas:set-verdict", { detail: { value: v } }),
      );
    } else {
      navigateWithFilter({ verdict: v, tag: activeTag, q: search });
    }
  }

  function toggleTag(value: string) {
    const next = activeTag === value ? null : value;
    setActiveTag(next);
    if (isFilterableHere()) {
      window.dispatchEvent(
        new CustomEvent("ideas:set-tag", { detail: { value: next } }),
      );
    } else {
      navigateWithFilter({ tag: next, verdict: activeVerdict, q: search });
    }
  }

  function clearAll() {
    setSearch("");
    setActiveVerdict("ALL");
    setActiveTag(null);
    if (isFilterableHere()) {
      window.dispatchEvent(new CustomEvent("ideas:reset"));
    } else {
      window.location.href = "/ideas/";
    }
  }

  const hasFilters =
    activeTag !== null || activeVerdict !== "ALL" || search !== "";
  const filterCount =
    (activeTag ? 1 : 0) + (activeVerdict !== "ALL" ? 1 : 0);

  return (
    <aside className="lg:sticky lg:top-20 lg:self-start space-y-4 lg:space-y-6">
      {/* Search — searches across the full catalog, not just the visible page. */}
      <div className="flex gap-2 lg:block">
        <div className="relative flex-1">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-surface-fg/40">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-3-3" />
            </svg>
          </span>
          <input
            type="search"
            autoComplete="off"
            placeholder="Search ideas…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !isFilterableHere() && search.trim()) {
                navigateWithFilter({ q: search.trim(), tag: activeTag, verdict: activeVerdict });
              }
            }}
            className="w-full pl-8 pr-3 h-9 text-sm rounded-lg border border-surface-border bg-surface-card placeholder:text-surface-fg/40 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent/60 transition"
          />
        </div>

        {/* Mobile filter toggle */}
        <button
          type="button"
          onClick={() => setMobileOpen((o) => !o)}
          className="lg:hidden flex items-center gap-1.5 px-3 h-9 text-sm rounded-lg border border-surface-border bg-surface-card hover:bg-surface-subtle transition whitespace-nowrap"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="4" y1="6" x2="20" y2="6" />
            <line x1="8" y1="12" x2="20" y2="12" />
            <line x1="12" y1="18" x2="20" y2="18" />
          </svg>
          <span>Filters</span>
          {filterCount > 0 && (
            <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-accent text-[10px] font-bold text-white leading-none">
              {filterCount}
            </span>
          )}
        </button>
      </div>

      {/* Filter groups */}
      <div className={`space-y-4 lg:space-y-6 ${mobileOpen ? "" : "hidden lg:block"}`}>
        {/* Verdict segment */}
        <div>
          <label className="text-[10px] uppercase tracking-widest text-muted font-semibold block mb-2">
            Verdict
          </label>
          <div className="flex gap-0.5 p-0.5 rounded-lg border border-surface-border bg-surface-card">
            {(["ALL", "STRONG GO", "GO", "VALIDATE", "PASS"] as const).map((v) => (
              <button
                key={v}
                type="button"
                onClick={() => setVerdict(v)}
                className={`h-6 px-1.5 text-[10px] font-semibold rounded-md whitespace-nowrap transition ${
                  activeVerdict === v
                    ? "bg-surface-fg text-surface shadow-soft"
                    : "text-surface-fg/60 hover:text-surface-fg hover:bg-surface-subtle"
                }`}
              >
                {v}
              </button>
            ))}
          </div>
        </div>

        {/* Tag groups — single-tag select. Click again to clear. */}
        {(["vertical", "model", "geography", "secondary"] as const).map((kind) => {
          const items = grouped[kind];
          if (items.length === 0) return null;
          return (
            <FilterGroup
              key={kind}
              label={KIND_LABEL[kind]}
              items={items}
              activeTag={activeTag}
              onToggle={toggleTag}
            />
          );
        })}
      </div>

      {/* Active state bar */}
      <div className={`pt-4 border-t border-surface-border flex items-center justify-between text-xs ${mobileOpen || hasFilters ? "" : "hidden lg:flex"}`}>
        <span className="text-muted">
          <span className="font-mono tabular-nums text-surface-fg">{matched}</span>{" "}
          of {total}
        </span>
        {hasFilters && (
          <button
            type="button"
            onClick={clearAll}
            className="text-accent-600 dark:text-accent-400 hover:underline"
          >
            Clear filters
          </button>
        )}
      </div>
    </aside>
  );
}

function FilterGroup({
  label,
  items,
  activeTag,
  onToggle,
}: {
  label: string;
  items: TagItem[];
  activeTag: string | null;
  onToggle: (v: string) => void;
}) {
  const [open, setOpen] = useState(true);
  const [showAll, setShowAll] = useState(false);
  const LIMIT = 6;
  const visible = showAll ? items : items.slice(0, LIMIT);
  const hidden = items.length - visible.length;

  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between text-[10px] uppercase tracking-widest text-muted font-semibold mb-2 hover:text-surface-fg transition"
      >
        <span>{label}</span>
        <svg
          width="10"
          height="10"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`transition-transform ${open ? "" : "-rotate-90"}`}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      {open && (
        <ul className="space-y-0.5">
          {visible.map((t) => {
            const on = activeTag === t.value;
            return (
              <li key={t.value}>
                <button
                  type="button"
                  onClick={() => onToggle(t.value)}
                  className={`w-full flex items-center justify-between gap-2 px-2 h-7 rounded-md text-[13px] transition ${
                    on
                      ? "bg-accent/10 text-accent-700 dark:text-accent-300 font-medium"
                      : "text-surface-fg/80 hover:bg-surface-subtle"
                  }`}
                >
                  <span className="flex items-center gap-2 truncate">
                    <span
                      className={`inline-block w-3 h-3 rounded-full border transition ${
                        on
                          ? "bg-accent border-accent"
                          : "border-surface-border"
                      }`}
                      aria-hidden="true"
                    />
                    <span className="truncate">{t.value}</span>
                  </span>
                  <span className="text-[11px] font-mono tabular-nums text-muted">
                    {t.count}
                  </span>
                </button>
              </li>
            );
          })}
          {hidden > 0 && (
            <li>
              <button
                type="button"
                onClick={() => setShowAll(true)}
                className="w-full text-left px-2 h-7 text-xs text-accent-600 dark:text-accent-400 hover:underline"
              >
                Show {hidden} more
              </button>
            </li>
          )}
        </ul>
      )}
    </div>
  );
}
