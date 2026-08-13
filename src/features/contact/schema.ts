import { z } from 'zod';

export const createContactFormSchema = (t: (key: string) => string) =>
  z.object({
    name: z.string().min(1, t('nameRequired')),
    email: z.string().email(t('emailInvalid')),
    subject: z.string().min(1, t('subjectRequired')),
    message: z.string().min(10, t('messageMin')),
  });

export type ContactFormValues = z.infer<ReturnType<typeof createContactFormSchema>>;
