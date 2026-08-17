# 🌊 DIABLO TABLE WATER — Enterprise Web Platform & CMS

<div align="center">

  <!-- 📸 WEBSITE PREVIEW IMAGE PLACEHOLDER -->
  <!-- Replace the path below with your own screenshot or banner (e.g., ./assets/preview.png or an online image URL) -->
  <img src="https://res.cloudinary.com/duweg8kpv/image/upload/v1786977305/Screenshot_834_exhzfq.png" alt="Diablo Table Water Website Preview" width="100%" style="border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.15);" />

  <br/><br/>

  [![Next.js](https://img.shields.io/badge/Next.js-14.1.0-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
  [![React](https://img.shields.io/badge/React-18.2.0-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
  [![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
  [![Express.js](https://img.shields.io/badge/Express.js-4.18-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
  [![Prisma](https://img.shields.io/badge/Prisma-5.10-2D3748?style=for-the-badge&logo=prisma&logoColor=white)](https://www.prisma.io/)
  [![PostgreSQL](https://img.shields.io/badge/PostgreSQL-14+-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)

  <p align="center">
    <strong>A luxury digital experience and full-stack enterprise content management system for Diablo Table Water.</strong><br/>
    <em>Crafted by Nature, Perfected by Science.</em>
  </p>

  <p align="center">
    <a href="#-key-features">Features</a> •
    <a href="#-tech-stack">Tech Stack</a> •
    <a href="#-getting-started">Getting Started</a> •
    <a href="#-environment-variables">Environment Variables</a> •
    <a href="#-api-endpoints">API Reference</a> •
    <a href="#-project-structure">Project Structure</a>
  </p>

</div>

---

## 📖 Overview

**Diablo Table Water** is a full-stack web application designed for a premium table water brand. It features a modern, fluid user interface with micro-interactions, liquid preloading effects, interactive product catalogs, and a 7-stage filtration pipeline walkthrough. It also includes an enterprise **Admin Dashboard (CMS)** for managing products, dynamic website sections, customer inquiries, and blog publications.

---

## ✨ Key Features

### 🌐 Customer Experience (Frontend)
- **Fluid Visuals & Micro-Animations:** Built with Framer Motion & GSAP for silky smooth scroll-triggered animations, fluid liquid loaders, and floating ambient water bubble effects.
- **Dynamic Hero Showcase:** Multi-slide interactive carousel highlighting premium product lines, purity stats (99.99%), and brand narrative.
- **Interactive Product Catalog:** Filterable showcase for Glass Reserve (750ml), Active Daily Eco (500ml), Hydro Family Pack (1.5L), and 19L Enterprise Dispenser Jars with detailed TDS, pH, and packaging specs.
- **7-Stage Purification Timeline:** Visual step-by-step breakdown of deep aquifer extraction, quartz sand filtration, dual-pass reverse osmosis (0.0001 micron), mineral remineralization (pH 7.8), UV-C sterilization, and ozonated hermetic bottling.
- **Certified Mineral Profile:** Real-time laboratory breakdown of Calcium, Magnesium, Potassium, TDS, and microplastic-free certification.
- **Corporate & Distributor Inquiries:** Interactive contact and subscription quote request forms with instant feedback.
- **Hydration Science & News Blog:** Dedicated health, wellness, and water science articles with rich markdown/content presentation.
- **Graceful Fallback Mode:** Seamlessly switches between live backend REST APIs and client-side mock data if the backend server is offline during demos.

### 🛡️ Enterprise CMS & Admin Portal (`/admin`)
- **Secure Authentication:** JWT-based login with role-based permissions (`ADMIN`, `EDITOR`).
- **Product Management:** Full CRUD operations for bottle models, pricing, volumes, packaging types, pH/TDS levels, and inventory status.
- **Content Management System (CMS):** Update hero banners, origin story text, process steps, testimonials, and FAQs without touching code.
- **Inquiry Management:** Review incoming corporate supply requests, delivery subscriptions, and contact submissions with status filtering (`NEW`, `CONTACTED`, `RESOLVED`).
- **Blog Manager:** Publish, edit, and categorize educational articles on hydration.

---

## 🛠️ Tech Stack

### Frontend
| Technology | Description |
| :--- | :--- |
| **[Next.js 14](https://nextjs.org/)** | App Router, Server & Client Components, Optimized Image & Font loading |
| **[React 18](https://reactjs.org/)** | Modern component-driven UI architecture |
| **[TypeScript](https://www.typescriptlang.org/)** | Strict type-safety across all components and API services |
| **[Tailwind CSS](https://tailwindcss.com/)** | Custom luxury design tokens, gradients, and responsive layouts |
| **[Framer Motion](https://www.framer.com/motion/)** | Declarative page transitions and layout animations |
| **[GSAP 3](https://greensock.com/gsap/)** | High-performance timeline animations for hero sliders |
| **[Lucide React](https://lucide.dev/)** | Crisp, lightweight icons |
| **[Axios](https://axios-http.com/)** | HTTP client with automatic JWT bearer interceptors |

### Backend & Database
| Technology | Description |
| :--- | :--- |
| **[Node.js](https://nodejs.org/)** | Scalable JavaScript runtime environment |
| **[Express.js](https://expressjs.com/)** | Fast, minimalist REST API web framework |
| **[TypeScript](https://www.typescriptlang.org/)** | Type-safe backend handlers, controllers, and middlewares |
| **[Prisma ORM](https://www.prisma.io/)** | Next-generation ORM for schema definitions, migrations, and queries |
| **[PostgreSQL](https://www.postgresql.org/)** | Relational database for enterprise data storage |
| **[Zod](https://zod.dev/)** | Strict request schema validation |
| **[JSON Web Tokens (JWT)](https://jwt.io/)** | Stateless authentication for admin portal |
| **[Bcrypt.js](https://github.com/dcodeIO/bcrypt.js)** | Industry-standard password hashing |

---

## 📁 Project Structure

```text
Diablo_Water/
├── frontend/                     # Next.js 14 App Router Frontend
│   ├── public/                   # Static assets (favicons, manifests, preview images)
│   ├── src/
│   │   ├── app/                  # Application Routes & Pages
│   │   │   ├── about/            # About & Company Story page
│   │   │   ├── admin/            # Admin login & Dashboard (CMS)
│   │   │   ├── blog/             # Hydration Blog & Article details
│   │   │   ├── contact/          # Inquiries & Contact page
│   │   │   ├── process/          # 7-Stage Purification pipeline page
│   │   │   ├── products/         # Product catalog showcase
│   │   │   ├── globals.css       # Design tokens, custom utilities, animations
│   │   │   ├── layout.tsx        # Root layout with typography & metadata
│   │   │   └── page.tsx          # Homepage
│   │   ├── components/           # Reusable UI & Section Components
│   │   │   ├── about/            # Story and vision cards
│   │   │   ├── blog/             # Blog listing and reader
│   │   │   ├── contact/          # Inquiries form & locations
│   │   │   ├── dashboard/        # Admin navigation, headers, tables
│   │   │   ├── hero/             # GSAP Hero Slider & highlight cards
│   │   │   ├── layout/           # Glass Navbar, HeaderContainer, Footer
│   │   │   ├── process/          # Interactive 7-stage filter timeline
│   │   │   ├── products/         # Product cards, modal view, specs
│   │   │   ├── stats/            # Animated numeric counters
│   │   │   ├── testimonials/     # Executive & culinary reviews
│   │   │   └── ui/               # GlassCard, SectionHeading, Preloader, WaterBubbles
│   │   ├── context/              # AuthContext & global states
│   │   ├── services/             # Axios API client with offline fallback
│   │   └── types/                # TypeScript interface definitions
│   ├── package.json
│   ├── tailwind.config.js
│   └── tsconfig.json
│
├── backend/                      # Express + Prisma Backend API
│   ├── prisma/
│   │   ├── schema.prisma         # PostgreSQL data models & enums
│   │   └── seed.ts               # Database seed script for initial content & admin
│   ├── src/
│   │   ├── config/               # Environment & system configurations
│   │   ├── middlewares/          # Auth guards, validation, and error handlers
│   │   ├── modules/              # Controllers and services for each domain
│   │   ├── routes/               # Modular Express API route definitions
│   │   └── server.ts             # Server entry point
│   ├── .env                      # Backend environment variables
│   ├── package.json
│   └── tsconfig.json
│
└── README.md                     # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites
Make sure you have the following installed on your system:
- **[Node.js](https://nodejs.org/)** (v18.0.0 or higher recommended)
- **[npm](https://www.npmjs.com/)** or **[yarn](https://yarnpkg.com/)** / **[pnpm](https://pnpm.io/)**
- **[PostgreSQL](https://www.postgresql.org/)** database (Local instance or cloud hosted via Supabase, Neon, Railway, etc.)

---

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/diablo-water.git
cd diablo-water
```

---

### 2. Backend Setup

1. **Navigate to the backend directory:**
   ```bash
   cd backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

### 3. Frontend Setup

1. **Open a new terminal and navigate to the frontend directory:**
   ```bash
   cd frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment variables (Optional):**
   Create a `.env.local` file in the `frontend/` directory:
   ```env
   NEXT_PUBLIC_API_URL=http://localhost:5000/api
   ```
   *(If omitted, it automatically defaults to `http://localhost:5000/api` with built-in offline mock fallbacks)*.

4. **Start the Next.js development server:**
   ```bash
   npm run dev
   ```
   > 🌐 Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---


## 📄 License

This project is licensed under the **MIT License** — feel free to use and adapt it for personal and commercial projects.

---

<div align="center">
  <sub>Built with ❤️ for pure hydration and modern web craftsmanship.</sub>
</div>
