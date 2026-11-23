import { redirect } from "next/navigation";

export default async function InternshipSlugRedirectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  redirect(`/internships/${slug}`);
}
