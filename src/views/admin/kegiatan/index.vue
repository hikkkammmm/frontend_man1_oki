<script setup lang="ts">
import { ref, computed } from 'vue'
import { kegiatanStore } from '../../../stores/admin/kegiatan'

const store = kegiatanStore()
const searchQuery = ref('')
const filterStatus = ref('all')
const deleteConfirmId = ref<number | null>(null)

const filtered = computed(() =>
  store.list.filter((k) => {
    const matchSearch = k.name.toLowerCase().includes(searchQuery.value.toLowerCase()) || k.coordinator.toLowerCase().includes(searchQuery.value.toLowerCase())
    const matchStatus = filterStatus.value === 'all' || k.status === filterStatus.value
    return matchSearch && matchStatus
  }),
)

function confirmDelete(id: number) { deleteConfirmId.value = id }
function doDelete() {
  if (deleteConfirmId.value !== null) { store.remove(deleteConfirmId.value); deleteConfirmId.value = null }
}
</script>

<template>
  <div class="crud-page">
    <div class="page-header">
      <div>
        <h1 class="page-title">Manajemen Kegiatan</h1>
        <p class="page-desc">Kelola daftar ekstrakurikuler dan kegiatan madrasah.</p>
      </div>
      <RouterLink to="/admin/kegiatan/create" class="btn-primary" id="add-kegiatan-btn">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
        Tambah Kegiatan
      </RouterLink>
    </div>

    <div class="toolbar">
      <div class="search-box">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
        <input v-model="searchQuery" type="text" placeholder="Cari kegiatan..." id="kegiatan-search" />
      </div>
      <div class="filter-tabs">
        <button class="filter-tab" :class="{ active: filterStatus === 'all' }" @click="filterStatus = 'all'">Semua</button>
        <button class="filter-tab" :class="{ active: filterStatus === 'active' }" @click="filterStatus = 'active'">Aktif</button>
        <button class="filter-tab" :class="{ active: filterStatus === 'inactive' }" @click="filterStatus = 'inactive'">Nonaktif</button>
      </div>
    </div>

    <div class="mini-stats">
      <div class="mini-stat"><span class="ms-val">{{ store.list.length }}</span><span class="ms-label">Total</span></div>
      <div class="mini-stat"><span class="ms-val green">{{ store.list.filter(k => k.status === 'active').length }}</span><span class="ms-label">Aktif</span></div>
      <div class="mini-stat"><span class="ms-val amber">{{ store.list.filter(k => k.status === 'inactive').length }}</span><span class="ms-label">Nonaktif</span></div>
    </div>

    <!-- Card Grid -->
    <div class="kegiatan-grid">
      <div v-if="filtered.length === 0" class="empty-state" style="background:white;border-radius:16px;grid-column:1/-1">
        <span>📅</span><p>Tidak ada kegiatan ditemukan.</p>
      </div>
      <div v-for="item in filtered" :key="item.id" class="kegiatan-card" :class="{ inactive: item.status === 'inactive' }">
        <div class="kegiatan-top">
          <span class="kegiatan-icon">{{ item.icon }}</span>
          <button class="status-toggle-btn" :class="item.status" @click="store.toggleStatus(item.id)" :title="item.status === 'active' ? 'Nonaktifkan' : 'Aktifkan'">
            {{ item.status === 'active' ? '● Aktif' : '○ Nonaktif' }}
          </button>
        </div>
        <h3 class="kegiatan-name">{{ item.name }}</h3>
        <p class="kegiatan-desc">{{ item.description }}</p>
        <div class="kegiatan-meta">
          <span>🕐 {{ item.schedule }}</span>
          <span>👤 {{ item.coordinator }}</span>
        </div>
        <div class="kegiatan-actions">
          <RouterLink :to="`/admin/kegiatan/${item.id}/edit`" class="act-btn edit">
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

    <Transition name="fade">
      <div v-if="deleteConfirmId !== null" class="modal-backdrop" @click.self="deleteConfirmId = null">
        <div class="confirm-dialog">
          <div class="confirm-icon danger">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/></svg>
          </div>
          <h3>Hapus Kegiatan?</h3>
          <p>Kegiatan ini akan dihapus secara permanen.</p>
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

.kegiatan-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 1.25rem; }

.kegiatan-card {
  background: white;
  border-radius: 16px;
  padding: 1.375rem;
  border: 1px solid #f3f4f6;
  box-shadow: 0 1px 4px rgba(0,0,0,0.05);
  transition: transform 0.2s, box-shadow 0.2s;
}

.kegiatan-card:hover { transform: translateY(-2px); box-shadow: 0 6px 16px rgba(0,0,0,0.08); }
.kegiatan-card.inactive { opacity: 0.65; }

.kegiatan-top { display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.875rem; }
.kegiatan-icon { font-size: 2.25rem; line-height: 1; }

.status-toggle-btn {
  padding: 0.3rem 0.75rem;
  border: none;
  border-radius: 999px;
  font-size: 0.72rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.status-toggle-btn.active { background: #f0fdf4; color: #16a34a; }
.status-toggle-btn.inactive { background: #f3f4f6; color: #9ca3af; }

.kegiatan-name { font-size: 1rem; font-weight: 700; color: #111827; margin-bottom: 0.375rem; }
.kegiatan-desc { font-size: 0.82rem; color: #6b7280; line-height: 1.5; margin-bottom: 0.875rem; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }

.kegiatan-meta { display: flex; flex-direction: column; gap: 0.25rem; font-size: 0.78rem; color: #6b7280; margin-bottom: 1rem; }

.kegiatan-actions { display: flex; gap: 0.5rem; }
</style>
