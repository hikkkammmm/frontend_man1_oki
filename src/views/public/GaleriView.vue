<script setup lang="ts">
import { ref } from 'vue'

const heroImg = '/school_hero_1777021806911.png'
const activityImg = '/student_activities_1777021842318.png'
const principalImg = '/principal_portrait_1777021823882.png'

const galeriList = ref([
  { id: 1, img: heroImg, title: 'Fasilitas Sekolah' },
  { id: 2, img: activityImg, title: 'Kegiatan Belajar Mengajar' },
  { id: 3, img: principalImg, title: 'Pimpinan Madrasah' },
  { id: 4, img: activityImg, title: 'Kegiatan Ekstrakurikuler' },
  { id: 5, img: heroImg, title: 'Gedung Madrasah' },
  { id: 6, img: activityImg, title: 'Praktikum Siswa' },
  { id: 7, img: heroImg, title: 'Lapangan Olahraga' },
  { id: 8, img: activityImg, title: 'Upacara Bendera' }
])
</script>

<template>
  <div class="galeri-page">
    <section class="page-hero">
      <div class="page-hero-overlay"></div>
      <div class="container page-hero-content animate-fade-in-up">
        <div class="breadcrumb">
          <RouterLink to="/">Beranda</RouterLink>
          <span>/</span>
          <RouterLink to="/berita">Informasi</RouterLink>
          <span>/</span>
          <span>Galeri Foto</span>
        </div>
        <h1 class="page-hero-title">Galeri Foto</h1>
        <p class="page-hero-subtitle">Dokumentasi fasilitas, kegiatan, dan momen berharga di MAN 1 OKI.</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="galeri-grid">
          <div v-for="item in galeriList" :key="item.id" class="galeri-item group">
            <img :src="item.img" :alt="item.title" class="galeri-img">
            <div class="galeri-overlay">
              <div class="overlay-content">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mb-2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
                <span class="galeri-title">{{ item.title }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.galeri-page { padding-top: 80px; }

.galeri-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

@media (min-width: 768px) {
  .galeri-grid { grid-template-columns: repeat(3, 1fr); }
}

@media (min-width: 1024px) {
  .galeri-grid { grid-template-columns: repeat(4, 1fr); }
  .galeri-item:nth-child(1), .galeri-item:nth-child(6) {
    grid-column: span 2;
    grid-row: span 2;
  }
}

.galeri-item {
  position: relative;
  border-radius: var(--radius-lg);
  overflow: hidden;
  aspect-ratio: 1;
  cursor: pointer;
  box-shadow: var(--shadow-md);
}

.galeri-item:nth-child(1), .galeri-item:nth-child(6) {
  aspect-ratio: auto;
}

.galeri-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.7s ease;
}

.galeri-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 69, 50, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: all 0.3s ease;
  color: white;
}

.overlay-content {
  text-align: center;
  transform: translateY(20px);
  transition: transform 0.3s ease;
}

.galeri-title {
  display: block;
  font-weight: 600;
  font-size: 1.1rem;
}

.galeri-item:hover .galeri-img {
  transform: scale(1.1);
}

.galeri-item:hover .galeri-overlay {
  opacity: 1;
}

.galeri-item:hover .overlay-content {
  transform: translateY(0);
}
</style>
