import { useState } from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { componentsPages } from '../data/componentsPages.js';

const navLinks = componentsPages.map(page => ({
    to: `/components/${page.link}`,
    label: page.title,
}));

const Sidebar = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredLinks = navLinks.filter(link =>
        link.label.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="min-h-screen pt-20">
            <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: 0 }}
                transition={{ duration: 0.3 }}
                className="w-64 bg-primary p-6"
            >
                <div className="flex flex-col gap-6">
                    <input
                        type="text"
                        placeholder="Search components..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="p-2 text-lg rounded bg-transparent border border-textSecondary focus:outline-none focus:border-secondary text-textPrimary"
                    />

                    {filteredLinks.length > 0 ? (
                        filteredLinks.map((link, index) => (
                            <NavLink
                                key={index}
                                to={link.to}
                                className={({ isActive }) =>
                                    `text-lg transition-colors ${isActive ? 'text-secondary' : 'text-textSecondary'} hover:text-secondary`
                                }
                            >
                                {link.label}
                            </NavLink>
                        ))
                    ) : (
                        <p className="text-textSecondary">No components found</p>
                    )}
                </div>
            </motion.div>
        </div>
    );
};

export default Sidebar;
