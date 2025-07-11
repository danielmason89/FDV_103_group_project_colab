<script setup lang="ts">
/**
 * FormInput Component
 *
 * A reusable form input component with consistent styling and validation support.
 * Supports various input types and integrates with Vue's v-model pattern.
 *
 * Used in Page3View.vue for:
 * - Step 1: Job title, organization name, street address, city
 * - Step 3: Application link, application deadline (date type)
 */

// Component props interface
interface Props {
  label: string // Form field label
  modelValue: string // Current input value (v-model binding)
  placeholder?: string // Optional placeholder text
  required?: boolean // Whether this field is required
  type?: string // Input type (text, email, date, etc.) - defaults to 'text'
}

// Component emits interface for v-model support
interface Emits {
  (e: 'update:modelValue', value: string): void // Emits updated input value
}

defineProps<Props>()
defineEmits<Emits>()
</script>

<template>
  <div class="form-group">
    <!-- Form label with required indicator (*) -->
    <label class="form-label"> {{ label }}{{ required ? '*' : '' }} </label>

    <!-- Input field with v-model support -->
    <input
      :type="type || 'text'"
      :value="modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      :placeholder="placeholder"
      :required="required"
    />
  </div>
</template>

<style scoped>
@import '../assets/page3.css';
</style>
