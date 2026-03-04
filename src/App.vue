<script setup lang="ts">
import { onMounted } from 'vue';
import HeaderApp from './components/header/index.vue';
import AppTitle from './components/AppTitle.vue';
import AppSidebar from './components/sidebar/index.vue';
import { useTheme, kpis } from '@/composables';
import KpiCard from './components/cards/Kpi.vue';

const { initTheme } = useTheme();

onMounted(() => {
  initTheme();
});
</script>

<template>
  <div class="min-h-screen mx-auto animate-fade-in flex p-2 sm:p-4">
    <AppSidebar />
    <main class="bg-background-secondary rounded-xl p-2 sm:p-4 min-h-[92vh] sm:h-[96vh] mx-2 sm:mx-4 w-full shadow-lg shadow-primary/20 relative">
      <HeaderApp />
      <AppTitle />

      <!-- Outer Container -->
      <div class="flex flex-col gap-4 xl:flex-row mt-4">
        <!-- left side -->
        <div class="flex-1 flex flex-col gap-4">
          <section class="grid gap-3 grid-cols-[repeat(auto-fill,minmax(130px,1fr))]">
            <KpiCard v-for="kpi in kpis" :key="kpi.label" :kpi="kpi" />
          </section>
        </div>

        <!-- right side -->
        <div class="lg:col"></div>
      </div>
    </main>
  </div>
</template>


