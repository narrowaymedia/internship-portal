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
  Compass,
  Terminal,
  Code2,
  Cpu,
  SlidersHorizontal
} from "lucide-react";

interface InternshipDirectoryProps {
  initialInternships: Internship[];
}

const DEPARTMENTS: (DepartmentType | "All")[] = [
  "All",
  "Python",
  "Web Development",
  "AI Engineer"
];

const WORKPLACE_TYPES: (WorkplaceType | "All")[] = ["All", "Remote", "Hybrid", "On-site"];

export function InternshipDirectory({ initialInternships }: InternshipDirectoryProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDept, setSelectedDept] = useState<DepartmentType | "All">("All");
  const [selectedWorkplace, setSelectedWorkplace] = useState<WorkplaceType | "All">("All");
  const [selectedDuration, setSelectedDuration] = useState<string>("All");
  const [sortBy, setSortBy] = useState<"featured" | "stipend" | "deadline" | "openings">("featured");
  const [savedSlugs, setSavedSlugs] = useState<string[]>([]);
  const [showSavedOnly, setShowSavedOnly] = useState(false);
  const [applyingInternship, setApplyingInternship] = useState<Internship | null>(null);

  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const track = params.get("track");
      if (track && (track === "Python" || track === "Web Development" || track === "AI Engineer")) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setSelectedDept(track as DepartmentType);
      }
      const saved = localStorage.getItem("primer_saved_internships");
      if (saved) {
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
        // Saved only filter
        if (showSavedOnly && !savedSlugs.includes(item.slug)) {
          return false;
        }

        // Search filter
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase();
          const matchTitle = item.title.toLowerCase().includes(q);
          const matchCompany = item.company.toLowerCase().includes(q);
          const matchLocation = item.location.toLowerCase().includes(q);
          const matchSkills = item.skills.some((s) => s.toLowerCase().includes(q));
          const matchDept = item.department.toLowerCase().includes(q);
          const matchMentor = item.mentors?.some((m) => m.name.toLowerCase().includes(q));
          if (!matchTitle && !matchCompany && !matchLocation && !matchSkills && !matchDept && !matchMentor) {
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
  }, [initialInternships, searchQuery, selectedDept, selectedWorkplace, selectedDuration, sortBy, showSavedOnly, savedSlugs]);

  const clearAllFilters = () => {
    setSearchQuery("");
    setSelectedDept("All");
    setSelectedWorkplace("All");
    setSelectedDuration("All");
    setShowSavedOnly(false);
  };

  const hasActiveFilters =
    searchQuery.trim() !== "" ||
    selectedDept !== "All" ||
    selectedWorkplace !== "All" ||
    selectedDuration !== "All" ||
    showSavedOnly;

  const renderTrackIcon = (dept: string) => {
    switch (dept) {
      case "Python":
        return <Terminal className="w-3 h-3 text-emerald-700" />;
      case "Web Development":
        return <Code2 className="w-3 h-3 text-stone-700" />;
      case "AI Engineer":
        return <Cpu className="w-3 h-3 text-orange-700" />;
      default:
        return null;
    }
  };

  const renderTrackBadge = (dept: string) => {
    let bg = "bg-stone-100 text-stone-800 border-stone-200";
    if (dept === "Python") {
      bg = "bg-emerald-50 text-emerald-900 border-emerald-200/80";
    } else if (dept === "Web Development") {
      bg = "bg-stone-100 text-stone-900 border-stone-300";
    } else if (dept === "AI Engineer") {
      bg = "bg-orange-50 text-orange-950 border-orange-200/80";
    }

    return (
      <span
        className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono tracking-wide font-medium border ${bg}`}
      >
        {renderTrackIcon(dept)}
        {dept}
      </span>
    );
  };

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
              placeholder="Search by role, company, skill (e.g. FastAPI, Next.js, PyTorch, RAG)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-10 py-3.5 rounded-2xl text-sm border focus:outline-none focus:ring-2 focus:ring-orange-600/30 transition-all font-sans bg-stone-50/70"
              style={{
                borderColor: "var(--token-089b04d3-1763-411b-b92e-81c3ce9de35b, #ddd7ca)",
                color: "var(--token-c62c84d0-2271-4d5a-831d-79456ff3d6d5, #17150f)"
              }}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 rounded-full text-stone-400 hover:text-stone-700 transition-colors"
                title="Clear search"
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
                className="px-3 py-2 rounded-xl text-xs font-sans border bg-white focus:outline-none focus:ring-1 focus:ring-orange-600 w-full sm:w-auto text-stone-800"
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
                className="px-3 py-2 rounded-xl text-xs font-sans border bg-white focus:outline-none focus:ring-1 focus:ring-orange-600 w-full sm:w-auto text-stone-800"
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
                className="px-3 py-2 rounded-xl text-xs font-sans border bg-white focus:outline-none focus:ring-1 focus:ring-orange-600 w-full sm:w-auto text-stone-800"
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

        {/* Department Pills & Saved Toggle Row */}
        <div
          className="mt-5 pt-4 border-t flex items-center justify-between gap-3 flex-wrap"
          style={{ borderColor: "rgba(221, 215, 202, 0.6)" }}
        >
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none flex-wrap sm:flex-nowrap">
            <span className="text-xs font-mono uppercase text-stone-400 mr-1 flex-shrink-0 flex items-center gap-1">
              <SlidersHorizontal className="w-3.5 h-3.5" />
              Track:
            </span>
            {DEPARTMENTS.map((dept) => {
              const isActive = selectedDept === dept && !showSavedOnly;
              return (
                <button
                  key={dept}
                  onClick={() => {
                    setSelectedDept(dept);
                    setShowSavedOnly(false);
                  }}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-sans whitespace-nowrap transition-all flex items-center gap-1.5 flex-shrink-0 cursor-pointer ${
                    isActive
                      ? "font-semibold shadow-xs text-white"
                      : "text-stone-600 hover:text-black bg-stone-100 hover:bg-stone-200"
                  }`}
                  style={{
                    backgroundColor: isActive
                      ? "var(--token-c62c84d0-2271-4d5a-831d-79456ff3d6d5, #17150f)"
                      : undefined
                  }}
                >
                  {dept !== "All" && renderTrackIcon(dept)}
                  {dept === "All" ? "All Tracks" : dept}
                </button>
              );
            })}
          </div>

          {/* Saved Tab */}
          <button
            onClick={() => setShowSavedOnly((prev) => !prev)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all flex items-center gap-1.5 cursor-pointer flex-shrink-0 ${
              showSavedOnly
                ? "bg-orange-600 text-white font-semibold shadow-xs"
                : "bg-stone-100 text-stone-700 hover:bg-stone-200"
            }`}
          >
            {showSavedOnly ? (
              <BookmarkCheck className="w-3.5 h-3.5 text-white fill-white" />
            ) : (
              <Bookmark className="w-3.5 h-3.5 text-stone-500" />
            )}
            Saved ({savedSlugs.length})
          </button>
        </div>

        {/* Active Filter Chips */}
        {hasActiveFilters && (
          <div className="mt-3 pt-3 border-t flex items-center gap-2 flex-wrap text-xs font-mono text-stone-600" style={{ borderColor: "rgba(221, 215, 202, 0.4)" }}>
            <span className="text-[11px] text-stone-400 uppercase">Active Filters:</span>
            {selectedDept !== "All" && (
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-800">
                Track: {selectedDept}
                <button onClick={() => setSelectedDept("All")} className="hover:text-black cursor-pointer">×</button>
              </span>
            )}
            {selectedWorkplace !== "All" && (
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-800">
                Mode: {selectedWorkplace}
                <button onClick={() => setSelectedWorkplace("All")} className="hover:text-black cursor-pointer">×</button>
              </span>
            )}
            {selectedDuration !== "All" && (
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-800">
                Term: {selectedDuration === "3" ? "3 Months" : "4-6 Months"}
                <button onClick={() => setSelectedDuration("All")} className="hover:text-black cursor-pointer">×</button>
              </span>
            )}
            {showSavedOnly && (
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-orange-100 text-orange-900">
                Saved Only
                <button onClick={() => setShowSavedOnly(false)} className="hover:text-orange-950 cursor-pointer">×</button>
              </span>
            )}
            {searchQuery && (
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-800">
                &ldquo;{searchQuery}&rdquo;
                <button onClick={() => setSearchQuery("")} className="hover:text-black cursor-pointer">×</button>
              </span>
            )}
            <button
              onClick={clearAllFilters}
              className="text-orange-600 hover:text-orange-800 font-medium underline ml-auto text-[11px] cursor-pointer"
            >
              Reset all
            </button>
          </div>
        )}
      </div>

      {/* Results Header */}
      <div className="flex items-center justify-between mb-6 px-1">
        <div className="flex items-center gap-2.5">
          <h3
            className="text-lg font-serif font-normal text-stone-900"
            style={{ fontFamily: "'Young Serif', Georgia, serif" }}
          >
            {showSavedOnly ? "Your Saved Fellowships" : "Available Fellowships & Placements"}
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

        <div className="text-xs font-mono text-stone-500 hidden sm:block">
          Showing {filteredInternships.length} of {initialInternships.length} verified roles
        </div>
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
          <h4 className="text-xl font-serif text-stone-900">
            {showSavedOnly ? "No saved fellowships yet" : "No fellowships matched your criteria"}
          </h4>
          <p className="text-sm text-stone-500 max-w-md mx-auto font-sans leading-relaxed">
            {showSavedOnly
              ? "Click the bookmark icon on any fellowship card to shortlist roles here for later review."
              : "Try loosening your search query, or clear your track/mode filters to view other tech opportunities."}
          </p>
          <button
            onClick={clearAllFilters}
            className="px-5 py-2.5 rounded-xl text-xs font-mono uppercase tracking-wider text-white bg-stone-900 hover:bg-stone-800 transition-colors cursor-pointer"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredInternships.map((internship) => {
            const isBookmarked = savedSlugs.includes(internship.slug);
            const leadMentor = internship.mentors?.[0];

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
                        className="w-12 h-12 rounded-2xl object-cover border border-stone-200/80 shadow-2xs flex-shrink-0"
                      />
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-xs tracking-wide text-stone-800 font-sans">
                            {internship.company}
                          </span>
                          <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-stone-100 text-stone-600 font-medium">
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
                        className="p-2 rounded-full text-stone-400 hover:text-orange-600 hover:bg-orange-50 transition-colors cursor-pointer"
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
                    <div className="mb-2">
                      {renderTrackBadge(internship.department)}
                    </div>
                    <Link
                      href={`/internships/${internship.slug}`}
                      className="block group-hover:text-orange-600 transition-colors"
                    >
                      <h3
                        className="text-xl font-serif font-normal leading-snug tracking-tight text-stone-900"
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

                  {/* Lead Mentor Preview */}
                  {leadMentor && (
                    <div className="flex items-center gap-2 p-2 rounded-xl bg-stone-50 border border-stone-200/60 mb-4">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={leadMentor.avatar}
                        alt={leadMentor.name}
                        className="w-6 h-6 rounded-full object-cover flex-shrink-0"
                      />
                      <div className="text-[11px] font-sans text-stone-700 truncate">
                        <span className="font-medium text-stone-900">{leadMentor.name}</span>
                        <span className="text-stone-400 mx-1">·</span>
                        <span className="text-stone-500">{leadMentor.role}</span>
                      </div>
                    </div>
                  )}

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
                      className="px-3.5 py-2 rounded-xl text-xs font-mono font-medium tracking-wide uppercase transition-all active:scale-95 text-white cursor-pointer shadow-xs hover:shadow-md"
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
