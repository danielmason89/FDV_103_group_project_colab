<template>
  <div class="experience-filter">
    <label for="experience-select" class="experience-label">Years of Experience Required</label>
    <select
      id="experience-select"
      class="experience-select"
      v-model="selectedExperience"
      @change="handleChange"
    >
      <option disabled value="">Select an option</option>
      <option v-for="option in options" :key="option" :value="option">
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script lang="ts">
export default {
  name: 'YearsOfExperienceFilter',
  data() {
    return {
      options: ['Entry Level', '1-3 years', '3-5 years', '5+ years'],
      selectedExperience: '', // TODO: update this on selection
    }
  },
  methods: {
    handleChange() {
      // TODO: emit selectedExperience
    },
  },
}
</script>

<style scoped>
.experience-filter {
  width: 240px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.experience-label {
  font-size: 14px;
  font-weight: 500;
  color: #374151;
}

.experience-select {
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 14px;
  background-color: white;
  color: #374151;
  cursor: pointer;
  appearance: none;
}
</style>
