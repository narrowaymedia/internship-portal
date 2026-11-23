"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Clock, BookOpen, ArrowUpRight } from "lucide-react";
import { Course } from "@/types";
import { Badge } from "@/components/ui/Badge";

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="group bg-[#ffffff] border border-[#ddd7ca] rounded-2xl overflow-hidden flex flex-col hover:border-[#17150f] transition-colors shadow-sm"
    >
      {/* Image container with hover zoom */}
      <Link href={`/courses/${course.slug}`} className="block">
        <div className="relative aspect-[16/10] overflow-hidden bg-[#e8e3d8]" style={{ position: "relative" }}>
          <Image
            src={course.heroImage}
            alt={course.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-3 left-3 flex items-center gap-1.5 z-10">
            <Badge variant="dark" dot>
              {course.category}
            </Badge>
            <Badge variant="outline" className="bg-white/90 backdrop-blur-sm">
              {course.level}
            </Badge>
          </div>
          <div className="absolute bottom-3 right-3 z-10">
            <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded-md bg-[#17150f] text-white">
              ${course.price}
            </span>
          </div>
        </div>
      </Link>

      {/* Content */}
      <div className="p-5 sm:p-6 flex flex-col flex-1">
        <div className="flex items-center justify-between text-xs text-[#7a746a] font-mono mb-2">
          <span className="flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5 text-[#f0532b]" />
            {course.lessonsCount} lessons
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            {course.duration}
          </span>
          <span className="flex items-center gap-1 text-[#17150f] font-semibold">
            <Star className="w-3.5 h-3.5 fill-[#f0532b] text-[#f0532b]" />
            {course.rating.toFixed(1)}
          </span>
        </div>

        <Link href={`/courses/${course.slug}`} className="group-hover:text-[#f0532b] transition-colors">
          <h3 className="font-bold text-lg md:text-xl text-[#17150f] tracking-tight">
            {course.title}
          </h3>
        </Link>

        <p className="mt-2 text-sm text-[#7a746a] line-clamp-2 leading-relaxed flex-1">
          {course.tagline}
        </p>

        {/* Instructor Footnote */}
        <div className="mt-5 pt-4 border-t border-[#ddd7ca] flex items-center justify-between">
          <Link
            href={`/teachers/${course.teacher.slug}`}
            className="flex items-center gap-2.5 group/teacher"
          >
            <div className="relative w-7 h-7 rounded-full overflow-hidden bg-[#e8e3d8]" style={{ position: "relative" }}>
              <Image
                src={course.teacher.photo}
                alt={course.teacher.name}
                fill
                sizes="28px"
                className="object-cover"
              />
            </div>
            <span className="text-xs font-medium text-[#17150f] group-hover/teacher:text-[#f0532b] transition-colors">
              with {course.teacher.name}
            </span>
          </Link>
          <Link
            href={`/courses/${course.slug}`}
            className="w-7 h-7 rounded-full bg-[#f4f1ea] group-hover:bg-[#f0532b] group-hover:text-white flex items-center justify-center transition-colors text-[#17150f]"
            aria-label="View course"
          >
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
