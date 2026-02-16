import { Globe, Languages, MapPin, Flag, FileCode, Settings, Target, AlertTriangle } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import InfoCard from "@/components/InfoCard";

const InternationalSEO = () => {
  return (
    <div>
      <PageHeader
        icon={Globe}
        title="International SEO"
        description="International SEO adalah strategi optimasi website untuk menjangkau audiens di berbagai negara dan bahasa. Pelajari cara implementasi hreflang, struktur URL multi-bahasa, dan penargetan regional."
      />

      <section className="mb-8">
        <h2 className="mb-4 text-xl font-bold text-foreground">Apa itu International SEO?</h2>
        <div className="rounded-xl border border-border/50 bg-card p-5 text-sm leading-relaxed text-muted-foreground">
          <p className="mb-3">
            <strong className="text-foreground">International SEO</strong> adalah proses optimasi website agar mesin pencari dapat mengidentifikasi negara dan bahasa mana yang menjadi target website Anda, dan menampilkan versi konten yang tepat kepada pengguna yang tepat.
          </p>
          <p className="mb-3">
            <strong className="text-foreground">Mengapa Penting?</strong> Jika website Anda memiliki audiens dari berbagai negara atau tersedia dalam beberapa bahasa, Anda perlu memberi sinyal yang jelas kepada Google agar konten yang tepat ditampilkan di lokasi yang tepat.
          </p>
          <p>
            <strong className="text-foreground">Tujuan:</strong> Menghindari duplicate content antar versi bahasa, menampilkan konten yang relevan berdasarkan lokasi pengguna, dan meningkatkan pengalaman pengguna global.
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-xl font-bold text-foreground">Komponen International SEO</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <InfoCard icon={Languages} title="1. Hreflang Tags" variant="primary">
            <p className="mb-2"><strong>Apa:</strong> Tag HTML yang memberitahu Google versi bahasa/negara mana yang tersedia untuk setiap halaman.</p>
            <p className="mb-2"><strong>Format:</strong></p>
            <div className="rounded bg-muted/50 px-3 py-2 font-mono text-xs">
              {'<link rel="alternate" hreflang="id" href="https://example.com/id/" />'}<br/>
              {'<link rel="alternate" hreflang="en" href="https://example.com/en/" />'}<br/>
              {'<link rel="alternate" hreflang="x-default" href="https://example.com/" />'}
            </div>
            <p className="mt-2"><strong>x-default:</strong> Versi default untuk pengguna yang tidak cocok dengan bahasa manapun.</p>
            <p className="mt-1"><strong>Aturan:</strong> Setiap halaman harus mereferensi dirinya sendiri DAN semua versi bahasa lainnya.</p>
          </InfoCard>

          <InfoCard icon={FileCode} title="2. Struktur URL Multi-Bahasa" variant="info">
            <p className="mb-2"><strong>3 Opsi Struktur:</strong></p>
            <ul className="list-inside list-disc space-y-2">
              <li>
                <strong>Subdirectory (Rekomendasi):</strong><br/>
                <code className="text-xs">example.com/id/</code> | <code className="text-xs">example.com/en/</code><br/>
                ✅ Mudah dikelola, satu domain authority
              </li>
              <li>
                <strong>Subdomain:</strong><br/>
                <code className="text-xs">id.example.com</code> | <code className="text-xs">en.example.com</code><br/>
                ⚠️ Diperlakukan sebagai site terpisah oleh Google
              </li>
              <li>
                <strong>ccTLD (Country Code):</strong><br/>
                <code className="text-xs">example.co.id</code> | <code className="text-xs">example.com</code><br/>
                ⚠️ Paling mahal, authority terpisah
              </li>
            </ul>
          </InfoCard>

          <InfoCard icon={MapPin} title="3. Geo-Targeting" variant="success">
            <p className="mb-2"><strong>Apa:</strong> Menargetkan konten ke wilayah/negara tertentu.</p>
            <p className="mb-2"><strong>Cara Implementasi:</strong></p>
            <ul className="list-inside list-disc space-y-1">
              <li>Set target negara di Google Search Console</li>
              <li>Gunakan meta geo tags</li>
              <li>Hosting server di negara target (opsional)</li>
              <li>Gunakan mata uang & format lokal</li>
              <li>Konten yang relevan dengan budaya lokal</li>
            </ul>
            <div className="mt-2 rounded bg-muted/50 px-3 py-2 font-mono text-xs">
              {'<meta name="geo.region" content="ID-JI" />'}<br/>
              {'<meta name="geo.placename" content="Surabaya" />'}
            </div>
          </InfoCard>

          <InfoCard icon={Flag} title="4. Konten Multi-Bahasa" variant="warning">
            <p className="mb-2"><strong>Best Practices:</strong></p>
            <ul className="list-inside list-disc space-y-1">
              <li><strong>Jangan gunakan auto-translate</strong> — Gunakan penerjemah profesional</li>
              <li><strong>Lokalisasi, bukan hanya terjemahan</strong> — Sesuaikan dengan budaya</li>
              <li><strong>Keyword research per bahasa</strong> — Kata kunci berbeda di tiap bahasa</li>
              <li><strong>Mata uang & format tanggal lokal</strong></li>
              <li><strong>Gambar & visual yang relevan</strong> dengan budaya target</li>
            </ul>
            <p className="mt-2"><strong>Contoh:</strong> "SEO" tetap sama dalam banyak bahasa, tapi "cara membuat website" berbeda di tiap bahasa.</p>
          </InfoCard>

          <InfoCard icon={Settings} title="5. Setup di Google Search Console" variant="primary">
            <ol className="list-inside list-decimal space-y-1.5">
              <li>Buka GSC → pilih properti website Anda</li>
              <li>Buka Settings → International Targeting</li>
              <li>Pilih tab "Country"</li>
              <li>Centang "Target users in" dan pilih negara target</li>
              <li>Tab "Language" — Periksa hreflang issues</li>
            </ol>
            <p className="mt-2"><strong>Catatan:</strong> Opsi geo-targeting hanya tersedia untuk URL Prefix property, bukan Domain property.</p>
          </InfoCard>

          <InfoCard icon={AlertTriangle} title="Kesalahan Umum" variant="warning">
            <ul className="list-inside list-disc space-y-1">
              <li>Hreflang tag tidak bi-directional (A harus referensi B, B harus referensi A)</li>
              <li>Menggunakan auto-translate tanpa review manusia</li>
              <li>Tidak membuat sitemap terpisah per bahasa</li>
              <li>IP-based redirect tanpa opsi manual switch bahasa</li>
              <li>Konten yang persis sama di semua bahasa (thin content)</li>
              <li>Tidak ada x-default hreflang</li>
            </ul>
          </InfoCard>
        </div>
      </section>
    </div>
  );
};

export default InternationalSEO;
