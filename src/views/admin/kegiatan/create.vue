<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { kegiatanStore } from '../../../stores/admin/kegiatan'

const router = useRouter()
const store = kegiatanStore()
const isSaving = ref(false)
const imagePreview = ref<string | null>(null)

const form = ref({
  name: '',
  image: '',
  description: '',
  schedule: '',
  coordinator: '',
  status: 'active' as 'active' | 'inactive',
})

function handleImageChange(e: Event) {
  const file = (e.target as HTMLInputElement).files?.[0]
  if (file) {
    const reader = new FileReader()
    reader.onload = (ev) => {
      imagePreview.value = ev.target?.result as string
      form.value.image = imagePreview.value
    }
    reader.readAsDataURL(file)
  }
}

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
        <RouterLink to="/admin/kegiatan" class="btn-back" style="margin-bottom: 0.5rem">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="m12 19-7-7 7-7" />
            <path d="M19 12H5" />
          </svg>
          Kembali ke Daftar
        </RouterLink>
        <h1 class="page-title">Tambah Kegiatan</h1>
        <p class="page-desc">Tambahkan ekstrakurikuler atau kegiatan baru ke madrasah.</p>
      </div>
      <button class="btn-primary" @click="save" :disabled="isSaving" id="save-kegiatan-btn">
        {{ isSaving ? 'Menyimpan...' : 'Simpan Kegiatan' }}
      </button>
    </div>

    <div class="form-card" style="max-width: 680px">
      <h2 class="form-card-title">Informasi Kegiatan</h2>
      <div class="field">
        <label class="field-label">Nama Kegiatan <span class="req">*</span></label>
        <input
          v-model="form.name"
          type="text"
          class="field-input"
          placeholder="Contoh: Pramuka"
          id="kegiatan-name"
        />
      </div>
      <div class="field">
        <label class="field-label">Foto Kegiatan</label>
        <div class="file-upload-wrapper">
          <div v-if="imagePreview" class="image-preview">
            <img :src="imagePreview" :alt="form.name" class="preview-img" />
            <button
              type="button"
              class="btn-remove-img"
              @click="imagePreview = null; form.image = ''"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>
          </div>
          <label v-else class="file-upload-box">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="17 8 12 3 7 8" />
              <line x1="12" y1="3" x2="12" y2="15" />
            </svg>
            <span class="upload-text">Pilih atau drag foto di sini</span>
            <span class="upload-subtext">PNG, JPG (Max 5MB)</span>
            <input type="file" class="file-input" accept="image/*" @change="handleImageChange" />
          </label>
        </div>
      </div>
      <div class="field">
        <label class="field-label">Deskripsi</label>
        <textarea
          v-model="form.description"
          class="field-textarea"
          rows="3"
          placeholder="Deskripsi singkat kegiatan..."
          id="kegiatan-desc"
        ></textarea>
      </div>
      <div class="field-row">
        <div class="field">
          <label class="field-label">Jadwal</label>
          <input
            v-model="form.schedule"
            type="text"
            class="field-input"
            placeholder="Jumat, 14.00-16.00"
            id="kegiatan-schedule"
          />
        </div>
        <div class="field">
          <label class="field-label">Koordinator / Pembina</label>
          <input
            v-model="form.coordinator"
            type="text"
            class="field-input"
            placeholder="Nama pembina"
            id="kegiatan-coord"
          />
        </div>
      </div>
      <div class="field">
        <label class="field-label">Status</label>
        <div class="radio-cards">
          <label class="radio-card" :class="{ active: form.status === 'active' }"
            ><input v-model="form.status" type="radio" value="active" /> 🟢 Aktif</label
          >
          <label class="radio-card" :class="{ active: form.status === 'inactive' }"
            ><input v-model="form.status" type="radio" value="inactive" /> 🔴 Nonaktif</label
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import '../../../../src/assets/admin-crud.css';

.file-upload-wrapper {
  position: relative;
}
.image-preview {
  position: relative;
  width: 100%;
  height: 200px;
  border-radius: 8px;
  overflow: hidden;
  background: #f0f0f0;
}
.preview-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.btn-remove-img {
  position: absolute;
  top: 8px;
  right: 8px;
  width: 28px;
  height: 28px;
  background: rgba(255, 255, 255, 0.95);
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  transition: background 0.2s;
}
.btn-remove-img:hover {
  background: #fff;
}

.file-upload-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  border: 2px dashed #d1d5db;
  border-radius: 8px;
  cursor: pointer;
  background: #fafafa;
  transition: all 0.2s;
}
.file-upload-box:hover {
  border-color: var(--primary);
  background: #f8fdfb;
}
.file-upload-box svg {
  color: #9ca3af;
  margin-bottom: 0.75rem;
}
.upload-text {
  font-size: 0.95rem;
  font-weight: 600;
  color: #374151;
  text-align: center;
}
.upload-subtext {
  font-size: 0.8rem;
  color: #9ca3af;
  margin-top: 0.25rem;
}
.file-input {
  display: none;
}
</style>
