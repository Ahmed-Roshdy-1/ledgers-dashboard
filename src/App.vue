<script setup lang="ts">
import { onMounted } from 'vue';
import HeaderApp from './components/header/index.vue';
import AppTitle from './components/AppTitle.vue';
import AppSidebar from './components/sidebar/index.vue';
import { useTheme } from '@/composables/useTheme';

const { initTheme } = useTheme();

onMounted(() => {
  initTheme();
});
</script>

<template>
  <div class="min-h-screen mx-auto animate-fade-in flex p-2 sm:p-4">
    <AppSidebar />
    <main class="bg-background-secondary rounded-xl p-2 sm:p-4 min-h-[92vh] sm:h-[96vh] mx-2 sm:mx-4 w-full shadow-lg shadow-primary/20 relative">
      <HeaderApp />
      <AppTitle />
    </main>
  </div>
</template>


