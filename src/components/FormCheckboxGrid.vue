<script setup lang="ts">
/**
 * FormCheckboxGrid Component
 *
 * A reusable checkbox grid component that allows multiple selections from a list of options.
 * Displays checkboxes in a grid layout for better visual organization.
 *
 * Used in Page3View.vue for:
 * - Step 1: Opportunity types (multiple selections allowed)
 * - Step 2: Subject areas, grade levels, and certifications (multiple selections allowed)
 */

// Interface for individual checkbox options
interface CheckboxOption {
  value: string // Unique identifier for the option
  label: string // Display text for the option
}

// Component props interface
interface Props {
  label: string // Form field label
  options: CheckboxOption[] // Array of checkbox options to display
  modelValue: string[] // Current selected values (v-model binding)
  required?: boolean // Whether this field is required
}

// Component emits interface for v-model support
interface Emits {
  (e: 'update:modelValue', value: string[]): void // Emits updated array of selected values
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

/**
 * Handles checkbox selection/deselection
 * Toggles the selected state of an option in the modelValue array
 *
 * @param optionValue - The value of the checkbox being toggled
 */
function handleCheckboxChange(optionValue: string) {
  // Create a copy of current values to avoid mutating props directly
  const currentValues = [...props.modelValue]
  const index = currentValues.indexOf(optionValue)

  // Toggle selection: remove if present, add if not present
  if (index > -1) {
    currentValues.splice(index, 1) // Remove from selection
  } else {
    currentValues.push(optionValue) // Add to selection
  }

  // Emit the updated array to parent component
  emit('update:modelValue', currentValues)
}
</script>

<template>
  <div class="form-group">
    <!-- Form label with required indicator -->
    <label class="form-label"> {{ label }}{{ required ? '*' : '' }} </label>

    <!-- Checkbox grid container -->
    <div class="checkbox-grid">
      <!-- Individual checkbox items -->
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
@import '../assets/page3.css';
</style>
