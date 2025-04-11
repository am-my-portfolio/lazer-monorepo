<template>
  <BaseButton @click="handleLogin" text="LOG IN" />

</template>

<script setup lang="ts">
import { useAuth0 } from '@auth0/auth0-vue';
import BaseButton from "@/components/base/BaseButton.vue";

const { loginWithRedirect } = useAuth0();

const handleLogin = () => {
  loginWithRedirect({
    appState: {
      target: '/dashboard',
    },
    authorizationParams: {
      prompt: 'login',
    },
  });
};
</script>
