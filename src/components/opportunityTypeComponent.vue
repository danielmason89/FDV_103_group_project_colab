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

<script setup lang="ts">

defineProps<{
  opportunityTypes?: string[]
}>()

</script>

<style scoped>
.opportunity-badges {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
}
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
