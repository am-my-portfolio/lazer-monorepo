<template>
  <PageDivisionLayout>
    <template #divisionTitle> Evaluation </template>
    <template #divisionDescription> Evaluating the latest version of Command, Compliance, and Execution </template>

    <template #divisionContent>
      <h1 class="mt-10 text-pop-primary">Summary</h1>
      <dl class="mt-10 grid grid-cols-1 gap-5 grid-cols-3">
        <div
          v-for="item in stats"
          :key="item.name"
          class="overflow-hidden rounded-lg bg-pop-secondary/80 px-4 py-5 shadow sm:p-6"
        >
          <dt class="truncate text-sm font-medium text-pop-primary">
            {{ item.name }}
          </dt>
          <dd class="mt-1 text-3xl font-semibold tracking-tight text-primary">
            {{ item.stat }}
          </dd>
        </div>
      </dl>

      <div class="mt-10 flex flex-col">
        <h1 class="mt-10 text-pop-primary">Command Accuracy</h1>
        <ChartOne />
      </div>

      <div class="mt-10 flex flex-col">
        <h1 class="mt-10 text-pop-primary">Compliance Accuracy</h1>
        <ChartTwo />
      </div>

      <div class="mt-10 flex flex-col">
        <h1 class="mt-10 text-pop-primary">Execution Accuracy</h1>
        <ChartThree />
      </div>
    </template>
  </PageDivisionLayout>

  <PageDivisionLayout>
    <template #divisionTitle>Evaluation</template>
    <template #divisionDescription></template>
    <template #divisionContent>
      <div class="mt-5 overflow-hidden">
        <div class="mx-auto px-2">
          <table class="w-full">
            <thead class="h-10 text-pop-primary text-left">
              <tr>
                <th>Model</th>
                <th>Query</th>
                <th>AI Response</th>
                <th>Human Response</th>
                <th>Confidence</th>
              </tr>
            </thead>
            <tbody>
              <template v-for="day in statuses" :key="day.dateTime">
                <tr class="text-left text-sm leading-6 text-pop-primary">
                  <th scope="colgroup" colspan="3" class="relative isolate py-2 font-semibold">
                    <time :datetime="day.dateTime">{{ day.status }}</time>
                    <div
                      class="absolute inset-y-0 right-full -z-10 w-screen border-b border-secondary"
                      :class="isDark ? 'bg-pop-secondary' : 'bg-pop-secondary/40'"
                    />
                    <div
                      class="absolute inset-y-0 left-0 -z-10 w-screen border-b border-secondary"
                      :class="isDark ? 'bg-pop-secondary' : 'bg-pop-secondary/40'"
                    />
                  </th>
                </tr>
                <tr v-for="transaction in day.transactions" :key="transaction.id">
                  <td class="hidden relative py-5 pr-6 sm:table-cell max-w-64">
                    <div class="flex gap-x-6">
                      <i :class="[transaction.icon, 'mt-3 text-pop-primary text-3xl']" aria-hidden="true"></i>
                      <div class="flex-auto">
                        <div class="text-sm leading-6 text-pop-secondary mt-3 tracking-widest">
                          {{ transaction.name }}
                        </div>
                      </div>
                    </div>

                    <div class="absolute bottom-0 right-full h-px w-screen bg-secondary" />
                    <div class="absolute bottom-0 left-0 h-px w-screen bg-secondary" />
                  </td>
                  <td class="hidden py-5 pr-6 sm:table-cell max-w-80">
                    <div class="flex-auto">
                      <div class="flex items-start gap-x-3">
                        <div class="text-sm font-medium leading-6 text-secondary">
                          {{ transaction.query }}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td class="hidden py-5 pr-6 sm:table-cell max-w-64">
                    <div class="flex-auto">
                      <div class="flex items-start gap-x-3">
                        <div class="text-sm font-medium leading-6 text-secondary">
                          {{ transaction.ai_response }}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td class="hidden py-5 pr-6 sm:table-cell max-w-64">
                    <div class="flex-auto">
                      <div class="flex items-start gap-x-3">
                        <div class="text-sm font-medium leading-6 text-secondary">
                          {{ transaction.human_response }}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td class="hidden sm:table-cell max-w-64">
                    <div
                      class="text-sm text-center font-medium leading-6 py-2 rounded-xl text-pop-secondary bg-pop-primary/40"
                    >
                      {{ transaction.confidence }}
                    </div>
                  </td>
                </tr>
              </template>
            </tbody>
          </table>
        </div>
      </div>
    </template>
    <!-- End Divison 1 -->
  </PageDivisionLayout>

  <div>
    <button
      type="submit"
      class="flex w-1/3 justify-center rounded-md bg-pop-primary/40 px-2.5 py-2.5 text-sm font-semibold text-pop-secondary shadow-sm ring-1 ring-inset ring-secondary hover:bg-pop-primary/80 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-pop-primary/40"
    >
      Generate Report
    </button>
  </div>
</template>

<script setup lang="ts">
import { useDark } from '@vueuse/core';

import PageDivisionLayout from '@/components/layout/PageDivisionLayout.vue';
import ChartOne from '@/components/dashboard/evaluation/ChartOne.vue';
import ChartTwo from '@/components/dashboard/evaluation/ChartTwo.vue';
import ChartThree from '@/components/dashboard/evaluation/ChartThree.vue';

const isDark = useDark();

const stats = [
  { name: 'Command (v2)', stat: '0.87' },
  { name: 'Compliance (v2)', stat: '0.91' },
  { name: 'Execution', stat: '0.94' },
];

const statuses = [
  {
    status: 'Correct',
    dateTime: '2023-03-22',
    transactions: [
      {
        id: 1,
        name: 'Lazer V1.5.7',
        query: 'What are the benefits of using this product?',
        ai_response: 'Accurate Information',
        human_response: 'Accurate Results',
        confidence: 'High',
        icon: 'fa-solid fa-brain',
      },
      {
        id: 2,
        name: 'Razer v2.0',
        query: 'How does this product work?',
        ai_response: 'Very Good',
        human_response: 'Good',
        confidence: 'Low',
        icon: 'fa-solid fa-bug',
      },
      {
        id: 3,
        name: 'Blazer v0.7',
        query: 'What are the potential side effects of this product?',
        ai_response: 'Heartburn',
        human_response: 'Acid Reflux',
        confidence: 'High',
        icon: 'fa-solid fa-virus-covid',
      },
    ],
  },

  {
    status: 'Incorrect',
    dateTime: '2023-03-21',
    transactions: [
      {
        id: 4,
        name: 'Grazer v2.0',
        query: 'What is the recommened dosage for this product?',
        ai_response: '1.5 mg',
        human_response: '0.7 mg',
        confidence: 'Low',
        icon: 'fa-solid fa-cloud-bolt',
      },
      {
        id: 5,
        name: 'Glazer v0.0.5',
        query: 'What are the potential side effects of this product?',
        ai_response: 'Rash',
        human_response: 'Tingling',
        confidence: 'Low',
        icon: 'fa-solid fa-spider',
      },
      {
        id: 6,
        name: 'Frazer v1.0',
        query: 'What is the shelf life of this product?',
        ai_response: '1 Year',
        human_response: '1 Year',
        confidence: 'High',
        icon: 'fa-solid fa-fire-extinguisher',
      },
    ],
  },
];
</script>
