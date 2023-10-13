import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center text-sm font-semibold ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-50 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'text-slate-50 hover:bg-slate-900/90',
        outline:
          'border border-accent bg-accent/20 text-accent rounded-3xl hover:bg-accent hover:dark',
        primary:
          'bg-accent text-dark border border-accent rounded-2xl hover:bg-accent/20 hover:text-accent',
        link: 'text-accent/80 cursor-pointer hover:text-accent/60',
      },
      size: {
        default: null,
        icon: 'h-10 w-10',
        primary: 'h-12 px-12 py-2',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'primary',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const { className, children, variant, size, ...rest } = props;
    return (
      <button
        {...rest}
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
