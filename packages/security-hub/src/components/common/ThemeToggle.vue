<template>
  <div
    @click="toggleDark()"
    :class="[
      'flow-root text-pop-secondary ',
      isAuthenticated ? 'hover:text-primary' : 'hover:text-pop-primary',
    ]"
  >
    <div
      :class="[
        'float-left mr-4',
        isAuthenticated ? '' : '-mt-1 cursor-pointer',
      ]"
    >
      <component
        v-if="is_dark"
        :is="MoonIcon"
        class="w-6 shrink-0"
        aria-hidden="true"
      />
      <component
        v-if="!is_dark"
        :is="SunIcon"
        class="w-6 shrink-0"
        aria-hidden="true"
      />
    </div>
    <div v-if="isAuthenticated" class="float-right pt-1">
      {{ is_dark ? 'Go Light' : 'Go Dark' }} Theme
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core';
import { MoonIcon, SunIcon } from '@heroicons/vue/24/outline';
import { useAuth0 } from '@auth0/auth0-vue';

const { isAuthenticated } = useAuth0();
const is_dark = useDark();
const toggleDark = useToggle(is_dark);
</script>
