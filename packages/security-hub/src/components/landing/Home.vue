<template>
  <div class="mt-12 scroll-mt-12">
    <ColumnLayout>
      <template #title>
        Empowering Patients. Monetizing Data. Transforming Life Sciences.
      </template>

      <template #subTitle> </template>

      <template #description>
        SiloLabs bridges traditional and decentralized finance, creating a fair,
        patient-first data economy leveraging blockchain technology so those in
        need finally benefit from the data they create and own.
      </template>

      <template #leftContent>
        <div class="flex flex-row items-left gap-4">
          <BaseButton @click="joinWaitlist" text="Join Waitlist" />
          <BaseButton @click="requestDemo" text="Request Demo" />
        </div>
      </template>

      <template #rightContent>
        <img src="/landing.png" alt="logo" class="w-full" />
      </template>
    </ColumnLayout>
  </div>
</template>

<script setup lang="ts">
import BaseButton from '@/components/base/BaseButton.vue';
import ColumnLayout from '@/components/layout/widget/ColumnLayout.vue';

const joinWaitlist = () => {
  window.location.href = 'https://silo-labs.com/join-waitlist';
};

const requestDemo = () => {
  window.location.href = 'https://silo-labs.com/request-demo';
};
</script>
