import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center rounded-full border border-slate-200 px-2.5 py-0.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-slate-50 focus:ring-offset-2',
  {
    variants: {
      variant: {
        default: 'bg-[hsl(195,7%,10%)] text-accent border-border hover:border-accent/10',
        secondary: 'bg-[hsl(260,4%,13%)] border-border text-slate-500',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge(props: BadgeProps) {
  const { className, variant, ...rest } = props;
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...rest} />
  );
}

export { Badge, badgeVariants };
