import { Link } from 'react-router-dom';

const ExampleLink = () => {
    return (
        <h3 className="text-xl font-bold hover:text-secondary transition-colors">
            <Link to='/blog/understanding-react-hooks'>Understanding React Hooks: A Deep Dive</Link>
        </h3>
    );
};

export default ExampleLink;