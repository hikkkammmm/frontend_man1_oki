<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { galeriStore } from '../../../stores/admin/galeri'
import ImageDropZone from '../../../components/admin/ImageDropZone.vue'

const router = useRouter()
const route = useRoute()
const store = galeriStore()
const notFound = ref(false)
const isSaving = ref(false)
const form = ref({ title: '', category: 'Kegiatan', url: '', date: new Date().toISOString().slice(0, 10) })

onMounted(() => {
  const existing = store.findById(Number(route.params.id))
  if (!existing) { notFound.value = true; return }
  form.value = { title: existing.title, category: existing.category, url: existing.url, date: existing.date }
})

async function save() {
  if (!form.value.title.trim()) return
  isSaving.value = true
  await new Promise((r) => setTimeout(r, 400))
  store.update(Number(route.params.id), { ...form.value })
  isSaving.value = false
  router.push('/admin/galeri')
}
</script>

<template>
  <div class="crud-page">
    <div v-if="notFound" class="empty-state" style="padding:5rem 1rem">
      <span>🔍</span><p>Foto tidak ditemukan.</p>
      <RouterLink to="/admin/galeri" class="btn-primary" style="margin-top:1rem">Kembali</RouterLink>
    </div>
    <template v-else>
      <div class="page-header">
        <div>
          <RouterLink to="/admin/galeri" class="btn-back" style="margin-bottom:0.5rem">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
            Kembali ke Galeri
          </RouterLink>
          <h1 class="page-title">Edit Foto</h1>
          <p class="page-desc">Perbarui informasi foto di galeri.</p>
        </div>
        <button class="btn-primary" @click="save" :disabled="isSaving" id="update-galeri-btn">
          {{ isSaving ? 'Menyimpan...' : 'Perbarui Foto' }}
        </button>
      </div>
      <div class="form-layout">
        <div class="form-main">
          <div class="form-card">
            <h2 class="form-card-title">Detail Foto</h2>
            <ImageDropZone v-model="form.url" aspect-ratio="16/9" label="Foto Galeri" />
            <div class="field" style="margin-top: 1rem">
              <label class="field-label">Keterangan Foto</label>
              <input v-model="form.title" type="text" class="field-input" id="edit-galeri-title" />
            </div>
          </div>
        </div>
        <div class="form-sidebar">
          <div class="form-card">
            <h2 class="form-card-title">Pengaturan</h2>
            <div class="field">
              <label class="field-label">Kategori</label>
              <select v-model="form.category" class="field-select" id="edit-galeri-category">
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
              <input v-model="form.date" type="date" class="field-input" id="edit-galeri-date" />
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<style scoped>
@import '../../../../src/assets/admin-crud.css';
.form-main { min-width: 0; }
.form-sidebar { position: sticky; top: 1.5rem; }
</style>
