<script setup lang="ts">
import PageHeading from '@/components/PageHeading.vue'
const initiatives = [{ name: 'Enterprise expansion', owner: 'Sales', progress: 78, date: 'Oct 14', state: 'On track' }, { name: 'Platform reliability', owner: 'Engineering', progress: 54, date: 'Nov 02', state: 'At risk' }, { name: 'New market launch', owner: 'Growth', progress: 32, date: 'Dec 01', state: 'On track' }]
</script>
<template>
  <PageHeading eyebrow="Executive workspace" title="Management cockpit"
    description="Focus the team on the outcomes, risks, and decisions that matter this week." action="Share update" />
  <div class="mt-5 sm:mt-7 grid gap-5 xl:grid-cols-12">
    <section class="xl:col-span-8 grid gap-4 sm:grid-cols-3">
      <article
        v-for="item in [['Company health', '82', 'Strong'], ['Quarterly objectives', '71%', 'On track'], ['Decisions pending', '5', '2 urgent']]"
        :key="item[0]" class="rounded-2xl border border-border bg-background p-5 shadow-md shadow-primary/10">
        <p class="text-xs text-text-secondary">{{ item[0] }}</p>
        <p class="mt-2 text-3xl font-bold">{{ item[1] }}</p>
        <p class="mt-3 text-xs font-semibold text-primary-dark">{{ item[2] }}</p>
      </article>
      <article class="sm:col-span-3 rounded-2xl border border-border bg-background p-5 shadow-md shadow-primary/10">
        <h2 class="font-bold">Quarterly priorities</h2>
        <p class="mt-1 text-xs text-text-secondary">Progress towards your company objectives</p>
        <div class="mt-6 grid gap-5 sm:grid-cols-3">
          <div
            v-for="goal in [{ n: 'Grow enterprise revenue', p: 78, c: 'bg-primary' }, { n: 'Improve retention', p: 64, c: 'bg-emerald-500' }, { n: 'Ship platform v2', p: 51, c: 'bg-violet-500' }]"
            :key="goal.n">
            <div class="flex justify-between text-xs"><span class="font-medium">{{ goal.n }}</span><span>{{ goal.p
                }}%</span></div>
            <div class="mt-2 h-2 rounded-full bg-border">
              <div class="h-full rounded-full" :class="goal.c" :style="{ width: `${goal.p}%` }"></div>
            </div>
          </div>
        </div>
      </article>
    </section>
    <aside class="xl:col-span-4 rounded-2xl bg-primary p-5 text-white shadow-lg shadow-primary/20">
      <p class="text-xs font-semibold uppercase tracking-wider text-white/70">Executive insight</p>
      <h2 class="mt-3 text-xl font-bold">Retention is your clearest lever.</h2>
      <p class="mt-3 text-sm leading-6 text-white/80">A 2-point improvement in quarterly retention would add an
        estimated $96k in annualized revenue.</p><button
        class="mt-6 rounded-lg bg-white px-3 py-2 text-xs font-bold text-primary-dark">Open recommendation</button>
    </aside>
  </div>
  <section class="mt-5 rounded-2xl border border-border bg-background p-5 shadow-md shadow-primary/10">
    <div class="flex items-center justify-between">
      <div>
        <h2 class="font-bold">Strategic initiatives</h2>
        <p class="mt-1 text-xs text-text-secondary">Programs tied directly to this quarter's outcomes</p>
      </div><button class="text-xs font-semibold text-primary-dark">View all</button>
    </div>
    <div class="mt-5 space-y-4">
      <article v-for="initiative in initiatives" :key="initiative.name"
        class="grid gap-3 rounded-xl bg-surface p-4 sm:grid-cols-[1fr_110px_150px_100px]">
        <div>
          <p class="font-semibold">{{ initiative.name }}</p>
          <p class="mt-1 text-xs text-text-secondary">Owner: {{ initiative.owner }}</p>
        </div>
        <div>
          <p class="text-xs text-text-secondary">Target</p>
          <p class="mt-1 text-sm font-medium">{{ initiative.date }}</p>
        </div>
        <div>
          <div class="flex justify-between text-xs"><span class="text-text-secondary">Progress</span><span>{{
            initiative.progress }}%</span></div>
          <div class="mt-2 h-2 rounded-full bg-border">
            <div class="h-full rounded-full bg-primary" :style="{ width: `${initiative.progress}%` }"></div>
          </div>
        </div><span class="self-center rounded-full px-2.5 py-1 text-center text-xs font-semibold"
          :class="initiative.state === 'At risk' ? 'bg-secondary/15 text-secondary-dark' : 'bg-emerald-500/15 text-emerald-600'">{{
            initiative.state }}</span>
      </article>
    </div>
  </section>
</template>
