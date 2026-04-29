<script setup lang="ts">
const jurusan = [
  {
    kode: 'MIPA',
    nama: 'Matematika & Ilmu Pengetahuan Alam',
    icon: '🔬',
    warna: '#004532',
    deskripsi: 'Menyiapkan siswa untuk melanjutkan ke perguruan tinggi di bidang sains, teknologi, teknik, dan kedokteran (STEM). Siswa akan mendalami Matematika, Fisika, Kimia, dan Biologi secara intensif.',
    mapel: ['Matematika Peminatan', 'Fisika', 'Kimia', 'Biologi'],
    prospek: ['Kedokteran & Kesehatan', 'Teknik & Rekayasa', 'Sains & Penelitian', 'Teknologi Informasi'],
    kuota: 120,
  },
  {
    kode: 'IPS',
    nama: 'Ilmu Pengetahuan Sosial',
    icon: '🌍',
    warna: '#c1a059',
    deskripsi: 'Mempersiapkan siswa untuk mengkaji fenomena sosial, ekonomi, dan budaya. Cocok bagi siswa yang bercita-cita di bidang ekonomi, hukum, ilmu komunikasi, dan pemerintahan.',
    mapel: ['Ekonomi', 'Sosiologi', 'Geografi', 'Sejarah Peminatan'],
    prospek: ['Ekonomi & Bisnis', 'Hukum & Pemerintahan', 'Komunikasi & Jurnalistik', 'Ilmu Sosial & Politik'],
    kuota: 90,
  },
  {
    kode: 'IBB',
    nama: 'Ilmu Bahasa & Budaya',
    icon: '📖',
    warna: '#00664a',
    deskripsi: 'Program yang mengasah kemampuan literasi, linguistik, dan apresiasi sastra serta budaya. Ideal bagi siswa dengan minat kuat pada bahasa asing, sastra, dan dunia komunikasi internasional.',
    mapel: ['Bahasa & Sastra Indonesia', 'Bahasa & Sastra Inggris', 'Bahasa Asing Lainnya', 'Antropologi'],
    prospek: ['Sastra & Linguistik', 'Diplomasi & Hubungan Internasional', 'Penerjemahan & Interpreting', 'Jurnalistik & Media'],
    kuota: 60,
  },
  {
    kode: 'AGAMA',
    nama: 'Agama & Ilmu Agama Islam',
    icon: '🕌',
    warna: '#8B6914',
    deskripsi: 'Program unggulan khas madrasah yang mendalami ilmu-ilmu keislaman secara komprehensif. Mencetak generasi berakhlak mulia yang mampu berkontribusi dalam dunia pendidikan agama dan dakwah.',
    mapel: ['Tafsir', 'Hadits', 'Fikih', 'Ilmu Kalam', 'Akhlak Tasawuf', 'Sejarah Islam'],
    prospek: ['IAIN / UIN / Perguruan Tinggi Agama', 'Pendidikan Agama Islam', 'Dakwah & Penyuluhan', 'Hukum Islam (Syariah)'],
    kuota: 60,
  },
]
</script>

<template>
  <div class="jurusan-page">
    <section class="page-hero">
      <div class="page-hero-overlay"></div>
      <div class="container page-hero-content animate-fade-in-up">
        <div class="breadcrumb">
          <RouterLink to="/">Beranda</RouterLink><span>/</span>
          <span>Akademik</span><span>/</span>
          <span>Jurusan</span>
        </div>
        <h1 class="page-hero-title">Jurusan</h1>
        <p class="page-hero-subtitle">Pilih jalur akademik yang sesuai dengan minat, bakat, dan impian masa depanmu.</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="jurusan-list">
          <div v-for="j in jurusan" :key="j.kode" class="jurusan-card card animate-fade-in-up">
            <div class="jurusan-header" :style="{ background: `linear-gradient(135deg, ${j.warna}dd, ${j.warna})` }">
              <span class="jurusan-icon">{{ j.icon }}</span>
              <div>
                <span class="jurusan-kode">{{ j.kode }}</span>
                <h2 class="jurusan-nama">{{ j.nama }}</h2>
              </div>
              <div class="jurusan-kuota">
                <span class="kuota-num">{{ j.kuota }}</span>
                <span class="kuota-label">Kuota Siswa</span>
              </div>
            </div>
            <div class="jurusan-body">
              <p class="jurusan-desc">{{ j.deskripsi }}</p>
              <div class="jurusan-details">
                <div class="detail-col">
                  <h4 class="detail-title">📚 Mata Pelajaran Peminatan</h4>
                  <ul class="detail-list">
                    <li v-for="m in j.mapel" :key="m">{{ m }}</li>
                  </ul>
                </div>
                <div class="detail-col">
                  <h4 class="detail-title">🎯 Prospek Perguruan Tinggi</h4>
                  <ul class="detail-list">
                    <li v-for="p in j.prospek" :key="p">{{ p }}</li>
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
.jurusan-page { padding-top: 80px; }
.page-hero {
  position: relative; padding: 6rem 0 4rem;
  background: linear-gradient(135deg, var(--primary-dark) 0%, var(--primary) 100%);
}
.page-hero-overlay {
  position: absolute; inset: 0;
  background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}
.page-hero-content { position: relative; color: white; }
.breadcrumb { display: flex; gap: 0.5rem; align-items: center; font-size: 0.9rem; margin-bottom: 1.5rem; opacity: 0.8; }
.breadcrumb a { color: var(--secondary); }
.page-hero-title { font-size: 3rem; font-weight: 800; margin-bottom: 1rem; }
.page-hero-subtitle { font-size: 1.2rem; opacity: 0.85; max-width: 600px; }

.jurusan-list { display: flex; flex-direction: column; gap: 2rem; }
.jurusan-card { overflow: hidden; }
.jurusan-header {
  display: flex; align-items: center; gap: 1.5rem;
  padding: 2rem; color: white; flex-wrap: wrap;
}
.jurusan-icon { font-size: 3rem; flex-shrink: 0; }
.jurusan-kode { font-size: 0.8rem; font-weight: 700; opacity: 0.8; letter-spacing: 2px; text-transform: uppercase; }
.jurusan-nama { font-size: 1.4rem; font-weight: 700; flex: 1; }
.jurusan-kuota { text-align: center; margin-left: auto; }
.kuota-num { display: block; font-size: 2.5rem; font-weight: 800; }
.kuota-label { font-size: 0.8rem; opacity: 0.8; }

.jurusan-body { padding: 2rem; }
.jurusan-desc { color: var(--text-muted); line-height: 1.8; margin-bottom: 2rem; font-size: 1.05rem; }
.jurusan-details { display: grid; grid-template-columns: 1fr; gap: 2rem; }
@media (min-width: 768px) { .jurusan-details { grid-template-columns: repeat(2, 1fr); } }
.detail-title { font-weight: 700; margin-bottom: 1rem; color: var(--dark); }
.detail-list { display: flex; flex-direction: column; gap: 0.5rem; }
.detail-list li {
  padding: 0.5rem 1rem; background: var(--bg-alt);
  border-radius: var(--radius-sm); font-size: 0.9rem; color: var(--text-muted);
  border-left: 3px solid var(--primary);
}
@media (max-width: 768px) { .page-hero-title { font-size: 2rem; } }
</style>
