<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="tos-page page-container">
    <section class="page-hero">
      <div class="page-hero-overlay"></div>
      <div class="container page-hero-content animate-fade-in-up">
        <div class="breadcrumb">
          <RouterLink to="/">Beranda</RouterLink>
          <span>/</span>
          <span>Terms of Service</span>
        </div>
        <h1 class="page-hero-title">Terms of Service</h1>
        <p class="page-hero-subtitle">Syarat dan Ketentuan Layanan MAN 1 OKI</p>
      </div>
    </section>

    <section class="section">
      <div class="container prose">
        <h2>Syarat dan Ketentuan Layanan</h2>
        <p>Terakhir diperbarui: 24 April 2026</p>
        
        <h3>1. Penerimaan Syarat</h3>
        <p>Dengan mengakses dan menggunakan situs web MAN 1 OKI, Anda menyetujui untuk terikat oleh Syarat dan Ketentuan Layanan ini. Jika Anda tidak setuju dengan bagian mana pun dari syarat ini, Anda tidak diperkenankan untuk menggunakan situs kami.</p>

        <h3>2. Penggunaan Situs</h3>
        <p>Situs ini ditujukan untuk memberikan informasi terkait aktivitas akademik, pendaftaran siswa baru, dan layanan terkait madrasah. Anda setuju untuk menggunakan situs ini hanya untuk tujuan yang sah dan dengan cara yang tidak melanggar hak atau membatasi penggunaan situs oleh pihak lain.</p>

        <h3>3. Hak Kekayaan Intelektual</h3>
        <p>Seluruh konten, desain, logo, dan materi lain yang terdapat di situs ini adalah milik MAN 1 OKI dan dilindungi oleh undang-undang hak cipta. Penggunaan tanpa izin tertulis dari kami dilarang keras.</p>

        <h3>4. Penyangkalan (Disclaimer)</h3>
        <p>Informasi yang disediakan di situs ini adalah untuk tujuan informasi umum saja. Meskipun kami berusaha untuk menjaga informasi tetap akurat dan mutakhir, kami tidak membuat jaminan atas kelengkapan, keakuratan, atau keandalan informasi tersebut.</p>

        <h3>5. Perubahan Ketentuan</h3>
        <p>MAN 1 OKI berhak untuk mengubah atau mengganti Syarat dan Ketentuan Layanan ini kapan saja tanpa pemberitahuan sebelumnya. Penggunaan berkelanjutan Anda atas situs ini setelah adanya perubahan merupakan penerimaan Anda terhadap ketentuan baru tersebut.</p>
      </div>
    </section>
  </div>
</template>

<style scoped>
.prose {
  max-width: 800px;
  margin: 0 auto;
}

.prose h2 {
  font-size: 2rem;
  color: var(--primary);
  margin-bottom: 0.5rem;
}

.prose h3 {
  font-size: 1.5rem;
  color: var(--dark);
  margin-top: 2rem;
  margin-bottom: 1rem;
}

.prose p {
  margin-bottom: 1rem;
  color: var(--text-muted);
  line-height: 1.8;
}
</style>
