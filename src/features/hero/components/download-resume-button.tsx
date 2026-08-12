'use client';

import { useTranslations } from 'next-intl';

import { Download } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

const DownloadResumeButton = () => {
  const t = useTranslations('hero');

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button size="lg" className="w-full sm:w-auto">
          <Download className="mr-2 h-4 w-4" />
          {t('downloadResume')}
        </Button>
      </PopoverTrigger>
      <PopoverContent align="start" className="w-40 p-0">
        <a
          href="/resume/resume-en.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:bg-background text-foreground bg-muted block px-4 py-2 text-sm"
        >
          {t('resumeEn')}
        </a>
        <a
          href="/resume/resume-fa.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:bg-background text-foreground bg-muted block px-4 py-2 text-sm"
        >
          {t('resumeFa')}
        </a>
      </PopoverContent>
    </Popover>
  );
};

export default DownloadResumeButton;
