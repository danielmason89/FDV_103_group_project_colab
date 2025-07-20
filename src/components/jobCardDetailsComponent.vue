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
        <span class="text-sm font-bold text-[var(--subHeading)]">{{ category || 'Camp, Child Care' }}</span>
      </div>
      <div class="form-card">
        <span class="text-sm font-bold">{{ gradeLevel || 'All Grade Levels' }}</span>
      </div>

      <div class="form-card">
        <span class="block text-sm font-bold"> Years of Experience Required: </span>
        <span class="text-sm">{{ experienceLevel || 'Entry Level' }}</span>
      </div>

      <div class="form-card">
        <span class="block text-sm font-bold"> Recognition & Compensation: </span>
        <span class="text-sm text-bold">{{ compensation || 'Hourly, Salary' }}</span>
      </div>

      <div class="form-card">
        <span class="text-sm text-bold"> Application Deadline: </span>
        <br/>
        <span class="text-sm text-bold">{{ applicationDeadline || 'dd/mm/yyyy' }}</span>
      </div>
    </div>
  </div>
</template>
<style scoped>
.card {
  cursor: pointer;
}
</style>
