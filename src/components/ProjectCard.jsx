import { FaGithub, FaExternalLinkAlt, FaStar, FaCode } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslations } from '../locales/translations';

const ProjectCard = ({ title, description, tech, github, demo, image, featured = false, status = 'completed' }) => {
  const { language } = useLanguage();
  const t = useTranslations(language);
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    hover: { 
      y: -5,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  const imageVariants = {
    hover: { scale: 1.05 }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'text-green-400 bg-green-400/10 border-green-400/30';
      case 'in-progress': return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/30';
      case 'planned': return 'text-blue-400 bg-blue-400/10 border-blue-400/30';
      default: return 'text-secondary bg-secondary/10 border-secondary/30';
    }
  };

  const getStatusText = (status) => {
    return t.projects.status[status] || t.projects.status.completed;
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      className={`relative bg-gradient-to-br from-primary to-primary/80 border rounded-xl overflow-hidden group cursor-pointer ${
        featured 
          ? 'border-secondary/50 shadow-lg shadow-secondary/10' 
          : 'border-textSecondary/20 hover:border-secondary/30'
      } transition-all duration-300`}
    >
      {/* Featured badge */}
      {featured && (
        <div className="absolute top-4 right-4 z-10">
          <div className="flex items-center gap-1 bg-secondary/20 text-secondary px-2 py-1 rounded-full text-xs border border-secondary/30">
            <FaStar size={12} />
            {t.projects.filters.featured}
          </div>
        </div>
      )}

      {/* Status badge */}
      <div className="absolute top-4 left-4 z-10">
        <div className={`px-2 py-1 rounded-full text-xs border ${getStatusColor(status)}`}>
          {getStatusText(status)}
        </div>
      </div>

      {/* Image container with overlay */}
      <div className="relative h-48 overflow-hidden">
        <motion.img
          variants={imageVariants}
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Floating action buttons */}
        <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <motion.a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary/90 backdrop-blur-sm text-secondary hover:text-primary hover:bg-secondary border border-secondary/30 p-2 rounded-full transition-all duration-200"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithub size={16} />
          </motion.a>
          <motion.a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary/90 backdrop-blur-sm text-secondary hover:text-primary hover:bg-secondary border border-secondary/30 p-2 rounded-full transition-all duration-200"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaExternalLinkAlt size={16} />
          </motion.a>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-textPrimary group-hover:text-secondary transition-colors duration-200">
            {title}
          </h3>
          <FaCode className="text-textSecondary group-hover:text-secondary transition-colors duration-200 mt-1" size={16} />
        </div>
        
        <p className="text-textSecondary mb-4 text-sm leading-relaxed">
          {description}
        </p>
        
        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((item, index) => (
            <motion.span
              key={index}
              className="text-secondary text-xs px-3 py-1 rounded-full bg-secondary/10 border border-secondary/30 hover:bg-secondary/20 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
            >
              {item}
            </motion.span>
          ))}
        </div>

        {/* Links for desktop */}
        <div className="flex gap-4 md:opacity-100 opacity-0 md:block hidden">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-textSecondary hover:text-secondary transition-colors duration-200 flex items-center gap-2 text-sm"
          >
            <FaGithub size={16} />
            {t.projects.buttons.code}
          </a>
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-textSecondary hover:text-secondary transition-colors duration-200 flex items-center gap-2 text-sm"
          >
            <FaExternalLinkAlt size={16} />
            {t.projects.buttons.demo}
          </a>
        </div>

        {/* Mobile links */}
        <div className="flex gap-4 md:hidden">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-transparent border border-secondary text-secondary hover:bg-secondary hover:text-primary text-center py-2 rounded-lg transition-all duration-200 text-sm"
          >
            {t.projects.buttons.code}
          </a>
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-secondary text-primary hover:bg-secondary/90 text-center py-2 rounded-lg transition-all duration-200 text-sm"
          >
            {t.projects.buttons.demo}
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;