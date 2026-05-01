import { useEffect, useMemo, useState } from "react";
import { tagSlug } from "../lib/tags";

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

// Tag clicks navigate to /tags/<slug>/ — full-catalog view of that tag.
// Search + verdict stay client-side and filter the cards on the current
// page only. The empty-state hint nudges users to a tag page when their
// query has no hits in the visible window.
export default function FilterSidebar({ tags, total }: Props) {
  const [search, setSearch] = useState("");
  const [activeVerdict, setActiveVerdict] = useState<"ALL" | "STRONG GO" | "GO" | "VALIDATE" | "PASS">("ALL");
  const [visibleCount, setVisibleCount] = useState<number>(total);
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

  // Apply search + verdict to the card grid (cards live in a sibling <section>).
  // Tag filtering happens via navigation to /tags/<slug>/ instead of DOM hide.
  useEffect(() => {
    const cards = document.querySelectorAll<HTMLElement>("[data-search]");
    const q = search.trim().toLowerCase();
    let visible = 0;
    cards.forEach((card) => {
      const haystack = (card.dataset.search || "").toLowerCase();
      const verdictMatch =
        activeVerdict === "ALL" || card.dataset.verdict === activeVerdict;
      const queryMatch = q === "" || haystack.includes(q);
      const show = verdictMatch && queryMatch;
      card.style.display = show ? "" : "none";
      if (show) visible += 1;
    });
    setVisibleCount(visible);
  }, [search, activeVerdict]);

  function clearAll() {
    setActiveVerdict("ALL");
    setSearch("");
  }

  const hasFilters = activeVerdict !== "ALL" || search !== "";
  const filterCount = activeVerdict !== "ALL" ? 1 : 0;

  return (
    <aside className="lg:sticky lg:top-20 lg:self-start space-y-4 lg:space-y-6">
      {/* Search — always visible. Searches within the current page. */}
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
            placeholder="Search this page…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-8 pr-3 h-9 text-sm rounded-lg border border-surface-border bg-surface-card placeholder:text-surface-fg/40 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent/60 transition"
          />
        </div>

        {/* Mobile filter toggle — hidden on desktop */}
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

      {/* Filter groups — always visible on desktop, collapsible on mobile */}
      <div className={`space-y-4 lg:space-y-6 ${mobileOpen ? "" : "hidden lg:block"}`}>
        {/* Verdict segment — client-side filter on current page */}
        <div>
          <label className="text-[10px] uppercase tracking-widest text-muted font-semibold block mb-2">
            Verdict
          </label>
          <div className="flex gap-0.5 p-0.5 rounded-lg border border-surface-border bg-surface-card">
            {(["ALL", "STRONG GO", "GO", "VALIDATE", "PASS"] as const).map((v) => (
              <button
                key={v}
                type="button"
                onClick={() => setActiveVerdict(v)}
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

        {/* Tag groups — anchors to /tags/<slug>/ */}
        {(["vertical", "model", "geography", "secondary"] as const).map((kind) => {
          const items = grouped[kind];
          if (items.length === 0) return null;
          return (
            <FilterGroup
              key={kind}
              label={KIND_LABEL[kind]}
              items={items}
            />
          );
        })}
      </div>

      {/* Active state bar */}
      <div className={`pt-4 border-t border-surface-border flex items-center justify-between text-xs ${mobileOpen || hasFilters ? "" : "hidden lg:flex"}`}>
        <span className="text-muted">
          <span className="font-mono tabular-nums text-surface-fg">{visibleCount}</span>{" "}
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
}: {
  label: string;
  items: TagItem[];
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
          {visible.map((t) => (
            <li key={t.value}>
              <a
                href={`/tags/${tagSlug(t.value)}/`}
                className="w-full flex items-center justify-between gap-2 px-2 h-7 rounded-md text-[13px] text-surface-fg/80 hover:bg-surface-subtle hover:text-surface-fg transition"
              >
                <span className="truncate">{t.value}</span>
                <span className="text-[11px] font-mono tabular-nums text-muted">
                  {t.count}
                </span>
              </a>
            </li>
          ))}
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
