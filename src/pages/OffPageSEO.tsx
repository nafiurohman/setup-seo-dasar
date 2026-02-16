import { Link as LinkIcon, ExternalLink, Users, Share2, MessageSquare, Award, BookOpen, TrendingUp, AlertTriangle, Target } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import InfoCard from "@/components/InfoCard";

const OffPageSEO = () => {
  return (
    <div>
      <PageHeader
        icon={LinkIcon}
        title="Off-Page SEO"
        description="Off-Page SEO mencakup semua aktivitas di luar website Anda yang bertujuan meningkatkan otoritas, reputasi, dan peringkat website di mesin pencari. Fokus utamanya adalah membangun backlink berkualitas dan brand authority."
      />

      <section className="mb-8">
        <h2 className="mb-4 text-xl font-bold text-foreground">Apa itu Off-Page SEO?</h2>
        <div className="rounded-xl border border-border/50 bg-card p-5 text-sm leading-relaxed text-muted-foreground">
          <p className="mb-3">
            <strong className="text-foreground">Off-Page SEO</strong> adalah semua upaya optimasi yang dilakukan di luar website Anda untuk meningkatkan reputasi dan otoritas di mata mesin pencari. Ini seperti "reputasi" Anda di dunia nyata — semakin banyak orang terpercaya yang merekomendasikan Anda, semakin tinggi kredibilitas Anda.
          </p>
          <p className="mb-3">
            <strong className="text-foreground">Cara Kerjanya:</strong> Mesin pencari menggunakan sinyal eksternal (backlink, brand mention, social signals) sebagai "vote of confidence" untuk menentukan seberapa terpercaya dan relevan website Anda.
          </p>
          <p>
            <strong className="text-foreground">Tujuannya:</strong> Meningkatkan Domain Authority (DA), membangun kepercayaan mesin pencari, dan mendatangkan traffic referral dari website lain.
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-xl font-bold text-foreground">Komponen Off-Page SEO</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <InfoCard icon={ExternalLink} title="1. Backlink Building" variant="primary">
            <p className="mb-2"><strong>Apa:</strong> Link dari website lain yang mengarah ke website Anda.</p>
            <p className="mb-2"><strong>Mengapa Penting:</strong> Backlink adalah salah satu faktor ranking terpenting. Google menganggap backlink sebagai "suara" yang mendukung kualitas konten Anda.</p>
            <p className="mb-2"><strong>Kualitas Backlink:</strong></p>
            <ul className="list-inside list-disc space-y-1">
              <li><strong>Domain Authority tinggi</strong> — Dari website terpercaya</li>
              <li><strong>Relevansi</strong> — Dari website dengan topik serupa</li>
              <li><strong>Dofollow</strong> — Memberikan link equity</li>
              <li><strong>Anchor text natural</strong> — Teks link yang relevan</li>
              <li><strong>Traffic</strong> — Dari website dengan traffic tinggi</li>
            </ul>
          </InfoCard>

          <InfoCard icon={BookOpen} title="2. Strategi Mendapatkan Backlink" variant="info">
            <p className="mb-2"><strong>Metode Terbaik:</strong></p>
            <ul className="list-inside list-disc space-y-1">
              <li><strong>Guest Posting</strong> — Menulis artikel di blog/website lain</li>
              <li><strong>Broken Link Building</strong> — Mengganti link mati dengan link Anda</li>
              <li><strong>Resource Pages</strong> — Mendaftar di halaman sumber daya</li>
              <li><strong>HARO</strong> — Menjadi sumber informasi untuk jurnalis</li>
              <li><strong>Infografis</strong> — Membuat konten visual yang mudah di-share</li>
              <li><strong>Skyscraper Technique</strong> — Membuat konten yang lebih baik dari kompetitor</li>
              <li><strong>Directory Submissions</strong> — Daftar di direktori bisnis relevan</li>
            </ul>
          </InfoCard>

          <InfoCard icon={Share2} title="3. Social Signals" variant="success">
            <p className="mb-2"><strong>Apa:</strong> Aktivitas di media sosial yang terkait dengan website Anda (like, share, comment, mention).</p>
            <p className="mb-2"><strong>Mengapa Penting:</strong> Meskipun bukan faktor ranking langsung, social signals meningkatkan visibilitas konten, yang berpotensi menghasilkan lebih banyak backlink natural.</p>
            <p className="mb-2"><strong>Platform Penting:</strong></p>
            <ul className="list-inside list-disc space-y-1">
              <li>LinkedIn — Konten profesional & B2B</li>
              <li>Twitter/X — Diskusi & berita</li>
              <li>Instagram — Visual & branding</li>
              <li>YouTube — Video content & tutorial</li>
              <li>TikTok — Short-form & edukasi</li>
            </ul>
          </InfoCard>

          <InfoCard icon={Users} title="4. Brand Mentions" variant="warning">
            <p className="mb-2"><strong>Apa:</strong> Penyebutan nama brand/website Anda di platform lain, baik dengan atau tanpa link.</p>
            <p className="mb-2"><strong>Mengapa Penting:</strong> Google semakin pintar mengenali "linkless mentions" sebagai sinyal otoritas. Semakin sering brand Anda disebut, semakin tinggi otoritas Anda.</p>
            <p className="mb-2"><strong>Cara Mendapatkan:</strong></p>
            <ul className="list-inside list-disc space-y-1">
              <li>Press release ke media</li>
              <li>Partisipasi di komunitas & forum</li>
              <li>Kolaborasi dengan influencer</li>
              <li>Sponsori event/acara</li>
              <li>Buat produk/layanan yang worth talking about</li>
            </ul>
          </InfoCard>

          <InfoCard icon={MessageSquare} title="5. Forum & Community" variant="primary">
            <p className="mb-2"><strong>Apa:</strong> Partisipasi aktif di forum dan komunitas online yang relevan dengan niche Anda.</p>
            <p className="mb-2"><strong>Platform:</strong></p>
            <ul className="list-inside list-disc space-y-1">
              <li><strong>Reddit</strong> — Diskusi mendalam</li>
              <li><strong>Quora</strong> — Tanya jawab ahli</li>
              <li><strong>Stack Overflow</strong> — Untuk developer</li>
              <li><strong>Discord/Telegram</strong> — Komunitas niche</li>
              <li><strong>Kaskus / Forum lokal</strong> — Audiens Indonesia</li>
            </ul>
            <p className="mt-2"><strong>Tips:</strong> Berikan jawaban berkualitas dan helpful, jangan spam link.</p>
          </InfoCard>

          <InfoCard icon={Award} title="6. Domain Authority (DA)" variant="success">
            <p className="mb-2"><strong>Apa:</strong> Skor (1-100) yang memprediksi seberapa baik website akan ranking di mesin pencari, dikembangkan oleh Moz.</p>
            <p className="mb-2"><strong>Faktor yang Mempengaruhi DA:</strong></p>
            <ul className="list-inside list-disc space-y-1">
              <li>Jumlah & kualitas backlink</li>
              <li>Usia domain</li>
              <li>Jumlah halaman yang di-index</li>
              <li>Profil link yang natural</li>
              <li>Content quality & relevance</li>
            </ul>
            <p className="mt-2"><strong>Target:</strong> DA 20+ (3 bulan) → DA 30+ (6 bulan) → DA 40+ (12 bulan)</p>
          </InfoCard>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-xl font-bold text-foreground">Content Syndication</h2>
        <InfoCard icon={TrendingUp} title="Distribusi Konten ke Multi-Platform" variant="info">
          <p className="mb-2">
            <strong>Content syndication</strong> adalah mempublikasikan ulang konten Anda di platform lain untuk menjangkau audiens lebih luas dan mendapatkan backlink.
          </p>
          <p className="mb-2"><strong>Platform Syndication:</strong></p>
          <ul className="list-inside list-disc space-y-1">
            <li><strong>Medium</strong> — Republish artikel dengan canonical tag</li>
            <li><strong>Dev.to</strong> — Untuk konten teknis/developer</li>
            <li><strong>Hashnode</strong> — Blog teknis</li>
            <li><strong>LinkedIn Articles</strong> — Konten profesional</li>
            <li><strong>Substack</strong> — Newsletter</li>
          </ul>
          <p className="mt-2"><strong>Penting:</strong> Selalu gunakan canonical tag yang mengarah ke konten asli di website Anda untuk menghindari masalah duplikat konten.</p>
        </InfoCard>
      </section>

      <section>
        <h2 className="mb-4 text-xl font-bold text-foreground">Backlink yang Harus Dihindari</h2>
        <InfoCard icon={AlertTriangle} title="Toxic Backlinks" variant="warning">
          <p className="mb-2">Tidak semua backlink menguntungkan. Backlink berikut bisa merusak peringkat Anda:</p>
          <ul className="list-inside list-disc space-y-1.5">
            <li><strong>Link Farm</strong> — Website yang dibuat khusus untuk menjual link</li>
            <li><strong>PBN (Private Blog Network)</strong> — Jaringan blog palsu untuk manipulasi link</li>
            <li><strong>Spam Comments</strong> — Link di komentar blog yang tidak relevan</li>
            <li><strong>Paid Links</strong> — Link yang dibeli (melanggar Google guidelines)</li>
            <li><strong>Irrelevant Directory</strong> — Direktori berkualitas rendah</li>
            <li><strong>Exact Match Anchor Text berlebihan</strong> — Terlihat tidak natural</li>
          </ul>
          <p className="mt-2"><strong>Solusi:</strong> Gunakan Google's Disavow Tool untuk menolak backlink toxic, dan fokus pada membangun backlink berkualitas secara natural.</p>
        </InfoCard>
      </section>
    </div>
  );
};

export default OffPageSEO;
