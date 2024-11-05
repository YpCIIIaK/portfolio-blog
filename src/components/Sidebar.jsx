import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { componentsPages} from "../data/componentsPages.js"; // Import componentsPages

const navLinks = componentsPages.map(page => ({
    to: `/components/${page.link}`,
    label: page.title
}));

const Sidebar = () => {
    return (
        <div className="min-h-screen pt-20">
            <motion.div
                initial={{x: '-100%'}}
                animate={{x: 0}}
                transition={{duration: 0.3}}
                className="w-64 bg-primary p-6 shadow-lg"
            >
                <div className="flex flex-col gap-6">
                    {navLinks.map((link, index) => (
                        <Link
                            key={index}
                            to={link.to}
                            className="text-lg text-textSecondary hover:text-secondary transition-colors"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default Sidebar;
