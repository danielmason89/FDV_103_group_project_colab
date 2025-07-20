<script setup lang="ts">
withDefaults(
  defineProps<{
    jobName?: string
    organizationName?: string
    organizationType?: string
    badgeStyle?: Record<string, string>
  }>(),
  {
    jobName: 'Job Name',
    organizationName: 'Organization Name',
    organizationType: 'Organization Type',
    badgeStyle: () => ({
      backgroundColor: 'var(--inactiveBadge)',
      color: 'var(--inactiveText)',
    }),
  },
)
</script>

<template>
  <div class="card">
    <div
      class="card-header h-24 rounded-t-md bg-gradient-to-b from-purple-300 to-purple-800"
      aria-hidden="true"
    ></div>

    <div class="card-content">
      <div class="flex justify-between items-center mb-0.5">
        <h3 class="job-name text-lg font-semibold">
          {{ jobName }}
        </h3>
      </div>

      <!-- Footer with org name and badge -->
      <div class="card-footer" role="contentinfo">
        <span class="organization-name">
          {{ organizationName }}
        </span>
        <div class="badge-container">
          <span class="badge" :style="badgeStyle">
            {{ organizationType }}
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
  min-height: 120px;
  height: 100%;
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
}
</style>
