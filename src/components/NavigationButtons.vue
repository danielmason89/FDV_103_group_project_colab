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
  <div class="flex justify-between items-center mt-8">
    <button v-if="showBack" @click="$emit('back')" class="secondary-button">Back</button>
    <div v-else></div>
    <button @click="$emit('continue')" :class="isSubmit ? 'primary-button' : 'primary-button'">
      {{ isSubmit ? 'Submit' : 'Continue' }}
    </button>
  </div>
</template>

<style scoped>
@import '../assets/base.css';
</style>
