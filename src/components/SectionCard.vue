<script setup lang="ts">
defineProps<{
  title?: string
}>()
</script>

<template>
<<<<<<< HEAD
  <section class="p-6 bg-white rounded-xl">
=======
  <section class="p-6 bg-white shadow-md rounded-xl">
>>>>>>> 6b17cf74eb6a1da054ad83a7084326fa9b0bc3c5
    <h2 v-if="title" class="mb-4 text-lg font-semibold text-gray-700">
      {{ title }}
    </h2>
    <slot />
  </section>
</template>

