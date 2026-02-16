import {
  Search, Settings, FileText, Link, BarChart3, CheckSquare,
  Wrench, Globe, Bot, Smartphone, Shield, ArrowRight, Target,
  TrendingUp, Zap, BookOpen
} from "lucide-react";
import { Link as RouterLink } from "react-router-dom";
import InfoCard from "@/components/InfoCard";

const sections = [
  {
    title: "Dasar SEO",
    items: [
      { title: "Technical SEO", desc: "Pondasi teknis website agar mudah ditemukan mesin pencari", icon: Settings, url: "/technical-seo", color: "primary" as const },
      { title: "On-Page SEO", desc: "Optimasi konten & elemen halaman untuk peringkat terbaik", icon: FileText, url: "/on-page-seo", color: "info" as const },
      { title: "Off-Page SEO", desc: "Strategi backlink & otoritas di luar website", icon: Link, url: "/off-page-seo", color: "success" as const },
    ],
  },
  {
    title: "Tools & Analytics",
    items: [
      { title: "Google Search Console", desc: "Pantau performa pencarian & perbaiki masalah indexing", icon: Search, url: "/google-search-console", color: "warning" as const },
      { title: "Google Analytics", desc: "Analisis traffic & perilaku pengunjung website", icon: BarChart3, url: "/google-analytics", color: "info" as const },
    ],
  },
  {
    title: "SEO Lanjutan",
    items: [
      { title: "Mobile & PWA SEO", desc: "Optimasi untuk perangkat mobile & Progressive Web App", icon: Smartphone, url: "/mobile-seo", color: "primary" as const },
      { title: "AI & Voice Search", desc: "Optimasi untuk AI engine & pencarian suara", icon: Bot, url: "/ai-voice-seo", color: "success" as const },
      { title: "International SEO", desc: "Strategi multi-bahasa & penargetan regional", icon: Globe, url: "/international-seo", color: "info" as const },
      { title: "Keamanan & Trust", desc: "SSL, security headers & sinyal kepercayaan", icon: Shield, url: "/security-trust", color: "warning" as const },
    ],
  },
  {
    title: "Referensi",
    items: [
      { title: "SEO Checklist", desc: "Checklist interaktif lengkap untuk setup SEO", icon: CheckSquare, url: "/seo-checklist", color: "success" as const },
      { title: "Tools & Resources", desc: "Kumpulan tools & sumber daya SEO terbaik", icon: Wrench, url: "/tools-resources", color: "primary" as const },
    ],
  },
];

const Index = () => {
  return (
    <div>
      {/* Hero */}
      <div className="mb-12">
        <div className="mb-4 flex items-center gap-2">
          <BookOpen className="h-5 w-5 text-primary" />
          <span className="text-sm font-medium text-primary">Panduan Lengkap</span>
        </div>
        <h1 className="mb-3 text-3xl font-extrabold leading-tight text-foreground sm:text-4xl">
          Panduan Setup <span className="gradient-text">SEO</span> Lengkap
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Pelajari cara mengoptimasi website Anda untuk mesin pencari dari dasar hingga mahir.
          Panduan ini mencakup semua aspek SEO dengan penjelasan lengkap dalam Bahasa Indonesia.
        </p>
      </div>

      {/* What is SEO */}
      <div className="mb-10 grid gap-4 sm:grid-cols-2">
        <InfoCard icon={Target} title="Apa itu SEO?" variant="primary">
          <p>
            <strong>Search Engine Optimization (SEO)</strong> adalah serangkaian teknik dan strategi untuk
            meningkatkan visibilitas website di hasil pencarian organik (tidak berbayar) mesin pencari
            seperti Google, Bing, dan lainnya.
          </p>
          <p className="mt-2">
            <strong>Tujuannya:</strong> Mendatangkan traffic berkualitas dari mesin pencari secara gratis
            dan berkelanjutan, sehingga website Anda lebih mudah ditemukan oleh orang yang mencari
            informasi, produk, atau layanan yang Anda tawarkan.
          </p>
        </InfoCard>
        <InfoCard icon={TrendingUp} title="Mengapa SEO Penting?" variant="success">
          <ul className="list-inside list-disc space-y-1">
            <li>93% pengalaman online dimulai dari mesin pencari</li>
            <li>75% pengguna tidak pernah scroll melewati halaman pertama</li>
            <li>Traffic organik memiliki tingkat konversi 14.6% (vs 1.7% outbound)</li>
            <li>SEO memberikan ROI jangka panjang yang lebih baik dari iklan berbayar</li>
            <li>Meningkatkan kredibilitas & kepercayaan brand</li>
          </ul>
        </InfoCard>
        <InfoCard icon={Zap} title="Cara Kerja Mesin Pencari" variant="info">
          <ol className="list-inside list-decimal space-y-1">
            <li><strong>Crawling</strong> — Bot mesin pencari menjelajahi web dan menemukan halaman baru</li>
            <li><strong>Indexing</strong> — Halaman yang ditemukan disimpan dan diorganisir dalam database</li>
            <li><strong>Ranking</strong> — Algoritma mengurutkan halaman berdasarkan relevansi & kualitas</li>
            <li><strong>Serving</strong> — Hasil terbaik ditampilkan kepada pengguna</li>
          </ol>
        </InfoCard>
        <InfoCard icon={BookOpen} title="Manfaat SEO" variant="warning">
          <ul className="list-inside list-disc space-y-1">
            <li>Meningkatkan visibility & brand awareness</li>
            <li>Mendatangkan traffic organik berkualitas</li>
            <li>Hemat biaya dibanding iklan berbayar</li>
            <li>Membangun kredibilitas & otoritas</li>
            <li>Memberikan insight tentang perilaku pengguna</li>
            <li>Keunggulan kompetitif jangka panjang</li>
          </ul>
        </InfoCard>
      </div>

      {/* Navigation Sections */}
      {sections.map((section) => (
        <div key={section.title} className="mb-8">
          <h2 className="mb-4 text-lg font-bold text-foreground">{section.title}</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {section.items.map((item) => (
              <RouterLink
                key={item.url}
                to={item.url}
                className="group flex items-start gap-3 rounded-xl border border-border/50 bg-card p-4 transition-all hover:border-primary/30 hover:shadow-lg"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <item.icon className="h-4 w-4 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-foreground group-hover:text-primary">
                    {item.title}
                  </h3>
                  <p className="mt-0.5 text-xs text-muted-foreground">{item.desc}</p>
                </div>
                <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-muted-foreground/50 transition-transform group-hover:translate-x-1 group-hover:text-primary" />
              </RouterLink>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Index;
