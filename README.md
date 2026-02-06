# 🚀 SDE Portfolio

> A modern, high-performance portfolio website built with Next.js 15, showcasing software engineering projects, skills, and professional experience.

[![Next.js](https://img.shields.io/badge/Next.js-15.5.7-black?style=flat&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![Supabase](https://img.shields.io/badge/Supabase-Enabled-3ECF8E?style=flat&logo=supabase)](https://supabase.com/)

## ✨ Features

- **🎯 Modern Hero Section**: Animated introduction with professional headshot and social links.
- **👤 About Section**: Professional bio with educational background and CV access.
- **💼 Skills Showcase**: Categorized technical skills (Languages, Backend, Infrastructure, Frontend).
- **📂 Featured Projects**: Portfolio of 6+ projects with descriptions and tech stacks.
- **🖼️ Gallery Integration**: Image gallery featuring workspace, architecture, and sessions.
- **📬 Contact Form**: Fully functional form integrated with Supabase for lead management.
- **🎨 Visual Excellence**: Smooth animations powered by Framer Motion and a sleek dark theme.
- **📱 Responsive Design**: Optimized for all devices using Tailwind CSS.

## 🛠️ Tech Stack

| Category | Technologies |
|----------|-------------|
| **Framework** | Next.js 15.5.7 (App Router) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS |
| **Animations** | Framer Motion |
| **Database** | Supabase |
| **Analytics** | PostHog |
| **Icons** | Lucide React |
| **Linting** | OxLint |

## 📋 Prerequisites

- **Node.js** 20.x or higher
- **npm** (recommended package manager)

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/ritam0102/SDE-Portfolio-main.git
   cd SDE-Portfolio-main
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env.local` file:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Run Development Server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to see the result.

## 📜 Available Scripts

- `npm run dev`: Starts development server with Turbopack.
- `npm run build`: Compiles the application for production.
- `npm run start`: Starts the production server.
- `npm run lint`: Runs OxLint for fast code analysis.
- `npm run type-check`: Verifies TypeScript types.
- `npm run check-all`: Runs linting and type checks simultaneously.

## 📁 Project Structure

```
SDE-Portfolio-main/
├── app/                # Main application routes and components
├── lib/                # Utility functions and Supabase client
├── public/             # Static assets (SVG icons, etc.)
├── supabase/           # Database configurations
├── tsconfig.json       # TypeScript configuration
└── tailwind.config.ts  # Tailwind CSS styling tokens
```

## 👨‍💻 Author

**Ritam Samanta**
- GitHub: [@ritam0102](https://github.com/ritam0102)
- LinkedIn: [in/ritams](https://www.linkedin.com/in/ritams)

---
Built with ❤️ using Next.js, TypeScript, and Tailwind CSS.
