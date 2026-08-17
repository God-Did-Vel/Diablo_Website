export interface User {
  id: string;
  email: string;
  name: string;
  role: 'ADMIN' | 'EDITOR';
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  volume: string;
  packaging: string;
  description: string;
  price: number;
  imageUrl: string;
  phLevel: number;
  tdsLevel: number;
  badge?: string;
  inStock: boolean;
  featured: boolean;
  orderIndex: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface HeroSectionData {
  id?: string;
  title: string;
  highlight: string;
  subtitle: string;
  ctaPrimary: string;
  ctaSecondary: string;
  badgeText: string;
  purityStat: string;
  statsLabel: string;
  imageUrl?: string;
}

export interface AboutSectionData {
  id?: string;
  title: string;
  subtitle: string;
  storyText: string;
  visionText: string;
  missionText: string;
  purityGuarantee: string;
  yearsExperience: number;
  dailyOutputLiters: string;
  mineralRichnessScore: string;
}

export interface ProcessStep {
  id: string;
  stepNumber: number;
  title: string;
  description: string;
  icon: string;
  highlightText: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  designation: string;
  company?: string;
  comment: string;
  rating: number;
  avatarUrl?: string;
  featured: boolean;
}

export interface Faq {
  id: string;
  question: string;
  answer: string;
  category: string;
  orderIndex: number;
}

export interface Blog {
  id: string;
  title: string;
  slug: string;
  summary: string;
  content: string;
  category: string;
  author: string;
  imageUrl: string;
  readTime: string;
  published: boolean;
  publishDate: string;
}

export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  companyName?: string;
  status: 'NEW' | 'CONTACTED' | 'RESOLVED';
  createdAt: string;
}

export interface SiteSetting {
  id?: string;
  companyName: string;
  phonePrimary: string;
  phoneSecondary: string;
  emailSupport: string;
  address: string;
  workingHours: string;
  facebookUrl?: string;
  twitterUrl?: string;
  instagramUrl?: string;
  linkedinUrl?: string;
}
