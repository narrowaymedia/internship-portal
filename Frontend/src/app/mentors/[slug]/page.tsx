import { notFound } from "next/navigation";
import Page from "@/framer/pages/teacher";
import { metaFor } from "@/framer/meta";

const SLUGS = ["arthur-pendelton", "chloe-vance", "claire-delacroix", "greta-lindemann", "lars-lindqvist", "lena-hart", "marco-bellini", "marianne-vance"];

export const dynamicParams = false;

export function generateStaticParams() {
  return SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return metaFor("/mentors/" + slug);
}

export default async function Route({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!SLUGS.includes(slug)) notFound();
  return <Page slug={slug} />;
}
