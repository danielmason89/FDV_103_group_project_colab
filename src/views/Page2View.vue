<script setup lang="ts">
// import BreadcrumbNavigation from '@/components/BreadcrumbNavigation.vue'
import applyButtonComponent from '@/components/applyButtonComponent.vue'
import opportunityTypeComponent from '@/components/opportunityTypeComponent.vue'
import SubjectAreaFilter from '@/components/SubjectAreaFilter.vue'
import certificationComponent from '@/components/certificationComponent.vue'
import SectionCard from '@/components/SectionCard.vue'
import '../assets/base.css'
</script>

<template>
  <main class="bg-[#f5f5f5] py-6 px-4" aria-label="Job Details Page">
    <div class="max-w-5xl mx-auto space-y-6">

         <!-- Breadcrumb -->
      <!-- <BreadcrumbNavigation :currentStep="2" /> -->

      <!-- Header Card -->
      <div class="p-6 space-y-4 bg-white shadow-md rounded-xl">
        <div class="flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h1 class="text-2xl font-bold text-gray-800">Arts School Teacher</h1>
            <p class="text-gray-500">CoLab Education</p>
          </div>
          <applyButtonComponent text="Apply Now!" aria-label="Apply for this teaching job" />
        </div>

        <!-- Badges -->
        <div class="flex flex-wrap gap-2">
          <span class="badge" style="background-color: var(--campBadge); color: var(--campText)"
            >Camp, Child Care</span
          >
          <span class="badge">All Grade Levels</span>
          <span class="badge">Years of Experience: Entry Level</span>
          <span class="badge">Recognition & Compensation: Hourly, Salary</span>
          <span class="badge">Application Deadline: dd/mm/yyyy</span>
        </div>
      </div>

      <!-- Opportunity Type -->
      <div class="p-6 bg-white shadow-md rounded-xl">
        <SectionCard class="mb-4 text-lg font-semibold text-gray-700" title="Opportunity Type">
          <opportunityTypeComponent />
        </SectionCard>
      </div>

      <!-- Subject Area -->
      <div class="p-6 bg-white shadow-md rounded-xl">
        <SectionCard class="mb-4 text-lg font-semibold text-gray-700" title="Subject Area">
          <SubjectAreaFilter grid />
        </SectionCard>
      </div>

      <!-- Certifications -->
      <div class="p-6 bg-white shadow-md rounded-xl">
        <SectionCard class="mb-4 text-lg font-semibold text-gray-700" title="Certifications Required">
          <certificationComponent />
        </SectionCard>
      </div>

      <!-- About the Organization -->
      <div class="p-6 bg-white shadow-md rounded-xl">
        <p class="text-gray-600">
          <SectionCard class="mb-2 text-lg font-semibold text-gray-700" title="About the Organization">
            CoLab connects educators across schools to share resources, build communities, and
            accelerate widespread initiatives...
          </SectionCard>
        </p>
      </div>

      <!-- Job Description -->
      <div class="p-6 bg-white shadow-md rounded-xl">
        <h2 class="mb-2 text-lg font-semibold text-gray-700">Job Description</h2>
        <p class="text-gray-600">
          CoLab is looking for an enthusiastic and dedicated Middle School Science Teacher to join
          our academic team...
        </p>
      </div>

      <!-- Qualifications -->
      <div class="p-6 bg-white shadow-md rounded-xl">
        <h2 class="mb-2 text-lg font-semibold text-gray-700">Qualifications</h2>
        <p class="text-gray-600">
          Bachelor's degree or higher in Education. 1–3 years of classroom experience is
          preferred...
        </p>
      </div>

      <!-- Final Apply Button -->
      <div class="flex justify-center">
        <applyButtonComponent text="Apply Now!" aria-label="Apply for this teaching job" />
      </div>
    </div>
  </main>
</template>

<style scoped>
.badge {
  font-size: 0.875rem;
  font-weight: 500;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  background-color: #e5e7eb;
  color: #1f2937;
}
</style>
