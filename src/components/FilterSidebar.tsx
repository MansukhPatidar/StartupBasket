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

export default function FilterSidebar({ tags, total }: Props) {
  const [search, setSearch] = useState("");
  const [active, setActive] = useState<Set<string>>(new Set());
  const [activeVerdict, setActiveVerdict] = useState<"ALL" | "STRONG GO" | "GO" | "VALIDATE" | "PASS">("ALL");
  const [visibleCount, setVisibleCount] = useState<number>(total);

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

  // Apply filters to the card grid (cards live in a sibling <section>).
  useEffect(() => {
    const cards = document.querySelectorAll<HTMLElement>("[data-search]");
    const q = search.trim().toLowerCase();
    let visible = 0;
    cards.forEach((card) => {
      const haystack = (card.dataset.search || "").toLowerCase();
      const verdictMatch =
        activeVerdict === "ALL" || card.dataset.verdict === activeVerdict;
      const queryMatch = q === "" || haystack.includes(q);
      // Active tags: card must match ALL selected tags (AND across different kinds, but within a kind it's OR — simpler UX: AND all).
      const tagMatch = [...active].every((tagValue) => {
        const v = card.dataset.vertical === tagValue;
        const m = card.dataset.model === tagValue;
        const g = card.dataset.geography === tagValue;
        const sec = (card.dataset.search || "")
          .toLowerCase()
          .includes(tagValue.toLowerCase());
        return v || m || g || sec;
      });
      const show = verdictMatch && queryMatch && tagMatch;
      card.style.display = show ? "" : "none";
      if (show) visible += 1;
    });
    setVisibleCount(visible);
  }, [search, active, activeVerdict]);

  function toggleTag(value: string) {
    setActive((prev) => {
      const next = new Set(prev);
      if (next.has(value)) next.delete(value);
      else next.add(value);
      return next;
    });
  }

  function clearAll() {
    setActive(new Set());
    setActiveVerdict("ALL");
    setSearch("");
  }

  const hasFilters = active.size > 0 || activeVerdict !== "ALL" || search !== "";

  return (
    <aside className="lg:sticky lg:top-20 lg:self-start space-y-6">
      {/* Search */}
      <div>
        <label className="text-[10px] uppercase tracking-widest text-muted font-semibold block mb-2">
          Search
        </label>
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-surface-fg/40">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-3-3" />
            </svg>
          </span>
          <input
            type="search"
            autoComplete="off"
            placeholder="Title, tag, vertical…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-8 pr-3 h-9 text-sm rounded-lg border border-surface-border bg-surface-card placeholder:text-surface-fg/40 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent/60 transition"
          />
        </div>
      </div>

      {/* Verdict segment */}
      <div>
        <label className="text-[10px] uppercase tracking-widest text-muted font-semibold block mb-2">
          Verdict
        </label>
        <div className="flex flex-wrap gap-1 p-1 rounded-lg border border-surface-border bg-surface-card">
          {(["ALL", "STRONG GO", "GO", "VALIDATE", "PASS"] as const).map((v) => (
            <button
              key={v}
              type="button"
              onClick={() => setActiveVerdict(v)}
              className={`h-7 px-2 text-[11px] font-semibold rounded-md whitespace-nowrap transition ${
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

      {/* Filter groups */}
      {(["vertical", "model", "geography", "secondary"] as const).map((kind) => {
        const items = grouped[kind];
        if (items.length === 0) return null;
        return (
          <FilterGroup
            key={kind}
            label={KIND_LABEL[kind]}
            items={items}
            active={active}
            onToggle={toggleTag}
          />
        );
      })}

      {/* Active state bar */}
      <div className="pt-4 border-t border-surface-border flex items-center justify-between text-xs">
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
  active,
  onToggle,
}: {
  label: string;
  items: TagItem[];
  active: Set<string>;
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
            const on = active.has(t.value);
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
                      className={`inline-block w-3 h-3 rounded border transition ${
                        on
                          ? "bg-accent border-accent"
                          : "border-surface-border"
                      }`}
                      aria-hidden="true"
                    >
                      {on && (
                        <svg viewBox="0 0 16 16" className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="3 8 7 12 13 4" />
                        </svg>
                      )}
                    </span>
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
