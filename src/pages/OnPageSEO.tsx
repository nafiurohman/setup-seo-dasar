import { FileText, Tag, Heading, Image, Link, FileSearch, Code, Type, AlignLeft, ListChecks, AlertTriangle } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import InfoCard from "@/components/InfoCard";

const OnPageSEO = () => {
  return (
    <div>
      <PageHeader
        icon={FileText}
        title="On-Page SEO"
        description="On-Page SEO adalah optimasi yang dilakukan langsung pada halaman website Anda, meliputi konten, meta tag, heading, gambar, dan struktur HTML untuk meningkatkan relevansi dan peringkat di mesin pencari."
      />

      <section className="mb-8">
        <h2 className="mb-4 text-xl font-bold text-foreground">Apa itu On-Page SEO?</h2>
        <div className="rounded-xl border border-border/50 bg-card p-5 text-sm leading-relaxed text-muted-foreground">
          <p className="mb-3">
            <strong className="text-foreground">On-Page SEO</strong> adalah semua teknik optimasi yang dilakukan pada elemen-elemen di dalam halaman website itu sendiri. Berbeda dengan Technical SEO (infrastruktur) dan Off-Page SEO (faktor eksternal), On-Page SEO fokus pada konten dan struktur HTML.
          </p>
          <p className="mb-3">
            <strong className="text-foreground">Tujuannya:</strong> Membuat halaman Anda relevan dan berkualitas tinggi untuk kata kunci target, sehingga mesin pencari memahami topik halaman dan menampilkannya untuk pencarian yang tepat.
          </p>
          <p>
            <strong className="text-foreground">Analoginya:</strong> Jika Technical SEO adalah fondasi rumah, maka On-Page SEO adalah interior dan dekorasi — yang membuat pengunjung betah dan menemukan apa yang mereka cari.
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-xl font-bold text-foreground">Elemen-Elemen On-Page SEO</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <InfoCard icon={Tag} title="1. Title Tag" variant="primary">
            <p className="mb-2"><strong>Apa:</strong> Judul halaman yang muncul di tab browser dan hasil pencarian Google.</p>
            <p className="mb-2"><strong>Mengapa Penting:</strong> Title tag adalah faktor ranking terpenting dalam On-Page SEO. Ini adalah hal pertama yang dilihat pengguna di hasil pencarian.</p>
            <p className="mb-2"><strong>Cara Optimasi:</strong></p>
            <ul className="list-inside list-disc space-y-1">
              <li>Panjang 50-60 karakter (agar tidak terpotong)</li>
              <li>Letakkan kata kunci utama di awal</li>
              <li>Buat unik untuk setiap halaman</li>
              <li>Buat menarik agar diklik (CTR tinggi)</li>
            </ul>
            <div className="mt-2 rounded bg-muted/50 px-3 py-2 font-mono text-xs">
              {'<title>Panduan SEO Lengkap 2025 | Nama Website</title>'}
            </div>
          </InfoCard>

          <InfoCard icon={AlignLeft} title="2. Meta Description" variant="info">
            <p className="mb-2"><strong>Apa:</strong> Deskripsi singkat halaman yang muncul di bawah title di hasil pencarian.</p>
            <p className="mb-2"><strong>Mengapa Penting:</strong> Meskipun bukan faktor ranking langsung, meta description mempengaruhi CTR (Click-Through Rate) yang secara tidak langsung mempengaruhi ranking.</p>
            <p className="mb-2"><strong>Cara Optimasi:</strong></p>
            <ul className="list-inside list-disc space-y-1">
              <li>Panjang 150-160 karakter</li>
              <li>Sertakan kata kunci target</li>
              <li>Buat compelling & informatif</li>
              <li>Sertakan call-to-action</li>
              <li>Unik untuk setiap halaman</li>
            </ul>
          </InfoCard>

          <InfoCard icon={Heading} title="3. Heading Tags (H1-H6)" variant="success">
            <p className="mb-2"><strong>Apa:</strong> Tag HTML yang menandai hierarki judul dan subjudul konten.</p>
            <p className="mb-2"><strong>Mengapa Penting:</strong> Membantu mesin pencari memahami struktur dan topik utama konten Anda. Juga meningkatkan keterbacaan bagi pengunjung.</p>
            <p className="mb-2"><strong>Aturan:</strong></p>
            <ul className="list-inside list-disc space-y-1">
              <li><strong>H1</strong> — Hanya 1 per halaman, berisi kata kunci utama</li>
              <li><strong>H2</strong> — Subjudul utama (bisa beberapa)</li>
              <li><strong>H3-H6</strong> — Sub-subjudul dengan hierarki yang benar</li>
              <li>Jangan melompati level (H1 → H3 tanpa H2)</li>
            </ul>
          </InfoCard>

          <InfoCard icon={Type} title="4. Konten Berkualitas" variant="warning">
            <p className="mb-2"><strong>Apa:</strong> Teks, gambar, video, dan media lainnya yang memberikan nilai bagi pengunjung.</p>
            <p className="mb-2"><strong>Prinsip E-E-A-T Google:</strong></p>
            <ul className="list-inside list-disc space-y-1">
              <li><strong>Experience</strong> — Berdasarkan pengalaman nyata</li>
              <li><strong>Expertise</strong> — Ditulis oleh ahli di bidangnya</li>
              <li><strong>Authoritativeness</strong> — Dari sumber yang terpercaya</li>
              <li><strong>Trustworthiness</strong> — Dapat dipercaya dan akurat</li>
            </ul>
            <p className="mt-2"><strong>Tips:</strong> Buat konten minimal 1000 kata untuk halaman utama, gunakan keyword density 1-2%, dan sertakan LSI keywords.</p>
          </InfoCard>

          <InfoCard icon={Image} title="5. Optimasi Gambar" variant="primary">
            <p className="mb-2"><strong>Apa:</strong> Proses mengoptimalkan gambar agar mendukung SEO dan performa website.</p>
            <p className="mb-2"><strong>Cara Optimasi:</strong></p>
            <ul className="list-inside list-disc space-y-1">
              <li><strong>Alt Text</strong> — Deskripsi gambar untuk aksesibilitas & SEO</li>
              <li><strong>Nama File</strong> — Gunakan kata kunci (panduan-seo.webp)</li>
              <li><strong>Format</strong> — WebP untuk web, JPEG untuk foto</li>
              <li><strong>Ukuran</strong> — Kompres tanpa kehilangan kualitas</li>
              <li><strong>Lazy Loading</strong> — Muat gambar saat terlihat</li>
              <li><strong>Responsive</strong> — Sesuai ukuran layar</li>
            </ul>
          </InfoCard>

          <InfoCard icon={Link} title="6. Internal Linking" variant="info">
            <p className="mb-2"><strong>Apa:</strong> Link yang menghubungkan halaman-halaman dalam website Anda sendiri.</p>
            <p className="mb-2"><strong>Mengapa Penting:</strong></p>
            <ul className="list-inside list-disc space-y-1">
              <li>Membantu crawler menemukan halaman baru</li>
              <li>Mendistribusikan "link equity" ke halaman penting</li>
              <li>Meningkatkan waktu kunjungan pengguna</li>
              <li>Membangun hierarki & struktur website</li>
            </ul>
            <p className="mt-2"><strong>Tips:</strong> Gunakan anchor text yang deskriptif, link ke halaman relevan, dan pastikan tidak ada broken internal links.</p>
          </InfoCard>

          <InfoCard icon={Code} title="7. Schema Markup" variant="success">
            <p className="mb-2"><strong>Apa:</strong> Kode terstruktur (JSON-LD) yang membantu mesin pencari memahami konten lebih baik.</p>
            <p className="mb-2"><strong>Mengapa Penting:</strong> Menghasilkan rich snippets di hasil pencarian (rating bintang, FAQ, breadcrumb, dll.) yang meningkatkan CTR.</p>
            <p className="mb-2"><strong>Jenis Schema Umum:</strong></p>
            <ul className="list-inside list-disc space-y-1">
              <li><strong>Organization</strong> — Info perusahaan/organisasi</li>
              <li><strong>Website</strong> — Info website</li>
              <li><strong>Breadcrumb</strong> — Navigasi breadcrumb</li>
              <li><strong>FAQ</strong> — Pertanyaan & jawaban</li>
              <li><strong>Article</strong> — Artikel/blog post</li>
              <li><strong>Product</strong> — Produk dengan harga & review</li>
              <li><strong>Person</strong> — Info individu/penulis</li>
            </ul>
          </InfoCard>

          <InfoCard icon={FileSearch} title="8. Meta Keywords & Robots" variant="warning">
            <p className="mb-2"><strong>Meta Keywords:</strong> Meskipun Google tidak lagi menggunakannya sebagai faktor ranking, beberapa mesin pencari lain masih mempertimbangkannya.</p>
            <p className="mb-2"><strong>Meta Robots:</strong> Mengontrol bagaimana mesin pencari memperlakukan halaman Anda.</p>
            <div className="rounded bg-muted/50 px-3 py-2 font-mono text-xs">
              {'<meta name="robots" content="index, follow" />'}<br/>
              {'<meta name="robots" content="noindex, nofollow" />'}
            </div>
            <p className="mt-2"><strong>Opsi lain:</strong> max-snippet, max-image-preview, max-video-preview — mengontrol bagaimana konten ditampilkan di snippet.</p>
          </InfoCard>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-xl font-bold text-foreground">Kesalahan On-Page SEO yang Harus Dihindari</h2>
        <InfoCard icon={AlertTriangle} title="Kesalahan Umum" variant="warning">
          <ul className="list-inside list-disc space-y-1.5">
            <li><strong>Keyword stuffing</strong> — Mengulang kata kunci secara berlebihan (tidak natural)</li>
            <li><strong>Duplicate title/description</strong> — Menggunakan title atau meta description yang sama di banyak halaman</li>
            <li><strong>Missing alt text</strong> — Gambar tanpa deskripsi alternatif</li>
            <li><strong>Thin content</strong> — Konten terlalu pendek atau tidak memberikan nilai</li>
            <li><strong>No heading structure</strong> — Tidak menggunakan H1-H6 dengan benar</li>
            <li><strong>Broken internal links</strong> — Link internal yang mengarah ke halaman 404</li>
            <li><strong>No schema markup</strong> — Tidak memanfaatkan structured data</li>
            <li><strong>Over-optimization</strong> — Terlalu fokus pada SEO sehingga konten tidak natural</li>
          </ul>
        </InfoCard>
      </section>

      <section>
        <h2 className="mb-4 text-xl font-bold text-foreground">Checklist On-Page SEO Cepat</h2>
        <div className="rounded-xl border border-primary/20 bg-primary/5 p-5 text-sm text-muted-foreground">
          <ListChecks className="mb-2 h-5 w-5 text-primary" />
          <ul className="list-inside list-disc space-y-1">
            <li>✅ Title tag unik & mengandung kata kunci (50-60 karakter)</li>
            <li>✅ Meta description yang compelling (150-160 karakter)</li>
            <li>✅ 1 H1 per halaman dengan kata kunci utama</li>
            <li>✅ Hierarki heading yang benar (H1 → H2 → H3)</li>
            <li>✅ Alt text pada semua gambar</li>
            <li>✅ Internal link ke halaman relevan</li>
            <li>✅ Schema markup terimplementasi</li>
            <li>✅ Konten berkualitas &gt;1000 kata untuk halaman utama</li>
            <li>✅ URL yang bersih dan deskriptif</li>
            <li>✅ Open Graph & Twitter Card tags</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default OnPageSEO;
