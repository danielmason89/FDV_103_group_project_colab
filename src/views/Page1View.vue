<script setup lang="ts">
import FilterPanel from '@/components/filterPanel.vue'
import JobCardComponent from '@/components/jobsCardComponent.vue'
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

const openJobDetails = (job: any) => {
  console.log('Navigating to job details with:', job)
  router.push({ name: 'page2', params: { id: job.id } }) // use lowercase 'page2' to match router
}

// Reactive ref for job submissions
const jobSubmissions = ref([] as any[])

function loadJobsFromLocalStorage() {
  const data = localStorage.getItem('jobSubmissions') || '[]'
  const parsed = JSON.parse(data)
  console.log('Jobs loaded from localStorage:', parsed)
  jobSubmissions.value = parsed
}

// On component mount, we load the serialized job posts from localStorage, parse it to JSON, and assign it to this ref
// jobSubmissions then holds an array of all job posts from localStorage.
// Using ref means Vue tracks it reactively and updates the UI automatically when it changes.
onMounted(() => {
  loadJobsFromLocalStorage()

  window.addEventListener('storage', loadJobsFromLocalStorage)
  window.addEventListener('job-list-updated', loadJobsFromLocalStorage)
})

onUnmounted(() => {
  window.removeEventListener('storage', loadJobsFromLocalStorage)
  window.removeEventListener('job-list-updated', loadJobsFromLocalStorage)
})

// Reactive variables for search, sort, and view mode
const search = ref('')
const sortOption = ref('date')
const viewMode = ref<'grid' | 'list'>('grid')
const showFilter = ref(false)
const activeFilters = ref({})
const toggleFilter = () => {
  showFilter.value = !showFilter.value
}

function applyFilters(filters: any) {
  activeFilters.value = filters
}

// Functions to set view mode
const setGridView = () => {
  viewMode.value = 'grid'
}
const setListView = () => {
  viewMode.value = 'list'
}

// Define badge styles for different organization types
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
  Camp: {
    bg: 'var(--campBadge)',
    color: 'var(--campText)',
    banner: 'var(--campBanner)',
  },
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
    bg: 'var(--inactiveBadge)',
    color: 'var(--inactiveText)',
    banner: 'var(--inactiveBanner)',
  },
}
const defaultStyles = {
  bg: 'var(--inactiveBadge)',
  color: 'var(--inactiveText)',
  banner: 'var(--inactiveBanner)',
}

//Helper function to get badge styles based on organization type
type OrgType = keyof typeof badgeStyles | string
function badgeStyle(orgType: OrgType) {
  const style = badgeStyles[orgType] || defaultStyles
  return {
    backgroundColor: style.bg,
    color: style.color,
  }
}

// Helper function to get banner styles based on organization type
function bannerStyle(orgType: OrgType) {
  const style = badgeStyles[orgType] || defaultStyles
  return {
    backgroundColor: style.banner,
  }
}

// Filter jobs & Sort jobs
// We use a computed property to filter and sort this data before displaying.
// This means any UI bindings that rely on filteredJobs will reactively update if you change the search query, filters, or the underlying data.
const filteredJobs = computed(() => {
  const s = search.value.toLowerCase()
  const f = activeFilters.value

  // Filtering logic
  const filtered = jobSubmissions.value.filter((job) => {
    const matchSearch = job.jobTitle.toLowerCase().includes(s)
    const matchOrgType = !f.organizationType || job.organizationType === f.organizationType
    const matchCity = !f.city || job.city === f.city
    const matchProvince = !f.province || job.province === f.province
    const matchCountry = !f.country || job.country === f.country
    const matchOpportunityType =
      !f.opportunityType?.length || f.opportunityType.includes(job.opportunityType)
    const matchSubjectArea =
      !f.subjectArea?.length ||
      f.subjectArea.some((area: string) => job.subjectAreas?.includes(area))
    const matchGradeLevel = !f.gradeLevel?.length || f.gradeLevel.includes(job.gradeLevel)
    const matchCompensation = !f.compensation || job.compensation === f.compensation
    const matchYearsOfExperience =
      !f.yearsOfExperience?.length || f.yearsOfExperience.includes(job.yearsOfExperience)

    return (
      matchSearch &&
      matchOrgType &&
      matchCity &&
      matchProvince &&
      matchCountry &&
      matchOpportunityType &&
      matchSubjectArea &&
      matchGradeLevel &&
      matchCompensation &&
      matchYearsOfExperience
    )
  })

  // Sorting logic
  if (sortOption.value === 'az') {
    return filtered.slice().sort((a, b) => a.jobTitle.localeCompare(b.jobTitle))
  } else if (sortOption.value === 'za') {
    return filtered.slice().sort((a, b) => b.jobTitle.localeCompare(a.jobTitle))
  } else if (sortOption.value === 'date') {
    return filtered
      .slice()
      .sort((a, b) => new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime())
  } else {
    return filtered
  }
})

function clearFilters() {
  console.log('Clearing all filters...')
  activeFilters.value = {}
  applyFilters({})
  const event = new CustomEvent('clear-all-filters')
  window.dispatchEvent(event)
}
</script>

<template>
  <div class="max-w-6xl mx-auto">
    <h1 class="page-title text-2xl mb-1">Opportunities</h1>
    <div class="search-filter-bar flex flex-wrap gap-4 items-center mt-1 mb-1">
      <!-- Left side group -->
      <div class="flex items-center gap-4 flex-wrap flex-grow relative">
        <div class="search-input-container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            aria-hidden="true"
            data-slot="icon"
            width="22"
            height="22"
            class="h-5 w-5 text-20"
            style="color: #b3b1bb"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            ></path>
          </svg>
          <input
            v-model="search"
            type="search"
            placeholder="Search anything..."
            class="search-input border rounded px-3 py-1"
          />
        </div>

        <!-- Filter Icon Button -->
        <button
          @click="toggleFilter"
          class="toggle-filter-btn"
          :class="{ active: showFilter }"
          aria-label="Toggle Filter Panel"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            aria-hidden="true"
            data-slot="icon"
            height="25"
            width="25"
            class="h-6 w-6 cursor-pointer text-40"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z"
            ></path>
          </svg>
        </button>

        <!-- Floating Filter Panel with Transition -->
        <transition name="fade-slide">
          <FilterPanel
            v-if="showFilter"
            class="absolute top-14 left-0 z-[9999] shadow-lg bg-white border rounded p-4 min-w-[250px]"
            @update-filters="applyFilters"
          />
        </transition>
        <select v-model="sortOption" class="sort-select border rounded px-2 py-1">
          <option value="date">Date Posted</option>
          <option value="az">A-Z</option>
          <option value="za">Z-A</option>
        </select>
      </div>

      <!-- Right side group pushed right -->
      <div class="flex items-center gap-x-4 ml-4">
        <a href="/page3">
          <button
            class="create-new-button primary-button flex items-center gap-x-2 px-3 py-1"
            style="background-color: var(--primary); color: var(--white)"
          >
            <svg
              class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium text-white css-vubbuv"
              style="
                fill: white;
                font-size: 0.875rem;
                line-height: 1.25rem;
                font-weight: 600;
                width: 1.5rem;
                height: 1.5rem;
              "
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="AddIcon"
              width="15"
              height="15"
            >
              <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"></path>
            </svg>
            <span>Create New Job Posting</span>
          </button>
        </a>

        <!-- Grid View Button -->
        <button
          :class="['view-toggle-btn', viewMode === 'grid' ? 'active' : '']"
          @click="setGridView"
          aria-label="Square View"
          type="button"
        >
          <!-- Grid View SVG -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            aria-hidden="true"
            data-slot="icon"
            width="24"
            height="24"
            class="cursor-pointer text-100"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z"
            ></path>
          </svg>
        </button>

        <!-- List View Button -->
        <button
          :class="['view-toggle-btn', viewMode === 'list' ? 'active' : '']"
          @click="setListView"
          aria-label="List View"
          type="button"
        >
          <!-- List View SVG -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            aria-hidden="true"
            data-slot="icon"
            width="24"
            height="24"
            class="cursor-pointer text-100"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            ></path>
          </svg>
        </button>
      </div>
    </div>

    <!-- Card Grid View -->
    <div
      v-if="viewMode === 'grid'"
      class="card-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
    >
      <div
        v-for="job in filteredJobs"
        :key="job.id"
        @click="openJobDetails(job)"
        style="cursor: pointer"
      >
        <JobCardComponent
          :jobName="job.jobTitle"
          :organizationName="job.organizationName"
          :organizationType="job.organizationType"
          :badgeStyle="badgeStyle(job.organizationType)"
          :bannerStyle="bannerStyle(job.organizationType)"
        />
      </div>
    </div>

    <!-- List/Table View -->
    <div v-else>
      <div class="job-table-container">
        <table class="job-table">
          <thead>
            <tr>
              <th class="table-heading first-heading">Job Name</th>
              <th class="table-heading">Organization Name</th>
              <th class="table-heading last-heading">Organization Type</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="job in filteredJobs"
              :key="job.id"
              class="table-row"
              @click="openJobDetails(job)"
              style="cursor: pointer"
            >
              <td>{{ job.jobTitle }}</td>
              <td>{{ job.organizationName }}</td>
              <td>
                <span class="badge" :style="badgeStyle(job.organizationType)">
                  {{ job.organizationType }}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- No results message -->
    <div v-if="filteredJobs.length === 0" class="text-center mt-8">
      <p class="text-gray-500">No job postings found matching your criteria.</p>
    </div>
  </div>
</template>

<style scoped>
/* Your existing CSS unchanged */
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

.primary-button:hover {
  background-color: #add9c4;
  cursor: pointer;
}

button {
  cursor: pointer;
}

.toggle-filter-btn {
  padding: 0.5rem;
  border-radius: 0.5rem;
  background: transparent;
  border: none;
  transition: background 0.15s;
}
.toggle-filter-btn:hover {
  background: rgb(179 177 187 / 0.1);
}
.toggle-filter-btn.active {
  background: rgb(255 255 255 / 1);
}

.search-input,
.sort-select {
  border: 1px solid #ccc;
  border-radius: 0.375rem;
  padding: 0.25rem 0.5rem;
  outline: none;
}

.card-grid {
  margin-top: 1.5rem;
}

.view-toggle-btn {
  padding: 0.5rem;
  border-radius: 0.5rem;
  background: transparent;
  border: none;
  transition: background 0.15s;
  display: flex;
  align-items: center;
  justify-content: center;
}
.view-toggle-btn.active {
  background: rgb(255 255 255 / 1);
}
.view-toggle-btn:not(.active):hover {
  background: rgb(179 177 187 / 0.1);
}

.job-table {
  width: 100%;
  background-color: var(--cardWhiteBG);
  box-shadow:
    0 0 #0000,
    0 0 #0000,
    0 0 #0000,
    0 0 #0000,
    0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -4px rgba(0, 0, 0, 0.1) !important;
  border-radius: 0.5rem;
  border-collapse: separate;
  border-spacing: 0;
}
.table-heading {
  padding: 1.25rem;
  background-color: #e7eced;
  color: #04454d;
  font-weight: 700;
  font-size: 0.75rem;
  line-height: 1rem;
  text-align: left;
}
.first-heading {
  border-top-left-radius: 0.5rem;
}
.last-heading {
  border-top-right-radius: 0.5rem;
}
.table-row td {
  padding: 0.75rem;
  color: var(--heading);
  font-size: 1.1rem;
  background: transparent;
  transition:
    background 0.2s,
    color 0.2s;
}
.table-row:hover td {
  background-color: rgb(4 69 77);
  color: #fff;
  transition:
    background 0.2s,
    color 0.2s;
}
.search-input-container {
  border: 1px solid;
  padding-top: 8px;
  padding: 8px;
  border-radius: 0.5rem;
  background-color: white;
  display: flex;
  gap: 0.5rem;
  border-color: #04454d73;
}
.search-input-container svg {
  color: #b3b1bb;
  margin-top: 2px;
}
.search-input-container input {
  font-size: 1rem;
  line-height: 1.5rem;
  background-color: white;
  border: 0px;
  padding: 0px;
}
.search-input-container input:focus-visible {
  outline: none;
}
.sort-select {
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 8px;
  padding-right: 8px;
  background-color: white;
  border: 1px solid #04454d73;
  border-radius: 0.375rem;
}
.create-new-button {
  display: flex;
  gap: 0.25rem;
}
.create-new-button svg {
  color: white;
  fill: white;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 600;
  width: 1.5rem;
  height: 1.5rem;
}
.job-table-container {
  margin-top: 1.5rem;
}
</style>
