import React from "react";
import { Badge } from "@/components/ui/Badge";

export default function CookiesPage() {
  return (
    <div className="py-16 md:py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <Badge variant="dark">Preferences</Badge>
      <h1 className="mt-3 text-3xl sm:text-4xl font-extrabold text-[#17150f] tracking-tight">
        Cookie Policy
      </h1>
      <p className="mt-2 text-sm font-mono text-[#7a746a]">Last updated: November 2026</p>

      <div className="mt-8 space-y-6 text-[#17150f] leading-relaxed text-base">
        <p>
          We use essential cookies strictly to maintain your authenticated student session, remember your lesson playback positions, and ensure secure payments. We do not sell your browsing data.
        </p>
      </div>
    </div>
  );
}
