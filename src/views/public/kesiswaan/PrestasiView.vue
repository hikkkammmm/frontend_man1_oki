<script setup lang="ts">
import { ref } from 'vue'

const activeFilter = ref('semua')
const filters = ['semua', 'akademik', 'olahraga', 'seni', 'agama']
const filterLabel: Record<string, string> = {
  semua: 'Semua',
  akademik: 'Akademik',
  olahraga: 'Olahraga',
  seni: 'Seni & Budaya',
  agama: 'Keagamaan',
}

const prestasi = [
  {
    id: 1,
    judul: 'Juara 1 Olimpiade Sains Nasional Bidang Fisika',
    tingkat: 'Nasional',
    tahun: '2025',
    kategori: 'akademik',
    medal: '🥇',
    siswa: 'M. Fauzan Pratama, XII MIPA 2',
  },
  {
    id: 2,
    judul: 'Juara 2 Lomba Karya Tulis Ilmiah Remaja Tingkat Provinsi',
    tingkat: 'Provinsi',
    tahun: '2025',
    kategori: 'akademik',
    medal: '🥈',
    siswa: 'Anisa Rahmawati & Deni F., XI',
  },
  {
    id: 3,
    judul: 'Juara 1 Futsal Piala Bupati OKI',
    tingkat: 'Kabupaten',
    tahun: '2025',
    kategori: 'olahraga',
    medal: '🥇',
    siswa: 'Tim Futsal MAN 1 OKI',
  },
  {
    id: 4,
    judul: 'Juara 3 Festival Seni Islami Tingkat Provinsi',
    tingkat: 'Provinsi',
    tahun: '2024',
    kategori: 'seni',
    medal: '🥉',
    siswa: 'Tim Seni MAN 1 OKI',
  },
  {
    id: 5,
    judul: "Juara 1 Hafidz Qur'an 30 Juz Tingkat Nasional",
    tingkat: 'Nasional',
    tahun: '2024',
    kategori: 'agama',
    medal: '🥇',
    siswa: 'Nabilah Azzahra, XII Agama',
  },
  {
    id: 6,
    judul: 'Juara 2 Debat Bahasa Inggris Madrasah Aliyah Tingkat Nasional',
    tingkat: 'Nasional',
    tahun: '2024',
    kategori: 'akademik',
    medal: '🥈',
    siswa: 'Tim Debat MAN 1 OKI',
  },
  {
    id: 7,
    judul: 'Juara 1 Lomba Kaligrafi Tingkat Provinsi Sumsel',
    tingkat: 'Provinsi',
    tahun: '2024',
    kategori: 'seni',
    medal: '🥇',
    siswa: 'Siti Khodijah, XII IPS 1',
  },
  {
    id: 8,
    judul: 'Juara 2 Bola Voli Putri O2SN Tingkat Kabupaten',
    tingkat: 'Kabupaten',
    tahun: '2024',
    kategori: 'olahraga',
    medal: '🥈',
    siswa: 'Tim Voli Putri MAN 1 OKI',
  },
  {
    id: 9,
    judul: 'Juara 1 Matematika OSN Tingkat Kabupaten',
    tingkat: 'Kabupaten',
    tahun: '2024',
    kategori: 'akademik',
    medal: '🥇',
    siswa: 'Wahyu Hidayat, XI IPS 1',
  },
  {
    id: 10,
    judul: 'Juara 1 Azan & Iqamah Tingkat Provinsi',
    tingkat: 'Provinsi',
    tahun: '2023',
    kategori: 'agama',
    medal: '🥇',
    siswa: 'Taufiqurrahman, XII MIPA 3',
  },
  {
    id: 11,
    judul: 'Juara 3 Desain Poster Digital Nasional',
    tingkat: 'Nasional',
    tahun: '2023',
    kategori: 'seni',
    medal: '🥉',
    siswa: 'Rina Amalia, XI IPS 2',
  },
  {
    id: 12,
    judul: 'Best Speaker Lomba Pidato Bahasa Arab',
    tingkat: 'Provinsi',
    tahun: '2023',
    kategori: 'agama',
    medal: '⭐',
    siswa: 'Laila Nur Azizah, XII MIPA 1',
  },
]

const tingkatColor: Record<string, string> = {
  Nasional: '#004532',
  Provinsi: '#c1a059',
  Kabupaten: '#00664a',
}

const filtered = () => {
  if (activeFilter.value === 'semua') return prestasi
  return prestasi.filter((p) => p.kategori === activeFilter.value)
}
</script>

<template>
  <div class="prestasi-page">
    <section class="page-hero">
      <div class="page-hero-overlay"></div>
      <div class="container page-hero-content animate-fade-in-up">
        <div class="breadcrumb">
          <RouterLink to="/">Beranda</RouterLink><span>/</span> <span>Kesiswaan</span><span>/</span>
          <span>Prestasi Siswa</span>
        </div>
        <h1 class="page-hero-title">Prestasi Siswa</h1>
        <p class="page-hero-subtitle">
          Torehan kebanggaan dari putra-putri terbaik MAN 1 OKI di berbagai bidang kompetisi.
        </p>
      </div>
    </section>

    <!-- Stats -->
    <section class="section section-alt">
      <div class="container stats-row">
        <div class="stat-card card">
          <span class="stat-icon">🏆</span>
          <span class="stat-num"
            >{{ prestasi.filter((p) => p.tingkat === 'Nasional').length }}+</span
          >
          <span class="stat-label">Prestasi Nasional</span>
        </div>
        <div class="stat-card card">
          <span class="stat-icon">🌟</span>
          <span class="stat-num"
            >{{ prestasi.filter((p) => p.tingkat === 'Provinsi').length }}+</span
          >
          <span class="stat-label">Prestasi Provinsi</span>
        </div>
        <div class="stat-card card">
          <span class="stat-icon">🎖️</span>
          <span class="stat-num">{{ prestasi.length }}+</span>
          <span class="stat-label">Total Prestasi</span>
        </div>
        <div class="stat-card card">
          <span class="stat-icon">🥇</span>
          <span class="stat-num">{{ prestasi.filter((p) => p.medal === '🥇').length }}</span>
          <span class="stat-label">Juara Pertama</span>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="filter-bar">
          <button
            v-for="f in filters"
            :key="f"
            class="filter-btn"
            :class="{ active: activeFilter === f }"
            @click="activeFilter = f"
          >
            {{ filterLabel[f] }}
          </button>
        </div>

        <div class="prestasi-grid">
          <div v-for="p in filtered()" :key="p.id" class="prestasi-card card animate-fade-in-up">
            <div class="prestasi-medal">{{ p.medal }}</div>
            <div class="prestasi-body">
              <div class="prestasi-meta-top">
                <span
                  class="tingkat-badge"
                  :style="{ background: tingkatColor[p.tingkat] ?? '#64748b' }"
                  >{{ p.tingkat }}</span
                >
                <span class="tahun">{{ p.tahun }}</span>
              </div>
              <h3 class="prestasi-judul">{{ p.judul }}</h3>
              <p class="prestasi-siswa">👤 {{ p.siswa }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.prestasi-page {
  padding-top: 80px;
}
.page-hero {
  position: relative;
  padding: 7rem 0 4rem;
  background: linear-gradient(135deg, var(--primary-dark) 0%, var(--primary) 100%);
}
.page-hero-overlay {
  position: absolute;
  inset: 0;
  background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}
.page-hero-content {
  position: relative;
  color: white;
}
.breadcrumb {
  display: flex;
  gap: 0.5rem;
  align-items: center;
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
  opacity: 0.8;
}
.breadcrumb a {
  color: var(--secondary);
}
.page-hero-title {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1rem;
}
.page-hero-subtitle {
  font-size: 1.2rem;
  opacity: 0.85;
  max-width: 600px;
}

.stats-row {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}
@media (min-width: 768px) {
  .stats-row {
    grid-template-columns: repeat(4, 1fr);
  }
}
.stat-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1rem;
  gap: 0.5rem;
}
.stat-icon {
  font-size: 2.5rem;
}
.stat-num {
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--primary);
}
.stat-label {
  font-size: 0.875rem;
  color: var(--text-muted);
  text-align: center;
  font-weight: 600;
}

.filter-bar {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 2.5rem;
}
.filter-btn {
  padding: 0.4rem 1rem;
  border-radius: 2rem;
  border: 2px solid var(--gray-light);
  background: transparent;
  color: var(--text-muted);
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition);
  font-size: 0.875rem;
}
.filter-btn.active,
.filter-btn:hover {
  background: var(--primary);
  border-color: var(--primary);
  color: white;
}

.prestasi-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;
}
@media (min-width: 768px) {
  .prestasi-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.prestasi-card {
  display: flex;
  gap: 1rem;
  padding: 1.5rem;
  align-items: flex-start;
}
.prestasi-medal {
  font-size: 2.5rem;
  flex-shrink: 0;
}
.prestasi-body {
  flex: 1;
}
.prestasi-meta-top {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.5rem;
}
.tingkat-badge {
  display: inline-block;
  padding: 0.15rem 0.75rem;
  border-radius: 2rem;
  color: white;
  font-size: 0.75rem;
  font-weight: 700;
}
.tahun {
  font-size: 0.8rem;
  color: var(--text-muted);
  font-weight: 600;
}
.prestasi-judul {
  font-size: 1rem;
  font-weight: 700;
  color: var(--dark);
  line-height: 1.4;
  margin-bottom: 0.5rem;
}
.prestasi-siswa {
  font-size: 0.85rem;
  color: var(--text-muted);
}
@media (max-width: 768px) {
  .page-hero-title {
    font-size: 2rem;
  }
}
</style>
