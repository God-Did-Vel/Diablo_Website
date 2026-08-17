import axios from 'axios';
import {
  Product,
  HeroSectionData,
  AboutSectionData,
  ProcessStep,
  Testimonial,
  Faq,
  Blog,
  ContactSubmission,
  SiteSetting,
} from '../types';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor for JWT authentication
api.interceptors.request.use((config) => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('diablo_token');
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});

// Mock Fallback Data in case backend is offline during initial preview
const MOCK_HERO: HeroSectionData = {
  title: 'CRYSTAL PURITY IN EVERY DROP',
  highlight: 'DIABLO TABLE WATER',
  subtitle: 'Sourced from natural volcanic subterranean aquifers, ultra-filtered through 7 micro-refinement stages for unmatched taste, hydration, and cellular clarity.',
  ctaPrimary: 'Explore Water Range',
  ctaSecondary: 'Watch Our Story',
  badgeText: 'ISO 22000 & FDA Certified Pure',
  purityStat: '99.99%',
  statsLabel: 'Microbial & Heavy Metal Purity Rating',
  imageUrl: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4e?auto=format&fit=crop&w=1200&q=80',
};

const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Diablo Reserve Glass Edition',
    slug: 'diablo-reserve-glass-750ml',
    volume: '750 ml',
    packaging: 'Premium Cobalt Glass Bottle',
    description: 'Our signature luxury table water served in sleek cobalt glass bottles. Perfect for fine dining, executive boardrooms, and high-end hospitality.',
    price: 4.50,
    imageUrl: 'https://res.cloudinary.com/duweg8kpv/image/upload/v1786240004/D30_qrexmr.jpg',
    phLevel: 7.8,
    tdsLevel: 38,
    badge: 'Luxury Reserve',
    inStock: true,
    featured: true,
    orderIndex: 1,
  },
  {
    id: '2',
    name: 'Diablo Active Daily Eco',
    slug: 'diablo-active-daily-500ml',
    volume: '500 ml',
    packaging: 'BPA-Free 100% Recycled PET',
    description: 'Ergonomically designed for dynamic daily performance, fitness sessions, and active workdays. Crisp, clean, and instant hydration.',
    price: 1.80,
    imageUrl: 'https://res.cloudinary.com/duweg8kpv/image/upload/v1786241718/D35-a_plqrj2.png',
    phLevel: 7.6,
    tdsLevel: 42,
    badge: 'Most Popular',
    inStock: true,
    featured: true,
    orderIndex: 2,
  },
  {
    id: '3',
    name: 'Diablo Hydro Family Pack',
    slug: 'diablo-hydro-family-1500ml',
    volume: '1.5 Litres',
    packaging: 'Lightweight Eco-Polymer',
    description: 'Generous 1.5L bottle designed for family dining, office desks, and home wellness routines. Enriched with trace magnesium and calcium.',
    price: 3.20,
    imageUrl: 'https://res.cloudinary.com/duweg8kpv/image/upload/v1786241718/FLSK_at28ug.png',
    phLevel: 7.8,
    tdsLevel: 40,
    badge: 'Family Value',
    inStock: true,
    featured: false,
    orderIndex: 3,
  },
  {
    id: '4',
    name: 'Diablo Office Dispenser Jar',
    slug: 'diablo-office-dispenser-19l',
    volume: '19 Litres',
    packaging: 'Heavy-Duty Reusable Polycarbonate',
    description: 'Enterprise-grade 19L water jar compatible with hot & cold office dispensers. Includes anti-microbial seal technology.',
    price: 12.00,
    imageUrl: 'https://res.cloudinary.com/duweg8kpv/image/upload/v1786241270/D34_djgu9e.png',
    phLevel: 7.8,
    tdsLevel: 35,
    badge: 'Enterprise Bulk',
    inStock: true,
    featured: true,
    orderIndex: 4,
  },
];

const MOCK_ABOUT: AboutSectionData = {
  title: 'CRAFTED BY NATURE, PERFECTED BY SCIENCE',
  subtitle: 'The Gold Standard of Premium Hydration',
  storyText: 'At Diablo Table Water, we believe water is not just liquid—it is the essence of energy, health, and vitality. Sourced deep within protected bedrock, our water is enriched with natural minerals and refined through 7 micro-stages.',
  visionText: 'To elevate global hydration standards through ultra-pure, eco-consciously bottled table water.',
  missionText: 'Deliver flawless quality table water using sustainable packaging and zero carbon footprint processes.',
  purityGuarantee: 'Guaranteed 100% Free of Microplastics, Nitrates, and Heavy Metals',
  yearsExperience: 18,
  dailyOutputLiters: '750,000+',
  mineralRichnessScore: 'pH 7.8 Optimal Balance',
};

const MOCK_PROCESS: ProcessStep[] = [
  { id: '1', stepNumber: 1, title: 'Deep Aquifer Extraction', description: 'Extracted from subterranean aquifers 300m below bedrock.', icon: 'Mountain', highlightText: '100% Pure Source' },
  { id: '2', stepNumber: 2, title: 'Quartz Sand Filtration', description: 'Removes organic sediment through natural silica layers.', icon: 'Layers', highlightText: 'Particulate Scrubbing' },
  { id: '3', stepNumber: 3, title: 'Activated Coconut Carbon', description: 'Eliminates trace odors and chlorine while preserving softness.', icon: 'ShieldCheck', highlightText: 'Taste Refinement' },
  { id: '4', stepNumber: 4, title: 'Dual-Pass RO', description: 'Micro-filtration down to 0.0001 microns.', icon: 'Waves', highlightText: '0.0001 Micron RO' },
  { id: '5', stepNumber: 5, title: 'Mineral Balance Infusion', description: 'Reintroduces essential calcium and magnesium for pH 7.8.', icon: 'Sparkles', highlightText: 'pH 7.8 Alkaline' },
  { id: '6', stepNumber: 6, title: 'UV-C Sterilization', description: 'Irradiation kills 99.999% of bacteria without chemicals.', icon: 'Sun', highlightText: 'Zero-Chemical' },
  { id: '7', stepNumber: 7, title: 'Ozonation & Bottling', description: 'Hermetic precision capping under sterile ozonated air.', icon: 'CheckCircle2', highlightText: 'Hermetically Sealed' },
];

const MOCK_TESTIMONIALS: Testimonial[] = [
  { id: '1', clientName: 'Alexander Vance', designation: 'Executive Chef', company: 'L’Étoile Fine Dining', comment: 'We exclusively serve Diablo Reserve Glass in our restaurant. Its clean palate match enhances wine pairings and leaves our guests thoroughly impressed.', rating: 5, avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80', featured: true },
  { id: '2', clientName: 'Dr. Sarah Jenkins', designation: 'Sports Nutritionist', company: 'Apex Performance Lab', comment: 'Diablo Water has exceptional hydration index and perfect pH 7.8 balance. My athletes notice faster recovery and zero bloating during training.', rating: 5, avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80', featured: true },
  { id: '3', clientName: 'Marcus Sterling', designation: 'Head of Operations', company: 'Nexus Global Tech', comment: 'Switching to Diablo Table Water 19L jars across our headquarters buildings improved office satisfaction and boosted daily team wellness.', rating: 5, avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80', featured: true },
];

const MOCK_FAQS: Faq[] = [
  { id: '1', question: 'What makes Diablo Table Water unique compared to standard water?', answer: 'Diablo Table Water is sourced from protected deep aquifers and refined through 7 micro-filtration stages, maintaining a perfect pH 7.8 balance.', category: 'Quality', orderIndex: 1 },
  { id: '2', question: 'What is the pH level and mineral composition?', answer: 'Diablo features a naturally balanced pH of 7.8, TDS of ~38-42 ppm, and light trace levels of essential Calcium, Magnesium, and Potassium.', category: 'Quality', orderIndex: 2 },
  { id: '3', question: 'Do you offer corporate subscription plans for offices?', answer: 'Yes! We provide tailored corporate hydration plans including dispenser servicing and scheduled 19L jar deliveries.', category: 'Orders', orderIndex: 3 },
];

const MOCK_BLOGS: Blog[] = [
  {
    id: '1',
    title: 'The Science of Optimal Hydration: Why pH Balance Matters',
    slug: 'science-of-optimal-hydration-ph-balance',
    summary: 'Discover how slightly alkaline table water helps regulate body acidity, boosts metabolic absorption, and enhances physical energy levels.',
    content: 'Hydration is more than simply drinking liquid. The structural purity and pH value of water directly influence how efficiently your cells absorb nutrients and flush out toxins...',
    category: 'Wellness & Health',
    author: 'Dr. Elena Rostova',
    imageUrl: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80',
    readTime: '5 min read',
    published: true,
    publishDate: new Date().toISOString(),
  },
  {
    id: '2',
    title: 'Zero Microplastics: How 7-Stage Reverse Osmosis Protects You',
    slug: 'zero-microplastics-7-stage-filtration-protection',
    summary: 'An in-depth look at how our advanced multi-barrier filtration technology strips micro-particles down to 0.0001 microns.',
    content: 'Recent global studies highlight alarming traces of microplastics in everyday bottled drinks. At Diablo Table Water, our dual-pass RO guarantees zero micro-contaminants...',
    category: 'Purity Tech',
    author: 'Diablo Quality Assurance Team',
    imageUrl: 'https://res.cloudinary.com/duweg8kpv/image/upload/v1786708234/D45_clctsg.png',
    readTime: '4 min read',
    published: true,
    publishDate: new Date().toISOString(),
  },
  {
    id: '3',
    title: 'Alkaline vs. Purified: Which Water Is Right for Your Body?',
    slug: 'alkaline-vs-purified-water-guide',
    summary: 'Breaking down the real differences between alkaline and purified water, and how to choose based on your hydration goals.',
    content: 'With so many water types on shelves today, it\'s easy to feel overwhelmed by the choices. Alkaline water, with its higher pH level, is often praised for potentially neutralizing acid in the bloodstream, while purified water focuses purely on removing contaminants without altering natural mineral balance. At Diablo Table Water, we test both profiles rigorously to help you understand which option best supports your daily wellness routine...',
    category: 'Hydration Science',
    author: 'Diablo Quality Assurance Team',
    imageUrl: 'https://res.cloudinary.com/duweg8kpv/image/upload/v1786708232/D44_z5wnza.png',
    readTime: '5 min read',
    published: true,
    publishDate: new Date().toISOString(),
  },
];

const MOCK_SETTINGS: SiteSetting = {
  companyName: 'DIABLO TABLE WATER',
  phonePrimary: '1-800-500-333-33',
  phoneSecondary: '+1 (555) 019-2831',
  emailSupport: 'contact@diablowater.com',
  address: 'Diablo Water Headquarters, Hydro Plaza 88, Aquapure Springs Valley',
  workingHours: 'Mon - Sat: 08:00 AM - 08:00 PM',
  facebookUrl: 'https://facebook.com/diablowater',
  twitterUrl: 'https://twitter.com/diablowater',
  instagramUrl: 'https://instagram.com/diablowater',
  linkedinUrl: 'https://linkedin.com/company/diablowater',
};

// API Methods with Graceful Fallbacks
export const fetchHero = async (): Promise<HeroSectionData> => {
  try {
    const res = await api.get('/cms/hero');
    return res.data.data || MOCK_HERO;
  } catch (err) {
    return MOCK_HERO;
  }
};

export const fetchAbout = async (): Promise<AboutSectionData> => {
  try {
    const res = await api.get('/cms/about');
    return res.data.data || MOCK_ABOUT;
  } catch (err) {
    return MOCK_ABOUT;
  }
};

export const fetchProducts = async (includeInactive = false): Promise<Product[]> => {
  try {
    const res = await api.get(`/products?admin=${includeInactive}`);
    return res.data.data && res.data.data.length ? res.data.data : MOCK_PRODUCTS;
  } catch (err) {
    return MOCK_PRODUCTS;
  }
};

export const fetchProcessSteps = async (): Promise<ProcessStep[]> => {
  try {
    const res = await api.get('/cms/process');
    return res.data.data && res.data.data.length ? res.data.data : MOCK_PROCESS;
  } catch (err) {
    return MOCK_PROCESS;
  }
};

export const fetchTestimonials = async (): Promise<Testimonial[]> => {
  try {
    const res = await api.get('/testimonials');
    return res.data.data && res.data.data.length ? res.data.data : MOCK_TESTIMONIALS;
  } catch (err) {
    return MOCK_TESTIMONIALS;
  }
};

export const fetchFaqs = async (): Promise<Faq[]> => {
  try {
    const res = await api.get('/faqs');
    return res.data.data && res.data.data.length ? res.data.data : MOCK_FAQS;
  } catch (err) {
    return MOCK_FAQS;
  }
};

export const fetchBlogs = async (): Promise<Blog[]> => {
  try {
    const res = await api.get('/blogs');
    return res.data.data && res.data.data.length ? res.data.data : MOCK_BLOGS;
  } catch (err) {
    return MOCK_BLOGS;
  }
};

export const fetchSettings = async (): Promise<SiteSetting> => {
  try {
    const res = await api.get('/settings');
    return res.data.data || MOCK_SETTINGS;
  } catch (err) {
    return MOCK_SETTINGS;
  }
};

export const submitContactForm = async (formData: any) => {
  try {
    const res = await api.post('/contact/submit', formData);
    return res.data;
  } catch (err: any) {
    // If backend is offline, simulate success for demo
    return { success: true, message: 'Message submitted successfully (Demo Mode)' };
  }
};

export default api;
