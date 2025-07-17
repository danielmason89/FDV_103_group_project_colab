<script setup lang="ts">
interface Props {
  label: string
  modelValue: string
  placeholder?: string
  required?: boolean
  rows?: number
  showCharacterCount?: boolean
  maxCharacters?: number
}

interface Emits {
  (e: 'update:modelValue', value: string): void
}

defineProps<Props>()
defineEmits<Emits>()
</script>

<template>
  <div class="form-group">
    <label class="form-label"> {{ label }}{{ required ? '*' : '' }} </label>
    <textarea
      :value="modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLTextAreaElement).value)"
      :placeholder="placeholder"
      :rows="rows || 4"
      :required="required"
      :maxlength="maxCharacters"
    ></textarea>
    <div v-if="showCharacterCount" class="character-count">
      {{ modelValue.length }}{{ maxCharacters ? `/${maxCharacters}` : '/0' }}
    </div>
  </div>
</template>

<style scoped>
@import '../assets/base.css';
</style>
