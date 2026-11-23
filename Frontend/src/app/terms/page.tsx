import React from "react";
import { Badge } from "@/components/ui/Badge";

export default function TermsPage() {
  return (
    <div className="py-16 md:py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <Badge variant="dark">Agreement</Badge>
      <h1 className="mt-3 text-3xl sm:text-4xl font-extrabold text-[#17150f] tracking-tight">
        Terms of Service
      </h1>
      <p className="mt-2 text-sm font-mono text-[#7a746a]">Last updated: November 2026</p>

      <div className="mt-8 space-y-6 text-[#17150f] leading-relaxed text-base">
        <p>
          By creating an account or enrolling in any Primer course or membership plan, you agree to these Terms of Service.
        </p>
        <h2 className="text-xl font-bold text-[#17150f] pt-4">1. License &amp; Course Access</h2>
        <p>
          Course enrollment grants you a personal, non-transferable license to view lessons, download project materials, and submit work for asynchronous feedback.
        </p>
        <h2 className="text-xl font-bold text-[#17150f] pt-4">2. 14-Day Refund Guarantee</h2>
        <p>
          Every plan includes an unconditional 14-day refund window. Contact support within 14 days of purchase for a 100% full refund with no questions asked.
        </p>
      </div>
    </div>
  );
}
