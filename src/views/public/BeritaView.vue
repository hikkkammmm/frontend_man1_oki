<script setup lang="ts">
import { ref } from 'vue'

const heroImg = '/school_hero_1777021806911.png'
const activityImg = '/student_activities_1777021842318.png'

const beritaList = ref([
  { id: 1, title: 'Juara 1 Olimpiade Sains Nasional', desc: 'Siswa MAN 1 OKI kembali mengukir prestasi di kancah nasional dalam bidang Fisika.', date: '24 Apr 2026', img: activityImg },
  { id: 2, title: 'Peringatan Hari Guru Nasional 2026', desc: 'Upacara dan pentas seni dalam rangka memeriahkan hari guru nasional. Berbagai kegiatan menarik disajikan.', date: '25 Nov 2025', img: heroImg },
  { id: 3, title: 'Kunjungan Edukasi ke Universitas Indonesia', desc: 'Membuka wawasan siswa kelas 12 dengan melakukan kunjungan ke kampus UI.', date: '10 Nov 2025', img: activityImg },
  { id: 4, title: 'Prestasi Marching Band di Tingkat Provinsi', desc: 'Marching Band MAN 1 OKI meraih juara umum pada kejuaraan tingkat provinsi.', date: '15 Okt 2025', img: heroImg },
  { id: 5, title: 'Pelatihan Jurnalistik untuk Siswa', desc: 'Meningkatkan kemampuan menulis dan meliput berita bagi anggota ekskul jurnalistik.', date: '02 Sep 2025', img: activityImg },
  { id: 6, title: 'Penerimaan Peserta Didik Baru Dimulai', desc: 'Informasi lengkap mengenai jadwal dan persyaratan PPDB tahun ajaran baru.', date: '15 Mei 2025', img: heroImg }
])
</script>

<template>
  <div class="berita-page">
    <section class="page-hero">
      <div class="page-hero-overlay"></div>
      <div class="container page-hero-content animate-fade-in-up">
        <div class="breadcrumb">
          <RouterLink to="/">Beranda</RouterLink>
          <span>/</span>
          <RouterLink to="/berita">Informasi</RouterLink>
          <span>/</span>
          <span>Berita</span>
        </div>
        <h1 class="page-hero-title">Berita Sekolah</h1>
        <p class="page-hero-subtitle">Kumpulan berita, prestasi, dan informasi terbaru dari MAN 1 OKI.</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="grid cards-grid">
          <div v-for="berita in beritaList" :key="berita.id" class="card berita-card group">
            <div class="berita-img-wrapper">
              <img :src="berita.img" :alt="berita.title" class="berita-img">
              <div class="berita-date">{{ berita.date }}</div>
            </div>
            <div class="berita-content">
              <h3 class="berita-title">{{ berita.title }}</h3>
              <p class="berita-desc">{{ berita.desc }}</p>
              <RouterLink :to="`/berita/${berita.id}`" class="btn btn-primary mt-4 w-full">Baca Selengkapnya</RouterLink>
            </div>
          </div>
        </div>
        
        <div class="pagination mt-8">
          <button class="btn btn-outline" disabled>Sebelumnya</button>
          <span class="page-info">Halaman 1 dari 5</span>
          <button class="btn btn-outline">Selanjutnya</button>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.berita-page { padding-top: 80px; }

.cards-grid {
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;
}

@media (min-width: 768px) {
  .cards-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (min-width: 1024px) {
  .cards-grid { grid-template-columns: repeat(3, 1fr); }
}

.berita-card {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.berita-img-wrapper {
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.berita-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.berita-card:hover .berita-img {
  transform: scale(1.1);
}

.berita-date {
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: var(--primary);
  color: white;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  font-weight: 600;
  border-top-right-radius: var(--radius-md);
}

.berita-content {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.berita-title {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  line-height: 1.4;
}

.berita-desc {
  color: var(--text-muted);
  flex: 1;
  margin-bottom: 1rem;
}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
}

.page-info {
  font-weight: 500;
  color: var(--text-muted);
}
</style>
