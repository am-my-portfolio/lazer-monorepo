<template>
  <div class="relative">
    <div
      class="overflow-hidden rounded-lg border border-pop-primary/40 shadow-sm focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500"
    >
      <label for="description" class="sr-only">Description</label>
      <textarea
        rows="2"
        name="description"
        id="description"
        class="block w-full h-44 rounded-md border-0 pl-2 py-1.5 text-pop-primary shadow-sm ring-1 ring-inset ring-secondary placeholder:text-primary focus:ring-2 focus:ring-inset focus:ring-pop-secondary sm:text-sm sm:leading-6"
        placeholder="Enter Data ..."
      />

      <!-- Spacer element to match the height of the toolbar -->
      <div aria-hidden="true">
        <div class="py-2">
          <div class="h-9" />
        </div>
        <div class="h-px" />
        <div class="py-2">
          <div class="py-px">
            <div class="h-9" />
          </div>
        </div>
      </div>
    </div>

    <div class="absolute inset-x-px bottom-0">
      <div class="flex flex-nowrap justify-end space-x-2 px-2 py-2 sm:px-3">
        <Listbox as="div" class="flex-shrink-0" v-for="label in labels">
          <div class="relative">
            <ListboxButton
              class="relative inline-flex items-center whitespace-nowrap rounded-full px-2 py-2 sm:px-3 text-sm font-medium bg-pop-secondary/70 hover:bg-gray-200"
            >
              <TagIcon class="h-5 w-5 flex-shrink-0 sm:-ml-1 text-pop-primary" aria-hidden="true" />
              <span class="hidden md:block truncate sm:ml-2 text-primary hover:text-pop-primary">{{
                label.value === null ? 'Label' : label.name
              }}</span>
            </ListboxButton>
          </div>
        </Listbox>
      </div>

      <div class="flex items-center justify-between space-x-3 border-t border-pop-primary px-2 py-2 sm:px-3">
        <div class="flex">
          <button
            type="button"
            class="group -my-2 -ml-2 inline-flex items-center rounded-full px-3 py-2 text-left text-gray-400"
          >
            <PaperClipIcon
              class="-ml-1 mr-2 h-5 w-5 text-pop-secondary group-hover:text-pop-primary"
              aria-hidden="true"
            />
            <span class="text-sm italic text-pop-primary group-hover:text-pop-secondary">Attach a file</span>
          </button>
        </div>
        <div class="flex-shrink-0">
          <button
            type="submit"
            class="flex w-full justify-center rounded-md bg-pop-primary/40 px-10 py-2.5 text-sm font-semibold text-pop-secondary shadow-sm ring-1 ring-inset ring-secondary hover:bg-pop-primary/80 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-pop-primary/40"
          >
            Run Inference
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Listbox, ListboxButton } from '@headlessui/vue';
import { PaperClipIcon, TagIcon } from '@heroicons/vue/20/solid';

const labels = [
  { name: 'API 1', value: 'medical' },
  { name: 'API 2', value: 'engineering' },
  { name: 'External Data Source 1', value: 'legal' },
  { name: 'External Data Source 2', value: 'real estate' },
];
</script>
