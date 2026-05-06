<script setup lang="ts">
const organisasi = [
  {
    nama: 'OSIS (Organisasi Siswa Intra Sekolah)',
    icon: '🏛️',
    warna: '#004532',
    deskripsi:
      'OSIS adalah satu-satunya wadah organisasi siswa yang sah di madrasah. OSIS bertanggung jawab dalam merencanakan, melaksanakan, dan mengevaluasi program kegiatan kesiswaan.',
    pengurus: [
      { jabatan: 'Ketua OSIS', nama: 'Muhammad Fauzan, XII MIPA 2' },
      { jabatan: 'Wakil Ketua I', nama: 'Siti Khodijah, XII IPS 1' },
      { jabatan: 'Wakil Ketua II', nama: 'Rifki Pratama, XI MIPA 1' },
      { jabatan: 'Sekretaris I', nama: 'Anisa Rahmawati, XI IPS 2' },
      { jabatan: 'Sekretaris II', nama: 'Deni Firmansyah, XI MIPA 3' },
      { jabatan: 'Bendahara I', nama: 'Laila Nur Azizah, XII MIPA 1' },
      { jabatan: 'Bendahara II', nama: 'Wahyu Hidayat, XI IPS 1' },
    ],
    program: [
      'Pekan Orientasi Siswa (MPLS)',
      'Peringatan Hari Besar Nasional & Islam',
      'Porseni Antar Kelas',
      'Bakti Sosial & Donor Darah',
      'Seminar Motivasi & Karir',
    ],
  },
  {
    nama: 'MPK (Majelis Perwakilan Kelas)',
    icon: '🎖️',
    warna: '#c1a059',
    deskripsi:
      'MPK adalah lembaga legislatif di tingkat sekolah yang berfungsi mengawasi kinerja OSIS, menyusun Garis Besar Program Kerja (GBPK), dan memilih Ketua OSIS setiap tahunnya.',
    pengurus: [
      { jabatan: 'Ketua MPK', nama: 'Nabilah Azzahra, XII Agama' },
      { jabatan: 'Wakil Ketua', nama: 'Taufiqurrahman, XII MIPA 3' },
      { jabatan: 'Sekretaris', nama: 'Putri Maharani, XI Agama' },
    ],
    program: [
      'Pengawasan Program Kerja OSIS',
      'Pemilihan Ketua OSIS (Pemilu Siswa)',
      'Penyusunan GBPK Tahunan',
      'Dengar Pendapat Anggota',
    ],
  },
]
</script>

<template>
  <div class="osis-page">
    <section class="page-hero">
      <div class="page-hero-overlay"></div>
      <div class="container page-hero-content animate-fade-in-up">
        <div class="breadcrumb">
          <RouterLink to="/">Beranda</RouterLink><span>/</span> <span>Kesiswaan</span><span>/</span>
          <span>Organisasi Siswa</span>
        </div>
        <h1 class="page-hero-title">Organisasi Siswa</h1>
        <p class="page-hero-subtitle">
          OSIS & MPK — Mengembangkan jiwa kepemimpinan, demokrasi, dan tanggung jawab sosial.
        </p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="org-list">
          <div v-for="org in organisasi" :key="org.nama" class="org-card card animate-fade-in-up">
            <div
              class="org-header"
              :style="{ background: `linear-gradient(135deg, ${org.warna}dd, ${org.warna})` }"
            >
              <span class="org-icon">{{ org.icon }}</span>
              <h2 class="org-nama">{{ org.nama }}</h2>
            </div>
            <div class="org-body">
              <p class="org-desc">{{ org.deskripsi }}</p>
              <div class="org-details">
                <div>
                  <h4 class="detail-title">👥 Struktur Pengurus 2025/2026</h4>
                  <div class="pengurus-list">
                    <div v-for="p in org.pengurus" :key="p.jabatan" class="pengurus-item">
                      <span class="pengurus-jabatan">{{ p.jabatan }}</span>
                      <span class="pengurus-nama">{{ p.nama }}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 class="detail-title">📋 Program Kerja Unggulan</h4>
                  <ul class="program-list">
                    <li v-for="p in org.program" :key="p">{{ p }}</li>
                  </ul>
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
.osis-page {
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

.org-list {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}
.org-card {
  overflow: hidden;
}
.org-header {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 2rem;
  color: white;
}
.org-icon {
  font-size: 3rem;
  flex-shrink: 0;
}
.org-nama {
  font-size: 1.5rem;
  font-weight: 700;
}
.org-body {
  padding: 2rem;
}
.org-desc {
  color: var(--text-muted);
  line-height: 1.8;
  margin-bottom: 2rem;
  font-size: 1.05rem;
}
.org-details {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}
@media (min-width: 768px) {
  .org-details {
    grid-template-columns: repeat(2, 1fr);
  }
}
.detail-title {
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--dark);
}

.pengurus-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.pengurus-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding: 0.6rem 1rem;
  background: var(--bg-alt);
  border-radius: var(--radius-sm);
  border-left: 3px solid var(--primary);
}
.pengurus-jabatan {
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--primary);
  white-space: nowrap;
}
.pengurus-nama {
  font-size: 0.875rem;
  color: var(--text-muted);
  text-align: right;
}

.program-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.program-list li {
  padding: 0.6rem 1rem;
  background: var(--bg-alt);
  border-radius: var(--radius-sm);
  font-size: 0.9rem;
  color: var(--text-muted);
  border-left: 3px solid var(--secondary);
}
@media (max-width: 768px) {
  .page-hero-title {
    font-size: 2rem;
  }
}
</style>
