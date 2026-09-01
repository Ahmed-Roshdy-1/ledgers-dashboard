<script setup lang="ts">
withDefaults(defineProps<{
  eyebrow: string
  title: string
  description: string
  action?: string
}>(), { action: '' })

defineEmits<{ action: [] }>()
</script>

<template>
  <section class="mt-5 sm:mt-7 px-1 sm:px-4 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
    <div>
      <p class="text-[11px] font-bold tracking-[0.18em] text-primary uppercase">{{ eyebrow }}</p>
      <h1 class="mt-1 text-2xl sm:text-3xl font-bold tracking-tight text-text-primary">{{ title }}</h1>
      <p class="mt-1 text-sm text-text-secondary">{{ description }}</p>
    </div>
    <button v-if="action" type="button" @click="$emit('action')"
      class="rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-primary/20 transition hover:bg-primary-dark active:scale-95">
      {{ action }}
    </button>
  </section>
</template>
