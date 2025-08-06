import { motion } from 'framer-motion';
import BlogPost from '../components/BlogPost';
import { blogPosts } from '../data/blogPosts';

const Blog = () => {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-8">Blog</h2>
          <div className="grid gap-8">
            {blogPosts.map((post, index) => (
              <BlogPost key={index} {...post} />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Blog;