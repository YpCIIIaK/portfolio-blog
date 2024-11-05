import Sidebar from "../components/Sidebar.jsx";
import { Outlet } from "react-router-dom";

const Components = () => {
    return (
        <div className='min-h-screen flex'>
            <Sidebar />
            <div className="flex-grow pt-[80px]">
                <Outlet />
            </div>
        </div>
    );
};

export default Components;
