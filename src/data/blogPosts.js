export const blogPosts = [
  {
    title: 'Understanding React Hooks: A Deep Dive',
    date: 'March 15, 2024',
    excerpt: 'An in-depth look at React Hooks and how they can simplify your React components...',
    readTime: '5 min read',
    tags: ['React', 'Hooks', 'JavaScript'],
    slug: 'understanding-react-hooks',
    content: `
# Understanding React Hooks: A Deep Dive

React Hooks have revolutionized how we write React components. In this post, we'll explore the most commonly used hooks and their practical applications.

## useState Hook

The useState hook is fundamental for managing state in functional components. Here's a practical example:

\`\`\`jsx
const [count, setCount] = useState(0);
\`\`\`

## useEffect Hook

useEffect helps us handle side effects in our components. It's perfect for data fetching, subscriptions, or manually changing the DOM:

\`\`\`jsx
useEffect(() => {
  document.title = \`Count: \${count}\`;
}, [count]);
\`\`\`

## Custom Hooks

Creating custom hooks allows us to extract component logic into reusable functions:

\`\`\`jsx
function useWindowSize() {
  const [size, setSize] = useState([window.innerWidth, window.innerHeight]);
  
  useEffect(() => {
    const handleResize = () => {
      setSize([window.innerWidth, window.innerHeight]);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return size;
}
\`\`\`

## Best Practices

1. Always use the exhaustive deps ESLint rule
2. Keep hooks at the top level
3. Name custom hooks with 'use' prefix
4. Avoid complex state when possible

React Hooks provide a more direct way to use state and side effects in components. They help us write more maintainable and reusable code while reducing the complexity of our components.
    `
  },
  {
    title: 'Building Scalable React Applications',
    date: 'March 1, 2024',
    excerpt: 'Best practices and patterns for building large-scale React applications...',
    readTime: '7 min read',
    tags: ['React', 'Architecture', 'Best Practices'],
    slug: 'scalable-react-applications',
    content: `
# Building Scalable React Applications

Creating scalable React applications requires careful planning and following established patterns. Let's explore some key concepts and best practices.

## Project Structure

A well-organized project structure is crucial for scalability:

\`\`\`
src/
  ├── components/
  │   ├── common/
  │   └── features/
  ├── hooks/
  ├── pages/
  ├── services/
  ├── utils/
  └── context/
\`\`\`

## Component Design Patterns

### Compound Components

\`\`\`jsx
const Select = ({ children }) => {
  const [value, setValue] = useState(null);
  return (
    <SelectContext.Provider value={{ value, setValue }}>
      {children}
    </SelectContext.Provider>
  );
};

Select.Option = ({ value, children }) => {
  // Option implementation
};
\`\`\`

### Render Props Pattern

\`\`\`jsx
const DataFetcher = ({ render }) => {
  const [data, setData] = useState(null);
  // Fetching logic
  return render(data);
};
\`\`\`

## State Management

Choose the right state management solution:

1. Local state for component-specific data
2. Context for shared state
3. Redux/MobX for complex global state

## Performance Optimization

1. Use React.memo for pure components
2. Implement lazy loading
3. Optimize re-renders with useMemo and useCallback

Building scalable React applications is an iterative process. Focus on maintainability, reusability, and performance from the start.
    `
  },
  {
    title: 'Modern CSS Techniques',
    date: 'February 20, 2024',
    excerpt: 'Exploring modern CSS features and how to use them effectively...',
    readTime: '4 min read',
    tags: ['CSS', 'Web Design', 'Frontend'],
    slug: 'modern-css-techniques',
    content: `
# Modern CSS Techniques

CSS has evolved significantly in recent years. Let's explore some modern techniques that can enhance your web development workflow.

## CSS Grid Layout

CSS Grid provides a powerful two-dimensional layout system:

\`\`\`css
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}
\`\`\`

## CSS Custom Properties (Variables)

Variables make your styles more maintainable:

\`\`\`css
:root {
  --primary-color: #007bff;
  --secondary-color: #6c757d;
}

.button {
  background-color: var(--primary-color);
}
\`\`\`

## CSS Animations

Modern CSS animations can create smooth, performant transitions:

\`\`\`css
.card {
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
\`\`\`

## Container Queries

The future of responsive design:

\`\`\`css
@container (min-width: 400px) {
  .card {
    display: grid;
    grid-template-columns: 2fr 1fr;
  }
}
\`\`\`

Modern CSS provides powerful tools for creating responsive, maintainable, and performant web applications. Stay updated with the latest features to improve your development workflow.
    `
  }
];