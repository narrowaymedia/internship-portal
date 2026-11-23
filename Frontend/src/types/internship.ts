export type WorkplaceType = "Remote" | "Hybrid" | "On-site";
export type DepartmentType =
  | "Software Engineering"
  | "UI/UX Design"
  | "AI & Machine Learning"
  | "Film & Motion"
  | "Creative Writing"
  | "Industrial Craft"
  | "Culinary Arts";

export type ApplicationStatus =
  | "Submitted"
  | "Under Review"
  | "Interview Scheduled"
  | "Offer Extended"
  | "Archived";

export interface Mentor {
  name: string;
  role: string;
  avatar: string;
  bio: string;
}

export interface Milestone {
  phase: string;
  title: string;
  description: string;
}

export interface Internship {
  id: string;
  slug: string;
  title: string;
  company: string;
  companyLogo: string;
  department: DepartmentType;
  location: string;
  workplaceType: WorkplaceType;
  stipend: string;
  duration: string;
  commitment: string;
  startDate: string;
  deadline: string;
  openings: number;
  level: "Undergraduate" | "Graduate" | "All Students";
  skills: string[];
  overview: string;
  responsibilities: string[];
  qualifications: string[];
  perks: string[];
  mentors: Mentor[];
  milestones: Milestone[];
  partnerTier: "Premier Studio" | "Innovation Lab" | "Global Atelier";
  featured?: boolean;
  relatedCourseSlug?: string;
  relatedCourseTitle?: string;
}

export interface StudentApplication {
  id: string;
  internshipSlug: string;
  internshipTitle: string;
  company: string;
  companyLogo: string;
  department: DepartmentType;
  location: string;
  stipend: string;
  workplaceType: WorkplaceType;
  applicantName: string;
  email: string;
  university: string;
  graduationYear: string;
  portfolioUrl?: string;
  coverNote?: string;
  appliedDate: string;
  status: ApplicationStatus;
  statusUpdateDate: string;
  interviewDate?: string;
}
