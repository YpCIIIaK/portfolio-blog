import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslations } from '../locales/translations';
import LanguageSwitch from './LanguageSwitch';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const { language } = useLanguage();
  const t = useTranslations(language);
  
  const links = [
    { id: 1, text: t.nav.home, path: '/' },
    { id: 2, text: t.nav.about, path: '/about' },
    { id: 3, text: t.nav.projects, path: '/projects' },
    { id: 4, text: t.nav.blog, path: '/blog' },
    { id: 6, text: t.nav.components, path: '/components' },
    { id: 5, text: t.nav.contact, path: '/contact' },
  ];

  return (
    <nav className="fixed w-full h-20 bg-primary z-50">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-4 h-full">
        <Link to="/" className="text-2xl font-bold text-secondary">
          VVV
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8">
            {links.map(({ id, text, path }) => (
              <li key={id}>
                <Link
                  to={path}
                  className="text-textSecondary hover:text-secondary transition-colors"
                >
                  {text}
                </Link>
              </li>
            ))}
          </ul>
          <LanguageSwitch />
        </div>

        {/* Mobile Menu Button */}
        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer md:hidden z-10 text-textSecondary"
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {/* Mobile Menu */}
        {nav && (
          <div className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-primary">
            <ul className="flex flex-col items-center">
              {links.map(({ id, text, path }) => (
                <li key={id} className="py-4">
                  <Link
                    onClick={() => setNav(false)}
                    to={path}
                    className="text-2xl text-textSecondary hover:text-secondary"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <LanguageSwitch />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;