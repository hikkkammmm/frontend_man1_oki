<script setup lang="ts">
import { ref } from 'vue'

const heroImg = '/school_hero_1777021806911.png'

const pengumumanList = ref([
  { id: 1, title: 'Pendaftaran Siswa Baru (PPDB) 2026/2027 Dibuka', date: '01 Mei 2026', type: 'Akademik' },
  { id: 2, title: 'Jadwal Ujian Akhir Semester Genap', date: '20 Mei 2026', type: 'Ujian' },
  { id: 3, title: 'Pengambilan Raport Semester Genap', date: '15 Jun 2026', type: 'Akademik' },
  { id: 4, title: 'Libur Hari Raya Idul Fitri 1447 H', date: '10 Mar 2026', type: 'Umum' },
  { id: 5, title: 'Lomba Kemerdekaan Antar Kelas', date: '17 Agu 2026', type: 'Kegiatan' }
])
</script>

<template>
  <div class="pengumuman-page">
    <div class="page-header" :style="{ backgroundImage: `url(${heroImg})` }">
      <div class="header-overlay"></div>
      <div class="container relative z-10 text-center animate-fade-in-up">
        <h1 class="page-title">Pengumuman</h1>
        <p class="page-subtitle">Informasi penting terkait jadwal akademik, ujian, dan kegiatan di MAN 1 OKI.</p>
      </div>
    </div>

    <section class="section">
      <div class="container">
        <div class="filter-tabs mb-8">
          <button class="filter-tab active">Semua</button>
          <button class="filter-tab">Akademik</button>
          <button class="filter-tab">Ujian</button>
          <button class="filter-tab">Kegiatan</button>
          <button class="filter-tab">Umum</button>
        </div>

        <div class="pengumuman-list">
          <div v-for="pengumuman in pengumumanList" :key="pengumuman.id" class="pengumuman-item card">
            <div class="pengumuman-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/></svg>
            </div>
            <div class="pengumuman-info">
              <div class="flex items-center gap-2 mb-1">
                <span class="badge">{{ pengumuman.type }}</span>
                <span class="pengumuman-date">{{ pengumuman.date }}</span>
              </div>
              <h3 class="pengumuman-title">{{ pengumuman.title }}</h3>
            </div>
            <button class="btn btn-outline btn-detail">Detail Dokumen</button>
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

.filter-tabs {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
}

.filter-tab {
  padding: 0.5rem 1.5rem;
  border-radius: 2rem;
  border: 1px solid var(--gray-light);
  background: var(--bg-main);
  color: var(--text-muted);
  font-weight: 500;
  cursor: pointer;
  transition: var(--transition);
}

.filter-tab:hover, .filter-tab.active {
  background: var(--primary);
  color: white;
  border-color: var(--primary);
}

.pengumuman-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 900px;
  margin: 0 auto;
}

.pengumuman-item {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1.5rem;
}

@media (min-width: 768px) {
  .pengumuman-item {
    flex-direction: row;
    align-items: center;
  }
}

.pengumuman-icon {
  background-color: var(--primary-light);
  color: white;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.pengumuman-info {
  flex: 1;
}

.badge {
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  background-color: var(--bg-alt);
  color: var(--primary);
}

.pengumuman-title {
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 1.4;
}

.pengumuman-date {
  color: var(--text-muted);
  font-size: 0.875rem;
}

.btn-detail {
  padding: 0.5rem 1.5rem;
  white-space: nowrap;
}
</style>
