<template>
  <PageLayout>
    <template #pageTitle> Compliance </template>
    <template #description>
      View compliance status of AI prompter requests, active compliance mechanisms & policies, and legal frameworks like
      GDPR, CCPA, HIPAA.
    </template>

    <!-- Tabs -->
    <template #tabs>
      <div class="lg:hidden">
        <label for="selected-tab" class="sr-only">Select a tab</label>
        <select
          id="selected-tab"
          name="selected-tab"
          class="mt-1 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-pop-secondary ring-1 ring-inset ring-secondary focus:ring-2 focus:ring-inset focus:ring-pop-primary sm:text-sm sm:leading-6"
        >
          <option v-for="tab in tabs" :key="tab.name" :selected="tab.current">
            {{ tab.name }}
          </option>
        </select>
      </div>
      <div class="hidden lg:block">
        <div class="border-b border-secondary">
          <nav class="-mb-px flex space-x-8">
            <a
              v-for="tab in tabs"
              :key="tab.name"
              @click.prevent="current_tab = tab.name"
              href="#"
              :class="[
                current_tab === tab.name
                  ? 'border-pop-primary text-pop-primary'
                  : 'border-transparent text-secondary hover:border-secondary hover:text-secondary',
                'whitespace-nowrap border-b-2 px-1 py-4 text-sm font-medium',
              ]"
              >{{ tab.name }}
            </a>
          </nav>
        </div>
      </div>
    </template>
    <!-- End Tabs -->

    <template #pageContent>
      <Overview v-if="current_tab === 'Overview'" />
      <DataPolicy v-else-if="current_tab === 'Data Policy'" />
      <ModelInteractions v-else-if="current_tab === 'Model Interactions'" />
      <Configuration v-else-if="current_tab === 'Configuration'" />
      <Requests v-else-if="current_tab === 'Requests'" />
    </template>
  </PageLayout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { primary_navigation } from '@/helpers';

import PageLayout from '@/components/layout/PageLayout.vue';
import Overview from '@/components/compliance/Overview.vue';
import DataPolicy from '@/components/compliance/DataPolicy.vue';
import ModelInteractions from '@/components/compliance/ModelInteractions.vue';
import Configuration from '@/components/compliance/Configuration.vue';
import Requests from '@/components/compliance/Requests.vue';

const tabs = primary_navigation.find((n) => n.name === 'Compliance').items;
const current_tab = ref(tabs.find((t) => t.current === true).name);
</script>
