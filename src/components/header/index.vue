<script setup lang="ts">
import ThemeToggle from './ThemeToggle.vue';
</script>

<template>
  <header class="flex justify-between items-center">
      <div class="flex items-center gap-3">
        <div class="p-2 bg-primary rounded-xl shadow-lg shadow-primary/20">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        </div>
        <div>
          <h1 class="text-3xl font-bold tracking-tight">Ledgers <span class="text-gradient">Dashboard</span></h1>
          <p class="text-text-secondary text-sm">Welcome back, here's what's happening today.</p>
        </div>
      </div>
      <div class="flex items-center gap-4 bg-primary p-2 px-4 rounded-b-xl rounded-t-sm mb-1 absolute top-0 right-6">
          <ThemeToggle />
          <!-- notification icon -->
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
          <!-- <button class="btn-primary">Create New Ledger</button> -->
      </div>
    </header>
</template>