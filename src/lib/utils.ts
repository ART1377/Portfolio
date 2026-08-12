import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// export const isBrowser = typeof window !== 'undefined';

// export const getSafeAreaInsets = () => {
//   if (!isBrowser) return { top: '0px', bottom: '0px' };

//   const style = getComputedStyle(document.documentElement);
//   return {
//     top: style.getPropertyValue('env(safe-area-inset-top)') || '0px',
//     bottom: style.getPropertyValue('env(safe-area-inset-bottom)') || '0px',
//   };
// };
