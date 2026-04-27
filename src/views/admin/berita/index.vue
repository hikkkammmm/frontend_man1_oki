<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { beritaStore } from '../../../stores/admin/berita'

const router = useRouter()
const store = beritaStore()

const searchQuery = ref('')
const selectedCategory = ref('Semua')
const deleteConfirmId = ref<number | null>(null)

const categories = ['Semua', 'Prestasi', 'Kegiatan', 'Akademik', 'Pengumuman']

const filtered = computed(() =>
  store.list.filter((b) => {
    const matchCat = selectedCategory.value === 'Semua' || b.category === selectedCategory.value
    const matchSearch = b.title.toLowerCase().includes(searchQuery.value.toLowerCase())
    return matchCat && matchSearch
  }),
)

function formatDate(d: string) {
  return new Date(d).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })
}

function toggleStatus(id: number) {
  store.toggleStatus(id)
}

function confirmDelete(id: number) {
  deleteConfirmId.value = id
}

function doDelete() {
  if (deleteConfirmId.value !== null) {
    store.remove(deleteConfirmId.value)
    deleteConfirmId.value = null
  }
}
</script>

<template>
  <div class="crud-page">
    <!-- Header -->
    <div class="page-header">
      <div>
        <h1 class="page-title">Manajemen Berita</h1>
        <p class="page-desc">Tambah, edit, dan hapus konten berita madrasah.</p>
      </div>
      <RouterLink to="/admin/berita/create" class="btn-primary" id="add-berita-btn">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
        Tulis Berita
      </RouterLink>
    </div>

    <!-- Toolbar -->
    <div class="toolbar">
      <div class="search-box">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
        <input v-model="searchQuery" type="text" placeholder="Cari judul berita..." id="berita-search" />
      </div>
      <div class="filter-tabs">
        <button v-for="cat in categories" :key="cat" class="filter-tab" :class="{ active: selectedCategory === cat }" @click="selectedCategory = cat">
          {{ cat }}
        </button>
      </div>
    </div>

    <!-- Stats -->
    <div class="mini-stats">
      <div class="mini-stat"><span class="ms-val">{{ store.list.length }}</span><span class="ms-label">Total</span></div>
      <div class="mini-stat"><span class="ms-val green">{{ store.list.filter(b => b.status === 'published').length }}</span><span class="ms-label">Tayang</span></div>
      <div class="mini-stat"><span class="ms-val amber">{{ store.list.filter(b => b.status === 'draft').length }}</span><span class="ms-label">Draft</span></div>
      <div class="mini-stat"><span class="ms-val">{{ filtered.length }}</span><span class="ms-label">Ditampilkan</span></div>
    </div>

    <!-- Table -->
    <div class="table-card">
      <div class="table-scroll">
        <table class="data-table">
          <thead>
            <tr>
              <th style="width:40px">#</th>
              <th>Judul</th>
              <th>Kategori</th>
              <th>Tanggal</th>
              <th>Status</th>
              <th style="width:160px">Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr v-if="filtered.length === 0">
              <td colspan="6">
                <div class="empty-state"><span>📭</span><p>Tidak ada berita ditemukan.</p></div>
              </td>
            </tr>
            <tr v-for="(item, i) in filtered" :key="item.id" class="tr-hover">
              <td class="td-num">{{ i + 1 }}</td>
              <td>
                <p class="td-title">{{ item.title }}</p>
                <p class="td-sub">Oleh: {{ item.author }}</p>
              </td>
              <td><span class="cat-badge">{{ item.category }}</span></td>
              <td class="td-muted">{{ formatDate(item.date) }}</td>
              <td>
                <button class="status-pill" :class="item.status" @click="toggleStatus(item.id)" :title="item.status === 'published' ? 'Jadikan draft' : 'Tayangkan'">
                  <span class="pill-dot"></span>
                  {{ item.status === 'published' ? 'Tayang' : 'Draft' }}
                </button>
              </td>
              <td>
                <div class="action-row">
                  <RouterLink :to="`/admin/berita/${item.id}/edit`" class="act-btn edit">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/></svg>
                    Edit
                  </RouterLink>
                  <button class="act-btn del" @click="confirmDelete(item.id)">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>
                    Hapus
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Delete Confirm -->
    <Transition name="fade">
      <div v-if="deleteConfirmId !== null" class="modal-backdrop" @click.self="deleteConfirmId = null">
        <div class="confirm-dialog" id="delete-berita-modal">
          <div class="confirm-icon danger">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>
          </div>
          <h3>Hapus Berita?</h3>
          <p>Berita ini akan dihapus secara permanen dan tidak bisa dikembalikan.</p>
          <div class="confirm-actions">
            <button class="btn-ghost" @click="deleteConfirmId = null">Batal</button>
            <button class="btn-danger" @click="doDelete" id="confirm-delete-berita">Ya, Hapus</button>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
@import '../../../../src/assets/admin-crud.css';
</style>
