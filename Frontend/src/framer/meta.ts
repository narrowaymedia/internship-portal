import type { Metadata } from "next";
import meta from "./meta.json";

const M = meta as Record<string, { title: string; description: string; image: string | null }>;

export function metaFor(route: string): Metadata {
  const m = M[route] || M["/"];
  return {
    title: m.title,
    description: m.description,
    openGraph: { title: m.title, description: m.description, images: m.image ? [m.image] : undefined },
    twitter: { card: "summary_large_image", title: m.title, description: m.description, images: m.image ? [m.image] : undefined },
  };
}
