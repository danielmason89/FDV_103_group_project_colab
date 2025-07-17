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
    <div class="radio-group">
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
  </div>
</template>

<style scoped>
@import '../assets/base.css';
</style>
