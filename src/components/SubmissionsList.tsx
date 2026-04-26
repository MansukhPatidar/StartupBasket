import { useEffect, useState } from "react";
import { getSupabase } from "../lib/supabase";

interface Submission {
  id: string;
  name: string;
  email: string;
  vertical: string;
  problem: string;
  team_size: string | null;
  budget: string | null;
  created_at: string;
}

export default function SubmissionsList() {
  const [rows, setRows] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      const sb = getSupabase();
      if (!sb) {
        setError("Supabase not available");
        setLoading(false);
        return;
      }
      const { data, error: err } = await sb
        .from("proposal_requests")
        .select("*")
        .order("created_at", { ascending: false });

      if (err) {
        setError(err.message);
      } else {
        setRows(data ?? []);
      }
      setLoading(false);
    })();
  }, []);

  if (loading) {
    return <p className="text-sm text-muted animate-pulse">Loading submissions...</p>;
  }

  if (error) {
    return <p className="text-sm text-rose-600 dark:text-rose-400">{error}</p>;
  }

  if (rows.length === 0) {
    return (
      <div className="card p-8 text-center">
        <p className="text-surface-fg/60">No submissions yet.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <p className="text-xs text-muted">
        <span className="font-mono tabular-nums text-surface-fg">{rows.length}</span> submission{rows.length !== 1 ? "s" : ""}
      </p>

      {rows.map((r) => (
        <div key={r.id} className="card p-5 space-y-3">
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
            <span className="font-semibold text-surface-fg">{r.name}</span>
            <a href={`mailto:${r.email}`} className="text-sm text-accent-600 dark:text-accent-400 hover:underline">
              {r.email}
            </a>
            <time className="ml-auto text-xs text-muted tabular-nums">
              {new Date(r.created_at).toLocaleDateString("en-IN", {
                day: "numeric",
                month: "short",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })}
            </time>
          </div>

          <div className="flex flex-wrap gap-1.5">
            <span className="pill bg-indigo-50 text-indigo-700 ring-indigo-200 dark:bg-indigo-400/15 dark:text-indigo-200 dark:ring-indigo-400/40">
              {r.vertical}
            </span>
            {r.team_size && (
              <span className="pill bg-surface-subtle text-surface-fg/70 ring-surface-border dark:bg-white/5 dark:text-white/70 dark:ring-white/10">
                {r.team_size} {r.team_size === "Solo" ? "founder" : "people"}
              </span>
            )}
            {r.budget && (
              <span className="pill bg-surface-subtle text-surface-fg/70 ring-surface-border dark:bg-white/5 dark:text-white/70 dark:ring-white/10">
                {r.budget}
              </span>
            )}
          </div>

          <p className="text-sm text-surface-fg/80 leading-relaxed whitespace-pre-line">
            {r.problem}
          </p>
        </div>
      ))}
    </div>
  );
}
