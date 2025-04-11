<template>
  <div class="relative mx-auto not-italic">
    <div class="pb-16 pt-10">
      <!-- Page Titles -->
      <div class="px-4 sm:px-6 lg:px-0">
        <h1 class="text-3xl font-bold tracking-tight text-pop-secondary">
          <slot name="pageTitle" />
        </h1>
        <p class="max-w-full text-sm text-secondary pt-2">
          <slot name="description" />
        </p>
      </div>
      <!-- End Page Titles -->

      <div class="px-4 sm:px-6 lg:px-0">
        <div class="py-6">
          <slot name="tabs" />
          <slot name="search" />
          <slot name="pageContent" />
        </div>
      </div>
    </div>
  </div>
</template>
