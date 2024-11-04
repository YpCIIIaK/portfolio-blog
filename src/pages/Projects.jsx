import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: 'Portfolio Website',
      description: 'A routed website with projects and work history displayed.',
      tech: ['React', 'JavaScript', 'Tailwind CSS'],
      github: 'https://github.com/YpCIIIaK/portfolio-website',
      demo: 'https://github.com/YpCIIIaK/portfolio-website',
      image: '/projects/ecommerce.jpg'
    },
    {
      title: 'Component website',
      description: 'A reusable component based website for skills showcase, variety of content and useful blocks.',
      tech: ['React', 'JavaScript', 'Tailwind CSS'],
      github: 'https://github.com/YpCIIIaK/reusable_components',
      demo: 'https://github.com/YpCIIIaK/reusable_components',
      image: '/projects/taskmanager.jpg'
    },
    {
      title: 'Blog website',
      description: 'A website for personal blog posting with minimalistic and responsive design.',
      tech: ['React', 'Chart.js', 'JavaScript', 'API Integration'],
      github: 'https://github.com/YpCIIIaK/BlogWebsite',
      demo: 'https://github.com/YpCIIIaK/BlogWebsite',
      image: '/projects/weather.jpg'
    },
    {
      title: 'To-do List',
      description: 'A todo website for creating tasks marked with date, priority, description and category',
      tech: ['React', 'JavaScript', 'API Integration'],
      github: 'https://github.com/YpCIIIaK/todoList',
      demo: 'https://github.com/YpCIIIaK/todoList',
      image: '/projects/weather.jpg'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;