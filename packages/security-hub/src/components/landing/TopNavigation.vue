<template>
  <!-- Navigation Bar -->
  <nav
    class="flex w-full items-center justify-between border-b border-pop-secondary shadow-lg"
  >
    <!-- Logo -->
    <div class="flex items-center">
      <img
        src="/landing.png"
        alt="logo"
        class="m-2 w-24 object-cover rounded"
      />
    </div>

    <!-- Navigation Links (Hidden on Small Screens) -->
    <div class="hidden md:flex space-x-8 pt-6 text-pop-secondary font-medium">
      <div v-for="item in landing_page_navigation" :key="item.action">
        <a
          href="#"
          @click="emitAction(item.action)"
          class="hover:text-pop-primary transition"
        >
          {{ item.name }}
        </a>
      </div>

      <ThemeToggle class="ml-24" />
    </div>

    <LoginButton />
  </nav>
</template>

<script setup lang="ts">
import { Events, landing_page_navigation } from '@/helpers';
import LoginButton from '@/components/identity/LoginButton.vue';
import ThemeToggle from '@/components/common/ThemeToggle.vue';

const emit = defineEmits([Events.SCROLL_TO]);
const emitAction = (value: string) => {
  console.log('emiting', value);
  emit(Events.SCROLL_TO, value);
};
</script>
