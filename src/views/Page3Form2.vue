<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import BreadcrumbNavigation from '../components/BreadcrumbNavigation.vue'
import FormSelect from '../components/FormSelect.vue'
import FormTextarea from '../components/FormTextarea.vue'
import FormCheckboxGrid from '../components/FormCheckboxGrid.vue'
import FormRadioGroup from '../components/FormRadioGroup.vue'
import NavigationButtons from '../components/NavigationButtons.vue'

const router = useRouter()

// Reset scroll position when component mounts
onMounted(() => {
  const contentArea = document.querySelector('.content-area')
  if (contentArea) {
    contentArea.scrollTop = 0
  }
})

// Subject area checkboxes (converted to array)
const subjectAreas = ref<string[]>([])

// Grade level radio button
const gradeLevel = ref('')

// Recognition and Compensation radio button
const compensation = ref('')

// Years of experience dropdown
const yearsOfExperience = ref('')

// Certification required checkboxes (converted to array)
const certifications = ref<string[]>([])

// Qualifications text area
const qualifications = ref('')

// Options for form elements
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

// Simple continue function
function handleContinue() {
  // Simple validation - only required fields
  if (!compensation.value) {
    alert('Please select recognition and compensation')
    return
  }
  if (!qualifications.value) {
    alert('Please enter qualifications')
    return
  }

  // If validation passes, go to next page
  router.push('/page3-form3')
}

// Back button function
function goBack() {
  router.push('/page3')
}
</script>

<template>
  <div class="max-w-6xl mx-auto">
    <BreadcrumbNavigation :current-step="2" />

    <!-- Main Title -->
    <h1 class="text-4xl font-bold text-teal-700 mb-8">Job specifications</h1>

    <!-- Form -->
    <div class="form-container">
      <FormCheckboxGrid v-model="subjectAreas" label="Subject area" :options="subjectAreaOptions" />

      <FormRadioGroup v-model="gradeLevel" label="Grade level(s)" :options="gradeLevelOptions" />

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

    <NavigationButtons :show-back="true" @back="goBack" @continue="handleContinue" />
  </div>
</template>

<style scoped>
@import '../assets/shared-form-styles.css';
</style>
