'use client';

import { FC } from 'react';
import Image from 'next/image';
import { SOCIALS } from '@/assets/data';
import { Anchor } from '@/components/ui/anchor';
import { Container } from '@/components/ui/container';
import QuotesGenerator from '../quote-generator';

interface HeroProps {}

const Hero: FC<HeroProps> = () => {
  return (
    <section className="pb-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:auto-rows-auto">
      <Container className="animate-in slide-in-from-top-48 duration-700">
        <Container className="p-2 w-max rounded-full lg:hidden mb-4">
          <div className="relative w-16 h-16 rounded-full overflow-hidden">
            <Image
              src="https://res.cloudinary.com/yheenca/image/upload/v1697123420/mine/20230630_132121_iveka7.png"
              alt="Portfolio Image"
              fill
              referrerPolicy="no-referrer"
              className="object-cover"
            />
          </div>
        </Container>
        <div className="mb-6">
          <h1 className="text-2xl font-semibold mb-1">
            Hi! I&apos;m Tahir Ridwan
          </h1>
          <h3 className="text-xl font-medium">
            A Frontend Web Developer,
            <br />
            from Kwara, Nigeria.
          </h3>
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-x-4">
            {SOCIALS.map(({ icon, path }) => {
              const Icon = icon;
              return (
                <Anchor key={path} href={path} target="_blank">
                  <Icon className="w-6 h-6" />
                </Anchor>
              );
            })}
          </div>
          <Anchor
            className="max-w-sm"
            size="primary"
            variant="primary"
            target="_blank"
            href="https://docs.google.com/document/d/1nK0sQd7JfUv4I6a3KYTe0MVeas9dwLO-ddHXCU5d0jk/edit?usp=sharing"
          >
            View Resume
          </Anchor>
        </div>
      </Container>
      <QuotesGenerator />
      <Container className="hidden lg:row-span-2 lg:block">
        <div className="relative w-full h-full rounded-lg overflow-hidden">
          <Image
            src="https://res.cloudinary.com/yheenca/image/upload/v1697123346/mine/20230630_132121_sllyoo.png"
            alt="Portfolio Image"
            fill
            referrerPolicy="no-referrer"
          />
        </div>
      </Container>
      <Container className="flex flex-col space-y-2 md:col-span-2">
        <p>
          I&apos;m Ridwan, a frontend developer driven by a passion for coding
          and the art of creative problem-solving. I continuously evolve my
          skills through a journey of learning and development, bringing a rich
          reservoir of knowledge and expertise to every project I engage with.
        </p>
        <p>
          At present, I hold the position of a frontend developer at{' '}
          <Anchor>Quickly Marketplace,</Anchor> where I am responsible for the
          design and deployment of the company&apos;s sophisticated digital
          experiences. Prior to this, I contributed my skills as a frontend
          developer at <Anchor>Rapid Medicare,</Anchor> to produce a refined
          interactive digital solutions for the company.
        </p>
        <p>
          My specialization encompasses HTML, CSS, JavaScript, TypeScript, Node,
          ReactJS, NextJS, Tailwind, and Sass. I remain committed to staying
          abreast of the latest trends in the frontend industry.
        </p>
        <p>
          Outside the realm of coding, I find joy in supporting Chelsea football
          club and immersing myself in FPS games. These interests provide me
          with the equilibrium and inspiration that enrich my work.
        </p>
      </Container>
    </section>
  );
};

export default Hero;
