import { Shield, Lock, Eye, Award, FileCheck, ShieldCheck, AlertTriangle, UserCheck } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import InfoCard from "@/components/InfoCard";

const SecurityTrust = () => {
  return (
    <div>
      <PageHeader
        icon={Shield}
        title="Keamanan & Trust Signals"
        description="Keamanan website dan sinyal kepercayaan adalah faktor penting dalam SEO. Google memprioritaskan website yang aman, terpercaya, dan memberikan pengalaman pengguna yang positif."
      />

      <section className="mb-8">
        <h2 className="mb-4 text-xl font-bold text-foreground">Mengapa Keamanan Penting untuk SEO?</h2>
        <div className="rounded-xl border border-border/50 bg-card p-5 text-sm leading-relaxed text-muted-foreground">
          <p className="mb-3">
            Google secara eksplisit menyatakan bahwa HTTPS adalah faktor ranking. Website yang tidak aman ditandai dengan peringatan "Not Secure" di browser, yang mengurangi kepercayaan pengunjung dan meningkatkan bounce rate.
          </p>
          <p>
            Selain SSL, Google juga mempertimbangkan E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) sebagai sinyal kualitas. Website yang menunjukkan kepercayaan dan otoritas akan mendapatkan peringkat lebih baik.
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-xl font-bold text-foreground">Komponen Keamanan Website</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <InfoCard icon={Lock} title="1. SSL/HTTPS" variant="primary">
            <p className="mb-2"><strong>Apa:</strong> Sertifikat keamanan yang mengenkripsi data antara browser dan server.</p>
            <p className="mb-2"><strong>Mengapa Wajib:</strong></p>
            <ul className="list-inside list-disc space-y-1">
              <li>Faktor ranking Google sejak 2014</li>
              <li>Browser menandai HTTP sebagai "Not Secure"</li>
              <li>Melindungi data pengguna</li>
              <li>Diperlukan untuk HTTP/2, PWA, dan banyak API</li>
            </ul>
            <p className="mt-2"><strong>Cara Mendapatkan:</strong> Let's Encrypt (gratis), Cloudflare (gratis), atau dari hosting provider.</p>
          </InfoCard>

          <InfoCard icon={ShieldCheck} title="2. Security Headers" variant="info">
            <p className="mb-2"><strong>Apa:</strong> Header HTTP yang meningkatkan keamanan website.</p>
            <p className="mb-2"><strong>Header Penting:</strong></p>
            <ul className="list-inside list-disc space-y-1">
              <li><strong>X-Content-Type-Options</strong>: nosniff</li>
              <li><strong>X-Frame-Options</strong>: SAMEORIGIN</li>
              <li><strong>X-XSS-Protection</strong>: 1; mode=block</li>
              <li><strong>Strict-Transport-Security</strong> (HSTS)</li>
              <li><strong>Content-Security-Policy</strong> (CSP)</li>
              <li><strong>Referrer-Policy</strong>: strict-origin-when-cross-origin</li>
            </ul>
          </InfoCard>

          <InfoCard icon={FileCheck} title="3. Security.txt" variant="success">
            <p className="mb-2"><strong>Apa:</strong> File standar yang memberikan informasi kontak keamanan website.</p>
            <p className="mb-2"><strong>Lokasi:</strong> <code className="text-xs rounded bg-muted px-1.5 py-0.5">/.well-known/security.txt</code></p>
            <p className="mb-2"><strong>Isi:</strong></p>
            <div className="rounded bg-muted/50 px-3 py-2 font-mono text-xs">
              Contact: mailto:security@example.com<br/>
              Expires: 2026-01-01T00:00:00.000Z<br/>
              Preferred-Languages: id, en<br/>
              Policy: https://example.com/security-policy
            </div>
            <p className="mt-2"><strong>Tujuan:</strong> Memudahkan researcher melaporkan kerentanan keamanan.</p>
          </InfoCard>

          <InfoCard icon={AlertTriangle} title="4. Ancaman Keamanan SEO" variant="warning">
            <p className="mb-2"><strong>Ancaman yang mempengaruhi SEO:</strong></p>
            <ul className="list-inside list-disc space-y-1">
              <li><strong>Hacking</strong> — Google menandai website yang di-hack</li>
              <li><strong>Malware</strong> — Peringatan merah di hasil pencarian</li>
              <li><strong>Spam injection</strong> — Konten spam disisipkan ke website</li>
              <li><strong>Negative SEO</strong> — Serangan backlink toxic dari kompetitor</li>
              <li><strong>Phishing</strong> — Website ditandai sebagai berbahaya</li>
            </ul>
            <p className="mt-2"><strong>Pencegahan:</strong> Update software, strong passwords, 2FA, regular backup, dan monitoring keamanan.</p>
          </InfoCard>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-xl font-bold text-foreground">Trust Signals (Sinyal Kepercayaan)</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <InfoCard icon={UserCheck} title="E-E-A-T (Google Quality Guidelines)" variant="primary">
            <p className="mb-2"><strong>E-E-A-T</strong> adalah framework Google untuk menilai kualitas konten:</p>
            <ul className="list-inside list-disc space-y-1.5">
              <li><strong>Experience</strong> — Apakah penulis memiliki pengalaman langsung?</li>
              <li><strong>Expertise</strong> — Apakah penulis ahli di bidangnya?</li>
              <li><strong>Authoritativeness</strong> — Apakah website diakui sebagai otoritas?</li>
              <li><strong>Trustworthiness</strong> — Apakah website dapat dipercaya?</li>
            </ul>
            <p className="mt-2"><strong>Sangat Penting untuk:</strong> YMYL (Your Money Your Life) — kesehatan, keuangan, hukum, keamanan.</p>
          </InfoCard>

          <InfoCard icon={Award} title="Cara Membangun Trust" variant="success">
            <ul className="list-inside list-disc space-y-1.5">
              <li><strong>Halaman About</strong> — Info lengkap tentang perusahaan/tim</li>
              <li><strong>Privacy Policy</strong> — Kebijakan privasi yang jelas</li>
              <li><strong>Terms of Service</strong> — Syarat & ketentuan layanan</li>
              <li><strong>Informasi kontak</strong> — Alamat, telepon, email</li>
              <li><strong>Testimonial</strong> — Ulasan dari pelanggan</li>
              <li><strong>Sertifikasi & badge</strong> — Bukti kredibilitas</li>
              <li><strong>Author bio</strong> — Info penulis di setiap artikel</li>
              <li><strong>Referensi</strong> — Link ke sumber terpercaya</li>
            </ul>
          </InfoCard>

          <InfoCard icon={Eye} title="Privacy & Compliance" variant="info">
            <p className="mb-2"><strong>Regulasi yang Perlu Dipatuhi:</strong></p>
            <ul className="list-inside list-disc space-y-1">
              <li><strong>GDPR</strong> (EU) — Perlindungan data Eropa</li>
              <li><strong>UU PDP</strong> (Indonesia) — Perlindungan Data Pribadi</li>
              <li><strong>Cookie Consent</strong> — Persetujuan penggunaan cookie</li>
            </ul>
            <p className="mt-2"><strong>Implementasi:</strong></p>
            <ul className="list-inside list-disc space-y-1">
              <li>Cookie consent banner</li>
              <li>Privacy policy page yang jelas</li>
              <li>Opsi opt-out untuk tracking</li>
              <li>Penjelasan data yang dikumpulkan</li>
            </ul>
          </InfoCard>
        </div>
      </section>
    </div>
  );
};

export default SecurityTrust;
