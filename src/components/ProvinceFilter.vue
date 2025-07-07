<template>
  <div class="province-filter">
    <div
      v-for="province in provinces"
      :key="province.name"
      class="province-option"
      :class="{ selected: province.selected }"
      @click="toggleProvince(province.name)"
    >
      <div class="checkbox">
        <svg
          v-if="province.selected"
          class="checkmark"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="3"
        >
          <polyline points="20,6 9,17 4,12"></polyline>
        </svg>
      </div>
      <span class="province-name">{{ province.name }}</span>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'ProvinceFilter',
  data() {
    return {
      provinces: [
        { name: 'Alberta', selected: false },
        { name: 'British Columbia', selected: false },
        { name: 'Manitoba', selected: false },
        { name: 'New Brunswick', selected: false },
        { name: 'Newfoundland and Labrador', selected: false },
        { name: 'Northwest Territories', selected: false },
        { name: 'Nova Scotia', selected: false },
        { name: 'Nunavut', selected: false },
        { name: 'Ontario', selected: false },
        { name: 'Prince Edward Island', selected: false },
        { name: 'Quebec', selected: false },
        { name: 'Saskatchewan', selected: false },
        { name: 'Yukon', selected: false },
      ],
    }
  },
  methods: {
    toggleProvince(provinceName: string) {
      const province = this.provinces.find((p) => p.name === provinceName)
      if (province) {
        province.selected = !province.selected
        this.$emit('filter-changed', this.selectedProvinces)
      }
    },
  },
  computed: {
    selectedProvinces() {
      return this.provinces.filter((province) => province.selected).map((province) => province.name)
    },
  },
}
</script>

<style scoped>
.province-filter {
  width: 220px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.province-option {
  display: flex;
  align-items: center;
  padding: 10px 14px;
  cursor: pointer;
  transition: background-color 0.2s;
  border-radius: 6px;
  margin-bottom: 2px;
}

.province-option:hover {
  background-color: #f0f0f0;
}

.province-option.selected {
  background-color: #2c5f5f;
  color: white;
}

.province-option.selected:hover {
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

.province-option.selected .checkbox {
  background-color: white;
  border-color: white;
  color: #2c5f5f;
}

.province-option:not(.selected) .checkbox {
  background-color: white;
  border-color: #ccc;
}

.checkmark {
  width: 10px;
  height: 10px;
}

.province-name {
  font-size: 14px;
  font-weight: 500;
}
</style>
