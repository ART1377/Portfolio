'use client';

import { useTranslations } from 'next-intl';

import { motion } from 'framer-motion';
import { Download, FileText, Languages } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

const DownloadResumeButton = () => {
  const t = useTranslations('hero');

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button size="lg" className="group w-full sm:w-auto">
          <Download className="mr-2 h-4 w-4 transition-transform group-hover:translate-y-0.5" />
          {t('downloadResume')}
        </Button>
      </PopoverTrigger>
      <PopoverContent
        align="start"
        sideOffset={8}
        className="w-72 overflow-hidden rounded-xl border-2 p-0 shadow-xl"
      >
        <div className="bg-muted/50 border-b px-4 py-3">
          <div className="flex items-center gap-2">
            <Languages className="text-primary h-4 w-4" />
            <span className="text-sm font-semibold">{t('downloadResume')}</span>
          </div>
        </div>

        <div className="p-2">
          <motion.a
            href="/resume/AlirezaTahavori-EN.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group/item hover:bg-primary/10 flex items-center gap-3 rounded-lg px-3 py-3 transition-colors"
            whileHover={{ x: 4 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <div className="bg-primary/10 text-primary grid h-10 w-10 place-items-center rounded-lg">
              <FileText className="h-5 w-5" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium">{t('resumeEn')}</p>
              <p className="text-muted-foreground text-xs">PDF</p>
            </div>
            <Download className="text-muted-foreground group-hover/item:text-primary h-4 w-4 transition-colors" />
          </motion.a>

          <motion.a
            href="/resume/AlirezaTahavori-FA.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group/item hover:bg-primary/10 flex items-center gap-3 rounded-lg px-3 py-3 transition-colors"
            whileHover={{ x: 4 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <div className="bg-primary/10 text-primary grid h-10 w-10 place-items-center rounded-lg">
              <FileText className="h-5 w-5" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium">{t('resumeFa')}</p>
              <p className="text-muted-foreground text-xs">PDF</p>
            </div>
            <Download className="text-muted-foreground group-hover/item:text-primary h-4 w-4 transition-colors" />
          </motion.a>
        </div>

        <div className="bg-muted/50 border-t px-4 py-2">
          <p className="text-muted-foreground text-center text-[10px]">{t('resumeNote')}</p>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default DownloadResumeButton;
