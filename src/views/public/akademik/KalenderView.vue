<script setup lang="ts">
const bulan = [
  {
    nama: 'Juli 2025',
    events: [
      { tgl: '14-15 Jul', nama: 'Masa Pengenalan Lingkungan Sekolah (MPLS)', warna: '#004532' },
      { tgl: '17 Jul', nama: 'Awal Tahun Pelajaran 2025/2026', warna: '#00664a' },
    ],
  },
  {
    nama: 'Agustus 2025',
    events: [
      { tgl: '17 Agt', nama: 'Upacara HUT RI ke-80', warna: '#c1a059' },
      { tgl: '25-29 Agt', nama: 'Penilaian Harian 1 (PH-1)', warna: '#004532' },
    ],
  },
  {
    nama: 'September 2025',
    events: [
      { tgl: '01-05 Sep', nama: 'Pekan Olahraga & Seni (PORSENI)', warna: '#c1a059' },
      { tgl: '22-26 Sep', nama: 'Penilaian Tengah Semester (PTS) Ganjil', warna: '#004532' },
    ],
  },
  {
    nama: 'Oktober 2025',
    events: [
      { tgl: '05 Okt', nama: 'Hari Guru Sedunia — Pembekalan Siswa', warna: '#00664a' },
      { tgl: '20-24 Okt', nama: 'Penilaian Harian 2 (PH-2)', warna: '#004532' },
    ],
  },
  {
    nama: 'November 2025',
    events: [
      { tgl: '10 Nov', nama: 'Upacara Hari Pahlawan', warna: '#c1a059' },
      { tgl: '24-28 Nov', nama: 'Penilaian Akhir Semester (PAS) Ganjil', warna: '#004532' },
    ],
  },
  {
    nama: 'Desember 2025',
    events: [
      { tgl: '12 Des', nama: 'Pembagian Raport Semester Ganjil', warna: '#c1a059' },
      { tgl: '22 Des-2 Jan', nama: 'Libur Semester Ganjil', warna: '#64748b' },
    ],
  },
  {
    nama: 'Januari 2026',
    events: [
      { tgl: '5 Jan', nama: 'Awal Semester Genap', warna: '#00664a' },
      { tgl: '19-23 Jan', nama: 'Penilaian Harian 1 Semester Genap', warna: '#004532' },
    ],
  },
  {
    nama: 'Februari 2026',
    events: [
      { tgl: '10-13 Feb', nama: 'Class Meeting & Kegiatan Literasi', warna: '#c1a059' },
      { tgl: '23-27 Feb', nama: 'Penilaian Tengah Semester (PTS) Genap', warna: '#004532' },
    ],
  },
  {
    nama: 'Maret 2026',
    events: [
      { tgl: '2-31 Mar', nama: 'Bulan Ramadhan — Pesantren Ramadhan', warna: '#c1a059' },
      { tgl: '27 Mar - 7 Apr', nama: 'Libur Hari Raya Idul Fitri', warna: '#64748b' },
    ],
  },
  {
    nama: 'April 2026',
    events: [
      { tgl: '8 Apr', nama: 'Masuk Sekolah Kembali', warna: '#00664a' },
      { tgl: '20-30 Apr', nama: 'Ujian Sekolah Kelas XII', warna: '#004532' },
    ],
  },
  {
    nama: 'Mei 2026',
    events: [
      { tgl: '1 Mei', nama: 'PPDB 2026/2027 Dibuka', warna: '#c1a059' },
      { tgl: '18-29 Mei', nama: 'Penilaian Akhir Semester (PAS) Genap', warna: '#004532' },
    ],
  },
  {
    nama: 'Juni 2026',
    events: [
      { tgl: '5 Jun', nama: 'Wisuda & Perpisahan Kelas XII', warna: '#c1a059' },
      { tgl: '15 Jun', nama: 'Pembagian Raport Semester Genap', warna: '#00664a' },
      { tgl: '22 Jun - 13 Jul', nama: 'Libur Kenaikan Kelas', warna: '#64748b' },
    ],
  },
]
</script>

<template>
  <div class="kalender-page">
    <section class="page-hero">
      <div class="page-hero-overlay"></div>
      <div class="container page-hero-content animate-fade-in-up">
        <div class="breadcrumb">
          <RouterLink to="/">Beranda</RouterLink><span>/</span> <span>Akademik</span><span>/</span>
          <span>Kalender Akademik</span>
        </div>
        <h1 class="page-hero-title">Kalender Akademik</h1>
        <p class="page-hero-subtitle">
          Tahun Pelajaran 2025/2026 — Jadwal kegiatan resmi madrasah sepanjang tahun.
        </p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="legend">
          <span class="legend-item"
            ><span class="legend-dot" style="background: #004532"></span>Penilaian / Ujian</span
          >
          <span class="legend-item"
            ><span class="legend-dot" style="background: #c1a059"></span>Kegiatan Sekolah</span
          >
          <span class="legend-item"
            ><span class="legend-dot" style="background: #00664a"></span>Hari Penting</span
          >
          <span class="legend-item"
            ><span class="legend-dot" style="background: #64748b"></span>Libur</span
          >
        </div>
        <div class="kalender-grid">
          <div v-for="bulanItem in bulan" :key="bulanItem.nama" class="bulan-card card">
            <div class="bulan-header">{{ bulanItem.nama }}</div>
            <div class="events-list">
              <div v-for="ev in bulanItem.events" :key="ev.nama" class="event-item">
                <div class="event-dot" :style="{ background: ev.warna }"></div>
                <div class="event-body">
                  <span class="event-tgl">{{ ev.tgl }}</span>
                  <span class="event-nama">{{ ev.nama }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.kalender-page {
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

.legend {
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  margin-bottom: 2.5rem;
}
.legend-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: var(--text-muted);
}
.legend-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  flex-shrink: 0;
}

.kalender-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}
@media (min-width: 640px) {
  .kalender-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (min-width: 1024px) {
  .kalender-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.bulan-card {
  overflow: hidden;
}
.bulan-header {
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%);
  color: white;
  padding: 1rem 1.5rem;
  font-weight: 700;
  font-size: 1rem;
}
.events-list {
  padding: 1rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.event-item {
  display: flex;
  gap: 0.75rem;
  align-items: flex-start;
}
.event-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  flex-shrink: 0;
  margin-top: 5px;
}
.event-body {
  flex: 1;
}
.event-tgl {
  display: block;
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--primary);
  margin-bottom: 0.1rem;
}
.event-nama {
  font-size: 0.875rem;
  color: var(--text-muted);
  line-height: 1.4;
}
@media (max-width: 768px) {
  .page-hero-title {
    font-size: 2rem;
  }
}
</style>
