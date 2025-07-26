<script setup lang="ts">
import { useField } from 'vee-validate'

const props = defineProps<{
  name: string
  label: string
  placeholder?: string
  required?: boolean
  rows?: number
  showCharacterCount?: boolean
  maxCharacters?: number
}>()

const { value, errorMessage, handleChange, handleBlur } = useField<string>(props.name)
</script>

<template>
  <div class="form-group">
    <label class="form-label"> {{ label }}{{ required ? '*' : '' }} </label>
    <textarea
      name="value"
      @input="handleChange"
      @blur="handleBlur"
      :placeholder="placeholder"
      :rows="rows ?? 4"
      :required="required"
      :maxlength="maxCharacters"
      :class="{ 'border-red--500': errorMessage }"
    ></textarea>
    <div v-if="showCharacterCount" class="character-count">
      {{ value.length }}{{ maxCharacters ? `/${maxCharacters}` : '/0' }}
    </div>
    <span v-if="errorMessage" class="text-red-600 text-sm">{{ errorMessage }}</span>
  </div>
</template>

<style scoped>
@import '../assets/base.css';
</style>
