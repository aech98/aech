import { FC } from 'react';
import { Container } from '../ui/container';
import { PROJECTS } from '@/assets/data';
import Image from 'next/image';
import { Badge } from '../ui/badge';
import { Anchor } from '../ui/anchor';
import { Github, Link, Folder } from 'lucide-react';

interface ProjectsProps {}

const Projects: FC<ProjectsProps> = () => {
  return (
    <section className="pb-20">
      <Container className="w-max mb-4">
        <h2 className="text-2xl font-semibold">Projects</h2>
      </Container>
      <ul className="flex flex-col space-y-8">
        {PROJECTS.filter((proj) => proj.featured).map((proj) => (
          <li key={proj.title} className="group">
            <Container className="relative lg:grid lg:grid-cols-12">
              <div className="absolute inset-4 overflow-hidden rounded-lg after:block after:absolute after:inset-0 after:bg-dark/90 after:lg:bg-dark/60 lg:group-odd:col-start-1 lg:group-even:col-start-7 lg:col-span-6 lg:row-start-1 lg:row-end-2 lg:relative lg:inset-0">
                <Image src={proj.image} alt={proj.title} fill referrerPolicy="no-referrer" />
              </div>
              <article className="space-y-4 p-4 lg:p-0 lg:group-odd:col-start-6 lg:group-even:col-start-1 lg:col-span-7 lg:row-start-1 lg:row-end-2 relative z-40 lg:group-odd:flex lg:group-odd:flex-col lg:group-odd:items-end lg:group-odd:text-right">
                <h6 className="font-normal text-xs text-accent">Featured</h6>
                <h4 className="text-2xl font-bold">{proj.title}</h4>
                <p className="lg:p-8 lg:bg-neutral-800 lg:border-border lg:rounded-lg">{proj.description}</p>
                <div className="flex flex-row flex-wrap gap-2 lg:max-w-md lg:group-odd:justify-end">
                  {proj.stacks.map((stack, index) => (
                    <Badge variant="secondary" key={index}>{stack}</Badge>
                  ))}
                </div>
                <div className="flex items-center space-x-4">
                  {Boolean(proj.github) && <Anchor href={proj.github}>{<Github />}</Anchor>}
                  {Boolean(proj.github) && <Anchor href={proj.link}>{<Link />}</Anchor> }
                </div>
              </article>
            </Container>
          </li>
        ))}
      </ul>
      <div className="py-12">
      	<Container className="w-max mb-8 relative left-1/2 -translate-x-1/2">
		      <h3 className="text-xl font-semibold">Other Noteworthy Projects</h3>
		    </Container>
		    <ul className="grid grid-cols-[repeat(auto-fill,minmax(20rem,1fr))] gap-8">
		      {PROJECTS.filter((proj) => !proj.featured).map((proj) => (
		        <li key={proj.title} classNam="h-full">
		          <Container className="h-full flex flex-col">
		          	<div className="flex items-center justify-between mb-4">
		          		<span>{ <Folder className="w-8 h-8" /> }</span>
		          		<div className="flex items-center space-x-4">
		                {Boolean(proj.github) && <Anchor href={proj.github}>{<Github />}</Anchor>}
		                {Boolean(proj.link) && <Anchor href={proj.link}>{<Link />}</Anchor>}
		              </div>
		          	</div>
		            <div className="space-y-2 mb-4">
		              <h4 className="text-2xl font-bold">{proj.title}</h4>
		              <p>{proj.description}</p>
		            </div>
		            <div className="flex flex-row flex-wrap gap-2 mt-auto">
	                {proj.stacks.map((stack, index) => (
	                  <Badge variant="secondary" key={index}>{stack}</Badge>
	                ))}
	              </div>
		          </Container>
		        </li>
		      ))}
		    </ul>
      </div>
    </section>
  );
};

export default Projects;
