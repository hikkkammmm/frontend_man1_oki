<script setup lang="ts">
// Images sourced from public folder dynamically
const heroImg = '/school_hero_1777021806911.png'
const principalImg = '/principal_portrait_1777021823882.png'
const activityImg = '/student_activities_1777021842318.png'

const beritaList = [
  {
    id: 1,
    title: 'Juara 1 Olimpiade Sains Nasional',
    desc: 'Siswa MAN 1 OKI kembali mengukir prestasi di kancah nasional dalam bidang Fisika.',
    date: '24 Apr 2026',
    img: activityImg,
  },
  {
    id: 2,
    title: 'Peringatan Hari Guru Nasional 2026',
    desc: 'Upacara dan pentas seni dalam rangka memeriahkan hari guru nasional. Berbagai kegiatan menarik disajikan.',
    date: '25 Nov 2025',
    img: heroImg,
  },
  {
    id: 3,
    title: 'Kunjungan Edukasi ke Universitas Indonesia',
    desc: 'Membuka wawasan siswa kelas 12 dengan melakukan kunjungan ke kampus UI.',
    date: '10 Nov 2025',
    img: activityImg,
  },
]

const pengumumanList = [
  { id: 1, title: 'Pendaftaran Siswa Baru (PPDB) 2026/2027 Dibuka', date: '01 Mei 2026' },
  { id: 2, title: 'Jadwal Ujian Akhir Semester Genap', date: '20 Mei 2026' },
  { id: 3, title: 'Pengambilan Raport Semester Genap', date: '15 Jun 2026' },
]

const kegiatanList = [
  { id: 1, name: 'Pramuka', icon: '⛺' },
  { id: 2, name: 'Rohis', icon: '🕌' },
  { id: 3, name: 'Paskibra', icon: '🇮🇩' },
  { id: 4, name: 'PMR', icon: '⚕️' },
  { id: 5, name: 'Karya Ilmiah Remaja', icon: '🔬' },
  { id: 6, name: 'Olah Raga', icon: '⚽' },
]

const galeriList = [heroImg, activityImg, heroImg, activityImg, heroImg, activityImg]
</script>

<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-bg" :style="{ backgroundImage: `url(${heroImg})` }"></div>
      <div class="hero-overlay"></div>
      <div class="container hero-content animate-fade-in-up">
        <span class="hero-badge">Unggul & Berakhlak Mulia</span>
        <h1 class="hero-title">Selamat Datang di MAN 1 OKI</h1>
        <p class="hero-subtitle">
          Membentuk generasi penerus bangsa yang islami, cerdas, terampil, dan berwawasan
          lingkungan.
        </p>
        <div class="hero-actions">
          <RouterLink to="/profil/visi-misi" class="btn btn-primary"
            >Kenali Kami Lebih Dekat</RouterLink
          >
          <a href="#pengumuman" class="btn btn-outline" style="color: white; border-color: white"
            >Lihat Pengumuman</a
          >
        </div>
      </div>
    </section>

    <!-- Sambutan Kepala Sekolah -->
    <section class="section section-alt" id="sambutan">
      <div class="container">
        <div class="sambutan-grid">
          <div class="sambutan-image-wrapper animate-fade-in-up">
            <div class="sambutan-border"></div>
            <img :src="principalImg" alt="Kepala Sekolah" class="sambutan-img" />
          </div>
          <div class="sambutan-content animate-fade-in-up">
            <h2 class="section-title" style="text-align: left">Sambutan Kepala Sekolah</h2>
            <h3 class="kepsek-name">Drs. H. Ahmad Dahlan, M.Pd.</h3>
            <div class="sambutan-text">
              <p>Assalamu'alaikum Warahmatullahi Wabarakatuh.</p>
              <p>
                Segala puji bagi Allah SWT Tuhan semesta alam, yang telah memberikan karunia-Nya
                sehingga website profil Madrasah Aliyah Negeri 1 Ogan Komering Ilir ini dapat hadir
                di hadapan bapak/ibu sekalian.
              </p>
              <p>
                Di era digital ini, website madrasah merupakan pintu gerbang informasi yang sangat
                fital. Kami berharap dengan optimalisasi digitalisasi pendidikan, madrasah kita
                dapat terus meningkatkan pelayanan pendidikan, mencetak lulusan yang tidak hanya
                cerdas secara intelektual, tapi juga matang secara spiritual.
              </p>
              <p>Wassalamu'alaikum Warahmatullahi Wabarakatuh.</p>
            </div>
            <RouterLink to="/profil/kepala-sekolah" class="read-more"
              >Baca Profil Lengkap <span>→</span></RouterLink
            >
          </div>
        </div>
      </div>
    </section>

    <!-- Berita Section -->
    <section class="section" id="berita">
      <div class="container">
        <h2 class="section-title">Berita Terkini</h2>
        <div class="grid cards-grid">
          <div v-for="berita in beritaList" :key="berita.id" class="card berita-card group">
            <div class="berita-img-wrapper">
              <img :src="berita.img" :alt="berita.title" class="berita-img" />
              <div class="berita-date">{{ berita.date }}</div>
            </div>
            <div class="berita-content">
              <h3 class="berita-title">{{ berita.title }}</h3>
              <p class="berita-desc">{{ berita.desc }}</p>
              <RouterLink :to="`/berita/${berita.id}`" class="btn btn-primary mt-4 w-full"
                >Baca Selengkapnya</RouterLink
              >
            </div>
          </div>
        </div>
        <div class="text-center mt-8">
          <RouterLink to="/berita" class="btn btn-outline">Lihat Semua Berita</RouterLink>
        </div>
      </div>
    </section>

    <!-- Pengumuman Section -->
    <section class="section section-alt" id="pengumuman">
      <div class="container">
        <div class="pengumuman-wrapper">
          <div class="pengumuman-header">
            <h2 class="section-title" style="margin-bottom: 0; text-align: left">Pengumuman</h2>
            <p class="text-muted mt-2">
              Informasi penting terkait akademik dan administrasi madrasah.
            </p>
          </div>
          <div class="pengumuman-list">
            <div
              v-for="pengumuman in pengumumanList"
              :key="pengumuman.id"
              class="pengumuman-item card"
            >
              <div class="pengumuman-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <path d="M14 2v6h6" />
                  <path d="M16 13H8" />
                  <path d="M16 17H8" />
                  <path d="M10 9H8" />
                </svg>
              </div>
              <div class="pengumuman-info">
                <h3 class="pengumuman-title">{{ pengumuman.title }}</h3>
                <span class="pengumuman-date">{{ pengumuman.date }}</span>
              </div>
              <button class="btn btn-outline" style="padding: 0.5rem 1rem">Detail</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Kegiatan Section -->
    <section class="section" id="kegiatan">
      <div class="container">
        <h2 class="section-title">Kegiatan Ekstrakurikuler</h2>
        <div class="kegiatan-grid">
          <div v-for="kegiatan in kegiatanList" :key="kegiatan.id" class="kegiatan-card card">
            <div class="kegiatan-icon">{{ kegiatan.icon }}</div>
            <h3 class="kegiatan-name">{{ kegiatan.name }}</h3>
          </div>
        </div>
        <div class="text-center mt-8">
          <RouterLink to="/kegiatan" class="btn btn-primary">Lihat Selengkapnya</RouterLink>
        </div>
      </div>
    </section>

    <!-- Galeri Section -->
    <section class="section section-alt" id="galeri">
      <div class="container">
        <div class="flex justify-between items-center mb-8">
          <h2 class="section-title" style="margin-bottom: 0; margin-top: 0">Galeri Foto</h2>
          <RouterLink to="/galeri" class="btn btn-outline" style="min-width: fit-content"
            >Lihat Semua</RouterLink
          >
        </div>
        <div class="galeri-grid">
          <div v-for="(img, index) in galeriList" :key="index" class="galeri-item">
            <img :src="img" alt="Dokumentasi Galeri" class="galeri-img" />
            <div class="galeri-overlay">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" x2="12" y1="15" y2="3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Hero Section */
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  z-index: -2;
  transform: scale(1.05);
  animation: slowZoom 20s infinite alternate;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, rgba(15, 23, 42, 0.9) 0%, rgba(15, 23, 42, 0.4) 100%);
  z-index: -1;
}

.hero-content {
  color: white;
  max-width: 800px;
  text-align: left;
  margin-top: 4rem; /* To offset fixed navbar */
}

.hero-badge {
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 2rem;
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 1.5rem;
  color: var(--secondary);
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 1.5rem;
}

.hero-subtitle {
  font-size: 1.25rem;
  color: #e2e8f0;
  margin-bottom: 2.5rem;
  max-width: 600px;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

@keyframes slowZoom {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.1);
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }
  .hero-actions {
    flex-direction: column;
  }
}

/* Sambutan Section */
.sambutan-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: center;
}

@media (min-width: 1024px) {
  .sambutan-grid {
    grid-template-columns: 2fr 3fr;
    gap: 5rem;
  }
}

.sambutan-image-wrapper {
  position: relative;
  z-index: 1;
}

.sambutan-border {
  position: absolute;
  top: 20px;
  left: -20px;
  width: 100%;
  height: 100%;
  border: 4px solid var(--primary);
  border-radius: var(--radius-lg);
  z-index: -1;
  transition: transform 0.3s ease;
}

.sambutan-img {
  width: 100%;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
  object-fit: cover;
  aspect-ratio: 3/4;
}

.sambutan-image-wrapper:hover .sambutan-border {
  transform: translate(10px, -10px);
}

.kepsek-name {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary);
  margin-bottom: 1.5rem;
}

.sambutan-text {
  color: var(--text-muted);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-size: 1.1rem;
  margin-bottom: 2rem;
}

.read-more {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  color: var(--primary);
}

.read-more:hover span {
  transform: translateX(5px);
}

.read-more span {
  transition: transform 0.2s ease;
}

/* Berita Section */
.cards-grid {
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;
}

@media (min-width: 768px) {
  .cards-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .cards-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.berita-card {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.berita-img-wrapper {
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.berita-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.berita-card:hover .berita-img {
  transform: scale(1.1);
}

.berita-date {
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: var(--primary);
  color: white;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  font-weight: 600;
  border-top-right-radius: var(--radius-md);
}

.berita-content {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.berita-title {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  line-height: 1.4;
}

.berita-desc {
  color: var(--text-muted);
  flex: 1;
  margin-bottom: 1rem;
}

/* Pengumuman Section */
.pengumuman-wrapper {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

@media (min-width: 1024px) {
  .pengumuman-wrapper {
    grid-template-columns: 1fr 2fr;
    gap: 4rem;
  }
}

.pengumuman-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.pengumuman-item {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1.5rem;
}

.pengumuman-icon {
  background-color: var(--primary-light);
  color: white;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.pengumuman-info {
  flex: 1;
}

.pengumuman-title {
  font-weight: 600;
  margin-bottom: 0.25rem;
}

.pengumuman-date {
  color: var(--text-muted);
  font-size: 0.875rem;
}

/* Kegiatan Section */
.kegiatan-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

@media (min-width: 768px) {
  .kegiatan-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 1024px) {
  .kegiatan-grid {
    grid-template-columns: repeat(6, 1fr);
  }
}

.kegiatan-card {
  padding: 2rem 1rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  background-color: var(--bg-main);
  border: 1px solid var(--gray-light);
}

.kegiatan-card:hover {
  background-color: var(--primary);
  color: white;
  border-color: var(--primary);
}

.kegiatan-card:hover .kegiatan-name {
  color: white;
}

.kegiatan-icon {
  font-size: 3rem;
  line-height: 1;
}

.kegiatan-name {
  font-weight: 600;
  font-size: 1.1rem;
  transition: color 0.3s;
}

/* Galeri Section */
.galeri-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

@media (min-width: 768px) {
  .galeri-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 1024px) {
  .galeri-grid {
    grid-template-columns: repeat(4, 1fr);
  }
  .galeri-item:nth-child(1) {
    grid-column: span 2;
    grid-row: span 2;
  }
}

.galeri-item {
  position: relative;
  border-radius: var(--radius-lg);
  overflow: hidden;
  aspect-ratio: 1;
}

.galeri-item:nth-child(1) {
  aspect-ratio: auto;
}

.galeri-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.galeri-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 69, 50, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  color: white;
}

.galeri-item:hover .galeri-img {
  transform: scale(1.1);
}

.galeri-item:hover .galeri-overlay {
  opacity: 1;
}
</style>
