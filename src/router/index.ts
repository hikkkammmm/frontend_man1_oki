import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/public/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // ─── Public Routes ────────────────────────────────────────────
    { path: '/', name: 'home', component: HomeView },
    { path: '/about', name: 'about', component: () => import('../views/public/AboutView.vue') },
    { path: '/berita', name: 'berita', component: () => import('../views/public/BeritaView.vue') },
    {
      path: '/berita/:id',
      name: 'berita-detail',
      component: () => import('../views/public/BeritaDetailView.vue'),
    },
    {
      path: '/pengumuman',
      name: 'pengumuman',
      component: () => import('../views/public/PengumumanView.vue'),
    },
    { path: '/galeri', name: 'galeri', component: () => import('../views/public/GaleriView.vue') },
    {
      path: '/kegiatan',
      name: 'kegiatan',
      component: () => import('../views/public/KegiatanView.vue'),
    },
    {
      path: '/privacy-policy',
      name: 'privacy-policy',
      component: () => import('../views/public/PrivacyPolicyView.vue'),
    },
    {
      path: '/terms-of-service',
      name: 'terms-of-service',
      component: () => import('../views/public/TermsOfServiceView.vue'),
    },
    {
      path: '/pendaftaran',
      name: 'pendaftaran',
      component: () => import('../views/public/PendaftaranView.vue'),
    },
    {
      path: '/akademik',
      name: 'akademik',
      component: () => import('../views/public/AkademikView.vue'),
    },
    {
      path: '/bantuan',
      name: 'bantuan',
      component: () => import('../views/public/BantuanView.vue'),
    },
    {
      path: '/profil/visi-misi',
      name: 'visi-misi',
      component: () => import('../views/public/profil/VisiMisiView.vue'),
    },
    {
      path: '/profil/kepala-sekolah',
      name: 'kepala-sekolah',
      component: () => import('../views/public/profil/KepalaSekolahView.vue'),
    },
    {
      path: '/profil/sejarah',
      name: 'sejarah',
      component: () => import('../views/public/profil/SejarahView.vue'),
    },
    {
      path: '/profil/struktur',
      name: 'struktur',
      component: () => import('../views/public/profil/StrukturView.vue'),
    },
    {
      path: '/profil/fasilitas',
      name: 'fasilitas',
      component: () => import('../views/public/profil/FasilitasView.vue'),
    },

    // ─── Akademik Routes ──────────────────────────────────────────
    {
      path: '/akademik/kurikulum',
      name: 'kurikulum',
      component: () => import('../views/public/akademik/KurikulumView.vue'),
    },
    {
      path: '/akademik/guru-staff',
      name: 'guru-staff',
      component: () => import('../views/public/akademik/GuruStaffView.vue'),
    },
    {
      path: '/akademik/kalender',
      name: 'kalender',
      component: () => import('../views/public/akademik/KalenderView.vue'),
    },
    {
      path: '/akademik/program-studi',
      name: 'program-studi',
      component: () => import('../views/public/akademik/ProgramStudiView.vue'),
    },

    // ─── Kesiswaan Routes ─────────────────────────────────────────
    {
      path: '/kesiswaan/ekstrakurikuler',
      name: 'ekstrakurikuler',
      component: () => import('../views/public/kesiswaan/EkstrakurikulerView.vue'),
    },
    {
      path: '/kesiswaan/organisasi',
      name: 'organisasi',
      component: () => import('../views/public/kesiswaan/OrganisasiView.vue'),
    },
    {
      path: '/kesiswaan/prestasi',
      name: 'prestasi',
      component: () => import('../views/public/kesiswaan/PrestasiView.vue'),
    },

    // ─── PPDB ─────────────────────────────────────────────────────
    { path: '/ppdb', name: 'ppdb', component: () => import('../views/public/PPDBView.vue') },

    // ─── Auth Routes ──────────────────────────────────────────────
    {
      path: '/admin/login',
      name: 'admin-login',
      component: () => import('../views/auth/AdminLoginView.vue'),
      meta: { guestOnly: true },
    },

    // ─── Admin Routes (nested inside AdminLayout) ─────────────────
    {
      path: '/admin',
      component: () => import('../layouts/AdminLayout.vue'),
      meta: { requiresAuth: true },
      children: [
        // Dashboard
        { path: '', redirect: { name: 'admin-dashboard' } },
        {
          path: 'dashboard',
          name: 'admin-dashboard',
          component: () => import('../views/admin/DashboardView.vue'),
        },

        // ── Berita CRUD ──
        {
          path: 'berita',
          name: 'admin-berita',
          component: () => import('../views/admin/berita/index.vue'),
        },
        {
          path: 'berita/create',
          name: 'admin-berita-create',
          component: () => import('../views/admin/berita/create.vue'),
        },
        {
          path: 'berita/:id/edit',
          name: 'admin-berita-edit',
          component: () => import('../views/admin/berita/edit.vue'),
        },

        // ── Pengumuman CRUD ──
        {
          path: 'pengumuman',
          name: 'admin-pengumuman',
          component: () => import('../views/admin/pengumuman/index.vue'),
        },
        {
          path: 'pengumuman/create',
          name: 'admin-pengumuman-create',
          component: () => import('../views/admin/pengumuman/create.vue'),
        },
        {
          path: 'pengumuman/:id/edit',
          name: 'admin-pengumuman-edit',
          component: () => import('../views/admin/pengumuman/edit.vue'),
        },

        // ── Galeri CRUD ──
        {
          path: 'galeri',
          name: 'admin-galeri',
          component: () => import('../views/admin/galeri/index.vue'),
        },
        {
          path: 'galeri/create',
          name: 'admin-galeri-create',
          component: () => import('../views/admin/galeri/create.vue'),
        },
        {
          path: 'galeri/:id/edit',
          name: 'admin-galeri-edit',
          component: () => import('../views/admin/galeri/edit.vue'),
        },

        // ── Kegiatan CRUD ──
        {
          path: 'kegiatan',
          name: 'admin-kegiatan',
          component: () => import('../views/admin/kegiatan/index.vue'),
        },
        {
          path: 'kegiatan/create',
          name: 'admin-kegiatan-create',
          component: () => import('../views/admin/kegiatan/create.vue'),
        },
        {
          path: 'kegiatan/:id/edit',
          name: 'admin-kegiatan-edit',
          component: () => import('../views/admin/kegiatan/edit.vue'),
        },
      ],
    },

    // ─── Catch-all ────────────────────────────────────────────────
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    return { top: 0 }
  },
})

// ─── Navigation Guard ─────────────────────────────────────────────
router.beforeEach((to, _from, next) => {
  const isLoggedIn = !!localStorage.getItem('adminToken')
  if (to.meta.requiresAuth && !isLoggedIn) return next({ name: 'admin-login' })
  if (to.meta.guestOnly && isLoggedIn) return next({ name: 'admin-dashboard' })
  next()
})

export default router
