<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted } from 'vue'
import Chart from 'primevue/chart'
import { getGoalCompletionData } from '@/composables'
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

const resolveColor = (variableName: string) => {
  if (typeof window === 'undefined') return ''
  isDark.value // ensure reactivity
  return getComputedStyle(document.documentElement).getPropertyValue(variableName).trim()
}

const chartData = computed(() => {
  isDark.value
  // Colors as defined in tailwind theme
  const pink = resolveColor('--color-secondary')
  const blue = resolveColor('--color-primary')
  
  const data = getGoalCompletionData(pink, blue)
  
  // Responsive bar thickness for horizontal bars
  const thickness = windowWidth.value < 640 ? 20 : 35
  
  data.datasets.forEach(ds => {
    ds.barThickness = thickness
  })
  
  return data
})

const chartOptions = computed(() => {
  isDark.value
  const textColor = resolveColor('--color-text-secondary');

  return {
    indexAxis: 'y',
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        enabled: true
      }
    },
    scales: {
      x: {
        stacked: true,
        display: false,
        grid: { display: false }
      },
      y: {
        stacked: true,
        grid: { 
            display: false,
        },
        ticks: {
          color: textColor,
          font: {
            size: 14,
            weight: 'semibold'
          }
        }
      }
    }
  }
})
</script>

<template>
  <div class="bg-background rounded-[20px] py-3 px-5 border border-border shadow-sm shadow-primary/20">
    <!-- Header -->
    <div class="mb-1">
      <h3 class="font-bold text-lg text-primary">
        Goal Completion
      </h3>
    </div>

    <!-- Chart -->
    <div class="h-[100px] pl-4">
      <Chart type="bar" :data="chartData" :options="chartOptions" class="h-full" />
    </div>
  </div>
</template>
