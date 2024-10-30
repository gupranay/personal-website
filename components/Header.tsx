import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import Link from 'next/link';
import { useTheme } from './ThemeProvider';

interface HeaderProps {
  currentPage: string;
}

const Header = ({ currentPage }: HeaderProps) => {
  const { darkMode, toggleDarkMode } = useTheme();
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <header className="relative z-10 bg-blue-200 dark:bg-gray-800 transition-all duration-500">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link href="/" prefetch ={false} className="text-2xl font-bold font-mono p-2 rounded-lg transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-lg hover:bg-blue-300 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-gray-400 text-gray-900 dark:text-gray-100">
           {"> "}PG / {currentPage}
          <span className={`inline-block w-2 h-5 ml-1 bg-current ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}></span>
        </Link>
        <nav className="flex items-center space-x-4">
          <NavLink href="/actively-building" label="Actively Building" />
          <NavLink href="/projects" label="Projects" />
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-blue-300 dark:hover:bg-gray-700 transition-all duration-500 text-gray-900 dark:text-white"
          >
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </nav>
      </div>
    </header>
  );
};

const NavLink = ({ href, label }: { href: string; label: string }) => (
  <Link href={href} prefetch={false} className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-all duration-500 transform hover:scale-105 group">
    <span className="relative">
      {label}
      <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-gray-900 dark:bg-white transform scale-x-0 transition-transform duration-500 origin-left group-hover:scale-x-100"></span>
    </span>
  </Link>
);

export default Header;
