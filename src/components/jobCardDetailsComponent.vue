<script setup lang="ts">
// Define the expected props for this detail display component
defineProps<{
  category?: string | string[]
  gradeLevel?: string | string[]
  subjectAreas?: string | string[]
  yearsOfExperience?: string
  compensation?: string
  applicationDeadline?: string
  organizationType?: string
}>()
</script>

<template>
  <!-- Main card wrapper with consistent font and color styling -->
  <div class="card font-bold text-[var(--subHeading)]">

    <!-- First row: Organization type and grade level -->
    <div class="grid grid-cols-1 gap-y-2 gap-x-55 md:gap-x-55 lg:gap-x-2 sm:grid-cols-1 md:grid-cols-2">
      <!-- Organization Type -->
      <div class="flex items-center justify-start form-card">
        <span class="text-sm font-bold text-[var(--subHeading)]">
          {{ organizationType || 'N/A' }}
        </span>
      </div>

      <!-- Grade Level (display as comma-separated list if array) -->
      <div class="form-card">
        <span class="text-sm font-bold">
          {{ Array.isArray(gradeLevel) ? gradeLevel.join(', ') : gradeLevel }}
        </span>
      </div>
    </div>

    <br/>

    <!-- Second row: Experience, Compensation, and Deadline -->
    <div class="grid grid-cols-1 gap-x-55 gap-y-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <!-- Years of Experience -->
      <div class="form-card">
        <span class="block font-bold text-md">Years of Experience Required:</span>
        <span class="text-sm">{{ yearsOfExperience || 'N/A' }}</span>
      </div>

      <!-- Compensation -->
      <div class="form-card">
        <span class="block text-md font-md old">Recognition & Compensation:</span>
        <span class="text-sm">{{ compensation || 'N/A' }}</span>
      </div>

      <!-- Application Deadline -->
      <div class="form-card">
        <span class="block font-bold text-md">Application Deadline:</span>
        <span class="text-sm">{{ applicationDeadline || 'N/A' }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Styling for each individual "card" segment */
.form-card {
  width: 13.05rem; /* Fixed width for consistent layout */
}

/* Base card styling with pointer cursor (suggesting interactivity) */
.card {
  cursor: pointer;
}
</style>
