import { defineStore } from 'pinia'
import { ref } from 'vue'

export interface PengumumanItem {
  id: number
  title: string
  content: string
  date: string
  expiry: string
  priority: 'high' | 'medium' | 'low'
  status: 'active' | 'expired'
}

let _nextId = 6

export const pengumumanStore = defineStore('admin-pengumuman', () => {
  const list = ref<PengumumanItem[]>([
    { id: 1, title: 'Pendaftaran Siswa Baru (PPDB) 2026/2027 Dibuka', content: '<p>Pendaftaran siswa baru untuk tahun ajaran 2026/2027 telah resmi dibuka. Calon siswa dapat mendaftar secara online melalui website resmi madrasah mulai tanggal 1 April 2026.</p><h2>Persyaratan</h2><ul><li>Ijazah / SKHUN SMP asli dan fotokopi</li><li>Kartu Keluarga asli dan fotokopi</li><li>Pas foto 3x4 (4 lembar)</li><li>Akta kelahiran</li></ul>', date: '2026-04-01', expiry: '2026-05-01', priority: 'high', status: 'active' },
    { id: 2, title: 'Jadwal Ujian Akhir Semester Genap', content: '<p>Ujian Akhir Semester Genap akan dilaksanakan mulai tanggal 20 Mei 2026. Siswa diharapkan mempersiapkan diri dengan baik.</p>', date: '2026-04-15', expiry: '2026-05-20', priority: 'high', status: 'active' },
    { id: 3, title: 'Pengambilan Raport Semester Genap', content: '<p>Pengambilan raport semester genap dilaksanakan pada tanggal 15 Juni 2026. Orang tua/wali murid diharapkan hadir langsung.</p>', date: '2026-05-01', expiry: '2026-06-15', priority: 'medium', status: 'active' },
    { id: 4, title: 'Libur Hari Raya Idul Adha 1447 H', content: '<p>Libur hari raya Idul Adha 1447 H dilaksanakan mulai tanggal 5 Juni 2025.</p>', date: '2025-06-05', expiry: '2025-06-07', priority: 'low', status: 'expired' },
    { id: 5, title: 'Rapat Wali Murid Kelas XII', content: '<p>Rapat wali murid kelas XII akan dilaksanakan pada tanggal 10 Oktober 2025 pukul 09.00 WIB.</p>', date: '2025-10-10', expiry: '2025-10-15', priority: 'medium', status: 'expired' },
  ])

  function add(data: Omit<PengumumanItem, 'id'>) { list.value.unshift({ id: _nextId++, ...data }) }
  function update(id: number, data: Omit<PengumumanItem, 'id'>) {
    const idx = list.value.findIndex((p) => p.id === id)
    if (idx !== -1) list.value[idx] = { id, ...data }
  }
  function remove(id: number) { list.value = list.value.filter((p) => p.id !== id) }
  function findById(id: number) { return list.value.find((p) => p.id === id) }

  return { list, add, update, remove, findById }
})
