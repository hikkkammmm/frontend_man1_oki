<script setup lang="ts"></script>

<template>
  <div class="sejarah-page">
    <section class="page-hero">
      <div class="page-hero-overlay"></div>
      <div class="container page-hero-content animate-fade-in-up">
        <div class="breadcrumb">
          <RouterLink to="/">Beranda</RouterLink>
          <span>/</span>
          <RouterLink to="/profil/visi-misi">Profil</RouterLink>
          <span>/</span>
          <span>Sejarah</span>
        </div>
        <h1 class="page-hero-title">Sejarah Madrasah</h1>
        <p class="page-hero-subtitle">
          Perjalanan panjang MAN 1 OKI dalam mendedikasikan diri untuk pendidikan Islam.
        </p>
      </div>
    </section>

    <section class="section">
      <div class="container max-w-4xl">
        <div class="prose mb-12 text-center">
          <p class="text-xl leading-relaxed text-muted">
            Berdiri sejak puluhan tahun yang lalu, MAN 1 Ogan Komering Ilir telah mengalami berbagai
            perkembangan baik dari segi fisik bangunan, fasilitas, maupun kualitas pendidikan yang
            ditawarkan. Berikut adalah tonggak sejarah penting madrasah kami.
          </p>
        </div>

        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-year">1978</div>
            <div class="timeline-content card">
              <h3 class="timeline-title">Awal Berdiri</h3>
              <p>
                Madrasah ini pada mulanya didirikan atas inisiatif tokoh masyarakat dan ulama
                setempat dengan nama awal PGAN (Pendidikan Guru Agama Negeri) 4 Tahun Kayuagung.
              </p>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-year">1990</div>
            <div class="timeline-content card">
              <h3 class="timeline-title">Alih Fungsi Menjadi MAN</h3>
              <p>
                Berdasarkan SK Menteri Agama, PGAN 4 Tahun dialihfungsikan menjadi Madrasah Aliyah
                Negeri (MAN) Kayuagung dengan fokus pendidikan menengah atas berciri khas agama
                Islam.
              </p>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-year">2005</div>
            <div class="timeline-content card">
              <h3 class="timeline-title">Pembangunan Fasilitas Terpadu</h3>
              <p>
                Mendapat bantuan revitalisasi madrasah yang mencakup pembangunan gedung kelas baru
                berlantai dua, laboratorium MIPA, dan perpustakaan digital.
              </p>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-year">2015</div>
            <div class="timeline-content card">
              <h3 class="timeline-title">Perubahan Nomenklatur</h3>
              <p>
                Mengalami perubahan nomenklatur menjadi MAN 1 Ogan Komering Ilir (MAN 1 OKI) seiring
                dengan penataan nama madrasah di seluruh wilayah Sumatera Selatan.
              </p>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-year">2023 - Sekarang</div>
            <div class="timeline-content card">
              <h3 class="timeline-title">Madrasah Berbasis Digital</h3>
              <p>
                Menerapkan sistem pembelajaran berbasis digital dan menjadi madrasah rujukan tingkat
                provinsi dalam bidang prestasi akademik sains dan teknologi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.sejarah-page {
  padding-top: 80px;
}

.max-w-4xl {
  max-width: 900px;
  margin: 0 auto;
}
.text-xl {
  font-size: 1.25rem;
}
.leading-relaxed {
  line-height: 1.8;
}
.text-muted {
  color: var(--text-muted);
}
.mb-12 {
  margin-bottom: 3rem;
}
.text-center {
  text-align: center;
}

/* Timeline Styles */
.timeline {
  position: relative;
  padding-left: 2rem;
}

.timeline::before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 11px;
  width: 4px;
  background-color: var(--primary-light);
  border-radius: 2px;
}

@media (min-width: 768px) {
  .timeline {
    padding-left: 0;
  }
  .timeline::before {
    left: 50%;
    transform: translateX(-50%);
  }
}

.timeline-item {
  position: relative;
  margin-bottom: 3rem;
}

.timeline-item:last-child {
  margin-bottom: 0;
}

@media (min-width: 768px) {
  .timeline-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .timeline-item:nth-child(odd) {
    flex-direction: row-reverse;
  }
}

.timeline-year {
  display: inline-block;
  padding: 0.5rem 1.5rem;
  background-color: var(--secondary);
  color: white;
  font-weight: 700;
  font-size: 1.125rem;
  border-radius: 2rem;
  margin-bottom: 1rem;
  position: relative;
  z-index: 2;
  box-shadow: 0 4px 10px rgba(193, 160, 89, 0.3);
}

@media (min-width: 768px) {
  .timeline-year {
    width: 200px;
    text-align: center;
    margin-bottom: 0;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
}

.timeline-content {
  padding: 1.5rem;
  position: relative;
  z-index: 1;
}

@media (min-width: 768px) {
  .timeline-content {
    width: calc(50% - 130px);
  }
}

.timeline-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--primary);
  margin-bottom: 0.5rem;
}

.timeline-content p {
  color: var(--text-muted);
  line-height: 1.6;
}
</style>
