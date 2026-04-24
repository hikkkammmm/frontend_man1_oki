<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppNavbar from './components/AppNavbar.vue'
import AppFooter from './components/AppFooter.vue'
</script>

<template>
  <AppNavbar />
  <main class="main-content">
    <RouterView />
  </main>
  <AppFooter />
</template>

<style>
.main-content {
  min-height: calc(100vh - 300px); /* Adjust based on your footer height */
}
</style>
