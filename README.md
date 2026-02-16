# SEO Setup Guide

<div align="center">
  <img src="https://beznproject.web.id/images/logo.png" alt="Bezn Project Logo" width="120">
  <h3>Panduan Lengkap SEO untuk Optimasi Website</h3>
  <p>Pelajari Technical SEO, On-Page SEO, Off-Page SEO, Mobile SEO, International SEO, dan strategi SEO terkini</p>
  
  [![Portfolio](https://img.shields.io/badge/Portfolio-nafiurohman.pages.dev-blue?style=flat-square)](https://nafiurohman.pages.dev)
  [![Website](https://img.shields.io/badge/Website-beznproject.web.id-green?style=flat-square)](https://beznproject.web.id)
  [![License](https://img.shields.io/badge/License-MIT-yellow?style=flat-square)](LICENSE)
</div>

---

## 📖 Tentang Project

Website panduan komprehensif untuk memahami dan mengimplementasikan SEO (Search Engine Optimization) pada website Anda. Panduan ini dirancang untuk pemula hingga advanced, dengan penjelasan lengkap dalam Bahasa Indonesia.

### ✨ Fitur Utama

- 🎨 **Dark/Light Mode** - Toggle tema gelap dan terang
- 🔍 **Global Search** - Pencarian cepat dengan shortcut ⌘K/Ctrl+K
- 📱 **Responsive Design** - Optimal di semua perangkat
- ⚡ **Fast Performance** - Dibangun dengan Vite untuk loading super cepat
- 🎯 **Interactive UI** - Komponen interaktif dengan shadcn/ui
- ✅ **SEO Checklist** - Checklist interaktif untuk audit SEO

### 📚 Konten Panduan

**Dasar SEO:**
- **Technical SEO** - Pondasi teknis website (robots.txt, sitemap, crawling, indexing, Core Web Vitals)
- **On-Page SEO** - Optimasi konten & elemen halaman (meta tags, heading, keyword research, internal linking)
- **Off-Page SEO** - Strategi backlink & otoritas domain (link building, guest posting, brand mentions)

**Tools & Analytics:**
- **Google Search Console** - Monitoring performa pencarian, indexing, dan error handling
- **Google Analytics** - Analisis traffic, behavior, conversion, dan user demographics

**SEO Lanjutan:**
- **Mobile & PWA SEO** - Optimasi perangkat mobile dan Progressive Web Apps
- **AI & Voice Search** - Optimasi untuk AI engine, voice assistant, dan conversational search
- **International SEO** - Strategi multi-bahasa, hreflang, dan geo-targeting
- **Keamanan & Trust** - SSL/HTTPS, security headers, dan trust signals

**Referensi:**
- **SEO Checklist** - Checklist interaktif lengkap untuk setup SEO
- **Tools & Resources** - Kumpulan tools SEO terbaik (gratis & premium)

## 🛠️ Tech Stack

- **[Vite](https://vitejs.dev/)** - Build tool & dev server yang super cepat
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety untuk kode yang lebih robust
- **[React 18](https://react.dev/)** - UI framework modern
- **[React Router DOM](https://reactrouter.com/)** - Client-side routing
- **[shadcn/ui](https://ui.shadcn.com/)** - Beautiful & accessible UI components
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Lucide React](https://lucide.dev/)** - Beautiful & consistent icons

## 🚀 Quick Start

### Prerequisites

Pastikan Anda sudah menginstall:
- **Node.js** 18+ ([Download](https://nodejs.org/))
- **npm** atau **yarn**
- **Git** ([Download](https://git-scm.com/))

### Installation

```bash
# Clone repository
git clone <YOUR_GIT_URL>
cd seo-setup

# Install dependencies
npm install

# Start development server
npm run dev
```

Development server akan berjalan di `http://localhost:8080`

### Available Scripts

```bash
npm run dev          # Start development server (port 8080)
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm test             # Run tests
npm run test:watch   # Run tests in watch mode
```

## 📦 Deployment

### Deploy to Vercel (Recommended)

1. Push code ke GitHub repository
2. Import project di [Vercel](https://vercel.com/new)
3. Vercel akan otomatis detect Vite project
4. Klik Deploy!

File `vercel.json` sudah dikonfigurasi untuk SPA routing, sehingga semua routes akan berfungsi dengan baik.

### Build for Production

```bash
npm run build
```

Output production akan ada di folder `dist/` dan siap di-deploy ke hosting manapun.

### Deploy to Other Platforms

- **Netlify**: Drag & drop folder `dist/` atau connect GitHub repo
- **GitHub Pages**: Gunakan GitHub Actions untuk auto-deploy
- **Cloudflare Pages**: Connect repository dan deploy otomatis

## 📁 Project Structure

```
seo-setup/
├── public/
│   ├── favicon.svg          # Favicon (Lucide Search icon)
│   └── robots.txt           # Robots configuration
├── src/
│   ├── components/
│   │   ├── ui/              # shadcn/ui components
│   │   │   ├── button.tsx
│   │   │   ├── dialog.tsx
│   │   │   ├── input.tsx
│   │   │   └── ...
│   │   ├── AppSidebar.tsx   # Sidebar navigation
│   │   ├── Footer.tsx       # Footer component
│   │   ├── GlobalSearch.tsx # Global search dialog
│   │   ├── InfoCard.tsx     # Reusable info card
│   │   ├── Layout.tsx       # Main layout wrapper
│   │   ├── PageHeader.tsx   # Page header component
│   │   └── ThemeProvider.tsx # Theme context provider
│   ├── pages/               # Page components
│   │   ├── Index.tsx        # Homepage
│   │   ├── TechnicalSEO.tsx
│   │   ├── OnPageSEO.tsx
│   │   ├── OffPageSEO.tsx
│   │   ├── GoogleSearchConsole.tsx
│   │   ├── GoogleAnalytics.tsx
│   │   ├── MobileSEO.tsx
│   │   ├── AIVoiceSEO.tsx
│   │   ├── InternationalSEO.tsx
│   │   ├── SecurityTrust.tsx
│   │   ├── SEOChecklist.tsx
│   │   ├── ToolsResources.tsx
│   │   └── NotFound.tsx
│   ├── hooks/               # Custom React hooks
│   ├── lib/                 # Utility functions
│   ├── App.tsx              # Main app component
│   ├── main.tsx             # Entry point
│   └── index.css            # Global styles
├── vercel.json              # Vercel configuration
├── vite.config.ts           # Vite configuration
├── tailwind.config.ts       # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies & scripts
```

## 🎯 Features Detail

### Global Search
- Tekan `⌘K` (Mac) atau `Ctrl+K` (Windows/Linux) untuk membuka
- Pencarian real-time dengan scoring algorithm
- Mencari di title, category, dan keywords
- Keyboard navigation support

### Theme Toggle
- Light mode (default)
- Dark mode
- Preference tersimpan di localStorage
- Smooth transition antar tema

### Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Collapsible sidebar di mobile
- Touch-friendly UI elements

## 🤝 Contributing

Kontribusi sangat diterima! Jika Anda ingin berkontribusi:

1. Fork repository ini
2. Buat branch baru (`git checkout -b feature/AmazingFeature`)
3. Commit perubahan (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

## 📝 License

Project ini menggunakan lisensi MIT. Lihat file `LICENSE` untuk detail lengkap.

## 👨‍💻 Author

**M. Nafiurohman**
- 📧 Email: [nafiurohman25@gmail.com](mailto:nafiurohman25@gmail.com)
- 🌐 Portfolio: [nafiurohman.pages.dev](https://nafiurohman.pages.dev)
- 📱 WhatsApp: [081358198565](https://wa.me/6281358198565)

**By Bezn Project**
- 📧 Email: [support@beznproject.web.id](mailto:support@beznproject.web.id)
- 🌐 Website: [beznproject.web.id](https://beznproject.web.id)
- 📱 WhatsApp: [085189643588](https://wa.me/62085189643588)

---

<div align="center">
  <p>Made with ❤️ by <a href="https://nafiurohman.pages.dev">M. Nafiurohman</a></p>
  <p>© 2024 <a href="https://beznproject.web.id">Bezn Project</a>. All rights reserved.</p>
</div>
