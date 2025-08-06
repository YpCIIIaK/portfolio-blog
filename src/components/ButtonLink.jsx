import { Link } from 'react-router-dom';

const ButtonLink = () => {
    return (
        <Link
            to="/projects"
            className="bg-transparent hover:bg-secondary text-secondary hover:text-primary border border-secondary px-6 py-3 rounded transition-colors"
        >
            View My Work
        </Link>
    );
};

export default ButtonLink;