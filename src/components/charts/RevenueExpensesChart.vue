<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted } from 'vue'
import Chart from 'primevue/chart'
import { getRevenueExpensesData } from '@/composables'
import { useTheme } from '@/composables/useTheme'
const { isDark } = useTheme()

const windowWidth = ref(typeof window !== 'undefined' ? window.innerWidth : 1200)
const updateWidth = () => {
  windowWidth.value = window.innerWidth
}

onMounted(() => {
  window.addEventListener('resize', updateWidth)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateWidth)
})

// Helper to resolve CSS variables to hex/rgb for Chart.js canvas
const resolveColor = (variableName: string) => {
  if (typeof window === 'undefined') return ''
  // Dependency on isDark to trigger re-evaluation
  isDark.value
  return getComputedStyle(document.documentElement).getPropertyValue(variableName).trim()
}

const chartData = computed(() => {
  // Ensure reactivity by accessing isDark and windowWidth
  isDark.value
  const primary = resolveColor('--color-primary-dark')
  const secondary = resolveColor('--color-secondary')
  
  const data = getRevenueExpensesData(primary, secondary)
  
  // Determine thickness based on screen width
  const thickness = windowWidth.value < 640 ? 8 : (windowWidth.value < 1024 ? 12 : 18)
  
  data.datasets.forEach(dataset => {
    dataset.barThickness = thickness
  })
  
  return data
})

const chartOptions = computed(() => {
  // Ensure reactivity by accessing isDark
  isDark.value
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
  <div class="bg-background rounded-[20px] p-5 border border-border shadow-sm shadow-primary/20">
    <!-- Header -->
    <div class="flex items-center justify-start gap-2 mb-3 font-semibold text-text-primary">
      <span>Revenue vs Expenses</span>
      <!-- svg -->
      <svg width="18" height="18" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="mt-1">
        <path d="M10 4L6 8L2 4" stroke="currentColor" class="text-text-primary" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>

    <!-- Chart -->
    <div class="h-[180px] md:h-[220px]">
      <Chart type="bar" :data="chartData" :options="chartOptions" class="h-full" />
    </div>

    <!-- Footer note -->
    <div class="text-xs text-text-secondary flex items-start sm:items-center justify-start sm:pl-16 mt-4">
      <span class="text-primary text-lg leading-none shrink-0">✦</span>
      <span class="ml-2 italic leading-tight">
        Losses in March and April driven by seasonality + marketing spikes
      </span>
    </div>
  </div>
</template>
