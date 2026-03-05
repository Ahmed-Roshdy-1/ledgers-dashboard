<script setup lang="ts">
import { computed } from 'vue'
import Chart from 'primevue/chart'
import { getRevenueExpensesData } from '@/composables'

// Helper to resolve CSS variables to hex/rgb for Chart.js canvas
const resolveColor = (variableName: string) => {
  if (typeof window === 'undefined') return ''
  return getComputedStyle(document.documentElement).getPropertyValue(variableName).trim()
}

const chartData = computed(() => {
  const primary = resolveColor('--color-primary-dark')
  const secondary = resolveColor('--color-secondary')
  
  return getRevenueExpensesData(primary, secondary)
})

const chartOptions = computed(() => {
  const textColor = resolveColor('--color-text-secondary')
  const gridColor = resolveColor('--color-chart-grid')
  const tooltipBg = resolveColor('--color-chart-tooltip-bg')
  const borderCol = resolveColor('--color-border')
  const textPrimary = resolveColor('--color-text-primary')


  return {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        mode: 'index',
        intersect: false,
        backgroundColor: tooltipBg,
        titleColor: textPrimary,
        bodyColor: textPrimary,
        borderColor: borderCol,
        borderWidth: 1
      }
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: {
          color: textColor,
          font: { size: 12 }
        }
      },
      y: {
        beginAtZero: true,
        grid: {
          color: gridColor
        },
        ticks: {
          stepSize: 180,
          color: textColor,
          font: { size: 12 }
        }
      }
    }
  }
})
</script>

<template>
  <div class="bg-background rounded-[20px] p-5">
    <!-- Header -->
    <div class="flex items-center justify-between mb-3 font-semibold text-text-primary">
      <span>Revenue vs Expenses</span>
      <!-- svg -->
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 4L6 8L2 4" stroke="currentColor" class="text-text-secondary" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>

    <!-- Chart -->
    <div class="h-[200px] md:h-[250px]">
      <Chart type="bar" :data="chartData" :options="chartOptions" class="h-full" />
    </div>

    <!-- Footer note -->
    <div class="text-xs text-text-secondary flex items-center justify-start pl-16 p-0 m-0">
      <span class="text-[#3b82f6] text-lg">✦</span>
      <span class="ml-2">
        Losses in March and April driven by seasonality + marketing spikes
      </span>
    </div>
  </div>
</template>
