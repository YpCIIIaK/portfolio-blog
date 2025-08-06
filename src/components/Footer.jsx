import { FaGithub, FaTelegram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-primary py-8 border-t border-textSecondary/20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-textSecondary mb-4 md:mb-0">
            2024 YpCIIIaK
          </div>
          <div className="flex gap-6">
            <a
              href="https://github.com/YpCIIIaK"
              target="_blank"
              rel="noopener noreferrer"
              className="text-textSecondary hover:text-secondary transition-colors"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://t.me/bigboyvova"
              target="_blank"
              rel="noopener noreferrer"
              className="text-textSecondary hover:text-secondary transition-colors"
            >
              <FaTelegram size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

