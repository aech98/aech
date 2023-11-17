import { Icons } from '@/lib/icons';
import {
  Facebook,
  Mail,
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
  {
    icon: Twitter,
    path: 'https://x.com/wanAech?t=lYfcPZrd-4F4ul-BN!t06g&s=09',
  },
  {
    icon: Linkedin,
    path: 'https://www.linkedin.com/in/ridwan-tahir?utm_source=share&utm_campaign=share&utm_content=profile&utm_medium=android_app',
  },
  { icon: Mail, path: 'mailto:muhammedridwan02@gmail.com' },
  { icon: Facebook, path: '#' },
];

/****************************
### EXPERIENCES
****************************/

export type ExperienceType = {
  company: string;
  link: string;
  duration: string;
  type: string;
  gains: string[];
};

export const EXPERIENCES: ExperienceType[] = [
  {
    company: 'Quickly Marketplace',
    link: '',
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
    link: '',
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
    link: '',
    duration: 'Nov 2022 - Mar 2023',
    type: 'Internship',
    gains: [
      'Enhanced my understanding of frontend technologies through active exploration and hands-on experience with cutting-edge tools, including NextJS, TailwindCSS, and GraphQL.',
      'Dived into the world of software development and engineering, gaining invaluable insights into the techniques employed in creating sophisticated software applications.',
    ],
  },
  {
    company: 'African Trainovation Consulting',
    link: '',
    duration: 'Jun 2022 - Nov 2022',
    type: 'Contract',
    gains: [
      "Provided one-on-one tutoring sessions in frontend development technology stacks encompassing HTML, CSS, JavaScript, and React, with the potential to boost the company's productivity.",
      'Engaged in a dynamic STEAM program that offered summer courses to young minds, showcasing the wonders of mathematical concepts and their real-world applications in technology, ultimately contributing to a fresh avenue for revenue generation for the company.',
    ],
  },
  {
    company: 'Freelancing',
    link: '',
    duration: 'Aug 2021 - Jun 2022',
    type: 'Freelancing',
    gains: [
      "Skillfully used frameworks such as Redux, Context API, and React Router to optimize development and improve user experiences.",
      'Engaged in React.js communities on different platforms, actively contributing to projects and seeking mentorship. This immersion fostered a deeper understanding of best practices and encouraged continuous growth in React development.',
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

/****************************
### PROJECTS
****************************/

export type ProjectType = {
  title: string;
  description: string;
  image: string;
  link: string;
  github: string;
  featured: boolean;
  stacks: string[];
};

export const PROJECTS: ProjectType[] = [
  {
    title: 'RapidMedicare',
    description:
      'A platform developed with aim of providing consultations with an approved specialist over a medical condition. I was priviledged to have particicpated in active development of the website frontend solutions.',
    image:
      'https://res.cloudinary.com/yheenca/image/upload/v1697196682/mine/Screenshot_from_2023-10-13_12-23-22_j78xkn.png',
    link: 'https://rapidmed.care',
    github: '',
    featured: true,
    stacks: [
      'Typescript',
      'NextJS',
      'Sass',
      'Radix-UI',
      'React Query',
      'React-Table',
      'React-Hook-Form',
      'Rest API',
      'Zod',
      'Zustand',
    ],
  },
  // {
  //   title: 'Quickly Marketplace',
  //   description:
  //     'A website in development with the view of providing a safe interactive platform for students to buy and sell products of their choices. I oversaw the development of the user interactions and integrations for the product.',
  //   image:
  //     'https://res.cloudinary.com/yheenca/image/upload/v1697196681/mine/Screenshot_from_2023-10-13_12-23-07_rycxtr.png',
  //   link: 'https://quickly.com.ng',
  //   github: '',
  //   featured: true,
  //   stacks: [
  //     'JavaScript',
  //     'ReactJS',
  //     'Tailwind',
  //     'Shadcn-UI',
  //     'React Query',
  //     'React-Hook-Form',
  //     'Rest API',
  //     'Yup',
  //     'Zustand',
  //   ],
  // },
  {
    title: 'Aech Luxibouquet',
    description:
      'A personal learning project developed to improve the knowledge of NextJS 13 and Sanity. It is an e-commerce website provides the flower bouquets to potential users.',
    image:
      'https://res.cloudinary.com/yheenca/image/upload/v1697196680/mine/Screenshot_from_2023-10-13_12-22-53_hgpoul.png',
    link: 'https://aech-luxibouqeut.vercel.app',
    github: 'https://github.com/aech98/aech-luxibouqeut',
    featured: true,
    stacks: [
      'TypeScript',
      'NextJS',
      'Tailwind',
      'Shadcn-UI',
      'Sanity',
      'Groq',
      'React-Hook-Form',
      'Zod',
      'Zustand',
    ],
  },
  {
    title: 'Artsy',
    description:
      'A twitter challenge on web development using any frontend technology. An e-commerce website that lets end-users shop for pictorial arts',
    image:
      'https://res.cloudinary.com/yheenca/image/upload/v1697196680/mine/Screenshot_from_2023-10-13_12-22-34_brasgb.png',
    link: 'https://wan-artsy.vercel.app',
    github: 'https://github.com/aech98/artsy',
    featured: true,
    stacks: ['TypeScript', 'ReactJS', 'Tailwind', 'Shadcn-UI'],
  },
  {
    title: 'GetLinked',
    description:
      'A twitter challenge on web development using any frontend technology. This was organized by getLinked in view of an upcoming hackathon.',
    image: '',
    link: 'https://aech-getlinked.vercel.app',
    github: 'https://github.com/aech98/getlinked',
    featured: false,
    stacks: [
      'TypeScript',
      'ReactJS',
      'Tailwind',
      'Shadcn-UI',
      'React-Hook-Form',
      'Zod',
    ],
  },
  // {
  //   title: '8Log',
  //   description:
  //     'A blog website built leveraging the power of fullstack NextJS 13. The development of the website was done with a view of practicing fullstack development with NextJS using cloud database from PlanetScale.',
  //   image: '',
  //   link: 'https://8log.vercel.app',
  //   github: 'https://github.com/aech98/8log',
  //   featured: false,
  //   stacks: [
  //     'TypeScript',
  //     'NextJS',
  //     'Tailwind',
  //     'Shadcn-UI',
  //     'React-Hook-Form',
  //     'Zod',
  //     'Zustand',
  //     'Prisma',
  //     'EditorJS',
  //   ],
  // },
  {
    title: 'Checkout Page',
    description:
      'A single page(route) application built with considerations of handling e-commerce payment with paystack.',
    image: '',
    link: 'https://wan-checkout-page.vercel.app',
    github: 'https://github.com/aech98/checkout-page',
    featured: false,
    stacks: ['TypeScript', 'ReactJS', 'Tailwind', 'Paystack'],
  },
  {
    title: 'Product Page',
    description:
      'A single page(route) application built product page of an e-commerce website.',
    image: '',
    link: 'https://wan-product-page.vercel.app',
    github: 'https://github.com/aech98/e-commerce-product-page',
    featured: false,
    stacks: ['TypeScript', 'ReactJS', 'Tailwind'],
  },
  {
    title: 'Movie Website',
    description:
      'A website application built with view of leveraging the TMDB API to provide an avenue for seeing latest and upcoming movies. It also provides a search feature.',
    image: '',
    link: 'https://spacemovie-otherwan.netlify.app',
    github: 'https://github.com/aech98/space-movie',
    featured: false,
    stacks: ['TypeScript', 'ReactJS', 'TMDB API'],
  },
];
