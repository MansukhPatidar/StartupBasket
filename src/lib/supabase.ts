// Lightweight Supabase REST client — direct fetch() against PostgREST + RPC.
// Avoids pulling the full @supabase/supabase-js bundle (~50 KB) into every
// page that ships the Engagement card. Only the surface area we actually use
// (read engagement, insert/delete likes, RPC increment_view) is implemented.
//
// Auth not needed — anon key + RLS handle access control. No realtime, no
// session persistence.

const url =
  import.meta.env.PUBLIC_SUPABASE_URL ||
  "https://dfexwbnrzsfbxkvpnmwm.supabase.co";
const anonKey =
  import.meta.env.PUBLIC_SUPABASE_ANON_KEY ||
  "sb_publishable_N9NFoNEF4QFCSRwYbkaTHw_LNw-xNGg";

function restHeaders(extra?: Record<string, string>): Record<string, string> {
  return {
    apikey: anonKey,
    Authorization: `Bearer ${anonKey}`,
    "Content-Type": "application/json",
    ...extra,
  };
}

export interface SupabaseLite {
  selectEngagement(slug: string): Promise<{ views: number; likes: number } | null>;
  selectAllEngagement(): Promise<{ slug: string; views: number; likes: number }[]>;
  selectShares(slug: string): Promise<number>;
  insertLike(slug: string, anonId: string): Promise<void>;
  deleteLike(slug: string, anonId: string): Promise<void>;
  incrementView(slug: string): Promise<void>;
  incrementShare(slug: string): Promise<void>;
  insertProposal(payload: ProposalRequest): Promise<void>;
  selectProposals(): Promise<unknown[]>;
}

let client: SupabaseLite | null = null;

export function getSupabase(): SupabaseLite | null {
  if (client) return client;
  if (!url || !anonKey) return null;
  client = {
    async selectEngagement(slug) {
      const u = new URL(`${url}/rest/v1/idea_engagement`);
      u.searchParams.set("select", "views,likes");
      u.searchParams.set("slug", `eq.${slug}`);
      u.searchParams.set("limit", "1");
      const res = await fetch(u.toString(), {
        headers: restHeaders({ Accept: "application/json" }),
      });
      if (!res.ok) return null;
      const arr = await res.json();
      if (!Array.isArray(arr) || arr.length === 0) return { views: 0, likes: 0 };
      return { views: arr[0]?.views ?? 0, likes: arr[0]?.likes ?? 0 };
    },
    async selectAllEngagement() {
      const u = new URL(`${url}/rest/v1/idea_engagement`);
      u.searchParams.set("select", "slug,views,likes");
      const res = await fetch(u.toString(), {
        headers: restHeaders({ Accept: "application/json" }),
      });
      if (!res.ok) return [];
      const arr = await res.json();
      return Array.isArray(arr) ? arr : [];
    },
    async selectShares(slug) {
      const u = new URL(`${url}/rest/v1/idea_engagement`);
      u.searchParams.set("select", "shares");
      u.searchParams.set("slug", `eq.${slug}`);
      u.searchParams.set("limit", "1");
      const res = await fetch(u.toString(), {
        headers: restHeaders({ Accept: "application/json" }),
      });
      if (!res.ok) return 0;
      const arr = await res.json();
      return Array.isArray(arr) && arr[0]?.shares ? arr[0].shares : 0;
    },
    async insertLike(slug, anonId) {
      const res = await fetch(`${url}/rest/v1/idea_likes`, {
        method: "POST",
        headers: restHeaders({ Prefer: "return=minimal" }),
        body: JSON.stringify({ slug, anon_id: anonId }),
      });
      if (!res.ok) throw new Error(`insertLike ${res.status}`);
    },
    async deleteLike(slug, anonId) {
      const u = new URL(`${url}/rest/v1/idea_likes`);
      u.searchParams.set("slug", `eq.${slug}`);
      u.searchParams.set("anon_id", `eq.${anonId}`);
      const res = await fetch(u.toString(), {
        method: "DELETE",
        headers: restHeaders({ Prefer: "return=minimal" }),
      });
      if (!res.ok) throw new Error(`deleteLike ${res.status}`);
    },
    async incrementView(slug) {
      const res = await fetch(`${url}/rest/v1/rpc/increment_view`, {
        method: "POST",
        headers: restHeaders(),
        body: JSON.stringify({ p_slug: slug }),
      });
      if (!res.ok) throw new Error(`incrementView ${res.status}`);
    },
    async incrementShare(slug) {
      const res = await fetch(`${url}/rest/v1/rpc/increment_share`, {
        method: "POST",
        headers: restHeaders(),
        body: JSON.stringify({ p_slug: slug }),
      });
      if (!res.ok) throw new Error(`incrementShare ${res.status}`);
    },
    async insertProposal(payload) {
      const res = await fetch(`${url}/rest/v1/proposal_requests`, {
        method: "POST",
        headers: restHeaders({ Prefer: "return=minimal" }),
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(`insertProposal ${res.status}`);
    },
    async selectProposals() {
      const u = new URL(`${url}/rest/v1/proposal_requests`);
      u.searchParams.set("select", "*");
      u.searchParams.set("order", "created_at.desc");
      const res = await fetch(u.toString(), {
        headers: restHeaders({ Accept: "application/json" }),
      });
      if (!res.ok) return [];
      const arr = await res.json();
      return Array.isArray(arr) ? arr : [];
    },
  };
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

export interface ProposalRequest {
  name: string;
  email: string;
  vertical: string;
  problem: string;
  team_size: string | null;
  budget: string | null;
}

export function setLiked(slug: string, liked: boolean) {
  if (typeof window === "undefined") return;
  const set = getLikedSet();
  if (liked) set.add(slug);
  else set.delete(slug);
  window.localStorage.setItem(LIKED_KEY, JSON.stringify([...set]));
}
