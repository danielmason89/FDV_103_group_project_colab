<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import BreadcrumbNavigation from '../components/BreadcrumbNavigation.vue'
import FormInput from '../components/FormInput.vue'
import FormTextarea from '../components/FormTextarea.vue'
import NavigationButtons from '../components/NavigationButtons.vue'

const router = useRouter()

// Reset scroll position when component mounts
onMounted(() => {
  const contentArea = document.querySelector('.content-area')
  if (contentArea) {
    contentArea.scrollTop = 0
  }
})

const jobDescription = ref('')
const applicationLink = ref('')
const applicationDeadline = ref('')

function handleSubmit() {
  // Simple validation - check if required fields are filled
  if (!jobDescription.value) {
    alert('Please enter a job description')
    return
  }
  if (!applicationLink.value) {
    alert('Please enter an application link')
    return
  }
  if (!applicationDeadline.value) {
    alert('Please enter an application deadline')
    return
  }

  // If all validation passes, submit the form
  // Here you would typically submit to an API
  // For now, we'll simulate a successful submission

  // Simulate API call success - redirect to success page
  router.push('/page3-success')

  // If you want to simulate potential failure scenarios, you could use:
  // const randomSuccess = Math.random() > 0.1 // 90% success rate
  // if (randomSuccess) {
  //   router.push('/page3-success')
  // } else {
  //   router.push('/page3-failure')
  // }
}

// Back button function
function goBack() {
  router.push('/page3-form2')
}
</script>

<template>
  <div class="max-w-6xl mx-auto">
    <BreadcrumbNavigation :current-step="3" />

    <!-- Main Title -->
    <h1 class="text-4xl font-bold text-teal-700 mb-8">Job description</h1>

    <!-- Form -->
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

    <NavigationButtons
      :show-back="true"
      continue-text="Submit for review"
      :is-submit="true"
      @back="goBack"
      @continue="handleSubmit"
    />
  </div>
</template>

<style scoped>
@import '../assets/shared-form-styles.css';

/* Large textarea specific styling */
.large-textarea {
  min-height: 200px;
}
</style>
