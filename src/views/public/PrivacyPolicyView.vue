<script setup lang="ts">
const heroImg = '/school_hero_1777021806911.png'
</script>

<template>
  <div class="privacy-page">
    <div class="page-header" :style="{ backgroundImage: `url(${heroImg})` }">
      <div class="header-overlay"></div>
      <div class="container relative z-10 text-center animate-fade-in-up">
        <h1 class="page-title">Privacy Policy</h1>
        <p class="page-subtitle">Kebijakan Privasi MAN 1 OKI</p>
      </div>
    </div>

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
