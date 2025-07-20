<script lang="ts">
export default {
  name: 'ApplyButtonComponent',
  props: {
    buttonText: {
      type: String,
      default: 'Apply Now!',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleClick() {
      if (!this.disabled) {
        this.$emit('apply-clicked')
      }
    },
  },
}
</script>

<template>
  <div class="apply-button-container">
    <button class="primary-button apply-button" :disabled="disabled" @click="handleClick">
      {{ buttonText }}
    </button>
  </div>
</template>

<style scoped>
.apply-button-container {
  display: flex;
}

.apply-button {
  cursor: pointer;
  border: none;
  outline: none;
  min-width: 120px;
  padding: 1.05rem;
}

.apply-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.apply-button:hover:not(:disabled) {
  background-color: var(--primaryHover);
}
</style>
