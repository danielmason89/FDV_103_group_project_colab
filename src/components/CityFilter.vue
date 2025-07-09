<template>
  <div class="city-filter w-56">
    <input
      type="text"
      v-model="cityInput"
      @input="handleInput"
      placeholder="Enter city name"
      class="w-full p-2 border border-gray-300 rounded"
    />
  </div>
</template>

<script lang="ts">
export default {
  name: 'CityFilter',
  data() {
    return {
      cityInput: '',
    }
  },
  methods: {
    handleInput() {
      // Emit the input value to parent component for filtering
      this.$emit('filter-changed', this.cityInput.trim())
    },
  },
}
</script>
