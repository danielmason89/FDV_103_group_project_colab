<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// Subject area checkboxes
const englishLanguageArts = ref(false)
const mathematics = ref(false)
const science = ref(false)
const socialStudies = ref(false)
const foreignLanguages = ref(false)
const specialEducation = ref(false)
const physicalEducationHealth = ref(false)
const arts = ref(false)
const technologyComputerScience = ref(false)
const libraryInformationServices = ref(false)
const counsellingStudentServices = ref(false)
const administrationLeadership = ref(false)
const curriculumDevelopment = ref(false)
const educationalTechnologyInstructionalDesign = ref(false)
const earlyChildhoodEducation = ref(false)

// Grade level radio button
const gradeLevel = ref('')

// Recognition and Compensation radio button
const compensation = ref('')

// Years of experience dropdown
const yearsOfExperience = ref('')

// Certification required checkboxes
const teachingLicense = ref(false)
const subjectCertifications = ref(false)
const otherCertification = ref(false)

// Qualifications text area
const qualifications = ref('')

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
        <div class="breadcrumb-step active">
          <div class="breadcrumb-content">
            <div class="font-semibold">Job specifications</div>
            <div class="text-sm">Role specifics</div>
          </div>
        </div>
        <div class="breadcrumb-step inactive last">
          <div class="breadcrumb-content">
            <div class="font-semibold">Job description</div>
            <div class="text-sm">and submission</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Title -->
    <h1 class="text-4xl font-bold text-teal-700 mb-8">Job specifications</h1>

    <!-- Form -->
    <div class="form-container">
      <!-- Subject Area -->
      <div class="form-group">
        <label class="form-label">Subject area</label>
        <div class="checkbox-grid">
          <label class="checkbox-item">
            <input type="checkbox" v-model="englishLanguageArts" class="form-checkbox" />
            <span>English/Language Arts</span>
          </label>
          <label class="checkbox-item">
            <input type="checkbox" v-model="mathematics" class="form-checkbox" />
            <span>Mathematics</span>
          </label>
          <label class="checkbox-item">
            <input type="checkbox" v-model="science" class="form-checkbox" />
            <span>Science</span>
          </label>
          <label class="checkbox-item">
            <input type="checkbox" v-model="socialStudies" class="form-checkbox" />
            <span>Social Studies</span>
          </label>
          <label class="checkbox-item">
            <input type="checkbox" v-model="foreignLanguages" class="form-checkbox" />
            <span>Foreign Languages</span>
          </label>
          <label class="checkbox-item">
            <input type="checkbox" v-model="specialEducation" class="form-checkbox" />
            <span>Special Education</span>
          </label>
          <label class="checkbox-item">
            <input type="checkbox" v-model="physicalEducationHealth" class="form-checkbox" />
            <span>Physical Education/Health</span>
          </label>
          <label class="checkbox-item">
            <input type="checkbox" v-model="arts" class="form-checkbox" />
            <span>Arts (Visual, Music, Performing)</span>
          </label>
          <label class="checkbox-item">
            <input type="checkbox" v-model="technologyComputerScience" class="form-checkbox" />
            <span>Technology/Computer Science</span>
          </label>
          <label class="checkbox-item">
            <input type="checkbox" v-model="libraryInformationServices" class="form-checkbox" />
            <span>Library/Information Services</span>
          </label>
          <label class="checkbox-item">
            <input type="checkbox" v-model="counsellingStudentServices" class="form-checkbox" />
            <span>Counselling/Student Services</span>
          </label>
          <label class="checkbox-item">
            <input type="checkbox" v-model="administrationLeadership" class="form-checkbox" />
            <span>Administration/Leadership</span>
          </label>
          <label class="checkbox-item">
            <input type="checkbox" v-model="curriculumDevelopment" class="form-checkbox" />
            <span>Curriculum Development</span>
          </label>
          <label class="checkbox-item">
            <input
              type="checkbox"
              v-model="educationalTechnologyInstructionalDesign"
              class="form-checkbox"
            />
            <span>Educational Technology/Instructional Design</span>
          </label>
          <label class="checkbox-item">
            <input type="checkbox" v-model="earlyChildhoodEducation" class="form-checkbox" />
            <span>Early Childhood Education</span>
          </label>
        </div>
      </div>

      <!-- Grade Level -->
      <div class="form-group">
        <label class="form-label">Grade level(s)</label>
        <div class="radio-group">
          <label class="radio-item">
            <input type="radio" v-model="gradeLevel" value="pre-school" class="form-radio" />
            <span>Pre-School</span>
          </label>
          <label class="radio-item">
            <input type="radio" v-model="gradeLevel" value="k-8" class="form-radio" />
            <span>K-8</span>
          </label>
          <label class="radio-item">
            <input type="radio" v-model="gradeLevel" value="secondary" class="form-radio" />
            <span>Secondary</span>
          </label>
          <label class="radio-item">
            <input type="radio" v-model="gradeLevel" value="post-secondary" class="form-radio" />
            <span>Post-Secondary</span>
          </label>
          <label class="radio-item">
            <input type="radio" v-model="gradeLevel" value="all-grade-levels" class="form-radio" />
            <span>All Grade Levels</span>
          </label>
        </div>
      </div>

      <!-- Recognition and Compensation -->
      <div class="form-group">
        <label class="form-label">Recognition and Compensation*</label>
        <div class="radio-group">
          <label class="radio-item">
            <input type="radio" v-model="compensation" value="salary" class="form-radio" />
            <span>Salary</span>
          </label>
          <label class="radio-item">
            <input type="radio" v-model="compensation" value="hourly" class="form-radio" />
            <span>Hourly</span>
          </label>
          <label class="radio-item">
            <input type="radio" v-model="compensation" value="volunteer" class="form-radio" />
            <span>Volunteer</span>
          </label>
          <label class="radio-item">
            <input
              type="radio"
              v-model="compensation"
              value="professional-learning-credits"
              class="form-radio"
            />
            <span>Professional Learning Credits</span>
          </label>
        </div>
      </div>

      <!-- Years of Experience -->
      <div class="form-group">
        <label class="form-label">Years of experience required</label>
        <select v-model="yearsOfExperience" class="form-select" style="max-width: 300px">
          <option value="">Select</option>
          <option value="0-1">0-1 years</option>
          <option value="2-5">2-5 years</option>
          <option value="5-10">5-10 years</option>
          <option value="10+">10+ years</option>
        </select>
      </div>

      <!-- Certification Required -->
      <div class="form-group">
        <label class="form-label">Certification required</label>
        <div class="checkbox-grid">
          <label class="checkbox-item">
            <input type="checkbox" v-model="teachingLicense" class="form-checkbox" />
            <span>Teaching License</span>
          </label>
          <label class="checkbox-item">
            <input type="checkbox" v-model="subjectCertifications" class="form-checkbox" />
            <span>Subject Certifications</span>
          </label>
          <label class="checkbox-item">
            <input type="checkbox" v-model="otherCertification" class="form-checkbox" />
            <span>Other</span>
          </label>
        </div>
      </div>

      <!-- Qualifications -->
      <div class="form-group">
        <label class="form-label">Qualifications*</label>
        <textarea
          v-model="qualifications"
          placeholder="Placeholder text"
          rows="4"
          class="form-textarea"
        ></textarea>
      </div>
    </div>

    <!-- Navigation Buttons -->
    <div class="flex justify-between mt-8">
      <button @click="goBack" class="back-button">Back</button>
      <button @click="handleContinue" class="continue-button">Continue</button>
    </div>
  </div>
</template>

<style scoped>
@import '../assets/shared-form-styles.css';
</style>
