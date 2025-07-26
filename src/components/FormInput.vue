<script setup lang="ts">
import { useField } from 'vee-validate'

const props = defineProps<{
  name: string
  label: string
  placeholder?: string
  type?: string
}>()

const { value, errorMessage, handleChange, handleBlur } = useField<string>(props.name)
</script>

<template>
  <div class="form-group">
    <label class="form-label"> {{ label }}</label>
    <input
      :type="type || 'text'"
      :placeholder="placeholder"
      v-model="value"
      @blur="handleBlur"
      @input="handleChange"
      :class="{ 'border-red-500': errorMessage }"
    />
    <span v-if="errorMessage" class="text-red-600 text-sm">
      {{ errorMessage }}
    </span>
  </div>
</template>

<style scoped>
@import '../assets/base.css';
</style>
