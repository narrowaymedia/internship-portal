"use client";

import React, { useState } from "react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, Mail, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    topic: "Admissions & Course Question",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <Badge variant="dark" dot>
            Contact
          </Badge>
          <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold text-[#17150f] tracking-tight">
            Write to us. A real person replies within a day.
          </h1>
          <p className="mt-3 text-lg text-[#7a746a] leading-relaxed">
            Have questions about a course, material requirements, or institutional team access? Send us a note below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Form */}
          <div className="lg:col-span-7 bg-white border border-[#ddd7ca] rounded-2xl p-6 sm:p-8 shadow-sm">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#1e3a32] text-white flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6 text-[#f0532b]" />
                </div>
                <h3 className="text-2xl font-bold text-[#17150f]">
                  Message received!
                </h3>
                <p className="text-sm text-[#7a746a] max-w-md mx-auto">
                  Thanks for reaching out, {formData.name}. Our admissions desk will reply to {formData.email} within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#7a746a] mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Lena Weber"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 bg-[#f4f1ea] border border-[#ddd7ca] rounded-xl text-sm focus:outline-none focus:border-[#17150f]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#7a746a] mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="you@domain.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 bg-[#f4f1ea] border border-[#ddd7ca] rounded-xl text-sm focus:outline-none focus:border-[#17150f]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#7a746a] mb-1.5">
                    Topic
                  </label>
                  <select
                    value={formData.topic}
                    onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                    className="w-full px-4 py-2.5 bg-[#f4f1ea] border border-[#ddd7ca] rounded-xl text-sm focus:outline-none focus:border-[#17150f]"
                  >
                    <option>Admissions &amp; Course Question</option>
                    <option>Billing &amp; Refund Request</option>
                    <option>Teaching / Instructor Inquiries</option>
                    <option>Press &amp; Partnerships</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#7a746a] mb-1.5">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    required
                    placeholder="How can we help?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 bg-[#f4f1ea] border border-[#ddd7ca] rounded-xl text-sm focus:outline-none focus:border-[#17150f]"
                  />
                </div>

                <Button type="submit" size="lg" variant="primary" className="w-full">
                  Send message
                </Button>
              </form>
            )}
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#f4f1ea] border border-[#ddd7ca] rounded-2xl p-6 space-y-6">
              <h3 className="font-bold text-lg text-[#17150f]">
                Studio &amp; Office Details
              </h3>

              <div className="space-y-4 text-sm text-[#17150f]">
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#f0532b] mt-1 shrink-0" />
                  <div>
                    <p className="font-bold">Email</p>
                    <p className="text-[#7a746a]">hello@primeracademy.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#f0532b] mt-1 shrink-0" />
                  <div>
                    <p className="font-bold">Admissions Desk Hours</p>
                    <p className="text-[#7a746a]">Monday to Friday, 9:00 – 18:00 CET</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#f0532b] mt-1 shrink-0" />
                  <div>
                    <p className="font-bold">Principal Locations</p>
                    <p className="text-[#7a746a]">Kreuzberg, Berlin · Florence · Edinburgh</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
