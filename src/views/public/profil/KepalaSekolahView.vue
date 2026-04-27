<script setup lang="ts">
const heroImg = '/school_hero_1777021806911.png'
const principalImg = '/principal_portrait_1777021823882.png'
</script>

<template>
  <div class="kepsek-page">
    <div class="page-header" :style="{ backgroundImage: `url(${heroImg})` }">
      <div class="header-overlay"></div>
      <div class="container relative z-10 text-center animate-fade-in-up">
        <h1 class="page-title">Kepala Sekolah</h1>
        <p class="page-subtitle">Profil pimpinan Madrasah Aliyah Negeri 1 Ogan Komering Ilir.</p>
      </div>
    </div>

    <section class="section">
      <div class="container max-w-5xl">
        <div class="profile-grid">
          <div class="profile-image-col">
            <div class="image-wrapper">
              <div class="bg-accent"></div>
              <img :src="principalImg" alt="Kepala Sekolah" class="kepsek-img">
            </div>
            <div class="contact-info mt-6 card p-6 text-center">
              <h4 class="font-bold mb-2">Kontak</h4>
              <p class="text-muted">kepsek@man1oki.sch.id</p>
              <p class="text-muted">+62 812 3456 7890</p>
            </div>
          </div>
          
          <div class="profile-content-col">
            <h2 class="text-4xl font-bold text-dark mb-2">Drs. H. Ahmad Dahlan, M.Pd.</h2>
            <p class="text-primary font-semibold text-lg mb-6">Kepala Madrasah MAN 1 OKI</p>
            
            <div class="prose">
              <h3>Riwayat Pendidikan</h3>
              <ul>
                <li>S1 Pendidikan Agama Islam - UIN Raden Fatah Palembang</li>
                <li>S2 Manajemen Pendidikan - Universitas Negeri Jakarta</li>
              </ul>

              <h3>Pengalaman Karir</h3>
              <ul>
                <li>Guru PAI di MAN 1 OKI (1995 - 2005)</li>
                <li>Wakil Kepala Madrasah Bidang Kurikulum (2005 - 2012)</li>
                <li>Kepala MTsN 1 OKI (2012 - 2018)</li>
                <li>Kepala MAN 1 OKI (2018 - Sekarang)</li>
              </ul>

              <h3>Pesan & Harapan</h3>
              <p>
                "Pendidikan di madrasah bukan hanya tentang mentransfer ilmu pengetahuan, tetapi juga menanamkan nilai-nilai akhlakul karimah. Kami di MAN 1 OKI berkomitmen penuh untuk mengawal peserta didik tidak hanya sukses secara akademis sehingga mampu bersaing di perguruan tinggi favorit, tetapi juga sukses menjadi pribadi yang bermanfaat bagi agama, nusa, dan bangsa."
              </p>
            </div>
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

.max-w-5xl { max-width: 1000px; margin: 0 auto; }
.text-4xl { font-size: 2.25rem; }
.text-lg { font-size: 1.125rem; }
.font-bold { font-weight: 700; }
.font-semibold { font-weight: 600; }
.text-primary { color: var(--primary); }
.text-dark { color: var(--dark); }
.text-muted { color: var(--text-muted); }
.p-6 { padding: 1.5rem; }

.profile-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
}

@media (min-width: 768px) {
  .profile-grid {
    grid-template-columns: 1fr 2fr;
    gap: 4rem;
  }
}

.image-wrapper {
  position: relative;
  padding-top: 1rem;
  padding-left: 1rem;
}

.bg-accent {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--secondary);
  border-radius: var(--radius-lg);
  z-index: 0;
}

.kepsek-img {
  position: relative;
  width: 100%;
  border-radius: var(--radius-lg);
  z-index: 1;
  box-shadow: var(--shadow-lg);
  display: block;
}

.prose h3 {
  font-size: 1.25rem;
  color: var(--dark);
  margin-top: 2rem;
  margin-bottom: 1rem;
  border-bottom: 2px solid var(--gray-light);
  padding-bottom: 0.5rem;
}

.prose ul {
  list-style-type: disc;
  padding-left: 1.5rem;
  color: var(--text-muted);
  margin-bottom: 1.5rem;
}

.prose li {
  margin-bottom: 0.5rem;
  line-height: 1.6;
}

.prose p {
  color: var(--text-muted);
  line-height: 1.8;
  font-style: italic;
  background-color: var(--bg-alt);
  padding: 1.5rem;
  border-left: 4px solid var(--primary);
  border-radius: 0 var(--radius-md) var(--radius-md) 0;
}
</style>
