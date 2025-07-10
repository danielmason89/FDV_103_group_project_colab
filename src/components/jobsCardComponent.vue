<script setup lang="ts">
defineProps<{
  jobName?: string
  organizationName?: string
  gradeLevelText?: string
  schoolBoardText?: string
}>()
</script>

<template>
  <div class="card">
    <div
      class="card-header camp-gradient h-24 rounded-t-md bg-gradient-to-b from-purple-300 to-purple-800"
    ></div>
    <div class="card-content mt-1">
      <div class="flex justify-between items-center mb-0.5">
        <h3 class="text-lg font-semibold">
          {{ jobName || 'Job Name Goes Here' }}
        </h3>
      </div>

      <div class="card-footer flex items-center justify-between">
        <span class="organization-name text-sm text-gray-700">
          {{ organizationName || 'Organization Name' }}
        </span>
        <span class="badge school-board">{{ schoolBoardText || 'School Board' }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
