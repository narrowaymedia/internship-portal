import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Primer — Online Course: Education Academy & Online School",
  description:
    "Primer is an online course academy. Short video lessons taught by people who do the work, a real project in every course and feedback from your teacher on each one.",
  icons: {
    icon: "https://framerusercontent.com/images/JZF7xyD3BbSLLgMa73FP0FSDRU.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased font-sans">
      <body className="min-h-full flex flex-col bg-[#f4f1ea] text-[#17150f]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
