# Primer Online Academy — Next.js, Tailwind CSS & TypeScript

A faithful, modern reproduction of the **[Primer](https://nuanced-screenshot-385541.framer.app/)** educational website, rebuilt with clean architecture using **Next.js 16 (App Router)**, **TypeScript**, **Tailwind CSS v4**, and **Framer Motion**.

---

## 🚀 Getting Started

### 1. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### 2. Build for Production
```bash
npm run build
npm run start
```

---

## 🎨 Design System & Visual Tokens

The aesthetic matches the physical paper, editorial magazine, and craft studio styling of the original Framer site:

- **Cream Linen Background:** `#F4F1EA`
- **Obsidian Ink Text:** `#17150F`
- **Terracotta Accent:** `#F0532B`
- **Forest Green:** `#1E3A32`
- **Architectural Sand Borders:** `#DDD7CA` (1px dividers)
- **Craft Muted Text:** `#7A746A`
- **Typography:** Inter (`font-sans`) and Fragment Mono (`font-mono`)

---

## 📁 Page Routes & Features

| Route | Page | Key Features |
| :--- | :--- | :--- |
| `/` | **Home** | Editorial Hero, 4-Step Method (*Watch, Make, Share, Improve*), Category filter, "Sit In On Lesson One" video player, Teacher contact sheet, Reviews wall, FAQ accordion |
| `/courses` | **Course Catalog** | Filterable by 6 disciplines (*Painting, Cooking, Design, Writing, Film, Craft*), search bar, and course cards with duration and teacher tags |
| `/courses/[slug]` | **Course Detail** | Full syllabus accordion, project specification, materials list, teacher bio card, and sticky enrollment sidebar |
| `/teachers` | **Teachers Directory** | Film-frame contact sheets for all 8 instructors |
| `/teachers/[slug]` | **Teacher Portfolio** | Background, craft discipline, student project showcase, and courses taught |
| `/pricing` | **Pricing & All-Access** | Single Course vs. All-Access monthly/annual toggle ($16/mo) and 14-day refund guarantee |
| `/about` | **About Primer** | Origin story, manifesto, and core values |
| `/enroll` | **Enrollment / Checkout** | 3-step interactive plan selector, student info, and payment preview |
| `/journal` | **Journal Index** | 6 editorial articles on craft, habits, and studio filming |
| `/journal/[slug]` | **Article Reader** | Editorial reading layout with author attribution |
| `/contact` | **Contact & Support** | Admissions inquiry form and studio hours |
| `/privacy`, `/terms`, `/cookies` | **Legal Policies** | Complete policy pages |

---

## 🛠️ Tech Stack

- **Framework:** Next.js 16.4.6 (App Router, Turbopack)
- **Language:** TypeScript 5 (Strict Mode)
- **Styling:** Tailwind CSS 4.3.3
- **Animations:** Framer Motion 14
- **Icons:** Lucide React
- **Data:** Structured, strongly-typed TypeScript models in `src/data/`
