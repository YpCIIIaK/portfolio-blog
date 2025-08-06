import { motion } from 'framer-motion';
import Sidebar from "../components/Sidebar.jsx";
import { Outlet } from "react-router-dom";

const Components = () => {
    return (
        <div className='min-h-screen flex'>
            <Sidebar/>
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 0.5}}
            >
                <div className="flex-grow pt-[80px]">
                    <Outlet/>
                </div>
            </motion.div>
        </div>
);
};

export default Components;
