<script setup lang="ts">
import { computed, ref } from 'vue'
import PageHeading from '@/components/PageHeading.vue'
const period = ref('This quarter')
const search = ref('')
const deals = [{ company: 'Northstar Labs', contact: 'Maya Chen', value: '$84,000', stage: 'Negotiation', probability: 85, owner: 'MC' }, { company: 'Vertex Systems', contact: 'Daniel Brooks', value: '$52,500', stage: 'Proposal', probability: 65, owner: 'DB' }, { company: 'Copper & Co.', contact: 'Nora Williams', value: '$36,200', stage: 'Discovery', probability: 35, owner: 'NW' }, { company: 'Brightside Media', contact: 'Luis Gomez', value: '$28,000', stage: 'Proposal', probability: 60, owner: 'LG' }, { company: 'Meridian Health', contact: 'Aisha Patel', value: '$19,600', stage: 'Qualified', probability: 45, owner: 'AP' }]
const metrics: [string, string, string, boolean][] = [['Closed revenue', '$428,400', '+18.2%', true], ['Open pipeline', '$746,800', '+9.4%', true], ['Win rate', '32.8%', '+3.6 pts', true], ['Avg. deal size', '$31,250', '-4.8%', false]]
const filteredDeals = computed(() => deals.filter((deal) => deal.company.toLowerCase().includes(search.value.toLowerCase()) || deal.contact.toLowerCase().includes(search.value.toLowerCase())))
const stageClass = (stage: string) => ({ Negotiation: 'bg-emerald-500/15 text-emerald-600', Proposal: 'bg-primary/15 text-primary-dark', Discovery: 'bg-secondary/15 text-secondary-dark', Qualified: 'bg-amber-500/15 text-amber-700' }[stage] || '')
</script>
<template>
  <PageHeading eyebrow="Revenue engine" title="Sales performance"
    description="A live view of pipeline health, conversion, and the deals that need attention."
    action="Add opportunity" />
  <div class="mt-5 sm:mt-7 grid gap-5 xl:grid-cols-12">
    <section class="xl:col-span-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <article v-for="metric in metrics" :key="metric[0]"
        class="rounded-2xl border border-border bg-background p-4 shadow-md shadow-primary/10">
        <p class="text-xs font-medium text-text-secondary">{{ metric[0] }}</p>
        <p class="mt-3 text-2xl font-bold text-text-primary">{{ metric[1] }}</p>
        <p class="mt-2 text-xs font-semibold" :class="metric[3] ? 'text-emerald-600' : 'text-secondary'">{{ metric[2] }}
          <span class="font-normal text-text-secondary">vs last quarter</span>
        </p>
      </article>
      <article
        class="sm:col-span-2 lg:col-span-4 rounded-2xl border border-border bg-background p-5 shadow-md shadow-primary/10">
        <div class="flex items-center justify-between">
          <div>
            <h2 class="font-bold">Revenue momentum</h2>
            <p class="mt-1 text-xs text-text-secondary">Monthly closed-won revenue</p>
          </div><select v-model="period"
            class="rounded-lg border border-border bg-surface px-2 py-1 text-xs text-text-secondary">
            <option>This quarter</option>
            <option>Last quarter</option>
          </select>
        </div>
        <div class="mt-7 flex h-40 items-end gap-2 sm:gap-4">
          <div
            v-for="item in [{ m: 'Apr', v: 146 }, { m: 'May', v: 88 }, { m: 'Jun', v: 142 }, { m: 'Jul', v: 74 }, { m: 'Aug', v: 167 }, { m: 'Sep', v: 92 }]"
            :key="item.m" class="flex flex-1 flex-col items-center gap-2">
            <div class="w-full max-w-12 rounded-t-lg bg-primary/20 p-0.5" :style="{ height: `${item.v}px` }">
              <div class="h-full rounded-t-md bg-primary"></div>
            </div><span class="text-[10px] text-text-secondary">{{ item.m }}</span>
          </div>
        </div>
      </article>
    </section>
    <aside class="xl:col-span-4 rounded-2xl bg-primary p-5 text-white shadow-lg shadow-primary/20">
      <p class="text-xs font-semibold uppercase tracking-wider text-white/70">Forecast</p>
      <h2 class="mt-2 text-xl font-bold">$612,000</h2>
      <p class="mt-1 text-sm text-white/75">Expected to close this quarter</p>
      <div class="mt-6 space-y-4">
        <div
          v-for="stage in [{ name: 'Negotiation', value: 88, amount: '$194k' }, { name: 'Proposal', value: 62, amount: '$268k' }, { name: 'Qualified', value: 40, amount: '$150k' }]"
          :key="stage.name">
          <div class="flex justify-between text-xs"><span>{{ stage.name }}</span><span>{{ stage.amount }}</span></div>
          <div class="mt-2 h-2 rounded-full bg-white/20">
            <div class="h-full rounded-full bg-white" :style="{ width: `${stage.value}%` }"></div>
          </div>
        </div>
      </div>
    </aside>
  </div>
  <section class="mt-5 rounded-2xl border border-border bg-background p-4 sm:p-5 shadow-md shadow-primary/10">
    <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h2 class="font-bold">Active opportunities</h2>
        <p class="mt-1 text-xs text-text-secondary">{{ filteredDeals.length }} deals in your current pipeline</p>
      </div><input v-model="search" placeholder="Search opportunities"
        class="rounded-xl border border-border bg-surface px-3 py-2 text-sm outline-none focus:border-primary" />
    </div>
    <div class="mt-4 overflow-x-auto">
      <table class="w-full min-w-[680px] text-left text-sm">
        <thead class="text-xs text-text-secondary">
          <tr class="border-b border-border">
            <th class="pb-3 font-medium">Opportunity</th>
            <th class="pb-3 font-medium">Value</th>
            <th class="pb-3 font-medium">Stage</th>
            <th class="pb-3 font-medium">Confidence</th>
            <th class="pb-3 font-medium">Owner</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="deal in filteredDeals" :key="deal.company" class="border-b border-border/70 last:border-0">
            <td class="py-3">
              <p class="font-semibold">{{ deal.company }}</p>
              <p class="text-xs text-text-secondary">{{ deal.contact }}</p>
            </td>
            <td class="py-3 font-semibold">{{ deal.value }}</td>
            <td class="py-3"><span class="rounded-full px-2.5 py-1 text-xs font-semibold"
                :class="stageClass(deal.stage)">{{ deal.stage }}</span></td>
            <td class="py-3">
              <div class="flex items-center gap-2">
                <div class="h-1.5 w-16 rounded-full bg-border">
                  <div class="h-full rounded-full bg-primary" :style="{ width: `${deal.probability}%` }"></div>
                </div><span class="text-xs text-text-secondary">{{ deal.probability }}%</span>
              </div>
            </td>
            <td class="py-3"><span
                class="flex h-8 w-8 items-center justify-center rounded-full bg-primary/15 text-xs font-bold text-primary-dark">{{
                  deal.owner }}</span></td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>
