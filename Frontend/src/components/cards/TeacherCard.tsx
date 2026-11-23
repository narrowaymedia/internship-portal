"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Teacher } from "@/types";

interface TeacherCardProps {
  teacher: Teacher;
}

export function TeacherCard({ teacher }: TeacherCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="group bg-[#ffffff] border border-[#ddd7ca] rounded-2xl overflow-hidden flex flex-col hover:border-[#17150f] transition-all shadow-sm"
    >
      <Link href={`/teachers/${teacher.slug}`} className="block">
        <div className="relative aspect-[4/5] overflow-hidden bg-[#e8e3d8]" style={{ position: "relative" }}>
          <Image
            src={teacher.photo}
            alt={teacher.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#100f0c]/80 via-transparent to-transparent opacity-80" />
          <div className="absolute bottom-4 left-4 right-4 text-white z-10">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#f0532b]">
              {teacher.experience}
            </span>
            <h3 className="text-xl font-bold tracking-tight text-white mt-0.5">
              {teacher.name}
            </h3>
            <p className="text-xs text-[#ddd7ca]">{teacher.role}</p>
          </div>
        </div>
      </Link>

      <div className="p-5 flex flex-col flex-1 justify-between bg-white">
        <p className="text-xs text-[#7a746a] italic line-clamp-2 leading-relaxed">
          &ldquo;{teacher.quote}&rdquo;
        </p>
        <div className="mt-4 pt-3 border-t border-[#ddd7ca] flex items-center justify-between text-xs">
          <span className="font-mono text-[11px] text-[#17150f]">
            {teacher.courseTitle}
          </span>
          <Link
            href={`/teachers/${teacher.slug}`}
            className="flex items-center gap-1 font-medium text-[#f0532b] hover:underline"
          >
            <span>Profile</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
