<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="privacy-page page-container">
    <section class="page-hero">
      <div class="page-hero-overlay"></div>
      <div class="container page-hero-content animate-fade-in-up">
        <div class="breadcrumb">
          <RouterLink to="/">Beranda</RouterLink>
          <span>/</span>
          <span>Privacy Policy</span>
        </div>
        <h1 class="page-hero-title">Privacy Policy</h1>
        <p class="page-hero-subtitle">Kebijakan Privasi MAN 1 OKI</p>
      </div>
    </section>

    <section class="section">
      <div class="container prose">
        <h2>Kebijakan Privasi</h2>
        <p>Terakhir diperbarui: 24 April 2026</p>
        
        <h3>1. Informasi yang Kami Kumpulkan</h3>
        <p>Kami hanya mengumpulkan informasi yang Anda berikan secara sukarela saat mendaftar, berlangganan buletin, atau menghubungi kami melalui formulir kontak. Informasi ini mungkin termasuk nama, alamat email, nomor telepon, dan data relevan lainnya.</p>

        <h3>2. Penggunaan Informasi</h3>
        <p>Informasi yang dikumpulkan digunakan untuk keperluan akademik, pendaftaran siswa baru, komunikasi terkait jadwal, dan layanan bantuan madrasah. Kami tidak akan menjual atau menyewakan informasi pribadi Anda kepada pihak ketiga.</p>

        <h3>3. Keamanan Data</h3>
        <p>Kami berkomitmen untuk menjaga keamanan informasi pribadi Anda. Berbagai tindakan keamanan fisik, elektronik, dan manajerial telah diterapkan untuk mencegah akses tidak sah atau pengungkapan data.</p>

        <h3>4. Tautan ke Situs Lain</h3>
        <p>Situs kami mungkin berisi tautan ke situs web lain. Kami tidak bertanggung jawab atas praktik privasi atau konten situs web tersebut. Kami menyarankan Anda untuk membaca kebijakan privasi setiap situs yang Anda kunjungi.</p>

        <h3>5. Perubahan Kebijakan</h3>
        <p>MAN 1 OKI berhak untuk memperbarui kebijakan privasi ini kapan saja. Perubahan akan segera berlaku setelah dipublikasikan di halaman ini.</p>
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
