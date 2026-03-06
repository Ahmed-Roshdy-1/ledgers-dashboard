<script setup lang="ts">
import { computed } from 'vue'
import Chart from 'primevue/chart'
import { getCashInflowOutflowData } from '@/composables'

const resolveColor = (variableName: string) => {
  if (typeof window === 'undefined') return ''
  return getComputedStyle(document.documentElement).getPropertyValue(variableName).trim()
}

const chartData = computed(() => {
  const blue = resolveColor('--color-primary-dark')
  const pink = resolveColor('--color-secondary')

  const data = getCashInflowOutflowData(blue, pink)

  // Customizing for visual excellence
  if (data.datasets[0]) {
    data.datasets[0].pointBorderColor = resolveColor('--color-primary');
    data.datasets[0].pointBorderWidth = 2;
    data.datasets[0].pointRadius = 3;
    (data.datasets[0] as any).backgroundColor = (context: any) => {
      const chart = context.chart;
      const { ctx, chartArea } = chart;
      if (!chartArea) return null;
      const gradient = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
      gradient.addColorStop(0, 'rgba(59, 130, 246, 0.4)');
      gradient.addColorStop(1, 'rgba(59, 130, 246, 0.05)');
      return gradient;
    };
  }

  if (data.datasets[1]) {
    data.datasets[1].pointBorderColor = resolveColor('--color-secondary');
    data.datasets[1].pointBorderWidth = 2;
    data.datasets[1].pointRadius = 3;
    (data.datasets[1] as any).backgroundColor = (context: any) => {
      const chart = context.chart;
      const { ctx, chartArea } = chart;
      if (!chartArea) return null;
      const gradient = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
      gradient.addColorStop(0, 'rgba(236, 72, 153, 0.4)');
      gradient.addColorStop(1, 'rgba(236, 72, 153, 0.05)');
      return gradient;
    };
  }

  return data
})

const chartOptions = computed(() => {
  const textColor = resolveColor('--color-text-secondary')
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
      },
      forecastHighlight: {
        id: 'forecastHighlight',
        beforeDraw: (chart: any) => {
          const { ctx, chartArea: { top, height }, scales: { x } } = chart;
          const startX = x.getPixelForValue(9); // Oct index is 9

          ctx.save();
          ctx.fillStyle = resolveColor('--color-primary');
          ctx.fillRect(startX, top, x.right - startX, height);
          ctx.restore();
        }
      }
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: {
          color: textColor,
          font: { size: 10 },
          maxRotation: 0,
          autoSkip: false
        }
      },
      y: {
        display: false,
        grid: {
          display: false
        }
      }
    },
    interaction: {
      intersect: false,
      mode: 'index',
    }
  }
})

// Highlighting the forecast period (Oct-Dec)
const plugins = [{
  id: 'forecastHighlight',
  beforeDraw: (chart: any) => {
    const { ctx, chartArea: { top, height }, scales: { x } } = chart;
    if (!x || !x.getPixelForValue) return;

    // Sept index 8, Oct index 9. Start highlight between them.
    const startX = (x.getPixelForValue(8) + x.getPixelForValue(9)) / 2;
    const endX = x.right;

    ctx.save();
    ctx.fillStyle = 'rgba(59, 130, 246, 0.08)';
    ctx.fillRect(startX, top, endX - startX, height);
    ctx.restore();
  }
}]

</script>

<template>
  <div class="bg-background rounded-[24px] p-3 border border-border shadow-sm h-[300px] flex flex-col overflow-hidden">
    <!-- Header -->
    <div class="mb-1">
      <h3 class="font-bold text-text-primary text-[11px] uppercase tracking-wider">Cash Inflow vs outflow
      </h3>
    </div>

    <!-- Chart -->
    <div class="flex-1 relative">
      <Chart type="line" :data="chartData" :options="chartOptions" :plugins="plugins" class="h-[240px]" />
    </div>
  </div>
</template>
