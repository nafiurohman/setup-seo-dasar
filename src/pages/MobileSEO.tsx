import { Smartphone, Wifi, Download, Gauge, MonitorSmartphone, Zap, Settings, Eye, AlertTriangle } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import InfoCard from "@/components/InfoCard";

const MobileSEO = () => {
  return (
    <div>
      <PageHeader
        icon={Smartphone}
        title="Mobile & PWA SEO"
        description="Lebih dari 60% pencarian Google dilakukan melalui perangkat mobile. Mobile SEO dan Progressive Web App (PWA) adalah kunci untuk meraih peringkat terbaik di era mobile-first indexing."
      />

      <section className="mb-8">
        <h2 className="mb-4 text-xl font-bold text-foreground">Apa itu Mobile-First Indexing?</h2>
        <div className="rounded-xl border border-border/50 bg-card p-5 text-sm leading-relaxed text-muted-foreground">
          <p className="mb-3">
            <strong className="text-foreground">Mobile-First Indexing</strong> berarti Google menggunakan versi mobile website Anda sebagai versi utama untuk indexing dan ranking. Artinya, jika website Anda tidak optimal di mobile, peringkat Anda akan turun — bahkan untuk pencarian dari desktop.
          </p>
          <p className="mb-3">
            <strong className="text-foreground">Mengapa?</strong> Karena mayoritas pengguna internet mengakses web melalui smartphone. Google ingin memastikan hasil pencarian yang ditampilkan memberikan pengalaman terbaik untuk mayoritas penggunanya.
          </p>
          <p>
            <strong className="text-foreground">Implikasi:</strong> Website Anda HARUS responsive dan mobile-friendly. Konten, structured data, meta tags — semuanya harus sama atau lebih baik di versi mobile.
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-xl font-bold text-foreground">Komponen Mobile SEO</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <InfoCard icon={MonitorSmartphone} title="1. Responsive Design" variant="primary">
            <p className="mb-2"><strong>Apa:</strong> Desain website yang menyesuaikan tampilannya secara otomatis berdasarkan ukuran layar perangkat.</p>
            <p className="mb-2"><strong>Cara Implementasi:</strong></p>
            <ul className="list-inside list-disc space-y-1">
              <li>Gunakan viewport meta tag</li>
              <li>CSS media queries / framework seperti Tailwind CSS</li>
              <li>Flexible images & grids</li>
              <li>Font size yang readable (min 16px)</li>
              <li>Touch targets min 44x44px</li>
              <li>Hindari horizontal scrolling</li>
            </ul>
            <div className="mt-2 rounded bg-muted/50 px-3 py-2 font-mono text-xs">
              {'<meta name="viewport" content="width=device-width, initial-scale=1">'}
            </div>
          </InfoCard>

          <InfoCard icon={Gauge} title="2. Mobile Page Speed" variant="warning">
            <p className="mb-2"><strong>Target:</strong> Halaman harus dimuat &lt;3 detik di koneksi 3G.</p>
            <p className="mb-2"><strong>Optimasi:</strong></p>
            <ul className="list-inside list-disc space-y-1">
              <li>Kompres gambar (WebP, ukuran responsif)</li>
              <li>Lazy loading untuk gambar & video</li>
              <li>Minifikasi CSS/JS</li>
              <li>Eliminasi render-blocking resources</li>
              <li>Preload critical resources</li>
              <li>Gunakan CDN</li>
              <li>Browser caching</li>
            </ul>
          </InfoCard>

          <InfoCard icon={Eye} title="3. Mobile UX" variant="info">
            <p className="mb-2"><strong>Elemen Penting:</strong></p>
            <ul className="list-inside list-disc space-y-1">
              <li>Navigasi yang mudah (hamburger menu)</li>
              <li>Tombol CTA yang jelas dan mudah ditekan</li>
              <li>Form yang simple (minimal field)</li>
              <li>Konten yang scannable (bullet points, heading)</li>
              <li>Hindari popup yang mengganggu</li>
              <li>Pastikan teks mudah dibaca tanpa zoom</li>
            </ul>
            <p className="mt-2"><strong>Penting:</strong> Google memberikan penalty untuk "intrusive interstitials" (popup yang menutupi konten) di mobile.</p>
          </InfoCard>

          <InfoCard icon={Zap} title="4. AMP (Accelerated Mobile Pages)" variant="success">
            <p className="mb-2"><strong>Apa:</strong> Framework open-source Google untuk membuat halaman mobile yang super cepat.</p>
            <p className="mb-2"><strong>Kelebihan:</strong></p>
            <ul className="list-inside list-disc space-y-1">
              <li>Loading sangat cepat (cached di Google)</li>
              <li>Badge AMP di hasil pencarian</li>
              <li>Prioritas di Google News</li>
            </ul>
            <p className="mt-2"><strong>Kekurangan:</strong> Terbatas dalam desain & fungsionalitas, memerlukan maintenance ekstra. <strong>Catatan:</strong> Google sudah tidak memprioritaskan AMP sejak 2021, fokus ke Core Web Vitals lebih baik.</p>
          </InfoCard>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-xl font-bold text-foreground">Progressive Web App (PWA)</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <InfoCard icon={Download} title="Apa itu PWA?" variant="primary">
            <p className="mb-2">
              <strong>Progressive Web App</strong> adalah website yang berperilaku seperti aplikasi native. PWA bisa diinstall di home screen, bekerja offline, dan memberikan pengalaman app-like.
            </p>
            <p className="mb-2"><strong>Manfaat untuk SEO:</strong></p>
            <ul className="list-inside list-disc space-y-1">
              <li>Meningkatkan engagement & retention</li>
              <li>Kecepatan loading lebih baik (caching)</li>
              <li>Mengurangi bounce rate</li>
              <li>Push notifications untuk re-engagement</li>
              <li>Bisa diakses offline</li>
            </ul>
          </InfoCard>

          <InfoCard icon={Settings} title="Komponen PWA" variant="info">
            <p className="mb-2"><strong>Yang Dibutuhkan:</strong></p>
            <ul className="list-inside list-disc space-y-1">
              <li><strong>manifest.json</strong> — Info aplikasi (nama, icon, warna)</li>
              <li><strong>Service Worker</strong> — Script untuk caching & offline</li>
              <li><strong>HTTPS</strong> — Wajib untuk PWA</li>
              <li><strong>Responsive Design</strong> — Tampilan menyesuaikan layar</li>
              <li><strong>App Icons</strong> — Berbagai ukuran (192px, 512px)</li>
            </ul>
          </InfoCard>

          <InfoCard icon={Wifi} title="Offline Capability" variant="success">
            <p className="mb-2"><strong>Apa:</strong> Kemampuan website tetap bisa diakses tanpa koneksi internet.</p>
            <p className="mb-2"><strong>Strategi Caching:</strong></p>
            <ul className="list-inside list-disc space-y-1">
              <li><strong>Cache First</strong> — Ambil dari cache, fallback ke network</li>
              <li><strong>Network First</strong> — Ambil dari network, fallback ke cache</li>
              <li><strong>Stale While Revalidate</strong> — Tampilkan cache, update di background</li>
            </ul>
            <p className="mt-2"><strong>Tips:</strong> Cache halaman utama dan aset penting untuk pengalaman offline yang baik.</p>
          </InfoCard>

          <InfoCard icon={AlertTriangle} title="Pertimbangan PWA untuk SEO" variant="warning">
            <ul className="list-inside list-disc space-y-1">
              <li>Pastikan service worker tidak mengganggu crawling</li>
              <li>Konten tetap harus bisa di-render server-side</li>
              <li>Jangan cache halaman yang sering berubah terlalu lama</li>
              <li>Test PWA dengan Lighthouse</li>
              <li>Pastikan manifest.json valid</li>
            </ul>
          </InfoCard>
        </div>
      </section>
    </div>
  );
};

export default MobileSEO;
