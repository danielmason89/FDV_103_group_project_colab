<template>
  <div class="certification-badges">
    <span
      v-for="certification in certifications"
      :key="certification.id"
      class="badge"
      :class="getBadgeClass(certification.type)"
    >
      {{ certification.label }}
    </span>
  </div>
</template>

<script setup lang="ts">
const certifications = [
  { id: 1, label: 'Teaching License', type: 'teachingLicense' },
  { id: 2, label: 'Subject Certifications', type: 'certification' },
  { id: 3, label: 'Other', type: 'other' },
]

function getBadgeClass(type: string): string {
  const badgeClasses: Record<string, string> = {
    teachingLicense: 'teaching-license-badge',
    certification: 'certification-badge',
    other: 'other-badge',
  }

  return badgeClasses[type] || 'default-badge'
}
</script>

<style scoped>
.certification-badges {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}
@media (max-width: 1200px) {
  .certification-badges {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media (max-width: 1000px) {
  .certification-badges {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 900px) {
  .certification-badges {
    grid-template-columns: repeat(1, 1fr);
  }
}

  .badge {
    padding: 5px 10px;
  }


.badge {
  padding: 10px 20px;
  border: 3px solid #054851; /* Dark green border */
  background-color: #dce4e4;
  border-radius: 6px;
  font-size: 1rem;
  text-align: center;
  white-space: nowrap;
  color: #054851;
  font-weight: 600;
  cursor: pointer;
}
</style>
