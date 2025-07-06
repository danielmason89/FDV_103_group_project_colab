<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const jobTitle = ref('')
const organizationName = ref('')
const organizationType = ref('')
const aboutOrganization = ref('')
const streetAddress = ref('')
const province = ref('')
const city = ref('')
const country = ref('')
const opportunityTypes = ref<string[]>([])

const characterCount = ref(0)

function updateCharacterCount() {
  characterCount.value = aboutOrganization.value.length
}

function handleOpportunityTypeChange(type: string) {
  const index = opportunityTypes.value.indexOf(type)
  if (index > -1) {
    opportunityTypes.value.splice(index, 1)
  } else {
    opportunityTypes.value.push(type)
  }
}

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
  <div class="max-w-6xl mx-auto p-6">
    <!-- Breadcrumb Navigation -->
    <div class="mb-8">
      <div class="flex items-center space-x-2 text-sm text-gray-600 mb-4">
        <span>&lt; breadcrumbs here</span>
      </div>

      <div class="breadcrumb-container">
        <div class="breadcrumb-step active">
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
        <div class="breadcrumb-step inactive last">
          <div class="breadcrumb-content">
            <div class="font-semibold">Job description</div>
            <div class="text-sm">and submission</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Title -->
    <h1 class="text-4xl font-bold text-teal-700 mb-8">Create a new job posting</h1>

    <!-- Form -->
    <div class="form-container">
      <!-- Job Title -->
      <div class="form-group">
        <label class="form-label">Job title*</label>
        <input type="text" v-model="jobTitle" placeholder="Placeholder text" class="form-input" />
      </div>

      <!-- Organization Name and Type -->
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">Organization name*</label>
          <input
            type="text"
            v-model="organizationName"
            placeholder="Placeholder text"
            class="form-input"
          />
        </div>
        <div class="form-group">
          <label class="form-label">Organization type*</label>
          <select v-model="organizationType" class="form-select">
            <option value="">Select</option>
            <option value="nonprofit">Non-profit</option>
            <option value="corporate">Corporate</option>
            <option value="government">Government</option>
            <option value="educational">Educational</option>
          </select>
        </div>
      </div>

      <!-- About the Organization -->
      <div class="form-group">
        <label class="form-label">About the organization</label>
        <textarea
          v-model="aboutOrganization"
          @input="updateCharacterCount"
          placeholder="Placeholder text"
          rows="6"
          class="form-textarea"
        ></textarea>
        <div class="character-count">{{ characterCount }}/0</div>
      </div>

      <!-- Street Address and Province -->
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">Street address*</label>
          <input
            type="text"
            v-model="streetAddress"
            placeholder="Placeholder text"
            class="form-input"
          />
        </div>
        <div class="form-group">
          <label class="form-label">Province*</label>
          <select v-model="province" class="form-select">
            <option value="">Select</option>
            <option value="ontario">Ontario</option>
            <option value="quebec">Quebec</option>
            <option value="bc">British Columbia</option>
            <option value="alberta">Alberta</option>
          </select>
        </div>
      </div>

      <!-- City and Country -->
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">City*</label>
          <input type="text" v-model="city" placeholder="Placeholder text" class="form-input" />
        </div>
        <div class="form-group">
          <label class="form-label">Country*</label>
          <select v-model="country" class="form-select">
            <option value="">Select</option>
            <option value="canada">Canada</option>
            <option value="usa">United States</option>
            <option value="uk">United Kingdom</option>
          </select>
        </div>
      </div>

      <!-- Opportunity Type Section -->
      <div class="form-group">
        <label class="form-label">Opportunity type*</label>
        <div class="checkbox-grid">
          <label class="checkbox-item">
            <input
              type="checkbox"
              value="full-time"
              @change="handleOpportunityTypeChange('full-time')"
              class="form-checkbox"
            />
            <span>Full-time</span>
          </label>
          <label class="checkbox-item">
            <input
              type="checkbox"
              value="contract"
              @change="handleOpportunityTypeChange('contract')"
              class="form-checkbox"
            />
            <span>Contract/temporary/seasonal</span>
          </label>
          <label class="checkbox-item">
            <input
              type="checkbox"
              value="mentorship"
              @change="handleOpportunityTypeChange('mentorship')"
              class="form-checkbox"
            />
            <span>Mentorship program</span>
          </label>
          <label class="checkbox-item">
            <input
              type="checkbox"
              value="part-time"
              @change="handleOpportunityTypeChange('part-time')"
              class="form-checkbox"
            />
            <span>Part-time</span>
          </label>
          <label class="checkbox-item">
            <input
              type="checkbox"
              value="supply"
              @change="handleOpportunityTypeChange('supply')"
              class="form-checkbox"
            />
            <span>Supply/substitute teaching</span>
          </label>
          <label class="checkbox-item">
            <input
              type="checkbox"
              value="professional"
              @change="handleOpportunityTypeChange('professional')"
              class="form-checkbox"
            />
            <span>Professional development</span>
          </label>
          <label class="checkbox-item">
            <input
              type="checkbox"
              value="volunteer"
              @change="handleOpportunityTypeChange('volunteer')"
              class="form-checkbox"
            />
            <span>Volunteer</span>
          </label>
          <label class="checkbox-item">
            <input
              type="checkbox"
              value="internship-paid"
              @change="handleOpportunityTypeChange('internship-paid')"
              class="form-checkbox"
            />
            <span>Internship (paid)</span>
          </label>
          <label class="checkbox-item">
            <input
              type="checkbox"
              value="internship-unpaid"
              @change="handleOpportunityTypeChange('internship-unpaid')"
              class="form-checkbox"
            />
            <span>Internship (unpaid)</span>
          </label>
          <label class="checkbox-item">
            <input
              type="checkbox"
              value="hybrid"
              @change="handleOpportunityTypeChange('hybrid')"
              class="form-checkbox"
            />
            <span>Hybrid</span>
          </label>
          <label class="checkbox-item">
            <input
              type="checkbox"
              value="remote"
              @change="handleOpportunityTypeChange('remote')"
              class="form-checkbox"
            />
            <span>Remote</span>
          </label>
          <label class="checkbox-item">
            <input
              type="checkbox"
              value="consulting"
              @change="handleOpportunityTypeChange('consulting')"
              class="form-checkbox"
            />
            <span>Consulting</span>
          </label>
          <label class="checkbox-item">
            <input
              type="checkbox"
              value="speaking"
              @change="handleOpportunityTypeChange('speaking')"
              class="form-checkbox"
            />
            <span>Speaking engagement</span>
          </label>
          <label class="checkbox-item">
            <input
              type="checkbox"
              value="in-person"
              @change="handleOpportunityTypeChange('in-person')"
              class="form-checkbox"
            />
            <span>In person</span>
          </label>
        </div>
      </div>
    </div>

    <!-- Continue Button -->
    <div class="flex justify-end mt-8">
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

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
}

@media (max-width: 768px) {
  .form-row {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
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

.form-input::placeholder {
  color: #9ca3af;
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

.form-textarea::placeholder {
  color: #9ca3af;
}

/* Character Count */
.character-count {
  text-align: right;
  font-size: 0.75rem;
  color: #6b7280;
  margin-top: 0.25rem;
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

.form-checkbox:hover {
  border-color: #059669;
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

/* Fallback for browsers that don't support clip-path */
@supports not (clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%)) {
  .breadcrumb-step {
    clip-path: none;
    border-radius: 4px;
  }

  .breadcrumb-step::after {
    content: '';
    position: absolute;
    top: 50%;
    right: -8px;
    width: 0;
    height: 0;
    border-left: 8px solid;
    border-top: 8px solid transparent;
    border-bottom: 8px solid transparent;
    transform: translateY(-50%);
    z-index: 2;
  }

  .breadcrumb-step.active::after {
    border-left-color: #0f766e;
  }

  .breadcrumb-step.inactive::after {
    border-left-color: #e5e7eb;
  }

  .breadcrumb-step.last::after {
    display: none;
  }
}

/* Continue Button */
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
</style>
