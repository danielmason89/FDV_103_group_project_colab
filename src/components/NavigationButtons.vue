<script setup lang="ts">
/**
 * NavigationButtons Component
 *
 * A reusable navigation component for multi-step forms with back/continue buttons.
 * Handles step progression and form submission with consistent styling.
 *
 * Used in Page3View.vue for:
 * - Step navigation (back/continue buttons)
 * - Final form submission (submit button)
 */

// Component props interface
interface Props {
  showBack?: boolean // Whether to show the back button (hidden on first step)
  continueText?: string // Text for the continue/submit button
  backText?: string // Text for the back button
  isSubmit?: boolean // Whether this is the final step (changes button styling)
}

// Component emits interface for button actions
interface Emits {
  (e: 'back'): void // Emitted when back button is clicked
  (e: 'continue'): void // Emitted when continue/submit button is clicked
}

// Default prop values for better UX
withDefaults(defineProps<Props>(), {
  showBack: false, // Don't show back button by default
  continueText: 'Continue', // Default continue button text
  backText: 'Back', // Default back button text
  isSubmit: false, // Default to continue mode (not submit)
})

defineEmits<Emits>()
</script>

<template>
  <div class="flex justify-between items-center mt-8">
    <!-- Back button (conditionally shown) -->
    <button v-if="showBack" @click="$emit('back')" class="secondary-button">Back</button>
    <div v-else></div>
    <!-- Empty div for spacing when back button is hidden -->

    <!-- Continue/Submit button -->
    <button @click="$emit('continue')" :class="isSubmit ? 'primary-button' : 'primary-button'">
      {{ isSubmit ? 'Submit' : 'Continue' }}
    </button>
  </div>
</template>

<style scoped>
@import '../assets/page3.css';
</style>
