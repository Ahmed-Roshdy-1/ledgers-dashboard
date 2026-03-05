<script setup lang="ts">
import { computed } from 'vue'
import Chart from 'primevue/chart'
import { getNetFlowData } from '@/composables'

const resolveColor = (variableName: string) => {
  if (typeof window === 'undefined') return ''
  return getComputedStyle(document.documentElement).getPropertyValue(variableName).trim()
}

const chartData = computed(() => {
  const blue = resolveColor('--color-primary')
  const pink = resolveColor('--color-secondary')
  const data = getNetFlowData(blue)

  if (data.datasets[0]) {
    // Styling the dataset
    data.datasets[0].pointBackgroundColor = '#fff';
    data.datasets[0].pointBorderWidth = 2;
    data.datasets[0].pointRadius = 4;
    data.datasets[0].pointHoverRadius = 6;
    data.datasets[0].tension = 0.45; // Smooth curves

    // Dynamic segment coloring
    (data.datasets[0] as any).segment = {
      borderColor: (ctx: any) => {
        const val1 = ctx.p0.parsed.y;
        const val2 = ctx.p1.parsed.y;
        return (val1 < 0 || val2 < 0) ? pink : blue;
      },
    };

    // Point border color also needs to be dynamic
    (data.datasets[0] as any).pointBorderColor = (ctx: any) => {
      const val = ctx.raw;
      return val < 0 ? pink : blue;
    };
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
        borderWidth: 1,
        padding: 8,
        usePointStyle: true,
        callbacks: {
          label: (ctx: any) => `NetFlow: ${ctx.parsed.y}`
        }
      },
      // Horizontal baseline at 0
      baseline: {
        id: 'baseline',
        afterDraw: (chart: any) => {
          const { ctx, chartArea: { left, right }, scales: { y } } = chart;
          if (!y) return;
          const zeroY = y.getPixelForValue(0);

          ctx.save();
          ctx.beginPath();
          ctx.moveTo(left, zeroY);
          ctx.lineTo(right, zeroY);
          ctx.strokeStyle = '#f1f1f1'; // Even lighter baseline
          ctx.lineWidth = 1;
          ctx.stroke();
          ctx.restore();
        }
      }
    },
    scales: {
      x: {
        display: false
      },
      y: {
        display: false,
        min: -30,
        max: 90
      }
    },
    layout: {
      padding: {
        top: 10,
        bottom: 15,
        left: 5,
        right: 5
      }
    }
  }
})

// Forecast/Highlight plugin
const plugins = [{
  id: 'forecastHighlight',
  beforeDraw: (chart: any) => {
    const { ctx, chartArea: { top, height, right }, scales: { x } } = chart;
    if (!x) return;

    // Start highlight from index 9 (Oct, Nov, Dec are forecast)
    const startX = x.getPixelForValue(9);
    const endX = right;

    ctx.save();
    // Light blue vertical band
    ctx.fillStyle = 'rgba(68, 153, 227, 0.08)';
    ctx.fillRect(startX, top, endX - startX, height);
    ctx.restore();
  }
}, {
  id: 'shadowPlugin',
  beforeDatasetsDraw: (chart: any) => {
    const { ctx, data } = chart;
    const color = data.datasets[0].borderColor || '#4499e3';
    ctx.save();
    ctx.shadowColor = color + '40'; // Add transparency
    ctx.shadowBlur = 10;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 6;
  },
  afterDatasetsDraw: (chart: any) => {
    const { ctx } = chart;
    ctx.restore();
  }
}]

</script>

<template>
  <div class="bg-background rounded-[24px] p-2 border border-border shadow-md flex flex-col h-[140px] overflow-hidden">
    <!-- Header -->
    <div class="mb-5 px-1">
      <h3 class="font-bold text-[#4499e3] text-[12px] font-sans tracking-tight">NetFlow</h3>
    </div>

    <!-- Chart -->
    <div class="flex-1 relative">
      <Chart type="line" :data="chartData" :options="chartOptions" :plugins="plugins" class="h-full" />
    </div>
  </div>
</template>
