"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Internship } from "@/types/internship";
import { ApplyModal } from "./ApplyModal";
import {
  Building2,
  MapPin,
  DollarSign,
  Bookmark,
  BookmarkCheck,
  Share2,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Award,
  ChevronRight,
  Check
} from "lucide-react";

interface InternshipDetailViewProps {
  internship: Internship;
}

export function InternshipDetailView({ internship }: InternshipDetailViewProps) {
  const [isApplyOpen, setIsApplyOpen] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("primer_saved_internships");
      if (saved) {
        const list: string[] = JSON.parse(saved);
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setIsBookmarked(list.includes(internship.slug));
      }
    } catch {
      // ignore
    }
  }, [internship.slug]);

  const toggleBookmark = () => {
    try {
      const saved = localStorage.getItem("primer_saved_internships");
      const list: string[] = saved ? JSON.parse(saved) : [];
      let updated: string[];
      if (list.includes(internship.slug)) {
        updated = list.filter((s) => s !== internship.slug);
        setIsBookmarked(false);
      } else {
        updated = [...list, internship.slug];
        setIsBookmarked(true);
      }
      localStorage.setItem("primer_saved_internships", JSON.stringify(updated));
    } catch {
      // ignore
    }
  };

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-xs font-mono text-stone-500 mb-8 flex-wrap">
        <Link href="/" className="hover:text-black transition-colors">
          Home
        </Link>
        <ChevronRight className="w-3 h-3 text-stone-400" />
        <Link href="/internships" className="hover:text-black transition-colors">
          Internships
        </Link>
        <ChevronRight className="w-3 h-3 text-stone-400" />
        <span className="text-stone-900 font-medium truncate max-w-xs">{internship.title}</span>
      </nav>

      {/* Hero Header Card */}
      <div
        className="rounded-3xl border p-6 sm:p-10 mb-10 shadow-sm bg-white"
        style={{
          borderColor: "var(--token-089b04d3-1763-411b-b92e-81c3ce9de35b, #ddd7ca)"
        }}
      >
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
          <div className="flex items-start gap-5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={internship.companyLogo}
              alt={internship.company}
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover border border-stone-200 shadow-sm flex-shrink-0"
            />
            <div>
              <div className="flex items-center gap-2.5 mb-2 flex-wrap">
                <span
                  className="px-3 py-0.5 rounded-full text-xs font-mono font-medium tracking-wide"
                  style={{
                    backgroundColor: "rgba(30, 58, 50, 0.08)",
                    color: "var(--token-d61acb54-0f02-4ada-8301-e50808c78e3a, #1e3a32)"
                  }}
                >
                  {internship.department}
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-stone-100 text-stone-700">
                  {internship.partnerTier}
                </span>
                <span
                  className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium"
                  style={{
                    backgroundColor:
                      internship.workplaceType === "Remote"
                        ? "#ecfdf5"
                        : internship.workplaceType === "Hybrid"
                        ? "#fffbeb"
                        : "#f3f4f6",
                    color:
                      internship.workplaceType === "Remote"
                        ? "#047857"
                        : internship.workplaceType === "Hybrid"
                        ? "#b45309"
                        : "#374151"
                  }}
                >
                  {internship.workplaceType}
                </span>
              </div>

              <h1
                className="text-2xl sm:text-4xl font-serif font-normal tracking-tight text-stone-900 mb-3"
                style={{ fontFamily: "'Young Serif', Georgia, serif" }}
              >
                {internship.title}
              </h1>

              <div className="flex items-center gap-4 text-xs sm:text-sm font-sans text-stone-600 flex-wrap">
                <span className="flex items-center gap-1.5 font-medium text-stone-800">
                  <Building2 className="w-4 h-4 text-stone-400" />
                  {internship.company}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-stone-400" />
                  {internship.location}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5 font-mono text-emerald-800 font-semibold">
                  <DollarSign className="w-4 h-4 text-emerald-600" />
                  {internship.stipend}
                </span>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex items-center gap-2 self-start md:self-auto flex-wrap sm:flex-nowrap">
            <button
              onClick={toggleBookmark}
              className="p-3 rounded-2xl border border-stone-200 hover:border-black transition-colors text-stone-700 bg-white"
              title={isBookmarked ? "Remove bookmark" : "Save opportunity"}
            >
              {isBookmarked ? (
                <BookmarkCheck className="w-5 h-5 text-orange-600 fill-orange-600" />
              ) : (
                <Bookmark className="w-5 h-5" />
              )}
            </button>
            <button
              onClick={handleShare}
              className="p-3 rounded-2xl border border-stone-200 hover:border-black transition-colors text-stone-700 bg-white"
              title="Copy link"
            >
              {copiedLink ? <Check className="w-5 h-5 text-emerald-600" /> : <Share2 className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setIsApplyOpen(true)}
              className="px-6 py-3 rounded-2xl font-mono text-xs font-semibold tracking-wider uppercase text-white shadow-md hover:shadow-lg transition-all active:scale-95"
              style={{
                backgroundColor: "var(--token-6e05a1fc-6c66-49ed-aaad-602284d2af03, #f0532b)"
              }}
            >
              Apply for Placement
            </button>
          </div>
        </div>

        {/* Highlight Metrics Grid */}
        <div
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t"
          style={{ borderColor: "rgba(221, 215, 202, 0.7)" }}
        >
          <div>
            <div className="text-[11px] font-mono uppercase text-stone-400 mb-1">Duration</div>
            <div className="text-sm font-semibold font-mono text-stone-800">{internship.duration}</div>
          </div>
          <div>
            <div className="text-[11px] font-mono uppercase text-stone-400 mb-1">Time Commitment</div>
            <div className="text-sm font-semibold font-mono text-stone-800">{internship.commitment}</div>
          </div>
          <div>
            <div className="text-[11px] font-mono uppercase text-stone-400 mb-1">Application Deadline</div>
            <div className="text-sm font-semibold font-mono text-stone-800">{internship.deadline}</div>
          </div>
          <div>
            <div className="text-[11px] font-mono uppercase text-stone-400 mb-1">Total Openings</div>
            <div className="text-sm font-semibold font-mono text-stone-800">
              {internship.openings} {internship.openings === 1 ? "seat" : "seats"} available
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Role Details */}
        <div className="lg:col-span-2 space-y-8">
          {/* Overview */}
          <section
            className="rounded-3xl border p-6 sm:p-8 bg-white"
            style={{ borderColor: "var(--token-089b04d3-1763-411b-b92e-81c3ce9de35b, #ddd7ca)" }}
          >
            <h2
              className="text-xl font-serif font-normal mb-4"
              style={{ fontFamily: "'Young Serif', Georgia, serif" }}
            >
              The Placement & Studio Context
            </h2>
            <p className="text-sm sm:text-base text-stone-700 leading-relaxed font-sans mb-6">
              {internship.overview}
            </p>

            <h3 className="text-xs font-mono uppercase tracking-wider text-stone-400 mb-3">
              Core Technical & Creative Focus
            </h3>
            <div className="flex flex-wrap gap-2">
              {internship.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 rounded-xl text-xs font-mono border bg-stone-50 text-stone-800"
                  style={{ borderColor: "var(--token-089b04d3-1763-411b-b92e-81c3ce9de35b, #ddd7ca)" }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>

          {/* Responsibilities */}
          <section
            className="rounded-3xl border p-6 sm:p-8 bg-white"
            style={{ borderColor: "var(--token-089b04d3-1763-411b-b92e-81c3ce9de35b, #ddd7ca)" }}
          >
            <h2
              className="text-xl font-serif font-normal mb-4"
              style={{ fontFamily: "'Young Serif', Georgia, serif" }}
            >
              What You Will Build & Deliver
            </h2>
            <ul className="space-y-3">
              {internship.responsibilities.map((resp, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-stone-700 font-sans leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-orange-600 flex-shrink-0 mt-0.5" />
                  <span>{resp}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Milestones Curriculum */}
          <section
            className="rounded-3xl border p-6 sm:p-8 bg-white"
            style={{ borderColor: "var(--token-089b04d3-1763-411b-b92e-81c3ce9de35b, #ddd7ca)" }}
          >
            <h2
              className="text-xl font-serif font-normal mb-2"
              style={{ fontFamily: "'Young Serif', Georgia, serif" }}
            >
              Mentorship Curriculum & Phases
            </h2>
            <p className="text-xs font-sans text-stone-500 mb-6">
              Every Primer-affiliated internship is structured with clear milestones and weekly reviews with your lead mentor.
            </p>

            <div className="space-y-4">
              {internship.milestones.map((m, i) => (
                <div
                  key={i}
                  className="p-5 rounded-2xl border bg-stone-50/50 flex flex-col sm:flex-row sm:items-start gap-4"
                  style={{ borderColor: "rgba(221, 215, 202, 0.7)" }}
                >
                  <div
                    className="px-3 py-1 rounded-lg text-xs font-mono font-bold tracking-wider uppercase flex-shrink-0 self-start"
                    style={{
                      backgroundColor: "var(--token-c62c84d0-2271-4d5a-831d-79456ff3d6d5, #17150f)",
                      color: "#ffffff"
                    }}
                  >
                    {m.phase}
                  </div>
                  <div>
                    <h4 className="font-serif text-base font-normal text-stone-900 mb-1">{m.title}</h4>
                    <p className="text-xs sm:text-sm text-stone-600 font-sans leading-relaxed">{m.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Qualifications & Profile */}
          <section
            className="rounded-3xl border p-6 sm:p-8 bg-white"
            style={{ borderColor: "var(--token-089b04d3-1763-411b-b92e-81c3ce9de35b, #ddd7ca)" }}
          >
            <h2
              className="text-xl font-serif font-normal mb-4"
              style={{ fontFamily: "'Young Serif', Georgia, serif" }}
            >
              What We Are Looking For
            </h2>
            <ul className="space-y-3">
              {internship.qualifications.map((qual, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-stone-700 font-sans leading-relaxed">
                  <div className="w-2 h-2 rounded-full bg-stone-400 mt-2 flex-shrink-0" />
                  <span>{qual}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Direct Course Pathway Banner */}
          {internship.relatedCourseSlug && (
            <div
              className="rounded-3xl border p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6"
              style={{
                backgroundColor: "rgba(30, 58, 50, 0.05)",
                borderColor: "rgba(30, 58, 50, 0.2)"
              }}
            >
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-emerald-800" />
                  <span className="text-xs font-mono uppercase tracking-wider text-emerald-900 font-bold">
                    Fast-Track Preparation Pathway
                  </span>
                </div>
                <h3
                  className="text-xl font-serif font-normal text-stone-900"
                  style={{ fontFamily: "'Young Serif', Georgia, serif" }}
                >
                  Prepare with &ldquo;{internship.relatedCourseTitle}&rdquo;
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 font-sans max-w-xl">
                  Applicants who complete the hands-on project in this masterclass have their portfolio fast-tracked for an
                  interview by {internship.company}&apos;s hiring team.
                </p>
              </div>

              <Link
                href={`/courses/${internship.relatedCourseSlug}`}
                className="px-5 py-3 rounded-2xl font-mono text-xs uppercase font-semibold text-white whitespace-nowrap flex items-center gap-2 transition-transform active:scale-95 flex-shrink-0"
                style={{
                  backgroundColor: "var(--token-d61acb54-0f02-4ada-8301-e50808c78e3a, #1e3a32)"
                }}
              >
                View Course Syllabus
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          )}
        </div>

        {/* Right Sticky Sidebar */}
        <div className="space-y-6">
          {/* Apply Box */}
          <div
            className="rounded-3xl border p-6 sm:p-7 bg-white shadow-sm sticky top-24"
            style={{ borderColor: "var(--token-089b04d3-1763-411b-b92e-81c3ce9de35b, #ddd7ca)" }}
          >
            <div className="mb-4">
              <span className="text-xs font-mono uppercase text-stone-400">Monthly Compensation</span>
              <div className="text-2xl font-serif font-normal text-stone-900 mt-0.5">{internship.stipend}</div>
              <div className="text-xs text-stone-500 font-mono mt-0.5">
                {internship.duration} · {internship.commitment}
              </div>
            </div>

            <button
              onClick={() => setIsApplyOpen(true)}
              className="w-full py-3.5 rounded-2xl font-mono text-xs font-bold tracking-wider uppercase text-white shadow-md hover:shadow-lg transition-all active:scale-95 text-center mb-3"
              style={{
                backgroundColor: "var(--token-6e05a1fc-6c66-49ed-aaad-602284d2af03, #f0532b)"
              }}
            >
              Apply Now
            </button>

            <button
              onClick={toggleBookmark}
              className="w-full py-2.5 rounded-xl border border-stone-200 text-xs font-mono uppercase tracking-wider text-stone-700 hover:bg-stone-50 transition-colors flex items-center justify-center gap-2 mb-6"
            >
              {isBookmarked ? (
                <>
                  <BookmarkCheck className="w-4 h-4 text-orange-600 fill-orange-600" />
                  Saved to Dashboard
                </>
              ) : (
                <>
                  <Bookmark className="w-4 h-4" />
                  Save for Later
                </>
              )}
            </button>

            {/* Perks List */}
            <div className="pt-4 border-t space-y-3" style={{ borderColor: "rgba(221, 215, 202, 0.7)" }}>
              <div className="text-xs font-mono uppercase tracking-wider text-stone-400 font-semibold">
                Fellowship Perks
              </div>
              <ul className="space-y-2">
                {internship.perks.map((perk, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-stone-600 font-sans leading-relaxed">
                    <Award className="w-3.5 h-3.5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span>{perk}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mentor Profile */}
            {internship.mentors.length > 0 && (
              <div className="pt-6 mt-6 border-t" style={{ borderColor: "rgba(221, 215, 202, 0.7)" }}>
                <div className="text-xs font-mono uppercase tracking-wider text-stone-400 font-semibold mb-3">
                  Your Lead Mentor
                </div>
                <div className="flex items-start gap-3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={internship.mentors[0].avatar}
                    alt={internship.mentors[0].name}
                    className="w-11 h-11 rounded-xl object-cover border border-stone-200 flex-shrink-0"
                  />
                  <div>
                    <div className="text-sm font-semibold text-stone-900">{internship.mentors[0].name}</div>
                    <div className="text-[11px] font-mono text-stone-500">{internship.mentors[0].role}</div>
                    <p className="text-xs text-stone-600 mt-1.5 leading-relaxed font-sans">
                      {internship.mentors[0].bio}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Application Modal */}
      <ApplyModal
        internship={internship}
        isOpen={isApplyOpen}
        onClose={() => setIsApplyOpen(false)}
      />
    </div>
  );
}
