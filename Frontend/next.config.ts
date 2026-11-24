import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  async redirects() {
    return [
      {
        source: "/internship",
        destination: "/internships",
        permanent: true,
      },
      {
        source: "/internship/:slug",
        destination: "/internships/:slug",
        permanent: true,
      },
      // Legacy Primer course-site routes -> internship portal routes
      { source: "/courses", destination: "/internships", permanent: true },
      { source: "/courses/abstract-painting", destination: "/internships/fine-arts-studio-assistant-residency", permanent: true },
      { source: "/courses/cook-like-a-chef", destination: "/internships/culinary-arts-kitchen-staging", permanent: true },
      { source: "/courses/graphic-design-basics", destination: "/internships/bauhaus-product-design-intern", permanent: true },
      { source: "/courses/woodworking-at-home", destination: "/internships/spatial-woodwork-apprentice", permanent: true },
      { source: "/courses/filmmaking-on-a-budget", destination: "/internships/monochrome-editorial-film-apprentice", permanent: true },
      { source: "/courses/film-photography", destination: "/internships/documentary-photojournalism-fellow", permanent: true },
      { source: "/courses/packaging-design", destination: "/internships/visual-brand-identity-designer", permanent: true },
      { source: "/courses/creative-writing", destination: "/internships/narrative-brand-writing-resident", permanent: true },
      { source: "/courses/:slug", destination: "/internships", permanent: true },
      { source: "/teachers", destination: "/mentors", permanent: true },
      { source: "/teachers/sofia-lind", destination: "/mentors/greta-lindemann", permanent: true },
      { source: "/teachers/tom-keller", destination: "/mentors/lars-lindqvist", permanent: true },
      { source: "/teachers/daniel-weiss", destination: "/mentors/arthur-pendelton", permanent: true },
      { source: "/teachers/ines-moreau", destination: "/mentors/claire-delacroix", permanent: true },
      { source: "/teachers/hana-ito", destination: "/mentors/chloe-vance", permanent: true },
      { source: "/teachers/clara-moss", destination: "/mentors/marianne-vance", permanent: true },
      { source: "/teachers/:slug", destination: "/mentors/:slug", permanent: true },
      { source: "/enroll", destination: "/apply", permanent: true },
      { source: "/journal", destination: "/blog", permanent: true },
      { source: "/journal/why-short-lessons-work", destination: "/blog/one-page-resume", permanent: true },
      { source: "/journal/first-project-not-perfect", destination: "/blog/first-internship-not-perfect", permanent: true },
      { source: "/journal/how-feedback-works", destination: "/blog/portfolio-interview-prep", permanent: true },
      { source: "/journal/filming-our-lessons", destination: "/blog/how-we-vet-studios", permanent: true },
      { source: "/journal/build-a-practice-habit", destination: "/blog/while-you-wait-to-hear-back", permanent: true },
      { source: "/journal/from-student-to-show", destination: "/blog/from-college-to-studio", permanent: true },
      { source: "/journal/:slug", destination: "/blog", permanent: true },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "framerusercontent.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
