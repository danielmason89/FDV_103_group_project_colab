<script setup lang="ts">
// import BreadcrumbNavigation from '@/components/BreadcrumbNavigation.vue'
import applyButtonComponent from '@/components/applyButtonComponent.vue'
import opportunityTypeComponent from '@/components/opportunityTypeComponent.vue'
import certificationComponent from '@/components/certificationComponent.vue'
import SectionCard from '@/components/SectionCard.vue'
import jobCardDetailsComponent from '@/components/jobCardDetailsComponent.vue'
import subjectAreacomponent from '@/components/subjectAreacomponent.vue'
import '../assets/base.css'
</script>

<template>
  <main class="bg-[#f5f5f5] py-10 px-4 md:px-8 card" aria-label="Job Details Page">
    <div class="max-w-5xl mx-auto space-y-8">
      <!-- Breadcrumb -->
      <!-- <BreadcrumbNavigation :currentStep="2" /> -->

      <!-- Header Card -->
      <div class="p-6 space-y-4 bg-white shadow-md rounded-xl card">
        <div class="flex flex-col justify-between md:flex-row md:items-center">
          <div>
            <p class="text-3xl font-bold">Arts School Teacher</p>
            <p class="text-3xl">CoLab Education</p>
          </div>
          <br/>
          <applyButtonComponent class="flex justify-center align-center" text="Apply Now!" aria-label="Apply for this teaching job" />
        </div>

        <!-- Badges -->
        <div class="job-card-details">
          <jobCardDetailsComponent />
        </div>
      </div>

      <!-- Opportunity Type -->
      <div class="px-6 py-6 bg-white shadow-md rounded-xl md:px-8 md:py-8 card">
        <h2 class="mb-2 text-lg font-extrabold">Opportunity Type</h2>
        <SectionCard class="mb-4 font-semibold">
          <opportunityTypeComponent />
        </SectionCard>
      </div>

      <!-- Subject Area -->
      <div class="px-6 py-6 bg-white shadow-md rounded-xl md:px-8 md:py-8 card">
        <h2 class="mb-2 text-lg font-extrabold">Subject Area</h2>
        <SectionCard class="mb-4 font-semibold">
          <subjectAreacomponent grid />
        </SectionCard>
      </div>

      <!-- Certifications -->
      <div class="px-6 py-6 bg-white shadow-md rounded-xl md:px-8 md:py-8 card">
        <h2 class="mb-2 text-lg font-extrabold">Certifications Required</h2>
        <SectionCard class="mb-4 font-semibold">
          <certificationComponent />
        </SectionCard>
      </div>

      <!-- About the Organization -->
      <div class="px-6 py-6 bg-white shadow-md rounded-xl md:px-8 md:py-8 card">
        <h2 class="mb-2 text-lg font-extrabold">About the Organization</h2>
        <p>
          <SectionCard class="mb-2 text-sm font-normal">
            <p>
              CoLab connects educators across schools to share resources, build communities, and
              accelerate widespread initiatives. Turning isolated teachers into collaborative
              innovators.
            </p>
            <br />
            <p>
              Whether you're a teacher seeking meaningful professional connections or a leader
              building organizational capacity, CoLab provides the collaborative platform that
              transforms individual excellence into system-wide impact. Join the network where great
              teaching spreads.
            </p>
          </SectionCard>
        </p>
      </div>

      <!-- Job Description -->
      <div class="px-6 py-6 bg-white shadow-md rounded-xl md:px-8 md:py-8 card">
        <h2 class="mb-2 text-lg font-extrabold">Job Description</h2>
        <div class="mb-2 text-sm font-normal">
          <p>
            Colab is looking for an enthusiastic and dedicated Middle School Science Teacher to join
            our academic team for the upcoming school year. We're seeking a passionate educator who
            can inspire a love for scientific inquiry and critical thinking in students aged 11-14.
            This role offers the opportunity to shape young minds, foster curiosity, and contribute
            to a vibrant school community.
          </p>
          <br />
          <p>
            Location: Ontario (or relevant region)]
            <br />
            Job Type: Full-time, Hybrid
            <br />
            Reports To: School Principal / Head of Department
          </p>
        </div>
      </div>

      <!-- Qualifications -->
      <div class="px-6 py-6 bg-white shadow-md rounded-xl md:px-8 md:py-8 card">
        <h2 class="mb-2 text-lg font-extrabold">Qualifications</h2>
        <div class="mb-2 text-sm font-normal">
          <p>
            Educational Background: Bachelor's degree or higher in Education. A Master's degree
            and/or a teaching credential/license is highly preferred.
          </p>
          <br />
          <p>
            Teaching Experience: Minimum of 1-3 years of demonstrable experience in a classroom
            setting, preferably within an innovative or technology-integrated learning environment.
            Experience with project-based learning, inquiry-based learning, or blended learning
            models is a significant asset.
          </p>
        </div>
      </div>

      <!-- Final Apply Button -->
      <div class="px-6 py-6 bg-white shadow-md rounded-xl md:px-8 md:py-8 card">
        <div class="flex justify-center">
          <applyButtonComponent text="Apply Now!" aria-label="Apply for this teaching job" />
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
h2 {
  color: var(--heading);
}

p {
  color: var(--subHeading);
}

.job-card-details {
  display: grid;
  grid-gap: 1px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, auto);
}

.card {
  padding: 1rem;
  margin: 1rem 0rem;
  width: 100%;
}
</style>
