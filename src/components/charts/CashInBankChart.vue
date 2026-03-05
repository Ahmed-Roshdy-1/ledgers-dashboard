<script setup lang="ts">
import { computed } from 'vue'
import Chart from 'primevue/chart'
import { getCashInBankData } from '@/composables'

const resolveColor = (variableName: string) => {
  if (typeof window === 'undefined') return ''
  return getComputedStyle(document.documentElement).getPropertyValue(variableName).trim()
}

const chartData = computed(() => {
  const blue = resolveColor('--color-primary-dark')
  const data = getCashInBankData(blue)
  if (data.datasets[0]) {
    data.datasets[0].pointBorderColor = resolveColor('--color-primary');
    data.datasets[0].pointBorderWidth = 2;
    data.datasets[0].pointRadius = 3;
  }
  return data
})

const chartOptions = computed(() => {
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
        display: false // Image hides X labels on smaller charts
      },
      y: {
        display: false
      }
    }
  }
})

// Foreground highlight plugin for the last 3 months
const plugins = [{
  id: 'forecastHighlight',
  beforeDraw: (chart: any) => {
    const { ctx, chartArea: { top, height, bottom }, scales: { x } } = chart;
    if (!x || !x.getPixelForValue) return;

    const startX = x.getPixelForValue(9);
    const endX = x.right;

    ctx.save();
    ctx.fillStyle = 'rgba(59, 130, 246, 0.08)';
    ctx.fillRect(startX, top, endX - startX, height);

    // Bottom line represent current state baseline if needed
    ctx.beginPath();
    ctx.moveTo(x.left, bottom);
    ctx.lineTo(x.right, bottom);
    ctx.strokeStyle = '#e5e7eb';
    ctx.lineWidth = 1;
    ctx.stroke();

    ctx.restore();
  }
}]

</script>

<template>
  <div class="bg-background rounded-[20px] p-2 border border-border shadow-sm flex flex-col h-[140px] overflow-hidden">
    <!-- Header -->
    <div class="mb-1 pl-1">
      <h3 class="font-bold text-primary text-[10px] uppercase tracking-wider">Cash In Bank</h3>
    </div>

    <!-- Chart -->
    <div class="flex-1 relative">
      <Chart type="line" :data="chartData" :options="chartOptions" :plugins="plugins" class="h-[100px]" />
    </div>
  </div>
</template>
