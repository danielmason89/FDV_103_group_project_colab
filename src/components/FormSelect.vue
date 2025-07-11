<script setup lang="ts">
/**
 * FormSelect Component
 *
 * A reusable dropdown/select component with consistent styling and validation support.
 * Integrates with Vue's v-model pattern and supports required field validation.
 *
 * Used in Page3View.vue for:
 * - Step 1: Organization type, province, country
 * - Step 2: Years of experience required
 */

// Interface for dropdown options
interface Option {
  value: string // Option value (sent to backend)
  label: string // Display text for the option
}

// Component props interface
interface Props {
  label: string // Form field label
  modelValue: string // Current selected value (v-model binding)
  options: Option[] // Array of dropdown options
  required?: boolean // Whether this field is required
  placeholder?: string // Optional placeholder text for the dropdown
}

// Component emits interface for v-model support
interface Emits {
  (e: 'update:modelValue', value: string): void // Emits the selected option value
}

defineProps<Props>()
defineEmits<Emits>()
</script>

<template>
  <div class="form-group">
    <!-- Form label with required indicator (*) -->
    <label class="form-label"> {{ label }}{{ required ? '*' : '' }} </label>

    <!-- Dropdown select element -->
    <select
      :value="modelValue"
      @change="$emit('update:modelValue', ($event.target as HTMLSelectElement).value)"
      :required="required"
    >
      <!-- Default/placeholder option -->
      <option value="" disabled>{{ placeholder || 'Please select an option' }}</option>

      <!-- Dynamic options from props -->
      <option v-for="option in options" :key="option.value" :value="option.value">
        {{ option.label }}
      </option>
    </select>
  </div>
</template>

<style scoped>
@import '../assets/page3.css';
</style>
