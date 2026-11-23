"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Check, ShieldCheck, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Accordion } from "@/components/ui/Accordion";
import { faqs } from "@/data/faqs";

export default function PricingPage() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "annual">("annual");

  const pricingFaqs = faqs.filter(
    (f) => f.category === "Membership & Billing" || f.category === "Courses & Feedback"
  );

  return (
    <div className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Badge variant="orange" dot>
            Tuition &amp; Plans
          </Badge>
          <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold text-[#17150f] tracking-tight">
            One course for life or All-Access from $16 a month.
          </h1>
          <p className="mt-4 text-lg text-[#7a746a] leading-relaxed">
            Every plan includes direct 1:1 teacher critiques, project downloads, and a full 14-day money-back guarantee.
          </p>

          {/* Toggle */}
          <div className="mt-8 inline-flex items-center p-1 bg-[#e8e3d8] rounded-xl border border-[#ddd7ca]">
            <button
              onClick={() => setBillingPeriod("monthly")}
              className={`px-5 py-2 text-xs font-mono uppercase tracking-wider rounded-lg transition-all cursor-pointer ${
                billingPeriod === "monthly"
                  ? "bg-white text-[#17150f] font-bold shadow-sm"
                  : "text-[#7a746a] hover:text-[#17150f]"
              }`}
            >
              Billed monthly
            </button>
            <button
              onClick={() => setBillingPeriod("annual")}
              className={`px-5 py-2 text-xs font-mono uppercase tracking-wider rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
                billingPeriod === "annual"
                  ? "bg-[#17150f] text-white font-bold shadow-sm"
                  : "text-[#7a746a] hover:text-[#17150f]"
              }`}
            >
              <span>Billed annually</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#f0532b] text-white">
                SAVE 35%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {/* Plan 1: Single Course */}
          <div className="bg-white border border-[#ddd7ca] rounded-2xl p-8 flex flex-col justify-between shadow-sm">
            <div>
              <Badge variant="outline">Single Course</Badge>
              <h3 className="text-2xl font-bold text-[#17150f] mt-3">Single Craft Pass</h3>
              <p className="text-sm text-[#7a746a] mt-1">
                Lifetime access to any single course of your choice.
              </p>

              <div className="mt-6 pt-6 border-t border-[#ddd7ca]">
                <div className="flex items-baseline">
                  <span className="text-4xl font-extrabold text-[#17150f] font-mono">$79</span>
                  <span className="text-xs text-[#7a746a] ml-2">one-time payment</span>
                </div>
              </div>

              <ul className="mt-8 space-y-3.5 text-sm text-[#17150f]">
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#f0532b] shrink-0" />
                  <span>Full lifetime access to 1 chosen course</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#f0532b] shrink-0" />
                  <span>1:1 teacher video critique on your final project</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#f0532b] shrink-0" />
                  <span>Printable material shopping guides</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#f0532b] shrink-0" />
                  <span>4K video streaming on desktop &amp; mobile</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-[#ddd7ca]">
              <Button href="/courses" variant="outline" className="w-full">
                Choose a course
              </Button>
            </div>
          </div>

          {/* Plan 2: All Access (Featured) */}
          <div className="bg-[#17150f] text-white border-2 border-[#f0532b] rounded-2xl p-8 flex flex-col justify-between shadow-xl relative scale-105 z-10">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
              <span className="px-3.5 py-1 bg-[#f0532b] text-white text-[11px] font-mono uppercase tracking-wider rounded-full font-bold shadow-md">
                MOST POPULAR
              </span>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <Badge variant="dark" className="border-white/20 text-[#f0532b]">
                  Full Academy
                </Badge>
                <span className="font-mono text-xs text-[#ddd7ca]">7-day free trial</span>
              </div>

              <h3 className="text-2xl font-bold text-white mt-3">All-Access Membership</h3>
              <p className="text-sm text-[#9a9388] mt-1">
                Learn every craft with unlimited teacher reviews.
              </p>

              <div className="mt-6 pt-6 border-t border-[#2a2720]">
                <div className="flex items-baseline">
                  <span className="text-4xl font-extrabold text-white font-mono">
                    ${billingPeriod === "annual" ? "16" : "24"}
                  </span>
                  <span className="text-xs text-[#9a9388] ml-2">
                    per month, billed {billingPeriod}
                  </span>
                </div>
              </div>

              <ul className="mt-8 space-y-3.5 text-sm text-[#ddd7ca]">
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#f0532b] shrink-0" />
                  <span className="text-white font-medium">All 8 current master courses included</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#f0532b] shrink-0" />
                  <span>All future new course releases</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#f0532b] shrink-0" />
                  <span>Unlimited 1:1 teacher critiques on every project</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#f0532b] shrink-0" />
                  <span>Private student discord &amp; feedback archive</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#f0532b] shrink-0" />
                  <span>Cancel anytime with 1-click</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-[#2a2720]">
              <Button href="/enroll?plan=all-access" variant="primary" className="w-full">
                Start 7-day free trial
              </Button>
            </div>
          </div>

          {/* Plan 3: Lifetime Studio */}
          <div className="bg-white border border-[#ddd7ca] rounded-2xl p-8 flex flex-col justify-between shadow-sm">
            <div>
              <Badge variant="outline">Studio Patron</Badge>
              <h3 className="text-2xl font-bold text-[#17150f] mt-3">Lifetime Patron</h3>
              <p className="text-sm text-[#7a746a] mt-1">
                One payment forever. Never pay another subscription fee.
              </p>

              <div className="mt-6 pt-6 border-t border-[#ddd7ca]">
                <div className="flex items-baseline">
                  <span className="text-4xl font-extrabold text-[#17150f] font-mono">$390</span>
                  <span className="text-xs text-[#7a746a] ml-2">pay once, own forever</span>
                </div>
              </div>

              <ul className="mt-8 space-y-3.5 text-sm text-[#17150f]">
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#f0532b] shrink-0" />
                  <span>Lifetime access to everything Primer ever makes</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#f0532b] shrink-0" />
                  <span>Priority 24-hour teacher critique queue</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#f0532b] shrink-0" />
                  <span>Exclusive quarterly masterclass live streams</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#f0532b] shrink-0" />
                  <span>Direct email access to academy founders</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-[#ddd7ca]">
              <Button href="/enroll?plan=lifetime" variant="secondary" className="w-full">
                Join as Lifetime Patron
              </Button>
            </div>
          </div>
        </div>

        {/* Guarantee Banner */}
        <div className="mt-16 max-w-4xl mx-auto p-8 bg-[#e8e3d8] border border-[#ddd7ca] rounded-2xl flex flex-col sm:flex-row items-center gap-6">
          <div className="w-16 h-16 rounded-full bg-[#17150f] text-[#f0532b] flex items-center justify-center shrink-0">
            <ShieldCheck className="w-8 h-8" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-[#17150f]">
              Our 14-Day &ldquo;Zero Regrets&rdquo; Guarantee
            </h3>
            <p className="mt-1 text-sm text-[#7a746a] leading-relaxed">
              We want you to learn a skill you are genuinely proud of. If you watch the lessons, attempt the project, and decide Primer is not for you within 14 days, send one email to hello@primeracademy.com and we will refund 100% of your tuition instantly.
            </p>
          </div>
        </div>

        {/* Pricing FAQs */}
        <div className="mt-20 max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <Badge variant="dark" dot>
              FAQ
            </Badge>
            <h2 className="mt-2 text-2xl font-bold text-[#17150f]">
              Billing &amp; Access Questions
            </h2>
          </div>
          <Accordion
            items={pricingFaqs.map((f) => ({
              id: f.id,
              title: f.question,
              content: f.answer,
              meta: f.category,
            }))}
          />
        </div>
      </div>
    </div>
  );
}
