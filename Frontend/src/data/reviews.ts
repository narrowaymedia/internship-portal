import { ReviewItem } from "@/types";

export const reviews: ReviewItem[] = [
  {
    id: "rev-1",
    studentName: "Maya Lin",
    city: "San Francisco",
    courseTitle: "Abstract Painting",
    rating: 5,
    comment: "Lena's critique of my second project completely shifted how I view composition. She showed me in 3 minutes why my canvas lacked tension, and the fix changed everything.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80",
    projectSnippet: "Tectonic Layer Study",
  },
  {
    id: "rev-2",
    studentName: "Oliver Vance",
    city: "London",
    courseTitle: "Woodworking at Home",
    rating: 5,
    comment: "I live in a small 2-bedroom flat with no yard. Tom's advice on hand tools and bench sharpening allowed me to build a solid cherry bedside table without waking the neighbors once.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80",
    projectSnippet: "Pinned Mortise Table",
  },
  {
    id: "rev-3",
    studentName: "Camille Laurent",
    city: "Lyon",
    courseTitle: "Cook Like a Chef",
    rating: 5,
    comment: "Chef Marco is a master. Instead of telling me to follow a 20-step recipe, he explained pan heat and salt penetration. My weeknight dinners have leveled up permanently.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&auto=format&fit=crop&q=80",
    projectSnippet: "Crisp Skin Branzino",
  },
  {
    id: "rev-4",
    studentName: "Hassan Al-Mansoor",
    city: "Dubai",
    courseTitle: "Graphic Design Basics",
    rating: 5,
    comment: "Sofia's baseline grid breakdown was worth 10x the price of admission. My editorial layouts finally look like they belong in a Swiss monograph instead of a student portfolio.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80",
    projectSnippet: "Lookbook Typographic Specimen",
  },
];
