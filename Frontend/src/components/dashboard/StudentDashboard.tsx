"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { StudentApplication, ApplicationStatus } from "@/types/internship";
import { defaultMockApplications, internships } from "@/data/internships";
import {
  Briefcase,
  Calendar,
  Bookmark,
  Sparkles,
  ArrowRight,
  Trash2,
  MapPin
} from "lucide-react";

export function StudentDashboard() {
  const [applications, setApplications] = useState<StudentApplication[]>(defaultMockApplications);
  const [savedSlugs, setSavedSlugs] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<"applications" | "saved" | "pathways">("applications");
  const [selectedStatus, setSelectedStatus] = useState<ApplicationStatus | "All">("All");

  useEffect(() => {
    try {
      const stored = localStorage.getItem("primer_internship_applications");
      if (stored) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setApplications(JSON.parse(stored));
      } else {
        localStorage.setItem("primer_internship_applications", JSON.stringify(defaultMockApplications));
      }

      const saved = localStorage.getItem("primer_saved_internships");
      if (saved) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setSavedSlugs(JSON.parse(saved));
      } else {
        const defaultSaved = ["applied-ai-generative-design-fellow", "culinary-arts-kitchen-staging"];
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setSavedSlugs(defaultSaved);
        localStorage.setItem("primer_saved_internships", JSON.stringify(defaultSaved));
      }
    } catch {
      // ignore
    }

    const handleUpdate = (e: Event) => {
      const customEvent = e as CustomEvent<StudentApplication[]>;
      if (customEvent.detail) {
        setApplications(customEvent.detail);
      }
    };
    window.addEventListener("primer_applications_updated", handleUpdate);
    return () => window.removeEventListener("primer_applications_updated", handleUpdate);
  }, []);

  const handleDeleteApplication = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    if (!confirm("Are you sure you want to withdraw this application?")) return;
    const updated = applications.filter((a) => a.id !== id);
    setApplications(updated);
    try {
      localStorage.setItem("primer_internship_applications", JSON.stringify(updated));
    } catch {
      // ignore
    }
  };

  const handleRemoveSaved = (slug: string, e: React.MouseEvent) => {
    e.preventDefault();
    const updated = savedSlugs.filter((s) => s !== slug);
    setSavedSlugs(updated);
    try {
      localStorage.setItem("primer_saved_internships", JSON.stringify(updated));
    } catch {
      // ignore
    }
  };

  const totalApps = applications.length;
  const inReviewCount = applications.filter((a) => a.status === "Under Review" || a.status === "Submitted").length;
  const interviewCount = applications.filter((a) => a.status === "Interview Scheduled").length;

  const filteredApps = applications.filter((a) => {
    if (selectedStatus === "All") return true;
    return a.status === selectedStatus;
  });

  const savedInternshipsList = internships.filter((item) => savedSlugs.includes(item.slug));

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      {/* Page Title & Profile Banner */}
      <div
        className="rounded-3xl border p-6 sm:p-10 mb-8 bg-white shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6"
        style={{ borderColor: "var(--token-089b04d3-1763-411b-b92e-81c3ce9de35b, #ddd7ca)" }}
      >
        <div className="space-y-1">
          <div className="flex items-center gap-2 mb-1">
            <span
              className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium tracking-wide uppercase"
              style={{
                backgroundColor: "rgba(240, 83, 43, 0.12)",
                color: "var(--token-6e05a1fc-6c66-49ed-aaad-602284d2af03, #f0532b)"
              }}
            >
              Candidate Portal
            </span>
            <span className="text-xs font-mono text-stone-500">• Summer 2027 Placements</span>
          </div>
          <h1
            className="text-2xl sm:text-4xl font-serif font-normal tracking-tight text-stone-900"
            style={{ fontFamily: "'Young Serif', Georgia, serif" }}
          >
            Student Application Dashboard
          </h1>
          <p className="text-xs sm:text-sm text-stone-600 font-sans">
            Track your verified studio placements, upcoming technical interviews, and preparatory course completions.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/internships"
            className="px-5 py-3 rounded-2xl font-mono text-xs uppercase font-semibold text-white whitespace-nowrap flex items-center gap-2 transition-transform active:scale-95 shadow-sm"
            style={{
              backgroundColor: "var(--token-c62c84d0-2271-4d5a-831d-79456ff3d6d5, #17150f)"
            }}
          >
            Explore Fellowships
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* KPI Stats Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
        <div
          className="rounded-2xl border p-5 bg-white shadow-xs"
          style={{ borderColor: "var(--token-089b04d3-1763-411b-b92e-81c3ce9de35b, #ddd7ca)" }}
        >
          <div className="text-xs font-mono text-stone-500 uppercase tracking-wider mb-1">Applications</div>
          <div className="text-3xl font-serif font-normal text-stone-900">{totalApps}</div>
          <div className="text-[11px] font-mono text-stone-400 mt-1">Submitted dossiers</div>
        </div>

        <div
          className="rounded-2xl border p-5 bg-white shadow-xs"
          style={{ borderColor: "var(--token-089b04d3-1763-411b-b92e-81c3ce9de35b, #ddd7ca)" }}
        >
          <div className="text-xs font-mono text-stone-500 uppercase tracking-wider mb-1">In Review</div>
          <div className="text-3xl font-serif font-normal text-amber-700">{inReviewCount}</div>
          <div className="text-[11px] font-mono text-stone-400 mt-1">Under studio assessment</div>
        </div>

        <div
          className="rounded-2xl border p-5 bg-white shadow-xs"
          style={{ borderColor: "var(--token-089b04d3-1763-411b-b92e-81c3ce9de35b, #ddd7ca)" }}
        >
          <div className="text-xs font-mono text-stone-500 uppercase tracking-wider mb-1">Interviews</div>
          <div className="text-3xl font-serif font-normal text-emerald-700">{interviewCount}</div>
          <div className="text-[11px] font-mono text-stone-400 mt-1">Direct studio calls</div>
        </div>

        <div
          className="rounded-2xl border p-5 bg-white shadow-xs"
          style={{ borderColor: "var(--token-089b04d3-1763-411b-b92e-81c3ce9de35b, #ddd7ca)" }}
        >
          <div className="text-xs font-mono text-stone-500 uppercase tracking-wider mb-1">Saved Openings</div>
          <div className="text-3xl font-serif font-normal text-stone-900">{savedSlugs.length}</div>
          <div className="text-[11px] font-mono text-stone-400 mt-1">Bookmarked positions</div>
        </div>
      </div>

      {/* Tabs */}
      <div
        className="flex items-center gap-3 border-b pb-4 mb-8 overflow-x-auto"
        style={{ borderColor: "var(--token-089b04d3-1763-411b-b92e-81c3ce9de35b, #ddd7ca)" }}
      >
        <button
          onClick={() => setActiveTab("applications")}
          className={`px-4 py-2 rounded-xl text-xs font-mono uppercase tracking-wider transition-all flex items-center gap-2 ${
            activeTab === "applications"
              ? "bg-stone-900 text-white font-bold"
              : "text-stone-600 hover:text-black bg-stone-100 hover:bg-stone-200"
          }`}
        >
          <Briefcase className="w-3.5 h-3.5" />
          Active Applications ({applications.length})
        </button>

        <button
          onClick={() => setActiveTab("saved")}
          className={`px-4 py-2 rounded-xl text-xs font-mono uppercase tracking-wider transition-all flex items-center gap-2 ${
            activeTab === "saved"
              ? "bg-stone-900 text-white font-bold"
              : "text-stone-600 hover:text-black bg-stone-100 hover:bg-stone-200"
          }`}
        >
          <Bookmark className="w-3.5 h-3.5" />
          Saved Placements ({savedSlugs.length})
        </button>

        <button
          onClick={() => setActiveTab("pathways")}
          className={`px-4 py-2 rounded-xl text-xs font-mono uppercase tracking-wider transition-all flex items-center gap-2 ${
            activeTab === "pathways"
              ? "bg-stone-900 text-white font-bold"
              : "text-stone-600 hover:text-black bg-stone-100 hover:bg-stone-200"
          }`}
        >
          <Sparkles className="w-3.5 h-3.5" />
          Prep Pathways & Verified Badges
        </button>
      </div>

      {/* TAB 1: APPLICATIONS */}
      {activeTab === "applications" && (
        <div className="space-y-6">
          {/* Filter Pills */}
          <div className="flex items-center justify-between flex-wrap gap-3">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-mono text-stone-400">Filter by Status:</span>
              {(["All", "Submitted", "Under Review", "Interview Scheduled", "Offer Extended"] as const).map((st) => (
                <button
                  key={st}
                  onClick={() => setSelectedStatus(st as ApplicationStatus | "All")}
                  className={`px-3 py-1 rounded-full text-xs font-mono transition-colors ${
                    selectedStatus === st
                      ? "bg-stone-800 text-white font-semibold"
                      : "bg-white border text-stone-600 hover:bg-stone-100"
                  }`}
                  style={{ borderColor: "var(--token-089b04d3-1763-411b-b92e-81c3ce9de35b, #ddd7ca)" }}
                >
                  {st}
                </button>
              ))}
            </div>

            <div className="text-xs font-mono text-stone-500">
              Showing {filteredApps.length} of {applications.length}
            </div>
          </div>

          {filteredApps.length === 0 ? (
            <div
              className="p-12 rounded-3xl border text-center space-y-4 bg-white"
              style={{ borderColor: "var(--token-089b04d3-1763-411b-b92e-81c3ce9de35b, #ddd7ca)" }}
            >
              <div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center mx-auto text-stone-400">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif">No applications found in this view</h3>
              <p className="text-xs sm:text-sm text-stone-500 font-sans max-w-sm mx-auto">
                Explore our directory of studio fellowships to discover new openings and submit your portfolio.
              </p>
              <Link
                href="/internships"
                className="inline-block px-5 py-2.5 rounded-xl text-xs font-mono uppercase tracking-wider text-white bg-stone-900 hover:bg-stone-800 transition-colors"
              >
                Browse All Openings
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredApps.map((app) => {
                const isInterview = app.status === "Interview Scheduled";
                return (
                  <div
                    key={app.id}
                    className="p-6 rounded-3xl border bg-white shadow-xs hover:shadow-md transition-shadow"
                    style={{ borderColor: "var(--token-089b04d3-1763-411b-b92e-81c3ce9de35b, #ddd7ca)" }}
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      {/* Company & Title */}
                      <div className="flex items-start gap-4">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={app.companyLogo}
                          alt={app.company}
                          className="w-14 h-14 rounded-2xl object-cover border border-stone-200 flex-shrink-0"
                        />
                        <div>
                          <div className="flex items-center gap-2 mb-1 flex-wrap">
                            <span className="text-xs font-semibold text-stone-800">{app.company}</span>
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-stone-100 text-stone-600">
                              {app.department}
                            </span>
                            <span className="text-[10px] font-mono text-emerald-800 font-semibold">{app.stipend}</span>
                          </div>
                          <Link
                            href={`/internships/${app.internshipSlug}`}
                            className="text-lg font-serif font-normal text-stone-900 hover:text-orange-600 transition-colors"
                            style={{ fontFamily: "'Young Serif', Georgia, serif" }}
                          >
                            {app.internshipTitle}
                          </Link>
                          <div className="flex items-center gap-3 text-xs text-stone-500 font-sans mt-1">
                            <span className="flex items-center gap-1">
                              <MapPin className="w-3 h-3 text-stone-400" />
                              {app.location} ({app.workplaceType})
                            </span>
                            <span>•</span>
                            <span className="font-mono text-[11px]">Applied {app.appliedDate}</span>
                          </div>
                        </div>
                      </div>

                      {/* Status & Action */}
                      <div className="flex flex-col sm:flex-row sm:items-center gap-3 self-start md:self-auto">
                        <div className="text-left sm:text-right">
                          <span
                            className="inline-block px-3 py-1 rounded-full text-xs font-mono font-semibold"
                            style={{
                              backgroundColor:
                                app.status === "Interview Scheduled"
                                  ? "#ecfdf5"
                                  : app.status === "Under Review"
                                  ? "#fffbeb"
                                  : app.status === "Offer Extended"
                                  ? "#eff6ff"
                                  : "#f3f4f6",
                              color:
                                app.status === "Interview Scheduled"
                                  ? "#047857"
                                  : app.status === "Under Review"
                                  ? "#b45309"
                                  : app.status === "Offer Extended"
                                  ? "#1d4ed8"
                                  : "#374151"
                            }}
                          >
                            {app.status}
                          </span>
                          <div className="text-[11px] font-mono text-stone-400 mt-0.5">
                            Updated {app.statusUpdateDate}
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <Link
                            href={`/internships/${app.internshipSlug}`}
                            className="px-3.5 py-2 rounded-xl border border-stone-200 hover:border-black text-xs font-mono uppercase tracking-wider text-stone-800 hover:bg-stone-50 transition-colors"
                          >
                            View Placement
                          </Link>
                          <button
                            onClick={(e) => handleDeleteApplication(app.id, e)}
                            title="Withdraw application"
                            className="p-2 rounded-xl text-stone-400 hover:text-red-600 hover:bg-red-50 transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Interview Alert Box */}
                    {isInterview && app.interviewDate && (
                      <div
                        className="mt-4 p-4 rounded-2xl border flex items-center justify-between gap-4"
                        style={{
                          backgroundColor: "rgba(16, 185, 129, 0.08)",
                          borderColor: "rgba(16, 185, 129, 0.25)"
                        }}
                      >
                        <div className="flex items-center gap-3">
                          <Calendar className="w-5 h-5 text-emerald-800 flex-shrink-0" />
                          <div>
                            <div className="text-xs font-semibold text-emerald-950 font-sans">
                              Studio Interview Confirmed
                            </div>
                            <div className="text-xs font-mono text-emerald-800">{app.interviewDate}</div>
                          </div>
                        </div>
                        <span className="text-xs font-mono text-emerald-900 underline font-medium cursor-pointer">
                          Join Studio Video Room →
                        </span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* TAB 2: SAVED FELLOWSHIPS */}
      {activeTab === "saved" && (
        <div className="space-y-4">
          {savedInternshipsList.length === 0 ? (
            <div
              className="p-12 rounded-3xl border text-center space-y-4 bg-white"
              style={{ borderColor: "var(--token-089b04d3-1763-411b-b92e-81c3ce9de35b, #ddd7ca)" }}
            >
              <Bookmark className="w-8 h-8 text-stone-300 mx-auto" />
              <h3 className="text-xl font-serif">No saved opportunities yet</h3>
              <p className="text-xs sm:text-sm text-stone-500 font-sans max-w-sm mx-auto">
                Bookmark fellowships from the internship directory to compare requirements and prepare your dossier.
              </p>
              <Link
                href="/internships"
                className="inline-block px-5 py-2.5 rounded-xl text-xs font-mono uppercase tracking-wider text-white bg-stone-900 hover:bg-stone-800 transition-colors"
              >
                Find Fellowships
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {savedInternshipsList.map((item) => (
                <div
                  key={item.id}
                  className="rounded-3xl border p-6 bg-white shadow-xs flex flex-col justify-between"
                  style={{ borderColor: "var(--token-089b04d3-1763-411b-b92e-81c3ce9de35b, #ddd7ca)" }}
                >
                  <div>
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div className="flex items-center gap-3">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={item.companyLogo}
                          alt={item.company}
                          className="w-11 h-11 rounded-xl object-cover border border-stone-200"
                        />
                        <div>
                          <div className="text-xs font-semibold text-stone-800">{item.company}</div>
                          <div className="text-[11px] font-mono text-stone-500">
                            {item.location} ({item.workplaceType})
                          </div>
                        </div>
                      </div>
                      <button
                        onClick={(e) => handleRemoveSaved(item.slug, e)}
                        className="text-stone-400 hover:text-red-600 p-1.5 rounded-lg hover:bg-red-50 transition-colors"
                        title="Remove from saved"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <h4
                      className="text-lg font-serif font-normal text-stone-900 mb-2 leading-snug"
                      style={{ fontFamily: "'Young Serif', Georgia, serif" }}
                    >
                      {item.title}
                    </h4>
                    <p className="text-xs text-stone-600 font-sans line-clamp-2 mb-4 leading-relaxed">
                      {item.overview}
                    </p>
                  </div>

                  <div
                    className="pt-4 border-t flex items-center justify-between"
                    style={{ borderColor: "var(--token-089b04d3-1763-411b-b92e-81c3ce9de35b, #ddd7ca)" }}
                  >
                    <div className="text-xs font-mono font-semibold text-stone-900">{item.stipend}</div>
                    <Link
                      href={`/internships/${item.slug}`}
                      className="px-4 py-2 rounded-xl text-xs font-mono font-medium tracking-wide uppercase text-white transition-all active:scale-95"
                      style={{ backgroundColor: "var(--token-6e05a1fc-6c66-49ed-aaad-602284d2af03, #f0532b)" }}
                    >
                      Apply Now
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* TAB 3: PREP PATHWAYS & FAST-TRACK COURSES */}
      {activeTab === "pathways" && (
        <div className="space-y-6">
          <div
            className="p-6 sm:p-8 rounded-3xl border bg-gradient-to-r from-emerald-50 to-stone-50"
            style={{ borderColor: "rgba(30, 58, 50, 0.2)" }}
          >
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-5 h-5 text-emerald-800" />
              <span className="text-xs font-mono uppercase font-bold tracking-wider text-emerald-900">
                Direct Studio Interview Pipeline
              </span>
            </div>
            <h3
              className="text-xl sm:text-2xl font-serif font-normal text-stone-900 mb-2"
              style={{ fontFamily: "'Young Serif', Georgia, serif" }}
            >
              Master the Craft, Secure the Interview
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 font-sans max-w-2xl leading-relaxed">
              Primer partners with top design agencies, fine arts ateliers, and tech startups. When you complete a course project
              and receive a teacher mark of excellence, your portfolio bypasses standard ATS filters and gets placed directly in front of the studio partner&apos;s hiring directors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div
              className="p-6 rounded-3xl border bg-white shadow-xs"
              style={{ borderColor: "var(--token-089b04d3-1763-411b-b92e-81c3ce9de35b, #ddd7ca)" }}
            >
              <div className="text-xs font-mono text-stone-400 uppercase tracking-wider mb-2">Step 01</div>
              <h4 className="font-serif text-lg font-normal mb-2">Enroll in a Studio Masterclass</h4>
              <p className="text-xs text-stone-600 leading-relaxed font-sans mb-4">
                Choose any course linked to our partner fellowships (such as Graphic Design Basics or Filmmaking on a Budget).
              </p>
              <Link href="/courses" className="text-xs font-mono text-orange-600 font-semibold underline">
                Browse Masterclasses →
              </Link>
            </div>

            <div
              className="p-6 rounded-3xl border bg-white shadow-xs"
              style={{ borderColor: "var(--token-089b04d3-1763-411b-b92e-81c3ce9de35b, #ddd7ca)" }}
            >
              <div className="text-xs font-mono text-stone-400 uppercase tracking-wider mb-2">Step 02</div>
              <h4 className="font-serif text-lg font-normal mb-2">Build & Submit Real Project</h4>
              <p className="text-xs text-stone-600 leading-relaxed font-sans mb-4">
                Execute the tactile project assignment. Your teacher reviews, marks up, and validates your finished piece.
              </p>
              <span className="text-xs font-mono text-stone-500">Teacher feedback in 5 days</span>
            </div>

            <div
              className="p-6 rounded-3xl border bg-white shadow-xs"
              style={{ borderColor: "var(--token-089b04d3-1763-411b-b92e-81c3ce9de35b, #ddd7ca)" }}
            >
              <div className="text-xs font-mono text-stone-400 uppercase tracking-wider mb-2">Step 03</div>
              <h4 className="font-serif text-lg font-normal mb-2">Fast-Track Studio Interview</h4>
              <p className="text-xs text-stone-600 leading-relaxed font-sans mb-4">
                Your verified dossier is automatically presented to partner studios for priority placement review.
              </p>
              <Link href="/internships" className="text-xs font-mono text-emerald-800 font-semibold underline">
                See Partner Studios →
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
