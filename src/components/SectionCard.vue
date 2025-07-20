<script setup lang="ts">
defineProps<{
  title?: string
}>()
</script>

<template>
  <section class="p-6 bg-white shadow-md rounded-xl">
    <h2 v-if="title" class="mb-4 text-lg font-semibold text-gray-700">
      {{ title }}
    </h2>
    <slot />
  </section>
</template>

