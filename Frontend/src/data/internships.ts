import { Internship, StudentApplication } from "@/types/internship";

export const internships: Internship[] = [
  {
    id: "int-01",
    slug: "atelier-creative-software-fellow",
    title: "Full-Stack Web Development Fellow",
    company: "Atelier Interactive",
    companyLogo: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=200&auto=format&fit=crop&q=80",
    department: "Web Development",
    location: "San Francisco, CA / Remote",
    workplaceType: "Remote",
    stipend: "$3,800 / month",
    duration: "3 Months (Summer 2027)",
    commitment: "Full-time (40 hrs/wk)",
    startDate: "June 1, 2027",
    deadline: "April 15, 2027",
    openings: 3,
    level: "All Students",
    skills: ["TypeScript", "Next.js & React", "Tailwind CSS", "Node.js & GraphQL", "State Architecture"],
    overview:
      "Atelier Interactive creates high-performance web applications, interactive digital products, and design systems for forward-thinking technology companies. As a Web Development Fellow, you will collaborate with our core product engineering team to build accessible, lightning-fast web applications, design systems, and real-time interactive user interfaces.",
    responsibilities: [
      "Architect and ship production-ready web interfaces using Next.js 15, React, and TypeScript.",
      "Implement accessible, WCAG-compliant design system components with Tailwind CSS.",
      "Profile and optimize client-side bundle size, Core Web Vitals, and rendering performance.",
      "Ship a customer-facing feature from technical RFC through code review to production deployment."
    ],
    qualifications: [
      "Solid foundation in modern JavaScript/TypeScript, React fundamentals, and CSS layout engines.",
      "Experience building responsive web applications with Next.js or React.",
      "Understanding of REST APIs, state management, and Git collaboration workflows.",
      "A GitHub repository or web project demonstrating clean code and attention to UI details."
    ],
    perks: [
      "$3,800 monthly living stipend + $1,000 home studio hardware allowance",
      "1-on-1 weekly mentorship with Senior Frontend & Full-Stack Architects",
      "Fast-track interview guarantee for full-time junior positions upon graduation",
      "Complimentary access to all Gradeon engineering masterclasses and workshop libraries"
    ],
    mentors: [
      {
        name: "Soren Kjaer",
        role: "Head of Web Engineering",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80",
        bio: "Former lead frontend engineer at Pentagram & Stink Studios with 12 years building high-impact web products."
      }
    ],
    milestones: [
      {
        phase: "Month 1",
        title: "Architecture & Design System Foundations",
        description: "Onboard into our component library, establish typed API clients, and ship 3 core UI modules."
      },
      {
        phase: "Month 2",
        title: "Production Features & State Engineering",
        description: "Own an end-to-end user flow in our flagship application with real-time optimistic updates."
      },
      {
        phase: "Month 3",
        title: "Performance Optimization & Release",
        description: "Conduct Core Web Vitals profiling, implement automated testing suites, and present your work."
      }
    ],
    partnerTier: "Global Atelier",
    featured: true,
    relatedCourseSlug: "graphic-design-basics",
    relatedCourseTitle: "Web Engineering Basics"
  },
  {
    id: "int-02",
    slug: "bauhaus-product-design-intern",
    title: "Frontend & Web Design Systems Intern",
    company: "Studio Forma",
    companyLogo: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=200&auto=format&fit=crop&q=80",
    department: "Web Development",
    location: "Berlin, Germany / Hybrid",
    workplaceType: "Hybrid",
    stipend: "€3,200 / month",
    duration: "6 Months",
    commitment: "Full-time (38 hrs/wk)",
    startDate: "May 15, 2027",
    deadline: "April 1, 2027",
    openings: 2,
    level: "Undergraduate",
    skills: ["TypeScript", "React 19", "Design Tokens", "Storybook", "WCAG Accessibility"],
    overview:
      "Studio Forma is an international digital product consultancy based in Berlin-Kreuzberg. We partner with climate-tech ventures and open-source foundations to build enduring, accessible web applications. We are seeking an ambitious Web Engineering Intern to assist in token architecture, component testing, and modern frontend development.",
    responsibilities: [
      "Audit, refactor, and expand our multi-brand design system component library in Storybook.",
      "Build high-fidelity, keyboard-accessible web components with React and modern CSS tokens.",
      "Implement unit and integration tests using Vitest and Testing Library to guarantee 95%+ test coverage.",
      "Document component APIs, interaction patterns, and developer guidelines for engineering handoff."
    ],
    qualifications: [
      "Strong foundational skills in modern HTML, CSS, JavaScript, and React component lifecycles.",
      "Familiarity with TypeScript interfaces, props validation, and state management.",
      "Empathy for inclusive design, accessibility compliance (WCAG 2.1 AA), and semantic markup.",
      "Curiosity about frontend tooling, bundling, and design system governance."
    ],
    perks: [
      "€3,200 / month stipend + local Berlin public transport pass (Deutschlandticket)",
      "Dedicated ergonomic workspace in our canal-side Kreuzberg studio",
      "Bi-weekly engineering roundtables with European technology leaders",
      "Sponsored book allowance and ticket to major European web conferences"
    ],
    mentors: [
      {
        name: "Greta Lindemann",
        role: "Design Systems Lead & Principal Engineer",
        avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&auto=format&fit=crop&q=80",
        bio: "Previously Design Principal at Ideo and open-source maintainer of widely adopted web UI libraries."
      }
    ],
    milestones: [
      {
        phase: "Month 1-2",
        title: "Tokens, Grids & Systematic Component Audits",
        description: "Standardize component libraries across 3 active client apps and document spacing & typography tokens."
      },
      {
        phase: "Month 3-4",
        title: "Interactive Components & Usability Testing",
        description: "Build accessible dropdowns, modals, and datagrids, refining keyboard navigation and focus rings."
      },
      {
        phase: "Month 5-6",
        title: "Production Release & Framework Governance",
        description: "Package the design system as an internal npm library and integrate automated visual regression tests."
      }
    ],
    partnerTier: "Premier Studio",
    featured: true,
    relatedCourseSlug: "packaging-design",
    relatedCourseTitle: "Design Systems Engineering"
  },
  {
    id: "int-03",
    slug: "applied-ai-generative-design-fellow",
    title: "Applied AI & Large Language Models Fellow",
    company: "Synapse Generative",
    companyLogo: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=200&auto=format&fit=crop&q=80",
    department: "AI Engineer",
    location: "New York, NY / Remote",
    workplaceType: "Remote",
    stipend: "$4,500 / month",
    duration: "3 Months (Summer 2027)",
    commitment: "Full-time (40 hrs/wk)",
    startDate: "June 7, 2027",
    deadline: "April 20, 2027",
    openings: 2,
    level: "All Students",
    skills: ["Python", "PyTorch", "LangChain & LlamaIndex", "Vector DBs & RAG", "Hugging Face"],
    overview:
      "Synapse Generative builds computational AI agents and enterprise cognitive workflows. As an Applied AI Fellow, you will research, evaluate, and build retrieval-augmented generation (RAG) pipelines, experiment with fine-tuning open-weights models, and deploy production inference endpoints with low latency.",
    responsibilities: [
      "Benchmark and evaluate small generative language models for real-time inference latency.",
      "Design and deploy hybrid vector search retrieval systems using Qdrant and pgvector.",
      "Implement guardrails, hallucination checks, and evaluation harnesses using PyTest and Ragas.",
      "Write clear technical RFCs and open-source demonstration notebooks for our community."
    ],
    qualifications: [
      "Experience training, evaluating, or fine-tuning language models in PyTorch or Hugging Face.",
      "Solid Python software engineering habits (clean Git commits, type hints, virtual environments).",
      "Familiarity with embeddings, vector similarity metrics, and prompt orchestration.",
      "Self-directed curiosity and strong technical communication skills."
    ],
    perks: [
      "$4,500 / month stipend + unlimited cloud GPU compute cluster access (H100/A100)",
      "Co-authorship on lab research papers and open-source models",
      "Direct weekly check-ins with our Chief Scientist & Research Team",
      "Full attendance sponsorship for NeurIPS, ICML, or CVPR"
    ],
    mentors: [
      {
        name: "Dr. Elena Rostova",
        role: "Chief Scientist & Co-Founder",
        avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&auto=format&fit=crop&q=80",
        bio: "PhD from MIT CSAIL, former research scientist at DeepMind exploring agentic reasoning and alignment."
      }
    ],
    milestones: [
      {
        phase: "Month 1",
        title: "Model Exploration & Synthetic Datasets",
        description: "Construct fine-tuning pipelines and evaluate perceptual fidelity metrics on domain benchmarks."
      },
      {
        phase: "Month 2",
        title: "Real-time Inference Pipeline",
        description: "Deploy an ONNX-quantized model with under-80ms interactive feedback loop inside a Next.js client."
      },
      {
        phase: "Month 3",
        title: "Research Paper & Release",
        description: "Publish open research weights, benchmark results, and an interactive demonstration web application."
      }
    ],
    partnerTier: "Innovation Lab",
    featured: true,
    relatedCourseSlug: "filmmaking-on-a-budget",
    relatedCourseTitle: "Applied AI Fundamentals"
  },
  {
    id: "int-04",
    slug: "monochrome-editorial-film-apprentice",
    title: "Computer Vision & Video AI Systems Engineer",
    company: "Kino Vision Lab",
    companyLogo: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=200&auto=format&fit=crop&q=80",
    department: "AI Engineer",
    location: "London, UK / Hybrid",
    workplaceType: "Hybrid",
    stipend: "£3,200 / month",
    duration: "4 Months",
    commitment: "Full-time (40 hrs/wk)",
    startDate: "July 1, 2027",
    deadline: "May 1, 2027",
    openings: 2,
    level: "All Students",
    skills: ["Python", "PyTorch", "OpenCV", "YOLOv9 & Object Tracking", "CUDA & TensorRT"],
    overview:
      "Kino Vision Lab develops next-generation computer vision and neural video processing systems for autonomous inspection, media generation, and real-time scene understanding. As an AI Systems Engineer, you will train state-of-the-art vision models and deploy ultra-low latency inference pipelines.",
    responsibilities: [
      "Train, fine-tune, and evaluate deep convolutional and vision transformer models (ViT).",
      "Build real-time video stream processing pipelines with OpenCV, GStreamer, and Python.",
      "Profile and optimize inference pipelines using TensorRT, ONNX Runtime, and mixed precision.",
      "Implement multi-camera object detection, re-identification, and spatial tracking algorithms."
    ],
    qualifications: [
      "Solid theoretical understanding of linear algebra, digital image processing, and deep learning.",
      "Proficiency in Python and PyTorch; familiarity with C++ or CUDA is a strong plus.",
      "Hands-on experience with object detection, segmentation, or video processing architectures.",
      "A GitHub repository with computer vision projects, Kaggle notebooks, or academic research."
    ],
    perks: [
      "£3,200 monthly stipend + dedicated multi-GPU workstation in Soho, London",
      "Full cloud compute allocation for independent experimental runs",
      "Screen credit and patent co-inventorship on lab production breakthroughs",
      "Weekly 1-on-1 mentorship with veteran computer vision scientists"
    ],
    mentors: [
      {
        name: "Arthur Pendelton",
        role: "Principal Computer Vision Scientist",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80",
        bio: "Former lead vision engineer at DeepMind with 14 years developing neural rendering and real-time video architectures."
      }
    ],
    milestones: [
      {
        phase: "Month 1",
        title: "Video Dataset Pipelines & Benchmark Standards",
        description: "Build robust video ingestion pipelines, synthetic data augmentation, and evaluation benchmarks."
      },
      {
        phase: "Month 2-3",
        title: "Model Architecture & GPU Acceleration",
        description: "Fine-tune vision transformer backbones and implement TensorRT engine compilation for 60fps inference."
      },
      {
        phase: "Month 4",
        title: "Live Production Deployment & Benchmarking",
        description: "Deploy the vision model to our live video pipeline and measure cross-device latency."
      }
    ],
    partnerTier: "Premier Studio",
    featured: false,
    relatedCourseSlug: "filmmaking-on-a-budget",
    relatedCourseTitle: "Deep Learning for Vision"
  },
  {
    id: "int-05",
    slug: "narrative-brand-writing-resident",
    title: "NLP & Conversational AI Systems Fellow",
    company: "Cortex AI Labs",
    companyLogo: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=200&auto=format&fit=crop&q=80",
    department: "AI Engineer",
    location: "Remote / Worldwide",
    workplaceType: "Remote",
    stipend: "$3,600 / month",
    duration: "3 Months",
    commitment: "Full-time (40 hrs/wk)",
    startDate: "June 1, 2027",
    deadline: "April 30, 2027",
    openings: 2,
    level: "Undergraduate",
    skills: ["Python", "Transformers", "LoRA Fine-Tuning", "vLLM & Inference", "FastAPI"],
    overview:
      "Cortex AI Labs develops specialized enterprise language models and multi-agent systems. The Conversational AI Fellow will work on post-training alignment, direct preference optimization (DPO), low-latency streaming endpoints, and synthetic data generation for reasoning tasks.",
    responsibilities: [
      "Curate, clean, and annotate domain-specific text datasets for supervised fine-tuning (SFT).",
      "Run parameter-efficient fine-tuning (PEFT/LoRA) on modern open-source LLMs (Llama, Mistral, Gemma).",
      "Build high-throughput streaming inference APIs using vLLM, FastAPI, and server-sent events.",
      "Evaluate reasoning benchmarks, benchmark token throughput, and mitigate hallucinations."
    ],
    qualifications: [
      "Fluency in Python, modern NLP libraries (Hugging Face Transformers, Datasets, Accelerate).",
      "Deep understanding of transformer self-attention, tokenization, and temperature sampling.",
      "Experience with API development and asynchronous programming in Python.",
      "Clear technical writing and enthusiasm for open-source AI models."
    ],
    perks: [
      "$3,600 monthly stipend for remote work across any timezone",
      "Access to 8x H100 GPU training clusters for experimental runs",
      "One-on-one mentorship with leading machine learning researchers",
      "Home office setup budget ($750) and book grant"
    ],
    mentors: [
      {
        name: "Dr. Marianne Vance",
        role: "Lead NLP Research Scientist",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&auto=format&fit=crop&q=80",
        bio: "PhD in Computational Linguistics from Oxford, previous research engineer at Hugging Face."
      }
    ],
    milestones: [
      {
        phase: "Month 1",
        title: "Data Curation & Alignment Benchmarks",
        description: "Formulate synthetic data pipelines and establish standardized reasoning evaluation rubrics."
      },
      {
        phase: "Month 2",
        title: "Supervised Fine-Tuning & Evaluation",
        description: "Execute parameter-efficient fine-tuning and evaluate model perplexity against baseline models."
      },
      {
        phase: "Month 3",
        title: "Serving Engine & Public Release",
        description: "Deploy the aligned model to a vLLM serving container and publish our technical findings."
      }
    ],
    partnerTier: "Premier Studio",
    featured: false,
    relatedCourseSlug: "creative-writing",
    relatedCourseTitle: "Natural Language Processing"
  },
  {
    id: "int-06",
    slug: "culinary-arts-kitchen-staging",
    title: "Python Backend & High-Throughput API Systems Intern",
    company: "Novas Distributed Labs",
    companyLogo: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=200&auto=format&fit=crop&q=80",
    department: "Python",
    location: "Berlin, Germany / Remote",
    workplaceType: "Remote",
    stipend: "$3,500 / month",
    duration: "4 Months",
    commitment: "Full-time (40 hrs/wk)",
    startDate: "May 1, 2027",
    deadline: "March 25, 2027",
    openings: 2,
    level: "All Students",
    skills: ["Python 3.12", "FastAPI & Asyncio", "PostgreSQL & SQLAlchemy", "Redis & Celery", "Docker & CI/CD"],
    overview:
      "Novas Distributed Labs builds high-concurrency cloud infrastructure and financial data pipelines. As a Backend Systems Intern, you will architect asynchronous REST and WebSocket microservices, optimize database queries, and design robust distributed caching layers handling millions of requests per day.",
    responsibilities: [
      "Develop asynchronous RESTful API services using modern Python 3.12, FastAPI, and Pydantic v2.",
      "Design relational schemas, manage database migrations (Alembic), and optimize slow SQL queries in PostgreSQL.",
      "Implement distributed task queues and message brokering using Redis, Celery, and RabbitMQ.",
      "Write thorough unit and integration test suites with Pytest and configure automated GitHub Actions CI/CD."
    ],
    qualifications: [
      "Strong command of modern Python fundamentals, object-oriented principles, and async/await syntax.",
      "Solid understanding of relational databases, SQL queries, and normalization.",
      "Familiarity with containerization (Docker) and REST API design patterns.",
      "Enthusiasm for backend scalability, error handling, and clean code architecture."
    ],
    perks: [
      "$3,500/month stipend + comprehensive remote office setup equipment",
      "Direct weekly code reviews from veteran distributed systems architects",
      "Full company-sponsored AWS certification exam vouchers",
      "Collaborative, high-trust engineering culture with flexible hours"
    ],
    mentors: [
      {
        name: "Marco Bellini",
        role: "Principal Systems Architect",
        avatar: "https://framerusercontent.com/images/uw6MU2iVNFnh4k9MY7NlYuASg.webp",
        bio: "Senior backend engineer with 15 years designing distributed microservices across fintech and logistics."
      }
    ],
    milestones: [
      {
        phase: "Month 1",
        title: "Async Architecture & API Schemas",
        description: "Master FastAPI async patterns, implement strict Pydantic schemas, and ship your first internal microservice."
      },
      {
        phase: "Month 2-3",
        title: "Distributed Queues & Database Optimization",
        description: "Build a reliable Celery worker pipeline with Redis caching that processes asynchronous batch jobs."
      },
      {
        phase: "Month 4",
        title: "Production Deployment & Stress Testing",
        description: "Execute Locust load tests, profile memory leaks, and deploy services with automated container health checks."
      }
    ],
    partnerTier: "Global Atelier",
    featured: true,
    relatedCourseSlug: "cook-like-a-chef",
    relatedCourseTitle: "Modern Python Backend Engineering"
  },
  {
    id: "int-07",
    slug: "spatial-woodwork-apprentice",
    title: "Python Systems & Cloud Automation Intern",
    company: "Kite Cloud Systems",
    companyLogo: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=200&auto=format&fit=crop&q=80",
    department: "Python",
    location: "Stockholm, Sweden / Hybrid",
    workplaceType: "Hybrid",
    stipend: "$3,400 / month",
    duration: "5 Months",
    commitment: "Full-time (40 hrs/wk)",
    startDate: "June 1, 2027",
    deadline: "April 15, 2027",
    openings: 2,
    level: "All Students",
    skills: ["Python", "AWS & Terraform", "Docker & Kubernetes", "Linux & Shell", "Prometheus & Grafana"],
    overview:
      "Kite Cloud Systems provides cloud management and DevOps observability solutions for cloud-native enterprises. As a Python Systems Intern, you will write custom automation scripts, Kubernetes operators, and observability collectors that keep thousands of multi-region cloud servers running flawlessly.",
    responsibilities: [
      "Write Python automation tooling and CLI utilities using Click and Rich for internal infrastructure teams.",
      "Provision and automate multi-tenant cloud environments using Terraform and AWS SDK (Boto3).",
      "Deploy and manage containerized microservices on Kubernetes clusters with custom health monitors.",
      "Build custom Prometheus metrics exporters and real-time operational Grafana dashboards in Python."
    ],
    qualifications: [
      "Comfortable with Python scripting, Linux systems administration, and Bash scripting.",
      "Understanding of cloud infrastructure concepts (VPCs, subnets, compute instances, object storage).",
      "Familiarity with containerization concepts using Docker.",
      "Rigorous mindset for system reliability, telemetry, and automated tests."
    ],
    perks: [
      "$3,400 / month stipend + monthly commuter transit pass",
      "Hands-on sandbox environment with $5,000 AWS/GCP development budget",
      "Direct 1-on-1 weekly mentorship with Lead DevOps Engineers",
      "Option to transition into a permanent Junior SRE / Cloud Engineer role"
    ],
    mentors: [
      {
        name: "Lars Lindqvist",
        role: "Lead Cloud Infrastructure Engineer",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&auto=format&fit=crop&q=80",
        bio: "Veteran infrastructure architect with 16 years scaling high-availability Kubernetes platforms in the Nordics."
      }
    ],
    milestones: [
      {
        phase: "Month 1",
        title: "Infrastructure as Code & Tooling",
        description: "Set up reproducible cloud developer sandboxes using Terraform, Python Boto3, and automated linters."
      },
      {
        phase: "Month 2-3",
        title: "Kubernetes Automation Operators",
        description: "Develop a custom Python-based Kubernetes controller that manages auto-scaling and ephemeral preview environments."
      },
      {
        phase: "Month 4-5",
        title: "Observability Exporter & Blue/Green Releases",
        description: "Implement custom telemetry exporters and test blue/green traffic shifting with zero downtime."
      }
    ],
    partnerTier: "Premier Studio",
    featured: false,
    relatedCourseSlug: "woodworking-at-home",
    relatedCourseTitle: "Cloud Architecture & Python"
  },
  {
    id: "int-08",
    slug: "visual-brand-identity-designer",
    title: "Modern Web Applications & Interactive UI Fellow",
    company: "Vessel UI Engineering",
    companyLogo: "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=200&auto=format&fit=crop&q=80",
    department: "Web Development",
    location: "New York, NY / Hybrid",
    workplaceType: "Hybrid",
    stipend: "$3,600 / month",
    duration: "3 Months (Summer 2027)",
    commitment: "Full-time (40 hrs/wk)",
    startDate: "June 14, 2027",
    deadline: "April 25, 2027",
    openings: 2,
    level: "Undergraduate",
    skills: ["Next.js App Router", "Server Components", "Tailwind CSS", "Framer Motion", "Zustand"],
    overview:
      "Vessel UI Engineering designs and builds tactile digital products, interactive dashboards, and design-led web platforms. As an Interactive UI Fellow, you will bridge the gap between design vision and technical execution by creating fluid, animated web interfaces with Next.js and Tailwind CSS.",
    responsibilities: [
      "Translate Figma design systems into responsive, fluid React components with pixel precision.",
      "Implement physics-based micro-interactions and transitions using Framer Motion.",
      "Leverage Next.js App Router server and client components to achieve sub-second page loads.",
      "Build interactive dashboard analytics and data visualization modules using modern charting tools."
    ],
    qualifications: [
      "Exceptional eye for typographic hierarchy, negative space, motion timing, and micro-interactions.",
      "Strong skills in TypeScript, modern React, and Tailwind CSS utility classes.",
      "Experience with state management libraries (Zustand, Redux, or React Context).",
      "A portfolio of polished web applications, creative prototypes, or interactive sites."
    ],
    perks: [
      "$3,600 monthly stipend + monthly NYC MetroCard",
      "Studio lunch provided 3 days a week in our Dumbo, Brooklyn loft",
      "High-spec Apple Silicon MacBook Pro and 4K studio display provided",
      "Direct code and design reviews by founding engineering partners"
    ],
    mentors: [
      {
        name: "Chloe Vance",
        role: "Head of UI Engineering & Partner",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80",
        bio: "Former design engineer at Vercel and Pentagram, dedicated to elevating frontend craftsmanship and motion."
      }
    ],
    milestones: [
      {
        phase: "Month 1",
        title: "Component Foundations & Theme Tokens",
        description: "Build an accessible, animated component set with Tailwind CSS and establish responsive layout grids."
      },
      {
        phase: "Month 2",
        title: "State Architecture & Motion Interactions",
        description: "Implement interactive dashboard features with Zustand state stores and smooth exit/enter page transitions."
      },
      {
        phase: "Month 3",
        title: "Production Web App Launch",
        description: "Conduct cross-browser QA, optimize asset loading, and deploy the application to Vercel."
      }
    ],
    partnerTier: "Premier Studio",
    featured: false,
    relatedCourseSlug: "packaging-design",
    relatedCourseTitle: "Interactive UI Engineering"
  },
  {
    id: "int-09",
    slug: "documentary-photojournalism-fellow",
    title: "Multimodal AI & Foundation Models Fellow",
    company: "Atlas Neural Lab",
    companyLogo: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=200&auto=format&fit=crop&q=80",
    department: "AI Engineer",
    location: "Paris, France / Remote",
    workplaceType: "Remote",
    stipend: "$4,200 / month",
    duration: "4 Months",
    commitment: "Full-time (38 hrs/wk)",
    startDate: "September 1, 2027",
    deadline: "May 30, 2027",
    openings: 2,
    level: "Graduate",
    skills: ["PyTorch", "CLIP & Vision-Language", "Multimodal RAG", "Embedding Spaces", "Distributed Training"],
    overview:
      "Atlas Neural Lab develops multimodal foundation models connecting computer vision, speech, and natural language. As a Foundation Models Fellow, you will train cross-modal embeddings, build multimodal search engines, and evaluate zero-shot transfer capabilities across vast datasets.",
    responsibilities: [
      "Train and fine-tune dual-encoder models (CLIP, SigLIP) on paired image-text and audio-text datasets.",
      "Build high-dimensional vector search pipelines connecting multimodal queries to media libraries.",
      "Implement distributed data-parallel training routines using PyTorch Distributed and DeepSpeed.",
      "Publish benchmarks on zero-shot classification, cross-modal retrieval, and representation alignment."
    ],
    qualifications: [
      "Solid theoretical and practical background in machine learning, PyTorch, and linear algebra.",
      "Experience with multimodal architectures (vision transformers, contrastive learning, cross-attention).",
      "Comfortable managing training runs on Linux GPU clusters using Slurm or Docker.",
      "A published paper, preprint, or GitHub project showcasing deep learning proficiency."
    ],
    perks: [
      "$4,200 / month stipend + dedicated cloud GPU cluster allocation",
      "Remote-first setup with option to visit our central Paris laboratory",
      "Co-authorship on peer-reviewed papers submitted to top AI conferences",
      "Direct mentorship from senior researchers with extensive publication records"
    ],
    mentors: [
      {
        name: "Dr. Claire Delacroix",
        role: "Head of Multimodal Research",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&auto=format&fit=crop&q=80",
        bio: "PhD in Machine Learning from Inria, previous senior research scientist at Meta AI FAIR."
      }
    ],
    milestones: [
      {
        phase: "Month 1",
        title: "Multimodal Vector Search Architecture",
        description: "Benchmark zero-shot cross-modal retrieval and build an interactive embedding visualization tool."
      },
      {
        phase: "Month 2-3",
        title: "Contrastive Pretraining & Alignment",
        description: "Scale distributed training runs across multi-GPU nodes with mixed precision and gradient checkpointing."
      },
      {
        phase: "Month 4",
        title: "Evaluation & Research Publication",
        description: "Author comprehensive benchmark reports and release an open-source multimodal retrieval toolkit."
      }
    ],
    partnerTier: "Global Atelier",
    featured: false,
    relatedCourseSlug: "film-photography",
    relatedCourseTitle: "Multimodal Machine Learning"
  },
  {
    id: "int-10",
    slug: "fine-arts-studio-assistant-residency",
    title: "Python Data Science & Quantitative Analytics Fellow",
    company: "Veritas Quantitative Research",
    companyLogo: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=200&auto=format&fit=crop&q=80",
    department: "Python",
    location: "London, UK / Hybrid",
    workplaceType: "Hybrid",
    stipend: "£3,400 / month",
    duration: "4 Months",
    commitment: "Full-time (36 hrs/wk)",
    startDate: "May 1, 2027",
    deadline: "April 1, 2027",
    openings: 2,
    level: "All Students",
    skills: ["Python", "Pandas & Polars", "NumPy & SciPy", "DuckDB & SQL", "Streamlit & Plotly"],
    overview:
      "Veritas Quantitative Research develops algorithmic forecasting systems and high-frequency analytical models. The Data Science Fellow will build data ingestion pipelines, perform exploratory data analysis, train predictive models, and deliver interactive analytical dashboards for decision-makers.",
    responsibilities: [
      "Construct high-throughput data processing pipelines using Python, Polars, and DuckDB.",
      "Perform statistical exploratory analysis, hypothesis testing, and time-series feature engineering.",
      "Train and validate predictive regression and classification models with Scikit-learn and LightGBM.",
      "Build reactive, real-time executive analytics dashboards with Streamlit and Plotly."
    ],
    qualifications: [
      "Strong skills in Python programming, Pandas/Polars, and SQL database querying.",
      "Solid background in probability, statistics, and exploratory data analysis.",
      "Experience with data visualization libraries (Plotly, Matplotlib, Seaborn).",
      "Demonstrated ability to communicate quantitative insights through clear charts and reports."
    ],
    perks: [
      "£3,400 monthly stipend + central London office access overlooking the Thames",
      "Fast-track interview for Quantitative Analyst or Data Scientist graduate roles",
      "Direct daily mentorship from senior quantitative researchers and statisticians",
      "Sponsorship for professional data science conferences and certifications"
    ],
    mentors: [
      {
        name: "Dr. Lena Hart",
        role: "Head of Quantitative Analytics",
        avatar: "https://framerusercontent.com/images/TATDi0y8zaKMAxLQeCeRnzRNg.webp",
        bio: "PhD in Applied Mathematics from Cambridge with 14 years developing quantitative data pipelines."
      }
    ],
    milestones: [
      {
        phase: "Month 1",
        title: "High-Performance Data Ingestion & Cleaning",
        description: "Build robust ETL pipelines in Polars that ingest and validate millions of historical time-series rows."
      },
      {
        phase: "Month 2-3",
        title: "Statistical Feature Engineering & Modeling",
        description: "Implement cross-validated predictive models and evaluate metric stability across market regimes."
      },
      {
        phase: "Month 4",
        title: "Interactive Dashboards & Executive Insights",
        description: "Deploy an interactive Streamlit analytics platform that visualizes model predictions and risk metrics."
      }
    ],
    partnerTier: "Global Atelier",
    featured: true,
    relatedCourseSlug: "abstract-painting",
    relatedCourseTitle: "Data Science with Python"
  }
];

export const defaultMockApplications: StudentApplication[] = [
  {
    id: "app-101",
    internshipSlug: "atelier-creative-software-fellow",
    internshipTitle: "Full-Stack Web Development Fellow",
    company: "Atelier Interactive",
    companyLogo: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=200&auto=format&fit=crop&q=80",
    department: "Web Development",
    location: "San Francisco, CA / Remote",
    stipend: "$3,800 / month",
    workplaceType: "Remote",
    applicantName: "Alex Rivera",
    email: "alex.rivera@example.com",
    university: "UC Berkeley / Computer Science",
    graduationYear: "2027",
    portfolioUrl: "https://github.com/alexrivera-tech",
    coverNote: "Passionate about high-performance web applications, typed APIs, and building delightful user interfaces with Next.js and TypeScript.",
    appliedDate: "May 2, 2027",
    status: "Interview Scheduled",
    statusUpdateDate: "May 10, 2027",
    interviewDate: "May 28, 2027 · 2:00 PM EST"
  },
  {
    id: "app-102",
    internshipSlug: "bauhaus-product-design-intern",
    internshipTitle: "Frontend & Web Design Systems Intern",
    company: "Studio Forma",
    companyLogo: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=200&auto=format&fit=crop&q=80",
    department: "Web Development",
    location: "Berlin, Germany / Hybrid",
    stipend: "€3,200 / month",
    workplaceType: "Hybrid",
    applicantName: "Alex Rivera",
    email: "alex.rivera@example.com",
    university: "UC Berkeley / Computer Science",
    graduationYear: "2027",
    portfolioUrl: "https://alexrivera.dev",
    coverNote: "Strong focus on accessible design systems, component testing in Storybook, and WCAG AA accessibility compliance.",
    appliedDate: "May 5, 2027",
    status: "Under Review",
    statusUpdateDate: "May 12, 2027"
  }
];
