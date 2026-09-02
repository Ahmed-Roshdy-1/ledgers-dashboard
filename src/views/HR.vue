<script setup lang="ts">
import PageHeading from '@/components/PageHeading.vue'
const team = [{ initials: 'AR', name: 'Amir Rahman', role: 'Product Design', status: 'Working remotely', color: 'bg-violet-500' }, { initials: 'SK', name: 'Sofia Kim', role: 'Engineering', status: 'In office', color: 'bg-primary' }, { initials: 'JO', name: 'James Osei', role: 'Sales', status: 'On leave', color: 'bg-amber-500' }, { initials: 'LP', name: 'Lina Park', role: 'Operations', status: 'In office', color: 'bg-emerald-500' }]
</script>
<template>
  <PageHeading eyebrow="People operations" title="Team overview"
    description="Keep your people, hiring, and team pulse in one place." action="Invite teammate" />
  <div class="mt-5 sm:mt-7 grid gap-5 xl:grid-cols-12">
    <section class="xl:col-span-8 grid gap-4 sm:grid-cols-3">
      <article
        v-for="item in [['Total team', '86', '+6 this quarter'], ['Open roles', '7', '3 awaiting review'], ['Time off today', '4', '4.7% of team']]"
        :key="item[0]" class="rounded-2xl border border-border bg-background p-5 shadow-md shadow-primary/10">
        <p class="text-xs text-text-secondary">{{ item[0] }}</p>
        <p class="mt-2 text-3xl font-bold">{{ item[1] }}</p>
        <p class="mt-3 text-xs text-primary-dark">{{ item[2] }}</p>
      </article>
      <article class="sm:col-span-3 rounded-2xl border border-border bg-background p-5 shadow-md shadow-primary/10">
        <div class="flex justify-between">
          <div>
            <h2 class="font-bold">Headcount by department</h2>
            <p class="mt-1 text-xs text-text-secondary">Current organization makeup</p>
          </div><span class="text-xs text-text-secondary">86 people</span>
        </div>
        <div class="mt-7 space-y-4">
          <div
            v-for="department in [{ name: 'Engineering', people: 31, pct: 36, color: 'bg-primary' }, { name: 'Sales & Success', people: 22, pct: 26, color: 'bg-secondary' }, { name: 'Product & Design', people: 17, pct: 20, color: 'bg-violet-500' }, { name: 'Operations', people: 16, pct: 18, color: 'bg-emerald-500' }]"
            :key="department.name">
            <div class="flex justify-between text-xs"><span class="font-medium">{{ department.name }}</span><span
                class="text-text-secondary">{{ department.people }}</span></div>
            <div class="mt-2 h-2 rounded-full bg-border">
              <div class="h-full rounded-full" :class="department.color" :style="{ width: `${department.pct}%` }"></div>
            </div>
          </div>
        </div>
      </article>
    </section>
    <aside class="xl:col-span-4 rounded-2xl bg-primary p-5 text-white shadow-lg shadow-primary/20">
      <p class="text-xs font-semibold uppercase tracking-wider text-white/70">Team pulse</p>
      <p class="mt-3 text-4xl font-bold">8.6<span class="text-lg text-white/70">/10</span></p>
      <p class="mt-2 text-sm text-white/80">Employee engagement is up 0.4 from last month.</p>
      <div class="mt-7 rounded-xl bg-white/15 p-4">
        <p class="text-sm font-semibold">Next survey closes Friday</p>
        <p class="mt-1 text-xs text-white/70">68 of 86 teammates have responded.</p><button
          class="mt-4 text-xs font-semibold underline underline-offset-4">View responses</button>
      </div>
    </aside>
  </div>
  <div class="mt-5 grid gap-5 lg:grid-cols-2">
    <section class="rounded-2xl border border-border bg-background p-5 shadow-md shadow-primary/10">
      <div class="flex items-center justify-between">
        <div>
          <h2 class="font-bold">Team availability</h2>
          <p class="mt-1 text-xs text-text-secondary">Who is working today</p>
        </div><button class="text-xs font-semibold text-primary-dark">View directory</button>
      </div>
      <div class="mt-4 divide-y divide-border">
        <div v-for="person in team" :key="person.name" class="flex items-center gap-3 py-3"><span
            class="flex h-9 w-9 items-center justify-center rounded-full text-xs font-bold text-white"
            :class="person.color">{{ person.initials }}</span>
          <div class="flex-1">
            <p class="text-sm font-semibold">{{ person.name }}</p>
            <p class="text-xs text-text-secondary">{{ person.role }}</p>
          </div><span class="text-xs text-text-secondary">{{ person.status }}</span>
        </div>
      </div>
    </section>
    <section class="rounded-2xl border border-border bg-background p-5 shadow-md shadow-primary/10">
      <h2 class="font-bold">Hiring pipeline</h2>
      <p class="mt-1 text-xs text-text-secondary">Candidates currently in process</p>
      <div class="mt-6 grid grid-cols-4 gap-2">
        <div v-for="stage in [{ n: 'Applied', v: 24 }, { n: 'Screening', v: 12 }, { n: 'Interview', v: 7 }, { n: 'Offer', v: 3 }]"
          :key="stage.n" class="rounded-xl bg-surface p-3 text-center">
          <p class="text-2xl font-bold text-primary-dark">{{ stage.v }}</p>
          <p class="mt-1 text-[10px] text-text-secondary">{{ stage.n }}</p>
        </div>
      </div>
      <div class="mt-6 rounded-xl border border-dashed border-primary/50 bg-primary/5 p-4">
        <p class="text-sm font-semibold">Senior product designer</p>
        <p class="mt-1 text-xs text-text-secondary">5 candidates ready for portfolio review.</p><button
          class="mt-3 text-xs font-semibold text-primary-dark">Review candidates →</button>
      </div>
    </section>
  </div>
</template>
