import Hero from '@/components/views/hero';
import Stacks from '@/components/views/stacks';
import Experiences from '@/components/views/experience';
import Projects from '@/components/views/projects';

export default function Home() {
  return (
    <main className="min-h-screen p-4 md:p-8 lg:p-10">
      <Hero />
      <Stacks />
      <Experiences />
      <Projects />
    </main>
  );
}
