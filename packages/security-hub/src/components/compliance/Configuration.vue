<template>
  <PageDivisionLayout>
    <template #divisionTitle> Configuration </template>
    <template #divisionDescription>
      View and manage your model compliance configurations. Policies and settings are specific to each AI model. Select
      privacy, cybersecurity, and sector-specific compliance configurations for each AI Model.
    </template>
  </PageDivisionLayout>

  <form>
    <PageDivisionLayout>
      <template #divisionTitle> Select Model </template>
      <template #divisionContent>
        <div class="mt-10 w-full md:w-4/6 2xl:w-3/5">
          <BaseSelectForEnums
            v-model="model"
            name="model"
            label="Model"
            :options="models"
            class="block w-full rounded-md border-0 pl-2 py-1.5 text-pop-primary shadow-sm ring-1 ring-inset ring-secondary placeholder:text-primary focus:ring-2 focus:ring-inset focus:ring-pop-secondary sm:text-sm sm:leading-6"
            @change="handleSelectedModel"
          />
        </div>
      </template>
    </PageDivisionLayout>

    <PageDivisionLayout>
      <template #divisionTitle> Compliance Policy </template>
      <template #divisionContent>
        <dl class="border-b border-secondary" v-for="(row, index) in compliancePolicy" :key="index">
          <div class="grid grid-cols-2 py-5">
            <dt class="text-sm font-medium">
              <h1 class="text-pop-primary text-lg">{{ row.name }}</h1>
              <p class="text-pop-secondary">
                {{ row.description }}
              </p>
            </dt>
          </div>
        </dl>
      </template>
    </PageDivisionLayout>

    <PageDivisionLayout>
      <template #divisionTitle> Compliance Settings </template>
      <template #divisionContent>
        <dl class="border-b border-secondary" v-for="(row, index) in complianceSettings" :key="index">
          <div class="grid grid-cols-2 py-5">
            <dt class="text-sm font-medium">
              <h1 class="text-pop-primary text-lg">{{ row.name }}</h1>
              <p class="text-pop-secondary">
                {{ row.description }}
              </p>
            </dt>

            <dd class="grid col-span-1 place-items-end text-sm text-pop-secondary">
              <div
                class="rounded-md bg-pop-primary/40 px-2.5 py-2.5 text-sm font-semibold text-pop-secondary shadow-sm ring-1 ring-inset ring-secondary disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-pop-primary/40"
              >
                {{ row.action }}
              </div>
            </dd>
          </div>
        </dl>
      </template>
    </PageDivisionLayout>

    <PageDivisionLayout>
      <template #divisionTitle> Compliance Configurations </template>
      <template #divisionContent>
        <dl class="mt-10 grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          <div
            v-for="item in configurations"
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
        :class="[
          'flex w-1/3 justify-center rounded-md  px-2.5 py-2.5 text-sm font-semibold shadow-sm ring-1 ring-inset ring-secondary disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-pop-primary/40',
          isDark
            ? 'text-pop-secondary bg-pop-primary hover:bg-pop-primary/70'
            : 'text-primary bg-pop-primary hover:bg-pop-primary/70',
        ]"
      >
        Save Changes
      </button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useDark } from '@vueuse/core';

import PageDivisionLayout from '@/components/layout/PageDivisionLayout.vue';
import BaseSelectForEnums from '@/components/BaseSelectForEnums.vue';

const isDark = useDark();
const models = ['GPT-3.5', 'LAZER-1.2', 'RAZER-7.0', 'FAZER-0.4'];
const model = ref(models[0]);
const handleSelectedModel = () => {
  model.value = undefined;
};

const handleSubmit = async (event: SubmitEvent) => {};

const complianceSettings = computed(() => [
  {
    name: 'Data Retention',
    description: `Applies to: ${model.value}`,
    action: '1 Year',
  },
  {
    name: 'Data Usage',
    description: `Applies to: ${model.value}`,
    action: 'Production',
  },
  {
    name: 'Data Quality',
    description: `Applies to: ${model.value}`,
    action: 'High',
  },
  {
    name: 'Data Origin',
    description: `Applies to: ${model.value}`,
    action: 'US',
  },
  {
    name: 'Data Sensitivity',
    description: `Applies to: ${model.value}`,
    action: 'High',
  },
]);

const compliancePolicy = computed(() => [
  {
    name: `${model.value} Compliance Policy`,
    description: `Applies to: ${model.value}`,
    action: '1 Year',
  },
]);

const configurations = [
  { name: 'Cybersecurity' },
  { name: 'Privacy' },
  { name: 'GDPR' },
  { name: 'HIPAA' },
  { name: 'Sector-Specific' },
  { name: 'PCI DSS' },
  { name: 'FERPA' },
  { name: 'SOX' },
];
</script>
