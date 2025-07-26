<script setup lang="ts">
import applyButtonComponent from '@/components/applyButtonComponent.vue'
import opportunityTypeComponent from '@/components/opportunityTypeComponent.vue'
import certificationComponent from '@/components/certificationComponent.vue'
import SectionCard from '@/components/SectionCard.vue'
import jobCardDetailsComponent from '@/components/jobCardDetailsComponent.vue'
import subjectAreacomponent from '@/components/subjectAreacomponent.vue'
import '../assets/base.css'
import jobData from "../data/db.json"

console.log('Loaded jobs:', jobData)

import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import type { JobSubmission } from '../types/job'

const router = useRouter()

const job = ref<{
  jobTitle: string
  organizationName: string
  category?: string
  gradeLevel: string[]
  certifications: string[]
  opportunityTypes: string[]
  compensation: string
  applicationDeadline: string
  jobDescription: string
  qualifications: string
  aboutOrganization: string
  organizationType: string
  applicationLink: string
  streetAddress: string
  city: string
  province: string
  country: string
  yearsOfExperience: string
  subjectAreas: string[]
} | null>(null)

// Helper function to normalize `JobSubmission` into a consistent format
function mapJobData(data: JobSubmission) {
  return {
    jobTitle: data.jobTitle || 'Untitled Job',
    organizationName: data.organizationName || 'Unknown Org',
    category: data.category || 'General',
    gradeLevel: Array.isArray(data.gradeLevel)
      ? data.gradeLevel
      : typeof data.gradeLevel === 'string'
        ? [data.gradeLevel]
        : [],
    certifications: Array.isArray(data.certifications)
      ? data.certifications
      : typeof data.certifications === 'string'
        ? [data.certifications]
        : [],
    opportunityTypes: Array.isArray(data.opportunityTypes)
      ? data.opportunityTypes
      : typeof data.opportunityTypes === 'string'
        ? [data.opportunityTypes]
        : [],
    compensation: data.compensation || 'N/A',
    applicationDeadline: data.applicationDeadline || 'N/A',
    jobDescription: data.jobDescription || 'N/A',
    qualifications: data.qualifications || 'N/A',
    aboutOrganization: data.aboutOrganization || 'N/A',
    organizationType: data.organizationType || 'N/A',
    applicationLink: data.applicationLink || '#',
    streetAddress: Array.isArray(data.streetAddress)
      ? data.streetAddress.join(', ')
      : typeof data.streetAddress === 'string'
        ? data.streetAddress
        : '',
    city: Array.isArray(data.city)
      ? data.city.join(', ')
      : typeof data.city === 'string'
        ? data.city
        : '',
    province: Array.isArray(data.province)
      ? data.province.join(', ')
      : typeof data.province === 'string'
        ? data.province
        : '',
    country: Array.isArray(data.country)
      ? data.country.join(', ')
      : typeof data.country === 'string'
        ? data.country
        : '',
    yearsOfExperience: data.yearsOfExperience || '',
    subjectAreas: Array.isArray(data.subjectAreas)
      ? data.subjectAreas
      : typeof data.subjectAreas === 'string'
        ? [data.subjectAreas]
        : []
  }
}

// Get the most recent job submission from localStorage
try {
  const saved = localStorage.getItem('jobSubmissions')
  if (saved) {
    const parsed = JSON.parse(saved)

    const latest = parsed[parsed.length - 1]
    job.value = {
    jobTitle: latest.jobTitle,
    organizationName: latest.organizationName,
    category: latest.category || 'General',
    gradeLevel: latest.gradeLevel || [],
    certifications: latest.certifications || [],
    opportunityTypes: latest.opportunityTypes || [],
    compensation: latest.compensation || 'N/A',
    applicationDeadline: latest.applicationDeadline || 'N/A',
    jobDescription: latest.jobDescription || 'N/A',
    qualifications: latest.qualifications || 'N/A',
    aboutOrganization: latest.aboutOrganization || 'N/A',
    organizationType: latest.organizationType || 'N/A',
    applicationLink: latest.applicationLink || '#',
    streetAddress: latest.streetAddress || '',
    city: latest.city || '',
    province: latest.province || '',
    country: latest.country || '',
    yearsOfExperience: latest.yearsOfExperience || '',
    subjectAreas: latest.subjectAreas || [],
    }
    } else {
      // Redirect if no saved submissions are found
      console.warn('No job submissions found in localStorage.')
      router.push({ name: 'page1' })
    }
} catch (err) {
  // Redirect on parse failure
  console.error('Failed to load job submission:', err)
  router.push({ name: 'page1' })
}

// Extra fallback check (redundant but defensive)
if (!job.value) {
  console.warn('Missing jobSubmission. Redirecting to homepage.')
  router.push({ name: 'page1' })
}

// On component mount, load the selected job from localStorage
onMounted(() => {
  try {
    const selectedJob = localStorage.getItem('selectedJob')
    const jobSubmissions = localStorage.getItem('jobSubmissions')

    if (selectedJob) {
      job.value = mapJobData(JSON.parse(selectedJob))
      return
    }

    if (jobSubmissions) {
      const parsed = JSON.parse(jobSubmissions)
      if (parsed.length > 0) {
        job.value = mapJobData(parsed[parsed.length - 1])
        return
      }
    }

     // Fallback: redirect if nothing can be loaded
    console.warn('No job data available, redirecting to Page1')
    router.push({ name: 'page1' })
  } catch (err) {
    console.error('Error loading job details:', err)
    router.push({ name: 'page1' })
  }
})
</script>

<template>
  <main class="bg-[#f5f5f5] py-10 px-4 md:px-8 card" aria-label="Job Details Page">
    <div class="max-w-5xl mx-auto space-y-8">

      <!-- Main job header section with title and apply button -->
      <div class="p-6 space-y-4 bg-white shadow-md rounded-xl card">
        <div class="flex flex-col justify-between md:flex-row md:items-center">
          <div>
            <p class="text-3xl font-bold">{{ job?.jobTitle || 'Job Title' }}</p>
            <p class="text-3xl">{{ job?.organizationName || 'Company Name' }}</p>
          </div>
          <br />
          <applyButtonComponent
            :href="job?.applicationLink"
            class="flex justify-center align-center"
            text="Apply Now!"
            aria-label="Apply for this teaching job"
          />
        </div>

         <!-- Job details section with key metadata -->
        <div class="job-card-details">
          <jobCardDetailsComponent
            :jobTitle="job?.jobTitle || ''"
            :companyName="job?.organizationName || ''"
            :category="job?.category || ''"
            :gradeLevel="job?.gradeLevel || ''"
            :organizationType="job?.organizationType || ''"
            :yearsOfExperience="job?.yearsOfExperience || ''"
            :compensation="job?.compensation || ''"
            :applicationDeadline="job?.applicationDeadline || ''"
            :subjectAreas="job?.subjectAreas || ''"
          />
        </div>
      </div>

      <!-- Job opportunity types displayed as badges -->
      <div class="px-6 py-6 bg-white shadow-md rounded-xl md:px-8 md:py-8 card">
        <h2 class="mb-2 text-lg font-extrabold">Opportunity Type</h2>
        <SectionCard class="mb-4 font-semibold">
          <opportunityTypeComponent :opportunityTypes="job?.opportunityTypes || []" />
        </SectionCard>
      </div>

      <!-- Subject areas for the job -->
      <div class="px-6 py-6 bg-white shadow-md rounded-xl md:px-8 md:py-8 card">
        <h2 class="mb-2 text-lg font-extrabold">Subject Area</h2>
        <SectionCard class="mb-4 font-semibold">
          <subjectAreacomponent grid :subjectAreas="job?.subjectAreas || []" />
        </SectionCard>
      </div>

      <!-- Certifications required for the position -->
      <div class="px-6 py-6 bg-white shadow-md rounded-xl md:px-8 md:py-8 card">
        <h2 class="mb-2 text-lg font-extrabold">Certifications Required</h2>
        <SectionCard class="mb-4 font-semibold">
          <certificationComponent grid :certifications="job?.certifications || []" />
        </SectionCard>
      </div>

      <!-- About the organization text block -->
      <div class="px-6 py-6 bg-white shadow-md rounded-xl md:px-8 md:py-8 card">
        <h2 class="mb-2 text-lg font-extrabold">About the Organization</h2>
        <p>
          <SectionCard class="mb-2 text-sm font-normal">
            <p>
              {{ job?.aboutOrganization }}
            </p>
          </SectionCard>
        </p>
      </div>

      <!-- Full job description and location -->
      <div class="px-6 py-6 bg-white shadow-md rounded-xl md:px-8 md:py-8 card">
        <h2 class="mb-2 text-lg font-extrabold">Job Description</h2>
        <div class="mb-2 text-sm font-normal">
          <p>
            {{ job?.jobDescription || 'No job description provided.' }}
          </p>
          <br />
          <p>
            Location: {{ job?.city }} - {{ job?.province }}, {{ job?.country }}
            <br />
            Job Type: {{ job?.opportunityTypes?.join(', ') }}
          </p>
        </div>
      </div>

      <!-- Qualifications required -->
      <div class="px-6 py-6 bg-white shadow-md rounded-xl md:px-8 md:py-8 card">
        <h2 class="mb-2 text-lg font-extrabold">Qualifications</h2>
        <div class="mb-2 text-sm font-normal">
          <p>
            {{ job?.qualifications }}
          </p>
          <br />
          <p>
            Teaching Experience: {{ job?.yearsOfExperience }}
          </p>
        </div>
      </div>

      <!-- Final call-to-action to apply -->
      <div class="px-6 py-6 bg-white shadow-md rounded-xl md:px-8 md:py-8 card">
        <div class="flex justify-center">
          <applyButtonComponent :href="job?.applicationLink" text="Apply Now!" aria-label="Apply for this teaching job" />
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
/* Standard heading and paragraph color tokens */
h2 {
  color: var(--heading);
}
p {
  color: var(--subHeading);
}

/* Layout grid for badge details (e.g., grade, category, etc.) */
.job-card-details {
  display: grid;
  grid-gap: 1px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, auto);
}

/* Base card styling for visual consistency */
.card {
  padding: 1rem;
  margin: 1rem 0rem;
  width: 100%;
}
</style>
