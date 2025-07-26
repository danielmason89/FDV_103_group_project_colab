import { toTypedSchema } from '@vee-validate/yup'
import * as yup from 'yup'

export const step1Yup = yup.object({
  jobTitle: yup.string().required('Job title is required.'),
  organizationName: yup.string().required('Organization name is required.'),
  organizationType: yup.string().required('Select an organization type.'),
  aboutOrganization: yup.string().max(3000, 'Field cannot exceed 3000 characters.'),
  streetAddress: yup.string().required('Street address is required.'),
  province: yup.string().required('Select a province.'),
  city: yup.string().required('City is required.'),
  country: yup.string().required('Select a country.'),
  opportunityTypes: yup.array().min(1, 'Pick at least one opportunity type.'),
})

export const step2Yup = yup.object({
  compensation: yup.string().required('Select compensation.'),
  qualifications: yup
    .string()
    .max(3000, 'Field cannot exceed 3000 characters.')
    .required('Enter qualifications.'),
  subjectAreas: yup.array().min(1, 'Pick at least one subject area.').optional(),
  gradeLevel: yup.array().min(1, 'Pick at least one grade level.').optional(),
  yearsOfExperience: yup.string().optional(),
  certifications: yup.array().optional(),
})

export const step3Yup = yup.object({
  jobDescription: yup
    .string()
    .max(3000, 'Field cannot exceed 3000 characters.')
    .required('Enter a job description.'),
  applicationLink: yup.string().required('Enter an application link.'),
  applicationDeadline: yup.string().required('Pick an application deadline.'),
})

export const step1Schema = toTypedSchema(step1Yup)
export const step2Schema = toTypedSchema(step2Yup)
export const step3Schema = toTypedSchema(step3Yup)

export const fullSchema = toTypedSchema(step1Yup.concat(step2Yup).concat(step3Yup))
export const fullYup = step1Yup.concat(step2Yup).concat(step3Yup)

export type JobForm = yup.InferType<typeof fullYup>
