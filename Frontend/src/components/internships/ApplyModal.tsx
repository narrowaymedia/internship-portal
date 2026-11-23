"use client";

import React, { useState, useEffect } from "react";
import { Internship, StudentApplication } from "@/types/internship";
import { X, CheckCircle2, UploadCloud, Sparkles, Building2, MapPin, DollarSign, ArrowRight, ShieldCheck } from "lucide-react";

interface ApplyModalProps {
  internship: Internship | null;
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: (app: StudentApplication) => void;
}

export function ApplyModal({ internship, isOpen, onClose, onSuccess }: ApplyModalProps) {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [university, setUniversity] = useState("");
  const [graduationYear, setGraduationYear] = useState("2027");
  const [portfolioUrl, setPortfolioUrl] = useState("");
  const [coverNote, setCoverNote] = useState("");
  const [fileName, setFileName] = useState("resume_portfolio.pdf");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setStep(1);
      setError(null);
      try {
        const savedProfile = localStorage.getItem("primer_student_profile");
        if (savedProfile) {
          const p = JSON.parse(savedProfile);
          if (p.name) setName(p.name);
          if (p.email) setEmail(p.email);
          if (p.university) setUniversity(p.university);
          if (p.portfolioUrl) setPortfolioUrl(p.portfolioUrl);
        }
      } catch {
        // Ignore JSON error
      }
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !internship) return null;

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !university.trim()) {
      setError("Please fill in your name, email, and university to proceed.");
      return;
    }
    if (!email.includes("@") || !email.includes(".")) {
      setError("Please enter a valid email address.");
      return;
    }
    setError(null);
    setStep(2);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!coverNote.trim()) {
      setError("Please add a short note about why this placement excites you.");
      return;
    }
    setError(null);
    setIsSubmitting(true);

    setTimeout(() => {
      const newApp: StudentApplication = {
        id: "app-" + Date.now(),
        internshipSlug: internship.slug,
        internshipTitle: internship.title,
        company: internship.company,
        companyLogo: internship.companyLogo,
        department: internship.department,
        location: internship.location,
        stipend: internship.stipend,
        workplaceType: internship.workplaceType,
        applicantName: name.trim(),
        email: email.trim(),
        university: university.trim(),
        graduationYear,
        portfolioUrl: portfolioUrl.trim() || undefined,
        coverNote: coverNote.trim(),
        appliedDate: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
        status: "Submitted",
        statusUpdateDate: "Just now"
      };

      try {
        localStorage.setItem(
          "primer_student_profile",
          JSON.stringify({ name: name.trim(), email: email.trim(), university: university.trim(), portfolioUrl: portfolioUrl.trim() })
        );

        const existing = localStorage.getItem("primer_internship_applications");
        const list: StudentApplication[] = existing ? JSON.parse(existing) : [];
        const updated = [newApp, ...list];
        localStorage.setItem("primer_internship_applications", JSON.stringify(updated));

        window.dispatchEvent(new CustomEvent("primer_applications_updated", { detail: updated }));
      } catch (err) {
        console.error("Storage error:", err);
      }

      setIsSubmitting(false);
      setStep(3);
      if (onSuccess) onSuccess(newApp);
    }, 800);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      style={{
        backgroundColor: "rgba(16, 15, 12, 0.72)",
        backdropFilter: "blur(8px)"
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="relative w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl transition-all my-8"
        style={{
          backgroundColor: "var(--token-9a636b8c-3272-4cd8-9671-9f644e056731, #f4f1ea)",
          border: "1px solid var(--token-089b04d3-1763-411b-b92e-81c3ce9de35b, #ddd7ca)",
          color: "var(--token-c62c84d0-2271-4d5a-831d-79456ff3d6d5, #17150f)"
        }}
      >
        {/* Header */}
        <div
          className="p-6 sm:p-8 border-b flex items-start justify-between relative"
          style={{
            borderColor: "var(--token-089b04d3-1763-411b-b92e-81c3ce9de35b, #ddd7ca)",
            background: "linear-gradient(180deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0) 100%)"
          }}
        >
          <div className="flex items-center gap-4 pr-10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={internship.companyLogo}
              alt={internship.company}
              className="w-14 h-14 rounded-xl object-cover shadow-sm border border-black/10 flex-shrink-0"
            />
            <div>
              <div className="flex items-center gap-2 mb-1 flex-wrap">
                <span
                  className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium tracking-wide uppercase"
                  style={{
                    backgroundColor: "var(--token-d61acb54-0f02-4ada-8301-e50808c78e3a, #1e3a32)",
                    color: "#ffffff"
                  }}
                >
                  {internship.department}
                </span>
                <span
                  className="text-xs font-mono"
                  style={{ color: "var(--token-8b8bc3b0-833c-4020-8661-1dee89fb8f75, #7a746a)" }}
                >
                  {internship.partnerTier}
                </span>
              </div>
              <h2
                className="text-xl sm:text-2xl font-serif font-normal tracking-tight"
                style={{ fontFamily: "'Young Serif', Georgia, serif" }}
              >
                {internship.title}
              </h2>
              <div
                className="flex items-center gap-3 text-xs mt-1 font-sans flex-wrap"
                style={{ color: "var(--token-8b8bc3b0-833c-4020-8661-1dee89fb8f75, #7a746a)" }}
              >
                <span className="flex items-center gap-1">
                  <Building2 className="w-3.5 h-3.5" />
                  {internship.company}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" />
                  {internship.location}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1 text-emerald-800 font-semibold font-mono">
                  <DollarSign className="w-3.5 h-3.5" />
                  {internship.stipend}
                </span>
              </div>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-2 rounded-full hover:bg-black/5 transition-colors absolute top-6 right-6"
          >
            <X className="w-5 h-5 text-stone-600 hover:text-black" />
          </button>
        </div>

        {/* Steps Progress */}
        {step !== 3 && (
          <div
            className="flex items-center px-6 sm:px-8 py-3 text-xs font-mono border-b gap-4"
            style={{
              borderColor: "var(--token-089b04d3-1763-411b-b92e-81c3ce9de35b, #ddd7ca)",
              backgroundColor: "rgba(23, 21, 15, 0.03)"
            }}
          >
            <div className={`flex items-center gap-1.5 ${step === 1 ? "font-bold text-black" : "text-stone-500"}`}>
              <span className="w-4 h-4 rounded-full flex items-center justify-center bg-stone-300 text-stone-900 text-[10px]">
                1
              </span>
              <span>Candidate Profile</span>
            </div>
            <span className="text-stone-400">→</span>
            <div className={`flex items-center gap-1.5 ${step === 2 ? "font-bold text-black" : "text-stone-500"}`}>
              <span className="w-4 h-4 rounded-full flex items-center justify-center bg-stone-300 text-stone-900 text-[10px]">
                2
              </span>
              <span>Portfolio & Pitch</span>
            </div>
          </div>
        )}

        {/* Body */}
        <div className="p-6 sm:p-8">
          {error && (
            <div
              className="mb-6 p-3.5 rounded-xl text-xs font-sans border flex items-center gap-2"
              style={{
                backgroundColor: "#fff1f0",
                borderColor: "#ffa39e",
                color: "#cf1322"
              }}
            >
              <span className="font-bold">Error:</span> {error}
            </div>
          )}

          {step === 1 && (
            <form onSubmit={handleNext} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase font-semibold mb-1.5 tracking-wider text-stone-700">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Maya Chen"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl text-sm border focus:outline-none focus:ring-2 focus:ring-orange-600/40 bg-white"
                    style={{ borderColor: "var(--token-089b04d3-1763-411b-b92e-81c3ce9de35b, #ddd7ca)" }}
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase font-semibold mb-1.5 tracking-wider text-stone-700">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="you@university.edu"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl text-sm border focus:outline-none focus:ring-2 focus:ring-orange-600/40 bg-white"
                    style={{ borderColor: "var(--token-089b04d3-1763-411b-b92e-81c3ce9de35b, #ddd7ca)" }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase font-semibold mb-1.5 tracking-wider text-stone-700">
                    College / University / Self-Taught *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. RISD, Stanford, or Independent"
                    value={university}
                    onChange={(e) => setUniversity(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl text-sm border focus:outline-none focus:ring-2 focus:ring-orange-600/40 bg-white"
                    style={{ borderColor: "var(--token-089b04d3-1763-411b-b92e-81c3ce9de35b, #ddd7ca)" }}
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase font-semibold mb-1.5 tracking-wider text-stone-700">
                    Graduation / Completion Year
                  </label>
                  <select
                    value={graduationYear}
                    onChange={(e) => setGraduationYear(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl text-sm border focus:outline-none focus:ring-2 focus:ring-orange-600/40 bg-white"
                    style={{ borderColor: "var(--token-089b04d3-1763-411b-b92e-81c3ce9de35b, #ddd7ca)" }}
                  >
                    <option value="2026">2026 (Graduating Senior)</option>
                    <option value="2027">2027 (Junior)</option>
                    <option value="2028">2028 (Sophomore)</option>
                    <option value="2029">2029 (Freshman)</option>
                    <option value="Graduate">Master&apos;s / Graduate Student</option>
                    <option value="Alumni">Recent Graduate / Independent</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase font-semibold mb-1.5 tracking-wider text-stone-700">
                  Portfolio / GitHub / Work URL (Optional)
                </label>
                <input
                  type="url"
                  placeholder="https://yoursite.com or https://github.com/username"
                  value={portfolioUrl}
                  onChange={(e) => setPortfolioUrl(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl text-sm border focus:outline-none focus:ring-2 focus:ring-orange-600/40 bg-white"
                  style={{ borderColor: "var(--token-089b04d3-1763-411b-b92e-81c3ce9de35b, #ddd7ca)" }}
                />
              </div>

              <div className="pt-4 flex items-center justify-between">
                <span className="text-xs text-stone-500 font-sans flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-700" />
                  Your information is shared directly with {internship.company}.
                </span>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl font-medium text-xs tracking-wider uppercase flex items-center gap-2 transition-transform active:scale-95 text-white"
                  style={{
                    backgroundColor: "var(--token-c62c84d0-2271-4d5a-831d-79456ff3d6d5, #17150f)"
                  }}
                >
                  Continue to Pitch
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          )}

          {step === 2 && (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono uppercase font-semibold mb-1.5 tracking-wider text-stone-700">
                  Why this placement? (Cover Note) *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder={`Tell ${internship.company} about a relevant project, what draws you to this craft, and what you hope to master during your ${internship.duration}...`}
                  value={coverNote}
                  onChange={(e) => setCoverNote(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl text-sm border focus:outline-none focus:ring-2 focus:ring-orange-600/40 bg-white resize-none"
                  style={{ borderColor: "var(--token-089b04d3-1763-411b-b92e-81c3ce9de35b, #ddd7ca)" }}
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase font-semibold mb-1.5 tracking-wider text-stone-700">
                  Attached Resume / Work Proof
                </label>
                <div
                  className="p-4 rounded-xl border border-dashed flex items-center justify-between bg-white/70"
                  style={{ borderColor: "var(--token-089b04d3-1763-411b-b92e-81c3ce9de35b, #ddd7ca)" }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-stone-100 flex items-center justify-center text-stone-600">
                      <UploadCloud className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                      <div className="text-xs font-medium text-stone-800">{fileName}</div>
                      <div className="text-[11px] text-stone-500 font-mono">PDF, ZIP or DOCX up to 25MB · Ready for review</div>
                    </div>
                  </div>
                  <label className="cursor-pointer text-xs font-mono text-orange-700 hover:text-orange-900 font-semibold px-3 py-1.5 rounded-lg border bg-stone-50 hover:bg-stone-100 transition-colors">
                    Change file
                    <input
                      type="file"
                      className="hidden"
                      onChange={(e) => {
                        if (e.target.files && e.target.files[0]) {
                          setFileName(e.target.files[0].name);
                        }
                      }}
                    />
                  </label>
                </div>
              </div>

              {internship.relatedCourseTitle && (
                <div
                  className="p-3.5 rounded-xl text-xs flex items-center gap-2.5 border"
                  style={{
                    backgroundColor: "rgba(30, 58, 50, 0.06)",
                    borderColor: "rgba(30, 58, 50, 0.2)",
                    color: "var(--token-d61acb54-0f02-4ada-8301-e50808c78e3a, #1e3a32)"
                  }}
                >
                  <Sparkles className="w-4 h-4 flex-shrink-0 text-emerald-800" />
                  <span>
                    <strong>Fast-track verification:</strong> Applicants who have enrolled in or completed{" "}
                    <em>{internship.relatedCourseTitle}</em> receive prioritized mentor review within 48 hours.
                  </span>
                </div>
              )}

              <div className="pt-4 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-4 py-2 text-xs font-mono uppercase tracking-wider text-stone-600 hover:text-black"
                >
                  ← Back
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-2.5 rounded-xl font-medium text-xs tracking-wider uppercase flex items-center gap-2 transition-all active:scale-95 text-white disabled:opacity-50"
                  style={{
                    backgroundColor: "var(--token-6e05a1fc-6c66-49ed-aaad-602284d2af03, #f0532b)"
                  }}
                >
                  {isSubmitting ? "Submitting..." : "Submit Application"}
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          )}

          {step === 3 && (
            <div className="text-center py-6 sm:py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h3
                className="text-2xl font-serif font-normal"
                style={{ fontFamily: "'Young Serif', Georgia, serif" }}
              >
                Application Submitted!
              </h3>
              <p className="text-sm text-stone-600 max-w-md mx-auto font-sans leading-relaxed">
                Your dossier for <strong>{internship.title}</strong> at <strong>{internship.company}</strong> has been
                logged and placed in the candidate pipeline.
              </p>

              <div
                className="p-4 rounded-xl border max-w-md mx-auto text-left text-xs font-mono space-y-2"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.7)",
                  borderColor: "var(--token-089b04d3-1763-411b-b92e-81c3ce9de35b, #ddd7ca)"
                }}
              >
                <div className="flex justify-between">
                  <span className="text-stone-500">Candidate:</span>
                  <span className="font-semibold">{name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">Notification Email:</span>
                  <span className="font-semibold">{email}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">Pipeline Status:</span>
                  <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-semibold">
                    Submitted & Queued
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">Est. Review Time:</span>
                  <span>5 business days</span>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href="/dashboard"
                  className="w-full sm:w-auto px-6 py-2.5 rounded-xl font-medium text-xs tracking-wider uppercase text-white text-center transition-transform active:scale-95"
                  style={{
                    backgroundColor: "var(--token-c62c84d0-2271-4d5a-831d-79456ff3d6d5, #17150f)"
                  }}
                >
                  View in Student Dashboard →
                </a>
                <button
                  onClick={onClose}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl font-medium text-xs tracking-wider uppercase border border-stone-300 hover:bg-stone-100 text-center transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
