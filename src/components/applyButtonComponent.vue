<script setup lang="ts">

// Define the props accepted by the component:
// - text: optional label for the button
// - disabled: optional flag to disable the button
// - href: optional link to open on click
const props = defineProps<{
  text?: string
  disabled?: boolean
  href?: string
}>()

// Fallback text to display if no `text` prop is provided
const buttonText = props.text || 'Apply Now!'

// Click handler for the button
function handleClick() {
  // Do nothing if the button is disabled
  if (props.disabled) return

  // If a URL is provided, open it in a new browser tab
  if (props.href) {
    window.open(props.href, '_blank', 'noopener,noreferrer')
  }
}

</script>

<template>
  <div class="apply-button-container">
    <button
      class="primary-button apply-button"
      :disabled="disabled"
      @click="handleClick"
    >
      {{ buttonText }}
    </button>
  </div>
</template>

<style scoped>
/* Container ensures the button can be flex-aligned within a layout */
.apply-button-container {
  display: flex;
}

/* Base styling for the apply button */
.apply-button {
  cursor: pointer;
  border: none;
  outline: none;
  min-width: 120px;
  padding: 1.05rem;
}

/* Styling for the disabled state: faded and not clickable */
.apply-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* Hover effect for enabled button */
.apply-button:hover:not(:disabled) {
  background-color: var(--primaryHover); /* Uses custom theme variable */
}
</style>
