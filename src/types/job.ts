export interface JobSubmission {
  id: string
  jobTitle: string
  companyName: string
  category: string
  gradeLevel: string
  subjectAreas: string | [string]
  yearsOfExperience: string
  compensation: string
  applicationDeadline: string
  jobDescription: string
  qualifications: string
  certifications: string[]
  opportunityTypes: string[]
  applicationLink: string
  streetAddress: string[]
  city: string
  province: string
  country: string
  aboutOrganization: string
  organizationName: string
  organizationType: string
}
