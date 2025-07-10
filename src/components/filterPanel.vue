<script setup lang="ts">
import { ref } from 'vue'
import CityFilter from '@/components/CityFilter.vue' // Import CityFilter component

const showCityFilter = ref(false)
const selectedCities = ref<string[]>([])

function toggleCityFilter() {
  showCityFilter.value = !showCityFilter.value
}
</script>

<template>
  <div class="filters-container">
    <h3 class="filters-title">Filters</h3>
    <hr class="filters-divider" />
    <div class="filters-list">
      <div class="filter-item">
        <span class="filter-label">Organization Type</span>
      </div>

      <div class="relative inline-block">
        <!-- City Filter: Clickable -->
        <div class="filter-item-active cursor-pointer" @click="toggleCityFilter">
          <span class="filter-label-active">City</span>
        </div>

        <!-- CityFilter component shown when toggled -->
        <div
          v-if="showCityFilter"
          class="absolute z-10 mt-2 left-0 bg-white border border-gray-300 shadow-md rounded w-56"
        >
          <CityFilter @filter-changed="(val: string[]) => (selectedCities = val)" />
        </div>
      </div>

      <div class="filter-item">
        <span class="filter-label">Province</span>
      </div>
      <div class="filter-item">
        <span class="filter-label">Opportunity Type</span>
      </div>

      <div class="filter-item">
        <span class="filter-label">Subject Area</span>
      </div>
      <div class="filter-item">
        <span class="filter-label">Grade Level</span>
      </div>

      <div class="filter-item">
        <span class="filter-label">Recognition & Compensation</span>
      </div>

      <div class="filter-item">
        <span class="filter-label">Years of Experience</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Container */
.filters-container {
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 0 0 6px 6px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  padding: 12px;
  width: 120px;
  margin-left: 40px;
}

/* Title */
.filters-title {
  text-align: left;
  font-size: 18px;
  font-weight: 500;
  color: #111827;
  margin-left: 0;
  margin-bottom: 8px;
}

/* Divider */
.filters-divider {
  border: none;
  border-top: 1px solid #e5e7eb;
  margin-bottom: 20px;
}

/* Filters list */
.filters-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

/* Regular filter item */
.filter-item {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 8px 0;
}

/* Active filter item (City) */
.filter-item-active {
  display: flex;
  align-items: center;
  gap: 24px;
  background-color: #0d9488;
  color: white;
  padding: 12px 16px;
  border-radius: 4px;
  cursor: pointer;
}

/* Regular filter icon */
.filter-icon {
  font-size: 18px;
  color: #374151;
}

/* Active filter icon */
.filter-icon-active {
  font-size: 18px;
  color: white;
}

/* Regular filter label */
.filter-label {
  font-size: 15px;
  font-weight: 400;
  color: #374151;
}

/* Active filter label */
.filter-label-active {
  font-size: 15px;
  font-weight: 400;
  color: white;
}

/* City filter popup - keeps original floating behavior */
.city-filter-popup {
  position: absolute;
  top: 0;
  right: 0;
  width: 250px;
  background: white;
  border: 1px solid #d1d5db;
  border-radius: 4px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  padding: 16px;
  z-index: 20;
}
</style>
