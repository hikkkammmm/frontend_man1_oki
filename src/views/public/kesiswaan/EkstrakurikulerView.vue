<script setup lang="ts">
import { ref } from 'vue'

const activeFilter = ref('semua')

const ekstrakurikuler = [
  {
    id: 1,
    nama: 'Pramuka',
    img: '/school_hero_1777021806911.png',
    icon: '⛺',
    kategori: 'wajib',
    desc: 'Kegiatan kepanduan yang membentuk karakter disiplin, tanggung jawab, dan jiwa kepemimpinan. Wajib diikuti seluruh siswa kelas X.',
    jadwal: 'Jumat, 14.00-16.00',
    pembina: 'Kak Ahmad Rifai, S.Pd.',
  },
  {
    id: 2,
    nama: 'Rohis (Rohani Islam)',
    img: '/school_hero_1777021806911.png',
    icon: '🕌',
    kategori: 'keagamaan',
    desc: "Wadah pembinaan keislaman siswa melalui kajian Al-Qur'an, shalat dhuha bersama, dan kegiatan dakwah kampus.",
    jadwal: 'Sabtu, 08.00-10.00',
    pembina: 'Ustadz Fathurrahman, S.Ag.',
  },
  {
    id: 3,
    nama: 'Paskibra',
    img: '/student_activities_1777021842318.png',
    icon: '🇮🇩',
    kategori: 'bela-negara',
    desc: 'Pasukan Pengibar Bendera yang melatih kedisiplinan, kebersamaan, dan kebanggaan nasional. Tampil di upacara resmi.',
    jadwal: 'Kamis, 15.00-17.00',
    pembina: 'Bpk. Rendra Aji, S.Pd.',
  },
  {
    id: 4,
    nama: 'PMR (Palang Merah Remaja)',
    img: '/school_hero_1777021806911.png',
    icon: '⚕️',
    kategori: 'sosial',
    desc: 'Melatih siswa dalam pertolongan pertama, donor darah, dan kepedulian sosial berbasis kemanusiaan.',
    jadwal: 'Sabtu, 10.00-12.00',
    pembina: 'Ibu dr. Sari Dewi',
  },
  {
    id: 5,
    nama: 'Karya Ilmiah Remaja (KIR)',
    img: '/student_activities_1777021842318.png',
    icon: '🔬',
    kategori: 'akademik',
    desc: 'Klub penelitian dan inovasi sains yang menjadi wahana bagi siswa berprestasi mengikuti lomba olimpiade dan penelitian nasional.',
    jadwal: 'Rabu, 14.00-16.00',
    pembina: 'Bpk. Ir. Budi Santoso, M.T.',
  },
  {
    id: 6,
    nama: 'Futsal',
    img: '/school_hero_1777021806911.png',
    icon: '⚽',
    kategori: 'olahraga',
    desc: 'Tim futsal sekolah yang secara rutin mengikuti turnamen antar madrasah dan mengharumkan nama MAN 1 OKI di bidang olahraga.',
    jadwal: 'Selasa & Kamis, 15.30-17.00',
    pembina: 'Bpk. Yusup, S.Pd.',
  },
  {
    id: 7,
    nama: 'Seni Tari',
    img: '/student_activities_1777021842318.png',
    icon: '💃',
    kategori: 'seni',
    desc: 'Mengembangkan bakat seni tari tradisional dan modern. Sering tampil dalam acara perpisahan, porseni, dan lomba seni daerah.',
    jadwal: 'Sabtu, 13.00-15.00',
    pembina: 'Ibu Rahayu Sari, S.Pd.',
  },
  {
    id: 8,
    nama: 'English Club',
    img: '/school_hero_1777021806911.png',
    icon: '🇬🇧',
    kategori: 'akademik',
    desc: 'Meningkatkan keterampilan berbahasa Inggris melalui debat, conversation practice, dan English speech competition.',
    jadwal: 'Rabu, 15.00-17.00',
    pembina: 'Ibu Maya Indah, S.S., M.Pd.',
  },
  {
    id: 9,
    nama: 'Voli',
    img: '/student_activities_1777021842318.png',
    icon: '🏐',
    kategori: 'olahraga',
    desc: 'Tim bola voli putra-putri yang aktif berlatih dan berkompetisi dalam kejuaraan antar pelajar tingkat kabupaten.',
    jadwal: 'Senin & Rabu, 15.30-17.00',
    pembina: 'Bpk. Hendra, S.Pd.',
  },
  {
    id: 10,
    nama: 'Pencak Silat',
    img: '/school_hero_1777021806911.png',
    icon: '🥋',
    kategori: 'bela-negara',
    desc: 'Seni bela diri asli Indonesia yang melatih fisik, mental, dan menghargai budaya bangsa.',
    jadwal: 'Sabtu, 08.00-10.00',
    pembina: 'Kang Darius, S.Pd.',
  },
  {
    id: 11,
    nama: 'Desain Grafis & Multimedia',
    img: '/student_activities_1777021842318.png',
    icon: '🎨',
    kategori: 'seni',
    desc: 'Wadah kreatif siswa bereksperimen di bidang desain poster, video editing, dan konten media sosial positif.',
    jadwal: 'Jumat, 14.00-16.00',
    pembina: 'Bpk. Rian, S.Kom.',
  },
  {
    id: 12,
    nama: 'Paduan Suara',
    img: '/school_hero_1777021806911.png',
    icon: '🎵',
    kategori: 'seni',
    desc: 'Kelompok paduan suara sekolah yang tampil di berbagai acara formal dan mengikuti festival koor tingkat provinsi.',
    jadwal: 'Kamis, 14.00-16.00',
    pembina: 'Ibu Dian, S.Pd.',
  },
]

const kategoris = [
  'semua',
  'wajib',
  'keagamaan',
  'akademik',
  'olahraga',
  'seni',
  'sosial',
  'bela-negara',
]
const kategoriLabel: Record<string, string> = {
  semua: 'Semua',
  wajib: 'Wajib',
  keagamaan: 'Keagamaan',
  akademik: 'Akademik',
  olahraga: 'Olahraga',
  seni: 'Seni',
  sosial: 'Sosial',
  'bela-negara': 'Bela Negara',
}

const filtered = () => {
  if (activeFilter.value === 'semua') return ekstrakurikuler
  return ekstrakurikuler.filter((e) => e.kategori === activeFilter.value)
}
</script>

<template>
  <div class="ekskul-page">
    <section class="page-hero">
      <div class="page-hero-overlay"></div>
      <div class="container page-hero-content animate-fade-in-up">
        <div class="breadcrumb">
          <RouterLink to="/">Beranda</RouterLink><span>/</span> <span>Kesiswaan</span><span>/</span>
          <span>Ekstrakurikuler</span>
        </div>
        <h1 class="page-hero-title">Ekstrakurikuler</h1>
        <p class="page-hero-subtitle">
          Kembangkan minat dan bakat di luar kelas bersama teman-teman terbaik.
        </p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="filter-bar">
          <button
            v-for="k in kategoris"
            :key="k"
            class="filter-btn"
            :class="{ active: activeFilter === k }"
            @click="activeFilter = k"
          >
            {{ kategoriLabel[k] }}
          </button>
        </div>

        <div class="ekskul-grid">
          <div v-for="e in filtered()" :key="e.id" class="ekskul-poster animate-fade-in-up">
            <img :src="e.img" :alt="e.nama" class="poster-img" />
            <div class="poster-overlay">
              <div class="poster-content">
                <span class="poster-badge">{{ kategoriLabel[e.kategori] }}</span>
                <h3 class="poster-nama">{{ e.nama }}</h3>
                <p class="poster-desc">{{ e.desc }}</p>
                <div class="poster-meta">
                  <div class="meta-item">
                    <span class="meta-label">Jadwal:</span>
                    <span>{{ e.jadwal }}</span>
                  </div>
                  <div class="meta-item">
                    <span class="meta-label">Pembina:</span>
                    <span>{{ e.pembina }}</span>
                  </div>
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
.ekskul-page {
  padding-top: 80px;
}
.page-hero {
  position: relative;
  padding: 7rem 0 4rem;
  background: linear-gradient(135deg, var(--primary-dark) 0%, var(--primary) 100%);
}
.page-hero-overlay {
  position: absolute;
  inset: 0;
  background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}
.page-hero-content {
  position: relative;
  color: white;
}
.breadcrumb {
  display: flex;
  gap: 0.5rem;
  align-items: center;
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
  opacity: 0.8;
}
.breadcrumb a {
  color: var(--secondary);
}
.page-hero-title {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1rem;
}
.page-hero-subtitle {
  font-size: 1.2rem;
  opacity: 0.85;
  max-width: 600px;
}

.filter-bar {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 2.5rem;
}
.filter-btn {
  padding: 0.4rem 1rem;
  border-radius: 2rem;
  border: 2px solid var(--gray-light);
  background: transparent;
  color: var(--text-muted);
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition);
  font-size: 0.875rem;
}
.filter-btn.active,
.filter-btn:hover {
  background: var(--primary);
  border-color: var(--primary);
  color: white;
}

.ekskul-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.5rem;
}

.ekskul-poster {
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  height: 420px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  background: #000;
}

.poster-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.25, 1, 0.5, 1);
  opacity: 0.85;
}

.ekskul-poster:hover .poster-img {
  transform: scale(1.1);
  opacity: 0.6;
}

.poster-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(0, 40, 20, 0.95) 0%,
    rgba(0, 40, 20, 0.4) 60%,
    rgba(0, 0, 0, 0) 100%
  );
  display: flex;
  align-items: flex-end;
  padding: 1.75rem;
  transition: all 0.3s ease;
}

.poster-content {
  color: white;
  width: 100%;
  transform: translateY(35px);
  transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1);
}

.ekskul-poster:hover .poster-content {
  transform: translateY(0);
}

.poster-badge {
  display: inline-block;
  padding: 0.3rem 0.8rem;
  border-radius: 2rem;
  background: var(--secondary);
  color: var(--primary-dark);
  font-size: 0.75rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.poster-nama {
  font-size: 1.5rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  line-height: 1.3;
}

.poster-desc {
  font-size: 0.875rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 1.25rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  opacity: 0;
  transition: opacity 0.4s ease 0.1s;
}

.ekskul-poster:hover .poster-desc {
  opacity: 1;
}

.poster-meta {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.8);
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  padding-top: 1rem;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.meta-label {
  font-weight: 700;
  color: var(--secondary);
}

@media (max-width: 768px) {
  .page-hero-title {
    font-size: 2rem;
  }
  .ekskul-poster {
    height: 380px;
  }
}
</style>
