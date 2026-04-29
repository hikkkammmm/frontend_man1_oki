<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const activeDropdown = ref<string | null>(null)

const openDropdown = (name: string) => {
  activeDropdown.value = name
}
const closeDropdown = () => {
  activeDropdown.value = null
}

// Mobile expandable sections
const mobileExpanded = ref<Record<string, boolean>>({})
const toggleMobile = (key: string) => {
  mobileExpanded.value[key] = !mobileExpanded.value[key]
}

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
        <div class="dropdown" @mouseenter="openDropdown('profil')" @mouseleave="closeDropdown">
          <button class="nav-link dropdown-toggle">
            Profil
            <svg
              class="chevron"
              :class="{ rotate: activeDropdown === 'profil' }"
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
          <div class="dropdown-menu" :class="{ show: activeDropdown === 'profil' }">
            <RouterLink to="/profil/sejarah" class="dropdown-item">Sejarah Singkat</RouterLink>
            <RouterLink to="/profil/visi-misi" class="dropdown-item">Visi dan Misi</RouterLink>
            <RouterLink to="/profil/kepala-sekolah" class="dropdown-item"
              >Sambutan Kepala Sekolah</RouterLink
            >
            <RouterLink to="/profil/struktur" class="dropdown-item"
              >Struktur Organisasi</RouterLink
            >
            <RouterLink to="/profil/fasilitas" class="dropdown-item"
              >Fasilitas Sekolah</RouterLink
            >
          </div>
        </div>

        <!-- Dropdown Akademik -->
        <div class="dropdown" @mouseenter="openDropdown('akademik')" @mouseleave="closeDropdown">
          <button class="nav-link dropdown-toggle">
            Akademik
            <svg
              class="chevron"
              :class="{ rotate: activeDropdown === 'akademik' }"
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
          <div class="dropdown-menu" :class="{ show: activeDropdown === 'akademik' }">
            <RouterLink to="/akademik/kurikulum" class="dropdown-item">Kurikulum</RouterLink>
            <RouterLink to="/akademik/guru-staff" class="dropdown-item">Guru & Staff</RouterLink>
            <RouterLink to="/akademik/kalender" class="dropdown-item"
              >Kalender Akademik</RouterLink
            >
            <RouterLink to="/akademik/program-studi" class="dropdown-item"
              >Program Studi / Jurusan</RouterLink
            >
          </div>
        </div>

        <!-- Dropdown Kesiswaan -->
        <div class="dropdown" @mouseenter="openDropdown('kesiswaan')" @mouseleave="closeDropdown">
          <button class="nav-link dropdown-toggle">
            Kesiswaan
            <svg
              class="chevron"
              :class="{ rotate: activeDropdown === 'kesiswaan' }"
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
          <div class="dropdown-menu" :class="{ show: activeDropdown === 'kesiswaan' }">
            <RouterLink to="/kesiswaan/ekstrakurikuler" class="dropdown-item"
              >Ekstrakurikuler</RouterLink
            >
            <RouterLink to="/kesiswaan/organisasi" class="dropdown-item"
              >Organisasi Siswa (OSIS/MPK)</RouterLink
            >
            <RouterLink to="/kesiswaan/prestasi" class="dropdown-item"
              >Prestasi Siswa</RouterLink
            >
          </div>
        </div>

        <!-- Dropdown Informasi -->
        <div class="dropdown" @mouseenter="openDropdown('informasi')" @mouseleave="closeDropdown">
          <button class="nav-link dropdown-toggle">
            Informasi
            <svg
              class="chevron"
              :class="{ rotate: activeDropdown === 'informasi' }"
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
          <div class="dropdown-menu" :class="{ show: activeDropdown === 'informasi' }">
            <RouterLink to="/berita" class="dropdown-item">Berita / Artikel</RouterLink>
            <RouterLink to="/pengumuman" class="dropdown-item">Pengumuman</RouterLink>
            <RouterLink to="/galeri" class="dropdown-item">Galeri Foto &amp; Video</RouterLink>
          </div>
        </div>

        <!-- PPDB Button -->
        <RouterLink to="/ppdb" class="btn-ppdb-nav">PPDB 2026/2027</RouterLink>
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
          <button class="mobile-dropdown-header" @click="toggleMobile('profil')">
            Profil <span class="mobile-chevron" :class="{ rotate: mobileExpanded.profil }">▾</span>
          </button>
          <div class="mobile-dropdown-content" :class="{ expanded: mobileExpanded.profil }">
            <RouterLink
              to="/profil/sejarah"
              class="mobile-nav-link sub"
              @click="isMobileMenuOpen = false"
              >Sejarah Singkat</RouterLink
            >
            <RouterLink
              to="/profil/visi-misi"
              class="mobile-nav-link sub"
              @click="isMobileMenuOpen = false"
              >Visi dan Misi</RouterLink
            >
            <RouterLink
              to="/profil/kepala-sekolah"
              class="mobile-nav-link sub"
              @click="isMobileMenuOpen = false"
              >Sambutan Kepala Sekolah</RouterLink
            >
            <RouterLink
              to="/profil/struktur"
              class="mobile-nav-link sub"
              @click="isMobileMenuOpen = false"
              >Struktur Organisasi</RouterLink
            >
            <RouterLink
              to="/profil/fasilitas"
              class="mobile-nav-link sub"
              @click="isMobileMenuOpen = false"
              >Fasilitas Sekolah</RouterLink
            >
          </div>
        </div>

        <div class="mobile-dropdown">
          <button class="mobile-dropdown-header" @click="toggleMobile('akademik')">
            Akademik
            <span class="mobile-chevron" :class="{ rotate: mobileExpanded.akademik }">▾</span>
          </button>
          <div class="mobile-dropdown-content" :class="{ expanded: mobileExpanded.akademik }">
            <RouterLink
              to="/akademik/kurikulum"
              class="mobile-nav-link sub"
              @click="isMobileMenuOpen = false"
              >Kurikulum</RouterLink
            >
            <RouterLink
              to="/akademik/guru-staff"
              class="mobile-nav-link sub"
              @click="isMobileMenuOpen = false"
              >Guru &amp; Staff</RouterLink
            >
            <RouterLink
              to="/akademik/kalender"
              class="mobile-nav-link sub"
              @click="isMobileMenuOpen = false"
              >Kalender Akademik</RouterLink
            >
            <RouterLink
              to="/akademik/program-studi"
              class="mobile-nav-link sub"
              @click="isMobileMenuOpen = false"
              >Program Studi / Jurusan</RouterLink
            >
          </div>
        </div>

        <div class="mobile-dropdown">
          <button class="mobile-dropdown-header" @click="toggleMobile('kesiswaan')">
            Kesiswaan
            <span class="mobile-chevron" :class="{ rotate: mobileExpanded.kesiswaan }">▾</span>
          </button>
          <div class="mobile-dropdown-content" :class="{ expanded: mobileExpanded.kesiswaan }">
            <RouterLink
              to="/kesiswaan/ekstrakurikuler"
              class="mobile-nav-link sub"
              @click="isMobileMenuOpen = false"
              >Ekstrakurikuler</RouterLink
            >
            <RouterLink
              to="/kesiswaan/organisasi"
              class="mobile-nav-link sub"
              @click="isMobileMenuOpen = false"
              >Organisasi Siswa (OSIS/MPK)</RouterLink
            >
            <RouterLink
              to="/kesiswaan/prestasi"
              class="mobile-nav-link sub"
              @click="isMobileMenuOpen = false"
              >Prestasi Siswa</RouterLink
            >
          </div>
        </div>

        <div class="mobile-dropdown">
          <button class="mobile-dropdown-header" @click="toggleMobile('informasi')">
            Informasi
            <span class="mobile-chevron" :class="{ rotate: mobileExpanded.informasi }">▾</span>
          </button>
          <div class="mobile-dropdown-content" :class="{ expanded: mobileExpanded.informasi }">
            <RouterLink to="/berita" class="mobile-nav-link sub" @click="isMobileMenuOpen = false"
              >Berita / Artikel</RouterLink
            >
            <RouterLink
              to="/pengumuman"
              class="mobile-nav-link sub"
              @click="isMobileMenuOpen = false"
              >Pengumuman</RouterLink
            >
            <RouterLink to="/galeri" class="mobile-nav-link sub" @click="isMobileMenuOpen = false"
              >Galeri Foto &amp; Video</RouterLink
            >
          </div>
        </div>

        <RouterLink to="/ppdb" class="btn-ppdb-mobile" @click="isMobileMenuOpen = false"
          >🎓 PPDB 2026/2027</RouterLink
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
    gap: 1.25rem;
  }
}

.btn-ppdb-nav {
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 1.25rem;
  background: var(--secondary);
  color: #1a1a1a;
  border-radius: 2rem;
  font-weight: 700;
  font-size: 0.9rem;
  transition: var(--transition);
  white-space: nowrap;
  box-shadow: 0 2px 8px rgba(193, 160, 89, 0.35);
}

.btn-ppdb-nav:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(193, 160, 89, 0.5);
}

.btn-ppdb-mobile {
  display: block;
  text-align: center;
  padding: 0.75rem 1.5rem;
  background: var(--secondary);
  color: #1a1a1a;
  border-radius: var(--radius-md);
  font-weight: 700;
  margin-top: 0.5rem;
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
  background: none;
  border: none;
  width: 100%;
  text-align: left;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--gray-light);
}

.mobile-chevron {
  transition: transform 0.25s ease;
  display: inline-block;
}

.mobile-chevron.rotate {
  transform: rotate(180deg);
}

.mobile-dropdown-content {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding-top: 0;
  padding-bottom: 0;
  max-height: 0;
  overflow: hidden;
  transition:
    max-height 0.3s ease,
    padding 0.3s ease;
}

.mobile-dropdown-content.expanded {
  max-height: 400px;
  padding-top: 0.5rem;
  padding-bottom: 0.75rem;
}
</style>
