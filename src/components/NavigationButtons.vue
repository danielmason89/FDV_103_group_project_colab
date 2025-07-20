<script setup lang="ts">
interface Props {
  showBack?: boolean
  continueText?: string
  backText?: string
  isSubmit?: boolean
  actionLabel?: string
}

interface Emits {
  (e: 'back'): void
  (e: 'continue'): void
  (e: 'action'): void
}

withDefaults(defineProps<Props>(), {
  showBack: false,
  continueText: 'Continue',
  backText: 'Back',
  isSubmit: false,
  actionLabel: '',
})

defineEmits<Emits>()
</script>

<template>
  <div class="flex justify-between items-center mt-8">
    <!-- Back -->
    <button v-if="showBack" type="button" @click.prevent="$emit('back')" class="secondary-button">
      Back
    </button>
    <div v-else></div>

    <!-- Continue / Submit -->
    <button
      v-if="!actionLabel"
      :type="isSubmit ? 'submit' : 'button'"
      @click.prevent="$emit('continue')"
      :class="isSubmit ? 'primary-button' : 'primary-button'"
    >
      {{ isSubmit ? 'Submit' : 'Continue' }}
    </button>

    <!-- Action -->
    <button v-if="actionLabel" type="button" @click="$emit('action')" class="secondary-button">
      {{ actionLabel }}
    </button>
  </div>
</template>

<style scoped>
@import '../assets/base.css';
</style>
