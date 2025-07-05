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
    <!-- Job Details -->
    <div class="flex flex-col gap-2">
      <div class="form-card">
        <span class="text-sm mb-1 block"> Camp, Childcare </span>
        <span class="text-sm text-[var(--subHeading)]">{{ category || 'Camp, Child Care' }}</span>
      </div>
      <div class="form-card">
        <span class="text-sm mb-1 block"> All Grade Level </span>
        <span class="text-sm">{{ gradeLevel || 'All Grade Levels' }}</span>
      </div>

      <div class="form-card">
        <span class="text-sm mb-1 block"> Years of Experience Required: </span>
        <span class="text-sm">{{ experienceLevel || 'Entry Level' }}</span>
      </div>

      <div class="form-card">
        <span class="text-sm mb-1 block"> Recognition & Compensation: </span>
        <span class="text-sm">{{ compensation || 'Hourly, Salary' }}</span>
      </div>

      <div class="form-card">
        <span class="text-sm mb-1 block"> Application Deadline: </span>
        <span class="text-sm">{{ applicationDeadline || 'dd/mm/yyyy' }}</span>
      </div>
    </div>
  </div>
</template>
