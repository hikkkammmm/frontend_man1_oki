<script setup lang="ts">
import { ref } from 'vue'

const heroImg = '/school_hero_1777021806911.png'

const kalenderList = ref([
  { id: 1, month: 'Juli 2026', events: ['Masa Ta\'aruf Siswa Madrasah (Matsama)', 'Hari Pertama Sekolah', 'Rapat Komite'] },
  { id: 2, month: 'Agustus 2026', events: ['Upacara HUT Kemerdekaan RI', 'Lomba 17-an Antar Kelas'] },
  { id: 3, month: 'September 2026', events: ['Penilaian Tengah Semester (PTS) Ganjil'] },
  { id: 4, month: 'Oktober 2026', events: ['Peringatan Hari Santri Nasional', 'Bulan Bahasa'] },
  { id: 5, month: 'November 2026', events: ['Hari Guru Nasional'] },
  { id: 6, month: 'Desember 2026', events: ['Penilaian Akhir Semester (PAS) Ganjil', 'Pembagian Raport Ganjil', 'Libur Semester Ganjil'] }
])
</script>

<template>
  <div class="akademik-page">
    <div class="page-header" :style="{ backgroundImage: `url(${heroImg})` }">
      <div class="header-overlay"></div>
      <div class="container relative z-10 text-center animate-fade-in-up">
        <h1 class="page-title">Kalender Akademik</h1>
        <p class="page-subtitle">Jadwal kegiatan akademik dan hari libur madrasah tahun ajaran 2026/2027.</p>
      </div>
    </div>

    <section class="section">
      <div class="container max-w-4xl">
        <div class="grid kalender-grid">
          <div v-for="item in kalenderList" :key="item.id" class="card p-6 border-l-primary">
            <h3 class="month-title">{{ item.month }}</h3>
            <ul class="events-list">
              <li v-for="(event, i) in item.events" :key="i">
                <svg class="bullet-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                <span>{{ event }}</span>
              </li>
            </ul>
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
}

.max-w-4xl { max-width: 900px; margin: 0 auto; }
.p-6 { padding: 1.5rem; }

.kalender-grid {
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

@media (min-width: 768px) {
  .kalender-grid { grid-template-columns: repeat(2, 1fr); }
}

.border-l-primary {
  border-left: 4px solid var(--primary);
}

.month-title {
  font-size: 1.25rem;
  color: var(--primary);
  margin-bottom: 1rem;
  font-weight: 700;
  border-bottom: 1px dashed var(--gray-light);
  padding-bottom: 0.5rem;
}

.events-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.events-list li {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  color: var(--text-muted);
}

.bullet-icon {
  color: var(--secondary);
  flex-shrink: 0;
  margin-top: 0.25rem;
}
</style>
