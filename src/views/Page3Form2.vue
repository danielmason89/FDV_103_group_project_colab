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
  // Simple validation
  if (!gradeLevel.value) {
    alert('Please select a grade level')
    return
  }
  if (!compensation.value) {
    alert('Please select recognition and compensation')
    return
  }
  if (!yearsOfExperience.value) {
    alert('Please select years of experience required')
    return
  }
  if (!qualifications.value) {
    alert('Please enter qualifications')
    return
  }

  // If validation passes, go to next page (you can create Page3Form3.vue later)
  alert('Form completed! (Next page not created yet)')
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
/* Form Container */
.form-container {
  background-color: #f0f9ff;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 2rem;
  margin-bottom: 2rem;
}

/* Form Groups */
.form-group {
  margin-bottom: 1.5rem;
}

/* Labels */
.form-label {
  display: block;
  font-weight: 500;
  font-size: 0.875rem;
  color: #374151;
  margin-bottom: 0.5rem;
}

/* Input Fields */
.form-input {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 4px;
  font-size: 0.875rem;
  color: #374151;
  background-color: #ffffff;
  transition: border-color 0.2s;
}

.form-input:focus {
  outline: none;
  border-color: #059669;
  box-shadow: 0 0 0 2px rgba(5, 150, 105, 0.1);
}

/* Select Dropdown */
.form-select {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 4px;
  font-size: 0.875rem;
  color: #374151;
  background-color: #ffffff;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e");
  background-position: right 0.5rem center;
  background-repeat: no-repeat;
  background-size: 1.5em 1.5em;
  padding-right: 2.5rem;
  appearance: none;
  transition: border-color 0.2s;
}

.form-select:focus {
  outline: none;
  border-color: #059669;
  box-shadow: 0 0 0 2px rgba(5, 150, 105, 0.1);
}

/* Textarea */
.form-textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 4px;
  font-size: 0.875rem;
  color: #374151;
  background-color: #ffffff;
  resize: vertical;
  min-height: 120px;
  transition: border-color 0.2s;
}

.form-textarea:focus {
  outline: none;
  border-color: #059669;
  box-shadow: 0 0 0 2px rgba(5, 150, 105, 0.1);
}

/* Checkbox Grid */
.checkbox-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

@media (max-width: 768px) {
  .checkbox-grid {
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }
}

/* Checkbox Items */
.checkbox-item {
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  color: #374151;
  cursor: pointer;
  padding: 0.25rem 0;
}

.checkbox-item span {
  margin-left: 0.5rem;
}

/* Checkbox Styling */
.form-checkbox {
  width: 1rem;
  height: 1rem;
  color: #059669;
  border: 1px solid #d1d5db;
  border-radius: 2px;
  cursor: pointer;
  transition: all 0.2s;
}

.form-checkbox:checked {
  background-color: #059669;
  border-color: #059669;
}

.form-checkbox:focus {
  outline: none;
  box-shadow: 0 0 0 2px rgba(5, 150, 105, 0.1);
}

/* Radio Button Groups */
.radio-group {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1rem;
}

/* Radio Items */
.radio-item {
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  color: #374151;
  cursor: pointer;
  padding: 0.25rem 0;
}

.radio-item span {
  margin-left: 0.5rem;
}

/* Radio Button Styling */
.form-radio {
  width: 1rem;
  height: 1rem;
  color: #059669;
  border: 1px solid #d1d5db;
  cursor: pointer;
  transition: all 0.2s;
}

.form-radio:checked {
  background-color: #059669;
  border-color: #059669;
}

.form-radio:focus {
  outline: none;
  box-shadow: 0 0 0 2px rgba(5, 150, 105, 0.1);
}

/* Breadcrumb Navigation */
.breadcrumb-container {
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
}

.breadcrumb-step {
  position: relative;
  padding: 1rem 2rem;
  margin-right: 1rem;
  height: 60px;
  display: flex;
  align-items: center;
  clip-path: polygon(0 0, calc(100% - 15px) 0, 100% 50%, calc(100% - 15px) 100%, 0 100%, 15px 50%);
  min-width: 200px;
}

.breadcrumb-step.active {
  background-color: #0f766e;
  color: white;
}

.breadcrumb-step.inactive {
  background-color: #e5e7eb;
  color: #6b7280;
}

.breadcrumb-step.last {
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%, 15px 50%);
}

.breadcrumb-step:first-child {
  clip-path: polygon(0 0, calc(100% - 15px) 0, 100% 50%, calc(100% - 15px) 100%, 0 100%);
  margin-left: 0;
}

.breadcrumb-content {
  z-index: 1;
  position: relative;
}

.breadcrumb-content .font-semibold {
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.2;
}

.breadcrumb-content .text-sm {
  font-size: 0.75rem;
  opacity: 0.8;
  line-height: 1.2;
}

/* Navigation Buttons */
.continue-button {
  background-color: #22c55e;
  color: white;
  font-weight: 600;
  padding: 0.75rem 2rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.2s;
}

.continue-button:hover {
  background-color: #16a34a;
}

.continue-button:focus {
  outline: none;
  box-shadow: 0 0 0 2px rgba(34, 197, 94, 0.3);
}

.back-button {
  background-color: #6b7280;
  color: white;
  font-weight: 600;
  padding: 0.75rem 2rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.2s;
}

.back-button:hover {
  background-color: #4b5563;
}

.back-button:focus {
  outline: none;
  box-shadow: 0 0 0 2px rgba(107, 114, 128, 0.3);
}
</style>
