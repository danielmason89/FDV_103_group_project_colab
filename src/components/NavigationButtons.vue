<script setup lang="ts">
interface Props {
  showBack?: boolean
  continueText?: string
  backText?: string
  isSubmit?: boolean
}

interface Emits {
  (e: 'back'): void
  (e: 'continue'): void
}

withDefaults(defineProps<Props>(), {
  showBack: false,
  continueText: 'Continue',
  backText: 'Back',
  isSubmit: false,
})

defineEmits<Emits>()
</script>

<template>
  <div class="flex justify-between mt-8">
    <button v-if="showBack" @click="$emit('back')" class="back-button">
      {{ backText }}
    </button>
    <div v-else></div>
    <button @click="$emit('continue')" :class="isSubmit ? 'submit-button' : 'continue-button'">
      {{ continueText }}
    </button>
  </div>
</template>

<style scoped>
@import '../assets/shared-form-styles.css';
</style>
