<script setup lang="ts">
import { useField } from 'vee-validate'

interface CheckboxOption {
  value: string
  label: string
}

const props = defineProps<{
  name: string
  label: string
  options: CheckboxOption[]
  required?: boolean
}>()

const { value, errorMessage, setValue, handleBlur } = useField<string[]>(props.name)

function toggle(optionValue: string) {
  const next = value.value.slice()
  const idx = next.indexOf(optionValue)
  if (idx > -1) next.splice(idx, 1)
  else next.push(optionValue)
  setValue(next)
}
</script>

<template>
  <div class="form-group">
    <label class="form-label"> {{ label }}{{ required ? '*' : '' }} </label>
    <div
      class="checkbox-grid border rounded px-3 py-2"
      :class="errorMessage && 'field-border-error'"
    >
      <label v-for="opt in options" :key="opt.value" class="checkbox-item">
        <input
          type="checkbox"
          class="form-checkbox"
          :value="opt.value"
          :checked="value.includes(opt.value)"
          @change="toggle(opt.value)"
          @blur="handleBlur"
        />
        <span>{{ opt.label }}</span>
      </label>
    </div>
    <span v-if="errorMessage" class="field-text-error text-red-600 text-sm">
      {{ errorMessage }}
    </span>
  </div>
</template>

<style scoped>
@import '../assets/base.css';
</style>
