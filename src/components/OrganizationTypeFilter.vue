<template>
  <div class="organization-filter w-56">
    <select v-model="selectedOrganization" class="w-full p-2 border border-gray-300 rounded">
      <option disabled value="">Select Organization Type</option>
      <option
        v-for="organization in organizations"
        :key="organization.name"
        :value="organization.name"
      >
        {{ organization.name }}
      </option>
    </select>
  </div>
</template>

<script lang="ts">
export default {
  name: 'OrganizationTypeFilter',
  data() {
    return {
      selectedOrganization: '', // Holds the selected organization
      organizations: [
        { name: 'Camp' },
        { name: 'Charity' },
        { name: 'Child Care' },
        { name: 'Educational Non-Profit' },
        { name: 'Educational Technology Company' },
        { name: 'Government Education Department' },
        { name: 'Other' },
        { name: 'Post-Secondary' },
        { name: 'Private School' },
        { name: 'School Board' },
        { name: 'Tutoring Center' },
      ],
    }
  },
}
</script>
