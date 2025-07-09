<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import BreadcrumbNavigation from '../components/BreadcrumbNavigation.vue'
import FormInput from '../components/FormInput.vue'
import FormSelect from '../components/FormSelect.vue'
import FormTextarea from '../components/FormTextarea.vue'
import FormCheckboxGrid from '../components/FormCheckboxGrid.vue'
import FormRadioGroup from '../components/FormRadioGroup.vue'
import NavigationButtons from '../components/NavigationButtons.vue'

const router = useRouter()

// Current step tracking
const currentStep = ref<1 | 2 | 3>(1)
const totalSteps = 3

// Reset scroll position when component mounts
onMounted(() => {
  const contentArea = document.querySelector('.content-area')
  if (contentArea) {
    contentArea.scrollTop = 0
  }
})

// Step 1 data - Create a new job posting
const jobTitle = ref('')
const organizationName = ref('')
const organizationType = ref('')
const aboutOrganization = ref('')
const streetAddress = ref('')
const province = ref('')
const city = ref('')
const country = ref('')
const opportunityTypes = ref<string[]>([])

// Step 2 data - Job specifications
const subjectAreas = ref<string[]>([])
const gradeLevel = ref('')
const compensation = ref('')
const yearsOfExperience = ref('')
const certifications = ref<string[]>([])
const qualifications = ref('')

// Step 3 data - Job description
const jobDescription = ref('')
const applicationLink = ref('')
const applicationDeadline = ref('')

// Options for dropdowns and form elements
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

const subjectAreaOptions = [
  { value: 'english-language-arts', label: 'English/Language Arts' },
  { value: 'mathematics', label: 'Mathematics' },
  { value: 'science', label: 'Science' },
  { value: 'social-studies', label: 'Social Studies' },
  { value: 'foreign-languages', label: 'Foreign Languages' },
  { value: 'special-education', label: 'Special Education' },
  { value: 'physical-education-health', label: 'Physical Education/Health' },
  { value: 'arts', label: 'Arts (Visual, Music, Performing)' },
  { value: 'technology-computer-science', label: 'Technology/Computer Science' },
  { value: 'library-information-services', label: 'Library/Information Services' },
  { value: 'counselling-student-services', label: 'Counselling/Student Services' },
  { value: 'administration-leadership', label: 'Administration/Leadership' },
  { value: 'curriculum-development', label: 'Curriculum Development' },
  {
    value: 'educational-technology-instructional-design',
    label: 'Educational Technology/Instructional Design',
  },
  { value: 'early-childhood-education', label: 'Early Childhood Education' },
]

const gradeLevelOptions = [
  { value: 'pre-school', label: 'Pre-School' },
  { value: 'k-8', label: 'K-8' },
  { value: 'secondary', label: 'Secondary' },
  { value: 'post-secondary', label: 'Post-Secondary' },
  { value: 'all-grade-levels', label: 'All Grade Levels' },
]

const compensationOptions = [
  { value: 'salary', label: 'Salary' },
  { value: 'hourly', label: 'Hourly' },
  { value: 'volunteer', label: 'Volunteer' },
  { value: 'professional-learning-credits', label: 'Professional Learning Credits' },
]

const experienceOptions = [
  { value: '0-1', label: '0-1 years' },
  { value: '2-5', label: '2-5 years' },
  { value: '5-10', label: '5-10 years' },
  { value: '10+', label: '10+ years' },
]

const certificationOptions = [
  { value: 'teaching-license', label: 'Teaching License' },
  { value: 'subject-certifications', label: 'Subject Certifications' },
  { value: 'other', label: 'Other' },
]

// Validation functions for each step
function validateStep1(): boolean {
  if (!jobTitle.value) {
    alert('Please enter a job title')
    return false
  }
  if (!organizationName.value) {
    alert('Please enter an organization name')
    return false
  }
  if (!organizationType.value) {
    alert('Please select an organization type')
    return false
  }
  if (!streetAddress.value) {
    alert('Please enter a street address')
    return false
  }
  if (!province.value) {
    alert('Please select a province')
    return false
  }
  if (!city.value) {
    alert('Please enter a city')
    return false
  }
  if (!country.value) {
    alert('Please select a country')
    return false
  }
  if (opportunityTypes.value.length === 0) {
    alert('Please select at least one opportunity type')
    return false
  }
  return true
}

function validateStep2(): boolean {
  if (!compensation.value) {
    alert('Please select recognition and compensation')
    return false
  }
  if (!qualifications.value) {
    alert('Please enter qualifications')
    return false
  }
  return true
}

function validateStep3(): boolean {
  if (!jobDescription.value) {
    alert('Please enter a job description')
    return false
  }
  if (!applicationLink.value) {
    alert('Please enter an application link')
    return false
  }
  if (!applicationDeadline.value) {
    alert('Please enter an application deadline')
    return false
  }
  return true
}

// Navigation functions
function nextStep() {
  let isValid = false

  if (currentStep.value === 1) {
    isValid = validateStep1()
  } else if (currentStep.value === 2) {
    isValid = validateStep2()
  } else if (currentStep.value === 3) {
    isValid = validateStep3()
  }

  if (isValid) {
    if (currentStep.value < totalSteps) {
      currentStep.value++
      scrollToTop()
    } else {
      // Final submission
      handleSubmit()
    }
  }
}

function prevStep() {
  if (currentStep.value > 1) {
    currentStep.value--
    scrollToTop()
  }
}

function scrollToTop() {
  const contentArea = document.querySelector('.content-area')
  if (contentArea) {
    contentArea.scrollTop = 0
  }
}

function handleSubmit() {
  // Simulate successful submission
  router.push('/page3-success')
}

// Get step title
function getStepTitle(step: number): string {
  switch (step) {
    case 1:
      return 'Create a new job posting'
    case 2:
      return 'Job specifications'
    case 3:
      return 'Job description'
    default:
      return ''
  }
}

// Get continue button text
function getContinueText(): string {
  return currentStep.value === totalSteps ? 'Submit for review' : 'Continue'
}
</script>

<template>
  <div class="max-w-6xl mx-auto">
    <BreadcrumbNavigation :current-step="currentStep" />

    <form id="multiStepForm" @submit.prevent="nextStep">
      <!-- Step 1: Create a new job posting -->
      <div class="form-step" :class="{ active: currentStep === 1 }">
        <h1 class="text-4xl font-bold text-teal-700 mb-8">{{ getStepTitle(1) }}</h1>

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
      </div>

      <!-- Step 2: Job specifications -->
      <div class="form-step" :class="{ active: currentStep === 2 }">
        <h1 class="text-4xl font-bold text-teal-700 mb-8">{{ getStepTitle(2) }}</h1>

        <div class="form-container">
          <FormCheckboxGrid
            v-model="subjectAreas"
            label="Subject area"
            :options="subjectAreaOptions"
          />

          <FormRadioGroup
            v-model="gradeLevel"
            label="Grade level(s)"
            :options="gradeLevelOptions"
          />

          <FormRadioGroup
            v-model="compensation"
            label="Recognition and Compensation"
            :options="compensationOptions"
            required
          />

          <FormSelect
            v-model="yearsOfExperience"
            label="Years of experience required"
            :options="experienceOptions"
            style="max-width: 300px"
          />

          <FormCheckboxGrid
            v-model="certifications"
            label="Certification required"
            :options="certificationOptions"
          />

          <FormTextarea
            v-model="qualifications"
            label="Qualifications"
            placeholder="Placeholder text"
            :rows="4"
            required
          />
        </div>
      </div>

      <!-- Step 3: Job description -->
      <div class="form-step" :class="{ active: currentStep === 3 }">
        <h1 class="text-4xl font-bold text-teal-700 mb-8">{{ getStepTitle(3) }}</h1>

        <div class="form-container">
          <FormTextarea
            v-model="jobDescription"
            label="Job description"
            placeholder="Placeholder text"
            :rows="8"
            :show-character-count="true"
            required
            class="large-textarea"
          />

          <div class="form-group">
            <FormInput
              v-model="applicationLink"
              label="Application Link"
              placeholder="Placeholder text"
              required
            />
            <div class="field-description">(email or link to job posting / job portal)</div>
          </div>

          <div class="form-group">
            <FormInput
              v-model="applicationDeadline"
              label="Application Deadline"
              type="date"
              required
              class="date-input"
            />
            <div class="date-format">MM/DD/YYYY</div>
          </div>
        </div>
      </div>

      <!-- Navigation Buttons -->
      <NavigationButtons
        :show-back="currentStep > 1"
        :continue-text="getContinueText()"
        :is-submit="currentStep === totalSteps"
        @back="prevStep"
        @continue="nextStep"
      />
    </form>
  </div>
</template>

<style scoped>
@import '../assets/page3.css';

/* Multi-step form styling */
.form-step {
  display: none;
}

.form-step.active {
  display: block;
}

/* Large textarea specific styling */
.large-textarea {
  min-height: 200px;
}

/* Smooth transitions for better UX */
.form-step {
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}

.form-step.active {
  opacity: 1;
  display: block;
}

/* Step indicator styling (if you want to add visual indicators later) */
.step-indicator {
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
}

.step-indicator .step {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #e5e7eb;
  color: #6b7280;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0.5rem;
  font-weight: bold;
}

.step-indicator .step.active {
  background-color: #0d9488;
  color: white;
}

.step-indicator .step.completed {
  background-color: #10b981;
  color: white;
}
</style>
