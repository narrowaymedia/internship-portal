# Primer — Next.js frontend

A Next.js (App Router) rebuild of the **Primer — Online Course** Framer template
(reference: https://nuanced-screenshot-385541.framer.app/), built for pixel parity on desktop and mobile.

## How it is put together

The Framer site is made of custom React *code components* (`PmHero`, `PmSchools`, `PmCourses`, …).
This app runs those same components inside Next.js, so layout, typography, colours, hover states,
scroll/entrance animations, the courses filter, FAQ accordion, pricing toggle, enroll flow, page
transition and loader all behave exactly like the original.

```
src/
  app/                    routes (/, /courses, /courses/[slug], /teachers, /teachers/[slug], /pricing,
                          /about, /journal, /journal/[slug], /enroll, /contact, /privacy, /terms, /cookies, 404)
  framer/
    components/Pm*.js     the Primer code components (ported verbatim, client components)
    pages/*.tsx           one file per Framer page: which sections, in which order, with which props
    Bp.tsx                renders a section per breakpoint (desktop ≥1200, tablet 810–1199, phone <810)
                          like Framer's SSR, then keeps only the active one after hydration
    SiteChrome.tsx        header, loader, page transition, smooth scroll, footer (the Framer "Site Layout")
    CmsBridge.tsx + cms.json   the CMS content (courses, teachers, lessons, FAQ, plans, reviews, posts, site)
                          as hidden rows the components read, exactly as on Framer
    meta.json / meta.ts   per-route <title>, description and OG image
    shim.js               tiny stand-in for the `framer` package APIs the components import
```

### Editing content

* Course / teacher / FAQ / plan / review / journal copy lives in `src/framer/cms.json`
  (`data-f1…f18` fields follow the Framer CMS bridge mapping used by each component).
* Section copy (headings, button labels, eyebrows) is in the `BLOCKS` props of `src/framer/pages/*.tsx`.
* Colours are the Framer tokens at the top of `src/app/globals.css`.

Images are served from `framerusercontent.com` (same URLs as the original).

`src/data` and `src/types` are from the earlier hand-built version and are no longer used by the pages.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```
