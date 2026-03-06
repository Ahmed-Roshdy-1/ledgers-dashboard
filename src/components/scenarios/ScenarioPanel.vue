<script setup lang="ts">
import { ref } from 'vue';
import SparkleIcon from '../svg/SparkleIcon.vue';
import {
  forecastSlidersData,
  cashFlowSlidersData,
  forecastOutputData,
  cashFlowOutputData
} from '@/composables/useMockData';

const forecastSliders = ref([...forecastSlidersData]);
const cashFlowSliders = ref([...cashFlowSlidersData]);

const forecastOutput = forecastOutputData;
const cashFlowOutput = cashFlowOutputData;

const getPercentage = (value: number) => {
  return `${value}%`;
};
</script>

<template>
  <div class="flex flex-col gap-4 h-full overflow-y-auto no-scrollbar relative">
    <!-- Forecast & Budget Tuner -->
    <section class="bg-background rounded-[20px] p-4 lg:p-5 h-[50%] border border-border shadow-sm">
      <div class="mb-1">
        <h3 class="text-base font-extrabold text-text-primary  mb-0.5 tracking-tight">Forecast & Budget Tuner</h3>
        <p class="text-[11px] font-medium text-text-secondary">Adjust revenue, COS, and OPEX assumptions to see profit
          scenarios live.</p>
      </div>

      <!-- Sliders Grid -->
      <div class="grid grid-cols-3 2xl:grid-cols-3 gap-x-3 gap-y-2 mb-2">
        <div v-for="slider in forecastSliders" :key="slider.label" class="flex flex-col gap-1 min-w-0">
          <label class="text-[11px] font-bold text-text-secondary truncate">{{ slider.label }}:</label>
          <div class="relative flex items-center h-3">
            <input type="range" v-model="slider.value" class="custom-slider"
              :style="{ '--percentage': getPercentage(slider.value) }" />
          </div>
        </div>
      </div>

      <!-- Output Snapshot -->
      <div
        class="bg-primary rounded-[20px] rounded-t-[2px] p-2 lg:py-3 lg:px-2 overflow-hidden shadow-lg shadow-primary/20">
        <div class="grid grid-cols-4 text-[10px] text-background font-bold uppercase tracking-widest mb-3">
          <div class="text-center">Output Snapshot:</div>
          <div class="text-center">Current</div>
          <div class="text-center">Adjusted</div>
          <div class="text-center">Changes</div>
        </div>
        <div class="px-1">
          <div v-for="row in forecastOutput" :key="row.label"
            class="grid grid-cols-4 text-[12px] leading-none py-1 border-b text-text-primary border-white/10 last:border-0 items-center">
            <div class="font-bold whitespace-nowrap">{{ row.label }}:</div>
            <div class="text-center tabular-nums">{{ row.current }}</div>
            <div class="text-center tabular-nums">{{ row.adjusted }}</div>
            <div class="text-center tabular-nums opacity-80 text-background">{{ row.changes }}</div>
          </div>
        </div>
      </div>

      <!-- AI Section -->
      <div class="mt-4 flex flex-col items-center">
        <h4 class="text-[11px] font-bold mb-1 flex items-center gap-1">
          <span class="bg-linear-to-r from-primary to-violet-400 text-transparent bg-clip-text font-bold">Ledgers
            AI</span>
        </h4>
        <p class="text-[10px] leading-tight text-text-secondary text-center italic max-w-[95%] mx-auto">
          "These adjustments show how changes in revenue, costs, and spending can influence your profit.
          Raising revenue or lowering expenses generally improves your margins and supports healthier monthly results."
        </p>
      </div>
    </section>

    <!-- Generate Button Row -->
    <div
      class="flex justify-center -my-1 z-10 py-1 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-1 w-full pointer-events-none">
      <!-- Background decorative line -->
      <div class="absolute top-1/2 left-0 right-0 h-[1.5px] bg-primary dark:bg-primary/40 -translate-y-1/2 z-0"></div>

      <button
        class="bg-background px-8 py-2.5 rounded-full border border-border flex items-center gap-3 cursor-pointer hover:scale-105 hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.25)] active:scale-95 transition-all duration-300 group overflow-hidden relative pointer-events-auto">
        <span
          class="bg-linear-to-r from-primary to-violet-400 bg-clip-text text-transparent font-black text-base tracking-tight relative z-10">Generate</span>
        <SparkleIcon
          class-name="w-6 h-6 relative z-10 group-hover:scale-110 group-hover:rotate-[15deg] transition-all duration-500" />
      </button>
    </div>




    <!-- Cash Flow Scenario Tuner -->
    <section class="bg-background rounded-[20px] p-4 lg:p-5 h-[50%] border border-border shadow-sm">
      <div class="mb-1">
        <h3 class="text-base font-extrabold text-text-primary mb-0.5 tracking-tight">Cash Flow Scenario Tuner</h3>
        <p class="text-[11px] font-medium text-text-secondary">Adjust inflow, outflow, and operational levers to see
          instant impact on runway and cash position.</p>
      </div>

      <!-- Sliders Grid -->
      <div class="grid grid-cols-3 gap-x-4 gap-y-3 mb-2">
        <div v-for="slider in cashFlowSliders" :key="slider.label" class="flex flex-col gap-1.5 min-w-0">
          <label class="text-[11px] font-bold text-text-secondary truncate">{{ slider.label }}</label>
          <div class="relative flex items-center h-4">
            <input type="range" v-model="slider.value" class="custom-slider"
              :style="{ '--percentage': getPercentage(slider.value) }" />
          </div>
        </div>
      </div>

      <!-- Output Snapshot -->
      <div
        class="bg-primary rounded-[20px] rounded-t-[2px] p-2 lg:py-3 lg:px-2 overflow-hidden shadow-lg shadow-primary/20">
        <div class="grid grid-cols-4 text-[10px] font-bold text-background uppercase tracking-widest opacity-80 mb-3">
          <div class="text-center">Output Snapshot:</div>
          <div class="text-center">Current</div>
          <div class="text-center">Adjusted</div>
          <div class="text-center">Changes</div>
        </div>
        <div class="space-y-2 px-1">
          <div v-for="row in cashFlowOutput" :key="row.label"
            class="grid grid-cols-4 text-[12px] leading-none py-1 border-b border-white/10 last:border-0 items-center">
            <div class="font-bold whitespace-nowrap">{{ row.label }}</div>
            <div class="text-center tabular-nums">{{ row.current }}</div>
            <div class="text-center tabular-nums">{{ row.adjusted }}</div>
            <div class="text-center tabular-nums  text-background">{{ row.changes }}</div>
          </div>
        </div>
      </div>

      <!-- AI Section -->
      <div class="mt-4 flex flex-col items-center">
        <h4 class="text-[11px] font-bold mb-1 flex items-center gap-1">
          <span class="bg-linear-to-r from-primary to-violet-400 text-transparent bg-clip-text font-bold">Ledgers
            AI</span>
        </h4>
        <p class="text-[10px] leading-tight text-text-secondary text-center italic max-w-[95%] mx-auto">
          "Adjusting inflow, outflow, and payment timing helps you see how your cash balance may shift month to month.
          Higher inflows or lighter spending usually support a stronger cash position."
        </p>
      </div>
    </section>
  </div>
</template>

<style scoped>
.custom-slider {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 6px;
  background: linear-gradient(to right, #4499e3 var(--percentage), #e2e8f0 var(--percentage));
  border-radius: 10px;
  outline: none;
  cursor: pointer;
}

.dark .custom-slider {
  background: linear-gradient(to right, #4499e3 var(--percentage), #2e3b4d var(--percentage));
}

.custom-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 34px;
  height: 15px;
  background: #ffffff;
  border-radius: 10px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 4px 10px -2px rgb(0 0 0 / 0.12);
  cursor: pointer;
  transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.2s ease;
  margin-top: -1px;
}

.custom-slider::-moz-range-thumb {
  width: 34px;
  height: 20px;
  background: #ffffff;
  border-radius: 10px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 4px 10px -2px rgb(0 0 0 / 0.12);
  cursor: pointer;
  transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.2s ease;
}

.custom-slider::-webkit-slider-thumb:hover,
.custom-slider::-moz-range-thumb:hover {
  transform: scale(1.1);
  box-shadow: 0 8px 15px -4px rgb(0 0 0 / 0.2);
}

.dark .custom-slider::-webkit-slider-thumb,
.dark .custom-slider::-moz-range-thumb {
  background: #f8fafc;
  border-color: #475569;
}
</style>
