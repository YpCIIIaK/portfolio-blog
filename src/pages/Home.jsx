import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 flex flex-col justify-center min-h-[calc(100vh-80px)]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-secondary mb-4">Hi, my name is</p>
          <h1 className="text-4xl md:text-7xl font-bold mb-4">
            Vladimir Vladimirov
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold text-textSecondary mb-6">
            I build things for the web.
          </h2>
          <p className="text-textSecondary max-w-2xl mb-8">
            I'm a frontend developer specializing in building exceptional digital experiences.
            Currently, I'm focused on building accessible, human-centered products using
            React and modern web technologies.
          </p>
          <div className="flex gap-4">
            <Link
              to="/projects"
              className="bg-transparent hover:bg-secondary text-secondary hover:text-primary border border-secondary px-6 py-3 rounded transition-colors"
            >
              View My Work
            </Link>
            <Link
              to="/contact"
              className="bg-secondary hover:bg-secondary/90 text-primary px-6 py-3 rounded transition-colors"
            >
              Get In Touch
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;