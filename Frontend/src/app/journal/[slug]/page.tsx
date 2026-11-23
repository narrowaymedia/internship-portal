import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock } from "lucide-react";
import { journalArticles } from "@/data/journal";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return journalArticles.map((article) => ({
    slug: article.slug,
  }));
}

export default async function JournalArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = journalArticles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="pb-20">
      {/* Breadcrumb */}
      <div className="border-b border-[#ddd7ca] bg-white py-3">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/journal"
            className="inline-flex items-center gap-2 text-xs font-mono text-[#7a746a] hover:text-[#17150f] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to journal</span>
          </Link>
        </div>
      </div>

      <article className="pt-12 md:pt-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 mb-8">
          <div className="flex items-center gap-3">
            <Badge variant="dark">{article.category}</Badge>
            <span className="font-mono text-xs text-[#7a746a]">{article.date}</span>
            <span className="font-mono text-xs text-[#7a746a] flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {article.readTime}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#17150f] tracking-tight leading-tight">
            {article.title}
          </h1>

          {/* Author */}
          <div className="pt-2 flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-full overflow-hidden bg-[#e8e3d8]">
              <Image
                src={article.author.avatar}
                alt={article.author.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-sm font-bold text-[#17150f]">{article.author.name}</p>
              <p className="text-xs text-[#7a746a]">{article.author.role}</p>
            </div>
          </div>
        </div>

        {/* Cover Image */}
        <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-[#e8e3d8] border border-[#ddd7ca] mb-12 shadow-sm">
          <Image
            src={article.coverImage}
            alt={article.title}
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Content Body */}
        <div className="prose prose-lg max-w-none text-[#17150f] space-y-6 text-lg leading-relaxed border-b border-[#ddd7ca] pb-12">
          {article.content.map((paragraph, index) => (
            <p key={index} className="text-[#17150f]/90">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-12 p-8 bg-white border border-[#ddd7ca] rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-[#17150f]">
              Experience the Primer method yourself.
            </h3>
            <p className="text-sm text-[#7a746a] mt-1">
              Start your 7-day free trial and build your first real project.
            </p>
          </div>
          <Button href="/enroll" size="lg" variant="primary" className="shrink-0">
            Start free trial
          </Button>
        </div>
      </article>
    </div>
  );
}
