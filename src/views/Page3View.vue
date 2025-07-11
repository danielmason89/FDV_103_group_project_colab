<script setup lang="ts">
// Import Vue composition API and router functionality
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

// Import custom form components for the multi-step form
import BreadcrumbNavigation from '../components/BreadcrumbNavigation.vue'
import FormInput from '../components/FormInput.vue'
import FormSelect from '../components/FormSelect.vue'
import FormTextarea from '../components/FormTextarea.vue'
import FormCheckboxGrid from '../components/FormCheckboxGrid.vue'
import FormRadioGroup from '../components/FormRadioGroup.vue'
import NavigationButtons from '../components/NavigationButtons.vue'

const router = useRouter()

// Multi-step form state management
// Tracks which step the user is currently on (1, 2, or 3)
const currentStep = ref<1 | 2 | 3>(1)
const totalSteps = 3

// Reset scroll position when component mounts to ensure user starts at top of form
onMounted(() => {
  const contentArea = document.querySelector('.content-area')
  if (contentArea) {
    contentArea.scrollTop = 0
  }
})

// ===== STEP 1 DATA: Job Posting Basic Information =====
// All form data is stored as reactive references using Vue's ref()
const jobTitle = ref('')
const organizationName = ref('')
const organizationType = ref('')
const aboutOrganization = ref('')
const streetAddress = ref('')
const province = ref('')
const city = ref('')
const country = ref('')
const opportunityTypes = ref<string[]>([]) // Array for multiple selections

// ===== STEP 2 DATA: Job Specifications =====
const subjectAreas = ref<string[]>([]) // Array for multiple subject area selections
const gradeLevel = ref<string[]>([]) // Array for multiple grade level selections
const compensation = ref('')
const yearsOfExperience = ref('')
const certifications = ref<string[]>([]) // Array for multiple certification selections
const qualifications = ref('')

// ===== STEP 3 DATA: Job Description and Application Details =====
const jobDescription = ref('')
const applicationLink = ref('')
const applicationDeadline = ref('')

// ===== FORM OPTIONS: Dropdown and selection options =====
// Organization type options for dropdown
const organizationTypeOptions = [
  { value: 'nonprofit', label: 'Non-profit' },
  { value: 'corporate', label: 'Corporate' },
  { value: 'government', label: 'Government' },
  { value: 'educational', label: 'Educational' },
]

// Canadian provinces for location dropdown
const provinceOptions = [
  { value: 'ontario', label: 'Ontario' },
  { value: 'quebec', label: 'Quebec' },
  { value: 'bc', label: 'British Columbia' },
  { value: 'alberta', label: 'Alberta' },
]

// Country options for location dropdown
const countryOptions = [
  { value: 'canada', label: 'Canada' },
  { value: 'usa', label: 'United States' },
  { value: 'uk', label: 'United Kingdom' },
]

// Opportunity type options for checkbox grid (multiple selections allowed)
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

// Subject area options for checkbox grid (multiple selections allowed)
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

// Grade level options for checkbox grid (multiple selections allowed)
const gradeLevelOptions = [
  { value: 'pre-school', label: 'Pre-School' },
  { value: 'k-8', label: 'K-8' },
  { value: 'secondary', label: 'Secondary' },
  { value: 'post-secondary', label: 'Post-Secondary' },
  { value: 'all-grade-levels', label: 'All Grade Levels' },
]

// Compensation options for radio group (single selection only)
const compensationOptions = [
  { value: 'salary', label: 'Salary' },
  { value: 'hourly', label: 'Hourly' },
  { value: 'volunteer', label: 'Volunteer' },
  { value: 'professional-learning-credits', label: 'Professional Learning Credits' },
]

// Experience level options for dropdown
const experienceOptions = [
  { value: '0-1', label: '0-1 years' },
  { value: '2-5', label: '2-5 years' },
  { value: '5-10', label: '5-10 years' },
  { value: '10+', label: '10+ years' },
]

// Certification options for checkbox grid (multiple selections allowed)
const certificationOptions = [
  { value: 'teaching-license', label: 'Teaching License' },
  { value: 'subject-certifications', label: 'Subject Certifications' },
  { value: 'other', label: 'Other' },
]

// ===== VALIDATION FUNCTIONS =====
// Each step has its own validation function to ensure required fields are completed
// Returns true if validation passes, false if validation fails

/**
 * Validates Step 1: Job posting basic information
 * Checks that all required fields are filled before allowing progression to next step
 */
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

/**
 * Validates Step 2: Job specifications
 * Checks required fields for job requirements and qualifications
 */
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

/**
 * Validates Step 3: Job description and application details
 * Ensures job description and application information are provided
 */
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

// ===== NAVIGATION FUNCTIONS =====
/**
 * Handles progression to the next step or form submission
 * Validates current step before allowing progression
 */
function nextStep() {
  let isValid = false

  // Validate the current step before proceeding
  if (currentStep.value === 1) {
    isValid = validateStep1()
  } else if (currentStep.value === 2) {
    isValid = validateStep2()
  } else if (currentStep.value === 3) {
    isValid = validateStep3()
  }

  // If validation passes, either move to next step or submit form
  if (isValid) {
    if (currentStep.value < totalSteps) {
      currentStep.value++
      scrollToTop()
    } else {
      // Final submission - redirect to success page
      handleSubmit()
    }
  }
}

/**
 * Handles navigation to the previous step
 * Allows users to go back and modify previous entries
 */
function prevStep() {
  if (currentStep.value > 1) {
    currentStep.value--
    scrollToTop()
  }
}

/**
 * Scrolls the form content area to the top for better UX
 * Called when navigating between steps
 */
function scrollToTop() {
  const contentArea = document.querySelector('.content-area')
  if (contentArea) {
    contentArea.scrollTop = 0
  }
}

/**
 * Handles final form submission
 * Currently redirects to success page - implement actual submission logic here
 */
function handleSubmit() {
  // TODO: Implement actual form submission to backend/database
  // temporary console log to simulate submission
  console.log('Form submitted with data:', {
    jobTitle: jobTitle.value,
    organizationName: organizationName.value,
    organizationType: organizationType.value,
    aboutOrganization: aboutOrganization.value,
    streetAddress: streetAddress.value,
    province: province.value,
    city: city.value,
    country: country.value,
    opportunityTypes: opportunityTypes.value,
    subjectAreas: subjectAreas.value,
    gradeLevel: gradeLevel.value,
    compensation: compensation.value,
    yearsOfExperience: yearsOfExperience.value,
    certifications: certifications.value,
    qualifications: qualifications.value,
    jobDescription: jobDescription.value,
    applicationLink: applicationLink.value,
    applicationDeadline: applicationDeadline.value,
  })
  // For now, simulate successful submission by redirecting to success page
  router.push('/page3-success')
}

// ===== UTILITY FUNCTIONS =====
/**
 * Returns the title for each step based on step number
 * Used in the template to display step-specific headings
 */
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

/**
 * Returns the appropriate text for the continue button
 * Changes to "Submit for review" on the final step
 */
function getContinueText(): string {
  return currentStep.value === totalSteps ? 'Submit for review' : 'Continue'
}
</script>

<template>
  <div class="max-w-6xl mx-auto">
    <!-- Breadcrumb navigation shows current step progress -->
    <BreadcrumbNavigation :current-step="currentStep" />

    <!-- Multi-step form container -->
    <form id="multiStepForm" @submit.prevent="nextStep">
      <!-- ===== STEP 1: Create a new job posting ===== -->
      <div class="form-step" :class="{ active: currentStep === 1 }">
        <h1 class="text-4xl font-bold text-teal-700 mb-8">{{ getStepTitle(1) }}</h1>

        <div class="form-container">
          <!-- Job title input -->
          <FormInput v-model="jobTitle" label="Job title" placeholder="Placeholder text" required />

          <!-- Organization information in a two-column layout -->
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

          <!-- About organization textarea with character count -->
          <FormTextarea
            v-model="aboutOrganization"
            label="About the organization"
            placeholder="Placeholder text"
            :rows="6"
            :show-character-count="true"
          />

          <!-- Address information in two-column layout -->
          <div class="form-row">
            <FormInput
              v-model="streetAddress"
              label="Street address"
              placeholder="Placeholder text"
              required
            />
            <FormSelect v-model="province" label="Province" :options="provinceOptions" required />
          </div>

          <!-- City and country in two-column layout -->
          <div class="form-row">
            <FormInput v-model="city" label="City" placeholder="Placeholder text" required />
            <FormSelect v-model="country" label="Country" :options="countryOptions" required />
          </div>

          <!-- Opportunity types as checkbox grid (multiple selections) -->
          <FormCheckboxGrid
            v-model="opportunityTypes"
            label="Opportunity type"
            :options="opportunityTypeOptions"
            required
          />
        </div>
      </div>

      <!-- ===== STEP 2: Job specifications ===== -->
      <div class="form-step" :class="{ active: currentStep === 2 }">
        <h1 class="text-4xl font-bold text-teal-700 mb-8">{{ getStepTitle(2) }}</h1>

        <div class="form-container">
          <!-- Subject areas as checkbox grid (multiple selections) -->
          <FormCheckboxGrid
            v-model="subjectAreas"
            label="Subject area"
            :options="subjectAreaOptions"
          />

          <!-- Grade levels as checkbox grid (multiple selections) -->
          <FormCheckboxGrid
            v-model="gradeLevel"
            label="Grade level(s)"
            :options="gradeLevelOptions"
          />

          <!-- Compensation as radio group (single selection) -->
          <FormRadioGroup
            v-model="compensation"
            label="Recognition and Compensation"
            :options="compensationOptions"
            required
          />

          <!-- Years of experience dropdown -->
          <FormSelect
            v-model="yearsOfExperience"
            label="Years of experience required"
            :options="experienceOptions"
            style="max-width: 300px"
          />

          <!-- Certifications as checkbox grid (multiple selections) -->
          <FormCheckboxGrid
            v-model="certifications"
            label="Certification required"
            :options="certificationOptions"
          />

          <!-- Qualifications textarea -->
          <FormTextarea
            v-model="qualifications"
            label="Qualifications"
            placeholder="Placeholder text"
            :rows="4"
            required
          />
        </div>
      </div>

      <!-- ===== STEP 3: Job description ===== -->
      <div class="form-step" :class="{ active: currentStep === 3 }">
        <h1 class="text-4xl font-bold text-teal-700 mb-8">{{ getStepTitle(3) }}</h1>

        <div class="form-container">
          <!-- Job description with larger textarea and character count -->
          <FormTextarea
            v-model="jobDescription"
            label="Job description"
            placeholder="Placeholder text"
            :rows="8"
            :show-character-count="true"
            required
            class="large-textarea"
          />

          <!-- Application link with helper text -->
          <div class="form-group">
            <FormInput
              v-model="applicationLink"
              label="Application Link"
              placeholder="Placeholder text"
              required
            />
            <div class="field-description">(email or link to job posting / job portal)</div>
          </div>

          <!-- Application deadline with date format helper -->
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

      <!-- Navigation buttons for step progression -->
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

/* ===== MULTI-STEP FORM STYLING ===== */
/* Hide all form steps by default */
.form-step {
  display: none;
}

/* Only show the active step */
.form-step.active {
  display: block;
}

/* Large textarea styling for job description */
.large-textarea {
  min-height: 200px;
}

/* ===== SMOOTH TRANSITIONS ===== */
/* Add fade-in/fade-out transitions for better user experience */
.form-step {
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}

.form-step.active {
  opacity: 1;
  display: block;
}

/* ===== STEP INDICATOR STYLING ===== */
/* Optional: Visual step indicators for future enhancement */
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
