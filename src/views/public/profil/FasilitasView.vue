<script setup lang="ts">
const fasilitas = [
  { id: 1, name: 'Perpustakaan Digital', icon: '📚', desc: 'Koleksi lebih dari 5.000 buku fisik dan ribuan e-book yang dapat diakses secara digital oleh seluruh siswa dan guru.', img: null },
  { id: 2, name: 'Laboratorium IPA', icon: '🔬', desc: 'Lab Fisika, Kimia, dan Biologi yang lengkap dengan peralatan modern untuk mendukung praktikum siswa.', img: null },
  { id: 3, name: 'Laboratorium Komputer', icon: '💻', desc: 'Dua ruang laboratorium komputer dengan total 80 unit PC berkoneksi internet cepat dan software terkini.', img: null },
  { id: 4, name: 'Masjid Sekolah', icon: '🕌', desc: 'Masjid sekolah yang luas dan representatif sebagai pusat ibadah dan kegiatan keagamaan sivitas madrasah.', img: null },
  { id: 5, name: 'Lapangan Olahraga', icon: '⚽', desc: 'Lapangan serbaguna untuk futsal, basket, voli, dan upacara bendera yang terawat baik.', img: null },
  { id: 6, name: 'Aula Serbaguna', icon: '🎭', desc: 'Aula berkapasitas 500 orang untuk seminar, pentas seni, wisuda, dan kegiatan besar lainnya.', img: null },
  { id: 7, name: 'Kantin Sehat', icon: '🍱', desc: 'Kantin sekolah dengan menu bergizi yang telah disertifikasi halal dan higienis untuk mendukung kesehatan siswa.', img: null },
  { id: 8, name: 'UKS (Unit Kesehatan Sekolah)', icon: '⚕️', desc: 'Ruang UKS dengan fasilitas lengkap dan tenaga kesehatan terlatih siap melayani kebutuhan kesehatan warga sekolah.', img: null },
  { id: 9, name: 'Studio Seni & Multimedia', icon: '🎨', desc: 'Ruang khusus untuk kegiatan seni rupa, desain grafis, dan produksi multimedia bagi siswa yang berminat di bidang kreatif.', img: null },
]
</script>

<template>
  <div class="fasilitas-page">
    <!-- Page Hero -->
    <section class="page-hero">
      <div class="page-hero-overlay"></div>
      <div class="container page-hero-content animate-fade-in-up">
        <div class="breadcrumb">
          <RouterLink to="/">Beranda</RouterLink>
          <span>/</span>
          <RouterLink to="/profil/visi-misi">Profil</RouterLink>
          <span>/</span>
          <span>Fasilitas Sekolah</span>
        </div>
        <h1 class="page-hero-title">Fasilitas Sekolah</h1>
        <p class="page-hero-subtitle">
          Mendukung proses belajar mengajar dengan infrastruktur dan fasilitas modern yang memadai.
        </p>
      </div>
    </section>

    <!-- Intro -->
    <section class="section">
      <div class="container intro-wrapper">
        <div class="intro-text animate-fade-in-up">
          <h2 class="section-title" style="text-align:left">Infrastruktur Lengkap untuk Belajar Optimal</h2>
          <p>
            MAN 1 OKI berkomitmen menyediakan lingkungan belajar yang kondusif dengan fasilitas yang
            terus dikembangkan sesuai kebutuhan pendidikan modern. Setiap fasilitas dirancang untuk
            menunjang potensi terbaik setiap siswa — akademik, spiritual, dan seni budaya.
          </p>
        </div>
        <div class="stats-row">
          <div class="stat-pill">
            <span class="stat-num">30+</span>
            <span class="stat-label">Ruang Kelas</span>
          </div>
          <div class="stat-pill">
            <span class="stat-num">9+</span>
            <span class="stat-label">Jenis Fasilitas</span>
          </div>
          <div class="stat-pill">
            <span class="stat-num">2 Ha</span>
            <span class="stat-label">Luas Area</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Fasilitas Grid -->
    <section class="section section-alt">
      <div class="container">
        <h2 class="section-title">Fasilitas Unggulan</h2>
        <div class="fasilitas-grid">
          <div v-for="f in fasilitas" :key="f.id" class="fasilitas-card card animate-fade-in-up">
            <div class="fasilitas-icon-wrap">
              <span class="fasilitas-icon">{{ f.icon }}</span>
            </div>
            <div class="fasilitas-body">
              <h3 class="fasilitas-name">{{ f.name }}</h3>
              <p class="fasilitas-desc">{{ f.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.fasilitas-page { padding-top: 80px; }

.page-hero {
  position: relative;
  padding: 6rem 0 4rem;
  background: linear-gradient(135deg, var(--primary-dark) 0%, var(--primary) 100%);
  overflow: hidden;
}
.page-hero-overlay {
  position: absolute; inset: 0;
  background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}
.page-hero-content { position: relative; color: white; }
.breadcrumb { display: flex; gap: 0.5rem; align-items: center; font-size: 0.9rem; margin-bottom: 1.5rem; opacity: 0.8; }
.breadcrumb a { color: var(--secondary); }
.breadcrumb a:hover { text-decoration: underline; }
.page-hero-title { font-size: 3rem; font-weight: 800; margin-bottom: 1rem; }
.page-hero-subtitle { font-size: 1.2rem; opacity: 0.85; max-width: 600px; }

.intro-wrapper { display: grid; grid-template-columns: 1fr; gap: 3rem; }
@media (min-width: 1024px) { .intro-wrapper { grid-template-columns: 3fr 2fr; align-items: center; } }
.intro-text p { color: var(--text-muted); font-size: 1.1rem; line-height: 1.8; }

.stats-row { display: flex; flex-direction: column; gap: 1rem; }
@media (min-width: 768px) { .stats-row { flex-direction: row; } }
.stat-pill {
  flex: 1;
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%);
  border-radius: var(--radius-lg);
  padding: 1.5rem;
  text-align: center;
  color: white;
}
.stat-num { display: block; font-size: 2rem; font-weight: 800; }
.stat-label { font-size: 0.875rem; opacity: 0.85; }

.fasilitas-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1.5rem;
}
@media (min-width: 640px) { .fasilitas-grid { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 1024px) { .fasilitas-grid { grid-template-columns: repeat(3, 1fr); } }

.fasilitas-card { display: flex; flex-direction: column; align-items: flex-start; padding: 2rem; gap: 1rem; }
.fasilitas-icon-wrap {
  width: 64px; height: 64px;
  border-radius: var(--radius-md);
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%);
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0;
}
.fasilitas-icon { font-size: 2rem; }
.fasilitas-body { flex: 1; }
.fasilitas-name { font-size: 1.2rem; font-weight: 700; margin-bottom: 0.5rem; color: var(--dark); }
.fasilitas-desc { color: var(--text-muted); line-height: 1.7; font-size: 0.95rem; }

@media (max-width: 768px) {
  .page-hero-title { font-size: 2rem; }
}
</style>
