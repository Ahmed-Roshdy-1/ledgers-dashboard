<template>
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" :class="className">
    <rect x="3" y="3" width="7" height="9"/>
    <rect x="14" y="3" width="7" height="5"/>
    <rect x="14" y="12" width="7" height="9"/>
    <rect x="3" y="16" width="7" height="5"/>
  </svg>
</template>

<script setup lang="ts">
defineProps<{
  className?: string
}>()
</script>
