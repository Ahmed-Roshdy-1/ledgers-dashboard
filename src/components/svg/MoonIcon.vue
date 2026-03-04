<template>
  <svg :class="className" fill="currentColor" viewBox="0 0 24 24">
    <path d="M21.64 13.65A9 9 0 1 1 10.35 2.36a7 7 0 1 0 11.29 11.29z"/>
  </svg>
</template>

<script setup lang="ts">
defineProps<{
  className?: string
}>()
</script>
