<script setup lang="ts">
import HeaderMenu from './menu.vue';
import ThemeToggle from './ThemeToggle.vue';
import BellIcon from '../svg/BellIcon.vue';
import DotIcon from '../svg/DotIcon.vue';
import GridIcon from '../svg/GridIcon.vue';
</script>

<template>
  <header class="flex justify-between items-center">
    <HeaderMenu />
    <div
      class="hidden 2xs:flex items-center gap-2 sm:gap-4 bg-primary p-1.5 sm:p-2 px-2 sm:px-4 rounded-b-xl rounded-t-sm mb-1 absolute top-0 right-2 sm:right-6 shadow-lg shadow-black/20">
      <ThemeToggle />
      <button
        class="p-1 rounded-full bg-primary-dark transition-colors duration-200 cursor-pointer hover:ring-1 hover:ring-primary-light relative">
        <BellIcon class-name="w-4 h-4 sm:w-6 sm:h-6 text-white" />
        <span class="text-lg text-red-500 absolute top-1.5 right-0.5 sm:top-2 sm:right-1">
          <DotIcon class-name="w-1.5 h-1.5 sm:w-2 sm:h-2 text-red-500/70" />
        </span>
      </button>
      <button
        class="p-1 rounded-full bg-primary-dark transition-colors duration-200 cursor-pointer hover:ring-1 hover:ring-primary-light relative">
        <GridIcon class-name="w-4 h-4 sm:w-6 sm:h-6 text-white" />
      </button>
    </div>
  </header>
</template>