<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { kegiatanStore } from '../../../stores/admin/kegiatan'

const router = useRouter()
const route = useRoute()
const store = kegiatanStore()
const notFound = ref(false)
const isSaving = ref(false)

const form = ref({
  name: '', icon: '⭐', description: '', schedule: '', coordinator: '',
  status: 'active' as 'active' | 'inactive',
})

onMounted(() => {
  const existing = store.findById(Number(route.params.id))
  if (!existing) { notFound.value = true; return }
  form.value = { name: existing.name, icon: existing.icon, description: existing.description, schedule: existing.schedule, coordinator: existing.coordinator, status: existing.status }
})

async function save() {
  if (!form.value.name.trim()) return
  isSaving.value = true
  await new Promise((r) => setTimeout(r, 400))
  store.update(Number(route.params.id), { ...form.value })
  isSaving.value = false
  router.push('/admin/kegiatan')
}
</script>

<template>
  <div class="crud-page">
    <div v-if="notFound" class="empty-state" style="padding:5rem 1rem">
      <span>🔍</span><p>Kegiatan tidak ditemukan.</p>
      <RouterLink to="/admin/kegiatan" class="btn-primary" style="margin-top:1rem">Kembali</RouterLink>
    </div>
    <template v-else>
      <div class="page-header">
        <div>
          <RouterLink to="/admin/kegiatan" class="btn-back" style="margin-bottom:0.5rem">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
            Kembali ke Daftar
          </RouterLink>
          <h1 class="page-title">Edit Kegiatan</h1>
          <p class="page-desc">Perbarui informasi kegiatan madrasah.</p>
        </div>
        <button class="btn-primary" @click="save" :disabled="isSaving" id="update-kegiatan-btn">
          {{ isSaving ? 'Menyimpan...' : 'Perbarui Kegiatan' }}
        </button>
      </div>

      <div class="form-card" style="max-width:680px">
        <h2 class="form-card-title">Informasi Kegiatan</h2>
        <div class="field-row">
          <div class="field">
            <label class="field-label">Nama Kegiatan <span class="req">*</span></label>
            <input v-model="form.name" type="text" class="field-input" id="edit-kegiatan-name" />
          </div>
          <div class="field">
            <label class="field-label">Icon (Emoji)</label>
            <input v-model="form.icon" type="text" class="field-input" style="font-size:1.5rem" id="edit-kegiatan-icon" />
          </div>
        </div>
        <div class="field">
          <label class="field-label">Deskripsi</label>
          <textarea v-model="form.description" class="field-textarea" rows="3" id="edit-kegiatan-desc"></textarea>
        </div>
        <div class="field-row">
          <div class="field">
            <label class="field-label">Jadwal</label>
            <input v-model="form.schedule" type="text" class="field-input" id="edit-kegiatan-schedule" />
          </div>
          <div class="field">
            <label class="field-label">Koordinator</label>
            <input v-model="form.coordinator" type="text" class="field-input" id="edit-kegiatan-coord" />
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
    </template>
  </div>
</template>

<style scoped>
@import '../../../../src/assets/admin-crud.css';
</style>
