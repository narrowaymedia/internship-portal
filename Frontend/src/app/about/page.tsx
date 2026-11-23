import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export default function AboutPage() {
  return (
    <div className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <Badge variant="dark" dot>
            About Primer
          </Badge>
          <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold text-[#17150f] tracking-tight leading-tight">
            We started with one teacher, one camera and a sketchbook.
          </h1>
          <p className="mt-4 text-xl text-[#7a746a] leading-relaxed">
            Today, 12,480 students learn real crafts with short lessons, tangible projects, and personalized markup from people who do the work for a living.
          </p>
        </div>

        {/* Big Editorial Visual */}
        <div className="relative aspect-[21/9] rounded-2xl overflow-hidden bg-[#e8e3d8] border border-[#ddd7ca] mb-16">
          <Image
            src="https://framerusercontent.com/images/m19PzR3EFa7CYtPwpKDAmHwbAM.webp"
            alt="Primer studio workshop"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute bottom-6 left-6 font-mono text-xs text-white bg-black/70 px-3 py-1.5 rounded-md">
            STUDIO NO. 01 · FOUNDING SESSION
          </div>
        </div>

        {/* Manifesto Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 max-w-5xl mb-20">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[#17150f]">
              Why the world doesn&rsquo;t need another video library
            </h2>
            <p className="text-base text-[#7a746a] leading-relaxed">
              The internet is flooded with infinite video courses. You can watch thousands of hours of masterclasses, subscribe to infinite tutorials, and bookmark endless playlists.
            </p>
            <p className="text-base text-[#7a746a] leading-relaxed">
              Yet most people finish zero projects. They mistake the passive dopamine of watching someone else excel for their own competence. You cannot learn to paint by watching; you cannot learn to cook without burning butter; you cannot make a table without dulling a chisel.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[#17150f]">
              The Apprenticeship Model, Modernized
            </h2>
            <p className="text-base text-[#7a746a] leading-relaxed">
              Throughout history, real crafts were passed down through direct observation and honest correction: an apprentice made a piece, and the master marked up the flaws in red chalk.
            </p>
            <p className="text-base text-[#7a746a] leading-relaxed">
              Primer re-creates that exact model asynchronously. Our lessons are ten minutes of pure technique, after which you shut your laptop and get to work. Once you finish, your teacher reviews your submission with personalized video markup.
            </p>
          </div>
        </div>

        {/* Core Principles */}
        <div className="p-8 sm:p-12 bg-white border border-[#ddd7ca] rounded-2xl max-w-5xl mx-auto space-y-8">
          <h3 className="font-mono text-xs uppercase tracking-widest text-[#f0532b] font-bold">
            Our Core Principles
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <p className="font-mono text-xl font-bold text-[#17150f] mb-2">01</p>
              <h4 className="font-bold text-base text-[#17150f]">No Teleprompters</h4>
              <p className="text-sm text-[#7a746a] mt-1 leading-relaxed">
                We travel directly to our teachers&rsquo; working studios. They teach the exact habits they use every single day.
              </p>
            </div>
            <div>
              <p className="font-mono text-xl font-bold text-[#17150f] mb-2">02</p>
              <h4 className="font-bold text-base text-[#17150f]">One Real Project</h4>
              <p className="text-sm text-[#7a746a] mt-1 leading-relaxed">
                You will not complete busywork exercises. Every course culminates in a piece worthy of framing, serving, or publishing.
              </p>
            </div>
            <div>
              <p className="font-mono text-xl font-bold text-[#17150f] mb-2">03</p>
              <h4 className="font-bold text-base text-[#17150f]">Human Critique</h4>
              <p className="text-sm text-[#7a746a] mt-1 leading-relaxed">
                No automated bot grading. Every project review is recorded by an experienced human practitioner.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center space-y-6">
          <h2 className="text-3xl font-extrabold text-[#17150f]">
            Ready to learn your next craft?
          </h2>
          <div className="flex items-center justify-center gap-4">
            <Button href="/enroll" size="lg" variant="primary">
              Start your free trial
            </Button>
            <Button href="/courses" size="lg" variant="outline">
              Explore courses
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
