"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";

const navLinks = [
  { name: "Courses", href: "/courses" },
  { name: "Teachers", href: "/teachers" },
  { name: "Pricing", href: "/pricing" },
  { name: "About", href: "/about" },
  { name: "Journal", href: "/journal" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-[#17150f] text-[#f4f1ea] px-4 py-2 text-center text-[11px] font-mono tracking-wider flex items-center justify-center gap-3 border-b border-[#2a2720]">
        <span className="inline-flex items-center gap-1.5 text-[#f0532b]">
          <Sparkles className="w-3.5 h-3.5" />
          <span>WINTER 2026 COHORT</span>
        </span>
        <span className="hidden sm:inline text-[#7a746a]">|</span>
        <span className="hidden sm:inline">
          Short lessons, real projects &amp; 1:1 teacher feedback
        </span>
        <span className="hidden md:inline text-[#7a746a]">|</span>
        <Link
          href="/courses"
          className="underline decoration-[#f0532b] underline-offset-2 hover:text-[#f0532b] transition-colors"
        >
          Explore 8 courses &rarr;
        </Link>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-50 transition-all duration-200 border-b ${
          scrolled
            ? "bg-[#f4f1ea]/95 backdrop-blur-md border-[#ddd7ca] shadow-sm py-3"
            : "bg-[#f4f1ea] border-[#ddd7ca] py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <span className="w-8 h-8 rounded-lg bg-[#17150f] text-[#f4f1ea] flex items-center justify-center font-mono font-bold text-lg group-hover:bg-[#f0532b] transition-colors">
              *
            </span>
            <div className="flex flex-col">
              <span className="font-bold tracking-tight text-lg text-[#17150f] leading-none">
                PRIMER
              </span>
              <span className="font-mono text-[9px] uppercase tracking-widest text-[#7a746a] mt-0.5">
                Academy
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-1.5 rounded-lg text-sm transition-all ${
                    isActive
                      ? "bg-[#e8e3d8] text-[#17150f] font-semibold"
                      : "text-[#7a746a] hover:text-[#17150f] hover:bg-[#e8e3d8]/60 font-medium"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/courses"
              className="font-mono text-xs text-[#17150f] hover:text-[#f0532b] transition-colors"
            >
              Browse catalog
            </Link>
            <Button href="/enroll" size="sm" variant="primary">
              Enroll now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-[#17150f] hover:bg-[#e8e3d8] focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed inset-x-0 top-[97px] bg-[#f4f1ea] border-b border-[#ddd7ca] z-40 px-6 py-6 shadow-xl"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`flex items-center justify-between py-2 text-base font-medium border-b border-[#ddd7ca]/50 ${
                      isActive ? "text-[#f0532b]" : "text-[#17150f]"
                    }`}
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-4 h-4 text-[#7a746a]" />
                  </Link>
                );
              })}
              <div className="pt-4 flex flex-col gap-2.5">
                <Button href="/enroll" variant="primary" className="w-full">
                  Enroll in a course
                </Button>
                <Button href="/courses" variant="outline" className="w-full">
                  View all 8 courses
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
