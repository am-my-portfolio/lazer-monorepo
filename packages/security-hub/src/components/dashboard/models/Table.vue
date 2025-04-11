<template>
  <div class="-mx-4 mt-10 ring-1 ring-secondary sm:mx-0 sm:rounded-lg">
    <table class="min-w-full divide-y divide-secondary">
      <thead>
        <tr>
          <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-pop-primary sm:pl-6">Name</th>
          <th scope="col" class="hidden px-3 py-3.5 text-left text-sm font-semibold text-pop-primary lg:table-cell">
            Version
          </th>
          <th scope="col" class="hidden px-3 py-3.5 text-left text-sm font-semibold text-pop-primary lg:table-cell">
            Description
          </th>
          <th scope="col" class="hidden px-3 py-3.5 text-left text-sm font-semibold text-pop-primary lg:table-cell">
            Date Created
          </th>
          <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-pop-primary lg:table-cell">
            Last Updated
          </th>
          <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-pop-primary lg:table-cell">Status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(run, index) in inferences" :key="run.id">
          <td :class="[index === 0 ? '' : 'border-t border-transparent', 'relative py-4 pl-4 pr-3 text-sm sm:pl-6']">
            <div class="font-medium text-pop-primary">
              {{ run.name }}
              <span class="lg:hidden tracking-widest"> ({{ run.version }})</span>
            </div>
            <div class="mt-1 flex flex-col text-pop-secondary sm:block lg:hidden max-w-80">
              <span>{{ run.description }}</span>
            </div>
            <div v-if="index !== 0" class="absolute -top-px left-6 right-0 h-px bg-secondary" />
          </td>
          <td
            :class="[
              index === 0 ? '' : 'border-t border-secondary',
              'hidden px-3 py-3.5 text-sm text-pop-secondary lg:table-cell',
            ]"
          >
            {{ run.version }}
          </td>
          <td
            :class="[
              index === 0 ? '' : 'border-t border-secondary',
              'hidden px-3 py-3.5 text-sm text-pop-secondary lg:table-cell max-w-64',
            ]"
          >
            {{ run.description }}
          </td>
          <td
            :class="[
              index === 0 ? '' : 'border-t border-secondary',
              'hidden px-3 py-3.5 text-sm text-pop-secondary lg:table-cell',
            ]"
          >
            {{ run.date_created }}
          </td>
          <td :class="[index === 0 ? '' : 'border-t border-secondary', 'px-3 py-3.5 text-sm text-pop-secondary']">
            {{ run.date_updated }}
          </td>
          <td
            :class="[
              index === 0 ? '' : 'border-t border-transparent',
              'relative py-3.5 pl-3 pr-4 text-right text-sm font-medium sm:pr-6',
            ]"
          >
            <div
              class="text-sm text-center font-medium leading-6 px-6 py-2 rounded-xl text-pop-secondary bg-pop-primary/40"
            >
              {{ run.status }}<span class="sr-only">, {{ run.name }}</span>
            </div>
            <div v-if="index !== 0" class="absolute -top-px left-0 right-6 h-px bg-secondary" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
const inferences = [
  {
    name: 'LAZER',
    version: 'v1',
    description:
      'The default, non-removable entry for regulated industries, showcasing its prominence and permanency in the system',
    date_created: '2023-03-22',
    date_updated: 'N/A',
    status: 'Permananet',
  },
  {
    name: 'Chatbot',
    version: 'v1.1',
    description: 'A chatbot that can help users with common questions in a secure and compliant manner',
    date_created: '2023-03-22',
    date_updated: 'Aug 2024',
    status: 'Active',
  },
  {
    name: 'Weather Forecaster',
    version: 'v2',
    description:
      'A model that provides weather forecasts for a given location, designed with high compliance standards',
    date_created: '2023-03-22',
    date_updated: 'Feb 2024',
    status: 'Inactive',
  },
  {
    name: 'Music Composer',
    version: 'v3',
    description:
      'An AI model that generates original music compositions while ensuring data security and regulartory compliance',
    date_created: '2023-03-22',
    date_updated: 'Jan 2024',
    status: 'Active',
  },
  {
    name: 'Language Translator',
    version: 'v4',
    description: 'A model that translates text between different languages in a secure and compliant manner',
    date_created: '2023-03-22',
    date_updated: 'March 2024',
    status: 'Active',
  },
];
</script>
