"use client";

import React, { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, CheckCircle2, Lock, ArrowRight } from "lucide-react";
import { courses } from "@/data/courses";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

function EnrollContent() {
  const searchParams = useSearchParams();
  const initialCourseSlug = searchParams.get("course") || courses[0].slug;
  const initialPlan = searchParams.get("plan") || "all-access";

  const [selectedPlan, setSelectedPlan] = useState<string>(initialPlan);
  const [selectedCourse, setSelectedCourse] = useState<string>(initialCourseSlug);

  // Form states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const currentCourse = courses.find((c) => c.slug === selectedCourse) || courses[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  const planPricing = {
    "single": { name: `Single Course: ${currentCourse.title}`, price: `$${currentCourse.price}`, billing: "one-time payment" },
    "all-access": { name: "All-Access Membership (7-day trial)", price: "$16/mo", billing: "billed annually after trial" },
    "lifetime": { name: "Lifetime Studio Patron", price: "$390", billing: "one payment, lifetime access" },
  };

  const activePlanInfo = planPricing[selectedPlan as keyof typeof planPricing] || planPricing["all-access"];

  if (isSuccess) {
    return (
      <div className="max-w-xl mx-auto py-20 px-4 text-center space-y-6">
        <div className="w-16 h-16 rounded-full bg-[#1e3a32] text-white flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8 text-[#f0532b]" />
        </div>
        <h1 className="text-3xl font-extrabold text-[#17150f]">
          Welcome to Primer, {name.split(" ")[0]}!
        </h1>
        <p className="text-base text-[#7a746a] leading-relaxed">
          We&rsquo;ve sent your student login and onboarding link to <strong className="text-[#17150f]">{email}</strong>. Your 7-day free trial has officially started.
        </p>
        <div className="p-6 bg-white border border-[#ddd7ca] rounded-2xl text-left space-y-2">
          <p className="font-mono text-xs text-[#7a746a] uppercase">Enrolled Course / Plan</p>
          <p className="font-bold text-lg text-[#17150f]">{activePlanInfo.name}</p>
          <p className="text-xs text-[#7a746a]">First lesson is waiting in your dashboard.</p>
        </div>
        <div className="pt-4">
          <Button href={`/courses/${currentCourse.slug}`} size="lg" variant="primary">
            Go to your first lesson &rarr;
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <Badge variant="orange" dot>
            Enrollment
          </Badge>
          <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold text-[#17150f] tracking-tight">
            Start your first lesson today.
          </h1>
          <p className="mt-3 text-lg text-[#7a746a]">
            7 days free on All-Access, cancel any time. 14-day money-back guarantee on all single courses.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Enrollment Form */}
          <div className="lg:col-span-7 bg-white border border-[#ddd7ca] rounded-2xl p-6 sm:p-8 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Step 1: Choose Plan */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#7a746a] mb-3">
                  Step 1: Choose Your Plan
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedPlan("all-access")}
                    className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                      selectedPlan === "all-access"
                        ? "border-[#f0532b] bg-[#f0532b]/5 ring-1 ring-[#f0532b]"
                        : "border-[#ddd7ca] hover:border-[#17150f]"
                    }`}
                  >
                    <span className="text-xs font-mono text-[#f0532b] font-bold block">7 DAYS FREE</span>
                    <span className="font-bold text-sm text-[#17150f] block mt-1">All-Access</span>
                    <span className="text-xs text-[#7a746a]">$16/mo (billed yr)</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedPlan("single")}
                    className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                      selectedPlan === "single"
                        ? "border-[#f0532b] bg-[#f0532b]/5 ring-1 ring-[#f0532b]"
                        : "border-[#ddd7ca] hover:border-[#17150f]"
                    }`}
                  >
                    <span className="text-xs font-mono text-[#7a746a] block">LIFETIME</span>
                    <span className="font-bold text-sm text-[#17150f] block mt-1">Single Course</span>
                    <span className="text-xs text-[#7a746a]">${currentCourse.price} one-time</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedPlan("lifetime")}
                    className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                      selectedPlan === "lifetime"
                        ? "border-[#f0532b] bg-[#f0532b]/5 ring-1 ring-[#f0532b]"
                        : "border-[#ddd7ca] hover:border-[#17150f]"
                    }`}
                  >
                    <span className="text-xs font-mono text-[#7a746a] block">PATRON</span>
                    <span className="font-bold text-sm text-[#17150f] block mt-1">Full Lifetime</span>
                    <span className="text-xs text-[#7a746a]">$390 one-time</span>
                  </button>
                </div>
              </div>

              {/* Course Selection (if single course or to choose primary starter) */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#7a746a] mb-2">
                  Select Starting Course
                </label>
                <select
                  value={selectedCourse}
                  onChange={(e) => setSelectedCourse(e.target.value)}
                  className="w-full px-4 py-2.5 bg-[#f4f1ea] border border-[#ddd7ca] rounded-xl text-sm font-medium text-[#17150f] focus:outline-none focus:border-[#17150f]"
                >
                  {courses.map((c) => (
                    <option key={c.slug} value={c.slug}>
                      {c.title} — with {c.teacher.name} (${c.price})
                    </option>
                  ))}
                </select>
              </div>

              {/* Step 2: Student Details */}
              <div className="space-y-4 pt-2">
                <label className="block text-xs font-mono uppercase tracking-wider text-[#7a746a]">
                  Step 2: Student Information
                </label>

                <div>
                  <label className="block text-xs text-[#7a746a] mb-1">Full name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Maya Chen"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2.5 bg-[#f4f1ea] border border-[#ddd7ca] rounded-xl text-sm text-[#17150f] focus:outline-none focus:border-[#17150f]"
                  />
                </div>

                <div>
                  <label className="block text-xs text-[#7a746a] mb-1">Email address</label>
                  <input
                    type="email"
                    required
                    placeholder="you@domain.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2.5 bg-[#f4f1ea] border border-[#ddd7ca] rounded-xl text-sm text-[#17150f] focus:outline-none focus:border-[#17150f]"
                  />
                </div>
              </div>

              {/* Step 3: Payment Mockup */}
              <div className="space-y-4 pt-2">
                <label className="block text-xs font-mono uppercase tracking-wider text-[#7a746a]">
                  Step 3: Payment Method
                </label>

                <div className="p-4 bg-[#f4f1ea] border border-[#ddd7ca] rounded-xl space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono text-[#7a746a]">
                    <span className="flex items-center gap-1.5">
                      <Lock className="w-3.5 h-3.5 text-[#1e3a32]" />
                      256-bit encrypted checkout
                    </span>
                    <span>Stripe Verified</span>
                  </div>
                  <input
                    type="text"
                    placeholder="Card number (4242 •••• •••• 4242)"
                    defaultValue="4242 •••• •••• 4242"
                    className="w-full px-4 py-2 bg-white border border-[#ddd7ca] rounded-lg text-sm text-[#17150f] font-mono focus:outline-none"
                  />
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      type="text"
                      placeholder="MM / YY"
                      defaultValue="12 / 28"
                      className="px-4 py-2 bg-white border border-[#ddd7ca] rounded-lg text-sm text-[#17150f] font-mono focus:outline-none"
                    />
                    <input
                      type="text"
                      placeholder="CVC"
                      defaultValue="982"
                      className="px-4 py-2 bg-white border border-[#ddd7ca] rounded-lg text-sm text-[#17150f] font-mono focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Submit */}
              <div className="pt-4">
                <Button
                  type="submit"
                  size="lg"
                  variant="primary"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Processing..." : `Complete Enrollment · ${activePlanInfo.price}`}
                </Button>
                <p className="text-center text-xs font-mono text-[#7a746a] mt-3">
                  {selectedPlan === "all-access"
                    ? "You will not be charged today. 7 days completely free."
                    : "Instant access. Backed by our 14-day money-back guarantee."}
                </p>
              </div>
            </form>
          </div>

          {/* Right Column: Order Summary */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#f4f1ea] border border-[#ddd7ca] rounded-2xl p-6 space-y-5">
              <h3 className="font-bold text-lg text-[#17150f]">
                Order Summary
              </h3>

              <div className="flex gap-4 items-center pb-4 border-b border-[#ddd7ca]">
                <div className="relative w-16 h-12 rounded-lg overflow-hidden bg-[#e8e3d8] shrink-0">
                  <Image
                    src={currentCourse.heroImage}
                    alt={currentCourse.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#17150f]">{currentCourse.title}</p>
                  <p className="text-xs text-[#7a746a]">with {currentCourse.teacher.name}</p>
                </div>
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-[#7a746a]">
                  <span>Plan</span>
                  <span className="font-medium text-[#17150f]">{activePlanInfo.name}</span>
                </div>
                <div className="flex justify-between text-[#7a746a]">
                  <span>Billing interval</span>
                  <span>{activePlanInfo.billing}</span>
                </div>
                <div className="flex justify-between text-[#7a746a]">
                  <span>Due today</span>
                  <span className="font-bold text-[#17150f]">
                    {selectedPlan === "all-access" ? "$0.00" : activePlanInfo.price}
                  </span>
                </div>
              </div>

              <div className="pt-4 border-t border-[#ddd7ca] space-y-2 text-xs font-mono text-[#7a746a]">
                <p className="flex items-center gap-2 text-[#17150f]">
                  <CheckCircle2 className="w-4 h-4 text-[#f0532b]" />
                  <span>1:1 teacher video critique included</span>
                </p>
                <p className="flex items-center gap-2 text-[#17150f]">
                  <CheckCircle2 className="w-4 h-4 text-[#f0532b]" />
                  <span>Full access to materials shopping list</span>
                </p>
                <p className="flex items-center gap-2 text-[#17150f]">
                  <ShieldCheck className="w-4 h-4 text-[#f0532b]" />
                  <span>14-day unconditional refund policy</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function EnrollPage() {
  return (
    <Suspense fallback={<div className="p-20 text-center font-mono">Loading checkout...</div>}>
      <EnrollContent />
    </Suspense>
  );
}
