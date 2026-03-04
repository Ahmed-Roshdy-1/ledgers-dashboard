<script setup lang="ts">
import HeaderMenu from './menu.vue';
import ThemeToggle from './ThemeToggle.vue';
</script>

<template>
  <header class="flex justify-between items-center">
      <HeaderMenu />
      <div class="hidden 2xs:flex items-center gap-2 sm:gap-4 bg-primary p-1.5 sm:p-2 px-2 sm:px-4 rounded-b-xl rounded-t-sm mb-1 absolute top-0 right-2 sm:right-6 shadow-lg shadow-black/20">
        <ThemeToggle />
        <button class="p-1 rounded-full bg-primary-dark transition-colors duration-200 cursor-pointer hover:ring-1 hover:ring-primary-light relative">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 sm:w-6 sm:h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
        <span class="text-lg text-red-500 absolute top-1.5 right-0.5 sm:top-2 sm:right-1">
           <svg class="w-1.5 h-1.5 sm:w-2 sm:h-2 text-red-500/70" viewBox="0 0 10 10" fill="currentColor">
            <circle cx="4" cy="4" r="4" />
          </svg>
        </span>
       </button>
      </div>
    </header>
</template>