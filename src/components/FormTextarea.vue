<script setup lang="ts">
interface Props {
  label: string
  modelValue: string
  placeholder?: string
  required?: boolean
  rows?: number
  showCharacterCount?: boolean
  maxCharacters?: number
  error?: string
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
      :class="['border rounded px-3 py-2', error && 'field-border-error']"
    ></textarea>
    <div v-if="showCharacterCount" class="character-count">
      {{ modelValue.length }}{{ maxCharacters ? `/${maxCharacters}` : '/0' }}
    </div>
    <span v-if="error" class="field-text-error">{{ error }}</span>
  </div>
</template>

<style scoped>
@import '../assets/base.css';
</style>
