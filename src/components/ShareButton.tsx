import { useState, useCallback, useRef, useEffect } from "react";
import { getSupabase } from "../lib/supabase";

interface Props {
  url: string;
  title: string;
  text: string;
  slug: string;
  /** "card" = small icon only, "detail" = icon + label */
  variant?: "card" | "detail";
}

export default function ShareButton({ url, title, text, slug, variant = "detail" }: Props) {
  const [copied, setCopied] = useState(false);
  const [open, setOpen] = useState(false);
  const [shareCount, setShareCount] = useState<number | null>(null);
  const tracked = useRef(false);

  useEffect(() => {
    const sb = getSupabase();
    if (!sb) return;
    sb.from("idea_engagement")
      .select("shares")
      .eq("slug", slug)
      .maybeSingle()
      .then(({ data }) => {
        if (data) setShareCount(data.shares ?? 0);
      });
  }, [slug]);

  const trackShare = useCallback(() => {
    if (tracked.current) return;
    tracked.current = true;
    setShareCount((c) => (c ?? 0) + 1);
    const sb = getSupabase();
    if (sb) sb.rpc("increment_share", { p_slug: slug }).then(() => {});
  }, [slug]);

  const shareLinks = [
    {
      name: "Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      icon: (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      name: "X",
      href: `https://x.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
      icon: (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      icon: (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
  ];

  const handleNativeShare = useCallback(async () => {
    try {
      await navigator.share({ title, text, url });
      trackShare();
    } catch {
      // User cancelled or not supported — fall through
    }
  }, [title, text, url, trackShare]);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API not available
    }
  }, [url]);

  const isCard = variant === "card";

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => {
          // Use the native share sheet only on touch / coarse-pointer devices
          // (phones, tablets). On desktop the OS sheet shows AirDrop/Messages/
          // Notes which is useless for sharing a link socially — fall back to
          // the in-app popover with explicit X / LinkedIn / Copy actions.
          const isTouch =
            typeof window !== "undefined" &&
            window.matchMedia &&
            window.matchMedia("(pointer: coarse)").matches;
          if (
            isTouch &&
            typeof navigator !== "undefined" &&
            navigator.share
          ) {
            handleNativeShare();
          } else {
            setOpen((o) => !o);
          }
        }}
        className={`inline-flex items-center gap-1.5 text-surface-fg/50 hover:text-surface-fg transition ${
          isCard ? "text-[11px]" : "text-sm px-3 py-1.5 rounded-md hover:bg-surface-subtle"
        }`}
        aria-label="Share"
      >
        <svg
          width={isCard ? "12" : "14"}
          height={isCard ? "12" : "14"}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="18" cy="5" r="3" />
          <circle cx="6" cy="12" r="3" />
          <circle cx="18" cy="19" r="3" />
          <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
          <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
        </svg>
        {!isCard && <span>Share</span>}
        {shareCount != null && shareCount > 0 && (
          <span className="tabular-nums text-[11px] font-medium">{shareCount}</span>
        )}
      </button>

      {open && (
        <>
          {/* Backdrop to close */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setOpen(false)}
          />
          <div className="absolute z-50 right-0 bottom-full mb-2 w-44 rounded-lg border border-surface-border bg-surface-card shadow-soft-lg p-1.5 animate-fade-in">
            {shareLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-3 py-2 rounded-md text-sm text-surface-fg/80 hover:bg-surface-subtle hover:text-surface-fg transition"
                onClick={() => { trackShare(); setOpen(false); }}
              >
                {link.icon}
                {link.name}
              </a>
            ))}
            <button
              type="button"
              onClick={() => {
                handleCopy();
                trackShare();
                setOpen(false);
              }}
              className="flex items-center gap-2.5 px-3 py-2 rounded-md text-sm text-surface-fg/80 hover:bg-surface-subtle hover:text-surface-fg transition w-full"
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
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
              </svg>
              {copied ? "Copied!" : "Copy link"}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
