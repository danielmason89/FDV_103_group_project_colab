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
  <div class="card font-bold text-[var(--subHeading)]">
    <div class="grid grid-cols-1 gap-y-2 gap-x-55 md:gap-x-55 lg:gap-x-2 sm:grid-cols-1 md:grid-cols-2">
      <div class="flex items-center justify-start form-card">
        <span class="text-md font-bold text-[var(--subHeading)]">
          {{ category || 'Camp, Child Care' }}
        </span>
      </div>

      <div class="form-card">
        <span class="font-bold text-md">
          {{ gradeLevel || 'All Grade Levels' }}
        </span>
      </div>
    </div>
    <br/>
    <div class="grid grid-cols-1 gap-x-55 gap-y-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <div class="form-card">
        <span class="block font-bold text-md">Years of Experience Required:</span>
        <span class="text-md">{{ experienceLevel || 'Entry Level' }}</span>
      </div>

      <div class="form-card">
        <span class="block font-md old text-md">Recognition & Compensation:</span>
        <span class="text-md">{{ compensation || 'Hourly, Salary' }}</span>
      </div>

      <div class="form-card">
        <span class="block font-bold text-md">Application Deadline:</span>
        <span class="text-md">{{ applicationDeadline || 'dd/mm/yyyy' }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>

.form-card {
  width: 12rem;
}

.card {
  cursor: pointer;
}
</style>
