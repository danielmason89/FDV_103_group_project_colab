<script setup lang="ts">
import { onMounted } from 'vue'
import BreadcrumbNavigation from '../components/BreadcrumbNavigation.vue'

// Reset scroll position when component mounts
onMounted(() => {
  const contentArea = document.querySelector('.content-area')
  if (contentArea) {
    contentArea.scrollTop = 0
  }
})
</script>

<template>
  <div class="flex flex-col min-h-full">
    <div class="max-w-6xl mx-auto w-full">
      <BreadcrumbNavigation :current-step="3" />
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
