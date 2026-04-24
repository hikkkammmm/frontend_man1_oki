<script setup lang="ts">
const heroImg = '/school_hero_1777021806911.png'
</script>

<template>
  <div class="pendaftaran-page">
    <div class="page-header" :style="{ backgroundImage: `url(${heroImg})` }">
      <div class="header-overlay"></div>
      <div class="container relative z-10 text-center animate-fade-in-up">
        <h1 class="page-title">Pendaftaran Siswa Baru</h1>
        <p class="page-subtitle">Informasi Penerimaan Peserta Didik Baru (PPDB) MAN 1 OKI</p>
      </div>
    </div>

    <section class="section">
      <div class="container max-w-4xl">
        <div class="card p-8">
          <h2 class="text-2xl font-bold text-center mb-6 text-primary">Alur Pendaftaran PPDB 2026/2027</h2>
          
          <div class="steps-container">
            <div class="step">
              <div class="step-number">1</div>
              <div class="step-content">
                <h3>Pembuatan Akun</h3>
                <p>Calon siswa membuat akun di portal PPDB MAN 1 OKI menggunakan NISN dan email aktif.</p>
              </div>
            </div>
            <div class="step">
              <div class="step-number">2</div>
              <div class="step-content">
                <h3>Pengisian Formulir</h3>
                <p>Melengkapi data diri, data orang tua, riwayat sekolah, dan mengunggah dokumen persyaratan (KK, Akta Kelahiran, Pas Foto).</p>
              </div>
            </div>
            <div class="step">
              <div class="step-number">3</div>
              <div class="step-content">
                <h3>Verifikasi Berkas</h3>
                <p>Panitia PPDB melakukan verifikasi dokumen yang telah diunggah oleh calon siswa secara online.</p>
              </div>
            </div>
            <div class="step">
              <div class="step-number">4</div>
              <div class="step-content">
                <h3>Ujian Seleksi</h3>
                <p>Calon siswa mengikuti tes tertulis berbasis komputer (CBT) dan wawancara sesuai jadwal yang ditentukan.</p>
              </div>
            </div>
            <div class="step">
              <div class="step-number">5</div>
              <div class="step-content">
                <h3>Pengumuman</h3>
                <p>Melihat hasil seleksi melalui portal PPDB dan melakukan daftar ulang bagi siswa yang dinyatakan lulus.</p>
              </div>
            </div>
          </div>

          <div class="text-center mt-8">
            <button class="btn btn-primary btn-lg">Daftar Sekarang</button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.page-header {
  position: relative;
  padding: 8rem 0 4rem;
  background-size: cover;
  background-position: center;
  color: white;
  margin-top: 0;
}

.header-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, rgba(0, 69, 50, 0.9) 0%, rgba(0, 69, 50, 0.6) 100%);
}

.relative { position: relative; }
.z-10 { z-index: 10; }

.page-title {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1rem;
}

.page-subtitle {
  font-size: 1.25rem;
  opacity: 0.9;
}

.max-w-4xl { max-width: 900px; margin: 0 auto; }
.p-8 { padding: 2rem; }
.text-2xl { font-size: 1.5rem; }
.font-bold { font-weight: 700; }
.text-primary { color: var(--primary); }

.steps-container {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 2rem;
}

.step {
  display: flex;
  gap: 1.5rem;
  align-items: flex-start;
}

.step-number {
  width: 48px;
  height: 48px;
  background-color: var(--secondary);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  font-weight: 700;
  flex-shrink: 0;
  box-shadow: 0 4px 10px rgba(193, 160, 89, 0.3);
}

.step-content h3 {
  font-size: 1.25rem;
  color: var(--dark);
  margin-bottom: 0.5rem;
}

.step-content p {
  color: var(--text-muted);
}

.btn-lg {
  padding: 1rem 2.5rem;
  font-size: 1.125rem;
}
</style>
