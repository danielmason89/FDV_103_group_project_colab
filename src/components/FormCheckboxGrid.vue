<script setup lang="ts">
interface CheckboxOption {
  value: string
  label: string
}

interface Props {
  label: string
  options: CheckboxOption[]
  modelValue: string[]
  required?: boolean
}

interface Emits {
  (e: 'update:modelValue', value: string[]): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

function handleCheckboxChange(optionValue: string) {
  const currentValues = [...props.modelValue]
  const index = currentValues.indexOf(optionValue)

  if (index > -1) {
    currentValues.splice(index, 1)
  } else {
    currentValues.push(optionValue)
  }

  emit('update:modelValue', currentValues)
}
</script>

<template>
  <div class="form-group">
    <label class="form-label"> {{ label }}{{ required ? '*' : '' }} </label>
    <div class="checkbox-grid">
      <label v-for="option in options" :key="option.value" class="checkbox-item">
        <input
          type="checkbox"
          :checked="modelValue.includes(option.value)"
          @change="handleCheckboxChange(option.value)"
          class="form-checkbox"
        />
        <span>{{ option.label }}</span>
      </label>
    </div>
  </div>
</template>

<style scoped>
@import '../assets/base.css';
</style>
