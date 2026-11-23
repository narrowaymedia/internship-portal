import { notFound } from "next/navigation";
import Page from "@/framer/pages/teacher";
import { metaFor } from "@/framer/meta";

const SLUGS = ["clara-moss", "daniel-weiss", "hana-ito", "ines-moreau", "lena-hart", "marco-bellini", "sofia-lind", "tom-keller"];

export const dynamicParams = false;

export function generateStaticParams() {
  return SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return metaFor("/teachers/" + slug);
}

export default async function Route({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!SLUGS.includes(slug)) notFound();
  return <Page slug={slug} />;
}
