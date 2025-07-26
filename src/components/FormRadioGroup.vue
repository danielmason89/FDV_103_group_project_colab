<script setup lang="ts">
import { useField } from 'vee-validate'

interface RadioOption {
  value: string
  label: string
}
const props = defineProps<{
  name: string
  label: string
  options: RadioOption[]
  required?: boolean
}>()

const { value, errorMessage, setValue, handleBlur } = useField<string>(props.name)
</script>

<template>
  <div class="form-group">
    <label class="form-label"> {{ label }}{{ required ? '*' : '' }} </label>
    <div
      class="radio-group"
      :class="['border rounded px-3 py-2', errorMessage && 'field-border-error']"
    >
      <label v-for="opt in options" :key="opt.value" class="radio-item">
        <input
          class="form-radio"
          type="radio"
          :value="opt.value"
          :checked="value === opt.value"
          @change="() => setValue(opt.value)"
          @blur="handleBlur"
        />
        <span>{{ opt.label }}</span>
      </label>
    </div>
    <span v-if="errorMessage" class="field-text-error text-red-600 text-sm">{{
      errorMessage
    }}</span>
  </div>
</template>

<style scoped>
@import '../assets/base.css';
</style>
