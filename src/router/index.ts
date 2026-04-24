import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/berita',
      name: 'berita',
      component: () => import('../views/BeritaView.vue'),
    },
    {
      path: '/pengumuman',
      name: 'pengumuman',
      component: () => import('../views/PengumumanView.vue'),
    },
    {
      path: '/galeri',
      name: 'galeri',
      component: () => import('../views/GaleriView.vue'),
    },
    {
      path: '/kegiatan',
      name: 'kegiatan',
      component: () => import('../views/KegiatanView.vue'),
    },
    {
      path: '/privacy-policy',
      name: 'privacy-policy',
      component: () => import('../views/PrivacyPolicyView.vue'),
    },
    {
      path: '/pendaftaran',
      name: 'pendaftaran',
      component: () => import('../views/PendaftaranView.vue'),
    },
    {
      path: '/akademik',
      name: 'akademik',
      component: () => import('../views/AkademikView.vue'),
    },
    {
      path: '/bantuan',
      name: 'bantuan',
      component: () => import('../views/BantuanView.vue'),
    },
    {
      path: '/profil/visi-misi',
      name: 'visi-misi',
      component: () => import('../views/profil/VisiMisiView.vue'),
    },
    {
      path: '/profil/kepala-sekolah',
      name: 'kepala-sekolah',
      component: () => import('../views/profil/KepalaSekolahView.vue'),
    },
    {
      path: '/profil/sejarah',
      name: 'sejarah',
      component: () => import('../views/profil/SejarahView.vue'),
    },
    {
      path: '/profil/struktur',
      name: 'struktur',
      component: () => import('../views/profil/StrukturView.vue'),
    },
  ],
})

export default router
