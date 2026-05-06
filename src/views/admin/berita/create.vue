<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { beritaStore } from '../../../stores/admin/berita'
import TipTapEditor from '../../../components/admin/TipTapEditor.vue'
import ImageDropZone from '../../../components/admin/ImageDropZone.vue'

const router = useRouter()
const store = beritaStore()

const form = ref({
  title: '',
  category: 'Kegiatan',
  date: new Date().toISOString().slice(0, 10),
  status: 'draft' as 'published' | 'draft',
  author: 'Admin',
  content: '',
  excerpt: '',
  image: '',
})

const isSaving = ref(false)

async function save(status: 'published' | 'draft') {
  if (!form.value.title.trim()) return
  isSaving.value = true
  await new Promise((r) => setTimeout(r, 400))
  store.add({ ...form.value, status })
  isSaving.value = false
  router.push('/admin/berita')
}
</script>

<template>
  <div class="crud-page">
    <!-- Header -->
    <div class="page-header">
      <div>
        <RouterLink to="/admin/berita" class="btn-back" style="margin-bottom:0.5rem">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
          Kembali ke Daftar Berita
        </RouterLink>
        <h1 class="page-title">Tulis Berita Baru</h1>
        <p class="page-desc">Isi semua kolom yang diperlukan kemudian simpan atau tayangkan.</p>
      </div>
      <div class="header-actions">
        <button class="btn-ghost" @click="save('draft')" :disabled="isSaving" id="save-draft-btn">
          Simpan Draft
        </button>
        <button class="btn-primary" @click="save('published')" :disabled="isSaving" id="publish-berita-btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
          {{ isSaving ? 'Menyimpan...' : 'Tayangkan' }}
        </button>
      </div>
    </div>

    <!-- Main Layout -->
    <div class="form-layout">
      <!-- Left: Main content -->
      <div class="form-main">
        <div class="form-card">
          <h2 class="form-card-title">Konten Artikel</h2>

          <div class="field">
            <label class="field-label">Judul Berita <span class="req">*</span></label>
            <input v-model="form.title" type="text" class="field-input" placeholder="Masukkan judul berita yang menarik..." id="berita-title" />
          </div>

          <div class="field">
            <label class="field-label">Ringkasan / Excerpt</label>
            <textarea v-model="form.excerpt" class="field-textarea" rows="2" placeholder="Ringkasan singkat berita (ditampilkan di daftar)..." id="berita-excerpt"></textarea>
          </div>

          <div class="field">
            <label class="field-label">Isi Berita <span class="req">*</span></label>
            <TipTapEditor v-model="form.content" placeholder="Tulis isi berita lengkap di sini..." />
          </div>
        </div>
      </div>

      <!-- Right: Sidebar settings -->
      <div class="form-sidebar">
        <div class="form-card" style="margin-bottom:1rem">
          <h2 class="form-card-title">Pengaturan</h2>

          <div class="field">
            <label class="field-label">Kategori</label>
            <select v-model="form.category" class="field-select" id="berita-category">
              <option value="Prestasi">Prestasi</option>
              <option value="Kegiatan">Kegiatan</option>
              <option value="Akademik">Akademik</option>
              <option value="Pengumuman">Pengumuman</option>
            </select>
          </div>

          <div class="field">
            <label class="field-label">Tanggal Publikasi</label>
            <input v-model="form.date" type="date" class="field-input" id="berita-date" />
          </div>

          <div class="field">
            <label class="field-label">Penulis</label>
            <input v-model="form.author" type="text" class="field-input" placeholder="Nama penulis" id="berita-author" />
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
          <ImageDropZone v-model="form.image" aspect-ratio="16/9" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import '../../../../src/assets/admin-crud.css';

.header-actions {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  align-items: flex-start;
}

.form-main {
  min-width: 0;
}

.form-sidebar {
  position: sticky;
  top: 1.5rem;
}
</style>
