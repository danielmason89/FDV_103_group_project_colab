<script setup lang="ts">
defineProps<{
  jobTitle?: string
  companyName?: string
  category?: string
  gradeLevel?: string
  experienceLevel?: string
  compensation?: string
  applicationDeadline?: string
}>()
</script>

<template>
  <div class="card font-bold text-[var(--subHeading)] space-y-4">
    <!-- Top Section: 2-column grid -->
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <div class="flex items-center justify-start form-card">
        <span class="text-lg font-bold text-[var(--subHeading)]">
          {{ category || 'Camp, Child Care' }}
        </span>
      </div>

      <div class="form-card">
        <span class="text-lg font-bold">
          {{ gradeLevel || 'All Grade Levels' }}
        </span>
      </div>
    </div>
    <br/>
    <!-- Bottom Section: 3-column grid -->
    <div class="grid grid-cols-1 gap-55 sm:grid-cols-2 md:grid-cols-3">
      <div class="form-card">
        <span class="block text-lg font-bold">Years of Experience Required:</span>
        <span class="text-lg">{{ experienceLevel || 'Entry Level' }}</span>
      </div>

      <div class="form-card">
        <span class="block text-lg font-bold">Recognition & Compensation:</span>
        <span class="text-lg">{{ compensation || 'Hourly, Salary' }}</span>
      </div>

      <div class="form-card">
        <span class="block text-lg font-bold">Application Deadline:</span>
        <span class="text-lg">{{ applicationDeadline || 'dd/mm/yyyy' }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>

.form-card {
  width: 15vw;
}

.card {
  cursor: pointer;
}
</style>
