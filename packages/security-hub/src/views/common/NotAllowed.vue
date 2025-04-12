<template>
  <main v-if="isAuthenticated" class="grid min-h-full place-items-center bg-primary px-6 py-24 sm:py-32 lg:px-8">
    <div class="text-center">
      <h1 class="mt-5 text-3xl font-bold tracking-tight text-normal sm:text-5xl text-pop-secondary">
        Uh Oh
      </h1>
      <p class="mt-5 text-xl leading-7 text-normal text-pop-primary">
        You don't have access to this Page
      </p>
      <div class="mt-10 flex items-center justify-center gap-x-6">
        <BaseButton @click="logoutUser" text="Login with the correct credentials" />
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useAuth0 } from '@auth0/auth0-vue';
import { AllRoles, userHasAllRoles, userHasAnyRoles } from '@/auth';
import BaseButton from "@/components/base/BaseButton.vue";

const { isAuthenticated, logout } = useAuth0();

const router = useRouter();
onMounted(() => {
  const condition = !userHasAllRoles([AllRoles.TEAM_ADMIN, AllRoles.TEAM_MEMBER]) && userHasAnyRoles([AllRoles.CLIENT]);
  if (condition) {
    router.push('/profile');
  }
});

const logoutUser = () => {
  logout({
    logoutParams: {
      returnTo: window.location.origin,
    },
  });
};
</script>
