<script setup lang="ts">
import { computed, ref } from 'vue'
import PageHeading from '@/components/PageHeading.vue'
const activeFilter = ref('All')
const filters = ['All', 'Finance', 'Sales', 'People', 'System']
const events = [
  { type: 'Sales', title: 'Northstar Labs moved to Negotiation', detail: 'Maya Chen updated the deal value to $84,000.', time: '12 min ago', initials: 'MC', color: 'bg-primary' },
  { type: 'Finance', title: 'September forecast was updated', detail: 'Operating expenses are now projected 3.2% below plan.', time: '42 min ago', initials: 'FA', color: 'bg-emerald-500' },
  { type: 'People', title: 'Lina Park submitted time off', detail: 'Requested Oct 21–23 · pending manager approval.', time: '1 hr ago', initials: 'LP', color: 'bg-violet-500' },
  { type: 'System', title: 'Weekly metrics report is ready', detail: 'Your Monday leadership report has been generated.', time: '3 hr ago', initials: 'AI', color: 'bg-amber-500' },
  { type: 'Sales', title: 'Brightside Media sent a proposal', detail: 'The proposal was shared with two customer stakeholders.', time: 'Yesterday', initials: 'LG', color: 'bg-secondary' },
  { type: 'Finance', title: 'Invoice #INV-1048 was paid', detail: 'Payment of $12,400 was deposited to the operating account.', time: 'Yesterday', initials: 'IN', color: 'bg-emerald-500' },
]
const visibleEvents = computed(() => activeFilter.value === 'All' ? events : events.filter(event => event.type === activeFilter.value))
</script>
<template>
  <PageHeading eyebrow="Business feed" title="Activity center"
    description="Stay current on the decisions and changes happening across your business." />
  <div class="mt-5 sm:mt-7 grid gap-5 xl:grid-cols-12">
    <section
      class="xl:col-span-8 rounded-2xl border border-border bg-background p-4 sm:p-5 shadow-md shadow-primary/10">
      <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 class="font-bold">Latest activity</h2>
          <p class="mt-1 text-xs text-text-secondary">{{ visibleEvents.length }} updates to review</p>
        </div>
        <div class="flex gap-1 overflow-x-auto rounded-xl bg-surface p-1"><button v-for="filter in filters"
            :key="filter" @click="activeFilter = filter"
            class="whitespace-nowrap rounded-lg px-3 py-1.5 text-xs font-medium transition"
            :class="activeFilter === filter ? 'bg-primary text-white shadow-sm' : 'text-text-secondary hover:text-text-primary'">{{
            filter }}</button></div>
      </div>
      <div class="mt-5 p-4">
        <article v-for="event in visibleEvents" :key="event.title"
          class="relative flex gap-3 border-l border-border pb-6 pl-5 last:pb-1"><span
            class="absolute -left-[18px] flex h-9 w-9 items-center justify-center rounded-full text-[10px] font-bold text-white ring-4 ring-background"
            :class="event.color">{{ event.initials }}</span>
          <div class="min-w-0 flex-1">
            <div class="flex flex-col gap-1 sm:flex-row sm:justify-between">
              <p class="text-sm font-semibold">{{ event.title }}</p><time
                class="shrink-0 text-xs text-text-secondary">{{ event.time }}</time>
            </div>
            <p class="mt-1 text-xs leading-5 text-text-secondary">{{ event.detail }}</p><span
              class="mt-2 inline-block rounded-full bg-surface px-2 py-0.5 text-[10px] font-semibold text-text-secondary">{{
              event.type }}</span>
          </div>
        </article>
      </div>
    </section>
    <aside class="xl:col-span-4 space-y-5">
      <section class="rounded-2xl bg-primary p-5 text-white shadow-lg shadow-primary/20">
        <p class="text-xs font-semibold uppercase tracking-wider text-white/70">Today at a glance</p>
        <p class="mt-3 text-3xl font-bold">14 updates</p>
        <p class="mt-1 text-sm text-white/75">Across 4 teams since this morning.</p>
        <div class="mt-6 grid grid-cols-2 gap-2">
          <div class="rounded-xl bg-white/15 p-3">
            <p class="text-lg font-bold">3</p>
            <p class="text-[10px] text-white/75">Need review</p>
          </div>
          <div class="rounded-xl bg-white/15 p-3">
            <p class="text-lg font-bold">2</p>
            <p class="text-[10px] text-white/75">Due today</p>
          </div>
        </div>
      </section>
      <section class="rounded-2xl border border-border bg-background p-5 shadow-md shadow-primary/10">
        <div class="flex items-center justify-between">
          <h2 class="font-bold">Your tasks</h2><span class="text-xs text-primary-dark">3 open</span>
        </div>
        <div class="mt-4 space-y-3"><label
            v-for="task in ['Approve Lina’s time-off request', 'Review Q4 sales forecast', 'Prepare leadership meeting notes']"
            :key="task" class="flex cursor-pointer items-start gap-3"><input type="checkbox"
              class="mt-0.5 accent-primary" /><span class="text-sm leading-5">{{ task }}</span></label></div><button
          class="mt-5 text-xs font-semibold text-primary-dark">View all tasks →</button>
      </section>
    </aside>
  </div>
</template>
