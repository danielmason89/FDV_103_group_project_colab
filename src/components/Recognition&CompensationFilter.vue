<template>
  <div class="recognition-filter">
    <div
      v-for="option in options"
      :key="option.name"
      class="radio-option"
      :class="{ selected: option.name === selectedOption }"
    >
      <div class="radio-circle">
        <div v-if="option.name === selectedOption" class="radio-dot"></div>
      </div>
      <span class="option-label">{{ option.name }}</span>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'RecognitionCompensationFilter',
  data() {
    return {
      options: [
        { name: 'Salary' },
        { name: 'Hourly' },
        { name: 'Volunteer' },
        { name: 'Professional Learning Credits' },
      ],
      selectedOption: '', // TODO: set selected
    }
  },
}
</script>

<style scoped>
.recognition-filter {
  width: 240px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.radio-option {
  display: flex;
  align-items: center;
  padding: 10px 14px;
  border-radius: 6px;
  cursor: pointer;
  margin-bottom: 4px;
  transition: background-color 0.2s;
}

.radio-option:hover {
  background-color: #f0f0f0;
}

.radio-option.selected {
  background-color: #2c5f5f;
  color: white;
}

.radio-option.selected:hover {
  background-color: #1e4545;
}

.radio-circle {
  width: 16px;
  height: 16px;
  border: 2px solid #ccc;
  border-radius: 50%;
  margin-right: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  transition: all 0.2s;
}

.radio-dot {
  width: 8px;
  height: 8px;
  background-color: #2c5f5f;
  border-radius: 50%;
}

.radio-option.selected .radio-circle {
  border-color: white;
  background-color: white;
}

.option-label {
  font-size: 14px;
  font-weight: 500;
}
</style>
