import { Settings, Gauge, Globe, FileCode, Server, Zap, Network, RefreshCw, Shield, Bug, Target, AlertTriangle } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import InfoCard from "@/components/InfoCard";

const TechnicalSEO = () => {
  return (
    <div>
      <PageHeader
        icon={Settings}
        title="Technical SEO"
        description="Technical SEO adalah fondasi dari seluruh strategi SEO. Ini mencakup semua aspek teknis website yang mempengaruhi kemampuan mesin pencari untuk menemukan, merayapi, mengindeks, dan menampilkan website Anda."
      />

      {/* Apa & Mengapa */}
      <section className="mb-8">
        <h2 className="mb-4 text-xl font-bold text-foreground">Apa itu Technical SEO?</h2>
        <div className="rounded-xl border border-border/50 bg-card p-5 text-sm leading-relaxed text-muted-foreground">
          <p className="mb-3">
            <strong className="text-foreground">Technical SEO</strong> adalah proses optimasi infrastruktur teknis website agar mesin pencari dapat dengan mudah merayapi (crawl), mengindeks (index), dan memahami konten website Anda. Tanpa fondasi teknis yang kuat, konten terbaik sekalipun tidak akan bisa mendapatkan peringkat yang baik.
          </p>
          <p className="mb-3">
            <strong className="text-foreground">Mengapa penting?</strong> Bayangkan website Anda seperti sebuah toko. Technical SEO adalah arsitektur, fondasi, dan jalan masuk toko tersebut. Jika pintunya rusak atau jalannya berlubang, pelanggan (dan Google) tidak akan bisa masuk, meskipun produk di dalamnya sangat bagus.
          </p>
          <p>
            <strong className="text-foreground">Tujuannya:</strong> Memastikan mesin pencari dapat mengakses, memahami, dan mengindeks seluruh halaman website Anda tanpa hambatan teknis.
          </p>
        </div>
      </section>

      {/* Komponen Utama */}
      <section className="mb-8">
        <h2 className="mb-4 text-xl font-bold text-foreground">Komponen Utama Technical SEO</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <InfoCard icon={Globe} title="1. Struktur URL" variant="primary">
            <p className="mb-2"><strong>Apa:</strong> Format alamat halaman web Anda.</p>
            <p className="mb-2"><strong>Mengapa:</strong> URL yang bersih dan deskriptif membantu pengguna dan mesin pencari memahami isi halaman.</p>
            <p className="mb-2"><strong>Cara:</strong></p>
            <ul className="list-inside list-disc space-y-1">
              <li>Gunakan URL pendek dan deskriptif</li>
              <li>Gunakan tanda hubung (-) sebagai pemisah kata</li>
              <li>Hindari parameter yang tidak perlu</li>
              <li>Sertakan kata kunci target di URL</li>
            </ul>
            <p className="mt-2 rounded bg-muted/50 px-3 py-2 font-mono text-xs">
              ✅ /panduan-seo-lengkap<br/>
              ❌ /page?id=123&cat=4
            </p>
          </InfoCard>

          <InfoCard icon={Shield} title="2. HTTPS/SSL" variant="success">
            <p className="mb-2"><strong>Apa:</strong> Protokol keamanan yang mengenkripsi data antara browser dan server.</p>
            <p className="mb-2"><strong>Mengapa:</strong> Google menjadikan HTTPS sebagai faktor ranking sejak 2014. Website tanpa SSL ditandai "Not Secure" oleh browser.</p>
            <p className="mb-2"><strong>Cara:</strong></p>
            <ul className="list-inside list-disc space-y-1">
              <li>Pasang sertifikat SSL (gratis dari Let's Encrypt / Cloudflare)</li>
              <li>Redirect semua HTTP ke HTTPS</li>
              <li>Pastikan semua resource (gambar, CSS, JS) juga HTTPS</li>
              <li>Update internal link ke HTTPS</li>
            </ul>
          </InfoCard>

          <InfoCard icon={Gauge} title="3. Kecepatan Website" variant="warning">
            <p className="mb-2"><strong>Apa:</strong> Waktu yang diperlukan halaman untuk dimuat sepenuhnya.</p>
            <p className="mb-2"><strong>Mengapa:</strong> Google menggunakan Core Web Vitals sebagai faktor ranking. 53% pengguna meninggalkan situs yang memuat &gt;3 detik.</p>
            <p className="mb-2"><strong>Cara Optimasi:</strong></p>
            <ul className="list-inside list-disc space-y-1">
              <li>Kompres & optimalkan gambar (WebP format)</li>
              <li>Minifikasi CSS, JavaScript, dan HTML</li>
              <li>Gunakan lazy loading untuk gambar</li>
              <li>Aktifkan browser caching</li>
              <li>Gunakan CDN (Content Delivery Network)</li>
              <li>Aktifkan Gzip/Brotli compression</li>
            </ul>
          </InfoCard>

          <InfoCard icon={Zap} title="4. Core Web Vitals" variant="info">
            <p className="mb-2"><strong>Apa:</strong> Metrik performa yang diukur Google untuk pengalaman pengguna.</p>
            <p className="mb-2"><strong>3 Metrik Utama:</strong></p>
            <ul className="list-inside list-disc space-y-1">
              <li><strong>LCP (Largest Contentful Paint)</strong> — Kecepatan loading konten utama. Target: &lt;2.5 detik</li>
              <li><strong>INP (Interaction to Next Paint)</strong> — Responsivitas interaksi. Target: &lt;200ms</li>
              <li><strong>CLS (Cumulative Layout Shift)</strong> — Stabilitas visual. Target: &lt;0.1</li>
            </ul>
            <p className="mt-2"><strong>Tujuan:</strong> Memberikan pengalaman pengguna yang cepat, responsif, dan stabil.</p>
          </InfoCard>

          <InfoCard icon={FileCode} title="5. Robots.txt" variant="primary">
            <p className="mb-2"><strong>Apa:</strong> File teks di root website yang memberi instruksi kepada crawler mesin pencari.</p>
            <p className="mb-2"><strong>Mengapa:</strong> Mengontrol halaman mana yang boleh dan tidak boleh dirayapi, menghemat crawl budget.</p>
            <p className="mb-2"><strong>Cara:</strong></p>
            <div className="rounded bg-muted/50 px-3 py-2 font-mono text-xs">
              User-agent: *<br/>
              Allow: /<br/>
              Disallow: /admin/<br/>
              Disallow: /private/<br/>
              Sitemap: https://example.com/sitemap.xml
            </div>
            <p className="mt-2"><strong>Penting:</strong> Jangan blokir CSS/JS yang dibutuhkan untuk rendering halaman.</p>
          </InfoCard>

          <InfoCard icon={Network} title="6. XML Sitemap" variant="success">
            <p className="mb-2"><strong>Apa:</strong> File XML yang berisi daftar semua URL penting di website Anda.</p>
            <p className="mb-2"><strong>Mengapa:</strong> Membantu mesin pencari menemukan dan mengindeks semua halaman penting, terutama halaman baru atau yang sulit dijangkau melalui link internal.</p>
            <p className="mb-2"><strong>Jenis Sitemap:</strong></p>
            <ul className="list-inside list-disc space-y-1">
              <li>Sitemap utama (halaman website)</li>
              <li>Sitemap gambar (image sitemap)</li>
              <li>Sitemap video (video sitemap)</li>
              <li>Sitemap berita (news sitemap)</li>
              <li>Sitemap index (penggabungan beberapa sitemap)</li>
            </ul>
          </InfoCard>

          <InfoCard icon={RefreshCw} title="7. Redirect & Canonical" variant="warning">
            <p className="mb-2"><strong>Redirect 301:</strong> Pengalihan permanen dari URL lama ke URL baru. Digunakan saat URL berubah agar tidak kehilangan "link juice".</p>
            <p className="mb-2"><strong>Canonical Tag:</strong> Tag HTML yang memberitahu mesin pencari versi URL mana yang "asli" ketika ada konten duplikat.</p>
            <div className="rounded bg-muted/50 px-3 py-2 font-mono text-xs">
              {'<link rel="canonical" href="https://example.com/halaman-utama" />'}
            </div>
            <p className="mt-2"><strong>Tujuan:</strong> Mencegah masalah duplicate content dan memastikan link equity terkonsentrasi.</p>
          </InfoCard>

          <InfoCard icon={Server} title="8. Hosting & Server" variant="info">
            <p className="mb-2"><strong>Apa:</strong> Infrastruktur tempat website Anda disimpan dan dijalankan.</p>
            <p className="mb-2"><strong>Yang Perlu Diperhatikan:</strong></p>
            <ul className="list-inside list-disc space-y-1">
              <li>Uptime server minimal 99.9%</li>
              <li>Lokasi server dekat dengan target audiens</li>
              <li>Response time server &lt;200ms</li>
              <li>Support HTTP/2 atau HTTP/3</li>
              <li>Gzip/Brotli compression aktif</li>
              <li>CDN untuk distribusi global</li>
            </ul>
          </InfoCard>
        </div>
      </section>

      {/* Crawlability */}
      <section className="mb-8">
        <h2 className="mb-4 text-xl font-bold text-foreground">Crawlability & Indexability</h2>
        <div className="grid gap-4">
          <InfoCard icon={Bug} title="Apa itu Crawlability?" variant="primary">
            <p className="mb-2">
              <strong>Crawlability</strong> adalah kemampuan mesin pencari untuk mengakses dan merayapi halaman-halaman di website Anda. Jika halaman tidak bisa di-crawl, halaman tersebut tidak akan muncul di hasil pencarian.
            </p>
            <p className="mb-2"><strong>Faktor yang mempengaruhi:</strong></p>
            <ul className="list-inside list-disc space-y-1">
              <li>Robots.txt — mengizinkan/memblokir crawler</li>
              <li>Internal linking — menghubungkan halaman satu sama lain</li>
              <li>Sitemap — memberikan peta website ke crawler</li>
              <li>Server response — website harus merespons dengan cepat</li>
              <li>Crawl budget — jumlah halaman yang di-crawl dalam satu kali kunjungan</li>
            </ul>
          </InfoCard>

          <InfoCard icon={Target} title="Apa itu Indexability?" variant="success">
            <p className="mb-2">
              <strong>Indexability</strong> adalah kemampuan halaman untuk disimpan dalam database (index) mesin pencari. Halaman yang di-crawl belum tentu di-index.
            </p>
            <p className="mb-2"><strong>Penyebab halaman tidak di-index:</strong></p>
            <ul className="list-inside list-disc space-y-1">
              <li>Meta tag noindex pada halaman</li>
              <li>Konten duplikat / thin content</li>
              <li>Canonical tag mengarah ke halaman lain</li>
              <li>Halaman diblokir oleh robots.txt</li>
              <li>Server error (5xx) saat di-crawl</li>
            </ul>
          </InfoCard>

          <InfoCard icon={AlertTriangle} title="Kesalahan Umum Technical SEO" variant="warning">
            <ul className="list-inside list-disc space-y-1">
              <li>Tidak membuat robots.txt atau memblokir halaman penting</li>
              <li>Tidak submit sitemap ke Google Search Console</li>
              <li>Broken links (404 errors) yang tidak diperbaiki</li>
              <li>Mixed content (HTTP & HTTPS campur)</li>
              <li>Redirect chain terlalu panjang (A → B → C → D)</li>
              <li>Website lambat tanpa optimasi gambar/cache</li>
              <li>Tidak mobile-friendly</li>
              <li>Duplikat konten tanpa canonical tag</li>
            </ul>
          </InfoCard>
        </div>
      </section>
    </div>
  );
};

export default TechnicalSEO;
