<template>
  <div class="mt-10 divide-y divide-secondary">
    <div class="space-y-1">
      <h3 class="text-lg font-medium leading-6 text-pop-secondary">
        <slot name="divisionTitle" />
      </h3>
      <p class="max-w-full text-sm text-secondary">
        <slot name="divisionDescription" />
      </p>
    </div>

    <div class="mt-5 mb-20">
      <slot name="search" />
      <slot name="divisionContent" />
      <slot></slot>
    </div>
  </div>
</template>
