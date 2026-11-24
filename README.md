# 🏛️ Primer — Educational Internship & Masterclass Portal

An educational internship, fellowship, and masterclass portal built with **Next.js 16 (App Router)**, **React 19**, **TypeScript 5**, and **Tailwind CSS 4**.

Primer bridges hands-on creative & technical masterclasses directly with verified industry studio internships. Students learn foundational skills from working masters, build real portfolio projects, and fast-track their applications into premier design ateliers, software labs, Michelin-starred kitchens, and media studios.

---

## ✨ Key Features

### 1. 💼 Verified Internship & Fellowship Directory (`/internships`)
- **Curated Studio Placements**: 10+ high-profile, paid fellowships across Python, Web Development, and AI Engineering.
- **Dynamic Search & Multi-Filters**: Instant client-side search by title, company, skills, or location, with filtering by Track/Department, Workplace Type (*Remote, Hybrid, On-site*), and Duration (*3 Months, 4–6 Months*).
- **Sort Options**: Filter by Featured, Highest Stipend, Approaching Deadlines, or Most Available Openings.
- **One-Click Bookmarking**: Save opportunities to your personal student dashboard for quick comparison and preparation.

### 2. 📋 Comprehensive Placement Specifications (`/internships/[slug]`)
- **Detailed Role Profiles**: Contextual background on partner ateliers, monthly compensation breakdown, and opening counts.
- **Structured Mentorship Milestones**: 3-phase curriculum showing what the intern will learn and deliver in Month 1, Month 2, and Month 3.
- **Assigned Master Practitioner**: Direct bios and credentials of the senior mentor overseeing the placement.
- **Fast-Track Course Pathway**: Direct integration with linked Primer masterclasses—completing the course project fast-tracks candidate dossiers directly to studio hiring leads.

### 3. 🚀 Interactive Application Modal
- **Multi-Step Application Flow**: 
  1. *Candidate Profile*: Name, verified email, university/institution, graduation year, and portfolio/GitHub links.
  2. *Portfolio & Pitch*: Pitch note, resume attachment simulation, and fast-track course verification.
- **Persistent Storage**: Applications are saved locally to `localStorage` and synchronized across tabs in real-time.
- **Smart Autofill**: Remembers previous candidate details for rapid subsequent applications.

### 4. 📊 Student Application Dashboard & Tracker (`/dashboard`)
- **Pipeline Status Tracking**: Monitor active applications across four pipeline stages:
  - `Submitted` → `Under Review` → `Interview Scheduled` → `Offer Extended`
- **Interview Scheduling Integration**: Highlights confirmed studio interview dates with video call links.
- **Saved Opportunities Manager**: Manage and launch applications for bookmarked placements.
- **Preparation Pathways Guide**: Step-by-step roadmap explaining how course completion unlocks guaranteed studio interview reviews.

### 5. 🧭 Mentors, Career Blog & Apply (`/mentors`, `/blog`, `/apply`)
- The Primer design sections (home, mentors, blog, pricing, about, contact) are reworded for the internship portal and link to `/internships`.
- Legacy routes redirect: `/courses` → `/internships`, `/teachers` → `/mentors`, `/journal` → `/blog`, `/enroll` → `/apply` (see `Frontend/next.config.ts`).

### 6. 🎨 High-Craft Editorial Design System
- Warm tactile color palette (*bone*, *deep evergreen ink*, *terracotta brass*, *forest pine*, *fog*, *stone*).
- Distinctive typography combining **Young Serif** headlines, **Albert Sans** body, and **Azeret Mono** metrics.

---

## 🗂️ Project Structure

```
internship-portal/
├── package.json                 # Root convenience scripts (dev, build, start, lint)
├── README.md                    # Project documentation
├── Frontend/
│   ├── package.json             # Frontend dependencies & Next.js scripts
│   ├── next.config.ts           # Turbopack & remote image patterns
│   ├── tsconfig.json            # Strict TypeScript configuration
│   └── src/
│       ├── app/
│       │   ├── layout.tsx       # Root layout with typography & site chrome
│       │   ├── page.tsx         # Home landing page
│       │   ├── internships/
│       │   │   ├── page.tsx     # Internship directory & search hub
│       │   │   └── [slug]/      # Detailed placement view with SSG
│       │   ├── dashboard/       # Student application pipeline & tracker
│       │   ├── mentors/         # Mentor directory & profiles
│       │   ├── blog/ apply/     # Career blog and application flow
│       │   ├── pricing/         # Membership & tuition plans
│       │   ├── about/           # Mission & studio philosophy
│       │   └── contact/         # Inquiries & partner studio submission
│       ├── components/
│       │   ├── internships/
│       │   │   ├── InternshipDirectory.tsx   # Interactive search & filter grid
│       │   │   ├── InternshipDetailView.tsx  # Full placement specification view
│       │   │   └── ApplyModal.tsx            # Multi-step application modal
│       │   └── dashboard/
│       │       └── StudentDashboard.tsx      # Kanban tracker & stats dashboard
│       ├── data/
│       │   ├── internships.ts   # Curated studio opportunities & mock data
│       │   ├── courses.ts       # Course catalog data
│       │   └── teachers.ts      # Teacher bios & philosophies
│       ├── types/
│       │   └── internship.ts    # Comprehensive TypeScript interfaces
│       └── framer/              # Editorial layout components & design tokens
```

---

## 🚀 Quickstart Guide

### Prerequisites
- **Node.js**: v18.17+ or v20+ recommended
- **npm**: v9+

### 1. Install Dependencies
Run from the root directory:
```bash
npm run install:all
```
*(Or navigate to `Frontend/` and run `npm install`)*

### 2. Start the Development Server
```bash
npm run dev
```
Open **[http://localhost:3000](http://localhost:3000)** in your browser.

### 3. Production Build
```bash
npm run build
npm run start
```

---

## 🗺️ Key Routes

| Route | Description |
|---|---|
| `/` | Landing page: hero, tracks, featured internships, how it works, mentors, intern stories, plans, FAQ |
| `/internships` | Interactive internship & fellowship directory with real-time filters |
| `/internships/[slug]` | Complete placement dossier, mentorship milestones, and Apply modal |
| `/dashboard` | Student application tracker with pipeline stages and saved openings |
| `/mentors` | Industry mentors at partner studios (Primer design) |
| `/mentors/[slug]` | Mentor profile, their internship and intern work |
| `/apply` | Three-step application (pick an internship, your details, apply) |
| `/blog`, `/blog/[slug]` | Career blog: resume tips, interview prep, first-internship advice, intern stories |
| `/pricing` | Student (free), Student Pro (₹299/mo) and Company (₹2,999/mo) plans |
| `/about` | Primer's story and how it works |
| `/contact` | Studio partner inquiries and support |

---

## 📄 License
This project is open-source under the MIT License.
