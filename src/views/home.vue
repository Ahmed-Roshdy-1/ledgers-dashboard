<script setup lang="ts">
import AppTitle from '@/components/AppTitle.vue';
import { kpis } from '@/composables';
import KpiCard from '@/components/cards/Kpi.vue';
import RevenueExpensesChart from '@/components/charts/RevenueExpensesChart.vue';
import ProfitLossChart from '@/components/charts/ProfitLossChart.vue';
import GoalCompletionChart from '@/components/charts/GoalCompletionChart.vue';
import CashInflowOutflowChart from '@/components/charts/CashInflowOutflowChart.vue';
import CashInBankChart from '@/components/charts/CashInBankChart.vue';
import NetFlowChart from '@/components/charts/NetFlowChart.vue';

import ScenarioPanel from '@/components/scenarios/ScenarioPanel.vue';



</script>

<template>

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
      <div
        class="bg-primary p-2 lg:p-3 rounded-[20px] xl:rounded-r-none grid grid-cols-1 lg:grid-cols-12 gap-2 lg:gap-3 h-auto border border-border shadow-lg shadow-primary/20 xl:border-none xl:-mr-10 z-10 xl:mb-px">
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
      class="w-full xl:w-[400px] 2xl:w-[600px] shrink-0 bg-primary rounded-[20px] lg:rounded-bl-none p-4 lg:p-4 border border-border shadow-lg shadow-primary/20 xl:sticky xl:top-6 overflow-y-auto no-scrollbar">
      <div class="flex flex-col h-full">
        <ScenarioPanel />
      </div>
    </div>
  </div>


</template>
