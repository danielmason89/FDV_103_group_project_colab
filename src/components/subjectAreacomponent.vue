<template>
  <div class="subject-badges">
    <span
      v-for="(subject, index) in subjectAreas || ['N/A']"
      :key="index"
      class="badge"
    >
      {{ subject }}
    </span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  subjectAreas?: string[]
  grid?: boolean
}>()
</script>

<style scoped>
.subject-badges {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
}

@media (max-width: 1200px) {
  .subject-badges {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 1180px) {
  .subject-badges {
    grid-template-columns: 1fr;
  }
}

.badge {
  padding: 5px 2px;
  border: 3px solid #000000;
  background-color: #dce4e4;
  border-radius: 6px;
  font-size: 1rem;
  text-align: center;
  white-space: nowrap;
  color: #054851;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s, color 0.2s;
}

.badge.selected {
  background-color: #2c5f5f;
  color: white;
  border-color: #2c5f5f;
}

.badge:hover {
  background-color: #b7d5d5;
}
</style>
