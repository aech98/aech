import { cn } from '@/lib/utils';
import { AnchorHTMLAttributes, forwardRef } from 'react';
import { buttonVariants } from './button';
import { VariantProps } from 'class-variance-authority';

interface AnchorProps
  extends AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof buttonVariants> {}

const Anchor = forwardRef<HTMLAnchorElement, AnchorProps>((props, ref) => {
  const {
    children,
    variant = 'link',
    size = 'default',
    className,
    ...rest
  } = props;

  return (
    <a
      {...rest}
      ref={ref}
      className={cn(buttonVariants({ size, variant }), className)}
    >
      {children}
    </a>
  );
});

Anchor.displayName = 'Anchor';

export { Anchor };
