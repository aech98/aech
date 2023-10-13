import Hero from '@/components/views/hero';
import Stacks from '@/components/views/stacks';
import Experiences from '@/components/views/experience';

export default function Home() {
  return (
    <main className="p-4 lg:p-10">
      <Hero />
      <Stacks />
      <Experiences />
    </main>
  );
}
