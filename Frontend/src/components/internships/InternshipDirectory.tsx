"use client";

import React, { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { Internship, DepartmentType, WorkplaceType } from "@/types/internship";
import { ApplyModal } from "./ApplyModal";
import {
  Search,
  Bookmark,
  BookmarkCheck,
  MapPin,
  Sparkles,
  ArrowUpRight,
  X,
  Compass
} from "lucide-react";

interface InternshipDirectoryProps {
  initialInternships: Internship[];
}

const DEPARTMENTS: (DepartmentType | "All")[] = [
  "All",
  "Software Engineering",
  "UI/UX Design",
  "AI & Machine Learning",
  "Film & Motion",
  "Creative Writing",
  "Industrial Craft",
  "Culinary Arts"
];

const WORKPLACE_TYPES: (WorkplaceType | "All")[] = ["All", "Remote", "Hybrid", "On-site"];

export function InternshipDirectory({ initialInternships }: InternshipDirectoryProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDept, setSelectedDept] = useState<DepartmentType | "All">("All");
  const [selectedWorkplace, setSelectedWorkplace] = useState<WorkplaceType | "All">("All");
  const [selectedDuration, setSelectedDuration] = useState<string>("All");
  const [sortBy, setSortBy] = useState<"featured" | "stipend" | "deadline" | "openings">("featured");
  const [savedSlugs, setSavedSlugs] = useState<string[]>([]);
  const [applyingInternship, setApplyingInternship] = useState<Internship | null>(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("primer_saved_internships");
      if (saved) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setSavedSlugs(JSON.parse(saved));
      }
    } catch {
      // ignore
    }
  }, []);

  const toggleBookmark = (slug: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const next = savedSlugs.includes(slug) ? savedSlugs.filter((s) => s !== slug) : [...savedSlugs, slug];
    setSavedSlugs(next);
    try {
      localStorage.setItem("primer_saved_internships", JSON.stringify(next));
    } catch {
      // ignore
    }
  };

  const filteredInternships = useMemo(() => {
    return initialInternships
      .filter((item) => {
        // Search filter
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase();
          const matchTitle = item.title.toLowerCase().includes(q);
          const matchCompany = item.company.toLowerCase().includes(q);
          const matchLocation = item.location.toLowerCase().includes(q);
          const matchSkills = item.skills.some((s) => s.toLowerCase().includes(q));
          const matchDept = item.department.toLowerCase().includes(q);
          if (!matchTitle && !matchCompany && !matchLocation && !matchSkills && !matchDept) {
            return false;
          }
        }

        // Department filter
        if (selectedDept !== "All" && item.department !== selectedDept) {
          return false;
        }

        // Workplace type filter
        if (selectedWorkplace !== "All" && item.workplaceType !== selectedWorkplace) {
          return false;
        }

        // Duration filter
        if (selectedDuration === "3") {
          if (!item.duration.includes("3 Month")) return false;
        } else if (selectedDuration === "6") {
          if (!item.duration.includes("4 Month") && !item.duration.includes("5 Month") && !item.duration.includes("6 Month")) {
            return false;
          }
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === "featured") {
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;
          return 0;
        }
        if (sortBy === "stipend") {
          const getNum = (s: string) => {
            const m = s.match(/[\d,]+/);
            return m ? parseInt(m[0].replace(/,/g, ""), 10) : 0;
          };
          return getNum(b.stipend) - getNum(a.stipend);
        }
        if (sortBy === "openings") {
          return b.openings - a.openings;
        }
        if (sortBy === "deadline") {
          return a.deadline.localeCompare(b.deadline);
        }
        return 0;
      });
  }, [initialInternships, searchQuery, selectedDept, selectedWorkplace, selectedDuration, sortBy]);

  const clearAllFilters = () => {
    setSearchQuery("");
    setSelectedDept("All");
    setSelectedWorkplace("All");
    setSelectedDuration("All");
  };

  const hasActiveFilters =
    searchQuery.trim() !== "" || selectedDept !== "All" || selectedWorkplace !== "All" || selectedDuration !== "All";

  return (
    <div className="w-full">
      {/* Search & Filter Toolbar */}
      <div
        className="w-full p-6 sm:p-8 rounded-3xl border mb-10 shadow-sm"
        style={{
          backgroundColor: "#ffffff",
          borderColor: "var(--token-089b04d3-1763-411b-b92e-81c3ce9de35b, #ddd7ca)"
        }}
      >
        {/* Search bar row */}
        <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
          <div className="relative w-full lg:max-w-xl">
            <Search className="w-4 h-4 text-stone-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search by role, company, craft, or skill (e.g. Three.js, Figma, Florence)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-10 py-3.5 rounded-2xl text-sm border focus:outline-none focus:ring-2 focus:ring-orange-600/30 transition-all font-sans bg-stone-50/60"
              style={{
                borderColor: "var(--token-089b04d3-1763-411b-b92e-81c3ce9de35b, #ddd7ca)",
                color: "var(--token-c62c84d0-2271-4d5a-831d-79456ff3d6d5, #17150f)"
              }}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 rounded-full text-stone-400 hover:text-stone-700"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          <div className="flex items-center gap-3 w-full lg:w-auto flex-wrap sm:flex-nowrap">
            {/* Workplace filter */}
            <div className="flex items-center gap-1.5 w-full sm:w-auto">
              <span className="text-xs font-mono text-stone-500 whitespace-nowrap">Mode:</span>
              <select
                value={selectedWorkplace}
                onChange={(e) => setSelectedWorkplace(e.target.value as WorkplaceType | "All")}
                className="px-3 py-2 rounded-xl text-xs font-sans border bg-white focus:outline-none focus:ring-1 focus:ring-orange-600 w-full sm:w-auto"
                style={{ borderColor: "var(--token-089b04d3-1763-411b-b92e-81c3ce9de35b, #ddd7ca)" }}
              >
                {WORKPLACE_TYPES.map((wp) => (
                  <option key={wp} value={wp}>
                    {wp === "All" ? "All Locations" : wp}
                  </option>
                ))}
              </select>
            </div>

            {/* Duration filter */}
            <div className="flex items-center gap-1.5 w-full sm:w-auto">
              <span className="text-xs font-mono text-stone-500 whitespace-nowrap">Term:</span>
              <select
                value={selectedDuration}
                onChange={(e) => setSelectedDuration(e.target.value)}
                className="px-3 py-2 rounded-xl text-xs font-sans border bg-white focus:outline-none focus:ring-1 focus:ring-orange-600 w-full sm:w-auto"
                style={{ borderColor: "var(--token-089b04d3-1763-411b-b92e-81c3ce9de35b, #ddd7ca)" }}
              >
                <option value="All">All Durations</option>
                <option value="3">3 Months (Summer)</option>
                <option value="6">4–6 Months (Extended)</option>
              </select>
            </div>

            {/* Sort selector */}
            <div className="flex items-center gap-1.5 w-full sm:w-auto">
              <span className="text-xs font-mono text-stone-500 whitespace-nowrap">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as "featured" | "stipend" | "deadline" | "openings")}
                className="px-3 py-2 rounded-xl text-xs font-sans border bg-white focus:outline-none focus:ring-1 focus:ring-orange-600 w-full sm:w-auto"
                style={{ borderColor: "var(--token-089b04d3-1763-411b-b92e-81c3ce9de35b, #ddd7ca)" }}
              >
                <option value="featured">Featured First</option>
                <option value="stipend">Highest Stipend</option>
                <option value="deadline">Soonest Deadline</option>
                <option value="openings">Most Openings</option>
              </select>
            </div>
          </div>
        </div>

        {/* Department Pills */}
        <div
          className="mt-5 pt-4 border-t flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none"
          style={{ borderColor: "rgba(221, 215, 202, 0.6)" }}
        >
          <span className="text-xs font-mono uppercase text-stone-400 mr-1 flex-shrink-0">
            Track:
          </span>
          {DEPARTMENTS.map((dept) => {
            const isActive = selectedDept === dept;
            return (
              <button
                key={dept}
                onClick={() => setSelectedDept(dept)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-sans whitespace-nowrap transition-all flex-shrink-0 ${
                  isActive
                    ? "font-semibold shadow-sm text-white"
                    : "text-stone-600 hover:text-black bg-stone-100 hover:bg-stone-200"
                }`}
                style={{
                  backgroundColor: isActive
                    ? "var(--token-c62c84d0-2271-4d5a-831d-79456ff3d6d5, #17150f)"
                    : undefined
                }}
              >
                {dept}
              </button>
            );
          })}
        </div>
      </div>

      {/* Results Header */}
      <div className="flex items-center justify-between mb-6 px-1">
        <div className="flex items-center gap-2">
          <h3
            className="text-lg font-serif font-normal"
            style={{ fontFamily: "'Young Serif', Georgia, serif" }}
          >
            Available Fellowships & Placements
          </h3>
          <span
            className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium"
            style={{
              backgroundColor: "rgba(240, 83, 43, 0.12)",
              color: "var(--token-6e05a1fc-6c66-49ed-aaad-602284d2af03, #f0532b)"
            }}
          >
            {filteredInternships.length} {filteredInternships.length === 1 ? "opening" : "openings"}
          </span>
        </div>

        {hasActiveFilters && (
          <button
            onClick={clearAllFilters}
            className="text-xs font-mono text-orange-600 hover:text-orange-800 underline flex items-center gap-1"
          >
            Reset all filters
          </button>
        )}
      </div>

      {/* Grid of Internship Cards */}
      {filteredInternships.length === 0 ? (
        <div
          className="p-12 sm:p-16 rounded-3xl border text-center space-y-4 my-8"
          style={{
            backgroundColor: "#ffffff",
            borderColor: "var(--token-089b04d3-1763-411b-b92e-81c3ce9de35b, #ddd7ca)"
          }}
        >
          <div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center mx-auto text-stone-500">
            <Compass className="w-6 h-6 text-stone-400" />
          </div>
          <h4 className="text-xl font-serif">No internships matched your filters</h4>
          <p className="text-sm text-stone-500 max-w-md mx-auto font-sans">
            Try loosening your search terms or clearing specific department filters to explore other studio opportunities.
          </p>
          <button
            onClick={clearAllFilters}
            className="px-5 py-2.5 rounded-xl text-xs font-mono uppercase tracking-wider text-white bg-stone-900 hover:bg-stone-800 transition-colors"
          >
            Clear Search Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredInternships.map((internship) => {
            const isBookmarked = savedSlugs.includes(internship.slug);
            return (
              <div
                key={internship.id}
                className="group relative rounded-3xl border p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-white"
                style={{
                  borderColor: "var(--token-089b04d3-1763-411b-b92e-81c3ce9de35b, #ddd7ca)",
                  color: "var(--token-c62c84d0-2271-4d5a-831d-79456ff3d6d5, #17150f)"
                }}
              >
                <div>
                  {/* Top Bar: Company & Badges */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3.5">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={internship.companyLogo}
                        alt={internship.company}
                        className="w-12 h-12 rounded-2xl object-cover border border-stone-200/80 shadow-xs flex-shrink-0"
                      />
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-xs tracking-wide text-stone-800 font-sans">
                            {internship.company}
                          </span>
                          <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-stone-100 text-stone-600">
                            {internship.partnerTier}
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5 text-xs text-stone-500 font-sans mt-0.5">
                          <MapPin className="w-3 h-3 text-stone-400" />
                          <span>{internship.location}</span>
                          <span>•</span>
                          <span
                            className="font-mono text-[11px] font-medium"
                            style={{
                              color:
                                internship.workplaceType === "Remote"
                                  ? "#059669"
                                  : internship.workplaceType === "Hybrid"
                                  ? "#d97706"
                                  : "#4b5563"
                            }}
                          >
                            {internship.workplaceType}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      {internship.featured && (
                        <span
                          className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase flex items-center gap-1"
                          style={{
                            backgroundColor: "rgba(240, 83, 43, 0.12)",
                            color: "var(--token-6e05a1fc-6c66-49ed-aaad-602284d2af03, #f0532b)"
                          }}
                        >
                          <Sparkles className="w-2.5 h-2.5" />
                          Featured
                        </span>
                      )}
                      <button
                        onClick={(e) => toggleBookmark(internship.slug, e)}
                        title={isBookmarked ? "Remove bookmark" : "Save internship"}
                        className="p-2 rounded-full text-stone-400 hover:text-orange-600 hover:bg-orange-50 transition-colors"
                      >
                        {isBookmarked ? (
                          <BookmarkCheck className="w-4 h-4 text-orange-600 fill-orange-600" />
                        ) : (
                          <Bookmark className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Title & Department */}
                  <div className="mb-3">
                    <span
                      className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-mono tracking-wide mb-2"
                      style={{
                        backgroundColor: "rgba(30, 58, 50, 0.08)",
                        color: "var(--token-d61acb54-0f02-4ada-8301-e50808c78e3a, #1e3a32)"
                      }}
                    >
                      {internship.department}
                    </span>
                    <Link href={`/internships/${internship.slug}`} className="block group-hover:text-orange-600 transition-colors">
                      <h3
                        className="text-xl font-serif font-normal leading-snug tracking-tight"
                        style={{ fontFamily: "'Young Serif', Georgia, serif" }}
                      >
                        {internship.title}
                      </h3>
                    </Link>
                  </div>

                  {/* Overview snippet */}
                  <p className="text-xs text-stone-600 font-sans line-clamp-2 leading-relaxed mb-4">
                    {internship.overview}
                  </p>

                  {/* Skills tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {internship.skills.slice(0, 4).map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded-lg text-[11px] font-mono border bg-stone-50/80 text-stone-700"
                        style={{ borderColor: "rgba(221, 215, 202, 0.8)" }}
                      >
                        {skill}
                      </span>
                    ))}
                    {internship.skills.length > 4 && (
                      <span className="px-1.5 py-1 text-[10px] font-mono text-stone-400 self-center">
                        +{internship.skills.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Bottom Row: Stipend, Duration & Actions */}
                <div
                  className="pt-4 border-t flex items-center justify-between gap-3 mt-2"
                  style={{ borderColor: "var(--token-089b04d3-1763-411b-b92e-81c3ce9de35b, #ddd7ca)" }}
                >
                  <div>
                    <div className="text-sm font-semibold font-mono text-stone-900 tracking-tight">
                      {internship.stipend}
                    </div>
                    <div className="text-[11px] font-mono text-stone-500">
                      {internship.duration} · {internship.openings} {internship.openings === 1 ? "seat" : "seats"}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setApplyingInternship(internship)}
                      className="px-3.5 py-2 rounded-xl text-xs font-mono font-medium tracking-wide uppercase transition-all active:scale-95 text-white"
                      style={{
                        backgroundColor: "var(--token-6e05a1fc-6c66-49ed-aaad-602284d2af03, #f0532b)"
                      }}
                    >
                      Apply Now
                    </button>
                    <Link
                      href={`/internships/${internship.slug}`}
                      className="p-2 rounded-xl border border-stone-200 hover:border-black text-stone-600 hover:text-black transition-colors"
                      title="View full specs"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Application Modal */}
      <ApplyModal
        internship={applyingInternship}
        isOpen={Boolean(applyingInternship)}
        onClose={() => setApplyingInternship(null)}
      />
    </div>
  );
}
