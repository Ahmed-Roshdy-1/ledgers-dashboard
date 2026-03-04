<script setup lang="ts">
import ThemeToggle from '../header/ThemeToggle.vue';
import { ref } from 'vue'

const activeIdx = ref(0)

const navIcons = [
    {
        label: 'Dashboard',
        svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="3" width="7" height="9"/>
                <rect x="14" y="3" width="7" height="5"/>
                <rect x="14" y="12" width="7" height="9"/>
                <rect x="3" y="16" width="7" height="5"/>
              </svg>`,
    },
    {
        label: 'Layers',
        svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>`,
    },
    {
        label: 'Activity',
        svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
              </svg>`,
    },
    {
        label: 'HR',
        svg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" stroke-width="2"/>
                    <text x="6" y="16" font-size="8" font-family="Arial, sans-serif" fill="currentColor">HR</text>
              </svg>`,
    },
    {
        label: 'Settings',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" 
                            width="24" 
                            height="24" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="currentColor" 
                            stroke-width="2" 
                            stroke-linecap="round" 
                            stroke-linejoin="round">
                            <circle cx="12" cy="12" r="3"></circle>
                            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06 a2 2 0 1 1-2.83 2.83l-.06-.06 a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21 a2 2 0 1 1-4 0v-.09 a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06 a2 2 0 1 1-2.83-2.83l.06-.06 a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3 a2 2 0 1 1 0-4h.09 a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06 a2 2 0 1 1 2.83-2.83l.06.06 a1.65 1.65 0 0 0 1.82.33h0 a1.65 1.65 0 0 0 1-1.51V3 a2 2 0 1 1 4 0v.09 a1.65 1.65 0 0 0 1 1.51h0 a1.65 1.65 0 0 0 1.82-.33l.06-.06 a2 2 0 1 1 2.83 2.83l-.06.06 a1.65 1.65 0 0 0-.33 1.82v0 a1.65 1.65 0 0 0 1.51 1H21 a2 2 0 1 1 0 4h-.09 a1.65 1.65 0 0 0-1.51 1z">
                    </path>

                </svg>`,
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
                        <span v-html="item.svg" class="w-5 h-5 sm:w-6 sm:h-6"></span>
                    </button>
                </li>
            </ul>
        </nav>
        <ThemeToggle />
    </aside>
</template>