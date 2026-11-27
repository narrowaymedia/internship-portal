import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { internships } from "@/data/internships";
import { InternshipDetailView } from "@/components/internships/InternshipDetailView";

export const dynamicParams = false;

export function generateStaticParams() {
  return internships.map((item) => ({
    slug: item.slug
  }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const internship = internships.find((item) => item.slug === slug);
  if (!internship) {
    return {
      title: "Placement Not Found — Gradeon Internships"
    };
  }

  return {
    title: `${internship.title} at ${internship.company} — Gradeon Internships`,
    description: `${internship.department} internship in ${internship.location}. Stipend: ${internship.stipend}. ${internship.overview.slice(0, 140)}...`,
    openGraph: {
      title: `${internship.title} — ${internship.company}`,
      description: internship.overview.slice(0, 160),
      images: [internship.companyLogo]
    }
  };
}

export default async function InternshipSlugPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const internship = internships.find((item) => item.slug === slug);
  if (!internship) {
    notFound();
  }

  return (
    <main className="w-full flex flex-col items-center">
      <InternshipDetailView internship={internship} />
    </main>
  );
}
