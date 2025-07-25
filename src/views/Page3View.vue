<script setup lang="ts">
// IMPORTS
import { ref, onMounted, watch, type Ref } from 'vue'
import { useRouter } from 'vue-router'
import BreadcrumbNavigation from '../components/BreadcrumbNavigation.vue'
import FormInput from '../components/FormInput.vue'
import FormSelect from '../components/FormSelect.vue'
import FormTextarea from '../components/FormTextarea.vue'
import FormCheckboxGrid from '../components/FormCheckboxGrid.vue'
import FormRadioGroup from '../components/FormRadioGroup.vue'
import NavigationButtons from '../components/NavigationButtons.vue'
import { useForm } from 'vee-validate'
import { useField } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/yup'
import * as yup from 'yup'

const router = useRouter()

// STEP TRACKING - Keep track of which step the user is on
const currentStep = ref<1 | 2 | 3>(1) // Start at step 1
const totalSteps = 3

// SUBMISSION STATE - Track if form is being filled, submitted successfully, or failed
const submissionState = ref<'form' | 'success' | 'failure'>('form')

// STEP 1 FORM FIELDS - Job posting basic information
const jobTitle = ref('')
const organizationName = ref('')
const organizationType = ref('')
const aboutOrganization = ref('')
const streetAddress = ref('')
const province = ref('')
const city = ref('')
const country = ref('')
const opportunityTypes = ref<string[]>([])

// STEP 2 FORM FIELDS - Job requirements and specifications
const subjectAreas = ref<string[]>([])
const gradeLevel = ref<string[]>([])
const compensation = ref('')
const yearsOfExperience = ref('')
const certifications = ref<string[]>([])
const qualifications = ref('')

// STEP 3 FORM FIELDS - Job description and application details
const jobDescription = ref('')
const applicationLink = ref('')
const applicationDeadline = ref('')
const approvalStatus = ref<'yes' | 'no'>('yes')

// AUTO-SAVE FUNCTIONALITY - Save form data as user types
// Group all form fields together for easy saving
const formState: Record<string, Ref<string | string[]>> = {
  jobTitle,
  organizationName,
  organizationType,
  aboutOrganization,
  streetAddress,
  province,
  city,
  country,
  opportunityTypes,
  subjectAreas,
  gradeLevel,
  compensation,
  yearsOfExperience,
  certifications,
  qualifications,
  jobDescription,
  applicationLink,
  applicationDeadline,
  approvalStatus,
}

// Watch for changes in any form field and save to browser storage
Object.values(formState).forEach((field) => {
  watch(
    field,
    () => {
      // Convert all form data to a simple object
      const serialized = Object.fromEntries(
        Object.entries(formState).map(([key, refObj]) => [key, refObj.value]),
      )
      // Save to browser's local storage
      localStorage.setItem('jobFormData', JSON.stringify(serialized))
      console.log('[Auto-Save] Form data saved to localStorage.')
    },
    { deep: true }, // Watch nested changes (like arrays)
  )
})

// DROPDOWN OPTIONS - Predefined choices for form dropdowns
const organizationTypeOptions = [
  { value: 'Camp', label: 'Camp' },
  { value: 'Charity', label: 'Charity' },
  { value: 'Child Care', label: 'Child Care' },
  { value: 'Educational Non-Profit', label: 'Educational Non-Profit' },
  { value: 'Educational Technology Company', label: 'Educational Technology Company' },
  { value: 'Government Education Department', label: 'Government Education Department' },
  { value: 'Post-Secondary', label: 'Post-Secondary' },
  { value: 'Private School', label: 'Private School' },
  { value: 'School Board', label: 'School Board' },
  { value: 'Tutoring Center', label: 'Tutoring Center' },
  { value: 'Other', label: 'Other' },
]

// We’ll keep provinceOptions reactive and update based on selected country
const allProvinceOptions = {
  UK: [
    'London',
    'Cornwall',
    'Devon',
    'Yorkshire',
    'Kent',
    'Lancashire',
    'Cumbria',
    'Norfolk',
    'Dorset',
    'Hampshire',
    'Northumberland',
    'Lincolnshire',
  ],
  USA: [
    'California',
    'Florida',
    'Georgia',
    'Illinois',
    'New York',
    'Ohio',
    'Pennsylvania',
    'Texas',
  ],
  Canada: [
    'Alberta',
    'British Columbia',
    'Manitoba',
    'New Brunswick',
    'Newfoundland and Labrador',
    'Nova Scotia',
    'Ontario',
    'Prince Edward Island',
    'Quebec',
    'Saskatchewan',
  ],
}
// reactive provinceOptions, initially empty
const provinceOptions = ref<{ value: string; label: string }[]>([])

const countryOptions = [
  { value: 'Canada', label: 'Canada' },
  { value: 'USA', label: 'USA' },
  { value: 'UK', label: 'UK' },
]

const opportunityTypeOptions = [
  { value: 'Full-Time', label: 'Full-Time' },
  { value: 'Part-Time', label: 'Part-Time' },
  { value: 'Contract / Temporary / Seasonal', label: 'Contract / Temporary / Seasonal' },
  { value: 'Supply/Substitute Teaching', label: 'Supply/Substitute Teaching' },
  { value: 'Mentorship Program', label: 'Mentorship Program' },
  { value: 'Professional Development', label: 'Professional Development' },
  { value: 'Consulting', label: 'Consulting' },
  { value: 'Speaking Engagement', label: 'Speaking Engagement' },
  { value: 'Volunteer', label: 'Volunteer' },
  { value: 'Internship (Paid)', label: 'Internship (Paid)' },
  { value: 'Internship (Unpaid)', label: 'Internship (Unpaid)' },
  { value: 'In-person', label: 'In-person' },
  { value: 'Hybrid', label: 'Hybrid' },
  { value: 'Remote', label: 'Remote' },
]

const subjectAreaOptions = [
  { value: 'English / Language Arts', label: 'English / Language Arts' },
  { value: 'Mathematics', label: 'Mathematics' },
  { value: 'Science', label: 'Science' },
  { value: 'Social Studies', label: 'Social Studies' },
  { value: 'Foreign Languages', label: 'Foreign Languages' },
  { value: 'Special Education', label: 'Special Education' },
  { value: 'Physical Education / Health', label: 'Physical Education / Health' },
  { value: 'Arts (Visual, Music, Performing)', label: 'Arts (Visual, Music, Performing)' },
  { value: 'Technology / Computer Science', label: 'Technology / Computer Science' },
  { value: 'Library/Information Sciences', label: 'Library/Information Sciences' },
  { value: 'Counseling/Student Services', label: 'Counseling/Student Services' },
  { value: 'Administration/Leadership', label: 'Administration/Leadership' },
  { value: 'Curriculum Development', label: 'Curriculum Development' },
  {
    value: 'Educational Technology/Instructional Design',
    label: 'Educational Technology/Instructional Design',
  },
  { value: 'Early Childhood Education', label: 'Early Childhood Education' },
]

const gradeLevelOptions = [
  { value: 'Preschool', label: 'Preschool' },
  { value: 'K-8', label: 'K-8' },
  { value: 'Secondary', label: 'Secondary' },
  { value: 'Post-Secondary', label: 'Post-Secondary' },
  { value: 'All Grade Levels', label: 'All Grade Levels' },
]

const compensationOptions = [
  { value: 'Salary', label: 'Salary' },
  { value: 'Hourly', label: 'Hourly' },
  { value: 'Volunteer', label: 'Volunteer' },
  { value: 'Professional Learning Credits', label: 'Professional Learning Credits' },
]

const experienceOptions = [
  { value: 'Entry Level', label: 'Entry Level' },
  { value: '1-3 years', label: '1-3 years' },
  { value: '3-5 years', label: '3-5 years' },
  { value: '5+ years', label: '5+ years' },
]

const certificationOptions = [
  { value: 'Teaching License', label: 'Teaching License' },
  { value: 'Subject Certifications', label: 'Subject Certifications' },
  { value: 'other', label: 'Other' },
]

// VALIDATION FUNCTIONS - Check if required fields are filled
// Vee‑Validate / Yup schemas
const step1Schema = toTypedSchema(
  yup.object({
    jobTitle: yup.string().required('Job title is required'),
    organizationName: yup.string().required('Organization name is required'),
    organizationType: yup.string().required('Select an organization type'),
    streetAddress: yup.string().required('Street address is required'),
    province: yup.string().required('Select a province'),
    city: yup.string().required('City is required'),
    country: yup.string().required('Select a country'),
    opportunityTypes: yup.array().min(1, 'Pick at least one opportunity type'),
  }),
)

const step2Schema = toTypedSchema(
  yup.object({
    compensation: yup.string().required('Select compensation'),
    qualifications: yup.string().required('Enter qualifications'),
    subjectAreas: yup.array().min(1, 'Pick at least one subject area').optional(),
    gradeLevel: yup.array().min(1, 'Pick at least one grade level').optional(),
    yearsOfExperience: yup.string().optional(),
    certifications: yup.array().optional(),
  }),
)

const step3Schema = toTypedSchema(
  yup.object({
    jobDescription: yup.string().required('Enter a job description'),
    applicationLink: yup.string().required('Enter an application link'),
    applicationDeadline: yup.string().required('Pick an application deadline'),
  }),
)

// Vee-Validate useForm for each step
const { errors: step1Errors, validate: validateStep1 } = useForm({
  validationSchema: step1Schema,
  initialValues: {},
})

const { errors: step2Errors, validate: validateStep2 } = useForm({
  validationSchema: step2Schema,
})

const { errors: step3Errors, validate: validateStep3 } = useForm({
  validationSchema: step3Schema,
})

// NAVIGATION FUNCTIONS - Handle moving between steps
async function nextStep() {
  let isValid = false

  // Validate current step before moving forward
  if (currentStep.value === 1) isValid = (await validateStep1()).valid
  else if (currentStep.value === 2) isValid = (await validateStep2()).valid
  else if (currentStep.value === 3) isValid = (await validateStep3()).valid

  if (isValid) {
    if (currentStep.value < totalSteps) {
      // Move to next step
      currentStep.value++
      scrollToTop()
    } else {
      // Submit the form
      handleSubmit()
    }
  }
}

// Watch country changes to update provinceOptions accordingly and clear province selection
watch(country, (newCountry) => {
  if (newCountry && allProvinceOptions[newCountry]) {
    // Sort alphabetically and map to {value,label}
    provinceOptions.value = allProvinceOptions[newCountry]
      .slice()
      .sort()
      .map((prov) => ({ value: prov, label: prov }))
  } else {
    provinceOptions.value = []
  }
  // Clear current province selection on country change
  province.value = ''
})

function prevStep() {
  // Go back to previous step
  if (currentStep.value > 1) {
    currentStep.value--
    scrollToTop()
  }
}

function scrollToTop() {
  // Scroll to top of form when changing steps
  const contentArea = document.querySelector('.content-area')
  if (contentArea) {
    contentArea.scrollTop = 0
  }
}

// *FORM SUBMISSION - Save & Publish Locally*
function handleSubmit() {
  // One object with all field values + metadata
  const submission = {
    id: `job-${Date.now()}`, // crude unique id
    submittedAt: new Date().toISOString(), // ISO date‑time
    approved: approvalStatus.value, // "yes" for demo
    ...Object.fromEntries(Object.entries(formState).map(([key, r]) => [key, r.value])),
  }

  // Append to jobSubmissions list in localStorage
  const list = JSON.parse(localStorage.getItem('jobSubmissions') || '[]')
  list.push(submission)
  localStorage.setItem('jobSubmissions', JSON.stringify(list))

  // Update other parts of app such as page 1
  window.dispatchEvent(new CustomEvent('job-list-updated'))

  // Clear draft so next post starts empty
  localStorage.removeItem('jobFormData')

  // Log for Pages 1 and 2
  console.log('[Submit] saved jobSubmissions →', list)

  // Shows Submission Success Panel
  submissionState.value = 'success'
}

// LOAD SAVED DATA - Restore form data when page loads
onMounted(() => {
  // Reset scroll position when component loads
  const contentArea = document.querySelector('.content-area')
  if (contentArea) {
    contentArea.scrollTop = 0
  }

  // Only load saved data if we're still filling out the form
  if (submissionState.value === 'form') {
    const saved = localStorage.getItem('jobFormData')
    if (saved) {
      const parsed = JSON.parse(saved)
      // Restore each field from saved data
      Object.entries(parsed).forEach(([key, value]) => {
        if (formState[key] && (typeof value === 'string' || Array.isArray(value))) {
          formState[key].value = value
        }
      })
      console.log('[Load] Loaded saved form data from localStorage.')
    }
  }
})

// HELPER FUNCTIONS - Get text for UI elements
function getStepTitle(step: number): string {
  // Return the title for each step
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

function getContinueText(): string {
  // Show "Submit" on last step, "Continue" on others
  return currentStep.value === totalSteps ? 'Submit for review' : 'Continue'
}
</script>

<template>
  <!-- SUCCESS STATE - Show when form is submitted successfully -->
  <div v-if="submissionState === 'success'" class="flex flex-col min-h-full">
    <div class="w-full max-w-6xl mx-auto">
      <BreadcrumbNavigation :current-step="3" />
    </div>

    <!-- Success message centered on page -->
    <div class="flex items-center justify-center flex-1 px-4 py-8">
      <div class="max-w-2xl mx-auto text-center">
        <!-- Green checkmark icon -->
        <div class="flex justify-center mb-6 md:mb-8">
          <div
            class="flex items-center justify-center w-20 h-20 bg-green-500 border-4 border-green-400 rounded-full md:w-24 md:h-24"
          >
            <svg
              class="w-10 h-10 text-white md:w-12 md:h-12"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
          </div>
        </div>

        <!-- Success title -->
        <h1 class="px-4 mb-4 text-3xl font-bold text-teal-700 md:text-4xl lg:text-5xl md:mb-6">
          Success!
        </h1>

        <!-- Success subtitle -->
        <h2 class="px-4 mb-6 text-xl font-semibold text-teal-700 md:text-2xl md:mb-8">
          Your job posting has been submitted for review
        </h2>

        <!-- Success message with details -->
        <div class="px-4 space-y-4 text-base leading-relaxed text-gray-700 md:text-lg">
          <p>
            Thank you for your submission. Your post is currently under review by our team. We'll
            send you an email once it's approved — keep an eye on your inbox!
          </p>
          <p>
            If you have any questions or need to make changes, feel free to
            <a href="#" class="text-blue-600 underline hover:text-blue-800">contact us</a>!
          </p>

          <div class="flex justify-center mt-8">
            <NavigationButtons :action-label="'View Job Board'" @action="router.push('/')" />
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- FAILURE STATE - Show when form submission fails -->
  <div v-else-if="submissionState === 'failure'" class="flex flex-col min-h-full">
    <div class="w-full max-w-6xl mx-auto">
      <BreadcrumbNavigation :current-step="3" />
    </div>

    <!-- Error message -->
    <div class="flex items-center justify-center flex-1 px-4 py-8">
      <div class="max-w-4xl mx-auto text-left">
        <!-- Error title -->
        <h1 class="px-4 mb-6 text-3xl font-bold text-teal-700 md:text-4xl lg:text-5xl md:mb-8">
          Sorry, we encountered an issue
        </h1>

        <!-- Error message with instructions -->
        <div class="px-4 space-y-4 text-base leading-relaxed text-gray-700 md:text-lg">
          <p>
            Something went wrong on our end. Please try submitting again. We apologize for the
            inconvenience.
          </p>
          <p>
            Please refresh the page and try again. If the problem continues, please
            <a href="#" class="text-blue-600 underline hover:text-blue-800">contact support</a>
          </p>
        </div>
      </div>
    </div>
  </div>

  <!-- FORM STATE - The actual form with 3 steps -->
  <div v-else class="max-w-6xl mx-auto">
    <BreadcrumbNavigation :current-step="currentStep" />

    <form id="multiStepForm" novalidate @submit.prevent="nextStep">
      <!-- Step 1: Basic job posting information -->
      <div class="form-step" :class="{ active: currentStep === 1 }">
        <h1 class="mb-8 text-4xl font-bold text-teal-700">{{ getStepTitle(1) }}</h1>

        <div class="form-container">
          <!-- Job title field -->
          <FormInput
            v-model="jobTitle"
            label="Job title"
            placeholder="Placeholder text"
            required
            :error="step1Errors.jobTitle"
          />

          <!-- Organization name and type in a row -->
          <div class="form-row">
            <FormInput
              v-model="organizationName"
              label="Organization name"
              placeholder="Placeholder text"
              required
              :error="step1Errors.organizationName"
            />
            <FormSelect
              v-model="organizationType"
              label="Organization type"
              :options="organizationTypeOptions"
              required
              :error="step1Errors.organizationType"
            />
          </div>

          <!-- About organization text area -->
          <FormTextarea
            v-model="aboutOrganization"
            label="About the organization"
            placeholder="Placeholder text"
            :rows="6"
            :show-character-count="true"
          />

          <!-- Address fields in rows -->
          <div class="form-row">
            <FormInput
              v-model="streetAddress"
              label="Street address"
              placeholder="Placeholder text"
              required
              :error="step1Errors.streetAddress"
            />
            <FormSelect
              v-model="province"
              label="Province"
              :options="provinceOptions"
              required
              :error="step1Errors.province"
            />
          </div>

          <div class="form-row">
            <FormInput
              v-model="city"
              label="City"
              placeholder="Placeholder text"
              required
              :error="step1Errors.city"
            />
            <FormSelect
              v-model="country"
              label="Country"
              :options="countryOptions"
              required
              :error="step1Errors.country"
            />
          </div>

          <!-- Opportunity types as checkboxes -->
          <FormCheckboxGrid
            v-model="opportunityTypes"
            label="Opportunity type"
            :options="opportunityTypeOptions"
            required
            :error="step1Errors.opportunityTypes"
          />
        </div>
      </div>

      <!-- Step 2: Job requirements and specifications -->
      <div class="form-step" :class="{ active: currentStep === 2 }">
        <h1 class="mb-8 text-4xl font-bold text-teal-700">{{ getStepTitle(2) }}</h1>

        <div class="form-container">
          <!-- Subject areas as checkboxes -->
          <FormCheckboxGrid
            v-model="subjectAreas"
            label="Subject area"
            :options="subjectAreaOptions"
            :error="step2Errors.subjectAreas"
          />

          <!-- Grade levels as checkboxes -->
          <FormCheckboxGrid
            v-model="gradeLevel"
            label="Grade level(s)"
            :options="gradeLevelOptions"
            :error="step2Errors.gradeLevel"
          />

          <!-- Compensation as radio buttons -->
          <FormRadioGroup
            v-model="compensation"
            label="Recognition and Compensation"
            :options="compensationOptions"
            required
            :error="step2Errors.compensation"
          />

          <!-- Years of experience dropdown -->
          <FormSelect
            v-model="yearsOfExperience"
            label="Years of experience required"
            :options="experienceOptions"
            style="max-width: 300px"
            :error="step2Errors.yearsOfExperience"
          />

          <!-- Certifications as checkboxes -->
          <FormCheckboxGrid
            v-model="certifications"
            label="Certification required"
            :options="certificationOptions"
            :error="step2Errors.certifications"
          />

          <!-- Qualifications text area -->
          <FormTextarea
            v-model="qualifications"
            label="Qualifications"
            placeholder="Placeholder text"
            :rows="4"
            required
            :error="step2Errors.qualifications"
          />
        </div>
      </div>

      <!-- Step 3: Job description and application details -->
      <div class="form-step" :class="{ active: currentStep === 3 }">
        <h1 class="mb-8 text-4xl font-bold text-teal-700">{{ getStepTitle(3) }}</h1>

        <div class="form-container">
          <!-- Job description text area -->
          <FormTextarea
            v-model="jobDescription"
            label="Job description"
            placeholder="Placeholder text"
            :rows="8"
            :show-character-count="true"
            required
            class="large-textarea"
            :error="step3Errors.jobDescription"
          />

          <!-- Application link with description -->
          <div class="form-group">
            <FormInput
              v-model="applicationLink"
              label="Application Link"
              placeholder="Placeholder text"
              required
              :error="step3Errors.applicationLink"
            />
            <div class="field-description">(email or link to job posting / job portal)</div>
          </div>

          <!-- Application deadline with format hint -->
          <div class="form-group">
            <FormInput
              v-model="applicationDeadline"
              label="Application Deadline"
              type="date"
              required
              class="date-input"
              :error="step3Errors.applicationDeadline"
            />
            <div class="date-format">MM/DD/YYYY</div>
          </div>
        </div>
      </div>

      <!-- Navigation buttons at bottom -->
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
@import '../assets/base.css';

.form-step {
  display: none;
}

.form-step.active {
  display: block;
}

.large-textarea {
  min-height: 200px;
}

.form-step {
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}

.form-step.active {
  opacity: 1;
  display: block;
}

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
