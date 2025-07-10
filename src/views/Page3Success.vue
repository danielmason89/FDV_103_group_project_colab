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

    <!-- Success Content - Centered -->
    <div class="flex-1 flex items-center justify-center px-4 py-8">
      <div class="text-center max-w-2xl mx-auto">
        <!-- Success Icon -->
        <div class="flex justify-center mb-6 md:mb-8">
          <div
            class="w-20 h-20 md:w-24 md:h-24 bg-green-500 rounded-full flex items-center justify-center border-4 border-green-400"
          >
            <svg
              class="w-10 h-10 md:w-12 md:h-12 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
          </div>
        </div>

        <!-- Success Title -->
        <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-teal-700 mb-4 md:mb-6 px-4">
          Success!
        </h1>

        <!-- Success Subtitle -->
        <h2 class="text-xl md:text-2xl font-semibold text-teal-700 mb-6 md:mb-8 px-4">
          Your job posting has been submitted for review
        </h2>

        <!-- Success Message -->
        <div class="text-gray-700 text-base md:text-lg leading-relaxed px-4 space-y-4">
          <p>
            Thank you for your submission. Your post is currently under review by our team. We'll
            send you an email once it's approved — keep an eye on your inbox!
          </p>
          <p>
            If you have any questions or need to make changes, feel free to
            <a href="#" class="text-blue-600 hover:text-blue-800 underline">contact us</a>!
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import '../assets/page3.css';
</style>
