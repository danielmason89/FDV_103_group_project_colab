<script setup lang="ts">
// IMPORTS
import { ref, onMounted, watch } from 'vue'
import { useRouter } from 'vue-router'
import BreadcrumbNavigation from '../components/BreadcrumbNavigation.vue'
import NavigationButtons from '../components/NavigationButtons.vue'
// Validation & Form Imports
import * as yup from 'yup'
import { fullSchema, step1Yup, step2Yup, step3Yup, type JobForm } from '@/validation/jobSchemas'
import { useForm, Form } from 'vee-validate'
import FormInput from '@/components/FormInput.vue'
import FormSelect from '@/components/FormSelect.vue'
import FormTextarea from '@/components/FormTextarea.vue'
import FormCheckboxGrid from '@/components/FormCheckboxGrid.vue'
import FormRadioGroup from '@/components/FormRadioGroup.vue'

// WIZARD STATE
const router = useRouter()
// Step Tracking - Keep track of which step the user is on
const currentStep = ref<1 | 2 | 3>(1) // Start at step 1
const totalSteps = 3

// VEE-VALIDATE CONTEXT
const { values, setFieldError } = useForm<JobForm>({
  validationSchema: fullSchema,
})

// SUBMISSION STATE - Track if form is being filled, submitted successfully, or failed
const submissionState = ref<'form' | 'success' | 'failure'>('form')

// Approval Status - local, hidden in form
const approvalStatus = ref<'yes' | 'no'>('yes')

// AUTO-SAVE FUNCTIONALITY - Save form data as user types
watch(
  values,
  (v) => {
    localStorage.setItem('jobFormData', JSON.stringify(v))
    console.log('[Auto-Save] saved', v)
  },
  { deep: true },
)

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

// NAVIGATION FUNCTIONS - Handle moving between steps
async function nextStep() {
  const activeYup =
    currentStep.value === 1 ? step1Yup : currentStep.value === 2 ? step2Yup : step3Yup

  try {
    await activeYup.validate(values, { abortEarly: false })
  } catch (err) {
    if (err instanceof yup.ValidationError) {
      err.inner.forEach(({ path, message }) => {
        if (path) setFieldError(path as keyof JobForm, message)
      })
      return
    }
    throw err
  }

  if (currentStep.value < totalSteps) {
    currentStep.value++
    scrollToTop()
  } else {
    handleSubmit()
  }
}
// Scroll to top on First Step
function prevStep() {
  if (currentStep.value > 1) {
    currentStep.value--
    scrollToTop()
  }
}
// Scroll to top of form when changing Steps
function scrollToTop() {
  const contentArea = document.querySelector('.content-area')
  if (contentArea) {
    contentArea.scrollTop = 0
  }
}

// Watch country changes to update provinceOptions accordingly and clear province selection
type CountryKey = keyof typeof allProvinceOptions
watch(
  () => values.country as CountryKey | '',
  (newCountry) => {
    values.province = ''
    provinceOptions.value = newCountry
      ? allProvinceOptions[newCountry]
          .slice()
          .sort()
          .map((p) => ({ value: p, label: p }))
      : []
  },
)

// FORM SUBMISSION - Save & Publish Locally
function handleSubmit() {
  // One object with all field values + metadata
  const submission = {
    id: `job-${Date.now()}`, // crude unique id
    submittedAt: new Date().toISOString(), // ISO date‑time
    approved: approvalStatus.value, // "yes" for demo
    ...values,
  } as const

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
      Object.assign(values, JSON.parse(saved))
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

// Show "Submit" on last step
function getContinueText(): string {
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

    <Form id="multiStepForm" @submit.prevent="nextStep">
      <!-- Step 1: Basic job posting information -->
      <div class="form-step" :class="{ active: currentStep === 1 }">
        <h1 class="mb-8 text-4xl font-bold text-teal-700">{{ getStepTitle(1) }}</h1>

        <div class="form-container">
          <!-- Job title field -->
          <FormInput name="jobTitle" label="Job title" placeholder="Placeholder text" required />

          <!-- Organization name and type in a row -->
          <div class="form-row">
            <FormInput
              name="organizationName"
              label="Organization name"
              placeholder="Placeholder text"
              required
            />
            <FormSelect
              name="organizationType"
              label="Organization type"
              :options="organizationTypeOptions"
              required
            />
          </div>

          <!-- About organization text area -->
          <FormTextarea
            name="aboutOrganization"
            label="About the organization"
            placeholder="Placeholder text"
            :rows="6"
            :show-character-count="true"
          />

          <!-- Address fields in rows -->
          <div class="form-row">
            <FormInput
              name="streetAddress"
              label="Street address"
              placeholder="Placeholder text"
              required
            />
            <FormSelect name="province" label="Province" :options="provinceOptions" required />
          </div>

          <div class="form-row">
            <FormInput name="city" label="City" placeholder="Placeholder text" required />
            <FormSelect name="country" label="Country" :options="countryOptions" required />
          </div>

          <!-- Opportunity types as checkboxes -->
          <FormCheckboxGrid
            name="opportunityTypes"
            label="Opportunity type"
            :options="opportunityTypeOptions"
            required
          />
        </div>
      </div>

      <!-- Step 2: Job requirements and specifications -->
      <div class="form-step" :class="{ active: currentStep === 2 }">
        <h1 class="mb-8 text-4xl font-bold text-teal-700">{{ getStepTitle(2) }}</h1>

        <div class="form-container">
          <!-- Subject areas as checkboxes -->
          <FormCheckboxGrid
            name="subjectAreas"
            label="Subject area"
            :options="subjectAreaOptions"
          />

          <!-- Grade levels as checkboxes -->
          <FormCheckboxGrid name="gradeLevel" label="Grade level(s)" :options="gradeLevelOptions" />

          <!-- Compensation as radio buttons -->
          <FormRadioGroup
            name="compensation"
            label="Recognition and Compensation"
            :options="compensationOptions"
            required
          />

          <!-- Years of experience dropdown -->
          <FormSelect
            name="yearsOfExperience"
            label="Years of experience required"
            :options="experienceOptions"
            style="max-width: 300px"
          />

          <!-- Certifications as checkboxes -->
          <FormCheckboxGrid
            name="certifications"
            label="Certification required"
            :options="certificationOptions"
          />

          <!-- Qualifications text area -->
          <FormTextarea
            name="qualifications"
            label="Qualifications"
            placeholder="Placeholder text"
            :rows="4"
            required
          />
        </div>
      </div>

      <!-- Step 3: Job description and application details -->
      <div class="form-step" :class="{ active: currentStep === 3 }">
        <h1 class="mb-8 text-4xl font-bold text-teal-700">{{ getStepTitle(3) }}</h1>

        <div class="form-container">
          <!-- Job description text area -->
          <FormTextarea
            name="jobDescription"
            label="Job description"
            placeholder="Placeholder text"
            :rows="8"
            :show-character-count="true"
            required
            class="large-textarea"
          />

          <!-- Application link with description -->
          <div class="form-group">
            <FormInput
              name="applicationLink"
              label="Application Link"
              placeholder="Placeholder text"
              required
            />
            <div class="field-description">(email or link to job posting / job portal)</div>
          </div>

          <!-- Application deadline with format hint -->
          <div class="form-group">
            <FormInput
              name="applicationDeadline"
              label="Application Deadline"
              type="date"
              required
              class="date-input"
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
    </Form>
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
