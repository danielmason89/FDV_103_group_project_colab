<template>
  <div class="province-filter w-56">
    <select v-model="selectedProvince" class="w-full p-2 border border-gray-300 rounded">
      <option disabled value="">Select a Province</option>
      <option v-for="province in provinces" :key="province.name" :value="province.name">
        {{ province.name }}
      </option>
    </select>
  </div>
</template>

<script lang="ts">
export default {
  name: 'ProvinceFilter',
  data() {
    return {
      selectedProvince: '',
      provinces: [
        { name: 'Alberta' },
        { name: 'British Columbia' },
        { name: 'Manitoba' },
        { name: 'New Brunswick' },
        { name: 'Newfoundland and Labrador' },
        { name: 'Northwest Territories' },
        { name: 'Nova Scotia' },
        { name: 'Nunavut' },
        { name: 'Ontario' },
        { name: 'Prince Edward Island' },
        { name: 'Quebec' },
        { name: 'Saskatchewan' },
        { name: 'Yukon' },
      ],
    }
  },
  watch: {
    selectedProvince(newVal) {
      this.$emit('update:selectedProvince', newVal)
    },
  },
}
</script>
