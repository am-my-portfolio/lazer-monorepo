<template>
  <div class="mt-24 scroll-mt-12">
    <RowLayout>
      <template #titleLeft> About Us </template>

      <template #subTitleLeft>
        SiloLabs is a secure health data marketplace that empowers individuals
        to monetize their medical data while advancing scientific research.
      </template>

      <template #content>
        <div class="-mt-10 text-lg">
          <p>
            We believe your health data has value—and you deserve a share of it.
            At SiloLabs, we’ve built a platform that lets patients upload,
            manage, and sell their anonymized medical records to life sciences
            companies and researchers. Using blockchain technology, we guarantee
            data security, privacy, and transparent payments in Stablecoins like
            USDC.​
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
