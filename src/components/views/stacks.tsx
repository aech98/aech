import { FC } from 'react';
import { STACKS } from '@/assets/data';
import { Badge } from '../ui/badge';
import { Container } from '../ui/container';

interface StacksProps {}

const Stacks: FC<StacksProps> = () => {
  return (
    <section className="pb-20 lg:w-3/4 lg:mx-auto">
      <Container className="w-max mb-4">
        <h2 className="text-2xl font-semibold">Frontend Stacks</h2>
      </Container>
      <Container asChild>
        <ul
          role="list"
          className="grid grid-cols-[repeat(auto-fill,minmax(9rem,1fr))] gap-4"
        >
          {STACKS.map((stack, index) => {
            const Icon = stack.icon;

            return (
              <li key={index}>
                <Badge className="w-full gap-x-4 text-base px-4 py-2">
                  <span>{<Icon className="w-6 h-6 md" />}</span>
                  {stack.name}
                </Badge>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
};

export default Stacks;
