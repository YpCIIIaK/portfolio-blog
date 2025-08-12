import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { blogPosts } from '../data/blogPosts';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { FaArrowLeft } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslations, useBlogData } from '../locales/translations';

const BlogPost = () => {
  const { slug } = useParams();
  const { language } = useLanguage();
  const t = useTranslations(language);
  const translatedBlogPosts = useBlogData(language);
  
  // Сначала ищем переведённый пост
  let post = translatedBlogPosts.find(post => post.slug === slug);
  
  // Если не найден переведённый пост, используем оригинальный
  if (!post) {
    post = blogPosts.find(post => post.slug === slug);
  }

  if (!post) {
    return (
      <div className="min-h-screen pt-20">
        <div className="max-w-3xl mx-auto px-4 py-16">
          <h2 className="text-2xl font-bold mb-4">{t.blog.postNotFound}</h2>
          <Link to="/blog" className="text-secondary hover:underline">
            {t.blog.backToBlog}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-3xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            to="/blog"
            className="inline-flex items-center text-secondary hover:underline mb-8"
          >
            <FaArrowLeft className="mr-2" /> {t.blog.backToBlog.replace('←', '').trim()}
          </Link>
          
          <article className="prose prose-invert prose-secondary max-w-none">
            <div className="mb-8">
              <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
              <div className="flex items-center gap-4 text-textSecondary">
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
            </div>
            
            <div className="flex gap-2 mb-8">
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="text-secondary text-sm px-2 py-1 rounded-full border border-secondary"
                >
                  {tag}
                </span>
              ))}
            </div>

            <ReactMarkdown
              className="markdown-content"
              components={{
                code({node, inline, className, children, ...props}) {
                  const match = /language-(\w+)/.exec(className || '');
                  return !inline && match ? (
                    <SyntaxHighlighter
                      style={atomDark}
                      language={match[1]}
                      PreTag="div"
                      {...props}
                    >
                      {String(children).replace(/\n$/, '')}
                    </SyntaxHighlighter>
                  ) : (
                    <code className={className} {...props}>
                      {children}
                    </code>
                  );
                }
              }}
            >
              {post.content}
            </ReactMarkdown>
          </article>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogPost;