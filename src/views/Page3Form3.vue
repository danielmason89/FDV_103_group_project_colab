<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const jobDescription = ref('')
const applicationLink = ref('')
const applicationDeadline = ref('')

const characterCount = ref(0)

function updateCharacterCount() {
  characterCount.value = jobDescription.value.length
}

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
  <div class="max-w-6xl mx-auto p-6">
    <!-- Breadcrumb Navigation -->
    <div class="mb-8">
      <div class="flex items-center space-x-2 text-sm text-gray-600 mb-4">
        <span>&lt; breadcrumbs here</span>
      </div>

      <div class="breadcrumb-container">
        <div class="breadcrumb-step inactive">
          <div class="breadcrumb-content">
            <div class="font-semibold">Organization details</div>
            <div class="text-sm">About the organization</div>
          </div>
        </div>
        <div class="breadcrumb-step inactive">
          <div class="breadcrumb-content">
            <div class="font-semibold">Job specifications</div>
            <div class="text-sm">Role specifics</div>
          </div>
        </div>
        <div class="breadcrumb-step active last">
          <div class="breadcrumb-content">
            <div class="font-semibold">Job description</div>
            <div class="text-sm">and submission</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Title -->
    <h1 class="text-4xl font-bold text-teal-700 mb-8">Job description</h1>

    <!-- Form -->
    <div class="form-container">
      <!-- Job Description -->
      <div class="form-group">
        <label class="form-label">Job description*</label>
        <textarea
          v-model="jobDescription"
          @input="updateCharacterCount"
          placeholder="Placeholder text"
          rows="8"
          class="form-textarea large-textarea"
        ></textarea>
        <div class="character-count">{{ characterCount }}/0</div>
      </div>

      <!-- Application Link -->
      <div class="form-group">
        <label class="form-label">Application Link*</label>
        <input
          type="text"
          v-model="applicationLink"
          placeholder="Placeholder text"
          class="form-input"
        />
        <div class="field-description">(email or link to job posting / job portal)</div>
      </div>

      <!-- Application Deadline -->
      <div class="form-group">
        <label class="form-label">Application Deadline*</label>
        <input type="date" v-model="applicationDeadline" class="form-input date-input" />
        <div class="date-format">MM/DD/YYYY</div>
      </div>
    </div>

    <!-- Navigation Buttons -->
    <div class="flex justify-between mt-8">
      <button @click="goBack" class="back-button">Back</button>
      <button @click="handleSubmit" class="submit-button">Submit for review</button>
    </div>
  </div>
</template>

<style scoped>
@import '../assets/shared-form-styles.css';

/* Large textarea specific styling */
.large-textarea {
  min-height: 200px;
}
</style>
