import ButtonLink from "./ButtonLink.jsx";
import Button from "./Button.jsx";
import exblogpost from "../assets/exblogpost.png";
import ExampleLink from "./ExampleLink.jsx";

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

];
