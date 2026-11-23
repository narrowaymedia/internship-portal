import { notFound } from "next/navigation";
import Page from "@/framer/pages/post";
import { metaFor } from "@/framer/meta";

const SLUGS = ["build-a-practice-habit", "filming-our-lessons", "first-project-not-perfect", "from-student-to-show", "how-feedback-works", "why-short-lessons-work"];

export const dynamicParams = false;

export function generateStaticParams() {
  return SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return metaFor("/journal/" + slug);
}

export default async function Route({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!SLUGS.includes(slug)) notFound();
  return <Page slug={slug} />;
}
