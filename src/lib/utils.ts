import { type ClassValue, clsx } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';

const customTailwindMerge = extendTailwindMerge({
  theme: { colors: ['dark', 'accent', 'border'] },
  classGroups: { 'font-family': [{ font: ['dm'] }] },
});

export function cn(...inputs: ClassValue[]) {
  return customTailwindMerge(clsx(inputs));
}
