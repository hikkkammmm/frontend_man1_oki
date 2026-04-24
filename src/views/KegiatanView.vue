<script setup lang="ts">
import { ref } from 'vue'

const heroImg = '/school_hero_1777021806911.png'

const kegiatanList = ref([
  { id: 1, name: 'Pramuka', icon: '⛺', desc: 'Membentuk karakter disiplin, mandiri, dan berjiwa kepemimpinan.' },
  { id: 2, name: 'Rohis', icon: '🕌', desc: 'Membina kerohanian Islam dan memperdalam ilmu agama bagi siswa.' },
  { id: 3, name: 'Paskibra', icon: '🇮🇩', desc: 'Melatih kedisiplinan baris-berbaris dan rasa nasionalisme tinggi.' },
  { id: 4, name: 'PMR', icon: '⚕️', desc: 'Membekali siswa dengan kemampuan pertolongan pertama dan kesehatan.' },
  { id: 5, name: 'Karya Ilmiah Remaja', icon: '🔬', desc: 'Mengembangkan minat siswa dalam penelitian dan penulisan ilmiah.' },
  { id: 6, name: 'Olah Raga', icon: '⚽', desc: 'Wadah penyaluran bakat olahraga mulai dari basket, voli, hingga futsal.' },
  { id: 7, name: 'Seni Tari', icon: '💃', desc: 'Melestarikan budaya bangsa melalui seni tari tradisional dan modern.' },
  { id: 8, name: 'Paduan Suara', icon: '🎵', desc: 'Melatih kemampuan vokal dan harmoni bernyanyi bersama kelompok.' }
])
</script>

<template>
  <div class="kegiatan-page">
    <div class="page-header" :style="{ backgroundImage: `url(${heroImg})` }">
      <div class="header-overlay"></div>
      <div class="container relative z-10 text-center animate-fade-in-up">
        <h1 class="page-title">Kegiatan Ekstrakurikuler</h1>
        <p class="page-subtitle">Wadah pengembangan bakat, minat, dan potensi siswa di luar jam pelajaran.</p>
      </div>
    </div>

    <section class="section">
      <div class="container">
        <div class="kegiatan-grid">
          <div v-for="kegiatan in kegiatanList" :key="kegiatan.id" class="kegiatan-card card">
            <div class="kegiatan-icon">{{ kegiatan.icon }}</div>
            <h3 class="kegiatan-name">{{ kegiatan.name }}</h3>
            <p class="kegiatan-desc">{{ kegiatan.desc }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.page-header {
  position: relative;
  padding: 8rem 0 4rem;
  background-size: cover;
  background-position: center;
  color: white;
  margin-top: 0;
}

.header-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, rgba(0, 69, 50, 0.9) 0%, rgba(0, 69, 50, 0.6) 100%);
}

.relative { position: relative; }
.z-10 { z-index: 10; }

.page-title {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1rem;
}

.page-subtitle {
  font-size: 1.25rem;
  opacity: 0.9;
  max-width: 600px;
  margin: 0 auto;
}

.kegiatan-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;
}

@media (min-width: 640px) {
  .kegiatan-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (min-width: 1024px) {
  .kegiatan-grid { grid-template-columns: repeat(3, 1fr); }
}

@media (min-width: 1280px) {
  .kegiatan-grid { grid-template-columns: repeat(4, 1fr); }
}

.kegiatan-card {
  padding: 2.5rem 1.5rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--bg-main);
  border: 1px solid var(--gray-light);
  transition: all 0.3s ease;
}

.kegiatan-card:hover {
  transform: translateY(-10px);
  box-shadow: var(--shadow-lg);
  border-color: var(--primary);
}

.kegiatan-icon {
  font-size: 4rem;
  line-height: 1;
  margin-bottom: 1.5rem;
  transition: transform 0.3s ease;
}

.kegiatan-card:hover .kegiatan-icon {
  transform: scale(1.1);
}

.kegiatan-name {
  font-weight: 700;
  font-size: 1.25rem;
  color: var(--dark);
  margin-bottom: 1rem;
}

.kegiatan-desc {
  color: var(--text-muted);
  font-size: 0.95rem;
  line-height: 1.6;
}
</style>
