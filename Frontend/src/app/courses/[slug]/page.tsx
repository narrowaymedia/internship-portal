import { notFound } from "next/navigation";
import Page from "@/framer/pages/course";
import { metaFor } from "@/framer/meta";

const SLUGS = ["abstract-painting", "cook-like-a-chef", "creative-writing", "film-photography", "filmmaking-on-a-budget", "graphic-design-basics", "packaging-design", "woodworking-at-home"];

export const dynamicParams = false;

export function generateStaticParams() {
  return SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return metaFor("/courses/" + slug);
}

export default async function Route({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!SLUGS.includes(slug)) notFound();
  return <Page slug={slug} />;
}
