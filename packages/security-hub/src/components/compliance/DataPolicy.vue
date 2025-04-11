<template>
  <PageDivisionLayout>
    <template #divisionTitle> Data Policy </template>
    <template #divisionDescription> Understand how LAZER handles your data </template>
  </PageDivisionLayout>

  <PageDivisionLayout>
    <template #divisionTitle> Your Data, Your Rights </template>
    <template #divisionContent>
      <div class="mt-5 overflow-hidden">
        <ul role="list" class="grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-5 xl:gap-x-8">
          <li v-for="client in policies" :key="client.id" class="overflow-hidden rounded-xl border border-secondary">
            <div class="flex items-center gap-x-4 bg-pop-secondary/70 p-6">
              <i class="text-pop-primary text-3xl" :class="client.icon" aria-hidden="true"></i>
              <div class="text-sm/6 font-medium text-pop-primary">
                {{ client.name }}
              </div>
            </div>
            <dl class="p-4 text-sm/6 text-pop-secondary">
              <p>{{ client.description }}</p>
            </dl>
          </li>
        </ul>
      </div>
    </template>
  </PageDivisionLayout>

  <PageDivisionLayout>
    <template #divisionTitle> Data Policy Updates </template>
    <template #divisionContent>
      <dl class="border-b border-secondary" v-for="(row, index) in policyUpdates" :key="index">
        <div class="grid grid-cols-6 py-5">
          <dt class="text-sm font-medium text-pop-primary">
            {{ row.name }}
          </dt>
          <dd class="grid col-span-4 place-items-start text-sm text-pop-secondary">
            <div>
              {{ row.description }}
            </div>
          </dd>
          <dd class="grid col-span-1 place-items-end text-sm text-pop-secondary">
            <button
              type="button"
              :class="[
                'flex w-full justify-center rounded-md  px-2.5 py-1.5 text-sm font-semibold shadow-sm ring-1 ring-inset ring-secondary disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-pop-primary/40',
                isDark
                  ? 'text-pop-secondary bg-pop-primary hover:bg-pop-primary/70'
                  : 'text-primary bg-pop-primary hover:bg-pop-primary/70',
              ]"
            >
              {{ row.action }}
            </button>
          </dd>
        </div>
      </dl>
    </template>
  </PageDivisionLayout>

  <PageDivisionLayout>
    <template #divisionTitle> Data Sharing & Usage </template>
    <template #divisionContent>
      <dl class="border-b border-secondary" v-for="(row, index) in sharingAndUsage" :key="index">
        <div class="grid grid-cols-6 py-5">
          <dt class="text-sm font-medium text-pop-primary">
            {{ row.name }}
          </dt>
          <dd class="grid col-span-4 place-items-start text-sm text-pop-secondary">
            <div>
              {{ row.description }}
            </div>
          </dd>
          <dd class="grid col-span-1 place-items-end text-sm text-pop-secondary">
            <button
              type="button"
              :class="[
                'flex justify-center rounded-md  px-2.5 py-1.5 text-sm font-semibold shadow-sm ring-1 ring-inset ring-secondary disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-pop-primary/40',
                isDark
                  ? 'text-pop-secondary bg-pop-primary hover:bg-pop-primary/70'
                  : 'text-primary bg-pop-primary hover:bg-pop-primary/70',
              ]"
            >
              {{ row.action }}
            </button>
          </dd>
        </div>
      </dl>
    </template>
  </PageDivisionLayout>

  <PageDivisionLayout>
    <template #divisionTitle> Data Retention</template>
    <template #divisionContent>
      <dl class="border-b border-secondary" v-for="(row, index) in retention" :key="index">
        <div class="grid grid-cols-6 py-5">
          <dt class="text-sm font-medium text-pop-primary">
            {{ row.name }}
          </dt>
          <dd class="grid col-span-4 place-items-start text-sm text-pop-secondary">
            <div>
              {{ row.description }}
            </div>
          </dd>
          <dd class="grid col-span-1 place-items-end text-sm text-pop-secondary">
            <button
              type="button"
              :class="[
                'flex justify-center rounded-md  px-2.5 py-1.5 text-sm font-semibold shadow-sm ring-1 ring-inset ring-secondary disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-pop-primary/40',
                isDark
                  ? 'text-pop-secondary bg-pop-primary hover:bg-pop-primary/70'
                  : 'text-primary bg-pop-primary hover:bg-pop-primary/70',
              ]"
            >
              {{ row.action }}
            </button>
          </dd>
        </div>
      </dl>
    </template>
  </PageDivisionLayout>
</template>

<script setup lang="ts">
import { useDark } from '@vueuse/core';

import PageDivisionLayout from '@/components/layout/PageDivisionLayout.vue';
const isDark = useDark();

const statuses = {
  Paid: 'text-green-700 bg-green-50 ring-green-600/20',
  Withdraw: 'text-gray-600 bg-gray-50 ring-gray-500/10',
  Overdue: 'text-red-700 bg-red-50 ring-red-600/10',
};

const policies = [
  {
    id: 1,
    name: 'Data Access Requests',
    description: `You can request a copy of your data at any time. We will provide it in a common format, like CSV.`,
    icon: 'fa-solid fa-file-shield',
  },
  {
    id: 2,
    name: 'Data Deletion Requests',
    description: `You can request to delete your data at any time. We will comply within 30 days.`,
    icon: 'fa-solid fa-eraser',
  },
  {
    id: 3,
    name: 'Data Encryption at rest',
    description: `All customer data is encrypted at rest using AES-256, and industry-standard algorithm`,
    icon: 'fa-solid fa-shield',
  },
  {
    id: 4,
    name: 'Data Encryption at transit',
    description: `All data transfers between your devices and our servers are encrypted using TLS 1.2 or higher.`,
    icon: 'fa-solid fa-lock',
  },
  {
    id: 5,
    name: 'Data Breach response plan',
    description: `We have an established protocol for responding to data breaches, including incident reporting and notification.`,
    icon: 'fa-solid fa-shield-virus',
  },
];

const policyUpdates = [
  {
    name: 'Policy version 2.0',
    description: `We will notify you of any changes to our data handling practices. 
      You can review and accept the changes here`,
    action: 'View & Accept',
    href: '',
  },
];

const sharingAndUsage = [
  {
    name: 'Data sharing',
    description: `We do not sell your personal data, or use it for advertising purposes. 
      However, we may share it with third-party service providers as described in our Privacy Policy`,
    action: 'View Details',
    href: '',
  },
];

const retention = [
  {
    name: 'Data retention policy',
    description: `We retain your data for as long as your account is active, or as needed, 
    to provide you with our services. If you close
      your account, we will delete your data within 30 days.`,
    action: 'View Details',
    href: '',
  },
];
</script>
