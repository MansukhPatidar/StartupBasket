import { useEffect, useState } from "react";

// Plain client-side filter over IdeaCard elements rendered by Astro.
// Each card has data-search / data-vertical / data-model / data-geography / data-verdict.
export default function SearchBar({ placeholder = "Search ideas, tags, verticals…" }: { placeholder?: string }) {
  const [query, setQuery] = useState("");
  const [count, setCount] = useState<{ visible: number; total: number } | null>(null);

  useEffect(() => {
    const cards = document.querySelectorAll<HTMLElement>("[data-search]");
    const q = query.trim().toLowerCase();
    let visible = 0;
    cards.forEach((card) => {
      const haystack = (card.dataset.search || "").toLowerCase();
      const matches = q === "" || haystack.includes(q);
      card.style.display = matches ? "" : "none";
      if (matches) visible += 1;
    });
    setCount({ visible, total: cards.length });
  }, [query]);

  return (
    <div className="relative">
      <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-surface-fg/40 pointer-events-none">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-3-3" />
        </svg>
      </span>
      <input
        type="search"
        autoComplete="off"
        placeholder={placeholder}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full pl-10 pr-24 py-3 text-[15px] rounded-xl border border-surface-border bg-surface-card placeholder:text-surface-fg/40 shadow-soft focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent/60 transition"
      />
      <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
        {count && query && (
          <span className="text-[11px] font-mono text-muted tabular-nums">
            {count.visible}/{count.total}
          </span>
        )}
        {query && (
          <button
            type="button"
            onClick={() => setQuery("")}
            className="text-surface-fg/40 hover:text-surface-fg text-sm"
            aria-label="Clear"
          >
            ✕
          </button>
        )}
        {!query && (
          <kbd className="hidden sm:inline-flex items-center gap-1 text-[10px] font-mono text-surface-fg/50 border border-surface-border rounded px-1.5 py-0.5">
            ⌘K
          </kbd>
        )}
      </div>
    </div>
  );
}
