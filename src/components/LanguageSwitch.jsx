import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageSwitch = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <div className="relative">
      <motion.button
        onClick={toggleLanguage}
        className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-transparent border border-textSecondary/30 hover:border-secondary/50 transition-all duration-300 text-textSecondary hover:text-secondary"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Переключить язык"
      >
        <div className="flex items-center space-x-1">
          <span className={`text-sm font-medium transition-colors ${
            language === 'ru' ? 'text-secondary' : 'text-textSecondary/60'
          }`}>
            RU
          </span>
          <span className="text-textSecondary/40">|</span>
          <span className={`text-sm font-medium transition-colors ${
            language === 'en' ? 'text-secondary' : 'text-textSecondary/60'
          }`}>
            EN
          </span>
        </div>
        
        {/* Индикатор активного языка */}
        <motion.div
          className="w-2 h-2 rounded-full bg-secondary"
          animate={{
            x: language === 'ru' ? -8 : 8
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      </motion.button>
    </div>
  );
};

export default LanguageSwitch; 