<template>
  <svg :class="className" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="sparkle-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#4f8ff7;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#6366f1;stop-opacity:1" />
      </linearGradient>
    </defs>
    <!-- Large Sparkle -->
    <path d="M12 2C12 2 12.5 7.5 15 10C17.5 12.5 22 12 22 12C22 12 16.5 12.5 14 15C11.5 17.5 12 22 12 22C12 22 11.5 16.5 9 14C6.5 11.5 2 12 2 12C2 12 7.5 11.5 10 9C12.5 6.5 12 2 12 2Z" fill="url(#sparkle-gradient)" />
    <!-- Small Sparkle Top Right -->
    <path d="M19 3C19 3 19.2 5.2 20.2 6.2C21.2 7.2 23 7 23 7C23 7 20.8 7.2 19.8 8.2C18.8 9.2 19 11 19 11C19 11 18.8 8.8 17.8 7.8C16.8 6.8 15 7 15 7C15 7 17.2 6.8 18.2 5.8C19.2 4.8 19 3 19 3Z" fill="url(#sparkle-gradient)" opacity="0.8" />
    <!-- Tiny Sparkle Bottom Right -->
    <path d="M20 16C20 16 20.1 17.1 20.6 17.6C21.1 18.1 22 18 22 18C22 18 20.9 18.1 20.4 18.6C19.9 19.1 20 20 20 20C20 20 19.9 18.9 19.4 18.4C18.9 17.9 18 18 18 18C18 18 19.1 17.9 19.6 17.4C20.1 16.9 20 16 20 16Z" fill="#a855f7" />
  </svg>
</template>

<script setup lang="ts">
defineProps<{
  className?: string;
}>();
</script>

