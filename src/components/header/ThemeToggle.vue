<script setup lang="ts">
import { useTheme } from '@/composables/useTheme';
import SunIcon from '../svg/SunIcon.vue';
import MoonIcon from '../svg/MoonIcon.vue';

const { isDark, toggleTheme } = useTheme();
</script>

<template>
  <!--  -->
  <button @click="toggleTheme"
    class="p-1 rounded-full bg-primary-dark transition-colors duration-200 cursor-pointer hover:ring-1 hover:ring-primary-light "
    :title="isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'">
    <!-- Sun Icon -->
    <SunIcon v-if="isDark" class-name="w-4 h-4 text-yellow-400 sm:w-6 sm:h-6" />
    <!-- Moon Icon -->
    <MoonIcon v-else class-name="w-4 h-4 text-white sm:w-6 sm:h-6" />
  </button>
</template>
