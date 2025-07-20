<script setup lang="ts">
interface Props {
  currentStep: 1 | 2 | 3
}

defineProps<Props>()
</script>

<template>
  <div class="mb-8">
    <div class="flex items-center space-x-2 text-sm text-gray-600 mb-4">
      <span>&lt; breadcrumbs here</span>
    </div>

    <div class="breadcrumb-container">
      <div
        class="breadcrumb-step"
        :class="{ active: currentStep === 1, inactive: currentStep !== 1 }"
      >
        <div class="breadcrumb-content">
          <div class="font-semibold">Organization details</div>
          <div class="text-sm">About the organization</div>
        </div>
      </div>
      <div
        class="breadcrumb-step"
        :class="{ active: currentStep === 2, inactive: currentStep !== 2 }"
      >
        <div class="breadcrumb-content">
          <div class="font-semibold">Job specifications</div>
          <div class="text-sm">Role specifics</div>
        </div>
      </div>
      <div
        class="breadcrumb-step last"
        :class="{ active: currentStep === 3, inactive: currentStep !== 3 }"
      >
        <div class="breadcrumb-content">
          <div class="font-semibold">Job description</div>
          <div class="text-sm">and submission</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import '../assets/base.css';
</style>
