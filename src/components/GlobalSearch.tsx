import { useState, useMemo } from "react";
import { Search, X, FileText } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

const searchData = [
  { 
    title: "Beranda", 
    url: "/", 
    category: "Mulai",
    keywords: "home beranda mulai panduan seo search engine optimization cara kerja mesin pencari manfaat visibility traffic organik kredibilitas brand awareness roi konversi crawling indexing ranking serving"
  },
  { 
    title: "Technical SEO", 
    url: "/technical-seo", 
    category: "Dasar SEO",
    keywords: "technical teknis robots sitemap crawling indexing struktur url canonical tag schema markup core web vitals lcp fid cls performance kecepatan loading mobile friendly responsive https ssl security header 404 error redirect 301 302 server status code xml sitemap robots.txt meta robots noindex nofollow structured data rich snippets breadcrumb pagination hreflang"
  },
  { 
    title: "On-Page SEO", 
    url: "/on-page-seo", 
    category: "Dasar SEO",
    keywords: "on page konten meta title description heading h1 h2 h3 keyword research kata kunci riset internal link anchor text image optimization alt text gambar url slug permalink content quality kualitas konten readability keterbacaan user experience ux engagement dwell time bounce rate ctr click through rate featured snippet paragraph pertama opening introduction semantic seo lsi keyword topical authority e-a-t expertise authoritativeness trustworthiness"
  },
  { 
    title: "Off-Page SEO", 
    url: "/off-page-seo", 
    category: "Dasar SEO",
    keywords: "off page backlink link building otoritas authority domain rating dr page authority pa referring domain dofollow nofollow guest post outreach broken link building skyscraper technique resource page link reclamation brand mention unlinked mention social signal share bookmark forum comment blog commenting influencer marketing content promotion digital pr press release citation local seo nap name address phone directory listing"
  },
  { 
    title: "Google Search Console", 
    url: "/google-search-console", 
    category: "Tools & Analytics",
    keywords: "gsc google search console monitoring performance laporan performa pencarian impression klik ctr position ranking query keyword url coverage index indexing error crawl stats crawling sitemap submit pengajuan manual action penalty hukuman security issue masalah keamanan mobile usability core web vitals enhancement rich result structured data testing tool inspection url inspect alat inspeksi removal penghapusan link disavow message pesan notification notifikasi"
  },
  { 
    title: "Google Analytics", 
    url: "/google-analytics", 
    category: "Tools & Analytics",
    keywords: "google analytics ga ga4 traffic analisis pengunjung visitor user session pageview bounce rate engagement time waktu rata-rata conversion konversi goal sasaran funnel corong event tracking pelacakan kejadian ecommerce tracking demographic demografi interest minat behavior perilaku acquisition akuisisi source medium campaign utm parameter real-time realtime audience segmentation segmentasi custom report laporan kustom dashboard metric metrik dimension dimensi"
  },
  { 
    title: "Mobile & PWA SEO", 
    url: "/mobile-seo", 
    category: "SEO Lanjutan",
    keywords: "mobile pwa progressive web app responsive design perangkat seluler smartphone tablet mobile first indexing amp accelerated mobile pages viewport meta tag touch target ukuran tombol font size ukuran font readability keterbacaan mobile speed kecepatan mobile page speed insight lighthouse score service worker offline cache manifest app shell install installable add to home screen push notification web app manifest json theme color splash screen"
  },
  { 
    title: "AI & Voice Search", 
    url: "/ai-voice-seo", 
    category: "SEO Lanjutan",
    keywords: "ai artificial intelligence voice search pencarian suara assistant asisten virtual siri alexa google assistant cortana conversational query pertanyaan percakapan natural language processing nlp question answer qa featured snippet position zero long tail keyword kata kunci panjang local search pencarian lokal near me schema markup faq page how to structured data semantic search pencarian semantik intent maksud pengguna context konteks chatgpt bard llm large language model generative ai sgeo search generative experience"
  },
  { 
    title: "International SEO", 
    url: "/international-seo", 
    category: "SEO Lanjutan",
    keywords: "international multi bahasa multilingual hreflang global worldwide negara country language bahasa geo targeting penargetan geografis ccTLD country code top level domain subdomain subdirectory subfolder localization lokalisasi translation terjemahan currency mata uang date format format tanggal regional content konten regional duplicate content konten duplikat alternate version versi alternatif x-default google search console international targeting"
  },
  { 
    title: "Keamanan & Trust", 
    url: "/security-trust", 
    category: "SEO Lanjutan",
    keywords: "security keamanan ssl https tls certificate sertifikat trust kepercayaan privacy policy kebijakan privasi terms of service syarat layanan about us tentang kami contact kontak author penulis credentials kredensial testimonial testimoni review ulasan rating social proof bukti sosial security header http header csp content security policy hsts strict transport security x-frame-options x-content-type-options referrer policy permissions policy mixed content malware phishing safe browsing"
  },
  { 
    title: "SEO Checklist", 
    url: "/seo-checklist", 
    category: "Referensi",
    keywords: "checklist daftar periksa audit seo technical audit on-page audit off-page audit content audit konten site audit website audit seo audit tool alat audit checklist lengkap comprehensive checklist setup seo implementation implementasi optimization optimasi best practice praktik terbaik guideline panduan step by step langkah demi langkah"
  },
  { 
    title: "Tools & Resources", 
    url: "/tools-resources", 
    category: "Referensi",
    keywords: "tools alat resources sumber daya seo tools keyword research tool riset kata kunci backlink checker pemeriksa backlink rank tracker pelacak peringkat site audit tool technical seo tool on-page seo tool analytics tool alat analitik free tools gratis premium berbayar ahrefs semrush moz screaming frog google keyword planner ubersuggest answerthepublic yoast rank math all in one seo plugin extension ekstensi chrome extension browser extension"
  },
];

interface GlobalSearchProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function GlobalSearch({ open, onOpenChange }: GlobalSearchProps) {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const results = useMemo(() => {
    if (!query.trim()) return searchData;
    const q = query.toLowerCase().trim();
    const terms = q.split(/\s+/);
    
    return searchData
      .map((item) => {
        const searchText = `${item.title} ${item.category} ${item.keywords}`.toLowerCase();
        let score = 0;
        
        if (item.title.toLowerCase().includes(q)) score += 100;
        if (item.category.toLowerCase().includes(q)) score += 50;
        
        terms.forEach(term => {
          if (term.length > 1 && searchText.includes(term)) {
            score += 10;
          }
        });
        
        return { ...item, score };
      })
      .filter(item => item.score > 0)
      .sort((a, b) => b.score - a.score);
  }, [query]);

  const handleSelect = (url: string) => {
    navigate(url);
    onOpenChange(false);
    setQuery("");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="p-0 max-w-[calc(100vw-2rem)] sm:max-w-[600px]">
        <div className="flex items-center border-b px-3">
          <Search className="h-4 w-4 shrink-0 text-muted-foreground" />
          <Input
            placeholder="Cari halaman atau topik SEO..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="border-0 text-sm focus-visible:ring-0 focus-visible:ring-offset-0"
            autoFocus
          />
          {query && (
            <button onClick={() => setQuery("")} className="shrink-0 p-1 hover:text-foreground">
              <X className="h-4 w-4 text-muted-foreground" />
            </button>
          )}
        </div>
        <div className="max-h-[60vh] sm:max-h-[400px] overflow-y-auto p-2">
          {results.length === 0 && query && (
            <p className="py-6 text-center text-sm text-muted-foreground">
              Tidak ada hasil untuk "{query}"
            </p>
          )}
          {results.map((item) => (
            <button
              key={item.url}
              onClick={() => handleSelect(item.url)}
              className="flex w-full items-start gap-2.5 sm:gap-3 rounded-md px-2.5 sm:px-3 py-2 sm:py-2.5 text-left hover:bg-accent"
            >
              <FileText className="mt-0.5 h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0 text-muted-foreground" />
              <div className="flex-1 min-w-0">
                <div className="font-medium text-xs sm:text-sm truncate">{item.title}</div>
                <div className="text-[10px] sm:text-xs text-muted-foreground">{item.category}</div>
              </div>
            </button>
          ))}
        </div>
        {!query && (
          <div className="border-t px-3 py-2 text-[10px] sm:text-xs text-muted-foreground">
            Ketik untuk mencari atau tekan ESC untuk menutup
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
