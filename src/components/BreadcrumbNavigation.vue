<script setup lang="ts">
/**
 * BreadcrumbNavigation Component
 *
 * Displays the current step progress in the multi-step job posting form.
 * Shows users which step they're on and provides visual feedback for form progression.
 *
 * Used in: Page3View.vue - Shows progress through the 3-step job posting form
 */

// Props interface for component configuration
interface Props {
  currentStep: 1 | 2 | 3 // Current step in the multi-step form (1-3)
}

defineProps<Props>()
</script>

<template>
  <div class="mb-8">
    <!-- Placeholder for future breadcrumb implementation -->
    <div class="flex items-center space-x-2 text-sm text-gray-600 mb-4">
      <span>&lt; breadcrumbs here</span>
    </div>

    <!-- Main breadcrumb container with step indicators -->
    <div class="breadcrumb-container">
      <!-- Step 1: Organization details -->
      <div
        class="breadcrumb-step"
        :class="{ active: currentStep === 1, inactive: currentStep !== 1 }"
      >
        <div class="breadcrumb-content">
          <div class="font-semibold">Organization details</div>
          <div class="text-sm">About the organization</div>
        </div>
      </div>

      <!-- Step 2: Job specifications -->
      <div
        class="breadcrumb-step"
        :class="{ active: currentStep === 2, inactive: currentStep !== 2 }"
      >
        <div class="breadcrumb-content">
          <div class="font-semibold">Job specifications</div>
          <div class="text-sm">Role specifics</div>
        </div>
      </div>

      <!-- Step 3: Job description (final step) -->
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
@import '../assets/page3.css';
</style>
