import { FC } from 'react';
import { Sparkle, Circle } from 'lucide-react';
import { Badge } from '../ui/badge';
import { Anchor } from '@/components/ui/anchor';
import { Container } from '../ui/container';
import { EXPERIENCES } from '@/assets/data';

interface ExperienceProps {}

const Experience: FC<ExperienceProps> = () => {
  return (
    <section className="pb-20 lg:w-3/4 lg:mx-auto">
      <Container className="w-max mb-4">
        <h2 className="text-2xl font-semibold">Experiences</h2>
      </Container>
      <ul role="list" className="flex flex-col space-y-8">
        {EXPERIENCES.map((exp) => (
          <li key={exp.company}>
            <Container className="border-b-0 rounded-es-none rounded-ee-none">
              <div className="flex flex-wrap items-center gap-4">
                <Anchor
                  className="mb-2"
                  target="_blank"
                >{`@${exp.company}`}</Anchor>
                <Badge variant="secondary">{exp.type}</Badge>
              </div>
              <div className="flex items-center text-slate-200">
                <Sparkle className="w-3 h-3 fill-slate-50 mr-2" />
                {exp.duration}
              </div>
            </Container>
            <Container asChild>
              <ul role="list" className="rounded-ss-none space-y-1">
                {exp.gains.map((gain, index) => (
                  <li key={index} className="grid grid-cols-[max-content,1fr]">
                    <span className="pt-1.5 mr-2 text-accent/80">
                      <Circle className="w-1.5 h-1.5 fill-accent/80" />
                    </span>
                    {gain}
                  </li>
                ))}
              </ul>
            </Container>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Experience;
