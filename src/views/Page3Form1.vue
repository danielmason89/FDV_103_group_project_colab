<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// Reset scroll position when component mounts
onMounted(() => {
  const contentArea = document.querySelector('.content-area')
  if (contentArea) {
    contentArea.scrollTop = 0
  }
})

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
  <div class="max-w-6xl mx-auto">
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
@import '../assets/shared-form-styles.css';
</style>
