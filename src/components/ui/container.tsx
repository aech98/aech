import { cn } from '@/lib/utils';
import { Slot } from '@radix-ui/react-slot';
import { HTMLAttributes, forwardRef } from 'react';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  asChild?: boolean;
}

const Container = forwardRef<HTMLDivElement, ContainerProps>((props, ref) => {
  const { children, className, asChild = false, ...rest } = props;

  const Comp = asChild ? Slot : 'div';

  return (
    <Comp
      {...rest}
      ref={ref}
      className={cn(
        'p-4 border border-border hover:border-accent/10 rounded-md',
        className
      )}
    >
      {children}
    </Comp>
  );
});

Container.displayName = 'Container';

export { Container };
