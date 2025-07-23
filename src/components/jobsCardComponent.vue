<script setup lang="ts">
import { computed } from 'vue'
const badgeStyles = {
  'School Board': {
    bg: 'var(--schoolBoardBadge)',
    color: 'var(--schoolBoardText)',
    banner: 'var(--schoolBoardBanner)',
  },
  'Private School': {
    bg: 'var(--privateSchoolBadge)',
    color: 'var(--privateSchoolText)',
    banner: 'var(--privateSchoolBanner)',
  },
  Camp: { bg: 'var(--campBadge)', color: 'var(--campText)', banner: 'var(--campBanner)' },
  'Child Care': {
    bg: 'var(--childCareBadge)',
    color: 'var(--childCareText)',
    banner: 'var(--childCareBanner)',
  },
  Charity: {
    bg: 'var(--charityBadge)',
    color: 'var(--charityText)',
    banner: 'var(--charityBanner)',
  },
  'Post-Secondary': {
    bg: 'var(--postSecondaryBadge)',
    color: 'var(--postSecondaryText)',
    banner: 'var(--postSecondaryBanner)',
  },
  'Educational Technology Company': {
    bg: 'var(--educationalTechBadge)',
    color: 'var(--educationalTechText)',
    banner: 'var(--educationalTechBanner)',
  },
  'Tutoring Center': {
    bg: 'var(--tutoringCenterBadge)',
    color: 'var(--tutoringCenterText)',
    banner: 'var(--tutoringCenterBanner)',
  },
  'Educational Non-Profit': {
    bg: 'var(--educationalNonProfitBadge)',
    color: 'var(--educationalNonProfitText)',
    banner: 'var(--educationalNonProfitBanner)',
  },
  'Government Education Department': {
    bg: 'var(--governmentBadge)',
    color: 'var(--governmentText)',
    banner: 'var(--governmentBanner)',
  },
  Other: {
    bg: 'var(--otherBadge)',
    color: 'var(--otherText)',
    banner: 'var(--otherBanner)',
  },
}
const defaultStyles = {
  bg: 'var(--inactiveBadge)',
  color: 'var(--inactiveText)',
  banner: 'var(--inactiveBanner)',
}
const props = defineProps({
  jobName: {
    type: String,
    default: 'Job Name',
  },
  organizationName: {
    type: String,
    default: 'Organization Name',
  },
  organizationType: {
    type: String,
    default: 'Organization Type',
  },
})
const badgeStyle = computed(() => {
  const style = badgeStyles[props.organizationType] || defaultStyles
  return {
    backgroundColor: style.bg,
    color: style.color,
  }
})
const bannerStyle = computed(() => {
  const style = badgeStyles[props.organizationType] || defaultStyles
  return {
    background: style.banner,
  }
})
</script>
<template>
  <div class="card">
    <div class="card-header h-24 rounded-t-md" :style="bannerStyle" aria-hidden="true"></div>
    <div class="card-content">
      <div class="flex justify-between items-center mb-0.5">
        <h3 class="job-name text-lg font-semibold">
          {{ props.jobName }}
        </h3>
      </div>
      <!-- Footer with org name and badge -->
      <div class="card-footer" role="contentinfo">
        <span class="organization-name">
          {{ props.organizationName }}
        </span>
        <div class="badge-container">
          <span class="badge" :style="badgeStyle">
            {{ props.organizationType }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.card {
  background-color: var(--cardWhiteBG);
  border-radius: 0.5rem;
  box-shadow:
    0 0 #0000,
    0 0 #0000,
    0 0 #0000,
    0 0 #0000,
    0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -4px rgba(0, 0, 0, 0.1) !important;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  min-height: 200px;
  position: relative;
}
.card-header {
  width: 100%;
}
.card-content {
  padding: 1rem;
  flex-direction: column;
  bottom: 0px;
  position: relative;
  display: flex;
}
.card-footer {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}
.card-title {
  margin-bottom: 0px;
}
.organization-name {
  font-size: 0.95rem;
  color: #374151;
  width: 100%;
  display: block;
  height: 100%;
}
.badge-container {
  justify-items: right;
}
.badge {
  font-weight: 500;
  font-size: 0.75em;
  text-align: center;
  padding: 0.125rem 0.5rem;
  border-radius: 0.375rem;
  width: fit-content;
  display: block;
  margin-top: 1rem;
}
</style>
