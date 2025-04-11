<template>
  <PageDivisionLayout>
    <template #divisionTitle> Requests </template>
    <template #divisionDescription> Manage & track compliance-related inquiries and requests</template>

    <template #divisionContent>
      <RequestsTable />
    </template>
  </PageDivisionLayout>
</template>

<script setup lang="ts">
import PageDivisionLayout from '@/components/layout/PageDivisionLayout.vue';
import RequestsTable from './requests/Table.vue';
</script>
