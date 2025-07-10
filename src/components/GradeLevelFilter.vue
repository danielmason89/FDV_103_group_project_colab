<template>
  <div class="grade-filter">
    <div
      v-for="grade in grades"
      :key="grade.name"
      class="grade-option"
      :class="{ selected: grade.selected }"
    >
      <div class="checkbox">
        <svg
          v-if="grade.selected"
          class="checkmark"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="3"
        >
          <polyline points="20,6 9,17 4,12"></polyline>
        </svg>
      </div>
      <span class="grade-name">{{ grade.name }}</span>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'GradeLevelFilter',
  data() {
    return {
      grades: [
        { name: 'Preschool', selected: false },
        { name: 'K-8', selected: false },
        { name: 'Secondary', selected: false },
        { name: 'Post-Secondary', selected: false },
        { name: 'All Grade Levels', selected: false },
      ],
    }
  },
}
</script>

<style scoped>
.grade-filter {
  width: 240px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.grade-option {
  display: flex;
  align-items: center;
  padding: 10px 14px;
  cursor: pointer;
  transition: background-color 0.2s;
  border-radius: 6px;
  margin-bottom: 2px;
}

.grade-option:hover {
  background-color: #f0f0f0;
}

.grade-option.selected {
  background-color: #2c5f5f;
  color: white;
}

.grade-option.selected:hover {
  background-color: #1e4545;
}

.checkbox {
  width: 14px;
  height: 14px;
  border: 2px solid #ccc;
  border-radius: 2px;
  margin-right: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
}

.grade-option.selected .checkbox {
  background-color: white;
  border-color: white;
  color: #2c5f5f;
}

.grade-option:not(.selected) .checkbox {
  background-color: white;
  border-color: #ccc;
}

.checkmark {
  width: 10px;
  height: 10px;
}

.grade-name {
  font-size: 14px;
  font-weight: 500;
}
</style>
