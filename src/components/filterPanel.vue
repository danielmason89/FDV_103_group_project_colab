<template>
  <div class="filter-panel">
    <div class="filter-list">
      <div
        v-for="item in filterItems"
        :key="item.key"
        :class="['filter-item', { active: activeFilter === item.key }]"
        @click="toggleFilter(item.key)"
      >
        {{ item.label }}
      </div>
    </div>

    <!-- Secondary filter menu -->
    <div v-if="activeFilter" class="secondary-menu">
      <!-- Organization Type -->
      <template v-if="activeFilter === 'organizationType'">
        <label class="secondary-label">Organization Type</label>
        <select v-model="selected.organizationType" class="secondary-dropdown">
          <option v-for="org in organizationTypes" :key="org" :value="org">{{ org }}</option>
        </select>
        <button @click="selected.organizationType = ''" class="clear-filter-btn">Clear</button>
      </template>

      <!-- City -->
      <template v-else-if="activeFilter === 'city'">
        <label class="secondary-label">City</label>
        <select v-model="selected.city" class="secondary-dropdown">
          <option v-for="city in cities" :key="city" :value="city">{{ city }}</option>
        </select>
        <button @click="selected.city = ''" class="clear-filter-btn">Clear</button>
      </template>

      <!-- Province -->
      <template v-else-if="activeFilter === 'province'">
        <label class="secondary-label">Province</label>
        <select v-model="selected.province" class="secondary-dropdown">
          <option v-for="province in provinces" :key="province" :value="province">
            {{ province }}
          </option>
        </select>
        <button @click="selected.province = ''" class="clear-filter-btn">Clear</button>
      </template>

      <!-- Country -->
      <template v-else-if="activeFilter === 'country'">
        <label class="secondary-label">Country</label>
        <select v-model="selected.country" class="secondary-dropdown">
          <option v-for="country in countries" :key="country" :value="country">
            {{ country }}
          </option>
        </select>
        <button @click="selected.country = ''" class="clear-filter-btn">Clear</button>
      </template>

      <!-- Opportunity Type -->
      <template v-else-if="activeFilter === 'opportunityTypes'">
        <label class="secondary-label">Opportunity Types</label>
        <div class="secondary-multiselect">
          <label v-for="type in opportunityTypes" :key="type" class="checkbox-label">
            <input type="checkbox" :value="type" v-model="selected.opportunityTypes" />
            {{ type }}
          </label>
        </div>
        <button @click="selected.opportunityTypes = []" class="clear-filter-btn">Clear</button>
      </template>

      <!-- Subject Area -->
      <template v-else-if="activeFilter === 'subjectArea'">
        <label class="secondary-label">Subject Area</label>
        <div class="secondary-multiselect">
          <label v-for="subject in subjectAreas" :key="subject" class="checkbox-label">
            <input type="checkbox" :value="subject" v-model="selected.subjectArea" />
            {{ subject }}
          </label>
        </div>
        <button @click="selected.subjectArea = []" class="clear-filter-btn">Clear</button>
      </template>

      <!-- Grade Level -->
      <template v-else-if="activeFilter === 'gradeLevel'">
        <label class="secondary-label">Grade Level</label>
        <div class="secondary-multiselect">
          <label v-for="grade in gradeLevels" :key="grade" class="checkbox-label">
            <input type="checkbox" :value="grade" v-model="selected.gradeLevel" />
            {{ grade }}
          </label>
        </div>
        <button @click="selected.gradeLevel = []" class="clear-filter-btn">Clear</button>
      </template>

      <!-- Compensation -->
      <template v-else-if="activeFilter === 'compensation'">
        <label class="secondary-label">Recognition & Compensation</label>
        <div class="secondary-radios">
          <label v-for="comp in compensations" :key="comp" class="radio-label">
            <input type="radio" :value="comp" v-model="selected.compensation" name="compensation" />
            {{ comp }}
          </label>
        </div>
        <button @click="selected.compensation = ''" class="clear-filter-btn">Clear</button>
      </template>

      <!-- Years of Experience -->
      <template v-else-if="activeFilter === 'yearsOfExperience'">
        <label class="secondary-label">Years of Experience Required</label>
        <div class="secondary-multiselect">
          <label v-for="exp in yearsOfExperience" :key="exp" class="checkbox-label">
            <input type="checkbox" :value="exp" v-model="selected.yearsOfExperience" />
            {{ exp }}
          </label>
        </div>
        <button @click="selected.yearsOfExperience = []" class="clear-filter-btn">Clear</button>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'

const emit = defineEmits(['update-filters'])

const filterItems = [
  { key: 'organizationType', label: 'Organization Type' },
  { key: 'city', label: 'City' },
  { key: 'province', label: 'Province' },
  { key: 'country', label: 'Country' },
  { key: 'opportunityTypes', label: 'Opportunity Types' },
  { key: 'subjectArea', label: 'Subject Area' },
  { key: 'gradeLevel', label: 'Grade Level' },
  { key: 'compensation', label: 'Recognition & Compensation' },
  { key: 'yearsOfExperience', label: 'Years of Experience' },
]

const activeFilter = ref<string | null>(null)

function toggleFilter(key: string) {
  activeFilter.value = activeFilter.value === key ? null : key
}

const selected = ref({
  organizationType: '',
  city: '',
  province: '',
  country: '',
  opportunityTypes: [] as string[],
  subjectArea: [] as string[],
  gradeLevel: [] as string[],
  compensation: '',
  yearsOfExperience: [] as string[],
})

watch(
  selected,
  (newVal) => {
    emit('update-filters', newVal)
  },
  { deep: true },
)

onMounted(() => {
  window.addEventListener('clear-all-filters', () => {
    selected.value = {
      organizationType: '',
      city: '',
      province: '',
      country: '',
      opportunityTypes: [],
      subjectArea: [],
      gradeLevel: [],
      compensation: '',
      yearsOfExperience: [],
    }
  })
})

const organizationTypes = [
  'Camp',
  'Charity',
  'Child Care',
  'Educational Non-Profit',
  'Educational Technology Company',
  'Government Education Department',
  'Post-Secondary',
  'Private School',
  'School Board',
  'Tutoring Center',
  'Other',
]
const cities = ['Brampton', 'Toronto', 'Windsor', 'Ottawa', 'London']
const provinces = ['Ontario', 'Quebec', 'British Columbia', 'Alberta']
const countries = ['Canada', 'USA', 'UK']
const opportunityTypes = [
  'Full-Time',
  'Part-Time',
  'Contract / Temporary / Seasonal',
  'Supply/Substitute Teaching',
  'Mentorship Program',
  'Professional Development',
  'Consulting',
  'Speaking Engagement',
  'Volunteer',
  'Internship (Paid)',
  'Internship (Unpaid)',
  'In-person',
  'Hybrid',
  'Remote',
]
const subjectAreas = [
  'English / Language Arts',
  'Mathematics',
  'Science',
  'Social Studies',
  'Foreign Languages',
  'Special Education',
  'Physical Education / Health',
  'Arts (Visual, Music, Performing)',
  'Technology / Computer Science',
  'Library/Information Sciences',
  'Counseling/Student Services',
  'Administration/Leadership',
  'Curriculum Development',
  'Educational Technology/Instructional Design',
  'Early Childhood Education',
]
const gradeLevels = ['Preschool', 'K-8', 'Secondary', 'Post-Secondary', 'All Grade Levels']
const compensations = ['Salary', 'Hourly', 'Volunteer', 'Professional Learning Credits']
const yearsOfExperience = ['Entry Level', '1-3 years', '3-5 years', '5+ years']
</script>

<style scoped>
.filter-panel {
  display: flex;
  min-width: 685px;
  gap: 1rem;
  border: 0px;
  background-color: transparent;
  box-shadow: none;
}
.filter-list {
  display: flex;
  flex-direction: column;
  min-width: 260px;
  width: 260px;
  padding: 0.4rem;
  background: #fff;
  border-radius: 0.75rem;
  border: 1px solid #d9d9d9;
  box-shadow:
    0 0 #0000,
    0 0 #0000,
    0 0 #0000,
    0 0 #0000,
    0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -4px rgba(0, 0, 0, 0.1) !important;
}
.filter-item {
  padding: 0.75rem 1rem;
  font-weight: 500;
  color: #23404a;
  background: transparent;
  cursor: pointer;
  transition:
    background 0.2s,
    color 0.2s;
}
.filter-item:first-child {
  border-top-left-radius: 0.75rem;
  border-top-right-radius: 0.75rem;
}
.filter-item:last-child {
  border-bottom-left-radius: 0.75rem;
  border-bottom-right-radius: 0.75rem;
}
.filter-item.active {
  background: #04454d;
  color: #fff;
}
.secondary-menu {
  display: flex;
  flex-direction: column;
  min-width: 300px;
  width: 100%;
  padding: 1.15rem 1.4rem;
  background: #fff;
  border-radius: 0.75rem;
  border: 1px solid #d9d9d9;
  height: fit-content;
  box-shadow:
    0 0 #0000,
    0 0 #0000,
    0 0 #0000,
    0 0 #0000,
    0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -4px rgba(0, 0, 0, 0.1) !important;
}
.secondary-label {
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #23404a;
  padding: 0px;
}
.secondary-dropdown {
  width: 100%;
  padding: 0.5rem;
  border-radius: 0.5rem;
  border: 1px solid #e0e0e0;
}
.secondary-multiselect {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}
.checkbox-label,
.radio-label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 400;
  cursor: pointer;
}
.secondary-radios {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}
.clear-filter-btn {
  margin-top: 0.5rem;
  background: transparent;
  border: none;
  color: #d7263d;
  font-weight: 500;
  cursor: pointer;
  font-size: 0.8rem;
  padding: 0;
  text-align: left;
}
.clear-filter-btn:hover {
  text-decoration: underline;
}
</style>
