<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <div class="footer-logo-container">
            <img src="../assets/logo fiks.jpeg" alt="MAN 1 OKI Logo" class="footer-logo-img" />
            <h2 class="footer-logo">MAN 1 OKI</h2>
          </div>
          <p class="footer-desc">
            Madrasah Aliyah Negeri 1 Ogan Komering Ilir. Mengedepankan akhlak mulia dan prestasi akademik tingkat nasional.
          </p>
          <div class="social-links">
            <a href="#" class="social-link" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="#" class="social-link" aria-label="Twitter">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
            </a>
            <a href="#" class="social-link" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a href="#" class="social-link" aria-label="YouTube">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
            </a>
          </div>
        </div>

        <div class="footer-links-group">
          <h3 class="footer-heading">Tautan Cepat</h3>
          <ul class="footer-links">
            <li><RouterLink to="/profil/visi-misi">Visi & Misi</RouterLink></li>
            <li><RouterLink to="/berita">Berita Sekolah</RouterLink></li>
            <li><RouterLink to="/pengumuman">Pengumuman</RouterLink></li>
            <li><RouterLink to="/galeri">Galeri Foto</RouterLink></li>
          </ul>
        </div>

        <div class="footer-links-group">
          <h3 class="footer-heading">Informasi</h3>
          <ul class="footer-links">
            <li><RouterLink to="/ppdb">Pendaftaran</RouterLink></li>
            <li><RouterLink to="/akademik/kalender">Kalender Akademik</RouterLink></li>
            <li><RouterLink to="/kesiswaan/ekstrakurikuler">Kegiatan Siswa</RouterLink></li>
            <li><RouterLink to="/bantuan">Pusat Bantuan</RouterLink></li>
          </ul>
        </div>

        <div class="footer-contact">
          <h3 class="footer-heading">Kontak Kami</h3>
          <ul class="contact-info">
            <li class="contact-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              <span>Jl. Lintas Timur No.123, Kayuagung, Ogan Komering Ilir, Sumatera Selatan</span>
            </li>
            <li class="contact-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              <span>info@man1oki.sch.id</span>
            </li>
            <li class="contact-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>
              <span>+62 812 3456 7890</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; 2026 MAN 1 OKI. All rights reserved.</p>
        <div class="footer-bottom-links">
          <RouterLink to="/privacy-policy">Privacy Policy</RouterLink>
          <RouterLink to="/terms-of-service">Terms of Service</RouterLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: var(--bg-alt);
  padding: 5rem 0 2rem;
  border-top: 1px solid var(--gray-light);
}

.footer-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  margin-bottom: 3rem;
}

@media (min-width: 768px) {
  .footer-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .footer-grid {
    grid-template-columns: 2fr 1fr 1fr 1.5fr;
  }
}

.footer-logo-container {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.footer-logo-img {
  height: 48px;
  width: auto;
  object-fit: contain;
}

.footer-logo {
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--primary);
}

.footer-desc {
  color: var(--text-muted);
  margin-bottom: 1.5rem;
  max-width: 300px;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--bg-main);
  color: var(--text-muted);
  border: 1px solid var(--gray-light);
  transition: var(--transition);
}

.social-link:hover {
  background-color: var(--primary);
  color: white;
  border-color: var(--primary);
  transform: translateY(-3px);
}

.footer-heading {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--dark);
  margin-bottom: 1.5rem;
}

.footer-links {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.footer-links a {
  color: var(--text-muted);
  transition: var(--transition);
}

.footer-links a:hover {
  color: var(--primary);
  padding-left: 0.25rem;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.contact-item {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  color: var(--text-muted);
}

.contact-item svg {
  color: var(--primary);
  flex-shrink: 0;
  margin-top: 0.25rem;
}

.footer-bottom {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;
  padding-top: 2rem;
  border-top: 1px solid var(--gray-light);
  color: var(--text-muted);
  font-size: 0.875rem;
}

@media (min-width: 768px) {
  .footer-bottom {
    flex-direction: row;
  }
}

.footer-bottom-links {
  display: flex;
  gap: 1.5rem;
}

.footer-bottom-links a:hover {
  color: var(--primary);
}
</style>
