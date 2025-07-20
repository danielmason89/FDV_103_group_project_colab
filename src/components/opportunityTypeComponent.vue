<template>
  <div class="opportunity-badges">
    <span
      v-for="opportunity in opportunities"
      :key="opportunity.id"
      class="badge"
      :class="getBadgeClass(opportunity.type)"
    >
      {{ opportunity.label }}
    </span>
  </div>
</template>

<script setup lang="ts">
const opportunities = [
  { id: 1, label: 'Contract/Temporary/Seasonal', type: 'contract' },
  { id: 2, label: 'Part-Time', type: 'partTime' },
  { id: 3, label: 'Full-Time', type: 'fullTime' },
  { id: 4, label: 'Mentorship Program', type: 'mentorship' },
  { id: 5, label: 'Supply/Substitute Teaching', type: 'supply' },
  { id: 6, label: 'Consulting', type: 'consulting' },
  { id: 7, label: 'Volunteer', type: 'volunteer' },
  { id: 8, label: 'Internship (Paid)', type: 'internshipPaid' },
  { id: 9, label: 'Speaking Engagement', type: 'speaking' },
  { id: 10, label: 'In-person', type: 'inPerson' },
  { id: 11, label: 'Hybrid', type: 'hybrid' },
  { id: 12, label: 'Internship (Unpaid)', type: 'internshipUnpaid' },
]

function getBadgeClass(type: string): string {
  const badgeClasses: Record<string, string> = {
    contract: 'contract-badge',
    partTime: 'part-time-badge',
    fullTime: 'full-time-badge',
    mentorship: 'mentorship-badge',
    supply: 'supply-badge',
    consulting: 'consulting-badge',
    volunteer: 'volunteer-badge',
    internshipPaid: 'internship-paid-badge',
    speaking: 'speaking-badge',
    inPerson: 'in-person-badge',
    hybrid: 'hybrid-badge',
    internshipUnpaid: 'internship-unpaid-badge',
  }

  return badgeClasses[type] || 'default-badge'
}
</script>

<style scoped>
.opportunity-badges {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
}
@media (max-width: 1350px) {
  .opportunity-badges {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media (max-width: 1300px) {
  .opportunity-badges {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 1000px) {
  .opportunity-badges {
    grid-template-columns: repeat(1, 1fr);
  }
}

.badge {
  padding: 5px 10px;
  border: 3px solid #000000;
  background-color: #dce4e4;
  border-radius: 6px;
  font-size: 1.4rem;
  text-align: center;
  white-space: nowrap;
  color: #054851;
  font-weight: 600;
  cursor: pointer;
}
</style>
