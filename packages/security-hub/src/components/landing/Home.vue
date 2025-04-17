<template>
  <div class="mt-36 scroll-mt-12">
    <ColumnLayout>
      <template #title>
        Enterprise-Grade, Secure AI, With Built-in Privacy and Compliance
      </template>

      <template #subTitle> </template>

      <template #description>
        LAZER.IO is at the forefront of a new era in AI, dedicated to developing innovative, secure, and compliant
        AI solutions for highly regulated industries. We understand the critical importance of trust and reliability
        in AI deployments, so our models are designed with security and compliance at their core.
      </template>

      <template #leftContent>
        <div class="flex flex-row mt-12 items-left gap-4">
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
