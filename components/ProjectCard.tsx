import { GitHubIcon, HrefIcon, InstaIcon, TwitterIcon } from './IconComponents';

type ProjectCardProps = {
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
  isDarkMode: boolean;
  icon: React.ElementType;
};

const ProjectCard = ({
  title,
  description,
  details,
  href,
  github,
  updateInsta,
  updateTwitter,
  tech1,
  tech2,
  tech3,
  isDarkMode,
  icon: Icon,
}: ProjectCardProps) => {
  return (
    <div
      className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col justify-between transition-transform duration-500 hover:scale-105 cursor-pointer ${isDarkMode ? 'border-gray-700' : 'border-gray-300'}`}
    >
      <div className="flex items-center justify-between mb-4">
        {/* Project Icon */}
        <Icon className="h-12 w-12 text-blue-500 dark:text-yellow-400" />
        {/* Link Icons */}
        <div className="flex space-x-3">
          {href && <HrefIcon url={href} className="icon h-6 w-6" />}
          {github && <GitHubIcon url={github} className="icon h-6 w-6" />}
          {updateInsta && <InstaIcon url={updateInsta} className="icon h-6 w-6" />}
          {updateTwitter && <TwitterIcon url={updateTwitter} className="icon h-6 w-6" />}
        </div>
      </div>
      
      {/* Project Content */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-2">{description}</p>
        <p className="text-gray-600 dark:text-gray-400">{details}</p>
      </div>
      
      {/* Technologies - Stays at the bottom */}
      <div className="mt-auto pt-4 text-sm text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700">
        {tech1} • {tech2} • {tech3}
      </div>
    </div>
  );
};

export default ProjectCard;
