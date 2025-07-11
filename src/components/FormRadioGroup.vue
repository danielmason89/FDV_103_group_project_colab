<script setup lang="ts">
/**
 * FormRadioGroup Component
 *
 * A reusable radio button group component that allows single selection from multiple options.
 * Displays radio buttons in a vertical layout with consistent styling.
 *
 * Used in Page3View.vue for:
 * - Step 2: Recognition and compensation (single selection only)
 */

// Interface for individual radio options
interface RadioOption {
  value: string // Unique identifier for the option
  label: string // Display text for the option
}

// Component props interface
interface Props {
  label: string // Form field label
  options: RadioOption[] // Array of radio options to display
  modelValue: string // Current selected value (v-model binding) - single value only
  required?: boolean // Whether this field is required
}

// Component emits interface for v-model support
interface Emits {
  (e: 'update:modelValue', value: string): void // Emits the selected radio value
}

defineProps<Props>()
defineEmits<Emits>()
</script>

<template>
  <div class="form-group">
    <!-- Form label with required indicator (*) -->
    <label class="form-label"> {{ label }}{{ required ? '*' : '' }} </label>

    <!-- Radio button group container -->
    <div class="radio-group">
      <!-- Individual radio button items -->
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
@import '../assets/page3.css';
</style>
