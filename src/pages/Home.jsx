import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslations } from '../locales/translations';

const Home = () => {
  const { language } = useLanguage();
  const t = useTranslations(language);

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 flex flex-col justify-center min-h-[calc(100vh-80px)]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-secondary mb-4">{t.home.greeting}</p>
          <h1 className="text-4xl md:text-7xl font-bold mb-4">
            {t.home.name}
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold text-textSecondary mb-6">
            {t.home.subtitle}
          </h2>
          <p className="text-textSecondary max-w-2xl mb-8">
            {t.home.description}
          </p>
          <div className="flex gap-4">
            <Link
              to="/projects"
              className="bg-transparent hover:bg-secondary text-secondary hover:text-primary border border-secondary px-6 py-3 rounded transition-colors"
            >
              {t.home.buttons.viewWork}
            </Link>
            <Link
              to="/contact"
              className="bg-secondary hover:bg-secondary/90 text-primary px-6 py-3 rounded transition-colors"
            >
              {t.home.buttons.getInTouch}
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;