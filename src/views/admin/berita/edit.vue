<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { beritaStore } from '../../../stores/admin/berita'
import TipTapEditor from '../../../components/admin/TipTapEditor.vue'

const router = useRouter()
const route = useRoute()
const store = beritaStore()

const notFound = ref(false)
const isSaving = ref(false)

const form = ref({
  title: '',
  category: 'Kegiatan',
  date: new Date().toISOString().slice(0, 10),
  status: 'draft' as 'published' | 'draft',
  author: 'Admin',
  content: '',
  excerpt: '',
  image: '/school_hero_1777021806911.png',
})

onMounted(() => {
  const id = Number(route.params.id)
  const existing = store.findById(id)
  if (!existing) {
    notFound.value = true
    return
  }
  form.value = {
    title: existing.title,
    category: existing.category,
    date: existing.date,
    status: existing.status,
    author: existing.author,
    content: existing.content,
    excerpt: existing.excerpt,
    image: existing.image,
  }
})

async function save(status: 'published' | 'draft') {
  if (!form.value.title.trim()) return
  isSaving.value = true
  await new Promise((r) => setTimeout(r, 400))
  store.update(Number(route.params.id), { ...form.value, status })
  isSaving.value = false
  router.push('/admin/berita')
}
</script>

<template>
  <div class="crud-page">
    <div v-if="notFound" class="empty-state" style="padding: 5rem 1rem">
      <span>🔍</span>
      <p>Berita tidak ditemukan.</p>
      <RouterLink to="/admin/berita" class="btn-primary" style="margin-top:1rem">Kembali ke Daftar</RouterLink>
    </div>

    <template v-else>
      <!-- Header -->
      <div class="page-header">
        <div>
          <RouterLink to="/admin/berita" class="btn-back" style="margin-bottom:0.5rem">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
            Kembali ke Daftar Berita
          </RouterLink>
          <h1 class="page-title">Edit Berita</h1>
          <p class="page-desc">Perbarui konten berita yang sudah ada.</p>
        </div>
        <div class="header-actions">
          <button class="btn-ghost" @click="save('draft')" :disabled="isSaving" id="update-draft-btn">
            Simpan Draft
          </button>
          <button class="btn-primary" @click="save('published')" :disabled="isSaving" id="update-publish-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>
            {{ isSaving ? 'Menyimpan...' : 'Perbarui Berita' }}
          </button>
        </div>
      </div>

      <!-- Main Layout -->
      <div class="form-layout">
        <div class="form-main">
          <div class="form-card">
            <h2 class="form-card-title">Konten Artikel</h2>

            <div class="field">
              <label class="field-label">Judul Berita <span class="req">*</span></label>
              <input v-model="form.title" type="text" class="field-input" placeholder="Judul berita..." id="edit-berita-title" />
            </div>

            <div class="field">
              <label class="field-label">Ringkasan / Excerpt</label>
              <textarea v-model="form.excerpt" class="field-textarea" rows="2" placeholder="Ringkasan singkat..." id="edit-berita-excerpt"></textarea>
            </div>

            <div class="field">
              <label class="field-label">Isi Berita <span class="req">*</span></label>
              <TipTapEditor v-model="form.content" placeholder="Tulis isi berita di sini..." />
            </div>
          </div>
        </div>

        <div class="form-sidebar">
          <div class="form-card" style="margin-bottom:1rem">
            <h2 class="form-card-title">Pengaturan</h2>

            <div class="field">
              <label class="field-label">Kategori</label>
              <select v-model="form.category" class="field-select" id="edit-berita-category">
                <option value="Prestasi">Prestasi</option>
                <option value="Kegiatan">Kegiatan</option>
                <option value="Akademik">Akademik</option>
                <option value="Pengumuman">Pengumuman</option>
              </select>
            </div>

            <div class="field">
              <label class="field-label">Tanggal Publikasi</label>
              <input v-model="form.date" type="date" class="field-input" id="edit-berita-date" />
            </div>

            <div class="field">
              <label class="field-label">Penulis</label>
              <input v-model="form.author" type="text" class="field-input" id="edit-berita-author" />
            </div>

            <div class="field">
              <label class="field-label">Status</label>
              <div class="radio-cards">
                <label class="radio-card" :class="{ active: form.status === 'draft' }">
                  <input v-model="form.status" type="radio" value="draft" />
                  🟡 Draft
                </label>
                <label class="radio-card" :class="{ active: form.status === 'published' }">
                  <input v-model="form.status" type="radio" value="published" />
                  🟢 Tayang
                </label>
              </div>
            </div>
          </div>

          <div class="form-card">
            <h2 class="form-card-title">Gambar Utama</h2>
            <div class="img-preview-box">
              <img v-if="form.image" :src="form.image" alt="Preview" />
              <div v-else class="img-placeholder">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
                <span>Belum ada gambar</span>
              </div>
            </div>
            <div class="field">
              <label class="field-label">URL Gambar</label>
              <input v-model="form.image" type="text" class="field-input" placeholder="/path/gambar.jpg" id="edit-berita-image" />
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<style scoped>
@import '../../../../src/assets/admin-crud.css';

.header-actions { display: flex; gap: 0.75rem; flex-wrap: wrap; align-items: flex-start; }
.form-main { min-width: 0; }
.form-sidebar { position: sticky; top: 1.5rem; }
</style>
