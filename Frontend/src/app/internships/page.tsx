import type { Metadata } from "next";
import { internships } from "@/data/internships";
import { InternshipDirectory } from "@/components/internships/InternshipDirectory";
import { Sparkles, Terminal, Code2, Cpu } from "lucide-react";

export const metadata: Metadata = {
  title: "Verified Tech Fellowships & Internships — Primer",
  description:
    "Discover verified paid summer internships and engineering fellowships in Python, Web Development, and AI Engineering. Direct 1-on-1 mentorship from working industry leaders.",
  openGraph: {
    title: "Verified Tech Internships & Fellowships — Primer",
    description: "Paid software and AI fellowships with direct 1-on-1 engineering mentorship and weekly code reviews."
  }
};

export default function InternshipsPage() {
  return (
    <main className="w-full flex flex-col items-center">
      {/* Editorial Hero Section with Navbar Clearance */}
      <section
        className="w-full pt-28 pb-16 sm:pt-36 sm:pb-20 lg:pt-40 px-4 sm:px-6 lg:px-8 border-b"
        style={{
          borderColor: "var(--token-089b04d3-1763-411b-b92e-81c3ce9de35b, #ddd7ca)",
          backgroundColor: "var(--token-9a636b8c-3272-4cd8-9671-9f644e056731, #f4f1ea)"
        }}
      >
        <div className="max-w-6xl mx-auto space-y-6">
          <div className="flex items-center gap-2 flex-wrap">
            <span
              className="px-3.5 py-1 rounded-full text-xs font-mono font-medium tracking-wide uppercase flex items-center gap-1.5 shadow-2xs"
              style={{
                backgroundColor: "rgba(240, 83, 43, 0.12)",
                color: "var(--token-6e05a1fc-6c66-49ed-aaad-602284d2af03, #f0532b)"
              }}
            >
              <Sparkles className="w-3.5 h-3.5" />
              Summer 2027 Placements & Fellowships
            </span>
            <span className="text-xs font-mono text-stone-500 font-medium">• 100% Paid & Mentored</span>
          </div>

          <h1
            className="text-4xl sm:text-6xl lg:text-7xl font-serif font-normal tracking-tight leading-[1.08] text-stone-900 max-w-4xl"
            style={{ fontFamily: "'Young Serif', Georgia, serif" }}
          >
            Real software. <br />
            Real mentors.{" "}
            <em className="italic" style={{ color: "var(--token-6e05a1fc-6c66-49ed-aaad-602284d2af03, #f0532b)" }}>
              Your first fellowship.
            </em>
          </h1>

          <p className="text-base sm:text-xl text-stone-700 font-sans max-w-2xl leading-relaxed">
            Direct 1-on-1 mentorship with senior software engineers, AI researchers, and frontend architects.
            Every role is verified, highly compensated, and built around shipping production-grade systems.
          </p>

          {/* Quick Track Badges */}
          <div className="flex items-center gap-3 pt-2 flex-wrap text-xs font-mono">
            <span className="text-stone-500 uppercase tracking-wider">Tracks:</span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100/70 text-emerald-950 font-medium border border-emerald-200">
              <Terminal className="w-3.5 h-3.5 text-emerald-700" />
              Python (3 roles)
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-200/80 text-stone-900 font-medium border border-stone-300">
              <Code2 className="w-3.5 h-3.5 text-stone-700" />
              Web Development (3 roles)
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100/80 text-orange-950 font-medium border border-orange-200">
              <Cpu className="w-3.5 h-3.5 text-orange-700" />
              AI Engineer (4 roles)
            </span>
          </div>

          {/* Quick Stats Bar */}
          <div
            className="grid grid-cols-2 sm:grid-cols-4 gap-5 pt-8 mt-6 border-t max-w-4xl"
            style={{ borderColor: "rgba(221, 215, 202, 0.8)" }}
          >
            <div>
              <div className="text-2xl sm:text-3xl font-serif text-stone-900 font-normal">10</div>
              <div className="text-xs font-mono text-stone-500 mt-0.5">Active Engineering Roles</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-serif text-emerald-800 font-normal">$3,650</div>
              <div className="text-xs font-mono text-stone-500 mt-0.5">Avg. Monthly Stipend</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-serif text-stone-900 font-normal">1 : 1</div>
              <div className="text-xs font-mono text-stone-500 mt-0.5">Dedicated Senior Mentor</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-serif text-orange-600 font-normal">94%</div>
              <div className="text-xs font-mono text-stone-500 mt-0.5">Full-Time Conversion Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Directory Section */}
      <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <InternshipDirectory initialInternships={internships} />
      </section>
    </main>
  );
}
