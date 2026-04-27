<script setup lang="ts">
import { ref, computed } from 'vue'
import { pengumumanStore } from '../../../stores/admin/pengumuman'

const store = pengumumanStore()
const searchQuery = ref('')
const filterStatus = ref('all')
const deleteConfirmId = ref<number | null>(null)

const priorityLabel = { high: 'Penting', medium: 'Normal', low: 'Rendah' }
const priorityClass = { high: 'p-high', medium: 'p-medium', low: 'p-low' }

const filtered = computed(() =>
  store.list.filter((p) => {
    const matchSearch = p.title.toLowerCase().includes(searchQuery.value.toLowerCase())
    const matchStatus = filterStatus.value === 'all' || p.status === filterStatus.value
    return matchSearch && matchStatus
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
        <h1 class="page-title">Manajemen Pengumuman</h1>
        <p class="page-desc">Kelola pengumuman penting madrasah untuk siswa dan orang tua.</p>
      </div>
      <RouterLink to="/admin/pengumuman/create" class="btn-primary" id="add-pengumuman-btn">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
        Tambah Pengumuman
      </RouterLink>
    </div>

    <div class="toolbar">
      <div class="search-box">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
        <input v-model="searchQuery" type="text" placeholder="Cari pengumuman..." id="pengumuman-search" />
      </div>
      <div class="filter-tabs">
        <button class="filter-tab" :class="{ active: filterStatus === 'all' }" @click="filterStatus = 'all'">Semua</button>
        <button class="filter-tab" :class="{ active: filterStatus === 'active' }" @click="filterStatus = 'active'">Aktif</button>
        <button class="filter-tab" :class="{ active: filterStatus === 'expired' }" @click="filterStatus = 'expired'">Berakhir</button>
      </div>
    </div>

    <div class="mini-stats">
      <div class="mini-stat"><span class="ms-val">{{ store.list.length }}</span><span class="ms-label">Total</span></div>
      <div class="mini-stat"><span class="ms-val green">{{ store.list.filter(p => p.status === 'active').length }}</span><span class="ms-label">Aktif</span></div>
      <div class="mini-stat"><span class="ms-val red">{{ store.list.filter(p => p.status === 'expired').length }}</span><span class="ms-label">Berakhir</span></div>
    </div>

    <div class="table-card">
      <div class="table-scroll">
        <table class="data-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Judul Pengumuman</th>
              <th>Prioritas</th>
              <th>Berlaku Mulai</th>
              <th>Berlaku Hingga</th>
              <th>Status</th>
              <th style="width:140px">Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr v-if="filtered.length === 0">
              <td colspan="7"><div class="empty-state"><span>📭</span><p>Tidak ada pengumuman.</p></div></td>
            </tr>
            <tr v-for="(item, i) in filtered" :key="item.id" class="tr-hover">
              <td class="td-num">{{ i + 1 }}</td>
              <td><p class="td-title">{{ item.title }}</p></td>
              <td><span class="priority-badge" :class="priorityClass[item.priority]">{{ priorityLabel[item.priority] }}</span></td>
              <td class="td-muted">{{ formatDate(item.date) }}</td>
              <td class="td-muted">{{ formatDate(item.expiry) }}</td>
              <td>
                <span class="status-text" :class="item.status">
                  {{ item.status === 'active' ? '🟢 Aktif' : '🔴 Berakhir' }}
                </span>
              </td>
              <td>
                <div class="action-row">
                  <RouterLink :to="`/admin/pengumuman/${item.id}/edit`" class="act-btn edit">
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

    <Transition name="fade">
      <div v-if="deleteConfirmId !== null" class="modal-backdrop" @click.self="deleteConfirmId = null">
        <div class="confirm-dialog" id="delete-pengumuman-modal">
          <div class="confirm-icon danger">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/></svg>
          </div>
          <h3>Hapus Pengumuman?</h3>
          <p>Pengumuman ini akan dihapus secara permanen.</p>
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
.priority-badge { padding: 0.25rem 0.75rem; border-radius: 999px; font-size: 0.72rem; font-weight: 600; }
.p-high { background: #fef2f2; color: #dc2626; }
.p-medium { background: #fffbeb; color: #b45309; }
.p-low { background: #f0fdf4; color: #16a34a; }
.status-text { font-size: 0.8rem; font-weight: 600; }
.status-text.active { color: #16a34a; }
.status-text.expired { color: #dc2626; }
</style>
