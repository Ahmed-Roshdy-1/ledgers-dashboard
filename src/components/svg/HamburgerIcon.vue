<template>
  <svg :class="className" viewBox="0 0 18 14" fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <rect x="0" y="1" width="18" height="2" rx="1" fill="white" />
    <rect x="0" y="6" width="18" height="2" rx="1" fill="white" />
    <rect x="0" y="11" width="18" height="2" rx="1" fill="white" />
  </svg>
</template>

<script setup lang="ts">
defineProps<{
  className?: string
}>()
</script>
