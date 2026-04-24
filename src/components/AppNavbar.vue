<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)
const isProfilDropdownOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header :class="['navbar', { scrolled: isScrolled }]">
    <div class="container navbar-container">
      <RouterLink to="/" class="logo">
        <img src="../assets\logo fiks.jpeg" alt="MAN 1 OKI Logo" class="logo-image" />
        <span class="logo-text">MAN 1 OKI</span>
      </RouterLink>

      <!-- Desktop Nav -->
      <nav class="nav-links desktop-nav">
        <RouterLink to="/" class="nav-link">Beranda</RouterLink>

        <!-- Dropdown Profil -->
        <div
          class="dropdown"
          @mouseenter="isProfilDropdownOpen = true"
          @mouseleave="isProfilDropdownOpen = false"
        >
          <button class="nav-link dropdown-toggle">
            Profil
            <svg
              class="chevron"
              :class="{ rotate: isProfilDropdownOpen }"
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
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>
          <div class="dropdown-menu" :class="{ show: isProfilDropdownOpen }">
            <RouterLink to="/profil/visi-misi" class="dropdown-item">Visi Misi</RouterLink>
            <RouterLink to="/profil/kepala-sekolah" class="dropdown-item"
              >Kepala Sekolah</RouterLink
            >
            <RouterLink to="/profil/sejarah" class="dropdown-item">Sejarah</RouterLink>
            <RouterLink to="/profil/struktur" class="dropdown-item">Struktur Keguruan</RouterLink>
          </div>
        </div>

        <RouterLink to="/berita" class="nav-link">Berita</RouterLink>
        <RouterLink to="/pengumuman" class="nav-link">Pengumuman</RouterLink>
        <RouterLink to="/kegiatan" class="nav-link">Kegiatan</RouterLink>
        <RouterLink to="/galeri" class="nav-link">Galeri</RouterLink>
      </nav>

      <!-- Mobile Menu Toggle -->
      <button class="mobile-toggle" @click="isMobileMenuOpen = !isMobileMenuOpen">
        <svg
          v-if="!isMobileMenuOpen"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <line x1="4" x2="20" y1="12" y2="12" />
          <line x1="4" x2="20" y1="6" y2="6" />
          <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M18 6 6 18" />
          <path d="m6 6 12 12" />
        </svg>
      </button>
    </div>

    <!-- Mobile Nav -->
    <div class="mobile-nav" :class="{ open: isMobileMenuOpen }">
      <div class="mobile-nav-inner">
        <RouterLink to="/" class="mobile-nav-link" @click="isMobileMenuOpen = false"
          >Beranda</RouterLink
        >

        <div class="mobile-dropdown">
          <div class="mobile-dropdown-header">Profil</div>
          <div class="mobile-dropdown-content">
            <RouterLink
              to="/profil/visi-misi"
              class="mobile-nav-link sub"
              @click="isMobileMenuOpen = false"
              >Visi Misi</RouterLink
            >
            <RouterLink
              to="/profil/kepala-sekolah"
              class="mobile-nav-link sub"
              @click="isMobileMenuOpen = false"
              >Kepala Sekolah</RouterLink
            >
            <RouterLink
              to="/profil/sejarah"
              class="mobile-nav-link sub"
              @click="isMobileMenuOpen = false"
              >Sejarah</RouterLink
            >
            <RouterLink
              to="/profil/struktur"
              class="mobile-nav-link sub"
              @click="isMobileMenuOpen = false"
              >Struktur</RouterLink
            >
          </div>
        </div>

        <RouterLink to="/berita" class="mobile-nav-link" @click="isMobileMenuOpen = false"
          >Berita</RouterLink
        >
        <RouterLink to="/pengumuman" class="mobile-nav-link" @click="isMobileMenuOpen = false"
          >Pengumuman</RouterLink
        >
        <RouterLink to="/kegiatan" class="mobile-nav-link" @click="isMobileMenuOpen = false"
          >Kegiatan</RouterLink
        >
        <RouterLink to="/galeri" class="mobile-nav-link" @click="isMobileMenuOpen = false"
          >Galeri</RouterLink
        >
      </div>
    </div>
  </header>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 50;
  transition: var(--transition);
  background-color: transparent;
  padding: 1.5rem 0;
}

.navbar.scrolled {
  background-color: var(--glass-bg);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--glass-border);
  padding: 1rem 0;
  box-shadow: var(--shadow-sm);
}

.navbar-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.logo-image {
  height: 40px;
  width: auto;
  object-fit: contain;
}

.logo-text {
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: -0.5px;
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.desktop-nav {
  display: none;
}

@media (min-width: 1024px) {
  .desktop-nav {
    display: flex;
    align-items: center;
    gap: 2rem;
  }
}

.nav-link {
  font-weight: 500;
  color: var(--text-main);
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  background: none;
  border: none;
  font-size: 1rem;
  cursor: pointer;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--primary);
  transition: var(--transition);
}

.nav-link:hover::after,
.nav-link.router-link-active::after {
  width: 100%;
}

.dropdown {
  position: relative;
}

.chevron {
  transition: transform 0.2s ease;
}

.chevron.rotate {
  transform: rotate(180deg);
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 220px;
  background-color: var(--bg-main);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-lg);
  padding: 0.5rem 0;
  opacity: 0;
  visibility: hidden;
  transform: translateY(10px);
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  border: 1px solid var(--gray-light);
  margin-top: 1rem;
}

.dropdown-menu.show {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.dropdown-item {
  display: block;
  padding: 0.75rem 1.5rem;
  color: var(--text-main);
  font-weight: 500;
  transition: var(--transition);
}

.dropdown-item:hover {
  background-color: var(--bg-alt);
  color: var(--primary);
  padding-left: 2rem;
}

.mobile-toggle {
  display: block;
  background: none;
  border: none;
  color: var(--text-main);
  cursor: pointer;
  padding: 0.5rem;
}

@media (min-width: 1024px) {
  .mobile-toggle {
    display: none;
  }
}

.mobile-nav {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: var(--bg-main);
  border-bottom: 1px solid var(--gray-light);
  overflow: hidden;
  max-height: 0;
  transition: max-height 0.4s ease-out;
}

.mobile-nav.open {
  max-height: 100vh;
  box-shadow: var(--shadow-md);
}

.mobile-nav-inner {
  padding: 1rem 1.5rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.mobile-nav-link {
  display: block;
  font-size: 1.1rem;
  font-weight: 500;
  padding: 0.5rem 0;
  border-bottom: 1px solid var(--gray-light);
}

.mobile-nav-link.sub {
  font-size: 0.95rem;
  padding-left: 1rem;
  border-bottom: none;
  color: var(--text-muted);
}

.mobile-dropdown-header {
  font-weight: 600;
  font-size: 1.1rem;
  padding: 0.5rem 0;
  color: var(--primary);
}

.mobile-dropdown-content {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid var(--gray-light);
}
</style>
