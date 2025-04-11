<template>
  <PageDivisionLayout>
    <template #divisionTitle> Training </template>
    <template #divisionDescription>
      Train your own model with your data and our algorithms. You can train a model with a prompt, or upload your own
      data to train a dataset</template
    >
    <template #divisionContent> </template>
  </PageDivisionLayout>

  <PageDivisionLayout>
    <template #divisionTitle> Select Model </template>
    <template #divisionContent>
      <div class="mt-10 w-full md:w-4/6 2xl:w-3/5">
        <ul role="list" class="mt-5 gap-5 sm:gap-6">
          <li v-for="model in models" :key="model.name" class="mt-10 h-28 flex rounded-md shadow-sm">
            <div
              class="flex w-36 flex-shrink-0 items-center justify-center rounded-xl text-sm font-medium text-pop-primary hover:text-pop-secondary border-2 border-pop-primary/40"
            >
              <i :class="[model.icon, 'text-6xl']" style="--fa-rotate-angle: 45deg" aria-hidden="true"></i>
            </div>

            <div class="flex flex-1 ml-6 items-center justify-between border-b-2">
              <div class="flex-1 px-4 py-2 text-sm">
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
    <template #divisionTitle> Ingest Rules </template>
    <template #divisionContent>
      <div class="mt-10 w-full md:w-4/6 2xl:w-3/5">
        <label for="rules" class="block font-medium leading-6 text-pop-primary">Rules</label>
        <div class="mt-2">
          <textarea
            id="rules"
            name="rules"
            type="text"
            placeholder="Enter your rules here in text format"
            required
            class="block w-full h-44 rounded-md border-0 pl-2 py-1.5 text-pop-primary shadow-sm ring-1 ring-inset ring-secondary placeholder:text-primary focus:ring-2 focus:ring-inset focus:ring-pop-secondary sm:text-sm sm:leading-6"
          />
        </div>
      </div>
    </template>
  </PageDivisionLayout>

  <PageDivisionLayout>
    <template #divisionTitle> Select Industry Profile </template>
    <template #divisionContent>
      <dl class="mt-10 grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        <div
          v-for="item in industries"
          :key="item.name"
          class="overflow-hidden rounded-lg bg-pop-secondary/80 shadow p-4"
        >
          <dt class="text-center text-sm text-pop-primary">
            {{ item.name }}
          </dt>
        </div>
      </dl>
    </template>
  </PageDivisionLayout>

  <div>
    <button
      type="submit"
      class="flex w-1/3 justify-center rounded-md bg-pop-primary/40 px-2.5 py-2.5 text-sm font-semibold text-pop-secondary shadow-sm ring-1 ring-inset ring-secondary hover:bg-pop-primary/80 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-pop-primary/40"
    >
      Start Training
    </button>
  </div>
</template>

<script setup lang="ts">
import PageDivisionLayout from '@/components/layout/PageDivisionLayout.vue';

const models = [
  {
    name: 'LAZER',
    version: '2.0',
    href: '#',
    icon: 'fa-solid fa-brain',
    description: '4.0B paramaters, 1.5B prompts',
  },
  {
    name: 'FAZER',
    version: '3.7',
    href: '#',
    icon: 'fa-brands fa-wolf-pack-battalion',
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
</script>
