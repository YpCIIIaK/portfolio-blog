import ButtonLink from "../components/ButtonLink.jsx";
import Button from "../components/Button.jsx";
import exblogpost from "../assets/exblogpost.png";
import ExampleLink from "../components/ExampleLink.jsx";
import et from "../assets/et.png"
import ExampleTabs from "../components/ExampleTabs.jsx";
import ModalExample from "../components/ModalExample.jsx";
import ExampleTable from "../components/ExampleTable.jsx";

export const componentsPages = [
    {
        link: 'button-link',
        title: 'Button-link',
        content:`

The ButtonLink component is a styled link that functions like a button.
It uses the React Router Link component to navigate to the "/projects" route when clicked. 
The link features a transparent background that changes to a secondary color on hover, 
providing a visual cue to the user.

## Code Example

\`\`\`jsx
import { Link } from 'react-router-dom';

const ButtonLink = () => {
    return (
        <Link
            to="/projects"
            className="bg-transparent hover:bg-secondary text-secondary hover:text-primary border border-secondary 
            px-6 py-3 rounded transition-colors"
        >
            View My Work
        </Link>
    );
};

export default ButtonLink;
\`\`\`


        `,
        render: ButtonLink
    },
    {
        link: 'button',
        title: 'Button',
        content: `

The Button component is a reusable, styled button designed for submitting forms. 
It features a subtle transition effect on hover, providing a user-friendly interaction. 

By default, it has a type="submit" attribute, making it ideal for use in forms.

## Code Example

\`\`\`jsx
<button
  type="submit"
  className="bg-secondary hover:bg-secondary/90 text-primary px-8 py-3 rounded transition-colors"
>
  Send Message
</button>
\`\`\`
        `,
        render: Button
    },
    {
        link: 'blogs-component',
        title: 'Blogs Component',
        content: `

The BlogPost component and the blogPosts array you've shared work together to display blog post summaries and their detailed content.

Here’s a brief explanation of the main features:

## BlogPost Component

## Props:

The BlogPost component accepts several props:

    >   title: The title of the blog post, displayed as a clickable link.
    >   date: The publication date of the blog post.
    >   excerpt: A brief summary of the blog post's content.
    >   readTime: An estimate of how long it will take to read the post.
    >   tags: An array of tags associated with the blog post, displayed as clickable badges.
    >   slug: A unique identifier for the blog post used in the URL.
    >   and also content: text, code and whatever you want to put in there
## Here Is Code Example
## BlogPost Component

\`\`\`jsx
import { Link } from 'react-router-dom';

const BlogPost = ({ title, date, excerpt, readTime, tags, slug }) => {
  return (
    <article className="border border-textSecondary/20 rounded-lg p-6 hover:border-secondary transition-colors">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold hover:text-secondary transition-colors">
          <Link to={\`/blog//\${slug}\`}>{title}</Link>
        </h3>
        <span className="text-textSecondary text-sm">{date}</span>
      </div>
      <p className="text-textSecondary mb-4">{excerpt}</p>
      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-secondary text-sm px-2 py-1 rounded-full border border-secondary"
            >
              {tag}
            </span>
          ))}
        </div>
        <span className="text-textSecondary text-sm">{readTime}</span>
      </div>
    </article>
    );
};
\`\`\`

## blog post data file

\`\`\`jsx
export const blogPosts = [
  {
    title: 'Understanding React Hooks: A Deep Dive',
    date: 'March 15, 2024',
    excerpt: 'An in-depth look at React Hooks and how they can simplify your React components...',
    readTime: '5 min read',
    tags: ['React', 'Hooks', 'JavaScript'],
    slug: 'understanding-react-hooks',
    content: some content in //\`\`
\`\`\`

![example](${exblogpost})
        `,
    },
    {
        link: 'link',
        title: 'Link',
        content: `

The Link is a component that displays a blog post title.

It utilizes the Link component from react-router-dom to create a navigable link to the blog post's detailed view.

## Code Example

\`\`\`jsx
<h3 className="text-xl font-bold hover:text-secondary transition-colors">
          <Link to={\`/blog//\${slug}\`}>{title}</Link>
</h3>
\`\`\`

Slug is again a prop from a data file

\`\`\`jsx
slug: 'understanding-react-hooks',
\`\`\`
        `,
        render: ExampleLink
    },
    {
        link: 'tabs',
        title: 'Tabs',
        content: `

This Tabs component in React displays a set of tabs with customizable styles and dynamic content. Here’s a breakdown of its functionality: it accepts some props that can be changed, fro example tabs, activetab and e.t.                                                          

## Props:

    >   tabs: An array of objects, each representing a tab. Each object should have name (unique identifier),
        label (display text), and content (content to render when active).
    >   activeTab: A string representing the currently selected tab.
    >   onTabChange: A function that is called when a tab is clicked, used to update the activeTab.
    >   styleType: Optional; controls the style of the tabs. Defaults to "primary".

## Code Example

\`\`\`jsx
import React from 'react';

const Tabs = ({ tabs, activeTab, onTabChange, styleType = 'primary' }) => {
    const baseStyles = 'flex mb-4';
    const tabStyles = \`mr-1 py-2 px-4 transition-all flex items-center justify-center w-32 text-center rounded-lg\`;

    const styleTypes = {
        primary: 'bg-primary text-secondary hover:bg-secondary/10 border border-secondary',
        secondary: 'bg-secondary text-primary hover:bg-secondary/90',
        transparent: 'bg-transparent text-secondary border border-secondary hover:bg-secondary/10',
    };

    return (
        <div>
            <div className={baseStyles}>
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        onClick={() => onTabChange(tab.name)}
                        className=*****
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            <div className="p-4 bg-primary text-textPrimary rounded-lg border border-secondary">
                {tabs.find(tab => tab.name === activeTab)?.content}
            </div>
        </div>
    );
};

export default Tabs;

\`\`\`

Insert code down below into ***** place

![example](${et})

        `,
        render: ExampleTabs
    },
    {
        link: 'modal',
        title: 'Modal',
        content: `

This component is a reusable modal dialog created using React and Framer Motion. 
It displays when the isOpen prop is true, and can be closed by clicking the overlay (outside the modal) or
by pressing the close button (✖). The Modal component accepts children to display its content.

## Code Example

\`\`\`jsx
import React from 'react';
import { motion } from 'framer-motion';

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div
            className="fixed inset-0 flex items-center justify-center bg-primary bg-opacity-80 z-50"
            onClick={handleOverlayClick}
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="bg-primary text-textPrimary rounded-lg shadow-lg p-6 w-full max-w-md relative"
            >
                <button
                    className="absolute top-2 right-2 text-secondary hover:text-secondary/80 transition-colors"
                    onClick={onClose}
                >
                    ✖
                </button>
                {children}
            </motion.div>
        </div>
    );
};

export default Modal;

\`\`\`

        `,
        render: ModalExample
    },
    {
        link: 'table',
        title: 'Table',
        content: `

This is a self-contained, reusable table component in React. It displays structured data in a table format with header and row styling consistent with a primary color scheme, similar to a modal component's styling.

## Code Example

\`\`\`jsx
import React from 'react';

const Table = ({ data, columns }) => {
    const baseStyles = 'min-w-full border border-primary';
    const headerStyles = 'bg-primary text-textPrimary text-left font-semibold p-4 border-b border-secondary';
    const rowStyles = 'p-4 border-b border-gray-300 hover:bg-primary/10';

    return (
        <table className={baseStyles}>
            <thead>
                <tr>
                    {columns.map((column, index) => (
                        <th key={index} className={headerStyles}>
                            {column}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((row, rowIndex) => (
                    <tr key={rowIndex} className={rowStyles}>
                        {columns.map((column, colIndex) => (
                            <td key={colIndex} className="p-4 text-textPrimary">
                                {row[column]}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;

\`\`\`
        `,
        render: ExampleTable
    },
];