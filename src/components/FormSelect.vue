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
      :required="required"
    >
      <option value="" disabled>{{ placeholder || 'Please select an option' }}</option>
      <option v-for="option in options" :key="option.value" :value="option.value">
        {{ option.label }}
      </option>
    </select>
  </div>
</template>

<style scoped>
@import '../assets/page3.css';
</style>
