"use client";

import React, { useState } from "react";
import { Search } from "lucide-react";
import { courses } from "@/data/courses";
import { Badge } from "@/components/ui/Badge";
import { CourseCard } from "@/components/cards/CourseCard";

export default function CoursesPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["All", "Painting", "Cooking", "Design", "Writing", "Film", "Craft"];

  const filtered = courses.filter((c) => {
    const matchesCategory = activeCategory === "All" || c.category === activeCategory;
    const matchesSearch =
      c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.teacher.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <Badge variant="orange" dot>
            Course Catalog
          </Badge>
          <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold text-[#17150f] tracking-tight">
            Online courses in painting, cooking, design, film and more.
          </h1>
          <p className="mt-3 text-lg text-[#7a746a] leading-relaxed">
            Eight courses taught by working masters. Short video lessons, one real portfolio project, and personal teacher feedback on every single course.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 pb-8 mb-10 border-b border-[#ddd7ca]">
          {/* Categories */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer border ${
                  activeCategory === cat
                    ? "bg-[#17150f] text-white border-[#17150f]"
                    : "bg-[#ffffff] text-[#7a746a] border-[#ddd7ca] hover:text-[#17150f]"
                }`}
              >
                {cat} ({cat === "All" ? courses.length : courses.filter((c) => c.category === cat).length})
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[240px]">
            <Search className="w-4 h-4 text-[#7a746a] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search courses or teachers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-sm bg-white border border-[#ddd7ca] rounded-xl focus:outline-none focus:border-[#17150f] font-sans"
            />
          </div>
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((course) => (
              <CourseCard key={course.slug} course={course} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white border border-[#ddd7ca] rounded-2xl p-8">
            <p className="font-mono text-sm text-[#7a746a]">
              No courses found matching &ldquo;{searchQuery}&rdquo;.
            </p>
            <button
              onClick={() => {
                setActiveCategory("All");
                setSearchQuery("");
              }}
              className="mt-4 text-xs font-mono uppercase text-[#f0532b] underline"
            >
              Reset filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
