import { CheckSquare } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import ChecklistItem from "@/components/ChecklistItem";

const sections = [
  {
    title: "Technical SEO",
    items: [
      { label: "HTTPS/SSL aktif", desc: "Pastikan website menggunakan HTTPS" },
      { label: "Robots.txt dibuat & dioptimasi", desc: "Izinkan crawler mengakses halaman penting" },
      { label: "XML Sitemap dibuat & disubmit", desc: "Submit ke Google Search Console & Bing" },
      { label: "Kecepatan website < 3 detik", desc: "Optimasi gambar, cache, CDN" },
      { label: "Mobile responsive", desc: "Website tampil baik di semua perangkat" },
      { label: "Core Web Vitals optimal", desc: "LCP < 2.5s, INP < 200ms, CLS < 0.1" },
      { label: "Canonical tags terimplementasi", desc: "Hindari duplicate content" },
      { label: "Redirect 301 untuk URL lama", desc: "Jangan biarkan broken links" },
      { label: "Tidak ada broken links (404)", desc: "Periksa secara berkala" },
      { label: "Gzip/Brotli compression aktif", desc: "Kompres file untuk loading lebih cepat" },
    ],
  },
  {
    title: "On-Page SEO",
    items: [
      { label: "Title tag unik setiap halaman (50-60 karakter)", desc: "Sertakan kata kunci utama" },
      { label: "Meta description setiap halaman (150-160 karakter)", desc: "Buat compelling & informatif" },
      { label: "H1 tag pada setiap halaman", desc: "Hanya 1 H1 per halaman" },
      { label: "Hierarki heading yang benar (H1→H2→H3)", desc: "Jangan melompati level" },
      { label: "Alt text pada semua gambar", desc: "Deskriptif dan mengandung keyword" },
      { label: "Internal linking antar halaman", desc: "Hubungkan konten yang relevan" },
      { label: "Open Graph tags", desc: "Untuk preview di Facebook/social media" },
      { label: "Twitter Card tags", desc: "Untuk preview di Twitter/X" },
      { label: "Schema markup (JSON-LD)", desc: "Organization, Website, Breadcrumb, FAQ" },
      { label: "Konten berkualitas & relevan", desc: "Min 1000 kata untuk halaman utama" },
    ],
  },
  {
    title: "Off-Page SEO",
    items: [
      { label: "10+ backlink berkualitas", desc: "Dari website dengan DA tinggi" },
      { label: "Profil media sosial dibuat", desc: "LinkedIn, Twitter, Instagram, dll" },
      { label: "Google Business Profile", desc: "Untuk local SEO" },
      { label: "Submit ke direktori bisnis", desc: "Direktori relevan dengan niche" },
      { label: "Guest posting di blog relevan", desc: "Bangun backlink & authority" },
      { label: "Brand mentions di platform lain", desc: "Tingkatkan awareness" },
    ],
  },
  {
    title: "Tools & Analytics",
    items: [
      { label: "Google Search Console terverifikasi", desc: "Submit sitemap & monitor performa" },
      { label: "Google Analytics 4 terpasang", desc: "Track pengunjung & perilaku" },
      { label: "Bing Webmaster Tools terverifikasi", desc: "Optimasi untuk Bing" },
      { label: "Conversion goals di-setup", desc: "Track konversi & goal" },
      { label: "Event tracking dikonfigurasi", desc: "Track interaksi pengguna" },
    ],
  },
  {
    title: "AI & Voice Search",
    items: [
      { label: "AI crawler diizinkan di robots.txt", desc: "GPTBot, anthropic-ai, dll" },
      { label: "Konten format FAQ", desc: "Pertanyaan & jawaban langsung" },
      { label: "Konten bahasa natural/percakapan", desc: "Untuk voice search" },
      { label: "Featured snippet optimization", desc: "Jawaban ringkas di awal" },
      { label: "Long-tail keywords", desc: "Frasa pencarian yang lebih panjang" },
    ],
  },
  {
    title: "Keamanan & Trust",
    items: [
      { label: "SSL/HTTPS aktif", desc: "Enkripsi data" },
      { label: "Security headers dikonfigurasi", desc: "X-Content-Type, X-Frame-Options, dll" },
      { label: "Privacy policy page", desc: "Kebijakan privasi yang jelas" },
      { label: "Halaman About yang lengkap", desc: "Info perusahaan/tim" },
      { label: "Cookie consent banner", desc: "Compliance GDPR/UU PDP" },
    ],
  },
  {
    title: "Maintenance Rutin",
    items: [
      { label: "Cek Google Search Console mingguan", desc: "Monitor errors & performa" },
      { label: "Review analytics bulanan", desc: "Analisis traffic & tren" },
      { label: "Audit broken links bulanan", desc: "Perbaiki link yang rusak" },
      { label: "Update konten secara berkala", desc: "Konten fresh & relevan" },
      { label: "Audit SEO komprehensif per kuartal", desc: "Review strategi keseluruhan" },
    ],
  },
];

const SEOChecklist = () => {
  return (
    <div>
      <PageHeader
        icon={CheckSquare}
        title="SEO Checklist"
        description="Checklist interaktif untuk memastikan semua aspek SEO sudah terimplementasi. Klik item untuk menandai sebagai selesai."
      />
      {sections.map((section) => (
        <section key={section.title} className="mb-8">
          <h2 className="mb-3 text-lg font-bold text-foreground">{section.title}</h2>
          <div className="space-y-2">
            {section.items.map((item) => (
              <ChecklistItem key={item.label} label={item.label} description={item.desc} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default SEOChecklist;
