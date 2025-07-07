<template>
  <div class="organization-filter">
    <div
      v-for="organization in organizations"
      :key="organization.name"
      class="organization-option"
      :class="{ selected: organization.selected }"
      @click="toggleOrganization(organization.name)"
    >
      <div class="checkbox">
        <svg
          v-if="organization.selected"
          class="checkmark"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="3"
        >
          <polyline points="20,6 9,17 4,12"></polyline>
        </svg>
      </div>
      <span class="organization-name">{{ organization.name }}</span>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'OrganizationTypeFilter',
  data() {
    return {
      organizations: [
        { name: 'Camp', selected: false },
        { name: 'Charity', selected: false },
        { name: 'Child Care', selected: false },
        { name: 'Educational Non-Profit', selected: false },
        { name: 'Educational Technology Company', selected: false },
        { name: 'Government Education Department', selected: false },
        { name: 'Other', selected: false },
        { name: 'Post-Secondary', selected: false },
        { name: 'Private School', selected: false },
        { name: 'School Board', selected: false },
        { name: 'Tutoring Center', selected: false },
      ],
    }
  },
  methods: {
    toggleOrganization(organizationName: string) {
      const organization = this.organizations.find((o) => o.name === organizationName)
      if (organization) {
        organization.selected = !organization.selected
        this.$emit('filter-changed', this.selectedOrganizations)
      }
    },
  },
  computed: {
    selectedOrganizations() {
      return this.organizations.filter((org) => org.selected).map((org) => org.name)
    },
  },
}
</script>

<style scoped>
.organization-filter {
  width: 220px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.organization-option {
  display: flex;
  align-items: center;
  padding: 10px 14px;
  cursor: pointer;
  transition: background-color 0.2s;
  border-radius: 6px;
  margin-bottom: 2px;
}

.organization-option:hover {
  background-color: #f0f0f0;
}

.organization-option.selected {
  background-color: #2c5f5f;
  color: white;
}

.organization-option.selected:hover {
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

.organization-option.selected .checkbox {
  background-color: white;
  border-color: white;
  color: #2c5f5f;
}

.organization-option:not(.selected) .checkbox {
  background-color: white;
  border-color: #ccc;
}

.checkmark {
  width: 10px;
  height: 10px;
}

.organization-name {
  font-size: 14px;
  font-weight: 500;
}
</style>
