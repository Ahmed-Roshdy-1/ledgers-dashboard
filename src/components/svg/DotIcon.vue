<template>
  <svg :class="className" viewBox="0 0 10 10" fill="currentColor">
    <circle cx="4" cy="4" r="4" />
  </svg>
</template>

<script setup lang="ts">
defineProps<{
  className?: string
}>()
</script>
