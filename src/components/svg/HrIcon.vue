<template>
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" :class="className">
    <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" stroke-width="2"/>
    <text x="6" y="16" font-size="8" font-family="Arial, sans-serif" fill="currentColor">HR</text>
  </svg>
</template>

<script setup lang="ts">
defineProps<{
  className?: string
}>()
</script>
