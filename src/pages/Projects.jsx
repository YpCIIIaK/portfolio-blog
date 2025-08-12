import { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslations, useProjectsData } from '../locales/translations';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const { language } = useLanguage();
  const t = useTranslations(language);
  const projectsData = useProjectsData(language);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const filterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, delay: 0.2 }
    }
  };

  // Фильтрация проектов
  const filteredProjects = projectsData.filter(project => {
    if (filter === 'all') return true;
    if (filter === 'featured') return project.featured;
    if (filter === 'completed') return project.status === 'completed';
    if (filter === 'in-progress') return project.status === 'in-progress';
    return true;
  });

  const filters = [
    { id: 'all', label: t.projects.filters.all, count: projectsData.length },
    { id: 'featured', label: t.projects.filters.featured, count: projectsData.filter(p => p.featured).length },
    { id: 'completed', label: t.projects.filters.completed, count: projectsData.filter(p => p.status === 'completed').length },
    { id: 'in-progress', label: t.projects.filters.inProgress, count: projectsData.filter(p => p.status === 'in-progress').length }
  ];

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Header */}
          <motion.div 
            variants={titleVariants}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-textPrimary to-secondary bg-clip-text text-transparent">
              {t.projects.title}
            </h2>
            <p className="text-textSecondary max-w-2xl mx-auto text-lg leading-relaxed">
              {t.projects.subtitle}
            </p>
          </motion.div>

          {/* Filters */}
          <motion.div 
            variants={filterVariants}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {filters.map((filterItem) => (
              <motion.button
                key={filterItem.id}
                onClick={() => setFilter(filterItem.id)}
                className={`px-6 py-3 rounded-full border transition-all duration-300 flex items-center gap-2 ${
                  filter === filterItem.id
                    ? 'bg-secondary text-primary border-secondary shadow-lg shadow-secondary/25'
                    : 'bg-transparent text-textSecondary border-textSecondary/30 hover:border-secondary/50 hover:text-secondary'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>{filterItem.label}</span>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  filter === filterItem.id
                    ? 'bg-primary/20 text-primary'
                    : 'bg-secondary/10 text-secondary'
                }`}>
                  {filterItem.count}
                </span>
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          {projectsData.length > 0 ? (
            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              layout
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={`${project.title}-${index}`}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <ProjectCard {...project} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            /* Placeholder когда нет проектов */
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-20"
            >
              <div className="bg-gradient-to-br from-primary to-primary/80 border border-textSecondary/20 rounded-xl p-12 max-w-2xl mx-auto">
                <div className="text-6xl mb-6">🚀</div>
                <h3 className="text-2xl font-bold mb-4 text-textPrimary">
                  {t.projects.noProjects.title}
                </h3>
                <p className="text-textSecondary mb-6">
                  {t.projects.noProjects.description}
                </p>
                <motion.button
                  className="bg-secondary text-primary px-8 py-3 rounded-lg font-medium hover:bg-secondary/90 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t.projects.noProjects.button}
                </motion.button>
              </div>
            </motion.div>
          )}

          {/* Show message when no projects match filter */}
          {projectsData.length > 0 && filteredProjects.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold mb-2 text-textPrimary">
                {t.projects.noResults.title}
              </h3>
              <p className="text-textSecondary">
                {t.projects.noResults.description}
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;