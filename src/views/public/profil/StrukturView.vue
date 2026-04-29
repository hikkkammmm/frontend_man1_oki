<script setup lang="ts">
const principalImg = '/principal_portrait_1777021823882.png'
</script>

<template>
  <div class="struktur-page">
    <section class="page-hero">
      <div class="page-hero-overlay"></div>
      <div class="container page-hero-content animate-fade-in-up">
        <div class="breadcrumb">
          <RouterLink to="/">Beranda</RouterLink>
          <span>/</span>
          <RouterLink to="/profil/visi-misi">Profil</RouterLink>
          <span>/</span>
          <span>Struktur Organisasi</span>
        </div>
        <h1 class="page-hero-title">Struktur Organisasi</h1>
        <p class="page-hero-subtitle">Susunan kepegawaian dan guru Madrasah Aliyah Negeri 1 Ogan Komering Ilir.</p>
      </div>
    </section>

    <section class="section">
      <div class="container max-w-5xl">
        <div class="org-chart">
          
          <!-- Level 1: Kepala Madrasah -->
          <div class="org-level level-1">
            <div class="org-card principal">
              <img :src="principalImg" alt="Kepala Madrasah" class="org-img">
              <div class="org-info">
                <h3 class="org-name">Drs. H. Ahmad Dahlan, M.Pd.</h3>
                <p class="org-role">Kepala Madrasah</p>
              </div>
            </div>
          </div>

          <div class="org-connector main-connector"></div>

          <!-- Level 2: Wakil Kepala -->
          <div class="org-level level-2">
            <div class="org-card waka">
              <div class="org-avatar">KA</div>
              <div class="org-info">
                <h3 class="org-name">M. Fadhil, S.Pd.I</h3>
                <p class="org-role">Waka Kurikulum</p>
              </div>
            </div>
            <div class="org-card waka">
              <div class="org-avatar">KS</div>
              <div class="org-info">
                <h3 class="org-name">Siti Aisyah, M.Ag</h3>
                <p class="org-role">Waka Kesiswaan</p>
              </div>
            </div>
            <div class="org-card waka">
              <div class="org-avatar">HM</div>
              <div class="org-info">
                <h3 class="org-name">Budi Santoso, M.Si</h3>
                <p class="org-role">Waka Humas</p>
              </div>
            </div>
            <div class="org-card waka">
              <div class="org-avatar">SP</div>
              <div class="org-info">
                <h3 class="org-name">Dra. Nurlaila</h3>
                <p class="org-role">Waka Sarpras</p>
              </div>
            </div>
          </div>

          <!-- Level 3: Kepala Tata Usaha dll -->
          <div class="org-level level-3 mt-12">
            <div class="org-card staff">
              <div class="org-info text-center">
                <h3 class="org-name">Hj. Maryam, S.E.</h3>
                <p class="org-role">Kepala Tata Usaha</p>
              </div>
            </div>
            <div class="org-card staff">
              <div class="org-info text-center">
                <h3 class="org-name">Ahmad Zaki, S.Kom</h3>
                <p class="org-role">Kepala Laboratorium</p>
              </div>
            </div>
            <div class="org-card staff">
              <div class="org-info text-center">
                <h3 class="org-name">Dian Pertiwi, S.Pust</h3>
                <p class="org-role">Kepala Perpustakaan</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.struktur-page { padding-top: 80px; }

.max-w-5xl { max-width: 1000px; margin: 0 auto; }
.mt-12 { margin-top: 3rem; }
.text-center { text-align: center; }

/* Organization Chart */
.org-chart {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
}

.org-level {
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
  width: 100%;
  position: relative;
}

.org-card {
  background: var(--bg-main);
  border: 1px solid var(--gray-light);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  z-index: 2;
}

.org-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-md);
  border-color: var(--primary);
}

.principal {
  width: 280px;
  text-align: center;
  border-top: 4px solid var(--primary);
}

.org-img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin: 1.5rem auto 0;
  border: 3px solid var(--bg-alt);
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}

.org-info {
  padding: 1.5rem;
}

.org-name {
  font-weight: 700;
  font-size: 1.1rem;
  color: var(--dark);
  margin-bottom: 0.25rem;
}

.org-role {
  color: var(--primary);
  font-weight: 600;
  font-size: 0.9rem;
}

.main-connector {
  width: 2px;
  height: 40px;
  background-color: var(--primary-light);
  margin: 0 auto;
}

.level-2 {
  position: relative;
}

.level-2::before {
  content: '';
  position: absolute;
  top: -20px;
  left: 10%;
  right: 10%;
  height: 2px;
  background-color: var(--primary-light);
}

.waka {
  width: 220px;
  text-align: center;
  border-top: 3px solid var(--secondary);
  position: relative;
  margin-top: 20px;
}

.waka::before {
  content: '';
  position: absolute;
  top: -20px;
  left: 50%;
  width: 2px;
  height: 20px;
  background-color: var(--primary-light);
  transform: translateX(-50%);
}

.org-avatar {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: var(--bg-alt);
  color: var(--primary);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 700;
  margin: 1.5rem auto 0;
  border: 2px solid var(--gray-light);
}

.staff {
  width: 200px;
  border-left: 3px solid var(--primary-light);
}

@media (max-width: 768px) {
  .level-2::before {
    display: none;
  }
  .waka::before {
    display: none;
  }
  .main-connector {
    display: none;
  }
  .waka {
    margin-top: 0;
  }
  .org-level {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
}
</style>
