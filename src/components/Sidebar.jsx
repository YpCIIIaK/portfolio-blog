import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom'; // Import NavLink
import { componentsPages } from '../data/componentsPages.js'; // Import componentsPages

const navLinks = componentsPages.map(page => ({
    to: `/components/${page.link}`,
    label: page.title,
}));

const Sidebar = () => {
    return (
        <div className="min-h-screen pt-20">
            <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: 0 }}
                transition={{ duration: 0.3 }}
                className="w-64 bg-primary p-6"
            >
                <div className="flex flex-col gap-6">
                    {navLinks.map((link, index) => (
                        <NavLink
                            key={index}
                            to={link.to}
                            className={({ isActive }) =>
                                `text-lg transition-colors ${isActive ? 'text-secondary' : 'text-textSecondary'} hover:text-secondary`
                            }
                        >
                            {link.label}
                        </NavLink>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default Sidebar;
