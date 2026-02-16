import { Search, Monitor, Bug, TrendingUp, FileSearch, Globe, Smartphone, BarChart, Settings, CheckCircle, AlertTriangle, Lightbulb } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import InfoCard from "@/components/InfoCard";

const GoogleSearchConsole = () => {
  return (
    <div>
      <PageHeader
        icon={Search}
        title="Google Search Console"
        description="Google Search Console (GSC) adalah tool gratis dari Google yang membantu Anda memantau, memelihara, dan memecahkan masalah kehadiran website Anda di hasil pencarian Google. Ini adalah tool WAJIB untuk setiap pemilik website."
      />

      <section className="mb-8">
        <h2 className="mb-4 text-xl font-bold text-foreground">Apa itu Google Search Console?</h2>
        <div className="rounded-xl border border-border/50 bg-card p-5 text-sm leading-relaxed text-muted-foreground">
          <p className="mb-3">
            <strong className="text-foreground">Google Search Console (GSC)</strong> adalah layanan gratis dari Google yang memungkinkan Anda memahami bagaimana Google melihat website Anda. GSC memberikan data tentang performa pencarian, masalah teknis, dan peluang optimasi.
          </p>
          <p className="mb-3">
            <strong className="text-foreground">Mengapa Penting?</strong> GSC adalah satu-satunya sumber data resmi dari Google tentang bagaimana website Anda tampil di hasil pencarian. Tanpa GSC, Anda seperti mengemudi mobil tanpa dashboard — tidak tahu kecepatan, bahan bakar, atau arah.
          </p>
          <p>
            <strong className="text-foreground">Tujuan Utama:</strong> Membantu Anda memahami performa pencarian, mengidentifikasi masalah, dan mengoptimasi website untuk hasil yang lebih baik.
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-xl font-bold text-foreground">Cara Setup Google Search Console</h2>
        <div className="grid gap-4">
          <InfoCard icon={Settings} title="Langkah 1: Buat Akun & Verifikasi" variant="primary">
            <ol className="list-inside list-decimal space-y-2">
              <li><strong>Buka</strong> <code className="rounded bg-muted px-1.5 py-0.5 text-xs">search.google.com/search-console</code></li>
              <li><strong>Login</strong> dengan akun Google Anda</li>
              <li><strong>Tambah Properti</strong> — Pilih tipe:
                <ul className="ml-4 mt-1 list-inside list-disc space-y-1">
                  <li><strong>Domain</strong> (rekomendasi) — Mencakup semua subdomain & protokol</li>
                  <li><strong>URL Prefix</strong> — Hanya URL tertentu (http/https, www/non-www)</li>
                </ul>
              </li>
              <li><strong>Verifikasi kepemilikan</strong> melalui salah satu metode:
                <ul className="ml-4 mt-1 list-inside list-disc space-y-1">
                  <li>DNS record (TXT) — Paling direkomendasikan</li>
                  <li>File HTML upload ke root website</li>
                  <li>Meta tag HTML di halaman beranda</li>
                  <li>Google Analytics (jika sudah terpasang)</li>
                  <li>Google Tag Manager</li>
                </ul>
              </li>
            </ol>
          </InfoCard>

          <InfoCard icon={FileSearch} title="Langkah 2: Submit Sitemap" variant="success">
            <ol className="list-inside list-decimal space-y-2">
              <li><strong>Buka GSC</strong> → menu <strong>"Sitemaps"</strong></li>
              <li><strong>Masukkan URL sitemap</strong> Anda, contoh: <code className="rounded bg-muted px-1.5 py-0.5 text-xs">sitemap.xml</code></li>
              <li><strong>Klik Submit</strong></li>
              <li><strong>Tunggu</strong> Google memproses (bisa beberapa jam - hari)</li>
              <li><strong>Periksa status</strong> — Pastikan "Success" dan tidak ada error</li>
            </ol>
            <p className="mt-2"><strong>Tips:</strong> Jika punya beberapa sitemap (image, video, blog), submit semuanya. Gunakan sitemap index untuk menggabungkan.</p>
          </InfoCard>

          <InfoCard icon={Monitor} title="Langkah 3: Mulai Monitoring" variant="info">
            <p className="mb-2">Setelah verifikasi, data akan mulai tersedia dalam 2-3 hari. Berikut yang harus Anda pantau:</p>
            <ul className="list-inside list-disc space-y-1">
              <li>Search Performance — Data performa pencarian</li>
              <li>Index Coverage — Status indexing halaman</li>
              <li>Experience — Core Web Vitals & mobile usability</li>
              <li>Enhancements — Structured data & schema</li>
              <li>Security & Manual Actions — Masalah keamanan</li>
            </ul>
          </InfoCard>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-xl font-bold text-foreground">Fitur-Fitur Utama GSC</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <InfoCard icon={TrendingUp} title="1. Performance Report" variant="primary">
            <p className="mb-2"><strong>Apa:</strong> Laporan performa website di hasil pencarian Google.</p>
            <p className="mb-2"><strong>Metrik yang Ditampilkan:</strong></p>
            <ul className="list-inside list-disc space-y-1">
              <li><strong>Total Clicks</strong> — Jumlah klik dari hasil pencarian</li>
              <li><strong>Total Impressions</strong> — Jumlah tampil di hasil pencarian</li>
              <li><strong>Average CTR</strong> — Rata-rata rasio klik</li>
              <li><strong>Average Position</strong> — Rata-rata posisi ranking</li>
            </ul>
            <p className="mt-2"><strong>Manfaat:</strong> Mengetahui kata kunci apa yang mendatangkan traffic, halaman mana yang paling populer, dan tren performa dari waktu ke waktu.</p>
          </InfoCard>

          <InfoCard icon={Globe} title="2. URL Inspection" variant="success">
            <p className="mb-2"><strong>Apa:</strong> Tool untuk memeriksa status URL spesifik di index Google.</p>
            <p className="mb-2"><strong>Informasi yang Diberikan:</strong></p>
            <ul className="list-inside list-disc space-y-1">
              <li>Apakah URL sudah di-index</li>
              <li>Kapan terakhir di-crawl</li>
              <li>Canonical URL yang terdeteksi</li>
              <li>Mobile usability status</li>
              <li>Structured data yang ditemukan</li>
            </ul>
            <p className="mt-2"><strong>Tujuan:</strong> Memastikan halaman penting sudah terindeks dan tidak ada masalah crawling.</p>
          </InfoCard>

          <InfoCard icon={Bug} title="3. Coverage / Indexing Report" variant="warning">
            <p className="mb-2"><strong>Apa:</strong> Laporan yang menunjukkan halaman mana yang berhasil dan gagal di-index.</p>
            <p className="mb-2"><strong>Status Halaman:</strong></p>
            <ul className="list-inside list-disc space-y-1">
              <li><strong>Valid</strong> — Berhasil di-index ✅</li>
              <li><strong>Valid with warnings</strong> — Di-index tapi ada catatan ⚠️</li>
              <li><strong>Error</strong> — Gagal di-index ❌</li>
              <li><strong>Excluded</strong> — Sengaja tidak di-index</li>
            </ul>
            <p className="mt-2"><strong>Tindakan:</strong> Periksa semua error dan perbaiki masalah yang ditemukan.</p>
          </InfoCard>

          <InfoCard icon={Smartphone} title="4. Mobile Usability" variant="info">
            <p className="mb-2"><strong>Apa:</strong> Laporan tentang masalah tampilan di perangkat mobile.</p>
            <p className="mb-2"><strong>Masalah Umum:</strong></p>
            <ul className="list-inside list-disc space-y-1">
              <li>Teks terlalu kecil</li>
              <li>Clickable elements terlalu dekat</li>
              <li>Konten lebih lebar dari layar</li>
              <li>Viewport tidak di-set</li>
            </ul>
            <p className="mt-2"><strong>Mengapa Penting:</strong> Google menggunakan mobile-first indexing — versi mobile website Anda yang di-evaluate untuk ranking.</p>
          </InfoCard>

          <InfoCard icon={BarChart} title="5. Core Web Vitals" variant="primary">
            <p className="mb-2"><strong>Apa:</strong> Laporan metrik pengalaman pengguna (LCP, INP, CLS).</p>
            <p className="mb-2"><strong>Mengapa Ada di GSC:</strong> Core Web Vitals adalah faktor ranking. GSC memberikan data real-world dari pengguna Chrome (CrUX data).</p>
            <p className="mb-2"><strong>Status:</strong></p>
            <ul className="list-inside list-disc space-y-1">
              <li><strong>Good</strong> — Memenuhi standar ✅</li>
              <li><strong>Needs Improvement</strong> — Perlu optimasi ⚠️</li>
              <li><strong>Poor</strong> — Perlu perbaikan segera ❌</li>
            </ul>
          </InfoCard>

          <InfoCard icon={CheckCircle} title="6. Enhancements" variant="success">
            <p className="mb-2"><strong>Apa:</strong> Laporan tentang structured data dan fitur khusus yang terdeteksi.</p>
            <p className="mb-2"><strong>Yang Dipantau:</strong></p>
            <ul className="list-inside list-disc space-y-1">
              <li>Breadcrumbs — Navigasi breadcrumb</li>
              <li>FAQ — Pertanyaan & jawaban</li>
              <li>Sitelinks searchbox — Kotak pencarian</li>
              <li>Product — Data produk</li>
              <li>Review — Data ulasan</li>
            </ul>
            <p className="mt-2"><strong>Manfaat:</strong> Memastikan schema markup Anda terdeteksi dengan benar oleh Google.</p>
          </InfoCard>
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-xl font-bold text-foreground">Tips Penggunaan GSC</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <InfoCard icon={Lightbulb} title="Best Practices" variant="primary">
            <ul className="list-inside list-disc space-y-1">
              <li>Cek GSC minimal seminggu sekali</li>
              <li>Pantau halaman dengan CTR rendah — optimasi title & description</li>
              <li>Perhatikan keyword di posisi 5-20 — potensial naik ke page 1</li>
              <li>Perbaiki semua coverage errors sesegera mungkin</li>
              <li>Request indexing untuk halaman baru/diupdate</li>
              <li>Bandingkan data antar periode untuk melihat tren</li>
            </ul>
          </InfoCard>
          <InfoCard icon={AlertTriangle} title="Hal yang Perlu Diperhatikan" variant="warning">
            <ul className="list-inside list-disc space-y-1">
              <li>Data GSC memiliki delay 2-3 hari</li>
              <li>Data hanya tersedia untuk 16 bulan terakhir</li>
              <li>Impressions dihitung berbeda dari analytics tools lain</li>
              <li>Request indexing memiliki kuota harian</li>
              <li>Tidak semua halaman akan di-index meskipun sudah di-submit</li>
              <li>Manual actions harus diperbaiki ASAP — ini penalty dari Google</li>
            </ul>
          </InfoCard>
        </div>
      </section>
    </div>
  );
};

export default GoogleSearchConsole;
