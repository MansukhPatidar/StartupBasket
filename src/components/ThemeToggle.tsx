import { useEffect, useState } from "react";

type Theme = "light" | "dark" | "system";

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const dark = theme === "dark" || (theme === "system" && systemDark);
  root.classList.toggle("dark", dark);
  root.style.colorScheme = dark ? "dark" : "light";
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("system");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const stored = (localStorage.getItem("theme") as Theme | null) ?? "system";
    setTheme(stored);
    applyTheme(stored);

    // React to system changes when in "system" mode.
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => {
      const cur = (localStorage.getItem("theme") as Theme | null) ?? "system";
      if (cur === "system") applyTheme("system");
    };
    mq.addEventListener("change", onChange);

    // Close menu on outside click.
    const onDoc = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (target && !target.closest("[data-theme-toggle]")) setOpen(false);
    };
    document.addEventListener("click", onDoc);

    return () => {
      mq.removeEventListener("change", onChange);
      document.removeEventListener("click", onDoc);
    };
  }, []);

  function pick(next: Theme) {
    setTheme(next);
    localStorage.setItem("theme", next);
    applyTheme(next);
    setOpen(false);
  }

  const icon =
    theme === "dark" ? (
      <MoonIcon />
    ) : theme === "light" ? (
      <SunIcon />
    ) : (
      <SystemIcon />
    );

  return (
    <div className="relative" data-theme-toggle>
      <button
        type="button"
        aria-label="Theme"
        onClick={() => setOpen((o) => !o)}
        className="inline-flex items-center justify-center h-9 w-9 rounded-lg text-surface-fg/70 hover:text-surface-fg hover:bg-surface-subtle transition"
      >
        {icon}
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-40 rounded-lg border border-surface-border bg-surface-card shadow-soft-lg overflow-hidden z-50 animate-fade-in">
          {(["light", "dark", "system"] as const).map((opt) => (
            <button
              key={opt}
              type="button"
              onClick={() => pick(opt)}
              className={`w-full flex items-center justify-between px-3 py-2 text-sm transition ${
                theme === opt
                  ? "bg-surface-subtle text-surface-fg"
                  : "text-surface-fg/80 hover:bg-surface-subtle"
              }`}
            >
              <span className="flex items-center gap-2 capitalize">
                {opt === "light" ? <SunIcon /> : opt === "dark" ? <MoonIcon /> : <SystemIcon />}
                {opt}
              </span>
              {theme === opt && <CheckIcon />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function SunIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  );
}
function MoonIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}
function SystemIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="4" width="20" height="14" rx="2" />
      <path d="M8 20h8M12 18v2" />
    </svg>
  );
}
function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
