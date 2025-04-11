<template>
  <PageDivisionLayout>
    <template #divisionTitle>Profile</template>
    <template #divisionDescription>
      This information will be displayed publicly so be careful what you share.
    </template>
    <template #divisionContent>
      <dl class="border-b border-secondary" v-for="(row, index) in profileSettings" :key="index">
        <div class="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
          <dt class="text-sm font-medium text-secondary">
            {{ row.label }}
          </dt>
          <dd class="mt-1 flex text-sm text-pop-secondary sm:col-span-2 sm:mt-0">
            <span v-if="row.imageUrl" class="flex-grow">
              <img
                class="h-auto w-12 rounded-full"
                src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </span>
            <span v-else class="flex-grow">{{ row.value }}</span>

            <span class="ml-4 flex flex-shrink-0 items-start" :class="row.secondaryAction ? 'space-x-4' : ''">
              <button
                type="button"
                class="rounded-md font-medium text-pop-primary hover:text-pop-secondary focus:outline-none focus:ring-2 focus:ring-pop-primary focus:ring-offset-2"
              >
                {{ row.action }}
              </button>
              <span v-if="row.secondaryAction" class="text-pop-secondary" aria-hidden="true">|</span>
              <button
                type="button"
                class="rounded-md font-medium text-pop-primary hover:text-pop-secondary focus:outline-none focus:ring-2 focus:ring-pop-primary focus:ring-offset-2"
              >
                {{ row.secondaryAction }}
              </button>
            </span>
          </dd>
        </div>
      </dl>
    </template>
  </PageDivisionLayout>

  <PageDivisionLayout>
    <template #divisionTitle>Account</template>
    <template #divisionDescription> Personalize Display settings </template>
    <template #divisionContent>
      <dl class="border-b border-secondary" v-for="(row, index) in accountSettings" :key="index">
        <div class="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
          <dt class="text-sm font-medium text-secondary">
            {{ row.label }}
          </dt>
          <dd class="mt-1 flex text-sm text-pop-secondary sm:col-span-2 sm:mt-0">
            <span class="flex-grow">{{ row.value }}</span>
            <!-- <span class="ml-4 flex flex-shrink-0 items-start">
              <i class="fa-solid fa-edit text-base text-pop-primary" aria-hidden="true"></i>
            </span> -->

            <span class="ml-4 flex flex-shrink-0 items-start" :class="row.secondaryAction ? 'space-x-4' : ''">
              <button
                type="button"
                class="rounded-md font-medium text-pop-primary hover:text-pop-secondary focus:outline-none focus:ring-2 focus:ring-pop-primary focus:ring-offset-2"
              >
                {{ row.action }}
              </button>
              <span v-if="row.secondaryAction" class="text-pop-secondary" aria-hidden="true">|</span>
              <button
                type="button"
                class="rounded-md font-medium text-pop-primary hover:text-pop-secondary focus:outline-none focus:ring-2 focus:ring-pop-primary focus:ring-offset-2"
              >
                {{ row.secondaryAction }}
              </button>
            </span>
          </dd>
        </div>
      </dl>
    </template>
  </PageDivisionLayout>

  <PageDivisionLayout>
    <template #divisionTitle>Data Policies & Compliance</template>
    <template #divisionDescription></template>
    <template #divisionContent>
      <dl class="border-b border-secondary" v-for="(row, index) in dataSettings" :key="index">
        <div class="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
          <dt class="text-sm font-medium text-secondary">
            {{ row.label }}
          </dt>
          <dd class="mt-1 flex text-sm text-pop-secondary sm:col-span-2 sm:mt-0">
            <span :class="[row.enabled ? 'text-pop-secondary' : 'text-secondary', 'flex-grow']">
              {{ row.enabled ? 'Enabled' : 'Disabled' }}
            </span>

            <Switch
              v-model="row.enabled"
              :class="[
                row.enabled ? 'bg-pop-secondary' : 'bg-secondary',
                'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-pop-primary focus:ring-offset-2',
              ]"
            >
              <span class="sr-only">Use setting</span>
              <span
                aria-hidden="true"
                :class="[
                  row.enabled ? 'translate-x-5' : 'translate-x-0',
                  'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-primary shadow ring-0 transition duration-200 ease-in-out',
                ]"
              />
            </Switch>
          </dd>
        </div>
      </dl>
    </template>
  </PageDivisionLayout>
</template>

<script setup lang="ts">
import PageDivisionLayout from '@/components/layout/PageDivisionLayout.vue';
import { Switch } from '@headlessui/vue';

const profileSettings = [
  {
    label: 'Name',
    value: 'Chelsea Hagon',
    imageUrl: '',
    action: 'Update',
    secondaryAction: '',
  },
  {
    label: 'Photo',
    value: '',
    imageUrl:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    action: 'Update',
    secondaryAction: 'Remove',
  },
  {
    label: 'Email',
    value: 'chelsea.hagon@example.com',
    action: 'Update',
    secondaryAction: '',
  },
  {
    label: 'Job Title',
    value: 'HR Manager',
    action: 'Update',
    secondaryAction: '',
  },
];

const accountSettings = [
  {
    label: 'Timezone',
    value: 'America/Los_Angeles (GMT-07:00)',
    action: 'Update',
    secondaryAction: '',
  },
  {
    label: 'Time Format',
    value: '12-hour',
    action: 'Update',
    secondaryAction: '',
  },
  {
    label: 'Language',
    value: 'English',
    action: 'Update',
    secondaryAction: '',
  },
];

const dataSettings = [
  {
    label: 'Data Anonymization',
    enabled: false,
  },
  {
    label: 'Data Retention',
    enabled: true,
  },
  {
    label: 'Data Usage Policy',
    enabled: false,
  },
];
</script>
