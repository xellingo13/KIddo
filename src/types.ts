export enum Category {
  ALL = 'Barchasi',
  BABY = 'Chaqaloqlar (0-2 yosh)',
  TODDLER = 'Kichkintoylar (3-5 yosh)',
  SCHOOL = 'Maktab yoshi (6+ yosh)',
  SPECIAL = 'Maxsus enagalar'
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: 'PARENT' | 'NANNY';
  avatar: string;
  city?: string;
  address?: string;
  isVerified?: boolean;
  rating?: number;
  reviewsCount?: number;
  experienceYears?: number;
  hourlyRate?: number;
  languages?: string[];
  availability?: string[];
}

export interface Nanny {
  id: string;
  name: string;
  category: Category;
  rating: number;
  reviewsCount: number;
  hourlyRate: number; // in sum/hour
  experienceYears: number;
  location: {
    lat: number;
    lng: number;
    address: string;
    city: string;
    address_uz?: string;
    address_en?: string;
    address_ru?: string;
    city_uz?: string;
    city_en?: string;
    city_ru?: string;
  };
  images: string[]; // Minimum 5 images showing qualifications, kids room, activities, certifications, smile
  bio: string;
  bio_uz?: string;
  bio_en?: string;
  bio_ru?: string;
  phone: string;
  languages: string[];
  availability: string[]; // days e.g. ['Dushanba', 'Seshanba', 'Chorshanba', 'Payshanba', 'Juma']
  ageGroupPreference: string;
  ageGroupPreference_uz?: string;
  ageGroupPreference_en?: string;
  ageGroupPreference_ru?: string;
  isVerified: boolean;
  certificates: string[]; // list of certificate names/links
  certificates_uz?: string[];
  certificates_en?: string[];
  certificates_ru?: string[];
  recommendations: string[]; // recommendation notes
  recommendations_uz?: string[];
  recommendations_en?: string[];
  recommendations_ru?: string[];
  reviews: Review[];
  poster?: {
    name: string;
    avatar: string;
    role?: string;
    role_uz?: string;
    role_en?: string;
    role_ru?: string;
    listingsCount?: number;
    callsCount?: number;
  };
}

export interface Review {
  id: string;
  authorName: string;
  authorAvatar: string;
  rating: number;
  comment: string;
  comment_uz?: string;
  comment_en?: string;
  comment_ru?: string;
  date: string;
}

export interface JournalEntry {
  id: string;
  childName: string;
  date: string;
  meals: string;
  sleep: string;
  activities: string;
  note: string;
  media: string[]; // images/videos
  loggedBy: string;
}

export interface ProductAd {
  id: string;
  title: string;
  category: 'O\'yinchoqlar' | 'Kiyimlar' | 'Ta\'lim' | 'Sog\'liqni saqlash' | 'Chaqaloqlar';
  price: number;
  image: string;
  description: string;
  phone: string;
  postedBy: string;
  isPromo?: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  summary: string;
  content: string;
  image: string;
  author: string;
  date: string;
  readTime: string;
}

export interface ChatMessage {
  id: string;
  senderId: string;
  receiverId: string;
  text: string;
  timestamp: string;
}
