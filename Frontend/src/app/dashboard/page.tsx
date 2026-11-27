import type { Metadata } from "next";
import { StudentDashboard } from "@/components/dashboard/StudentDashboard";

export const metadata: Metadata = {
  title: "Student Dashboard — Gradeon Educational & Internship Portal",
  description: "Track your active studio internship applications, upcoming interviews, and preparatory course completions.",
  openGraph: {
    title: "Student Dashboard — Gradeon",
    description: "Personal internship application tracker and interview schedule."
  }
};

export default function DashboardRoute() {
  return (
    <main className="w-full flex flex-col items-center">
      <StudentDashboard />
    </main>
  );
}
