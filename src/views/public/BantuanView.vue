<script setup lang="ts">
const heroImg = '/school_hero_1777021806911.png'
</script>

<template>
  <div class="bantuan-page">
    <div class="page-header" :style="{ backgroundImage: `url(${heroImg})` }">
      <div class="header-overlay"></div>
      <div class="container relative z-10 text-center animate-fade-in-up">
        <h1 class="page-title">Pusat Bantuan</h1>
        <p class="page-subtitle">Ada pertanyaan atau kendala? Kami siap membantu Anda.</p>
      </div>
    </div>

    <section class="section">
      <div class="container max-w-4xl">
        <div class="card p-8">
          <h2 class="text-2xl font-bold mb-6 text-primary">Hubungi Kami</h2>
          <form class="contact-form">
            <div class="form-group">
              <label for="name">Nama Lengkap</label>
              <input type="text" id="name" class="form-control" placeholder="Masukkan nama Anda">
            </div>
            
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" id="email" class="form-control" placeholder="Masukkan email aktif">
            </div>
            
            <div class="form-group">
              <label for="subject">Subjek</label>
              <select id="subject" class="form-control">
                <option value="">Pilih Subjek</option>
                <option value="ppdb">Pendaftaran (PPDB)</option>
                <option value="akademik">Informasi Akademik</option>
                <option value="lainnya">Lainnya</option>
              </select>
            </div>
            
            <div class="form-group">
              <label for="message">Pesan</label>
              <textarea id="message" rows="5" class="form-control" placeholder="Tulis pesan Anda di sini..."></textarea>
            </div>
            
            <button type="submit" class="btn btn-primary mt-4 w-full" @click.prevent="">Kirim Pesan</button>
          </form>
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

.page-title {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1rem;
}

.page-subtitle {
  font-size: 1.25rem;
  opacity: 0.9;
}

.max-w-4xl { max-width: 800px; margin: 0 auto; }
.p-8 { padding: 2rem; }
.text-2xl { font-size: 1.5rem; }
.font-bold { font-weight: 700; }
.text-primary { color: var(--primary); }

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group label {
  font-weight: 500;
  color: var(--dark);
}

.form-control {
  padding: 0.75rem 1rem;
  border: 1px solid var(--gray-light);
  border-radius: var(--radius-md);
  background-color: var(--bg-alt);
  color: var(--text-main);
  font-family: inherit;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.form-control:focus {
  outline: none;
  border-color: var(--primary);
  box-shadow: 0 0 0 3px rgba(0, 69, 50, 0.1);
  background-color: var(--bg-main);
}
</style>
