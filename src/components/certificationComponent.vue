    <script setup lang="ts">

    // Define component props
    defineProps<{
      certifications?: string[]
      grid?: boolean
    }>()

    </script>

<template>
  <div class="certification-badges">
    <span
      v-for="(cert, index) in certifications || ['N/A']"
      :key="index"
      class="badge"
    >
      {{ cert }}
    </span>
  </div>
</template>

<style scoped>
/* Container uses grid layout to organize certification badges */
.certification-badges {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}

/* Adjust grid layout responsively */
@media (max-width: 1200px) {
  .certification-badges {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media (max-width: 1000px) {
  .certification-badges {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 900px) {
  .certification-badges {
    grid-template-columns: repeat(1, 1fr);
  }
}

/* Styling for each badge */
.badge {
  padding: 5px 10px;
  border: 3px solid #054851;
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
