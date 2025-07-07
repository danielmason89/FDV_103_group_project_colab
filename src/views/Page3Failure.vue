<script setup lang="ts">
// Error page - no navigation logic needed
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <div class="max-w-6xl mx-auto p-6 w-full">
      <!-- Breadcrumb Navigation -->
      <div class="mb-8">
        <div class="flex items-center space-x-2 text-sm text-gray-600 mb-4">
          <span>&lt; breadcrumbs here</span>
        </div>

        <div class="breadcrumb-container">
          <div class="breadcrumb-step inactive">
            <div class="breadcrumb-content">
              <div class="font-semibold">Organization details</div>
              <div class="text-sm">About the organization</div>
            </div>
          </div>
          <div class="breadcrumb-step inactive">
            <div class="breadcrumb-content">
              <div class="font-semibold">Job specifications</div>
              <div class="text-sm">Role specifics</div>
            </div>
          </div>
          <div class="breadcrumb-step active last">
            <div class="breadcrumb-content">
              <div class="font-semibold">Job description</div>
              <div class="text-sm">and submission</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Error Content - Centered -->
    <div class="flex-1 flex items-center justify-center px-4 py-8">
      <div class="text-left max-w-4xl mx-auto">
        <!-- Error Title -->
        <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-teal-700 mb-6 md:mb-8 px-4">
          Sorry, we encountered an issue
        </h1>

        <!-- Error Message -->
        <div class="text-gray-700 text-base md:text-lg leading-relaxed px-4 space-y-4">
          <p>
            Something went wrong on our end. Please try submitting again We apologize for the
            inconvenience.
          </p>
          <p>
            Please refresh the page and try again. If the problem continues, please
            <a href="#" class="text-blue-600 hover:text-blue-800 underline">contact support</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import '../assets/shared-form-styles.css';
</style>
