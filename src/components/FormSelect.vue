<script setup lang="ts">
import { useField } from 'vee-validate'
import { string } from 'yup'

const props = defineProps<{
  name: string
  label: string
  options: { value: string; Label: string }[]
  placeholder?: string
}>()

const { value, errorMessage, handleChange, handleBlur } = useField<string>(props.name)
</script>

<template>
  <div class="form-group">
    <label class="form-label"> {{ label }}{{ required ? '*' : '' }} </label>
    <select>
      v-model="value" @change="handleChange" @blur="handleBlur"
      <option>value="" disabled{{ placeholder ?? 'Please select an option' }}</option>
      <option v-for="option in options" :key="option.value" :value="option.value">
        {{ option.label }}
      </option>
    </select>
    <span v-if="errorMessage" class="text-red-600 text-sm">{{ errorMessage }}</span>
  </div>
</template>

<style scoped>
@import '../assets/base.css';
</style>
