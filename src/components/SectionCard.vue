<script setup lang="ts">
// Define a single optional prop:
// - title: A string to display as the section heading
defineProps<{
  title?: string
}>()
</script>

<template>
  <!-- Main container with padding and styling -->
  <section class="p-6 bg-white rounded-xl">

    <!-- Conditionally render the section heading if a title is provided -->
    <h2 v-if="title" class="mb-4 text-lg font-semibold text-gray-700">
      {{ title }}
    </h2>

    <!-- Default slot to render nested content passed to this component -->
    <slot />

  </section>
</template>

