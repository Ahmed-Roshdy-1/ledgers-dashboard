<script setup lang="ts">
import { computed } from 'vue'
import Chart from 'primevue/chart'
import { getProfitLossData } from '@/composables'
import { useTheme } from '@/composables/useTheme'

const { isDark } = useTheme()

const resolveColor = (variableName: string) => {
  if (typeof window === 'undefined') return ''
  isDark.value // ensure reactivity
  return getComputedStyle(document.documentElement).getPropertyValue(variableName).trim()
}

const chartData = computed(() => {
  isDark.value
  const data = getProfitLossData()
  const primaryColor = resolveColor('--color-primary') || '#4499e3'
  const secondaryColor = resolveColor('--color-secondary') || '#ff5a91'
  const surfaceColor = resolveColor('--color-surface') || '#ffffff'
  
  if (data.datasets && data.datasets[0]) {
    data.datasets[0].borderColor = surfaceColor
    data.datasets[0].borderWidth = 2
    
    data.datasets[0].backgroundColor = (context: any) => {
      const chart = context.chart;
      const {ctx, chartArea, scales} = chart;

      if (!chartArea) {
        return null;
      }
      
      const yScale = scales.y;
      const zeroPos = yScale.getPixelForValue(0);
      const top = chartArea.top;
      const bottom = chartArea.bottom;
      
      // Calculate normalized position of 0 (0 to 1, bottom to top)
      const zeroPercentage = Math.max(0, Math.min(1, (bottom - zeroPos) / (bottom - top)));
      
      const gradient = ctx.createLinearGradient(0, bottom, 0, top);
      
      // Below zero: Secondary color (Loss)
      gradient.addColorStop(0, `${secondaryColor}66`); 
      gradient.addColorStop(zeroPercentage, `${secondaryColor}1a`);
      
      // Above zero: Primary color (Profit)
      gradient.addColorStop(zeroPercentage, `${primaryColor}1a`);
      gradient.addColorStop(1, `${primaryColor}99`);
      
      return gradient;
    };
  }

  return data
})

const chartOptions = computed(() => {
  isDark.value
  const gridColor = resolveColor('--color-border')
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
        borderWidth: 1,
      }
    },
    scales: {
      x: {
        display: false, // Hide X axis
        grid: { display: false }
      },
      y: {
        display: true,
        grid: {
          color: gridColor,
          lineWidth: (context: any) => context.tick.value === 0 ? 2 : 0,
        },
        ticks: {
          display: false // Hide ticks but keep the grid for the zero line
        },
        min: -30,
        max: 60
      }
    },
    elements: {
        line: {
            tension: 0.4
        }
    }
  }
})
</script>

<template>
  <div class="bg-background rounded-[20px] p-5 border border-border shadow-sm shadow-primary/20">
    <!-- Header -->
    <div class="flex items-center justify-between mb-1">
      <h3 class="font-bold text-lg">
        <span class="text-primary">Profit</span><span class="text-text-primary"> / </span><span class="text-secondary">Loss</span>
      </h3>
    </div>

    <!-- Chart -->
    <div class="h-[80px]">
      <Chart type="line" :data="chartData" :options="chartOptions" class="h-full" />
    </div>
  </div>
</template>
