/**
 * The site's lead form: name, work email, phone, organization, then either
 * module-interest pills (`modules` variant) or role + jurisdiction pills
 * (`mac` variant), a message, and the primary submit. Posts to `/api/leads`
 * and swaps to the "Request received." panel with a confetti burst.
 */
export { LeadForm } from '@/components/shared/LeadForm';
export type { LeadFormProps } from '@/components/shared/LeadForm';
