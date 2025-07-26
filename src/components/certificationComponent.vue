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

<script setup lang="ts">

defineProps<{
  certifications?: string[]
  grid?: boolean
}>()

</script>

<style scoped>
.certification-badges {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}
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

  .badge {
    padding: 5px 10px;
  }


.badge {
  padding: 10px 20px;
  border: 3px solid #054851; /* Dark green border */
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
