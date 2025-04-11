<template>
  <PageDivisionLayout>
    <template #divisionTitle> Inference </template>
    <template #divisionDescription>
      Welcome to the Inference Wizard. Here is a step-by-step guide on how to build and run an inference.
    </template>
    <template #divisionContent> </template>
  </PageDivisionLayout>

  <PageDivisionLayout>
    <template #divisionTitle> Step 1: Select a Model </template>
    <template #divisionContent>
      <div class="mt-10 w-full md:w-4/6 2xl:w-3/5">
        <ul role="list" class="mt-5 gap-5 sm:gap-6">
          <li v-for="model in models" :key="model.name" class="mt-10 h-28 flex rounded-md shadow-sm">
            <div
              class="flex w-36 flex-shrink-0 items-center justify-center rounded-xl text-sm font-medium text-pop-primary hover:text-pop-secondary border-2 border-pop-primary/40"
            >
              <i :class="[model.icon, 'text-6xl']" aria-hidden="true"></i>
            </div>

            <div class="flex flex-1 ml-6 items-center justify-between border-b-2">
              <div class="flex-1 truncate px-4 py-2 text-sm">
                <a :href="model.href" class="font-medium text-pop-secondary hover:text-pop-primary"
                  >{{ model.name }} (v {{ model.version }})
                </a>
                <p class="text-secondary">Create Custom Integration with our Api</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </template>
  </PageDivisionLayout>

  <PageDivisionLayout>
    <template #divisionTitle> Step 2: Input Data </template>
    <template #divisionContent>
      <div class="mt-10 w-full 2xl:w-4/5">
        <InferenceStep2 />
      </div>
    </template>
  </PageDivisionLayout>

  <PageDivisionLayout>
    <template #divisionTitle> Step 3: View Results </template>
    <template #divisionContent>
      <ResultsTable />
    </template>
  </PageDivisionLayout>

  <PageDivisionLayout>
    <template #divisionTitle> Inference History</template>
    <template #divisionContent>
      <div class="mt-10 w-full 2xl:w-3/5">
        <dl class="border-b border-secondary" v-for="(row, index) in inferenceHistory" :key="index">
          <div class="grid grid-cols-2 py-4">
            <dt class="text-sm font-medium text-pop-secondary">
              {{ row.name }}

              <div class="mt-1">
                <span class="text-pop-secondary"> Status: </span>
                <span class="text-pop-primary"> {{ row.status }} </span>
              </div>
            </dt>
            <dd class="grid col-span-1 place-items-end text-sm text-pop-secondary">
              <span class="text-sm font-semibold text-pop-secondary">
                {{ row.date }}
              </span>
            </dd>
          </div>
        </dl>
      </div>
    </template>
  </PageDivisionLayout>
</template>

<script setup lang="ts">
import PageDivisionLayout from '@/components/layout/PageDivisionLayout.vue';
import InferenceStep2 from './inference/Step2.vue';
import ResultsTable from './inference/Table.vue';

const models = [
  {
    name: 'LAZER',
    version: '2.0',
    href: '#',
    icon: 'fa-brands fa-wolf-pack-battalion',
    description: '4.0B paramaters, 1.5B prompts',
  },
  {
    name: 'FAZER',
    version: '3.7',
    href: '#',
    icon: 'fa-solid fa-spider',
    description: '2.45B paramaters, 12B prompts',
  },
];

const industries = [
  { name: 'Cybersecurity' },
  { name: 'Healthcare' },
  { name: 'Finance' },
  { name: 'Privacy' },
  { name: 'E-Commerce' },
  { name: 'Technology' },
  { name: 'Climate Change' },
  { name: 'Legal' },
  { name: 'Education' },
  { name: 'Media' },
  { name: 'Government' },
  { name: 'Automotive' },
  { name: 'Travel' },
  { name: 'Real Estate' },
];

const inferenceHistory = [
  {
    name: `${models[0].name} (${models[0].version})`,
    status: `Completed`,
    date: '10/10/2022',
    href: '',
  },
  {
    name: `${models[1].name} (${models[1].version})`,
    status: `Completed`,
    date: '11/10/2022',
    href: '',
  },
  {
    name: `${models[0].name} (${models[0].version})`,
    status: `Completed`,
    date: '10/09/2022',
    href: '',
  },
];
</script>
