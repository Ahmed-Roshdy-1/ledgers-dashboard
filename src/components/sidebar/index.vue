<script setup lang="ts">
import ThemeToggle from '../header/ThemeToggle.vue';
import { computed, markRaw } from 'vue'
import { useRoute } from 'vue-router'
import DashboardIcon from '../svg/DashboardIcon.vue';
import LayersIcon from '../svg/LayersIcon.vue';
import ActivityIcon from '../svg/ActivityIcon.vue';
import HrIcon from '../svg/HrIcon.vue';
import SettingsIcon from '../svg/SettingsIcon.vue';

const props = defineProps({
    isOpen: {
        type: Boolean,
        default: false
    }
})

const emit = defineEmits(['close'])

const route = useRoute()

const navIcons = [
    {
        label: 'Dashboard',
        route: 'home',
        component: markRaw(DashboardIcon),
    },
    {
        label: 'Layers',
        route: 'sales',
        component: markRaw(LayersIcon),
    },
    {
        label: 'Activity',
        route: 'activity',
        component: markRaw(ActivityIcon),
    },
    {
        label: 'HR',
        route: 'hr',
        component: markRaw(HrIcon),
    },
    {
        label: 'Settings',
        route: 'mgmt',
        component: markRaw(SettingsIcon),
    },
]

const activeRoute = computed(() => route.name)
</script>

<template>
    <!-- Mobile Backdrop -->
    <div v-if="isOpen" class="fixed inset-0 bg-black/50 z-40 sm:hidden transition-opacity duration-300"
        @click="emit('close')"></div>

    <!-- Sidebar -->
    <aside
        class="fixed border-r border-border sm:border-none sm:sticky  top-0 sm:top-4 left-0 h-full sm:h-[calc(100vh-2rem)] w-[64px] sm:w-16 flex flex-col items-center justify-between gap-4 py-6 bg-surface sm:bg-transparent z-50 transition-transform duration-300 sm:translate-x-0 sm:flex overflow-y-auto no-scrollbar"
        :class="isOpen ? 'translate-x-0' : '-translate-x-full'">
        <div class="flex flex-col items-center gap-6">
            <img src="/logo.png" alt="logo" class="w-10 h-10 sm:w-12 sm:h-12 rounded-xl shadow-lg">

        </div>

        <nav class="flex-1 flex flex-col items-center justify-center w-full">
            <ul class="flex flex-col items-center gap-4">
                <li v-for="(item, idx) in navIcons" :key="idx">
                    <router-link
                        :to="{ name: item.route }"
                        class="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center transition-all duration-300"
                        :class="activeRoute === item.route
                            ? 'bg-primary text-white shadow-lg shadow-primary/30'
                            : 'text-text-secondary hover:text-primary hover:bg-primary/5'
                            " :aria-label="item.label" @click="emit('close')">
                        <component :is="item.component" class-name="w-5 h-5 sm:w-6 sm:h-6" />
                    </router-link>
                </li>
            </ul>
        </nav>

        <div class="pb-2">
            <ThemeToggle />
        </div>
    </aside>
</template>
