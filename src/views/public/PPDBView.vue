<script setup lang="ts">
const syarat = [
  { no: 1, syarat: 'Ijazah / Surat Keterangan Lulus (SKL) dari SMP/MTs/Sederajat' },
  { no: 2, syarat: 'Foto copy Kartu Keluarga (KK) yang masih berlaku' },
  { no: 3, syarat: 'Foto copy Akta Kelahiran' },
  { no: 4, syarat: 'Foto copy rapor SMP/MTs semester 1-5' },
  { no: 5, syarat: 'Pas foto terbaru ukuran 3x4 (4 lembar) latar belakang merah' },
  { no: 6, syarat: 'Surat Keterangan Sehat dari dokter/puskesmas' },
  { no: 7, syarat: 'Piagam / Sertifikat Prestasi (jika ada, sebagai nilai tambah)' },
]

const alur = [
  { step: 1, icon: '📋', title: 'Daftar Online', desc: 'Isi formulir pendaftaran online melalui portal PPDB atau datang langsung ke panitia PPDB MAN 1 OKI.' },
  { step: 2, icon: '📄', title: 'Lengkapi Berkas', desc: 'Siapkan dan serahkan seluruh berkas persyaratan ke bagian administrasi madrasah.' },
  { step: 3, icon: '✅', title: 'Verifikasi Berkas', desc: 'Panitia akan memverifikasi kelengkapan dan keabsahan dokumen yang diserahkan.' },
  { step: 4, icon: '📝', title: 'Seleksi & Tes', desc: 'Calon peserta didik mengikuti tes akademik dan tes baca Al-Qur\'an (BTQ).' },
  { step: 5, icon: '📢', title: 'Pengumuman', desc: 'Hasil seleksi diumumkan secara resmi melalui website dan papan pengumuman madrasah.' },
  { step: 6, icon: '🎓', title: 'Daftar Ulang', desc: 'Peserta yang diterima wajib melakukan daftar ulang dan membayar biaya administrasi yang ditentukan.' },
]

const jadwal = [
  { kegiatan: 'Pendaftaran Online / Offline', mulai: '1 Mei 2026', selesai: '30 Mei 2026' },
  { kegiatan: 'Verifikasi Berkas', mulai: '1 Jun 2026', selesai: '5 Jun 2026' },
  { kegiatan: 'Seleksi Tes Akademik & BTQ', mulai: '8 Jun 2026', selesai: '10 Jun 2026' },
  { kegiatan: 'Pengumuman Hasil Seleksi', mulai: '14 Jun 2026', selesai: '-' },
  { kegiatan: 'Daftar Ulang', mulai: '15 Jun 2026', selesai: '20 Jun 2026' },
  { kegiatan: 'Awal Tahun Pelajaran 2026/2027', mulai: '14 Jul 2026', selesai: '-' },
]
</script>

<template>
  <div class="ppdb-page">
    <!-- Hero -->
    <section class="ppdb-hero">
      <div class="ppdb-hero-overlay"></div>
      <div class="container ppdb-hero-content animate-fade-in-up">
        <span class="hero-badge">PPDB 2026/2027</span>
        <h1 class="hero-title">Penerimaan Peserta Didik Baru</h1>
        <p class="hero-sub">MAN 1 OKI membuka pendaftaran siswa baru Tahun Pelajaran 2026/2027. Bergabunglah bersama kami dan raih masa depan yang cerah!</p>
        <div class="hero-actions">
          <a href="#daftar" class="btn btn-ppdb">Daftar Sekarang</a>
          <a href="#syarat" class="btn btn-ppdb-outline">Lihat Syarat</a>
        </div>
        <div class="hero-stats">
          <div class="hstat">
            <span class="hstat-num">330</span>
            <span class="hstat-label">Kuota Siswa Baru</span>
          </div>
          <div class="hstat-divider"></div>
          <div class="hstat">
            <span class="hstat-num">4</span>
            <span class="hstat-label">Program Studi</span>
          </div>
          <div class="hstat-divider"></div>
          <div class="hstat">
            <span class="hstat-num">Gratis</span>
            <span class="hstat-label">Biaya Pendaftaran</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Alur Pendaftaran -->
    <section class="section" id="alur">
      <div class="container">
        <h2 class="section-title">Alur Pendaftaran</h2>
        <div class="alur-grid">
          <div v-for="a in alur" :key="a.step" class="alur-card card animate-fade-in-up">
            <div class="alur-step">{{ a.step }}</div>
            <span class="alur-icon">{{ a.icon }}</span>
            <h3 class="alur-title">{{ a.title }}</h3>
            <p class="alur-desc">{{ a.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Jadwal & Syarat -->
    <section class="section section-alt" id="syarat">
      <div class="container">
        <div class="jadwal-syarat-grid">
          <!-- Jadwal -->
          <div>
            <h2 class="section-title" style="text-align:left; margin-bottom:1.5rem">📅 Jadwal PPDB</h2>
            <div class="jadwal-table card">
              <div class="jadwal-header jadwal-row">
                <span>Kegiatan</span>
                <span>Mulai</span>
                <span>Selesai</span>
              </div>
              <div v-for="j in jadwal" :key="j.kegiatan" class="jadwal-row jadwal-body-row">
                <span class="jadwal-kegiatan">{{ j.kegiatan }}</span>
                <span class="jadwal-date">{{ j.mulai }}</span>
                <span class="jadwal-date">{{ j.selesai }}</span>
              </div>
            </div>
          </div>

          <!-- Syarat -->
          <div>
            <h2 class="section-title" style="text-align:left; margin-bottom:1.5rem">📋 Persyaratan Dokumen</h2>
            <div class="syarat-list">
              <div v-for="s in syarat" :key="s.no" class="syarat-item card">
                <span class="syarat-no">{{ s.no }}</span>
                <p class="syarat-text">{{ s.syarat }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Daftar -->
    <section class="section" id="daftar">
      <div class="container">
        <div class="cta-box">
          <div class="cta-content">
            <h2 class="cta-title">Siap Bergabung?</h2>
            <p class="cta-sub">Hubungi panitia PPDB MAN 1 OKI atau kunjungi madrasah langsung untuk informasi lebih lanjut.</p>
            <div class="cta-contacts">
              <div class="contact-item">
                <span class="contact-icon">📞</span>
                <div>
                  <div class="contact-label">Telepon / WhatsApp</div>
                  <div class="contact-val">0812-3456-7890</div>
                </div>
              </div>
              <div class="contact-item">
                <span class="contact-icon">📧</span>
                <div>
                  <div class="contact-label">Email</div>
                  <div class="contact-val">ppdb@man1oki.sch.id</div>
                </div>
              </div>
              <div class="contact-item">
                <span class="contact-icon">📍</span>
                <div>
                  <div class="contact-label">Alamat</div>
                  <div class="contact-val">Jl. Lintas Sumatera, Kayuagung, Kab. OKI, Sumatera Selatan</div>
                </div>
              </div>
            </div>
          </div>
          <a href="https://wa.me/6281234567890" target="_blank" class="btn btn-ppdb cta-btn">
            Hubungi via WhatsApp
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.ppdb-page { padding-top: 80px; }

/* Hero */
.ppdb-hero {
  position: relative;
  min-height: 70vh;
  display: flex; align-items: center;
  background: linear-gradient(135deg, #003325 0%, #004532 40%, #1a5c45 100%);
  overflow: hidden;
}
.ppdb-hero-overlay {
  position: absolute; inset: 0;
  background: url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c1a059' fill-opacity='0.05'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}
.ppdb-hero-content { position: relative; color: white; padding: 4rem 0; }
.hero-badge {
  display: inline-block; padding: 0.5rem 1.25rem;
  border-radius: 2rem; background: var(--secondary); color: #1a1a1a;
  font-weight: 700; font-size: 0.875rem; letter-spacing: 1px; margin-bottom: 1.5rem;
}
.hero-title { font-size: 3.5rem; font-weight: 800; line-height: 1.2; margin-bottom: 1.25rem; }
.hero-sub { font-size: 1.15rem; opacity: 0.85; max-width: 620px; margin-bottom: 2.5rem; line-height: 1.7; }
.hero-actions { display: flex; gap: 1rem; margin-bottom: 3rem; flex-wrap: wrap; }

.btn-ppdb {
  display: inline-flex; align-items: center; justify-content: center;
  padding: 0.85rem 2rem; border-radius: var(--radius-md); font-weight: 700;
  background: var(--secondary); color: #1a1a1a; border: none; cursor: pointer;
  font-size: 1rem; transition: var(--transition); box-shadow: 0 4px 15px rgba(193,160,89,0.4);
}
.btn-ppdb:hover { transform: translateY(-3px); box-shadow: 0 8px 25px rgba(193,160,89,0.5); }
.btn-ppdb-outline {
  display: inline-flex; align-items: center; justify-content: center;
  padding: 0.85rem 2rem; border-radius: var(--radius-md); font-weight: 700;
  background: transparent; color: white; border: 2px solid rgba(255,255,255,0.5);
  cursor: pointer; font-size: 1rem; transition: var(--transition);
}
.btn-ppdb-outline:hover { border-color: white; background: rgba(255,255,255,0.1); }

.hero-stats { display: flex; align-items: center; gap: 2rem; flex-wrap: wrap; }
.hstat { text-align: center; }
.hstat-num { display: block; font-size: 2rem; font-weight: 800; color: var(--secondary); }
.hstat-label { font-size: 0.8rem; opacity: 0.7; }
.hstat-divider { width: 1px; height: 40px; background: rgba(255,255,255,0.2); }

/* Alur */
.alur-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem; }
@media (min-width: 768px) { .alur-grid { grid-template-columns: repeat(3, 1fr); } }
.alur-card { padding: 2rem; text-align: center; position: relative; }
.alur-step {
  width: 32px; height: 32px; border-radius: 50%;
  background: var(--primary); color: white; font-weight: 700; font-size: 0.875rem;
  display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem;
}
.alur-icon { font-size: 2.5rem; display: block; margin-bottom: 0.75rem; }
.alur-title { font-size: 1.1rem; font-weight: 700; margin-bottom: 0.5rem; }
.alur-desc { color: var(--text-muted); font-size: 0.875rem; line-height: 1.6; }

/* Jadwal & Syarat */
.jadwal-syarat-grid { display: grid; grid-template-columns: 1fr; gap: 3rem; }
@media (min-width: 1024px) { .jadwal-syarat-grid { grid-template-columns: 1fr 1fr; } }

.jadwal-table { overflow: hidden; }
.jadwal-row { display: grid; grid-template-columns: 2fr 1fr 1fr; padding: 0.75rem 1.25rem; gap: 0.5rem; align-items: center; }
.jadwal-header { background: var(--primary); color: white; font-weight: 700; font-size: 0.875rem; }
.jadwal-body-row { border-bottom: 1px solid var(--gray-light); font-size: 0.875rem; }
.jadwal-body-row:last-child { border-bottom: none; }
.jadwal-kegiatan { color: var(--text-main); font-weight: 500; }
.jadwal-date { color: var(--primary); font-weight: 600; }

.syarat-list { display: flex; flex-direction: column; gap: 0.75rem; }
.syarat-item { display: flex; align-items: center; gap: 1rem; padding: 1rem 1.25rem; }
.syarat-no {
  width: 32px; height: 32px; border-radius: 50%; flex-shrink: 0;
  background: var(--primary); color: white; font-weight: 700; font-size: 0.875rem;
  display: flex; align-items: center; justify-content: center;
}
.syarat-text { font-size: 0.925rem; color: var(--text-muted); line-height: 1.5; }

/* CTA */
.cta-box {
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%);
  border-radius: var(--radius-lg); padding: 3rem;
  display: flex; align-items: center; justify-content: space-between; gap: 2rem; flex-wrap: wrap;
}
.cta-content { flex: 1; color: white; }
.cta-title { font-size: 2rem; font-weight: 800; margin-bottom: 0.75rem; }
.cta-sub { opacity: 0.85; margin-bottom: 1.5rem; line-height: 1.7; }
.cta-contacts { display: flex; flex-direction: column; gap: 1rem; }
.contact-item { display: flex; align-items: flex-start; gap: 0.75rem; }
.contact-icon { font-size: 1.25rem; }
.contact-label { font-size: 0.75rem; opacity: 0.75; font-weight: 600; letter-spacing: 0.5px; }
.contact-val { font-weight: 600; font-size: 0.95rem; }
.cta-btn { flex-shrink: 0; font-size: 1.1rem; padding: 1rem 2.5rem; }

@media (max-width: 768px) {
  .hero-title { font-size: 2rem; }
  .cta-box { flex-direction: column; }
  .alur-grid { grid-template-columns: 1fr; }
}
</style>
