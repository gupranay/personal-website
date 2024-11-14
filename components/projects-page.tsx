'use client';

import dynamic from 'next/dynamic';
import { useTheme } from './ThemeProvider';
import Header from './Header';
import Footer from './Footer';
import ProjectCard from './ProjectCard';

import { CodeIcon, DatabaseIcon, MobileIcon, GraphIcon, GamepadIcon, ServerIcon } from './IconComponents';

type Project = {
  id: string;
  title: string;
  description: string;
  details: string;
  href?: string;
  github?: string;
  updateInsta?: string;
  updateTwitter?: string;
  tech1: string;
  tech2: string;
  tech3: string;
  icon: React.ElementType;
};

const projects: Project[] = [
  {
    id: 'project1',
    title: 'Org Recruiting Platform',
    description: 'A recruitment platform using Next.js.',
    details: 'Enabled organizations to manage recruitment cycles and applicants with Google OAuth integration and CSV uploads. Supported by College of Engineering and Ross Business School.',
    href: 'https://www.recruitify.tech',
    github: 'https://github.com/gupranay/recruitment_v3',
    tech1: 'Next.js',
    tech2: 'Supabase',
    tech3: 'Google OAuth',
    icon: CodeIcon,
  },
  {
    id: 'project2',
    title: 'Thread Library',
    description: 'Kernel level C++ thread library on Unix.',
    details: 'Developed a multithreaded library supporting thread creation, synchronization, and scheduling. This project involved implementing low-level concurrency mechanisms like spin-locks, condition variables, and mutexes. Handles context switching, thread-safe interrupts, and deadlock prevention.',
    tech1: 'C++',
    tech2: 'Unix',
    tech3: 'Concurrency',
    icon: ServerIcon,
  },
  {
    id: 'project3',
    title: 'Multithreaded Network Fileserver',
    description: 'Concurrent, crash-consistent network file server.',
    details: 'Utilized Boost threads, reader-writer locks, and POSIX sockets.',
    tech1: 'C++',
    tech2: 'POSIX',
    tech3: 'Concurrency',
    icon: DatabaseIcon,
  },
  {
    id: 'project4',
    title: 'ThriveTrack',
    description: 'A health and wellness app with personalized fitness and nutrition.',
    details: 'Built using React Native and Node.js with a focus on UI/UX design and agile management.',
    href: 'https://www.thrive-track.com',
    tech1: 'React Native',
    tech2: 'Node.js',
    tech3: 'APIs',
    icon: MobileIcon,
  },
  {
    id: 'project5',
    title: 'Stock Market Simulator',
    description: 'Simulated stock market using priority queues and heaps.',
    details: 'Developed in C++ with a focus on streaming algorithms and data processing.',
    tech1: 'C++',
    tech2: 'Algorithms',
    tech3: 'Data Structures',
    icon: GraphIcon,
  },
  {
    id: 'project6',
    title: 'Euchre Game',
    description: 'Implemented a simplified version of the card game Euchre.',
    details: 'Focused on object-oriented programming and testing.',
    tech1: 'C++',
    tech2: 'OOP',
    tech3: 'Game Development',
    icon: GamepadIcon,
  },
];

const ProjectsPage = () => {
  const { darkMode } = useTheme();

  return (
    <div className="min-h-screen flex flex-col bg-blue-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-all duration-500 ease-in-out relative overflow-hidden">
      <div
        className="absolute inset-0 bg-gray-900 transform transition-transform duration-500 ease-in-out origin-left"
        style={{ transform: darkMode ? 'scaleX(1)' : 'scaleX(0)' }}
      ></div>
      <Header currentPage="Projects" />
      <main className="relative z-10 flex-grow container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              details={project.details}
              href={project.href}
              github={project.github}
              tech1={project.tech1}
              tech2={project.tech2}
              tech3={project.tech3}
              isDarkMode={darkMode}
              icon={project.icon}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default dynamic(() => Promise.resolve(ProjectsPage), { ssr: false });
