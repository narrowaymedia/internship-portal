import { Internship, StudentApplication } from "@/types/internship";

export const internships: Internship[] = [
  {
    id: "int-01",
    slug: "atelier-creative-software-fellow",
    title: "Creative Software Engineer Fellow",
    company: "Atelier Interactive",
    companyLogo: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=200&auto=format&fit=crop&q=80",
    department: "Software Engineering",
    location: "San Francisco, CA / Remote",
    workplaceType: "Remote",
    stipend: "$3,800 / month",
    duration: "3 Months (Summer 2027)",
    commitment: "Full-time (40 hrs/wk)",
    startDate: "June 1, 2027",
    deadline: "April 15, 2027",
    openings: 3,
    level: "All Students",
    skills: ["TypeScript", "WebGL / Three.js", "React & Next.js", "Creative Coding", "GLSL Shaders"],
    overview:
      "Atelier Interactive creates bespoke digital exhibition experiences and generative graphics systems for museums, luxury maisons, and world-class design studios. As a Creative Software Fellow, you will collaborate with our core studio team to build fluid interactive web experiences, physics-driven micro-interactions, and high-performance visual pipelines.",
    responsibilities: [
      "Develop bespoke interactive 3D components using WebGL, Three.js, and modern React.",
      "Profile and optimize canvas and GPU performance targeting 60fps across mobile and desktop devices.",
      "Participate in daily design crit sessions alongside lead art directors and technical architects.",
      "Ship an end-of-fellowship experimental installation that will be featured on Atelier's public laboratory gallery."
    ],
    qualifications: [
      "Demonstrated passion for the intersection of graphic design, motion, and web engineering.",
      "Fluency in TypeScript and modern frontend build tools.",
      "Working knowledge or eager curiosity in WebGL, Three.js, Canvas 2D API, or shader programming.",
      "A portfolio or GitHub repository showcasing creative interactive projects or playful web experiments."
    ],
    perks: [
      "$3,800 monthly living stipend + $1,000 home studio hardware allowance",
      "1-on-1 weekly mentorship with Senior Creative Technologists",
      "Fast-track interview guarantee for full-time junior positions upon graduation",
      "Complimentary lifetime access to all Primer design & coding masterclasses"
    ],
    mentors: [
      {
        name: "Soren Kjaer",
        role: "Head of Creative Technology",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80",
        bio: "Former lead graphics engineer at Pentagram & Stink Studios with 12 years building immersive web experiences."
      }
    ],
    milestones: [
      {
        phase: "Month 1",
        title: "Architecture & Generative Prototyping",
        description: "Onboard into our design engine, master our shared shader library, and prototype 3 interactive sandbox sketches."
      },
      {
        phase: "Month 2",
        title: "Client Production & GPU Optimization",
        description: "Contribute production code to an active client showcase, profiling frame rates, memory buffers, and touch gestures."
      },
      {
        phase: "Month 3",
        title: "Capstone Exhibition Project",
        description: "Lead the design and implementation of your own independent web installation with full creative autonomy."
      }
    ],
    partnerTier: "Global Atelier",
    featured: true,
    relatedCourseSlug: "graphic-design-basics",
    relatedCourseTitle: "Graphic Design Basics"
  },
  {
    id: "int-02",
    slug: "bauhaus-product-design-intern",
    title: "Junior Product & Design Systems Intern",
    company: "Studio Forma",
    companyLogo: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=200&auto=format&fit=crop&q=80",
    department: "UI/UX Design",
    location: "Berlin, Germany / Hybrid",
    workplaceType: "Hybrid",
    stipend: "€3,200 / month",
    duration: "6 Months",
    commitment: "Full-time (38 hrs/wk)",
    startDate: "May 15, 2027",
    deadline: "April 1, 2027",
    openings: 2,
    level: "Undergraduate",
    skills: ["Figma Design Systems", "Typography", "User Research", "Prototyping", "WCAG Accessibility"],
    overview:
      "Studio Forma is an international product design consultancy based in Berlin-Kreuzberg. We partner with climate-tech ventures, architectural archives, and cultural institutions to design enduring, human-centered digital tools. We are seeking an ambitious Design Systems Intern to assist in token architecture, accessibility audits, and micro-copy crafting.",
    responsibilities: [
      "Audit and expand multi-brand design tokens (color luminance, typography scales, spacing grids).",
      "Prototype micro-interactions and interactive states in high-fidelity Figma components.",
      "Conduct user testing interviews and synthesize feedback into tangible UI refinements.",
      "Document pattern libraries and component usage guidelines for engineering handoff."
    ],
    qualifications: [
      "Strong foundational eye for grid systems, typographic hierarchy, and negative space.",
      "High proficiency with Figma, auto-layout, variables, and interactive components.",
      "Basic understanding of frontend constraints (HTML/CSS, responsive breakpoints).",
      "Empathy for inclusive design and accessibility compliance."
    ],
    perks: [
      "€3,200 / month stipend + local Berlin public transport pass (Deutschlandticket)",
      "Dedicated desk in our studio overlooking the Spree River",
      "Bi-weekly guest lectures from European design leaders",
      "Sponsored book allowance for art and typography monographs"
    ],
    mentors: [
      {
        name: "Greta Lindemann",
        role: "Partner & Design Director",
        avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&auto=format&fit=crop&q=80",
        bio: "Previously Design Principal at Ideo and professor of visual communication at UdK Berlin."
      }
    ],
    milestones: [
      {
        phase: "Month 1-2",
        title: "Tokens, Grids & Systematic Audits",
        description: "Standardize component libraries across 3 active client design files and document spacing tokens."
      },
      {
        phase: "Month 3-4",
        title: "User Testing & Friction Analysis",
        description: "Shadow usability testing sessions, identify friction points, and iterate on high-fidelity flows."
      },
      {
        phase: "Month 5-6",
        title: "Live Feature Ownership",
        description: "Own the end-to-end design of a major dashboard module from wireframe to developer handoff."
      }
    ],
    partnerTier: "Premier Studio",
    featured: true,
    relatedCourseSlug: "packaging-design",
    relatedCourseTitle: "Packaging Design"
  },
  {
    id: "int-03",
    slug: "applied-ai-generative-design-fellow",
    title: "Applied AI & Creative Tools Fellow",
    company: "Synapse Generative",
    companyLogo: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=200&auto=format&fit=crop&q=80",
    department: "AI & Machine Learning",
    location: "New York, NY / Remote",
    workplaceType: "Remote",
    stipend: "$4,500 / month",
    duration: "3 Months (Summer 2027)",
    commitment: "Full-time (40 hrs/wk)",
    startDate: "June 7, 2027",
    deadline: "April 20, 2027",
    openings: 2,
    level: "All Students",
    skills: ["Python", "PyTorch", "Diffusion Models", "Next.js", "Latent Space Exploration"],
    overview:
      "Synapse Generative builds computational assistants for architects, film colourists, and industrial designers. We do not replace human taste; we amplify it. As an Applied AI Fellow, you will experiment with diffusion latents, fine-tune multimodal visual models on architectural drawings, and expose interactive parameters to web canvases.",
    responsibilities: [
      "Benchmark and evaluate small generative visual models for real-time latency on edge devices.",
      "Train LoRA adaptors on curated design corpora (wood joints, typography specimens, film negatives).",
      "Build web-based inspection tools using Next.js and WebSockets to visualize latent interpolations.",
      "Write clear technical notes and open-source demonstration notebooks."
    ],
    qualifications: [
      "Experience training or fine-tuning vision/language models in PyTorch or TensorFlow.",
      "Solid software engineering habits (clean Git commits, reproducible environments, type safety).",
      "Appreciation for artistic craft, material textures, or cinematography.",
      "Self-directed curiosity and strong communication skills."
    ],
    perks: [
      "$4,500 / month stipend + unlimited cloud GPU compute cluster access (H100/A100)",
      "Co-authorship on lab research papers and open-source models",
      "Direct weekly check-ins with Chief Scientist",
      "Full attendance sponsorship for CVPR or SIGGRAPH"
    ],
    mentors: [
      {
        name: "Dr. Elena Rostova",
        role: "Chief Scientist & Co-Founder",
        avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&auto=format&fit=crop&q=80",
        bio: "PhD from MIT Media Lab, former research scientist at DeepMind exploring computational aesthetics."
      }
    ],
    milestones: [
      {
        phase: "Month 1",
        title: "Model Exploration & Synthetic Datasets",
        description: "Construct fine-tuning pipelines and evaluate perceptual fidelity metrics on material textures."
      },
      {
        phase: "Month 2",
        title: "Real-time Inference Pipeline",
        description: "Deploy an ONNX-quantized latent model with under-80ms interactive feedback loop inside a Next.js client."
      },
      {
        phase: "Month 3",
        title: "Research Paper & Release",
        description: "Publish open research weights, benchmark results, and an interactive web demo."
      }
    ],
    partnerTier: "Innovation Lab",
    featured: true,
    relatedCourseSlug: "filmmaking-on-a-budget",
    relatedCourseTitle: "Filmmaking on a Budget"
  },
  {
    id: "int-04",
    slug: "monochrome-editorial-film-apprentice",
    title: "Cinematography & Documentary Film Apprentice",
    company: "Kino Verité Productions",
    companyLogo: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=200&auto=format&fit=crop&q=80",
    department: "Film & Motion",
    location: "London, UK",
    workplaceType: "On-site",
    stipend: "£2,500 / month",
    duration: "4 Months",
    commitment: "Full-time (40 hrs/wk)",
    startDate: "July 1, 2027",
    deadline: "May 1, 2027",
    openings: 2,
    level: "All Students",
    skills: ["DaVinci Resolve", "Arri / RED Camera Ops", "Lighting & Rigging", "Sound Recording", "Color Grading"],
    overview:
      "Kino Verité is a BAFTA-nominated documentary production house based in Soho, London. We craft long-form non-fiction films that focus on artisans, cultural heritage, and environmental preservation. We are inviting an apprentice to work directly on set and in post-production suites on an upcoming feature documentary.",
    responsibilities: [
      "Assist 1st and 2nd Camera Assistants on location shoots (rigging, lens swaps, focus pulling).",
      "Manage on-set DIT (Digital Intermediate Technician) workflows and color checksum verifications.",
      "Prepare DaVinci Resolve timelines, assemble rough documentary stringouts, and sync audio tracks.",
      "Archive and organize 35mm film transfers and master raw media."
    ],
    qualifications: [
      "Hands-on familiarity with cinema cameras, prime lenses, and audio recording hardware.",
      "Proficiency in DaVinci Resolve, Premiere Pro, or Final Cut Pro.",
      "Strong stamina, attentiveness, and calmness on active documentary sets.",
      "A short showreel or sample scene demonstrating natural lighting instincts."
    ],
    perks: [
      "£2,500 monthly stipend + all location travel and catering covered",
      "Screen credit as Camera Apprentice on the final theatrical release",
      "Access to studio cinema cameras and editing suites for personal weekend shorts",
      "Mentorship from veteran documentary directors of photography"
    ],
    mentors: [
      {
        name: "Arthur Pendelton",
        role: "Director of Photography (BSC)",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80",
        bio: "Veteran British cinematographer with 22 years of non-fiction credits on BBC, Netflix, and Channel 4."
      }
    ],
    milestones: [
      {
        phase: "Month 1",
        title: "Camera Prep & DIT Standards",
        description: "Master optical calibration, lens cleaning, colour management charts, and secure SSD archival."
      },
      {
        phase: "Month 2-3",
        title: "Field Shoots & Location Rigging",
        description: "Work on 14 days of practical field shoots handling multi-camera setups and natural light diffusion."
      },
      {
        phase: "Month 4",
        title: "Colour Suite & Finishing",
        description: "Sit in with master colourists during final SDR/HDR grade and deliverables mastering."
      }
    ],
    partnerTier: "Premier Studio",
    featured: false,
    relatedCourseSlug: "filmmaking-on-a-budget",
    relatedCourseTitle: "Filmmaking on a Budget"
  },
  {
    id: "int-05",
    slug: "narrative-brand-writing-resident",
    title: "Brand Storytelling & Editorial Resident",
    company: "Aura Creative Collective",
    companyLogo: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=200&auto=format&fit=crop&q=80",
    department: "Creative Writing",
    location: "Remote / Worldwide",
    workplaceType: "Remote",
    stipend: "$2,800 / month",
    duration: "3 Months",
    commitment: "Part-time (25 hrs/wk)",
    startDate: "June 1, 2027",
    deadline: "April 30, 2027",
    openings: 2,
    level: "Undergraduate",
    skills: ["Long-form Prose", "Copywriting", "Interviews & Oral History", "Brand Tone", "Sub-editing"],
    overview:
      "Aura is an editorial studio that shapes brand voices, publishes quarterly print anthologies, and ghostwrites thoughtful essays for visionary founders. The Editorial Resident will research craftspeople, conduct recorded interviews, and write long-form features that read with rhythm, warmth, and precision.",
    responsibilities: [
      "Draft profiles and essays celebrating master craftspeople, winemakers, and architects.",
      "Conduct transcribed interviews and pull arresting pull-quotes.",
      "Collaborate with graphic designers to pair text cadence with editorial layout pacing.",
      "Edit and proofread quarterly print publications against the Chicago Manual of Style."
    ],
    qualifications: [
      "A clear, unpretentious writing voice with respect for cadence and brevity.",
      "Proven ability to research unfamiliar topics thoroughly and cite accurate details.",
      "Comfort conducting phone or video interviews with strangers.",
      "Submission of 2 writing samples (essays, cultural criticism, or fiction)."
    ],
    perks: [
      "$2,800 monthly stipend for flexible part-time hours (ideal for students)",
      "Published bylines in Aura’s print journal distributed to 40+ international bookshops",
      "One-on-one line-editing masterclasses with former Paris Review editors",
      "Home library book stipend ($500)"
    ],
    mentors: [
      {
        name: "Marianne Vance",
        role: "Editor-in-Chief",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&auto=format&fit=crop&q=80",
        bio: "Author of two essay collections and former features editor at Granta and The Atlantic."
      }
    ],
    milestones: [
      {
        phase: "Month 1",
        title: "Voice Calibration & Archival Research",
        description: "Study brand style guides, conduct background research on 4 upcoming feature subjects."
      },
      {
        phase: "Month 2",
        title: "Long-form Profile Drafting",
        description: "Conduct primary interviews, write first draft (3,000 words), and undergo intensive line edits."
      },
      {
        phase: "Month 3",
        title: "Print Production & Publishing",
        description: "Finalize proof passes, attend press check, and author promotional launch newsletter."
      }
    ],
    partnerTier: "Premier Studio",
    featured: false,
    relatedCourseSlug: "creative-writing",
    relatedCourseTitle: "Creative Writing"
  },
  {
    id: "int-06",
    slug: "culinary-arts-kitchen-staging",
    title: "Modern Gastronomy Culinary Stage",
    company: "Osteria Nuova",
    companyLogo: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=200&auto=format&fit=crop&q=80",
    department: "Culinary Arts",
    location: "Florence, Italy",
    workplaceType: "On-site",
    stipend: "€2,400 / month + Studio Housing",
    duration: "4 Months",
    commitment: "Full-time (42 hrs/wk)",
    startDate: "May 1, 2027",
    deadline: "March 25, 2027",
    openings: 2,
    level: "All Students",
    skills: ["Classical Knife Skills", "Pasta Extrusion & Rolling", "Sauce Chemistry", "Butchery", "Plating"],
    overview:
      "Osteria Nuova holds one Michelin star for its hyper-local Tuscan cooking and reverence for heritage grain flours, open-fire roasting, and wild forage. As a culinary stagiaire, you will work the line under Chef Marco Bellini, rotating through prep stations, pasta fresca, and fire management.",
    responsibilities: [
      "Prepare daily mise-en-place with extreme precision (brunoise, concassé, emulsified stocks).",
      "Roll, shape, and fill regional pasta varieties (agnolotti, pici, tortelli) from stoneground grains.",
      "Manage wood-fired grill temperatures during live dinner services.",
      "Visit morning markets and regional producers in Chianti to select seasonal produce."
    ],
    qualifications: [
      "Culinary school student or passionate self-taught cook with rigorous knife fundamentals.",
      "Physical stamina, punctuality, and humility in a fast-paced kitchen environment.",
      "Basic Italian language curiosity (kitchen Italian taught on site).",
      "Food hygiene and safety certification."
    ],
    perks: [
      "€2,400/month stipend + furnished private studio apartment in central Florence included",
      "All staff meals provided daily by the kitchen team",
      "Direct recommendation letter from Michelin-starred Chef Marco Bellini",
      "Visits to olive oil mills and Parmigiano dairies in Emilia-Romagna"
    ],
    mentors: [
      {
        name: "Marco Bellini",
        role: "Chef Patron & Restaurateur",
        avatar: "https://framerusercontent.com/images/uw6MU2iVNFnh4k9MY7NlYuASg.webp",
        bio: "Instructor of Primer's 'Cook Like a Chef' course, 19 years running award-winning kitchens across Italy."
      }
    ],
    milestones: [
      {
        phase: "Month 1",
        title: "Station Prep & Foundations",
        description: "Master knife sharpening on whetstones, vegetable prep speed, and foundational broths."
      },
      {
        phase: "Month 2-3",
        title: "Pasta Fresca & Fire Station",
        description: "Operate the pasta rolling station during lunch service and manage ember temperatures."
      },
      {
        phase: "Month 4",
        title: "Special Dish Creation",
        description: "Develop a seasonal antipasto dish featured on the restaurant's weekly tasting menu."
      }
    ],
    partnerTier: "Global Atelier",
    featured: true,
    relatedCourseSlug: "cook-like-a-chef",
    relatedCourseTitle: "Cook Like a Chef"
  },
  {
    id: "int-07",
    slug: "spatial-woodwork-apprentice",
    title: "Architectural Millwork & Woodcraft Intern",
    company: "Timber & Grain Guild",
    companyLogo: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=200&auto=format&fit=crop&q=80",
    department: "Industrial Craft",
    location: "Stockholm, Sweden / Hybrid",
    workplaceType: "Hybrid",
    stipend: "SEK 32,000 / month (~$3,100)",
    duration: "5 Months",
    commitment: "Full-time (40 hrs/wk)",
    startDate: "June 1, 2027",
    deadline: "April 15, 2027",
    openings: 1,
    level: "All Students",
    skills: ["Hand Joinery", "Japanese Saws & Planes", "Timber Grading", "Rhino 3D / CAD", "Natural Finishes"],
    overview:
      "Timber & Grain Guild creates bespoke furniture, sculptural staircases, and timber pavilions using sustainably harvested Nordic pine and ash. The Woodcraft Intern will learn traditional hand-cut mortise-and-tenon joinery, modern CNC precision milling, and organic wax and soap finishes.",
    responsibilities: [
      "Cut and fit precision wood joints by hand using Japanese dozuki saws and chisels.",
      "Operate shop machinery safely (planers, bandsaws, spindle molders) under direct supervision.",
      "Draft 1:1 scale construction shop drawings in Rhino 3D.",
      "Apply traditional Scandinavian lye and oil finishes to custom dining tables."
    ],
    qualifications: [
      "Demonstrated woodworking experience or formal furniture design / craft coursework.",
      "Uncompromising respect for shop safety protocols and eye/ear protection.",
      "Patience for measuring twice and cutting once with 0.5mm tolerances.",
      "Photos of at least one finished piece of furniture or woodwork made by hand."
    ],
    perks: [
      "SEK 32,000 / month stipend",
      "Personal set of hand-forged Japanese chisels and water stones to keep forever",
      "Build your own custom hardwood workbench during shop hours as an induction project",
      "Guidance to enter your work into the Nordic Craft Biennial"
    ],
    mentors: [
      {
        name: "Lars Lindqvist",
        role: "Master Cabinetmaker",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&auto=format&fit=crop&q=80",
        bio: "30-year veteran guild member and restoration consultant for historic Swedish timber structures."
      }
    ],
    milestones: [
      {
        phase: "Month 1",
        title: "Hand Tool Mastery & Personal Bench",
        description: "Sharpening geometry, hand-planing flats, and constructing your bespoke studio bench."
      },
      {
        phase: "Month 2-3",
        title: "Architectural Millwork Commissions",
        description: "Assist on large-scale oak shelving and sliding screen installations for private residences."
      },
      {
        phase: "Month 4-5",
        title: "Signature Chair Build",
        description: "Craft a steam-bent dining chair from raw green timber to final soap-finish buffing."
      }
    ],
    partnerTier: "Premier Studio",
    featured: false,
    relatedCourseSlug: "woodworking-at-home",
    relatedCourseTitle: "Woodworking at Home"
  },
  {
    id: "int-08",
    slug: "visual-brand-identity-designer",
    title: "Brand Packaging & Visual Identity Intern",
    company: "Vessel Design Studio",
    companyLogo: "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=200&auto=format&fit=crop&q=80",
    department: "UI/UX Design",
    location: "New York, NY / Hybrid",
    workplaceType: "Hybrid",
    stipend: "$3,400 / month",
    duration: "3 Months (Summer 2027)",
    commitment: "Full-time (40 hrs/wk)",
    startDate: "June 14, 2027",
    deadline: "April 25, 2027",
    openings: 2,
    level: "Undergraduate",
    skills: ["Packaging Dielines", "Adobe Illustrator", "Foil Stamping & Embossing", "Material Sourcing", "3D Mockups"],
    overview:
      "Vessel is an award-winning brand identity and structural packaging studio. We work with organic wineries, specialty coffee roasters, and ceramic artists to design sustainable paper, glass, and tin packaging that feels tactile on a shelf and leaves zero microplastics behind.",
    responsibilities: [
      "Prepare vector dielines and print-ready mechanicals with spot color channels.",
      "Liaise with European paper mills (Fedrigoni, G.F Smith) to order tactile swatch specimens.",
      "Build physical packaging mockups with exact scoring, folding, and weight distributions.",
      "Create photorealistic 3D renders of bottles and boxes for client keynote decks."
    ],
    qualifications: [
      "Exceptional typography skills and obsession with printed textures and specialty inks.",
      "High speed and precision in Adobe Illustrator, InDesign, and Photoshop.",
      "Understanding of CMYK vs RGB, pantone color matching, and paper grain directions.",
      "Strong portfolio demonstrating cohesive brand identities across print and digital."
    ],
    perks: [
      "$3,400 monthly stipend + monthly MetroCard",
      "Studio lunch provided 3 days a week from local Brooklyn bakeries",
      "Attend on-site press checks at historic letterpress printers",
      "Direct portfolio review by AIGA medalist design partners"
    ],
    mentors: [
      {
        name: "Chloe Vance",
        role: "Design Director & Founding Partner",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80",
        bio: "Former Pentagram senior designer, creator of award-winning sustainable packaging lines."
      }
    ],
    milestones: [
      {
        phase: "Month 1",
        title: "Print Mechanics & Substrate Library",
        description: "Master paper weights, embossing tolerances, and generate mechanicals for 2 client lines."
      },
      {
        phase: "Month 2",
        title: "Client Concept Pitching",
        description: "Develop 3 distinct visual identity directions for a boutique organic fragrance brand."
      },
      {
        phase: "Month 3",
        title: "Production Supervision",
        description: "Attend foil-stamping press checks and assemble finished case studies for award submission."
      }
    ],
    partnerTier: "Premier Studio",
    featured: false,
    relatedCourseSlug: "packaging-design",
    relatedCourseTitle: "Packaging Design"
  },
  {
    id: "int-09",
    slug: "documentary-photojournalism-fellow",
    title: "Visual Journalism & Darkroom Fellow",
    company: "Atlas Photo Guild",
    companyLogo: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=200&auto=format&fit=crop&q=80",
    department: "Film & Motion",
    location: "Paris, France / Remote",
    workplaceType: "Hybrid",
    stipend: "€2,800 / month",
    duration: "4 Months",
    commitment: "Full-time (38 hrs/wk)",
    startDate: "September 1, 2027",
    deadline: "May 30, 2027",
    openings: 1,
    level: "Graduate",
    skills: ["Medium Format Film", "Silver Gelatin Darkroom", "Archival Scanning", "Editorial Sequencing", "Photo Essay"],
    overview:
      "Atlas Photo Guild supports independent photographers working on slow, deeply researched visual investigations. As a Visual Journalism Fellow, you will split time between our historic wet darkroom in Paris, fieldwork reporting on agricultural transitions, and digital high-resolution Hasselblad scanning.",
    responsibilities: [
      "Mix chemistry and hand-develop black & white 120 and 4x5 large format sheet films.",
      "Perform high-resolution drum scans, spot retouching, and ICC color profile calibrations.",
      "Work alongside veteran Magnum and VII photojournalists to sequence narrative photo essays.",
      "Prepare silver gelatin archival prints for gallery exhibitions and collectors."
    ],
    qualifications: [
      "Solid foundation in analog photography (film processing, exposure zones, chemistry safety).",
      "Sensitivity and ethics in documentary reporting and portraiture.",
      "Working knowledge of Photoshop, Lightroom, and color negative inversion tools.",
      "A cohesive photo series (8-15 images) with a written project statement."
    ],
    perks: [
      "€2,800 / month stipend + unlimited darkroom chemicals and Ilford paper supply",
      "Loan of Hasselblad 500C/M camera kit for the duration of the fellowship",
      "Solo exhibition in the guild gallery during Paris Photo week",
      "Curatorial mentorship from international museum photo curators"
    ],
    mentors: [
      {
        name: "Claire Delacroix",
        role: "Master Printer & Photo Editor",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&auto=format&fit=crop&q=80",
        bio: "Former chief printer at Picto Paris with 25 years developing for legendary street photographers."
      }
    ],
    milestones: [
      {
        phase: "Month 1",
        title: "Darkroom Mastery & Archival Chemistry",
        description: "Calibrate dev times for Tri-X, HP5, and FP4 films; master split-grade contrast printing."
      },
      {
        phase: "Month 2-3",
        title: "Fieldwork & Long-form Storytelling",
        description: "Shoot a documentary project on artisanal salt harvesting along the Brittany coast."
      },
      {
        phase: "Month 4",
        title: "Exhibition Printmaking & Book Dummy",
        description: "Produce 20 exhibition prints and hand-bind a limited edition artist photobook."
      }
    ],
    partnerTier: "Global Atelier",
    featured: false,
    relatedCourseSlug: "film-photography",
    relatedCourseTitle: "Film Photography"
  },
  {
    id: "int-10",
    slug: "fine-arts-studio-assistant-residency",
    title: "Large-Scale Canvas & Pigment Studio Assistant",
    company: "Studio Lena Hart",
    companyLogo: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=200&auto=format&fit=crop&q=80",
    department: "Industrial Craft",
    location: "Berlin, Germany",
    workplaceType: "On-site",
    stipend: "€2,600 / month",
    duration: "4 Months",
    commitment: "Full-time (36 hrs/wk)",
    startDate: "May 1, 2027",
    deadline: "April 1, 2027",
    openings: 2,
    level: "All Students",
    skills: ["Linen Stretching", "Rabbit-Skin Gesso", "Pigment Grinding", "Crating & Art Handling", "Studio Prep"],
    overview:
      "Work directly inside the studio of fine artist Lena Hart (lead instructor of Primer’s Abstract Painting masterclass) as she prepares a solo museum exhibition. The studio assistant will gain first-hand experience building heavy stretcher bars, preparing mineral pigments, mixing rabbit-skin glue gesso, and managing international gallery freight logistics.",
    responsibilities: [
      "Construct custom heavy-duty mortise stretcher bars up to 3 meters in length.",
      "Stretch raw Belgian linen taut without warping and apply traditional hot size coatings.",
      "Mull dry earth and mineral pigments with linseed oil, walnut oil, and damar varnish.",
      "Pack and crate delicate high-relief textured canvases for shipping to Basel and London galleries."
    ],
    qualifications: [
      "Fine arts student or studio practitioner with genuine physical energy and care for materials.",
      "Experience stretching canvas, using power saws, and handling wet oil mediums.",
      "Attention to detail, order, and cleanliness in a professional working atelier.",
      "Enthusiasm for contemporary abstract painting and gallery operations."
    ],
    perks: [
      "€2,600 monthly stipend",
      "Private 15 sqm studio space in the facility for personal creative work after hours",
      "Direct daily mentorship from acclaimed painter Lena Hart",
      "VIP pass and travel to the artist’s solo opening in Basel"
    ],
    mentors: [
      {
        name: "Lena Hart",
        role: "Painter & Fine Artist",
        avatar: "https://framerusercontent.com/images/TATDi0y8zaKMAxLQeCeRnzRNg.webp",
        bio: "Master teacher on Primer, 14 years exhibiting large-scale works in Berlin, New York, and Tokyo."
      }
    ],
    milestones: [
      {
        phase: "Month 1",
        title: "Substrate & Gesso Calibration",
        description: "Build and prime 12 large-format canvases to precise museum exhibition tension standards."
      },
      {
        phase: "Month 2-3",
        title: "Pigment Formulation & Studio Support",
        description: "Mull raw lapis, ochre, and slate pigments and assist on high-relief impasto layers."
      },
      {
        phase: "Month 4",
        title: "Museum Crating & Exhibition Install",
        description: "Construct foam-lined travel crates and assist gallery preparators during museum hanging."
      }
    ],
    partnerTier: "Global Atelier",
    featured: true,
    relatedCourseSlug: "abstract-painting",
    relatedCourseTitle: "Abstract Painting"
  }
];

export const defaultMockApplications: StudentApplication[] = [
  {
    id: "app-101",
    internshipSlug: "atelier-creative-software-fellow",
    internshipTitle: "Creative Software Engineer Fellow",
    company: "Atelier Interactive",
    companyLogo: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=200&auto=format&fit=crop&q=80",
    department: "Software Engineering",
    location: "San Francisco, CA / Remote",
    stipend: "$3,800 / month",
    workplaceType: "Remote",
    applicantName: "Alex Rivera",
    email: "alex.rivera@example.com",
    university: "Rhode Island School of Design / Brown",
    graduationYear: "2027",
    portfolioUrl: "https://github.com/alexrivera-creative",
    coverNote: "Passionate about generative graphics and bridging procedural animations with modern web experiences.",
    appliedDate: "May 2, 2027",
    status: "Interview Scheduled",
    statusUpdateDate: "May 10, 2027",
    interviewDate: "May 28, 2027 · 2:00 PM EST"
  },
  {
    id: "app-102",
    internshipSlug: "bauhaus-product-design-intern",
    internshipTitle: "Junior Product & Design Systems Intern",
    company: "Studio Forma",
    companyLogo: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=200&auto=format&fit=crop&q=80",
    department: "UI/UX Design",
    location: "Berlin, Germany / Hybrid",
    stipend: "€3,200 / month",
    workplaceType: "Hybrid",
    applicantName: "Alex Rivera",
    email: "alex.rivera@example.com",
    university: "Rhode Island School of Design / Brown",
    graduationYear: "2027",
    portfolioUrl: "https://alexrivera.design",
    coverNote: "Strong focus on typography scales, auto-layout architecture, and WCAG accessibility audits.",
    appliedDate: "May 5, 2027",
    status: "Under Review",
    statusUpdateDate: "May 12, 2027"
  }
];
