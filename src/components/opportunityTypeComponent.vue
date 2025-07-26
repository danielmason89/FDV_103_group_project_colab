    <script setup lang="ts">
    // Define props expected by the component
    // - opportunityTypes: optional array of strings representing job types
    defineProps<{
      opportunityTypes?: string[]
    }>()
    </script>

<template>
  <div class="opportunity-badges">
    <span
      v-for="(type, index) in opportunityTypes || ['N/A']"
      :key="index"
      class="badge"
    >
      {{ type }}
    </span>
  </div>
</template>

<style scoped>
/* Container uses a responsive grid layout to display badges */
.opportunity-badges {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
}

/* Responsively adjust grid column count based on screen size */
@media (max-width: 1350px) {
  .opportunity-badges {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media (max-width: 1300px) {
  .opportunity-badges {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 1000px) {
  .opportunity-badges {
    grid-template-columns: repeat(1, 1fr);
  }
}

/* Styles for individual badge items */
.badge {
  padding: 5px 10px;
  border: 3px solid #000000;
  background-color: #dce4e4;
  border-radius: 6px;
  font-size: 1rem;
  text-align: center;
  white-space: nowrap;
  color: #054851;
  font-weight: 600;
  cursor: pointer;
}
</style>
