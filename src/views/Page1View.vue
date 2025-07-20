<script setup lang="ts">
import { ref, computed } from 'vue'
// Components that are used
import FilterPanel from '@/components/filterPanel.vue'
import JobCardComponent from '@/components/jobsCardComponent.vue'

interface Job {
  id: number
  jobTitle: string
  organizationName: string
  organizationType: string
  datePosted: string
}

const showFilter = ref(false)
const toggleFilter = () => {
  showFilter.value = !showFilter.value
}

const jobs = ref<Job[]>([
  {
    id: 1,
    jobTitle: 'Grade 3 Teacher',
    organizationName: 'Maple Ridge School',
    organizationType: 'School Board',
    datePosted: '2025-07-15',
  },
  {
    id: 2,
    jobTitle: 'Math Tutor',
    organizationName: 'Bright Minds Tutoring',
    organizationType: 'Tutoring Center',
    datePosted: '2025-07-17',
  },
  {
    id: 3,
    jobTitle: 'Camp Counselor',
    organizationName: 'Evergreen Summer Camp',
    organizationType: 'Camp',
    datePosted: '2025-07-10',
  },
  {
    id: 4,
    jobTitle: 'Early Childhood Educator',
    organizationName: 'Little Sprouts Daycare',
    organizationType: 'Child Care',
    datePosted: '2025-07-18',
  },
  {
    id: 5,
    jobTitle: 'STEM Program Lead',
    organizationName: 'InnovEd Labs',
    organizationType: 'Educational Technology Company',
    datePosted: '2025-07-12',
  },
  {
    id: 6,
    jobTitle: 'Fundraising Coordinator',
    organizationName: 'Hearts United Foundation',
    organizationType: 'Charity',
    datePosted: '2025-07-14',
  },
  {
    id: 7,
    jobTitle: 'Research Assistant',
    organizationName: 'Westview University',
    organizationType: 'Post-Secondary',
    datePosted: '2025-07-16',
  },
  {
    id: 8,
    jobTitle: 'Volunteer Organizer',
    organizationName: 'Youth Future Initiative',
    organizationType: 'Educational Non-Profit',
    datePosted: '2025-07-13',
  },
  {
    id: 9,
    jobTitle: 'Policy Analyst',
    organizationName: 'Ministry of Learning',
    organizationType: 'Government Education Department',
    datePosted: '2025-07-11',
  },
  {
    id: 10,
    jobTitle: 'Substitute Teacher',
    organizationName: 'Oak Hill Academy',
    organizationType: 'Private School',
    datePosted: '2025-07-19',
  },
  {
    id: 11,
    jobTitle: 'General Education Assistant',
    organizationName: 'Northern Pines College',
    organizationType: 'Other',
    datePosted: '2025-07-09',
  },
  {
    id: 12,
    jobTitle: 'Digital Learning Specialist',
    organizationName: 'Future Pathways Online',
    organizationType: 'Educational Technology Company',
    datePosted: '2025-07-20',
  },
])

const search = ref('')
const sortOption = ref<'date' | 'az' | 'za'>('date')
const viewMode = ref<'grid' | 'list'>('grid')

const badgeStyles: Record<string, { bg: string; color: string }> = {
  'School Board': { bg: 'var(--schoolBoardBadge)', color: 'var(--schoolBoardText)' },
  'Private School': { bg: 'var(--privateSchoolBadge)', color: 'var(--privateSchoolText)' },
  Camp: { bg: 'var(--campBadge)', color: 'var(--campText)' },
  'Child Care': { bg: 'var(--childCareBadge)', color: 'var(--childCareText)' },
  Charity: { bg: 'var(--charityBadge)', color: 'var(--charityText)' },
  'Post-Secondary': { bg: 'var(--postSecondaryBadge)', color: 'var(--postSecondaryText)' },
  'Educational Technology Company': {
    bg: 'var(--educationalTechBadge)',
    color: 'var(--educationalTechText)',
  },
  'Tutoring Center': { bg: 'var(--tutoringCenterBadge)', color: 'var(--tutoringCenterText)' },
  'Educational Non-Profit': {
    bg: 'var(--educationalNonProfitBadge)',
    color: 'var(--educationalNonProfitText)',
  },
  'Government Education Department': {
    bg: 'var(--governmentBadge)',
    color: 'var(--governmentText)',
  },
  Other: { bg: 'var(--otherBadge)', color: 'var(--otherText)' },
}

function badgeStyle(orgType: string) {
  return badgeStyles[orgType] || badgeStyles['Other']
}

const filteredJobs = computed(() => {
  let filtered = jobs.value.filter((job) =>
    job.jobTitle.toLowerCase().includes(search.value.toLowerCase()),
  )
  if (sortOption.value === 'az') {
    filtered = filtered.slice().sort((a, b) => a.jobTitle.localeCompare(b.jobTitle))
  } else if (sortOption.value === 'za') {
    filtered = filtered.slice().sort((a, b) => b.jobTitle.localeCompare(a.jobTitle))
  } else if (sortOption.value === 'date') {
    filtered = filtered
      .slice()
      .sort((a, b) => new Date(b.datePosted).getTime() - new Date(a.datePosted).getTime())
  }
  return filtered
})

function setGridView() {
  viewMode.value = 'grid'
}
function setListView() {
  viewMode.value = 'list'
}
</script>

<template>
  <div>
    <button @click="toggleFilter">{{ showFilter ? 'Hide' : 'Show' }} Filters</button>

    <FilterPanel v-if="showFilter" />

    <input type="text" v-model="search" placeholder="Search job titles..." style="margin: 1em 0" />

    <div>
      <label> <input type="radio" value="date" v-model="sortOption" /> Sort by Date </label>
      <label> <input type="radio" value="az" v-model="sortOption" /> Sort A-Z </label>
      <label> <input type="radio" value="za" v-model="sortOption" /> Sort Z-A </label>
    </div>

    <div style="margin: 1em 0">
      <button :disabled="viewMode === 'grid'" @click="setGridView">Grid View</button>
      <button :disabled="viewMode === 'list'" @click="setListView">List View</button>
    </div>

    <div v-if="viewMode === 'grid'" class="grid-container">
      <JobCardComponent
        v-for="job in filteredJobs"
        :key="job.id"
        :job="job"
        :badge-style="badgeStyle(job.organizationType)"
      />
    </div>

    <table v-else class="list-table">
      <thead>
        <tr>
          <th>Job Title</th>
          <th>Organization</th>
          <th>Type</th>
          <th>Date Posted</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="job in filteredJobs" :key="job.id">
          <td>{{ job.jobTitle }}</td>
          <td>{{ job.organizationName }}</td>
          <td>
            <span
              class="badge"
              :style="{
                backgroundColor: badgeStyle(job.organizationType).bg,
                color: badgeStyle(job.organizationType).color,
              }"
            >
              {{ job.organizationType }}
            </span>
          </td>
          <td>{{ job.datePosted }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}

.list-table {
  width: 100%;
  border-collapse: collapse;
}

.list-table th,
.list-table td {
  border: 1px solid #ccc;
  padding: 0.5rem;
  text-align: left;
}

.badge {
  padding: 0.25em 0.5em;
  border-radius: 0.25rem;
  font-size: 0.9em;
  font-weight: 600;
  display: inline-block;
}
</style>
