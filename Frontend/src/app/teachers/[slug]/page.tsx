import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { teachers } from "@/data/teachers";
import { courses } from "@/data/courses";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return teachers.map((teacher) => ({
    slug: teacher.slug,
  }));
}

export default async function TeacherDetailPage({ params }: Props) {
  const { slug } = await params;
  const teacher = teachers.find((t) => t.slug === slug);

  if (!teacher) {
    notFound();
  }

  const course = courses.find((c) => c.slug === teacher.courseSlug);

  return (
    <div className="pb-20">
      {/* Breadcrumb */}
      <div className="border-b border-[#ddd7ca] bg-white py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/teachers"
            className="inline-flex items-center gap-2 text-xs font-mono text-[#7a746a] hover:text-[#17150f] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to all teachers</span>
          </Link>
        </div>
      </div>

      {/* Profile Header */}
      <section className="py-12 md:py-16 border-b border-[#ddd7ca] bg-[#f4f1ea]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            {/* Photo */}
            <div className="md:col-span-5 lg:col-span-4">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-[#e8e3d8] border border-[#ddd7ca] shadow-md" style={{ position: "relative" }}>
                <Image
                  src={teacher.photo}
                  alt={teacher.name}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Bio & Details */}
            <div className="md:col-span-7 lg:col-span-8 space-y-6">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="orange" dot>
                  {teacher.discipline}
                </Badge>
                <Badge variant="outline">{teacher.experience}</Badge>
                <Badge variant="dark">{teacher.location}</Badge>
              </div>

              <h1 className="text-4xl sm:text-5xl font-extrabold text-[#17150f] tracking-tight">
                {teacher.name}
              </h1>

              <p className="text-lg font-medium text-[#f0532b]">
                {teacher.role}
              </p>

              <p className="text-lg text-[#7a746a] leading-relaxed max-w-2xl">
                {teacher.bio}
              </p>

              {/* Quote */}
              <div className="p-5 bg-white border-l-4 border-[#f0532b] rounded-r-xl border border-[#ddd7ca] max-w-2xl">
                <p className="text-sm md:text-base text-[#17150f] italic leading-relaxed">
                  &ldquo;{teacher.quote}&rdquo;
                </p>
                <p className="mt-2 text-xs font-mono text-[#7a746a] uppercase">
                  Philosophy on craft
                </p>
              </div>

              {/* Course link */}
              {course && (
                <div className="pt-2">
                  <Button href={`/courses/${course.slug}`} size="lg" variant="primary">
                    Learn with {teacher.name} (${course.price})
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Course Taught Section */}
      {course && (
        <section className="py-16 border-b border-[#ddd7ca] bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-[#17150f] tracking-tight mb-8">
              Course taught by {teacher.name}
            </h2>

            <div className="p-6 sm:p-8 bg-[#f4f1ea] border border-[#ddd7ca] rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2 max-w-xl">
                <Badge variant="dark">{course.category}</Badge>
                <h3 className="text-2xl font-bold text-[#17150f]">
                  {course.title}
                </h3>
                <p className="text-sm text-[#7a746a] leading-relaxed">
                  {course.tagline}
                </p>
                <div className="flex items-center gap-4 text-xs font-mono text-[#7a746a] pt-2">
                  <span>{course.lessonsCount} lessons</span>
                  <span>·</span>
                  <span>{course.duration}</span>
                  <span>·</span>
                  <span>Personal video critique included</span>
                </div>
              </div>

              <Button href={`/courses/${course.slug}`} size="md" variant="primary" className="shrink-0">
                View course syllabus &rarr;
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* Student Work Gallery */}
      {teacher.studentProjects && teacher.studentProjects.length > 0 && (
        <section className="py-16 bg-[#f4f1ea]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-[#17150f] tracking-tight mb-8">
              Student work under {teacher.name}&rsquo;s critique
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {teacher.studentProjects.map((proj) => (
                <div
                  key={proj.title}
                  className="bg-white border border-[#ddd7ca] rounded-2xl overflow-hidden shadow-sm"
                >
                  <div className="relative aspect-[4/3] bg-[#e8e3d8]" style={{ position: "relative" }}>
                    <Image
                      src={proj.image}
                      alt={proj.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold text-base text-[#17150f]">{proj.title}</h4>
                    <p className="text-xs font-mono text-[#7a746a] mt-0.5">
                      Submitted by {proj.studentName}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
