import { useState } from "react";
import { getSupabase } from "../lib/supabase";
import { VERTICALS } from "../lib/tags";

const TEAM_SIZES = ["Solo", "2-3", "4-5", "5+"] as const;
const BUDGETS = ["< $5K", "$5K - $25K", "$25K - $50K", "$50K+"] as const;

interface FormData {
  name: string;
  email: string;
  vertical: string;
  verticalOther: string;
  problem: string;
  teamSize: string;
  budget: string;
}

const initial: FormData = {
  name: "",
  email: "",
  vertical: "",
  verticalOther: "",
  problem: "",
  teamSize: "",
  budget: "",
};

export default function RequestForm() {
  const [form, setForm] = useState<FormData>(initial);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function set<K extends keyof FormData>(key: K, value: FormData[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    const vertical = form.vertical === "Other" ? form.verticalOther.trim() : form.vertical;

    const sb = getSupabase();
    if (!sb) {
      setErrorMsg("Unable to connect. Please email info@startupbasket.ai instead.");
      setStatus("error");
      return;
    }

    const { error } = await sb.from("proposal_requests").insert({
      name: form.name.trim(),
      email: form.email.trim(),
      vertical,
      problem: form.problem.trim(),
      team_size: form.teamSize || null,
      budget: form.budget || null,
    });

    if (error) {
      setErrorMsg("Something went wrong. Please email info@startupbasket.ai instead.");
      setStatus("error");
      return;
    }

    setStatus("success");
  }

  if (status === "success") {
    return (
      <div className="card p-8 text-center space-y-3">
        <div className="text-3xl">&#10003;</div>
        <p className="text-lg font-semibold text-surface-fg">Request received</p>
        <p className="text-sm text-surface-fg/70">
          We'll review your submission and get back to you within a few days.
        </p>
      </div>
    );
  }

  const inputCls =
    "w-full h-10 px-3 text-sm rounded-lg border border-surface-border bg-surface-card placeholder:text-surface-fg/40 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent/60 transition";
  const selectCls = `${inputCls} appearance-none`;
  const labelCls = "block text-xs font-semibold text-surface-fg/70 uppercase tracking-wide mb-1.5";

  return (
    <form onSubmit={handleSubmit} className="card p-6 sm:p-8 space-y-5">
      {/* Name + Email row */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className={labelCls}>
            Name <span className="text-rose-500">*</span>
          </label>
          <input
            type="text"
            required
            value={form.name}
            onChange={(e) => set("name", e.target.value)}
            placeholder="Your name"
            className={inputCls}
          />
        </div>
        <div>
          <label className={labelCls}>
            Email <span className="text-rose-500">*</span>
          </label>
          <input
            type="email"
            required
            value={form.email}
            onChange={(e) => set("email", e.target.value)}
            placeholder="you@example.com"
            className={inputCls}
          />
        </div>
      </div>

      {/* Vertical */}
      <div>
        <label className={labelCls}>
          Industry / Vertical <span className="text-rose-500">*</span>
        </label>
        <select
          required
          value={form.vertical}
          onChange={(e) => set("vertical", e.target.value)}
          className={selectCls}
        >
          <option value="" disabled>
            Select a vertical
          </option>
          {VERTICALS.map((v) => (
            <option key={v} value={v}>
              {v}
            </option>
          ))}
          <option value="Other">Other</option>
        </select>
        {form.vertical === "Other" && (
          <input
            type="text"
            required
            value={form.verticalOther}
            onChange={(e) => set("verticalOther", e.target.value)}
            placeholder="Specify your industry"
            className={`${inputCls} mt-2`}
          />
        )}
      </div>

      {/* Problem description */}
      <div>
        <label className={labelCls}>
          What problem or market do you want explored? <span className="text-rose-500">*</span>
        </label>
        <textarea
          required
          rows={3}
          value={form.problem}
          onChange={(e) => set("problem", e.target.value)}
          placeholder="Describe the problem, target customer, or market gap in 2-3 sentences"
          className={`${inputCls} h-auto py-2.5 resize-y`}
        />
      </div>

      {/* Team size + Budget row */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className={labelCls}>Team size</label>
          <select
            value={form.teamSize}
            onChange={(e) => set("teamSize", e.target.value)}
            className={selectCls}
          >
            <option value="">Not sure yet</option>
            {TEAM_SIZES.map((s) => (
              <option key={s} value={s}>
                {s} {s === "Solo" ? "founder" : "people"}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className={labelCls}>Budget range</label>
          <select
            value={form.budget}
            onChange={(e) => set("budget", e.target.value)}
            className={selectCls}
          >
            <option value="">Not sure yet</option>
            {BUDGETS.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Error */}
      {status === "error" && (
        <p className="text-sm text-rose-600 dark:text-rose-400">{errorMsg}</p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn btn-primary w-full sm:w-auto"
      >
        {status === "submitting" ? (
          <>
            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
            </svg>
            Submitting…
          </>
        ) : (
          <>
            Submit request
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </>
        )}
      </button>
    </form>
  );
}
