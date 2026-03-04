<script setup lang="ts">
import { ref, watch } from 'vue'
import AppsIcon from '../svg/AppsIcon.vue'
import HamburgerIcon from '../svg/HamburgerIcon.vue'

const emit = defineEmits<{
  (e: 'update:tab', tab: string): void
}>()

const tabs: string[] = ['FINANCE', 'SALES', 'HR', 'MGMT']
const activeIndex = ref(0)

watch(activeIndex, (i) => {
  const tab = tabs[i]
  if (tab) emit('update:tab', tab)
})

function setActive(i: number) {
  activeIndex.value = i
}
</script>

<template>
  <div class="w-full flex items-center justify-center">
    <div
      class="max-w-2xl w-full flex items-center justify-start 2sm:justify-center px-2 sm:px-6 min-h-[48px] sm:min-h-[56px] gap-2">

      <div class="flex items-center gap-2">
        <button aria-label="Open apps"
          class="hidden xs:flex shrink-0 items-center justify-center w-7 h-7 sm:w-10 sm:h-10 rounded-full bg-surface shadow-md hover:shadow-lg transition cursor-pointer p-1.5">
          <AppsIcon class-name="text-primary" />
        </button>

        <!-- CENTER: tabs -->
        <div class="flex rounded-full bg-surface/90 p-1 sm:p-1.5 shadow-lg whitespace-nowrap" role="tablist"
          aria-label="Main sections">
          <template v-for="(tab, idx) in tabs" :key="tab">
            <button role="tab" :aria-selected="activeIndex === idx" tabindex="0" @click="setActive(idx)"
              class="px-3 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 focus:outline-none cursor-pointer"
              :class="activeIndex === idx
                ? 'bg-primary text-white shadow-md -translate-y-px'
                : 'text-text-secondary hover:text-text-primary'
                ">
              {{ tab }}
            </button>
          </template>
        </div>
      </div>


      <!-- RIGHT: date + hamburger -->
      <div class="items-center gap-2 sm:gap-3 shrink-0 hidden xl:flex ml-12">
        <div
          class="hidden xl:block rounded-full px-3 py-1.5 sm:py-2 text-xs sm:text-sm font-medium bg-surface border border-border min-w-[60px] sm:min-w-[72px] text-center shadow-md">
          Sep 25
        </div>
        <button aria-label="Open menu"
          class="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center bg-primary hover:shadow-lg transition cursor-pointer shadow-md">
          <HamburgerIcon class-name="w-4 h-3 sm:w-[18px] sm:h-[14px]" />
        </button>
      </div>
    </div>
  </div>
</template>
