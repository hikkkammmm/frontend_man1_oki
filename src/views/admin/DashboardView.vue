<script setup lang="ts">
// Stats overview
const stats = [
  { label: 'Total Berita', value: 24, icon: '📰', change: '+3 bulan ini', color: '#004532' },
  { label: 'Pengumuman Aktif', value: 8, icon: '📢', change: '+1 minggu ini', color: '#0284c7' },
  { label: 'Foto Galeri', value: 156, icon: '🖼️', change: '+12 bulan ini', color: '#7c3aed' },
  { label: 'Kegiatan', value: 12, icon: '📅', change: 'Update terbaru', color: '#b45309' },
]

const recentBerita = [
  { id: 1, title: 'Juara 1 Olimpiade Sains Nasional 2026', date: '24 Apr 2026', status: 'published' },
  { id: 2, title: 'Peringatan Hari Guru Nasional 2026', date: '25 Nov 2025', status: 'published' },
  { id: 3, title: 'Kunjungan Edukasi ke Universitas Indonesia', date: '10 Nov 2025', status: 'draft' },
  { id: 4, title: 'Lomba Debat Bahasa Inggris Tingkat Provinsi', date: '05 Nov 2025', status: 'published' },
  { id: 5, title: 'Workshop Kecerdasan Buatan untuk Siswa', date: '01 Nov 2025', status: 'draft' },
]

const pengumumanRecent = [
  { id: 1, title: 'Pendaftaran Siswa Baru (PPDB) 2026/2027 Dibuka', date: '01 Mei 2026' },
  { id: 2, title: 'Jadwal Ujian Akhir Semester Genap', date: '20 Mei 2026' },
  { id: 3, title: 'Pengambilan Raport Semester Genap', date: '15 Jun 2026' },
]
</script>

<template>
  <div class="dashboard">
    <!-- Page Header -->
    <div class="page-header">
      <div>
        <h1 class="page-title">Dashboard</h1>
        <p class="page-desc">Ringkasan konten dan aktivitas terbaru madrasah.</p>
      </div>
      <div class="header-date">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
        <span>{{ new Date().toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) }}</span>
      </div>
    </div>

    <!-- Stats Cards -->
    <div class="stats-grid">
      <div v-for="stat in stats" :key="stat.label" class="stat-card">
        <div class="stat-icon" :style="{ background: stat.color + '15', color: stat.color }">
          <span>{{ stat.icon }}</span>
        </div>
        <div class="stat-info">
          <p class="stat-label">{{ stat.label }}</p>
          <p class="stat-value" :style="{ color: stat.color }">{{ stat.value }}</p>
          <p class="stat-change">{{ stat.change }}</p>
        </div>
        <div class="stat-bar" :style="{ background: stat.color }"></div>
      </div>
    </div>

    <!-- Content Grid -->
    <div class="content-grid">
      <!-- Recent Berita -->
      <div class="content-card">
        <div class="card-header">
          <h2 class="card-title">Berita Terbaru</h2>
          <RouterLink to="/admin/berita" class="card-link">Lihat Semua →</RouterLink>
        </div>
        <div class="berita-list">
          <div v-for="item in recentBerita" :key="item.id" class="berita-item">
            <div class="berita-left">
              <span class="status-dot" :class="item.status"></span>
              <div class="berita-info">
                <p class="berita-title">{{ item.title }}</p>
                <p class="berita-date">{{ item.date }}</p>
              </div>
            </div>
            <span class="status-badge" :class="item.status">
              {{ item.status === 'published' ? 'Tayang' : 'Draft' }}
            </span>
          </div>
        </div>
      </div>

      <!-- Recent Pengumuman -->
      <div class="content-card">
        <div class="card-header">
          <h2 class="card-title">Pengumuman Aktif</h2>
          <RouterLink to="/admin/pengumuman" class="card-link">Kelola →</RouterLink>
        </div>
        <div class="pengumuman-list">
          <div v-for="item in pengumumanRecent" :key="item.id" class="pengumuman-item">
            <div class="pengumuman-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" x2="4" y1="22" y2="15"/></svg>
            </div>
            <div class="pengumuman-info">
              <p class="pengumuman-title">{{ item.title }}</p>
              <p class="pengumuman-date">Berlaku s.d. {{ item.date }}</p>
            </div>
          </div>
        </div>

        <!-- Quick Actions -->
        <div class="quick-actions">
          <h3 class="qa-title">Aksi Cepat</h3>
          <div class="qa-grid">
            <RouterLink to="/admin/berita" class="qa-btn">
              <span>📰</span> Tulis Berita
            </RouterLink>
            <RouterLink to="/admin/pengumuman" class="qa-btn">
              <span>📢</span> Buat Pengumuman
            </RouterLink>
            <RouterLink to="/admin/galeri" class="qa-btn">
              <span>🖼️</span> Upload Foto
            </RouterLink>
            <RouterLink to="/admin/kegiatan" class="qa-btn">
              <span>📅</span> Tambah Kegiatan
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.dashboard {
  max-width: 1200px;
}

/* Page Header */
.page-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
}

.page-title {
  font-size: 1.75rem;
  font-weight: 800;
  color: #111827;
  margin-bottom: 0.25rem;
}

.page-desc {
  color: #6b7280;
  font-size: 0.9rem;
}

.header-date {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  padding: 0.625rem 1rem;
  font-size: 0.85rem;
  color: #374151;
  box-shadow: 0 1px 3px rgba(0,0,0,0.05);
}

/* Stats */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.25rem;
  margin-bottom: 1.75rem;
}

.stat-card {
  background: white;
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 1px 4px rgba(0,0,0,0.06);
  display: flex;
  align-items: center;
  gap: 1rem;
  position: relative;
  overflow: hidden;
  border: 1px solid #f3f4f6;
  transition: transform 0.2s, box-shadow 0.2s;
}

.stat-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(0,0,0,0.1);
}

.stat-icon {
  width: 52px;
  height: 52px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  flex-shrink: 0;
}

.stat-info {
  flex: 1;
}

.stat-label {
  font-size: 0.8rem;
  color: #6b7280;
  font-weight: 500;
  margin-bottom: 0.25rem;
}

.stat-value {
  font-size: 2rem;
  font-weight: 800;
  line-height: 1;
  margin-bottom: 0.25rem;
}

.stat-change {
  font-size: 0.75rem;
  color: #9ca3af;
}

.stat-bar {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 3px;
  opacity: 0.3;
}

/* Content Grid */
.content-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

@media (max-width: 900px) {
  .content-grid { grid-template-columns: 1fr; }
}

.content-card {
  background: white;
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 1px 4px rgba(0,0,0,0.06);
  border: 1px solid #f3f4f6;
}

.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.25rem;
}

.card-title {
  font-size: 1rem;
  font-weight: 700;
  color: #111827;
}

.card-link {
  font-size: 0.8rem;
  color: #004532;
  text-decoration: none;
  font-weight: 600;
}

.card-link:hover {
  text-decoration: underline;
}

/* Berita List */
.berita-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.berita-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem;
  border-radius: 10px;
  background: #f9fafb;
  gap: 0.75rem;
}

.berita-left {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex: 1;
  min-width: 0;
}

.status-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}

.status-dot.published { background: #22c55e; }
.status-dot.draft { background: #f59e0b; }

.berita-info {
  min-width: 0;
}

.berita-title {
  font-size: 0.85rem;
  font-weight: 600;
  color: #111827;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.berita-date {
  font-size: 0.75rem;
  color: #9ca3af;
  margin-top: 0.1rem;
}

.status-badge {
  font-size: 0.7rem;
  font-weight: 600;
  padding: 0.2rem 0.6rem;
  border-radius: 999px;
  flex-shrink: 0;
}

.status-badge.published {
  background: #f0fdf4;
  color: #16a34a;
}

.status-badge.draft {
  background: #fffbeb;
  color: #b45309;
}

/* Pengumuman List */
.pengumuman-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}

.pengumuman-item {
  display: flex;
  align-items: flex-start;
  gap: 0.875rem;
  padding: 0.875rem;
  border-radius: 10px;
  background: #f9fafb;
}

.pengumuman-icon {
  width: 36px;
  height: 36px;
  background: #eff6ff;
  color: #0284c7;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.pengumuman-title {
  font-size: 0.85rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 0.2rem;
  line-height: 1.4;
}

.pengumuman-date {
  font-size: 0.75rem;
  color: #9ca3af;
}

/* Quick Actions */
.qa-title {
  font-size: 0.8rem;
  font-weight: 600;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin-bottom: 0.875rem;
}

.qa-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.625rem;
}

.qa-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem;
  background: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  font-size: 0.8rem;
  font-weight: 600;
  color: #374151;
  text-decoration: none;
  transition: all 0.2s;
}

.qa-btn:hover {
  background: #f0fdf4;
  border-color: #004532;
  color: #004532;
}
</style>
