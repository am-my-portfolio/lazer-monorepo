<template>
  <div class="my-24 scroll-mt-12">
    <RowLayout>
      <template #titleLeft>How can we help?</template>

      <template #content>
        <ColumnLayout class="-mt-28">
          <template #leftContent>
            <RowLayout>
              <template #subTitleLeft>{{
                content_for_individals.title
              }}</template>
              <template #content>
                <ul class="-mt-14 list-inside list-disc">
                  <li
                    v-for="(item, index) in content_for_individals.content"
                    :key="index"
                  >
                    <strong>{{ item.strong }}</strong> {{ item.text }}
                  </li>
                </ul>
                ​
              </template>
            </RowLayout>

            <RowLayout>
              <template #subTitleLeft>{{
                content_for_institutes.title
              }}</template>
              <template #content>
                <ul class="-mt-14 list-inside list-disc">
                  <li
                    v-for="(item, index) in content_for_institutes.content"
                    :key="index"
                  >
                    <strong>{{ item.strong }}</strong> {{ item.text }}
                  </li>
                </ul>
                ​
              </template>
            </RowLayout>
          </template>

          <template #rightContent>
            <!-- <ContactForm /> -->
          </template>
        </ColumnLayout>
      </template>
    </RowLayout>
  </div>
</template>

<script setup lang="ts">
import RowLayout from '@/components/layout/widget/RowLayout.vue';
import ColumnLayout from '@/components/layout/widget/ColumnLayout.vue';
// import ContactForm from '../contact/ContactForm.vue';

const content_for_individals = {
  title: 'For Individuals',
  content: [
    {
      strong: 'Monetize Your Health Data:',
      text: 'Upload your medical records and get paid when your anonymized data is used for research.',
    },
    {
      strong: 'Stay in Control:',
      text: 'Decide who can access your data and track every transaction in real time.',
    },
    {
      strong: 'Protect Your Privacy:',
      text: 'All data is encrypted, zero-proofed, and never shared without your consent.',
    },
  ],
};

const content_for_institutes = {
  title: 'For Life Sciences & Research Institutions',
  content: [
    {
      strong: 'Access Rich, Consent-Driven Datasets:',
      text: 'Query structured, anonymized medical data filtered by diagnosis, treatment, or demographics.',
    },
    {
      strong: 'Accelerate Discovery:',
      text: 'Source high-quality datasets for clinical trials, drug development, and real-world evidence.',
    },
    {
      strong: 'Ensure Compliance:',
      text: 'Our platform is built with HIPAA, GDPR, and zero-knowledge security architecture in mind.',
    },
  ],
};
</script>
