<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import BreadcrumbNavigation from '../components/BreadcrumbNavigation.vue'
import FormInput from '../components/FormInput.vue'
import FormSelect from '../components/FormSelect.vue'
import FormTextarea from '../components/FormTextarea.vue'
import FormCheckboxGrid from '../components/FormCheckboxGrid.vue'
import NavigationButtons from '../components/NavigationButtons.vue'

const router = useRouter()

// Reset scroll position when component mounts
onMounted(() => {
  const contentArea = document.querySelector('.content-area')
  if (contentArea) {
    contentArea.scrollTop = 0
  }
})

const jobTitle = ref('')
const organizationName = ref('')
const organizationType = ref('')
const aboutOrganization = ref('')
const streetAddress = ref('')
const province = ref('')
const city = ref('')
const country = ref('')
const opportunityTypes = ref<string[]>([])

// Options for dropdowns
const organizationTypeOptions = [
  { value: 'nonprofit', label: 'Non-profit' },
  { value: 'corporate', label: 'Corporate' },
  { value: 'government', label: 'Government' },
  { value: 'educational', label: 'Educational' },
]

const provinceOptions = [
  { value: 'ontario', label: 'Ontario' },
  { value: 'quebec', label: 'Quebec' },
  { value: 'bc', label: 'British Columbia' },
  { value: 'alberta', label: 'Alberta' },
]

const countryOptions = [
  { value: 'canada', label: 'Canada' },
  { value: 'usa', label: 'United States' },
  { value: 'uk', label: 'United Kingdom' },
]

const opportunityTypeOptions = [
  { value: 'full-time', label: 'Full-time' },
  { value: 'contract', label: 'Contract/temporary/seasonal' },
  { value: 'mentorship', label: 'Mentorship program' },
  { value: 'part-time', label: 'Part-time' },
  { value: 'supply', label: 'Supply/substitute teaching' },
  { value: 'professional', label: 'Professional development' },
  { value: 'volunteer', label: 'Volunteer' },
  { value: 'internship-paid', label: 'Internship (paid)' },
  { value: 'internship-unpaid', label: 'Internship (unpaid)' },
  { value: 'hybrid', label: 'Hybrid' },
  { value: 'remote', label: 'Remote' },
  { value: 'consulting', label: 'Consulting' },
  { value: 'speaking', label: 'Speaking engagement' },
  { value: 'in-person', label: 'In person' },
]

function handleContinue() {
  // Simple validation - check if required fields are filled
  if (!jobTitle.value) {
    alert('Please enter a job title')
    return
  }
  if (!organizationName.value) {
    alert('Please enter an organization name')
    return
  }
  if (!organizationType.value) {
    alert('Please select an organization type')
    return
  }
  if (!streetAddress.value) {
    alert('Please enter a street address')
    return
  }
  if (!province.value) {
    alert('Please select a province')
    return
  }
  if (!city.value) {
    alert('Please enter a city')
    return
  }
  if (!country.value) {
    alert('Please select a country')
    return
  }
  if (opportunityTypes.value.length === 0) {
    alert('Please select at least one opportunity type')
    return
  }

  // If all validation passes, go to the next page
  router.push('/page3-form2')
}
</script>

<template>
  <div class="max-w-6xl mx-auto">
    <BreadcrumbNavigation :current-step="1" />

    <!-- Main Title -->
    <h1 class="text-4xl font-bold text-teal-700 mb-8">Create a new job posting</h1>

    <!-- Form -->
    <div class="form-container">
      <FormInput v-model="jobTitle" label="Job title" placeholder="Placeholder text" required />

      <!-- Organization Name and Type -->
      <div class="form-row">
        <FormInput
          v-model="organizationName"
          label="Organization name"
          placeholder="Placeholder text"
          required
        />
        <FormSelect
          v-model="organizationType"
          label="Organization type"
          :options="organizationTypeOptions"
          required
        />
      </div>

      <FormTextarea
        v-model="aboutOrganization"
        label="About the organization"
        placeholder="Placeholder text"
        :rows="6"
        :show-character-count="true"
      />

      <!-- Street Address and Province -->
      <div class="form-row">
        <FormInput
          v-model="streetAddress"
          label="Street address"
          placeholder="Placeholder text"
          required
        />
        <FormSelect v-model="province" label="Province" :options="provinceOptions" required />
      </div>

      <!-- City and Country -->
      <div class="form-row">
        <FormInput v-model="city" label="City" placeholder="Placeholder text" required />
        <FormSelect v-model="country" label="Country" :options="countryOptions" required />
      </div>

      <FormCheckboxGrid
        v-model="opportunityTypes"
        label="Opportunity type"
        :options="opportunityTypeOptions"
        required
      />
    </div>

    <NavigationButtons @continue="handleContinue" />
  </div>
</template>

<style scoped>
@import '../assets/page3.css';
</style>
