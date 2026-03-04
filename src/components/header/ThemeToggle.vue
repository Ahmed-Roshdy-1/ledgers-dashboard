<script setup lang="ts">
import { useTheme } from '@/composables/useTheme';

const { isDark, toggleTheme } = useTheme();
</script>

<template>
  <!--  -->
  <button 
    @click="toggleTheme" 
    class="p-1 rounded-full bg-primary-dark transition-colors duration-200 cursor-pointer hover:ring-1 hover:ring-primary-light "
    :title="isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'"
  >
    <!-- Sun Icon -->
    <svg v-if="isDark" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-yellow-400 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 9h-1m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
    </svg>  
    <!-- Moon Icon -->
    <svg v-else class="w-4 h-4 text-white sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M21.64 13.65A9 9 0 1 1 10.35 2.36a7 7 0 1 0 11.29 11.29z"/>
    </svg>
  </button>
</template>
