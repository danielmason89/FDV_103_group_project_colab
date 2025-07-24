<script setup lang="ts">
interface Props {
  label: string
  modelValue: string
  placeholder?: string
  required?: boolean
  type?: string
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
    <input
      :type="type || 'text'"
      :value="modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      :placeholder="placeholder"
      :required="required"
      :class="['border rounded px-3 py-2', error && 'field-border-error']"
    />
    <span v-if="error" class="field-text-error">{{ error }}</span>
    />
  </div>
</template>

<style scoped>
@import '../assets/base.css';
</style>
