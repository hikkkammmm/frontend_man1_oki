<script setup lang="ts">
const heroImg = '/school_hero_1777021806911.png'
</script>

<template>
  <div class="visi-misi-page">
    <div class="page-header" :style="{ backgroundImage: `url(${heroImg})` }">
      <div class="header-overlay"></div>
      <div class="container relative z-10 text-center animate-fade-in-up">
        <h1 class="page-title">Visi & Misi</h1>
        <p class="page-subtitle">Komitmen kami dalam mencetak generasi penerus yang unggul dan berakhlak mulia.</p>
      </div>
    </div>

    <section class="section">
      <div class="container max-w-4xl">
        <!-- Visi -->
        <div class="card p-10 mb-10 text-center relative overflow-hidden">
          <div class="bg-pattern"></div>
          <h2 class="text-3xl font-bold text-primary mb-6 relative z-10">Visi Madrasah</h2>
          <p class="text-xl leading-relaxed text-dark font-medium relative z-10">
            "Terwujudnya Peserta Didik yang Beriman, Bertaqwa, Berakhlak Mulia, Cerdas, Terampil, Mandiri dan Berwawasan Lingkungan."
          </p>
        </div>

        <!-- Misi -->
        <div class="misi-container">
          <h2 class="text-3xl font-bold text-center mb-8">Misi Madrasah</h2>
          <div class="grid gap-6">
            <div class="misi-item card">
              <div class="misi-number">1</div>
              <p>Menumbuhkembangkan sikap dan amaliah keagamaan Islam.</p>
            </div>
            <div class="misi-item card">
              <div class="misi-number">2</div>
              <p>Melaksanakan pembelajaran dan bimbingan secara efektif sehingga setiap siswa berkembang secara optimal, sesuai dengan potensi yang dimiliki.</p>
            </div>
            <div class="misi-item card">
              <div class="misi-number">3</div>
              <p>Menumbuhkan semangat keunggulan secara intensif kepada seluruh warga madrasah.</p>
            </div>
            <div class="misi-item card">
              <div class="misi-number">4</div>
              <p>Mendorong dan membantu setiap siswa untuk mengenali potensi dirinya, sehingga dapat berkembang secara optimal.</p>
            </div>
            <div class="misi-item card">
              <div class="misi-number">5</div>
              <p>Menerapkan manajemen partisipatif dengan melibatkan seluruh warga madrasah dan kelompok kepentingan yang terkait dengan madrasah.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.page-header {
  position: relative;
  padding: 8rem 0 4rem;
  background-size: cover;
  background-position: center;
  color: white;
  margin-top: 0;
}

.header-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, rgba(0, 69, 50, 0.9) 0%, rgba(0, 69, 50, 0.6) 100%);
}

.relative { position: relative; }
.z-10 { z-index: 10; }
.overflow-hidden { overflow: hidden; }

.page-title {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1rem;
}

.page-subtitle {
  font-size: 1.25rem;
  opacity: 0.9;
}

.max-w-4xl { max-width: 900px; margin: 0 auto; }
.p-10 { padding: 3rem; }
.mb-10 { margin-bottom: 3rem; }
.text-3xl { font-size: 2rem; }
.text-xl { font-size: 1.25rem; }
.font-bold { font-weight: 700; }
.font-medium { font-weight: 500; }
.text-primary { color: var(--primary); }
.text-dark { color: var(--dark); }
.leading-relaxed { line-height: 1.8; }

.bg-pattern {
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(193, 160, 89, 0.1) 0%, transparent 70%);
  z-index: 0;
}

.misi-item {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1.5rem 2rem;
  transition: transform 0.3s ease;
}

.misi-item:hover {
  transform: translateX(10px);
  border-left: 4px solid var(--primary);
}

.misi-number {
  width: 48px;
  height: 48px;
  background-color: var(--primary-light);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  font-weight: 700;
  flex-shrink: 0;
}

.misi-item p {
  color: var(--text-muted);
  font-size: 1.05rem;
  line-height: 1.6;
  margin: 0;
}
</style>
