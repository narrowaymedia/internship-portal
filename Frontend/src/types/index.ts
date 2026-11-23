export interface Lesson {
  title: string;
  duration: string;
  description: string;
  previewUrl?: string;
}

export interface TeacherInfo {
  name: string;
  role: string;
  slug: string;
  photo: string;
  yearsOfCraft?: string;
  location?: string;
  quote?: string;
  bio?: string;
}

export interface Course {
  slug: string;
  title: string;
  tagline: string;
  category: "Painting" | "Cooking" | "Writing" | "Photography" | "Film" | "Design" | "Craft";
  teacher: TeacherInfo;
  lessonsCount: number;
  duration: string;
  level: "Beginner" | "All levels" | "Intermediate";
  price: number;
  rating: number;
  studentsCount: number;
  description: string;
  whatYouWillMake: string;
  heroImage: string;
  gallery: string[];
  syllabus: Lesson[];
  materials: string[];
}

export interface Teacher {
  slug: string;
  name: string;
  role: string;
  discipline: string;
  experience: string;
  location: string;
  quote: string;
  bio: string;
  philosophy: string;
  photo: string;
  courseSlug: string;
  courseTitle: string;
  studentProjects: Array<{
    title: string;
    studentName: string;
    image: string;
  }>;
}

export interface JournalArticle {
  slug: string;
  title: string;
  category: "Methods" | "Behind the Scenes" | "Student Stories" | "Essays";
  date: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  excerpt: string;
  coverImage: string;
  content: string[];
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: "Courses & Feedback" | "Membership & Billing" | "Materials & Gear";
}

export interface ReviewItem {
  id: string;
  studentName: string;
  city: string;
  courseTitle: string;
  rating: number;
  comment: string;
  avatar: string;
  projectSnippet?: string;
}
