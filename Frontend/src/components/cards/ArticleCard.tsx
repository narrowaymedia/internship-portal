"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Clock } from "lucide-react";
import { JournalArticle } from "@/types";
import { Badge } from "@/components/ui/Badge";

interface ArticleCardProps {
  article: JournalArticle;
}

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="group bg-[#ffffff] border border-[#ddd7ca] rounded-2xl overflow-hidden flex flex-col hover:border-[#17150f] transition-all shadow-sm"
    >
      <Link href={`/journal/${article.slug}`} className="block">
        <div className="relative aspect-[16/9] overflow-hidden bg-[#e8e3d8]" style={{ position: "relative" }}>
          <Image
            src={article.coverImage}
            alt={article.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-3 left-3 z-10">
            <Badge variant="dark">{article.category}</Badge>
          </div>
        </div>
      </Link>

      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-3 text-xs font-mono text-[#7a746a] mb-2.5">
          <span>{article.date}</span>
          <span>·</span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {article.readTime}
          </span>
        </div>

        <Link href={`/journal/${article.slug}`}>
          <h3 className="font-bold text-lg md:text-xl text-[#17150f] group-hover:text-[#f0532b] transition-colors leading-snug">
            {article.title}
          </h3>
        </Link>

        <p className="mt-2 text-sm text-[#7a746a] line-clamp-2 leading-relaxed flex-1">
          {article.excerpt}
        </p>

        <div className="mt-6 pt-4 border-t border-[#ddd7ca] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="relative w-6 h-6 rounded-full overflow-hidden bg-[#e8e3d8]" style={{ position: "relative" }}>
              <Image
                src={article.author.avatar}
                alt={article.author.name}
                fill
                sizes="24px"
                className="object-cover"
              />
            </div>
            <span className="text-xs text-[#17150f] font-medium">
              {article.author.name}
            </span>
          </div>
          <span className="text-xs font-medium text-[#f0532b] flex items-center gap-1 group-hover:underline">
            Read article
            <ArrowUpRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>
    </motion.article>
  );
}
