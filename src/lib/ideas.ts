import { getCollection, type CollectionEntry } from "astro:content";

export type Idea = CollectionEntry<"ideas">;

export async function getAllIdeas(): Promise<Idea[]> {
  const ideas = await getCollection("ideas");
  return ideas.sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf(),
  );
}

export async function getFeaturedIdeas(): Promise<Idea[]> {
  const ideas = await getAllIdeas();
  const featured = ideas.filter((i) => i.data.featured);
  if (featured.length >= 3) return featured.slice(0, 9);
  // Fall back to top-scored ideas if not enough are explicitly featured.
  const topScored = [...ideas].sort((a, b) => b.data.score - a.data.score);
  return topScored.slice(0, 9);
}

export async function getIdeasByTag(tag: string): Promise<Idea[]> {
  const ideas = await getAllIdeas();
  return ideas.filter((i) => {
    const t = i.data.tags;
    return (
      t.vertical === tag ||
      t.model === tag ||
      t.geography === tag ||
      t.secondary.includes(tag)
    );
  });
}

// Collect every distinct tag value across the catalog (for /tags/[tag] static paths
// and the search/filter UI).
export async function getAllTags(): Promise<{ value: string; kind: string; count: number }[]> {
  const ideas = await getAllIdeas();
  const counts = new Map<string, { kind: string; count: number }>();
  const bump = (value: string, kind: string) => {
    const cur = counts.get(value);
    if (cur) cur.count += 1;
    else counts.set(value, { kind, count: 1 });
  };
  for (const idea of ideas) {
    bump(idea.data.tags.vertical, "vertical");
    bump(idea.data.tags.model, "model");
    bump(idea.data.tags.geography, "geography");
    for (const s of idea.data.tags.secondary) bump(s, "secondary");
  }
  return [...counts.entries()].map(([value, { kind, count }]) => ({ value, kind, count }));
}
