import React from "react";
import { teachers } from "@/data/teachers";
import { Badge } from "@/components/ui/Badge";
import { TeacherCard } from "@/components/cards/TeacherCard";

export default function TeachersPage() {
  return (
    <div className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <Badge variant="dark" dot>
            Faculty &amp; Mentors
          </Badge>
          <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold text-[#17150f] tracking-tight">
            Our teachers still make things for a living.
          </h1>
          <p className="mt-3 text-lg text-[#7a746a] leading-relaxed">
            Every instructor at Primer runs an active studio, kitchen, or publishing practice. They don’t teach outdated theory; they share the habits, techniques, and critical eyes that define their daily work.
          </p>
        </div>

        {/* Teachers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teachers.map((teacher) => (
            <TeacherCard key={teacher.slug} teacher={teacher} />
          ))}
        </div>
      </div>
    </div>
  );
}
