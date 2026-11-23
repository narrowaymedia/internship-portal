import React from "react";
import { Badge } from "@/components/ui/Badge";

export default function PrivacyPage() {
  return (
    <div className="py-16 md:py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <Badge variant="dark">Legal Policy</Badge>
      <h1 className="mt-3 text-3xl sm:text-4xl font-extrabold text-[#17150f] tracking-tight">
        Privacy Policy
      </h1>
      <p className="mt-2 text-sm font-mono text-[#7a746a]">Last updated: November 2026</p>

      <div className="mt-8 space-y-6 text-[#17150f] leading-relaxed text-base">
        <p>
          At Primer Academy, we believe in radical transparency. We collect only the information necessary to provide you with seamless course streaming, 1:1 teacher critiques, and secure billing.
        </p>
        <h2 className="text-xl font-bold text-[#17150f] pt-4">1. Information We Collect</h2>
        <p>
          When you enroll, we collect your name, email address, and encrypted payment details handled by Stripe. We also store the work photos and video project links you upload to your student dashboard.
        </p>
        <h2 className="text-xl font-bold text-[#17150f] pt-4">2. How We Use Your Work</h2>
        <p>
          Your project uploads are kept strictly private between you and your instructor, unless you give explicit permission to showcase your project on our student wall.
        </p>
        <h2 className="text-xl font-bold text-[#17150f] pt-4">3. Data Security &amp; Deletion</h2>
        <p>
          You may request complete deletion of your student account and all uploaded coursework at any time by emailing privacy@primeracademy.com.
        </p>
      </div>
    </div>
  );
}
