import { Wrench, Search, BarChart3, Bug, Gauge, PenTool, Image, Mail, Share2, Code, ExternalLink } from "lucide-react";
import PageHeader from "@/components/PageHeader";

const categories = [
  {
    title: "Analisis & Monitoring",
    icon: BarChart3,
    tools: [
      { name: "Google Search Console", desc: "Monitor performa pencarian, submit sitemap, perbaiki error indexing", url: "https://search.google.com/search-console", free: true },
      { name: "Google Analytics 4", desc: "Analisis traffic, perilaku pengunjung, dan konversi", url: "https://analytics.google.com", free: true },
      { name: "Bing Webmaster Tools", desc: "Monitor performa di Bing, submit sitemap", url: "https://www.bing.com/webmasters", free: true },
      { name: "Ahrefs", desc: "Analisis backlink, keyword research, audit SEO komprehensif", url: "https://ahrefs.com", free: false },
      { name: "SEMrush", desc: "All-in-one SEO toolkit: keyword, audit, competitor analysis", url: "https://semrush.com", free: false },
      { name: "Moz", desc: "Domain authority checker, keyword explorer, link analysis", url: "https://moz.com", free: false },
    ],
  },
  {
    title: "Keyword Research",
    icon: Search,
    tools: [
      { name: "Google Keyword Planner", desc: "Riset kata kunci gratis dari Google Ads", url: "https://ads.google.com/home/tools/keyword-planner/", free: true },
      { name: "Ubersuggest", desc: "Keyword ideas, volume, difficulty, dan content suggestions", url: "https://neilpatel.com/ubersuggest/", free: true },
      { name: "AnswerThePublic", desc: "Temukan pertanyaan yang ditanyakan orang tentang topik Anda", url: "https://answerthepublic.com", free: true },
      { name: "Google Trends", desc: "Tren pencarian dari waktu ke waktu, perbandingan keyword", url: "https://trends.google.com", free: true },
    ],
  },
  {
    title: "Technical Audit",
    icon: Bug,
    tools: [
      { name: "Screaming Frog", desc: "Crawl website untuk menemukan masalah teknis SEO", url: "https://www.screamingfrog.co.uk/seo-spider/", free: true },
      { name: "Google Rich Results Test", desc: "Test schema markup dan structured data", url: "https://search.google.com/test/rich-results", free: true },
      { name: "Schema Markup Validator", desc: "Validasi structured data JSON-LD", url: "https://validator.schema.org/", free: true },
      { name: "XML Sitemap Validator", desc: "Periksa validitas sitemap XML", url: "https://www.xml-sitemaps.com/validate-xml-sitemap.html", free: true },
    ],
  },
  {
    title: "Performa & Kecepatan",
    icon: Gauge,
    tools: [
      { name: "Google PageSpeed Insights", desc: "Analisis kecepatan halaman & Core Web Vitals", url: "https://pagespeed.web.dev/", free: true },
      { name: "GTmetrix", desc: "Analisis performa website dengan detail", url: "https://gtmetrix.com", free: true },
      { name: "WebPageTest", desc: "Test kecepatan dari berbagai lokasi & browser", url: "https://www.webpagetest.org", free: true },
      { name: "Lighthouse", desc: "Audit performa, SEO, accessibility (built-in Chrome DevTools)", url: "https://developer.chrome.com/docs/lighthouse/", free: true },
    ],
  },
  {
    title: "Konten & Penulisan",
    icon: PenTool,
    tools: [
      { name: "Grammarly", desc: "Periksa tata bahasa dan ejaan (Inggris)", url: "https://grammarly.com", free: true },
      { name: "Hemingway Editor", desc: "Periksa keterbacaan konten", url: "https://hemingwayapp.com", free: true },
      { name: "Canva", desc: "Desain grafis, infografis, dan visual content", url: "https://canva.com", free: true },
    ],
  },
  {
    title: "Gambar & Media",
    icon: Image,
    tools: [
      { name: "TinyPNG", desc: "Kompres gambar PNG & JPEG tanpa kehilangan kualitas", url: "https://tinypng.com", free: true },
      { name: "Squoosh", desc: "Kompres & convert gambar ke WebP (by Google)", url: "https://squoosh.app", free: true },
      { name: "Remove.bg", desc: "Hapus background gambar secara otomatis", url: "https://remove.bg", free: true },
    ],
  },
  {
    title: "Social Media & Email",
    icon: Share2,
    tools: [
      { name: "Buffer", desc: "Jadwalkan posting media sosial", url: "https://buffer.com", free: true },
      { name: "Mailchimp", desc: "Email marketing & newsletter", url: "https://mailchimp.com", free: true },
      { name: "Facebook Sharing Debugger", desc: "Debug Open Graph tags untuk Facebook", url: "https://developers.facebook.com/tools/debug/", free: true },
      { name: "Twitter Card Validator", desc: "Preview Twitter Card tags", url: "https://cards-dev.twitter.com/validator", free: true },
    ],
  },
];

const ToolsResources = () => {
  return (
    <div>
      <PageHeader
        icon={Wrench}
        title="Tools & Resources"
        description="Kumpulan tools SEO terbaik yang bisa Anda gunakan untuk mengoptimasi website. Dikelompokkan berdasarkan fungsi dengan penjelasan masing-masing."
      />
      {categories.map((cat) => (
        <section key={cat.title} className="mb-8">
          <div className="mb-3 flex items-center gap-2">
            <cat.icon className="h-5 w-5 text-primary" />
            <h2 className="text-lg font-bold text-foreground">{cat.title}</h2>
          </div>
          <div className="grid gap-2">
            {cat.tools.map((tool) => (
              <a
                key={tool.name}
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3 rounded-lg border border-border/50 bg-card p-4 transition-all hover:border-primary/30"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-semibold text-foreground group-hover:text-primary">{tool.name}</h3>
                    <span className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${tool.free ? "bg-success/10 text-success" : "bg-warning/10 text-warning"}`}>
                      {tool.free ? "Gratis" : "Berbayar"}
                    </span>
                  </div>
                  <p className="mt-0.5 text-xs text-muted-foreground">{tool.desc}</p>
                </div>
                <ExternalLink className="mt-1 h-3.5 w-3.5 shrink-0 text-muted-foreground/50 group-hover:text-primary" />
              </a>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default ToolsResources;
