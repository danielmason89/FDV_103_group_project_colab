<template>
  <div class="opportunity-filter">
    <div
      v-for="opportunity in opportunities"
      :key="opportunity.name"
      class="opportunity-option"
      :class="{ selected: opportunity.selected }"
      @click="toggleOpportunity(opportunity.name)"
    >
      <div class="checkbox">
        <svg
          v-if="opportunity.selected"
          class="checkmark"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="3"
        >
          <polyline points="20,6 9,17 4,12"></polyline>
        </svg>
      </div>
      <span class="opportunity-name">{{ opportunity.name }}</span>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'OpportunityFilter',
  data() {
    return {
      opportunities: [
        { name: 'Full-Time', selected: false },
        { name: 'Part-Time', selected: false },
        { name: 'Contract / Temporary / Seasonal', selected: false },
        { name: 'Supply/Substitute Teaching', selected: false },
        { name: 'Mentorship Program', selected: false },
        { name: 'Professional Development', selected: false },
        { name: 'Consulting', selected: false },
        { name: 'Speaking Engagement', selected: false },
        { name: 'Volunteer', selected: false },
        { name: 'Internship (Paid)', selected: false },
        { name: 'Internship (Unpaid)', selected: false },
        { name: 'In-person', selected: false },
        { name: 'Hybrid', selected: false },
        { name: 'Remote', selected: false },
      ],
    }
  },
  methods: {
    toggleOpportunity(opportunityName: string) {
      const opportunity = this.opportunities.find((o) => o.name === opportunityName)
      if (opportunity) {
        opportunity.selected = !opportunity.selected
        this.$emit('filter-changed', this.selectedOpportunities)
      }
    },
  },
  computed: {
    selectedOpportunities() {
      return this.opportunities.filter((o) => o.selected).map((o) => o.name)
    },
  },
}
</script>

<style scoped>
.opportunity-filter {
  width: 240px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.opportunity-option {
  display: flex;
  align-items: center;
  padding: 10px 14px;
  cursor: pointer;
  transition: background-color 0.2s;
  border-radius: 6px;
  margin-bottom: 2px;
}

.opportunity-option:hover {
  background-color: #f0f0f0;
}

.opportunity-option.selected {
  background-color: #2c5f5f;
  color: white;
}

.opportunity-option.selected:hover {
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

.opportunity-option.selected .checkbox {
  background-color: white;
  border-color: white;
  color: #2c5f5f;
}

.opportunity-option:not(.selected) .checkbox {
  background-color: white;
  border-color: #ccc;
}

.checkmark {
  width: 10px;
  height: 10px;
}

.opportunity-name {
  font-size: 14px;
  font-weight: 500;
}
</style>
