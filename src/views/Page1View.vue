<script setup lang="ts">
import FilterPanel from '@/components/filterPanel.vue'
import JobCardComponent from '@/components/jobsCardComponent.vue'
import { ref } from 'vue'

const showFilter = ref(false)

const toggleFilter = () => {
  showFilter.value = !showFilter.value
}
</script>

<template>
  <div class="container relative">
    <h1 class="page-title text-2xl mb-1">Opportunities</h1>

    <div class="search-filter-bar flex flex-wrap gap-4 items-center mt-1 mb-1">
      <!-- Left side group -->
      <div class="flex items-center gap-4 flex-wrap flex-grow relative">
        <input
          type="search"
          placeholder="Search anything..."
          class="search-input border rounded px-3 py-1"
        />

        <!-- Filter Icon Button -->
        <button @click="toggleFilter" class="p-2 cursor-pointer" aria-label="Toggle Filter Panel">
          <img src="@/assets/icons/filter.png" alt="filter icon" class="w-10 h-10 rounded-md" />
        </button>

        <!-- Floating Filter Panel with Transition -->
        <transition name="fade-slide">
          <FilterPanel
            v-if="showFilter"
            class="absolute top-14 left-0 z-[9999] shadow-lg bg-white border rounded p-4 min-w-[250px]"
          />
        </transition>

        <select class="sort-select border rounded px-2 py-1">
          <option value="date">Date Posted</option>
        </select>
      </div>

      <!-- Right side group pushed right -->
      <div class="flex items-center gap-x-4 ml-4">
        <button
          class="primary-button flex items-center gap-x-2 px-3 py-1 bg-green-200 rounded hover:bg-[#add9c4] cursor-pointer"
        >
          <img src="@/assets/icons/Plus.png" alt="Plus Icon" class="w-5 h-5" />
          <span>Request New Job Posting</span>
        </button>
        <button class="flex items-center gap-x-2 cursor-pointer">
          <img
            src="@/assets/icons/square-view.png"
            alt="Square View Icon"
            class="w-10 h-10 rounded-md"
          />
        </button>
        <button class="flex items-center gap-x-2 cursor-pointer">
          <img
            src="@/assets/icons/list-view.png"
            alt="List View Icon"
            class="w-10 h-10 rounded-md"
          />
        </button>
      </div>
    </div>

    <div class="card-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
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
/* Transition fade-slide */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.3s ease;
}
.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
.fade-slide-enter-to,
.fade-slide-leave-from {
  opacity: 1;
  transform: translateY(0);
}

/* Button hover */
.primary-button:hover {
  background-color: #add9c4;
  cursor: pointer;
}

/* Make sure filter button cursor */
button {
  cursor: pointer;
}

/* Optional: basic styling for inputs/select */
.search-input,
.sort-select {
  border: 1px solid #ccc;
  border-radius: 0.375rem;
  padding: 0.25rem 0.5rem;
  outline: none;
}

/* Card grid spacing */
.card-grid {
  margin-top: 1rem;
}
</style>
