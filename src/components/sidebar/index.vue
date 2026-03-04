<script setup lang="ts">
import ThemeToggle from '../header/ThemeToggle.vue';
import { ref, markRaw } from 'vue'
import DashboardIcon from '../svg/DashboardIcon.vue';
import LayersIcon from '../svg/LayersIcon.vue';
import ActivityIcon from '../svg/ActivityIcon.vue';
import HrIcon from '../svg/HrIcon.vue';
import SettingsIcon from '../svg/SettingsIcon.vue';

const activeIdx = ref(0)

const navIcons = [
    {
        label: 'Dashboard',
        component: markRaw(DashboardIcon),
    },
    {
        label: 'Layers',
        component: markRaw(LayersIcon),
    },
    {
        label: 'Activity',
        component: markRaw(ActivityIcon),
    },
    {
        label: 'HR',
        component: markRaw(HrIcon),
    },
    {
        label: 'Settings',
        component: markRaw(SettingsIcon),
    },
]
</script>

<template>
    <aside class="w-15 hidden sm:flex flex-col items-center justify-between gap-2 py-5">
        <img src="/logo.png" alt="logo" class="w-12 h-12 rounded-lg">
        <nav class="flex-1 flex items-center justify-center max-h-9/12">
            <ul class="flex flex-col items-center justify-center gap-2">
                <li v-for="(item, idx) in navIcons" :key="idx">
                    <button class="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200"
                        :class="activeIdx === idx
                            ? 'bg-primary text-white shadow-md'
                            : 'text-text-primary hover:text-text-secondary hover:bg-primary/10'
                            " :aria-label="item.label" @click="activeIdx = idx">
                        <component :is="item.component" class-name="w-5 h-5 sm:w-6 sm:h-6" />
                    </button>
                </li>
            </ul>
        </nav>
        <ThemeToggle />
    </aside>
</template>