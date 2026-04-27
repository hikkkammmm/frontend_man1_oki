import { defineStore } from 'pinia'
import { ref } from 'vue'

export interface BeritaItem {
  id: number
  title: string
  category: string
  date: string
  status: 'published' | 'draft'
  author: string
  content: string
  excerpt: string
  image: string
}

let _nextId = 7

export const beritaStore = defineStore('admin-berita', () => {
  const list = ref<BeritaItem[]>([
    { id: 1, title: 'Juara 1 Olimpiade Sains Nasional 2026', category: 'Prestasi', date: '2026-04-24', status: 'published', author: 'Admin', content: '<p>Siswa MAN 1 OKI kembali mengukir prestasi di kancah nasional dalam bidang Fisika pada Olimpiade Sains Nasional tahun 2026.</p><p>Prestasi ini merupakan buah dari latihan intensif yang dilakukan selama beberapa bulan terakhir di bawah bimbingan guru-guru berpengalaman.</p>', excerpt: 'Siswa MAN 1 OKI kembali mengukir prestasi di kancah nasional dalam bidang Fisika.', image: '/school_hero_1777021806911.png' },
    { id: 2, title: 'Peringatan Hari Guru Nasional 2026', category: 'Kegiatan', date: '2025-11-25', status: 'published', author: 'Admin', content: '<p>Upacara dan pentas seni dalam rangka memeriahkan hari guru nasional. Berbagai kegiatan menarik disajikan oleh para siswa.</p>', excerpt: 'Upacara dan pentas seni dalam rangka memeriahkan hari guru nasional.', image: '/student_activities_1777021842318.png' },
    { id: 3, title: 'Kunjungan Edukasi ke Universitas Indonesia', category: 'Akademik', date: '2025-11-10', status: 'draft', author: 'Admin', content: '<p>Membuka wawasan siswa kelas 12 dengan melakukan kunjungan ke kampus UI untuk mengenal lebih dekat dunia perkuliahan.</p>', excerpt: 'Membuka wawasan siswa kelas 12 dengan melakukan kunjungan ke kampus UI.', image: '/school_hero_1777021806911.png' },
    { id: 4, title: 'Lomba Debat Bahasa Inggris Tingkat Provinsi', category: 'Prestasi', date: '2025-11-05', status: 'published', author: 'Admin', content: '<p>Tim debat MAN 1 OKI berhasil masuk ke babak final dalam lomba debat bahasa Inggris tingkat provinsi.</p>', excerpt: 'Tim debat MAN 1 OKI berhasil masuk babak final lomba debat tingkat provinsi.', image: '/student_activities_1777021842318.png' },
    { id: 5, title: 'Workshop Kecerdasan Buatan untuk Siswa', category: 'Akademik', date: '2025-11-01', status: 'draft', author: 'Admin', content: '<p>Workshop AI dan Machine Learning diadakan untuk mengenalkan teknologi masa depan kepada para siswa MAN 1 OKI.</p>', excerpt: 'Workshop AI diadakan untuk mengenalkan teknologi masa depan kepada siswa.', image: '/school_hero_1777021806911.png' },
    { id: 6, title: 'Pembukaan PPDB Tahun Ajaran 2026/2027', category: 'Pengumuman', date: '2025-10-20', status: 'published', author: 'Admin', content: '<p>Pendaftaran siswa baru untuk tahun ajaran 2026/2027 resmi dibuka. Calon siswa dapat mendaftar secara online melalui website resmi madrasah.</p>', excerpt: 'Pendaftaran siswa baru untuk tahun ajaran 2026/2027 resmi dibuka.', image: '/student_activities_1777021842318.png' },
  ])

  function add(data: Omit<BeritaItem, 'id'>) {
    list.value.unshift({ id: _nextId++, ...data })
  }

  function update(id: number, data: Omit<BeritaItem, 'id'>) {
    const idx = list.value.findIndex((b) => b.id === id)
    if (idx !== -1) list.value[idx] = { id, ...data }
  }

  function remove(id: number) {
    list.value = list.value.filter((b) => b.id !== id)
  }

  function toggleStatus(id: number) {
    const item = list.value.find((b) => b.id === id)
    if (item) item.status = item.status === 'published' ? 'draft' : 'published'
  }

  function findById(id: number) {
    return list.value.find((b) => b.id === id)
  }

  return { list, add, update, remove, toggleStatus, findById }
})
