<template>
    <div
        class="kpi-card bg-background rounded-2xl px-4 py-3.5 shadow-card cursor-pointer fade-up border border-border shadow-md shadow-primary/20">
        <p class="text-xs text-text-secondary font-medium mb-1 truncate">{{ kpi.label }}</p>

        <!-- Runway card: dual values -->
        <template v-if="kpi.isRunway">
            <div class="flex items-baseline gap-3 mt-1">
                <div>
                    <span class="text-lg font-bold text-text-primary leading-tight">
                        {{ kpi.valueGross }}
                    </span>
                    <p class="text-[10px] text-text-secondary mt-0.5">Gross</p>
                </div>
                <div class="w-px h-8 bg-text-secondary shrink-0" />
                <div>
                    <span class="text-lg font-bold text-text-primary leading-tight">
                        {{ kpi.valueNet }}
                    </span>
                    <p class="text-[10px] text-text-secondary mt-0.5">Net</p>
                </div>
            </div>
        </template>

        <!-- Standard KPI card -->
        <template v-else>
            <p class="text-xl font-bold text-text-primary  leading-tight">{{ kpi.value }}</p>
            <div class="flex items-center gap-1.5 mt-1 flex-wrap">
                <span v-if="kpi.change" :class="[
                    'text-xs font-semibold px-1.5 rounded-md ml-auto',
                    kpi.positive
                        ? 'text-primary'
                        : 'text-secondary',
                ]">
                    {{ kpi.change }}
                </span>
                <span class="text-[10px] text-text-secondary">vs previous month</span>
            </div>
        </template>
    </div>
</template>

<script setup>
defineProps({
    kpi: {
        type: Object,
        required: true,
    },
})
</script>
