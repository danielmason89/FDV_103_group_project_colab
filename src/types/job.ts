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
  aboutOrganization: string
}
