<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { galeriStore } from '../../../stores/admin/galeri'

const router = useRouter()
const store = galeriStore()
const isSaving = ref(false)

const form = ref({ title: '', category: 'Kegiatan', url: '/school_hero_1777021806911.png', date: new Date().toISOString().slice(0, 10) })

async function save() {
  if (!form.value.title.trim()) return
  isSaving.value = true
  await new Promise((r) => setTimeout(r, 400))
  store.add({ ...form.value })
  isSaving.value = false
  router.push('/admin/galeri')
}
</script>

<template>
  <div class="crud-page">
    <div class="page-header">
      <div>
        <RouterLink to="/admin/galeri" class="btn-back" style="margin-bottom:0.5rem">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
          Kembali ke Galeri
        </RouterLink>
        <h1 class="page-title">Upload Foto Baru</h1>
        <p class="page-desc">Tambahkan foto baru ke galeri madrasah.</p>
      </div>
      <button class="btn-primary" @click="save" :disabled="isSaving" id="save-galeri-btn">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/></svg>
        {{ isSaving ? 'Menyimpan...' : 'Simpan Foto' }}
      </button>
    </div>

    <div class="form-layout">
      <div class="form-main">
        <div class="form-card">
          <h2 class="form-card-title">Detail Foto</h2>
          <div class="img-preview-box" style="aspect-ratio:16/9">
            <img v-if="form.url" :src="form.url" alt="Preview" />
            <div v-else class="img-placeholder">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
              <p>Pratinjau foto akan muncul di sini</p>
            </div>
          </div>
          <div class="field">
            <label class="field-label">URL / Path Foto <span class="req">*</span></label>
            <input v-model="form.url" type="text" class="field-input" placeholder="/images/foto.jpg" id="galeri-url" />
            <p class="field-hint">Masukkan path relatif dari folder public, misalnya /images/foto.jpg</p>
          </div>
          <div class="field">
            <label class="field-label">Keterangan Foto <span class="req">*</span></label>
            <input v-model="form.title" type="text" class="field-input" placeholder="Deskripsi singkat foto..." id="galeri-title" />
          </div>
        </div>
      </div>

      <div class="form-sidebar">
        <div class="form-card">
          <h2 class="form-card-title">Pengaturan</h2>
          <div class="field">
            <label class="field-label">Kategori</label>
            <select v-model="form.category" class="field-select" id="galeri-category">
              <option value="Upacara">Upacara</option>
              <option value="Ekstrakurikuler">Ekstrakurikuler</option>
              <option value="Prestasi">Prestasi</option>
              <option value="Kegiatan">Kegiatan</option>
              <option value="Akademik">Akademik</option>
              <option value="Fasilitas">Fasilitas</option>
            </select>
          </div>
          <div class="field">
            <label class="field-label">Tanggal</label>
            <input v-model="form.date" type="date" class="field-input" id="galeri-date" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import '../../../../src/assets/admin-crud.css';
.form-main { min-width: 0; }
.form-sidebar { position: sticky; top: 1.5rem; }
</style>
