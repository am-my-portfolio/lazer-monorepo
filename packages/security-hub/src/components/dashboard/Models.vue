<template>
  <PageDivisionLayout>
    <template #divisionTitle> Models </template>

    <!-- Search  -->
    <template #search>
      <div class="mt-10 divide-y divide-secondary">
        <form class="relative flex flex-1 m-1 h-12" action="#" method="GET">
          <label for="search-field" class="sr-only">Search</label>
          <i
            class="fa-solid fa-magnifying-glass text-pop-secondary pointer-events-none absolute inset-y-4 left-2 text-lg"
            aria-hidden="true"
          ></i>
          <input
            id="search-field"
            class="block h-full w-full pl-10 text-pop-secondary placeholder:text-pop-secondary focus:ring-0 sm:text-sm bg-primary border-2 border-secondary rounded-md"
            placeholder="search models ..."
            type="search"
            name="search"
          />
        </form>
      </div>
    </template>
    <!-- End Search  -->

    <template #divisionContent>
      <ModelsTable />
    </template>
  </PageDivisionLayout>
</template>

<script setup lang="ts">
import PageDivisionLayout from '@/components/layout/PageDivisionLayout.vue';
import ModelsTable from './models/Table.vue';
</script>
