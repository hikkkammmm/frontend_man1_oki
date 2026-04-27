<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import AppNavbar from './components/AppNavbar.vue'
import AppFooter from './components/AppFooter.vue'

const route = useRoute()

// Hide public navbar/footer for admin and auth routes
const isAdminArea = computed(() =>
  route.path.startsWith('/admin'),
)
</script>

<template>
  <template v-if="!isAdminArea">
    <AppNavbar />
    <main class="main-content">
      <RouterView />
    </main>
    <AppFooter />
  </template>
  <template v-else>
    <RouterView />
  </template>
</template>

<style>
.main-content {
  min-height: calc(100vh - 300px);
}
</style>
