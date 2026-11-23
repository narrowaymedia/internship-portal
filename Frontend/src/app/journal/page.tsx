import React from "react";
import { journalArticles } from "@/data/journal";
import { Badge } from "@/components/ui/Badge";
import { ArticleCard } from "@/components/cards/ArticleCard";

export default function JournalPage() {
  return (
    <div className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <Badge variant="orange" dot>
            The Primer Journal
          </Badge>
          <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold text-[#17150f] tracking-tight">
            Notes on learning, making &amp; craft.
          </h1>
          <p className="mt-3 text-lg text-[#7a746a] leading-relaxed">
            Interviews with working makers, behind-the-scenes notes on how we film lessons, and practical essays on building creative momentum.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {journalArticles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </div>
    </div>
  );
}
