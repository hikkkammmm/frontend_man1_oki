<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { beritaStore } from '../../stores/admin/berita'
import { galeriStore } from '../../stores/admin/galeri'
import { kegiatanStore } from '../../stores/admin/kegiatan'

const bStore = beritaStore()
const gStore = galeriStore()
const kStore = kegiatanStore()

const heroImg = '/school_hero_1777021806911.png'
const principalImg = '/principal_portrait_1777021823882.png'

// ─── Quick Stats counter ──────────────────────────────────────────────────────
const stats = [
  { icon: '👨‍🎓', label: 'Siswa Aktif', target: 1250, suffix: '+', color: '#22c55e' },
  { icon: '👩‍🏫', label: 'Tenaga Pendidik', target: 78, suffix: '', color: '#f59e0b' },
  { icon: '🎓', label: 'Alumni', target: 8500, suffix: '+', color: '#3b82f6' },
  { icon: '🏆', label: 'Prestasi', target: 340, suffix: '+', color: '#ec4899' },
]
const counts = ref<number[]>(stats.map(() => 0))
const statsRef = ref<HTMLElement | null>(null)

const animateCounter = (index: number, target: number) => {
  const duration = 1800
  const steps = 60
  const increment = target / steps
  let current = 0
  const timer = setInterval(() => {
    current = Math.min(current + increment, target)
    counts.value[index] = Math.round(current)
    if (current >= target) clearInterval(timer)
  }, duration / steps)
}

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0]?.isIntersecting) {
        stats.forEach((s, i) => animateCounter(i, s.target))
        observer.disconnect()
      }
    },
    { threshold: 0.3 },
  )
  if (statsRef.value) observer.observe(statsRef.value)
})

// ─── Data from stores (consistent with admin CRUD) ───────────────────────────
const beritaList = computed(() =>
  bStore.list.filter(b => b.status === 'published').slice(0, 3)
)

const pengumumanList = computed(() => [
  { id: 1, title: 'Pendaftaran Siswa Baru (PPDB) 2026/2027 Dibuka', date: '01 Mei 2026' },
  { id: 2, title: 'Jadwal Ujian Akhir Semester Genap', date: '20 Mei 2026' },
  { id: 3, title: 'Pengambilan Raport Semester Genap', date: '15 Jun 2026' },
])

const kegiatanList = computed(() =>
  kStore.list.filter(k => k.status === 'active').slice(0, 6)
)

const galeriList = computed(() => gStore.list.slice(0, 6))

function formatBeritaDate(d: string) {
  return new Date(d).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })
}
</script>

<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-bg" :style="{ backgroundImage: `url(${heroImg})` }"></div>
      <div class="hero-overlay"></div>
      <div class="container hero-content animate-fade-in-up">
        <span class="hero-badge">Unggul &amp; Berakhlak Mulia</span>
        <h1 class="hero-title">Selamat Datang di MAN 1 OKI</h1>
        <p class="hero-subtitle">
          Membentuk generasi penerus bangsa yang islami, cerdas, terampil, dan berwawasan
          lingkungan.
        </p>
        <div class="hero-actions">
          <RouterLink to="/profil/visi-misi" class="btn btn-primary"
            >Kenali Kami Lebih Dekat</RouterLink
          >
          <a href="#pengumuman" class="btn btn-outline" style="color: white; border-color: white"
            >Lihat Pengumuman</a
          >
        </div>
      </div>
    </section>

    <!-- ─── Quick Stats Section ─────────────────────────────────── -->
    <section class="section stats-section" ref="statsRef">
      <div class="container">
        <h2 class="section-title">MAN 1 OKI dalam Angka</h2>
        <div class="stats-grid">
          <div v-for="(stat, i) in stats" :key="stat.label" class="stat-card">
            <div class="stat-icon-ring" :style="{ '--ring-color': stat.color }">
              <span class="stat-icon">{{ stat.icon }}</span>
            </div>
            <div class="stat-number">
              {{ counts[i] != null ? counts[i].toLocaleString('id-ID') : '0' }}{{ stat.suffix }}
            </div>
            <div class="stat-label">{{ stat.label }}</div>
            <div class="stat-bar" :style="{ background: stat.color }"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Sambutan Kepala Sekolah -->
    <section class="section section-alt" id="sambutan">
      <div class="container">
        <div class="sambutan-grid">
          <div class="sambutan-image-wrapper animate-fade-in-up">
            <div class="sambutan-border"></div>
            <img :src="principalImg" alt="Kepala Sekolah" class="sambutan-img" />
          </div>
          <div class="sambutan-content animate-fade-in-up">
            <h2 class="section-title" style="text-align: left">Sambutan Kepala Sekolah</h2>
            <h3 class="kepsek-name">Drs. H. Ahmad Dahlan, M.Pd.</h3>
            <div class="sambutan-text">
              <p>Assalamu'alaikum Warahmatullahi Wabarakatuh.</p>
              <p>
                Segala puji bagi Allah SWT Tuhan semesta alam, yang telah memberikan karunia-Nya
                sehingga website profil Madrasah Aliyah Negeri 1 Ogan Komering Ilir ini dapat hadir
                di hadapan bapak/ibu sekalian.
              </p>
              <p>
                Di era digital ini, website madrasah merupakan pintu gerbang informasi yang sangat
                fital. Kami berharap dengan optimalisasi digitalisasi pendidikan, madrasah kita
                dapat terus meningkatkan pelayanan pendidikan, mencetak lulusan yang tidak hanya
                cerdas secara intelektual, tapi juga matang secara spiritual.
              </p>
              <p>Wassalamu'alaikum Warahmatullahi Wabarakatuh.</p>
            </div>
            <RouterLink to="/profil/kepala-sekolah" class="read-more"
              >Baca Profil Lengkap <span>→</span></RouterLink
            >
          </div>
        </div>
      </div>
    </section>

    <!-- Berita Section (from store) -->
    <section class="section" id="berita">
      <div class="container">
        <h2 class="section-title">Berita Terkini</h2>
        <div class="grid cards-grid">
          <div v-for="berita in beritaList" :key="berita.id" class="card berita-card group">
            <div class="berita-img-wrapper">
              <img :src="berita.image" :alt="berita.title" class="berita-img" />
              <div class="berita-date">{{ formatBeritaDate(berita.date) }}</div>
            </div>
            <div class="berita-content">
              <h3 class="berita-title">{{ berita.title }}</h3>
              <p class="berita-desc">{{ berita.excerpt }}</p>
              <RouterLink :to="`/berita/${berita.id}`" class="btn btn-primary mt-4 w-full"
                >Baca Selengkapnya</RouterLink
              >
            </div>
          </div>
        </div>
        <div class="text-center mt-8">
          <RouterLink to="/berita" class="btn btn-outline">Lihat Semua Berita</RouterLink>
        </div>
      </div>
    </section>

    <!-- Pengumuman Section -->
    <section class="section section-alt" id="pengumuman">
      <div class="container">
        <div class="pengumuman-wrapper">
          <div class="pengumuman-header">
            <h2 class="section-title" style="margin-bottom: 0; text-align: left">Pengumuman</h2>
            <p class="text-muted mt-2">
              Informasi penting terkait akademik dan administrasi madrasah.
            </p>
          </div>
          <div class="pengumuman-list">
            <div
              v-for="pengumuman in pengumumanList"
              :key="pengumuman.id"
              class="pengumuman-item card"
            >
              <div class="pengumuman-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <path d="M14 2v6h6" />
                  <path d="M16 13H8" />
                  <path d="M16 17H8" />
                  <path d="M10 9H8" />
                </svg>
              </div>
              <div class="pengumuman-info">
                <h3 class="pengumuman-title">{{ pengumuman.title }}</h3>
                <span class="pengumuman-date">{{ pengumuman.date }}</span>
              </div>
              <button class="btn btn-outline" style="padding: 0.5rem 1rem">Detail</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Kegiatan Section (from store) -->
    <section class="section" id="kegiatan">
      <div class="container">
        <h2 class="section-title">Kegiatan Ekstrakurikuler</h2>
        <div class="kegiatan-grid">
          <div v-for="kegiatan in kegiatanList" :key="kegiatan.id" class="kegiatan-card">
            <div class="kegiatan-img-wrap">
              <img :src="kegiatan.image" :alt="kegiatan.name" class="kegiatan-img" />
              <div class="kegiatan-img-overlay"></div>
            </div>
            <div class="kegiatan-body">
              <h3 class="kegiatan-name">{{ kegiatan.name }}</h3>
              <p class="kegiatan-desc">{{ kegiatan.description }}</p>
              <div class="kegiatan-meta">
                <span class="kegiatan-schedule">📅 {{ kegiatan.schedule }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="text-center mt-8">
          <RouterLink to="/kesiswaan/ekstrakurikuler" class="btn btn-primary"
            >Lihat Selengkapnya</RouterLink
          >
        </div>
      </div>
    </section>

    <!-- Galeri Section (from store) -->
    <section class="section section-alt" id="galeri">
      <div class="container">
        <div class="galeri-header">
          <h2 class="section-title" style="margin-bottom: 0; margin-top: 0">Galeri Foto</h2>
          <RouterLink to="/galeri" class="btn btn-outline" style="min-width: fit-content"
            >Lihat Semua</RouterLink
          >
        </div>
        <div class="galeri-grid">
          <div v-for="(item, index) in galeriList" :key="item.id" class="galeri-item">
            <img :src="item.url" :alt="item.title" class="galeri-img" />
            <div class="galeri-overlay">
              <div class="galeri-overlay-content">
                <span class="galeri-cat-badge">{{ item.category }}</span>
                <span class="galeri-title-text">{{ item.title }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Hero Section */
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.hero-bg {
  position: absolute; top: 0; left: 0; width: 100%; height: 100%;
  background-size: cover; background-position: center;
  z-index: -2; transform: scale(1.05);
  animation: slowZoom 20s infinite alternate;
}
.hero-overlay {
  position: absolute; top: 0; left: 0; width: 100%; height: 100%;
  background: linear-gradient(to right, rgba(15, 23, 42, 0.9) 0%, rgba(15, 23, 42, 0.4) 100%);
  z-index: -1;
}
.hero-content { color: white; max-width: 800px; text-align: left; margin-top: 4rem; }
.hero-badge {
  display: inline-block; padding: 0.5rem 1rem;
  background-color: rgba(255, 255, 255, 0.1); backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.2); border-radius: 2rem;
  font-size: 0.875rem; font-weight: 500; margin-bottom: 1.5rem; color: var(--secondary);
}
.hero-title { font-size: 3.5rem; font-weight: 800; line-height: 1.2; margin-bottom: 1.5rem; }
.hero-subtitle { font-size: 1.25rem; color: #e2e8f0; margin-bottom: 2.5rem; max-width: 600px; }
.hero-actions { display: flex; gap: 1rem; flex-wrap: wrap; }

@keyframes slowZoom { from { transform: scale(1); } to { transform: scale(1.1); } }
@media (max-width: 768px) {
  .hero-title { font-size: 2.5rem; }
  .hero-actions { flex-direction: column; }
}

/* ── Stats Section ── */
.stats-section {
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%);
  position: relative; overflow: hidden;
}
.stats-section::before {
  content: ''; position: absolute; inset: 0;
  background: radial-gradient(circle at 20% 50%, rgba(0,69,50,0.3) 0%, transparent 50%),
              radial-gradient(circle at 80% 50%, rgba(193,160,89,0.2) 0%, transparent 50%);
}
.stats-section .section-title { color: white; }
.stats-section .section-title::after { background: var(--secondary); }

.stats-grid {
  display: grid; grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem; position: relative;
}
@media (min-width: 768px) { .stats-grid { grid-template-columns: repeat(4, 1fr); } }

.stat-card {
  position: relative; display: flex; flex-direction: column; align-items: center;
  text-align: center; padding: 2.5rem 1.5rem 2rem; gap: 0.75rem;
  background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1);
  backdrop-filter: blur(12px); border-radius: 20px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); overflow: hidden;
}
.stat-card:hover {
  background: rgba(255,255,255,0.1); transform: translateY(-8px);
  box-shadow: 0 25px 50px rgba(0,0,0,0.3); border-color: rgba(255,255,255,0.2);
}
.stat-icon-ring {
  width: 72px; height: 72px; border-radius: 50%;
  background: linear-gradient(135deg, color-mix(in srgb, var(--ring-color) 20%, transparent), color-mix(in srgb, var(--ring-color) 10%, transparent));
  border: 2px solid color-mix(in srgb, var(--ring-color) 40%, transparent);
  display: flex; align-items: center; justify-content: center;
  transition: all 0.4s;
}
.stat-card:hover .stat-icon-ring {
  transform: scale(1.1) rotate(5deg);
  box-shadow: 0 0 30px color-mix(in srgb, var(--ring-color) 30%, transparent);
}
.stat-icon { font-size: 2rem; }
.stat-number {
  font-size: 2.8rem; font-weight: 800; line-height: 1;
  background: linear-gradient(135deg, white 0%, rgba(255,255,255,0.8) 100%);
  -webkit-background-clip: text; -webkit-text-fill-color: transparent;
  background-clip: text; font-variant-numeric: tabular-nums;
}
.stat-label { font-size: 0.9rem; color: rgba(255,255,255,0.7); font-weight: 500; }
.stat-bar {
  position: absolute; bottom: 0; left: 0; right: 0; height: 3px; opacity: 0.6;
  transition: opacity 0.3s;
}
.stat-card:hover .stat-bar { opacity: 1; height: 4px; }

/* Sambutan Section */
.sambutan-grid { display: grid; grid-template-columns: 1fr; gap: 3rem; align-items: center; }
@media (min-width: 1024px) { .sambutan-grid { grid-template-columns: 2fr 3fr; gap: 5rem; } }
.sambutan-image-wrapper { position: relative; z-index: 1; }
.sambutan-border {
  position: absolute; top: 20px; left: -20px; width: 100%; height: 100%;
  border: 4px solid var(--primary); border-radius: var(--radius-lg);
  z-index: -1; transition: transform 0.3s ease;
}
.sambutan-img { width: 100%; border-radius: var(--radius-lg); box-shadow: var(--shadow-lg); object-fit: cover; aspect-ratio: 3/4; }
.sambutan-image-wrapper:hover .sambutan-border { transform: translate(10px, -10px); }
.kepsek-name { font-size: 1.5rem; font-weight: 700; color: var(--primary); margin-bottom: 1.5rem; }
.sambutan-text { color: var(--text-muted); display: flex; flex-direction: column; gap: 1rem; font-size: 1.1rem; margin-bottom: 2rem; }
.read-more { display: inline-flex; align-items: center; gap: 0.5rem; font-weight: 600; color: var(--primary); }
.read-more:hover span { transform: translateX(5px); }
.read-more span { transition: transform 0.2s ease; }

/* Berita Section */
.cards-grid { grid-template-columns: repeat(1, 1fr); gap: 2rem; }
@media (min-width: 768px) { .cards-grid { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 1024px) { .cards-grid { grid-template-columns: repeat(3, 1fr); } }
.berita-card { display: flex; flex-direction: column; height: 100%; }
.berita-img-wrapper { position: relative; width: 100%; height: 200px; overflow: hidden; }
.berita-img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s ease; }
.berita-card:hover .berita-img { transform: scale(1.1); }
.berita-date {
  position: absolute; bottom: 0; left: 0; background-color: var(--primary);
  color: white; padding: 0.5rem 1rem; font-size: 0.875rem;
  font-weight: 600; border-top-right-radius: var(--radius-md);
}
.berita-content { padding: 1.5rem; display: flex; flex-direction: column; flex: 1; }
.berita-title { font-size: 1.25rem; font-weight: 700; margin-bottom: 0.75rem; line-height: 1.4; }
.berita-desc { color: var(--text-muted); flex: 1; margin-bottom: 1rem; }

/* Pengumuman Section */
.pengumuman-wrapper { display: grid; grid-template-columns: 1fr; gap: 2rem; }
@media (min-width: 1024px) { .pengumuman-wrapper { grid-template-columns: 1fr 2fr; gap: 4rem; } }
.pengumuman-list { display: flex; flex-direction: column; gap: 1rem; }
.pengumuman-item { display: flex; align-items: center; gap: 1.5rem; padding: 1.5rem; }
.pengumuman-icon {
  background-color: var(--primary-light); color: white;
  width: 48px; height: 48px; border-radius: 50%;
  display: flex; align-items: center; justify-content: center; flex-shrink: 0;
}
.pengumuman-info { flex: 1; }
.pengumuman-title { font-weight: 600; margin-bottom: 0.25rem; }
.pengumuman-date { color: var(--text-muted); font-size: 0.875rem; }

/* ── Kegiatan Section (Redesigned) ── */
.kegiatan-grid {
  display: grid; grid-template-columns: repeat(1, 1fr); gap: 1.5rem;
}
@media (min-width: 640px) { .kegiatan-grid { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 1024px) { .kegiatan-grid { grid-template-columns: repeat(3, 1fr); } }

.kegiatan-card {
  border-radius: 16px; overflow: hidden; background: white;
  border: 1px solid var(--gray-light); box-shadow: var(--shadow-sm);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
.kegiatan-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 40px rgba(0,69,50,0.15);
  border-color: var(--primary);
}
.kegiatan-img-wrap {
  position: relative; height: 180px; overflow: hidden;
}
.kegiatan-img {
  width: 100%; height: 100%; object-fit: cover;
  transition: transform 0.6s ease;
}
.kegiatan-card:hover .kegiatan-img { transform: scale(1.08); }
.kegiatan-img-overlay {
  position: absolute; inset: 0;
  background: linear-gradient(to top, rgba(0,69,50,0.6) 0%, transparent 60%);
}
.kegiatan-body { padding: 1.25rem 1.5rem 1.5rem; }
.kegiatan-name {
  font-size: 1.15rem; font-weight: 700; color: var(--dark); margin-bottom: 0.5rem;
}
.kegiatan-desc {
  font-size: 0.9rem; color: var(--text-muted); line-height: 1.6; margin-bottom: 0.75rem;
  display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;
}
.kegiatan-meta { display: flex; align-items: center; gap: 0.5rem; }
.kegiatan-schedule {
  font-size: 0.8rem; color: var(--primary); font-weight: 500;
  background: rgba(0,69,50,0.08); padding: 0.3rem 0.75rem; border-radius: 999px;
}

/* ── Galeri Section (Redesigned) ── */
.galeri-header {
  display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem;
}
.galeri-grid {
  display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem;
}
@media (min-width: 768px) { .galeri-grid { grid-template-columns: repeat(3, 1fr); } }
@media (min-width: 1024px) {
  .galeri-grid { grid-template-columns: repeat(4, 1fr); }
  .galeri-item:nth-child(1) { grid-column: span 2; grid-row: span 2; }
}
.galeri-item {
  position: relative; border-radius: 16px; overflow: hidden;
  aspect-ratio: 1; cursor: pointer;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
}
.galeri-item:nth-child(1) { aspect-ratio: auto; }
.galeri-img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.6s ease; }
.galeri-overlay {
  position: absolute; inset: 0;
  background: linear-gradient(to top, rgba(0,69,50,0.85) 0%, rgba(0,69,50,0.2) 40%, transparent 100%);
  display: flex; align-items: flex-end; justify-content: flex-start;
  padding: 1.25rem; opacity: 0; transition: opacity 0.4s ease; color: white;
}
.galeri-overlay-content {
  display: flex; flex-direction: column; gap: 0.35rem;
  transform: translateY(10px); transition: transform 0.4s ease;
}
.galeri-item:hover .galeri-img { transform: scale(1.08); }
.galeri-item:hover .galeri-overlay { opacity: 1; }
.galeri-item:hover .galeri-overlay-content { transform: translateY(0); }
.galeri-cat-badge {
  font-size: 0.7rem; font-weight: 600; text-transform: uppercase;
  letter-spacing: 0.05em; background: rgba(255,255,255,0.2);
  padding: 0.2rem 0.6rem; border-radius: 999px; width: fit-content;
  backdrop-filter: blur(4px);
}
.galeri-title-text { font-size: 0.95rem; font-weight: 600; }
</style>
