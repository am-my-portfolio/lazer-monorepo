<template>
  <!-- the X value needs to match b/w the lg:w-X of the side column and the lg:pl-X of the main column -->


  <!-- Left Column -->
  <div v-if="isAuthenticated" class="hidden lg:fixed lg:flex lg:flex-col lg:inset-y-0 lg:z-50 lg:w-80">
    <SideMenu />
  </div>

  <!-- Main Column  -->
  <div :class="[
    isAuthenticated ? 'lg:pl-80' : '',
    'flex flex-col h-screen justify-between',
  ]">
    <div v-if="isAuthenticated" class="sticky top-0 z-40 lg:px-8">
      <Header />
    </div>
    <div v-else class="sticky top-0 z-40 px-2 sm:px-6 lg:px-44 bg-primary">
      <TopNavigation @scroll:to="handleScroll" />
    </div>

    <main class="mb-auto mx-auto w-full py-4 px-4 sm:px-6 lg:px-44 overflow-auto scrollbar">
      <!-- <Toast /> -->
      <router-view v-if="!isLoading" />
    </main>

    <div class="sticky border-t-2 z-40 mx-8 border-pop-secondary">
      <Footer />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuth0 } from '@auth0/auth0-vue';
import { landing_page_navigation } from '@/helpers';
// import Toast from 'primevue/toast';

import SideMenu from '@/components/layout/SideMenu.vue';
import Header from '@/components/layout/Header.vue';
import Footer from '@/components/layout/Footer.vue';
import TopNavigation from '@/components/landing/TopNavigation.vue';

const { isLoading, isAuthenticated } = useAuth0();

const handleScroll = async (value) => {
  console.log('scrolling to', value);

  for (const item of landing_page_navigation) {
    if (item.action === value) {
      item.ref.value = document.getElementById(item.action);
      item.ref.value?.scrollIntoView({ behavior: 'smooth' });
    }
  }
};
</script>
