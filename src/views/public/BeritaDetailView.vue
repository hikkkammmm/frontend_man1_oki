<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()
const notFound = ref(false)

const beritaList = [
  {
    id: 1,
    title: 'Juara 1 Olimpiade Sains Nasional',
    img: '/student_activities_1777021842318.png',
    date: '24 Apr 2026',
    content:
      'Prestasi gemilang kembali diraih oleh siswa MAN 1 OKI dalam kompetisi sains nasional. Tim kami berhasil meraih juara pertama dalam kategori Fisika dengan karya penelitian tentang energi terbarukan yang inovatif.',
  },
  {
    id: 2,
    title: 'Peringatan Hari Guru Nasional 2026',
    img: '/school_hero_1777021806911.png',
    date: '25 Nov 2025',
    content:
      'Upacara dan pentas seni meriah dilaksanakan dalam rangka memperingati Hari Guru Nasional. Berbagai kegiatan seni budaya ditampilkan oleh siswa sebagai bentuk apresiasi kepada para pendidik.',
  },
  {
    id: 3,
    title: 'Kunjungan Edukasi ke Universitas Indonesia',
    img: '/student_activities_1777021842318.png',
    date: '10 Nov 2025',
    content:
      'Siswa kelas XII mengikuti kunjungan edukasi ke Universitas Indonesia. Program ini bertujuan membuka wawasan siswa tentang kehidupan kampus dan memotivasi mereka untuk melanjutkan pendidikan ke jenjang yang lebih tinggi.',
  },
  {
    id: 4,
    title: 'Prestasi Marching Band di Tingkat Provinsi',
    img: '/school_hero_1777021806911.png',
    date: '15 Okt 2025',
    content:
      'Marching Band MAN 1 OKI meraih juara umum dalam festival marching band tingkat provinsi. Persiapan selama berbulan-bulan akhirnya membuahkan hasil yang memuaskan.',
  },
  {
    id: 5,
    title: 'Pelatihan Jurnalistik untuk Siswa',
    img: '/student_activities_1777021842318.png',
    date: '02 Sep 2025',
    content:
      'Program pelatihan jurnalistik diadakan untuk meningkatkan kemampuan menulis dan meliput berita bagi anggota ekskul jurnalistik. Materi pelatihan mencakup teknik wawancara, penulisan berita, dan etika jurnalistik.',
  },
  {
    id: 6,
    title: 'Penerimaan Peserta Didik Baru Dimulai',
    img: '/school_hero_1777021806911.png',
    date: '15 Mei 2025',
    content:
      'Informasi lengkap mengenai jadwal dan persyaratan PPDB tahun ajaran baru telah diumumkan. Calon peserta didik diharapkan mempersiapkan dokumen yang diperlukan sesuai dengan ketentuan yang berlaku.',
  },
]

const berita = ref<any>(null)

onMounted(() => {
  const id = Number(route.params.id)
  berita.value = beritaList.find((b) => b.id === id)
  if (!berita.value) {
    notFound.value = true
  }
})

function goBack() {
  router.back()
}
</script>

<template>
  <div class="berita-detail-page">
    <div v-if="notFound" class="empty-state" style="padding: 10rem 1rem; text-align: center">
      <span style="font-size: 3rem; display: block; margin-bottom: 1rem">🔍</span>
      <p style="font-size: 1.2rem; margin-bottom: 1rem">Berita tidak ditemukan.</p>
      <button @click="goBack" class="btn btn-primary">Kembali</button>
    </div>

    <template v-else-if="berita">
      <section
        class="page-hero"
        :style="{
          backgroundImage: `linear-gradient(rgba(0,69,50,0.7), rgba(0,69,50,0.7)), url(${berita.img})`,
        }"
      >
        <div class="container page-hero-content animate-fade-in-up">
          <button @click="goBack" class="btn-back-hero">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
            Kembali
          </button>
          <h1 class="detail-hero-title">{{ berita.title }}</h1>
          <p class="detail-hero-date">
            {{
              new Date(berita.date).toLocaleDateString('id-ID', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })
            }}
          </p>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <article class="detail-content">
            <div class="article-image">
              <img :src="berita.img" :alt="berita.title" class="detail-img" />
            </div>
            <div class="article-body">
              <p class="article-text">{{ berita.content }}</p>

              <div class="article-meta">
                <span class="meta-label">Kategori:</span>
                <span class="meta-value">Berita Sekolah</span>
              </div>

              <div class="article-actions">
                <button @click="goBack" class="btn btn-outline">← Kembali ke Daftar Berita</button>
              </div>
            </div>
          </article>
        </div>
      </section>
    </template>
  </div>
</template>

<style scoped>
.berita-detail-page {
  padding-top: 80px;
}

.page-hero {
  position: relative;
  padding: 8rem 0 4rem;
  background-size: cover;
  background-position: center;
  color: white;
  margin-top: 0;
}

.page-hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
}

.btn-back-hero {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: white;
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  margin-bottom: 1.5rem;
}

.btn-back-hero:hover {
  background: rgba(255, 255, 255, 0.3);
  border-color: rgba(255, 255, 255, 0.5);
}

.detail-hero-title {
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 0.75rem;
  line-height: 1.2;
}

.detail-hero-date {
  font-size: 1.1rem;
  opacity: 0.9;
}

.detail-content {
  max-width: 800px;
  margin: 0 auto;
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
}

.article-image {
  width: 100%;
  height: 400px;
  overflow: hidden;
  background: #f0f0f0;
}

.detail-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.article-body {
  padding: 2.5rem;
}

.article-text {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #374151;
  margin-bottom: 2rem;
}

.article-meta {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 2rem;
  padding: 1rem;
  background: #f9fafb;
  border-radius: 8px;
}

.meta-label {
  font-weight: 600;
  color: #6b7280;
  font-size: 0.9rem;
}

.meta-value {
  color: var(--primary);
  font-weight: 600;
}

.article-actions {
  display: flex;
  gap: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #e5e7eb;
}

@media (max-width: 768px) {
  .detail-hero-title {
    font-size: 1.8rem;
  }
  .article-image {
    height: 250px;
  }
  .article-body {
    padding: 1.5rem;
  }
}
</style>
