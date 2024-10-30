'use client';

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import dynamic from 'next/dynamic';
import { useTheme } from './ThemeProvider';
import Header from './Header';
import Footer from './Footer';

type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  details: string;
};

const projects: Project[] = [
  {
    id: 'project1',
    title: 'AI-Powered Chat Bot',
    description: 'A machine learning chat bot built with Python and TensorFlow.',
    image: '/placeholder.svg',
    details: 'This project utilizes natural language processing...',
  },
  {
    id: 'project2',
    title: 'React Native Mobile App',
    description: 'A cross-platform mobile app for task management.',
    image: '/placeholder.svg',
    details: 'Developed using React Native for real-time sync...',
  },
  {
    id: 'project3',
    title: 'Blockchain Voting System',
    description: 'A secure and transparent voting system using blockchain.',
    image: '/placeholder.svg',
    details: 'This project implements a decentralized voting system...',
  },
];

const ProjectsPage = () => {
  const { darkMode, toggleDarkMode } = useTheme();
  const [showCursor, setShowCursor] = useState(true);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, []);

  const openProject = (project: Project) => {
    setSelectedProject(project);
    window.history.pushState(null, '', `#${project.id}`);
  };

  const closeProject = () => {
    setSelectedProject(null);
    window.history.pushState(null, '', window.location.pathname);
  };

  return (
    <div className="min-h-screen flex flex-col bg-blue-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-all duration-500 ease-in-out relative overflow-hidden">
      <div className="absolute inset-0 bg-gray-900 transform transition-transform duration-500 ease-in-out origin-left" 
           style={{ transform: darkMode ? 'scaleX(1)' : 'scaleX(0)' }}></div>
      <Header currentPage="Projects" />
      <main className="relative z-10 flex-grow container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-900 dark:text-gray-100 transition-all duration-500">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform duration-500 hover:scale-105 cursor-pointer" onClick={() => openProject(project)}>
              <Image src={project.image} alt={project.title} width={400} height={200} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">{project.title}</h2>
                <p className="text-gray-600 dark:text-gray-400">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">{selectedProject.title}</h2>
                <button onClick={closeProject} className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-all duration-500">
                  <X className="w-6 h-6" />
                </button>
              </div>
              <Image src={selectedProject.image} alt={selectedProject.title} width={800} height={400} className="w-full h-64 object-cover rounded-lg mb-4" />
              <p className="text-gray-700 dark:text-gray-300 mb-4">{selectedProject.description}</p>
              <p className="text-gray-600 dark:text-gray-400">{selectedProject.details}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default dynamic(() => Promise.resolve(ProjectsPage), { ssr: false });
