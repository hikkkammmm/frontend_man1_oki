<script setup lang="ts">
import { computed } from 'vue'
import { kegiatanStore } from '../../stores/admin/kegiatan'

const store = kegiatanStore()
const kegiatanList = computed(() => store.list.filter(k => k.status === 'active'))
</script>

<template>
  <div class="kegiatan-page">
    <section class="page-hero">
      <div class="page-hero-overlay"></div>
      <div class="container page-hero-content animate-fade-in-up">
        <div class="breadcrumb">
          <RouterLink to="/">Beranda</RouterLink>
          <span>/</span>
          <span>Kesiswaan</span>
          <span>/</span>
          <span>Kegiatan Ekstrakurikuler</span>
        </div>
        <h1 class="page-hero-title">Kegiatan Ekstrakurikuler</h1>
        <p class="page-hero-subtitle">Wadah pengembangan bakat, minat, dan potensi siswa di luar jam pelajaran.</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
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
                <span class="kegiatan-coord">👤 {{ kegiatan.coordinator }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.kegiatan-page { padding-top: 80px; }

.kegiatan-grid {
  display: grid; grid-template-columns: repeat(1, 1fr); gap: 2rem;
}
@media (min-width: 640px) { .kegiatan-grid { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 1024px) { .kegiatan-grid { grid-template-columns: repeat(3, 1fr); } }

.kegiatan-card {
  border-radius: 16px; overflow: hidden; background: white;
  border: 1px solid var(--gray-light); box-shadow: var(--shadow-sm);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
.kegiatan-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0,69,50,0.15);
  border-color: var(--primary);
}

.kegiatan-img-wrap { position: relative; height: 220px; overflow: hidden; }
.kegiatan-img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.6s ease; }
.kegiatan-card:hover .kegiatan-img { transform: scale(1.08); }
.kegiatan-img-overlay {
  position: absolute; inset: 0;
  background: linear-gradient(to top, rgba(0,69,50,0.6) 0%, transparent 60%);
}

.kegiatan-body { padding: 1.5rem; }
.kegiatan-name { font-size: 1.25rem; font-weight: 700; color: var(--dark); margin-bottom: 0.75rem; }
.kegiatan-desc { color: var(--text-muted); font-size: 0.95rem; line-height: 1.6; margin-bottom: 1rem; }

.kegiatan-meta { display: flex; flex-direction: column; gap: 0.5rem; }
.kegiatan-schedule, .kegiatan-coord {
  font-size: 0.8rem; color: var(--primary); font-weight: 500;
  background: rgba(0,69,50,0.08); padding: 0.35rem 0.85rem; border-radius: 999px;
  width: fit-content;
}
</style>
