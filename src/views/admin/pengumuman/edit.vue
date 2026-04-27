<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { pengumumanStore } from '../../../stores/admin/pengumuman'
import TipTapEditor from '../../../components/admin/TipTapEditor.vue'

const router = useRouter()
const route = useRoute()
const store = pengumumanStore()
const notFound = ref(false)
const isSaving = ref(false)

const form = ref({
  title: '',
  content: '',
  date: new Date().toISOString().slice(0, 10),
  expiry: new Date().toISOString().slice(0, 10),
  priority: 'medium' as 'high' | 'medium' | 'low',
  status: 'active' as 'active' | 'expired',
})

onMounted(() => {
  const existing = store.findById(Number(route.params.id))
  if (!existing) { notFound.value = true; return }
  form.value = { title: existing.title, content: existing.content, date: existing.date, expiry: existing.expiry, priority: existing.priority, status: existing.status }
})

async function save() {
  if (!form.value.title.trim()) return
  isSaving.value = true
  await new Promise((r) => setTimeout(r, 400))
  store.update(Number(route.params.id), { ...form.value })
  isSaving.value = false
  router.push('/admin/pengumuman')
}
</script>

<template>
  <div class="crud-page">
    <div v-if="notFound" class="empty-state" style="padding:5rem 1rem">
      <span>🔍</span><p>Pengumuman tidak ditemukan.</p>
      <RouterLink to="/admin/pengumuman" class="btn-primary" style="margin-top:1rem">Kembali</RouterLink>
    </div>

    <template v-else>
      <div class="page-header">
        <div>
          <RouterLink to="/admin/pengumuman" class="btn-back" style="margin-bottom:0.5rem">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
            Kembali ke Daftar
          </RouterLink>
          <h1 class="page-title">Edit Pengumuman</h1>
          <p class="page-desc">Perbarui konten pengumuman yang sudah ada.</p>
        </div>
        <button class="btn-primary" @click="save" :disabled="isSaving" id="update-pengumuman-btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>
          {{ isSaving ? 'Menyimpan...' : 'Perbarui' }}
        </button>
      </div>

      <div class="form-layout">
        <div class="form-main">
          <div class="form-card">
            <h2 class="form-card-title">Konten Pengumuman</h2>
            <div class="field">
              <label class="field-label">Judul <span class="req">*</span></label>
              <input v-model="form.title" type="text" class="field-input" id="edit-pengumuman-title" />
            </div>
            <div class="field">
              <label class="field-label">Isi Pengumuman</label>
              <TipTapEditor v-model="form.content" />
            </div>
          </div>
        </div>
        <div class="form-sidebar">
          <div class="form-card">
            <h2 class="form-card-title">Pengaturan</h2>
            <div class="field">
              <label class="field-label">Prioritas</label>
              <div class="radio-cards" style="flex-direction:column">
                <label class="radio-card" :class="{ active: form.priority === 'high' }"><input v-model="form.priority" type="radio" value="high" /> 🔴 Penting</label>
                <label class="radio-card" :class="{ active: form.priority === 'medium' }"><input v-model="form.priority" type="radio" value="medium" /> 🟡 Normal</label>
                <label class="radio-card" :class="{ active: form.priority === 'low' }"><input v-model="form.priority" type="radio" value="low" /> 🟢 Rendah</label>
              </div>
            </div>
            <div class="field">
              <label class="field-label">Status</label>
              <div class="radio-cards">
                <label class="radio-card" :class="{ active: form.status === 'active' }"><input v-model="form.status" type="radio" value="active" /> ✅ Aktif</label>
                <label class="radio-card" :class="{ active: form.status === 'expired' }"><input v-model="form.status" type="radio" value="expired" /> ❌ Berakhir</label>
              </div>
            </div>
            <div class="field">
              <label class="field-label">Tanggal Mulai</label>
              <input v-model="form.date" type="date" class="field-input" />
            </div>
            <div class="field">
              <label class="field-label">Berlaku Hingga</label>
              <input v-model="form.expiry" type="date" class="field-input" />
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
