<template>
  <div class="mt-24 scroll-mt-12">
    <RowLayout>
      <template #titleLeft> About Us </template>

      <template #subTitleLeft>
        Enterprise-Grade, Secure AI, With Built-in Privacy and Compliance
      </template>

      <template #content>
        <div class="-mt-10 text-lg">
          <p>
            LAZER.IO is at the forefront of a new era in AI, dedicated to developing innovative, secure, and compliant
            AI solutions for highly regulated industries. We understand the critical importance of trust and reliability
            in AI deployments, so our models are designed with security and compliance at their core.
          </p>

          <div class="mt-4">
            Our platform connects two worlds:
            <ul class="list-inside list-disc">
              <li>
                <strong>Patients and individuals</strong>, who want control over
                their health data and a way to earn from it.
              </li>
              <li>
                <strong>Researchers and institutions</strong>, who need access
                to high-quality, anonymized datasets for clinical trials, drug
                development, and medical innovation.
              </li>
            </ul>
            ​
          </div>

          <div>
            With zero-proof encryption, decentralized storage, and compliance
            with HIPAA and GDPR, SiloLabs sets a new standard in ethical data
            exchange.
          </div>
        </div>
      </template>
    </RowLayout>
  </div>
</template>

<script setup lang="ts">
import RowLayout from '@/components/layout/widget/RowLayout.vue';
</script>
