<script setup lang="ts">
import { ref } from 'vue'

const activeFilter = ref('semua')
const filters = ['semua', 'guru', 'staff']

const tenagaPendidik = [
  { id: 1, nama: 'Drs. H. Ahmad Dahlan, M.Pd.', jabatan: 'Kepala Sekolah', mapel: 'Manajemen Pendidikan', kategori: 'guru', nip: '196801012000031001' },
  { id: 2, nama: 'Hj. Fatimah, S.Ag., M.Pd.I.', jabatan: 'Waka Kurikulum', mapel: 'Al-Qur\'an Hadits', kategori: 'guru', nip: '197205152003122003' },
  { id: 3, nama: 'Drs. Mahmud, M.Si.', jabatan: 'Guru Senior', mapel: 'Matematika', kategori: 'guru', nip: '196903201995121002' },
  { id: 4, nama: 'Sri Rahayu, S.Pd., M.Pd.', jabatan: 'Guru', mapel: 'Bahasa Indonesia', kategori: 'guru', nip: '197711092006042018' },
  { id: 5, nama: 'Ir. Budi Santoso, M.T.', jabatan: 'Guru', mapel: 'Fisika', kategori: 'guru', nip: '197405221999031004' },
  { id: 6, nama: 'Dra. Nurul Hidayah', jabatan: 'Guru', mapel: 'Akidah Akhlak', kategori: 'guru', nip: '196706011993032005' },
  { id: 7, nama: 'Rendra Aji, S.Pd.', jabatan: 'Guru', mapel: 'Penjaskes', kategori: 'guru', nip: '198203142010011014' },
  { id: 8, nama: 'Siti Aminah, S.Pd.I.', jabatan: 'Guru', mapel: 'Bahasa Arab', kategori: 'guru', nip: '198512052012122005' },
  { id: 9, nama: 'Yudi Prasetyo, A.Md.', jabatan: 'Kepala Tata Usaha', mapel: '-', kategori: 'staff', nip: '198001152006041003' },
  { id: 10, nama: 'Linda Sari, S.E.', jabatan: 'Bendahara', mapel: '-', kategori: 'staff', nip: '198607202010012022' },
  { id: 11, nama: 'Agus Susanto', jabatan: 'Staf Perpustakaan', mapel: '-', kategori: 'staff', nip: '-' },
  { id: 12, nama: 'Rina Wulandari, S.Kom.', jabatan: 'Operator Sekolah', mapel: '-', kategori: 'staff', nip: '198904102012012031' },
]

const filtered = () => {
  if (activeFilter.value === 'semua') return tenagaPendidik
  return tenagaPendidik.filter(t => t.kategori === activeFilter.value)
}
</script>

<template>
  <div class="guru-page">
    <section class="page-hero">
      <div class="page-hero-overlay"></div>
      <div class="container page-hero-content animate-fade-in-up">
        <div class="breadcrumb">
          <RouterLink to="/">Beranda</RouterLink><span>/</span>
          <span>Akademik</span><span>/</span>
          <span>Guru & Staff</span>
        </div>
        <h1 class="page-hero-title">Tenaga Pendidik & Staff</h1>
        <p class="page-hero-subtitle">Para pendidik profesional yang berdedikasi dalam mencerdaskan generasi penerus bangsa.</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="filter-bar">
          <button
            v-for="f in filters"
            :key="f"
            class="filter-btn"
            :class="{ active: activeFilter === f }"
            @click="activeFilter = f"
          >
            {{ f === 'semua' ? 'Semua' : f === 'guru' ? 'Guru' : 'Staff' }}
          </button>
        </div>

        <div class="guru-grid">
          <div v-for="g in filtered()" :key="g.id" class="guru-card card animate-fade-in-up">
            <div class="guru-avatar">
              <span class="guru-initials">{{ g.nama.split(' ').slice(0, 2).map(n => n[0]).join('') }}</span>
            </div>
            <div class="guru-info">
              <h3 class="guru-nama">{{ g.nama }}</h3>
              <span class="guru-jabatan">{{ g.jabatan }}</span>
              <div class="guru-meta">
                <span v-if="g.mapel !== '-'" class="meta-item">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
                  {{ g.mapel }}
                </span>
                <span class="meta-item">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>
                  {{ g.nip !== '-' ? g.nip : 'Non-PNS' }}
                </span>
              </div>
              <span class="guru-badge" :class="g.kategori">{{ g.kategori === 'guru' ? 'Guru' : 'Staff' }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.guru-page { padding-top: 80px; }
.page-hero {
  position: relative; padding: 6rem 0 4rem;
  background: linear-gradient(135deg, var(--primary-dark) 0%, var(--primary) 100%);
}
.page-hero-overlay {
  position: absolute; inset: 0;
  background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}
.page-hero-content { position: relative; color: white; }
.breadcrumb { display: flex; gap: 0.5rem; align-items: center; font-size: 0.9rem; margin-bottom: 1.5rem; opacity: 0.8; }
.breadcrumb a { color: var(--secondary); }
.page-hero-title { font-size: 3rem; font-weight: 800; margin-bottom: 1rem; }
.page-hero-subtitle { font-size: 1.2rem; opacity: 0.85; max-width: 600px; }

.filter-bar { display: flex; gap: 0.75rem; margin-bottom: 2.5rem; flex-wrap: wrap; }
.filter-btn {
  padding: 0.5rem 1.5rem; border-radius: 2rem; border: 2px solid var(--gray-light);
  background: transparent; color: var(--text-muted); font-weight: 600; cursor: pointer;
  transition: var(--transition); font-size: 0.95rem;
}
.filter-btn.active, .filter-btn:hover {
  background: var(--primary); border-color: var(--primary); color: white;
}

.guru-grid { display: grid; grid-template-columns: 1fr; gap: 1.5rem; }
@media (min-width: 640px) { .guru-grid { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 1024px) { .guru-grid { grid-template-columns: repeat(3, 1fr); } }

.guru-card { display: flex; gap: 1.25rem; padding: 1.5rem; align-items: flex-start; }
.guru-avatar {
  width: 56px; height: 56px; border-radius: 50%; flex-shrink: 0;
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%);
  display: flex; align-items: center; justify-content: center;
}
.guru-initials { color: white; font-weight: 700; font-size: 1.1rem; }
.guru-info { flex: 1; min-width: 0; }
.guru-nama { font-size: 1rem; font-weight: 700; margin-bottom: 0.25rem; color: var(--dark); line-height: 1.4; }
.guru-jabatan { font-size: 0.875rem; color: var(--primary); font-weight: 600; display: block; margin-bottom: 0.5rem; }
.guru-meta { display: flex; flex-direction: column; gap: 0.35rem; margin-bottom: 0.75rem; }
.meta-item { display: flex; align-items: center; gap: 0.4rem; font-size: 0.8rem; color: var(--text-muted); }
.guru-badge {
  display: inline-block; padding: 0.15rem 0.75rem;
  border-radius: 2rem; font-size: 0.75rem; font-weight: 700;
}
.guru-badge.guru { background: rgba(0,69,50,0.1); color: var(--primary); }
.guru-badge.staff { background: rgba(193,160,89,0.15); color: #8a6d28; }

@media (max-width: 768px) { .page-hero-title { font-size: 2rem; } }
</style>
