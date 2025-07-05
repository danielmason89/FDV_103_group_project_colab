<script setup lang="ts">
import JobCardComponent from '@/components/jobsCardComponent.vue'
</script>

<template>
  <div class="container">
    <h1 class="page-title text-2xl mb-1">Opportunities</h1>
    <div class="search-filter-bar flex flex-wrap gap-4 items-center mt-1 mb-1">
      <!-- Left side group -->
      <div class="flex items-center gap-4 flex-wrap flex-grow">
        <input type="search" placeholder="Search anything..." class="search-input" />
        <button class="flex items-center gap-x-2">
          <img src="@/assets/icons/sort.png" alt="Sort Icon" class="w-10 h-10 rounded-md" />
        </button>
        <select class="sort-select">
          <option value="date">Date Posted</option>
        </select>
      </div>

      <!-- Right side group pushed right -->
      <div class="flex items-center gap-x-4 ml-4">
        <button class="primary-button flex items-center gap-x-2">
          <img src="@/assets/icons/Plus.png" alt="Plus Icon" class="w-5 h-5" />
          <span>Request New Job Posting</span>
        </button>
        <button class="flex items-center gap-x-2">
          <img
            src="@/assets/icons/square-view.png"
            alt="Square View Icon"
            class="w-10 h-10 rounded-md"
          />
        </button>
        <button class="flex items-center gap-x-2">
          <img
            src="@/assets/icons/list-view.png"
            alt="List View Icon"
            class="w-10 h-10 rounded-md"
          />
        </button>
      </div>
    </div>

    <div class="card-grid">
      <JobCardComponent
        jobName="Job Name 0"
        organizationName="Organization Name"
        badgeText="childcare"
      />
      <JobCardComponent
        jobName="Job Name 1"
        organizationName="Organization Name"
        badgeText="Camp"
      />
      <JobCardComponent jobName="Jobname 2" organizationName="Organization Name" badgeText="Camp" />
      <JobCardComponent
        jobName="Job Name 3"
        organizationName="Organization Name"
        badgeText="Camp"
      />
    </div>
  </div>
</template>

<style scoped>
.primary-button:hover {
  background-color: #add9c4;
  cursor: pointer;
}
</style>
