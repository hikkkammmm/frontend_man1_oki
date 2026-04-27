import { defineStore } from 'pinia'
import { ref } from 'vue'

export interface GaleriItem {
  id: number
  title: string
  category: string
  url: string
  date: string
}

let _nextId = 9

export const galeriStore = defineStore('admin-galeri', () => {
  const list = ref<GaleriItem[]>([
    { id: 1, title: 'Upacara Hari Kemerdekaan RI', category: 'Upacara', url: '/school_hero_1777021806911.png', date: '2025-08-17' },
    { id: 2, title: 'Kegiatan Pramuka 2025', category: 'Ekstrakurikuler', url: '/student_activities_1777021842318.png', date: '2025-09-15' },
    { id: 3, title: 'Olimpiade Sains Madrasah', category: 'Prestasi', url: '/school_hero_1777021806911.png', date: '2025-10-20' },
    { id: 4, title: 'Peringatan Hari Guru 2025', category: 'Kegiatan', url: '/student_activities_1777021842318.png', date: '2025-11-25' },
    { id: 5, title: 'Wisuda Angkatan 2025', category: 'Akademik', url: '/school_hero_1777021806911.png', date: '2025-12-01' },
    { id: 6, title: 'Lomba Kreativitas Siswa', category: 'Prestasi', url: '/student_activities_1777021842318.png', date: '2026-01-15' },
    { id: 7, title: 'Sambutan Kepala Sekolah', category: 'Kegiatan', url: '/principal_portrait_1777021823882.png', date: '2026-02-10' },
    { id: 8, title: 'Gedung Utama Madrasah', category: 'Fasilitas', url: '/school_hero_1777021806911.png', date: '2026-03-01' },
  ])

  function add(data: Omit<GaleriItem, 'id'>) { list.value.unshift({ id: _nextId++, ...data }) }
  function update(id: number, data: Omit<GaleriItem, 'id'>) {
    const idx = list.value.findIndex((g) => g.id === id)
    if (idx !== -1) list.value[idx] = { id, ...data }
  }
  function remove(id: number) { list.value = list.value.filter((g) => g.id !== id) }
  function findById(id: number) { return list.value.find((g) => g.id === id) }

  return { list, add, update, remove, findById }
})
