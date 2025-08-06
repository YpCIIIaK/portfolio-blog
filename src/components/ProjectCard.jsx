import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ title, description, tech, github, demo, image }) => {
  return (
    <div className="bg-primary border border-textSecondary/20 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-textSecondary mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((item, index) => (
            <span
              key={index}
              className="text-secondary text-sm px-2 py-1 rounded-full border border-secondary"
            >
              {item}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-textSecondary hover:text-secondary transition-colors"
          >
            <FaGithub size={20} />
          </a>
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-textSecondary hover:text-secondary transition-colors"
          >
            <FaExternalLinkAlt size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;