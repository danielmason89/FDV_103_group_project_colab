<script setup lang="ts">
interface Option {
  value: string
  label: string
}

interface Props {
  label: string
  modelValue: string
  options: Option[]
  required?: boolean
  placeholder?: string
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
    <select
      :value="modelValue"
      @change="$emit('update:modelValue', ($event.target as HTMLSelectElement).value)"
      class="form-select"
    >
      <option value="">{{ placeholder || 'Select' }}</option>
      <option v-for="option in options" :key="option.value" :value="option.value">
        {{ option.label }}
      </option>
    </select>
  </div>
</template>

<style scoped>
@import '../assets/shared-form-styles.css';
</style>
