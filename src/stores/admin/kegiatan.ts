import { defineStore } from 'pinia'
import { ref } from 'vue'

export interface KegiatanItem {
  id: number
  name: string
  image: string
  description: string
  schedule: string
  coordinator: string
  status: 'active' | 'inactive'
}

let _nextId = 7

export const kegiatanStore = defineStore('admin-kegiatan', () => {
  const list = ref<KegiatanItem[]>([
    {
      id: 1,
      name: 'Pramuka',
      image: '/school_hero_1777021806911.png',
      description:
        'Kegiatan kepanduan membentuk karakter siswa yang mandiri dan bertanggung jawab.',
      schedule: 'Jumat, 14.00-16.00',
      coordinator: 'Bpk. Ramli, S.Pd.',
      status: 'active',
    },
    {
      id: 2,
      name: 'Rohis',
      image: '/student_activities_1777021842318.png',
      description: 'Kegiatan rohani Islam untuk memperkuat keimanan dan ketaqwaan siswa.',
      schedule: 'Sabtu, 08.00-10.00',
      coordinator: 'Ibu Fatimah, S.Ag.',
      status: 'active',
    },
    {
      id: 3,
      name: 'Paskibra',
      image: '/school_hero_1777021806911.png',
      description: 'Pasukan Pengibar Bendera yang melatih kedisiplinan dan patriotisme.',
      schedule: 'Sabtu, 14.00-16.00',
      coordinator: 'Bpk. Santoso, S.Pd.',
      status: 'active',
    },
    {
      id: 4,
      name: 'PMR',
      image: '/student_activities_1777021842318.png',
      description: 'Palang Merah Remaja yang melatih kepedulian sosial dan kesehatan.',
      schedule: 'Kamis, 14.00-16.00',
      coordinator: 'Ibu Sari, S.Kes.',
      status: 'active',
    },
    {
      id: 5,
      name: 'Karya Ilmiah Remaja',
      image: '/school_hero_1777021806911.png',
      description: 'Pengembangan kemampuan riset dan karya tulis ilmiah siswa.',
      schedule: 'Rabu, 14.00-16.00',
      coordinator: 'Bpk. Hendra, M.Pd.',
      status: 'active',
    },
    {
      id: 6,
      name: 'Olah Raga',
      image: '/student_activities_1777021842318.png',
      description: 'Kegiatan olahraga meliputi sepak bola, basket, dan voli.',
      schedule: 'Jumat, 07.00-09.00',
      coordinator: 'Bpk. Wahyu, S.Or.',
      status: 'inactive',
    },
  ])

  function add(data: Omit<KegiatanItem, 'id'>) {
    list.value.push({ id: _nextId++, ...data })
  }
  function update(id: number, data: Omit<KegiatanItem, 'id'>) {
    const idx = list.value.findIndex((k) => k.id === id)
    if (idx !== -1) list.value[idx] = { id, ...data }
  }
  function remove(id: number) {
    list.value = list.value.filter((k) => k.id !== id)
  }
  function toggleStatus(id: number) {
    const item = list.value.find((k) => k.id === id)
    if (item) item.status = item.status === 'active' ? 'inactive' : 'active'
  }
  function findById(id: number) {
    return list.value.find((k) => k.id === id)
  }

  return { list, add, update, remove, toggleStatus, findById }
})
