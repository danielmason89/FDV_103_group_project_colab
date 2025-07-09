<template>
  <div class="country-filter w-56">
    <select v-model="selectedCountry" class="w-full p-2 border border-gray-300 rounded">
      <option disabled value="">Select a Country</option>
      <!-- Country options will go here -->
    </select>
  </div>
</template>

<script lang="ts">
export default {
  name: 'CountryFilter',
  data() {
    return {
      selectedCountry: '',
      countries: [], // Empty array for now
    }
  },
  watch: {
    selectedCountry(newVal) {
      this.$emit('update:selectedCountry', newVal)
    },
  },
}
</script>
