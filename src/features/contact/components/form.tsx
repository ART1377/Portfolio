'use client';

import { useTransition } from 'react';
import { useForm } from 'react-hook-form';

import { useTranslations } from 'next-intl';

import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

import { sendContactEmail } from '../actions/send-contact-email';
import { containerVariants, itemVariants } from '../constants';
import { type ContactFormValues, createContactFormSchema } from '../schema';

type ContactFormProps = {
  isInView: boolean;
};

const ContactForm = ({ isInView }: ContactFormProps) => {
  const t = useTranslations('contact');
  const [isPending, startTransition] = useTransition();

  const contactFormSchema = createContactFormSchema(t);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = (data: ContactFormValues) => {
    startTransition(async () => {
      const result = await sendContactEmail(data);
      if (result.success) {
        toast.success(t('success'));
        reset();
      } else {
        toast.error(t('error'));
      }
    });
  };

  return (
    <motion.div
      initial={{ x: -50, opacity: 0 }}
      animate={isInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <Card className="flex h-full flex-col justify-center transition-shadow hover:shadow-lg">
        <CardHeader className="gap-1">
          <CardTitle>{t('formTitle')}</CardTitle>
          <CardDescription>{t('formDescription')}</CardDescription>
        </CardHeader>
        <CardContent>
          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            noValidate
          >
            <motion.div className="grid gap-4 md:grid-cols-2" variants={itemVariants}>
              <motion.div whileFocus={{ scale: 1.02 }}>
                <Input
                  placeholder={t('name')}
                  {...register('name')}
                  aria-invalid={errors.name ? 'true' : 'false'}
                />
                {errors.name && (
                  <p className="text-destructive mt-1 text-xs">{errors.name.message}</p>
                )}
              </motion.div>
              <motion.div whileFocus={{ scale: 1.02 }}>
                <Input
                  type="email"
                  placeholder={t('email')}
                  {...register('email')}
                  aria-invalid={errors.email ? 'true' : 'false'}
                />
                {errors.email && (
                  <p className="text-destructive mt-1 text-xs">{errors.email.message}</p>
                )}
              </motion.div>
            </motion.div>

            <motion.div variants={itemVariants} whileFocus={{ scale: 1.02 }}>
              <Input
                placeholder={t('subject')}
                {...register('subject')}
                aria-invalid={errors.subject ? 'true' : 'false'}
              />
              {errors.subject && (
                <p className="text-destructive mt-1 text-xs">{errors.subject.message}</p>
              )}
            </motion.div>

            <motion.div variants={itemVariants} whileFocus={{ scale: 1.02 }}>
              <Textarea
                rows={5}
                placeholder={t('message')}
                {...register('message')}
                aria-invalid={errors.message ? 'true' : 'false'}
              />
              {errors.message && (
                <p className="text-destructive mt-1 text-xs">{errors.message.message}</p>
              )}
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button type="submit" className="w-full" disabled={isPending}>
                {isPending ? t('loading') : t('submit')}
              </Button>
            </motion.div>
          </motion.form>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ContactForm;
