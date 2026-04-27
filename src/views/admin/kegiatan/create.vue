<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { kegiatanStore } from '../../../stores/admin/kegiatan'

const router = useRouter()
const store = kegiatanStore()
const isSaving = ref(false)

const form = ref({
  name: '', icon: '⭐', description: '', schedule: '', coordinator: '',
  status: 'active' as 'active' | 'inactive',
})

async function save() {
  if (!form.value.name.trim()) return
  isSaving.value = true
  await new Promise((r) => setTimeout(r, 400))
  store.add({ ...form.value })
  isSaving.value = false
  router.push('/admin/kegiatan')
}
</script>

<template>
  <div class="crud-page">
    <div class="page-header">
      <div>
        <RouterLink to="/admin/kegiatan" class="btn-back" style="margin-bottom:0.5rem">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
          Kembali ke Daftar
        </RouterLink>
        <h1 class="page-title">Tambah Kegiatan</h1>
        <p class="page-desc">Tambahkan ekstrakurikuler atau kegiatan baru ke madrasah.</p>
      </div>
      <button class="btn-primary" @click="save" :disabled="isSaving" id="save-kegiatan-btn">
        {{ isSaving ? 'Menyimpan...' : 'Simpan Kegiatan' }}
      </button>
    </div>

    <div class="form-card" style="max-width:680px">
      <h2 class="form-card-title">Informasi Kegiatan</h2>
      <div class="field-row">
        <div class="field">
          <label class="field-label">Nama Kegiatan <span class="req">*</span></label>
          <input v-model="form.name" type="text" class="field-input" placeholder="Contoh: Pramuka" id="kegiatan-name" />
        </div>
        <div class="field">
          <label class="field-label">Icon (Emoji)</label>
          <input v-model="form.icon" type="text" class="field-input" placeholder="⭐" id="kegiatan-icon" style="font-size:1.5rem" />
        </div>
      </div>
      <div class="field">
        <label class="field-label">Deskripsi</label>
        <textarea v-model="form.description" class="field-textarea" rows="3" placeholder="Deskripsi singkat kegiatan..." id="kegiatan-desc"></textarea>
      </div>
      <div class="field-row">
        <div class="field">
          <label class="field-label">Jadwal</label>
          <input v-model="form.schedule" type="text" class="field-input" placeholder="Jumat, 14.00-16.00" id="kegiatan-schedule" />
        </div>
        <div class="field">
          <label class="field-label">Koordinator / Pembina</label>
          <input v-model="form.coordinator" type="text" class="field-input" placeholder="Nama pembina" id="kegiatan-coord" />
        </div>
      </div>
      <div class="field">
        <label class="field-label">Status</label>
        <div class="radio-cards">
          <label class="radio-card" :class="{ active: form.status === 'active' }"><input v-model="form.status" type="radio" value="active" /> 🟢 Aktif</label>
          <label class="radio-card" :class="{ active: form.status === 'inactive' }"><input v-model="form.status" type="radio" value="inactive" /> 🔴 Nonaktif</label>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import '../../../../src/assets/admin-crud.css';
</style>
