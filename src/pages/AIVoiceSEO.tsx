import { Bot, Mic, Brain, MessageSquare, FileQuestion, Sparkles, Target, AlertTriangle, Settings } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import InfoCard from "@/components/InfoCard";

const AIVoiceSEO = () => {
  return (
    <div>
      <PageHeader
        icon={Bot}
        title="AI & Voice Search SEO"
        description="Mesin pencari AI (ChatGPT, Claude, Perplexity, Gemini) dan pencarian suara (Google Assistant, Siri) mengubah cara orang menemukan informasi. Optimasi untuk AI dan voice search adalah masa depan SEO."
      />

      <section className="mb-8">
        <h2 className="mb-4 text-xl font-bold text-foreground">AI Engine Optimization (AEO)</h2>
        <div className="rounded-xl border border-border/50 bg-card p-5 text-sm leading-relaxed text-muted-foreground mb-4">
          <p className="mb-3">
            <strong className="text-foreground">AEO (AI Engine Optimization)</strong> adalah strategi optimasi konten agar website Anda muncul sebagai sumber informasi yang dikutip oleh AI seperti ChatGPT, Claude, Perplexity, dan Google Gemini.
          </p>
          <p className="mb-3">
            <strong className="text-foreground">Mengapa Penting?</strong> Semakin banyak orang menggunakan AI untuk mencari informasi. Jika konten Anda dikutip oleh AI, ini berarti brand awareness dan traffic yang signifikan.
          </p>
          <p>
            <strong className="text-foreground">Cara Kerja:</strong> AI crawler (seperti GPTBot, anthropic-ai) merayapi website dan menggunakan kontennya untuk melatih model atau memberikan jawaban real-time kepada pengguna.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <InfoCard icon={Brain} title="Cara Optimasi untuk AI" variant="primary">
            <ul className="list-inside list-disc space-y-1.5">
              <li><strong>Konten terstruktur</strong> — Gunakan heading, list, tabel yang jelas</li>
              <li><strong>Jawaban langsung</strong> — Berikan jawaban di awal, detail setelahnya</li>
              <li><strong>FAQ format</strong> — Pertanyaan & jawaban yang jelas</li>
              <li><strong>Fakta & data</strong> — Sertakan statistik, angka, referensi</li>
              <li><strong>Expertise</strong> — Tunjukkan keahlian di bidang Anda</li>
              <li><strong>Update rutin</strong> — Konten yang selalu up-to-date</li>
            </ul>
          </InfoCard>

          <InfoCard icon={Settings} title="Setup AI Crawler di Robots.txt" variant="info">
            <p className="mb-2"><strong>Izinkan AI crawler mengakses konten Anda:</strong></p>
            <div className="rounded bg-muted/50 px-3 py-2 font-mono text-xs space-y-0.5">
              <p># AI Crawlers</p>
              <p>User-agent: GPTBot</p>
              <p>Allow: /</p>
              <p>Crawl-delay: 1</p>
              <p></p>
              <p>User-agent: anthropic-ai</p>
              <p>Allow: /</p>
              <p>Crawl-delay: 1</p>
              <p></p>
              <p>User-agent: Google-Extended</p>
              <p>Allow: /</p>
              <p></p>
              <p>User-agent: PerplexityBot</p>
              <p>Allow: /</p>
            </div>
            <p className="mt-2"><strong>Catatan:</strong> Anda bisa memblokir AI crawler jika tidak ingin konten digunakan untuk training AI.</p>
          </InfoCard>

          <InfoCard icon={MessageSquare} title="Format Konten yang Disukai AI" variant="success">
            <p className="mb-2"><strong>Struktur ideal:</strong></p>
            <div className="rounded bg-muted/50 px-3 py-2 text-xs space-y-1">
              <p><strong>## Pertanyaan (H2)</strong></p>
              <p><strong>Jawaban singkat:</strong> 1-2 kalimat langsung menjawab</p>
              <p></p>
              <p><strong>Penjelasan detail:</strong></p>
              <p>- Poin 1 dengan detail</p>
              <p>- Poin 2 dengan detail</p>
              <p>- Poin 3 dengan detail</p>
              <p></p>
              <p><strong>Contoh / Data pendukung</strong></p>
            </div>
            <p className="mt-2">Format ini memudahkan AI untuk mengekstrak dan mengutip informasi Anda.</p>
          </InfoCard>

          <InfoCard icon={Sparkles} title="GEO (Generative Engine Optimization)" variant="warning">
            <p className="mb-2"><strong>Apa:</strong> Optimasi khusus untuk generative AI search (SGE, Perplexity, dll).</p>
            <p className="mb-2"><strong>Strategi:</strong></p>
            <ul className="list-inside list-disc space-y-1">
              <li>Buat konten yang comprehensive & authoritative</li>
              <li>Sertakan data primer (riset, survei, statistik)</li>
              <li>Gunakan structured data (schema markup)</li>
              <li>Bangun topical authority (banyak konten di satu topik)</li>
              <li>Pastikan E-E-A-T terpenuhi</li>
            </ul>
          </InfoCard>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-xl font-bold text-foreground">Voice Search Optimization</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <InfoCard icon={Mic} title="Apa itu Voice Search?" variant="primary">
            <p className="mb-2">
              <strong>Voice search</strong> adalah pencarian menggunakan suara melalui asisten virtual seperti Google Assistant, Siri, Alexa, atau Cortana.
            </p>
            <p className="mb-2"><strong>Fakta:</strong></p>
            <ul className="list-inside list-disc space-y-1">
              <li>27% pengguna internet global menggunakan voice search di mobile</li>
              <li>Voice search biasanya berupa pertanyaan lengkap</li>
              <li>Hasil voice search biasanya diambil dari featured snippet</li>
              <li>71% pengguna lebih memilih voice search daripada mengetik</li>
            </ul>
          </InfoCard>

          <InfoCard icon={FileQuestion} title="Cara Optimasi Voice Search" variant="success">
            <ul className="list-inside list-disc space-y-1.5">
              <li><strong>Gunakan bahasa natural/percakapan</strong> — "Apa itu SEO?" bukan "definisi SEO"</li>
              <li><strong>Target long-tail keywords</strong> — Frasa pencarian yang lebih panjang</li>
              <li><strong>Buat FAQ sections</strong> — Pertanyaan & jawaban langsung</li>
              <li><strong>Optimalkan untuk featured snippets</strong> — Jawaban ringkas di paragraf pertama</li>
              <li><strong>Local SEO</strong> — "Restoran terdekat" jenis query</li>
              <li><strong>Page speed</strong> — Hasil voice search butuh loading cepat</li>
              <li><strong>Schema markup</strong> — Membantu mesin pencari memahami konten</li>
            </ul>
          </InfoCard>

          <InfoCard icon={Target} title="Contoh Query Voice Search" variant="info">
            <p className="mb-2"><strong>Bahasa Indonesia:</strong></p>
            <ul className="list-inside list-disc space-y-1">
              <li>"Apa itu SEO dan bagaimana cara kerjanya?"</li>
              <li>"Bagaimana cara mendaftar Google Search Console?"</li>
              <li>"Apa perbedaan On-Page dan Off-Page SEO?"</li>
              <li>"Tools SEO gratis terbaik apa saja?"</li>
              <li>"Berapa lama waktu yang dibutuhkan untuk SEO?"</li>
            </ul>
            <p className="mt-2"><strong>Tips:</strong> Buat konten yang menjawab pertanyaan-pertanyaan ini secara langsung dan jelas.</p>
          </InfoCard>

          <InfoCard icon={AlertTriangle} title="Perbedaan Voice vs Text Search" variant="warning">
            <ul className="list-inside list-disc space-y-1.5">
              <li><strong>Voice:</strong> "Di mana tempat makan enak dekat sini?" vs <strong>Text:</strong> "restoran terdekat"</li>
              <li>Voice search lebih conversational & panjang</li>
              <li>Voice search sering berupa pertanyaan (5W1H)</li>
              <li>Voice search lebih banyak intent lokal</li>
              <li>Voice search biasanya hanya menampilkan 1 jawaban</li>
            </ul>
            <p className="mt-2"><strong>Implikasi:</strong> Konten harus bisa memberikan jawaban langsung dan ringkas dalam 1-2 kalimat pertama.</p>
          </InfoCard>
        </div>
      </section>
    </div>
  );
};

export default AIVoiceSEO;
