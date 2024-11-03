import { Link } from 'react-router-dom';

const BlogPost = ({ title, date, excerpt, readTime, tags, slug }) => {
  return (
    <article className="border border-textSecondary/20 rounded-lg p-6 hover:border-secondary transition-colors">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold hover:text-secondary transition-colors">
          <Link to={`/blog/${slug}`}>{title}</Link>
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

export default BlogPost;