import subjectAreacomponent from '@/components/subjectAreacomponent.vue';
<script setup lang="ts">
defineProps<{
  category?: string | string[]
  gradeLevel?: string | string[]
  subjectAreas?: string | string[]
  yearsOfExperience?: string
  compensation?: string
  applicationDeadline?: string
}>()
</script>

<template>
  <div class="card font-bold text-[var(--subHeading)]">
    <div class="grid grid-cols-1 gap-y-2 gap-x-55 md:gap-x-55 lg:gap-x-2 sm:grid-cols-1 md:grid-cols-2">
      <div class="flex items-center justify-start form-card">
        <span class="text-sm font-bold text-[var(--subHeading)]">
          {{ Array.isArray(subjectAreas) ? subjectAreas.join(', ') : subjectAreas || 'N/A' }}
        </span>
      </div>

      <div class="form-card">
        <span class="text-sm font-bold">
          {{ Array.isArray(gradeLevel) ? gradeLevel.join(', ') : gradeLevel }}
        </span>
      </div>
    </div>
    <br/>
    <div class="grid grid-cols-1 gap-x-55 gap-y-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <div class="form-card">
        <span class="block font-bold text-md">Years of Experience Required:</span>
        <span class="text-sm">{{ yearsOfExperience || 'N/A' }}</span>
      </div>

      <div class="form-card">
        <span class="block text-md font-md old">Recognition & Compensation:</span>
        <span class="text-sm">{{ compensation || 'N/A' }}</span>
      </div>

      <div class="form-card">
        <span class="block font-bold text-md">Application Deadline:</span>
        <span class="text-sm">{{ applicationDeadline || 'N/A' }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>

.form-card {
  width: 13.05rem;
}

.card {
  cursor: pointer;
}
</style>
