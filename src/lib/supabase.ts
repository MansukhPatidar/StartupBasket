import { createClient, type SupabaseClient } from "@supabase/supabase-js";

const url =
  import.meta.env.PUBLIC_SUPABASE_URL ||
  "https://dfexwbnrzsfbxkvpnmwm.supabase.co";
const anonKey =
  import.meta.env.PUBLIC_SUPABASE_ANON_KEY ||
  "sb_publishable_N9NFoNEF4QFCSRwYbkaTHw_LNw-xNGg";

let client: SupabaseClient | null = null;

export function getSupabase(): SupabaseClient | null {
  if (client) return client;
  if (!url || !anonKey) return null;
  client = createClient(url, anonKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
  return client;
}

const ANON_ID_KEY = "sb_anon_id";

export function getAnonId(): string {
  if (typeof window === "undefined") return "";
  let id = window.localStorage.getItem(ANON_ID_KEY);
  if (!id) {
    id = crypto.randomUUID();
    window.localStorage.setItem(ANON_ID_KEY, id);
  }
  return id;
}

const LIKED_KEY = "sb_liked_slugs";

export function getLikedSet(): Set<string> {
  if (typeof window === "undefined") return new Set();
  try {
    const raw = window.localStorage.getItem(LIKED_KEY);
    if (!raw) return new Set();
    const arr = JSON.parse(raw);
    return new Set(Array.isArray(arr) ? arr : []);
  } catch {
    return new Set();
  }
}

export function setLiked(slug: string, liked: boolean) {
  if (typeof window === "undefined") return;
  const set = getLikedSet();
  if (liked) set.add(slug);
  else set.delete(slug);
  window.localStorage.setItem(LIKED_KEY, JSON.stringify([...set]));
}
