<script setup lang="ts">
import { onMounted, ref } from 'vue';
import HeaderApp from './components/header/index.vue';
import AppTitle from './components/AppTitle.vue';
import AppSidebar from './components/sidebar/index.vue';
import { useTheme, kpis } from '@/composables';
import KpiCard from './components/cards/Kpi.vue';
import RevenueExpensesChart from './components/charts/RevenueExpensesChart.vue';
import ProfitLossChart from './components/charts/ProfitLossChart.vue';
import GoalCompletionChart from './components/charts/GoalCompletionChart.vue';
import CashInflowOutflowChart from './components/charts/CashInflowOutflowChart.vue';
import CashInBankChart from './components/charts/CashInBankChart.vue';
import NetFlowChart from './components/charts/NetFlowChart.vue';
import HamburgerIcon from './components/svg/HamburgerIcon.vue';

const { initTheme } = useTheme();
const isSidebarOpen = ref(false);

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};

onMounted(() => {
  initTheme();
});
</script>

<template>
  <div class="min-h-screen max-w-[1920px] mx-auto animate-fade-in flex p-1 sm:p-4 bg-background overflow-x-hidden">
    <AppSidebar :is-open="isSidebarOpen" @close="isSidebarOpen = false" />

    <!-- Mobile Hamburger -->
    <button @click="toggleSidebar"
      class="sm:hidden fixed bottom-6 right-6 w-14 h-14 rounded-full bg-primary text-white shadow-2xl z-50 flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-200">
      <HamburgerIcon class-name="w-6 h-5" />
    </button>

    <main
      class="bg-background-secondary rounded-2xl p-3 sm:p-5 lg:p-6 min-h-[calc(100vh-1rem)] sm:min-h-[calc(100vh-25rem)] mx-1 sm:mx-4 w-full border border-border mb-2 shadow-xl shadow-primary/20 relative transition-all duration-300 flex flex-col">
      <HeaderApp />
      <div class="mt-4 sm:mt-6">
        <AppTitle />
      </div>

      <!-- Outer Container -->
      <div class="flex flex-col xl:flex-row gap-6 mt-4 lg:mt-6 flex-1">
        <!-- left side -->
        <div class="flex-1 flex flex-col gap-6">
          <section class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-7 gap-4">
            <KpiCard v-for="kpi in kpis" :key="kpi.label" :kpi="kpi" />
          </section>

          <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-8 gap-4 lg:gap-5">
            <div class="lg:col-span-8 xl:col-span-5 order-1">
              <RevenueExpensesChart />
            </div>
            <div class="lg:col-span-8 xl:col-span-3 flex flex-col gap-4 lg:gap-5 order-2">
              <ProfitLossChart />
              <GoalCompletionChart />
            </div>
          </div>

          <!-- New Charts Section -->
          <div class="bg-primary p-2 lg:p-3 rounded-[32px] grid grid-cols-1 lg:grid-cols-12 gap-2 lg:gap-3 h-auto">
            <div class="lg:col-span-8 h-auto">
              <CashInflowOutflowChart />
            </div>
            <div class="lg:col-span-4 flex flex-col gap-3 lg:gap-4 h-auto">
              <CashInBankChart />
              <NetFlowChart />
            </div>
          </div>

        </div>

        <!-- right side - Activity/Details panel -->
        <div
          class="w-full xl:w-[400px] 2xl:w-[600px] shrink-0 bg-background rounded-2xl p-4 lg:p-6 border border-border shadow-sm">
          <div class="flex flex-col h-full">

          </div>
        </div>
      </div>
    </main>
  </div>
</template>
