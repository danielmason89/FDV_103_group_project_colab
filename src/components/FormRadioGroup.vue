<script setup lang="ts">
interface RadioOption {
  value: string
  label: string
}

interface Props {
  label: string
  options: RadioOption[]
  modelValue: string
  required?: boolean
  erro?: string
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
    <div class="radio-group" :class="['border rounded px-3 py-2', error && 'field-border-error']">
      <label v-for="option in options" :key="option.value" class="radio-item">
        <input
          type="radio"
          :value="option.value"
          :checked="modelValue === option.value"
          @change="$emit('update:modelValue', option.value)"
          class="form-radio"
        />
        <span>{{ option.label }}</span>
      </label>
    </div>
    <span v-if="error" class="field-text-error">{{ error }}</span>
  </div>
</template>

<style scoped>
@import '../assets/base.css';
</style>
