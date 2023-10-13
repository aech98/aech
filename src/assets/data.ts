import { Icons } from '@/lib/icons';
import {
  Facebook,
  Instagram,
  Linkedin,
  LucideIcon,
  LucideProps,
  Twitter,
} from 'lucide-react';

/****************************
### SOCIALS
****************************/

export type SocialType = { icon: LucideIcon; path: string };

export const SOCIALS: SocialType[] = [
  { icon: Twitter, path: '##' },
  { icon: Linkedin, path: '#' },
  { icon: Instagram, path: '###' },
  { icon: Facebook, path: '####' },
];

/****************************
### EXPERIENCES
****************************/

export type ExperienceType = {
  company: string;
  duration: string;
  type: string;
  gains: string[];
};

export const EXPERIENCES: ExperienceType[] = [
  {
    company: 'Quickly Marketplace',
    duration: 'Apr 2023 - Present',
    type: 'Volunteer',
    gains: [
      "Guiding the creation of ReactJS-based frontend solutions for the company's e-commerce platform.",
      'Cooperating closely with the backend team to ensure smooth integration of APIs, promoting effective communication between the frontend and backend layers.',
      'Working in tandem with product designers to enhance user interactions and optimize the overall user experience of the product.',
      'Contributing valuable research and collaborative efforts to deliver a state-of-the-art e-commerce website.',
    ],
  },
  {
    company: 'Rapid Medicare',
    duration: 'Jun 2023 - Sep 2023',
    type: 'Contract',
    gains: [
      'Participated in the development of an innovative telemedicine platform, designed to deliver instant healthcare services to potential users.',
      'Adapted swiftly to the frontend technologies employed in platform development, ensuring smooth integration and advancement.',
      'Collaborated effectively with a team of developers to create a comprehensive digital solution, integrating seamlessly with backend APIs for a robust telemedicine experience.',
      "Offered valuable research findings and recommendations to enhance the platform's development.",
    ],
  },
  {
    company: 'Zulaiy Muslim Developers',
    duration: 'Nov 2022 - Mar 2023',
    type: 'Internship',
    gains: [
      'Enhanced my understanding of frontend technologies through active exploration and hands-on experience with cutting-edge tools, including NextJS, TailwindCSS, and GraphQL.',
      'Dived into the world of software development and engineering, gaining invaluable insights into the techniques employed in creating sophisticated software applications.',
    ],
  },
  {
    company: 'African Trainovation Consulting',
    duration: 'Jun 2022 - Nov 2022',
    type: 'Contract',
    gains: [
      "Provided one-on-one tutoring sessions in frontend development technology stacks encompassing HTML, CSS, JavaScript, and React, with the potential to boost the company's productivity.",
      'Engaged in a dynamic STEAM program that offered summer courses to young minds, showcasing the wonders of mathematical concepts and their real-world applications in technology, ultimately contributing to a fresh avenue for revenue generation for the company.',
    ],
  },
];

/****************************
### STACKS
****************************/

export type StackType = {
  name: string;
  icon: (props: LucideProps) => JSX.Element;
};

export const STACKS: StackType[] = [
  { name: 'HTML', icon: Icons.html },
  { name: 'CSS', icon: Icons.css },
  { name: 'Sass', icon: Icons.sass },
  { name: 'Tailwind', icon: Icons.tailwind },
  { name: 'JavaScript', icon: Icons.javascript },
  { name: 'TypeScript', icon: Icons.typescript },
  { name: 'ReactJS', icon: Icons.react },
  { name: 'NextJS', icon: Icons.next },
  { name: 'Zustand', icon: Icons.zustand },
  { name: 'React Query', icon: Icons.reactquery },
  { name: 'Node', icon: Icons.node },
  { name: 'Radix-UI', icon: Icons.radix },
];
