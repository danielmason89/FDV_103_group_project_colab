<script setup lang="ts">
/**
 * FormTextarea Component
 *
 * A reusable textarea component with character counting and consistent styling.
 * Supports multi-line text input with optional character limits and validation.
 *
 * Used in Page3View.vue for:
 * - Step 1: About the organization (with character count)
 * - Step 2: Qualifications
 * - Step 3: Job description (with character count, larger size)
 */

// Component props interface
interface Props {
  label: string // Form field label
  modelValue: string // Current textarea value (v-model binding)
  placeholder?: string // Optional placeholder text
  required?: boolean // Whether this field is required
  rows?: number // Number of visible rows (defaults to 4)
  showCharacterCount?: boolean // Whether to display character count
  maxCharacters?: number // Optional maximum character limit
}

// Component emits interface for v-model support
interface Emits {
  (e: 'update:modelValue', value: string): void // Emits updated textarea value
}

defineProps<Props>()
defineEmits<Emits>()
</script>

<template>
  <div class="form-group">
    <!-- Form label with required indicator (*) -->
    <label class="form-label"> {{ label }}{{ required ? '*' : '' }} </label>

    <!-- Textarea element with v-model support -->
    <textarea
      :value="modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLTextAreaElement).value)"
      :placeholder="placeholder"
      :rows="rows || 4"
      :required="required"
      :maxlength="maxCharacters"
    ></textarea>

    <!-- Character count display (optional) -->
    <div v-if="showCharacterCount" class="character-count">
      {{ modelValue.length }}{{ maxCharacters ? `/${maxCharacters}` : '/0' }}
    </div>
  </div>
</template>

<style scoped>
@import '../assets/page3.css';
</style>
