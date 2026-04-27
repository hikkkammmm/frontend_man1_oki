<script setup lang="ts">
import { ref, computed } from 'vue'
import { galeriStore } from '../../../stores/admin/galeri'

const store = galeriStore()
const searchQuery = ref('')
const selectedCategory = ref('Semua')
const deleteConfirmId = ref<number | null>(null)
const viewItem = ref<typeof store.list[0] | null>(null)

const categories = ['Semua', 'Upacara', 'Ekstrakurikuler', 'Prestasi', 'Kegiatan', 'Akademik', 'Fasilitas']

const filtered = computed(() =>
  store.list.filter((g) => {
    const matchCat = selectedCategory.value === 'Semua' || g.category === selectedCategory.value
    const matchSearch = g.title.toLowerCase().includes(searchQuery.value.toLowerCase())
    return matchCat && matchSearch
  }),
)

function formatDate(d: string) {
  return new Date(d).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })
}

function confirmDelete(id: number) { deleteConfirmId.value = id }
function doDelete() {
  if (deleteConfirmId.value !== null) { store.remove(deleteConfirmId.value); deleteConfirmId.value = null }
}
</script>

<template>
  <div class="crud-page">
    <div class="page-header">
      <div>
        <h1 class="page-title">Manajemen Galeri</h1>
        <p class="page-desc">Kelola foto dan dokumentasi kegiatan madrasah.</p>
      </div>
      <RouterLink to="/admin/galeri/create" class="btn-primary" id="add-galeri-btn">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
        Upload Foto
      </RouterLink>
    </div>

    <div class="toolbar">
      <div class="search-box">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
        <input v-model="searchQuery" type="text" placeholder="Cari foto..." id="galeri-search" />
      </div>
      <div class="filter-tabs">
        <button v-for="cat in categories" :key="cat" class="filter-tab" :class="{ active: selectedCategory === cat }" @click="selectedCategory = cat">{{ cat }}</button>
      </div>
    </div>

    <div class="mini-stats">
      <div class="mini-stat"><span class="ms-val">{{ store.list.length }}</span><span class="ms-label">Total Foto</span></div>
      <div class="mini-stat"><span class="ms-val blue">{{ filtered.length }}</span><span class="ms-label">Ditampilkan</span></div>
    </div>

    <!-- Photo Grid -->
    <div class="photo-grid">
      <div v-if="filtered.length === 0" class="empty-state" style="background:white;border-radius:16px;grid-column:1/-1">
        <span>🖼️</span><p>Belum ada foto di kategori ini.</p>
      </div>
      <div v-for="item in filtered" :key="item.id" class="photo-card">
        <div class="photo-thumb" @click="viewItem = item">
          <img :src="item.url" :alt="item.title" />
          <div class="photo-overlay">
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
          </div>
        </div>
        <div class="photo-info">
          <p class="photo-title">{{ item.title }}</p>
          <div class="photo-meta">
            <span class="cat-badge">{{ item.category }}</span>
            <span class="td-muted">{{ formatDate(item.date) }}</span>
          </div>
        </div>
        <div class="photo-actions">
          <RouterLink :to="`/admin/galeri/${item.id}/edit`" class="act-btn edit">
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/></svg>
            Edit
          </RouterLink>
          <button class="act-btn del" @click="confirmDelete(item.id)">
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/></svg>
            Hapus
          </button>
        </div>
      </div>
    </div>

    <!-- Preview Modal -->
    <Transition name="fade">
      <div v-if="viewItem" class="modal-backdrop" @click.self="viewItem = null">
        <div class="preview-modal" id="galeri-preview-modal">
          <button class="preview-close" @click="viewItem = null">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          </button>
          <img :src="viewItem.url" :alt="viewItem.title" class="preview-img" />
          <div class="preview-caption">
            <p class="preview-title">{{ viewItem.title }}</p>
            <p class="preview-sub">{{ viewItem.category }} · {{ formatDate(viewItem.date) }}</p>
          </div>
        </div>
      </div>
    </Transition>

    <!-- Delete Confirm -->
    <Transition name="fade">
      <div v-if="deleteConfirmId !== null" class="modal-backdrop" @click.self="deleteConfirmId = null">
        <div class="confirm-dialog">
          <div class="confirm-icon danger">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/></svg>
          </div>
          <h3>Hapus Foto?</h3>
          <p>Foto ini akan dihapus permanen dari galeri.</p>
          <div class="confirm-actions">
            <button class="btn-ghost" @click="deleteConfirmId = null">Batal</button>
            <button class="btn-danger" @click="doDelete">Ya, Hapus</button>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
@import '../../../../src/assets/admin-crud.css';

.photo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1.25rem;
}

.photo-card {
  background: white;
  border-radius: 14px;
  overflow: hidden;
  border: 1px solid #f3f4f6;
  box-shadow: 0 1px 4px rgba(0,0,0,0.05);
  transition: transform 0.2s, box-shadow 0.2s;
}

.photo-card:hover { transform: translateY(-2px); box-shadow: 0 6px 16px rgba(0,0,0,0.09); }

.photo-thumb {
  position: relative;
  aspect-ratio: 4/3;
  overflow: hidden;
  cursor: pointer;
}

.photo-thumb img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.4s ease; }
.photo-card:hover .photo-thumb img { transform: scale(1.05); }

.photo-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0,69,50,0.55);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s;
}

.photo-card:hover .photo-overlay { opacity: 1; }

.photo-info { padding: 0.75rem 0.875rem 0.375rem; }
.photo-title { font-size: 0.85rem; font-weight: 600; color: #111827; margin-bottom: 0.375rem; }
.photo-meta { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.25rem; }
.photo-actions { display: flex; gap: 0.5rem; padding: 0.375rem 0.875rem 0.875rem; }

.preview-modal {
  background: white;
  border-radius: 20px;
  overflow: hidden;
  max-width: 720px;
  width: 100%;
  position: relative;
  box-shadow: 0 30px 60px rgba(0,0,0,0.3);
}

.preview-close {
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  z-index: 10;
  background: rgba(0,0,0,0.45);
  border: none;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
}

.preview-img { width: 100%; max-height: 60vh; object-fit: contain; background: #111; }

.preview-caption { padding: 1rem 1.25rem; }
.preview-title { font-size: 1rem; font-weight: 700; color: #111827; margin-bottom: 0.25rem; }
.preview-sub { font-size: 0.85rem; color: #6b7280; }
</style>
