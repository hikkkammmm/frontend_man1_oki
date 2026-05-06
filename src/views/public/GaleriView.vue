<script setup lang="ts">
import { ref, computed } from 'vue'
import { galeriStore } from '../../stores/admin/galeri'

const store = galeriStore()
const galeriList = computed(() => store.list)
const selectedItem = ref<typeof store.list[0] | null>(null)
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
          <div v-for="item in galeriList" :key="item.id" class="galeri-item group" @click="selectedItem = item">
            <img :src="item.url" :alt="item.title" class="galeri-img">
            <div class="galeri-overlay">
              <div class="overlay-content">
                <span class="galeri-cat">{{ item.category }}</span>
                <span class="galeri-title">{{ item.title }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Lightbox -->
    <Transition name="fade">
      <div v-if="selectedItem" class="lightbox" @click.self="selectedItem = null">
        <button class="lightbox-close" @click="selectedItem = null">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        </button>
        <div class="lightbox-content">
          <img :src="selectedItem.url" :alt="selectedItem.title" />
          <div class="lightbox-caption">
            <span class="lightbox-cat">{{ selectedItem.category }}</span>
            <p class="lightbox-title">{{ selectedItem.title }}</p>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.galeri-page { padding-top: 80px; }

.galeri-grid {
  display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem;
}
@media (min-width: 768px) { .galeri-grid { grid-template-columns: repeat(3, 1fr); } }
@media (min-width: 1024px) {
  .galeri-grid { grid-template-columns: repeat(4, 1fr); }
  .galeri-item:nth-child(1), .galeri-item:nth-child(6) {
    grid-column: span 2; grid-row: span 2;
  }
}

.galeri-item {
  position: relative; border-radius: var(--radius-lg); overflow: hidden;
  aspect-ratio: 1; cursor: pointer; box-shadow: var(--shadow-md);
}
.galeri-item:nth-child(1), .galeri-item:nth-child(6) { aspect-ratio: auto; }
.galeri-img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.7s ease; }

.galeri-overlay {
  position: absolute; inset: 0;
  background: linear-gradient(to top, rgba(0,69,50,0.85) 0%, rgba(0,69,50,0.2) 40%, transparent 100%);
  display: flex; align-items: flex-end; padding: 1.25rem;
  opacity: 0; transition: all 0.3s ease; color: white;
}

.overlay-content {
  display: flex; flex-direction: column; gap: 0.35rem;
  transform: translateY(15px); transition: transform 0.3s ease;
}

.galeri-cat {
  font-size: 0.7rem; font-weight: 600; text-transform: uppercase;
  letter-spacing: 0.05em; background: rgba(255,255,255,0.2);
  padding: 0.2rem 0.6rem; border-radius: 999px; width: fit-content;
  backdrop-filter: blur(4px);
}

.galeri-title { display: block; font-weight: 600; font-size: 1.1rem; }
.galeri-item:hover .galeri-img { transform: scale(1.1); }
.galeri-item:hover .galeri-overlay { opacity: 1; }
.galeri-item:hover .overlay-content { transform: translateY(0); }

/* Lightbox */
.lightbox {
  position: fixed; inset: 0; z-index: 9999; background: rgba(0,0,0,0.85);
  backdrop-filter: blur(8px); display: flex; align-items: center;
  justify-content: center; padding: 2rem;
}
.lightbox-close {
  position: absolute; top: 1.5rem; right: 1.5rem; z-index: 10;
  background: rgba(255,255,255,0.15); border: none; border-radius: 50%;
  width: 44px; height: 44px; display: flex; align-items: center;
  justify-content: center; color: white; cursor: pointer; transition: all 0.2s;
}
.lightbox-close:hover { background: rgba(255,255,255,0.3); }
.lightbox-content {
  max-width: 900px; width: 100%; border-radius: 16px; overflow: hidden;
  box-shadow: 0 30px 60px rgba(0,0,0,0.4); background: white;
}
.lightbox-content img { width: 100%; max-height: 70vh; object-fit: contain; background: #111; }
.lightbox-caption { padding: 1.25rem 1.5rem; }
.lightbox-cat {
  font-size: 0.75rem; font-weight: 600; color: var(--primary);
  background: rgba(0,69,50,0.1); padding: 0.25rem 0.75rem; border-radius: 999px;
}
.lightbox-title { font-size: 1.1rem; font-weight: 700; color: #111827; margin-top: 0.5rem; }

.fade-enter-active, .fade-leave-active { transition: opacity 0.3s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>
