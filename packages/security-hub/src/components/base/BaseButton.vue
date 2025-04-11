<template>
  <button
    class="text-lg rounded-lg w-fit px-12 py-3 font-semibold transition shadow-lg hover:border-transparent bg-pop-secondary hover:bg-pop-primary text-white hover:text-primary">
    {{ text }}
  </button>
</template>

<script setup lang="ts">
defineProps({
  text: String,
});
</script>
