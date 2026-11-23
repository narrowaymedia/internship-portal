import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  CheckCircle2,
  Clock,
  BookOpen,
  Star,
  ShieldCheck,
  Play,
  ArrowLeft,
  Users,
} from "lucide-react";
import { courses } from "@/data/courses";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Accordion } from "@/components/ui/Accordion";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return courses.map((course) => ({
    slug: course.slug,
  }));
}

export default async function CourseDetailPage({ params }: Props) {
  const { slug } = await params;
  const course = courses.find((c) => c.slug === slug);

  if (!course) {
    notFound();
  }

  return (
    <div className="pb-20">
      {/* Back Link Breadcrumb */}
      <div className="border-b border-[#ddd7ca] bg-white py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 text-xs font-mono text-[#7a746a] hover:text-[#17150f] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to all courses</span>
          </Link>
        </div>
      </div>

      {/* Course Hero */}
      <section className="py-12 md:py-16 border-b border-[#ddd7ca] bg-[#f4f1ea]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Course Metadata & Title */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="dark" dot>
                  {course.category}
                </Badge>
                <Badge variant="outline">{course.level}</Badge>
                <Badge variant="orange">{course.duration}</Badge>
              </div>

              <h1 className="text-4xl sm:text-5xl font-extrabold text-[#17150f] tracking-tight leading-tight">
                {course.title}
              </h1>

              <p className="text-xl text-[#7a746a] leading-relaxed">
                {course.tagline}
              </p>

              <div className="pt-2 flex items-center gap-6 text-sm font-mono text-[#17150f]">
                <span className="flex items-center gap-1.5 font-bold">
                  <Star className="w-4 h-4 fill-[#f0532b] text-[#f0532b]" />
                  {course.rating.toFixed(1)} / 5.0
                </span>
                <span>·</span>
                <span className="flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-[#7a746a]" />
                  {course.lessonsCount} lessons
                </span>
                <span>·</span>
                <span className="flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-[#7a746a]" />
                  {course.studentsCount.toLocaleString()} students
                </span>
              </div>

              {/* Teacher Pill */}
              <div className="pt-4 flex items-center gap-4 p-4 bg-white border border-[#ddd7ca] rounded-2xl max-w-lg">
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-[#e8e3d8] shrink-0" style={{ position: "relative" }}>
                  <Image
                    src={course.teacher.photo}
                    alt={course.teacher.name}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-mono text-[#7a746a] uppercase">Taught by</p>
                  <Link
                    href={`/teachers/${course.teacher.slug}`}
                    className="text-base font-bold text-[#17150f] hover:text-[#f0532b] transition-colors"
                  >
                    {course.teacher.name}
                  </Link>
                  <p className="text-xs text-[#7a746a]">{course.teacher.role}</p>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Visual & Sticky Buy Box */}
            <div className="lg:col-span-5">
              <div className="bg-white border border-[#ddd7ca] rounded-2xl p-6 shadow-md space-y-6">
                <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-[#e8e3d8]" style={{ position: "relative" }}>
                  <Image
                    src={course.heroImage}
                    alt={course.title}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/25 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-white/90 text-[#17150f] flex items-center justify-center shadow-lg hover:scale-105 transition-transform cursor-pointer">
                      <Play className="w-6 h-6 fill-[#17150f] translate-x-0.5" />
                    </div>
                  </div>
                  <span className="absolute bottom-3 left-3 px-2.5 py-1 rounded bg-[#100f0c]/80 text-white font-mono text-[10px]">
                    WATCH TRAILER (2:15)
                  </span>
                </div>

                <div className="flex items-baseline justify-between">
                  <div>
                    <span className="text-3xl font-extrabold text-[#17150f] font-mono">
                      ${course.price}
                    </span>
                    <span className="text-xs text-[#7a746a] ml-1">one-time lifetime access</span>
                  </div>
                  <Badge variant="green">7-Day Free Trial</Badge>
                </div>

                <div className="space-y-3">
                  <Button href={`/enroll?course=${course.slug}`} size="lg" variant="primary" className="w-full">
                    Enroll in {course.title}
                  </Button>
                  <Button href="/pricing" size="md" variant="outline" className="w-full">
                    Get All 8 Courses ($16/mo)
                  </Button>
                </div>

                <div className="pt-4 border-t border-[#ddd7ca] space-y-2 text-xs font-mono text-[#7a746a]">
                  <p className="flex items-center gap-2 text-[#17150f]">
                    <CheckCircle2 className="w-4 h-4 text-[#f0532b]" />
                    <span>Includes 1:1 teacher video critique</span>
                  </p>
                  <p className="flex items-center gap-2 text-[#17150f]">
                    <CheckCircle2 className="w-4 h-4 text-[#f0532b]" />
                    <span>Lifetime on-demand 4K lesson access</span>
                  </p>
                  <p className="flex items-center gap-2 text-[#17150f]">
                    <ShieldCheck className="w-4 h-4 text-[#f0532b]" />
                    <span>14-day unconditional money-back guarantee</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Make & Overview */}
      <section className="py-16 border-b border-[#ddd7ca] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-[#17150f] tracking-tight">
                  About this course
                </h2>
                <p className="mt-4 text-base sm:text-lg text-[#7a746a] leading-relaxed">
                  {course.description}
                </p>
              </div>

              {/* What You'll Make Box */}
              <div className="p-6 sm:p-8 bg-[#f4f1ea] border border-[#ddd7ca] rounded-2xl">
                <span className="font-mono text-xs uppercase tracking-wider text-[#f0532b] font-bold">
                  The Course Project
                </span>
                <h3 className="mt-2 text-xl font-bold text-[#17150f]">
                  What you will make and submit:
                </h3>
                <p className="mt-2 text-base text-[#17150f] leading-relaxed">
                  {course.whatYouWillMake}
                </p>
                <div className="mt-4 pt-4 border-t border-[#ddd7ca] flex items-center gap-2 text-xs font-mono text-[#7a746a]">
                  <CheckCircle2 className="w-4 h-4 text-[#f0532b]" />
                  <span>Graded directly by {course.teacher.name} with asynchronous video markup.</span>
                </div>
              </div>

              {/* Syllabus Accordion */}
              <div>
                <h2 className="text-2xl font-bold text-[#17150f] tracking-tight mb-6">
                  Course Syllabus ({course.lessonsCount} lessons · {course.duration})
                </h2>
                <Accordion
                  items={course.syllabus.map((les, i) => ({
                    id: `lesson-${i}`,
                    title: les.title,
                    content: les.description,
                    meta: les.duration,
                  }))}
                />
              </div>
            </div>

            {/* Right Column: Materials & Requirements */}
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-[#f4f1ea] border border-[#ddd7ca] rounded-2xl p-6">
                <h3 className="font-bold text-lg text-[#17150f] mb-4">
                  Materials &amp; Equipment
                </h3>
                <p className="text-xs text-[#7a746a] mb-4">
                  Everything you need to complete the project. A printable vendor guide with budget options is provided upon enrollment.
                </p>
                <ul className="space-y-2.5">
                  {course.materials.map((mat) => (
                    <li key={mat} className="flex items-start gap-2.5 text-sm text-[#17150f]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#f0532b] mt-2 shrink-0" />
                      <span>{mat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Teacher Profile Card */}
              <div className="bg-white border border-[#ddd7ca] rounded-2xl p-6">
                <h3 className="font-bold text-lg text-[#17150f] mb-3">
                  About your instructor
                </h3>
                <p className="text-sm text-[#7a746a] italic leading-relaxed mb-4">
                  &ldquo;{course.teacher.quote}&rdquo;
                </p>
                <p className="text-xs font-mono text-[#7a746a]">
                  {course.teacher.yearsOfCraft} · {course.teacher.location}
                </p>
                <div className="mt-4 pt-4 border-t border-[#ddd7ca]">
                  <Link
                    href={`/teachers/${course.teacher.slug}`}
                    className="text-xs font-mono font-medium text-[#f0532b] hover:underline"
                  >
                    View teacher portfolio &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
