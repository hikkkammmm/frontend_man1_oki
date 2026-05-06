<script setup lang="ts">
import { computed } from 'vue'
import { beritaStore } from '../../stores/admin/berita'

const store = beritaStore()

const beritaList = computed(() =>
  store.list.filter(b => b.status === 'published')
)

function formatDate(d: string) {
  return new Date(d).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })
}
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
        <div v-if="beritaList.length === 0" class="empty-msg">
          <p>📭 Belum ada berita yang ditayangkan.</p>
        </div>
        <div v-else class="grid cards-grid">
          <div v-for="berita in beritaList" :key="berita.id" class="card berita-card group">
            <div class="berita-img-wrapper">
              <img :src="berita.image" :alt="berita.title" class="berita-img">
              <div class="berita-date">{{ formatDate(berita.date) }}</div>
            </div>
            <div class="berita-content">
              <span class="berita-cat">{{ berita.category }}</span>
              <h3 class="berita-title">{{ berita.title }}</h3>
              <p class="berita-desc">{{ berita.excerpt }}</p>
              <RouterLink :to="`/berita/${berita.id}`" class="btn btn-primary mt-4 w-full">Baca Selengkapnya</RouterLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.berita-page { padding-top: 80px; }

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
.berita-cat {
  font-size: 0.75rem; font-weight: 600; color: var(--primary);
  background: rgba(0,69,50,0.08); padding: 0.25rem 0.75rem; border-radius: 999px;
  width: fit-content; margin-bottom: 0.75rem;
}
.berita-title { font-size: 1.25rem; font-weight: 700; margin-bottom: 0.75rem; line-height: 1.4; }
.berita-desc { color: var(--text-muted); flex: 1; margin-bottom: 1rem; }

.empty-msg {
  text-align: center; padding: 4rem 1rem; color: var(--text-muted); font-size: 1.1rem;
}
</style>
