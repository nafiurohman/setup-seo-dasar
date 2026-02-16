import { BarChart3, Users, MousePointerClick, Clock, TrendingUp, Target, Filter, Settings, PieChart, ArrowUpDown, Lightbulb, AlertTriangle } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import InfoCard from "@/components/InfoCard";

const GoogleAnalytics = () => {
  return (
    <div>
      <PageHeader
        icon={BarChart3}
        title="Google Analytics"
        description="Google Analytics 4 (GA4) adalah platform analitik gratis dari Google yang membantu Anda memahami pengunjung website — siapa mereka, dari mana datangnya, apa yang mereka lakukan, dan bagaimana mengkonversi mereka menjadi pelanggan."
      />

      <section className="mb-8">
        <h2 className="mb-4 text-xl font-bold text-foreground">Apa itu Google Analytics?</h2>
        <div className="rounded-xl border border-border/50 bg-card p-5 text-sm leading-relaxed text-muted-foreground">
          <p className="mb-3">
            <strong className="text-foreground">Google Analytics 4 (GA4)</strong> adalah versi terbaru dari platform analitik Google yang menggunakan model data berbasis event. GA4 memberikan insight mendalam tentang perilaku pengunjung di website dan aplikasi Anda.
          </p>
          <p className="mb-3">
            <strong className="text-foreground">Perbedaan GA4 vs Universal Analytics (UA):</strong> GA4 menggunakan event-based model (bukan session-based), mendukung cross-platform tracking, dan memiliki fitur AI/machine learning untuk prediksi perilaku pengguna.
          </p>
          <p className="mb-3">
            <strong className="text-foreground">Mengapa Penting untuk SEO?</strong> GA4 melengkapi data dari Google Search Console. Sementara GSC fokus pada data pencarian (sebelum klik), GA4 fokus pada apa yang terjadi setelah pengunjung masuk ke website Anda.
          </p>
          <p>
            <strong className="text-foreground">Tujuannya:</strong> Memahami perilaku pengunjung, mengukur efektivitas strategi SEO, dan membuat keputusan berbasis data untuk meningkatkan performa website.
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-xl font-bold text-foreground">Cara Setup Google Analytics 4</h2>
        <div className="grid gap-4">
          <InfoCard icon={Settings} title="Langkah Setup GA4" variant="primary">
            <ol className="list-inside list-decimal space-y-2">
              <li><strong>Buka</strong> <code className="rounded bg-muted px-1.5 py-0.5 text-xs">analytics.google.com</code></li>
              <li><strong>Buat Akun</strong> — Masukkan nama akun (misalnya nama perusahaan)</li>
              <li><strong>Buat Properti</strong> — Masukkan nama website, zona waktu, dan mata uang</li>
              <li><strong>Buat Data Stream</strong> — Pilih "Web" dan masukkan URL website Anda</li>
              <li><strong>Dapatkan Measurement ID</strong> — Format: G-XXXXXXXXXX</li>
              <li><strong>Pasang tracking code</strong> — Tambahkan ke semua halaman website:
                <div className="mt-1 rounded bg-muted/50 px-3 py-2 font-mono text-xs">
                  {'<!-- Google tag (gtag.js) -->'}<br/>
                  {'<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXX"></script>'}<br/>
                  {'<script>'}<br/>
                  {'  window.dataLayer = window.dataLayer || [];'}<br/>
                  {'  function gtag(){dataLayer.push(arguments);}'}<br/>
                  {"  gtag('js', new Date());"}<br/>
                  {"  gtag('config', 'G-XXXX');"}<br/>
                  {'</script>'}
                </div>
              </li>
              <li><strong>Verifikasi</strong> — Buka website, lalu cek Realtime report di GA4</li>
            </ol>
          </InfoCard>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-xl font-bold text-foreground">Metrik Penting di GA4</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <InfoCard icon={Users} title="1. Users & Sessions" variant="primary">
            <p className="mb-2"><strong>Users:</strong> Jumlah pengunjung unik website Anda.</p>
            <p className="mb-2"><strong>Sessions:</strong> Jumlah sesi (kunjungan) ke website. Satu user bisa memiliki banyak sessions.</p>
            <p className="mb-2"><strong>Jenis Users di GA4:</strong></p>
            <ul className="list-inside list-disc space-y-1">
              <li><strong>Total Users</strong> — Semua pengunjung</li>
              <li><strong>New Users</strong> — Pengunjung pertama kali</li>
              <li><strong>Active Users</strong> — Pengunjung yang engaged</li>
              <li><strong>Returning Users</strong> — Pengunjung yang kembali</li>
            </ul>
            <p className="mt-2"><strong>Tujuan:</strong> Mengukur pertumbuhan audiens dan loyalitas pengunjung.</p>
          </InfoCard>

          <InfoCard icon={MousePointerClick} title="2. Engagement" variant="success">
            <p className="mb-2"><strong>Engaged Sessions:</strong> Sesi dimana pengunjung berinteraksi lebih dari 10 detik, melihat 2+ halaman, atau melakukan konversi.</p>
            <p className="mb-2"><strong>Metrik Engagement:</strong></p>
            <ul className="list-inside list-disc space-y-1">
              <li><strong>Engagement Rate</strong> — % sesi yang engaged (target: &gt;50%)</li>
              <li><strong>Average Engagement Time</strong> — Rata-rata waktu aktif</li>
              <li><strong>Events</strong> — Jumlah interaksi (klik, scroll, dll)</li>
              <li><strong>Bounce Rate</strong> — % pengunjung yang langsung pergi</li>
            </ul>
          </InfoCard>

          <InfoCard icon={ArrowUpDown} title="3. Traffic Sources" variant="info">
            <p className="mb-2"><strong>Apa:</strong> Dari mana pengunjung datang ke website Anda.</p>
            <p className="mb-2"><strong>Channel Groups:</strong></p>
            <ul className="list-inside list-disc space-y-1">
              <li><strong>Organic Search</strong> — Dari Google/Bing (target SEO)</li>
              <li><strong>Direct</strong> — Mengetik URL langsung</li>
              <li><strong>Referral</strong> — Dari link di website lain</li>
              <li><strong>Social</strong> — Dari media sosial</li>
              <li><strong>Paid Search</strong> — Dari iklan berbayar</li>
              <li><strong>Email</strong> — Dari email marketing</li>
            </ul>
            <p className="mt-2"><strong>Untuk SEO:</strong> Pantau pertumbuhan Organic Search — ini indikator keberhasilan strategi SEO Anda.</p>
          </InfoCard>

          <InfoCard icon={PieChart} title="4. Audience Demographics" variant="warning">
            <p className="mb-2"><strong>Apa:</strong> Data tentang siapa pengunjung Anda.</p>
            <p className="mb-2"><strong>Data yang Tersedia:</strong></p>
            <ul className="list-inside list-disc space-y-1">
              <li><strong>Country/City</strong> — Lokasi pengunjung</li>
              <li><strong>Language</strong> — Bahasa browser</li>
              <li><strong>Device</strong> — Desktop, mobile, tablet</li>
              <li><strong>Browser</strong> — Chrome, Safari, Firefox</li>
              <li><strong>Age & Gender</strong> — (jika Google Signals aktif)</li>
              <li><strong>Interests</strong> — Minat pengunjung</li>
            </ul>
            <p className="mt-2"><strong>Manfaat:</strong> Memahami audiens untuk menyesuaikan konten dan strategi.</p>
          </InfoCard>

          <InfoCard icon={Clock} title="5. Pages & Screens" variant="primary">
            <p className="mb-2"><strong>Apa:</strong> Data tentang halaman mana yang paling banyak dikunjungi dan performanya.</p>
            <p className="mb-2"><strong>Metrik per Halaman:</strong></p>
            <ul className="list-inside list-disc space-y-1">
              <li><strong>Views</strong> — Jumlah halaman dilihat</li>
              <li><strong>Users</strong> — Jumlah pengunjung unik</li>
              <li><strong>Average Engagement Time</strong> — Waktu di halaman</li>
              <li><strong>Bounce Rate</strong> — % langsung pergi</li>
              <li><strong>Conversions</strong> — Konversi dari halaman</li>
            </ul>
            <p className="mt-2"><strong>Aksi SEO:</strong> Identifikasi halaman dengan traffic tinggi tapi engagement rendah → optimasi konten.</p>
          </InfoCard>

          <InfoCard icon={Target} title="6. Conversions & Events" variant="success">
            <p className="mb-2"><strong>Events di GA4:</strong> Semua interaksi adalah event (page_view, scroll, click, dll).</p>
            <p className="mb-2"><strong>Custom Events yang Perlu Dibuat:</strong></p>
            <ul className="list-inside list-disc space-y-1">
              <li>Form submission (kontak, newsletter)</li>
              <li>CTA button clicks</li>
              <li>Download file</li>
              <li>Sign up / registrasi</li>
              <li>Purchase (jika e-commerce)</li>
            </ul>
            <p className="mt-2"><strong>Cara:</strong> Tandai event penting sebagai "Conversion" di GA4 untuk melacak goal yang tercapai.</p>
          </InfoCard>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-xl font-bold text-foreground">GA4 untuk SEO</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <InfoCard icon={TrendingUp} title="Laporan SEO yang Harus Dipantau" variant="primary">
            <ul className="list-inside list-disc space-y-1.5">
              <li><strong>Organic traffic trend</strong> — Apakah traffic organik naik/turun?</li>
              <li><strong>Top landing pages</strong> — Halaman mana yang paling banyak traffic organik?</li>
              <li><strong>Engagement per channel</strong> — Apakah traffic organik engaged?</li>
              <li><strong>Conversion by source</strong> — Berapa konversi dari organic search?</li>
              <li><strong>New vs returning users</strong> — Apakah SEO mendatangkan user baru?</li>
              <li><strong>Geographic data</strong> — Dari mana pengunjung organik?</li>
            </ul>
          </InfoCard>
          <InfoCard icon={Filter} title="Cara Filter Data Organic" variant="info">
            <ol className="list-inside list-decimal space-y-1.5">
              <li>Buka <strong>Reports → Acquisition → Traffic Acquisition</strong></li>
              <li>Klik filter <strong>"Session default channel group"</strong></li>
              <li>Pilih <strong>"Organic Search"</strong></li>
              <li>Sekarang semua data yang ditampilkan hanya dari organic search</li>
              <li>Tambahkan <strong>secondary dimension</strong> "Landing page" untuk detail per halaman</li>
            </ol>
            <p className="mt-2"><strong>Tips:</strong> Buat custom report khusus SEO dan jadwalkan email laporan mingguan.</p>
          </InfoCard>
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-xl font-bold text-foreground">Tips & Peringatan</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <InfoCard icon={Lightbulb} title="Best Practices GA4" variant="success">
            <ul className="list-inside list-disc space-y-1">
              <li>Pasang GA4 di SEMUA halaman website</li>
              <li>Setup conversion goals sejak awal</li>
              <li>Hubungkan GA4 dengan Google Search Console</li>
              <li>Gunakan UTM parameters untuk tracking campaign</li>
              <li>Buat custom audience untuk remarketing</li>
              <li>Review data minimal seminggu sekali</li>
              <li>Pastikan data privacy compliance (GDPR, dll)</li>
            </ul>
          </InfoCard>
          <InfoCard icon={AlertTriangle} title="Hal yang Perlu Diperhatikan" variant="warning">
            <ul className="list-inside list-disc space-y-1">
              <li>GA4 berbeda signifikan dari Universal Analytics</li>
              <li>Data memerlukan waktu 24-48 jam untuk lengkap</li>
              <li>Ad blockers bisa memblokir tracking (10-30% data hilang)</li>
              <li>Cookie consent wajib di beberapa negara</li>
              <li>Jangan mengandalkan GA4 sebagai satu-satunya sumber data</li>
              <li>Selalu verifikasi data dengan GSC dan tools lainnya</li>
            </ul>
          </InfoCard>
        </div>
      </section>
    </div>
  );
};

export default GoogleAnalytics;
