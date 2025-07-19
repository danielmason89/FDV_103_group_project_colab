<script setup lang="ts">

import { ref } from 'vue'

// import BreadcrumbNavigation from '@/components/BreadcrumbNavigation.vue'
import applyButtonComponent from '@/components/applyButtonComponent.vue'
import opportunityTypeComponent from '@/components/opportunityTypeComponent.vue'
import SubjectAreaFilter from '@/components/SubjectAreaFilter.vue'
import certificationComponent from '@/components/certificationComponent.vue'
import SectionCard from '@/components/SectionCard.vue'
import '../assets/base.css'

const badges = [
  { label: 'Camp, Child Care', bg: 'var(--campBadge)', text: 'var(--campText)' },
  { label: 'All Grade Levels' },
  { label: 'Years of Experience: Entry Level' },
  { label: 'Recognition & Compensation: Hourly, Salary' },
  { label: 'Application Deadline: dd/mm/yyyy' },
]

const selectedSubjects = ref<string[]>([])

function updateSubjects(subjects: string[]) {
  selectedSubjects.value = subjects
  console.log('Selected subjects:', subjects)
}
</script>

<template>
  <main class="bg-[#f5f5f5] py-10 px-4 md:px-8 card" aria-label="Job Details Page">
    <div class="max-w-5xl mx-auto space-y-8">
      <!-- Breadcrumb -->
      <!-- <BreadcrumbNavigation :currentStep="2" /> -->

      <!-- Header Card -->
      <div class="p-6 space-y-4 bg-white shadow-md rounded-xl">
        <div class="flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h1 class="text-3xl font-bold">Arts School Teacher</h1>
            <p class="text-3xl">CoLab Education</p>
          </div>
          <applyButtonComponent text="Apply Now!" aria-label="Apply for this teaching job" />
        </div>

        <!-- Badges -->
        <div class="flex flex-wrap gap-3">
          <span
            v-for="(badge, idx) in badges"
            :key="idx"
            class="px-4 py-1.5 text-sm font-medium rounded-full"
            :style="{
              backgroundColor: badge.bg || '#e5e7eb',
              color: badge.text || '#1f2937',
            }"
          >
            {{ badge.label }}
          </span>
        </div>
      </div>
      <!-- Opportunity Type -->
      <div class="px-6 py-6 bg-white shadow-md rounded-xl md:px-8 md:py-8 card">
        <SectionCard class="mb-4 text-lg font-semibold text-gray-700" title="Opportunity Type">
          <opportunityTypeComponent />
        </SectionCard>
      </div>

      <!-- Subject Area -->
      <div class="px-6 py-6 bg-white shadow-md rounded-xl md:px-8 md:py-8">
        <SectionCard class="mb-4 text-lg font-semibold text-gray-700" title="Subject Area">
          <SubjectAreaFilter grid @filter-changed="updateSubjects" />
        </SectionCard>
      </div>

      <!-- Certifications -->
      <div class="px-6 py-6 bg-white shadow-md rounded-xl md:px-8 md:py-8 card">
        <h2 class="mb-2 text-lg font-bold">Certifications Required</h2>
        <SectionCard
          class="mb-4 text-lg font-semibold text-gray-700"
        >
          <certificationComponent />
        </SectionCard>
      </div>

      <!-- About the Organization -->
      <div class="px-6 py-6 bg-white shadow-md rounded-xl md:px-8 md:py-8 card">
        <h2 class="mb-2 text-lg font-bold">About the Organization</h2>
        <p class="text-gray-600">
          <SectionCard
            class="mb-2 text-sm font-normal"
          >
            <p>
              CoLab connects educators across schools to share resources, build communities, and accelerate widespread initiatives. Turning isolated teachers into collaborative innovators.
            </p>
            <p>
              Whether you're a teacher seeking meaningful professional connections or a leader building organizational capacity, CoLab provides the collaborative platform that transforms individual excellence into system-wide impact. Join the network where great teaching spreads.
            </p>
          </SectionCard>
        </p>
      </div>

      <!-- Job Description -->
      <div class="px-6 py-6 bg-white shadow-md rounded-xl md:px-8 md:py-8 card">
        <h2 class="mb-2 text-lg font-bold">Job Description</h2>
        <div class="mb-2 text-sm font-normal">
          <p>
            Colab is looking for an enthusiastic and dedicated Middle School Science Teacher to join our academic team for the upcoming school year. We're seeking a passionate educator who can inspire a love for scientific inquiry and critical thinking in students aged 11-14. This role offers the opportunity to shape young minds, foster curiosity, and contribute to a vibrant school community.
          </p>
          <p>
            Location: Ontario (or relevant region)]
            <br/>
            Job Type: Full-time, Hybrid
            <br/>
            Reports To: School Principal / Head of Department
          </p>
        </div>
      </div>

      <!-- Qualifications -->
      <div class="px-6 py-6 bg-white shadow-md rounded-xl md:px-8 md:py-8 card">
        <h2 class="mb-2 text-lg font-bold text-gray-700">Qualifications</h2>
        <div class="mb-2 text-sm font-normal">
          <p>
            Educational Background: Bachelor's degree or higher in Education. A Master's degree and/or a teaching credential/license is highly preferred.
          </p>
          <p>
            Teaching Experience: Minimum of 1-3 years of demonstrable experience in a classroom setting, preferably within an innovative or technology-integrated learning environment. Experience with project-based learning, inquiry-based learning, or blended learning models is a significant asset.
          </p>
        </div>
      </div>

      <!-- Final Apply Button -->
       <div class="px-6 py-6 bg-white shadow-md rounded-xl md:px-8 md:py-8 card">
         <div class="flex justify-evenly align-center">
           <applyButtonComponent class="apply-button" text="Apply Now!" aria-label="Apply for this teaching job" />
          </div>
        </div>
      </div>
  </main>
</template>

<style scoped>

.card {
  padding: 1rem;
  margin: 1rem 0rem;
}

.apply-button {
  width: 50%;
  justify-content: space-evenly;
}

.apply-button:hover {
  background-color: #add9c4;
  cursor: pointer;
}
</style>
