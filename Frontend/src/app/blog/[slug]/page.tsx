import { notFound } from "next/navigation";
import Page from "@/framer/pages/post";
import { metaFor } from "@/framer/meta";

const SLUGS = ["first-internship-not-perfect", "from-college-to-studio", "how-we-vet-studios", "one-page-resume", "portfolio-interview-prep", "while-you-wait-to-hear-back"];

export const dynamicParams = false;

export function generateStaticParams() {
  return SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return metaFor("/blog/" + slug);
}

export default async function Route({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!SLUGS.includes(slug)) notFound();
  return <Page slug={slug} />;
}
