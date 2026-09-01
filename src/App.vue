<script setup>
import { computed, defineAsyncComponent } from 'vue';
const DefaultLayout = defineAsyncComponent(() => import('@/layouts/DefaultLayout.vue'));
import { RouterView } from 'vue-router';

</script>

<template>
  <component :is="DefaultLayout">
    <RouterView />
  </component>
</template>
