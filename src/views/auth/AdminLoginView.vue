<template>
  <div class="login-page">
    <!-- Animated background -->
    <div class="bg-shapes">
      <div class="shape shape-1"></div>
      <div class="shape shape-2"></div>
      <div class="shape shape-3"></div>
    </div>

    <div class="login-container">
      <!-- Left panel (decorative) -->
      <div class="login-left">
        <div class="left-content">
          <div class="school-logo">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
          </div>
          <h1 class="left-title">MAN 1 OKI</h1>
          <p class="left-subtitle">Madrasah Aliyah Negeri 1<br />Ogan Komering Ilir</p>
          <div class="left-divider"></div>
          <p class="left-tagline">Panel Administrasi Terpusat</p>
          <div class="left-features">
            <div class="feature-item">
              <div class="feature-dot"></div>
              <span>Kelola Konten Website</span>
            </div>
            <div class="feature-item">
              <div class="feature-dot"></div>
              <span>Manajemen Berita & Galeri</span>
            </div>
            <div class="feature-item">
              <div class="feature-dot"></div>
              <span>Informasi Pengumuman</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Right panel (form) -->
      <div class="login-right">
        <div class="login-form-wrapper">
          <div class="form-header">
            <h2 class="form-title">Selamat Datang</h2>
            <p class="form-subtitle">Masuk ke panel administrasi untuk mengelola konten madrasah.</p>
          </div>

          <form @submit.prevent="handleLogin" class="login-form" id="admin-login-form">
            <div class="field-group">
              <label for="username" class="field-label">Username</label>
              <div class="field-wrapper" :class="{ focused: usernameFocused, error: !!error }">
                <span class="field-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M20 21a8 8 0 1 0-16 0"/></svg>
                </span>
                <input
                  id="username"
                  v-model="username"
                  type="text"
                  placeholder="Masukkan username"
                  required
                  autocomplete="username"
                  @focus="usernameFocused = true"
                  @blur="usernameFocused = false"
                />
              </div>
            </div>

            <div class="field-group">
              <label for="password" class="field-label">Password</label>
              <div class="field-wrapper" :class="{ focused: passwordFocused, error: !!error }">
                <span class="field-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                </span>
                <input
                  id="password"
                  v-model="password"
                  :type="showPassword ? 'text' : 'password'"
                  placeholder="Masukkan password"
                  required
                  autocomplete="current-password"
                  @focus="passwordFocused = true"
                  @blur="passwordFocused = false"
                />
                <button type="button" class="toggle-pass" @click="showPassword = !showPassword" tabindex="-1">
                  <svg v-if="!showPassword" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
                  <svg v-else xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/><line x1="2" x2="22" y1="2" y2="22"/></svg>
                </button>
              </div>
            </div>

            <div v-if="error" class="error-box" id="login-error">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/></svg>
              <span>{{ error }}</span>
            </div>

            <button
              id="login-submit-btn"
              type="submit"
              class="login-btn"
              :class="{ loading: isLoading }"
              :disabled="isLoading"
            >
              <span v-if="!isLoading">Masuk ke Dashboard</span>
              <span v-else class="loading-text">
                <svg class="spin-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>
                Memproses...
              </span>
            </button>
          </form>

          <p class="login-hint">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
            Demo: <strong>admin</strong> / <strong>admin123</strong>
          </p>

          <div class="back-link">
            <RouterLink to="/">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
              Kembali ke Website
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const username = ref('')
const password = ref('')
const error = ref('')
const isLoading = ref(false)
const showPassword = ref(false)
const usernameFocused = ref(false)
const passwordFocused = ref(false)

async function handleLogin() {
  if (isLoading.value) return
  error.value = ''
  isLoading.value = true

  // Simulate network delay
  await new Promise((r) => setTimeout(r, 800))

  if (username.value === 'admin' && password.value === 'admin123') {
    localStorage.setItem('adminToken', 'demo-token-' + Date.now())
    localStorage.setItem('adminName', 'Administrator')
    router.push({ name: 'admin-dashboard' })
  } else {
    error.value = 'Username atau password salah. Silakan coba lagi.'
    isLoading.value = false
    setTimeout(() => (error.value = ''), 5000)
  }
}
</script>

<style scoped>
/* ============================
   Page Wrapper
   ============================ */
.login-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #0a0f1e;
  position: relative;
  overflow: hidden;
}

/* Animated shapes */
.bg-shapes {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.shape {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.15;
  animation: float 12s ease-in-out infinite alternate;
}

.shape-1 {
  width: 600px;
  height: 600px;
  background: #004532;
  top: -200px;
  left: -200px;
  animation-delay: 0s;
}

.shape-2 {
  width: 500px;
  height: 500px;
  background: #00845a;
  bottom: -150px;
  right: -100px;
  animation-delay: 3s;
}

.shape-3 {
  width: 350px;
  height: 350px;
  background: #b8860b;
  top: 50%;
  left: 40%;
  animation-delay: 6s;
  opacity: 0.08;
}

@keyframes float {
  from { transform: translate(0, 0) scale(1); }
  to { transform: translate(30px, -30px) scale(1.05); }
}

/* ============================
   Login Container
   ============================ */
.login-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  max-width: 960px;
  min-height: 580px;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.5);
  position: relative;
  z-index: 10;
  margin: 1.5rem;
}

/* ============================
   Left Panel
   ============================ */
.login-left {
  background: linear-gradient(145deg, #004532 0%, #006647 50%, #004532 100%);
  padding: 3rem 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.login-left::before {
  content: '';
  position: absolute;
  width: 300px;
  height: 300px;
  background: rgba(255, 255, 255, 0.04);
  border-radius: 50%;
  bottom: -100px;
  right: -100px;
}

.left-content {
  position: relative;
  z-index: 1;
  color: white;
}

.school-logo {
  width: 80px;
  height: 80px;
  background: rgba(255, 255, 255, 0.12);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.left-title {
  font-size: 2.25rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
  letter-spacing: -0.02em;
}

.left-subtitle {
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
  margin-bottom: 2rem;
}

.left-divider {
  width: 50px;
  height: 3px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 2px;
  margin-bottom: 1.5rem;
}

.left-tagline {
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 1.5rem;
}

.left-features {
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.75);
}

.feature-dot {
  width: 8px;
  height: 8px;
  background: #ffd700;
  border-radius: 50%;
  flex-shrink: 0;
}

/* ============================
   Right Panel (Form)
   ============================ */
.login-right {
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem 2.5rem;
}

.login-form-wrapper {
  width: 100%;
  max-width: 380px;
}

.form-header {
  margin-bottom: 2rem;
}

.form-title {
  font-size: 1.875rem;
  font-weight: 800;
  color: #111827;
  margin-bottom: 0.5rem;
  letter-spacing: -0.02em;
}

.form-subtitle {
  color: #6b7280;
  font-size: 0.9rem;
  line-height: 1.5;
}

/* Form Fields */
.login-form {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.field-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.field-label {
  font-size: 0.875rem;
  font-weight: 600;
  color: #374151;
}

.field-wrapper {
  display: flex;
  align-items: center;
  border: 1.5px solid #e5e7eb;
  border-radius: 12px;
  overflow: hidden;
  transition: border-color 0.2s, box-shadow 0.2s;
  background: #f9fafb;
}

.field-wrapper.focused {
  border-color: #004532;
  box-shadow: 0 0 0 3px rgba(0, 69, 50, 0.1);
  background: white;
}

.field-wrapper.error {
  border-color: #ef4444;
  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
}

.field-icon {
  padding: 0 0.875rem;
  color: #9ca3af;
  display: flex;
  align-items: center;
  flex-shrink: 0;
}

.field-wrapper.focused .field-icon {
  color: #004532;
}

.field-wrapper input {
  flex: 1;
  border: none;
  background: transparent;
  padding: 0.875rem 0;
  font-size: 0.9rem;
  color: #111827;
  outline: none;
}

.field-wrapper input::placeholder {
  color: #9ca3af;
}

.toggle-pass {
  background: none;
  border: none;
  cursor: pointer;
  color: #9ca3af;
  display: flex;
  align-items: center;
  padding: 0 0.875rem;
  transition: color 0.2s;
}

.toggle-pass:hover {
  color: #004532;
}

/* Error Box */
.error-box {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  background: #fef2f2;
  border: 1px solid #fecaca;
  border-radius: 10px;
  color: #dc2626;
  font-size: 0.875rem;
}

/* Login Button */
.login-btn {
  width: 100%;
  padding: 0.9rem;
  background: linear-gradient(135deg, #004532, #00845a);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  margin-top: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.login-btn:hover:not(:disabled) {
  background: linear-gradient(135deg, #003828, #006647);
  box-shadow: 0 6px 20px rgba(0, 69, 50, 0.35);
  transform: translateY(-1px);
}

.login-btn:active:not(:disabled) {
  transform: translateY(0);
}

.login-btn:disabled {
  opacity: 0.75;
  cursor: not-allowed;
}

.loading-text {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.spin-icon {
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

/* Hint */
.login-hint {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  font-size: 0.8rem;
  color: #9ca3af;
  text-align: center;
  justify-content: center;
  margin-top: 1.25rem;
}

.login-hint strong {
  color: #004532;
  background: #f0fdf4;
  padding: 0.1rem 0.4rem;
  border-radius: 4px;
}

/* Back Link */
.back-link {
  margin-top: 1.5rem;
  text-align: center;
}

.back-link a {
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  font-size: 0.875rem;
  color: #6b7280;
  text-decoration: none;
  transition: color 0.2s;
}

.back-link a:hover {
  color: #004532;
}

/* ============================
   Responsive
   ============================ */
@media (max-width: 700px) {
  .login-container {
    grid-template-columns: 1fr;
    margin: 1rem;
  }

  .login-left {
    padding: 2rem 1.75rem;
  }

  .left-features {
    display: none;
  }

  .login-right {
    padding: 2rem 1.75rem;
  }
}
</style>
