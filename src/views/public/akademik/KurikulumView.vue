<script setup lang="ts">
const kurikulum = [
  {
    kode: 'K-13',
    nama: 'Kurikulum 2013 (K-13)',
    deskripsi:
      'Diterapkan pada kelas yang masih dalam masa transisi. Menekankan pada sikap, pengetahuan, dan keterampilan secara terpadu.',
    warna: '#004532',
  },
  {
    kode: 'MER',
    nama: 'Kurikulum Merdeka',
    deskripsi:
      'Kurikulum terbaru yang berpusat pada peserta didik (student-centered), fleksibel, dan mendorong pembelajaran berbasis proyek (PBL).',
    warna: '#c1a059',
  },
  {
    kode: 'KMA',
    nama: 'Kurikulum Kemenag',
    deskripsi:
      "Tambahan muatan mata pelajaran khas madrasah: Al-Qur'an Hadits, Akidah Akhlak, Fikih, SKI, dan Bahasa Arab sesuai KMA 183 & 184.",
    warna: '#00664a',
  },
]

const mapelWajib = [
  'Pendidikan Agama Islam',
  'Pancasila & Kewarganegaraan',
  'Bahasa Indonesia',
  'Matematika',
  'Sejarah Indonesia',
  'Bahasa Inggris',
  'PJOK',
  'Seni Budaya',
  'Prakarya & Kewirausahaan',
]
const mapelMadrasah = [
  "Al-Qur'an Hadits",
  'Akidah Akhlak',
  'Fikih',
  'Sejarah Kebudayaan Islam (SKI)',
  'Bahasa Arab',
]
const mapelPeminatan = [
  'Matematika & IPA (MIPA)',
  'Ilmu Sosial (IPS)',
  'Ilmu Bahasa & Budaya',
  'Agama & Ilmu Agama Islam',
]
</script>

<template>
  <div class="kurikulum-page">
    <section class="page-hero">
      <div class="page-hero-overlay"></div>
      <div class="container page-hero-content animate-fade-in-up">
        <div class="breadcrumb">
          <RouterLink to="/">Beranda</RouterLink><span>/</span> <span>Akademik</span><span>/</span>
          <span>Kurikulum</span>
        </div>
        <h1 class="page-hero-title">Kurikulum</h1>
        <p class="page-hero-subtitle">
          Landasan akademik yang membentuk kompetensi siswa secara holistik.
        </p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h2 class="section-title">Kerangka Kurikulum</h2>
        <div class="kurnas-grid">
          <div v-for="k in kurikulum" :key="k.kode" class="kurnas-card card">
            <div class="kurnas-badge" :style="{ background: k.warna }">{{ k.kode }}</div>
            <h3 class="kurnas-nama">{{ k.nama }}</h3>
            <p class="kurnas-desc">{{ k.deskripsi }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-alt">
      <div class="container">
        <h2 class="section-title">Struktur Mata Pelajaran</h2>
        <div class="mapel-wrapper">
          <div class="mapel-group card">
            <div class="mapel-group-header" style="background: var(--primary)">
              <span class="mapel-group-icon">📚</span>
              <h3>Mata Pelajaran Wajib</h3>
            </div>
            <ul class="mapel-list">
              <li v-for="m in mapelWajib" :key="m" class="mapel-item">
                <span class="mapel-dot"></span>{{ m }}
              </li>
            </ul>
          </div>
          <div class="mapel-group card">
            <div class="mapel-group-header" style="background: #c1a059">
              <span class="mapel-group-icon">🕌</span>
              <h3>Muatan Khas Madrasah</h3>
            </div>
            <ul class="mapel-list">
              <li v-for="m in mapelMadrasah" :key="m" class="mapel-item">
                <span class="mapel-dot"></span>{{ m }}
              </li>
            </ul>
          </div>
          <div class="mapel-group card">
            <div class="mapel-group-header" style="background: var(--primary-light)">
              <span class="mapel-group-icon">🎯</span>
              <h3>Kelompok Peminatan</h3>
            </div>
            <ul class="mapel-list">
              <li v-for="m in mapelPeminatan" :key="m" class="mapel-item">
                <span class="mapel-dot"></span>{{ m }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.kurikulum-page {
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

.kurnas-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}
@media (min-width: 768px) {
  .kurnas-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
.kurnas-card {
  padding: 2rem;
}
.kurnas-badge {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  border-radius: 2rem;
  color: white;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 1px;
  margin-bottom: 1rem;
}
.kurnas-nama {
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
}
.kurnas-desc {
  color: var(--text-muted);
  line-height: 1.7;
}

.mapel-wrapper {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}
@media (min-width: 768px) {
  .mapel-wrapper {
    grid-template-columns: repeat(3, 1fr);
  }
}
.mapel-group {
  overflow: hidden;
}
.mapel-group-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.25rem 1.5rem;
  color: white;
}
.mapel-group-header h3 {
  font-size: 1.05rem;
  font-weight: 700;
}
.mapel-group-icon {
  font-size: 1.5rem;
}
.mapel-list {
  padding: 1.25rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
.mapel-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.95rem;
  color: var(--text-muted);
}
.mapel-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--primary);
  flex-shrink: 0;
}
@media (max-width: 768px) {
  .page-hero-title {
    font-size: 2rem;
  }
}
</style>
