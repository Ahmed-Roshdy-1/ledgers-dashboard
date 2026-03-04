<template>
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" :class="className">
    <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
  </svg>
</template>

<script setup lang="ts">
defineProps<{
  className?: string
}>()
</script>
