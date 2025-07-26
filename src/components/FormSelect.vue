<script setup lang="ts">
import { useField } from 'vee-validate'
import { string } from 'yup'

const props = defineProps<{
  name: string
  label: string
  options: { value: string; label: string }[]
  placeholder?: string
  required?: boolean
}>()

const { value, errorMessage, handleChange, handleBlur } = useField<string>(props.name)
</script>

<template>
  <div class="form-group">
    <label class="form-label"> {{ label }}<span v-if="required" class="required">*</span> </label>
    <select v-model="value" @change="handleChange" @blur="handleBlur">
      :required="required
      <option value="" disabled>{{ placeholder ?? 'Please select an option' }}</option>
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
