<template>
  <div class="city-filter">
    <div
      v-for="city in cities"
      :key="city.name"
      class="city-option"
      :class="{ selected: city.selected }"
      @click="toggleCity(city.name)"
    >
      <div class="checkbox">
        <svg
          v-if="city.selected"
          class="checkmark"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="3"
        >
          <polyline points="20,6 9,17 4,12"></polyline>
        </svg>
      </div>
      <span class="city-name">{{ city.name }}</span>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'CityFilter',
  data() {
    return {
      cities: [{ name: 'enter here', selected: true }],
    }
  },
  methods: {
    toggleCity(cityName: string) {
      const city = this.cities.find((c) => c.name === cityName)
      if (city) {
        city.selected = !city.selected
        this.$emit('filter-changed', this.selectedCities)
      }
    },
  },
  computed: {
    selectedCities() {
      return this.cities.filter((city) => city.selected).map((city) => city.name)
    },
  },
}
</script>

<style scoped>
.city-filter {
  width: 220px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.city-option {
  display: flex;
  align-items: center;
  padding: 10px 14px;
  cursor: pointer;
  transition: background-color 0.2s;
  border-radius: 6px;
  margin-bottom: 2px;
}

.city-option:hover {
  background-color: #f0f0f0;
}

.city-option.selected {
  background-color: #2c5f5f;
  color: white;
}

.city-option.selected:hover {
  background-color: #1e4545;
}

.checkbox {
  width: 16px;
  height: 16px;
  border: 2px solid #ccc;
  border-radius: 3px;
  margin-right: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
}

.city-option.selected .checkbox {
  background-color: white;
  border-color: white;
  color: #2c5f5f;
}

.checkmark {
  width: 12px;
  height: 12px;
}

.city-name {
  font-size: 14px;
  font-weight: 500;
}
</style>
