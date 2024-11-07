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
      image: '/pw.png'
    },
    {
      title: 'Stocks Analysis Website',
      description: 'Still in development, website for stock full analysis,a lot of graphs, tables and e.t.',
      tech: ['React', 'JavaScript', 'Tailwind CSS', 'CSS', 'Graphs'],
      github: 'https://github.com/YpCIIIaK/spTracker',
      demo: 'https://github.com/YpCIIIaK/spTracker',
      image: '/tr.png'
    },
    {
      title: 'Blog website',
      description: 'A website for personal blog posting with minimalistic and responsive design.',
      tech: ['React', 'Chart.js', 'JavaScript', 'API Integration'],
      github: 'https://github.com/YpCIIIaK/BlogWebsite',
      demo: 'https://github.com/YpCIIIaK/BlogWebsite',
      image: '/bw.png'
    },
    {
      title: 'To-do List',
      description: 'A todo website for creating tasks marked with date, priority, description and category',
      tech: ['React', 'JavaScript', 'API Integration'],
      github: 'https://github.com/YpCIIIaK/todoList',
      demo: 'https://github.com/YpCIIIaK/todoList',
      image: '/td.png'
    },
    {
      title: 'This Website LOL',
      description: 'A all in one portfolio-blog-components website',
      tech: ['React', 'JavaScript', 'Tailwind CSS', 'CSS', 'Markdown'],
      github: 'https://github.com/YpCIIIaK/portfolio-blog',
      demo: 'https://github.com/YpCIIIaK/portfolio-blog',
      image: '/pb.png'
    },
    {
      title: 'Spendings Tracker',
      description: 'A tracker for personal money-spending tracking, graphs visualisation and more.',
      tech: ['React', 'JavaScript', 'Tailwind CSS', 'CSS', 'Graphs'],
      github: 'https://github.com/YpCIIIaK/spTracker',
      demo: 'https://github.com/YpCIIIaK/spTracker',
      image: '/tr.png'
    },
    {
      title: 'Component website',
      description: 'A reusable component based website for skills showcase, variety of content and useful blocks.',
      tech: ['React', 'JavaScript', 'Tailwind CSS'],
      github: 'https://github.com/YpCIIIaK/reusable_components',
      demo: 'https://github.com/YpCIIIaK/reusable_components',
      image: '/cw.png'
    },
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