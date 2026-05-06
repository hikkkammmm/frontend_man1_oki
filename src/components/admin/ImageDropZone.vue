<script setup lang="ts">
import { ref, computed } from 'vue'

const props = defineProps<{
  modelValue: string
  label?: string
  aspectRatio?: string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const isDragging = ref(false)
const fileInput = ref<HTMLInputElement | null>(null)

const previewUrl = computed(() => props.modelValue)

function handleDragEnter(e: DragEvent) {
  e.preventDefault()
  isDragging.value = true
}

function handleDragLeave(e: DragEvent) {
  e.preventDefault()
  isDragging.value = false
}

function handleDragOver(e: DragEvent) {
  e.preventDefault()
}

function handleDrop(e: DragEvent) {
  e.preventDefault()
  isDragging.value = false
  const files = e.dataTransfer?.files
  if (files && files.length > 0) {
    processFile(files[0])
  }
}

function handleFileSelect(e: Event) {
  const target = e.target as HTMLInputElement
  if (target.files && target.files.length > 0) {
    processFile(target.files[0])
  }
}

function processFile(file: File) {
  if (!file.type.startsWith('image/')) return
  const reader = new FileReader()
  reader.onload = (e) => {
    const result = e.target?.result as string
    emit('update:modelValue', result)
  }
  reader.readAsDataURL(file)
}

function triggerFileInput() {
  fileInput.value?.click()
}

function removeImage() {
  emit('update:modelValue', '')
}
</script>

<template>
  <div class="dropzone-wrapper">
    <label v-if="label" class="dropzone-label">{{ label }}</label>
    <div
      class="dropzone"
      :class="{ 'dragging': isDragging, 'has-image': !!previewUrl }"
      :style="{ aspectRatio: aspectRatio || '16/9' }"
      @dragenter="handleDragEnter"
      @dragleave="handleDragLeave"
      @dragover="handleDragOver"
      @drop="handleDrop"
      @click="!previewUrl && triggerFileInput()"
    >
      <!-- Preview -->
      <template v-if="previewUrl">
        <img :src="previewUrl" alt="Preview" class="dropzone-preview" />
        <div class="dropzone-actions">
          <button type="button" class="dz-btn replace" @click.stop="triggerFileInput()" title="Ganti gambar">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/></svg>
            Ganti
          </button>
          <button type="button" class="dz-btn remove" @click.stop="removeImage()" title="Hapus gambar">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>
            Hapus
          </button>
        </div>
      </template>

      <!-- Upload Prompt -->
      <template v-else>
        <div class="dropzone-prompt" :class="{ 'dragging': isDragging }">
          <div class="dz-icon-circle">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <rect width="18" height="18" x="3" y="3" rx="2"/>
              <circle cx="9" cy="9" r="2"/>
              <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
            </svg>
          </div>
          <p class="dz-text-main">
            <span v-if="isDragging">Lepaskan file di sini...</span>
            <span v-else>Seret & lepaskan foto di sini</span>
          </p>
          <p class="dz-text-sub">atau klik untuk memilih file</p>
          <p class="dz-text-hint">PNG, JPG, WEBP — Maks 5MB</p>
        </div>
      </template>
    </div>

    <!-- Hidden file input -->
    <input
      ref="fileInput"
      type="file"
      accept="image/*"
      style="display: none"
      @change="handleFileSelect"
    />

    <!-- URL input fallback -->
    <div class="url-fallback">
      <div class="url-divider">
        <span>atau masukkan URL</span>
      </div>
      <input
        :value="modelValue"
        @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
        type="text"
        class="field-input"
        placeholder="https://example.com/gambar.jpg atau /path/gambar.jpg"
      />
    </div>
  </div>
</template>

<style scoped>
.dropzone-wrapper {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.dropzone-label {
  font-size: 0.875rem;
  font-weight: 600;
  color: #374151;
}

.dropzone {
  position: relative;
  border: 2px dashed #d1d5db;
  border-radius: 14px;
  overflow: hidden;
  background: #f9fafb;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.dropzone:hover {
  border-color: #004532;
  background: #f0fdf4;
}

.dropzone.dragging {
  border-color: #004532;
  background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);
  border-style: solid;
  transform: scale(1.01);
  box-shadow: 0 0 0 4px rgba(0, 69, 50, 0.1);
}

.dropzone.has-image {
  cursor: default;
  border-style: solid;
  border-color: #e5e7eb;
}

.dropzone-preview {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.dropzone-actions {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  gap: 0.5rem;
  padding: 0.75rem;
  background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%);
  justify-content: flex-end;
  opacity: 0;
  transition: opacity 0.3s;
}

.dropzone:hover .dropzone-actions {
  opacity: 1;
}

.dz-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.45rem 0.85rem;
  border: none;
  border-radius: 8px;
  font-size: 0.78rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  backdrop-filter: blur(8px);
}

.dz-btn.replace {
  background: rgba(255,255,255,0.9);
  color: #004532;
}

.dz-btn.replace:hover {
  background: white;
}

.dz-btn.remove {
  background: rgba(239, 68, 68, 0.9);
  color: white;
}

.dz-btn.remove:hover {
  background: #ef4444;
}

.dropzone-prompt {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s;
}

.dropzone-prompt.dragging {
  transform: scale(1.05);
}

.dz-icon-circle {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: linear-gradient(135deg, #dcfce7 0%, #d1fae5 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #004532;
  margin-bottom: 0.5rem;
  transition: all 0.3s;
}

.dropzone:hover .dz-icon-circle,
.dropzone.dragging .dz-icon-circle {
  background: linear-gradient(135deg, #004532 0%, #00664a 100%);
  color: white;
  transform: scale(1.1);
}

.dz-text-main {
  font-size: 0.95rem;
  font-weight: 600;
  color: #374151;
}

.dz-text-sub {
  font-size: 0.85rem;
  color: #6b7280;
}

.dz-text-hint {
  font-size: 0.75rem;
  color: #9ca3af;
  margin-top: 0.25rem;
}

/* URL Fallback */
.url-fallback {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.url-divider {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.75rem;
  color: #9ca3af;
}

.url-divider::before,
.url-divider::after {
  content: '';
  flex: 1;
  height: 1px;
  background: #e5e7eb;
}

.field-input {
  padding: 0.65rem 0.875rem;
  border: 1.5px solid #e5e7eb;
  border-radius: 10px;
  font-size: 0.85rem;
  color: #111827;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;
  background: white;
  width: 100%;
  box-sizing: border-box;
  font-family: inherit;
}

.field-input:focus {
  border-color: #004532;
  box-shadow: 0 0 0 3px rgba(0, 69, 50, 0.1);
}
</style>
