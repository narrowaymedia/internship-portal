import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#100f0c] text-[#f4f1ea] border-t border-[#2a2720] mt-auto">
      {/* Upper Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand Manifesto Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5 group inline-flex">
              <span className="w-8 h-8 rounded-lg bg-[#f0532b] text-white flex items-center justify-center font-mono font-bold text-lg">
                *
              </span>
              <span className="font-bold tracking-tight text-xl text-white">
                PRIMER
              </span>
            </Link>
            <p className="text-sm text-[#9a9388] leading-relaxed max-w-sm">
              An online course academy for hands-on crafts. Short video lessons taught by people who do the work, one real portfolio project per course, and direct asynchronous teacher feedback.
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center gap-2 font-mono text-xs text-[#ddd7ca]">
                <span className="w-2 h-2 rounded-full bg-[#f0532b]" />
                12,480+ active makers worldwide
              </span>
            </div>
          </div>

          {/* Courses Column */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-[#9a9388] mb-4">
              Courses
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/courses/abstract-painting" className="hover:text-[#f0532b] transition-colors">
                  Abstract Painting
                </Link>
              </li>
              <li>
                <Link href="/courses/cook-like-a-chef" className="hover:text-[#f0532b] transition-colors">
                  Cook Like a Chef
                </Link>
              </li>
              <li>
                <Link href="/courses/graphic-design-basics" className="hover:text-[#f0532b] transition-colors">
                  Graphic Design Basics
                </Link>
              </li>
              <li>
                <Link href="/courses/creative-writing" className="hover:text-[#f0532b] transition-colors">
                  Creative Writing
                </Link>
              </li>
              <li>
                <Link href="/courses/film-photography" className="hover:text-[#f0532b] transition-colors">
                  Film Photography
                </Link>
              </li>
              <li>
                <Link href="/courses/filmmaking-on-a-budget" className="hover:text-[#f0532b] transition-colors">
                  Filmmaking on a Budget
                </Link>
              </li>
              <li>
                <Link href="/courses/packaging-design" className="hover:text-[#f0532b] transition-colors">
                  Packaging Design
                </Link>
              </li>
              <li>
                <Link href="/courses/woodworking-at-home" className="hover:text-[#f0532b] transition-colors">
                  Woodworking at Home
                </Link>
              </li>
            </ul>
          </div>

          {/* Academy Column */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-[#9a9388] mb-4">
              Academy
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/about" className="hover:text-[#f0532b] transition-colors">
                  Our Method &amp; Story
                </Link>
              </li>
              <li>
                <Link href="/teachers" className="hover:text-[#f0532b] transition-colors">
                  Our Teachers
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-[#f0532b] transition-colors">
                  Pricing &amp; All-Access
                </Link>
              </li>
              <li>
                <Link href="/journal" className="hover:text-[#f0532b] transition-colors">
                  The Primer Journal
                </Link>
              </li>
              <li>
                <Link href="/enroll" className="hover:text-[#f0532b] transition-colors flex items-center gap-1">
                  <span>Start Free Trial</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#f0532b]" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-[#9a9388] mb-4">
              Support &amp; Inquiries
            </h4>
            <ul className="space-y-2.5 text-sm text-[#9a9388]">
              <li>
                <Link href="/contact" className="hover:text-[#f0532b] transition-colors text-white">
                  Contact admissions &rarr;
                </Link>
              </li>
              <li>hello@primeracademy.com</li>
              <li>Response time: within 24 hours</li>
              <li className="pt-2 font-mono text-xs text-[#7a746a]">
                STUDIOS: BERLIN · FLORENCE · STOCKHOLM · EDINBURGH
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#2a2720] mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#7a746a]">
          <p>&copy; {new Date().getFullYear()} Primer Education Academy. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookies" className="hover:text-white transition-colors">
              Cookie Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
