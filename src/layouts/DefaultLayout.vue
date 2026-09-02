<script setup lang="ts">
import AppSidebar from '@/components/sidebar/index.vue';
import HamburgerIcon from '@/components/svg/HamburgerIcon.vue';
import HeaderApp from '@/components/header/index.vue';
import { useTheme } from '@/composables';
import { onMounted, ref } from 'vue';
const isSidebarOpen = ref(false);

const toggleSidebar = () => {
    isSidebarOpen.value = !isSidebarOpen.value;
};
const { initTheme } = useTheme();


onMounted(() => {
    initTheme();
});
</script>

<template>
    <div class="min-h-screen max-w-[1920px] mx-auto animate-fade-in flex p-1 sm:p-4 bg-background overflow-x-hidden">
        <AppSidebar :is-open="isSidebarOpen" @close="isSidebarOpen = false" />


        <!-- Mobile Hamburger -->
        <button @click="toggleSidebar"
            class="sm:hidden fixed bottom-6 right-6 w-14 h-14 rounded-full bg-primary text-white border border-border shadow-2xl shadow-primary/20 z-50 flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-200">
            <HamburgerIcon class-name="w-6 h-5" />
        </button>
        <main
            class="bg-background-secondary rounded-2xl p-3 sm:p-5 lg:p-6 min-h-[calc(100vh-1rem)] sm:min-h-[calc(100vh-25rem)] mx-1 sm:mx-4 w-full border border-border mb-2 shadow-xl shadow-primary/20 relative transition-all duration-300 flex flex-col">

            <HeaderApp />
            <slot />
        </main>


    </div>
</template>