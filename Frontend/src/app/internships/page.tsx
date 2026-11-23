import type { Metadata } from "next";
import { internships } from "@/data/internships";
import { InternshipDirectory } from "@/components/internships/InternshipDirectory";
import { Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Internships & Fellowships Directory — Primer Studio Placements",
  description:
    "Discover verified paid summer internships and apprenticeships in Software Engineering, Product Design, AI, Cinema, Culinary Arts, and Industrial Craft. Direct mentorship from working masters.",
  openGraph: {
    title: "Internships & Fellowships — Primer Educational Portal",
    description: "Paid studio internships with direct 1-on-1 industry mentorship and project review."
  }
};

export default function InternshipsPage() {
  return (
    <main className="w-full flex flex-col items-center">
      {/* Editorial Hero Section */}
      <section
        className="w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b"
        style={{
          borderColor: "var(--token-089b04d3-1763-411b-b92e-81c3ce9de35b, #ddd7ca)",
          backgroundColor: "var(--token-9a636b8c-3272-4cd8-9671-9f644e056731, #f4f1ea)"
        }}
      >
        <div className="max-w-6xl mx-auto space-y-6">
          <div className="flex items-center gap-2">
            <span
              className="px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wide uppercase flex items-center gap-1.5"
              style={{
                backgroundColor: "rgba(240, 83, 43, 0.12)",
                color: "var(--token-6e05a1fc-6c66-49ed-aaad-602284d2af03, #f0532b)"
              }}
            >
              <Sparkles className="w-3.5 h-3.5" />
              Summer 2027 Placements & Fellowships
            </span>
            <span className="text-xs font-mono text-stone-500">• 100% Paid & Mentored</span>
          </div>

          <h1
            className="text-4xl sm:text-6xl lg:text-7xl font-serif font-normal tracking-tight leading-[1.08] text-stone-900 max-w-4xl"
            style={{ fontFamily: "'Young Serif', Georgia, serif" }}
          >
            Turn your craft into <br />
            <em className="italic" style={{ color: "var(--token-6e05a1fc-6c66-49ed-aaad-602284d2af03, #f0532b)" }}>
              a living.
            </em>
          </h1>

          <p className="text-base sm:text-xl text-stone-700 font-sans max-w-2xl leading-relaxed">
            Work directly with world-class design studios, software labs, Michelin-starred kitchens, and independent film
            ateliers. Every placement is verified, well-compensated, and pairs you with a dedicated senior practitioner.
          </p>

          {/* Quick Stats Bar */}
          <div
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 mt-4 border-t max-w-4xl"
            style={{ borderColor: "rgba(221, 215, 202, 0.8)" }}
          >
            <div>
              <div className="text-2xl sm:text-3xl font-serif text-stone-900 font-normal">10</div>
              <div className="text-xs font-mono text-stone-500 mt-0.5">Active Studio Fellowships</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-serif text-emerald-800 font-normal">$3,180</div>
              <div className="text-xs font-mono text-stone-500 mt-0.5">Average Monthly Stipend</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-serif text-stone-900 font-normal">1 : 1</div>
              <div className="text-xs font-mono text-stone-500 mt-0.5">Dedicated Senior Mentor</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-serif text-orange-600 font-normal">92%</div>
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
