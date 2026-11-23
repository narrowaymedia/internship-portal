"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Play,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Video,
  FileCheck,
  MessageSquare,
  Users,
  Star,
  Check,
  Sparkles,
  Layers,
  Clock,
  BookOpen,
  ArrowUpRight,
} from "lucide-react";
import { courses } from "@/data/courses";
import { teachers } from "@/data/teachers";
import { reviews } from "@/data/reviews";
import { faqs } from "@/data/faqs";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { CourseCard } from "@/components/cards/CourseCard";
import { TeacherCard } from "@/components/cards/TeacherCard";
import { Accordion } from "@/components/ui/Accordion";

const schoolsList = [
  { num: "01", name: "Painting", count: "1 course", teacher: "Lena Hart", slug: "abstract-painting" },
  { num: "02", name: "Cooking", count: "1 course", teacher: "Marco Bellini", slug: "cook-like-a-chef" },
  { num: "03", name: "Design", count: "2 courses", teacher: "Sofia Lind, Hanna Berg", slug: "graphic-design-basics" },
  { num: "04", name: "Woodwork", count: "1 course", teacher: "Tom Keller", slug: "woodworking-at-home" },
  { num: "05", name: "Film", count: "1 course", teacher: "Ines Moreau", slug: "filmmaking-on-a-budget" },
  { num: "06", name: "Photography", count: "1 course", teacher: "Daniel Weiss", slug: "film-photography" },
  { num: "07", name: "Writing", count: "1 course", teacher: "Clara Moss", slug: "creative-writing" },
];

export default function HomePage() {
  // Hero interactive sketch-to-photo state
  const [activeHeroCourseIndex, setActiveHeroCourseIndex] = useState(0);
  const [learnedPercent, setLearnedPercent] = useState(65);
  const heroCardRef = useRef<HTMLDivElement>(null);

  // Lesson one syllabus preview state
  const [activePreviewIndex, setActivePreviewIndex] = useState(0);

  // Pricing toggle state
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("yearly");

  // FAQ category filter state
  const [faqCategory, setFaqCategory] = useState<"All" | "Courses & Feedback" | "Membership & Billing" | "Materials & Gear">("All");

  const currentHeroCourse = courses[activeHeroCourseIndex] || courses[0];

  // Mouse move over hero image reveals the color photo and updates the "You've learned" meter!
  const handleHeroMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!heroCardRef.current) return;
    const rect = heroCardRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const pct = Math.round((x / rect.width) * 100);
    setLearnedPercent(pct);
  };

  const filteredFaqs =
    faqCategory === "All"
      ? faqs
      : faqs.filter((f) => f.category === faqCategory);

  return (
    <div className="flex flex-col min-h-screen">
      {/* ============================================================== */}
      {/* 1. HERO (PmHero): "Every skill starts as a sketch."            */}
      {/* ============================================================== */}
      <section className="relative pt-12 pb-16 md:pt-20 md:pb-28 border-b border-[#ddd7ca] overflow-hidden bg-[#f4f1ea]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left: Editorial Headline */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-[#7a746a] uppercase tracking-wider">
                  COURSE COMPLETE · COURSE COMPLETE ·
                </span>
              </div>
              <p className="font-mono text-xs font-semibold uppercase tracking-wider text-[#17150f]">
                Online courses · 7 schools · self-paced
              </p>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#17150f] leading-[1.04]">
                Every skill<br />
                starts as<br />
                a <span className="italic font-serif text-[#f0532b]">sketch</span>.
              </h1>

              <p className="text-lg sm:text-xl text-[#7a746a] leading-relaxed max-w-xl">
                Short video lessons taught by people who do the work, a real project in every course and feedback from your teacher on each one.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <Button href="/courses" size="lg" variant="primary">
                  Browse courses
                </Button>
                <Button href="/courses/abstract-painting" size="lg" variant="outline">
                  Try a free lesson
                </Button>
              </div>
            </div>

            {/* Right: Signature Interactive Card (Draws itself into photo) */}
            <div className="lg:col-span-5">
              <div className="bg-white border border-[#ddd7ca] rounded-2xl p-4 sm:p-5 shadow-xl space-y-4">
                {/* Card Top Meta */}
                <div className="flex items-center justify-between text-xs font-mono text-[#7a746a] pb-1">
                  <span>Now learning · 0{activeHeroCourseIndex + 1} / 08</span>
                  <span className="px-2 py-0.5 rounded bg-[#f4f1ea] text-[#17150f] font-medium">
                    {currentHeroCourse.lessonsCount} lessons · {currentHeroCourse.duration}
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-[#17150f]">
                    {currentHeroCourse.title}
                  </h3>
                  <p className="text-xs text-[#7a746a]">
                    with {currentHeroCourse.teacher.name} · {currentHeroCourse.teacher.role}
                  </p>
                </div>

                {/* Interactive Drawing Canvas / Hover Scratch Reveal */}
                <div
                  ref={heroCardRef}
                  onMouseMove={handleHeroMouseMove}
                  onMouseLeave={() => setLearnedPercent(70)}
                  className="relative aspect-[4/3] rounded-xl overflow-hidden bg-[#e8e3d8] cursor-crosshair select-none border border-[#ddd7ca]"
                  style={{ position: "relative" }}
                >
                  {/* Layer 1: Pencil Sketch (Black and White Charcoal effect) */}
                  <div className="absolute inset-0 grayscale contrast-150 brightness-95">
                    <Image
                      src={currentHeroCourse.heroImage}
                      alt={currentHeroCourse.title}
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 500px"
                      className="object-cover"
                    />
                  </div>

                  {/* Layer 2: Colored-in Real Photo revealed by cursor mask */}
                  <div
                    className="absolute inset-0 transition-[clip-path] duration-75"
                    style={{
                      clipPath: `polygon(0 0, ${learnedPercent}% 0, ${learnedPercent}% 100%, 0 100%)`,
                    }}
                  >
                    <Image
                      src={currentHeroCourse.heroImage}
                      alt={`${currentHeroCourse.title} color reveal`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 500px"
                      className="object-cover"
                    />
                  </div>

                  {/* Slider divider line with pencil handle */}
                  <div
                    className="absolute top-0 bottom-0 w-0.5 bg-[#f0532b] pointer-events-none shadow-md z-20"
                    style={{ left: `${learnedPercent}%` }}
                  >
                    <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-[#17150f] text-white flex items-center justify-center font-mono text-[10px] shadow-lg">
                      ✎
                    </div>
                  </div>

                  {/* Meter pill */}
                  <div className="absolute bottom-3 left-3 bg-[#100f0c]/90 text-white backdrop-blur-md px-3 py-1 rounded-md text-xs font-mono z-30">
                    You&rsquo;ve learned <span className="text-[#f0532b] font-bold">{learnedPercent}%</span>
                  </div>
                </div>

                {/* Interactive School Tabs along the bottom */}
                <div className="pt-2">
                  <p className="text-[11px] font-mono text-[#7a746a] uppercase mb-2">
                    Hover a school to switch demo:
                  </p>
                  <div className="grid grid-cols-3 gap-1.5 font-mono text-xs">
                    {courses.slice(0, 6).map((c, i) => (
                      <button
                        key={c.slug}
                        onClick={() => {
                          setActiveHeroCourseIndex(i);
                          setLearnedPercent(50);
                        }}
                        className={`px-2 py-1.5 rounded-lg border text-left transition-all cursor-pointer truncate ${
                          activeHeroCourseIndex === i
                            ? "bg-[#17150f] text-white border-[#17150f] font-semibold"
                            : "bg-[#f4f1ea] text-[#7a746a] border-[#ddd7ca] hover:text-[#17150f]"
                        }`}
                      >
                        {c.category}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 2. SCHOOLS (PmSchools): "Seven schools, one way to learn."     */}
      {/* ============================================================== */}
      <section className="py-20 border-b border-[#ddd7ca] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="font-mono text-xs uppercase tracking-widest text-[#f0532b] font-bold">
              Lesson 01 · Schools
            </span>
            <h2 className="mt-2 text-4xl sm:text-5xl font-extrabold text-[#17150f] tracking-tight">
              Seven schools, one way to learn.
            </h2>
            <p className="mt-3 text-lg text-[#7a746a] leading-relaxed">
              Pick the thing you want to make. Every school is a handful of short courses, each built around a real project and taught by someone who does it for a living.
            </p>
          </div>

          <div className="border border-[#ddd7ca] rounded-2xl divide-y divide-[#ddd7ca] overflow-hidden bg-[#f4f1ea]/30">
            {schoolsList.map((school) => (
              <Link
                key={school.num}
                href={`/courses/${school.slug}`}
                className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group hover:bg-[#e8e3d8]/60 transition-colors"
              >
                <div className="flex items-center gap-6">
                  <span className="font-mono text-sm font-bold text-[#f0532b]">
                    {school.num}
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-[#17150f] group-hover:text-[#f0532b] transition-colors">
                      {school.name}
                    </h3>
                    <p className="text-xs text-[#7a746a]">Taught by {school.teacher}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-xs font-mono text-[#7a746a]">
                  <span>{school.count}</span>
                  <span className="w-8 h-8 rounded-full bg-white group-hover:bg-[#f0532b] group-hover:text-white flex items-center justify-center transition-colors shadow-sm text-[#17150f]">
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 3. COURSES (PmCourses): "Start with a real project."           */}
      {/* ============================================================== */}
      <section className="py-20 border-b border-[#ddd7ca] bg-[#f4f1ea]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#f0532b] font-bold">
                Lesson 02 · Courses
              </span>
              <h2 className="mt-2 text-4xl sm:text-5xl font-extrabold text-[#17150f] tracking-tight">
                Start with a real project.
              </h2>
              <p className="mt-2 text-base sm:text-lg text-[#7a746a]">
                Every course is built around one thing you make and keep. Short lessons get you there, and your teacher marks up the result.
              </p>
            </div>
            <Link
              href="/courses"
              className="inline-flex items-center gap-1.5 font-mono text-sm text-[#17150f] hover:text-[#f0532b] font-medium transition-colors"
            >
              <span>Browse all 8 courses</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.slice(0, 6).map((course) => (
              <CourseCard key={course.slug} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 4. METHOD (PmMethod): "Watch it. Make it. Get it marked."      */}
      {/* ============================================================== */}
      <section className="py-20 border-b border-[#ddd7ca] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="font-mono text-xs uppercase tracking-widest text-[#f0532b] font-bold">
              Lesson 03 · How it works
            </span>
            <h2 className="mt-2 text-4xl sm:text-5xl font-extrabold text-[#17150f] tracking-tight">
              Watch it. Make it. Get it marked.
            </h2>
            <p className="mt-3 text-lg text-[#7a746a] leading-relaxed">
              No tests, no essays. Just four straightforward steps that lead to completed work.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* 4 Steps */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 bg-[#f4f1ea] border border-[#ddd7ca] rounded-2xl flex flex-col justify-between">
                <div>
                  <span className="font-mono text-xs font-bold text-[#f0532b]">01 · WATCH</span>
                  <h3 className="text-xl font-bold text-[#17150f] mt-2">
                    Short lessons, filmed close
                  </h3>
                  <p className="mt-2 text-sm text-[#7a746a] leading-relaxed">
                    6 to 15 minute lessons that show every move slowly and from above.
                  </p>
                </div>
                <p className="mt-6 font-mono text-[11px] text-[#7a746a]">Lesson 3 · 9:30</p>
              </div>

              <div className="p-6 bg-[#f4f1ea] border border-[#ddd7ca] rounded-2xl flex flex-col justify-between">
                <div>
                  <span className="font-mono text-xs font-bold text-[#f0532b]">02 · MAKE</span>
                  <h3 className="text-xl font-bold text-[#17150f] mt-2">
                    A real project
                  </h3>
                  <p className="mt-2 text-sm text-[#7a746a] leading-relaxed">
                    Every course ends in something you keep — a painting, a table, a short film.
                  </p>
                </div>
                <p className="mt-6 font-mono text-[11px] text-[#7a746a]">Your version</p>
              </div>

              <div className="p-6 bg-[#f4f1ea] border border-[#ddd7ca] rounded-2xl flex flex-col justify-between">
                <div>
                  <span className="font-mono text-xs font-bold text-[#f0532b]">03 · SHARE</span>
                  <h3 className="text-xl font-bold text-[#17150f] mt-2">
                    Upload your work
                  </h3>
                  <p className="mt-2 text-sm text-[#7a746a] leading-relaxed">
                    Send a photo of your project from your phone in a few seconds.
                  </p>
                </div>
                <p className="mt-6 font-mono text-[11px] text-[#7a746a]">project.jpg</p>
              </div>

              <div className="p-6 bg-[#f4f1ea] border border-[#ddd7ca] rounded-2xl flex flex-col justify-between">
                <div>
                  <span className="font-mono text-xs font-bold text-[#f0532b]">04 · IMPROVE</span>
                  <h3 className="text-xl font-bold text-[#17150f] mt-2">
                    Your teacher marks it up
                  </h3>
                  <p className="mt-2 text-sm text-[#7a746a] leading-relaxed">
                    Notes drawn right on your work and a short video back within 5 days.
                  </p>
                </div>
                <p className="mt-6 font-mono text-[11px] text-[#f0532b] font-bold">100% feedback rate</p>
              </div>
            </div>

            {/* Visual Simulated Teacher Markup Card */}
            <div className="lg:col-span-5 bg-[#17150f] text-white rounded-2xl p-6 border border-[#2a2720] flex flex-col justify-between relative overflow-hidden shadow-lg">
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-[#9a9388] pb-4 border-b border-[#2a2720]">
                  <span>STUDENT DESK · ASYNCHRONOUS CRITIQUE</span>
                  <span className="text-[#f0532b]">STATUS: MARKED</span>
                </div>
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden mt-4 bg-[#2a2720]" style={{ position: "relative" }}>
                  <Image
                    src={courses[0].heroImage}
                    alt="Student project markup"
                    fill
                    sizes="(max-width: 1024px) 100vw, 400px"
                    className="object-cover opacity-80"
                  />
                  {/* Red pen annotation overlays */}
                  <div className="absolute top-6 left-6 p-2 rounded bg-red-600/90 text-white font-mono text-xs shadow-lg backdrop-blur-sm -rotate-2">
                    ✎ &ldquo;Lovely — push the contrast here&rdquo;
                  </div>
                  <div className="absolute bottom-6 right-6 p-2 rounded bg-emerald-600/90 text-white font-mono text-xs shadow-lg backdrop-blur-sm rotate-1">
                    ✓ &ldquo;Great texture control&rdquo;
                  </div>
                </div>
              </div>

              <div className="pt-4 flex items-center justify-between text-xs font-mono text-[#ddd7ca]">
                <span>Marked by Lena Hart</span>
                <span>Sent back in 48 hours</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 5. NUMBERS (PmNumbers): "Real people, finishing real things."  */}
      {/* ============================================================== */}
      <section className="py-20 border-b border-[#ddd7ca] bg-[#f4f1ea]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="font-mono text-xs uppercase tracking-widest text-[#f0532b] font-bold">
              Lesson 04 · In numbers
            </span>
            <h2 className="mt-2 text-4xl sm:text-5xl font-extrabold text-[#17150f] tracking-tight">
              Real people, finishing real things.
            </h2>
            <p className="mt-3 text-lg text-[#7a746a] leading-relaxed">
              Not views or sign-ups. People who finished a course, made the thing and got it marked by their teacher. Counted from every course on Primer, updated monthly.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white border border-[#ddd7ca] rounded-2xl p-6">
              <span className="font-mono text-xs text-[#7a746a]">No. 01</span>
              <p className="text-4xl font-extrabold font-mono text-[#17150f] mt-3">12,480</p>
              <p className="text-sm text-[#7a746a] mt-2">students learning right now</p>
            </div>

            <div className="bg-white border border-[#ddd7ca] rounded-2xl p-6">
              <span className="font-mono text-xs text-[#7a746a]">No. 02</span>
              <p className="text-4xl font-extrabold font-mono text-[#f0532b] mt-3">94%</p>
              <p className="text-sm text-[#7a746a] mt-2">finish the course they start</p>
            </div>

            <div className="bg-white border border-[#ddd7ca] rounded-2xl p-6">
              <span className="font-mono text-xs text-[#7a746a]">No. 03</span>
              <p className="text-4xl font-extrabold font-mono text-[#17150f] mt-3">4.9 ★</p>
              <p className="text-sm text-[#7a746a] mt-2">average course rating</p>
            </div>

            <div className="bg-white border border-[#ddd7ca] rounded-2xl p-6">
              <span className="font-mono text-xs text-[#7a746a]">No. 04</span>
              <p className="text-4xl font-extrabold font-mono text-[#17150f] mt-3">5 days</p>
              <p className="text-sm text-[#7a746a] mt-2">to get feedback from your teacher</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 6. TEACHERS (PmTeachers): "Taught by people who do it..."       */}
      {/* ============================================================== */}
      <section className="py-20 border-b border-[#ddd7ca] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#f0532b] font-bold">
                Lesson 05 · Teachers
              </span>
              <h2 className="mt-2 text-4xl sm:text-5xl font-extrabold text-[#17150f] tracking-tight">
                Taught by people who do it for a living.
              </h2>
            </div>
            <Link
              href="/teachers"
              className="inline-flex items-center gap-1.5 font-mono text-sm text-[#17150f] hover:text-[#f0532b] font-medium transition-colors"
            >
              <span>Meet all 8 teachers</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teachers.map((teacher) => (
              <TeacherCard key={teacher.slug} teacher={teacher} />
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 7. FREE LESSON (PmSyllabus): "Sit in on lesson one."           */}
      {/* ============================================================== */}
      <section className="py-20 border-b border-[#ddd7ca] bg-[#f4f1ea]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="font-mono text-xs uppercase tracking-widest text-[#f0532b] font-bold">
              Lesson 06 · Free lesson
            </span>
            <h2 className="mt-2 text-4xl sm:text-5xl font-extrabold text-[#17150f] tracking-tight">
              Sit in on lesson one.
            </h2>
            <p className="mt-3 text-lg text-[#7a746a] leading-relaxed">
              Watch the first lesson of any course before you pay. This is what every lesson looks like: close, slow and from above.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 bg-[#100f0c] rounded-2xl overflow-hidden border border-[#2a2720] shadow-xl text-white">
              <div className="relative aspect-video bg-[#17150f] flex items-center justify-center group cursor-pointer" style={{ position: "relative" }}>
                <Image
                  src={courses[0].heroImage}
                  alt="Lesson One Preview"
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover opacity-75 group-hover:opacity-90 transition-opacity"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-[#f0532b] text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="w-7 h-7 fill-white translate-x-0.5" />
                  </div>
                </div>
                <div className="absolute top-4 left-4 font-mono text-xs bg-black/70 px-3 py-1 rounded-md z-10">
                  {courses[0].title.toUpperCase()} · LESSON ONE
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between text-xs font-mono text-[#ddd7ca] mb-1">
                  <span>SAMPLE LESSON</span>
                  <span>{courses[0].syllabus[activePreviewIndex]?.duration}</span>
                </div>
                <h3 className="text-xl font-bold text-white">
                  {courses[0].syllabus[activePreviewIndex]?.title}
                </h3>
                <p className="mt-2 text-sm text-[#9a9388] leading-relaxed">
                  {courses[0].syllabus[activePreviewIndex]?.description}
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white border border-[#ddd7ca] rounded-2xl p-6">
              <h4 className="font-mono text-xs uppercase tracking-wider text-[#7a746a] mb-4">
                Syllabus preview ({courses[0].syllabus.length} lessons)
              </h4>
              <div className="divide-y divide-[#ddd7ca]">
                {courses[0].syllabus.map((lesson, idx) => (
                  <button
                    key={lesson.title}
                    onClick={() => setActivePreviewIndex(idx)}
                    className={`w-full py-3.5 flex items-center justify-between text-left group transition-colors cursor-pointer ${
                      activePreviewIndex === idx ? "text-[#f0532b]" : "text-[#17150f]"
                    }`}
                  >
                    <div className="pr-4">
                      <p className="text-sm font-semibold group-hover:text-[#f0532b]">
                        {lesson.title}
                      </p>
                      <p className="text-xs text-[#7a746a] line-clamp-1 mt-0.5">
                        {lesson.description}
                      </p>
                    </div>
                    <span className="font-mono text-xs text-[#7a746a] shrink-0">
                      {lesson.duration}
                    </span>
                  </button>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-[#ddd7ca]">
                <Button href={`/courses/${courses[0].slug}`} variant="primary" className="w-full">
                  Enroll in {courses[0].title} (${courses[0].price})
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 8. REVIEWS (PmReviews): "What students made with it."           */}
      {/* ============================================================== */}
      <section className="py-20 border-b border-[#ddd7ca] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="font-mono text-xs uppercase tracking-widest text-[#f0532b] font-bold">
              Lesson 07 · Students
            </span>
            <div className="flex items-center gap-3 mt-2">
              <h2 className="text-4xl sm:text-5xl font-extrabold text-[#17150f] tracking-tight">
                What students made with it.
              </h2>
              <span className="px-2.5 py-1 bg-[#f0532b]/10 text-[#f0532b] font-mono text-sm font-bold rounded-full">
                4.9 ★
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((rev) => (
              <div
                key={rev.id}
                className="bg-[#f4f1ea] border border-[#ddd7ca] rounded-2xl p-6 sm:p-8 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs text-[#f0532b] uppercase tracking-wider">
                      {rev.courseTitle}
                    </span>
                    <span className="font-mono text-xs text-[#7a746a]">
                      Verified project
                    </span>
                  </div>
                  <p className="text-base text-[#17150f] leading-relaxed italic">
                    &ldquo;{rev.comment}&rdquo;
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#ddd7ca] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative w-9 h-9 rounded-full overflow-hidden bg-[#e8e3d8]" style={{ position: "relative" }}>
                      <Image
                        src={rev.avatar}
                        alt={rev.studentName}
                        fill
                        sizes="36px"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-[#17150f]">{rev.studentName}</p>
                      <p className="text-xs text-[#7a746a]">{rev.city}</p>
                    </div>
                  </div>
                  {rev.projectSnippet && (
                    <span className="font-mono text-[11px] px-2.5 py-1 bg-white rounded text-[#7a746a]">
                      Project: {rev.projectSnippet}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 9. PRICING (PmPricing): "Learn one thing, or learn them all." */}
      {/* ============================================================== */}
      <section className="py-20 border-b border-[#ddd7ca] bg-[#f4f1ea]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="font-mono text-xs uppercase tracking-widest text-[#f0532b] font-bold">
              Lesson 08 · Pricing
            </span>
            <h2 className="mt-2 text-4xl sm:text-5xl font-extrabold text-[#17150f] tracking-tight">
              Learn one thing, or learn them all.
            </h2>
            <p className="mt-3 text-lg text-[#7a746a] leading-relaxed">
              Start with one course or open every school. Every plan comes with real feedback from your teacher.
            </p>

            {/* Toggle */}
            <div className="mt-8 inline-flex items-center p-1 bg-white rounded-xl border border-[#ddd7ca]">
              <button
                onClick={() => setBillingPeriod("monthly")}
                className={`px-5 py-2 text-xs font-mono uppercase tracking-wider rounded-lg transition-all cursor-pointer ${
                  billingPeriod === "monthly"
                    ? "bg-[#17150f] text-white font-bold"
                    : "text-[#7a746a] hover:text-[#17150f]"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingPeriod("yearly")}
                className={`px-5 py-2 text-xs font-mono uppercase tracking-wider rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
                  billingPeriod === "yearly"
                    ? "bg-[#17150f] text-white font-bold"
                    : "text-[#7a746a] hover:text-[#17150f]"
                }`}
              >
                <span>Yearly</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#f0532b] text-white">
                  save 33%
                </span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
            {/* Plan 01 */}
            <div className="bg-white border border-[#ddd7ca] rounded-2xl p-8 flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs text-[#7a746a]">Plan 01</span>
                <h3 className="text-2xl font-bold text-[#17150f] mt-1">One course</h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-extrabold font-mono text-[#17150f]">$79</span>
                  <span className="text-xs text-[#7a746a] ml-2">one-off</span>
                </div>
                <p className="text-xs text-[#7a746a] mt-1">Buy one course, keep it for life.</p>

                <ul className="mt-8 space-y-3 text-sm text-[#17150f]">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#f0532b]" />
                    <span>Every lesson in the course</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#f0532b]" />
                    <span>The project brief and files</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#f0532b]" />
                    <span>Teacher feedback on your project</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#f0532b]" />
                    <span>Certificate of completion</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-[#ddd7ca]">
                <Button href="/courses" variant="outline" className="w-full">
                  Choose a course
                </Button>
              </div>
            </div>

            {/* Plan 02: All Access (Most picked) */}
            <div className="bg-[#17150f] text-white border-2 border-[#f0532b] rounded-2xl p-8 flex flex-col justify-between relative shadow-xl scale-105 z-10">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                <span className="px-3.5 py-1 bg-[#f0532b] text-white text-[11px] font-mono uppercase tracking-wider rounded-full font-bold">
                  MOST PICKED
                </span>
              </div>
              <div>
                <span className="font-mono text-xs text-[#f0532b]">Plan 02</span>
                <h3 className="text-2xl font-bold text-white mt-1">All access</h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-extrabold font-mono text-white">
                    ${billingPeriod === "yearly" ? "16" : "24"}
                  </span>
                  <span className="text-xs text-[#9a9388] ml-2">
                    per month, billed {billingPeriod}
                  </span>
                </div>
                <p className="text-xs text-[#9a9388] mt-1">Every course, every school, new ones each month.</p>

                <ul className="mt-8 space-y-3 text-sm text-[#ddd7ca]">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#f0532b]" />
                    <span className="text-white font-medium">All 8 courses and every new one</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#f0532b]" />
                    <span>Direct teacher feedback on every project</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#f0532b]" />
                    <span>Private student community</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#f0532b]" />
                    <span>Cancel any time in two clicks</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-[#2a2720]">
                <Button href="/enroll?plan=all-access" variant="primary" className="w-full">
                  Start 7-day free trial
                </Button>
              </div>
            </div>

            {/* Plan 03: Teams */}
            <div className="bg-white border border-[#ddd7ca] rounded-2xl p-8 flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs text-[#7a746a]">Plan 03</span>
                <h3 className="text-2xl font-bold text-[#17150f] mt-1">Teams &amp; Studios</h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-extrabold font-mono text-[#17150f]">$390</span>
                  <span className="text-xs text-[#7a746a] ml-2">one-off lifetime</span>
                </div>
                <p className="text-xs text-[#7a746a] mt-1">For studios, agencies and dedicated makers.</p>

                <ul className="mt-8 space-y-3 text-sm text-[#17150f]">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#f0532b]" />
                    <span>Lifetime access to all courses</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#f0532b]" />
                    <span>Priority 48-hour feedback queue</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#f0532b]" />
                    <span>Team seats &amp; shared project board</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#f0532b]" />
                    <span>Quarterly live masterclass sessions</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-[#ddd7ca]">
                <Button href="/contact" variant="secondary" className="w-full">
                  Contact about Teams
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 10. QUESTIONS (PmFaq): "Questions before you start."           */}
      {/* ============================================================== */}
      <section className="py-20 border-b border-[#ddd7ca] bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <span className="font-mono text-xs uppercase tracking-widest text-[#f0532b] font-bold">
              Lesson 09 · Questions
            </span>
            <h2 className="mt-2 text-4xl sm:text-5xl font-extrabold text-[#17150f] tracking-tight">
              Questions before you start.
            </h2>
            <p className="mt-2 text-sm text-[#7a746a]">
              Something else? Email{" "}
              <a href="mailto:hello@primerlessons.com" className="text-[#f0532b] underline">
                hello@primerlessons.com
              </a>{" "}
              and a real person replies within a day.
            </p>

            {/* Filter pills */}
            <div className="flex items-center gap-2 mt-6">
              {(["All", "Courses & Feedback", "Membership & Billing", "Materials & Gear"] as const).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFaqCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all cursor-pointer border ${
                    faqCategory === cat
                      ? "bg-[#17150f] text-white border-[#17150f]"
                      : "bg-[#f4f1ea] text-[#7a746a] border-[#ddd7ca] hover:text-[#17150f]"
                  }`}
                >
                  {cat === "All" ? `All (${faqs.length})` : cat}
                </button>
              ))}
            </div>
          </div>

          <Accordion
            items={filteredFaqs.map((f) => ({
              id: f.id,
              title: f.question,
              content: f.answer,
              meta: f.category,
            }))}
          />
        </div>
      </section>

      {/* ============================================================== */}
      {/* 11. FINAL CTA (PmCta): "Your first lesson is free."            */}
      {/* ============================================================== */}
      <section className="py-20 bg-[#17150f] text-[#f4f1ea]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="font-mono text-xs uppercase tracking-widest text-[#f0532b] font-bold">
            Final lesson · Start today
          </span>
          <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Your first lesson is free.
          </h2>
          <p className="text-base sm:text-lg text-[#9a9388] max-w-xl mx-auto">
            Pick any course and watch the first lesson today. No card, no catch.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              window.location.href = "/enroll";
            }}
            className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              required
              placeholder="Your email"
              className="w-full sm:w-auto flex-1 px-4 py-3 rounded-xl bg-white text-[#17150f] text-sm focus:outline-none font-sans"
            />
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-3 bg-[#f0532b] hover:bg-[#dc451d] text-white font-medium text-sm rounded-xl transition-colors cursor-pointer"
            >
              Start learning free
            </button>
          </form>

          <div className="pt-4 flex items-center justify-center gap-2 text-xs font-mono text-[#7a746a]">
            <span>★ 4.9 · 12,480 students · 14-day money back · Takes ten seconds</span>
          </div>
        </div>
      </section>
    </div>
  );
}
